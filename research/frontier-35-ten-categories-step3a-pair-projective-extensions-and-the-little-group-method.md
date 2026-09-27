# Step 3a scope review — `projective-extensions-and-the-little-group-method`

- Run: `frontier-35-ten-categories`; role alpha; label
  `step3a-pair-projective-extensions-and-the-little-group-method-208a74751e2f185a`.
- Pair: A `projective-extensions-and-the-little-group-method` / B
  `projective-extensions-and-the-little-group-method-examples` (batch 9, orders
  510.039 / 510.04, category `representation-theory`). Owned pair only; no
  scaffold, item, manifest or owner record edited. Reviewed 2026-09-24.
- Decision: **sufficient** for the intended subject as designed. No omitted
  topic, result or example of the RG-5 subject was found; no merge or
  enrichment is proposed. One plan-hygiene issue outside scope is recorded
  below for the owner.

## Evidence read

- Prose design: `research/plan-representation-theory-groups-track.md` RG-5,
  L394–437 — A inventory L409–421 (13 ids), hard proof plan L423–428, B leaf
  L430–437 (4 ids); spine line L36 ("factor sets, extension obstruction,
  projective little groups"). Source corpus L2228/L2233 and the two-treatment
  matrix L2282 give exactly Späth §1.A–1.B (printed pp. 2–6) and tom Dieck
  §§4.2.4–4.2.7 (printed pp. 55–57). Heading crosswalk L2345–2349 (RG-5/H1–H5)
  maps every designed id; L2812 counts RG-5 at 17 ids (16 scaffolded + 1
  already-published substitute below). The successor RG-6 (L439–476) declares
  `brauer-induction-and-elementary-subgroups`, `clifford-theory-over-normal-subgroups`,
  `induced-representations-and-frobenius-reciprocity` — it does not require
  this page, so no in-run consumer depends on RG-5 items.
- Manifests: `research/frontier-35-ten-categories-batch-9.pages.json` — A has
  12 items, `requires` = `clifford-theory-over-normal-subgroups`,
  `group-extensions-complements-and-schur-zassenhaus`,
  `normal-subgroups-and-quotient-groups` (all three published:
  `library/representation-theory/…`, `library/group-theory/…`,
  `library/abstract-algebra/…`); B has 4 items, `requires` = A only. Matches
  `research/plan-spec.json` orders 510.039/510.04 and companion pointers; both
  plan entries have empty `items` (no plan-vs-manifest inventory conflict).
  `research/frontier-35-ten-categories-batch-9.cross-batch-dependencies.json`
  is `[]`; the scope ledger lists both pages as owed, kind A/B, batch 9.
- Owner decisions: `research/frontier-35-ten-categories-owner-authoring-direction.md`
  contains no batch-9 instruction (batch-8 pair and Easton pseudointersection
  item only); no step-3a owner receipt, deferred-pair or deferred-item entry
  names this pair. Drift verdict: `research/frontier-35-ten-categories-alpha-step1-drift.md`
  L81–85, `no-drift`.
- Coverage: `research/frontier-35-ten-categories-batch-9.coverage.json`, this A
  entry — 2 sources, 17 canonical dispositions, 20 source-content rows
  (Späth; tom Dieck). Re-ran
  `node tools/coverage-checklist.mjs research/frontier-35-ten-categories-batch-9.coverage.json`
  → 2 pages, 83 harvested results, 0 errors, 0 warnings, and
  `node tools/source-fetch-check.mjs --coverage research/frontier-35-ten-categories-batch-9.coverage.json`
  → 6/6 fetch-verified, 6/6 resolved.
- Sources re-read directly (2026-09-24). Re-fetched both PDFs; byte counts and
  `sha256_16` match the stored stamps (Späth 481426 bytes /
  `dc3a25b54662d253`, 29 pp.; tom Dieck 599982 bytes / `16052fdeb2dbe0c1`,
  67 pp.). Read Späth §1.A–§1.B in full: Def 1.4 (projective representation,
  factor set, similarity, irreducibility), Rem 1.5(a) rephasing / 1.5(b)
  twisted group algebra and module bijection, Def 1.6–1.7, Lemma 1.8(a)–(d),
  Thm 1.10, Prop 1.11, Thm 1.12, Cor 1.13, Notation 1.14, Thm 1.15 (all
  clauses). Read tom Dieck (4.2.1)–(4.2.7) on pp. 54–57, including Thm (4.2.4),
  Rem (4.2.5), Prop (4.2.6) and Rem (4.2.7).
- Items: all 16 manifest statements and `deps` read; the published substitute
  `items/def-extension-of-an-irreducible-normal-subgroup-representation.md`
  (status published) read; the published H² suppliers
  `items/def-normalized-two-cocycle-and-two-coboundary.md` and
  `items/def-second-cohomology-by-factor-sets.md` read to check conventions.

## Inventory against the design

- A: the 12 designed items after the lifting-problem definition are present in
  design order — projective representation/factor set, cocycle, rephasing,
  twisted algebra, module correspondence (with semisimplicity), projective
  inertia operators with descent to $I/N$, obstruction class, extension
  criterion, cocycle central extension, linearization, projective Clifford
  correspondence (including $I=N$, trivial cocycle and the Gallagher
  reduction), split little-group theorem with degrees. Design id
  `def-extension-of-an-invariant-irreducible-representation` (L409) is
  harvested `already-published` as
  `def-extension-of-an-irreducible-normal-subgroup-representation`: that
  published definition is more general (any $N\le H\le G$ on the same space)
  and states the invariance and irreducibility consequences, so it covers the
  designed role. No duplicate definition is scaffolded — correct disposition.
- B: exactly the four designed leaves, in design order: Q8 linearization,
  non-extendable invariant central character, dihedral little-group
  classification, explicit coboundary rephasing. Together they exercise the
  obstructed case ($Q_8$: $I=G$, $I/N\cong C_2\times C_2$, nonvanishing
  class), the necessity of the obstruction, the unobstructed split case, and
  choice-independence of the class.
- Conventions: the cocycle equation
  $\alpha(q,r)\alpha(qr,s)=\alpha(r,s)\alpha(q,rs)$ and the coboundary
  $\alpha_c(q,r)=c(q)c(r)c(qr)^{-1}\alpha(q,r)$ are the multiplicative form of
  the published normalized two-cocycle/two-coboundary definition (additive
  form read: $g\!\cdot\!f(h,k)-f(gh,k)+f(g,hk)-f(g,h)=0$,
  $(\delta u)(g,h)=g\!\cdot\!u(h)-u(gh)+u(g)$); the inertia action
  $\theta^g(n)=\theta(g^{-1}ng)$ matches the published
  `def-conjugate-representation-and-inertia-group`; the factor-set side
  $P(q)P(r)=\alpha(q,r)P(qr)$ matches Späth Def 1.4 and the track convention
  at L2150.
- Source coverage completeness: every numbered item of Späth §1.A–§1.B is
  harvested with a disposition except Remark 1.9 (descent by
  $Z\le\ker\theta$); I searched the full fetched text and Remark 1.9 is never
  cited again in the accessible paper, and the only descent clause this page
  needs (factor set descending to $I/N$) sits in
  `lem-invariant-irrep-produces-a-projective-inertia-extension`. No scope
  impact. `thm-extension-exists-iff-the-clifford-obstruction-vanishes` and
  `lem-cocycle-central-extension-is-a-group` correspond to Späth Prop 1.11 /
  Thm 1.12 and tom Dieck's obstruction discussion. The two declines I checked
  and endorse: Späth Thm 1.10 (finite-order factor set; its proof imports the
  cyclic-extension result [I, 11.22] and the page's linearization route needs
  no finite-image claim) and §2 character-triple comparison (a later
  global-local topic used by neither batch-9 pair).

## Scope judgement

The intended subject is the projective extension theory of a finite group over
an invariant normal type: factor sets and their cocycle/coboundary structure,
the cohomological extension obstruction in $H^2(I/N,\mathbb C^\times)$, its
realization through a central extension, the projective Clifford
correspondence, and the resulting little-group classification for
$G=A\rtimes H$ with $A$ finite abelian. The planned A items deliver every
stage of that chain with the degenerate cases named, and the four B leaves
illustrate each mechanism on finite examples; the statements match the two
source treatments I read in full. This is an adequate reading unit for its
place in the library (order 510.039 between `clifford-theory-over-normal-subgroups`
and `monomial-characters-and-m-groups`), and its only in-run consumer is its
own examples page.

Honest boundaries (deliberate, not omissions of the designed subject): no
general Schur multiplier, representation-group or universal-central-extension
theory (design excludes it); no projective character counting
($\alpha$-regular classes and dimension formulas) — neither source range nor
any consumer needs it; the nonsplit little-group case appears as the
correction supplied by the projective correspondence
(as stated in `thm-little-group-method-for-a-split-abelian-normal-subgroup`),
not as a standalone Mackey-machine theorem. Proof correctness is Step 3b/Step
5 work and is not judged here; the projective Clifford theorem's source proof
is a citation (Navarro/Navarro–Tiep, unread), which the design already
replaces with the local cocycle/twisted-algebra/linearization items.

## Owner-actionable interface notes (not scope defects)

1. **Undeclared earlier page prerequisite.** The pair's transitive item
   closure reaches three published items of
   `second-cohomology-and-abelian-kernel-extensions` (order 365.073, earlier
   than 510.039): `def-normalized-two-cocycle-and-two-coboundary`,
   `def-second-cohomology-by-factor-sets`,
   `lem-normalized-two-cocycles-and-coboundaries-form-groups`, used by
   `lem-factor-set-is-a-normalized-two-cocycle`,
   `lem-rephasing-changes-the-factor-set-by-a-coboundary` and
   `def-clifford-obstruction-class`. That page is not in the A page's
   `requires` closure, so `validate-plan`'s undeclared-prereq check fails (the
   same finding was recorded in `research/frontier-35-ten-categories-batch-4.notes.md`
   L162). Since the supplier is published and strictly earlier, the fix is an
   owner reconciliation of the page prerequisite declaration (add the edge or
   localize the normalization), not an inventory change. The drift note
   (`…-alpha-step1-drift.md` L83–85) forbids only a later group-cohomology
   supplier, so either remedy is compatible with it.
2. **Authoring detail inside the approved scope.** Späth Def 1.4 also defines
   similarity and irreducibility of projective representations, and
   `thm-projective-clifford-correspondence` quantifies over "irreducible
   projective representations"; the harvest treats those clauses as covered by
   `def-projective-representation-and-factor-set`, so the Step 3b author
   should define them there (equivalently via the twisted-algebra module
   dictionary). No scaffold change is requested by this review.

## Uncertainty

- I verified statement-level mathematics and coverage, not proofs; I did not
  read the cited Navarro/Navarro–Tiep proof of the projective Clifford theorem
  (outside the design's source range) and did not adjudicate the local proof
  routes for `thm-projective-clifford-correspondence` or
  `thm-little-group-method-for-a-split-abelian-normal-subgroup`.
- Coverage-harvest completeness is a reading judgement; I checked it against
  the two fetched source ranges heading by heading, and the one unharvested
  numbered item (Remark 1.9) has no downstream use in the source.
