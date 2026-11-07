---
id: lem-primitive-principal-ideal-gives-cyclic-isogeny-sublattice
kind: lemma
title: "Primitive principal ideals give cyclic isogeny sublattices"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-quadratic-order-of-discriminant
  - thm-proper-fractional-ideal-of-quadratic-order-is-invertible
  - lem-nonzero-fractional-ideal-of-quadratic-order-is-a-rank-two-lattice
  - def-product-and-colon-of-fractional-ideals
  - def-field-norm-and-trace
  - def-classical-modular-equation-for-cyclic-isogenies
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "D. A. Cox, Primes of the Form x² + ny², 2nd ed."
      url: "https://www.math.utoronto.ca/~ila/Cox-Primes_of_the_form_x2%2Bny2.pdf"
      locator: "Lemma 11.26 and Corollary 11.27, printed p. 237"
    - title: "A. V. Sutherland, MIT 18.783 Lecture 17"
      url: "https://ocw.mit.edu/courses/18-783-elliptic-curves-fall-2025/mit18_783_f25_lec_full.pdf"
      locator: "Lecture 17, index and cyclicity of CM ideal isogenies"
verification: {}
---

## Statement

Let $\mathcal O$ be an imaginary quadratic order, let $I$ be a proper
invertible fractional $\mathcal O$-ideal, and let $0\ne\alpha\in\mathcal O$.
Call $\alpha$ primitive if $\alpha\notin d\mathcal O$ for every integer
$d>1$. Then $\alpha I\subseteq I$ has index $N_{K/\mathbb Q}(\alpha)>0$,
and $I/\alpha I$ is cyclic if and only if $\alpha$ is primitive. Thus
$\alpha I$ defines a cyclic isogeny sublattice of that index precisely in the
primitive case.

## Statement references

[[def-classical-modular-equation-for-cyclic-isogenies|A cyclic isogeny sublattice has cyclic quotient of the stated index.]]

[Cox, Lemma 11.26 and Corollary 11.27](https://www.math.utoronto.ca/~ila/Cox-Primes_of_the_form_x2%2Bny2.pdf)

## Facts & Assumptions

**Given:** An imaginary quadratic order $\mathcal O$, a proper invertible fractional ideal $I$, and a nonzero $\alpha\in\mathcal O$.

[F1] [[def-quadratic-order-of-discriminant]]: $\mathcal O$ is a rank-two lattice in its quadratic field, and $N(\alpha)=\alpha\bar\alpha$.

[F2] [[thm-proper-fractional-ideal-of-quadratic-order-is-invertible]]: a proper fractional ideal has multiplier ring $(I:I)=\mathcal O$.

[F3] [[lem-nonzero-fractional-ideal-of-quadratic-order-is-a-rank-two-lattice]]: $I$ is a rank-two free abelian lattice.

[F4] [[def-product-and-colon-of-fractional-ideals]]: products and scalar multiples of fractional ideals are fractional ideals.

## Proof

1.1 Multiplication by $\alpha$ is an injective endomorphism of the rank-two lattice $I$. The rational vector space $I_{\mathbb Q}=I\otimes_{\mathbb Z}\mathbb Q$ is one-dimensional over $K$; multiplication by $\alpha$ on it has determinant over $\mathbb Q$ equal to $N(\alpha)$. The index of the image of an injective integer matrix is the absolute value of its determinant. Since $K$ is imaginary quadratic, $N(\alpha)=|\alpha|^2>0$, so $[I:\alpha I]=N(\alpha)$. [F1, F3, given, algebra]

2.1 Choose a $\mathbb Z$-basis of $I$ and write the inclusion matrix for $\alpha I\subseteq I$ in Smith normal form with invariant factors $d_1\mid d_2$. Then $I/\alpha I\cong\mathbb Z/d_1\oplus\mathbb Z/d_2$, which is cyclic exactly when $d_1=1$. If $d_1>1$, the inclusion matrix has all entries divisible by $d_1$, so $\alpha I\subseteq d_1 I$; hence $(\alpha/d_1)I\subseteq I$ and $\alpha/d_1\in(I:I)=\mathcal O$. Thus $\alpha$ is not primitive. [F2, F3, step 1.1, algebra]

3.1 Conversely, if $\alpha=d\beta$ with $d>1$ and $\beta\in\mathcal O$, then $\alpha I\subseteq dI$. Therefore the natural surjection $I/\alpha I\to I/dI\cong(\mathbb Z/d\mathbb Z)^2$ exists. A quotient of a cyclic group is cyclic, whereas $(\mathbb Z/d)^2$ is not cyclic for $d>1$; hence $I/\alpha I$ is not cyclic. This proves both directions. [F1, F3, step 2.1, algebra] ∎
