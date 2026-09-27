# Step 3a scope review — pair `homological-gaussian-elimination`

Run `frontier-35-ten-categories`, role alpha (Step 3a scope), batch 14, label
`step3a-pair-homological-gaussian-elimination-c24356e730614e09`.
A page `homological-gaussian-elimination` (728.1, homological-algebra, 9 items);
B page `homological-gaussian-elimination-examples` (728.2, 5 items).
Companion pointers A↔B agree in the manifest, the plan shell and the scope
ledger. `requires`: A → published `chain-homotopy-and-the-homotopy-category`;
B → A.

**Decision: `sufficient`.** Scope only: no claim about proof correctness, no item
approval, no owner record, no scaffold edit. Recorded with
`tools/step3-decisions.mjs record-scope`; the receipt binds the current scope hash.

## Design, plan, owner decisions and Step-1 records read

- Design prose: `research/plan-homological-algebra-track.md` HA-24, lines
  5262–5332 — frame (5269–5279: the generic cancellation theorem for an
  invertible differential entry; additive category; *no* abelian, linear,
  projective, finite-dimensional or bounded hypothesis; 24.1 records the
  additive extension; the published linear-algebra Gaussian page is not a
  supplier), conventions (5281–5292), the nine-row table 24.1–24.9
  (5294–5304), B inventory (5306–5324), source control (5326–5332).
- `research/plan-spec.json` orders 728.1/728.2: ids, titles, categories,
  companion pointers and `requires` match the manifest; both plan item arrays
  are empty, so the batch manifest is the controlling inventory (as on sibling
  pairs).
- Owner direction `research/frontier-35-ten-categories-owner-authoring-direction.md`:
  this pair is active; only the batch-8 Serre/flag pair and one batch-13 Easton
  item are deferred. No owner amendment touches this pair, and no owner Step-3a
  record exists (`research/frontier-35-ten-categories-step3a-owner-homological-gaussian-elimination.json`
  absent).
- Step-1 drift `research/frontier-35-ten-categories-alpha-step1-drift.md`
  lines 143–147: "no-drift", HA-24 lines 5262–5302, later braid applications
  use this page.
- Scaffold records: `research/frontier-35-ten-categories-batch-14.pages.json`
  (both pages), `.coverage.json`, `.notes.md` (whole file, 73 lines; published
  defect handoff at lines 36–40), `.cross-batch-dependencies.json` = `[]`; all
  14 `research/frontier-35-ten-categories-step1-<item>.json` records read —
  14/14 `ready`, non-owner, examined deps matching the manifest.
- `research/frontier-35-ten-categories-scope-ledger.json` lists both pages
  (batch 14). The run cross-batch ledger
  `research/frontier-35-ten-categories-cross-batch-dependencies.json` contains
  no edge touching this pair (0 matches).

## Inventory reconciliation (design → manifest)

All nine designed A rows are present, in design order, with the designed item
ids; no item was added, dropped, renamed or weakened. Claim-level check:

- 24.1 `def-complex-homotopy-and-contractibility-in-an-additive-category` —
  cochain/chain complexes, maps, homotopies f−g=dh+hd, homotopy equivalence,
  contractibility in an additive category via zero morphisms only; degreewise
  finite biproducts; reindexing C_n=C^{−n} with chain homotopy degree +1; no
  homology object without kernels/cokernels.
- 24.2 `def-invertible-differential-block-and-schur-complement-reduction` —
  ordered block convention (rows B,V; columns A,U), all objects/arrows outside
  degrees n,n+1 retained, candidate reduced arrow a−bφ⁻¹c, homological
  reindexing dictionary; the arrow is explicitly a candidate until the next
  lemma checks square-zero.
- 24.3 `lem-block-triangular-basis-changes-diagonalize-an-invertible-differential-block`
  — L, R, L⁻¹, R⁻¹ printed; LdⁿR=diag(a−bφ⁻¹c,φ); neighbouring transformed
  arrows [p;0], [r;0]; cp+φq=0 and rb+sφ=0 give the reduced square-zero
  composites, including unbounded neighbouring degrees.
- 24.4 `thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex`
  — chain isomorphism X ≅ Xbar ⊕ K, Tⁿ=R⁻¹, T^{n+1}=L, identities elsewhere,
  inverses R, L⁻¹; K = 0→U→φ→V→0 contractible via φ⁻¹; deletion is a
  homotopy equivalence after a chain isomorphism, never an equality of complexes.
- 24.5 `prop-homological-gaussian-elimination-gives-a-strong-deformation-retract`
  — explicit p, i, h (only h^{n+1}=[[0,0],[0,φ⁻¹]] nonzero) with pi=1_Xbar,
  1_X−ip=dh+hd, ph=hi=h²=0.
