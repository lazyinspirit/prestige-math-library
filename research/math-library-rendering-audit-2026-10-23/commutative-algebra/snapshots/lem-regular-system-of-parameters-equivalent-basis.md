---
id: "lem-regular-system-of-parameters-equivalent-basis"
kind: "lemma"
title: "regular system of parameters equivalent basis"
deps: ["def-axiom-of-choice", "def-regular-system-of-parameters", "lem-embedding-dimension-is-minimal-maximal-ideal-generator-number", "cor-nakayama-generators-modulo-an-ideal"]
proof_strategy: "Explicit algebraic derivation"
sources:
  references:
    - title: "12.3–12.5, p.115"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
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

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(R,\mathfrak m,k)$ be a nonzero Noetherian local ring of dimension $d$, and let $\mathbf x=(x_1,\ldots,x_d)\in\mathfrak m^d$. Then $\mathbf x$ is a regular system of parameters if and only if its classes form a $k$-basis of $\mathfrak m/\mathfrak m^2$. In particular every lift of a cotangent basis in a regular local ring generates $\mathfrak m$ and is a system of parameters.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[def-regular-system-of-parameters]]: In a regular local ring $(R,\mathfrak m,k)$ of dimension $d$, an ordered minimal generating tuple $(x_1,\ldots,x_d)$ of $\mathfrak m$ is a **regular system of parameters**. The tuple is empty when $d=0$. This definition concerns generators of the maximal ideal; the regular-sequence property is a theorem, not part of the definition.

[F2] [[lem-embedding-dimension-is-minimal-maximal-ideal-generator-number]]: Under the Choice assumption used in its proof, for a nonzero Noetherian local ring $(R,\mathfrak m,k)$, $\operatorname{edim}R$ is the least number of generators of $\mathfrak m$.

[F3] [[cor-nakayama-generators-modulo-an-ideal]]: Assume the Axiom of Choice. Let $R$ be a commutative ring, let $I \trianglelefteq R$ satisfy $I \subseteq J(R)$, and let $M$ be a finitely generated left $R$-module. If elements $x_1,\dots,x_r \in M$ generate $M/IM$, then $x_1,\dots,x_r$ generate $M$.

## Proof

1.1 If $\mathbf x$ is a regular system, it minimally generates $\mathfrak m$ in a regular ring, whose cotangent dimension is $d$. Its $d$ spanning classes therefore form a basis. [F1, F2]

2.1 Conversely, a basis of length $d$ makes the embedding dimension $d$, so $R$ is regular. Nakayama lifts the spanning classes to generators of $\mathfrak m$, and no generator can be removed since its class is independent. Their ideal has radical $\mathfrak m$ and length $d$, which is exactly the parameter condition. For $d=0$, Nakayama gives $\mathfrak m=0$ and the empty tuple has the same property. [F3, F1, step 1.1] ∎
