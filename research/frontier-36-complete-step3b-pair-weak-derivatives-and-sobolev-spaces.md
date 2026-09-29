# Step 3b authoring report — weak derivatives and Sobolev spaces

Run `frontier-36-complete`; role `alpha-high`; batch 30. This report records
item decisions only after the authored content and its focused contract check.
The owned assignment is the A/B pair
`weak-derivatives-and-sobolev-spaces` and
`weak-derivatives-and-sobolev-spaces-examples`.

## Scope and inputs

- Read the complete `CLAUDE.md`, `README.md`, `SCHEMA.md`, the pair's PDE-11
  design section and §12.5 overlay, current batch-30 manifest and coverage,
  Step-3a scope decision and owner proceed receipt, Step-1 decision records,
  and `research/frontier-36-complete-owner-authoring-direction.md`.
- The current A page directly requires only
  `distributions-test-functions-and-differentiation` and
  `hilbert-space-geometry-and-riesz-representation`; the B page requires its A
  page. The PDE-11 prose's broader MT/FA labels are orientation, as its next
  paragraph says. The old page edge to wave energy is absent and is not a proof
  premise.
- Audited task order began with the generated dispatch's 39 items, dependency
  levels 0–8. Dependency-only scaffold repairs have now added the real and
  complex Lp quotient-norm suppliers to the Wkp definition, regular-pairing
  and representative-independence suppliers to the linearity/locality/
  commutation lemma, and weak-derivative linearity plus the real Lp quotient
  norm supplier to the Sobolev-norm lemma. The smooth-factor Leibniz lemma
  now declares its regular-pairing, Wkp, and real/complex Lp class suppliers;
  the weak-stability lemma declares Wkp, real/complex Lp class, and
  representative-independence suppliers for its local test pairings.
  Recomputing after each repair keeps the 39 assigned IDs but moves the
  smooth-factor Leibniz lemma and weak-stability lemma from level 3 to level 4;
  their bounded-restriction and closed-gradient consumers move from levels 4
  to 5, and the pasting consumer moves from level 5 to 6. No other pair's row
  changes. The Step-3a scope
  receipt records the enriched 28-item A and 11-item B inventory. The current
  scope hash is `56a9c225017c0c1348d28fa0fe70bcc7ffba4a485bc624744e0d70c51edc5cdc`,
  while the owner `proceed` receipt is bound to
  `9e43580aeac11cf63852859cb57141f55d8646ba078e4e721829edaa11a7589a`.
  Dependency metadata is excluded from the scope hash; the exact statement or
  inventory delta is not recoverable from the hash-only receipt. The scope
  checker therefore still requires the owner to review and record proceed for
  the current pair. No item decision may be recorded until that owner-held
  scope is closed.
- The owner direction's open obligation for this pair is to supply the weak
  derivative, representative uniqueness, `W^{k,p}` and `H^k` interfaces needed
  by the Fourier-multiplier consumer. Its old wave-energy edge remains removed.

## Source passages read

- The assigned design's core definitions and proof obligations: PDE-11,
  `research/plan-pde-track.md` §PDE-11; added results: §12.5 PDE-11; choice
  strength: §8.
- Juha Kinnunen, *Sobolev Spaces* (Aalto, 2026), Chapter 1 §1.1, printed
  pp. 1–4: integration-by-parts definition of weak derivatives, invariance
  under null changes, classical compatibility, uniqueness, and the fundamental
  lemma. Full PDF: [source](https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf).
- For item 0, read the complete local arguments in
  `def-regular-distribution-from-a-locally-integrable-function` and
  `thm-locally-integrable-functions-embed-in-distributions`, including the
  latter's compactwise continuity and its explicit Countable Choice use in the
  mollifier-injectivity argument. The definition of Countable Choice was read
  in `def-countable-choice`.

## Item checkpoints

### 0. `def-locally-integrable-function-as-a-regular-distribution`

- **Audit and authored claim:** Defined the bilinear test pairing on
  `L^1_loc` classes, made compact-support finiteness and the empty-domain case
  explicit, and separated choice-free definition/linearity from injectivity.
- **Dependencies examined:** `def-regular-distribution-from-a-locally-integrable-function`,
  `thm-locally-integrable-functions-embed-in-distributions`,
  `def-countable-choice`. No later item is used.
- **Decision:** `accept`, confidence 1. The full embedding proof states that
  Countable Choice is spent only by the cited approximate-identity theorem;
  the regular pairing and its continuity bound are choice-free.
- **Checks:** focused explicit-path precheck: 0 failures; strict proof contract
  for this item: 0 errors and 0 warnings.
- **Open gap:** none for item 0.
- **Next:** audit and author
  `def-weak-derivative-of-a-locally-integrable-function` (level 1).

### 1. `def-weak-derivative-of-a-locally-integrable-function`

- **Audit and authored claim:** The defining test identity is finite for each
  compactly supported smooth test. It agrees exactly with the signed transpose
  defining distributional derivatives. The order-zero case is separated: only
  identifying regular distributions with a.e. classes spends Countable Choice.
- **Dependencies examined:** item 0,
  `def-distributional-derivative`,
  `def-ck-and-multi-index-notation-in-several-variables`, and
  `def-countable-choice`. The matching independent source statements are
  Kinnunen, Chapter 1 §1.1, Definition 1.2, and Hunter, §3.1, Definitions 3.1–3.2
  (printed pp. 47–48). Hunter's §3.1 states the same signed identity and
  distinguishes higher multi-index order. No later item is used.
- **Decision:** `accept`, confidence 1. The distributional equivalence follows
  directly from the two definitions; the test identity itself is choice-free.
- **Checks:** focused explicit-path precheck: 0 failures; strict proof contract
  for this item: 0 errors and 0 warnings.
- **Open gap:** none for item 1.
- **Next:** audit and author
  `lem-weak-derivative-is-independent-of-lp-representatives` (level 2).

### 2. `lem-weak-derivative-is-independent-of-lp-representatives`

- **Audit and authored claim:** On a compact test support, Countable Choice's
  cited finite-measure interface and Hölder give local integrability of every
  `L^p` representative, including `p=1` and `p=∞`. Almost-everywhere equal
  representatives make both products in the weak identity equal almost
  everywhere, so the integral theorem preserves both sides and both
  directions.
- **Dependencies examined:** the weak derivative definition, the `L^p`
  quotient definition, the a.e. integral theorem, Holder including endpoint
  cases, finite measure of compact sets under Countable Choice, and the
  Countable Choice definition. Read the full local arguments/statements.
  Kinnunen, §1.1 Definitions 1.2 and Lemma 1.4 (pp. 2–4), and Hunter, §3.1
  Definitions 3.1–3.2 (printed pp. 47–48), match the conventions. No later
  item is used.
- **Decision:** `accept`, confidence 1. Countable Choice is exactly the
  hypothesis of the compact-measure supplier; the a.e. pairing argument and
  the test identity itself do not use full AC.
- **Checks:** explicit-path reflow (formatting only), precheck: pass; strict
  item proof contract: 0 errors and 0 warnings.
- **Open gap:** none for item 2.
- **Next:** audit and author
  `lem-weak-derivatives-are-unique-almost-everywhere` (level 2).

### 3. `lem-weak-derivatives-are-unique-almost-everywhere`

- **Audit and authored claim:** If $v,w$ both satisfy the weak identity for
  the same $u$ and multi-index, subtracting cancels the shared left side and
  leaves the regular distribution of $v-w$ equal to zero. The published
  regular-distribution injection under Countable Choice gives $v=w$ almost
  everywhere on all of $\Omega$; no connectedness is used. The empty domain
  has only the zero class.
- **Dependencies examined:** weak derivative definition, regular-distribution
  definition, published locally integrable embedding/injection theorem, and
  Countable Choice. The full local theorem proof was reread: its continuity is
  choice-free and its injectivity is explicitly conditional on Countable
  Choice. Kinnunen, *Sobolev Spaces*, Ch. 1 §1.1, printed pp. 3–4, Def. 1.2
  and the uniqueness proof after Remarks 1.3; read the complete argument. Its
  proof subtracts the identities then uses bounded smooth approximants and
  dominated convergence. The local proof instead uses the published injection
  interface, so it does not silently import that source proof's density step.
- **Decision:** `accept`, confidence 1. Countable Choice is exactly the
  hypothesis on the published injection used in step 2.1.
- **Checks:** explicit-path precheck: pass; strict focused proof contract:
  0 errors, 0 warnings. Formatting-only `reflow` was used after the checker
  identified line-wrapped proof steps.
- **Open gap:** none for this item.
- **Next:** audit and author
  `def-sobolev-space-wkp-and-its-norm` (level 3).

### 4. `def-sobolev-space-wkp-and-its-norm`

- **Audit and authored claim:** Defined the real and complex $W^{k,p}$
  classes using all multi-indices through order $k$, the finite-$p$ sum and
  $p=\infty$ maximum size formulas, $D^0u=u$, $W^{0,p}=L^p$, and the local
  relatively-compact-subdomain convention. Countable Choice is carried for
  local integrability of $L^p$ representatives, representative invariance,
  and uniqueness of function-valued weak derivatives. The formula's norm
  axioms remain a separate assertion.
- **Scaffold repair:** Added direct dependencies on the published real and
  complex $L^p$ quotient-norm interfaces, which the original dependency list
  omitted although the displayed Sobolev formula uses those class norms.
  Updated only this pair's row in the shared batch pages file; the existing
  coverage row already contains the item. Recomputed the full dependency
  order: it remains at level 3 and the dispatched order is unchanged. The A/B
  scope hash ignores dependency metadata, so the current owner `proceed`
  receipt remains current; a direct scope check confirms it. No sibling rows
  or cross-batch dependency input changed.
- **Dependencies examined:** the weak derivative definition; both earlier
  representative-independence and uniqueness lemmas; real and complex $L^p$
  class conventions; the published real and complex quotient-norm theorems;
  and Countable Choice. Full relevant statements and proofs were read. The
  real quotient theorem uses Minkowski and quotient separation. The complex
  theorem explicitly descends its functional to a norm on the a.e. quotient.
- **Sources read:** Kinnunen, *Sobolev Spaces*, Ch. 1 §1.2, Def. 1.8 and the
  norm/local-space text, printed pp. 4–5; and Hunter, *Notes on Partial
  Differential Equations*, Def. 3.23, §3.5, printed pp. 58–59. Kinnunen's
  finite-$p$ sum and $p=\infty$ equivalent maximum match the scaffold; Hunter
  states the real-valued $W^{k,p}$ definition and maximum formula. The complex
  version follows the already-published complex $L^p$ conventions. The source
  local notation is made explicit here as open $U$ with $\overline U$ compact
  in $\Omega$.
- **Decision:** `accept`, confidence 1. The formulas are finite because the
  multi-index set is finite; the class-valued derivatives are well-defined
  under the declared Countable Choice dependency.
- **Checks:** focused explicit-path precheck (0 proof-bearing sections to
  check, 0 failures); strict focused proof contract (0 errors, 0 warnings);
  page/contract JSON parse; full item-dependency-levels (923 items across 60
  pages, maximum level 18); current pair scope check.
- **Open gap:** none for this definition.
- **Next:** audit and author
  `lem-classical-derivatives-are-weak-derivatives` (level 3).

### 5. `lem-classical-derivatives-are-weak-derivatives`

- **Audit and authored claim:** For a componentwise complex $C^k$ function,
  the published distributional compatibility theorem under Countable Choice
  supplies local integrability and
  $\partial^\alpha T_u=T_{\partial^\alpha u}$. The signed-transpose/regular
  pairing equivalence turns this into the test identity, including the
  $(-1)^{|\alpha|}$ sign; the earlier uniqueness lemma identifies the
  resulting a.e. derivative class. The zero-order case is the identity.
- **Dependencies examined:** the weak derivative/distribution dictionary,
  the published continuous-and-commuting distributional differentiation
  theorem, the earlier uniqueness lemma, and Countable Choice. The full
  relevant local theorem proof was read: its classical compatibility uses
  compact-support integration by parts on a box, Riemann Fubini, and the
  Countable-Choice Riemann-to-Lebesgue comparison; its algebraic commutation
  clause is choice-free. No unpublished later result is used.
- **Source passages read:** Kinnunen, *Sobolev Spaces*, Ch. 1 §1.1, printed
  pp. 2–3: the full compact-support integration-by-parts argument, successive
  multi-index integrations, and Remarks 1.3(1). Hunter, *Notes on Partial
  Differential Equations*, Chapter 3 §3.1, printed pp. 47–48: Definitions
  3.1–3.2 for the test identity. Kinnunen's argument is stated for real
  functions; the library theorem's proof handles complex values by splitting
  into real and imaginary parts.
- **Decision:** `accept`, confidence 1. Countable Choice is stated and used
  only at the published integral-comparison interface and the a.e.-uniqueness
  interface.
- **Checks:** focused explicit-path precheck: pass; strict focused proof
  contract: 0 errors, 0 warnings. Formatting-only `reflow` made the numbered
  proof steps checker-readable. No scaffold dependency repair was needed.
- **Open gap:** none for this item.
- **Next:** audit and author
  `lem-weak-derivative-linearity-locality-and-commutation` (level 3).

### 6. `lem-weak-derivative-linearity-locality-and-commutation`

- **Audit and authored claim:** Proved complex linearity directly from the
  signed weak test identity, restriction by extending a compactly supported
  test by zero, and the three separate cases showing that existence of either
  iterated weak derivative or the combined multi-index derivative implies the
  other two. The argument identifies the common distributional derivative,
  then uses a locally integrable representative only in the case where one is
  assumed to exist. Countable Choice supplies the declared representative and
  uniqueness interfaces; the algebraic test manipulations and distributional
  commutation are choice-free.
- **Scaffold repair:** Added direct dependencies on
  `def-locally-integrable-function-as-a-regular-distribution` for complex
  pairing linearity and
  `lem-weak-derivative-is-independent-of-lp-representatives` for class-level
  representative invariance. Updated only this pair's manifest row; the item
  and coverage IDs were already registered. Recomputed all 923 dependency
  levels across 60 pages: this item remains level 3 and the dispatched order
  is unchanged. The current owner scope receipt remains current; no sibling
  row or cross-batch input changed.
- **Dependencies examined:** the weak-derivative/distribution dictionary,
  complex-bilinear regular pairing, representative independence, a.e.
  uniqueness, the published distributional commutation theorem, and Countable
  Choice. Read each complete local item argument or statement. The published
  distributional theorem separates its choice-free algebraic commutation from
  the Countable-Choice classical compatibility clause; no defect was found in
  the relevant published suppliers.
- **Source passages read:** Kinnunen, *Sobolev Spaces*, Chapter 1 §1.3,
  Lemma 1.14 and its complete proof, printed pp. 9–10; Hunter, *Notes on Partial
  Differential Equations*, Chapter 3 §3.4, Proposition 3.17 and its complete
  proof, printed pp. 54–55. Kinnunen's result is restricted to `W^{k,p}` inputs
  and assumes the relevant derivatives are in that space. Hunter states the
  any-one-of-three existence conclusion for locally integrable inputs. Both
  sources present real-valued functions; the local proof derives the complex
  version through the library's bilinear pairing and distribution identities.
- **Decision:** `accept`, confidence 1. The three existence directions and
  equality of a.e. value classes are explicit. Countable Choice is carried
  through representative independence and uniqueness only; no full Axiom of
  Choice is used.
- **Checks:** formatting-only reflow; focused explicit-path precheck: pass;
  strict focused proof contract: 0 errors and 0 warnings; full
  item-dependency-levels: 923 items across 60 pages, maximum level 18; current
  pair scope receipt checked and still `proceed`.
- **Open gap:** none. No potentially defective published item was identified
  among the dependencies examined for this item.
- **Next:** the dependency-recomputed order returns to level 3 for
  `rem-weak-derivatives-are-distributional-derivatives-with-function-values`.

### Scaffold audit checkpoint — `lem-weak-leibniz-rule-with-a-smooth-factor`

- **Scaffold claim audited:** For $\eta\in C^\infty(\Omega)$ and
  $u\in L^1_{\rm loc}$ whose $D^\gamma u$ exist for all $\gamma\le\alpha$,
  prove the full multi-index Leibniz formula as an $L^1_{\rm loc}$ class; for
  $u\in W^{k,p}$, bounded derivatives of $\eta$ through order $k$ give the
  formula in $L^p$, with compactly supported smooth $\eta$ sufficient.
- **Scaffold repair:** Added direct dependencies on
  `def-locally-integrable-function-as-a-regular-distribution`,
  `def-sobolev-space-wkp-and-its-norm`,
  `def-l-p-space-as-a-quotient-by-null-functions`, and
  `def-complex-lp-and-euclidean-test-function-conventions`; existing direct
  dependencies on the weak derivative dictionary, published distributional
  Leibniz theorem, smooth-distribution multiplication, a.e. uniqueness, and
  Countable Choice are retained. Recomputed and refreshed the dependency-level
  labels for this item and its two in-pair downstream consumers. Full check:
  924 items across 60 pages, maximum level 18. The item is now level 4, after
  every assigned level-3 item; bounded restriction is level 5 and pasting is
  level 6. The current owner scope receipt remains `proceed`; its item inventory
  hash is unchanged. No item decision is recorded because authorship and
  focused checks are not yet complete.
- **Dependencies and source passages examined:** Read the complete published
  distributional Leibniz theorem and smooth-multiplier definition, the weak
  derivative/distribution dictionary, the previously authored Wkp definition
  and weak-derivative uniqueness lemma, and real and complex Lp class
  conventions. Kinnunen, *Sobolev Spaces*, Chapter 1 §1.3, Lemma 1.14(5) and
  its induction proof, printed pp. 9–11, assumes $u\in W^{k,p}$ and compactly
  supported smooth $\eta$. Hunter, *Notes on Partial Differential Equations*,
  Chapter 3 §3.4, Proposition 3.16 and its complete test-function proof,
  printed p. 54, gives the first-order product rule for $u,D_i u\in L^1_{\rm loc}$
  and smooth $\eta$. The local proof will use the library's full distributional
  multi-index theorem, then derive the broader bounded-multiplier $L^p$ clause
  directly from the quotient definitions. No defect was found in the published
  suppliers examined.
- **Decision:** pending authoring; do not record an item decision yet.
- **Open gap:** the complete authored proof contract and focused checks remain
  to be written after all currently earlier level-3 items are complete.
- **Next at this checkpoint:** `lem-weak-stability-of-sobolev-derivatives` was
  level 3. Its subsequent audit added the missing direct Wkp definition
  supplier and moved it to level 4; the following checkpoint records the
  current queue.

### Scaffold audit checkpoint — `lem-weak-stability-of-sobolev-derivatives`

- **Scaffold claim audited:** If $u_j\to u$ in local $L^p$ and
  $D^\alpha u_j\to v$ in local $L^q$, with $1\le p,q\le\infty$ and the
  indicated weak derivatives present, prove $D^\alpha u=v$ as a weak
  derivative. Its Sobolev-sequence consequence should state the local
  $W^{k,p}$ conclusion precisely, including uniqueness of the limiting
  derivative classes.
- **Scaffold repair:** Added a direct dependency on
  `def-sobolev-space-wkp-and-its-norm` to support the explicit consequence.
  Recomputed levels: the stability lemma moves from level 3 to 4 and its
  closed-gradient consumer moves from level 4 to 5. Current full dependency
  check passes for 924 items across 60 pages, maximum level 18. The pair scope
  receipt remains the current owner `proceed` decision; no other pair row
  changed.
- **Dependencies and source passages examined:** the weak derivative
  definition, uniqueness lemma, real and complex Holder theorems (including
  both endpoint pairs), finite measure of compact sets under Countable Choice,
  and the newly declared Wkp definition. Hunter, *Notes on Partial Differential
  Equations*, Chapter 3 §3.4, Theorem 3.20 and its complete proof, printed
  p. 56, passes both test pairings through local $L^1$ convergence.
  Kinnunen, *Sobolev Spaces*, Chapter 1 §1.4, Theorem 1.15 proof, Step 3,
  printed pp. 12–13, uses Holder for $1<p<\infty$ and leaves $p=1,\infty$ as
  an exercise. The authored proof will establish the independent $p,q$
  extension and both endpoints directly using Holder and finite compact
  support measure.
- **Decision:** pending authoring; do not record an item decision yet.
- **Open gap:** the complete authored proof contract and focused checks remain
  to be written after the remaining level-3 item is complete.
- **Next:** `rem-weak-derivatives-are-distributional-derivatives-with-function-values`
  (recomputed level 3); return to this lemma at level 4.

### 9. `rem-weak-derivatives-are-distributional-derivatives-with-function-values`

- **Scaffold audit and authored claim:** The iff is the signed test-pairing
  dictionary between a weak derivative and membership of $\partial^\alpha T_u$
  in the regular-pairing image. Countable-Choice uniqueness identifies the
  representing a.e. class. The example $u=\mathbf1_{(0,1)}$ on $(-1,1)$ is in
  each real or complex $L^p$, $1\le p\le\infty$, and integration by parts on
  the zero extension gives $\partial T_u=\delta_0$. Shrinking unit-height
  smooth bumps show that $\delta_0$ has no $L^1_{\rm loc}$ representative.
- **Scaffold repair:** Added the direct sources needed for the local-integral,
  test-function, complex $L^p$, measurable-set integral, simple-integral,
  compact-measure, bump, interval-FTC, and rescaling claims. These are all
  published external suppliers; this repair added no in-run item and does not
  move this item's computed level (3). The item's direct dependencies are
  recorded in both frontmatter and the batch manifest.
