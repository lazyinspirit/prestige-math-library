---
id: thm-morse-rearrangement-by-index
kind: theorem
title: "Rearrangement of critical levels by index"
status: draft
origin: pipeline
dependency_level: 4
deps: [cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points, def-morse-function-adapted-to-a-cobordism, lem-critical-values-of-disjoint-trajectory-closures-can-be-interchanged, lem-gradient-like-perturbation-separates-adjacent-critical-levels, def-morse-function-and-excellent-morse-function, def-countable-choice]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
sources:
  references:
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow), Sections 2-4, printed pp. 10-48"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
    - title: "Andrei Pajitnov, Circle-Valued Morse Theory (de Gruyter Studies in Mathematics 32), Chapter 5 Sections 1-3 (pp. 163-189) and Chapter 4 Section 3 (pp. 132-162)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/pajbook.pdf"
proof_strategy: "separation then adjacent exchange, bubble sort on finitely many levels"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(W;M_0,M_1)$ be a compact triad with adapted
excellent Morse function $f$ and adapted field $X$. Then there are an adapted
complete downward gradient-like field $X'$ for $f$ and an adapted excellent Morse function $g$ on
$W$, adjusted to $(f,X')$, such that $g(p)<g(q)$ whenever
$\operatorname{ind}(p)<\operatorname{ind}(q)$. Here "adjusted to $(f,X')$"
means: $g$ has the same critical points and indices as $f$, equals $f$ plus a
constant near each critical point, equals $f$ near $\partial W$, and $X'$ is
downward gradient-like for $g$.

## Facts & Assumptions

[F1] [[cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]] supplies finiteness (with the compact interior critical-set argument for a triad). [[def-morse-function-adapted-to-a-cobordism]]: An adapted pair $(f,X)$ on a compact triad has $f^{-1}(0)=M_0$, $f^{-1}(1)=M_1$, $f$ constant on the faces, all critical points interior, nondegenerate and outside a fixed collar, and $X$ a complete downward gradient-like field pointing outward along $M_0$ and inward along $M_1$; excellent means distinct critical points have distinct values.

[F2] [[lem-gradient-like-perturbation-separates-adjacent-critical-levels]]: Assume $\mathrm{AC}_\omega$. Let $f$ be adapted with field $X$ on a compact triad and let $P$ (value $c$), $Q$ (value $c'>c$) be consecutive critical levels with $\operatorname{ind}(p)\ge\operatorname{ind}(q)$ for all $p\in P$, $q\in Q$. For every neighbourhood $U$ of a regular level $f^{-1}(v)$, $c<v<c'$, there is a complete adapted downward gradient-like field $X'$ for $f$, equal to $X$ outside $U$, such that the crossing spheres satisfy $A_q\cap h(B_p)=\varnothing$, no trajectory of $X'$ has one limit in $P$ and the other in $Q$, and the trajectory sets in the two-critical-level band are disjoint; the field change may be arbitrarily small in $C^\infty$.

[F3] [[lem-critical-values-of-disjoint-trajectory-closures-can-be-interchanged]] reassigns the two cluster values arbitrarily inside a regular-endpoint band containing just those clusters, when there is no connecting trajectory. It keeps the current field, adds constants near the two clusters, and is the identity near the band endpoints and outside it.

[F4] [[def-morse-function-and-excellent-morse-function]]: $f$ is Morse when every critical point is nondegenerate, and excellent when in addition distinct critical points have distinct values.

[F5] [[def-countable-choice]]: $\mathrm{AC}_\omega$: every at most countable family of nonempty sets has a choice function.

## Proof

**Given:** The compact triad $(W;M_0,M_1)$ with adapted excellent Morse function $f$ and adapted field $X$. Denote this initial function by $f_0$ during the iteration; $f$ below denotes the current function.

1.1 Since $f$ is excellent and $W$ is compact, the critical values are pairwise distinct; order the critical levels (the sets of critical points sharing a value, each a singleton here) as $L_1,\dots,L_N$ with values $c_1<\dots<c_N$, and let $\lambda_i$ be the common index of the points of $L_i$. Call an adjacent pair $(L_i,L_{i+1})$ an inversion when $\lambda_i>\lambda_{i+1}$; the final goal $g(p)<g(q)$ whenever $\operatorname{ind}(p)<\operatorname{ind}(q)$ is exactly the condition that no inversion remains in the level ordering. [F1, F4, given, algebra]

2.1 Removing one inversion. Suppose $(L_i,L_{i+1})$ is an inversion, with $P:=L_i$ of index $\lambda>\lambda'=\lambda_{i+1}$, so that $\operatorname{ind}(p)\ge\operatorname{ind}(q)$ for all $p\in P$, $q\in Q:=L_{i+1}$. Pick regular values $a,b,d$ with $c_{i-1}<a<c_i<b<c_{i+1}<d<c_{i+2}$ (with the evident omissions at the ends) with $0<a<d<1$ so that $f^{-1}[a,d]$ contains exactly the critical points of $P\cup Q$. This band is compact and disjoint from $\partial W$, because the boundary values are zero and one. It therefore avoids a sufficiently small boundary neighbourhood, although it may meet the originally fixed critical-point-free collar. Apply [F2] with the regular value $v\in(b,c_{i+1})$ and a prescribed neighbourhood $U\subseteq f^{-1}(b,d)$ of $f^{-1}(v)$: choose its field change small enough also to preserve descent for $f_0$. This is possible by [F2]: on the compact regular perturbation band the inductively retained quantity $-df_0(X)$ has a positive minimum, and finite coordinate-chart bounds on $df_0$ make its pairing remain negative for every sufficiently small change of the field. The band has no original critical point because all critical sets have remained the same. Thus the lemma produces a complete adapted downward gradient-like field $X_1$ for both $f$ and $f_0$, equal to $X$ outside $U$, for which no trajectory has one limit in $P$ and the other in $Q$ and the compact trajectory sets are disjoint. [F2, F4, F5, step 1.1, choose]

3.1 Apply [F3] directly to the regular band $f^{-1}[a,d]$, with the current function and field, and choose $a_Q<a_P$ in $(b,c_{i+1})$. The new adapted excellent function has the same points and indices, only the two entries of its critical-value ordering transposed, and the same field is downward gradient-like for it. It equals the previous function plus constants near those points and equals it near all other critical points and the boundary. The same field still descends for $f_0$ by step 2.1, while the exchange alters no field. [F1, F3, step 2.1, construct]

4.1 Finite iteration. Repeat step 2.1 and step 3.1: whenever the current ordering of the $N$ levels contains an adjacent inversion, separate the two levels with the separation lemma and exchange them with the interchange lemma. Each exchange is an adjacent transposition of an inverted pair in the sequence of indices $(\lambda_1,\dots,\lambda_N)$ and strictly decreases the number of inversions of the sequence by one, so after at most $N(N-1)/2$ exchanges no adjacent inversion remains; the number of inversions is a nonnegative integer, so the process terminates. Every modification changes the function only inside a compact band around the two exchanged levels and changes the field only inside a prescribed neighbourhood of one regular level; the boundary model near $\partial W$ is never touched, each field is again complete and adapted by [F2] and [F3] and remains descending for $f_0$ by the smallness choice in step 2.1, and each function is obtained from the initial one by modifications supported in finitely many compact bands. [F2, F3, step 2.1, step 3.1, algebra]

5.1 Conclusion. Let $X'$ and $g$ be the final field and function produced by the terminating process of step 4.1. Then $X'$ is a complete adapted downward gradient-like field for both $f_0$ and $g$: the smallness invariant retains $df_0(X')<0$ off the common critical set, every field change is away from its critical charts, and every value change is constant in those charts, $g$ is Morse with the same critical points and indices as $f$, equals $f$ plus a constant near each critical point and $f$ near $\partial W$, and $X'$ is downward gradient-like for $g$ at every stage. Since the final level ordering of $g$ has no adjacent inversion, it is nondecreasing in the index, so $\operatorname{ind}(p)<\operatorname{ind}(q)$ implies $g(p)<g(q)$; this is Milnor's rearrangement by successive exchange of adjacent levels. [F2, F3, F4, step 4.1, algebra] ∎
