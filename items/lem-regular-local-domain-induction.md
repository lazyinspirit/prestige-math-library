---
id: "lem-regular-local-domain-induction"
kind: "lemma"
title: "regular local domain induction"
deps: ["thm-associated-graded-ring-of-a-regular-local-ring", "thm-krull-intersection-theorem"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "10.106.2"
      url: "https://stacks.math.columbia.edu/tag/00NN"
provenance:
  statement: literature-derived
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

Every regular local ring is an integral domain.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[thm-associated-graded-ring-of-a-regular-local-ring]]: If $(R,\mathfrak m,k)$ is regular local of dimension $d$, any cotangent basis induces a graded isomorphism $k[X_1,\ldots,X_d]\cong\operatorname{gr}_{\mathfrak m}R$. Conversely, if the associated graded ring of a nonzero Noetherian local ring is isomorphic as a graded $k$-algebra to $k[X_1,\ldots,X_d]$ with standard grading, then $R$ is regular of dimension $d$.

[F2] [[thm-krull-intersection-theorem]]: The first clause below is choice-free; the second uses the published Jacobson-radical unit criterion and therefore inherits its Axiom-of-Choice boundary. Let $R$ be a Noetherian commutative ring, let $I\subset R$ be an ideal, and let $M$ be a finite $R$-module. Put $$ K:=\bigcap_{n\ge0} I^nM. $$ Then: 1. $K$ is exactly the set of elements $m\in M$ for which $(1-a)m=0$ for some $a\in I$; 2. if $I\subseteq J(R)$, then $K=0$.

## Proof

1.1 The maximal-adic filtration is separated by Krull intersection. For each nonzero $a\in R$ there is therefore a largest integer $r\ge0$ with $a\in\mathfrak m^r$; its class $\operatorname{in}(a)$ in degree $r$ is nonzero. [F2]

2.1 For nonzero $a,b$ of orders $r,s$, their initial classes have nonzero product in the graded polynomial ring, which is a domain: multiplying leading monomials proves this over the field $k$. This product is the class of $ab$ in $\mathfrak m^{r+s}/\mathfrak m^{r+s+1}$, so $ab\ne0$. The same argument includes $r=0$, $s=0$, and dimension zero. [F1, step 1.1, algebra] ∎
