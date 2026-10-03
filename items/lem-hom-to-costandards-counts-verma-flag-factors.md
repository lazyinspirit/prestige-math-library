---
id: lem-hom-to-costandards-counts-verma-flag-factors
kind: lemma
title: Hom to costandards counts Verma-flag factors
status: draft
origin: pipeline
deps:
- def-axiom-of-choice
- def-balanced-ext-bifunctor
- prop-restricted-duality-is-an-exact-involution-on-category-o
- thm-category-o-has-enough-projectives
- thm-category-o-is-abelian-and-extension-closed
- def-verma-flag-and-its-multiplicities
- lem-standard-costandard-hom-and-ext-vanishing
- thm-long-exact-ext-sequence-in-the-first-variable
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Lin Chen, lecture notes (Spring 2024), Lecture 9, Proposition-Definition 2.1
    url: https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf
    locator: §2, Proposition-Definition 2.1 with the devissage proof of Theorem-Definition 1.1, printed
      pp. 3-4 (full text read at harvest)
  - title: Pavel Etingof, Representations of Lie Groups (18.757, Fall 2023), Sec. 20.2
    url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
    locator: §20.1, Lemma 20.1 and Corollary 20.2, printed p. 100; §20.3, Theorem 20.6 proof, printed
      p. 102 (flag devissage of Hom to costandards).
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X\in\mathcal O$ be
Verma-filtered ([[def-verma-flag-and-its-multiplicities]]). Then for every
weight $\nu$
$$\dim_{\mathbb C}\operatorname{Hom}_{\mathcal O}(X,\nabla(\nu))=(X:\Delta(\nu)),\qquad \operatorname{Ext}^1_{\mathcal O}(X,\nabla(\nu))=0 .$$
The result is stated for all weights, including equal and incomparable labels.

## Facts & Assumptions

**Given:** The Axiom of Choice, a Verma-filtered object $X$, and a weight $\nu$.

[F1] A Verma flag of length $n$ has a top step $0\to K\to X\to\Delta(\mu)\to0$ in which $K$ is Verma-filtered of length $n-1$, and the multiplicities are additive along the step: $(X:\Delta(\nu))=(K:\Delta(\nu))+\delta_{\mu\nu}$; the zero object has the empty flag and all multiplicities zero ([[def-verma-flag-and-its-multiplicities]]).

[F2] For all weights $\mu,\nu$ one has $\dim\operatorname{Hom}_{\mathcal O}(\Delta(\mu),\nabla(\nu))=\delta_{\mu\nu}$ and $\operatorname{Ext}^1_{\mathcal O}(\Delta(\mu),\nabla(\nu))=0$; and $\operatorname{Hom}_{\mathcal O}(0,-)=0=\operatorname{Ext}^1_{\mathcal O}(0,-)$ ([[lem-standard-costandard-hom-and-ext-vanishing]]).

[F3] Category $\mathcal O$ is abelian and has enough projectives ([[thm-category-o-is-abelian-and-extension-closed]], [[thm-category-o-has-enough-projectives]]). The exact contravariant equivalence $D$ exchanges projectives and injectives: $\operatorname{Hom}(-,D(P))\cong\operatorname{Hom}(P,D(-))$ is exact for projective $P$. Dualizing a projective epimorphism $P\twoheadrightarrow D(Y)$ therefore embeds $Y$ into the injective $D(P)$, proving enough injectives ([[prop-restricted-duality-is-an-exact-involution-on-category-o]]). Finitely generated $U(\mathfrak g)$-modules have a set of representatives, since they are quotients of $U(\mathfrak g)^n$ for finite $n$. Work on a set-sized skeleton of $\mathcal O$; under AC choose a projective epimorphism onto and an injective embedding of each object, then recursively cover kernels and embed cokernels to supply resolutions. AC implies DC by selecting successors in any serial relation. Fix these resolution systems and use the canonical comparison identifications of [[def-balanced-ext-bifunctor]]. For a short exact sequence $0\to M'\to M\to M''\to0$ in $\mathcal O$ and every $N$ there is a natural exact sequence $0\to\operatorname{Hom}(M'',N)\to\operatorname{Hom}(M,N)\to\operatorname{Hom}(M',N)\to\operatorname{Ext}^1(M'',N)\to\operatorname{Ext}^1(M,N)\to\operatorname{Ext}^1(M',N)$ ([[thm-long-exact-ext-sequence-in-the-first-variable]]).

## Proof

**Proof technique:** induction on the length of a Verma flag, using the long exact sequence and the $\Delta$-$\nabla$ orthogonality.

1.1 If $X=0$ has the empty flag, then $\operatorname{Hom}(X,\nabla(\nu))=0$ and $\operatorname{Ext}^1(X,\nabla(\nu))=0$ while all multiplicities $(X:\Delta(\nu))$ vanish, so both formulas hold. [F1, F2, base]

1.2 Let $X$ have a Verma flag of length $n\ge1$ with top step $0\to K\to X\to\Delta(\mu)\to0$; then $K$ has a Verma flag of length $n-1$ and $(X:\Delta(\nu))=(K:\Delta(\nu))+\delta_{\mu\nu}$. Assume as induction hypothesis that the two formulas hold for $K$. [F1, given, ih]

2.1 The long exact sequence of [F3] for the top step begins $0\to\operatorname{Hom}(\Delta(\mu),\nabla(\nu))\to\operatorname{Hom}(X,\nabla(\nu))\to\operatorname{Hom}(K,\nabla(\nu))\to\operatorname{Ext}^1(\Delta(\mu),\nabla(\nu))\to\operatorname{Ext}^1(X,\nabla(\nu))\to\operatorname{Ext}^1(K,\nabla(\nu))$. By [F2] and the induction hypothesis of step 1.2 the fourth and sixth terms vanish, so the sequence gives the short exact sequence $0\to\operatorname{Hom}(\Delta(\mu),\nabla(\nu))\to\operatorname{Hom}(X,\nabla(\nu))\to\operatorname{Hom}(K,\nabla(\nu))\to0$ and the vanishing of $\operatorname{Ext}^1(X,\nabla(\nu))$. Taking dimensions and using [F2] and step 1.2, $\dim\operatorname{Hom}(X,\nabla(\nu))=\delta_{\mu\nu}+(K:\Delta(\nu))=(X:\Delta(\nu))$. [F2, F3, step 1.2, algebra]

3.1 By induction on the flag length, steps 1.1 and 2.1 prove $\dim\operatorname{Hom}_{\mathcal O}(X,\nabla(\nu))=(X:\Delta(\nu))$ and $\operatorname{Ext}^1_{\mathcal O}(X,\nabla(\nu))=0$ for every Verma-filtered $X$ and every weight $\nu$. [step 1.1, step 2.1, discharge-induction: step 2.1] ∎
