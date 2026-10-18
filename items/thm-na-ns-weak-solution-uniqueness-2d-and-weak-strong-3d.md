---
id: thm-na-ns-weak-solution-uniqueness-2d-and-weak-strong-3d
kind: theorem
title: "Two-dimensional uniqueness and conditional three-dimensional
  weak–strong uniqueness"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  [
    def-na-evolutionary-incompressible-ns-weak-solution,
    def-na-stokes-zero-mean-pressure-and-velocity-spaces,
    def-na-solenoidal-energy-weak-ns-velocity,
    lem-na-two-dimensional-solenoidal-energy-velocity-uniqueness,
    lem-na-evolutionary-skew-convective-form-bound,
    lem-na-homogeneous-dirichlet-korn-identity,
    thm-derivative-of-exponential,
    thm-chain-rule,
    thm-algebra-of-derivatives,
    cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives,
    cor-exponential-reciprocal-and-positivity,
    thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions,
    lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous,
    thm-na-bounded-lipschitz-domain-divergence-right-inverse,
    thm-locally-integrable-functions-embed-in-distributions,
    thm-countable-union-of-null-is-null,
    thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn,
    def-axiom-of-choice
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Endre Süli and Tabea Tscherpel, Fully discrete finite element
        approximation of unsteady flows of implicitly constituted incompressible
        fluids, arXiv:1804.02264v1"
      url: https://arxiv.org/pdf/1804.02264
      locator: "§2.1, energy weak-solution class and dimension-dependent uniqueness
        context"
    - title: "Xiaoming He, Introduction and Basic Implementation for Finite Element
        Methods, Chapter 9: Finite elements for 2D unsteady Navier–Stokes
        equations"
      url: https://bpb-us-e2.wpmucdn.com/sites.mst.edu/dist/a/189/files/2023/09/Finite_Elements_Chapter_9.pdf
      locator: "§1, pp. 3–13, two-dimensional weak velocity formulation and energy
        testing"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $D\subset\mathbb R^d$ be bounded, connected and Lipschitz, with $d\in\{2,3\}$, let $\nu>0$, and use the energy weak-solution definition in [[def-na-evolutionary-incompressible-ns-weak-solution]]. For fixed data $(u_0,f)$, if $d=2$, energy weak solutions are unique. If $d=3$ and one velocity $v$ additionally belongs to $C^1([0,T];V_\sigma)$, has $\nabla v\in L^1(0,T;L^\infty(D))$, and its solenoidal equation holds as an identity in $V_\sigma^*$ almost everywhere in time, then every other energy weak-solution velocity with the same data equals $v$. This three-dimensional conclusion is conditional and asserts no uniqueness between arbitrary energy weak-solution velocities. In both cases the associated zero-mean pressures also agree almost everywhere.

## Facts & Assumptions

**Given:** The Axiom of Choice, a common bounded connected Lipschitz domain, $\nu>0$, forcing $f\in L^2(0,T;L^2)$, initial datum $u_0\in H_\sigma$, and one or two energy weak solutions with these data.

[F1] The velocity component of every pressure-bearing energy weak solution is a solenoidal energy weak velocity: testing with $\eta(t)v$ for fixed $v\in V_\sigma$ removes the pressure term because $\operatorname{div}v=0$. ([[def-na-evolutionary-incompressible-ns-weak-solution]], [[def-na-solenoidal-energy-weak-ns-velocity]], [[def-na-stokes-zero-mean-pressure-and-velocity-spaces]])

[F2] On a bounded connected Lipschitz domain in two dimensions, solenoidal energy weak velocities with the same data are unique under the Axiom of Choice. ([[lem-na-two-dimensional-solenoidal-energy-velocity-uniqueness]])

[F3] The skew form satisfies $c(a;b,b)=0$ and, for exactly divergence-free $a$, $c(a;b,w)=\int_D(a\cdot\nabla)b\cdot w$. Its continuous trilinear bound makes the time pairings integrable for the energy-class velocity and the stated strong branch. ([[lem-na-evolutionary-skew-convective-form-bound]])

[F4] For $w\in V_\sigma$, the homogeneous Korn identity gives $a_\nu(w,w)\ge\nu\|\nabla w\|_2^2$. ([[def-na-stokes-zero-mean-pressure-and-velocity-spaces]], [[lem-na-homogeneous-dirichlet-korn-identity]])

[F5] Absolutely continuous scalar functions satisfy the fundamental theorem of calculus and are closed under products. If $B$ is absolutely continuous, then $e^{-B}$ is also absolutely continuous because the exponential is Lipschitz on the compact range of $-B$; its almost-everywhere derivative follows from the scalar chain rule. ([[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]], [[lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous]], [[thm-derivative-of-exponential]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]])

[F6] The real exponential is strictly positive. ([[cor-exponential-reciprocal-and-positivity]])

