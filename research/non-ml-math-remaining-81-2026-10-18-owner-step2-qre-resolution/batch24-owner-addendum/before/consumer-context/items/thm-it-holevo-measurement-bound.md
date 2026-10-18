---
id: thm-it-holevo-measurement-bound
kind: theorem
title: The finite Holevo measurement bound
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps: [def-it-finite-dimensional-quantum-relative-entropy, def-it-classical-quantum-state-and-holevo-information, thm-it-quantum-relative-entropy-channel-data-processing, lem-it-finite-povm-measurement-channel, def-qc-povm-and-outcome-law, thm-qc-povm-probabilities-normalize, def-qc-density-operator, thm-non-negative-operator-characterisations, prop-trace-is-linear]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §5.3.3"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, arXiv:1106.1445v8, Exercise 11.9.2"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

Let $X$ be a finite nonempty set, let $(p_x)$ be a probability vector, let $\rho_x$ be density operators on a nonzero finite-dimensional space $H_B$, and let $\bar\rho:=\sum_xp_x\rho_x$. For a finite POVM $(E_y)_{y\in Y}$ on $H_B$, define $w(y\mid x):=\operatorname{tr}(\rho_xE_y)$, $q_y:=\sum_xp_xw(y\mid x)$, and the classical mutual information

$$I(X:Y):=\sum_{x,y:p_xw(y\mid x)>0}p_xw(y\mid x)\ln\frac{w(y\mid x)}{q_y}.$$

Then

$$I(X:Y)\le\chi(\{p_x,\rho_x\})=S(\bar\rho)-\sum_{x:p_x>0}p_xS(\rho_x).$$

## Facts & Assumptions

**Given:** The finite ensemble, average state, POVM, and outcome probabilities in the Statement.

[F1] [[def-it-classical-quantum-state-and-holevo-information]]: $\chi=S(\bar\rho)-\sum_{p_x>0}p_xS(\rho_x)$ for the associated cq state.

[F2] [[def-it-finite-dimensional-quantum-relative-entropy]]: QRE is computed by the support-restricted spectral logarithm, with $+\infty$ when supports fail.

[F3] [[thm-it-quantum-relative-entropy-channel-data-processing]]: QRE cannot increase under a finite-dimensional quantum channel.

[F4] [[lem-it-finite-povm-measurement-channel]]: the POVM defines a channel whose output on a state has diagonal entries $\operatorname{tr}(\rho E_y)$.

[F5] [[thm-qc-povm-probabilities-normalize]]: each $w(\cdot\mid x)$ is a probability vector.

[F6] [[thm-non-negative-operator-characterisations]]: a non-negative operator with zero quadratic form at $v$ annihilates $v$.

[F7] [[prop-trace-is-linear]]: trace is linear over finite sums and scalar multiples.

## Proof

1.1 Fix $x$ with $p_x>0$. The operator $\bar\rho-p_x\rho_x=\sum_{z\ne x}p_z\rho_z$ is non-negative. If $v\in\ker\bar\rho$, then $0=\langle\bar\rho v,v\rangle\ge p_x\langle\rho_xv,v\rangle\ge0$, so [F6] gives $\rho_xv=0$. Thus $\ker\bar\rho\subseteq\ker\rho_x$ and $\operatorname{supp}(\rho_x)\subseteq\operatorname{supp}(\bar\rho)$; every $D(\rho_x\|\bar\rho)$ is finite. [given, F2, F6, algebra]

2.1 The measurement channel [F4] sends $\rho_x$ to the diagonal state with entries $w(y\mid x)$ and $\bar\rho$ to the diagonal state with entries $q_y$ by linearity [F7]. For $p_x>0$, if $w(y\mid x)>0$ then $q_y\ge p_xw(y\mid x)>0$. The QRE formula [F2] on diagonal states and data processing [F3] therefore give $D(\rho_x\|\bar\rho)\ge\sum_{y:w(y\mid x)>0}w(y\mid x)\ln\frac{w(y\mid x)}{q_y}$. [given, F2, F3, F4, F5, F7, step 1.1, algebra]

3.1 Multiply step 2.1 by $p_x$ and sum over $x$ with $p_x>0$. Trace linearity [F7] and $\bar\rho=\sum_xp_x\rho_x$ give $\sum_xp_xD(\rho_x\|\bar\rho)=\sum_{x:p_x>0}p_x\operatorname{tr}(\rho_x\ln\rho_x)-\operatorname{tr}(\bar\rho\ln\bar\rho)=\chi$ by [F1]. The right side is exactly the displayed $I(X:Y)$ by its definition. Hence $I(X:Y)\le\chi$. [given, F1, F7, step 2.1, algebra] ∎

