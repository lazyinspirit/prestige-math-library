# Step 3b — pair `the-branching-rule-and-the-young-graph` (checkpoint + report)

- Run: `frontier-37-owner-30`; batch 14; A page `the-branching-rule-and-the-young-graph`,
  B page `the-branching-rule-and-the-young-graph-examples`.
- Dispatch: `research/frontier-37-owner-30-step3b-pair-the-branching-rule-and-the-young-graph-b6f729434299327e.task.md`;
  resumed under `research/frontier-37-owner-30-step3b-pair-the-branching-rule-and-the-young-graph-01c184ae99aa392f.task.md`
  after the first attempt hit a provider `402` (it had written 22 of the 25 items and the
  checkpoints through `thm-specht-restriction-branching-filtration`).
- Status: COMPLETE — all 25 items and both page carriers authored and checked, all 25 item
  decisions recorded `accept`/confidence 1, scope still `sufficient`, pair-author artifact
  accounting green; open obligations are listed at the end.

## Inputs read (before authoring)

- `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md` (owner-selected Step 3b section).
- Scope review `research/frontier-37-owner-30-step3a-pair-the-branching-rule-and-the-young-graph.md`
  (decision `sufficient`, sha256 `a334f3ba…`), batch-14 notes/coverage/manifest, `cross-batch-dependencies.json` (`[]`).
- `research/frontier-37-owner-30-pre-splice-plan-findings.json`: zero findings mention this pair.
- `research/frontier-37-owner-30-owner-authoring-direction.md` (absent when authoring began; written
  at 22:24 and read on resume) and the read-only helper report
  `research/frontier-37-owner-30-branching-handoff-repair.md`: both name exactly the two batch-14
  obligations — the support-order defect in `lem-semistandard-homomorphisms-span-in-characteristic-zero`
  and the zero-factor wording defect in `thm-schur-weyl-decomposition-with-length-cutoff`. Both were
  independently rechecked against the current files and repaired; details in "Local scaffold repairs".
- Full sources re-verified on 2026-09-30 against the recorded stamps (byte count + sha256_16 prefix):
  Chan 303971/`8a3cac907770c66d`, Craven 369993/`b2b190e9a1928b17`, Wildon 322040/`31e3817f5bd1f4d0`,
  Snowden 955999/`601448219a201de8`, Etingof 516260/`116dea942178e72d`, Lin 2763341/`63fdddc3d5a17e0d`.
- Read (complete passages): Wildon §6 (Deff 6.1–Claim 6.13), Chan Thm 4.16 + continuation + Thm 6.8,
  Craven §§2.2/2.4 (Thm 2.6, 2.7, Lemma 2.15, Thm 2.16 proof), Snowden Thm 2.40–Lemma 2.46 and
  Def 3.22–Lemma 3.29, Etingof Thms 4.54–4.63 with Lemma 4.56, Lin §27 (Thm 27.4–Cor 27.9).

## Authoring order used

All 25 items in the dispatch's dependency-level order; one item at a time, precheck (explicit paths)
after each. Local scaffold repairs recorded below as they occur.

## Local scaffold repairs / dependency changes

- **B-page leaf repairs, three items (attempt-1 output).** The first attempt had let three items
  of this pair rest on published *examples-page* items; in-flight content must not depend on B-leaf
  content (`depcheck` rule `b-leaf-content`), so each such edge was replaced by a complete local
  argument, with a non-load-bearing "see also" wikilink retained in Remarks only in
  `ex-youngs-rule-for-m-two-one`. Evidence: attempt-1 created the files with the dropped dependency
  present (`...-b6f729434299327e.attempt-1.log`, initial diffs at its lines 20691, 21387, 21511;
  the last attempt-1 version still carried it, at lines 29119, 29815, 24342 respectively), and the
  current files carry the local argument and no such edge.
  - `ex-youngs-rule-for-m-two-one`: dropped `ex-polytabloids-for-shape-two-one`; step 2.1 now computes
    $\kappa_t,\kappa_u$ and $e_t=v_3-v_1$, $e_u=v_2-v_1$ and their independence locally, with
    `thm-standard-polytabloid-basis` [F5] giving the basis; the Remarks keep a pointer to the
    examples-page item for the same computation. Hash `bc9db59e…` → `09840e59…`.
  - `cor-complex-specht-restriction-branching-rule`: dropped `ex-trivial-and-sign-specht-modules`;
    no examples-page content is used, the extreme-shape claims follow directly from the corollary.
    Hash `57bd9260…` → `84a49d45…`.
  - `ex-schur-weyl-for-two-tensor-factors`: dropped `ex-trivial-and-sign-specht-modules`; step 2.1
    now proves locally that $S^{(2)}$ is trivial and $S^{(1,1)}$ is the sign representation
    (from `def-young-subgroup-tabloid-and-permutation-module`,
    `def-column-antisymmetrizer-polytabloid-and-specht-module`,
    `lem-polytabloid-covariance-and-column-sign`, `cor-sign-from-disjoint-cycle-structure`).
    Hash `c44b3367…` → `2ebca284…`.
