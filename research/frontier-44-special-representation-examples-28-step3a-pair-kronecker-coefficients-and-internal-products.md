# Step 3a scope review — pair `kronecker-coefficients-and-internal-products` / `kronecker-coefficients-and-internal-products-examples`

- Run: `frontier-44-special-representation-examples-28`
- Role/label: alpha / `step3a-pair-kronecker-coefficients-and-internal-products-0e449a35ecee4f94`
- Batches: 26 (A page order 1582, 12 items; B page order 1583, 3 items)
- Date: 2026-10-10
- **Decision: `sufficient`** — scope only; this is not item approval, proof
  certification or an owner record.

## Inputs read

- Manifests: `...-batch-26.pages.json` (both pages), `...-batch-26.coverage.json`,
  `...-batch-26.cross-batch-dependencies.json` (empty consumer input, `[]`),
  `...-batch-26.notes.md`; `research/plan-spec.json` orders 1582/1583 (title,
  category, companion and the three-element `requires` agree with the manifest).
- Dependency records: consolidated `...-cross-batch-dependencies.json`
  (23 batch-26 supplier edges into batches 27/28; 0 edges into batch 26),
  `...-scope-ledger.json` (both pages owed and present), step-1 readiness
  (`step1-decisions check`: 858/858 ready, closed).
- Prose/design: `research/plan-symmetric-group-representations-track.md`
  (SYMR-13 row at L48: "internal tensor products, exact character formulas and
  open boundary"; deliberate limits §3; dependency plan §7),
  `research/symmetric-group-planning/proposed-inventory.md` §SYMR-13 (10 A +
  3 B planned items with deps, routes and locators), and
  `...-owner-authoring-direction.md` (preserve every planned claim; local
  prerequisites permitted; no scope growth).
- Owner/Step-1 records: `...-alpha-step1-drift.md` (`no-drift` for this pair);
  the "Owner Step-1 correction and review" section of the batch-26 notes
  (degreewise unit `h_n`; Hermitian-to-bilinear identity `b(x,y)=H(conj(x),y)`;
  PP3 sentinel `l+1` with `ind_I`; `ν`-padding read as padding its tail).
- Primary sources actually fetched and read for scope (complete relevant
  ranges, not snippets): Pak–Panova, *Bounds on the Kronecker coefficients*,
  arXiv:1406.2988v2 (PDF SHA-256 `4bec1c86…`, 18 pp.): §1 introduction, §2.3
  (definition (1.1), full $S_3$ symmetry, conjugation identity (2.3)), §4.1
  (Theorem 4.1 with (⊛), Corollary 4.2, the printed proof of Theorem 1.1),
  §4.2 (reduction map, Reduction Lemma 4.3 with its proof, Example 4.4);
  Pak–Panova, *On the complexity of computing Kronecker coefficients*,
  arXiv:1404.0653v3 (PDF SHA-256 `6357e338…`, byte-identical to the hash
  recorded in the batch-26 notes): §1, §2.3 Littlewood's identity (1), and the
  complete printed proof of Reduction Lemma 5.1 in §5.1; Chan,
  *Representation Theory of Symmetric Groups*, §9 (Definition 9.1, Remark 9.2,
  Lemma 9.3). All other coverage rows and published suppliers were read on
  disk at statement level.

## A-page scope

The 12 A items are the design's 10 planned A items item-for-item — definition
of $g$ and the internal tensor product; self-duality of Specht modules; the
three-character inner product; nonnegative integrality with full $S_3$ and
two-factor conjugation symmetry; the internal product on $\Lambda$;
power-sum diagonalization; first-row padding; the padded coefficient sequence;
row-gap reduction with conditional $k$-stability; and the open-boundary
remark — plus the two local suppliers the batch notes add
(`lem-littlewood-internal-product-outer-compatibility`,
`lem-kronecker-reduction-lemma`), which are exactly the joints the design's
stability route names ("Apply the reduction lemma…"). This covers the plan's
SYMR-13 role in full, and honours both design limits: no general positive
combinatorial rule is asserted, and "without it only eventual k-stability is
claimed".

Statement-level comparison against the sources (scope, not proof):

- Theorem 4.1 matches `thm-row-gap-reduction-and-conditional-k-stability`
  part (i): ordering $\lambda_1\le\mu_1\le\nu_1$, $s=n-\nu_1$, condition
  $\min\{\lambda_k,\mu_k\}\ge\max\{\lambda_{k+1},\mu_{k+1}\}+s$, conclusion
  for all $t\ge0$. Reduction Lemma 4.3/5.1 matches part (ii)'s engine and
  `lem-kronecker-reduction-lemma`, including the PP3 sentinel $\ell+1$,
  the block rank $\mathrm{ind}_I$, the map
  $\phi(\theta)_j=\theta_j-\rho_{i_j}+s(\ell-i_j+\mathrm{ind}_I(i_j))$,
  $\phi(\nu)=(r-s,\nu_2,\dots)$ and the bound $r\le 2s\ell^2$.
- The design's paraphrase "simultaneous addition of $(t^k)$ to all three
  partitions" is corrected to the source's exact operation — $(t^k)$ to
  $\lambda,\mu$ and $(tk)$ added to the first part of $\nu$. This is faithful:
  the printed proof writes $s\ge n-\nu_1=(n+tk)-\gamma_1$ and
  $\phi(\gamma)=\phi(\nu)$ with $\gamma_1=\nu_1+tk$, and the scaffold's
  parenthetical ("for $k=1$ this is $\nu+(t)=(\nu_2,\nu_3,\dots)[n+t]$")
  encodes exactly that componentwise reading. For $k=1$ the design reading and
  the source coincide, so the design's $k=1$ claims and the B counterexample
  are unchanged.
- Symmetry (2.3) and the three-character formula in the source match
  `prop-kronecker-coefficient-is-a-three-character-inner-product` and
  `cor-kronecker-coefficients-are-nonnegative-integers-and-s3-symmetric`
  (three conjugation equalities plus full $S_3$). Example 4.4 matches the B
  counterexample verbatim.
- The item roles are as designed: `def-first-row-padding-of-a-partition` and
  `def-padded-kronecker-coefficient-sequence` are the shared interfaces
  consumed by SYMR-14 (batch 27) and SYMR-15 (batch 28), and
  `def-kronecker-…`, `def-internal-product-…`, `prop-power-sums-…` and
  `prop-kronecker-…` are consumed by batch 28.

## B-page scope

The 3 B items are the design's 3 planned B items: the complete $S_3$ internal
product table (with its character rows), the padding-threshold counterexample
($\alpha=(2,1)$ begins only at $n=5$), and the pre-stability failure with the
source's Example 4.4 data. Scope-level numeric spot checks (mine, this
review): $g((2,1),(2,1),(2,1))=1$ and the other $S_3$ entries by the character
rows; $g((2,2),(2,2),(3,1))=(12-12)/24=0$; $g((3,2),(3,2),(4,1))=120/120=1$.
The B page requires only its A page and is a dependency leaf: across all 100
run pages there is no dependency on any of the three B item ids.

