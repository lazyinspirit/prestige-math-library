# Batch 9 — Quantum Affine Type A and Level-One Fock Space: scaffold notes

Run `frontier-44-special-representation-examples-28`, pair `quantum-affine-type-a-and-level-one-fock-space`
(order 1534) / `quantum-affine-type-a-and-level-one-fock-space-examples` (order 1535),
`special-topics-in-representation-theory`.

**Status of this batch.** Manifest populated: 22 A-page items and 5 B-page items, all labelled with
`dependency_level` and recomputed after the final dependency edit. All 27 items carry a fresh `ready`
record (`step1-decisions check` reports zero batch-9 work rows on current bytes). Coverage:
2 pages, 90 harvested rows, 0 errors, 12/12 sources fetch-verified. Cross-batch inputs: 13 declared
edges, each with a review row in
`frontier-44-special-representation-examples-28-batch-9.cross-batch-dependencies.json`; 0 orphaned
reviews. Whole-run `--require-reviewed` is still red because batches 11, 16, 17, 18, 23, 24, 25 have
not yet supplied their batch inputs (their manifests are still empty shells); that is not a
batch-9 defect and is recorded here, not hidden.

## 1. Binding owner direction applied

`research/frontier-44-special-representation-examples-28-owner-authoring-direction.md` was read before
construction. The QG-6-relevant instruction is the final-quantum-interface section: “Future 9 Fock and
16 finite-rank type-A consumers must use these exact interfaces. Semi-infinite wedge bars,
tail/truncation compatibility and two-sided-unbounded affinized vector evaluations require their own
local source arguments; the finite ordered tensor theorem is not that proof.” Consequences implemented:

- The semi-infinite wedge bar, the tail/truncation compatibility and the affinized vector evaluations
  are proved locally from the type-A sources (KMS, Stern, Leclerc, KMPY, Misra–Miwa), never imported
  from QG-5’s finite ordered tensor-bar theorem.
- The only QG-5 interfaces consumed are the two exact IDs
  `def-lower-global-basis-of-a-quantum-highest-weight-module` and
  `thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis`, both with `ready` records,
  used only for the identification of the restricted wedge global basis on the empty component.
- No early QG-6 item depends on the two transferred late QG-5 global theorem IDs, and no QG-6 item
  depends on QG-5’s quasi-R tensor-bar theorem.

## 2. Plan/design conflicts and route decisions recorded

1. **plan-spec vs design item inventories.** `research/plan-spec.json` carries both pages with
   `items: []` (page-level validation only), while `research/plan-quantum-groups-track.md` QG-6 lists
   16 A items and 5 B examples, and `research/quantum-groups-planning/proposed-items.json` adds light
   dependency skeletons. The current plan exposes no item-level content to conflict with, so the
   manifest contains the design’s 16 + 5 claims plus six local suppliers required for mathematical
   closure: `lem-the-level-one-vector-representation-has-a-perfect-crystal-with-lower-global-basis`,
   `def-the-affine-hecke-algebra-action-on-finite-tensor-powers-of-the-vector-representation`,
   `lem-the-q-antisymmetrizer-determines-the-finite-q-wedge-kernel`,
   `lem-the-q-wedge-relations-coincide-with-the-type-a-energy-braiding-kernel`,
   `lem-the-fock-space-tail-estimates-give-q-adic-vanishing-and-finiteness`,
   `lem-the-node-count-is-the-level-one-cartan-pairing`. All 16 design IDs are preserved verbatim.
