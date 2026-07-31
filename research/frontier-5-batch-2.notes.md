# Frontier 5 batch 2 — scaffold notes

Pages scaffolded: `power-series-and-real-analytic-functions` (A+B),
`graphs-walks-and-connectivity` (A+B), and
`homotopy-and-homotopy-equivalence` (A+B). The final page objects are in
`research/frontier-5-batch-2.pages.json`.

## 1. Applyable prose-scaffold amendments

### 1.1 RA-25: replace the scope paragraph

**File:** `research/plan-realanalysis-pages.md`
**Section:** `RA-25 Power Series and Real-Analytic Functions`
**Edit:** replace the paragraph beginning `formal power series; radius of
convergence` and ending `(Borel).` with:

```
Real power series about a centre; the radius in [0,+infinity];
Cauchy-Hadamard with the zero-based coefficient convention; absolute
convergence inside and divergence outside the radius; uniform convergence on
closed subintervals strictly inside the radius, but not in general on the
whole open interval; termwise differentiation and integration; smoothness,
the coefficient formula, re-expansion at an interior point, and the identity
theorem on an open interval; real-analytic functions and their closure under
algebra operations, quotients with nonzero denominator, and composition.
Abel summability and Cesaro summability of a series are defined from the
published series and Cesaro-mean definitions; prove Abel's limit theorem,
Frobenius' implication from Cesaro to Abel summability, and Tauber's converse
under the explicit condition iota(n+1) a_n -> 0. B: the geometric series and
an interior re-expansion; three radius-one series with distinct endpoint
behaviour; a factorial-coefficient series of radius zero; failure of uniform
convergence on the full open interval; a rational analytic example; the
alternating harmonic series under Abel's theorem; Grandi's series; and
1-2+3-4+... as Abel summable but not Cesaro summable.

The formal unit criterion belongs to
formal-power-series-and-generating-functions and is not duplicated here.
The generalized binomial endpoint theorem is deferred until complex powers
and their branch conventions are available. Smooth nonanalytic and
Borel-prescription examples are deferred until the exponential function and
Borel's theorem are available from declared prerequisites.
```

**Reason:** the old paragraph mixed real analysis with a formal-series unit
theorem, stated a complex endpoint criterion on a real page, and demanded
counterexamples that cannot be proved from the declared prerequisites.

### 1.2 RA-25: correct the Cesaro seam order

**File:** `research/plan-realanalysis-pages.md`
**Section:** the `Level-8 seam note` under RA-25
**Old text:** ``(equivalent-forms-of-completeness, order 32)``
**New text:** ``(equivalent-forms-of-completeness)``

The numeric order has changed and should not be frozen in prose. Add
`equivalent-forms-of-completeness` to RA-25's `requires`; its
`def-cesaro-mean` and `thm-cesaro-mean-theorem` are used rather than rebuilt.

### 1.3 GT-1: defer the unavailable Pólya count

**File:** `research/plan-combinatorics-and-categories.md`
**Section:** `GT-1. Graphs, Walks and Connectivity`, `THMS`
**Old text:**

```
the number of labelled graphs on [n] is
2^{binom(n,2)}, and the number up to isomorphism is CB-10's Pólya count
(the backward citation that discharges CB-10's forward pointer).
```

**New text:**

```
the number of labelled graphs on a fixed n-element vertex set is
2^{binom(n,2)}. Counting graphs up to isomorphism is deferred until
counting-up-to-symmetry-burnside-and-polya has published items; no web source
substitutes for that missing library dependency.
```

### 1.4 GT-1: fix graph conventions and the strict-connectivity witness

**File:** `research/plan-combinatorics-and-categories.md`
**Section:** `GT-1. Graphs, Walks and Connectivity`, after the `Traps`
paragraph
**Edit:** append:

```
Authoring convention: P_n has n vertices and length n-1; C_n is defined for
n at least 3. Contracting an edge in a simple graph discards the resulting
loop and merges parallel edges before returning to the simple-graph category.
For the strict Whitney witness, take two copies of the following lobe sharing
only v: on {a,b,c,d} use K_4 with ab deleted and add va and vb. The resulting
graph has kappa 1, lambda 2 and minimum degree 3.
```

### 1.5 HT-1: do not inherit the pasting lemma's orientation edge

