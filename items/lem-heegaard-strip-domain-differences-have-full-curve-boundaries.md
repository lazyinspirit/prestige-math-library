---
id: lem-heegaard-strip-domain-differences-have-full-curve-boundaries
kind: lemma
title: "Domains of Heegaard strips with the same ends differ by a full-curve periodic domain"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - thm-zero-order-factorization-holomorphic-function
  - thm-holomorphic-implicit-function-theorem
  - thm-removable-singularity-characterizations
  - thm-morse-sard-for-euclidean-maps
  - lem-symmetric-product-divisor-intersections-and-point-movement
  - lem-pointed-heegaard-integrable-divisor-positivity
  - lem-degree-is-well-defined-and-independent-of-the-normalized-top-form
  - thm-regular-value-formula-for-compact-support-degree
  - thm-euclidean-inverse-function-theorem
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/pdf/math/0101206"
      locator: "Domains and their boundary paths in Sections2–4; the incidence-degree boundary calculation is supplied locally"
---

## Statement

Assume countable choice. Let $\Sigma$ be a closed Riemann surface with two systems $\boldsymbol\alpha,\boldsymbol\beta$ of $m\ge1$ pairwise disjoint curves in each system, with transverse finite opposite-system intersections. Let $L_\alpha,L_\beta$ be their product tori in $X=\operatorname{Sym}^m\Sigma$. Choose one interior point $a_R$ in each complementary region and exact product charts about every intersection generator, disjoint from the diagonal and every divisor $E_{a_R}$. Consider smooth finite-energy holomorphic strips with uniform generator ends, for paths $J_t$ equal to the standard symmetric-product structure near the diagonal and every $E_{a_R}$. The perturbation paths may have different interior values; the surface, attaching systems, region points and product generator charts are fixed.

For such a strip set $D(u)=\sum_R n_{a_R}(u)[R]$, with the actual integer divisor multiplicities. If $u$ and $v$ have the same ordered generator ends, then
$$\partial(D(u)-D(v))=\sum_i A_i\alpha_i+\sum_j B_j\beta_j$$
for integers $A_i,B_j$, as a full oriented curve-chain identity. Thus $D(u)-D(v)$ is a periodic domain in the full-curve sense, not merely a homologically periodic chain. If both ends of $u$ are the same generator, its own domain is periodic.

This assertion is proved from actual finite ordered lifts and local degree identities, without an index formula, a Chern pairing or a surjectivity assertion about arbitrary region domains. It makes no claim that every periodic domain or continuous Whitney class has a holomorphic representative.

## Statement references

[[def-countable-choice]]

[[thm-zero-order-factorization-holomorphic-function]]

[[thm-holomorphic-implicit-function-theorem]]

[[thm-removable-singularity-characterizations]]

[[lem-symmetric-product-divisor-intersections-and-point-movement]]

[[lem-pointed-heegaard-integrable-divisor-positivity]]

## Facts & Assumptions

**Given:** The fixed surface systems and charts, actual finite-energy strips with the same ends, and their actual point-divisor degrees.

[F1] [[thm-zero-order-factorization-holomorphic-function]] gives isolated finite-order zeros of a nonzero holomorphic germ, [[thm-holomorphic-implicit-function-theorem]] gives local holomorphic simple roots, and [[thm-removable-singularity-characterizations]] extends bounded holomorphic roots across a puncture.

[F2] [[lem-symmetric-product-divisor-intersections-and-point-movement]] constructs integer relative point-divisor degrees, their invariance in boundary-avoiding homotopies and in point movement within a curve-complement component. [[lem-pointed-heegaard-integrable-divisor-positivity]] identifies them with finite positive proper strip intersections near the protected region divisors.

[F3] [[lem-degree-is-well-defined-and-independent-of-the-normalized-top-form]] and [[thm-regular-value-formula-for-compact-support-degree]] give the signed degree formula for proper maps of oriented surfaces and compactly supported two-forms. [[thm-morse-sard-for-euclidean-maps]] supplies common regular values for finitely many coordinate maps by countable charts under countable choice. [[thm-euclidean-inverse-function-theorem]] identifies the rank-two part of a curve preimage locally with smooth arcs, hence with a measure-zero set.

## Proof

1.1 Cut off both ends of a strip inside the fixed product generator charts by multiplying its chart coordinates by smooth real cutoffs, equal to one on the inner ends of the tails and zero farther out. The generator charts are small star-shaped balls; this operation and its straight coordinate homotopy preserve both boundary planes, and all changed points lie outside every protected $E_{a_R}$. The modified map is identically its generators on full tails. It compactifies to a smooth disk map, constant near its two marked corners. It need not remain holomorphic on the cutoff tails. Its diagonal inverse image is finite. Indeed near any inverse image of the diagonal the original map is holomorphic and its local discriminant is a scalar holomorphic function. By [F1] its zeros are isolated unless locally identical. The locus locally contained in the diagonal is open and closed by the same local zero-order argument, so it would occupy the connected strip interior; the boundary tori avoid the diagonal and exclude that possibility. Uniform generator ends and compact boundary images exclude the far tails and a boundary collar, leaving a closed isolated subset of a compact interior rectangle, hence finitely many points. The cutoff charts avoid the diagonal, so this is also the capped map's diagonal inverse image. Pull back the actual $d=m!$ smooth ordering covering off that finite set. Near one deleted point, cut a small punctured disk along a radius and lift radial paths; successive sheet copies glue by one finite monodromy permutation. Each cycle of length $r$ fills by a disk with projection $\zeta\mapsto\zeta^r$. The ordered coordinates are local holomorphic simple roots off the center by [F1], stay in the bounded cluster coordinate disks of their limiting tuple, and extend by [F1]. Their symmetric functions agree with the original tuple by continuity. Near the constant corners the covering is unbranched and extends in the fixed disjoint coordinate disks. Thus its completed covering surface $F$ is compact, with smooth boundary, and has smooth coordinate maps $f_l:F\to\Sigma$. The capping preserves $n_{a_R}$ by the relative degree invariance in [F2], or directly because the modifying homotopy avoids each divisor. [F1, F2, given, construct, algebra]

