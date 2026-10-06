# Batch 23: Novikov §§7–8 carrier audit

Run: `frontier-41-ha-dt-29`. Audit only: no canonical item, scaffold, manifest,
coverage file, receipt, controller state, or theorem statement was changed.

## Finding and source

I downloaded and read the complete author-hosted English translation of S. P.
Novikov, *The Topology of Foliations*, translated by J. A. Zilber:
<https://homepage.mi-ras.ru/~snovikov/23.pdf>. The 32-page PDF SHA-256 is
`9267c190c5a0a0aa3364735a577ccbed1ca1e71cd7b7314c3ec9cf9cded0be35`; its page
labels match the printed pagination.

Theorem 7.1 is stated on p. 19; its Lemmas 7.1–7.9 and conclusion occupy
pp. 20–25. Section 8 begins on p. 26: Theorem 8.1, Lemmas 8.1–8.2 and
Corollary 8.1 are on pp. 26–27; Theorem 8.2 and its proof are on pp. 27–28.
The current coverage/page-scaffold locators saying §7 pp. 23–30 and §8
pp. 30–32 do not match this translation. I have not edited those files; correct
the locators at later source-map reconciliation.

The source claims: (7.1) a leaf with nontrivial `Π^j_1` in a smooth orientable
foliation on a compact 3-manifold is compact and bounds a connected foliation
component; (8.1) it is the only boundary leaf of the adjacent component and is
the limit set of each sufficiently nearby leaf; (8.2) the adjacent component
is a solid torus with foliation homeomorphic to the standard Reeb foliation.
The current scaffold correctly distinguishes this `Π^j_1` input from ordinary
nontrivial holonomy in `P_j`.

One source inference needs an additional local check. In Lemma 7.9 Novikov
uses regularity of `G` to claim the image of the paired sweep has boundary only
in the image of its lateral boundary, then treats that image as a trapping
region. For a compact manifold with boundary, a local diffeomorphism on the
interior does imply that image-boundary points have no interior preimage; the
issue is that the constructed `\bar G` is explicitly only piecewise smooth at
two interior break curves. The source does not show that the image is locally
open across those seams, or that any seam image lies in the specified lateral
boundary. This leaves the boundary/no-exit step unproved. Separately, the
preceding lemmas give regular disk maps, not embedded disks. Section 8.2 only
later asserts that primitive-loop reduction lets disks be embedded, so
disk-image nesting and the global Reeb embedding need their own injectivity
proofs.

## Locally available prerequisites

These items exist as published in the shared library; their assumptions still
matter.

| Use | Existing items | Limitation |
|---|---|---|
| Boundary class vanishes in ambient homology | `lem-fundamental-class-of-a-boundary-pushes-forward-to-zero`, `def-relative-fundamental-class-and-boundary-orientation`, pair LES | Complete, choice-free as stated, once `A₀=∂W` is known. |
| Euler class and pullback naturality | `def-euler-class-by-zero-section-pullback-of-the-thom-class`, `thm-naturality-orientation-sign-and-whitney-product-for-euler-classes` | Published proofs depend on full AC. Not a silent supplier for an `AC_ω`-only argument. |
| Surface Euler characteristic from curvature | `thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals`, `thm-global-gauss-bonnet-for-closed-oriented-riemannian-surfaces` | Present but inherit full AC; also need a smooth/`C²` regularity adapter. |
| Torus from compact orientable surface and `χ=0` | `thm-classification-of-compact-connected-surfaces`, `cor-orientable-compact-surface-has-euler-characteristic-two-minus-two-g` | Present; classification explicitly assumes full AC. |
| Torus group | `cor-fundamental-group-of-two-dimensional-torus` | Present. Primitive slope embeddedness has a short choice-free Bézout proof. |
| Manifold collar | `thm-collar-neighborhood-theorem`, `def-smooth-collar-of-a-manifold-boundary` | Available under `AC_ω`; applies only after proving `W` is a manifold with boundary exactly `A₀`. |
| Jordan disk / disk fixed point | `lem-jordan-schoenflies-extension-for-plane-curves`, `thm-brouwer-fixed-point-theorem-for-the-disk` | Present, but Jordan–Schönflies explicitly depends on full AC; correct universal-cover and deck-descent hypotheses remain. |
| Surface universal covers | `thm-universal-cover-existence`, `cor-universal-cover-classification-riemann-surfaces` | The latter assumes full AC and a Riemann-surface structure; no adapter for arbitrary oriented leaves is supplied. |

