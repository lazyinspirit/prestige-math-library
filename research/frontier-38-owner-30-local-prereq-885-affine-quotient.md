# A885 affine normal quotient prerequisite packet

Assigned disjoint author scope: the three representation suppliers, one necessary inverse-character auxiliary, and the final affine normal quotient. No page, plan, manifest, task, shared state or autopilot transition is changed. All items are draft. Five new A items in total will be required; inventory integration and the 100-item A-page cap remain the active author's responsibility.

## Full text and exact proof route

Actually consulted Milne, *Algebraic Groups*, corrected 2022 printing, https://www.jmilne.org/math/Books/iAG2022.pdf, complete downloaded `/tmp/frontier38-groups-review.pdf` and extracted `/tmp/frontier38-groups-review.txt`. PDF SHA256 `f2ddd8fa4d263085f173934664b246007a2c0bd539739b7c82de39bfb5d21f40`. Reading was targeted, not a whole-book audit.

| Item | Exact full-text locator and proof use |
|---|---|
| `lem-nonaffine-affine-group-faithful-representation` | Props.4.7/4.8, printed p.86; Thm.4.9, p.87; extracted lines 4726–4800. Coassociativity proves finite coefficient spans are comodules; counit expresses coordinate generators in matrix coefficients and gives a surjective coordinate ring map. |
| `lem-nonaffine-subgroup-scheme-stabilizer-of-line` | Thm.4.27 and Lem.4.28, pp.94–95, lines 5112–5160. A finite stable space containing the subgroup ideal generators yields its exact scheme stabilizer; a wedge line preserves the stabilizer over every algebra. |
| `lem-nonaffine-normal-subgroup-inverse-multiple-character` | Thm.3.23, pp.70–71, lines 3977–4080; Props.4.23–4.25, pp.93–94; Lem.5.16, pp.102–103, lines 5447–5473. Full Cartier nilpotent/augmentation-square proof supplies the characteristic-zero case. Linear independence of group-like elements splits weight spaces. In characteristic p, smooth Frobenius image supplies density. |
| `lem-nonaffine-normal-subgroup-kernel-of-representation` | Cor.4.29, p.95, lines 5160–5170; Lemmas5.15–5.17 and Prop.5.18, pp.102–103, lines 5438–5505. Tensor cancellation makes the subgroup act trivially on a stabilizer line; normality preserves invariants, yielding an exact kernel. Finite coefficient descent and restriction of scalars retain arbitrary fields and inseparable extensions. |
| `thm-nonaffine-affine-normal-group-quotient-affine` | Prop.5.18, p.103, lines 5484–5505; general represented fppf quotient supplies descent; the induced representation has trivial scheme kernel and the group-monomorphism supplier gives a closed embedding in GL. |

The characteristic-p implementation deliberately replaces the abbreviated sentence about the entire tensor representation in Milne5.16 by the pure-power subspace of `Sym^{p^r}(V)`. Its matrix entries are p^r-th powers and therefore factor through the smooth scheme-theoretic Frobenius image. The whole tensor power need not have trivial Frobenius-kernel action. The proof never infers a scheme subgroup from its ordinary rational points unless its ambient acting group has first been proved reduced.

## Dependency order and recursive closure

1. Faithful representation, depending only on the field-group conventions in the active author's `def-abelian-variety-over-a-field`.
2. Scheme line stabilizer, using (1) and published finite-type Noetherianity.
3. Inverse-character auxiliary, using the active author's stable high-Frobenius-image item and published regularity, perfect-field smoothness, regular-local-domain, algebraically closed closed-point suppliers. Its characteristic-zero Cartier argument is reproduced here; it is not an unrecorded external prerequisite.
4. Normal representation kernel, using (2), (3), algebraic closure existence and finite-type Noetherianity.
5. Affine quotient, after the exact general normal quotient stabilizes: representation descends through the represented fppf quotient, whose induced representation has trivial scheme kernel; the active author's group-monomorphism closed-immersion lemma then embeds it into affine GL.

The four independent supplier files' recursive `deps` traversal currently resolves **1506 distinct IDs**, with **zero missing files**. The only draft nodes in that recursive closure are these four files, `def-abelian-variety-over-a-field`, and `lem-nonaffine-high-frobenius-smooth-image`; all remaining boundary nodes are existing published prerequisites. Thus no dependency on an unbuilt item from unselected A873/A877 is introduced. The finite coefficient proof uses only finite basis choices; the other items state and propagate AC through their declared suppliers. The final item's recursive closure must be recomputed after the quotient supplier stabilizes; it is not included in this four-item closure claim.

## Current acceptance status

The independent representation packet is mathematically authored and locally format checked; this is not an independent mathematical audit or engine acceptance. The quotient author and parent explicitly reported the exact `thm-nonaffine-group-scheme-normal-subgroup-quotient` proof stable. The complete exact proof was then read and its hash matched before the affine quotient theorem was authored. A malformed combined wikilink in its F3 was reported to its owner and repaired, along with an analogous supplier link; the owner repeated the required checks. Its final raw SHA256 is `9c6ca17d8d5d337e5e494bcc97a661bd19bacc08dc129d451d84e19a3aa5029c`, checked on disk. The affine quotient consumes its represented fppf quotient and universal property; the link repair changes neither the consumed statement nor proof.

## Content hashes before final local checks

