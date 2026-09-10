# Step 3b item adjudication — group c

Run `phase-2-catchup-24`; dispatch `step3b-c-c3cec95c338b90e6`; batches 5–7.
Current Step-3a hashes report sufficient scope for all four pairs. Item decisions
are recorded individually with dependency-closure hashes by step3-decisions.
Published text remains read-only. This report records this dispatch's own audit,
not a repetition of earlier final-scaffold or owner reviews.

## Outcome

All 117 assigned items were adjudicated individually in prerequisite order: **110 accept, 7 escalate, 0 repaired**. Accepted contracts were left unchanged. All four current Step-3a scope decisions are sufficient. The final gate remains open for the seven owner resolutions below; this report does not authorize publication or an engine transition.

| Pair | Accept | Escalate |
| --- | ---: | ---: |
| Tor, flatness and dimensions | 43 | 6 |
| PID Künneth | 7 | 0 |
| Spectral sequences | 50 | 1 |
| Koszul Euler and multiplicity | 10 | 0 |

The six Tor escalations concern the unqualified projective-vanishing/cyclic-Tor interfaces and their concrete consumers: fixed-resolution calculations are sound, but the stated independence or balanced-Tor choice/data obligations are not discharged. The spectral escalation concerns the claim about differing source page conventions: the proposed truncation example does not establish that claim, and the inspected sources agree on E₀ and E₁. Exact IDs, attempted source readings, dependencies and required owner actions follow in the item records. No escalation or owner decision was overwritten.

## Completed items

### def-tensor-product-total-complex-of-chain-complexes — accept

Read current batch-5 contract and `items/def-tensor-product-total-complex-of-chain-complexes.md`,
and the complete definitions of chain complex, generators-and-relations tensor
product, and balanced maps. The direct sum of right/left tensor groups in degree
n and the degree −1 Koszul differential are meaningful for arbitrary complexes:
each element has finite support even when the diagonal is infinite. For the
nonnegative resolutions used later the diagonals themselves are finite. No AC
is used. Dependencies examined are the three IDs in the matching decision receipt.
The defining relations and linearity give descent; the next lemma supplies d²=0.
Source locator: the actual item Definition; mathematical check is the explicit
construction, not its Weibel citation. No edits; mechanical results are recorded below.

Next: audit and record the differential lemma, then the resolution constructions.

### lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero — accept

Read the current contract and entire published proof (steps 1.1–3.1). Additivity
in each variable is immediate from the two linear differentials; balancing is
computed explicitly. The mixed signs are (−1)^(p−1) and (−1)^p, hence cancel.
Finite support permits extension to the direct sum. No AC. Examined the tensor
construction, balanced-map and generators/relations IDs in the receipt. The
“finite-diagonal” terminology restricts no needed application and the proof also
works for arbitrary direct sums. No edits; mechanical results are recorded below. Next: left-resolution Tor.

### def-tor-by-resolving-the-left-module — accept

The definition is relative to a supplied left projective resolution; N is concentrated in degree zero and H is the cycle/boundary quotient. It asserts neither existence of resolutions nor choice-free independence. Those are later comparison obligations. No AC used. Read supplier Definitions in items/ at the named IDs.

Examined dependency IDs: `def-homology-object-of-a-chain-complex`, `def-projective-resolution-in-an-abelian-category`, `def-tensor-product-total-complex-of-chain-complexes`, `lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### def-tor-by-resolving-the-right-module — accept

For supplied Q resolving the right module, Q tensor M has differential d_Q tensor 1 and the homology quotient exists. The superscript Q explicitly retains the supplied datum; independence is deferred. No choice or tensor handedness gap. Supplier locators: corresponding items/ Definitions.

Examined dependency IDs: `def-homology-object-of-a-chain-complex`, `def-projective-resolution-in-an-abelian-category`, `def-tensor-product-total-complex-of-chain-complexes`, `lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### prop-tor-zero-is-the-tensor-product-in-either-construction — accept

Checked augmentation quotient proof 1.1–4.1 in the published item and the complete arbitrary-ring tensor universal-property proof. Independence of each individual lift defines a unique class without selecting lifts simultaneously. Exactness identifies differences with d(u); both inverse composites fix generators. Both hands are valid as abelian groups without commutativity or AC. Existing verified metadata explicitly says local repair, not an owner audit; no current Step-3b owner receipt exists.

Examined dependency IDs: `def-tor-by-resolving-the-left-module`, `def-tor-by-resolving-the-right-module`, `thm-universal-property-of-module-tensor-products`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### prop-each-tor-construction-is-covariant-in-both-variables — accept

Checked full comparison and homotopy extension proofs: exact target cycles admit projective lifts, with augmentation kernel at degree zero. DC on the set of finite compatible partial maps yields the countable family. Tensor preserves the displayed homotopy; identities/compositions and two-variable commutation follow on pure tensors. Supplied-resolution and DC assumptions are explicit. No use of the unproved AC-implies-DC remark. Locators: item Proof 1.1–3.1 and supplier Proofs.

Examined dependency IDs: `def-dependent-choice`, `def-tor-by-resolving-the-left-module`, `def-tor-by-resolving-the-right-module`, `lem-extend-a-partial-comparison-homotopy-by-one-degree`, `lem-extend-a-partial-comparison-map-by-one-degree`, `lem-lift-a-map-through-degree-zero-of-a-projective-resolution`, `thm-projective-comparison-map-exists`, `thm-projective-comparison-maps-are-unique-up-to-chain-homotopy`, `thm-universal-property-of-module-tensor-products`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### prop-positive-tor-vanishes-when-the-resolved-variable-is-projective — escalate

Published proof 1.1–3.1 computes only the identity resolution; the preceding definitions retain a supplied arbitrary resolution, while comparison invariance is DC-qualified. The unqualified statement does not restrict to the identity resolution or assume DC. I cannot certify that transition from this proof. Read Weibel chapter 3, complete opening paragraph of section 3.2, printed p68 (https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf): it relies on established derived-functor invariance, so does not supply the missing choice-free argument here. Owner should provide a finite-degree splitting proof (projective syzygies by finite induction suffice for each i), or resolve the intended data/choice contract. Published-proof edits are outside dispatch scope. This is a proof-interface gap, not a counterexample to projective Tor vanishing. Do not retry this item.

Examined dependency IDs: `def-tor-by-resolving-the-left-module`, `def-tor-by-resolving-the-right-module`, `prop-each-tor-construction-is-covariant-in-both-variables`, `thm-projective-comparison-maps-are-unique-up-to-chain-homotopy`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### def-tensor-double-complex-of-two-projective-resolutions — accept

The supplied nonnegative right Q and left P give finite diagonals p+q=n. Horizontal d_Q and signed vertical (-1)^p d_P anticommute, since horizontal lowers p. Both square to zero by the previously checked differential lemma. No existence assertion or AC use. Locator: actual item Definition.

Examined dependency IDs: `def-projective-resolution-in-an-abelian-category`, `def-tensor-product-total-complex-of-chain-complexes`, `lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### def-left-and-right-flat-modules-over-an-arbitrary-ring — accept

Exactness means preservation of short exact sequences into abelian groups; both tensor hands have the correct domain. Tensor maps descend by the already read arbitrary-ring universal property. No commutative-only module target is assumed, and no choice is used. Read item and supplier Definitions; agrees with Weibel 3.2.1 on printed p68.

Examined dependency IDs: `def-exact-and-short-exact-sequences-of-modules`, `def-tensor-product-of-modules-by-generators-and-relations`, `thm-universal-property-of-module-tensor-products`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### lem-projective-modules-are-flat-over-an-arbitrary-ring — accept

Checked Proof 1.1–5.1 and supplier characterization proof 1.4: projectivity splits the canonical free cover without AC. Explicit balanced maps identify free tensor with finite-support tuples in either hand, giving exactness by finite lifts. Inclusion/retraction transfers exactness to the projective summand. Only choice-free implication 1=>4 is used; the AC-dependent converse is irrelevant.

Examined dependency IDs: `def-left-and-right-flat-modules-over-an-arbitrary-ring`, `thm-projective-module-characterizations`, `thm-universal-property-of-module-tensor-products`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### rem-projective-modules-are-flat-is-supplied-by-mod-three — accept

Read both earlier commutative statements and the current remark: it accurately distinguishes the commutative specialization from the arbitrary-ring lemma already checked. No new proof or reliance on unused earlier ideal-test clauses; no choice assertion beyond the preceding lemma.

Examined dependency IDs: `def-flat-and-faithfully-flat-modules-and-ring-maps`, `lem-projective-modules-are-flat-over-an-arbitrary-ring`, `thm-projective-modules-are-flat`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### lem-the-rows-of-the-augmented-tensor-double-complex-are-exact — accept

For fixed p, Q_p is right projective hence right flat by the checked choice-free lemma. Exactness of the supplied augmented P resolution is preserved, including its augmentation; multiplying differentials by the fixed sign does not change kernels/images. Row naming is cosmetic; the displayed complex fixes the direction. Proof 1.1–3.1 verified.

Examined dependency IDs: `def-left-and-right-flat-modules-over-an-arbitrary-ring`, `def-tensor-double-complex-of-two-projective-resolutions`, `lem-projective-modules-are-flat-over-an-arbitrary-ring`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### lem-the-columns-of-the-augmented-tensor-double-complex-are-exact — accept

Fixed q gives a projective left P_q; its flatness preserves the augmented right Q resolution. The displayed terms and augmentation are correctly typed. Proof 1.1–3.1 uses no choice. Manifest/published row-versus-column titles do not change the explicitly displayed assertion.

Examined dependency IDs: `def-left-and-right-flat-modules-over-an-arbitrary-ring`, `def-tensor-double-complex-of-two-projective-resolutions`, `lem-projective-modules-are-flat-over-an-arbitrary-ring`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic — accept

Checked Proof 1.1–4.1: a-kernel elimination lowers q, b-kernel elimination lowers p, including bottom degree; all repetitions are finite. Exact kernels give both augmentation homology isomorphisms by the actual LES clauses. Tensor homotopies h_Q tensor 1 and (-1)^p 1 tensor h_P have the required signs. DC and supplied resolutions meet comparison hypotheses. The escalated projective-vanishing item is not used. Source locators: current proof and named supplier statements/proofs; explicit finite elimination supplies assembly locally.

Examined dependency IDs: `def-connecting-morphism-in-homology`, `def-dependent-choice`, `def-tensor-double-complex-of-two-projective-resolutions`, `def-tor-by-resolving-the-left-module`, `def-tor-by-resolving-the-right-module`, `lem-exactness-at-the-homology-of-the-middle-complex`, `lem-exactness-at-the-homology-of-the-right-complex`, `lem-exactness-at-the-target-of-the-connecting-map`, `lem-the-columns-of-the-augmented-tensor-double-complex-are-exact`, `lem-the-rows-of-the-augmented-tensor-double-complex-are-exact`, `thm-long-exact-sequence-in-homology`, `thm-projective-comparison-map-exists`, `thm-projective-comparison-maps-are-unique-up-to-chain-homotopy`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions — accept

Checked proof 1.1–3.1: both augmented squares have arrows from total to edge; cancellation of H(a) yields the displayed naturality identity. Identity lifts in both directions yield inverse change maps, and uniqueness up to homotopy proves the three-resolution cocycle. Every DC-qualified supplier is applicable; no global choice of resolutions is asserted.

Examined dependency IDs: `def-dependent-choice`, `prop-each-tor-construction-is-covariant-in-both-variables`, `thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic`, `thm-projective-comparison-map-exists`, `thm-projective-comparison-maps-are-unique-up-to-chain-homotopy`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### def-balanced-tor-bifunctor — accept

Read entire Definition and contract: it explicitly retains DC, supplied resolutions, and canonical isomorphism rather than equality. Existence and a system of resolutions are separate data for the usual category-wide functor. Each of the three already audited supplier clauses licenses exactly the definition; supplied-data choice-free branch requires explicit coherence.

Examined dependency IDs: `def-dependent-choice`, `prop-each-tor-construction-is-covariant-in-both-variables`, `prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions`, `thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### thm-long-exact-tor-sequence-in-the-left-module-variable — accept

