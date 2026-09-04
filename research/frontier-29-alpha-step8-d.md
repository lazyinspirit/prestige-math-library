# frontier-29 — Step 8 adjudication, group d

## Summary

Adjudicated all 47 exact rejection tuples for batches 11, 12, and 17: 32
`confirmed_fatal`, 13 `confirmed_nonfatal`, and 2 `false_positive`. Only the
32 confirmed-fatal items were edited. Every fatal tuple has one matching
defect-ledger row (`frontier-29-A8-d-001` through
`frontier-29-A8-d-032`) and is a rejudge target. There were no incoming
alerts, outgoing cross-group findings, or published-item repairs.

The exact `(id, model, context_sha256, item_sha256)` records are append-only
rows in `research/frontier-29-judge-adjudications.jsonl`. The
`item_sha256` value on each row is the pre-edit guard-form hash.

## Sources consulted

- Charles Weibel, *An Introduction to Homological Algebra*, Chapter 2,
  [Derived Functors](https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf):
  comparison lifts induce choice-independent homology maps; projectives are
  acyclic for right-exact functors; and acyclic resolutions compute derived
  functors. These statements were used to distinguish genuine missing
  hypotheses and inflated comparison claims from local proof omissions.
- Vidit Nanda, [Computational Algebraic Topology, Chapter 3: Orientations and
  Boundaries](https://people.maths.ox.ac.uk/nanda/cat/TDANotes.pdf): a coherent
  ordering of vertices supplies the preferred oriented generators and face
  orderings used in simplicial chains. This supports the repaired finite-support
  ordered-basis prism argument.
- Ivo Terek, [Smooth Manifolds](https://web.williams.edu/Mathematics/it3/teaching/manifolds.pdf):
  the implicit-function solution has the same regularity as the input map.
  This confirms that the smooth-parameter completion lemma is true and that
  its weak local citation is a nonfatal, immediately closable regularity gap.
- Liviu Nicolaescu, [An Invitation to Morse Theory](https://www3.nd.edu/~lnicolae/Morse2nd.pdf):
  perfectness is a comparison between the Morse polynomial and topological
  Betti data, not merely the local calculation of two nondegenerate critical
  points. This supports narrowing the sphere example to the Morse and excellent
  conclusions it actually defines and proves.
- The Stacks Project, [Injectives](https://stacks.math.columbia.edu/tag/0134):
  the extension-property definition of an injective object. The dual-numbers
  counterexample additionally verifies injectivity of its displayed module
  directly through the coinduced-module isomorphism.

## Exact adjudications

| item | outcome | adjudication and disposition |
|---|---|---|
| `cex-l-zero-of-a-non-right-exact-functor-need-not-recover-the-functor` | `confirmed_fatal` | [L3] falsely made right exactness necessary for every individual recovery. Rephrased it as the sufficient hypothesis of the cited recovery theorem; the explicit counterexample now shows only that the theorem cannot omit the hypothesis uniformly. Rejudge. |
| `cor-index-and-coindex-swap-under-negation` | `confirmed_nonfatal` | The proof should first state $d(-f)_p=-df_p=0$ before writing the Hessian of $-f$. This is an immediate one-line proof gap; the claim and computation are correct. No edit. |
| `def-acyclic-object-for-a-left-exact-functor` | `confirmed_fatal` | The target was not assumed abelian, so the displayed right-derived object was not typed. Required an additive left-exact functor between abelian categories. Rejudge. |
| `def-acyclic-object-for-a-right-exact-functor` | `confirmed_fatal` | The cited theorem gives a natural isomorphism, not the asserted canonical identification; the target was also not typed as abelian. Corrected both. Rejudge. |
| `def-balanced-derived-bifunctor` | `confirmed_fatal` | Naturality was asserted without the inherited choice hypothesis, and the target and resolution domains were not typed. Added abelian categories, explicit supplied domains, Dependent Choice, and the displayed two-variable comparison. Rejudge. |
| `def-induced-simplicial-chain-map` | `confirmed_fatal` | The title called degreewise homomorphisms a chain map before boundary compatibility had been proved. Renamed the construction as an induced graded homomorphism and explicitly deferred chain-map status to the next lemma. Rejudge. |
| `def-left-derived-map-relative-to-resolution-data` | `confirmed_fatal` | The morphism endpoints were not restricted to the datum domain, and the degree was not quantified. Added the domain, abelian target, endpoint membership, and $n\in\mathbb Z$. Rejudge. |
| `def-right-derived-map-relative-to-resolution-data` | `confirmed_fatal` | The morphism endpoints were not restricted to the datum domain, and the degree was not quantified. Added the domain, abelian target, endpoint membership, and $n\in\mathbb Z$. Rejudge. |
| `def-simplicial-chain-groups-and-boundary` | `confirmed_fatal` | At $n=0$ the alternating formula produced an undefined empty bracket in $C_{-1}=0$. Defined $\partial_0=0$ separately and restricted the deletion formula to $n\ge1$. Rejudge. |
| `ex-a-contractible-simplicial-cone` | `confirmed_nonfatal` | The chain contraction alone does not state the topological contraction, but the latter is the immediate barycentric straight-line contraction to the cone vertex. The title is true; this is a local proof omission. No edit. |
| `ex-a-contravariant-functor-derived-via-the-opposite-category` | `confirmed_fatal` | The example invoked the relative construction without supplied data or an object in its domain. Added $P$, its domain, $A$ in that domain, and the resulting typed formula. Rejudge. |
| `ex-an-acyclic-resolution-that-is-not-an-injective-resolution` | `confirmed_nonfatal` | Its cited projective-acyclicity proposition assumes Dependent Choice, but acyclicity here follows directly because the identity functor preserves the displayed exact complex. This is the same local gap independently recorded at Step 7. No edit. |
| `ex-height-on-the-sphere-is-a-perfect-morse-function` | `confirmed_fatal` | “Perfect” was neither defined nor proved by the local calculation. Narrowed the title and body to the proved Morse and excellent properties. Rejudge. |
| `ex-independence-of-two-comparison-lifts-on-homology` | `confirmed_fatal` | $P$, $F$, their categories/domains, endpoint membership, and Dependent Choice were absent, making the displayed derived maps ill-typed. Added the full setup. Rejudge. |
| `ex-simplicial-homology-of-the-tetrahedron-boundary` | `confirmed_nonfatal` | Equal subgroup rank does not imply equality, so the proof should explicitly show that the three selected face boundaries form a saturated basis of $Z_1$. This is a local finite boundary-matrix computation and the homology result is correct. No edit. |
| `ex-the-left-derived-functors-of-an-exact-functor` | `confirmed_nonfatal` | The cited degree-zero theorem carries Dependent Choice, but the displayed objectwise result follows directly from exactness of $F$ on the chosen resolution. The claim is correct and the missing local derivation is immediate. No edit. |
| `ex-the-right-derived-functors-of-hom-from-a-fixed-object` | `confirmed_fatal` | Both general cited results require Dependent Choice and the example supplied no replacement argument. Added the inherited hypothesis. Rejudge. |
| `ex-two-resolution-data-and-their-change-isomorphism` | `confirmed_fatal` | It omitted the functor, categories, common domain membership, and Dependent Choice required to form the displayed natural isomorphisms. Added all of them and removed an unsupported canonical qualifier. Rejudge. |
| `fs-an-additive-functor-has-l-zero-naturally-isomorphic-to-itself` | `confirmed_fatal` | The calculation named no supplied datum, so $L_0^P$ was undefined. Fixed a datum assigning the displayed standard resolution and used $L_0^P$ consistently. Rejudge. |
| `fs-derived-functors-in-two-variables-are-automatically-balanced` | `confirmed_fatal` | Absence of comparison data from a proposition does not prove nonexistence. Replaced the non-refutation by an explicit bifunctor over $R=k[\varepsilon]/(\varepsilon^2)$ whose degree-one candidates are respectively $0$ and $k$. Rejudge. |
| `fs-enough-projectives-implies-a-canonical-resolution-for-every-object` | `confirmed_fatal` | The cited item concerns nonunique comparison maps after resolutions are chosen and did not refute unique objectwise selection. Exhibited two distinct projective resolutions of $\mathbb Z/2$ and kept comparison-map nonuniqueness as a separate supporting point. Rejudge. |
| `fs-the-definition-of-a-derived-map-may-depend-on-the-chosen-comparison-lift` | `confirmed_fatal` | Both cited independence theorems require Dependent Choice. Added that hypothesis to the statement and Given block. Rejudge. |
| `lem-coordinate-change-congruence-for-the-critical-hessian` | `confirmed_nonfatal` | The proof omits the coordinate identity turning $df_p=0$ into $Dg_{x(p)}=0$. This follows immediately by evaluating $df_p$ on the coordinate basis; the congruence calculation is correct. No edit. |
| `lem-nondegenerate-critical-points-are-isolated` | `false_positive` | The exact cited inverse-function theorem is stated for a map on an open subset $U\subseteq\mathbb R^n$, so it applies directly to $G:x(U)\to\mathbb R^n$. The compressed Facts paraphrase does not invalidate the application. No edit. |
| `lem-objectwise-comparison-of-two-projective-resolution-data-induces-an-isomorphism-on-derived-objects` | `confirmed_fatal` | “Every object” exceeded the common supplied domain, and the target was not typed as abelian. Restricted the object and typed the functor between abelian categories. Rejudge. |
| `lem-one-variable-completion-of-the-square-with-a-smooth-parameter` | `confirmed_nonfatal` | The local IFT item only states $C^1$ regularity, while the proof asks for a smooth solution. For smooth input, its displayed derivative formula bootstraps the solution through all $C^r$ classes. This is an immediate regularity step, not a false claim. No edit. |
| `lem-the-simplicial-augmentation-is-a-chain-map` | `confirmed_nonfatal` | Step 2.1 uses the already proved ordinary identity $\partial^2=0$ without listing it as a dependency. The only new check is $\varepsilon\partial_1=0$, which step 1.1 proves. Local citation gap; no edit. |
| `prop-a-bifunctor-can-be-derived-in-either-variable-when-the-relevant-resolution-data-are-supplied` | `confirmed_fatal` | The target was not assumed abelian and the datum domains were not named, so neither candidate was typed. Added three abelian categories, $P$ and $I$ with their domains, and restricted both evaluations accordingly. Rejudge. |
| `prop-a-finite-simplicial-complex-has-compact-hausdorff-realization` | `confirmed_nonfatal` | Step 2.2’s arbitrary-open-extension union can leak across simplices, as independently recorded at Step 7. For finite $K$, the weak topology equals the Euclidean subspace topology by a standard finite closed-simplex gluing argument. The claim is true and the repair is a local topology argument. No edit. |
| `prop-a-natural-transformation-induces-natural-transformations-of-left-derived-functors` | `confirmed_fatal` | The target was not assumed abelian, so both homology objects and the cited functoriality theorem were untyped. Required functors between abelian categories. Rejudge. |
| `prop-change-of-injective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws` | `confirmed_fatal` | $F$ and its categories were never quantified although every displayed object depends on them. Added the additive functor between abelian categories. Rejudge. |
| `prop-change-of-projective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws` | `confirmed_fatal` | $F$ and its categories were never quantified although every displayed object depends on them. Added the additive functor between abelian categories. Rejudge. |
| `prop-contravariant-derived-functors-are-derived-on-the-opposite-category` | `confirmed_fatal` | The target need not have been abelian and $A$ need not have belonged to the datum domain. Added the abelian target, explicit domain, and membership restriction. Rejudge. |
| `prop-derived-functors-commute-with-finite-biproducts` | `confirmed_fatal` | The target was not assumed abelian although both cited derived-functor theorems require it. Typed $F$ between abelian categories. Rejudge. |
| `prop-left-derived-maps-preserve-composition` | `confirmed_fatal` | $A,B,C$ were not restricted to the datum domain. Added their membership and typed $F$ between abelian categories. Rejudge. |
| `prop-left-derived-maps-preserve-identities` | `confirmed_fatal` | $A$ was not restricted to the datum domain. Added its membership and typed $F$ between abelian categories. Rejudge. |
| `prop-negative-derived-degrees-vanish-for-one-sided-resolutions` | `false_positive` | Its exact derived-object dependencies cite the deleted-resolution definition, which explicitly displays zero terms outside nonnegative degree. The support inference is licensed and correct. No edit. |
| `prop-positive-left-derived-functors-vanish-on-projective-objects` | `confirmed_fatal` | The target was not assumed abelian. Added that hypothesis and replaced the unsupported canonical qualifier by the isomorphism actually supplied. Rejudge. |
| `prop-positive-right-derived-functors-vanish-on-injective-objects` | `confirmed_fatal` | The proof inflated a natural-isomorphism theorem into a canonical identification, and the target was not assumed abelian. Corrected both. Rejudge. |
| `rem-derived-functors-are-well-defined-relative-to-supplied-resolution-data` | `confirmed_fatal` | Its seven unconditional conclusions summarize results that require Dependent Choice. Added the inherited hypothesis. Rejudge. |
| `thm-acyclic-resolution-theorem-for-right-derived-functors` | `confirmed_fatal` | The cited injective horseshoe statement did not supply the short exact sequence of cochain complexes used for the long exact sequence. Derived the degreewise split sequence from the projective horseshoe theorem in the opposite category and used additive preservation of biproducts before applying cohomology. Rejudge. |
| `thm-contiguous-simplicial-maps-induce-the-same-map-on-simplicial-homology` | `confirmed_fatal` | The displayed prism operator was not alternating under a change of oriented representative. For each cycle, fixed a coherent order on the finite supporting subcomplex, defined the prism on that free basis, and applied the prism identity to the cycle. Rejudge. |
| `thm-euler-poincare-formula-for-a-finite-simplicial-complex` | `confirmed_nonfatal` | “Free on oriented simplices” is shorthand that should say one chosen orientation per underlying simplex; the defining sign relation immediately gives rank $f_n(K)$. No claim changes and no edit. |
| `thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic` | `confirmed_nonfatal` | The proof should use uniqueness up to cochain homotopy to state that each induced component is independent of the comparison map before checking naturality. [L3] already supplies exactly that one-line closure. No edit. |
| `thm-the-simplicial-boundary-squares-to-zero` | `confirmed_fatal` | At $n=0$, $\partial_{-1}$ was not defined. Restricted the statement and Given block to $n\ge1$. Rejudge. |
| `thm-zero-th-left-derived-functor-of-a-right-exact-functor-recovers-the-functor` | `confirmed_nonfatal` | Step 3.1 should write the augmentation-commuting square for a comparison lift and pass it through the cokernel. That routine square makes the already constructed objectwise maps natural. No edit. |
| `thm-zero-th-right-derived-functor-of-a-left-exact-functor-recovers-the-functor` | `confirmed_nonfatal` | Dually, step 3.1 should write the coaugmentation-commuting square and use the kernel universal property. The naturality gap is immediate and the claim is correct. No edit. |

## Rejudge targets

- `cex-l-zero-of-a-non-right-exact-functor-need-not-recover-the-functor`
- `def-acyclic-object-for-a-left-exact-functor`
- `def-acyclic-object-for-a-right-exact-functor`
- `def-balanced-derived-bifunctor`
- `def-induced-simplicial-chain-map`
- `def-left-derived-map-relative-to-resolution-data`
- `def-right-derived-map-relative-to-resolution-data`
- `def-simplicial-chain-groups-and-boundary`
- `ex-a-contravariant-functor-derived-via-the-opposite-category`
- `ex-height-on-the-sphere-is-a-perfect-morse-function`
- `ex-independence-of-two-comparison-lifts-on-homology`
- `ex-the-right-derived-functors-of-hom-from-a-fixed-object`
- `ex-two-resolution-data-and-their-change-isomorphism`
- `fs-an-additive-functor-has-l-zero-naturally-isomorphic-to-itself`
- `fs-derived-functors-in-two-variables-are-automatically-balanced`
- `fs-enough-projectives-implies-a-canonical-resolution-for-every-object`
- `fs-the-definition-of-a-derived-map-may-depend-on-the-chosen-comparison-lift`
- `lem-objectwise-comparison-of-two-projective-resolution-data-induces-an-isomorphism-on-derived-objects`
- `prop-a-bifunctor-can-be-derived-in-either-variable-when-the-relevant-resolution-data-are-supplied`
- `prop-a-natural-transformation-induces-natural-transformations-of-left-derived-functors`
- `prop-change-of-injective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws`
- `prop-change-of-projective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws`
- `prop-contravariant-derived-functors-are-derived-on-the-opposite-category`
- `prop-derived-functors-commute-with-finite-biproducts`
- `prop-left-derived-maps-preserve-composition`
- `prop-left-derived-maps-preserve-identities`
- `prop-positive-left-derived-functors-vanish-on-projective-objects`
- `prop-positive-right-derived-functors-vanish-on-injective-objects`
- `rem-derived-functors-are-well-defined-relative-to-supplied-resolution-data`
- `thm-acyclic-resolution-theorem-for-right-derived-functors`
- `thm-contiguous-simplicial-maps-induce-the-same-map-on-simplicial-homology`
- `thm-the-simplicial-boundary-squares-to-zero`

## Alerts

No incoming alerts named group d, and the adjudication found no defect whose
repair belonged to another group. No rows were added to either Step-8 alert
ledger.

## Checks

- Focused `precheck`: 24 proof-bearing repaired items checked, 0 failing.
- Focused `rendercheck`: 32 repaired items checked, 0 errors.
- Group `content-policy`: 114 scoped items checked, 0 errors and 0 warnings.
- Group-d defect reconciliation: all 32 fatal tuples have exactly one matching
  `frontier-29-A8-d-*` row. The final whole-run defect-ledger check examined
  436 frontier-29 rows with 0 errors.
- `step8-scope check`: passed with 7 groups, 755 items, 72 routed rejections,
  and 0 cross-group alert dispositions.
- `step8-guard`: run against `pre-step8`. At the time of this group report it
  found no group-d violation, but the whole-level invocation did not pass: it
  reported 40 unlicensed edits in other still-active groups. Group d did not
  modify any item adjudicated nonfatal or false positive.
- Repository `depcheck --quiet`: the group-d changes introduced no reported
  hard failure; the whole-tree run remained red on two pre-existing
  modular-representation page-graph failures outside this group.
- `git diff --check` on all 32 repaired item files: clean.

## Blockers

No group-d mathematical or artifact blocker remains. Whole-level Step-8 guard
closure depends on the other groups finishing their exact adjudication rows;
the engine owns that routing and retry state.
