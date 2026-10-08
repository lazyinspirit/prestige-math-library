# Bruhat rank/strong-order proof repair round one

This is the new concrete branch root authorized after the boundary reviewer found an invalid inference in the current proof; it does not reset earlier KL or quantum repair caps. The defect was step3.1's attempt to infer u<=v from a chain su<=v and an unrelated cover su→u. Such a cover does not place u below v. Before carriers for the full item,batch7manifest and batch7contract were saved separately.

## Exact correction and independent review

Step2.2 now proves both cross and paired-descent rank lifting. At the only threshold changed by s_i,each descent adds the indicator of its inverse-position window. For paired descents,the only threatened comparison is a prefix in v's window outside u's. That prefix in u contains either both adjacent values or neither. A zero rank gap would violate the rank inequality at threshold i−1 in the both case or i+1 in the neither case. The gap is therefore at least1,giving su<=sv. Threshold0 and thresholdn conventions cover the extreme adjacent pairs.

Corrected step3.1 applies induction to su<=sv,both lengths smaller. The already declared local finite-Weyl Bruhat supplier gives a reduced subword for su in a fixed reduced expression for sv;prefixing s gives a reduced word for u inside a reduced word for v. That independently proved supplier converts this to the required strong chain. The cross case uses u<=sv and the cover sv→v. This is a concise valid induction;the unsupported old cover inference is removed.

The actual `def-bruhat-order-on-a-finite-weyl-group` was read in full,including its5-step proof:strong exchange deletes letters along saturated chains;the ascending simple map preserves covers;induction from a reduced subword gives a saturated-reflection chain;every reduced expression supplies the same order. Its `lem-finite-weyl-strong-exchange-and-deletion` supplier was also read in full. The first sign-changing simple reflection supplies the deleted letter,then the reflection-length criterion and finite-word arguments establish exchange/deletion. These are existing proved local arguments,not an external citation or an unproved assertion in a Definition. Their type-A reflection realization and length normalization are supplied by current step1.1. Root reviewed this exact use and directed retaining it instead of adding a redundant ascending-map lemma.

All claims(a)–(e) were reviewed. The inversion-count reflection-cover computation in2.1 gives rank dominance and rank-matrix antisymmetry. The repaired converse gives(a). Cover grading and rank-matrix transposition give(b). The verified finite-Weyl supplier gives(c) after type-A identification. The existing reduced-subword argument gives both(d)lifting cases;the finite interval-cover union in5.1 gives(e),including the empty union at y=w. No Statement or dependency changed;no newID or source exception is used.

## Finite corroboration and current checks

Independent finite verification compared rank inequalities with explicitly computed transposition-cover closure for all 533417 ordered permutation pairs through S6. It checked paired/cross lifting and both Statement(d)implications through S6,all 3137 reduced expressions through S5,and interval-cover unions including empty diagonal unions through S4. Every check passed;these computations corroborate the all-n proof rather than replacing it. Code and exact counts are in finite-check.py/json.

Final scoped checks pass:proof-layout1item6steps0defects;precheck1proof0failures;render1item0errors/0warnings;strictbatch7contracts25/25;content25items;manifest-deps25items0normalized/0errors;focused25-item depcheck0errors/0warnings. Final full-owned batch6–8 boundary audit remains568rows0templates0contradictions,with the same one genuinely excluded-empty strict-interval review. Commands/outputs are recorded in this directory.

`interface-preservation.json` confirms the full Statement and deps line are byte-identical,all previous boundary rows are unchanged,and every other batch7contract entry is unchanged. Thus no mathematical consumer interface edit or new broad consumer writing is required. Root must refresh actual source-context evidence for the R/KL downstream closure in its stable dependency-ordered recertification;this report does not stamp native origins,item acceptance or audit completion.

Only the item,its exact batch7manifest strategy and contract derivation/citation evidence were edited. No runtime,decision,certificate,globalplan,ledger,coverage,otheritem,origin or mtime-control writes occurred. The metadata6–8lane is also complete. This writer is drained;round2 is reserved for a concrete new independent review/gate finding.

Current raw hashes:

- `items/lem-bruhat-order-basic-properties-for-permutations.md`: `b2150dbf503cbfe74bc8668a78d64d59da2058d1fab15859dbe1c5ebef41d430`
- `research/frontier-43-complex-representation-15-batch-7.pages.json`: `33798c8eeb88aa9a231d4229cba7ec0ebe1fe6e8a486612cb7897f4ebb1ed4cc`
- `research/frontier-43-complex-representation-15-batch-7.proof-contracts.json`: `3bedf8342b572e9add50ad2352304e70654db3b5e40d2ee560fe4bf4ad72a0b3`
