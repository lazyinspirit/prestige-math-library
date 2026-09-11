# Frontier-22 published Prokhorov and weak-convergence audit

Date: 2026-09-11

## Scope and deduplication

This bounded audit follows the exact published interfaces used by the active
Lévy-continuity and Cramér--Wold arguments: Polish spaces, weak convergence,
tightness, compact-law subsequences, Portmanteau, Prokhorov, tightness of a
convergent sequence and continuous mapping. All 17 classified target files and
the used complete-remetrisation clause were read. This is not a full audit of
every weak-convergence consumer or every transitive RMK supplier.

Before classification, the whole canonical ledger and index were searched by
each exact ID, title wording, aliases, the weak-convergence/tightness/
Portmanteau/Prokhorov/RMK mechanisms and all declared supplier IDs.
`def-polish-space` had one U-P row; the other 16 targets were unclassified.
The already A-P complete-remetrisation item is not duplicated: the Polish
definition uses only its sound definition clause, not its defective
complete-subspace converse. No published item or workflow state was edited.

## Bounded no-repair-needed dispositions

| Item | SHA-256 | Exact disposition |
|---|---|---|
| `def-separable-space` | `eef729335603a8796accfcce6ffba1b8d0687e9a19d881c3b37c0c94cba389c7` | Existence of an at-most-countable dense subset and meeting every nonempty open set are equivalent and correctly stated. New bounded clear. |
| `def-polish-space` | `b4af76b1ba15f6f8092c2a6dce1508daa5ec6730495a3b4bcde58ab0f0075d5a` | Separable plus existence of a compatible complete metric is the correct property-only definition. Its use of `lem-complete-remetrisation` is limited to that sound initial definition and does not import the lemma's recorded CC converse defect. U-P to bounded clear; prior cross-category mention retained. |
| `def-borel-probability-law-on-a-polish-space` | `121a5742f457ca822d0cb7d4332c0e315f41f69ddc3427c499c3504d58903244` | A probability on the topology's Borel sigma-algebra is well defined independently of a subsequently fixed compatible complete metric; the empty-space boundary is correct. New bounded clear. |
| `def-tight-family-of-probability-measures` | `a493ee323a7ac3f68f5f83f9faeccf4d3724d2edaee2a89fd171240c90dd41ee` | One compact set is correctly required uniformly over the family, and the empty-family convention is sound. New bounded clear. |
| `thm-complete-and-totally-bounded-implies-compact` | `3db253689999fb79b9380bb163cbe7259fc12b7aa88077020fbccc926cb86aa9` | Countable Choice is directly stated, declared and used once to select listed finite nets. The canonical least-ball recursion gives a Cauchy center sequence and the open-cover contradiction. New bounded clear. |
| `thm-bolzano-weierstrass` | `a97b204724046d4ec8802693256655dc66dacc2ed74c349b03cdc46078518bc6` | A monotone subsequence remains bounded and therefore converges; this uses no family selection or choice principle. New bounded clear. |
| `lem-countable-uniformly-dense-tests-on-a-compact-metric-space` | `14bba7f661fca43e7a838717523c4eca02b4bf954cc1556ff1f925d6dacfc3a9` | Full AC is stated/declared and selects listed finite nets. Rational finite minima of distance cones form a countable family, and the inf-convolution/net estimates give uniform density. New bounded clear. |
| `thm-every-borel-probability-on-a-polish-space-is-tight` | `6c4531063f773a63a87ca477ca73c036453248646986b87529fb44b3d3bc7c6d` | Inner regularity immediately gives singleton-family tightness. The explicit dense-ball construction is also valid under the stated AC, with a closed complete totally bounded core. New bounded clear. |
| `lem-laws-commute-with-measurable-maps` | `f40db4e7096d36735c862d39c428ffec523fa78c044e193280a1d87b1ca8931b` | Composition measurability and the identity `(g\circ X)^{-1}=X^{-1}\circ g^{-1}` prove the pushforward-law formula. New bounded clear. |

