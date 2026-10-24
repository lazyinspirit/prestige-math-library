---
id: "ex-embedding-dimension-versus-dimension-node"
kind: "example"
title: "embedding dimension versus dimension node"
deps: ["def-embedding-dimension-and-regular-local-ring"]
sources:
  references:
    - title: "Lecture 25, Propositions 25.6–25.8, pp.67–68"
      url: "https://www.math.columbia.edu/~wenqili/commalg_notes.pdf"
provenance:
  statement: ai-generated
  proof: ai-altered
status: published
origin: "pipeline"
generation:
  role: example
proof_strategy: "Explicit algebraic derivation"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-02-height-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Example

For every field $k$, the split node $R=(k[x,y]/(xy))_{(x,y)}$ is reduced and has dimension one and embedding dimension two. It is neither a domain nor regular.

## Facts & Assumptions

**Given:** The field and split-node ring in the example. The dimension and cotangent-space calculations below are direct.

[F2] [[def-embedding-dimension-and-regular-local-ring]]: For a nonzero commutative Noetherian local ring $(R,\mathfrak m,k)$, define $\operatorname{edim}R=\dim_k(\mathfrak m/\mathfrak m^2)$. The ring is **regular local** when $\operatorname{edim}R=\dim R$. The cotangent space is intrinsic, and is finite-dimensional because $\mathfrak m$ is finitely generated.

## Verification

1.1 In $k[x,y]$, $(xy)=(x)\cap(y)$, as divisibility of monomials shows. It is therefore radical. Every prime of the quotient contains $x$ or $y$; in the origin localization either branch is the local line $k[t]_{(t)}$, with prime chain of length one. Thus $R$ is reduced of dimension one. Both $x$ and $y$ survive and their product is zero, so it is not a domain. [given, algebra]

2.1 The relation $xy$ is quadratic, so $\mathfrak m/\mathfrak m^2$ has independent basis $\bar x,\bar y$. Its dimension two strictly exceeds the dimension one just computed, and the definition makes $R$ nonregular. Localization does not change these cotangent classes since denominators have nonzero constant term. This works also in characteristic two. [F2, step 1.1, algebra] ∎
