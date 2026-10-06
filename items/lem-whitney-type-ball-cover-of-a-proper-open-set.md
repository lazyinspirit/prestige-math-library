---
id: lem-whitney-type-ball-cover-of-a-proper-open-set
kind: lemma
title: "Whitney-type ball cover with disjoint small balls and bounded overlap"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [lem-distance-to-set-is-lipschitz, def-metric-ball, lem-q-and-irrationals-dense-r, thm-rationals-countable, def-countable-choice, lem-sphere-and-ball-measures-scale, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, thm-lebesgue-measure-is-a-complete-measure, prop-measure-monotonicity]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Shai Dekel, Gerard Kerkyacharian, George Kyriazis, Pencho Petrushev, A New Proof of the Atomic Decomposition of Hardy Spaces, Constructive Theory of Functions (Sozopol 2016), pp. 59-73"
      url: "https://people.math.sc.edu/pencho/Publications/DKKP-Sozopol-2016.pdf"
      locator: "Lemma 3 and its proof, printed pp. 68-69 (PDF pp. 10-11): properties (a)-(d) of the Whitney-type cover"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Remark 1.11, printed pp. 12-13: disjointness, size comparison and bounded touching properties"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $n\ge1$ and let $\Omega\subseteq\mathbb R^n$ be nonempty, open and proper.
Put $\rho(x)=\operatorname{dist}(x,\mathbb R^n\setminus\Omega)$ for
$x\in\mathbb R^n$. Then there is a countable family of points
$\xi_j\in\Omega$, $j\in\mathbb N$, with $\rho_j:=\rho(\xi_j)$, such that

