---
id: lem-averaging-makes-a-finite-dimensional-representation-unitary
kind: lemma
title: "Averaging a Hermitian form unitarizes a finite-dimensional compact-group representation"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-axiom-of-choice, cor-normalized-haar-probability-on-a-compact-group, lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets, def-averaged-hermitian-form-for-a-compact-group, def-finite-dimensional-representation-of-a-group-over-a-field, def-real-and-complex-inner-product-space, def-inner-product-space, def-measure-space, def-measure-preserving-transformation-and-system, thm-integrals-are-invariant-under-measure-preserving-maps, prop-order-and-scalar-rules-for-the-nonnegative-integral, prop-the-nonnegative-integral-agrees-with-the-simple-integral, def-integral-of-a-nonnegative-simple-function, def-integrable-real-and-complex-functions-and-their-integrals, def-linear-isometry-and-orthogonal-or-unitary-operator, def-continuous-map-top, thm-continuity-characterisations-top, def-topological-group, def-compact-space, def-hausdorff-space, def-standard-topologies]
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups, §§5.2–5.6"
      url: https://people.math.ethz.ch/~kowalski/representation-theory.pdf
    - title: "Vera Serganova, Representation Theory, Chapter III §§1.6–2.1"
      url: https://math.berkeley.edu/~serganov/math252/Bookrep.pdf
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a compact
Hausdorff topological group ([[def-topological-group]], [[def-compact-space]],
[[def-hausdorff-space]]) with normalized Haar probability measure $\mu$
([[cor-normalized-haar-probability-on-a-compact-group]]). Let $V$ be a
finite-dimensional complex vector space, let
$\rho:K\to\operatorname{GL}(V)$ be a continuous finite-dimensional complex
representation of $K$
([[def-finite-dimensional-representation-of-a-group-over-a-field]]), let $h_0$
be a Hermitian inner product on $V$ that is linear in the first variable and
conjugate-linear in the second ([[def-real-and-complex-inner-product-space]],
[[def-inner-product-space]]), and let
$$h(v,w):=\int_K h_0(\rho(k)v,\rho(k)w)\,d\mu(k)$$
be the averaged form of the pair $(\rho,h_0)$
([[def-averaged-hermitian-form-for-a-compact-group]]). Then

1. $h(v,v)>0$ for every $v\in V$ with $v\ne0$; that is, $h$ is positive
   definite, and
2. $h(\rho(g)v,\rho(g)w)=h(v,w)$ for every $g\in K$ and all $v,w\in V$; that is,
   $h$ is $K$-invariant.

Consequently $h$ is an inner product on $V$, and every $\rho(g)$ is a unitary
operator of the finite-dimensional inner product space $(V,h)$
([[def-linear-isometry-and-orthogonal-or-unitary-operator]]), so the
representation $\rho$ is unitary for the averaged form $h$.

## Facts & Assumptions

**Given:** AC, a compact Hausdorff group $K$ with normalized Haar probability
$\mu$, a continuous finite-dimensional complex representation
$\rho:K\to\operatorname{GL}(V)$, a Hermitian inner product $h_0$ on $V$ linear in
the first variable, and the averaged form $h$.

[F1] The averaged form is well defined: $h$ is a sesquilinear form on $V$,
linear in the first variable and conjugate-linear in the second, it is
Hermitian in the sense $h(v,w)=\overline{h(w,v)}$, the integrand
$k\mapsto h_0(\rho(k)v,\rho(k)w)$ is continuous on $K$ for all $v,w\in V$, and a
continuous complex function on the compact space $K$ is bounded and integrable
against the Borel probability measure $\mu$, so the defining integral is a
finite complex number ([[def-averaged-hermitian-form-for-a-compact-group]]).

[F2] Normalized Haar: $\mu$ is a Borel probability measure with $\mu(K)=1$ that
is left and right invariant, $\mu(aE)=\mu(E)$ and $\mu(Ea)=\mu(E)$ for every
Borel set $E\subseteq K$ and every $a\in K$, and $\mu(U)>0$ for every nonempty
open $U\subseteq K$ ([[cor-normalized-haar-probability-on-a-compact-group]],
[[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]],
[[def-measure-space]]).

[F3] The form $h_0$ is an inner product: it is linear in the first variable,
conjugate-linear in the second, Hermitian, and positive definite,
$h_0(v,v)\ge0$ with $h_0(v,v)=0$ exactly for $v=0$; its induced length is
$\|v\|_h:=\sqrt{h(v,v)}$ for any inner product $h$
([[def-real-and-complex-inner-product-space]], [[def-inner-product-space]]).

[F4] $\rho$ is a group homomorphism with $\rho(e)=I_V$ and
$\rho(kg)=\rho(k)\rho(g)$ for all $k,g\in K$, and each $\rho(g)$ is an
invertible linear map of $V$; the map $\rho:K\to\operatorname{GL}(V)$ is
continuous ([[def-finite-dimensional-representation-of-a-group-over-a-field]]).

