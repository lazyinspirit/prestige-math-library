---
id: lem-qc-clifford-t-projective-density
kind: lemma
title: Clifford+T Is Dense Projectively on One Qubit
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 6
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-qc-pauli-matrices
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-number-field
  - cor-algebraic-integer-minimal-polynomial-criterion
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-sine-and-cosine-parametrize-the-unit-circle
  - thm-sine-and-cosine-derivatives
  - thm-sine-and-cosine-addition-formulas
  - thm-quarter-turn-values-and-shift-formulas
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - lem-qc-pauli-vector-multiplication
  - lem-qc-irrational-rotation-dense-on-circle
  - lem-qc-two-axis-su2-generation
justified_by: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Christopher M. Dawson and Michael A. Nielsen, The Solovay–Kitaev Algorithm, arXiv:quant-ph/0505030v2"
      url: https://arxiv.org/pdf/quant-ph/0505030
      locator: §2 and §4, inverse-closed dense sets and SU(2), PDF pp. 2–10
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: https://arxiv.org/pdf/1907.09415
      locator: Ch. 2 §2.2, PDF pp. 26–29, Clifford+T approximate universality overview
---

## Statement

Use the Pauli matrices $X,Y,Z$ and exact gates $H=(X+Z)/\sqrt2$ and
$T=\operatorname{diag}(1,e^{i\pi/4})$ from
[[def-qc-pauli-matrices]] and
[[def-qc-one-qubit-gate-alphabet-and-rotations]]. Write $PU(2)$ for the
quotient of $U(2)$ by its unit-modulus scalar matrices, equipped with the
quotient topology. Their normalized lifts $h=iH$ and
$t=e^{-i\pi/8}T$ lie in $SU(2)$ and generate a dense subgroup of $SU(2)$;
therefore the projective classes of $H,T$ generate a dense subgroup of
$PU(2)$.

## Facts & Assumptions

**Given:** The exact Pauli matrices and one-qubit gates identified in the Statement.

[F1] [[lem-qc-pauli-vector-multiplication]]: the matrices $X,Y,Z$ are Hermitian and traceless, satisfy the Pauli vector product formula, and form a real basis of traceless Hermitian $2\times2$ matrices.

[F2] The monic minimal polynomial of an algebraic integer over $\mathbb Q$ has integer coefficients ([[cor-algebraic-integer-minimal-polynomial-criterion]]).

[F3] A number field is a finite extension of $\mathbb Q$ ([[def-number-field]]).

[F4] Powers of an irrational rotation are dense on the circle ([[lem-qc-irrational-rotation-dense-on-circle]]).

[F5] Two nonparallel one-parameter subgroups about Pauli axes have closure $SU(2)$ ([[lem-qc-two-axis-su2-generation]]).

[F6] Euler's formula gives $e^{it}=\cos t+i\sin t$ for real $t$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F7] A unitary matrix has an orthonormal eigenbasis ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F8] Sine and cosine are continuous, with $\sin0=0$ and $\cos0=1$ ([[thm-sine-and-cosine-derivatives]]).

[F9] [[def-qc-one-qubit-gate-alphabet-and-rotations]]: in the ordered computational basis, $H=(X+Z)/\sqrt2$ and $T=\operatorname{diag}(1,e^{i\pi/4})$ with the displayed scalar phases kept exactly.

[F10] Every unit-modulus complex number has a real angular parameter ([[thm-sine-and-cosine-parametrize-the-unit-circle]]).

[F11] Cosine is strictly decreasing on $[0,\pi]$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]]).

[F12] The cosine addition formula gives $\cos(2u)=\cos^2u-\sin^2u$ ([[thm-sine-and-cosine-addition-formulas]]), and $\cos(\pi/2)=0$ ([[thm-quarter-turn-values-and-shift-formulas]]). Together with the Pythagorean identity from [F6], this gives $\cos(2u)=2\cos^2u-1=1-2\sin^2u$.

## Proof

1.1 From [F1] and [F9], $X,Z$ are Hermitian and traceless, and $X^2=Z^2=I$, $XZ=-iY$, $ZX=iY$. Hence $H^*=H$, $\operatorname{tr}H=0$ and $H^2=(X^2+XZ+ZX+Z^2)/2=I$. Directly, $H=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$ has determinant $-1$, so $h=iH$ is unitary with determinant $1$. By [F6], $t=e^{-i\pi/8}T=\operatorname{diag}(e^{-i\pi/8},e^{i\pi/8})$ is also in $SU(2)$. Put $V=ht$, $s=\sin(\pi/8)$ and $c=\cos(\pi/8)$. Multiplying the displayed Pauli matrices gives $V=(s/\sqrt2)I+i(cX-sY+cZ)/\sqrt2$; hence $\operatorname{tr}V=\sqrt2s=:x$. By [F12], $0=\cos(\pi/2)=2\cos^2(\pi/4)-1$. Since $0<\pi/4<\pi/2$ and cosine is strictly decreasing by [F11], $\cos(\pi/4)>\cos(\pi/2)=0$, hence $\cos(\pi/4)=1/\sqrt2=\sqrt2/2$. Applying the other double-angle form in [F12] at $u=\pi/8$ gives $\sqrt2/2=1-2s^2$. Therefore $x^2=2s^2=1-\sqrt2/2$. [F1, F6, F9, F11, F12, given, algebra]

