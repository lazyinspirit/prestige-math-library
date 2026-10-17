---
id: thm-qsm-finite-range-spin-dynamics
kind: theorem
title: Strongly continuous thermodynamic spin automorphism group
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps:
  - def-qsm-bounded-finite-range-interaction
  - def-countable-choice
  - def-qsm-local-spin-algebras
  - def-qsm-quasilocal-spin-algebra
  - lem-qsm-quasilocal-completion
  - lem-qsm-finite-matrix-cstar-and-state-duality
  - lem-qsm-boundary-dynamics-cauchy
dependency_roles:
  def-qsm-bounded-finite-range-interaction: mathematical-premise
  def-countable-choice: mathematical-premise
  def-qsm-local-spin-algebras: mathematical-premise
  def-qsm-quasilocal-spin-algebra: mathematical-premise
  lem-qsm-quasilocal-completion: mathematical-premise
  lem-qsm-finite-matrix-cstar-and-state-duality: mathematical-premise
  lem-qsm-boundary-dynamics-cauchy: mathematical-premise
dependency_level: 6
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, Theorems 3.3.12 and 4.2.1, pp. 69–71 and 101–102
      url: https://arxiv.org/pdf/1311.2717
    - title: Bruno Nachtergaele and Robert Sims, Lieb-Robinson Bounds in Quantum Many-Body Physics, Theorem 3.1 and proof, pp. 18–20
      url: https://arxiv.org/pdf/1004.2086
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and the finite-matrix C*-identity condition [A1] below. Let $\mathcal A_{\mathrm{loc}}=\bigcup_{\Lambda\subset\mathbb Z^d,\ |\Lambda|<\infty}\mathcal A_\Lambda$ and let $\mathcal A$ be its norm completion as in [[def-qsm-quasilocal-spin-algebra]]. These assumptions give the conditional unital C*-algebra structure supplied by [[lem-qsm-quasilocal-completion]]. Let $\Phi$ be a uniformly bounded finite-range interaction of [[def-qsm-bounded-finite-range-interaction]].

For any increasing finite exhaustion $\Lambda_n\uparrow\mathbb Z^d$, the free-boundary finite-volume maps $\alpha_t^{\Lambda_n}$ converge in norm on every local observable, uniformly for $t$ in compact intervals. Their limit is independent of the exhaustion and extends uniquely to a strongly continuous one-parameter group $\alpha_t$ of $*$-automorphisms of $\mathcal A$. Strong continuity means $t\mapsto\alpha_t(A)$ is norm-continuous for every fixed $A\in\mathcal A$. This result does not assert that an infinite-volume Hamiltonian is an element of $\mathcal A$ or a bounded operator on a preselected infinite tensor-product Hilbert space.

## Facts & Assumptions

**Given:** $d\ge1$, finite $q\ge1$, Countable Choice, the local spin algebras and norm completion, $\hbar>0$, and an interaction $\Phi$ with finite $M,R,\kappa$.

[A1] [[lem-qsm-finite-matrix-cstar-and-state-duality]] states that for every nonzero finite-dimensional complex inner-product space with its induced operator norm, $\|T^*T\|=\|T\|^2$ for every endomorphism $T$. This is the exact finite-matrix condition used by [[lem-qsm-quasilocal-completion]]. The supplier is now present on its planned A page and in the batch-36 manifest, but has no current Step-1 readiness record; this theorem assumes that exact clause and does not claim it established.

[A2] Countable Choice, as required for the Cauchy-sequence completion in [[def-countable-choice]] and the actual hypothesis of [[lem-qsm-quasilocal-completion]].

[F1] [[def-qsm-quasilocal-spin-algebra]]: $\mathcal A_{\mathrm{loc}}$ is the directed union of the finite local matrix algebras and $\mathcal A$ is its norm completion.

[F2] [[lem-qsm-quasilocal-completion]]: under Countable Choice and the finite-matrix C*-identity condition, the completion is a unital complex C*-algebra, the local algebra is dense, and disjoint finite local factors commute.

[F3] [[lem-qsm-boundary-dynamics-cauchy]]: for $A\in\mathcal A_X$, the difference between finite-volume dynamics in $\Lambda'\supseteq\Lambda\supseteq X$ is bounded by a constant times the exterior exponential tail $\sum_{y\notin\Lambda}e^{-\mu\operatorname{dist}_\infty(X,\{y\})}$, uniformly on compact time intervals.

[F4] [[def-qsm-bounded-finite-range-interaction]]: $H_\Lambda$ is a finite self-adjoint local matrix and $\alpha_t^\Lambda(A)=e^{itH_\Lambda/\hbar}Ae^{-itH_\Lambda/\hbar}$ is its finite-volume Heisenberg dynamics.

## Proof

**Proof technique:** construct the norm limit on the dense local algebra, extend by isometry, and verify the group and continuity properties.

**Given:** [A1], [A2], [F1]–[F4], and the interaction $\Phi$.