**File:** `research/plan-topology-set-theory-track.md`
**Section:** `HT-1. Homotopy and Homotopy Equivalence`, `THMS`
**Old text:**

```
transitivity via the pasting lemma
(`lem-continuity-is-local-and-pastes`, published);
```

**New text:**

```
transitivity via one named piecewise-linear reparametrisation lemma; prove
continuity there directly from the finite-closed-cover argument and the
topology axioms, rather than citing
lem-continuity-is-local-and-pastes, whose own orientation link would add an
unrelated examples-page forward reference;
```

### 1.6 HT-1: replace the two unsupported examples

**File:** `research/plan-topology-set-theory-track.md`
**Section:** `HT-1. Homotopy and Homotopy Equivalence`, `FS` and `B`
**Edit:** delete the false-statement clause beginning `a subspace homotopy
equivalent to the whole space` and delete `the cone on a space is
contractible`. Replace the retraction witness with:

```
A singleton in the two-point discrete space is a retract but not a deformation
retract: a deformation would give a path between the two discrete points.
```

The stronger subspace claim needs a carefully proved non-cofibrant pair. Cone
contractibility needs continuity of the descended map on `CX x [0,1]`;
`def-adjunction-cone-suspension` and the quotient universal property alone do
not show that `q x id` is a quotient map. Either result may return once the
relevant cofibration or product-of-quotient theorem is available.

## 2. Authoring-time notes

### Power series

- Sequences are zero-indexed. Cauchy-Hadamard therefore uses
  `|a_{k+1}|^(1/(k+1))`; never write an undefined zeroth root.
- Radius is extended-valued. State the conventions reciprocal-zero equals
  positive infinity and reciprocal-positive-infinity equals zero.
- The identity theorem's accumulation point must lie in the open interval.
- In the Tauber hypothesis, `n+1` is read in the reals through `iota`.
- `def-cesaro-mean`, `def-derivative`, and `thm-binomial-theorem` contain
  orientation-only links in their published prose. The new items use only
  their proved statements; do not copy those orientation links into the new
  dependency lists.
- The re-expansion proof is split at absolute convergence of the binomial
  double series. Frobenius is split at the Abel transform of Cesaro means.
  Tauber is split at the short-block estimate.
- Immediate consequences added: the convergence dichotomy, continuity,
  termwise integration, smoothness with coefficient recovery, analyticity,
  analytic smoothness, closure under analytic operations, and ordinary
  convergence implying both summability methods.

### Graphs

- The default graph is finite, simple and undirected. Multigraphs and digraphs
  are separate definitions and no theorem silently switches categories.
- Minimum and maximum degree require a nonempty vertex set. State the empty
  and one-vertex connectivity conventions explicitly.
- Shortest-path distance is defined only within a component; do not assign an
  ordinary natural distance between different components.
- The walk-to-path proof is isolated before reachability, components and
  distance. The odd-closed-walk lemma is isolated before the bipartite
  characterisation. Whitney's theorem is split into its two inequalities.
- Immediate consequences added: components partition, graph distance is a
  metric on a component, parity of odd-degree vertices, complete-graph edge
  count, labelled-graph count, and minimum degree forcing a cycle.
- The Petersen computation must prove the lower bounds for vertex and edge
  connectivity, not infer equality from cubic regularity.

### Homotopy

- `deformation retract` means the homotopy fixes the retract pointwise; mention
  that some sources call this a strong deformation retract.
- Prove the finite closed pasting step inside
  `lem-homotopy-transitivity-by-reparametrisation`. Do not cite
  `lem-continuity-is-local-and-pastes`.
- The definition of contractibility and the nullhomotopy of the identity are
  separated so their equivalence is proved rather than assumed.
- The equivalence-relation proof is split into reflexive/symmetric,
  transitivity, compatibility with composition, and the homotopy-equivalence
  synthesis.
- Immediate consequences added: maps homotopic to a homotopy equivalence are
  homotopy equivalences, deformation retracts give homotopy equivalences,
  retracts of contractible spaces are contractible, homotopy equivalences
  biject path components, convex sets are contractible, contractible spaces
  are path-connected, and punctured Euclidean space has the sphere's homotopy
  type.

## 3. Source ledger

