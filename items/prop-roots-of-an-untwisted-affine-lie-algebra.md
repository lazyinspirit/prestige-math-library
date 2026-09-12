---
id: prop-roots-of-an-untwisted-affine-lie-algebra
kind: proposition
title: Roots of an untwisted affine Lie algebra
deps: ["thm-loop-and-affine-gcm-presentations-are-isomorphic", "prop-affine-weyl-group-is-a-coroot-lattice-semidir-product", "def-null-root-central-coroot-and-affine-level", "lem-finite-semisimple-cartan-root-and-string-structure", "def-real-and-imaginary-kac-moody-roots", "prop-real-root-spaces-are-one-dimensional-sl2-roots", "thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra", "prop-the-weyl-group-preserves-roots-and-root-multiplicities", "lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root"]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras, Section 7.2 and
        Corollary 7.2.2
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Introduction to Kac-Moody Groups and Lie Algebras, Proposition
        12.2.14 and Corollary 12.2.16
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

The roots of the untwisted affine algebra relative to $\widehat{\mathfrak h}$ are $\alpha+n\delta$ for finite roots $\alpha$ and $n\in\mathbb Z$, and $n\delta$ for $n\in\mathbb Z\setminus\{0\}$. The former are real of multiplicity one, with spaces $\mathfrak g_\alpha\otimes t^n$; the latter are imaginary of multiplicity $\ell=\dim\mathfrak h$, with spaces $\mathfrak h\otimes t^n$.

## Facts & Assumptions

**Given:** The normalized untwisted affine algebra.

[F1] The loop/GCM identification is [[thm-loop-and-affine-gcm-presentations-are-isomorphic]].

[F2] The finite root decomposition and dimensions are [[lem-finite-semisimple-cartan-root-and-string-structure]], and the extended root conventions are [[def-null-root-central-coroot-and-affine-level]].

[F3] The highest-root bound and $\delta=\alpha_0+\theta$ are [[lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root]].

[F4] Weyl transformations preserve roots and the symmetrized root form by [[prop-the-weyl-group-preserves-roots-and-root-multiplicities]]. The form is the root-span restriction of [[thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra]].

[F5] Real roots are the simple-root orbits by [[def-real-and-imaginary-kac-moody-roots]], and the only root multiples of a simple root are its two signs by [[prop-real-root-spaces-are-one-dimensional-sl2-roots]].

[F6] The affine Weyl action fixes $\delta$ and has the translation description in [[prop-affine-weyl-group-is-a-coroot-lattice-semidir-product]].

## Proof

1.1 For $h\in\mathfrak h$, $[h,x_\alpha\otimes t^n]=\alpha(h)x_\alpha\otimes t^n$, while $d$ acts with eigenvalue $n$ and $c$ acts as zero in the adjoint module. The finite decomposition therefore gives precisely the stated nonzero weights and spaces. Distinct $n$ are distinguished by $d$, and distinct finite weights by $\mathfrak h$. The zero-weight space is $\widehat{\mathfrak h}$ and is not a root space. Dimensions are one for finite-root modes and $\ell$ for nonzero Cartan modes. [F1, F2, algebra]

2.1 On the root span define $(\alpha+n\delta,\beta+m\delta)=(\alpha,\beta)$ using the positive definite finite-root form. F3's Gram-matrix calculation identifies this with the symmetrized form in F4. Thus $\delta$ is in its radical on the root span, every finite-root mode has positive square, and every simple root, including $\alpha_0$, has positive square. The Weyl action preserves this form and fixes $\delta$. Consequently $n\delta$ for $n\ne0$ cannot be the image of a simple root and is imaginary. This says radical on the root span, not on the full dual Cartan form. [F3, F4, F5, F6, step 1.1, algebra]

2.2 Every root in step 1.1 has simple coordinates of one sign. For $n>0$, $\alpha+n\delta=n\alpha_0+(n\theta+\alpha)$ has nonnegative coordinates: F3 gives $\theta+\alpha\in Q_+$ and $\theta\in Q_+$. The negative-$n$ case follows by negation, and $n=0$ is the finite-root sign rule. Multiples $n\delta$ have the same sign as $n$. In particular, reflecting a positive root not proportional to the reflecting simple root keeps it positive: the reflection changes only that simple coordinate, leaving another positive coordinate unchanged, and its image is a root by F4. [F2, F3, F4, step 1.1, algebra]

3.1 Let $\beta=\sum_{i=0}^\ell b_i\alpha_i$ be a positive root of positive square. The equality $(\beta,\beta)=\sum_i b_i(\beta,\alpha_i)>0$ yields an $i$ with $(\beta,\alpha_i)>0$. Its positive integral coroot pairing is $(\beta,\alpha_i)/d_i$, with $d_i=(\alpha_i,\alpha_i)/2>0$. If $\beta$ is proportional to $\alpha_i$, F5 gives $\beta=\alpha_i$. Otherwise step 2.2 shows that $s_i\beta$ stays positive and has smaller positive integer height. Repeat this descent; height cannot decrease indefinitely, so it reaches a simple root. Reversing the finite reflection word proves $\beta$ real. A negative positive-square root is real as well, since its negative is real and simple roots have real negatives. Thus all $\alpha+n\delta$ are real. Combined with steps 1.1 and 2.1 this proves the complete list and multiplicities. The proof includes rank one and all integer modes; no choice over an infinite index set occurs. [F4, F5, step 2.1, step 2.2, algebra] ∎