There is no local item for torsion-free fundamental groups of arbitrary
surface leaves, the §1 foliation-component theorem used at the end of §7, or
Reeb stability. Existing batch carriers prove compact nullhomotopy persistence,
first essential parameter in an already supplied compact family, and
vanishing-cycle ⇒ nonzero `Π^j_1`. Disk-map genericity supplies finitely many
nondegenerate centers/saddles but not distinct-leaf tangencies or elimination
of saddle connections. Cap transport only covers regular orbit frontiers, not
saddle polycycles. These do not supply Novikov's global disk family.

Do not strengthen the approved `AC_ω` assumption merely to invoke full-AC
surface classification, uniformization, Jordan–Schönflies, or Gauss–Bonnet.
Restricted local proofs are required if the original choice scope is retained.

## §7 gaps

Novikov builds a normal fence from nonzero `α∈Π^j_1(A)`, selects a nearby
essential loop with displaced null disks (Lemma 7.2), extends disks by normal
flow to `G:D²×R_+→M`, chooses an orbit of infinite extension time, claims the
sweep avoids a neighborhood of the limiting loop, extracts nested disks, and
rules out closed transversals. He then cites §1 Lemma 1.2 and Theorem 1.1.

1. A compact fence around a fixed loop and the compact-set separation lemma
   below are locally manageable. Uniform one-sided projection and nullity of
   every displaced loop still require finite-chart transport from the exact
   `Π^j_1` definition.
2. Lemma 7.2's self-intersection splitting needs proof that the pieces form a
   compact family, null disks persist, the first-essential parameter applies,
   and the self-intersection count strictly decreases. The current
   first-essential carrier supplies only the parameter argument after that
   family exists.
3. Lemmas 7.3–7.4 call smoothness/continuity of maximal normal-flow time
   `s(y)` “obvious.” Ambient compactness does not itself control continuation
   of immersed disks approaching a noncompact leaf. Prove compact-domain
   flow-box control and an endpoint continuation criterion.
4. Lemmas 7.5–7.8 use torsion-freeness of open-surface groups without proof,
   treat projected immersed disks as planar regions, and leave common-leaf,
   uniform-separation, and nesting/exhaustion steps at “very close” or “easy
   consequence.” The disk maps are not shown injective.
5. In Lemma 7.9 the image-boundary conclusion needs a local openness check at
   the two interior break curves; regularity away from them is insufficient.
   Moreover, the final compactness/boundary conclusion imports §1 Lemma 1.2
   and Theorem 1.1; their foliation-component and finite-boundary claims have
   no local carriers in this pair.

## §8 gaps and viable pieces

Lemma 8.1 asserts that nested disks exhaust every nearby leaf; Lemma 8.2
transports a family of bounded-length loops along `A₀` and iterates
“closer/farther” returns to conclude every other limit point lies on `A₀`.
The source supplies no quantitative transverse estimate or termination
argument. It also does not show the disks are embedded at this stage, so their
images need not be planar regions and a proper open union need not exhaust a
connected leaf.

Theorem 8.1 asserts, without constructing the bridge, that a second boundary
leaf would yield a leaf with both it and `A₀` in its limit set. Connectedness
alone gives no finite chain of leaf-closure relations with a common leaf.
First prove this bridge, then prove `W=cl(C)` is a compact manifold with
boundary exactly `A₀`.

Once `W` is known, the boundary-class lemma gives `i_*[A₀]=0`. For
`E=TF|W`, `E|A₀=TA₀`, and Euler naturality yields
`<e(TA₀),[A₀]>=<e(E),i_*[A₀]>=0`. This repairs the Euler evaluation in
Novikov's normal-field sentence. Inferring `χ(A₀)=0` still needs a local proof
that the tangent Euler number of a compact `C²` surface equals its Euler
characteristic; the available GB/Chern–Weil proof imports full AC and needs a
regularity adapter. A finite-cell obstruction argument is the least
scope-expanding route.

