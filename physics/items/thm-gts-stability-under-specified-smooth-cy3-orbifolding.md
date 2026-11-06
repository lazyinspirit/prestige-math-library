---
id: thm-gts-stability-under-specified-smooth-cy3-orbifolding
kind: theorem
title: Stability under specified smooth CY3 orbifolding
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 9
domain: mathematics
library: physics
category: string-theory
deps:
- def-derived-category-of-an-abelian-category
- def-gts-bridgeland-stability-condition-with-support-property
- def-gts-compact-calabiyau-manifold-conventions
- lem-gts-finite-group-induction-of-invariant-stability
- lem-gts-projective-cy-threefold-derived-mckay-correspondence
- lem-gts-finite-directed-flops-between-smooth-crepant-threefold-resolutions
- thm-naturality-normalization-and-whitney-sum-for-chern-classes
- thm-gts-smooth-projective-variety-stability-by-embedding
- def-axiom-of-choice
dependency_roles:
  def-derived-category-of-an-abelian-category: mathematical-premise
  def-gts-bridgeland-stability-condition-with-support-property: mathematical-premise
  def-gts-compact-calabiyau-manifold-conventions: mathematical-premise
  lem-gts-finite-group-induction-of-invariant-stability: mathematical-premise
  lem-gts-projective-cy-threefold-derived-mckay-correspondence: mathematical-premise
  lem-gts-finite-directed-flops-between-smooth-crepant-threefold-resolutions: mathematical-premise
  thm-naturality-normalization-and-whitney-sum-for-chern-classes: mathematical-premise
  thm-gts-smooth-projective-variety-stability-by-embedding: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
  - title: Howard Nuer, Stability conditions on some families of Calabi-Yau threefolds via orbifolding
    url: https://arxiv.org/pdf/2501.06207v1
    locator: Theorem1 and its complete proof, Corollary2 andRemarks3–5; complete two-page v1 read.
  - title: Chunyi Li, A remark on stability conditions on smooth projective varieties
    url: https://arxiv.org/pdf/2601.22994v1
    locator: Theorems 1.1 and 6.5; Sections 2–3 and 5–6 consulted; local supplier proves the existence assertion
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
axiom_use: ZF + AC
---

## Statement

Let $X$ be a smooth projective Calabi–Yau threefold in the broad canonical-line convention used on this page, and suppose $D^b(\operatorname{Coh}X)$ admits the source Bridgeland stability conditions used in the cited construction. A source smooth-orbifolding family over this input consists of a smooth projective family $X_0\to A_0$ of CY3s containing $X$ as a smooth member, with an equivariant finite-group action $G$, its quotient family $X_0/G\to A_0/G$, and a simultaneous projective crepant resolution $Y\to X_0/G$ whose selected fibers are smooth projective CY3s. For each selected smooth member $Y$, the source theorem asserts that $D^b(\operatorname{Coh}Y)$ admits Bridgeland stability conditions. This includes the source quintic-mirror family and makes no assertion for arbitrary singular quotients or crepant resolutions outside the stated construction.

## Statement references

[[def-gts-compact-calabiyau-manifold-conventions]]

[[def-gts-bridgeland-stability-condition-with-support-property]]

[[def-derived-category-of-an-abelian-category]]

## Facts & Assumptions

**Given:** Exactly the family, input $X$, and selected smooth target fibers in the unchanged Statement. Work in ZF+AC. No stability condition on a different source fiber is added to these hypotheses; no simultaneous choice of conditions over the family is required.

[F1] [[def-gts-compact-calabiyau-manifold-conventions]] supplies the broad trivial-canonical-line convention; the Statement additionally supplies projectivity. [[def-derived-category-of-an-abelian-category]] fixes the bounded coherent derived categories.

[F2] [[def-gts-bridgeland-stability-condition-with-support-property]] fixes slicing, finite HN filtrations, local finiteness and finite-rank support. [[lem-gts-finite-group-induction-of-invariant-stability]] proves induction of an ACTUAL invariant source condition to the bounded equivariant category, with support on the finite-rank image of the forgotten charge.

