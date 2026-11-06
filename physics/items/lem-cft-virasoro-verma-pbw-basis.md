---
id: lem-cft-virasoro-verma-pbw-basis
kind: lemma
title: PBW basis and grades of Virasoro Verma modules
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-cft-virasoro-verma-module
  - def-virasoro-algebra
  - lem-pbw-for-countably-presented-kac-moody-lie-algebras
dependency_roles:
  def-cft-virasoro-verma-module: mathematical-premise
  def-virasoro-algebra: mathematical-premise
  lem-pbw-for-countably-presented-kac-moody-lie-algebras: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Antony Wassermann, Kac–Moody and Virasoro Algebras
      url: https://arxiv.org/pdf/1004.1287v2
      locator: "Chapter IV §4, printed pp. 70–71: PBW basis and finite-dimensional grades."
    - title: Paul Ginsparg, Applied Conformal Field Theory
      url: https://arxiv.org/pdf/hep-th/9108028v1
      locator: "§§3.1–3.3, printed pp. 26–35: highest-weight descendants and partition counting."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

For the induced Virasoro module $M(c,h)$, and every integer $N\ge0$, the vectors
$$
L_{-\lambda_1}\cdots L_{-\lambda_k}v_h, \qquad \lambda_1\ge\cdots\ge\lambda_k\ge1, \quad \sum_i\lambda_i=N,
$$
form a basis of grade $h+N$. The empty partition gives $v_h$ at $N=0$.
More precisely, the map $U(\mathfrak n_-)\to M(c,h)$, $x\mapsto xv_h$,
is an isomorphism of left $U(\mathfrak n_-)$-modules. Writing $p(N)$ for
the number of partitions of $N$, that grade has dimension $p(N)$.

## Statement references

[[def-cft-virasoro-verma-module]]

## Facts & Assumptions

**Given:** The bracket and induced module from [[def-cft-virasoro-verma-module]].

[F1] [[def-cft-virasoro-verma-module]]: $M(c,h)=U(\mathrm{Vir})\otimes _{U(\mathfrak b)}\mathbb C_{c,h}$, with $L_n v_h=0$ for $n>0$, $L_0v_h=hv_h$, and $Cv_h=cv_h$.

[F2] [[def-virasoro-algebra|Virasoro algebra in the $L_m$ convention]]: the Virasoro bracket is $[L_m,L_n]=(m-n)L_{m+n}+(m^3-m)\delta_{m+n,0}C/12$.

[F3] [[lem-pbw-for-countably-presented-kac-moody-lie-algebras]]: ordered monomials in a supplied countable ordered basis form a basis of the enveloping algebra.

## Proof

1.1 The bracket [F2] shows that $\mathfrak n_-$, $\mathfrak h$, and $\mathfrak n_+$ from [F1] are subalgebras: same-sign nonzero indices add without a central term, while $L_0,C$ preserve each block. Their direct sum is the full Virasoro vector space. Order a basis with every negative mode first, then $L_0,C$, then every positive mode. PBW [F3] gives the unique ordered factorization $U(\mathfrak n_-)U(\mathfrak h)U(\mathfrak n_+)$. [F1, F2, F3, algebra]

2.1 Multiplication therefore identifies $U(\mathrm{Vir})$, as a right $U(\mathfrak b)$-module, with the direct sum of one copy of $U(\mathfrak b)$ for each ordered negative-mode monomial. Tensoring this free right module with the one-dimensional module $\mathbb C_{c,h}$ kills positive modes and evaluates $L_0,C$ at $h,c$, but imposes no relation among the negative monomials. Hence they give a basis of $M(c,h)$. [F1, step 1.1, algebra]

3.1 The relation $[L_0,L_{-n}]=nL_{-n}$ shows by induction on the number of factors that a monomial of total index $N$ has eigenvalue $h+N$. Distinct total indices have distinct eigenvalues; the ordered monomials at fixed total index are indexed exactly by partitions of $N$. This proves the grade and dimension assertions. At $N=0$, the only monomial is the empty one and it is the nonzero vector from step 2.1. [F1, F2, step 2.1, algebra] ∎
