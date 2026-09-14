---
id: thm-the-chevalley-eilenberg-differential-squares-to-zero
kind: theorem
title: The Chevalley–Eilenberg differential squares to zero
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-chevalley-eilenberg-differential, def-lie-algebra-over-a-field, def-representation-of-a-lie-algebra]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Weibel, Lie Algebra Homology and Cohomology, Exercise 7.7.1"
      url: https://math.mit.edu/~hrm/palestine/weibel/07-lie_algebra_homology_and_cohomology.pdf
      locator: "§7.7, Exercise 7.7.1 and differential formula, printed p. 239"
---

## Statement

For every $n$ and every $f\in C^n(\mathfrak g,M)$, one has
$d^{n+1}d^n f=0$.

## Facts & Assumptions

**Given:** A Lie algebra $\mathfrak g$, a representation $\rho$ on $M$, and
the differential with the declared signs.

[L1] The two-sum differential and its zero-based signs are fixed in
[[def-chevalley-eilenberg-differential]].

[L2] The representation identity is
$[\rho(x),\rho(y)]=\rho([x,y])$
([[def-representation-of-a-lie-algebra]]).

[L3] The bracket satisfies Jacobi
([[def-lie-algebra-over-a-field]]).

## Proof

**Proof technique:** expand and group by term type.

1.1 Expand $d(df)$ using [L1], and let $X^{ij}$ denote the ordered list obtained by omitting $x_i,x_j$. For fixed $i<j$, the outer action by $x_i$ followed by the action of $x_j$ has coefficient $(-1)^{i+j-1}$, whereas the reverse order has coefficient $(-1)^{i+j}$. Their sum is $(-1)^{i+j-1}[\rho(x_i),\rho(x_j)]f(X^{ij})$. There is exactly one term in which the outer differential forms $[x_i,x_j]$ and the inner differential lets that new first argument act; its coefficient is $(-1)^{i+j}$, so it contributes $(-1)^{i+j}\rho([x_i,x_j])f(X^{ij})$. These three terms cancel by [L2]. [L1, L2, algebra]

1.2 It remains to account for action--bracket terms on three distinct indices. Fix $i<j$ and $k\notin\{i,j\}$. Let $a$ be the number of $i,j$ that are less than $k$, and $b$ the number greater than $k$, so $a+b=2$. Acting first by $x_k$ and then forming $[x_i,x_j]$ has coefficient $(-1)^{i+j+k-b}$. Forming $[x_i,x_j]$ first and then letting $x_k$ act has coefficient $(-1)^{i+j+k+1-a}$. The exponents differ by $1-a+b=3-2a$, which is odd, while both terms have the same value $\rho(x_k)f([x_i,x_j],X^{ijk})$. Thus they cancel. This covers every mixed term with three distinct original indices. [L1, algebra]

2.1 Consider the terms in which both differentials use their bracket sums. For two disjoint pairs, the two possible orders have the same scalar sign: the numbers of cross-pair index shifts in the two orders add to $4$, so their sign exponents differ by an even integer. Their cochain values are $f([x_p,x_q],[x_i,x_j],X^{ijpq})$ and $f([x_i,x_j],[x_p,x_q],X^{ijpq})$, which cancel because $f$ is alternating. For $i<j<k$, the three terms in which the second bracket uses the bracket created by the first have common coefficient $(-1)^{i+j+k-1}$ and bracket sum $\bigl[ [x_i,x_j],x_k\bigr]+\bigl[ [x_j,x_k],x_i\bigr]-\bigl[ [x_i,x_k],x_j\bigr]$. Since $-\bigl[ [x_i,x_k],x_j\bigr]=\bigl[ [x_k,x_i],x_j\bigr]$, this is zero by Jacobi [L3]. The expansion has now been partitioned into action--action plus created-bracket action (step 1.1), mixed action--bracket terms (step 1.2), disjoint double brackets, and nested double brackets; hence $d^2f=0$. For $n<0$ or a zero cochain space the assertion is the unique zero composite, and for $n=0$ step 1.1 is exactly the representation identity. [L1, L3, step 1.1, 1.2, algebra] ∎