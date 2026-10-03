# Step 3a scope review — A/B pair `groups-of-multiplicative-type-and-arithmetic-tori`

- Run: `frontier-38-owner-30`; batch 25.
- A page: `groups-of-multiplicative-type-and-arithmetic-tori` (order 887,
  12 items). B page: `groups-of-multiplicative-type-and-arithmetic-tori-examples`
  (order 888, 3 items).
- Reviewer role: alpha, scope only. No scaffold, item, manifest, plan, or owner
  record was edited. This review reads the mathematics needed to judge scope; it
  is not an item approval and not a proof audit (that is Step 3b and later).
- Decision recorded: **sufficient** (see §4). One **potential unmet
  prerequisite for out-of-run planned consumers** is flagged in §5 for the
  owner's decision.

## Inputs read

- `CLAUDE.md` (normative), this dispatch task file, and
  `research/frontier-38-owner-30-owner-authoring-direction.md` (binding
  direction, 887/888 bullet and local-prerequisite rule).
- Prose design: `research/plan-algebraic-geometry-expansion-track.md` L213
  (row AG-GRP-2) and the plan entry `research/plan-spec.json` pages 887/888.
- Manifest `research/frontier-38-owner-30-batch-25.pages.json`; coverage
  `research/frontier-38-owner-30-batch-25.coverage.json`; notes
  `research/frontier-38-owner-30-batch-25.notes.md`; cross-batch input
  `research/frontier-38-owner-30-batch-25.cross-batch-dependencies.json`;
  aggregated ledger `research/frontier-38-owner-30-cross-batch-dependencies.json`.
- All fifteen item files of the pair (twelve A + three B), read in full from
  `items/`.
- `research/frontier-38-owner-30-local-prereq-887.md` and the fifteen
  `research/frontier-38-owner-30-step1-<id>.json` readiness records.
- Sources: J. S. Milne, *Algebraic Groups*, corrected 2022 edition,
  <https://www.jmilne.org/math/Books/iAG2022.pdf>, re-fetched 2026-10-03,
  659 pp., SHA-256 `f2ddd8fa4d263085f173934664b246007a2c0bd539739b7c82de39bfb5d21f40`
  (matches the packet note); SGA 3, Exposé IX, Polo–Gille edition,
  <https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp9-8nov09.pdf>, re-fetched,
  SHA-256 `7c1e3d5b9d01ad01d0dd7b8b62045d012052e7890fb37adc3e7934ebb5fd6fc3`
  (matches). Milne §12.i (PDF pp. 253–254, printed pp. 243–244), 12.29/12.37/12.40
  (PDF pp. 251, 254), 16.26–16.28/16.33 (PDF pp. 342–346, printed pp. 332–336),
  17.39 (PDF p. 374, printed p. 364), 17.62 (PDF p. 383, printed p. 373),
  21.11–21.12 (PDF pp. 438–439, printed pp. 428–429), 21.22 (PDF p. 441,
  printed p. 431), and SGA 3 IX §5 (Cor. 5.4, PDF p. 20, running p. 50) were read
  complete at those locators for the §5 finding.

## 1. Design ↔ scaffold reconciliation

The AG-GRP-2 row commissions exactly three A items and three B items; all six are
present, in the designed roles, with no weakened or dropped claim:

| Design item | Scaffold |
|---|---|
| `def-group-of-multiplicative-type-and-torus` | present; full SGA 3 IX 1.1 fpqc-local definition of multiplicative type and tori, split = over `k`, trivial torus and non-smooth groups included, affineness/splitting explicitly deferred to page results |
| `thm-multiplicative-type-groups-and-galois-character-modules` | present; contravariant equivalence with f.g. abelian groups carrying a continuous `Γ_k`-action, quasi-inverse `M ↦ Spec((k_s[M])^{Γ_k})`, naturality, no smoothness/connectedness/perfection/char-0 hypothesis |
| `cor-tori-correspond-to-torsion-free-character-lattices` | present; torus ⟺ torsion-free (⟺ free of finite rank) character module, restricted anti-equivalence for tori, exclusion of non-zero torsion even for smooth groups |
| `ex-split-torus-character-lattice` | present; `X*(G_m^r)=Z^r`, trivial action, integer-matrix description of maps, all characteristics, rank-zero cases |
| `ex-nonsplit-torus-galois-action` | present; norm-one torus from non-square `d` (char ≠ 2), splitting over `k(√d)`, sign action on `Z`, non-splitting, real circle case |
| `cex-mu-p-is-not-a-smooth-torus` | present; `μ_p = D(Z/p)` has torsion character module, is not a torus, local ring `k[u]/(u^p)` is not regular so not smooth; refutes "multiplicative type ⇒ smooth torus" |

