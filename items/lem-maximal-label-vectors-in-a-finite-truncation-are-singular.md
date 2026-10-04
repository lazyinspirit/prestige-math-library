---
id: lem-maximal-label-vectors-in-a-finite-truncation-are-singular
kind: lemma
title: "Weight-lambda vectors are singular at a maximal label"
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-bgg-category-o
  - def-composition-series-and-composition-factors-of-an-object
  - def-partial-order-on-weights
  - def-truncated-category-o-at-a-finite-weight-ideal
  - def-weight-and-weight-space-of-a-lie-algebra-representation
  - prop-weights-of-a-verma-module-lie-below-lambda
  - thm-category-o-is-abelian-and-extension-closed
  - thm-simple-objects-of-category-o-are-highest-weight-modules
  - thm-verma-module-has-a-unique-simple-quotient
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups (18.757, Fall 2023), Proposition 16.4 and its proof"
      url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
      locator: "§16.3, Proposition 16.4 and proof (all weights of an object of a truncated block are not above the maximal label), printed pp. 86-87 (full text read at harvest)"
    - title: "Lin Chen, lecture notes (Spring 2024), Lecture 8, Section 4"
      url: https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf
      locator: "§4, Lemmas 4.10 and the proof of Theorem 4.3, printed pp. 7-8 (maximal-label argument; full text read at harvest)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). In the setting of
[[def-truncated-category-o-at-a-finite-weight-ideal]], let $\Gamma$ be a
finite downward-closed ideal of a linkage class $C$ and let $\lambda\in\Gamma$
be maximal in $\Gamma$.

1. If $\nu$ is a weight of an object $X$ of $\mathcal O_\Gamma$ with
   $\nu\ge\lambda$ in the root order of [[def-partial-order-on-weights]], then
   $\nu=\lambda$; equivalently, no object of $\mathcal O_\Gamma$ has a weight
   $\lambda+\beta$ with $\beta\in Q^+\setminus\{0\}$.
2. Consequently every vector of weight $\lambda$ in every $X\in\mathcal O_\Gamma$
   is annihilated by $\mathfrak n^+$: for $x\in\mathfrak n^+$ of weight
   $\alpha>0$ and $v\in X_\lambda$, the vector $xv$ has weight $\lambda+\alpha$
   and hence vanishes by (1). Thus $X^{\mathfrak n^+}_\lambda=X_\lambda$ for
   every $X\in\mathcal O_\Gamma$.
3. The weight functor $X\mapsto X_\lambda$ is exact on all
   $\mathfrak h$-semisimple $\mathfrak g$-modules, hence on
   $\mathcal O_\Gamma$.

Maximality of $\lambda$ is used only in (1). Incomparable maximal labels do not invalidate (1): its antecedent requires $\nu\ge\lambda$, and any composition label above such a $\nu$ is then comparable to $\lambda$ and forced equal to it. What can fail is the stronger assertion that every weight of every object lies below one specified maximal label; a simple with an incomparable highest weight refutes that stronger assertion.

## Facts & Assumptions

**Given:** The Axiom of Choice, a finite downward-closed ideal $\Gamma$ of a linkage class $C$, a maximal element $\lambda\in\Gamma$, and an object $X\in\mathcal O_\Gamma$.

[F1] $\mathcal O_\Gamma$ is the full subcategory of objects of $\mathcal O$ all of whose simple composition factors are $L(\mu)$ with $\mu\in\Gamma$; membership depends only on the isomorphism class, and $\Gamma$ is a finite lower set for the root order ([[def-truncated-category-o-at-a-finite-weight-ideal]]). Maximality of $\lambda$ means that $\mu\in\Gamma$ and $\lambda\le\mu$ imply $\mu=\lambda$.

[F2] The simple objects of $\mathcal O$ are exactly the $L(\mu)$; $L(\mu)$ is the unique simple quotient of the Verma module $M(\mu)$, and the weights of $M(\mu)$ are exactly $\mu-Q^+$ with finite weight spaces ([[thm-simple-objects-of-category-o-are-highest-weight-modules]], [[thm-verma-module-has-a-unique-simple-quotient]], [[prop-weights-of-a-verma-module-lie-below-lambda]]).

[F3] For a short exact sequence $0\to A\to X\to B\to0$ of $\mathfrak h$-semisimple modules, a functional is a weight of $X$ exactly when it is a weight of $A$ or of $B$: the corresponding sequence of weight spaces is exact at each weight ([[thm-category-o-is-abelian-and-extension-closed]]). Iterating along a composition series, every weight of $X$ is a weight of some composition factor ([[def-composition-series-and-composition-factors-of-an-object]]).

[F4] The root order is transitive and antisymmetric ([[def-partial-order-on-weights]]), and a root vector of weight $\alpha$ maps $X_\nu$ into $X_{\nu+\alpha}$ ([[def-weight-and-weight-space-of-a-lie-algebra-representation]], [[def-bgg-category-o]]).

## Proof

**Proof technique:** direct: reduce a top weight to a composition factor, force equality by maximality, and read off singularity and exactness.

1.1 Let $\nu$ be a weight of $X\in\mathcal O_\Gamma$ with $\nu\ge\lambda$. By [F3] the weight $\nu$ occurs in some composition factor $L(\mu)$ of $X$, and $\mu\in\Gamma$ because $X\in\mathcal O_\Gamma$. By [F2], $\nu$ is then a weight of $M(\mu)$, so $\nu\le\mu$. From $\lambda\le\nu\le\mu$ and transitivity in [F4] we get $\lambda\le\mu$ with $\mu\in\Gamma$, so maximality of $\lambda$ gives $\mu=\lambda$; then $\lambda\le\nu\le\lambda$ and antisymmetry give $\nu=\lambda$. Hence no object of $\mathcal O_\Gamma$ has a weight $\lambda+\beta$ with $\beta\in Q^+\setminus\{0\}$. [F1, F2, F3, F4, given]

1.2 The weight functor $X\mapsto X_\lambda$ is exact on $\mathfrak h$-semisimple $\mathfrak g$-modules: given a short exact sequence $0\to X'\xrightarrow{i}X\xrightarrow{p}X''\to0$, injectivity of $i_\lambda$ is immediate, and if $x''\in X''_\lambda$ lifts to $x\in X$, then writing $x=\sum_\nu x_\nu$ as a finite sum of weight vectors gives $x''=p(x)=\sum_\nu p(x_\nu)$ with $p(x_\nu)$ of weight $\nu$; by the directness of the weight decomposition of $X''$ all terms with $\nu\ne\lambda$ vanish and $x''=p(x_\lambda)$, so $p_\lambda$ is surjective. [F4, given, algebra]

2.1 By step 1.1 no object of $\mathcal O_\Gamma$ has a weight strictly above $\lambda$ in the sense of $\lambda+\beta$ with $\beta\in Q^+\setminus\{0\}$: if $v\in X_\lambda$ is nonzero and $x\in\mathfrak n^+$ has weight $\alpha>0$, then $xv\in X_{\lambda+\alpha}$ by [F4], and $\lambda+\alpha>\lambda$; if $xv\ne0$ it would be a weight vector of weight $\lambda+\alpha$, contradicting step 1.1. Hence $xv=0$ for every $x\in\mathfrak n^+$ and $X^{\mathfrak n^+}_\lambda=X_\lambda$. Together with the exactness of the weight functor in step 1.2 this proves all three assertions. [F4, step 1.1, step 1.2] ∎
