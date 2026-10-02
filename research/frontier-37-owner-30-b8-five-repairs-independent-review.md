# B8 example repairs: independent mathematical review

Date: 2026-10-01. Run: `frontier-37-owner-30`. I independently read the five
target proof bodies at their initial stable snapshot and checked their
load-bearing supplier routes. The consumer writer later broadened the scope of
`cex-degree-two-g-not-always-very-ample`; that final version is separately
reviewed below. This report records mathematical dispositions. I made no item,
carrier, scope, gate, global-level, baseline, or git changes. Under root's
releases I recorded ordinary Step 3 accept receipts for the B6 arithmetic-genus
item and the six reviewed B8 items.

## Initial five-target snapshot

All five item proofs at the hashes below were mathematically acceptable at
ordinary confidence 1. The degree-2 non-very-ample disposition applies only to
its initial algebraically closed-field hash; see the later scope-extension
review below. Their direct dependencies remain the item frontmatter arrays;
the supplier IDs named in each route below are the exact load-bearing
dependencies I examined for this initial snapshot.

| Item | Current SHA-256 | Disposition | Route checked |
|---|---|---|---|
| `ex-full-rr-projective-line` | `23ae467c4e142a856927f579ec428b006fb3e687d5db9e2c2d404f65206b81e1` | Accept, confidence 1 | Every divisor reduces to its degree multiple of infinity; the actual projective-line cohomology gives all section dimensions, while the canonical degree and genus-zero calculation give `K ~ -2∞`. The three degree ranges, including `d=-1`, give the full identity and speciality classification. |
| `ex-genus-one-rr-degree-positive` | `f11c6aeb518a4e297969f8dbb2b6bfb7bda6c5c573649dc6c3302996cb28f77b` | Accept, confidence 1 | For `n≥1`, `n>2g−2=0`, so the high-degree theorem gives `h⁰=n` and `H¹=0`; Serre duality independently reduces `H¹` to sections of a negative-degree inverse. A degree-one effective zero divisor has residue degree one, hence is a rational point, without assuming a rational point in advance. |
| `ex-plane-cubic-canonical-trivial` | `a7da7da015d011d96ad29931177ce7b06613f0d87bd24b3294d57cd1cddbc349` | Accept, confidence 1 | The smooth-plane-curve adjunction theorem gives `ω_C ≅ O_C`, and the genus formula gives `g=1`; `h⁰(ω_C)=1` and the degree-zero section criterion establish triviality and the zero canonical class. The nonzero section of this trivial bundle is nowhere vanishing, so the one-dimensional complete canonical system defines the stated morphism to `P⁰`. The forward assertion assumes no rational point; the converse uses a rational point only for `O_C(3p₀)`. |
| `cex-degree-two-g-minus-one-not-always-basepoint-free` | `514d4ac34a52601be9202cdfbcc4ee2aa2e8c6fb3b8a3cb701f97ca44bb6fe84` | Accept, confidence 1 | For `L=O_C(K_C+p)`, the degree is `2g−1`; high-degree Riemann–Roch gives `h⁰(L)=g`, while `L(−p)=ω_C` has `h⁰=g`. Equality of the included section spaces makes `p` a base point. The genus-one specialization correctly uses `K_C ~ 0`. |
| `cex-degree-two-g-not-always-very-ample` | `49f66ad561b0fb3024278658c7f0246c0d71f5549d9827e6ee2c66bbf2496120` | Accept, confidence 1 | Over an algebraically closed field of arbitrary characteristic, `L=O_C(K_C+2p)` has degree `2g`, is base-point-free, and has `h⁰(L)=g+1`. At rational `p`, the DVR gives `dim_k O_{C,p}/m_p²=2`; the kernel of the first-jet evaluation is exactly `H⁰(L(−2p))=H⁰(ω_C)`, so its image has dimension one. Every morphism with pullback `O(1)≅L` has an ordered generating coordinate tuple, even when dependent; the tuple’s nonzero value at `p` and one-dimensional jet image force differential zero. No characteristic-two or distinct-branch-point assumption is used. In genus one, the resulting nonconstant map to `P¹` has degree two by the pullback-degree formula. |

## Load-bearing suppliers examined

