---
id: lem-equal-whitney-domains-have-equal-boundary-windings-and-fredholm-index
kind: lemma
title: "Equal Whitney domains have equal boundary windings and Fredholm index"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-multipointed-symmetric-product-spheres-have-index-shift-two-k
  - lem-smooth-relative-whitney-homotopies-preserve-strip-fredholm-index
  - lem-symmetric-product-divisor-intersections-and-point-movement
  - lem-degree-is-well-defined-and-independent-of-the-normalized-top-form
  - thm-regular-value-formula-for-compact-support-degree
  - lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes
  - thm-parametric-transversality
  - thm-morse-sard-for-smooth-manifolds
  - lem-geometric-oriented-disk-cauchy-riemann-fredholm-and-higher-regularity
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/abs/math/0101206"
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

Assume Countable Choice. Let $\Sigma$ be a closed oriented Riemann surface with an actual finite oriented polygon as in the sphere-index theorem, $m\ge1$, and put $X=\operatorname{Sym}^m(\Sigma)$. Let $\boldsymbol\alpha,\boldsymbol\beta$ be two disjoint-within-system smooth curve families of size $m$, transverse to each other, with product tori $L_\alpha,L_\beta$. Give two smooth fixed-end Whitney disk models $u,v$ from the same generator $x$ to the same generator $y$, constant near their two marked boundary corners, with their actual fixed product end data. Use the auxiliary complex-structure homotopies and actual relative-index realizations specified in the relative Whitney index theorem. Domain coefficients mean the integer relative degrees of the point-divisor lines, not a holomorphic representative assumption.

For any such pair, $D(u)-D(v)$ has boundary a sum of full attaching circles. The coefficient on each oriented circle is the angular winding difference of the corresponding labelled boundary paths, with their source-boundary signs. In particular, if $D(u)=D(v)$ as region chains, their boundary paths on each labelled alpha circle are homotopic relative their endpoints, and likewise on each labelled beta circle. After these boundary homotopies the difference of their smooth relative classes is represented by a sphere $A$ with $n_z(A)=0$. Consequently
$$\operatorname{ind}_{\mathbb R}(u)=\operatorname{ind}_{\mathbb R}(v),$$
before source translation, on all the stated higher Sobolev and allowed smooth weighted realizations. Thus actual Fredholm index is well defined on the set of REALIZED Whitney domains, including classes with positive, zero or negative marked multiplicities. No assertion that every integer region chain is realized is made.

The analogous statement holds for two smooth disks based at the same point of a single product torus $L_\gamma$, with equal one-system domains: their boundary loops are based homotopic, and their boundary Maslov indices and compact-disk Fredholm indices agree. Their fixed-node indices also agree whenever that bounded point-trace realization is used. The finite polygon hypothesis is supplied for the original embedded balanced $S^3$ data by the broad-input application in the sphere-index theorem. No full formula $e(D)+n_x(D)+n_y(D)$, normalized relative or absolute grading, invariance, or arbitrary-domain representativity is included.

## Facts & Assumptions

**Given:** The finite polygon, curve systems, fixed endpoint models and their actual divisor-degree domains, or the stated one-torus variants.

[F1] Point-divisor lines have canonical sections nonzero on all the boundary tori, integer relative degrees, homotopy invariance and point-movement invariance inside every curve-complement component. ([[lem-symmetric-product-divisor-intersections-and-point-movement]])

[F2] Every smooth sphere $A$ in $X$ has determinant degree $(m+1-h)n_z(A)$; gluing such a sphere to a fixed-end model changes its actual index by twice that degree. This includes arbitrary smooth spheres, not only positive incidence representatives. ([[lem-multipointed-symmetric-product-spheres-have-index-shift-two-k]])

[F3] Actual relative strip indices are invariant under smooth fixed-end homotopies and are computed by the squared determinant boundary phase. The compact one-torus disk index is $m$ plus that same boundary Maslov phase. ([[lem-smooth-relative-whitney-homotopies-preserve-strip-fredholm-index]], [[lem-geometric-oriented-disk-cauchy-riemann-fredholm-and-higher-regularity]])

[F4] Proper smooth surface degree has its signed regular-value and compactly supported two-form formulas; finite compact Stokes and localization hold. These degree and integral assertions are choice-free. ([[lem-degree-is-well-defined-and-independent-of-the-normalized-top-form]], [[thm-regular-value-formula-for-compact-support-degree]], [[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]])

[F5] Finite flow variations give transversality to the finitely many symmetric-product multiplicity strata, and smooth Sard supplies common regular values for finitely many coordinate maps, under Countable Choice. ([[thm-parametric-transversality]], [[thm-morse-sard-for-smooth-manifolds]])

## Proof

1.1 Replace either model by a smoothly homotopic one, fixing its whole boundary collar and corner neighborhoods, which misses all higher multiplicity strata and is transverse to the simple-double-root stratum. Use the finite supported coordinate variations of [F2]'s proof, multiplied by a source cutoff. They span the target tangent at every point in a compact neighborhood of the original repeated-point preimage; the frozen boundary collar misses that locus because the product tori have distinct roots and the disk map is continuous. Choose the variation sufficiently small that no new repeated tuple occurs outside that neighborhood, using positive separation on its compact complement. Thus [F5] applies there and transversality is vacuous on the frozen collar. The new repeated-point preimage is finite. The same ordered-cover construction as [F2] gives a degree-$d=m!$ compact oriented smooth branched cover $\pi:F\to\overline{\mathbb D}$ and ordered smooth roots $f_l:F\to\Sigma$. At a positive double collision use a root coordinate $\zeta$ and at a negative one $\overline\zeta$; in each case $\pi$ preserves orientation. This is a smooth map construction, not an assertion that the perturbed model is holomorphic. Relative point-divisor degrees and actual index remain unchanged by [F1]–[F3]. [F1, F2, F3, F5, given, construct]