1.1 Fix local $A\in\mathcal A_X$; if its displayed localization is empty, embed the scalar $A\in\mathbb C I$ into any one-site algebra, so take $X\ne\varnothing$. Let $C_n=\{x\in\mathbb Z^d:d_\infty(x,0)\le n\}$. For all sufficiently large $n$, $C_n\supseteq X$, and for $m\ge n$ the boundary estimate [F3] bounds $\|\alpha_t^{C_m}(A)-\alpha_t^{C_n}(A)\|$ by its right side with $\Lambda=C_n$. That exterior exponential tail tends to zero as $n\to\infty$, uniformly for $|t|\le T$ because its time factor is bounded there. Hence $\alpha_t^{C_n}(A)$ is Cauchy uniformly on compact time intervals; completeness in [A1], [A2], [F1], and [F2] gives a limit $\alpha_t(A)\in\mathcal A$. Given any other increasing finite exhaustion $\Lambda_j$, choose $n$ so large that both the canonical limit error and the [F3] bound for $C_n$ are below $\varepsilon/2$. Since $C_n$ is finite and $\Lambda_j\uparrow\mathbb Z^d$, eventually $C_n\subseteq\Lambda_j$; applying [F3] to this nested pair proves $\alpha_t^{\Lambda_j}(A)\to\alpha_t(A)$ uniformly on $[-T,T]$. Thus the limit is independent of the exhaustion. The argument remains conditional on [A1]; the finite-matrix identity itself is the exact clause of [[lem-qsm-finite-matrix-cstar-and-state-duality]] and is not asserted proved here. [A1, A2, F1, F2, F3]

1.2 Every finite-volume map is an isometric unital $*$-automorphism by conjugation with the unitary matrix exponential in [F4]. Therefore the limits preserve the unit, adjoints, products on local observables, and norm. For products, if local sequences $A_n\to A$ and $B_n\to B$ are used, submultiplicativity gives $\|A_nB_n-AB\|\le\|A_n\|\|B_n-B\|+\|A_n-A\|\|B\|$, so multiplication passes continuously to the completion; the adjoint is norm-continuous as well. By density of $\mathcal A_{\mathrm{loc}}$ and the isometry bound, each $\alpha_t$ extends uniquely to an isometric unital $*$-homomorphism of $\mathcal A$. [A1, A2, F1, F2, F4, algebra]

2.1 For local $A$ and fixed $s,t$, choose local $C$ with $\|C-\alpha_t(A)\|<\varepsilon$. For large $\Lambda$, both $\alpha_t^\Lambda(A)$ is within $\varepsilon$ of $\alpha_t(A)$ and $\alpha_s^\Lambda(C)$ is within $\varepsilon$ of $\alpha_s(C)$. By isometry, replacing $\alpha_t^\Lambda(A)$ with $C$ in $\alpha_s^\Lambda\alpha_t^\Lambda(A)$ costs at most $2\varepsilon$, and replacing $\alpha_s^\Lambda(C)$ by $\alpha_s(C)$ costs at most $\varepsilon$. The finite-volume group law $\alpha_s^\Lambda\alpha_t^\Lambda(A)=\alpha_{s+t}^\Lambda(A)$ therefore gives $\|\alpha_s\alpha_t(A)-\alpha_{s+t}(A)\|\le4\varepsilon$ after taking limits. Letting $\varepsilon\downarrow0$ proves the group law on local $A$; density extends it to every $A\in\mathcal A$. In particular, $\alpha_{-t}$ is the inverse of $\alpha_t$, so each is an automorphism. [A1, A2, F1, F4, step 1.2, algebra]

3.1 If $A\in\mathcal A_X$ is local, finite-volume differentiation gives
$$\|\alpha_t^\Lambda(A)-A\|\le\frac{|t|}{\hbar}\|[H_\Lambda,A]\|\le\frac{2\kappa |X|\|A\|}{\hbar}|t|,$$
because only terms meeting $X$ contribute and $\sum_{Z\cap X\ne\varnothing}\|\Phi(Z)\|\le\kappa|X|$. Passing to the limit gives continuity at $t=0$ for local $A$. For general $A\in\mathcal A$, choose local $C$ close to $A$ and use $\|\alpha_t(A)-A\|\le2\|A-C\|+\|\alpha_t(C)-C\|$. The group law gives continuity at every time. [A1, A2, F1, F4, step 2.1, algebra] ∎

## Remarks

This is a complete conditional deduction. The current owner QSM resolution adds [[lem-qsm-finite-matrix-cstar-and-state-duality]] with the exact finite-matrix C*-identity needed by [[lem-qsm-quasilocal-completion]], and the current batch-36 manifest and qsm-states-ensembles page now place that item. It remains a draft carrier without a current Step-1 readiness record, while the owner resolution records native metadata and acceptance as pending. The theorem therefore retains [A1], and readiness remains escalated until that supplier's proof status is current. [[lem-qsm-matrix-state-calculus]] supplies finite spectral and state calculus; its Statement is not the C*-identity interface used here.
