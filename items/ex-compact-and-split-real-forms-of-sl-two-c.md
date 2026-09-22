---
id: ex-compact-and-split-real-forms-of-sl-two-c
kind: example
title: Compact and split real forms of sl two c
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-compact-real-form-of-a-complex-semisimple-lie-algebra, def-split-real-form, def-special-linear-lie-algebra-sl-two, def-real-form-of-a-complex-lie-algebra, thm-real-forms-correspond-to-conjugate-linear-involutions, ex-killing-form-of-sl-two, def-killing-form-of-a-finite-dimensional-lie-algebra, thm-cartans-semisimplicity-criterion, ex-unitary-and-special-unitary-lie-groups, ex-general-and-special-linear-lie-groups, def-cartan-subalgebra-of-a-lie-algebra, def-transpose-of-a-matrix, def-countable-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §1, compact and split real forms and the constructions of §1, printed pp. 348-353; Chapter VI, §5, the sl(2,R) example, printed pp. 384-385"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 39, §39.3 and §39.4, printed pp. 202-204"
landmark: false
proof_strategy: direct
---

## Example

Assume $\mathrm{AC}_\omega$. Let
$\mathfrak s=\mathfrak{sl}_2(\mathbb C)$ be the complex special linear Lie
algebra with its standard basis $e,f,h$
([[def-special-linear-lie-algebra-sl-two]]). The conjugate-transpose map
$\sigma_c(X)=-X^{*}$ and entrywise complex conjugation $\sigma_s(X)=\overline X$
are conjugate-linear involutive automorphisms of $\mathfrak s$, and their fixed
algebras

$$\mathfrak s^{\sigma_c}=\mathfrak{su}(2),\qquad \mathfrak s^{\sigma_s}=\mathfrak{sl}_2(\mathbb R)$$

are real forms of $\mathfrak s$. Moreover $\mathfrak{su}(2)$ is a compact real
form of $\mathfrak s$ and $\mathfrak{sl}_2(\mathbb R)$ is a split real form of
$\mathfrak s$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and $\mathfrak s=\mathfrak{sl}_2(\mathbb C)$ with the basis $$e=\begin{pmatrix}0&1\\0&0\end{pmatrix},\qquad f=\begin{pmatrix}0&0\\1&0\end{pmatrix},\qquad h=\begin{pmatrix}1&0\\0&-1\end{pmatrix},$$ so that $[h,e]=2e$, $[h,f]=-2f$, $[e,f]=h$, and the two maps $\sigma_c(X)=-X^{*}$ and $\sigma_s(X)=\overline X$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the matrix Lie-group examples cited in [L1] and [L2].

[L1] $\mathfrak s$ is the Lie algebra of traceless complex $2\times2$ matrices with bracket $[A,B]=AB-BA$, with basis $e,f,h$ and the displayed relations, and the real traceless matrices form the real Lie subalgebra $\mathfrak{sl}_2(\mathbb R)$ ([[def-special-linear-lie-algebra-sl-two]], [[ex-general-and-special-linear-lie-groups]]).

[L2] $\mathfrak{su}(2)=\{X\in M_2(\mathbb C):X^{*}+X=0,\ \operatorname{tr}X=0\}$ is a real Lie subalgebra of $\mathfrak s$ with the same bracket ([[ex-unitary-and-special-unitary-lie-groups]]).

[L3] If $\sigma$ is a conjugate-linear involutive automorphism of a finite-dimensional complex Lie algebra $\mathfrak g$, then its fixed locus $\mathfrak g^{\sigma}$ is a real form of $\mathfrak g$ ([[thm-real-forms-correspond-to-conjugate-linear-involutions]], [[def-real-form-of-a-complex-lie-algebra]]).

[L4] The Killing form of $\mathfrak{sl}_2$ satisfies $B(h,h)=8$, $B(e,f)=B(f,e)=4$, and all other pairings of basis vectors zero; equivalently $B(X,Y)=4\operatorname{tr}(XY)$ for all $X,Y$ ([[ex-killing-form-of-sl-two]], [[def-killing-form-of-a-finite-dimensional-lie-algebra]]).

[L5] When the ambient complex Lie algebra is finite-dimensional and semisimple, a real form $\mathfrak g_0$ is a compact real form exactly when $B(X,X)<0$ for every nonzero $X\in\mathfrak g_0$; it is a split real form exactly when it contains a Cartan subalgebra $\mathfrak h_0$ such that every $\operatorname{ad}_H$, $H\in\mathfrak h_0$, is diagonalizable over $\mathbb R$ ([[def-compact-real-form-of-a-complex-semisimple-lie-algebra]], [[def-split-real-form]], [[def-cartan-subalgebra-of-a-lie-algebra]]).

[L6] The conjugate transpose $X^{*}=\overline{X}^{\mathsf T}$ is additive, and $(XY)^{*}=Y^{*}X^{*}$ ([[def-transpose-of-a-matrix]]).





**Proof technique:** direct matrix computation.

