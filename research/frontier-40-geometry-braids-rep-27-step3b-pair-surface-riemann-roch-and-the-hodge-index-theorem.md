# Step 3b report — pair `surface-riemann-roch-and-the-hodge-index-theorem`

- Run: `frontier-40-geometry-braids-rep-27`, batch 21, role alpha-high (step 3b pair
  scaffold audit, repair and authoring).
- A page: `surface-riemann-roch-and-the-hodge-index-theorem` (order 897).
- B page: `surface-riemann-roch-and-the-hodge-index-theorem-examples` (order 898).
- Inputs read at entry: `CLAUDE.md`, `AGENTS.md`, `SCHEMA.md`, `WORKFLOW.md`,
  `briefs/group-author.md`, `research/frontier-40-geometry-braids-rep-27-owner-authoring-direction.md`,
  `research/frontier-40-geometry-braids-rep-27-batch-21.pages.json`,
  `...-batch-21.coverage.json`, `...-batch-21.notes.md`, `...-batch-21.cross-batch-dependencies.json`,
  `...-step3a-pair-surface-riemann-roch-and-the-hodge-index-theorem.md`,
  `...-step3a-review-surface-riemann-roch-and-the-hodge-index-theorem.json`,
  the 18 `...-step1-<item>.json` readiness records, `research/plan-spec.json` rows 897/898,
  and the published supplier items listed per item below.

## Owned IDs (18 items, 2 pages)

Dependency-level order (from the dispatch; ties by page order then item id):

| level | item | page |
|---|---|---|
| 0 | `def-canonical-divisor-of-a-smooth-projective-surface` | A |
| 0 | `def-numerical-equivalence-and-neron-severi-space` | A |
| 0 | `lem-ample-divisor-positive-intersection-on-smooth-projective-surface` | A |
| 0 | `lem-ample-twist-of-line-bundle-is-very-ample` | A |
| 0 | `lem-picard-group-of-a-point-blowup-of-the-projective-plane` | B |
| 0 | `lem-product-of-projective-lines-is-a-smooth-projective-surface` | B |
| 1 | `lem-adjunction-formula-for-effective-divisors-on-smooth-surfaces` | A |
| 1 | `lem-top-cohomology-vanishes-above-canonical-ample-threshold` | A |
| 1 | `thm-riemann-roch-for-smooth-projective-surfaces` | A |
| 1 | `lem-picard-group-and-intersection-form-of-p1-times-p1` | B |
| 2 | `lem-positive-square-divisor-has-effective-multiple` | A |
| 3 | `thm-hodge-index-theorem-ample-case` | A |
| 4 | `thm-hodge-index-theorem-for-smooth-projective-surfaces` | A |
| 5 | `cor-negative-definiteness-of-primitive-numerical-divisors` | A |
| 5 | `cex-intersection-form-not-negative-definite-on-all-divisors` | B |
| 6 | `rem-surface-riemann-roch-hodge-index-conventions` | A |
| 6 | `ex-hodge-index-on-a-blowup` | B |
| 6 | `ex-hodge-index-on-p1-times-p1` | B |

Deliverables owed: the 18 item files, `library/algebraic-geometry/<A page>.md`,
`library/algebraic-geometry/<B page>.md`, the batch proof-contract file
`research/frontier-40-geometry-braids-rep-27-batch-21.proof-contracts.json`, and this report.

## Open obligations at entry

1. Author all 18 items in the order above, with complete `[F*]`/step-tagged proofs and
   AC bookkeeping.
2. Audit each scaffold proof strategy for mathematical soundness; repair local gaps and
   record every repair here.
3. Register the two pages and check: manifest-deps, content-policy (item mode),
   coverage-checklist `--require-destination`, item-dependency-levels, `validate-plan`,
   precheck/rendercheck on the explicit paths, and the batch proof contracts (`--strict`).
4. Record `step3-decisions.mjs record-item` for the 18 original scaffold IDs only after
   complete authoring and checks.

