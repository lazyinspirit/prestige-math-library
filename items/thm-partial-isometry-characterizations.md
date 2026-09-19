---
id: thm-partial-isometry-characterizations
kind: theorem
title: Partial isometry characterizations
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-isometry-coisometry-and-partial-isometry, lem-kernel-range-orthogonality-for-hilbert-adjoints, thm-orthogonal-decomposition-by-a-closed-subspace, def-countable-choice, def-hilbert-orthogonal-projection, lem-orthogonal-projection-is-linear-self-adjoint-contractive, thm-hilbert-adjoint-properties, def-operator-norm]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John B. Conway, A Course in Functional Analysis, 2nd ed., Chapter IX §3, printed pp.239–243"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2017_09_30%2112_00_39_PM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §5.3, printed pp.235–245"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Statement

Assume Countable Choice. For a bounded operator $U$ on a nonzero complex Hilbert space, the partial-isometry condition is equivalent to $U^*U$ being the orthogonal projection onto $(\ker U)^\perp$, and then $UU^*$ is the orthogonal projection onto $\operatorname{ran}U$; equivalently $U^*$ is a partial isometry.

## Facts & Assumptions

[A1] $U$ is a partial isometry when it vanishes on $\ker U$ and is isometric on the initial space $(\ker U)^\perp$; an isometry is exactly an operator with $U^*U=I$ ([[def-isometry-coisometry-and-partial-isometry]]).

[A2] $\langle U^*x,y\rangle=\langle x,Uy\rangle$, $U^{**}=U$, and $U^*U$ is self-adjoint for every bounded $U$ ([[thm-hilbert-adjoint-properties]]).

[A3] The kernel of a bounded operator is closed, $H=\ker U\oplus(\ker U)^\perp$ for the closed subspace $\ker U$, and the Hilbert orthogonal projection $P_M$ onto a closed subspace $M$ is the linear self-adjoint idempotent with range $M$ and kernel $M^\perp$; a self-adjoint idempotent with range $M$ equals $P_M$ ([[thm-orthogonal-decomposition-by-a-closed-subspace]], [[def-hilbert-orthogonal-projection]], [[lem-orthogonal-projection-is-linear-self-adjoint-contractive]]).

[A4] $(\operatorname{ran}U)^\perp=\ker U^*$ and $\overline{\operatorname{ran}U}=(\ker U^*)^\perp$ ([[lem-kernel-range-orthogonality-for-hilbert-adjoints]]).

[A5] Countable Choice is the hypothesis of the adjoint, projection and decomposition suppliers ([[def-countable-choice]]).

[A6] $\|S\|\le C$ means $\|Sx\|\le C\|x\|$ for all $x$, and a Hilbert space is complete for its norm ([[def-operator-norm]], [[def-isometry-coisometry-and-partial-isometry]]).

## Proof

**Proof technique:** direct.

**Given:** A nonzero complex Hilbert space $H$ and a bounded operator $U\in\mathcal B(H)$, with $M:=(\ker U)^\perp$.

1.1 If $U$ is a partial isometry, then for $x=m+n$ with $m\in M$, $n\in\ker U$ one has $Ux=Um$ and $\|Ux\|=\|Um\|=\|m\|=\|P_Mx\|$. [A1, A3, algebra]

1.2 If $U^*U=P_M$, then $U$ vanishes on $\ker U$ and is isometric on $M$: for $x\in\ker U$ one has $\|Ux\|^2=\langle P_Mx,x\rangle=0$, and for $x\in M$ one has $\|Ux\|^2=\langle P_Mx,x\rangle=\|x\|^2$. [A2, A3, algebra]

1.3 If $U$ is a partial isometry then $\operatorname{ran}U$ is closed and $U=UU^*U$: the restriction of $U$ to $M$ is isometric with closed image, so $\operatorname{ran}U=U[M]$ is closed, and $Ux=UP_Mx=UU^*Ux$ for every $x$. [A1, A2, A3, A6, algebra]

2.1 If $U$ is a partial isometry then $\langle U^*Ux,y\rangle=\langle Ux,Uy\rangle=\langle P_Mx,P_My\rangle=\langle P_Mx,y\rangle$ for all $x,y$, so $U^*U=P_M$. [step 1.1, A2, A3, A5]

2.2 Conversely, if $U^*U=P_M$ then $U$ is a partial isometry, since it vanishes on $\ker U$ and is isometric on the initial space $M$. [step 1.2]

3.1 If $U$ is a partial isometry then $UU^*$ is a self-adjoint idempotent with range $\operatorname{ran}U$: $(UU^*)^2=U(U^*U)U^*=UP_MU^*=UU^*$ by step 2.1 and step 1.3, $\operatorname{ran}(UU^*)\subseteq\operatorname{ran}U$, and $U=UU^*U$ puts $\operatorname{ran}U\subseteq\operatorname{ran}(UU^*)$; hence $UU^*=P_{\operatorname{ran}U}$. [step 2.1, step 1.3, A3]

3.2 If $U$ is a partial isometry then $U^*$ is a partial isometry: $\ker U^*=(\operatorname{ran}U)^\perp$ and $(\ker U^*)^\perp=\operatorname{ran}U$ by closedness of the range, $U^*$ vanishes on its kernel, and for $y=Ux\in\operatorname{ran}U$ one has $\|U^*y\|=\|U^*Ux\|=\|P_Mx\|=\|Ux\|=\|y\|$. [step 2.1, step 1.3, A4, algebra]

4.1 Conversely, if $U^*$ is a partial isometry, then step 3.2 applied to $U^*$ shows that $U^{**}=U$ is a partial isometry. [step 3.2, A2]

5.1 Therefore $U$ is a partial isometry exactly when $U^*U=P_{(\ker U)^\perp}$, and exactly when $U^*$ is a partial isometry; whenever these conditions hold, $\operatorname{ran}U$ is closed and $UU^*=P_{\operatorname{ran}U}$. [step 2.1, step 2.2, step 3.1, step 3.2, step 4.1] ∎
