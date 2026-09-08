# Four-track cross-library reconciliation — 2026-09-08

Status: declared dependencies reconciled; **mathematical closure is not certified**.
Five quantum proof/source gates remain open. Published mathematical items and
library pages were not edited, and no workflow transition was made.

## Scope and result

The audit covers the quantum-group, braid-group, homological-algebra and
Kazhdan–Lusztig supplier tracks, the published HA spine, and their connections
to the rest of the library. The symmetric-group proposed inventory was also
checked as a downstream consumer. Recorded catalogues are never suppliers.

| block | future A/B pairs | proposed A items | proposed B items |
|---|---:|---:|---:|
| HA enrichment | 7 | 68 | 24 |
| Braid groups | 19 | 269 | 78 |
| Quantum groups | 8 | 113 | 35 |
| Kazhdan–Lusztig theory | 8 | 108 | 33 |
| Symmetric-group consumers | 16 | 198 | 59 |
| total | 58 | 756 | 229 |

The four supplier tracks contain 42 future pairs and 728 proposed items.
Including their symmetric-group consumers gives 985 proposed items, a net
addition of 38 A-page proof/definition items without adding a page pair.
Separately, the shared RL-12 prerequisite gains six local proof items and two
definitions moved from RL-14. This repairs an existing Phase-2 pair, not a new pair.
All page prerequisites are integrated into the canonical plan; page orders
and empty canonical item arrays are retained.

## Repairs

- HA: replaced serial dependency placeholders with the actual external and
  earlier-row inputs; added Tor/flatness ownership; separated left-Noetherian
  syzygy arguments from commutative-only substitutes; bound finite-filtration
  abutment to the exact HA-15 theorem.
- Braids: exposed bundle numerability and fibration exactness, moved
  point-pushing injectivity after its vanishing prerequisite, and supplied
  smooth representatives before applying smooth arc extension. Published
  flow machinery replaces the broader DT prerequisite without assuming that
  arbitrary homeomorphisms preserve smooth arcs. Fixed Coxeter ownership,
  geometric-generator bootstrap, Markov-parameter localization and the
  matrix-factorization versus ordinary-complex distinction.
- Quantum groups: moved q=1 specialization after the integral form; corrected
  abstract crystal scope; supplied explicit finite tensor-bar and based-
  quotient interfaces; separated K0/G0 categorification from the stronger
  characteristic/parameter-sensitive global-basis claims. Missing proofs
  remain hard gates rather than citations disguised as local suppliers.
  Seven additional items now supply the noncircular Enriquez shuffle/PBW,
  pairing and crossed-double route; its local cancellation checks remain explicit.
- KL: added star/Knuth and Hodge-induction intermediates, rational-to-real
  Soergel comparison, exact Lie/Hecke imports and the tensor-Fock truncation
  bridge. Ordinary category-O multiplicities are values at one, not
  polynomial coefficients. Gan–Ginzburg supplies the full Skryabin proof
  source; the scaffold now requires the type-A good-grading/center checks.
  KL still inherits the open QG tensor-bar gate.
- Symmetric-group consumers: repaired four owner-page edges, replaced a
  valued-field norm input by real uniform convergence, and removed three
  planned B-to-B example dependencies using A-page polytabloid bases and
  local S3 calculations.

Detailed receipts and exact source ranges:

- `research/homological-cross-library-reconciliation-2026-09-08.md`
- `research/braid-cross-library-reconciliation-2026-09-08.md`
- `research/quantum-cross-library-reconciliation-2026-09-08.md`
- `research/kl-cross-library-reconciliation-2026-09-08.md`

## Published consumers and Phase 2

Each of the 58 future pairs has an explicit empty direct and transitive
published-consumer list in
`research/four-track-dependency-reconciliation.json`. This is declared-edge
evidence across actual YAML, canonical plans and proposed manifests, supplemented
by targeted body searches; it is not a full semantic re-audit of 15,000 proofs.

Two published HA consumers use an earlier B example. Their exact A-page
replacement suppliers and empty further published impact cones are in the
central ledger. They need Phase-3 proof repairs only, not new Phase-2 pairs.
Published content remains unchanged.

Phase 2 remains **142 provisional pair obligations: 41 direct roots,
17 retirement roots and 84 prerequisites**. No newly justified published-
repair or recorded-retirement root was found here. The original twenty-pair
run is not expanded.

