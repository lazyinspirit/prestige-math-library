# Step 3b dispatch report — semisimple Lie algebras, cohomology, and Levi theory

Run: `phase-2-next-18`  
Role: `alpha-high`  
Owned pair: `semisimple-lie-algebras-cohomology-and-levi-theory` / `semisimple-lie-algebras-cohomology-and-levi-theory-examples`  
Shared batch: `research/phase-2-next-18-batch-5.pages.json`

## Outcome

- Authored both owned pages and all 58 assigned items: 46 A-page items and 12 B-page examples/counterexamples. Every original item/page ID and promised claim is present.
- Registered all 58 items in the shared manifest, coverage, and proof-contract file while preserving the sibling pair. The shared contract now has 112/112 strict-valid entries.
- Recorded a current `sufficient` scope decision and 58 current confidence-1 item decisions: 33 `accept` and 25 `repaired`. No owner or judge/audit stamp was added.
- Added no post-baseline item IDs and no new A/B pairs. The needed local suppliers were already assigned scaffold entries and were fully authored before their consumers.
- No mathematical, dependency, source, rendering, or contract gap remains in the owned pair.

## Audit basis and source record

- Read the repository instructions and schema, DG-29 design, current plan/specification, batch-5 manifest and coverage, Step 3a review and decisions, live autopilot state, sibling pages/items/manifests/contracts, and every relevant dependency statement/proof. No `research/phase-2-next-18-owner-authoring-direction.md` exists.
- Read complete bounded passages from Milne, Chapter I §§3–6; Weibel, §§7.7–7.8; Knapp, Chapter I around Theorem 1.127 and Appendix B §§1–3; and Kirillov, §§3.8 and 6.1. Coverage retains exact printed-section locators and fetch verification.
- Milne, Theorem 6.28 explicitly omits the proof of the strengthened Ado assertion. Its statement/construction is retained as included source context but is not treated as proof evidence; the authored proof uses Knapp, Theorems B.9–B.12 and supplies the finite-extension restriction-of-scalars descent.
- Rechecked the completed sibling radical/nilradical/Lie/Engel suppliers. At the final check, both sibling pages had current decisions for all 54 items.

## Material scaffold and proof repairs

- Restricted the abelian-extension classification to finite-dimensional `g`, so a section is obtained in ZF by lifting a finite basis.
- Rebuilt Cartan solvability with finite descent to a finitely generated characteristic-zero field, complex embedding, the exact published Jordan-form supplier, and the full Jordan/Hermite-interpolation normalizer argument; then derived the semisimplicity criterion with both directions and the zero case.
- Rebuilt Weyl complete reducibility over arbitrary characteristic-zero fields by solving the finite projection equations over the finitely generated field of definition, avoiding any unqualified choice of an algebraic closure.
- Replaced the reductive equivalence scaffold’s unnecessary Lie-theorem/scalar-extension route with an elementary complete-reducibility argument that splits the radical and its derived algebra and proves the radical central.
- Strengthened Whitehead II: split the acting semisimple algebra into the kernel and faithful complement, prove the faithful trace form nondegenerate, construct the inverse-tensor homotopy, and verify all positive degrees. Whitehead I is proved via the extension module and Weyl.
- Corrected the draft Malcev induction. The discarded assertion `nilrad(g/m)=nilrad(g)/m` is false (the two-dimensional affine algebra is a counterexample). The final induction keeps conjugators in `[g,rad(g)]`, handles the central minimal-ideal case by perfectness, and handles the general case through the quotient plus a final Whitehead-I graph cocycle.
- Rebuilt strengthened Ado with the finite-codimensional ideal construction, Hilbert-basis input, codimension-one/nilradical suppliers, the explicit centerlessness supplier for the Levi factor's adjoint representation, the zero-ideal branch, and finite descent using a basis adapted to the actual nilradical. The polynomial characteristic-coefficient argument preserves nilpotence for every ground-field linear combination.
- Replaced arbitrary-algebraic-closure shorthand in the classical Killing-form example by the split Cartan/root-matrix calculation over the stated field.
- Propagated `AC_omega` exactly through the published closed/discrete-subgroup interfaces to the automorphism-group and central-quotient items and their consumers. All other algebraic arguments remain ZF; finite basis choices and finite systems are called out as finite constructions.
- Clarified `n >= 1` in the reductive `gl_n` example and “module with nontrivial action” in the moved-Levi example.

## Ordered item checkpoints

### 01. `def-simple-semisimple-and-reductive-lie-algebras`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `definition`.
- Exact scoped claim: A simple Lie algebra is nonabelian and has no ideals except 0 and itself. Semisimple means zero radical. In characteristic zero, reductive means a direct sum of its center and a semisimple derived algebra.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=checked, one=checked, degenerate=checked, endpoints=checked, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Milne, Lie Algebras, §§4 and 6 — Definition 4.2 and §6, Proposition 6.2, printed pp. 20 and 42
- Dependencies examined: `def-semisimple-lie-algebra-by-vanishing-radical`, `def-reductive-lie-algebra-by-semisimple-derived-algebra-and-center`, `def-lie-subalgebra-ideal-and-center`.
- Decision/checkpoint: `repaired`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `def-trace-form-of-a-finite-dimensional-representation`.

### 02. `def-trace-form-of-a-finite-dimensional-representation`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `definition`.
- Exact scoped claim: For a finite-dimensional representation rho:g→gl(V), define B_rho(x,y)=tr(rho(x)rho(y)).
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=checked, one=checked, degenerate=checked, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Kirillov, An Introduction to Lie Groups and Lie Algebras, §6.1 — §6.1, trace-form definition preceding Lemma 6.1, printed p. 105
- Dependencies examined: `def-representation-of-a-lie-algebra`, `def-trace-of-an-endomorphism`.
- Decision/checkpoint: `accept`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `def-killing-form-of-a-finite-dimensional-lie-algebra`.

### 03. `def-killing-form-of-a-finite-dimensional-lie-algebra`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `definition`.
- Exact scoped claim: The Killing form of finite-dimensional g is K_g(x,y)=tr(ad_x ad_y), the trace form of the adjoint representation.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=checked, one=not_applicable, degenerate=checked, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Milne, Lie Algebras, §4, Killing form — §4, paragraph following Proposition 4.8, printed p. 42
- Dependencies examined: `def-trace-form-of-a-finite-dimensional-representation`, `prop-derivations-form-a-lie-algebra-and-inner-derivations-form-an-ideal`.
- Decision/checkpoint: `accept`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `prop-trace-forms-are-symmetric-and-invariant`.

### 04. `prop-trace-forms-are-symmetric-and-invariant`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `proposition`.
- Exact scoped claim: B_rho is bilinear, symmetric, and invariant: B_rho([z,x],y)+B_rho(x,[z,y])=0. Hence the Killing form has these properties.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=checked, one=not_applicable, degenerate=checked, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Kirillov, An Introduction to Lie Groups and Lie Algebras, Lemma 6.1 — §6.1, Lemma 6.1, printed p. 105
- Dependencies examined: `def-trace-form-of-a-finite-dimensional-representation`, `thm-trace-of-ab-equals-trace-of-ba`.
- Decision/checkpoint: `accept`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `lem-orthogonal-complements-under-invariant-forms-are-ideals`.