Read proof 1.1–3.1 and full horseshoe/compatible-middle and homology naturality suppliers. Degreewise biproduct splittings persist under arbitrary-ring additive tensor, so no flatness of N is assumed. The off-diagonal comparison correction lifts a cycle through the target kernel epimorphism; DC completes the countable construction. LES and degree-zero identifications give the tail. Supplied left resolutions suffice for this presentation; no right resolution is needed merely to compute it.

Examined dependency IDs: `def-balanced-tor-bifunctor`, `def-dependent-choice`, `lem-inductive-horseshoe-step`, `lem-the-left-derived-connecting-map-is-independent-of-the-horseshoe-resolution-and-lifts`, `prop-each-tor-construction-is-covariant-in-both-variables`, `prop-tor-zero-is-the-tensor-product-in-either-construction`, `thm-horseshoe-lemma-for-projective-resolutions`, `thm-long-exact-sequence-in-homology`, `thm-naturality-of-the-homology-connecting-morphism`, `thm-universal-property-of-module-tensor-products`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### thm-long-exact-tor-sequence-in-the-right-module-variable — accept

Proof 1.1–4.1 checked: fixed left projective terms are flat, giving a short exact tensor-complex sequence for every right-module SES. LES yields exactly the displayed boundary and right-exact tail; comparison and balance carry DC as required. Both types of naturality come from actual ladders. Fixed-P choice-free clause is preserved.

Examined dependency IDs: `def-balanced-tor-bifunctor`, `def-dependent-choice`, `lem-projective-modules-are-flat-over-an-arbitrary-ring`, `prop-each-tor-construction-is-covariant-in-both-variables`, `prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions`, `prop-tor-zero-is-the-tensor-product-in-either-construction`, `thm-long-exact-sequence-in-homology`, `thm-naturality-of-the-homology-connecting-morphism`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### prop-tor-dimension-shifting — accept

Checked proof 1.1–3.1 and i>=1 endpoint. This consumer uses only the sound identity-resolution calculation from the escalated vanishing supplier, then explicitly transports it under DC via checked coherent comparison. Consequently its proof supplies exactly the missing transition and is not blocked by that supplier's unqualified statement. The two outside positive terms vanish, and each natural LES gives the claimed connecting isomorphism.

Examined dependency IDs: `def-dependent-choice`, `prop-positive-tor-vanishes-when-the-resolved-variable-is-projective`, `prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions`, `thm-long-exact-tor-sequence-in-the-left-module-variable`, `thm-long-exact-tor-sequence-in-the-right-module-variable`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes — accept

Read Proof 1.1–3.1. Flatness preserves augmented exactness of each supplied right resolution. Conversely the right-module horseshoe is degreewise split, so tensor yields an LES whose Tor_1(P/K,M) image is the injection obstruction. Local balanced-quotient proof supplies arbitrary-ring right exactness, not the commutative-only tensor theorem. DC and resolution data are explicit; recorded implicit DC supplier. Quantification requires supplied resolutions for the arbitrary right modules under test.

Examined dependency IDs: `def-balanced-tor-bifunctor`, `def-dependent-choice`, `def-left-and-right-flat-modules-over-an-arbitrary-ring`, `def-tor-by-resolving-the-right-module`, `thm-horseshoe-lemma-for-projective-resolutions`, `thm-long-exact-sequence-in-homology`, `thm-universal-property-of-module-tensor-products`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes — accept

Checked entire proof with correct left/right roles. Local quotient universal property yields right exactness for arbitrary rings. The already audited left-variable LES shows every injection remains injective when Tor_1(N,P/K)=0. The forward direction tensors the supplied augmented resolution by a flat right N. DC/data contract is printed and meets suppliers.

Examined dependency IDs: `def-balanced-tor-bifunctor`, `def-dependent-choice`, `def-left-and-right-flat-modules-over-an-arbitrary-ring`, `def-tor-by-resolving-the-left-module`, `thm-long-exact-tor-sequence-in-the-left-module-variable`, `thm-universal-property-of-module-tensor-products`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### cor-a-short-exact-sequence-stays-exact-after-tensoring-exactly-when-its-tor-boundary-obstruction-vanishes — accept

Exact tail supplies all but left injectivity; that kernel equals im(partial), zero exactly when the map partial is zero. No vanishing of its domain is inferred. Read Proof 1.1–3.1 and the checked LES tail. DC/data assumptions match; the conditional elementary inference is choice-free.

Examined dependency IDs: `def-dependent-choice`, `thm-long-exact-tor-sequence-in-the-left-module-variable`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion — escalate

The fixed two-term computation is correct, including n=1 and naturality in M. However the statement uses unqualified balanced Tor while its declared definition explicitly assumes DC and supplied resolution/comparison data. Neither is propagated or replaced by a choice-free independence argument. Read complete Weibel Calculation 3.1.1, printed p66 (https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf); it gives the same finite calculation, not this library's missing choice/data transition. Owner must make the fixed-resolution clause explicit and justify its balanced interpretation without weakening the claim. Published proof/statement edits exceed scope. No retry.

Examined dependency IDs: `def-balanced-tor-bifunctor`, `def-projective-resolution-in-an-abelian-category`, `def-tor-by-resolving-the-right-module`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### thm-tor-of-two-cyclic-abelian-groups — escalate

Read Proof 1.1–3.1: the arithmetic kernel is indeed generated by n/g with order g. The only Tor identification is the now-escalated cyclic supplier, and this consumer supplies no balanced-Tor choice/data qualification or independent replacement argument. The affected clause is precisely step 1.1, not the gcd arithmetic. Complete Weibel Calculation 3.1.1 p66 was read at the chapter-3 URL; it verifies the fixed-resolution computation only. Owner should propagate the resolved cyclic interface here. Published edits are outside scope; no retry.

