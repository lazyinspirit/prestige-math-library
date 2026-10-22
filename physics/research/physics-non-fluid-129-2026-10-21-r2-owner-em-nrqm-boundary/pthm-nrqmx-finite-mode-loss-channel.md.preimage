---
id: pthm-nrqmx-finite-mode-loss-channel
kind: physics-theorem
title: Pure loss channel and binomial thinning
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 7
deps:
  - post-nrqmx-finite-mode-light-matter-model
  - pthm-nrqmx-beam-splitter-count-statistics
  - lem-nrqm-composites-separable-partial-trace
  - lem-nrqm-composites-nuclear-bounded-cyclicity
  - lem-nrqm-composites-hilbert-tensor-construction
  - lem-nrqm-composites-bounded-tensor-maps
  - thm-nrqm-fock-and-equilibrium-fixed-mode-number-law
  - def-nrqm-measurement-framework-declared-measurements-and-instruments
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  post-nrqmx-finite-mode-light-matter-model: physical-assumption
  pthm-nrqmx-beam-splitter-count-statistics: physical-result
  lem-nrqm-composites-separable-partial-trace: mathematical-premise
  lem-nrqm-composites-nuclear-bounded-cyclicity: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  thm-nrqm-fock-and-equilibrium-fixed-mode-number-law: mathematical-premise
  def-nrqm-measurement-framework-declared-measurements-and-instruments: formulation-prerequisite
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
physical_scope: >-
  An exact conditional one-mode pure-loss model with a vacuum environment mode,
  a passive two-mode unitary and a trace over the environment. The channel,
  binomial thinning and coherent-state attenuation are model deductions on the
  full infinite-dimensional finite-mode Fock space. No detector efficiency,
  actual loss record, apparatus realization, continuum bath, weak-coupling
  limit or experimental data are asserted.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Christian Weedbrook et al., Gaussian Quantum Information, §§II.2.6 and V.2"
      url: "https://arxiv.org/pdf/1110.3234"
      locator: "§II.2.6, Eqs. (36)–(38), defines passive beam-splitter mixing; §V.2, the pure-loss case is a beam splitter mixing the signal with vacuum. The local proof establishes trace-class CPTP and the stated number/coherent outputs."
    - title: "Carlos Navarrete-Benlloch, Introduction to Quantum Optics, full lecture notes, §§II and IV.2"
      url: "https://arxiv.org/pdf/2203.13206"
      locator: "Finite oscillator Fock modes and single-mode light–matter model conventions; no continuum or detector-data result is imported."
verification:
  precheck: pending
---

## Statement

Assume AC and $\mathrm{AC}_\omega$, the assigned finite-mode model, a single input mode and a second mode prepared independently in vacuum $|0\rangle\langle0|$. For $0\le\eta\le1$, choose the passive unitary $U_\eta$ of the two-mode beam-splitter model with $t=\sqrt\eta$ and $r=\sqrt{1-\eta}$. For every trace-class operator $\rho$ on the one-mode Fock space, define
$$\Phi_\eta(\rho):=\operatorname{Tr}_2\!\left(U_\eta(\rho\otimes|0\rangle\langle0|)U_\eta^*\right),$$
where $\operatorname{Tr}_2$ is the trace-class partial trace over the environment mode. Here CPTP means complex-linear, trace-preserving, and positive after every finite-dimensional ancilla amplification on trace-class operators. The map $\Phi_\eta$ is CPTP. For $0<\eta<1$ and an input number state $|n\rangle$, its output state is
$$\Phi_\eta(|n\rangle\langle n|)=\sum_{k=0}^n\binom nk\eta^k(1-\eta)^{n-k}|k\rangle\langle k|,$$
so ideal number detection has the binomial-thinning law. At $\eta=0$ this number input is mapped to vacuum, and at $\eta=1$ it is unchanged. For a coherent input $|\alpha\rangle$, its output is $|\sqrt\eta\,\alpha\rangle\langle\sqrt\eta\,\alpha|$ for every $0\le\eta\le1$. On arbitrary input states, $\Phi_0$ maps to vacuum and $\Phi_1$ is the identity.

## Statement references

[[post-nrqmx-finite-mode-light-matter-model]]

[[pthm-nrqmx-beam-splitter-count-statistics]]

[[lem-nrqm-composites-separable-partial-trace]]

[[lem-nrqm-composites-nuclear-bounded-cyclicity]]

[[lem-nrqm-composites-hilbert-tensor-construction]]

