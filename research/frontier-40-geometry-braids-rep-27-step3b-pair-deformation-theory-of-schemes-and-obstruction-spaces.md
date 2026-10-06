# Step 3b pair report — `deformation-theory-of-schemes-and-obstruction-spaces`

- Run: `frontier-40-geometry-braids-rep-27`, batch 24, orders 909/910, category `scheme-theory`.
- Pair: A `deformation-theory-of-schemes-and-obstruction-spaces` (18 items) / B
  `deformation-theory-of-schemes-and-obstruction-spaces-examples` (2 items).
- Role: step3b author/auditor for this pair only. Write scope: the 20 owned item files,
  the two owned `library/scheme-theory/` pages, this report, the batch-24 contracts file if
  required, and step-3b item decisions for owned IDs. Sibling manifests, sibling item files,
  shared plans, the defect ledger and engine state are read-only here.
- Source of truth: current `research/frontier-40-geometry-braids-rep-27-batch-24.pages.json`
  (statements/deps), the step3a pair report and owner scope repair in
  `...-batch-24.notes.md` §"Step 3a owner scope repair", the AG-DEF-1 design row
  (`research/plan-algebraic-geometry-expansion-track.md` line 258), and the owner authoring
  direction `research/frontier-40-geometry-braids-rep-27-owner-authoring-direction.md`.

## Owned IDs (authoring order; ascending dependency level, ties by page order and ID)

0. `def-square-zero-extension-and-small-extension` (A)
0. `lem-cohomology-of-hypersurface-twists` (A)
1. `def-infinitesimal-deformation-functor-over-square-zero-extension` (A)
2. `def-embedded-deformations-of-a-closed-subscheme` (A)
2. `lem-flat-deformations-form-a-zariski-sheaf-of-groupoids` (A)
3. `lem-hypersurface-deformations-classified-by-equation-deformations` (A)
11. `def-cotangent-complex-of-a-scheme-morphism` (A)
12. `def-ext-groups-of-the-cotangent-complex` (A)
12. `lem-cotangent-complex-truncation-and-smooth-case` (A)
13. `lem-cech-hypercohomology-computes-ext-of-the-cotangent-complex` (A)
13. `lem-ext-of-locally-free-sheaf-via-cohomology` (A)
13. `lem-lichtenbaum-schlessinger-complex-and-cotangent-ext` (A)
14. `lem-affine-deformations-obstruction-and-torsor` (A)
15. `thm-first-order-deformations-controlled-by-ext-one-cotangent-complex` (A)
15. `thm-obstructions-lie-in-ext-two-cotangent-complex` (A)
16. `cor-deformation-cohomology-of-a-smooth-scheme` (A)
16. `cor-vanishing-ext-one-implies-rigidity-of-deformation-classes` (A)
17. `lem-tangent-and-obstruction-spaces-for-hypersurface-deformations` (A)
17. `cex-vanishing-tangent-space-does-not-imply-rigidity-with-automorphisms` (B)
18. `ex-first-order-deformations-of-a-hypersurface` (B)

## Entry audit — open obligations at start

- All 20 owned item files and both owned page files are absent at entry; everything is authored
  here. All 77 non-owned declared dependencies exist in `items/` with `status: published`,
  except the six in-run batch-23 items listed under "Unfinished suppliers" below.
- Open obligation 1 (prerequisite): six declared in-run suppliers in batch 23
  (`algebraic-spaces-stacks-and-derived-algebraic-geometry-foundations`) are not authored at
  entry: `def-category-fibred-in-groupoids`, `def-cotangent-complex-of-a-ring-map`,
  `def-derived-scheme-and-cotangent-complex`, `def-standard-resolution-of-a-ring-map`,
  `lem-cotangent-complex-h0-and-polynomial-case`, `lem-cotangent-complex-resolution-independence`.
  Per dispatch, consumers are authored anyway and the exact supplier/consumer/step uses are
  flagged below; their step-3b decisions remain `escalate` until the supplier content and the
  proof use are reconciled.
- Open obligation 2 (step3a §4.2): `lem-cech-hypercohomology-computes-ext-of-the-cotangent-complex`
  declares only sheaf-level Čech suppliers while claiming a complex-level statement; the
  complex-level machinery exists in the published library
  (`thm-hyper-ext-spectral-sequence`, `lem-the-total-cartan-eilenberg-complex-computes-the-derived-composite`,
  `thm-first-hypercohomology-spectral-sequence`). The authored proof declares exact suppliers;
  the manifest `deps` row is updated accordingly (statement untouched).
