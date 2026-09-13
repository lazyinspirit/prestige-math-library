---
id: prop-the-vertex-group-of-the-fundamental-groupoid-is-the-published-fundamental-group
kind: proposition
title: Vertex groups recover the fundamental group
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-fundamental-groupoid-of-a-space, def-based-loops-and-fundamental-group, thm-fundamental-group-laws]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Hatcher, Algebraic Topology, §3.H, pp.327–334
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Statement

For every $x\in X$, reversal gives a canonical group isomorphism
$$\rho_x:\pi_1(X,x)\xrightarrow{\sim}\operatorname{Aut}_{\Pi_1(X)}(x),\qquad \rho_x([\alpha])=[\bar\alpha].$$
Here $\pi_1(X,x)$ has the published first-loop-first multiplication, while the
automorphism group has categorical composition. The identity map on the
underlying loop classes is an anti-isomorphism, not an isomorphism.

## Facts & Assumptions

**Given:** A topological space $X$ and a point $x\in X$.

[F1] [[def-based-loops-and-fundamental-group]] defines the loop-class set,
the proposed product $[\alpha][\beta]=[\alpha*\beta]$, the constant loop
$c_x$, and reversal $\bar\alpha$.

[F2] [[thm-fundamental-group-laws]] proves that this product is well defined
and is a group law with identity $[c_x]$ and inverse $[\bar\alpha]$.

[F3] [[def-fundamental-groupoid-of-a-space]] has the same endpoint-fixed loop
classes at $x$, but $[\gamma]\circ[\delta]=[\delta*\gamma]$ in the vertex
automorphism group.

## Proof

**Proof technique:** direct.

1.1 Reversal respects endpoint-fixed path homotopy, is its own inverse on classes, and sends $[c_x]$ to itself. Hence $\rho_x$ is a canonical bijection that preserves the identity and inverses. [F1, F2, F3]

1.2 Reversing a concatenation gives $\overline{\alpha*\beta}=\bar\beta*\bar\alpha$ up to the standard endpoint-fixed reparametrization. By [F3], $\rho_x([\alpha])\circ\rho_x([\beta])=[\bar\alpha]\circ[\bar\beta]=[\bar\beta*\bar\alpha]=\rho_x([\alpha][\beta])$. Thus $\rho_x$ is a homomorphism. [F1, F2, F3]

2.1 The bijective homomorphism in steps 1.1–1.2 is the asserted group isomorphism. Without reversal, [F3] gives $[\alpha]\circ[\beta]=[\beta*\alpha]$, which proves the final anti-isomorphism warning as well. [F2, F3, step 1.1, step 1.2] ∎
