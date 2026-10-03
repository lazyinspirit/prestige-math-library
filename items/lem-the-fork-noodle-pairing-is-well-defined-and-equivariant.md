---
id: lem-the-fork-noodle-pairing-is-well-defined-and-equivariant
kind: lemma
title: The fork-noodle pairing is well defined and equivariant
status: draft
origin: pipeline
deps: [lem-a-multiple-of-a-fork-surface-has-a-closed-compact-replacement, def-forks-noodles-and-their-lkb-intersection-pairing, def-relative-singular-homology, def-singular-chain-complex-of-a-pair, thm-singular-chain-homotopy-formula, lem-int-cancellation, cor-polynomial-ring-over-a-domain-is-a-domain, def-multiplicative-subset-and-localisation, thm-alexander-contractibility-of-the-boundary-fixed-disk-homeomorphism-group, def-lkb-two-variable-covering-homomorphism]
justified_by: []
aliases: []
dependency_level: 6
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bigelow, Braid groups are linear, J. Amer. Math. Soc. 14 (2001) 471-486"
      url: "https://web.math.ucsb.edu/~bigelow/publications/03.pdf"
      locator: "Section 2, printed pp. 474-479: well-definedness of <N,F>, the closed replacement, and the invariance <sigma x, sigma y> = <x,y>"
    - title: "Bigelow, The Lawrence-Krammer representation, arXiv:math/0204057v1"
      url: "https://arxiv.org/pdf/math/0204057"
      locator: "Section 2.2, printed pp. 3-4: 'To prove that these are well defined requires some elementary homology theory'; sesquilinearity and Bn-invariance"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---
## Statement

For $x\in H_2(\widetilde C)$ and $y\in H_2(\widetilde C,\partial\widetilde
C\cup\tilde\nu)$ the Laurent sum
$\langle x,y\rangle=\sum_{a,b\in\mathbb Z}(x\cdot q^at^by)q^at^b$ has only
finitely many nonzero terms and depends only on the homology classes. It is
$\Lambda$-sesquilinear, and for every braid class $\sigma\in B_n$ one has
$\langle\sigma x,\sigma y\rangle=\langle x,y\rangle$; the same statements hold
for $\langle\cdot,\cdot\rangle'$.

## Facts & Assumptions

**Given:** the LKB cover, the stabilized relative modules, the two displayed Laurent sums, and finite transverse fork/noodle diagrams.

[F1] Ordinary relative cycles are finite chains whose boundaries lie in the relative subspace; equal relative classes differ by an ordinary boundary and a chain in that subspace
([[def-relative-singular-homology]], [[def-singular-chain-complex-of-a-pair]]).
Homotopies give the finite prism chain formula
([[thm-singular-chain-homotopy-formula]]).

[F2] The compact replacement of
[[lem-a-multiple-of-a-fork-surface-has-a-closed-compact-replacement]]
has relative image $\Delta_F[\widetilde\Sigma(F)]$, where
$\Delta_F=(1-q)^2(1+qt)$, and agrees with that fork chain outside the two
small tine-puncture neighborhoods. Their radius may be chosen below the
distance from a compact noodle or its entire isotopy trace.

[F3] The Laurent ring is a domain: use integer cancellation
([[lem-int-cancellation]]), polynomial-domain preservation
([[cor-polynomial-ring-over-a-domain-is-a-domain]]) and localization at
nonzero monomials ([[def-multiplicative-subset-and-localisation]]).
In particular $\Delta_F\ne0$.

[F4] Boundary-fixed filled-disk homeomorphisms have the explicit Alexander
isotopy ([[thm-alexander-contractibility-of-the-boundary-fixed-disk-homeomorphism-group]]).
The covering character is total puncture winding and mutual half-twist
winding ([[def-lkb-two-variable-covering-homomorphism]]).

## Proof

1.1 *Finite supports and the required separation.* Every ordinary relative cycle is a finite chain, hence has compact image by [F1]. For the primed pairing choose the compact boundary-only second cycle and any compact bounding chains first; their projections have a positive lower bound on $f$. Represent the first, end-stable class at a radius smaller than this bound. For the unprimed pairing choose the compact absolute first cycle and bounding chains first, then represent the boundary-plus-end class at a sufficiently small radius. Deck translates have the same projections, so these separations are uniform in all deck elements. Push the first argument and its bounding chains off the disk boundary by a fixed radial compression: take $r_0>\max|p_i|$, put $r\mapsto r$ below $r_0$ and $r\mapsto r_0+(r-r_0)/2$ above it, and interpolate with the identity. Each map is injective and 1-Lipschitz, fixes all punctures, and sends each candidate puncture or collision distance to at most its old value. Thus it preserves every $\nu_\varepsilon$, lifts from the identity and gives the relative prism equivalence. The final compressed chains miss $\partial\widetilde C$; the end radius chosen from the opposite chain remains valid. We always compare compressed representatives, applying a common compression to compact bounding chains. No two end-relative arguments are paired. [F1, given, construct]

