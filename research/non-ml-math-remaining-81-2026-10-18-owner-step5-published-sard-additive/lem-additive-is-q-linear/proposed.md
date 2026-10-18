---
id: lem-additive-is-q-linear
kind: lemma
title: "An additive $f : \\mathbb{R} \\to \\mathbb{R}$ satisfies $f(0) = 0$, $f(-x) = -f(x)$ and $f(qx) = q\\,f(x)$ for every rational $q$ and every real $x$; in particular $f(q) = q\\,f(1)$ at every rational $q$"
status: published
dependency_level: 1
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
  evidence: exact-source
deps: [def-additive-function, thm-induction-principle, lem-rat-embeds-dense, lem-int-embeds-rat, lem-nat-embeds-int, def-canonical-natural, lem-integer-multiples-agree-with-canonical-natural, def-complete-ordered-field, def-integers, lem-of-naturals-positive, def-rationals, def-rat-operations, thm-int-ordered-ring]
justified_by: []
aliases: []
landmark: true
short: "additive implies $\\mathbb{Q}$-linear"
proof_strategy: induction
verification:
  precheck: pass
  repair: research/non-ml-math-remaining-81-2026-10-18-owner-first-scaffold-gate-repair/root-published-recording/receipts/lem-additive-is-q-linear.json
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
[[lem-int-embeds-rat]], [[lem-rat-embeds-dense]]), writing each natural
directly for its canonical value in $\mathbb{R}$ ([[def-canonical-natural]]). Then, for
every real $x$:

1. $f(0) = 0$;
2. $f(-x) = -f(x)$;
3. $f(n\,x) = n\,f(x)$ for every $n \in \mathbb{N}$;
4. $f(m x) = m\,f(x)$ for every integer $m$;
5. $f(q x) = q\,f(x)$ for every rational $q$.

In particular, taking $x = 1$ in claim 5, $f(q) = q\,f(1)$ at every rational $q$:
**an additive function is determined on $\mathbb{Q}$ by its value at $1$.**

## Facts & Assumptions

**Given:** An additive $f : \mathbb{R} \to \mathbb{R}$, so $f(x+y) = f(x) + f(y)$ for all reals $x, y$.

[A1] $f(x + y) = f(x) + f(y)$ for all reals $x, y$ ([[def-additive-function]]).

[L1] Induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L2] The canonical inclusion sends zero to the real zero and a successor to the preceding value plus $1$; the real value of $n$ agrees with the additive multiple $n \cdot 1_{\mathbb{R}}$ ([[def-canonical-natural]], [[lem-integer-multiples-agree-with-canonical-natural]], [[lem-of-naturals-positive]]).

[L3] The embeddings $\mathbb N\subseteq\mathbb Z\subseteq\mathbb Q\subseteq\mathbb R$ preserve arithmetic; the image of $\mathbb N$ in $\mathbb Z$ is exactly the nonnegative integers, and positive canonical naturals are nonzero ([[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]], [[lem-of-naturals-positive]]).

[L5] Every rational is represented by a pair $(a,b)$ of integers with $b\ne0$, where $(a,b)\sim(c,d)$ means $ad=cb$; rational multiplication and inversion are the pair operations ([[def-rationals]], [[def-rat-operations]]).

[L6] The integers form a totally ordered commutative ring ([[thm-int-ordered-ring]]).

[L4] $\mathbb{R}$ is a field, so cancellation, distributivity and inverses of nonzero elements are available ([[def-complete-ordered-field]]).

## Proof

**Proof technique:** induction.

1.1 Claim 1: taking $x = y = 0$ in the functional equation gives $f(0) = f(0) + f(0)$, and adding $-f(0)$ to both sides gives $f(0) = 0$. [A1, L4]

1.2 Claim 3, inductive hypothesis: suppose $f(nx) = nf(x)$ for a given $n \in \mathbb{N}$ and every real $x$. [ih]

2.1 Claim 2: taking $y = -x$ gives $0 = f(0) = f(x) + f(-x)$, so $f(-x) = -f(x)$. [step 1.1, A1, L4]

2.2 Claim 3, base case $n = 0$: $f(0x) = f(0) = 0 = 0f(x)$. [step 1.1, L2, base]

2.3 Claim 3, inductive step: $(n+1)x = nx + x$, so $f((n+1)x) = f(nx) + f(x) = nf(x) + f(x) = (n+1)f(x)$. [step 1.2, A1, L2, L4]

3.1 Claim 3 holds for every $n \in \mathbb{N}$ and every real $x$, by induction on $n$ from steps 2.2 and 2.3. [step 2.2, step 2.3, L1]

4.1 Claim 4: by the total order and addition compatibility in [L6], either $m\ge0$ or $-m\ge0$; by [L3] the nonnegative one is the image of some natural $n$. Thus $m=n$ or $m=-n$. In the first case claim 3 applies directly. In the second, $f(mx)=f(-(nx))=-f(nx)=-nf(x)=mf(x)$. [step 2.1, step 3.1, L3, L6]

5.1 Claim 5: by [L5], write $q=[(a,b)]$ with $a,b\in\mathbb Z$ and $b\ne0$. By [L6], either $b>0$ or $-b>0$; in the second case replace $(a,b)$ by $(-a,-b)$, which represents the same rational because $a(-b)=(-a)b$. The resulting positive denominator is the image of a natural $n\ge1$ by [L3]; call the resulting numerator $m$. The pair formulas in [L5] give $[(m,n)]=[(m,1)]\,[(1,n)]=j(m)j(n)^{-1}$, where $j$ is the integer embedding, so after the field embedding into $\mathbb R$ this is $q=m/n$. By [L3], $n\ne0$. Applying claim 4 with the integer $n$ to the real $qx$ gives $nf(qx)=f(nqx)=f(mx)=mf(x)$, and division by $n$ gives $f(qx)=(m/n)f(x)=qf(x)$. [step 4.1, L3, L4, L5, L6, algebra]

6.1 Taking $x = 1$ in claim 5 gives $f(q) = q f(1)$ for every rational $q$, and all five claims are proved. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, discharge-induction] ∎

## Remarks

- **What this does not say.** Claim 5 is $\mathbb{Q}$-homogeneity, not $\mathbb{R}$-homogeneity: nothing here gives $f(\lambda x) = \lambda f(x)$ for irrational $\lambda$, and that is exactly the gap that [[fs-additive-implies-linear]] shows cannot be closed without a regularity hypothesis.

- **The induction is on $\mathbb{N}$ and everything else is algebra.** Only claim 3 needs induction; claims 4 and 5 are obtained from it by the two field operations, and claims 1 and 2 are two substitutions into the equation. The base case is $n = 0$, where the real value of $n$ is $0$ and the identity reads $f(0) = 0$; it is a genuine case and not a convention, since $\mathbb{N}$ contains $0$.

- **This is the whole of the algebraic theory.** Every regularity theorem about Cauchy's equation ([[thm-cauchy-functional-equation-regularity]]) works by combining claim 5 with density of $\mathbb{Q}$ in $\mathbb{R}$: the value of $f$ is pinned on a dense set, and a regularity hypothesis is what forbids the values off that set from being arbitrary.
