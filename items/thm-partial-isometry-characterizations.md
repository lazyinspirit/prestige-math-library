---
id: thm-partial-isometry-characterizations
kind: theorem
title: Partial isometry characterizations
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-isometry-coisometry-and-partial-isometry, lem-kernel-range-orthogonality-for-hilbert-adjoints, thm-orthogonal-decomposition-by-a-closed-subspace, def-countable-choice, def-hilbert-orthogonal-projection, lem-orthogonal-projection-is-linear-self-adjoint-contractive, thm-hilbert-adjoint-properties, def-operator-norm, def-hilbert-space-adjoint, def-inner-product-space, lem-orthogonal-complement-is-closed]
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

[A2] $\langle U^*x,y\rangle=\langle x,Uy\rangle$, $U^{**}=U$, and $U^*U$ is self-adjoint for every bounded $U$ ([[def-hilbert-space-adjoint]], [[thm-hilbert-adjoint-properties]]).

[A3] The kernel of a bounded operator is closed: if $Ux\ne0$ and $C$ bounds $U$, the ball about $x$ of radius $\|Ux\|/(2(C+1))$ misses its kernel. Orthogonal complements are closed linear subspaces ([[lem-orthogonal-complement-is-closed]]), so $H=\ker U\oplus(\ker U)^\perp$ ([[thm-orthogonal-decomposition-by-a-closed-subspace]]). The Hilbert orthogonal projection $P_M$ onto a closed subspace $M$ is the linear self-adjoint idempotent with range $M$ and kernel $M^\perp$ ([[def-hilbert-orthogonal-projection]], [[lem-orthogonal-projection-is-linear-self-adjoint-contractive]]). Conversely, a bounded self-adjoint idempotent $Q$ has closed range $\ker(I-Q)$ (the same kernel argument applies), and $x-Qx$ is perpendicular to its range since $\langle x-Qx,Qy\rangle=\langle Q(x-Qx),y\rangle=0$. Thus the defining decomposition shows $Q=P_{\operatorname{ran}Q}$.

[A4] $(\operatorname{ran}U)^\perp=\ker U^*$ and $\overline{\operatorname{ran}U}=(\ker U^*)^\perp$ ([[lem-kernel-range-orthogonality-for-hilbert-adjoints]]).

[A5] Countable Choice is the hypothesis of the adjoint, projection and decomposition suppliers ([[def-countable-choice]]).

[A6] For a bounded operator $S$ and $C\ge0$, $\|S\|\le C$ is equivalent to $\|Sx\|\le C\|x\|$ for all $x$ ([[def-operator-norm]]). The pairing is linear in its first argument and conjugate-linear in its second ([[def-inner-product-space]]). For any such sesquilinear form $B$, direct expansion gives $4B(x,y)=B(x+y,x+y)-B(x-y,x-y)+iB(x+iy,x+iy)-iB(x-iy,x-iy)$; hence a form with zero diagonal is zero.

## Proof

**Proof technique:** direct.

**Given:** A nonzero complex Hilbert space $H$ and a bounded operator $U\in\mathcal B(H)$, with $M:=(\ker U)^\perp$.

1.1 If $U$ is a partial isometry, then for $x=m+n$ with $m\in M$, $n\in\ker U$ one has $Ux=Um$ and $\|Ux\|=\|Um\|=\|m\|=\|P_Mx\|$. [A1, A3, A5, algebra]

1.2 If $U^*U=P_M$, then $U$ vanishes on $\ker U$ and is isometric on $M$: for $x\in\ker U$ one has $\|Ux\|^2=\langle P_Mx,x\rangle=0$, and for $x\in M$ one has $\|Ux\|^2=\langle P_Mx,x\rangle=\|x\|^2$. [A2, A3, algebra]

2.1 If $U$ is a partial isometry, put $D=U^*U-P_M$. The adjoint and projection identities and step 1.1 give $\langle Dx,x\rangle=\|Ux\|^2-\|P_Mx\|^2=0$ for every $x$. Applying the expansion in [A6] to $B(x,y)=\langle Dx,y\rangle$ gives $\langle Dx,y\rangle=0$ for all $x,y$; taking $y=Dx$ gives $Dx=0$. Hence $U^*U=P_M$. [step 1.1, A2, A3, A6]

2.2 Conversely, if $U^*U=P_M$ then $U$ is a partial isometry, since it vanishes on $\ker U$ and is isometric on the initial space $M$. [step 1.2]

3.1 If $U$ is a partial isometry, then $U=UP_M=UU^*U$: the first identity follows since $x-P_Mx\in\ker U$, and the second uses step 2.1. Let $Q=UU^*$. It is bounded and self-adjoint by [A2], and $Q^2=(UU^*U)U^*=UU^*=Q$. Its range is contained in $\operatorname{ran}U$, while $U=QU$ gives the reverse inclusion. By [A3], $\operatorname{ran}U=\operatorname{ran}Q$ is closed and $UU^*=P_{\operatorname{ran}U}$. [step 1.1, step 2.1, A2, A3]

4.1 If $U$ is a partial isometry, then $U^*$ is a partial isometry: [A4] and step 3.1 give $(\ker U^*)^\perp=\operatorname{ran}U$. On this space, write $y=Ux$; then $\|U^*y\|=\|U^*Ux\|=\|P_Mx\|=\|Ux\|=\|y\|$. On its kernel $U^*$ vanishes by definition. [step 1.1, step 2.1, step 3.1, A1, A4]

5.1 Conversely, if $U^*$ is a partial isometry, apply step 4.1 to the bounded operator $U^*$; it shows $U^{**}=U$ is a partial isometry. [step 4.1, A2]

6.1 Therefore $U$ is a partial isometry exactly when $U^*U=P_{(\ker U)^\perp}$, and exactly when $U^*$ is a partial isometry; whenever these conditions hold, $\operatorname{ran}U$ is closed and $UU^*=P_{\operatorname{ran}U}$. [step 2.1, step 2.2, step 3.1, step 4.1, step 5.1] ∎
