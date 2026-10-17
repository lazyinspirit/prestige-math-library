---
id: lem-qsm-gibbs-strip-limit
kind: lemma
title: Uniform local Gibbs strip limits
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps:
  - def-countable-choice
  - def-qsm-bounded-finite-range-interaction
  - def-qsm-infinite-algebraic-state
  - def-qsm-kms-state
  - def-qsm-local-spin-algebras
  - def-qsm-quasilocal-spin-algebra
  - lem-qsm-consistent-local-states
  - lem-qsm-finite-gibbs-kms
  - lem-qsm-kms-strip-uniqueness
  - lem-qsm-local-generator-domain
  - lem-qsm-matrix-state-calculus
  - lem-qsm-quasilocal-completion
  - lem-qsm-finite-matrix-cstar-and-state-duality
  - lem-qsm-spin-state-compactness
  - thm-qsm-finite-range-spin-dynamics
  - thm-weierstrass-convergence-holomorphic-functions
  - thm-nested-interval-property
  - thm-recursion
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qsm-bounded-finite-range-interaction: mathematical-premise
  def-qsm-infinite-algebraic-state: mathematical-premise
  def-qsm-kms-state: mathematical-premise
  def-qsm-local-spin-algebras: mathematical-premise
  def-qsm-quasilocal-spin-algebra: mathematical-premise
  lem-qsm-consistent-local-states: mathematical-premise
  lem-qsm-finite-gibbs-kms: mathematical-premise
  lem-qsm-kms-strip-uniqueness: mathematical-premise
  lem-qsm-local-generator-domain: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  lem-qsm-quasilocal-completion: mathematical-premise
  lem-qsm-finite-matrix-cstar-and-state-duality: mathematical-premise
  lem-qsm-spin-state-compactness: mathematical-premise
  thm-qsm-finite-range-spin-dynamics: mathematical-premise
  thm-weierstrass-convergence-holomorphic-functions: mathematical-premise
  thm-nested-interval-property: mathematical-premise
  thm-recursion: mathematical-premise
dependency_level: 9
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §3.4, pp. 74–77
      url: https://arxiv.org/pdf/1311.2717
    - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 1 §7, pp. 13–14; Chapter 2 §6, pp. 24–25
      url: https://arxiv.org/pdf/math-ph/0107009
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---


## Statement

Let $\Gamma=\mathbb Z^d$, $d\ge1$, with finite on-site spin dimension $q\ge1$, local matrix algebras $\mathcal A_\Lambda$, and quasi-local algebra $\mathcal A$ as in [[def-qsm-local-spin-algebras]] and [[def-qsm-quasilocal-spin-algebra]]. Let $\Phi$ be a uniformly bounded finite-range interaction as in [[def-qsm-bounded-finite-range-interaction]], with free-boundary Hamiltonians $H_{\Lambda_n}$ on any increasing finite exhaustion $\Lambda_n\uparrow\Gamma$. Fix $\hbar>0$ and $\beta>0$, and let $\alpha_t$ be the thermodynamic dynamics of [[thm-qsm-finite-range-spin-dynamics]].

For each $n$, let $\rho_n=e^{-\beta H_{\Lambda_n}}/\operatorname{Tr}_{\Lambda_n}(e^{-\beta H_{\Lambda_n}})$ be the finite Gibbs density. For each finite $X\subseteq\Gamma$, define its extension density by adjoining the normalized trace density $q^{-1}I$ at every site of $X\setminus\Lambda_n$ and taking the partial trace from $X\cup\Lambda_n$ to $X$. Assume the finite-matrix C$^*$-identity and the finite-matrix state/density-norm interface recorded in Facts [A1]–[A2]. The resulting consistent local densities define algebraic states $\omega_n$ on $\mathcal A$.

At least one subsequence $\omega_{n_k}$ converges pointwise on $\mathcal A$ to an algebraic state $\omega$. For every pointwise-convergent subsequence and its limit $\omega$, and for every fixed pair of strictly local observables $A,B\in\mathcal A_{\mathrm{loc}}$, there is a bounded function $F_{A,B}$, continuous on $S_{\beta\hbar}$ and holomorphic inside, whose boundaries are

