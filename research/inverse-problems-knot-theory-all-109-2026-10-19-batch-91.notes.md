# Batch 91 authoring record

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Pair: KT-38, Lee deformation and Rasmussen's s-invariant  
Scaffold input: `348d4637204638057e4a7af8065d055e344e68d67a8457a5f069d68ea414e2c1`

## Current run and owner direction

The owner direction at `research/inverse-problems-knot-theory-all-109-2026-10-19-owner-authoring-direction.md` controls over stale task/design text. The native status command reports the run as running, with `1-scaffold` incomplete, 75/109 batches covered, no workers in flight, and existing owner-held blockers: Step 1 repair/recertification is required, and the unit prerequisites contain cycle 67 → 75 → 67. At the final status read (2026-10-19T00:12:37.856Z), no workers were in flight. This authoring pass does not change `.autopilot/` state or resolve those owner holds.

## Plan resolution and inventory

The controlling design is KT-38 in `research/plan-knot-theory-track.md` (the complete section at lines 1125–1145), expanded by the current pair's prerequisite map. `research/plan-spec.json` agrees on the A/B identities, titles, category and order, and requires `spectral-sequences`, `smooth-and-topological-knot-concordance`, and `khovanov-homology-and-jones-categorification`. The prerequisite-map's KT-38 summary row omits `spectral-sequences`; the dispatched manifest and canonical plan-spec both include it, so the manifest's three requirements control.

The batch inventory has 13 A-page items and two B-page items. The current in-run dependencies and computed levels are recorded in the batch manifest. Two local helpers are included because the stated invariant requires them: Lee filtered homology must be shown independent of diagram before defining `s(K)`, and the positive-knot and mirror formulas are used to verify the assigned trefoil examples.

The prerequisite map creates a dependency cycle: `thm-lee-homology-of-a-knot-has-two-generators` lists `def-rasmussen-s-invariant`, while the definition needs the rank-two/filtration result. The controlling KT-38 design orders the rank-two theorem before the definition. The carriers use that acyclic order and the theorem proves no claim involving `s(K)`.

The prerequisite-map statement for `lem-lee-filtered-spectral-sequence-and-two-orientation-classes` says the two canonical orientation classes themselves have filtration levels differing by two. That is not Rasmussen's convention: for the crossingless unknot the two canonical classes have the same filtration level, while their sum and difference lie in the two distinct mod-4 filtration summands. The carrier now proves the canonical basis by segment-label subcomplexes and computes the exact two levels from the sum/difference expansions. The source nesting bit is $1$ for counterclockwise circles, as in Rasmussen §2.4; the earlier draft's clockwise bit was reversed and is corrected. Rasmussen §3.1 and the independent Stanford lecture notes §5.6 support this distinction.

The prerequisite map lists full AC for the classical Lee/s branch. The actual construction uses no full Axiom of Choice. The explicit axiom branch is `AC_omega`, used by the current oriented Reidemeister theorem for passage from isotopy to a finite move sequence and by the current smooth-slice-genus definition's Seifert-surface existence interface. The finite Lee algebra and state calculations are choice-free. No full-AC supplier is used.

## Item dependency levels

The final full-run dependency-level check reports no batch-91 errors. It still reports pre-existing empty-inventory and stale-level errors in unrelated inverse-problem and knot-theory batches; these are recorded below and were not edited. Levels are computed from actual in-run `deps` edges; published/external context does not raise them.

- Level 0: `def-odd-khovanov-barnatan-and-leo-triple`.
- Level 2: `def-lee-deformed-khovanov-complex`.
- Level 4: `lem-lee-filtered-spectral-sequence-and-two-orientation-classes`.
- Level 6: `thm-lee-filtered-homology-is-an-oriented-link-invariant`.
- Level 7: `thm-lee-homology-of-a-knot-has-two-generators`.
- Level 8: `def-rasmussen-s-invariant`.
- Level 8: `lem-odd-khovanov-and-barnatan-localization-foundations`.
- Level 9: `lem-lee-cobordism-filtration-genus-bound`, `cor-rasmussen-s-for-positive-knots`, `lem-rasmussen-s-mirror`, `thm-leo-local-equivalence-group-and-concordance-map`, and `rem-leo-refined-s-current-computations`.
- Level 10: `thm-rasmussen-s-bounds-smooth-four-ball-genus`.
- Level 11: `ex-knot-kt-38-worked-cases`.
- Level 12: `cex-knot-kt-38-boundary-case`.

## Supplier inspection and current obligations

