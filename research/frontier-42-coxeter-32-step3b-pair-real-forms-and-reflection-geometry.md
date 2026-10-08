# Step 3b — scaffold auditor and item author: real-forms-and-reflection-geometry

Run: `frontier-42-coxeter-32` · role: alpha-high · batch 4 · design label CG-01 · orders 1724/1725
A page: `real-forms-and-reflection-geometry` · B page: `real-forms-and-reflection-geometry-examples`
Dispatches (this pair was dispatched three times): `…-3e8b88a708dc46b7` (08:04Z,
authored carriers A1, A2, A3, A5 and the proof contracts), `…-e7736c3f61d7564e`
(09:21Z, authored the remaining carriers and both pages), and `…-827c8c9244c96ae8`
(09:49Z, this completing pass: audit, one repair, supplier reconciliation, checks,
scope refresh and item decisions). All three attempts worked on the same disk
state; this report is the single pair artifact.

## Owned IDs and open obligations (entry record)

| # | item | kind | page | level | status at entry |
|---|---|---|---|---|---|
| 1 | `def-cg-real-coxeter-form-and-reflection` | definition | A | 1 | scaffold only; hh supplier unauthored |
| 2 | `lem-cg-reflection-form-invariance-and-rank-two-orders` | lemma | A | 2 | scaffold only; hh supplier unauthored |
| 3 | `ex-cg-null-normal-admits-no-displayed-reflection` | example | B | 2 | scaffold only |
| 4 | `def-cg-canonical-reflection-homomorphism` | definition | A | 3 | scaffold only; hh supplier unauthored |
| 5 | `ex-cg-finite-dihedral-rotation-and-infinite-unipotent-rank-two-product` | example | B | 3 | scaffold only |
| 6 | `ex-cg-reflection-matrices-in-positive-lorentzian-and-radical-planes` | example | B | 3 | scaffold only |
| 7 | `lem-cg-reflection-representation-descends-and-root-norms` | lemma | A | 4 | scaffold only; hh supplier unauthored |
| 8 | `def-cg-dual-chambers-and-reflection-hyperplanes` | definition | A | 5 | scaffold only; hh supplier unauthored |
| 9 | `lem-cg-dual-action-and-chamber-faces-exist` | lemma | A | 6 | scaffold only; hh supplier unauthored |

Open obligations at entry (rechecked against disk on 2026-10-07):

- **Unfinished in-run supplier `def-hh-coxeter-matrix-word-group-and-length`** (batch 2,
  page `coxeter-presentations-exchange-and-reduced-word-theorems`, level 0). No
  `items/def-hh-coxeter-matrix-word-group-and-length.md` exists. Its scaffolded
  interface is the Coxeter matrix convention, the presented group `W` and the universal
  property. Every A item of this pair declares it directly (`deps`), so their item
  decisions stay escalated until the supplier is authored and its actual use verified.
  The three B examples consume it only through the A-page items (no direct use).
- The A page's fourth `requires` target (`coxeter-presentations-exchange-and-reduced-word-theorems`)
  is the same unfinished batch-2 page; the batch-4 cross-batch input carries the seven
  `open` rows for it (one page row + six item rows).
- No other dependency of this pair is absent from the published library or the current
  scaffold (checked over the 45 distinct deps at Step 3a and rechecked during authoring).

Checkpoints and the item-by-item record follow in the sections below.

## Continuation record (attempt `…-827c8c9244c96ae8`, 2026-10-07)

State found on entry. All nine carriers and both library pages existed on disk
(written by attempts 1–2); the in-run supplier `def-hh-coxeter-matrix-word-group-and-length`
had been authored at 19:10 local; the batch-4 manifest statements had been
synchronized with the authored item statements (so the 3a scope hash was stale);
`research/frontier-42-coxeter-32-batch-4.proof-contracts.json` covered all nine
items; no item decisions existed. This pass re-read every carrier, every direct
supplier and the 3a report, independently recomputed the load-bearing
computations, made the repairs below, reconciled the supplier rows, refreshed
the scope receipt, and recorded all nine item decisions.

Repairs made in this pass (only these two files were edited):