$$F_{A,B}(t)=\omega(A\alpha_t(B)),\qquad F_{A,B}(t+i\beta\hbar)=\omega(\alpha_t(B)A)\quad(t\in\mathbb R).$$

This is the local-pair boundary conclusion for a pointwise limit of finite Gibbs states.

## Facts & Assumptions

**Given:** $d\ge1$, finite $q\ge1$, $\Gamma=\mathbb Z^d$, $\beta>0$, $\hbar>0$, an interaction $\Phi$ with finite range and uniform per-site norm bound, an increasing finite exhaustion $\Lambda_n$, and the local matrix/quasi-local algebra convention.

[A1] Countable Choice is assumed for the metric completion and countable state/diagonal extractions ([[def-countable-choice]]). The finite-matrix identity $\|T^*T\|=\|T\|^2$ for every local matrix $T$ with the ordinary operator norm is the exact interface proved for each nonzero finite-dimensional local matrix algebra by [[lem-qsm-finite-matrix-cstar-and-state-duality]]. The current [[thm-qsm-finite-range-spin-dynamics]] still states this identity explicitly as its hypothesis; this item carries that condition rather than silently changing the dynamics supplier's interface. The c-star carrier is a current draft with a complete local proof, not an independent acceptance.

[A2] [[lem-qsm-finite-matrix-cstar-and-state-duality]]: every positive normalized functional on a finite local matrix algebra has a unique positive trace-one density matrix, and the resulting trace functional has norm one. These are exactly the finite-dimensional clauses used by [[lem-qsm-consistent-local-states]] and [[lem-qsm-spin-state-compactness]]. The cited finite-matrix carrier is a current draft with its full local argument present; the proof below uses its actual interface conditionally and claims no independent acceptance.

[F1] [[def-qsm-local-spin-algebras]]: $\Gamma=\mathbb Z^d$ has finite regions $\Lambda$ with local matrix algebras $\mathcal A_\Lambda\cong M_{q^{|\Lambda|}}(\mathbb C)$, and nested regions use canonical tensor-with-identity inclusions.

[F2] [[def-qsm-bounded-finite-range-interaction]]: each $\Phi(Z)$ is self-adjoint, vanishes when $|Z|>M$ or $\operatorname{diam}_\infty Z>R$, and $\sup_x\sum_{Z\ni x}\|\Phi(Z)\|=\kappa<\infty$; $H_\Lambda=\sum_{Z\subseteq\Lambda}\Phi(Z)$ and $\alpha_t^\Lambda(C)=e^{itH_\Lambda/\hbar}Ce^{-itH_\Lambda/\hbar}$.

[F3] [[def-qsm-quasilocal-spin-algebra]] and [[lem-qsm-quasilocal-completion]]: $\mathcal A_{\mathrm{loc}}=\bigcup_\Lambda\mathcal A_\Lambda$ is norm dense in its completion $\mathcal A$; the completion argument uses the exact finite-matrix C$^*$-identity in [A1] through [[lem-qsm-finite-matrix-cstar-and-state-duality]].

[F4] [[thm-qsm-finite-range-spin-dynamics]]: under Countable Choice and its finite-matrix C$^*$-identity hypothesis, the finite-volume maps converge in norm on each local observable uniformly on compact real-time intervals to a strongly continuous group $\alpha_t$ of isometric $*$-automorphisms.

[F5] [[lem-qsm-local-generator-domain]]: under the same conditional dynamics hypotheses, each local $B\in\mathcal A_X$ is in the generator domain and $\delta(B)=\frac{i}{\hbar}\sum_{Z:Z\cap X\ne\varnothing}[\Phi(Z),B]$, a finite sum.

[F6] [[lem-qsm-matrix-state-calculus]]: finite Hermitian spectral calculus, trace pairing for a density already given, and cyclicity of the finite matrix trace. Its current Step 1 readiness is ready, with the rational-normalization argument repaired; this records authoring readiness, not independent acceptance.

[F7] [[lem-qsm-finite-gibbs-kms]]: for finite self-adjoint $H$, the finite Gibbs density has an entire bounded strip correlation with $F_{A,B}(t+i\beta\hbar)=\operatorname{Tr}(\rho_\beta\alpha_t(B)A)$; this is a finite-volume identity, not an infinite-volume result. Its current Step 1 record is ready against [[lem-qsm-matrix-state-calculus]], with no independent acceptance implied.

