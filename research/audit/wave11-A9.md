# Wave 11 — A9 scope-denial and published-claim-decay sweep

Date: 2026-08-10
Role: audit orchestrator (GPT 5.6 Sol, xhigh, owner-delegated)
Result: complete; two prose-only scope corrections on one item

## Exact reread surface

I re-read the complete current text of all 15 A6 repair/source targets, not a
sample:

1. `cex-a-function-with-a-primitive-that-is-not-integrable`
2. `cex-absolute-value-integrable-without-the-function`
3. `cor-taylor-remainder-bound`
4. `ex-integral-test-applied-to-the-p-series`
5. `ex-two-root-x-and-its-unbounded-derivative`
6. `fs-substitution-holds-for-every-integrable-integrand`
7. `rem-darboux-lhopital-taylor-scope`
8. `rem-integral-conventions-and-scope`
9. `thm-additivity-over-subintervals`
10. `thm-first-mean-value-theorem-for-integrals`
11. `thm-ftc-second-part`
12. `thm-integration-by-parts`
13. `thm-linearity-of-the-integral`
14. `thm-monotonicity-of-the-integral`
15. `thm-taylor-peano-remainder`

I also re-read the complete repaired page
`library/real-analysis/properties-of-the-integral-and-the-working-ftc.md` and
the one exact direct consumer of the scope ledger,
`cex-a-function-with-a-primitive-that-is-not-integrable`.

The denial-language entry grep covered `neither`, `no item`, `lacks`, `absent
from`, `silent on`, `nowhere`, `not proved anywhere`, `planned page`, `not
claimed`, `does not`, `nothing here`, `never`, and `none`. Every match was
adjudicated from its complete file and current repository context.

## A9 decisions and execution

Two stale categorical claims occurred in the same non-proof conventions
ledger, `rem-integral-conventions-and-scope`.

1. **Citation-count decay.** Its opening said that it “establishes nothing and
   is cited by nothing,” although the closing Remark of
   `cex-a-function-with-a-primitive-that-is-not-integrable` directly cites it.
   The final sentence says exactly that the item establishes no theorem and
   serves only as a conventions and reading-order ledger.
2. **Page-local integral scope.** Section 1 said no other integral “appears” on
   the page or companion, while section 6 displays the Lebesgue integral only
   to orient the reader to a deferred sharp-FTC record. The final sentence says
   exactly that no other integral is defined or used by a proof on those pages.

Both are scope/prose corrections, not theorem repairs. The item's dependencies,
provenance, generated-risk disposition, mathematical statements, and consumer
interface are unchanged. All other denial-language candidates remain true in
their local or reading-order context, including the absence of a currently
published Taylor integral-remainder theorem and the non-definition of improper
integrals at this reading-order point.

## Independent closure

The first A9 final-text attempt had normalized hash
`6646d6868fd885d91110498681715104ecda61c7161f2ab6d215ee9ac941b6fe` and
was independently Terra-certified. Its exact-current paired judge run then
preserved DeepSeek `keep:true` and Terra's new scope-denial rejection at context
`966d0d1b1bc4223a9b3a961064def89d4da13430dfa7a652e6cc884d5c580fbe`.
That rejection is append-only and adjudicated `confirmed_nonfatal`; it directly
licensed the second A9 narrowing above.

The exact final normalized hash is
`b1c799fd0ff17e431bcc5fa64e18b698ce3f605c4c6a8c16590867cc6d8e3217`.
A fresh read-only GPT 5.6 Terra xhigh/1M certifier returned `CERTIFIED` with
`FINDINGS: NONE`. The final DeepSeek V4 Pro and GPT 5.6 Terra judges both
returned `keep:true` at exact context
`bae50918b2cd1f67bb94ad0168c7c29f51bcae3af7e6f7473d78b016f34050f9`
and judge item hash
`e9d21277062eff21152f0b567aed7ab9d15c13298b8ef70a1c6be4debc48b2f8`.
The pass-only targeted receipt covers exactly this singleton, and the fresh
verification and judge stamps were applied only after those reads.

The formal `post-a8` to `post-A9` impact audit covers one changed interface and
its one direct-citation consumer, with zero errors or warnings. The consumer is
still licensed and was neither edited nor rejudged. No other item or page was
reopened. `git diff --check` passes.

Wave 11 text is now frozen for the Wave 12 dependency barrier.
