---
id: lem-formal-plane-division-and-factoriality
kind: lemma
title: "Formal plane division and factoriality over an algebraically closed field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps: []
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Statement

Let $k$ be an algebraically closed field and put $A=k\llbracket a\rrbracket$, $R=k\llbracket a,b\rrbracket$. If $f\in R$ has reduction $f(0,b)=b^d$ for an integer $d\ge0$, every $g\in R$ has a unique decomposition
$$g=Qf+P,\qquad Q\in R,\quad P\in A[b],\quad \deg_bP<d.$$
Moreover $f$ is a unit times a monic polynomial of degree $d$ in $b$ with lower coefficients in $aA$. Every nonzero nonunit of $R$ is a finite product of prime elements; consequently $R$ is a unique factorization domain. The proof uses finite choices and coefficientwise recursions.

## Facts & Assumptions

**Given:** The algebraically closed field $k$, the two formal variables, and the series $f,g$ satisfying the displayed reduction.

## Proof

1.1 Write $f=b^d+ah$. For any series $g_j$, split it uniquely as $g_j=b^dq_j+r_j$, where $r_j\in A[b]$ has $b$-degree below $d$. Set $g_0=g$ and $g_{j+1}=-ahq_j$. Then $g_j=q_jf+r_j+g_{j+1}$, and $g_j,q_j,r_j$ have $a$-adic order at least $j$. Since $R$ is complete for the $a$-adic topology, the sums $Q=\sum_jq_j$ and $P=\sum_jr_j$ converge and give $g=Qf+P$ with $\deg_bP<d$. For $d=0$ the remainder space is zero and the same construction applies. [given, construct, algebra]

2.1 If $Qf=P$ and $\deg_bP<d$, reduction modulo $a$ gives $\bar Qb^d=\bar P$ in $k\llbracket b\rrbracket$. Hence both reductions vanish. Divide $Q,P$ by $a$ and repeat; their coefficients lie in every power of $(a)$ and are zero. This proves uniqueness. Dividing $b^d$ by $f$ gives $b^d=Qf+P$ with $Q\equiv1$ and $P\equiv0$ modulo $a$, so $Q$ is a unit and $f=Q^{-1}(b^d-P)$ has the stated preparation. [step 1.1, algebra]

3.1 Let $F\in R$ be a nonzero nonunit, and let $F_d(a,b)$ be its nonzero lowest-degree homogeneous part. The field $k$ is infinite, so choose $c\in k$ with $F_d(c,1)\ne0$. The invertible formal coordinate change $a\mapsto a+cb$ makes $F(0,b)$ have order exactly $d$. Multiplying by the inverse of the unit $b^{-d}F(0,b)\in k\llbracket b\rrbracket$ normalizes the reduction to $b^d$; by step 2.1 the transformed $F$ is a unit times a monic $W\in A[b]$. [step 2.1, choose, algebra]

4.1 Factor $W$ into monic irreducibles over the field $K=k((a))$. Their coefficients lie in $A$: each root is integral over the discrete valuation ring $A$, so the symmetric functions defining the monic factors are integral over $A$, and $A$ is integrally closed. For any monic factor $P\in A[b]$ obtained this way, its reduction modulo $a$ is a power $b^r$: the product of the reductions is $b^d$ in the unique-factorization ring $k[b]$. Step 1.1 therefore gives division by $P$. The natural map $R/(P)\to K[b]/(P)$ is injective, since each class has a unique remainder of $b$-degree below $r$; the target is a field when $P$ is irreducible over $K$. Thus each such $P$ is prime in $R$. Pulling the finite factorization back by the inverse coordinate change expresses $F$ as a unit times finitely many primes. [step 1.1, step 3.1, algebra]

5.1 A product of prime elements has unique factorization up to order and units: a prime dividing two such products divides a factor of the other product, and one cancels successively. Therefore $R$ is a unique factorization domain. All choices in steps 3.1–4.1 are finite for the given series and polynomial; no choice of a family of factorizations is required. [step 3.1, step 4.1, algebra] ∎
