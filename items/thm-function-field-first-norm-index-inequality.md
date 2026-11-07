---
id: thm-function-field-first-norm-index-inequality
kind: theorem
title: First norm-index inequality for a cyclic extension of function fields
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps:
- thm-function-field-idele-class-degree-exact-sequence
- lem-global-function-field-idele-class-galois-descent
- thm-finiteness-of-degree-zero-divisor-class-group-over-finite-field
- thm-local-unit-herbrand-quotient-one
- lem-unramified-local-unit-norms-and-cohomology
- lem-finite-ramification-of-function-field-extension
- def-herbrand-quotient-for-finite-cyclic-group-modules
- lem-herbrand-quotient-multiplicativity-in-exact-sequences
- thm-shapiro-lemma-for-group-cohomology
- def-cyclic-extension
- thm-local-artin-reciprocity-and-norm-index
- thm-local-class-formation-for-finite-residue-local-field
- def-axiom-of-choice
- def-dependent-choice
- def-global-field
- def-idele-group-of-a-global-field
- def-idele-class-group-of-a-global-field
- def-degree-divisor-proper-curve
- def-principal-weil-divisor-and-class-group
- lem-cyclic-group-cohomology-norm-and-inflation
- def-tate-cohomology-for-finite-groups
justified_by: []
proof_strategy: herbrand-quotient
axiom_use: AC/DC are inherited from the idele-degree, divisor-class, and local cohomology
  suppliers. No additional choice is used in the Herbrand quotient calculation.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: 'Romyar Yoon, Global Function Field Class Field Theory: A Neukirch Approach,
      §3.3.1'
    url: https://arxiv.org/pdf/1610.07486
  - title: J. S. Milne, Class Field Theory, Chapter II §3
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
verification: {}
---


## Statement

Assume AC and DC.

Let $L/F$ be a finite Galois extension of global function fields with finite
exact constant fields and cyclic Galois group of order $n$. Let
$N_{L/F}:C_L\to C_F$ be the idele-class norm induced by local field norms.
Then its image $N_{L/F}C_L$ has finite index and
$$[C_F:N_{L/F}C_L]\ge n.$$

## Statement references

[[thm-function-field-idele-class-degree-exact-sequence]]

[[thm-local-unit-herbrand-quotient-one]]

[[def-cyclic-extension]]

[[lem-unramified-local-unit-norms-and-cohomology]]

[[def-axiom-of-choice]]

[[def-dependent-choice]]

