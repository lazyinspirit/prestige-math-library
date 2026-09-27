# Step 3b authoring report — `graded-quiver-algebras-and-derived-tensor-functors`

- Run: `frontier-35-ten-categories` · role `alpha-high` · dispatch
  `step3b-pair-graded-quiver-algebras-and-derived-tensor-functors-1d57a13607c9c944`
- A page: `graded-quiver-algebras-and-derived-tensor-functors` (order 755,
  `braid-groups`, 18 items)
- B page: `graded-quiver-algebras-and-derived-tensor-functors-examples`
  (order 756, 4 items)
- Batch 16; the sibling pair `ordered-and-unordered-configuration-spaces`
  (orders 731/732) shares the batch files and was **not** edited here.
- Scope: the Step 3a review decision
  (`research/frontier-35-ten-categories-step3a-review-graded-quiver-algebras-and-derived-tensor-functors.json`)
  is `sufficient`, sha256 `f97e5ae15a92055b1e554613718c4cd3cb0a719be27419628cfaef24a43ac324`.
  It remains current and was deliberately **not** re-recorded: the pair scope
  hash covers page identity plus each item's id/kind/title/statement, and this
  dispatch changed only proof text, one convention repair and the contract
  entries, never an id, title or statement. `step3-decisions.mjs check
  --phase scope` reports `closed: true` (26 pairs, empty work list).
  No owner-held escalation exists for this pair.
- Inventory: 16 of the 18 A items are the BG-14 design items
  (`research/plan-braid-groups-track.md`, BG-14 section at lines 660 ff.);
  two are the local suppliers added in the Step-1 repair
  (`def-vertex-khovanov-seidel-modules`,
  `lem-finite-graded-projective-resolutions-are-extension-stable`); five design
  IDs carry the former HA-19/20/21 obligations as in-page local suppliers
  (`lem-bounded-finite-projective-model-for-khovanov-seidel-modules`,
  `def-signed-totalization-of-graded-a-m-bimodule-actions`,
  `lem-bounded-two-sided-projective-a-m-bimodule-complexes-act-on-c-m`,
  `def-triangulated-k-zero-of-khovanov-seidel-projectives`,
  `lem-homological-and-internal-shifts-on-khovanov-seidel-k-zero`). Every
  original item id and every promised claim is kept; no pair was added and no
  promised result dropped.
- Completed item ids (A): `def-path-ring-of-a-finite-quiver-over-the-integers`,
  `def-khovanov-seidel-type-a-quiver-algebra`,
  `lem-the-khovanov-seidel-algebra-has-the-four-m-plus-one-path-basis`,
  `def-graded-khovanov-seidel-module-category-and-projectives`,
  `def-vertex-khovanov-seidel-modules`,
  `lem-simple-khovanov-seidel-modules-have-explicit-finite-projective-resolutions`,
  `lem-finite-graded-projective-resolutions-are-extension-stable`,
  `thm-the-khovanov-seidel-algebra-has-finite-homological-dimension`,
  `lem-bounded-finite-projective-model-for-khovanov-seidel-modules`,
  `def-bounded-projective-homotopy-category-for-a-m`,
  `def-two-sided-projective-khovanov-seidel-bimodule-functors`,
  `thm-khovanov-seidel-u-functors-satisfy-temperley-lieb-relations`,
  `def-khovanov-seidel-beta-and-gamma-bimodule-maps`,
  `def-signed-totalization-of-graded-a-m-bimodule-actions`,
  `lem-bounded-two-sided-projective-a-m-bimodule-complexes-act-on-c-m`,
  `def-khovanov-seidel-positive-and-negative-twist-complexes`,
  `def-triangulated-k-zero-of-khovanov-seidel-projectives`,
  `lem-homological-and-internal-shifts-on-khovanov-seidel-k-zero`;
  (B): `ex-the-a-two-khovanov-seidel-algebra-and-its-projectives`,
  `ex-a-simple-module-projective-resolution-for-a-two`,
  `ex-totalizing-a-two-term-bimodule-action`,
  `cex-internal-and-homological-shifts-are-not-interchangeable`.

## Progress log (one entry per item, page order)

