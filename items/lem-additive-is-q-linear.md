---
id: lem-additive-is-q-linear
kind: lemma
title: "An additive $f : \\mathbb{R} \\to \\mathbb{R}$ satisfies $f(0) = 0$, $f(-x) = -f(x)$ and $f(qx) = q\\,f(x)$ for every rational $q$ and every real $x$; in particular $f(q) = q\\,f(1)$ at every rational $q$"
status: published
origin: session
deps: [def-additive-function, thm-induction-principle, lem-rat-embeds-dense, lem-int-embeds-rat, lem-nat-embeds-int, def-canonical-natural, lem-integer-multiples-agree-with-canonical-natural, def-complete-ordered-field, def-integers, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: true
short: "additive implies $\\mathbb{Q}$-linear"
proof_strategy: induction
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Cauchy's functional equation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation"
pipeline_run: null
---

## Statement

Let $f : \mathbb{R} \to \mathbb{R}$ be additive ([[def-additive-function]]), and
identify $\mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq
\mathbb{R}$ along the canonical embeddings ([[lem-nat-embeds-int]],
[[lem-int-embeds-rat]], [[lem-rat-embeds-dense]]), writing $\iota(n)$ for the
canonical natural of $n$ in $\mathbb{R}$ ([[def-canonical-natural]]). Then, for
every real $x$:

1. $f(0) = 0$;
2. $f(-x) = -f(x)$;
3. $f(\iota(n)\,x) = \iota(n)\,f(x)$ for every $n \in \mathbb{N}$;
4. $f(m x) = m\,f(x)$ for every integer $m$;
5. $f(q x) = q\,f(x)$ for every rational $q$.

In particular, taking $x = 1$ in claim 5, $f(q) = q\,f(1)$ at every rational $q$:
**an additive function is determined on $\mathbb{Q}$ by its value at $1$.**

**What this does not say.** Claim 5 is $\mathbb{Q}$-homogeneity, not
$\mathbb{R}$-homogeneity: nothing here gives $f(\lambda x) = \lambda f(x)$ for
irrational $\lambda$, and that is exactly the gap that
[[fs-additive-implies-linear]] shows cannot be closed without a regularity
hypothesis.

## Facts & Assumptions

**Given:** An additive $f : \mathbb{R} \to \mathbb{R}$, so $f(x+y) = f(x) + f(y)$ for all reals $x, y$.

[A1] $f(x + y) = f(x) + f(y)$ for all reals $x, y$ ([[def-additive-function]]).

[L1] Induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L2] The canonical natural satisfies $\iota(0) = 0$ and $\iota(n+1) = \iota(n) + 1$, and it agrees with the additive multiple $n \cdot 1_{\mathbb{R}}$ ([[def-canonical-natural]], [[lem-integer-multiples-agree-with-canonical-natural]], [[lem-of-naturals-positive]]).

[L3] Every integer is $\iota(n)$ or $-\iota(n)$ for a natural $n$, and every rational is $m/\iota(n)$ with $m$ an integer and $n$ a natural $\ge 1$; the embeddings preserve sums and products, and $\iota(n) \ne 0$ for $n \ge 1$ ([[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]], [[def-integers]], [[lem-of-naturals-positive]]).

[L4] $\mathbb{R}$ is a field, so cancellation, distributivity and inverses of nonzero elements are available ([[def-complete-ordered-field]]).

## Proof

**Proof technique:** induction.

1.1 Claim 1: taking $x = y = 0$ in the functional equation gives $f(0) = f(0) + f(0)$, and adding $-f(0)$ to both sides gives $f(0) = 0$. [A1, L4]

1.2 Claim 3, inductive hypothesis: suppose $f(\iota(n)x) = \iota(n)f(x)$ for a given $n \in \mathbb{N}$ and every real $x$. [ih]

2.1 Claim 2: taking $y = -x$ gives $0 = f(0) = f(x) + f(-x)$, so $f(-x) = -f(x)$. [step 1.1, A1, L4]

2.2 Claim 3, base case $n = 0$: $\iota(0) = 0$, so $f(\iota(0)x) = f(0) = 0 = \iota(0)f(x)$. [step 1.1, L2, base]

2.3 Claim 3, inductive step: $\iota(n+1)x = \iota(n)x + x$, so $f(\iota(n+1)x) = f(\iota(n)x) + f(x) = \iota(n)f(x) + f(x) = (\iota(n)+1)f(x) = \iota(n+1)f(x)$. [step 1.2, A1, L2, L4]

3.1 Claim 3 holds for every $n \in \mathbb{N}$ and every real $x$, by induction on $n$ from steps 2.2 and 2.3. [step 2.2, step 2.3, L1]

4.1 Claim 4: an integer $m$ is $\iota(n)$ or $-\iota(n)$ for some natural $n$. In the first case claim 3 applies directly. In the second, $f(mx) = f(-(\iota(n)x)) = -f(\iota(n)x) = -\iota(n)f(x) = m f(x)$. [step 2.1, step 3.1, L3]

5.1 Claim 5: let $q$ be rational and write $q = m/\iota(n)$ with $m$ an integer and $n$ a natural $\ge 1$, so $\iota(n) \ne 0$. Applying claim 4 with the integer $\iota(n)$ to the real $qx$ gives $\iota(n) f(qx) = f(\iota(n) q x) = f(mx) = m f(x)$, and dividing by $\iota(n)$ gives $f(qx) = (m/\iota(n)) f(x) = q f(x)$. [step 4.1, L3, L4]

6.1 Taking $x = 1$ in claim 5 gives $f(q) = q f(1)$ for every rational $q$, and all five claims are proved. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, discharge-induction] ∎

## Remarks

- **The induction is on $\mathbb{N}$ and everything else is algebra.** Only
  claim 3 needs induction; claims 4 and 5 are obtained from it by the two field
  operations, and claims 1 and 2 are two substitutions into the equation. The
  base case is $n = 0$, where $\iota(0) = 0$ and the identity reads $f(0) = 0$;
  it is a genuine case and not a convention, since $\mathbb{N}$ contains $0$.

- **This is the whole of the algebraic theory.** Every regularity theorem about
  Cauchy's equation ([[thm-cauchy-functional-equation-regularity]]) works by
  combining claim 5 with density of $\mathbb{Q}$ in $\mathbb{R}$: the value of
  $f$ is pinned on a dense set, and a regularity hypothesis is what forbids the
  values off that set from being arbitrary.
