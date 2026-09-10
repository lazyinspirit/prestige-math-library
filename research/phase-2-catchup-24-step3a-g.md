# phase-2-catchup-24 — Step 3a scope review, group g

Scope only: this report does not approve proofs or individual items. I reviewed
the current batch 14–16 manifests and coverage, the binding SET-3/5/7/10/30
prose, the canonical plan, the empty cross-batch dependency inputs, current
scope-decline records, and the non-owner final scaffold receipts. No current
`step3a-owner-*` receipt exists for these pages. The owner supervision record
retains the original pairs and requires local closure rather than extra pairs.

| Batch | A page | A/B items | Scope decision |
| ---: | --- | ---: | --- |
| 14 | `arithmetization-incompleteness-and-relative-consistency` | 28/5 | `sufficient` |
| 14 | `reflection-absoluteness-and-elementary-submodels` | 18/5 | `sufficient` |
| 15 | `boolean-algebras-stone-duality-and-the-prime-ideal-theorem` | 27/3 | `sufficient` |
| 15 | `pcf-scales-and-zfc-dowker-spaces` | 60/4 | `sufficient` |
| 16 | `borel-analytic-sets-perfect-sets-and-determinacy` | 60/5 | `sufficient` |

## Pair evidence

### Arithmetization, incompleteness, and relative consistency

The A page covers the full intended progression: arithmetic theories and
certified coding, primitive-recursive syntax and representability, the
diagonal lemma, Gödel and Rosser incompleteness, bounded-truth certificates,
the derivability conditions, Löb and second incompleteness, Tarski
undefinability, interpretations and conservative extensions, and the separate
semantic, finite-fragment, and formal relative-consistency interfaces. The B
page supplies the required substitution calculation, a nonstandard-model
witness, an explicit conservative extension, the CTM-versus-consistency
counterexample, and a finite-proof-support calculation. This is adequate both
as the endpoint of SET-2 and as the later supplier for constructibility and
formal forcing transfer.

Coverage uses complete named ranges in Moschovakis and Avigad, independent
model/consistency treatments, and dedicated primitive-recursion/coding notes.
The excluded formalized Löb refinement and suspect Rosser equivalence are
strictly stronger or unused, not missing parts of the commissioned subject.

### Reflection, absoluteness, and elementary submodels

The inventory includes the Lévy hierarchy, bounded and one-way
absoluteness, ordinal/omega/rank absoluteness, finite-formula witness and rank
bounds, finite reflection, models of fixed finite fragments, Mostowski
collapse, countable elementary submodels, elementary chains, and compatible
collapsed maps. The examples expose the intended traps: missing internal power
sets, witness-direction failure, nontransitive elementary submodels, and
collapse maps that need not be inclusions. Together with the preceding rank
pair, this meets the SET-4–5 companion requirement and supplies the interfaces
needed later by constructibility, forcing, and elementary-embedding pages.

Geschke and Freiburg cover the complete core reflection/collapse ranges;
Kamensky and Marks provide independent hierarchy and absoluteness checks.
Condensation and Shoenfield absoluteness are explicitly only orientation for
later pages. The excluded stability-theory, constructibility, and unrelated
finite-axiomatizability applications do not leave a hole in this pair.

### Boolean algebras, Stone duality, and BPI

The current 27-item A page covers Boolean algebra, ideals, filters,
homomorphisms and quotients; BPI/UFL and compactness equivalences; Stone
representation and duality; compact-Hausdorff Tychonoff; regular-open and
Boolean completions; completeness versus extremal disconnectedness;
order-continuous extension to completions; and forcing-preorder separative and
regular-open completions. The three finite examples compute a Stone space, a
quotient/dual map, and the distinction between forcing and Boolean filters.
This is enough for the later forcing and large-cardinal consumers.

The repaired completion results are covered by the complete Tressl treatment
and Fremlin 312N/O and 314K/S/T. General distributive-lattice duality, Boolean
rings, and Baire-property sigma-algebras are separate subjects. The BPI-versus-
AC nonimplication is correctly deferred until the later symmetric-model
supplier exists, so its absence here avoids circularity rather than reducing
the intended scope.

