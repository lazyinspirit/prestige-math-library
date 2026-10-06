---
id: lem-compatible-arbitrary-pi-fence-reduction
kind: lemma
title: "Compatible arbitrary pi fence reduction"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable-choice-principle-for-foliation-pair, lem-a-leafwise-loop-has-a-finite-transverse-double-point-representative, lem-fixed-transverse-fences-have-a-finite-crossing-word, lem-closed-null-fence-word-has-an-essential-lower-endpoint, lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups, lem-limitwise-nullhomotopy-predicate-descends-to-a-normal-subgroup, def-universal-covering-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 11
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. P. Novikov, The Topology of Foliations (complete English translation)"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "\u00a77, Lemma 7.2 and its proof, printed pp. 20-22; the finite reduction and corner rounding are supplied locally"
    - title: "Mark Brittenham, Foliations and the Topology of 3-Manifolds, classes 11-20"
      url: "https://www.math.unl.edu/~mbrittenham2/papers/folnotes/lecs_11_to_20.pdf"
      locator: "Classes 12-13; finite subword cuts and the simple-lift conclusion supplied explicitly"
---

## Statement

From a nonzero Π^j class represented by a generic finite-crossing loop, at every sufficiently small upper height one obtains after at most N subword cuts an essential lower loop with a coherent genuinely closed/null right family whose lifts are simple at EVERY positive parameter.

## Facts & Assumptions

**Given:** A nonzero limitwise-nullhomotopy ($\Pi^j$) class of a leaf $L$ represented by a generic finite-crossing loop on a chosen transverse side, with a coherent closed/null family over $(0,b]$ represented by its full cyclic word $w_0$ and an essential initial loop at parameter $a_0=0$.

[F1] The sibling-pair items `lem-a-leafwise-loop-has-a-finite-transverse-double-point-representative` and `lem-fixed-transverse-fences-have-a-finite-crossing-word` represent the class by a generic finite-crossing loop with a fixed finite word of eligible crossing pairs; actual collisions at a height may be a subset, and cuts are retained only on their common closed/null interval; the sibling-pair item `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups` supplies the finite cellulation used for the finite generator and overlap system. Their exact uses are flagged in steps 1.1 and 5.1 below.

[F2] The limitwise-nullhomotopic classes form a well-defined normal subgroup $\Pi^j$ of the based fundamental group. A nonzero class here means a nonidentity element of that subgroup, hence an essential loop in the ambient leaf fundamental group; it does not mean a nonzero class in the quotient by $\Pi^j$ ([[lem-limitwise-nullhomotopy-predicate-descends-to-a-normal-subgroup]]).

[F3] The universal cover of a leaf is simply connected, so a closed lifted loop in it bounds a nullhomotopy and the projection of a closed subpath of a closed lifted loop is null-homotopic in the base leaf ([[def-universal-covering-space]]).

[F4] The in-pair item [[lem-closed-null-fence-word-has-an-essential-lower-endpoint]] states that the maximal downward common interval of two closed/null cut words has closed endpoints and at least one essential factor unless their product initial loop is null; its exact use is flagged in step 3.1.

[F5] The standing assumption is Countable Choice $\mathrm{AC}_\omega$ as recorded for this pair ([[def-countable-choice-principle-for-foliation-pair]]).



## Proof

**Proof technique:** direct.

1.1 Start with the essential initial loop at $a_0=0$ and the closed/null family on $(0,b]$ represented by the full cyclic word $w_0$ of [F1]. If every positive level of the family has a simple lift to the universal cover of its leaf, terminate. Otherwise choose one positive parameter $r\le b$ at which the lift has a self-intersection; its actual lifted double point is one eligible marked pair. It splits the source word into two parameterized subpaths $c_t,d_t$, which are loops only at heights where the corresponding endpoints coincide; their genuine closed/null interval is selected in the next steps. [F1, given, choose]

2.1 At $r$ both $c_r$ and $d_r$ are closed and null: each is the projection of a closed subpath of the closed lifted loop, and the universal cover is simply connected by [F3]. By finite compact-cap persistence in foliation boxes both remain closed and null on a neighbourhood of $r$, so the set of parameters near $r$ on which both are closed and null is a nonempty interval ending at $r$. [F3, step 1.1]

3.1 Let $(a,r]$ be the maximal common downward interval on which both $c$ and $d$ are closed and null relative to the current fence interval $[a_0,r]$. At $a$ both loops are closed by continuity. If $a>a_0$ and both were null at $a$, finite compact-cap persistence for both would extend the interval below $a$, contradicting maximality; if $a=a_0$ and both were null, then their product would make the current initial essential loop null, contradicting [F2] and the essentiality of the initial representative. Hence at least one factor is essential at $a$ by [F4]. Choose such a factor, retain only the family on $[a,r]$, and rebase and rescale it. [F2, F4, step 2.1]

4.1 The new initial leaf need not be the old one, but the family stays on the same chosen transverse side and every positive displacement is genuinely closed and null; the rank of its cyclic word is strictly smaller by the finite-double-point representative of [F1]. Repeat the operation only when an actual positive-level lift is nonsimple; there are at most $N$ such operations, and at termination every positive lift is simple, because otherwise another rank-decreasing operation would be possible. Since the initial parameter belongs to the half-open interval, choosing $b$ arbitrarily small makes the reduced essential initial leaf arbitrarily close to $L$; no cut is projected below its common closed/null interval and no closedness of nullness is assumed. [F1, step 3.1, construct]

5.1 At termination round the finitely many switched corners jointly before making regular cap charts: choose small target plaque boxes at the switch vertices, disjoint from every other retained zero-level arc except the two adjacent half-arcs, replace each corner by a $C^2$ regular joining arc, and transport the replacement by the prescribed transverse plaque label. The replacement is homotopic relative its two port collars and preserves nullness and essentiality; it creates no lifted collision because it is embedded in its small plaque box where no other retained arc lies; and it can be normalized back to one fixed fence by unique transverse roots and finite homotopy invariance of $\Pi$, so all sufficiently small positive lifted boundaries remain simple and the boundary circles are genuinely $C^2$ rather than tacitly rounded corners. All operations are finite, hence only the standing countable choice from [F5] is used. [F1, F2, F5, step 4.1] ∎
