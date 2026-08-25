---
id: thm-catalan-numbers-from-the-generating-function
kind: theorem
title: "A third derivation of $(n+1)\\,C_n=\\binom{2n}{n}$, from the closed form of $C(x)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-catalan-generating-function-closed-form, lem-the-coefficients-of-the-formal-square-root-of-one-minus-four-x, cor-catalan-closed-formula, def-catalan-generating-function, prop-coefficient-extraction-linearity-and-extensionality, thm-rat-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "A. Postnikov (notes by A. Lin), MIT 18.212 Algebraic Combinatorics, Spring 2019"
      url: "https://web.stanford.edu/~lindrew/18.212.pdf"
    - title: "D. Guichard, An Introduction to Combinatorics and Graph Theory, §3.5"
      url: "https://www.whitman.edu/mathematics/cgt_online/cgt.pdf"
pipeline_run: null
---

## Statement

For every $n\in\mathbb{N}$, in $\mathbb{N}$,

$$(n+1)\,C_n=\binom{2n}{n}.$$

The identity is that of [[cor-catalan-closed-formula]]; what is new is the route.
It is obtained here by extracting a coefficient from the closed form
$2xC=1-(1-4x)^{1/2}$ ([[thm-catalan-generating-function-closed-form]]), with no
bijection, no reflection and no group action: only formal algebra in
$\mathbb{Q}\llbracket x\rrbracket$.

## Facts & Assumptions

**Given:** a natural number $n$, and the Catalan generating function $C$.

[F1] $2x\,C=1-(1-4x)^{1/2}$ in $\mathbb{Q}\llbracket x\rrbracket$ ([[thm-catalan-generating-function-closed-form]]).

[F2] $[x^{m}]C=C_m$ for every $m$, and a natural number written where a rational is expected denotes its image under an injective embedding preserving addition and multiplication ([[def-catalan-generating-function]]).

[L1] For every $k\ge1$, $k\,[x^{k}](1-4x)^{1/2}=-2\binom{2k-2}{k-1}$ in $\mathbb{Q}$ ([[lem-the-coefficients-of-the-formal-square-root-of-one-minus-four-x]]).

[L2] $[x^{m}](f+g)=[x^{m}]f+[x^{m}]g$, $[x^{m}](rf)=r[x^{m}]f$, and $[x^{m}](x^{k}f)=[x^{m-k}]f$ for $k\le m$ and $0$ for $k>m$ ([[prop-coefficient-extraction-linearity-and-extensionality]]).

[L3] $\mathbb{Q}$ is a field, so every nonzero rational is invertible ([[thm-rat-field]]).

[L4] $(n+1)\,C_n=\binom{2n}{n}$ in $\mathbb{N}$ ([[cor-catalan-closed-formula]]).

## Proof

**Proof technique:** direct.

1.1 Extract the coefficient at the index $n+1$ from the left-hand side of [F1]: by [L2], $[x^{n+1}](2xC)=2\,[x^{n}]C=2C_n$. [F2, L2]

1.2 Extract it from the right-hand side: by [L2] the constant series $1$ contributes $0$ at a positive index, so $[x^{n+1}]\bigl(1-(1-4x)^{1/2}\bigr)=-[x^{n+1}](1-4x)^{1/2}$, and multiplying by $n+1$ and using [L1] with $k=n+1$, which is at least $1$, gives $(n+1)\,[x^{n+1}]\bigl(1-(1-4x)^{1/2}\bigr)=2\binom{2n}{n}$. [L1, L2]

2.1 By [F1] the two coefficients of steps 1.1 and 1.2 are equal, so multiplying step 1.1 by $n+1$ gives $2(n+1)C_n=2\binom{2n}{n}$ in $\mathbb{Q}$; cancelling the nonzero rational $2$ by [L3] gives $(n+1)C_n=\binom{2n}{n}$ in $\mathbb{Q}$, and the embedding of [F2] being injective, the same identity holds in $\mathbb{N}$. It is the identity of [L4], now proved a third time. At $n=0$ it reads $C_0=1$. [F1, F2, L3, L4, step 1.1, step 1.2] ∎

## Remarks

- **What makes this a different route and not a rearrangement.** The two earlier
  derivations count a set twice: once directly and once after a reflection or after
  a group action. This one never counts anything. It turns the recurrence into an
  algebraic equation, solves that equation inside
  $\mathbb{Q}\llbracket x\rrbracket$, and reads a single coefficient off the
  solution. The only combinatorial input is the recurrence itself.

- **Where the three derivations meet.** All three end at the same identity in
  $\mathbb{N}$, and the cycle-lemma derivation ends at
  $(2n+1)C_n=\binom{2n+1}{n}$, whose consistency with this one is proved where it
  is stated. Agreement of the answers is not evidence that the routes are the
  same; each spends a different hypothesis, and the remark on routes at the end of
  this page records which.
