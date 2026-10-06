# Step 3a scope review — A/B pair `unipotent-solvable-groups-and-borel-fixed-points`

- Run: `frontier-40-geometry-braids-rep-27`; batch 18.
- A page: `unipotent-solvable-groups-and-borel-fixed-points` (order 889,
  `algebraic-geometry`; 46 items: 8 definitions, 10 theorems, 5 propositions,
  23 lemmas). B page: `unipotent-solvable-groups-and-borel-fixed-points-examples`
  (order 890; 2 examples + 1 counterexample).
- Reviewer role: alpha, scope only. No scaffold, item, manifest, coverage, plan,
  or owner record was edited. This is not an item approval and not a proof
  audit (that is Step 3b and later); the pair's items are still only the
  Step-1 scaffold in `research/frontier-40-geometry-braids-rep-27-batch-18.pages.json`.
- Decision recorded: **sufficient** (see §4), with one **potential unmet
  prerequisite inside the pair's non-smooth generality** flagged in §5 for the
  owner's decision.

## Inputs read

- `CLAUDE.md` (normative) and the dispatch task file
  `research/frontier-40-geometry-braids-rep-27-step3a-pair-unipotent-solvable-groups-and-borel-fixed-points-c5eca0040a6ea248.task.md`.
- Binding direction: `research/frontier-40-geometry-braids-rep-27-owner-authoring-direction.md`
  (local helpers permitted; in-run lower-order dependencies permitted; publish is
  an owner action).
