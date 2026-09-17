# Step 3b slice 5 report — `real-forms-and-real-semisimple-lie-algebras` (A#1–A#22)

Run `phase-2-remaining-27`, batch 13, pair
`real-forms-and-real-semisimple-lie-algebras`, slice
`step3b-slice-5-real-forms`. Binding directions read:
`research/phase-2-remaining-27-real-forms-recovery-direction.md` (and, for the
pair's state, the previous dispatch's checkpoint
`research/phase-2-remaining-27-step3b-pair-real-forms-and-real-semisimple-lie-algebras.md`).
Files written: `items/<id>.md` for the 22 dispatched ids only, plus this report.
The batch manifest, coverage file, proof-contract file, batch notes, pair report
and cross-batch ledger were not edited.

## 1. Decisions recorded (all 22 ids)

Receipts: `research/phase-2-remaining-27-step3b-review-<id>.json`
(`node tools/step3-decisions.mjs record-item --run phase-2-remaining-27`).
19 closed (`accept`/`repaired`, confidence 1); 3 escalated.

| # | id | decision | summary of the audit / repair |
|---|---|---|---|
| 1 | `def-complexification-of-a-real-lie-algebra` | repaired | Notation fix only: `\iota` (applied form banned by `content-policy`) renamed to `\varepsilon` for the canonical embedding `X \mapsto X\otimes1`. Definition checked against Knapp Ch. VI §1. |
| 2 | `prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero` | repaired | **Defect:** steps 3.1/4.1 proved injectivity of the embedding with the functional `Y\otimes z\mapsto z` if `Y=X` else `0`, which does not annihilate the tensor relation `(cX,z)\sim(X,cz)` for `c\ne1`. Replaced by the dual-basis functional argument for both steps; added the two load-bearing tensor/Lie-algebra definitions to deps; removed a stray tool line. |
| 3 | `def-real-form-of-a-complex-lie-algebra` | accept | Knapp §1 / Etingof §9.4. |
| 4 | `thm-real-forms-correspond-to-conjugate-linear-involutions` | repaired | Removed a stray `1 checked, 1 failing` tool line; the four steps (fixed loci, `u\sigma u^{-1}` transport, class bijection) verified. |
| 5 | `prop-complexification-preserves-semisimplicity` | repaired | Step 2.2 used injectivity of the embedding without a supplier; added the local proof in step 1.1 (real basis is a complex basis); notation fix; stray line removed. |
| 6 | `def-compact-real-form-of-a-complex-semisimple-lie-algebra` | accept | Knapp §1. |
| 7 | `thm-existence-of-a-compact-real-form` | **escalate** | See §3.1. |
| 8 | `thm-conjugacy-of-compact-real-forms` | accept | Full re-derivation verified (see §2). |
| 9 | `def-split-real-form` | accept | Knapp §1, Cor 6.10. |
| 10 | `thm-existence-and-uniqueness-up-to-isomorphism-of-the-split-real-form` | **escalate** | See §3.2. |
| 11 | `def-cartan-involution-of-a-real-semisimple-lie-algebra` | accept | Knapp (6.13). |
| 12 | `thm-existence-of-a-cartan-involution` | repaired | Re-derived proof verified step by step (Knapp Cor 6.18); the only edit was adding `def-compact-real-form-of-a-complex-semisimple-lie-algebra` to deps, cited load-bearingly in [L2]. |
| 13 | `thm-conjugacy-of-cartan-involutions` | repaired | Step 2.2 began with a sentence using `\varphi,\psi` defined only in step 5.1; moved that justification into step 5.1. Rest of the Knapp Cor 6.19 argument verified. |
| 14 | `def-cartan-decomposition-of-a-real-semisimple-lie-algebra` | accept | Knapp (6.23). |
| 15 | `prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition` | repaired | Stray tool line removed; added the three load-bearing deps cited in the Facts; mathematics (bracket rules, orthogonality, signs) verified against Knapp (6.24)–(6.26). |
| 16 | `thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group` | accept | Full re-derivation verified (see §2). |
| 17 | `cor-maximal-compact-subgroups-exist-and-are-conjugate-...` | **escalate** | See §3.3. |
| 18 | `def-riemannian-symmetric-pair-of-noncompact-type` | repaired | The definition had dropped the promised normalisation: it declared every `(G,K,\Theta)` with `G` semisimple of finite centre to be of noncompact type "because `\mathfrak p_0\ne0`". Replaced by the promised condition (no nonzero compact ideal, equivalently `\mathfrak p_0` in no proper ideal), keeping the global model `G/K`. |
| 19 | `prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k` | repaired | (a) The sectional-curvature formula was stated without the denominator, so it was false for non-orthonormal `X,Y`; statement and step 8.1 now give `K(\sigma)=-B_{\theta_*}([X,Y],[X,Y])/(B_{\theta_*}(X,X)B_{\theta_*}(Y,Y)-B_{\theta_*}(X,Y)^2)\le0`. (b) 44 occurrences of the rendering defect `\\lbrack`/`\\rbrack` (double backslash, unique in the library) reduced to the single-backslash commands; they would have typeset as a line break plus the letters "lbrack". Metric construction, `R(X,Y)Z=-[[X,Y],Z]` and the sign `K\le0` verified against Knapp Ch. VI §4 with the library's curvature convention. |
| 20 | `thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space` | repaired | Proof verified; added the load-bearing dependency `prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition` cited in [L2]. |
| 21 | `def-maximal-split-abelian-subspace-and-real-rank` | repaired | The remark claimed a real form is split iff "some (equivalently every) Cartan subalgebra of `\mathfrak g_0` is contained in `\mathfrak p_0`", which is false (conjugates of a Cartan subalgebra need not lie in `\mathfrak p_0`). Replaced by the correct criterion `\operatorname{rank}_{\mathbb R}\mathfrak g_0=\operatorname{rank}\mathfrak g_0^{\mathbb C}`, equivalently that a maximal abelian subspace of `\mathfrak p_0` is a Cartan subalgebra. |
| 22 | `thm-maximal-abelian-subspaces-of-p-are-conjugate-by-k` | repaired | Knapp Lemma 6.50/Thm 6.51 argument verified (simultaneous diagonalisation, regular element, minimisation of `k\mapsto B(\operatorname{Ad}_kH',H)`, `Z_{\mathfrak p_0}(H)=\mathfrak a`). [A1] claimed the Axiom of Choice is used through conjugacy of maximal tori; the proof never uses maximal tori, so [A1] now attributes the assumption to the global decomposition and compactness of `K` in [L2]. |

