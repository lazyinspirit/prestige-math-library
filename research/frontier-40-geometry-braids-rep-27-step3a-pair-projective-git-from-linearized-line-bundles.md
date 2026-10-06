# Step 3a dispatch report — `projective-git-from-linearized-line-bundles`

- Run: `frontier-40-geometry-braids-rep-27`
- Dispatch label: `step3a-pair-projective-git-from-linearized-line-bundles-d13b1308af9e23ed` (attempt 1, role alpha)
- A page: `projective-git-from-linearized-line-bundles` (order 883, batch 17)
- B page: `projective-git-from-linearized-line-bundles-examples` (order 884, batch 17)
- Decision: **sufficient** (scope only; recorded via `tools/step3-decisions.mjs record-scope`)
- Scope hash at review: `994972cc5aaeb16ddc3e39cfa2244eecb71abfb654fbaeee2e7fbca2e111a82e`
  (sha256 over the pair's `{id,title,category}` and each item's `{id,kind,title,statement}`)
- No scaffold, coverage, plan or item file was edited; this is an alpha review, not an owner record.

## 1. Inputs read

- Batch 17: `...-batch-17.pages.json`, `.coverage.json`, `.notes.md`,
  `.cross-batch-dependencies.json`; all 17 A-item and 2 B-item statements, and the
  load-bearing strategies.
- Batch 16 (direct prerequisite): `...-batch-16.pages.json` and the ten supplier
  statements the pair consumes; owner repair review `...-owner-reductive-quotients/`
  (`review.md`, `checks.json`, `source-inventory.json`), and the owner authoring
  direction.
- Plan/design: `research/plan-algebraic-geometry-expansion-track.md` row AG-ACT-4
  (L213) and the Hilbert–Mumford successor note (L293); `plan-spec.json` orders
  883/884 (empty item lists, `requires = AG-ACT-3 + AV-18/19/22`); run selection
  and scope ledger; step-1 drift verdict for this pair (`no-drift`); step-1
  planning notes.
- Published prerequisites: `library/scheme-theory/quasi-coherent-and-coherent-sheaves-and-vector-bundles.md`,
  `.../proj-projective-schemes-twisting-sheaves-and-ampleness.md`,
  `.../cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes.md` all present.
- Source PDFs re-verified byte-for-byte against their recorded stamps in `/tmp`:
  Dolgachev `1,079,098 B / a8dd7e454af26ddf`; Brion `678,378 B / 1abc97e4b6ff41d6`;
  Hoskins `724,241 B / 0248893f9fa6e973`; Newstead (Wayback copy)
  `222,797 B / 18a50cebe7d7c8a0`.

## 2. Design versus scaffold (scope only)

AG-ACT-4 commissions exactly four A rows (`def-g-linearization-of-an-invertible-sheaf`,
`def-semistable-and-stable-points-for-a-linearization`,
`thm-projective-git-quotient-from-invariant-section-ring`,
`thm-good-and-geometric-quotient-on-stable-locus`) and two B rows
(`ex-gm-on-projective-line-with-two-linearizations`,
`cex-semistable-locus-depends-on-linearization`). All six are present with the
commissioned kinds (4 definitions/theorems and 1 example + 1 counterexample), 0 missing,
0 claim changes. Batch 17 also carries 13 run-local helpers: the invariant graded-ring
construction and its tensor-power/graded-localization lemmas, the equivariant-embedding
power, the affine-chart and gluing lemmas for `Proj R(X,L)^G`, the linear `P(V)` case,
and the recorded external remark. These are exactly the "invariant graded-ring
construction" and quotient-construction route the design requires to be proved rather
than cited; no commissioned claim is displaced by them.

Design constraints honoured:

1. Every theorem takes the `G`-linearization of an ample `L` as a hypothesis; no item
   constructs or assumes a linearization of an arbitrary ample bundle.
2. The existence statement is recorded, not claimed: `rem-linearization-existence-outside-this-pair`
   (`proved_here: false`) keeps the connectedness and normality hypotheses and the
   `PGL(V)` non-liftability example, as the design's warning requires.
