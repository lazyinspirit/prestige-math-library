---
id: thm-fixed-type-hyperbolic-quadratics-have-uniform-ball-mass-doubling
kind: theorem
title: Fixed type hyperbolic quadratics have uniform ball mass doubling
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - lem-finite-area-fuchsian-quotients-have-compact-standard-cusp-truncations
  - thm-thick-pointed-fuchsian-surfaces-and-covers-have-convergent-holomorphic-atlases
  - lem-thin-pointed-fuchsian-surfaces-and-covers-have-flat-cylinder-limits
  - lem-bounded-area-thick-components-capture-unscaled-quadratic-limits
  - thm-convergent-holomorphic-atlases-support-projective-quadratic-compactness
  - lem-integrable-quadratic-mass-decays-uniformly-in-deep-hyperbolic-cusps
  - lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Curtis T. McMullen, Iteration on Teichmuller space
      url: https://people.math.harvard.edu/~ctm/papers/home/text/papers/iter/iter.pdf
      locator: Proposition2.5 and Corollary2.9, printed431–433, complete Sections2.3–2.4 read; this proves the scale cases and converse ball capture rather than presuming them from forward local embeddings
    - title: Terence Tao, An Introduction to Measure Theory
      url: https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf
      locator: Local canonical fivefold-ball supplier proof read; its elementary dyadic selection is reproved below for the actual hyperbolic metric, without importing a Euclidean-only Statement as a metric theorem
---

## Statement

Assume AC, hence Countable Choice. Fix integers $g,N\ge0$ with $2g-2+N>0$, and $c>1$. There is $C=C(g,N,c)<\infty$ such that for every connected complete finite-area hyperbolic surface $X$ whose cusp compactification has genus $g$ and $N$ punctures, every integrable holomorphic quadratic $q$, every $x\in X$ and $0<r\le\operatorname{inj}_X(x)$,
$$\int_{B_X(x,cr)}|q|\le C\int_{B_X(x,r)}|q|.$$
The larger ball need not be embedded. The constant is independent of $X$, its injectivity radii, $r$ and $q$. Types with no nonzero integrable quadratics are included vacuously. The same conclusion holds for any fixed finite list of such types, by taking the maximum of their constants.

Consequently let $\|q\|_1=1$ on such an $X$, let $\mu$ be a measurable Beltrami coefficient with $|\mu|\le1$, and let $E\subset X$ be measurable. Suppose $E$ is covered by open metric balls $B(x,r)$ with $0<r\le\operatorname{inj}_X(x)$, each satisfying
$$\operatorname{Re}\int_{B(x,r)}\mu q\le(1-a)\int_{B(x,r)}|q|$$
for one $0<a\le1$. Then
$$\operatorname{Re}\int_X\mu q\le1-\frac a{C(g,N,5)}\int_E|q|.$$
A finite or countable disjoint subfamily of the given balls carries mass at least $C(g,N,5)^{-1}\int_E|q|$. No a priori lower bound on their radii or uniform injectivity radius of $X$ is required.

## Facts & Assumptions

**Given:** AC, the fixed topological type and radius ratio, the arbitrary varying finite-area surface, integrable quadratic and embedded inner-ball radius; the coefficient and ball family only for the inefficiency conclusion.

[A1] Full choice and Countable Choice are [[def-axiom-of-choice]] and [[def-countable-choice]].

[F1] The actual finite-area theorem supplies the standard complex cusp compactification and exact area $A=2\pi(2g-2+N)$. [[lem-finite-area-fuchsian-quotients-have-compact-standard-cusp-truncations]] Integrable holomorphic quadratic coefficients have at most simple poles at its punctures, by the proved local punctured-disc argument. [[lem-integrable-quadratic-mass-decays-uniformly-in-deep-hyperbolic-cusps]]

[F2] The thick atlas theorem supplies actual locally convergent quotient charts for sequences based at radius bounded below, together with asymptotic separation. The mass theorem's converse capture proves that every fixed bounded quotient ball lies in finitely many such eventual chart images, by lifting to a fixed compact model ball. [[thm-thick-pointed-fuchsian-surfaces-and-covers-have-convergent-holomorphic-atlases]], [[lem-bounded-area-thick-components-capture-unscaled-quadratic-limits]] When $a_n=\operatorname{inj}(x_n)\to0$, the thin theorem gives a holomorphic atlas of the cylinder $\mathbb C/\mathbb Z$, actual embedded compact bands in $X_n$, and $a_n^{-2}$ times the pulled-back metrics tending smoothly to $4|dw|^2$. It proves this for both parabolic and loxodromic thin components. [[lem-thin-pointed-fuchsian-surfaces-and-covers-have-flat-cylinder-limits]]

[F3] On a supplied connected convergent holomorphic atlas with asymptotic separation, fixed-genus fixed-puncture quadratics with at most simple poles have a subsequence and nonzero scalar normalizations converging locally uniformly to a NONZERO holomorphic quadratic on the entire limit. This actual Riemann–Roch/bounded-degree proof requires no cyclic Poincare reference or norm-continuity import. [[thm-convergent-holomorphic-atlases-support-projective-quadratic-compactness]]