The projective-line route was checked against
`lem-projective-line-divisors-classified-by-degree`,
`cor-picard-projective-line-integers`,
`thm-cohomology-projective-space-twisting-sheaves`,
`cor-canonical-degree-two-g-minus-two`, and
`thm-full-riemann-roch-divisor`. In particular the projective-line lemma
itself derives genus zero from `H¹(P¹,O)=0` and the genus definition.

The genus-one and high-degree routes were checked against
`cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two`,
`cor-rr-exact-high-degree-formula`,
`thm-genus-one-canonical-bundle-trivial`,
`thm-serre-duality-curves-line-bundles`,
`thm-degree-positive-line-bundle-sections-zero-bound`,
`cor-h0-canonical-differentials-genus`,
`cor-degree-zero-line-bundle-section-trivial`, and
`thm-principal-divisor-degree-zero-proper-curve`. The effective degree-one
divisor argument uses the stated residue-degree definition, not a rational
point hypothesis.

The plane-cubic route was checked against
`thm-adjunction-smooth-plane-curve`,
`cor-genus-degree-smooth-plane-curve`,
`cor-h0-canonical-differentials-genus`,
`cor-degree-zero-line-bundle-section-trivial`,
`thm-genus-one-canonical-bundle-trivial`,
`cor-degree-three-line-bundle-embeds-genus-one-plane-cubic`, and
`thm-base-point-free-linear-system-morphism`. The smooth-plane-curve genus
supplier proves geometric integrality by square-free/reducible homogeneous
factor analysis, Bezout intersections, and the actual affine hypersurface
Jacobian criterion, over arbitrary characteristic.

The base-point and very-ampleness routes were checked against
`thm-degree-two-g-line-bundle-basepoint-free`,
`thm-degree-two-g-plus-one-line-bundle-very-ample`,
`def-base-point-linear-system`,
`def-complete-linear-system`,
`def-very-ample-invertible-sheaf-relative`,
`thm-base-point-free-linear-system-morphism`,
`thm-projective-map-line-bundle-data-equivalence`,
`thm-local-ring-smooth-curve-dvr`,
`def-nonconstant-morphism-curves-degree`, and
`lem-degree-pullback-divisor-finite-morphism-curves`. The projective-data
supplier reconstructs a map from the full ordered generating tuple and
explicitly permits linearly dependent coordinate sections; the target then
uses the actual span of that tuple rather than assuming it is a basis.

For degree, divisors, rational sections, and choice accounting, I examined
`def-degree-divisor-proper-curve`, `def-canonical-line-bundle-curve`,
`def-little-l-divisor`, `cor-degree-descends-picard-curve`,
`thm-line-bundle-rational-section-cartier-divisor`,
`thm-cartier-weil-divisors-curves-agree`, and
`thm-choice-implies-dependent-implies-countable-choice`. The actual section
route distinguishes a rational section defining a Cartier divisor from a
global section, and the AC-to-DC premise is explicit. The umbrella
Cartier/Weil item retains old editorial prose about supplier authoring, but
the current proof interfaces and their consuming steps supply the required
divisor, line-bundle, and degree facts; that stale notice is not a remaining
mathematical gap.

No mathematical defect remained in the five item bodies at the initial hashes
in the table. Their hashes record that first review snapshot; the later scope
extension is assessed below. Carrier synchronization was not recorded here;
the separate B6 receipt is described below.

## Additional independent check: unramified-cover surjectivity

I also independently reviewed the current Step 1.1 repair in
`cor-unramified-cover-curves-genus-complete`, SHA-256
`19ca657848421befa557e6cc6062898cc6905fef145d68cc3c55627e444350aa`.
The proof is acceptable at ordinary confidence 1. Its finite-map point-image
contradiction is complete: if the image were one point `y`, an affine
neighbourhood `Spec A` of `y` would have full preimage `C=Spec B` because a
finite morphism has affine inverse images of affine opens; `B` is finite over
`A`. Every prime of `B` contracts to the maximal ideal of `y`, so that ideal
maps into the nilradical of `B`, which is zero since `C` is integral. Thus
`B` is a nonzero finite-dimensional algebra over `κ(y)` and has Krull
dimension zero, contradicting `dim C=1`. The image is closed by
`thm-finite-morphism-integral-closed`; if it were proper and not a point,
`lem-curve-closed-subsets-finite` makes it a finite set of closed points,
which is discrete and cannot be the connected image of `C`. Therefore the
image is all of `D`.

