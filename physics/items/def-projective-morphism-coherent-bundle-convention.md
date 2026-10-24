---
id: def-projective-morphism-coherent-bundle-convention
kind: definition
title: "Projectivity via a coherent projective bundle"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-relatively-ample-invertible-sheaf
  - def-relative-proj-quasi-coherent-graded-algebra
  - def-projective-morphism-pre-proj
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-29.md"
      - "research/frontier-38-owner-30-alpha-batch-29-5a.md"
      - "research/frontier-38-owner-30-step5-hash-29-post-5a.json"
    content_sha256: "96198cf7d1f168c327d95e5cfbcc3119005ffe5e11092a8bec2cec414e3ac31f"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Nitsure, Construction of Hilbert and Quot Schemes, Section 5: Notions of Projectivity"
      url: "https://arxiv.org/pdf/math/0504590"
---

## Definition

On a locally Noetherian base $S$, use **coherent-projective-bundle projectivity** for a global closed immersion $X\hookrightarrow\mathbb P_S(E)=\operatorname{Proj}_S\operatorname{Sym}E$ with $E$ a coherent sheaf on $S$. The sheaf $E$ need not be locally free or have a globally bounded number of generators. This is the projectivity convention in this Hilbert packet. H-projectivity from [[def-projective-morphism-pre-proj]] is its special case with $E=\mathcal O_S^{n+1}$; no implication from the former to the latter is asserted. Mere local projective embeddings without a global projective-bundle embedding do not define the hypothesis here. A chosen relatively ample polarization $L$ ([[def-relatively-ample-invertible-sheaf]]) need not equal the pullback of $\mathcal O(1)$ for the embedding; that pullback gives an auxiliary global relatively very ample bundle $M$. No quasi-compactness assumption on $S$ is part of this definition.
