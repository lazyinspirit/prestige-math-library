---
id: thm-qa-35-fingerprint-correctness-and-cost
kind: theorem
title: "Fingerprint swap-test error and communication cost"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps: ["def-qc-dirac-notation-conversion", "alg-qa-35-swap-test-fingerprint", "def-qc-toffoli-and-fredkin", "def-qa-35-swap-test-effect", "def-qa-35-code-fingerprint-state", "thm-qa-35-code-fingerprint-state-properties", "def-qa-35-equality-promise", "thm-qa-35-swap-test-measurement-effect", "def-qc-povm-and-outcome-law", "def-finite-probability-space-and-event", "def-qc-tensor-register-and-permutation", "def-qc-tensor-map", "thm-qc-tensor-map-composition-and-adjoint", "lem-qc-tensor-product-basis-and-dimension", "def-trace-of-an-endomorphism", "lem-qa-35-random-code-existence-nonuniform", "thm-qc-projective-measurement-outcome-law", "thm-qc-ray-projector-well-defined-and-bijective"]
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all experiments and message registers are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Harry Buhrman, Richard Cleve, John Watrous, Ronald de Wolf, Quantum Fingerprinting"
      url: https://arxiv.org/pdf/quant-ph/0102001
      locator: "Complete 8-page paper, §2, PDF pp.2–4; fingerprinting and swap-test argument."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 16 §16.6, PDF pp.151–153; code-fingerprint construction, SWAP-test outcome probability, and repetition-cost context."
---

## Statement

Let $n,N\ge1$ and let $E:\{0,1\}^n\to\{0,1\}^N$ have relative distance $\delta(E)=\delta\in(0,1]$. Equal inputs yield antisymmetric probability $0$; unequal inputs yield $p\ge p_0=[1-(1-\delta)^2]/2=\delta-\delta^2/2>0$. For $0<\epsilon<1$, set
$$r=\left\lceil\frac{\ln(1/\epsilon)}{-\ln(1-p_0)}\right\rceil.$$
The bounded loop in [[alg-qa-35-swap-test-fingerprint]] halts after at most $r$ tests. On $r$ fresh pairs, declaring unequal iff any anti outcome occurs gives worst-case error at most $\epsilon$, with $r(\lceil\log_2N\rceil+1)$ qubits sent by each party. If $N\le Cn$ and $C,\delta$ are fixed, this is $O((1+\log n)(1+\log(1/\epsilon)))$ qubits per sender, conditional on a supplied code with those parameters.
## Facts & Assumptions

**Given:** Integers $n,N\ge1$, a binary code map $E:\{0,1\}^n\to\{0,1\}^N$ with $\delta(E)=\delta\in(0,1]$, $0<\epsilon<1$, and the fingerprint protocol of [[alg-qa-35-swap-test-fingerprint]].

[F1] [[thm-qa-35-code-fingerprint-state-properties]]: Fingerprint states are normalized and their inner product equals the fraction of coordinates where the codewords agree.

[F2] [[thm-qa-35-swap-test-measurement-effect]]: $P_+,P_-$ are complementary orthogonal projections, and on unit fingerprint vectors $\psi,\phi$ the antisymmetric outcome probability is $(1-|\langle\psi|\phi\rangle|^2)/2$.

[F3] [[alg-qa-35-swap-test-fingerprint]]: Each test uses one fresh fingerprint pair, and the referee outputs unequal exactly when an antisymmetric outcome occurs.

[F4] [[lem-qa-35-random-code-existence-nonuniform]]: For each $n\ge1$ a code of length $32n$ and relative distance at least $1/4$ exists, but the proof provides no efficient uniform encoder.

[F5] [[def-qc-tensor-register-and-permutation]], [[lem-qc-tensor-product-basis-and-dimension]]: The tensor inner product of elementary vectors is the product of their factor inner products, and elementary tensors of the factor bases form an orthonormal product basis.

[F6] [[def-trace-of-an-endomorphism]]: For an ordered basis, trace is the matrix trace, independent of the chosen basis.

[F7] [[thm-qc-projective-measurement-outcome-law]]: A finite projective measurement on a density operator has outcome weights $\operatorname{tr}(\rho P_a)$.

[F8] [[thm-qc-ray-projector-well-defined-and-bijective]]: The projector of a unit vector is non-negative and has trace one.

[F9] [[def-qa-35-swap-test-effect]]: The symmetric effect is $P_+=(I+F)/2$ and the antisymmetric effect is $P_-=(I-F)/2$.

