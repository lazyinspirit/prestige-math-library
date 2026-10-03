# Batch 25 Step 1 scaffold — Groups of Multiplicative Type and Arithmetic Tori

Scope: the single A/B pair `groups-of-multiplicative-type-and-arithmetic-tori`
(A, order 887) / `groups-of-multiplicative-type-and-arithmetic-tori-examples`
(B, order 888), category `algebraic-geometry`. No other pair was touched. Read
`CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the binding
`research/frontier-38-owner-30-owner-authoring-direction.md`, the AG-GRP-2 design
section (L213 of `research/plan-algebraic-geometry-expansion-track.md`), the current
`research/plan-spec.json`, `research/frontier-38-owner-30-local-prereq-887.md`, and all
fifteen item files. The owner direction was read before any construction and controls.

## Scope and plan reconciliation

- The owner direction's 887/888 bullet requires local proofs of "the diagonalizable-
  character and Galois-descent interfaces needed for finite-type multiplicative groups
  and tori", retaining the torsion distinction, the continuous Galois action and the
  nonsmooth μ_p example, allowing the selected 871 pair and the published Galois pages
  but not 873. The scaffold realizes exactly that: no AG-GS-2/873 item and no
  AG-ACT-1/877 item is imported; the only in-run group-scheme supplier is
  `def-group-scheme-over-a-field` (A871, batch 22).
- Design versus plan: the design row AG-GRP-2 names six items
  (`def-group-of-multiplicative-type-and-torus`;
  `thm-multiplicative-type-groups-and-galois-character-modules`;
  `cor-tori-correspond-to-torsion-free-character-lattices`;
  `ex-split-torus-character-lattice`; `ex-nonsplit-torus-galois-action`;
  `cex-mu-p-is-not-a-smooth-torus`). `plan-spec.json` retains all six unchanged and adds
  nine local-closure items (the affine Hopf dictionary, diagonalizable character module
  and split antiequivalence, fpqc-local definitions, affineness by field descent, finite
  subcoalgebras, separable splitting, and finite Galois Hopf descent). That expansion is
  the owner-mandated local closure, not a conflict: the plan controls and was followed,
  and no claim was weakened, moved or dropped. The design's own source line already
  points at "the exact locators recorded in the Frontier-38 A887/B888 source note".
- Requires: the design's "selected AG-GS-1 and the published Abstract Algebra pages
  `the-galois-correspondence` and `algebraic-closure-embeddings-and-separability`" are
  the plan's first three requires; the plan additionally lists
  `galois-orbits-and-descent-of-simple-finite-group-modules` (source of
  `lem-galois-fixed-points-recover-a-finite-dimensional-scalar-extension`, used by the
  Hopf-descent lemma) and `finite-proper-and-projective-morphisms` (source of the
  published `lem-fpqc-cover-submersive`, used by the affineness lemma). Both are
  published pages, both additions follow from the owner's local-closure instruction,
  and the manifest `requires` arrays were copied verbatim from `plan-spec.json`. No
  requires drift, and no page-level edge to 873/877 exists.
- The manifest carries the fifteen item files already placed by the local prerequisite
  packet; this batch recorded their readiness and did not re-mint them. No item file,
  page file, plan, scope ledger or engine artifact was edited.

## Manifest, dependency levels, and mathematical audit

Manifest `research/frontier-38-owner-30-batch-25.pages.json`: A887 has twelve items and
B888 three; every item has `deps` copied verbatim from its item frontmatter (checked),
`design_row: AG-GRP-2`, `local_addition`, provenance, sources with locators, and a
`dependency_level` computed as one plus the maximum level of its in-run `deps`
(`def-group-scheme-over-a-field` is the only in-run supplier outside this batch, at
level 0 in batch 22):

| Level | Item |
|---:|---|
| 1 | `def-multiplicative-type-coordinate-hopf-algebra` |
| 2 | `lem-multiplicative-type-local-hopf-dictionary` |
| 3 | `def-diagonalizable-group-and-character-module` |
| 4 | `lem-diagonalizable-character-antiequivalence` |
| 4 | `def-group-of-multiplicative-type-and-torus` |
| 4 | `lem-multiplicative-type-affineness-by-field-descent` |
| 2 | `lem-finite-subcoalgebras-in-multiplicative-coordinate-algebras` |
| 5 | `lem-multiplicative-type-groups-split-separably` |
| 3 | `lem-finite-galois-descent-for-multiplicative-hopf-algebras` |
| 6 | `def-continuous-galois-character-module` |
| 7 | `thm-multiplicative-type-groups-and-galois-character-modules` |
| 8 | `cor-tori-correspond-to-torsion-free-character-lattices` |
| 9 | `ex-split-torus-character-lattice` |
| 9 | `ex-nonsplit-torus-galois-action` |
| 9 | `cex-mu-p-is-not-a-smooth-torus` |

The whole-run `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30`
reports 31 errors and none names a batch-25 item (details in the findings section).
Every item file and manifest dependency resolves; the `deps`-only graph is acyclic; the
full `deps + justified_by + forward_refs` closure reaches 1236 item files, all of which
resolve, with zero `proved_here: false` targets (so no Recorded/Deferred material and no
path to `deferred-set-theory-beyond-choice` is consumed).

### Item-by-item audit

- **Hopf dictionary (levels 1–3).** `def-multiplicative-type-coordinate-hopf-algebra`
  fixes the reversed diagrams, group-like elements and the nonreduced-scheme convention;
  `lem-multiplicative-type-local-hopf-dictionary` reverses them through the published
  affine anti-equivalence and identifies characters with group-like elements by
  coefficient comparison in $k[t,t^{-1}]\to A$, including base-change compatibility;
  `def-diagonalizable-group-and-character-module` defines $D_k(M)=\operatorname{Spec}k[M]$,
  the glued base form $D_S(M)$ (using the published gluing theorem) and the character
  group, with the functor-of-points formula recorded as the dictionary consequence of
  the declared dep. Direction, conventions and hypotheses check against Milne Ch. 12
  §a–§b and SGA 3 VIII 1.1.
- **Split antiequivalence (level 4).** `lem-diagonalizable-character-antiequivalence`
  proves $X(D(M))=M$, $\operatorname{Hom}(D(M),D(N))=\operatorname{Hom}(N,M)$, the
  finite-generation equivalence (supports of finitely many algebra generators generate
  $M$; the converse uses $M$'s generators and their negatives) and the
  $\mathbf G_m^r\times\prod\mu_{n_i}$ decomposition. All clauses of the statement are
  covered by the two steps; no gap found.
- **Multiplicative type, tori, and affineness (level 4).**
  `def-group-of-multiplicative-type-and-torus` uses the full fpqc-local convention of
  SGA 3 IX 1.1 (not an affine-by-definition shortcut), includes the trivial torus and
  nonsmooth groups, and defers affineness/splitting to the page's own results.
  `lem-multiplicative-type-affineness-by-field-descent` proves the affineness descent
  in four steps: the $k$-rational identity is closed and forces separatedness;
  $\Gamma(X)\otimes_k R=\Gamma(X_R)$ for quasi-compact separated $X$ via a finite affine
  cover and the tensor-exact equalizer; $\Gamma(G)$ is finite type; saturated opens (AC
  supplies points of residue-field tensor products) descend the inverse of
  $G\to\operatorname{Spec}\Gamma(G)$ over the published fpqc-submersiveness supplier and
  it glues. AC is declared with its exact uses. This closes the previously flagged
  affineness issue without importing SGA 3's rigidity apparatus.
- **Finite coalgebras and separable splitting (levels 2 and 5).**
  `lem-finite-subcoalgebras-in-multiplicative-coordinate-algebras` supplies the finite
  right coideal/subcoalgebra construction and the splitting of finite duals over any
  extension in which the Hopf algebra becomes a group algebra; the monomial-splitting
  argument was checked coefficient by coefficient. `lem-multiplicative-type-groups-split-separably`
  then proves $k_s$-splitting and a finite Galois splitting field $L$: finite
  duals are commutative with $E\otimes K\cong K^d$, separable minimal polynomials and
  Lagrange idempotents split $E\otimes k_s$ into copies of $k_s$, distinct group-likes
  are linearly independent (shortest-relation argument), and finitely many coefficients
  generate a finite normal separable $L\subset k_s$ over which the Hopf map is already
  an isomorphism. This is the design's "M22 A.64/A.66 descent steps locally" obligation
  for the splitting half, and it does not import SGA 3 IX 5.4 centrality/rigidity.
- **Finite Galois Hopf descent (level 3).**
  `lem-finite-galois-descent-for-multiplicative-hopf-algebras` reduces the published
  finite-dimensional scalar-extension lemma to finite-dimensional stable subspaces so
  that $L\otimes_k B^\Gamma\to B$ is an isomorphism for arbitrary $B$; fixed tensors
  descend $\Delta,\epsilon,S$ (with $\epsilon$ valued in $k=L^\Gamma$), equivariant maps
  descend uniquely, and finite generation is read from finitely many $B$-generators. The
  statement covers the nonsmooth/nonaffine cases that Milne A.66's variety-only
  rational-point clause cannot.
- **Classification (levels 6–7).**
  `def-continuous-galois-character-module` fixes the Krull topology, discrete-topology
  continuity (equivalently open stabilizers) and the transport action on
  $X^*(G)=\operatorname{Hom}_{k_s}(G_{k_s},\mathbf G_{m,k_s})$, declaring AC because the
  finiteness of $X^*(G)$ for nonsmooth $G$ comes from the splitting lemma.
  `thm-multiplicative-type-groups-and-galois-character-modules` proves: intersecting
  the open stabilizers of a finite generating set is an open normal subgroup fixing $M$,
  so the action factors through some finite $\operatorname{Gal}(L/k)$, and conversely;
  $L[M]^{\operatorname{Gal}(L/k)}$ is a finite-type Hopf algebra with
  $L\otimes A\cong L[M]$ and fixed algebra $(k_s[M])^{\Gamma_k}$; evaluation
  $k_s[X^*(G)]\to\mathcal O(G)\otimes k_s$ descends to $G\cong D(X^*(G))$ and maps
  descend over a common finite Galois splitting field, giving the contravariant
  equivalence and naturality. Hypotheses, direction and the no-smoothness/no-perfection
  scope match Milne Thm 12.23; the printed SGA 3 X Cor 1.2 unbounded-module reading is
  deliberately not imported (the theorem needs only finitely generated modules).
- **Torsion criterion (level 8).** `cor-tori-correspond-to-torsion-free-character-
  lattices` supplies the explicit integer-diagonalization argument (torsion-free iff
  free of finite rank) and the converse comparison: split $G_L\cong D_L(M)$ over a finite
  Galois splitting field, base change to a residue field $E$ of $L\otimes_k K$ where
  $G_E\cong\mathbf G_m^r$, and read $M\cong\mathbb Z^r$ from the split dictionary. The
  maximal-ideal choice is explicit (largest vector-space dimension), so no new arbitrary
  choice enters. Matches Milne Ch. 12 §g ("the tori are the groups of multiplicative type
  such that $X^*(G)$ is torsion-free").
- **B examples (level 9).** `ex-split-torus-character-lattice` reads
  $X(\mathbf G_m^r)=\mathbb Z^r$ with trivial action and the integer-matrix description of
  maps in every characteristic; `ex-nonsplit-torus-galois-action` verifies the norm-one
  group law of $x^2-dy^2=1$ ($\operatorname{char}k\ne2$, $d$ a nonsquare), its splitting
  over $L=k(\sqrt d)$ via $t=x+\sqrt d\,y$ and $2,2\sqrt d$ invertible, the sign action
  $t\mapsto t^{-1}$ on $\mathbb Z$, non-splitting, and the $\mathbb R$, $d=-1$ circle
  case (Milne Example 12.27); `cex-mu-p-is-not-a-smooth-torus` proves
  $\mu_p=D(\mathbb Z/p)$ has torsion character module (not a torus) and that
  $k[t]/(t^p-1)=k[u]/(u^p)$ is a local ring with Krull dimension $0$ and
  $\dim(u/u^2)=1$, hence not regular, so the fibre is not geometrically regular and
  $\mu_p$ is not smooth; $\mu_p(K)=\{1\}$ in characteristic $p$ records the
  scheme-versus-points gap.
- **Published suppliers examined.** `def-group-scheme-over-a-field` (in-run batch 22),
  `thm-affine-scheme-ring-anti-equivalence`, `thm-gluing-affine-schemes`,
  `lem-fpqc-cover-submersive`, `thm-affine-fibre-product-tensor-ring`,
  `thm-global-sections-affine-scheme`,
  `thm-morphisms-into-affine-scheme-global-sections`,
  `lem-galois-fixed-points-recover-a-finite-dimensional-scalar-extension`,
  `thm-finite-galois-extension-characterizations`,
  `thm-fundamental-theorem-of-finite-galois-theory`,
  `thm-separable-closures-exist-and-are-isomorphic-over-the-base`,
  `def-smooth-morphism-schemes`, `def-embedding-dimension-and-regular-local-ring` and
  `def-axiom-of-choice`. Each is published with `verification.audited` or
  `verified` (dates in the readiness records); each statement was read and supplies
  exactly what the consuming Facts claim. No published defect was found in this pair's
  prerequisite closure, so the notes carry no defect-ledger row.

## Axiom-of-choice ledger

- Choice-free: the coordinate Hopf algebra and diagonalizable definitions, the split
  antiequivalence lemma, the finite-subcoalgebra lemma, and the local dictionary.
  The finite-generation and finite-subcoalgebra steps use only finite lists.
- AC declared with its exact proof use in: `lem-multiplicative-type-affineness-by-field-
  descent` (fpqc submersiveness supplier, $k$-linear retraction $K\to k$ from a basis,
  residue-field points in the open descent), and through it/independently in
  `lem-multiplicative-type-groups-split-separably`, `def-continuous-galois-character-
  module`, the classification theorem, the corollary and the three B items. The theorem
  additionally uses AC through separable-closure uniqueness to extend finite separable
  embeddings; the Hopf and finite-Galois descent steps themselves use finite lists.
- Conservative over-declaration, recorded not escalated: `ex-split-torus-character-
  lattice` asserts only the split case, whose computation is choice-free, but it invokes
  the classification/corollary to name the group a torus, so `def-axiom-of-choice` is
  declared. Sound, slightly weaker than necessary; no review objection expected.

## Source record

Two independent treatments were re-fetched and stamped with
`node tools/source-fetch-check.mjs --coverage research/frontier-38-owner-30-batch-25.coverage.json --stamp`
(6/6 fetch-verified). The bodies were independently downloaded and inspected locally
with PyMuPDF, and the SHA-256 values match the packet note exactly:

- J. S. Milne, *Algebraic Groups*, corrected 2022 edition,
  <https://www.jmilne.org/math/Books/iAG2022.pdf>: 4,838,013 bytes, 659 pages,
  sha256 `f2ddd8fa4d263085f173934664b246007a2c0bd539739b7c82de39bfb5d21f40`. Inspected:
  Ch. 12 §a–§b printed pp. 230–233 (characters ↔ group-like elements, Prop. 12.3,
  Lemma 12.4, Examples 12.1–12.2, Remarks 12.5–12.6); §c printed pp. 233–235 (Def. 12.7,
  Thms 12.8–12.9); §d–§f printed pp. 235–238 (Defs. 12.11/12.14/12.16/12.17, Examples
  12.15, Thm. 12.18 with proof, Cor. 12.19); §g printed pp. 239–241 (continuity of the
  action, the $k[M]^\Gamma$ construction, Thm. 12.23 with proof, Cors. 12.24–12.25,
  Examples 12.27–12.28); A.63–A.66 printed pp. 584–585 (semilinear descent, closed
  subschemes, descent of morphisms with the variety-only point clause).
- SGA 3, Exposé VIII, <https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp8-8nov09.pdf>:
  440,912 bytes, 30 pages, sha256
  `06e43e0571d411cc5579975778fcc03c8ecaa67189248d1a053e61dc653af510`. Re-inspected
  §1 PDF pp. 1–4 (Déf. 1.0–1.1, Thm. 1.2, Cor. 1.4); the local packet note records the
  complete §1.1–1.7 read at PDF pp. 1–7 against this same hash, and the coverage harvest
  follows that record.
- SGA 3, Exposé IX, <https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp9-8nov09.pdf>:
  448,941 bytes, 32 pages, sha256
  `7c1e3d5b9d01ad01d0dd7b8b62045d012052e7890fb37adc3e7934ebb5fd6fc3`. Inspected §1
  (Déf. 1.1 fpqc-local multiplicative type, 1.3–1.4), §2.1(a) (affine and faithfully
  flat), and Cor. 5.4 with its exact centrality/hypotheses (PDF p. 20).
- SGA 3, Exposé X, <https://webusers.imj-prg.fr/~patrick.polo/SGA3/Expo10-8nov09.pdf>:
  464,776 bytes, 44 pages, sha256
  `a335ff4972694dbe531b46f852d2c77f13e433b365d0d38289b25adfeadf2c62`. Inspected §1
  (Prop. 1.1, Cor. 1.2, Prop. 1.4 and its finite-extension/IX 5.4 proof, 1.5–1.6).

The coverage harvest is `research/frontier-38-owner-30-batch-25.coverage.json`:
2 pages, 42 result rows, every row disposed (26 included, 9 inline, 7 out-of-scope with
specific reasons). Notable dispositions: SGA 3 VIII 1.7, IX 3–5 rigidity/EGA
finite-extension and X 1.5–1.6 relative-torus material are out-of-scope because the
local finite-subcoalgebra/interpolation proof replaces those imports and no consumer
needs the relative-base theory; Milne 12.24/12.25 (extension structure, purely
inseparable invariance) and 12.29 (maximal subtorus) are out-of-scope for the same
reason. No source drop or `source_resolution` record was needed (no retrieval failures
exhausted the allowance). One transient `UND_ERR_SOCKET` on the second (B-page) fetch
of SGA 3 VIII succeeded on the next attempt and is preserved in `recovery_attempts`.

## Cross-batch ledger

`research/frontier-38-owner-30-batch-25.cross-batch-dependencies.json` declares three
edges, all to batch 22 (A871), each with a current mathematical check (`verified`):

- item `def-multiplicative-type-coordinate-hopf-algebra` → `def-group-scheme-over-a-field`
  (the finite-type group-scheme convention, including nonreduced schemes, that the Hopf
  definition reverses);
- item `lem-multiplicative-type-affineness-by-field-descent` → `def-group-scheme-over-a-field`
  (the finite-type group-scheme hypothesis of the statement);
- page `groups-of-multiplicative-type-and-arithmetic-tori` → page
  `group-schemes-of-finite-type-over-a-field` (in-run scaffolded supplier pair).

`node tools/frontier-dependency-ledger.mjs refresh --run frontier-38-owner-30` succeeded;
the derived ledger shows exactly those three batch-25 edges, each carrying this batch's
`verified` review, and no orphaned review. No sibling batch currently declares an edge
to batch 25, and no out-of-run page consumes a batch-25 item at this snapshot.

## Check results at this snapshot

- `coverage-checklist --require-destination` on the batch: **2 pages, 42 harvested
  results, 0 errors, 0 warnings**.
- Whole-run `manifest-deps` over all current manifests: **503 items, 0 errors**.
- `content-policy --manifest-only` over all current manifests: **503 scoped items,
  1 error** — `def-translation-functor-between-o-blocks` (batch 7, BGG) depends on
  `def-h-semisimple-module`, which is neither declared by that batch nor on disk; not a
  batch-25 finding. Batch-25 scoped manifest mode and item mode both report **15 items,
  0 errors, 0 warnings**.
- `item-dependency-levels check --run frontier-38-owner-30`: **31 errors, none naming a
  batch-25 item** — 24 `empty scaffold inventory` pages belonging to the twelve batches
  still being scaffolded (4, 8, 9, 10, 11, 12, 13, 17, 19, 20, 26, 27) and 7
  `dependency_level` mismatches inside batch 7's BGG
  manifests (`lem-hom-from-projectives-counts-simple-composition-factors`,
  `thm-projectives-in-category-o-have-verma-flags`,
  `lem-hom-to-costandards-counts-verma-flag-factors`, `thm-bgg-reciprocity`,
  `cor-projective-standard-labels-lie-above-the-head`,
  `cor-injectives-have-costandard-filtrations`,
  `cex-a-projective-verma-flag-need-not-split`). Neither cluster is this batch's to
  repair; both are recorded for the owner because they can hold the whole-run gate.
- `step1-decisions check`: 503 loaded items, 318 ready, run not closed; **batch-25 has
  zero open work rows** — all fifteen items carry current `ready` records with examined
  dependency IDs and evidence.
- `depcheck`: exit 0 — no cycles, all references resolve, no draft items on published
  pages; no finding names a batch-25 item. `fwdcheck`: exit 0, no batch-25 finding.
  `extcheck`: exit 0, no batch-25 finding. `validate-plan`: exit 0 (it still notes 289
  planned pages without item lists, including 887/888 until the Step-4 splice).
- `depsource --page groups-of-multiplicative-type-and-arithmetic-tori`: 0 unresolved;
  16 deps link to a published page and 21 report "(no page)" because `plan-spec.json`
  still carries empty item lists for 887/888 — the in-batch and in-run dependencies are
  visible in the manifest and the ledger, and the splice will import them.
- Sources: `source-fetch-check` check mode **6/6 fetch-verified** (stamps match the
  hashes above); `url-sweep --recover --fail-on-dead` **4/4 live, 0 failed, 0 blocking,
  0 recoverable**; `source-backing` **14 authored results backed, 0 errors**.
- Item format/rendering: `precheck` **11 proof-bearing items, 0 failing**;
  `rendercheck` **15 files OK**; `prosecheck` **15 files, 0 errors, 0 warnings**;
  `PRESTIGE_APP_DIR=/tmp/ag885-render-app node tools/proof-layout.mjs <15 paths>`
  returns **15 items, 27 steps, 0 defects**. The shim is a read-only symlink view of
  the unchanged sibling checkout (no app or tool file was edited); the default app-dir
  invocation still fails on raw JSX in the sibling `ItemBody.tsx`, exactly as the local
  prerequisite packet recorded, and remains an environment note for the owner.

## Unresolved findings outside batch 25

- Batch-7 label mismatches and its missing `def-h-semisimple-module` manifest target
  (above) can hold the whole-run manifest/dependency gates until that batch's owner
  repairs them.
- Twelve batches still have empty scaffolds at this snapshot (4, 8, 9, 10, 11, 12, 13,
  17, 19, 20, 26, 27), and sibling batches are being filled concurrently, so whole-run
  `item-dependency-levels`, `step1-decisions`, coverage and
  `frontier-dependency-ledger --require-reviewed` stay red on sibling work only. None of
  those findings names a batch-25 item.

## Step discipline

Wrote only this batch's manifest, coverage, notes, cross-batch input, the fifteen
`research/frontier-38-owner-30-step1-<id>.json` readiness records, and the read-only
ledger refresh. No item file, page file, `plan-spec.json`, scope ledger, engine state,
published content or verdict was edited. Owner/operator reconciliation and the full
engine gate follow; a `ready` record here is not independent mathematical approval.
Step 3 review remains owed.