- Open obligation 3 (step3a §4.3): two wikilinks missing from declared deps
  (`lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology`,
  `def-flat-morphism-schemes`) — resolved by declaring them in the manifest `deps` rows.
- Open obligation 4: all 19 proof-bearing items depend (directly or transitively) on the
  unfinished batch-23 suppliers; proof uses are recorded item by item below.
- Not in scope for this report: published defects elsewhere, shared plan/prose amendments
  (none proposed so far), and the final Step-3/4 gates.

## Checkpoint log

(Appended item by item: state, exact uses, decision, checks.)

### Item 1 — `def-square-zero-extension-and-small-extension` (level 0, written)

- Authored `items/def-square-zero-extension-and-small-extension.md`: ring side (square-zero
  extensions, $A$-module structure on the kernel, trivial extension $A[I]$, smallness,
  finite-dimensionality of the kernel, dual-numbers example, factorization of surjections into
  small extensions with the $\mathfrak m$-adic filtration argument), scheme side (first-order
  thickenings, homeomorphism of underlying spaces, conormal identification, trivial thickening,
  morphisms) and the flat base-change statement $J_X=f^*J$.
- Local repair (recorded, statement in the manifest untouched): the promised conclusion "then
  $I$ is a finite-dimensional $k$-vector space" needs $A'$ to lie in the base category of local
  Artin $k$-algebras with residue field $k$ and finite dimension, not just $A$; the item body
  states this as the standard convention (both $A$ and $A'$ in $\mathcal C_k$) and derives
  finite-dimensionality of $I$ as a $k$-subspace of the finite-dimensional space $A'$. Every
  downstream item already uses small extensions inside $\mathcal C_k$, so no use is weakened.
- Suppliers: all deps published (`def-commutative-ring`, `def-ring-homomorphism`,
  `def-artinian-ring`, `def-local-ring`, `def-closed-immersion-schemes`,
  `def-quasi-coherent-ideal-sheaf`, `def-quasi-coherent-module-scheme`,
  `def-fibre-product-schemes-universal-property`, `lem-flat-morphisms-stable-base-change`,
  `thm-quasi-coherent-ideal-closed-subscheme-correspondence`) plus `def-flat-morphism-schemes`
  (added to deps for the base-change paragraph; published, no level change).
- Sources read: Stacks 90.3.1–90.3.3 (tags 06GC/06GD/06GE, incl. the proof of 06GE) and
  91.3 (tags 08KY–08L2) in the fetched chapter PDFs; byte counts/sha match the coverage stamps.
- Checks: `rendercheck` OK (1 file); `precheck` not-applicable (definition); `proof-layout`
  0 steps 0 defects; `content-policy` batch run reports only the not-yet-written sibling items.
- Decision: none yet for this item (recorded after final checks); no open mathematical gap.

### Item 2 — `lem-cohomology-of-hypersurface-twists` (level 0, written)

- Authored `items/lem-cohomology-of-hypersurface-twists.md`: the section sequence
  $0\to\mathcal O(-d)\xrightarrow{\cdot f}\mathcal O\to i_*\mathcal O_X\to0$, its twist, the
  identification $\mathcal I/\mathcal I^2\cong\mathcal O_X(-d)$, the computation
  $H^0(X,\mathcal O_X(d))\cong(S/(f))_d$ of dimension $\binom{n+d}{n}-1$, vanishing of all
  higher $H^q(X,\mathcal O_X(d))$ for $d\ge1$, and $\mathcal N_{X/\mathbb P^n}\cong\mathcal O_X(d)$.
- Note on rigor: since $d\ge1$, both outer terms $H^q(\mathbb P^n,\mathcal O(d))$ and
  $H^{q+1}(\mathbb P^n,\mathcal O)$ vanish by the projective-space computation, so no
  cohomological-dimension theorem is needed; this is the argument actually used.
- Deps change: added published `lem-closed-immersion-cohomology-pushforward` (used in [F3]) and
  `def-internal-hom-qc-sheaves` (used in claim 4); no in-run edge added, level unchanged.
- Sources read: Stacks Chapter 30 §8, Lemma 8.1 (tag 01XT), statement+notation (fetched
  `coherent.pdf`, 80 pages); Hartshorne Chapter 1 Theorem 1.1(b),(c) (fetched `math274root.pdf`).
  Coverage addition of the Chapter 30 row is planned with the coverage update.
- Checks: `precheck` PASS (direct); `rendercheck` OK; `proof-layout` 5 steps, 0 defects.
- Decision: none yet; no open mathematical gap.

### Item 3 — `def-infinitesimal-deformation-functor-over-square-zero-extension` (level 1, written)

- Authored as a definition: deformations of a flat lfp $k$-scheme over a small extension,
  cartesian-square form, isomorphisms of deformations reducing to the identity, groupoid
  $\operatorname{Def}_X(A')$, trivial deformation, tangent space $T^1_X$, infinitesimal
  automorphism group, functoriality in $A'$ (base change) and in $X$, and the explicit
  groupoid-vs-set distinction used by the companion counterexample.
- Deps added: published `lem-flat-morphisms-stable-base-change` and
  `lem-base-change-locally-finite-type-presentation` (trivial deformation and base-change
  functoriality); no level change.
- Unfinished supplier use: `def-category-fibred-in-groupoids` (batch 23) is cited for the
  fibred-in-groupoids reading of $\operatorname{Def}_X$; at authoring time the sibling had
  just written that file (mtime 2026-10-05 01:32 local). Consumer step: last paragraph of the
  Definition ("it is a category fibred in groupoids over the category of small extensions").
  Decision will remain escalated unless the supplier file is final and its statement is
  verified at handoff; the definition does not use anything beyond the declared statement.
- Sources read: Stacks 93.9 (0DY7-0DY9) and Hartshorne Chapter 1 §1 / Chapter 4 §24 headers,
  in the fetched full chapters.
- Checks: `rendercheck` OK; `precheck` n/a (definition); `proof-layout` 0 steps.
- Decision: pending (supplier reconciliation).

### Item 4 — `def-embedded-deformations-of-a-closed-subscheme` (level 2, written)

- Authored as a definition: embedded deformations of a flat closed subscheme in a fixed
  trivial ambient deformation, isomorphism groupoid, functor $\operatorname{ED}_{Y\subseteq X}$,
  trivial embedded deformation, normal sheaf $\mathcal N=\mathcal Hom(\mathcal I/\mathcal I^2,\mathcal O_Y)$,
  conormal sequence for smooth closed immersions, and the hypersurface specialization.
- Deps added: `def-fibre-product-schemes-universal-property` (used for the cartesian
  identification). No unfinished supplier is cited by this definition.
- Sources read: Hartshorne Chapter 1 Theorem 1.1 and Section 2 (Situation A); Sernesi Section 2.
- Checks: `rendercheck` OK; `precheck` n/a (definition).
- Decision: pending; no open mathematical gap.

### Item 5 — `lem-flat-deformations-form-a-zariski-sheaf-of-groupoids` (level 2, written)

- Authored the full Zariski gluing proof (7 steps): underlying-space homeomorphism from the
  square-zero ideal; restriction functor and descent data; gluing locally ringed spaces
  (01JB) and scheme property (01JC via `def-scheme`); gluing the structural morphisms and
  flatness stalkwise; identification of the special fibre with $X$; full faithfulness and
  essential surjectivity; first-order-thickening variant; no separatedness/quasi-finiteness.
- Owner-repaired dependency route is used exactly as amended: `thm-gluing-ringed-and-locally-ringed-spaces`,
  `def-scheme`, `thm-gluing-sheaves`, `thm-prime-spectrum-of-a-quotient-bijection`,
  `thm-affine-fibre-product-tensor-ring`, `def-fibre-product-schemes-universal-property`,
  `def-flat-morphism-schemes`, `def-locally-finite-presentation-morphism`; no fppf descent.
- Sources read: Stacks Schemes 26.14 Lemmas 01JB/01JC with proofs (fetched `schemes.pdf`,
  582443 bytes, 49 pages) and Stacks 93.9 (0DY7).
- Checks: `precheck` PASS (direct); `rendercheck` OK; `proof-layout` 7 steps, 0 defects.
- Decision: pending; no open mathematical gap.

### Item 6 — `lem-hypersurface-deformations-classified-by-equation-deformations` (level 3, written)

- Authored complete proofs of all four claims (11 steps): flatness of $Z(F)$ and its special
  fibre via the ideal criterion and a nilpotent-filtration argument; the converse via
  Nakayama on chart ideals $J_i=(g_i)$, regular local equations, the normalized unit cocycle
  $c_{ij}\equiv1\bmod I$ compared with the twisting cocycle, its vanishing by
  $H^1(\mathbb P^n,\mathcal O)=0$ on the standard Leray cover, gluing to a global form
  $F\in(S\otimes A')_d$; uniqueness up to a unit of $A'$; the functor identification; formal
  smoothness by explicit lifting; and the tangent-space computation $S_d/kf\cong(S/(f))_d$.
- Precision notes (manifest statement untouched): the reduction condition in claims (1)-(2) is
  made precise as the canonical identification with $X\times_k\operatorname{Spec}A$ (the
  manifest's "= X" is shorthand for that identification); the formal-completion statement of
  claim (3) is justified by the explicit description of its $R$-points for local $R$.
- Deps added (all published): `thm-flatness-criteria-by-injections-and-ideals`,
  `thm-leray-acyclic-cover-theorem`, `thm-cech-to-sheaf-cohomology-comparison`,
  `thm-qc-sheaf-affine-higher-cohomology-vanishes`, `def-cech-cohomology-open-cover`,
  `thm-artinian-local-ring-has-nilpotent-maximal-ideal`, `thm-artinian-ring-is-noetherian`,
  `cor-finite-variable-polynomial-ring-noetherian`, `thm-noetherian-ring-quotients-and-localisations`,
  `def-effective-cartier-divisor`, `def-degree-projective-hypersurface`.
- Sources read: Hartshorne Chapter 1 §2 and Theorem 1.1; Stacks Chapter 30 §8 (01XT);
  Sernesi §1-2.
- Checks: `precheck` PASS (direct); `rendercheck` OK; `proof-layout` 11 steps, 0 defects.
- Decision: pending; no open mathematical gap. Open authoring uncertainty: none material.

### Item 7 — `def-cotangent-complex-of-a-scheme-morphism` (level 11, written)

- Authored as the glued scheme-level cotangent complex, with the affine compatibility obligation and
  the functoriality/transitivity/base-change statements of the scaffold; the discrete case of the
  batch-23 derived construction is cited as the alternative description.
- Supplier reconciliation: all three in-run suppliers (`def-cotangent-complex-of-a-ring-map`,
  `lem-cotangent-complex-resolution-independence`, `def-derived-scheme-and-cotangent-complex`) were
  written by the sibling batch-23 author on 2026-10-05 01:53 and their current statements cover the
  glueing and comparison language used here. Decision recorded `accept` on that snapshot.
- Sources read: Stacks 92.24 (08T2/08T3/08V6) and 92.3 (08PN), fetched chapter `cotangent.pdf`.
- Checks: `rendercheck` OK; `precheck` n/a (definition); `proof-layout` 0 steps.

### Item 8 — `def-ext-groups-of-the-cotangent-complex` (level 12, written)

- Authored with the derived-Hom definition, the identification with Hom in the derived category,
  the two-term computation, the ring analogue, and the naturality/vanishing clauses.
- Supplier reconciliation: uses published derived-Hom items plus the now-authored ring-map cotangent
  complex; all dependencies resolve. Decision recorded `accept`.
- Checks: `rendercheck` OK; `precheck` n/a (definition); `proof-layout` 0 steps.

### Items 9-13 — cotangent computation and assembly items (levels 12-14)

- `lem-cotangent-complex-truncation-and-smooth-case` (written, 4 steps): H^0 and the polynomial case
  from the in-run supplier; the truncation/naive-cotangent identification and the smooth/etale
  localization are used with their exact Stacks locators and flagged as open obligations, because
  the in-run suppliers state neither (Stacks tags 08RB, 08QY-08R1, 08R5).
- `lem-cech-hypercohomology-computes-ext-of-the-cotangent-complex` (written, 4 steps): reduction to
  the hypercohomology of the Hom complex, the Cech-to-derived spectral sequence for a complex, and
  the degeneration on affine intersections. Open obligations: the complex-level Cech comparison and
  the existence of quasi-coherent models are not published items.
- `lem-ext-of-locally-free-sheaf-via-cohomology` (written, 3 steps): complete from the published
  tensor-Hom/derived-sections items, except that the smooth specialization consumes the flagged
  part (3) of the truncation item.
- `lem-lichtenbaum-schlessinger-complex-and-cotangent-ext` (written, 3 steps): the complex is built
  and the Hom-complex presentations are computed; the truncation comparison $\tau_{\ge-2}L\simeq
  L_\bullet$ (Stacks tag 09CG) is used with its exact locator and flagged as an open obligation.
- `lem-affine-deformations-obstruction-and-torsor` (written, 3 steps): the solution set is identified
  with the ring-map deformation problem and the obstruction/torsor/automorphism theorem (Stacks tag
  08SP, Hartshorne Theorem 10.1) is imported with its exact locator and flagged as an open
  obligation; no item of the published library or the in-run inventory states it.
- Checks: all four proof-bearing items PASS precheck, rendercheck OK, `proof-layout` 0 defects;
  the batch proof contract passes `--strict` on all 20 items.
- Decisions: `escalate` for all five with the exact missing inputs and consumer steps (see the
  decision table below).

### Items 14-18 — classification theorems, corollaries, hypersurface and B items (levels 15-18)

- `thm-first-order-deformations-controlled-by-ext-one-cotangent-complex` (3 steps),
  `thm-obstructions-lie-in-ext-two-cotangent-complex` (4 steps),
  `cor-deformation-cohomology-of-a-smooth-scheme` (3 steps),
  `cor-vanishing-ext-one-implies-rigidity-of-deformation-classes` (4 steps, induction with
  explicit base/IH/discharge tags),
  `lem-tangent-and-obstruction-spaces-for-hypersurface-deformations` (3 steps),
  `cex-vanishing-tangent-space-does-not-imply-rigidity-with-automorphisms` (4 steps; explicit
  automorphism $\sigma:x\mapsto x+\epsilon x^2$ with inverse verification),
  `ex-first-order-deformations-of-a-hypersurface` (4 steps; conic dimension 5, quadric dimension 9,
  general formula, Hartshorne Chapter 3 table read).
- All are authored completely at the level of the pair's own items; every one of them consumes,
  directly or transitively, the imported affine theorem and/or the flagged Cech/smooth-case
  obligations, so all seven decisions are `escalate` with the exact consumer steps.
- Checks: precheck PASS for all seven; `proof-layout` 0 defects; proof contract `--strict` clean
  after renumbering.

## Decision record (Step 3b)

`accept` (confidence 1): `lem-cohomology-of-hypersurface-twists`,
`def-infinitesimal-deformation-functor-over-square-zero-extension`,
`def-embedded-deformations-of-a-closed-subscheme`,
`def-cotangent-complex-of-a-scheme-morphism`, `def-ext-groups-of-the-cotangent-complex`.

`repaired` (confidence 1): `def-square-zero-extension-and-small-extension` (base-category precision),
`lem-flat-deformations-form-a-zariski-sheaf-of-groupoids` (owner Step-3a route closed by the authored
proof), `lem-hypersurface-deformations-classified-by-equation-deformations` (precision of the
reduction statement; dependency rows completed).

`escalate` (owner-held; exact reasons stored in the receipts): `lem-cotangent-complex-truncation-and-smooth-case`,
`lem-cech-hypercohomology-computes-ext-of-the-cotangent-complex`,
`lem-ext-of-locally-free-sheaf-via-cohomology`,
`lem-lichtenbaum-schlessinger-complex-and-cotangent-ext`,
`lem-affine-deformations-obstruction-and-torsor`,
`thm-first-order-deformations-controlled-by-ext-one-cotangent-complex`,
`thm-obstructions-lie-in-ext-two-cotangent-complex`,
`cor-deformation-cohomology-of-a-smooth-scheme`,
`cor-vanishing-ext-one-implies-rigidity-of-deformation-classes`,
`lem-tangent-and-obstruction-spaces-for-hypersurface-deformations`,
`cex-vanishing-tangent-space-does-not-imply-rigidity-with-automorphisms`,
`ex-first-order-deformations-of-a-hypersurface`.

## Supplier reconciliation and required remedies

The six batch-23 suppliers that were missing at entry were written by the sibling pair during this
session and their present statements support the glueing, base-change and H0/polynomial uses of
items 7-13. Five theorem-level inputs remain absent from both the published library and the whole
run inventory; they are the blockers behind the twelve escalations:

1. `lem-cotangent-complex-truncation-and-smooth-case` steps 1.1-1.3 require the comparison
   $\tau_{\ge-1}L_{B/A}\simeq NL(\alpha)$ (Stacks tag 08RB) and the localization/etale
   compatibility (tags 08QY-08R1, 08R5). Remedy: extend the batch-23 cotangent chain with an item
   `lem-naive-cotangent-complex-comparison` and an item stating localization/etale compatibility of
   $L_{B/A}$ (or add these clauses to `lem-cotangent-complex-resolution-independence`).
2. `lem-cech-hypercohomology-computes-ext-of-the-cotangent-complex` steps 1.2-1.3 require the
   complex-level Cech-to-derived comparison and the existence of bounded-above quasi-coherent
   models for complexes with quasi-coherent cohomology. Remedy: add a
   `lem-cech-hypercohomology-comparison-for-bounded-below-complexes` item built from
   `thm-first-hypercohomology-spectral-sequence` and
   `thm-cech-to-sheaf-cohomology-comparison`, plus a `lem-quasi-coherent-model-for-qc-cohomology`
   item.
3. `lem-lichtenbaum-schlessinger-complex-and-cotangent-ext` step 1.2 requires the
   Lichtenbaum-Schlessinger truncation comparison (Stacks tag 09CG). Remedy: add
   `lem-lichtenbaum-schlessinger-truncation`.
4. `lem-affine-deformations-obstruction-and-torsor` steps 1.1-3.1 require the affine obstruction
   theorem (Stacks tag 08SP; Hartshorne Theorem 10.1 as independent treatment). This is the pair's
   own scaffolded item, so the remedy is a complete local proof of tag 08SP/Hartshorne 10.1 using
   the Lichtenbaum-Schlessinger machinery once (3) is supplied.
5. `lem-ext-of-locally-free-sheaf-via-cohomology` step 2.1 and all global items inherit (1) and (4).

Until then the twelve decisions above remain `escalate`; no unresolved work is marked complete.

## Scaffold and manifest findings (owner actions)

- **Local repair, already applied in the item body:** the manifest coefficient relation for
  `ex-first-order-deformations-of-a-hypersurface` reads "$g'-\lambda g\in k\cdot f$ for some
  $\lambda\in k^\times$"; as written this coarsens the class set (it would give
  $\mathbb P(S_2/kf)\cup\{0\}$ rather than a 5-dimensional space), because for normalised lifts
  $F=f+\epsilon g$, $F'=f+\epsilon g'$ the unit comparison forces the $\epsilon$-free coefficient
  $1$, hence $g'-g\in k\cdot f$. The authored item uses the corrected relation and records the
  reasoning; every other promised clause (bijection with $(S/(f))_2$, dimension 5, unobstructedness,
  $\mathbb P^5$, quadric dimension 9) is preserved. The manifest line itself is untouched (scope
  hash) and the owner may amend it.
- **Local repair, already applied in the item body:** the manifest smallness clause for
  `def-square-zero-extension-and-small-extension` guarantees finite-dimensionality of $I$ only if
  $A'$ is also an object of the base category; the authored Definition states both $A$ and $A'$ in
  $\mathcal C_k$ and derives the finite-dimensionality used by the corollaries.
- **Manifest dependency updates (no statement changes):** published items added to `deps` rows for
  used facts: `def-flat-morphism-schemes` (def-square-zero), `lem-closed-immersion-cohomology-pushforward`
  and `def-internal-hom-qc-sheaves` (lem-cohomology-of-hypersurface-twists),
  `lem-flat-morphisms-stable-base-change` and `lem-base-change-locally-finite-type-presentation`
  (def-infinitesimal-deformation-functor), `def-fibre-product-schemes-universal-property`
  (def-embedded-deformations), eleven published flatness/Cech/Noetherian/Nakayama/differential
  suppliers for the hypersurface items, `thm-first-hypercohomology-spectral-sequence` and
  `thm-hyper-ext-spectral-sequence` (lem-cech-hypercohomology), `def-flat-morphism-schemes`
  (cor-deformation-cohomology), `thm-kahler-differentials-existence-presentation` and
  `thm-conormal-exact-sequence-algebra` (lem-lichtenbaum and lem-affine), `def-local-ring`
  (lem-hypersurface-classifications). All additions are published items, so no dependency level
  changed; `item-dependency-levels check --run` reports 0 errors for the 20 batch-24 items.
- **Coverage:** two source rows added and fetch-stamped for this pair: Stacks Chapter 30
  (`coherent.pdf`, Section 30.8/tag 01XT) and Stacks Chapter 21 (`sites-cohomology.pdf`, Section
  21.10/tag 03AZ); `source-fetch-check --coverage --stamp` reports 12/12 fetch-verified and
  `coverage-checklist` reports 0 errors (1 pre-existing low-yield warning).

## Checks actually run on the authored pair (exact commands, results)

- `node tools/tsx-run.mjs tools/precheck.mts <all 20 item paths>` → 15 proof-bearing items checked,
  0 failing; the 5 definitions/one no-verification example are not-applicable.
- `node tools/rendercheck.mjs <all 20 item paths + 2 page paths>` → OK (frontmatter, math, no
  multiline displays, no wikilinks in math) after the fixes.
- `node tools/proof-layout.mjs <all 20 item paths>` (single batched command, run after the last
  edits) → 20 items, 65 steps, 0 defects.
- `node tools/content-policy.mjs research/frontier-40-geometry-braids-rep-27-batch-24.pages.json`
  → 20 scoped items, 0 errors, 0 warnings.
- `node tools/depcheck.mjs` → no warning or error line references any of the 20 owned item files
  (the run-wide 907 errors are all sibling/unfinished-pair unresolved links).
- `node tools/fwdcheck.mjs --quiet` → 53 run-wide errors, none for this pair.
- `node tools/extcheck.mjs --run frontier-40-geometry-braids-rep-27` → rc 0.
- `node tools/prosecheck.mjs` → OK; `node tools/depsource.mjs` → OK (0 unresolved).
- `node tools/model`-free contract gates on `...-batch-24.proof-contracts.json`:
  `proof-contract --strict` 0 errors/0 warnings over 20/20 items; `finite-smoke` 0 errors;
  `risk-report` 0 errors; `boundary-audit --fail-on-contradicted --fail-on-template` no
  contradicted and no template clusters; `citation-fidelity --fail-on-missing-quote` 161 citations,
  every quote found.
- `node tools/coverage-checklist.mjs ...-batch-24.coverage.json` → 2 pages, 48 harvested results,
  0 errors, 1 warning (coverage-low-yield, pre-existing threshold).
- `node tools/source-fetch-check.mjs --coverage ...-batch-24.coverage.json --stamp` → 12/12
  fetch-verified.
- `node tools/step3-decisions.mjs record-item` for all 20 items (8 accept/repaired confidence 1,
  12 escalate); `check --phase final` reports this pair's escalated items as owner-held.

## Handoff summary

- Completed: all 20 owned item files authored (17 A + 2 B), both `library/scheme-theory/` pages
  written and render-clean, the batch-24 proof-contracts file written and green under every
  contract gate, decisions recorded for all 20 items, coverage and source stamps updated.
- Open obligations: the twelve escalations above, with exact missing inputs and remedies; the
  owner may alternatively authorize the named local helper items, in which case the affected
  consumers can be re-authored against them.
- No pair-scope change, no statement change in the manifest, no sibling-content edit, no new pair,
  no owner decision invented; shared plan/prose amendments: none proposed (page and manifest rows
  match the plan's orders 909/910 and the five `requires` pages).

## Closing note (final state at handoff)

- Final frontmatter normalisation: the five owned definitions now record
  `verification.precheck: n/a` (matching the published convention); frontmatter-only edits were
  followed by re-recording the receipts of the seven closed items whose closure they touched.
- Final check runs on the frozen pair: `proof-layout` over all 20 item paths in one command →
  20 items, 65 steps, 0 defects; `precheck` → 15 checked, 0 failing; `rendercheck` over the 20
  items and 2 pages → OK; `content-policy` on the batch manifest → 0 errors, 0 warnings;
  `coverage-checklist` → 0 errors (1 pre-existing low-yield warning);
  `proof-contract --strict` → 0 errors, 0 warnings; `citation-fidelity` → all 161 quotes found;
  `boundary-audit` → no contradicted rows, no template clusters.
- Owner-held state: 8 items closed (`accept`/`repaired`, confidence 1), 12 items `escalate` with
  the exact missing inputs, consumer steps and remedies above. The escalations are the honest
  mathematical state of the pair at this point in the run; no completed item is marked complete
  with an unresolved obligation, and no escalated item is claimed as proved.
