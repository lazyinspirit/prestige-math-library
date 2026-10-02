---
id: cor-no-nontrivial-number-field-is-unramified-over-q
kind: corollary
title: "Every nontrivial number field has a ramified finite prime"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-no-nontrivial-number-field-has-discriminant-plus-or-minus-one
  - thm-ramified-primes-and-the-number-field-discriminant
  - thm-ring-of-integers-free-of-rank-degree
  - def-discriminant-of-a-number-field-basis-and-order
  - thm-number-field-discriminant-is-well-defined-and-nonzero
  - def-field-norm-and-trace
  - thm-number-field-integral-ideal-factorisation-in-zf
  - def-ramification-index
  - def-prime-above-and-residue-degree
  - def-split-inert-ramified-and-unramified-prime
  - thm-chinese-remainder-theorem-for-comaximal-ideals
  - lem-trace-pairing-for-a-finite-separable-extension
  - cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - cor-algebraic-extensions-of-perfect-fields-are-separable
  - thm-trace-is-sum-of-eigenvalues
  - def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form
  - cor-ring-of-integers-is-a-dedekind-domain
  - thm-nonzero-ideals-in-dedekind-domains-are-invertible
  - lem-every-integer-above-one-has-a-prime-divisor
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 3 Theorem 3.35 and Lemmas 3.36-3.38, pp.60-61; Ch. 4 Theorem 4.9, p.72."
    - title: "Brian Conrad and Aaron Landesman, Math 154 Algebraic Number Theory"
      url: "https://people.math.harvard.edu/~landesman/assets/undergraduate-number-theory.pdf"
      locator: "§28 Theorem 28.3, p.147."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Every finite
number-field extension $K/\mathbb Q$ with $[K:\mathbb Q]>1$ has a rational
prime that ramifies in $K$.

## Facts & Assumptions

**Given:** The Axiom of Choice and a number field $K$ of degree $n=[K:\mathbb Q]>1$.

[F1] The preceding corollary gives $|d_K|>1$
([[cor-no-nontrivial-number-field-has-discriminant-plus-or-minus-one]]).

[F2] $\mathcal O_K$ is a free $\mathbb Z$-module of rank $n$, so it has an
integral basis $\alpha_1,\dots,\alpha_n$
([[thm-ring-of-integers-free-of-rank-degree]]).

[F3] For an integral basis,
$d_K=\det(\operatorname{Tr}_{K/\mathbb Q}(\alpha_i\alpha_j))_{i,j}$ is a
nonzero signed integer, independent of the basis
([[def-discriminant-of-a-number-field-basis-and-order]],
[[thm-number-field-discriminant-is-well-defined-and-nonzero]]).

[F4] For $x\in K$, the trace $\operatorname{Tr}_{K/\mathbb Q}(x)$ is the trace
of the $\mathbb Q$-linear operator of multiplication by $x$ on $K$
([[def-field-norm-and-trace]]).

[F5] Ramification data: $p\mathcal O_K=\prod_{\mathfrak P\mid p}\mathfrak P^{e(\mathfrak P/p)}$
is a finite product of powers of distinct nonzero primes, and $p$ is ramified
in $K$ exactly when some $e(\mathfrak P/p)>1$; each residue field
$\mathcal O_K/\mathfrak P$ is finite
([[thm-number-field-integral-ideal-factorisation-in-zf]],
[[def-ramification-index]], [[def-prime-above-and-residue-degree]],
[[def-split-inert-ramified-and-unramified-prime]]).

[F6] Chinese remainder theorem: for pairwise comaximal ideals $I_1,\dots,I_r$
of a commutative ring $R$, the canonical map $R\to\prod_iR/I_i$ induces
$R/\prod_iI_i\cong\prod_iR/I_i$
([[thm-chinese-remainder-theorem-for-comaximal-ideals]]).

[F7] The trace pairing of a finite separable field extension $L/F$,
$(x,y)\mapsto\operatorname{Tr}_{L/F}(xy)$, is nondegenerate
([[lem-trace-pairing-for-a-finite-separable-extension]]).

