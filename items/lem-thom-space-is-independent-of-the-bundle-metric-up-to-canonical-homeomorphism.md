---
id: lem-thom-space-is-independent-of-the-bundle-metric-up-to-canonical-homeomorphism
kind: lemma
title: "Metric independence of the Thom space"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["def-disk-bundle-sphere-bundle-and-thom-space", "def-disk-sphere-and-thom-space-of-a-metric-vector-bundle"]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 §5"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "printed pp.194–196; disk/sphere models, Thom normalization; stabilization on p.196"
---

## Statement

For two supplied metrics $h,k$, radial rescaling gives a canonical based homeomorphism $\operatorname{Th}_h(E)\cong\operatorname{Th}_k(E)$. These maps compose exactly: $r_{k,l}r_{h,k}=r_{h,l}$.

## Facts & Assumptions

**Given:** Two continuous positive-definite fiber metrics on one vector bundle.

[F1] [[def-disk-bundle-sphere-bundle-and-thom-space]] fixes the quotient model and its based convention.

[F2] [[def-disk-sphere-and-thom-space-of-a-metric-vector-bundle]] defines the canonical radial map $r_{h,k}$, states that it preserves base and normalized radius, has inverse $r_{k,h}$, and descends to the quotient, and constructs the metric-interpolation isotopy $r_{h,h_t}$.

## Proof

1.1 Define $r_{h,k}(0_b)=0_b$ and $r_{h,k}(v)=(\|v\|_h/\|v\|_k)v$ for $v\neq0$, as in [F2]. Homogeneity gives $\|r_{h,k}v\|_k=\|v\|_h$, so $r_{h,k}$ maps the $h$-disk to the $k$-disk and the $h$-sphere to the $k$-sphere. The formula is continuous on $E\setminus\{0\}$, where both norms are continuous and nonzero, and it is continuous at $0$ because $\|r_{h,k}v\|_k=\|v\|_h\to0$; its inverse is $r_{k,h}$. [F1, F2, construct]

2.1 The pair homeomorphism descends to a based quotient homeomorphism $\operatorname{Th}_h(E)\to\operatorname{Th}_k(E)$. For $v\neq0$, substituting the formulas gives $$r_{k,l}\bigl(r_{h,k}(v)\bigr)=\frac{\|r_{h,k}(v)\|_k}{\|r_{h,k}(v)\|_l}r_{h,k}(v)=\frac{\|v\|_k}{\|v\|_l}\cdot\frac{\|v\|_h}{\|v\|_k}v=r_{h,l}(v),$$ and all three maps fix $0$, so the composition law holds exactly. The positive-definite family $h_t=(1-t)h+tk$ gives the radial isotopy $r_{h,h_t}$ from the identity to $r_{h,k}$. Empty bases and rank zero have identity maps with the conventions of [F1]. [F1, F2, step 1.1, algebra] ∎
