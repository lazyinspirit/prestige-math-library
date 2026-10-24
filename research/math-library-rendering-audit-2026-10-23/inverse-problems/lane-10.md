# Inverse Problems visual audit — lane 10

## Scope and coverage

Reviewed all 52 assigned items and all 112 screenshot tiles. Every PNG was opened individually with `tools.view_image` at original resolution. Source, frozen snapshot, local HTML, and screenshot hashes match their manifests; no drift or unreviewed tiles were found.

Per-item and per-tile hashes, reviewed sections, KaTeX/TikZ metadata, findings, existing-diagram checks, and limitations are recorded in [lane-10.json](lane-10.json). Math and typography render throughout the previews. No raw ASCII math, clipping, unintended reference-title leaks, or Scratch disclosure issue was found. Wikilink titles render as separate blocks by design.

## Confirmed findings

- `alg-ip-measurement-guided-diffusion-reconstruction`, source lines 46–65: the flowchart is replaced by a diagram-failure box containing raw TikZ. The intended flow shows initialization, correction and kernel steps, optional projection and admissibility check, the `k=1` return versus `k>1` loop, and failure exits.
- `ex-ip-approximate-cnn-mmse-denoiser`, source lines 63–79: the network TikZ block appears as literal source in the preview. The intended network is input `z`, convolution weight `a/sigma^2`, tanh, scale `a` and bias `b`, then `\widetilde D_\sigma(z)`. The source uses tilde fences around the TikZ block.

## Diagram review

The multicast tree and state-similarity commuting square render correctly. Edge probabilities `p_0,p_1,p_2` match the shared link and two branch links. The square’s `T^{-1}` vertical maps and `A, A-hat` horizontal maps agree with `T^{-1}A=A-hat T^{-1}`. No additional missing diagram candidate was clearly warranted by the assigned source.

## Limitations

These were local Chromium ItemBody previews, not live routes. The review covered rendering and diagram opportunities, not a complete mathematical audit. No item, application, build, or publication files were modified.