[F4] The complete hyperbolic models give $H^+=\{\operatorname{Im}z>0\}$ with metric $|dz|^2/(\operatorname{Im}z)^2$, and an embedded radius-$t$ ball has area $4\pi\sinh^2(t/2)$. [[lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients]] Measurable conformal changes of variables carry quadratic absolute-value densities by their real Jacobians. [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]

## Proof

1.1 Put $A=2\pi(2g-2+N)>0$. By [F1] every surface in the assertion has that area. If $a=\operatorname{inj}_X(x)$, every open radius-$t<a$ ball is an embedded model ball. Its area is at most $A$, so [F4] and $t\uparrow a$ give $$a\le B:=2\operatorname{arsinh}\sqrt{A/(4\pi)}<\infty.$$ All relevant radii are therefore uniformly bounded above. A nonzero $q$ has positive mass on every nonempty open ball, since a holomorphic coefficient vanishing throughout such a ball would vanish on connected $X$. It extends with at most simple poles at the $N$ punctures by [F1], precisely as required in [F3]. The zero quadratic satisfies every displayed inequality directly. [F1, F3, F4, given, construct, algebra]

2.1 Suppose the doubling assertion fails for this type and $c$. By [A1] choose nonzero quadratics $q_n$ on surfaces $X_n$, points $x_n$ and radii $0<r_n\le a_n:=\operatorname{inj}(x_n)$ such that the outer-to-inner mass ratio exceeds $n$. Scalar normalization does not change that ratio. Pass to a subsequence with $a_n\to a\in[0,B]$ and $r_n/a_n\to\rho\in[0,1]$. We treat all three possibilities below: $\rho=0$; $\rho>0,a>0$; and $\rho>0,a=0$. In each case [F3] gives scalar-normalized local holomorphic convergence on a connected atlas. We will prove a positive lower bound on the inner mass and a finite upper bound on the outer mass for those SAME normalized quadratics, contradicting the diverging ratio. [A1, F1, F3, step 1.1, given, construct, algebra]

2.2 We prove the metric fivefold selection needed for the last assertion, rather than invoking a Euclidean-only covering statement. The union of the supplied open balls has a countable subcover from that family: fix a countable basis for $X$ and, for each basic open set contained in some supplied ball, choose one such ball. These selected balls cover the union, and [A1] permits the countable selections. Their radii are at most $B$ by step 1.1. Divide the indexed balls into dyadic radius classes $2^{-m-1}B<r_j\le2^{-m}B$. Starting at $m=0$, inspect indices in increasing order within that class and keep a ball exactly when it misses all previously kept balls; after the entire class pass to the next one. The resulting finite or countable family is pairwise disjoint. Every unkept ball meets a previously kept one of radius $R$ with its own radius $r<2R$. The metric triangle inequality then gives $B(x,r)\subset B(y,5R)$: for any point in the former ball, its distance to $y$ is less than $r+(r+R)<5R$. Thus the original union, and hence $E$, is covered by fivefold dilates of the retained disjoint balls. No lower radius bound or Euclidean linear structure was used. [A1, step 1.1, construct, algebra]

3.1 First let $\rho=0$, so $r_n\to0$ by step 1.1. Normalize the universal hyperbolic model with the basepoint at $i$. For every fixed plane disc $D_M$ define $$\phi_n(w)=[i+r_nw]\in X_n.$$ It is holomorphic and well defined there for late $n$, and $$r_n^{-2}\phi_n^*g_{X_n}=\frac{|dw|^2}{(1+r_n\operatorname{Im}w)^2}\longrightarrow|dw|^2$$ smoothly on its closure. It is injective on every fixed $D_M$ eventually: if two lifted points were identified, the corresponding nonidentity deck transformation would move $i$ by at most the sum of their distances from $i$, which is at most $2r_n(M+1)$ for late $n$, smaller than $2a_n$ since $r_n/a_n\to0$. The increasing discs give a connected atlas of $\mathbb C$, with identity transitions and asymptotic separation, because every finite collection is contained in one eventually injective larger disc. Apply [F3] to obtain scalar-normalized quadratics tending locally uniformly to a nonzero holomorphic $q$ on this plane. Choose $M>2c+2$. The pulled-back length element on $\overline D_M$ lies between $r_n/2$ and $2r_n$ times Euclidean length for late $n$. Any path starting at the center that exits the embedded disc image has first-exit length at least $r_nM/2>cr_n$; thus the WHOLE outer ball is in this chart. Its mass is bounded by the mass of $D_M$, bounded by local uniform quadratic convergence. Conversely a fixed disc $D_d$, $0<d<1/4$, maps into the inner radius-$r_n$ ball by its radial paths. Its normalized mass tends to the positive mass of $q$ on $D_d$. This gives the required upper and lower bounds in this scale case, with an actual exit barrier rather than forward embeddings presumed exhaustive. [F3, F4, step 1.1, step 2.1, construct, algebra]

