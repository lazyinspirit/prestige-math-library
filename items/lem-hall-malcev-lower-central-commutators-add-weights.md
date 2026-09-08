---
id: lem-hall-malcev-lower-central-commutators-add-weights
kind: lemma
title: Lower-central commutators add weights
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Druţu–Kapovich, Lectures on Geometric Group Theory (585-page draft)
      url: https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf
      locator: Proposition 10.45, printed p.286, with Lemma 10.25
status: draft
origin: pipeline
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
proof_strategy: direct
deps: ["lem-hall-malcev-three-subgroup-containment", "lem-hall-malcev-commutator-product-identities"]
---
## Statement

For every group $G$ and $i,j\ge1$, $[\gamma_i(G),\gamma_j(G)]\le\gamma_{i+j}(G)$. The rule $(x\gamma_{i+1},y\gamma_{j+1})\mapsto[x,y]\gamma_{i+j+1}$ is a well-defined biadditive map between the abelian lower-central factors.

## Facts & Assumptions

**Given:** $\gamma_1=G$, $\gamma_{i+1}=[G,\gamma_i]$; commutators use $xyx^{-1}y^{-1}$.

[F1] For normal subgroups, $[\, [A,B],C]\le[\, [B,C],A][\, [C,A],B]$ ([[lem-hall-malcev-three-subgroup-containment]]).

[F2] Product commutators are products of conjugate commutators ([[lem-hall-malcev-commutator-product-identities]]).

## Proof

1.1 All $\gamma_i$ are characteristic: an automorphism preserving $\gamma_i$ preserves the generating commutators for $[G,\gamma_i]$; start at $G$. Also $[U,V]=[V,U]$ because $[u,v]^{-1}=[v,u]$. For $i=1$, $[G,\gamma_j]=\gamma_{j+1}$ is the required inclusion. [F2, given]

2.1 Induct on $i$, uniformly for all $j\ge1$. Normality and the three-subgroup containment give $[\gamma_{i+1},\gamma_j]\le[\gamma_{j+1},\gamma_i][\, [\gamma_j,\gamma_i],G]$. By symmetry and the induction hypothesis these two factors lie respectively in $\gamma_{i+j+1}$ and $[\gamma_{i+j},G]=\gamma_{i+j+1}$. This proves the inclusion for $i+1$ and every $j$. [F1, step 1.1]

3.1 Each $\gamma_i/\gamma_{i+1}$ is central in $G/\gamma_{i+1}$ and therefore abelian. Replacing $x\in\gamma_i$ by $xu$ with $u\in\gamma_{i+1}$ changes $[x,y]$ only by commutators of weight at least $i+j+1$ and conjugations of $[x,y]$. The latter also change it only by $[G,\gamma_{i+j}]\le\gamma_{i+j+1}$. The same argument replaces $y$ by $yv$, $v\in\gamma_{j+1}$. Thus the displayed map is independent of representatives. [F2, step 2.1]

4.1 Modulo $\gamma_{i+j+1}$ the conjugations in both product identities disappear, so the pairing sends a product in either input to the product of its values. Identity inputs give identity output; inverses give inverse outputs by applying the product rule to $xx^{-1}$. This is biadditivity for the abelian factors, for all positive indices, also when any factor is trivial. [F2, step 3.1] ∎

## Source notes

[Druţu–Kapovich, Lectures on Geometric Group Theory (585-page draft)](https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf), Proposition 10.45, printed p.286, with Lemma 10.25. Uniform induction follows draft Proposition 10.45. Representative independence and negative-input rules are derived explicitly.
