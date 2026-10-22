---
id: lem-pl-height-product-caps-replace-by-one-extremum
kind: lemma
title: "Piecewise linear height-product caps can be replaced by one extremum"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [ lem-finite-polygonal-disk-and-collar-surgery, lem-finite-convex-cell-complexes-admit-compatible-triangulations, lem-parametrized-pl-balls-absorb-standard-boundary-windows, lem-three-disk-pl-severing-reassembles-parametrized-balls ]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references: []
generation:
  role: reviewed-local-lemma
local_proof_acceptance:
  run: inverse-problems-knot-theory-all-109-2026-10-19
  authorized_by: /root
  decision: preserve-resolved-local-lemma
  independent_review: research/inverse-problems-knot-theory-all-109-2026-10-19-owner-moise-first17-independent-review-cycle1.json
  accepted_body_sha256: 86db62e9399082b3a17fb81530a7eac145b5c1a1c0307938ba1cc71f0d789649
dependency_level: 5
---

## Statement

Let $D$ be a finite parametrized PL two-disk and let $J:D\times[0,1]\to\mathbb R^3$ be a finite PL embedding with $h(J(x,t))=t$ for an affine height $h$. Put $Z=J(D\times[0,1])$, $C=J(\partial D\times\{1\})$ and $F=J((D\times\{0\})\cup(\partial D\times[0,1]))$. Let $E$ be a finite parametrized embedded PL two-disk with boundary $C$ and $E\cap Z=C$.

There exists a finite embedded parametrized PL disk $G\subset Z$ with boundary $C$, $G\cap F=C$, such that its height has exactly one interior extremum, a minimum, and every other point of $G\setminus C$ has a regular height-product chart. The set $F\cup G$ bounds a supplied parametrized PL three-ball. Consequently, if $E\cup G$ bounds a parametrized PL three-ball, then $E\cup F$ does as well. The reversed-height assertion replaces a maximum cap. No choice hypothesis is introduced.

## Facts & Assumptions

**Given:** The disk, height-product embedding and exterior disk in the statement.

[F1] Polygonal disk parameters and extensions of prescribed boundary maps ([[lem-finite-polygonal-disk-and-collar-surgery]]).

[F2] Compatible finite triangulations of convex polyhedral cells ([[lem-finite-convex-cell-complexes-admit-compatible-triangulations]]).

[F3] Parametrized PL balls admit standard-window removal ([[lem-parametrized-pl-balls-absorb-standard-boundary-windows]]).

[F4] Three embedded PL disks with common boundary and disjoint interiors satisfy the finite PL ball-reassembly implication ([[lem-three-disk-pl-severing-reassembles-parametrized-balls]]).

## Proof

**Given:** The stated product and disk.

1.1 Use the supplied disk parameter to replace $D$ by a convex polygon $P$. Its product parameter and $J$ are finite PL after compatible prism subdivisions by [F2]. Choose $p\in\operatorname{Int}P$ and $0<c<1$, and let $K$ be the convex pyramid with apex $(p,c)$ and base $P\times\{1\}$ in $P\times[0,1]$. Its lateral boundary $G_0=(p,c)* (\partial P\times\{1\})$ is a parametrized PL disk. It intersects the disk $F_0=(P\times\{0\})\cup(\partial P\times[0,1])$ exactly in their common boundary $\partial P\times\{1\}$. The latter is also a parametrized PL disk: it is the complement of the top face in the boundary of a convex prism, and mapping its bottom and side strips to concentric planar polygonal regions gives the finite disk parameter. [given, F1, F2, construct]

2.1 The pyramid meets the boundary of the prism exactly in its top base. The boundary-window charts along its base perimeter are ordinary linear dihedral-sector charts, including at polygon corners after a finite angular subdivision; these identify the outer prism with a half-space and the inner pyramid with a quadrant. Thus [F3] gives a finite PL ball parameter on $W_0=\overline{(P\times[0,1])\setminus K}$. Its boundary is exactly $F_0\cup G_0$. Transfer these disks, the pyramid and $W_0$ to $Z$ by the product parameter and $J$. This gives the required $G$ and ball $W$ with boundary $F\cup G$. [F3, step 1.1, construct]

3.1 Each horizontal section of $G_0$ above height $c$ and below height one is the boundary of a homothetic polygon $p+\frac{t-c}{1-c}(P-p)$. Thus its only interior height extremum is its apex minimum. At every other interior point its incident cone faces have nonzero height slope along their common generator, so a finite face-strip chart gives a local PL product with height as interval coordinate. Equivalently these strips are truncated convex cone faces, mapped to rectangular strips by matching their end edges and coning boundary maps with cone points at equal height. Composing with the height-preserving $J$ preserves these charts and the unique extremum. No conclusion about the height on the exterior disk $E$ is needed. [F2, step 1.1, step 2.1, construct]

4.1 The disks $E,F,G$ have the same boundary and pairwise disjoint interiors, because $E\cap Z=C$ and step 1.1 gives the other intersection. Their parameters are supplied above. If $E\cup G$ bounds a supplied PL ball, then this ball and $W$ satisfy [F4], which supplies the ball bounded by $E\cup F$. Replacing $h$ by $-h$ gives the reversed-height statement. Every selection, cone, prism subdivision and window construction is finite, so no choice assumption is required. [given, F4, step 2.1, step 3.1, construct] ∎