### PCF scales and ZFC Dowker spaces

The owner-retained single pair now contains every commissioned branch: the
countable-paracompactness criteria and Dowker product characterization; reduced
products, exact upper bounds, progressive PCF, generators and interval
no-holes; the direct `aleph_omega` scale; Rudin's space and cardinality;
Kojman–Shelah closure, cofinality, size, weight and character; Balogh's
continuum-sized construction; the CH/Luzin/coloring/stick/diamond conditional
`aleph_1` constructions; and a dated status remark. Its examples give the
required shrinking, Rudin-slice, scale-use, and product-normality witnesses.
No merger or extra prerequisite pair is needed for scope.

For unfamiliar material I checked the complete relevant primary arguments:
Abraham–Magidor's exact-bound, generator, compactness and interval no-holes
ranges in [Cardinal Arithmetic](https://www.winterschool.eu/files/3-Cardinal_Arithmetic.pdf);
the complete Kojman–Shelah construction in
[A ZFC Dowker space in aleph_(omega+1)](https://arxiv.org/pdf/math/9512202);
and the full theorem/claim routes for the conditional small constructions in
[A New Small Dowker Space](https://arxiv.org/pdf/2209.10504). The unrecovered
Balogh original has a documented source alternative through Hart's complete
construction route; that is adequate source coverage for scope, though its
mathematical correctness remains for Step 3b. The many excluded PCF
transitivity/localization, higher-cardinal, forcing-axiom, and multiplicity
results are broader than the stated pair.

The dated boundary is also appropriate. Cruz Chapital's 2025 paper still calls
the ZFC `aleph_1` Dowker question open, and a fresh search on 2026-09-10 found
the 2024 conditional constructions but no verified ZFC resolution. This is a
search result, not a claim that the literature search is exhaustive; the
manifest correctly records only the dated 2025 status.

### Borel and analytic sets, perfect sets, and determinacy

The 60-item A page covers tree bodies and analytic projections, Borel ranks and
codes, open and Borel determinacy, AC undetermined games, analytic normal forms
and separation, the Souslin operation, perfect-set and bounded-rank theorems,
category and measure regularity, choice pathologies, and the stated AD/DC
consequences with their axiom bases separated. The B page computes closed-tree
and Borel codes, gives a determined clopen game and a taboo-game failure mode,
and refutes the assertion that every real set is Borel. The prose-required
canonical analytic non-Borel witness is the explicit A-page theorem that the
ill-founded trees are analytic non-Borel; although it is not duplicated as a
standalone B item, the pair contains the requested concrete witness, so this is
not a subject omission.

Marker, Buffard–Levrel–Mayo, both Martin determinacy treatments, Lietz,
Hachtman–Palumbo, Ciesielski, and Martin's measure-game paper cover the named
routes. The excluded projective determinacy, uniformization, priority history,
and cardinality side results are beyond SET-10. The pair has the exact
descriptive-set-theory and regularity interfaces needed later by the Solovay
model page without importing those later results.

## Current consistency checks

The assigned manifests and canonical plan have identical A/B inventories,
statements, dependencies, requirements, and item counts. The sole complete-
object difference is proof-strategy/status metadata for
`lem-small-dowker-coloring-gives-ad-guessing`: the live manifest expands the
pressing-down argument while the plan retains the earlier Fodor sentence and a
stale scaffold-status label. This is not a scope difference and is left for an
authorized writer.

Fresh checks over batches 14–16 found 215 items with zero manifest-dependency or
content-policy errors, and coverage found five A pages and 363 harvested rows
with zero errors or warnings. Canonical plan validation passed with no item
cycles, forward references, B-page dependency targets, or unresolved IDs.
All three assigned cross-batch dependency files are empty. Some top-level
coverage status strings retain historical blocked/pending wording, but the
current row dispositions, final adjudication notes, and coverage gate agree on
complete scope; those status strings do not identify an omitted subject.