3.2 Now let $\rho>0$ and $a>0$. Use [F2]'s thick pointed atlas, whose base injectivity radii are bounded below. Since $r_n/a_n\to\rho$, we have $r_n\to r=a\rho>0$, while all outer radii are bounded by $cB$. Apply [F3] to get scalar-normalized quadratics converging locally uniformly to a nonzero holomorphic quadratic on the connected quotient limit. A fixed small source coordinate disc about the basepoint maps into $B_{X_n}(x_n,r_n)$, by smooth metric convergence and a radial path shorter than $r/2$. Its limiting quadratic mass is positive. Conversely [F2]'s finite-chart capture of the entire bounded-radius ball applies at radius $cB+1$; its proof lifts points to a fixed compact $H^2$ ball and covers that ball by finitely many eventual injective limit charts. Thus the WHOLE outer ball is covered by finitely many fixed compact coordinate pieces on which the normalized coefficients are uniformly bounded. The sum of their mass integrals bounds the outer mass, regardless of overlaps. This again gives a positive inner bound and finite outer bound without requiring global norm control after projective scaling. [F2, F3, F4, step 1.1, step 2.1, construct, algebra]

3.3 Finally let $\rho>0$ and $a=0$. Use [F2]'s actual thin-cylinder atlas $w\bmod\mathbb Z$ based at $0$ and scaled by $a_n^{-2}$; apply [F3] to get a nonzero holomorphic limiting quadratic on this connected cylinder. Fix a compact band $|\operatorname{Im}w|\le M$ with $M>c+1$. It is genuinely embedded in $X_n$ for late $n$, and its pulled-back length element is at least $a_n|dw|$ and at most $3a_n|dw|$ there, by convergence to $4|dw|^2$. A path from its center first exiting the band must change its imaginary coordinate by $M$, so has length at least $a_nM>cr_n$. This first-exit argument proves that the WHOLE outer ball lies in the band, even if a proposed shortcut would leave the full cyclic thin component. Its mass is bounded by finitely many compact coordinate pieces of that band. A fixed embedded Euclidean disc of radius $d<\min(1/4,\rho/8)$ about $0$ maps into the inner ball by radial paths of length at most $3a_nd<r_n$ eventually. Its normalized limiting mass is positive. Thus this last scale case also gives the required bounds. Both real parabolic and real loxodromic thin cases are covered by the actual band embeddings of [F2]; no purely formal cylinder limit is substituted. [F2, F3, F4, step 2.1, construct, algebra]

4.1 The three cases exhaust every subsequence of the chosen counterexample sequence after extraction. In every case the same scalar-normalized numerator is bounded above and its denominator is bounded below by a positive number. Their ratio therefore stays finite, contradicting its being greater than $n$. Hence a finite constant $C(g,N,c)$ exists. Increase it to at least one if needed. For a finite list of topological types take the maximum of their finitely many constants. This proves the full doubling assertion at all scales, including radii much smaller than the injectivity radius and bounded-radius balls which wrap around the surface. [step 2.1, step 3.1, step 3.2, step 3.3, algebra]

5.1 Let $B_j$ be that disjoint retained family. Apply step 4.1 with $c=5$ to each one. Countable subadditivity and disjointness give $$\int_E|q|\le\sum_j\int_{5B_j}|q|\le C(g,N,5)\sum_j\int_{B_j}|q|.$$ This proves the asserted selected-mass bound. The nonnegative defect density $D=|q|-\operatorname{Re}(\mu q)$ has integral $1-\operatorname{Re}\int_X\mu q$. By the assumed inefficiency on every retained ball and their disjointness, $$\int_XD\ge\sum_j\int_{B_j}D\ge a\sum_j\int_{B_j}|q|\ge\frac a{C(g,N,5)}\int_E|q|.$$ Rearranging gives precisely the final global pairing estimate. Empty families or null-mass $E$ satisfy it as well. The proof uses only nonnegative countable mass sums after the geometric selection. [step 4.1, step 2.2, given, construct, algebra] ∎

## Actual reading and remaining interface

The authentic Iteration Sections2.3–2.4, including complete Proposition2.5 and the efficiency/disjoint-ball discussion through Corollary2.9, were read; full Sections5–7 were also read. The current full connected projective-atlas proof, thick and thin atlas proofs, unscaled mass/capture proof, finite-area cusp proof, complete hyperbolic-model proof and real measurable change-of-variables proof were read in full. The actual canonical Euclidean fivefold-covering proof was read in full; its metric selection is supplied again above and its Euclidean measure-dilation conclusion is not imported.

This closes uniform fixed-type quadratic mass doubling and passage from locally inefficient embedded balls to a global mass-weighted pairing defect. It does not construct the actual three-dimensional comparison balls or their invariant parabolic normalization. Those geometric hypotheses remain separate operations in a full thin-geodesic skinning theorem.
