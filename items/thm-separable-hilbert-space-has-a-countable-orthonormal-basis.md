---
id: thm-separable-hilbert-space-has-a-countable-orthonormal-basis
kind: theorem
title: A Hilbert space with a dense sequence has a finite or countable orthonormal basis
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, lem-finite-bessel-inequality, def-hilbert-space, def-dense-top, def-linear-subspace, thm-recursion, def-countable, def-real-and-complex-inner-product-space, def-linear-combination-and-span, def-finite-sum-in-a-commutative-monoid, lem-subset-of-countable, cor-inner-product-induces-a-norm]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §2.1, pp.49–50, Gram–Schmidt and Theorem 2.3"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — Exercise 2.63, p.87"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Statement

Let $H$ be a real or complex Hilbert space, let $(x_n)_{n\in\mathbb N}$ be a
sequence in $H$ whose range $\{x_n : n\in\mathbb N\}$ is dense in $H$
([[def-dense-top]]), and let

$$L_0:=\varnothing,\qquad L_{n+1}:=L_n\cup\Bigl\{\tfrac{v_n}{\|v_n\|}\Bigr\}\ \text{ if }\ v_n:=x_n-\sum_{e\in L_n}\langle x_n,e\rangle e\ne0, \qquad L_{n+1}:=L_n\ \text{ otherwise}.$$

Then $L:=\bigcup_{n\in\mathbb N}L_n$ is a finite or countably infinite orthonormal
set whose closed linear span is $H$; that is, $L$ is an orthonormal basis of $H$
([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]), and
it is obtained from the given sequence by Gram–Schmidt elimination. The
enumeration of $L$ is the canonical one by the stage at which an element
appears, and no choice principle is used.

## Facts & Assumptions

[A1] If $E$ is a finite orthonormal set in $H$ and $x\in H$, then $v:=x-\sum_{e\in E}\langle x,e\rangle e$ is orthogonal to every element of $E$; if $v\ne0$ then $v/\|v\|$ has norm $1$ and $E\cup\{v/\|v\|\}$ is orthonormal ([[lem-finite-bessel-inequality]], [[cor-inner-product-induces-a-norm]]). Finite vector sums are independent of an enumeration because vector addition is a commutative monoid; the empty sum is zero ([[def-finite-sum-in-a-commutative-monoid]], [[def-linear-combination-and-span]]).

[A2] For a fixed function $f:A\to A$ and initial state $a_0\in A$, recursion on $\mathbb N$ produces the unique sequence with $a_{n+1}=f(a_n)$ ([[thm-recursion]]).

[A3] The span of a finite orthonormal set is a linear subspace, and $x=P+v$ with $P=\sum_{e\in E}\langle x,e\rangle e\in\operatorname{span}E$ and $v\in\operatorname{span}(E\cup\{v\})$ ([[def-linear-subspace]], [[def-linear-combination-and-span]]).

[A4] An orthonormal set is complete when its closed linear span is $H$; $\|v\|^2=\langle v,v\rangle$ and $\|v\|=1$ says $\langle v,v\rangle=1$ ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[def-real-and-complex-inner-product-space]]).

[A5] The range of $(x_n)$ is dense in $H$: its closure is $H$ ([[def-dense-top]]).

[A6] Every subset of $\mathbb N$ is at most countable, without choice, and an infinite subset has its canonical increasing enumeration ([[lem-subset-of-countable]]). A set in bijection with a finite or countably infinite set is itself finite or countably infinite ([[def-countable]]).

## Proof

**Proof technique:** direct.

**Given:** A dense sequence $(x_n)_{n\in\mathbb N}$ in the Hilbert space $H$ and the Gram–Schmidt sets $L_n$ defined by the displayed recursion.

1.1 To put the stage-dependent rule into the fixed-function form of [A2], let $\mathcal O$ be the set of finite orthonormal subsets of $H$, a subset of $\mathcal P(H)$, and use the state space $A=\mathbb N\times\mathcal O$. Define $f(n,E)=(n+1,\Phi_n(E))$, where $\Phi_n(E)$ is the displayed update computed from $x_n$ and the finite set $E$. The sum exists by [A1]; in the nonzero residual branch its norm is positive and normalization is defined. The update is again finite and orthonormal by [A1], and in the zero branch it is $E$. Thus $f$ is a total self-map of $A$, and $(0,\varnothing)\in A$. Recursion from $(0,\varnothing)$ gives states $(n,L_n)$ and hence the required sets $L_n$. By induction on $n$, each $L_n$ is a finite orthonormal set with $L_n\subseteq L_{n+1}$. Indeed $L_0=\varnothing$ is orthonormal, and if $L_n$ is finite and orthonormal then $v_n$ is orthogonal to every element of $L_n$; either $v_n=0$ and $L_{n+1}=L_n$, or $v_n\ne0$ and $L_{n+1}=L_n\cup\{v_n/\|v_n\|\}$ is orthonormal. [A1, A2]

2.1 $L=\bigcup_{n\in\mathbb N}(L_{n+1}\setminus L_n)$ and each difference $L_{n+1}\setminus L_n$ has at most one element; hence the map assigning to every $n$ with $L_{n+1}\setminus L_n\ne\varnothing$ its unique element is a bijection onto $L$ from the subset $J=\{n:L_{n+1}\setminus L_n\ne\varnothing\}$ of $\mathbb N$: surjectivity follows from the union, and outputs at distinct stages are distinct because the sets are increasing and only new elements enter a difference. By [A6], $J$ and hence $L$ are finite or countably infinite. Ordering the stages increasingly gives the canonical enumeration, including the empty one when $J=\varnothing$. [step 1.1, A6]

2.2 By induction on $n$ one has $\operatorname{span}L_n=\operatorname{span}\{x_0,\dots,x_{n-1}\}$: for $n=0$ both sides are $\{0\}$, and if $x_n=P+v_n$ with $P\in\operatorname{span}L_n$ and $v_n\in\operatorname{span}(L_n\cup\{v_n\})=\operatorname{span}L_{n+1}$, then $\operatorname{span}L_{n+1}=\operatorname{span}(L_n\cup\{x_n\})=\operatorname{span}\{x_0,\dots,x_n\}$, the case $v_n=0$ included. [step 1.1, A3]

3.1 Every $x_n$ lies in $\operatorname{span}L_{n+1}\subseteq\operatorname{span}L$, so the span of $L$ contains the whole dense range of the sequence; hence its closure contains the closure of that range, which is $H$, while it is itself contained in $H$. Furthermore, any two elements of $L$ belong to one common $L_n$, by taking the larger of their finite appearance stages; hence $L$ is orthonormal by step 1.1. Its closed linear span is therefore $H$. [step 1.1, step 2.1, step 2.2, A4, A5]

4.1 By steps 3.1 and 2.1 the set $L$ is a finite or countably infinite orthonormal set with closed linear span $H$, that is, an orthonormal basis of $H$ obtained by Gram–Schmidt elimination from the given dense sequence, canonically enumerated by the stages at which its elements appear. [step 2.1, step 3.1] ∎
