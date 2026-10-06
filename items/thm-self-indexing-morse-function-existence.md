---
id: thm-self-indexing-morse-function-existence
kind: theorem
title: "Self-indexing Morse functions exist"
status: published
origin: pipeline
dependency_level: 5
deps: [thm-morse-rearrangement-by-index, lem-critical-values-of-disjoint-trajectory-closures-can-be-interchanged, lem-gradient-like-perturbation-separates-adjacent-critical-levels, lem-increasing-reparametrization-of-finitely-many-critical-levels, def-morse-function-adapted-to-a-cobordism, def-morse-function-and-excellent-morse-function, thm-morse-functions-and-handle-decompositions-correspond, thm-morse-lemma, def-downward-gradient-like-vector-field, thm-collar-neighborhood-theorem, def-countable-choice, lem-manifold-bump-for-a-compact-set-inside-an-open-set, thm-compactly-supported-vector-fields-are-complete, lem-interior-slab-handle-attachment]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow), Sections 2-4, printed pp. 10-48"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
    - title: "Andrei Pajitnov, Circle-Valued Morse Theory (de Gruyter Studies in Mathematics 32), Chapter 5 Sections 1-3 (pp. 163-189) and Chapter 4 Section 3 (pp. 132-162)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/pajbook.pdf"
proof_strategy: "merge equal-index levels, then reparametrize and patch the field near critical points"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(W;M_0,M_1)$ be a compact triad with adapted
excellent Morse function $f$ and adapted field $X$. Then there are an adapted
complete downward gradient-like field $X'$ and an adapted Morse function $g$
with the same critical points and indices as $f$, equal to $f$ near
$\partial W$, such that all critical points of a given index $k$ lie at one
common level and the common levels increase strictly with $k$: there is a
strictly increasing $\phi:\{0,\dots,n\}\to(0,1)$ with
$g(p)=\phi(\operatorname{ind}p)$ for every critical point $p$. After composing
with a boundary-fixing increasing diffeomorphism of $[0,1]$ one may take
$g(p)=(\operatorname{ind}p+1)/(n+2)$. Consequently the handle decomposition
attaches all index-$k$ handles at the single level of index $k$, before all
handles of index $k+1$.

## Facts & Assumptions

[F1] [[thm-morse-rearrangement-by-index]]: Assume $\mathrm{AC}_\omega$. On a compact triad with adapted excellent $f$ and field $X$ there are an adapted complete downward gradient-like field $X'$ for both $f$ and $g$ and an adapted excellent Morse function $g$, adjusted to $(f,X')$, such that $g(p)<g(q)$ whenever $\operatorname{ind}(p)<\operatorname{ind}(q)$; that is, the critical levels ordered by value have nondecreasing indices.

