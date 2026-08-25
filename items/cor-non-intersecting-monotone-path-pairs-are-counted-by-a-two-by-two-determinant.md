---
id: cor-non-intersecting-monotone-path-pairs-are-counted-by-a-two-by-two-determinant
kind: corollary
title: "For $n\\ge1$ the pairs of non-intersecting monotone paths $(1,0)\\to(n+1,n)$ and $(0,1)\\to(n,n+1)$ number $\\binom{2n}{n}^2-\\binom{2n}{n+1}\\binom{2n}{n-1}$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-lindstrom-gessel-viennot, thm-monotone-lattice-paths-in-a-rectangle-are-counted-by-a-binomial-coefficient, def-binomial-coefficient]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'C. Krattenthaler, "Lattice Path Enumeration", ch. 10 of the Handbook of Enumerative Combinatorics, Corollary 10.13.2'
      url: "https://arxiv.org/pdf/1503.05930"
pipeline_run: null
---

## Statement

Let $n\ge1$. Then the number of pairs $(P,Q)$ such that

1. $P$ is a monotone lattice path from $(1,0)$ to $(n+1,n)$,
2. $Q$ is a monotone lattice path from $(0,1)$ to $(n,n+1)$, and
3. $P$ and $Q$ do not intersect,

is

$$\binom{2n}{n}^{2}-\binom{2n}{n+1}\binom{2n}{n-1}.$$

## Facts & Assumptions

**Given:** a natural number $n\ge1$.

[L1] In the compatible case, the determinant of the matrix of path counts equals the number of non-intersecting systems joining the starts to the corresponding ends ([[thm-lindstrom-gessel-viennot]]).

[L2] If $a\le c$ and $b\le d$, and $m=c-a$, $n'=d-b$ are the corresponding natural numbers, then the number of monotone paths from $(a,b)$ to $(c,d)$ is $\binom{m+n'}{n'}$ ([[thm-monotone-lattice-paths-in-a-rectangle-are-counted-by-a-binomial-coefficient]]).

## Proof

**Proof technique:** direct.

1.1 With $A_0=(1,0)$, $A_1=(0,1)$, $E_0=(n+1,n)$ and $E_1=(n,n+1)$, the four path counts are $$m_{0,0}=m_{1,1}=\binom{2n}{n}, \qquad m_{0,1}=\binom{2n}{n+1}, \qquad m_{1,0}=\binom{2n}{n-1}$$ by [L2]. [L2]

1.2 Every monotone path $P:(1,0)\to(n,n+1)$ meets every monotone path $Q:(0,1)\to(n+1,n)$. After $t$ steps, both paths lie on the line $x+y=t+1$; writing their $x$-coordinates as $x_P(t)$ and $x_Q(t)$, the difference $x_P(t)-x_Q(t)$ starts at $1$ and ends at $-1$, and each step changes it by at most $1$. So some index $t$ has $x_P(t)=x_Q(t)$, and then the common value of $x+y$ forces the same $y$-coordinate as well. [given, algebra]

2.1 Step 1.2 is exactly the compatibility condition for these two pairs of endpoints, so [L1] applies and gives the count as the determinant $$\det\begin{pmatrix}\binom{2n}{n}&\binom{2n}{n+1}\\[2pt]\binom{2n}{n-1}&\binom{2n}{n}\end{pmatrix}=\binom{2n}{n}^{2}-\binom{2n}{n+1}\binom{2n}{n-1}.$$ [L1, step 1.1, step 1.2]

3.1 At $n=1$ this gives $2^{2}-1\cdot1=3$, which matches the direct count: there are four ordered pairs of paths, and exactly one pair meets at the point $(1,1)$. [step 2.1] ∎

## Remarks

- The determinant is already nontrivial at $n=1$: the count is not the product of the two individual path counts because the compatibility condition removes the intersecting pair.