2. **Route for the “explicit R−1 kernel”.** The design defines the finite wedge space by the
   “explicit R−1 kernel”, i.e. the general KMPY §3.3 definition `N = Ker(R~ − psi(z tensor 1, 1 tensor z))`.
   KMPY §3.2 cites the properties (3.2.1)–(3.2.4) of the normalized R-matrix and the estimate (3.2.4)
   to [KMN1] (Kang–Kashiwara–Misra–Miwa–Nakashima–Nakayashiki, *Affine crystals and vertex models*),
   which is not fetchable in this run. The manifest therefore keeps the design’s object and proves the
   same quotient through the type-A q-antisymmetrizer/Hecke formulation, which is complete in three
   independently fetched treatments (KMS §1.2–1.3, Stern §4.3, Leclerc §3.3–3.5); the local lemma
   `lem-the-q-wedge-relations-coincide-with-the-type-a-energy-braiding-kernel` is the explicit bridge
   (comparison of KMS (41)–(42) with KMPY Prop. 5.2.1’s `C_{i,j}`, plus the energy congruence and the
   Hecke normalization). This is recorded as a route adjustment forced by source availability, not as
   a change of any approved claim.
3. **Index conventions.** The design fixes the residue of a node as `column − row mod e`. The manifest
   fixes one self-consistent set: residues `c − r mod e`, `E_i` removes a residue-`i` node (weight
   `+alpha_i`), `F_i` adds one (weight `−alpha_i`), level-one weight
   `wt(|lambda>) = Lambda_0 − sum_j m_j(lambda) alpha_j`, toral action
   `K_i|lambda> = q^{N_i(lambda)}` with `N_i = (addable i-nodes) − (removable i-nodes)`, and node order
   by content (larger content = to the right). The identity `N_i(lambda) = delta_{i0} − sum_j a_ij m_j(lambda)`
   is isolated as `lem-the-node-count-is-the-level-one-cartan-pairing`; it is the load-bearing
   convention bridge, and the e=2 calibration (`f_0|3,1> = q^{-1}|3,2> + |3,1,1>`,
   `e_0|3,1> = q^{-2}|2,1>`) is carried to the B page. KMPY’s own indices are shifted relative to the
   design’s residues (their `wt(b_i) = Lambda_{i+1} − Lambda_i` versus the library’s section of
   `P_cl -> P`); the manifest fixes the library convention and states the translation explicitly.
4. **Axiom of choice.** `thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals`
   (batch 7) assumes AC and uses it to split an integrable module into highest weight components. The
   design’s item 14 consumes exactly that theorem, so `thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero`
   declares AC, adds `def-axiom-of-choice`, and identifies the single use; the consumers
   `thm-the-basic-representation-global-basis-is-unitriangular-in-the-partition-basis`,
   `def-regular-partition-label-convention-and-mullineux-crystal-involution` and the B items carry the
   inherited assumption in `axiom_use`. The choice-free alternative (Misra–Miwa Theorem 4.7) is
   recorded in the same fields; no incompatible-axiom branch is used.
5. **A_1^{(1)} separately.** The design’s “include A_1^{(1)} separately” is implemented in items 2, 3,
   14 and 16 and in the B example `ex-the-affine-a-one-double-edge-serre-cancellation-on-partitions`
   (double edge `a_01 = a_10 = −2`, cubic Serre relation with `[3]_q`).

## 3. Source evidence and reading honesty

Fetch evidence (`source-fetch-check --stamp`, 12/12 stamped; locators in the coverage file):

- **Leclerc, Fock space representations** — author-hosted copy `leclercb.users.lmno.cnrs.fr/lectnotes_final.pdf`.
  The HAL copy advertised in the track ledger began answering with a bot wall (HTML, 1445 chars) for
  all six recorded tool attempts; the alternate author-hosted location was found by search and
  verified directly (HTTP 200, `application/pdf`, 302817 bytes, 41 pages, complete text extraction with
  the same §2–§5 numbering). The failed attempts are preserved as `replacement_history` on the source
  row so the recovery allowance is not silently reset.
  Read: §2 (classical Fock space and node action), §3.1–3.14 in full (presentation, U, tensor action,
  affine Hecke algebra, q-wedges, straightening, bar, canonical bases, Fock action, node formulas,
  Exercises 15–17, crystal and global bases, Prop. 14).
