---
id: lem-nrqmx-continuous-simplex-integrals
kind: lemma
title: Continuous finite-dimensional ordered-simplex integrals
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
physical_scope: null
dependency_level: 0
deps:
  - def-darboux-integral
  - def-oriented-integral
  - thm-continuous-implies-integrable
  - thm-linearity-of-the-integral
  - thm-monotonicity-of-the-integral
  - thm-darboux-equals-riemann
  - thm-substitution
  - thm-heine-borel-rn
  - thm-heine-cantor-metric
  - thm-newton-leibniz-with-interior-derivative
  - lem-derivative-of-a-power
dependency_roles:
  def-darboux-integral: mathematical-premise
  def-oriented-integral: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  thm-darboux-equals-riemann: mathematical-premise
  thm-substitution: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Riemann integration and affine substitution
      url: https://en.wikipedia.org/wiki/Riemann_integral
      locator: The existing pinned scalar integration suppliers are used below; the parameter-continuity and ordered-simplex argument is proved locally, without new external full-text reading.
---

## Statement

Let $T\geq0$, let $n\geq0$ be an integer, and let $V$ be a finite-dimensional real or complex vector space with a specified finite ordered basis and its coordinate topology. Put $D_n(T)=\{0\leq s_1\leq\cdots\leq s_n\leq T\}$, with $D_0(T)=\{()\}$. Let $F:D_n(T)\to V$ have continuous coordinates. Set $G_0=F$. For $1\leq k\leq n$, write $y=(s_{k+1},\ldots,s_n)\in D_{n-k}(T)$ and put $b_k(y)=s_{k+1}$ if $k<n$, and $b_n(())=T$. Define recursively
$$
G_k(y)=\int_0^{b_k(y)}G_{k-1}(s_k,y)\,ds_k,
$$
integrating real coordinates, and real and imaginary parts of complex coordinates. Every integral exists and every $G_k$ is continuous on its remaining parameter domain. Write $I_n(F)=G_n(())$; equivalently this is the iterated integral with limits $0\leq s_1\leq\cdots\leq s_n\leq T$. Degenerate one-variable integrals are zero. For $n=0$, set $I_0(F)=F(())$; for $n\geq1$ and $T=0$, $I_n(F)=0$.

These integrals are linear, independent of the chosen finite basis, and commute with finite-dimensional linear maps. For any norm $\|\cdot\|$ on $V$, the corresponding one-variable integral satisfies $\|\int_a^b g(s)\,ds\|\leq\int_a^b\|g(s)\|\,ds$ for continuous $g$ and $a\leq b$. If $\|F(s)\|\leq C$ on $D_n(T)$, where $C\geq0$, then
$$
\|I_n(F)\|\leq C\frac{T^n}{n!}.
$$
Here the factor for $n=0$ is $1$, including $T=0$. For scalar $F=1$, $I_n(1)=T^n/n!$ with this convention. For real scalar $F\geq0$, every partial integral $G_k$ is nonnegative. No differentiability of $F$ or choice principle is assumed.

## Statement references

[[def-darboux-integral]]

[[def-oriented-integral]]

## Facts & Assumptions

**Given:** $T,n,V,F$ and the ordered-coordinate domains in the Statement. A norm on $V$ is needed only for its norm estimates.

[F1] Continuous real functions on nondegenerate closed intervals are Darboux integrable; the equal-endpoint oriented integral is zero ([[def-darboux-integral]], [[def-oriented-integral]], [[thm-continuous-implies-integrable]]).

[F2] The scalar integral is linear and monotone ([[thm-linearity-of-the-integral]], [[thm-monotonicity-of-the-integral]]). For an integrable function its tagged Riemann sums converge to its Darboux integral as mesh tends to zero, uniformly over the tags ([[thm-darboux-equals-riemann]]).

[F3] If $f$ is continuous on a nondegenerate interval containing the image of a differentiable map $\phi$ with integrable derivative, affine substitution gives $\int f(\phi(u))\phi'(u)\,du=\int_{\phi(0)}^{\phi(1)}f(v)\,dv$ ([[thm-substitution]]).

[F4] Closed bounded subsets of finite-dimensional Euclidean space are compact, and continuous maps from compact metric spaces to metric spaces are uniformly continuous ([[thm-heine-borel-rn]], [[thm-heine-cantor-metric]]).

[F5] Newton–Leibniz applies to a continuous primitive with an integrable extension of its interior derivative, and $(s^{j+1})'=(j+1)s^j$ for every integer $j\geq0$ ([[thm-newton-leibniz-with-interior-derivative]], [[lem-derivative-of-a-power]]).

## Proof

