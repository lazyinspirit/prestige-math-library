---
id: ex-a-three-shell-after-arc-reduction
kind: example
title: "A three shell after arc reduction"
status: draft
origin: pipeline
deps: [def-arc-reduction-and-combinatorial-curvature-of-a-disc-diagram, lem-boundary-spur-or-at-most-three-shell-from-curvature]
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Touikan Definition 3.5.3 and Figure 3.5.4"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-18.html"
---

## Example

A four-arc face has one exterior arc and three internal arcs. If its perimeter is $N$ and the internal lengths $a,b,c$ are each less than $N/6$, its exterior length exceeds $N/2$. Concretely use $N=19$ and $a=b=c=3$, so the exterior arc has length $10$.

This is a local shell length ledger. It does not assert a globally labelled $C'(1/6)$ presentation realizing these lengths.

## Facts & Assumptions

**Given:** The four-arc face, with perimeter $N>0$ and positive internal lengths $a,b,c<N/6$.

[F1] Arc reduction preserves word lengths and boundary incidence counts ([[def-arc-reduction-and-combinatorial-curvature-of-a-disc-diagram]]).

[F2] A three-shell consists of one exterior arc and three complementary internal arcs ([[lem-boundary-spur-or-at-most-three-shell-from-curvature]]).

## Verification

1.1 By [F1] and the three-shell description [F2], the exterior length is $N-a-b-c$. The hypotheses give $a+b+c<3N/6=N/2$, hence $N-a-b-c>N/2$. Equality is excluded because all three piece bounds are strict. [given, F1, F2, algebra]

2.1 For the displayed instance, $3<19/6$ because $18<19$, and $19-3-3-3=10>19/2$. Thus the interior part has length nine and the exposed part length ten, verifying the asserted instance. [step 1.1, algebra] ∎

## Diagram

```tikz
\begin{tikzpicture}
\draw[very thick] (0,0) -- node[above] {exterior: 10} (4,0);
\draw (4,0) -- node[right] {3} (3,-2) -- node[below] {3} (1,-2) -- node[left] {3} (0,0);
\end{tikzpicture}
```
