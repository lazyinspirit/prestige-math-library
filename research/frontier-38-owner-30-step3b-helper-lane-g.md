# Step 3b helper report — lane G

- Run `frontier-38-owner-30`, pair `blowups-exceptional-divisors-and-strict-transforms`
  (A) / `blowups-exceptional-divisors-and-strict-transforms-examples` (B), batch 2,
  category `scheme-theory`.
- Lane role: Step-3b pair-authoring helper for the pair lead (`/root`); owned
  items: dependency level 7 (seven items). I write only those item files, this
  report, and `research/frontier-38-owner-30-step3b-contracts-lane-g.json`.
- The lead report
  `research/frontier-38-owner-30-step3b-pair-blowups-exceptional-divisors-and-strict-transforms.md`
  is authoritative for the frozen scope decision and shared obligations.
- Conventions used: charts of the point blowup over `A = O_{S,p}` are
  `Spec A[T]/(xT-y) = Spec A[y/x]` (first chart, `T = y/x`, `E` cut by `x`) and
  `Spec A[U]/(yU-x) = Spec A[x/y]` (second chart, `U = x/y`, `E` cut by `y`),
  glued by `TU = 1`; plane-curve charts use `y = xs` and `x = yU_1`.

## Owned items and checkpoints

All seven items authored in the order below; each passed
`node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` (PASS),
`node tools/rendercheck.mjs items/<id>.md` (OK) and
`PRESTIGE_APP_DIR=/tmp/f38-app node tools/proof-layout.mjs items/<id>.md`
(0 defects). Steps were renumbered to the canonical dependency layers where
precheck proposed a repair (item 1).

| # | item | level | status | notes |
|---|---|---|---|---|
| 1 | `lem-blowup-separates-transverse-components` | 7 | complete | 7 steps; adapted regular parameters + Nakayama + chartwise saturation; s distinct points, pairwise disjointness, s=2 case |
| 2 | `lem-exceptional-curve-normal-bundle-minus-one` | 7 | complete | 5 steps; concrete transition computation of `O(-E)\|_E`, dualization, twist invariant, k-rational clause |
| 3 | `ex-blowup-principal-ideal-isomorphism` | 7 | complete | 4 steps; direct invertibility of `(f)`, identity theorem, single chart `A[(f)/f]=A` |
| 4 | `ex-empty-center-blowup-identity` | 7 | complete | 4 steps; `R(O_X)=O_X[t]`, single chart over each affine, empty effective divisor route |
| 5 | `ex-strict-transform-cusp-first-blowup` | 7 | complete | 6 steps; `f(x,xs)=x^2(s^2-x)`, smooth parabola, multiplicity-2 point, second blowup drops contact 2 to 1 |
| 6 | `ex-strict-transform-node-separates-branches` | 7 | complete | 4 steps; `f(x,xs)=x^2(s^2-x-1)`, two points `s=±1`, squarefree leading form, transverse |
| 7 | `ex-total-versus-strict-transform-line-through-origin` | 7 | complete | 4 steps; `pi^*L = L' + E`, strict transform `V(s)`, one transverse point, second chart empty |

## Proof-step summaries (per item)

1. Item 1: 1.1 transversality gives regular germs and pairwise distinct
   tangent lines; 2.1 a local equation `u` of `Y_i` is not in `m^2` (Nakayama),
   so `u = ax+by+...` with `b != 0` after swapping regular parameters; 3.1 in
   the `T = y/x` chart the saturation of `(u)` by `(x)` is `(u/x)` and
   `Y_i' cap E = V(x, a+bT)` is one point with contact order one (and the
   second chart shows the same or no point); 4.1 pairwise distinctness via the
   level-6 separation lemma; 5.1 pairwise disjointness (near `E` by that lemma,
   off `E` by the off-center isomorphism); 6.1 support-curve count and
   "only new intersections" clause; 7.1 discharge.
