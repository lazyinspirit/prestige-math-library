# Frontier 37 owner 30, batch 8: residue and principal-parts repair route

Date: 2026-10-01. The five sections below record the initial report-only audit
of these batch-8 items against their then-current bodies, supplier interfaces,
and `research/frontier-37-owner-30-duality-remaining-audit-a.md`. At that
initial pass no item, carrier, manifest, plan, ledger, receipt, or gate was
changed. A later owner release authorized repairs to exactly these five item
files; the final addendum records the resulting live state and checks. The
initial findings below are historical wherever the addendum supersedes them.

## Scope and disposition

1. `lem-residue-exact-differential-zero`
2. `lem-residue-independent-uniformizer`
3. `lem-global-residue-pairing-injective-left`
4. `def-principal-parts-sheaf-line-bundle-curve`
5. `lem-principal-parts-cech-h1-presentation`

The earlier audit's formal-derivative and injectivity findings are still
present in the live files; neither is stale. Its principal-parts disposition
is correct in substance, but its finite-support-on-quasi-compact-opens check
should be supplemented by a local-finiteness argument to establish the
claimed sheaf direct sum on arbitrary opens. The exact routes and live
supplier gaps are recorded below.

## 1. Exact differentials: type the formal derivative through universality

In `lem-residue-exact-differential-zero`, Facts [F3] and Step 2.1 still jump
from the universal derivation of `K = k(C)` to termwise differentiation of a
Laurent expansion. The conclusion is valid under the statement's finite
separability hypothesis, but that sentence does not itself define a map
between the two differential modules.

Use the existing interfaces in `def-residue-rational-differential-curve-point`,
`def-formal-laurent-series-and-residue`, and
`lem-uniformizer-differential-is-a-basis` as follows. For the chosen
uniformizer `t`, let `j_t: K -> κ(p)((t))` be the completion embedding and let
`D_t` be the formal derivative which kills the chosen coefficient field
`κ(p)`. Regard `κ(p)((t))` as a `K`-module through `j_t`. Then
`D_t ∘ j_t: K -> κ(p)((t))` is a `k`-derivation, so the universal property
gives a `K`-linear map
`Δ_t: Ω¹_{K/k} -> κ(p)((t))` with
`Δ_t(df) = D_t(j_t(f))`. Since `t` is a local parameter in `K`,
`Δ_t(dt)=1`. The supplier `lem-uniformizer-differential-is-a-basis` says
`dt` is a `K`-basis of `Ω¹_{K/k}` at these finite-separable residue points.
Thus if `df = a dt`,
`j_t(a) = Δ_t(a dt) = Δ_t(df) = D_t(j_t(f))`.
This establishes the Laurent coefficient of the algebraic differential
without asserting or using
`Ω¹_{κ((t))/k} = κ((t)) dt`.

The coefficient of `t⁻¹` in `D_t(Σ a_n tⁿ)` is zero: only `n=0` could
contribute and its coefficient is `0·a_0`. This uses no division and proves
the residue vanishing in every characteristic. Keep the stated
finite-separable residue-field restriction: it supplies the compatible
coefficient field and the uniformizer-basis interface. No claim at
inseparable closed points follows.

## 2. Uniformizer independence: use the same typed comparison map

In `lem-residue-independent-uniformizer`, Step 2.1 still claims
`dt' = θ'(t) dt` in `Ω¹_{K/k}` by applying Leibniz to the formal series
`t'=θ(t)`. The formal series belongs to the completion, and that calculation
has not been justified in algebraic Kähler differentials.

Reuse `Δ_t` above. If `t'=θ(t)` in `κ(p)[[t]]`, then
`Δ_t(dt') = D_t(j_t(t')) = θ'(t)`. Applying `Δ_t` to
`a dt = a' dt'` therefore gives
`j_t(a)=j_t(a')θ'(t)`, where `j_t(a')` is the `t`-expansion of the
coefficient whose `t'`-expansion is used in the current Step 1.1. This is
exactly the coefficient-change identity needed by the current monomial
residue calculation.