### 05. `lem-orthogonal-complements-under-invariant-forms-are-ideals`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `lemma`.
- Exact scoped claim: If B is a symmetric invariant bilinear form on g and i is an ideal, then i^perp is an ideal. In particular ker(B)=g^perp is an ideal.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=checked, one=not_applicable, degenerate=checked, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Milne, Lie Algebras, Lemma 4.6 — §4, Lemma 4.6, printed p. 41
- Dependencies examined: `def-lie-subalgebra-ideal-and-center`.
- Decision/checkpoint: `repaired`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `thm-cartans-solvability-criterion`.

### 06. `thm-cartans-solvability-criterion`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `theorem`.
- Exact scoped claim: Let g be finite-dimensional over a characteristic-zero field. Then g is solvable iff K_g(g,[g,g])=0. More generally, a finite-dimensional linear Lie algebra h⊆gl(V) is solvable if tr(xy)=0 for every x in [h,h] and y in h.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=checked, one=not_applicable, degenerate=not_applicable, endpoints=not_applicable, nonempty-choice=checked, iff-forward=checked, iff-reverse=checked. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Milne, Lie Algebras, Theorem 3.17 and Corollary 3.18 — §3, Theorem 3.17 and Corollary 3.18, printed pp. 39–40
- Dependencies examined: `def-killing-form-of-a-finite-dimensional-lie-algebra`, `thm-lies-theorem`, `thm-engels-theorem`, `thm-lies-criterion-for-solvability-by-the-derived-algebra`, `prop-subalgebras-quotients-and-extensions-of-solvable-lie-algebras`, `thm-trace-of-ab-equals-trace-of-ba`, `cor-endomorphisms-over-an-algebraically-closed-field-have-jordan-form`.
- Decision/checkpoint: `repaired`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `thm-cartans-semisimplicity-criterion`.

### 07. `thm-cartans-semisimplicity-criterion`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `theorem`.
- Exact scoped claim: A finite-dimensional Lie algebra over a characteristic-zero field is semisimple iff its Killing form is nondegenerate.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=checked, one=not_applicable, degenerate=checked, endpoints=not_applicable, nonempty-choice=checked, iff-forward=checked, iff-reverse=checked. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Milne, Lie Algebras, Theorem 4.13 — §4, Theorem 4.13, printed p. 43
- Dependencies examined: `thm-cartans-solvability-criterion`, `def-simple-semisimple-and-reductive-lie-algebras`, `lem-orthogonal-complements-under-invariant-forms-are-ideals`.
- Decision/checkpoint: `repaired`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `cor-semisimple-lie-algebras-are-centerless-and-perfect`.

### 08. `cor-semisimple-lie-algebras-are-centerless-and-perfect`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `corollary`.
- Exact scoped claim: If g is semisimple in characteristic zero, then Z(g)=0 and [g,g]=g.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=checked, one=not_applicable, degenerate=checked, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Milne, Lie Algebras, consequences of Theorem 4.13 — §4, immediately after Theorem 4.13, printed pp. 43–44
- Dependencies examined: `thm-cartans-semisimplicity-criterion`, `def-killing-form-of-a-finite-dimensional-lie-algebra`.
- Decision/checkpoint: `repaired`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `thm-semisimple-lie-algebras-decompose-as-direct-sums-of-simple-ideals`.

### 09. `thm-semisimple-lie-algebras-decompose-as-direct-sums-of-simple-ideals`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `theorem`.
- Exact scoped claim: Every finite-dimensional semisimple Lie algebra over a characteristic-zero field is a finite direct sum of simple ideals.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=checked, zero=checked, one=not_applicable, degenerate=not_applicable, endpoints=checked, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Milne, Lie Algebras, Theorem 4.15 — §4, Theorem 4.15, printed p. 44
- Dependencies examined: `thm-cartans-semisimplicity-criterion`, `lem-orthogonal-complements-under-invariant-forms-are-ideals`, `def-simple-semisimple-and-reductive-lie-algebras`.
- Decision/checkpoint: `accept`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `prop-ideals-and-quotients-of-semisimple-lie-algebras`.

### 10. `prop-ideals-and-quotients-of-semisimple-lie-algebras`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `proposition`.
- Exact scoped claim: Every ideal and quotient of a finite-dimensional semisimple characteristic-zero Lie algebra is semisimple; each ideal is the sum of a subfamily of the simple ideals and has an ideal complement.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=checked, zero=checked, one=not_applicable, degenerate=not_applicable, endpoints=checked, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Milne, Lie Algebras, Corollaries 4.16–4.17 — §4, Corollaries 4.16–4.17, printed pp. 44–45
- Dependencies examined: `thm-semisimple-lie-algebras-decompose-as-direct-sums-of-simple-ideals`, `def-quotient-lie-algebra`.
- Decision/checkpoint: `accept`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `def-casimir-operator-relative-to-an-invariant-form`.

### 11. `def-casimir-operator-relative-to-an-invariant-form`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `definition`.
- Exact scoped claim: For a finite-dimensional g with nondegenerate invariant symmetric form B and dual bases (x_i),(x^i), define Omega_B=sum_i x_i x^i in U(g); on a representation V its action is sum_i rho(x_i)rho(x^i).
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=checked, zero=checked, one=not_applicable, degenerate=not_applicable, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Weibel, Lie Algebra Homology and Cohomology, §7.8.8 — §7.8.8, printed p. 245
- Dependencies examined: `def-trace-form-of-a-finite-dimensional-representation`, `def-universal-enveloping-algebra`, `thm-poincare-birkhoff-witt`.
- Decision/checkpoint: `accept`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `lem-the-casimir-operator-is-basis-independent-and-intertwining`.

### 12. `lem-the-casimir-operator-is-basis-independent-and-intertwining`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `lemma`.
- Exact scoped claim: Omega_B is independent of the dual basis, commutes with g in U(g), and therefore acts as a g-intertwiner on every representation.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=checked, zero=checked, one=not_applicable, degenerate=not_applicable, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Milne, Lie Algebras, Proposition 5.17 — §5, Proposition 5.17, printed pp. 50–51
- Dependencies examined: `def-casimir-operator-relative-to-an-invariant-form`, `prop-trace-forms-are-symmetric-and-invariant`, `thm-universal-property-of-the-universal-enveloping-algebra`.
- Decision/checkpoint: `accept`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `thm-weyls-complete-reducibility-theorem`.