- 24.6 `cor-homological-gaussian-elimination-preserves-homotopy-type-and-homology`
  — inverse maps in the homotopy category of complexes over every additive
  category; inverse homology isomorphisms only in the abelian case; explicit
  denial of an isomorphism of the un-split complexes.
- 24.7 `thm-finite-iterated-homological-gaussian-elimination` — finite
  sequences with each pivot invertible in the *current* Schur-complement
  complex; composite retract formula (p₂p₁, i₁i₂, h₁+i₁h₂p₁); the finite
  aggregate isomorphism Φ:U→V cancelled at once; different valid choices give
  homotopy-equivalent (not generally equal/canonical) reductions; no infinite
  iteration and no guaranteed size decrease.
- 24.8 `prop-additive-functors-preserve-chosen-homological-gaussian-cancellations`
  — additive functors carry the Schur differential and F(p),F(i),F(h) with all
  retract identities; exactness unnecessary for the homotopy statement and
  needed only for separate homology comparisons.
- 24.9 `prop-transfer-of-chain-maps-across-gaussian-reductions-and-naturality-limits`
  — fbar=p_Y f i_X, sbar=p_Y s i_X; identity transfers strictly; (gf)bar−gbar·fbar
  is null-homotopic by p_Z g h_Y f i_X; strict naturality only for morphisms
  commuting with the chosen retract data; no choice-free naturality/confluence.

B page (5 items) realises the design's whole B inventory: the minus Schur sign
over Q for [[1,1],[1,1]] (wrong + sign gives multiplication by 2 and kills the
homology); the k→k²→k²→k neighbour transform with all transformed blocks and
both square-zero composites; the two finite orders in the CMW A.2 double-pivot
configuration, with the order-independence conclusion limited to it; the
non-unit pivot failure 0→Z→2→Z→0 with the surviving Z/2 homology; and the
failure of strict chain-level naturality of the transfer with off-diagonal maps
whose individual transfers vanish while the transfer of the composite is 1_Y
(null-homotopic).

Design deviations that preserve claims (recorded in the batch-14 notes;
verified by me):

1. **24.6 route.** The design names the published
   `thm-chain-homotopic-maps-induce-the-same-map-on-homology` as a supplier.
   The manifest instead uses 24.5 plus `def-homology-object-of-a-chain-complex`,
   `thm-a-chain-map-induces-a-well-defined-map-on-homology` and
   `thm-homology-is-an-additive-functor`. The replaced item is published but its
   written proof is an element chase in an arbitrary abelian category (defect
   handoff below). The claim of 24.6 is unchanged, so the scope is unaffected.
2. **Source-control locator.** Design line 5328 cites "Appendix A.2, author
   p.71 (published p.1563)" for the double-pivot lemma. In both copies of the
   paper the double-pivot result is Lemma A.2 *of Appendix A.1* on that page;
   Appendix A.2 is "Calculations of Reidemeister chain maps". The manifest item
   citations correctly say "Appendix A.1, printed pp.1562–1563".
3. **24.9's "compatibility of homotopies with composition"** is realised from
   the local additive-category homotopy definition rather than by importing the
   published abelian-framed compatibility lemma; Weibel Exercise 1.4.5 is
   recorded as an inline source row for the transfer item.

## Source coverage verified independently

I read the complete relevant arguments, in three sources (two copies where
available), not snippets:

- **Clark–Morrison–Walker** — author copy cached at
  `scratchpad/source-cache/homological-algebra-enrichment/clark-morrison-walker-functoriality.pdf`
  (90 pp, sha256 `4465bb90…a10d`, the hash the design cites) and the coverage's
  fetched published copy (msp.org/gt/2009/13-3/gt-v13-n3-p08-p.pdf, 84 pp,
  sha256 `3ea6d4756f61e345…`, 1 483 207 B, matching the coverage
  `fetch_verified`). Read: Appendix A.1, printed p.1562 = PDF p.64 — Lemma A.1
  "in any additive category" with the displayed maps ((1), (0 1), (−µφ⁻¹ 1),
  (1), (−φ⁻¹λ; 1), (0; 1)) and the Remark "Gaussian elimination is a strong
  deformation retract. In fact, it preserves the simple homotopy type of the
  complex."; printed p.1563 = PDF p.65 — Lemma A.2 (double elimination) for the
  two adjacent noncomposable isomorphisms ψ, φ, with the remark "Convince
  yourself that it doesn't matter in which order we cancel the isomorphisms!".