- **KMPY, Perfect crystals and q-deformed Fock spaces** — read §2.1–2.2, §3.1–3.3 (Lemmas 3.3.1–3.3.3,
  Prop. 3.3.6, Cor. 3.3.7, Props. 3.3.9/3.3.14, Theorem 3.3.12), §4.1–4.3 (Theorem 4.2.1, Props.
  4.2.3–4.2.8, Props. 4.3.1–4.3.2, Lemmas 4.3.3–4.3.5, Props. 4.3.6–4.3.9, Lemma 4.3.10), §5.2 and
  Appendix B. Limitation recorded: the PDF text layer drops many symbols, so the displayed formulas
  were reconstructed from the readable prose; the Step-3 author must re-check the printed displays
  (especially (3.3.1), (3.2.4), (4.3.1)–(4.3.2)) against the printed pages.
- **KMS, Decomposition of q-deformed Fock spaces** — read §1.1–1.4 (presentation including the n=2
  relations (9)–(10), evaluation module (16)–(23), affine Hecke algebra (24)–(32), q-antisymmetrizer and
  Props. 1.1–1.3, wedge relations (43),(45), Fock space and action (51)–(53), Prop. 1.4) and §2.1–2.3
  (Heisenberg decomposition, Prop. 2.3). This preprint is the type-A spine; the proof of the
  well-definedness of the Fock action is a sketch there, closed in the manifest by the KMPY estimates
  of item 10.
- **Stern, Semi-infinite wedges and vertex operators** — read §1.1, §2.2, §3 (partially) and §4.1–4.3
  (evaluation modules, Hecke q-antisymmetrization, Prop. 4.1, the convergence conjecture that KMS
  replaces by the quotient definition).
- **Misra–Miwa** — read §2–§4 (Fock action and weights, Theorem 3.1, Theorem 3.2, Prop. 3.3,
  Prop. 4.3, Lemma 4.5, Theorem 4.7). Limitation recorded: the fetched Project Euclid copy has a poor
  text layer; statements were reconstructed from the readable prose and the parallel treatment in
  Leclerc’s notes and Fayers’ paper, and the author should re-read the printed pages.
- **Leclerc–Thibon** — read §2 (node action (3)–(4), wedge relations, B_k), §3 (Prop. 3.1, Theorems
  3.2–3.3), §4 (Theorem 4.1, small-rank matrices) and §5 (n=2 tables, conjectures). This is a short
  announcement; it is used as a second independent treatment of the node formulas and the global basis,
  not as the proof source for the wedge construction.
- **Fayers** — read §2 fully (good/cogood positions, Theorem 2.1 quoting Misra–Miwa Theorem 4.7, the
  n-regular counterpart, Theorem 2.2) and §3–4 for the crystal-setting context.

The KMPY §3.2 R-matrix properties (3.2.1)–(3.2.4) are recorded as stated there with their proof
attribution to [KMN1]; that paper was not read in this dispatch, which is the reason the page’s
primary closure runs through the Hecke/q-antisymmetrizer route above and only the *energy congruence*
content of (3.2.4) is isolated in the bridge lemma (item 7) for direct verification.

## 4. Readiness, residual risks and escalations

No item is escalated: every item has a complete local proof route with the suppliers named in its
`strategy` and a `ready` record. The honest residual risks for Step 3 authoring, each tied to an exact
item, are:

1. `lem-the-q-wedge-relations-coincide-with-the-type-a-energy-braiding-kernel` (item 7) — the bridge
   from the design’s R−1 language to the Hecke quotient is a finite comparison of two explicit lists
   (KMS (41)–(42) versus KMPY Prop. 5.2.1) plus the q-integrality of the Hecke action; the author must
   carry it out rather than cite it, and must fix the z-normalization of `R~` against `T_i`.
2. `lem-the-fock-space-tail-estimates-give-q-adic-vanishing-and-finiteness` (item 10) — the KMPY
   estimates are quoted in KMPY’s indexing; the author must re-derive them in the library’s convention
   (residues c−r, ground state `b°_m = z^{ceil(m/e)} b_{m mod e}`) and must not import any
   two-sided-unbounded evaluation statement.
3. `thm-the-basic-representation-global-basis-is-unitriangular-in-the-partition-basis` (item 22) —
   depends on the batch-8 lower-global-basis interface; the author must keep the ring split
   `A = Z[q,q^{-1}]` versus the `A_0` crystal lattice explicit, per the batch-8 records, and must not
   assume any lower-lattice self-duality.
