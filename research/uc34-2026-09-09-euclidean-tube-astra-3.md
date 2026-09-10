# Euclidean tube repair receipt

Completed 2026-09-10 Australia/Sydney; filename retains the requested audit-series date. One-item owner-authorized local repair, no judge/shared/live changes.

## thm-euclidean-tubular-neighbourhood-theorem

Disposition: locally repaired, preserving the full positive smooth radius and diffeomorphism onto an open neighbourhood of an arbitrary embedded Euclidean submanifold, including the empty case and dimension zero.

- Before SHA-256: `5fcc5da13259ee289eb5de0601939099231ed1cd8d28289aca9494dfe8b74b25`.
- After SHA-256: `5032416cc70b0e32d7d9cdfa3c9f3dcbb33a515f77cd7270c8027f3fb0c36d89`.
- Changed item: `items/thm-euclidean-tubular-neighbourhood-theorem.md` only.

### Defect and complete repair

The previous proof chose an arbitrary indexed family of bundle radii and then treated a partition subordinate to the associated cover as indexed by those same cover members. It also left the countable-choice contracts of the normal-bundle interface and repaired radius construction unqualified. The partition/refinement/radius-selection portion is removed, not merely given a new citation.

The statement, given data and facts now explicitly assume CC and declare `def-countable-choice`. Its exact uses are the actual normal-bundle manifold interface and the repaired variable-radius lemma's proper-exhaustion construction. The original audit stamp is replaced by honestly scoped delegated local-repair evidence, with no independent judge claim.

The proof defines the same capped eligible-radius supremum r used by the repaired variable-radius lemma. Nonemptiness follows from the local inverse at the zero section and the normal bundle's induced product topology. A real `a<r(p)` is eligible because some larger eligible radius exists; restricting its diffeomorphism proves eligibility at a. The cap is imposed inside the supremum's set.

The proof explicitly takes the **particular smooth radius constructed in the earlier lemma's proof**, not merely an arbitrary existential injectivity radius. Its proof steps 4.1–6.1 establish `0<delta(p)≤r(p)/4` by compact sublevel minima and explicit one-variable bump normalization. This is an actual used earlier proof clause; the lemma's statement alone exports only smooth injectivity and would not suffice for the next argument.

Local invertibility is then independently proved in this consumer: for `(p,v)` in the tube, choose `a=(||v||+r(p))/2`, strictly between the vector length and r(p). Eligibility makes E a diffeomorphism on the open set V_a(p), which contains `(p,v)`. Thus E is a local diffeomorphism at **every tube point**, not only along the zero section. The proof does not infer derivative invertibility from injectivity.

The strict inequality defining the tube makes it open. Restrict the local inverses to this open tube; the earlier lemma gives injectivity. Consequently its image is open, contains S through the zero section, and the local smooth inverses agree to give a global smooth inverse. The empty case uses the empty radius and empty open image. No compactness/completeness/positive-dimension assumption or later Whitney theorem is introduced.

### Actual suppliers and source

Read the full original target and the actual normal-addition definition, its local-diffeomorphism proof, the manifold inverse-function supplier, the explicit-CC orthogonal-normal-bundle identification, and the newly repaired variable-radius proof. The latter's complete local construction and earlier exhaustion/step/sum interfaces were checked in the immediately preceding task; receipt: `research/uc34-2026-09-09-variable-radius-astra-3.md`. The use of its quantitative proof bound is explicitly named in this target's L3 and steps 2.1–4.1, making this dependency auditable.

Authoritative full proof read: Lee, *Introduction to Smooth Manifolds*, second edition, Theorem 6.24, pp. 139–140, and adjacent normal-bundle setup, in `/tmp/batch9-sources/lee-all.txt`. [Full source](https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html). Lee's proof supplies the capped radius, smaller eligible-neighbourhood reasoning and local-inverse gluing. Its tube radius need only be continuous; the smooth strengthening here is obtained from the explicit already repaired supplier, not attributed to an absent source claim.

### Dependencies and checks

Final direct dependencies, all published and earlier:

- `def-normal-addition-map-for-a-euclidean-submanifold`: A455 item 14.
- `lem-normal-addition-is-a-local-diffeomorphism-along-the-zero-section`: A455 item 15.
- `lem-variable-radius-injectivity-for-normal-addition`: A455 item 16.
- `def-countable-choice`: A18 item 9.

Removed: `thm-smooth-partitions-of-unity-exist-on-manifolds`. No new general tubular, partition, Urysohn, or Whitney supplier.

Explicit-path precheck PASS (1 item, 0 failing), renderer YAML/real KaTeX PASS, canonical earlier-order/publication and declared-wikilink check PASS (4 dependencies, 0 errors), scoped `git diff --check` PASS. No numerical test or format gate is offered as a substitute for the mathematical argument.

Parent handoff: reconcile this item's canonical dependency row and CC propagation. Its direct consumers need clause-specific impact review, not blanket defect classification. No consumer or shared file was edited; the general-ambient tubular theorem remains outside this repair.
