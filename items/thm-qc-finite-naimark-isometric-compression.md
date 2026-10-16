---
id: thm-qc-finite-naimark-isometric-compression
kind: theorem
title: "Finite Naimark isometric compression"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qc-povm-and-outcome-law, def-qc-projective-measurement, def-qc-density-operator, def-non-negative-and-positive-operator, def-trace-of-an-endomorphism, thm-trace-of-ab-equals-trace-of-ba, thm-non-negative-square-root-exists-and-is-unique, def-qc-tensor-map, def-qc-dirac-notation-conversion, def-qc-register-and-computational-basis, def-qc-tensor-register-and-permutation, lem-qc-tensor-product-basis-and-dimension, thm-gram-schmidt-orthonormalisation, def-dimension, thm-qc-projective-measurement-outcome-law, def-adjoint-of-a-linear-map-between-inner-product-spaces, thm-adjoint-exists-and-is-unique-in-finite-dimension, def-real-and-complex-inner-product-space]
justified_by: []
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §2.3.2, Theorem 2.42"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3: Foundations II: Measurement and Evolution, §3.1.2"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
verification:
  precheck: pass
---

## Statement

Let $H$ be a nonzero finite-dimensional complex inner-product space, let $\Omega$ be a finite nonempty set, and let $(E_a)_{a\in\Omega}$ be a finite POVM on $H$. Put $r=|\Omega|$, fix any bijection $j:\Omega\to\{0,\ldots,r-1\}$, and let $R=\mathbb C^r$ with standard orthonormal basis $e_0,\ldots,e_{r-1}$; write $|a\rangle=e_{j(a)}$. Define

$$Vx:=\sum_{a\in\Omega} E_a^{1/2}x\otimes |a\rangle,\qquad Q_a:=I_H\otimes |a\rangle\langle a|.$$

Then $V^*V=I_H$, the family $(Q_a)_{a\in\Omega}$ is a finite projective measurement on $H\otimes R$, and $V^*Q_aV=E_a$ for every $a$. For every density operator $\rho$ on $H$, $V\rho V^*$ is a density operator on $H\otimes R$ and

$$\operatorname{tr}_{H\otimes R}(V\rho V^*Q_a)=\operatorname{tr}_{H}(\rho E_a).$$

The result holds for every finite enumeration $j$ and asserts an algebraic compression, not a physical realization.

## Facts & Assumptions

**Given:** A nonzero finite-dimensional complex-inner-product space $H$, a finite nonempty outcome set $\Omega$, a finite POVM $(E_a)$ on $H$, any enumeration $j$ of $\Omega$, and a density operator $\rho$ on $H$.

[F1] [[def-qc-povm-and-outcome-law]]: each $E_a$ is nonnegative and $\sum_aE_a=I_H$.

[F2] [[def-qc-projective-measurement]]: a projective measurement is a finite family of pairwise orthogonal self-adjoint projections summing to the identity.

[F3] [[def-qc-density-operator]]: on nonzero finite-dimensional $H$, a density operator is nonnegative and has trace one.

[F4] [[def-qc-register-and-computational-basis]]: for $r\ge1$, the register $\mathbb C^r$ has its standard ordered orthonormal basis.

[F5] [[def-qc-tensor-register-and-permutation]]: after specifying ordered orthonormal bases for the factors, their tensor register has the product inner product, with its factors in the declared order.

[F6] [[lem-qc-tensor-product-basis-and-dimension]]: product vectors from specified orthonormal bases of the factors form an orthonormal basis and tensor dimensions multiply.

[F7] [[def-qc-dirac-notation-conversion]]: the root pairing is linear in its first argument and $|u\rangle\langle v|$ sends $z$ to $\langle z,v\rangle u$.

[F8] [[def-non-negative-and-positive-operator]]: nonnegative means self-adjoint with $\langle Tx,x\rangle\ge0$ for every vector $x$.

[F9] [[thm-non-negative-square-root-exists-and-is-unique]]: each nonnegative $E_a$ has a unique nonnegative square root $M_a$ satisfying $M_a^2=E_a$.

[F10] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: $T^*$ satisfies $\langle Tx,y\rangle=\langle x,T^*y\rangle$ under the root convention.

[F11] [[thm-adjoint-exists-and-is-unique-in-finite-dimension]]: every linear map between finite-dimensional inner-product spaces has a unique adjoint.

[F12] [[thm-trace-of-ab-equals-trace-of-ba]]: traces of compatible rectangular products satisfy $\operatorname{tr}(AB)=\operatorname{tr}(BA)$.

[F13] [[def-real-and-complex-inner-product-space]]: complex inner products are positive definite and linear in the first argument.

[F14] [[def-trace-of-an-endomorphism]]: endomorphism trace is the matrix trace in any ordered basis and is basis-independent.

[F15] [[def-qc-tensor-map]]: tensor maps are the unique linear maps satisfying their elementary-tensor formula.

[F16] [[thm-qc-projective-measurement-outcome-law]]: for a density operator and a finite projective measurement, the outcome weight at $a$ is $\operatorname{tr}(\rho P_a)$.

[F17] [[thm-gram-schmidt-orthonormalisation]]: Gram–Schmidt turns a finite linearly independent list, in particular a basis, into an orthonormal list with the same span.

