---
id: thm-pontryagin-whitney-product-away-from-two
kind: theorem
title: Pontryagin Whitney product away from two
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-pontryagin-classes-by-complexification, cor-odd-chern-classes-of-a-complexified-real-bundle-are-two-torsion, thm-naturality-normalization-and-whitney-sum-for-chern-classes, def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from the Chern-class suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Miller, MIT 18.906 Algebraic Topology II, Lecture 36"
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Integral Pontryagin multiplicativity fails on the odd terms, printed pp.134-137"
    - title: "Hatcher, Vector Bundles & K-Theory, Theorem 3.16"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "p_i over Z[1/2], printed pp.96-98"
---

## Statement

Assume AC. Let $E,F\to B$ be numerable real bundles over a path-connected CW
base. Over $\mathbb Z[1/2]$, or any coefficient ring in which
$2$ is invertible, the total Pontryagin classes multiply:
$$p(E\oplus F)=p(E)\,p(F).$$
No integral multiplicativity is asserted: integrally the omitted odd-Chern
cross terms can obstruct the formula, and the companion examples page supplies
a witness for that failure.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed, exactly as inherited from the Chern-class suppliers ([[def-axiom-of-choice]]).

[F1] $p_i(V)=(-1)^ic_{2i}(V_{\mathbb C})$, with $p_0=1$ ([[def-pontryagin-classes-by-complexification]]).

[F2] For a complexified real bundle all odd Chern classes are two-torsion: $2c_{2j+1}(V_{\mathbb C})=0$ ([[cor-odd-chern-classes-of-a-complexified-real-bundle-are-two-torsion]]).

[F3] Total Chern classes are multiplicative over Whitney sums and natural ([[thm-naturality-normalization-and-whitney-sum-for-chern-classes]]).

[F4] Direct sums and scalar extensions of bundles are formed fiberwise from
their transition functions
([[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]]).

## Proof

**Proof technique:** direct.

**Given:** AC and numerable real bundles $E,F\to B$ over a path-connected CW base.

1.1 Distributivity gives a fiberwise complex-linear isomorphism
$((E\oplus F)\otimes_{\mathbb R}\mathbb C)_b\to
(E_b\otimes_{\mathbb R}\mathbb C)\oplus
(F_b\otimes_{\mathbb R}\mathbb C)$; compatibility with the transition
functions makes this an isomorphism
$(E\oplus F)_{\mathbb C}\cong E_{\mathbb C}\oplus F_{\mathbb C}$. Hence by
multiplicativity [F3], $c((E\oplus F)_{\mathbb C})=c(E_{\mathbb C})c(F_{\mathbb C})$; expanding in degree $2i$ gives the sum of the even-even and odd-odd terms. [F3, F4]

2.1 In the even-even terms write $a=2r$, $b=2s$ with $r+s=i$: then $(-1)^ic_{2r}(E_{\mathbb C})c_{2s}(F_{\mathbb C})=(-1)^{r+s}c_{2r}(E_{\mathbb C})c_{2s}(F_{\mathbb C})=p_r(E)p_s(F)$ by [F1], since $(-1)^{r+s}=(-1)^i$. [F1, step 1.1]

2.2 Every odd-odd term has the form $c_{2r+1}(E_{\mathbb C})c_{2s+1}(F_{\mathbb C})$ with $r+s=i-1$, and each factor is two-torsion by [F2]; after inverting two these terms vanish, and the same holds in any coefficient ring in which $2$ is invertible. [F2, step 1.1]

3.1 Multiplying the degree-$2i$ expansion of step 1.1 by $(-1)^i$ and using steps 2.1 and 2.2, $p_i(E\oplus F)=\sum_{r+s=i}p_r(E)p_s(F)$ over $\mathbb Z[1/2]$, which is the degree-$i$ component of $p(E\oplus F)=p(E)p(F)$. [F1, step 2.1, step 2.2]

3.2 The statement asserts no integral identity: the discarded odd-odd terms need not vanish integrally, and the companion examples page exhibits an integral counterexample for the universal real line. [step 2.2]

4.1 Boundary cases. For $i=0$ both sides are $1$; if one summand has rank zero the formula reduces to $p(F)=p(F)$ by stability. The empty base is excluded by the path-connected hypothesis; the coefficient ring $\mathbb Z[1/2]$ is nonzero and $2$ is invertible there by construction, so no division by zero occurs. AC is used only through [A1]. [A1, F1, F3, step 3.1] ∎

## Source notes

Miller's Lecture 36 shows that the odd Chern classes of complexified bundles are exactly the obstruction to integral multiplicativity, and Hatcher's Theorem 3.16 works over $\mathbb Z[1/2]$ for that reason. The witness for integral failure is proved on the companion examples page (`cex-integral-total-pontryagin-multiplicativity-cannot-ignore-two-torsion`), not assumed here.