| # | item | state | checks | notes |
|---|---|---|---|---|
| 1 | `def-path-ring-of-a-finite-quiver-over-the-integers` | authored | precheck PASS; rendercheck OK | left-to-right concatenation fixed; associativity checked on basis paths and extended bilinearly; $1=\sum_ie_i$ from the finitely many vertex paths; $Ae_i$ = paths ending at $i$ |
| 2 | `def-khovanov-seidel-type-a-quiver-algebra` | authored | precheck PASS; rendercheck OK | the quadratic relations are homogeneous, so the quotient ring inherits the internal grading with $\deg e_i=\deg u_i=0$, $\deg d_i=1$; quotient well-definedness from `def-quotient-ring` |
| 3 | `lem-the-khovanov-seidel-algebra-has-the-four-m-plus-one-path-basis` | authored | precheck PASS; rendercheck OK | every path of length $\ge3$ vanishes, $(i|i+1|i)=(i|i-1|i)$ identifies the returns; spanning by normal form plus $\mathbb Z$-linear independence of the $4m+1$ classes |
| 4 | `def-graded-khovanov-seidel-module-category-and-projectives` | authored | precheck PASS; rendercheck OK | $A_m\text{-mod}$ is abelian with degreewise kernels, cokernels and biproducts; $P_i=A_me_i$, ${}_iP=e_iA_m$; internal shift $(M\{r\})_d=M_{d-r}$ is an automorphism |
| 5 | `def-vertex-khovanov-seidel-modules` | authored (local supplier) | precheck PASS; rendercheck OK | $S_i=A_m/(A_mu_{i-1}+A_md_i)\cong\mathbb Z$ with $e_i$ acting by $1$ and every positive-length path by $0$; the item explicitly disclaims ungraded simplicity of $S_i$; deps `def-ring`, `def-quotient-ring`, `lem-int-cancellation` are load-bearing |
| 6 | `lem-simple-khovanov-seidel-modules-have-explicit-finite-projective-resolutions` | authored | precheck PASS; rendercheck OK | KS §2a grid $C_{p,q}=P_{j(p,q)}\{p\}$; columns exact above the top entry by the explicit $\ker=\operatorname{im}$ computation with right multiplication by $u_j$; bottom-row homology $S_i$; total complex finite graded projective; $S_i/pS_i$ resolved by the cone of multiplication by $p$ (here $S_i=\mathbb Z$ is torsion free) |
| 7 | `lem-finite-graded-projective-resolutions-are-extension-stable` | authored (local supplier) | precheck PASS; rendercheck OK | graded horseshoe/finite-extension lemma: a degreewise exact $0\to K\to L\to N\to0$ with finite graded projective resolutions of $K,N$ of length $\le L$ yields one for $L$ of length $\le L$; used by items 8 and 9 |
| 8 | `thm-the-khovanov-seidel-algebra-has-finite-homological-dimension` | authored | precheck PASS; rendercheck OK | three-step filtration by powers of the positive-length ideal $J$ ($J^3=0$), $E=A_m/J\cong\prod_{i=0}^m\mathbb Z$; finitely generated graded $E$-modules are finite sums of shifts of $S_i$ and $S_i/pS_i$ by the structure theorem for finitely generated abelian groups; splice with item 7 gives the uniform bound $\operatorname{pd}M\le2m+1$ |
| 9 | `lem-bounded-finite-projective-model-for-khovanov-seidel-modules` | authored | precheck PASS; rendercheck OK | $\Theta:K^b(\operatorname{proj}^{gr}A_m)\to D^b(A_m\text{-mod})$ full, faithful and essentially surjective in the explicit sense; bounded projective complexes are homotopically projective by a finite descending induction with one lift per stage; no DC |
| 10 | `def-bounded-projective-homotopy-category-for-a-m` | authored | precheck PASS; rendercheck OK | $C_m=K^b(\operatorname{proj}^{gr}A_m)$ triangulated with inherited cones; page-wide convention $(X[1])^n=X^{n+1}$, $d_{X[1]}=-d_X$ (upper-index form of the published chain-indexed shift and cone definitions); $[1]$ and $\{1\}$ never identified |
| 11 | `def-two-sided-projective-khovanov-seidel-bimodule-functors` | authored | precheck PASS; rendercheck OK | $U_i=P_i\otimes_{\mathbb Z}{}_iP$ is finite graded projective on each side from the corner basis; right projectivity gives exactness of $U_i\otimes_{A_m}-$, left projectivity gives preservation of finite graded projectives — the two clauses are used separately |
| 12 | `thm-khovanov-seidel-u-functors-satisfy-temperley-lieb-relations` | authored | precheck PASS; rendercheck OK | ${}_iP\otimes_{A_m}P_j\cong e_iA_me_j$ via flatness and the kernel computation; then $U_i^2\cong U_i\oplus U_i\{1\}$, $U_iU_{i\pm1}U_i\cong U_i\{1\}$ (both directions, both endpoints of $i$ handled) and $U_iU_j=0$ for $\lvert i-j\rvert>1$; no braid relation and no inverse asserted |
| 13 | `def-khovanov-seidel-beta-and-gamma-bimodule-maps` | authored | precheck PASS; rendercheck OK | $\beta_i(e_i\otimes e_i)=e_i$ and $\gamma_i(1)$ the four-term (2.7) sum with the $i=m$ omission; centrality of $w_i=\gamma_i(1)$ proved from the quiver relations; degrees $0$ and $1$ with the $\{-1\}$ shift |
| 14 | `def-signed-totalization-of-graded-a-m-bimodule-actions` | authored (local supplier) | precheck PASS; rendercheck OK | finite-diagonal totalization with $d(r\otimes x)=d_Rr\otimes x+(-1)^pr\otimes d_Xx$; $d^2=0$ checked; the Koszul sign uses the homological degree of the first factor only, never an internal degree |
| 15 | `lem-bounded-two-sided-projective-a-m-bimodule-complexes-act-on-c-m` | authored (local supplier) | precheck PASS; rendercheck OK | for a bounded complex $R$ of two-sided finite graded projectives, $R\otimes_{A_m}-$ lands in $C_m$, is exact, carries distinguished triangles to distinguished triangles and agrees with the derived tensor product through the identity replacements |
| 16 | `def-khovanov-seidel-positive-and-negative-twist-complexes` | authored (**repaired this session**) | precheck PASS; rendercheck OK | $R_i=[U_i\xrightarrow{\beta_i}A_m]$ with $U_i$ in degree $-1$, $A_m$ in degree $0$, $=\operatorname{Cone}(\beta_i)$; $R_i^{-1}=[A_m\xrightarrow{\gamma_i}U_i\{-1\}]$ with $A_m$ in degree $0$, $U_i\{-1\}$ in degree $1$, $=(\operatorname{Cone}(-\gamma_i))[-1]$ — see repair 1 below; no inverse or braid claim |
| 17 | `def-triangulated-k-zero-of-khovanov-seidel-projectives` | authored | precheck PASS; rendercheck OK | $K_0(C_m)=F/R$ formed on the honest isomorphism classes of $C_m$ with the triangle relations, per Stacks tag 0FCM Definition 13.28.1; **no skeleton and no choice of representatives** (this is stronger than the manifest promise "on a small skeleton", not weaker); $[X\oplus Y]=[X]+[Y]$ |
| 18 | `lem-homological-and-internal-shifts-on-khovanov-seidel-k-zero` | authored | precheck PASS; rendercheck OK | $[X[1]]=-[X]$ from the rotated triangle $X\to0\to X[1]$; the exact internal shift induces the invertible operator $q$ with $[X\{r\}]=q^r[X]$; induced $\mathbb Z[q,q^{-1}]$-module structure |
| 19 | `ex-the-a-two-khovanov-seidel-algebra-and-its-projectives` | authored | precheck PASS; rendercheck OK | $m=2$: nine basis paths with the full multiplication table and graded ranks $2,4,3$ of $P_0,P_1,P_2$; a concrete check of items 2, 3 and 4 |
| 20 | `ex-a-simple-module-projective-resolution-for-a-two` | authored | precheck PASS; rendercheck OK | $0\to P_0\to P_1\to P_2\to S_2\to 0$ with right multiplication by the degree-zero arrows $(0|1)$ and $(1|2)$ as differentials; kernel and image computed at each spot |
| 21 | `ex-totalizing-a-two-term-bimodule-action` | authored | precheck PASS; rendercheck OK | the four summands of $R_i\otimes_{A_m}X$ in three homological degrees; the Koszul sign $(-1)^{-1}$ sits on the bottom differential; the composite $d^{-1}d^{-2}=0$ cancelled explicitly |
| 22 | `cex-internal-and-homological-shifts-are-not-interchangeable` | authored | precheck PASS; rendercheck OK | witness $\underline{P_i}$ in degree $0$: $\underline{P_i}\{1\}$ has its term in degree $0$, $\underline{P_i}[1]$ in degree $-1$, so the only morphism is $0$ and no natural isomorphism $\{1\}\cong[1]$ exists; the $K_0$ comparison by $-1$ and $q$ is quantitative and does not assert $[\underline{P_i}]\ne0$ after applying $q+1$ |

