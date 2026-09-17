# Step 3b report — pair `gelfand-theory-and-commutative-c-star-algebras`

- Run: `phase-2-remaining-27`, batch 4. Role: alpha-high, this pair only.
- A page: `gelfand-theory-and-commutative-c-star-algebras` (37 items).
- B page: `gelfand-theory-and-commutative-c-star-algebras-examples` (14 items).
- Artifacts written: 51 item files, two library pages, 51 contract entries added to
  `research/phase-2-remaining-27-batch-4.proof-contracts.json` (the sibling pair's
  40 entries preserved; scope extended to all 91 batch items), the refreshed
  Step 3a scope receipt for the A page, 51 Step 3b item receipts, and this report.

## Decision

**Pair complete.** All 51 scaffolded items are fully authored, all checks below are
green for this pair, and every item carries a current `accept` decision with
confidence 1. Nothing is escalated: no unmet prerequisite, no irrecoverable
source uncertainty, no required cross-group change. One statement was
strengthened (item 18, documented below) and the scope receipt was refreshed
accordingly; every other promised claim and every original ID is preserved.

## Scaffold audit and repairs

| Repair | Reason |
|---|---|
| `lem-zero-free-entire-function-of-exponential-type-is-an-exponential`: statement strengthened by the constant $M$ (zero-free entire $f$ with $\lvert f\rvert \le M e^{C\lvert z\rvert}$ satisfies $f(z) = f(0)e^{az}$) | The theorem's two-variable step (item 19) produces the bound with an unavoidable factor $e^{2\lVert b\rVert\lvert w\rvert}$ that cannot be absorbed into a linear exponent in $\lvert z\rvert$; the old $M = 1$ form is insufficient for its own consumer. The proof was supplied locally (Carathéodory estimate derived from the Schwarz lemma, then Liouville), not read from the source's strict-inequality version. |
| `ex-c-zero-of-a-locally-compact-space`, `ex-unitization-corresponds-to-one-point-compactification`: dependency `ex-c0-is-a-banach-space` removed, completeness of $c_0$ proved inline | `ex-c0-is-a-banach-space` is homed only on the examples page `normed-and-banach-spaces-examples`, so it can never be a dependency of another item (depcheck `b-leaf-content`); the scaffold had declared it anyway. |
| Dependencies added where facts genuinely cite suppliers (FA-17 in-batch items; `def-axiom-of-choice`, `def-dependent-choice`, `def-countable-choice`, `thm-choice-implies-dependent-implies-countable-choice`; `thm-complex-plane-is-complete`, `thm-compactness-under-continuous-maps`, `thm-maximal-ideal-space-is-compact-hausdorff`, `cor-cauchy-theorem-convex-domain`, the complex-power-series/Schwarz/Liouville/chain-rule suppliers, `def-zero-sets-and-cozero-sets`, `def-prime-and-maximal-ideals`, one-point-compactification items, `thm-stone-representation-for-boolean-algebras`) | Every cited source must be declared; the strict contract gate rejects an undeclared citation, and depcheck had flagged the same uses as `cited-not-in-deps`. All added suppliers are either earlier items of this batch or published items. |
| Unused fact rows removed (`thm-characters-on-a-unital-banach-algebra-are-continuous` L5; the Gelfand–Naimark row of `ex-c-zero-of-a-locally-compact-space`) | Facts with links must each carry an exact citation contract, so an unused row is a defect; the proofs do not use them. |
| Body wikilinks removed from the two recorded orientation remarks that pointed at proved items (`rem-nagata-cp-theorem-remains-topological`, `rem-wiener-lemma-is-developed-on-the-fourier-analysis-track`) | A `proved_here: false` remark must stay outside every dependency path; the links were reworded so the remarks remain dependency-free. |
| `forward_refs` declared on `thm-spectrum-as-character-values` for its link to the B companion counterexample | Orientation-only link to the examples page, per SCHEMA §3. |
| Axiom propagation: `ex-c-zero-of-a-locally-compact-space` now states the inherited Axiom of Choice explicitly | Its proof consumes the unitization/Gelfand-representation items that assume AC, so the assumption is propagated to the statement, as the dispatch requires. |

