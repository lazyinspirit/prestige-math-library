# Step 3b author notes and dispatch report — unbounded self-adjoint operators and Stone's theorem

Run `phase-2-remaining-27`, batch 6, dispatch
`step3b-pair-unbounded-self-adjoint-operators-and-stones-theorem-17269a01fac8ae20`.
Owned pair: A `unbounded-self-adjoint-operators-and-stones-theorem` (41 items),
B `unbounded-self-adjoint-operators-and-stones-theorem-examples` (7 items).
Status: **complete for this pair** (all 48 items authored, decided and checked; final report below).

## Conventions fixed by this dispatch

- Complex Hilbert space $H$, inner product linear in the first variable.
- Resolvent sign: $R_T(z)=(z-T)^{-1}$ (matches batch-2's bounded convention and
  Williams Definition 7.29); the batch-5 Stone formula is not consumed here.
- Symmetric means $T\subseteq T^*$; self-adjoint means $T=T^*$ (domain
  included); $C_T=(T-i)(T+i)^{-1}=I+2iR_T(-i)$.
- $K_\pm$: $K_+=\ker(T^*-i)$, $K_-=\ker(T^*+i)$ (Teschl (2.104)).
- Form domain: $Q(A)=D((A-cI)^{1/2})$; the form norm used is
  $\|x\|_{Q}=(\|x\|^2+\|(A-cI)^{1/2}x\|^2)^{1/2}$, since $q_A[x]^{1/2}$ alone
  can be a seminorm at $c=0$ and is not real-valued for $c<0$.

## Source material read

- Williams, *Lecture Notes on the Spectral Theorem*, §7 pp.28-39 (Definitions
  7.3-7.29, Prop. 7.20, Example 7.23, Theorems 7.34/7.35/7.37).
