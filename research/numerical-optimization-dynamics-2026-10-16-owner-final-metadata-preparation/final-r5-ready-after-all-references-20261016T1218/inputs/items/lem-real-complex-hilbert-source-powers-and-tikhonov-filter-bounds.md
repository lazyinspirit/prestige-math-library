---
id: lem-real-complex-hilbert-source-powers-and-tikhonov-filter-bounds
kind: lemma
title: "Real and complex Hilbert source powers and fixed-reference Tikhonov filter bounds"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - thm-continuous-functional-calculus-for-bounded-self-adjoint-operators
  - lem-spectrum-of-a-positive-operator-is-nonnegative
  - thm-spectrum-is-nonempty-compact-and-norm-bounded
  - cor-weierstrass-approximation-on-a-closed-interval
  - thm-hilbert-adjoint-properties
  - def-real-and-complex-inner-product-space
  - def-hilbert-space
  - def-real-power
  - thm-real-power-laws
  - thm-real-power-continuity-and-derivatives
  - lem-hilbert-tikhonov-normal-operator-invertible
  - lem-hilbert-tikhonov-noise-amplification-bound
  - def-axiom-of-choice
  - cor-mean-value-theorem
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pending
sources:
  references:
    - title: "Barbara Kaltenbacher, Methods for Inverse Problems: IV. Newton type methods (full lecture); anchored formulation/source-filter context, local constants proved here"
      url: "https://me.aau.at/~bkaltenb/LectureIP_4_Newton"
      locator: "Full 15-page lecture read; pp. 9–13 distinguish anchored IRGNM and spectral source arguments. The exact fixed-reference theorem here is locally derived, not attributed to the slide theorem."
    - title: "Christian Clason, Regularization of Inverse Problems (anchored formulation and spectral-error proof context)"
      url: "https://arxiv.org/pdf/2001.00617"
      locator: "Section 11.3, printed pp. 112–116, full local anchored proof read; that source proves an a-priori theorem, not the direct-discrepancy result authored here."
---

## Statement

Assume AC. Let $A:X\to Y$ be bounded between real or complex Hilbert spaces, and set $S=A^*A$. For $\nu>0$, define $S^\nu$ by the continuous calculus of $t\mapsto t^\nu$ in the complex case; in the real case use the Hilbert complexification and restrict to the real copy, as constructed below. On a zero space or for $S=0$, this power is zero. It is bounded self-adjoint, and $S^\nu h=0$ for $h\in\ker A$, so $S^\nu w\perp\ker A$. For $\alpha>0$ put $T_\alpha=(S+\alpha I)^{-1}$. Then
$$\|\alpha T_\alpha S^\nu\|\le\alpha^\nu\quad(0<\nu\le1),\qquad \|A\alpha T_\alpha S^\nu\|\le\alpha^{\nu+1/2}\quad(0<\nu\le1/2),$$
$$\|T_\alpha A^*\|\le\frac1{2\sqrt\alpha},\qquad \|AT_\alpha A^*\|\le1,\qquad \|S^\nu\|\le\|A\|^{2\nu}.$$
No compactness or lower singular-value bound is assumed.

## Facts & Assumptions

**Given:** The bounded operator, Hilbert spaces, positive exponents and shift in the Statement.

[A1] [[def-axiom-of-choice]]: AC is assumed for the complex calculus, and implies the Countable Choice needed by Hilbert adjoints.

[F1] [[thm-continuous-functional-calculus-for-bounded-self-adjoint-operators]]: on a nonzero complex Hilbert space a bounded self-adjoint operator has an isometric unital star-homomorphism from continuous functions on its spectrum.

[F2] [[lem-spectrum-of-a-positive-operator-is-nonnegative]] and [[thm-spectrum-is-nonempty-compact-and-norm-bounded]]: for a bounded positive operator on a nonzero complex Hilbert space, its spectrum is contained in $[0,\|S\|]$.

[F3] [[cor-weierstrass-approximation-on-a-closed-interval]]: continuous real functions on a closed interval have uniform real-polynomial approximants.

[F4] [[thm-hilbert-adjoint-properties]]: adjoints preserve the reversed product, $\|T^*\|=\|T\|$, and $\|T^*T\|=\|T\|^2$.

[F5] [[def-real-and-complex-inner-product-space]] and [[def-hilbert-space]]: the pairing is linear in the first argument, conjugate symmetric, and its norm is complete in a Hilbert space.

[F6] [[def-real-power]], [[thm-real-power-laws]] and [[thm-real-power-continuity-and-derivatives]]: positive real powers obey the exponent laws and are continuous with positive derivative on positive bases for positive exponents; $0^\nu=0$ for $\nu>0$.

