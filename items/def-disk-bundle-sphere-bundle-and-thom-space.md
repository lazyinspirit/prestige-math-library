---
id: def-disk-bundle-sphere-bundle-and-thom-space
kind: definition
title: "Disk bundle, sphere bundle, and Thom space: the differential topology interface"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["def-disk-sphere-and-thom-space-of-a-metric-vector-bundle"]
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-14.md"
      - "research/frontier-38-owner-30-alpha-batch-14-5a.md"
      - "research/frontier-38-owner-30-step5-hash-14-post-5a.json"
    content_sha256: "029539c830a80a360fd8f6e9ec77cb8dcc7ca46c7b29a621706c7b98cf443a16"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 §5"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "printed pp.194–196; disk/sphere models, Thom normalization; stabilization on p.196"
---

## Definition

For a supplied metric $h$ on a finite-rank real vector bundle $E\to B$, write
$$D_h(E)=\{v\in E:\|v\|_h\leq1\},\qquad S_h(E)=\{v\in E:\|v\|_h=1\},\qquad \operatorname{Th}_h(E)=D_h(E)/S_h(E).$$
This is exactly [[def-disk-sphere-and-thom-space-of-a-metric-vector-bundle]], with the same based quotient convention $X/\varnothing=X_+$. This item supplies DT notation, not a second definition. Quotients are formed in compactly generated Hausdorff spaces; the compact smooth bases of the geometric applications need no change of topology.

The complement of the Thom basepoint is the image of the open disk bundle $D_h^\circ(E)=\{v:\|v\|_h<1\}$: in the quotient where $S_h(E)$ is collapsed, the set $D_h^\circ(E)=D_h(E)\setminus S_h(E)$ is saturated and the quotient map restricts to a homeomorphism of it onto the complement of the basepoint; in the case $S_h(E)=\varnothing$ the complement of the added point is $D_h(E)=D_h^\circ(E)$. The fiberwise radial expansion
$$e(v)=\frac{v}{\sqrt{1+\|v\|_h^2}}\qquad(v\in E),$$
with inverse $w\mapsto w/\sqrt{1-\|w\|_h^2}$ on $D_h^\circ(E)$, is a homeomorphism $E\to D_h^\circ(E)$. When $E$ is smooth, transport its smooth structure along this homeomorphism to the nonbasepoint stratum. If $h$ is also smooth, both formulas are smooth in the original bundle coordinates, so this is the usual open-submanifold smooth structure on $D_h^\circ(E)$. A merely continuous metric does not imply that regularity; smooth tubular applications below supply a smooth metric. No smooth manifold structure at the Thom basepoint is presumed, and in rank zero the expansion is the identity $B\to D_h^\circ(E)=E$.
