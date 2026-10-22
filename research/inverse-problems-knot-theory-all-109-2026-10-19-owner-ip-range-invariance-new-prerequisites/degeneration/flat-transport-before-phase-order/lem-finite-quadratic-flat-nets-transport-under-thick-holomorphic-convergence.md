---
id: lem-finite-quadratic-flat-nets-transport-under-thick-holomorphic-convergence
kind: lemma
title: Finite quadratic flat nets transport under thick holomorphic convergence
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - thm-thick-pointed-fuchsian-surfaces-and-covers-have-convergent-holomorphic-atlases
  - lem-bounded-area-thick-components-capture-unscaled-quadratic-limits
  - thm-holomorphic-inverse-function-theorem
  - thm-holomorphic-primitive-on-star-shaped-domain
  - thm-covering-space-lifting-criterion
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-dominated-convergence
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Curtis T. McMullen, Amenability, Poincare series and quasiconformal maps
      url: https://people.math.harvard.edu/~ctm/papers/home/text/papers/amen/amen.pdf
      locator: Entire Sections 9–12 and Appendix A.1–A.4 read; this supplies the actual finite flat-net transport used in the proof of Theorem 11.1, PDF page20, without importing continuity of global pushforward operator norms
---

## Statement

Assume AC, hence Countable Choice. Use a thick-pointed Fuchsian sequence $X_n=H/\Gamma_n\to X=H/\Gamma$ with the actual quotient charts and smooth compact-region embeddings of [[thm-thick-pointed-fuchsian-surfaces-and-covers-have-convergent-holomorphic-atlases]]. Let holomorphic quadratics $q_n\to q\ne0$ converge locally in all derivatives in those charts; for example the unscaled limits of [[lem-bounded-area-thick-components-capture-unscaled-quadratic-limits]] have this property. Supply a FINITE family of holomorphic embeddings
$$\iota_j:D(0,r+\delta)\longrightarrow X,\qquad \iota_j^*q=dw^2,\qquad 1\le j\le s,$$
where $r,\delta>0$. Thus the radius-$r$ discs $D_j=\iota_j(D(0,r))$ have zero-free embedded flat neighborhoods. Distinct discs may overlap; no transverse-boundary hypothesis is required.

For all sufficiently large $n$ there are holomorphic embeddings $\iota_{j,n}:D(0,r+\delta/2)\to X_n$ with $\iota_{j,n}^*q_n=dw^2$, converging to $\iota_j$ locally in all derivatives in the actual charts. Put $D_{j,n}=\iota_{j,n}(D(0,r))$. Then
$$\int_{D_{j,n}}|q_n|=\pi r^2=\int_{D_j}|q|,$$
and, for every nonempty $I\subset\{1,\ldots,s\}$,
$$\int_{\bigcap_{j\in I}D_{j,n}}|q_n|\longrightarrow\int_{\bigcap_{j\in I}D_j}|q|.$$
The same holds for finite unions. In particular every prescribed positive overlap fraction remains uniformly positive, all discs have the same fixed area, and their multiplicity is at most $s$, uniformly in $n$. Pairs with disjoint CLOSED limit discs remain disjoint; no absence of new intersections is claimed for pairs whose boundaries touch.

More generally, given the smooth embeddings $F_n$ on a neighborhood of any fixed compact $K\subset X$, every measurable $E\subset K$ satisfies $\int_{F_n(E)}|q_n|\to\int_E|q|$. One may choose a fixed compact neighborhood $K$ of all the closed flat discs so that $D_{j,n}\subset F_n(K)$ and the pulled-back discs $F_n^{-1}(D_{j,n})$ converge in indicator functions almost everywhere to $D_j$ in that neighborhood.

For supplied subgroups $L_n\le\Gamma_n$ having limit $L\le\Gamma$ along the simultaneous covering subsequence, membership of any FINITE collection of monodromy words transported through the fixed compact-region charts eventually agrees with its membership in $L$. Consequently every fixed-radius ball in a Schreier graph built from finitely many such transported loop labels and based at the distinguished coset has the same labeled structure as in its limiting cover, for large $n$. This is LOCAL graph convergence; no uniform expansion of whole infinite lifted graphs or topological identification of their amenable components follows merely from it.

## Facts & Assumptions

