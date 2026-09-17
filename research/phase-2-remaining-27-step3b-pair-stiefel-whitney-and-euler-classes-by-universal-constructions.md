# Step 3b — pair scaffold audit and item authoring

Run `phase-2-remaining-27`; dispatch
`alpha-high-step3b-pair-stiefel-whitney-and-euler-classes-by-universal-constructions-38f167b87304f7ac`;
batch 10, this pair only. A page
`stiefel-whitney-and-euler-classes-by-universal-constructions` (order 366.037),
B page `...-examples` (order 366.038).

Status: **26 owned items (the designed 25 plus one local supplier) authored and
contracted; 25 recorded `accept` with confidence 1 and one recorded
`escalate` for an owner-held cross-group supplier; scope refreshed.** No owner
ruling was assumed, no published content was edited, and no other pair's files
were touched.

## 1. What was read before authoring

`CLAUDE.md`, `README.md`, `SCHEMA.md`, `briefs/alpha.md`,
`briefs/group-author.md`, the AT-19 design section of
`research/plan-algebraic-topology-track.md` (lines 2210–2259 and the per-pair
source matrix at 2429), the binding paragraph of
`research/phase-2-remaining-27-owner-authoring-direction.md`
(AT-19: classifying-map construction of the tautological class, then
independence and fiber normalization, then Leray–Hirsch and the coefficients;
odd-rank Euler two-torsion by `-id:(E,o)→(E,-o)` with no homotopy claim),
`research/phase-2-remaining-27-batch-10.pages.json`, `.coverage.json`,
`.notes.md`, `.cross-batch-dependencies.json`, the Step-3a review and receipt,
the Step-1 readiness records, the batch-9 consumer input, and the full
statements (and, where the argument needed them, the proofs) of all 49
published dependency items. The two authoritative PDFs were read through the
passages cited by each item: Hatcher, *Vector Bundles & K-Theory* §§1.2 and
3.1–3.3 and Miller, *MIT 18.906* Lectures 33–37; the Thom-identity locator was
corrected to Milnor–Stasheff §8 and Miller Proposition 39.10, printed
pp.151–152, as the Step-3a review required. Schoen, *Fibrations Over a
CWh-Base*, Theorem 2, printed p.165, was fetched and read in full for the
CW-type clause cited by the new local supplier.

## 2. Scaffold audit and the one local repair

The scaffold realizes the AT-19 design item-for-item in order, and the binding
owner direction is respected: `x_E` is built from a classifying map of
`gamma_E` obtained by the published bundle-embedding lemma (no use of `w_1`),
its independence and fiber normalization are proved before Leray–Hirsch is
invoked, and the odd-rank proposition uses `-id:(E,o)→(E,-o)` with oriented
naturality and the orientation-sign law only.

One substantive gap was found and repaired locally rather than escalated,
because it is provable inside the library and blocks several promised items:
the published Leray–Hirsch, Thom and Gysin theorems are stated for CW bases or
for **paracompact Hausdorff bases of CW type**, while this page must apply them
to the projective bundle `P(E)`, the flag bundle `Fl(E)` and the universal
sphere bundle's total space, none of which is given as a CW complex. The new
item
`lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type`
supplies: a numerable compact-fibre bundle over a paracompact Hausdorff base
has paracompact Hausdorff total space (Hausdorff by local product charts;
paracompactness by the tube lemma plus a locally finite refinement of the base
cover, with the finite-subcover choices declared as the AC use), and if base
and fibre are of CW type then so is the total space (Schon's Theorem 2, the
same literature fact the published Postnikov item already cites). The page
convention in
`def-characteristic-class-as-a-universal-natural-bundle-class` was widened
accordingly: admissible base = paracompact Hausdorff space of CW type
(CW complexes remain the promised case), and classification statements are
invoked only over classification-scope (paracompact Hausdorff CGWH) bases. No
promised ID, kind or claim was dropped, weakened or re-homed. The A page now
has 20 items, the B page 6.

## 3. Item decisions (all `accept`, confidence 1)

Recorded with `tools/step3-decisions.mjs record-item` after the complete item,
its proof contract and its place in the page were written and checked. Each
receipt names the examined dependency IDs and the item-specific evidence.

A page, in prerequisite order:

1. `def-characteristic-class-as-a-universal-natural-bundle-class` — accept.
2. `lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type`
   — accept (local supplier added by this dispatch).
3. `def-real-projective-bundle-and-tautological-line` — accept (choice-free).
4. `def-tautological-degree-one-class-on-a-real-projective-bundle` — accept.
5. `lem-tautological-degree-one-class-is-well-defined-and-fiber-generating` —
   accept.
