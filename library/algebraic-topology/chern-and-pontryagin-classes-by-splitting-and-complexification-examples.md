---
page: chern-and-pontryagin-classes-by-splitting-and-complexification-examples
title: Chern and Pontryagin Classes by Splitting and Complexification — Examples
status: draft
items:
  - lem-integral-powers-of-the-complexified-universal-real-line
examples:
  - ex-chern-class-of-tautological-and-hyperplane-lines-on-complex-projective-space
  - ex-chern-classes-of-a-sum-of-universal-complex-lines
  - ex-complex-line-bundles-over-the-two-sphere-by-clutching-degree
  - ex-realification-of-a-complex-line-compares-c-one-w-two-and-euler
  - ex-stability-and-rank-cutoff-under-adding-a-trivial-summand
  - cex-integral-total-pontryagin-multiplicativity-cannot-ignore-two-torsion
---

The examples exercise the page's sign conventions and its rank cutoffs. On
complex projective space the tautological line and its dual satisfy
$c_1(\gamma)=-c_1(\gamma^*)$ and $c(\gamma^*)=1+c_1(\gamma^*)$, with the dual
class the generator normalized by the pair; on a product of projective lines the
Chern classes of a sum of universal lines are the elementary symmetric
functions of the coordinate classes. Over $S^2$ the clutching degree computes
the first Chern number, $c_1(E_d)=d\,u$, for the generator $u=c_1(E_1)$
normalized by the clutching orientation $\langle u,[S^2]\rangle=+1$; this Hopf
normalization of $S^2=\mathbb{CP}^1$ is the negative of the projective pair's
normalized generator, since $u=c_1(\gamma)=-c_1(\gamma^*)$ there, so the two
examples agree once each item's own orientation of the sphere is kept, matching
the clutching classification of complex lines.

The realification of a complex line identifies $c_1$, $w_2$ and the Euler class
and shows $w_1=0$, while adding trivial summands leaves the total Chern and
Pontryagin classes unchanged and the coefficients vanish above the rank. The
final lemma and counterexample exhibit the integral two-torsion phenomenon: for
the universal real line $\lambda$ the class $a=c_1(\lambda_{\mathbb C})$
satisfies $2a=0$ and $\rho_2(a)=w_1(\lambda)^2$, all its powers are nonzero of
exact order two, and $p_1(\lambda\oplus\lambda)=-a^2\neq0$ while
$p(\lambda)^2=1$, so integral total Pontryagin multiplicativity genuinely
fails and the away-from-two theorem is the correct unrestricted statement.
