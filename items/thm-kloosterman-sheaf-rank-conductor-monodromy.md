---
id: thm-kloosterman-sheaf-rank-conductor-monodromy
kind: theorem
title: "Rank, conductor, irreducibility, and monodromy of hyper-Kloosterman sheaves"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps: [def-trace-function-conductor, def-hyper-kloosterman-sum-rank-three]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  precheck: pending
sources:
  references:
    - title: "N. M. Katz, Gauss Sums, Kloosterman Sums, and Monodromy Groups"
      url: "https://web.math.princeton.edu/~nmk/Katz-GKM.pdf"
      locator: "Theorem 4.1.1 and Corollary 4.1.2, printed pp. 48–50; Theorem 11.1, printed pp. 178–179"
    - title: "D. H. J. Polymath, New equidistribution estimates of Zhang type, and bounded gaps between primes"
      url: "https://arxiv.org/pdf/1402.0811v3"
      locator: "§6.7, Proposition 6.9 and Remark 6.10, printed pp. 68–69"
---

## Statement

Let $p\ge3$ be prime, let $\ell\ne p$ be prime, and let $\psi$ be a nontrivial additive character of $\mathbb F_p$. There exists a rank-three middle-extension $\ell$-adic sheaf $\mathcal K\ell_3$ on $\mathbb P^1_{\mathbb F_p}$ whose trace on $\mathbb F_p^\times$ is the normalized sum $\operatorname{Kl}_3(a;p)$ from the preceding definition. Its lisse locus is $\mathbb G_m=\mathbb P^1\setminus\{0,\infty\}$; it is pointwise of weight zero on that locus, tame at $0$, and totally wild at $\infty$ with Swan conductor $1$. Its geometric monodromy representation is irreducible, and for odd $p$ its geometric monodromy group is $\mathrm{SL}_3$. Its Fouvry–Kowalski–Michel conductor complexity is $3+2+1=6$.

## Statement references

[[def-hyper-kloosterman-sum-rank-three|Normalized Rank-Three Hyper-Kloosterman Sum]]

[[def-trace-function-conductor|Trace-Function Conductor]]

[Katz, Theorem 4.1.1 and Corollary 4.1.2](https://web.math.princeton.edu/~nmk/Katz-GKM.pdf)

[Katz, Theorem 11.1](https://web.math.princeton.edu/~nmk/Katz-GKM.pdf)

[Polymath8a, Proposition 6.9 and Remark 6.10](https://arxiv.org/pdf/1402.0811v3)

## Facts & Assumptions

**Given:** An odd prime $p$, a prime $\ell\ne p$, a nontrivial additive character of $\mathbb F_p$, and the normalized sum $\operatorname{Kl}_3(a;p)$.

[F1] [[def-hyper-kloosterman-sum-rank-three]]: $\operatorname{Kl}_3(a;p)=p^{-1}\sum_{x_1x_2x_3=a}e_p(x_1+x_2+x_3)$, with all variables in $\mathbb F_p^\times$.

[F2] [[def-trace-function-conductor]]: the FKM complexity of a middle-extension trace function is rank plus the number of geometric singular points plus the sum of Swan conductors at those points.

## Proof obligation

The cited Katz results establish the sheaf construction, purity, local monodromy and monodromy group, but their geometric arguments are not locally reconstructed in this pair. The local statement also uses the weight-zero Tate normalization matching Polymath's normalized trace convention. No local proof is supplied; this item remains escalated and cannot supply readiness to the correlation or Type III consumers.