- Teschl, *Mathematical Methods in Quantum Mechanics* 2nd ed.: (2.104)-(2.108)
  and Theorems 2.26/2.27 (defect indices, Cayley, extension formula),
  Theorem 3.2 and (3.26)-(3.36) (PVM calculus), Theorem 4.12/4.14 with
  Problem 4.11 (max-min/min-max), Theorem 5.1/5.3 (Stone), Lemma 6.2/6.3/6.5
  and Theorem 6.4 (Kato-Rellich), Lemmas 6.17-6.23 and Theorems 6.19/6.20
  (Weyl criterion, Weyl's theorem), (6.49), Theorems 6.31 and Corollaries
  6.32-6.35 (norm/strong resolvent convergence), Lemma 6.34.
- Schnaubelt, *Evolution Equations*, §1.1 pp.5-13 (generator, Laplace
  resolvents, Stone converse, bounded generator versus norm continuity).
- PDFs fetched 2026-09-17 to /tmp/b6 (teschl.pdf, williams.pdf,
  schnaubelt.pdf); the min-max, Stone, Kato-Rellich, Weyl and resolvent
  convergence passages were read in the extracted text, not from summaries.

## Scaffold repairs decided and applied (with reasons)

1. **`cex-symmetric-need-not-be-self-adjoint` scaffold claim is false as
   written.** The scaffold said $T^*$ is "a proper closed symmetric extension
   of $T$". For the minimal operator $T=-i\,d/dx$ on
   $D(T)=\{f\in AC[0,1]:f'\in L^2,\ f(0)=f(1)=0\}$ one has
   $D(T^*)=\{g\in AC:g'\in L^2\}$ and
   $\langle T^*g_1,g_2\rangle-\langle g_1,T^*g_2\rangle=-i(g_1(1)\overline{g_2(1)}-g_1(0)\overline{g_2(0)})$,
   which is nonzero for $g_1(x)=x$, $g_2=1$; so $T^*$ is not symmetric.
   Repair: the item proves the correct chain - $T$ is closed symmetric and not
   self-adjoint, $T^*$ is a proper closed (nonsymmetric) extension, and the
   periodic domain $D_2=\{g:g(0)=g(1)\}$ carries a closed symmetric extension
   strictly between $T$ and $T^*$. The promised conclusion (symmetric need not
   be self-adjoint) is unchanged.
2. **`thm-closure-of-a-closable-operator` needs Countable Choice.** The
   sequence criterion is equivalent to the choice-free graph condition only
   through the metric "closure = sequential closure" step, which selects points
   from nested neighbourhoods. The item now assumes $\mathrm{AC}_\omega$ and
   declares `def-countable-choice`; the scaffold's "choice-free" audit row was
   too strong.
3. **Form-norm wording in `lem-spectral-form-domain-and-core-of-a-semibounded-operator`
   (pending):** the scaffold's "form norm $q_A[x]^{1/2}$" is only a norm when
   $c\ge0$ and $A$ has trivial kernel; the item states the density claim in the
   norm $\|x\|_Q$ above and notes the equivalence for $c\ge0$.
4. **Kato-Rellich lower bound** as scaffolded,
   $A+B\ge\gamma-\max\{a|\gamma|+b,\ b/(1-a)\}$, is what the derivation from
   Teschl's estimate (6.3) gives; it is retained and derived.

## Progress log (item: status | key decisions)

- A01 `def-unbounded-linear-operator-domain-and-graph`: authored (definition;
  graph = linear subspace, extension order, H+ H completeness proved in prose).
- A02 `def-densely-defined-closed-and-closable-operator`: authored; graph-norm
  dictionary proved (norm, completeness iff closed, core density).
- A03 `thm-closure-of-a-closable-operator`: authored under AC_w; single-valued
  graph closure; least closed extension. precheck PASS.
- A04 `def-adjoint-of-a-densely-defined-unbounded-operator`: authored
  (extension of bounded functionals + Riesz, uniqueness).
- A05 `lem-unbounded-adjoint-is-well-defined-and-closed`: authored; closedness,
  ker/ran identity, inclusion reversal. PASS.
- A06 `thm-closable-iff-adjoint-domain-is-dense`: authored; W(x,y)=(-y,x) graph
  calculus, T** = closure, both directions. PASS.
- A07 `def-symmetric-self-adjoint-and-essentially-self-adjoint`: authored with
  the four consequences proved (closability, closure symmetric, maximality,
  uniqueness of the self-adjoint extension).
- A08 `cex-symmetric-need-not-be-self-adjoint`: authored; see repair 1. PASS.
- A09 `def-resolvent-and-spectrum-of-a-closed-unbounded-operator`: authored;
  closedness from nonempty resolvent set via a homeomorphism of H+ H.
- A10 `thm-self-adjoint-resolvent-estimate`: authored; identity, bound,
  sigma(T) in R. PASS.
- A11 `thm-self-adjointness-range-criterion`: authored; six equivalent forms,
  closed-range argument, (e)=>(a) by orthogonal-complement. PASS.
- A12 `def-cayley-transform-of-a-self-adjoint-operator`: authored (unitary,
  ker(I-C_T)={0}, ran(I-C_T)=D(T)).
- A13 `thm-cayley-correspondence`: authored; bijection, inverse construction,
  C_{T_U}=U and T_{C_T}=T. PASS.
- A14 `def-unbounded-integral-against-a-pvm`: authored (domain, truncation
  limit, representative independence).
- A15 `lem-unbounded-pvm-integral-is-well-defined-and-closed`: authored; norm
  identity, approximants, adjoint = conj f, normality, closedness. PASS.
- A16 `thm-spectral-theorem-for-unbounded-self-adjoint-operators`: authored;
  Cayley route via the bounded normal spectral theorem and its uniqueness
  (transport lambda -> (lambda-i)/(lambda+i)), converse by uniqueness. PASS.
- A17 `thm-unbounded-borel-functional-calculus`: authored; product/sum domains,
  closures, essential-range spectrum. PASS.

## Next action

Author A18-A41 and the seven B items in prerequisite order, then the two pages,
manifest re-sync, proof contracts, checks and decisions. See the final report
sections of this file when the dispatch closes.

## Final report

**Status: complete for this pair.** All 48 owned items are fully authored with
strict proof contracts, both pages are written, the batch manifest, coverage,
cross-batch dependency input and unified frontier ledger are updated, and all
48 item decisions are recorded (45 `accept`, 3 `repaired`) at confidence 1 with
the examined dependency ids. No escalation is open for this pair.

### Completed IDs

A page (41), in manifest order: `def-unbounded-linear-operator-domain-and-graph`,
`def-densely-defined-closed-and-closable-operator`,
`thm-closure-of-a-closable-operator`,
`def-adjoint-of-a-densely-defined-unbounded-operator`,
`lem-unbounded-adjoint-is-well-defined-and-closed`,
`thm-closable-iff-adjoint-domain-is-dense`,
`def-symmetric-self-adjoint-and-essentially-self-adjoint`,
`cex-symmetric-need-not-be-self-adjoint`,
`def-resolvent-and-spectrum-of-a-closed-unbounded-operator`,
`thm-self-adjoint-resolvent-estimate`, `thm-self-adjointness-range-criterion`,
`def-cayley-transform-of-a-self-adjoint-operator`, `thm-cayley-correspondence`,
`def-unbounded-integral-against-a-pvm`,
`lem-unbounded-pvm-integral-is-well-defined-and-closed`,
`thm-spectral-theorem-for-unbounded-self-adjoint-operators`,
`thm-unbounded-borel-functional-calculus`,
`def-strongly-continuous-one-parameter-unitary-group`,
`def-infinitesimal-generator-of-a-unitary-group`,
`lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group`,
`lem-laplace-resolvents-of-a-unitary-group`,
`lem-generator-of-a-unitary-group-is-skew-adjoint`,
`thm-stone-one-parameter-unitary-groups`,
`def-deficiency-subspaces-and-deficiency-indices`,
`thm-von-neumann-self-adjoint-extension-parameterization`,
`cor-self-adjoint-extension-exists-iff-deficiency-indices-agree`,
`def-pure-point-absolutely-continuous-and-singular-continuous-spectral-subspaces`,
`thm-canonical-spectral-type-decomposition`,
`def-relative-boundedness-with-respect-to-an-operator`,
`lem-second-resolvent-identity-for-closed-operator-perturbations`,
`thm-kato-rellich`,
`def-discrete-and-essential-spectrum-of-a-self-adjoint-operator`,
`thm-weyl-criterion-for-essential-spectrum`,
`def-relative-compactness-with-respect-to-an-operator`,
`thm-weyl-essential-spectrum-invariance`,
`def-norm-and-strong-resolvent-convergence`,
`lem-resolvent-star-algebra-is-dense-in-c-zero`,
`thm-continuous-functional-calculus-under-resolvent-convergence`,
`cor-unitary-groups-converge-under-strong-resolvent-convergence`,
`lem-spectral-form-domain-and-core-of-a-semibounded-operator`,
`thm-min-max-principle-below-essential-spectrum`.

B page (7): `ex-unbounded-multiplication-operator-and-its-domain`,
`ex-position-operator-on-l-two-of-r`,
`ex-periodic-derivative-and-its-unitary-translation-group`,
`cex-the-minimal-derivative-is-symmetric-not-self-adjoint`,
`cex-an-everywhere-defined-closed-operator-on-a-banach-space-cannot-be-unbounded`,
`cex-strongly-continuous-unitary-group-need-not-be-norm-continuous`,
`rem-self-adjoint-extensions-and-deficiency-indices`.

Pages written: `library/functional-analysis/unbounded-self-adjoint-operators-and-stones-theorem.md`
and `...-examples.md`.

### Scaffold repairs and authoring decisions (all registered)

1. **`thm-closure-of-a-closable-operator`: Countable Choice added to the
   statement** (decision `repaired`). The scaffold's axiom row said
   "choice-free"; the sequence condition is equivalent to single-valuedness of
   the graph closure only through the metric step "a point of the closure is a
   limit of a sequence", which selects from nested neighbourhoods.
2. **`cex-symmetric-need-not-be-self-adjoint`: the claim that $T^*$ is
   symmetric is false and was repaired** (decision `repaired`). For the minimal
   operator one has
   $D(T^*)=\{g\in AC[0,1]:g'\in L^2\}$ and
   $\langle T^*g_1,g_2\rangle-\langle g_1,T^*g_2\rangle=-i(g_1(1)\overline{g_2(1)}-g_1(0)\overline{g_2(0)})$,
   nonzero for $g_1(x)=x$, $g_2=\mathbf 1$. The item now proves that $T^*$ is a
   proper closed *non-symmetric* extension and that the periodic domain
   $\{g:g(0)=g(1)\}$ carries a closed symmetric extension strictly between $T$
   and $T^*$; the promised conclusion (symmetric need not be self-adjoint) is
   unchanged.
3. **`lem-spectral-form-domain-and-core-of-a-semibounded-operator`: form-norm
   wording repaired** (decision `repaired`). $q_A[x]^{1/2}$ is not a norm when
   $c=0$ and $A$ has a kernel and is not real-valued when $c<0$; the item states
   density of $D(A)$ for $\|x\|_Q=(\|x\|^2+\|(A-cI)^{1/2}x\|^2)^{1/2}$ and notes
   the equivalence for $c\ge0$.
4. **Dependency hygiene.** Undeclared body links were either declared as
   frontmatter deps (and manifest deps) or removed where they pointed to a later
   item of the same page (four definition items); the batch manifest's `deps`
   arrays were re-synced from the authored items, and the batch-6 cross-batch
   input now carries a reviewed row for every one of the 191 declared
   cross-batch edges (the scaffold recorded 20).
5. **Kato-Rellich lower bound** retained as scaffolded,
   $\gamma-\max\{a|\gamma|+b,\;b/(1-a)\}$; the derivation from Teschl's
   estimate (6.3) is given in the item, in the two cases
   $|\gamma|(1-a)\le b$ and $|\gamma|(1-a)\ge b$.

### Local suppliers added

None. The three §14.4 helpers (`lem-laplace-resolvents-of-a-unitary-group`,
`lem-resolvent-star-algebra-is-dense-in-c-zero`,
`lem-spectral-form-domain-and-core-of-a-semibounded-operator`) were already
present in the scaffold before their consumers; every other supplier used is a
published library item or a current in-run item of an earlier batch. No new
pair, page or item id was minted.

### AC and its exact use

- Choice-free: the domain/graph definitions, closure criterion (apart from the
  countable selection noted above), the adjoint definition and its closedness,
  the resolvent estimate and range criterion, the Cayley algebra, the
  $C_0(\mathbb R)$ density argument (Stone-Weierstrass), the second resolvent
  identity, and the definitional items.
- $\mathrm{AC}_\omega$: the items that use Hilbert space Riesz representation,
  the Hilbert adjoint interfaces, the double orthocomplement theorem, the
  bounded PVM integral, the Bochner integral interface (Laplace resolvents) and
  the measurable-integrability criterion; declared via `def-countable-choice`.
- Full AC: the unbounded spectral theorem and everything downstream of the
  bounded normal spectral theorem, its uniqueness, maximal orthonormal families
  and the Lebesgue decomposition: `thm-spectral-theorem-for-unbounded-self-adjoint-operators`,
  `thm-unbounded-borel-functional-calculus`,
  `lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group`,
  `thm-stone-one-parameter-unitary-groups`,
  `cor-self-adjoint-extension-exists-iff-deficiency-indices-agree`,
  the spectral-type pair, the essential-spectrum pair, the resolvent-convergence
  pair and the min-max pair; declared via `def-axiom-of-choice`.
- DC: `cex-an-everywhere-defined-closed-operator-on-a-banach-space-cannot-be-unbounded`
  through the published closed graph theorem, and the interval items that use
  the absolutely continuous calculus through its published suppliers.
- No item infers arbitrary-index choice from finite choice or DC, and no
  incompatible-axiom branch is consumed.

### Checks actually run (all on the final content)

| command | result |
| --- | --- |
| `node tools/tsx-run.mjs tools/precheck.mts <48 items>` | PASS - 32 proof-bearing items checked, 0 failing (definitions/remark have no phase body by design) |
| `node tools/rendercheck.mjs <48 items + 2 pages>` | PASS - 50 files, no math/delimiter/frontmatter/multiline-display finding |
| `node tools/proof-contract.mjs research/phase-2-remaining-27-batch-6.proof-contracts.json --strict` | PASS - 48/48 items, 0 errors, 0 warnings (232 citations with exact quotes, per-step inputs, all eight boundary dispositions per item) |
| `node tools/content-policy.mjs research/phase-2-remaining-27-batch-6.pages.json` | 48 scoped items, 0 errors, 0 warnings |
| `node tools/manifest-deps.mjs research/phase-2-remaining-27-batch-6.pages.json` | PASS - 48 items, 0 normalized, 0 errors |
| `node tools/coverage-checklist.mjs --require-destination research/phase-2-remaining-27-batch-6.coverage.json` | PASS - 2 pages, 54 harvested, 0 errors, 0 warnings |
| `node tools/depcheck.mjs --quiet` | no finding for any of the 48 items |
| `node tools/fwdcheck.mjs` | 0 open forward references; my 48 items appear only with the inherited later-material marker |
| `node tools/extcheck.mjs` | OK - every recorded-not-proved statement is a cited remark |
| `node tools/validate-plan.mjs research/plan-spec.json --repo . --max-items 60` | OK - acyclic, no item-level cycles, forward references, B-page dependencies or unresolved ids |
| `node tools/manifest-integrity.mjs --run phase-2-remaining-27` | 54 pages owed, 54 in the manifests, no scope drift |
| `node tools/splice-plan.mjs --run phase-2-remaining-27 --batch 6 --dry-run` | 2 pages spliced, 0 already correct, 48 new items; no problem for this batch |
| `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27` | refreshed; batch 6 edges all carry reviewed rows; run-wide gaps recorded below |
| `node tools/step3-decisions.mjs record-scope`/`record-item` | scope refreshed `sufficient`; 48 items recorded (45 accept, 3 repaired), confidence 1 |

### Published concerns and routed findings

- **Confirmed published defects among the suppliers used: none found.** Every
  published statement cited (Hilbert space interfaces, compact-operator
  interfaces, Bochner integration, Stone-Weierstrass, the measure-theoretic
  decomposition, the absolutely continuous calculus, the closed graph theorem)
  was read at statement level and used with its stated hypotheses.
- **Suspicion, not confirmed and not mine to repair (inherited, already
  routed):** published `thm-dual-norms-every-vector` and
  `cor-dual-separates-points` carry their choice cost only through Hahn-Banach
  (recorded by the batch-2 author); in-run draft
  `thm-existence-of-a-maximal-orthonormal-family` and
  `rem-l2-projection-agreement` carry undeclared forward references to
  `thm-choice-implies-dependent-implies-countable-choice` on a much later page.
  Neither affects the validity of anything on this pair; my items state AC or
  $\mathrm{AC}_\omega$ explicitly.
- **Notation observation (not a defect):** batch 5's
  `thm-stone-resolvent-formula-for-spectral-projections` is stated with
  $(T-(t\pm i\varepsilon))^{-1}$ while this pair fixes $R_T(z)=(z-T)^{-1}$; no
  item here consumes that formula, so the two conventions coexist only in prose.
- **Step 4 splicing mismatches (other pairs, live writers):**
  `choice-strength-in-baire-urysohn-stone-and-tychonoff` (manifest 41 versus 39
  in the plan) and `normal-moore-spaces-pmea-and-consistency-strength` (manifest
  31 versus 26). Both belong to their authors' in-flight work; the run record
  also holds the owner-held `normal-moore` blocker. I did not touch either.
- **Run-wide ledger state (other inputs):** the refreshed unified ledger covers
  833 cross-batch edges and reports 20 unreviewed edges and 262 orphaned review
  rows coming from the batch-2 and batch-5 inputs, not from batch 6; batch 6 has
  no unreviewed edge and no orphaned row.

### Open obligations

None for this pair. The three repairs above are recorded in the item
decisions; the 3a scope decision was refreshed with the repair evidence and
remains `sufficient`; the 3a coverage-locator nit (Williams's closed-spectrum
remark cited as 7.27) remains an owner edit and is unchanged here.
