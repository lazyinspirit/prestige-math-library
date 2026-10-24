---
id: lem-continuous-functions-on-a-compact-metric-space-have-a-countable-dense-family
kind: lemma
title: A countable dense family of continuous functions on a compact metric space
deps: ["lem-compact-metric-space-has-a-countable-dense-subset", "lem-countable-iff-surjection-from-n", "thm-rationals-countable", "thm-product-of-countable", "thm-countable-union-of-countable", "lem-uniform-closure-of-a-real-function-algebra-is-a-lattice", "lem-two-point-interpolation-in-a-separating-real-function-algebra", "def-metric-compactness", "lem-q-and-irrationals-dense-r", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: E–W §1.4 pp.97–98, replacing weak-star compactness with the design-required local argument
      url: https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf
verification:
  audited: 2026-09-13
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Assume the Axiom of Countable Choice. If $(K,d)$ is a nonempty compact metric space, there is a sequence $(f_j)_{j\ge1}$ in $C(K,\mathbb R)$ such that for every $f\in C(K,\mathbb R)$ and $\varepsilon>0$ some $j$ satisfies $\|f-f_j\|_\infty<\varepsilon$. One may use all rational polynomials in finitely many distance functions to an enumerated dense subset, including the rational constant functions.

## Facts & Assumptions

[F1] Under $\mathrm{AC}_\omega$, compact metric spaces have at most countable dense subsets. [[lem-compact-metric-space-has-a-countable-dense-subset]].

[F2] A nonempty at most countable set admits an enumeration, with repetitions. [[lem-countable-iff-surjection-from-n]].

[F3] The rational numbers are countably infinite. [[thm-rationals-countable]].

[F4] Finite products of at most countable sets are at most countable, by induction on the number of factors. [[thm-product-of-countable]].

[F5] Under $\mathrm{AC}_\omega$, a countable union of at most countable sets is at most countable. [[thm-countable-union-of-countable]].

[F6] The uniform closure of a unital real function algebra is a lattice. The countable approximant selections in its proof are justified here by $\mathrm{AC}_\omega$. [[lem-uniform-closure-of-a-real-function-algebra-is-a-lattice]].

[F7] A unital separating real algebra interpolates prescribed values at two distinct points. [[lem-two-point-interpolation-in-a-separating-real-function-algebra]].

[F8] Every open cover of $K$ has a finite subcover. [[def-metric-compactness]].

[F9] Rational numbers are dense in the real numbers. [[lem-q-and-irrationals-dense-r]].

## Proof

**Given:** Assume the Axiom of Countable Choice. If $(K,d)$ is a nonempty compact metric space, there is a sequence $(f_j)_{j\ge1}$ in $C(K,\mathbb R)$ such that for every $f\in C(K,\mathbb R)$ and $\varepsilon>0$ some $j$ satisfies $\|f-f_j\|_\infty<\varepsilon$. One may use all rational polynomials in finitely many distance functions to an enumerated dense subset, including the rational constant functions.

1.1 By [F1] fix a countable dense subset $D$ of $K$. It is nonempty: otherwise no ball around a point of the nonempty space $K$ would meet it. By [F2] enumerate it as $(x_j)_{j\ge1}$. Put $h_j(x)=d(x,x_j)$. The triangle inequality gives $|h_j(x)-h_j(y)|\le d(x,y)$, so each $h_j$ is continuous. Every continuous real function $v$ on $K$ is bounded: the open sets $\{|v|<m\}$ for positive integers $m$ cover $K$, and a finite subcover yields a bound. Thus all supremum norms below are finite. [F1, F2, F8]

1.2 Let $A$ be the real algebra of finite polynomials in the $h_j$ and the constant function $1$, and let $Q$ be its subset with rational coefficients. These are continuous functions, since finite sums and products of continuous real functions are continuous. The set $Q$ is nonempty and at most countable: monomials are coded by finite lists of natural indices (the empty list codes $1$), and a polynomial is coded by a finite list of pairs consisting of a rational coefficient and such a monomial. Induction using [F4], and then [F5] over list lengths, makes both coding sets countable; their evaluation images are countable by composing an enumeration and using [F2]. This uses [F3] for the rational entries. The algebra $A$ separates distinct $x,y$: choose $x_j$ with $d(x,x_j)<d(x,y)/3$; then $h_j(y)>2d(x,y)/3>h_j(x)$. [1.1, F2, F3, F4, F5]

1.3 Write $H=\overline A$ in the supremum metric. It is a real vector space: if $u,v\in H$, choose approximants $a,b\in A$ within any prescribed positive errors and use $\|(u+v)-(a+b)\|_\infty\le\|u-a\|_\infty+\|v-b\|_\infty$, with the analogous scalar estimate. It is closed by the definition of closure. By [F6] it is closed under finite maximum and minimum. In applying that lemma, countable choice supplies its sequences of algebra approximants and polynomial approximants; the later diagonal indices can be taken least eligible integers. No arbitrary family indexed by $K$ is selected. [1.1, 1.2, F6]

1.4 Fix $f\in C(K,\mathbb R)$ and $\eta>0$. For a fixed $x\in K$, use the entire set $A_x=\{u\in A:u(x)=f(x)\}$. The open sets $\{u>f-\eta\}$, for all $u\in A_x$, cover $K$: at $y\ne x$, [F7] supplies one interpolant taking the values $f(x),f(y)$, while the constant $f(x)$ handles $y=x$. By [F8] finitely many of these open sets cover $K$; choose a representing function for each of these finitely many sets and form their maximum $g$. Then $g\in H$, $g(x)=f(x)$, and $g>f-\eta$ throughout $K$. Only finitely many existential witnesses were needed for this fixed $x$. [1.2, 1.3, F7, F8]

1.5 Use the entire set $G=\{g\in H:g>f-\eta\text{ on }K,\ g(x)=f(x)\text{ for some }x\in K\}$. The preceding step proves that the open sets $\{g<f+\eta\}$, for all $g\in G$, cover $K$, without selecting one $g$ for each $x$. A finite subcover and finitely many representatives give $g_1,\ldots,g_s$; their minimum $v\in H$ satisfies $f-\eta<v<f+\eta$ pointwise, hence $\|v-f\|_\infty\le\eta$. Given any $\delta>0$, take $\eta=\delta/3$ and an $a\in A$ with $\|a-v\|_\infty<\delta/3$. Then $\|a-f\|_\infty<\delta$. This proves density of $A$, including when $K$ is a singleton, for which constants alone interpolate. [1.3, 1.4, F8]

2.1 For $a=\sum_{i=1}^r c_i m_i\in A$, where the $m_i$ are monomials, let $M_i=\|m_i\|_\infty$. If $r=0$, then $a=0\in Q$. Otherwise, given $\delta>0$, use [F9] to choose rational $q_i$ with $|q_i-c_i|<\delta/[r(1+M_i)]$. The finite sum $q=\sum_i q_i m_i$ belongs to $Q$ and satisfies $\|a-q\|_\infty\le\sum_i|c_i-q_i|M_i<\delta$, even when some $M_i=0$. Approximate $f$ by $a$ within $\varepsilon/2$ using the preceding step, and $a$ by $q$ within $\varepsilon/2$. An enumeration of the nonempty countable $Q$ by [F2] is the required $(f_j)$. Countable choice has been used for the dense subset, the countable-union theorem, and the sequences in [F6]; all cover selections in the local density proof were finite. [1.1, 1.2, 1.5, F2, F6, F9] ∎

