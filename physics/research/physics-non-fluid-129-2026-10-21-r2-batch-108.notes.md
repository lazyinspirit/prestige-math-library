# Batch 108 authoring notes

Run `physics-non-fluid-129-2026-10-21-r2`; role `beta`; assigned pair
`qsmx-hall-categorification-spin` / `qsmx-hall-categorification-spin-examples`.
The owner authoring-direction override file was absent. The assigned design
section ([plan](plan-quantum-statistical-mechanics-frontier-expansion-track.md#lie-and-hall-algebra-actions-with-controlled-decategorification),
[prose scaffold](frontier-expansion-2026-10-19/quantum-statistical-mechanics/prose-scaffold.md#qsmx-hall-categorification-spin))
and `plan-spec.json` agree on the page IDs, companion, order 913, category,
library, title, and four A-page `requires`. The authored A-page item order
follows the design: spin/Hall definition, exchange theorem, then KLR theorem.
The plan's empty item arrays were staging placeholders; the assigned four
local items below now fill this pair.
No design/plan conflict was found, and neither shared plan was edited.

## Scope and dependency levels

The A page contains three items and the B page one, well below the 100-item
page cap. Current item dependency levels were recomputed on the transitive
in-run closure (9 items across 3 pages):

| Item | Level | In-run supplier determining level |
| --- | ---: | --- |
| `def-qsmx-spin-weight-and-hall-realization` | 0 | none |
| `thm-qsmx-klr-character-specialization` | 1 | the local spin/Hall definition |
| `thm-qsmx-exchange-lie-weight-blocks` | 4 | batch-106 transfer theorem (level 3) |
| `cex-qsmx-categorification-not-spectrum` | 5 | exchange theorem (level 4) |

The run's batch-level record still gives batch 108 level 2 with requirements
106 and 107. Its values were checked directly against the current record.
The scoped closure calculation had no errors and returned the levels above.
The run-wide `batch-dependency-levels.mjs check` currently reports that the
shared batch dependency snapshot is stale and must be recomputed. I left that
run-wide file to the owner.

The scoped 9-item dependency closure passed with no errors. The full-run
`item-dependency-levels.mjs check` fails on these unrelated empty scaffold
inventories elsewhere in the run: `emg-fx13`, `emg-fx13-examples`,
`gr-fx09-bootstrap-and-stability-boundaries`,
`gr-fx09-bootstrap-and-stability-boundaries-examples`,
`qftx-ribbon-braid-representations`,
`qftx-ribbon-braid-representations-examples`, `qftx-modular-tqft-sewing`,
`qftx-modular-tqft-sewing-examples`,
`qftx-chern-simons-bf-gravity`, `qftx-chern-simons-bf-gravity-examples`,
`qftx-kz-chiral-interface`, `qftx-kz-chiral-interface-examples`,
`qftx-hall-bps-wall-crossing`, `qftx-hall-bps-wall-crossing-examples`,
`qftx-categorified-line-operators`,
`qftx-categorified-line-operators-examples`,
`csm-frontier-sampling-certificates-examples`, `csm-frontier-inverse-gibbs`,
`csm-frontier-inverse-gibbs-examples`,
`csm-frontier-planar-critical-point`,
`csm-frontier-planar-critical-point-examples`,
`csm-frontier-rare-event-numerics`,
`csm-frontier-rare-event-numerics-examples`, `qsmx-quantum-double`,
`qsmx-quantum-double-examples`, `qsmx-transverse-ising-spectral`,
`qsmx-transverse-ising-spectral-examples`, `tgrx-focusing-boundary`,
`tgrx-focusing-boundary-examples`, `tgrx-ads-effective-boundaries`,
`tgrx-ads-effective-boundaries-examples`,
`tgrx-topological-entropy-models`,
`tgrx-topological-entropy-models-examples`, `tgrx-jt-disk-model`,
`tgrx-jt-disk-model-examples`, `tgrx-research-boundaries`, and
`tgrx-research-boundaries-examples`. These inventories are outside batch 108
and were not changed.

## Supplier interfaces and proof scope

The two non-run page requirements, `green-hall-bialgebras-and-quantum-group-realizations`
and `klr-algebras-induction-and-quantum-serre-categorification`, are current
published root pages. Their relevant local imported suppliers and complete
proofs were inspected; their mathematical originals are read-only. The Ringel
theorem import matches pin
`d7ade041727500d6665faec7977d77500843df239c0a6da776965e284b3cc29d`, and the
KLR negative-half theorem matches pin
`2ccbfd05b3a5ad19ac1bc0636a8a4bc086d8d72d48ad4cdcce6875a4bfd01e6c`. The
other exact imported premises used here match pins: AC
`b7ccec7b07d943518c5e392e0b3a3edd1952140776269b25dc3fd73f78475861` and the
KLR datum definition
`32fd1ec96d6a8199826258d083f44e3e5f986d99f6860bb76206008b3eb5dc55`.

The current batch-106 page `qsmx-integrable-transfer` supplies the monodromy
definition and periodic transfer/Heisenberg theorem. Both current
`loadStep1Record` / `step1Decision` results are closed and ready, with hashes
`178562686dbc4f41adf67c4e5c31337ed789f57aca1487f5258c2c8935644127` and
`9ab45dae694f9ecc437a7613dda97d498e81837be1364b0e09cca46a88641922`.
The current batch-107 `qsmx-temperley-lieb-models` page was inspected; its four
items (quantum-Potts definition, finite-Gibbs lemma, Potts/TL theorem, and
spin-singlet exchange interface) all have current closed ready records. The
full supplier conclusions and their hypotheses were checked at their actual
interfaces; these are authoring-readiness checks, not independent acceptance.

The local definition fixes the one-site `E,F,H` and `S^z=H/2` convention,
diagonal tensor action, polynomial modules, finite-field parameter, and the
one-vertex `A_1` Hall specialization. The Hall parameter `q_H` and
`nu=sqrt(q_H)` are kept distinct from the KLR grading variable and from the
physical Potts state count. The KLR item states the no-imaginary-root
symmetrizable datum and field hypotheses, defines its Laurent coefficient
ring, and proves the spin characters and zero-exchange Gibbs trace locally.
The exchange item proves the swap and auxiliary partial-trace commutators,
then the periodic Hamiltonian and weight-block trace under the actual
`N>=3`, real-coupling, and unit conventions. The B-page counterexample fixes
the Hall parameter `q_H=2` and the one-vertex type-`A_1` KLR datum over
`Q`, then uses `H_0=0` and `H_1=JP` on two spin-half sites. Both operators
are Hermitian, commute with the same diagonal action, and give traces 4 and
7/2 at `beta J=ln(2)`. It shows that the Hall/KLR interfaces and
representation decomposition do not assign a spectrum. No tensor-product
categorification or Hamiltonian assignment is claimed. Every physics
statement is a conditional finite-model deduction; no observation or
statistical inference is reported.

The local contracts retain supplier excerpts, actual proof steps, all eight
boundary classes, and finite checks. Four cross-batch edges are recorded as
`verified` in
[`physics-non-fluid-129-2026-10-21-r2-batch-108.cross-batch-dependencies.json`](physics-non-fluid-129-2026-10-21-r2-batch-108.cross-batch-dependencies.json):
the A-page requirements on batches 106 and 107, and the exchange theorem's
monodromy and transfer item inputs. Their evidence records the scoped
interface check only. There are no other declared in-run cross-batch edges.

## Sources and harvest

All eight distinct cited full texts were inspected at the recorded ranges.
The complete source-to-item mapping, URL stamps, fetch attempts, and all 19
harvested-result dispositions are in
[`physics-non-fluid-129-2026-10-21-r2-batch-108.coverage.json`](physics-non-fluid-129-2026-10-21-r2-batch-108.coverage.json).
Each unique URL succeeded on its first attempt; final
`source-fetch-check --stamp` reported 10/10 page-source records verified
(eight unique URLs, with the two B-page source rows reusing A-page stamps),
zero retries and zero drops. Since no cited URL failed, source resolution and
its history are empty. An optional PDF link from VU Lecture 15 returned a
browser internal error; the cited complete Lecture 15 HTML lecture was read
and fetched successfully, so the optional link is not treated as a failed
cited source.

| Full text and locator | Supported item(s) | Harvested result dispositions |
| --- | --- | --- |
| [Schiffmann, *Lectures on Hall Algebras*](https://arxiv.org/pdf/math/0611617v2), Lecture 3, Theorem 3.16 and proof, PDF pp. 39–40 | `def-qsmx-spin-weight-and-hall-realization` | Ringel–Green embedding and finite-type criterion: included; other quiver types, coherent sheaves, and derived Hall algebras: out of scope. |
| [Ringel, *The Hall Algebra Approach to Quantum Groups*](https://www.math.uni-bielefeld.de/~ringel/opus/elam.pdf), §7, PDF pp. 20–21 | `def-qsmx-spin-weight-and-hall-realization` | Simple classes and positive-half Hall realization: included; canonical bases and worked higher-rank cases: out of scope. |
| [Faddeev, *How Algebraic Bethe Ansatz Works for Integrable Model*](https://arxiv.org/pdf/hep-th/9605187), §3, PDF pp. 6–10, equations (24)–(65) | `thm-qsmx-exchange-lie-weight-blocks`; B-page context for `cex-qsmx-categorification-not-spectrum` | Spin-half tensor space and total spin: included on A, inline on B; rational monodromy, transfer trace, and exchange Hamiltonian: included; Bethe completeness, thermodynamic limits, and experiment: out of scope. |
| [Classical and Quantum Integrable Systems, Lecture 14](https://vu-ff.github.io/integrability/en/lectures/14/), §§14.3–14.5, equations (14.2)–(14.9), Theorems 14.1–14.3 | `thm-qsmx-exchange-lie-weight-blocks` | Heisenberg Lax operator, RTT train argument, and transfer family: included; classical limit and other models: out of scope. |
| [Classical and Quantum Integrable Systems, Lecture 15](https://vu-ff.github.io/integrability/en/lectures/15/), §15.2, Propositions 15.1 and 15.3, equations (15.1)–(15.3) | `thm-qsmx-exchange-lie-weight-blocks`; B-page context for `cex-qsmx-categorification-not-spectrum` | Regular-point exchange Hamiltonian: included on A, inline on B; Bethe vectors, completeness, and singular-root regularization: out of scope. |
| [Khovanov–Lauda I](https://arxiv.org/pdf/0803.4121), Theorem 1.1, PDF pp. 2–3, §3.2, PDF pp. 39–43 | `thm-qsmx-klr-character-specialization` | Grothendieck map and surjectivity: included; irreducible and tensor-product categorical actions: out of scope. |
| [Khovanov–Lauda II](https://arxiv.org/pdf/0804.2080), Theorem 8, PDF pp. 13–14 | `thm-qsmx-klr-character-specialization` | Arbitrary-Cartan, arbitrary-field Grothendieck isomorphism: included; additional gradings and cyclotomic quotients: out of scope. |
| [Kleshchev, *Representation Theory of Symmetric Groups and Related Hecke Algebras*](https://arxiv.org/pdf/0909.4844), §9.1, Theorem 9.1, printed pp. 39–40 | `thm-qsmx-klr-character-specialization` | Independent symmetric-group/Hecke treatment of the projective Grothendieck isomorphism: included with its type-A scope; cyclotomic highest-weight categorification: out of scope. |

## Final scoped checks and readiness

`content-policy` passed for the four items (0 errors/warnings);
`depcheck`, `fwdcheck`, and `extcheck` passed on the explicit item selection
(0 errors/warnings); precheck passed the three proof-bearing items; proof
layout reported 4 items, 14 steps, 0 defects; rendercheck passed all four
items and both pages; strict proof-contract validation passed; the coverage
checklist passed both pages with 19 dispositions; manifest dependency shape
passed for four items; and source fetch verification passed 10/10 records.
All four current Step 1 records are `ready`, non-owner records, and
`step1Decision` confirms each hash current and closed. No readiness record
asserts independent proof approval or publication.

| Item | Current Step 1 record hash |
| --- | --- |
| `def-qsmx-spin-weight-and-hall-realization` | `bc3a44dafeba83e2fb8c3c1f016332453153a5f89219f5421a6ea4a3b757f6f0` |
| `thm-qsmx-klr-character-specialization` | `4fe0aa17617cefbd8cdceb32c2db942939f5abbeb066eb4808cd6b21c4a3e6cc` |
| `thm-qsmx-exchange-lie-weight-blocks` | `f5abd21bfbe77888e8b6c5be2a4fc1adf4ece40f94440bb77d6f5d55fee3754d` |
| `cex-qsmx-categorification-not-spectrum` | `2b85a458be41f1f0d76d62bf96c094dd11fd8399a53d3f4ce88b7e967910af8d` |
