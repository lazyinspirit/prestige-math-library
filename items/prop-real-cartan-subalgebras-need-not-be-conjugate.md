---
id: prop-real-cartan-subalgebras-need-not-be-conjugate
kind: proposition
title: Real Cartan subalgebras need not be conjugate
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-theta-stable-cartan-subalgebra-and-compact-split-parts, def-cartan-subalgebra-of-a-lie-algebra, def-special-linear-lie-algebra-sl-two, def-cartan-involution-of-a-real-semisimple-lie-algebra, def-cartan-decomposition-of-a-real-semisimple-lie-algebra, def-killing-form-of-a-finite-dimensional-lie-algebra, def-trace-form-of-a-finite-dimensional-representation, thm-trace-of-ab-equals-trace-of-ba, cor-trace-is-invariant-under-similarity, thm-cartans-semisimplicity-criterion, def-lie-algebra-over-a-field]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §6, the discussion of sl(2,R) after Proposition 6.59, printed p. 386; Chapter I, §1"
    - title: "Pavel Etingof, Lie Groups and Lie Algebras"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
      locator: "Lecture 40, §40.1, discussion of sl(2,R) = su(1,1), printed pp. 185-186"
landmark: false
proof_strategy: direct
---

## Statement

Let $\mathfrak g_0=\mathfrak{sl}_2(\mathbb R)$ be the real Lie algebra of
traceless real $2\times2$ matrices with the commutator bracket, with its
standard basis

$$h=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\qquad e=\begin{pmatrix}0&1\\0&0\end{pmatrix},\qquad f=\begin{pmatrix}0&0\\1&0\end{pmatrix}, \qquad [h,e]=2e,\quad [h,f]=-2f,\quad [e,f]=h$$
([[def-special-linear-lie-algebra-sl-two]]). Put
$k:=e-f=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$, so that
$\mathbb Rk=\mathbb R\begin{pmatrix}0&-1\\1&0\end{pmatrix}$.
Then $\mathbb Rk\subseteq\mathfrak k_0$ is a compact Cartan subalgebra and
$\mathbb Rh\subseteq\mathfrak p_0$ is a split Cartan subalgebra for the Cartan
involution $\theta(X)=-X^{\mathsf T}$ of $\mathfrak{sl}_2(\mathbb R)$, and no
automorphism of $\mathfrak{sl}_2(\mathbb R)$ carries $\mathbb Rh$ onto
$\mathbb Rk$. In particular the compact and the split Cartan subalgebras of
$\mathfrak{sl}_2(\mathbb R)$ are not conjugate by any real inner
automorphism.

## Facts & Assumptions

**Given:** The real Lie algebra $\mathfrak g_0=\mathfrak{sl}_2(\mathbb R)$ with the basis $h,e,f$ and the bracket relations above, the element $k=e-f$, and the Cartan involution $\theta(X)=-X^{\mathsf T}$ with Cartan decomposition $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$ ([[def-cartan-involution-of-a-real-semisimple-lie-algebra]], [[def-cartan-decomposition-of-a-real-semisimple-lie-algebra]]).

[L1] $\{h,e,f\}$ is a basis of the traceless real $2\times2$ matrices, with $[h,e]=2e$, $[h,f]=-2f$, $[e,f]=h$; the bracket relations determine the bracket completely ([[def-special-linear-lie-algebra-sl-two]], [[def-lie-algebra-over-a-field]]).

[L2] The Killing form of $\mathfrak g_0$ is the trace form of the adjoint representation, $B(X,Y)=\operatorname{tr}(\operatorname{ad}_X\operatorname{ad}_Y)$ ([[def-killing-form-of-a-finite-dimensional-lie-algebra]], [[def-trace-form-of-a-finite-dimensional-representation]]).

[L3] Traces satisfy $\operatorname{tr}(AB)=\operatorname{tr}(BA)$ and are invariant under conjugation, $\operatorname{tr}(PAP^{-1})=\operatorname{tr}(A)$ ([[thm-trace-of-ab-equals-trace-of-ba]], [[cor-trace-is-invariant-under-similarity]]).