- Design: `research/plan-algebraic-geometry-expansion-track.md` line 216, row
  **AG-GRP-3** (read complete, including the "State smoothness, connectedness,
  algebraic closedness, and completeness. Keep the char-zero Lie/unipotent
  equivalence separate" warnings and the "Second-source gate open" note), plus
  `research/plan-spec.json` pages 889/890 and the plan table row at line 38.
- Manifests: `research/frontier-40-geometry-braids-rep-27-batch-18.pages.json`
  (all 49 item records), `.coverage.json`, `.notes.md`,
  `.cross-batch-dependencies.json`, `research/frontier-40-geometry-braids-rep-27-cross-batch-dependencies.json`,
  `-drift-evidence.json`, `-scope-ledger.json`, `-planning-notes.md`.
- Whole-run context: all 54 batch `pages.json` manifests (892 items) for
  dependency, duplicate-id and consumer checks; sibling pages of batches 13, 15,
  19 and 20 for supplier/consumer statements.
- Published library: `items/` (23,441 items) for dependency resolution and
  duplicate/omission checks; `library/algebraic-geometry/smooth-projective-serre-duality-and-flag-variety-line-bundles.md`
  and `items/lem-borel-fixed-point-for-projective-actions.md` for the
  complex-specialization relationship.
- Sources re-verified at this snapshot: J. S. Milne, *Algebraic Groups*,
  corrected 2022 printing, <https://www.jmilne.org/math/Books/iAG2022.pdf>,
  local copy `/tmp/iAG2022.pdf`, 659 pp., SHA-256
  `f2ddd8fa4d263085…` matching the batch note; complete statements and proofs
  read at the locators cited in §1–§3 and §5 (Ch. 12 §12.30/12.32, Ch. 14
  Thm 14.5/Prop 14.21, Ch. 15 §15(a)–(h), Ch. 16 Thms 16.21/16.26/16.27/16.30/16.33
  and Summary 16.29, Ch. 17 Cor 17.3, Thms 17.9/17.10, Ex 17.7, Def 17.6).
  Herzig (Toronto notes) and Milne 2015 were used only through the batch
  coverage rows and notes (see §2).

## 1. Design ↔ scaffold reconciliation

The AG-GRP-3 row commissions exactly four A items and three B items. All seven
are present verbatim, in the designed roles, with no weakened or dropped claim:

| Design inventory | Scaffold |
|---|---|
| `thm-unipotent-group-triangular-criterion` | present; (a) unipotent ⟺ (b) closed subgroup of some `U_n` ⟺ (c) `O(G)` coconnected, plus faithful unipotent representation; nonsmooth/nonconnected cases retained (`α_p`, `(Z/pZ)_k`); affine hypothesis explicit (source uses affineness silently). Matches Milne Thm 14.5 + Prop 14.3/Cor 14.6 (printed pp. 281–282, PDF pp. 292, 297). |
| `thm-lie-kolchin-for-smooth-connected-solvable-groups` | present; smooth, connected, solvable, algebraically closed, both formulations (simple ⟹ dimension 1; invariant upper-triangular flags); hypotheses stated essential. Matches Milne Thm 16.30 (printed p. 335, PDF pp. 346–347). |
| `thm-borel-fixed-point-for-complete-schemes` | present; smooth connected solvable `G`, nonempty complete finite-type `X`, fixed point in `X(k^a)` (in `X(k)` over algebraically closed `k`); completeness and the group hypotheses flagged essential. Matches Milne Cor 17.3 ("If `G` is solvable and `X` is complete and nonempty, then `X^G` is nonempty; hence there is a fixed point in `X(k^a)`", printed p. 353). |
| `thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field` | present; (a) `G/B` complete for every Borel, (b) Borel conjugacy, (c) maximal-torus conjugacy, (d) Borel-pair conjugacy, for smooth connected affine `G` over algebraically closed `k`. Matches Milne Thms 17.9–17.10 and Prop 17.13 (printed pp. 353–356). |
| `ex-upper-triangular-unipotent-groups` | present; `U_n` smooth connected unipotent, `G_a ≅ U_2`, `α_p` and `(Z/pZ)_k` showing nonsmooth/nonconnected unipotent groups exist. Matches Milne Examples 14.13/14.19 and Herzig §2.1/§2.3. |
| `ex-borel-fixed-point-on-projective-space` | present; Borel subgroups of `GL(V)` are the maximal-flag stabilizers, conjugates of `T_n`; `T_n` fixes a line in `P(V)`; `GL(V)/T_n ≅ Fl(V)`. Matches Milne Example 17.7 (printed p. 354). |
| `cex-borel-fixed-point-needs-completeness` | present; `G_a` acts on `A^1` by translation, nonempty finite-type, not complete, no fixed point. Self-contained; only cites the fixed-point theorem as contrast. |

The remaining 42 A items and 0 B items are the local prerequisites that prove
the four commissioned theorems and the examples: the `U_n`/`T_n` model, the
derived subgroup and solvability, trigonalizability, coconnected Hopf algebras
and the triangular criterion, the `G_a`-central-series, character-eigen­space
splitting, the structure and splitting theorems for trigonalizable/solvable
groups, the flag variety, orbit/fixed-locus lemmas, the Hochschild/Ext
apparatus used for extension splitting, and the conjugacy theorems. They
weaken nothing commissioned: each is consumed by a named commissioned item.

Design warnings honoured: every principal statement names affineness,
smoothness, connectedness, algebraic closedness and completeness where the
proof uses them (notes repairs 1–12); no characteristic-zero Lie/unipotent
equivalence (Milne 14.37, Ado/Engel) is imported or claimed, so the design's
"keep separate" instruction is respected; the published complex
`lem-borel-fixed-point-for-projective-actions` is a specialization (connected
simply connected complex semisimple `G`, its specified Borel) with a distinct
id, so it is not duplicated or replaced.

Record nuance for the owner (not a scope change): the batch notes say the
42 local prerequisites carry `local_addition: true`; in the manifest all 46 A
items (and all 3 B items) carry the flag, including the seven design-inventory
ids. The inventory itself is intact, and no tool consumes the flag; recorded
only for record consistency.

## 2. Source coverage

`research/frontier-40-geometry-braids-rep-27-batch-18.coverage.json` carries
2 pages, 5 sources, 88 harvested rows, every row disposed:

| page | rows | included | inline | out-of-scope | deferred |
|---|---|---|---|---|---|
| A889 (Milne 2022 / Milne 2015 / Herzig) | 51 / 7 / 19 | 43 / 5 / 12 | 2 / 1 / 3 | 3 / 1 / 2 | 3 / 0 / 2 |
| B890 (Milne 2022 / Herzig) | 6 / 5 | 3 / 2 | 2 / 2 | 1 / 1 | 0 / 0 |

`coverage-checklist --require-destination` returns **2 pages, 88 rows, 0 errors,
0 warnings** (run at this snapshot).

The design's stated source range ("M22 Thm. 14.5, 16.30, Cor. 17.3,
Thms. 17.9–17.10") is fully harvested with destinations, and the row's
"Second-source gate open" is addressed for the four main claims by Herzig
§2.1–2.3 and §5.1–5.5 (independent Toronto notes: unipotent criterion,
Lie–Kolchin, Borel fixed point, structure of solvable groups, conjugacy
statements). The three out-of-scope A rows (wound/elementary unipotent groups,
general Ext of algebraic groups, general nilpotency theory) and the two
out-of-scope B rows are not consumed by any item of the pair. The five deferred
rows all name destinations, and I verified the destinations carry the material:
Milne 12.33 density → published `groups-of-multiplicative-type-and-arithmetic-tori`;
Ch. 16 §16(e)–(h) root subgroups/nilpotent structure, Ch. 17 §17(c)–(g)
parabolic/Levi structure and Herzig §6.1–6.5 → batch 19
`split-reductive-root-systems-bruhat-cells-and-parabolics`, whose scaffold
contains `def-radical-and-unipotent-radical-of-an-algebraic-group`,
`def-roots-and-root-groups-…`, `thm-bruhat-decomposition-…`,
`thm-parabolics-and-levi-decomposition`, `lem-cartan-subgroups-…`;
Herzig §§4.1–4.2 quotient existence → batch 15 AG-ACT-1, the declared
prerequisite page.

Residual source shortfall (recorded by the scaffold, restated honestly): the
Milne-only local inputs — the Hochschild cohomology/Ext apparatus (Ch. 15) and
the `G_a`-torsor triviality (2.68/2.72) — have no independent second treatment
among the sources read; Milne 2022 and Milne 2015 are not independent. This is
the design's open "second-source gate", inherited by Step 3b, not a new scope
finding.

## 3. Dependency and prerequisite ledger

All 49 items declare `deps`; the pair has 341 dependency edges on 122 distinct
suppliers: 61 resolve to **published** `items/` files (spot-checked
`status: published`, e.g. `def-complete-variety`, `def-proper-morphism`,
`thm-projective-space-proper-over-base`, `def-group-scheme-over-a-field`,
`def-morphism-and-closed-subgroup-scheme`,
`lem-nonempty-smooth-scheme-finite-separable-point`, `def-axiom-of-choice`),
61 resolve to **in-run scaffold** items — 47 on A889 itself, 7 on batch 13
`affine-group-schemes-hopf-algebras-and-rational-representations`, 7 (plus the
B-page's `lem-projective-space-action-from-linear-representation`) on batch 15
`algebraic-group-actions-orbits-stabilizers-and-controlled-quotients`. Both
pages are declared in A889's `requires`; the manifest `requires` arrays equal
`plan-spec.json` verbatim. A run-wide scan of all 892 in-run items found **0
dependency ids that resolve to neither the published library nor this run's
scaffold**; no in-run item id occurs on two pages, and none of the 49 new ids
collides with a published id.

In-run supplier statements were read for the interfaces the A page actually
consumes (affine Hopf/comodule dictionary, Hopf ideals ↔ closed subgroups,
orbit maps, stabilizers, faithful flatness, `G/H` representability and the
projective-line realization): all state exactly the hypotheses the consuming
items use. Pages (not items) of batches 13 and 15 remain uncertified — expected
at Step 3a; the cross-batch ledger marks these edges open pending supplier
certification, and the owner direction requires suppliers to be certified
before consumers.

Consumers (read-only check of sibling scaffolds): B890 uses 12 A889 items;
batch 19 (AG-GRP-4) uses 18 A889 items (`def-borel-subgroup-and-maximal-torus`,
`def-unipotent-algebraic-group`, `lem-central-ga-subgroup-…`,
`thm-borel-and-maximal-torus-conjugacy-…`, `thm-lie-kolchin-…`,
`thm-maximal-tori-in-smooth-connected-solvable-groups-are-conjugate`, …);
batch 20 (AG-GRP-5) uses 9 A889 items and its B page 1
(`lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces`). All
of these are supplied by the scaffold, at the smooth/hypothesis-restricted
generality the consumers use. The deferrals of §2 are consistent with the
consumer designs.

## 4. Scope decision: sufficient

The planned definitions, results, and examples cover the intended subject as
commissioned and as needed by the in-run consumers:

- unipotent groups: definition by representations/comodules; the triangular
  criterion `unipotent ⟺ closed subgroup of U_n ⟺ O(G) coconnected` with the
  nonsmooth and nonconnected cases kept; central series with `G_a` quotients
  and nilpotency (Milne Prop. 14.21); faithful-representation consequences;
- solvable/trigonalizable groups: derived series and its properties,
  trigonalizability and its flag/embedding forms, Lie–Kolchin, normal series
  with `G/G_u`-equivariant additive quotients, the splitting theorems
  (Milne 16.26/16.27) with the perfectness/connectedness cases stated, the
  conjugacy of maximal diagonalizable subgroups and of maximal tori
  (16.27/16.33), and the `G ≅ G_u ⋊ T` structure theorem;
- Borel theory: Borel subgroups and Borel pairs, the flag variety and
  flag-stabilizer lemma, completeness of `G/B`, the Borel fixed point theorem
  for complete schemes, and conjugacy of Borel subgroups, maximal tori and
  Borel pairs (17.9/17.10/17.13);
- examples/counterexample exactly as designed, including the completeness
  counterexample and the nonsmooth/nonconnected unipotent examples.

No commissioned item is omitted or weakened, no subject-defining topic of the
pair is missing, the source harvest covers the design range with dispositions
and destinations, and the downstream in-run consumers are supplied. A merger
is not indicated.

## 5. Flag: potential unmet prerequisite inside the pair's non-smooth generality (owner decision requested)

The pair's four commissioned claims are unaffected: they use only smooth
connected groups and the smooth-case structure theory, which is fully
scaffolded (see §4). The following concerns two **local prerequisite** items
whose statements carry extra non-smooth generality that the scaffold's input
list does not currently support. It is flagged for the owner; nothing was
edited.

- **Consuming planned items.**
  `thm-trigonalizable-extensions-split-over-algebraically-closed-fields`
  (A889), cases (a) `k` algebraically closed and (c) `k` perfect with `G/G_u`
  connected, for a general trigonalizable `G` whose largest normal unipotent
  subgroup `G_u` may be non-smooth; and, through it,
  `thm-maximal-diagonalizable-subgroups-of-trigonalizable-groups-are-conjugate`
  (A889), parts (a)–(b) for general trigonalizable `G` (part (c) is already
  smooth-only). The smooth-case consequence used by
  `thm-maximal-tori-in-smooth-connected-solvable-groups-are-conjugate` — via
  the smooth normal-series refinement `lem-smooth-trigonalizable-group-normal-series-refinement`
  (Milne Cor. 16.22), whose quotients are isomorphic to `G_a` — is covered by
  the scaffolded `prop-extensions-of-multiplicative-type-groups-by-vector-groups-split`
  (Milne 15.34(a)) and is all that any in-run consumer (batches 19–20) uses.
- **Required prerequisite claims** (Milne, *Algebraic Groups*, corrected 2022
  printing, §15(h), printed pp. 318–321, PDF pp. 329–332; SHA-256 verified
  above):
  - 15.32: `G` of multiplicative type acting **trivially** on a commutative
    unipotent `U` ⟹ `Ext^i(G,U)=0` for all `i ≥ 0`;
  - 15.33/15.36: `Ext^1(G,α_p) ≅ k/k^p` (and `= 0` when the action factors
    through `μ_p`); so `k` perfect ⟹ `Ext^1(G,α_p)=0`;
  - 15.34(b): `k` perfect, `U=α_{p^r}` ⟹ `Ext^1(G,U)=0`;
    (c): `U` étale and `G` connected ⟹ `Ext^1(G,U)=0`;
    (d): `k` algebraically closed and the action the restriction of a linear
    action on `G_a` ⟹ `Ext^1(G,U)=0`; (e): trivial action.
  - Optional wholesale route: 15.37 (`k` algebraically closed ⟹ every
    extension of a unipotent algebraic group by a diagonalizable group
    splits, printed p. 321), which would cover case (a) in one statement.
  Milne's proof of 16.26 uses 15.34(d) for case (a), 15.34(a) for case (b),
  and 15.34(c) followed by 15.34(b) at the finite-quotient step of case (c);
  the proof of 16.27(a) uses `H^1(D,N)=0` for the last term `N` of the 16.21
  series, which is again possibly finite/non-reduced (`α_{p^r}` or an étale
  subgroup).
- **Evidence of absence.** The only scaffolded Ext result is A889's own
  `prop-extensions-of-multiplicative-type-groups-by-vector-groups-split`, whose
  statement is exactly the `U ≅ G_a` linear-action case (15.34(a)); a grep of
  all 892 in-run scaffold items (54 pages) and of the published `items/`
  found no statement of 15.32, 15.33, 15.34(b)–(e) or 15.37, no `Ext^1`
  computation for `α_{p^r}`, no étale-subgroup case, and no `p`-Lie-algebra
  Ext input. The batch-18 coverage itself marks Milne §15(d) "Ext of algebraic
  groups in general" out-of-scope with the reason that "the
  extension-splitting proposition replaces Milne's Ext computations" — a
  replacement that covers only the `G_a` case. (The design row's
  "Second-source gate open" and the notes' Milne-only record for the
  cohomology apparatus are consistent with this shortfall.)
- **Confirmed vs uncertain.** Confirmed: (i) the source results exist as
  stated, with the hypotheses above, and are used in the cited Milne proofs of
  16.26/16.27; (ii) no published or scaffolded item states them today.
  Uncertain: whether the Step-3b author will supply a local proof of the
  finite/étale cases from the scaffold's existing Hochschild long exact
  sequence, linearly-reductive `H^1`-vanishing and power-map quotient (such a
  proof appears feasible but I did not verify one end to end), or will instead
  narrow the two statements to the smooth case (low downstream impact: no
  in-run consumer uses the non-smooth generality), or will record an explicit
  escalation. This is therefore flagged as a *potential* unmet prerequisite,
  not as a defect of the pair's commissioned claims.
- **Recommended scaffold addition (owner action; nothing edited here).** Add to
  A889 one local prerequisite item, e.g. `lem-ext-vanishing-for-subgroups-of-ga`,
  stating Milne 15.34(a)–(e) (equivalently `Ext^1(G,U)=0` for a
  multiplicative-type `G` acting on a closed subgroup scheme `U ⊆ G_a` in the
  linear, perfect-`α_{p^r}`, connected-étale, algebraically-closed-linear-
  restriction and trivial-action cases), with 15.32/15.33 as supporting
  clauses, sourced to Milne §15(h), printed pp. 318–321; optionally add 15.37
  (printed p. 321) as the direct algebraically-closed route. Alternatively the
  owner may direct the author to narrow
  `thm-trigonalizable-extensions-split-over-algebraically-closed-fields` and
  `thm-maximal-diagonalizable-subgroups-of-trigonalizable-groups-are-conjugate`
  to smooth `G_u`/smooth `G`, or record an explicit escalation for the
  non-smooth cases. A pair merger is not indicated: the gap is small, local to
  the `G_a`-extension inputs of this pair, and does not suggest re-scoping
  either pair.

## 6. Checks run at this snapshot (2026-10-05 local; 2026-10-04T13:56Z)

| Check | Result |
|---|---|
| `node tools/coverage-checklist.mjs research/frontier-40-geometry-braids-rep-27-batch-18.coverage.json --require-destination` | 2 pages, 88 rows, 0 errors, 0 warnings |
| `node tools/manifest-deps.mjs research/frontier-40-geometry-braids-rep-27-batch-18.pages.json` | 49 items, 0 errors |
| `node tools/step3-decisions.mjs check --run frontier-40-geometry-braids-rep-27 --phase scope` | 27 pairs, 892 items, 0 accepted; A889 listed "current scope review required" (pre-recording state) |
| dependency scan over all 54 batch manifests (892 items) | 0 ids resolving to neither published library nor in-run scaffold; 0 in-run duplicate item ids; 0 collisions with 23,441 published ids |
| published-dependency status spot-check (`items/`, including the three nonstandard-frontmatter records) | all published |
| source re-verification | `/tmp/iAG2022.pdf` SHA-256 `f2ddd8fa4d263085…` matches the batch note; Thms 14.5, 14.21, 16.21, 16.26, 16.27, 16.30, 16.33, Cor 17.3, Thms 17.9–17.10, Prop 15.3, 15.32–15.34, 15.37 read at the locators cited above |

## 7. Recording

- Scope decision written with
  `node tools/step3-decisions.mjs record-scope --run frontier-40-geometry-braids-rep-27 --page unipotent-solvable-groups-and-borel-fixed-points --decision sufficient --reason "<scope evidence + §5 flag and recommended owner action + this report path>"`.
- Report: this file. No item approvals and no owner records were written; no
  scaffold, item, manifest, coverage, plan, or engine-state edit was made.