### 13. `thm-weyls-complete-reducibility-theorem`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `theorem`.
- Exact scoped claim: Every finite-dimensional representation of a finite-dimensional semisimple Lie algebra over any characteristic-zero field is completely reducible.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=checked, zero=checked, one=checked, degenerate=checked, endpoints=checked, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Milne, Lie Algebras, Theorem 5.20 — §5, Theorem 5.20(b), printed pp. 52–53
- Dependencies examined: `thm-cartans-semisimplicity-criterion`, `thm-cartans-solvability-criterion`, `cor-semisimple-lie-algebras-are-centerless-and-perfect`, `prop-ideals-and-quotients-of-semisimple-lie-algebras`, `prop-trace-forms-are-symmetric-and-invariant`, `lem-orthogonal-complements-under-invariant-forms-are-ideals`, `def-casimir-operator-relative-to-an-invariant-form`, `lem-the-casimir-operator-is-basis-independent-and-intertwining`, `def-irreducible-completely-reducible-and-faithful-lie-algebra-representation`, `cor-schurs-lemma-for-irreducible-lie-algebra-representations`.
- Decision/checkpoint: `repaired`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `thm-equivalent-characterizations-of-reductive-lie-algebras`.

### 14. `thm-equivalent-characterizations-of-reductive-lie-algebras`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `theorem`.
- Exact scoped claim: For finite-dimensional g in characteristic zero, the following are equivalent: rad(g)=Z(g); g=Z(g)⊕[g,g] with [g,g] semisimple; and the adjoint representation is completely reducible.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=checked, one=not_applicable, degenerate=checked, endpoints=not_applicable, nonempty-choice=checked, iff-forward=checked, iff-reverse=checked. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Milne, Lie Algebras, Proposition 6.2 — §6, Proposition 6.2, printed p. 58
- Dependencies examined: `prop-ideals-and-quotients-of-semisimple-lie-algebras`, `thm-weyls-complete-reducibility-theorem`, `prop-the-radical-is-characteristic-and-the-radical-quotient-has-zero-radical`, `cor-semisimple-lie-algebras-are-centerless-and-perfect`, `def-irreducible-completely-reducible-and-faithful-lie-algebra-representation`.
- Decision/checkpoint: `repaired`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `cor-the-adjoint-representation-splits-into-simple-ideals`.

### 15. `cor-the-adjoint-representation-splits-into-simple-ideals`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `corollary`.
- Exact scoped claim: For semisimple g, every adjoint submodule is an ideal with an ideal complement; the irreducible adjoint summands are precisely simple ideals.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=checked, zero=checked, one=not_applicable, degenerate=not_applicable, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Milne, Lie Algebras, Theorem 4.15 and Weyl's theorem — §§4–5, Theorems 4.15 and 5.20
- Dependencies examined: `thm-weyls-complete-reducibility-theorem`, `thm-semisimple-lie-algebras-decompose-as-direct-sums-of-simple-ideals`.
- Decision/checkpoint: `accept`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `thm-every-derivation-of-a-semisimple-lie-algebra-is-inner`.

### 16. `thm-every-derivation-of-a-semisimple-lie-algebra-is-inner`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `theorem`.
- Exact scoped claim: For finite-dimensional semisimple g in characteristic zero, Der(g)=ad(g), uniquely because Z(g)=0.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=checked, one=not_applicable, degenerate=checked, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Milne, Lie Algebras, Proposition 4.22 — §4, Proposition 4.22, printed p. 46
- Dependencies examined: `prop-trace-forms-are-symmetric-and-invariant`, `thm-cartans-semisimplicity-criterion`, `lem-orthogonal-complements-under-invariant-forms-are-ideals`, `cor-semisimple-lie-algebras-are-centerless-and-perfect`, `prop-derivations-form-a-lie-algebra-and-inner-derivations-form-an-ideal`.
- Decision/checkpoint: `repaired`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `cor-the-lie-algebra-of-the-automorphism-group-of-a-semisimple-lie-algebra`.

### 17. `cor-the-lie-algebra-of-the-automorphism-group-of-a-semisimple-lie-algebra`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `corollary`.
- Exact scoped claim: Assume AC_omega. For a finite-dimensional real or complex semisimple Lie algebra g, Aut(g) is a closed Lie subgroup of GL(g) and Lie(Aut(g))=Der(g)=ad(g).
- Conventions and boundary audit: axiom base `ZF + AC_omega`; strict contract records empty=not_applicable, zero=checked, one=not_applicable, degenerate=not_applicable, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Milne, Lie Algebras, Corollary 4.23 — §4, Corollary 4.23, printed p. 46
- Dependencies examined: `thm-every-derivation-of-a-semisimple-lie-algebra-is-inner`, `thm-cartans-closed-subgroup-theorem`, `def-countable-choice`.
- Decision/checkpoint: `repaired`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `def-chevalley-eilenberg-cochains`.

### 18. `def-chevalley-eilenberg-cochains`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `definition`.
- Exact scoped claim: For a Lie algebra g and g-module M, define C^n(g,M)=Hom_k(Λ^n g,M) for n>=0 and C^n=0 for n<0, with C^0=M.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=checked, one=checked, degenerate=checked, endpoints=checked, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Weibel, Lie Algebra Homology and Cohomology, §7.7 — §7.7, Definition 7.7.2 and preceding formula, printed pp. 239–240
- Dependencies examined: `def-representation-of-a-lie-algebra`, `def-symmetric-and-exterior-powers-over-an-arbitrary-field`, `def-vector-space-of-linear-maps`.
- Decision/checkpoint: `accept`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `def-chevalley-eilenberg-differential`.

### 19. `def-chevalley-eilenberg-differential`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `definition`.
- Exact scoped claim: For f in C^n, define (df)(x_0,...,x_n)=sum_i(-1)^i x_i f(x_0,...,hat{x_i},...,x_n)+sum_(i<j)(-1)^(i+j) f([x_i,x_j],x_0,...,hat{x_i},...,hat{x_j},...,x_n).
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=checked, one=not_applicable, degenerate=checked, endpoints=checked, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Weibel, Lie Algebra Homology and Cohomology, §7.7 — §7.7, displayed differential before Definition 7.7.2, printed p. 239
- Dependencies examined: `def-chevalley-eilenberg-cochains`.
- Decision/checkpoint: `accept`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `thm-the-chevalley-eilenberg-differential-squares-to-zero`.

### 20. `thm-the-chevalley-eilenberg-differential-squares-to-zero`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `theorem`.
- Exact scoped claim: For every n and every f in C^n(g,M), d^(n+1)d^n f=0.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=checked, one=not_applicable, degenerate=not_applicable, endpoints=checked, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Weibel, Lie Algebra Homology and Cohomology, Exercise 7.7.1 — §7.7, Exercise 7.7.1 and differential formula, printed p. 239
- Dependencies examined: `def-chevalley-eilenberg-differential`, `def-lie-algebra-over-a-field`, `def-representation-of-a-lie-algebra`.
- Decision/checkpoint: `accept`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `def-lie-algebra-cohomology`.

### 21. `def-lie-algebra-cohomology`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `definition`.
- Exact scoped claim: The cohomology of the Chevalley–Eilenberg cochain complex is H^n(g,M)=ker(d:C^n→C^(n+1))/im(d:C^(n-1)→C^n).
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=checked, one=not_applicable, degenerate=checked, endpoints=checked, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Weibel, Lie Algebra Homology and Cohomology, Corollary 7.7.3 — §7.7, Corollary 7.7.3, printed p. 240
- Dependencies examined: `thm-the-chevalley-eilenberg-differential-squares-to-zero`, `def-cochain-complex-in-an-abelian-category`, `def-cohomology-object-of-a-cochain-complex`.
- Decision/checkpoint: `accept`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `prop-zero-th-lie-algebra-cohomology-is-invariants`.

