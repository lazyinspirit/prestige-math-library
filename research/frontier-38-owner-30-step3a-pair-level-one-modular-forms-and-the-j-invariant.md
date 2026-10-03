> Historical engine scope report. The confirmed omissions and λ defect below
> were repaired locally in `research/frontier-38-owner-30-local-scope-repair-batch21.md`.
> Current inventory is A26/B13, with three added A items and E₂ moved to A.
> Current proof/readiness contracts: `research/frontier-38-owner-30-batch-21.scope-repair-contracts.json`.
> The historical insufficient receipt remains unchanged; parent owns current scope resolution.

# Step 3a scope review — `level-one-modular-forms-and-the-j-invariant`

- Run: `frontier-38-owner-30`, batch 21, role alpha (Step 3a scope review).
- A page: `level-one-modular-forms-and-the-j-invariant` (order 847).
- B page: `level-one-modular-forms-and-the-j-invariant-examples` (order 848).
- Scope decision: **insufficient** (receipt `research/frontier-38-owner-30-step3a-review-level-one-modular-forms-and-the-j-invariant.json`).
- This report decides scope only. It is not an item approval, a proof review, or an
  owner record, and it edits no scaffold. Per the Step 3a rule the pair stops here
  and the omissions below go to the owner for a proceed / merge / enrich decision.

## Inputs read (exact paths)

- Design: `research/plan-complex-analysis-track.md` CA-MF-1 at L3919–3960 (item table
  L3927–3938; `def-modular-discriminant-and-j-invariant` row L3936; companion L3940–3944;
  sources/proof route L3946–3958; forward references L3960); its design-trap rows L485–486;
  requires crosswalk L5426; order row L5735.
- Normative harvest table of the same plan: Stein–Shakarchi Ch. 9–10 assignments L4638–4644
  (Ch. 10 §§1–1.1 “Product formula for the Jacobi theta function,” “Further transformation
  laws” → `I(CA-MF-1)` and `IN(CA-22 theta proof)`, L4641–4643); Milne Ch. 2–4 assignments
  L4784–4797 (Ch. 4 “Modular functions,” …, “The functions $\Delta$ and $j$” →
  `I(CA-MF-1)`, L4791–4794); McMullen §5.5–5.8 assignments L4808–4817 (§5.7 → `I(CA-MF-1)`,
  final additive/multiplicative-number-theory paragraph deferred, L4813–4815).