For primitive reduction, `P_j` is torsion-free because a finite-order
increasing one-variable germ must be identity: if `g(x)>x`, then
`x<g(x)<...<g^r(x)=x`, and likewise if `g(x)<x`. Hence `α=mβ∈N_j` with
primitive `β` implies `β∈N_j`. But nullity of `g_t^m` implies nullity of
`g_t` only after a proof that each nearby surface group is torsion-free; the
source omits it. The primitive torus slope is embedded by Bézout: equality
`(pt,qt)=(ps,qs) mod Z²` and `gcd(p,q)=1` imply `t-s∈Z`.

The outline's deck-translate disk descent can work once the universal cover is
proved a plane (or the sphere case is handled): lift a nullhomotopic embedded
loop, use plane Jordan–Schönflies, and note that disjoint boundary lifts force
overlapping Jordan disks to be nested. Strict nesting under a deck map traps
an orbit in a compact disk, contrary to proper discontinuity; equality makes
a free deck transformation preserve a disk, contradicting the disk fixed
point theorem. Still required: a plane/sphere-cover result at `AC_ω` strength,
disk compatibility, and proof that the nested disks exhaust the leaf.

For Theorem 8.2, prove injectivity of the paired-base disk-sweep quotient,
that its image is all of the adjacent component, and a global transverse
return chart whose increasing return map has one boundary fixed point and no
interior fixed point. The source's “as an embedding” and “exactly the same
way” do not prove these claims.

The one-dimensional conjugacy is complete conditionally. If increasing
`h:[0,a]→[0,a]` has `h(0)=0` and `0<h(t)<t` for `t>0`, then `h^n(a₀)↓0` for
any `a₀>0`; the limit is a fixed point. Choose an increasing homeomorphism
`[h(a₀),a₀]→[1/2,1]` and extend over iterates by
`ψ(h^n(t))=2^{-n}ψ(t)`. Endpoint values match, and `ψ(0)=0` gives a
homeomorphism conjugating `h` to halving. This proves only the interval
return-map claim; it does not produce the global chart or extend the
conjugacy across the disk sweep.

## One complete local carrier: compact normal-fence separation

This `AC_ω`-level lemma proves the separation part of Novikov Lemma 7.1 and
does not require full AC.

**Lemma.** Let `A` be a leaf of a `C¹` codimension-one foliation of a
Hausdorff manifold, `K` compact in the intrinsic topology of `A`, and `X` a
continuous transverse vector field near the image of `K`. For its local flow
`φ_s`, some `ε>0` satisfies `φ_s(K)∩K=∅` for every defined `0<s≤ε`.

**Proof.** Otherwise choose `s_n↓0` and `x_n,y_n∈K` with
`φ_{s_n}(x_n)=y_n`. Compactness gives subsequences converging intrinsically
to `x,y∈A`. Continuity makes their ambient limits equal; injectivity of the
leaf inclusion gives `x=y`. Choose a foliated chart at `x` and an intrinsic
neighborhood mapped into its local plaque. For large `n`, both points lie
there. The chart's transverse coordinate is constant on the plaque and
strictly changes along `X`, contradicting `φ_{s_n}(x_n)=y_n`. The only
sequence selection is countable and uses the standing `AC_ω` assumption. ∎

This proves only short-time separation of a compact leafwise set from its own
positive displacement. It does not make an entire fence embedded, prove
displaced loops nullhomotopic, or turn immersed disk maps into nested embedded
regions.

## Recommendation

Keep the full Novikov theorem and its `AC_ω` hypothesis. The theorem is not
refuted, but §§7–8 are not locally complete, and Lemma 7.9's seam openness
step is unsupported. The compact-set separation lemma and conditional
interval conjugacy are ready as local support; keep the closed-leaf and Reeb
carriers `not-supplied` until the remaining geometric steps are proved.
