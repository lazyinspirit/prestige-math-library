---
id: fs-dynkin-diagrams-classify-all-real-semisimple-lie-algebras
kind: false-statement
title: Dynkin diagrams classify real semisimple Lie algebras
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-cartans-semisimplicity-criterion, def-killing-form-of-a-finite-dimensional-lie-algebra, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates, thm-existence-of-each-classified-root-system, ex-classical-simple-lie-algebras-and-their-killing-forms]
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

[L2] The classical matrix Lie algebras $\mathfrak{sl}_2(\mathbb C)$ have Killing form $K(X,Y)=2n\operatorname{tr}(XY)$ with $n=2$, namely $K(X,Y)=4\operatorname{tr}(XY)$, nondegenerate on traceless matrices; for the real forms the trace computation is the same ([[ex-classical-simple-lie-algebras-and-their-killing-forms]], [[def-killing-form-of-a-finite-dimensional-lie-algebra]]).

[L3] The real Lie algebra $\mathfrak{su}(2)$ has the basis $A_1=\begin{pmatrix}0&i\\ i&0\end{pmatrix}$, $A_2=\begin{pmatrix}0&1\\ -1&0\end{pmatrix}$, $A_3=\begin{pmatrix}i&0\\ 0&-i\end{pmatrix}$ with $[A_a,A_b]=-2\varepsilon_{abc}A_c$; the map $\mathfrak{su}(2)\otimes_{\mathbb R}\mathbb C\to\mathfrak{sl}_2(\mathbb C)$, $X\otimes z\mapsto zX$, is an isomorphism of complex Lie algebras, and $\mathfrak{sl}_2(\mathbb R)\otimes_{\mathbb R}\mathbb C\to\mathfrak{sl}_2(\mathbb C)$, $X\otimes z\mapsto zX$, is likewise an isomorphism. ([[thm-existence-of-each-classified-root-system]] for the type $A_1$ conventions)

[L4] The root system of $\mathfrak{sl}_2(\mathbb C)$ with respect to the diagonal Cartan subalgebra is $A_1$, with Cartan matrix $[2]$ ([[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]], [[thm-existence-of-each-classified-root-system]]).

## Proof

**Proof technique:** counterexample.

1.1 Both algebras are three-dimensional over $\mathbb R$ and are semisimple: $\mathfrak{sl}_2(\mathbb R)$ has basis $e=E_{12},f=E_{21},h=\operatorname{diag}(1,-1)$ with the usual relations and Killing form $4\operatorname{tr}(XY)$, which is nondegenerate because $\operatorname{tr}(XX^{T})>0$ for $X\ne0$ traceless; $\mathfrak{su}(2)$ has the basis of [L3], and its Killing form is $K(A_a,A_b)=4\operatorname{tr}(M_aM_b)=-8\delta_{ab}$ for the matrices $M_a$ of $\operatorname{ad}_{A_a}$, which is negative definite and hence nondegenerate. [L1, L2, L3, algebra]

1.2 The element $e=E_{12}\in\mathfrak{sl}_2(\mathbb R)$ is nonzero and $\operatorname{ad}_e$ is nilpotent: $\operatorname{ad}_e(e)=0$, $\operatorname{ad}_e(h)=-2e$, $\operatorname{ad}_e(f)=h$, $\operatorname{ad}_e^{2}(f)=-2e$, $\operatorname{ad}_e^{3}(f)=0$. In $\mathfrak{su}(2)$, if $X=\sum_ax_aA_a\ne0$ then $\operatorname{ad}_X=-\sum_ax_a\,2M_a$ is a nonzero real skew-symmetric operator in the basis $(A_1,A_2,A_3)$; a nonzero skew-symmetric operator is not nilpotent, because a nilpotent operator $S$ satisfies $\operatorname{tr}(S^{2})=0$ while $\operatorname{tr}(S^{2})=-\sum_{i,j}s_{ij}^{2}<0$ for real skew $S\ne0$. Hence $\mathfrak{su}(2)$ has no nonzero element with nilpotent adjoint. [L3, algebra]

2.1 An isomorphism of Lie algebras carries elements with nilpotent adjoint to elements with nilpotent adjoint, since $\operatorname{ad}_{\varphi(X)}=\varphi\operatorname{ad}_X\varphi^{-1}$; by step 1.2 the algebras $\mathfrak{sl}_2(\mathbb R)$ and $\mathfrak{su}(2)$ are therefore not isomorphic. [step 1.2, algebra]

3.1 Nevertheless both have complexification isomorphic to $\mathfrak{sl}_2(\mathbb C)$ by [L3], whose Dynkin diagram is $A_1$ by [L4]; so two non-isomorphic real semisimple Lie algebras share the complexified diagram $A_1$. This refutes the claim that Dynkin diagrams classify real semisimple Lie algebras; the real-form data missing from the diagram is exactly what distinguishes $\mathfrak{sl}_2(\mathbb R)$ from $\mathfrak{su}(2)$. [L3, L4, step 1.1, step 2.1] ∎
