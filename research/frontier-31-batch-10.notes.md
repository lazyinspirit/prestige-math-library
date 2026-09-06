# Frontier 31 — batch 10 beta notes

## Scope and control record

- Owned artifacts: `research/frontier-31-batch-10.pages.json`, this notes file,
  and `research/frontier-31-batch-10.coverage.json`. No library page, plan,
  workflow state, or another batch was changed.
- The two matched design locations, `research/plan-algebraic-topology-track.md`
  L503 and L548, are the same AT-3 section rather than competing amendments.
  I treated the complete AT-3 section, including its proof architecture and
  boundary obligations following L548, as controlling. It specifies the
  quotient-complex then subdivision/small-chain then excision/Mayer--Vietoris
  route and its exact item sequence.
- Drift recorded, not adjudicated: AT-3 states prerequisites
  `singular-chains-and-singular-homology`, `long-exact-sequences-in-homology`,
  and `compactness-in-metric-spaces`, while the current plan specification and
  task require only `singular-chains-and-singular-homology-examples`. The
  manifest preserves the specification's page-level `requires`; item-level
  dependencies cite the already-published long-exact and compactness results
  when their proofs genuinely use them. Stage 1 drift owns the disagreement.
- The live autopilot status currently names the older `frontier-23` run. This
  dispatch and only these frontier-31 batch artifacts were followed; no state
  was altered to reconcile that external discrepancy.
- The A scaffold contains 32 items, below the 60-item split ceiling. It is one
  coherent proof chain; no split is warranted. Two indispensable definitions
  absent from the design's explicit list were added: `def-good-pair-for-singular-homology`
  makes the quotient corollary meaningful, and `def-well-pointed-based-space`
  makes the suspension corollary's stated hypothesis meaningful. Neither pads
  the page: each is used immediately by its named result.

## Conventions and boundaries fixed for authoring

- A fixed abelian coefficient group `G` is used throughout. Relative chains are
  `C_*(X,A;G)=C_*(X;G)/C_*(A;G)` with homological grading and a differential
  lowering degree.
- A map of pairs means a continuous `f:X -> Y` with `f(A)` contained in `B`.
  The pair connector is the boundary of a lift of a relative cycle. Its
  lift- and representative-independence is a separate lemma.
- A good pair is a pair `(X,A)` with `A` nonempty and closed in `X`, and with
  `A` a deformation retract of a neighbourhood in `X`. A well-pointed based
  space means the basepoint has a neighbourhood that deformation retracts to
  it relative to the basepoint; this is the sufficient convention used in the
  suspension statement, without importing the later cofibration formalism.
- Excision uses exactly `closure_X(Z)` contained in `interior_X(A)`. The
  companion counterexample uses `([0,1],[0,1/2],{1/2})` to show why that is not
  weakened silently.
- For a two-open cover, the signed chain sequence is
  `c |-> (c,-c)` and `(a,b) |-> a+b`. The explicit Mayer--Vietoris connector
  is defined only after a cover-small decomposition, and its independence is a
  separate lemma.
- Cover-small means every generating singular simplex lies in one cover
  member. Singular chains have finite support. A least subdivision depth is
  chosen per simplex and only a finite maximum is taken for a finite chain;
  there is deliberately no claimed uniform depth for all singular simplices.
- The mesh proof treats dimension zero separately. The sphere calculation
  treats `S^0` and reduced degree zero separately. The published suspension
  construction supplies the library's empty-space convention, while the
  suspension isomorphism is scoped to nonempty well-pointed based spaces.

## Dependency-closed scaffold checkpoint

The manifest has explicit `deps` arrays on all 41 planned items. Internal
dependencies are in the following authoring order; external dependencies were
checked on disk before being used.