[[lem-nrqm-composites-bounded-tensor-maps]]

[[thm-nrqm-fock-and-equilibrium-fixed-mode-number-law]]

[[def-nrqm-measurement-framework-declared-measurements-and-instruments]]

[[def-axiom-of-choice]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** A one-mode trace-class input $\rho$, an independent vacuum environment mode, $0\le\eta\le1$, the passive unitary $U_\eta$ with real amplitudes $\sqrt\eta,\sqrt{1-\eta}$, and the trace-class partial trace over the second mode.

[A1] The finite-mode assignment adopts the mode Fock spaces and ideal photon-counting model; the independent vacuum environment is a stated model preparation, not an observed state ([[post-nrqmx-finite-mode-light-matter-model]]).

[A2] Assume AC for the finite-mode Bogoliubov implementation and $\mathrm{AC}_\omega$ for the trace-class partial trace and countable Fock constructions. These are mathematical assumptions, not physical postulates ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] For the passive unitary with first-column amplitudes $(t,r)$ and vacuum input on the second mode, $U_C|n,0\rangle=\sum_{k=0}^n\sqrt{\binom nk}\,t^kr^{n-k}|k,n-k\rangle$ and $U_C|\alpha,0\rangle=|t\alpha,r\alpha\rangle$ ([[pthm-nrqmx-beam-splitter-count-statistics]]).

[F2] For arbitrary complex Hilbert spaces $H,K$, the trace-class partial trace $\operatorname{Tr}_K:\mathcal S_1(H\widehat\otimes K)\to\mathcal S_1(H)$ is trace-norm contractive, preserves trace and positivity, and on rank-one tensors satisfies $\operatorname{Tr}_K T_{u\otimes v,u'\otimes v'}=\langle v,v'\rangle T_{u,u'}$; its proof assumes $\mathrm{AC}_\omega$ ([[lem-nrqm-composites-separable-partial-trace]]).

[F3] On trace-class operators, complete positivity means that every finite matrix amplification preserves positive trace-class block operators, and trace preservation means equality of input and output traces ([[def-nrqm-measurement-framework-declared-measurements-and-instruments]]). Only these mathematical definitions are used; no measurement update is inferred.

[F4] The one-mode occupation vectors are a complete orthonormal family, and the coherent vector is normalized with expansion $|\alpha\rangle=e^{-|\alpha|^2/2}\sum_n\alpha^n|n\rangle/\sqrt{n!}$ ([[thm-nrqm-fock-and-equilibrium-fixed-mode-number-law]]).

[F5] For trace-class $T$ and bounded $B$, $\operatorname{tr}(BT)=\operatorname{tr}(TB)$, and every trace-class input has a nuclear rank-one series convergent in trace norm ([[lem-nrqm-composites-nuclear-bounded-cyclicity]]).

[F6] Bounded maps tensor to bounded maps on the completed Hilbert tensor product ([[lem-nrqm-composites-bounded-tensor-maps]]). For finite-dimensional $\mathbb C^q$, expand in an orthonormal basis of the first factor to see $I_q\otimes J$ preserves norm whenever $J$ does; the reassociation of three factors preserves the elementary-tensor inner products and therefore extends by density to a unitary, using the completion construction ([[lem-nrqm-composites-hilbert-tensor-construction]]).

## Proof

1.1 Let $J:\mathcal F_s(\mathbb C)\to\mathcal F_s(\mathbb C)\widehat\otimes\mathcal F_s(\mathbb C)$ be the isometry $J\psi=\psi\otimes|0\rangle$, so $J^*J=I$ by [F6]. For each finite-dimensional ancilla $\mathbb C^q$, $W_q:=I_q\otimes J$ is also an isometry by [F6]. If $T\ge0$ is trace class, then $W_qTW_q^*\ge0$ because $\langle W_qTW_q^*x,x\rangle=\langle T W_q^*x,W_q^*x\rangle\ge0$. For arbitrary trace-class $T$, write $T=\sum_jT_{u_j,v_j}$ as a nuclear series by [F5]. Directly from the rank-one definition and the adjoint identity, $W_qT_{u_j,v_j}W_q^*x=\langle W_q^*x,v_j\rangle W_qu_j=\langle x,W_qv_j\rangle W_qu_j=T_{W_qu_j,W_qv_j}x$. The resulting rank-one series converges in trace norm since $\sum_j\|W_qu_j\|\|W_qv_j\|=\sum_j\|u_j\|\|v_j\|<\infty$, and its operator-norm sum is $W_qTW_q^*$. Since $W_q$ preserves inner products, [F5]'s rank-one trace formula gives $\operatorname{tr}(W_qTW_q^*)=\sum_j\langle W_qu_j,W_qv_j\rangle=\sum_j\langle u_j,v_j\rangle=\operatorname{tr}T$. Thus adjoining vacuum is completely positive and trace-preserving. [A1, A2, F5, F6, algebra]

