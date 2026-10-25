---
id: "fs-the-degree-of-a-proper-map-is-the-number-of-points-in-a-regular-fibre"
kind: "false-statement"
title: "Degree is the unsigned number of points in a regular fibre"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-regular-value-formula-for-compact-support-degree","thm-heine-borel-rn","thm-compact-subset-of-a-hausdorff-space-is-closed"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Robbin–Salamon, Introduction to Differential Topology, Theorem 5.4.1, pp.191–192
      url: https://zaco.au/lib/math/text/differential-geometry/difftop.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "counterexample"
---

## Statement

**False.** The degree of a proper smooth map equals the unsigned number of points in any regular fibre.

## Facts & Assumptions

[F1] [[thm-regular-value-formula-for-compact-support-degree]] says that a supplied regular fibre is finite and that degree is the sum of its local orientation signs, not its cardinality.

[F2] [[thm-heine-borel-rn]] characterizes compact subsets of the real line as closed and bounded; [[thm-compact-subset-of-a-hausdorff-space-is-closed]] makes every compact subset of $\mathbb R$ closed.

## Refutation

**Given:** Give source and target $\mathbb R$ their standard orientations and let $F:\mathbb R\to\mathbb R$ be $F(x)=x^2$.

1.1 The map is proper. If $K\subseteq\mathbb R$ is compact, [F2] makes it closed and bounded, say $|y|\le B$ on $K$. Then $F^{-1}(K)$ is closed by continuity and is contained in $[-\sqrt B,\sqrt B]$ when $B\ge0$; if $K$ is empty its inverse image is empty. Thus [F2] makes $F^{-1}(K)$ compact. [F2, given]

1.2 The value $1$ has exactly the two preimages $-1$ and $1$. Since $F'(x)=2x$, both are regular, but their local orientation signs are $-1$ at $-1$ and $+1$ at $1$. Hence [F1] gives $$\deg(F)=(-1)+(+1)=0,$$ whereas the unsigned fibre cardinality is $2$. [F1, given, algebra]

2.1 This explicit witness disproves the claimed equality. A singleton fibre whose local sign is $+1$ would make the two numbers agree, while an empty regular fibre gives both zero; those special cases do not remove the cancellation in step 1.2. The example is one-dimensional, boundaryless, nonempty, and uses no selections or choice principle. [F1, step 1.1, step 1.2] ∎
