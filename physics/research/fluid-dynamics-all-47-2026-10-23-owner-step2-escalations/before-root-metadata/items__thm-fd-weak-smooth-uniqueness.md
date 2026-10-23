---
id: thm-fd-weak-smooth-uniqueness
kind: theorem
title: Weak–smooth uniqueness on a smooth interval
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps: [thm-fd-periodic-global-weak-existence, def-fd-periodic-leray-hopf, cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous, thm-first-fundamental-theorem-of-calculus-for-l-one, lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, def-countable-choice, def-dependent-choice]
dependency_roles:
  thm-fd-periodic-global-weak-existence: mathematical-premise
  def-fd-periodic-leray-hopf: mathematical-premise
  cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous: mathematical-premise
  thm-first-fundamental-theorem-of-calculus-for-l-one: mathematical-premise
  lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous: mathematical-premise
  thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Leonid Ryzhik, Math 256B Lecture Notes, version 2024"
      url: "https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf"
      locator: "§6.1, printed pp. 53–54; its theorem compares strong solutions, while the local proof treats a weak solution against a smooth one."
    - title: "L. C. Berselli and S. Spirito, On the Existence of Leray–Hopf Weak Solutions to the Navier–Stokes Equations, Fluids 6(1), 42 (2021)"
      url: "https://www.mdpi.com/2311-5521/6/1/42/pdf"
      locator: "Definition 1 in §3, printed p. 6, and §4, printed pp. 8–12, for the weak formulation and energy inequality."
---

## Statement

Assume Countable Choice and Dependent Choice. Let $d\ge2$, $L>0$, $\nu>0$,
and $u_0\in H$. Let $u:[0,\infty)\to H$ be the map in the Unforced periodic
Leray–Hopf solution definition with data $(\nu,u_0)$, using its unique weakly
continuous representative, Bochner equivalence classes, weak identity, and
initial and restart energy inequalities. Suppose
$v\in C^\infty([0,T]\times\mathbb T_L^d;\mathbb R^d)$ and
$q\in C^\infty([0,T]\times\mathbb T_L^d)$ satisfy $\operatorname{div}v=0$ and
$\partial_tv+\operatorname{div}(v\otimes v)+\nabla q=\nu\Delta v$, with
$v(0)=u_0$. Then $u(t)=v(t)$ in $H$ for every $t\in[0,T]$. More generally,
for $D(t)=\|u(t)-v(t)\|_2^2$,
$$D(t)\le D(0)+2\int_0^t\|\nabla v(s)\|_\infty D(s)\,ds.$$
This conditional result does not assert existence of such a smooth pair.

## Statement references

[Leonid Ryzhik, *Math 256B Lecture Notes*, §6.1, pp. 53–54](https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf).

[Berselli and Spirito, *On the Existence of Leray–Hopf Weak Solutions*, Definition 1 in §3, p. 6, and §4, pp. 8–12](https://www.mdpi.com/2311-5521/6/1/42/pdf).

## Facts & Assumptions

**Given:** $u$ is a Leray–Hopf solution, $v$ has the regularity and equation in the Statement, both have the same $u_0$ and $\nu$, and Countable Choice and Dependent Choice are adopted for the cited absolute-continuity chain.

[F1] [[thm-fd-periodic-global-weak-existence]]: $u\in C_wH\cap L^\infty H\cap L^2_{\rm loc}V$, satisfies the solenoidal weak identity and the initial energy inequality at every time.

[F2] [[cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous]] and [[thm-first-fundamental-theorem-of-calculus-for-l-one]]: the indefinite integral of an $L^1$ function is absolutely continuous, and under Countable Choice its derivative equals the integrand almost everywhere.

[F3] [[lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous]] and [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]: absolutely continuous products obey the a.e. product rule and are recovered by integrating their a.e. derivative; the latter theorem's proof uses Countable and Dependent Choice.

[F4] [[def-countable-choice]] and [[def-dependent-choice]]: the choice assumptions required by the cited differentiation/integration theorem are included in this proof's hypotheses.

[F5] [[def-fd-periodic-leray-hopf]]: the weak solution has the divergence-free weak identity, weak time continuity, and the initial energy inequality used in the cross identity and energy comparison.

## Proof

1.1 Fix $t\in[0,T]$ and choose smooth time cutoffs converging to the indicator of $[0,t]$ in the weak identity for $u$, with test field equal to the cutoff times $v$. The terms are integrable because $u\in L^\infty H\cap L^2V$ and $v,v_t,\nabla v,q$ are bounded; $t\mapsto(u(t),v(t))$ is continuous because $u\in C_wH$ and $v$ is norm-continuous. Passing the cutoff limit gives
$$ (u(t),v(t))-(u_0,v(0))=\int_0^t\big[(u,v_t)+(u\otimes u,\nabla v)-\nu(\nabla u,\nabla v)\big]ds.$$
Using $v_t=-\operatorname{div}(v\otimes v)-\nabla q+\nu\Delta v$, the pressure pairing vanishes because $u$ is distributionally divergence free. Periodic integration by parts then rewrites the integrand as $(v\otimes v,\nabla u)+(u\otimes u,\nabla v)-2\nu(\nabla u,\nabla v)$. [given, F1, F5, algebra]

2.1 Testing the smooth equation by $v$, periodic integration by parts gives $\frac12\frac d{dt}\|v\|_2^2+\nu\|\nabla v\|_2^2=0$: the transport integral is $\int\operatorname{div}(v|v|^2/2)=0$, the pressure term is $-\int q\operatorname{div}v=0$, and the Laplacian term is $-\|\nabla v\|_2^2$. Integrating gives the energy equality for $v$. Add it to the weak energy inequality for $u$ and subtract twice the cross identity of step 1.1. The viscous terms combine to $2\nu\int_0^t\|\nabla(u-v)\|_2^2ds$. With $w=u-v$, incompressibility and periodic integration by parts give
$(v\otimes v,\nabla u)+(u\otimes u,\nabla v)= (w\otimes w,\nabla v)$: expand $u=v+w$; the $v\otimes v$ term has zero integral, the $v_iw_j\partial_jv_i$ term is a divergence, and $(v\otimes v,\nabla w)=-(w_i v_j,\partial_jv_i)$ cancels the remaining mixed term. Hence
$$D(t)+2\nu\int_0^t\|\nabla w\|_2^2ds\le D(0)-2\int_0^t(w\otimes w,\nabla v)ds.$$
Since $|(w\otimes w,\nabla v)|\le\|\nabla v\|_\infty D(s)$, dropping the nonnegative gradient integral proves the stated integral inequality. [given, F1, F5, step 1.1, algebra]

3.1 Set $a(t)=2\|\nabla v(t)\|_\infty\in L^1(0,T)$ and $G(t)=D(0)+\int_0^t a(s)D(s)ds$. Step 2.1 gives $0\le D\le G$. By [F2], $G$ is absolutely continuous and $G'=aD\le aG$ almost everywhere. The function $A(t)=\int_0^ta(s)ds$ is absolutely continuous; by [F3], $e^{-A}G$ is absolutely continuous with derivative $e^{-A}(G'-aG)\le0$ almost everywhere. The absolutely-continuous fundamental theorem in [F3] then implies $e^{-A(t)}G(t)\le G(0)=D(0)$, and therefore $D(t)\le D(0)e^{A(t)}$. When $D(0)=0$, this forces $D(t)=0$ for every $t\in[0,T]$, proving uniqueness against the smooth solution. [given, F2, F3, F4, step 2.1] ∎

