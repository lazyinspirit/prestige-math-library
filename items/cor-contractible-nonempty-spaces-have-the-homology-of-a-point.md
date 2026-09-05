---
id: cor-contractible-nonempty-spaces-have-the-homology-of-a-point
kind: corollary
title: "Contractible nonempty spaces have the homology of a point"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-nullhomotopic-map-and-contractible-space, cor-contractible-iff-identity-nullhomotopic, thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: frontier-30
---

## Statement

If $X$ is a nonempty contractible topological space, then for every $n\geq 0$
and every abelian group $G$,
$$H_n^{\mathrm{sing}}(X;G)\cong H_n^{\mathrm{sing}}(\ast;G),$$
where $\ast$ denotes a one-point space.

## Facts & Assumptions

**Given:** A nonempty contractible topological space $X$, an abelian group $G$,
and an integer $n\geq 0$.

[L1] For a nonempty space, contractibility is equivalent to the identity map
being nullhomotopic ([[cor-contractible-iff-identity-nullhomotopic]]).

[L2] A map that is homotopic to a constant map is nullhomotopic, and a space is
contractible exactly when every map out of it is nullhomotopic
([[def-nullhomotopic-map-and-contractible-space]]).

[L3] Homotopy equivalences induce isomorphisms on singular homology
([[thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the identity map on $X$ is homotopic to the constant map at some point $x_0\in X$. Let $p:X\to\ast$ be the unique map and let $i:\ast\to X$ send the point of $\ast$ to $x_0$. Then $i\circ p$ is the constant map at $x_0$, so $i\circ p\simeq\operatorname{id}_X$, while $p\circ i=\operatorname{id}_\ast$. Hence $X$ is homotopy equivalent to a point. [L1, L2, given]

2.1 Apply [L3] to the map $p:X\to\ast$. It induces an isomorphism on every singular homology group, which is exactly the displayed conclusion. [L3, step 1.1] ∎