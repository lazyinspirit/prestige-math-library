---
id: lem-a-morphism-has-a-comparison-lift-between-the-supplied-projective-resolutions
kind: lemma
title: "A morphism has a comparison lift between the supplied projective resolutions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-supplied-projective-resolution-datum, thm-projective-comparison-map-exists]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Joseph J. Rotman, An Introduction to Homological Algebra, 2nd ed."
      url: "https://dokumen.pub/an-introduction-to-homological-algebra-2nbsped-9780387245270-9780387683249.html"
pipeline_run: frontier-29
---
## Statement

Assume the Axiom of Dependent Choice.

Let $P$ be a supplied projective resolution datum on a class $\mathcal D$ in an
abelian category. For every morphism $u:A\to B$ with $A,B\in\mathcal D$, there
exists an augmentation-preserving chain map
$$\widetilde u_\bullet:P_\bullet(A)\to P_\bullet(B)$$
lifting $u$.
## Facts & Assumptions

**Given:** A morphism $u:A\to B$ with $A,B\in\mathcal D$.

[L1] The datum $P$ supplies specific projective resolutions
$P_\bullet(A)\to A$ and $P_\bullet(B)\to B$
([[def-supplied-projective-resolution-datum]]).

[L2] Assuming Dependent Choice, projective comparison maps exist for any
morphism between resolved objects ([[thm-projective-comparison-map-exists]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the objects $A$ and $B$ come with chosen projective resolutions. [L1, given]

2.1 Apply [L2] to $u:A\to B$ and the chosen resolutions from step 1.1. This yields an augmentation-preserving chain map $\widetilde u_\bullet:P_\bullet(A)\to P_\bullet(B)$ lifting $u$. [L2, step 1.1, construct] ∎