The nine `local_addition: true` items are exactly the owner-mandated local
closure of the interfaces the design says to write locally (affine Hopf
dictionary, diagonalizable/character module, split antiequivalence, fpqc-local
definitions, affineness by field descent, finite subcoalgebras, separable
splitting, finite-Galois Hopf descent, continuous Galois module). They weaken
nothing on the commissioned items: the classification theorem consumes them as
its suppliers. The two planned claims retained by the owner direction are
explicitly present: the torsion/torus distinction (corollary; `μ_p` example) and
the continuous Galois action (`def-continuous-galois-character-module`); the
non-smooth `μ_p` counterexample is present with the scheme-versus-points gap.
The design's "no affineness by definition" convention is implemented (fpqc-local
definition plus `lem-multiplicative-type-affineness-by-field-descent`), and the
design's "write out M22 A.64/A.66 locally" obligation is discharged by the
finite-Galois Hopf-descent and affineness lemmas, which state their assumptions
and avoid Milne A.66's variety-only rational-point clause for non-smooth groups.

Page `requires` arrays in the manifest equal the plan-spec arrays verbatim; the
design's prohibition on an AG-GS-2/873 or AG-ACT-1/877 page edge is respected.
Owner-direction check: local packet ≤ 100 items (15), unique ids, actual `deps`,
source URLs/locators present in the manifest.

## 2. Source coverage

`research/frontier-38-owner-30-batch-25.coverage.json` carries 2 pages, 4+2
sources, 42 harvested rows, every row disposed: A page 36 rows (16 `included`,
12 `inline`, 8 `out-of-scope`), B page 6 rows (4 `included`, 1 `inline`, 1
`out-of-scope`). `coverage-checklist --require-destination` now returns
**2 pages, 42 harvested results, 0 errors, 0 warnings**. Source hashes in the
notes (Milne `f2ddd8fa…`; SGA 3 VIII `06e43e05…`, IX `7c1e3d5b…`, X
`a335ff49…`) are the ones I re-verified for Milne and Exp. IX.

The design's stated source range is "M22 §§12.3–12.9 and 12.14–12.27 … plus full
SGA 3 Exposés VIII, IX, X, §§1 and relevant descent/rigidity results". The
harvest matches that range: the dictionary (12.1–12.9), definitions and split
decomposition (12.14–12.19), continuity/classification/torsion criterion
(§ g, 12.23–12.29), the real sign example (12.27) and A.63–A.66 are covered with
destinations; the relative/rigidity machinery of SGA 3 IX 3–5 and X 1.5–1.6,
and Milne 12.24/12.25/12.29 (extension structure, purely inseparable
invariance, maximal subtorus), are deliberately `out-of-scope` with written
reasons. Milne 12.30–12.41 (§ h representations, § i density and rigidity) lie
outside the design's stated result range and are not harvested at all; this is
consistent with the design as written but is the root of the §5 flag.

The harvest is source-anchored and internally consistent: every `included` row
names a scaffolded item, every `inline` row is absorbed in a named item, and
every `out-of-scope` reason is specific. No source drop and no retrieval failure
is recorded; `source-fetch-check` (per the packet note) was 6/6 fetch-verified
at the recorded hashes.

## 3. Dependency and prerequisite ledger

All fifteen items have `deps` copied into the manifest that match their item
frontmatter; the graph is acyclic; `manifest-deps` on batch 25 returns
**15 items, 0 errors**. Direct suppliers fall in three groups:

1. **Published library items** (all verified `status: published` in `items/`):
   `thm-affine-scheme-ring-anti-equivalence`, `thm-global-sections-affine-scheme`
   (page `affine-schemes-and-the-structure-sheaf`), `thm-gluing-affine-schemes`,
   `thm-morphisms-into-affine-scheme-global-sections` (page
   `schemes-subschemes-and-morphisms-locally-of-finite-type`),
   `thm-affine-fibre-product-tensor-ring` (page
   `fibre-products-base-change-and-scheme-theoretic-fibres`),
   `lem-fpqc-cover-submersive` (page `finite-proper-and-projective-morphisms`),
   `lem-galois-fixed-points-recover-a-finite-dimensional-scalar-extension` (page
   `galois-orbits-and-descent-of-simple-finite-group-modules`),
   `thm-finite-galois-extension-characterizations`,
   `thm-fundamental-theorem-of-finite-galois-theory` (page
   `the-galois-correspondence`),
   `thm-separable-closures-exist-and-are-isomorphic-over-the-base` (page
   `algebraic-closure-embeddings-and-separability`), `def-smooth-morphism-schemes`
   (page `flat-smooth-and-etale-morphisms`),
   `def-embedding-dimension-and-regular-local-ring` (page
   `regular-local-rings-and-homological-dimension`), `def-axiom-of-choice`.
   I spot-read each statement; each supplies exactly what the consuming Fact or
   step declares (e.g. the AC hypothesis for `lem-fpqc-cover-submersive`, the
   finite-dimensional semilinear descent for the Hopf-descent lemma, the
   geometrically-regular-fibre criterion and the `edim = dim` regularity test for
   the `μ_p` example).
