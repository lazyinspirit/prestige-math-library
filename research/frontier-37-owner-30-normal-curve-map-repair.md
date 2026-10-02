# Frontier 37, owner 30 — normal proper curve map audit

Date: 2026-10-01  
Scope: report-only mathematical audit of
`lem-proper-normal-curve-rational-function-map`, its current actual proof route,
and the existing suppliers needed to repair that route.

## Ownership and inspected snapshot

The target is an A-page item in batch 5, page
`cartier-and-weil-divisors-line-bundles-and-picard-groups`, order 366.079. Its
current proof is a draft owned by the active Cartier author. Batch 7 does not
contain this item: batch 7 only cites it from the downstream consumer
`cor-smooth-proper-curve-finite-map-projective-line`. Do not change that
consumer citation as part of this repair.

The source bytes reviewed at the start of this audit had these SHA-256 values:

| File | SHA-256 |
| --- | --- |
| `items/lem-proper-normal-curve-rational-function-map.md` | `feceacff23bbf82258202ddfb02f2b5232014a127aa8eaa00442960ae6fc958e` |
| `research/frontier-37-owner-30-batch-5.pages.json` | `45a89e62326366d0f9dace15f1245fad069bb5d143474dc95ff241d4c318ecd5` |
| `research/frontier-37-owner-30-batch-5.proof-contracts.json` | `51d4f7510972fceae022f68cb9e46d7b680ebc61f09ded444d5c59cc4857c63c` |
| `items/def-degree-divisor-proper-curve.md` | `88067bea962a6eb9f7461d7726f9dcc063e4a26dccab88e60d7a9019dafa8f15` |

These are audit-snapshot content hashes, not Git object IDs or publication
claims. The proper-curve definition is itself a batch-5 draft. The target
item's frontmatter declares 31 direct dependencies, while its batch-5 manifest
entry lists 12 of them; there are 19 item-only dependencies and none that are
manifest-only. The batch-5 proof-contract entry exists. After the owner drains,
the batch-5 manifest and contract are the matching carriers to reconcile; the
batch-7 consumer citation stays out of scope.

## Current mathematical findings

The algebraic-unit conclusion and the transcendental finite-rank conclusion
are valid, but the proof interleaves these branches and has several missing
steps or imprecise phrases. The final unqualified “nonconstant” corollary is
false over a general ground field. The repair should preserve both valid cases
and the degree/rank conclusion.

1. **Separate the algebraic and transcendental branches.** Steps 3.1, 4.1 and
   5.1 use an algebraic equation for `f` and `f⁻¹`, so they establish the
   global-unit conclusion only in the algebraic case. The transcendental map
   must use the separate DVR alternative in step 3.2: at each closed point
   either `f ∈ O_{C,x}` or `f⁻¹ ∈ O_{C,x}`; at the generic point both belong to
   `K = O_{C,η}`. Put the valuation/unit argument under an explicit algebraic
   branch and begin the `U₀,U₁` gluing under an explicit transcendental branch.
   The map proof must not use steps 3.1, 4.1 or 5.1.
2. **Make the valuation contradiction complete.** In an algebraic equation,
   omit zero coefficients. If `v_x(f)<0`, the leading term `fⁿ` has strictly
   smaller valuation than every nonzero lower-degree term, because each
   nonzero coefficient in `k` is a unit in `O_{C,x}`. The unique-minimum
   valuation rule gives the sum finite valuation `n v_x(f)`, contradicting
   `p(f)=0`, whose valuation is `∞`. Apply the same argument to an algebraic
   equation for `f⁻¹`. This proves both valuations are nonnegative and hence
   `v_x(f)=0` at every closed point. The monic equation for `f⁻¹` follows from
   algebraicity of the inverse; choose an annihilating polynomial with
   nonzero constant term, which exists since `f ≠ 0`.
3. **Justify the curve's function-field transcendence degree.** Step 1.1 cites
   `thm-affine-domain-dimension-transcendence-degree`, which identifies
   `trdeg_k K` with `dim A` for an affine finite-type domain `A`, but the proof
   never establishes `dim A = 1`. From `dim C = 1`, choose a nonempty proper
   irreducible closed subset; `lem-curve-closed-subsets-finite` supplies a
   closed point `x` on it. Choose an affine chart `Spec A` containing `x`.
   The point of `A` for `x` is nonzero and has height one by the existing
   one-dimensional chain argument in step 2.1. Thus `dim A ≥ 1`; all prime
   chains in this open chart are chains in `C`, so `dim A ≤ 1`. Now `dim A=1`
   and the affine dimension theorem gives `trdeg_k K=1`. This also supplies
   the finite-generation and dimension inputs used later.
