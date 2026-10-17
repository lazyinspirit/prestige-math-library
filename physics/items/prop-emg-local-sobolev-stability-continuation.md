---
id: prop-emg-local-sobolev-stability-continuation
kind: proposition
title: "Local Sobolev stability and continuation for the reduced electrovacuum system"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 7
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - def-countable-choice
  - def-emg-electrovacuum-cauchy-system
  - def-emg-periodic-high-sobolev-state
  - thm-emg-local-high-sobolev-electrovacuum
  - lem-emg-coupled-reduced-einstein-evolution
  - thm-emg-symmetric-hyperbolic-research-supplier
  - def-gr-periodic-symmetric-hyperbolic-system
  - thm-gr-periodic-symmetric-hyperbolic-existence
  - thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability
  - lem-gr-smooth-composition-and-commutator-estimates
  - lem-gr-periodic-sobolev-algebra
  - lem-gr-periodic-sobolev-embedding
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emg-electrovacuum-cauchy-system: mathematical-premise
  def-emg-periodic-high-sobolev-state: mathematical-premise
  thm-emg-local-high-sobolev-electrovacuum: mathematical-premise
  lem-emg-coupled-reduced-einstein-evolution: mathematical-premise
  thm-emg-symmetric-hyperbolic-research-supplier: mathematical-premise
  def-gr-periodic-symmetric-hyperbolic-system: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-existence: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability: mathematical-premise
  lem-gr-smooth-composition-and-commutator-estimates: mathematical-premise
  lem-gr-periodic-sobolev-algebra: mathematical-premise
  lem-gr-periodic-sobolev-embedding: mathematical-premise
sources:
  references:
    - title: "P. T. Chruściel, An introduction to the Cauchy problem for the Einstein equations, Roscoff lecture notes (2011), §1.6, printed pp. 23–25."
      url: "https://gravity.univie.ac.at/fileadmin/user_upload/i_gravity_physics/material/teaching/WS_2012/Roscoff.pdf"
    - title: "M. Alcubierre, J. C. Degollado and M. Salgado, The Einstein-Maxwell system in 3+1 form and initial data for multiple charged black holes, arXiv:0907.1151v2 (2009), §II.C, printed pp. 8–9."
      url: "https://arxiv.org/pdf/0907.1151"
verification:
  precheck: pending
---

## Statement

Assume $\mathrm{AC}_\omega$ and the conditional local existence theorem [[thm-emg-local-high-sobolev-electrovacuum]]. Let $s\ge5$, let a harmonic-reduced source-free Einstein–Maxwell solution on $[t_0,T)$ have first-order state $U=(g,p,q,e,b)\in L^\infty H^s\cap C H^{s-1}$ with $\partial_tU\in L^\infty H^{s-1}$, and suppose its values stay in a fixed compact admissible state set and $\sup_{t<T}\|U(t)\|_{H^s}<\infty$. If $T$ is finite and lies inside the smooth coefficient-time domain, the reduced solution extends through $T$ to a larger interval. If the original state has $p=\bar\nabla_0g$, $q_i=\bar\nabla_i g$, vanishing harmonic vector $H$, and satisfies the full source-free Einstein–Maxwell equations, the extension has these same properties and extends the full development. The same conclusion holds at a finite left endpoint. On every common interval where two reduced solutions have the same fixed harmonic background, compact-state range and uniform $H^s$ bound, their states are unique and satisfy an $H^{s-1}$ continuous-dependence estimate.

## Facts & Assumptions

**Given:** Countable Choice, the real componentwise Fourier $H^s(\mathbb T^3_{2\pi})$ state and the bounded-state reduced Einstein–Maxwell solution in the Statement.

[F1] [[thm-emg-local-high-sobolev-electrovacuum]] gives the full solution regularity, derivative-variable identities, propagation of the Einstein and Maxwell constraints, harmonic gauge, and the Maxwell transport, stress and Einstein subsidiary identities used below. The endpoint is restarted with [L1] in the same reduced state, rather than reinitializing the special lapse/shift jet of that theorem. Its use remains conditional on the CP01 draft carriers recorded there, each of which has precheck pending and is listed in the batch-6 manifest inventory.

[L1] Draft supplier [[thm-emg-symmetric-hyperbolic-research-supplier]]: for integer $s\ge5$, smooth periodic symmetric coefficient matrices with uniformly positive time matrix on a compact admissible state neighborhood, and initial $H^s$ data with values in that neighborhood and bounded norm, there is a common local solution with $L^\infty H^s\cap C H^{s-1}$ bounds and $\partial_tU\in L^\infty H^{s-1}$. Its item file is listed in batch 6; its status is draft and its verification precheck is pending; this input remains conditional.

