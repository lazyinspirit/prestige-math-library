---
id: ex-elementary-jucys-murphy-class-sums-through-s4
kind: example
title: "Elementary Jucys-Murphy class sums through S_4"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-elementary-symmetric-jucys-evaluation-is-a-cycle-count-class-sum, def-jucys-murphy-elements-of-the-symmetric-group-algebra, def-elementary-symmetric-polynomials, def-permutation-support-disjoint-cycles-and-cycle-type]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Garsia, Young Seminormal Representation, Murphy Elements and Content Evaluations, UCSD lecture notes (2003), section 3 and Theorem 5.10, printed pp. 18-25 and 51-52"
      url: "https://www.math.ucsd.edu/~garsia/somepapers/Youngseminormal.pdf"
    - title: "Okounkov-Vershik, A New Approach to the Representation Theory of the Symmetric Groups, Selecta Math. (N.S.) 2 (1996) 581-605; complete arXiv repost math/0503040, section 3, printed pp. 12-16"
      url: "https://arxiv.org/pdf/math/0503040"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "completed-independent-mathematical-review"
    date: 2026-10-03
    scope: "Complete item claim and mathematical body read in delegated Step 5a reader; evidence: research/frontier-38-owner-30-reader-19.md; immutable carrier: research/frontier-38-owner-30-step5-hash-19-post.json; exact saved draft bytes in git d90f26208 match that carrier after exclusion of the later judge stamp. Current content matches the saved carrier except publication status and verification metadata. Source and supplier coverage is limited to the report."
    delegated_by: "owner via tools/autopilot frontier-38-owner-30 reader-19 dispatch"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Statement

In $S_4$ with $X_2=(1\ 2)$, $X_3=(1\ 3)+(2\ 3)$,
$X_4=(1\ 4)+(2\ 4)+(3\ 4)$: the element
$e_1(X_2,X_3,X_4)=X_2+X_3+X_4$ is the sum of the six transpositions, the
permutations of $S_4$ with $3$ cycles; the element $e_2(X_2,X_3,X_4)$ is the
sum of the $11$ permutations with $2$ cycles (the three double transpositions
and the eight $3$-cycles); and $e_3(X_2,X_3,X_4)$ is the sum of the six
$4$-cycles, the permutations with one cycle. The evaluations are central:
$e_1$ and $e_3$ are single class sums, while $e_2$ is the sum of the class sums
of types $(2,2)$ and $(3,1)$.

## Facts & Assumptions

**Given:** The symmetric group $S_4$ acting on $\{1,2,3,4\}$ and the elements $X_2=(1\ 2)$, $X_3=(1\ 3)+(2\ 3)$, $X_4=(1\ 4)+(2\ 4)+(3\ 4)$ of $\mathbb Z[S_4]$ ([[def-jucys-murphy-elements-of-the-symmetric-group-algebra]]).

[F1] The elementary symmetric polynomials are $e_1=x_1+x_2+x_3$, $e_2=x_1x_2+x_1x_3+x_2x_3$, $e_3=x_1x_2x_3$ in three variables ([[def-elementary-symmetric-polynomials]]).

[F2] For $0\le s\le n$ one has $e_s(X_2,\dots,X_n)=\sum_{\rho\vdash n,\ \ell(\rho)=n-s}C^{(n)}_\rho$, the sum of all permutations of $S_n$ with exactly $n-s$ cycles ([[thm-elementary-symmetric-jucys-evaluation-is-a-cycle-count-class-sum]]).

[F3] Cycle type, support and cycle decomposition are as defined in [[def-permutation-support-disjoint-cycles-and-cycle-type]]: a permutation of $S_4$ has $3$ cycles exactly when it is a transposition, $1$ cycle exactly when it is a $4$-cycle, and the elements with $2$ cycles are the three double transpositions together with the eight $3$-cycles.

## Proof

**Proof technique:** direct.

1.1 The displayed elements are $X_2=(1\ 2)$, $X_3=(1\ 3)+(2\ 3)$ and $X_4=(1\ 4)+(2\ 4)+(3\ 4)$; the products below are computed in the group algebra $\mathbb Z[S_4]$, in which distinct permutations form a $\mathbb Z$-basis. [F1, F3, given]

