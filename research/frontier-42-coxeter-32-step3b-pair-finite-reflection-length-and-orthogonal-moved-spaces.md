# Step 3b authoring — pair `finite-reflection-length-and-orthogonal-moved-spaces`

Run `frontier-42-coxeter-32` · role alpha-high · batch 18 · design label CG-21.

- A page: `finite-reflection-length-and-orthogonal-moved-spaces` (order 1752).
- B page: `finite-reflection-length-and-orthogonal-moved-spaces-examples` (order 1753).
- Task: `research/frontier-42-coxeter-32-step3b-pair-finite-reflection-length-and-orthogonal-moved-spaces-afdf36f493637cf5.task.md`.

## Owned IDs (authoring order)

| level | item | kind |
|---|---|---|
| 14 | `def-cg-reflection-length-absolute-order-and-moved-space` | definition |
| 15 | `lem-cg-orthogonal-wall-form-and-subspace-restriction` | lemma |
| 16 | `lem-cg-reflection-factorizations-and-independent-normals` | lemma |
| 17 | `thm-cg-carter-reflection-length-and-absolute-order` | theorem |
| 18 | `ex-cg-moved-space-intersection-is-not-a-meet-in-a3` | example (B) |
| 18 | `ex-cg-simple-and-reflection-length-of-a-long-transposition-in-s5` | example (B) |
| 18 | `ex-cg-wall-form-and-line-restrictions-of-a-plane-rotation` | example (B) |

## Open obligations at entry

1. **All in-run suppliers are scaffold-only at entry.** No item file of batches 2, 4, 7, 13 or 17
   exists on disk yet (`items/<id>.md` missing for every in-run dependency of this pair). The
   consumer items are authored anyway, with the exact supplier IDs and consuming steps flagged
   below; each item decision is left `escalate` until the supplier files and the actual proof uses
   are reconciled.
2. **Step 3a finding 1 (declaration gap, non-blocking).** `ex-cg-wall-form-and-line-restrictions-of-a-plane-rotation`
   and the closing caveat of `thm-cg-carter-reflection-length-and-absolute-order` use the notation
   $I_2(m)$, which is fixed by `thm-cg-finite-coxeter-classification-including-h-and-dihedral`
   (batch 13). Recommended repair: add that supplier to the `deps` of the wall-form example (and of
   the theorem if its closing sentence is kept). This report records the outcome.
3. **Batch-18 shared files.** `research/frontier-42-coxeter-32-batch-18.pages.json`,
   `...-batch-18.coverage.json`, `...-batch-18.cross-batch-dependencies.json` and
   `...-batch-18.proof-contracts.json`; add a cross-batch row and refresh
   `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` after any
   dependency edit. Preserve sibling rows (batch 18 holds only this pair).

## Checkpoint log

(one entry per authored item: claim/conventions, source locators, dependencies, checks, open gaps, next action)

### 1. `def-cg-reflection-length-absolute-order-and-moved-space` (level 14) — authored

- Claim kept exactly as reviewed by Step 3a: clauses (1) reflection length $\ell_T$ with the existence argument
  from $S\subseteq T$ and well-ordering, (2) absolute order $\le_T$, (3) moved/fixed spaces $M(A),F(A)$ and the
  relation $\le_{\mathrm O}$ defined by the dimension formula, (4) explicit abstentions (no order property, no
  $\ell_T=\dim M$ at definition level) and the statement that no Choice is used.
- Conventions: $V=\mathbb R^S$ with the positive definite Coxeter form $B$; $\mathrm O(V)$ = $B$-preserving
  invertible maps; empty product = identity; the min over a nonempty set of naturals.
- Sources (unchanged from the scaffold, all fetch-verified at Step 1): Björner–Brenti Exercise 2.36 (printed
  p. 61); Carter §2 printed pp. 2–5; Brady–Watt Introduction/§2 (printed pp. 1–3) and §4 opening (pp. 8–9).
- Dependencies: unchanged from the manifest (11 entries); `justified_by: thm-cg-carter-reflection-length-and-absolute-order`
  exactly as in `definition-justifications.json`.
- Checks run: `tools/tsx-run.mjs tools/precheck.mts items/def-cg-reflection-length-absolute-order-and-moved-space.md`
  → `0 checked, 0 failing` (definition, no phase proof); `tools/rendercheck.mjs` → OK; `tools/proof-layout.mjs`
  → 1 item, 0 steps, 0 defects.
