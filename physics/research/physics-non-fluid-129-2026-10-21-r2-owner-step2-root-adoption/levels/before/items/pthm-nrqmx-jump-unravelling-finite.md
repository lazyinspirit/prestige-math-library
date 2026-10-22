---
id: pthm-nrqmx-jump-unravelling-finite
kind: physics-theorem
title: Finite jump expansion and ensemble equation
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 1
deps:
  - post-nrqmx-finite-open-model
  - def-nrqmx-finite-jump-trajectories
  - def-qsm-dt-gksl-definition
  - thm-qsm-dt-gksl-sufficient
  - lem-qsm-dt-finite-matrix-trace-ideal
  - cor-finite-dimensional-normed-spaces-are-banach
  - lem-exponential-series-of-a-bounded-operator
  - def-operator-norm
  - def-darboux-integral
  - thm-continuous-implies-integrable
  - thm-newton-leibniz-with-interior-derivative
  - lem-derivative-of-a-power
  - lem-nrqmx-continuous-simplex-integrals
dependency_roles:
  post-nrqmx-finite-open-model: physical-assumption
  def-nrqmx-finite-jump-trajectories: mathematical-premise
  def-qsm-dt-gksl-definition: mathematical-premise
  thm-qsm-dt-gksl-sufficient: mathematical-premise
  lem-qsm-dt-finite-matrix-trace-ideal: mathematical-premise
  cor-finite-dimensional-normed-spaces-are-banach: mathematical-premise
  lem-exponential-series-of-a-bounded-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-darboux-integral: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  lem-nrqmx-continuous-simplex-integrals: mathematical-premise
proof_strategy: direct
physical_scope: "The exact finite-dimensional time-homogeneous GKSL
  approximation with finitely many bounded jump matrices. The jump expansion is
  one mathematical ensemble representation; it is not asserted to be unique, to
  identify an actual measurement record, or to arise from a microscopic
  reservoir."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Lin Lin and Nathan Wiebe, Quantum Algorithms for Scientific Computation,
        Chapter 21, §21.1"
      url: "https://math.berkeley.edu/~linlin/qasc/live_notes_0315.pdf"
      locator: "Equation (21.1), printed p. 307, for the finite GKSL generator and
        jump operators; the ordered finite-time branch expansion is derived
        locally."
---

## Statement

Let $d\geq1$, let $H=H^*\in M_d(\mathbb C)$ have units joules, let $\hbar>0$ have units joule-seconds, and let $L_1,\ldots,L_r\in M_d(\mathbb C)$ be a finite family with units $\mathrm{s}^{-1/2}$, where $r\geq0$. For the selected time-homogeneous finite GKSL model, put $\mathcal L(X)=-\frac{i}{\hbar}[H,X]+\sum_{a=1}^r(L_aXL_a^*-\frac12\{L_a^*L_a,X\})$. With $K=-iH/\hbar-\frac12\sum_aL_a^*L_a$ and the finite branch operators of [[def-nrqmx-finite-jump-trajectories]], each no-jump operator $R(u)=e^{uK}$ is a contraction, each branch state $W_{\mathbf a,\mathbf s}(t)\rho W_{\mathbf a,\mathbf s}(t)^*$ is positive for $\rho\geq0$, and for every density matrix $\rho$ and $t\geq0$,

$$e^{t\mathcal L}(\rho)=\sum_{n=0}^{\infty}\ \sum_{\mathbf a\in\{1,\ldots,r\}^n}\ \int_{0<s_1<\cdots<s_n<t}W_{\mathbf a,\mathbf s}(t)\rho W_{\mathbf a,\mathbf s}(t)^*\,ds_1\cdots ds_n,$$

where the $n=0$ term is $R(t)\rho R(t)^*$ and branches with $n\geq1$ are absent when $r=0$. The series converges in trace norm, uniformly on each bounded time interval; the sum of all branch weights is one. This is an ensemble representation of the finite GKSL solution, not a unique microscopic trajectory or a claim about a particular detector.

## Statement references

[[def-nrqmx-finite-jump-trajectories]]