### 22. `prop-zero-th-lie-algebra-cohomology-is-invariants`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `proposition`.
- Exact scoped claim: H^0(g,M)=M^g={m:xm=0 for all x in g}.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=checked, one=not_applicable, degenerate=checked, endpoints=checked, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Weibel, Lie Algebra Homology and Cohomology, §7.7 — §7.7, low-degree calculation, printed pp. 239–240
- Dependencies examined: `def-lie-algebra-cohomology`, `def-chevalley-eilenberg-differential`.
- Decision/checkpoint: `accept`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `prop-first-lie-algebra-cohomology-is-derivations-modulo-inner-derivations`.

### 23. `prop-first-lie-algebra-cohomology-is-derivations-modulo-inner-derivations`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `proposition`.
- Exact scoped claim: A 1-cocycle delta:g→M satisfies delta([x,y])=x delta(y)-y delta(x), and 1-coboundaries are delta_m(x)=xm. Thus H^1(g,M)=Der(g,M)/Inn(g,M); for M=g this is Der(g)/ad(g).
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=checked, one=checked, degenerate=checked, endpoints=checked, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Weibel, Lie Algebra Homology and Cohomology, §7.7 — §7.7, low-degree calculation, printed pp. 239–241
- Dependencies examined: `def-lie-algebra-cohomology`, `def-chevalley-eilenberg-differential`, `def-derivation-of-a-lie-algebra`.
- Decision/checkpoint: `accept`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `thm-second-lie-algebra-cohomology-classifies-abelian-extensions`.

### 24. `thm-second-lie-algebra-cohomology-classifies-abelian-extensions`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `theorem`.
- Exact scoped claim: For a finite-dimensional Lie algebra g and a fixed g-module M, H^2(g,M) bijects with equivalence classes of extensions 0→M→e→g→0 inducing the given action and having M abelian. The zero class corresponds exactly to split extensions.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=checked, one=not_applicable, degenerate=checked, endpoints=not_applicable, nonempty-choice=checked, iff-forward=checked, iff-reverse=checked. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Weibel, Lie Algebra Homology and Cohomology, Exercise 7.7.5 — §7.7, Exercise 7.7.5 and §7.6 extension discussion, printed pp. 237 and 241
- Dependencies examined: `def-lie-algebra-cohomology`, `def-chevalley-eilenberg-differential`, `def-semidirect-product-of-lie-algebras`.
- Decision/checkpoint: `repaired`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `thm-first-whitehead-lemma`.

### 25. `thm-first-whitehead-lemma`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `theorem`.
- Exact scoped claim: If g is finite-dimensional semisimple over a characteristic-zero field and M is a finite-dimensional g-module, then H^1(g,M)=0.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=checked, one=checked, degenerate=checked, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Milne, Lie Algebras, Corollary 5.21 — §5, Corollary 5.21, printed pp. 53–54
- Dependencies examined: `thm-weyls-complete-reducibility-theorem`, `cor-semisimple-lie-algebras-are-centerless-and-perfect`, `prop-first-lie-algebra-cohomology-is-derivations-modulo-inner-derivations`.
- Decision/checkpoint: `repaired`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `thm-second-whitehead-lemma`.

### 26. `thm-second-whitehead-lemma`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `theorem`.
- Exact scoped claim: If g is finite-dimensional semisimple over a characteristic-zero field and M is a finite-dimensional g-module, then H^2(g,M)=0.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=checked, one=checked, degenerate=checked, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Weibel, Lie Algebra Homology and Cohomology, Theorem 7.8.9 and Corollary 7.8.12 — §7.8, Theorem 7.8.9 and Corollary 7.8.12, printed pp. 245–246
- Dependencies examined: `def-casimir-operator-relative-to-an-invariant-form`, `lem-the-casimir-operator-is-basis-independent-and-intertwining`, `thm-weyls-complete-reducibility-theorem`, `thm-second-lie-algebra-cohomology-classifies-abelian-extensions`, `thm-semisimple-lie-algebras-decompose-as-direct-sums-of-simple-ideals`, `thm-cartans-solvability-criterion`, `lem-orthogonal-complements-under-invariant-forms-are-ideals`.
- Decision/checkpoint: `repaired`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `thm-long-exact-sequence-in-lie-algebra-cohomology`.