All 22 items pass
`node tools/tsx-run.mjs tools/precheck.mts <explicit paths>` (14 proof-bearing
items `PASS (direct)`, 0 failing) and
`node tools/rendercheck.mjs <explicit paths>` (22 files OK).

## 2. The three items named for re-derivation

- **A8 `thm-conjugacy-of-compact-real-forms`** — verified complete. Route:
  `\mathfrak g_{\mathbb R}` semisimple with `B_{\mathbb R}=2\operatorname{Re}B`;
  each compact conjugation is a Cartan involution of `\mathfrak g_{\mathbb R}`
  (Knapp Prop 6.14 computation, signs checked: `-2(B(X,X)+B(Y,Y))>0`); `\omega=\tau_2\tau_1`
  is self-adjoint for `B_1=-(B_{\mathbb R})_{\tau_1}`; `\rho=\omega^2=\omega^*\omega`
  positive definite; `\log\rho` is a derivation, hence inner
  (`thm-every-derivation-of-a-semisimple-lie-algebra-is-inner`); `\varphi=\rho^{1/4}`
  makes `\varphi\tau_1\varphi^{-1}` commute with `\tau_2`; commuting Cartan
  involutions coincide (step 3.2 is the Knapp Cor 6.19 argument). The old
  unjustified finite-iteration step 3.2 is gone, and `\varphi` is exhibited as
  `\exp(\operatorname{ad}X)`, i.e. inner. Knapp Cor 6.20, pp. 358–359.
