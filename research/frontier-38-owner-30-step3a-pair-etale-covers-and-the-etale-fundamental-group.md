# Step 3a scope review — etale-covers-and-the-etale-fundamental-group

- Run: `frontier-38-owner-30` (step `3a-scope`), role alpha, label
  `step3a-pair-etale-covers-and-the-etale-fundamental-group-120ec34dcb2cc07b`.
- A page: `etale-covers-and-the-etale-fundamental-group` (order 911, category
  `algebraic-geometry`, 24 items: 1 definition, 15 lemmas, 8 theorems; 21
  marked `local_addition`).
- B page: `etale-covers-and-the-etale-fundamental-group-examples` (order 912,
  2 items: `ex-etale-covers-of-gm`, `cex-fundamental-group-depends-on-base-field`).
  Companion pointers A↔B agree; B is a leaf.
- Declared prerequisites (both pages): `affine-schemes-and-the-structure-sheaf`,
  `fibre-products-base-change-and-scheme-theoretic-fibres`,
  `flat-smooth-and-etale-morphisms` — all three published under
  `library/scheme-theory/`, all three actually used by scoped items.
- Decision: **sufficient** (scope review only; not item or proof approval).
  Recorded with `node tools/step3-decisions.mjs record-scope` at the current
  pair content hash (non-owner review receipt
  `research/frontier-38-owner-30-step3a-review-etale-covers-and-the-etale-fundamental-group.json`).
