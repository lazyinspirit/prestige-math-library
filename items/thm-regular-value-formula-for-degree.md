---
id: "thm-regular-value-formula-for-degree"
kind: "theorem"
title: "Regular-value formula for degree"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-regular-value-formula-for-compact-support-degree","lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier","def-fundamental-class-of-a-compact-oriented-manifold","def-degree-of-a-map-between-oriented-closed-manifolds","thm-excision-for-singular-homology","thm-singular-homology-satisfies-dimension-and-arbitrary-additivity","prop-relative-homology-is-functorial-for-maps-of-pairs"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Robbin–Salamon, Introduction to Differential Topology
      url: https://zaco.au/lib/math/text/differential-geometry/difftop.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $F:M^n\to N^n$ be proper and smooth between nonempty connected oriented smooth manifolds without boundary, and let $y\in N$ be a regular value. Then the fibre is finite and
$$\deg(F)=\sum_{p\in F^{-1}(y)}\operatorname{sgn}(dF_p)\in\mathbb Z.$$
If $M,N$ are closed, this scalar is also their integral homological degree: with the integral orientations induced by the supplied smooth orientations using the same Euclidean generator convention,
$$F_*[M]=\deg(F)[N]\quad\text{in }H_n(N;\mathbb Z).$$
The formula includes the empty regular fibre and dimension zero. This comparison at a supplied regular value is choice-free; it does not assert existence of regular values as an additional premise-free conclusion.

## Facts & Assumptions

[F1] [[thm-regular-value-formula-for-compact-support-degree]] gives finiteness and the signed-count formula for compact-support degree in ZF.

[F2] [[lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier]] supplies the compatible integral orientation from smooth rays and identifies each regular germ's local homology multiplier with its derivative sign.

[F3] [[def-fundamental-class-of-a-compact-oriented-manifold]] defines $[M]$ and $[N]$ as the classes restricting to their specified local orientation generators.

[F4] [[def-degree-of-a-map-between-oriented-closed-manifolds]] defines the unique homological integer $d$ by $F_*[M]=d[N]$, including signed zero-manifolds.

[F5] [[thm-excision-for-singular-homology]] removes a closed set contained in the open complement of the finite fibre.

[F6] [[thm-singular-homology-satisfies-dimension-and-arbitrary-additivity]] identifies relative homology of a disjoint union with the direct sum of the relative groups.

[F7] [[prop-relative-homology-is-functorial-for-maps-of-pairs]] gives the commuting global-to-local maps, since all are induced by the same maps on quotient chains.

## Proof

**Given:** The smooth proper map and regular value in the statement; write $S=F^{-1}(y)$. For the comparison, suppose in addition that the two manifolds are compact.

1.1 The first formula and finiteness of $S$ are [F1]. By [F2], the supplied smooth orientations give compatible integral local generators $\mu_p$ on $M$ and $\nu_q$ on $N$. Thus [F3] supplies fundamental classes and [F4] supplies a unique integer $d$ with $F_*[M]=d[N]$. We will compute $d$ by restriction to the stalk at the specified value $y$, without any comparison of de Rham representatives with unspecified Kronecker pairings. [F1, F2, F3, F4, given]

2.1 First let $S=\{p_1,\ldots,p_m\}$ be nonempty. Choose pairwise disjoint open neighbourhoods $U_i$ of these finitely many points. Each can be small enough for the germ calculation in [F2] and contains no other point of $S$. Finite Hausdorff separations provide disjointness: for each distinct pair choose disjoint neighbourhoods and intersect the finitely many associated ones at each point. Let $U=\bigcup_iU_i$. The closed set $Z=M\setminus U$ lies in $M\setminus S$, which is open since a finite set is closed in a Hausdorff manifold. Therefore [F5] gives $$H_n(M,M\setminus S;\mathbb Z)\cong H_n(U,U\setminus S;\mathbb Z)\cong\bigoplus_{i=1}^m H_n(U_i,U_i\setminus\{p_i\};\mathbb Z),$$ the second isomorphism being [F6]. The coordinate projections of this identification agree, after local excision, with restriction to $H_n(M,M\setminus\{p_i\})$: on the $i$th summand this is inclusion, and every other summand lies wholly in the subspace $M\setminus\{p_i\}$ and therefore is zero in that quotient. [F2, F5, F6, F7, step 1.1]

2.2 If $S=\varnothing$, the map lands in $N\setminus\{y\}$. Its induced chain map becomes zero after quotient by that subspace. Consequently the restriction of $F_*[M]=d[N]$ at $y$ is zero, hence $d\nu_y=0$ and $d=0$. This equals the compact-support degree and empty signed sum in [F1]. This argument does not require the punctured target to be contractible. [F1, F2, F3, F4, F7, step 1.1]

3.1 Restrict $[M]$ to the group in step 2.1. By the defining local restrictions [F3] and the coordinate identification just proved, its components are exactly $(\mu_{p_1},\ldots,\mu_{p_m})$. Because $F(M\setminus S)\subset N\setminus\{y\}$, it gives a map of pairs $$(M,M\setminus S)\longrightarrow(N,N\setminus\{y\}).$$ On the $i$th summand its action is the local germ action from [F2], sending $\mu_{p_i}$ to $\varepsilon_i\nu_y$, where $\varepsilon_i=\operatorname{sgn}(dF_{p_i})$. Additivity and [F7] therefore send the restricted fundamental class to $(\sum_i\varepsilon_i)\nu_y$. [F2, F3, F6, F7, step 2.1]

4.1 The alternative route is to first apply $F_*$ to $[M]$ and then restrict at $y$. By [F7] these routes agree, since both are induced by $F_\#$ followed by the quotient by chains in $N\setminus\{y\}$. The first route gives $d\nu_y$ by [F3], [F4] and step 1.1; step 3.1 gives the other. The element $\nu_y$ is a generator of an infinite cyclic group by [F2], so $$d\nu_y=\left(\sum_i\varepsilon_i\right)\nu_y\quad\Longrightarrow\quad d=\sum_i\varepsilon_i.$$ Together with [F1] this proves equality of homological and compact-support degrees. [F1, F2, F3, F4, F7, step 1.1, step 3.1]

5.1 At $n=0$, each nonempty connected manifold is a point. By [F2] and [F4], $F_*(\varepsilon_M[p])=\varepsilon_M[q]=(\varepsilon_M\varepsilon_N)\varepsilon_N[q]$, so the homological coefficient equals the local ray sign and the compact-support degree in [F1]. At $n=1$ step 2.1 is an ordinary degree-one relative group calculation and the local sign computation in [F2] already uses the reduced $H_0$ difference of the two sides of a point. A singleton fibre and cancellation to degree zero are included in step 4.1. All maps are on unnormalized quotient chains, so no degenerate-simplex exception occurs. Only finitely many disjoint neighbourhoods for the given finite fibre are selected; [F1]–[F7] use no AC in these clauses. The common Euclidean orientation convention matters: negating it reverses both fundamental classes and leaves the homological coefficient unchanged. [F1, F2, F3, F4, F7, step 2.1, step 4.1, step 2.2] ∎
