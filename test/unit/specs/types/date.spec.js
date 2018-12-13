import dateType from '@/components/types/date'

describe('date type', () => {
  describe('compare', () => {
    it('should compare dates correctly', () => {
      expect(dateType.compare('20001211', '20001112')).to.equal(1)
    })

    it('should compare dates correctly with custom format', () => {
      expect(dateType.compare('20001211', '20001112', {inputFormat: 'yyyyddMM'})).to.equal(-1)
    })

    it('should compare null date as epoch', () => {
      expect(dateType.compare('20001211', undefined, {inputFormat: 'yyyyddMM'})).to.equal(1)
    })

    it('should compare null date as epoch', () => {
      expect(dateType.compare(undefined, '20001211', {inputFormat: 'yyyyddMM'})).to.equal(-1)
    })
  })

  describe('format', () => {
    it('should format dates correctly', () => {
      expect(dateType.format('20001012', {inputFormat: 'yyyyddMM', outputFormat: 'Do MMM yyyy'})).to.equal('10th Dec 2000')
    })

    it('should format dates correctly', () => {
      expect(dateType.format('20001012', {inputFormat: 'yyyyMMdd', outputFormat: 'Do MMM yyyy'})).to.equal('12th Oct 2000')
    })
  })
})