- Open gaps: none for the item itself; its consumer theorem is authored in this batch and the in-run supplier
  files (batches 2, 4, 13) do not exist yet (see open obligation 1).

### 2. `lem-cg-orthogonal-wall-form-and-subspace-restriction` (level 15) — authored

- Claim kept exactly as reviewed: (1) basic identities and rank subadditivity; (2) the Wall form
  $\chi_A(u,v)=B((A-\mathrm{id})|_{M(A)}^{-1}u,v)$ with $\chi_A+\chi_A^T=-B$ and nondegeneracy; (3) subspace
  restriction $H_U$, $H_U+H_U^*=-\mathrm{id}$, $A_U=\mathrm{id}+H_U^{-1}$ on $U$ and $\mathrm{id}$ on $U^\perp$,
  $M(A_U)=U$, the line-reflection description; (4) the restriction theorem ($U\mapsto A_U$ a bijection onto
  $\{B:B\le_{\mathrm O}A\}$ and an order isomorphism); (5) rank-length equality and the prefix description.
- Proof technique: direct. 15 canonical-layered steps; the restriction theorem's converse is proved by
  decomposing $M(A)=M(B)\oplus M(B^{-1}A)$ for $B\le_{\mathrm O}A$ and comparing the two direct summands, which
  gives $S_Au-S_Bu\in M(B)^\perp$ and hence $\chi_A|_{M(B)}=\chi_B$ and $B=A_{M(B)}$.
- Conventions/caveats preserved: $A_U$ is an element of $\mathrm O(V)$ and need not lie in $\rho(W)$;
  $\le_{\mathrm O}$ is a relation defined by the dimension formula, so the bijection is proved, not assumed.
- Dependencies: unchanged from the manifest (12 entries, all published). The proof is written so that the
  transposes $T_A$, $H_U^t$ are constructed locally, so the statement's adjoint/isometry links remain
  declared but the argument does not depend on their algebra.
- Checks run: `precheck.mts` → PASS (direct); `rendercheck.mjs` → OK; `proof-layout.mjs` → 15 steps, 0 defects.
- Open gaps: the supplier `thm-cg-finite-type-positive-definite-criterion` (batch 13) is scaffold-only;
  consumed by [F5] in steps 1.1, 2.2, 4.1, 5.1, 6.1. Same for `def-cg-real-coxeter-form-and-reflection`
  (batch 4, statement-level only).

### 3. `lem-cg-reflection-factorizations-and-independent-normals` (level 16) — authored

- Claim kept exactly as reviewed: (1) the generic fixed point gives a root $\alpha$ with
  $F(w)\subseteq H_\alpha$ and $\alpha\in M(w)$, plus $\rho(t_\alpha)\le_{\mathrm O}\rho(w)$ and
  $\dim M(w)=1+\dim M(t_\alpha w)$; (2) every $w$ is a product of exactly $\dim M(w)$ elements of $T$ and
  $\ell_T=\dim M$; (3) the telescoped normals have $\dim M\le m$, and span $M$ with independence when
  $\dim M=m$.
- Proof technique: direct, 10 canonical-layered steps. The generic point uses the finite-union lemma on
  $F(w)$ against the root hyperplanes $H_\alpha\cap F(w)$, the chamber/face identification
  $\operatorname{Stab}_W(x)=w_0W_Iw_0^{-1}$, and the contrapositive of genericity. The rank drop is the
  restriction theorem of item 2 applied to the line $\mathbb R\alpha$. Independence is decided by the
  linear-algebra tool of step 1.5 (a spanning set of $m$ vectors in a space of dimension $m$ is a basis),
  proved from the published finite-spanning bound, the basis extension theorem and the definitions of
  independence and span.
- Dependency additions (declared in both item file and manifest, all published, no in-run level change):
  `cor-independent-set-is-no-larger-than-a-finite-spanning-set`, `def-dimension`, `def-linear-basis`,
  `def-linear-combination-and-span`, `thm-dimension-of-a-linear-subspace`.
- Checks run: `precheck.mts` → PASS (direct); `rendercheck.mjs` → OK; `proof-layout.mjs` → 10 steps, 0 defects.
- Open gaps: in-run suppliers (batches 4, 7, 13, 17) are still scaffold-only; consuming steps are named in
  the cross-batch input and in the proof-contract citations.