- **Owner-directed proof repairs, two items.** Both were named by
  `research/frontier-37-owner-30-owner-authoring-direction.md` and by the read-only audit
  `research/frontier-37-owner-30-branching-handoff-repair.md`; both snapshot hashes recorded there
  now differ from the live files, and the live text was reread step by step.
  - `lem-semistandard-homomorphisms-span-in-characteristic-zero` (support order). Step 1.5 now
    defines a fixed total order $\preceq$ on the finite set of support vectors extending the
    componentwise order; step 3.1 chooses $T_1$ with $N_{T_1}=m(v)$ the $\preceq$-greatest support
    level (not a componentwise-maximal one) and keeps the derived fact "no support filling is
    strictly above $N_{T_1}$ componentwise"; step 8.1 concludes the level drop in that same total
    order; step 9.1 uses the step-3.1 filling directly, with no later reselection. Snapshot
    `6e706940…` → live `aa34374f…`.
  - `thm-schur-weyl-decomposition-with-length-cutoff` (zero factors). Claim 3 is requalified to
    pairwise inequivalence of the *nonzero* factors ($\ell(\lambda),\ell(\mu)\le d$), with an
    explicit sentence that a nonzero factor is not isomorphic to a zero factor and that no
    assertion is made about two zero factors; step 6.2 proves exactly that statement (B-isomorphism
    forces $\lambda=\mu$ via step 5.1; exactly-one-zero excludes isomorphism even for vector
    spaces). Snapshot `a83f35dc…` → live `20e01f26…`.
- **Scaffold dependency not consumed (no content lost).** The scaffold list for
  `lem-semistandard-homomorphisms-are-independent-and-dominance-triangular` named
  `lem-column-collision-causes-antisymmetrizer-cancellation`; the authored proof instead derives
  the required sign/antisymmetrizer facts from
  `lem-polytabloid-covariance-and-column-sign`, `cor-sign-from-disjoint-cycle-structure` and its own
  coefficient computation, and the manifest row still carries the scaffold edge. Benign for the
  gates (the target is published, so the frontier ledger drops the edge); flagged for Step 4
  reconciliation if the owner wants manifest rows to match the consumed dependency lists.
- **Render-only repair in `def-young-graph`.** Its Definition and Remarks used the Unicode micro
  sign and Unicode Greek letters inside math, which made KaTeX emit an
  `unknownSymbol` warning for `µ`; the text now uses `\mu` and `\lambda` everywhere in math.
  No claim changed, but the item hash did, so the three affected decisions
  (`def-young-graph` itself and its consumers
  `cor-paths-in-the-young-graph-index-standard-tableaux`, `ex-young-graph-through-s4`) were
  re-recorded, and the two consumers' contract citation quotes were regenerated.
- No new item or page IDs were added, and no promised claim was dropped: all 25 original IDs,
  kinds and statements are preserved. The one statement change is the owner-directed correction of
  the Schur–Weyl multiplicity claim, which as scaffolded asserted pairwise inequivalence of all
  distinct $\lambda,\mu$ without restricting to nonzero factors; read unqualified (so as to include
  two factors with $\ell(\lambda),\ell(\mu)>d$, both zero and hence isomorphic) the assertion is
  false. The live claim covers every factor occurring in the displayed sum ($\ell\le d$, all
  nonzero) plus the nonzero-vs-zero case; nothing that is true and promised was dropped. See the
  open obligation about the manifest/plan wording below.

## Item checkpoints

Format per item: `id` — dependency level — status — precheck result — notes.

- `def-polytabloid-specht-module-over-an-arbitrary-field` (level 0, definition,
  proof not-applicable) — authored; precheck n/a (no phase body); rendercheck
  OK. Defines $M^\lambda_R$, $\kappa_t$, $e_t$, $S^\lambda_R$ over any
  commutative ring, records $\kappa_{\sigma t}=\sigma\kappa_t\sigma^{-1}$,
  $e_{\sigma t}=\sigma e_t$, $\gamma e_t=\operatorname{sgn}(\gamma)e_t$,
  $C_t\cap R_t=\{1\}$, and the agreement with the published complex Specht
  module. Manifest dep list already carried the citation links.

- `def-young-graph` (level 0, definition, proof not-applicable) — authored;
  rendercheck OK. Vertices all partitions, edges by addable nodes, ranks,
  paths; records acyclicity, local finiteness, the $(2,2)$ non-addable row-end
  example.

- `def-commuting-symmetric-and-linear-actions-on-tensor-power` (level 0,
  definition, proof not-applicable) — authored; rendercheck OK. Left place
  action $\sigma\cdot(v_1\otimes\cdots\otimes v_n)=v_{\sigma^{-1}(1)}\otimes\cdots$,
  diagonal $g^{\otimes n}$, commutation, $\Delta(T)=\sum_i\mathbf 1^{\otimes(i-1)}\otimes T\otimes\mathbf 1^{\otimes(n-i)}$,
  $A_n$ generated algebra; $E_0=\mathbb C$; no Lie input.

