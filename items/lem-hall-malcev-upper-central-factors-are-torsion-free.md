---
id: lem-hall-malcev-upper-central-factors-are-torsion-free
kind: lemma
title: Upper-central factors of a torsion-free nilpotent group
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Druţu–Kapovich, Lectures on Geometric Group Theory (585-page draft)
      url: https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf
      locator: Lemma 10.51, printed p.288
status: draft
origin: pipeline
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
proof_strategy: direct
deps: ["lem-hall-malcev-commutator-product-identities", "thm-upper-and-lower-central-characterizations-of-nilpotence"]
---
## Statement

If a nilpotent group $G$ has torsion-free center, all upper-central factors $Z_{i+1}(G)/Z_i(G)$ are torsion-free, and $G$ is torsion-free. Here $Z_0=1$ and $Z_{i+1}/Z_i=Z(G/Z_i)$.

## Facts & Assumptions

**Given:** $G$ is nilpotent with torsion-free $Z_1=Z(G)$.

[F1] A commutator pairing with central values is multiplicative ([[lem-hall-malcev-commutator-product-identities]]).

[F2] For some finite $c$, $Z_c(G)=G$ ([[thm-upper-and-lower-central-characterizations-of-nilpotence]]).

## Proof

1.1 For each fixed $g\in G$, define $\phi_g:Z_2/Z_1\to Z_1$ by $\phi_g(yZ_1)=[y,g]$. The value lies in $Z_1$ by the definition of $Z_2$; multiplying $y$ by a central element does not change it. The product identity, with central values, proves $\phi_g$ is a homomorphism. If $yZ_1$ has finite order $m>0$, then $\phi_g(yZ_1)^m=1$. Torsion-freeness of $Z_1$ implies $[y,g]=1$ for every $g$, hence $y\in Z_1$. Thus $Z_2/Z_1$ is torsion-free. [F1, given]

2.1 Induct on an upper-central length $c$. For $c=0$ the group is trivial; for $c=1$ the claim is the assumed torsion-freeness of the center. For $c\ge2$, the group $\bar G=G/Z_1$ has length at most $c-1$ and center $Z_2/Z_1$, torsion-free by step 1.1. Recursion on the definitions gives $Z_j(\bar G)=Z_{j+1}(G)/Z_1$ for $j\ge0$: after quotienting this subgroup, its next center is exactly the defining next upper-center factor. The induction hypothesis therefore proves torsion-freeness of $Z_{j+2}(G)/Z_{j+1}(G)$; the first factor is torsion-free by assumption. [F2, step 1.1]

3.1 If $x^m=1$ with $m>0$, its image in $G/Z_{c-1}$ is torsion and therefore trivial, so $x\in Z_{c-1}$. Repeating down the torsion-free factors gives $x\in Z_0=1$. Factors after $Z_c$ are trivial. This proves both conclusions with the stated ascending indices. [step 2.1] ∎

## Source notes

[Druţu–Kapovich, Lectures on Geometric Group Theory (585-page draft)](https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf), Lemma 10.51, printed p.288. Draft Lemma 10.51 supplies the detection argument; the printed ascending-index slips are corrected explicitly.
