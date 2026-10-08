---
id: ex-cg-wall-form-and-line-restrictions-of-a-plane-rotation
kind: example
title: "The Wall form and line restrictions of a plane rotation, and the necessity of a common upper bound"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
deps: [cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, cor-trigonometric-parity-and-pythagorean-identity, def-cg-canonical-reflection-homomorphism, def-cg-coxeter-diagram-components-and-finite-type, def-cg-real-coxeter-form-and-reflection, def-cg-reflection-length-absolute-order-and-moved-space, def-hh-coxeter-matrix-word-group-and-length, def-linear-isometry-and-orthogonal-or-unitary-operator, def-pi-via-first-positive-cosine-zero, def-tangent-cotangent-secant-cosecant, lem-cg-orthogonal-wall-form-and-subspace-restriction, lem-cg-reflection-factorizations-and-independent-normals, lem-cg-reflection-form-invariance-and-rank-two-orders, lem-cg-reflection-representation-descends-and-root-norms, lem-sine-positive-and-cosine-decreasing-on-zero-two, thm-cg-carter-reflection-length-and-absolute-order, thm-cg-finite-coxeter-classification-including-h-and-dihedral, thm-cg-root-inversion-formulas-and-strong-exchange, thm-cg-root-length-criterion-and-faithfulness, thm-double-angle-and-power-reduction-identities, thm-cosine-has-a-smallest-positive-zero]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "T. Brady and C. Watt, Lattices in finite real reflection groups (arXiv:math/0501502)"
      url: https://arxiv.org/pdf/math/0501502
      locator: "Introduction and section 2 (printed pp. 1-3: reflection length, absolute order, moved and fixed spaces M(A), F(A), M(A)=F(A)^perp, the main result of [7], and notes (1)-(7)); the opening of section 3 through Note 3.5 (printed pp. 3-6); and the opening paragraphs of section 4 (printed pp. 8-9) with the A_3 intersection example"
    - title: "R. W. Carter, Conjugacy classes in the Weyl group, Compositio Mathematica 25 (1972) 1-59 (Numdam full text)"
      url: https://www.numdam.org/item/CM_1972__25_1_1_0.pdf
      locator: "Section 2 'Products of reflections', printed pp. 2-5: the root-system setup (i)-(iv) and Lemmas 1-5 with the proofs of Lemmas 2, 3 and 4"
dependency_level: 18
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Let $m\ge3$, $c=\cos(\pi/m)$, $V=\mathbb Re_s+\mathbb Re_t$ with the positive definite Coxeter form $B$ of the rank-two system $I_2(m)$, and let $A:=\rho(st)=r_sr_t$ ([[def-cg-real-coxeter-form-and-reflection]], [[lem-cg-reflection-form-invariance-and-rank-two-orders]] (3), [[def-cg-canonical-reflection-homomorphism]], [[thm-cg-finite-coxeter-classification-including-h-and-dihedral]]); let $\ell_T$, $M$ and $\le_{\mathrm O}$ be as in [[def-cg-reflection-length-absolute-order-and-moved-space]] and [[lem-cg-orthogonal-wall-form-and-subspace-restriction]], and let $T$, $\Phi$ be the reflection set and root system ([[thm-cg-root-inversion-formulas-and-strong-exchange]] (1)). Use faithfulness of [[thm-cg-root-length-criterion-and-faithfulness]] (3) to identify $W$ with $\rho(W)$ when writing $\ell$, $\ell_T$ and $\le_T$ for these operators. Then:

**(i)** $\operatorname{tr}A=2\cos(2\pi/m)\ne2=\operatorname{tr}\mathrm{id}$, so $1$ is not an eigenvalue of $A$, $F(A)=0$ and $M(A)=V$. In oriented orthonormal coordinates adapted to $A$ it is the rotation by $\theta=2\pi/m$, and

$$S_A=(A-\mathrm{id})^{-1}\ \text{is multiplication by}\ \frac{1}{e^{i\theta}-1}=-\frac12-\frac i2\cot\frac\theta2,$$

so the Wall form $\chi_A(u,v)=B(S_Au,v)$ satisfies $\chi_A(u,v)+\chi_A(v,u)=-B(u,v)$ with symmetric part $-\frac12B$.

