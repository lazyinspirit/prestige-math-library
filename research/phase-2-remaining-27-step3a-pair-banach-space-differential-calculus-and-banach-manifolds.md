# Step 3a scope report — `banach-space-differential-calculus-and-banach-manifolds`

Run: `phase-2-remaining-27` · dispatch `step3a-pair-banach-space-differential-calculus-and-banach-manifolds-1e1367f6fda8734e`

- A page: `banach-space-differential-calculus-and-banach-manifolds` (batch 3, order 288.0761, `functional-analysis`)
- B page: `banach-space-differential-calculus-and-banach-manifolds-examples` (batch 3, order 288.0762; requires only the A page)
- **Scope decision: `sufficient`**
- Scope hash recorded by the receipt: `eb2bc6390ddd48e2022539d4fde1d0678db9925407cad1c53881e634aaa19a7e`
  (`scopeHash` over the current pair entries in `research/phase-2-remaining-27-batch-3.pages.json`)
- Receipt: `research/phase-2-remaining-27-step3a-review-banach-space-differential-calculus-and-banach-manifolds.json`

## Inputs read

- `research/phase-2-remaining-27-batch-3.pages.json` (full pair entries), `.coverage.json`, `.notes.md`, `.cross-batch-dependencies.json`
- `research/phase-2-remaining-27-alpha-step1-drift.md` (this pair: `no-drift`, orders 288.047/288.049/288.075/118)
- `research/phase-2-remaining-27-owner-authoring-direction.md` (binding)
- `research/plan-differential-topology-track.md` §12.2, lines 2056–2112 (the `FA-15a addition`: the controlling mathematical contract)
- `research/plan-functional-analysis-track.md` §14.5A (placement/ownership note) and §14.1 (orders 288.0761/.0762 and the exact four `requires`)
- `research/plan-spec.json`, `research/phase-2-remaining-27-scope-ledger.json`, `research/phase-2-remaining-27-cross-batch-dependencies.json`
- `research/published-consumer-supplier-ledger.md`, section `banach-space-differential-calculus-and-banach-manifolds` (lines 8601–8632)
- Consumer carriers: `library/differential-topology/stable-unstable-manifolds-and-morse-smale-transversality.md`, `items/thm-sard-smale-residual-regular-values-for-fredholm-maps.md`, `items/lem-universal-metric-trajectory-projection-is-fredholm.md`, `items/def-fredholm-maps-and-regular-values-on-countable-banach-manifolds.md`
- Supplier carriers: the three pages in `requires` plus every declared dependency of the 23 owned items (published `items/*.md`, and the in-run batch-2 page `compact-operators-and-riesz-schauder-theory`)
- Sources fetched and read on 2026-09-17 (bounded chunks):
  - Zuoqin Wang, *Banach Calculus* — `https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf` (16 pp.; read the contents and the §§2–3 material across PDF pp. 3–11)
  - Abbondandolo–Majer, *Lectures on the Morse Complex for Infinite-Dimensional Manifolds* — `https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf` (74 pp.; read §2.11 PDF pp. 40–43 and §2.12 PDF pp. 44–47 closely, including Lemmas 2.16, 2.21–2.25 and Theorems 2.19–2.20, and §1.3 PDF p. 8)
  - Piotr Hajłasz, *Functional Analysis* — `https://sites.pitt.edu/~hajlasz/Notatki/Functional%20Analysis2.pdf` (Theorem 10.19, PDF p. 95)

No separate page-prose scaffold exists for this new pair; the design prose is the two plan sections above, and the page prose is a Step 3b authoring obligation.

## Intended subject and role in the library

The pair is an FA-owned Phase-2 root created solely because published DT-4
(`stable-unstable-manifolds-and-morse-smale-transversality`) needs nonlinear
Banach calculus, split Banach submanifolds, and nonlinear Fredholm machinery
that FA-15 (linear Fredholm theory) does not supply. The controlling text is
explicit about the cut: “This pair owns the general nonlinear definitions and
local theorems; DT-4 owns only the Morse-trajectory application and the global
Sard–Smale category argument” (DT §12.2). The intended subject is therefore:

1. Fréchet calculus on Banach spaces in the operator-norm convention
   (derivative, uniqueness, sum/bounded-bilinear product/chain rules, `C^k`,
   mean-value estimate, inverse and implicit function theorems);
2. countable-base real Banach manifolds, tangent spaces/differentials,
   split submanifolds, the regular-value theorem with **complemented** kernel;
3. Banach vector bundles/sections and the transverse-section zero-set theorem;
4. nonlinear Fredholm maps: definition/index, local finite-dimensional
   reduction, local constancy of the index;
5. a boundary remark that surjectivity alone does not give the submanifold
   conclusion without a split kernel.

