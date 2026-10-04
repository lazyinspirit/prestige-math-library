---
id: cor-every-classical-braid-group-is-linear
kind: corollary
title: Every classical braid group is linear
status: published
origin: pipeline
deps: [thm-the-lawrence-krammer-bigelow-representation-is-faithful, thm-the-integral-lkb-module-is-free-of-rank-n-choose-two, def-axiom-of-choice]
justified_by: []
aliases: []
dependency_level: 13
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bigelow, Braid groups are linear, J. Amer. Math. Soc. 14 (2001) 471-486"
      url: "https://web.math.ucsb.edu/~bigelow/publications/03.pdf"
      locator: "Theorem 1.1, printed p. 471, and Theorem 4.1 with the embedding into R-tensor homology, printed pp. 483-485"
    - title: "Bigelow, The Lawrence-Krammer representation, arXiv:math/0204057v1"
      url: "https://arxiv.org/pdf/math/0204057"
      locator: "Theorem 4.1 and Section 4.2, printed pp. 8-13: the integral free basis and the fraction-field model"
    - title: "Krammer, Braid groups are linear, Ann. of Math. 155 (2002) 131-156"
      url: "https://arxiv.org/pdf/math/0405198"
      locator: "Theorem B and Section 4.6, printed pp. 134 and 145 (the independent matrix-valued proof)"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---
## Statement

Assume AC. For every $n\ge1$ the representation
$\rho_{\mathrm{LKB}}$ embeds $B_n$ into
$\mathrm{GL}_{\binom n2}(\Lambda)$, hence also into
$\mathrm{GL}_{\binom n2}(\mathbb Q(q,t))$; therefore every classical braid
group is linear.

## Facts & Assumptions

**Given:** the braid group $B_n$, the ring
$\Lambda=\mathbb Z[q^{\pm1},t^{\pm1}]$ and its fraction field
$K=\mathbb Q(q,t)$.

[F1] [[thm-the-lawrence-krammer-bigelow-representation-is-faithful]]:
$\rho_{\mathrm{LKB}}:B_n\to\mathrm{GL}_{\binom n2}(\Lambda)$ has trivial
kernel.

[F2] [[thm-the-integral-lkb-module-is-free-of-rank-n-choose-two]]: the target
is the full matrix group of the free $\Lambda$-module of rank $\binom n2$,
and extension of scalars to $K$ presents it as
$\mathrm{GL}_{\binom n2}(K)$.



## Proof

1.1 By [F1] the homomorphism $\rho_{\mathrm{LKB}}$ is injective, so $B_n$ is isomorphic to a subgroup of the matrix group $\mathrm{GL}_{\binom n2}(\Lambda)$; this already exhibits a faithful finite-dimensional representation of $B_n$ over the commutative ring $\Lambda$. [F1, F2]

2.1 Extending scalars along the inclusion $\Lambda\hookrightarrow K$ gives a group homomorphism $\mathrm{GL}_{\binom n2}(\Lambda)\to\mathrm{GL}_{\binom n2}(K)$ which is injective, because its entries are the entries of the matrix and the inclusion $\Lambda\hookrightarrow K$ is injective; the composite with $\rho_{\mathrm{LKB}}$ is therefore an injective homomorphism from $B_n$ to $\mathrm{GL}_{\binom n2}(K)$. By [F2] the size $\binom n2$ is finite for every $n$, so $B_n$ is a linear group. For $n=1$ the group $B_1$ is trivial and therefore linear as well. [F1, F2, algebra] ∎