4. **Use actual sections to construct the chart maps.** The current step 4.2
   claims maps on `U₀,U₁` but then says an arbitrary affine chart `A` maps to
   `A_f` or `A_{f⁻¹}`. `f` need not lie in an arbitrary `A`, so that
   localization may be undefined; it is also not the coordinate algebra of
   the chart preimage. Instead use the actual sections
   `f ∈ Γ(U₀,O_C)` and `f⁻¹ ∈ Γ(U₁,O_C)` to obtain maps to
   `Spec k[t]` and `Spec k[s]` from the existing
   `thm-morphisms-into-affine-scheme-global-sections`. Equivalently, cover
   each `U_i` by affine opens contained in that same `U_i`, and use the
   restrictions of the regular section there. On `U₀∩U₁`, `f` is a unit and
   the target transition is `s=t⁻¹`, so the maps glue to `φ_f`.
5. **Exclude closed points from the generic fibre explicitly.** For a closed
   target point, dominance means its fibre is a proper closed subset of `C`,
   hence a finite set of closed points by `lem-curve-closed-subsets-finite`;
   the residue extension is finite by
   `lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite`. For the
   generic target point, a closed source point `x` mapping there would induce
   an injection `k(t)=k(f) ↪ κ(x)`. But `κ(x)/k` is finite, whereas `t` is
   transcendental, so this is impossible. Thus the generic fibre has only
   `η`; its residue extension is `K/k(f)`, already proved finite of degree
   `d`. The pointwise fibre criterion then proves quasi-finiteness.
6. **Compute the finite rank on the actual preimage algebras.** Properness
   follows from `C/k` proper, `P¹_k/k` separated, and
   `lem-proper-source-to-separated-target-proper`. Combine it with
   quasi-finiteness via `thm-proper-quasi-finite-is-finite`. For each standard
   target chart, finiteness makes its preimage affine, say `Spec B₀` or
   `Spec B∞`; each is nonempty because it contains the generic point. The
   chart coordinate ring injects into `B_i ⊂ K` by dominance, and `B_i` is a
   finite torsion-free module over the PID `k[t]` or `k[s]`. The existing PID
   module theorem makes it free. Localizing at the target generic point gives
   `K`, so its rank is `dim_{k(t)} K = [K:k(f)] = d` on both charts. Properness
   also makes the dominant image closed; together with density this shows
   `φ_f` is surjective. This last observation is available from
   `thm-proper-morphism-closed-image` (already reached through the current
   proper/quasi-finite supplier closure), but is not needed for the module-rank
   calculation.
7. **Distinguish target coordinate rings from preimage algebras.** In the
   Statement and step 9.1, `k[f]` and `k[f⁻¹]` are the images in `K` of the
   target chart coordinate rings under `φ_f#`; they are not generally the
   coordinate rings of the affine preimages. Those preimage rings are `B₀`
   and `B∞` above, each finite free of rank `d` over its target chart ring.
   For example, on `P¹_k`, the map `x ↦ t=x²` has target-coordinate image
   `k[x²]`, while the preimage chart ring is `k[x]`, free of rank two over
   `k[x²]`.
8. **State the nonconstant convention precisely.** The last paragraph's claim
   for every “nonconstant” rational function is false if “nonconstant” means
   “not in `k`”: the function field can contain algebraic constants outside
   `k`. For a finite extension `L/k`, the normal proper integral `k`-curve
   `P¹_L` has any `a ∈ L\\k` as a global unit algebraic over `k`; its map to
   `P¹_k` is not dominant. Say instead that every **transcendental** rational
   function gives the finite dominant morphism proved in (2). Equivalently,
   the induced rational map is dominant exactly when `f` is transcendental.
   Keep the algebraic-unit conclusion, without asserting that algebraic
   constants lie in `k`.

## Existing-library proof route and interface audit

I read the actual target body and the Statements/Definitions and the used
proofs of its declared suppliers. The following current library route proves
the two valid cases without any new theorem claim:

| Proof obligation | Existing supplier route and used clause |
| --- | --- |
| Curve is finite type, Noetherian and has function field `K` | Draft `def-degree-divisor-proper-curve` gives integral proper chain-dimension-one `C` and finite type; `def-proper-morphism` supplies finite type/quasi-compactness; `cor-finite-type-algebra-over-noetherian-ring-is-noetherian` proves affine charts Noetherian; `lem-integral-finite-type-scheme-function-field` identifies `K` with the fraction field on every nonempty affine chart and gives finite generation. |
| Closed points and residue fields | `lem-curve-closed-subsets-finite` proves every non-generic point is closed and proper closed subsets are finite; `lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite` gives finite residue fields. Both proofs explicitly account for their AC assumptions. |
| Local valuation rings | `thm-height-one-localisation-of-normal-noetherian-domain-is-dvr` proves a height-one localization is a DVR by reducing to a one-dimensional Noetherian local integrally closed nonfield domain; `thm-equivalent-characterisations-of-a-dvr` and `def-discrete-valuation-ring` provide the valuation-ring alternative and valuation rules. This requires an affine chart `A` to be integrally closed, not merely to have integrally closed local rings. |
| Algebraic branch becomes global units | `thm-normality-is-local-for-domains` turns the scheme's local-integral-closure hypothesis into integral closure of each affine domain `A`; `lem-normal-domain-implies-s-two` then supplies `(S₂)`, and `lem-r-one-s-two-intersection-of-height-one-localisations` gives `A = ⋂_{ht p=1} A_p`. With the height-one DVR supplier above, both `f` and `f⁻¹` lie in every such localization and hence in each affine ring; `def-sheaf-on-topological-space` glues them. |
| Construct and glue the map to `P¹` | `def-relative-projective-space-standard-charts` supplies the two affine charts and reciprocal transition. `thm-morphisms-into-affine-scheme-global-sections` says a section on any scheme gives a morphism to an affine scheme; apply it to `f` on `U₀` and `f⁻¹` on `U₁`. |
| `K/k(f)` finite | `thm-affine-domain-dimension-transcendence-degree` gives `trdeg_k K=1` after the affine dimension step above; `cor-transcendence-degree-tower-additivity` shows `K/k(f)` is algebraic; `thm-finitely-generated-algebraic-extensions-are-finite` makes this finitely generated algebraic extension finite. |
| Proper, quasi-finite, then finite | `thm-projective-space-proper-over-base` gives `P¹_k/k` proper and therefore separated; `lem-proper-source-to-separated-target-proper` makes `φ_f` proper. The pointwise criterion in `lem-quasi-finite-morphism-fibre-characterization`, with the finite closed-point fibres and generic-fibre argument above, gives quasi-finiteness. `thm-proper-quasi-finite-is-finite` then gives a finite morphism. `thm-proper-morphism-closed-image` verifies the dense proper image is all `P¹_k` if surjectivity is recorded. |
| Finite locally free rank | `def-finite-morphism-schemes` gives affine finite preimages and finite coordinate modules; `cor-polynomial-ring-over-a-field-is-a-pid` makes `k[t]` and `k[s]` PIDs; `cor-finitely-generated-torsion-free-modules-over-a-pid-are-free` makes each module free. `lem-integral-finite-type-scheme-function-field` identifies each nonempty affine preimage's fraction field with `K`, so generic localization computes rank `d`. |
| Regularity and gluing details | `def-integral-scheme`, `def-sheaf-on-topological-space`, and `def-stalk-of-presheaf` justify the rational-section/local-membership and gluing steps; `def-locally-finite-type-and-finite-type-morphism`, `def-universally-closed-morphism`, and `def-proper-morphism` supply the used map-property definitions. |

Two existing interface citations should be made explicit in the target proof and
its direct dependency record:

- `thm-normality-is-local-for-domains` is needed to pass from “all local rings
  of `C` are integrally closed” to “the affine chart ring `A` is integrally
  closed,” which is the hypothesis used by `thm-height-one-localisation...`
  and `lem-normal-domain-implies-s-two`. Its proof is already present under
  the local-normality route, but the target does not state or cite this
  instantiation. An alternative is to reorganize the local DVR argument to
  apply the one-dimensional DVR characterization directly to each local
  ring, while still supplying `(S₂)` for the affine intersection proof.
