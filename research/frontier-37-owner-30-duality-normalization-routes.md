# Batch 8 fixed-trace and duality route audit

Run: `frontier-37-owner-30`
Batch: 8, `residues-serre-duality-riemann-roch-curves`
Audit scope: 47 items (36 primary-page items and 11 companion items), excluding the 11 residue-core items owned by the residue helper below.

## Scope and ownership

This audit follows the current batch-8 page manifest, item statements, proof bodies, direct supplier interfaces, and live transitive item-file closure. Historical Step-3b review JSON was used only to identify stale or still-open decisions; it is not treated as current evidence after item and supplier changes.

The excluded residue-helper IDs are `lem-abstract-residue-additivity`, `lem-abstract-residue-basic-properties`, `lem-finite-potent-trace-linearity-and-conjugation`, `def-commensurable-subspaces-and-ideals-of-endomorphisms`, `lem-e-ideals-and-commutator-trace`, `thm-abstract-residue-exists-unique`, `cor-coefficient-trace-residue-agreement`, `def-residue-pairing-principal-parts`, `lem-local-residue-annihilator-regular-sections`, `lem-residue-pairing-functorial-line-bundle`, and `lem-abstract-residue-trace-under-finite-free-extension`. Their source and proof readiness remain with that helper.

The only item files changed for this audit are `thm-serre-duality-curves-line-bundles` and `rem-duality-trace-normalization`; the matching changes are limited to their entries in the batch-8 page and proof-contract carriers. No shared plan, published item, helper-owned item, other batch, engine state, receipt, or gate was changed or run.

## Fixed-trace route

The line-bundle theorem now separates two claims that must not be conflated.

1. Over an arbitrary field, specialize the published smooth-projective locally-free Serre duality theorem to a smooth proper curve, pure dimension one, and the invertible coefficient sheaf. This gives the functorial perfect cup-product pairing followed by the fixed Gysin trace `t_C`. The trace is inherited from the projective Gysin construction and is embedding-independent; it is not chosen to fit a residue formula.
2. Over a perfect field, prove literal equality of that same trace and the coefficient-trace residue sum. Apply duality to `O_C` and use `H^0(C,O_C)=k` to obtain `dim_k H^1(C,ω_C)=1`. Choose a closed point `p`, let `L=κ(p)`, and choose `a∈L` with `Tr_{L/k}(a)≠0` using nondegeneracy of the separable trace form. For `K=\bar k`, use `L⊗_k K ≅ ∏_{σ:L↪K}K`; this yields a sum over all geometric points above `p`, not a claim that `p` itself is `L`-rational.

The local normalization comparison is explicit. Choose a finite affine cover of `C_K` with one point chart last and all earlier charts avoiding a chosen `K`-rational point `x`. Such a cover exists because the affine opens form a basis and `C_K\setminus\{x\}` is quasi-compact in the Noetherian curve. Under the ordered Čech differential, lifting `u^{-1}du` on the last chart and zero on the others gives the boundary `+u^{-1}du` on each overlap. For the local two-term Koszul resolution `A e_u --u--> A`, the extension lift has raw Hom cochain `e_u↦+du`. With the stated Hom-first totalization, the lift has Čech degree zero, so neither boundary introduces an extra negative sign. The published normalized local-to-global Ext comparison contributes exactly `σ₁=(-1)^{1(1+1)/2}=-1`; the resulting class is `e_u↦-du`, the class on which the published rational-point normalizer has fixed Gysin trace `1`. Thus `t_{C_K}(δ_x(bu^{-1}du))=b`. Trace base change then gives `t_C(δ_p(a t^{-1}dt))=Σ_σ σ(a)=Tr_{L/k}(a)`, which is also the coefficient-trace residue sum. This nonzero connecting class spans `H^1(C,ω_C)`, proving literal equality without a free scalar or a projective-line inference.

