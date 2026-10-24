---
id: def-thom-diagonal-and-zero-section-collapse
kind: definition
title: Thom diagonal and zero-section collapse
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-disk-sphere-and-thom-space-of-a-metric-vector-bundle, def-vector-bundle-map-section-subbundle-and-isomorphism, thm-quotient-universal-property]
proof_strategy: not-applicable
verification:
  audited: 2026-09-14
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 §5"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "Thom diagonal, printed pp.194–195"
---

## Definition

For a metric bundle $\xi\to B$, define on the disk bundle
$$v\longmapsto \pi(v)\wedge[v]\in B_+\wedge\operatorname{Th}(\xi).$$
Every $v\in S(\xi)$ maps to the smash-product basepoint, independently of its
base coordinate.  The quotient universal property therefore gives the
**Thom diagonal**
$$\delta_\xi:\operatorname{Th}(\xi)\longrightarrow B_+\wedge\operatorname{Th}(\xi);\quad [v]\longmapsto\pi(v)\wedge[v].$$

The **zero section** is $s:B\to D(\xi)$, $s(b)=0_b$.  It is continuous in
every vector-bundle chart and is a section of $\pi$.

If an embedding $i:B\hookrightarrow M$ is supplied with tubular data consisting
of an embedding $e:D(\xi)\to M$ satisfying $e\circ s=i$ and that is a
homeomorphism onto a closed
neighborhood $K$, carries the interior of $D(\xi)$ onto an open neighborhood
$N$ of $B$, and carries $S(\xi)$ onto $K\setminus N$, the associated
**collapse** is the based map
$$c:M_+\longrightarrow\operatorname{Th}(\xi)$$
that sends $x\in K$ to $[e^{-1}(x)]$ and sends $M\setminus N$ and the disjoint
basepoint to the Thom basepoint. On $K\setminus N$ the two formulas agree
because $e^{-1}(x)\in S(\xi)$, so closed pasting makes the displayed map
continuous. This is a definition conditional on supplied tubular data; no
tubular-neighborhood existence theorem is asserted.

For an empty base the Thom diagonal is the unique based map.  In rank zero it
is the ordinary based diagonal $B_+\to B_+\wedge B_+$.  Sphere points,
the complement of the tubular neighborhood, and all quotient basepoints map
to the stated basepoint.  Identity bundle charts and the zero vector give the
literal formulas.  All maps are explicit and choice-free.
