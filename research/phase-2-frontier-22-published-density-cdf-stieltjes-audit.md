# Frontier-22 published density, CDF and Stieltjes audit

Date: 2026-09-11

## Scope and deduplication

This bounded audit reads three high-use published suppliers from the active
probability author report: integration against a density, extended-real
arithmetic/lattice measurability and the probability-law/CDF correspondence.
The last target's Lebesgue--Stieltjes existence, correspondence and uniqueness
suppliers were then read completely. This is not a census of all measure or CDF
consumers.

Before classification, the whole canonical ledger and bounded index were
searched by each exact ID, title, alias, the density/CDF/Stieltjes mechanisms,
the Countable Choice supplier and the measure-uniqueness supplier IDs. The
three initial targets each had exactly one U-P row and move rather than
duplicate. The three Stieltjes suppliers were unclassified. No published item
or workflow state was edited.

## Bounded clear

| Item | SHA-256 | Disposition |
|---|---|---|
| `thm-arithmetic-and-lattice-operations-preserve-measurability` | `52241e90f5b01555ecdb906aa229956f7ce9c572378b062c87bf423cb6873d4b` | Threshold identities prove scalar, max/min and pointwise-defined sum measurability. Positive products handle finite/infinite values under the explicit zero-times-infinity convention; positive/negative parts then give the general product without undefined infinity subtraction. U-P to bounded clear. |

## Pending repair

| Item | SHA-256 | Exact defect or affected clause and repair |
|---|---|---|
| `thm-integration-against-a-density` | `ac83c91136f82ef30ba01cdcc49f310e2802429271021e4f955fe75015afd96e` | The simple-to-MCT proof directly uses the already A-P density measure, nonnegative additivity/order, simple agreement and MCT chain. Proof 2.1 also puts its citation and terminator before the displayed conclusion; move them to the step end. U-P to A-P. |
| `thm-existence-of-the-lebesgue-stieltjes-measure` | `295f28de7eefae611e93154b4a2e4040490feec38eec220f12d55aaab6358e7f` | The extension and compact-finiteness proof is sound and its Caratheodory supplier declares CC, but this theorem itself explicitly assumes Countable Choice without declaring `def-countable-choice` as a dependency. Add that direct rule-11 edge. New A-P. |
| `thm-uniqueness-of-the-lebesgue-stieltjes-measure-on-r` | `c968a544abc2531dd9c54999974a0c821273f3c692047ec0892493aa326b1dda` | Proof 1.1 sets `P={(a,b]:a<b}` and calls it a pi-system, although disjoint interval intersections are empty and the empty set is not in `P`. Replace it by `P union {emptyset}`; generation and the stated finite exhaustion are unchanged, so the uniqueness supplier applies. New A-P. |
| `thm-lebesgue-stieltjes-correspondence-with-distribution-functions` | `fa03c7b416aa7e5a4efb7a795078f2d8013de4e82c14c8b08c7e00a5f54d9b88` | The interval/right-continuity arguments are sound after the preceding uniqueness repair. The theorem explicitly assumes Countable Choice but omits the direct `def-countable-choice` edge, and it uses the affected existence/uniqueness suppliers. Add the edge and repair the pi-system upstream. New A-P. |
| `thm-probability-law-and-distribution-function-correspondence` | `56197a1d4e7e21c3b881b91f3c662b48a4779b7b5649e80c1e1cdd2b150e076b` | The law-to-CDF and converse arguments are mathematically sound after the Stieltjes repair. This theorem also explicitly assumes Countable Choice without declaring its direct dependency, and the converse/uniqueness uses the affected Stieltjes correspondence. Add `def-countable-choice` and repair upstream. U-P to A-P. |

## Frontier impact and limits

Root was notified immediately. Active rational conditional-distribution
functions use the probability-law correspondence for unique fibre measures.
Their AC assumption covers the missing declaration mathematically, and the
one-line family repair `P union {emptyset}` supplies the uniqueness step. No new
pair is needed. Integration against a density is also active but needs only the
already common integral repair.

No external source retrieval was needed because the defects are exact local
proof/dependency facts. This audit does not claim to cover every consumer of
density integration or Lebesgue--Stieltjes measures.
