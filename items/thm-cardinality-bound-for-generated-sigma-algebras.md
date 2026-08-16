---
id: thm-cardinality-bound-for-generated-sigma-algebras
kind: theorem
title: "Assuming the Axiom of Choice, an infinite family E generates at most |E|^aleph-zero sets"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-transfinite-description-of-generated-sigma-algebras, def-axiom-of-choice, def-cardinal-arithmetic, lem-cardinal-arithmetic-basic-laws, thm-cardinal-power-set-and-cantor, thm-hessenberg, cor-cardinal-absorption, thm-omega-one-is-the-least-uncountable-ordinal]
aliases: []
landmark: true
short: "$|\\sigma(\\mathcal E)|\\le|\\mathcal E|^{\\aleph_0}$"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory, Exercise 1.4.16"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Let $\mathcal E\subseteq\mathcal P(X)$ be infinite
and put $\kappa:=|\mathcal E|$. Then

$$|\sigma_X(\mathcal E)|\le\kappa^{\aleph_0}.$$

## Facts & Assumptions

**Given:** The Axiom of Choice and an infinite family $\mathcal E\subseteq\mathcal P(X)$ of cardinality $\kappa$.

[L1] Generated sigma-algebras are exhausted by the complement and countable-union stages below $\omega_1$ ([[thm-transfinite-description-of-generated-sigma-algebras]]).

[L2] Cardinal exponentiation is available under the Axiom of Choice; it is monotone in the base, monotone in the exponent for nonzero base, and satisfies $(\kappa^\lambda)^\mu=\kappa^{\lambda\otimes\mu}$ ([[def-cardinal-arithmetic]], [[lem-cardinal-arithmetic-basic-laws]]).

[L3] For every infinite cardinal $\nu$, $\nu\otimes\nu=\nu$ ([[thm-hessenberg]]), and smaller nonzero cardinals are absorbed by addition and multiplication with $\nu$ ([[cor-cardinal-absorption]]).

[L4] Under the Axiom of Choice, $2^{\aleph_0}$ is the cardinality of $\mathcal P(\mathbb N)$ and is strictly larger than $\aleph_0$ ([[thm-cardinal-power-set-and-cantor]]).

[L5] The Axiom of Choice provides choice functions for arbitrary families of nonempty sets ([[def-axiom-of-choice]]).

[L6] The ordinal $\omega_1$ is a cardinal and is the least uncountable ordinal ([[thm-omega-one-is-the-least-uncountable-ordinal]]).

## Proof

**Proof technique:** direct.

1.1 Put $\mu:=\kappa^{\aleph_0}$. Since $2\le\kappa$, [L2] and [L4] give $\aleph_0<2^{\aleph_0}\le\mu$ under [L5]; the minimality in [L6] therefore gives $\omega_1\le2^{\aleph_0}\le\mu$. Also $\mu$ is infinite. [L2, L4, L5, L6]

1.2 Transfinite induction on the stages in [L1] gives $|\mathcal E_\alpha|\le\mu$. At the base, sending each member of $\mathcal E$ to its constant sequence injects $\kappa$ into $\mu$. At a successor, complements contribute at most $\mu$ sets and sequences contribute at most $\mu^{\aleph_0}=(\kappa^{\aleph_0})^{\aleph_0}=\kappa^{\aleph_0\otimes\aleph_0}=\mu$ by [L2] and [L3]. At a limit below $\omega_1$, the predecessor set is countable by [L6], and [L5] chooses stagewise injections into $\mu$; hence the union has size at most $\aleph_0\otimes\mu=\mu$ by [L3]. [L1, L2, L3, L5, L6, construct]

2.1 Using [L5] to choose one injection of each stage into $\mu$, the union of the $\omega_1$ stages has cardinal at most $\omega_1\otimes\mu=\mu$ by step 1.1 and [L3]. By [L1] this union is $\sigma_X(\mathcal E)$, proving the bound. [step 1.1, step 1.2, L1, L3, L5] ∎