[F7] A scalar $W^{1,1}(0,T)$ class has an absolutely continuous representative; continuous representatives equal almost everywhere agree everywhere. ([[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]])

[A1] The Axiom of Choice is assumed by the two-dimensional solenoidal uniqueness input and the scalar integration facts. ([[def-axiom-of-choice]])


[F8] There is a bounded divergence right inverse $B_D:Q\to V$. Scalar locally integrable functions are determined by their distributions, and a countable union of null sets is null. $L^2(D)$ is separable, by restriction of the dense rational-box step functions on $\mathbb R^d$. ([[thm-na-bounded-lipschitz-domain-divergence-right-inverse]], [[thm-locally-integrable-functions-embed-in-distributions]], [[thm-countable-union-of-null-is-null]], [[thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn]])

## Proof

1.1 For $d=2$, [F1] identifies each velocity component with a solenoidal energy weak velocity, and [F2] gives equality of those velocities for the common data. [A1, F1, F2, given]

1.2 Now let $d=3$, let $u$ be any energy weak-solution velocity, and assume $v$ satisfies the additional hypotheses in the Statement. Testing the weak equation for $u$ by time cutoffs of $v$ is allowed because $v\in C^1([0,T];V_\sigma)$; the pressure term vanishes. The scalar pairing $(u,v)_2$ has an integrable distributional derivative by [F3], so [F7] makes it absolutely continuous; its derivative is $(u,v_t)_2+(f,v)_2-a_\nu(u,v)-c(u;u,v)$. Both weak solutions have initial trace $u_0$. Testing the strong equation for $v$ by $v$ gives its energy equality since $c(v;v,v)=0$. Combining that equality, the cross-pairing identity, and the weak energy inequality for $u$ yields, for almost every $t$, $\frac12\|u(t)-v(t)\|_2^2+\nu\int_0^t\|\nabla(u-v)\|_2^2\,ds\le\int_0^t|c(u-v;v,u-v)|\,ds$. Here $a_\nu(u,u)+a_\nu(v,v)-2a_\nu(u,v)=a_\nu(u-v,u-v)$, which is bounded below by the viscous term using [F4]. The convection terms reduce as $c(v;v,u)+c(u;u,v)=c(w;u,v)=c(w;v+w,v)=-c(w;v,w)$ for $w=u-v$, by skewness and [F3]; the strong equation for $v$ may be paired with $w\in L^2(0,T;V_\sigma)$ and integrated. [F1, F3, F4, F7, given, algebra]

2.1 By [F3], $|c(w;v,w)|=|\int_D(w\cdot\nabla)v\cdot w|\le\|\nabla v\|_{L^\infty}\|w\|_2^2$. Dropping the nonnegative viscous term in step 1.2 gives $y(t)\le2\int_0^t b(s)y(s)\,ds$ for almost every $t$, where $y(t)=\|w(t)\|_2^2$ and $b(t)=\|\nabla v(t)\|_{L^\infty}\in L^1(0,T)$. [F3, step 1.2, algebra]

3.1 Since $u,v\in L^\infty(0,T;H_\sigma)$, $y\in L^\infty(0,T)$; thus $Y(t)=\int_0^t b(s)y(s)\,ds$ and $B(t)=2\int_0^t b(s)\,ds$ are absolutely continuous, with $Y(0)=0$. Step 2.1 gives $Y'(t)=b(t)y(t)\le2b(t)Y(t)=B'(t)Y(t)$ almost everywhere. By [F5], $e^{-B}Y$ is absolutely continuous and has derivative $e^{-B}(Y'-B'Y)\le0$ almost everywhere. It starts at zero and is nonnegative by [F6], so it is identically zero; hence $Y=0$ and step 2.1 implies $y=0$ almost everywhere. The difference $w=u-v$ is weakly continuous into $H_\sigma$; for any $t$, choose $t_n\to t$ from the full-measure set where $w(t_n)=0$. Weak continuity gives $(w(t),h)_2=0$ for every $h\in H_\sigma$, so $w(t)=0$. [F5, F6, step 2.1, given, algebra]



4.1 In either case let $p_1,p_2$ be the associated pressures. Subtracting the full weak equations after velocity equality gives $\int_0^T b(v,p_1-p_2)\eta\,dt=0$ for every $v\in V$ and $\eta\in C_c^\infty(0,T)$. For any $q\in Q$, choose $v=B_Dq$ using [F8]. Then $(p_1-p_2,q)_2$ is zero as a time distribution and hence almost everywhere. The space $Q$ is separable: take a countable dense family in $L^2(D)$ from [F8] and subtract each mean. Outside the union of the null sets for that family all these pairings vanish; density implies $p_1(t)=p_2(t)$ in $Q$. Thus the zero-mean pressures agree almost everywhere, completing both uniqueness claims. [A1, F8, step 1.1, step 3.1, algebra] ∎