Examined dependency IDs: `def-balanced-tor-bifunctor`, `thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### thm-higher-tor-over-the-integers-vanishes — accept

Checked full proof 1.1–7.1 and listed suppliers. Integer coordinate ideals have canonical positive generators; AC well-orders the basis and chooses lifts. Greatest-support transfinite induction proves spanning even at limits, and nonzero leading coordinate proves independence. AC free projectivity gives the length-one resolution. The explicit successor-selector plus recursion proves DC locally for balanced Tor. The separate supplied-short-resolution computation is choice-free. No later PID freeness or cyclic-Tor theorem is used.

Examined dependency IDs: `cor-every-module-is-a-quotient-of-a-free-module`, `def-axiom-of-choice`, `def-balanced-tor-bifunctor`, `def-dependent-choice`, `def-free-module-on-a-set-and-standard-basis`, `def-tor-by-resolving-the-right-module`, `thm-division-algorithm-in-z`, `thm-free-modules-are-projective-with-choice-boundary`, `thm-recursion`, `thm-transfinite-induction`, `thm-well-ordering-principle`, `thm-well-ordering-theorem`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### prop-torsion-free-abelian-groups-are-flat — accept

Full proof 1.1–5.1 checked. Finite-rank subgroup induction uses a least positive coordinate and one lift per finite step. A maximal independent sublist of a finite generating list gives nonzero integer denominators; torsion-freeness embeds H as dH in a finite free group. Each tensor-zero witness involves finitely many relations and thus one such H. Its coordinatewise injection proves the original injection. The actual right-exactness proof applies over Z. No infinite basis choices, colimits, or AC.

Examined dependency IDs: `def-left-and-right-flat-modules-over-an-arbitrary-ring`, `def-tensor-product-of-modules-by-generators-and-relations`, `thm-division-algorithm-in-z`, `thm-right-exactness-of-tensor-products`, `thm-well-ordering-principle`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### thm-over-a-pid-flat-is-equivalent-to-torsion-free — accept

Read proof and full ideal-test supplier. That supplier reduces finite relation witnesses to finite free presentations and proves submodule-tensor injection by coordinate induction; it is choice-free. For one principal ideal (r), R->(r) is an isomorphism when r nonzero, so its tensor inclusion is multiplication by r on M. This proves the converse; tensoring R --r--> R proves the forward direction. Zero ideal/module included. No arbitrary-rank freeness is used.

Examined dependency IDs: `def-annihilator-and-torsion-of-a-module`, `def-left-and-right-flat-modules-over-an-arbitrary-ring`, `def-principal-ideal-domain`, `prop-functoriality-of-module-tensor-products`, `thm-flatness-criteria-by-injections-and-ideals`, `thm-unit-isomorphisms-for-module-tensor-products`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### thm-tor-symmetry-over-a-commutative-ring — accept

Checked Proof 1.1–3.1 and full tensor-swap clause. Commutativity identifies module hands and preserves lifting diagrams. The swap of P_j with degree-zero N needs no Koszul sign and commutes with d. Naturality uses DC comparisons, and balance transports to other supplied presentations. No noncommutative symmetry claimed.

Examined dependency IDs: `def-balanced-tor-bifunctor`, `def-dependent-choice`, `def-tor-by-resolving-the-left-module`, `def-tor-by-resolving-the-right-module`, `prop-each-tor-construction-is-covariant-in-both-variables`, `prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions`, `thm-symmetry-and-associativity-over-a-commutative-ring`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### def-flat-dimension-of-a-module — accept

Definition uses the least element of a nonempty subset of nonnegative integers, or infinity when empty. The n=0 sequence identifies a flat module with M; zero therefore has dimension zero under this convention. Right-hand definition is separately typed. No existence of general resolutions or choice assumption is needed.

Examined dependency IDs: `def-exact-and-short-exact-sequences-of-modules`, `def-left-and-right-flat-modules-over-an-arbitrary-ring`, `thm-well-ordering-principle`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### thm-flat-dimension-at-most-n-iff-higher-tor-vanishes — accept

Proof 1.1–3.1 checked: flat F has all positive Tor zero by right syzygy shifting; finite flat-resolution kernel LES gives i>n vanishing. Conversely nth projective syzygy has Tor_1=Tor_(n+1), hence is flat, and all remaining projective terms are flat by the implicit supplier recorded here. n=0 is the identity criterion. Published metadata omits that last projective-flat supplier; this is a dependency-declaration repair for reconciliation, not an unsound clause (supplier is earlier, audited, choice-free). DC and all used resolution data are assumed.

Examined dependency IDs: `def-balanced-tor-bifunctor`, `def-dependent-choice`, `def-flat-dimension-of-a-module`, `lem-projective-modules-are-flat-over-an-arbitrary-ring`, `prop-tor-dimension-shifting`, `thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes`, `thm-long-exact-tor-sequence-in-the-left-module-variable`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### def-left-and-right-weak-global-dimension — accept

Read Definition: dimensions take values in N union infinity, so the class-indexed notation denotes a subset of that set via Separation. It requires no set of all modules or proper-class choice. Zero module ensures nonempty values. Left/right conventions and infinity agree with the checked flat-dimension definition.

Examined dependency IDs: `def-flat-dimension-of-a-module`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### prop-weak-global-dimension-is-at-most-corresponding-global-dimension — accept

Read proof and global/projective-dimension definitions. Every finite projective resolution is a flat resolution by the choice-free arbitrary-handed lemma; infinite projective dimension gives the inequality automatically in extended naturals. Taking left and right suprema separately proves exactly the statement, without equating global dimensions or choosing resolutions simultaneously.

Examined dependency IDs: `def-flat-dimension-of-a-module`, `def-left-and-right-global-dimension-of-a-ring`, `def-left-and-right-weak-global-dimension`, `def-projective-dimension-of-an-object`, `lem-projective-modules-are-flat-over-an-arbitrary-ring`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric — accept

Read proof 1.1–2.1 and opposite-ring Definition. Equality of finite upper bounds determines the extended natural supremum. Opposite-ring tensor flip is balanced with order reversed and preserves exactness and projective lifting diagrams; it identifies the right fd criterion with the left one. DC and both-handed supplied data suffice. Empty Tor-degree set is explicitly assigned supremum zero, covering the zero ring; no cyclic ideal-test theorem or global-dimension symmetry is used.

Examined dependency IDs: `def-balanced-tor-bifunctor`, `def-dependent-choice`, `def-left-and-right-weak-global-dimension`, `def-opposite-ring`, `thm-flat-dimension-at-most-n-iff-higher-tor-vanishes`, `thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic`, `thm-universal-property-of-module-tensor-products`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### prop-semisimple-rings-have-vanishing-positive-tor-and-ext — accept

Read proof and all displayed direct supplier statements/proofs. Wedderburn–Artin handles nonzero R, and transpose into opposite division-ring matrices proves right semisimplicity. Under AC, the left characterization applies to both rings and splits every SES; injective characterization then supplies both-handed injectivity. Canonical identity resolutions give zero positive tensor/Hom groups and resolution systems; local AC=>DC meets both balance definitions. Zero ring and supplied-resolution choice-free clauses are explicitly handled.

Examined dependency IDs: `def-axiom-of-choice`, `def-balanced-ext-bifunctor`, `def-balanced-tor-bifunctor`, `def-dependent-choice`, `def-ext-via-a-projective-resolution-of-the-first-variable`, `def-ext-via-an-injective-resolution-of-the-second-variable`, `def-opposite-ring`, `def-tor-by-resolving-the-right-module`, `thm-equivalent-characterizations-of-semisimple-rings`, `thm-injective-module-characterizations`, `thm-recursion`, `thm-wedderburn-artin-theorem`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### prop-the-integers-have-weak-and-global-dimension-one — accept

Full proof checked: AC-qualified length-one resolutions give all four upper bounds. Multiplication by n>1 on Z is injective but becomes zero on nonzero Z/n after tensor, so the witness is choice-free nonflat and hence nonprojective. Dimension-zero exclusions yield exact lower bounds. No use of either escalated cyclic Tor interface or a later global-dimension theorem.

Examined dependency IDs: `def-axiom-of-choice`, `def-flat-dimension-of-a-module`, `def-left-and-right-global-dimension-of-a-ring`, `def-left-and-right-weak-global-dimension`, `def-projective-dimension-of-an-object`, `def-tensor-product-of-modules-by-generators-and-relations`, `lem-projective-modules-are-flat-over-an-arbitrary-ring`, `thm-higher-tor-over-the-integers-vanishes`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### fs-tor-takes-two-left-modules-over-an-arbitrary-ring — accept

Refutation correctly concerns missing input structure: a merely left module has no supplied right action satisfying the balancing relation. The ordinary Tor definition requires right/left inputs over R. No stronger assertion that no right structure can exist is made. Full refutation read; no choice used.

Examined dependency IDs: `def-tensor-product-of-modules-by-generators-and-relations`, `def-tor-by-resolving-the-left-module`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### fs-the-two-tor-constructions-are-equal-by-definition — accept

Read refutation: the explicit two complexes have different cardinalities in degree zero, while multiplication by 3 on Z/2 and by 2 on Z/3 are invertible and give zero homology. This finite counterinstance refutes literal equality choice-free. The balance theorem is explanatory; arbitrary-resolution naturality is not used to establish the counterinstance.

Examined dependency IDs: `def-tor-by-resolving-the-left-module`, `def-tor-by-resolving-the-right-module`, `thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### fs-flat-modules-have-projective-dimension-zero — accept

Checked full refutation: Hom(Q,Z)=0 by divisibility and the integer bound, so each coordinate of a hypothetical section of the canonical free cover is zero, contradiction at 1. The earlier finite-witness theorem makes Q flat without AC. Only exclusion of a length-zero resolution is asserted; no arbitrary projective-module freeness or resolution existence is used.

Examined dependency IDs: `cor-every-module-is-a-quotient-of-a-free-module`, `def-free-module-on-a-set-and-standard-basis`, `def-projective-dimension-of-an-object`, `def-projective-module`, `prop-torsion-free-abelian-groups-are-flat`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### fs-tor-one-vanishes-only-when-one-module-is-projective — accept

Full refutation checked. Both nonprojective witnesses use already audited choice-free clauses. Rank-one Z resolution tensored with Q has differential 2, hence zero kernel. AC supplies Q resolution and local selector/recursion gives DC for balanced interpretation. Explicitly distinct conditional and general clauses avoid the cyclic supplier's qualification gap; no use of that escalated supplier.

Examined dependency IDs: `def-axiom-of-choice`, `def-balanced-tor-bifunctor`, `def-dependent-choice`, `def-tensor-product-of-modules-by-generators-and-relations`, `def-tor-by-resolving-the-left-module`, `fs-flat-modules-have-projective-dimension-zero`, `prop-the-integers-have-weak-and-global-dimension-one`, `thm-free-modules-are-projective-with-choice-boundary`, `thm-higher-tor-over-the-integers-vanishes`, `thm-recursion`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### fs-tor-is-symmetric-over-every-noncommutative-ring — accept

Read full refutation. It rejects the domain of two merely left modules, not the valid opposite-ring symmetry already proved. Commutativity is exactly what the ordinary swap uses to turn an action into the other hand. Choice plays no role in this typing objection.

Examined dependency IDs: `def-tensor-product-of-modules-by-generators-and-relations`, `def-tor-by-resolving-the-left-module`, `thm-tor-symmetry-over-a-commutative-ring`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### fs-tor-one-of-r-mod-i-and-m-is-always-the-i-torsion-submodule-of-m — accept

Full proof 1.1–6.1 checked. Coefficient shifts and reduction mod x prove exactness of (-y,x),(x,y); finite free terms are projective choice-free. Tensor with k kills both maps, giving H_1=k^2. I/I^2 has the two stated monomial classes; all inverse tensor maps respect balancing. k^2 is not R-linearly isomorphic to k by the explicit kernel vector, including characteristic two. DC-qualified balanced clause is printed; the same finite complex supplies either hand for k.

Examined dependency IDs: `def-balanced-tor-bifunctor`, `def-dependent-choice`, `def-multivariate-polynomial-ring-by-iteration`, `def-projective-module`, `def-tor-by-resolving-the-right-module`, `thm-universal-property-of-module-tensor-products`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### ex-tor-of-two-cyclic-groups-from-a-two-term-resolution — escalate

Read full example and verification. Kernel of 12 on Z/18 is the subgroup generated by 3, of order 6, so the supplied-resolution calculation is correct. Its unqualified Tor identification inherits the escalated cyclic theorem's missing balanced choice/data transition. Weibel Calculation 3.1.1 p66 was read completely; it confirms that calculation but not a choice-free comparison argument. Owner should propagate the resolved cyclic contract or state and justify both clauses explicitly. Published edits outside scope; no retry.

Examined dependency IDs: `def-balanced-tor-bifunctor`, `def-tor-by-resolving-the-right-module`, `thm-tor-of-two-cyclic-abelian-groups`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### ex-tor-detects-n-torsion — escalate

The verified kernel residues 0,3,6,9 do form Z/4. The Tor interpretation depends on the escalated unqualified cyclic interface; the example adds no DC/data or independence argument. Read its complete verification and complete Weibel Calculation 3.1.1 p66. Owner must propagate the corrected supplier contract while preserving the finite calculation; published edits outside scope. No retry.