[F8] [[lem-qsm-consistent-local-states]]: a family of positive trace-one local densities satisfying every partial-trace consistency equation extends uniquely to an algebraic state on $\mathcal A$; its current proof uses the exact finite-matrix state/density-norm interface [A2].

[F9] [[lem-qsm-spin-state-compactness]]: under Countable Choice and the finite-matrix density/norm interface [A2], every sequence of algebraic states on $\mathcal A$ has a subsequence converging on every fixed observable. Its full current proof is conditional on that exact draft supplier interface; no global density representation is inferred.

[F10] [[lem-qsm-kms-strip-uniqueness]]: bounded continuous functions on $S_{\beta\hbar}$ that are holomorphic inside obey the Hadamard three-lines bound, and equality on the lower edge determines the full function.

[F11] [[thm-nested-interval-property]]: nested closed real intervals whose lengths tend to zero have a unique common point.

[F12] [[thm-recursion]]: a recursively specified sequence with a deterministic next-stage rule is uniquely defined on $\mathbb N$.

[F13] [[thm-weierstrass-convergence-holomorphic-functions]]: a locally uniform limit of holomorphic scalar functions on an open subset of $\mathbb C$ is holomorphic.

## Proof

**Proof technique:** construct consistent finite Gibbs extensions, extract a pointwise state limit, and pass the finite-volume analytic boundary functions through a locally uniform strip limit.

**Given:** [A1]–[A2], [F1]–[F13], $\Phi$, $\beta$, $\hbar$, and the exhaustion $\Lambda_n$.

1.1 The finite spectral calculus [F6] defines $Z_n=\operatorname{Tr}_{\Lambda_n}(e^{-\beta H_{\Lambda_n}})>0$ and the positive trace-one matrix $\rho_n=e^{-\beta H_{\Lambda_n}}/Z_n$. For any finite $X\subseteq\Gamma$, use the tensor factorization of [F1] on $X\cup\Lambda_n$ and set $\widehat\rho_X^{(n)}:=\operatorname{Tr}_{(X\cup\Lambda_n)\setminus X}\!\left(\rho_n\otimes q^{-|X\setminus\Lambda_n|}I_{X\setminus\Lambda_n}\right)$, where $\rho_n$ is placed on $\Lambda_n$ and each added site has density $q^{-1}I$. Tensor trace factorization shows that if $X\subseteq Y$, then tracing $\widehat\rho_Y^{(n)}$ over $Y\setminus X$ gives $\widehat\rho_X^{(n)}$: each removed added site contributes $\operatorname{Tr}(q^{-1}I)=1$, while any removed site in $\Lambda_n$ is traced from the same $\rho_n$ before or after adjoining the identity densities. By [F3], these local algebras sit in the norm-completed $\mathcal A$; thus the consistent family [F8] gives an algebraic state $\omega_n$ whose restriction to $\mathcal A_{\Lambda_n}$ is the finite Gibbs state. [A1, A2, F1, F3, F6, F8, construct]

2.1 Applying [F9] to $(\omega_n)$ gives at least one pointwise-convergent subsequence. Now fix any pointwise-convergent subsequence, write it as $(\omega_{n_k})$, and denote its state limit by $\omega$. The rest of the proof applies to this arbitrary convergent subsequence. This extraction is conditional on the exact interface [A2], not on the draft supplier's status label. [A1, A2, F9, step 1.1]

