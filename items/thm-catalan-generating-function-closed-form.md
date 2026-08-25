---
id: thm-catalan-generating-function-closed-form
kind: theorem
title: "$2x\\,C(x)=1-(1-4x)^{1/2}$, where $(1-4x)^{1/2}$ is the unique square root with constant coefficient $1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-catalan-generating-function-satisfies-a-quadratic-equation, cor-unique-formal-root-with-constant-one, def-catalan-generating-function, prop-coefficient-extraction-linearity-and-extensionality, def-formal-exponential-logarithm-and-powers, thm-formal-power-series-ring-and-polynomial-embedding]
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
    - title: "A. Postnikov (notes by A. Lin), MIT 18.212 Algebraic Combinatorics, Spring 2019, Proposition 7"
      url: "https://web.stanford.edu/~lindrew/18.212.pdf"
    - title: "D. Guichard, An Introduction to Combinatorics and Graph Theory, §3.5"
      url: "https://www.whitman.edu/mathematics/cgt_online/cgt.pdf"
pipeline_run: null
---

## Statement

In $\mathbb{Q}\llbracket x\rrbracket$, with $C$ the Catalan generating function
([[def-catalan-generating-function]]) and $(1-4x)^{1/2}$ the formal binomial power
of [[def-formal-exponential-logarithm-and-powers]],

$$1-2x\,C=(1-4x)^{1/2}, \qquad\text{equivalently}\qquad 2x\,C=1-(1-4x)^{1/2}.$$

The series $(1-4x)^{1/2}$ is the **unique** element of
$1+x\mathbb{Q}\llbracket x\rrbracket$ whose square is $1-4x$
([[cor-unique-formal-root-with-constant-one]]), and the content of the theorem is
that $1-2xC$ **is** that element. No square root is chosen, no branch is selected
and no substitution for $x$ is made.

## Facts & Assumptions

**Given:** the Catalan generating function $C\in\mathbb{Q}\llbracket x\rrbracket$.

[F1] $C=1+x\,C^{2}$ in $\mathbb{Q}\llbracket x\rrbracket$ ([[thm-catalan-generating-function-satisfies-a-quadratic-equation]]).

[F2] For every $n\ge0$, $[x^{n}]C=C_n$, and $\mathbb{Q}\llbracket x\rrbracket$ is a commutative $\mathbb{Q}$-algebra ([[def-catalan-generating-function]]).

[L1] For a commutative $\mathbb{Q}$-algebra $R$, $u\in xR\llbracket x\rrbracket$ and $k\ge1$, there is a unique $v\in1+xR\llbracket x\rrbracket$ with $v^{k}=1+u$, namely $v=(1+u)^{1/k}$ ([[cor-unique-formal-root-with-constant-one]]).

[L2] $[x^{n}](f+g)=[x^{n}]f+[x^{n}]g$, $[x^{n}](rf)=r[x^{n}]f$, and $[x^{n}](x^{k}f)=[x^{n-k}]f$ for $k\le n$ and $0$ for $k>n$ ([[prop-coefficient-extraction-linearity-and-extensionality]]).

[L3] The coefficientwise sum and Cauchy product make $\mathbb{Q}\llbracket x\rrbracket$ a commutative ring ([[thm-formal-power-series-ring-and-polynomial-embedding]]).

[L4] For $u\in xR\llbracket x\rrbracket$ and $c\in R$ the formal binomial power is $(1+u)^{c}:=\exp(c\log(1+u))$ ([[def-formal-exponential-logarithm-and-powers]]).

## Proof

**Proof technique:** direct.

1.1 Expanding in the commutative ring $\mathbb{Q}\llbracket x\rrbracket$ gives $(1-2xC)^{2}=1-4xC+4x^{2}C^{2}=1-4x\bigl(C-xC^{2}\bigr)$, and [F1] says $C-xC^{2}=1$, so $(1-2xC)^{2}=1-4x$. [F1, L3]

1.2 The series $1-2xC$ lies in $1+x\mathbb{Q}\llbracket x\rrbracket$: its coefficient at the index $0$ is $1-0=1$ by [L2], since $[x^{0}](xC)=0$. [F2, L2]

2.1 The series $-4x$ lies in $x\mathbb{Q}\llbracket x\rrbracket$, so [L1] with $k=2$ supplies exactly one element of $1+x\mathbb{Q}\llbracket x\rrbracket$ whose square is $1-4x$, namely $(1-4x)^{1/2}$ as defined in [L4]. By steps 1.1 and 1.2 the series $1-2xC$ is such an element, so it is that one: $1-2xC=(1-4x)^{1/2}$, and adding $2xC-(1-4x)^{1/2}$ to both sides gives $2xC=1-(1-4x)^{1/2}$. [L1, L3, L4, step 1.1, step 1.2] ∎

## Remarks

- **The root is identified, not chosen.** Both primary sources for this page solve the quadratic by the quadratic formula and then pick the branch by letting $x$ tend to $0$. That is an analytic argument about a function, and there is no function here: $x$ is an indeterminate and no value is substituted for it. The uniqueness clause of [[cor-unique-formal-root-with-constant-one]] replaces the branch choice with an identification, and it is the only step of this page where the sources use an argument the library may not.

- **Why the identity is stated with the factor $2x$ left in place.** The series $2x$ is not a unit of $\mathbb{Q}\llbracket x\rrbracket$, since its coefficient at $0$ is $0$, so $C$ cannot be obtained by dividing. Every coefficient statement below is derived from the cleared identity by extracting a coefficient, which is legitimate at every index.
