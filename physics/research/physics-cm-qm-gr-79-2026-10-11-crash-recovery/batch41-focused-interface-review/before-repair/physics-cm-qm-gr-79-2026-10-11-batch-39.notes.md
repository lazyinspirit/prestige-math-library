# Batch 39 notes — Qm Math Coulomb

Run `physics-cm-qm-gr-79-2026-10-11`, role **beta**, batch **39**, covering the
single pair `qm-math-coulomb` (A, order 157) and `qm-math-coulomb-examples`
(B, order 158), category `non-relativistic-quantum-mechanics-mathematics`,
library `mathematics`. Everything on both pages is mathematics
(`domain: mathematics`); no physical interpretation, measurement model or
empirical claim is made. The binding owner direction
(`research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`) and
the design section `research/plan-non-relativistic-quantum-mechanics-track.md`
L1266ff (section "Qm Math Coulomb") were read first; no approved claim was
dropped.

## Inventory

- 18 A items: `def-nrqm-coulomb-ltwo-kernel-operators`,
  `lem-nrqm-coulomb-ltwo-kernel-operators-bounded-and-compact`,
  `def-nrqm-coulomb-closed-semibounded-forms`,
  `lem-nrqm-coulomb-three-dimensional-hardy-bound`,
  `thm-nrqm-coulomb-infinitesimal-kinetic-bound`,
  `thm-nrqm-coulomb-relative-compactness`,
  `thm-nrqm-coulomb-essential-spectrum`,
  `thm-nrqm-coulomb-angular-radial-unitary-reduction`,
  `thm-nrqm-coulomb-transported-radial-endpoint-realization`,
  `thm-nrqm-coulomb-kummer-recurrence-and-termination`,
  `thm-nrqm-coulomb-laguerre-bound-energy-exhaustion`,
  `thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy`,
  `thm-nrqm-coulomb-ground-radial-probability-and-units`,
  `thm-nrqm-coulomb-two-body-reduced-mass`,
  `thm-nrqm-coulomb-atomic-dipole-matrix-element-domain`,
  `thm-nrqm-coulomb-jost-volterra-solution`,
  `thm-nrqm-coulomb-continuum-spectral-density`,
  `thm-nrqm-coulomb-onto-radial-continuum-transform`.
- 3 B items: `ex-nrqm-coulomb-hydrogen-ground-normalization`,
  `ex-nrqm-coulomb-no-full-discrete-eigenbasis`,
  `ex-nrqm-coulomb-relative-versus-total-bound-state`.
- Manifest: `research/physics-cm-qm-gr-79-2026-10-11-batch-39.pages.json`
  (18 + 3 items, each labelled with `dependency_level`); carriers
  `library/non-relativistic-quantum-mechanics-mathematics/qm-math-coulomb.md`
  and `.../qm-math-coulomb-examples.md`; contracts
  `research/physics-cm-qm-gr-79-2026-10-11-batch-39.proof-contracts.json`.

## Design conflicts and deviations (for Step-3 adjudication)

1. **A-page `requires` is the plan plus one published page.** The dispatch and
   `research/plan-spec.json` (order 157) declare
   `requires: [qm-math-intervals-and-contacts, qm-math-orbital-and-spin]`; the
   design reservation block additionally lists `qm-math-composites` and
   `qm-math-oscillator`, which the run reaches transitively through those two
   pages. The authored page additionally requires
   `density-separability-and-convolution-in-lp` (plan order 13, kind P,
   published): it hosts
   `thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn`,
   consumed by the local kernel lemma, which is the stable published home for
   the rational box-step density instead of the two out-of-plan pages that
   would otherwise have had to be spliced. `validate-plan.mjs` reports **zero**
   findings on either batch-39 page; `splice-plan.mjs --run ... --batch 39
   --dry-run` reports `batch 39 WITHHELD — 1 requires edge(s) await
   adjudication` and lists exactly `density-separability-and-convolution-in-lp`
   (same situation batch 38 recorded for its thirteen edges; the Step-3 path is
   `splice-plan.mjs ... --accept-requires` after its gate closes). This batch
   does not edit `plan-spec.json`.
