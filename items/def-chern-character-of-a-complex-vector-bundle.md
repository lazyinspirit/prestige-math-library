---
id: def-chern-character-of-a-complex-vector-bundle
kind: definition
title: Chern character of a complex vector bundle
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-complex-splitting-principle-with-integral-injective-pullback, thm-integral-cohomology-of-bu-n, thm-fundamental-theorem-of-symmetric-polynomials, lem-cohomology-of-a-finite-cw-complex-vanishes-above-its-dimension, def-chern-classes-from-the-projective-bundle-relation, def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles, def-axiom-of-choice]
axiom_strength: "ZF + AC; inherited from the splitting principle."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, section 4.1"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "The Chern character by Newton polynomials, printed pp.109-111"
    - title: "Milnor and Stasheff, Characteristic Classes, Problem 16-B"
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Chern character formulas, printed pp.197-199"
---

## Definition

Assume AC. Let $E\to X$ be a numerable complex vector bundle of rank $n$ over a
finite CW complex $X$, with Chern classes $c_i(E)$ in the sense of
[[def-chern-classes-from-the-projective-bundle-relation]] and Chern roots
$t_1,\dots,t_n$ on the flag bundle $q:\operatorname{Fl}(E)\to X$ in the sense
of [[def-complex-flag-bundle-and-chern-roots]].

For each $k\geq0$ let $N_k$ be the Newton polynomial expressing the $k$-th
power sum in the elementary symmetric functions: the unique polynomial with
$$N_k(e_1(x),\dots,e_n(x))=\sum_{i=1}^nx_i^k$$
for all $x_1,\dots,x_n$, which exists by
[[thm-fundamental-theorem-of-symmetric-polynomials]] applied to the symmetric
polynomial $\sum_ix_i^k$. Define
$$\operatorname{ch}_k(E):=\tfrac1{k!}\,N_k\bigl(c_1(E),\dots,c_n(E)\bigr) \in H^{2k}(X;\mathbb Q),$$
with $c_i(E)=0$ for $i>n$, and the **Chern character**
$$\operatorname{ch}(E):=\sum_{k\geq0}\operatorname{ch}_k(E)\in H^{\mathrm{even}}(X;\mathbb Q).$$

The classes are well defined and independent of the choice of flag bundle: by
the splitting principle
[[thm-complex-splitting-principle-with-integral-injective-pullback]] one has
$q^*c_i(E)=e_i(t_1,\dots,t_n)$, so
$$q^*\operatorname{ch}_k(E)=\tfrac1{k!}\sum_{i=1}^nt_i^k,$$
and $q^*$ is injective after tensoring with $\mathbb Q$; this is the unique
class with that pullback. The series is a finite sum because
$H^{2k}(X;\mathbb Q)=0$ for $2k>\dim X$ by
[[lem-cohomology-of-a-finite-cw-complex-vanishes-above-its-dimension]], so
only finitely many terms are nonzero. The coefficient $1/k!$ lies in
$\mathbb Q$, and no division by zero occurs. Concretely
$\operatorname{ch}_0(E)=n$, $\operatorname{ch}_1(E)=c_1(E)$,
$\operatorname{ch}_2(E)=\tfrac12(c_1^2-2c_2)$, and so on; the class depends
only on the isomorphism class of $E$, and $\operatorname{ch}(0)=0$.
