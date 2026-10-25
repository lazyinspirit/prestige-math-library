---
id: "ex-a-local-geodesic-constant-in-a-cayley-graph"
kind: "example"
title: "A local geodesic constant in a cayley graph"
deps: ["lem-hg-toolkit-free-cayley-tree-from-reduced-words", "lem-local-geodesics-in-a-hyperbolic-space-are-uniform-quasi-geodesics"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Druţu–Kapovich §9.2, free-tree specialization"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In the unit-edge Cayley tree of a free group on a finite alphabet, every reduced edge path, parametrized by arc length, is geodesic on every real subinterval. It is therefore globally $(1,0)$-quasi-geodesic and $k$-local geodesic for every $k\ge0$.

## Facts & Assumptions

**Given:** Such a reduced edge path $q:I\to T$.

[F1] The tree construction and real-subinterval geodesicity are proved in [[lem-hg-toolkit-free-cayley-tree-from-reduced-words]].

[F2] The zero-slim positive-locality conclusion is included in [[lem-local-geodesics-in-a-hyperbolic-space-are-uniform-quasi-geodesics]].

## Verification

1.1 By F1, for every $s\le t$ in $I$ the path between them is the unique geodesic, of length $t-s$. Hence $d(q(s),q(t))=t-s$. The two $(1,0)$ inequalities are both this equality, and restricting to $t-s\le k$ proves locality for each $k$. In particular this supplies a concrete zero-slim instance of F2 for any positive radius, such as $k=1$. [F1, F2, given]

2.1 For example, in the free group on $a,b$ the reduced path labelled $aba^{-1}b$ has length $4$ and endpoint word length $4$. Its subpath between parameters $1/2$ and $13/4$ has distance $13/4-1/2=11/4$, even though both endpoints lie inside edges. A one-letter path has endpoint distance $1$, and a zero-length restriction has distance $0$. These are the same equality from step 1.1, without additive error. [step 1.1] ∎