[F7] [[lem-hilbert-tikhonov-normal-operator-invertible]]: the shifted normal inverse exists in either field; [[lem-hilbert-tikhonov-noise-amplification-bound]] gives $\|(S+\alpha I)^{-1}A^*\|\le1/(2\sqrt\alpha)$.

[F8] [[cor-mean-value-theorem]]: a positive derivative on an interval implies that endpoint increments are positive, hence the real power function is increasing.

## Proof

1.1 If $X=\{0\}$ or $A=0$, all asserted powers and products involving $A$ are zero, and the bounds and kernel conclusions follow directly. In the remaining case $S=A^*A$ is positive self-adjoint and $\|S\|=\|A\|^2>0$ by the adjoint identities. [A1, F4, F5, F7, given, algebra]

2.1 For real $X$, construct $X_c=X\times X$ with $(a+ib)(x,y)=(ax-by,bx+ay)$ and $\langle(x,y),(u,v)\rangle_c=\langle x,u\rangle+\langle y,v\rangle+i(\langle y,u\rangle-\langle x,v\rangle)$. Expansion verifies conjugate symmetry, complex linearity in the first argument and norm squared $\|x\|^2+\|y\|^2$; completeness follows by taking the two component limits of a Cauchy sequence. Thus this is a complex Hilbert space. Construct $Y_c$ similarly. The extensions $A_c(x,y)=(Ax,Ay)$ and $S_c(x,y)=(Sx,Sy)$ have the same operator norms as $A,S$: the upper bound follows by summing squared component bounds, and real vectors give the reverse inequality. The inner-product identity gives $A_c^*=(A^*)_c$ and $S_c=A_c^*A_c$. This construction uses the Hilbert sum norm, not a rotation-supremum Banach norm. [F4, F5, step 1.1, given, construct, algebra]

3.1 In the nonzero complex space, or in step 2.1's complexification, apply [F1]–[F2]. For $\nu>0$, $t^\nu$ extends continuously to zero: for $0<t<\varepsilon^{1/\nu}$, the positive derivative and [F8], followed by the power laws, give $t^\nu<\varepsilon$. Hence [F3] supplies real polynomials converging uniformly to $t^\nu$ on $[0,\|S\|]$. The calculus maps them to a norm-convergent sequence of self-adjoint operators. In the real case each polynomial in $S_c$ preserves $j(X)=\{(x,0)\}$, a closed real subspace, so the limit preserves it too. Restriction defines $S^\nu$ over the real field, independent of approximants by the norm estimate from [F1]. Polynomial identities and norm bounds pass to these restrictions. [A1, F1, F2, F3, F6, F8, step 2.1, given, construct, algebra]

4.1 For $h\in\ker A$, $Sh=0$, so every polynomial satisfies $p(S)h=p(0)h$. Taking step 3.1's approximants gives $S^\nu h=0$. Self-adjointness then gives $\langle S^\nu w,h\rangle=\langle w,S^\nu h\rangle=0$. Also the calculus norm gives $\|S^\nu\|\le\|S\|^\nu=\|A\|^{2\nu}$. [F1, F4, F5, step 3.1, algebra]

4.2 The calculus identifies $T_\alpha$ with $(t+\alpha)^{-1}$: multiplying this function by $t+\alpha$ gives the identity, so uniqueness of the inverse in [F7] applies. For $0<\gamma\le1$ and $u\ge0$, $u^\gamma\le1+u$ (use $u\le1$ and $u\ge1$ separately). Scaling $t=\alpha u$ therefore gives $\alpha t^\nu/(t+\alpha)\le\alpha^\nu$ for $0<\nu\le1$. Applying the isometric calculus and its real restriction proves the first filter bound. [F1, F6, F7, step 3.1, algebra]

5.1 Put $Q=\alpha T_\alpha S^\nu$. By [F4], $\|AQ\|^2=\|Q^*SQ\|$. Its scalar function is $[\alpha t^{\nu+1/2}/(t+\alpha)]^2$. Since $\nu+1/2\le1$, the same scalar estimate as step 4.2 bounds this by $\alpha^{2\nu+1}$, proving the second bound. The noise bound is [F7]. Finally $(AA^*+\alpha I)A=A(S+\alpha I)$ yields $AT_\alpha A^*=(AA^*+\alpha I)^{-1}AA^*$. Apply the calculus to $AA^*$ on $Y$, or directly use zero if $Y=\{0\}$: its function $t/(t+\alpha)$ is at most one. This proves the last bound in either field. [A1, F1, F2, F4, F7, step 3.1, step 4.2, algebra] ∎