| Items | Exact planned claim / role | Principal support and dependency rationale |
| --- | --- | --- |
| `def-singular-chain-complex-of-a-pair` through `thm-naturality-of-the-long-exact-sequence-of-a-pair` | Quotient relative complex, descended boundary, relative homology, functoriality, degenerate pairs, pair LES, cycle-level connector, its independence, and naturality. | Hatcher §2.1 “Relative Homology Groups”; Gutierrez L5 Cor. 7. The already-published singular-chain and homological-algebra LES items supply the only algebraic input. |
| `def-barycenter-and-affine-cone-on-a-singular-chain` through `thm-cover-small-inclusion-is-a-chain-homotopy-equivalence` | Cone, subdivision, chain-map and prism identities, mesh decay, cover-small complex, finite-chain eventual smallness, homology comparison, and its chain-homotopy strengthening. | Hatcher §2.1 “Barycentric Subdivision,” Proposition 2.21; Gutierrez L7. The published Lebesgue-number lemma and Heine--Borel theorem close the compactness argument. |
| `thm-excision-for-singular-homology`, `def-good-pair-for-singular-homology`, `cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient` | Excision with its exact closure/interior condition, then the missing good-pair convention and quotient corollary. | Hatcher Theorem 2.20 and Proposition 2.22; May Ch.14 §2. The neighbourhood/deformation-retract and quotient-space definitions are already published. |
| `lem-two-open-cover-small-chains-are-the-sum-of-the-two-singular-subcomplexes` through `thm-naturality-of-singular-mayer-vietoris` | Chain sum/intersection, signed short exact sequence, MV LES, explicit connecting class, independence, and naturality. | Hatcher §2.2 “Mayer--Vietoris Sequences”; May Ch.14 §5; Gutierrez L6 Lemma 4 and Theorem 5. |
| `thm-simplicial-and-singular-homology-agree-for-simplicial-complexes`, `cor-homology-of-spheres`, `def-well-pointed-based-space`, `cor-suspension-isomorphism-in-reduced-singular-homology` | Comparison theorem, sphere calculation, defined well-pointed convention, and reduced suspension shift. | Hatcher Theorem 2.27 and Example 2.46; May Ch.14 §3 and Ch.16 §3. The existing simplicial-chain, quotient-cone-suspension, and reduced-singular-homology items provide definitions. |
| `ex-relative-homology-of-a-disk-and-its-boundary` through `cex-relative-homology-is-not-the-homology-of-the-set-difference` | Disk pair and interval checks; triangle and circle small-chain examples; sphere and torus MV calculations; three boundary counterexamples. | Hatcher's disk and sphere computations, May Ch.13 §5 for the torus target, and the preceding A results. The excision and complement counterexamples are direct component and pair-LES calculations, not uncited assertions. |

No B item is used by the A page. The one B-to-B dependency is ordered:
`cex-relative-homology-is-not-the-homology-of-the-set-difference` uses the
earlier disk-pair example. This respects the B-leaf contract.

## Source harvest and verification record

The complete per-heading dispositions are in the coverage JSON. Each URL was
opened as a complete PDF in the configured web reader; its page count and the
web-reader verification route are recorded in `fetch_verified`. The repository
Node fetcher and curl liveness probe cannot resolve these hosts in this run
(`EAI_AGAIN` / curl 6), so they cannot supply their usual byte hash despite the
reader's successful full-document opens.

1. Allen Hatcher, *Algebraic Topology* (textbook),
   <https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf>. Read the harvestable
   contents (PDF pp. 3--4), §2.1 from “Relative Homology Groups” through “The
   Equivalence of Simplicial and Singular Homology” (printed pp. 115--133), and
   §2.2 “Mayer--Vietoris Sequences” (printed pp. 149--151). This is the primary
   source for relative quotient chains, Theorem 2.20, subdivision,
   Proposition 2.21, Proposition 2.22, Theorem 2.27, the signed MV sequence,
   and the hemispherical sphere computation.
2. J. Peter May, *A Concise Course in Algebraic Topology* (textbook),
   <https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf>. Read its
   contents (PDF pp. 4--5), Ch.13 §5 “Some examples: T, K, and RP^n” (printed
   pp. 103--106), Ch.14 §§2--6 (printed pp. 108--116), and Ch.16 §3 “Proofs of
   the theorems” (printed pp. 125--126). It independently supports the pair,
   suspension, MV, and torus targets; the coverage dispositions explicitly
   decline its alternate CW-approximation proof and later axiomatic/colimit
   material rather than pretending they were not read.
3. Marco A. Gutierrez, *Homology* Lecture 5 (course notes),
   <https://www.math.ru.nl/~gutierrez/files/homology/Lecture05.pdf>, p. 4,
   Corollary 7, supports pair-LES naturality.
4. Gutierrez, Lecture 6 “Excision Property and Mayer-Vietoris Sequence”
   (course notes), <https://www.math.ru.nl/~gutierrez/files/homology/Lecture06.pdf>,
   pp. 1--5, independently supports excision, chain-level MV, the long exact
   sequence, and sphere calculation. Its dimension-invariance and fixed-point
   applications have concrete deferred/out-of-scope dispositions in coverage.