- **Dependencies and passages examined:** Read the complete local supplier
  arguments for the regular pairing and its Countable-Choice injection,
  weak derivative definition and uniqueness, signed distribution derivative,
  $L^p$ size and quotient conventions, measure of boxes, simple and restricted
  integrals, finite measure of compact sets, integrability, absolute continuity
  of the integral, smooth bumps, test-function zero extension, interval FTC,
  chain rule, Dirac distribution, and Countable Choice. Brezis,
  *Functional Analysis, Sobolev Spaces and Partial Differential Equations*,
  Chapter 8 §8.2, printed p. 203, Examples and Remark 3, states the
  distributional-derivative criterion and poses the step-function claim as an
  exercise. Hunter, *Notes on Partial Differential Equations*, Chapter 3 §3.2,
  Example 3.4, printed pp. 48–49, computes the step derivative and proves the
  absence of an $L^1_{\rm loc}$ representative; its complete relevant argument
  was read. No later assigned item supports this proof. No potentially
  defective published supplier was found in the dependencies examined.
- **Assumption and decision:** The statement declares Countable Choice for the
  regular-pairing injection, weak-derivative uniqueness, cited measure
  interfaces, and interval FTC. The proof lists those exact supplier
  interfaces; test-pairing algebra and the shrinking-test contradiction use
  no full Axiom of Choice. Recorded `accept`, confidence 1, after completion
  and checks, with all 20 direct dependency IDs examined.
- **Proof contract:** Added nine derivations matching the canonical proof
  steps, all cited fact excerpts and uses, and item-specific evidence for
  empty, zero, one-dimensional, zero-order, endpoint, Countable-Choice, and
  both iff directions.
- **Checks:** Explicit-path precheck passes; explicit-path rendercheck has zero
  errors and warnings; strict proof-contract check has zero errors and
  warnings. The initial precheck output requested dependency-layer
  renumbering; the proof and contract were updated to that canonical ordering,
  then all three checks passed. Current run-wide item-dependency-levels check
  passes for 924 items across 60 pages, maximum level 18. The owned pair's
  owner `proceed` scope receipt remains current; the scope checker lists only
  two other pairs as needing current review.
- **Open gap:** none for this item.
- **Next:** `def-absolute-continuity-on-almost-every-coordinate-line` at
  recomputed level 4. The later closed-operator and bounded-restriction items
  are now level 5; both local suppliers moved to level 4 and their consumers
  were relabeled. Continue in the recomputed `(level, page order, item ID)`
  order.

### 10. `def-absolute-continuity-on-almost-every-coordinate-line`

- **Scaffold audit and authored claim:** The manifest promised the ACL
  representative property for a.e. classes, a common representative across
  all coordinate directions, direction-specific exceptional lines, and the
  completed-product Fubini convention. No item file existed, so I authored the
  assigned definition from the manifest claim. It quantifies the sections on
  a countable rational-box basis, treats complex-valued AC componentwise, and
  spells out $n=1$, $\Omega=\varnothing$, and the absence of boundary traces.
- **Dependency repair:** Added the published
  `def-absolutely-continuous-function` supplier for the one-dimensional AC
  condition and its componentwise complex extension. Kept the Wkp class,
  completed-product Fubini, Euclidean product-completion, and Countable Choice
  dependencies. Frontmatter and manifest lists match. This new supplier is
  outside the in-run inventory, so the recomputed in-run level remains 4 and
  no label changed. The same-batch cross-batch input remains empty; this item
  adds no dependency on another frontier batch.
- **Dependencies and passages examined:** Read the complete Wkp definition,
  the published compact-interval AC definition, the completed-product Fubini
  statement and proof, the Euclidean product-completion statement and proof,
  and the Countable Choice definition. Kinnunen, *Sobolev Spaces*, Chapter 2
  §2.6, Theorem 2.36 (Nikodym, ACL characterization), statement printed p. 55
  and proof pp. 56–59, was read through both directions. Its forward proof
  localizes, takes one summably convergent smooth approximation sequence,
  uses Fubini to get linewise convergence in each direction, and constructs a
  single representative; the converse uses the one-dimensional FTC and
  Fubini. Kinnunen states the theorem for real values; this definition's
  complex convention is componentwise. Hunter, *Notes on Partial Differential
  Equations*, Chapter 3 §3.A.2, Definition 3.56, printed pp. 78–79, supplies
  the compact-interval AC convention. No later in-run item was used.
- **Assumption and decision:** The Definition declares Countable Choice for
  completed-product Fubini and the countable union of box-wise exceptional
  sets. It does not assume full AC. Recorded `accept`, confidence 1, after
  strict contract, explicit-path rendering and precheck, and run-wide
  dependency-level validation passed; all five direct dependencies were
  examined.
- **Proof contract:** The definition has no proof steps; its contract records
  empty, zero, one-dimensional, degenerate-box, endpoint, and Countable-Choice
  evidence, with both iff cases marked inapplicable because the item makes no
  biconditional claim.
- **Checks:** Explicit-path precheck: 0 failures (no proof-bearing phase body);
  explicit-path rendercheck: 0 errors and 0 warnings; strict proof contract:
  0 errors and 0 warnings; run-wide item-dependency-levels: 924 items across
  60 pages, maximum level 18.
- **Open gap:** none for the definition. The downstream ACL characterization
  remains a later item and has not been used to justify this definition.
- **Next:** continue level 4 in page order and item ID with
  `lem-sobolev-integration-by-parts-for-dual-exponents`.

### 11. `lem-sobolev-integration-by-parts-for-dual-exponents`

- **Scaffold audit and authored claim:** The claim is the bilinear identity
  `∫u D_i v = −∫v D_i u` on an arbitrary open subset of `R^n`, for conjugate
  exponents including `1` and `∞`, whenever at least one Sobolev class has
  compact essential support. The integrals are absolutely convergent. The
  proof treats a.e. support rather than choosing pointwise representatives,
  proves zero extension and compactly supported mollification locally, passes
  to the limit at finite exponents, and handles the remaining `W^{1,∞}` / 
  `W^{1,1}` endpoint by cutting off and approximating only the `W^{1,1}` factor.
- **Dependencies examined:** the `W^{1,r}` and bilinear test-pairing
  conventions; weak derivative identity; endpoint Hölder; restriction and
  uniqueness; compact cutoffs; the positive smooth cutoff kernel and
  mollifier rescaling; compact and box measure; finite-`L^r` approximate
  identity convergence; convolution smoothness/support; the smooth product
  rule; Countable Choice; and the Axiom of Choice. All fourteen declared
  direct dependencies were read at their exact local statements and relevant
  proof passages. No later assigned item is used.
- **Source passages reread:** Kinnunen, *Sobolev Spaces*, Chapter 1 §1.7,
  Theorem 1.19, printed pp. 17–18: the complete finite-`p` argument derives
  the convolution derivative identity by Fubini and weak integration by
  parts, then applies local `L^p` convergence to each derivative. Hunter,
  *Notes on Partial Differential Equations*, Chapter 3 §3.4, Theorem 3.19,
  printed pp. 55–56: the complete argument tests the weak identity against a
  translated mollifier to commute derivatives with convolution, then uses
  local `L^1` convergence. These source statements cover finite exponents;
  they do not supply the `p=∞` endpoint argument, which is proved locally.
- **Assumptions:** The item assumes Countable Choice for its cited
  equivalence-class, uniqueness, finite-measure and approximate-identity
  interfaces. It declares the stronger full Axiom of Choice as a sufficient
  alternative and step 6.1 explicitly derives Countable Choice from it by
  restricting a global choice function to the range of a countable family
  and composing with the family-index map. No step requires choice beyond
  the declared supplier interfaces.
- **Boundary audit:** The proof handles `Ω=∅`, zero factors, empty essential
  support, `K=∅`, `n=1`, all exponent pairs, and the two endpoint orientations.
  The contract records both the forward and reversed identities. Its
  one-dimensional and degenerate cases are included in the same coordinate
  and support arguments; the contract states those item-specific reasons.
- **Checks:** Focused explicit-path precheck passes (1 item, 0 failures);
  explicit-path rendercheck passes (1 file, no errors or warnings); strict
  proof-contract check passes (1/1, 0 errors or warnings). Recomputed order
  on the owned A/B pair has no dependency errors and places this item at
  level 4; the next item is
  `lem-sobolev-norm-is-well-defined-and-definite`. An initial run-wide check
  was interrupted by a transient parse error in batch 29 at line 528; on later
  recheck the sibling manifest parses and run-wide item-dependency-levels
  passes for 925 items across 60 pages, maximum level 18. The owned pair's live
  scope hash
  `56a9c225017c0c1348d28fa0fe70bcc7ffba4a485bc624744e0d70c51edc5cdc` differs
  from its owner `proceed` receipt `9e43580aeac11cf63852859cb57141f55d8646ba078e4e721829edaa11a7589a`.
  The owned manifest parses. No sibling file or owner receipt was edited.
- **Decision:** The mathematical audit and content checks are complete, but
  no item decision is recorded: the decision tool requires a current closed
  pair scope. The stale owner scope requires owner review; I will not record
  `accept`, `repaired`, or `escalate` against a stale receipt.
- **Open obligations:** Resolve the owner-held scope hash against the current
  28-item A / 11-item B inventory. The transient batch-29 parse issue cleared
  without an edit from this dispatch. No mathematical gap was found in this
  item.
- **Next:** continue in the locally recomputed queue with
  `lem-sobolev-norm-is-well-defined-and-definite` (level 4).

### 12. `lem-sobolev-norm-is-well-defined-and-definite`

- **Scaffold audit and repair:** The claim requires the formula from the Wkp
  definition to descend to a real or complex a.e. quotient and satisfy every
  norm axiom, including the zero-order separation argument. Its strategy
  invoked derivative linearity and (L^p) norm axioms without declaring both
  suppliers, and its finite-vector Minkowski route did not specify the
  finite counting measure. Added direct dependencies on the already-authored
  weak-derivative linearity lemma and the published real (L^p) quotient-norm
  theorem; revised the strategy to apply Minkowski first componentwise and
  then on (mathcal A_k) with counting measure. Frontmatter and manifest
  dependencies match. The local A/B recomputation still has 39 items, no
  dependency errors, and this item remains at level 4; no dependent label
  changes.
- **Authored claim and proof:** Proved representative independence, closure
  under real or complex scalar operations, absolute homogeneity, finite-(p)
  subadditivity by the two Minkowski applications, the separate
  (p=infty) maximum estimate, and both directions of norm-zero iff the
  underlying (L^p) class is zero. The proof explicitly covers (k=0),
  (p=1), (p=infty), (n=1), and the empty domain.
- **Dependencies examined:** the completed Wkp definition, derivative
  linearity, representative independence, a.e. uniqueness, the real (L^p)
  quotient-norm theorem, the complex (L^p) quotient-norm theorem, real
  integral Minkowski, and Countable Choice. Re-read the full relevant local
  statements and proofs; no defect was found in these suppliers.
- **Source passages reread:** Kinnunen, *Sobolev Spaces*, Chapter 1 §1.2,
  Definition 1.8 and Remarks 1.9(1)–(3), printed pp. 4–6; it gives the finite
  (p) formula, an (L^infty) sum and its equivalent maximum, and identifies
  functions equal almost everywhere. Hunter, *Notes on Partial Differential
  Equations*, Chapter 3 §3.5, Definition 3.23, printed pp. 58–59; it gives
  the finite-(p) formula, (p=infty) maximum, and a.e. identification.
  Neither source proves the quotient and norm-axiom checks required here; the
  item proves them from the declared local suppliers.
- **Assumptions and contract:** Countable Choice is declared and used exactly
  for representative independence and weak-derivative uniqueness. No full AC
  is used. The strict contract has seven derivations and exact excerpts for
  all eight cited facts, with evidence for empty, zero, one-dimensional,
  (k=0), both endpoints, Countable Choice, and both directions of the zero
  equivalence.
- **Checks:** Focused explicit-path precheck passes (1 item, 0 failures);
  explicit-path rendercheck passes (1 file, 0 errors or warnings); strict
  proof-contract check passes (1/1, 0 errors or warnings). The first precheck
  requested canonical layer renumbering because the last proof step cited the
  homogeneity and triangle steps; those labels and contract references were
  updated mechanically, then all focused checks passed. Owned A/B dependency
  recomputation passes for 39 items with no errors; the item remains level 4.
  Run-wide item-dependency-levels passes for 925 items across 60 pages,
  maximum level 18. Pair scope still fails only because the owner `proceed`
  receipt is stale; see the current scope status above.
- **Decision:** Mathematical audit and content checks are complete. No item
  decision is recorded because the current pair scope remains owner-held.
- **Open obligation:** Owner review of the current 28-item A / 11-item B scope
  and a current proceed receipt. No mathematical gap was found in this item.
- **Next:** continue at level 4 in page order and item ID with
  `lem-weak-leibniz-rule-with-a-smooth-factor`.

### 13. `lem-weak-leibniz-rule-with-a-smooth-factor`

- **Scaffold audit:** The level-4 claim requires locally integrable weak
  derivatives for every multi-index below the target, so the product formula
  is function-valued rather than merely distributional. The strategy's
  regular-distribution transfer is sound: the finite right side is locally
  integrable, distributional Leibniz gives its regular distribution, and
  Countable-Choice uniqueness identifies its a.e. class. The global clause
  follows from bounded multiplication on each derivative class, including
  both $p=1$ and $p=\infty$. Frontmatter and manifest dependencies match.
- **Authored claim and proof:** Proved the local multi-index formula for real
  and complex scalars, representative independence of the finite product
  sum, and the global $W^{k,p}$ conclusion when the multiplier and all
  derivatives through $k$ are bounded. Compactly supported smooth
  multipliers are shown to meet that boundedness hypothesis. The proof
  covers $\alpha=0$, $k=0$, $n=1$, zero input and multiplier, empty domain,
  and both $L^p$ endpoints.
- **Dependencies examined:** Read the complete local definitions of regular
  distributions and weak derivatives, the full distributional Leibniz proof,
  the smooth distribution-multiplication definition, weak-derivative
  uniqueness, the $W^{k,p}$ definition, real and complex $L^p$ class
  conventions, and Countable Choice. The stated hypotheses match the exact
  local interfaces; no potentially defective published item was found.
- **Source passages reread:** Kinnunen, *Sobolev Spaces*, Chapter 1 §1.3,
  Lemma 1.14(5), printed pp. 9–11: the complete induction proof of the
  compactly supported smooth-factor formula for $W^{k,p}$. Its statement and
  proof use real scalars and compactly supported multipliers. Hunter, *Notes
  on Partial Differential Equations*, Chapter 3 §3.4, Proposition 3.16,
  printed p. 54: the complete first-order test-function proof for a smooth
  factor and a locally integrable weak first derivative. The present local
  multi-index and complex-valued conclusion follows from the library's
  distributional Leibniz theorem and regular-distribution interface rather
  than from an unverified source generalization.
- **Assumptions and contract:** Countable Choice is stated and used only
  through uniqueness of locally integrable weak-derivative value classes,
  including order zero. The distributional formula and algebraic expansion
  are choice-free; no full Axiom of Choice is used. The strict contract
  records all nine exact local citations, the actual inputs for each of five
  proof steps, and item-specific evidence for empty, zero, one-dimensional,
  degenerate, endpoint and choice cases. Both iff fields are inapplicable
  because the item makes no biconditional claim.
- **Checks:** Explicit-path precheck passes (1 item, 0 failures);
  explicit-path rendering passes (1 file, no errors or warnings); strict
  proof-contract check passes (1/1, 0 errors or warnings). Frontmatter and
  manifest dependency lists match. Recomputed owned-pair order still has 39
  items with no errors; this item is at level 4 and the next item is
  `lem-weak-stability-of-sobolev-derivatives`. Run-wide
  item-dependency-levels passes for 925 items across 60 pages, maximum level
  18.
- **Decision:** Mathematical audit and focused checks are complete, but no
  item decision is recorded because the current pair scope is still held by
  its stale owner receipt. The current scope hash and exact owner obligation
  are recorded above; I did not record an item decision against that receipt.
- **Open obligations:** Owner review and a current proceed receipt for the
  existing 28-item A / 11-item B pair scope. No mathematical gap or
  dependency change remains for this item.
- **Next:** audit and author
  `lem-weak-stability-of-sobolev-derivatives` at recomputed level 4.

### 14. `lem-weak-stability-of-sobolev-derivatives`

- **Scaffold audit and repair:** The claim is the standard closedness of the
  weak-derivative relation under local strong convergence: pass each signed
  test identity to the limit. The strategy is sound, but its dependencies
  used real/complex Lp quotient conventions and representative-independent
  weak test pairings only transitively through the Wkp definition. Added
  direct dependencies on the real and complex Lp class conventions and on
  the completed representative-independence lemma. Frontmatter and manifest
  now match. The item remains level 4 and the recomputed order is unchanged.
- **Authored claim and proof:** Defined local Lp membership/convergence on
  compact restrictions, showed compact test functions and their derivatives
  belong to the needed dual spaces, and used real or complex Hölder estimates
  to pass both sides of the weak identity to the limit, including p,q equal
  to 1 or infinity. The conclusion states existence and a.e. uniqueness of
  the limiting weak derivative and makes the local Sobolev-sequence
  consequence precise. No pointwise convergence is assumed.
- **Dependencies examined:** Read the weak-derivative identity and
  representative-independence lemma, uniqueness lemma, full real endpoint
  Hölder proof, full complex Hölder theorem, Countable-Choice compact-measure
  result, Sobolev local-space definition, real and complex Lp quotient
  conventions, and Countable Choice. Their hypotheses match the uses. No
  potentially defective published supplier was found.
- **Source passages reread:** Kinnunen, *Sobolev Spaces*, Chapter 1 §1.4,
  Theorem 1.15, printed pp. 11–13: the complete Sobolev-completeness proof
  passes the weak test identity under Lp convergence; its p=1 and p=infinity
  details are left as an exercise, so this item supplies those endpoint
  estimates directly. Hunter, *Notes on Partial Differential Equations*,
  Chapter 3 §3.4, Theorem 3.20, printed p. 56: the complete converse proof
  passes the weak test identity from L1-local convergence of smooth functions
  and their derivatives. The present argument generalizes that direct
  calculation to two independent exponents and arbitrary existing weak
  derivative sequences by explicit dual-Hölder estimates.
- **Assumptions and contract:** Countable Choice is used for compact support
  finite measure, representative/local-integrability interfaces, and
  uniqueness of the value class. It is not used to extract subsequences or
  obtain pointwise convergence; no full Axiom of Choice is used. The strict
  contract records all ten exact local citations, each of four step inputs,
  and evidence for empty, zero, one-dimensional, order-zero, endpoint and
  choice cases. Both iff fields are inapplicable because the item states no
  biconditional.
- **Checks:** Explicit-path precheck passes (1 item, 0 failures);
  explicit-path rendering passes (1 file, no errors or warnings); strict
  proof-contract check passes (1/1, 0 errors or warnings). Frontmatter and
  manifest dependency lists match. Recomputed owned-pair order has 39 items
  with no errors; this item is at level 4, and the next item is
  `thm-zero-weak-gradient-implies-componentwise-constancy`. Run-wide
  item-dependency-levels passes for 925 items across 60 pages, maximum level
  18.
- **Decision:** The mathematical audit and focused checks are complete, but
  no item decision is recorded because the pair scope remains held by its
  stale owner receipt. No decision was made against the stale receipt.
- **Open obligations:** Owner review and a current proceed receipt for the
  existing 28-item A / 11-item B scope. No mathematical gap or further
  dependency repair remains for this item.
- **Next:** audit and author
  `thm-zero-weak-gradient-implies-componentwise-constancy` at recomputed
  level 4.

### 15. `thm-zero-weak-gradient-implies-componentwise-constancy`

- **Scaffold audit and repair:** The claim is zero weak gradient implies one
  almost-everywhere constant on each connected component, for open
  `Ω ⊂ ℝⁿ`, `n ≥ 1`, `1 ≤ p ≤ ∞`, and real or complex `u ∈ W¹,ᵖ_loc`.
  The local mollification strategy was sound, but the scaffold omitted an
  argument that its inner balls are connected. Added direct prerequisites for
  metric balls, the induced Euclidean metric and norm inequality,
  continuity of affine paths, and path-connected implies connected. No
  supplier added inside this pair; the recomputed level remains 4.
- **Authored claim and proof:** On nested balls with doubled closure in `Ω`,
  restricted each real component to `L¹`, zero-extended and mollified it.
  The weak identity makes the mollified gradient zero; connectedness makes
  each mollification constant. `L¹` convergence gives a local a.e. constant.
  Positive-measure overlaps make these constants compatible, so the induced
  value is locally constant and therefore constant on each connected
  component. An explicit countable rational-ball cover and countable
  subadditivity combine the exceptional sets. The ball convexity step now
  records the norm-homogeneity and triangle-inequality estimate explicitly.
  Empty domain, `p=1`, `p=∞`, `n=1`, zero data, and complex components are
  covered.
