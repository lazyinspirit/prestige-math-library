---
id: thm-qsm-dt-gksl-necessary
kind: theorem
title: Norm-continuous finite channel semigroups are GKSL
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 5
deps:
  - def-qsm-dt-channel-definition
  - def-qsm-dt-gksl-definition
  - cor-finite-dimensional-normed-spaces-are-banach
  - lem-exponential-series-of-a-bounded-operator
  - lem-qsm-matrix-state-calculus
  - lem-qsm-dt-finite-trace-pairing-cyclicity
  - lem-cm-integral-and-ftc-for-continuous-normed-space-curves
  - thm-qsm-dt-choi-kraus
  - thm-qsm-dt-gksl-sufficient
dependency_roles:
  def-qsm-dt-channel-definition: mathematical-premise
  def-qsm-dt-gksl-definition: mathematical-premise
  cor-finite-dimensional-normed-spaces-are-banach: mathematical-premise
  lem-exponential-series-of-a-bounded-operator: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  lem-qsm-dt-finite-trace-pairing-cyclicity: mathematical-premise
  lem-cm-integral-and-ftc-for-continuous-normed-space-curves: mathematical-premise
  thm-qsm-dt-choi-kraus: mathematical-premise
  thm-qsm-dt-gksl-sufficient: mathematical-premise
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

Let $d\geq1$ and let $T_t:M_d(\mathbb C)\to M_d(\mathbb C)$, $t\geq0$ measured in seconds, be a semigroup of finite channels, so $T_0=\operatorname{id}$ and $T_{t+s}=T_t\circ T_s$. Assume $t\mapsto T_t$ is continuous in the induced operator norm on the finite-dimensional space of linear maps $M_d(\mathbb C)\to M_d(\mathbb C)$. For a bounded operator $A$ on a complex Banach space, write $e^{tA}:=\sum_{n=0}^{\infty}t^nA^n/n!$ for the operator-norm convergent exponential series of [[lem-exponential-series-of-a-bounded-operator]]. Then there is a unique linear generator $\mathcal L$, in ${\rm s}^{-1}$, with $T_t=e^{t\mathcal L}$, and $\mathcal L$ has the finite GKSL form in [[def-qsm-dt-gksl-definition]] with at most $d^2-1$ jump matrices. Conversely, every such finite GKSL generator produces a norm-continuous channel semigroup, as in [[thm-qsm-dt-gksl-sufficient]].

## Facts & Assumptions

**Given:** $d\geq1$, the finite channel definition, a norm-continuous semigroup $T_t$ with $T_0=\operatorname{id}$, and $\hbar>0$ in the units of the GKSL definition.

[F1] [[def-qsm-dt-channel-definition]]: each $T_t$ is completely positive and trace-preserving.

[F2] [[def-qsm-dt-gksl-definition]]: the finite GKSL form is $-\frac{i}{\hbar}[H,X]+\sum_a(L_aXL_a^*-\frac12\{L_a^*L_a,X\})$ with $H=H^*$.

[F3] [[lem-qsm-matrix-state-calculus]]: finite Hermitian matrices have real spectral decompositions and positive matrices have positive square roots.

[F4] [[thm-qsm-dt-choi-kraus]]: a finite map is completely positive exactly when its Choi matrix is positive, and every finite CP map has a Kraus form.

[F5] [[thm-qsm-dt-gksl-sufficient]]: every finite GKSL generator has a norm-continuous semigroup of channels for $t\geq0$, with the operator exponential defined by its norm-convergent series.

[F6] [[cor-finite-dimensional-normed-spaces-are-banach]]: every finite-dimensional real or complex normed space is complete.

[F7] [[lem-cm-integral-and-ftc-for-continuous-normed-space-curves]]: a continuous curve into a complete normed real vector space has a norm-Riemann integral, its indefinite integral differentiates to the curve, and bounded-interval integrals are additive.

[F8] [[lem-qsm-dt-finite-trace-pairing-cyclicity]]: setting the rectangular dimensions equal gives square trace cyclicity.

[F9] [[lem-exponential-series-of-a-bounded-operator]]: the operator-norm exponential series satisfies $E(0)=I$, $E'(t)=AE(t)=E(t)A$, and $E(t+s)=E(t)E(s)$, with the stated quadratic remainder bound.

## Proof




1.1 Let $\mathcal E=\operatorname{End}_{\mathbb C}(M_d(\mathbb C))$ with its induced operator norm. It has finite complex dimension $d^4$, so its underlying real normed space is complete by [F6]. For small $h>0$, set $A_h=h^{-1}\int_0^hT_s\,ds$, using [F7]. The integral norm bound in [F7] and norm continuity at zero give $\|A_h-I\|\leq\sup_{0\leq s\leq h}\|T_s-I\|\to0$; hence $\|I-A_h\|<1$ for sufficiently small $h$. The series $B_N:=\sum_{k=0}^N(I-A_h)^k$ is Cauchy in the finite-dimensional complete map space: the induced operator norm is submultiplicative, so $\|(I-A_h)^k\|\leq\|I-A_h\|^k$, and the geometric series converges to a limit $B$. The telescoping identities $A_hB_N=B_NA_h=I-(I-A_h)^{N+1}$ pass to the limit, so $A_hB=BA_h=I$ and $A_h$ is invertible. The semigroup law gives $T_tA_h=h^{-1}\int_t^{t+h}T_u\,du$. By additivity and the fundamental theorem [F7], this moving integral has derivative $(T_{t+h}-T_t)/h$ for $t>0$, and the same right derivative at $t=0$. Right multiplication by $A_h^{-1}$ yields $T'_t=T_tG_h$, where $G_h=(T_h-I)A_h^{-1}/h$, with right derivative $G_h$ at zero. Since that right derivative is unique, $G_h$ is independent of all sufficiently small $h$; set $\mathcal L=G_h$. [given, F6, F7, algebra]