[F5] A continuous self-map $T$ of the measure space $(K,\mathcal B(K),\mu)$ is
Borel measurable, and it is measure preserving when $\mu(T^{-1}E)=\mu(E)$ for
every Borel $E$; in that case $\int_K f\circ T\,d\mu=\int_K f\,d\mu$ for every
integrable $f$ ([[def-measure-preserving-transformation-and-system]],
[[thm-integrals-are-invariant-under-measure-preserving-maps]]). Right
translation $T_g(k):=kg$ is a homeomorphism because multiplication in a
topological group is continuous ([[def-topological-group]]), and by [F2] it is
measure preserving: $T_g^{-1}E=Eg^{-1}$ has $\mu(Eg^{-1})=\mu(E)$.

[F6] Nonnegative measurable real functions have an extended integral that is
monotone and positively homogeneous, and for nonnegative simple functions it
agrees with the simple integral $\int\sum_jc_j\chi_{E_j}\,d\mu=\sum_jc_j\mu(E_j)$;
in particular $\int c\,\mathbf 1_U\,d\mu=c\,\mu(U)$ for $c\ge0$. For a real
measurable $f\ge0$ the Lebesgue integral of $f$ equals this nonnegative
integral, since the negative part vanishes
([[prop-order-and-scalar-rules-for-the-nonnegative-integral]],
[[prop-the-nonnegative-integral-agrees-with-the-simple-integral]],
[[def-integral-of-a-nonnegative-simple-function]],
[[def-integrable-real-and-complex-functions-and-their-integrals]]).

[F7] A linear map $T:V\to W$ between inner product spaces is a linear isometry
if $\|Tv\|=\|v\|$ for every $v$, and an invertible linear isometry from a
finite-dimensional complex inner product space to itself is a unitary operator
([[def-linear-isometry-and-orthogonal-or-unitary-operator]]).

[F8] A map is continuous exactly when preimages of open sets are open, and the
interval $(\varepsilon,\infty)$ is open in $\mathbb R$ for every real
$\varepsilon$ ([[thm-continuity-characterisations-top]],
[[def-continuous-map-top]], [[def-standard-topologies]]).

## Proof

**Proof technique:** direct.

1.1 Fix $v,w\in V$ and put $f_{v,w}(k):=h_0(\rho(k)v,\rho(k)w)$ for $k\in K$. By [F1] the function $f_{v,w}$ is continuous on $K$, hence its integral against $\mu$ is a finite complex number, and by [F4] $\rho(e)=I_V$, so $f_{v,w}(e)=h_0(v,w)$. If $v\ne0$, then $f_{v,v}$ is real-valued with $f_{v,v}(e)=h_0(v,v)>0$ and $f_{v,v}\ge0$ pointwise, by [F3]. [F1, F3, F4]

2.1 Let $g\in K$ and $v,w\in V$. Substituting the pair $(\rho(g)v,\rho(g)w)$ into the defining integral of [F1], using the homomorphism property $\rho(k)\rho(g)=\rho(kg)$ of [F4] and the notation of step 1.1, gives $h(\rho(g)v,\rho(g)w)=\int_K h_0(\rho(kg)v,\rho(kg)w)\,d\mu(k)=\int_K f_{v,w}(kg)\,d\mu(k)$. The right translation $T_g(k)=kg$ is a measure-preserving homeomorphism by [F5], and $f_{v,w}$ is continuous hence integrable, so the integral invariance theorem of [F5] gives $\int_K f_{v,w}(kg)\,d\mu(k)=\int_K f_{v,w}(k)\,d\mu(k)=h(v,w)$. Hence $h(\rho(g)v,\rho(g)w)=h(v,w)$ for all $g\in K$ and $v,w\in V$. [F1, F4, F5, step 1.1]

2.2 Let $v\in V$ with $v\ne0$, put $f:=f_{v,v}$ and $\varepsilon:=h_0(v,v)/2>0$, and let $U:=f^{-1}[(\varepsilon,\infty)]$. Since $f$ is continuous by [F1] and $(\varepsilon,\infty)$ is open in $\mathbb R$, [F8] shows that $U$ is open in $K$; and $e\in U$ because $f(e)=h_0(v,v)>\varepsilon$ by step 1.1, so $U$ is nonempty. By step 1.1, $f\ge0$ everywhere and $f>\varepsilon$ on $U$, so $f\ge\varepsilon\mathbf 1_U$ pointwise. Monotonicity and the indicator computation of [F6] applied to the real nonnegative function $f$ give $h(v,v)=\int_Kf\,d\mu\ge\int_K\varepsilon\mathbf 1_U\,d\mu=\varepsilon\,\mu(U)>0$, the final inequality by positivity of $\mu$ on the nonempty open set $U$ in [F2]. Hence $h$ is positive definite. [F1, F2, F6, F8, step 1.1]

3.1 By [F1] the form $h$ is sesquilinear and Hermitian; step 2.2 makes it positive definite, so $h$ is an inner product on $V$, and step 2.1 makes $h$ invariant under every $\rho(g)$. Hence for every $g\in K$ and $v\in V$ one has $h(\rho(g)v,\rho(g)v)=h(v,v)$, so the induced lengths of [F3] satisfy $\|\rho(g)v\|_h=\|v\|_h$: each $\rho(g)$ is a linear isometry of the finite-dimensional inner product space $(V,h)$. Each $\rho(g)$ is invertible by [F4], so [F7] makes every $\rho(g)$ a unitary operator for $h$. Thus $h$ is a positive-definite $K$-invariant Hermitian form on $V$, and the representation $\rho$ is unitary for the averaged form $h$. [F1, F3, F4, F7, step 2.1, step 2.2] ∎