- `lem-semistandard-tableau-homomorphisms-to-young-permutation-modules`
  (level 0, lemma, constructive) — authored; precheck PASS; 7 steps. Fixes a
  reference $\lambda$-tableau $t$, identifies $\Omega_\mu$ with fillings of
  $[\lambda]$ of content $\mu$, transported action $(\sigma\cdot f)(x)=f(x')$,
  $t(x')=\sigma^{-1}(t(x))$, row-orbit sum $\theta_u$, well-definedness via
  $R_t$-invariance and the stabilizer theorem, $S_n$-linearity, restriction to
  $S^\lambda$; explicitly no nonvanishing assertion.

- `cor-paths-in-the-young-graph-index-standard-tableaux` (level 1,
  corollary, constructive) — authored; precheck PASS; 6 steps. Paths
  $\varnothing\to\lambda$ in bijection with standard $\lambda$-tableaux;
  forward direction uses left/up closure of a Young diagram, reverse direction
  deletes the largest label via
  [[lem-largest-entry-of-a-standard-tableau-is-removable]]; count $f^\lambda$.
  Added deps `def-partition-young-diagram-and-conjugate-partition`,
  `def-removable-and-addable-nodes-of-a-partition` (needed citations).

- `def-corner-order-and-specht-deletion-map` (level 1, definition, proof
  not-applicable) — authored; rendercheck OK. Ordered removable rows
  $r_1<\cdots<r_m$, $\lambda^{(i)}$, deletion maps
  $\theta_i:M^\lambda_R\to M^{\lambda^{(i)}}_R$; records $S_{n-1}$-linearity
  and surjectivity, $n\ge1$, and the elementary cases $n=1$ and $n=0$ absent.
  Added deps `def-young-subgroup-tabloid-and-permutation-module`,
  `def-partition-young-diagram-and-conjugate-partition`.

- `lem-integral-specht-garnir-straightening-and-field-basis` (level 1, lemma,
  constructive) — authored; precheck PASS; 12 steps. Integral Garnir relation
  $G_{X,Y}e_t=0$ over $\mathbb Z$ (factored $G_{X\cup Y}=G_{X,Y}A_H$, termwise
  $(xy)$-cancellation, torsion-free cancellation of $|H|$), integral
  straightening by the canonical swapping transversal $g_A$ and downward
  induction in the column order, leading-tabloid independence, and the
  field-uniform basis by coefficient reduction. Added deps
  `lem-leading-tabloid-coefficient-of-a-standard-polytabloid`,
  `def-partition-young-diagram-and-conjugate-partition`,
  `thm-sign-is-a-homomorphism`.

- `lem-schur-weyl-length-cutoff-by-column-antisymmetrization` (level 1, lemma,
  constructive) — authored; precheck PASS; 6 steps. Forward direction via the
  row-labelled tensor map $\Phi(\sigma\{t\})=\sigma w_t$ with
  $\kappa_tw_t\ne0$ and irreducibility of $S^\lambda$; reverse direction via
  $A_{B_1}=0$ on $E$ for $\ell(\lambda)>d=\dim V$ and
  $\kappa_te_t=|C_t|e_t$; $n=0$, $d=0$ handled. Added deps
  `def-young-subgroup-tabloid-and-permutation-module`,
  `thm-tensor-product-basis-from-bases`, `def-dimension`, `def-linear-basis`,
  `def-partition-young-diagram-and-conjugate-partition`.

- `lem-semistandard-homomorphisms-are-independent-and-dominance-triangular`
  (level 1, lemma, constructive) — authored; precheck PASS; rendercheck OK;
  6 steps. Reference tableau t_0, filling identification, N_f preorder,
  dominance/diagonal-one, nonvanishing and independence of the semistandard
  restrictions, lower bound dim Hom >= K.

- `lem-tensor-place-operators-span-the-symmetric-centralizer` (level 1, lemma,
  constructive) — authored; a stray tag typo (`step 1.1? no:`) was found and
  repaired; the proof was then renumbered into the canonical citation-layer
  form by `layerRepair`; precheck PASS; rendercheck OK after the Statement's
  display identity was put on one source line. 8 steps: Ψ: W^{⊗n} -> End(E) iso
  and S_n-equivariant, invariant tensors = span{T^{⊗n}} = span{g^{⊗n}} by
  Lagrange interpolation through invertible t (root bound for det(t·1+T)),
  Newton identities give End_{S_n}(E) = A_n; n=0 and V=0 handled.

- `lem-semistandard-homomorphisms-span-in-characteristic-zero` (level 2, lemma,
  constructive) — authored; precheck PASS; rendercheck OK; 15 steps (canonical
  citation-layer numbering 1.1-11.1). Column-sign covariance c_{τT}=sgn(τ)c_T,
  column-repeat vanishing, cross swaps strictly increase N, explicit
  transversal g_A, integral Garnir comparison at a maximal level forces a
  semistandard support filling, subtraction of c_S θ_S kills the whole N-level,
  finite descending induction in a linear extension of the N-order. No RSK.
  Owner-directed support-order repair applied and rechecked in the live file:
  step 1.5 fixes a total order on the finite support set extending the
  componentwise order, step 3.1 selects its greatest level (not a
  componentwise-maximal one), step 8.1 concludes the strict drop in that same
  total order, and step 9.1 uses the step-3.1 filling directly.

## Convention notes learned while authoring

- Precheck numbering is by citation depth: layer(step) = 1 + max layer of the
  steps it cites, and steps are reordered into nondecreasing layer order. Write
  steps in reading order and run
  `node tools/tsx-run.mjs /tmp/fixprecheck.mts items/<id>.md`
  (driver around the normative `layerRepair`) to adopt the canonical form; then
  precheck must PASS without further repair.
- `layerRepair` rewrites only refs of the forms `step X.Y`, `steps X.Y, Z.W`,
  `steps X.Y and Z.W`; numeric RANGES like `steps 2.2 to 4.3` survive broken and
  must be avoided or fixed by hand (it produced "steps 3.1 to 2.6" once).
- A reference to another item's proof steps is rewritten as if it were local;
  cite foreign step numbers only as prose ("in the course of that proof").
- Avoid beginning any source line in the Proof or Remarks with `<digit>.<digit>`
  (`qed-not-final`); wrap such lines so they start with a word.
- Display math must be a single source line between `$$` (rendercheck failure);
  prefer inline math in Facts/Proof/Remarks.
- `lem-specht-branching-subspaces-are-invariant` (level 2, lemma, direct) —
  authored; precheck PASS; rendercheck OK; 12 canonical steps. `V_k` spanned by
  the `U^{(i)}`-images, nested/`S_{n-k}`-stable, intertwining by step
  comparison with the corner poset; `V_m=S^\lambda_F`; `T^{(i)}` maps,
  `v = w_f` with `f` deepest, `n=1`/empty-colour cases.

- `thm-schur-weyl-double-centralizer` (level 2, theorem, direct) — authored;
  precheck PASS (after `layerRepair`); rendercheck OK. Claim 1 first identity via
  [F2] polarization; isotypic decomposition of `E` under `S_n`; `End_{S_n}(E) ≅
  ∏ End(M_λ)`; `B` as block-diagonal product; commutant of `∏ End(M_λ)` is
  `⊕ End(S^λ)⊗1 = A`; `n=0` and `V=0` handled. Local fix during authoring: added
  [F8] citing `thm-group-actions-and-group-ring-modules-correspond` +
  `cor-subrepresentations-correspond-to-submodules-and-irreducibility-to-simplicity`
  to license identifying simple left `C[S_n]`-modules with irreducible
  `S_n`-representations (the [F4] statement is representation-theoretic), cited
  in steps 1.3 and 2.2; both added as manifest deps.

- `lem-schur-weyl-polytabloid-highest-weight` (level 3, lemma, constructive) —
  authored; precheck PASS after `layerRepair`; rendercheck OK; canonical steps
  `1.1-7.1` (14). Row-labelled map `Phi` recalled and re-derived locally
  (well-defined, `S_n`-linear, `kappa_t w_t != 0` via coefficient of `w_t`);
  `sigma Delta(X) sigma^{-1} = Delta(X)` and `[Delta(X),Delta(Y)] =
  Delta([X,Y])` proved from place operators; `Delta(E_ss)w_t = lambda_s w_t`
  and `g^{⊗n}w_t = x^lambda w_t`; raising annihilation
  `Delta(E_ij) phi = 0` by the column-swap pairing `tau=(ab)` with
  `kappa_t tau = -kappa_t` (char 0); matrix-unit rewriting induction (raising
  factors pushed right, inversion count decreases by one); weight bookkeeping
  `Vx` of weight `nu-alpha`, `alpha >= 0` simple-root combination, single
  operator `H = Delta(diag(d,d-1,...,1))` separates `alpha = 0`; uniqueness
  under `B`-irreducibility via `psi in B phi`, `phi in B psi` plus
  `thm-eigenvectors-for-distinct-eigenvalues-are-linearly-independent`;
  boundary `n=0`/`d=0` and no-choice audit. Added deps:
  `def-commuting-symmetric-and-linear-actions-on-tensor-power`,
  `def-column-antisymmetrizer-polytabloid-and-specht-module`,
  `def-young-subgroup-tabloid-and-permutation-module`,
  `def-row-and-column-stabilizers-of-a-tableau`,
  `def-young-tableau-standard-tableau-and-shape`,
  `def-partition-young-diagram-and-conjugate-partition`,
  `thm-tensor-product-basis-from-bases`, `def-linear-basis`,
  `thm-complex-specht-modules-are-irreducible`,
  `thm-eigenvectors-for-distinct-eigenvalues-are-linearly-independent`,
  `thm-sign-is-a-homomorphism`; kept the scaffold's three deps (the cutoff
  lemma is cited for the row-labelled map and its nonvanishing; the double
  centralizer for `B = End_{S_n}` and generation by the `Delta(X)`); no dep
  dropped.

- `lem-specht-branching-successive-quotients` (level 3, lemma, constructive) —
  authored; precheck PASS after `layerRepair`; rendercheck OK. Proves
  `theta_i(e_t) = e_{bar t}` for standard `t` with `n` in row `r_i`, and
  `theta_i(e_t) = 0` for `n` in an earlier removable row `r_l`, `l < i`;
  `ker(theta_i|_{V_i}) = V_{i-1}`; surjectivity onto `S^{lambda^(i)}_F`;
  `V_i/V_{i-1} ~= S^{lambda^(i)}_F` as `S_{n-1}`-modules. Field-uniform
  (works in characteristic 2); standard-polytabloid bases on both sides;
  uses `thm-first-isomorphism-theorem-for-vector-spaces`,
  `lem-largest-entry-of-a-standard-tableau-is-removable`, signs via
  `def-inversions-inversion-number-and-sign`.

- `thm-youngs-rule-for-permutation-modules` (level 3, theorem, constructive) —
  authored; precheck PASS; rendercheck OK; steps `1.1-4.1` (7). Two
  computations of `dim_C Hom_{S_n}(S^lambda,M^mu)`: the semistandard
  independence + spanning lemmas give the basis indexed by semistandard
  tableaux (`= K_{lambda,mu}`), while Maschke + the complete irredundant list
  of Specht irreducibles + Schur/endomorphism-scalars compute it as the
  multiplicity; Hom into a finite direct sum computed locally (step 1.3),
  `dim Hom(S^lambda,S^sigma) = delta` in step 1.4. Boundaries: `n=0`,
  `K=0` (e.g. `l(lambda)>l(mu)`, and `mu=(n)`, `lambda!=(n)`), `K=1`
  (`lambda=mu`; one-row shape for every `mu`), characteristic and choice
  audit. No RSK. Manifest deps kept as scaffolded (5); frontmatter carries
  the full citation list (12).

- `thm-schur-weyl-decomposition-with-length-cutoff` (level 4, theorem,
  constructive, landmark) — authored; precheck PASS after `layerRepair`;
  rendercheck OK; canonical steps `1.1-7.1` (12). Claims: (1) the
  `(S_n x GL(V))`-decomposition `E = sum_{l(lambda)<=d} S^lambda (x) M_lambda`
  via the isotypic decomposition + evaluation isomorphism + length cutoff;
  (2) each `M_lambda` nonzero, simple over `B`, irreducible for `GL(V)` and
  `gl(V)`; (3) pairwise inequivalent for `B`, `GL(V)`, `gl(V)` among the
  nonzero factors (`l(lambda),l(mu) <= d`), a nonzero factor not isomorphic to
  a zero factor, and no assertion about two zero factors; (4) highest
  weight `lambda` (padded zeros) via the local highest-weight lemma;
  (5) homogeneous polynomial `GL(V)`-module of degree `n` via
  `g^{⊗n}` matrix monomials of degree `n`. `B ~= prod M_{m_lambda}(C)` from
  the double centralizer + evaluation lemma + `thm-simple-modules-over-
  semisimple-rings`. Boundaries `n=0`, `d=0,n>=1` (empty sum), choice audit.
  Added deps: `def-commuting-...`, `cor-finite-dimensional-representations-
  are-completely-reducible-...`, `def-completely-reducible-representation`,
  `thm-isotypic-decomposition-...`, `def-isotypic-component-...`,
  `lem-isotypical-evaluation-...`, `cor-schurs-lemma-...`,
  `cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-...`,
  `thm-simple-modules-over-semisimple-rings`,
  `thm-tensor-product-basis-from-bases`,
  `cor-finite-iterated-tensor-products-represent-multilinear-maps`,
  `def-column-antisymmetrizer-polytabloid-and-specht-module`,
  `def-irreducible-completely-reducible-and-faithful-lie-algebra-representation`.
  Owner-directed repair applied and rechecked in the live file: claim 3 and
  step 6.2 now carry exactly the qualified statement above, and the "Two
  actions" Remark is restricted to the nonzero factors.

- `thm-specht-restriction-branching-filtration` (level 4, theorem,
  constructive) — authored; precheck PASS; rendercheck OK; steps `1.1-3.1`.
  Assembles the invariant subspaces (level 2) and the successive-quotient
  isomorphisms (level 3) into the strict filtration `0 = V_0 < V_1 < ... <
  V_m = S^lambda_F` with `V_i/V_{i-1} ~= S^{lambda^(i)}_F` as
  `S_{n-1}`-modules, field-uniform; nonzero quotients from the arbitrary-field
  Specht module; explicit "no splitting asserted" caveat; `n=1` boundary
  `S^empty_F = F`. Added deps: `def-polytabloid-specht-module-over-an-
  arbitrary-field`, `def-sign-representation-and-restriction-of-a-
  representation`, `def-subrepresentation-and-irreducible-representation`,
  `def-removable-and-addable-nodes-of-a-partition`. Also added
  `lem-integral-specht-garnir-straightening-and-field-basis` to the Young's
  rule frontmatter (linked in a remark, no manifest change).

- `ex-youngs-rule-for-m-two-one` (level 4, B page, example, direct) —
  authored; precheck PASS; rendercheck OK; steps `1.1-4.1`. Kostka numbers
  `K_{(3),(2,1)} = K_{(2,1),(2,1)} = 1`, `K_{(1,1,1),(2,1)} = 0` enumerated
  filling-by-filling; Young's rule gives `M^(2,1) ~= S^(3) (+) S^(2,1)`;
  concrete check `M^(2,1) = C(v_1+v_2+v_3) (+) H` with `S^(2,1) = H` the
  sum-zero hyperplane and dimension count `3 = 1 + 2`. B-leaf repair: the
  attempt-1 dependency on the published examples-page item
  `ex-polytabloids-for-shape-two-one` was replaced by the local step 2.1
  polytabloid computation; the Remarks keep only a non-load-bearing pointer.

- `cor-complex-specht-restriction-branching-rule` (level 5, corollary,
  constructive) — authored; precheck PASS; rendercheck OK; steps `1.1-4.1`.
  Splits the field-uniform filtration by Maschke over C for `S_{n-1}`
  (complements `U_i`, `U_i ~= V_i/V_{i-1} ~= S^{lambda^(i)}`), yielding
  `Res S^lambda ~= (+)_i S^{lambda^(i)}`, each summand once; `n=1` boundary;
  remark on the failure over positive-characteristic fields and on the two
  extreme shapes. B-leaf repair: attempt-1's `ex-trivial-and-sign-specht-modules`
  dependency was dropped; the proof and the extreme-shape remark are
  self-contained.

- `cex-branching-filtration-need-not-split-in-modular-characteristic`
  (level 5, B page, counterexample, direct) — authored; precheck PASS after
  `layerRepair`; rendercheck OK; steps `1.1-4.1`. Over `K = F_2`:
  `S^(2,1)_K = span{v_1+v_2, v_1+v_3}` (signs die), the fixed space of
  `(12)` is the 1-dimensional `V_1`, while the two filtration quotients
  `S^(1,1)_K`, `S^(2)_K` are trivial 1-dimensional, so the extension is
  nonsplit; refutes the field-independent splitting claim.

- `ex-schur-weyl-for-two-tensor-factors` (level 5, B page, example, direct) —
  authored; precheck PASS; rendercheck OK; canonical steps `1.1-3.1`.
  Idempotents `p_+ = (1+tau)/2`, `p_- = (1-tau)/2` give
  `E = Sym^2 V (+) Lambda^2 V` with dimensions `d(d+1)/2`, `d(d-1)/2`
  from the explicit symmetric/antisymmetric tensor spanning sets; the
  Schur-Weyl decomposition for `n=2` is matched summand-by-summand to the
  `tau`-eigenspaces, so `Sym^2 V = S^(2) (x) M_(2)` and
  `Lambda^2 V = S^(1,1) (x) M_(1,1)`; `Lambda^2 V = 0` iff `d < 2`
  (cutoff `l(1,1)=2`); `dim M_(2) = d(d+1)/2`, `dim M_(1,1) = d(d-1)/2`
  for `d>=2` and `M_(1,1)=0` otherwise. Boundaries `d=0`, `d=1`; the
  idempotents need `2` invertible, i.e. characteristic zero. B-leaf repair:
  attempt-1's examples-page dependency `ex-trivial-and-sign-specht-modules`
  was dropped, and the facts it supplied (triviality of `S^(2)`, sign
  character of `S^(1,1)`) are now proved locally in step 2.1.

- `ex-schur-weyl-for-c2-tensor-three` (level 5, B page, example, direct) —
  authored; precheck PASS (canonical `1.1-5.1`, adopted via `layerRepair`);
  rendercheck OK. `V=C^2`, `E=V^{⊗3}`: `E ≅ S^(3)⊗M_(3) ⊕ S^(2,1)⊗M_(2,1)`,
  `M_(1,1,1)=0` (ℓ=3>2); `S^(3)` trivial and `M_(3) ≅ E^{S_3}`
  (4-dimensional, orbit-sum basis: `e_1^3, Σ e_1e_1e_2, Σ e_1e_2e_2, e_2^3`),
  `M_(3) ≅ Sym^3(C^2)`; `dim S^(2,1)=f^(2,1)=2` (two standard tableaux);
  dimension count `8 = 1·4 + 2·2` gives `dim M_(2,1)=2`; highest weights
  (2,1) and (3) from the highest-weight lemma with irreducibility from the
  Schur-Weyl theorem. Added deps: `def-commuting-...`,
  `thm-tensor-product-basis-from-bases`, `def-linear-basis`,
  `def-young-subgroup-tabloid-and-permutation-module`,
  `def-column-antisymmetrizer-polytabloid-and-specht-module`,
  `def-young-tableau-standard-tableau-and-shape`,
  `def-partition-young-diagram-and-conjugate-partition` (kept the scaffold's
  three deps). No choice; bounded `{1,2}^3` enumeration only.

- `thm-complex-specht-induction-branching-rule` (level 6, A page, theorem,
  constructive) — authored; precheck PASS (canonical `1.1-6.1` via
  `layerRepair`); rendercheck OK. Route: adjunction
  `Hom_G(Ind S^λ, S^ν) ≅ Hom_H(S^λ, Res S^ν)` with `G=S_{n+1}`, `H=S_n`;
  restriction corollary gives `Res S^ν ≅ ⊕_{x∈Rem(ν)} S^{ν−x}`; Schur gives
  dimension `#\{x∈Rem(ν): ν−x=λ\}`; node bijection with
  `\{y∈Add(λ): λ+y=ν\}`; complete reducibility (Maschke) + complete list +
  uniqueness of the isotypic decomposition give
  `Ind S^λ ≅ ⊕_{y∈Add(λ)} S^{λ+y}`, each once. Boundaries: `n=0` gives
  `Ind_{S_0}^{S_1} S^∅ ≅ S^(1)`; sum never empty for `n≥1` (new-row node);
  choice-free. Added deps over scaffold: `def-induced-...`,
  `def-column-antisymmetrizer-...`,
  `def-young-subgroup-tabloid-and-permutation-module`,
  `def-removable-and-addable-nodes-of-a-partition`, `def-symmetric-group`,
  `cor-schurs-lemma-...`, `cor-endomorphisms-...-scalars`,
  `cor-finite-dimensional-representations-are-completely-reducible-...`,
  `def-completely-reducible-representation`,
  `thm-isotypic-decomposition-...-is-unique`,
  `def-isotypic-component-...`. Kept all four scaffold deps.

- `ex-young-graph-through-s4` (level 7, B page, example, direct) — authored;
  precheck PASS; rendercheck OK; steps `1.1-5.1` (7). Vertices at ranks
  `0-4` (`1,1,2,3,5` partitions) and the edges out of ranks `<= 3` are
  enumerated from the addable-node criterion (`1,2,4,7` edges); standard
  tableaux are listed explicitly, giving the values `f^lambda` by rank
  `0,1,2,3,4` equal to `(1),(1),(1,1),(1,2,1),(1,3,2,3,1)`, so
  `sum (f^lambda)^2 = n!` for `n <= 4`; the restriction/induction branching
  rules are matched to incoming/outgoing edges of the graph, including
  `Res S^(2,2) ~= S^(2,1)` and
  `Ind S^(2,1) ~= S^(3,1) (+) S^(2,2) (+) S^(2,1,1)`. All enumerations are
  finite and explicit; no choice principle.

## Checks actually run (all on the current files)

| Check | Actual result |
|---|---|
| `tsx-run tools/precheck.mts <25 explicit item paths>` | Exit 0; 21 phase bodies checked, 0 failing (the four definitions have no proof body). |
| `node tools/rendercheck.mjs <25 explicit item paths>` | Exit 0; 25 files: no bad wikilinks in math, no multiline display, all KaTeX math parses, all frontmatter parses. |
| `node tools/content-policy.mjs research/frontier-37-owner-30-batch-14.pages.json` | Exit 0; 25 scoped items, 0 errors, 0 warnings. |
| `node tools/manifest-deps.mjs research/frontier-37-owner-30-batch-14.pages.json` | Exit 0; 25 items, 0 errors. |
| `node tools/coverage-checklist.mjs research/frontier-37-owner-30-batch-14.coverage.json --require-destination` | Exit 0; 1 page, 66 harvested results, 0 errors, 0 warnings. |
| `node tools/source-fetch-check.mjs --coverage research/frontier-37-owner-30-batch-14.coverage.json` | Exit 0; 6/6 sources fetch-verified, 0 documented drops. |
| `node tools/proof-contract.mjs research/frontier-37-owner-30-batch-14.proof-contracts.json --strict` | Exit 0; 0 errors, 1 warning (`shotgun-bracket`, `thm-youngs-rule-for-permutation-modules` step 1.1), 25/25 items checked; all 8 boundary cases per item dispositioned with item-specific reasons. |
| `node tools/item-dependency-levels.mjs check --run frontier-37-owner-30` | Exit 0 at the final re-run (812 items, 60 pages, maximum level 24). It briefly failed mid-dispatch on two items of the stationary-Markov pair (`thm-convergence-to-stationarity-for-irreducible-aperiodic-positive-recurrent-chains`, `cor-stationary-irreducible-markov-shift-is-ergodic`); that writer corrected it, and no owned ID was ever involved. |
| `node tools/validate-plan.mjs research/plan-spec.json` | Exit 0. |
| `node tools/manifest-integrity.mjs --run frontier-37-owner-30` and `node tools/pathcheck.mjs --quiet` | Both exit 0 ("60 page(s) owed, 60 in the manifests — no scope drift"; pathcheck reports 0 errors, only the pre-existing category-level `_pathway.md`/`_category.md` warnings for `representation-theory`, which apply to the whole group and not to the two new draft pages). |
| `tsx-run tools/step3-decisions.mjs check --run frontier-37-owner-30 --phase scope` | This pair's scope decision is `sufficient` and fresh; the run-level command exits 1 because another pair's page `induced-unitary-representations-of-locally-compact-groups` (batch 16) now needs a current scope review (see open obligations). |
| `tsx-run tools/step3-decisions.mjs check --run frontier-37-owner-30 --phase final` | Exit 1 for the open items owned by other groups (about 470 at handoff); **none** of the 25 owned IDs appears in the work list. |
| `node tools/depcheck.mjs` | Exit 1 from other groups' pre-existing errors; **zero** lines mention any owned ID, and there is no `b-leaf-content` finding anywhere for this pair. |
| Whole-repo `extcheck` / `depsource` / `prosecheck` / `rendercheck` / `fwdcheck` | extcheck, depsource and prosecheck exit 0 (extcheck's only line is the informational unproved-on-published note for another item); whole-repo rendercheck exits 1 with 67 errors and fwdcheck exits 1, all in other files — none mentions an owned ID or either owned page (the page files were also checked directly, see below). |
| `rendercheck` + `prosecheck` on the two new page files | Exit 0 for both tools; no KaTeX/YAML problem, no positional contradiction. |
| `node tools/frontier-dependency-ledger.mjs refresh --run frontier-37-owner-30` | Exit 1, blocked by other pairs' malformed frontmatter — 84 in-run items in batches 3, 4 and 30 carry a null `justified_by:` (see open obligations). Batch-14 input `[]` re-verified correct: 0 cross-batch item edges over `deps ∪ justified_by ∪ forward_refs` of all 25 items; the four page-level `requires` suppliers are published pages outside all 30 batch manifests; the B→A edge is in-batch. |

## Handoff — completed items (25/25)

All decisions recorded `accept` with confidence 1 *after* the final text of each item
(`research/frontier-37-owner-30-step3b-review-<id>.json`; nine re-recorded after the repairs
changed their transitive inputs):

- Level 0: `def-polytabloid-specht-module-over-an-arbitrary-field`, `def-young-graph`,
  `def-commuting-symmetric-and-linear-actions-on-tensor-power`,
  `lem-semistandard-tableau-homomorphisms-to-young-permutation-modules`.
- Level 1: `cor-paths-in-the-young-graph-index-standard-tableaux`,
  `def-corner-order-and-specht-deletion-map`, `lem-integral-specht-garnir-straightening-and-field-basis`,
  `lem-schur-weyl-length-cutoff-by-column-antisymmetrization`,
  `lem-semistandard-homomorphisms-are-independent-and-dominance-triangular`,
  `lem-tensor-place-operators-span-the-symmetric-centralizer`.
- Level 2: `lem-semistandard-homomorphisms-span-in-characteristic-zero`,
  `lem-specht-branching-subspaces-are-invariant`, `thm-schur-weyl-double-centralizer`.
- Level 3: `lem-schur-weyl-polytabloid-highest-weight`, `lem-specht-branching-successive-quotients`,
  `thm-youngs-rule-for-permutation-modules`.
- Level 4: `thm-schur-weyl-decomposition-with-length-cutoff`,
  `thm-specht-restriction-branching-filtration`, `ex-youngs-rule-for-m-two-one`.
- Level 5: `cor-complex-specht-restriction-branching-rule`,
  `cex-branching-filtration-need-not-split-in-modular-characteristic`,
  `ex-schur-weyl-for-two-tensor-factors`, `ex-schur-weyl-for-c2-tensor-three`.
- Level 6: `thm-complex-specht-induction-branching-rule`.
- Level 7: `ex-young-graph-through-s4`.

Local suppliers added: none (no new item or page IDs). All additions were dependency edges on
already-recorded suppliers and the three b-leaf edge removals recorded above.

Page carriers authored for the pair (the earlier checkpoint had items only):

- `library/representation-theory/the-branching-rule-and-the-young-graph.md` — A page,
  `status: draft`, `requires` the four declared prerequisites, listing the 20 A items in the
  batch-manifest reading order, with a summary that follows the page's own arguments
  (field-uniform filtration, complex splitting, Young graph, Young's rule, Schur–Weyl).
- `library/representation-theory/the-branching-rule-and-the-young-graph-examples.md` — B page,
  `status: draft`, `requires` its A page, listing the 5 examples/counterexample items.

Both page files parse under the renderer's YAML/KaTeX checks and prosecheck reports no
positional contradictions. The engine's pair-author artifact accounting
(`tools/dispatch-author-artifacts.mjs`, called on `the-branching-rule-and-the-young-graph`)
now returns `ok: true` for 29 required carriers: the report, the batch proof contracts, the two
page files and the 25 item files.

## Published concerns

- **No confirmed defect found in a published item used by this pair.** The published complex Specht
  construction (`def-column-antisymmetrizer-polytabloid-and-specht-module`,
  `thm-standard-polytabloid-basis`) is complex-only; that is a recorded scope limit, met here by the
  local arbitrary-field definition and the integral Garnir basis, not a defect. The two defects the
  read-only audit found were in this pair's own draft items and are repaired.
- **Observation for Step 4 (manifest/plan wording, not a published item).** The batch-14 manifest
  statement for `thm-schur-weyl-decomposition-with-length-cutoff` says "Every multiplicity factor
  is a nonzero irreducible ... pairwise inequivalent". Read as covering only the factors in the
  displayed sum over `ℓ(λ) ≤ d` this is true and is what the item proves; read unqualified (so as
  to include two `ℓ > d` factors, both zero and therefore isomorphic) it is false. The authored
  item states the qualified version explicitly. I deliberately did **not** edit the manifest,
  because the scope decision hash covers the page's item statements; the serial reconciler should
  qualify the manifest wording (and the matching design prose in
  `research/plan-representation-theory-groups-track.md`, around the RG-10 Schur–Weyl row) in Step 4.
- Related scaffold bookkeeping: the manifest dep row for
  `lem-semistandard-homomorphisms-are-independent-and-dominance-triangular` still lists
  `lem-column-collision-causes-antisymmetrizer-cancellation`, which the authored proof does not
  consume. No gate reads this mismatch; flagging it for the same serial pass.

## Open obligations / escalations for the owner

1. **Run-level frontier ledger refresh is blocked by other pairs' frontmatter.** Command:
   `node tools/frontier-dependency-ledger.mjs refresh --run frontier-37-owner-30`; first error:
   `items/lem-roots-of-unity-in-a-number-field-are-finite.md: justified_by must be an array`
   (batch 3; line 24 has `justified_by:` with a null value). A read-only scan of every in-run
   manifest and item found **84** items with a null `justified_by` — 24 in batch 3, 31 in batch 4
   and 29 in batch 30 (e.g. also `thm-kronecker-root-of-unity-criterion`,
   `ex-frobenius-restriction-for-p-five-q-three`, `cex-gauss-sum-sign-without-a-complex-embedding`)
   — all outside this pair's files. Required remedy for those owners: replace each bare
   `justified_by:` with `justified_by: []` (or the intended array), then rerun the refresh. Until
   then `research/frontier-37-owner-30-cross-batch-dependencies.json` cannot be regenerated; the
   batch-14 review input `research/frontier-37-owner-30-batch-14.cross-batch-dependencies.json`
   is `[]` and correct, and there is nothing for this pair to review (the stale unified ledger of
   18:04 already contains no row touching batch 14).
2. **Manifest/design wording qualification** for the Schur–Weyl multiplicity claim (previous
   section) — Step 4 serial reconciliation.
3. **Nonfatal contract warning** `shotgun-bracket` on `thm-youngs-rule-for-permutation-modules`
   step 1.1, left in place deliberately (each declared fact is cited at the steps where it is
   used; re-tagging is a Step 5+ audit concern).
4. **Run-level scope gate not fully closed (another pair).** The scope check reports one open
   page, `induced-unitary-representations-of-locally-compact-groups` (batch 16), whose scope
   review has gone stale against its current scaffold. That pair's owner must re-record its scope
   decision. `the-branching-rule-and-the-young-graph` remains `sufficient` and closed
   (sha256 `a334f3ba…`), and no owned carrier is affected.
5. **Steps 5–8 still owe the independent mathematical audit.** This dispatch is the author-level
   readiness check: hypotheses, quantifiers, direct suppliers and the proof route were audited far
   enough to write the promised arguments, and concrete defects found while authoring were
   repaired, but no claim of independent verification is made here.

## Provenance note

Attempt 1 (`…b6f729434299327e`) wrote 22 items and this checkpoint through
`thm-specht-restriction-branching-filtration` and then died on a provider `402`; its final
checkpoint still shows the three examples-page dependencies that were later removed. The resumed
dispatch authored the three remaining items (`ex-schur-weyl-for-c2-tensor-three`,
`thm-complex-specht-induction-branching-rule`, `ex-young-graph-through-s4`), applied the three
b-leaf repairs and the two owner-directed proof repairs against the live files, completed the
25×8 proof-contract boundary entries, wrote the two missing page carriers under
`library/representation-theory/`, and recorded the 25 item decisions. Snapshot hashes quoted
in `research/frontier-37-owner-30-branching-handoff-repair.md` are pre-repair hashes of the failed
attempt and are not acceptance evidence for the current text.
