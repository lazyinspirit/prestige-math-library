---
id: cex-a-boundary-spur-when-free-reduction-is-omitted
kind: counterexample
title: "A boundary spur when free reduction is omitted"
status: published
origin: pipeline
deps: [def-sc-toolkit-labelled-planar-disc-diagram, def-arc-reduction-and-combinatorial-curvature-of-a-disc-diagram]
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Touikan Lemma 3.4.3, zero-face case"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-17.html"
---

## Statement refuted

Every nonempty null boundary word of a diagram over a $C'(1/6)$ presentation has a shell, even without requiring free reduction.

## Facts & Assumptions

**Given:** The presentation $\langle a\mid\varnothing\rangle$, satisfying $C'(1/6)$ vacuously, and a single edge oriented from $u$ to $v$ labelled $a$, with no faces.

[F1] A finite tree is a zero-face diagram, and its outer walk traverses a bridge in both directions ([[def-sc-toolkit-labelled-planar-disc-diagram]]).

[F2] A spur tip has singleton link, no corners and curvature one ([[def-arc-reduction-and-combinatorial-curvature-of-a-disc-diagram]]).

## Counterexample

1.1 The single closed edge is finite, connected, planar and contractible, hence is a diagram by [F1]. Its face-label condition is vacuous. Its outer word from $u$ is $aa^{-1}$, a nonempty word freely reducing to the empty word and therefore null in the given free group. It is not freely reduced. [given, F1]

2.1 There are no faces, so there cannot be an exposed face or shell. Both endpoints have one edge germ and no corners, giving curvature one each by [F2], and the total is two. Thus positive curvature is entirely carried by spur tips, and the nonempty null boundary in step 1.1 refutes the assertion. [step 1.1, F2] ∎