**(ii)** For every line $L\subseteq V$ the operator $H_L=\Pi_LS_A\Pi_L$ is the scalar $-\frac12$ on $L$, so $A_L=\mathrm{id}-2\Pi_L$ is the reflection of the plane with normal line $L$, $A_L\le_{\mathrm O}A$, and $L\mapsto A_L$ is a bijection from the lines of $V$ onto the reflections $B\le_{\mathrm O}A$. Moreover $A_L$ lies in $\rho(W)$ if and only if $L$ is one of the $m$ root lines $\mathbb R\beta$, $\beta\in\Phi$; so for a line $L$ that is not a root line, $A_L$ is an orthogonal reflection whose moved space is $L$ but $A_L\notin\rho(W)$.

**(iii)** Take $m=4$ and put $w_0:=A^2$ (the rotation by $\pi$, the longest element of $W=I_2(4)$). Then $M(A)=M(w_0)=V$, so $M(w_0)\subseteq M(A)$, while

$$\ell_T(w_0^{-1}A)=\ell_T(A^{-1}w_0)=\ell_T(A)=2,$$

so $w_0\not\le_T A$ and $A\not\le_T w_0$; in fact $A$ and $w_0$ have no common upper bound in $W$, since every $\delta\in W$ has $\ell_T(\delta)=\dim M(\delta)\le2$ ([[thm-cg-carter-reflection-length-and-absolute-order]] (1)), so a common upper bound would have to equal both $A$ and $w_0$. Hence the implication $M(\alpha)\subseteq M(\beta)\Rightarrow\alpha\le_T\beta$ fails without the common-upper-bound hypothesis of the rigidity theorem.

## Facts & Assumptions

**Given:** The rank-two datum $m\ge3$, $c=\cos(\pi/m)$, $V=\mathbb Re_s+\mathbb Re_t$, $B$, $\rho$, $T$, $\Phi$ and the elements $A=\rho(st)=r_sr_t$, $w_0=A^2$; $\ell_T$, $M$, $F$, $\Pi_L$, $H_L$, $A_L$ are as in [[def-cg-reflection-length-absolute-order-and-moved-space]] and [[lem-cg-orthogonal-wall-form-and-subspace-restriction]].

[F1] In the ordered basis $(e_s,e_t)$ one has $B(e_s,e_s)=B(e_t,e_t)=1$ and $B(e_s,e_t)=-c$ with $c=\cos(\pi/m)$, and $B|_V$ is positive definite for finite $m$; the product $A=r_sr_t$ has the matrix $\begin{pmatrix}4c^2-1&-2c\\2c&-1\end{pmatrix}$ of determinant $1$, trace $2\cos(2\pi/m)$ and order $m$ (that is, $A^m=\mathrm{id}_V$ and $A^k\ne\mathrm{id}_V$ for $0<k<m$). [[def-cg-real-coxeter-form-and-reflection]] [[lem-cg-reflection-form-invariance-and-rank-two-orders]]

[F2] The type $I_2(m)$, $3\le m<\infty$, is the finite-type diagram with two vertices joined by a single edge labelled $m$; the corresponding Coxeter system has exactly the two simple reflections $s,t$, and $\rho(st)=r_sr_t$. [[thm-cg-finite-coxeter-classification-including-h-and-dihedral]] [[def-cg-coxeter-diagram-components-and-finite-type]] [[def-cg-canonical-reflection-homomorphism]]

[F3] The Wall form lemma holds on the positive definite plane $(V,B)$: (1) $M(X)=F(X)^\perp$ and $V=M(X)\oplus F(X)$; (2) $\chi_X(u,v)=B((X-\mathrm{id})|_{M(X)}^{-1}u,v)$ satisfies $\chi_X(u,v)+\chi_X(v,u)=-B(u,v)$, is nondegenerate, and has symmetric part $-\tfrac12B$; (3) for a line $L\subseteq M(X)$ the operator $H_L$ with $B(H_Lu,v)=\chi_X(u,v)$ on $L$ satisfies $H_L+H_L^*=-\mathrm{id}_L$ and is invertible, $A_L=\mathrm{id}+H_L^{-1}$ on $L$ and $\mathrm{id}$ on $L^\perp$ has $M(A_L)=L$, and the reflections of the orthogonal group of $V$ are exactly the maps $\mathrm{id}-2\Pi_L$ for lines $L$; (4) $A_L\le_{\mathrm O}X$, and $U\mapsto X_U$ is a bijection from the subspaces of $M(X)$ onto $\{Y:Y\le_{\mathrm O}X\}$ with inverse $Y\mapsto M(Y)$, order-preserving and order-reflecting for inclusion and $\le_{\mathrm O}$. [[lem-cg-orthogonal-wall-form-and-subspace-restriction]]