1. $\Omega=\bigcup_jB(\xi_j,\rho_j/2)$;
2. the balls $B(\xi_j,\rho_j/8)$ are pairwise disjoint (the source's maximal-selection construction records $\rho_j/5$, which the present choice-free greedy selection replaces by the fixed larger constant $8$; only the existence of a fixed constant matters below);
3. if $B(\xi_j,3\rho_j/4)\cap B(\xi_\nu,3\rho_\nu/4)\ne\varnothing$, then $\tfrac17\rho_j\le\rho_\nu\le7\rho_j$;
4. for every $j$ at most $K(n):=785^n$ of the balls $B(\xi_\nu,3\rho_\nu/4)$ meet $B(\xi_j,3\rho_j/4)$.

The family is the greedy subfamily of the countable rational grid
$\{B(q,\rho(q)):q\in\Omega\cap\mathbb Q^n\}$: the grid is enumerated by
restriction of a fixed enumeration of $\mathbb Q^n$, and the point $q^{(j)}$ is
selected exactly when $B(q^{(j)},\rho(q^{(j)})/8)$ meets none of the balls
$B(q^{(i)},\rho(q^{(i)})/8)$ with $i<j$ already selected. In
particular no maximality principle and no choice beyond Countable Choice is
used.

## Facts & Assumptions

**Given:** $n\ge1$, $\Omega$ nonempty, open and proper, and the distance function $\rho$ as in the statement.

[L1] Since $\Omega$ is proper, $A=\mathbb R^n\setminus\Omega$ is nonempty, so $\rho(x)=\inf_{a\in A}|x-a|$ is finite and $|\rho(x)-\rho(y)|\le|x-y|$ by [[lem-distance-to-set-is-lipschitz]]. If $x\in\Omega$, openness gives $r>0$ with $B(x,r)\subseteq\Omega$, hence $\rho(x)\ge r>0$; if $x\notin\Omega$, then $x\in A$ and $\rho(x)=0$. Here $B(x,r)=\{y:|y-x|<r\}$ as in [[def-metric-ball]].

[L2] $\mathbb Q^n$ is countable and dense in $\mathbb R^n$, so $\mathbb Q^n$ admits a fixed enumeration $q^{(0)},q^{(1)},\dots$ and every nonempty open subset of $\Omega$ contains a point of $\Omega\cap\mathbb Q^n$ ([[thm-rationals-countable]], [[lem-q-and-irrationals-dense-r]]).

[L3] For every $a\in\mathbb R^n$ and $r>0$, $\lambda(B(a,r))=c_nr^n$ with $c_n=\omega_{n-1}/n>0$; this follows from the centred-ball formula and translation invariance. Lebesgue measure is finitely additive on disjoint measurable sets and monotone. Hence a finite family of pairwise disjoint open balls of common radius $r>0$ with centres in a ball of radius $R$ has at most $(2R/r+1)^n$ members: they lie in the ball of radius $R+r$, and comparing the volume of their union with that containing ball gives the bound ([[lem-sphere-and-ball-measures-scale]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[thm-lebesgue-measure-is-a-complete-measure]], [[prop-measure-monotonicity]]).



**Proof technique:** greedy selection on the countable rational grid, then the covering, comparison and packing estimates.

## Proof

**Proof technique:** constructive.

1.1 Grid covers $\Omega$. For $x\in\Omega$ and $\delta=\rho(x)/64>0$, density [L2] gives $q\in\Omega\cap\mathbb Q^n$ with $|x-q|<\delta$. Then [L1] gives $\rho(q)\ge\rho(x)-|x-q|>(63/64)\rho(x)$, so $\rho(q)>0$ and $|x-q|<\rho(x)/64<\rho(q)/2$; hence $x\in B(q,\rho(q)/2)$. Thus $\{B(q,\rho(q)/2):q\in\Omega\cap\mathbb Q^n\}$ covers $\Omega$. [L1, L2, algebra, construct]

1.2 Greedy selection. Enumerate $\Omega\cap\mathbb Q^n$ as $q^{(0)},q^{(1)},\dots$ by restriction of the fixed enumeration of $\mathbb Q^n$. Define $J\subseteq\mathbb N$ recursively: $j\in J$ if and only if the ball $B(q^{(j)},\rho(q^{(j)})/8)$ meets none of the balls $B(q^{(i)},\rho(q^{(i)})/8)$ with $i<j$, $i\in J$; the decision at step $j$ depends only on finitely many previous data, so this is a deterministic recursion requiring no choice. Writing $\xi_j=q^{(j)}$ and $\rho_j=\rho(\xi_j)$ for $j\in J$, the selected balls $B(\xi_j,\rho_j/8)$ are pairwise disjoint by construction. [L2, given]

2.1 Covering property. Let $x\in\Omega$ and let $q=q^{(j)}\in\Omega\cap\mathbb Q^n$ satisfy $|x-q|<\rho(x)/64$, which exists by density [L2]. If $j\in J$, then $|x-\xi_j|=|x-q|<\rho(x)/64$ and $\rho_j=\rho(q)>63\rho(x)/64$, so $|x-\xi_j|<\rho(x)/64<\rho_j/63<\rho_j/2$ and $x\in B(\xi_j,\rho_j/2)$. If $j\notin J$, then at step $j$ the ball $B(q,\rho(q)/8)$ met some selected ball $B(\xi_i,\rho_i/8)$ with $i<j$, so $$|q-\xi_i|<\frac{\rho(q)+\rho_i}{8},\qquad\text{hence}\qquad \rho(q)\le\rho_i+|q-\xi_i|<\rho_i+\frac{\rho(q)+\rho_i}{8},$$ which gives $\tfrac78\rho(q)<\tfrac98\rho_i$, that is $\rho(q)<\tfrac97\rho_i$. Therefore $|q-\xi_i|<\tfrac{1}{8}(\tfrac97+1)\rho_i=\tfrac27\rho_i<\tfrac12\rho_i$, and, since $|x-q|<\rho(x)/64$ while $\rho(x)\le\rho(q)+|x-q|<\rho(q)+\rho(x)/64$ gives $\rho(x)<\tfrac{64}{63}\rho(q)<\tfrac{64}{63}\cdot\tfrac97\rho_i=\tfrac{64}{49}\rho_i$, we obtain $$|x-\xi_i|\le|x-q|+|q-\xi_i|<\frac{\rho(x)}{64}+\frac{2}{7}\rho_i<\frac{1}{49}\rho_i+\frac{2}{7}\rho_i=\frac{15}{49}\rho_i<\frac12\rho_i .$$ Hence $x\in B(\xi_i,\rho_i/2)$ in this case as well, which proves claim 1. [step 1.1, step 1.2, L1, L2, algebra]

2.2 Comparison of meeting balls. Suppose $B(\xi_j,3\rho_j/4)\cap B(\xi_\nu,3\rho_\nu/4)\ne\varnothing$. Then $|\xi_j-\xi_\nu|<\tfrac34(\rho_j+\rho_\nu)$ and [L1] gives $\rho_j\le\rho_\nu+|\xi_j-\xi_\nu|<\rho_\nu+\tfrac34\rho_j+\tfrac34\rho_\nu$, hence $\tfrac14\rho_j<\tfrac74\rho_\nu$, that is $\rho_j<7\rho_\nu$; interchanging $j,\nu$ gives the reverse inequality. This proves claim 3. [step 1.2, L1, algebra]

3.1 Bounded overlap. Fix $j$ and let $\mathcal N$ be the set of $\nu$ with $B(\xi_\nu,3\rho_\nu/4)\cap B(\xi_j,3\rho_j/4)\ne\varnothing$. For $\nu\in\mathcal N$ step 2.2 gives $\rho_\nu\le7\rho_j$, and $|\xi_\nu-\xi_j|<\tfrac34(\rho_j+\rho_\nu)\le6\rho_j$. The selected balls $B(\xi_\nu,\rho_\nu/8)$ are pairwise disjoint, and their radii satisfy $\rho_\nu/8\ge r:=\rho_j/56$. Thus the smaller balls $B(\xi_\nu,r)$, $\nu\in\mathcal N$, remain pairwise disjoint. Their centres lie in $B(\xi_j,6\rho_j)$, so each smaller ball lies in $B(\xi_j,6\rho_j+r)\subset B(\xi_j,7\rho_j)$. For any finite subfamily, finite additivity and the ball-volume formula [L3] give $$\#\mathcal F\,c_nr^n\le c_n(7\rho_j)^n,$$ so $\#\mathcal F\le(7\rho_j/r)^n=392^n\le785^n$. Hence $\mathcal N$ itself has at most $785^n$ members. This proves claim 4. [step 1.2, step 2.2, L3, algebra]

4.1 Conclusion. Steps 1.1 and 1.2 provide a countable greedy family with covering property 1 and pairwise disjoint $B(\xi_j,\rho_j/8)$; step 2.1 proves the covering property 1, step 2.2 gives the comparison property 3; step 3.1 gives the explicit finite overlap bound of property 4. This proves the lemma. [step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, discharge-construct] ∎