### Power series and summability

- MIT OpenCourseWare, *Real Analysis, Lecture Notes*:
  <https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/>
  — convergence radii, compact-subinterval convergence and termwise
  operations.
- MIT 18.100C, *Lecture 11: Power Series*:
  <https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf>
  — power-series calculus and Abel's theorem.
- Encyclopedia of Mathematics:
  <https://encyclopediaofmath.org/wiki/Cauchy-Hadamard_theorem>,
  <https://encyclopediaofmath.org/wiki/Power_series>,
  <https://encyclopediaofmath.org/wiki/Abel_summation_method>,
  <https://encyclopediaofmath.org/wiki/Tauberian_theorems>, and
  <https://encyclopediaofmath.org/wiki/Ces%C3%A0ro_summation_methods>
  — Cauchy-Hadamard, analytic re-expansion, Abel, Tauber and Cesaro conventions.

The literature normally starts coefficient indices at one when stating the
Tauber condition and often treats analytic functions over the complex field.
The scaffold translates the former to the repository's zero-based convention
and restricts the latter to real open sets.

### Graphs

- Reinhard Diestel, *Graph Theory* preview:
  <https://diestel-graph-theory.com/basic.html> — terminology, dependency
  ordering, connectivity and bipartiteness.
- University of Lethbridge, *Combinatorics: A Guided Tour*, graphs and walks:
  <https://opentext.uleth.ca/Combinatorics/ch_graphs-walks.html> and
  <https://opentext.uleth.ca/Combinatorics/sect_graphs-walks-PathsCycles.html>
  — walks, paths, cycles and components.
- Cornell Mathematics, *Graph Theory* notes:
  <https://pi.math.cornell.edu/~zakh/putnam/graph-theory.pdf> — handshake,
  degree arguments and elementary connectivity.
- Wolfram MathWorld, *Vertex Connectivity*:
  <https://mathworld.wolfram.com/VertexConnectivity.html> — Whitney's
  inequalities and complete-graph conventions.

Sources disagree on whether `P_n` has `n` vertices or length `n`; this scaffold
fixes `n` vertices. Connectivity conventions for complete and very small
graphs also vary, so they are made explicit.

### Homotopy

- Allen Hatcher, *Algebraic Topology*:
  <https://pi.math.cornell.edu/~hatcher/AT/AT.pdf> and
  <https://pi.math.cornell.edu/~hatcher/AT/ATpage.html> — homotopy,
  homotopy equivalence, contractibility and deformation retracts.
- MIT 18.901, *Introduction to Topology* lecture notes:
  <https://math.mit.edu/~pieloch/teaching/18.901-spring-2025/18.901-spring-2025-Lecture-Notes.pdf>
  — relative homotopy, straight-line homotopies and Euclidean examples.

Terminology varies between `deformation retract` and `strong deformation
retract` for the pointwise-fixed condition. The scaffold chooses the
pointwise-fixed convention and says so.

## 4. Dependency, id and seam ledger

- Every external dependency named in the JSON was opened from `items/` and
  has `status: published`.
- A local order check found no same-page forward dependency and no dependency
  on a plan page of equal or greater order. The published foundational items
  `def-real-limit`, `thm-induction-principle`, and `thm-of-archimedean` are not
  assigned homes by the current plan JSON but exist on disk as published
  items.
- The batch proposes only new ids. A comparison against every id in
  `research/plan-spec.json` and every `items/<id>.md` path reported no
  collision.
- No load-bearing forward reference remains. Neither B page depends on an
  item from another B page.
- No cross-batch dependency is required. The graph definitions are likely
  consumers for later combinatorics batches, while the homotopy definitions
  are likely consumers for the fundamental-group batch; those are ordinary
  downstream seams, not current forward dependencies.
- The authoritative `validate-plan` and `depsource` gates require the
  orchestrator's splice and were not claimed here.

## 5. Confidence and research limitation

Confidence is high on statement scope, page order, published dependency status,
and the convention corrections above. The read-only source-research child was
stopped before returning a report, so no child findings are represented; the
source ledger records only sources independently checked in this run. The
authoring agent must still verify the detailed Tauber estimates, the lower
connectivity bounds in the Petersen example, and all endpoint algebra during
proof construction.