Examined dependency IDs: `def-balanced-tor-bifunctor`, `thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### ex-a-flat-nonprojective-module — accept

Read Verification 1.1–2.1. Q is torsion-free and hence flat by the audited choice-free finite-witness proof; the explicit Hom(Q,Z)=0/free-cover counterinstance supplies nonprojectivity. Both exact supplier clauses were checked and no AC is imported.

Examined dependency IDs: `fs-flat-modules-have-projective-dimension-zero`, `prop-torsion-free-abelian-groups-are-flat`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### ex-localization-is-flat-and-has-vanishing-positive-tor — accept

Full verification and fraction definition read. Cross multiplication embeds localization at powers of 2 in Q, proving torsion-free flatness. Factoring d_i through B_(i-1) and tensoring both exact sequences identifies tensor cycles with tensor boundaries for each i>0. This works for any supplied resolution without AC. The separate all-group balanced statement explicitly uses AC for resolutions and proves DC locally.

Examined dependency IDs: `def-axiom-of-choice`, `def-balanced-tor-bifunctor`, `def-dependent-choice`, `def-left-and-right-flat-modules-over-an-arbitrary-ring`, `def-multiplicative-subset-and-localisation`, `def-tor-by-resolving-the-right-module`, `prop-torsion-free-abelian-groups-are-flat`, `thm-higher-tor-over-the-integers-vanishes`, `thm-recursion`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### ex-the-tensor-double-complex-in-low-degrees — accept

Read full verification. Ordered degree-one summands (1,0),(0,1) give d2=(-n,m) and d1=(m,n), with composite zero. The vertical sign is already included and is not inserted twice. Rank-one free projectivity and tensor unit supply implicit premises, both checked choice-free. m=1 or n=1 remains valid.

Examined dependency IDs: `def-tensor-double-complex-of-two-projective-resolutions`, `thm-free-modules-are-projective-with-choice-boundary`, `thm-unit-isomorphisms-for-module-tensor-products`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### ex-tor-symmetry-over-a-commutative-ring — escalate

Verification step 1.1 uses the cyclic Tor theorem implicitly, absent from deps; its unqualified Tor interface is escalated. The declared symmetry theorem requires DC/supplied resolutions, omitted here. Gcd(4,6)=2 is correct, but neither naturality nor balanced identification is justified under the printed hypotheses. Read complete verification and Weibel Calculation 3.1.1 plus balancing remark pp66–67; they do not fix this library's choice contract. Owner must propagate the corrected interfaces and add the cyclic dependency. Published edits outside scope; no retry.

Examined dependency IDs: `def-balanced-tor-bifunctor`, `thm-tor-of-two-cyclic-abelian-groups`, `thm-tor-symmetry-over-a-commutative-ring`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### cex-a-noncommutative-handedness-error-in-tor — accept

Read statement and counterexample: the matrix column module is explicitly supplied only with a left action. Thus the first factor lacks the right action demanded by balancing; no assertion of impossibility of adding such data is made. This correctly instantiates the earlier typing refutation without AC.

Examined dependency IDs: `def-tensor-product-of-modules-by-generators-and-relations`, `fs-tor-takes-two-left-modules-over-an-arbitrary-ring`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### ex-weak-dimension-and-global-dimension-for-a-field-and-the-integers — accept

Full verification and basis corollary read. AC supplies arbitrary vector-space bases and free lifting; projectivity then flatness give length-zero resolutions and both suprema zero. The audited integer result gives all four values one. Supplied finite bases invoke only the finite-choice clause. No recorded converse-to-basis theorem is used.

Examined dependency IDs: `cor-every-vector-space-has-a-basis`, `def-axiom-of-choice`, `def-flat-dimension-of-a-module`, `def-left-and-right-global-dimension-of-a-ring`, `def-left-and-right-weak-global-dimension`, `def-projective-dimension-of-an-object`, `lem-projective-modules-are-flat-over-an-arbitrary-ring`, `prop-the-integers-have-weak-and-global-dimension-one`, `thm-free-modules-are-projective-with-choice-boundary`.
Current contract/published body read; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### lem-pid-submodules-of-free-modules-are-free-with-choice — accept

AC arbitrary-rank PID freeness: coordinate image is an ideal, omit zero images, choose a nonzero generator and lift for each remaining index. Subtracting the leading multiple leaves finite support with strictly smaller maximum; transfinite induction spans. A maximal index in a nontrivial finite relation has nonzero coefficient times nonzero generator in a domain, proving independence. Empty module included. Read Garrett Algebra notes chapter 11 section 6 Theorem 6.0.1 and complete proof, printed pp177–178, https://www-users.cse.umn.edu/~garrett/m/algebra/notes_2023-24/11.pdf. AC pays for well-ordering and simultaneous generator/lift selection; local strategy resolves the zero-image convention explicitly.

Examined dependency IDs: `def-axiom-of-choice`, `def-free-module-on-a-set-and-standard-basis`, `def-principal-ideal-domain`, `thm-transfinite-induction`, `thm-well-ordering-theorem`.
Current contract and relevant available supplier bodies examined; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces — accept

For nonnegative free PID complexes, B_(n-1) is a submodule of free C_(n-1), hence free by preceding lemma; AC chooses its basis lifts and all sections. Checked inverse maps c↦(c-s(dc),dc) and (z,b)↦z+s(b); differential is (b,0) with inclusion into cycles. At n=0, B_-1=0. Each two-term summand contributes in only two adjacent degrees, so direct-sum decomposition is legitimate. Canonical quotient rho=d corestricted to B defines zero-differential A, and rho d=0. Uses only the exactness clause of the published cycle-boundary lemma, not any unpublished freeness or false splitting of B into Z.

Examined dependency IDs: `def-axiom-of-choice`, `lem-cycle-boundary-short-exact-sequences-for-a-free-complex-over-a-pid`, `lem-pid-submodules-of-free-modules-are-free-with-choice`, `thm-free-modules-are-projective-with-choice-boundary`.
Current contract and relevant available supplier bodies examined; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### lem-pid-tensor-two-term-pieces-have-the-kunneth-kernel-and-cokernel — accept

Checked nonnegative finite diagonals, degreewise split tensor SES and free-factor homology identification using finite-support cycles/boundaries. Fixed-p signed differential has the same image and kernel. Lifting b⊗y via s_p(b)⊗y gives positive connecting map; reindex r=p-1 gives Tor total degree n-1. Supplied length-one free presentations of BOTH homology variables meet balanced Tor data, with AC implying DC by choosing a successor selector and recursion. Tensor right exactness identifies coker partial_(n+1) and traces its injection to [z⊗w]. Read complete tom Dieck Theorem11.10.1 proof, printed298–299/PDF310–311, https://webhomes.maths.ed.ac.uk/~v1ranick/papers/diecktop.pdf. Compared complete published Tor-map proof: local freeness supplies its needed clause directly; exact corestricted H(rho⊗1) agrees, without invoking old Kunneth exactness or its splitting.

Examined dependency IDs: `def-axiom-of-choice`, `def-balanced-tor-bifunctor`, `def-tensor-product-total-complex-of-chain-complexes`, `lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces`, `lem-pid-submodules-of-free-modules-are-free-with-choice`, `lem-the-kunneth-tor-map`, `lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero`, `thm-free-modules-are-projective-with-choice-boundary`, `thm-long-exact-sequence-in-homology`, `thm-right-exactness-of-tensor-products`, `thm-tensor-products-commute-with-arbitrary-direct-sums`.
Current contract and relevant available supplier bodies examined; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### thm-pid-kunneth-exactness-from-cycle-boundary-presentations — accept

LES exactness yields the asserted SES with the specific cross-product injection and established quotient, not merely abstract modules. Boundary replacement in the second factor contributes (-1)^p d(z⊗v), and in the first d(u⊗w); thus the cross product is balanced and well defined. Chain maps preserve the canonical rho SES; naturality of homology connecting maps and comparison of the supplied free presentations gives both-variable naturality independently of sections. n=0 has zero kernel/Tor sum. AC propagated. Complete published map/naturality proofs and tom Dieck11.10.1 proof (printed298–299, URL above) checked. No old Kunneth theorem is used.

Examined dependency IDs: `cor-the-long-exact-homology-sequence-is-natural`, `def-axiom-of-choice`, `def-balanced-tor-bifunctor`, `lem-pid-tensor-two-term-pieces-have-the-kunneth-kernel-and-cokernel`, `lem-the-kunneth-cross-product-map-is-well-defined-and-natural`, `lem-the-kunneth-tor-map`.
Current contract and relevant available supplier bodies examined; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### thm-pid-kunneth-splitting-from-cycle-boundary-presentations — accept

Checked pi_C(c)=[c-s(dc)] is linear into zero-differential H(C) and annihilates d(C); same for D, so their tensor is a chain map. On cycle tensors induced r satisfies r alpha=id. Exactness gives beta restricted to ker r injective, since x=alpha(a) implies rx=a, and surjective via x-alpha(rx); its inverse is uniquely linear and satisfies beta s=id and s beta=id-alpha r. No projectivity of H(C) or split B→Z is assumed. AC supplies the sections and is propagated. Complete retraction argument in tom Dieck11.10.1 printed299 read; local contract spells out both inverse composites without claiming a universal obstruction to natural splittings.

Examined dependency IDs: `def-axiom-of-choice`, `lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces`, `thm-a-chain-map-induces-a-well-defined-map-on-homology`, `thm-pid-kunneth-exactness-from-cycle-boundary-presentations`.
Current contract and relevant available supplier bodies examined; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### ex-pid-polynomial-ring-kunneth-tor-class — accept

Checked k[t] is a domain by leading coefficient, Euclidean by degree division, hence PID. With ordered degree-one basis (e1⊗e0,e0⊗e1), d2=(-t,t) and d1=(t,t), giving H0=R/(t), H1=R(1,-1)/tR(1,-1), H2=0. rho⊗1 sends (1,-1) to t e0⊗[e0]; inverse of presentation isomorphism R→tR sends t to1, yielding the positive standard Tor generator. AC-qualified exactness and supplied presentation meet all balanced-Tor requirements. This is a direct finite calculation, not a use of the escalated integer cyclic-Tor statements.

Examined dependency IDs: `def-axiom-of-choice`, `def-balanced-tor-bifunctor`, `thm-euclidean-domain-is-a-pid`, `thm-pid-kunneth-exactness-from-cycle-boundary-presentations`, `thm-pid-kunneth-splitting-from-cycle-boundary-presentations`, `thm-polynomial-degree-of-a-product-over-a-domain`, `thm-polynomial-division-algorithm-over-a-field`.
Current contract and relevant available supplier bodies examined; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### ex-pid-kunneth-over-a-field-has-no-tor-correction — accept

Listed degrees0,1,2 as a⊗u; b⊗u,a⊗v; b⊗v. All tensor differentials vanish. Only the projectivity clause of the field proposition is needed, established by the read basis and free-projectivity suppliers under AC; injectivity/divisibility clauses are unused. Identity degree-zero projective resolutions compute every positive Tor as zero and AC supplies comparison, so no unqualified projective-Tor vanishing theorem is imported. The exact sequence then makes the canonical cross product a natural isomorphism, requiring no chosen section.

Examined dependency IDs: `cor-every-vector-space-has-a-basis`, `def-axiom-of-choice`, `def-balanced-tor-bifunctor`, `prop-modules-over-a-field-are-projective-flat-and-injective`, `thm-free-modules-are-projective-with-choice-boundary`, `thm-pid-kunneth-exactness-from-cycle-boundary-presentations`.
Current contract and relevant available supplier bodies examined; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### lem-spectral-sequence-subquotient-and-local-lifting-calculus — accept

Checked every categorical construction: abelian coimage/image axiom plus zero kernel/cokernel suppliers proves normality; D=(f,-e) is epic, and q alpha=0 factors q p_A=vD, forcing v=0 by restriction to B and hence q=0 by restriction to A. Thus pullbacks of epics are epic. Sum/intersection kernel calculation yields U/(U∩V)=(U+V)/V; quotient universal properties give nested quotients. Modularity uses a finite epic lift u+v and normality to descend containment, with no global element representatives or AC. Equality and quotient naturality follow epic cancellation and unique descent. Read Stacks12.5 definitions and finite pullback descriptions, https://stacks.math.columbia.edu/tag/00ZX; the full local strategy supplies the additional argument rather than treating that citation as proof.

Examined dependency IDs: `def-abelian-category`, `prop-the-cokernel-of-a-zero-morphism-out-of-the-zero-object-is-an-isomorphism`, `prop-the-kernel-of-a-monomorphism-is-zero-and-the-cokernel-of-an-epimorphism-is-zero`.
Current contract and relevant available supplier bodies examined; unchanged unless explicitly stated. Mechanical results are recorded in the final checks below.

### def-increasing-and-decreasing-filtration-of-an-object — accept

Specified Z-indexed nested subobjects in an abelian category are well typed; F^p=F_-p reverses inclusion, and preserving each indexed subobject defines the stated morphisms. No colimit, infinite sum, element representatives, or choice is asserted. Checked against the abelian definition and current HA15 conventions.

Examined dependency IDs: `def-abelian-category`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### def-exhaustive-separated-bounded-and-finite-filtration — accept

Exhaustive supremum and separated infimum are explicitly conditional on existence. Finite lower/upper endpoints give boundedness separately in each degree; uniform bounds are distinguished. For increasing F the completion inverse system A/F_p runs toward p→-infinity, with canonical maps from A. Orientation asserts no existence or convergence theorem. All definitions preserve arbitrary abelian-category generality without assuming countable limits.

Examined dependency IDs: `def-increasing-and-decreasing-filtration-of-an-object`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### def-associated-graded-object-of-a-filtered-object — accept

Cokernel exists in the abelian category for the specified adjacent inclusion. Decreasing counterpart F^p/F^(p+1) agrees with index reversal. Indexed family avoids assuming infinite coproducts. Published quotient definition read; representative-independence is explicitly supplied by the next lemma and follows cokernel uniqueness.

Examined dependency IDs: `def-increasing-and-decreasing-filtration-of-an-object`, `def-the-quotient-of-an-object-by-a-subobject`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### lem-associated-graded-quotients-are-well-defined-subquotients — accept

Adjacent filtration inclusions are monic because their composites into A are monic. Cokernels exist; compatible isomorphisms of representatives descend in both directions and uniqueness makes the composites identities. Thus well-definedness is up to unique compatible isomorphism, not literal equality. No extra assumptions.

Examined dependency IDs: `def-associated-graded-object-of-a-filtered-object`, `lem-spectral-sequence-subquotient-and-local-lifting-calculus`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### def-filtered-chain-complex — accept

Each F_pC is a subcomplex with uniquely restricted differential; monicity makes its squared differential zero and adjacent inclusions chain maps. Read published subcomplex definition. Increasing degreewise filtration and chain direction n→n-1 are consistent, without boundedness or AC requirements.

Examined dependency IDs: `def-increasing-and-decreasing-filtration-of-an-object`, `def-subcomplex`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### def-filtered-chain-map — accept

Read chain-map equation d_D f=f d_C. Factorization of f_n through each target F_p is unique by monicity and commutes with restricted differentials by the same cancellation. The definition imposes exactly filtration preservation and no unjustified lifting.

Examined dependency IDs: `def-chain-map`, `def-filtered-chain-complex`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### prop-the-associated-graded-of-a-filtered-complex-is-a-bigraded-complex — accept

Apply read quotient-complex differential lemma to F_(p-1)C⊂F_pC. Quotient descent and epic cancellation give square-zero, with total n=p+q dropping to n-1 and fixed p, hence q→q-1. All quotients supplied and no sum/completion assumed.

Examined dependency IDs: `def-filtered-chain-complex`, `lem-associated-graded-quotients-are-well-defined-subquotients`, `lem-the-differential-descends-to-a-quotient-complex`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### def-induced-filtration-on-homology — accept

Homology maps of inclusion chain maps exist by the read universal cokernel proof. Functoriality factors the map from F_(p-1)C through F_pC, so its image is contained in the next image inside H_nC. Definition correctly uses the image, with no claim that H_n of the inclusion is monic.

Examined dependency IDs: `def-filtered-chain-complex`, `prop-homology-respects-identities-and-composition`, `thm-a-chain-map-induces-a-well-defined-map-on-homology`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### lem-the-associated-graded-of-filtered-homology-is-a-subquotient-of-chain-level-data — accept

Set A_p=F_pC_n∩Z_n. Cycles of F_pC map epically onto their homology, so F_pH=(A_p+D_n)/D_n. Nested quotient followed by second quotient gives A_p/(A_p∩(A_(p-1)+D_n)); modularity since A_(p-1)≤A_p reduces denominator to A_(p-1)+(F_pC_n∩D_n), because D_n≤Z_n. Every inclusion and quotient is provided by the local categorical calculus; no element embedding theorem or AC is used.

Examined dependency IDs: `def-induced-filtration-on-homology`, `lem-spectral-sequence-subquotient-and-local-lifting-calculus`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### def-r-cycles-and-r-boundaries-of-an-increasingly-filtered-complex — accept

A^r is an intersection with an inverse-image pullback, hence a typed subobject; A^0=F_p by filtration preservation. For r≥1 the second denominator summand has d-source bound (p+r-1)-(r-1)=p and the first lies in F_(p-1). Separate r=0 avoids negative-page expressions. Barred models are images in gr; the following quotient comparison handles lower-filtration approximate cycles. Compared Sharifi4.2.2, local full text /tmp/uc34-sharifi-homalg.txt lines5663–5750 (current edition printed90–91), reversing both indices. Live original URL fetch redirected and failed; existing complete cached PDF/text is available and read. Initial recording was temporarily blocked by unrelated run-wide Step3a drift, now cleared.

Examined dependency IDs: `def-filtered-chain-complex`, `lem-spectral-sequence-subquotient-and-local-lifting-calculus`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### lem-r-boundaries-embed-in-r-cycles — accept

For the first summand A^(r-1)_(p-1), d lands in F_((p-1)-(r-1))=F_(p-r). The second is an image in F_p whose differential vanishes by d²=0. Both factor through the pullback defining A^r and their sum does too. At r=0 simply F_(p-1)≤F_p. This categorical inclusion requires no element lifting.

Examined dependency IDs: `def-r-cycles-and-r-boundaries-of-an-increasingly-filtered-complex`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### def-r-page-of-the-spectral-sequence-of-a-filtered-complex — accept

Quotient defined by proved containment. Kernel of A^r→gr_p is A^r∩F_(p-1)=A^(r-1)_(p-1), so nested/second quotient gives barred model exactly. For fixed r≤k, upper sources p+r-1≤p+k and lower targets p-r≥p-k exceed the discarded F_(p-k-1); quotienting the window preserves those inverse-image conditions and denominator images, so the finite-window assertion holds. r=0 reduces to adjacent graded quotient. No unbounded convergence is inferred.

Examined dependency IDs: `def-r-cycles-and-r-boundaries-of-an-increasingly-filtered-complex`, `lem-r-boundaries-embed-in-r-cycles`, `lem-spectral-sequence-subquotient-and-local-lifting-calculus`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### lem-the-filtered-differential-induces-d-r-on-the-r-page — accept

d(A^r_(p,n)) lies in F_(p-r) and ker d, hence target A^r. d of lower denominator A^(r-1)_(p-1,n) is exactly permitted target boundary-image term since (p-r)+r-1=p-1; d kills the original image summand. Cokernel descent therefore produces the map uniquely. r=0 uses established gr differential. Epic local lifting conventions meet arbitrary abelian-category scope.

Examined dependency IDs: `def-r-page-of-the-spectral-sequence-of-a-filtered-complex`, `lem-spectral-sequence-subquotient-and-local-lifting-calculus`, `prop-the-associated-graded-of-a-filtered-complex-is-a-bigraded-complex`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### prop-the-rth-differential-has-bidegree-minus-r-r-minus-one — accept

Target p-r and total n-1 force q+r-1. Thus bidegree (-r,r-1), total -1, including r=0. Statement explicitly corrects the misleading stable ID suffix; mathematical claim and supplied map agree.

Examined dependency IDs: `lem-the-filtered-differential-induces-d-r-on-the-r-page`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### lem-the-rth-differential-squares-to-zero — accept

Compose the two uniquely descended differential maps and precompose with epic A^r→E^r. The result is the chain-level d² followed by target quotient, hence zero; epic cancellation gives the claim. r=0 works with A^0=F_p. All sources/targets were checked in the preceding map lemma.

Examined dependency IDs: `lem-the-filtered-differential-induces-d-r-on-the-r-page`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### thm-the-next-page-is-the-homology-of-the-current-page — accept

For r≥1 an epic local lift of a kernel class satisfies dx=a+db with a∈A^(r-1)_(p-r-1,n-1), b∈A^(r-1)_(p-1,n); x-b then lies in A^(r+1) and has the same E^r class. Incoming I=d(A^r_(p+r,n+1)) lies in A^(r+1), contains J, and modularity reduces A^(r+1)∩(L+I) to A^r_(p-1,n)+I, exactly B^(r+1). Thus induced E^(r+1)→H(E^r) is epic and monic, hence iso by coimage/image axiom; its inverse is the stated alpha. r=0 gives A^1/(F_(p-1)+dF_p) directly. Unique descent ensures naturality. Read complete Sharifi4.2.3 proof in cached homalg PDF/text printed91–92, lines5752–6020; source leaves some quotient calculation to reader, explicitly verified here with the local calculus.

Examined dependency IDs: `def-homology-object-of-a-chain-complex`, `def-r-page-of-the-spectral-sequence-of-a-filtered-complex`, `lem-spectral-sequence-subquotient-and-local-lifting-calculus`, `lem-the-filtered-differential-induces-d-r-on-the-r-page`, `lem-the-rth-differential-squares-to-zero`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### prop-e-zero-is-the-associated-graded-complex — accept

Z^0=F_p and B^0=F_(p-1) are the same chosen quotient model as gr, and the differential is its unique descent. Thus the exact-model equality and differential agreement follow the definitions; it asserts no universal literal equality of different chosen cokernel representatives.

Examined dependency IDs: `def-r-page-of-the-spectral-sequence-of-a-filtered-complex`, `prop-the-associated-graded-of-a-filtered-complex-is-a-bigraded-complex`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### prop-e-one-is-homology-of-the-associated-graded-complex — accept

Apply alpha_0 to the same associated-graded complex; chain homology degree p+q matches bidegree. If d lowers filtration at least one, d0=0; A1=F_p and B1=F_(p-1)+dF_p=F_(p-1), so d1 is the stated adjacent-quotient differential. Uses only checked page formulas.

Examined dependency IDs: `prop-e-zero-is-the-associated-graded-complex`, `thm-the-next-page-is-the-homology-of-the-current-page`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### def-limiting-cycles-boundaries-and-e-infinity — accept

A^(r+1)≤A^r gives decreasing barred cycles; actual image boundary subobjects increase because their source grows from F_(p+r-1) to F_(p+r) with the same d-bound F_p. All actual boundaries are cycles at every stage, so join of barred boundaries lies in meet of barred cycles when these exist. Their quotient is well defined. Using barred rather than unprojected B avoids false monotonicity; eventual stationarity needs only finite values, no completeness or convergence assumption.

Examined dependency IDs: `def-r-page-of-the-spectral-sequence-of-a-filtered-complex`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### def-homological-spectral-sequence — accept

Square-zero maps of bidegree (-r,r-1) have typed incoming image contained in outgoing kernel, allowing homology separately at each bidegree in any abelian category. Specified alpha_r fixes transition data; no infinite sum is required. r0≥0, quadrant support and finite-support-on-each-diagonal convention are explicit and adequate for later degree-reason stabilization.

Examined dependency IDs: `def-abelian-category`, `def-homology-object-of-a-chain-complex`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### def-cohomological-spectral-sequence — accept

Negating p and q turns homological target (-p-r,-q+r-1) into cohomological (p+r,q-r+1), hence total +1. Square-zero and alpha data transport unchanged under this bijective relabeling. No opposite-category axiom or sign convention is tacitly assumed.

Examined dependency IDs: `def-homological-spectral-sequence`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### def-morphism-of-spectral-sequences — accept

Compatibility f_(r+1) alpha_r=alpha'_r H(f_r) is correctly typed for alpha:H(E^r)→E^(r+1). A whole-page isomorphism commuting with d has inverse commuting with d, conjugates kernels/images and induces a homology iso; finite induction propagates through alpha. Abstract sequence maps do not include an abutment map. Read homology-map supplier supports quotient descent.

Examined dependency IDs: `def-cohomological-spectral-sequence`, `def-homological-spectral-sequence`, `thm-a-chain-map-induces-a-well-defined-map-on-homology`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences — accept

Filtration preservation plus df=fd takes inverse-image A^r, lower-filtration summands and boundary-image summands into their counterparts. Unique quotient descent commutes with d, identities and composites. The canonical E^(r+1)→H(E^r) construction used only such inclusions and descents, so its inverse alpha also commutes. Eventual stable maps follow the same identifications; a whole-page iso stays iso thereafter. No infinite-limit exactness or AC.

Examined dependency IDs: `def-filtered-chain-map`, `def-morphism-of-spectral-sequences`, `lem-spectral-sequence-subquotient-and-local-lifting-calculus`, `thm-the-next-page-is-the-homology-of-the-current-page`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### def-spectral-sequence-stabilization-at-a-bidegree — accept

Both incoming and outgoing zero maps identify local homology with the page term; alpha then specifies the transition iso. Recursive pullback of kernels and boundaries through the initial-page subquotient presentations yields nested numerator/denominator subobjects. Once both differentials vanish these subobjects stop changing, so their eventual quotient is defined without any infinite meet/join. Mere isomorphism of underlying objects is appropriately excluded.

Examined dependency IDs: `def-homological-spectral-sequence`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### def-collapse-at-a-page — accept

Quantification is uniform over all bidegrees and all r≥s, guaranteeing transition identifications with stable terms. It correctly distinguishes one zero differential and bidegreewise stabilization with unbounded thresholds. No splitting of any abutment is asserted.

Examined dependency IDs: `def-spectral-sequence-stabilization-at-a-bidegree`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### prop-degree-reasons-force-stabilization-in-a-bounded-region — accept

Zeros persist through homology. Incoming source (p+r,q-r+1) lies on diagonal n+1 and outgoing target (p-r,q+r-1) on n-1; finite supports on those two diagonals exclude both for sufficiently large r. In first quadrant r>max(p,q+1) suffices. In third quadrant r>max(-p,1-q) suffices. Finite global support admits finite maximum threshold; no choice across infinitely many bidegrees or abutment conclusion is needed.

Examined dependency IDs: `def-spectral-sequence-stabilization-at-a-bidegree`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### prop-a-spectral-sequence-supported-in-one-row-or-column-collapses — accept

For r≥1, nonzero filtration shift prevents both endpoints in one column; for r≥2, nonzero complementary shift prevents both endpoints in one row. Vanishing outside that row/column persists under subquotients, so induction gives all later zero differentials. Thresholds s≥1 and s≥2 correctly exclude possible d0 in a column and d1 in a row. Reversing both indices preserves the argument.

Examined dependency IDs: `def-collapse-at-a-page`, `prop-degree-reasons-force-stabilization-in-a-bounded-region`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### def-abutment-to-a-filtered-object — accept

Specified stable-term isomorphisms to adjacent filtration quotients are typed by the accepted associated-graded and infinity definitions. Only finite degreewise convergence will be asserted here; this datum does not identify E∞ with H or determine extensions. No existence of an abutment is built into an abstract spectral sequence.

Examined dependency IDs: `def-associated-graded-object-of-a-filtered-object`, `def-limiting-cycles-boundaries-and-e-infinity`, `def-spectral-sequence-stabilization-at-a-bidegree`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology — accept

For fixed p,n choose finite r meeting lower endpoint in C_(n-1) and upper endpoint in C_(n+1). Then A^r=F_p∩Z_n, lower denominator=F_(p-1)∩Z_n, and d(d^-1(F_p))=F_p∩im d by epic pullback. These persist for larger r and match the previously proved graded homology formula. At lower C_n endpoint cycles are zero; at upper endpoint every C_n-cycle already lies in F_p and maps onto full H_n, so the induced filtration is finite. Only finitely many bounds needed at each bidegree; no uniform n-bound or AC. Complete Sharifi4.2.3 bounded argument read in cached text lines5950–6020, printed91–92; all local categorical obligations are supplied.

Examined dependency IDs: `def-abutment-to-a-filtered-object`, `def-exhaustive-separated-bounded-and-finite-filtration`, `def-limiting-cycles-boundaries-and-e-infinity`, `lem-spectral-sequence-subquotient-and-local-lifting-calculus`, `lem-the-associated-graded-of-filtered-homology-is-a-subquotient-of-chain-level-data`, `prop-degree-reasons-force-stabilization-in-a-bounded-region`, `thm-the-next-page-is-the-homology-of-the-current-page`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence — accept

At (0,n) outgoing maps leave the quadrant, so successive terms are quotients, producing E^s_(0,n)→E∞_(0,n). At (n,0) incoming source has q=1-r<0 for r≥2, so successive terms embed in preceding terms, producing E∞_(n,0)→E^s_(n,0). Normalized F_-1=0,F_n=H identify endpoint graded terms with F0 and H/F_(n-1). Compose inclusions/quotients as stated. Cohomological bidegrees reverse which axis receives versus emits; arrows given are correct. No global epimorphism/monomorphism of composites claimed.

Examined dependency IDs: `def-abutment-to-a-filtered-object`, `prop-degree-reasons-force-stabilization-in-a-bounded-region`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### lem-edge-homomorphisms-are-natural — accept

At each axis the quotient or inclusion map commutes with f_r by differential and alpha compatibility. Compose finitely to a stable page and then with the supplied compatible filtered-abutment map; filtration inclusions and quotients commute. Filtered chain maps qualify by the checked natural bounded-abutment identification. Extra abutment compatibility is explicitly required, not inferred for arbitrary abstract maps.

Examined dependency IDs: `def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence`, `def-morphism-of-spectral-sequences`, `prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences`, `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### def-extension-problem-of-a-convergent-spectral-sequence — accept