[F2] [[lem-gradient-like-perturbation-separates-adjacent-critical-levels]]: Assume $\mathrm{AC}_\omega$. Let $P$ (value $c$), $Q$ (value $c'>c$) be consecutive critical levels with $\operatorname{ind}(p)\ge\operatorname{ind}(q)$ for all $p,q$. For every neighbourhood $U$ of a regular level $f^{-1}(v)$, $c<v<c'$, there is a complete adapted downward gradient-like field for $f$, equal to the old field outside $U$, such that no trajectory has one limit in $P$ and the other in $Q$ and the compact trajectory sets are disjoint; the field change may be arbitrarily small in $C^\infty$.

[F3] [[lem-critical-values-of-disjoint-trajectory-closures-can-be-interchanged]]: Assume $\mathrm{AC}_\omega$. In a compact regular-endpoint band $f^{-1}[u,v]$ whose only critical points form two finite clusters, with no trajectory from the upper cluster to the lower one, any two target values in $(u,v)$ may be prescribed, including equal targets. The function is unchanged near the end levels and outside the band, and is translated near each critical point; the same field remains downward gradient-like.

[F4] [[lem-increasing-reparametrization-of-finitely-many-critical-levels]]: Assume $\mathrm{AC}_\omega$. For strictly increasing sequences $0<c_0<\dots<c_m<1$ and $0<d_0<\dots<d_m<1$ there is a smooth diffeomorphism $\psi:[0,1]\to[0,1]$ with $\psi'>0$, $\psi=\mathrm{id}$ near $0$ and $1$, and $\psi(c_j)=d_j$ for all $j$; it may have derivative one near every $c_j$.

[F5] [[def-morse-function-adapted-to-a-cobordism]], [[def-morse-function-and-excellent-morse-function]] and [[def-downward-gradient-like-vector-field]]: adaptedness of a pair combines the boundary behaviour with the existence of a complete downward gradient-like field, and being downward gradient-like means: negative directional derivative off the critical set, and the exact model form in Morse coordinates at each critical point.

[F6] [[thm-morse-lemma]]: near a nondegenerate critical point of index $\lambda$ there are coordinates with $h=h(p)-\sum_{i\le\lambda}(x^i)^2+\sum_{i>\lambda}(x^i)^2$.

[F9] [[def-countable-choice]]: $\mathrm{AC}_\omega$: every at most countable family of nonempty sets has a choice function.

## Proof

**Given:** The compact triad $(W;M_0,M_1)$ with adapted excellent Morse function $f$ and adapted field $X$, and $n=\dim W$.

1.1 Start with the rearrangement theorem: by [F1] there are an adapted complete downward gradient-like field $X_0$ for $g_0$ and a Morse $g_0$ adjusted to $(f,X_0)$ whose critical levels, ordered by value, have nondecreasing indices; $X_0$ is also gradient-like for the initial $f$. List the critical levels of $g_0$ in increasing order of value as $E_1,\dots,E_N$, with $\mu_1\le\mu_2\le\dots\le\mu_N$ their indices. For a fixed index $k$, the levels with $\mu_i=k$ occur consecutively in this list, and the union of their points is again a set of critical points of common index $k$. [F1, F5, given, algebra]

2.1 Merging two adjacent equal-index levels. Suppose the consecutive levels $E_i,E_{i+1}$ both consist of points of one index $k$, with values $c_i<c_{i+1}$, and no other critical value between them. Apply [F2] with $P:=E_i$, $Q:=E_{i+1}$ and a regular value $v\in(c_i,c_{i+1})$, which is legitimate since $\operatorname{ind}(p)=k\ge k=\operatorname{ind}(q)$ for all $p,q$: choose the field change arbitrarily small, as permitted by [F2], so that it also retains descent for the initial $f$ by the compact-band pairing estimate in the rearrangement proof. There is then a complete adapted field $X_1$ for both $g_0$ and $f$, equal to $X_0$ outside a prescribed neighbourhood of $g_0^{-1}(v)$, with no trajectory of $X_1$ having one limit in $E_i$ and the other in $E_{i+1}$. Then apply [F3] to the regular band $g_0^{-1}[a,b]$ spanned by regular values $a<c_i<c_{i+1}<b$ adjacent to the two levels, whose critical set in that band is exactly $E_i\cup E_{i+1}$, with equal prescribed values $a_P=a_Q\in(c_i,c_{i+1})$; this produces a Morse $g_1$ on the sub-triad with the same critical points and indices, both sets now at a common value, equal to $g_0$ outside a compact neighbourhood of the band and equal to $g_0$ plus a constant near each critical point, with $X_1$ still downward gradient-like. Extending by $g_0$ outside gives a function $g_1$ on $W$ with the same critical points and indices, equal to $g_0$ near $\partial W$ and outside the band, for which $X_1$ is adapted and downward gradient-like, and in which the two levels have been merged into one. [F2, F3, F9, step 1.1, construct]

3.1 Iteration. Repeat step 2.1: while two consecutive levels of the same index exist, separate them with the perturbation of [F2] and merge them with the exchange of [F3]. Each step strictly decreases the number of distinct critical levels and leaves unchanged the multiset of indices of the critical points; the number of levels is a nonnegative integer bounded below by the number of distinct indices present, so after finitely many steps all critical points of a given index $k$ lie at one common level $c_k$, and the levels $c_{k_1}<\dots<c_{k_m}$ of the indices $k_1<\dots<k_m$ that occur are strictly increasing with the index. Each modification is supported in a compact band around the two levels being merged or in a neighbourhood of one regular level, so the boundary behaviour near $\partial W$ is unchanged throughout and every intermediate field is complete and adapted. [F2, F3, step 2.1, algebra]

4.1 Reparametrization of the values. Let $g_m$ be the function obtained at the end of step 3.1, with critical points of index $k_j$ at the common level $c_{k_j}$, and let $X_m$ be its adapted field. Put $d_{k_j}:=(k_j+1)/(n+2)$; these form a strictly increasing sequence in $(0,1)$. By [F4] there is a smooth increasing diffeomorphism $\psi:[0,1]\to[0,1]$ with $\psi=\mathrm{id}$ near $0$ and $1$, derivative one near every $c_{k_j}$, and $\psi(c_{k_j})=d_{k_j}$ for every $j$. Define $h:=\psi\circ g_m$: it is Morse with the same critical points and indices, since $\operatorname{Hess}_p h=\psi'(g_m(p))\operatorname{Hess}_p g_m$ with $\psi'>0$, it equals $g_m$, hence $f$, near $\partial W$, and $h(p)=d_{\operatorname{ind}p}=(\operatorname{ind}p+1)/(n+2)$ at every critical point. [F4, F5, F6, step 3.1, construct]

5.1 By the derivative-one choice in [F4], $h$ is $g_m$ plus a constant near every critical point. The old exact Morse coordinates and field model therefore remain valid for $h$, while $dh(X_m)=\psi'(g_m)dg_m(X_m)<0$ at every regular point. Take $X'=X_m$, with its existing complete collar carrier and boundary directions. [F4, F5, step 4.1, algebra]

6.1 The pair $(g,X')=(h,X_m)$ is adapted, has the original critical points and indices and boundary function, and satisfies $g(p)=(\operatorname{ind}p+1)/(n+2)$. The simultaneous form of [[lem-interior-slab-handle-attachment]] gives one handle per point, with all handles of each index at that common level. The empty critical set uses the identity reparametrization and the given pair. The final field is gradient-like for $g$ and also for the initial $f$, by the smallness invariant and the unchanged local models. [F5, step 3.1, step 4.1, step 5.1, algebra] ∎