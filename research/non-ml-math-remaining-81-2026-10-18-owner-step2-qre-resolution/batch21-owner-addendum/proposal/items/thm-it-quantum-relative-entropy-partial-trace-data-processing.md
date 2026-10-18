---
id: thm-it-quantum-relative-entropy-partial-trace-data-processing
kind: theorem
title: Partial-trace data processing for finite quantum relative entropy
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [def-it-finite-dimensional-quantum-relative-entropy, thm-it-quantum-relative-entropy-joint-convexity, lem-it-quantum-relative-entropy-isometric-invariance, def-qc-partial-trace, def-qc-tensor-register-and-permutation, def-real-and-complex-inner-product-space, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, thm-non-negative-operator-characterisations, thm-qc-partial-trace-positive-and-trace-preserving, cor-complex-de-moivre-formula, thm-kernel-and-fibres-of-complex-exponential, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]
aliases: [thm-it-quantum-relative-entropy-partial-trace-dpi]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §5.2.3"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, arXiv:1106.1445v8, §§11.8–11.9"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

Let $H_A,H_B$ be nonzero finite-dimensional complex inner-product spaces, let $d=\dim H_B\ge1$, and let $A,B$ be non-negative operators on $H_A\otimes H_B$. Then

$$D(\operatorname{Tr}_B A\|\operatorname{Tr}_B B)\le D(A\|B).$$

## Facts & Assumptions

**Given:** The spaces and non-negative operators in the Statement.

[F1] [[thm-it-quantum-relative-entropy-joint-convexity]]: QRE is jointly convex for finite convex mixtures of non-negative operators.

[F2] [[lem-it-quantum-relative-entropy-isometric-invariance]]: QRE is invariant under simultaneous isometric conjugation.

[F3] [[def-qc-partial-trace]]: in product bases, $(\operatorname{Tr}_B R)_{ii'}=\sum_jR_{(i,j),(i',j)}$.

[F4] [[thm-qc-partial-trace-positive-and-trace-preserving]]: the partial trace preserves non-negativity and total trace.

[F5] [[def-qc-tensor-register-and-permutation]]: ordered product bases and their inner products retain the stated factor order.

[F6] [[def-it-finite-dimensional-quantum-relative-entropy]]: QRE uses support inclusion and the support-restricted spectral logarithms; if inclusion fails its value is $+\infty$.

[F7] [[thm-non-negative-operator-characterisations]]: non-negative operators have orthonormal eigenbases with nonnegative eigenvalues.

[F8] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]: every finite-dimensional inner-product space has an orthonormal basis.

[F9] [[def-real-and-complex-inner-product-space]]: the inner product is linear in its first argument, so $z\mapsto\langle z,e_s\rangle e_r$ is linear.

[F10] [[cor-complex-de-moivre-formula]]: for every integer $m$ and real $t$, $(\cos t+i\sin t)^m=\cos(mt)+i\sin(mt)$.

[F11] [[thm-kernel-and-fibres-of-complex-exponential]]: $\exp z=1$ exactly when $z\in2\pi i\mathbb Z$.

[F12] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: for real $t$, $\exp(it)=\cos t+i\sin t$ and $|\exp(it)|=1$.

## Proof

1.1 Choose an orthonormal basis $(e_j)_{j<d}$ of $H_B$ using [F8], and set $\omega=\exp(2\pi i/d)$. By [F10] and [F12], $|\omega|=1$ and $\omega^m=\exp(2\pi i m/d)$ for every integer $m$; by [F11], $\omega^m=1$ exactly when $d$ divides $m$. Thus $\omega$ has order $d$. Define $Xe_j=e_{j+1\bmod d}$ and $Ze_j=\omega^je_j$; these maps are unitary because they respectively permute the basis and multiply its vectors by unit-modulus scalars. If $d\nmid m$, then $q=\omega^m\ne1$, $q^d=1$, and $(1-q)\sum_{b=0}^{d-1}q^b=1-q^d=0$, so $d^{-1}\sum_{b=0}^{d-1}\omega^{bm}=0$; if $d\mid m$, that average is $1$. Choose an orthonormal basis $(u_i)$ of $H_A$ by [F8]. For $0\le r,s<d$, define the linear block $R_{rs}:H_A\to H_A$ by $R_{rs}u_{i^\prime}=\sum_i\langle R(u_{i^\prime}\otimes e_s),u_i\otimes e_r\rangle u_i$, extending linearly. Expanding $R(u_{i^\prime}\otimes e_s)$ in the product basis [F5] then gives $R=\sum_{r,s}R_{rs}\otimes M_{rs}$, where $M_{rs}z:=\langle z,e_s\rangle e_r$: both sides agree on every product basis vector. Direct application to basis vectors gives $Z^bM_{rs}(Z^b)^*=\omega^{b(r-s)}M_{rs}$ and $X^aM_{rs}(X^a)^*=M_{r+a,s+a}$, with indices modulo $d$. For $0\le r,s<d$, $d\mid(r-s)$ exactly when $r=s$, so the proved phase average removes precisely the off-diagonal units. Also $d^{-1}\sum_{a=0}^{d-1}M_{r+a,r+a}=I_B/d$. Therefore $\mathcal T(R):=d^{-2}\sum_{a,b}(I_A\otimes X^aZ^b)R(I_A\otimes X^aZ^b)^*=\sum_rR_{rr}\otimes I_B/d=\operatorname{Tr}_B(R)\otimes I_B/d$ by [F3]. For every $a,b$, the lifted map $I_A\otimes X^aZ^b$ sends $u_i\otimes e_j$ to $\omega^{bj}u_i\otimes e_{j+a}$, hence sends an orthonormal product basis to an orthonormal product basis; it is therefore unitary, including $d=1$. When $d=1$, $X=Z=I_B$ and there is only the diagonal unit, so the same formula holds directly. [given, F3, F5, F8, F9, F10, F11, F12, construct, choose, algebra]

1.2 For non-negative $C,D$ on $H_A$, their tensor products with $I_B/d$ have supports $\operatorname{supp}(C)\otimes H_B$ and $\operatorname{supp}(D)\otimes H_B$ by the tensor-product eigenbases [F7]. Thus support inclusion holds for $(C,D)$ exactly when it holds for $(C\otimes I_B/d,D\otimes I_B/d)$. In the finite branch, the tensor eigenvalues add $-\ln d$ to both logarithms, which cancels, while $\operatorname{tr}(I_B/d)=1$; hence $D(C\otimes I_B/d\|D\otimes I_B/d)=D(C\|D)$. If inclusion fails both sides are $+\infty$ by [F6]. [given, F6, F7, algebra]

2.1 Apply joint convexity [F1] to the finite average defining $\mathcal T$ and isometric invariance [F2] to each unitary conjugate. This gives $D(\mathcal T(A)\|\mathcal T(B))\le D(A\|B)$. [given, F1, F2, step 1.1, algebra]

3.1 By [F4], $C=\operatorname{Tr}_B A$ and $D=\operatorname{Tr}_B B$ are non-negative. Substitute them into step 1.2, use step 1.1 to identify their twirls, and then apply step 2.1 to obtain $D(\operatorname{Tr}_B A\|\operatorname{Tr}_B B)\le D(A\|B)$. [given, F4, step 1.1, step 1.2, step 2.1, algebra] ∎
