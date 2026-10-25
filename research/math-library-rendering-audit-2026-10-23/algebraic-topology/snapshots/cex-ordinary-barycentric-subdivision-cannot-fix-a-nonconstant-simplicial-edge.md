---
id: cex-ordinary-barycentric-subdivision-cannot-fix-a-nonconstant-simplicial-edge
kind: counterexample
title: "Ordinary barycentric subdivision cannot fix a nonconstant simplicial edge"
status: published
origin: pipeline
deps: ["def-barycentric-subdivision-of-an-abstract-simplicial-complex", "thm-relative-simplicial-approximation-after-subdivision"]
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
    - title: "E. C. Zeeman, Relative simplicial approximation (1964)"
      url: "https://www.lms.ac.uk/sites/default/files/1964%20Relative%20simplicial%20approximation.pdf"
---

## Statement refuted

False assertion: ordinary iterated barycentric subdivision can always give a simplicial map to the unchanged target agreeing pointwise with an already simplicial map on a fixed subcomplex. Already an edge mapped identically to an unsubdivided target edge makes this impossible for every $r\geq1$.

## Source locators

Opening warning pp.39–40; elementary vertex obstruction.


## Facts & Assumptions

[F1] The edge face becomes a subdivision vertex and singleton vertices persist. [[def-barycentric-subdivision-of-an-abstract-simplicial-complex]].

[F2] Relative subdivision admits a map fixed on the simplicial subcomplex. [[thm-relative-simplicial-approximation-after-subdivision]].


## Counterexample

**Given:** Take $K=A$ to be the full edge $[0,1]$, take the target to be the same unsubdivided edge, and let $f(x)=x$.

1.1 The identity is continuous and simplicial on all of $A$. In $\operatorname{sd}K$ the nonempty edge face supplies the midpoint $m=1/2$ as a vertex. Every subsequent barycentric subdivision retains that geometric point as a singleton-face vertex, so $m$ is a vertex of $\operatorname{sd}^rK$ for every $r\geq1$. [F1]

2.1 A simplicial map to the unchanged target must send $m$ to the target vertex $0$ or $1$. Pointwise agreement on $|A|$ instead requires $g(m)=f(m)=1/2$, impossible. More generally any source containing a fixed edge mapped identically to a target edge has the same obstruction by restricting to its midpoint. Relative derived subdivision avoids it: for $A=K$, $D_A^rK=K$, so the identity itself is simplicial and fixed throughout, as allowed by the relative theorem. [F2, step 1.1] ∎
