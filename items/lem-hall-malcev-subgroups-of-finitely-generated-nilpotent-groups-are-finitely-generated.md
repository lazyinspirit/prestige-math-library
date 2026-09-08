---
id: lem-hall-malcev-subgroups-of-finitely-generated-nilpotent-groups-are-finitely-generated
kind: lemma
title: Subgroups of finitely generated nilpotent groups are finitely generated
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Druţu–Kapovich, Lectures on Geometric Group Theory (585-page draft)
      url: https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf
      locator: Theorem 10.40, printed p.285
status: draft
origin: pipeline
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
proof_strategy: direct
deps: ["lem-lower-central-quotients-of-finitely-generated-nilpotent-groups-are-finitely-generated-abelian", "lem-hall-malcev-integer-abelian-structure-and-rank", "prop-abelian-groups-are-z-modules"]
---
## Statement

Every subgroup $K$ of a finitely generated nilpotent group $G$ is finitely generated.

## Facts & Assumptions

**Given:** $\gamma_{c+1}(G)=1$ and $G$ is finitely generated.

[F1] Each lower-central factor is finitely generated abelian ([[lem-lower-central-quotients-of-finitely-generated-nilpotent-groups-are-finitely-generated-abelian]]).

[F2] Every subgroup of a finitely generated abelian group is finitely generated ([[lem-hall-malcev-integer-abelian-structure-and-rank]]).

## Proof

1.1 Put $K_i=K\cap\gamma_i(G)$. The homomorphism $K_i\to\gamma_i/\gamma_{i+1}$ has kernel $K_{i+1}$. Its image is a subgroup of a finitely generated abelian group, so has a finite generating list. Thus $K_i/K_{i+1}$ is finitely generated: explicitly its isomorphism to that image sends $xK_{i+1}$ to $x\gamma_{i+1}$, with injectivity given by the kernel calculation. [F1, F2]

2.1 Start with $K_{c+1}=1$. Lift a finite generating list of $K_i/K_{i+1}$ to $K_i$. For $x\in K_i$, a word $w$ in these lifts has coset $xK_{i+1}$, so $w^{-1}x\in K_{i+1}$. Consequently those lifts together with generators of $K_{i+1}$ generate $K_i$. There are finitely many layers, hence this gives finite generators of $K_1=K$. Empty factor lists require no lift, and $c=0$ gives $K=1$. [step 1.1] ∎

## Source notes

[Druţu–Kapovich, Lectures on Geometric Group Theory (585-page draft)](https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf), Theorem 10.40, printed p.285. Draft Theorem 10.40 is realized by the intersection series, using the local integer lemma rather than generic PID results.
