---
id: ex-barycentric-subdivision-of-an-edge-and-triangle
kind: example
title: "Barycentric subdivision of an edge and triangle"
status: draft
origin: pipeline
deps: ["def-barycentric-subdivision-of-an-abstract-simplicial-complex", "thm-barycentric-subdivision-realizes-homeomorphically"]
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
    - title: "C. R. F. Maunder, Algebraic Topology"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/maunder.pdf"
---

## Example

For the full edge on $\{a,b\}$, barycentric subdivision has three vertices and two edges. For the full triangle on $\{a,b,c\}$ it has seven vertices, twelve edges, and six triangles, with one empty face in each complex.

## Source locators

2.5.7–2.5.9 pp.49–51.


## Facts & Assumptions

[F1] Subdivision faces are strict chains of nonempty original faces. [[def-barycentric-subdivision-of-an-abstract-simplicial-complex]].

[F2] The barycentric realization identifies the subdivision with the original simplex. [[thm-barycentric-subdivision-realizes-homeomorphically]].


## Verification

**Given:** The full edge and full triangle, including all their faces.

1.1 The edge has nonempty faces $a,b,ab$, abbreviating braces. Its only length-two chains are $a<ab$ and $b<ab$, so the two subdivided edges meet at $b_{ab}=(a+b)/2$. There are three singleton chains and one empty chain. Thus its numbers of faces in dimensions $-1,0,1$ are $(1,3,2)$. [F1]

2.1 The triangle has face labels $a,b,c,ab,ac,bc,abc$. The maximal chains are $a<ab<abc$, $b<ab<abc$, $a<ac<abc$, $c<ac<abc$, $b<bc<abc$, and $c<bc<abc$. The comparable pairs are six vertex-edge pairs, three vertex-triangle pairs, and three edge-triangle pairs, giving twelve edges. The seven singleton chains and one empty chain give face counts $(1,7,12,6)$. Barycenters place these six triangles inside the original triangle and the barycentric homeomorphism identifies their union with it. For a vertex-free complex there is only the empty chain, so the counts reduce to $(1,0,0,0)$. [F1, F2, step 1.1] ∎

