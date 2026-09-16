---
id: thm-polar-decomposition-for-bounded-operators
kind: theorem
title: Polar decomposition for bounded operators
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-absolute-value-of-a-bounded-operator, thm-partial-isometry-characterizations, thm-orthogonal-decomposition-by-a-closed-subspace, def-axiom-of-choice, lem-kernel-range-orthogonality-for-hilbert-adjoints, def-isometry-coisometry-and-partial-isometry, def-hilbert-orthogonal-projection, def-operator-norm, def-hilbert-space]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John B. Conway, A Course in Functional Analysis, 2nd ed., Polar Decomposition 3.11, printed pp.239–243"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2017_09_30%2112_00_39_PM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §5.3, printed pp.235–245"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Statement

Assume AC. Every bounded operator $T$ on a nonzero complex Hilbert space has a unique partial isometry $U$ with $T=U|T|$ and $\ker U=\ker T$; its initial space is $\overline{\operatorname{ran}|T|}$ and its final space is $\overline{\operatorname{ran}T}$.

## Facts & Assumptions

[A1] $|T|$ is positive, $|T|^2=T^*T$, $\||T|x\|=\|Tx\|$ and $\ker|T|=\ker T$ ([[def-absolute-value-of-a-bounded-operator]]).

[A2] $(\operatorname{ran}S)^\perp=\ker S^*$ and $\overline{\operatorname{ran}S}=(\ker S^*)^\perp$, so for $S=|T|$ the closure of the range is $(\ker|T|)^\perp=(\ker T)^\perp$ ([[lem-kernel-range-orthogonality-for-hilbert-adjoints]]).

[A3] For the closed subspace $M$ the space decomposes as $H=M\oplus M^\perp$ and the orthogonal projection $P_M$ is the linear self-adjoint idempotent with range $M$ and kernel $M^\perp$ ([[thm-orthogonal-decomposition-by-a-closed-subspace]], [[def-hilbert-orthogonal-projection]]).

[A4] $U$ is a partial isometry when it vanishes on $\ker U$ and is isometric on $(\ker U)^\perp$, with initial space $(\ker U)^\perp$ and final space $\operatorname{ran}U$; a bounded operator isometric on a closed subspace and zero on its orthogonal complement is a partial isometry ([[def-isometry-coisometry-and-partial-isometry]], [[thm-partial-isometry-characterizations]]).

[A5] A bounded linear map that is isometric on a subspace extends uniquely to an isometry on its closure, since the Hilbert space is complete and the extension is obtained by limits of Cauchy images; the operator norm controls such extensions ([[def-hilbert-space]], [[def-operator-norm]]).

[A6] AC is the hypothesis of the square-root and Hilbert-space suppliers ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** A nonzero complex Hilbert space $H$ and a bounded operator $T\in\mathcal B(H)$, with $|T|=(T^*T)^{1/2}$ and $M:=\overline{\operatorname{ran}|T|}$.

1.1 The subspace $M$ is closed with $M=(\ker|T|)^\perp=(\ker T)^\perp$, and $H=M\oplus M^\perp$. [A1, A2, A3]

1.2 The assignment $V(|T|x):=Tx$ on $\operatorname{ran}|T|$ is well defined, because $|T|x=|T|y$ implies $x-y\in\ker|T|=\ker T$ and hence $Tx=Ty$, and it is isometric, because $\|V(|T|x)\|=\|Tx\|=\||T|x\|$. [A1, algebra]

2.1 $V$ extends uniquely to a bounded linear isometry $U$ on the closure $M$ of its domain: an isometry on a dense subspace is uniformly continuous, its images of Cauchy sequences are Cauchy and converge by completeness, and the limit is independent of the sequence. [step 1.2, A5]

3.1 Extend $U$ to $H=M\oplus M^\perp$ by $U=0$ on $M^\perp$; then $U$ is bounded and linear, $\ker U=M^\perp=\ker T$, and $U$ is isometric on $M=(\ker U)^\perp$, so $U$ is a partial isometry with initial space $M$ and final space $\operatorname{ran}U=\overline{\operatorname{ran}T}$. [step 2.1, step 1.1, A3, A4, A5]

3.2 $T=U|T|$: for every $x$ one has $|T|x\in\operatorname{ran}|T|\subseteq M$ and $U(|T|x)=V(|T|x)=Tx$ by construction. [step 2.1, step 1.2]

4.1 Uniqueness: if $W$ is a partial isometry with $T=W|T|$ and $\ker W=\ker T$, then on the dense subspace $\operatorname{ran}|T|$ of $M$ one has $W(|T|x)=Tx=U(|T|x)$; both $W$ and $U$ vanish on $M^\perp=\ker T$ and both are continuous, so $W$ and $U$ agree on $M$ and on $M^\perp$, hence $W=U$. [step 3.1, step 3.2, step 1.1, A1]

5.1 Therefore $U$ is the unique partial isometry with $T=U|T|$ and $\ker U=\ker T$, with initial space $\overline{\operatorname{ran}|T|}$ and final space $\overline{\operatorname{ran}T}$, as asserted. [step 3.1, step 3.2, step 4.1, A6] ∎
