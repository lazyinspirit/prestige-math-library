---
id: ex-consistent-unstable-explicit-grid-heat-step
kind: example
title: "A consistent but unstable explicit spectral-grid heat step"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-common-space-linear-scheme-interface, def-finite-grid-common-space-lift, thm-diagonal-heat-semigroup-on-c-zero, def-c-zero-and-ell-infinity, lem-finite-truncations-are-dense-in-c0-and-ell-one, thm-derivative-of-exponential, def-operator-norm]
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

Use the same $c_0$ heat IVP and finite spectral grids. For $m\ge1$, let
$G_m=\operatorname{span}\{e_0,\ldots,e_{m-1}\}$, where $e_j$ is the sequence
with value $1$ at coordinate $j$ and $0$ elsewhere. Index the scheme by
$\nu\in\mathbb N$ using $m=\nu+1$. Give $G_m$ the supremum norm, choose
$\tau_m=m^{-1}$, and use the explicit Euler grid update
$Q_me_j=(1-\tau_mj^2)e_j$ for $0\le j<m$.
Reconstruct by inclusion and use the exact heat semigroup on the complementary
coordinates, as specified in [[def-finite-grid-common-space-lift]].

## Facts & Assumptions

**Given:** The common-space heat IVP, finite-grid lift, and family $Q_m$ in the example above.

[F1] The same-norm common-space definitions of consistency and stability are those of [[def-common-space-linear-scheme-interface]].

[F2] The finite-grid lift has $S_m=R_mQ_mP_m+U(\tau_m)(I-R_mP_m)$ when $P_mR_m=I$ and $\ker P_m$ is invariant ([[def-finite-grid-common-space-lift]]).

[F3] The diagonal heat maps are a contractive strongly continuous semigroup on $c_0$ ([[thm-diagonal-heat-semigroup-on-c-zero]]).

[F4] Finite-support sequences are dense in $c_0$ ([[def-c-zero-and-ell-infinity]], [[lem-finite-truncations-are-dense-in-c0-and-ell-one]]).

[F5] $\exp'(0)=1$ ([[thm-derivative-of-exponential]]).

[F6] The operator norm is the supremum over the unit ball ([[def-operator-norm]]).

## Verification

1.1 Let $D$ be the finite-support sequences. It is dense by [F4] and invariant under the diagonal semigroup [F3]. Since $m=\nu+1$, $\tau_m=m^{-1}>0$ and $\tau_m\to0$. For each $m$, take $P_m$ to be coordinate truncation and $R_m$ inclusion. The estimate $\|P_mx\|_\infty\le\|x\|_\infty$ and identity $\|R_mg\|_\infty=\|g\|_\infty$, together with testing $e_0$ in [F6], give $\|P_m\|=\|R_m\|=1$. Then $P_mR_m=I$ and $\ker P_m$ is invariant under diagonal $U(\tau_m)$. The finite maximum $L_m:=\max_{0\le j<m}|1-\tau_mj^2|$ gives $\|Q_mg\|_\infty\le L_m\|g\|_\infty$, so $Q_m$ is bounded. Thus [F2] gives a bounded common-space step. [F2, F3, F4, F6, construct]

2.1 Fix $v\in D$ with support in coordinates $0,\ldots,N$. For $m>N$, every supported coordinate is updated by $1-\tau_mj^2$; since $0<\exp(-r\tau_mj^2)\le1$, we have $\max_{\substack{r\in\mathbb N\\r\tau_m\le T}}\frac{\|(S_m-U(\tau_m))U(r\tau_m)v\|_\infty}{\tau_m}\le\|v\|_\infty\max_{0\le j\le N}\frac{|1-\tau_mj^2-\exp(-\tau_mj^2)|}{\tau_m}.$ For $j=0$ the quotient vanishes. For each fixed $1\le j\le N$, with $z=\tau_mj^2$, the quotient equals $j^2|(1-\exp(-z))/z-1|$, which tends to zero by [F5]. The finite maximum tends to zero: for any tolerance choose a threshold for each of the finitely many $j$ (or use threshold $1$ if there is no positive $j$), then take the largest threshold. Multiplication by fixed $\|v\|_\infty$ preserves the limit, uniformly in the permitted $r$. Thus the family is consistent. [F1, F3, F5, step 1.1, algebra, choose]

3.1 On the highest grid mode $e_{m-1}$, the one-step multiplier is $1-\frac{(m-1)^2}{m}=3-m-\frac1m.$ For $m\ge4$ its magnitude is $m-3+1/m$, which tends to infinity. Given any $T>0$, all sufficiently large $m$ also satisfy $\tau_m=1/m\le T$; then the allowed power $n=1$ already has $\|S_m\|_{\mathrm{op}}\ge m-3+1/m$ by testing the unit vector $e_{m-1}$ in [F6]. No uniform finite-time power bound can hold, so the family is unstable. [F2, F6, step 1.1, algebra] ∎