[L4] A finite-dimensional Lie algebra over a field of characteristic $0$ is semisimple if and only if its Killing form is nondegenerate ([[thm-cartans-semisimplicity-criterion]]).

[L5] A Cartan subalgebra of a Lie algebra is a nilpotent subalgebra equal to its own normalizer ([[def-cartan-subalgebra-of-a-lie-algebra]]); a one-dimensional abelian subalgebra is nilpotent, and a $\theta$-stable Cartan subalgebra has compact part $\mathfrak h_0\cap\mathfrak k_0$ and split part $\mathfrak h_0\cap\mathfrak p_0$ ([[def-theta-stable-cartan-subalgebra-and-compact-split-parts]]).

## Proof

**Proof technique:** direct.

1.1 The operators of the adjoint representation in the basis $(h,e,f)$ are computed from [L1] to be $\operatorname{ad}_h=\operatorname{diag}(0,2,-2)$, $\operatorname{ad}_e=\begin{pmatrix}0&0&1\\-2&0&0\\0&0&0\end{pmatrix}$ and $\operatorname{ad}_f=\begin{pmatrix}0&-1&0\\0&0&0\\2&0&0\end{pmatrix}$; hence $B(h,h)=\operatorname{tr}(\operatorname{ad}_h^2)=8$, $B(e,f)=\operatorname{tr}(\operatorname{ad}_e\operatorname{ad}_f)=4$ with $\operatorname{ad}_e\operatorname{ad}_f=\operatorname{diag}(2,2,0)$, and $B(h,e)=B(h,f)=B(e,e)=B(f,f)=0$. The matrix of $B$ in the basis $(h,e,f)$ is therefore $\begin{pmatrix}8&0&0\\0&0&4\\0&4&0\end{pmatrix}$, of determinant $-128\ne0$, so $B$ is nondegenerate and $\mathfrak g_0$ is semisimple by [L4]. [L1, L2, L4, algebra]

1.2 For every automorphism $\alpha$ of $\mathfrak g_0$ one has $\operatorname{ad}_{\alpha X}=\alpha\operatorname{ad}_X\alpha^{-1}$ for all $X$, because $\alpha$ preserves brackets; consequently $B(\alpha X,\alpha Y)=\operatorname{tr}(\alpha\operatorname{ad}_X\alpha^{-1}\alpha\operatorname{ad}_Y\alpha^{-1})=\operatorname{tr}(\operatorname{ad}_X\operatorname{ad}_Y)=B(X,Y)$ by [L3]. Thus $\alpha$ preserves the Killing form, and the sign of $B(X,X)$ for $X\ne0$ is an invariant of the automorphism orbit of $X$. [L2, L3, algebra]

2.1 In the basis $(h,\,e+f,\,e-f)$ of $\mathfrak g_0$ one computes $\operatorname{ad}_k(h)=[e-f,h]=-2(e+f)$, $\operatorname{ad}_k(e+f)=[e-f,e+f]=2h$ and $\operatorname{ad}_k(e-f)=0$, so $\operatorname{ad}_k^2(h)=-4h$, $\operatorname{ad}_k^2(e+f)=-4(e+f)$ and $\operatorname{ad}_k^2(e-f)=0$; therefore $B(k,k)=\operatorname{tr}(\operatorname{ad}_k^2)=-4-4+0=-8$. In particular $B(h,h)=8>0$ and $B(k,k)=-8<0$. [L2, step 1.1, algebra]