Coverage rows map these to 24.5/24.6 and to the B order-comparison example. The
"simple homotopy type" clause is correctly an out-of-scope row: no item claims
it, the design does not ask for it, and the run's simple-homotopy pair (batch 2)
is a CW/cellular page that does not consume it.
- **Bar-Natan, *Fast Khovanov Homology Computations*** — cached PDF sha256
  `2a25680572244cd2…` matching the coverage stamp. Read §4 Lemma 4.2 in full:
  an isomorphism φ: b₁→b₂ "in some additive category C"; the four-term segment
  is isomorphic to the direct-sum segment by invertible row/column operations
  (using µφ−νγ=0, φα−δβ=0 from d²=0); the two complexes are homotopy equivalent
  to the simpler segment after removal of the contractible summand
  0→b₁→φ→b₂→0; and "b₁ and b₂ … can equally well be taken to be columns of
  objects provided … φ remains invertible". Read §5's first algorithm
  paragraph, including "A priori, we cannot guarantee that Ω'' will be simpler
  than Ω". This backs 24.3/24.4 and the iteration boundary recorded in 24.7.
- **Weibel, chapter 1** — fetched live today, sha256 `dd560041ac0275bf…`,
  1 103 382 B (matching the coverage stamp). Read Definitions 1.1.1–1.1.2, the
  cochain reindexing paragraph (C_n = C^{−n}), §1.2's opening Ab-category /
  additive-category paragraph with degreewise addition of chain maps,
  Definitions 1.4.3–1.4.4 (null homotopy, chain homotopy, chain homotopy
  equivalence) and Exercise 1.4.5 (homotopy classes form an additive quotient
  category; homotopy is compatible with composition). These back 24.1 and the
  transfer item 24.9. The textbook states them for R-modules; the
  additive-category form is the design's own generalisation, and 24.1 records
  it explicitly rather than importing an abelian-only supplier.
- **Independent corroboration of the formulation** (beyond the three declared
  sources, cited as corroboration only): arXiv:2608.07114 §2 (preprint) states
  the standard strong-deformation-retraction data for chain complexes in *any
  additive category* (r i = 1, i r − 1 = dh + hd, h i = 0, r h = 0, h² = 0) and
  Proposition 2.3 derives such an SDR from an invertible morphism — the same
  shape and side conditions as 24.5 (h ↦ −h relative to the item's sign).
- Tool re-runs on batch 14: `coverage-checklist` → 2 pages / 31 harvested
  results / 0 errors / 0 warnings; `source-backing --require-verified` → all 11
  authored results still backed by an openable source or documented argument;
  all three source URLs are live in
  `research/frontier-35-ten-categories-url-liveness.json`.

## Subject coverage in the manifest

The pair supplies exactly what the intended subject needs. A reader gets: the
additive-category complex/homotopy/contractibility setting (24.1); the fixed
pivot conventions and the Schur-complement candidate (24.2); the explicit block
diagonalisation with typed inverses and the neighbouring-arrow proof of
square-zero (24.3); the splitting of a contractible two-term summand as a chain
isomorphism (24.4); chosen strong-deformation-retract data with all side
conditions (24.5); homotopy-type and abelian-category homology invariance with
the correct qualification (24.6); finite iteration with the current-pivot
condition, the aggregate shortcut and the homotopy-equivalence (not
canonicality) statement (24.7); preservation by additive functors without
exactness (24.8); and the transfer construction with its strict-naturality
limits (24.9). The B page witnesses the sign, the neighbouring-arrow
transformation, two finite orders, the necessity of invertibility, and the
failure of strict chain-level naturality.

Boundaries (recorded, not gaps): infinite cancellation / local-nilpotence
completeness and matrix-factorisation cancellation are deferred by the design
and are not claimed here; Bar-Natan's delooping (Lemma 4.1) and the
simple-homotopy-type remark are out-of-scope rows with no item, no in-run
consumer and no declared consumer; the linear-algebra Gaussian page is
deliberately not a supplier; no boundedness, finite-dimensionality, linearity
or projectivity hypothesis is asserted anywhere in the pair.

## Role in the library and consumer fit

- A requires published `chain-homotopy-and-the-homotopy-category`. I verified
  that page is published and that its `def-chain-homotopy` is framed for chain
  complexes in an *abelian* category, so 24.1's additive-category extension is
  genuinely needed rather than duplicative. B requires the A page only.
- No published item or page references any of the 14 new ids (searches over
  `items/` and `library/`). No other page in this run consumes them: scanning
  all current `frontier-35-ten-categories-batch-*.pages.json` gives 0 consumer
  edges, and the run cross-batch ledger has no such edge.
- Both declared future consumers need exactly
  `thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex`,
  which the manifest supplies under that id: the braid track's BG-15
  (`lem-khovanov-seidel-generator-complexes-are-mutually-inverse`,
  `lem-opposite-rouquier-generator-complexes-are-homotopy-inverse`,
  `lem-rouquier-complexes-satisfy-the-three-term-braid-relation`, each citing
  "HA-24.4"), and the KL track's
  `def-minimal-complexes-and-perverse-truncations-in-the-type-a-soergel-category`
  (item contract in `research/kl-cross-library-reconciliation-2026-09-08.md`).
  The pair also supplies the additive-functor and transfer interfaces the
  design promises.

## Published-defect handoff (owner action; outside this pair)

Re-verified for the canonical ledger: `items/thm-chain-homotopic-maps-induce-the-same-map-on-homology.md`
(status published) has proof step 1.1 at line 48 selecting "z ∈ Z_n(C)" and
evaluating f_n(z), g_n(z), s_n(z); its homotopy input `def-chain-homotopy` is
stated for chain complexes in an abelian category, and the file gives no
generalised-element/Yoneda or embedding argument, so the written proof does not
establish the stated generality. The statement is a true theorem (a generalised
element, or factoring the cycle composite through the boundary image, closes
it). Downstream published consumer:
`thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism` (deps include the
item). As of 2026-09-24 this defect is **not** recorded in
`research/published-consumer-supplier-ledger.md` (no entry for either id), so
the batch-14 handoff (`research/frontier-35-ten-categories-batch-14.notes.md`
lines 36–40) still needs owner/ledger action. It does not affect this pair's
scope: corollary 24.6 avoids that dependency path (recorded in the batch-14
notes).

## Uncertainty and non-blocking observations (for the Step-3b author and owner)

1. **Coverage locator precision** (documentation only; no result lost). The CMW
   row's "PDF pp.63–64" is one page early (the cited lemmas are on PDF pp.64–65
   of the 84-page msp copy); the Bar-Natan rows' "PDF p.4" for §4 and "PDF p.4 /
   printed p.6" for §5 are one page early (the Lemma 4.2 statement and the §5
   algorithm caveat are on PDF/printed p.5); the Weibel row's "PDF pp.1–4 /
   printed pp.2–5" mixes the two numberings in this file, whose printed page
   equals the PDF page in the read range. The notes' source table quotes
   Bar-Natan printed p.5 correctly and the item citations use CMW printed
   pp.1562–1563 correctly.
