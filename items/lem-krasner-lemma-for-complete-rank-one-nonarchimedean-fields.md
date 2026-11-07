---
id: lem-krasner-lemma-for-complete-rank-one-nonarchimedean-fields
kind: lemma
title: "Krasner lemma for complete rank-one nonarchimedean fields"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-complete-nonarchimedean-field
  - def-countable-choice
  - def-separable-closure-in-an-algebraic-extension
  - thm-unique-extension-of-a-nonarchimedean-absolute-value
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Peter Scholze, Perfectoid Spaces, proof of Theorem 3.7"
      url: "https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf"
    - title: "Matthew Morrow, Adic and perfectoid spaces, §4.3"
      url: "https://www.imo.universite-paris-saclay.fr/~matthew.morrow/Perf%20spaces%20IMJ-PRG%20final.pdf"
verification: {}
---

## Statement

Assume the Axiom of Countable Choice. Let $K$ be a complete nonarchimedean
field, let $\overline K$ be an algebraic closure equipped with an absolute
value extending that of $K$, let $K_s$ be the separable closure of $K$ in
$\overline K$, and let $\alpha\in K_s$ and $\beta\in\overline K$. Let
$m_{\alpha,K}\in K[T]$ be the monic irreducible polynomial of least positive
degree with $m_{\alpha,K}(\alpha)=0$, and let $C_K(\alpha)$ be its finite set
of roots in $\overline K$ other than $\alpha$. If
$|\beta-\alpha|<|\alpha-\alpha'|$ for every $\alpha'\in C_K(\alpha)$, then
$K(\alpha)\subseteq K(\beta)$. When $C_K(\alpha)=\varnothing$, the
hypothesis is vacuous and $\alpha\in K$.

## Statement references

[Peter Scholze, *Perfectoid Spaces*, proof of Theorem 3.7](https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf)

[Matthew Morrow, *Adic and perfectoid spaces*, §4.3](https://www.imo.universite-paris-saclay.fr/~matthew.morrow/Perf%20spaces%20IMJ-PRG%20final.pdf)

## Facts & Assumptions

**Given:** Countable Choice, the complete field $K$, an equipped algebraic
closure $\overline K$, and $\alpha,\beta$ as above.

[A1] Countable Choice selects one element from each member of a countable
family of nonempty sets. ([[def-countable-choice]])

[F1] [[def-complete-nonarchimedean-field]]: $K$ is complete for a
real-valued multiplicative absolute value satisfying the ultrametric
inequality.

[F2] [[def-separable-closure-in-an-algebraic-extension]]: The separable
closure of $K$ in an algebraic extension consists exactly of elements
separable over $K$.

[F3] [[thm-unique-extension-of-a-nonarchimedean-absolute-value]]: Every
finite extension of a complete nonarchimedean field has a unique extending
absolute value, and this extension makes the finite field extension
complete. Its published proof uses finite-dimensional norm equivalence; the
sequence selection in that supplier's proof is covered here by [A1].

## Proof

**Given:** Countable Choice, the complete field $K$, the valued algebraic
closure $\overline K$, and $\alpha,\beta$ as above.

1.1 Put $M=K(\alpha,\beta)$, a finite extension of $K$. For every $K$-embedding $\sigma:M\to\overline K$, the function $x\mapsto|\sigma(x)|$ is an absolute value on $M$ extending the one on $K$. By uniqueness in [F3] and [A1], it is the restriction of the chosen absolute value on $\overline K$; hence $|\sigma(x)|=|x|$ for every $x\in M$. [A1, F1, F3, given, construct]

2.1 Suppose that a $K(\beta)$-embedding $\sigma:M\to\overline K$ moves $\alpha$. Since it fixes $\beta$, step 1.1 gives $|\sigma(\alpha)-\beta|=|\sigma(\alpha-\beta)|=|\alpha-\beta|$. The ultrametric inequality then yields $|\sigma(\alpha)-\alpha|\le\max\{|\sigma(\alpha)-\beta|,|\beta-\alpha|\} =|\beta-\alpha|$. But $\sigma(\alpha)$ is a conjugate of $\alpha$ over $K$ distinct from $\alpha$, contradicting the strict hypothesis. Thus every $K(\beta)$-embedding of $M$ fixes $\alpha$. [step 1.1, given, algebra]

3.1 If $\alpha\notin K(\beta)$, its minimal polynomial over $K(\beta)$ has degree greater than one. It is separable because the minimal polynomial of $\alpha$ over $K$ is separable, so it has a root $\alpha'\ne\alpha$ in $\overline K$. Sending $\alpha$ to $\alpha'$ defines a $K(\beta)$-embedding of $M$ that moves $\alpha$, contrary to step 2.1. Therefore $\alpha\in K(\beta)$ and $K(\alpha)\subseteq K(\beta)$. If $C_K(\alpha)=\varnothing$, then $\alpha\in K$ and the conclusion follows directly. [F2, step 2.1, given, algebra] ∎
