---
id: thm-qc-channel-diamond-norm-one
kind: theorem
title: "Channel Diamond Norm One"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 7
deps: ["def-qc-diamond-norm", "def-qc-quantum-channel", "thm-qc-diamond-norm-ancilla-dimension-bound", "thm-qc-kraus-choi-equivalence", "thm-qc-trace-preserving-kraus-normalization", "thm-qc-kraus-map-completely-positive", "thm-qc-trace-norm-duality-and-norm-properties", "def-qc-trace-norm", "def-qc-tensor-register-and-permutation", "def-qc-tensor-map", "thm-qc-tensor-map-composition-and-adjoint", "lem-qc-tensor-products-of-operator-matrix-units-form-a-basis", "thm-non-negative-operator-characterisations", "thm-singular-value-decomposition", "thm-trace-of-ab-equals-trace-of-ba", "def-operator-norm-on-a-finite-dimensional-inner-product-space", "thm-cauchy-schwarz-in-an-inner-product-space", "def-qc-dirac-notation-conversion", "thm-qc-ray-projector-well-defined-and-bijective", "def-qc-density-operator"]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
      locator: "§3.3.2–3.3.4, channel norm and completely bounded trace norm."
---

## Statement

Every quantum channel $\Phi:\mathcal L(H)\to\mathcal L(K)$ between nonzero finite-dimensional complex Hilbert spaces has $\|\Phi\|_\diamond=1$.

## Facts & Assumptions

**Given:** Nonzero finite-dimensional $H,K$ and a completely positive trace-preserving map $\Phi$.

[L1] The diamond norm is the supremum of induced trace norms of finite amplifications, and it may be capped at $\dim H$ ([[def-qc-diamond-norm]], [[thm-qc-diamond-norm-ancilla-dimension-bound]]). The ancilla-bound carrier is draft.

[L2] A channel has a finite Kraus representation $\Phi(X)=\sum_jK_jXK_j^*$ and trace preservation gives $\sum_jK_j^*K_j=I$ ([[def-qc-quantum-channel]], [[thm-qc-kraus-choi-equivalence]], [[thm-qc-trace-preserving-kraus-normalization]]).

[L3] A finite Kraus sum is completely positive, and trace-norm duality is $\|X\|_1=\max_{\|B\|_\infty\le1}|\operatorname{tr}(B^*X)|$ ([[thm-qc-kraus-map-completely-positive]], [[thm-qc-trace-norm-duality-and-norm-properties]]).

[L4] Ordered tensor registers fix the factor and pairing conventions; tensor maps act factorwise and their adjoints are factorwise, so tensor amplification of the Kraus formula has Kraus operators $K_j\otimes I_R$ ([[def-qc-tensor-register-and-permutation]], [[def-qc-tensor-map]], [[thm-qc-tensor-map-composition-and-adjoint]], [L2]).

[L6] Products of operator matrix units form a basis for the full operator space on a tensor product, so the factorwise Kraus expansion checked on these matrix units determines the amplified map for every operator ([[lem-qc-tensor-products-of-operator-matrix-units-form-a-basis]]).

[F1] For a nonnegative operator $Y$, its singular values are its nonnegative eigenvalues, so $\|Y\|_1=\operatorname{tr}(Y)$ ([[def-qc-trace-norm]], [[thm-singular-value-decomposition]], [[thm-non-negative-operator-characterisations]]).

[F2] The operator norm is $\|T\|_\infty=\sup_{\|x\|=1}\|Tx\|$, and the trace pairing is cyclic for finite-dimensional rectangular maps ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]], [[thm-trace-of-ab-equals-trace-of-ba]]).

[F3] Cauchy–Schwarz gives $|\langle u,v\rangle|\le\|u\|\|v\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[L5] For a unit vector $v$, $|v\rangle\langle v|$ is a rank-one orthogonal projection and is a density operator ([[def-qc-dirac-notation-conversion]], [[thm-qc-ray-projector-well-defined-and-bijective]], [[def-qc-density-operator]]).

## Proof


1.1 By [L1], it suffices to use the ancilla $R=\mathbb C^d$, where $d=\dim H$. Let $\Lambda=\Phi\otimes\operatorname{id}_R$. By [L4], its Kraus operators are $K_j\otimes I_R$, and [L6] ensures this factorwise Kraus formula agrees with the amplification on every operator. Its trace-preserving normalization follows from [L2]. Define $\Lambda^*(B)=\sum_j(K_j^*\otimes I_R)B(K_j\otimes I_R)$. It is completely positive by [L3] and unital because $\sum_j(K_j^*\otimes I_R)(K_j\otimes I_R)=I$. If $\|B\|_\infty\le1$, then $\begin{pmatrix}I&B\\B^*&I\end{pmatrix}$ is nonnegative: for any $(x,y)$ its quadratic form is at least $\|x\|^2+\|y\|^2-2\|x\|\|y\|\ge0$ by [F2]–[F3]. Complete positivity of $\Lambda^*$ applied with the two-dimensional auxiliary space preserves this block positivity. For $T=\Lambda^*(B)$, test the resulting block operator on $(-Ty,y)$; its quadratic form is $\|y\|^2-\|Ty\|^2$, so $\|\Lambda^*(B)\|_\infty\le1$. [given, L1, L2, L3, L4, L6, F2, F3, algebra]

2.1 For any input operator $X$, the Kraus formula for $\Lambda^*$ and cyclicity [F2] give $\operatorname{tr}(B^*\Lambda(X))=\operatorname{tr}(\Lambda^*(B)^*X)$. Trace-norm duality [L3] then gives $$\|\Lambda(X)\|_1=\max_{\|B\|_\infty\le1}|\operatorname{tr}(B^*\Lambda(X))|=\max_{\|B\|_\infty\le1}|\operatorname{tr}(\Lambda^*(B)^*X)|\le\|X\|_1,$$ using step 1.1. Thus the induced norm at ancilla dimension $d$ is at most one, and [L1] gives $\|\Phi\|_\diamond\le1$. Conversely choose unit vectors $x\in H$ and $e\in\mathbb C^d$. The rank-one projector $P=|x\otimes e\rangle\langle x\otimes e|$ is a density operator by [L5]. The amplified map $\Lambda$ is completely positive by [L3] and trace-preserving by [L2] and [L4], so $\Lambda(P)$ is a density operator and has trace norm one by [F1]. Therefore the induced norm at $d$ is at least one, and [L1] gives $\|\Phi\|_\diamond\ge1$. [given, L1, L2, L3, L4, F1, F2, F3, L5, step 1.1, algebra] ∎