[F4] $\ell_T(w)=\dim M(w)$ for all $w\in W$. [[thm-cg-carter-reflection-length-and-absolute-order]]

[F5] Every nonzero moved space of an element of $W$ contains a root; for every root $\beta$ the reflection with normal $\beta$ equals $\rho(t_\beta)$ with $t_\beta\in T$; the map $\{\pm\alpha:\alpha\in\Phi\}\to T$, $\{\pm\alpha\}\mapsto t_\alpha$, is a bijection, so the root lines $\mathbb R\alpha$ are in bijection with $T$; and $\rho$ is injective. [[lem-cg-reflection-factorizations-and-independent-normals]] [[thm-cg-root-inversion-formulas-and-strong-exchange]] [[thm-cg-root-length-criterion-and-faithfulness]]

[F6] Trigonometry: $\pi$ is twice the smallest positive zero of $\cos$, which lies in $(0,2)$, so $0<\pi<4$, $\cos(\pi/2)=0$ and $\cos$ has no zero in $[0,\pi/2)$; $\sin x>0$ for $0<x\le2$ and $\cos$ is strictly decreasing on $[0,2]$; $\sin^2x+\cos^2x=1$; $\sin2x=2\sin x\cos x$ and $\cos2x=1-2\sin^2x$; $e^{i\theta}=\cos\theta+i\sin\theta$; and $\cot=\cos/\sin$ where defined. [[def-pi-via-first-positive-cosine-zero]] [[thm-cosine-has-a-smallest-positive-zero]] [[lem-sine-positive-and-cosine-decreasing-on-zero-two]] [[cor-trigonometric-parity-and-pythagorean-identity]] [[thm-double-angle-and-power-reduction-identities]] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]] [[def-tangent-cotangent-secant-cosecant]]

[F7] $u\le_Tv$ means $\ell_T(v)=\ell_T(u)+\ell_T(u^{-1}v)$, and $B\le_{\mathrm O}X$ means $\dim M(X)=\dim M(B)+\dim M(B^{-1}X)$. [[def-cg-reflection-length-absolute-order-and-moved-space]]

## Verification

**Proof technique:** direct.

1.1 By [F1] the matrix of $A$ in the basis $(e_s,e_t)$ has determinant $1$ and trace $2\cos(2\pi/m)$, and $A$ has order $m$; the trace differs from $\operatorname{tr}\mathrm{id}=2$ because $1-\cos(2\pi/m)=2\sin^2(\pi/m)>0$ by [F6], as $\pi/m\in(0,\pi/3]\subset(0,2]$ gives $\sin(\pi/m)>0$. [F1, F2, F6]

1.2 Put $u:=(e_s+e_t)/\sqrt{2-2c}$ and $\tilde w:=(e_t-e_s)/\sqrt{2+2c}$; the square roots are nonzero because $2-2c=4\sin^2(\pi/(2m))>0$ and $2+2c=4\cos^2(\pi/(2m))>0$, since $0<\pi/(2m)\le\pi/6<2$ and $\cos$ has no zero in $[0,\pi/2)$ by [F6]. A direct computation with [F1] gives $B(u,u)=B(\tilde w,\tilde w)=1$ and $B(u,\tilde w)=0$, so $(u,\tilde w)$ is an oriented orthonormal basis, and computing $Au=\cos\theta\,u+\sin\theta\,\tilde w$, $A\tilde w=-\sin\theta\,u+\cos\theta\,\tilde w$ with $\theta:=2\pi/m$: indeed $B(Au,u)=2c^2-1=\cos\theta$, $B(Au,\tilde w)=2c\sin(\pi/m)=\sin\theta$, $B(A\tilde w,u)=-\sin\theta$ and $B(A\tilde w,\tilde w)=2c^2-1=\cos\theta$, using $1-c^2=\sin^2(\pi/m)$ and the double-angle identities of [F6]. Hence in these coordinates $A$ is the rotation by $\theta=2\pi/m$, and $1$ is not an eigenvalue of $A$: the matrix of $A-\mathrm{id}$ has determinant $(\cos\theta-1)^2+\sin^2\theta=2-2\cos\theta=4\sin^2(\theta/2)\ne0$, since $\theta/2=\pi/m\in(0,2]$. Therefore $F(A)=\ker(A-\mathrm{id})=0$ and $M(A)=F(A)^\perp=V$ by [F3](1). Moreover $S_A=(A-\mathrm{id})^{-1}$, computed from the displayed rotation matrix, is $\tfrac12\begin{pmatrix}-1&\sin\theta/(1-\cos\theta)\\-\sin\theta/(1-\cos\theta)&-1\end{pmatrix}=-\tfrac12\mathrm{id}-\tfrac12\cot(\theta/2)J$ with $J=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$, because $\sin\theta/(1-\cos\theta)=\cot(\theta/2)$ by the double-angle identities; under the identification of the oriented plane with $\mathbb C$, the matrix $J$ is multiplication by $i$, so $S_A$ is multiplication by $-\tfrac12-\tfrac i2\cot(\theta/2)$, and $(e^{i\theta}-1)\bigl(-\tfrac12-\tfrac i2\cot(\theta/2)\bigr)=1$ by the displayed identity $e^{i\theta}=\cos\theta+i\sin\theta$ together with $\sin^2\theta+\cos^2\theta=1$ and $\sin\theta/(1-\cos\theta)=\cot(\theta/2)$, so $S_A$ is multiplication by $1/(e^{i\theta}-1)$. The identity $\chi_A(u,v)+\chi_A(v,u)=-B(u,v)$ with symmetric part $-\tfrac12B$ is [F3](2). [F1, F3, F6]