**Given:** AC, the actual thick-pointed chart and smooth-embedding convergence, the nonzero limiting quadratic and all the supplied extended flat discs; the subgroup data only for the final conclusion.

[A1] AC and its Countable Choice consequence are [[def-axiom-of-choice]] and [[def-countable-choice]].

[F1] The thick-pointed theorem gives actual holomorphic quotient charts, smooth embeddings converging in every derivative on compact sets, finite deck-transition approximants with all finite cocycle relations eventually exact, uniform identity isolation, and simultaneous subgroup cover limits. The approximant in $\Gamma_n$ to any fixed finite element of $\Gamma$ is eventually unique. [[thm-thick-pointed-fuchsian-surfaces-and-covers-have-convergent-holomorphic-atlases]] The unscaled quadratic limit theorem supplies local convergence of the lifted quadratic coefficients and every derivative, and their convergence as tensors under the smooth compact-region embeddings. [[lem-bounded-area-thick-components-capture-unscaled-quadratic-limits]]

[F2] A holomorphic map with nonzero derivative has a holomorphic local inverse. In particular $z\mapsto z^2$ has a single holomorphic square-root inverse near $1$ taking $1$ to $1$. A holomorphic function on a disc has a primitive given by segment integration. [[thm-holomorphic-inverse-function-theorem]], [[thm-holomorphic-primitive-on-star-shaped-domain]]

[F3] Maps from a simply connected disc lift to a covering after specifying one lifted basepoint; lifts are unique. Since the quotient covering charts are holomorphic, the lift of a holomorphic map is holomorphic. [[thm-covering-space-lifting-criterion]]

[F4] Countable Choice gives measurable smooth change of variables. A quadratic $f(z)dz^2$ has measure $|f(z)|\,dx\,dy$, with the holomorphic Jacobian rule. Dominated convergence holds for bounded measurable functions on fixed finite-measure compact coordinate regions. [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[thm-dominated-convergence]]

## Proof

1.1 Lift each $\iota_j$ to a holomorphic embedding $\widetilde\iota_j:D(0,r+\delta)\to H$ by [F3]. It is injective because $\iota_j$ is. Choose a slightly smaller radius than $r+\delta$ but larger than $r+3\delta/4$, so its closed image is compact. Its projection under $\Gamma$ is injective on this compact image and a neighborhood. This latter assertion also follows directly by first restricting to a slightly larger closed subdisc on which the original projection through $\iota_j$ is injective. The compact-matrix argument in [F1] then makes $\pi_n$ injective on this image and a neighborhood for all large $n$. To spell out that argument, otherwise nonidentity $\gamma_n\in\Gamma_n$ would identify two points in the compact lifted image; they have a finite matrix subsequence, whose nonidentity limit in $\Gamma$ would contradict its source injectivity. Identity limits are excluded by the uniform base displacement. Thus $\widehat\iota_{j,n}=\pi_n\widetilde\iota_j$ are actual holomorphic embeddings on these slightly smaller discs, and converge in the quotient charts to $\iota_j$. [A1, F1, F3, given, construct, algebra]

2.1 Write $\widehat\iota_{j,n}^*q_n=g_{j,n}(w)dw^2$. On compact subdiscs $g_{j,n}\to1$ with every derivative, since $\iota_j^*q=dw^2$ and the lifted quadratic coefficients converge. On $|w|\le r+3\delta/4$ all values are eventually in the fixed neighborhood of $1$ from [F2]. Let $b_{j,n}=\sqrt{g_{j,n}}$ be that branch, and let $H_{j,n}$ be its primitive on $D(0,r+3\delta/4)$, normalized by $H_{j,n}(0)=0$. Thus $H_{j,n}'=b_{j,n}$, $H_{j,n}\to\operatorname{id}$ with all derivatives on slightly smaller closed discs, and $\widehat\iota_{j,n}^*q_n=dH_{j,n}^2$. Square roots and primitives here are taken on a fixed disc, so no unproved global period or square-root assertion is involved. [F1, F2, step 1.1, given, construct, algebra]

