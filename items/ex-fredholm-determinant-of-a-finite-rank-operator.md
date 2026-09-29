---
id: ex-fredholm-determinant-of-a-finite-rank-operator
kind: example
title: Fredholm determinant of a finite-rank operator
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - cor-inner-product-induces-a-norm
  - def-axiom-of-choice
  - def-bounded-linear-operator
  - def-coordinate-column-and-matrix-of-a-linear-map
  - def-determinant-of-a-linear-operator
  - def-determinant-of-a-square-matrix
  - def-dimension
  - def-hilbert-space
  - def-linear-independence
  - def-linear-basis
  - def-real-and-complex-inner-product-space
  - def-trace-class-operator
  - lem-arbitrary-hilbert-fredholm-determinant-from-separable-support
  - lem-span-of-a-single-vector
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-operator-determinant-is-basis-independent
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Kostenko, Trace Ideals with Applications, §3.4"
      url: "https://users.fmf.uni-lj.si/kostenko/teach/IdealsNotes.pdf"
    - title: "van Neerven, Functional Analysis, §14.5.a"
      url: "https://fa.ewi.tudelft.nl/~neerven/FA/JvN-Functional_Analysis.pdf"
    - title: "Dyatlov–Zworski, Mathematical Theory of Scattering Resonances, Appendix B §§B.5–B.6"
      url: "https://math.mit.edu/~dyatlov/res/res_final.pdf"
---

## Example

Assume AC. Let $H$ be any complex Hilbert space, using the library convention
that the inner product is linear in its first argument
([[def-axiom-of-choice]], [[def-hilbert-space]],
[[def-real-and-complex-inner-product-space]]). For every bounded finite-rank
linear operator $F:H\to H$ ([[def-bounded-linear-operator]]) and every
finite-dimensional invariant subspace $E\supseteq\operatorname{ran}F$, the arbitrary-Hilbert local determinant
satisfies
$$D_H(I+zF)=\det_E\bigl(I_E+z(F|_E)\bigr)\qquad(z\in\mathbb C).$$
In particular, for $u,v\in H$ and the rank-at-most-one operator
$F(x)=\langle x,v\rangle u$,
$$D_H(I+zF)=1+z\langle u,v\rangle.$$

## Facts & Assumptions

**Given:** AC; a complex Hilbert space $H$; a bounded finite-rank linear operator $F$; and,
for the rank-one calculation, vectors $u,v\in H$ with the library's
linear-first inner-product convention.

[A1] AC implies DC and Countable Choice; these are the exact choice strengths
used by the trace-class and arbitrary-Hilbert determinant suppliers
([[def-axiom-of-choice]],
[[thm-choice-implies-dependent-implies-countable-choice]]).

[A2] A complex Hilbert space is a complex inner-product space whose pairing is
linear in its first argument, conjugate-symmetric, and positive definite
([[def-hilbert-space]], [[def-real-and-complex-inner-product-space]]).

[A3] The given $F$ is a bounded linear operator; every finite-rank operator is
compact and therefore trace class ([[def-bounded-linear-operator]],
[[def-trace-class-operator]]).

[A4] Cauchy–Schwarz gives $|\langle x,v\rangle|\le\|x\|\,\|v\|$, and
$\|\lambda u\|=|\lambda|\,\|u\|$
([[thm-cauchy-schwarz-in-an-inner-product-space]],
[[cor-inner-product-induces-a-norm]]).

[A5] For a trace-class operator on any complex Hilbert space, AC supplies a
support-independent determinant $D_H$. If $F$ has finite rank, then for every
finite-dimensional $E\subseteq H$ containing $\operatorname{ran}F$,
$$D_H(I+zF)=\det_E\bigl(I_E+z(F|_E)\bigr),$$
and the determinant on the zero space is $1$
([[lem-arbitrary-hilbert-fredholm-determinant-from-separable-support]]).

[A6] For a vector $u$, $\operatorname{span}\{u\}$ is the set of scalar
multiples of $u$, and if $u\ne0$ then $\lambda u=0$ forces $\lambda=0$
([[lem-span-of-a-single-vector]]). A subset is linearly independent when every
injective finite list into it is linearly independent; a basis is an independent
spanning set; a finite-dimensional space has a finite basis; and the zero space
has dimension zero ([[def-linear-independence]], [[def-linear-basis]],
[[def-dimension]]).

