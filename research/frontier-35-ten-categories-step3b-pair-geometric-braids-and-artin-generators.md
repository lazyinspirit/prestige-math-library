# Step 3b — pair `geometric-braids-and-artin-generators` (dispatch report)

- Run: `frontier-35-ten-categories`
- Dispatch label: `step3b-pair-geometric-braids-and-artin-generators-773dfe50aeec0964`
- Role: alpha-high scaffold auditor and item author
- A page: `geometric-braids-and-artin-generators` (order 729, category `braid-groups`, 10 items)
- B page: `geometric-braids-and-artin-generators-examples` (order 730, 4 items)
- Batch: 15; output file `research/frontier-35-ten-categories-batch-15.pages.json`
- Owned pair only. Sibling rows (plan orders 741/742,
  `garside-structure-normal-forms-and-the-center[-examples]`) are preserved untouched;
  their 28 missing item files are the other batch-15 author's live work.

This dispatch re-audited the pair after the owner repair receipt
`research/frontier-35-ten-categories-geometric-braids-owner-step3-repair-2026-09-26.md`,
which invalidated the 14 item receipts of the earlier interrupted 3b session. It
supersedes the report previously stored at this path (dispatch label
`4b27a96bc6e10ca2`, 2026-09-24); that session's scaffold repairs are folded into the
owner repair receipt and are not re-claimed here. Every decision below was recorded
against the current disk bytes.

## Read and verified before writing

- `CLAUDE.md`, `SCHEMA.md`, the batch manifest, coverage, proof contracts and notes,
  the owner repair receipt, and the independent audit
  (`frontier-35-ten-categories-geometric-braids-independent-audit-2026-09-24.md`).
- `research/frontier-35-ten-categories-owner-authoring-direction.md`: defers only the
  batch 8 smooth-projective pair and batch 13's
  `thm-pseudointersection-number-equals-tower-number`. Neither touches this pair, so
  this dispatch carries no owner-repair workload from the direction file.
- All 14 item files and both page files, re-checking each statement, quantifier,
  implicit proof use and well-definedness claim, and the statements of the two
  published suppliers actually consumed by item 10 (`thm-von-dyck`,
  `def-relators-relations-and-finite-presentations`).

## Scope and receipts

- Scope receipt: owner `proceed`, sha256
  `1c9e0859ff6dbc1f833cb7a1a2a7e452e8d1b98d44b5fc8f2d7fefce673c1560`, recorded
  2026-09-26T09:06:12Z; current for rows 729/730.
