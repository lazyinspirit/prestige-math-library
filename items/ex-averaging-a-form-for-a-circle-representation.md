---
id: ex-averaging-a-form-for-a-circle-representation
kind: example
title: "A circle representation with an averaged orthogonal weight form"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-axiom-of-choice, def-topological-group, def-compact-space, def-hausdorff-space, def-subspace-topology-top, def-continuous-map-top, thm-continuity-characterisations-top, thm-complex-numbers-form-a-field, thm-complex-numbers-are-the-real-coordinate-plane, lem-complex-conjugation-and-modulus-laws, lem-vector-operations-are-continuous-in-a-normed-space, thm-product-universal-property, def-product-topology, lem-continuity-is-local-and-pastes, thm-heine-borel-rn, thm-metric-hausdorff-separation, def-metric-topology, def-standard-topologies, cor-normalized-haar-probability-on-a-compact-group, lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets, def-measure-space, def-averaged-hermitian-form-for-a-compact-group, def-real-and-complex-inner-product-space, def-finite-dimensional-representation-of-a-group-over-a-field, def-linear-isometry-and-orthogonal-or-unitary-operator, thm-all-norms-on-a-finite-dimensional-complex-space-are-equivalent, thm-linearity-of-the-lebesgue-integral-on-l-one, def-integrable-real-and-complex-functions-and-their-integrals, def-measure-preserving-transformation-and-system, thm-integrals-are-invariant-under-measure-preserving-maps, lem-averaging-makes-a-finite-dimensional-representation-unitary, def-linear-map, def-hilbert-space]
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  references:
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups, §§5.2–5.6"
      url: https://people.math.ethz.ch/~kowalski/representation-theory.pdf
    - title: "Vera Serganova, Representation Theory, Chapter III §§1.6–2.1"
      url: https://math.berkeley.edu/~serganov/math252/Bookrep.pdf
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let
$S^1=\{z\in\mathbb C:|z|=1\}$ be the unit circle with the subspace topology
inherited from $\mathbb C\cong\mathbb R^2$, made a group by complex
multiplication; let $V=\mathbb C^2$, and for $z\in S^1$ let
$\rho(z)\in\operatorname{GL}(V)$ be given by $\rho(z)(v_1,v_2)=(v_1,zv_2)$,
so that $\rho(z)=\operatorname{diag}(1,z)$ is a continuous finite-dimensional
complex representation of $S^1$
([[def-finite-dimensional-representation-of-a-group-over-a-field]],
[[def-topological-group]]). Let
$$h_0(v,w):=2v_1\overline{w_1}+v_1\overline{w_2}+v_2\overline{w_1}+3v_2\overline{w_2}$$
([[def-real-and-complex-inner-product-space]]), a Hermitian inner product on
$V$ whose matrix is $\begin{pmatrix}2&1\\1&3\end{pmatrix}$, and let $h$ be its
average over the normalized Haar probability measure $\mu$ of $S^1$,
$$h(v,w):=\int_{S^1}h_0\bigl(\rho(z)v,\rho(z)w\bigr)\,d\mu(z)$$
([[def-averaged-hermitian-form-for-a-compact-group]],
[[cor-normalized-haar-probability-on-a-compact-group]]). Then:

1. $h(v,w)=2v_1\overline{w_1}+3v_2\overline{w_2}$ for all $v,w\in V$;
2. the coordinate (weight) lines $\mathbb Ce_1$ and $\mathbb Ce_2$, on which
   $\rho$ acts by the characters $z\mapsto1$ and $z\mapsto z$, are orthogonal
   for the averaged form $h$, since $h(e_1,e_2)=0$, but not for $h_0$, since
   $h_0(e_1,e_2)=1$;
3. $h_0$ is not $S^1$-invariant, because
   $h_0(\rho(-1)e_1,\rho(-1)e_2)=-1\ne1=h_0(e_1,e_2)$, whereas $h$ is
   $S^1$-invariant and positive definite.

## Facts & Assumptions

