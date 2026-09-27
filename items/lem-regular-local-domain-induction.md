---
id: "lem-regular-local-domain-induction"
kind: "lemma"
title: "regular local domain induction"
deps: ["def-axiom-of-choice", "thm-associated-graded-ring-of-a-regular-local-ring", "thm-krull-intersection-theorem"]
proof_strategy: "Explicit algebraic derivation"
sources:
  references:
    - title: "10.106.2"
      url: "https://stacks.math.columbia.edu/tag/00NN"
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-01-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Every regular local ring is an integral domain.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[thm-associated-graded-ring-of-a-regular-local-ring]]: If $(R,\mathfrak m,k)$ is regular local of dimension $d$, any cotangent basis induces a graded isomorphism $k[X_1,\ldots,X_d]\cong\operatorname{gr}_{\mathfrak m}R$. Conversely, if the associated graded ring of a nonzero Noetherian local ring is isomorphic as a graded $k$-algebra to $k[X_1,\ldots,X_d]$ with standard grading, then $R$ is regular of dimension $d$.

[F2] [[thm-krull-intersection-theorem]]: The first clause below is choice-free; the second uses the published Jacobson-radical unit criterion and therefore inherits its Axiom-of-Choice boundary. Let $R$ be a Noetherian commutative ring, let $I\subset R$ be an ideal, and let $M$ be a finite $R$-module. Put $$ K:=\bigcap_{n\ge0} I^nM. $$ Then: 1. $K$ is exactly the set of elements $m\in M$ for which $(1-a)m=0$ for some $a\in I$; 2. if $I\subseteq J(R)$, then $K=0$.

## Proof

1.1 Under the assumed AC, the Jacobson-radical clause of Krull intersection [F2] makes the maximal-adic filtration separated. For each nonzero $a\in R$ there is therefore a largest integer $r\ge0$ with $a\in\mathfrak m^r$; its class $\operatorname{in}(a)$ in degree $r$ is nonzero. [F2, given]

2.1 For nonzero $a,b$ of orders $r,s$, their initial classes have nonzero product in the graded polynomial ring, which is a domain: multiplying leading monomials proves this over the field $k$. This product is the class of $ab$ in $\mathfrak m^{r+s}/\mathfrak m^{r+s+1}$, so $ab\ne0$. The same argument includes $r=0$, $s=0$, and dimension zero. [F1, step 1.1, algebra] ∎