[F2] [[thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability]] proves uniqueness and $H^{s-1}$ continuous dependence for classical periodic symmetric-hyperbolic solutions with common compact-state and $H^s$ bounds. Its inspected statement assumes $\mathrm{AC}_\omega$ and a common existence interval; its published carrier has precheck pending.

[F3] [[thm-gr-periodic-symmetric-hyperbolic-existence]] gives a common existence interval and $\partial_tU\in L^\infty H^{s-1}$ for the bounded data class of the preceding supplier. Its published carrier has verification precheck pending.

[F4] [[def-emg-periodic-high-sobolev-state]] fixes $\|u\|_{H^s}^2=\sum_{k\in\mathbb Z^3}(1+|k|^2)^s|\widehat u(k)|^2$ componentwise. [[lem-gr-smooth-composition-and-commutator-estimates]] and [[lem-gr-periodic-sobolev-algebra]] give the coefficient/product bounds on compact state sets, and [[lem-gr-periodic-sobolev-embedding]] gives $H^q\hookrightarrow C^0$ when $q>3/2$.

[F5] [[lem-emg-coupled-reduced-einstein-evolution]] verifies the concrete reduced coefficient family on the open admissible state set: its metric time block is $\operatorname{diag}(I,-g^{00}I,g^{ij}I)$, its Maxwell time block is $\alpha^{-1}I_6$, every spatial block is symmetric, and all coefficients and lower-order terms are smooth functions of the first-order state and the fixed smooth background. This verification applies to arbitrary admissible reduced states, including endpoint states with nonzero shift; it requires no constraints or special harmonic initial jet.

## Proof

1.1 By [F5], the reduced equation has the form $A^0(t,x,U)\partial_tU+A^i(t,x,U)\partial_iU+B(t,x,U)=0$ in the sense of [[def-gr-periodic-symmetric-hyperbolic-system]]. Its time matrix is $\operatorname{diag}(I,-g^{00}I,g^{ij}I,\alpha^{-1}I_6)$, positive definite throughout the admissible open set. Every spatial matrix is symmetric: the metric wave blocks and the Maxwell curl blocks are symmetric, while the shift adds a scalar identity to the latter. The algebraic stress and the frame derivatives, expressed using $p,q$, create only smooth zero-order terms, so there is no off-diagonal derivative coupling. Enclose the fixed compact state range in the interior of a larger compact subset of this open set; on that subset and a compact coefficient-time slab containing $T$ in its interior, smoothness and strict positivity give bounded coefficient derivatives and a uniform positive time-matrix lower bound. These verify the concrete hypotheses required by [L1] and [F3] at the restart. Since $\|U\|_{H^s}$ is uniformly bounded and $H^{s-1}$ is an algebra for $s\ge5$, the equation and [F4] also give $\|\partial_tU\|_{H^{s-1}}\le C_R$ near $T$. [given, L1, F3, F4, F5, algebra]