## Scaffold audit and repairs performed

1. **Twist-complex homological degrees (repair, 1 item + contract).**
   `def-khovanov-seidel-positive-and-negative-twist-complexes` had been drafted
   with $A_m$ in homological degree $-1$ for the negative twist, contradicting
   its own "with $A_m$ in degree $0$" clause, the manifest promise, and the
   source. Khovanov–Seidel §2d, printed p. 11 (stamped PDF
   `/tmp/ks0006056.pdf`, text `/tmp/ks_2a2d.txt` lines 209–215) writes
   $R_i=\{0\to P_i\otimes{}_iP\xrightarrow{\beta_i}A_m\to0\}$ and
   $R_i'=\{0\to A_m\xrightarrow{\gamma_i}P_i\otimes{}_iP\{-1\}\to0\}$, each time
   "with $A_m$ in degree 0", and then states verbatim: "The functor $R_i$ can be
   viewed as the cone of $\beta_i$, and $R_i'$ as the cone of $-\gamma_i$,
   shifted by $[-1]$." The item now reads
   $(R_i^{-1})^0=A_m$, $(R_i^{-1})^1=U_i\{-1\}$ with differential $\gamma_i$;
   steps 1.2, 2.2 and 3.1 were rewritten to derive this from
   $(\operatorname{Cone}(-\gamma_i))[-1]$ using the source's shift convention
   $M[k]^i=M^{k+i}$, $\partial_{M[k]}=(-1)^k\partial_M$ (KS §2c, printed
   p. 10), including the sign-isomorphism
   $(y,x)\mapsto(y,-x)\colon\operatorname{Cone}(\gamma_i)\to\operatorname{Cone}(-\gamma_i)$;
   the three corresponding contract entries (`deriv-2.2` claim,
   `boundaries.empty`, `boundaries.zero`) were updated surgically. The
   check `proof-contract --strict` still passes this item's step/input mapping.
