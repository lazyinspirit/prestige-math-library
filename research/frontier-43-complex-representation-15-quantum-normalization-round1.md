# Quantum focused repair round 1

Completed 2026-10-07, after native author 9049de6d60173d78 drained and the root authorized the exclusive batch-6 repair. This is the first of at most two focused repair rounds. Preparation/source reading was not counted as a round. No known mathematical obligation remains open in these repaired carriers; final owner decisions, native-origin handling for the two Manin additions, dependency-ordered central recertification, and the Step 3 gate remain root-owned.

## Changes and proof routes

Twelve draft carriers were repaired in supplier order. The original eleven IDs are in `frontier-43-complex-representation-15-quantum-normalization-sources/round1-ids.json`; the root also authorized the necessary formal-shuffle Definition correction within the same pair.

* The Manin Definition requires finite degree decompositions in each Borel separately, permitting infinite root systems in the full double. The transpose theorem uses fixed finite-dimensional pieces. Scaling the full Manin form by one half gives exactly delta(e_i)=d_i e_i wedge h_i, matching the formal coproduct; the independent PBW vector-space pairing retains its invariant-form normalization.
* The formal shuffle Definition now fixes permutations as original-position to output-position maps, with inverse indices in the output word. Serre insertion and M(t,p) coefficients use that convention. The formal Borel map sends Cartan generators to independent target Cartan symbols, whose derivations specify commutators. Serre annihilation stays restricted to the generated half; cut preservation is a braided algebra-map calculation, and the pairing proof explicitly separates all other color counts. Co-Jacobi in the embedding proof comes from coassociativity through order hbar squared.
* The formal embedding and finite PID rank proof are retained. The generic theorem restores actual descended braided Hopf structures, full Hopf adjunctions, regular-at-one component-basis lifts and ordered PBW lifts. Formal generator pairing is 1/(hbar d_i); the rational generic pairing has generator value 1/(q_i-q_i^-1), whose formal ratio is an R-unit. Rational-field PBW lifts are stated for the rational classical form.
* The existing crossed-double lemma now proves the Serre-free tensor basis by a terminating reduction measure, every overlap, and an elementary confluence induction. It proves both opposite Serre commutators with exact toral-right coefficients and the factor-ideal identity. Quotienting the normal tensor space then proves genuine injectivity for arbitrary sums. No new named lemma or unproved assumption was added.
* Triangular decomposition is unconditional. Its total grading is positive degree minus negative degree, permits infinite rank, and includes FE in degree zero. Its PBW rank clause carries the existing AC premise; the tensor decomposition itself is choice-free.
* The string theorem uses the explicit standard rank-one presentation with k±1 and parameter q_i, avoiding extra lattice roots of k. Its cyclic quotient basis is proved by toral evaluation and its tail quotient uses disjoint basis indices. The highest generator is w_N throughout; v_t=F_i^(t)w_N denotes the string basis. The rank-one example's literal right antipode formula is EK-EK=0 and its oscillator locator refers to the actual step.
* The B2 counterexample retains the full-quotient claim. Its explicit four-dimensional module satisfies every toral, mixed, positive Serre and negative Serre relation. The proposed coproduct of Serre12 sends v0 tensor v1 to q^-2(1-q)(1+q^2) v2 tensor v2, nonzero. A separate off-diagonal mixed-relation image is nonzero as well. The exact rational specialization q=2 verifies all relations and the tensor coefficient -5/4; the general symbolic proof is local in the carrier.

The report and both page descriptions now describe completed local proofs, rather than missing Serre-free or full-B2 suppliers. Batch-6 manifest statements, strategies, dependencies, dependency levels, source locators and twelve exact proof contracts were synchronized. The A page adds the backward prerequisite `the-burau-representations`, the actual home of the Laurent-polynomial supplier. The B page reaches it through A and has no redundant additional edge. Cross-batch inputs remain `[]`: no new in-run cross-batch supplier was introduced. The global plan was not edited.

## Source reading and fidelity

The independently consulted full-text PDFs were already available locally. Source metadata and complete SHA-256 values are in `frontier-43-complex-representation-15-quantum-normalization-sources/metadata.json`:

| Source | SHA-256 prefix | Read passages |
|---|---|---|
| Enriquez, 44 PDF pages, 436680 bytes | 00731481131cc731 | Printed pp.22–24 and 30–38: normalized pairing, scalar braiding, shuffle model, coideal/kernel and graded-dual arguments, PBW and pairing proofs; printed p.40 §2.4 for generic transfer |
| Jeong–Kang–Kashiwara, 60 pages, 503316 bytes | f873e27305536ded | Printed pp.5–6, (1.4)–(1.7): Serre presentation, inverse-K positive coproduct, full Hopf formulas and stated triangular decomposition |
| Etingof–Semenyakin arXiv v3, 43 pages, 568929 bytes | a106a2a908277850 | Printed pp.21–24, §§3.7/4.1: restricted doubles, pairing/commutator normalization and the Kac–Moody extension caveat |
| Berkeley Lectures, 364 pages, 2118866 bytes | ffeb74a5a0304b6f | Printed pp.309–310, Lemma 13.1.3.21 and Theorem 13.1.3.22: opposite Serre commutators and factor-ideal reduction |

The source assertions are not treated as substitute proofs. The Serre-free normal-form argument, both mixed commutator computations, ideal stability, cyclic module quotient, and full B2 detecting module are supplied locally. Exact current published PBW, tensor right-exactness, Gaussian and related supplier statements were read; exact statement quotes and step uses are in the updated contracts.

Visual inspection of Enriquez printed p.37 (`enriquez-p37.png`) confirms that formula (28) prints a single hbar^-1 prefactor and a literal full-Sh radical clause. The latter fails for a matching tensor word, and the former is not multiplicative with the generator pairing. The local Serre supplier uses the required length-k product hbar^-k times the letter weights, proves the adjunction directly, and restricts annihilation to the generated half. Its source note records these printed defects without asserting unverified author intent. The generic transfer locator was corrected from printed p.38 to p.40.

## Scope, preserved evidence and checks

`frontier-43-complex-representation-15-quantum-normalization-sources/round1-consumers.json` records the exact current direct and indirect consumer closure. It contains no subject outside batch 6 and no published consumer. No published carrier, canonical ledger, origin classification, owner decision, runtime state or global plan was changed. The two origin-sensitive Manin carriers retain `origin: pipeline` and their native metadata. No timestamps or mtimes were edited to influence provenance.

The original stable carriers were copied before editing to `frontier-43-complex-representation-15-quantum-normalization-sources/round1-before/`. This preserves the eleven initial carriers at repair entry and the additional formal-shuffle Definition when its supplier correction was authorized. `round1-item-hashes.json` records raw before/after hashes, with no claim that those are engine decision hashes. Original batch manifest and coverage snapshots are also preserved. These are actual captured before files; no historical certificate, timestamp or writer receipt was fabricated.

All commands and outputs are under the same evidence directory. Final scoped results:

| Check | Actual result |
|---|---|
| Explicit changed-path proof-layout | 12 items, 76 steps, 0 defects |
| Explicit changed-path precheck | 11 proofs, 0 failures; Manin Definition not applicable |
| Changed items plus two owned pages rendercheck | 14 files, 0 errors, 0 warnings |
| Strict batch proof contracts | 27/27, 0 errors; one pre-existing coideal shotgun-bracket advisory |
| Batch content policy | 27 items, 0 errors, 0 warnings |
| Manifest dependencies | 27 items, 0 errors |
| Coverage checklist | 70 harvested records, 0 errors, 0 warnings |
| Citation fidelity | 201 exact quotes, 0 missing quotes, 0 widening candidates |
| Focused depcheck/fwdcheck/extcheck | 0 errors; depcheck retains one existing non-load-bearing later-theorem link advisory in the unedited subalgebra Definition |
| Scoped dependency levels with full run context | All 27 labels match; maximum level 8 |
| Owned-page plan overlay diagnostic | 2 pages, 27 items, 0 errors; seven existing/redundant-prerequisite advisories |

The plan tool requires `--pages-file` to equal the whole run scope when `--run` is present. The attempted two-page-plus-run invocation was rejected as a selector mismatch. The successful local diagnostic uses an evidence-only copy of the canonical plan with the two owned manifest pages overlaid and selects those two pages; it does not alter the canonical plan or certify other active pairs.

Initial format/source-tool issues were addressed within this same focused round: canonical proof numbering was adopted; the merged Serre closing note was separated into Remarks; inverse-permutation notation, color counts, target Cartan symbols, the highest-vector collision and the literal antipode statement were synchronized. These corrections were concrete self/root-review findings, not repeated unchanged repair waves. Local mechanical passes are not independent mathematical acceptance or engine certification. Round 2 is reserved for a new concrete post-handoff review/gate finding.