5. Gutierrez, Lecture 7 “Proof of Excision” (course notes),
   <https://www.math.ru.nl/~gutierrez/files/homology/Lecture07.pdf>, pp. 1--5,
   independently supports the cone/subdivision/small-chain proof. Its Lebesgue
   lemma is correctly recorded as already published.

The first two sources are independent full textbooks with harvestable tables of
contents; the three Gutierrez lectures are additional independent course-note
treatments. No encyclopedia source is used.

## Proof architecture and known limits

The pair LES is an application of the already-proved abstract short-exact
complex theorem, but its geometric connecting map gets direct representative
checks. Excision is intentionally not cited as a black box: cone identity,
subdivision chain map, chain homotopy, mesh, finite-chain smallness,
cover-small equivalence, and only then quotient comparison are all scaffolded.
Mayer--Vietoris similarly starts with the signed chain short exact sequence,
then its connector and naturality.

Known limits are explicit: no relative-Mayer--Vietoris triads, no triple LES,
no global subdivision depth, no weakened excision hypothesis, no theorem that
relative homology is complement homology, and no May CW-approximation route.
The comparison theorem is scoped to simplicial complexes although Hatcher proves
the broader Delta-complex-pair version. General homology axioms, colimits and
their classical applications are deferred only to their named later pages.

## Validation checkpoint

- JSON shape check: pass — A has 32 items and B has 9; every item has an
  explicit dependency array.
- Initial attempts used the wrong validator invocation paths:
  `tools/content-policy-check.mjs` does not exist (the repository tool is
  `tools/content-policy.mjs`), and `validate-plan.mjs` expects the full
  `research/plan-spec.json`, not a batch manifest. These were command-shape
  corrections, not mathematical failures. The required correct whole-run and
  batch checks were then run with the corrected commands.
- Coverage checklist: pass — 1 A page, 5 independent full-text treatments,
  57 harvested source results, 0 errors and 0 warnings.
- Direct source-fetch stamp attempt: five failures, all `EAI_AGAIN`; no source
  text was missing or re-sourced because the configured web reader independently
  opened the exact five reader-facing PDFs. Coverage now records those complete
  opens and page counts explicitly.
- URL recovery/liveness: the probe attempted all five reader-facing URLs with
  `--recover --fail-on-dead`, found no archive alternative from this
  DNS-isolated environment, and reported five curl-6 host-resolution failures.
  This is an environment-level validation blocker, not evidence of a dead URL:
  the exact URLs opened in the document reader immediately afterward. The raw
  liveness report is intentionally temporary at
  `/tmp/frontier-31-batch-10-url-liveness.json`; no workflow artifact was edited.
- Batch-local manifest-only content policy: pass — 41 scoped items, 0 errors,
  0 warnings. The unique-id/dependency-array cross-check also reports 41 unique
  ids, 32 A items, 9 B items, and no omitted `deps` key.
- Whole-run manifest-only content policy was run as required. It is blocked by
  six unrelated missing dependencies in other frontier-31 group-homology
  scaffold records: `def-schur-multiplier-of-a-group`,
  `lem-five-term-homology-sequence-for-a-free-presentation`,
  `def-superperfect-group`,
  `thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two`, and
  `lem-positive-degree-integral-homology-of-a-finite-group-is-order-torsion`
  refer to absent group-homology/cohomology or UCT definitions. This batch does
  not own those files and none is referenced here, so no repair was made.
- Whole `research/plan-spec.json` validation: pass. It reports its normal
  redundant-prerequisite warnings and 547 page shells without item lists, but
  ends `OK` with no item cycles, forward references, B-page dependencies, or
  unresolved ids among the itemized pages.
- Batch JSON parses; a direct trailing-whitespace scan finds no defect. The
  three task artifacts are new/untracked in the shared worktree, as expected
  for this beta scaffold, so a tracked-file `git diff --check` is not the
  relevant whitespace check here.
- Final batch recheck: coverage checklist pass (57 harvested results, no
  errors/warnings); source-fetch stamp gate pass (5/5); manifest-only content
  policy pass (41 scoped items, no errors/warnings).

## Next action

The scaffold mathematics, harvest, and batch-local gates are complete, but the
required validator battery is not globally green. Carry forward the
DNS-isolated curl/Node liveness failure (the documents were independently
full-text opened) and the unrelated whole-run group-homology manifest failures
above. Re-run the liveness probe in a DNS-capable execution environment; do not
replace these verified, reader-openable source URLs merely to mask that local
transport failure.