2. **Stray tensor base (repair, 1 item).**
   `thm-khovanov-seidel-u-functors-satisfy-temperley-lieb-relations` step 4.2
   paired the two outer corner factors over $A_m$; the middle pairing of the
   triple is over $\mathbb Z$ (step 2.1 already consumed the $A_m$-pairings).
   The text now says "the remaining pairings are the $\mathbb Z$-pairings of the
   outer factors" and is consistent with step 3.1.
3. **Scaffold-stage repairs carried and confirmed** (recorded in
   `research/frontier-35-ten-categories-batch-16.notes.md` and refreshed here):
   `def-vertex-khovanov-seidel-modules` gained `def-ring`,
   `def-quotient-ring` and `lem-int-cancellation`, because descent through the
   relation ideal and $(\mathbb Z\text{-torsion free})$'s role in
   $S_i=\mathbb Z$ are load-bearing;
   `lem-finite-graded-projective-resolutions-are-extension-stable` gained the
   four Noetherian/abelian inputs it cites;
   `lem-simple-khovanov-seidel-modules-have-explicit-finite-projective-resolutions`
   no longer carries "spectral sequence signed totalization" strategy prose — the
   proof is the actual column-exactness grid of KS §2a together with the
   published first-quadrant acyclic-assembly lemma; and the four original
   BG-14 escalations were resolved by the five in-page local suppliers of the
   3a scope receipt, with no HA-19/20/21 item treated as authored or published.
4. **Dependency hygiene.** All 70 distinct dependency ids declared by the 22
   items resolve to on-disk item files (18 own, 7 batch-14 HA-18 drafts of this
   run, 45 published); the two
   `lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise` edges
   that authoring actually dropped are recorded as `removed` (with reasons) in
   the batch cross-batch input rather than silently deleted. No owned cycle and
   no owned same-page forward edge: `validate-plan` and `precheck` are clean.
5. **Proof-bearing structure.** All 22 assigned items parse numbered steps
   (`precheck` PASS on each; the ten definitions prove their stated
   well-definedness/structure claims in-item). This pair needed no
   missing-heading repair of the kind the sibling pair required.
   Forward-edge/cycle hygiene: `validate-plan` reports no cycle through these
   pages and `depcheck` reports no forward-edge finding naming any item of this
   pair.