- Contract: `research/plan-spec.json` rows 847/848 (empty planned item lists; the A `requires`
  list equals the manifest's seven entries verbatim; companion pointers agree).
- Manifest: `research/frontier-38-owner-30-batch-21.pages.json` (only this pair in the batch;
  A 22 items, B 14 items).
- Coverage: `research/frontier-38-owner-30-batch-21.coverage.json` (6 source entries, 62
  harvested rows) and scaffold record `research/frontier-38-owner-30-batch-21.notes.md`.
- Step-1 record: `research/frontier-38-owner-30-alpha-step1-drift.md`, section
  `### level-one-modular-forms-and-the-j-invariant` (VERDICT: no-drift, “normal authoring”).
- Owner direction: `research/frontier-38-owner-30-owner-authoring-direction.md`
  (pair selected at 847/848; local-prerequisite rule; 100-item cap; preserve every
  commissioned claim; no reliance on unbuilt pairs).
- Dependency records: `research/frontier-38-owner-30-batch-21.cross-batch-dependencies.json`
  (`[]`), `node tools/frontier-dependency-ledger.mjs refresh --run frontier-38-owner-30`
  (no batch-21 edge), and `node tools/step3-decisions.mjs check --run frontier-38-owner-30
  --phase scope` (this page read “current scope review required”; no owner/review receipt
  existed before this review).
- Sources, independently re-read in this review from the cached full texts whose SHA-256/byte
  stamps match the coverage fetch stamps exactly: `/tmp/milne-mf.pdf` `977f06a4e838c43c`,
  1 010 364 bytes; `/tmp/zagier.pdf` `95a76c0978676f85`, 1 234 019 bytes; `/tmp/mcmullen.pdf`
  `60f8ccafc4084b83`, 768 782 bytes; text searches in `/tmp/milne.txt`, `/tmp/zagier.txt`.
  Directly re-read: Milne Ch. 4 §4.3 including “The expansion of Δ and j” (printed pp. 56–58);
  Zagier §§2.3–2.4 (printed pp. 18–23); McMullen Ch. 5 §5.3–§5.7 (printed pp. 92–105).

## Design vs delivered scaffold

- All 12 design A rows are present, id by id: `def-modular-group-action-on-the-upper-half-plane`,
  `thm-standard-fundamental-domain-for-the-modular-group`,
  `def-compactified-level-one-modular-curve`, `def-level-one-modular-form-and-cusp-form`,
  `thm-q-expansion-principle-at-the-cusp`, `def-level-one-eisenstein-series`,
  `thm-eisenstein-series-are-modular-forms`, `thm-level-one-valence-formula`,
  `thm-ring-of-level-one-modular-forms`, `def-modular-discriminant-and-j-invariant`,
  `thm-j-invariant-classifies-complex-tori`, `thm-j-uniformizes-the-level-one-modular-curve`.
- The A page adds the 10 local prerequisites recorded in the batch notes
  (`lem-modular-group-reduction-to-the-standard-domain`, `lem-modular-quotient-local-charts`,
  `lem-level-one-cusp-chart-and-compactness`, `lem-lattice-eisenstein-sums-converge`,
  `def-divisor-power-sums-sigma-k`, `lem-lipschitz-formula-for-the-lattice-sum`,
  `lem-valence-boundary-arc-computation`, `cor-zeros-of-e4-and-e6-at-the-elliptic-points`,
  `cor-dimension-of-level-one-modular-forms`, `lem-discriminant-is-a-nonvanishing-cusp-form`);
  all are intermediate closure items, none a scope expansion. A = 7 def + 6 thm + 6 lem +
  2 cor, 22 items, under the cap.
- The B page delivers the design companion as 14 items: tessellation
  (`ex-standard-fundamental-domain-tessellation`), elliptic points
  (`ex-elliptic-points-of-the-modular-group`), first Fourier coefficients of $E_4,E_6,\Delta,j$
  (`ex-first-fourier-coefficients-of-e4-e6-delta-and-j`), vanishing of odd weights
  (`ex-no-nonzero-odd-weight-level-one-modular-forms`), square/hexagonal tori
  (`ex-square-and-hexagonal-tori-and-their-j-invariants`), the modular $\lambda$ packet
  (`def-principal-congruence-subgroup-gamma-2`, `lem-gamma-2-is-torsion-free-and-has-no-elliptic-points`,
  `def-modular-lambda-function`, `lem-lambda-transformation-laws`, `lem-lambda-fibres-are-gamma-2-orbits`,
  `lem-weierstrass-j-invariant-of-the-legendre-normal-form`,
  `ex-modular-lambda-biholomorphism-onto-the-slit-plane`) and the $E_2$ counterexample packet
  (`lem-e2-transformation-law`, `fs-level-one-e2-is-a-weight-two-modular-form`).
- Design traps L485–486 are respected: the $SL_2\to PSL_2$ passage and the odd-weight
  consequence are stated in `def-modular-group-action-on-the-upper-half-plane` /
  `def-level-one-modular-form-and-cusp-form`; the cusp coordinate is supplied by
  `lem-level-one-cusp-chart-and-compactness` before $X(1)$ notation is fixed; the quotient
  charts at $i$, $\omega$ and $\infty$ are stabiliser-invariant-local-parameter charts
  (`lem-modular-quotient-local-charts` (b), cusp chart).
- Documented deviations that preserve the designed claims: the design's reading list
  (Stein–Shakarchi Chs. 9–10, Ahlfors Ch. 7) was replaced by complete Milne/Zagier/McMullen
  texts; the §2.4 $\Delta$-nonvanishing is proved by valence rather than from the product
  expansion; the two uncommissioned claims on the $\lambda$ example were removed (batch notes
  item 10). See the omission finding below for the one place where a promised result did not
  survive the replacement.

## Subject coverage (definitions, results, examples)

- Group and surface: $SL_2(\mathbb Z)/\{\pm I\}$ action with kernel and generators; orbit
  reduction; the standard fundamental domain with boundary identifications, elliptic
  stabilisers of orders 2 and 3 and $PSL_2(\mathbb Z)=\langle S,T\rangle$; orbifold local
  charts; the cusp $\mathbb Q\cup\{\infty\}$, the $q$-chart and compactness of $X(1)$;
  $Y(1)=X(1)\setminus\{[\infty]\}$ and the general $X_\Gamma,Y_\Gamma$ notation.
- Forms and expansions: the $q$-expansion principle with the boundedness/removability
  equivalence; weight-$k$ forms and cusp forms, odd-weight vanishing, multiplicativity;
  absolute convergence of the lattice Eisenstein sums; $E_k=G_k/(2\zeta(k))$ for even $k\ge4$
  with $E_2$ recorded as the quasimodular comparison object; the Lipschitz formula; the
  Fourier expansion $E_k=1-\frac{2k}{B_k}\sum\sigma_{k-1}(n)q^n$; $E_4,E_6$ expansions.
- Structure: the weighted valence formula with the arc contribution $\pi ik/6$; zeros of
  $E_4,E_6$; the dimension formula; $\Delta=(E_4^3-E_6^2)/1728$ as the nonvanishing weight-12
  cusp form with $\operatorname{ord}_\infty\Delta=1$; $M_*=\mathbb C[E_4,E_6]$, $S_*=\Delta M_*$;
  $j=E_4^3/\Delta$ with $j=q^{-1}+744+196884q+\cdots$, $j(i)=1728$, $j(\omega)=0$;
  lattices homothetic ⇔ tori biholomorphic ⇔ equal $j$; $\bar j:X(1)\to\widehat{\mathbb C}$
  a biholomorphism with the quotient-map local degrees 2 at $i$ and 3 at $\omega,\omega+1$.
- Companion: tiling by the standard domain; elliptic classes; $E_4,E_6,\Delta,j$ coefficients;
  no odd-weight forms; square/hexagonal tori; $\Gamma(2)$, its torsion-freeness, the level-two
  form $\lambda$, its $\Gamma(2)$-invariance and six $S_3$-values, fibres = $\Gamma(2)$-orbits,
  the Legendre-normal-form $j$-formula, the slit-domain map, and the $E_2$ transformation law
  plus the false modularity claim.
- By design out of scope and so disposed in coverage: Hecke theory, modular $L$-functions,
  Ramanujan multiplicativity/CM arithmetic, and the divisor-sum identities (deferred to the
  number-theory track); the published Weierstrass/elliptic lattice theory (already on
  `elliptic-functions-and-complex-tori`).

## Insufficiency ground — omitted results of the assigned harvest

**Confirmed omission 1 (decisive): the Jacobi product formula for the discriminant.**

- What is missing: $\Delta(\tau)=q\prod_{n\ge1}(1-q^n)^{24}$ — equivalently, in Milne's
  normalisation, $\Delta=(2\pi)^{12}q\prod(1-q^n)^{24}$ — together with the accompanying
  first expansion.
- Evidence of assignment: the design's own source line promises Milne “Ch. 4 from ‘Modular
  functions’ through ‘The functions $\Delta$ and $j$’” (`plan-complex-analysis-track.md`
  L3948–3949), and the normative harvest assigns the heading “The functions $\Delta$ and $j$”
  to `I(CA-MF-1)` with only divisor-sum arithmetic deferred (L4791–4794). Zagier §2.4 defines
  $\Delta$ by exactly this product (eq. (22), printed p. 21) and proves its weight-12
  modularity (Prop 7); McMullen states it on printed p. 105.
- Evidence of absence from the scaffold: neither A nor B statement contains the product;
  `def-modular-discriminant-and-j-invariant` defines $\Delta=(E_4^3-E_6^2)/1728$ and records
  only the $j$-expansion, and no lemma carries eq. (22).
- Evidence that the harvest's coverage record itself is wrong on this point: the Zagier row
  “§2.4: the product formula for Delta, the tau(n) table, and j = E4^3/Delta = q^{-1}+744+
  196884q+…” is disposed `included` → `def-modular-discriminant-and-j-invariant`, yet that
  item does not carry the product formula. The recorded Milne locator (“printed pp. 48–56”)
  also stops one subsection short of the promised range: in the retrieved 134-page text,
  printed p. 56 ends at Prop. 4.20, while Milne's subsection “The expansion of $\Delta$ and
  $j$” with Thm 4.21 (Jacobi) and Thm 4.22 sits on printed pp. 57–58 (page markers in
  `/tmp/milne.txt` at character lines 3922/4088/4225; Thm 4.21 at line 4210). So the
  commissioned terminus heading was never harvested.
- Why this is scope, not proof: the pair's planned inventory cannot deliver the promised
  source range; the result is a classical theorem of the assigned section, claimed as
  covered but absent from every planned statement. It is not consumed by any other planned
  claim, so the repair is additive and small.

**Confirmed omission 2 (secondary): integrality of the coefficients of $j$ (and of $\tau$).**

- What is missing: $j(\tau)=q^{-1}+744+\sum_{n\ge1}a_nq^n$ with $a_n\in\mathbb Z$ (Milne
  Thm 4.22, printed pp. 57–58; McMullen printed p. 105 “with $a_n\in\mathbb Z$”; Zagier
  eq. (24): the product coefficients $\tau(n)$ “are certain integers”). The scaffold states
  only the first terms and $O(q^2)$.
- Evidence of assignment/claim: the McMullen coverage row “Thm 5.42 and remarks: J = g2^3/
  Delta, j = q^{-1}+744+... with integral coefficients” is disposed `included` →
  `def-modular-discriminant-and-j-invariant`, but the item has no integrality clause.
- Mitigation: the underlying $\tau(n)$ arithmetic (multiplicativity, bounds, Hecke theory)
  is legitimately deferred (`D(number theory)`, coverage out-of-scope row for §4); only the
  integrality statement needs an explicit disposition or a one-clause addition.

**Route-substitution note (uncertainty, not a confirmed claim loss): Jacobi theta product
formula.** The harvest assigns Stein–Shakarchi Ch. 10 §§1–1.1 “Product formula for the Jacobi
theta function” to `I(CA-MF-1)` (and inline to CA-22, L4641–4643; the published
`the-riemann-zeta-function` pair carries the transformation $\theta(t)=t^{-1/2}\theta(1/t)$
but not the product). The scaffold replaced the theta route with McMullen's
$\wp$/cross-ratio route for every $\lambda$ claim, so no $\lambda$ claim is lost; but the
theta-product assignment is not explicitly disposed anywhere in the coverage file. The owner
should either record that substitution (route, not claim) or fold the theta product into the
same enrichment as omission 1, since the two share a proof route.

Everything else checked out as covered: the remaining 59 harvested rows map to a planned
claim with matching content up to destination-mapping imprecision (e.g., Milne Ex. 4.15
content sits in `cor-zeros-of-e4-and-e6-at-the-elliptic-points`/`lem-discriminant-is-a-
nonvanishing-cusp-form`; Milne Remark 4.4's “valence one / $X(1)\to S$” content sits in
`thm-j-uniformizes-the-level-one-modular-curve`; McMullen Thm 5.29's ideal-quadrilateral
clause sits in the B-page $\lambda$ example). The Milne Thm 2.22 genus/cusp-number clauses
are not carried, but the plan's own exception disposes “general congruence-subgroup theory”
as `D(number theory/modular curves)` (L4789–4790); no planned claim needs the genus of
$X(\Gamma)$, so this is a deferral, not an omission.

## Flagged planned-statement defect (non-scope; for Step 3b and the refuters)

- Item `ex-modular-lambda-biholomorphism-onto-the-slit-plane` (B). Its second sentence —
  “the interior of the standard ideal quadrilateral with vertices $\infty,-1,0,1$ (a
  fundamental domain for $\Gamma(2)$) is mapped bijectively by $\lambda$ onto
  $\mathbb C\setminus\{0,1\}$” — is false as written and contradicts its own title (“slit
  plane”). The true pair of statements is: $\bar\lambda:Y(2)\to\mathbb C\setminus\{0,1\}$
  is a biholomorphism (McMullen Thm 5.30, printed p. 96), while $\lambda$ restricted to the
  open quadrilateral is a biholomorphism onto the slit plane
  $\mathbb C\setminus\bigl((-\infty,0]\cup[1,\infty)\bigr)$; the four sides map 2-to-1 onto
  the two slits under the $\Gamma(2)$ identifications, and the imaginary axis maps onto
  $(0,1)$ (McMullen pp. 95–98; the cylinder/cusp picture on pp. 94–96). Recommended repair:
  keep the $Y(2)$ biholomorphism and restate the quadrilateral image as the slit plane.
- Minor record imprecisions (no scaffold action required, but worth correcting with the
  owner's enrichment): the coverage locator for Milne Ch. 4 should extend to printed pp. 57–58
  (Thms 4.21–4.22), and the two coverage rows quoted above should not say `included` for
  results no item carries unless the enrichment adds them.

## Prerequisite audit (unmet-prerequisite check)

- Method: collected the declared `deps` of all 36 scaffold items, resolved every external id
  against the published pages under `library/` (frontmatter `items:`/`examples:` arrays with
  `status: published`, both inline and block list styles) and against `items/`.
- Result: 123 distinct external suppliers; every one is a published item on a published page
  and has an item file on disk (0 unresolved). The pair declares no cross-batch in-run
  dependency (`batch-21.cross-batch-dependencies.json` = `[]`; the refreshed unified ledger
  has no batch-21 edge), no A×B dependency exists (no B item is a dependency of an A item),
  and no other batch consumes a batch-21 item.
- Page-level `requires`: all seven A-page prerequisites are published
  (`the-argument-principle-and-rouche` 321, `infinite-products-and-weierstrass-factorisation`
  337, `the-riemann-zeta-function` 345, `group-actions-and-cayleys-theorem` 42,
  `subspaces-products-and-quotients` 251, `elliptic-functions-and-complex-tori` 845,
  `riemann-surfaces-branched-maps-and-differentials` 843), i.e. all earlier in reading order
  than 847; B requires A. Spot checks of load-bearing suppliers
  (`thm-complex-torus-quotient-is-well-defined`, `thm-weierstrass-p-differential-equation`
  with $g_2=60G_4$, $g_3=140G_6$, `lem-weierstrass-p-degree-two-and-half-periods`,
  `thm-covering-space-lifting-criterion`, `cor-entire-biholomorphisms-are-affine`,
  `thm-mittag-leffler-expansion-of-pi-cotangent`, `thm-special-values-of-riemann-zeta-at-
  integers`, `def-countable-choice`) state the claims the strategies invoke.
- Conclusion: no unmet prerequisite absent from both the published library and the current
  scaffold; nothing to flag for scaffold addition on prerequisite grounds. (Uncertainty,
  stated honestly: statements and locators were checked, not the full proofs of the 123
  published suppliers; proof-level verification is Step 3b/Step 5 territory. The omission
  finding above concerns a promised *result of this pair*, not a missing prerequisite.)

## Mechanical checks on the current batch (observed)

| Check | Result |
|---|---|
| `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-21.pages.json` | exit 0; 36 items, 0 missing, 0 errors |
| `node tools/content-policy.mjs --manifest-only …batch-21.pages.json` | exit 0; 36 scoped items, 0 errors, 0 warnings |
| `node tools/coverage-checklist.mjs …batch-21.coverage.json --require-destination` | exit 0; 2 pages, 62 harvested, 0 errors, 0 warnings |
| `node tools/source-fetch-check.mjs --coverage …batch-21.coverage.json` | exit 0; 6/6 fetch-verified (cached PDFs hash-match the stamps) |
| `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30` | exit 0; no error names a batch-21 item |
| `node tools/depcheck.mjs` (whole library) | OK — no cycles, all references resolve, no draft on a published page |
| `node tools/step3-decisions.mjs check --run frontier-38-owner-30 --phase scope` | this page was the only batch-21 open item (“current scope review required”); discharged by the receipt below |

## Recommended owner action

Because omission 1 is a named result of the design's promised Milne range (and of the
coverage's own `included` claims), the pair is `insufficient` until the owner reconciles it.
Two consistent resolutions, the owner's choice:

1. **Enrich** the A page with a small product-formula item, e.g.
   `lem-jacobi-product-formula-for-the-discriminant`: for $q=e^{2\pi i\tau}$,
   $\Delta(\tau)=q\prod_{n\ge1}(1-q^n)^{24}$, with the equivalent Milne normalisation; sources
   Milne Thm 4.21 (printed p. 57), Zagier §2.4 eq. (22) (printed p. 21), McMullen p. 105.
   The recorded proof routes are complete in the sources: Zagier Prop 7 (log-derivative
   equals $E_2$ plus the $E_2$ transformation law) or Milne's Hurwitz comparison plus
   $\dim S_{12}=1$. Dependency placement must respect the A-page rule that no A item may
   depend on a B item: the $E_2$ transformation law currently lives on B as
   `lem-e2-transformation-law`, so the owner should either move that law (or a minimal
   A-page version) to A, keeping the B counterexample item as a consumer, or use the
   $\dim S_{12}=1$ route that only needs `lem-discriminant-…` and `cor-dimension-…` already
   on A. If the enrichment is taken, fold in the integrality clause for $j$ (Milne Thm 4.22)
   and dispose the Stein–Shakarchi Ch. 10 theta-product assignment (same route).
2. **Re-dispose** the two coverage rows (Zagier §2.4 product formula; McMullen “with integral
   coefficients”) to a truthful disposition with an explicit number-theory deferral
   rationale, extend or correct the Milne locator, and record owner `proceed` for the
   unchanged scope.

No pair merger is recommended: the A/B split is correct (the companion already carries
$\lambda$, the tessellation, the elliptic points, odd weights, square/hexagonal tori and the
$E_2$ counterexample), both pages are far below the 100-item cap, and the omission is a
single self-contained result.

## Decision

`insufficient` — the planned definitions, results and examples realize the 12-row design
inventory and its companion, all 123 external suppliers are published, and no prerequisite
is unmet; but the design's promised Milne range and the coverage's own `included` claims
carry the Jacobi product formula for $\Delta$ (and the integrality of $j$'s coefficients)
that no planned item delivers. Receipt written with `node tools/step3-decisions.mjs
record-scope --run frontier-38-owner-30 --page level-one-modular-forms-and-the-j-invariant
--decision insufficient`, whose hash covers both pages of the pair at review time. The pair
stays blocked until the owner applies an amendment and records `proceed` for the resulting
scope.