2.1 For each finite Fourier projection $P_N$, every coefficient of $P_NU$ is absolutely continuous and its derivative is the corresponding coefficient of $P_N\partial_tU$. Thus $\|P_NU(t)-P_NU(t')\|_{H^{s-1}}\le C_R|t-t'|$. Letting $N\to\infty$ and using Fourier convergence in $H^{s-1}$ gives the same estimate for $U(t)-U(t')$. Hence $U(t)$ has a strong $H^{s-1}$ limit $U_T$ as $t\uparrow T$. [step 1.1, F3, F4, algebra]

3.1 For each finite frequency set $\{|k|\le N\}$, strong convergence of its coefficients gives
$$\sum_{|k|\le N}(1+|k|^2)^s|\widehat U_T(k)|^2=\lim_{t\uparrow T}\sum_{|k|\le N}(1+|k|^2)^s|\widehat U(t,k)|^2\le R^2,$$
where $R=\sup_{t<T}\|U(t)\|_{H^s}$. Taking the supremum over $N$ in the Fourier definition [F4] proves $U_T\in H^s$ and $\|U_T\|_{H^s}\le R$. By the embedding in [F4], $U(t)\to U_T$ uniformly in space. Since each $U(t,x)$ lies in the fixed compact state set, the closedness of that set gives $U_T(x)$ in the same set for every $x$. [step 2.1, F4, algebra]

4.1 For the full-development conclusion, assume the original solution has the compatibility, harmonic and full-equation properties stipulated in the Statement. The derivative identities from [F1] then pass to $U_T$: $q_T=\bar\nabla_i g_T$ because these relations are continuous in the strong $H^{s-1}$ limit. Since $q_T\in H^s$, the Fourier norm identity gives $g_T\in H^{s+1}$; likewise $p_T,e_T,b_T\in H^s$. At the endpoint order $H^3$ needed when $s=5$, the Fourier convolution estimate $\langle k\rangle^3\le4(\langle\ell\rangle^3+\langle k-\ell\rangle^3)$ and $\|\widehat u\|_{\ell^1}\le(\sum_k\langle k\rangle^{-6})^{1/2}\|u\|_{H^3}$ prove $\|uv\|_{H^3}\le C\|u\|_{H^3}\|v\|_{H^3}$; the same argument with exponent $2$ proves the $H^2$ product estimate. The chain rule through order three, $H^3\hookrightarrow C^1$, and Fourier approximation give continuity of smooth composition in $H^3$ on compact value sets: first derivatives converge uniformly, higher derivatives converge in $L^2$, and every chain-rule product therefore converges in $L^2$. In particular, matrix inversion is continuous in $H^3$ on a compact set of positive-definite metrics. For $s\ge6$ the supplied algebra/composition estimates at $H^{s-2}\ge H^4$ apply directly, and for $s=5$ these local $H^3$ estimates cover the curvature and connection products. The constraints involve at most two spatial derivatives of $h_T$ and one derivative of $K_T,e_T,b_T$, which converge in $H^{s-2}$ from the first-order state and its derivative identities; each inverse-metric factor and each product in the constraint expressions is thus continuous at the endpoint. The harmonic vector is a smooth function of $(g_T,p_T,q_T)$, so $H_T=0$ as the limit of $H(t)=0$. Therefore $U_T$ determines constrained data of precisely the regularity required by [F1]. [step 3.1, F1, F4, algebra]

5.1 Restart the same harmonic-reduced coefficient system of [F5] at time $T$ with the actual complete state $U_T$, keeping the fixed background and coordinates unchanged. The coefficients are smooth on the same time-state domain, $T$ is interior to its time interval, and step 3.1 supplies an $H^s$ datum with compact admissible range and bounded norm. Applying [L1] (equivalently [F3] after translating time) gives a reduced solution $V$ on $(T-\varepsilon,T+\varepsilon)$ with $V(T)=U_T$. This gives a reduced extension candidate for every state in the Statement, without reinitialization to lapse one, shift zero, or the special metric jet of the original initial slice. For the full-development conclusion, assume now the additional properties used in step 4.1. The reduction's equations propagate $q_i-\bar\nabla_i g=0$ by the homogeneous background-commutator ODE, so $V$ has the required metric derivative identities. It has the same $H^s$ bounds and compact-state control as the local solver class; the spacetime-regularity argument in proof step 4.1 of [F1], which uses only those bounds, the derivative identities and the fixed smooth coefficients, applies to $V$ after translating time and yields $g_V\in C^3$ and $F_V\in C^2$. Its zero initial Maxwell divergence residuals from step 4.1 propagate by the normal-form transport argument of [F1]; the coordinate time foliation is smooth and its normal is $C^1$ at this regularity. Thus both full Maxwell equations hold, and the explicit classical stress identity carried by [F1] gives conservation at the restarted $C^3$ metric/$C^2$ field regularity; no smooth-only stress theorem is applied. The harmonic residual identity from [F1] gives the homogeneous wave equation for $H$. Initially $H=0$ by step 4.1, so its tangential derivatives vanish. In any orthonormal frame with future unit time vector $n$, the Einstein residual is $E_{ab}=\tfrac12(\nabla_aH_b+\nabla_bH_a-g_{ab}\nabla_cH^c)$, hence $E(n,n)=\tfrac12\nabla_nH_n$ and $E(n,\mathsf e_i)=\tfrac12\nabla_nH_i$ there. The endpoint Einstein constraints from step 4.1 give $\nabla_nH=0$. The same local wave-energy uniqueness argument of [F1], valid for this positive symmetric wave block with bounded coefficient derivatives, yields $H=0$ near the endpoint slice. Therefore $V$ is a full solution. [step 3.1, step 4.1, L1, F1, F3, F5, algebra]

6.1 On the overlap before $T$, compare $V$ and the old solution $U$ using the difference-energy estimate [F2] on $[t,t']$ with $t<t'<T$, in the reverse time direction. The compact state sets and $H^s$ norms of both solutions have common bounds, so its constant is uniform as $t'\uparrow T$. Their strong $H^{s-1}$ traces both tend to $U_T$, giving $\|U(t)-V(t)\|_{H^{s-1}}\le C e^{C(t'-t)}\|U(t')-V(t')\|_{H^{s-1}}\to0$. Thus the solutions agree on the overlap, and $V$ extends the original reduced solution through $T$, and the full development when the additional hypotheses hold. The same estimate identifies any two continuations. Time reversal gives the left-endpoint case. On each common interval the same [F2] estimate gives the stated $H^{s-1}$ continuous dependence, with constants depending on the coefficient time slab, compact state set, norm bound and $s$. [step 5.1, step 2.1, F2, algebra] ∎