- **Dependencies and source evidence:** Read all listed local suppliers,
  including the Sobolev and weak-derivative definitions, representative
  invariance and locality, endpoint Hölder, cutoff and ball measure results,
  mollifier approximation and convolution differentiation, connectedness,
  and the rational-ball cover facts. Kinnunen, *Sobolev Spaces*, Ch. 2 §2.6,
  Remark 2.38(4), printed p. 59, states the connected-domain result as an ACL
  exercise without proof. The UWM MATH 712 solutions, Exercises 1–2 (PDF
  pp. 3–4) and Exercise 7 (PDF p. 8), supply the mollification identity and
  a one-dimensional argument; their higher-dimensional countable-union
  sentence does not establish agreement of local constants. This proof fills
  that gap by overlap compatibility and an explicit countable cover. No
  potentially defective published library supplier was found.
- **Assumption and contract:** AC is stated and declared; its uses are only
  through Countable Choice at the representative, integration, approximate
  identity, convolution, and uniqueness interfaces. The overlap and
  propagation argument makes no full-AC selection. The strict contract has
  exact source excerpts and inputs for all seven proof steps, and item-specific
  evidence for empty, zero, one-dimensional, degenerate, endpoint, and choice
  cases; both iff fields are inapplicable because this is a one-way claim.
- **Checks:** Explicit-path precheck passes (1 item, no failures); explicit
  rendering passes (1 file, no errors or warnings); strict proof-contract
  check passes (1/1, no errors or warnings). Run-wide item-dependency-levels
  passes for 925 items across 60 pages, maximum level 18. The manifest and
  frontmatter now have the same 32 dependencies. Batch content-policy remains
  pending because 25 later assigned draft files are not authored yet; its first
  run identified only those missing in-scope files. `validate-plan` passes
  overall; no pre-splice mismatch was reported for this item.
- **Decision:** The mathematical audit and focused checks are complete. No
  item decision is recorded while the pair scope is held by the stale owner
  receipt; no ruling is inferred from it.
- **Open obligations:** Owner review and a current proceed receipt for the
  existing 28-item A / 11-item B scope. No mathematical gap remains for this
  item. Batch-wide content-policy and explicit-path checks remain for final
  validation.
- **Next:** audit and author
  `cex-cantor-function-is-not-w-one-one-despite-being-absolutely-continuous-off-a-null-set`
  at recomputed level 4.

### 16. `cex-cantor-function-is-not-w-one-one-despite-being-absolutely-continuous-off-a-null-set`

- **Scaffold audit and repair:** The calculation and contradiction strategy is
  sound. Step 1.2 used that the Cantor set is closed and contains its two
  endpoints, but those exact facts were not explicit inputs to the item.
  Added direct dependencies on `thm-cantor-set-properties` for closedness and
  `thm-induction-principle` for endpoint membership from the defining
  recursion. Added facts F22–F23 and exact contract excerpts. The owned-pair
  level remains 4; no in-run dependency label changes.
- **Authored claim and proof:** Checked the full proof: the complement of the
  Cantor set is a countable union of gaps where the staircase is constant;
  Riemann–Stieltjes integration by parts identifies its distributional
  derivative with the Cantor measure; if an $L^1$ weak derivative existed,
  locality and uniqueness force it to vanish on every gap and hence a.e. on
  $(0,1)$; a compactly supported cutoff with positive Cantor-measure integral
  then contradicts the weak identity. The support and endpoint cases in the
  proof are valid.
- **Dependencies examined:** Read the exact claims and relevant arguments for
  Cantor-set closedness and nullity, Cantor-function endpoint/gap properties,
  the Cantor measure's singularity and mass, Lebesgue–Stieltjes interval
  formulas, countable open-interval decomposition, weak-derivative locality
  and uniqueness, cutoff existence, and Riemann–Stieltjes/Lebesgue–Stieltjes
  agreement. No potentially defective published supplier was identified.
- **Source passages reread:** Kinnunen, *Sobolev Spaces*, Chapter 2 §2.6,
  Example 2.35(2), printed pp. 55–56, gives the endpoint/zero-a.e.-derivative
  obstruction to absolute continuity. Hunter, *Notes on Partial Differential
  Equations*, Appendix §3.F, Example 3.88 (printed p. 83) and Theorem 3.94
  (printed p. 86), states concentration of the Cantor measure on the null
  Cantor set and the integration-by-parts identity for a BV distributional
  derivative. The item derives the exact test-function identity locally
  rather than relying on the source citation as proof.
- **Assumptions and contract:** The item states AC; its exact use is to derive
  Countable Choice for the named null-set, measure, locality, and
  Riemann–Stieltjes interfaces. It makes no arbitrary sequence of choices.
  The strict contract now records exact citations for F22–F23 and the finite
  telescoping law, and the empty, zero, one-dimensional, degenerate, endpoint,
  choice, and both iff-case dispositions are item-specific.
- **Checks:** Explicit-path precheck passes (1 item, 0 failures); explicit
  rendering passes (1 file, no errors or warnings); strict item contract
  passes (1/1, 0 errors or warnings); run-wide item-dependency-levels passes
  for 925 items across 60 pages, maximum level 18. `validate-plan` exited 0
  on the current plan, with 379 planned pages still carrying empty item lists
  as expected before Step 4. A manifest-only content-policy run is not an
  authoring check and rejected existing assigned item files; the required
  full batch content-policy run remains for the batch-close checks.
- **Decision:** No item decision is recorded because the pair still has the
  owner-held, stale Step 3a scope receipt. The owner must record proceed for
  the current 28-item A / 11-item B scope before any further item decision;
  no stale receipt was treated as approval.
- **Open obligations:** Owner scope closure; finish the remaining 24 items,
  complete both page files and run the required batch checks. No mathematical
  gap remains for this item.
- **Next:** audit and author
  `cex-lp-functions-need-not-have-point-values` at level 4.

### 17. `cex-lp-functions-need-not-have-point-values`

- **Scaffold audit and repair:** The witness strategy is correct: change one
  representative at a singleton and use that the Sobolev class is defined
  modulo almost-everywhere equality. The scaffold did not directly declare
  the $L^p$ quotient, indicator-measurability, or null-integral interfaces
  used by the explicit construction and size calculations. Added direct
  dependencies on `def-l-p-space-as-a-quotient-by-null-functions`,
  `prop-indicator-function-is-measurable-iff-its-set-is-measurable`, and
  `cor-integral-over-a-null-set-vanishes` in the item and this pair's batch
  manifest row. The existing coverage registration was already present.
  Recomputed the owned queue: the item remains at level 4, so no dispatched
  order or in-pair label changes.
- **Authored claim and proof:** For nonempty open $\Omega\subseteq\mathbb R^n$,
  fix $x_0\in\Omega$ and compare $u_0=0$ with $u_1=\mathbf1_{\{x_0\}}$.
  The singleton is measurable and null; for finite $p$ the integral of
  $|u_1|^p$ is explicitly zero, and for $p=\infty$ every positive superlevel
  set is empty or the singleton, so its essential norm is zero. The two
  locally integrable representatives agree almost everywhere. The zero
  function has zero weak derivatives at every multi-index, and the published
  representative-independence lemma transfers those identities to the spike.
  Its zero-order class and every higher derivative class are the zero $L^p$
  class, so both representatives belong to every $W^{k,p}$ and have equal
  Sobolev norm, including $k=0$, $p=1$, and $p=\infty$. Their point values at
  $x_0$ are $0$ and $1$, which witnesses failure of class-level evaluation.
- **Dependencies and source passages examined:** Read the full local
  statements and arguments for the Sobolev definition, representative
  independence, $L^p$ quotient, Countable Choice, countable-subset nullity,
  indicator measurability, and integration over null sets. No defect was
  identified in these suppliers. Kinnunen, *Sobolev Spaces*, Chapter 1 §1.2,
  Definition 1.8 and Remark 1.9(1), printed pp. 4–5, defines the weak-derivative
  classes and explicitly identifies almost-everywhere-equal Sobolev functions.
  Hunter, *Notes on Partial Differential Equations*, Chapter 3 §3.5,
  Definition 3.23, printed pp. 58–59, states the same identification. The
  complete relevant definition passages were read; the proof is the explicit
  point-spike calculation above, not the source convention alone.
- **Assumption and contract:** Countable Choice is inherited through the
  cited singleton-null, Wkp-class, and representative-independence interfaces.
  Fixing one $x_0$ uses only the given nonemptiness of $\Omega$; the argument
  uses no full Axiom of Choice. The contract records exact excerpts and uses
  for all eight fact-source citations across seven direct dependencies, each
  proof step, and item-specific empty, zero,
  one-dimensional, degenerate/$k=0$, endpoint, nonempty-choice, and iff-case
  dispositions.
- **Checks:** Explicit-path precheck passes (1 item, 0 failures); explicit
  rendering passes (1 file, no errors or warnings); strict focused proof
  contract passes (1/1, 0 errors or warnings). Run-wide
  `item-dependency-levels` was run after the repair but currently fails on the
  out-of-pair stale label `lem-line-bundles-on-projective-three-space-restrict-by-degree`
  (declared level 1, computed 0); no sibling file was changed. The owned
  pair-only recomputation covers all 39 assigned IDs with no dependency
  errors; this item remains level 4 and the remaining level-4 order agrees
  with the generated dispatch. The owned
  scope check parses and reports this pair still held by its stale owner
  `proceed` receipt, so no item decision was recorded. Full batch
  content-policy, page-file checks, and `validate-plan` remain for batch close.
- **Decision:** Mathematical audit and focused content checks are complete.
  No `record-item` decision can be made until the owner closes the pair scope;
  no ruling was inferred from the stale proceed receipt.
- **Open obligations:** Owner review and a current proceed receipt for the
  existing 28-item A / 11-item B inventory; author the remaining 23 assigned
  items and both page files; then run the batch-wide required checks. The
  run-wide level check also requires the owner of the cited sibling item to
  refresh its label. No mathematical gap remains for this item.
- **Next:** `cex-step-function-has-no-locally-integrable-weak-derivative`
  at level 4, next in the generated B-page order.

---

### 18. `cex-step-function-has-no-locally-integrable-weak-derivative`

- **Scaffold audit and repair:** The shrinking-test contradiction is sound, but
  the scaffold omitted direct inputs for the indicator's $L^p$ calculation,
  regular/distributional derivative conventions, test bump, endpoint-integral
  nullity, and the one-dimensional FTC. Added the needed measure, integral,
  test-function and distribution interfaces, including
  `cor-integral-over-a-null-set-vanishes`. Updated only this B-row's statement,
  dependency list and source locator in the batch manifest; coverage already
  registered the item. The item and manifest have the same 22 dependencies.
- **Authored claim and proof:** For $E=(0,1)$ in $I=(-1,1)$, the box formula
  gives $|E|=1$, so $\int_I|H|^p=1$ for finite $p$, while $|H|\le1$ proves the
  $p=\infty$ case. Compact finiteness gives $H\in L^1_{loc}$. For every test,
  $-\int_IH\varphi'=-\int_{[0,1]}\widetilde\varphi'=\varphi(0)$, where
  $\widetilde\varphi$ is the smooth zero extension; hence $\partial T_H=\delta_0$.
  If a locally integrable $v$ represented it, a fixed bump
  $\varphi_\epsilon(x)=\eta(x/\epsilon)$ would satisfy
  $\int_Iv\varphi_\epsilon=1$, but absolute continuity of the $L^1$ integral
  on $[-\epsilon,\epsilon]$ forces its modulus to zero. This contradiction
  rules out every $L^1_{loc}$ weak derivative and therefore every $W^{1,p}$,
  including $p=1$ and $p=\infty$.
- **Dependencies and source passages examined:** Read the complete local
  definitions and relevant arguments for weak derivatives, $W^{1,p}$, regular
  and distributional derivatives, Dirac evaluation, interval measures,
  finite measure of compact sets, simple integrals, null-set integrals,
  absolute continuity of the integral, bump support, test functions and the
  complex interval FTC. Hunter, *Notes on Partial Differential Equations*,
  Chapter 3 §3.2, Example 3.4, printed pp. 48–49, computes the same test
  pairing and reduces any $L^1_{loc}$ derivative to $\int g\varphi=\varphi(0)$.
  His next sentence says tests vanishing at zero force $g=0$ a.e. without
  expanding that step; this item does not rely on it and instead proves the
  obstruction using shrinking supports. No potentially defective local
  published supplier was identified.
- **Assumption and contract:** Countable Choice is exactly $\mathrm{AC}_\omega$.
  This proof uses it through the cited interval/compact-measure results and the
  interval FTC. It does not invoke the regular-distribution injection, full
  AC, or a sequence of choices. The strict contract records each source
  excerpt and use, the four completed proof steps, and item-specific empty,
  zero, one-dimensional, degenerate, endpoint, choice and iff-case dispositions.
- **Checks:** Focused explicit-path precheck passes (1 item, no repairs); final
  explicit-path rendercheck passes (1 file, no errors or warnings); strict
  focused proof-contract check passes (1/1, no errors or warnings). Owned-pair
  dependency recomputation covers all 39 assigned IDs with no errors; this item
  remains at level 4. The required batch-wide content-policy, item-level,
  explicit-path and `validate-plan` checks remain for batch close. The batch's
  cross-batch dependency input remains empty: none of this pair's declared item
  or page prerequisites belongs to another batch in this run.
- **Decision:** No item decision is recorded. The latest scope check still says
  the owner must apply amendments and record proceed for this pair; no stale
  receipt is treated as current approval.
- **Open obligations:** Owner scope closure, 22 remaining assigned items and
  both A/B pages; batch-close checks; and the already reported run-wide stale
  dependency label on sibling item
  `lem-line-bundles-on-projective-three-space-restrict-by-degree`.
- **Next:** `cex-w-one-p-point-evaluation-is-unbounded-in-the-subcritical-and-higher-dimensional-critical-cases`
  at level 4, immediately after this item in the recomputed B-page order.

### 19. `cex-w-one-p-point-evaluation-is-unbounded-in-the-subcritical-and-higher-dimensional-critical-cases`

- **Scaffold audit and repair:** The two-regime construction is valid, but the
  original dependency row used suffix-coded aliases and omitted several inputs
  needed for the smooth logarithmic cutoff, its estimates, and the extension
  contradiction. Replaced only this B-row's dependency list with the exact 50
  full item IDs in the authored item's frontmatter. Updated its source locator
  to distinguish Kinnunen's motivating unbounded-function examples from the
  stronger test-function result proved here. Coverage already contained the
  item. The recomputed level remains 4 and the next item remains the following
  level-4 B-page entry.
- **Authored claim and proof:** For $n\ge2$, $1\le p\le n$, and an open
  $\Omega\ni0$, construct compactly supported smooth real-valued functions
  with diverging value at the origin and uniformly bounded $W^{1,p}$ norm.
  For $p<n$, choose an integer $q$ with $q(n-p)>p$ and set
  $u_m(x)=k\phi(k^q x)$, $k=m+k_0$; the function and derivative integral
  exponents are respectively $p-qn<0$ and $p-q(n-p)<0$. For $p=n$, set
  $h=m+h_0$, $L=h^2$, $r_h=R e^{-L}$ and use a smooth radial cutoff equal to
  one on $B_{r_h}$, zero outside $B_R$, and given by the standard smooth step
  in the intervening logarithmic coordinate. Polar integration gives each
  gradient integral at most a fixed multiple of $h^{2-n}$; the core and
  annulus function integrals are uniformly bounded. Classical derivatives
  supply the weak derivatives. In either regime, a bounded extension would
  force the diverging point values to be uniformly bounded, a contradiction.
- **Assumptions, dependencies, and source passages:** The exact choice
  assumption is $\mathrm{AC}_\omega$, used only through the declared Sobolev,
  classical-derivative, measure, measurability, polar-coordinate, and
  Riemann/Lebesgue integration interfaces. Integer cutoffs follow from the
  Archimedean property and explicit exponential estimates; no choice sequence
  is used. The exact direct dependencies, in item frontmatter and the batch
  manifest, are: `def-countable-choice`, `def-sobolev-space-wkp-and-its-norm`,
  `lem-classical-derivatives-are-weak-derivatives`,
  `thm-polar-coordinates-formula-for-lebesgue-measure`, `lem-metrics-on-rn`,
  `def-metric-topology`, `def-metric-ball`,
  `lem-smooth-bump-between-concentric-euclidean-balls`,
  `def-test-function-space-d-of-an-open-set`,
  `def-support-and-compactly-supported-riemann-integral-in-rn`,
  `thm-heine-borel-rn`, `thm-extreme-value-metric`,
  `def-ck-and-multi-index-notation-in-several-variables`,
  `def-the-standard-smooth-step-function`,
  `thm-the-standard-flat-function-is-smooth-and-flat-at-zero`,
  `def-the-standard-flat-function`, `thm-chain-rule`,
  `thm-algebra-of-derivatives`, `thm-logarithm-derivative-and-integral`,
  `thm-natural-logarithm-laws`, `def-natural-logarithm`,
  `def-real-exponential-function-and-e`, `thm-exponential-addition-formula`,
  `cor-exponential-reciprocal-and-positivity`,
  `thm-exponential-is-strictly-increasing`, `thm-derivative-of-exponential`,
  `cor-one-dimensional-change-of-variables-with-absolute-derivative`,
  `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`,
  `thm-ftc-second-part`, `thm-lebesgue-measure-of-a-box-of-every-kind`,
  `prop-measure-monotonicity`, `cor-continuous-functions-are-borel-measurable`,
  `thm-borel-sets-are-lebesgue-measurable`,
  `def-complex-lp-and-euclidean-test-function-conventions`,
  `def-integral-over-a-measurable-set`,
  `prop-order-and-scalar-rules-for-the-nonnegative-integral`,
  `def-integral-of-a-nonnegative-simple-function`,
  `prop-the-nonnegative-integral-agrees-with-the-simple-integral`,
  `def-integer-power`, `def-real-power`, `thm-real-power-laws`,
  `thm-real-power-continuity-and-derivatives`, `cor-mean-value-theorem`,
  `thm-of-archimedean`, `thm-exponential-beats-every-polynomial`,
  `def-factorial-and-falling-factorial`, `lem-derivative-of-a-power`,
  `def-bounded-linear-operator`,
  `thm-nonnegative-series-bounded-partial-sums`, `lem-of-naturals-positive`.
  Kinnunen, *Sobolev Spaces*, Chapter 1 §1.2, Examples 1.11–1.12, printed
  pp. 8–9, was reread in full. Those examples establish unbounded Sobolev
  functions in the subcritical and critical regimes but do not prove the
  smooth test-sequence or point-evaluation statement; both sequences and all
  estimates in this item are derived locally. No potentially defective
  published supplier was identified.
- **Contract and cases:** The strict item contract records the exact excerpt
  and use for each cited fact, all nine derivations, and item-specific
  dispositions for empty, zero, one-dimensional, degenerate, endpoint,
  choice, and both iff cases. The statement assumes $n\ge2$, has $1\le p\le n$,
  and is not an iff claim; $p=1$ and $p=n$ are covered by the two constructions.
- **Checks:** Focused strict proof-contract check passed (1/1, zero errors or
  warnings); explicit-path precheck passed (1 item, zero failures); explicit
  rendering passed (no warnings or errors). Re-ran the full-run
  `item-dependency-levels` check after the dependency repair: 925 items across
  60 pages passed, maximum level 18. The batch cross-dependency input is
  currently empty. `validate-plan` previously exited 0; its pre-splice plan
  inventory mismatches and warnings remain for Step 4 reconciliation. Batch
  content-policy and the required batch-close checks remain open.
- **Decision and open obligations:** No item decision is recorded: the current
  scope check still says the owner must apply amendments and record `proceed`
  for this pair. No owner ruling is inferred. No local supplier was added and
  no mathematical gap remains for this item. The whole-run dependency check is
  currently clean; the earlier stale sibling-level warning has been cleared.
  Owner scope closure, the remaining assigned items and both pages, final
  batch checks, and Step 4 plan reconciliation remain open.
- **Next:** audit and author `ex-absolute-value-has-a-weak-first-derivative`
  at level 4, next in the generated B-page order.


### 20. ex-absolute-value-has-a-weak-first-derivative

- **Scaffold audit and repair:** The promised claim is sound. The scaffold's
  four original dependencies did not provide all facts needed for
  measurability, finite-measure \(L^p\) bounds, pointwise power monotonicity,
  smooth test extension, or conversion from Riemann to Lebesgue integrals.
  Replaced only this B-row's direct dependency list with the exact 26 IDs in
  the authored file and updated this row's statement, strategy, and precise
  source locators. B-page coverage already includes the item and both source
  passages, so it required no change. The recomputed level remains 4.