[[def-qsm-dt-gksl-definition]]

[[thm-qsm-dt-gksl-sufficient]]

## Facts & Assumptions

**Given:** Finite dimension $d\geq1$, finite $r\geq0$, $H=H^*$, $\hbar>0$, jump matrices $L_a$, a density matrix $\rho$, and $t\geq0$.

[A1] [[post-nrqmx-finite-open-model]]: the time-homogeneous finite GKSL family is a separately selected approximation within the open-system model; it is not derived from the exact finite unitary reduction, and its time parameter $t$ is elapsed physical time measured in seconds.

[F1] [[def-qsm-dt-gksl-definition]]: $\mathcal L(X)=-\frac{i}{\hbar}[H,X]+\sum_a(L_aXL_a^*-\frac12\{L_a^*L_a,X\})$.

[F2] [[def-nrqmx-finite-jump-trajectories]]: $K=-iH/\hbar-\frac12\sum_aL_a^*L_a$, $R(u)=e^{uK}$, and $W_{\mathbf a,\mathbf s}(t)$ is the ordered product of no-jump factors and jump matrices; the branch state is $W\rho W^*$ and its weight density is the real scalar $w=\operatorname{Tr}(W\rho W^*)$. For $n\geq1$, continuous functions on the ordered simplex with values in $M_d(\mathbb C)$ or in the finite-dimensional complex vector space of complex-linear maps $M_d(\mathbb C)\to M_d(\mathbb C)$ are integrated by repeated componentwise Riemann integration, splitting complex coordinates into real and imaginary parts; the value is basis-independent. A degenerate interval has integral zero, so the $n\geq1$ simplex at $t=0$ contributes zero. The $n=0$ contribution is the no-jump branch.

[F3] [[cor-finite-dimensional-normed-spaces-are-banach]]: every finite-dimensional normed matrix space is complete.

[F4] [[lem-exponential-series-of-a-bounded-operator]]: for a bounded operator $A$ on a Banach space, $e^{uA}$ is norm-continuous, differentiable with derivative $Ae^{uA}$, and satisfies $\|e^{uA}\|\leq e^{|u|\|A\|}$.

[F5] [[lem-qsm-dt-finite-matrix-trace-ideal]]: the finite matrix trace norm is complete, satisfies $\|AXB\|_1\leq\|A\|\,\|X\|_1\,\|B\|$, and $|\operatorname{Tr}X|\leq\|X\|_1$.

[F6] [[thm-qsm-dt-gksl-sufficient]]: $e^{t\mathcal L}$ is a trace-preserving finite channel for $t\geq0$.

[F7] [[def-operator-norm]]: for a bounded linear map between normed spaces, its operator norm is the supremum of the output norm over the input unit ball; here $\|\mathcal A\|_{1\to1}:=\sup_{\|X\|_1\leq1}\|\mathcal A(X)\|_1$.

[F8] [[def-darboux-integral]] and [[thm-continuous-implies-integrable]]: continuous real functions on compact intervals have Riemann integrals, interpreted by the Darboux definition.

[F9] [[thm-newton-leibniz-with-interior-derivative]]: if a real function is continuous on a closed interval, differentiable in its interior, and its derivative has a Riemann-integrable extension, the integral of that extension is the endpoint increment.

[F10] [[lem-derivative-of-a-power]]: for every integer $n\geq0$, $s\mapsto s^{n+1}$ is differentiable with derivative $(n+1)s^n$; constant scaling gives the corresponding monomial primitive.

[F11] [[lem-nrqmx-continuous-simplex-integrals]]: every continuous finite-dimensional integrand on the closed ordered simplex has the recursive componentwise Riemann integrals in [F2], with every partial integral continuous in the remaining parameters. These integrals commute with linear maps and finite sums, preserve nonnegativity for real scalar integrands, and have norm at most the supremum norm of the integrand times $t^n/n!$, including the stated zero-variable and zero-time conventions.

## Proof

**Proof technique:** split the bounded generator into no-jump and jump parts, iterate variation of constants, and control the remainder by a factorial bound.