[F18] [[def-dimension]]: finite-dimensional means having a finite basis; since $H$ is nonzero, its basis is nonempty.

## Proof

1.1 Choose a finite basis of $H$, which exists by [F18] and is linearly independent by the basis definition, and apply [F17] to obtain an orthonormal basis of $H$. With the standard orthonormal basis of $R$ from [F4], [F6] gives an orthonormal product basis of $H\otimes R$. For elementary tensors, [F7] and the tensor-map formula [F15] give $Q_a(x\otimes e_c)=\delta_{j(a),c}x\otimes e_{j(a)}$. Therefore $Q_a^2=Q_a$, $Q_aQ_b=0$ when $a\ne b$, and $\sum_aQ_a=I$ on every product-basis vector; equality on that basis gives these operator identities. For elementary tensors $x\otimes e_c,y\otimes e_d$, orthonormality and the product inner product give $\langle Q_a(x\otimes e_c),y\otimes e_d\rangle=\delta_{j(a),c}\delta_{j(a),d}\langle x,y\rangle=\langle x\otimes e_c,Q_a(y\otimes e_d)\rangle$. Sesquilinearity and spanning by [F6] extend this identity to all vectors, so uniqueness of adjoints [F11] gives $Q_a^*=Q_a$. By [F2], $(Q_a)$ is a projective measurement. [given, F2, F4, F5, F6, F7, F10, F11, F13, F15, F17, F18]

1.2 Put $M_a=E_a^{1/2}$ using [F9]. Each summand $x\mapsto M_ax\otimes e_{j(a)}$ is linear by [F15], so $V$ is linear. For $x,y\in H$, orthogonality of the register labels and the product inner product give $\langle Vx,Vy\rangle=\sum_a\langle M_ax,M_ay\rangle=\left\langle x,\left(\sum_aM_a^*M_a\right)y\right\rangle=\langle x,y\rangle$, because $M_a$ is self-adjoint by [F8]–[F9], so $M_a^*M_a=E_a$, and [F1] gives $\sum_aE_a=I_H$. The adjoint identities [F10]–[F11] also give $\langle Vx,Vy\rangle=\langle x,V^*Vy\rangle$. For fixed $y$, set $x=(V^*V-I_H)y$; then $\|x\|^2=0$, so positive definiteness [F13] implies $(V^*V-I_H)y=0$. Since $y$ was arbitrary, $V^*V=I_H$. [given, F1, F4, F5, F8, F9, F10, F11, F13, F15]

2.1 Fix $b\in\Omega$. Step 1.1's action formula and the definition of $V$ give $Q_bVx=M_bx\otimes e_{j(b)}$. For all $x,y\in H$, the adjoint identity [F10], conjugate symmetry [F13], and product inner product [F5] yield $\langle V^*Q_bVx,y\rangle=\langle Q_bVx,Vy\rangle=\langle M_bx,M_by\rangle=\langle x,E_by\rangle$, where the last equality uses self-adjointness from [F8]–[F9], which gives $M_b^*M_b=E_b$. If $T=V^*Q_bV-E_b$, then $\langle Tx,y\rangle=0$ for every $x,y$. Taking $y=Tx$ gives $\|Tx\|^2=0$, so [F13] implies $Tx=0$ for every $x$; hence $V^*Q_bV=E_b$. [given, F5, F8, F9, F10, F13, step 1.1]

2.2 For all $z,w\in H\otimes R$, the adjoint identities [F10] and self-adjointness of $\rho$ from [F3], [F8] give $\langle V\rho V^*z,w\rangle=\langle\rho V^*z,V^*w\rangle=\langle V^*z,\rho V^*w\rangle=\langle z,V\rho V^*w\rangle$, where the last equality follows from [F10] and conjugate symmetry [F13]. Thus $V\rho V^*$ is self-adjoint. Also, for every $z$, $\langle V\rho V^*z,z\rangle=\langle\rho V^*z,V^*z\rangle\ge0$ by [F3], [F8] and [F10], so it is nonnegative by [F8]. Also $\dim(H\otimes R)=r\dim H>0$ by [F4] and [F6], since $H$ is nonzero by [F18] and $r\ge1$. In bases, rectangular trace cyclicity [F12] and [F14] give $\operatorname{tr}(V\rho V^*)=\operatorname{tr}(V^*V\rho)=\operatorname{tr}(\rho)=1$ by step 1.2 and [F3]. Therefore $V\rho V^*$ is a density operator on the nonzero space $H\otimes R$. [given, F3, F4, F6, F8, F10, F12, F13, F14, F18, step 1.1, step 1.2]

3.1 Step 1.1 proves $(Q_a)$ is a projective measurement and step 2.2 proves $V\rho V^*$ is a density operator. Thus [F16] identifies its $b$-outcome weight as $\operatorname{tr}(V\rho V^*Q_b)$. Rectangular trace cyclicity [F12] and [F14] rewrite this as $\operatorname{tr}(V^*Q_bV\rho)$; step 2.1 makes that $\operatorname{tr}(E_b\rho)=\operatorname{tr}(\rho E_b)$, using [F12] once more on $H$. The final expression is the original POVM weight by [F1], proving the claimed equality. [given, F1, F12, F14, F16, step 1.1, step 2.1, step 2.2] ∎
