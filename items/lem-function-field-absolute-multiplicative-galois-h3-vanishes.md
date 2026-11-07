---
dependency_level: 12
id: lem-function-field-absolute-multiplicative-galois-h3-vanishes
kind: lemma
title: Absolute multiplicative degree-three cohomology of a finite-constant function field vanishes
deps:
- thm-tsen-brauer-group-of-function-field-over-algebraically-closed-field-zero
- lem-function-field-geometric-divisor-picard-cohomology
- thm-curves-function-fields-equivalence
- lem-finite-galois-obstruction-brauer-cohomology-comparison
- thm-hilbert-90-for-finite-galois-extension
- thm-fundamental-theorem-of-finite-galois-theory
- lem-finite-group-tate-vanishing-from-all-subgroup-low-degrees
- lem-function-field-constant-class-local-invariant-comparison
- thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients
- thm-continuous-lyndon-hochschild-serre-spectral-sequence
- thm-finite-field-galois-higher-cohomology-of-torsion-modules-vanishes
- def-axiom-of-choice
- def-dependent-choice
- thm-choice-implies-dependent-implies-countable-choice
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
axiom_use: AC and DC, with actual ordinary/continuous cohomology. AC implies any Countable Choice
  needed by curve/field interfaces. This is absolute multiplicative H3 only, not finite noncyclic
  H3 or a named cohomological-dimension import.
sources:
  references:
  - title: J. S. Milne, Arithmetic Duality Theorems, second edition; locally reconstructed intermediates
    url: https://www.jmilne.org/math/Books/ADTnot.pdf
    locator: Appendix A.7–A.9, printed131–133, full actual proofs read. The source cd2/end-zero
      assertion is replaced locally by Tsen on all geometric finite fixedfields, finite positive
      cohomology vanishing and the already proved Prin H3 calculation.
  - title: J. S. Milne, Class Field Theory, version4.03
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: ChapterVII2 Propositions2.2–2.6, printed203–207, full relevant finite-idelic/norm
      proofs read; actual local/absolute bridges are reconstructed here, not imported.
verification: {}
proof_strategy: direct
---

## Statement

Assume AC and DC with the ordinary/continuous cohomology convention. Let
$F$ be a global function field with its full finite constant field, fix a
separable closure $F_s$, and give $F_s^\times$ the discrete natural action.
For every finite intermediate field $E/F$ in $F_s$,
$$H^3_{\mathrm{cts}}(G_E,F_s^\times)=0,\qquad G_E=\operatorname{Gal}(F_s/E).$$
No assertion of vanishing for $H^3(\operatorname{Gal}(L/E),L^\times)$
of a finite noncyclic extension is made.

## Statement references

[[thm-tsen-brauer-group-of-function-field-over-algebraically-closed-field-zero]]

[[lem-function-field-geometric-divisor-picard-cohomology]]

## Facts & Assumptions

**Given:** The function field, closure and AC/DC in the Statement.

[F1] Over a perfect field relatively algebraically closed in a finitely
generated transcendence-degree-one field, AC supplies its smooth proper
geometrically integral curve model. [[thm-curves-function-fields-equivalence]]

[F2] Under AC, Tsen kills the Brauer group of every finitely generated
one-variable field over an algebraically closed field. Under AC/DC the
actual standard comparison identifies finite relative and absolute
multiplicative $H^2$ with Brauer groups, with sign $b=-o$.
[[thm-tsen-brauer-group-of-function-field-over-algebraically-closed-field-zero]]
[[lem-finite-galois-obstruction-brauer-cohomology-comparison]]

[F3] Finite Hilbert90 gives $H^1(H,L^\times)=0$ for a finite Galois field
extension. The ordinary positive-degree part of the accepted subgroup
vanishing proof, its steps2.1–2.2, proves that zero $H^1,H^2$ on EVERY
subgroup forces all positive ordinary cohomology to vanish. That part uses
finite cyclic periodicity, ordinary LHS and finite Sylow res/cor, not its
later negative-degree shifts or any tensor theorem.
[[thm-hilbert-90-for-finite-galois-extension]]
[[thm-fundamental-theorem-of-finite-galois-theory]]
[[lem-finite-group-tate-vanishing-from-all-subgroup-low-degrees]]

[F4] For the curve model over $k=\mathbb F_q$, the actual sequence
$1\to G_{F\bar k}\to G_F\to G_k\to1$ is exact and the fixed
multiplicative module is $(F\bar k)^\times$. Finite constant extensions
have their actual cyclic degrees. [[lem-function-field-constant-class-local-invariant-comparison]]

[F5] Continuous cohomology is the finite-quotient direct limit with the
actual fixed fields and inflation/coefficient maps. The full AC continuous
LHS theorem applies to closed normal subgroups and has strongly convergent
finite target filtrations and the actual inflation edge.
[[thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients]]
[[thm-continuous-lyndon-hochschild-serre-spectral-sequence]]

