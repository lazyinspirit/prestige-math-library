# B6 ramification core: current proof and source audit

**Scope.** This audits the five live batch-6 items
`lem-curve-different-local-support-and-index-bound`,
`lem-fibre-degree-sum-ramification-residue`,
`def-ramification-and-branch-points`,
`def-different-divisor-curve-map`, and
`thm-canonical-bundle-ramification-formula`, together with their actual
supplier interfaces. After the audit, the parent released edits to exactly
`def-ramification-and-branch-points`, `def-different-divisor-curve-map`, and
this report. No other item, carrier, plan, receipt, or gate was changed.

## Disposition

| Item | Mathematical stand | Current issue or boundary |
|---|---|---|
| `lem-fibre-degree-sum-ramification-residue` | Correct for every field and every characteristic, including inseparable residue extensions. | Its finite-curve and DVR suppliers are still drafts; retain the explicit AC premise inherited from those routes. |
| `lem-curve-different-local-support-and-index-bound` | Correct as stated for a finite generically separable map of smooth proper geometrically integral curves, over an arbitrary field. The tame/wild and imperfect-residue cases are distinguished correctly. | It is a draft proof with a long inline different calculation; the source route below validates the main steps, but several curve/DVR/index suppliers remain drafts. |
| `def-ramification-and-branch-points` | The index-versus-differential distinction is mathematically correct, including the imperfect-field case. | Repaired: AC and closed-point scope are explicit, and the item now carries the finite-chart flatness/finitely-presented route and published pointwise étale criterion. |
| `def-different-divisor-curve-map` | The divisor with coefficients `length(Ω_{C/D,p})`, its effectivity, and its support description are correct. | Repaired: AC and closed-point indexing are explicit. The full finite-support supplier `lem-curve-different-local-support-and-index-bound` remains in use; coefficients are the Kähler-different lengths, not merely `e_p−1`. |
| `thm-canonical-bundle-ramification-formula` | The cotangent sequence, its injectivity under generic separability, and the twist by the length divisor have a valid proof route. The relevant B5 Cartier/line-bundle route is closed and accepted at 46/46. | Its in-text “not-yet-authored” flags are stale. Synchronize them to cite the existing accepted supplier route; draft frontmatter alone is not an open mathematical obligation. |

No mathematical/source obstacle was found in the local trace calculation or
the fibre degree calculation. The repaired definitions preserve the full
arbitrary-field scope and the stated finite-support theorem.

## Exact conventions and hypotheses

For a closed point `p` over the closed point `q`, the index supplier defines
`e_p = ord_p(f^#t_q)`. This is the **index** convention only:
index-unramified means `e_p = 1`, and index-ramified means `e_p > 1`.
Ordinary scheme-theoretic unramifiedness is stronger: in this finite curve
setting it is equivalent to `e_p = 1` **and** the residue extension
`κ(p)/κ(q)` being separable. The target's distinction is essential over an
imperfect field. In particular, a closed point with `e_p = 1` and inseparable
residue extension belongs to `Supp(Ω_{C/D})`, but not to the index locus.
When `k` is perfect, all these finite residue extensions are separable, so
the two loci agree.

For the local different theorem, generic separability is essential to the
global assertions that `Ω_{C/D}` is torsion, has finite support, and has
finite-length stalks. At a closed point the length is
`l_p = length_{O_{C,p}} Ω_{C/D,p}`. The exact conclusions are:

- `l_p = 0` iff `e_p = 1` and `κ(p)/κ(q)` is separable;
- `l_p = e_p−1` iff the residue extension is separable and `e_p` is a unit
  in `κ(q)`;
- otherwise, if the residue extension is inseparable or the residue
  characteristic divides `e_p`, `l_p ≥ e_p`.

Thus the standard tame convention in this route is “separable residue
extension and ramification index prime to the residue characteristic.” The
different divisor is the Kähler-different divisor
`R_f = Σ_p length(Ω_{C/D,p})[p]`. Replacing its coefficients by `e_p−1`
would be false in the wild or inseparable-residue cases. The five items use
closed points for `e_p` and `l_p`; `def-ramification-and-branch-points`
should write its index-locus set builder as a set of **closed** points too,
since `e_p` is not defined there for the generic point.

The fibre formula has no separability or tame hypothesis:
`Σ_{p∈f^{-1}(q)} e_p[κ(p):κ(q)] = deg(f)`. Its proof is the dimension of
the finite flat fibre algebra over `κ(q)`, decomposed into its local Artinian
factors. Each factor has `e_p` successive quotients isomorphic to `κ(p)`;
this gives the residue-degree multiplier even when `κ(p)/κ(q)` is
inseparable.