2. **In-run supplier:** `def-group-scheme-over-a-field` (A871, batch 22,
   currently draft as are all run items), declared by two items and reviewed as
   `verified` in the cross-batch ledger; its statement (finite-type `k`-scheme
   group object, non-reduced allowed) matches both uses.
3. **In-pair suppliers**, all dependency-ordered (levels 1–9, `deps` only).

`depcheck` exits 0 (no cycles, all references resolve, no draft item on a
published page); `fwdcheck` and `extcheck` report no finding naming a batch-25
item; `depsource --page groups-of-multiplicative-type-and-arithmetic-tori`
reports 0 unresolved, 16 deps linked to published pages, 21 in-batch/in-run deps
that still show "(no page)" only because `plan-spec.json` carries empty item
lists for 887/888 until the Step-4 splice. No in-run page consumes A887's items
other than B888, which uses only A887 items plus the two published definitions
above; the cross-batch ledger shows exactly the three batch-25→batch-22 edges and
no sibling batch edge into batch 25.

## 4. Scope decision: sufficient

The planned definitions, results, and examples cover the intended subject as
commissioned and as needed by every in-run consumer:

- the split diagonalizable dictionary (characters ↔ group-like elements, `X(D(M))=M`,
  finite generation, `G_m^r × ∏ μ_{n_i}` decomposition);
- the full finite-type multiplicative-type/torus definitions (fpqc-local, no
  affineness or separable-splitting smuggled in) with a local proof that
  affineness and diagonalizability over a field extension follow;
- the arithmetic classification by finitely generated continuous Galois modules
  with the exact quasi-inverse and naturality, plus finite separable (indeed
  finite Galois) splitting;
- the torsion-free torus criterion with an elementary integer-diagonalization
  proof and a comparison over a residue field of `L ⊗_k K`;
- the three designed examples, including the non-smooth `μ_p` case and the
  real norm-one torus.

Axiom bookkeeping is explicit and hypothesis-faithful: AC is declared with its
exact uses in the affineness/separable-splitting/classification chain, and the
split-dictionary items are choice-free; no smoothness, connectedness, perfection
or characteristic restriction is imposed where the sources do not impose one.
No commissioned claim is omitted, weakened, or moved, and no scaffold edit by
this review is needed or made.

## 5. Flag: potential unmet prerequisite for planned consumers (owner decision requested)

This pair itself is complete; the following is a **library-level prerequisite
gap** whose natural home is this pair, absent from the published library and from
every current scaffold, and used by the authoritative proof route of planned
downstream items. It is flagged for the owner; this review does not decide it.

- **Required prerequisite claims** (Milne, *Algebraic Groups* 2022):
  - 12.36 (rigidity): for multiplicative-type `G,H` and a connected algebraic
    `k`-scheme `X`, a morphism `X × G → H` that is a homomorphism in the second
    variable for every `R`-point of `X` is independent of `x` (equivalently
    `Hom(G,H)` is étale/discrete). PDF pp. 253–254 (printed pp. 243–244).
  - 12.37: every action `G × H → H` by group homomorphisms of a connected
    algebraic group `G` on a multiplicative-type `H` is trivial; 12.38: a normal
    multiplicative subgroup of a connected group is central; 12.40:
    `N_G(H)^0 = C_G(H)^0` for a multiplicative-type subgroup `H` of an algebraic
    group `G`. Same pages; 12.41 is the central-extension form.
  - 12.29: the largest subtorus `H_t = D(M/M_tors)`, with its base-change and
    normality clauses (used together with 12.37 in Milne 17.62(b)).