[F6] The actual divisor/Picard construction over finite $k$ gives the exact
constants sequence and $H^3(G_k,\operatorname{Prin}(\bar C))=0$, with no
rational-point assumption. Discrete torsion $G_k$-modules have zero
cohomology in every degree at least two under AC.
[[lem-function-field-geometric-divisor-picard-cohomology]]
[[thm-finite-field-galois-higher-cohomology-of-torsion-modules-vanishes]]

[A1] AC and DC are explicit; AC supplies compactness and implies Countable
Choice when a stated interface needs it. No bare-DC claim is made.
[[def-axiom-of-choice]] [[def-dependent-choice]]
[[thm-choice-implies-dependent-implies-countable-choice]]

## Proof

**Proof technique:** ordinary finite subgroup vanishing over the geometric
field, actual closed-normal LHS, then the constants/Prin degree-three row.

**Given:** The data above; first prove the assertion for the base field $F$.

1.1 Write $k$ for its exact finite constant field. It is perfect, since Frobenius is bijective on a finite field, and it is relatively algebraically closed in $F$ by exactness. Choose the model $C/k$ in [F1]. Put $\bar F=F\bar k$ in $F_s$. The actual Galois sequence and fixed field are [F4]; $F_s$ is also a separable closure of $\bar F$. Indeed a separable polynomial over $\bar F$ uses finitely many constants in a finite separable constant extension, and separability is transitive over that finite extension. [A1, F1, F4, given, construct, algebra]

2.1 Let $L/\bar F$ be finite Galois with group $H$ and let $J\le H$. Its fixed field $A=L^J$ is still finitely generated of transcendence degree one over $\bar k$. By [F2], $\operatorname{Br}(A)=0$. The actual finite relative comparison injects $H^2(J,L^\times)$ into that zero Brauer group, so it is zero; [F3] also kills $H^1(J,L^\times)$. Thus the low-degree conditions hold on every subgroup of $H$. Apply the ordinary positive part of [F3], obtaining $H^q(H,L^\times)=0$ for every $q>0$. Only its finite ordinary bar/LHS argument is used: a central $C_p$ reduces a $p$-group, and finite Sylow index Bezout kills the remaining positive classes. AC supplies its ordinary model choices and DC; no additional complete-resolution or arbitrary-module Tor premise is introduced here. [A1, F2, F3, step 1.1, algebra]

3.1 Put $N=G_{\bar F}$. In [F5]'s actual finite-quotient formula its fixed multiplicative coefficient fields are precisely the finite Galois $L/\bar F$ inside $F_s$, with the standard coefficient inclusions. Every positive finite-level group is zero by step 2.1, hence $H^q_{\mathrm{cts}}(N,F_s^\times)=0$ for all $q>0$. No cohomological-dimension assertion for arbitrary torsion modules is being substituted for this computation. [F5, step 1.1, step 2.1, algebra]

4.1 The full closed-normal LHS theorem in [F5] now has only its $q=0$ row. Strong finite-filtration convergence and its actual inflation edge give $H^3(G_F,F_s^\times)\cong H^3(G_k,\bar F^\times)$. By [F6], $1\to\bar k^\times\to\bar F^\times\to\operatorname{Prin}(\bar C)\to1$ is exact. Its continuous cochain sequence is termwise onto: a cochain on a compact power of $G_k$ has finite image, so finitely many lifts, constant on its clopen fibres and zero at normalized tuples, give a continuous lift. Thus its actual long exact sequence applies. The torsion module $\bar k^\times$ has zero $H^3$ by [F6], and $H^3(G_k,\operatorname{Prin})=0$ by the other part of [F6]. Exactness forces $H^3(G_k,\bar F^\times)=0$, proving the desired absolute vanishing. No named cd2 or global duality theorem has been imported. [A1, F5, F6, step 3.1, construct, algebra]

5.1 For finite $E/F$ inside $F_s$, its algebraic constant field $k_E$ is finite. To verify this, any finite $k'/k$ contained in $k_E$ has $[Fk':F]=[k':k]$ by the geometrically integral model and [F4], so $[k':k]\le[E:F]$. Inside $\bar k$ there is only one finite field of each degree; finitely many bounded degrees therefore contain all of $k_E$ in a finite union. Thus $k_E$ is finite. The field $E/k_E$ is finitely generated of transcendence degree one, its finite base is perfect and relatively algebraically closed in it, so [F1] supplies its own curve model. Repeat steps 1.1–4.1 over $E$. This includes nonnormal $E/F$, all characteristics and the identity extension, with no rational-point assumption. It proves the full Statement. [A1, F1, F4, step 1.1, step 4.1, algebra] ∎

## Remark

The proof yields all positive multiplicative cohomology vanishings over the
geometric field $\bar F$, but only the stated absolute $H^3$ vanishing is
used for the finite-constant global field. It does not kill the finite
noncyclic group $H^3(\operatorname{Gal}(L/F),L^\times)$; that group can be
a genuine extra term in finite idelic cohomology. No relative
$H^2(\operatorname{Gal}(L/F),C_L)$ order is inferred by summing local degrees.
