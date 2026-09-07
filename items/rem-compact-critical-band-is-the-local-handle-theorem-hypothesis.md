---
id: "rem-compact-critical-band-is-the-local-handle-theorem-hypothesis"
kind: "remark"
title: "Compact critical band is the local handle theorem hypothesis"
deps: ["thm-regular-interval-diffeomorphism", "thm-one-critical-point-handle-attachment"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      title: "Audin–Damian, Morse Theory and Floer Homology"
status: "draft"
origin: "pipeline"
proof_strategy: "remark"
---

## Remark

The hypotheses of [[thm-regular-interval-diffeomorphism]] and [[thm-one-critical-point-handle-attachment]] concern the compactness of the closed band $f^{-1}([a,b])$, not compactness of $M$ or of every sublevel. A proper function has this compact-band property because $[a,b]$ is compact. Without compactness, absence of critical points alone does not guarantee a level-preserving product: a trajectory may leave the manifold in finite time. The companion page gives an explicit punctured-plane example.