1.1 Both maps $\sigma_c$ and $\sigma_s$ are real-linear, additive, involutive and conjugate-linear, and they preserve brackets. By [L6] the conjugate transpose reverses products, $\sigma_c(AB)=-(AB)^{*}=-B^{*}A^{*}$, while $\sigma_c(A)\sigma_c(B)=A^{*}B^{*}$; taking the difference gives $\sigma_c[A,B]=-(AB-BA)^{*}=A^{*}B^{*}-B^{*}A^{*}=[\sigma_cA,\sigma_cB]$. Entrywise conjugation is multiplicative, $\overline{AB}=\overline A\,\overline B$, so $\sigma_s[A,B]=[\sigma_sA,\sigma_sB]$. [given, L6, algebra]

1.2 The fixed algebra of $\sigma_c$ inside $\mathfrak s$ is $\mathfrak{su}(2)$: a traceless $X$ satisfies $X=-X^{*}$ exactly when $X$ is skew-Hermitian, so $\mathfrak s^{\sigma_c}=\{X\in M_2(\mathbb C):X^{*}+X=0,\operatorname{tr}X=0\}$, which is $\mathfrak{su}(2)$ by [L2]. [given, L2, algebra]

1.3 The fixed algebra of $\sigma_s$ is $\mathfrak{sl}_2(\mathbb R)$: a matrix is fixed by entrywise conjugation exactly when it is real, and a real traceless matrix lies in $\mathfrak{sl}_2(\mathbb R)$ by [L1]. [given, L1, algebra]

1.4 The Killing form of $\mathfrak s$ is $B(X,Y)=4\operatorname{tr}(XY)$. Both sides are symmetric bilinear, so it suffices to compare them on basis pairs: $4\operatorname{tr}(ef)=4=B(e,f)$, $4\operatorname{tr}(h^2)=8=B(h,h)$, and $4\operatorname{tr}(e^2)=4\operatorname{tr}(f^2)=4\operatorname{tr}(eh)=4\operatorname{tr}(fh)=0$, matching the vanishing pairings of [L4]. In the basis $(e,f,h)$ its Gram matrix is $\begin{pmatrix}0&4&0\\4&0&0\\0&0&8\end{pmatrix}$, whose determinant is $-128\ne0$; hence $B$ is nondegenerate and $\mathfrak s$ is semisimple by Cartan's criterion over the characteristic-zero field $\mathbb C$. Thus the ambient hypothesis in [L5] has been established before either definition is invoked. [L4, [[thm-cartans-semisimplicity-criterion]], algebra]

1.5 The line $\mathbb Rh$ is a Cartan subalgebra of $\mathfrak{sl}_2(\mathbb R)$: it is abelian, hence nilpotent, and its normalizer is itself because $[h,X]=0$ for $X=\begin{pmatrix}a&b\\c&-a\end{pmatrix}$ forces $2b=0$ and $-2c=0$, so $X\in\mathbb Rh$. Since $[h,h]=0$, $[h,e]=2e$ and $[h,f]=-2f$ by the given relations, $\operatorname{ad}_h$ is diagonal on the basis $(h,e,f)$ with real eigenvalues $0,2,-2$, so $\mathfrak{sl}_2(\mathbb R)$ is a split real form by [L5]. [given, L1, L5, algebra]

2.1 Both fixed loci are real forms. Every $Z\in\mathfrak s$ decomposes as $Z=X+iY$ with $X=\tfrac12(Z+\overline Z)$ and $Y=\tfrac1{2i}(Z-\overline Z)$ real traceless, so $\mathfrak{sl}_2(\mathbb R)$ spans $\mathfrak s$ over $\mathbb C$ and has real dimension $3=\dim_{\mathbb C}\mathfrak s$; alternatively this is the general conclusion of [L3] applied to the involution $\sigma_s$ of step 1.1. Likewise every $Z\in\mathfrak s$ is $Z=X+iY$ with $X=\tfrac12(Z-Z^{*})$ and $Y=\tfrac1{2i}(Z+Z^{*})$ both skew-Hermitian and traceless, so $\mathfrak{su}(2)$ spans $\mathfrak s$ over $\mathbb C$ and has real dimension $3=\dim_{\mathbb C}\mathfrak s$; again [L3] gives the same conclusion from $\sigma_c$. [L3, step 1.1, step 1.2, step 1.3, algebra]

2.2 For nonzero $X\in\mathfrak{su}(2)$ one has $X^{*}=-X$, so step 1.4 gives $B(X,X)=4\operatorname{tr}(X^2)=-4\operatorname{tr}(XX^{*})=-4\sum_{i,j}|X_{ij}|^2<0$, because a nonzero matrix has a nonzero entry. Hence $B$ is negative definite on $\mathfrak{su}(2)$, and $\mathfrak{su}(2)$ is a compact real form by [L5]. [step 1.4, L5, algebra]

3.1 The two forms are genuinely different: $B(h,h)=8>0$ on $\mathfrak{sl}_2(\mathbb R)$ while $B(e-f,e-f)=B(e,e)-2B(e,f)+B(f,f)=-8<0$, so the Killing form of $\mathfrak{sl}_2(\mathbb R)$ is indefinite, as a noncompact real form must be, whereas the form on $\mathfrak{su}(2)$ is definite by step 2.2. All computations are finite; $\mathrm{AC}_\omega$ enters only through [L1] and [L2]. [A1, step 1.4, step 2.2, step 1.5, algebra] ∎
