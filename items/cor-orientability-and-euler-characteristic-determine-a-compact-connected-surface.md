---
id: cor-orientability-and-euler-characteristic-determine-a-compact-connected-surface
kind: corollary
title: "Orientability and Euler characteristic determine a nonempty compact connected boundaryless surface"
status: draft
origin: pipeline
deps: [thm-classification-of-compact-connected-surfaces, def-r-orientation-of-a-topological-manifold, def-euler-characteristic-of-a-finite-cw-complex, def-axiom-of-choice]
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Gallier and Xu, A Guide to the Classification Theorem for Compact Surfaces"
      url: "https://www.cis.upenn.edu/~jean/surfclassif-root.pdf"
      locator: "Chapter 6, Theorem 6.2, printed pp.94–96"
pipeline_run: frontier-36-complete
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). For nonempty compact
connected boundaryless topological surfaces $M,N$, the following are
equivalent:

1. $M$ and $N$ are homeomorphic;
2. $M$ and $N$ have the same integral orientability and
   $\chi(M)=\chi(N)$.

Euler characteristic alone is not asserted to classify surfaces.

## Facts & Assumptions

**Given:** $M,N$ as in the statement.

[L1] The classification theorem
[[thm-classification-of-compact-connected-surfaces]] gives the sphere or a
unique $g$-handle model on the orientable side, with Euler characteristic
$2-2g$ for $g\geq0$, and a unique $k$-crosscap model on the nonorientable
side, with Euler characteristic $2-k$ for $k\geq1$. Its canonical models are
fixed polygonal quotients.

[L2] A homeomorphism sends the local pair $(M,M\setminus\{x\})$ to the
corresponding pair for $N$ and transports the continuous generating section
of the integral orientation local system; it also induces isomorphisms on
singular homology, preserving Euler characteristic as established in [L1]
([[def-r-orientation-of-a-topological-manifold]],
[[def-euler-characteristic-of-a-finite-cw-complex]]).

## Proof

1.1 If $h:M\to N$ is a homeomorphism, transport a local orientation section by $h_{*x}:H_2(M,M\setminus\{x\};\mathbb Z)\to H_2(N,N\setminus\{h(x)\};\mathbb Z)$. The inverse homeomorphism transports it back, so integral orientability is equivalent for $M,N$. The induced homology isomorphisms and Euler–Poincaré identity in [L1] give $\chi(M)=\chi(N)$. [L1,L2]

2.1 Conversely, suppose orientability and Euler characteristic agree. If both are orientable, [L1] gives genera $g_M=(2-\chi(M))/2=(2-\chi(N))/2=g_N$, including the $g=0$ sphere. If both are nonorientable, [L1] gives crosscap numbers $k_M=2-\chi(M)=2-\chi(N)=k_N$. In either case [L1] makes both surfaces homeomorphic to the same fixed polygonal quotient, so composing one homeomorphism with the inverse of the other yields $M\cong N$. The only AC use is inherited from [L1]. [L1] ∎
## Remarks

For example, the torus and Klein bottle both have Euler characteristic zero
but differ in integral orientability; the biconditional therefore uses both
invariants.
