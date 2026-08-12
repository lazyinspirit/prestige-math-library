---
id: cor-unique-formal-root-with-constant-one
kind: corollary
title: "Every $1+u$ with $u\\in xR\\llbracket x\\rrbracket$ has a unique $k$th root with constant coefficient $1$ in a commutative $\\mathbb Q$-algebra"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-formal-exponential-logarithm-identities, thm-formal-power-series-unit-criterion]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Benjamin Sambale, An Invitation to Formal Power Series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
pipeline_run: null
---

## Statement

Let $R$ be a commutative $\mathbb Q$-algebra, $u\in xR\llbracket x\rrbracket$, and $k\ge1$. There is a unique $v\in1+xR\llbracket x\rrbracket$ such that

$$v^k=1+u,$$

namely $v=(1+u)^{1/k}$. When $u=0$, this unique root is $1$.

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] In a commutative $\mathbb Q$-algebra, formal $\exp$ and $\log$ are inverse group homomorphisms on $xR\llbracket x\rrbracket$ and $1+xR\llbracket x\rrbracket$, and for $u\in xR\llbracket x\rrbracket$ and $c,d\in R$ the exponent-addition and exponent-multiplication laws hold ([[thm-formal-exponential-logarithm-identities]]).

## Proof

**Proof technique:** apply the formal logarithm.

1.1 The power law gives $((1+u)^{1/k})^k=(1+u)^1=1+u$, so the stated series is a root with constant coefficient $1$. [given, F1]

1.2 If $v\in1+xR\llbracket x\rrbracket$ and $v^k=1+u$, the logarithm addition law gives $k\log v=\log(1+u)$. Since $k$ is invertible in a $\mathbb Q$-algebra, $\log v=(1/k)\log(1+u)$; applying $\exp$ gives $v=(1+u)^{1/k}$. This proves uniqueness. [given, F1]

2.1 For $u=0$, the construction is $\exp(0)=1$, and step 1.2 excludes any other constant-one root. [step 1.1, step 1.2, given, F1] ∎