For each adjacent filtration inclusion, abelian normality gives the short exact sequence with cokernel gr_p. Reconstructing the finite filtered target requires these extensions; abutment data specifies only their graded pieces. Definition makes no classification or existence assertion beyond the given filtration.

Examined dependency IDs: `def-abutment-to-a-filtered-object`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### lem-abelian-group-model-for-spectral-sequence-computations — accept

Verified Ab directly against read abelian-category axiom: pointwise Hom addition is abelian and composition bilinear; finite cartesian products satisfy biproduct universal property; subgroup kernels and coset cokernels satisfy their universal properties; [g]↦f(g) is a well-defined additive bijection coimage→image whose inverse is additive. Coset equivalence and quotient operations require no representative selector. Ordered-ring cancellation proves injectivity of 2:Z→Z; modulo-n operations match coset addition. Division by positive2,4 supplies unique finite residues, sufficient for all later counts/order comparisons. Read all declared supplier bodies (division earlier); Stacks12.5.1 used only as axiom checklist, no all-small-limits theorem.

Examined dependency IDs: `def-abelian-category`, `def-equivalence-relation`, `def-group-homomorphism`, `thm-division-algorithm-in-z`, `thm-int-ordered-ring`, `thm-integers-modulo-n-basic-algebra`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects — accept