- **Authored claim and proof:** For a bounded open interval \(I=(a,b)\) with
  \(a<0<b\), \(u(x)=|x|\) lies in \(W^{1,p}(I;\mathbb R)\) for every
  \(1\le p\le\infty\). Its weak derivative class is represented by \(v_c\),
  equal to \(-1\) on \(x<0\), \(+1\) on \(x>0\), and any finite real \(c\) at
  \(0\). For a real compactly supported smooth test, set
  \(G=|x|\varphi\) and \(g=v_0\varphi+|x|\varphi'\). The product rule gives
  \(G'=g\) off \(0\), and finite-exception Newton–Leibniz gives
  \(\int_a^b g=0\), since the test vanishes near the interval endpoints.
  Linearity yields the weak test identity. Under AC\(_\omega\), conversion of
  the bounded Riemann integrals to Lebesgue integrals and removal of the null
  endpoints gives that identity on \(I\). Pointwise bounds by \(M\) and \(1\)
  give finite-\(p\) integrals bounded by \(M^p(b-a)\) and \(b-a\), and give
  the \(p=\infty\) case. Changing \(v_0(0)\) to finite \(c\) changes only a
  null-set representative.
- **Assumption, dependencies, and sources:** The exact set-theoretic assumption
  is Countable Choice, \(\mathrm{AC}_\omega\), declared in the item and
  registered as a direct dependency. It enters through the Sobolev and
  representative-independence interfaces, interval measure, Borel-to-Lebesgue
  measurability, and Riemann-to-Lebesgue comparison; the piecewise test
  calculation itself is choice-free. The 26 direct dependencies, shared by
  the item and B-row, are:

  - def-countable-choice; def-weak-derivative-of-a-locally-integrable-function;
    def-sobolev-space-wkp-and-its-norm;
    lem-weak-derivative-is-independent-of-lp-representatives;
    def-test-function-space-d-of-an-open-set; def-interval; def-bounded-set;
    lem-of-abs-value; thm-lebesgue-measure-of-a-box-of-every-kind;
    cor-continuous-functions-are-borel-measurable;
    thm-borel-sets-are-lebesgue-measurable; cor-mean-value-theorem;
    def-real-power; cor-exponential-reciprocal-and-positivity;
    thm-real-power-continuity-and-derivatives;
    def-complex-lp-and-euclidean-test-function-conventions;
    def-integral-over-a-measurable-set;
    prop-order-and-scalar-rules-for-the-nonnegative-integral;
    def-integral-of-a-nonnegative-simple-function;
    prop-the-nonnegative-integral-agrees-with-the-simple-integral;
    cor-integral-over-a-null-set-vanishes; thm-algebra-of-derivatives;
    thm-finitely-many-discontinuities-integrable;
    cor-newton-leibniz-with-finitely-many-exceptional-points;
    thm-linearity-of-the-integral;
    thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral.

  Kinnunen, *Sobolev Spaces*, Chapter 1 §1.1 Example 1.7, printed pp. 2–3,
  fully works a related piecewise-affine test calculation; Chapter 2 §2.2
  Theorem 2.3, printed pp. 29–31, proves the general absolute-value rule for
  finite \(p\), but is not used as this item's proof. Brezis, *Functional
  Analysis, Sobolev Spaces and Partial Differential Equations*, Chapter 8
  §8.2 Examples (i), printed p. 202, states the exact \(|x|\) result for all
  \(1\le p\le\infty\) as an exercise without proof. The proof here supplies the
  missing calculation, including \(p=\infty\). No potentially defective
  published supplier was identified.
- **Contract and cases:** The strict contract records the exact excerpt and use
  for each direct cited fact, all seven proof steps, and item-specific
  dispositions for empty, zero, one-dimensional, degenerate, endpoint,
  choice, and both iff cases. The statement is not an iff claim; \(p=1\) and
  \(p=\infty\) are explicit.
- **Checks:** Explicit-path precheck passed (1 item, no repairs); explicit-path
  rendering passed (no warnings or errors); strict proof-contract checking
  passed for this item and the preceding point-evaluation item (2/2, no
  errors or warnings). The point-evaluation contract's final boundary entry
  was restored and rechecked after an earlier bad splice. The full-run
  dependency-level check passed for 925 items across 60 pages, maximum level
  18. Batch content-policy, final explicit-path and contract checks, and
  validate-plan remain for batch close. Existing pre-splice plan inventory
  mismatches and warnings remain for Step 4 reconciliation. The batch
  cross-batch dependency input remains empty; this item adds no cross-batch
  dependency or local supplier.
- **Decision and open obligations:** No item decision is recorded. The fresh
  scope check still reports
  weak-derivatives-and-sobolev-spaces: owner proceed; apply amendments and
  record proceed for current scope. The owner-held scope is not treated as
  resolved. No mathematical gap remains in this item. Scope closure, the
  remaining assigned queue and both pages, final batch checks, and Step 4 plan
  reconciliation remain open.
- **Next:** audit and author ex-piecewise-c-one-functions-with-matching-traces
  at level 4, next in the generated B-page order.

### 21. ex-piecewise-c-one-functions-with-matching-traces

- **Scaffold audit and repair:** The original B-row had only five direct
  dependencies for a slice proof and did not supply the measurability,
  integrability, interval-calculus, complex-pairing, and completed-product
  inputs used by the claim. Replaced only this row's dependency list with the
  exact 45 full IDs below and aligned the item frontmatter. Added the missing
  complex modulus-law dependency, corrected the source locators, and registered
  Kinnunen in the item source metadata so item and manifest sources agree.
  Coverage already included this item and its source passages. The recomputed
  full-run level remains 4. To justify line-endpoint evaluations, the Statement
  now defines a piecewise extension on the closed cube and then restricts it to
  Q; the matching-trace assumption is used for continuity only across the
  interior interface.
- **Authored claim and proof:** Under ACω, for n≥2, two real- or complex-valued
  functions C1 up to the boundary on the closed half-boxes, with matching
  interior traces, glue to f in W1p(Q) for every 1≤p≤∞. Each Djf is represented
  by the corresponding classical derivative on its open half-box; its chosen
  value zero on the null interface is immaterial. The proof first establishes
  Borel measurability and compact-box bounds, hence all Lp endpoint cases.
  For the normal coordinate, f times the test is continuous at the interface
  and finite-exception Newton–Leibniz cancels the two pieces. For tangential
  coordinates, almost every line lies in one half-box; the excluded parameter
  plane is null. Bounded Riemann section integrals convert to Lebesgue
  integrals, and completed-product Fubini gives the weak identities. Real and
  complex test pairings are handled componentwise, with the library's
  bilinear no-conjugation convention.
- **Assumption, dependencies, and sources:** The exact assumption is the
  Axiom of Countable Choice, ACω. It is declared as a direct dependency and in
  the Statement. This proof uses it through the cited Borel/Lebesgue
  measurability, box measure, Riemann-to-Lebesgue comparison, weak-derivative
  uniqueness, Euclidean product-completion, and Fubini interfaces. No stronger
  choice principle or hidden choice sequence is used. The 45 direct
  dependencies, identical in item frontmatter and the manifest row, are:
  def-countable-choice, def-sobolev-space-wkp-and-its-norm,
  def-weak-derivative-of-a-locally-integrable-function,
  lem-weak-derivatives-are-unique-almost-everywhere,
  def-ck-and-multi-index-notation-in-several-variables,
  def-test-function-space-d-of-an-open-set,
  thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures,
  thm-tonelli-and-fubini-for-completed-product-measures,
  prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets,
  thm-lebesgue-measure-of-a-box-of-every-kind,
  thm-borel-sigma-algebra-of-a-subspace-is-the-trace,
  thm-continuous-preimages-of-borel-sets-are-borel,
  def-borel-and-lebesgue-measurable-function-on-rn,
  def-borel-sigma-algebra, def-metric-topology,
  thm-borel-sets-are-lebesgue-measurable,
  cor-continuous-functions-are-borel-measurable,
  thm-heine-borel-rn, thm-extreme-value-metric,
  def-l-p-space-as-a-quotient-by-null-functions,
  def-calligraphic-l-p-on-a-measure-space,
  def-l-infinity-on-a-measure-space,
  def-complex-lp-and-euclidean-test-function-conventions,
  def-complex-conjugate-real-imaginary-part-and-modulus,
  lem-complex-conjugation-and-modulus-laws,
  thm-arithmetic-and-lattice-operations-preserve-measurability,
  cor-mean-value-theorem, def-real-power,
  cor-exponential-reciprocal-and-positivity,
  thm-real-power-continuity-and-derivatives,
  def-integrable-real-and-complex-functions-and-their-integrals,
  def-integral-over-a-measurable-set,
  def-integral-of-a-nonnegative-simple-function,
  prop-the-nonnegative-integral-agrees-with-the-simple-integral,
  prop-order-and-scalar-rules-for-the-nonnegative-integral,
  thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral,
  thm-algebra-of-derivatives,
  thm-finitely-many-discontinuities-integrable,
  cor-newton-leibniz-with-finitely-many-exceptional-points,
  cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps,
  def-euclidean-inner-product,
  def-linear-isometry-and-orthogonal-or-unitary-operator,
  def-measure-preserving-transformation-and-system,
  thm-integrals-are-invariant-under-measure-preserving-maps,
  thm-linearity-of-the-lebesgue-integral-on-l-one.
  The contract contains 47 exact fact-source citations (some suppliers support
  different facts) and five step derivations. Kinnunen, Sobolev Spaces,
  Chapter 1 §1.1 Example 1.7, printed pp. 3–4, gives a complete one-dimensional
  piecewise-affine test calculation; Hunter, Notes on PDE, Chapter 3 §3.2
  Example 3.3, printed p. 48, calculates the one-dimensional positive-part
  pairing; Brezis, Functional Analysis, Chapter 8 §8.2 Examples (i) and the
  following sentence, printed pp. 202–203, states the interval results as
  exercises without proof. None of these sources proves the n-dimensional
  claim; the coordinate-slice proof here supplies that extension. Complete
  arguments were checked for the library's finite-exception FTC, finite
  discontinuity integrability, bounded-Riemann-to-Lebesgue conversion,
  Euclidean product completion, completed-product Fubini, and complex L1
  linearity. No potentially defective published supplier was identified.
- **Contract and boundary cases:** Strict contract covers each of the 11 Facts
  paragraphs and every exact fact-source link, maps all five numbered steps,
  and records all eight required cases. The fixed nonempty Q makes the empty
  domain case inapplicable; the zero-data case is explicit; n=1 is excluded by
  the claim; the interface and exceptional parameter plane are degenerate null
  sets; p=1 and p=∞ and line endpoints are handled; ACω is explicit with no
  further choice; both iff cases are inapplicable because the claim is one-way.
- **Checks:** Focused explicit-path precheck passed (one item, no repair); its
  final dependency layers are 1.1, 2.1, 3.1, 4.1, and 5.1. Explicit-path
  rendering passed with no errors or warnings. Strict focused proof-contract
  check passed (1/1, zero errors or warnings). Manifest and item have exactly
  the same 45 direct dependencies and the same level-4 label; coverage already
  registers the item. The current full-run item-dependency check passed for
  926 items across 60 pages, maximum level 18. The current pair scope check
  still reports owner proceed / apply amendments / record proceed for the
  existing scope; no item decision is recorded while this owner-held review is
  open. The batch cross-batch dependency input remains [] and this item adds no
  current-run cross-batch edge or local supplier. Batch content-policy,
  full-batch precheck/render, strict batch contract, and validate-plan remain
  open; earlier pre-splice plan inventory mismatches and warnings are reserved
  for Step 4 reconciliation.
- **Decision and open obligations:** The content and focused checks support a
  repaired disposition at confidence 1, with the 45 dependencies examined.
  The owner-held scope prevents recording that item decision now. No
  mathematical gap remains for this item. Owner scope closure, the remaining
  17 assigned items and both A/B page files, and all batch-close checks remain.
- **Next:** ex-radial-power-membership-in-w-one-p at level 4, next in the
  generated B-page order.

### 22. `ex-radial-power-membership-in-w-one-p`

- **Scaffold audit and repair:** The assigned B-row existed in the generated
  manifest, but its item file was absent. The original six dependencies did
  not supply the Lp quotient conventions, weak test identity, Borel and
  Lebesgue measurability, exact one-dimensional power-integral criterion,
  cutoff estimates, or the local compatibility and uniqueness used by the
  proof. Authored the existing assigned ID, replaced only this B-row's
  statement, strategy, dependencies and source locator, and kept its coverage
  entry (which already included Kinnunen, Example 1.10). Removed the unused
  broad Hunter Chapter 3 reference. The item and manifest now have the same 44
  direct dependencies; the recomputed level remains 4, so the remaining
  dispatch order is unchanged. The B-page cross-batch dependency input remains
  empty; this item adds no cross-batch edge or separate local supplier.
- **Authored claim and proof:** Under exactly Countable Choice, for n≥1,
  a>0, B=B(0,1), and any finite value c assigned at the origin,
  u(x)=|x|^(−a) off 0 satisfies u∈Lp(B) iff ap<n for every finite p≥1, and
  u∈W1p(B;R) iff p(a+1)<n. In the latter range its weak partials are
  represented by v_i=−a x_i|x|^(−a−2) off 0, with arbitrary null-set value at
  0. For p=∞, u is essentially unbounded on every sufficiently small
  punctured ball and is not in L∞, hence not W1∞. The proof establishes
  Borel measurability, derives the power-integral threshold by dyadic annuli,
  monotone convergence and geometric-series divergence, and uses the polar
  formula for the exact Lp and gradient thresholds. For sufficiency, a fixed
  smooth cutoff gives errors O(ε^(n−a)) and O(ε^(n−a−1)) in the test identity;
  p(a+1)<n forces a<n−1, so all errors tend to zero. For necessity, locality,
  classical compatibility and weak-derivative uniqueness identify any Lp
  derivative with v_i off the origin, and the polar gradient integral
  diverges at or above p(a+1)=n. In dimension one the finite-p Sobolev range
  is empty.
- **Assumption and source passages:** ACω is declared directly. Its exact uses
  are the polar-coordinate theorem, Borel-to-Lebesgue measurability and ball
  measure, the W1p and weak-derivative interfaces, classical compatibility,
  and uniqueness. The cutoff argument fixes one bump supplied by the smooth
  bump lemma; it uses no choice sequence. Read the complete relevant passage
  in Juha Kinnunen, *Sobolev Spaces*, Chapter 1 §1.2, Example 1.10, printed
  pp. 6–7 (PDF pages 9–10, lines 520–708): it differentiates off 0, integrates
  by parts on a punctured ball, bounds the boundary term by
  C ε^(n−1−a), and derives the W1p threshold for n≥2 and 1≤p<n. That source
  does not establish n=1, the Lp threshold for p≥n, or p=∞; those cases are
  derived locally here. The cutoff proof is also local, rather than an appeal
  to the source's Gauss-theorem argument.
- **Dependencies examined:** `def-countable-choice`,
  `def-sobolev-space-wkp-and-its-norm`,
  `def-weak-derivative-of-a-locally-integrable-function`,
  `def-test-function-space-d-of-an-open-set`,
  `def-ck-and-multi-index-notation-in-several-variables`,
  `def-l-p-space-as-a-quotient-by-null-functions`,
  `def-calligraphic-l-p-on-a-measure-space`, `def-l-infinity-on-a-measure-space`,
  `def-complex-lp-and-euclidean-test-function-conventions`,
  `thm-polar-coordinates-formula-for-lebesgue-measure`,
  `def-polar-surface-measure-on-the-unit-sphere`, `def-real-power`,
  `thm-real-power-laws`, `thm-real-power-continuity-and-derivatives`,
  `cor-mean-value-theorem`, `def-natural-logarithm`,
  `thm-natural-logarithm-laws`, `cor-exponential-reciprocal-and-positivity`,
  `thm-geometric-series`, `thm-monotone-convergence-for-the-integral`,
  `thm-lebesgue-measure-of-a-box-of-every-kind`,
  `def-integral-over-a-measurable-set`,
  `def-integral-of-a-nonnegative-simple-function`,
  `prop-the-nonnegative-integral-agrees-with-the-simple-integral`,
  `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `lem-metrics-on-rn`,
  `def-metric-ball`, `def-metric-topology`, `def-borel-sigma-algebra`,
  `thm-continuous-preimages-of-borel-sets-are-borel`,
  `thm-borel-sigma-algebra-of-a-subspace-is-the-trace`,
  `cor-continuous-functions-are-borel-measurable`,
  `def-borel-and-lebesgue-measurable-function-on-rn`,
  `thm-borel-sets-are-lebesgue-measurable`,
  `lem-euclidean-balls-have-positive-finite-lebesgue-measure`,
  `lem-smooth-bump-between-concentric-euclidean-balls`, `thm-heine-borel-rn`,
  `thm-extreme-value-metric`, `thm-chain-rule`, `thm-algebra-of-derivatives`,
  `lem-classical-derivatives-are-weak-derivatives`,
  `lem-weak-derivative-linearity-locality-and-commutation`,
  `lem-weak-derivatives-are-unique-almost-everywhere`, and
  `thm-linearity-of-the-lebesgue-integral-on-l-one`. Read the relevant
  definitions and theorem arguments, including the polar formula's ACω and
  Borel hypotheses, the dyadic integral comparison inputs, and the bump and
  derivative bounds. No potentially defective published supplier was found.
- **Contract and cases:** The strict contract now ties each exact cited excerpt
  to its numbered uses, maps all six proof steps to their actual claims and
  inputs, and records all eight boundary cases. Empty domain is inapplicable
  because B(0,1) is nonempty for n≥1; a zero-function case is inapplicable
  because a>0 makes u positive off the null origin; n=1, threshold equality,
  p=1, p=∞, and both iff directions are addressed explicitly. The arbitrary
  value at 0 is a null-set modification. Choice is exactly ACω, with one fixed
  bump and no choice sequence.
- **Checks:** Focused explicit-path precheck passed after formatting-only
  reflow; explicit-path rendering passed with no warnings or errors; strict
  focused proof-contract check passed (1/1, zero errors and warnings). The
  manifest and item have exactly 44 matching direct dependencies and level 4;
  coverage already registers the item and source passage. Full-run
  `item-dependency-levels` passed for 926 items across 60 pages, maximum level
  18. Scope check remains open for 30 pairs/926 items and explicitly says this
  pair requires the owner to apply amendments and record proceed for current
  scope. No item decision is recorded while that owner-held scope is open.
- **Open obligations:** No mathematical gap remains for this item. Owner scope
  closure, the remaining 18 assigned items and both A/B page files, batch-wide
  content-policy, explicit-path precheck/render and strict-contract checks, and
  `validate-plan` remain. No potentially defective published item was
  identified among the dependencies examined. No local supplier item was
  added. Existing pre-splice plan mismatches and warnings remain for Step 4
  reconciliation.
- **Next:** `cor-weak-derivative-operator-is-closed-between-lp-spaces` at
  level 5 in the generated A-page order.

### 23. `cor-weak-derivative-operator-is-closed-between-lp-spaces` — catch-up gate repair

- **Dispatch-order note:** This item is earlier in the generated level-5 order than the H^k and ACL-reconstruction items whose checkpoints were written first. When I returned to the corollary, its item file already contained a substantial draft, but precheck required a canonical proof-phase repair and its contract had no boundary worksheet. I repaired and checked it now. The bounded-restriction draft was also already authored; it is checkpointed below only after this earlier item. Neither later item is a dependency or supplier here, and no later result was used in the proof.
- **Scaffold and proof repair:** The direct dependency list and statement already described the claimed full-gradient closed graph, maximal partial-derivative closed graph, and failure of closedness on the restricted W^{1,p} domain when n≥2. I made the common transverse-coordinate setup an explicit earlier step, separated the finite-p and p=∞ approximating sequences, and put the finite-p nonmembership argument after its sequence. This gives the proof the exact canonical stratification 1.1–4.1 and removes range references that failed phase repair. The dependency list and dependency level 5 are unchanged.
- **Authored mathematical claim:** Under AC, the full weak-gradient graph W^{1,p}(Ω;K)→(L^p)^n and each maximal partial-derivative graph V_i→L^p are closed. For n≥2, fixing i and a transverse k gives a finite-p witness σ(jx_k)→1_{(0,1)}(x_k), whose limit has no L^p weak k-derivative, and a p=∞ witness (x_k²+1/j)^{1/4}→|x_k|^{1/2}, whose classical derivative on x_k>0 is essentially unbounded. In one dimension V₁=W^{1,p}, so the restricted operator is the maximal closed graph.
- **Source and dependency qualifications:** Read the complete test-pairing argument in Hunter, *Notes on Partial Differential Equations*, Chapter 3 §3.4, Theorem 3.20, printed p. 56 (PDF pp. 60–61): compact support bounds the test factor and L¹_loc convergence passes both pairings to the limit. Also read Kinnunen, *Sobolev Spaces*, Chapter 1 §1.4, Theorem 1.15 proof, printed pp. 12–13 (PDF pp. 14–15), including its weak-identity limit argument; Kinnunen leaves p=1 and p=∞ estimates as exercises. This item does not rely on those exercises: its earlier in-pair supplier `lem-weak-stability-of-sobolev-derivatives` explicitly proves the local test-identity limit for independent p,q endpoints under ACω. I re-read that complete proof and checked the graph and sequential-closure definitions, weak derivative locality/uniqueness, and the cited Lp and test-function conventions. No unresolved qualification remains in the item’s proof.
- **Choice, contract, and cases:** The statement declares full AC and states its exact use through ACω; tags propagate that consequence to stability, weak-derivative uniqueness, measure, and sequential-closure interfaces. No choice is used for the explicit sequences or fixed bump witnesses. The strict contract now quotes every source fact at its use, maps all nine numbered steps to their actual claims/inputs, and records empty, zero, n=1, degenerate, endpoint, choice, and both inapplicable iff cases. The jump test uses a compact cutoff in [0,1], so its small-slab bound is controlled by the integrable h alone.
- **Checks and disposition:** Focused explicit-path precheck passed; explicit-path rendering passed with no warnings/errors; strict focused proof-contract check passed (1/1, zero warnings/errors). Full-run dependency-level check passed for 926 items across 60 pages, maximum level 18. The owner-held scope still says to apply amendments and record proceed; no item decision was recorded. No local supplier was added, no cross-batch input was added, and no potentially defective published supplier was identified among the dependencies examined.
- **Open obligations:** Owner scope closure and item decisions remain owner-gated; pair pages and batch-wide gates remain. The current cross-batch input is still `[]`.

### 24. `def-hk-and-hk-zero-notation`

- **Scaffold audit and repair:** The assigned A-row is a notation definition
  whose three dependencies are all already authored: the integer-order
  $W^{k,p}$ equivalence-class definition, its well-defined definite norm, and
  Countable Choice. No prerequisite was missing. Updated the source locator to
  Hunter, Chapter 3 §3.5, Definition 3.23, and made the manifest strategy state
  the reserved $H^k_0$ convention explicitly. The dependency level remains 5,
  so the generated order is unchanged; the existing coverage row remains
  correct.
- **Authored claim:** For every open $\Omega\subseteq\mathbb R^n$, integer
  $k\ge0$, and real or complex scalar field,
  $H^k(\Omega;\mathbb K):=W^{k,2}(\Omega;\mathbb K)$ with exactly the same
  a.e. classes, weak derivatives and norm. $H^k_0$ is reserved for the later
  closure definition; this item does not identify it with a trace-zero set or
  assign boundary values.
- **Source and dependencies examined:** Read the complete displayed
  Definition 3.23 passage in John K. Hunter, *Notes on Partial Differential
  Equations*, Chapter 3 §3.5, printed p. 59 (PDF p. 63): it explicitly writes
  $W^{k,2}(\Omega)=H^k(\Omega)$. The definition is reused from
  `def-sobolev-space-wkp-and-its-norm` and
  `lem-sobolev-norm-is-well-defined-and-definite`; Countable Choice is the
  stated interface assumption. No additional choice is introduced.
- **Contract and boundary cases:** The item is a definition, so its contract
  has no proof citations or numbered derivations. All eight boundary rows are
  present: empty and zero spaces are identified by the definition; $k=0$ and
  both fields are included; endpoint/traces and iff cases are item-specifically
  inapplicable; Countable Choice is inherited exactly from the interfaces.
- **Checks and decision:** Focused explicit-path precheck passed with zero
  failures; explicit-path rendering passed without warnings or errors; strict
  focused proof-contract check passed (1/1, zero errors and warnings). Item
  decision recording remains blocked by the current owner-held pair scope; no
  decision was invented or recorded. No local supplier was added and no
  published defect was found in the examined prerequisites.
- **Open obligations and next:** Owner must apply the current scope amendments
  and record proceed before item decisions can be entered. The cross-batch
  input remains `[]`; batch-level checks, both page files and the other 17
  assigned items remain. Next is
  `lem-acl-representatives-reconstruct-weak-gradients-by-fubini` at level 5.

### 25. `lem-acl-representatives-reconstruct-weak-gradients-by-fubini`

- **Scaffold audit and repair:** The existing A-row's argument had the right
  linewise integration-by-parts structure, but its prerequisites did not
  include the test partition used to reduce arbitrary compact supports,
  complex Hölder and finite box measure for integrability, or the Euclidean
  product-completion identity needed to invoke completed-product Fubini. Added
  those exact suppliers, the weak-derivative definition, and the published
  AC-to-CC/DC consequence. The statement now specifies one measurable ACL
  representative and measurable local-$L^p$ coordinate derivatives that
  agree with its line derivatives almost everywhere. The repaired row remains
  at level 5; no item order change results.
- **Authored argument:** For each test function, a subordinate locally finite
  partition reduces to finitely many tests supported in rational coordinate
  boxes. On each box, one-dimensional absolute-continuity integration by
  parts applies on almost every good line, on a compact interior interval so
  no endpoint trace is assumed. The products are integrable by local $L^p$,
  finite box measure and endpoint Hölder; for $n\ge2$, completed-product
  Fubini then gives the weak identity. In dimension one the same single-line
  calculation is direct. The test-function weak-derivative definition
  identifies the result. AC is declared and used only to supply the CC and DC
  assumptions of the cited Fubini and one-dimensional integration-by-parts
  interfaces.
- **Source passages and dependencies examined:** Re-read the complete
  converse passage of Kinnunen, *Sobolev Spaces*, Chapter 2 §2.6, Theorem
  2.36, printed p. 59 (PDF pp. 60–61), which applies one-dimensional
  integration by parts and then Fubini. Also checked the exact statements of
  the library's ACL representative definition, the one-dimensional AC
  integration-by-parts theorem, completed-product Fubini, Euclidean product
  completion, test-function partition lemma, complex Hölder, finite-measure
  bound, AC-to-CC/DC lemma, and weak-derivative definition. No unresolved
  source qualification remains for this proof.
- **Contract and boundary cases:** The strict contract maps the three
  numbered proof claims to their actual inputs and quotes each cited
  statement/definition exactly. Empty domain and zero classes are explicit;
  $n=1$ is handled without a transverse product; endpoints of the test
  interval vanish on an interior compact interval; both $p$ endpoints are
  covered by Hölder; AC is explicitly propagated; iff cases are inapplicable
  because the item is one-way.
- **Checks and decision:** Dependency labels recomputed and full-run check
  passed for 926 items across 60 pages (maximum level 18). Focused explicit
  path precheck passed; explicit-path rendering passed with no warnings or
  errors; strict focused proof-contract check passed (1/1, zero errors and
  warnings). Pair scope remains owner-held, so no item decision was recorded.
  No local supplier was added and no potentially defective published item was
  found among the examined prerequisites.
- **Open obligations and next:** Owner scope closure, remaining assigned
  authoring, page files, and batch-wide checks remain. The cross-batch input
  stays `[]`. Next is
  `lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces` at level
  5.

### 26. `lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces`

- **Scaffold audit and repair:** The existing row promised contractive open-set restriction and bounded multiplication by a compactly supported smooth cutoff. I repaired its direct dependencies to include both real/complex quotient norm interfaces, restriction and weak Leibniz suppliers, integral monotonicity/restriction, essential supremum, compact support and boundedness on compact sets, and AC-to-CC. The row remains at level 5; the recomputed full dependency check passed for 926 items across 60 pages, maximum level 18. No cross-batch edge or local supplier was added.
- **Authored estimates:** Restricting each weak derivative gives `||D^α(u|U)||_p≤||D^αu||_p`; taking the finite-p sum or p=∞ maximum proves the restriction contraction. For the multiplier, compact support and continuity make every `||D^βη||∞` finite. The weak Leibniz formula and the Lp triangle/product bounds give `||D^α(ηu)||_p≤C_α(η)||u||_{W^{k,p}}`; summing or maximizing yields the stated finite operator constant. The proof treats empty domains, zero cutoffs and classes, k=0, p=1, p=∞, and real/complex scalars.
- **Source and assumption accounting:** Read Kinnunen, *Sobolev Spaces*, Chapter 1 §1.3, Lemma 1.14(4)–(5), complete passage and induction argument, printed pp. 9–11 (PDF pp. 11–13). The cited text supplies restriction and the Leibniz formula; the displayed operator constants and both endpoints are derived in the item. AC is used only through ACω for the cited weak-derivative uniqueness, Sobolev norm, and Leibniz interfaces. The strict contract quotes every cited excerpt and maps the three numbered steps to their actual inputs.
- **Checks and disposition:** Focused explicit-path precheck passed; explicit-path rendering passed without warnings/errors; strict focused proof-contract check passed (1/1, zero warnings/errors). No item decision was recorded because the pair scope remains owner-held. No potentially defective published supplier was identified among the dependencies examined.
- **Order and open obligations:** The generated next item is `thm-acl-characterisation-of-w-one-p` at level 5. The closed-operator corollary above was an earlier dispatch item and was completed here as a catch-up before taking up another item; the bounded-restriction draft was not used as a premise for it. Fourteen assigned items remain unauthored, along with both A/B pages and the batch-wide content-policy, explicit-path precheck/render, strict contract, and validate-plan gates. Owner scope amendments and item decisions remain open; pre-splice plan mismatches and warnings are reserved for Step 4.

### 27. `thm-acl-characterisation-of-w-one-p`

- **Scaffold audit and repair:** The authored row promises the Nikodym ACL
  characterisation for $1\le p<\infty$ on open $\Omega\subseteq\mathbb R^n$,
  $n\ge1$, over both scalar fields. The scaffold's strategy named the
  mollifier/Lp-stability route; the actual completed argument additionally uses
  the local ACL reconstruction lemma and the Fatou/Riesz–Fischer/one-dimensional
  FTC interfaces. The manifest row's dependency list was therefore replaced by
  the item's real dependency set (20 IDs), and labels were recomputed for the
  pair: this item moves to level 6, and the downstream corollary and chain-rule
  items move to levels 7 and 8 as recorded in the manifest. No claim was added
  or dropped; the changes are dependency-truth repairs.
- **Authored argument:** (2)$\Rightarrow$(1) reconstructs each weak gradient
  from the ACL representative by the Fubini reconstruction lemma, and weak
  derivative uniqueness identifies $D_iu=\partial_iu^*$ almost everywhere.
  (1)$\Rightarrow$(2) extends $u$ and $D_iu$ by zero, differentiates the
  mollified extension on increasing relatively compact subdomains, converts the
  $L^p$ convergence to $L^1$ on bounded exhaustions by Hölder, selects
  $\varepsilon_j\downarrow0$ with summable $W^{1,1}(U_j)$ errors, integrates the
  telescoping tail on almost every line by completed-product Fubini, obtains a
  measurable limsup representative with absolutely continuous sections from
  one-dimensional FTC on interior compact intervals, and identifies it with
  $u$ by Fatou and its line derivatives with $D_iu$ by the a.e.-subsequence
  form of Riesz–Fischer. The AC assumption is declared and spent only on the CC
  and DC hypotheses of the cited Fubini, FTC and completeness interfaces and on
  the reconstruction lemma.
- **Source locators:** Juha Kinnunen, *Sobolev Spaces* (2026), Chapter 2 §2.6,
  Theorem 2.36, statement printed p. 55, proof pp. 56–59; the item's Sources
  section records this. The exact excerpts used for every one of the twenty
  citations are recorded in the strict contract entry, quoted from the cited
  library items' own Statement/Definition sections.
- **Contract and boundary cases:** Strict contract now passes for this item
  (1/1, zero errors and zero warnings) after adopting the canonical
  stratification and correcting the closing step's stale "2.1–4.2/1.2–4.2"
  references to actual steps "2.1–8.2/1.2 and 2.1–8.2". All eight standard
  boundary rows are present and item-specific: empty and zero classes, $n=1$
  via step 5.1, the $p=1$ endpoint via the Hölder endpoint conversion, the
  excluded $p=\infty$ endpoint recorded under "endpoints", AC under
  "nonempty-choice", and both iff directions.
- **Checks run:** Focused explicit-path precheck passed (`PASS ... (direct)`);
  explicit-path rendercheck passed with no warnings or errors; strict focused
  proof-contract check passed. Pair labels recomputed: full-run
  `item-dependency-levels check --run frontier-36-complete` passed (926 items,
  60 pages, maximum level 18).
- **Decision:** Blocked by the pair scope receipt, exactly as for the other
  items of this dispatch: `scopeDecision` reports the owner receipt bound to
  `9e43580a…` while the live scope hash is
  `f341ef3c7c2a2264d26d7d9b72af35f17e5372a9f73aa2aba7f7ce0beb162abf`; the
  `record-item` call for this item returned "Step 3a must clear for the item
  pair before item auditing". No decision was invented; the item is fully
  authored and check-clean.
- **Open obligations and next:** Owner must re-record `proceed` on the current
  scope before item decisions can be entered. Next unauthored item at the
  recomputed order is `thm-sobolev-spaces-are-banach-spaces` (level 5), then the
  B-page level-5 counterexamples/examples, then level-6 pasting,
  lower-semicontinuity and $H^k$ items.

### 28. `thm-sobolev-spaces-are-banach-spaces` (level 5)

- **Scaffold audit and repair:** The row's strategy was complete. One missing
  supplier was added: `lem-ac-supplies-countable-and-dependent-choice-for-banach-integration`,
  because the statement declares AC and both published completeness interfaces
  are stated under Countable Choice, which must be derived (AC does not equal CC
  by definition). The manifest deps were updated; the level stays 5 (the added
  supplier is published, hence out-of-run).
- **Authored argument:** A Sobolev-Cauchy sequence is Cauchy in each of the
  finitely many derivative coordinates by the displayed sum/max norm formula.
  Real or complex $L^p$ completeness gives classes $v_\alpha$ with
  $D^\alpha u_j\to v_\alpha$, $u:=v_0$. For a compactly supported test, Hölder
  on the (finite-measure) support passes both sides of each weak identity to the
  limit, so each $v_\alpha$ is a weak $\alpha$-derivative of $u$; hence
  $u\in W^{k,p}$ with $D^\alpha u=v_\alpha$, and the Sobolev norm of the
  difference is a finite sum/max of vanishing coordinate norms.
- **Choice accounting:** AC is used only through [F8] to obtain Countable
  Choice for the two completeness theorems and the finite-measure property; the
  representative selection inside the finitely many coordinate classes is
  finite and choice-free. This is stated in the item's choice sentence and in
  boundary row `nonempty-choice`.
- **Source locators:** Kinnunen, *Sobolev Spaces*, Chapter 1 §1.4 Theorem 1.15,
  printed pp. 11–13; Brezis, *Functional Analysis, Sobolev Spaces and PDE*,
  Chapter 8 §8.2. The item's Sources section records both. Exact excerpts for
  all nine citations are in the strict contract entry.
- **Checks and decision:** Focused explicit-path precheck passed; explicit-path
  rendercheck passed; strict focused proof-contract check passed (1/1, zero
  errors and warnings); full-run dependency-level check passed (926 items, 60
  pages). Item decision remains blocked by the pair scope receipt exactly as
  section 27 records; no decision invented.
- **Open obligations and next:** Owner scope re-record remains the blocking
  obligation. Next is `cex-a-jump-across-a-hypersurface-is-not-in-w-one-p`
  (level 5, B page).

### 29. `cex-a-jump-across-a-hypersurface-is-not-in-w-one-p` (level 4 after repair)

- **Scaffold audit and repair:** The row's strategy promised a shrinking-tensor
  test argument around the surface functional, but the scaffold dep list
  included the one-dimensional step counterexample and the absolute-continuity
  of the integral without the one-dimensional FTC and the product boxes needed
  to compute the surface functional. The authored proof computes the surface
  functional directly and spends absolute continuity of the integral on the
  shrinking slab; the one-dimensional counterexample is therefore no longer a
  logical prerequisite and was removed from the manifest, while
  `lem-complex-integration-by-parts-on-intervals-and-decaying-lines`,
  `thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures`,
  `thm-lebesgue-measure-of-a-box-of-every-kind`,
  `prop-indicator-function-is-measurable-iff-its-set-is-measurable`,
  `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`,
  `lem-smooth-bump-between-concentric-euclidean-balls`,
  `def-test-function-space-d-of-an-open-set`, `thm-chain-rule` and
  `thm-algebra-of-derivatives` were added as exact suppliers. The item's
  recomputed level is 4, and the recomputed full-run label check passes.
- **Authored argument:** $Q_+$ is a box of finite measure and $u=\mathbf 1_{Q_+}$
  is measurable, so $u\in L^p(Q)$ for all $p$. Fubini plus the one-dimensional
  FTC computes $\langle\partial_nT_u,\varphi\rangle=\int_Y\varphi(y,0)dy$. If an
  $L^1_{\mathrm{loc}}$ representative $v$ existed, tensor tests
  $\psi\otimes\eta_\delta$ would give $\int_Qv\varphi_\delta=c>0$ for every
  $\delta$ while the integrals are bounded by $\int_{\{|t|<\delta\}}|v\psi|$,
  which tends to $0$ by absolute continuity of the integral: contradiction.
  Tangential derivatives vanish by the same FTC computation, so $u$ lies in no
  $W^{1,p}(Q)$.
- **Source locators:** Kinnunen, *Sobolev Spaces*, Chapters 1–2 (the standard
  half-space indicator example); Hunter, *PDE notes*, Chapter 3 (step and
  surface-functional computation). Exact excerpts for all facts are in the
  strict contract entry.
- **Checks and decision:** Focused precheck passed after adopting the canonical
  stratification; a multiline display in the Statement refuted section was
  reflowed onto one source line and explicit-path rendercheck then passed;
  strict focused proof-contract check passed (1/1, zero errors/warnings); the
  full-run label check passes. No item decision can be recorded while the pair
  scope receipt stays stale (section 27).
- **Open obligations and next:** Owner scope re-record. Next is
  `cex-w-one-p-is-not-an-algebra-below-the-continuity-threshold` (level 5).

### 30. `cex-w-one-p-is-not-an-algebra-below-the-continuity-threshold` (level 5)

- **Scaffold audit and repair:** The row promised the sharp radial-power
  obstruction but its three-dep list was missing every interface the argument
  actually spends. The authored proof multiplies the sharp radial example by a
  smooth cutoff, so it needs the smooth-factor Leibniz rule, the classical–weak
  compatibility, restriction/locality and uniqueness lemmas, the bump lemma,
  the polar-coordinate formula, and the one-variable divergence of
  $\int_0^Rr^q dr$ at $q\le-1$ (real powers, power derivative, monotone
  convergence, logarithm). All were added and synced into the manifest; the
  recomputed level stays 5.
- **Authored argument:** With $\alpha\in[(n/p-1)/2,\,n/p-1)$ one has
  $p(\alpha+1)<n$ and $p(2\alpha+1)\ge n$. The sharp radial example gives
  $|x|^{-\alpha}\in W^{1,p}(B)$, and Leibniz with a cutoff gives $u\in W^{1,p}$.
  If $u^2$ were in $W^{1,p}$ with gradient $w\in L^p$, then on the punctured
  ball its classical gradient $z$, which equals $-2\alpha x|x|^{-2\alpha-2}$ on
  $B(0,1/2)$, would agree with $w$ a.e. by locality and uniqueness; but
  $\int_{B(0,1/2)}|z|^p$ diverges by polar coordinates and the exponent
  $n-1-p(2\alpha+1)\le-1$. Contradiction.
- **Source locators:** Kinnunen, *Sobolev Spaces*, Chapter 1 §1.2 Example 1.10
  and the subcritical non-algebra observation; Hunter, *PDE notes*, Chapter 3.
  All quoted excerpts are in the strict contract entry.
- **Checks and decision:** Explicit-path precheck passed; explicit-path
  rendercheck passed; strict focused proof-contract check passed (1/1, zero
  errors/warnings); manifest deps synced (3 → 13); full-run label check passes
  (926 items). Item decision blocked by the stale pair scope receipt, as in
  section 27.
- **Open obligations and next:** Owner scope re-record. Next is
  `ex-absolute-value-has-dirac-second-distributional-derivative` (level 5, B
  page).

### 31. `ex-absolute-value-has-dirac-second-distributional-derivative` (level 5)

- **Scaffold audit and repair:** The row's three deps were insufficient: the
  membership conclusion needs the Sobolev/weak-derivative definitions and the
  regular-distribution convention, the non-membership needs a proof that
  $\delta_0$ is not a locally integrable class, and the two half-line
  integrations need the interval FTC. Added
  `cex-not-every-distribution-is-a-locally-integrable-function`,
  `def-locally-integrable-function-as-a-regular-distribution`,
  `def-sobolev-space-wkp-and-its-norm`,
  `def-weak-derivative-of-a-locally-integrable-function`,
  `def-test-function-space-d-of-an-open-set`,
  `lem-classical-derivatives-are-weak-derivatives`,
  `lem-complex-integration-by-parts-on-intervals-and-decaying-lines` and
  `def-countable-choice`; manifest synced (3 → 11). Level stays 5.
- **Authored argument:** For a test supported in $(-R,R)$, the second
  distributional derivative pairs as $\int|x|\varphi''$; integration by parts
  on $[0,R]$ and $[-R,0]$ gives $\varphi(0)$ from each half-line because
  $\varphi$ and $\varphi'$ vanish at $\pm R$. Hence $\partial^2T_{|x|}=2\delta_0$.
  Since $|x|$ is $C^1$ off the origin and the published example gives
  $|x|\in W^{1,\infty}$ on intervals containing the origin, it is in
  $W^{1,\infty}_{\mathrm{loc}}$; if it were in $W^{2,1}(I)$, its second weak
  derivative class $v\in L^1(I)$ would satisfy $\int_I(v/2)\varphi=\varphi(0)$,
  representing $\delta_0$, which is impossible.
- **Checks and decision:** Precheck passed after adopting the canonical
  stratification (the choice-free $W^{1,\infty}$ step was hoisted to phase 1);
  rendercheck passed; strict focused contract passed (1/1, zero
  errors/warnings); full-run label check passes. Decision blocked by the stale
  pair scope receipt.
- **Open obligations and next:** Owner scope re-record. Next is
  `lem-sobolev-pasting-across-an-overlap` (level 6).

### 32. `lem-sobolev-pasting-across-an-overlap` (level 4 after repair)

- **Scaffold audit and repair:** The scaffold listed the bounded
  restriction/cutoff localisation lemma, whose estimates the authored proof
  does not use; the actual proof needs the two-element smooth partition of
  unity, the restriction and uniqueness lemmas, the integral-over-a-set and
  a.e.-equality interfaces, the essential supremum for the $p=\infty$ norm, and
  Hölder for the pairings. The manifest deps were replaced by the item's exact
  sixteen-item dependency set, and the recomputed level is 4 (not 6 — the
  earlier label assumed the unused level-5 supplier). No claim was weakened.
- **Authored argument:** On the overlap the local derivative classes agree a.e.
  by restriction plus uniqueness, so the pasted classes $g_\alpha$ (and
  $g_0=:u$) are well defined. For every test, the identities for $u_U$ against
  $\eta_U\varphi$ on $U$ and for $u_V$ against $\eta_V\varphi$ on $V$ add up,
  because $\eta_U+\eta_V=1$, to the global identity exhibiting $g_\alpha$ as
  $D^\alpha u$; hence $u\in W^{k,p}(\Omega)$. The norm bounds follow from
  $\mathbf 1_{U\cup V}\le\mathbf 1_U+\mathbf 1_V$ (finite $p$) and from the
  essential supremum over a union (p=∞).
- **Checks and decision:** A KaTeX typo ($\Omegau$) caught by rendercheck was
  repaired; precheck and rendercheck then passed; strict focused contract
  passed (1/1, zero errors/warnings) after adding the missing F4 input to the
  closing step; full-run label check passes. Decision blocked by the pair scope
  receipt.
- **Open obligations and next:** Owner scope re-record. Next is
  `lem-weak-lower-semicontinuity-of-the-sobolev-norm` (level 6).

### 33. `lem-weak-lower-semicontinuity-of-the-sobolev-norm` (level 5)

- **Scaffold audit and repair:** The scaffold's strategy said to apply the
  published lower-semicontinuity theorem "to the Banach space $W^{k,p}$" and
  listed the Banach item as a dependency. The published corollary assumes only
  HB in a normed space — neither completeness nor reflexivity is used — so the
  Banach supplier is not a logical prerequisite and was dropped. What is needed
  instead is the passage AC ⇒ HB, supplied by
  `thm-hahn-banach-dominated-extension`, together with
  `def-hahn-banach-extension-principle-relative` and the normed-space structure
  from `lem-sobolev-norm-is-well-defined-and-definite`. Manifest synced
  (3 → 7 items); level recomputed to 5.
- **Authored argument:** AC gives the dominated-extension theorem, i.e. HB.
  The displayed Sobolev norm makes $W^{k,p}(\Omega;\mathbb K)$ a normed space
  over either field, so the given weak convergence is weak convergence in a
  normed space; the published corollary then gives
  $\|u\|\le\liminf_j\|u_j\|$.
- **Honest qualification:** the hypothesis $1<p<\infty$ is retained but unused
  (recorded in the item and in the contract's endpoints/degenerate rows); the
  choice assumption is AC, spent only to supply HB, and this is stated
  explicitly since the cited corollary assumes HB rather than AC.
- **Checks and decision:** Precheck passed after adopting the canonical
  stratification; rendercheck passed; strict focused contract passed (1/1);
  full-run label check passes. Decision blocked by the stale pair scope receipt.
- **Open obligations and next:** Owner scope re-record. Next is
  `thm-hk-is-a-hilbert-space` (level 5 after recomputation).

### 34. `thm-hk-is-a-hilbert-space` (level 6)

- **Scaffold audit and repair:** The scaffold listed the three
  pairing/notation dependencies but not the real-analysis interfaces its
  authored proof actually uses. The final dependency set (16 items) adds
  `def-sobolev-space-wkp-and-its-norm`,
  `lem-weak-derivative-linearity-locality-and-commutation`,
  `def-inner-product-space`,
  `def-real-and-complex-inner-product-space`,
  `thm-holder-inequality-for-integrals`,
  `thm-linearity-of-the-lebesgue-integral-on-l-one`,
  `thm-the-lebesgue-integral-respects-almost-everywhere-equality`,
  `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`,
  `def-calligraphic-l-p-on-a-measure-space`,
  `thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space`
  and `lem-ac-supplies-countable-and-dependent-choice-for-banach-integration`.
  No promised claim was weakened; the recomputed level is 6. A citation repair
  was applied to `thm-sobolev-spaces-are-banach-spaces` (authored in this
  dispatch): the Brezis locator "Chapter 8 §8.2" is the one-dimensional case;
  the $n$-dimensional definitions cited there live in Chapter 9 §9.1.
- **Authored argument:** AC first supplies Countable Choice for the $W^{k,2}$
  interfaces and the weak-derivative linearity lemma. In the complex case the
  finite-tuple clause of the published complex $L^2$ inner-product theorem,
  applied to the tuple $(D^\alpha u)_{\alpha\in\mathcal A_k}$, makes
  $B(u,v)=\sum_\alpha\int D^\alpha u\,\overline{D^\alpha v}$ a
  representative-independent positive-definite pairing with
  $B(u,u)=\sum_\alpha\|D^\alpha u\|_2^2$, and weak-derivative linearity makes
  the tuple slot linear in the class, so $B$ is an inner product. In the real
  case the same form is verified directly on finitely many chosen
  representatives: Hölder gives integrability, the a.e.-equality theorem gives
  representative independence, integral linearity gives bilinearity, symmetry
  is pointwise, and the $L^2$ norm identity plus the nonnegative-integral
  theorem give positive definiteness with the witness $D^0u=u$. In both cases
  the induced norm is $\big(\sum_\alpha\|D^\alpha u\|_2^2\big)^{1/2}$, exactly
  the displayed $W^{k,2}$ norm, so the Banach theorem for $p=2$ and the
  definition of a Hilbert space close the proof. $k=0$ and $\Omega=\varnothing$
  are handled in the closing step.
- **Checks and decision:** Precheck passed on the first written
  stratification (no repair needed); rendercheck passed after joining two
  multi-line displays into single source lines; strict focused contract
  passed (1/1, zero errors/warnings); full-run label check passes. Decision
  blocked by the stale pair scope receipt.
- **Open obligations and next:** Owner scope re-record. Next is
  `cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives`
  (level 7).

### 35. `cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives` (level 7)

- **Scaffold audit and repair:** the scaffold's five dependencies were
  replaced by the twenty-three items the authored proof actually uses: the
  ACL definition, weak-derivative restriction, the a.e.-equality interface,
  the indefinite-integral and first-FTC interfaces, finite-measure $L^r
  \subseteq L^p$ inclusion, box measure, completeness of Lebesgue measure,
  measure monotonicity, Hölder, the integral triangle inequality, absolute
  continuity of the integral, countable additivity of the indefinite
  integral, complex $L^p$ conventions, the three continuity conventions and
  the AC $\Rightarrow$ CC/DC lemma. No promised claim was weakened; the
  recomputed level is 7.
- **Authored argument:** AC gives CC and DC for the ACL characterisation.
  For $1\le p<\infty$ the ACL representative is absolutely continuous on
  compact subintervals with classical derivative representing $Du$, and the
  absolutely-continuous FTC plus a.e.-invariance produce
  $u^*(y)-u^*(x)=\int_x^yDu$ for $x\le y$. For $p=\infty$ the class is
  restricted to the bounded intervals $J_n=I\cap(-n,n)$, where $L^\infty$
  lies in $L^1$ of a finite-measure space, locality makes $Du|_{J_n}$ the
  weak derivative of $u|_{J_n}$, and the $p=1$ construction provides
  representatives $u_n$; these agree on overlaps by the constant-difference
  uniqueness argument (the constant vanishes because an interval has
  positive measure) and glue to a global representative. Continuity follows
  from absolute continuity of the integral of $Du$ over compact
  subintervals together with the integral triangle inequality. When
  $I=(a,b)$ is bounded, $Du\in L^1(a,b)$, the indefinite integral is
  absolutely continuous, and the extension $E=H+u^*(c_0)-H(c_0)$ satisfies
  $E(x)=E(a)+\int_a^xDu$; any absolutely continuous extension $F$ has
  $F'=Du$ a.e. and therefore $F-E$ constant, which forces equality.
- **Checks and decision:** precheck needed the canonical stratification
  (the extension step was renumbered 5.2 $\to$ 6.1 and the closing step
  6.1 $\to$ 7.1); after adopting it precheck and rendercheck pass. Strict
  focused contract passes (1/1, zero errors/warnings); full-run label check
  passes. Decision blocked by the stale pair scope receipt.
- **Open obligations and next:** Owner scope re-record. Next is
  `thm-sobolev-chain-rule-for-c-one-lipschitz-compositions` (level 7).

### 36. `thm-sobolev-chain-rule-for-c-one-lipschitz-compositions` (level 7)

- **Scaffold audit and repair:** the scaffold's three dependencies
  (`thm-acl-characterisation-of-w-one-p`, `def-sobolev-space-wkp-and-its-norm`,
  `def-axiom-of-choice`) were replaced by the twenty-five items the authored
  proof actually uses: the $W^{1,p}$/local and $L^\infty$ definitions, the
  $\mathcal L^p$ and quotient-$L^p$ conventions, the ACL definition, absolute
  continuity, weak-derivative locality, Lipschitz-after-AC, bounded
  derivative $\Rightarrow$ Lipschitz, the one-dimensional chain rule, the box
  measure, sigma-finiteness on bounded sets, generalised Hölder, the
  finite-measure $L^r\subseteq L^p$ inclusion, the essential-supremum
  extremal property, the $\mathcal L^p/L^\infty$ vector-space theorem, Borel
  measurability of continuous maps, measurability of Borel compositions, the
  cut-off/partition-of-unity lemma, complex linearity of the integral, the
  monotonicity/scalar rules for the nonnegative integral, the definition of a
  finite measure, and the AC $\Rightarrow$ CC/DC lemma. Every promised claim
  was preserved verbatim, including the global integrability criterion
  $F(u)\in L^p(\Omega)$ and its three automatic cases; the recomputed level
  is 7 (all suppliers sit at level $\le 6$, so the position in the dispatch
  order is unchanged).
- **Authored argument.** Step 1.1 extracts CC and DC from AC [F24, F25].
  Step 2.1 defines the promised class: for measurable representatives
  $\hat u,\hat v_i$ the product $h_i=F'(\hat u)\hat v_i$ is measurable
  [F18, F19], obeys $|F(t)|\le|F(0)|+L|t|$ and $|F'(\hat u)|\le L$ by
  [F10, F16], so generalised Hölder [F14] puts it in $L^p$/$L^\infty$ and
  [F3, F4] make it a class, independent of the representatives. Step 3.1
  restricts to a rational box $Q$: $u|_Q\in W^{1,q}(Q)$ with $q=p$ (finite
  $p$) or $q=1$ ($p=\infty$) by locality [F8], the finite-measure inclusion
  [F15] and the box measure [F12], and the ACL characterisation [F5] supplies
  one ACL representative $u_Q^*$ per box — the sole countable selection,
  licensed by the CC of step 1.1. Step 4.1 shows $F\circ u|_Q\in L^q(Q)$
  (pointwise bound, [F15], [F17], monotonicity [F22]) and that
  $\Phi=F\circ u_Q^*$ is a measurable ACL representative (measurability by
  [F19], ACL by composing the ACL sections with the $L$-Lipschitz $F$
  [F9, F10], same exceptional sets). Step 5.1 identifies the classical
  derivative: at every point where $\partial_iu_Q^*$ exists, the sectional
  chain rule [F11] gives $\partial_i\Phi=F'(u_Q^*)\partial_iu_Q^*=G$, $G$ is
  a measurable $L^q$ function by [F14, F16, F18, F19], and the
  characterisation [F5] yields $D_i(F\circ u|_Q)=[G]=[h_i]$ a.e., in every
  direction at once. Step 6.1 upgrades $p=\infty$ from $q=1$ to
  $W^{1,\infty}(Q)$ via [F16] and [F1]. Step 7.1 patches the box identities
  into the global weak identity by a locally finite smooth partition of
  unity subordinate to the rational-box cover [F20], summing finitely many
  terms with integral linearity [F21]; all integrands are locally integrable.
  Step 8.1 assembles $W^{1,p}_{\mathrm{loc}}(\Omega)$ membership for open
  $U$ with compact closure ([F13], [F15], [F17], [F22], locality [F8]),
  equation included. Step 8.2 proves the global iff of clause 2, and step 9.1
  proves the three automatic cases, records the $n=1$ and
  $\Omega=\varnothing$ conventions, and closes the choice accounting.
- **AC accounting:** AC is declared and used only through [F24] to obtain CC
  (ACL definition [F6], locality [F8], box measure [F12], finiteness on
  bounded sets [F13], continuous $\Rightarrow$ Borel [F18]) and the
  characterisation [F5] stated under AC itself. The finitely many
  representative choices of step 2.1 are choice-free; the countable
  selection of box representatives in step 3.1 is the only CC use, and
  step 9.1 declares it. No choice is hidden in the $n=1$, empty-set or
  $\Omega=\varnothing$ clauses.
- **Checks and decision:** precheck passed (direct, after the canonical
  stratification adopted earlier in this item's authoring); rendercheck
  passed; the strict focused proof-contract check reports 1/1 with zero
  errors and zero warnings (25 citation contracts, 10 step derivations, all
  eight boundary cases). The run-wide item-dependency-levels check passes.
  Decision blocked by the stale pair scope receipt.
- **Open obligations and next:** owner scope re-record. Next is
  `cor-positive-negative-part-and-truncation-calculus-in-w-one-p` (level 8).

### 37. `cor-positive-negative-part-and-truncation-calculus-in-w-one-p` (level 8)

- **Scaffold audit and repair:** the scaffold's five dependencies were
  replaced by the twenty-three items the authored proof actually uses: the
  $W^{1,p}$ definition, the positive/negative-part definition, the
  weak-derivative linearity/locality lemma, the $C^1$ chain rule of level 7,
  the weak-stability lemma, dominated convergence, the classical-derivative
  lemma, the finite-measure $L^r\subseteq L^p$ inclusion, finiteness of
  Lebesgue measure on bounded sets, the monotonicity/scalar rules for the
  nonnegative integral, integration over a measurable set, the power rule,
  the algebra of derivatives, the definition of the derivative, the
  $\mathrm{AC}\Rightarrow\mathrm{CC}$ lemma, the definition of the Axiom of
  Choice, the $\mathcal L^p$/$L^p$/$L^\infty$ conventions, the essential
  supremum's extremal property, measurability of lattice operations and
  products, measurability of Borel compositions, and
  representative-independence of weak differentiation. Every promised claim
  was preserved, including the four a.e. derivative identities, the two
  level-set clauses and the global $W^{1,p}(\Omega)$ membership; the
  recomputed level is 8 (all suppliers are at level $\le 7$).
- **Authored argument:** step 1.1 extracts CC from AC and records the
  measurability and representative-independence conventions; step 1.2
  constructs the piecewise-quadratic corner family
  $P_\varepsilon$ (with $P_\varepsilon'=0,t/\varepsilon,1$ on the three
  pieces) and verifies $C^1$, $0\le P_\varepsilon'\le1$, the uniform bound
  $|P_\varepsilon(t)-t^+|\le\varepsilon/2$ and the pointwise convergence
  $P_\varepsilon'\to1_{\{t>0\}}$, including the values at the two junctions.
  Step 2.1 applies the $C^1$ chain rule on a relatively compact open $U$ to
  get $P_{1/k}\circ w\in W^{1,p}(U)$ with $D_i(P_{1/k}\circ
  w)=P_{1/k}'(w)D_iw$; step 2.2 proves $P_{1/k}\circ w\to w^+$ in $L^p(U)$
  and $P_{1/k}'(w)D_iw\to1_{\{w>0\}}D_iw$ in $L^q(U)$ ($q=p$ for finite $p$,
  $q=1$ for $p=\infty$) by dominated convergence with majorant $2|D_iw|$;
  step 3.1 concludes via weak stability that $w^+\in W^{1,p}(U)$ with
  $D_iw^+=1_{\{w>0\}}D_iw$ a.e.; step 3.2 prepares the truncation inputs
  $u-M,-M-u\in W^{1,p}_{\mathrm{loc}}(\Omega)$ with derivatives $\pm D_iu$;
  step 4.1 assembles the local statement and its global upgrade. Step 5.1
  derives $u^-,|u|\in W^{1,p}(\Omega)$, the identities
  $D_iu^-=-1_{\{u<0\}}D_iu$, $D_i|u|=\operatorname{sgn}(u)D_iu$ and, from
  $u=u^+-u^-$, the level-set identity $1_{\{u=0\}}D_iu=0$. Step 6.1 applies
  the same machinery to $u-M$ and $-M-u$ (which need not be globally
  $L^p$), obtains the two level-set identities at $\pm M$, and computes
  $D_iT_Mu=1_{\{-M\le u\le M\}}D_iu=1_{\{|u|<M\}}D_iu$ a.e.; step 7.1
  upgrades to $W^{1,p}(\Omega)$ via $|T_Mu|\le|u|$ and records the cases
  $M=0$, $p=1$, $p=\infty$, $n=1$ and $\Omega=\varnothing$.
- **AC accounting:** AC is declared and used only through the
  $\mathrm{AC}\Rightarrow\mathrm{CC}$ lemma for the CC hypotheses of the
  linearity/locality, stability, classical-derivative, finite-measure and
  representative-independence statements, and through the AC hypothesis of
  the level-7 chain rule. The approximation runs over the single sequence
  $\varepsilon_k=1/k$ and the only selections are of finitely many
  representatives, so no countable choice is spent on the limit.
- **Checks and decision:** precheck passed only after adopting the canonical
  phase stratification (the truncation-input step moved to layer 3 so that
  the local-form step is its own layer 4; the precheck then reports a clean
  pass). Rendercheck passed after joining two multi-line displays in the
  Statement. The strict focused proof-contract check reports 1/1 with zero
  errors and zero warnings (23 citation contracts, 10 step derivations, all
  eight boundary cases). The run-wide item-dependency-levels check passes.
  Decision blocked by the stale pair scope receipt.
- **Open obligations and next:** owner scope re-record. Next is
  `thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions` (level 8).

### 38. `thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions` (level 7)

- **Scaffold audit and repair:** the scaffold's four dependencies
  (`thm-acl-characterisation-of-w-one-p`,
  `thm-sobolev-chain-rule-for-c-one-lipschitz-compositions`,
  `lem-weak-stability-of-sobolev-derivatives`, `def-axiom-of-choice`) were
  replaced by the thirty-seven items the authored proof actually uses. The
  scaffold's strategy referred to a Rademacher-type input; no Rademacher
  theorem exists in this library, so the proof instead constructs one
  measurable almost-everywhere version of $F'$ from the $\limsup/\liminf$
  of the rational difference quotients (steps 2.1) and proves the needed
  one-dimensional level-set lemma (Claim A) inline in step 1.3. The
  scaffold's other promised supplier, the $C^1$ chain rule of level 7,
  is not used: the composition formula is recovered from the ACL
  characterisation [F5] and the one-dimensional chain rule for an
  indefinite integral after an absolutely continuous composition [F13], as
  the sources (Kinnunen Chapter 2 §2.1 and Hunter Chapter 3) permit. All
  promised claims of the scaffold statement were preserved: the local and
  global membership clauses, the conditional equivalence
  $F\circ u\in W^{1,p}(\Omega)\iff F(u)\in L^p(\Omega)$, the automatic
  cases $F(0)=0$ and $p<\infty$ with $\lambda_n(\Omega)<\infty$, the
  level-set clause for arbitrary Lebesgue-null $N\subseteq\mathbb R$, and
  the two descriptions of the weak derivative class. The recomputed
  dependency level is 7 according to the run-wide checker.
- **Authored argument:** step 1.1 extracts Countable Choice and Dependent
  Choice from AC and books every choice interface; step 1.2 records the
  pointwise Lipschitz bound $|F(t)|\le|F(0)|+L|t|$, absolute continuity
  of every restriction of $F$ to a compact interval by [F11], the
  fundamental theorem on compact intervals, and nullity of the
  differentiability-failure set $N_F$; step 1.3 proves Claim A (for
  $\lambda_1^*(N)=0$ and any $g:[a,b]\to\mathbb R$, the set where $g$ is
  differentiable with $g'\neq0$ and $g\in N$ has outer measure zero) by
  the $Z_k$-covering argument with the Archimedean property [F35]; step
  2.1 builds $f_0$ from $q_m(t)=m(F(t+1/m)-F(t))$ and shows $f_0=F'$ on
  $D_F$ pointwise and $|f_0|\le L$; step 3.1 defines the classes
  $f_0(u)D_iu=[f_0(\hat u)\hat v_i]$ with independence of representatives;
  step 4.1 restricts to a rational box, converts $p=\infty$ to $q=1$,
  applies the ACL characterisation to select one representative $u_Q^*$
  per box and compares it with $\hat u$ and $\hat v_i$; step 5.1 proves
  the box level-set claim $\lambda_n(Z)=0$ by Tonelli plus Claim A on the
  good sections; step 5.2 verifies $F\circ u|_Q\in L^q(Q)$, measurability
  of $\Phi=F\circ u_Q^*$ and its ACL property; step 6.1 obtains
  $\partial_i\Phi=f_0(u_Q^*)\partial_iu_Q^*$ almost everywhere from [F13]
  applied to the absolutely continuous sections and concludes
  $F\circ u|_Q\in W^{1,q}(Q)$ with $D_i(F\circ u|_Q)=[h_i]$ a.e.; step 6.2
  promotes the level-set clause to $\Omega$ for Borel and then arbitrary
  null $N$ by outer regularity; step 7.1 upgrades $p=\infty$; step 8.1
  patches the box identities by a locally finite smooth partition of
  unity to the global weak identity; step 9.1 proves
  $W^{1,p}_{\mathrm{loc}}$ membership; step 9.2 proves the membership
  equivalence; step 10.1 identifies the two descriptions of the
  derivative class, including every Borel $g$ with $g=F'$ a.e.; step 11.1
  discharges the automatic cases $F(0)=0$, finite-measure $p<\infty$,
  $p=\infty$, $L=0$, $n=1$ and $\Omega=\varnothing$ and books the choice
  accounting.
- **AC accounting:** AC is declared and consumed exactly through [F26]
  (Countable Choice for the ACL definition [F6], locality [F8], box
  measure [F14], finite measure on bounded sets [F15], Borel measurability
  of continuous maps [F20], outer regularity [F33] and the
  completed-product convention [F34]) and Dependent Choice for [F12] and
  [F13]; the ACL characterisation [F5] is stated under AC itself. The
  representative selection in step 3.1 is finite; the single countable
  selection is the assignment of one $u_Q^*$ per rational box in step 4.1,
  licensed by the Countable Choice obtained in step 1.1. No other choice
  is hidden in the $n=1$, $p=\infty$, $L=0$ or $\Omega=\varnothing$ cases.
- **Source locators:** Kinnunen, *Sobolev Spaces*, Chapter 2 §2.1
  (Lemma 2.1 and Remark 2.2(4), where the chain rule is recorded for
  Lipschitz $f$) and §2.6 (Theorem 2.36, the ACL characterisation); Hunter,
  *Notes on Partial Differential Equations*, Chapter 3 §§3.1–3.5
  (Proposition 3.21(2) and Proposition 3.22 with the remark after it);
  and the accepted answer to Math StackExchange question 4580640
  (Johnsrude–Kwaśnicki covering argument) for Claim A, recorded as an
  auxiliary literature source because the library contains no
  Rademacher-type differentiability theorem. Claim A is proved inline in
  step 1.3 with this library's outer-measure conventions, so no external
  result is assumed in the argument.
- **Checks run:** explicit-path precheck passed (`PASS ... (direct)`)
  after the canonical phase stratification was adopted: the Claim A step
  and the box level-set step moved to levels 1 and 5 respectively, the
  $f_0$ construction to 2.1, the representative step to 3.1, the box step
  to 4.1 and the remaining steps renumbered with all internal references
  relabelled; the stratification is now stable in the mechanical layer
  computation. Explicit-path rendercheck passed (no wikilinks in math, no
  multiline displays, all spans parse under KaTeX). The manifest row was
  synced from the item's frontmatter (4 → 37 dependencies) and the run-wide
  `item-dependency-levels check --run frontier-36-complete` passes (932
  items, 60 pages, maximum level 18; this item level 7). The strict
  focused proof-contract check reports `ok:true`, 1/1, with zero errors
  and zero warnings: 38 citation contracts (the 35 facts, with the
  three double-source facts F28, F29 and F34 contracted once per
  source), 16 step derivations whose inputs are the exact token sets of
  the step texts, and all eight standard boundary cases with
  item-specific evidence.
- **Decision:** blocked by the stale pair scope receipt, as for the
  previous items: the live scope hash is
  `f341ef3c7c2a2264d26d7d9b72af35f17e5372a9f73aa2aba7f7ce0beb162abf`
  while the owner receipt is bound to `9e43580a…`; the `record-item` call
  returned "Step 3a must clear for the item pair before item auditing".
  No decision was invented and no stale receipt was treated as approval.
- **Open obligations and next:** owner scope re-record before item
  decisions can be entered. Next unauthored item at the recomputed order
  is `cor-maxima-and-minima-of-two-w-one-p-functions-are-w-one-p` (A page,
  scaffold level 9), then `ex-sobolev-truncations-preserve-zero-regions`
  (B page), then the A/B page files and the batch gates.

### 39. `cor-maxima-and-minima-of-two-w-one-p-functions-are-w-one-p` (level 9)

- **Scaffold audit and repair:** the scaffold's three dependencies
  (`cor-positive-negative-part-and-truncation-calculus-in-w-one-p`,
  `lem-weak-derivative-linearity-locality-and-commutation`,
  `def-axiom-of-choice`) were replaced by the seventeen items the authored
  proof actually uses. Every promised claim was preserved: membership of
  $u\vee v$ and $u\wedge v$ in $W^{1,p}(\Omega)$, the two almost-everywhere
  gradient formulas
  $D_i(u\vee v)=1_{\{u>v\}}D_iu+1_{\{u\le v\}}D_iv$ and
  $D_i(u\wedge v)=1_{\{u<v\}}D_iu+1_{\{u\ge v\}}D_iv$, and the statement
  that the two gradients agree almost everywhere on $\{u=v\}$. The
  scaffold's strategy ($u\vee v=v+(u-v)^+$, $u\wedge v=u-(u-v)^+$ plus the
  level-set identity) is exactly the argument carried out. One point
  needed care: the direct computation of $D_i(u\wedge v)$ gives
  $1_{\{u\le v\}}D_iu+1_{\{u>v\}}D_iv$, which differs from the promised
  indicator convention only on the coincidence set; there the level-set
  identity $D_i(u-v)=0$ a.e. on $\{u=v\}$ (from the level-8 corollary)
  makes the two conventions agree almost everywhere, and the proof says
  so explicitly in step 6.1. The recomputed level is 9.
- **Authored argument:** step 1.1 derives Countable Choice and Dependent
  Choice from AC and fixes finitely many measurable representatives
  ($\hat u$, $\hat v$, and one $u_i$, $v_i$ per direction), locally
  integrable on compact subsets by the representative-independence lemma;
  step 1.2 proves the two elementary real identities
  $\max\{a,b\}=b+(a-b)^+$ and $\min\{a,b\}=a-(a-b)^+$ by the two order
  cases; step 2.1 puts $w:=u-v\in W^{1,p}(\Omega)$ with
  $D_iw=D_iu-D_iv$ a.e. by the linearity lemma applied to locally
  integrable data; step 3.1 applies the level-8 positive-part corollary to
  $w$, obtaining $w^+\in W^{1,p}(\Omega)$, $D_iw^+=1_{\{w>0\}}D_iw$ a.e.
  and $D_iw=0$ a.e. on $\{w=0\}$, hence $D_iu=D_iv$ a.e. on
  $\{u=v\}$; step 4.1 defines $u\vee v:=v+w^+$ and $u\wedge v:=u-w^+$,
  proves membership and the derivative classes by linearity, and shows
  that the pointwise max/min of representatives represent these classes
  (the pointwise identities of step 1.2 hold everywhere, the functions
  are measurable by the arithmetic/lattice measurability theorem); step
  5.1 computes the representative
  $v_i+1_{\{\hat w>0\}}(u_i-v_i)=1_{\{\hat w>0\}}u_i+1_{\{\hat w\le0\}}v_i$
  of $D_i(u\vee v)$ and proves the products lie in $L^p$ (monotonicity of
  the nonnegative integral for $p<\infty$; the essential-supremum
  conventions for $p=\infty$); step 6.1 does the same for
  $D_i(u\wedge v)$ and uses $u_i=v_i$ a.e. on $\{\hat w=0\}$ to reach the
  promised indicator convention; step 7.1 proves the coincidence-set
  clause; step 8.1 discharges $\Omega=\varnothing$, $u=v$, $p=1$,
  $p=\infty$, $n=1$ and the choice accounting.
- **AC accounting:** Countable Choice is consumed only through the
  hypotheses of the representative-independence lemma and the linearity
  lemma; the Axiom of Choice only through the level-8 positive-part
  corollary. The selections are finite (one representative of $u$, one of
  $v$, and finitely many of the $D_iu$, $D_iv$); no countable selection
  and no Dependent Choice is used, and the closing step states this.
- **Source locators:** Kinnunen, *Sobolev Spaces*, Chapter 2 §2.2,
  Remark 2.4(3), printed p. 31, states the lattice membership, both
  gradient formulas and $Du=Dv$ a.e. on $\{u=v\}$; Hunter, *Notes on
  Partial Differential Equations*, Chapter 3 §§3.1–3.5; Brezis,
  *Functional Analysis, Sobolev Spaces and Partial Differential
  Equations*, Chapter 8 §8.2 (truncation and absolute-value exercises).
  The proof re-derives the statement from the library's level-8
  positive-part calculus and does not import the source proofs.
- **Checks run:** explicit-path precheck passed (`PASS ... (direct)`) with
  no canonical renumbering needed beyond the labels already chosen; the
  rendercheck passed (KaTeX parses every span, no wikilinks in math, no
  multiline displays). The manifest row was synced from the frontmatter
  (3 → 17 dependencies); the run-wide
  `item-dependency-levels check --run frontier-36-complete` passes (932
  items, 60 pages, maximum level 18; this item level 9). The strict
  focused proof-contract check reports `ok:true`, 1/1, zero errors and
  zero warnings: 17 citation contracts, 9 step derivations with exhaustive
  input token sets, and all eight boundary cases, including the two
  directions of the tie-set equivalence recorded after the formulas.
- **Decision:** blocked by the stale pair scope receipt, as for the
  previous items: the live scope hash is
  `f341ef3c7c2a2264d26d7d9b72af35f17e5372a9f73aa2aba7f7ce0beb162abf`
  while the owner receipt is bound to `9e43580a…`; the `record-item` call
  returns "Step 3a must clear for the item pair before item auditing".
  No decision was invented and no stale receipt was treated as approval.
- **Open obligations and next:** owner scope re-record before item
  decisions can be entered. Next unauthored item at the recomputed order
  is the B-page example `ex-sobolev-truncations-preserve-zero-regions`,
  then the A/B page files and the batch gates.

### 40. `ex-sobolev-truncations-preserve-zero-regions` (level 9) — last item of the pair

- **Scaffold audit and repair:** no item file existed, so the example was
  authored from scratch. The scaffold's four dependencies
  (`cor-positive-negative-part-and-truncation-calculus-in-w-one-p`,
  `def-sobolev-space-wkp-and-its-norm`,
  `lem-classical-derivatives-are-weak-derivatives`,
  `def-axiom-of-choice`) were replaced by the twenty-five items the
  authored proof actually uses. Every promised claim is preserved: the
  Axiom-of-Choice hypothesis, $M>0$, the cube $Q=(-2M,2M)^n$, the
  definition $w(x)=\min\{M,\max\{0,x_1\}\}$, membership
  $w\in W^{1,p}(Q)$ for every $1\le p\le\infty$, the three region
  identities ($w=0$ on $\{x_1\le0\}$, $w=x_1$ on $\{0<x_1<M\}$,
  $w=M$ on $\{x_1\ge M\}$), the weak gradient $e_1$ on the middle slab
  and $0$ elsewhere, and the irrelevance of interface values. The
  recomputed level is 9.
- **Strategy choice (scaffold text rewritten, promise preserved):** the
  scaffold proposed writing $w=(x_1)^+-(x_1-M)^+$ and subtracting the two
  weak gradients. The authored proof instead writes
  $w=T_M(x_1^+)$ — the truncation of the positive part — and applies the
  level-8 corollary twice (positive part, then truncation by the same
  level $M$). This is the same corner calculus, but it produces the
  middle-slab indicator *exactly*:
  $\mathbf 1_{\{x_1<M\}}\mathbf 1_{\{x_1>0\}}=\mathbf 1_{\{0<x_1<M\}}$
  pointwise on $Q$, so no separate almost-everywhere discussion of the
  hyperplane $\{x_1=M\}$ is needed; the subtraction route was checked as
  well, and both give $D_1[w]=[\mathbf 1_{\{0<x_1<M\}}]$ and
  $D_j[w]=[0]$ for $j\ge2$. The promised statement is unchanged.
- **Authored argument:** step 1.1 derives Countable Choice from AC and
  notes $0\in Q$; step 1.2 proves the elementary clipping identities
  including $\max\{-M,\max\{0,t\}\}=\max\{0,t\}$ for $M>0$; step 1.3
  verifies that $f(x)=x_1$ is $C^1$ on $Q$ with $\partial_1f\equiv1$ and
  $\partial_jf\equiv0$ for $j\ge2$ (the difference quotient of the line
  map is the constant $(e_j)_1$ on $\mathbb R\setminus\{0\}$, whose limit
  at $0$ is $(e_j)_1$; $f$ is the first coordinate projection, hence
  continuous, and the partials are constant, hence continuous); step 2.1
  computes $\lambda_n(Q)=(4M)^n<\infty$, the bound $|x_1|<2M$ on $Q$, and
  the $L^\infty$ and $L^p$ membership of $f$ and its first partials;
  step 2.2 records the region identities; step 3.1 applies the
  classical-derivative lemma with $k=1$ to get
  $[f]\in W^{1,p}(Q;\mathbb R)$ with $D_1[f]=[1]$, $D_j[f]=[0]$ for
  $j\ge2$; step 4.1 takes the positive part $u=f^+$ with
  $D_1u=[\mathbf 1_{\{x_1>0\}}]$, $D_ju=[0]$; step 5.1 applies the
  truncation clause to $u$, identifies $w=T_Mu$ pointwise, and concludes
  $[w]=T_Mu\in W^{1,p}(Q)$ for every $1\le p\le\infty$ (the measurability
  of $w$ is the composition of the measurable positive part with the
  continuous map $t\mapsto\min\{M,\max\{-M,t\}\}$); step 6.1 computes the
  level set $\{|u|<M\}=\{x_1<M\}$ and the exact products of indicators,
  giving the gradient representative $e_1\mathbf 1_{\{0<x_1<M\}}$; step
  7.1 proves the interface pieces are degenerate boxes, hence null, and
  invokes representative independence; step 8.1 discharges $n=1$, the
  exponent endpoints, the fixed level $M>0$ and the choice accounting.
- **Interface and level-set precision:** the two interface pieces
  $Q\cap\{x_1=0\}$ and $Q\cap\{x_1=M\}$ are boxes with a zero-length side,
  hence Lebesgue-null, so
  $[\mathbf 1_{\{0<x_1<M\}}]=[\mathbf 1_{\{0<x_1\le M\}}]$ and any
  interface values give the same class; this is consistent with the
  level-set clause of the level-8 corollary at $\{u=M\}$.
- **AC accounting:** the Axiom of Choice is consumed through Countable
  Choice in the classical-derivative, box-measure, Borel-to-Lebesgue and
  representative-independence interfaces, and directly as the hypothesis
  of the level-8 truncation calculus. No representative is selected, no
  countable selection occurs beyond those interfaces, and Dependent
  Choice is not used.
- **Coordinates note (recorded, not repaired):** the item follows this
  page's convention $x_1,\dots,x_n$, $e_1,\dots,e_n$ (as do the sibling
  examples, e.g. `cex-a-jump-across-a-hypersurface-is-not-in-w-one-p`
  with $x_n$, and the level-8 corollary with $i\in\{1,\dots,n\}$), while
  several published suppliers it cites index coordinates from $0$
  (`lem-standard-basis-of-f-n` states "Every index runs from $0$, so the
  coordinates of an element of $F^n$ are $x_0,\dots,x_{n-1}$";
  `def-directional-and-partial-derivatives` and
  `def-jacobian-matrix-and-gradient` use $\partial_0,\dots$;
  `ex-rn-as-a-product` and `lem-metrics-on-rn` use $\pi_j$, $j<n$). The
  mathematical content used is invariant under the relabelling
  $k\mapsto k+1$; this is recorded as a cross-pair notational
  reconciliation obligation for Step 4, with the exact item IDs above.
- **Source locators:** Kinnunen, *Sobolev Spaces*, Chapter 2 §2.2, the
  truncation paragraph and Theorem 2.3 with its proof, printed pp. 29–31:
  the corner maps $f_\varepsilon(t)=\sqrt{t^2+\varepsilon^2}- \varepsilon$
  approximate $\max\{t,0\}$ with $|f_\varepsilon'|\le1$, and dominated
  convergence gives $u^\pm,|u|\in W^{1,p}$ with the stated level-set
  gradients, for $1\le p<\infty$; the truncation $T_M$ itself is the
  paragraph opening that section. Hunter, *Notes on Partial Differential
  Equations*, Chapter 3 §§3.1–3.2 and §3.5 (Examples 3.3–3.5, the
  $W^{1,p}$/$\mathrm H^k$ conventions). Brezis, *Functional Analysis,
  Sobolev Spaces and Partial Differential Equations*, Chapter 8 §8.2,
  Examples (ii), printed pp. 202–203, states the truncation rule as an
  exercise and gives no proof. None of the three states the $p=\infty$
  case, which the library's level-8 corollary supplies; the proof does not
  import the source arguments.
- **Checks run:** explicit-path precheck passed (`PASS ... (direct)`)
  after adopting the tool's canonical stratification (eleven steps,
  $1.1$–$8.1$; the two steps that depend only on the local setup were
  moved to layers 2 and the rest relabelled accordingly); the rendercheck
  passed (every span parses under KaTeX, no wikilinks in math, no
  multiline displays). The manifest row was synced from the frontmatter
  (4 → 25 dependencies); the run-wide
  `item-dependency-levels check --run frontier-36-complete` passes (933
  items, 60 pages, maximum level 18; this item level 9). The strict
  focused proof-contract check reports `ok:true`, 1/1, zero errors and
  zero warnings: 25 citation contracts, with facts [F17] and [F18] each
  contracted once per source; 11 step derivations with exhaustive input
  token sets; and all eight boundary cases, the two iff cases marked
  `not_applicable` with item-specific reasons because the Statement
  contains no if-and-only-if claim.
- **Decision:** blocked by the stale pair scope receipt, as for every
  other item of this pair: the live scope hash is
  `f341ef3c7c2a2264d26d7d9b72af35f17e5372a9f73aa2aba7f7ce0beb162abf`
  while the owner receipt is bound to `9e43580a…`; the `record-item` call
  returns "Step 3a must clear for the item pair before item auditing".
  No decision was invented and no stale receipt was treated as approval.
- **Open obligations and next:** owner scope re-record before item
  decisions can be entered. All 39 items of the pair now have item files;
  next are the A/B page files
  (`library/pde/weak-derivatives-and-sobolev-spaces.md` and
  `library/pde/weak-derivatives-and-sobolev-spaces-examples.md`), then
  the batch gates (whole-file strict proof contract, content-policy
  check, validate-plan, and the remaining explicit-path checks).

## 41. Batch close: the A and B page files

- **Files created (this session):** `library/pde/weak-derivatives-and-sobolev-spaces.md`
  and `library/pde/weak-derivatives-and-sobolev-spaces-examples.md`. Neither
  existed before; the pair is complete only with them.
- **Frontmatter.** Both follow the house page shape verified against the
  completed sibling page `fundamental-solutions-newtonian-potentials-and-green-functions`
  and its `-examples` companion: `page` (filename stem), `title` (exactly the
  plan-spec titles "Weak Derivatives and Sobolev Spaces" and "Weak Derivatives
  and Sobolev Spaces — Examples"), `status: draft` (new run content),
  `items:` listing the 28 A items on the A page, `examples:` listing the 11 B
  items on the B page, and the opposite list left empty, as in every completed
  sibling pair.
- **List order.** Both lists use the recomputed authoring order of
  `tools/item-dependency-levels.mjs` (`dependency_level` ascending, then page
  order, then item id), which is exactly the order of the generated dispatch.
  The A list was checked mechanically: no same-page dependency occurs after
  its consumer (0 violations among the 28 items); the B list is similarly
  consistent (0 violations among the 11 items). No item was omitted, added or
  re-homed.
- **Bodies.** The A prose fixes the conventions ($\Omega\subseteq\mathbb R^n$
  open, $n\ge1$, $1\le p\le\infty$, $k\in\mathbb N_0$,
  $\mathbb K\in\{\mathbb R,\mathbb C\}$, coordinates $x_1,\dots,x_n$ with
  basis $e_1,\dots,e_n$, Sobolev spaces as almost-everywhere classes),
  summarises the developed chain (regular distributions, weak derivatives and
  their uniqueness/linearity/Leibniz rules, $W^{k,p}$ and $H^k=W^{k,2}$ with
  completeness and Hilbert structure, weak stability and closedness,
  integration by parts, restriction/cutoff/pasting tools, the ACL
  characterisation, the one-dimensional absolutely continuous representative,
  and the $C^1$- and Lipschitz-chain-rule and truncation/lattice calculus),
  states the choice accounting exactly as the items declare it (Countable
  Choice through the published distribution/measure/$L^p$/Fubini interfaces;
  the Axiom of Choice declared at the completeness, ACL and chain- and
  truncation-calculus items through the cited interfaces), and explicitly
  denies what the page does not prove: no smooth approximation, density of
  test functions, extension, trace, embedding, Poincaré or compactness
  theorem; $H^k_0$ is only reserved here. The B prose summarises the
  computations and obstructions ($|x|$ and its $2\delta_0$ second derivative,
  the step and hypersurface jumps, the Cantor staircase, the sharp radial-power
  threshold $p(a+1)<n$, the failure of the algebra property below the
  continuity threshold, matching-trace piecewise $C^1$ functions, the absence
  of point values and the unbounded evaluation below the critical exponent,
  and the clipping example that preserves a zero region) and repeats the
  Countable Choice/Axiom of Choice declarations of the items.
- **Checks.** `tools/rendercheck.mjs` on both page files: OK (KaTeX parses
  every span, frontmatter parses, no multiline displays). `prosecheck.mjs` on
  the two pages (and all 39 items): 41 files, 0 errors, 0 warnings
  ("no positional claim contradicts the spec"). `depcheck.mjs` reports no
  `page-item-missing` or `link-unresolved` for either page: every listed id
  resolves to the authored item files.

## 42. Batch close: required gates, all run on the current artifacts

- **Explicit-path precheck.** `node tools/tsx-run.mjs tools/precheck.mts` run
  on each of the 39 item files by explicit path: 39 runs, 0 failures (the
  proof-bearing items report "1 checked, 0 failing", the definitions and the
  remark "0 checked, 0 failing — all clean").
- **Explicit-path rendering.** `tools/rendercheck.mjs` over the 39 item files
  plus the 2 page files (41 files): OK — "no wikilink inside math, no nested or
  unbalanced delimiters, no multiline display block, every math span parses
  under the real KaTeX, and every frontmatter block parses".
- **Content policy.** `node tools/content-policy.mjs research/frontier-36-complete-batch-30.pages.json --json`:
  scope 39 items, **0 errors, 0 warnings**. (One error found at first run and
  repaired; see §44.)
- **Strict proof contracts.** `node tools/proof-contract.mjs research/frontier-36-complete-batch-30.proof-contracts.json --strict --json`:
  `ok: true`, 39/39 items checked, 0 errors, 0 warnings. The contract file
  covers all 39 items of the pair.
- **Item dependency levels.** `node tools/item-dependency-levels.mjs check --run frontier-36-complete`:
  exit 0, 933 items across 60 pages, maximum level 18. The earlier run-wide
  stale-label warning on the out-of-pair item
  `lem-line-bundles-on-projective-three-space-restrict-by-degree` was repaired
  by its owner: the check now passes with no stale-label error. No pair item is
  above level 9.
- **Plan validation.** `node tools/validate-plan.mjs research/plan-spec.json`:
  exit 0, "declared page order is acyclic and consistent; no item-level cycles,
  forward references, B-page dependencies, or unresolved ids among the 1240
  page(s) with item lists". Pre-splice plan mismatch to hand to Step 4: the
  plan-spec rows for `weak-derivatives-and-sobolev-spaces` and
  `weak-derivatives-and-sobolev-spaces-examples` still carry `items: []` while
  the batch manifests now carry the 28 + 11 items, so the item-level
  intra-order assertion for this pair is not yet made by the plan (this pair
  is among the 379 planned pages without item lists noted by the tool). Step 4
  must splice the manifest item lists into the plan and re-run
  `validate-plan`; nothing in the plan contradicts the authored order, and the
  batch manifests were checked topologically by hand (see §41).
- **Coverage checklist.** `node tools/coverage-checklist.mjs research/frontier-36-complete-batch-30.coverage.json --json`:
  2 pages, 88 harvested rows, 0 errors, 0 warnings.
- **Repo-wide content gates (observational).** `tools/depcheck.mjs`: 8 hard
  errors remain, **none in this pair** (before the repairs of §43 there were
  10, two of them ours); the remaining ones are in other groups' in-flight
  artifacts (§46 lists them). `tools/fwdcheck.mjs`: 13 `forward-undeclared`
  errors, none in this pair. `tools/extcheck.mjs`: 0 errors, 0 warnings.
  `tools/pathcheck.mjs pde --quiet`: exit 0.
- **Dependency ledger.** `node tools/frontier-dependency-ledger.mjs refresh --run frontier-36-complete`:
  "refreshed and deduplicated", exit 0, 30/30 batches reviewed. The owned
  consumer input `research/frontier-36-complete-batch-30.cross-batch-dependencies.json`
  remains `[]`, which is still correct: every item and page supplier this pair
  depends on is either published out-of-run content or this pair's own items
  (verified by mapping the current dependency closure against the run's batch
  files). The one unified edge that touches this pair is the batch-13 page
  edge `fourier-multipliers-and-sobolev-characterisations` →
  `weak-derivatives-and-sobolev-spaces` (`kind: page`, consumer batch 13,
  supplier batch 30, status `open`); it is batch 13's row and is reported, not
  edited here (see §46).

## 43. Post-author repair: two hard B-leaf dependency defects in this pair

`tools/depcheck.mjs` (batch-close, run after authoring) reported two hard
`b-leaf-content` errors inside this pair — an item depending on an item whose
only home is a B (examples) page, which SCHEMA.md §4 forbids. Both were real
and are repaired; no statement changed, so the pair scope hash is unaffected.

- **`items/ex-absolute-value-has-dirac-second-distributional-derivative.md`**
  depended on `cex-not-every-distribution-is-a-locally-integrable-function`,
  homed only on `distributions-test-functions-and-differentiation-examples`
  (another pair's B page). Repair: dropped that dependency and replaced it by
  two published A-page suppliers —
  `thm-locally-integrable-functions-embed-in-distributions` (injectivity of the
  regular-distribution map modulo a.e. equality on every open set) and
  `lem-euclidean-bump-for-a-compact-set-inside-an-open-set` (smooth bump equal
  to 1 on a compact set inside an open set) — and rewrote step 3.1 as a
  self-contained contradiction: assuming $|x|\in W^{2,1}(I)$ on
  $I=(-1,1)$, the two open halves $U_\pm$ force the representing $v$ to
  vanish a.e. by injectivity, and a bump $\psi\in C_c^\infty(I)$ with
  $\psi(0)=1$ gives $2=\int_I v\psi=0$, so
  $|x|\notin W^{2,1}_{\mathrm{loc}}(\mathbb R)$. The Facts block now carries
  the injectivity fact as [F9], the bump as [F10], and the Countable Choice
  declaration renumbered to [F11]; step 4.1, the contract citations and the
  contract's `degenerate` and `nonempty-choice` boundary rows were updated to
  match. Dependencies 11 → 12; current level 5.
- **`items/ex-sobolev-truncations-preserve-zero-regions.md`** depended on
  `ex-rn-as-a-product`, homed only on
  `subspaces-products-and-quotients-examples`. Repair: replaced it by two
  published A-page suppliers — `lem-product-topology-on-rn` (the product
  topology on $\mathbb R^n$ is the metric topology of $d_2$, hence the
  Euclidean topology) and `thm-product-universal-property` (the projections of
  a product are continuous) — and split fact [F9] accordingly. The step-1.3
  continuity argument is unchanged in substance; the contract's single [F9]
  citation was split into one citation row per source with exact quotes from
  each source statement, and the derivations and boundary rows are unchanged.
  Dependencies 25 → 26; current level 9.
- **Post-repair state.** `tools/depcheck.mjs`: 0 errors attributable to this
  pair (repo total 10 → 8). Focused strict proof contracts for both items:
  `ok: true`. Explicit-path precheck and rendercheck: clean. The batch
  manifests were re-synced from the item frontmatter (the run's `sync` script
  prints exactly the two dependency-count changes above and relabels 0 items,
  i.e. the dependency_level labels remain correct), and
  `item-dependency-levels check` still exits 0.
- **Honesty note.** These two dependencies were introduced while the items were
  being authored and were not detected by the per-item checks recorded in
  §§5 and 40; the batch-close repo-wide depcheck is what caught them. The
  repair did not weaken either claim: both examples still prove exactly their
  promised statements, and the removed B-page items (which are themselves
  sound) are simply not usable as dependencies.

## 44. Batch-close rendering and content-policy repairs

Running `tools/rendercheck.mjs` over the whole repository at batch close
(22 627 files) surfaced 8 errors, **all of them in five item files of this
pair**; the per-item renderchecks recorded earlier had missed them. All eight
are repaired; no mathematical content changed except the two character-level
restorations noted below, and the strict contracts for the touched items were
re-verified.

- **Multiline display math** (7 spans, `[multiline-display]`) in
  `def-locally-integrable-function-as-a-regular-distribution` (2),
  `def-sobolev-space-wkp-and-its-norm` (2),
  `def-weak-derivative-of-a-locally-integrable-function` (1) and
  `lem-weak-derivative-is-independent-of-lp-representatives` (1): joined to
  one source line each with the house
  tool `tools/fix-multiline-display.mjs`, which rewrites only whitespace
  inside `$$…$$` and touches no character of the mathematics.
- **Undefined KaTeX control sequence** in
  `cex-w-one-p-point-evaluation-is-unbounded-in-the-subcritical-and-higher-dimensional-critical-cases`:
  two occurrences of `$t^n\len!\exp(t)$` / `$s^n\len!\exp(s)$` (an
  accidental deletion of the space in `\le n!`). Verified against the item's
  own [F21] ("$\exp(t)\ge t^N/N!$ … consequently $t^n\le n!\exp(t)$") and
  repaired to `$t^n\le n!\exp(t)$` and `$s^n\le n!\exp(s)$`; the proof's
  inequality chain is exactly the one those lines assert, so this restores the
  intended mathematics rather than changing it.
- **Content-policy error** in
  `cor-positive-negative-part-and-truncation-calculus-in-w-one-p`:
  `notation-iota-applied` on `$\iota(n)x^{n-1}$`; the policy requires the
  natural number written directly, so the excerpt now reads `$n x^{n-1}$`,
  matching `[[lem-derivative-of-a-power]]`.
- **Post-repair checks.** `rendercheck` over the 41 pair files: OK. Whole-batch
  `content-policy`: 0 errors, 0 warnings. Focused strict contracts on the five
  touched items plus the two §43 items: `ok: true`. Explicit-path precheck on
  all five touched items: clean. `prosecheck` on the five: 0 errors, 0
  warnings. `item-dependency-levels check` re-run: still exit 0. These repairs
  are formatting/citation-hygiene fixes; none changes a claim, hypothesis or
  dependency of any item.

## 45. Item decisions: all 39 attempts blocked by the stale owner scope receipt

- **Scope state.** `research/frontier-36-complete-step3a-owner-weak-derivatives-and-sobolev-spaces.json`
  records the owner decision `proceed` (owner: true, at 2026-09-27T17:46:22Z)
  bound to scope hash
  `9e43580aeac11cf63852859cb57141f55d8646ba078e4e721829edaa11a7589a`. The
  live scope hash of the pair is
  `f341ef3c7c2a2264d26d7d9b72af35f17e5372a9f73aa2aba7f7ce0beb162abf`, so the
  receipt is stale. `node tools/step3-decisions.mjs check --run frontier-36-complete --phase scope`
  reports the pair as the only open scope in the run, with
  `"owner": true, "reason": "weak-derivatives-and-sobolev-spaces: owner proceed; apply amendments and record proceed for current scope"`.
  Only the owner may re-record an owner-held scope decision; this dispatch did
  not and will not use `--owner`.
- **Attempts.** `record-item` was invoked for **all 39 items** with
  `--confidence 1` and each item's examined dependency list (the two items
  repaired in §43 attempted with `--decision repaired`, the rest with
  `--decision accept`, §44's formatting repairs being content-preserving):
  **39 attempted, 39 blocked, 0 recorded**, each failing with the exact message
  `Step 3a must clear for the item pair before item auditing`. No decision was
  invented, no stale receipt was treated as approval, and no escalation was
  resolved locally. The pair guard precedes every item-phase write, so even an
  `escalate` row cannot be entered while the scope is unclosed: one probe
  `record-item --decision escalate` on
  `def-locally-integrable-function-as-a-regular-distribution` returned the same
  message, and no row was written. The final-phase check
  (`check --run frontier-36-complete --phase final`) attributes this to the
  pair scope: 435 items are already accepted run-wide, and all 39 items of this
  pair remain in `work` under the same owner-held pair reason.
- **Caveat.** The scope hash covers `(id, kind, title, statement)` of the
  pair's items, not dependency metadata; the exact statement-level delta that
  moved the hash from the receipt's value cannot be reconstructed from a
  hash-only receipt, and this close-out session changed no item statement.
  The owner step is: re-record `proceed` (owner) for the current scope, after
  which the 39 item decisions can be entered normally.

## 46. Handoff: completed IDs, checks, suppliers, published concerns, open obligations

**Completed IDs (all 39 items authored and checked).** A page (28):
`def-locally-integrable-function-as-a-regular-distribution`,
`def-weak-derivative-of-a-locally-integrable-function`,
`lem-weak-derivative-is-independent-of-lp-representatives`,
`lem-weak-derivatives-are-unique-almost-everywhere`,
`def-sobolev-space-wkp-and-its-norm`,
`lem-classical-derivatives-are-weak-derivatives`,
`lem-weak-derivative-linearity-locality-and-commutation`,
`rem-weak-derivatives-are-distributional-derivatives-with-function-values`,
`def-absolute-continuity-on-almost-every-coordinate-line`,
`lem-sobolev-integration-by-parts-for-dual-exponents`,
`lem-sobolev-norm-is-well-defined-and-definite`,
`lem-sobolev-pasting-across-an-overlap`,
`lem-weak-leibniz-rule-with-a-smooth-factor`,
`lem-weak-stability-of-sobolev-derivatives`,
`thm-zero-weak-gradient-implies-componentwise-constancy`,
`cor-weak-derivative-operator-is-closed-between-lp-spaces`,
`def-hk-and-hk-zero-notation`,
`lem-acl-representatives-reconstruct-weak-gradients-by-fubini`,
`lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces`,
`lem-weak-lower-semicontinuity-of-the-sobolev-norm`,
`thm-sobolev-spaces-are-banach-spaces`,
`thm-acl-characterisation-of-w-one-p`,
`thm-hk-is-a-hilbert-space`,
`cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives`,
`thm-sobolev-chain-rule-for-c-one-lipschitz-compositions`,
`thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions`,
`cor-positive-negative-part-and-truncation-calculus-in-w-one-p`,
`cor-maxima-and-minima-of-two-w-one-p-functions-are-w-one-p`. B page (11):
`ex-absolute-value-has-a-weak-first-derivative`,
`cex-step-function-has-no-locally-integrable-weak-derivative`,
`cex-cantor-function-is-not-w-one-one-despite-being-absolutely-continuous-off-a-null-set`,
`ex-radial-power-membership-in-w-one-p`,
`ex-piecewise-c-one-functions-with-matching-traces`,
`cex-a-jump-across-a-hypersurface-is-not-in-w-one-p`,
`cex-lp-functions-need-not-have-point-values`,
`cex-w-one-p-point-evaluation-is-unbounded-in-the-subcritical-and-higher-dimensional-critical-cases`,
`ex-absolute-value-has-dirac-second-distributional-derivative`,
`cex-w-one-p-is-not-an-algebra-below-the-continuity-threshold`,
`ex-sobolev-truncations-preserve-zero-regions`. Both page files (§41) are
written; none of these items is left with a missing contract, page home or
required check.

**Checks actually run at close (all on the current artifacts).** Explicit-path
precheck ×39 (clean); explicit-path rendercheck ×41 files (OK); whole-file
strict proof contracts (ok:true, 39 checked, 0/0); content-policy (0/0);
item-dependency-levels (exit 0, 933 items, 60 pages, max level 18);
validate-plan (exit 0; pre-splice item-list note in §42); coverage-checklist
(0/0); prosecheck ×41 (0/0); depcheck (this pair 0 errors); fwdcheck (this pair
0 errors); extcheck (0/0); pathcheck pde (exit 0); frontier-dependency-ledger
refresh (ok, 30/30 batches reviewed); repo-wide rendercheck (0 errors after
§44).

**Local suppliers authored and registered.** All 39 items are registered in the
batch manifest, coverage, the proof-contract file and their page frontmatter.
No item outside the owner-amended 28 + 11 inventory was minted. The 13 items
added to the Step-1 first pass by the owner's §12.5 PDE-11 overlay are:
`def-absolute-continuity-on-almost-every-coordinate-line`,
`lem-sobolev-integration-by-parts-for-dual-exponents`,
`lem-weak-stability-of-sobolev-derivatives`,
`thm-zero-weak-gradient-implies-componentwise-constancy`,
`lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces`,
`lem-sobolev-pasting-across-an-overlap`,
`lem-weak-lower-semicontinuity-of-the-sobolev-norm`,
`thm-acl-characterisation-of-w-one-p`,
`lem-acl-representatives-reconstruct-weak-gradients-by-fubini`,
`thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions`,
`cor-maxima-and-minima-of-two-w-one-p-functions-are-w-one-p`,
`cex-w-one-p-is-not-an-algebra-below-the-continuity-threshold`, and
`cex-cantor-function-is-not-w-one-one-despite-being-absolutely-continuous-off-a-null-set`.
No promised row was dropped and no Recorded result is consumed. Four published
A-page suppliers were added as dependencies by the §43 repairs:
`thm-locally-integrable-functions-embed-in-distributions`,
`lem-euclidean-bump-for-a-compact-set-inside-an-open-set`,
`lem-product-topology-on-rn`, `thm-product-universal-property`. Dependency
expansions recorded during authoring (manifest rows changed; the scope hash
excludes dependency metadata, so these are reported here rather than derivable
from the receipt): `thm-sobolev-chain-rule-for-c-one-lipschitz-compositions`
3 → 25; `cor-positive-negative-part-and-truncation-calculus-in-w-one-p`
5 → 23; `thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions`
4 → 37; `cor-maxima-and-minima-of-two-w-one-p-functions-are-w-one-p`
3 → 17; `ex-sobolev-truncations-preserve-zero-regions` 4 → 25 → 26; and
`ex-absolute-value-has-dirac-second-distributional-derivative` 11 → 12 in
this close-out.

**Choice accounting (unchanged; propagated).** Countable Choice is declared
wherever the published distribution, measure, $L^p$, Fubini and
classical-derivative interfaces carry it; the Axiom of Choice is declared at
the completeness, ACL, chain-rule and truncation items exactly where they
invoke the published choice-bearing Banach/Hilbert completeness and Fubini
interfaces, which in turn supply the Countable and Dependent Choice instances
those interfaces need
(`lem-ac-supplies-countable-and-dependent-choice-for-banach-integration`). The
clipping example declares AC for the truncation calculus; the §43 repair kept
this accounting exact and did not add any new choice principle (the bump lemma
is choice-free). No choice-free argument was made choice-dependent and no
incompatible-axiom branch was introduced.

**Published concerns and cross-group findings (report only; nothing outside
this pair was edited).**
1. *Coordinate indexing (recorded; Step-4 reconciliation).* This pair's items
   write coordinates $x_1,\dots,x_n$ and $e_1,\dots,e_n$, while several
   published suppliers index from $0$ — most sharply
   `lem-standard-basis-of-f-n` ("Every index runs from $0$", coordinates
   $x_0,\dots,x_{n-1}$), `def-directional-and-partial-derivatives` and
   `def-jacobian-matrix-and-gradient` ($\partial_0,\dots$),
   `ex-rn-as-a-product`, `lem-metrics-on-rn` ($\pi_j$, $j<n$) and the newly
   used `lem-product-topology-on-rn`/`thm-product-universal-property`
   ($k<n$). All content used is invariant under the relabelling $k\mapsto k+1$;
   this is a notational reconciliation obligation, not a mathematical defect.
2. *Batch-13 consumer (open; batch 13 owns).* The scaffold row
   `thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces`
   (page `fourier-multipliers-and-sobolev-characterisations`, batch 13) now
   declares exactly the four PDE-11 item dependencies this pair supplies
   (`def-sobolev-space-wkp-and-its-norm`,
   `lem-weak-derivative-is-independent-of-lp-representatives`,
   `lem-weak-derivatives-are-unique-almost-everywhere`,
   `lem-sobolev-norm-is-well-defined-and-definite`) — verified in the current
   batch-13 manifest at close. The item is still unauthored, and the unified
   ledger keeps the page edge
   `fourier-multipliers-and-sobolev-characterisations` →
   `weak-derivatives-and-sobolev-spaces` at status `open`, owned by batch 13.
   No action is required of this pair beyond noting that its four items are now
   authored and checked, so the batch-13 owner can close the edge on
   completion of their item.
3. *Other groups' hard gates observed at close (reported, not touched).*
   `depcheck` still reports 8 errors elsewhere: six `page-item-missing` rows
   for `library/scheme-theory/finite-proper-and-projective-morphisms-examples.md`
   (listing `cex-open-immersion-not-proper`,
   `cex-proper-not-affine-positive-dimensional`,
   `cex-proper-not-necessarily-projective`, `ex-closed-immersion-finite-proper`,
   `ex-projective-space-valuative-extension`,
   `ex-proper-image-projective-variety`, none of which has an item file yet),
   and two `b-leaf-content` rows in `items/ex-finite-power-map-affine-line.md`
   and `items/ex-empty-morphism-proper-projective.md`. `fwdcheck` reports 13
   `forward-undeclared` errors in other groups' items (e.g.
   `def-measurable-and-decomposable-operator-fields`,
   `lem-curve-closed-subsets-finite`,
   `lem-fredholm-determinant-spectral-product-from-power-traces`,
   `thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces`).
   All are in-flight artifacts of sibling batches; none is a dependency of
   this pair. No potentially defective **published** supplier was identified
   among this pair's dependency closure during the audit; the only confirmed
   defects found at close were the two B-leaf dependencies of §43 (introduced
   during authoring, now repaired) and the rendering/content-policy defects of
   §44 (now repaired).

**Open obligations.**
1. **Owner:** re-record the pair scope `proceed` (owner-only) for the current
   scope hash `f341ef3c…`; then enter the 39 item decisions (§45). The pair is
   the only open scope in the run.
2. **Step 4 splice:** carry the 28 + 11 manifest item lists into
   `research/plan-spec.json` for
   `weak-derivatives-and-sobolev-spaces` and
   `weak-derivatives-and-sobolev-spaces-examples`, then re-run
   `validate-plan` (pre-splice mismatch in §42); also reconcile the coordinate
   indexing of concern 1 and any shared page/prose amendments.
3. **Batch 13:** author
   `thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces`
   against the now-authored PDE-11 items and close the unified page edge.
4. **Sibling batches:** the depcheck/fwdcheck findings in concern 3 belong to
   their owners.
5. This pair has no local dependency-level, contract, coverage or rendering
   obligation left open; everything listed above is outside its edit
   authority.
