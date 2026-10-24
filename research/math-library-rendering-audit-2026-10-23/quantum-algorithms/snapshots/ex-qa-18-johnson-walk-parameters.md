---
id: ex-qa-18-johnson-walk-parameters
kind: example
title: "Small Johnson-walk spectra and marked fractions"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - thm-qa-18-element-distinctness-query-cost
  - lem-qa-18-johnson-walk-spectrum
  - def-qa-18-element-distinctness-johnson-walk
justified_by: []
proof_strategy: direct
axiom_use: "None; all checks are finite subset and eigenvalue calculations."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Andris Ambainis, Quantum walk algorithm for element distinctness, §§3–4"
      url: "https://arxiv.org/pdf/quant-ph/0311001"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 20, §20.2"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
---
## Example

For $N=5,r=2$ and $N=6,r=3$, compute the lazy Johnson spectrum, its gap, and the marked fraction from one fixed colliding pair. Also compute the marked fraction for two disjoint colliding pairs in the $N=6,r=3$ case. In the one-pair cases assume that the named pair is the only collision pair; in the two-pair case assume that the named disjoint pairs are the only collision pairs, so their common values are distinct and all remaining values are distinct from each other and from those common values.

## Facts & Assumptions

**Given:** The lazy Johnson transition and formulas in [[def-qa-18-element-distinctness-johnson-walk]] and [[lem-qa-18-johnson-walk-spectrum]].

[F1] [[lem-qa-18-johnson-walk-spectrum]]: $\lambda_j=1-j(N+1-j)/(2r(N-r))$ with multiplicity $\binom Nj-\binom N{j-1}$, for $0\le j\le r$.

[F2] [[thm-qa-18-element-distinctness-query-cost]]: one fixed collision pair marks a fraction at least $r(r-1)/[N(N-1)]$ of all $r$-subsets.

[F3] [[def-qa-18-element-distinctness-johnson-walk]]: the state space consists of all $r$-subsets and marked states contain at least one collision pair.

## Proof

1.1 For $N=5,r=2$, the denominator in [F1] is $2r(N-r)=12$. At $j=0,1,2$, the eigenvalues are $1$, $1-5/12=7/12$, and $1-8/12=1/3$. Their multiplicities are $1$, $\binom51-\binom50=4$, and $\binom52-\binom51=5$, totaling $10=\binom52$. Thus the nonconstant top eigenvalue is $7/12$ and the gap is $5/12$. An independent finite check enumerates the ten $2$-subsets lexicographically and forms the integer matrix $B_{ST}=12P(S,T)$: its diagonal is $6$, and its off-diagonal entry is $1$ exactly when $|S\cap T|=1$. Exact determinant expansion gives $\det(xI-B)=(x-12)(x-7)^4(x-4)^5$, confirming the scaled spectrum. A fixed colliding pair lies in $\binom30=1$ of the $10$ subsets, so its marked fraction is $1/10$. [F1, F2, F3, algebra]

1.2 For $N=6,r=3$, the denominator is $18$. Formula [F1] gives eigenvalues $1,2/3,4/9,1/3$ for $j=0,1,2,3$. Their multiplicities are $1,5,9,5$, totaling $20=\binom63$. The independent exact check enumerates the $20$ triples and forms $B_{ST}=18P(S,T)$ with diagonal $9$ and off-diagonal $1$ exactly when $|S\cap T|=2$; fraction-free determinant expansion gives $\det(xI-B)=(x-18)(x-12)^5(x-8)^9(x-6)^5$, confirming those eigenvalues and multiplicities. The gap is $1-2/3=1/3$. A fixed pair belongs to $\binom41=4$ of the $20$ subsets, hence has marked fraction $1/5$. [F1, F2, F3, algebra]

2.1 Under the stated assumption that the only collision pairs are the two named disjoint pairs, each pair is contained in four $3$-subsets, and no $3$-subset contains both pairs because their union has four elements. The two marked families are therefore disjoint and their union has $4+4=8$ subsets, a fraction $8/20=2/5$. The value exceeds the one-pair lower bound $1/5$, as required by the “at least” in [F2]. Without the exclusivity assumptions, the counted families still give lower bounds for the marked fraction, but extra collisions can increase it. [F2, F3, step 1.2, algebra] ∎