For an arbitrary invertible `L`, multiplication by `s∈H^0(C,ω_C⊗L^{-1})` gives a commutative diagram from `0→L→L(D)→L(D)|_D→0` to `0→ω_C→ω_C(D)→ω_C(D)|_D→0`. Naturality of connecting maps identifies the lower boundary with the cup product of the upper class and `s`. The lower boundary is evaluated by the local residue formula. Every `H^1(C,L)` class has a finite principal-parts representative for some effective Cartier divisor `D`; changing a local lift adds a regular differential and does not change its residue. This proves the same literal trace equality for the twisted pairing and every invertible `L`.

This route preserves the published trace. In particular, one-dimensionality by itself would identify the two functionals only up to a scalar, and a `P^1` computation alone cannot determine the normalization on an arbitrary curve.

## Source and supplier audit

The primary published input is `thm-serre-duality-smooth-projective-variety-locally-free-sheaves`, with normalization specified by `def-smooth-projective-dualizing-line-bundle-and-trace`. The exact local bridge uses `lem-smooth-projective-rational-point-koszul-residue-normalization`, `lem-smooth-projective-embedding-gysin-trace-compatibility`, `lem-regular-immersion-local-to-global-ext-collapse`, and `thm-ext-is-hom-in-the-derived-category`; the curve proof also uses proper cohomology base change, ordered Čech computation/comparison, and the finite-separable trace formula by embeddings. These are the interfaces cited in the revised theorem facts and dependencies.

Full-text source review supports the residue side and its sign conventions:

