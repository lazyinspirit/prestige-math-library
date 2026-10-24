---
id: def-chern-classes-from-the-projective-bundle-relation
kind: definition
title: Chern classes from the projective-bundle relation
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-integral-complex-projective-bundle-theorem, def-complex-projective-bundle-and-tautological-complex-line, def-axiom-of-choice]
axiom_strength: "ZF + AC; inherited from the projective-bundle theorem."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, section 3.1"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Definition of Chern classes by the projective-bundle relation, printed pp.78-80"
verification:
  audited: 2026-09-22
---

## Definition

Assume AC. Let $E\to B$ be a numerable complex rank-$n$ bundle with $n\geq1$
over a path-connected CW complex $B$ (or over one of the CW-type bases of
[[thm-integral-complex-projective-bundle-theorem]]). By that theorem there are
unique classes $a_i\in H^{2i}(B;\mathbb Z)$, $1\leq i\leq n$, such that
$$x_E^{\,n}-a_1x_E^{\,n-1}+a_2x_E^{\,n-2}-\cdots+(-1)^na_n=0\qquad\text{in }H^{2n}(P(E);\mathbb Z),$$
where $x_E\in H^2(P(E);\mathbb Z)$ is the Euler class of the underlying real
bundle of the tautological line
([[def-complex-projective-bundle-and-tautological-complex-line]]). The
**Chern classes** of $E$ are these coefficients:
$$c_i(E):=a_i\in H^{2i}(B;\mathbb Z)\qquad(1\leq i\leq n),$$
completed by the conventions $c_0(E):=1\in H^0(B;\mathbb Z)$ and
$c_i(E):=0$ for $i>n$, and the **total Chern class** is the finite sum
$c(E):=\sum_{i\geq0}c_i(E)=1+c_1(E)+\cdots+c_n(E)\in H^*(B;\mathbb Z)$.

For the zero bundle of rank $0$ the conventions give $c(0_B)=1$. The definition
depends only on the isomorphism class of $E$, because an isomorphism of
bundles induces an isomorphism of projective bundles pulling $x$ back to $x$
and hence preserves the unique relation. For a complex line bundle $L\to B$ one
has $P(L)\cong B$ over $B$ with $\gamma_L$ corresponding to $L$ under that
identification, so the relation is $x_L-c_1(L)=0$; since $x_L=e(L_{\mathbb R})$
under the identification, this gives
$$c_1(L)=e(L_{\mathbb R}).$$
This is the normalization used throughout the page: the first Chern class of a
complex line is the Euler class of its underlying real bundle in the complex
orientation, not a separately chosen normalization.