3. No Hilbert–Mumford criterion is stated or used anywhere; the design defers it to the
   separately source-gated successor AG-GIT-HM-1 (plan L293). The coverage rows for
   Brion, Hoskins, Newstead and Dolgachev all decline the numerical-criterion sections
   with explicit reasons.
4. The design's one open source gate — "read and close the omitted proof [of Brion 1.35]
   using MFK or Dolgachev" — is closed on Dolgachev. Verified directly against the full
   text (not only the scaffold notes): printed pp. 118–120 Theorem 8.1 ("there exists a
   good categorical quotient `π: X^ss(L) → X^ss(L)//G` … the restriction of `π` to
   `X^s(L)` is a geometric quotient … there exists an ample `L'` with `π^*(L') = L`")
   with its proof, and printed pp. 120–121 Proposition 8.1 ("Assume `X` projective and `L`
   ample; `R = ⊕ Γ(X,L^n)^G`; then `X^ss(L)//G ≅ Proj R`; in particular projective")
   with its proof. These are precisely the two main claims of the pair; the Brion
   proposition that the design called incompletely proved is thus backed by an
   independent complete treatment. I did not re-derive Dolgachev's printed proofs
   line by line.

`requires` matches the design: AG-ACT-3 (batch 16, in run) plus published AV-18/19/22;
the B page requires only its A page.

## 3. Source coverage

- `coverage-checklist`: 2 pages, 48 harvested rows, 0 errors, 0 warnings.
- Dispositions: 31 `included`, 2 `inline` (Newstead Example 3.3 → the embedding
  equivalence; Hoskins Example 5.8 → the companion computation), 4 `deferred` (all to
  batch 16's affine theory), 11 `out-of-scope`, each with a mathematical reason tied to
  the design's exclusions (Hilbert–Mumford, `S`-equivalence, general quasi-projective
  Mumford theory, normality, linearization existence, uncommissioned example families).
- Bookkeeping checks: the pair's main theorems are each backed by at least two
  independent treatments (Brion, Dolgachev, Hoskins/Newstead); the example and
  counterexample computations are backed by Newstead Example 4.1 (n ≥ 2, with the same
  argument at n = 1), Hoskins Example 5.8, Dolgachev Examples 8.1–8.4, and Brion
  Example 1.32's twist computation.
- MFK is a documented drop (six genuine recovery attempts recorded); its harvested
  result (Theorem 1.10) is covered by Dolgachev Theorem 8.1/Proposition 8.1 and the
  local chain, so the drop waives only the fetch, not any mathematics.

## 4. Prerequisite audit

Mechanical resolution over all 19 items: 153 dependency edges — 79 to published items
(33 distinct ids, every file present under `items/`, including the Proj/twisting/ample
and cohomology suppliers), 74 in-run (51 in-pair, 23 cross-batch to batch 16 across 10
distinct suppliers), **0 unresolved**; all 52 distinct `[[wikilink]]` targets resolve and
there are no dead links. The cross-batch ledger has the expected 24 rows (1 page edge +
23 item edges) with the required claim and use recorded for each; `status: open` there is
the normal pre-authoring state and is not a scope finding.

Batch 16 (AG-ACT-3) is the only run-local supplier. Its 13 items are ready, and the
owner repair review's carrier hashes match the current files exactly
(`pages ed5d437f…`, `coverage 5bd603bb…`, `cross-batch 16e6884c…`). The owner review
requires projective-GIT consumers to re-read the categorical-quotient, invariant-localization
and stable-locus statements and their inherited AC; discharged: the current batch-16
statements of `def-categorical-and-geometric-quotients-of-classical-varieties`,
`thm-stable-locus-geometric-quotient`, `thm-invariant-ring-finite-generation-and-affine-categorical-quotient`,
`lem-reynolds-operator-and-invariant-subring-properties` and
`thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group` contain
every clause the batch-17 strategies cite (Reynolds `A^G`-linearity/idempotence and
graded conclusions, surjectivity, unique closed orbit per fibre, closed images,
stable-locus geometric quotient), and every batch-17 statement that inherits AC says so.

**Unmet prerequisites: no confirmed gap.** No consuming item requires a claim absent from
both the published library and this run's scaffold. Three honest uncertainties, none of
which changes scope:

1. *Uncertainty (authoring).* `lem-linearizations-powers-and-equivariant-section-ring`
   uses the identification `Γ(G×X, O_G⊠L) ≅ O(G)⊗Γ(X,L)` (its "Künneth" step) to build
   the coaction. No item states this identification for an affine group factor (the
   library's Künneth items are topological; repo search for such an identification in
   `items/` returns nothing). It is standard and should follow from the published
   pullback/tensor machinery (AV-18) plus affineness of `G×X → X`, but the author should
   derive it in-proof; if Step 3 finds the derivation needs a named supplier, that is the
   one place a small owner-authorized scaffold addition may be wanted.
2. *Uncertainty (dischargeable hypothesis).* `lem-graded-invariants-of-localization-at-an-invariant-element`
   assumes "`R_A` preserves degrees". Batch 16 supplies naturality of the Reynolds
   operator, from which degree preservation on `G`-stable graded pieces follows; the
   batch-17 item carries it as an explicit hypothesis, so nothing is missing, but the
   author should discharge it explicitly when writing the proof.
3. *Fetch only.* MFK was not retrievable; see §3.

## 5. Role in the library and non-blocking observations

- Intended role: the library's projective GIT construction page, successor to AG-ACT-3
  and predecessor of the future Hilbert–Mumford criterion pair (AG-GIT-HM-1). Within the
  plan-spec it is currently a leaf: only its B companion requires it and nothing else in
  this run or the published library consumes it, so no downstream consumer obligations
  attach at this step.
- The B page carries the design's two commissioned items and is adequate for its role:
  it shows (semi)stability and the quotient genuinely depend on the linearization, with
  the explicit `G_m`-action on `P^1` (standard, twisted and empty cases) and the
  degenerate one-point case; its computations are consistent with the A-page definitions
  it consumes.
- Non-blocking tooling observation: `content-policy --manifest-only` run on batch 17
  alone reports 23 `batch-dependency-missing` errors for the batch-16 suppliers, which is
  the tool's expected behaviour when predecessor batches are out of scope; batches 13–17
  combined pass 77 items with 0 errors, 0 warnings.
- No owner decision names this pair; no merger or enrichment has been directed, and none
  is recommended. No published item or defect is involved.

## 6. Checks run (actual results)

- `node tools/manifest-deps.mjs research/frontier-40-geometry-braids-rep-27-batch-17.pages.json` → `19 item(s), 0 normalized, 0 error(s)`
- `node tools/manifest-integrity.mjs --run frontier-40-geometry-braids-rep-27` → `54 page(s) owed, 54 in the manifests; no scope drift`
- `node tools/coverage-checklist.mjs research/frontier-40-geometry-braids-rep-27-batch-17.coverage.json` → `2 page(s), 48 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27` → `892 item(s) checked across 54 page(s); maximum level 39` (no errors)
- `node tools/content-policy.mjs --manifest-only` batches 13–17 → `77 scoped item(s), 0 error(s), 0 warning(s)`
- Custom resolver over batch 17: 153/153 dependency edges resolved (79 published / 74 in-run), 52/52 wikilink targets resolved, 6/6 design ids with matching kinds.
- `sha256sum` of the three batch-16 carrier files equals the owner `checks.json` bindings; local PDF hashes equal the recorded coverage stamps.

Not rerun: live network `source-fetch-check`/`url-sweep` stamps (run at scaffold time:
8/9 fetch-verified, 1 documented drop); the four decisive PDFs were instead verified
locally byte-for-byte against their stamped hashes.

## 7. Uncertainty and what this review does not decide

This is a scope review: it does not certify proofs, item readiness, or authoring quality;
Step 3b and Stage 5 carry those. I read all 19 items and the load-bearing strategies but
did not attempt line-by-line proof reconstruction. The Künneth identification in §4.1 is
the one point flagged as potential authoring friction, and it is an uncertainty, not a
confirmed gap. Owner action requested: none for scope — proceed to authoring; the owner
remains the only authority on any later merge or enrichment.