1.1 Under [A1], put $D=\sum_aL_a^*L_a$ and $K=-iH/\hbar-D/2$. Then $K+K^*=-D$. The matrix space is complete by [F3], so [F4] differentiates $R(u)=e^{uK}$. For every vector $v$, $\frac{d}{du}\|R(u)v\|^2=\langle(K+K^*)R(u)v,R(u)v\rangle=-\sum_a\|L_aR(u)v\|^2\leq0$. Since $R(0)=I$, the continuous derivative is integrable by [F8], and [F9] gives $\|R(u)v\|\leq\|v\|$ for $u\geq0$, hence $R(u)$ is a contraction. [given, A1, F1, F2, F3, F4, F8, F9, algebra]

1.2 On $M_d(\mathbb C)$ define $\mathcal N(X)=KX+XK^*$, $\mathcal J(X)=\sum_aL_aXL_a^*$, and $\mathcal T_u=e^{u\mathcal L}$. By [F5], these finite sums of left and right matrix multiplications are bounded in trace norm. Expanding [F1] gives $\mathcal L=\mathcal N+\mathcal J$. Fix $t>0$. Integrate finite-dimensional matrix and superoperator entries by their real and imaginary components, using the repeated Riemann convention in [F2]. The curve $s\mapsto e^{(t-s)\mathcal N}\mathcal T_s$ has continuously differentiable entries by [F4]; its real and imaginary derivative components are continuous and hence integrable by [F8]. Differentiation gives $\frac{d}{ds}(e^{(t-s)\mathcal N}\mathcal T_s)=e^{(t-s)\mathcal N}\mathcal J\mathcal T_s$, since $\mathcal L=\mathcal N+\mathcal J$. Applying [F9] entrywise yields $\mathcal T_t=e^{t\mathcal N}+\int_0^t e^{(t-s)\mathcal N}\mathcal J\mathcal T_s\,ds$. This finite identity follows by induction on $N$: the base case is the displayed variation-of-constants identity, and substituting that identity for the final $\mathcal T_{s_1}$ in the remainder adds the next ordered-simplex term and a remainder with one more innermost time. Only finite linearity of the nested integrals is used; no integration order is exchanged. Thus, for each $N\geq0$, $\mathcal T_t=\sum_{n=0}^{N}S_n(t)+Q_{N+1}(t)$, where $S_0(t)=e^{t\mathcal N}$, $S_n(t)=\int_{0<s_1<\cdots<s_n<t}e^{(t-s_n)\mathcal N}\mathcal J e^{(s_n-s_{n-1})\mathcal N}\cdots\mathcal J e^{s_1\mathcal N}\,d\mathbf s$ for $n\geq1$, and $Q_m(t)=\int_{0<s_1<\cdots<s_m<t}e^{(t-s_m)\mathcal N}\mathcal J\bigl(\prod_{j=m-1,\ldots,1}e^{(s_{j+1}-s_j)\mathcal N}\mathcal J\bigr)\mathcal T_{s_1}\,d\mathbf s$ for $m=N+1$, where the product is ordered from left to right with descending $j$, and the empty product is the identity. For $m=1$ the intermediate exponential factors are absent: $Q_1(t)=\int_0^t e^{(t-s_1)\mathcal N}\mathcal J\mathcal T_{s_1}\,ds_1$, exactly the displayed variation-of-constants remainder. In particular there is no extra $e^{s_1\mathcal N}$ before $\mathcal T_{s_1}$. All these integrands are continuous in finite-dimensional coordinates on the closed ordered simplex; [F11] proves that every inner integral is continuous in its remaining parameters and hence the full repeated integral exists. The insertion of one further nested integral in the induction is therefore legitimate. [F1, F2, F4, F5, F8, F9, F11, algebra]

2.1 Left multiplication by $K$ and right multiplication by $K^*$ commute; multiplying their absolutely norm-convergent exponential series and grouping by total degree with the binomial formula yields $e^{u\mathcal N}(X)=e^{uK}Xe^{uK^*}=R(u)XR(u)^*$. This establishes the no-jump superoperator formula used in the norm estimates below. [F2, F3, F4, step 1.2, algebra]