2. **Coverage rows do not name 24.2, 24.8 or four of the five B items.** These
   are locally derived or framework-cited results with no harvested row, which
   the tooling accepts (a *harvested result* must be disposed; an item need not
   own a row). Optional enrichment only.
3. **No B illustration of 24.8** (additive-functor preservation). The design's
   B inventory does not call for one; I do not treat it as a gap, only as an
   optional-enrichment candidate.
4. **CMW A.2 relabelling in the order-comparison example.**
   `ex-two-finite-cancellation-orders-and-their-composite-retracts` writes the
   second pivot as the (G,E) entry φ and keeps D₂ as the surviving middle
   object; this is CMW's displayed A.2 diagram under relabelling the two
   degree-2 and the two degree-3 summands, and the item's two Schur formulas
   are mutually consistent. The author should either state that relabelling or
   align the letters with CMW's display, because the item says it uses "the
   CMW Lemma A.2 shape".
5. **Sign convention for the retract homotopy.** 24.5 states
   1_X − i p = d h + h d, while the secondary formulation I found writes
   i r − 1 = d h + h d (equal after h ↦ −h). The authored proofs must keep one
   convention consistently across 24.5, 24.6 and the B transfer counterexample.
6. **Dispatch bookkeeping.** Two identical task files exist for this pair
   (`…-c24356e730614e09.task.md`, this dispatch, and
   `…-dda3111bd1b3091d.task.md`); only the `c243…` label appears in
   `.autopilot/frontier-35-ten-categories/` state and events. The `dda3…` file
   has no live dispatch.

## Decision

**`sufficient`.** The manifest realises the entire designed HA-24 inventory —
nine A items with the designed ids and the promised generality (additive
categories, cochain convention, explicit retract data, finite iteration,
functor preservation, transfer with naturality limits) and all five designed B
examples/counterexamples — with the design's declared source support verified
in the primary sources (CMW Appendix A.1 Lemma A.1/A.2, Bar-Natan §4 Lemma 4.2
and §5, Weibel §1.1–1.4), the deferrals recorded and consistent with the
design, and the page's role as the library's generic cancellation supplier
intact: zero published consumers, no in-run consumers beyond its own B page,
and the exact id both declared future consumers need. The observations above
are item-authoring and record-keeping matters; none requires a pair merger, an
owner scope amendment or a change to the planned inventory before authoring.