The rest of the live proof route is sound: the `n=-1` coefficient is one,
the `n≥0` terms have no negative powers, and for `n≤-2` the coefficient is
an integral Laurent polynomial in the unit coefficients of `θ`; its
characteristic-zero vanishing makes it the zero integral polynomial and
allows specialization to every characteristic. The finite negative tail
then gives equality of the two `t⁻¹` coefficients, and the same finite
separable residue-field trace gives equality of residues. Do not broaden the
residue-field scope beyond finite separability.

## 3. Injectivity: define the coefficient first and identify the factor

`lem-global-residue-pairing-injective-left` still has two local proof defects.
Step 1.3 uses `u=tⁿv` before `u` is introduced in Step 3.1. Step 4.1 says
that the coefficient of `t⁻¹` in `u_bv` is `b v(0)`; the regular unit `u_bv`
has no such negative coefficient. The correct coefficient is the constant
term of `u_bv` in the full product `t⁻¹(u_bv)dt`.

For the repair, first establish that the nonzero global section `s` has
nonzero germ at the chosen closed point `p` (the existing generic-germ and
invertible-sheaf argument in Steps 1.1/2.1 supplies this). Trivialize
`L_p=A_p e_L`, choose a uniformizer `t`, and use the local-basis result for
`dt` to write
`s_p = u (dt ⊗ e_L⁻¹)` with `u ∈ A_p\{0}`. Set
`n=ord_p(u)≥0` and `v=t⁻ⁿu ∈ A_p×`; now `u=tⁿv` is defined before use.
The current perfect-field hypothesis makes every closed residue extension
finite separable, so the trace form is nondegenerate. Choose `b∈κ(p)×`
with `Tr(b v(0))≠0`, lift it to a unit `u_b∈A_p×`, and take
`c_p=u_b t^{-(n+1)}e_L`, zero at all other points. This is a nonzero local
principal part because its coefficient has negative valuation. Then
`c_p s_p=t⁻¹(u_bv)dt`, whose `t⁻¹` coefficient is the constant term
`b v(0)`. The trace formula gives the required nonzero pairing.

There is also a supplier-interface omission in the current Facts [F5]:
`def-canonical-line-bundle-curve` defines `ω_C=Ω¹_{C/k}` as an invertible
sheaf, but explicitly warns that a uniformizer differential need not be a
frame at inseparable residue points. Under the current perfect-field
hypothesis it is a frame by
`lem-uniformizer-differential-is-a-basis`; add that item to this item's
dependencies and cite it in [F5]. The statement remains valid over the
current perfect-field scope.

The displayed map is
`Φ: H⁰(C,ω_C⊗L⁻¹) -> H¹(C,L)*`, for the pairing ordered
`H¹(C,L) × H⁰(C,ω_C⊗L⁻¹) -> k`. The proof shows that every nonzero element
of the **second** pairing factor gives a nonzero functional on the first.
It does not by itself prove injectivity of the map from the first factor to
the dual of the second. Thus the item ID suffix `injective-left` is
misleading if “left” means the first displayed pairing input; the current
title and statement correctly describe the dual-section map. The later
dimension-balance argument is what supplies perfectness.

## 4. Principal-parts sheaf: prove local finite support and stalkwise identity

`def-principal-parts-sheaf-line-bundle-curve` gives the correct stalk
quotient `P(L)_p=L_η/L_p` and the right finite-support conclusion for global
sections, but currently asserts the direct sum of closed-point skyscrapers
without constructing the sheaf map or establishing its stalks. The needed
finite-support input is available from its actual dependencies:
`lem-principal-weil-divisor-locally-finite` applies to a rational function
in `K×`, and `thm-line-bundle-rational-section-cartier-divisor` identifies
the local coefficients of a rational line-bundle section. On a trivializing
open, a rational section is a rational function times a frame. Its
nonzero-order support is locally finite by the principal-Weil-divisor
supplier; on a curve these are the closed-point divisors. Its failure to be
regular is contained in that support. The finite-support inputs therefore
remain dependent on those two draft suppliers until they are independently
closed.