3.1 From [F5] and [F7], $\|\mathcal J(X)\|_1\leq(\sum_a\|L_a\|^2)\|X\|_1$ and $\|\mathcal N(X)\|_1\leq2\|K\|\|X\|_1$, so the induced $1\to1$ norms are finite. By step 2.1 and the contraction in step 1.1, [F5] gives $\|e^{u\mathcal N}\|_{1\to1}\leq1$ for $u\geq0$. The ordered-simplex volume is $t^n/n!$: the zero-variable volume is $1$; if the $n$-variable volume is $s^n/n!$, then [F10] gives the primitive $s^{n+1}/(n+1)!$, and [F8] makes the integrand Riemann integrable, so [F9] evaluates the next repeated integral as $t^{n+1}/(n+1)!$. Induction proves the volume formula. The continuous-integrand norm bound in [F11], applied in the finite-dimensional superoperator space with norm $\|\cdot\|_{1\to1}$, now bounds each integral by that volume times its pointwise norm bound. Thus $\|S_n(t)\|_{1\to1}\leq(t\|\mathcal J\|_{1\to1})^n/n!$. By [F4], $\|\mathcal T_s\|_{1\to1}\leq e^{s\|\mathcal L\|_{1\to1}}$, so $\|Q_{N+1}(t)\|_{1\to1}\leq e^{t\|\mathcal L\|_{1\to1}}(t\|\mathcal J\|_{1\to1})^{N+1}/(N+1)!\to0$. Replacing $t$ by any bound $T$ gives summable bounds for all $0\leq t\leq T$ and a remainder tending uniformly to zero. Thus the series $\sum_n S_n(t)$ converges in induced trace norm to $\mathcal T_t$, uniformly on bounded time intervals. [F2, F4, F5, F7, F8, F9, F10, F11, step 1.1, step 1.2, step 2.1, algebra]

4.1 If $t=0$, then $\mathcal T_0=\operatorname{id}$ and $R(0)=I$; all positive-jump simplexes are empty, and the sole branch has weight $\operatorname{Tr}\rho=1$. For $t>0$, applying the operator identity from step 3.1 to $\rho$ and expanding each occurrence of $\mathcal J$ in $S_n(t)$ sums over labels $a_1,\ldots,a_n$. Step 2.1 turns each factor $e^{u\mathcal N}$ into the no-jump conjugation, so each integrand is $W_{\mathbf a,\mathbf s}(t)\rho W_{\mathbf a,\mathbf s}(t)^*$ by [F2]. This matrix is positive since $\langle W\rho W^*v,v\rangle=\langle\rho W^*v,W^*v\rangle\geq0$ for every vector $v$; this argument uses only $\rho\geq0$, proving branch positivity for all positive inputs. All label sums at fixed $n$ are finite, and [F11] allows moving those sums and the finite-dimensional linear trace through the nested integrals. Trace-norm convergence from step 3.1 and the trace bound in [F5] then allow taking the trace of the infinite series. Each integrated branch weight is nonnegative: its continuous real trace integrand is pointwise nonnegative, and [F11] preserves this at every successive integration. For each vector $v$, the finite-dimensional linear functional $X\mapsto\langle Xv,v\rangle$ likewise commutes with these integrals by [F11]; its nonnegative integrand proves that every integrated branch state is positive. This positivity and convergence argument has not assumed the complete positivity of the final ensemble map. By [F6], $\operatorname{Tr}(e^{t\mathcal L}\rho)=\operatorname{Tr}\rho=1$, so the nonnegative integrated branch weights sum to one. If $r=0$, then $\mathcal J=0$, all $S_n$ with $n\geq1$ vanish, and only the no-jump term remains. [F2, F4, F5, F6, F8, F11, step 1.2, step 2.1, step 3.1] ∎

## Remarks

The derivation establishes a representation of the chosen finite GKSL equation. It does not identify the branches with unique physical paths, a unique unravelling, or observed detector events.