## Scaffold audit findings (entry pass) and repairs

Audit of the 18 scaffold statements and proof strategies against the published suppliers
found the following local defects; each is repaired in the authored item and recorded again
in the per-item checkpoints below.

1. `lem-positive-square-divisor-has-effective-multiple` (scaffold strategy): the scaffold writes
   $h^0=\chi+h^1+h^2$; the correct alternating sum is $h^0=\chi+h^1-h^2$, so the nonnegativity of
   $h^1$ alone gives $h^0\ge\chi$ only after $h^2=0$, which the item supplies from the threshold
   vanishing lemma. Repaired.
2. `lem-picard-group-and-intersection-form-of-p1-times-p1` (scaffold strategy): the scaffold
   twists by $\mathrm{pr}_2^*\mathcal O(-d_1)\otimes\mathrm{pr}_1^*\mathcal O(-d_2)$ with
   $d_1=\mathcal N\cdot m$ and $d_2=\mathcal N\cdot\ell$. In the basis $(\ell,m)$ with
   $\ell^2=m^2=0$, $\ell\cdot m=1$ this gives
   $M\cdot\ell=\mathcal N\cdot\ell-d_1=\mathcal N\cdot\ell-\mathcal N\cdot m$ and
   $M\cdot m=\mathcal N\cdot m-d_2=\mathcal N\cdot m-\mathcal N\cdot\ell$, so the fibre degrees are
   exchanged, not killed. The twist that kills both is
   $M=\mathcal N\otimes\mathrm{pr}_2^*\mathcal O(-(\mathcal N\cdot\ell))\otimes
   \mathrm{pr}_1^*\mathcal O(-(\mathcal N\cdot m))$ (coefficient $\mathcal N\cdot\ell$ on $m$,
   coefficient $\mathcal N\cdot m$ on $\ell$, since the fibre of $\mathrm{pr}_1$ has class $\ell$
   and that of $\mathrm{pr}_2$ has class $m$).
   The authored proof replaces this route entirely: generation of $\operatorname{Pic}(X)$ by
   $\ell,m$ is proved by the class-group excision sequence from the affine chart
   $X\setminus(\ell\cup m)\cong\mathbb A^2$, and injectivity from the intersection matrix, so no
   cohomology-and-base-change or flatness-of-evaluation input is used. Repaired.
