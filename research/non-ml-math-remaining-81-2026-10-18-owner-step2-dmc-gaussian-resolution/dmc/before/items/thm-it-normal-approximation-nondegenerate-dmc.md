---
id: thm-it-normal-approximation-nondegenerate-dmc
kind: theorem
title: Nondegenerate normal approximation for finite unconstrained DMCs
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps: [def-axiom-of-choice, def-standard-normal-and-normal-laws, lem-standard-normal-cdf-quantiles-and-symmetry, thm-it-berry-essen-independent-array, def-discrete-memoryless-channel, lem-discrete-memoryless-channel-block-kernels-are-stochastic, def-discrete-memoryless-channel-information-capacity, def-discrete-memoryless-channel-information-density, def-it-finite-mutual-information, def-qa-35-finite-probability-entropy-and-stochastic-matrices, lem-discrete-memoryless-channel-capacity-is-attained, lem-discrete-memoryless-channel-capacity-achieving-output-divergence-bound, def-fixed-length-channel-code, def-fixed-length-channel-code-errors, def-it-channel-dispersion, lem-it-dmc-dispersion-attains-minimum, lem-it-dmc-capacity-output-law-is-unique, lem-it-dmc-caid-conditional-variance-identity, thm-it-dmc-uniform-quadratic-capacity-decay, thm-it-one-shot-decision-threshold-achievability, thm-euclidean-heine-borel-pseudocompactness-and-extreme-values, thm-logarithm-derivative-and-integral, thm-algebra-of-derivatives, thm-chain-rule, thm-logarithm-slower-than-every-positive-power, cor-mean-value-theorem, thm-ftc-first-part]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: Assumes the Axiom of Choice through the standard-normal and quantitative Berry–Esseen interfaces; all channel, type, and finite-sum arguments use no further choice.
provenance:
  statement: literature-derived
  proof: ai-generated
proof_obligations:
  - State deterministic encoders, uniform messages, natural logarithms, fixed 0<epsilon<1/2, and V_min>0.
  - Establish uniform local variance/third-moment bounds near the CAID set and a global variance bound.
  - Prove the constant-composition testing converse with its decoder-region split, then use uniform Berry–Esseen and quantile inversion for near types.
  - Use the quadratic capacity gap to optimize over nearby types and Chebyshev plus a compactness gap for far types.
  - Expurgate an arbitrary average-error code to error epsilon+n^{-1/2}, select a type, and track both logarithmic losses.
  - Prove DT achievability at the minimum-dispersion CAID, then expurgate to maximal error without claiming third-order precision.
sources:
  references:
    - title: Yury Polyanskiy, H. Vincent Poor, and Sergio Verdú, Channel Coding Rate in the Finite Blocklength Regime
      url: https://people.lids.mit.edu/yp/homepage/data/finite_block.pdf
      locator: Theorems 17, 48–49, printed pp. 15–16 and 132–134 / PDF pp. 14–15 and 10–12; DT bound, dispersion, and normal-approximation statement. The local proof does not use the disputed quadratic-Taylor converse route.
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 22 §§22.1–22.3"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: Chapter 22, §§22.1–22.3, printed pp. 424–431; DMC capacity output law, finite-blocklength converse, and achievability.
    - title: Masahito Hayashi, Information Spectrum Approach to Second-Order Coding Rate in Channel Coding
      url: https://arxiv.org/pdf/0801.2242
      locator: §III, Theorems 1–2 and their proofs; minimum/maximum conditional variance for multiple CAIDs.
    - title: "Roman Vershynin, Two Friendly Proofs of the Berry–Esseen Theorem, arXiv:2602.06234v2"
      url: https://arxiv.org/abs/2602.06234
      locator: Part II, §§6–11, PDF pp. 9–17; complete Stein-method independent-array treatment. The finite-array bound with constant 1088 is proved locally in [[thm-it-berry-essen-independent-array]].
---

## Statement

Assume the Axiom of Choice. Let $W$ be a fixed finite DMC with no feedback or input-cost constraint, let $0<\epsilon<1/2$ be fixed, and suppose $V_{\min}(W)>0$. For $k\in\{\mathrm{av},\mathrm{max}\}$, let $M_k^*(n,\epsilon)$ be the largest number of messages in a deterministic length-$n$ code with uniform messages and error criterion $k$ at most $\epsilon$. Then
$$\ln M_k^*(n,\epsilon)=nC(W)+\sqrt{nV_{\min}(W)}\,\Phi^{-1}(\epsilon)+O(\ln n),\qquad k\in\{\mathrm{av},\mathrm{max}\},$$
where all logarithms are natural, $\Phi$ is the standard-normal CDF, and the constants may depend on $W,\epsilon$. This theorem makes no claim for cost constraints, $\epsilon\ge1/2$, zero dispersion, or a third-order coefficient.