[Yoon, *Global Function Field Class Field Theory: A Neukirch Approach*, §3.3.1](https://arxiv.org/pdf/1610.07486)

## Facts & Assumptions

**Given:** AC, DC, and a cyclic extension $L/F$ of global function fields of
degree $n$.

[F1] The idele class degree sequence has compact degree-zero kernel and
quotient $\mathbb Z$. ([[thm-function-field-idele-class-degree-exact-sequence]])

[F2] The degree-zero divisor class group for $L$ is finite.
([[thm-finiteness-of-degree-zero-divisor-class-group-over-finite-field]])

[F3] Galois invariants in the idele class group descend to the base:
$C_L^G=C_F$. ([[lem-global-function-field-idele-class-galois-descent]])

[F4] For a finite cyclic local extension the Herbrand quotient of the unit
group is one. ([[thm-local-unit-herbrand-quotient-one]])

[F5] At an unramified finite-residue local extension, unit norms are
surjective and all positive cohomology groups of the unit module vanish.
([[lem-unramified-local-unit-norms-and-cohomology]])

[F6] Ramification in a finite separable function-field extension occurs at
only finitely many places. ([[lem-finite-ramification-of-function-field-extension]])

[F7] Herbrand quotients multiply in short exact sequences, and every finite
cyclic-group module has quotient one.
([[def-herbrand-quotient-for-finite-cyclic-group-modules]],
[[lem-herbrand-quotient-multiplicativity-in-exact-sequences]])

[F8] Shapiro's lemma identifies the cohomology of an induced local module
with the cohomology for its decomposition group.
([[thm-shapiro-lemma-for-group-cohomology]])

[F9] For finite cyclic groups, $\widehat H^0$ and $\widehat H^{-1}$ are
ordinary $H^2$ and $H^1$, respectively, by the period-two resolution.
([[lem-cyclic-group-cohomology-norm-and-inflation]],
[[def-tate-cohomology-for-finite-groups]])

[F10] A function field's ideles are the restricted product of its local
multiplicative groups, its idele class group is the quotient by the diagonal
field, and its degree-zero divisor class group is defined using divisors
modulo principal divisors.
([[def-global-field]], [[def-idele-group-of-a-global-field]],
[[def-idele-class-group-of-a-global-field]],
[[def-degree-divisor-proper-curve]],
[[def-principal-weil-divisor-and-class-group]])

[F11] A cyclic extension is a finite Galois extension whose Galois group is
cyclic. ([[def-cyclic-extension]])

[A1] AC and DC are assumed in the finite-group cohomology and product
arguments. ([[def-axiom-of-choice]], [[def-dependent-choice]])


## Proof

**Given:** The data in the Statement and Facts & Assumptions.

1.1 Write $G=\operatorname{Gal}(L/F)$ and let $C_L^0$ be the degree-zero
idele classes. The divisor map gives an exact sequence of $G$-modules
$$1\to U_L/\mathbb F_L^\times\to C_L^0\to\operatorname{Cl}^0(L)\to0,$$
where $U_L=\prod_w\mathcal O_{L_w}^{\times}$ and $\mathbb F_L$ is the exact
constant field of $L$. The kernel consists precisely of unit ideles modulo
global units, and every degree-zero divisor class has an idele
representative. [F1, F2, given]

1.2 For each place $v$ of $F$, the factor
$\prod_{w\mid v}\mathcal O_{L_w}^{\times}$ is the coinduced local unit module
from a decomposition group (for finite $G$, induction and coinduction agree).
By [F8] and [F9], its two Tate groups are the local groups
$H^2(D_v,\mathcal O_{L_w}^{\times})$ and
$H^1(D_v,\mathcal O_{L_w}^{\times})$. At unramified places both vanish by
[F5]; only finitely many places ramify by [F6]; at those places [F4] gives
quotient one. Cohomology of the product over $v$ commutes with products:
each cochain group is a finite power of the coefficient module, and
kernels and images are coordinatewise; [A1] supplies preimages
coordinatewise. Each ramified factor has both finite Tate groups by the definition in
[F4], and each unramified factor has zero groups by [F5]. Thus only
finitely many finite factors remain, so both Tate groups of $U_L$ are
finite and $h_G(U_L)=1$. This uses the proved local unit calculation,
not global reciprocity or a global idelic degree-three theorem. [A1, F4, F5, F6, F8, F9]

2.1 The group $\mathbb F_L^\times$ and $\operatorname{Cl}^0(L)$ are finite,
so their Herbrand quotients are one by [F7]. Multiplicativity applied to
$1\to\mathbb F_L^\times\to U_L\to U_L/\mathbb F_L^\times\to1$ and to step 1.1
gives $h_G(C_L^0)=1$. [F2, F7, step 1.1, step 1.2]

2.2 The degree sequence in [F1] is
$0\to C_L^0\to C_L\to\mathbb Z\to0$, with trivial $G$-action on $\mathbb Z$.
The cyclic norm on $\mathbb Z$ is multiplication by $n$, so
$\widehat H^0(G,\mathbb Z)=\mathbb Z/n\mathbb Z$ and
$\widehat H^{-1}(G,\mathbb Z)=0$, whence $h_G(\mathbb Z)=n$. Multiplicativity
therefore gives $h_G(C_L)=n$. [F1, F7, step 2.1, algebra]

3.1 By [F3], $\widehat H^0(G,C_L)=C_L^G/N_GC_L=C_F/N_{L/F}C_L$. Its order is
finite by step 2.2 and equals $n\,|\widehat H^{-1}(G,C_L)|$ by the Herbrand
quotient definition. This is at least $n$, proving the inequality.
[F3, step 2.2, algebra] ∎