**Given:** AC; the unit circle $S^1=\{z\in\mathbb C:|z|=1\}$ with the subspace
topology of $\mathbb C\cong\mathbb R^2$ and complex multiplication; the
representation $\rho(z)=\operatorname{diag}(1,z)$ on $V=\mathbb C^2$; the form
$h_0$ above; the normalized Haar probability $\mu$ of $S^1$; and its averaged
form $h$.

[F1] $\mathbb C$ is a field with the usual coordinate-plane model: the map
$\Phi(a+bi)=(a,b)$ is a bijection carrying products to $(au-bv,av+bu)$, and
conjugation is an involutive field automorphism with $z\overline z=|z|^2$ and
$|zw|=|z|\,|w|$, so $z^{-1}=\overline z$ whenever $|z|=1$
([[thm-complex-numbers-form-a-field]],
[[thm-complex-numbers-are-the-real-coordinate-plane]],
[[lem-complex-conjugation-and-modulus-laws]]).

[F2] Topology toolkit: a map into a product is continuous exactly when its
coordinates are; real addition and multiplication are jointly continuous
(by specializing vector operations to the real normed space $\mathbb R$),
and restrictions and composites of continuous maps are continuous for the
subspace and product topologies ([[thm-product-universal-property]],
[[def-product-topology]], [[lem-vector-operations-are-continuous-in-a-normed-space]],
[[lem-continuity-is-local-and-pastes]], [[def-subspace-topology-top]],
[[def-continuous-map-top]], [[thm-continuity-characterisations-top]]). A subset
of $\mathbb R^2$ with the Euclidean metric is compact exactly when it is closed
and bounded, with no choice principle ([[thm-heine-borel-rn]],
[[def-metric-topology]], [[def-standard-topologies]]), and metric spaces are
Hausdorff ([[thm-metric-hausdorff-separation]], [[def-hausdorff-space]]).

[F3] Normalized Haar measure: a compact Hausdorff group has a unique left Haar
probability $\mu$, which is right invariant and inversion invariant
([[cor-normalized-haar-probability-on-a-compact-group]]), positive on every
nonempty open set and finite on compact sets
([[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]],
[[def-measure-space]]).

[F4] Averaged forms: for a continuous finite-dimensional complex representation
of a compact Hausdorff group and a Hermitian inner product $h_0$ linear in the
first variable, the averaged form is well defined, sesquilinear and Hermitian,
and its integrand is continuous and integrable
([[def-averaged-hermitian-form-for-a-compact-group]]).

[F5] Integral tools: the Lebesgue integral is linear on integrable functions
([[thm-linearity-of-the-lebesgue-integral-on-l-one]],
[[def-integrable-real-and-complex-functions-and-their-integrals]]), and a
for integrable real or complex $f$, a
measure-preserving self-map $T$ satisfies $\int f\circ T\,d\mu=\int f\,d\mu$
([[thm-integrals-are-invariant-under-measure-preserving-maps]],
[[def-measure-preserving-transformation-and-system]]).

[F6] The averaged form of [F4] is positive definite and invariant under the
representation, so in the present example $h$ is an inner product on $V$ with
$h(\rho(z)v,\rho(z)w)=h(v,w)$ for all $z\in S^1$
([[lem-averaging-makes-a-finite-dimensional-representation-unitary]],
[[def-linear-isometry-and-orthogonal-or-unitary-operator]]).

## Proof

**Proof technique:** direct.

1.1 The set $S^1$ is a compact Hausdorff topological group. It contains $1$ and is closed under multiplication and inversion because $|zw|=|z|\,|w|$ and $z^{-1}=\overline z$ with $|\overline z|=|z|$ by [F1]; associativity and the remaining group axioms are inherited from the field $\mathbb C$. In the coordinate plane, multiplication has the polynomial formula $(a,b,u,v)\mapsto(au-bv,av+bu)$ and inversion the formula $(a,b)\mapsto(a,-b)$ on $|z|=1$, so both operations are continuous on the product $S^1\times S^1$ respectively on $S^1$ by [F2]. Moreover $S^1$ is the preimage of $\{1\}$ under the continuous map $(a,b)\mapsto a^2+b^2$, hence closed in $\mathbb R^2$, and it is bounded because $a^2+b^2=1$; by Heine–Borel [F2] it is compact, and it is Hausdorff as a subspace of a metric space. [F1, F2]