2. **Three batch-local A prerequisites outside the reservation.**
   `def-nrqm-coulomb-ltwo-kernel-operators`,
   `lem-nrqm-coulomb-ltwo-kernel-operators-bounded-and-compact` and
   `def-nrqm-coulomb-closed-semibounded-forms` are not in the frozen
   reservation. They were added so that every reserved claim has a complete
   local closure: the $L^2$-kernel/Hilbert–Schmidt calculus used by
   `thm-nrqm-coulomb-relative-compactness` (removing a dependency on three
   published root items that were not in the declared page closure) and the
   closed-semibounded-form interface used by the radial realization. The
   manifest marks them `inventory_expansion_required: true`; all are
   mathematics and satisfy the same dependency rules.
3. **Reservation identifiers.** The design reservations spell the items
   `nrqm-coulomb-*`; SCHEMA.md requires the kind prefix. All 21 items are
   authored with prefixed IDs and keep the reservation spelling in `aliases`
   and in the manifest `reference` fields, so the plan keys still resolve. The
   15 reserved A claims and 3 reserved B claims are all present with their
   design titles.
4. **Dependency expansion beyond the reservation `claim_deps`.** The authored
   items consume the reservation chains plus the published/in-run suppliers
   their proofs actually use (Teschl/Plancherel/Kato–Rellich/Sobolev items,
   `thm-nrqm-intervals-regular-ivp-parameter-series`,
   `thm-polar-coordinates-formula-for-lebesgue-measure`,
   `cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives`,
   `lem-schwartz-space-is-dense-in-l-two`, the orbital/spin sphere and dipole
   items, and the oscillator recurrence). All additions are same-batch or
   published mathematical suppliers.
5. **Batch-level digest.** Everything on both pages is an in-run item of batch
   39 except the published roots named above; the design's proof modules
   M13/M23/M26/M39/M45 are preserved in the manifest `reference` fields.

## Mathematical repairs made during construction

Every listed repair was applied to the item file, re-checked with
`precheck.mts` and `proof-layout.mjs`, and reflected in the proof contracts and
(where dependencies changed) in the manifest, coverage and cross-batch inputs.
The repairs below are the ones made in the final authoring pass; each is a
correction of an actual mathematical defect or an insufficiently supported
invocation, not a stylistic edit.

1. `thm-nrqm-coulomb-transported-radial-endpoint-realization`, clause (c):
   the original claim "for every $u\in D(A_l)$ ... $u$ is of class $C^2$ and
   the equation holds pointwise" is **false**. For every $f\in L^2(0,\infty)$
   there is $u\in D(A_l)$ with $A_lu=f$ (the shifted operator is onto), and
   then the weak identity gives $u''=qu-f$ a.e.; choosing $f$ a discontinuous
   $L^2$ class (e.g. an indicator) makes $u''$ a.e. equal to a discontinuous
   class, so $u\notin C^2$. The statement now claims the distributional
   identity with $u\in H^2_{\mathrm{loc}}$, $u\in C^1$ with $u'$ locally
   absolutely continuous and the equation a.e., and proves the classical $C^2$
   conclusion exactly in the eigenfunction case $A_lu=Eu$ — which is the
   content the design's M23 actually asserts ("eigenfunctions are classical
   away from zero") and the only case its consumers use. Step 10.1 was
   rewritten accordingly (new fact [F9],
   `cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives`).
   Consumer interfaces were aligned: `thm-nrqm-coulomb-kummer-recurrence-and-termination`
   [F1], `thm-nrqm-coulomb-laguerre-bound-energy-exhaustion` [F2],
   `thm-nrqm-coulomb-jost-volterra-solution` (new [F6] and step 6.1) and the
   carrier prose.
2. `thm-nrqm-coulomb-transported-radial-endpoint-realization`, step 1.1: added
   the missing Hardy-type inequality
   $\|u/r\|_2\le2\|u'-u/r\|_2$ (integration of $(|u|^2/r)'$ over the compact
   support) that makes the third term of the $V_l$-norm finite for every
   element of the graph closure and equates the two descriptions of $V_l$.
3. Same item, step 3.1: the semiboundedness argument for $l=0$ used the false
   pointwise bound $\int|u|^2/r\le\|u\|_2^2$ (a function concentrated near $0$
   violates it) and the resulting constant $-\gamma$ is also not a valid lower
   bound for large $\gamma$ (the true bottom is $-\gamma^2/4$). Replaced by the
   correct chain $\gamma\int|u|^2/r\le2\gamma\|u'-u/r\|_2\|u\|_2\le\tfrac12\|u'-u/r\|_2^2+2\gamma^2\|u\|_2^2$,
   giving $M_0=2\gamma^2$ and $M_l=\gamma^2/(2l(l+1))$ for $l\ge1$.