- `thm-morphisms-into-affine-scheme-global-sections` is the direct existing
  construction used when a regular section defines a map to `Spec k[t]` or
  `Spec k[s]`; the target currently leaves this as an uncited `construct`.

The two missing direct interface citations named above are now explicit. The
item and its selected batch-5 manifest row each have the same 37 direct
dependencies; the selected row remains at dependency level 1. No new supplier
was added, and no proper-image theorem is needed for the conclusions stated.

## Repair completion and validation

The authorized item and its selected batch-5 carriers have been updated. The
proof keeps the Axiom of Choice hypothesis and establishes the cases
separately: algebraic $f$ is a global unit, while transcendental $f$ gives a
finite locally free dominant map of degree $d=[K:k(f)]$. The transcendental
route now includes the one-dimensional affine-dimension argument, the DVR
alternative, actual section-defined maps on $U_0$ and $U_1$, the generic-fibre
exclusion, and the finite-free rank calculation on the actual preimage rings.
The old unqualified “nonconstant” conclusion has been restricted to the
transcendental case; the $\mathbb P^1_L$ example records why algebraic
constants outside $k$ do not force dominance.

The Statement now explicitly records the pullbacks $t\mapsto f$ and
$s\mapsto f^{-1}$, identifies $k[f]$ and $k[f^{-1}]$ as images of the target
chart rings, and distinguishes them from the finite free rank-$d$ affine
preimage rings. The selected contract has 16 derivations synchronized to the
canonical proof-step order, all citation uses updated, and boundary evidence
renumbered. The manifest statement, direct dependencies, strategy, and sources
match the item.

Target-only checks passed after the final edits:

- `precheck.mts`: pass.
- `rendercheck.mjs`: pass, including KaTeX parsing and YAML frontmatter.
- Strict selected `proof-contract.mjs`: 0 errors and 0 warnings.
- Direct dependency comparison: 37 item dependencies equal 37 manifest
  dependencies; all 16 proof steps are contracted.

Raw SHA-256 values at handoff:

- Item: `85296c58b5cf88d9edd95a95491645470f45ff2fe3af82a2fe8154fbccdee256`
- Batch-5 pages carrier: `5610cf65569afb9649e37c025cfb82aaf1b48e8205fa151b81c64e326b36e518`
- Batch-5 proof-contract carrier: `eebc8cc68419d483ce3da2859caf40ce5fb54c1ee4f1fa48a4a21099c852d9e3`

Exact direct dependencies (also the selected manifest row):

`def-axiom-of-choice`, `def-degree-divisor-proper-curve`,
`def-dimension-noetherian-topological-space`, `def-proper-morphism`,
`def-scheme`, `def-integral-scheme`, `def-krull-dimension-of-a-ring`,
`lem-integral-finite-type-scheme-function-field`,
`def-locally-finite-type-and-finite-type-morphism`,
`cor-finite-type-algebra-over-noetherian-ring-is-noetherian`,
`lem-curve-closed-subsets-finite`,
`thm-affine-domain-dimension-transcendence-degree`,
`cor-specialisation-order-is-prime-inclusion`,
`thm-normality-is-local-for-domains`,
`thm-height-one-localisation-of-normal-noetherian-domain-is-dvr`,
`def-discrete-valuation-ring`, `def-discrete-valuation`,
`def-valuation-on-a-field`, `lem-normal-domain-implies-s-two`,
`lem-r-one-s-two-intersection-of-height-one-localisations`,
`def-sheaf-on-topological-space`, `def-stalk-of-presheaf`,
`cor-transcendence-degree-tower-additivity`,
`thm-finitely-generated-algebraic-extensions-are-finite`,
`def-relative-projective-space-standard-charts`,
`thm-projective-space-proper-over-base`,
`thm-morphisms-into-affine-scheme-global-sections`,
`lem-morphism-schemes-local-on-source-target`,
`lem-proper-source-to-separated-target-proper`,
`lem-quasi-finite-morphism-fibre-characterization`,
`def-quasi-finite-morphism-schemes`, `def-finite-morphism-schemes`,
`thm-proper-quasi-finite-is-finite`, `def-residue-field-scheme-point`,
`lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite`,
`cor-polynomial-ring-over-a-field-is-a-pid`, and
`cor-finitely-generated-torsion-free-modules-over-a-pid-are-free`.