2.1 The map $\rho$ is a continuous finite-dimensional complex representation of $S^1$ on $V=\mathbb C^2$, and $h_0$ is a Hermitian inner product on $V$. Indeed $\rho(z)\rho(w)=\operatorname{diag}(1,zw)=\rho(zw)$ and $\rho(1)=I$, each $\rho(z)=\operatorname{diag}(1,z)$ is invertible because $z\ne0$, and $z\mapsto\rho(z)$ is continuous as a map into the finite-dimensional space $\operatorname{End}(V)$ because its matrix entries are continuous and all norms on that space are equivalent ([[thm-all-norms-on-a-finite-dimensional-complex-space-are-equivalent]]). The form $h_0$ has the real symmetric matrix $\begin{pmatrix}2&1\\1&3\end{pmatrix}$, hence is conjugate-symmetric, and $h_0(v,v)=2|v_1|^2+2\operatorname{Re}(v_1\overline{v_2})+3|v_2|^2\ge|v_1|^2+2|v_2|^2>0$ whenever $v\ne0$, because $2\operatorname{Re}(v_1\overline{v_2})\ge-(|v_1|^2+|v_2|^2)$; in particular $h_0(e_1,e_2)=1$. [F1, step 1.1]

2.2 The integrals of the characters vanish: $\int_{S^1}z\,d\mu(z)=0$ and $\int_{S^1}\overline z\,d\mu(z)=0$. Both characters are continuous and have modulus one, hence are integrable against the probability $\mu$. The map $j(z):=-z=(-1)\cdot z$ is a continuous self-map of $S^1$ with $j^{-1}(E)=(-1)E$, so $\mu(j^{-1}E)=\mu(E)$ by left invariance of [F3]: it is measure preserving, and [F5] gives $\int z\,d\mu=\int(-z)\,d\mu=-\int z\,d\mu$, hence $\int z\,d\mu=0$; replacing $z$ by $\overline z$, whose composite with $j$ is $-\overline z$, gives $\int\overline z\,d\mu=-\int\overline z\,d\mu=0$ in the same way. [F3, F5, step 1.1]

3.1 For $z\in S^1$ one has $\rho(z)v=(v_1,zv_2)$ and $|z|^2=1$, so expanding $h_0$ in [F4] gives $h_0(\rho(z)v,\rho(z)w)=2v_1\overline{w_1}+\overline z\,v_1\overline{w_2}+z\,v_2\overline{w_1}+3|z|^2v_2\overline{w_2}=2v_1\overline{w_1}+3v_2\overline{w_2}+\overline z\,(v_1\overline{w_2})+z\,(v_2\overline{w_1})$ for all $v,w\in V$. [F1, F4, step 2.1]

4.1 Integrating the expansion of step 3.1 and pulling out the constants $v_i\overline{w_j}$ by linearity of the integral [F5] yields $h(v,w)=\int_{S^1}\bigl(2v_1\overline{w_1}+3v_2\overline{w_2}+\overline z\,v_1\overline{w_2}+z\,v_2\overline{w_1}\bigr)d\mu(z)=2v_1\overline{w_1}+3v_2\overline{w_2}+\bigl(\int\overline z\,d\mu\bigr)v_1\overline{w_2}+\bigl(\int z\,d\mu\bigr)v_2\overline{w_1}=2v_1\overline{w_1}+3v_2\overline{w_2}$ by step 2.2. [F4, F5, step 3.1, step 2.2]

5.1 Consequences. By step 4.1, $h(e_1,e_2)=0$, while $h_0(e_1,e_2)=1$ by step 2.1: the two weight lines are orthogonal for $h$ but not for $h_0$. Since $\rho(z)e_1=e_1$ and $\rho(z)e_2=ze_2$, the invariance failure is visible at $z=-1$: $h_0(\rho(-1)e_1,\rho(-1)e_2)=h_0(e_1,-e_2)=-h_0(e_1,e_2)=-1\ne1=h_0(e_1,e_2)$, conjugate-linearity in the second variable producing the sign. The averaged form $h$ is positive definite and $S^1$-invariant by [F6], in agreement with the explicit formula of step 4.1. [F6, step 2.1, step 4.1] ∎