- **A12 `thm-existence-of-a-cartan-involution`** — verified complete: same
  normalisation machinery with `\omega=\sigma\tau`, `\psi=\varphi\tau\varphi^{-1}`
  commuting with `\sigma`, preservation of `\mathfrak g_0=\mathfrak g^\sigma`,
  and `(B_0)_{\theta_0}=-\tfrac12B_{\mathbb R}(\cdot,\psi\cdot)_{|\mathfrak g_0}`
  positive definite. Knapp Prop 6.14/Lemma 6.15/Thm 6.16/Cor 6.18, pp. 355–358.
- **A16 `thm-global-cartan-decomposition-...`** — verified complete:
  `K` closed with `\operatorname{Lie}K=\mathfrak k_0`; the auxiliary subgroup
  `T=\{v:\Theta(v)v^{-1}\in Z\}` with `\operatorname{Lie}T=\mathfrak k_0`;
  `A=\operatorname{Ad}(g)^*\operatorname{Ad}(g)`, `\log A` inner with
  `X\in\mathfrak p_0`, giving `G=T\exp\mathfrak p_0` and uniqueness; the
  left-trivialised differential `e^{-A}U+\tfrac{1-e^{-A}}{A}S` proved injective
  via the `\pm1`-eigenspace decomposition of `\theta_*`; `T=K`; `K` compact
  because `\operatorname{Ad}(T)` is closed in the compact orthogonal group with
  finite kernel. Knapp Thm 6.31 and its proof, pp. 361–368.

## 3. Escalations (exact gaps and proposed remedies)

### 3.1 A7 `thm-existence-of-a-compact-real-form` — the Chevalley-normalisation input

Step 2.2 proves `\mathfrak k_0` closed under brackets from a root-vector system
with `N_{\alpha\beta}\in\mathbb R` and `N_{\alpha\beta}=-N_{-\alpha,-\beta}`.
The item does not establish the existence of such a normalisation, and the
displayed relation of step 2.2 cannot: it involves
`N_{\alpha\beta}B(e_{\alpha+\beta},f_{\alpha+\beta})=N_{\beta,-\alpha-\beta}B(e_\alpha,f_\alpha)`,
which is preserved by exactly the rescalings `e_\gamma\mapsto a_\gamma e_\gamma`,
`f_\gamma\mapsto a_\gamma^{-1}f_\gamma` (they keep `[e_\gamma,f_\gamma]=H_\gamma`
and `B(e_\gamma,f_\gamma)`), while those rescalings send
`N_{\alpha\beta}` to `a_\alpha a_\beta a_{\alpha+\beta}^{-1}N_{\alpha\beta}` and
can make it non-real (the group of such rescalings has a one-parameter complex
orbit per root, and all of them satisfy the display).
Locator: Knapp Ch. VI §1, Theorem 6.6 with Lemmas 6.2–6.4 and the rescalings
(6.7)–(6.8), printed pp. 350–356; equivalently Etingof §39.4.
Repairs applied locally: the false claim that the inverse rescaling changes
`B(e_\alpha,f_\alpha)` (it is invariant and equals `\tfrac12B(H_\alpha,H_\alpha)>0`
by the trace formula, since `\alpha(H_\alpha)=2`); the sign error in the
displayed invariance relation; three wrong signs in
`[e_\alpha,f_\beta]`, `[f_\alpha,f_\beta]`, `[f_\alpha,e_\beta]`; and the
`\bigoplus_\alpha W_\alpha` direct sum (which double counts `\alpha` and
`-\alpha`). A `## Remarks` section records the missing input.
Remedy: add the shared supplier lemma ("there is a root-vector basis with
`N_{\alpha\beta}\in\mathbb R` and `N_{\alpha\beta}=-N_{-\alpha,-\beta}`",
Knapp Thm 6.6/Lemma 6.4) to the page before A7, or record the imported theorem
with owner sign-off and extend the coverage row with the exact locator.

### 3.2 A10 `thm-existence-and-uniqueness-up-to-isomorphism-of-the-split-real-form` — same input