## Audited impacts pending existing repairs

| Item | SHA-256 | Exact path and repair |
|---|---|---|
| `def-weak-convergence-of-borel-probability-measures` | `2b7a426597d45a52fcd202b25b7dbfa017943f7178c8181a4e7180f674694983` | The bounded-continuous-test definition is standard and its finite-integral estimate is correct, but those integrals use A-P `def-integrable-real-and-complex-functions-and-their-integrals`. Apply the common finite zero-complement integral repair. New A-P impact. |
| `def-relative-sequential-compactness-for-weak-convergence` | `ca8e8c2eee9cb5cfe686f3e1aace8afc234ccad9e72fd27d059c7908e659ad78` | The same-state-space, outside-family limit convention is precise, but it directly embeds the affected weak-convergence definition. Revalidate after the common repair. New A-P impact. |
| `thm-rmk-positive-functional-is-integration-against-its-representing-measure` | `13643613e25ef878b4b866099961bae4e99111a60607da22c9ecc82671a90317` | Truncated layers and the compact-set formula squeeze the functional and integral values with error `epsilon*mu(K_0)`; the calculation is sound. Its integral side uses the affected simple/nonnegative-integral foundation. Apply the common repair; the prior outer-content A-R repair remains separate and valid. New A-P. |
| `lem-probability-laws-on-a-compact-metric-space-have-weakly-convergent-subsequences` | `d8b4ec43ea76b21b68b508e33cf99f705dfe0e0ee7c3977931a23dcfc956fafc` | Full AC is stated and used for nested subsequence selection. Dense tests extend convergence to every continuous function, and RMK supplies the probability limit. The proof directly uses the affected weak-convergence and RMK integration interfaces above. New A-P impact. |
| `thm-portmanteau-theorem` | `36d081b6b7be3946433841cd6e431490d06c6142cffa76ca02330ed9913f6c73` | Lipschitz closed-set cutoffs, complements, continuity sets and finite atom-avoiding level partitions correctly prove all equivalences. The closed-set limit directly invokes A-P dominated convergence, and the test integrals use the common integral foundation. New A-P impact. |
| `thm-prokhorov-tightness-theorem-on-polish-spaces` | `05980728c7e802c7bd2127a7fbc0871d889c88ec75a3d9efd6dec5a0e8e4c750` | The embedded compact-law limit is concentrated on a countable union inside `e(S)`, so no Borel image assumption is hidden; the reverse dense-ball construction gives a complete totally bounded compact core. Full AC is stated/declared and covers the displayed selections. The proof directly uses the two outline-only A-P Hilbert-cube suppliers, the affected compact-law lemma and Portmanteau. Install their recorded elementary repairs and revalidate. New A-P impact. |
| `cor-weakly-convergent-sequences-are-tight` | `a0e034b78541a05ae0990bd5c5bcf777e4150e6093d4262f3c621b4ee76fee94` | Every sequence from the displayed countable family has either a constant subsequence or a canonically increasing-index subsequence converging to the given limit. The corollary directly invokes affected Prokhorov; its AC assumption/dependency is explicit. New A-P impact. |
| `thm-continuous-mapping-theorem` | `68f4f9c01105a59877b889b4fb1ab856924d8a91873f2162391dd7027a0ea044` | The discontinuity set is Borel via oscillation neighborhoods, and the closure of a closed-set preimage differs only inside that null set. The proof directly invokes affected Portmanteau; the law-pushforward clause is clear. New A-P impact. |

## Frontier impact and limits

Root was notified immediately. Active Lévy-continuity and Cramér--Wold proofs
use Prokhorov, weak convergence and continuous mapping. The existing common
integral repair plus the short Hilbert-cube metric/embedding estimates recorded
in the standard-Borel audit cover these exact paths. No distinct mathematical
blocker, new supplier or theorem pair was found.

No external source retrieval was needed because the proof questions were
resolved from the complete local arguments and previously recorded repairs.
This audit does not certify every weak-convergence consumer or the complete RMK
and integration closures.
