---
id: lem-p-power-torsion-dimensions-recover-elementary-divisors
kind: lemma
title: "$p$-power torsion dimensions recover the elementary divisors of a PID module"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-primary-decomposition-and-elementary-divisor-form-over-a-pid, lem-irreducibles-are-prime-in-a-principal-ideal-domain, thm-principal-ideal-domains-are-unique-factorisation-domains, def-dimension]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "K. Conrad, Modules over a PID, Theorem 5.7"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/modulesoverPID.pdf"
pipeline_run: null
---

## Statement

Let $M$ be a finitely generated module over a PID $R$, fix an irreducible $p$, and for $k\ge1$ put $M[p^k]=\{m\in M:p^km=0\}$. Then $p^{k-1}M[p^k]$ is a vector space over $R/(p)$, and

$$d_k:=\dim_{R/(p)}p^{k-1}M[p^k]$$

is the number of $p$-primary elementary divisors $p^e$ with $e\ge k$. Hence $d_k-d_{k+1}$ is the multiplicity of $p^k$. The dimensions of $p^{k-1}M[p^k]$ recover every elementary-divisor exponent multiplicity.

## Facts & Assumptions

**Given:** Vector-space dimension ([[def-dimension]]) and the prime-element conclusion of [[lem-irreducibles-are-prime-in-a-principal-ideal-domain]].

[L1] The $p$-primary component is a finite direct sum of modules $R/(p^e)$ ([[thm-primary-decomposition-and-elementary-divisor-form-over-a-pid]]).

[L2] Every principal ideal domain is a unique factorisation domain ([[thm-principal-ideal-domains-are-unique-factorisation-domains]]).

## Proof

**Proof technique:** direct.

1.1 Since $p$ is prime, $(p)$ is a prime ideal; in a PID it is maximal by the same divisibility argument as for irreducibles, so $R/(p)$ is a field. Every element of $p^{k-1}M[p^k]$ is killed by $p$, making this set an $R/(p)$-vector space. [given, algebra]

2.1 On one summand $C=R/(p^e)$, if $e\ge k$ then $C[p^k]=p^{e-k}C$ and $p^{k-1}C[p^k]=p^{e-1}C$, a one-dimensional $R/(p)$-space. If $e<k$, then $p^{k-1}C=0$, so the contribution is zero. For a $q$-primary summand with $q$ not associated to $p$, unique factorisation [L2] makes $p^k$ and $q^e$ coprime, so choose $u,v$ with $up^k+vq^e=1$; multiplication by $u$ is inverse to multiplication by $p^k$ on $R/(q^e)$, and its $p^k$-torsion is zero. Free summands likewise contribute no $p$-power torsion. [L1, L2, step 1.1, algebra]

3.1 Direct sums commute with $M[p^k]$ and multiplication by $p^{k-1}$, so dimensions add. By step 2.1, $d_k$ counts exactly the exponents $e\ge k$; for $k=1$ it counts every $p$-primary cyclic summand, and beyond the largest exponent it is zero. [step 2.1, algebra]

4.1 The summands counted by $d_k$ but not by $d_{k+1}$ are exactly those with exponent $e=k$, so $d_k-d_{k+1}$ recovers their multiplicity. Empty primary data and the zero module give the zero sequence. [step 3.1, algebra] ∎