## Design-vs-inventory notes (recorded; no action required)

1. The two added A suppliers are inside the owner direction ("add necessary
   local prerequisites within the selected scope"). The recorded deps repairs
   check out: the dropped `cor-power-sums-are-orthogonal-for-the-hall-inner-product`
   and `thm-complex-specht-modules-are-irreducible` are indeed unused by the
   retained strategies, and every other dep change is an addition of a used
   supplier.
2. Source nuance: coverage marks Pak–Panova Theorem 1.1 as `included` in the
   row-gap item; the printed statement adds "bounded and monotone increasing".
   The scaffold carries the eventual-constancy consequence the design requires
   (proved via Theorem 4.1 from the same row, which is the source's own first
   step) and explicitly disclaims monotonicity; the monotonicity input
   (Manivel's inequality) is dispositioned `out-of-scope` with a written
   reason. No planned claim is lost (eventual constancy already gives
   boundedness).
3. Metadata advisories for Step 4: `validate-plan` reports the A page's three
   declared `requires` are mutually redundant (`[redundant-prereq]`: the
   Frobenius page is reached through the outer-products page); the plan, batch
   task and plan-spec all agree on the triple and it was preserved. Also, the
   plan §7 prose says SYMR-13 and SYMR-14 "meet only on the post-FI SYMR-15
   stability page", while the item-level design explicitly calls first-row
   padding "shared with FI-modules"; the current scaffold (batch 27 consuming
   `def-first-row-padding-of-a-partition`) follows the authoritative
   item-level design, not scope growth.
4. Citation bookkeeping for Step 3b (not scope-blocking): three A items cite
   "G. D. James, … Encyclopedia of Mathematics and its Applications 16,
   Addison-Wesley 1981; §§7 and 11 …, §25 (the Frobenius characteristic)" at
   the Webb-hosted URL. I fetched that URL: it serves the 1978 Springer
   *Lecture Notes in Mathematics* 682 scan (161 pp.; §25 is "Young's
   Orthogonal Form"), and Encyclopedia vol. 16 (1981) is by James–Kerber. The
   same citation string appears in other batches' items (e.g. batch 20), so a
   run-level reconciliation may be preferable; batch-26 coverage does not
   harvest James, and the pair's actual form/self-duality suppliers are the
   harvested Chan §9 and Webb/Craven rows (Chan Definition 9.1, Remark 9.2,
   Lemma 9.3 verified in the fetched notes). The mathematics does not depend
   on the James reference.

## Prerequisite closure — no unmet prerequisites

- All 43 distinct direct dependency ids of the 15 items resolve: 33 published
  items + 10 same-pair scaffold items; 0 absent.
- Independent transitive walk from the 15 items over `deps` and `justified_by`
  (run manifests plus published item front matter): 905 ids, 890 external,
  all published, 0 plan-only or missing ids, 0 in-run scaffold items outside
  the pair. Nothing is needed that is absent from both the published library
  and the current scaffold.
- Cross-batch: batch 26 has no in-run supplier (its consumer input is `[]`);
  the 23 declared edges in the other direction (21 item + 2 page edges into
  batches 27/28) are batch-27/28 bookkeeping with recorded (currently `open`)
  reviews, and the owner batch-28 repair protected batch 26's manifests, so
  those interfaces are unchanged.
- Load-bearing published suppliers were checked at statement level and match
  the uses: Maschke; Specht classification/pairwise inequivalence; isotypic
  components; the invariant tabloid form with
  `lem-specht-module-has-nondegenerate-self-pairing-in-characteristic-zero`;
  tensor/dual and inner-product character theorems; the Frobenius
  characteristic map and graded ring isomorphism; the sign twist/omega
  involution; the outer LR rule; Frobenius reciprocity and the induced
  character formula; the LR Schur product expansion and LR tableaux;
  Jacobi–Trudi; and the Schur orthonormal integral basis.

## Source coverage

12 source rows across the two pages, all `fetch_verified` (12/12 verified,
12/12 resolved); `coverage-checklist --require-destination`: 60 harvested
results, 0 errors, 0 warnings. Deferred rows are exactly the design's split
(Murnaghan stability, reduced coefficients and thresholds → SYMR-15;
character polynomials → SYMR-14), and the out-of-scope rows (Manivel's
inequality; Theorem 1.2/Lemma 1.4) carry written reasons.

## Checks re-run during this review

`manifest-deps` (15 items, 0 errors); `coverage-checklist --require-destination`
(0/0); `source-fetch-check` (12/12 verified, 12/12 resolved);
`item-dependency-levels check` (858 items across 100 pages, no batch-26
findings); `frontier-item-gate --tool validate-plan` (exit 0, advisory noted
above); `step1-decisions check` (858/858 ready, closed); my own direct-dep
resolution and transitive closure walk; and a scan of all run manifests for
consumers of the B-page items (none).

## Uncertainty

- Scope only. I did not verify proofs; statements and strategies were read at
  hypothesis level, the reduction-lemma/Littlewood-identity statements were
  compared with the complete printed source proofs, and no step-by-step proof
  certification is claimed — none is due at Step 3a.
- Theorem 1.1's monotonicity clause is deliberately not carried (recorded
  above); I did not read Manivel's geometric proof, which the coverage marks
  out of scope by design.
- The James reference mismatch is verified for the URL document's identity and
  its §25, but I did not determine which passage/edition the author intended
  for the Frobenius characteristic; recorded for the owner/Step 3b.
- The $(t^k)$/$(tk)$ reading rests on the source's own proof identities
  ($\gamma_1=\nu_1+tk$ and $\phi(\gamma)=\phi(\nu)$); text extraction of the
  PDF does not render superscripts reliably, but those identities force the
  componentwise reading stated in the scaffold.

## Decision

`sufficient` for `kronecker-coefficients-and-internal-products`: the pair's
planned definitions, results and examples adequately cover the intended
subject, with no unmet prerequisites, adequate source coverage, and no B-page
consumer outside the pair. Recorded with
`tools/step3-decisions.mjs record-scope`.