- `items/lem-nonaffine-affine-group-faithful-representation.md`: `a2879c585c9f833646de67b7341c3d4df5b28afb826e473d7e123d68ebe57a04`.
- `items/lem-nonaffine-subgroup-scheme-stabilizer-of-line.md`: `db689086a5b9b204dea662aff1e8cbc33898359d6960ee74f309d59ce51a5b65`.
- `items/lem-nonaffine-normal-subgroup-inverse-multiple-character.md`: `fc7f3cc4e75f94f105fabb4ad0b7cdf1a0d9f905d2ad862a7dbe54945fb8b3f1`.
- `items/lem-nonaffine-normal-subgroup-kernel-of-representation.md`: `9693fd34874438631c7dc51520fa01bf1bb47c44df8eecb5e54a18df32ce2694`.

## Four-item local check evidence

On 2026-10-03 the following exact scope passed after its last item edits: `items/lem-nonaffine-affine-group-faithful-representation.md`, `items/lem-nonaffine-subgroup-scheme-stabilizer-of-line.md`, `items/lem-nonaffine-normal-subgroup-inverse-multiple-character.md`, `items/lem-nonaffine-normal-subgroup-kernel-of-representation.md`.

- `node tools/tsx-run.mjs tools/precheck.mts` followed by those four explicit paths: exit 0, `4 checked, 0 failing — all clean`.
- `node tools/rendercheck.mjs` followed by those four explicit paths: exit 0; real KaTeX and renderer YAML parsing succeeded on all four.
- `PRESTIGE_APP_DIR=/tmp/ag885-render-app node tools/proof-layout.mjs` followed by those four explicit paths: exit 0, `proof-layout: 4 items, 14 steps, 0 defects`. The established temporary shim points to the real application's web and worker code, using its installed tsx.

No tests, audit stamps, judge stamps or autopilot transitions were added.

## Final five-item closure and checks

The full five-item recursive `deps` traversal resolves **1757 distinct IDs**, with **zero missing files and zero cycles**. The entire draft part of that closure is:

- `def-abelian-variety-over-a-field`.
- `lem-nonaffine-affine-and-finite-morphism-fppf-descent`.
- `lem-nonaffine-affine-group-faithful-representation`.
- `lem-nonaffine-effective-affine-algebra-descent`.
- `lem-nonaffine-finite-field-descent-scheme-with-affine-orbits`.
- `lem-nonaffine-finite-relation-saturated-affine-neighbourhood`.
- `lem-nonaffine-flat-hypersurface-slice`.
- `lem-nonaffine-fppf-descent-of-scheme-morphisms`.
- `lem-nonaffine-generic-quasisection-flat-groupoid`.
- `lem-nonaffine-global-sections-flat-field-base-change`.
- `lem-nonaffine-group-monomorphism-closed-immersion`.
- `lem-nonaffine-high-frobenius-smooth-image`.
- `lem-nonaffine-normal-subgroup-inverse-multiple-character`.
- `lem-nonaffine-normal-subgroup-kernel-of-representation`.
- `lem-nonaffine-subgroup-scheme-stabilizer-of-line`.
- `thm-nonaffine-affine-normal-group-quotient-affine`.
- `thm-nonaffine-finite-flat-affine-equivalence-quotient`.
- `thm-nonaffine-finite-relation-quotient-with-affine-orbits`.
- `thm-nonaffine-generic-scheme-quotient-flat-equivalence-relation`.
- `thm-nonaffine-group-scheme-normal-subgroup-quotient`.
- `thm-nonaffine-groupoid-quotient-from-quasisection`.

Every draft boundary belongs to the active A885 author or its assigned disjoint quotient packet. All other reached items are existing published suppliers. The affine quotient consumes no unselected A873/A877 item and introduces no Hopf-subalgebra faithful-flatness shortcut.

After all five final item edits, these exact commands passed with exit 0 on 2026-10-03:

```sh
node tools/tsx-run.mjs tools/precheck.mts items/lem-nonaffine-affine-group-faithful-representation.md items/lem-nonaffine-subgroup-scheme-stabilizer-of-line.md items/lem-nonaffine-normal-subgroup-inverse-multiple-character.md items/lem-nonaffine-normal-subgroup-kernel-of-representation.md items/thm-nonaffine-affine-normal-group-quotient-affine.md
node tools/rendercheck.mjs items/lem-nonaffine-affine-group-faithful-representation.md items/lem-nonaffine-subgroup-scheme-stabilizer-of-line.md items/lem-nonaffine-normal-subgroup-inverse-multiple-character.md items/lem-nonaffine-normal-subgroup-kernel-of-representation.md items/thm-nonaffine-affine-normal-group-quotient-affine.md
PRESTIGE_APP_DIR=/tmp/ag885-render-app node tools/proof-layout.mjs items/lem-nonaffine-affine-group-faithful-representation.md items/lem-nonaffine-subgroup-scheme-stabilizer-of-line.md items/lem-nonaffine-normal-subgroup-inverse-multiple-character.md items/lem-nonaffine-normal-subgroup-kernel-of-representation.md items/thm-nonaffine-affine-normal-group-quotient-affine.md
```

Outputs: `5 checked, 0 failing — all clean`; rendercheck `OK — 5 file(s)` including real KaTeX and renderer YAML; actual renderer `proof-layout: 5 items, 16 steps, 0 defects`.

Final quotient raw SHA256: `9871a86b30569ab961e35793d497aec412ccb8ec3e04e4d571a76daaa36db1d1`. The other four hashes above remain unchanged. Local authoring and format evidence are complete; no independent mathematical acceptance or engine gate clearance is asserted.

The same five explicit-path checks were repeated after integration against the final normal-quotient supplier hash `9c6ca17d8d5d337e5e494bcc97a661bd19bacc08dc129d451d84e19a3aa5029c`; all again exited 0 with identical 5/5 precheck, 5-file render and 16/16 actual-renderer step results.
