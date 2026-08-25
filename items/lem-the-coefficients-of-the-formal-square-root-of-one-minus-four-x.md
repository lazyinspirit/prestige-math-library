---
id: lem-the-coefficients-of-the-formal-square-root-of-one-minus-four-x
kind: lemma
title: "$[x^k](1-4x)^{1/2}=-\\frac{2}{k}\\binom{2k-2}{k-1}$ for $k\\ge1$, and $1$ for $k=0$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-formal-exponential-logarithm-identities, def-formal-exponential-logarithm-and-powers, cor-unique-formal-root-with-constant-one, def-binomial-coefficient, thm-binomial-closed-formula, prop-coefficient-extraction-linearity-and-extensionality, def-catalan-generating-function, def-factorial-and-falling-factorial, lem-nat-mult-cancellative, thm-induction-principle, thm-rat-field]
justified_by: []
aliases: []
landmark: false
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

Work in $\mathbb{Q}\llbracket x\rrbracket$, a commutative $\mathbb{Q}$-algebra
([[def-catalan-generating-function]]), and let $(1-4x)^{1/2}$ denote the formal
binomial power $(1+u)^{c}$ of
[[def-formal-exponential-logarithm-and-powers]] with $u=-4x$ and $c=1/2$; by
[[cor-unique-formal-root-with-constant-one]] it is the unique series in
$1+x\mathbb{Q}\llbracket x\rrbracket$ whose square is $1-4x$. Then

$$[x^{0}](1-4x)^{1/2}=1,$$

and for every $k\ge1$, in $\mathbb{Q}$,

$$k\,[x^{k}](1-4x)^{1/2}=-2\binom{2k-2}{k-1}, \qquad\text{equivalently}\qquad [x^{k}](1-4x)^{1/2}=-\frac{2}{k}\binom{2k-2}{k-1}.$$

The displayed quotient formula is stated for $k\ge1$ only, and is not a statement
about $k=0$: at $k=0$ the value is $1$.

## Facts & Assumptions

**Given:** the series $(1-4x)^{1/2}$ above; write $A_k:=[x^{k}](1-4x)^{1/2}$.

[F1] $\mathbb{Q}\llbracket x\rrbracket$ is a commutative $\mathbb{Q}$-algebra, and a natural number written where a rational is expected denotes its image under an injective embedding preserving addition and multiplication ([[def-catalan-generating-function]]).

[L1] In a commutative $\mathbb{Q}$-algebra, for $u\in x R\llbracket x\rrbracket$ and $c\in R$, $(1+u)^{c}=\sum_{n\ge0}\frac{c(c-1)\cdots(c-n+1)}{n!}u^{n}$, where the numerator is the empty product $1$ at $n=0$ ([[thm-formal-exponential-logarithm-identities]]).

[L2] For $u\in xR\llbracket x\rrbracket$ and $c\in R$, $(1+u)^{c}:=\exp(c\log(1+u))$, and the displayed families are summable because $\operatorname{ord}_x(u^{n})\ge n$ ([[def-formal-exponential-logarithm-and-powers]]).