No item was dropped, reclassified or given a scope exemption. The refreshed Step 3a
receipt (`record-scope`, decision `sufficient`) covers the current scope hash, which
changed only through the item-18 statement strengthening.

## Authoring notes (where the mathematics actually needed work)

- **Maximal ideals (items 4–6).** Properness of the closure of a proper ideal,
  Zorn on proper ideals (including the empty chain), the quotient as a field, and
  Gelfand–Mazur give the maximal-ideal/character dictionary; the spectrum identity
  item then has both inclusions from the two directions of that dictionary, and
  compactness of $\Delta(A)$ is proved from Banach–Alaoglu on the weak-star closed
  set $\{f(1)=1\} \cap \bigcap_{a,b}\{f(ab)=f(a)f(b)\} \subseteq B_{A^*}$ with
  nonemptiness from Zorn.
- **Commuting the transform with the $C^*$-structure (items 13–16).** The radius
  formula is applied along the subsequence $k = 2^n$ to normal elements, characters
  of commutative $C^*$-algebras are shown to preserve the involution by the
  two-sign argument on $\lvert\chi(s) + it\rvert^2$ for self-adjoint $s$, and the
  $C(K)$ evaluation theorem uses the common-zero argument for $\ker\chi$ plus
  maximality of both kernels; Gelfand–Naimark closes with the unital
  Stone–Weierstrass supplier plus closedness of the isometric range.
- **Gleason–Kahane–Żelazko (items 18–19).** The scaffold strategy is honoured, but
  the one-variable lemma had to be strengthened (above) and the two-variable step
  is written out: $F(z,w) = \varphi(e^{za}e^{wb})$, the $w$-dependent constant
  $c(w) = \partial_zF(0,w)/F(0,w)$ shown entire with $\operatorname{Re}c \le \lVert a\rVert$
  and constant by Liouville, and multiplicativity obtained by comparing the
  coefficient of $zw$ in the two expansions (scalars commute in the exponential
  form, so no order ambiguity arises). The Banach-algebra exponential series,
  its product law (by partial sums and the scalar majorant), and the continuity of
  $\varphi$ are proved locally.
- **The zero-set chain (items 22–25).** The maximal-ideal/z-ultrafilter bijection is
  proved with the $w = f^2 + m^2$ positivity argument and the separation property
  of maximal z-filters. The $\beta X$ correspondence is proved without invoking the
  dropped Gillman–Henrikson–Jerison endpoint: points of $\beta X$ give the
  functionals $\rho_p$ on truncated functions, which are multiplicative because all
  coordinates converge along one net; the closure characterisation, the
  finite-intersection property of $\mathcal U_p$ (via the $u\tilde f_1/(\tilde f_1+\tilde f_2)$
  decomposition), maximality, surjectivity (one compactness selection) and
  injectivity (the infimum formula recovering each coordinate) are each proved.
  Gelfand–Kolmogorov then composes the two bijections and identifies the fixed
  ideals by injectivity.
- **Boolean Stone duality (items 26–30).** Redone under AC/Zorn as the amendment
  requires: filter extension by Zorn, the complement dichotomy, separation of
  elements, the representation $b \mapsto [b]$, and compactness of $\operatorname{Ult}(B)$
  by a direct basic-open cover argument (no product Tychonoff), then the full
  contravariant equivalence with both naturality squares computed by membership.
