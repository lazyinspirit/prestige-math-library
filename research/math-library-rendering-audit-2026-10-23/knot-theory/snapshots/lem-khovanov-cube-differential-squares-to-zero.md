---
id: lem-khovanov-cube-differential-squares-to-zero
kind: lemma
title: "The Khovanov cube differential squares to zero"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - alg-khovanov-chain-complex-from-diagram
  - def-khovanov-frobenius-algebra-and-cube-of-resolutions
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Mikhail Khovanov, A categorification of the Jones polynomial, arXiv:math/9908171v2, §§3.3–4.2"
      url: "https://arxiv.org/pdf/math/9908171v2"
    - title: "Dror Bar-Natan, On Khovanov's categorification of the Jones polynomial, Algebraic & Geometric Topology 2 (2002), §3"
      url: "https://arxiv.org/pdf/math/0201043"
    - title: "Louis H. Kauffman, An Introduction to Khovanov Homology, arXiv:1107.1524v2 (2022), §4"
      url: "https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/kaufmann.pdf"
    - title: "Melissa Zhang, Notes on Khovanov homology, arXiv:2501.03115v1, §§3.5–3.7"
      url: "https://arxiv.org/pdf/2501.03115v1"
---

## Statement

Let $D$ be a finite regular oriented link diagram, order its crossings as $c_1<\cdots<c_n$, and form the direct sum of state modules $\mathcal A^{\otimes k(v)}$ over all functions $v:C(D)\to\{0,1\}$. Here $\mathcal A=\mathbb Z[X]/(X^2)$, each crossing is changed from its A-smoothing at $0$ to its B-smoothing at $1$, and the edge map is the multiplication $m$ for a merge or comultiplication $\Delta$ for a split, multiplied by $(-1)^{\sum_{i<j}v(c_i)}$ on the edge at $c_j$. Then the sum $d$ of all edge maps satisfies $d^2=0$.

## Statement references

[[def-khovanov-frobenius-algebra-and-cube-of-resolutions|Frobenius algebra, smoothing and sign conventions]]

[[alg-khovanov-chain-complex-from-diagram|Finite state cube and edge maps]]

[Khovanov, *A categorification of the Jones polynomial* (1999), §§3.3–4.2](https://arxiv.org/pdf/math/9908171v2)

[Bar-Natan, *On Khovanov's categorification of the Jones polynomial* (2002), §3](https://arxiv.org/pdf/math/0201043)

[Kauffman, *An Introduction to Khovanov Homology* (2022), §4](https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/kaufmann.pdf)

[Zhang, *Notes on Khovanov homology* (2025), §§3.5–3.7](https://arxiv.org/pdf/2501.03115v1)

## Facts & Assumptions
**Given:** The finite ordered crossing set, the state modules and edge maps in the Lemma.

[F1] The multiplication and comultiplication on $\mathcal A$ obey associativity, coassociativity, commutativity, cocommutativity, and the Frobenius identities $(m\otimes\mathrm{id})(\mathrm{id}\otimes\Delta)=\Delta m=(\mathrm{id}\otimes m)(\Delta\otimes\mathrm{id})$ ([[def-khovanov-frobenius-algebra-and-cube-of-resolutions]]).

[F2] The differential is the sum of the signed edge maps, and the sign on the edge changing coordinate $j$ is $(-1)^{\sum_{i<j}v(c_i)}$ ([[alg-khovanov-chain-complex-from-diagram]]).

## Proof

1.1 Fix a state $v$ and two distinct coordinates $i<j$ with $v(c_i)=v(c_j)=0$. The two length-two paths from $v$ to $v+e_i+e_j$ induce equal unsigned maps: saddles on disjoint circles commute as tensor maps; when the two saddles meet one component, the three possible merge/split patterns give respectively associativity, coassociativity, or one of the two equal Frobenius composites in [F1]. These are all possibilities because each edge changes one smoothing by one saddle. [F1, given, algebra]

2.1 The sign on the path that changes $i$ then $j$ has exponent $\sum_{r<i}v(c_r)+\sum_{r<j}v(c_r)+1$, while the path that changes $j$ then $i$ has exponent $\sum_{r<j}v(c_r)+\sum_{r<i}v(c_r)$. Their signs are opposite, so the two equal unsigned composites from step 1.1 cancel in the sum defining the component of $d^2$ from $v$ to $v+e_i+e_j$. If there are fewer than two crossings, no length-two paths occur and $d^2$ is the empty sum; otherwise every term of $d^2$ lies in exactly one such pair. Hence $d^2=0$. [F2, step 1.1, algebra] ∎