2.1 For every region $R$, the coordinate degree sum is $$\sum_l\deg(f_l;R)=d\,n_R(u).$$ Indeed every coordinate boundary is on the curve system, so its restriction over $R$ is proper. Choose in $R$ a common regular value for the finitely many roots, missing the finitely many branch-point coordinate values; [F5] supplies it, with empty fibers allowed. The local point-divisor equation is the product of the root coordinates minus that point. At its inverse points the covering is unbranched, so the signed intersection count is the sum of the signed coordinate counts, with exactly $d$ ordered lifts of each original inverse point. [F4] identifies these counts with the coordinate degrees, and [F1] identifies the divisor count with $n_R(u)$. Equivalently use the local product-definer line identity, which gives the same winding equality. This proves the formula for arbitrary smooth models, including negative local intersections. The same construction applies to $v$ with the same $d$. [F1, F4, F5, step 1.1, construct, algebra]

2.2 Order the coordinates of a boundary tuple by its attaching-circle labels, possible uniquely because the circles of one family are disjoint. Along an alpha boundary arc the root on $\alpha_i$ is therefore one specified path $a_i^u$; every ordered sheet has exactly one coordinate equal to that path. Thus the total lifted coordinate boundary contains EXACTLY $d$ copies of it. The beta paths $b_j^u$ have the reverse source-boundary orientation, and the same multiplicity statement holds. Constant corner intervals contribute zero. For $u$ and $v$ the differences $a_i^u-a_i^v$ and $b_j^u-b_j^v$ are closed circle loops. Write $w_i,\widetilde w_j\in\mathbb Z$ for their angular windings with the source-boundary signs. Finite argument lifts give these integers; integrating any circle one-form is its mean times this winding, because the zero-mean part has a periodic primitive. Hence for every smooth surface one-form $b$ the difference of the total lifted coordinate boundary integrals is $$d\left(\sum_i w_i\int_{\alpha_i}b+\sum_j\widetilde w_j\int_{\beta_j}b\right).$$ In the one-torus case there is just the corresponding one-family sum. [step 1.1, construct, algebra]

3.1 Fix an open edge of an attaching circle away from opposite-family intersections, oriented as the $x$ axis in a positive $(x,y)$ chart. Take $b=\rho(x)\chi(y)\,dx$ supported there with $\int\rho=1$ and $\chi(0)=1$. Its derivative integrates as $+1$ on the positive side and $-1$ on the negative side. Apply compact Stokes to each lifted root surface, then the two-form degree formula [F4] over the regions, and subtract the two models. The inverse images of curve edges add no two-form integral: on the rank-deficient set the pullback vanishes, and on the regular set each preimage is locally a smooth arc of measure zero; a countable coordinate cover suffices under Countable Choice. The two preceding steps give $$d\big((n_+^u-n_+^v)-(n_-^u-n_-^v)\big)=d\,w_i$$ for an alpha edge, or $d\widetilde w_j$ for a beta edge. Both sides of a nonseparating edge may be the same region, in which case its difference is zero. The right side is constant along every open edge of that full attaching circle; hence the coefficient jumps describe exactly its full-circle boundary with the stated winding coefficient. This proves the periodic-domain assertion without assuming equality. If $D(u)=D(v)$, all these integers vanish. Every circle has such a local edge, even a circle with no opposite-family crossing. Thus all labelled boundary-path winding differences are zero. No inference from merely homologically vanishing boundary chains was made. [F4, step 2.1, step 2.2, construct, algebra]

4.1 Parametrize each labelled circle by $\mathbb R/2\pi\mathbb Z$ and lift its two paths to real paths with the same initial lift. Their final lifts agree by step3.1. Linear interpolation between those lifts is an explicit homotopy relative both endpoints. Taking the products gives separate alpha and beta boundary homotopies inside their actual product tori, fixing both generators. Reparametrize paths to be constant near the marked endpoints, as the original models already are; this makes the two arc homotopies glue smoothly at the corners. In the one-torus case their based loop lifts have the same initial and final values and the same interpolation gives a based homotopy. Glue $u$, the boundary homotopy cylinder, and the orientation reversal of $v$ to obtain a sphere map $A$. Smooth its collars by constant-end reparametrizations; any remaining finite coordinate seams can be smoothed by straight coordinate interpolation, with values fixed on smaller collars. This does not alter the disk classes or the boundary torus homotopies. For any region point $z$, the cylinder image avoids $E_z$ and its canonical section is nonzero there. Relative degree additivity by face winding therefore gives $n_z(A)=n_z(u)-n_z(v)=0$. [F1, step 1.1, step 3.1, construct, algebra]

5.1 By [F2], the determinant line on this sphere has degree zero. Compare disk determinant frames across the cylinder just as in the sphere-attachment calculation of [F2]. The squared phase difference of the two physical boundary problems is twice that sphere determinant degree: the cylinder carries the prescribed real boundary planes continuously, and every seam argument change cancels except the sphere clutch winding. Therefore [F3] gives equal actual strip Fredholm indices, with fixed end caps unchanged. Its higher Sobolev and smooth weighted realizations have the same index by the cited relative-index theorem. For one-torus disks their Maslov windings agree by the same frame calculation; adding the common $m$ gives equal compact-disk indices, and restricting both to the same bounded fixed-node trace subtracts the same $m$. All statements concern actual smooth realized classes and actual domain degrees. Positive marked multiplicities never entered an exclusion argument, and no formal-domain realization, Euler/corner formula or grading normalization was assumed. [F2, F3, step 4.1, construct, algebra] ∎
