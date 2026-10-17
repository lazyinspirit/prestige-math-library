---
id: alg-xd-budgeted-uniformization-accumulation
kind: algorithm
title: "Budgeted uniformization accumulation with time splitting"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-xd-finite-column-generator
  - lem-xd-uniformized-matrix-is-stochastic
  - def-matrix-free-access-model-for-krylov-methods
  - def-p-norms-on-rn
  - def-induced-matrix-p-norm
  - def-scalar-poisson-count-law
  - lem-xd-geometric-poisson-tail-bound
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Bennett L. Fox and Peter W. Glynn, Computing Poisson Probabilities"
      url: "https://web.stanford.edu/~glynn/papers/1988/FG88.pdf"
      locator: "§§1–3, printed pp. 440–443; recursive Poisson weights, finite truncation, and warnings about underflow and rounded complementary-mass subtraction."
    - title: "Ward Whitt, Continuous-Time Markov Chains, full lecture notes (2006)"
      url: "https://www.columbia.edu/~ww2040/4106S11/CTMCchapter121906.pdf"
      locator: "§3.4, equations (3.27)–(3.28), PDF pp. 14–15; finite-state uniformization representation."
verification:
  precheck: n/a
---

## Definition

**Inputs.** A finite column generator $Q$, a column probability vector $p_0$, $t\ge0$, an admissible rate $\nu\ge\max_jr_j$, a positive tail budget $\varepsilon$, a positive integer total-term cap $B$, and either exact real arithmetic or a validated arithmetic backend. In a rounded execution, the backend must certify the scalar control decisions defining $m$ and $\mu$, each finite tail-budget comparison, and an outward upper bound $T\ge mG_K(\mu)$; it must also return a certified $\ell^1$ error bound $E_{\rm alg}:=\|\widehat p-R_{\mu,K}^mp_0\|_1$ for its computed vector. The vector bound includes any arithmetic error from the weights, time split, and matrix-free $P$ actions. If any scalar or vector certificate is unavailable, return `certificate-unavailable`.

**Outputs.** Return $(p_0,0,0)$ when $\nu=0$ or $t=0$. Otherwise return `budget-exhausted` or `certificate-unavailable`, or an approximate vector $\widehat p$ and certified bounds $(T,E_{\rm alg})$ for which $\|p(t)-\widehat p\|_1\le T+E_{\rm alg}$. Here $T\ge mG_K(\mu)$ is an outward-certified Poisson-tail upper bound and $E_{\rm alg}$ bounds the arithmetic/algebraic error relative to the exact truncated accumulation. In exact real arithmetic, $T=mG_K(\mu)$ and $E_{\rm alg}=0$.

**Procedure.** For $\nu t>0$, set $m=\lceil\nu t\rceil$ and $\mu=\nu t/m$, so $0<\mu\le1$. A rounded backend must certify these values and inequalities; if it cannot, return `certificate-unavailable`. If $m>B$, return `budget-exhausted`. Set $K_{\max}=\lfloor B/m\rfloor-1$. Search the finite list $K=0,1,\ldots,K_{\max}$ for a member satisfying

$$G_K(\mu):=\frac{e^{-\mu}\mu^{K+1}}{(K+1)!\left(1-\mu/(K+2)\right)}\le\varepsilon/m.$$

In rounded arithmetic, accept a candidate only when a validated upper enclosure proves the displayed inequality, and set $T=\varepsilon$, copying the already certified accepted tail budget. This is an exact bound because the accepted comparison certifies $mG_K(\mu)\le\varepsilon$. If no candidate works, return `budget-exhausted` when the comparisons certify that every candidate fails, and `certificate-unavailable` when they do not decide the search. In exact arithmetic set $T=mG_K(\mu)$. Set $P=I+Q/\nu$ and $x_0=p_0$. For each substep $j=1,\ldots,m$, initialize $v_0=x_{j-1}$, $w_0=e^{-\mu}$, and $x_j=w_0v_0$. For $k=0,\ldots,K-1$, update

$$v_{k+1}=Pv_k,\qquad w_{k+1}=w_k\frac{\mu}{k+1},\qquad x_j\leftarrow x_j+w_{k+1}v_{k+1}.$$

These $P$ actions use the exact operator-application interface of [[def-matrix-free-access-model-for-krylov-methods]]: the routine supplies $v\mapsto Pv$ and vector additions and scalar multiples, without requiring stored matrix entries. No CSR representation, operation-count estimate, or convergence claim is part of this procedure. The exact term count is $m(K+1)\le B$ and the certified tail bound satisfies $T\le\varepsilon$. Never replace a tail certificate by floating-point $1-\sum_{k\le K}w_k$.