I read the complete current bodies of `lem-curve-closed-subsets-finite` and
`thm-finite-morphism-integral-closed`. The first supplies the dimension-one
closed-subset finiteness statement under its AC premise. The second supplies
closedness of finite morphisms under AC by the finite-module/integral and
lying-over route. Together with the item's affine-finite definition, these
are precisely the suppliers used in the repaired surjectivity step. No
source or item edits were made in this additional check.

## Released B6 review: arithmetic genus of a plane curve

After the writer drain and root release, I independently read
`thm-plane-curve-arithmetic-genus` at SHA-256
`729254bc78ef35def6fea92373a23acbb7f82d7983b39709ffc3223acd54126e`.
Disposition: accept at ordinary confidence 1. The revised statement and
proof correctly assume integrality and one-dimensionality, without requiring
geometric integrality. The closed immersion into `P²` gives properness; the
hypersurface exact sequence and `H¹(P²,O(−d))=0` give `H⁰(X,O_X)=k`; the
connecting isomorphism identifies `H¹(X,O_X)` with `H²(P²,O(−d))`. The
negative Laurent monomial basis maps bijectively to the monomial basis of
`k[T₀,T₁,T₂]_{d−3}`, giving dimension `binom(d−1,2)` (zero for `d≤2`). The
proper integral dimension-one arithmetic-genus definition then gives the
claimed formula. The AC premise and AC-to-DC route match the cohomology and
finiteness suppliers.

I read the complete current proof and the load-bearing supplier bodies
`lem-projective-hypersurface-cohomology-sequence`,
`thm-cohomology-projective-space-twisting-sheaves`,
`def-arithmetic-genus-proper-curve`, and
`cor-projective-cohomology-finite-dimensional-field`, as well as the target's
current properness, long-exact-sequence, coherent-sheaf, Euler-characteristic,
and AC-to-DC dependencies. Exact examined dependency IDs for this review are
`cor-projective-cohomology-finite-dimensional-field`,
`def-axiom-of-choice`, `def-arithmetic-genus-proper-curve`,
`def-coherent-module-scheme`, `def-euler-characteristic-coherent-sheaf`,
`lem-closed-immersion-proper`,
`lem-projective-hypersurface-cohomology-sequence`,
`lem-proper-stable-composition`,
`thm-cohomology-projective-space-twisting-sheaves`,
`thm-choice-implies-dependent-implies-countable-choice`,
`thm-long-exact-sequence-sheaf-cohomology`, and
`thm-projective-space-proper-over-base`.

## B8 scope extension: degree-2 non-very-ampleness over arbitrary fields

The author corrected only the reported Step 7.1 endpoint. I confirmed the
current hash is
`ecac21fae3fc627b24e97a27567571f2731a517ea857ce2bc9e596e23ea2d028` and read
the changed clause. The base-point-free and first-jet argument is valid for a
smooth proper geometrically integral genus-`g` curve over any field with a
specified `k`-rational point `p`: `deg_k(p)=1`, the arbitrary-field
base-point-free supplier applies at degree `2g`, and the DVR first-jet
quotient has dimension two over `κ(p)=k`. The ordered generating-coordinate
proof covers every morphism with pullback `O(1)≅L`, including dependent
coordinates, and makes no characteristic-two or distinct-branch-point
assumption.

The corrected Step 7.1 now says members of the pencil `|2p|` are pullbacks of
`k`-rational points (the `k`-defined hyperplanes), each of degree two; an
arbitrary closed point `q` pulls back with degree
`2[κ(q):k]`. This matches the cited pullback-degree formula. The final
arbitrary-field version is acceptable at ordinary confidence 1; following
root's B8 release, its accept receipt was recorded with the current dependency
array.

The changed load-bearing source route was checked against
`thm-degree-two-g-line-bundle-basepoint-free`, which proves generation over
an arbitrary field by algebraic-closure base change and descent, and
`lem-degree-pullback-divisor-finite-morphism-curves`, which supplies the
residue-degree factor for arbitrary closed points.