Use F_-1=0,F0=2Z/4,F1=Z/4 and F0=(Z/2)×0,F1=(Z/2)^2. Map [a]_2↦[2a]_4 identifies first lower piece; reduction mod2 identifies upper quotient. Coordinate maps give both second pieces Z/2. [1]_4 has order4, whereas twice every element of (Z/2)^2 is zero; hence no underlying group isomorphism. Explicit finite residue model supplied, no classification or Ext result.

Examined dependency IDs: `def-associated-graded-object-of-a-filtered-object`, `lem-abelian-group-model-for-spectral-sequence-computations`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### prop-collapse-does-not-in-general-split-the-abutment — accept

Read stalk-complex definition; put each filtered group in degree0 with d=0. Direct page formulas then have all d^r=0 and stable graded pieces, while bounded abutment is original H0. A split extension for Z/4 would identify it with the two Z/2 pieces, impossible by the preceding exponent calculation. No first-quadrant restriction is needed for this bounded example.

Examined dependency IDs: `cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects`, `def-collapse-at-a-page`, `def-extension-problem-of-a-convergent-spectral-sequence`, `def-zero-and-stalk-complex`, `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### thm-the-cohomological-filtered-complex-construction — accept

Read cochain definition already uses C_n=K^-n and d_n=d_K^-n. Decreasing F^-p becomes increasing in p; E^r_(-p,-q) is gr^p K^(p+q), d target becomes (p+r,q-r+1). E1 and finite E∞ transport to H^(p+q)(gr^p K) and gr^p H^(p+q) respectively, with image filtration. No negation of differential is needed when reversing grading direction alone. Naturality transports through the same formulas; finite convergence assumptions are retained.

Examined dependency IDs: `def-cochain-complex-in-an-abelian-category`, `def-cohomological-spectral-sequence`, `prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences`, `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### prop-shifting-a-filtered-complex-reindexes-its-spectral-sequence — accept

Original total degree n-a and filtration p-b give complementary q+b-a. Substitution in both A^r and denominator source p+r-1 gives precisely the same quotient and induced d, hence alpha by uniqueness. Homology and finite filtration endpoints translate identically. Explicit sign-free translation is a valid complex and does not claim the usual signed shift convention.

Examined dependency IDs: `prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences`, `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`, `thm-the-next-page-is-the-homology-of-the-current-page`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### fs-e-infinity-is-the-abutment-object — accept

The supplied Z/4 filtered stalk has E∞ pieces Z/2 in two bidegrees, whereas H0 has exponent4. Even forming their finite direct sum cannot give H0. Checked implicit stalk and bounded-abutment suppliers, including the earlier proposition constructing this exact witness. Declared deps omit those implicit construction interfaces; recorded here for dependency reconciliation. No claim relies on literal equality of differently typed families.