6. `thm-mod-two-real-projective-bundle-theorem` — accept.
7. `def-stiefel-whitney-classes-from-the-projective-bundle-relation` — accept.
8. `thm-naturality-of-stiefel-whitney-classes` — accept.
9. `def-real-flag-bundle-and-stiefel-whitney-roots` — accept.
10. `thm-real-splitting-principle-with-mod-two-injective-pullback` — accept.
11. `thm-whitney-sum-formula-for-stiefel-whitney-classes` — accept.
12. `thm-uniqueness-of-stiefel-whitney-classes-from-normalization-naturality-and-sum`
    — accept.
13. `thm-mod-two-cohomology-of-bo-n` — accept.
14. `prop-first-stiefel-whitney-class-classifies-orientability` — accept.
15. `def-euler-class-by-zero-section-pullback-of-the-thom-class` — accept.
16. `thm-naturality-orientation-sign-and-whitney-product-for-euler-classes` —
    accept.
17. `thm-mod-two-euler-class-is-the-top-stiefel-whitney-class` — accept.
18. `prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish` — accept.
19. `prop-euler-class-of-an-oriented-odd-rank-bundle-is-two-torsion` — accept.
20. `thm-thom-identity-for-stiefel-whitney-classes` — accept.

B page:

1. `ex-stiefel-whitney-class-of-the-universal-real-line` — accept.
2. `ex-total-stiefel-whitney-class-of-a-sum-of-universal-lines` — accept.
3. `ex-euler-class-of-the-universal-oriented-two-plane` — accept.
4. `ex-euler-class-of-zero-and-trivial-positive-rank-bundles` — accept.
5. `cex-zero-euler-class-does-not-in-general-imply-a-nowhere-zero-section` —
   **escalate** (owner-held; see §6.1). The witness, the vanishing of the
   Euler class and the section-exclusion argument are complete, but the
   nontriviality of the clutching class needs the double cover `SU(2)→SO(3)`,
   which the library homes only on another group's B page and which the
   `b-leaf-content` rule forbids as a dependency. The item is not marked
   complete.
6. `cex-odd-rank-euler-class-need-not-vanish-with-two-torsion-coefficients` —
   accept.

Scope decision refreshed by `record-scope` (`sufficient`, receipt
`research/phase-2-remaining-27-step3a-review-...json`, sha256
`35f65727b848f43b1cf18be3ab31d5d7f91eeeb173ec1e0cc227e3b0e3695d90`).
`node tools/step3-decisions.mjs check --run phase-2-remaining-27 --phase final`
reports exactly one open work row for this pair — the escalated counterexample
above, which is owner-held — plus the open rows of other batches still being
authored.

## 4. Checks actually run (all on the owned artifacts)

| Check | Result |
|---|---|
| `precheck` (explicit 26 paths) | 26 checked, 0 failing |
| `rendercheck` (same paths) | OK: YAML, KaTeX, no multiline display |
| `manifest-deps` (batch-10 manifest) | 26 items, 0 errors |
| `content-policy` (item mode) | 26 scoped items, 0 errors, 0 warnings |
| `coverage-checklist --require-destination` | 2 pages, 57 rows, 0 errors |
| `source-fetch-check --coverage` | 4/4 fetch-verified, 4/4 resolved |
| `proof-contract --strict` | 0 errors, 1 warning (shotgun-bracket) |
| `boundary-audit --fail-on-contradicted --fail-on-template` | 208 rows, none contradicted, none templated |
| `citation-fidelity --fail-on-missing-quote` | 212 citations, every recorded quote present |
| `finite-smoke` | 1 check, 0 errors (Vieta on the symmetric-polynomial example) |
| `gate-liveness --min-checks 1` | live: finite-smoke 1, proof-contract 26, coverage 57, precheck |
| `validate-plan research/plan-spec.json` | exit 0; no item cycle, forward reference or B-page dependency |
| `depcheck` (owned items) | one hard error, the escalated `b-leaf-content` edge of §6.1; no other findings for the owned items |
| `frontier-dependency-ledger refresh --require-reviewed` | refreshed and deduplicated |
| `step3-decisions check --phase scope` / `--phase final` | scope closed; one owned open row, the owner-held escalation |

The scaffold-mode `content-policy --manifest-only` invocation for this batch
now reports `batch-item-already-exists` for the 26 authored IDs. That is the
expected behaviour of the Step-1 mint check once the items exist; the Step-3b
gate uses the item mode, which is clean. Recorded for Step 4/operator
awareness, not as a defect.