1. `items/ex-cg-finite-dihedral-rotation-and-infinite-unipotent-rank-two-product.md`
   (plus its manifest mirror): the closing clause of the Example said "the
   corresponding pair in $W$ carries no finite braid relation". That wording can
   be read as the unproved group-theoretic claim that $st\in W$ has infinite
   order. It was rewritten to the precise syntactic fact the argument supports
   (the relator set of the presentation contains no $(st)^k$ for finite $k$ when
   $m(s,t)=\infty$; "the order of the element $st\in W$ itself is not decided
   here"), the corresponding Verification sentence 2.1 was aligned, and
   `def-hh-coxeter-matrix-word-group-and-length` was added to `deps` (level
   stays 3) and to the manifest deps. All Statement clauses, numbers and
   promised claims are otherwise unchanged.
2. `library/coxeter-groups/real-forms-and-reflection-geometry.md`: one prose
   sentence said the infinite case "covers the closed half-plane
   $\{\varphi:\varphi(e_s+e_t)\ge0\}$". It now states the exact union proved by
   A6, $\{\varphi:\varphi(e_s+e_t)>0\}\cup\{0\}$ (the closed half-plane with the
   nonzero boundary points removed) with the integer wall traces.

## Item checkpoints (dependency-level order)

### 1. `def-cg-real-coxeter-form-and-reflection` (A, level 1) — accept

- Claim/conventions: finite $S$, Coxeter matrix $m$ ($m(s,s)=1$,
  $m(s,t)=m(t,s)\in\{2,3,\dots\}\cup\{\infty\}$), $V=\mathbb R^S$, $c(s,t)$,
  the unique symmetric bilinear form $B$ with $B(e_s,e_t)=-c(s,t)$ (diagonal
  $1$), radical, $B$-preserving maps, and $r_a(v)=v-2B(v,a)a/B(a,a)$ only for
  $B(a,a)\ne0$. No definiteness or nondegeneracy is presumed; linearity,
  involutivity and the hyperplane property are explicitly deferred to A2.
- Suppliers read: `def-hh-coxeter-matrix-word-group-and-length` (matrix
  convention, verbatim), `def-function-space`, `def-bilinear-symmetric-skew-and-alternating-forms`,
  `thm-bilinear-forms-correspond-to-linear-maps-into-the-dual` (existence and
  uniqueness of $B$ from basis data), radical and definiteness vocabulary items,
  `def-sine-and-cosine-by-power-series`, `def-pi-via-first-positive-cosine-zero`,
  `thm-quarter-turn-values-and-shift-formulas` ($\cos\pi=-1$), `thm-reals-ordered-field`.
  Statement checked against Davis §6.12 (6.32)-(6.33) (downloaded this pass;
  stamp below): $B_M(e_i,e_j)=c_{ij}$ with diagonal $1$, and
  $\rho_i(x)=x-2B_M(e_i,x)e_i$ is exactly the displayed $r_{e_i}$.
- Checks: `precheck` n/a (definition); rendercheck OK; proof-layout 0 defects;
  proof-contract `--strict` 0 errors; content-policy 0 errors; depcheck names
  nothing. Decision `accept` with the examined dependency list (11 IDs).

### 2. `lem-cg-reflection-form-invariance-and-rank-two-orders` (A, level 2) — accept

- Claim: $B$ well defined and unique; $r_a$ linear, involutive,
  $B$-preserving, fixes the hyperplane $\ker B(-,a)$; the rank-two Gram matrix
  $\begin{pmatrix}1&-c\\-c&1\end{pmatrix}$ is positive definite for finite $m$
  (square-sum identity) and positive semidefinite with radical $\mathbb R(e_s+e_t)$
  for $m=\infty$; $r_s,r_t$ fix $P^\perp$ and $V=P\oplus P^\perp$ for finite
  $m$; $[r_sr_t]=\begin{pmatrix}4c^2-1&-2c\\2c&-1\end{pmatrix}$, $\det 1$;
  finite $m$: trace $2\cos(2\pi/m)$, exact order $m$; $m=\infty$: unipotent
  $I_2+N$ with $N\ne0$, $N^2=0$ and $A^k=I_2+kN$ for all $k\in\mathbb Z$.
- Independent check (all recomputed from the text): steps 1.1–3.1 verified
  including the four-term cancellation in the $B$-preservation expansion, the
  rank-nullity hyperplane, the sine-formula $A^k=(\sin 2k\theta\,A-\sin 2(k-1)\theta\,I)/\sin 2\theta$
  and the $m\mid k$ minimality argument (the off-diagonal $-2c\ne0$ for $m\ge3$
  is justified), the unipotent binomial computation, and the direct-sum step.
  Trig identities are exactly the cited ones; no Choice; no later item is used.
- Checks: precheck PASS; rendercheck OK; proof-layout 0 defects;
  proof-contract `--strict` 0 errors; content-policy 0 errors. Decision
  `accept` (28 examined dependency IDs).

### 3. `ex-cg-null-normal-admits-no-displayed-reflection` (B, level 2) — accept

- Claim: for $a\ne0$ with $B(a,a)=0$, $a\in\ker B(-,a)$ and **no** linear
  $r$ has $r^2=\mathrm{id}$, $r(a)=-a$ and $r|_{\ker B(-,a)}=\mathrm{id}$;
  Lorentzian instantiation ($a=e_1+e_2$, $a\notin\operatorname{rad}$) and
  radical-plane instantiation ($\ker B(-,e_2)=V$) displayed.
- Independent check: the general contradiction $2a=0$ with $a\ne0$ is
  immediate and hypotheses are correctly instantiated; the radical-plane
  sentence "only the identity fixes $V$" is the correct reading. Statement is
  `ai-generated` with `generation.role: example`; not a deps target.
- Checks: precheck PASS; rendercheck OK; proof-layout 0 defects;
  proof-contract `--strict` 0 errors; content-policy 0 errors. Decision
  `accept`.

### 4. `def-cg-canonical-reflection-homomorphism` (A, level 3) — accept

- Claim: names $\rho:W\to\mathrm{GL}(V)$ with $\rho(s)=r_s$ through the
  universal property (existence/uniqueness delegated to its recorded justifier
  A4), defines $\Phi$, $T$, $V_+$ and $-V_+$, and explicitly abstains from
  positivity, faithfulness, discreteness and nondegeneracy. No $V\cong V^*$
  identification.
- Suppliers read: A1, A2, `def-hh-…` (universal property verbatim), the
  $V^*$/linear-map/unit-group items cited. Checked against Davis Corollary
  6.12.4/Definition 6.12.5 locator.
- Checks: precheck n/a; rendercheck OK; proof-layout 0 defects;
  proof-contract `--strict` 0 errors; content-policy 0 errors. Decision
  `accept` (10 examined dependency IDs).

### 5. `ex-cg-finite-dihedral-rotation-and-infinite-unipotent-rank-two-product` (B, level 3) — repaired

- Claim: $m=3$ gives $A=\begin{pmatrix}0&-1\\1&-1\end{pmatrix}$ of exact order
  $3$ (trace $-1=2\cos 2\pi/3$), $m=2$ gives $A=-I_2$ of order $2$, and
  $m=\infty$ gives $A=I_2+N$, $N\ne0$, $N^2=0$, $A^k=I_2+kN$ for all
  $k\in\mathbb Z$, hence infinite order, with the presentation imposing no
  braid relator.
- Independent check: all three matrix computations, the $c=1/2$ derivation
  from the triple-angle identity, and the $A^k(e_s)=e_s+2k(e_s+e_t)$ orbit
  were recomputed (they match Davis Lemma 6.12.3's $(\rho_i\rho_j)^n(e_i)=2nu+e_i$,
  $u=e_i+e_j$).
- Repair: see the continuation record; the statement now states only the
  relator-set fact about $W$ and explicitly leaves the order of $st$ undecided;
  the manifest statement and deps were synchronized and the new supplier link
  was declared.
- Checks after the edit: precheck PASS; rendercheck OK; proof-layout 0
  defects; proof-contract `--strict` 0 errors; boundary-audit exit 0;
  content-policy 0 errors; depcheck names nothing. Decision `repaired`.

### 6. `ex-cg-reflection-matrices-in-positive-lorentzian-and-radical-planes` (B, level 3) — accept

- Claim: positive plane ($a=\frac35e_1+\frac45e_2$,
  $[r_a]=\frac1{25}\begin{pmatrix}7&-24\\-24&-7\end{pmatrix}$, involution,
  $\det-1$, inertia $(2,0,0)$, fixed line $\mathbb R(-4e_1+3e_2)$);
  Lorentzian ($a=2e_1+e_2$, $[r_a]=\frac13\begin{pmatrix}-5&4\\-4&5\end{pmatrix}$,
  involution, $\det-1$, $B$-invariance on the basis, inertia $(1,1,0)$);
  radical plane ($B(x,y)=x_1y_1$, $r_a=\operatorname{diag}(-1,1)$, fixed
  hyperplane $=\operatorname{rad}(B)=\mathbb Re_2$, $e_2$ null and excluded).
- Independent check: every entry, square, determinant and invariance identity
  recomputed; the fixed line solves $\frac35x_1+\frac45x_2=0$.
- Checks: precheck PASS; rendercheck OK; proof-layout 0 defects;
  proof-contract `--strict` 0 errors; content-policy 0 errors. Decision
  `accept`.

### 7. `lem-cg-reflection-representation-descends-and-root-norms` (A, level 4) — accept

- Claim: relators $s^2$ and $(st)^{m(s,t)}$ map to the identity, giving a
  unique $\rho:W\to\mathrm{GL}(V)$; every $\rho(w)$ preserves $B$; roots have
  unit norm; $gr_ag^{-1}=r_{ga}$ and $\rho(wsw^{-1})=r_{\rho(w)e_s}$.
- Independent check: relator verification (using A2's exact order and
  $r_s^2=\mathrm{id}$), the descent through the supplier universal property,
  the subgroup argument $H=W$ (closed under products and inverses, contains
  $S$), and the conjugation computation
  $B(g^{-1}v,a)=B(v,ga)$ were all re-derived. Uniqueness legitimately uses that
  the images of $S$ generate $W$; no exact order of $st\in W$ is used. No
  Choice.
- Checks: precheck PASS; rendercheck OK; proof-layout 0 defects;
  proof-contract `--strict` 0 errors; content-policy 0 errors. Decision
  `accept` (12 examined dependency IDs).

### 8. `def-cg-dual-chambers-and-reflection-hyperplanes` (A, level 5) — accept

- Claim: the contragredient action $(w\cdot f)(v)=f(\rho(w)^{-1}v)$ (used
  even when $B$ is degenerate, with no $V\cong V^*$ identification), the
  closed chamber, its interior, the faces $C_I$ vanishing exactly on $I$, and
  the root hyperplanes $H_\alpha$; nonemptiness and orbit/tiling claims
  delegated to its justifier A6.
- Independent check: definitions are consistent with A6's use
  ($C_S=\{0\}$ needs only that $\{e_s\}$ spans $V$); the wording of $C_I$ as
  relative-interior faces is the scaffold contract's.
- Checks: precheck n/a; rendercheck OK; proof-layout 0 defects;
  proof-contract `--strict` 0 errors; content-policy 0 errors. Decision
  `accept` (8 examined dependency IDs).

### 9. `lem-cg-dual-action-and-chamber-faces-exist` (A, level 6) — accept

- Claim: the dual action is an action by linear maps; every face $C_I$ is
  nonempty ($f_I=\sum_{s\notin I}f_s$), $C^\circ\ne\emptyset$, $C_S=\{0\}$;
  rank two: dual generators $(-y_s,2cy_s+y_t)$, $(y_s+2cy_t,-y_t)$ with
  $\delta$-invariance iff $c=1$; finite $m$: $W_{s,t}$ dihedral of order $2m$,
  the $2m$ chambers are exactly the sectors of the $m$ root hyperplanes, with
  disjoint interiors, union $P^*$, simple transitivity and separation; infinite
  $m$: disjoint interiors, union $\{\delta>0\}\cup\{0\}$, separation, and wall
  traces exactly the integers on $\{\delta=1\}$.
- Independent check of the whole proof (1.1–4.1) including: the orthonormal
  frame $u=e_s$, $v=(e_t+c e_s)/\sin\theta$, $A$ = rotation by $2\theta$ of
  exact order $m$; the root list $\{(\cos j\theta)u+(\sin j\theta)v\}$ of
  $2m$ unit vectors and its stability under $A$ and $r_s$; the infinite-case
  affine action $\tau\mapsto-\tau$, $2-\tau$, the unit-interval tiling, the
  roots $a-b=\pm1$ and the integer traces; the wall/root-hyperplane
  correspondence and $C_P$ the sector of angle $\theta$; $|W_{s,t}|=2m$
  (two involutions with product of exact order $m$) and simple transitivity.
  The dual generator formulas coincide with Davis Lemma D.1.5 Case 1
  ($s\cdot\xi=-\xi+2\phi$, $t\cdot\xi=\xi$, $s\cdot\phi=\phi$,
  $t\cdot\phi=2\xi-\phi$).
- Source qualification (see below): the item's infinite-case union is exactly
  $\{\delta>0\}\cup\{0\}$, which the direct computation confirms; Davis's
  printed Example D.2.1(i) sentence "U is the half-plane $x_1+x_2\ge0$" is
  inexact at the punctured boundary line. The item proves the exact statement.
- Checks: precheck PASS; rendercheck OK; proof-layout 0 defects;
  proof-contract `--strict` 0 errors (73 exact-quote citations over the nine
  items); boundary-audit exit 0; citation-fidelity all quotes found;
  content-policy 0 errors. Decision `accept` (22 examined dependency IDs).

## Pages

- `library/coxeter-groups/real-forms-and-reflection-geometry.md`: lists the six
  A items in dependency order and summarizes A1–A6 with the exact caveats
  (no definiteness/nondegeneracy presumed; $r_a$ undefined for null normals;
  positivity/faithfulness left to later pages; the dual action used for
  degenerate $B$). One prose sentence was corrected in this pass (see the
  continuation record). rendercheck OK; depcheck names neither page.
- `library/coxeter-groups/real-forms-and-reflection-geometry-examples.md`: lists
  the three B examples, marks the page as a dependency leaf and summarizes each
  computation. rendercheck OK.

## Source verification and qualifications

This pass re-downloaded <https://people.math.osu.edu/davis.12/davisbook.pdf>
and verified sha256-16 `ccefbb950fdcfce9` against the run's fetch stamp, then
read the load-bearing pages in full:

- §6.12, printed pp. 116–117: (6.32), (6.33), Lemma 6.12.3 with its proof
  (positive definiteness of the rank-two form for $m\ne\infty$; the
  $(\rho_i\rho_j)^n(e_i)=2nu+e_i$ computation for $m=\infty$; the rotation
  through $2\pi/m$ and the orthogonal decomposition) and Corollary 6.12.4
  (relator check and extension of $s_i\mapsto\rho_i$). A1, A2, A4, A6 and the
  three examples use exactly these claims.
- Appendix D.1, printed pp. 440–441: Lemma D.1.5 Case 1 (the dual generators,
  the affine line, reflections about $0$ and $1$) and Case 2 (positive
  definiteness, the sector of angle $\pi/m$); Example D.2.1(i), printed p. 442.
  **Source qualification:** the printed clause "U is the half-plane
  $x_1+x_2\ge0$" is not literally the union of the closed chambers: the
  functional $\delta(x)=x_1+x_2$ is $W$-invariant and every chamber cone has
  $\delta>0$ except at the origin, so the union is
  $\{\delta>0\}\cup\{0\}$, i.e. the closed half-plane minus the nonzero points
  of its boundary line. Davis's own Case 1 proof ($vC$ "on the positive side of
  0") is consistent with this, and the authored A6 statement proves the exact
  union. No repair to any published item is implied; this is a caveat on the
  citation, recorded for the ledger owners.

## Cross-batch supplier reconciliation

- The single in-run supplier named by the batch-4 cross-batch input,
  `def-hh-coxeter-matrix-word-group-and-length` (batch 2), is now authored on
  disk. Its Definition states the Coxeter-matrix convention, builds
  $W=F(S)/N$ with relator set $\{s^2\}\cup\{(st)^{m(s,t)}:m(s,t)<\infty\}$, and
  states the universal property. Every consuming clause of A1–A6 (and of the
  repaired example) was checked against it: A1 (2), A2 (3)(i)/(iv), A3 (1),
  A4 (1) and step 3.1 (relators + generating set), A5 (1), A6 (1) and (3), and
  the example's relator-set sentence. No mismatched hypothesis or missing use
  was found.
- `research/frontier-42-coxeter-32-batch-4.cross-batch-dependencies.json`:
  all eight batch-4-owned rows (one page prerequisite plus seven item edges)
  now carry `verified` evidence naming the exact statement clause used; the
  seventh item row (the example $\to$ `def-hh-…`) was added because the repair
  introduced that declared edge. No other batch's rows were touched.
  `frontier-dependency-ledger.mjs refresh` succeeds; all 32 batch inputs are
  present, batch-4 edges have 0 missing reviews and there are no orphaned
  reviews.

## Checks actually run (2026-10-07, this pass)

| check | command | result |
|---|---|---|
| proof format (explicit paths) | `node tools/tsx-run.mjs tools/precheck.mts items/<9 paths>` | `6 checked, 0 failing` (3 definitions n/a) |
| layout after final edits | `node tools/proof-layout.mjs items/<9 paths>` | `9 items, 38 steps, 0 defects` |
| rendering | `node tools/rendercheck.mjs items/<9> library/<2 pages>` | OK — 11 files |
| content policy (pair scope) | `node tools/content-policy.mjs research/frontier-42-coxeter-32-batch-4.pages.json` | `9 scoped item(s), 0 error(s), 0 warning(s)` |
| strict proof contracts | `node tools/proof-contract.mjs research/…-batch-4.proof-contracts.json --strict` | `0 error(s), 9/9 item(s) checked` |
| boundary audit | `node tools/boundary-audit.mjs …-batch-4.proof-contracts.json --fail-on-contradicted --fail-on-template --json` | exit 0 after repairing a 3-member template cluster (see below) |
| citation fidelity | `node tools/citation-fidelity.mjs …-batch-4.proof-contracts.json --fail-on-missing-quote` | 73 citations, every quote found |
| finite smoke | `node tools/finite-smoke.mjs …-batch-4.proof-contracts.json` | 0 errors (no contract selects a registered smoke check for this pair) |
| coverage checklist | `node tools/coverage-checklist.mjs …-batch-4.coverage.json --require-destination` | 26 harvested results, 0 errors |
| source backing | `node tools/source-backing.mjs --coverage …-batch-4.coverage.json --liveness …-url-liveness.json` | 9/9 authored results backed |
| manifest deps | `node tools/manifest-deps.mjs research/…-batch-4.pages.json` | `9 item(s), 0 normalized, 0 error(s)` |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | no error names a pair item (run-wide failure is one other batch's item, see below) |
| depcheck | `node tools/depcheck.mjs --quiet` (and frontier gate) | no finding names a pair item or page |
| validate-plan | `node tools/frontier-item-gate.mjs --run … --tool validate-plan` | no pair finding; run-wide FAIL comes only from other pairs' `undeclared-prereq` rows |
| depsource | `node tools/frontier-item-gate.mjs --run … --tool depsource` | exit 0; every pair dep resolves to its supplier page |
| pathcheck | `node tools/frontier-item-gate.mjs --run … --tool pathcheck` | 2 pathway files, 0 errors, 0 warnings |
| dependency ledger | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` | refreshed; batch-4 edges all reviewed |
| item decisions | `node tools/step3-decisions.mjs check --run … --phase final` | `accepted 9` — exactly this pair's nine items; no work row names a pair item |

Repair performed to pass the boundary audit: the three examples shared one
verbatim `iff-reverse` not-applicable rationale, which the gate flags as
template reuse; each was replaced by a case-specific disposition (null normal /
finite-versus-infinite comparison / one-way matrix computations).

## Item decisions and scope refresh

- All nine original scaffold IDs were recorded with
  `node tools/step3-decisions.mjs record-item --confidence 1` and their full
  examined dependency lists: eight `accept` (A1, A2, B2, A3, B3b, A4, A5, A6)
  and one `repaired` (B3a, the precision repair above). Receipts:
  `research/frontier-42-coxeter-32-step3b-review-<id>.json`. No `--owner` flag,
  no escalation, no judge/audit stamp was used.
- The Step-3a scope receipt for this pair was stale because the earlier attempts
  had synchronized the manifest statement texts with the authored items. It was
  refreshed by this pass with
  `record-scope --decision sufficient` after re-checking that ids, kinds,
  titles, orders, category and the four `requires` are unchanged, that CG-01 is
  realized item-for-item, and that the only semantic sharpening (A6's exact
  infinite-case union) corrects the scaffold paraphrase rather than narrowing a
  promise. The earlier 3a review receipt and its report are preserved as
  `research/frontier-42-coxeter-32-step3a-pair-real-forms-and-reflection-geometry.md`
  and the scope hash in the refreshed receipt.
- No new item or page was added; the pair is exactly the batch-4 manifest
  (6 A items + 3 B examples, two pages). No published item was edited.

## Step-3a findings disposition

The 3a pair report recorded no scope shortfall and four advisories: (i) four
`redundant-prereq` warnings on the A page's `requires` — retained, they are the
owner-approved plan and the drift review left them intact; (ii) the finite
rank-two tiling derivation risk — resolved by A6's explicit orthonormal-frame
proof, independently recomputed; (iii) the batch-2 supplier conditional —
discharged by the authored `def-hh-coxeter-matrix-word-group-and-length` and
the eight verified ledger rows; (iv) the 3a uncertainty about "the rank-two
half-space strength" — resolved as the exact union statement above.

## Open obligations, published concerns, cross-pair observations

- No open mathematical obligation remains for this pair. The accept/repaired
  receipts are closure-sensitive: any later edit to a transitive supplier
  (`def-hh-…` and the published suppliers) invalidates the recorded hash and the
  Step-3 pre-gate recertification must re-record the affected items on drained
  content. Sibling Step-3b writers were still active while this report was
  written, so a later change to `def-hh-…` would require re-checking the eight
  batch-4 ledger rows.
- Published concerns: none confirmed in the suppliers this pair consumes. The
  only source caveat is the Davis Example D.2.1(i) phrasing recorded above
  (source imprecision at the punctured boundary; confidence high from the
  direct $\delta$-invariance computation; no repair to any published carrier is
  implied).
- Cross-pair observations for the serial reconciler / other owners (none of
  these is a batch-4 obligation):
  - `depcheck` `cited-not-in-deps`: `ex-cg-dihedral-gram-determinants-and-low-rank-coincidences`
    and `lem-cg-finite-coxeter-orbit-polytopes-and-face-metrics` cite
    `lem-cg-reflection-representation-descends-and-root-norms`, and
    `lem-cg-exceptional-parabolic-orbit-length-certificates` cites
    `def-cg-real-coxeter-form-and-reflection`, without listing the cited item in
    `deps`. Their own authors must declare these edges (this pair's statements
    are unchanged since the check).
  - `item-dependency-levels` run-wide error:
    `ex-cg-reducible-semidefinite-forms-are-factorwise: dependency_level 15
    differs from computed 16` (another pair's item).
  - `validate-plan` run-wide `undeclared-prereq` findings in sibling pairs
    (e.g. `coxeter-descents-poincare-polynomials-and-growth`,
    `finite-reflection-length-and-orthogonal-moved-spaces-examples`) — their
    authored item deps extend beyond the declared page `requires` closure.
  - `fwdcheck` run-wide failures include `focus-item-unknown` for items such as
    `cex-cg-rank-two-inversion-set-violating-closure` (batch 29) whose carriers
    are not yet on disk; none names a batch-4 item.

## Handoff state

The pair is complete for Step 3b: nine authored carriers with complete proofs,
both pages authored, manifest/pages/contracts/coverage synchronized, the
in-run supplier reconciled with eight `verified` ledger rows, the scope receipt
refreshed, all nine item decisions recorded (`8 accept + 1 repaired`,
confidence 1), and every check this pair can run green on its own scope. The
remaining run-wide gate failures all name other batches' unfinished or
inconsistent carriers; Step 4 must not splice before those clear.
