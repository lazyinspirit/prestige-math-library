---
id: thm-finite-zero-marked-actual-index-one-strip-counts-under-an-energy-bound
kind: theorem
title: "Actual zero-marked index-one strips have finite translation quotients below an energy bound"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-divisor-degree-additivity-and-zero-marked-strip-bubble-exclusion, lem-zero-marked-bounded-energy-strip-regularity-survives-collar-approximation, lem-kernel-matching-and-index-additivity-for-unbubbled-strip-breaking, lem-higher-sobolev-strip-map-charts-and-cauchy-riemann-section, lem-countable-choice-quantitative-newton-correction-and-smooth-zero-chart, lem-strip-fredholm-index-agrees-in-higher-sobolev-spaces, lem-transverse-linear-strip-cauchy-riemann-isomorphism]
dependency_level: 13
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter Ozsvath and Zoltan Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/abs/math/0101206"
      locator: "Sections 3.7–3.8 finite rigid moduli; the actual bounded-energy proof is supplied below"
---

## Statement

Assume Countable Choice and the complete marked nearly symmetric geometry, protected neighborhoods and exact product generator charts of the zero-marked bubble-exclusion lemma. Fix $E_0<\infty$, end generators $x_-,x_+$, and an actual smooth path $J_t$ for which every nonconstant zero-marked strip of energy at most $E_0$ has surjective actual linearization. Such a path with genuine endpoint collars is supplied by the bounded-energy collar-openness lemma.

There are finitely many longitudinal-translation orbits of nonconstant zero-marked $J_t$ strips from $x_-$ to $x_+$ with energy at most $E_0$ and real Fredholm index one. This remains true simultaneously over the finite set of ordered end pairs. Their counts modulo two are therefore well-defined integers modulo two. The index is the actual $H^1\to L^2$ operator index, before translation quotient. No identification with a separately named Maslov or domain index is asserted, and the theorem supplies no energy bound for an unrestricted collection of Floer classes.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The actual compact geometry, fixed finite energy bound, chosen regular path and end generators in the statement.

[F1] [[lem-divisor-degree-additivity-and-zero-marked-strip-bubble-exclusion]] gives actual unbubbled finite breaking of such sequences and nonconstant limit levels. [[lem-kernel-matching-and-index-additivity-for-unbubbled-strip-breaking]] gives their actual operator-index sum when the levels are regular. [[lem-zero-marked-bounded-energy-strip-regularity-survives-collar-approximation]] supplies actual regular paths for each stipulated energy bound.

[F2] [[lem-higher-sobolev-strip-map-charts-and-cauchy-riemann-section]] gives the genuine second-countable $H^3\cap\mathcal X^1$ map manifold, the smooth $H^2$ section, all smooth finite-energy solutions in its charts and actual linearizations. [[lem-countable-choice-quantitative-newton-correction-and-smooth-zero-chart]] supplies actual split smooth zero charts for the bounded right inverses. [[lem-strip-fredholm-index-agrees-in-higher-sobolev-spaces]] gives the same index and surjectivity in those higher spaces.

[F3] [[lem-transverse-linear-strip-cauchy-riemann-isomorphism]] gives the actual exact whole-strip inverse; its higher realization is the one proved by the higher regularity supplier in [F2]. In particular its $H^2\to H^3$ inverse norm is finite. The exact generator ends of smooth finite-energy solutions have all-order exponential decay by the strip-chart supplier in [F2].



## Proof

1.1 Take any sequence of the strips in the statement. By [F1] a subsequence has actual unbubbled finite breaking. Every level has energy at most $E_0$, zero marked degrees and the fixed limiting path $J$, so it is regular by hypothesis. Each level is nonconstant. Here the finite-level kernel construction of [F1] applies using only regularity of these finitely many levels, without a claim that this path is regular at larger energies. To detail that point, choose their fixed right inverses and the actual core identifications and long squared cutoffs. The core operator errors tend to zero, and all tails are the exact product operator. Patching those inverses has error bounded by the core error plus the cutoff derivative bound; its Neumann correction gives a uniform actual right inverse at the sequence maps. Let $A_n$ cut and translate the finite component kernels, and let $S_n$ cut back and project with $I-Q_jD_j$. The finite-dimensional kernel tails give $S_nA_n\to I$. With $\Gamma_n=(I-Q_nD_n)A_n$, the same errors give $S_n\Gamma_n\to I$ and $\Gamma_nS_n\to I$ on the nearby kernel. Both Neumann inverses give a genuine kernel bijection, exactly as in the cited construction. Surjectivity makes their dimensions the actual indices. Each nonconstant regular level has a nonzero longitudinal-translation kernel. Thus the actual index sum has left side one and all summands at least one. It has exactly one summand, giving a single nonconstant index-one limit $v$ and translations $q_n$ with smooth convergence $u_n(s+q_n,t)\to v(s,t)$ on compact subsets, including boundary derivatives. Its energy is the limit of those of $u_n$, hence at most $E_0$. Its ends are the same original pair. There are no remaining bubble or breaking components. [F1, given, construct, algebra]