## 5. Local suppliers added

One item: `lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type`
(registered in the batch manifest, in the A page item list, in the coverage's
canonical and Hatcher rows, and in the proof contracts; scope refreshed).
Consumers inside the pair: the projective bundle, the flag bundle, the
splitting principle, the projective-bundle theorem over admissible bases, the
`BO(n)` computation, the mod-two Euler comparison and the Thom identity.

## 6. Findings requiring owner action

1. **Escalation (owned item) — missing legal supplier for the $S^4$
   counterexample.** Item
   `cex-zero-euler-class-does-not-in-general-imply-a-nowhere-zero-section`
   (page `...-examples`) promises an oriented rank-three bundle over $S^4$
   with $e=0$ and no nowhere-zero section. The witness is the clutching bundle
   of the double cover $SU(2)\to SO(3)$; its nontriviality is exactly a nonzero
   class in $[S^3,SO(3)]$, and the library's only statement of that covering
   homomorphism is `ex-su-two-to-so-three-as-a-covering-homomorphism`, homed
   solely on the B page `lie-subgroups-actions-and-homogeneous-spaces-examples`.
   `depcheck` rejects that edge with `b-leaf-content` (exact message quoted in
   the item's escalation receipt, sha256
   `9db1b81514aa099bfb455cd20977560a9faa7371d336004447026a61189d46a3`). It
   cannot be repaired locally from A-homed items: the library has
   `def-covering-homomorphism-of-lie-groups` and `def-quaternions`, but no
   A-page statement that the conjugation action of the unit quaternions covers
   $SO(3)$, nor an A-page identification $SO(3)\simeq\mathbb{RP}^3$ or
   $\pi_3(SO(3))\cong\mathbb Z$; every other clause of the item is complete
   (clutching witness, $e=0$ because $H^3(S^4;\mathbb Z)=0$, and a
   nowhere-zero section splitting off a trivial line whose rank-two complement
   is trivial by the contractible universal cover of $S^1$, forcing the
   witness to be trivial and contradicting step 2.1). Proposed remedies, in
   order of preference: (a) the owner re-homes or restates the covering
   example on the A page `lie-subgroups-actions-and-homogeneous-spaces` so it
   becomes a legal supplier; (b) the owner authorizes a grandfathered
   `b-leaf` edge in `research/b-leaf-legacy-allowlist.json`; (c) the owner
   authorizes this pair to add a fully proved local A-page supplier (quaternion
   double cover and $\pi_3(SO(3))\cong\mathbb Z$) before the counterexample.
   This is the only reason the pair does not close; it does not affect the
   other 25 items.
2. **Suspicion, not a confirmed defect — scope wording of
   `lem-homotopic-grassmannian-maps-classify-isomorphic-bundles-and-conversely`.**
   Its Statement reads "Homotopic maps … pull back isomorphic tautological
   bundles **when X is paracompact Hausdorff**. Conversely, if the two
   pullbacks are isomorphic, then f_0 and f_1 are homotopic after the standard
   stabilization. In particular, classifying maps obtained from two numerable
   embeddings of one bundle are homotopic." The paracompactness hypothesis
   belongs to the forward clause: its proof uses it only through [F1]
   (`thm-homotopy-invariance-of-vector-bundle-pullback`), while the converse
   is proved in steps 1.2–3.1 from the stable-Stiefel contraction and the
   image-plane identification alone. This page's independence proof
   (`lem-tautological-degree-one-class-is-well-defined-and-fiber-generating`,
   step 1.1) reads the converse in that base-free way and says so explicitly;
   the fiber-restriction step is applied over the compact fibre, where every
   reading of the hypothesis holds. **Required suppliers/repair:** none
   mathematically; if the owner wants no ambiguity, the smallest repair is to
   split the item's Statement into two sentences with the hypotheses attached
   clause by clause. Confidence that the mathematics is as used: high;
   confidence that the published sentence cannot be misread: moderate.
3. **Confirmed recording defect already reported by Step 3a and repaired here
   for this batch's item:** the scaffold gave
   `thm-thom-identity-for-stiefel-whitney-classes` the locators "Hatcher
   §§3.1–3.2 pp.77–94" and "Miller Lectures 35–37 pp.129–142", neither of
   which contains the identity (Hatcher's VBKT has no Steenrod squares; the
   identity is Miller Proposition 39.10, printed pp.151–152). The authored item
   cites Milnor–Stasheff §8 and Miller Proposition 39.10. The coverage row and
   the item now agree; no further action is requested beyond the canonical
   ledger entry the Step-3a review already produced.
