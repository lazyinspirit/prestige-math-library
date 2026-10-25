---
id: thm-groups-of-finite-integral-cohomological-dimension-are-torsion-free
kind: theorem
title: "Finite integral cohomological dimension implies torsion-free"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-cohomological-dimension-of-a-group, thm-group-cohomological-dimension-is-detected-by-cohomology-vanishing, lem-the-group-ring-is-free-over-a-subgroup-ring]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Löh, Corollary 1.7.3"
      url: "https://loeh.app.ur.de/teaching/grouphom_ss19/lecture_notes.pdf"
---

## Statement

If $\operatorname{cd}_{\mathbb Z}G<\infty$, then $G$ is torsion-free.

## Proof

**Given:** A finite projective resolution of the trivial $\mathbb Z[G]$-module.

1.1 If $g\in G$ has finite order $m>1$, restrict the resolution to $C=\langle g\rangle$; subgroup freeness preserves projectives, so $\operatorname{cd}_{\mathbb Z}C<\infty$. [given]

2.1 In $\mathbb Z[C]$, the alternating maps $g-1$ and $N=1+g+\cdots+g^{m-1}$ form a periodic free resolution: $(g-1)N=N(g-1)=0$, and coefficient comparison gives the two kernels as the two images. With trivial coefficients $\mathbb Z/m$, its Hom complex has zero differentials, so $H^q(C;\mathbb Z/m)\ne0$ for arbitrarily large $q$. This contradicts finite cohomological dimension. [step 1.1] ∎
