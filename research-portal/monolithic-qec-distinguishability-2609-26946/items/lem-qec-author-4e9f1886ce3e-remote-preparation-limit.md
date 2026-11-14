---
id: lem-qec-author-4e9f1886ce3e-remote-preparation-limit
kind: lemma
domain: mathematics
title: Finite-preparation residual budget and its remote-boundary limit
status: draft
origin: session
deps:
  - math:def-matrix-space
  - math:def-normed-vector-space-over-an-absolutely-valued-field
  - math:def-vector-valued-derivative-and-integral
  - math:def-divergence-to-infinity
  - math:def-real-limit
  - math:def-complete-ordered-field
  - math:def-limsup-liminf
dependency_roles:
  math:def-matrix-space: mathematical-premise
  math:def-normed-vector-space-over-an-absolutely-valued-field: mathematical-premise
  math:def-vector-valued-derivative-and-integral: mathematical-premise
  math:def-divergence-to-infinity: mathematical-premise
  math:def-real-limit: mathematical-premise
  math:def-complete-ordered-field: mathematical-premise
  math:def-limsup-liminf: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct-proof
dependency_level: 0
---

## Statement

Fix arbitrary finite real constants $\Gamma>0$ and $\tau\geq0$. Fix positive integers $m,n$, a field $\mathbb F\in\{\mathbb R,\mathbb C\}$ with its usual absolute value, and the matrix space $E=M_{m\times n}(\mathbb F)$ with any fixed norm $\|\cdot\|:E\to\mathbb R_{\geq0}$. Let $B(t):E\to E$ be a fixed family of maps, defined for all real $t$; linearity is not required. Let $(t_\nu)_{\nu\geq1}$ be a real sequence with $t_\nu\to-\infty$, and let $\rho_\nu:(t_\nu,\infty)\to E$ be differentiable curves. Derivatives are taken with respect to real time in real coordinates, using the real and imaginary entries when $\mathbb F=\mathbb C$, and are reassembled as matrices in $E$. Suppose $\|\dot\rho_\nu(t)-B(t)[\rho_\nu(t)]\|\leq\Gamma^2\tau+\Gamma\tau/(t-t_\nu)$ for every $t>t_\nu$.

For every fixed finite observation interval $[u,v]$ with $u\leq v$, choose $\nu_0$ such that $t_\nu<u$ for all $\nu\geq\nu_0$. For these indices define $R_\nu=\sup_{t\in[u,v]}\|\dot\rho_\nu(t)-B(t)[\rho_\nu(t)]\|$ and $\delta_\nu=\Gamma\tau/(u-t_\nu)$. Then $0\leq R_\nu\leq\Gamma^2\tau+\delta_\nu$, $\delta_\nu\to0$, and $\limsup_{\nu\geq\nu_0}R_\nu\leq\Gamma^2\tau$. The limit superior is taken on this tail, reindexed as a sequence. This is a limit of error budgets; it asserts no convergence, existence or uniqueness of the matrix curves themselves.

## Facts & Assumptions

[F2] Matrices in $E=M_{m\times n}(\mathbb F)$ have entrywise vector-space operations. [[math:def-matrix-space]]

[F3] The chosen norm on $E$ is a nonnegative real-valued function, definite, absolutely homogeneous and subadditive. [[math:def-normed-vector-space-over-an-absolutely-valued-field]]

[F4] The real-coordinate derivative is the limit of the difference quotient; it exists exactly when all real coordinate derivatives exist. Applying this definition to the list of real entries, or real and imaginary entries, specifies the matrix derivative used here. [[math:def-vector-valued-derivative-and-integral]]

[F5] The condition $t_\nu\to-\infty$ means that for each real $a$, eventually $t_\nu<a$. Convergence of a real sequence to zero means that for every positive rational $\varepsilon$, eventually its absolute value is less than $\varepsilon$. [[math:def-divergence-to-infinity]] [[math:def-real-limit]]

[F6] Every nonempty real set bounded above has a real supremum, which is at most each of its upper bounds. [[math:def-complete-ordered-field]]

[F7] For a real sequence $(x_k)$, $\limsup_k x_k=\inf_N\sup_{k\geq N}x_k$ in the extended real line. [[math:def-limsup-liminf]]

## Proof

**Given:** The stated matrix space, norm, maps, curves and pointwise residual bound. **Goal:** Bound the residual uniformly on each fixed observation interval and then bound its tail limit superior.

1.1 By $t_\nu\to-\infty$, there is $\nu_0$ with $t_\nu<u$ for all $\nu\geq\nu_0$. Fix such an index. The derivative and $B(t)[\rho_\nu(t)]$ both lie in $E$, so their difference has a nonnegative real norm. For $t\in[u,v]$, $t-t_\nu\geq u-t_\nu>0$. Since $\Gamma\tau\geq0$, the pointwise residual bound is at most $\Gamma^2\tau+\delta_\nu$. The interval is nonempty, so the set of residual norms is nonempty and bounded above. Its real supremum therefore exists and satisfies $0\leq R_\nu\leq\Gamma^2\tau+\delta_\nu$. [given, F2, F3, F4, F5, F6]

2.1 If $\Gamma\tau=0$, then $\delta_\nu=0$ on the chosen tail. Otherwise, for every positive real $\varepsilon$, divergence to $-\infty$ gives $t_\nu<u-\Gamma\tau/\varepsilon$ eventually. Hence $u-t_\nu>\Gamma\tau/\varepsilon$ and $0\leq\delta_\nu<\varepsilon$ eventually. In either case $\delta_\nu\to0$ by the real-sequence limit definition. [given, F5, step 1.1]

3.1 Fix a positive real $\varepsilon$ and choose $N\geq\nu_0$ so that $\delta_\nu<\varepsilon$ for every $\nu\geq N$. Step 1.1 gives $R_\nu\leq\Gamma^2\tau+\varepsilon$ throughout that tail. Thus $\sup_{\nu\geq N}R_\nu\leq\Gamma^2\tau+\varepsilon$, and the tail-infimum definition gives $\limsup_{\nu\geq\nu_0}R_\nu\leq\Gamma^2\tau+\varepsilon$. This holds for every positive real $\varepsilon$, so $\limsup_{\nu\geq\nu_0}R_\nu\leq\Gamma^2\tau$. The argument imposes no relation between different curves and therefore asserts no convergence of them. [F5, F6, F7, step 1.1, step 2.1] ∎
