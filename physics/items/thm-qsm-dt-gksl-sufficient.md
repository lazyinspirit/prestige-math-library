---
id: thm-qsm-dt-gksl-sufficient
kind: theorem
title: Finite GKSL generates CPTP semigroups
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 4
deps:
  - def-qsm-dt-channel-definition
  - def-qsm-dt-gksl-definition
  - cor-finite-dimensional-normed-spaces-are-banach
  - lem-qsm-dt-finite-trace-pairing-cyclicity
  - lem-exponential-series-of-a-bounded-operator
  - thm-qsm-dt-choi-kraus
  - thm-qsm-dt-channel-duality
dependency_roles:
  def-qsm-dt-channel-definition: mathematical-premise
  def-qsm-dt-gksl-definition: mathematical-premise
  cor-finite-dimensional-normed-spaces-are-banach: mathematical-premise
  lem-qsm-dt-finite-trace-pairing-cyclicity: mathematical-premise
  lem-exponential-series-of-a-bounded-operator: mathematical-premise
  thm-qsm-dt-choi-kraus: mathematical-premise
  thm-qsm-dt-channel-duality: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Lin Lin and Nathan Wiebe, Quantum Algorithms for Scientific Computation, Chapter 21, §21.1
      url: https://math.berkeley.edu/~linlin/qasc/live_notes_0315.pdf
    - title: John Watrous, The Theory of Quantum Information, Chapter 2, §§2.2.1–2.2.2
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf
---

## Statement

Let $\mathcal L$ be a finite GKSL generator on $M_d(\mathbb C)$, $d\geq1$, with the units and conventions of [[def-qsm-dt-gksl-definition]]. For a bounded operator $A$ on a complex Banach space, write $e^{tA}:=\sum_{n=0}^{\infty}t^nA^n/n!$ for the operator-norm convergent series of [[lem-exponential-series-of-a-bounded-operator]]. Then $T_t=e^{t\mathcal L}$ is a finite channel for every $t\geq0$. The family satisfies $T_0=\operatorname{id}$, $T_{t+s}=T_t\circ T_s$, and is norm-continuous. Time is measured in seconds; no negative-time channel or physical bath limit is asserted.

## Facts & Assumptions

**Given:** $d\geq1$, $\hbar>0$, $H=H^*$, a finite family $L_a$, and the resulting $\mathcal L$ of [[def-qsm-dt-gksl-definition]].

[F1] [[def-qsm-dt-gksl-definition]]: $\mathcal L(X)=-\frac{i}{\hbar}[H,X]+\sum_a(L_aXL_a^*-\frac12\{L_a^*L_a,X\})$.

[F2] [[def-qsm-dt-channel-definition]]: for $d,e\ge1$, positivity sends every matrix $X\ge0$ to a positive matrix. Complete positivity requires this after every finite ancilla extension; trace preservation separately requires equality of traces for every matrix input, without a positivity restriction on that input.

[F3] [[thm-qsm-dt-choi-kraus]]: finite Kraus maps are completely positive, and their Kraus adjoint-square sum characterizes trace preservation.

[F4] [[thm-qsm-dt-channel-duality]]: finite-dimensional completely positive maps are closed under induced-norm limits; finite channels are closed under such limits, composition, and finite convex combination.

[F5] [[lem-qsm-dt-finite-trace-pairing-cyclicity]]: the finite matrix trace is cyclic.

[F6] [[cor-finite-dimensional-normed-spaces-are-banach]]: every finite-dimensional real or complex normed space is complete.

[F7] [[lem-exponential-series-of-a-bounded-operator]]: on a complex Banach space the operator exponential series converges absolutely in operator norm, differentiates to $Ae^{tA}=e^{tA}A$, and satisfies $e^{(t+s)A}=e^{tA}e^{sA}$; it also has the stated quadratic remainder bound.

## Proof




1.1 Put $D=\sum_aL_a^*L_a$, $K=-iH/\hbar-D/2$, $\mathcal N(X)=KX+XK^*$, and $\mathcal J(X)=\sum_aL_aXL_a^*$. Then $\mathcal L=\mathcal N+\mathcal J$. Left multiplication by $K$ and right multiplication by $K^*$ commute; expanding their norm-convergent exponential series and using the binomial formula gives $e^{t\mathcal N}(X)=e^{tK}Xe^{tK^*}$. Termwise adjunction gives $e^{tK^*}=(e^{tK})^*$ for real $t$. For every ancilla dimension $r$, the amplification is conjugation by $I_r\otimes e^{tK}$, hence preserves positivity. Thus $e^{t\mathcal N}$ is completely positive. [given, F1, F6, F7, algebra]

2.1 The map $\mathcal J$ is completely positive by [F3], and every iterate $\mathcal J^n$ is completely positive by composition. For $t\geq0$, the series $e^{t\mathcal J}=\sum_{n=0}^{\infty}t^n\mathcal J^n/n!$ converges in finite-dimensional map norm; its partial sums are completely positive, so [F4] implies that $e^{t\mathcal J}$ is completely positive. [step 1.1, F3, F4, F6, F7, algebra]

3.1 By [F7], for $h\geq0$ and each bounded linear map $A$, $\|e^{hA}-I-hA\|\leq\frac12 h^2\|A\|^2e^{h\|A\|}$. Applying this to $\mathcal N,\mathcal J,\mathcal N+\mathcal J$ shows that for fixed $t$, $\|e^{h\mathcal N}e^{h\mathcal J}-e^{h(\mathcal N+\mathcal J)}\|\leq C_t h^2$ for $0\leq h\leq t$, with finite $C_t$. Set $h=t/n$. The telescoping identity for the difference of the $n$th powers and the bound $\|e^{sA}\|\leq e^{s\|A\|}$ from [F7] show
$$ \left\|\left(e^{t\mathcal N/n}e^{t\mathcal J/n}\right)^n-e^{t(\mathcal N+\mathcal J)}\right\| \leq n C_t(t/n)^2e^{t(\|\mathcal N\|+\|\mathcal J\|)}\longrightarrow0. $$
Each product on the left before taking the limit is completely positive by step 1.1 and step 2.1; [F4] therefore proves that $e^{t\mathcal L}$ is completely positive. [step 1.1, step 2.1, F4, F7, algebra]

4.1 Cyclicity of finite trace [F5] gives $\operatorname{Tr}(\mathcal L(X))=0$ for every $X$: the commutator trace vanishes, and each $\operatorname{Tr}(L_aXL_a^*)$ cancels $\frac12\operatorname{Tr}(L_a^*L_aX+XL_a^*L_a)$. By [F7], the norm-convergent exponential series differentiates term-by-term on bounded time intervals, so $\frac{d}{dt}\operatorname{Tr}(e^{t\mathcal L}X)=\operatorname{Tr}(\mathcal L(e^{t\mathcal L}X))=0$. Therefore $\operatorname{Tr}(e^{t\mathcal L}X)=\operatorname{Tr}X$. The exponential law [F7] gives $T_{t+s}=T_t\circ T_s$, and the series gives norm continuity. Together with complete positivity from step 3.1, [F2] makes every $T_t$ a channel. [given, F2, F5, F7, step 3.1, algebra] ∎