The published consumer mapping in the ledger is exactly covered by the
manifest: `def-countable-base-banach-manifold-and-smooth-map`,
`def-fredholm-map-between-banach-manifolds`,
`lem-local-finite-dimensional-reduction-for-a-fredholm-map`,
`thm-regular-value-theorem-for-banach-manifolds`,
`thm-implicit-function-theorem-for-banach-spaces`,
`def-smooth-banach-vector-bundle-and-section`,
`thm-a-transverse-banach-bundle-section-has-a-split-zero-submanifold` →
`thm-sard-smale-residual-regular-values-for-fredholm-maps` and
`lem-universal-metric-trajectory-projection-is-fredholm`. Sard–Smale itself is
already published behind the DT-4 interface
(`items/thm-sard-smale-residual-regular-values-for-fredholm-maps.md`), so the
coverage file's “deferred” disposition for AB Theorem 2.19 is correct and
matches the plan’s division of labour.

## Scope check against the binding design

Manifest = design, item-for-item and in order: 18 A items
(`def-frechet-derivative-between-banach-spaces` … `rem-surjectivity-alone-does-not-give-a-banach-submanifold-without-a-split-kernel`)
and 5 B items (`ex-the-derivative-of-a-bounded-bilinear-map`,
`ex-the-banach-inverse-theorem-for-a-small-lipschitz-perturbation-of-the-identity`,
`ex-a-regular-level-set-in-a-banach-space`,
`ex-a-projection-with-finite-dimensional-kernel-is-fredholm`,
`cex-a-closed-uncomplemented-subspace-is-not-a-split-banach-submanifold`),
identical to DT §12.2 and FA §14.5A. Page fields also agree with both plans:
orders 288.0761/.0762, category `functional-analysis`, B requires only A, A
requires `normed-and-banach-spaces`, `bounded-linear-operators-and-quotient-spaces`,
`compact-operators-and-riesz-schauder-theory`, `completeness-and-uniform-continuity`.
Conventions match the design: real scalars, Fréchet derivative (explicitly not
Gâteaux/directional), operator-norm `C^k`, Hausdorff second-countable manifolds,
split (complemented-kernel) hypotheses printed in the statements, and no
“constant rank” shortcut.

## Source coverage

Verified directly in the fetched copies:

- Wang: §2.1 derivative + Exercise 6 uniqueness (PDF p. 4); §§2.1.1–2.1.4 sum,
  Leibniz, inversion-derivative, chain rule with proofs (PDF pp. 4–5); §2.2.3
  mean-value theorem incl. the Hahn–Banach proof (PDF p. 7); §2.3 higher
  derivatives/`C^p` (PDF pp. 7–8); §2.4 partials (PDF pp. 8–9); §3.1
  contraction principle, §3.2 inverse theorem with derivative normalization and
  the `C^p` induction (PDF pp. 9–11), §3.3 implicit theorem via
  `φ(x,y)=(x,f(x,y))` (PDF p. 11). This supports items 1–7 exactly as the
  strategies describe; the mean-value item’s Hahn–Banach route is the one
  printed in the source.
- Abbondandolo–Majer §2.11 (PDF pp. 40–43): Lemma 2.16 (complemented kernel of
  a combined operator), the regular-value definition as *onto with complemented
  kernel*, the Fredholm-map definition, Propositions 2.17–2.18, Theorem 2.19
  (Sard–Smale). §2.12 (PDF pp. 44–47): Lemmas 2.21–2.25 and Theorem 2.20 —
  the paradigm of the transverse-section zero set being a Banach manifold with
  a Fredholm projection. The brief Banach-manifold definition, with Lang (1999)
  cited for foundations, is in §1.3 (PDF p. 8). This backs items 8–17 in the
  form AB states them.
- Hajłasz Theorem 10.19 (PDF p. 95, Phillips): `c_0` is not complemented in
  `ℓ∞`, matching the B counterexample’s use and the published
  `thm-c-zero-is-not-complemented-in-ell-infinity`.

Considered exclusions (coverage file), all consistent with the design and its
declared consumers: Taylor expansion (§2.3.3) and symmetry of mixed partials
(§2.3.1–2.3.2, §2.4.2) — no owned proof or published consumer uses them; the
Banach-valued Riemann integral (§2.2.1–2.2.2) — item 5 is deliberately proved
through the dual-norming theorem; the quotient rule for inverses (§2.1.3) — the
inverse theorem’s strategy reconstructs the inversion derivative from the
Neumann series; AB Proposition 2.17 (transverse restrictions) — no owned proof
or mapped consumer uses the two-map restriction statement; AB Theorem 2.19
(Sard–Smale) — already published at the DT-4 interface, explicitly reserved to
DT-4 by the plan. None of these leaves a gap in the subject actually owed.

## Dependency and library-role checks