3.1 For large $n$ the maps $H=H_{j,n}$ have holomorphic inverses on the WHOLE smaller disc $D(0,r+\delta/2)$, not merely near each point. Indeed $\sup|H'-1|<1/2$ on $D(0,r+5\delta/8)$ implies injectivity there by integrating $H'-1$ along segments. Also $\sup|H(w)-w|<\delta/32$ there for large $n$. For each $y$ with $|y|<r+\delta/2$, the map $T_y(w)=y-(H(w)-w)$ sends the closed radius-$\delta/16$ ball about $y$ into itself, stays inside $D(0,r+5\delta/8)$, and contracts distances by at most $1/2$. Its iterates form a Cauchy sequence because consecutive increments decrease geometrically; completeness of the closed Euclidean ball gives a fixed point, unique by contraction. Thus $H(w)=y$ has a unique solution there. Its derivative is nonzero, so the local inverse theorem [F2] makes these unique inverses holomorphic and compatible on their full common domain. They converge to identity with all derivatives on compact subdiscs, by the inverse identity and $H\to\operatorname{id}$ in all derivatives. Define $$\iota_{j,n}=\widehat\iota_{j,n}\circ H_{j,n}^{-1}.$$ These are actual embeddings with exact pullback $dw^2$ and the asserted convergence. [F2, step 1.1, step 2.1, construct, algebra]

4.1 We make comparison of the image sets precise. Choose a compact neighborhood $K$ of all $\iota_j(\overline D(0,r+\delta/3))$ inside a slightly larger compact neighborhood, and choose [F1]'s smooth embeddings $F_n$ on an open neighborhood of that larger compact set. In each small source coordinate disc and its corresponding target chart their expressions tend smoothly to identity. They contain any fixed smaller compact coordinate disc for large $n$. This last surjectivity follows by the same elementary contraction construction as in step 3.1, now for a real $C^1$ map $G_n$: if $\|DG_n-I\|<1/2$ and $\|G_n-\operatorname{id}\|$ is less than a fixed collar width, solve $G_n(x)=y$ by iterating $x\mapsto y-(G_n(x)-x)$ on a closed ball inside that collar. A finite coordinate cover makes this assertion uniform. Hence $\iota_{j,n}$ on $\overline D(0,r+\delta/4)$ has image in $F_n(K)$ and the embeddings $$a_{j,n}=F_n^{-1}\iota_{j,n}$$ are defined there and converge smoothly to $\iota_j$. All set comparisons below therefore take place in one fixed compact surface neighborhood, not in an unspecified varying universal curve. [A1, F1, step 3.1, construct, algebra]

5.1 For every point $x\in K\setminus\partial D_j$, the indicator of $a_{j,n}(D(0,r))$ tends to that of $D_j$. If $x\in D_j$, apply the preceding local real inversion argument to $a_{j,n}$ near the unique interior preimage of $x$; its nearby preimage has modulus less than $r$ for large $n$. If $x\notin\overline D_j$, membership infinitely often would give $x=a_{j,n}(w_n)$ with $|w_n|<r$; a subsequence has $w_n\to w\in\overline D(0,r)$ and thus $x=\iota_j(w)$, a contradiction. Each boundary $\partial D_j=\iota_j(\{|w|=r\})$ is a smooth embedded circle, hence has coordinate area zero: cover it by finitely many bounded-derivative graph parametrizations, whose radius-$h$ strips have area $O(h)$. Thus these indicators converge almost everywhere simultaneously for the finite family, and so do every finite intersection and union of them. No transversality of two boundaries was used. [step 3.1, step 4.1, construct, algebra]

6.1 In a fixed coordinate $z$ on $K$, write $q=f(z)dz^2$ and $q_n=f_n(v)dv^2$ in its corresponding target coordinate. The measure density pulled back by the possibly nonholomorphic smooth $F_n$ is $$|f_n(F_n(z))|\,|\det D F_n(z)|.$$ It converges uniformly on compact subcharts to $|f(z)|$. A finite smooth partition of unity reduces integration on $K$ to these finitely many subcharts; such a partition is obtained from ordinary coordinate bump functions divided by their positive sum. The resulting densities have one constant integrable majorant on each compact coordinate region. Dominated convergence [F4], combined with step 5.1's almost-everywhere indicator convergence, gives convergence of the quadratic mass of all the finite intersections and unions of the $D_{j,n}$ to their limit masses. With an arbitrary fixed measurable $E\subset K$, the same argument using its fixed indicator proves $\int_{F_n(E)}|q_n|\to\int_E|q|$ without any boundary-regularity condition on $E$. All change-of-variables assertions here use the actual real Jacobian of $F_n$, not a nonexistent holomorphic pullback formula for it. [F1, F4, step 4.1, step 5.1, construct, algebra]

