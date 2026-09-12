---
id: lem-first-main-theorem-injectivity
kind: lemma
title: Distinct local full-defect blocks induce to distinct global blocks
deps: ["lem-first-main-theorem-surjectivity", "lem-first-main-theorem-local-block-existence", "lem-block-induction-exists-under-centralizer-containment", "thm-modular-block-central-characters-correspond-to-blocks"]
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
    - title: Saunders, Modular Representation Theory, Theorem 5.16
      url: https://jpsaunders.uk/ModRep/NotesWebsite.pdf
    - title: Farrell–Lassueur, Modular Representation Theory of Finite Groups, Theorem
        40.4, §40 (printed pp.8–12 of upload17)
      url: https://www.niamhfarrell.com/uploads/6/9/2/8/69286633/upload17.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Fix $D\le G$ and $N=N_G(D)$. If blocks $b,c$ of $kN$ have defect group $D$ and $b^G=c^G$, then $b=c$. No choice assumption is needed.

## Facts & Assumptions

**Given:** The stated blocks and common induced block $B$.

[F1] [[lem-first-main-theorem-surjectivity]] proves $b^G$ is defined and has defect group $D$.

[F2] [[lem-first-main-theorem-local-block-existence]] proves a global defect-$D$ block has exactly one local inducing block.

[F3] [[lem-block-induction-exists-under-centralizer-containment]] gives the local-to-global central-character criterion.

[F4] [[thm-modular-block-central-characters-correspond-to-blocks]] identifies a local block by its value one on its primitive idempotent.

## Proof

1.1 F1 applies to $b$ and gives that the common block $B$ has defect group $D$. Therefore F2 applies to this actual global block and subgroup, giving one primitive local idempotent $e=\operatorname{Br}_D(f)$, where $f$ is the idempotent of $B$. [F1, F2, algebra]

2.1 Both induced characters take value one at $f$. By F3, $\lambda_b(e)=\lambda_c(e)=1$. Since $e$ is primitive by step 1.1, F4 forces both local blocks to be $kNe$. Hence $b=c$. This proves injectivity even if the set of such blocks has zero or one element. For $D=1$ or $N=G$ it is the identity case of F2. Only finite idempotent identifications occur; no claim about the vertex of an arbitrary restriction summand is used. [F2, F3, F4, step 1.1, algebra] ∎