## Facts & Assumptions

**Given:** A finite unconstrained DMC $W$, a fixed $0<\epsilon<1/2$, and $V_{\min}(W)>0$.

[A1] [[def-axiom-of-choice]]: the Axiom of Choice is assumed through the standard-normal law and the Berry–Esseen supplier.

[F1] [[def-discrete-memoryless-channel]] and [[lem-discrete-memoryless-channel-block-kernels-are-stochastic]]: $W^n(y^n\mid x^n)=\prod_iW(y_i\mid x_i)$ is the DMC block law.

[F2] [[lem-discrete-memoryless-channel-capacity-is-attained]] and [[def-discrete-memoryless-channel-information-capacity]]: $C(W)=\max_PI(P,W)$ is finite and attained; the CAID set $\Pi(W)$ is nonempty.

[F3] [[lem-it-dmc-capacity-output-law-is-unique]] and [[lem-discrete-memoryless-channel-capacity-achieving-output-divergence-bound]]: all CAIDs induce a common output law $Q^*$, every channel row is supported on $Q^*$, and $D(W_x\|Q^*)\le C(W)$.

[F4] [[lem-it-dmc-dispersion-attains-minimum]] and [[def-it-channel-dispersion]]: $V_{\min}(W)$ is attained on $\Pi(W)$ and $V(P,W)$ is the conditional information variance.

[F5] [[lem-it-dmc-caid-conditional-variance-identity]]: for every CAID, the conditional information-density mean is $C(W)$ on each positive-mass input and the unconditional information-density variance equals its conditional dispersion.

[F6] [[thm-it-dmc-uniform-quadratic-capacity-decay]]: $C(W)-I(P,W)\ge\alpha\operatorname{dist}_2(P,\Pi(W))^2$ for some $\alpha>0$ and every input law $P$.

[F7] [[thm-it-berry-essen-independent-array]]: for independent finite-support summands with total variance $\sigma^2>0$, the CDF error from $\Phi$ is at most $1088\sum_i\mathbb E|X_i|^3/\sigma^3$.

[F8] [[thm-it-one-shot-decision-threshold-achievability]]: a deterministic code exists with average error at most $\mathbb E e^{-[\imath(X^n;Y^n)-\ln((M-1)/2)]_+}$ for $M\ge2$.

[F9] [[def-fixed-length-channel-code]] and [[def-fixed-length-channel-code-errors]]: the encoder and decoder are deterministic; decoder regions are disjoint; average and maximal error are the uniform-message average and largest message error.

[F10] [[def-standard-normal-and-normal-laws]] and [[lem-standard-normal-cdf-quantiles-and-symmetry]]: $\Phi$ is continuous and strictly increasing from $0$ to $1$, with a unique inverse quantile at each $\epsilon\in(0,1)$.

[F11] [[thm-logarithm-derivative-and-integral]], [[thm-algebra-of-derivatives]], [[thm-chain-rule]], and [[thm-logarithm-slower-than-every-positive-power]]: finite log formulas are smooth when their denominators stay positive and $t(\ln t)^2$ extends continuously to zero.

[F12] [[cor-mean-value-theorem]] and [[thm-ftc-first-part]]: a differentiable scalar function changes by its derivative at an intermediate point times the interval length; the standard normal CDF has derivative $\varphi$ and differences are integrals of that density.

## Proof

1.1 Choose any CAID and let $Q^*$ be its output law. By [F3], every row is supported on $Q^*$ and has divergence $d_x:=D(W_x\|Q^*)\le C(W)$. For every CAID $P$, [F5] gives $\mathbb E[\imath_P(X;Y)\mid X=x]=C(W)$ on each positive-mass input and $\operatorname{Var}(\imath_P(X;Y))=V(P,W)$. [F2, F3, F5, given]