[F8] For a bilinear form on a finite-dimensional vector space, nondegeneracy is
equivalent to invertibility of its matrix in a basis
([[def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]]).

[F9] Every finite field is perfect, and every algebraic extension of a perfect
field is separable
([[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]],
[[cor-algebraic-extensions-of-perfect-fields-are-separable]]).

[F10] A nilpotent endomorphism of a finite-dimensional vector space has trace
$0$: over an algebraic closure the characteristic polynomial splits, every
eigenvalue of a nilpotent operator vanishes, and the trace is the sum of the
eigenvalues with multiplicity ([[thm-trace-is-sum-of-eigenvalues]]).

[F11] Under the Axiom of Choice, $\mathcal O_K$ is a Dedekind domain, and every
nonzero ideal of a Dedekind domain is invertible
([[cor-ring-of-integers-is-a-dedekind-domain]],
[[thm-nonzero-ideals-in-dedekind-domains-are-invertible]]).

[F12] Every integer greater than $1$ has a prime divisor
([[lem-every-integer-above-one-has-a-prime-divisor]]).

[F13] Ramification is detected by the discriminant: a rational prime $p$
ramifies in $K/\mathbb Q$ if and only if $p\mid d_K$
([[thm-ramified-primes-and-the-number-field-discriminant]]).

## Proof

