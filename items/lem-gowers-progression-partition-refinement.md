---
dependency_level: 1
id: lem-gowers-progression-partition-refinement
kind: lemma
title: "Refining cyclic progressions into ordinary arithmetic progressions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-finite-density-k-term-arithmetic-progression
  - thm-standard-representatives-modulo-n
  - thm-integers-modulo-n-basic-algebra
  - thm-holder-inequality-for-integrals
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "W. T. Gowers, A new proof of Szemeredi theorem, Lemmas 5.12--5.13, printed pp.496--497"
      url: https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf
---

## Statement

Let $N\ge1$ and $G=\mathbb Z/N\mathbb Z$. A cyclic progression of size $m$ means a set $Q=\{a,a+d,\ldots,a+(m-1)d\}$ whose displayed terms are distinct. An ordinary progression in $G$ means the reduction of an integer arithmetic progression contained in $\{0,\ldots,N-1\}$; singletons are included.

Every cyclic progression $Q$ of size $m\ge1$ has a partition into at most $4\sqrt m$ ordinary progressions. Consequently, if $Q_1,\ldots,Q_M$ partition $G$ into nonempty cyclic progressions, the partition has a refinement into at most $4\sqrt{NM}$ ordinary progressions.

## Statement references

[Gowers, Lemmas 5.12--5.13, printed pp.496--497](https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf)

## Facts & Assumptions

**Given:** The finite cyclic group and progression or partition in the Statement.

[F1] Residues form an additive group with unique representatives $0,\ldots,N-1$ ([[thm-integers-modulo-n-basic-algebra]], [[thm-standard-representatives-modulo-n]]). Arithmetic progression and distinctness conventions are [[def-finite-density-k-term-arithmetic-progression]].

[F2] Cauchy--Schwarz for finite nonnegative sums is the exponent-two case of [[thm-holder-inequality-for-integrals]] applied to counting measure.

## Proof

1.1 A singleton needs one cell, so assume $m\ge2$. Put $q=\lfloor\sqrt m\rfloor$. The $q+1$ residues $0,d,\ldots,qd$ are distinct, since $q<m$. Arrange their standard representatives around the circle of circumference $N$. Their consecutive gaps, including the final circular gap, sum to $N$, so one gap is at most $N/(q+1)$. The difference of its two indices gives an integer $1\le l\le q$ and an integer representative $t$ of $ld$ with $0<|t|\le N/(q+1)$. The representative is nonzero because otherwise two of the displayed residues coincide. Choosing the least suitable finite pair makes this a finite selection. [given, F1, construct, algebra]

2.1 Partition the indices $0,\ldots,m-1$ according to their residue modulo $l$. This partitions $Q$ into $l$ chains with step $ld$, of lengths $L_j\ge1$ satisfying $\sum_jL_j=m$. Lift chain $j$ to the integer walk $b_j,b_j+t,\ldots,b_j+(L_j-1)t$, with $0\le b_j<N$. Cut this chain whenever its standard representative crosses an endpoint of $[0,N)$. Between successive cuts, the representatives are an ordinary integer progression of step $t$; reversing a negative-step piece makes its step positive. The number of cuts is at most $(L_j-1)|t|/N+1$, since the lifted walk is monotone and crosses integer multiples of $N$ at spacing $N$. Hence the number of pieces is at most $2+(L_j-1)/(q+1)$. They are disjoint subsets of the original distinct chain. [F1, step 1.1, construct, algebra]

3.1 Summing step 2.1 gives at most $2l+(m-l)/(q+1)\le2q+m/(q+1)\le3\sqrt m\le4\sqrt m$ ordinary cells. For a partition $Q_1,\ldots,Q_M$ with sizes $m_i$, apply this construction separately; the cells remain disjoint and cover $G$. Since $\sum_i m_i=N$, [F2] gives $\sum_i4\sqrt{m_i}\le4\sqrt{M\sum_i m_i}=4\sqrt{NM}$. This proves both assertions, including $N=m=M=1$. [F2, step 1.1, step 2.1, algebra] ∎