The actual batch-90 Khovanov definition, algorithm, square-zero lemma, signed local cancellation model, Reidemeister-chain-homotopy lemma, and oriented-link-invariance theorem were read. Current Step-1 records for the signed local cancellation and Khovanov invariance items are `ready`; this reflects construction readiness only, not independent acceptance. The Lee proof uses the stated state/sign conventions and rechecks the Lee-deformed operations rather than transferring the even-algebra conclusion without verification.

The actual batch-74 smooth concordance, locally flat surface/collar, slice-genus definition, minima lemma, and concordance-group theorem were read. The smooth slice-genus branch assumes `AC_omega` and obtains nonemptiness by pushing a Seifert surface into the four-ball; the minimum then follows from well-ordering. The combined concordance-group theorem leaves topological connected-sum compatibility unresolved. The LEO group carrier uses only its proved smooth clause, but its knot-map claim remains escalated for odd movie and Künneth gaps. No topological group conclusion is imported. The broad A-page edge to the batch-74 smooth/topological concordance page remains open because that page contains the unresolved topological theorem.

The later KT-41 definition `def-knot-floer-filtration-and-tau` is a legitimate later-page reference from the B example/counterexample; it is declared only in `forward_refs`, never in `deps`.

The generic-movie definition in batch 93 was inspected because the Lee cobordism proof uses it. It defines a generic movie but does not prove generic-projection/Cerf existence. This extra assigned-item dependency is recorded open in the batch-91 cross-batch file; no batch-93 file was edited.

## Source retrieval provenance

The owner-requested authoritative full texts were inspected in the locators recorded in the carriers and coverage ledger. The source fetch stamp succeeded for all nine batch-91 URLs. During earlier source discovery the guessed Lipshitz–Sarkar identifier `2004.04353v2` did not identify the cited paper and an NSF-hosted candidate returned HTTP 502; title search located the correct full-text source `arXiv:2109.09018v3`, whose Proposition 2.1 localized-cube proof was read. The mistaken candidates are retained here as retrieval history, not as source dependencies. The exact NSF URL and timestamp were not retained in the available handoff, so that prior HTTP 502 is recorded by host/outcome only rather than reconstructed. The Lee v2 PDF title is “On Khovanov invariant for alternating links”; the cobordism carrier no longer cites its uninspected §§5–6. Bar–Natan §9.3 is recorded only as characteristic-two adjacent context, not as the integral h-deformation proof.
## Mathematical checkpoints

The classical Lee/Rasmussen branch is proved locally from the rational deformed Frobenius algebra, finite oriented-resolution cube, bounded filtration, canonical orientation states, and elementary cobordism maps. The Lee RII/RIII substitutions use the batch-90 signed cancellation matrices after step 1.1 verifies the Lee neck-cutting identity. The arguments are textual and do not rely on diagrams. The canonical-class proof uses checkerboard segment labels, Boolean subcubes, square-face rescaling and the exact 1,X expansion parity.

The B leaves retain the unknot, both trefoils, and the 2-twisted positive-clasped Whitehead double of the right trefoil with the source's twist convention. The Hedden–Ording paper reports its Rasmussen value using a computed Khovanov Poincare polynomial and its Floer value using a separate calculation. Those numerical claims will not be marked ready without a local finite calculation and exact state/chain evidence; any missing calculation will be named in the B item and its decision record.

The DLS computation remark is kept as a dated source report: as of April 2023, the paper reports 890 obstructions among the then-17,991 smooth-sliceness-unknown prime knots through 19 crossings, with at least 832 topologically slice. It is not represented as an independently recomputed or current census.

## Earlier checkpoint (superseded by final checks below)

At this checkpoint the carriers were authored while final evidence checks and Step-1 records were still pending. The completed checks, decisions and current blockers are recorded at the end of this note. No page summary was generated; both page bodies remain empty.

### `def-lee-deformed-khovanov-complex` — level 2 — ready

Defines the rational Frobenius algebra $\mathbb Q[X]/(X^2-1)$, its signed state cube and decreasing quantum filtration. The proof checks unit/counit, coassociativity, Frobenius basis identities, signed square cancellation and the two +4 deformation terms. Direct in-run supplier: batch-90 even Frobenius algebra; published conventions: cochain/filtering definitions. Sources: Rasmussen §§2.3–2.4; Stanford §§5.5–5.6; Lee §§2–3. It is diagram-level and claims no Reidemeister invariance.

## Completed carrier checkpoints

### lem-lee-filtered-spectral-sequence-and-two-orientation-classes — level 4 — ready

