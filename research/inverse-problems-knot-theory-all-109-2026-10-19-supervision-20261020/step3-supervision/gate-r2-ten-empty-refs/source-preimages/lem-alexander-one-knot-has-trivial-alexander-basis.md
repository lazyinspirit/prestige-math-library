---
id: lem-alexander-one-knot-has-trivial-alexander-basis
kind: lemma
title: An Alexander-one knot has a trivial Alexander basis
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
- lem-alexander-one-seifert-form-is-s-equivalent-to-empty
- def-seifert-form-s-equivalence
- def-oriented-seifert-surface
- thm-every-oriented-knot-bounds-a-seifert-surface
- def-countable-choice
- def-axiom-of-choice
- thm-choice-implies-dependent-implies-countable-choice
- lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
dependency_level: 13
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
  - title: Stavros Garoufalidis and Peter Teichner, On Knots with Trivial Alexander
      Polynomial
    url: https://people.math.gatech.edu/~stavros/publications/teichner1.pdf
    locator: Definition 4.1 and Lemma 4.2, printed pp.5–6
  - title: H. F. Trotter, On S-equivalence of Seifert Matrices
    url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0020/LOG_0020.pdf
    locator: The S-equivalence input invoked in Lemma 4.2; proof not yet reconstructed
      locally
---

## Statement

Assume full AC. Let $K\subset S^3$ be a smooth oriented knot with $\Delta_K(t)\doteq1$, where $\doteq$ denotes equality up to multiplication by a unit $\pm t^k$ of $\mathbb Z[t^{\pm1}]$. Then $K$ has a connected compact smooth oriented Seifert surface $F$ and an ordered geometric basis, represented by embedded simple closed curves $s_1,\ldots,s_g,\ell_1,\ldots,\ell_g$ for $H_1(F;\mathbb Z)$, such that $s_i\cdot_Fs_j=0=\ell_i\cdot_F\ell_j$ and $s_i\cdot_F\ell_j=\delta_{ij}$, and the Seifert matrix in this basis has block form
$$V=\begin{pmatrix}0&I_g+U\\U^T&W\end{pmatrix},$$
where $U$ is strictly upper triangular and $W$ is symmetric with zero diagonal. Such a geometric symplectic basis and block matrix are called a trivial Alexander basis.

## Statement references

[[def-oriented-seifert-surface|Connected compact oriented Seifert surfaces and their genus]]

[[thm-every-oriented-knot-bounds-a-seifert-surface|Existence of a Seifert surface under countable choice]]

[[lem-alexander-one-seifert-form-is-s-equivalent-to-empty|The Alexander-one S-equivalence claim needed for the basis construction]]

Stavros Garoufalidis and Peter Teichner, “On Knots with Trivial Alexander Polynomial,” Definition 4.1 and Lemma 4.2, https://people.math.gatech.edu/~stavros/publications/teichner1.pdf

## Facts & Assumptions

**Given:** Full AC and an oriented knot $K$ with $\Delta_K(t)\doteq1$.

[A1] [[def-axiom-of-choice]]: AC is the choice-function axiom used by the Seifert-form interfaces.

[F1] [[def-oriented-seifert-surface]]: A Seifert surface is connected, compact, smooth, oriented, and has boundary the given oriented knot.

[F2] [[thm-every-oriented-knot-bounds-a-seifert-surface]]: Under $\mathrm{AC}_\omega$, every smooth oriented knot bounds such a surface.

[F3] [[lem-alexander-one-seifert-form-is-s-equivalent-to-empty]]: The actual proof gives primitive kernel-vector splittings and exact integral inverse tube enlargements, rather than an unspecified stabilization.

[F4] [[def-seifert-form-s-equivalence]]: The displayed symmetric coupling enlargement is an allowed algebraic tube addition.

[F5] [[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]]: Its finite disk-and-band/polygon construction provides a geometric handle graph. On the supplied smooth surface, its finitely many piecewise smooth handle curves can be rounded in chart disks, preserving their finite transverse crossing pattern. Thus the finite twist construction below starts with actual smooth curves, not a claimed arbitrary TOP smoothing.

## Proof

1.1 Full AC implies Countable Choice, so choose the actual connected smooth Seifert surface supplied by [F2]. The proved reduction [F3] splits its given lattice by symplectic pairs and the exact inverse tube enlargements of [F4]. [given, A1, F2, F3, F4, choose]