Uniqueness compares two split forms through the Serre presentation and needs
simple-root generators satisfying the Serre relations and generating the form
in a normalised real (Chevalley-type) basis; step 2.2's phrase "the standard
normalization ... makes the structure constants integers" is exactly the
missing Chevalley-basis input of §3.1 (Knapp Ch. VI §5 and Chapter II Existence
Theorem 2.111; Etingof Thm 39.6). Repairs applied locally: step 1.2 now cites
`thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate` for
comparing the two Cartan subalgebras (that item was added to deps), and a
`## Remarks` section records the missing input.
Remedy: the same supplier lemma as §3.1 fixes both items.

### 3.3 A17 `cor-maximal-compact-subgroups-...` — conjugacy half (pre-existing escalation, upheld)

The maximality half (K compact and maximal) is proved and was verified
(steps 1.2, 1.3, 2.1). The promised conjugacy half — every compact subgroup lies
in a conjugate of `K` — is not proved; the item's statement makes it conditional
and the `## Remarks` section records this. Locator: Knapp Ch. VI Historical
Notes p. 766, where the result is deliberately omitted with a pointer to Borel
[1998], pp. 128–133 (not a declared source). The local displacement-function
route needs the geometry of `G/K` built in A18–A20, which follow A17 in the
manifest, so it cannot be supplied locally without a manifest-order change.
Remedies (unchanged from the previous dispatch): (a) move A17 after A20 and add
the metric/curvature dependencies; (b) authorise Borel 1998 as a source; or
(c) record the imported theorem with explicit owner sign-off. This escalation
is owner-held and was not overridden.

## 4. Manifest patches proposed (item frontmatter ⊋ manifest row)

Every addition is a load-bearing prerequisite cited in the item's Facts or
proof; each was also required to clear `depcheck`'s `cited-not-in-deps` finding.

| id | added deps |
|---|---|
| `prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero` | `def-lie-algebra-over-a-field`, `def-tensor-product-of-modules-by-generators-and-relations` |
| `thm-existence-of-a-compact-real-form` | `thm-root-sl-two-triple`, `thm-cartans-semisimplicity-criterion`, `def-killing-form-of-a-finite-dimensional-lie-algebra` |
| `thm-existence-and-uniqueness-up-to-isomorphism-of-the-split-real-form` | `def-cartan-subalgebra-of-a-lie-algebra` |
| `thm-existence-of-a-cartan-involution` | `def-compact-real-form-of-a-complex-semisimple-lie-algebra` |
| `prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition` | `def-cartan-involution-of-a-real-semisimple-lie-algebra`, `def-killing-form-of-a-finite-dimensional-lie-algebra`, `thm-cartans-semisimplicity-criterion` |
| `thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space` | `prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition` |

If the orchestrator prefers not to merge these rows, the alternative is to
remove the corresponding citations from the Facts; the mathematics does not
change.

## 5. Local suppliers added

None. No new definition, lemma or page was created on the A page for this slice;
the only additions are the dependency-row patches of §4, and the one genuinely
missing supplier (the Chevalley-normalisation lemma behind A7/A10) is not
present in the manifest and is escalated in §3 rather than fabricated here.

## 6. Checks actually run

- `node tools/tsx-run.mjs tools/precheck.mts` on the 22 explicit item paths:
  `14 checked, 0 failing — all clean` (the definitions carry no proof body).
- `node tools/rendercheck.mjs` on the same 22 paths: `OK — 22 file(s)`; no
  wikilink inside math, no nested/unbalanced delimiters, no multiline display
  block, all math parses, all frontmatter parses.
- `node tools/content-policy.mjs research/phase-2-remaining-27-batch-13.pages.json`:
  26 → 22 errors, all `scope-item-missing` for the *unwritten* A23–A51 and
  B1–B12 items owned by the other slices; the three `notation-iota-applied`
  errors that were on this slice's items (A1, A2, A5) were repaired.
- `node tools/depcheck.mjs`: this slice's 22 items contribute no finding;
  repo-wide the command now reports one unresolved link
  (`items/ex-vogan-diagrams-for-real-forms-of-sl-three-c.md` →
  `[[prop-classical-real-forms-of-the-classical-complex-lie-algebras]]`,
  item A44), which belongs to a sibling slice still in flight and was not
  touched here.
- `node tools/manifest-deps.mjs research/phase-2-remaining-27-batch-13.pages.json`:
  exit 0, 116 items, 0 errors.
