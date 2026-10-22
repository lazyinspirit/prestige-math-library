---
id: lem-tau-preserved-by-filtered-chain-homotopy-equivalence
kind: lemma
title: "The tau level is preserved by filtered chain homotopy equivalence"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-knot-floer-filtration-and-tau
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Peter S. Ozsvath and Zoltan Szabo, Knot Floer homology and the four-ball genus"
      url: "https://arxiv.org/pdf/math/0301149v4"
      locator: "§2.1, filtered subcomplexes and the definition of tau"
    - title: "Jennifer Hom, A survey on Heegaard Floer homology and concordance"
      url: "https://arxiv.org/pdf/1512.00383v3"
      locator: "§3.1, the minimum filtration level inducing a nonzero map to total homology"
---

## Statement

Let $C$ and $D$ be finite integer-filtered chain complexes over $\mathbb F_2$, each with total homology isomorphic to $\mathbb F_2$. A filtered chain homotopy equivalence consists of filtration-preserving chain maps $f:C\to D$ and $g:D\to C$ such that $gf$ and $fg$ are chain homotopic to the respective identity maps by homotopies that preserve every filtration level. Then $\tau(C)=\tau(D)$.

## Statement references

[[def-knot-floer-filtration-and-tau|The first filtration level whose inclusion has nonzero image in total homology]]

[Ozsvath and Szabo, *Knot Floer homology and the four-ball genus*, §2.1](https://arxiv.org/pdf/math/0301149v4)

[Hom, *A survey on Heegaard Floer homology and concordance*, §3.1](https://arxiv.org/pdf/1512.00383v3)

## Facts & Assumptions

**Given:** $C,D$ and filtered chain maps $f,g$ satisfying the filtered chain homotopy equivalence hypotheses in the Statement.

[F1] [[def-knot-floer-filtration-and-tau]]: for a finite filtered complex with one-dimensional total homology, $\tau(C)$ is the least integer $s$ for which $H(F_sC)\to H(C)$ has nonzero image.

## Proof

1.1 Put $t=\tau(C)$. By [F1], some class in $H(F_tC)$ maps to a nonzero class in $H(C)$. Since $f$ preserves filtration, its restriction sends $F_tC$ to $F_tD$. The square formed by these restricted maps and the inclusions into total complexes commutes, so the induced map sends that class to its image under $f_*$. The map $f_*$ is an isomorphism because $g_*$ is its homotopy inverse; hence the resulting class in $H(D)$ is nonzero. Therefore $H(F_tD)\to H(D)$ has nonzero image and $\tau(D)\le t$. [F1, given, algebra]

2.1 The same argument using the filtration-preserving map $g$ gives $\tau(C)\le\tau(D)$. Together with step 1.1 this yields $\tau(C)=\tau(D)$. [F1, step 1.1, algebra] ∎