- **Unitization and the nonunital theory (items 31–37).** The minimal norm is the
  operator norm of $L_a + \lambda I$; $\lVert L_a\rVert = \lVert a\rVert$,
  injectivity in the genuinely nonunital case (a left identity is an identity),
  closedness of $L(A) + \mathbb C I$, the $C^*$-identity by the two inequalities
  $\lVert T\rVert^2 \le \lVert\sigma(T)T\rVert \le \lVert\sigma(T)\rVert\lVert T\rVert$,
  and uniqueness of any extending $C^*$-norm via $\lVert x\rVert^2 = \lVert x^*x\rVert = r(x^*x)$
  with the algebraic invariance of the spectrum. The character space of the
  unitization is the one-point compactification with the density of $\Delta(A)$
  proved from the unital Gelfand–Naimark isomorphism; the nonunital theorem is the
  restriction to the ideal vanishing at $\chi_\infty$; approximate units come from
  the directed family of compactly supported $0 \le e \le 1$ (DC inherited from the
  LCH cutoff lemma); and the locally compact duality proves both properness
  directions, using the unitization extension to show that transposes of proper
  morphisms have compact preimages and the approximate-unit condition to show that
  $\psi \circ \varphi \ne 0$.
- **B items.** The disc algebra is verified complete via Morera and has polynomial
  density via $f_r(z) = f(rz)$; the $\ell^1(\mathbb Z)$ example proves the
  convolution algebra structure with Tonelli/Fubini, characters via
  $\delta_1$ and finite truncations, and the homeomorphism $\mathbb T \cong \Delta(\ell^1(\mathbb Z))$
  with continuous inverse; the dual-number counterexample includes a local
  completeness check; the $\beta\mathbb N$-based examples avoid evaluating
  unbounded functions at points of $\beta\mathbb N \setminus \mathbb N$; and the
  $c_0$ example proves character-by-character that the only characters are the
  evaluations, with the finite-support approximate unit.

## Choice ledger (exact uses)

- **Full AC**: items 4, 5, 6, 8, 10, 13, 15, 17, 20, 21, 24, 25, 28, 29, 30, 33,
  34, 36 (via $\mathrm{AC} \Rightarrow \mathrm{DC}$), 37, and B items 5, 6, 7, 12
  (inherited); declared in each statement or inherited from the named suppliers.
- **Dependent Choice**: item 16 and the $C(K)$/$c_0$/LCH consumers that inherit it
  (B items 1, 12; items 36, 37); derived from AC where the item assumes AC.
- **Countable Choice**: item 3 (quotient completeness), derived in item 4 from AC.
- **Choice-free**: items 1, 2, 7, 9, 11, 12, 14, 18, 19, 22, 23, 26, 27, 31, 32,
  35 and B items 2, 3, 4, 8, 13; the Remarks state this explicitly where the
  scaffold required it.

## Checks actually run (all on the current bytes)

| Check | Command | Result |
|---|---|---|
| Explicit-path precheck | `node tools/tsx-run.mjs tools/precheck.mts <all 91 batch items + 2 pages>` | 66 checked, 0 failing |
| Rendering | `node tools/rendercheck.mjs <same explicit list>` | 93 files, exit 0 |
| Content policy | `node tools/content-policy.mjs research/phase-2-remaining-27-batch-4.pages.json` | 91 scoped items, 0 errors, 0 warnings |
| Strict proof contract | `node tools/proof-contract.mjs research/phase-2-remaining-27-batch-4.proof-contracts.json --strict` | 91/91 items, 0 errors, 0 warnings |
| Boundary audit | `node tools/boundary-audit.mjs … --fail-on-template --fail-on-contradicted` | 728 rows, 0 template clusters, 0 contradicted rows |
| Citation fidelity | `node tools/citation-fidelity.mjs … --fail-on-missing-quote` | every quote found, no widening candidates |
| Dependency check | `node tools/depcheck.mjs` | exit 0; no errors, and no `cited-not-in-deps` warnings for this pair |
| Manifest dependencies | `node tools/manifest-deps.mjs research/phase-2-remaining-27-batch-4.pages.json` | 91 items, 0 errors |
| Plan validation | `node tools/validate-plan.mjs research/plan-spec.json --repo .` | OK, acyclic and consistent |
| Coverage checklist | `node tools/coverage-checklist.mjs research/phase-2-remaining-27-batch-4.coverage.json --require-destination` | 2 pages, 102 rows, 0 errors |
| Contract merge | `node tools/merge-proof-contracts.mjs --level phase-2-remaining-27 …` | merged 796 items over 12 batch files, no duplicates |
| Author check (batch 4) | `node tools/tsx-run.mjs tools/author-check.mts phase-2-remaining-27 4` | `ok: true`, exit 0 |
| Gate liveness | `node tools/gate-liveness.mjs --run … --contracts … --checklists … --min-checks 1` | all four checks live |
| Finite smoke / risk report | `node tools/finite-smoke.mjs …`, `node tools/risk-report.mjs …` (merged contract) | 0 errors; routing signals only |
| Step 3 decisions | `node tools/step3-decisions.mjs check --run phase-2-remaining-27 --phase final` | 0 open rows for this pair (51/51 accepted) |

