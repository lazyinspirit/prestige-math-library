---
id: thm-qa-35-fingerprint-correctness-and-cost
kind: theorem
title: "Fingerprint swap-test error and communication cost"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps: ["alg-qa-35-swap-test-fingerprint", "def-qa-35-swap-test-effect", "def-qa-35-code-fingerprint-state", "thm-qa-35-code-fingerprint-state-properties", "def-qa-35-equality-promise", "thm-qa-35-swap-test-measurement-effect", "def-qc-povm-and-outcome-law", "def-finite-probability-space-and-event", "def-qc-tensor-register-and-permutation", "def-qc-tensor-map", "thm-qc-tensor-map-composition-and-adjoint", "lem-qc-tensor-product-basis-and-dimension", "def-trace-of-an-endomorphism", "lem-qa-35-random-code-existence-nonuniform", "thm-qc-projective-measurement-outcome-law", "thm-qc-ray-projector-well-defined-and-bijective"]
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
      locator: "Chapter 16 §16.2, PDF pp.149–151; fingerprinting protocol and cost context."
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

## Proof

**Proof technique:** direct probability calculation.

1.1 Assume $0<\delta\le1$. If $x=y$, then [F1] gives $|\langle h_x|h_y\rangle|=1$, so [F2] gives anti probability zero. If $x\ne y$, their agreement fraction is at most $1-\delta$, so the one-test anti probability $p$ satisfies $p=\frac{1-|\langle h_x|h_y\rangle|^2}{2}\ge p_0:=\frac{1-(1-\delta)^2}{2}=\delta-\delta^2/2>0.$ Because $0<\delta\le1$, $p_0\le1/2$; hence $-\ln(1-p_0)>0$, and the displayed formula in the Statement defines a finite positive integer $r$. [given, F1, F2, algebra]

2.1 On equal inputs no test returns anti, so the protocol never errs. On unequal inputs, group the $r$ received register pairs in test order; their joint state is $\Omega^{\otimes r}$, where $\Omega=|h_x\otimes h_y\rangle\langle h_x\otimes h_y|$, and the all-symmetric event is one outcome of the joint measurement defined below. The vector $h_x\otimes h_y$ is unit by [F1], so its rank-one projector $\Omega$ is a density operator by [F8]. The product vector $(h_x\otimes h_y)^{\otimes r}$ is unit by the product inner product [F5]; the tensor-map definition [F10] and rank-one convention identify its projector with $\Omega^{\otimes r}$, so this is also a density operator. For each outcome string $s=(s_1,\ldots,s_r)\in\{+,-\}^r$, set $Q_s=P_{s_1}\otimes\cdots\otimes P_{s_r}$. The sequential tests act on separate pair registers, so their joint outcome string has the branch effect $Q_s$. By [F11] and the one-test projection identities in [F2], each $Q_s$ is self-adjoint and idempotent. If $s\ne t$, some coordinate has distinct signs, so the factorwise composition rule [F11] and $P_+P_-=0$ give $Q_sQ_t=0$. For an elementary vector $v_1\otimes\cdots\otimes v_r$, the sum $\sum_sQ_s$ acts as $\bigotimes_{j=1}^r\bigl((P_++P_-)v_j\bigr)=v_1\otimes\cdots\otimes v_r$ by [F2]; elementary vectors span, so $\sum_sQ_s=I$. Thus $(Q_s)_{s\in\{+,-\}^r}$ is a projective measurement, and its all-plus effect is $P_+^{\otimes r}$. The tensor-map composition rule [F11] also gives $\Omega^{\otimes r}P_+^{\otimes r}=(\Omega P_+)^{\otimes r}$. Write $A=\Omega P_+$. By [F10], the product-basis diagonal entries of $A^{\otimes r}$ are $\prod_{j=1}^r A_{i_ji_j}$, so the trace definition [F6] and finite distributivity give
$$\Pr[\text{all symmetric}]=\operatorname{tr}(\Omega^{\otimes r}P_+^{\otimes r})=\sum_{i_1,\ldots,i_r}\prod_{j=1}^r(\Omega P_+)_{i_ji_j}=(\operatorname{tr}(\Omega P_+))^r=(1-p)^r.$$
Thus the error is at most $(1-p_0)^r$. Taking $r=\left\lceil\ln(1/\epsilon)/[-\ln(1-p_0)]\right\rceil$ makes this at most $\epsilon$, including the endpoint $\delta=1$ where $p_0=1/2$. Each party transmits exactly $r(\lceil\log_2N\rceil+1)$ qubits. If $N\le Cn$ for fixed $C$ and $\delta$ is fixed positive, then $r=O(1+\ln(1/\epsilon))$ and $\lceil\log_2N\rceil+1=O(1+\log n)$, giving the stated product bound. Efficient uniform preparation needs a separate explicit code construction; [F4] supplies only a nonuniform family. [step 1.1, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, algebra] ∎