[A7] In an ordered basis, the matrix of a linear map has as its columns the
coordinate columns of the images of the basis vectors
([[def-coordinate-column-and-matrix-of-a-linear-map]]).

[A8] The determinant of a square matrix is given by the Leibniz formula, so
for a one-by-one matrix $[c]$ its determinant is $c$
([[def-determinant-of-a-square-matrix]]).

[A9] The ordinary determinant of a finite-dimensional operator is its matrix
determinant in an ordered basis, equals $1$ on the zero space, and is
basis-independent
([[def-determinant-of-a-linear-operator]],
[[thm-operator-determinant-is-basis-independent]]).

## Proof

**Proof technique:** direct.

1.1 By [A1], AC supplies the Countable Choice hypothesis needed in [A3] and [A5]. The finite-rank $F$ in the statement is therefore trace class, so the arbitrary-Hilbert determinant theorem applies. [A1, A3, A5]

1.2 Fix $u,v\in H$, put $\alpha:=\langle u,v\rangle$, and define $F(x):=\langle x,v\rangle u$. By [A2], $F$ is linear; [A4] gives $\|F(x)\|=|\langle x,v\rangle|\|u\|\le\|v\|\|u\|\|x\|$, so it is bounded. Its range lies in $\operatorname{span}\{u\}$, hence it has rank at most one. Also $F(u)=\alpha u$. [A2, A4, algebra]

2.1 Let $E$ be any finite-dimensional subspace containing $\operatorname{ran}F$. For every $x\in E$, $F(x)\in\operatorname{ran}F\subseteq E$, so $E$ is $F$-invariant. By [A5], $D_H(I+zF)=\det_E(I_E+z(F|_E))$ for every $z\in\mathbb C$. If $F=0$, this says both sides are $1$ because $I_E$ has determinant $1$; this includes $E=\{0\}$, where the convention is also explicitly in [A5]. [A5, A8, A9, step 1.1]

3.1 If $u=0$, then $F=0$, $\alpha=0$, and $E=\{0\}$ is finite-dimensional and contains the range. Step 2.1 gives $D_H(I+zF)=1=1+z\alpha$ for all $z$; this also covers $H=\{0\}$. [A5, A6, step 2.1, step 1.2]

3.2 Suppose $u\ne0$ and set $E=\operatorname{span}\{u\}$. By [A6], $E$ is the set of scalar multiples of $u$. The one-element list $(u)$ is independent: its only coefficient relation is $\lambda u=0$, which forces $\lambda=0$. More generally, an injective finite list into $\{u\}$ has at most one entry, since any two entries would both equal $u$; the empty list is independent, so $\{u\}$ is independent under [A6]. It spans $E$, hence it is a basis and $(u)$ is an ordered basis; thus $E$ has dimension one. The range of $F$ is contained in $E$, and $E$ is invariant because $F(u)=\alpha u$. Relative to $(u)$, [A7] gives the matrix $[\alpha]$ for $F|_E$ and $[1+z\alpha]$ for $I_E+z(F|_E)$. By [A8]–[A9], its ordinary determinant is $1+z\alpha$; step 2.1 therefore yields $D_H(I+zF)=1+z\langle u,v\rangle$. If $v=0$ then this is the zero operator and the value is $1$; if $v\ne0$ but $\alpha=0$, then $F(v)=\langle v,v\rangle u\ne0$ and, for every $x$, $F^2(x)=\langle F(x),v\rangle u=\langle x,v\rangle\langle u,v\rangle u=0$. Thus the nonzero rank-one operator is nilpotent and its one-dimensional restriction is zero, so the determinant is again $1$. [A2, A6, A7, A8, A9, step 2.1, step 1.2]

4.1 At $z=0$ both sides of the finite-rank identity and rank-one formula equal $1$. The zero-rank case, the zero vector and zero Hilbert space, and the nilpotent rank-one case are covered in steps 2.1, 3.1, and 3.2; nonzero $\alpha$ gives the scalar factor $1+z\alpha$ in step 3.2. There is no interval endpoint parameter. The only assumption is AC [A1]; no choices are made in the finite-dimensional rank-one calculation, and both conclusions are equalities rather than iff claims. [A1, A5, A6, A8, A9, step 2.1, step 3.1, step 3.2]
\qed