1.2 For each finite ancilla $\mathbb C^q$, the amplification of the partial-trace map is, after the canonical unitary reassociation from [F6], the partial trace over the environment Fock space on $\mathbb C^q\widehat\otimes\mathcal F_s(\mathbb C)\widehat\otimes\mathcal F_s(\mathbb C)$. By [F2] it maps positive trace-class operators to positive trace-class operators and preserves their trace. Therefore the partial trace is completely positive and trace-preserving under [F3]. [A2, F2, F3, F6, algebra]

1.3 For $0<\eta<1$ and input $|n\rangle\langle n|$, [F1] gives the joint pure state $\sum_{k=0}^n c_k|k,n-k\rangle$ with $c_k=\sqrt{\binom nk}\eta^{k/2}(1-\eta)^{(n-k)/2}$. Expanding its rank-one density and applying the rank-one partial-trace formula [F2], cross terms with $k\ne\ell$ vanish because $\langle n-\ell,n-k\rangle=\delta_{k\ell}$. The reduced state is $\sum_k|c_k|^2|k\rangle\langle k|$, which is the displayed mixture; its ideal number-PVM law is the binomial distribution by the declared outcome model [A1]. [A1, F1, F2, algebra]

1.4 For input $|\alpha\rangle\langle\alpha|$, [F1] gives the product output $|t\alpha\rangle\langle t\alpha|\otimes|r\alpha\rangle\langle r\alpha|$. The rank-one partial-trace formula [F2] leaves the first factor unchanged; with $t=\sqrt\eta$, this is $|\sqrt\eta\,\alpha\rangle\langle\sqrt\eta\,\alpha|$. [F1, F2, algebra]

1.5 At $\eta=0$, the beam-splitter expansion [F1] gives $U_0|m,0\rangle=|0,m\rangle$ for every $m\in\mathbb N_0$; at $\eta=1$ it gives $U_1|m,0\rangle=|m,0\rangle$. The finite linear span of the one-mode occupation basis is dense by [F4], so boundedness of the unitaries extends these identities to $U_0(\psi\otimes|0\rangle)=|0\rangle\otimes\psi$ and $U_1(\psi\otimes|0\rangle)=\psi\otimes|0\rangle$ for all one-mode vectors $\psi$. [F1, F4, algebra]

2.1 Conjugation by $U_\eta$ is completely positive because unitary conjugation preserves positivity on every finite ancilla amplification. It preserves trace for every trace-class input by [F5], since $\operatorname{tr}(U_\eta T U_\eta^*)=\operatorname{tr}(T U_\eta^*U_\eta)=\operatorname{tr}T$; by [F6], $I_q\otimes U_\eta$ is unitary and the same identity holds on every finite ancilla amplification. Composition with step 1.1 preserves both properties. [F1, F5, F6, step 1.1, algebra]

3.1 By steps 1.1, 1.2 and 2.1, the composition defining $\Phi_\eta$ maps trace-class operators to trace-class operators, is completely positive under every finite ancilla, and preserves trace. It is CPTP on the full infinite-dimensional one-mode trace-class space; no finite-dimensional Choi theorem is used. [F2, F3, step 1.1, step 1.2, step 2.1, algebra]

4.1 For rank-one $T_{u,v}$, the partial-trace formula [F2] applied to the two isometries in step 1.5 yields $\Phi_0(T_{u,v})=\langle u,v\rangle|0\rangle\langle0|=\operatorname{tr}(T_{u,v})|0\rangle\langle0|$ and $\Phi_1(T_{u,v})=T_{u,v}$. By [F5], every trace-class input has a nuclear series of rank-one terms converging in trace norm. The partial trace is trace-norm contractive by [F2], and bounded isometric and unitary conjugations are trace-norm continuous by [F5]; the trace is trace-norm continuous by [F5]. Passing to the limit gives $\Phi_0(\rho)=\operatorname{tr}(\rho)|0\rangle\langle0|$ and $\Phi_1(\rho)=\rho$. In particular these are vacuum and identity on density operators. [F2, F5, step 1.5, algebra] ∎

