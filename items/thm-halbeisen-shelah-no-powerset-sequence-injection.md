---
id: thm-halbeisen-shelah-no-powerset-sequence-injection
kind: theorem
title: "No injection of a power set into finite sequences"
status: draft
origin: pipeline
deps: ["lem-canonical-sequence-coding-for-well-orders", "thm-hartogs", "thm-transfinite-recursion", "thm-cantor-powerset"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Caicedo, Some choiceless results (3), §6 theorem and complete diagonal proof"
      url: https://caicedoteaching.wordpress.com/2009/01/27/580-some-choiceless-results-3/
    - title: "Carneiro, Theorem 2 and canonical-construction discussion, pp.3–4"
      url: https://arxiv.org/pdf/1506.03533
---

## Statement

In ZF, if $\omega\preceq X$, there is no injection $\mathcal P(X)\to\operatorname{Seq}(X)$.

## Facts & Assumptions

[F1] [[lem-canonical-sequence-coding-for-well-orders]]: A supplied infinite well-order defines a bijection from its set to its finite sequences.

[F2] [[thm-transfinite-recursion]]: Specified class rules recurse on set ordinals.

[F3] [[thm-hartogs]]: The ordinal $h(X)$ cannot inject into $X$.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Suppose $G:\mathcal P(X)\to\operatorname{Seq}(X)$ is injective. For an infinite well-ordered subset $(Y,<)$ of $X$, let $H:Y\to\operatorname{Seq}(Y)$ be the uniformly defined bijection. Put $D=\{y\in Y:H(y)\in\operatorname{ran}(G)\text{ and }y\notin G^{-1}(H(y))\}$. The inverse here is used only at points in the range, where it is unique. [F1]

2.1 If $G(D)=H(y)$ for some $y\in Y$, the definition would give $y\in D$ iff $y\notin D$. Hence $G(D)\notin\operatorname{Seq}(Y)$. Its finite sequence has a first coordinate outside $Y$; let $a(Y,<)$ be that value. This rule is unique and definable from $G$ and the given order. The sequence cannot be empty, since the empty sequence belongs to $\operatorname{Seq}(Y)$. [step 1.1]

3.1 Seed a well-order with the image of a supplied injection $\omega\to X$. Recursively for $\xi<h(X)$ append $a(Y_\xi,<_{\xi})$, where $Y_\xi$ consists of the seed followed by previously appended elements in index order. At limits take the union of these extending well-orders. Each stage is an infinite well-ordered subset of $X$, so the rule always yields a fresh point. Thus the appended points inject $h(X)$ into $X$, a contradiction. [F2, F3, step 2.1] ∎