2.2 Fix local $A\in\mathcal A_X$ and $B\in\mathcal A_Y$. If $X=\varnothing$ or $Y=\varnothing$, the corresponding local algebra is $\mathbb C I$ by [F1], so embed that scalar observable in any one-site local algebra; the identity-preserving inclusion leaves both correlation functions unchanged. We may therefore take $X,Y\ne\varnothing$. Since $R<\infty$, the set $X^{+R}=\{y:\operatorname{dist}_\infty(X,\{y\})\le R\}$ is finite, so for all sufficiently large $k$, $X\cup Y\cup X^{+R}\subseteq\Lambda_{n_k}$. For those $k$, define the finite-volume entire function $F_k(z):=\omega_{n_k}\!\left(A\alpha_z^{\Lambda_{n_k}}(B)\right)$, where $\alpha_z^{\Lambda}(C):=e^{izH_\Lambda/\hbar}Ce^{-izH_\Lambda/\hbar}$. Because the restrictions of $\omega_{n_k}$ to $\mathcal A_{\Lambda_{n_k}}$ are the Gibbs states, [F7] gives both KMS boundary identities. On either boundary the finite trace state has norm one by [A2], so $|F_k|\le\|A\|\|B\|$ there. For any finite $\Lambda$, put $H=H_\Lambda=H^*$; diagonalizing this finite matrix shows that for $C\in\mathcal A_\Lambda$ and $z=t+is\in S_b$, $0\le s\le b$, $\|\alpha_z^\Lambda(C)\|\le\|e^{izH/\hbar}\|\,\|C\|\,\|e^{-izH/\hbar}\|\le e^{2s\|H\|/\hbar}\|C\|\le e^{2\beta\|H\|}\|C\|$. Consequently each $F_k$ is bounded on $S_b$, with the crude bound $e^{2\beta\|H_{\Lambda_{n_k}}\|}\|A\|\|B\|$, which need not be uniform in $k$. This establishes the bounded-strip hypothesis for [F10]; its three-lines estimate uses the uniform boundary bounds and gives $|F_k(z)|\le\|A\|\|B\|$ throughout $S_b$. [A1, A2, F1, F2, F7, F10, step 1.1]

3.1 On every compact real-time interval, [F4] gives $\alpha_t^{\Lambda_{n_k}}(B)\to\alpha_t(B)$ uniformly in norm. The orbit $K_T=\{A\alpha_t(B):|t|\le T\}$ is compact because $t\mapsto\alpha_t(B)$ is norm-continuous. For any $\varepsilon>0$, cover $K_T$ by finitely many norm-balls of radius $\varepsilon/4$, with centers $C_1,\dots,C_m\in K_T$. Pointwise convergence in [F9] makes $\max_j|\omega_{n_k}(C_j)-\omega(C_j)|<\varepsilon/2$ for large $k$; the norm-one bounds in [A2] make the difference at any point of $K_T$ at most this maximum plus $2(\varepsilon/4)$. Combining this with uniform convergence of the dynamics proves $F_k(t)\to\omega(A\alpha_t(B))$ uniformly for $|t|\le T$. The same finite-net estimate applied to $\{\alpha_t(B)A:|t|\le T\}$ proves uniform convergence of the upper edges to $\omega(\alpha_t(B)A)$. [A2, F4, F9, step 2.1, algebra]

3.2 For $B\in\mathcal A_Y$, [F5] gives the local generator value $\delta(B)$. Every interaction term meeting $Y$ is supported in the finite neighborhood $Y^{+R}$, so when $\Lambda_{n_k}$ contains $Y^{+R}$ the finite-volume generator satisfies $\delta_{n_k}(B)=\frac{i}{\hbar}[H_{\Lambda_{n_k}},B]=\delta(B)$. Differentiating the finite matrix exponential then gives $F_k'(z)=\omega_{n_k}\!\left(A\alpha_z^{\Lambda_{n_k}}(\delta(B))\right)$. Taking $C=\delta(B)$ in the finite-volume estimate of step 2.2 shows that for each $k$, $F_k'$ is bounded on $S_b$ by $e^{2\beta\|H_{\Lambda_{n_k}}\|}\|A\|\|\delta(B)\|$; this crude bound is finite but need not be uniform in $k$. The same finite Gibbs boundary identity [F7] applies to the pair $A,\delta(B)$. Its two real-time boundaries have modulus at most $\|A\|\|\delta(B)\|$ by the finite state norm bound [A2]. Since the required boundedness is now established, [F10] gives the uniform estimate $|F_k'(z)|\le L:=\|A\|\|\delta(B)\|$ on $S_b$. Integrating along the straight segment from $z$ to $w$ (which stays in the convex strip) yields $|F_k(w)-F_k(z)|\le L|w-z|$. Thus the functions are uniformly Lipschitz on the whole strip; if $L=0$, they are constant there. [A1, A2, F5, F7, F10, step 2.2, algebra]