4. Same item, step 8.1: the cross-reference to `steps 3.1 and 5.1` of the
   angular-radial item did not exist (that item has no step 5.1); the free-form
   identity is its clause (d), and the weighted integral $\int|\psi|^2/r$ now
   cites the polar-coordinates item as a new fact [F10].
5. Same item, step 10.1: the invalid inference "$u''$ has a continuous
   representative" from $u\in H^2_{\mathrm{loc}}$ was replaced by the
   eigenfunction-specific argument of repair 1.
6. `thm-nrqm-coulomb-relative-compactness`, step 1.1: the pointwise bound
   $|m_z|\le(4\pi^2|\xi|^2+|\operatorname{Im}z|)^{-1}$ is false near the
   resonance sphere $4\pi^2|\xi|^2=\operatorname{Re}z$; replaced by the correct
   split estimate ($|\operatorname{Im}z|^{-1}$ on a ball, $\frac{1}{2\pi^2|\xi|^2}$
   outside) proving $m_z\in L^2$.
7. Same item, step 2.2: the product/convolution transform law was invoked for
   the non-Schwartz kernel $g_z\in L^2$. Replaced by a rigorous approximation
   argument (Schwartz $\varphi_n\to g_z$, Schwartz transform laws, isometry,
   Tonelli estimate, bounded extension), with the published
   `lem-schwartz-space-is-dense-in-l-two` added as [F10].
8. Same item, step 4.1: the displayed decomposition
   $\gamma MR_0=M_{\gamma\chi/|\cdot|}R_0+M_{\gamma\mathbf 1_{B_\varepsilon}/|\cdot|}R_0+M_{\gamma\mathbf 1_{\{|\cdot|>R\}}/|\cdot|}R_0$
   is not an identity because the cutoff $\chi$ extends into the two annuli.
   Replaced by the exact identity with the complementary multiplier
   $\gamma(1-\chi)/|\cdot|$, whose norm is bounded by the two step-3.2
   estimates through the pointwise domination by the two indicators.
9. `thm-nrqm-coulomb-essential-spectrum`, step 2.1: sign slip
   "$(C-z)g=f+\gamma Mg$" contradicted the definition $C=H_0-\gamma M$ and the
   following line; corrected to $f-\gamma Mg$, which is what the displayed
   resolvent difference evaluates to.
10. `thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy`, step 4.1:
    the infinite-rank claim was deduced from $\lambda=0\in\sigma_{\mathrm{ess}}$
    via $E((-1/2,1/2))$, but that interval also contains the (infinitely many,
    finite-multiplicity) negative eigenvalues, so no positive-rank conclusion
    follows. Replaced by $\lambda=1/4$, $\varepsilon=1/4$, which gives
    $\operatorname{rank}E((0,1/2))=\infty$ directly. Also [F1] and step 2.1 now
    state explicitly that blocks with $l\ge n$ vanish.
11. `thm-nrqm-coulomb-ground-radial-probability-and-units`, clause (d) and
    step 3.2: the coefficient of $\int_{|x|<\varepsilon}|\psi_{100}|^2dx$ was
    wrong ($\frac2\pi$ instead of the computed $\frac16$ for
    $(\frac{2\varepsilon}{a_0})^3$).
12. `thm-nrqm-coulomb-two-body-reduced-mass`, step 5.1: the argument that
    $E-c(\xi)$ must equal a negative $E_n$ needs the exclusion of *all*
    nonnegative eigenvalues of $C_\mu$; added fact [F7] (with the continuum
    density and Jost items as suppliers) and used it. Step 6.1's final sentence
    had referred to "the explicit form of the negative eigenspaces" although
    step 5.1 proves there are none; rewritten to combine the absence of
    momentum eigenvectors with the no-eigenvalue theorem.