For a section `q∈P(L)(U)`, quotient sections locally lift to rational
sections. Around each `x∈U`, choose a quasi-compact affine trivializing
neighborhood on which one such lift exists. The nonzero stalks of `q` there
are contained in the finite principal-part support of that lift. Hence the
support of `q` is locally finite on arbitrary `U`; when `U` is
quasi-compact, it is finite. In particular `C` is quasi-compact, so
`H⁰(C,P(L))` consists of finite-support families.

Now send a section `q` to its germs at the closed points. Local finite
support makes this a morphism from `P(L)` to the sheaf direct sum of the
skyscrapers with fibers `L_η/L_p`. At a closed point `p`, its stalk map is
the identity on `L_η/L_p`; at the generic point both stalks are zero. The
stalkwise-isomorphism theorem then proves the claimed sheaf decomposition.
The stalk quotient itself follows from exactness of the stalk functor applied
to `0 -> L -> L_η -> P(L) -> 0`; cite the existing exactness-of-sheaves
stalkwise supplier for this step. The local DVR description shows each
closed-point stalk is torsion and is the union of
`t_p^{-n}O_{C,p}/O_{C,p}`.

The published `thm-kernels-cokernels-qc-modules` supplies that a quotient of
quasi-coherent modules is quasi-coherent, if the definition retains its
quasi-coherent qualifier: locally `L_η` is the associated sheaf of the
function field, and `L` is invertible, hence quasi-coherent. This theorem is
not currently cited in the item's dependencies. The stalk `K/O_{C,p}` is
not finitely generated over the DVR, so do not call the principal-parts
sheaf coherent.

## 5. Čech/cohomology presentation: valid after its direct-sum input is proved

`lem-principal-parts-cech-h1-presentation` correctly applies the long exact
sequence to `0 -> L -> L_η -> P(L) -> 0`. The constant sheaf `L_η` on the
irreducible curve is flasque by the published
`lem-constant-sheaf-on-irreducible-space-is-flasque`, and its positive
cohomology vanishes by published `thm-flasque-sheaves-acyclic`. The
published derived long exact sequence gives the cokernel description.
Its direct-sum identification in Facts [F1] and Step 3.1 is not an
independent proof: it consumes the still-unproved decomposition in the
definition. Once Section 4's stalkwise sheaf decomposition and finite support
of global sections are supplied, the displayed cokernel and diagonal map
follow as written.

## Live supplier state / unresolved items

The formal-derivative route uses the draft local residue definition and
draft uniformizer-basis item; the change-of-uniformizer item is also draft.
The injectivity route additionally uses the draft principal-parts definition,
Čech presentation, residue-pairing definition/descent, and the local residue
definition. The local DVR and line-bundle rational-section suppliers used by
the principal-parts route are drafts; their exact closure remains pending.
The formal Laurent calculus, stalkwise sheaf criteria, quotient
quasi-coherence theorem, constant-sheaf flasqueness, flasque acyclicity, and
derived long exact sequence cited above are published suppliers.

No source-reading obstacle was found for these five local routes. These are
proof and dependency-interface findings, not acceptance or readiness
decisions; their source and supplier prerequisites still need their own
review.

## Owner-released repair addendum

The owner released only the five item files named in the scope above and this
report. The five proof repairs preserve the statements and their finite
separability or perfect-field hypotheses.

- `lem-residue-exact-differential-zero` now defines the formal comparison map
  through the universal property of algebraic Kähler differentials. It proves
  the zero coefficient of the derivative without identifying differentials of
  the completed Laurent-series field.