## Proof and authoritative-source route

The local-different proof reduces to the completed DVR map `A→B`, with
`t_q = u s^{e_p}` and special fibre `B/(s^{e_p})`. It first makes
`Ω_{B/A}` a finite-length module. Its local complete-intersection argument
identifies `Fitt_0(Ω_{B/A})` with the Jacobian/Noether different; the diagonal
Koszul calculation and finite-dual-module pairing then identify that ideal
with the trace element in `Hom_A(B,A)`. This step does not assume a monogenic
extension or perfect residue field. The trace on the special fibre is
`c ↦ e_p Tr_{L/K}(c̄)`, because its filtration has `e_p` quotients equal to
`L=κ(p)`. A generator of `Hom_A(B,A)` is not generally the trace itself;
the item handles this correctly by writing the trace as `hλ`. Nonzero fibre
trace makes `h̄` a nonzero socle element, giving order `e_p−1`; zero fibre
trace puts `h` in `(s^{e_p})`, giving order at least `e_p`.

I checked the relevant full Stacks Project statements, not only their tag
headings. They agree with the proof's convention and bridge:

- tag `0C1F`, Lemma 53.12.4, gives the local length bound and equality
  criterion; its tame convention is separable residue extension and index
  prime to the residue characteristic;
- tag `0C13`, Lemma 49.4.8, computes trace on finite local Artin algebras and
  gives the separable-residue plus invertible-length criterion;
- tags `067R` and `069J` supply the graph regular immersion and lci
  composition; `0BWE` supplies the local syntomic complete-intersection
  presentation;
- tags `0BWD`, `0BVS`, `0BVT`, `0BW6`, `0BWG`, and `0BVZ` supply the
  Jacobian/Noether/trace/Kähler-different identifications used in the proof;
- tag `0BWJ` independently gives the same-dimension smooth-curve different
  as the zeroth Fitting ideal of the cotangent map.

The fibre proof is independently sound: the local algebra is finite and
torsion-free over the target DVR, hence free; its rank is the function-field
degree. The special fibre has that same vector-space dimension. Its Artinian
product decomposition has local factors
`O_{C,p}/(t_q) = O_{C,p}/(t_p^{e_p})`, of `κ(q)`-dimension
`e_p[κ(p):κ(q)]`. No residue separability enters this calculation.

## Supplier and repair findings

1. **Pointwise unramified/étale route — repaired and fully supplied.**
   `def-ramification-and-branch-points` now directly depends on and cites the
   published `thm-etale-equivalent-flat-unramified-fp`. It states the
   pointwise criterion using `Ω_{C/D,p}=0` and proves its flatness and finite
   presentation hypotheses. The proof uses the finite affine algebra, not
   the source local ring as a finite module over the target local ring.
   Choose an affine
   `V=Spec(A₀)⊂D` containing `q`, write `f⁻¹(V)=Spec(S₀)`, and set
   `A=(A₀)_q`, `S=S₀⊗_{A₀}A`. Finiteness makes `S` a finite `A`-module;
   dominance and integrality of the source and target make `A→S` injective,
   so `S` is a domain. Module-finiteness makes `S` integral over `A`
   (`thm-integrality-and-finite-module-equivalences`); maximal ideals of `S`
   contract to the maximal ideal of the local ring `A`
   (`cor-contraction-of-maximal-ideals-integral-extension`). Thus `S` is
   semilocal: its maximal ideals correspond to those of the closed fibre
   `S/𝔪_A S`, a finite-dimensional Artinian `κ(q)`-algebra with finitely many
   maximal ideals (`thm-structure-theorem-for-artinian-rings`). Therefore
   `S` is a finite torsion-free module over the DVR `A`; it is finite free by
   `cor-dvr-is-a-pid` and
   `cor-finitely-generated-torsion-free-modules-over-a-pid-are-free`. Thus
   `S` is flat over `A`. If `P⊂S` corresponds to `p`, then
   `O_{C,p}=S_P`. Localization preserves flatness, so `A→O_{C,p}` is flat;
   `O_{C,p}` need not be finite over `A`. The finite-morphism definition
   supplies `S₀`; the proper-curve theorem supplies the dominant,
   surjective map needed for injectivity; and the published DVR/module
   corollaries supply freeness. The published étale-equivalence theorem
   states the pointwise `Ω_{C/D,p}=0` criterion directly.

   For finite presentation, use the same finite affine charts before
   localization. `A₀` is Noetherian because it is of finite type over the
   field `k` (`cor-finite-type-algebra-over-noetherian-ring-is-noetherian`).
   The module-finite `A₀`-algebra `S₀` is finite type as an algebra by
   `def-finite-type-and-module-finite-algebras`; a surjection
   `A₀[x₁,…,x_m]→S₀` has finitely generated kernel because the finite-variable
   polynomial ring is Noetherian
   (`cor-finite-variable-polynomial-ring-noetherian`). Hence the finite map
   is finitely presented on the chart and at `p`. Apply the published
   `thm-etale-equivalent-flat-unramified-fp`. Its statement explicitly
   identifies pointwise unramifiedness with `Ω_{C/D,p}=0`; finite type is
   automatic for a finite morphism. The pointwise formal-unramified/
   differentials result is `thm-formally-unramified-differentials-zero`,
   applied on affine neighborhoods. This local proof also supplies the
   flatness required for the canonical-divisor pullback in step 5.1 of
   `thm-canonical-bundle-ramification-formula`.