2. Item 2: 1.1 `O(-E) = I O_{S'} = O(1)`, `O(E) = O(-1)`
   (`thm-pullback-center-ideal-invertible`); 2.1 `E = P(I/I^2) = P^1_{kappa(p)}`
   (`cor-exceptional-divisor-smooth-center-normal-bundle`, charts from the
   regular-surface theorem); 3.1 the two chart generators `x`, `y` of `O(-E)`
   satisfy `x = yU`, so `e_1 = T e_0` and `O(-E)|_E = O(1)`; 4.1 dualization
   gives `O_E(E) = O(-1)` with twist index `-1` and degree `-1`, invariant by
   uniqueness of twists; 5.1 k-rational specialization.
3. Item 3: 1.1 multiplication by the nonzerodivisor `f` is an isomorphism
   `A -> (f)`, so `(f)` is invertible and `D = V(f)` is an effective Cartier
   divisor; 2.1 the identity theorem makes the blowup an isomorphism; 3.1 the
   Rees algebra is `A[ft]` and the single chart is
   `(A[ft][(ft)^{-1}])_0 = A`; 4.1 conclusion with the geometric instances
   (point of a regular curve, line in the plane).
4. Item 4: 1.1 all powers of the unit ideal are `O_X`, so
   `R(O_X) = O_X[t]`; 2.1 `Bl_{O_X} X = Proj_X O_X[t]`; 2.2 over each affine
   the single standard chart `D_+(t)` has ring `A[I/1] = A`; 3.1 conclusion,
   with the empty effective Cartier divisor reading.
5. Item 5: 1.1 substituting `y = xs` gives `x^2(s^2-x)` and strict transform
   `V(s^2-x)`; 2.1 it is a smooth parabola meeting `E` only at `s = 0` with
   contact order/multiplicity 2 (also from the leading form `f_2 = y^2`); 3.1
   the second chart gives `1-yU^3`, a unit on `E`, so no point of `E` there;
   4.1 the total transform identity `pi^*C = C' + 2E`; 5.1 the second blowup
   of the tangency point lowers the contact order from 2 to 1; 6.1 discharge.
6. Item 6: 1.1 substituting `y = xs` gives `x^2(s^2-x-1)` and strict transform
   `V(s^2-x-1)`; 2.1 `C' cap E` is the two points `s = ±1`, each transverse,
   matching `f_2(1,s) = s^2-1` squarefree; 3.1 the second chart gives
   `1-U^2-yU^3`, meeting `E` in the same two points `U = ±1` and no others;
   4.1 discharge: two branches separated, strict transform regular and
   transverse.
7. Item 7: 1.1 in the `(x,s)` chart the total transform is `x·s` with strict
   transform `V(s)`, an isomorphism onto `L`; 2.1 the second chart contributes
   no strict-transform points; 3.1 the chart descriptions glue into the
   closure of the preimage of `L minus 0` and give transversality at the single
   point of the direction of `L`; 4.1 discharge `pi^*L = L' + E`.

## Choice cases

Items 1 and 2 assume the Axiom of Choice in their Statements; the inherited
choice is recorded as `[A1]`, cited in step 1.1 of each, and the suppliers used
are stated under it. Items 3-7 inherit only the Proj-choice of the blowup
construction; no further choice is used, and no item introduces a selection
that would need AC.

## Boundary cases (full 8-row worksheets are in the contract fragment)

- `empty`: item 4 is exactly the empty-center case; items 1, 2, 5, 6, 7 record
  that the center is a single point and the exceptional curve is nonempty.
- `zero` / `one`: strengths of the divisor/ideal (unit ideal; principal
  generator; twist indices `-1`/`1`; `s = 1` excluded in item 1).
- `degenerate`: singular (non-regular at `p`) curves are excluded from items
  1, 2, 6's pair-separation reading; items 5 and 6 record the multiplicity-2
  cases explicitly.
- `endpoints`: no intervals; the only numerical inputs are twist indices and
  contact orders.
