---
id: lem-hom-from-projectives-counts-simple-composition-factors
kind: lemma
title: "Hom from a projective counts simple composition factors"
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-composition-series-and-composition-factors-of-an-object
  - prop-projective-covers-in-o-are-indecomposable-and-unique
  - thm-category-o-has-enough-projectives
  - thm-every-category-o-object-has-finite-length
  - thm-jordan-holder-theorem-in-an-abelian-category
  - thm-projective-object-characterisations
  - thm-simple-objects-of-category-o-are-highest-weight-modules
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lin Chen, lecture notes (Spring 2024), Lecture 8, Corollary 4.9"
      url: https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf
      locator: "§4, Corollary 4.9 (dim Hom(P, M) = [M : L]) and Theorem 4.4(4), printed p. 7 (full text read at harvest)"
    - title: "Pavel Etingof, Representations of Lie Groups (18.757, Fall 2023), Proposition 16.2(ii)"
      url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
      locator: "§16.2, Proposition 16.2(ii) and proof (multiplicities equal dim Hom(P_i, -)), printed pp. 85-87 (full text read at harvest)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\lambda$ be a
weight and let $P(\lambda)$ be the projective cover of $L(\lambda)$ produced
by [[thm-category-o-has-enough-projectives]]. For every finite-length object
$X$ of $\mathcal O$,
$$\dim_{\mathbb C}\operatorname{Hom}_{\mathcal O}(P(\lambda),X)=[X:L(\lambda)],$$
the multiplicity of $L(\lambda)$ in a composition series of $X$
([[def-composition-series-and-composition-factors-of-an-object]]).

## Facts & Assumptions

**Given:** The Axiom of Choice, a weight $\lambda$, the projective cover $P(\lambda)\twoheadrightarrow L(\lambda)$ of the previous theorem, and a finite-length object $X\in\mathcal O$.

[F1] $P(\lambda)$ is projective, is indecomposable with local endomorphism ring, has a unique maximal proper subobject $J(P(\lambda))$ with $P(\lambda)/J(P(\lambda))$ simple, and the canonical epimorphism onto the head is essential with head $L(\lambda)$. The functor $\operatorname{Hom}(P(\lambda),-)$ is exact ([[thm-category-o-has-enough-projectives]], [[prop-projective-covers-in-o-are-indecomposable-and-unique]], [[thm-projective-object-characterisations]]).

[F2] For a simple object $L(\mu)$ of $\mathcal O$ one has $\operatorname{Hom}_{\mathcal O}(P(\lambda),L(\mu))\cong\mathbb C$ if $\mu=\lambda$ and $0$ if $\mu\ne\lambda$: a nonzero morphism $P(\lambda)\to L(\mu)$ is an epimorphism, so $L(\mu)$ is the head of $P(\lambda)$ and $\mu=\lambda$ by [F1]; and for $\mu=\lambda$ every nonzero morphism has kernel a maximal proper subobject, hence equal to $J(P(\lambda))$ by uniqueness, so all morphisms factor through the fixed quotient $L(\lambda)$. Each endomorphism of this highest-weight simple acts by a scalar on its one-dimensional highest line, which generates the module, so $\operatorname{End}(L(\lambda))=\mathbb C$. Simple labels are distinct by [[thm-simple-objects-of-category-o-are-highest-weight-modules]]. [F1]

[F3] Every object of $\mathcal O$ has a finite composition series, and Jordan–Hölder makes its simple multiplicities independent of the series ([[def-composition-series-and-composition-factors-of-an-object]], [[thm-every-category-o-object-has-finite-length]], [[thm-jordan-holder-theorem-in-an-abelian-category]]). For $0\to A\to X\to B\to0$, concatenate a composition series of $A$ with the inverse images of a composition series of $B$: the resulting series of $X$ has precisely their combined factors, proving additivity. The empty series of zero has all multiplicities zero.

## Proof

**Proof technique:** induction on the length of a composition series, using exactness of $\operatorname{Hom}(P(\lambda),-)$ and additivity of multiplicities.

1.1 Since $P(\lambda)$ is projective, the functor $\operatorname{Hom}_{\mathcal O}(P(\lambda),-)$ is exact; in particular, for a short exact sequence $0\to A\to X\to B\to0$ with all terms of finite length if the two outer Hom spaces are finite-dimensional, so is the middle one and $\dim\operatorname{Hom}(P(\lambda),X)=\dim\operatorname{Hom}(P(\lambda),A)+\dim\operatorname{Hom}(P(\lambda),B)$ and $[X:L(\lambda)]=[A:L(\lambda)]+[B:L(\lambda)]$ by [F3]. [F1, F3, given]

1.2 If $X=0$ both sides are zero, and if $X$ is simple then $X\cong L(\mu)$ for some $\mu$ and $\dim\operatorname{Hom}(P(\lambda),X)=[X:L(\lambda)]$ by [F2]; this is the base of the induction on the composition length. [F2, F3, base]

2.1 Now let $X$ have finite length and induct on the length of a composition series $0=X_0\subseteq X_1\subseteq\cdots\subseteq X_n=X$. Assume as induction hypothesis that the identity holds for finite-length objects of smaller length. For $n=0$ both sides are zero. For $n\ge1$ the exact sequence $0\to X_{n-1}\to X_n\to X_n/X_{n-1}\to0$ has simple quotient $X_n/X_{n-1}$, and steps 1.1 and 1.2 with the induction hypothesis give $\dim\operatorname{Hom}(P(\lambda),X_n)=\dim\operatorname{Hom}(P(\lambda),X_{n-1})+\dim\operatorname{Hom}(P(\lambda),X_n/X_{n-1})=[X_{n-1}:L(\lambda)]+[X_n/X_{n-1}:L(\lambda)]=[X_n:L(\lambda)]$. [F1, F2, F3, step 1.1, step 1.2, ih, algebra]

3.1 By induction on the length of a composition series, step 2.1 proves $\dim\operatorname{Hom}_{\mathcal O}(P(\lambda),X)=[X:L(\lambda)]$ for every finite-length $X$. [step 1.2, step 2.1, discharge-induction: step 2.1] ∎