Claim: for a finite oriented diagram, the bounded rational Lee filtration yields the Khovanov homology page and converges to filtered Lee homology; the 2^c canonical orientation states form a basis; for a knot, the extremal levels differ by two. Hypotheses: finite state cube over Q, normalized crossing/sign conventions, and cochain/filtration reindexing. In-run suppliers: Lee complex, even Khovanov procedure and square-zero lemma. Published suppliers: cochain reindexing, decreasing/increasing filtration translation and bounded spectral-sequence abutment. The former unnecessary long-exact-sequence dependency was removed. Sources: Rasmussen §§2.3–2.4, 3.1; Stanford §§5.5–5.6; Lee §§2–4.2. Complete proof: black-right checkerboard labels equivalent to parity-of-nesting, cube decomposition by diagram-segment labels, contractible Boolean cubes after square-face rescaling, and parity of 1,X terms in orientation sums/differences. The counterclockwise parity bit is corrected.

### thm-lee-filtered-homology-is-an-oriented-link-invariant — level 6 — ready

Claim: normalized Lee complexes are filtered chain homotopy equivalent under oriented link isotopy; later pages and filtered homology are invariant. Hypothesis: AC_omega for finite oriented Reidemeister sequences. Suppliers: Lee complex, signed local cancellation models and Lee spectral lemma. Sources: Rasmussen §§2.3 and 6; Stanford §§5.5–5.6; Lee §§3.2 and 4.2. The proof verifies the Lee neck-cutting identity on all four basis pairs, writes both R1 retractions, and substitutes Lee operations into batch-90 RII/RIII identity pivots. The finite-sequence choice is the only axiom use; local algebra is choice-free.

### thm-lee-homology-of-a-knot-has-two-generators — level 7 — ready

Claim: the two orientation classes form a basis of knot Lee homology, with diagram-independent filtered vector-space type under AC_omega. Suppliers: the canonical-class lemma and filtered-invariance theorem. The 2^c result specializes to c=1; AC_omega is used only for finite diagram-move comparison.

### def-rasmussen-s-invariant — level 8 — ready

Claim: s=s_max−1=s_min+1 for the finite induced Lee filtration. Hypotheses: AC_omega, nonzero two-dimensional Lee homology and finite filtration. Suppliers: rank-two theorem and filtered invariance. The extrema follow from finite support; their difference two is supplied by the canonical-class proof. AC_omega enters only through diagram independence.

### lem-lee-cobordism-filtration-genus-bound — level 9 — escalated

Claim: for a supplied finite connected genus-g movie, the Lee map has filtered degree −2g; the isomorphism and two-sided s-bound remain escalated. Hypotheses: AC_omega, collared smooth cobordism and finite movie. The birth/saddle/death algebra and Euler-characteristic shifts are calculated. [L1]: Rasmussen §6 computes one RIII orientation-connectivity case and asserts four other outside-arc patterns and label reversals without calculation. [L2]: the adapted-Morse theorem gives finitely many surface critical points, but no proof supplies generic-projection/Cerf movie existence; the generic-movie item is only a definition. Proposed supplier: a generic-projection/Cerf-decomposition theorem on a knot-cobordism A page. Both gaps affect the isomorphism and genus bound.

### cor-rasmussen-s-for-positive-knots — level 9 — ready

Claim: s(K)=n−k+1 for a positive diagram. The finite state calculation includes n=0,k=1 (the unknot) and gives s=0. AC_omega is inherited through the definition of s; the diagram expansion itself is choice-free.

### lem-rasmussen-s-mirror — level 9 — ready

Claim: the reverse mirror sends s to −s. The proof uses the Frobenius pairing and complementary cube q/i shifts; AC_omega enters only through the diagram-independent s definition.

### thm-rasmussen-s-bounds-smooth-four-ball-genus — level 10 — escalated

Claim: |s(K)|≤2g_4^sm(K). The punctured surface and unknot calculation are explicit. The conclusion remains escalated because the connected-cobordism lemma requires both unresolved Reidemeister III orientation transport [L1] and finite generic-movie existence [L2].

### def-odd-khovanov-barnatan-and-leo-triple — level 0 — ready

Claim: defines the odd exterior cube, integral Bar–Natan algebra/complex, mod-(2,h) comparison candidate, LEO triples and local maps. The proof now checks BN counit, coassociativity and Frobenius identities, and gives explicit odd merge/split maps. The sign assignment is supplied data, not an existence claim. Sources: ORS §§1.1–1.3; Bar–Natan §9.3 (a characteristic-two variant, not the integral h-deformation); Putyra §§2–3; DLS §§2.1–3.1.

### lem-odd-khovanov-and-barnatan-localization-foundations — level 8 — escalated

Claim: conditionally proves odd square-zero, mod-2 edge comparison and localized Bar–Natan rank-one homology; full statement is escalated for sign existence, odd invariance, movie naturality and connected-sum tensor formulas. The localized cube contraction is proved locally by idempotent labels, square rescaling and Boolean-cube contractions. Remaining exact gaps: ORS Figure 4 parity census; signed RIII contractions/cocycle checks; module-linear odd movie square; odd Künneth action and sign corrections.