- `lem-residue-independent-uniformizer` uses the same typed map to compare
  algebraic coefficients under a parameter change. Its all-characteristic
  proof uses the characteristic-zero substitution identity in a universal
  rational-function field, proves the coefficient is an integral Laurent
  polynomial, and then specializes that zero polynomial to arbitrary fields.
- `lem-global-residue-pairing-injective-left` proves nonzero generic and
  closed-point germs by localization, defines the local coefficient before
  its order, and computes the residue as the constant term of `u_b v` in
  `t^{-1}(u_b v)dt`. Perfectness, the annihilator conclusion, and the
  principal-part conclusion remain conditional on the stated finite equal
  dimension hypothesis.
- `def-principal-parts-sheaf-line-bundle-curve` proves the generic and closed
  stalk descriptions, torsion and length `n` of the local submodule
  `t^{-n}A_p/A_p`, quasi-coherence without coherence, local finite support,
  and the direct-sum decomposition by constructing the germ map and checking
  its stalks. It explicitly verifies that the curve is normal and Noetherian
  before applying the principal-Weil support lemma; no Cartier-divisor
  identification is used. AC implies the DC hypothesis of that supplier by
  the published `thm-choice-implies-dependent-implies-countable-choice`.
- `lem-principal-parts-cech-h1-presentation` checks exactness at the generic
  and closed stalks and derives the cokernel from the long exact sequence. A
  family of regular local germs maps componentwise to zero; no global lift of
  an arbitrary family is claimed.

The direct dependency metadata now matches the proof interfaces. In this
release, the two exact-residue items add
`cor-derivations-represented-by-differentials`. The principal-parts definition
replaces the scheme-inapplicable `def-function-field-variety` and
`thm-curves-function-fields-equivalence` with
`lem-integral-finite-type-scheme-function-field`; it adds the meromorphic
function sheaf, the explicit AC-to-DC bridge, and the Noetherian/normality,
valuation, and length suppliers used inline. The Čech item drops its unused
`def-quasi-coherent-module-scheme` dependency. The exact current dependency
lists are in the corresponding item frontmatter.

## Targeted validation

- `precheck.mts` on the five targets: four proof-bearing items checked, zero
  failures; the definition has no phase-format proof and is marked `n/a`.
- `rendercheck.mjs` on all five: pass (KaTeX, delimiters, frontmatter, and
  rendered wikilink checks).
- `citecheck.mjs` on all five: pass, with no warnings.
- `prosecheck.mjs` on all five: pass, zero errors and warnings.
- A target-only dependency/wikilink resolution check passed: all direct
  dependencies and all wikilinks resolve (8/11, 9/17, 13/14, 33/39, and 8/8
  respectively, in scope order).
- A target-rooted transitive dependency-closure check visited 1,876 items and
  found no unresolved dependencies or cycles.

No source-reading obstacle or unresolved local proof gap remains in the five
repairs. Supplier closure remains pending for draft items used by these routes,
including `lem-principal-weil-divisor-locally-finite`,
`thm-local-ring-smooth-curve-dvr`, `lem-uniformizer-differential-is-a-basis`,
and the residue/pairing definitions and lemmas. The dimension-balance input for
perfectness remains a separate prerequisite, as stated in the injectivity
item. A nonblocking notation defect is still present in the out-of-scope draft
`def-residue-rational-differential-curve-point`, whose power-series display has
an extra bracket in `\kappa(p)[\![\![t]\!]\!]`; the repaired targets use the
usual `\kappa(p)[\![t]\!]` notation. No out-of-scope supplier was edited.

SHA-256 (final repaired item files):

| Item | SHA-256 |
|---|---|
| `lem-residue-exact-differential-zero` | `f193384b81e1f4e479d72d5744ac894510ed295c8e3314f004b405f50f7756e2` |
| `lem-residue-independent-uniformizer` | `aa8bacfbb19e45c73f7cd5c1a4bd67e09668032245a8915160da6ba7b830cda7` |
| `lem-global-residue-pairing-injective-left` | `a2214e1e34c91bcdd7af819702c03f02623e8ddef91948d16257ed7a45d1f10f` |
| `def-principal-parts-sheaf-line-bundle-curve` | `f61f5293c0a6c1b37057f39ce150b62a5ccae864fd488a7d53808e4daf9ff21c` |
| `lem-principal-parts-cech-h1-presentation` | `04092852d61ac5a1fcd31466f1e550f0122a7676481dc952476bdc6657829993` |