2.1 $X_2X_3=(1\ 2)\bigl((1\ 3)+(2\ 3)\bigr)=(1\ 2)(1\ 3)+(1\ 2)(2\ 3)=(1\ 3\ 2)+(1\ 2\ 3)$. [step 1.1, algebra]

2.2 $X_2X_4=(1\ 2)\bigl((1\ 4)+(2\ 4)+(3\ 4)\bigr)=(1\ 2)(1\ 4)+(1\ 2)(2\ 4)+(1\ 2)(3\ 4)=(1\ 4\ 2)+(1\ 2\ 4)+(1\ 2)(3\ 4)$. [step 1.1, algebra]

2.3 $X_3X_4=\bigl((1\ 3)+(2\ 3)\bigr)\bigl((1\ 4)+(2\ 4)+(3\ 4)\bigr)=(1\ 3\ 4)+(1\ 4\ 3)+(2\ 3\ 4)+(2\ 4\ 3)+(1\ 3)(2\ 4)+(1\ 4)(2\ 3)$. [step 1.1, algebra]

2.4 $e_1(X_2,X_3,X_4)=X_2+X_3+X_4=(1\ 2)+(1\ 3)+(2\ 3)+(1\ 4)+(2\ 4)+(3\ 4)$, the six transpositions, i.e. the six permutations with $3$ cycles by [F3]. [F1, F3, step 1.1, algebra]

3.1 Adding the three products of steps 2.1-2.3 gives $e_2(X_2,X_3,X_4)=X_2X_3+X_2X_4+X_3X_4=(1\ 3\ 2)+(1\ 2\ 3)+(1\ 4\ 2)+(1\ 2\ 4)+(1\ 3\ 4)+(1\ 4\ 3)+(2\ 3\ 4)+(2\ 4\ 3)+(1\ 2)(3\ 4)+(1\ 3)(2\ 4)+(1\ 4)(2\ 3)$: eight $3$-cycles and the three double transpositions, i.e. $11$ permutations, all with $2$ cycles by [F3]. [F1, F3, step 2.1, step 2.2, step 2.3, algebra]

3.2 $e_3(X_2,X_3,X_4)=X_2X_3X_4=(1\ 2\ 3\ 4)+(1\ 2\ 4\ 3)+(1\ 3\ 2\ 4)+(1\ 3\ 4\ 2)+(1\ 4\ 2\ 3)+(1\ 4\ 3\ 2)$, the six $4$-cycles, i.e. the permutations with one cycle by [F3]; indeed the product is $X_2(X_3X_4)$ and the six products of the three transpositions of $X_4$ with $(1\ 2)$ and the two transpositions of $X_3$ are exactly the six listed $4$-cycles, with no repetitions among them. [F1, F3, step 1.1, step 2.3, algebra]

4.1 By [F2] with $n=4$ the evaluations $e_s(X_2,X_3,X_4)$ equal the class sums $\sum_{\ell(\rho)=4-s}C^{(4)}_\rho$ for $s=1,2,3$, which are exactly the three displayed finite sums; each class sum is central because conjugation permutes each conjugacy class. In particular no term cancels and every coefficient is $1$, as the explicit expansions of steps 3.1 and 3.2 show. [F2, step 3.1, step 2.4, step 3.2, algebra]

5.1 The case $s=0$ gives $e_0=1$ and the case $s=4$ gives $e_4=0$; the example exhibits the three nontrivial evaluations and confirms the identity of [F2] at the first size with three nonzero positive-degree elementary evaluations. [F2, step 4.1] ∎

## Remarks

- **The counts.** $S_4$ has $6$ transpositions, $3$ double transpositions, $8$ three-cycles and $6$ four-cycles, so the three sums have $6$, $3+8=11$ and $6$ terms; these are the class sizes of the cycle types $2\,1^2$, $2^2$, $3\,1$ and $4$.

- **Centrality.** By [F2] each evaluation is a sum of conjugacy-class sums, hence lies in $Z(\mathbb C[S_4])$. There are four nonidentity conjugacy classes; $e_2$ combines two of them, so these three evaluations do not individually list all four class sums.
