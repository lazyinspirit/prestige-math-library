---
id: lem-hall-malcev-finite-normal-quotients-preserve-lower-central-ranks
kind: lemma
title: Finite normal quotients preserve lower-central ranks
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Druţu–Kapovich, Geometric Group Theory (837-page edition)
      url: https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf
      locator: Theorem 14.26 reduction, printed p.511; the exact rank verification is supplied locally
status: published
origin: pipeline
verification:
  audited: 2026-09-09
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
proof_strategy: direct
deps: ["lem-lower-central-quotients-of-finitely-generated-nilpotent-groups-are-finitely-generated-abelian", "def-bass-guivarch-dimension", "thm-subgroups-quotients-and-finite-products-of-nilpotent-groups", "lem-hall-malcev-integer-abelian-structure-and-rank"]
---
## Statement

If $F$ is finite normal in a finitely generated nilpotent group $G$, then $D(G/F)=D(G)$ and $h(G/F)=h(G)$. If $G$ has class $c\ge1$ and $H=\gamma_c(G)$, its quotient has the same factors in layers $i<c$, so $D(G/H)=D(G)-cr_c$.

## Facts & Assumptions

**Given:** $q:G\to G/F$ is the quotient homomorphism; for the last assertion $H=\gamma_c(G)$.

[F1] The factors in question are finitely generated abelian ([[lem-lower-central-quotients-of-finitely-generated-nilpotent-groups-are-finitely-generated-abelian]]).

[F2] Quotients preserve nilpotency ([[thm-subgroups-quotients-and-finite-products-of-nilpotent-groups]]).

[F3] Surjections of finitely generated abelian groups with finite kernel preserve free rank ([[lem-hall-malcev-integer-abelian-structure-and-rank]]).

[F4] $D$ and $h$ are the weighted and unweighted sums of factor ranks ([[def-bass-guivarch-dimension]]).

## Proof

1.1 Surjectivity gives $q(\gamma_1G)=G/F$. If $q(\gamma_iG)=\gamma_i(G/F)$, then $q([g,u])=[q(g),q(u)]$ shows that the images of the generators of $\gamma_{i+1}G$ generate exactly $\gamma_{i+1}(G/F)$. This proves equality for every $i$ and gives a surjection on each factor. Both source and target factors are finitely generated abelian, since a quotient of a finite generating list is finite and the quotient group is nilpotent. [F1, F2, given]

2.1 Its kernel in layer $i$ consists of $x\gamma_{i+1}$ with $x\in\gamma_i\cap F\gamma_{i+1}$. Write $x=fy$, $f\in F,y\in\gamma_{i+1}$. Then $f=xy^{-1}\in F\cap\gamma_i$, and $x\gamma_{i+1}=f\gamma_{i+1}$. Conversely every such $f$ maps to the identity. The kernel is therefore the image of $F\cap\gamma_i$, a finite set. Finite-kernel rank preservation gives equal ranks layer by layer. Summing them with weights $i$ or $1$ proves equality of $D$ and $h$. [F3, F4, step 1.1]

3.1 For $H=\gamma_c$ and $i<c$, $H\le\gamma_{i+1}$, so the map $\gamma_i/\gamma_{i+1}\to(\gamma_i/H)/(\gamma_{i+1}/H)$ is bijective: the kernel is zero and every coset lifts. In layer $c$ the quotient factor is trivial, and all later factors of both groups are trivial. Thus its dimension loses exactly $cr_c$. For $c=1$ the quotient is $G/G=1$ and this says $0=D(G)-r_1$. For $G=1$, the first assertions are equality of empty sums. [F4, step 1.1] ∎

## Source notes

[Druţu–Kapovich, Geometric Group Theory (837-page edition)](https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf), Theorem 14.26 reduction, printed p.511; the exact rank verification is supplied locally. Revised Theorem 14.26 motivates the reduction. The finite factor kernel is proved as an image of F intersect gamma_i, not incorrectly as a subgroup of F.