3.1 The involution $\theta(X)=-X^{\mathsf T}$ is a Cartan involution of $\mathfrak g_0$: it is an involutive automorphism because the transpose is an anti-automorphism of the associative algebra $M_2(\mathbb R)$ while the bracket is $[X,Y]=XY-YX$, and the form $B_\theta(X,Y)=-B(X,\theta Y)$ is positive definite. Indeed $\theta(h)=-h$, $\theta(e+f)=-(e+f)$ and $\theta(e-f)=e-f$; in the basis $(h,\,e+f,\,e-f)$ this gives $B_\theta(h,h)=B(h,h)=8$, $B_\theta(e+f,e+f)=B(e+f,e+f)=2B(e,f)=8$ and $B_\theta(e-f,e-f)=-B(e-f,e-f)=8$, using $B(e,e)=B(f,f)=0$ from step 1.1 and $B(e-f,e-f)=-8$ from step 2.1, while $B_\theta(e+f,e-f)=-B(e+f,e-f)=0$ and $B_\theta$ vanishes on the pairs involving $h$ because $B(h,e+f)=B(h,k)=0$; the three basis vectors are pairwise $B_\theta$-orthogonal, so $B_\theta$ has matrix $8\cdot\mathrm{id}$ in this basis and is positive definite. [step 1.1, step 2.1, algebra]

3.2 Each of the lines $\mathbb Rh$ and $\mathbb Rk$ is a Cartan subalgebra of $\mathfrak g_0$. Both are abelian, hence nilpotent. For the normalizer of $\mathbb Rh$, write $X=ah+be+cf$; then $[X,h]=-2be+2cf\in\mathbb Rh$ forces $b=c=0$, so $N_{\mathfrak g_0}(\mathbb Rh)=\mathbb Rh$. For the normalizer of $\mathbb Rk$, use the basis $(h,e+f,k)$: writing $X=ah+b(e+f)+ck$ one has $[X,k]=a[h,k]+b[e+f,k]=-2a(e+f)-2bh$ by step 2.1 and $[k,k]=0$, and $-2a(e+f)-2bh\in\mathbb Rk$ forces $a=b=0$, because $\{h,e+f,k\}$ is a basis and $\mathbb Rk\cap\operatorname{span}\{h,e+f\}=0$; hence $N_{\mathfrak g_0}(\mathbb Rk)=\mathbb Rk$. By [L5] both lines are Cartan subalgebras. [L1, L5, step 2.1, algebra]

3.3 Suppose towards a contradiction that $\alpha$ is an automorphism of $\mathfrak g_0$ with $\alpha(\mathbb Rh)=\mathbb Rk$. Then $\alpha(h)=ck$ for some $c\ne0$, since $\alpha(h)\ne0$ spans $\alpha(\mathbb Rh)$ and $\alpha(h)\notin\{0\}$. Applying step 1.2 with $X=Y=h$ gives $B(h,h)=B(\alpha h,\alpha h)=B(ck,ck)=c^2B(k,k)$, that is $8=-8c^2$, which is impossible for real $c\ne0$. [step 2.1, step 1.2, assume-contra, algebra]

4.1 The line $\mathbb Rh$ lies in $\mathfrak p_0$ and the line $\mathbb Rk$ lies in $\mathfrak k_0$: $\theta(h)=-h$ and $\theta(k)=-k^{\mathsf T}=k$. Hence, for the $\theta$-stable Cartan structure, $\mathbb Rh=\mathfrak a_0$ is a split part with $\mathfrak t_0=0$, and $\mathbb Rk=\mathfrak t_0$ is a compact part with $\mathfrak a_0=0$; in particular each of the two lines is a $\theta$-stable one-dimensional subspace. [given, step 3.1, algebra]

5.1 Consequently no automorphism of $\mathfrak g_0$ carries $\mathbb Rh$ onto $\mathbb Rk$, so the two Cartan subalgebras are not conjugate by any real inner automorphism either, since every inner automorphism is an automorphism; the compact and split Cartan subalgebras $\mathbb Rk$ and $\mathbb Rh$ of $\mathfrak{sl}_2(\mathbb R)$ are therefore not conjugate. [step 4.1, step 3.2, step 3.3, discharge-contradiction, algebra] ∎