- `node tools/coverage-checklist.mjs research/phase-2-remaining-27-batch-13.coverage.json --require-destination`:
  2 pages, 29 harvested results, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0 (page order
  acyclic and consistent; 481 planned pages still carry no item list).
- `node tools/step3-decisions.mjs record-item` for all 22 ids (see §1);
  re-checked with `loadStep3`/`itemDecision`: 19 closed, 3 escalated, pair scope
  `sufficient` and closed.
- Strict proof-contract check: **not run**. The batch proof-contract file
  `research/phase-2-remaining-27-batch-13.proof-contracts.json` still has no
  entry for this pair (the orchestrator merges contracts after all five slices
  land), and that file is not this slice's to edit.
- Per-item source reading: Knapp Ch. VI §§1–3 with Theorems 6.6, 6.11, 6.16,
  6.31, Lemmas 6.2–6.4, 6.15, 6.27, Corollaries 6.10, 6.18–6.22 and the
  (6.23)–(6.26) computations; Knapp Ch. II Lemma 2.18, Corollaries 2.24, 2.37,
  2.38; Etingof `lnlg.pdf` §39.4, Prop 39.8.

## 7. Published defects and cross-pair notes for the serial reconciler

- No new published-item defect is claimed here; the carry-over list of the
  batch-13 Step-1 notes (Jordan–Chevalley AC metadata omission; the three
  published Cartan/root interfaces superseded by the batch-11 replacements) was
  not re-adjudicated. `research/published-consumer-supplier-ledger.md` was not
  touched.
- **Source-metadata defect (metadata only, 7 items of this pair).** Items
  A1–A7 (and A16–A22) cite Etingof's OCW PDF
  `mit18_745_f20_lec_full.pdf` under the title "Lectures 19–24" while their
  locators ("Lecture 39, §39.4", "printed pp. 217–218", …) belong to
  `https://math.mit.edu/~etingof/lnlg.pdf`, the source named in this dispatch.
  Verified against both files: `lnlg.pdf` has §39.4 "The compact real form" and
  Prop 39.8 on printed pp. 183–185 (not 203–205), and §43.1 on pp. 196–200.
  A consistent reference row for the pair should be merged by the orchestrator
  rather than patched per item.
- **A18 definition:** the item now matches the manifest's promised normalisation
  (no nonzero compact ideal). If A19/A20 were intended to hold for arbitrary
  Cartan pairs without that normalisation, their statements remain valid as
  written (the metric and curvature computations use only the Cartan
  decomposition), but the plan text should record which convention is intended.

## 8. Open obligations at handoff

1. A7 (`thm-existence-of-a-compact-real-form`) and A10
   (`thm-existence-and-uniqueness-up-to-isomorphism-of-the-split-real-form`):
   escalate — add the shared Chevalley-normalisation supplier lemma (Knapp
   Thm 6.6 + Lemma 6.4) or record the imported theorem with owner sign-off;
   both items carry `## Remarks` sections with the exact missing input.
2. A17 (`cor-maximal-compact-subgroups-...`): escalate — conjugacy half needs
   either the manifest-order move after A20, the Borel 1998 source, or owner
   sign-off (see §3.3).
3. Manifest patches of §4 to be merged into
   `research/phase-2-remaining-27-batch-13.pages.json` by the orchestrator.
4. Proof-contract entries for this pair remain with the orchestrator's merge
   (47 entries expected for the pair). All 19 `accept`/`repaired` receipts were
   re-recorded as the last action of this slice, after the notation edit in A1
   changed the dependency closure of most of the page (A1 lies in the closure of
   A3-A8, A9-A13, A16, A17, A19, A21, A22 through the Cartan-involution chain);
   any later edit to an item in these items' transitive closure invalidates the
   corresponding receipt and requires a fresh audit. The three `escalate`
   receipts (A7, A10, A17) were recorded before that notation edit and therefore
   carry hashes that no longer match the current closure; the tool refuses a
   re-record of an escalation by a non-owner, so the owner's resolution should be
   recorded fresh when the gap is closed.
5. The Etingof source-metadata row of §6 should be merged consistently for the
   whole pair.
