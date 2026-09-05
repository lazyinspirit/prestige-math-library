# Final-adjudicator evidence: `thm-conical-limits-do-not-suffice-in-the-enriched-setting`

Disposition: `repaired`

Source status: `familiar`. No external verification was needed. The distinction between conical constant-unit weights and arbitrary enriched weights, and cotensors as one-object weighted limits, is standard enriched-category theory familiar to the final adjudicator.

## Independent review

I inspected the current theorem and all three dependencies then listed; the A/B enriched-category page pair; the batch-9 manifest, coverage, notes, item and merged proof contracts, boundaries, and risk review; the Step-6/Step-7 context; both frozen judge rejections; both exact Alpha adjudications; and both Alpha repairs.

The first frozen rejection correctly found that failure of constant enriched functors on arbitrary enriched categories does not show failure of the conical construction, whose constant-unit weight is defined on a free enriched category. Alpha's first repair moved to a genuine nonunit weight in `Ab`.

The second frozen rejection correctly found that a nonunit weight does not imply its representing object cannot also be obtained as a conical limit of another diagram. Indeed, when the cotensor exists, `(Z/2) pitchfork C` can be the conical equalizer of `2_C` and `0_C`. Alpha's terminal repair narrows the theorem to the valid structural claim: conical weights are a proper subclass of all enriched weights, and it explicitly disclaims the invalid stronger conclusion about alternative constructions of representing objects.

The proof of the narrowed statement is correct. A conical problem uses the constant tensor-unit weight, so over `Ab` its weight has value `Z`. A cotensor is a one-object weighted-limit problem with arbitrary base object as weight. Choosing `Z/2` gives a legitimate weight not isomorphic to the conical `Z` weight, and its specified universal property

$$\mathcal B(B,(\mathbb Z/2)\pitchfork C)\cong[\mathbb Z/2,\mathcal B(B,C)]$$

is therefore a nonconical weighted problem. This proves proper inclusion of weight classes. It neither requires that every such representing object exist nor forbids an existing one from also representing a conical construction.

## Independent item and carrier repair

The terminal proof no longer uses the theorem about failure of arbitrary constant enriched functors, but the item retained it as a dependency and `[L3]` fact. I removed that unused dependency/fact, leaving exactly the conical-weight and cotensor definitions used by the proof.

The batch manifest still had the rejected stronger title, omitted the cotensor dependency, and retained the unused constant-functor dependency. Both proof contracts retained `[L3]`, the pre-terminal derivations, the old title in every boundary record, and the invalid risk rationale. I synchronized the manifest, boundary/risk records, and regenerated both exact contract entries. No dependency item was edited, so no owner-prerequisite-repair licence is required.

## Focused checks

- Item `precheck` passed.
- Strict batch-9 proof-contract validation selected on this item passed with zero errors and zero warnings.
- Citation fidelity and boundary audit produced no finding for this item. Their batch-wide fail modes currently report stale quotations and heuristic boundary candidates only for later queued enriched-Yoneda/density items, which this serial review has not yet adjudicated.
- Item and page/manifest render checks passed.
- Repository dependency checking passed, with only unrelated repository-wide warnings.
