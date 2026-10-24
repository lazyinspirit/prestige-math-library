---
id: ex-stable-explicit-grid-heat-step
kind: example
title: "A stable consistent explicit spectral-grid heat step"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-common-space-linear-scheme-interface, def-finite-grid-common-space-lift, thm-diagonal-heat-semigroup-on-c-zero, def-c-zero-and-ell-infinity, lem-finite-truncations-are-dense-in-c0-and-ell-one, def-real-exponential-function-and-e, thm-derivative-of-exponential, thm-lax-equivalence-for-common-banach-space-schemes, def-dependent-choice, def-operator-norm, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
generation:
  role: example
sources:
  references:
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods, Chapter 4, §4.2"
      url: "https://people.maths.ox.ac.uk/trefethen/4all.pdf"
    - title: "R. J. LeVeque, AMath 585–6 Notes, Chapter 12, §§12.1–12.5.1"
      url: "https://usermanual.wiki/Document/LeVequeFiniteDiff.545303893.pdf"
---

## Example

Let $X=c_0(\mathbb R)$ and let $U(t)$ be the diagonal heat semigroup
$U(t)x=(\exp(-j^2t)x_j)_{j\in\mathbb N}$ from
[[thm-diagonal-heat-semigroup-on-c-zero]]. For $m\ge1$, let
$G_m=\operatorname{span}\{e_0,\ldots,e_{m-1}\}$, where $e_j$ is the sequence
with value $1$ at coordinate $j$ and $0$ elsewhere. Index the scheme by
$\nu\in\mathbb N$ using $m=\nu+1$. Give $G_m$ the supremum norm, use the step
size $\tau_m=m^{-2}$, and the explicit Euler update
$$Q_m e_j=(1-\tau_mj^2)e_j\qquad(0\le j<m).$$
Reconstruct by inclusion, restrict by coordinate truncation, and extend to
the common space by the exact semigroup on the complementary coordinates,
as in [[def-finite-grid-common-space-lift]].

## Facts & Assumptions

**Given:** The common-space heat IVP, finite-grid lift, and family $Q_m$ in the example above.

[F1] A common-space scheme uses one Banach space, a strongly continuous solution semigroup with a finite-time operator bound, and defines consistency, stability, and locally uniform-in-grid-time convergence in that same norm ([[def-common-space-linear-scheme-interface]]).

[F2] Given bounded $P_m,R_m,Q_m$ with $P_mR_m=I$ and invariant $\ker P_m$, the common-space lift is $S_m=R_mQ_mP_m+U(\tau_m)(I-R_mP_m)$ ([[def-finite-grid-common-space-lift]]).

[F3] On $c_0$, the heat operators $U(t)x=(\exp(-j^2t)x_j)_j$ form a contractive strongly continuous semigroup ([[thm-diagonal-heat-semigroup-on-c-zero]]).

[F4] The finite-support sequences are dense in $c_0$ ([[def-c-zero-and-ell-infinity]], [[lem-finite-truncations-are-dense-in-c0-and-ell-one]]).

[F5] $\exp'(0)=\exp(0)=1$ ([[thm-derivative-of-exponential]], [[def-real-exponential-function-and-e]]).

[F6] Under DC and consistency on the dense invariant subspace, finite-time convergence is equivalent to finite-time stability ([[thm-lax-equivalence-for-common-banach-space-schemes]]).

[F7] The operator norm is the supremum over the unit ball, so a pointwise estimate $\|Tx\|\le\|x\|$ gives $\|T\|_{\mathrm{op}}\le1$ ([[def-operator-norm]]).

[F8] A property true at $0$ and preserved by successor holds for every $n\in\mathbb N$ ([[thm-induction-principle]]).

[A1] Assume DC as defined in [[def-dependent-choice]]; it is required only when applying [F6].

## Verification

1.1 Let $D$ be the finite-support sequences. By [F4], $D$ is dense in $X$; it is invariant under $U(t)$ because $U(t)$ multiplies coordinates and does not add support. The heat IVP and its finite-time bound are supplied by [F3]. [F3, F4, construct]

1.2 Since $m=\nu+1$, $\tau_m=m^{-2}>0$ and $\tau_m\to0$ as $\nu\to\infty$. Let $P_m$ be truncation to coordinates $0,\ldots,m-1$ and $R_m$ inclusion. Their norms are at most $1$ by the coordinate supremum estimates and at least $1$ by testing $e_0$, so both have norm $1$ by [F7]. Also $P_mR_m=I_{G_m}$ and $\ker P_m$ is invariant under $U(\tau_m)$ because $U$ is diagonal. The finite maximum $L_m:=\max_{0\le j<m}|1-\tau_mj^2|$ bounds every diagonal multiplier, so $\|Q_mg\|_\infty\le L_m\|g\|_\infty$ and $Q_m$ is bounded. Thus [F2] defines the common-space step $S_m$. [F2, F3, F7, construct]

2.1 For $j<m$, $0\le1-j^2/m^2\le1$; on coordinates $j\ge m$ the lift uses the multipliers $\exp(-j^2/m^2)\in(0,1]$ from [F3]. Hence every coordinate multiplier of $S_m$ lies in $[0,1]$. Therefore $\|S_mx\|_\infty\le \|x\|_\infty$ for every $x\in c_0$, and [F7] gives $\|S_m\|_{\mathrm{op}}\le1$. The bound $\|S_m^n x\|_\infty\le\|x\|_\infty$ holds at $n=0$; if it holds at $n$, applying the contraction estimate to $S_m^nx$ proves it at $n+1$. Induction [F8] gives it for every $n$, and then [F7] gives $\|S_m^n\|_{\mathrm{op}}\le1$. The family is stable on every finite time interval. [F2, F3, F7, F8, step 1.2, algebra]

2.2 Fix $v\in D$, supported in coordinates $0,\ldots,N$. For $m>N$, direct evaluation and $0<\exp(-r\tau_mj^2)\le1$ give $\max_{\substack{r\in\mathbb N\\r\tau_m\le T}}\frac{\|(S_m-U(\tau_m))U(r\tau_m)v\|_\infty}{\tau_m}\le\|v\|_\infty\max_{0\le j\le N}\frac{|1-\tau_mj^2-\exp(-\tau_mj^2)|}{\tau_m}.$ For $j=0$ the quotient is zero. For each fixed $1\le j\le N$, put $z=\tau_mj^2$; [F5] gives $\frac{|1-z-\exp(-z)|}{\tau_m}=j^2\left|\frac{1-\exp(-z)}{z}-1\right|\to0$, because the quotient tends to $\exp'(0)=1$ as $z\to0$. The maximum of these finitely many quotients tends to zero: for any tolerance choose a threshold for each $j$ (or use threshold $1$ if there is no positive $j$), then take the largest threshold. Multiplication by the fixed $\|v\|_\infty$ preserves this limit. The bound is independent of $r$, so the family is consistent on $D$. [F3, F5, step 1.2, algebra, choose]

3.1 By [F6] and the explicit DC assumption [A1], this consistent stable family converges to the heat semigroup in the common supremum norm, uniformly over grid times in each bounded time interval. [F1, F3, F4, F6, A1, step 2.1, step 2.2] ∎