Examined dependency IDs: `cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects`, `def-abutment-to-a-filtered-object`, `def-zero-and-stalk-complex`, `prop-collapse-does-not-in-general-split-the-abutment`, `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### fs-e-r-plus-one-is-literally-equal-to-the-homology-of-e-r — accept

Use distinct tagged copies of Z/2 supported at (0,0), transport their group operations, and give zero differentials. Homology is canonically isomorphic to each term; compose with tag-changing isomorphism for alpha. Definition requires these isomorphisms, not set equality; tagged underlying sets supply an explicit countermodel without choices or any nonzero differential.

Examined dependency IDs: `def-homological-spectral-sequence`, `lem-abelian-group-model-for-spectral-sequence-computations`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### fs-a-spectral-sequence-collapses-when-one-differential-is-zero — accept

C2=Zx,C1=Zy,dx=y is filtered with x level2,y level0. Only graded terms (2,0),(0,1) are nonzero; d0,d1 have zero possible endpoints, while d2[x]=[y] is the identity by the actual chain differential. Kernel and cokernel vanish so E3=0. The counterexample meets the locally constructed Ab and page interfaces and disproves collapse after a single zero differential.

Examined dependency IDs: `def-collapse-at-a-page`, `def-r-page-of-the-spectral-sequence-of-a-filtered-complex`, `lem-abelian-group-model-for-spectral-sequence-computations`, `lem-the-filtered-differential-induces-d-r-on-the-r-page`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### fs-collapse-solves-all-extension-problems — accept

The already audited collapse-with-Z/4-stalk proposition supplies exactly a collapsed sequence with nonsplit extension of Z/2 by Z/2. Its hypotheses match this negative assertion and no additional mathematical input is required.

Examined dependency IDs: `prop-collapse-does-not-in-general-split-the-abutment`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### fs-the-filtration-on-homology-is-h-n-of-the-filtered-subcomplex — accept

Identity complex Z in degrees1,0 has H0=0; its degree-zero subcomplex has H0=Z. F_-1=0,F0=that subcomplex,F1=C is preserved by d. Therefore the induced image F0H0 is zero and differs even up to isomorphism from H0(F0C). Group and homology definitions suffice; no lifting or AC.

Examined dependency IDs: `def-induced-filtration-on-homology`, `lem-abelian-group-model-for-spectral-sequence-computations`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### fs-e-zero-and-e-one-page-conventions-are-universal-across-sources — escalate

The identity-complex calculation correctly distinguishes gr C from H(gr C), and truncating at page1 gives a legitimate sequence. But neither establishes the stated factual claim that E0/E1 notation differs across sources: changing the starting page retains both labels and meanings. Read Weibel5.2.1 and5.5.1 at https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf (printed122,135) and Sharifi4.2.2–4.2.3 cached complete text (printed90–92); both use the same E0=gr,E1=H(gr) convention. Owner should identify and quote precisely a genuinely differing source convention and supply its reindexing, or resolve intended scope without dropping the claim. No repair or invented source discrepancy applied.

Examined dependency IDs: `def-homological-spectral-sequence`, `lem-abelian-group-model-for-spectral-sequence-computations`, `prop-e-one-is-homology-of-the-associated-graded-complex`, `prop-e-zero-is-the-associated-graded-complex`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### ex-the-two-step-filtration-and-its-spectral-sequence — accept

Filtration levels1 in degree1 and0 in degree0 give gr copies Z at (1,0),(0,0), d0=0 and d1=2. Injectivity of2 and its cokernel give only Z/2 at (0,0) on E2; all later maps vanish. H1=0,H0=Z/2 and F_-1H0=0,F0H0=H0 because all degree-zero cycles already lie in F0. The requested induced filtration is thereby determined; bounded abutment matches.

Examined dependency IDs: `def-r-page-of-the-spectral-sequence-of-a-filtered-complex`, `lem-abelian-group-model-for-spectral-sequence-computations`, `lem-the-filtered-differential-induces-d-r-on-the-r-page`, `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### ex-a-filtered-complex-collapsing-at-e-one — accept

Both chain terms enter at level0, so E0 is the column-zero two-term multiplication-by2 complex. Its homology E1 is Z/2 at (0,0) only; all later differential endpoints are zero. Image homology filtration is zero for p<0 and full for p≥0. Every calculation uses the local Ab model and checked page/abutment formulas.

Examined dependency IDs: `def-r-page-of-the-spectral-sequence-of-a-filtered-complex`, `lem-abelian-group-model-for-spectral-sequence-computations`, `lem-the-filtered-differential-induces-d-r-on-the-r-page`, `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### ex-a-nonzero-d-two-differential-in-a-small-filtered-complex — accept

Direct substitution for dx=y, x level2 in degree2,y level0 in degree1 gives E0=E1=E2 with Z at (2,0),(0,1). d2 is identity, hence E3=0 and later pages zero. Original identity complex is acyclic, so all image-filtration homology terms vanish, agreeing with bounded abutment. No inference from vanishing d0 or d1 alone.

Examined dependency IDs: `def-r-page-of-the-spectral-sequence-of-a-filtered-complex`, `lem-abelian-group-model-for-spectral-sequence-computations`, `lem-the-filtered-differential-induces-d-r-on-the-r-page`, `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### ex-edge-maps-from-a-first-quadrant-spectral-sequence — accept

Repeated the level1/0 multiplication-by2 complex directly: E2 only Z/2 at (0,0), H0=Z/2 with F_-1=0,F0=H0. Both endpoint composites in degree0 are identity under the canonical quotient identification. Positive-degree H and E2 terms are zero, so both maps vanish. First-quadrant and s=2 endpoint requirements are satisfied; no B-page dependency needed.