4. `thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero` (item 20) and its consumers —
   the AC declaration must be carried into the item files exactly as recorded in the manifest
   `axiom_use` fields.

Published defects: none found. The eight in-run suppliers consumed by this batch
(`def-crystal-graph-epsilon-phi-and-weight`, `def-crystal-lattice-and-crystal-basis`,
`def-quantum-weight-module-and-integrability`, `thm-integrable-quantum-highest-weight-module-exists-and-is-unique`,
`thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals`,
`thm-the-highest-weight-crystal-b-lambda-exists`, `def-lower-global-basis-of-a-quantum-highest-weight-module`,
`thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis`) all carry current `ready`
records, and their statements were read and matched to the exact batch-9 uses (see the cross-batch
file evidence fields). Batch 8 is artifact-incomplete at the run level; its two escalated global
theorems are not consumed here.

## 5. Consumer interface promised to later batches (12, 16, 23–25)

Future QG-6 consumers must use these exact IDs and conventions:

- Fock space and residues: `def-level-one-partition-fock-space-and-node-residues` (residues `c − r mod e`,
  level-one weights `Lambda_0 − sum_j m_j alpha_j`), `def-the-node-order-and-n-i-exponents-for-fock-space`,
  `lem-the-node-count-is-the-level-one-cartan-pairing` (toral action `q^{N_i}`, `sum_i N_i = 1`).
- Action and relations: `thm-the-semi-infinite-quantum-group-action-is-well-defined-and-integrable`,
  `thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations` (including the e=2 cubic
  Serre relation), `prop-the-empty-partition-generates-an-integrable-highest-weight-submodule`.
- Crystal: `thm-the-crystal-of-level-one-fock-space-is-the-good-node-partition-graph`,
  `thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero` (AC carried),
  `def-good-and-cogood-nodes-by-residue-signature-reduction`,
  `def-regular-partition-label-convention-and-mullineux-crystal-involution`.
- Global basis: `thm-the-basic-representation-global-basis-is-unitriangular-in-the-partition-basis`
  (dominance-unitriangular, `Z[q,q^{-1}]` coefficients, `G(lambda) = |lambda> mod qL`; the ambient
  basis is not component-compatible).

## 6. Checks actually run (current bytes)

| check | result |
|---|---|
| `node tools/coverage-checklist.mjs research/...-batch-9.coverage.json --require-destination` | 2 pages, 90 harvested results, 0 errors, 0 warnings |
| `node tools/manifest-deps.mjs` (all 28 manifests) | 502 items, 0 errors |
| `node tools/content-policy.mjs --manifest-only` (all 28 manifests) | 502 scoped items, 0 errors |
| `node tools/source-fetch-check.mjs --coverage research/...-batch-9.coverage.json` | 12/12 fetch-verified, 0 drops |
| `node tools/item-dependency-levels.mjs check --run ...` | only the empty shells of batches 11, 16, 17, 18, 23, 24, 25 remain red; batch 9 contributes no error and its labels were recomputed after the last dependency edit |
| `node tools/step1-decisions.mjs check --run ...` | 484/502 recorded items ready; 0 batch-9 work rows; the 18 residual item rows are all batch 10 (`klr-algebras-induction-and-quantum-serre-categorification`), scaffolded concurrently by another worker and not this batch’s to close |
| `node tools/frontier-dependency-ledger.mjs refresh --run ...` | 13/13 batch-9 edges reviewed, 0 orphaned reviews; `--require-reviewed` remains red because batches 11, 16, 17, 18, 23, 24, 25 have not supplied their inputs yet |

Owner/operator reconciliation and the full engine gate follow construction; no readiness record here is
independent mathematical approval.


## Owner correction — current9→23 proof interfaces (2026-10-08)