- `nonempty-choice`: see above.
- `iff-forward` / `iff-reverse`: only item 6's squarefree-criterion reading and
  the twist-classification clause of item 2 have biconditional content; each is
  anchored to the corresponding supplier statement.

## Dependency changes (for the lead's manifest rows)

Additions (suppliers actually cited; no other changes):

- `lem-blowup-separates-transverse-components`:
  + `lem-blowup-isomorphism-off-center`, + `def-strict-transform-closed-subscheme`,
  + `cor-nakayama-generators-modulo-an-ideal`; keeps all frozen deps.
- `ex-blowup-principal-ideal-isomorphism`: + `thm-affine-blowup-standard-charts`;
  - `lem-cartier-divisor-sheaf-invertible` (unused: invertibility of a principal
  ideal generated by a nonzerodivisor is proved directly on the affine chart).
- `ex-empty-center-blowup-identity`: + `def-effective-cartier-divisor`.
- `ex-strict-transform-cusp-first-blowup`: + `lem-blowup-lowers-contact-order`.
- `ex-strict-transform-node-separates-branches`:
  - `lem-blowup-lowers-contact-order` (unused: its clause (1) applies to two
  separate regular algebraic curves, which this item does not construct; the
  separation is proved concretely by the two chart computations).
- Items 2 and 7: no changes to the frozen dep lists.

## Flags for the lead

1. Hypothesis scope, item 1 (and shared with items 5-7's suppliers):
   `thm-blowup-regular-surface-closed-point-regular` is frozen for a *regular
   finite-type* `k`-scheme of pure dimension two, while the item Statements use
   "regular surface over `k`" in the `def-contact-order-regular-components`
   sense (Noetherian, dimension two, regular at every point; no finite-type
   hypothesis). The chart clause actually used is local at `p`; if the pending
   post-drain repair generalizes that theorem, the gap closes. Otherwise the
   Statements should be read with the pair's finite-type convention.
2. Statement wording, item 6: "the other chart contributes no points of `E`" is
   literally false (the two intersection points lie in the chart overlap, at
   `U = ±1 = 1/s`), but true under the natural reading "no further points of
   `E`". The frozen sentence is kept verbatim in the Example section and the
   verification proves the precise content; a minimal clarification is
   proposed at integration unless the literal text must be preserved.
3. Item 5's characteristic-not-2 hypothesis is not used by the two chart
   computations (the parabola `s^2 = x` is regular in every characteristic);
   the hypothesis is kept as frozen and is harmless.
4. Item 2's phrase "dual tautological bundle `O(-1)`" is read in the quotient
   convention of `def-projective-bundle-scheme` (dual of the tautological
   quotient `O(1)`); the verification normalizes this reading.

## Open obligations

- Contract fragment `research/frontier-38-owner-30-step3b-contracts-lane-g.json`
  is complete: all eleven previously pending quotes were re-extracted from the
  now-landed level-3/6 suppliers, and
  `node tools/proof-contract.mjs research/frontier-38-owner-30-step3b-contracts-lane-g.json --strict`
  reports `0 error(s), 0 warning(s), 7/7 item(s) checked`.
- Every landed supplier was re-read against the item that uses it
  (`lem-blowup-lowers-contact-order`, `thm-pullback-center-ideal-invertible`,
  `thm-blowup-effective-cartier-divisor-isomorphism`,
  `lem-plane-curve-multiplicity-transform-chart`,
  `thm-blowup-separates-plane-curve-tangent-directions`,
  `thm-blowup-smooth-surface-point-charts`,
  `lem-blowup-plane-origin-incidence-equations`,
  `def-strict-transform-closed-subscheme`); no Fact or step needed a change.
- All seven items pass precheck, rendercheck and proof-layout as of the last
  edit; no item gate, acceptance, decision or certification is claimed by this
  lane.

## Next

- Wait for the remaining suppliers, re-extract their exact statement quotes,
  validate the strict contract fragment, and hand both files to the lead.