- No scaffold, item, plan, manifest or owner record was edited; the only
  writes are this report and the review receipt.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-38-owner-30-batch-30.pages.json` | Current A inventory (24 items, all statements, `deps`, `local_addition`, levels) and B inventory (2 items), page `requires`, order, companion |
| `research/frontier-38-owner-30-batch-30.coverage.json` | 10 source entries, 45 harvested results with per-row destination (`included`/`inline`/`out-of-scope` + reason), fetch stamps (2026-10-02T15:31 UTC) |
| `research/frontier-38-owner-30-batch-30.notes.md` | Scaffold record: design conformance, dependency audit, source-treatment nuance (Milne §3 not counted as the second full proof treatment), check results |
| `research/frontier-38-owner-30-local-prereq-911.md`, `…-911-trait-reduction.md` | Packet note: exact source locators and read ranges (SGA 1 V/X, SGA 2 X, EGA III §5, Stacks Pione/Descent/Étale/Coherent/Algebraization), proof-route summary |
| `research/frontier-38-owner-30-packet-integration.md`, `…-owner-authoring-direction.md` | Registered 24 A / 2 B with 21 A local supports; binding owner direction to close missing finite-étale descent/fundamental-group prerequisites locally |
| `research/plan-spec.json` rows 911/912, `research/plan-algebraic-geometry-expansion-track.md` (page row line 49; prose contract line 268) | Controlling prose design: three A targets, two B boundary examples, preserved hypotheses and direction |
| `research/published-consumer-supplier-ledger.md` | Disposition of the pair's load-bearing published suppliers; current open-defect rows |
| Stacks Project read this session: Tag `0BND` (§58.6.2), `0C0P`/`0C0Q`/`0C0R` (§58.30.1–3), `0A48`/`0A49` (§58.9.1, §58.9.3); Milne, *Lectures on Étale Cohomology*, §3, PDF pp. 25–30 (printed 26–30), downloaded fresh (1,514,442 bytes, matching the coverage stamp) | Exact statements/hypotheses of the classification, specialization, proper-cover and base-change results; the multiplicative-group and base-field material behind both B items |
| Checks run this session | `coverage-checklist --require-destination` (2 pages, 45 rows, 0 errors/warnings); `source-fetch-check` (10/10 verified, 10/10 resolved); `url-sweep --fail-on-dead` (9/9 live); `manifest-deps` (26 items, 0 errors); `content-policy --manifest-only` (0/0); repo-wide `depcheck` (exit 0); `fwdcheck` (OK); `extcheck` (0 recorded-not-proved items in the pair closure); declared-dependency closure walk (2,289 nodes: 26 in-pair draft + 2,263 published, 0 missing); consumer scan (no page outside the pair requires either page) |

## Inventory against the prose design

The three commissioned A targets exist, with the commissioned kinds and
claims, and the 21 `local_addition` items are prerequisites each consumed
inside the pair (descent, nilpotent/complete-local lifting, purity, projective
and projective-modification lifting, proper smooth complete-DVR equivalence,
geometric connectedness, trait/geometric-field basepoint reduction, tame
inertia). Both commissioned B examples exist. No designed id is dropped or
renamed, and no item touches an unselected pair.

- `def-etale-fundamental-group-and-fibre-functor` defines the finite étale
  cover category FEt(X), the geometric fibre functor, π₁ᵉᵗ = Aut(F) with its
  profinite topology, and the input conventions (empty cover, geometric
  basepoint, skeleton size handling). This matches Stacks 58.6.1 (`0BNC`).
- `thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets` states
  the equivalence FEt(X) ≃ FinSet_{π₁ᵉᵗ(X,x̄)} for **any connected X**, plus
  profiniteness and the transitivity dictionary; it explicitly lists the
  locally Noetherian and finite-type cases. This is exactly Stacks 58.6.2
  (`0BND`), whose statement requires only connected X; the design's request to
  preserve the Noetherian/finite-type hypotheses is met as named special
  cases (a strengthening, not a loss).
- `thm-specialization-of-etale-pi1-under-geometric-hypotheses` states: S
  locally Noetherian, f smooth and proper with geometrically connected
  nonempty fibres, s₀ ∈ closure({s₁}), chosen algebraically closed geometric
  fibres/basepoints and trait data; a homomorphism
  sp: π₁(X_{s̄₁}) → π₁(X_{s̄₀}) (generalizing to special), surjective, an
  isomorphism when char κ(s₀)=0, and a prime-to-p isomorphism when
  char κ(s₀)=p; path changes conjugate, independence from unspecified data is
  not asserted. The direction, hypotheses and case split agree with Stacks
  58.30.1–58.30.3 (`0C0P`, `0C0Q`, `0C0R`) restricted to the design's
  locally Noetherian base. No full characteristic-p isomorphism is claimed.
- B: `ex-etale-covers-of-gm` gives the n-th power map on G_m for n invertible
  in an algebraically closed k, its deck group μ_n(k), the resulting order-n
  quotient, and the non-étaleness when p | n with the explicit nonreduced
  fibre — matching and sharpening Milne §3's multiplicative-group example.
  `cex-fundamental-group-depends-on-base-field` refutes base-field invariance
  with Spec R → Spec C (order-two quotient versus trivial), a witness
  supported by Milne §3's π₁(Spec k) = Gal(k^sep/k) example.

## Source coverage assessment

- The coverage file has complete per-row dispositions (every harvested
  heading is `included` with an item id, `inline` with an absorbing item, or
  `out-of-scope` with a specific reason); the three declined ranges
  (general henselian approximation, general proper coherent existence /
  double-adic correction, wider SGA 2 complete-intersection conclusion, SGA 1
  proper-homotopy argument) are genuinely outside the commissioned claims and
  none is needed by a scoped item. All 9 distinct source URLs resolve
  (9/9 live), and the 10 fetch stamps match the packet's recorded bytes/pages.
- Two independent full treatments back the classification (SGA 1 Exposé V
  §§3–5 + Stacks *Fundamental Groups* §§3, 5–6); specialization is backed by
  SGA 1 Exposé X and Stacks §58.30 with Stacks §58.16 for the trait/basepoint
  construction; purity by SGA 2 Exposé X 3.4(i) and Stacks §§19–21; lifting by
  SGA 1 Exposés I/IX and Stacks *Étale* §15; projective existence by EGA III
  §5 and Stacks *Cohomology of Schemes* §14/§18/§24–25. The recorded nuance —
  Milne §3 is a survey and is not counted as a second proof treatment of the
  classification — is honest and consistent with the file I read this session.
- I read the exact statements of the central source results this session
  (Stacks `0BND`, `0C0P`–`0C0R`, `0A48`–`0A49`; Milne §3 pp. 26–30) and they
  match the scoped contracts, including the specialization direction and the
  prime-to-p case. The SGA 1/SGA 2/EGA III full-text reads rest on the packet
  record and coverage dispositions; I did not personally re-read those
  volumes (see Uncertainty).

## Role in the library

- Page `requires` are exactly the three published pages named by the design
  and all three are load-bearing: e.g. `thm-affine-scheme-ring-anti-equivalence`
  (affine), `thm-fibre-products-of-schemes-exist` (fibre products),
  `def-etale-morphism-schemes` / `thm-etale-equivalent-flat-unramified-fp`
  (smooth/étale interfaces).
- No planned or live page outside the pair requires A911 or B912 (searched all
  `research/*.pages.json` and `plan-spec.json`): the pair is terminal, and B is
  a leaf with no external item consumers (`depcheck` `b-leaf-content` clean).
  This matches the design's role as a locally closed packet in the AG
  expansion track.
- The declared transitive closure is 2,289 items: 26 in-pair draft items plus
  2,263 published items, 0 missing, no draft or unpublished supplier outside
  the pair, no `recorded-not-proved`/`proved_here: false` node, and no edge
  into another in-run pair. 231 direct dep slots (86 distinct out-of-pair
  suppliers) all resolve; repo-wide `depcheck` reports no errors.

## Unmet prerequisites

None found. No scoped item consumes a claim that is absent from both the
published library and the current scaffold: every out-of-pair supplier in the
closure is a published item, and the only drafts are the 26 items of this
pair itself. This is a declared-dependency scan plus repo-wide checks
(`depcheck`, `fwdcheck`, `manifest-deps`, `extcheck`), not a proof audit; the
one published item whose *ledger status* is flagged open is reported
separately below and is a proof-locality matter, not an absent prerequisite.

## Published-supplier flag (not a scope finding; owner action requested)

- Item: `thm-affine-closed-immersions-quotient-rings` (published,
  `library`-level supplier in this pair's closure).
- Reachability: two declared transitive paths —
  `lem-finite-etale-galois-refinements-and-quotients` →
  `thm-unramified-diagonal-open-immersion` → the item, and
  `lem-projective-modification-of-proper-integral-dvr-scheme` →
  `thm-projective-space-proper-over-base` → `lem-projective-space-diagonal-closed`
  → `thm-separatedness-gluing-overlap-criterion` → the item.
- Evidence: `research/published-consumer-supplier-ledger.md` line 33343
  records it as **A-P**: proof step 1.1 imports Stacks Tag `01IN`, whose own
  route uses the later affine quasi-coherent equivalence; the 2026-09-27
  ledger section (line ~500) still lists it among findings that "remain A-P".
  The current item text still reads "By Stacks Project, Tag `01IN`, …" in step
  1.1, and `research/frontier-36-complete-operator-record.md` (lines ~1454,
  ~1488–1502) records that the intended batch-5 cutover was not applied. The
  statement itself is the standard true quotient-spectrum classification and
  matches how the scoped items use it; the recorded defect is
  proof-locality/self-containment, not a false claim. The published batch-5
  replacement `lem-closed-immersion-affine-quotient-and-base-change` now
  exists and is published.
- Uncertainty: the AG-track plan
  (`research/plan-algebraic-geometry-track.md` line ~3726) calls the older
  scheme-pair repair paragraph historical, which partially conflicts with the
  ledger's still-open A-P row; I did not adjudicate that conflict. I also did
  not audit the pair's actual proof-use of this supplier beyond the declared
  closure.
- Recommended owner action: reconcile the ledger row before Step 5 treats this
  pair's closure as clean — either record the frontier-36 batch-5 cutover as
  applied (CLAUDE §8 published-repair route) or confirm a later repair closed
  it. No scaffold addition, enrichment or merger follows from this flag, and
  it does not change the scope decision.

## Non-blocking observations

1. `ex-etale-covers-of-gm` is more careful than the cited Milne passage in
   positive characteristic: it restricts to n invertible in k and explicitly
   declines to claim exhaustion of covers in char p. This is a scope-quality
   improvement, not an omission.
2. Topics a textbook on étale π₁ would also treat (topological comparison /
   Riemann existence, curve computations, absolute Galois and Artin–Schreier
   examples, the full abelianized picture) are outside the commissioned
   AG-ET-1 row by design; no planned or live consumer in this run needs them.
   Recorded only so the owner can see the boundary explicitly.

## Uncertainty statement

I verified inventory, page identity, declared prerequisites, consumer
interfaces, source liveness/stamps and coverage dispositions, the repo-wide
dependency gates, and the exact statements of the central source results named
above (including a fresh read of Milne §3). I did **not** re-read SGA 1, SGA 2
or EGA III in full, did not re-derive any of the 26 proof strategies, and did
not audit the published suppliers' proofs; those are Step 3b/5 obligations.
The published-supplier flag above is reported with its own uncertainty. Within
that boundary, the planned definitions, results and examples cover the
intended subject: finite étale descent, the fibre-functor classification with
geometric basepoints, and smooth-proper specialization preserving the
locally Noetherian/finite-type hypotheses and the generalizing-to-special
direction, with both commissioned boundary examples.

## Decision

**sufficient** for both pages of the pair. No omitted topic or result, no
enrichment and no pair merger is required; Step 3b may author against this
scope. The separate published-supplier flag above is referred to the owner for
ledger reconciliation and does not block the scope.