## Direct consumer impact

The direct consumers remain mathematically aligned with the clarified
Statement:

- `lem-function-with-poles-defines-map-p1` uses the algebraic-unit and
  transcendental-map branches separately; its smooth proper geometrically
  integral hypothesis and $H^0(C,\mathcal O_C)=k$ clause rule out algebraic
  nonconstant functions.
- `thm-principal-divisor-degree-zero-proper-curve` already separates
  algebraic and transcendental cases and uses the corresponding unit or map
  conclusion.
- `lem-finite-flat-curve-fibre-degree` assumes $f$ transcendental and consumes
  the finite free rank-$d$ chart-preimage conclusion now stated explicitly.
- `cor-projective-embedding-every-smooth-proper-curve` constructs a
  transcendental function directly from transcendence degree one before using
  the map conclusion. Its F7 citation to `def-normal-noetherian-ring` may be
  redundant now that the target states scheme normality as integrally closed
  local domains; root should decide whether to clean that consumer citation.
- `cor-smooth-proper-curve-finite-map-projective-line` starts with a
  nonconstant function, but its geometrically integral hypothesis and
  $H^0(C,\mathcal O_C)=k$ clause force the algebraic case to be constant, so
  its map construction still reaches the transcendental branch.

No consumer, supplier, receipt, scope, plan, ledger, engine file, or shared
gate was edited or run here. Root retains receipt, gate, and downstream
integration ownership.

## B5 ordinary review refresh

Date: 2026-10-01

After the earlier map-repair handoff, root authorized a bounded ordinary review
refresh for the eleven stale B5 item rows below. The current owner proceed
scope for `cartier-and-weil-divisors-line-bundles-and-picard-groups` is closed
at scope hash
`4419c7dc8c8af335f601aaa6407670663830fbfd8516e40793740067ac5cf6e8`.
Each receipt is nonowner confidence 1 and records the current direct dependency
IDs from the item. The `input hash` is the Step-3 hash over the item and its
actual inputs; the final column is the raw SHA-256 of the receipt JSON.

| Item | Decision | Direct dependencies | Input hash | Receipt SHA-256 |
| --- | --- | ---: | --- | --- |
| `lem-cartier-divisor-addition-tensor` | repaired | 8 | `9eac408fc7c7e34ea54ed46971cc91ab49ecf2dc45a7c7f08dbdcb3e7103796c` | `da2cd90aabd6bece602f665ac47f315988dfc1b8da411c038fe71cc2a14f55a9` |
| `thm-cartier-divisors-mod-principal-to-picard` | accept | 12 | `ab734f2cad735e717f84bcdbb2590de973f512960afad2b27c752be7d43efb26` | `71fb1593690fd8049e0cb06d05dc893b8a664c30dbf0448c1fab5320a34e29d0` |
| `lem-cartier-to-weil-respects-principal-and-addition` | accept | 13 | `7c3cfab5c7bdc6e8f7ced2c92b8824b2aa53b8486ce1df6aff4d0559edbd3e89` | `b0b75e5df78fca9d64e2277309b90449e408e8bc60554f39157e54022118e0da` |
| `lem-cartier-to-weil-injective-normal` | repaired | 20 | `082773524f301bf53de6c4e67bee2284fbb85ee0a8fe22a4e989142bedc7b2da` | `48e9ce339adf2bac646ae2f9f0a55c5bd353efe19fc352b1032c97226bcffe46` |
| `thm-cartier-weil-isomorphism-locally-factorial` | repaired | 42 | `3d96c78cdd103aba594c84b3305d3a1487aeadac9c2f0adce8114ce3c6d8066f` | `7a4ac8ede398f8459221c7dcc5e54dcdb7dd00733443825b55a4534da9011b5a` |
| `lem-proper-normal-curve-rational-function-map` | repaired | 37 | `d5e7fac6859cb00bfcbff612dc48e46196460d8e5a48e0f95fa4427dc26f05c0` | `2729cfadce02efb1426747077f9919c15911a2b4ad6016a3a2cd5d7adfa2a3ab` |
| `lem-finite-flat-curve-fibre-degree` | accept | 17 | `6ad37d390e6d58fb16bd4d7b98372713894ce7c53e6779ce834c0dee8ba71504` | `1ab284a6097eeb2493fb6d152e0abe5093e6ddb6c8fa88176e8da4e900d965aa` |
| `thm-principal-divisor-degree-zero-proper-curve` | accept | 10 | `f2fc0f4a60d76a68011d4a48a705cb11df184ddf40b2e84c7013b0384401ab5d` | `ec7aa094d53ca13407884449a60eaccdc8f7deaf17f725cb9e876f19a4d6b2e5` |
| `cor-degree-descends-picard-curve` | accept | 28 | `eeaf87d045e3d90b528ce0fb322bb3c285ed0474f5a323631c7d27344cbccb81` | `8455deb369b6d916388ade28fa9a9b3a835f3dd6edad12cdb19730f712147b34` |
| `cor-twist-exact-sequence-effective-divisor` | accept | 16 | `7769511a07886c5be040699a72436c5f98b9cd25f2dc21db013e6f64ca45aba2` | `151ab0439cae5333c025a8d47899f921761236cc183487962d8a45d185891965` |
| `ex-picard-projective-line-preview` | accept | 46 | `2d63d2df3132581807e25ac52d5b269ee2e07039d564146005db84642f8ebd86` | `3bcbaf40ac7b4049bf13ac5db908a9695d78bec8ead8c410c2f1f5d746a9290e` |