2.1 Part (iii). Take $m=4$, so $\theta=\pi/2$ and the rotation matrix of step 1.2 gives $A^2=\begin{pmatrix}-1&0\\0&-1\end{pmatrix}=-\mathrm{id}_V$; hence $M(w_0)=\operatorname{im}(-2\mathrm{id})=V=M(A)$ for $w_0:=A^2$, so $M(w_0)\subseteq M(A)$. By [F4] and step 1.2, $\ell_T(A)=\dim M(A)=2$ and $\ell_T(w_0)=\dim M(w_0)=2$; also $w_0^{-1}A=A^{-2}A=A^{-1}$ and $A^{-1}w_0=A^{-1}A^2=A$, and $A^{-1}=A^3$ has moved space $V$ because $F(A^{-1})=F(A)=0$, so $\ell_T(w_0^{-1}A)=\ell_T(A^{-1}w_0)=\ell_T(A)=2$. Hence $\ell_T(A)=2\ne4=\ell_T(w_0)+\ell_T(w_0^{-1}A)$ and $\ell_T(w_0)=2\ne4=\ell_T(A)+\ell_T(A^{-1}w_0)$, so $w_0\not\le_TA$ and $A\not\le_Tw_0$ by [F7]. If some $\delta\in W$ satisfied $A\le_T\delta$ and $w_0\le_T\delta$, then $2=\ell_T(A)\le\ell_T(\delta)$ and $\ell_T(\delta)=\dim M(\delta)\le\dim V=2$ by [F4], so [F7] gives $\ell_T(\delta)=\ell_T(A)+\ell_T(A^{-1}\delta)=2$ and hence $\ell_T(A^{-1}\delta)=0$; then $A^{-1}\delta=1$, since $\ell_T(x)=\dim M(x)=0$ forces $\rho(x)=\mathrm{id}$ and $x=1$ by [F5], so $\delta=A$, contradicting $w_0\not\le_TA$; thus $A$ and $w_0$ have no common upper bound. Finally $w_0=A^2$ is the unique longest element. Since $sAs=A^{-1}$ and $t=A^{-1}s$, every word reduces to $A^k$ or $A^ks$ with $0\le k\le3$. The four rotations are distinct by the order of $A$; the four $A^ks$ are distinct by cancellation, and the two lists cannot overlap: overlap would give $s=A^j$, whereas $s$ has moved dimension one by [F3] and [F5], and $A^j$ has moved dimension zero for $j=0$ and two for $j=1,2,3$ by the displayed rotation matrices. These eight elements are $1,s,t,st,ts,sts,tst,stst$, because $As=sts$, $A^3s=t$, and $A^2s=tst$ (the relation $A^4=1$ gives $stst=tsts$). A word of length at most three reduces, by cancelling adjacent equal generators, to one of the first seven words; these are distinct from $A^2=stst$. Thus $\ell(A^2)=4$, and every other element has length at most three. [step 1.2, F1, F3, F4, F5, F7]

