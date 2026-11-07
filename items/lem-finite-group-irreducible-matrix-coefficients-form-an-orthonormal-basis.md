---
dependency_level: 0
id: lem-finite-group-irreducible-matrix-coefficients-form-an-orthonormal-basis
kind: lemma
title: "Normalized matrix coefficients form an orthonormal basis for a finite group"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-group
  - def-finite-cardinality
  - def-linear-basis
  - def-real-and-complex-inner-product-space
  - def-subrepresentation-and-irreducible-representation
  - def-finite-dimensional-representation-of-a-group-over-a-field
  - def-matrix-coefficient-of-a-unitary-representation
  - thm-finitely-many-irreducibles-occur-in-the-regular-representation-with-multiplicity-equal-to-their-degree
  - cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars
  - cor-schurs-lemma-for-irreducible-representations
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - def-trace-of-an-endomorphism
  - cor-trace-is-invariant-under-similarity
  - thm-complex-numbers-form-a-field
  - thm-nth-roots-exist
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
aliases: []
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emmanuel Kowalski, The Large Sieve and its Applications (Cambridge Tracts 175, 2008)"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/23450/1/E.%20Kowalski.pdf"
      locator: "Chapter 3, §3.2 and Proposition 3.6, printed pp. 34–43"
---

## Statement

Let $G$ be a finite group, and choose one representative $\pi:G\to
\mathrm{GL}(V_{\pi})$ from each equivalence class of irreducible finite-dimensional
complex representations. For each $\pi$, give $V_{\pi}$ a positive-definite
Hermitian inner product invariant under $G$, choose an orthonormal basis
$(e^{\pi}_{i})_{1\le i\le d_{\pi}}$, and write $d_{\pi}:=\dim_{\mathbb C}V_{\pi}$.
For $g\in G$, define
$$u^{\pi}_{ij}(g):=\sqrt{d_{\pi}}\,\langle\pi(g)e^{\pi}_{i},e^{\pi}_{j}\rangle.$$
With the inner product
$$\langle f,h\rangle_{G}:=\frac1{|G|}\sum_{g\in G}f(g)\overline{h(g)}$$
on the complex-valued functions on $G$, the family of all $u^{\pi}_{ij}$ is an
orthonormal basis. It contains the constant function $1$ from the trivial
representation, and the number of its elements is $|G|$.

## Statement references

[[def-group]]

[[def-subrepresentation-and-irreducible-representation]]

[[def-finite-dimensional-representation-of-a-group-over-a-field]]

[[def-linear-basis]]

[[def-real-and-complex-inner-product-space]]

[[def-matrix-coefficient-of-a-unitary-representation]]

[[thm-finitely-many-irreducibles-occur-in-the-regular-representation-with-multiplicity-equal-to-their-degree]]

[Kowalski, Chapter 3, §3.2 and Proposition 3.6, full text](https://ndl.ethernet.edu.et/bitstream/123456789/23450/1/E.%20Kowalski.pdf)

## Facts & Assumptions

**Given:** A finite group $G$ and one representative of each equivalence class of its irreducible finite-dimensional complex representations.

[F1] The regular representation of $G$ is a finite direct sum in which each irreducible representation $V_{\pi}$ occurs with multiplicity $d_{\pi}$; hence $\sum_{\pi}d_{\pi}^{2}=|G|$ ([[thm-finitely-many-irreducibles-occur-in-the-regular-representation-with-multiplicity-equal-to-their-degree]]).

[F2] Every endomorphism commuting with an irreducible complex representation is scalar, and a nonzero intertwiner between inequivalent irreducible representations cannot exist ([[cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars]], [[cor-schurs-lemma-for-irreducible-representations]]).

[F3] Similar endomorphisms have the same trace, and the trace in a finite basis is the sum of diagonal entries ([[def-trace-of-an-endomorphism]], [[cor-trace-is-invariant-under-similarity]]).

[F4] A finite-dimensional positive-definite inner-product space has an orthonormal basis ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

[F5] Every positive real number has a unique positive square root, and $\mathbb C$ is a field ([[thm-nth-roots-exist]], [[thm-complex-numbers-form-a-field]]).

[F6] A finite-dimensional complex vector space has a finite basis, and transporting the standard Hermitian inner product along that basis gives a positive-definite Hermitian inner product ([[def-linear-basis]], [[def-real-and-complex-inner-product-space]]).

## Proof

1.1 For each $V_{\pi}$, [F6] supplies a positive-definite Hermitian inner product $\langle\cdot,\cdot\rangle_{0}$; set $\langle v,w\rangle_{\pi}:=\sum_{g\in G}\langle\pi(g)v,\pi(g)w\rangle_{0}$. This form is positive definite because every $\pi(g)$ is invertible and the identity term is positive for $v\ne0$; reindexing $g\mapsto gh$ shows $\langle\pi(h)v,\pi(h)w\rangle_{\pi}=\langle v,w\rangle_{\pi}$. The finite list of representations therefore admits invariant inner products and orthonormal bases by [F4], without an arbitrary-family choice. [F4, F6, given, construct]

1.2 Fix irreducible unitary representations $\pi,\tau$ and vectors $v,w\in V_{\pi}$, $v',w'\in V_{\tau}$. Define $T:V_{\tau}\to V_{\pi}$ by $Tz=\langle z,v'\rangle_{\tau}v$ and $A(T):=|G|^{-1}\sum_{g\in G}\pi(g)T\tau(g)^{-1}$. Reindexing the finite sum shows $A(T)\tau(h)=\pi(h)A(T)$ for every $h\in G$. [given, construct]

2.1 Evaluating at $w'$ and pairing with $w$ gives $\langle A(T)w',w\rangle=|G|^{-1}\sum_{g\in G}\langle\pi(g)v,w\rangle\overline{\langle\tau(g)v',w'\rangle}$, using invariance of the inner products under $G$. [step 1.2, algebra]

3.1 If $\pi$ and $\tau$ are inequivalent, [F2] forces the intertwiner $A(T)$ of step 1.2 to be zero, so the average in step 2.1 is zero. [F2, step 1.2, step 2.1]

3.2 If $\pi=\tau$, [F2] gives $A(T)=cI$ for some $c\in\mathbb C$. Trace invariance [F3] and termwise evaluation of the finite sum give $\operatorname{tr}(A(T))=\operatorname{tr}(T)$. In an orthonormal basis, $\operatorname{tr}(T)=\sum_i\langle T e_i,e_i\rangle=\langle v,v'\rangle$, so $cd_{\pi}=\langle v,v'\rangle$. Substituting this scalar into step 2.1 yields $|G|^{-1}\sum_g\langle\pi(g)v,w\rangle\overline{\langle\pi(g)v',w'\rangle}=d_{\pi}^{-1}\langle v,v'\rangle\overline{\langle w,w'\rangle}$. [F2, F3, step 1.2, step 2.1, algebra]

4.1 Apply steps 3.1–3.2 to orthonormal basis vectors. The matrix coefficients from inequivalent representations are orthogonal; within one representation their inner products are $d_{\pi}^{-1}\delta_{ik}\delta_{jl}$. Multiplying each coefficient by $\sqrt{d_{\pi}}$ therefore makes the family $u^{\pi}_{ij}$ orthonormal. [F5, step 3.1, step 3.2, algebra]

5.1 By [F1], the family contains $\sum_{\pi}d_{\pi}^{2}=|G|$ orthonormal functions. The space of all complex functions on $G$ has dimension $|G|$, so this orthonormal family is a basis. The trivial representation has degree one and its coefficient is the constant function $1$. [F1, step 4.1, algebra] ∎
