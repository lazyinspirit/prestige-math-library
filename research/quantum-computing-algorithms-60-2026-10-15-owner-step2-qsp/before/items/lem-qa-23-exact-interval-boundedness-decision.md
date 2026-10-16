---
id: lem-qa-23-exact-interval-boundedness-decision
kind: lemma
title: Exact interval boundedness by multiplicity strata and Sturm counts
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - lem-qa-23-sturm-root-counting
  - thm-polynomial-division-algorithm-over-a-field
  - lem-polynomial-gcd-is-stable-under-field-extension
  - thm-fundamental-theorem-of-algebra-minimum-modulus-proof
  - def-formal-derivative-of-a-polynomial
  - thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots
  - thm-algebra-of-continuous-functions
  - thm-intermediate-value
sources:
  references:
    - title: "Gilyén et al., Quantum singular value transformation and beyond"
      url: "https://arxiv.org/pdf/1806.01838"
      locator: "Corollary 10 and constructive discussion, PDF pp.12–14; arithmetic proofs supplied locally."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Statement

Let $K\subseteq\mathbb R$ be an ordered subfield with charged ideal exact field operations, equality tests and order tests. Given $p\in K[x]$ of degree at most $d$, whether $|p(x)|\le1$ for all $x\in[-1,1]$ can be decided in $O((d+1)^4)$ such operations, without root isolation or coefficient-height assumptions. This is an arithmetic-count claim; implementation bit costs and input encoding/access remain separate.

## Facts & Assumptions

**Given:** The ordered field, polynomial, degree bound and charged ideal exact operations in the Statement.

[F1] [[lem-qa-23-sturm-root-counting]] counts roots of a squarefree polynomial between nonroot endpoints by its signed negative-remainder chain.

[F2] [[thm-polynomial-division-algorithm-over-a-field]] gives exact division and degree descent. [[lem-polynomial-gcd-is-stable-under-field-extension]] allows multiplicity analysis over the complex field without changing the base-field gcd. [[thm-fundamental-theorem-of-algebra-minimum-modulus-proof]] splits complex polynomials into linear factors, with multiplicities.

[F3] [[def-formal-derivative-of-a-polynomial]] gives the formal derivative formula. Expanding in powers of $x-r$ shows that in characteristic zero the $j$th derivative reduces multiplicity $m$ to $m-j$ when $j\le m$.

[F4] [[thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots]] bounds the number of roots; [[thm-algebra-of-continuous-functions]] and [[thm-intermediate-value]] give sign constancy away from roots.

## Proof

1.1 Set $f=1-p^2$ and $n=\deg f\le2d$ when $f\ne0$. The zero polynomial accepts; a nonzero constant accepts exactly when positive. Otherwise evaluate $f(-1),f(1)$ and reject a negative endpoint. Normalize $F=f/\operatorname{lc}(f)$ to monic. Put $H_0=F$ and $H_j=\operatorname{monicgcd}(H_{j-1},F^{(j)})$ for $j=1,\ldots,n$, so $H_n=1$. For a complex root of $F$ of multiplicity $m$, its multiplicity in $H_j$ is $\max(m-j,0)$: while $j\le m$, [F3] gives derivative multiplicity exactly $m-j$, and once the root has left $H_{j-1}$ it cannot reappear in the gcd. Characteristic zero follows from $K\subseteq\mathbb R$. [F2, F3, given, algebra, construct]

2.1 Define $G_j=H_{j-1}/H_j$ for $1\le j\le n$ and $G_{n+1}=1$. Each $G_j$ is monic squarefree with roots exactly the roots of $F$ of multiplicity at least $j$. Hence $S_j=G_j/G_{j+1}$ is an exact polynomial quotient, with precisely the roots of original multiplicity $j$, each once. This follows over $\mathbb C$ by the multiplicity formula and factorization in [F2], and division in $K[x]$ has zero remainder because its scalar extension does. The product $V=\prod_{j\text{ odd}}S_j$ is monic squarefree with exactly the odd-multiplicity roots of $f$; the empty product is $1$. These are gcd, derivative, exact division and multiplication operations over $K$, with no individual roots computed. [F2, step 1.1, algebra, construct]

3.1 Remove $x-1$ and $x+1$ from $V$ whenever the corresponding endpoint is a root, each at most once, obtaining $W$. If $W$ is nonconstant, its endpoints are nonzero, and [F1] counts its distinct real roots in $(-1,1)$; for constant $W$ the count is zero. A positive count rejects: near an interior odd-multiplicity root $r$, write $f(x)=(x-r)^m g(x)$ with $g(r)\ne0$. Continuity gives a strict fixed sign for $g$ near $r$, so the odd power gives opposite signs for $f$ on the two sides, both inside the interval. [F1, F4, step 2.1, algebra]

4.1 If the count is zero, all interior real roots of $f$ have even multiplicity. Between successive roots its sign is constant by [F4], and crossing an even root preserves that sign by the factorization from step 3.1. Thus all nonroot points of $(-1,1)$ have one strict sign. Among the $n+1$ fixed rational points $t_j=-1+2j/(n+2)$, $j=1,\ldots,n+1$, at least one is not a root by [F4]. Find the first by exact Horner evaluation and accept exactly when its value is positive. All interior values are then positive or zero, and the checked endpoint values are nonnegative. Conversely nonnegative $f$ passes all checks. Since $f\ge0$ is equivalent to $|p|\le1$, this is the required exact decision, including invalid inputs. [F4, step 2.1, step 3.1, algebra, construct]

5.1 All polynomial degrees are at most $n$. Schoolbook long division costs $O((n+1)^2)$ field operations. A gcd or signed Sturm chain has at most $n+1$ degree decreases, costing $O((n+1)^3)$ operations/tests including leading-zero detection. There are $n$ gcd computations; derivatives, exact quotients and products cost $O((n+1)^3)$ in total, and endpoint/sample evaluation costs $O((n+1)^2)$. Hence the total is $O((n+1)^4)=O((d+1)^4)$. Every normalization divides only a verified nonzero leading coefficient. Exact divisibility and polynomial identities follow from steps 1.1–2.1 and may also be verified by multiplication within this budget. No refinement loop, coordinate sign oracle or implementation bit-time bound is used. [F2, step 1.1, step 2.1, step 3.1, step 4.1, algebra] ∎