3. `lem-picard-group-of-a-point-blowup-of-the-projective-plane` (scaffold strategy): the scaffold
   applies cohomology and base change to $\pi:X'\to X$ and calls $M$ flat over $X$. The blowup
   morphism of a point on a smooth surface is **not** flat (the fibre over $p$ is the curve $E$
   while every other fibre is a point; the local chart $k[x,y]\to k[x,u]$, $y\mapsto xu$, has
   $\operatorname{Tor}_1\ne0$ — the Koszul kernel contains $(-u,1)$, which is not in the image),
   so that route is invalid as stated. The authored proof replaces it: generation of
   $\operatorname{Pic}(X')$ by $E$ and the strict transform $m$ of a line through $p$ comes from
   the class-group excision sequence applied to $X'\setminus(E\cup m)\cong\mathbb P^2\setminus L
   \cong\mathbb A^2$, and injectivity from $\ell=m+E$, $\ell^2=1$, $\ell\cdot E=0$, $E^2=-1$;
   no flatness of $\pi$ and no cohomology-and-base-change input is used. Repaired.
4. This pair consumes no in-run (cross-batch) supplier: all 97 external dependency ids
   declared in the scaffold resolve to published item files (the finished items declare 102
   after reconciliation, see the Handoff). The 13 in-pair suppliers are authored here in
   ascending level. No supplier obligation is escalated at entry.

5. Published suppliers homed only on a B/examples page were load-bearing in three scaffold
   dependency lists (`ex-intersection-pairing-on-blowup-of-p2` twice,
   `ex-intersection-pairing-on-p2` once). `depcheck`'s `b-leaf-content` rule forbids an authored
   dependency that reaches an item living only on an examples page, so these are replaced by
   exact A-page suppliers plus complete local arguments:
   `lem-blowup-intersection-matrix-at-smooth-point` (for $E^2=-1$, $\ell\cdot E=0$ and the total
   transform $m+E$), the defining alternating sum of
   `def-divisor-intersection-number-on-smooth-projective-surface` with the published cohomology
   of twists on $\mathbb P^2$ (for $\mathcal O(1)^2=1$), and
   `lem-ample-divisor-positive-intersection-on-smooth-projective-surface` with
   `lem-twisting-sheaf-projective-space-ample` (for positive self-intersection of an ample
   class in the counterexample). The manifest dependency lists and the `depcheck` gate are
   re-run after the repair; the affected level labels are recomputed.

## Checkpoints

Per-item entries are appended below as each item is audited, authored, checked and decided.

Conventions common to every entry: all 18 items were written by this run (`status: draft`,
`origin: pipeline`, `pipeline_run: frontier-40-geometry-braids-rep-27`, correct
`dependency_level`); every item states its Axiom-of-Choice inheritance explicitly; every
proof-bearing item has `## Facts & Assumptions` plus a numbered proof section with complete
`[F#]`/`[step]` tags, and every lemma/theorem/corollary an explicit `## Proof`, every example
a `## Verification`, the counterexample a `## Counterexample`. The batch contract
`research/frontier-40-geometry-braids-rep-27-batch-21.proof-contracts.json` has one entry per
item with exact citation quotes, step derivations/routine steps and all eight boundary axes.
"External deps" counts distinct published suppliers (102 distinct across the pair, all
`status: published`, all files present); "in-pair deps" are batch-21 items used by the item.
All 18 items pass precheck (15 proof-bearing checked, 3 `not-applicable`), rendercheck,
proof-layout (70 steps, 0 defects), prosecheck, and the strict proof-contract gate; all 18
item decisions are recorded (see the table at the end).

1. `def-canonical-divisor-of-a-smooth-projective-surface` (A, level 0, **accept**).
   Claim: canonical divisor as the divisor of a rational section of
   $\omega_X=\bigwedge^2\Omega^1_{X/k}$; existence, linear equivalence of any two choices, and
   the basic intersection/duality properties. Sources: Vakil Ch. 20 §20.2 and the dualizing
   bundle of `def-smooth-projective-dualizing-line-bundle-and-trace`. 15 external deps, 0
   in-pair. Decision accept: definition and route stand as scaffolded (basic-properties list
   expanded, no promised claim weakened). Open: none.

2. `def-numerical-equivalence-and-neron-severi-space` (A, level 0, **repaired**).
   Claim: numerical equivalence of invertible sheaves/Cartier divisors, numerically trivial
   classes, the quotient $\operatorname{N}^1(X)$ and the real space
   $\operatorname{N}^1_{\mathbb R}(X)=\operatorname{N}^1(X)\otimes_{\mathbb Z}\mathbb R$.
   Sources: Vakil §18.4.12 and §20.1.6; MIT 18.727 Lecture 2 §1; Stacks 0BEL 33.45.3/33.45.10.
   11 external deps, 0 in-pair. Decision repaired: dependency record completed with the two
   suppliers the definition cites (Cartier-principal-to-Picard isomorphism, rational-section
   Cartier divisor). Rendercheck defect (hard-wrapped display math) joined with
   `fix-multiline-display.mjs`. Open: none.

3. `lem-ample-divisor-positive-intersection-on-smooth-projective-surface` (A, level 0,
   **repaired**). Claim: for ample $H$ and nonzero effective Cartier $D$, $H\cdot D>0$; for
   ample $H$, $H\cdot H>0$; and a nonzero global section of an invertible $\mathcal M$ with
   empty zero scheme forces $\mathcal M\cong\mathcal O_X$. Sources: Vakil Exercise 20.1.K,
   MIT Lecture 2 (remark after Theorem 2), Stacks 0BEV (33.45.9). 26 external deps, 0
   in-pair. Decision repaired: scaffold route completed through the very-ample power, the
   Hilbert-polynomial leading coefficient and an explicit hyperplane choice; manifest deps
   reconciled with the very-ampleness, properness and dimension suppliers actually used.
   Open: none.

4. `lem-ample-twist-of-line-bundle-is-very-ample` (A, level 0, **repaired**). Claim: for
   ample $L$ and arbitrary invertible $M$ there is $n_0$ with
   $M\otimes L^{\otimes n}$ closed H-very ample (hence very ample) for all $n\ge n_0$.
   Sources: Vakil Exercise 16.2.E. 19 external deps, 0 in-pair. Decision repaired: the
   scaffold's `lem-eventual-global-generation-coherent-twists` route was replaced by Serre's
   criterion instantiated on the coherent twist, with the closed-immersion assembly (graph
   immersion plus Segre embedding) made explicit; deps reconciled (dropped the unused
   supplier, added the actual ones). Open: none.

5. `lem-picard-group-of-a-point-blowup-of-the-projective-plane` (B, level 0, **repaired**).
   Claim: for the blowup $X'=\operatorname{Bl}_p\mathbb P^2$ at a $k$-rational point,
   $\operatorname{Pic}(X')=\mathbb Z\ell\oplus\mathbb ZE$ with $\ell^2=1$, $\ell\cdot E=0$,
   $E^2=-1$, and $X'$ an integral smooth projective surface. Sources: Vakil §15.5.K and
   Exercise 20.2.D; MIT Lecture 2 §1.4. 45 external deps, 0 in-pair. Decision repaired:
   scaffold's flatness/cohomology-and-base-change route is invalid (blowup not flat at $p$);
   replaced by class-group excision from $X'\setminus(E\cup m)\cong\mathbb A^2$ with
   injectivity from the intersection matrix. Open: see the cross-group note (sibling consumer
   `ex-gl2-quotient-by-diagonal-torus` must not depend on a B-page-only supplier).

6. `lem-product-of-projective-lines-is-a-smooth-projective-surface` (B, level 0,
   **repaired**). Claim: $X=\mathbb P^1_k\times_k\mathbb P^1_k$ is an integral smooth
   projective surface of pure dimension two with both projections. Sources: the published
   projective-line and Segre suppliers listed in the item. 35 external deps, 0 in-pair.
   Decision repaired: chart-based route authored as planned; the scaffold's dependency list
   contained a non-existent id for the iterated-polynomial-ring corollary and omitted two
   suppliers cited in the statement (divisor intersection number, proper morphisms), all
   reconciled. Open: cross-group note as above.

7. `lem-adjunction-formula-for-effective-divisors-on-smooth-surfaces` (A, level 1,
   **repaired**). Claim: $C\cdot(K_X+C)=-2\chi(C,\mathcal O_C)$ for nonzero effective
   Cartier $C$, with $2p_a(C)-2$ when $C$ is integral; no smoothness/reducedness/
   irreducibility assumed. Sources: Vakil Exercise 20.2.B(a); MIT Lecture 2 §1.1. 16
   external deps, 1 in-pair (`def-canonical-divisor…`). Decision repaired: proof expanded to
   isolate the two Serre-duality substitutions and the structure-sequence difference; deps
   reconciled with the duality, tensor and restriction-degree suppliers used. Open: none.

8. `lem-top-cohomology-vanishes-above-canonical-ample-threshold` (A, level 1, **repaired**).
   Claim: $M\cdot H>K_X\cdot H$ with $H$ ample implies $H^2(X,M)=0$. Sources: Vakil
   §20.2.15. 10 external deps, 2 in-pair. Decision repaired: the case split on the zero
   scheme of the Serre-dual section made explicit, locating the threshold-equality boundary;
   deps reconciled (added divisor-intersection, Euler-characteristic, section-zero and
   tensor-product suppliers; dropped an unused duality supplier). Open: none.

9. `thm-riemann-roch-for-smooth-projective-surfaces` (A, level 1, **repaired**). Claim:
   $\chi(X,\mathcal L)=\chi(X,\mathcal O_X)+\tfrac12(\mathcal L^2-\mathcal L\cdot K_X)$, and
   the divisor form. Sources: Vakil Exercise 20.2.B(b); MIT Lecture 2 Theorem 1. 9 external
   deps, 1 in-pair. Decision repaired: route re-derived from the alternating sum on
   $(\mathcal L^\vee,\mathcal L\otimes\omega_X^\vee)$; the planned dualizing-bundle dep is
   unused and was dropped, remaining deps reconciled. Open: none.

10. `lem-positive-square-divisor-has-effective-multiple` (A, level 2, **repaired**). Claim:
    $L\cdot L>0$ and $L\cdot H>0$ with $H$ ample imply $H^0(X,L^{\otimes n})\ne0$ for some
    $n\ge1$. Sources: Vakil §20.2.16. 8 external deps, 3 in-pair. Decision repaired: the
    scaffold's sign error $h^0=\chi+h^1+h^2$ corrected to $h^0=\chi+h^1-h^2$, with $h^2=0$
    from the threshold lemma and positivity from the quadratic term. Open: none.

11. `thm-hodge-index-theorem-ample-case` (A, level 3, **repaired**). Claim: for ample $H$ and
    $L\cdot H=0$, $L\cdot L\le0$ with equality iff $L$ numerically trivial. Sources: Vakil
    §§20.2.17-20.2.18; MIT Lecture 2 §1.2. 11 external deps, 4 in-pair. Decision repaired:
    proof completed through the large ample twist and the positive-square lemma for (a), and
    the two-parameter perturbation for the equality case of (b); deps reconciled with actual
    suppliers. Open: none.

12. `thm-hodge-index-theorem-for-smooth-projective-surfaces` (A, level 4, **repaired**).
    Claim: $H\cdot H>0$ and $L\cdot H=0$ imply $L\cdot L\le0$, with equality iff $L$
    numerically trivial. Sources: Vakil Theorem 20.2.13 with §20.2.19. 6 external deps, 3
    in-pair. Decision repaired: authored as reduction to the ample case (step 1.1) with the
    auxiliary class $M=H^{\otimes(A\cdot L)}\otimes L^{\otimes-(A\cdot H)}$ (step 2.1); the
    planned very-ampleness-of-powers supplier is unused and was dropped. Open: none.

13. `cor-negative-definiteness-of-primitive-numerical-divisors` (A, level 5, **repaired**).
    Claim: orthogonal decomposition along $\mathbb R h$, negative definiteness on
    $h^\perp$, and — conditionally on finite $\rho(X)$ — inertia $(1,\rho-1,0)$. Sources:
    Vakil §20.2.12 and Exercise 20.2.U; MIT Lecture 2 Theorem 3. 7 external deps, 2 in-pair.
    Decision repaired: unconditional negative definiteness proved via the rational-
    approximation argument; finiteness of $\rho$ kept as an explicit hypothesis only for the
    signature clause. Open: none (the conditional signature clause is stated).

14. `rem-surface-riemann-roch-hodge-index-conventions` (A, level 6, **accept**). Claim: a
    bookkeeping remark on base field and smoothness conventions, numerical versus linear
    equivalence ($\rho(X)$ finiteness not proved here), the positive-square (not ampleness)
    hypothesis, and the tools deliberately not used (no Bertini, no resolution, no
    Nakai-Moishezon). Sources: Vakil Theorem 20.2.13 / Exercise 20.2.B locators as stated in
    the remark. 5 external deps, 5 in-pair. Decision accept: implemented from the planned
    statement; the companion-example sentence was made concrete by naming the blowup
    computation of the pair. Open: none.

15. `lem-picard-group-and-intersection-form-of-p1-times-p1` (B, level 1, **repaired**).
    Claim: $\operatorname{Pic}(\mathbb P^1\times\mathbb P^1)=\mathbb Z\ell\oplus\mathbb Zm$
    with $\ell^2=m^2=0$, $\ell\cdot m=1$, and the diagonal class $\ell+m$. Sources: Vakil
    §15.5.K and Exercise 20.2.C. 35 external deps, 1 in-pair. Decision repaired: the
    scaffold's twist killed the wrong fibre degrees; replaced by class-group excision from
    $X\setminus(\ell\cup m)\cong\mathbb A^2$ with injectivity from the Gram matrix
    $\begin{pmatrix}0&1\\1&0\end{pmatrix}$ and an explicit diagonal section. Open: none.

16. `cex-intersection-form-not-negative-definite-on-all-divisors` (B, level 5,
    **repaired**). Claim refuted: the intersection form is not negative (semi)definite on the
    whole real Neron-Severi space, by the class of an ample sheaf. Sources: Vakil §20.2.2 and
    Exercise 20.1.K; MIT Lecture 2 remark after Theorem 2. 8 external deps, 3 in-pair.
    Decision repaired: the load-bearing B-page citation `ex-intersection-pairing-on-p2` was
    replaced by A-page suppliers plus a local computation, and the refutation generalised to
    every smooth projective surface via ample positivity. Open: none.

17. `ex-hodge-index-on-a-blowup` (B, level 6, **repaired**). Claims: $H=\pi^*\mathcal O(1)$
    has $H^2=1>0$ (though not ample), $H^\perp=\mathbb RE$ with $E^2=-1$, and the matrix
    $\operatorname{diag}(1,-1)$ of signature 0. Sources: Vakil §20.2.13 and Exercise 20.2.D.
    8 external deps, 5 in-pair. Decision repaired: the load-bearing B-page citation
    `ex-intersection-pairing-on-blowup-of-p2` was replaced by
    `lem-blowup-intersection-matrix-at-smooth-point` and local arguments; facts and steps
    re-derived. Open: none.

18. `ex-hodge-index-on-p1-times-p1` (B, level 6, **repaired**). Claims: $H=\ell+m$ has
    $H^2=2>0$, $H^\perp=\mathbb R(\ell-m)$ with $(\ell-m)^2=-2$, and the matrix
    $\begin{pmatrix}0&1\\1&0\end{pmatrix}$ of signature 0/index $(1,1)$. Sources: Vakil
    Exercise 20.2.C; MIT Lecture 2 Theorem 3. 5 external deps, 4 in-pair. Decision repaired:
    facts re-derived from the repaired $\mathbb P^1\times\mathbb P^1$ Picard lemma and the
    A-page intersection suppliers; the precheck canonical step block was adopted. Open: none.

## Checks actually run (after the final edit)

| command | result |
|---|---|
| `node tools/tsx-run.mjs tools/precheck.mts <18 item paths>` | 15 checked, 0 failing — all clean (3 definitions/remark `not-applicable`) |
| `node tools/rendercheck.mjs <18 items + 2 pages>` | OK — 20 files, no wikilink-in-math, no unbalanced delimiters, no multiline display, all math KaTeX-clean, all frontmatter parses |
| `node tools/proof-layout.mjs <18 item paths>` | 18 items, 70 steps, 0 defects |
| `node tools/content-policy.mjs research/…-batch-21.pages.json` | 18 scoped items, 0 errors, 0 warnings |
| `node tools/coverage-checklist.mjs research/…-batch-21.coverage.json --require-destination` | 2 pages, 37 harvested results, 0 errors, 0 warnings |
| `node tools/manifest-deps.mjs research/…-batch-21.pages.json` | 18 items, 0 normalized, 0 errors |
| `node tools/prosecheck.mjs <18 items + 2 pages>` | 20 files, 0 errors, 0 warnings |
| `node tools/proof-contract.mjs research/…-batch-21.proof-contracts.json --strict` | 0 errors, 0 warnings, 18/18 items |
| `node tools/merge-proof-contracts.mjs --level … /tmp/merged-b21.json <batch-21 contract>` + `--strict` | merges cleanly, 18 scoped items, 0 errors |
| `node tools/boundary-audit.mjs research/…-batch-21.proof-contracts.json --fail-on-template --fail-on-contradicted` | 144 rows, no template clusters, no contradicted dispositions |
| `node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27` (batch-21 filtered) | 0 errors, max level 6, all labels match computed levels |
| `node tools/validate-plan.mjs research/plan-spec.json` | OK — acyclic and consistent; the pair's plan-spec item lists are still empty (Step 4 splice) |
| `node tools/depcheck.mjs` | global FAIL; our items contribute no rule violation (see below) |
| `node tools/frontier-dependency-ledger.mjs refresh --run frontier-40-geometry-braids-rep-27` | FAIL (exit 1) on a sibling file's unquoted YAML title (see below); batch-21 input `[]` is in place and valid |
| `node tools/step3-decisions.mjs check --run … --phase final` | our pair: no work items (all 18 decisions current); the run as a whole is open because other batches are still in flight |

## Handoff

- **Completed IDs.** All 18 items of the dispatch, plus the two pages
  `library/algebraic-geometry/surface-riemann-roch-and-the-hodge-index-theorem.md` and
  `…-examples.md`, plus
  `research/frontier-40-geometry-braids-rep-27-batch-21.proof-contracts.json`. Pages: the A
  page carries the 12 A items in dependency order; the B page lists its three lemmas before
  the counterexample and the two examples. `requires` on the pages equals the manifest/plan
  requirements. `batch-21.pages.json` deps were synced to the final item-file deps (no
  statement, strategy, label or coverage changes; no sibling rows touched).

  Step 3b item decisions recorded (`research/<run>-step3b-review-<id>.json`, confidence 1):

  | item | decision | recorded sha256 (first 12) |
  |---|---|---|
  | `def-canonical-divisor-of-a-smooth-projective-surface` | accept | `166da896217d` |
  | `def-numerical-equivalence-and-neron-severi-space` | repaired | `530b0730bd52` |
  | `lem-ample-divisor-positive-intersection-on-smooth-projective-surface` | repaired | `4554694fbcd3` |
  | `lem-ample-twist-of-line-bundle-is-very-ample` | repaired | `949c93a5027c` |
  | `lem-adjunction-formula-for-effective-divisors-on-smooth-surfaces` | repaired | `5fb243dda749` |
  | `lem-top-cohomology-vanishes-above-canonical-ample-threshold` | repaired | `c38cb403abad` |
  | `thm-riemann-roch-for-smooth-projective-surfaces` | repaired | `15b3664a9f79` |
  | `lem-positive-square-divisor-has-effective-multiple` | repaired | `cfcc46db6cd3` |
  | `thm-hodge-index-theorem-ample-case` | repaired | `ab6536ef3667` |
  | `thm-hodge-index-theorem-for-smooth-projective-surfaces` | repaired | `1d812f91d3cd` |
  | `cor-negative-definiteness-of-primitive-numerical-divisors` | repaired | `53522303da5f` |
  | `rem-surface-riemann-roch-hodge-index-conventions` | accept | `52aa04c56923` |
  | `lem-picard-group-of-a-point-blowup-of-the-projective-plane` | repaired | `66aa6dac2af4` |
  | `lem-product-of-projective-lines-is-a-smooth-projective-surface` | repaired | `31904dbce338` |
  | `lem-picard-group-and-intersection-form-of-p1-times-p1` | repaired | `b063409dc184` |
  | `cex-intersection-form-not-negative-definite-on-all-divisors` | repaired | `23767f3121e5` |
  | `ex-hodge-index-on-a-blowup` | repaired | `3cffea86114f` |
  | `ex-hodge-index-on-p1-times-p1` | repaired | `cb319fc8ac49` |

- **Added suppliers.** None: no new prerequisite item was created; all 102 distinct external
  dependencies were already published, and the 34 in-pair dependency edges are among the 18
  items authored here in ascending level.
- **Published concerns (with evidence, reported not repaired).**
  1. *B-page homing of in-pair lemmas.* `ex-intersection-pairing-on-p2` and
     `ex-intersection-pairing-on-blowup-of-p2` are published on the B page
     `intersection-products-on-smooth-projective-surfaces-examples`; three scaffold dependency
     lists of this pair used them as load-bearing inputs, which `depcheck`'s `b-leaf-content`
     rule forbids. Repaired locally by replacing the citations with A-page suppliers. If any
     other page needs those two items, they likewise cannot cite them as B-only homes.
     Confidence: confirmed (depcheck). Strategy: keep B pages leaves; cite A-page items.
  2. *Cross-group blocking edge (escalated).* `items/ex-gl2-quotient-by-diagonal-torus.md`
     (batch 15, homed on `algebraic-group-actions-orbits-stabilizers-and-controlled-
     quotients-examples`) declares `lem-product-of-projective-lines-is-a-smooth-projective-
     surface` (this pair's B page) in its `deps`, and the example's proof uses it in its
     smoothness step. Because the supplier lives only on a B page, `depcheck` reports
     `b-leaf-content` (confirmed; exact ids above). Remedies, all outside this pair's edit
     authority: (a) the owner re-homes `lem-product-of-projective-lines-is-a-smooth-
     projective-surface` to this pair's A page (an owner-only reading-order change), or
     (b) batch 15 replaces the dependency with a local argument or an A-page supplier. Until
     one lands, the whole-run `depcheck` gate stays red on this edge even though every
     batch-21 item is clean.
  3. *Other-batch observations.* `node tools/item-dependency-levels.mjs check --run …` reports
     `ex-hopf-algebra-of-a-split-torus` (batch 13): label 3 vs computed 2 — an other-batch
     record, reported only. The global `depcheck` FAIL also includes unrelated pre-existing
     findings (published items without audit stamps, other batches' `b-leaf-content` edges);
     none involves a batch-21 item.
  4. *Ledger refresh blocked by a sibling YAML defect.*
     `items/lem-upper-unitriangular-coordinate-ring-is-coconnected.md` writes
     `title: Coconnected Hopf algebras: the coordinate ring of U_n and passage to quotients`
     with the inner colon unquoted; the ledger's YAML reader aborts with "Nested mappings are
     not allowed in compact mappings at line 3, column 8". A scan of all 894 items named in
     the run's manifests found this as the only such file. `frontier-dependency-ledger.mjs
     refresh` uses this stricter reader (rendercheck tolerates the line), so the unified
     ledger cannot be refreshed and the batch-15 → batch-21 edge above cannot be registered
     until the title is quoted; remedy: quote the `title` string in that sibling item.
     Reported, not repaired (sibling content, concurrent author).
- **Open obligations.** (i) The Step-4 splice must put the 18 items into
  `research/plan-spec.json` rows 897/898 in the checkpoint order above and re-run
  `validate-plan` (its item lists are empty until then; intra-item order is already
  dependency-correct in both manifests and pages). (ii) The cross-group edge in item 2 above
  is escalated to the owner. (iii) The two pages and 18 items remain `draft` until Step 4-9;
  nothing here asserts publication readiness. (iv) `frontier-dependency-ledger.mjs refresh`
  must be re-run by the engine/owner once the sibling YAML title above is quoted; the
  batch-21 consumer input is already present and empty (this pair consumes no cross-batch
  supplier), and the batch-15 consumer row for the edge to this pair's B-page lemma will be
  generated from `items/ex-gl2-quotient-by-diagonal-torus.md` at that refresh.
