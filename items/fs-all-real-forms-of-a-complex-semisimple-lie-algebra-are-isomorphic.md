---
id: fs-all-real-forms-of-a-complex-semisimple-lie-algebra-are-isomorphic
kind: false-statement
title: All real forms of a complex semisimple lie algebra are isomorphic
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-compact-real-form-of-a-complex-semisimple-lie-algebra, def-split-real-form, def-classical-complex-matrix-lie-algebras, ex-killing-form-of-sl-two, def-special-linear-lie-algebra-sl-two, def-killing-form-of-a-finite-dimensional-lie-algebra]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §1, the compact real form su(2) of sl(2,C), printed pp. 348-353; §6, the discussion of sl(2,R) after Proposition 6.59, printed p. 386"
landmark: false
proof_strategy: counterexample
---

## Statement

False: all real forms of a complex semisimple Lie algebra are isomorphic.

## Facts & Assumptions

**Given:** The complex Lie algebra $\mathfrak{sl}_2(\mathbb C)$ with its real forms $\mathfrak{su}(2)=\{X\in\mathfrak{sl}_2(\mathbb C):X^{*}=-X\}$ and $\mathfrak{sl}_2(\mathbb R)$, and the basis $h=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$, $e=\begin{pmatrix}0&1\\0&0\end{pmatrix}$, $f=\begin{pmatrix}0&0\\1&0\end{pmatrix}$ of $\mathfrak{sl}_2(\mathbb R)$ with $[h,e]=2e$, $[h,f]=-2f$, $[e,f]=h$.

[L1] A compact real form of a complex semisimple Lie algebra is a real form whose Killing form is negative definite, and a split real form is a real form containing a Cartan subalgebra whose adjoint operators are diagonalizable over $\mathbb R$ ([[def-compact-real-form-of-a-complex-semisimple-lie-algebra]], [[def-split-real-form]]).

[L2] On $\mathfrak{sl}_2(\mathbb R)$ the Killing form takes the values $B(h,h)=8$, $B(e,e)=B(f,f)=0$, $B(e,f)=4$, and $B(e-f,e-f)=-8$ ([[ex-killing-form-of-sl-two]], [[def-killing-form-of-a-finite-dimensional-lie-algebra]]).

[L3] The matrices $e,f,h$ form a real basis of $\mathfrak{sl}_2(\mathbb R)$ and a complex basis of $\mathfrak{sl}_2(\mathbb C)$, and $\mathfrak{sl}_2(\mathbb R)$ is a split real form of $\mathfrak{sl}_2(\mathbb C)$; the unitary algebra $\mathfrak{su}(2)$ has real basis $ih$, $e-f$, $i(e+f)$ and is the compact real form of $\mathfrak{sl}_2(\mathbb C)$ ([[def-special-linear-lie-algebra-sl-two]], [[def-classical-complex-matrix-lie-algebras]], [[def-split-real-form]], [[def-compact-real-form-of-a-complex-semisimple-lie-algebra]]).

## Refutation

**Proof technique:** counterexample.

1.1 The algebra $\mathfrak{sl}_2(\mathbb R)$ is a real form of $\mathfrak{sl}_2(\mathbb C)$: the $h,e,f$ form a real basis of $\mathfrak{sl}_2(\mathbb R)$ and a complex basis of $\mathfrak{sl}_2(\mathbb C)$, so the complex-linear extension $\mathfrak{sl}_2(\mathbb R)\otimes_{\mathbb R}\mathbb C\to\mathfrak{sl}_2(\mathbb C)$ is an isomorphism; hence $\mathfrak{sl}_2(\mathbb R)$ is a real form, and it is the split real form because the adjoint operators of the real diagonal Cartan subalgebra $\mathbb Rh$ are diagonal with real eigenvalues. [L1, L3]

1.2 The unitary algebra $\mathfrak{su}(2)$ is a real form of $\mathfrak{sl}_2(\mathbb C)$: the map $\sigma(X)=-X^{*}$ is a conjugate-linear involutive automorphism of $\mathfrak{sl}_2(\mathbb C)$ with fixed locus $\mathfrak{su}(2)$, and $\mathfrak{su}(2)$ has real basis $ih$, $e-f$, $i(e+f)$. [L3]

2.1 The Killing form is negative definite on $\mathfrak{su}(2)$ and takes a positive value on $\mathfrak{sl}_2(\mathbb R)$: using [L2] and the basis of [L3], $B(ih,ih)=-B(h,h)=-8$, $B(e-f,e-f)=-8$, $B(i(e+f),i(e+f))=-2B(e,f)=-8$, and the mixed values $B(ih,e-f)=-iB(h,e-f)=0$, $B(ih,i(e+f))=-B(h,e+f)=0$, $B(e-f,i(e+f))=i\,B(e-f,e+f)=0$ vanish by [L2], so $B$ is $-8$ times a positive definite form on $\mathfrak{su}(2)$; while $B(h,h)=8>0$ on the nonzero element $h\in\mathfrak{sl}_2(\mathbb R)$, which is therefore not a compact Lie algebra. [L2, L3, step 1.2]

3.1 Isomorphisms preserve the Killing form: if $\varphi\colon\mathfrak g_1\to\mathfrak g_2$ is an isomorphism of real Lie algebras, then $\operatorname{ad}_{\varphi X}=\varphi\operatorname{ad}_X\varphi^{-1}$, so $B_2(\varphi X,\varphi Y)=\operatorname{tr}(\operatorname{ad}_{\varphi X}\operatorname{ad}_{\varphi Y})=\operatorname{tr}(\varphi\operatorname{ad}_X\operatorname{ad}_Y\varphi^{-1})=B_1(X,Y)$. Hence an isomorphism would carry the negative definite form on $\mathfrak{su}(2)$ to the restriction of the Killing form of $\mathfrak{sl}_2(\mathbb R)$, which by step 2.1 is not negative definite; consequently $\mathfrak{su}(2)$ and $\mathfrak{sl}_2(\mathbb R)$ are not isomorphic real Lie algebras. [L2, step 2.1]

4.1 By steps 1.1 and 1.2 both $\mathfrak{su}(2)$ and $\mathfrak{sl}_2(\mathbb R)$ are real forms of the complex semisimple Lie algebra $\mathfrak{sl}_2(\mathbb C)$, and by step 3.1 they are not isomorphic; the statement that all real forms of a complex semisimple Lie algebra are isomorphic is therefore false. [step 1.1, step 1.2, step 3.1] ∎
