---
id: def-truncated-category-o-at-a-finite-weight-ideal
kind: definition
title: Truncation at a finite downward-closed ideal of a linkage class
status: draft
origin: pipeline
deps:
- def-axiom-of-choice
- def-bgg-category-o
- def-composition-series-and-composition-factors-of-an-object
- def-integral-weyl-group-of-a-weight
- def-strong-linkage-order-on-weights
- prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system
- prop-the-weyl-group-is-finite-and-acts-faithfully-on-the-root-system
- thm-category-o-is-abelian-and-extension-closed
- thm-every-category-o-object-has-finite-length
- thm-jordan-holder-theorem-in-an-abelian-category
- thm-simple-objects-of-category-o-are-highest-weight-modules
- thm-central-character-summands-split-into-linkage-blocks
- prop-weights-of-a-verma-module-lie-below-lambda
- thm-verma-module-has-a-unique-simple-quotient
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: Pavel Etingof, Representations of Lie Groups (18.757, Fall 2023), Proposition 16.4
    url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
    locator: '§16.3, Proposition 16.4, printed p. 86: maximal-block-label projectivity; the support
      truncation to a finite lower ideal is the local extension defined here.'
  - title: Lin Chen, lecture notes (Spring 2024), Lecture 8, Sec. 4
    url: https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf
    locator: 'Lecture 8, §4, Theorem 4.3 and Lemma 4.10, printed pp. 6-8: projectives in central-character
      summands; the finite-lower-ideal truncation is defined locally.'
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Fix a finite-dimensional
complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$,
and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$ with the
conventions of [[def-bgg-category-o]]: positive roots $\Phi^+$, simple roots
$\alpha_i$, $Q^+=\sum_i\mathbb Z_{\ge0}\alpha_i$, the root order $\mu\le\lambda$
meaning $\lambda-\mu\in Q^+$, Weyl vector $\rho$, the dot action
$w\mathbin\cdot\lambda=w(\lambda+\rho)-\rho$, and category
$\mathcal O$.

For a weight $\lambda$ let $C=W_\lambda\mathbin\cdot\lambda$ be its
integral-reflection linkage class in the sense of
[[def-integral-weyl-group-of-a-weight]]; it is contained in the full dot orbit
$W\mathbin\cdot\lambda$, hence finite because $W$ is finite
([[prop-the-weyl-group-is-finite-and-acts-faithfully-on-the-root-system]],
with the identification of the abstract reflections with the $s_\alpha$ of
[[prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system]]).
A **finite downward-closed ideal** of $C$ is a finite subset $\Gamma\subseteq C$
such that
$$\nu\in\Gamma\ \text{and}\ \mu\in C\ \text{and}\ \mu\le\nu\ \Longrightarrow\ \mu\in\Gamma ,$$
where $\le$ is the root order of [[def-bgg-category-o]] and not the strong
linkage order $\uparrow$ of [[def-strong-linkage-order-on-weights]]. It is a
lower set in the restriction of the partial order $\le$ to $C$. The empty
ideal is allowed; every nonempty such ideal has minimal elements.

For such a $\Gamma$, the **truncation** $\mathcal O_\Gamma$ is the full
subcategory of $\mathcal O$ whose objects are those $X$ all of whose simple
composition factors are $L(\mu)$ with $\mu\in\Gamma$; composition factors are
those of [[def-composition-series-and-composition-factors-of-an-object]] and
the simple objects of $\mathcal O$ are the $L(\mu)$ of
[[thm-simple-objects-of-category-o-are-highest-weight-modules]]. Because every
object of $\mathcal O$ has finite length
([[thm-every-category-o-object-has-finite-length]]) and composition factors of
a composition series are independent of the chosen series
([[thm-jordan-holder-theorem-in-an-abelian-category]]), membership in
$\mathcal O_\Gamma$ depends only on the isomorphism class of the object and
not on a chosen composition series. Consequently $\mathcal O_\Gamma$ contains
the zero object and is closed in $\mathcal O$ under finite direct sums,
subobjects, quotients and extensions
([[thm-category-o-is-abelian-and-extension-closed]]); it is the truncation of
the finite label poset of one linkage class.

The Verma-placement claim below also has a direct justification. The highest weight line of $M(\mu)$ is one-dimensional and generates the whole module; hence it cannot be distributed among two nonzero direct summands. The linkage-block decomposition of [[thm-central-character-summands-split-into-linkage-blocks]] therefore places this Verma in the block of its unique simple quotient $L(\mu)$ ([[thm-verma-module-has-a-unique-simple-quotient]]), so all its composition labels lie in $C$. A label $\eta$ of a composition factor is a weight of $M(\mu)$: in a short exact sequence of $\mathfrak h$-semisimple modules, a weight vector in the quotient lifts in that same weight by extracting that component of any finite weight decomposition of a lift. Iterating through a composition series and using [[prop-weights-of-a-verma-module-lie-below-lambda]] gives $\eta\le\mu$. Thus $\mu\in\Gamma$ and lower closure within $C$ force every such $\eta\in\Gamma$, proving $M(\mu)\in\mathcal O_\Gamma$ without a bound by one greatest label.

Two boundaries are part of the definition. First, $\mathcal O_\Gamma$ is a
condition on the highest-weight labels of simple composition factors, not a
bound on all weights of a Verma module: a Verma module $M(\mu)$ with
$\mu\in\Gamma$ lies in $\mathcal O_\Gamma$ although its weights run over the
whole cone $\mu-Q^+$. Second, $\Gamma$ is a finite ideal inside a single
linkage class $C$, not the infinite lower ideal generated by $\lambda$ in the
whole weight lattice; in particular a discrete series truncation is a
different construction.
