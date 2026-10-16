---
id: lem-qc-positive-marginals-imply-joint-support
kind: lemma
title: "Positive Marginals Imply Joint Support"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 4
deps: ["def-qc-partial-trace", "thm-qc-partial-trace-characterization-and-basis-independence", "def-orthogonal-projection", "prop-orthogonal-projection-formula-and-linearity", "def-qc-tensor-register-and-permutation", "def-qc-tensor-map", "thm-qc-tensor-map-composition-and-adjoint", "def-non-negative-and-positive-operator", "thm-non-negative-operator-characterisations", "thm-non-negative-square-root-exists-and-is-unique", "def-trace-of-an-endomorphism", "thm-trace-of-ab-equals-trace-of-ba"]
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
      locator: "§2.1.2–2.1.3, positive operators and support conventions; support implication is proved locally."
---

## Statement

Let $H$ be finite-dimensional, let $Y\ge0$ act on $H\otimes H$, and let $S\subseteq H$ be a subspace. If both partial-trace marginals of $Y$ are supported on $S$, then $\operatorname{supp}Y\subseteq S\otimes S$; equivalently, $Y=(P_S\otimes P_S)Y(P_S\otimes P_S)$, where $P_S$ is the orthogonal projection onto $S$.

## Facts & Assumptions

**Given:** A finite-dimensional complex Hilbert space $H$, $Y\ge0$ on $H\otimes H$, a subspace $S\subseteq H$, and $\operatorname{supp}(\operatorname{Tr}_2Y),\operatorname{supp}(\operatorname{Tr}_1Y)\subseteq S$.

[F1] For any non-negative finite-dimensional operator $Z$, define $\operatorname{supp}(Z):=(\ker Z)^\perp=\operatorname{range}(Z)$; equality follows from self-adjointness ([[thm-non-negative-operator-characterisations]]).

[L1] The partial trace is characterized by $\operatorname{tr}((\operatorname{Tr}_B R)T)=\operatorname{tr}(R(T\otimes I))$, independently of the auxiliary orthonormal basis ([[def-qc-partial-trace]], [[thm-qc-partial-trace-characterization-and-basis-independence]]). The QC02 definition and characterization theorem are present as draft carriers; the trace-pairing identity gives the displayed marginal trace rule by cyclicity.

[L2] $P_S$ is the orthogonal projection onto $S$; it is idempotent and $Q=I-P_S=P_{S^\perp}$. It is self-adjoint because the orthogonal decomposition gives $\langle P_Sx,y\rangle=\langle P_Sx,P_Sy\rangle=\langle x,P_Sy\rangle$ for all $x,y$ ([[def-orthogonal-projection]], [[prop-orthogonal-projection-formula-and-linearity]]). Hence $Q^*=Q$ and $Q^2=Q$.

[L3] Tensor maps act factorwise and preserve composition, so operators acting on different tensor factors commute and $(P_S\otimes I)(I\otimes P_S)=P_S\otimes P_S$ ([[def-qc-tensor-map]], [[thm-qc-tensor-map-composition-and-adjoint]]).

[F2] A non-negative operator has a unique non-negative square root ([[thm-non-negative-square-root-exists-and-is-unique]]). If such an operator has trace zero, diagonalize it in an orthonormal eigenbasis with nonnegative eigenvalues; trace is their sum, so every eigenvalue is zero and the operator is zero ([[thm-non-negative-operator-characterisations]], [[def-trace-of-an-endomorphism]]).

## Proof


1.1 Let $Q=I-P_S$. By [F1], the range of $\operatorname{Tr}_2Y$ lies in $S$, so $Q\operatorname{Tr}_2Y=0$ and $\operatorname{tr}(Q\operatorname{Tr}_2Y)=0$. By [L1], $\operatorname{tr}((Q\otimes I)Y)=0$. Cyclicity of trace rewrites this as $\operatorname{tr}(Y^{1/2}(Q\otimes I)Y^{1/2})=0$. Since [L2] gives $(Q\otimes I)^*=(Q\otimes I)^2=Q\otimes I$, the operator inside the trace is $Z^*Z\ge0$ for $Z=(Q\otimes I)Y^{1/2}$; [F2] makes it zero, hence $Z=0$ because $\langle Z^*Zv,v\rangle=\|Zv\|^2$. Thus $(Q\otimes I)Y=Y(Q\otimes I)=0$, and $Y=(P_S\otimes I)Y(P_S\otimes I)$. [given, F1, L1, L2, F2, algebra]

2.1 Applying the same argument to the second marginal with the projection $I\otimes Q$ gives $Y=(I\otimes P_S)Y(I\otimes P_S)$. [given, step 1.1, L1, L2, F2]

3.1 The two commuting projections $P_S\otimes I$ and $I\otimes P_S$ have product $P_S\otimes P_S$ by [L3]. Combining step 1.1 and step 2.1 yields $Y=(P_S\otimes P_S)Y(P_S\otimes P_S)$, so the range and hence the support of $Y$ lies in $S\otimes S$. [step 1.1, step 2.1, L2, L3, algebra] ∎