No `--owner` flag, judge stamp, audit stamp or review decision was created. The
global `fwdcheck` exit is still 1 because of undeclared forward references in other
groups' items (Ito/quadratic-covariation and others); none of those items belongs
to this pair, and this pair's earlier finding was fixed by declaring the companion
`forward_refs`.

## Potentially defective published items (for the owner / ledger)

1. **`ex-c0-is-a-banach-space` is homed only on a B page** (`normed-and-banach-spaces-examples`) yet was scaffolded as a dependency of two items on another page. The item itself is sound; the defect is the scaffold edge, which I removed and replaced with a local completeness argument. **Observation, not a published defect.** Confidence: high.
2. **`lem-grid-cycle-for-runge-approximation`, step 2.1** (published): already reported by the sibling pair of this batch; my pair does not use it. No new finding.
3. **Section-level source locators on the B examples.** The Step-3a review noted that several B items carry section-level locators (Bühler–Salamon §5.5, Shirbisheh ch. 3) that contain the general theory but not the specific worked examples. I kept the frontmatter locators at that level rather than inventing page numbers I did not verify, and every B example is verified locally. **Citation-precision note, not a defect.** Confidence: high.

No other published item read for this pair (123 distinct non-batch or published
suppliers were opened) was found defective; every hypothesis used was checked
against the current statement.

## Obligations carried to Step 4 / Step 5 (no unresolved mathematics)

1. **Manifest statement change.** The item-18 statement in the batch manifest now
   carries the strengthened constant-$M$ form; the Step 4 splice should use the
   current manifest, and the scope receipt has been refreshed for it.
2. **Coverage rows.** The pair's coverage rows are unchanged and still fetch-backed
   (Bühler–Salamon sha256-16 `8ffd5f868b480006`, Shirbisheh `50372d5215737bfe`);
   the strengthened lemma's row (Shirbisheh Lemma 3.1.10) is rescaled locally,
   which the coverage disposition already records as an included result.
3. **Boundary worksheets.** The 408 boundary rows for this pair are authored
   dispositions, not a template; every checked axis carries a step-anchored
   evidence string and every inapplicable axis carries an item-specific reason.
4. **No plan-spec splice was attempted** and no shared plan or prose file was
   edited; the two page files expect the Step 4 splice to attach the 37/14 item
   lists to plan orders 288.081/288.082.
5. **Cross-batch rows:** none for this pair. Every in-run dependency of these 51
   items is a batch-4 item (the sibling FA-17 page or this pair); all other
   declared suppliers are published. The batch-4 cross-batch input file therefore
   preserves the five sibling rows unchanged.

## Handoff

Completed IDs: all 37 A-page items and all 14 B-page items listed in
`research/phase-2-remaining-27-batch-4.pages.json` (pair
`gelfand-theory-and-commutative-c-star-algebras`). Local suppliers added: none
beyond the scaffold (no new IDs were minted; the only statement change is the
strengthening of the zero-free exponential lemma). Published concerns: item 1
above (a home/bookkeeping observation) and the two notes. Open obligations:
items 1–5 above, all bookkeeping.