[F10] [[def-qc-tensor-map]]: A tensor map is the unique linear map whose action on elementary tensors applies each factor map to its corresponding factor.

[F11] [[thm-qc-tensor-map-composition-and-adjoint]]: Tensor maps preserve factorwise composition and adjoints.

[F12] [[def-qc-dirac-notation-conversion]]: with the root pairing linear in its first argument, the rank-one map $|u\rangle\langle u|$ sends $z$ to $\langle z,u\rangle_{\mathrm{root}}u$.

[F13] [[def-qc-toffoli-and-fredkin]]: A Fredkin gate fixes the target pair when its control is $0$ and swaps the pair when its control is $1$.

## Proof

**Proof technique:** direct probability calculation.

1.1 Assume $0<\delta\le1$. If $x=y$, then [F1] gives $|\langle h_x|h_y\rangle|=1$, so [F2] gives anti probability zero. If $x\ne y$, their agreement fraction is at most $1-\delta$, so the one-test anti probability $p$ satisfies $p=\frac{1-|\langle h_x|h_y\rangle|^2}{2}\ge p_0:=\frac{1-(1-\delta)^2}{2}=\delta-\delta^2/2>0.$ Because $0<\delta\le1$, $p_0\le1/2$; hence $-\ln(1-p_0)>0$, and the displayed formula in the Statement defines a finite positive integer $r$. [given, F1, F2, algebra]

1.2 For one pair, let $F$ swap the two $L$-qubit message registers, so $P_\pm=(I\pm F)/2$ by [F9]. The $L$ controlled Fredkin gates in [F3] realize $|0\rangle\langle0|\otimes I+|1\rangle\langle1|\otimes F$ by [F13]. After the first Hadamard, this operation, and the second Hadamard, $|0\rangle\otimes v$ becomes $|0\rangle\otimes P_+v+|1\rangle\otimes P_-v$ for $v=\psi\otimes\phi$; thus the control measurement implements [F2]. Put $u=h_x\otimes h_y$ and $\Omega=|u\rangle\langle u|$. By [F1], [F5], and [F8], $u$ is unit and $\Omega$ is a density operator. Reordering the $r$ Alice and $r$ Bob message registers by the wire permutation of [F5] gives the paired state $u^{\otimes r}$. By [F10], [F12], and the product inner product [F5], $\Omega^{\otimes r}$ acts on each elementary tensor $z_1\otimes\cdots\otimes z_r$ as $\langle z_1\otimes\cdots\otimes z_r,u^{\otimes r}\rangle u^{\otimes r}$. Since elementary tensors span, this is the rank-one projector of $u^{\otimes r}$, so [F8] makes the paired state a density operator. [given, F1, F2, F3, F5, F8, F9, F10, F12, F13, algebra]

2.1 For $s=(s_1,\ldots,s_r)\in\{+,-\}^r$, let $Q_s=P_{s_1}\otimes\cdots\otimes P_{s_r}$. The tests act on separate pairs, so the branch effect is $Q_s$. By [F2] and [F11], these effects are pairwise orthogonal projections and $\sum_sQ_s=\bigotimes_{j=1}^r(P_++P_-)=I$, with all-plus effect $P_+^{\otimes r}$. The outcome law [F7] and tensor-map composition [F11] give $\Pr[\text{all symmetric}]=\operatorname{tr}(\Omega^{\otimes r}P_+^{\otimes r})=\operatorname{tr}((\Omega P_+)^{\otimes r})=(\operatorname{tr}(\Omega P_+))^r=(1-p)^r$; the trace factorization follows by summing product-basis diagonal entries using [F6] and [F10], and the last equality uses the two-outcome law. [step 1.2, F2, F6, F7, F10, F11, algebra]

3.1 The loop in [F3] stops with unequal exactly when an anti outcome occurs, so equal inputs never err and unequal inputs err with probability $(1-p)^r\le(1-p_0)^r\le\epsilon$ by [step 1.1] and [step 2.1]. Each party sends exactly $r(\lceil\log_2N\rceil+1)$ qubits. If $N\le Cn$ for fixed $C$ and $\delta$ is fixed positive, then $r=O(1+\ln(1/\epsilon))$ and $\lceil\log_2N\rceil+1=O(1+\log n)$, giving the stated product bound. Efficient uniform preparation needs a separate explicit code construction; [F4] supplies only a nonuniform family. [step 1.1, step 2.1, F3, F4, algebra] ∎