1.1 First consider a continuous curve $g:[a,b]\to V$. In a real basis $e_1,\ldots,e_q$, its coordinate functions are integrable by [F1], and define its integral by their integrals. For a complex basis use the underlying real basis $e_1,ie_1,\ldots,e_q,ie_q$; this is exactly the real-and-imaginary convention. The zero-dimensional space is immediate. In either case the triangle inequality gives $\|\sum_j c_je_j\|\leq\sum_j|c_j|\|e_j\|$. Thus coordinate convergence implies convergence in any chosen norm, without assuming norm equivalence. By [F2], tagged sums of $g$ converge in that norm to its coordinate integral. The reverse triangle inequality and the same finite-coordinate bound show that $s\mapsto\|g(s)\|$ is continuous, so it too is integrable. For each tagged partition, the norm of the vector sum is at most the corresponding sum of the scalar norms. Taking limits by [F2] proves $\|\int_a^b g\|\leq\int_a^b\|g\|$ when $a<b$; for $a=b$ both integrals are zero. A coordinate change or a linear map has entries given by a finite matrix, so scalar linearity [F2] proves that integration commutes with it, and hence proves basis independence. This also proves linearity, and [F2] proves that a nonnegative real curve has nonnegative integral. All statements concern finite lists of coordinates, and require only finitely many simultaneous estimates. [given, F1, F2, algebra]

2.1 Suppose $G_{k-1}$ is continuous on $D_{n-k+1}(T)$, as is true initially for $G_0=F$. For each $y\in D_{n-k}(T)$, the curve $v\mapsto G_{k-1}(v,y)$ is continuous for $0\leq v\leq b_k(y)$ and is integrable by step 1.1. Set $b=b_k$ and
$$
H(u,y)=G_{k-1}(u b(y),y),\qquad 0\leq u\leq1.
$$
The evaluation map $(u,y)\mapsto(ub(y),y)$ is continuous and lands in $D_{n-k+1}(T)$, because $0\leq ub(y)\leq b(y)$ and the coordinates of $y$ are ordered. Thus $H$ is coordinate-continuous. The parameter domain $[0,1]\times D_{n-k}(T)$ is closed and bounded in a finite-dimensional Euclidean space, hence compact by [F4]; when there are no remaining coordinates it is just $[0,1]$. The finite-coordinate inequality of step 1.1 shows that $H$ is also continuous into any chosen norm on $V$. Apply [F4] with the Euclidean metric on the parameter domain and that norm metric on $V$. Uniform continuity gives, as $y\to y_0$ within its parameter domain,
$$
\sup_{0\leq u\leq1}\|H(u,y)-H(u,y_0)\|\longrightarrow0.
$$
Indeed the Euclidean distance from $(u,y)$ to $(u,y_0)$ is $|y-y_0|$, independently of $u$. This conclusion also holds coordinate by coordinate if no norm was initially specified, by using the explicitly defined coordinate norm $\sum_j|c_j|$. [given, F1, F4, step 1.1, construct]

3.1 If $b(y)>0$, apply [F3] in each real coordinate with $\phi(u)=ub(y)$ and $f(v)=G_{k-1}(v,y)$ on $[0,b(y)]$. All its scalar continuity and differentiability hypotheses hold, and $\phi'$ is constant and integrable. This gives
$$
G_k(y)=b(y)\int_0^1H(u,y)\,du.
$$
If $b(y)=0$, both sides are zero by [F1], so the same identity holds. By linearity and step 1.1, for any fixed $y_0$ its difference at $y$ satisfies
$$
\|G_k(y)-G_k(y_0)\|\leq T\sup_{0\leq u\leq1}\|H(u,y)-H(u,y_0)\|+|b(y)-b(y_0)|\left\|\int_0^1H(u,y_0)\,du\right\|.
$$
The first term tends to zero by step 2.1 and the second by continuity of $b$. Thus $G_k$ is continuous, including at parameters with $b=0$. If there are no remaining coordinates this is continuity on a singleton. Induction proves existence and continuity at every recursive stage. When $T=0$ and $n\geq1$, already the first integration has equal endpoints, so all later integrals are zero; the specified $n=0$ value needs no integration. [given, F1, F2, F3, step 1.1, step 2.1, algebra]

4.1 Apply the linearity, linear-map commutation and basis independence of step 1.1 successively at each stage. Every resulting coordinate curve is continuous by step 3.1, so these operations are legitimate at every stage and prove the corresponding claims for $I_n$. Likewise a nonnegative real $F$ has nonnegative $G_1$, then nonnegative $G_2$, and so on by scalar monotonicity. No exchange of integration order or assertion of differentiability is involved. [F1, F2, step 1.1, step 3.1, algebra]

5.1 Suppose $\|F\|\leq C$. At the first stage step 1.1 and scalar monotonicity give $\|G_1(y)\|\leq C b_1(y)$. If $k\geq2$ and the previous bound is $\|G_{k-1}(s_k,y)\|\leq C s_k^{k-1}/(k-1)!$, the same integral inequality bounds $\|G_k(y)\|$ by $\int_0^{b_k(y)} C v^{k-1}/(k-1)!\,dv=C b_k(y)^k/k!$. The monomial primitive and integral evaluation follow from [F1] and [F5] when the endpoint is positive; equal endpoints give the same value zero. Induction gives the stated final bound. For scalar $F=1$ the same recursion is an equality at every stage, yielding $I_n(1)=T^n/n!$. For $n=0$ both assertions follow directly from $I_0(F)=F(())$ and the factor convention. [given, F1, F2, F5, step 1.1, step 3.1, algebra] ∎