### thm-leo-local-equivalence-group-and-concordance-map — level 9 — escalated

Claim: abstract LEO local-equivalence classes form an abelian group; the smooth concordance assignment remains escalated. The proof gives finite-free duality, coevaluation by identities, signed evaluation chain maps, reduced-square homotopies and localized rank-one equivalences. Unresolved: marked odd movie square/localized BN equivalence and connected-sum odd Künneth signs. Only the proved smooth branch of the concordance-group supplier is used; the topological branch is not imported.

### rem-leo-refined-s-current-computations — level 9 — ready

Claim: records the DLS source report that as of April 2023, 890 of 17,991 then-unknown smooth-sliceness prime knots through 19 crossings were obstructed, with at least 832 topologically slice. The only independent check is 890/17,991≈4.95%; no current census or knot-by-knot calculation is asserted.

### ex-knot-kt-38-worked-cases — level 11 — escalated

Claim: unknot s=0, right/left trefoils s=±2, right trefoil smooth four-ball genus one, and the stated two-twisted positive-clasped Whitehead double (s,tau)=(2,0). The unknot/trefoil calculations are local; the example explicitly marks the Whitehead finite Khovanov and Floer calculations absent. Its genus claim inherits both cobordism gaps.

### cex-knot-kt-38-boundary-case — level 12 — escalated

Claim: the Whitehead-double source values imply s≠2tau. The arithmetic refutation is complete conditional on the two values; the example’s Khovanov/Floer computations and the genus-bound inputs remain escalated. The later tau definition is a forward reference, never a dependency.

## Final checks and Step 1 decisions

- Scoped precheck: 15 proof-bearing items checked, 0 failures.
- Scoped proof-layout: 15 items, 55 numbered steps, 0 defects.
- Strict proof contracts: 15/15 items, 0 errors and 0 warnings; every current proof step, fact tag, supplier excerpt, and boundary reference is mapped.
- Renderer check: 17 assigned item/page files, all pass KaTeX, YAML, display-math, and link-in-math checks. TikZ diagrams are outside proof sections and their text states that proofs do not rely on them.
- Content policy: 15 scoped items, 0 errors or warnings. Both A/B pages remain YAML-only with zero-byte Markdown bodies.
- Statement/link audit: all 15 complete statement-like sections have no inline hyperlinks; required links remain in immediately following references sections.
- Dependency check: all 15 carriers and both pages pass; 1,619-item dependency closure checked, 0 errors and warnings.
- Source coverage: 1 A page, 9 full-text sources, 30 harvested results, 0 checklist errors or warnings. Fetch verification: 9/9 sources stamped and 9/9 verified in check mode.
- Dependency levels: no batch-91 errors. The full-run checker exits with 68 unrelated errors (62 empty inventories and 6 stale levels, including existing KT-50 items); none of the 15 batch-91 carriers is named.
- Cross-batch input: all 26 declared batch-91 edges match the 26 review rows. The two open edges are the broad smooth/topological concordance page prerequisite (batch 74) and the movie-existence dependency for the cobordism lemma (batch 93). A read-only full-run collection cannot complete because batch 108 has an invalid review/consumer-ownership row; no other batch was edited.
- Step 1 records were written without owner override: ready — def-odd-khovanov-barnatan-and-leo-triple, def-lee-deformed-khovanov-complex, lem-lee-filtered-spectral-sequence-and-two-orientation-classes, thm-lee-filtered-homology-is-an-oriented-link-invariant, thm-lee-homology-of-a-knot-has-two-generators, def-rasmussen-s-invariant, cor-rasmussen-s-for-positive-knots, lem-rasmussen-s-mirror, rem-leo-refined-s-current-computations. Escalated — lem-lee-cobordism-filtration-genus-bound, thm-rasmussen-s-bounds-smooth-four-ball-genus, lem-odd-khovanov-and-barnatan-localization-foundations, thm-leo-local-equivalence-group-and-concordance-map, ex-knot-kt-38-worked-cases, cex-knot-kt-38-boundary-case. Their exact unresolved claims and supplier hypotheses are recorded in each carrier's [L1]–[L4] entries and in the Step 1 reasons.
- Step 1 hash check: all 9 ready records are current; 6 items are escalated; 0 ready records are stale.
- These are construction-readiness records, not independent approvals. The carriers remain drafts; no published content or engine state was changed.

The native autopilot status remains running at 75/109 scaffold batches, with the owner-held stage blockers listed above. The latest repository commit inspected was 50139bdcb6 (defer compact construction artifact scans until author drain).