2.1 *The finite intersection boundary identity.* Subdivide the finitely many singular simplices and their identified faces until their images lie in evenly covered ordered-coordinate charts of $C$. On compact pieces away from punctures and collisions, linear interpolation after a sufficiently fine subdivision remains in valid configurations; chart changes only interchange the two planar coordinate blocks. Approximate and perturb the finitely many vertices, compatibly on identified faces, while fixing portions near separated relative boundaries. The necessary affine general-position conditions exclude finitely many proper determinant zero sets; a point in the permitted open parameter boxes can be chosen off their union, requiring only finite choices. This yields finite piecewise linear transverse intersections. Two oriented 2-chains have a signed zero-dimensional intersection; a 3-chain and a 2-chain have a one-dimensional intersection. Its boundary consists precisely of intersections of their boundary faces, with the product boundary signs: paired interior faces cancel. In particular, when the relative-boundary terms are disjoint as in step 1.1, changing a representative by a relative boundary changes the signed count by the total oriented boundary of a compact one-chain, which is zero. The finite prism construction compares different subdivisions or perturbations by the same identity. This establishes the homological intersection count needed here without an unproved assertion that relative fork/noodle classes generate absolute homology. [F1, step 1.1, construct]

3.1 *Finiteness and homology invariance of both sums.* If $K,L\subset\widetilde C$ are the compact supports of the two chosen finite chains, only finitely many deck translates of $L$ meet $K$: cover their projections by finitely many evenly covered neighborhoods and their supports by finitely many lifted pieces; for each pair of sheets at most one deck element identifies them. Hence the Laurent sum has finite support. Step 2.1 proves invariance for each term under a homologous replacement, using the compact bounding chains and smaller radius of step 1.1. The same argument proves compatibility with the canonical stabilized end transitions. It applies both to an absolute/boundary-plus-end pair and to an end-relative/boundary-only pair, with the first-chain collar ensuring separation. Therefore both asserted sums are well defined on their exact stated modules. [F1, step 1.1, step 2.1, construct]

4.1 *Sesquilinearity.* Finite-chain addition gives additivity. For a deck element $h$, changing indices in the finite sum gives $\langle hx,y\rangle=h\langle x,y\rangle$ and $\langle x,hy\rangle=h^{-1}\langle x,y\rangle$, since deck maps preserve the covering orientation and $\Gamma=\mathbb Z^2$ is abelian. Integer-linear extension gives the stated involution $\bar\lambda(q,t)=\lambda(q^{-1},t^{-1})$. The calculation is identical for the primed pair. [step 3.1, algebra]

5.1 *The fork/noodle polynomial uses a closed first argument.* The compact image of $N$ avoids every puncture; choose the two closing neighborhoods in [F2] disjoint from it. Truncate its proper triangle to obtain the finite end-stable cycle $y_N$ of the Definition. Outside the closing neighborhoods $c_F$ equals $\Delta_F\widetilde\Sigma(F)$, while every translate of the noodle misses those neighborhoods. Thus term-by-term intersection, with the 2-dimensional factor interchange sign $(-1)^{2\cdot2}=1$, gives $\langle c_F,y_N\rangle=\Delta_F\langle N,F\rangle$, where the rightmost polynomial is the original finite labelled diagram sum. Different absolute closing choices have the same image in the puncture-neighborhood relative group; the pair exact sequence makes their difference a class supported in those neighborhoods, whose pairing with every translated noodle is zero. For an isotopy or parallel-copy change, choose the neighborhoods disjoint from the full compact noodle trace and truncate the fork ends uniformly; the finite relative prism and the same boundary identity give the identical scaled polynomial. Since [F3] gives $\Delta_F\ne0$ in a domain, cancellation proves equality of the original $\Lambda$-valued finite diagram polynomials. This does not divide by $\Delta_F$ to define a pairing of two end-relative modules. [F1, F2, F3, step 3.1, step 4.1, construct, algebra]

6.1 *Equivariance on the asserted arguments.* A boundary-fixed orientation-preserving disk representative acts on $C$ preserving total puncture winding and mutual half-twist winding, so its normalized lift fixing $\tilde c_0$ commutes with every deck element. The latter winding invariance follows also from the boundary-fixed Alexander disk isotopy after the punctures are forgotten. Under an oriented homeomorphism every local intersection degree, and hence the finite chain count, is unchanged. Thus $\sigma x\cdot g\sigma y=x\cdot gy$ and summing gives the asserted equivariance for both exact pairs. For fork/noodle diagrams apply the same identity to $\langle c_F,y_N\rangle$ and cancel $\Delta_F$ as in step 5.1; image closing neighborhoods may be shrunk using the full compact trace. This proves invariance for every supplied boundary-fixed disk representative; it does not require an inverse identification of mapping classes with braid words. The construction uses supplied finite chains, finite coordinate perturbations and unique lifts, and introduces no choice principle. [F1, F2, F3, F4, step 3.1, step 5.1, construct, algebra] ∎

## Remarks

The noncompact noodle triangle is end-relative as well as boundary-relative.
The compact dual squares $x_{i,j}$ use two disjoint full chords and are
boundary-only; they are legitimate second arguments of the primed pairing.
The former generation claim for absolute homology by relative fork/noodle
classes was unsupported and ill-typed; none of the proof above uses it.