[F3] [[thm-naturality-normalization-and-whitney-sum-for-chern-classes]] gives Chern-class naturality on the CW-type smooth projective source, as supplied by F1. Applying the usual rational Chern-character polynomial to finite locally free resolutions gives the numerical Chern-character naturality used below. For the conditional construction below, geometric source torsion pairs and their HN filtrations are canonical for their specified numerical slopes; this does not assert existence of those conditions on every source fiber.

[F4] [[lem-gts-projective-cy-threefold-derived-mckay-correspondence]] supplies the actual projective G-Hilbert component, the normal projective Gorenstein quotient with trivial canonical line, its smooth projective crepant CY resolution, and the full equivalence to the equivariant source category. When a selected target is an actual crepant resolution of a smooth source-fiber quotient, its hypotheses include that target; no identification with the G-Hilbert component is assumed.

[F5] [[lem-gts-finite-directed-flops-between-smooth-crepant-threefold-resolutions]] supplies a finite chain of smooth projective elementary crepant flops between those two ACTUAL resolutions over the quotient and the full derived equivalence at every step. Its original base may be canonical nonterminal. Its local algebra, nef-big, projective Quot and termination suppliers are actual local constructions.

[F6] [[def-axiom-of-choice]] is the ambient foundational premise inherited through these suppliers.

[F7] [[thm-gts-smooth-projective-variety-stability-by-embedding]] supplies complete local existence for every smooth projective complex target, with finite HN filtrations, local finiteness and support on an explicit finite-rank image lattice. It does not assert geometric BMT form, invariance under a group, or compatibility along a family.

## Proof

1.1 Fix any selected target fiber $V$ in the Statement. By the stated family assumptions it is a smooth projective complex CY3. Apply F7 directly to $V$; all its hypotheses are smoothness, projectivity over $\mathbb C$, and AC. It gives a locally finite Bridgeland stability condition with finite HN filtrations and finite-rank support on $D^b(\operatorname{Coh}V)$ in precisely the sense of F2. This application neither transfers a condition from $X$ to a different source fiber nor uses an unstated invariant source condition. [given, F1, F2, F6, F7, construct]

1.2 Retain the equivariant construction under its actual additional premises. Suppose a selected target has been identified with a smooth projective crepant resolution $V\to Q=M/G$, where $M$ is a smooth source CY3 fiber, $G$ is finite faithful, and $M$ carries an actual geometric BMT stability condition with admissible $G$-invariant parameters $(\omega,B)$. These premises are conditions on this alternative construction and are not inferred from existence on the single input $X$. If the fiberwise quotient is obtained from a reduced disjoint orbit of smooth source fibers, restriction to one component identifies the invariant functions with the invariants of its stabilizer; replacing that stabilizer by its effective quotient does not change the coarse quotient. The actual reduced fiber identification must be checked in the construction before this conditional route is applied. [F1, F2, F4, F6, construct]

2.1 The choice of $V$ was arbitrary among the selected smooth projective targets. Thus every such target admits the required conditions, including the specified quintic-mirror members. This is a separate existence assertion for each member, with no claim of a common relative slicing or of BMT geometric form on it. It establishes the complete unchanged Statement. [given, step 1.1, F7, algebra]

2.2 Use the actual G-invariant parameters (ω,B) in the conditional premise of step 1.2. To check actual invariance, pullback by g preserves coherent sheaves, their exact sequences and their Chern characters, and $g*ω=ω, g*B=B$. Each numerical $\int_M ω^{3−j}ch_{j}^{B}(E)$ is therefore unchanged: g is a holomorphic automorphism of degree one and preserves the complex orientation. Hence the central charge and every cohomological slope defining the source torsion pairs are unchanged, including the zero-denominator convention. Pullback takes a slope HN filtration to one with the same factors' slopes, so uniqueness of that filtration makes both torsion classes invariant. The construction of the tilted heart as complexes with the two specified coherent cohomology pieces is functorial, and the same reasoning applies at the next tilt. Thus this source heart and central charge are G-invariant. The slicing is determined by the heart's semistable objects and their shifts, so this full locally finite support-property condition σ is G-invariant. This uses the conditional invariant source parameters; it makes no averaging operation on a stability condition. [F1, F2, F3, F6, step 1.2, algebra]