- Every declared dependency of the 23 owned items resolves to a published
  `items/*.md` carrier or to the in-run batch-2 page
  `compact-operators-and-riesz-schauder-theory`
  (`def-fredholm-operator-cokernel-and-index`,
  `lem-fredholm-splitting-and-parametrix`,
  `thm-fredholm-index-is-locally-constant`,
  `lem-neumann-series-and-small-perturbations-of-bounded-inverses`), whose
  current statements carry the needed hypotheses (finite kernel/closed finite-
  codimensional cokernel; AC-annotated splitting; local constancy of the
  index).
- No in-run page other than the B companion requires this A page, and no in-run
  item consumes this pair’s items; the planned consumers are the published
  DT-4 items, exactly as the scope ledger and published-consumer ledger record.
- The A page’s items cite no B-only items; the B items are leaf exercises over
  the A page plus published suppliers.

## Observations (non-blocking, for the Step 3b author/owner)

1. **AB locator bookkeeping.** The fetched `montreal.pdf` places the
   manifold/transversality material as follows: brief Banach-manifold
   definition in §1.3 (PDF p. 8 / printed p. 44); §2.1 = Palais–Smale
   (PDF p. 21); §2.2 = Morse–Smale condition (PDF p. 22); regular values,
   Fredholm maps, Prop. 2.17, Prop. 2.18 and Thm. 2.19 in §2.11 (PDF pp.
   40–43 / printed pp. 76–79). The coverage locator “pp. 13–18 and 40–43” and
   the item locators “§2.1”/“§2.2” therefore do not match this copy (PDF
   pp. 13–18 are hyperbolic-dynamics pages; the design’s own “§2.3” also
   mismatches). This is citation hygiene, not an omitted topic: every needed
   result is present in the fetched copy. The author should re-anchor locators
   when authoring.
2. **Local finite-dimensional reduction.** No general statement of
   `lem-local-finite-dimensional-reduction-for-a-fredholm-map` appears in the
   fetched AB copy; AB proves the parametric instance it needs (§2.12, Lemma
   2.23: the section differential is a left inverse; Lemma 2.24: the projection
   is Fredholm of the stated index). The item is standard and the design’s own
   route is complete in outline (Batch-2 splitting + implicit theorem), so the
   item stays in scope; the author must supply the full local proof, and a
   secondary source (e.g. Smale 1965) may be cited in addition to AB.
3. **Published DT interface wording.** The published DT definition
   `def-fredholm-maps-and-regular-values-on-countable-banach-manifolds` calls a
   value regular when the derivative is merely surjective. The pair’s
   `thm-regular-value-theorem-for-banach-manifolds` prints the complemented-
   kernel hypothesis and `rem-surjectivity-alone-…` supplies exactly the
   clarification needed for the already-ledgered Phase-3 repair of that
   published item. This is expected Phase-3 debt, not a scope defect.
4. **Downstream use of AB Prop. 2.17.** In the fetched copy, AB’s proof of the
   parametric Fredholm-projection lemma (Lemma 2.24) invokes Proposition
   2.17(ii), which the coverage marks out-of-scope. The pair’s seven mapped
   consumer interfaces do not need it, and the corresponding published DT-4
   lemma (`lem-universal-metric-trajectory-projection-is-fredholm`) already
   carries its own published proof, so this is a downstream item-home question
   for the owner if a later DT-4 repair adopts AB’s Lemma 2.24 route — not a
   defect in this pair’s scope.

## Decision

`sufficient`. The planned definitions, results and examples are precisely the
binding inventory, they cover the subject the pair owes (nonlinear Banach
calculus, split submanifolds/regular values, bundle sections, nonlinear
Fredholm maps) at the level its declared published consumers require, every
item is backed by complete authoritative sources or complete local proof
routes from published suppliers, and the sensible exclusions carry consumer-
based justifications. Uncertainty is confined to locator precision and one
standard lemma’s explicit source statement, reported above; nothing recorded
here depends on unread material. The decision binds to the recorded scope hash;
any change to the pair’s items, kinds, titles or statements reopens the scope
review automatically.

Recorded with:

```bash
node tools/step3-decisions.mjs record-scope --run phase-2-remaining-27 \
  --page banach-space-differential-calculus-and-banach-manifolds \
  --decision sufficient \
  --reason "Scope matches DT 12.2/FA 14.5A exactly (18 A / 5 B, orders 288.0761/.0762); all published DT-4 consumer interfaces mapped and present; Wang 2.1-3.3 and AB 2.11-2.12 verified in fetched full texts, Hajlasz Thm 10.19 verified; every item dependency resolves to a published carrier or the in-run batch-2 supplier page; report research/phase-2-remaining-27-step3a-pair-banach-space-differential-calculus-and-banach-manifolds.md"
```

Next action: owner/operator may use this receipt towards the Step 3a gate;
Step 3b may audit/author the pair against the current manifest.