## Final premise and supplier refinements

The owner requested three narrow refinements after reading the five item
bodies. `lem-residue-exact-differential-zero` now states its inherited Axiom of
Choice premise in the Statement, while retaining finite separable residue
fields and the all-characteristic conclusion. `lem-residue-independent-uniformizer`
now limits the converse in F2 to a uniformizer of the completed DVR
$\kappa(p)[\![t]\!]$; the given $t'$ remains an actual uniformizer of
$\mathcal O_{C,p}$. In `lem-global-residue-pairing-injective-left`, the former affine
chart/Zorn argument is replaced by a strict chain of nonempty irreducible
closed subsets in the dimension-one curve, followed by
`lem-curve-closed-subsets-finite` to obtain a closed point. Its facts and
dependencies now name the dimension definition and that supplier; F8 records
the supplier's finite-type argument establishing the Noetherian topology needed
for the dimension definition. F4 also explicitly uses
`thm-dvr-element-normal-form` for the valuation/unit factorization.

After these refinements, the three changed items pass targeted precheck (3
checked, 0 failing), rendercheck, citecheck (no warnings), and prosecheck (0
errors, 0 warnings). A target-only direct dependency and wikilink check found
all 33 dependencies and 33 distinct links across these three items resolve.
The principal-parts definition and Cech item were unchanged and remain stable
for the Poisson handoff. Updated item hashes are recorded in the table above.

## Owner carrier synchronization

The five released B8 items were synchronized into the batch-8 page and proof
contract carriers without changing item files. The page rows now copy the live
dependencies and exact Statement/Definition text, and their dependency levels
count only in-run item edges: `def-principal-parts-sheaf-line-bundle-curve` 0
(33 dependencies), `lem-principal-parts-cech-h1-presentation` 1 (8),
`lem-residue-exact-differential-zero` 3 (8),
`lem-residue-independent-uniformizer` 2 (9), and
`lem-global-residue-pairing-injective-left` 9 (16). The definition correctly
has no `proof_strategy` field; the four proof-bearing page rows match their
item metadata.

The four proof-bearing contract entries were regenerated from their current
Facts and numbered Steps; the definition entry has no Facts or Steps. All five
entries retain the eight standard boundary cases, each exactly once. The
contract scope and index were unchanged. Eight downstream citation quotes
whose sources are among these five items were refreshed in their existing
consumer rows. A targeted synchronization check verified the selected page
metadata, statements, proof strategies, dependency levels, boundary-case
coverage, derivation-step IDs, and every quote sourced from these five items;
it passed with zero source-quote mismatches. No other consumer quote row was
changed. The first selected-item strict run found two exact duplicate citation
rows and one `citation-uses` error. The duplicates were removed. Root then
authorized one proof-input refinement in
`lem-global-residue-pairing-injective-left`: Step 1.2 now cites F7, because
its F8/F9 closed-point argument uses the stated Axiom of Choice premise. The
global-pairing contract entry was regenerated from that live step. The final
selected-item strict check passed: 0 errors, 0 warnings, all 5 items checked.
The Statement is unchanged. Root owns the ordinary consumer-evidence refresh
for the proof-body change.

Hashes at this checkpoint: selected global-pairing item
`a2214e1e34c91bcdd7af819702c03f02623e8ddef91948d16257ed7a45d1f10f`, batch-8 pages
`431cf913d454e80594282bdbe4f7bffdec0757438d6218d418a2fe0a08978fae`, proof
contracts `b3b532418c073f088ea73c3c507754f7d81678346f26130a4565df8ff0067366`.