## Conventions fixed for the pair

- Paths compose **left to right**; $P_i=A_me_i$ has basis the paths ending at
  $i$ and ${}_iP=e_iA_m$ the paths beginning at $i$; $\deg e_i=\deg u_i=0$,
  $\deg d_i=1$; $u_i=(i|i+1)$, $d_i=(i+1|i)$.
- Complexes are written with upper indices and raising differentials
  ($X^n$, $d\colon X^n\to X^{n+1}$), matching Khovanov–Seidel §2c. This is the
  upper-index relabelling $X^n=C_{-n}$ of the published, lower-indexed
  `def-shift-of-a-chain-complex` and `def-mapping-cone-of-a-chain-map`; all
  identifications used here are invariant under it, and both are cited.
- Homological shift $[1]$: $(X[1])^n=X^{n+1}$, $d_{X[1]}=-d_X$, inverse $[-1]$.
  Internal shift $\{r\}$: $(X\{r\})^n=X^n\{r\}$, $X^n\{r\}_d=(X^n)_{d-r}$,
  $d$ unchanged. The two are never identified; consumers use $[1]$ for the
  triangulated shift of $C_m$ and $\{r\}$ for the internal shift.
- $R_i=[U_i\xrightarrow{\beta_i}A_m]$ ($U_i$ in degree $-1$, $A_m$ in degree
  $0$) $=\operatorname{Cone}(\beta_i)$;
  $R_i^{-1}=[A_m\xrightarrow{\gamma_i}U_i\{-1\}]$ ($A_m$ in degree $0$,
  $U_i\{-1\}$ in degree $1$) $=(\operatorname{Cone}(-\gamma_i))[-1]$, per
  KS §2d.
- $K_0(C_m)$ is formed on the isomorphism classes themselves with the
  distinguished-triangle relations (no skeleton, no representative choices),
  and $[X[1]]=-[X]$, $[X\{r\}]=q^r[X]$ with $q$ invertible.
- The identifiers of `lem-simple-khovanov-seidel-modules-…` and
  `def-vertex-khovanov-seidel-modules` keep the word "simple" as inherited
  design vocabulary only; each item states explicitly that the vertex modules
  $S_i\simeq\mathbb Z$ are **not** simple as ungraded abelian groups.
- Khovanov–Seidel Proposition 2.4 and Theorem 2.5 (mutual inverse equivalences,
  braid relations) are deliberately **not** asserted anywhere in this pair;
  they belong to the later BG-15 stage
  (`categorical-braid-actions-and-decategorification`), and no item here
  consumes them.

## Owner direction and deferral cross-check

`research/frontier-35-ten-categories-owner-authoring-direction.md` exists and
was read. Its deferrals — batch 8's smooth-projective Serre-duality/flag-variety
pair and the batch 13 item `thm-pseudointersection-number-equals-tower-number` —
concern no page or item of this pair, and the deferred-pairs/deferred-items
JSON files contain no occurrence of "quiver", "khovanov", "seidel" or "braid".
Its unresolved obligations therefore add no repair workload here, and this pair
is asserted, spliced and counted normally.

## Checks run at the original author dispatch

Every gate below was re-run **after** the last item edit of this dispatch; none
of them reads this report.

- `node tools/tsx-run.mjs tools/author-check.mts frontier-35-ten-categories 16`:
  **exit 0**, `ok: true`, batch fingerprint
  `3dd7f7a95ded9b2912a6ae4eb3323e0bb489e94ebf2c24cc9dbba52a6a97d014`, all four
  gates true (rewrote `research/frontier-35-ten-categories-author-check-16.json`).
- `tools/precheck` (via author-check, explicit paths): **36 checked, 0 failing**
  — all 22 items of this pair PASS, including the ten definitions, which prove
  their stated structural claims in-item.
- `node tools/rendercheck.mjs` (all 36 batch item files plus the four
  `library/braid-groups/` pages): **OK — 44 files**, no wikilink inside math,
  balanced delimiters, all math parses under KaTeX, frontmatter parses.
- `node tools/proof-contract.mjs research/frontier-35-ten-categories-batch-16.proof-contracts.json --strict`:
  **0 errors, 1 warning, 40/40 items checked**. The single warning is a
  `shotgun-bracket` advisory on the **sibling** BG-2 item
  `lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent`
  (step 3.2), not on this pair; every citation carries its exact quote and use
  and the eight named boundary cases are disposed per item.