13. `thm-nrqm-coulomb-atomic-dipole-matrix-element-domain`: the stated bound
    $\|Q_i\psi_{nlm}\|_2\le\|u_{nl}\|_2$ and the factorization of the matrix
    elements were wrong in the weight: polar coordinates give
    $\|Q_i\psi\|_2^2=\int r^2|u_{nl}|^2dr\cdot\int|\Omega_iY_{lm}|^2d\sigma$
    and $\langle\psi_{n'l'm'},Q_q\psi_{nlm}\rangle=\bigl(\int r\,u_{n'l'}\overline{u_{nl}}dr\bigr)\bigl(\int Y_{l'm'}\overline{Q_qY_{lm}}d\sigma\bigr)$;
    both (a)/(b) and steps 2.1/3.1 now display the correct weight $r$.
14. `thm-nrqm-coulomb-jost-volterra-solution`, step 2.1: the chain
    "$(s/y)^{2\operatorname{Im}a}\le\exp(-\frac{\gamma\operatorname{Im}k}{|k|^2}\frac{s-y}{r_0})$"
    used the logarithmic inequality in the wrong direction (it is only true
    for $\mathrm{Im}k=0$, when both sides are $1$). Replaced by the direct
    observation that for $\mathrm{Im}k\ge0$ and $2\operatorname{Im}a\le0$ both
    factors of $|w(s)^2w(y)^{-2}|$ are at most $1$.
15. `thm-nrqm-coulomb-continuum-spectral-density`, step 6.1: the zero-eigenvalue
    scaling argument gives $\langle C\psi,\psi\rangle=0$ and
    $2\langle H_0\psi,\psi\rangle+\langle V\psi,\psi\rangle=0$; the conclusion
    "$\langle V\psi,\psi\rangle<0$, contradiction" fails for $\gamma=0$ (the
    item allows $\gamma\ge0$). The $\gamma=0$ case is now handled separately
    ($H_0\psi=0$ forces $\psi=0$).
16. `thm-nrqm-coulomb-relative-versus-total-bound-state` (B): the claim that
    the bottom of the spectrum is not attained now cites the two-body
    no-eigenvalue theorem rather than resting on the single product vector.
17. Four item files carried a stray trailing line `1 checked, 1 failing`
    (left over from an earlier tool dump): removed from
    `thm-nrqm-coulomb-ground-radial-probability-and-units`,
    `thm-nrqm-coulomb-kummer-recurrence-and-termination`,
    `thm-nrqm-coulomb-laguerre-bound-energy-exhaustion` and
    `thm-nrqm-coulomb-transported-radial-endpoint-realization`.

Two places remain deliberately condensed rather than expanded, and are flagged
here for the Step-2/3 reviewer: (i) `thm-nrqm-coulomb-transported-radial-endpoint-realization`
step 8.1 uses the standard spherical-harmonic block decomposition of $H^1(\mathbb R^3)$
(density of finite block sums of $C_c^\infty(\mathbb R^3\setminus\{0\})$
functions and continuity of the two sides of the identity) without expanding
the truncation argument; the identity is the classical polar decomposition and
the claim is true, but the authored text is a sketch at that point.
(ii) `thm-nrqm-coulomb-continuum-spectral-density` steps 1.1, 3.1 and 4.1
invoke the standard variation-of-constants/first-resolvent-formula and
Stieltjes-inversion arguments with uniform-in-$E$ kernel bounds stated but not
estimated in detail. No claim in either item depends on an unproved false
statement; these are completeness-of-detail judgments for independent review.

## Sources

- Coverage: `research/physics-cm-qm-gr-79-2026-10-11-batch-39.coverage.json`;
  `source-fetch-check.mjs --coverage ... --stamp` fetched the complete bodies
  of all 13 page-source pairs on the two pages: Teschl *Mathematical Methods in
  Quantum Mechanics* (1st ed., full PDF), Brezis *Functional Analysis, Sobolev
  Spaces and PDE* (full PDF), Axler–Bourdon–Ramey *Harmonic Function Theory*
  (author-hosted full text), Binney–Skinner *The Physics of Quantum Mechanics*
  (full PDF), Buehler–Salamon *Functional Analysis* (ETH notes, full PDF),
  DLMF §13.2/§13.7/§18.3/§33.2/§33.10, and (for the Hardy lemma) the Wikipedia
  article on Hardy's inequality recorded explicitly as a secondary reference
  for the sharp multidimensional constant. Check mode re-run: 13/13
  fetch-verified, 13/13 resolved, no drops.
- Source fidelity: the Teschl first-edition page numbers in the frontmatter
  were verified against the PDF text (printed page = PDF page − 12; Theorem
  6.4 p. 135, §6.4 pp. 145–149, §9.1 pp. 181–186, §9.6 pp. 209–214, §10.1–10.4
  pp. 221–235, E₀ = −γ²/4 and the non-terminating non-$L^2$ statement on
  p. 233); Binney–Skinner against the PDF (printed page = PDF page − 8, Ch. 8
  pp. 182–193, §9.3 pp. 213–219); Brezis against the PDF (Comments Ch. 8
  p. 233, Ch. 9 p. 313, §9.3 pp. 278–287, §9.5 pp. 291–298); Buehler–Salamon
  against the PDF (§5.2.3, §5.3.4, §5.6–5.7, Ch. 6); Axler Ch. 5 pp. 73–105.
  Attributions that could not be verified on the claimed pages were removed
  (Teschl has no Hardy inequality and no Jost section; the Hardy lemma now
  cites Brezis directly, the Jost-type asymptotics cite DLMF §33.2/§33.10).
- `coverage-checklist.mjs`: 2 pages, 55 harvested results, 0 errors,
  1 warning (`coverage-low-yield` 9/49 on the A page): many Teschl/Brezis/DLMF
  headings are consumed inline by the same items that restate them in the
  Facts blocks, which is the expected profile for an A page whose items are
  full proofs rather than source restatements.

## Dependency levels (as labelled in the manifest)

Level 0: `def-nrqm-coulomb-ltwo-kernel-operators`,
`def-nrqm-coulomb-closed-semibounded-forms`,
`lem-nrqm-coulomb-three-dimensional-hardy-bound`; level 1:
`lem-nrqm-coulomb-ltwo-kernel-operators-bounded-and-compact`,
`thm-nrqm-coulomb-infinitesimal-kinetic-bound`; level 2:
`thm-nrqm-coulomb-relative-compactness`; level 3:
`thm-nrqm-coulomb-essential-spectrum`; level 5:
`thm-nrqm-coulomb-angular-radial-unitary-reduction` (its level comes from
out-of-batch in-run items of batches 37/38); level 6:
`thm-nrqm-coulomb-transported-radial-endpoint-realization`; level 7:
`thm-nrqm-coulomb-kummer-recurrence-and-termination`; level 8:
`thm-nrqm-coulomb-laguerre-bound-energy-exhaustion`,
`thm-nrqm-coulomb-jost-volterra-solution`; level 9:
`thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy`,
`thm-nrqm-coulomb-continuum-spectral-density`; level 10:
`thm-nrqm-coulomb-ground-radial-probability-and-units`,
`thm-nrqm-coulomb-two-body-reduced-mass`,
`thm-nrqm-coulomb-atomic-dipole-matrix-element-domain`,
`thm-nrqm-coulomb-onto-radial-continuum-transform`,
`ex-nrqm-coulomb-no-full-discrete-eigenbasis`; level 11:
`ex-nrqm-coulomb-hydrogen-ground-normalization`,
`ex-nrqm-coulomb-relative-versus-total-bound-state`. Labels were recomputed
from the final frontmatter after every dependency change;
`item-dependency-levels.mjs check --run` reports no finding on any batch-39
page or item (its remaining errors are 106 other, still-empty scaffold
inventories).

## Completion checks (final state)

- `tsx-run.mjs tools/physics-support/precheck.mts` on all 21 items: 19 checked
  (the two pure definitions carry no proof), 0 failing, all clean.
- `proof-layout.mjs` on all 21 items: 21 items, 117 steps, 0 defects.
- `rendercheck.mjs` on both carriers: OK (no wikilink inside math, no nested
  delimiters, no multiline display block, all math parses under KaTeX, both
  frontmatter blocks parse).
- `content-policy.mjs research/...-batch-39.pages.json`: 21 scoped items,
  0 errors, 0 warnings.
- `manifest-deps.mjs` on the batch manifest: 21 items, 0 errors.
- `manifest-integrity.mjs --run ...`: 158 pages owed, 158 in the manifests, no
  scope drift.
- `depcheck.mjs --items-file /tmp/batch39-items.json`: OK; selected item/page
  checks and their prerequisite cycle checks passed, with 3
  `cited-not-in-deps` warnings — all three are *closed* forward references
  (the reverse dependency edge exists: the kernel lemma depends on the kernel
  definition, the transported item on the closed-forms definition, and the
  onto-transform item on the continuum-density item), so they cannot be added
  to `deps` without creating a cycle. No batch-39 `forward-undeclared` finding.
- `validate-plan.mjs research/plan-spec.json --run ...`: exit 0, **zero**
  findings (this run's earlier undeclared-prereq findings on other batches'
  pages have since been cleared by those batches).
- `item-dependency-levels.mjs check --run ...`: no batch-39 finding (remaining
  errors are other batches' empty scaffold inventories).
- `batch-dependency-levels.mjs check --run ...`: reports the run digest stale
  and asks for a recompute. The batch-39 row is unchanged and correct
  (`dependency_level: 3`, `requires: [35,36,37,38]`, matching the actual
  cross-batch consumption through batches 37/38 and the transitive 35/36); a
  fresh in-memory recompute differs from the stored digest only in batch 13,
  i.e. the staleness is caused by another batch's concurrent edits. The digest
  is derived engine/scheduling metadata, so this worker did not rewrite it.
- `proof-contract.mjs research/...-batch-39.proof-contracts.json --strict`:
  0 errors, 0 warnings, 21/21 items checked.
- `boundary-audit.mjs` on the same file: 168 boundary rows, no template-reuse
  cluster, no contradicted disposition (the eight family/aggregate `empty` rows
  whose reasons were item-specific are now `checked` with step- or
  statement-anchored evidence instead of `not_applicable`).
- `coverage-checklist.mjs`: 2 pages, 55 harvested results, 0 errors,
  1 warning (see above).
- `source-fetch-check.mjs --coverage ...`: 13/13 fetch-verified, 13/13
  resolved, 0 documented drops.
- `citecheck.mjs` on the 21 items: OK.
- `extcheck.mjs`: 27658 items, 0 recorded-not-proved, 0 resting on them.
- `fwdcheck.mjs`: 0 open forward references; the repo-wide run still exits 1 on
  12555 pre-existing `forward-undeclared` findings in other workspaces' items
  (0 of them on a batch-39 item or page).
- `frontier-dependency-ledger.mjs refresh --run ...`: refreshed and
  deduplicated; batch 39 appears in `reviewed_batches` with 30 edges touching
  it (4 page edges and 26 item edges, each with the exact used clause and its
  citing steps). `--require-reviewed` still fails only through other batches'
  missing inputs.
- `step1-decisions.mjs check --run ...`: **zero** open work rows for any
  batch-39 item or page; the 57 open item rows and 161 empty-inventory pages
  belong to other, not-yet-authored batches (552 items in the run, 495 ready
  at the time of writing).

## Unresolved findings handed to the owner

1. The single `requires` edge of item 1 above awaits the Step-3 adjudication
   (`splice-plan.mjs --accept-requires`) before the batch can be spliced into
   `plan-spec.json`; this batch deliberately leaves the plan untouched.
2. The `coverage-low-yield` warning on `qm-math-coulomb` (9/49) is expected for
   an inline-consumption A page; it is recorded, not resolved, and awaits the
   Alpha confirmation the checklist requests.
3. `fwdcheck.mjs` reports repo-wide pre-existing findings in other workspaces;
   none involves a batch-39 item or carrier. `item-dependency-levels.mjs` and
   `step1-decisions.mjs` likewise list only other batches' open work.
   `batch-dependency-levels.mjs check` reports a stale run digest whose only
   differing row from a fresh recompute is batch 13 (not batch 39); the engine
   owns that recompute.
4. No published defect was found on a batch-39 path and no escalation for an
   unmet prerequisite remains. Step-1 readiness is an authoring record, not
   independent mathematical approval; Step 3 supplies that review.

## Readiness records

All 21 items were recorded `ready` with `step1-decisions.mjs record` **after**
the final item, manifest, carrier, contract, coverage and cross-batch edits,
each with its examined dependency list (the final frontmatter `deps` of the
item). No record uses `--owner` and no escalation record was written.
`step1-decisions.mjs check --run physics-cm-qm-gr-79-2026-10-11` reports zero
open work entries for the two batch-39 pages.