1.1 Fix an integral basis $\alpha_1,\dots,\alpha_n$ of $\mathcal O_K$, which exists by [F2]. By [F1] and [F3] the integer $|d_K|$ is greater than $1$, so [F12] gives a rational prime $p$ dividing $d_K$. [F1, F2, F3, F12, choose]
1.2 Put $A:=\mathcal O_K/p\mathcal O_K$. Since $\mathcal O_K$ is free with $\mathbb Z$-basis $\alpha_1,\dots,\alpha_n$ by [F2], the classes $\bar\alpha_1,\dots,\bar\alpha_n$ form an $\mathbb F_p$-basis of $A$; in particular $\dim_{\mathbb F_p}A=n$. [F2, algebra]
1.3 Factorisation: by [F5], write $p\mathcal O_K=\mathfrak P_1^{e_1}\cdots\mathfrak P_r^{e_r}$ with distinct nonzero primes $\mathfrak P_i$ and $e_i\ge1$. Distinct maximal ideals satisfy $\mathfrak P_i+\mathfrak P_j=\mathcal O_K$; choosing $u+v=1$ with $u\in\mathfrak P_i$, $v\in\mathfrak P_j$ and expanding $(u+v)^{e_i+e_j-1}$ exhibits every term as an element of $\mathfrak P_i^{e_i}+\mathfrak P_j^{e_j}$, so $1$ lies in that sum and the powers are pairwise comaximal. Applying [F6] to the ideals $\mathfrak P_i^{e_i}$ gives an isomorphism $A\cong\prod_{i=1}^rA_i$ with $A_i:=\mathcal O_K/\mathfrak P_i^{e_i}$. [F5, F6, algebra]
1.4 Reducedness of the factors: ideals of $R/I$ correspond to ideals of $R$ containing $I$, so the maximal ideals of $A_i$ are the images of maximal ideals of $\mathcal O_K$ containing $\mathfrak P_i^{e_i}$; a maximal ideal containing $\mathfrak P_i^{e_i}$ contains the prime $\mathfrak P_i$, hence equals it, and $\mathfrak m_i:=\mathfrak P_i/\mathfrak P_i^{e_i}$ is the unique maximal ideal of $A_i$, with $A_i/\mathfrak m_i=\mathcal O_K/\mathfrak P_i$ a finite field by [F5]. If $e_i=1$ then $A_i=\mathcal O_K/\mathfrak P_i$ is a field and reduced. If $e_i\ge2$ then $\mathfrak P_i^{e_i}\subsetneq\mathfrak P_i$: otherwise $\mathfrak P_i^{e_i}=\mathfrak P_i$, and multiplying by the inverse ideal $\mathfrak P_i^{-1}$, which exists by [F11], gives $\mathfrak P_i^{e_i-1}=\mathcal O_K\subseteq\mathfrak P_i$, a contradiction; so some $x\in\mathfrak P_i\setminus\mathfrak P_i^{e_i}$ has nonzero image in $A_i$ with $x^{e_i}\in\mathfrak P_i^{e_i}$, a nonzero nilpotent. Therefore $A_i$ is reduced exactly when $e_i=1$, and since a finite product of nonzero rings is reduced exactly when each factor is, $A$ is reduced exactly when all $e_i=1$; by [F5] this is exactly the case that $p$ is unramified. [F5, F11, algebra]
2.1 Trace form and discriminant: for $x\in\mathcal O_K$, multiplication by $x$ on $\mathcal O_K$ has matrix with integer entries in the basis $\alpha_i$ and trace $\operatorname{Tr}_{K/\mathbb Q}(x)$ by [F4]. Reducing modulo $p$ shows that multiplication by $\bar x$ on $A$ has $\mathbb F_p$-trace $\operatorname{Tr}_{K/\mathbb Q}(x)\bmod p$. Hence $T(\bar x,\bar y):=\operatorname{Tr}_{K/\mathbb Q}(xy)\bmod p$ defines an $\mathbb F_p$-bilinear form on $A$ whose matrix in the basis $\bar\alpha_i$ is $(\operatorname{Tr}_{K/\mathbb Q}(\alpha_i\alpha_j)\bmod p)$, with determinant $d_K\bmod p$ by [F3]. By [F8] this form is degenerate exactly when that determinant vanishes, that is, exactly when $p\mid d_K$. [F3, F4, F8, step 1.2, algebra]
2.2 Trace form versus reducedness over the perfect field $\mathbb F_p$: (a) if every $e_i=1$, then $A\cong\prod_iF_i$ with $F_i=\mathcal O_K/\mathfrak P_i$ a finite field; each $F_i/\mathbb F_p$ is finite, hence separable by [F9], so each factor trace pairing is nondegenerate by [F7]. Multiplication by an element of the product acts blockwise on the direct sum $\bigoplus_iF_i$, so the trace form of $A$ is the orthogonal direct sum of the factor pairings; a vector orthogonal to everything has every component orthogonal to its own factor, hence is zero, and by [F8] the form is nondegenerate. (b) if some $e_i>1$, choose $0\ne\bar x$ in the nilpotent maximal ideal of the factor $A_i$ as in step 1.4; for every $\bar y\in A$ the product $\bar x\bar y$ is nilpotent, so multiplication by it is a nilpotent endomorphism and has trace $0$ by [F10]. Thus $\bar x\ne0$ lies in the radical of $T$ and $T$ is degenerate. Consequently $T$ is nondegenerate exactly when $A$ is reduced. [F7, F8, F9, F10, step 1.3, step 1.4, algebra]
3.1 Combining steps 2.1, 1.4 and 2.2, for the rational prime $p$ the following are equivalent: $p\mid d_K$; the trace form $T$ on $A=\mathcal O_K/p\mathcal O_K$ is degenerate; $A$ is not reduced; some ramification index exceeds $1$; and $p$ ramifies in $K$. This verifies the published ramification-discriminant criterion [F13] for this field and prime in full. [F5, F13, step 2.1, step 1.4, step 2.2]
4.1 By step 1.1 the prime $p$ divides $d_K$, so step 3.1, equivalently the criterion [F13], shows that $p$ ramifies in $K$. Therefore every number field of degree $n>1$ has a rational prime that ramifies in it. [F13, step 1.1, step 3.1] ∎

## Remarks

The corollary is the contrapositive of the statement that a number field
unramified at every finite prime has $|d_K|=1$. The proof spells out the
ramification-discriminant criterion rather than citing it silently: over the
finite field $\mathbb F_p$ the discriminant is the determinant of the reduced
trace pairing, the residue algebra is the product of the prime-power factors
$\mathcal O_K/\mathfrak P_i^{e_i}$, and over the perfect residue field that
algebra is reduced exactly when all ramification indices are $1$. Only finite
primes are involved; no archimedean place enters the discriminant. The
published criterion
([[thm-ramified-primes-and-the-number-field-discriminant]]) is used as stated
and re-verified by steps 1.3, 1.4, 2.1, 2.2 and 3.1.