### 4. `thm-cg-carter-reflection-length-and-absolute-order` (level 17) — authored, with one scaffold repair

- **Scaffold defect confirmed and repaired (statement change).** The scaffolded clause (2)(i) claimed:
  "$u\le_Tv$ iff there are $k=\ell_T(u)$, $l=\ell_T(u^{-1}v)$ and reflections with $u=t_1\cdots t_k$ and
  $v=t_1\cdots t_k s_1\cdots s_l$". The $(\Leftarrow)$ direction is false: in $W$ of type $A_2$ take
  $u=(1\,2)$ and $v=1$; then $k=\ell_T(u)=1$, $l=\ell_T(u^{-1}v)=\ell_T((1\,2))=1$, and
  $t_1=s_1=(1\,2)$ realise $v=t_1s_1$, yet $u\le_Tv$ fails because $0=\ell_T(v)\ne k+l=2$. The clause was
  replaced by the correct prefix form of the source (Brady–Watt §2: "a shortest factorisation of $u$ as a
  product of reflections which is a prefix of a shortest factorisation of $v$"), which preserves the
  promised claim (prefix form of $\le_T$). Manifest statement and item statement are byte-equal after
  whitespace normalisation; no other clause, id, kind, title or item was changed.
  - Scope refresh: the pre-repair Step-3a scope receipt hash
    `eae1b3e359eea2a2aa73f5075c68298031d650690a008faa45c82eaa2ac52f07` (2026-10-07T07:32:10Z) is preserved
    in the dispatch log `research/frontier-42-coxeter-32-dispatch/alpha-step3a-pair-finite-reflection-length-and-orthogonal-moved-spaces-0284d1a6de26a458.log`
    (lines 5009–5015). A fresh `record-scope --decision sufficient` receipt was recorded for the amended
    scope: sha256 `0870ef0ea290b23dbeac1924811d39966300d5c20025ac59dff65dae1a2b8633`.
  - Consumer impact: the theorem is a declared supplier of `bipartite-coxeter-elements-and-ordered-root-complexes`
    (batch 19) and of `noncrossing-partition-lattices-and-kreweras-complements` (batch 31); the amended
    clause is the true prefix form, so those consumers' uses must be re-checked in the Step-5 direct-consumer
    window. Flagged here for the lead.
- Claim otherwise kept: (1) Carter's formula $\ell_T=\dim M=\dim V-\dim F$; (2)(ii) rank function and finite
  intervals; (2)(iii) triangle-type inequality and inversion/conjugation invariance; (2)(iv) monotonicity of
  $M$ and $F$; (3) moved-space rigidity under a common upper bound $\delta$, with the $I_2(4)$ caveat.
- Proof technique: direct, 10 canonical-layered steps. The cover-increment argument uses the corrected
  prefix form plus the triangle inequality; the rigidity uses the restriction of $\rho(\delta)$ to $M(\alpha)$
  and the order-isomorphism clause of the Wall form lemma.
- Dependency addition: `thm-cg-finite-coxeter-classification-including-h-and-dihedral` (batch 13, in-run;
  step 3a finding 1) to this theorem and to `ex-cg-wall-form-and-line-restrictions-of-a-plane-rotation`; two
  new cross-batch rows added to `frontier-42-coxeter-32-batch-18.cross-batch-dependencies.json` (now 46 rows)
  and `frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` run. The six diagram-supplier rows
  had their description corrected to say that the type-$A$ convention comes from
  `thm-hh-parabolic-minimal-representatives-and-length-additivity` (4) and the $I_2(m)$ convention from the
  classification theorem.
- Checks run: `precheck.mts` → PASS (direct); `rendercheck.mjs` → OK; `proof-layout.mjs` → 10 steps, 0 defects.
- Open gaps: all in-run suppliers are scaffold-only; the statement change flags direct consumers in batches
  19 and 31 for the Step-5 window (exact ids to be copied from the consumer manifests at reconciliation).

## Dispatch 74300565e1a616eb — re-entry verification, repair and completion (2026-10-07 21:15+11)

**Entry state.** The seven item files and two page files existed from the earlier dispatch
(`afdf36f493637cf5`, report above) but the pair's work was incomplete:

- `research/frontier-42-coxeter-32-batch-18.proof-contracts.json` did not exist (the stage's
  required artifact for this pair; `merge-contracts` cannot run without it);
- no item decision had been recorded for any of the seven items;
- the scope review receipt (hash `0870ef0e…`) was stale: `batch-18.pages.json` had been rewritten
  by concurrent writers at 20:30 local, giving the current scope hash `a0fcff922dbe3668ad41a4ae8d7b38c92fde8eda8343599056eca5a31e1550c6`
  (pre-author baseline hash `eae1b3e3…`);
- the report stopped after checkpoint 4 (the three examples had no checkpoint).

**Independent re-audit performed in this dispatch.** All seven item files and both page files were
read in full, together with `batch-18.pages.json`, `.coverage.json`, `.notes.md`,
`.cross-batch-dependencies.json`, plan §CG-21, the Step-3a report, and the *current* statements of the
in-run suppliers used by the arguments: `def-hh-coxeter-matrix-word-group-and-length` (batch 2),
`def-cg-real-coxeter-form-and-reflection`, `def-cg-canonical-reflection-homomorphism`,
`lem-cg-reflection-representation-descends-and-root-norms`, `lem-cg-reflection-form-invariance-and-rank-two-orders`
(batch 4), `thm-cg-root-inversion-formulas-and-strong-exchange`, `thm-cg-root-length-criterion-and-faithfulness`
(batch 7), `def-cg-coxeter-diagram-components-and-finite-type`, `thm-cg-finite-type-positive-definite-criterion`,
`thm-cg-finite-coxeter-classification-including-h-and-dihedral` (batch 13),
`def-cg-finite-reflection-arrangement-and-spherical-chambers`,
`thm-cg-finite-chamber-tiling-and-coset-face-identification` (batch 17),
`thm-hh-parabolic-minimal-representatives-and-length-additivity`. Every used clause is present in the
current supplier statements. Mathematical checks re-derived here: the Wall-form matrix identities
(orthonormality of $u,\tilde w$; $B(Au,\tilde w)=\sin\theta$; $S_A=-\tfrac12\mathrm{id}-\tfrac12\cot(\theta/2)J$
and $(e^{i\theta}-1)S_A=1$), the rank-drop induction and telescoping reverse inequality, the cover/rank
argument of the theorem, both concrete computations in the examples, and the new count argument below.

### Local repairs made in this dispatch (all local; no statement narrowed)

1. **`ex-cg-simple-and-reflection-length-of-a-long-transposition-in-s5`, step 2.1 (citation repair).**
   Fact `[F4]` ($F(w)=\ker(\rho(w)-\mathrm{id})$, $M(w)=\operatorname{im}(\rho(w)-\mathrm{id})$, $T$ the
   reflection set) was declared but not cited by any step, so its citation had empty `uses` and
   `proof-contract --strict` failed. Step 2.1 does use $F(w)=\ker(\rho(w)-\mathrm{id})$ when it reads the
   fixed space of $\rho(w)$; the tag was corrected to `[step 1.1, F3, F4]`.
2. **`lem-cg-reflection-factorizations-and-independent-normals`, step 1.1 (citation accuracy).**
   `[F3]` (root norm one; unique $t_\alpha$) was in the tag but its content is not used in that step
   (injectivity is `[F4]`, the stabiliser input `[F1]`, the union lemma `[F2]`, the reflection facts
   `[F5]`, the moved-space identity `[F6]`); the tag was corrected to `[F1, F2, F4, F5, F6, given]`.
3. **`ex-cg-wall-form-and-line-restrictions-of-a-plane-rotation` (statement clause completed).**
   Statement (ii) asserts that the root lines are exactly the $m$ lines $\mathbb R\beta$, but the
   verification only proved the equivalence "root line $\iff$ $A_L\in\rho(W)$". A new step 2.3 now
   proves $T=\{A^js:0\le j<m\}$: from $A=st$ one has $sA=t$ and $A^{-1}=ts$; the set
   $W_0=\{A^j,A^js:0\le j<m\}$ is a subgroup containing $s,t$, hence equals $W$; conjugation gives
   $A^ksA^{-k}=A^{2k}s$, $A^ktA^{-k}=A^{2k-1}s$ and $(A^ks)t(A^ks)^{-1}=A^{2k-2}s$, so every conjugate of
   $s$ or $t$ lies in $\{A^js\}$ and conversely $A^{2k}s=A^ksA^{-k}$, $A^{2k-1}s=A^ktA^{-k}$, giving
   $|T|=m$. `[F5]` was extended with the bijection $\{\pm\alpha:\alpha\in\Phi\}\to T$ of
   `thm-cg-root-inversion-formulas-and-strong-exchange` (1)(iv), so the plane has exactly $m$ root lines
   and hence a non-root line. The canonical precheck numbering places the new step as 2.3 (it cites only
   step 1.2), and step 4.1 was updated accordingly. Checks after the edit: precheck PASS,
   `proof-layout` 7 steps 0 defects, rendercheck OK, contract regenerated.

### Checkpoints 5–7 (examples)

### 5. `ex-cg-simple-and-reflection-length-of-a-long-transposition-in-s5` (level 18) — verified, one citation repair

- Claims verified: (i) reflections are exactly the transpositions and $\ell(\varphi^{-1}(i\,j))=2(j-i)-1$
  by the inversion count; (ii) the long transposition $(1\,5)$ has $\ell=7$ versus $\ell_T=1$, exhibited
  as $(2\,5)(1\,2)(2\,5)^{-1}$; (iii) $\ell_T(\varphi^{-1}(\sigma))=5-c(\sigma)$ from the fixed space in
  the sum-zero hyperplane, giving $\ell_T(w_0)=2$ with $\ell(w_0)=10$ and $\ell_T=4$ for $5$-cycles.
- Repair: step 2.1 tag now contains `[F4]` (see repair 1). All 13 declared dependencies rechecked.
- Checks: precheck PASS; proof-layout 4 steps 0 defects; rendercheck OK; contract strict clean;
  content-policy clean.

### 6. `ex-cg-wall-form-and-line-restrictions-of-a-plane-rotation` (level 18) — verified, statement clause completed

- Claims verified: (i) trace/determinant, $S_A=(A-\mathrm{id})^{-1}$ as multiplication by
  $1/(e^{i\theta}-1)$, Wall form identity; (ii) $H_L=-\tfrac12$ on each line, $A_L=\mathrm{id}-2\Pi_L$,
  bijection lines $\leftrightarrow$ reflections below $A$, and $A_L\in\rho(W)$ exactly for the root lines;
  (iii) for $m=4$ the pair $A,w_0=A^2$ has $M(w_0)=V=M(A)$ although neither is below the other and no
  common upper bound exists, so the rigidity theorem's hypothesis is indispensable.
- Repair: new step 2.3 + extended `[F5]` (see repair 3), closing the previously unproved count in (ii).
- All 20 declared dependencies rechecked, including `thm-cg-finite-coxeter-classification-including-h-and-dihedral`
  for the $I_2(m)$ convention and `thm-cg-root-inversion-formulas-and-strong-exchange` (1)(iv).
- Checks: precheck PASS; proof-layout 7 steps 0 defects; rendercheck OK; contract strict clean;
  content-policy clean.

### 7. `ex-cg-moved-space-intersection-is-not-a-meet-in-a3` (level 18) — verified, no repair

- Claims verified: (i) $\ell_T(\gamma)=3$, $\ell_T(\alpha)=\ell_T(\beta)=2$ with $\alpha,\beta\le_T\gamma$
  via $3=2+1$; (ii) the two moved spaces are the planes $\{x_2=-x_1,x_4=-x_3\}$ and
  $\{x_2=-x_3,x_4=-x_1\}$, meeting in $\mathbb R(e_1-e_2+e_3-e_4)$, which contains no root; (iii) no
  element has that moved space, every common lower bound is $1$, and $M(1)=0$ is strictly smaller than
  the intersection: subspace intersection does not compute the order meet.
- All 12 declared dependencies rechecked. Checks: precheck PASS; proof-layout 6 steps 0 defects;
  rendercheck OK; contract strict clean; content-policy clean.

### Proof contracts (new required artifact)

`research/frontier-42-coxeter-32-batch-18.proof-contracts.json` was written (version 1, batch 18, scope
of all seven items): eight standard boundary axes per item (56 rows, each with item-specific evidence or
reason), and citations/derivations regenerated from the current item text with
`tools/regen-contract-entries.mjs` (65 citations; one per (fact, linked source) pair; every numbered step
mapped with its cited inputs). Results: `proof-contract --strict` → 0 errors, 1 warning
(`shotgun-bracket` on the factorization lemma — a routing heuristic, not an error);
`boundary-audit --fail-on-contradicted --fail-on-template` → 0 template clusters, 0 contradicted
candidates; `citation-fidelity --fail-on-missing-quote` → every quote occurs in its cited section, no
widening candidates; `finite-smoke` → no obligations selected (no `finite_smoke` entries asserted);
`risk-report` → all seven items routed to Step-5a (expected for proofs of this size).

### Checks actually run in this dispatch

- `node tools/tsx-run.mjs tools/precheck.mts <7 item paths>` → 6 checked, 0 failing (definition is
  format n/a).
- `node tools/rendercheck.mjs <7 items + 2 pages>` → OK (9 files).
- `node tools/proof-layout.mjs <7 item paths>` → 7 items, 52 steps, 0 defects (final batched run).
- `node tools/content-policy.mjs research/frontier-42-coxeter-32-batch-18.pages.json` → 7 scoped items,
  0 errors, 0 warnings.
- `node tools/depcheck.mjs --items-file <7 ids>` → selected item/page and prerequisite cycle checks
  passed.
- `node tools/fwdcheck.mjs --quiet --items-file <7 ids>` → passed; `node tools/extcheck.mjs
  --items-file <7 ids>` → 0 recorded-not-proved, 0 resting on them.
- `node tools/depsource.mjs --run frontier-42-coxeter-32 --items-file <7 ids>` → consumer coverage 7/7,
  0 unresolved.
- `node tools/prosecheck.mjs --pages-file <2 pages>` → 0 errors, 0 warnings;
  `node tools/pathcheck.mjs --pages-file <2 pages>` → OK.
- `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-18.pages.json` → 7 items, 0 errors;
  `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-18.coverage.json
  --require-destination` → 1 page, 29 harvested results, 0 errors, 0 warnings.
- `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` → all seven owned items
  clean (levels 14/15/16/17/18/18/18 as recorded); the only remaining foreign error is noted below.
- `node tools/proof-contract.mjs research/frontier-42-coxeter-32-batch-18.proof-contracts.json --strict`
  and the companion boundary/fidelity/smoke/risk commands above.

### Decisions recorded

- `record-scope --decision sufficient` for the current scope (pair manifest re-read against plan §CG-21
  and the current item files; the only statement-level change since the scaffold is the true prefix form
  of theorem clause (2)(i); no item or page added, removed or narrowed). Receipt supersedes the stale
  `0870ef0e…` receipt; the pre-author baseline `eae1b3e3…` remains in
  `research/frontier-42-coxeter-32-step3-auditor-baseline.json`.
- `record-item --decision accept --confidence 1` for all seven items, each with its examined dependency
  list and concrete evidence. `node tools/step3-decisions.mjs check --run frontier-42-coxeter-32 --phase
  final` no longer lists the pair or any of the seven items as open work.

### Step-4 / plan mismatches reported (not repaired here; edge adjudication owns them)

`node tools/frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool validate-plan` fails on the
`undeclared-prereq` class for both pages; exact verbatim lines:

- `page finite-reflection-length-and-orthogonal-moved-spaces has an item depending on
  inner-product-spaces-and-orthogonality` — chain e.g.
  `def-cg-reflection-length-absolute-order-and-moved-space → def-inner-product-space` and the Wall-form
  lemma's `cor-double-orthogonal-complement-and-dimension`, `def-orthogonal-projection`,
  `def-adjoint-of-a-linear-map-between-inner-product-spaces`, `prop-adjoint-algebra`,
  `thm-finite-dimensional-orthogonal-decomposition`.
- `page finite-reflection-length-and-orthogonal-moved-spaces has an item depending on
  hilbert-space-geometry-and-riesz-representation` — chain
  `→ def-real-and-complex-inner-product-space` (definition, Wall-form lemma) and its published consequences.
- `page finite-reflection-length-and-orthogonal-moved-spaces-examples has an item depending on
  inner-product-spaces-and-orthogonality` and `…hilbert-space-geometry-and-riesz-representation` (the
  examples' isometries and inner products).
- `page …-examples has an item depending on the-complex-exponential-and-eulers-formula` — chain
  `ex-cg-wall-form-and-line-restrictions-of-a-plane-rotation → cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`
  (and `thm-eulers-formula` via the trigonometry facts).
- `page …-examples has an item depending on fundamental-trigonometric-identities` — chain via
  `thm-double-angle-and-power-reduction-identities` and `cor-trigonometric-parity-and-pythagorean-identity`.

All six are genuine backward reading-order prerequisites of the items; the repair is to add these four
published pages to the pair's `requires` closure in `research/plan-spec.json` (Step-4 alpha owns that
edit). The same class occurs for 31 edges across many pairs of this run, so it needs one coordinated
Step-4 pass; no pair-local workaround was applied.

### Flags carried to Step 5 (direct-consumer window)

- `thm-cg-carter-reflection-length-and-absolute-order`, corrected clause (2)(i): the direct consumer
  `lem-cg-ordered-root-pairings-and-simple-systems` (batch 19, authored 19:53) already restates the same
  prefix form, so no conflict exists there; the remaining declared consumers
  `def-cg-brady-watt-ordered-spherical-root-complex`, `lem-cg-ordered-root-complex-is-geometric-simplicial`,
  `thm-cg-root-complex-convex-cones-and-facet-induction`, `ex-cg-cone-intersection-versus-moved-space-meet-in-a3`
  (batch 19) and the batch-31 items listed in the manifests are not yet authored, and their uses must be
  rechecked when they land.
- `ex-cg-wall-form-and-line-restrictions-of-a-plane-rotation`, new step 2.3: its direct reference
  consumers are the two owned pages only; recorded in the batch-18 cross-batch input (row for
  `thm-cg-root-inversion-formulas-and-strong-exchange` updated with the step 2.3 use and the unified
  ledger refreshed). No other batch consumes the example.

### Other observations (not owned)

- `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` still reports one foreign
  error, `ex-cg-reducible-semidefinite-forms-are-factorwise: dependency_level 15 differs from computed
  16` (another pair's item; its owner). Two similar foreign errors seen at entry were resolved by other
  writers while this dispatch ran.
- The engine blocker recorded at ~20:58 local (`3b-author: reading the exclusive cohort failed — Bad
  escaped character in JSON at position 51466`) is no longer reproducible: all 64
  `research/frontier-42-coxeter-32-batch-*.pages.json` and `.coverage.json` files parse; the batch-18
  manifests are valid. No edit was needed.
- The run-level `merge-contracts` gate cannot pass until the remaining 16 batch proof-contract files are
  written by their pairs; batch 18 is now present and self-consistent.

### Handoff summary

- Completed IDs: `def-cg-reflection-length-absolute-order-and-moved-space`,
  `lem-cg-orthogonal-wall-form-and-subspace-restriction`,
  `lem-cg-reflection-factorizations-and-independent-normals`,
  `thm-cg-carter-reflection-length-and-absolute-order`,
  `ex-cg-simple-and-reflection-length-of-a-long-transposition-in-s5`,
  `ex-cg-wall-form-and-line-restrictions-of-a-plane-rotation`,
  `ex-cg-moved-space-intersection-is-not-a-meet-in-a3`; both pages authored and registered; no new
  item or page was added (no added suppliers).
- Open obligations: none within the pair for Step 3; the Step-4 undeclared-prereq adjudication and the
  Step-5 direct-consumer window above are flagged with exact IDs.
- The report's earlier open obligation 1 (in-run suppliers scaffold-only) is cleared: all 46 dependency
  item files exist and every clause used by this pair was rechecked against the current statements; the
  batch-18 proof-contract citations quote the current supplier statements.

### Addendum (same dispatch): receipt refresh against current inputs

The seven item receipts recorded at 21:29 were invalidated within minutes: concurrent writers
elsewhere in the run changed shared supplier bytes in the items' transitive input closure (the same
invalidation is visible on many other pairs' step3b receipts), so `step3-decisions check --phase final`
reported "current item audit required" for all seven, with the item files themselves unchanged. All
seven decisions were re-recorded with the same evidence and dependency lists against the current
inputs; the check then reported no open entry for the pair or the seven items. The Step-3 pre-gate
recertification pass required by the run's rules will re-hash every Step-3 item once writers drain, so
a further refresh is expected only if other writers again change bytes inside this pair's dependency
closure. No content or dependency change was made by this refresh.