2.1 The number $x$ is a root of the monic rational quartic $P(X)=X^4-2X^2+1/2$. It has no rational root: if $r\in\mathbb Q$ were a root, then $r^2$ would solve $z^2-2z+1/2=0$, whose roots $1\pm\sqrt2/2$ are irrational. Indeed, if $\sqrt2=a/b$ in lowest terms, then $a^2=2b^2$ is even, so $a$ is even because an odd integer has odd square. Substituting $a=2c$ gives $b^2=2c^2$ even, so $b$ is even too, a contradiction. If $P$ factored over $\mathbb Q$, its lack of a rational root forces a factorization into two monic rational quadratics; write $P=(X^2+aX+b)(X^2-aX+d)$. Comparing coefficients gives $a(d-b)=0$, $b+d-a^2=-2$, and $bd=1/2$. If $a=0$, then $b,d$ would be rational roots of $Z^2+2Z+1/2$, whose discriminant is $2$, not a rational square. If $d=b$, then $b^2=1/2$, also impossible in $\mathbb Q$. Thus $P$ is irreducible and is the monic minimal polynomial of $x$. Every power of $x$ reduces using $P(x)=0$ to a rational linear combination of $1,x,x^2,x^3$, while these four powers are linearly independent over $\mathbb Q$ by irreducibility of $P$. Hence $[\mathbb Q(x):\mathbb Q]=4$, so $\mathbb Q(x)$ is a number field by [F3]. Finally [F2] shows $x$ is not an algebraic integer because $P\notin\mathbb Z[X]$. [F2, F3, step 1.1, algebra]

3.1 Write the eigenvalues of $V$ as $e^{i\alpha},e^{-i\alpha}$, so $x=2\cos\alpha$. If $\alpha/\pi$ were rational, these eigenvalues would be roots of unity. For each positive integer $m$, the polynomials $S_0=2$, $S_1=X$, $S_{m+1}=XS_m-S_{m-1}$ are monic integer polynomials for $m\ge1$ and satisfy $S_m(\lambda+\lambda^{-1})=\lambda^m+\lambda^{-m}$. For a root of unity of order $m$, this makes $x$ a root of the monic integer polynomial $S_m(X)-2$, contradicting step 2.1. Hence $\alpha/\pi$ is irrational. [step 2.1, algebra]

4.1 By [F7], $V\in SU(2)$ has eigenvalues $e^{i\alpha},e^{-i\alpha}$. Step 3.1 makes $\alpha/(2\pi)$ irrational, so [F4] makes its integer multiples dense modulo one. Diagonalizing $V$ shows its powers are dense in the torus $\{Q\operatorname{diag}(e^{it},e^{-it})Q^*:t\in\mathbb R\}$, because the parametrization is continuous and $2\pi$-periodic by [F6,F8]. The Pauli-vector part of the explicit matrix in step 1.1 is proportional to $v=(c,-s,c)$, where $c=\cos(\pi/8)$ and $s=\sin(\pi/8)$. Since $x=\sqrt2s$ and $x^2=1-\sqrt2/2$, the Pythagorean identity gives $c^2=1-s^2=1-x^2/2>1/2$, so both the $Z$ coordinate $c$ and the $XY$ component $(c,-s)$ of $v$ are nonzero. The subgroup generated by $h,t$ contains $tVt^{-1}$, so its closure also contains the conjugate torus. Conjugation by $t=\exp(-i\pi Z/8)$ rotates Pauli vectors about the $Z$ axis by $\pi/4$: direct multiplication gives $tXt^*=\cos(\pi/4)X+\sin(\pi/4)Y$ and $tYt^*=-\sin(\pi/4)X+\cos(\pi/4)Y$, while $tZt^*=Z$. If the rotated vector were parallel to $v$, the nonzero $Z$ coordinate would force the scalar to be $1$, so the nonzero vector $(c,-s)$ would be fixed by the planar rotation $R_{\pi/4}$. But $\det(R_{\pi/4}-I)=2(1-\cos(\pi/4))>0$ by [F11], so no nonzero planar vector is fixed. Hence the two axes are nonparallel. Normalize them as $a=v/|v|$ and $b=R_z(\pi/4)v/|v|$; they are nonparallel unit vectors because planar rotations preserve Euclidean length. Thus the closure contains the one-parameter subgroups about two nonparallel unit axes. [F1, F4, F6, F7, F8, F11, step 1.1, step 3.1, algebra]

5.1 By [F5] the closure of the subgroup generated by $h,t$ is $SU(2)$. The quotient map from $SU(2)$ to $PU(2)$ is continuous by the quotient topology. It is onto: for any $Q\in U(2)$, unitarity gives $|\det Q|=1$. By [F10] and Euler's formula [F6], write $\det Q=e^{i\theta}$ and set $\lambda=e^{-i\theta/2}$. Then $|\lambda|=1$, $\lambda^2=(\det Q)^{-1}$, and $\lambda Q\in SU(2)$ has the same projective class as $Q$. A continuous image of a dense subset is dense in the image, so the projective classes of words in $h,t$ are dense in $PU(2)$. Finally $h=iH$ and $t=e^{-i\pi/8}T$, so these classes equal those of $H,T$. [F5, F6, F10, step 4.1, algebra] ∎