- `step3-decisions.mjs check --phase scope`: 26 pairs, one open entry
  (`type-a-soergel-bimodules-and-hecke-categorification` needs a current review —
  another group's live work); nothing of this pair is open.
- `step3-decisions.mjs check --phase final`: 618 accepted, 65 open entries, all in
  the sibling `type-a-soergel-*` pair; **none among these 14 ids**.
- All 14 item decisions recorded this dispatch with confidence 1 and
  `--dependencies` equal to the item's authored frontmatter `deps`: item 8
  `repaired`, the other 13 `accept`. All 14 receipts verify as CLOSED at current
  hashes.
- One receipt refresh after recording: an out-of-group edit to
  `items/def-sine-and-cosine-by-power-series.md` at 2026-09-26T09:24:25Z
  (metadata only — `lem-sine-and-cosine-series-converge-everywhere` moved from
  `justified_by` into `deps`; Definition and statements unchanged) re-opened the
  B1/B2 receipts because `itemHash` covers the transitive closure. Both were
  re-recorded as `accept` with the event and the unchanged interface in the
  reason; all 14 receipts verify CLOSED again. Receipts are closure-byte
  sensitive, so further concurrent edits to shared prerequisites can re-open
  them without a mathematical change.

## Scaffold audit and item-by-item outcome

Item 8 (`lem-geometric-braids-admit-generic-polygonal-representatives`) was the one
local repair. Its manifest row (the unspliced scaffold promise) states in part
"…and which stays at a uniform positive distance from the boundary of the disc",
but the on-disk Statement carried no clearance clause. The proof already derived
the clearance, so the fix was to restore the promised claim, not to change the
mathematics:

- Statement clause 4: there is a real $b'>0$ with
  $\lVert\beta'_j(t)\rVert_2\le 1-b'$ for every $j$ and $t$ (vacuous for $n=0$),
  plus the matching clauses in the closing "Thus…" paragraph.
- Step 2.1 records the $n=1$ clearance
  $1-\lVert p_1(t)\rVert_2\ge b-\varepsilon=b/2>0$.
- Step 7.1 records $\lVert p^{(\eta)}_j(t)\rVert_2\le 1-b_1+\eta_*$ with
  $b_1-\eta_*>0$ for $n\ge 2$.

The other 13 items were re-audited and accepted unchanged: base configuration and
interior disk convention; the setwise endpoint condition and the pointwise-fixed
top consequence for isotopies; well-definedness of stacking (including $n=0$ and
$n=1$) and the group axioms; the half-twist definition with $[\sigma_i^-]=[\sigma_i]^{-1}$;
far commutativity via disjoint supports; the three-strand relation with the
reflection identity; crossing generation; the Artin map's **surjectivity only**
with both relator families instantiated in the convention of the cited definition;
and the four B items (integer twists via the argument lift, the six-window
three-strand computation, the impure-but-setwise counterexample, and the
non-braid isotopy of embedded arcs).

### Manifest `deps` sync (3 rows, this dispatch)

- item 8 dropped `cor-polynomials-over-an-infinite-domain-are-determined-by-values`
  (not used by the authored proof),
- item 9 dropped `ex-convex-subsets-of-rn-are-path-connected`,
- B1 added `lem-continuity-is-local-and-pastes`.

A fresh comparison of all 14 manifest rows against the authored frontmatter shows
zero mismatches; sibling rows are untouched.

### Proof-contract resync (this dispatch)

`research/frontier-35-ten-categories-batch-15.proof-contracts.json`: item 8 steps
2.1 and 7.1 `claim` text set to the current item steps; item 8 boundary evidence
rewritten for the `empty`, `one` and `zero` cases; item 9's `F5` citation quote set
to the current item 8 `## Statement` (the previously stored quote no longer
matched, which the strict contract had flagged).

## Conventions fixed by the pair (binding for consumers)

- Braid: $z_j\colon I\to D^\circ$ continuous, collision-free at each height,
  $z_j(0)=q_j$, top set $\{q_1,\dots,q_n\}$ setwise; $h=1/(4(n+1))$,
  $q_j=((2j-n-1)h,0)$, so every base point is interior.
- Stacking first-under-second: $(\gamma\star\beta)_j(t)=z_j(2t)$ for
  $t\le\frac12$, $=w_{\pi(\beta)(j)}(2t-1)$ for $t\ge\frac12$;
  $\pi(\gamma\star\beta)=\pi(\gamma)\circ\pi(\beta)$.
- Half twist $\sigma_i$: support disc $U_i=B(m_i,\frac32h)$, $m_i=q_i+(h,0)$; label
  $i$ below the midpoint; positive twist anticlockwise; $\sigma_i^-$ uses
  $\rho^-(t)=(\rho_1(t),-\rho_2(t))$ and $[\sigma_i^-]=[\sigma_i]^{-1}$.
- Only surjectivity of $\varphi\colon B_n\to G_n$ is claimed here; injectivity
  (presentation completeness) belongs to order 739
  (`artin-presentation-completeness-and-braid-combing`). No consumer of this page
  assumes it.

## Axiom policy

No item of this pair assumes or uses the Axiom of Choice: `def-axiom-of-choice` is
not a dependency of any of the 14 items and no proof invokes it. All finite
selections are explicit or by `lem-finite-choice`; the pair is choice-free, and
this stays recorded so no consumer inherits a hidden assumption.

## Checks actually run (2026-09-26, explicit paths, repository root)

- `node tools/tsx-run.mjs tools/precheck.mts` on the 14 item paths → **11 checked,
  0 failing** (the three definitions carry `precheck: n/a`).
- `node tools/rendercheck.mjs` on the 14 items + 2 pages → **OK — 16 files**: no
  wikilink inside math, no nested/unbalanced delimiters, no multiline display
  block, all math parses under KaTeX, all frontmatter parses.
- `node tools/proof-contract.mjs research/frontier-35-ten-categories-batch-15.proof-contracts.json --strict`
  → **0 errors, 0 warnings, 14/14 items**.
- `node tools/manifest-deps.mjs research/frontier-35-ten-categories-batch-15.pages.json`
  → **42 items, 0 normalized, 0 errors** (includes the 28 sibling rows).
- `node tools/coverage-checklist.mjs research/frontier-35-ten-categories-batch-15.coverage.json --require-destination`
  → **3 pages, 46 results, 0 errors, 0 warnings**.
- `node tools/content-policy.mjs research/frontier-35-ten-categories-batch-15.pages.json`
  → **42 scoped items, 28 errors, 0 warnings**; every error is
  `scope-item-missing` for an unauthored sibling `garside-*` id, **0 on this
  pair**.
- `node tools/validate-plan.mjs research/plan-spec.json` → **exit 0**: 1188 pages
  with item lists are acyclic and free of forward/B-leaf/unresolved edges; the
  NOTE over 431 pages without item lists **includes 729/730** (pre-splice
  Step-4 obligation, recorded below).
- `node tools/depcheck.mjs --json` → **exit 1** on repository-wide findings: 352
  errors (333 `published-unaudited`, 9 `published-unchecked`, 6 `b-leaf-content`,
  3 `justification-backward`, 1 page cycle — the Brauer-characters cycle) and 262
  warnings (140 `multi-home`, 122 `cited-not-in-deps`). **Zero** findings mention
  any id or page of this pair. Reported honestly; not a batch-15 pass.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-35-ten-categories`
  → completed. `research/frontier-35-ten-categories-batch-15.cross-batch-dependencies.json`
  is `[]` and is complete: no in-run cross-batch edge touches batch 15 (the pages
  this pair requires are already-published pages not declared in any of the 16
  batch manifests), and there are no orphaned reviews.

## Local suppliers added

None. Every item of the pair is an assigned item of the manifest; no definition or
lemma had to be inserted into an earlier A page.

## Published concerns (reported for the owner and the serial published ledger)

Neither item is a prerequisite of this pair: the 585-item transitive dependency
closure of the 14 items contains neither id. Both were re-read first-hand this
dispatch; the ledger itself is owned by the serial reconciler and was not touched.

1. `thm-the-two-strand-braid-group-is-infinite-cyclic` — **confirmed defect
   (incomplete justification; the claim itself is true; confidence high).**
   Step 2.1 reads: "With no relators present, the presented group is the free
   group on one generator. By [L2], that generator has infinite order, so
   $\sigma_1^m\neq1$ for every nonzero integer $m$." The cited [L2],
   `thm-free-groups-are-torsion-free`, states: "if $g$ is not the identity and
   $n\ge1$ … then $g^n$ is not the identity." The step therefore needs
   $\sigma_1$ to be a nonidentity element of the free group on one generator —
   exactly the nontriviality of the presented group that the presentation alone
   does not supply. Required supplier: the published
   `thm-reduced-words-form-the-free-group` (the one-letter word is a nonempty
   reduced word, distinct from the identity's empty word), or equivalently the
   universal property applied to a nontrivial target group; repair strategy:
   establish $\sigma_1\ne 1$ before applying torsion-freeness. No unpublished
   item is needed. Not load-bearing here: the B-page example
   `ex-geometric-two-strand-braids-are-integer-twists` proves its own argument
   invariant and its remark states that it does not use this theorem.
2. `thm-the-symmetric-group-has-the-coxeter-presentation` — **confirmed defect
   (proof is an external citation of the target; confidence high).** Step 1.1 is
   the whole mathematical content and reads: "For $n\ge2$, [F1] is exactly the
   displayed presentation … and [L1] transports those generators …", where [F1]
   is "Muger states in Section 4 that the symmetric groups have the
   presentation ⟨σ_i | σ_i², braid, commutation⟩". The declared dependencies
   `thm-adjacent-transpositions-generate-the-symmetric-group` and
   `thm-von-dyck` are unused by the proof steps. A citation is not a proof.
   Repair strategy: derive the presentation internally — von Dyck from the
   adjacent transpositions (with the square and Coxeter relations verified in
   $S_n$) gives the epimorphism, `thm-adjacent-transpositions-generate-the-symmetric-group`
   gives surjectivity, and injectivity needs a complete type-A exchange /
   reduced-word (word-length) argument for the Coxeter group of type $A_{n-1}$;
   only then may the source be recorded as backing. Downstream: the published
   `thm-the-braid-group-surjects-onto-the-symmetric-group` declares this theorem
   as a dependency, so it is a downstream review candidate for the reconciler.

Unrelated published debt in the repo-wide `depcheck` output (Brauer page cycle,
`published-unaudited` items, `b-leaf-content`, `justification-backward`) is left to
its owners; unrelated published debt does not block this sound new supplier.

## Open obligations at handoff

1. **Pre-splice plan mismatch (Step 4).** `research/plan-spec.json` still carries
   empty item inventories for pages 729/730; the batch manifest rows are the
   proposal and must be spliced mechanically at Step 4. `validate-plan.mjs`
   reports this as the NOTE over 431 pages, not as an error.
2. **Sibling pair unauthored.** Rows 741/742 of the shared batch file (24 + 4
   items) belong to the other batch-15 author and remain unauthored; the 28
   `scope-item-missing` content-policy errors are exactly those items. Sibling
   rows were not edited.
3. **Published concerns** 1 and 2 above; the serial reconciler owns
   `research/published-consumer-supplier-ledger.md`.
4. **BG-3/BG-6 injectivity seam (Step 4 reconciliation, order 739).** The BG-1
   design seam assigns injectivity to BG-3 while BG-6/plan place presentation
   completeness in `artin-presentation-completeness-and-braid-combing`
   (inventory-neutral). This pair proves surjectivity only and consumes neither
   claim; the wording seam stays for the owner.
5. **No owner-held escalation, no local supplier, no AC.** No escalation of this
   pair is open; no definition or lemma outside the assigned inventory was added;
   no item assumes the Axiom of Choice.

## Completed IDs (all decisions recorded, receipts CLOSED)

`def-geometric-braid-with-setwise-endpoints`,
`def-braid-isotopy-relative-top-and-bottom`,
`prop-stacking-of-geometric-braids-is-well-defined`,
`thm-geometric-braids-form-a-group`,
`def-elementary-geometric-half-twist`,
`lem-geometric-far-commutativity`,
`lem-geometric-three-strand-braid-relation`,
`lem-geometric-braids-admit-generic-polygonal-representatives` (repaired),
`lem-every-geometric-braid-is-a-word-in-half-twists`,
`prop-the-artin-presentation-surjects-onto-geometric-braids`,
`ex-geometric-two-strand-braids-are-integer-twists`,
`ex-the-three-strand-geometric-braid-relation`,
`cex-setwise-endpoints-do-not-make-a-braid-pure`,
`cex-arbitrary-link-isotopy-need-not-be-braid-isotopy`.

Next action: none for this pair until Step 4 splices these manifest rows into the
plan and reconciles the shared prose seams.