2. **Choice scope.** The core different lemma and fibre lemma explicitly
   assume AC. The two repaired definitions now state AC as well. The current
   proof chain reaches AC through
   `thm-local-ring-smooth-curve-dvr`,
   `thm-nonconstant-morphism-proper-curves-finite-surjective`, and related
   curve-finiteness suppliers. The
   suppliers. Their explicit premise is consistent with the actual
   dependency path and leaves all fields and characteristics available.

3. **Canonical formula and divisor typing.** The cotangent sequence gives
   `f^*ω_D → ω_C → Ω_{C/D} → 0`. Since generic separability makes the last
   term generically zero and both outer terms are invertible, the first map
   is generically an isomorphism and injective. The torsion-quotient lemma
   then gives the length twist, without perfectness or tameness. Its proof
   constructs a Cartier divisor from a rational section and computes its
   local coefficients directly. This closes the `R_f` typing route: the
   Cartier divisor has coefficient `l_p` at each closed point, and the
   Cartier-to-Weil cycle map records those local orders as the formal sum
   `R_f`. The actual supplier proofs were checked: the rational-section
   theorem identifies the line bundle with `O_C(D)`; the definition of
   `O_C(D)` fixes its local generators; the tensor/addition and pullback
   lemmas handle the line-bundle operations; and the Cartier-to-Picard
   theorem proves that the kernel consists of principal Cartier divisors.
   The B5 Step 3b handoff reports its 46 items authored, locally checked,
   current, and with no open work rows; the final strict-contract result is
   46/46 with zero errors and warnings. Those B5 files still have
   `status: draft` frontmatter, but draft status is not the same as
   unauthored or unaccepted. The canonical theorem's “not-yet-authored” and
   “escalated until” statements are stale and should be synchronized to the
   accepted B5 route. The separate B6
   `thm-cartier-weil-divisors-curves-agree` is not a dependency of this proof;
   its draft status does not reopen the B5 route. No weakening of the literal
   canonical isomorphism is warranted.

All direct dependency files of the five targets exist. The five target
items are drafts. The key in-run dependencies
`def-ramification-index-curve-map`,
`thm-local-ring-smooth-curve-dvr`,
`thm-nonconstant-morphism-proper-curves-finite-surjective`,
`def-nonconstant-morphism-curves-degree`, and the divisor definitions are
also drafts; those status labels do not by themselves settle route
acceptance. The B5 Cartier/line-bundle supplier closure is accepted at 46/46
as recorded in
`research/frontier-37-owner-30-step3b-pair-cartier-and-weil-divisors-line-bundles-and-picard-groups.md`.
The published Stacks-tag results and standard module/differential results
cited in the local proof exist as published items. This audit did not rerun
or recertify B5 checks.

## Dependency-level note and status

The previously reported levels `0, 1, 3, 2, 9` were computed only on the
in-run item edges present in
`research/frontier-37-owner-30-batch-8.pages.json`. They are B8-subgraph
levels, not levels in the full run DAG; published axiom nodes did not raise
them. They must not be reported as a whole-run level pass. Root owns the final
global recomputation.

Focused checks after the two definition edits: `rendercheck` passed for both
item files (2 files; YAML/frontmatter and math delimiters parsed); `precheck`
reported 0 checked and 0 failing because definitions have no proof-phase
body. A read-only dependency-file audit found all 22 direct dependencies of
`def-ramification-and-branch-points` and all 11 of
`def-different-divisor-curve-map`. No manifest, strict-contract, source, or
run gate was run. No unresolved mathematical issue remains in the two edited
definitions; the canonical theorem's stale readiness prose awaits its own
separate edit authorization. No issue was found with the arbitrary-field
local different, wild/tame distinction, fibre-degree sum, or their cited
authoritative source claims.