### 27. `thm-long-exact-sequence-in-lie-algebra-cohomology`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `theorem`.
- Exact scoped claim: For finite-dimensional g and a short exact sequence 0→M'→M→M''→0 of g-modules, the induced sequence of Chevalley–Eilenberg complexes is degreewise short exact and yields the natural long exact sequence ...→H^n(g,M')→H^n(g,M)→H^n(g,M'')→H^(n+1)(g,M')→....
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=checked, one=not_applicable, degenerate=checked, endpoints=checked, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Weibel, Lie Algebra Homology and Cohomology, §§7.7–7.8 — §§7.7–7.8, coefficient exact sequence used in Corollary 7.8.10, printed pp. 240 and 246
- Dependencies examined: `def-lie-algebra-cohomology`, `thm-long-exact-sequence-in-cohomology`, `def-subrepresentation-quotient-representation-and-intertwiner`.
- Decision/checkpoint: `accept`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `def-levi-subalgebra-and-levi-decomposition`.

### 28. `def-levi-subalgebra-and-levi-decomposition`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `definition`.
- Exact scoped claim: A Levi subalgebra s of g is a semisimple subalgebra complementary to rad(g) as a vector space; then g=rad(g)⋊s is a Levi decomposition.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=checked, one=not_applicable, degenerate=checked, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Milne, Lie Algebras, Definition 6.24 — §6, Definition 6.24, printed p. 62
- Dependencies examined: `def-radical-of-a-finite-dimensional-lie-algebra`, `def-semidirect-product-of-lie-algebras`, `def-simple-semisimple-and-reductive-lie-algebras`.
- Decision/checkpoint: `accept`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `thm-levi-decomposition`.

### 29. `thm-levi-decomposition`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `theorem`.
- Exact scoped claim: Every finite-dimensional Lie algebra over a characteristic-zero field has a Levi subalgebra, so g=rad(g)⋊s with s congruent to g/rad(g).
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=checked, one=not_applicable, degenerate=checked, endpoints=checked, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Weibel, Lie Algebra Homology and Cohomology, Levi's Theorem 7.8.13 — §7.8, Theorem 7.8.13, printed pp. 246–247
- Dependencies examined: `def-levi-subalgebra-and-levi-decomposition`, `thm-second-whitehead-lemma`, `prop-the-radical-is-characteristic-and-the-radical-quotient-has-zero-radical`, `prop-subalgebras-quotients-and-extensions-of-solvable-lie-algebras`.
- Decision/checkpoint: `repaired`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `thm-malcev-conjugacy-of-levi-subalgebras`.

### 30. `thm-malcev-conjugacy-of-levi-subalgebras`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `theorem`.
- Exact scoped claim: Any two Levi subalgebras of a finite-dimensional characteristic-zero g are conjugate by a finite product of automorphisms exp(ad x) with x in nilrad(g).
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=checked, one=not_applicable, degenerate=checked, endpoints=checked, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Milne, Lie Algebras, Theorem 6.25 — §6, Theorem 6.25 and complete proof, printed pp. 62–64
- Dependencies examined: `thm-levi-decomposition`, `thm-first-whitehead-lemma`, `def-nilradical-of-a-finite-dimensional-lie-algebra`, `thm-the-commutator-of-a-lie-algebra-with-its-radical-lies-in-the-nilradical`, `cor-semisimple-lie-algebras-are-centerless-and-perfect`, `prop-a-nonzero-nilpotent-lie-algebra-has-nonzero-center`.
- Decision/checkpoint: `repaired`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `cor-levi-factors-are-noncanonical-but-unique-up-to-inner-unipotent-conjugacy`.

### 31. `cor-levi-factors-are-noncanonical-but-unique-up-to-inner-unipotent-conjugacy`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `corollary`.
- Exact scoped claim: Levi factors need not be equal, but all are isomorphic to g/rad(g) and are conjugate by inner unipotent automorphisms generated from the nilradical.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=checked, one=not_applicable, degenerate=not_applicable, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Milne, Lie Algebras, Theorem 6.25 — §6, Theorem 6.25, printed pp. 62–64
- Dependencies examined: `thm-malcev-conjugacy-of-levi-subalgebras`.
- Decision/checkpoint: `repaired`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `thm-ado-faithful-representation-with-nilpotent-nilradical-action`.

### 32. `thm-ado-faithful-representation-with-nilpotent-nilradical-action`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `theorem`.
- Exact scoped claim: For finite-dimensional g over a characteristic-zero field, there is a finite-dimensional faithful representation rho such that rho(x) is nilpotent for every x in nilrad(g).
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=checked, one=checked, degenerate=checked, endpoints=checked, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Knapp, Lie Groups Beyond an Introduction, Appendix B, Theorems B.9–B.12 — Appendix B §3, Theorems B.9–B.12 and proof of B.8, printed pp. 663–669
- Dependencies examined: `thm-poincare-birkhoff-witt`, `cor-the-canonical-map-from-a-lie-algebra-to-its-enveloping-algebra-is-injective`, `def-universal-enveloping-algebra`, `thm-hilbert-basis-theorem`, `def-nilradical-of-a-finite-dimensional-lie-algebra`, `thm-lies-theorem`, `thm-levi-decomposition`, `thm-the-commutator-of-a-lie-algebra-with-its-radical-lies-in-the-nilradical`, `prop-derivations-preserve-the-nilradical-in-characteristic-zero`, `cor-the-derived-algebra-of-a-finite-dimensional-solvable-lie-algebra-is-nilpotent-in-characteristic-zero`, `cor-a-finite-dimensional-nilpotent-lie-algebra-has-a-codimension-one-ideal-containing-any-given-proper-subalgebra`, `cor-semisimple-lie-algebras-are-centerless-and-perfect`, `def-representation-of-a-lie-algebra`.
- Decision/checkpoint: `repaired`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `cor-every-finite-dimensional-characteristic-zero-lie-algebra-is-a-matrix-lie-algebra`.

### 33. `cor-every-finite-dimensional-characteristic-zero-lie-algebra-is-a-matrix-lie-algebra`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `corollary`.
- Exact scoped claim: Every finite-dimensional Lie algebra over a characteristic-zero field is isomorphic to a Lie subalgebra of gl_n(k) for some finite n.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=checked, one=not_applicable, degenerate=checked, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Knapp, Lie Groups Beyond an Introduction, Theorem B.8 — Appendix B §3, Theorem B.8, printed p. 663
- Dependencies examined: `thm-ado-faithful-representation-with-nilpotent-nilradical-action`, `prop-representation-kernels-are-ideals-and-faithfulness-is-injectivity`.
- Decision/checkpoint: `repaired`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `thm-lie-second-fundamental-theorem`.

### 34. `thm-lie-second-fundamental-theorem`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `theorem`.
- Exact scoped claim: Assume AC_omega. If G is a connected simply connected real Lie group and H a real Lie group, every Lie-algebra homomorphism Lie(G)→Lie(H) integrates to a unique smooth Lie-group homomorphism G→H.
- Conventions and boundary audit: axiom base `ZF + AC_omega`; strict contract records empty=not_applicable, zero=checked, one=checked, degenerate=checked, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Kirillov, An Introduction to Lie Groups and Lie Algebras, Theorem 3.38 — §3.8, Theorem 3.38, printed p. 39
- Dependencies examined: `thm-lie-subgroup-lie-subalgebra-correspondence`, `def-countable-choice`, `cor-connected-cover-of-a-simply-connected-space-is-trivial`, `def-simply-connected`.
- Decision/checkpoint: `accept`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `thm-lie-third-fundamental-theorem`.

### 35. `thm-lie-third-fundamental-theorem`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `theorem`.
- Exact scoped claim: Assume AC_omega. Every finite-dimensional real Lie algebra is the Lie algebra of a connected simply connected real Lie group, unique up to the later equivalence statement.
- Conventions and boundary audit: axiom base `ZF + AC_omega`; strict contract records empty=not_applicable, zero=checked, one=not_applicable, degenerate=checked, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Knapp, Lie Groups Beyond an Introduction, Theorem B.7 — Appendix B, Theorem B.7, printed p. 662
- Dependencies examined: `cor-every-finite-dimensional-characteristic-zero-lie-algebra-is-a-matrix-lie-algebra`, `thm-lie-subgroup-lie-subalgebra-correspondence`, `thm-universal-covering-lie-group`, `def-countable-choice`.
- Decision/checkpoint: `accept`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `thm-equivalence-between-simply-connected-real-lie-groups-and-finite-dimensional-real-lie-algebras`.

### 36. `thm-equivalence-between-simply-connected-real-lie-groups-and-finite-dimensional-real-lie-algebras`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `theorem`.
- Exact scoped claim: Assume AC_omega. The Lie functor from connected simply connected real Lie groups to finite-dimensional real Lie algebras is an equivalence of categories.
- Conventions and boundary audit: axiom base `ZF + AC_omega`; strict contract records empty=not_applicable, zero=checked, one=not_applicable, degenerate=checked, endpoints=checked, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Kirillov, An Introduction to Lie Groups and Lie Algebras, Corollary 3.39 — §3.8, Corollary 3.39, printed p. 39
- Dependencies examined: `thm-lie-second-fundamental-theorem`, `thm-lie-third-fundamental-theorem`, `def-countable-choice`.
- Decision/checkpoint: `accept`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations`.

### 37. `thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `theorem`.
- Exact scoped claim: Assume AC_omega. Every connected real Lie group G is isomorphic to G_tilde/Gamma, where G_tilde is its simply connected covering Lie group and Gamma is a discrete central subgroup; conversely each such quotient has the same Lie algebra.
- Conventions and boundary audit: axiom base `ZF + AC_omega`; strict contract records empty=not_applicable, zero=checked, one=checked, degenerate=checked, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Kirillov, An Introduction to Lie Groups and Lie Algebras, §3.8 — §3.8, discussion before Theorem 3.38, printed pp. 38–39
- Dependencies examined: `thm-universal-covering-lie-group`, `def-covering-homomorphism-of-lie-groups`, `cor-discrete-subgroups-of-lie-groups-are-closed-embedded-zero-dimensional-subgroups`, `def-countable-choice`.
- Decision/checkpoint: `repaired`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `thm-the-exponential-map-of-a-connected-simply-connected-nilpotent-lie-group-is-a-diffeomorphism`.

### 38. `thm-the-exponential-map-of-a-connected-simply-connected-nilpotent-lie-group-is-a-diffeomorphism`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `theorem`.
- Exact scoped claim: Assume AC_omega. If N is a connected simply connected real Lie group with nilpotent Lie algebra n, then exp:n→N is a diffeomorphism. In these coordinates multiplication is the BCH polynomial, which terminates after finitely many bracket lengths.
- Conventions and boundary audit: axiom base `ZF + AC_omega`; strict contract records empty=not_applicable, zero=checked, one=not_applicable, degenerate=checked, endpoints=checked, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Knapp, Lie Groups Beyond an Introduction, Theorem 1.127 — Chapter I, Theorem 1.127 and proof, printed pp. 115–116
- Dependencies examined: `def-lower-central-series-and-nilpotent-lie-algebra`, `thm-baker-campbell-hausdorff`, `def-exponential-map-of-a-lie-group`, `thm-lie-second-fundamental-theorem`, `def-countable-choice`.
- Decision/checkpoint: `repaired`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `cor-connected-nilpotent-lie-groups-are-discrete-central-quotients-of-bch-groups`.

### 39. `cor-connected-nilpotent-lie-groups-are-discrete-central-quotients-of-bch-groups`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `corollary`.
- Exact scoped claim: Assume AC_omega. Every connected real Lie group with nilpotent Lie algebra is a quotient of the BCH group on that algebra by a discrete central subgroup.
- Conventions and boundary audit: axiom base `ZF + AC_omega`; strict contract records empty=not_applicable, zero=checked, one=not_applicable, degenerate=checked, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Knapp, Lie Groups Beyond an Introduction, Theorem 1.127 and Corollary 1.134 — Chapter I, Theorem 1.127 and Corollary 1.134, printed pp. 115–119
- Dependencies examined: `thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations`, `thm-the-exponential-map-of-a-connected-simply-connected-nilpotent-lie-group-is-a-diffeomorphism`.
- Decision/checkpoint: `repaired`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `cor-isomorphic-lie-algebras-give-locally-isomorphic-but-not-necessarily-isomorphic-connected-lie-groups`.

### 40. `cor-isomorphic-lie-algebras-give-locally-isomorphic-but-not-necessarily-isomorphic-connected-lie-groups`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `corollary`.
- Exact scoped claim: Assume AC_omega. Connected real Lie groups with isomorphic Lie algebras have isomorphic identity neighborhoods as local Lie groups, but may differ globally through distinct discrete central quotients of the same simply connected integration.
- Conventions and boundary audit: axiom base `ZF + AC_omega`; strict contract records empty=not_applicable, zero=checked, one=not_applicable, degenerate=checked, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Kirillov, An Introduction to Lie Groups and Lie Algebras, §3.8 — §3.8, Corollary 3.39 and following discussion, printed p. 39
- Dependencies examined: `thm-equivalence-between-simply-connected-real-lie-groups-and-finite-dimensional-real-lie-algebras`, `thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations`.
- Decision/checkpoint: `repaired`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `fs-centerless-implies-semisimple`.

### 41. `fs-centerless-implies-semisimple`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `false-statement`.
- Exact scoped claim: False: a centerless finite-dimensional Lie algebra can have nonzero solvable radical.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=checked, one=not_applicable, degenerate=checked, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Milne, Lie Algebras, §§3–4 — §3 solvability and §4 semisimplicity, printed pp. 30–45
- Dependencies examined: `def-simple-semisimple-and-reductive-lie-algebras`.
- Decision/checkpoint: `accept`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `fs-the-killing-form-is-nondegenerate-on-every-reductive-lie-algebra`.

### 42. `fs-the-killing-form-is-nondegenerate-on-every-reductive-lie-algebra`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `false-statement`.
- Exact scoped claim: False: the Killing form of a reductive algebra is degenerate when its center is nonzero.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=checked, one=checked, degenerate=checked, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Kirillov, An Introduction to Lie Groups and Lie Algebras, Killing form — §5.8, Definition 5.50 and Theorem 5.53, printed pp. 83–84
- Dependencies examined: `def-killing-form-of-a-finite-dimensional-lie-algebra`, `thm-equivalent-characterizations-of-reductive-lie-algebras`.
- Decision/checkpoint: `accept`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `fs-every-finite-dimensional-representation-of-a-reductive-lie-algebra-is-completely-reducible`.

### 43. `fs-every-finite-dimensional-representation-of-a-reductive-lie-algebra-is-completely-reducible`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `false-statement`.
- Exact scoped claim: False: Weyl's theorem applies to semisimple algebras; a reductive center may act nonsemisimply.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=not_applicable, one=checked, degenerate=checked, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Milne, Lie Algebras, Theorem 6.14 and surrounding discussion — §6, Theorem 6.14, printed pp. 59–60
- Dependencies examined: `thm-weyls-complete-reducibility-theorem`, `thm-equivalent-characterizations-of-reductive-lie-algebras`.
- Decision/checkpoint: `accept`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `fs-second-cohomology-classifies-all-nonabelian-extensions`.

### 44. `fs-second-cohomology-classifies-all-nonabelian-extensions`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `false-statement`.
- Exact scoped claim: False: H^2(g,M) classifies extensions only when the kernel is abelian and the induced g-module structure on it is fixed.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=not_applicable, one=not_applicable, degenerate=checked, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Weibel, Lie Algebra Homology and Cohomology, §§7.6–7.7 — §7.6 extension discussion and Exercise 7.7.5, printed pp. 237 and 241
- Dependencies examined: `thm-second-lie-algebra-cohomology-classifies-abelian-extensions`.
- Decision/checkpoint: `accept`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `fs-levi-subalgebras-are-literally-unique`.

### 45. `fs-levi-subalgebras-are-literally-unique`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `false-statement`.
- Exact scoped claim: False: Levi subalgebras are generally conjugate, not equal.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=not_applicable, one=not_applicable, degenerate=checked, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Milne, Lie Algebras, proof of Theorem 6.25 — §6, Theorem 6.25, graph-complement calculation, printed pp. 63–64
- Dependencies examined: `thm-malcev-conjugacy-of-levi-subalgebras`.
- Decision/checkpoint: `accept`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `fs-isomorphic-lie-algebras-determine-isomorphic-connected-lie-groups`.

### 46. `fs-isomorphic-lie-algebras-determine-isomorphic-connected-lie-groups`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory` / `false-statement`.
- Exact scoped claim: Assume AC_omega. False: distinct discrete central quotients of one simply connected Lie group have the same Lie algebra.
- Conventions and boundary audit: axiom base `ZF + AC_omega`; strict contract records empty=not_applicable, zero=checked, one=checked, degenerate=checked, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Kirillov, An Introduction to Lie Groups and Lie Algebras, §3.8 — Corollary 3.43 and following discussion, printed p. 42
- Dependencies examined: `thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations`, `def-countable-choice`.
- Decision/checkpoint: `repaired`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `ex-killing-form-of-sl-two`.

### 47. `ex-killing-form-of-sl-two`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory-examples` / `example`.
- Exact scoped claim: For the standard basis e,f,h of sl_2 with [h,e]=2e, [h,f]=-2f, [e,f]=h, the Killing form has K(h,h)=8, K(e,f)=4, and all other basis pairings forced by symmetry are zero; it is nondegenerate in characteristic zero.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=checked, one=not_applicable, degenerate=checked, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Kirillov, An Introduction to Lie Groups and Lie Algebras, Example 5.51 — §5.8, Example 5.51, printed pp. 83–84
- Dependencies examined: `def-killing-form-of-a-finite-dimensional-lie-algebra`, `thm-cartans-semisimplicity-criterion`.
- Decision/checkpoint: `accept`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `ex-classical-simple-lie-algebras-and-their-killing-forms`.

### 48. `ex-classical-simple-lie-algebras-and-their-killing-forms`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory-examples` / `example`.
- Exact scoped claim: For the split classical matrix algebras over characteristic zero, K_sl_n(X,Y)=2n tr(XY) for n>=2, K_so_n(X,Y)=(n-2)tr(XY) for n=3 or n>=5, and K_sp_(2n)(X,Y)=2(n+1)tr(XY) for n>=1. In these simple ranges the forms are nondegenerate; the low-rank orthogonal exceptions are stated separately.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=checked, one=checked, degenerate=checked, endpoints=checked, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Kirillov, An Introduction to Lie Groups and Lie Algebras, Killing-form exercises — §5.8, Exercise 5.2 and the root-space discussion in §6.3, printed pp. 87 and 95–96
- Dependencies examined: `def-killing-form-of-a-finite-dimensional-lie-algebra`, `thm-cartans-semisimplicity-criterion`.
- Decision/checkpoint: `repaired`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `ex-a-reductive-algebra-with-degenerate-killing-form`.

### 49. `ex-a-reductive-algebra-with-degenerate-killing-form`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory-examples` / `example`.
- Exact scoped claim: For n>=1, gl_n in characteristic zero is reductive with decomposition kI⊕sl_n, but its Killing form vanishes on the central line kI and is therefore degenerate.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=checked, one=checked, degenerate=checked, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Kirillov, An Introduction to Lie Groups and Lie Algebras, Theorem 5.49 — §5.7, Theorem 5.49, printed p. 83
- Dependencies examined: `thm-equivalent-characterizations-of-reductive-lie-algebras`, `def-killing-form-of-a-finite-dimensional-lie-algebra`.
- Decision/checkpoint: `repaired`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `ex-direct-sum-decomposition-of-a-semisimple-lie-algebra`.

### 50. `ex-direct-sum-decomposition-of-a-semisimple-lie-algebra`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory-examples` / `example`.
- Exact scoped claim: For g=sl_2⊕sl_3, the two summands are simple ideals, every ideal is the sum of a subcollection of them, and the Killing form is their orthogonal direct sum.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=checked, zero=checked, one=not_applicable, degenerate=checked, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Milne, Lie Algebras, semisimple direct-sum theorem — Chapter I, Theorem 4.15, printed pp. 46–47
- Dependencies examined: `thm-semisimple-lie-algebras-decompose-as-direct-sums-of-simple-ideals`.
- Decision/checkpoint: `accept`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `ex-first-cohomology-with-trivial-coefficients-is-the-dual-abelianization`.

### 51. `ex-first-cohomology-with-trivial-coefficients-is-the-dual-abelianization`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory-examples` / `example`.
- Exact scoped claim: For the trivial module k, H^1(g,k) is naturally (g/[g,g])^*.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=checked, one=not_applicable, degenerate=checked, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Weibel, An Introduction to Homological Algebra, Lie algebra cohomology — §7.7, low-degree interpretation immediately after Definition 7.7.2, printed p. 224
- Dependencies examined: `prop-first-lie-algebra-cohomology-is-derivations-modulo-inner-derivations`, `def-quotient-lie-algebra`.
- Decision/checkpoint: `accept`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `ex-an-abelian-extension-from-a-two-cocycle`.

### 52. `ex-an-abelian-extension-from-a-two-cocycle`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory-examples` / `example`.
- Exact scoped claim: For the two-dimensional abelian g with trivial one-dimensional module k, the alternating form omega(x,y)=1 is a 2-cocycle whose extension is the Heisenberg algebra.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=checked, one=checked, degenerate=checked, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Weibel, An Introduction to Homological Algebra, extension construction — §7.7, Exercise 7.7.5, printed p. 225
- Dependencies examined: `thm-second-lie-algebra-cohomology-classifies-abelian-extensions`.
- Decision/checkpoint: `accept`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `ex-a-levi-decomposition-of-the-euclidean-motion-algebra`.

### 53. `ex-a-levi-decomposition-of-the-euclidean-motion-algebra`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory-examples` / `example`.
- Exact scoped claim: For the Euclidean-motion algebra of three-space e(3)=R^3⋊so(3), the translation ideal R^3 is the radical and so(3) is a Levi factor.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=not_applicable, one=not_applicable, degenerate=not_applicable, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Kirillov, An Introduction to Lie Groups and Lie Algebras, so(3) and its standard action — §3.10, formulas (3.19)–(3.20), printed p. 44
- Dependencies examined: `def-levi-subalgebra-and-levi-decomposition`.
- Decision/checkpoint: `accept`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `ex-distinct-conjugate-levi-subalgebras`.

### 54. `ex-distinct-conjugate-levi-subalgebras`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory-examples` / `example`.
- Exact scoped claim: In g=sl_2⋉V for a finite-dimensional module V with nontrivial action, the standard sl_2 and exp(ad v)(sl_2) are distinct Levi subalgebras for suitable v in V, yet are Malcev-conjugate.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=not_applicable, one=not_applicable, degenerate=not_applicable, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Milne, Lie Algebras, Malcev conjugacy — Chapter I, Theorem 6.25 and its proof, printed pp. 59–60
- Dependencies examined: `thm-malcev-conjugacy-of-levi-subalgebras`, `def-semidirect-product-of-lie-algebras`.
- Decision/checkpoint: `repaired`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups`.

### 55. `ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory-examples` / `example`.
- Exact scoped claim: The covering homomorphism SU(2)→SO(3) has kernel {±I}, induces su(2) congruent to so(3), and makes the groups locally isomorphic, but SU(2) is simply connected while SO(3) has fundamental group Z/2.
- Conventions and boundary audit: axiom base `ZF + AC_omega`; strict contract records empty=not_applicable, zero=not_applicable, one=not_applicable, degenerate=not_applicable, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Kirillov, An Introduction to Lie Groups and Lie Algebras, SU(2) and SO(3) — Exercises 2.8–2.10 and §3.10, especially (3.25), printed pp. 24–25 and 44–45
- Dependencies examined: `cor-isomorphic-lie-algebras-give-locally-isomorphic-but-not-necessarily-isomorphic-connected-lie-groups`, `thm-universal-covering-lie-group`.
- Decision/checkpoint: `accept`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `ex-the-bch-group-of-a-nilpotent-lie-algebra`.

### 56. `ex-the-bch-group-of-a-nilpotent-lie-algebra`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory-examples` / `example`.
- Exact scoped claim: On a finite-dimensional real nilpotent Lie algebra n, x*y=BCH(x,y) is a finite polynomial group law with identity 0 and inverse -x; its Lie algebra is n and it is connected and simply connected.
- Conventions and boundary audit: axiom base `ZF + AC_omega`; strict contract records empty=not_applicable, zero=checked, one=not_applicable, degenerate=checked, endpoints=checked, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Knapp, Lie Groups Beyond an Introduction, nilpotent Lie groups — Chapter I, Theorem 1.127, printed pp. 112–113
- Dependencies examined: `thm-the-exponential-map-of-a-connected-simply-connected-nilpotent-lie-group-is-a-diffeomorphism`, `thm-baker-campbell-hausdorff`.
- Decision/checkpoint: `accept`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `cex-centerless-does-not-imply-semisimple`.

### 57. `cex-centerless-does-not-imply-semisimple`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory-examples` / `counterexample`.
- Exact scoped claim: The nonabelian two-dimensional affine Lie algebra is centerless but solvable, hence not semisimple.
- Conventions and boundary audit: axiom base `ZF`; strict contract records empty=not_applicable, zero=checked, one=not_applicable, degenerate=checked, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Milne, Lie Algebras, affine algebra and semisimplicity — Chapter I, Example 1.4 and Definition 4.2, printed pp. 10 and 41
- Dependencies examined: `fs-centerless-implies-semisimple`, `def-derived-series-and-solvable-lie-algebra`, `def-semisimple-lie-algebra-by-vanishing-radical`.
- Decision/checkpoint: `accept`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: `cex-the-circle-and-line-have-isomorphic-one-dimensional-lie-algebras-but-are-not-isomorphic-lie-groups`.

### 58. `cex-the-circle-and-line-have-isomorphic-one-dimensional-lie-algebras-but-are-not-isomorphic-lie-groups`

- Page/kind: `semisimple-lie-algebras-cohomology-and-levi-theory-examples` / `counterexample`.
- Exact scoped claim: The connected Lie groups (R,+) and S^1 have isomorphic one-dimensional abelian Lie algebras, but are not isomorphic because S^1 is compact and R is not.
- Conventions and boundary audit: axiom base `ZF + AC_omega`; strict contract records empty=not_applicable, zero=checked, one=checked, degenerate=checked, endpoints=not_applicable, nonempty-choice=checked, iff-forward=not_applicable, iff-reverse=not_applicable. Exact item-specific reasons/evidence are in `research/phase-2-next-18-batch-5.proof-contracts.json`.
- Source locator(s): Kirillov, An Introduction to Lie Groups and Lie Algebras, connected groups with fixed Lie algebra — Corollary 3.43 and its discussion, printed p. 42
- Dependencies examined: `cor-isomorphic-lie-algebras-give-locally-isomorphic-but-not-necessarily-isomorphic-connected-lie-groups`.
- Decision/checkpoint: `accept`, confidence 1; focused explicit-path precheck, rendercheck, and strict proof-contract check passed. Open gap: none. Next: final pair/batch gates and handoff.

## Dependency and shared-file accounting

- `research/phase-2-next-18-batch-5.cross-batch-dependencies.json` remains `[]`: neither owned page has a same-run dependency on another batch. Existing sibling rows were therefore preserved vacuously. The unified frontier ledger was refreshed after dependency edits.
- All owned dependencies resolve either to an earlier published supplier or an earlier item in batch 5. No B-page item is consumed as a prerequisite.
- The serial published-consumer ledger was not edited. No potentially defective published item was found: published concerns, suspected or confirmed, are `none`. The confirmed Malcev flaw was confined to this unpublished owned draft and was repaired locally.

## Checks actually run

- Owned explicit paths after all repairs: precheck 50/50 proof-bearing items clean, renderer 60/60 files clean, and strict proof contracts 58/58 clean. The final batch author check independently reports precheck 94/94 proof-bearing items, rendering 116/116 files, content policy 112 items with 0 errors/0 warnings, and strict contracts 112/112 with 0 errors/0 warnings.
- `manifest-deps`: 112 items, 0 normalization changes, 0 errors.
- `coverage-checklist`: 2 pages, 44 harvested results, 0 errors, 0 warnings.
- `source-fetch-check`: 7/7 sources fetch-verified and 7/7 resolved.
- `frontier-dependency-ledger refresh`: completed and deduplicated.
- `author-check phase-2-next-18 5`: `ok: true`; receipt `research/phase-2-next-18-author-check-5.json`.
- `validate-plan research/plan-spec.json`: exit 0; page order acyclic and consistent, with no item cycles, forward references, B-page dependencies, or unresolved IDs among populated plan inventories.
- Step-3 decision audit for this pair: scope current; 58/58 items current and closed. No owner-held escalation remains.

## Step 4 serial reconciliation obligations

- Pre-splice plan mismatch: `research/plan-spec.json` still lists 0 items for both owned pages, while the final batch manifest contains 46 and 12. Step 4 must splice these exact inventories.
- `validate-plan` also reports the owned A page’s direct prerequisites as transitively redundant: `lie-algebra-representations-enveloping-algebras-and-pbw` through `solvable-and-nilpotent-lie-algebras`; `chain-complexes-and-homology` through `lie-subgroups-actions-and-homogeneous-spaces` and through `long-exact-sequences-in-homology`; `long-exact-sequences-in-homology` through `lie-subgroups-actions-and-homogeneous-spaces`; and `covering-spaces-and-lifting` through each of `lie-subgroups-actions-and-homogeneous-spaces`, `lie-algebra-representations-enveloping-algebras-and-pbw`, and `solvable-and-nilpotent-lie-algebras`. These are plan/prose cleanup warnings for serial reconciliation, not unresolved item dependencies.
- The coverage disposition vocabulary does not include `supplementary`; the Milne Ado harvest row is therefore recorded as `included`, while its locator explicitly states that the omitted strengthened proof is not sole proof evidence.
- Open mathematical/source/choice obligations: none.
- Operational note: the repository-wide autopilot status currently identifies `frontier-23` as the live run, while this explicitly assigned dispatch and all of its artifacts are labeled `phase-2-next-18`; no autopilot state was altered here.