2.1 For each region $R$ the total coordinate degree of this capped lift is $$\sum_l\deg(f_l;R)=d\,n_{a_R}(u).$$ Indeed all coordinate boundary values lie on the attaching curves, so restriction over $R$ is proper. Its degree is independent of the generic point in $R$ by [F3]. Near $a_R$ the unchanged original map is holomorphic wherever it meets that divisor, and the cutoff tails avoid a whole neighborhood of that divisor after shrinking that neighborhood. Choose a common regular value there, avoiding the finitely many branch coordinate values, using [F3]. Counting its coordinate preimages on the $d$ sheets gives precisely $d$ times the local divisor intersection count. Point movement and [F2] identify this with $d n_{a_R}(u)$. The same argument applies to $v$, with the same degree $d$, independently of its interior perturbations. [F1, F2, F3, step 1.1, construct, algebra]

2.2 The boundary of $F$ is partitioned over the two original disk arcs, with constant marked corner intervals. Each coordinate map along an alpha arc stays on one fixed $\alpha_i$, since those circles are disjoint. Its endpoints are the unique coordinates $x_i^\alpha,y_i^\alpha$ of the two generators lying on that circle. Summed over all coordinate maps and the $d$ ordered sheets at a corner, there are exactly $d$ such arcs for every $\alpha_i$: each ordered tuple contains one point on that circle. The beta arcs, traversed with the opposite source-boundary direction, likewise give $d$ paths from $y_j^\beta$ to $x_j^\beta$ on every $\beta_j$. For $u$ and $v$ with the same ends, pair their alpha paths on each circle and concatenate a path for $u$ with the reverse of its paired path for $v$; do the same for beta paths. There are finitely many paths, so pairing requires only finite choices. Their difference is thus a finite sum of closed piecewise smooth circle loops. In particular their boundary integrals against any smooth one-form $b$ on $\Sigma$ have the form $$\sum_l\int_{\partial F_u}f_{u,l}^*b-\sum_l\int_{\partial F_v}f_{v,l}^*b=\sum_i k_i\int_{\alpha_i}b+\sum_j h_j\int_{\beta_j}b$$ for integers $k_i,h_j$. To verify the integer assertion directly, lift the circle parameter of each closed loop by finitely many local argument intervals. The total argument increment is its integer winding. A circle one-form is its mean times the angular form plus the differential of an explicit periodic primitive; its integral along that loop is consequently the winding times its integral on the full oriented circle. [step 1.1, construct, algebra]

3.1 We compute the jumps of the degree coefficients by an actual local test form. Choose an open curve edge away from all attaching intersections and an oriented chart $(x,y)$ with that edge the $x$ axis, oriented positively. The two sides are $y>0$ and $y<0$. Choose $b=\rho(x)\chi(y)\,dx$ supported in this chart, with $\int\rho(x)dx=1$ and $\chi(0)=1$. On either capped source, integration of $f_l^*db$ equals its boundary integral, by the two-variable fundamental theorem with a finite chart partition. By [F3], the integral over each inverse region is its degree times the integral of $db$ there. The preimage of the curve union contributes zero to these two-form integrals: at rank below two the pullback vanishes, and at rank two [F3] gives a measure-zero local arc set; a countable chart cover preserves that property. Since $db=-\rho(x)\chi'(y)dx\wedge dy$, its integrals on the positive and negative sides are respectively $+1,-1$. Subtracting the formulas for $u,v$ therefore gives $$d\big((n_+^u-n_+^v)-(n_-^u-n_-^v)\big)=k_i$$ on an alpha edge, or $h_j$ on a beta edge, by step 2.2. The oriented boundary of a positive-side region has the positive $x$ direction, so this is exactly the region-chain boundary sign. No geometric intersection formula for a merely formal domain has been assumed. [F3, step 2.1, step 2.2, construct, algebra]

4.1 The right side for a given full circle is the same on every one of its edges, since step 2.2 used its full-circle winding. Dividing by $d$ shows that the jump of $D(u)-D(v)$ is constant along that circle. This jump is an integer because both region coefficient functions are integer-valued by [F2]. Hence $k_i/d$ and $h_j/d$ are integers whenever that curve has an edge. Every attaching circle has such an edge; even a circle with no intersections is itself an open edge locally, and the same test applies. The full curve-chain boundary is therefore the claimed integer sum, including at the vertices where the full-circle arcs continue. This proves periodicity in the precise full-curve sense. [F2, step 3.1, construct, algebra]

5.1 If both ends of $u$ equal $x$, compare it with the actual constant strip $v\equiv x$. That strip solves every chosen path equation, has finite zero energy and the same uniform ends, and has zero divisor degrees because its image avoids every region divisor. Its full ordered lift and path counts are covered by the preceding constructions, with no branch points and constant coordinate maps. Thus $D(u)-D(v)=D(u)$ is periodic by step 4.1. All comparisons used actual strip lifts and degree identities, rather than assuming that every formal periodic domain is represented by a disk or importing a Maslov or Chern formula. [step 1.1, step 4.1, construct, algebra] ∎