I reread the complete final proofs of `lem-cartier-to-weil-injective-normal`
and `thm-cartier-weil-isomorphism-locally-factorial`, including their actual
changed proof routes, and reread the full `cor-degree-descends-picard-curve`
and `ex-picard-projective-line-preview` consumer bridges. The cycle-level
interface is explicit: the injectivity lemma states both
`cyc(E)=0 ⇒ E=0` and Picard-to-class-group injectivity. Its finite affine
refinement stays inside Cartier-trivializing opens; zero valuations put each
local equation and its inverse in the height-one intersection. The
locally-factorial proof now localizes with the correct denominator implication
for `p ⊂ q`, shrinks to a distinguished open where the height-one prime is
principal, and combines cycle surjectivity with that injectivity. Both
consumers use the resulting Cartier-Weil/Picard-class interfaces correctly.
I found no remaining mathematical defect in these routes. Of the seven
unchanged item proofs, I reread the two downstream consumers and reused the
earlier complete audits for the other five; only the listed eleven ordinary
review receipts were refreshed.

The current Step-3 decision check closes all eleven items against these hashes.
No item, batch carrier, shared scope decision, plan, ledger, engine file, or
gate was written or run in this refresh. Root retains integration and gate
ownership.

### Direct consumer outside the authorized receipt set

`thm-cartier-weil-divisors-curves-agree` is a direct batch-6 consumer of
`thm-cartier-weil-isomorphism-locally-factorial`. I read its full current body:
Statement clause 2 and proof steps 3.1 and 4.1 use the cycle-map and
Picard-to-class-group isomorphisms, both now explicit in the supplier
Statement. Its proof route is aligned and needs no claim or proof edit. Its
current Step-3 item decision remains owner-held because the supplier change
invalidated its prior input hash (`60134137ed1bedaa3914e977e4268dd242fa20c033ac7c6cb9128f101e1a9af3`);
no receipt was written for it because it is outside the authorized eleven-item
review set. Root retains this downstream decision.

### 2026-09-30 18:48 UTC: root downstream finite-map corollary repair

Root fully read the corollary and actual normal-map, pole-map, closed-subset and Cartier pullback interfaces. Removed the false assertion that pullback preserves divisor degree and replaced the inference from a difference of divisors with the infinity point’s local equations: 1/t and 1 pull back to 1/f and 1, giving the pole divisor and the canonical line-bundle isomorphism. The degree remains the weighted finite-flat fibre degree. Added a direct proof that a dimension-one curve has a closed point before bounded-pole existence is invoked. All promised claims and the Statement remain intact. Actual deps are now 15; selected B7 manifest, contract and actual in-run edges are synchronized. Precheck passed 1/1 and selected strict contract passed 0 errors/0 warnings, 1/1; render passed before a formatting-only single-line join made the canonical step ordering explicit. No ordinary acceptance or mathematical gate claimed. Raw body SHA-256 `5cb298402f08bcf030b285ac4765bdd9de43864ac938e1521fd99fe2310915e7`.