- **Consuming planned items (evidence of actual use, from the authoritative
  proofs).** `split-reductive-root-systems-bruhat-cells-and-parabolics` (891,
  AG-GRP-4) is planned on "M22 Thm. 21.11/Cor. 21.12, 21.68, 21.80, 21.91"
  (`research/plan-algebraic-geometry-expansion-track.md` L215). Milne's proof of
  21.11(a) uses 17.59 and 17.62 (PDF pp. 438–439, printed pp. 428–429); 17.62(b)
  uses 12.29 and 12.37 ("Rigidity (12.37) implies that the action of `G` on
  `R(G)` by inner automorphisms is trivial"), and 17.62(e) uses 12.41; 21.22
  (PDF p. 441) uses 17.63, whose content rests on 17.62. Ch. 17 §d itself
  (`C_G(T) = N_G(T)^0`, Weyl group `W = N_G(T)/C_G(T)`) uses 12.40 (17.39(a),
  PDF p. 374). `highest-weights-and-rational-representations-of-split-reductive-groups`
  (893, AG-GRP-5) consumes 891's root-datum/Weyl-group interface and so inherits
  the same requirement indirectly. `abelian-varieties-base-change-and-arithmetic-models`
  (917) lists this pair as a page prerequisite but its commissioned items do not,
  in the design, name a rigidity use.
- **Evidence of absence.** Exhaustive grep over `items/`: "multiplicative type"
  occurs only in the nine A887 item files; no item outside this pair states any
  rigidity, triviality-of-connected-action, or centralizer/normalizer-of-torus
  fact; the only published "rigidity" items are abelian-variety rigidity in the
  885 pair (`prop-abelian-variety-commutativity-from-rigidity` and consumers),
  which does not apply to multiplicative-type homomorphism functors. The batch-25
  coverage harvest lists SGA 3 IX 3–5 as out-of-scope because the local splitting
  proof replaces the IX 5.4 import; that replacement removes the *use* in this
  pair, but no item anywhere states the rigidity *result*, so no consumer can
  cite it.
- **Confirmed vs uncertain.** Confirmed: (i) the listed source results exist and
  are used in the cited Milne proofs of the consumers' commissioned results;
  (ii) no published or scaffolded item states them today. Uncertain: whether the
  future 891/893 packets will reproduce Milne's route (they could in principle
  choose different local proofs), and whether the owner prefers these facts on
  A887 or as local prerequisite items on 891/893. Because the consumer item
  lists are not yet scaffolded, this is flagged as a *potential* unmet
  prerequisite, not a defect of the pair's own claims.
- **Recommended scaffold addition (owner action; nothing edited here).** Add to
  A887 one rigidity lemma for multiplicative-type groups, e.g.
  `lem-rigidity-of-multiplicative-type-groups` (connected parameter scheme `X`,
  multiplicative-type `G,H`, `X × G → H` a homomorphism in the second variable
  ⇒ constant in `x`), with the corollaries 12.37/12.38/12.40 as clauses or
  one-step corollaries, sourced to Milne 12.32–12.41 (pp. 242–244) and SGA 3
  IX §5 (Cor. 5.4, PDF p. 20); if the owner wants Milne's 17.62 route wholesale,
  also add the largest-subtorus notation `H_t = D(M/M_tors)` (12.24/12.29).
  Alternatively the owner may direct 891/893 to carry these as local prerequisite
  items when those pairs are scaffolded (the owner direction permits that). A
  merger of pairs is not indicated: the gap is small, local to the
  multiplicative-type theory, and does not suggest a re-scoping of either pair.

## 6. Checks run at this snapshot (2026-10-03)

| Check | Result |
|---|---|
| `coverage-checklist research/frontier-38-owner-30-batch-25.coverage.json --require-destination` | 2 pages, 42 rows, 0 errors, 0 warnings |
| `manifest-deps research/frontier-38-owner-30-batch-25.pages.json` | 15 items, 0 errors |
| `depcheck` | exit 0; no cycles; all references resolve; no draft item on a published page; no finding names a batch-25 item |
| `fwdcheck` | exit 0; no batch-25 finding |
| `extcheck` | exit 0; no batch-25 finding |
| `depsource --page groups-of-multiplicative-type-and-arithmetic-tori` | 0 unresolved; 16 deps on published pages; 21 in-batch/in-run (plan-spec item lists empty until splice) |
| `step3-decisions check --run frontier-38-owner-30 --phase scope` | pair listed as "current scope review required" before recording |
| artifact grep over `items/` for this pair's subject and for rigidity/centralizer claims | only the nine A887 item files mention "multiplicative type"; no lateral rigidity/centralizer-of-torus item exists |
| source re-fetch | Milne 2022 SHA-256 `f2ddd8fa…` and SGA 3 IX SHA-256 `7c1e3d5b…` match the packet note; complete sections read at the locators of §5 |

Environment note (unchanged from the packet): the default `proof-layout` app-dir
loader still fails on raw JSX in the sibling checkout; the packet's read-only
shim run (`PRESTIGE_APP_DIR=/tmp/ag885-render-app`) reported 15 items, 27 steps,
0 defects. That is a local mechanical check, not mathematical acceptance.

## 7. Recording

- Scope decision written with
  `node tools/step3-decisions.mjs record-scope --run frontier-38-owner-30 --page groups-of-multiplicative-type-and-arithmetic-tori --decision sufficient --reason "<scope evidence + §5 finding + this report path>"`.
- Receipt: `research/frontier-38-owner-30-step3a-review-groups-of-multiplicative-type-and-arithmetic-tori.json`.
- Report: this file. No item approvals and no owner records were written.
- Step discipline: only this report and the scope receipt were created; no
  scaffold, item, manifest, coverage, plan, or engine-state edit was made.