1.2 The set $\Pi(W)$ is compact by finite-simplex compactness and continuity of $I(P,W)$, and [F4] supplies a minimum-dispersion CAID. Since $Q^*$ is positive on every globally reachable output, there is a neighborhood $U$ of $\Pi(W)$ in which every $(PW)(y)$ on that support is bounded below by a positive constant. On $U$, the finite formulas for $V(P,W)$ and $T(P,W):=\sum_xP(x)\mathbb E_{W_x}|\imath_P(x;Y)-D(W_x\|PW)|^3$ are smooth functions of $P$ with bounded derivatives. Shrinking $U$ if needed gives constants $v_0,L,T_0>0$ such that $V(P,W)\ge v_0$, $|\sqrt{V(P,W)}-\sqrt{V(P',W)}|\le L\|P-P'\|_2$ on $U$, and $T(P,W)\le T_0$ there. The derivative bounds follow from [F11] and compactness of the finite-dimensional neighborhood. [F1, F2, F3, F4, F10, F11]

1.3 There is also a global constant $B<\infty$ with $V(P,W)\le B$ for every input law. Indeed, let $w_0$ be the least positive transition probability of $W$. If $P(x)>0$ and $W(y\mid x)>0$, then $(PW)(y)\ge P(x)W(y\mid x)$, so $|\imath_P(x;y)|\le |\ln w_0|+|\ln P(x)|$. The function $t(1+|\ln t|)^2$ extends continuously to zero and is bounded on $[0,1]$; summing the resulting finite bound over $x$ gives $\mathbb E\imath_P^2\le B$ and hence $V(P,W)\le B$. [F1, F2, given, algebra]

1.4 Fix a code whose every codeword has type $P$ and let $Q_n=(PW)^n$. For message $m$ with codeword $x_m^n$, put $L_m(y^n)=\ln[W^n(y^n\mid x_m^n)/Q_n(y^n)]$ on its charged support. Every codeword of type $P$ gives the same distribution of $L_m$ under its channel law, with mean $nI(P,W)$ and variance $nV(P,W)$; the summands are independent and row counts are $nP(x)$. For any $\gamma>0$, split each decoder region at $t=\ln M-\gamma$. On $L_m\le t$, $W^n(y^n\mid x_m^n)\le Me^{-\gamma}Q_n(y^n)$. Averaging over messages and using disjoint decoder regions gives $1-e_{\rm av}\le\Pr\{L>\ln M-\gamma\}+e^{-\gamma},\qquad F_L(\ln M-\gamma)\le e_{\rm av}+e^{-\gamma}.$ [F1, F9, given, algebra]

2.1 For $P\in U$, Berry–Esseen [F7] applied to the centered independent row log-likelihood terms in step 1.4 gives a uniform bound $\sup_z|F_L(nI(P,W)+\sqrt{nV(P,W)}z)-\Phi(z)|\le B_0/\sqrt n,$ where $B_0=1088T_0/v_0^{3/2}$. If $e_{\rm av}\le\epsilon+n^{-1/2}$ and $\gamma=\tfrac12\ln n$, step 1.4 yields $\Phi\!\left(\frac{\ln M-\gamma-nI(P,W)}{\sqrt{nV(P,W)}}\right)\le\epsilon+(B_0+2)n^{-1/2}.$ Since $\epsilon$ is fixed in $(0,1)$, choose a compact interval about $z_\epsilon$ on which the positive density $\varphi$ has lower bound $m>0$. The mean-value theorem [F12] gives $|\Phi(u)-\Phi(v)|\ge m|u-v|$ there, so the inverse is locally Lipschitz at $\epsilon$. Hence, uniformly for such types, $\ln M\le nI(P,W)+\sqrt{nV(P,W)}\,z_\epsilon+\tfrac12\ln n+O(1),\qquad z_\epsilon:=\Phi^{-1}(\epsilon).$ [A1, F7, F9, F10, step 1.2, step 1.4, algebra]

2.2 Fix $\delta>0$ so that $U$ contains the $\delta$-neighborhood of $\Pi(W)$. On the compact set $\operatorname{dist}(P,\Pi(W))\ge\delta$, continuity and the definition of $\Pi(W)$ give $I(P,W)\le C-\eta$ for some $\eta>0$. If a constant-composition code there had $\ln M-\gamma>nI(P,W)+K\sqrt n$, then on $L>nI(P,W)+K\sqrt n$, the squared centered deviation exceeds $K^2n$, so its indicator is at most $(L-nI(P,W))^2/(K^2n)$. Taking expectations and using step 1.3 gives $F_L(\ln M-\gamma)\ge1-B/K^2$. Choose $K$ with $1-B/K^2>\epsilon$; this contradicts step 1.4 and $e_{\rm av}\le\epsilon+n^{-1/2}$ for large $n$. Therefore $\ln M\le n(C-\eta)+K\sqrt n+\tfrac12\ln n$, which is below the claimed normal upper bound for all sufficiently large $n$. [F1, F9, step 1.3, step 1.4]

2.3 Let $P^*\in\Pi(W)$ attain $V_{\min}$. By [F5], under $P^*W$ the information density has mean $C$ and variance $V_{\min}$; its third absolute centered moment $T^*<\infty$. Apply [F8] to $P^{*n}$. For $\gamma=\tfrac12\ln n$, the DT expectation is at most $\Pr\{S_n\le\ln((M-1)/2)+\gamma\}+e^{-\gamma},$ by splitting at the displayed threshold. Berry–Esseen [F7] bounds this by $\Phi((t-nC)/\sqrt{nV_{\min}})+1088T^*/(V_{\min}^{3/2}\sqrt n)+n^{-1/2}$, where $t=\ln((M-1)/2)+\gamma$. [F4, F5, F7, F8, step 1.1, algebra]

3.1 Put $a=-z_\epsilon>0$ and $d=\operatorname{dist}_2(P,\Pi(W))$. For $P\in U$, choose a nearest $P_0\in\Pi(W)$, so $V(P_0,W)\ge V_{\min}$. By [F6] and step 1.2, $nI(P,W)-a\sqrt{nV(P,W)}\le nC-a\sqrt{nV_{\min}}-n\alpha d^2+aL\sqrt n\,d\le nC-a\sqrt{nV_{\min}}+\frac{a^2L^2}{4\alpha}.$ Together with step 2.1 this gives the desired $nC+\sqrt{nV_{\min}}z_\epsilon+O(\ln n)$ upper bound for nearby constant-composition codes. [F4, F6, step 1.2, step 2.1, algebra]

3.2 Set $u_n=\epsilon-(1088T^*/V_{\min}^{3/2}+2)n^{-1/2}$ and $t_n=nC+\sqrt{nV_{\min}}\Phi^{-1}(u_n)$, for large $n$ with $u_n>0$. We have $C>0$: if $C=0$, every point-mass input is a CAID and has zero dispersion, contradicting $V_{\min}>0$. Choose $M=1+\lfloor2e^{t_n-\gamma}\rfloor$, which is at least two for large $n$ and satisfies $t\le t_n$ and $\ln M\ge t_n-\gamma-O(1)$. Step 2.3 and [F7] give a deterministic code with average error at most $\epsilon-n^{-1/2}$ and $\ln M\ge nC+\sqrt{nV_{\min}}z_\epsilon-O(\ln n),$ using local Lipschitz continuity of $\Phi^{-1}$ at $\epsilon$ from [F12]. [F7, F8, F10, F12, step 2.3, given]

4.1 For an arbitrary code with average error at most $\epsilon$, retain messages whose individual errors are at most $\epsilon+n^{-1/2}$. Markov's inequality shows the retained fraction is at least $1-\frac{\epsilon}{\epsilon+n^{-1/2}}=\frac1{1+\epsilon\sqrt n}.$ Restrict the decoder to the retained set, mapping removed outputs to a fixed retained label; no retained message's error increases. Among at most $(n+1)^{|\mathcal X|}$ input types, one type subcode has at least the retained size divided by this number. Thus the logarithmic size loss is $O(\ln n)$ and its average error is at most $\epsilon+n^{-1/2}$. Applying steps 2.1, 2.2, and 3.1 to this type subcode gives $\ln M\le nC+\sqrt{nV_{\min}}z_\epsilon+O(\ln n).$ [F9, step 2.1, step 2.2, step 3.1]

5.1 A code with maximal error at most $\epsilon$ also has average error at most $\epsilon$, so step 4.1 bounds maximal-error code sizes as well. The largest code sizes are finite: average success is at most $|\mathcal Y|^n/M$, since each output is decoded as only one message and contributes at most one to the sum of message success probabilities. Thus $M\le |\mathcal Y|^n/(1-\epsilon)$ for either criterion. [F9, step 4.1, algebra]

6.1 In the code of step 3.2, retain messages whose individual error is at most $\epsilon$. Since its average error is at most $\epsilon-n^{-1/2}$, the retained fraction is at least $1-(\epsilon-n^{-1/2})/\epsilon=1/(\epsilon\sqrt n)$. Restricting the decoder does not increase retained-message errors, so the resulting code has maximal error at most $\epsilon$ and loses only $\tfrac12\ln n+O(1)$ in log size. Combining the average achievability from step 3.2 and the maximal construction above with the average and maximal converses from steps 4.1 and 5.1 proves both equalities in the Statement. [F9, step 3.2, step 4.1, step 5.1, algebra] ∎
