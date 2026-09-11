---
id: "ex-morse-stability-in-a-tree"
kind: "example"
title: "Morse stability in a tree"
deps: ["lem-geodesic-triangles-in-trees-are-tripods", "def-hg-toolkit-local-geodesics-and-hausdorff-control"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Druţu–Kapovich §9.2 and Theorem 9.38; tree specialization"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In a geometric tree, a geodesic segment is its unique endpoint geodesic and has Hausdorff distance zero from it. If an arc-length path travels distance $a\ge0$ out a branch and returns to the same point, and is a $(\lambda,\varepsilon)$-quasi-geodesic, then $a\le\lambda\varepsilon/2$.

## Facts & Assumptions

**Given:** The indicated segment or excursion, with its length parametrization, $\lambda\ge1$ and $\varepsilon\ge0$.

[F1] Unique geodesics in trees are proved in [[lem-geodesic-triangles-in-trees-are-tripods]].

[F2] Hausdorff distance and the two quasi-geodesic inequalities are defined in [[def-hg-toolkit-local-geodesics-and-hausdorff-control]].

## Verification

1.1 By F1 the endpoint geodesic has the same image as the given segment. Each point in either image belongs to the other image, hence has distance zero from it. Both suprema defining their Hausdorff distance are zero by F2, including for a constant segment. [F1, F2, given]

2.1 If the excursion begins at parameter $s$, its return occurs at $t=s+2a$ and $q(s)=q(t)$. The lower quasi-geodesic inequality in F2 gives $0=d(q(s),q(t))\ge2a/\lambda-\varepsilon$. Multiplying by $\lambda/2>0$ yields $a\le\lambda\varepsilon/2$. Thus for instance a $(2,3)$-quasi-geodesic cannot have such an excursion of length outwards exceeding $3$; for $\varepsilon=0$ every such excursion has $a=0$. This is a necessary bound, not an assertion that every path meeting it is quasi-geodesic. [F2, given, algebra] ∎
