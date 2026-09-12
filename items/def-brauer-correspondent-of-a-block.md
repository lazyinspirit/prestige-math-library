---
id: def-brauer-correspondent-of-a-block
kind: definition
title: The Brauer correspondent of a block
deps: ["thm-brauer-first-main-theorem"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Martínez, Representation Theory of Finite Groups, Theorem 4.10, pp. 27–28
      url: https://www.uv.es/jomimar8/pdfs/course%20notes.pdf
    - title: Craven, The Brauer Correspondence, Definition following Theorem 1.12, p.
        10
      url: https://web.mat.bham.ac.uk/D.A.Craven/docs/theses/2004diss.pdf
status: draft
origin: pipeline
---

## Definition

Fix an actual defect group $D$ of a block $B$ of $kG$. By [[thm-brauer-first-main-theorem]], there is a unique block $b$ of $kN_G(D)$ having defect group $D$ and satisfying $b^G=B$. It is the **Brauer correspondent of $B$ at $D$**. Existence and uniqueness are the already proved bijection, so the notation does not choose an arbitrary block.

Replacing $D$ by $gDg^{-1}$ transports $b$ to ${}^g b$, by the theorem's equivariance. Thus the actual subgroup is part of the input, and passing to a defect conjugacy class gives the construction only up to the corresponding conjugation. If $N_G(D)=G$, including $D=1$, the correspondent is $B$ itself. The block bijection used here has a choice-free proof; no AC is needed for this definition.