2.2 Part (ii), first half. Let $L\subseteq V$ be a line; since $M(A)=V$ by step 1.2, $L\subseteq M(A)$, so the operator $H_L=\Pi_LS_A\Pi_L$ of [F3](3) is defined. As $L$ is one-dimensional, $H_L$ is multiplication by a real scalar $\lambda$, and the identity $H_L+H_L^*=-\mathrm{id}_L$ of [F3](3) gives $2\lambda=-1$, so $\lambda=-\tfrac12$; hence $A_L=\mathrm{id}+H_L^{-1}$ acts on $L$ as $-\mathrm{id}_L$ and on $L^\perp$ as the identity, that is $A_L=\mathrm{id}-2\Pi_L$. By [F3](3) $M(A_L)=L$, and $A_L\le_{\mathrm O}A$ by [F3](4). The assignment $L\mapsto A_L$ is a bijection from the lines of $V$ onto the reflections $B\le_{\mathrm O}A$: [F3](4) gives a bijection $U\mapsto A_U$ from the subspaces of $M(A)=V$ onto $\{B:B\le_{\mathrm O}A\}$ whose inverse is $B\mapsto M(B)$ and which satisfies $M(A_U)=U$, and the one-dimensional subspaces of $V$ are the lines, while the elements $B\le_{\mathrm O}A$ with $\dim M(B)=1$ are exactly the reflections $B\le_{\mathrm O}A$ (the elements $B=\mathrm{id}$ and $B=A$ correspond to $U=0$ and $U=V$ and are not reflections, as $\dim M(A)=2$). [step 1.2, F3]

2.3 $T$ has exactly $m$ elements. Since $A=st$ one has $sA=t$ and $A^{-1}=ts$, and the set $W_0:=\{A^j,A^js:0\le j<m\}$ contains $1$, $A$, $s=A^0s$ and $t=A^{m-1}s$ and is closed under multiplication and inversion, since $sA^{j}s=A^{-j}$ for every $j$: it is a subgroup of $W$ containing $s$ and $t$, so $W_0=W$. Conjugation by the elements of $W_0$ gives $A^ksA^{-k}=A^{2k}s$, $A^ktA^{-k}=A^{2k-1}s$ and $(A^ks)t(A^ks)^{-1}=A^{2k+1}s$, so every element of $T$ lies in $\{A^js:0\le j<m\}$, while conversely $A^{2k}s=A^ksA^{-k}$ and $A^{2k-1}s=A^ktA^{-k}$ are conjugates of $s$ and $t$; hence $T=\{A^js:0\le j<m\}$, and these $m$ elements are distinct because $A$ has order $m$ by [F1]. By the bijection $\{\pm\alpha:\alpha\in\Phi\}\to T$ of [F5] the plane has exactly $m$ root lines, and the lines $\mathbb R(e_s+a e_t)$ for $a\in\mathbb R$ are pairwise distinct, so there are infinitely many lines and some are not root lines. [step 1.2, F1, F5]

3.1 Part (ii), second half. If $L=\mathbb R\beta$ for a root $\beta\in\Phi$, then by [F5] the reflection $\mathrm{id}-2\Pi_L$ with normal $\beta$ equals $r_\beta=\rho(t_\beta)\in\rho(W)$; by step 2.2 this operator is $A_L$, so $A_L\in\rho(W)$. Conversely suppose $A_L\in\rho(W)$, say $A_L=\rho(w)$; then $\dim M(w)=\dim M(A_L)=1$ by step 2.2, so the nonzero moved space $M(w)=L$ contains a root $\beta$ by [F5], and $L=\mathbb R\beta$ is a root line. Hence $A_L$ lies in $\rho(W)$ exactly when $L$ is one of the $m$ root lines, and for every other line $L$ the operator $A_L$ is an orthogonal reflection with moved space $L$ such that $A_L\notin\rho(W)$. [step 2.2, F5]


4.1 Collecting the verified claims: (i) is steps 1.1 and 1.2; (ii) is steps 2.2, 2.3 and 3.1; (iii) is step 2.1. In particular the converse implication $M(\alpha)\subseteq M(\beta)\Rightarrow\alpha\le_T\beta$ of the rigidity theorem fails in $W=I_2(4)$ when no common upper bound is available: $\alpha:=w_0$ and $\beta:=A$ satisfy $M(\alpha)=V=M(\beta)$ by step 1.2, while $w_0\not\le_TA$ and $A$ and $w_0$ have no common upper bound in $W$, both by step 2.1. [step 1.1, step 1.2, step 2.1, step 2.2, step 2.3, step 3.1] ∎