4. **Coverage locator precision (this batch's file, corrected in place):** the
   Theorem 3.9 row now reads printed pp.84–90 (statement at the foot of p.84)
   and the Proposition 3.10/3.11 row now reads pp.86–88. These were recording
   nits, not mathematical defects.
5. **Scope observation, not a defect:** the library's Leray–Hirsch and Serre
   spectral sequence items are stated for path-connected CW bases, while
   Hatcher–Milnor–Stasheff use them over paracompact bases. This page absorbs
   that mismatch locally (CW component decomposition inside the
   projective-bundle theorem, transfer along a homotopy equivalence from a CW
   complex, the new closure lemma, and Schoen's theorem for CW type). No
   published item is claimed to be defective, and no cross-group change is
   required by this pair. If a later page needs the general paracompact-base
   form of Leray–Hirsch as a citable statement, that is an enrichment request.

Two dependency repairs made during authoring, both to remove illegal
cross-page dependencies on examples: the fiber-normalization lemma now derives
the standard classifying inclusion of the tautological line from the
definition of the tautological bundle, and the orientability proposition now
proves $\mathbb{RP}^\infty\simeq K(\mathbb Z/2,1)$ from the contractible double
cover $S^\infty\to\mathbb{RP}^\infty$ and the exact homotopy sequence. Both
items were re-recorded after the edit.

No other potentially defective published item was identified during this
authoring pass; the 49 published dependencies were used only through clauses
their statements and proofs actually contain, and each such use is recorded in
the proof contracts with an exact quoted excerpt.

## 7. Choice accounting

Every item declares AC in its `axiom_strength` and frontmatter where it is used:
classification and embedding (AC through the published classification /
embedding suppliers), bundle metrics, general Thom classes, Gysin/Leray–Hirsch
and the Serre spectral sequence, and the finite-subcover choices of the new
closure lemma. The items that can avoid choice do so:
`def-real-projective-bundle-and-tautological-line` (gluing only),
`def-tautological-degree-one-class-on-a-real-projective-bundle` (a pullback
along one supplied map), the projective-relation algebra, the pair sequences
and relative cup products, and the orientation-sign computation of the odd-rank
proposition. No item consumes a Recorded result and none reaches
`deferred-set-theory-beyond-choice`.

## 8. Open obligations and handoff notes

- **Owner-held:** the escalated counterexample of §6.1; the pair cannot close
  until the owner supplies or authorizes the missing supplier. Everything else
  in the pair is recorded and green.
- The engine's post-author certification (`step3-auditor-items.mjs certify`)
  may or may not treat the new lemma as an auditor-created addition depending
  on when its baseline snapshot was taken; all 26 items therefore also carry
  ordinary `accept` receipts, so the pair closes either way.
- Step 4 must splice the A page's 20 IDs (including the new lemma) into
  `research/plan-spec.json`. The batch manifest, the A/B page files and the
  coverage file already agree item-for-item.
- The batch-9 consumer rows in
  `research/phase-2-remaining-27-batch-9.cross-batch-dependencies.json` were
  written against this pair's scaffold; every supplier they name still carries
  the clause quoted there, with two enrichments worth the batch-9 owner's
  attention: `thm-whitney-sum-formula-for-stiefel-whitney-classes` now also
  states the trivial-summand consequence, and
  `prop-euler-class-of-an-oriented-odd-rank-bundle-is-two-torsion` now proves
  the odd-rank statement over all admissible (paracompact Hausdorff CW-type)
  bases. No consumer is blocked.
- The one warning retained deliberately is the `shotgun-bracket` warning on
  `thm-mod-two-cohomology-of-bo-n`: its long induction steps cite several
  facts at once by construction, and the contract maps every fact to the
  specific steps that use it. It is nonfatal and does not hide an unused fact
  (the contract checker fails on unused facts).
- This pair's own cross-batch input remains `[]`: both page prerequisites are
  published and the later AT-20 pair owns the downstream consumer edges.
- No unresolved mathematical obligation remains inside the pair; every item is
  complete, contracted and recorded except the owner-held escalation of §6.1.
  Published-item concerns above are the only other routed findings.
- Operational note for the next reader: two helper scripts under `/tmp` were
  overwritten mid-dispatch by another concurrent agent using the same paths.
  The authoring scripts used afterwards were moved to dispatch-unique paths
  (`/tmp/step3b-38f167b8-*.mjs`); no shared repository artifact was affected,
  and all 25 non-escalated items were re-recorded after the final edits so
  their receipts hash the current content.