1.2 Every regular index-one solution $v$ is isolated modulo translation in that actual chart. Its higher linearization is onto of index one by [F2]; its kernel is one-dimensional. The genuine split zero-chart theorem in [F2] makes the zero set near $v$ an actual smooth one-dimensional manifold in the $H^3$ topology. The orbit map $a\mapsto v(s+a,t)$ is smooth into that topology: all derivatives are the longitudinal derivatives of the fixed smooth solution, which lie in every required Sobolev space on the ends by [F3] and on the compact core by smoothness. The difference-quotient identities follow by integrating those derivatives along $a$, giving differentiability and then all orders in $H^3$. Its derivative at zero is $v_s\ne0$; otherwise the equation would force $v_t=0$ and the map would be constant. Express this orbit in the one-dimensional zero chart. Its derivative is nonzero, so it maps a small interval onto an open interval there. Explicitly its scalar derivative keeps one sign near zero; the one-variable fundamental theorem and intermediate value theorem give a strictly monotone continuous inverse onto a neighborhood. Every sufficiently close solution therefore belongs to this one translation orbit. This uses an actual constructed zero chart and orbit, not an assumption that a formal quotient has dimension zero. [F2, F3, construct, algebra]

2.1 This convergence is in the actual global unweighted $H^3$ map-chart topology, not merely locally smooth. For sufficiently large fixed $A$, the two limit tails and all the corresponding sequence tails lie in their common exact generator charts, by the outer-tail conclusion in [F1]. There write $w_n$ for the difference of the coordinate maps of the translated $u_n$ and $v$. Both maps solve $D_0u=0$ there, so $D_0w_n=0$, and both have the same transverse linear boundary planes and limit zero at that end. Each difference is in $H^3$ on the end by its individual all-order exponential decay [F3]. Choose a smooth positive-end cutoff $\chi$ which is zero for $s\le A$ and one for $s\ge A+1$, and extend $\chi w_n$ by zero to the whole strip. The actual completed boundary domain is preserved, and $$D_0(\chi w_n)=\chi'w_n.$$ The right side tends to zero in $H^2$ by the already known smooth convergence on the fixed transition rectangle. The actual higher inverse in [F3] gives $\|\chi w_n\|_{H^3}\le C\|\chi'w_n\|_{H^2}\to0$. The same negative-end argument proves convergence on the other tail. On the compact core smooth convergence gives $H^3$ convergence, and the local-addition coordinate changes are smooth by [F2]. Their exact linearity near generators identifies these tail differences with chart differences. Thus the whole translated sequence converges to $v$ in its actual $H^3$ chart. [F1, F2, F3, step 1.1, construct, algebra]

3.1 We justify the countable representative selection without invoking dependent choice. The configuration manifold in [F2] is second-countable, and step 1.2 makes every one of these solution orbits open in their solution subspace. Its quotient by translations is therefore a discrete space with a countable base: images of saturated basis unions supply a countable base, since saturation of an open set is the union of its fixed translates, and every fixed translation is a homeomorphism by the same composition estimates as [F2]. A discrete second-countable space is countable, by assigning each point its least isolating basis index. If the set of these orbits is infinite, list distinct ones by their increasing assigned indices and use Countable Choice to select one representative from each. Apply steps 1.1 and 2.1 to this sequence. Translated representatives converge in $H^3$ to $v$, and step 1.2 puts all sufficiently late representatives in the single orbit of $v$, contradicting pairwise distinctness. Thus the orbit set is finite. Its cardinality modulo two is well-defined. There are only finitely many end pairs, so their union is finite as well. No domain-index formula, unrestricted energy bound or index-two cancellation statement has been used. [F1, F2, step 1.1, step 2.1, step 1.2, construct, algebra] ∎