The four tracks' future page closure contains 51 pairs outside that manifest:
their 42 future pairs and these nine shared upstream pairs:

- `projectives-standard-filtrations-and-bgg-reciprocity`
- `the-bgg-resolution`
- `weyl-character-and-multiplicity-formulas`
- `young-diagrams-tableaux-and-permutation-modules`
- `specht-modules-and-the-irreducibles-of-the-symmetric-group`
- `the-branching-rule-and-the-young-graph`
- `the-hook-length-formula-and-rsk-correspondence`
- `bruhat-decomposition-and-flags-over-finite-fields`
- `principal-series-representations-of-gl-n-over-a-finite-field`

These are future scheduling obligations, not an automatic Phase-2 expansion.
Their own prerequisites must publish before their consumers. The existing
unresolved recorded-retirement destinations remain separately open in the
Phase-2 expansion audit.

## Open mathematical gates

### Shared Lie-theory prerequisite repair

RL-12's Serre theorem had omitted symmetrizability and cited introductory
chapters that do not prove generation of the maximal ideal. The corrected
route constructs the invariant form from maximality, moves the category-O
and Verma definitions from RL-14, and adds six local items: the restricted
Casimir definition, centrality/scalar theorem, primitive-vector generation,
PBW augmentation intersections, the relation-module embedding and norm
constraint, and the Serre-quotient Weyl/minimum-height argument. Serre
vanishing is proved before, and separately from, Serre generation.
This avoids the apparent RL-12/RL-14 cycle. Full proofs were checked in
[Kleshchev, §§2.3, 9.1 and 9.3](https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf).
Source SHA-256: `e8c16f478c46204f80fcf639cc65e0b3bdbaef4c255dab8984efbdc7d8756eb6`.
The machine ledger separately lists all eight added/moved IDs with empty
published-consumer sets. RL-12 is already in Phase 2; no pair is added.

### Remaining quantum obligations

`research/four-track-proof-gates.json` is binding for future authoring:

1. QG-HOPF-RELATIONS: complete fixed-convention relation-preservation proof.
2. QG-PBW-TRIANGULAR: the noncircular route is scaffolded; verify the local
   Serre cancellations, scalar descent and crossed-double inverse maps.
3. QG-INTEGRAL-Q1: integral freeness and toral specialization, including PBW.
4. QG-QUASI-R: complete homogeneous intertwiner, inverse and factorization proof.
5. QG-GEOMETRIC-GLOBAL-BASIS: the missing equivariant/perverse-sheaf,
   quiver-Ext and canonical-basis machinery behind Varagnolo–Vasserot.

The fifth is missing prerequisite machinery, not merely unwritten exposition.
Its source explicitly uses equivariant derived categories and perverse-sheaf
summands in the projective/global-basis identification.
[Varagnolo–Vasserot, §§1.3 and 4.6–4.7](https://arxiv.org/pdf/0901.3992).
The inspected Luo–Wang presentation still refers quasi-R existence to Lusztig;
it does not close the fourth gate.
[Luo–Wang, §3.4, Theorem 3.6](https://arxiv.org/pdf/2012.07203).

All five have zero published impact from the new supplier block. That excludes
them as new Phase-2 roots in this audit; it does not make them mathematically
closed. Add and reconcile the required local machinery, or verify a complete
alternative proof route, before authoring their consumers.

## Reproducible checks and limits

Run `node research/audit-four-track-dependencies.mjs`. It parses actual YAML,
resolves aliases and actual A-page owners, checks all five future inventories
and 697 published HA items, and records reverse published impact. It reports
zero duplicate IDs, unresolved IDs, forward dependencies, outside-page-closure
edges, cycles or recorded-item paths in the checked declared graph.

It also exposes 56 prose-only supplier boundaries. Their exact owners and
contracts are in `research/four-track-external-supplier-contracts.json`.
They are unhydrated proof obligations, not proven graph leaves.

The audit intentionally exits nonzero for the five open mathematical gates
and the two deferred published HA B-dependencies. A clean future structural
graph must not erase either class of finding. The canonical plan validator,
prose checker and diff-whitespace check pass; their scope is narrower than
mathematical self-containment. The Phase-2 closure census still finds no
unlisted declared prerequisite pair and its metadata counts agree.
