---
id: fs-dynkin-diagrams-classify-all-real-semisimple-lie-algebras
kind: false-statement
title: Dynkin diagrams classify real semisimple Lie algebras
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-cartans-semisimplicity-criterion, def-killing-form-of-a-finite-dimensional-lie-algebra, ex-cartan-subalgebra-and-roots-of-sl-two, ex-classical-simple-lie-algebras-and-their-killing-forms]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §11 remarks on real forms, printed p. 203; Chapter VI for the real-form theory"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 20, real forms of sl2"
landmark: false
proof_strategy: counterexample
---

## Statement

False: the Dynkin diagram of the complexification does not distinguish real
forms; there are non-isomorphic real semisimple Lie algebras with the same
complexification.

## Facts & Assumptions

**Given:** The real Lie algebras $\mathfrak{sl}_2(\mathbb R)=\{X\in M_2(\mathbb R):\operatorname{tr}X=0\}$ and $\mathfrak{su}(2)=\{X\in M_2(\mathbb C):X^{*}=-X,\ \operatorname{tr}X=0\}$, both with the commutator bracket.

[L1] A finite-dimensional Lie algebra over a characteristic-zero field is semisimple if and only if its Killing form is nondegenerate ([[thm-cartans-semisimplicity-criterion]], [[def-killing-form-of-a-finite-dimensional-lie-algebra]]).

[L2] The split algebra $\mathfrak{sl}_2(\mathbb R)$ has Killing form $K(X,Y)=4\operatorname{tr}(XY)$, which is nondegenerate on traceless matrices ([[ex-classical-simple-lie-algebras-and-their-killing-forms]], [[def-killing-form-of-a-finite-dimensional-lie-algebra]]).

[L3] The real Lie algebra $\mathfrak{su}(2)$ has the basis $A_1=\begin{pmatrix}0&i\\ i&0\end{pmatrix}$, $A_2=\begin{pmatrix}0&1\\ -1&0\end{pmatrix}$, $A_3=\begin{pmatrix}i&0\\ 0&-i\end{pmatrix}$ with $[A_a,A_b]=-2\varepsilon_{abc}A_c$.

[L4] The root system of $\mathfrak{sl}_2(\mathbb C)$ with respect to the diagonal Cartan subalgebra is the two-root system $A_1$, with Cartan matrix $[2]$ ([[ex-cartan-subalgebra-and-roots-of-sl-two]]).

## Proof

**Proof technique:** counterexample.

1.1 Both algebras are three-dimensional over $\mathbb R$ and are semisimple. The split algebra has the basis $e=E_{12},f=E_{21},h=\operatorname{diag}(1,-1)$, and its form in [L2] is nondegenerate because for nonzero traceless $X$ one has $K(X,X^T)=4\operatorname{tr}(XX^T)>0$. For $\mathfrak{su}(2)$, let $M_a$ be the matrix of $\operatorname{ad}_{A_a}$ in the basis of [L3]. The displayed brackets give $K(A_a,A_b)=\operatorname{tr}(M_aM_b)=-8\delta_{ab}$, so its Killing form is negative definite and nondegenerate. Cartan's criterion [L1] gives semisimplicity in both cases. [L1, L2, L3, algebra]

1.2 The element $e=E_{12}\in\mathfrak{sl}_2(\mathbb R)$ is nonzero and $\operatorname{ad}_e$ is nilpotent: $\operatorname{ad}_e(e)=0$, $\operatorname{ad}_e(h)=-2e$, $\operatorname{ad}_e(f)=h$, $\operatorname{ad}_e^{2}(f)=-2e$, $\operatorname{ad}_e^{3}(f)=0$. In $\mathfrak{su}(2)$, if $X=\sum_ax_aA_a\ne0$ then $\operatorname{ad}_X=\sum_ax_aM_a$ is a nonzero real skew-symmetric operator in the basis $(A_1,A_2,A_3)$; a nonzero skew-symmetric operator is not nilpotent, because a nilpotent operator $S$ satisfies $\operatorname{tr}(S^{2})=0$ while $\operatorname{tr}(S^{2})=-\sum_{i,j}s_{ij}^{2}<0$ for real skew $S\ne0$. Hence $\mathfrak{su}(2)$ has no nonzero element with nilpotent adjoint. [L3, algebra]

2.1 An isomorphism of Lie algebras carries elements with nilpotent adjoint to elements with nilpotent adjoint, since $\operatorname{ad}_{\varphi(X)}=\varphi\operatorname{ad}_X\varphi^{-1}$; by step 1.2 the algebras $\mathfrak{sl}_2(\mathbb R)$ and $\mathfrak{su}(2)$ are therefore not isomorphic. [step 1.2, algebra]

3.1 The real basis $e,f,h$ of $\mathfrak{sl}_2(\mathbb R)$ is a complex basis of $\mathfrak{sl}_2(\mathbb C)$. For the compact algebra, $A_3=ih$, $A_2=e-f$, and $A_1=i(e+f)$, so conversely $h=-iA_3$, $e=(A_2-iA_1)/2$, and $f=(-A_2-iA_1)/2$; hence $A_1,A_2,A_3$ are also a complex basis of $\mathfrak{sl}_2(\mathbb C)$. Complexifying either inclusion therefore gives $\mathfrak{sl}_2(\mathbb C)$. By [L4] both complexifications have diagram $A_1$, while step 2.1 shows the real algebras are not isomorphic. This is the required counterexample. [L3, L4, step 1.1, step 2.1, algebra] ∎
