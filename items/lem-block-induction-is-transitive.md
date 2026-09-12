---
id: lem-block-induction-is-transitive
kind: lemma
title: Block induction is transitive when both stages are defined
deps: ["def-induced-block-from-a-subgroup"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Saunders, Modular Representation Theory, Lemma 5.14(ii)
      url: https://jpsaunders.uk/ModRep/NotesWebsite.pdf
    - title: Farrell–Lassueur, Modular Representation Theory of Finite Groups, Proposition
        40.3(ii), §40 (printed pp.8–12 of upload17)
      url: https://www.niamhfarrell.com/uploads/6/9/2/8/69286633/upload17.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

For $K\le H\le G$ and a block $c$ of $kK$, if all three blocks $c^H$, $(c^H)^G$ and $c^G$ are defined, then $c^G=(c^H)^G$.

## Facts & Assumptions

**Given:** The stated subgroup chain and all three defined induced blocks.

[F1] [[def-induced-block-from-a-subgroup]] defines induction by a unique block with a split restriction summand.

## Proof

1.1 Put $b=c^H$ and $B=b^G$. By F1 there are split inclusions and retractions $i:c\to\operatorname{Res}_{K\times K}b$, $r$ back, and $j:b\to\operatorname{Res}_{H\times H}B$, $s$ back, with $ri=1_c$ and $sj=1_b$. Restricting $j,s$ to $K\times K$ retains their composite identity. Therefore $(\operatorname{Res}j)i$ and $r(\operatorname{Res}s)$ have composite $1_c$, exhibiting $c$ as a summand of $\operatorname{Res}_{K\times K}B$. [F1, algebra]

2.1 Since $c^G$ is defined, F1 makes it the unique global block with this summand property. Step 1.1 proves that $B$ has that property, so $c^G=B=(c^H)^G$. The same map composition works when two or all three groups coincide. The proof assumes the existence of all three blocks and does not deduce the third definedness from the first two. It composes finitely many given maps and uses no AC. [F1, step 1.1, algebra] ∎