- `node tools/content-policy.mjs research/frontier-35-ten-categories-batch-16.pages.json`:
  **40 scoped items, 0 errors, 0 warnings** (whole batch).
- `node tools/coverage-checklist.mjs research/frontier-35-ten-categories-batch-16.coverage.json --require-destination`:
  **3 pages, 57 harvested results, 0 errors, 0 warnings**.
- `node tools/source-backing.mjs --coverage …batch-16.coverage.json --liveness …batch-16.url-liveness.json --require-verified`:
  **exit 0**, 29 authored results backed by openable sources.
- `node tools/manifest-integrity.mjs --run frontier-35-ten-categories`:
  **52 pages owed, 52 in the manifests, no scope drift**.
- `node tools/validate-plan.mjs research/plan-spec.json`: **exit 0** (no cycle
  among the 1 188 pages carrying item lists; the standard note about pages whose
  item lists are not yet asserted in the plan is expected pre-splice state).
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-35-ten-categories`:
  **exit 0**, refreshed and deduplicated.
- `node tools/depcheck.mjs`: repo-wide **exit 1** from pre-existing findings in
  other tracks; the report contains **no finding naming any of the 22 item ids**
  of this pair and no finding naming the two pages (the only occurrences of the
  page ids are informational rows in the reading-order listing).
- `node tools/extcheck.mjs`: **exit 0**; none of the 48 results "resting on
  material not proved here" is an item of this pair.
- `node tools/step3-decisions.mjs check --run frontier-35-ten-categories --phase final`:
  **681 items, 574 accepted, overall exit 1** (open work elsewhere in the run);
  the work list names **none** of the 22 items and none of this pair's pages.
  `--phase scope`: **closed: true**, 26 pairs, empty work list.
- `node tools/step3-decisions.mjs record-item` (22 receipts,
  `research/frontier-35-ten-categories-step3b-review-<item>.json`): 20 are
  `decision: accept` and the two items repaired above
  (`def-khovanov-seidel-positive-and-negative-twist-complexes`,
  `thm-khovanov-seidel-u-functors-satisfy-temperley-lieb-relations`) are
  `decision: repaired`; each receipt is `owner: false`, `confidence: 1`, with
  the examined dependency ids recorded and hashed against the current item
  inputs. All 22 were verified present and well-formed, and the receipts were
  re-recorded **after** the last item edit, so no receipt is stale.

## Cross-batch dependency input

`research/frontier-35-ten-categories-batch-16.cross-batch-dependencies.json` is
a JSON **array of 38 rows** (37 item edges + 1 page edge), and all 38 belong to
this pair: the sibling pair declares no cross-batch edge, so there is no sibling
row to preserve and none was disturbed. 36 rows are `verified` and 2 are
`removed` (the two `lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise`
edges that authoring replaced by the in-page degreewise-abelian item, each with
the reason quoted). Every verified row quotes the supplier's **current** clause
and the consumer step that uses it. The live item suppliers are seven distinct
ids, all batch-14 HA-18 items of this run still in `draft` status
(`frontier-35-ten-categories`, orders 728.1/728.2):
`def-finitely-generated-graded-projective-module`,
`def-graded-balanced-tensor-product-and-homogeneous-hom`,
`def-graded-ring-module-bimodule-and-internal-shift`,
`lem-graded-balanced-tensor-and-shift-isomorphisms`,
`lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise`,
`thm-bimodule-tensor-exactness-and-projective-preservation`,
`thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules`; the
page edge is
`graded-quiver-algebras-and-derived-tensor-functors → graded-bimodules-and-tensor-functors`.
Because those suppliers are completed-but-unpublished Step 3b drafts, the rows
record explicitly that independent review and publication approval remain
Step 4/5 obligations; this dispatch re-read their current statements and proofs
at the cited clauses before closing each dependent item, and the item receipts
list them among the examined dependencies. Nothing in the two repairs above
changes a supplier clause or a declared dependency, so no row required editing
after the repairs (re-checked).

## Published concerns and cross-group notes

1. **Published-defect lead (outside this pair; suspicion, not a confirmed
   defect; not repaired here).** `lem-degree-zero-horseshoe-lift` is published
   with a claim for an arbitrary abelian category, but its proof step 2.1
   chooses elements $a\in A$, $y\in P''_0$ and concludes surjectivity by an
   element chase, which arbitrary abelian categories need not admit. Possible
   dependents: `lem-the-horseshoe-kernel-fits-a-short-exact-sequence`,
   `lem-inductive-horseshoe-step`,
   `thm-horseshoe-lemma-for-projective-resolutions`. Proposed repair uses
   published `def-projective-object`,
   `def-projective-resolution-in-an-abelian-category` and the abelian cokernel
   property with maps instead of elements (for $c\colon A\to C$ with
   $c\lambda_0=0$, the $P'_0$ restriction and epimorphic $\varepsilon'$ give
   $ci=0$, so $c=c'p$; then $c'\varepsilon''=0$ and $\varepsilon''$ epic give
   $c'=0$). **This pair does not consume that lemma**: its finite extension input
   is the in-page graded **module**-category lemma 7 above, proved degreewise,
   so the lead does not block this pair. The serial reconciler owns
   `research/published-consumer-supplier-ledger.md`; this dispatch did not edit
   it.
2. **B/examples-page-only supplier pagination** (sibling's repair, reported, not
   touched): published `ex-change-of-basepoint-isomorphism-for-fundamental-groups`
   lives only on a category-theory B page and cannot be a load-bearing supplier
   for an A-page item (`depcheck` `b-leaf-content`). The sibling pair replaced
   its uses with an A-page lemma; the remaining repo-wide `b-leaf-content`
   findings are pre-existing debt in unrelated items.
3. **Pre-splice plan/prose mismatch (Step 4 reconciliation).** Three manifest
   rows of this pair still carry scaffold-era `proof_strategy` prose naming the
   planned-but-unselected HA-19/20/21 pages, although the authored items consume
   only in-page suppliers and published earlier items:
   `def-bounded-projective-homotopy-category-for-a-m` ("apply the planned HA-21
   finite-projective/derived comparison"),
   `def-khovanov-seidel-positive-and-negative-twist-complexes` ("invoke the
   planned HA-20 signed tensor totalization and derived-tensor theorem. The
   bounded-category target depends on the planned HA-21 comparison") and
   `cex-internal-and-homological-shifts-are-not-interchangeable` ("Use the HA-19
   graded $K_0$ $q$-action … and HA-21 triangulated relation $[X[1]]=-[X]$").
   These are prose-only: the statements and the declared `deps` of the three
   rows point exclusively at built items, the strict contracts cite those, and
   no HA-19/20/21 item is consumed. They were left unedited deliberately:
   editing a manifest row changes the item-input hash of the row and of its
   transitive consumers, which would invalidate current Step 3 receipts of
   unchanged, completed items — exactly what the dispatch forbids. Step 4
   should realign the three strings with the in-page suppliers when it splices.
4. **Repo-wide pre-existing debt** (`published-unaudited`, `item-cycle`,
   `page-cycle`, the remaining `b-leaf-content` and `link-unresolved` findings)
   appears in the depcheck report but touches nothing in this pair; reported
   for the record, not repaired here.

## Open obligations

- Nothing is open for the mathematics of this pair: both pages, all 18 A items
  and all 4 B items are authored, checked and receipted; the pair scope reads
  closed, and the whole run's open work lies in other pairs.
- No new local supplier was added in this dispatch; the two local suppliers and
  five local replacements listed in the header were added in Step 1 and are
  fully authored here.
- For Step 4 (serial reconciliation): (a) splice the two pages and their 22 items
  and register the two local suppliers in the plan if the harness requires
  inventory agreement; (b) realign the three stale `proof_strategy` strings of
  concern 3; (c) carry published concerns 1, 2 and 4 into the canonical
  published-consumer-supplier ledger; (d) the batch-14 HA-18 suppliers stay
  unpublished drafts until Step 4/5 review — the Step 3b receipts already record
  them as examined dependencies with quoted clauses; (e) the one
  `shotgun-bracket` warning is a sibling BG-2 advisory and does not block this
  pair's splice.
- No item of this pair declares the Axiom of Choice or Dependent Choice: the
  resolutions, lifts, totalizations and $K_0$ arguments are all produced by
  explicit finite formulas, and each item's boundary record states its choice
  case as checked or inapplicable with an item-specific reason.

## Owner repair after the author dispatch

The owner reread the completed pair against Khovanov–Seidel §§2a–2d and the
published cone, shift, and projective-resolution inputs. The following proof
repairs are now part of the checked batch-16 files; the twist degree and the
main Temperley–Lieb tensor base described above were already corrected by the
author and were not redone.

| Item | Repair and direct consumers |
|---|---|
| `lem-simple-khovanov-seidel-modules-have-explicit-finite-projective-resolutions` | For the left projective $P_j=A_me_j$, a basis path satisfies $xe_j=x$; a bottom-row calculation now uses the length-two monotone paths and, at $j=0$, $xu_0=\alpha u_0+\gamma r_1$. This supplies the finite-dimension theorem and the $A_2$ resolution example. |
| `lem-finite-graded-projective-resolutions-are-extension-stable` | The horseshoe map is the typed $\varphi=i\varepsilon'+g$, with $g$ lifting $\varepsilon''$; the kernel sequence, element chase, and induction now produce the asserted bound $\max(a,b)$ even when the selected outer bounds are below the induction index. The finite-dimension theorem and bounded model consume it. |
| `lem-bounded-finite-projective-model-for-khovanov-seidel-modules` | The induction takes the upper brutal **subcomplex** $X^{>a}$ and bottom quotient $X^a[-a]$. A degreewise split extension has connecting map $-\eta$, where $\eta=k(dj-jd)$, so the projective replacement is $\operatorname{Cone}(-w[-1])$; the rotated cone then has connecting map $w$. The one-term resolution occupies degrees $a-k$. This supplies the projective homotopy category and the bounded tensor action. |
| `def-two-sided-projective-khovanov-seidel-bimodule-functors` and `thm-khovanov-seidel-u-functors-satisfy-temperley-lieb-relations` | The decomposition of the right factor uses ${}_iP\{d'_k\}$; with left-to-right paths, $e_iA_me_j$ consists of paths $i\to j$. The rank-one middle corner factors tensor over $\mathbb Z$ and are nonzero by their free bases. The signed action and twist-complex definitions consume these two items. |
| `lem-bounded-two-sided-projective-a-m-bimodule-complexes-act-on-c-m` | Shift compatibility now uses $(X[1])^q=X^{q+1}$, matching the page convention. The twist-complex definition and the two-term B example consume the action. |
| `lem-homological-and-internal-shifts-on-khovanov-seidel-k-zero` and `cex-internal-and-homological-shifts-are-not-interchangeable` | The $K_0$ proof asserts only the proved negation action $[X[1]]=-[X]$; the B witness separates the shifts by its zero Hom group in $K^b$ and the nonzero identity of a one-term projective. The example no longer assumes componentwise isomorphisms characterize isomorphisms in a homotopy category. |

The owner also repaired the completed BG-2 sibling
`thm-ordered-configurations-cover-unordered-configurations-regularly` in the
shared batch: a punctured relative ball uses a tangential $e_1$ and inward
$e_d$, including $d=2$; for each path component $P$ of $M\setminus S$, the
open set $A_P=P\cup\{s\in S:P(s)=P\}$ partitions $M$. If there are multiple
components, $A_P$ and the union of **all** other $A_Q$ separate $M$. This
replaces the invalid two-selected-components argument.

The batch-16 page strategy and strict proof-contract derivations were updated
to match those proofs. The three stale manifest `proof_strategy` strings named
in concern 3 above were also realigned to the local bounded model, signed
action, and $K_0$ suppliers; that historical Step 4 prose task is now closed.
The full `author-check.mts frontier-35-ten-categories
16` rerun exited 0 with `ok: true` and fingerprint
`7338f35463f33d33c1b1340dae8c84e560b8a7417808025125dba5b7623d8a0d`:
36/36 prechecks, 44 rendered files, 40/40 strict contracts (zero errors, one
pre-existing sibling `shotgun-bracket` advisory), and 40 content-policy items
passed. `manifest-deps.mjs` found 40 items, zero normalizations, and zero
errors. All 22 batch-16 Step 3 receipts made stale by the nine repaired items
and their transitive dependencies were refreshed: nine owner `repaired`
receipts and thirteen reviewed `accept` receipts. `step3-decisions.mjs check
--run frontier-35-ten-categories --phase final` now has no outstanding
batch-16 item; its other outstanding work belongs to other batches. No
mathematical defect remains confirmed in this assigned batch after this audit.