7.1 The exact flat pullback in step 3.1 gives each mass $\pi r^2$ by [F4]. Therefore an edge whose limit overlap fraction is $a_{ij}=\int_{D_i\cap D_j}|q|/(\pi r^2)>0$ has overlap fraction at least $a_{ij}/2$ for large $n$, by step 6.1. Finitely many prescribed positive edges give a common positive lower bound. At most $s$ discs cover a point, trivially. If $\overline D_i$ and $\overline D_j$ are disjoint, their pulled-back compact images under $a_{i,n},a_{j,n}$ remain disjoint for large $n$: otherwise convergent preimages would give a common limit point of those two disjoint compact sets. Since $F_n$ is injective, the original $D_{i,n},D_{j,n}$ are disjoint as well. When two closed boundaries touch, extra small intersections are allowed and have not been falsely excluded. [F4, step 3.1, step 5.1, step 6.1, given, algebra]

8.1 We give the precise finite-word covering conclusion separately from any global expansion claim. For fixed $g\in\Gamma$, let $g_n\in\Gamma_n$ be its approximants. If $g\in L$, subgroup convergence supplies $h_n\in L_n$ tending to $g$. Eventual uniqueness of approximants in [F1] gives $g_n=h_n$ for large $n$, so $g_n\in L_n$. If $g\notin L$, infinitely many $g_n\in L_n$ would by closed-set subgroup convergence put $g\in L$, a contradiction. Hence membership eventually agrees. This holds simultaneously for every finite collection of such elements. Products and inverses of finitely many chosen approximants are the unique approximants of their source words, and every finite relation is eventually exact by [F1]. [F1, given, construct, algebra]

9.1 To apply step 8.1 to monodromy, take finitely many based source loops lying in a compact chart-covered region and transport them by $F_n$. Decompose them into finitely many arcs in the finite chart cover. Successive lifted arc endpoints differ by its deck-transition matrices; their finite products are precisely the loops' monodromy. The construction of $F_n$ in [F1] uses the exact approximating finite cocycle, so its transported lifts have those approximating transitions and their products converge to the source monodromy. If the transported basepoint differs from the distinguished quotient point, join them inside one small chart; lifting that path identifies fibers, and introduces no deck transition. Thus the transported monodromy elements are the unique approximants used in step 8.1. For a labeled Schreier graph with right action on left cosets $Lg$, equality of two vertices reached by words $u,v$ is equivalent to $uv^{-1}\in L$; an edge or a loop is another such finite-word condition. Every fixed-radius ball uses finitely many words in the finite label alphabet. Membership stability therefore makes its complete based labeled structure eventually identical to that in the limiting cover. This proves only local graph convergence. In particular it does not imply a common positive expansion constant for the entire varying graphs: such a global conclusion needs an additional theorem. [F1, step 8.1, given, construct, algebra]

10.1 Combining steps 3.1, 6.1, 7.1 and 9.1 proves every asserted finite flat-net, mass and local covering conclusion. The extended embedded flat neighborhoods and a nonzero unscaled local quadratic limit are explicit inputs; their topology or existence over a whole degenerating thick component has not been silently inferred. This completes the local transport operation needed before applying the separate quantitative flat-net mass lemma. [step 3.1, step 6.1, step 7.1, step 9.1, given, algebra] ∎

## Actual reading and remaining scope

The full actual thick atlas and unscaled thick-mass proofs, holomorphic inverse and disc primitive theorems, covering lifting criterion, measurable change-of-variables and dominated convergence theorem were read in full for this construction. The actual McMullen Theorem 11.1 proof and Appendix A.1–A.4 were read in full. No norm-continuity, extremal-map existence, or Poincare-series completeness theorem is used.

This supplies genuine analytic/geometric transport and finite local monodromy stability. It does not yet construct a finite flat net carrying the correct entire thick-component fundamental group, identify which lifted graph components are amenable, or prove a uniform expansion bound for the remaining varying graphs. Those are actual remaining topological/global operations in the full general alternative, rather than consequences of local convergence alone.
