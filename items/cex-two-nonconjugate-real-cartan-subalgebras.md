---
id: cex-two-nonconjugate-real-cartan-subalgebras
kind: counterexample
title: Two nonconjugate real cartan subalgebras
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-real-cartan-subalgebras-need-not-be-conjugate, ex-compact-and-split-cartan-subalgebras-of-sl-two-r, def-cartan-subalgebra-of-a-lie-algebra, def-special-linear-lie-algebra-sl-two, ex-general-and-special-linear-lie-groups, ex-cartan-involution-and-k-plus-p-for-sl-n-r]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §6, the sl(2,R) example: Rh and Rih_B are not conjugate, printed pp. 384-386"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 43, §43.1, printed pp. 217-218"
landmark: false
proof_strategy: direct
---

## Statement refuted

Any two Cartan subalgebras of the real Lie algebra $\mathfrak{sl}_2(\mathbb R)$
are conjugate by an inner automorphism of $\mathfrak{sl}_2(\mathbb R)$.

## Facts & Assumptions

**Given:** The real Lie algebra $\mathfrak g_0=\mathfrak{sl}_2(\mathbb R)$ with the matrices $H=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$, $K_0=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$, $e=\begin{pmatrix}0&1\\0&0\end{pmatrix}$, $f=\begin{pmatrix}0&0\\1&0\end{pmatrix}$ and the relations $[H,e]=2e$, $[H,f]=-2f$, $[e,f]=H$.

[L1] $\mathfrak{sl}_2(\mathbb R)$ is the real Lie algebra of real traceless matrices; its inner automorphisms are the maps $\operatorname{Ad}_g(X)=gXg^{-1}$ for $g\in\operatorname{SL}_2(\mathbb R)$, and more generally every automorphism $\varphi$ satisfies $\varphi(\operatorname{ad}_H)=\operatorname{ad}_{\varphi(H)}\varphi$ ([[ex-general-and-special-linear-lie-groups]], [[def-special-linear-lie-algebra-sl-two]]).

[L2] A Cartan subalgebra is a nilpotent self-normalizing subalgebra ([[def-cartan-subalgebra-of-a-lie-algebra]]).

[L3] The lines $\mathbb RK_0$ and $\mathbb RH$ are $\theta$-stable Cartan subalgebras of $\mathfrak{sl}_2(\mathbb R)$: $\mathbb RK_0$ is the compact one and $\mathbb RH$ the split one ([[ex-compact-and-split-cartan-subalgebras-of-sl-two-r]], [[ex-cartan-involution-and-k-plus-p-for-sl-n-r]]).

[L4] The two Cartan subalgebras $\mathbb RH$ and $\mathbb R i h_B=\mathbb RK_0$ of $\mathfrak{sl}_2(\mathbb R)$ are not conjugate by any real inner automorphism ([[prop-real-cartan-subalgebras-need-not-be-conjugate]]).





**Proof technique:** direct computation of adjoint spectra.

1.1 The subspaces $\mathbb RK_0$ and $\mathbb RH$ are Cartan subalgebras of $\mathfrak{sl}_2(\mathbb R)$ by [L3], and they are distinct, because $K_0$ is skew-symmetric while $H$ is symmetric and diagonal. [given, L3, algebra]

1.2 The adjoint operator of $K_0$ has spectrum $\{0,2i,-2i\}$: from the relations one computes $[K_0,H]=[f-e,H]=2f+2e=2(e+f)$ and $[K_0,e+f]=[f,e]-[e,f]=-H-H=-2H$, while $[K_0,K_0]=0$; hence in the basis $(H,e+f,K_0)$ of $\mathfrak{sl}_2(\mathbb R)$ the operator $\operatorname{ad}_{K_0}$ has the block matrix $\begin{pmatrix}0&-2&0\\ 2&0&0\\ 0&0&0\end{pmatrix}$, whose characteristic polynomial is $t(t^2+4)$. [given, algebra]

1.3 The adjoint operator of $H$ has spectrum $\{0,2,-2\}$: by the given relations $\operatorname{ad}_H$ is diagonal in the basis $(H,e,f)$ with eigenvalues $0,2,-2$, so its characteristic polynomial is $t(t-2)(t+2)$. [given, algebra]

2.1 No automorphism of $\mathfrak{sl}_2(\mathbb R)$ carries $\mathbb RH$ onto $\mathbb RK_0$: if $\varphi$ were such an automorphism with $\varphi(H)=cK_0$ for some $c\ne0$, then by [L1] the operators $\operatorname{ad}_{\varphi(H)}$ and $\operatorname{ad}_H$ would be conjugate, hence would have the same characteristic polynomial; but step 1.3 gives $t(t-2)(t+2)$ for $\operatorname{ad}_H$ and step 1.2 gives $t(t^2+c^2\cdot4)$ for $\operatorname{ad}_{cK_0}$, and no nonzero $c$ makes these polynomials equal (the first has three distinct real roots, the second has a nonzero purely imaginary pair). [step 1.2, step 1.3, L1, algebra]

3.1 Consequently the two Cartan subalgebras $\mathbb RH$ and $\mathbb RK_0$ are not conjugate by any automorphism, and in particular not by an inner automorphism; since they are distinct Cartan subalgebras of $\mathfrak{sl}_2(\mathbb R)$ by step 1.1, they refute the displayed statement, and they are exactly a witness pair for the general phenomenon of [L4]. [step 1.1, step 2.1, L4]

4.1 Scope: the invariant that separates the two lines is the isomorphism type of $\operatorname{ad}_H$ as a real operator, equivalently the position of the line inside $\mathfrak k_0$ or $\mathfrak p_0$: the compact line consists of elements whose adjoint operators have purely imaginary nonzero spectrum, the split line of elements with real nonzero spectrum. The computation is finite, uses no choice principle, and shows that the failure of conjugacy is detected already at the level of all automorphisms, not merely inner ones. [step 1.2, step 1.3, step 2.1, algebra] ∎