[L3] For a commutative $\mathbb{Q}$-algebra $R$, $u\in xR\llbracket x\rrbracket$ and $k'\ge1$, there is a unique $v\in1+xR\llbracket x\rrbracket$ with $v^{k'}=1+u$, namely $v=(1+u)^{1/k'}$ ([[cor-unique-formal-root-with-constant-one]]).

[L4] $[x^n](f+g)=[x^n]f+[x^n]g$, $[x^n](rf)=r[x^n]f$, and $[x^{n}](x^{k}f)=[x^{n-k}]f$ for $k\le n$ and $0$ for $k>n$ ([[prop-coefficient-extraction-linearity-and-extensionality]]).

[L5] For $m,j\in\mathbb{N}$ with $j\le m$: $\binom{m}{j}\cdot j!\cdot (m-j)! = m!$ ([[thm-binomial-closed-formula]]).

[L6] $\binom{m}{0}=1$ for every $m$, and $\binom{m}{j}$ is a natural number ([[def-binomial-coefficient]]).

[L7] $m! \ne 0$ for every $m\in\mathbb{N}$, and $\sigma(m)! = m!\cdot\sigma(m)$ ([[def-factorial-and-falling-factorial]]).

[L8] For all $x',y',c'\in\mathbb{N}$ with $c'\ne 0$: if $x'\cdot c'=y'\cdot c'$ then $x'=y'$ ([[lem-nat-mult-cancellative]]).

[L9] $\mathbb{Q}$ is a field, so every nonzero rational is invertible ([[thm-rat-field]]).

[L10] A property that holds at $0$ and passes from every natural number to its successor holds at every natural number: if a property $P$ satisfies $P(0)$ and ($P(n) \Rightarrow P(\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \in \mathbb{N}$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 With $u=-4x$ we have $u^{n}=(-4)^{n}x^{n}$, so by [L1] and [L4] the coefficient of the binomial series at the index $k$ receives a contribution only from the term $n=k$, giving $A_k=\frac{(1/2)(1/2-1)\cdots(1/2-k+1)}{k!}(-4)^{k}$ for every $k\in\mathbb{N}$; at $k=0$ the numerator is the empty product and $A_0=1$. Consequently $(k+1)A_{k+1}=(1/2-k)(-4)\,A_k=2(2k-1)A_k$ for every $k\in\mathbb{N}$. [F1, L1, L2, L4]

1.2 For every $k\ge1$ the identity $k\binom{2k}{k}=2(2k-1)\binom{2k-2}{k-1}$ holds in $\mathbb{N}$. Both $k\le 2k$ and $k-1\le 2k-2$, so [L5] gives $\binom{2k}{k}k!\,k!=(2k)!$ and $\binom{2k-2}{k-1}(k-1)!\,(k-1)!=(2k-2)!$. Multiplying the first by $k$ and using $(2k)!=(2k)(2k-1)(2k-2)!$ from [L7] gives $k\binom{2k}{k}k!\,k!=2k^{2}(2k-1)(2k-2)!$; multiplying the second by $2(2k-1)k^{2}$ and using $k!=k\,(k-1)!$ gives $2(2k-1)\binom{2k-2}{k-1}k!\,k!=2(2k-1)k^{2}(2k-2)!$. The two right-hand sides agree, so cancelling the nonzero factor $k!\,k!$ by [L7] and [L8] gives the identity. [L5, L7, L8]

2.1 For every $k\ge1$ one has $k\,A_k=-2\binom{2k-2}{k-1}$, by induction on $k$. At $k=1$ the formula of step 1.1 gives $A_1=\frac{1/2}{1}(-4)=-2$, and $-2\binom{0}{0}=-2$ by [L6]. Assume it at some $k\ge1$. Multiplying the recursion of step 1.1 by $k$ gives $k(k+1)A_{k+1}=2(2k-1)\,k\,A_k=-4(2k-1)\binom{2k-2}{k-1}$, which by step 1.2 is $-2k\binom{2k}{k}$; since $k$ is a nonzero rational, [L9] allows cancelling it and yields $(k+1)A_{k+1}=-2\binom{2k}{k}$, which is the formula at $k+1$. [L6, L9, L10, step 1.1, step 1.2]

3.1 Dividing by the nonzero rational $k$ turns step 2.1 into the quotient form, and step 1.1 gives the value at $k=0$. As a check, the first coefficients are $A_0=1$, $A_1=-2$, $A_2=-\tfrac{2}{2}\binom{2}{1}=-2$, $A_3=-\tfrac{2}{3}\binom{4}{2}=-4$, $A_4=-\tfrac{2}{4}\binom{6}{3}=-10$ and $A_5=-\tfrac{2}{5}\binom{8}{4}=-28$. [L3, L9, step 1.1, step 2.1] ∎

## Remarks

- **The index $k=0$ is genuinely outside the formula.** The quotient
  $-\frac{2}{k}\binom{2k-2}{k-1}$ has no value at $k=0$, and the coefficient there
  is $1$, not $0$. Stating the formula with its range is not pedantry: the closed
  form of the Catalan generating function takes coefficients at positive indices
  only, and a statement covering $k=0$ would be false.

- **Where the uniqueness clause is used.** [L3] identifies the binomial power
  $(1-4x)^{1/2}$ as *the* series in $1+x\mathbb{Q}\llbracket x\rrbracket$ squaring
  to $1-4x$, which is what lets a series produced by an entirely different
  computation be recognised as this one. No branch is chosen and no limit is taken.