- Tate, [“Residues of differentials on curves” (1968)](http://www.numdam.org/article/ASENS_1968_4_1_149_0.pdf), §§1–3: finite-potent trace construction and identities, followed by the adelic/global residue argument. In particular §1, printed pp. 149–151, gives the finite-potent setup and §2 includes the finite-extension trace identity R6 (printed p. 154). Tate supports the residue/trace calculation, not by itself the library-specific projective Gysin normalization.
- Lipman, [“Residues, duality, and the fundamental class of a scheme-map” (2011)](https://www.math.purdue.edu/~lipman/papers/Algecom.pdf), §1.3, printed pp. 2–4: local residue normalized by `res(t^{-1}dt)=1`, the local-cohomology boundary construction, and the global residue theorem; Theorem 4.1, printed pp. 7–8, states the compatible local/global duality trace. Lipman's route establishes the residue normalization on its own curve setup. The Koszul/Čech comparison above is the needed bridge to this library’s fixed Gysin trace.
- The projective-line examples are useful checks of the local residue matrix, but do not replace the arbitrary-curve comparison.

## Batch-wide route map

The 36 primary-page items divide into these proof routes:

| Route family | Items in scope | Audit conclusion |
| --- | --- | --- |
| Local differential and residue foundations | `lem-uniformizer-differential-is-a-basis`; `def-residue-rational-differential-curve-point`; `lem-residue-independent-uniformizer`; `lem-residue-exact-differential-zero` | Local coefficient-field/parameter arguments are explicit; the perfect-field scope supplies separability at every closed point. Their historical Step-3b decisions were accept. The cited smooth-curve DVR dependency is still draft/in-flight and must be reconciled by its owner. |
| Finite-potent, adelic, and global residue route | `lem-finite-potent-trace-existence-and-uniqueness`; `lem-adelic-quotient-computes-h1-structure-sheaf`; `thm-global-residue-theorem-algebraic-curve` | The proof route follows Tate's finite-potent trace and adelic quotient argument. Its dependency interfaces run through the eleven excluded helper items, whose independent readiness is not asserted here. These three items were historically accepted. |
| Principal parts, residue pairing, and curve projectivity | `def-principal-parts-sheaf-line-bundle-curve`; `lem-principal-parts-cech-h1-presentation`; `lem-residue-pairing-descends-cohomology`; `lem-global-residue-pairing-injective-left`; `lem-twisting-sheaf-projective-space-ample`; `cor-projective-embedding-every-smooth-proper-curve`; `lem-global-residue-pairing-dimension-balance` | Principal-parts quotient and connecting-map presentations feed the residue pairing. The projectivity route uses a nonconstant bounded-pole rational function, its finite map to `P^1`, and an ample power; it does not use the later duality theorem. Only the projective-space ampleness item was historically accepted. Historical blockers naming `thm-line-bundle-rational-section-cartier-divisor`, `lem-principal-weil-divisor-locally-finite`, and bounded-pole/finite-map suppliers are stale as simple “file absent” claims where those files now exist; live transitive file-absent blockers are listed below. |
| Serre duality core | `thm-serre-duality-curves-line-bundles`; `thm-serre-duality-curves-vector-bundles`; `thm-serre-duality-curves-coherent-sheaves`; `cor-h1-line-bundle-dual-sections` | The vector-bundle theorem is a direct arbitrary-field specialization of published duality. The revised line-bundle theorem now gives the fixed-trace/residue bridge above. The coherent-sheaf proof still records three unresolved support interfaces [A1] projective embedding/ample twists, [A2] the cohomology long exact sequence and vanishing above degree one, and [A3] natural comparison `Ext^q(E,ω_C)≅H^q(E^∨⊗ω_C)` for locally free `E`; those are genuine proof/dependency obligations, not closed by the residue normalization. The corollary then applies the line-bundle theorem numerically. |
| Riemann–Roch and curve geometry | `thm-full-riemann-roch-divisor`; `cor-h0-canonical-differentials-genus`; `cor-canonical-degree-two-g-minus-two`; `cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two`; `cor-rr-exact-high-degree-formula`; `thm-degree-two-g-line-bundle-basepoint-free`; `thm-degree-two-g-plus-one-line-bundle-very-ample`; `def-hyperelliptic-curve`; `thm-canonical-map-nonhyperelliptic-curve`; `thm-adjunction-smooth-plane-curve`; `cor-genus-degree-smooth-plane-curve`; `lem-degree-pullback-divisor-finite-morphism-curves`; `thm-riemann-hurwitz-complete`; `cor-unramified-cover-curves-genus-complete`; `thm-genus-one-canonical-bundle-trivial`; `cor-degree-three-line-bundle-embeds-genus-one-plane-cubic` | These consumers rely on the duality/RR chain, divisor and Picard dictionaries, and their named geometric suppliers. The smooth-plane adjunction theorem was historically accepted; the other items were escalated. The normalization result clears none of those remaining supplier obligations. |
| Scope note and normalization note | `rem-duality-trace-normalization`; `rem-general-serre-duality-deferred` | The normalization remark now points to the exact proof and does not infer equality from a scalar ambiguity. The general-duality remark remains a scope deferral, not a proof of a general derived-duality theorem. |

The 11 companion items are `ex-residue-projective-line`, `ex-serre-duality-projective-line-twists`, `ex-full-rr-projective-line`, `ex-genus-one-rr-degree-positive`, `ex-plane-cubic-canonical-trivial`, `ex-plane-quartic-canonical-hyperplane`, `cex-canonical-map-hyperelliptic-not-embedding`, `cex-degree-two-g-minus-one-not-always-basepoint-free`, `cex-degree-two-g-not-always-very-ample`, `ex-riemann-hurwitz-double-cover`, and `ex-residue-pairing-one-cocycle`. They check local residues, the `P^1` twist matrix, RR/genus/plane-curve specializations, and counterexamples to unconditional canonical/basepoint/very-ampleness claims. Their historic escalations frequently cite files that now exist; the current graph still determines readiness, and the examples do not independently establish the arbitrary-curve trace normalization.

Across the 47 scoped items, the historical Step-3b files record 9 accepts and 38 escalations. Those are historical decisions, not current gates. The revised line theorem and remark supersede their scalar/P¹ normalization route, but do not authorize wholesale acceptance of the remaining items.

## Current unresolved supplier closure

At the audit snapshot, a transitive scan of the 47 current item dependency lists found three supplier IDs without item files:

| Missing supplier | In-scope closure affected |
| --- | --- |
| `thm-cartier-divisors-mod-principal-to-picard` | 33 items, including the projective-embedding corollary and the line-bundle, vector-bundle, and coherent-sheaf duality records. |
| `thm-cartier-weil-isomorphism-locally-factorial` | The same 33-item closure. |
| `cor-degree-descends-picard-curve` | 9 downstream degree, high-degree RR, very-ampleness, and example/counterexample items. |

These are file-absence findings from the current graph, not conclusions from old escalation prose. The first two lie upstream of the projective-embedding corollary through the canonical divisor/Cartier–Picard route and block readiness of the revised duality theorem even though its local proof route is now explicit. The Cartier/Picard writers or root must close these interfaces or replace the affected dependency paths. No item was added or removed to hide those obligations.

## Batch-8 carrier and check record

The page carrier now records the theorem's direct proof inputs, precise fixed-trace strategy, and dependency level 14; the remark depends on the theorem and has level 15. The full run graph (813 in-run items) gives those same target levels; only in-run item edges count, not published suppliers. The proof-contract carrier contains the theorem steps and the remark boundary evidence. Targeted strict proof-contract validation after correcting step-range references and anchoring zero-case evidence to the statement returned:

```text
proof-contract: 0 error(s), 0 warning(s), 2/2 item(s) checked
```

Focused validation results:

- `node tools/tsx-run.mjs tools/precheck.mts items/thm-serre-duality-curves-line-bundles.md items/rem-duality-trace-normalization.md` — 1 proof-bearing item checked, 0 failing.
- `node tools/rendercheck.mjs items/thm-serre-duality-curves-line-bundles.md items/rem-duality-trace-normalization.md` — 2 files clean; renderer/YAML/KaTeX checks passed.
- `node tools/proof-contract.mjs research/frontier-37-owner-30-batch-8.proof-contracts.json --items thm-serre-duality-curves-line-bundles,rem-duality-trace-normalization --strict` — 0 errors, 0 warnings, 2/2 items checked.
- `node tools/manifest-deps.mjs research/frontier-37-owner-30-batch-8.pages.json` — 58 items, 0 missing dependency arrays, 0 errors.
- `node tools/item-dependency-levels.mjs check --run frontier-37-owner-30` — the theorem and remark labels 14/15 match the full-run calculation, but the command still reports 25 other stale levels in this batch: `cor-h1-line-bundle-dual-sections`, `thm-full-riemann-roch-divisor`, `cor-h0-canonical-differentials-genus`, `cor-canonical-degree-two-g-minus-two`, `cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two`, `cor-rr-exact-high-degree-formula`, `thm-degree-two-g-line-bundle-basepoint-free`, `thm-degree-two-g-plus-one-line-bundle-very-ample`, `thm-canonical-map-nonhyperelliptic-curve`, `cor-genus-degree-smooth-plane-curve`, `thm-riemann-hurwitz-complete`, `cor-unramified-cover-curves-genus-complete`, `thm-genus-one-canonical-bundle-trivial`, `cor-degree-three-line-bundle-embeds-genus-one-plane-cubic`, `ex-residue-projective-line`, `ex-serre-duality-projective-line-twists`, `ex-full-rr-projective-line`, `ex-genus-one-rr-degree-positive`, `ex-plane-cubic-canonical-trivial`, `ex-plane-quartic-canonical-hyperplane`, `cex-canonical-map-hyperelliptic-not-embedding`, `cex-degree-two-g-minus-one-not-always-basepoint-free`, `cex-degree-two-g-not-always-very-ample`, `ex-riemann-hurwitz-double-cover`, and `ex-residue-pairing-one-cocycle`. No other item levels were changed under this narrow release.

No Step-7/8 gate, ordinary receipt, or readiness transition was run or implied by this audit.