## Per-item checkpoint (post-compaction record)

All fifty-one entries below are: item file written at `items/<id>.md`, precheck
clean, facts linked only to declared suppliers, a contract entry present in
`research/phase-2-remaining-27-batch-4.proof-contracts.json`, and a current
`accept` receipt at `research/phase-2-remaining-27-step3b-review-<id>.json`.

A page: `def-character-and-maximal-ideal-space`,
`thm-characters-on-a-unital-banach-algebra-are-continuous`,
`lem-closed-ideal-quotient-is-a-banach-algebra`,
`thm-maximal-ideals-and-characters-of-a-commutative-banach-algebra`,
`thm-spectrum-as-character-values`, `thm-maximal-ideal-space-is-compact-hausdorff`,
`def-gelfand-transform`, `thm-gelfand-transform-is-a-contractive-unital-homomorphism`,
`def-jacobson-radical-and-semisimple-commutative-banach-algebra`,
`thm-kernel-of-the-gelfand-transform-is-the-radical`, `def-c-star-algebra`,
`def-self-adjoint-positive-unitary-and-normal-elements-of-a-c-star-algebra`,
`lem-c-star-spectral-radius-equals-norm-for-normal-elements`,
`lem-characters-on-a-commutative-c-star-algebra-preserve-star`,
`thm-commutative-gelfand-naimark`,
`lem-characters-of-continuous-functions-are-evaluations`,
`thm-commutative-gelfand-duality`,
`lem-zero-free-entire-function-of-exponential-type-is-an-exponential`,
`thm-gleason-kahane-zelazko`, `lem-extreme-points-of-the-dual-ball-of-c-of-k`,
`thm-banach-stone`, `def-zero-set-filter-and-zero-set-ultrafilter`,
`lem-maximal-ideals-of-c-of-x-and-zero-set-ultrafilters`,
`lem-zero-set-ultrafilters-and-stone-cech-points`,
`thm-gelfand-kolmogorov-for-rings-of-continuous-functions`,
`def-boolean-algebra-and-boolean-ultrafilter-for-stone-duality`,
`def-stone-space-and-clopen-algebra`,
`lem-boolean-ultrafilter-extension-from-compact-products`,
`thm-stone-representation-for-boolean-algebras`, `thm-stone-duality`,
`def-algebraic-unitization-of-a-star-algebra`, `thm-minimal-c-star-unitization`,
`thm-character-space-of-the-unitization-is-one-point-compactification`,
`thm-nonunital-commutative-gelfand-naimark`,
`def-approximate-unit-and-proper-c-star-morphism`,
`thm-every-commutative-c-star-algebra-has-an-approximate-unit`,
`thm-locally-compact-gelfand-duality`.

B page: `ex-maximal-ideal-space-of-c-of-k`,
`ex-maximal-ideal-space-of-the-disc-algebra`,
`ex-gelfand-transform-of-ell-one-of-z`,
`cex-gelfand-transform-of-a-banach-algebra-need-not-be-isometric`,
`ex-banach-stone-weighted-composition-isometries`,
`ex-gelfand-kolmogorov-recovers-beta-x-not-x`,
`ex-stone-duality-for-a-power-set-algebra`,
`ex-stone-duality-for-a-finite-boolean-algebra`,
`rem-nagata-cp-theorem-remains-topological`,
`rem-gerlits-nagy-remains-selection-principle-theory`,
`rem-linear-dugundji-extension-remains-topological`,
`ex-c-zero-of-a-locally-compact-space`,
`ex-unitization-corresponds-to-one-point-compactification`,
`rem-wiener-lemma-is-developed-on-the-fourier-analysis-track`.

Next action if this file is re-read after a compaction: no authoring remains for
this pair; verify the current bytes still match the receipts with
`node tools/step3-decisions.mjs check --run phase-2-remaining-27 --phase final`,
and route only the five bookkeeping obligations above.