2.1 For $t>0$, differentiating the product in step 1.1 gives $\frac{d}{dt}(T_te^{-t\mathcal L})=T_t\mathcal L e^{-t\mathcal L}-T_t\mathcal L e^{-t\mathcal L}=0$; [F9] supplies the derivative and initial value of the matrix exponential. Continuity at zero gives $T_0e^0=I$, so $T_te^{-t\mathcal L}=I$ and $T_t=e^{t\mathcal L}$. Any generator of this semigroup must equal its right derivative at zero, so $\mathcal L$ is unique. [step 1.1, F9, algebra]

2.2 Each $T_t$ preserves adjoints: it is positive by [F1], and every Hermitian matrix is a difference of two positive matrices by [F3]. Taking the right derivative at zero shows $\mathcal L(X^*)=\mathcal L(X)^*$. Differentiating $\operatorname{Tr}(T_tX)=\operatorname{Tr}X$ also gives $\operatorname{Tr}(\mathcal L(X))=0$ for every $X$. Consequently $J(\mathcal L)$ is Hermitian: $J(\mathcal L)^*=\sum_{i,j}E_{ji}\otimes\mathcal L(E_{ij})^*=\sum_{i,j}E_{ji}\otimes\mathcal L(E_{ji})=J(\mathcal L)$ after reindexing. [given, F1, F3, step 1.1, algebra]

3.1 Let $\Omega=\sum_{i=1}^d|i\rangle\otimes|i\rangle$. By [F4], $J(T_t)\geq0$, and step 2.1 together with the quadratic remainder in [F9] gives $J(T_t)=|\Omega\rangle\langle\Omega|+tJ(\mathcal L)+o(t)$. For every $v\perp\Omega$, dividing $\langle v,J(T_t)v\rangle\geq0$ by $t>0$ and taking $t\downarrow0$ gives $\langle v,J(\mathcal L)v\rangle\geq0$. Put $e=\Omega/\sqrt d$, $Q=I-|e\rangle\langle e|$, $M=QJ(\mathcal L)Q$, $z=QJ(\mathcal L)e$, and $a=\langle e,J(\mathcal L)e\rangle\in\mathbb R$. Then $M\geq0$, and the block decomposition relative to $\mathbb Ce\oplus e^\perp$ is $J(\mathcal L)=M+|e\rangle\langle z|+|z\rangle\langle e|+a|e\rangle\langle e|$. [given, F3, F4, F9, step 2.1, step 2.2, algebra]

4.1 By [F3], write $M=\sum_{b=1}^{q}|w_b\rangle\langle w_b|$, where $q=\operatorname{rank}M\leq d^2-1$, absorbing each positive eigenvalue into its eigenvector. Define $L_b$ by $w_b=\sum_i|i\rangle\otimes L_b|i\rangle$, and define $K$ by $k:=\sum_i|i\rangle\otimes K|i\rangle=z/\sqrt d+(a/(2d))\Omega$. Direct expansion of $J(\Theta)=\sum_{ij}E_{ij}\otimes\Theta(E_{ij})$ gives $J(X\mapsto L_bXL_b^*)=|w_b\rangle\langle w_b|$, $J(X\mapsto KX)=|k\rangle\langle\Omega|$, and $J(X\mapsto XK^*)=|\Omega\rangle\langle k|$. The latter two sum to $|e\rangle\langle z|+|z\rangle\langle e|+a|e\rangle\langle e|$. Equality of Choi matrices gives equality on every input matrix unit because its $(i,j)$ block is $\Theta(E_{ij})$; linearity then gives equality on all matrices. Thus $\mathcal L(X)=\sum_bL_bXL_b^*+KX+XK^*$. [step 3.1, F3, F4, algebra]

5.1 Taking traces in step 4.1 and using finite cyclicity [F8] gives $\operatorname{Tr}(X(K+K^*+\sum_bL_b^*L_b))=0$ for every $X$. Testing on all matrix units forces $K+K^*+\sum_bL_b^*L_b=0$. Set $H=(i\hbar/2)(K-K^*)$; then $H=H^*$ and $K=-\frac12\sum_bL_b^*L_b-iH/\hbar$. Substitution into step 4.1 gives the finite GKSL form in [F2] with at most $d^2-1$ jumps. [given, F2, F8, step 4.1, algebra]

6.1 Conversely, [F5] gives a norm-continuous channel semigroup from every finite GKSL generator. [F5] ∎