3.3 For $m\ge1$ and $r\ge1$, let $G_{m,r}:=\left\{-m+\frac{2mj}{2^r}+i\frac{b\ell}{2^r}:0\le j,\ell\le2^r\right\}\subset[-m,m]+i[0,b]$. The union of these grids over $m,r$ is countable and dense in the closed strip: for any point in a fixed rectangle, choosing $r$ large makes each coordinate mesh $2m/2^r$ and $b/2^r$ arbitrarily small. Enumerate the grid points by increasing $m+r+j+\ell$, breaking ties lexicographically. For a bounded complex sequence, enclose its values in a fixed square $[-M,M]^2$ with $M>0$; subdivide the current square into four closed subsquares in a fixed lexicographic order and take the first containing infinitely many terms. Choose at each stage the least natural index larger than the previous one whose value lies in that square. At least one subsquare contains infinitely many terms because there are only four. The two coordinate intervals of the nested squares are closed, nested, and have lengths tending to zero; [F11] gives their unique common coordinates, and the selected values converge to that complex point. This defines a deterministic subsequence rule $E$ for each bounded complex sequence. Starting with $i_0(n)=n$, at grid point $g_j$ apply $E$ to $F_{i_{j-1}(n)}(g_j)$, obtaining a strictly increasing index map $s_j$, and set $i_j=i_{j-1}\circ s_j$. The deterministic recursion [F12] defines all $i_j$. The diagonal indices $k_j:=i_j(j)$ are strictly increasing; for each fixed $r$, the tail $(k_j)_{j\ge r}$ is a subsequence of $i_r$, so $F_{k_j}(g_r)$ converges. Thus one subsequence converges at every grid point without an additional choice principle. [F11, F12, step 2.2, construct]

4.1 Fix $m$ and $\varepsilon>0$. If $L=0$, convergence at a single grid point and constancy give uniform convergence on the rectangle $K_m=[-m,m]+i[0,b]$. If $L>0$, choose $r$ so that every point of $K_m$ is within $\varepsilon/(8L)$ of some point of $G_{m,r}$. The grid is finite, so the diagonal subsequence is uniformly Cauchy on that grid: for sufficiently large $p,q$, the values $F_{k_p},F_{k_q}$ differ by less than $\varepsilon/2$ at every grid point. At an arbitrary $z\in K_m$, choose a grid point $g$ within $\varepsilon/(8L)$; the two Lipschitz estimates from step 3.2 and the grid difference give $|F_{k_p}(z)-F_{k_q}(z)|\le L|z-g|+|F_{k_p}(g)-F_{k_q}(g)|+L|g-z|<\varepsilon$. Thus the subsequence is uniformly Cauchy on each $K_m$. Completeness of $\mathbb C$ gives a limit $F_{A,B}$ locally uniformly on the closed strip; step 2.2 gives $|F_{A,B}(z)|\le\|A\|\|B\|$. [step 2.2, step 3.2, step 3.3, algebra]

5.1 Each $F_k$ is entire, and step 4.1 gives locally uniform convergence on every compact subset of $S_b^\circ$. By [F13], $F_{A,B}$ is holomorphic there; uniform convergence on compact rectangles including their horizontal edges makes it continuous on $S_b$. Step 3.1 gives uniform convergence of the two boundary sequences on every compact real interval, so the lower and upper boundaries of $F_{A,B}$ are respectively $\omega(A\alpha_t(B))$ and $\omega(\alpha_t(B)A)$ for every real $t$. Hence the stated local-pair strip conclusion holds. [F13, step 3.1, step 4.1] ∎
## Remarks

The all-observable extension is proved separately in [[thm-qsm-infinite-spin-kms-existence]]. This is a contextual later result, not a premise of this lemma.

The finite-volume functions themselves have crude bounds that can grow with $\|H_{\Lambda_n}\|$. Uniformity here instead comes from the two finite Gibbs boundary estimates and the three-lines theorem, followed by a derivative bound from the local generator. The proof remains conditional on [A1]–[A2]; it does not assert an infinite-volume trace density.
