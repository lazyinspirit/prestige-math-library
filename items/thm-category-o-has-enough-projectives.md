---
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Historical full Step 5 item read and recorded Step 7 mathematical repair review, including the used supplier interfaces; current mathematical content matches the bound evidence. The repair review is local and does not claim an independent audit of the repair."
    delegated_by: owner
    evidence:
      - research/frontier-38-owner-30-reader-7.md
      - research/frontier-38-owner-30-dispatch/reader-reader-7.result.json
      - research/frontier-38-owner-30-step5-hash-7-post-5a.json
      - research/frontier-38-owner-30-alpha-batch-7-5a-decisions.json
      - research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u7.json
      - research/frontier-38-owner-30-dispatch/alpha-adjudicate-step7-v2-initial-r1-u7.result.json
id: thm-category-o-has-enough-projectives
kind: theorem
title: "Category O has enough projectives"
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-composition-series-and-composition-factors-of-an-object
  - def-essential-epimorphism-and-projective-cover
  - def-projective-object
  - lem-finite-dimensional-tensors-reach-every-block-simple
  - prop-projective-covers-in-o-are-indecomposable-and-unique
  - thm-category-o-is-abelian-and-extension-closed
  - thm-every-category-o-object-has-finite-length
proof_strategy: construct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups (18.757, Fall 2023), Cor. 16.6 and the preceding projection argument"
      url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
      locator: "§16.1, enough projectives by devissage; §16.3, Corollary 16.6(i) with proof, printed pp. 86-88 (full text read at harvest)"
    - title: "Lin Chen, lecture notes (Spring 2024), Lecture 8, Theorem 4.3"
      url: https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf
      locator: "§4, Theorem 4.3 and the proof of Theorem 4.4(1), printed pp. 6-8 (full text read at harvest)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Every simple object
$L(\mu)$ of $\mathcal O$ admits a projective cover
$P(\mu)\twoheadrightarrow L(\mu)$
([[def-essential-epimorphism-and-projective-cover]]), which may be chosen
inside the linkage class of $\mu$; the cover is unique up to isomorphism and
indecomposable. Consequently $\mathcal O$ has enough projectives: every object
of $\mathcal O$ is a quotient of a finite direct sum of such projective
covers, because objects of $\mathcal O$ have finite length and each composition
factor is a quotient of its projective cover.

## Facts & Assumptions

**Given:** The Axiom of Choice, a simple object $L(\mu)$ of $\mathcal O$ in the linkage class $C$, and an arbitrary object $X\in\mathcal O$ with a composition series.

[F1] There is a projective object $Q\in\mathcal O_C$ with an epimorphism $Q\twoheadrightarrow L(\mu)$ ([[lem-finite-dimensional-tensors-reach-every-block-simple]]).

[F2] If a projective object admits an epimorphism onto a simple object $L$, then some indecomposable direct summand is a projective cover of $L$; projective covers of $L$ are indecomposable, unique up to isomorphism, and have local endomorphism rings ([[prop-projective-covers-in-o-are-indecomposable-and-unique]]).

[F3] Every object of $\mathcal O$ has a finite composition series. The category is abelian and closed under submodules, quotients and finite direct sums; extension closure in the ambient module category requires the middle term to be $\mathfrak h$-semisimple ([[thm-every-category-o-object-has-finite-length]], [[thm-category-o-is-abelian-and-extension-closed]], [[def-composition-series-and-composition-factors-of-an-object]]).

## Proof

**Proof technique:** constructive: produce one projective onto each simple, split off an indecomposable cover, then devissage along a composition series.

1.1 By [F1] there is a projective $Q\in\mathcal O_C$ mapping onto $L(\mu)$; applying [F2] to that epimorphism, some indecomposable direct summand $P(\mu)$ of $Q$ is a projective cover of $L(\mu)$, unique up to isomorphism and indecomposable, and it lies in $\mathcal O_C$, hence in the linkage class of $\mu$. [F1, F2, given]

2.1 Every object $X$ of $\mathcal O$ is a quotient of a finite direct sum of such projective covers. Induct on the length of a composition series $0=X_0\subseteq X_1\subseteq\cdots\subseteq X_n=X$. For $n=0$ the zero object is a quotient of the empty sum. For $n\ge1$, assume $p:Q'\twoheadrightarrow X_{n-1}$ with $Q'$ a finite direct sum of projective covers, and let $L(\mu_n)=X_n/X_{n-1}$ with its projective cover $\pi_n:P(\mu_n)\twoheadrightarrow L(\mu_n)$ from step 1.1. Since $P(\mu_n)$ is projective and $X_n\twoheadrightarrow L(\mu_n)$ is an epimorphism, $\pi_n$ lifts to $\widetilde\pi:P(\mu_n)\to X_n$, and the sum morphism $Q'\oplus P(\mu_n)\to X_n$ is an epimorphism: an element $x\in X_n$ differs from an element of the image of $\widetilde\pi$ by an element of $X_{n-1}$, which lies in the image of $p$. Hence $X_n$ is a quotient of the finite direct sum $Q'\oplus P(\mu_n)$ of projective covers. [F1, F2, F3, step 1.1]

3.1 By step 1.1 each simple $L(\mu)$ has an indecomposable projective cover lying in its linkage class, unique up to isomorphism, and by step 2.1 every object of $\mathcal O$ is a quotient of a finite direct sum of these projective covers; this is exactly the assertion that $\mathcal O$ has enough projectives. [step 1.1, step 2.1, given] ∎