Examined dependency IDs: `def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence`, `lem-abelian-group-model-for-spectral-sequence-computations`, `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### ex-two-filtered-abelian-groups-with-the-same-associated-graded — accept

For Z/4 use lower-piece isomorphism [a]_2↦[2a]_4 and upper quotient reduction mod2. For (Z/2)^2 use first-coordinate inclusion for F0 and second-coordinate projection for upper quotient. These preserve the indicated filtrations when quotients carry their induced filtrations. Both graded families have two Z/2 pieces; exponent4 versus2 excludes an isomorphism of whole groups. Complete concrete supplier checked.

Examined dependency IDs: `cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects`, `lem-abelian-group-model-for-spectral-sequence-computations`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### cex-collapse-with-a-nonsplit-extension-problem — accept

The supplied Z/4 filtered stalk has all differentials zero. Any group section of reduction Z/4→Z/2 must take1 to an odd residue1 or3; both double to2≠0, contradicting preservation of 2·1=0. Thus the explicit abutment extension remains nonsplit despite collapse, using only finite residue arithmetic.

Examined dependency IDs: `lem-abelian-group-model-for-spectral-sequence-computations`, `prop-collapse-does-not-in-general-split-the-abutment`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### ex-the-cohomological-reindexing-of-a-homological-spectral-sequence — accept

Reconstructed dx=y with degree/level (2,2),(1,0). Under K^m=C_-m and F^p=F_-p the jumps are -2 and0 in degrees-2,-1. Nonzero d2 maps (-2,0)→(0,-1), degree (2,-1), identity on Z. Its homology page is zero. This follows the complete reindexing supplier and direct Ab computation, with no implicit signed-shift use.

Examined dependency IDs: `lem-abelian-group-model-for-spectral-sequence-computations`, `thm-the-cohomological-filtered-complex-construction`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### lem-module-relative-hilbert-samuel-polynomial-for-koszul-comparison — accept

Composition series of N=M/IM gives m^cN=0; consequently m^c I^nM⊂I^(n+1)M and all G_n are finite-length quotients of finitely many N copies. R/m^c has a finite m-adic filtration with finite-dimensional residue-field factors. Thus G is finite over (R/m^c)[X1,...,Xs]. Hilbert induction correctly uses U=ker(V(-1) --Xs→ V), so (1-t)HS_V=HS_W-HS_U; U is finite by read choice-free finite-module Noetherian theorem and is killed by Xs. Finite homogeneous decompositions suffice. Cumulative series divides by1-t, giving eventual binomial polynomial and unique rational polynomial by root bound. N=0 gives M=IM and every quotient zero directly, without Nakayama. I=R,M=0 handled. Read complete Stacks10.58.7 and10.59.5 arguments at 00JV,00K4; local argument strengthens ring-relative to module-relative case without dimension theory or defective Hilbert–Serre proof. Read Hilbert-basis finite-generation proof: only finite choices and Noetherian→ACC direction used.

Examined dependency IDs: `cor-finite-direct-sums-preserve-chain-conditions`, `cor-length-is-additive-in-short-exact-sequences`, `def-associated-graded-ring-and-module`, `def-composition-series-and-length-of-a-module`, `def-local-ring`, `lem-polynomial-ideal-finite-generation`, `thm-chain-conditions-in-short-exact-sequences`, `thm-finitely-generated-modules-over-noetherian-rings-are-noetherian`, `thm-hilbert-basis-theorem`, `thm-noetherian-ring-ideal-characterisations`, `thm-noetherian-ring-quotients-and-localisations`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### def-koszul-euler-characteristic-and-degree-indexed-multiplicity — accept

Finite sum of homology lengths is defined for bounded finite-length homology. Local polynomial lemma supplies a unique P with the fixed n+1 quotient convention, so j![n^j]P is unambiguous for every j≥0, including coefficients below top degree. Module-relative defining ideal explicitly allows I=R, with P=0; M=0 and empty sequence I=0,K=M degree0 agree with the read Koszul definition. Empty defining condition is exactly finite length M and P=length M. No support-dimension theorem used.

Examined dependency IDs: `def-composition-series-and-length-of-a-module`, `def-koszul-complex-of-a-sequence-with-coefficients`, `lem-module-relative-hilbert-samuel-polynomial-for-koszul-comparison`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### lem-koszul-homology-finite-length-for-an-ideal-of-definition — accept

Checked finite-length⇔closed-point-support: composition series yields m^cN=0; conversely support/annihilator plus AC radical-intersection gives radical AnnN=m for nonzero finite N, and finite-generator pigeonhole exponent kills N. Successive m-adic factors are finite-dimensional over R/m, hence finite length. For p⊃I, localized Nakayama applies to finite M_p over local R_p with I_p⊂pR_p=J(R_p); for p not containing I the quotient is zero. Thus Supp(M/IM)=Supp M∩V(I). Finite Koszul terms give finite cycles/homology; exact localization and generator contraction place support inside this intersection. Empty sequence,M=0 handled. Read all declared bodies and implicit prime-local/Jacobson interfaces; these implicit IDs need metadata reconciliation but supplier clauses are sound and met. AC covers separating primes and inherited Nakayama, not infinite finite-basis choices.

Examined dependency IDs: `cor-koszul-homology-localises`, `cor-length-is-additive-in-short-exact-sequences`, `cor-sequence-ideal-annihilates-koszul-homology`, `def-axiom-of-choice`, `def-jacobson-radical-of-a-ring`, `def-koszul-euler-characteristic-and-degree-indexed-multiplicity`, `lem-koszul-generator-contraction-homotopy`, `thm-finitely-generated-modules-over-noetherian-rings-are-noetherian`, `thm-localisation-at-a-prime-is-local`, `thm-localisation-of-modules-is-exact`, `thm-nakayama-lemma`, `thm-noetherian-ring-ideal-characterisations`, `thm-radical-as-intersection-of-primes`, `thm-support-and-annihilator-of-a-finite-module`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### lem-bounded-finite-length-complex-euler-identities — accept

Length additivity yields length K_i=length H_i+length B_i+length B_(i-1); bounded finite sum cancels the two boundary terms with opposite signs. All cycles/boundaries have finite length as subquotients of terms. For a bounded SES with finite-length homology, cut its finite LES at images and telescope to chi B=chi A+chi C; this does not require finite-length chain terms. A degree-one shift reverses signs. Endpoints and zero complexes are included; no convergence or AC.

Examined dependency IDs: `cor-length-is-additive-in-short-exact-sequences`, `def-koszul-euler-characteristic-and-degree-indexed-multiplicity`, `thm-long-exact-sequence-in-homology`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### lem-shifted-adic-koszul-filtration-euler-comparison — accept

Checked shifted filtration d:I^(p+n)→I^(p+n+1), including zero graded pieces for p+n<0. Graded differential is Koszul on initial forms with wedge weights1; homology finite over Noetherian gr_I R and killed by its degree-one generators, hence supported in finitely many grading degrees using finite homogeneous generators. LES gives actual isomorphisms H(F^q)→H(F^p) for all q≥p≥p0. Fix p≥r: F^qK^n=I^(q-p)E^n. Read full Artin–Rees/Rees suppliers; for cycles Z^n⊂E^n, high intersection lies in IZ^n, so the surjective homology map has image in IH(E). Finite H(E), proper I⊂J(R), and AC-qualified Nakayama force zero. Finite maximum over n suffices. Quotient terms have finite I-adic length, and LES identifies their homology with K. For I=R, sum a_j h_j contracts K and every tail equals K; empty sequence positive tails are0; M=0 immediate. Read entire Stacks43.15.5 argument at 0AZU; local tail proof supplies the convergence step independently, no spectral-sequence supplier or cross-batch edge.

Examined dependency IDs: `cor-sequence-ideal-annihilates-koszul-homology`, `def-associated-graded-ring-and-module`, `def-axiom-of-choice`, `def-jacobson-radical-of-a-ring`, `lem-bounded-finite-length-complex-euler-identities`, `lem-koszul-generator-contraction-homotopy`, `lem-koszul-homology-finite-length-for-an-ideal-of-definition`, `lem-rees-module-finiteness-and-stable-filtrations`, `thm-artin-rees-lemma`, `thm-finite-generation-and-finite-presentation-over-a-noetherian-ring`, `thm-finitely-generated-modules-over-noetherian-rings-are-noetherian`, `thm-hilbert-basis-theorem`, `thm-long-exact-sequence-in-homology`, `thm-nakayama-lemma`, `thm-noetherian-ring-quotients-and-localisations`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### thm-hilbert-samuel-multiplicity-as-koszul-euler-characteristic — accept

For deep p>r, degree -i quotient is binomial(r,i) copies of M/I^(p-i)M, so chi=sum(-1)^i binomial(r,i)P(p-i-1), correctly matching the n+1 convention. Read exterior basis lemma: sorted wedges span and alternating determinant coordinates prove independence over arbitrary commutative rings. Monomial generators of I^j give finite-length bound by length(M/IM) binomial(j+r-1,r-1); stars-and-bars and summation yield O(n^r), so eventual nonnegative P has degree≤r. Pascal induction expands Delta^r; degree lowering gives constant r![n^r]P at t=p-1. Complete Stacks43.15.4–5 proof read; local strategy independently supplies monomial count, degree bound and tail comparison. r=0,I=R,M=0 match stated conventions. No dimension theorem or parameter-reduction consumer used.

Examined dependency IDs: `def-axiom-of-choice`, `def-koszul-euler-characteristic-and-degree-indexed-multiplicity`, `lem-bounded-finite-length-complex-euler-identities`, `lem-exterior-algebra-basis-monomials`, `lem-koszul-homology-finite-length-for-an-ideal-of-definition`, `lem-module-relative-hilbert-samuel-polynomial-for-koszul-comparison`, `lem-shifted-adic-koszul-filtration-euler-comparison`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### lem-koszul-euler-characteristic-first-element-reduction — accept

T is finite as a submodule of finite M and xT=0. The preceding proved support identity gives Supp(T/yT)⊂Supp M∩V(x,y)=Supp(M/(x,y)M); hence T/yT and C/yC have finite length, without claiming length T finite. For Q=[M --x→ M], quotient T[1] gives Qprime; kernel of Qprime→C is [M/T≅xM], acyclic. Tensoring with finite-free P=K(y;R) preserves both SES degreewise. Finite filtration by P degrees≤j has acyclic shifted kernel copies as successive quotients, so its total is acyclic by LES. Left tensor term has differential -d_P and degree+1, hence Euler sign minus. Wedge concatenation and moving degree-zero coefficient M across P identify the middle and right with stated Koszul complexes. Read complete Hochster printed165 proposition/corollary discussion (PDF164; URL in contract), which gives last-element form through change-of-rings; local finite-SES proof independently establishes first-element form with all finiteness and signs. Empty y and unit-generated ideal included.

Examined dependency IDs: `def-axiom-of-choice`, `lem-bounded-finite-length-complex-euler-identities`, `lem-exterior-algebra-basis-monomials`, `lem-exterior-multiplication-koszul-sign-rule`, `lem-koszul-complex-concatenation-tensor-isomorphism`, `lem-koszul-homology-finite-length-for-an-ideal-of-definition`, `thm-localisation-of-modules-is-exact`, `thm-long-exact-sequence-in-homology`, `thm-nakayama-lemma`, `thm-support-and-annihilator-of-a-finite-module`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### ex-koszul-euler-characteristic-empty-sequence — accept

Empty Koszul complex is M in degree0, so chi=length M. Finite-length M is finite: lift one generator of each simple factor along its finite composition series. For I=0 all M/I^(n+1)M equal M, hence P is constant length M and e0 agrees. M=0 gives0. AC is stated to match the theorem interface, although this displayed direct computation uses only finite choices.

Examined dependency IDs: `def-axiom-of-choice`, `def-koszul-euler-characteristic-and-degree-indexed-multiplicity`, `thm-hilbert-samuel-multiplicity-as-koszul-euler-characteristic`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### ex-koszul-euler-characteristic-annihilator-correction — accept

DVR is a domain and all ideals principal by the read normal form/ideal proof, so it is Noetherian with maximal ideal(t); theorem hypotheses met. Multiplication by t on R⊕k has kernel0⊕k and cokernel k⊕k. Lengths1,2 give chi=1; read DVR length induction gives P(n)=(n+1)+1=n+2 and e1=1. First-element reduction with empty y reads2-1=1, explicitly displaying the necessary annihilator correction. AC propagated and finite-length defining condition verified.

Examined dependency IDs: `def-axiom-of-choice`, `def-discrete-valuation-ring`, `lem-koszul-euler-characteristic-first-element-reduction`, `thm-dvr-ideal-and-module-length`, `thm-hilbert-samuel-multiplicity-as-koszul-euler-characteristic`, `thm-ideals-in-a-dvr`, `thm-noetherian-ring-ideal-characterisations`.
Contract unchanged. Mechanical results are recorded in the final checks below.

### ex-koszul-euler-characteristic-redundant-zero-generator — accept

For ordered wedges (t,0), d1(a,b)=ta and d2(c)=(0,tc), since d(e1∧e2)=t e2. Domain cancellation gives H2=0,H1=k,H0=k, so chi=0. DVR length theorem gives P(n)=n+1, e2=0,e1=1. Every nonzero prime contains t by ideal normal form and primality; (0) is prime in the domain and(t) maximal, so exactly these two primes give dimension1. Thus top-dimensional phrase is justified locally, without a general Hilbert–Samuel dimension theorem. DVR Noetherianity follows finite ideal generation; AC and defining-ideal conditions satisfied.

Examined dependency IDs: `def-axiom-of-choice`, `def-discrete-valuation-ring`, `lem-exterior-algebra-basis-monomials`, `lem-koszul-euler-characteristic-first-element-reduction`, `thm-dvr-ideal-and-module-length`, `thm-hilbert-samuel-multiplicity-as-koszul-euler-characteristic`, `thm-ideals-in-a-dvr`, `thm-noetherian-ring-ideal-characterisations`.
Contract unchanged. Mechanical results are recorded in the final checks below.

## Final mechanical checks and reconciliation

Checks were run against current artifacts on 2026-09-10. These are scaffold checks, not publication proof/render checks.

- Whole-run `manifest-deps`: pass, 735 items, zero normalizations/errors.
- Owned manifest-only `content-policy`: pass, 117 items, zero errors/warnings.
- `coverage-checklist --require-destination`: pass for batches 5/6/7, respectively 102/119/24 harvested results, zero errors/warnings.
- `source-fetch-check`: pass, 16/16 verified and resolved sources, zero drops. `source-backing --require-verified`: pass, 47 authored source-backed results, using `phase-2-catchup-24-group-c-source-liveness-20260909.json`. This reuses recorded liveness/fetch evidence; it is not a fresh complete URL sweep. Selective full-argument readings are documented per item.
- `scope-decisions refresh --run phase-2-catchup-24 --group c`, then `check`: pass, 33 current declines, zero pending/errors. Existing evidence-backed `stands` records were preserved, including the previously reconciled future Tor destinations; no owner ruling was invented.
- `frontier-dependency-ledger refresh --run phase-2-catchup-24 --require-reviewed`: pass. Owned consumer inputs for batches 5, 6 and 7 remain `[]`: no declared or actual implicit supplier crosses to another batch in this frontier, including within group c. Published and within-batch implicit suppliers are recorded in item receipts. The Koszul tail proof does not use batch 6 convergence.
- `validate-plan research/plan-spec.json`: exit 0; no item cycles, forward references, illegal B prerequisites or unresolved IDs among populated inventories. Global advisory: 646 page inventories are unasserted. Independent owned comparison matches all eight inventories and `requires`, except the plan explicitly repeats the published statement of `thm-flat-dimension-at-most-n-iff-higher-tor-vanishes`, which the manifest inherits. The repeated statement exactly agrees with the published Statement, including DC and supplied resolution data; this is a representation difference, not a changed claim.
- `extcheck --quiet`: exit 0, 55 existing recorded-not-proved warnings; no policy error.
- Global `depcheck --quiet`: exit 1, 473 warnings and four `published-unaudited` errors outside this dispatch: `cex-separately-continuous-not-jointly-continuous`, `def-metric-continuity`, `lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group`, and `lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams`. No shared/published repair was attempted.

Published defects and omitted implicit-dependency metadata encountered on actual proof paths are recorded above for canonical consumer-ledger reconciliation. They do not silently authorize published edits. Older batch notes contain superseded source/plan blockers; current Step-3a hashes and the checks above govern this dispatch. Owner repairs go directly to the final mechanical gate; current mathematical decisions are not to be retried. A subsequent content/dependency change must be handled by the exact-hash invalidation rules.

Final exact-hash snapshot: 110/117 owned items closed, seven current escalations, no missing/stale receipts; all four owned scopes closed. Whole-run snapshot: 602/735 items closed, 133 work entries, final gate not closed (other groups may continue changing this count). Scoped `git diff --check` and an additional whitespace scan including untracked report/receipt files both passed.
