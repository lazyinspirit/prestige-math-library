---
id: rem-attention-io-model-and-roundoff
kind: remark
title: "The scalar workspace result is not a hardware I/O bound"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - alg-exact-tiled-softmax-attention
  - thm-tiled-attention-workspace-and-work
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Tri Dao et al., FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness, §§2.1–3.2 and Appendix B"
      url: "https://arxiv.org/pdf/2205.14135"
---

## Remarks

The workspace theorem counts scalar storage and operations for the explicitly defined real-arithmetic procedure. It does not count reads and writes between GPU high-bandwidth memory and on-chip SRAM, and it gives no hardware speedup claim. The FlashAttention paper's $\Theta(n^2d^2/M)$ HBM-access result assumes its stated memory model, block schedule, and range $d\le M\le nd$; its endpoint input-size argument is not a lower bound for every fixed memory size. Neither claim follows from the scalar workspace theorem here.

The maximum shift makes every exact-real exponent argument $s_{ij}-m_i$ nonpositive, but this does not specify rounded arithmetic or rule out underflow of very small finite-precision terms. Different floating-point accumulation orders can return different bit patterns. The base procedure includes no dropout; if an extension uses dropout, its fixed realized mask must be reused in the reverse pass because a different mask changes the differentiated function.

## Remarks references

[[thm-tiled-attention-workspace-and-work|The scalar operation and workspace theorem proved for this algorithm]]

[Dao et al., §§2.1–3.2 and Appendix B: the paper's hardware-memory model and recomputed backward pass](https://arxiv.org/pdf/2205.14135)