The preceding native scaffold/readiness and escalation narrative is authentic history, superseded for current authoring by the actual owner-amended contracts and `frontier-44-special-representation-examples-28-owner-quantum-fock-repair.md`. This is source/proof repair at Step1, not an independent audit, item authorship or whole-step closure. Every native ID is retained; current9 has29 (24A+5B) with only the necessary finite-residue-cube and independent rank-one Serre suppliers; current23 has8 (5A+3B). No current registrar pass has yet occurred.

Current exact conventions: fixed coproduct Leclerc HeckeS=-qt,Y=z; KMPY MAIN opposite-channel energy/R is bridged by explicit loop/factor flip. The normalized LEFT R fraction swaps loops and its cleared kernel is established in the original Laurent domain. Full straightening, bounded-index tails, charge Ω_M and finite bar truncation are actually proved. A0/fullfield completion and integralZ[q] completion are distinct. The raw A0 FULL partition lattice is crystal-stable by actual normalized tensor strings on disjoint residue cubes, including e2; ordinary Chevalley poles are not minimum-exponent crystal rules. Full vertices are ALL partitions; only the QG empty component is regular. Its p(k) full field decomposition remains proved, not dropped. Good=removable,e; cogood=addable,f in both corrected models. Conjugation is the LINEAR model J with reflected colors, distinct from same-model Mullineux and adjoint upper-bar formulas.

All five9 examples and all eight23 contracts now carry exact corrected calculations/consumer proofs. Top-to-bottom means DECREASING content. Restricted signatures top-to-bottom cancel−+,FIRST−/LAST+; QG decreasing-content cancels+−,LAST−/FIRST+. Basic lower columns are rectangular in ambient partition coordinates; upper uses D_rect H^-1 with FIELD inverse H and may have rational ambient coefficients. Restricted graded A-duality remains perfect in the actual dual-lattice frame, not the lower lattice. The lower D-transpose symmetry is false in degree4 e2; printed LT symmetry concerns BAR A. Actual e3 21 module/crystal and transported-color tables are separated;4 prime=1111. Symmetric-group characteristic is prime p=e, and e0 means source quantum characteristic0, not the nonexistence of 'nontrivial zeroth roots'.

Coverage retains native body fetch stamps and harvest history while mapping actual local proof uses honestly. Leclerc author body is38pages302817bytes SHA32da60cfed68246e..., verified by PyMuPDF and actual full relevant arguments; do not reuse the old41-page HAL count. Stern exact native stamped body was not independently reread by this owner and supplies no unclosed prerequisite. Kleshchev survey66pages SHA8685199608967fa7... actual§2.1/§3.4/Example3.2/Remark5.5/7.4/8.2/11.4–11.5 reading fixes source hypotheses; no blanket entire-survey proof reading is claimed.

Remaining before genuine readiness: fresh source/schema/dependency/order/coverage/cross-input checks, exact affected-consumer closure, root mathematical review and serial binding authoring-direction reconciliation, then root-authorized guarded registrar pass. All native readiness records remain authentic historical evidence and have not been manually stamped.

## Step-3b author checkpoint (2026-10-10)

All 29 items (24 A + 5 B) are authored in `items/` at the manifest claims and
the owner-fixed conventions, and both pages exist in
`library/special-topics-in-representation-theory/`. The batch manifest gained
the actual fact-use dependencies (13 rows refreshed, levels rechecked clean),
the batch proof contracts file exists with authored boundaries, the batch
cross-batch input records actual consumer uses (39 rows, refreshed), and the
29 ordinary item decisions are recorded (10 accept, 16 repaired, 3 escalate).
Escalated consumers and their exact consuming steps: see
`…-step3b-pair-quantum-affine-type-a-and-level-one-fock-space.md` (unfinished
suppliers `thm-integrable-quantum-highest-weight-module-exists-and-is-unique`
at F3/step 3.1 of the vacuum proposition and F2/steps 1.1-2.1 of the label item;
`prop-integrable-quantum-highest-weight-modules-are-semisimple` at F3/step 3.1 of
the semi-infinite action theorem). Group-j scope declines for batch 9 were
decided "stands"; the batch-10/11 rows are left for their owners. This
checkpoint is not independent mathematical review; Steps 5-7 follow.