1.2 Reversing these reductions also produces the claimed trivial Alexander block. Keep all short vectors first and all long vectors second. A reverse tube addition introduces a new short x with zero column and only the entry 1 in its own long column, and a new long y with zero diagonal. Its couplings to earlier short vectors occupy precisely the new LAST column of U, so U stays strictly upper triangular. Its couplings to earlier long vectors give a symmetric new row/column of W, with zero new diagonal. Starting from the empty matrix therefore gives [[0,I+U],[U^T,W]] with exactly the advertised conditions. This is an integral symplectic basis of the original lattice; the finite construction below realizes it geometrically rather than assuming that arbitrary integral basis changes are surface homeomorphisms. [F3, F4, algebra]

1.3 Fix a standard geometric basis a_i,b_i on the actual compact oriented genus-g surface with one boundary circle. Its existence follows by cutting a finite disk-and-handle model of the surface, not from an arbitrary homology basis. Put omega(a_i,b_j)=delta_ij. An annular Dehn twist about an embedded curve v acts by the transvection T_v(z)=z+omega(z,v)v, choosing the twist sign accordingly. This formula is proved by cutting each transverse arc at the annulus: the twisted arc acquires one oriented copy of its core. Curves representing a_i+a_j, b_i+b_j and a_i+b_j for i≠j are embedded band sums on distinct handles. The joining arc lies in the complement of the other standard handles; the band gives the indicated homology class. Thus these transvections and their inverses are actual boundary-fixed surface homeomorphisms (smooth diffeomorphisms in the smooth model). [F5, construct]

1.4 For orthogonal u,v, direct expansion gives
T_(u+v) T_u^−1 T_v^−1(z)
=z+omega(z,u)v+omega(z,v)u. [F5, construct]

1.5 Taking u=a_i,v=b_j, i≠j, realizes the elementary block-GL operation a_j to a_j+a_i and b_i to b_i−b_j. Its powers realize arbitrary integral elementary additions. Handle permutations and simultaneous sign reversal of a_i,b_i are also realized; the latter is the square of the two-twist rotation on that handle. Euclidean elimination consequently realizes every block action (x,y) to (A x,A^−T y) for A in GL_g(Z). Likewise the a_i and a_i+a_j twists realize every symmetric upper shear, because the diagonal rank-one matrices and the identity (e_i+e_j)(e_i+e_j)^T−E_ii−E_jj=E_ij+E_ji generate all symmetric integral matrices; the b_i analogues realize every symmetric lower shear. [F5, construct]

1.6 Here is a complete generation argument, so this is not an appeal to mapping-class surjectivity. Given a primitive vector v=(x,y), first interchange the a and b directions on a handle if necessary to make x nonzero. A block-GL operation makes x=(d,0,...,0), d>0. If some y_j is not divisible by d, reduce d strictly: for j=1 use the ordinary Euclidean two-twist SL_2 algorithm on (d,y_1); for j≠1 an upper diagonal shear inserts y_j in x_j, then block-GL Euclidean reduction replaces d by gcd(d,y_j). Repeat. The positive integer d decreases until every y_j is divisible by d; primitivity then forces d=1. A lower symmetric shear with first column −y clears y while keeping x=e_1. Thus an actual finite product of the specified twists takes every primitive vector to a_1. [F5, construct]

2.1 Let A be an arbitrary symplectic integral matrix. Apply this procedure to its first column, so the resulting matrix fixes a_1. Its image of b_1 has the form b_1+c a_1+z, with z in the span W of the remaining handles. The displayed orthogonal-transvection combination for u=a_1 and each basis vector v of W fixes a_1. Its k-th power subtracts k v from that image of b_1 and only changes its a_1 coefficient in addition. Use these powers to clear all coordinates of z. Then a power of T_(a_1) clears c. The resulting matrix fixes both a_1,b_1, and hence restricts symplectically to W. Induct on g. We have reduced A to the identity by actual twists; reversing the finite list realizes A. In particular the symplectic lattice basis from the preceding primitive-vector/tube reduction is represented by an ACTUAL geometric basis, with disjoint short curves, disjoint long curves and exactly one transverse short–long intersection on each matching pair. ∎ [F5, construct]