3.1 Make the charge G-stable explicitly: replace its finite-rank charge v by $v'(E)=(v(g*E))_{g∈G}$, with Γ′ the image inside the finite free direct sum of |G| copies of Γ. Pullback permutes these components. By σ-invariance their central charges agree on Γ′; use any component to define Z′. Every g*E is semistable whenever E is, so the product norm has support constant at most √|G| times the original constant. Relabel this actual G-stable charge as v. Apply F2 to σ on Db(Coh M), which is the compact-support category because M is projective. It gives $σ_{G}=(Z_{G},P_{G})$ on $D^b(\operatorname{Coh}_G M)$, with $P_{G}(φ)$ the equivariant objects whose underlying objects lie in P(φ), and $Z_{G}=Z$ composed with the forgotten charge. Its finite-rank charge group is $Γ_{G}=\operatorname{im}(v \operatorname{Forget})$, with the inherited norm. The supplied proof gives actual equivariant HN filtrations and the same local-finiteness interval; its support inequality is inherited on this image. These are exactly the existence requirements of F2, without a claim of support on an unspecified larger equivariant lattice. [F2, F6, step 2.2, construct]

4.1 Apply F4 to (M,G,V→Q). It constructs a smooth projective crepant CY G-Hilbert resolution T→Q and an actual equivalence $E:D^b(\operatorname{Coh}T)\to D^b(\operatorname{Coh}_G M)$. The selected resolution V is a separate given resolution. Pull $σ_{G}$ back along E: its slicing is $E^{-1}P_{G}$ and its charge is $Z_{G}$ composed with the induced K-group isomorphism. Exact equivalence carries all HN triangles, phase-Hom vanishing and strict exact sequences in the local-finiteness subcategories bijectively. The norm and support inequality use the same finite group $Γ_{G}$. Thus this is a genuine locally finite support-property stability condition on Db(Coh T). [F1, F2, F4, F6, step 1.2, step 3.1, construct]

5.1 Q is normal projective Gorenstein, and T,V are its actual smooth projective crepant resolutions with trivial canonical line. The full hypotheses of F5 hold even if Q itself is nonterminal. Its finite directed-flop chain gives an actual triangulated equivalence J:Db(Coh V)→Db(Coh T), obtained by composing the supplied global perverse-point kernel equivalences (and inverses in the required direction). Pull the condition from step 4.1 back along J. The preceding exact-equivalence argument again verifies the complete slicing, finite HN, local-finiteness and finite-rank support axioms. Therefore the specified selected V admits Bridgeland stability conditions. This conditional construction applies to each selected member for which the additional source data in step 1.2 have been supplied. [F1, F2, F4, F5, F6, step 4.1, construct]

6.1 The source quintic-mirror example is within these inputs. Its smooth source members can be written $\sum _{i=0}^{4} x_{i}^{5}−5ψ\prod _{i=0}^{4}x_{i}=0$ in $P^{4}$, with $ψ^{5}≠1$. The group $\{\operatorname{diag}(ζ0,…,ζ4):ζ_{i}^{5}=1,\prod ζ_i=1\}/\mu_5$ acts on each member, preserves the hyperplane class, and has order125. Whenever that source member carries the admissible geometric BMT family, taking parameters proportional to the preserved hyperplane class supplies the conditional invariant choices in step 1.2; such availability is a separate fact and is not deduced from the original input X alone. The specified projective crepant mirror resolutions are precisely selected source orbifolding targets in the Statement. Step 5.1 applies whenever the conditional source data have been supplied. The smoothness restriction follows directly from the Jacobian: a singular point cannot have a zero coordinate, and the five derivative equations then multiply to $ψ^{5}=1$. This describes the conditional equivariant route. The unconditional existence conclusion for every specified smooth target, including these mirror resolutions, already follows from steps 1.1–2.1. [F1, F2, F4, F5, F6, step 1.2, step 5.1, algebra] ∎

## Remarks

The Statement remains byte-exact. Its literal family conclusion now follows by applying the locally reconstructed smooth-projective existence theorem directly to each selected target. The original equivariant/McKay/flop construction remains in steps 1.2–6.1 with its actual invariant-source-condition premises stated conditionally. Existence of a condition on the single input $X$ does not by itself supply those premises on another source fiber; no such hypothesis has been inserted into Given.

Nuer's two-page v1 and Li's Sections 2–3 and 5–6 were consulted for this repair. The additional local suppliers state and prove the hypotheses used here. This source repair does not constitute independent acceptance or certification.
