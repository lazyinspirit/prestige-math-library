---
id: lem-order-semicontinuity-and-snc-strata
kind: lemma
title: Order functions and normal-crossings strata are upper semicontinuous
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
deps:
- def-canonical-resolution-invariants
- def-coherent-module-scheme
- def-dimension-noetherian-topological-space
- def-locally-noetherian-and-noetherian-scheme
- def-order-of-an-ideal-sheaf-at-a-point
- def-simple-normal-crossings-divisors
- lem-derivative-ideals-have-the-same-support
- def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)
    url: https://arxiv.org/pdf/math/0401401
  - title: 'Herwig Hauser, The Hironaka theorem on resolution of singularities (or: A proof we always wanted to understand), Bull. Amer. Math. Soc. 40 (2003) 323-403'
    url: https://homepage.univie.ac.at/herwig.hauser/Publications/hauser%20hironaka%20thm%20bams.pdf
---

## Statement

Assume AC ([[def-axiom-of-choice]]) and let $K$ be perfect. Let $X$ be a smooth $K$-scheme, $\mathcal I\subseteq\mathcal O_X$ a nonzero coherent ideal sheaf and $E$ a finite family of divisors in simultaneous SNC position ([[def-simple-normal-crossings-divisors]]).
(1) The function $x\mapsto\operatorname{ord}_x(\mathcal I)$ is upper semicontinuous: for every $k\ge1$ the set $\{x:\operatorname{ord}_x(\mathcal I)\ge k\}$ is closed. If $\operatorname{char}K=0$ or $\operatorname{char}K=p\ge k$, then this set equals $V(\mathcal D^{k-1}(\mathcal I))$ ([[lem-derivative-ideals-have-the-same-support]]).
(2) The function $s_E(x):=\#\{D\in E : x\in D\}$ is upper semicontinuous and locally constant on the finite stratification of $X$ by the sets of members of $E$ through a point; for every $k$ the set $\{x:s_E(x)\ge k\}$ is a finite union of closed subsets, hence closed.
(3) A finite lexicographic tuple of upper semicontinuous functions with locally finite ranges is upper semicontinuous; so is a finite maximum of such tuples. Application to the piecewise-defined resolution invariants requires the branchwise induction in the canonical-resolution proposition below (source Proposition 3.0.8), rather than following merely from a definition.

## Facts & Assumptions

**Given:** A smooth $K$-scheme $X$, a nonzero coherent ideal sheaf $\mathcal I\subseteq\mathcal O_X$, and a finite family $E$ of divisors in simultaneous SNC position.

[F1] [[lem-derivative-ideals-have-the-same-support]]: for every $k\ge1$, $\operatorname{supp}(\mathcal I,k)=\{x:\operatorname{ord}_x\mathcal I\ge k\}$ is closed over the perfect field $K$ in every characteristic. In characteristic zero or characteristic $p>k$, it equals $V(\mathcal D^{k-1}(\mathcal I))$; the endpoint case $p=k$ is proved directly in step 1.1.

[F2] [[def-simple-normal-crossings-divisors]]: at every point $p$ the components of the members of $E$ through $p$ are cut out by pairwise distinct elements of a regular system of parameters of $\mathcal O_{X,p}$; in particular each member $D$ of $E$ has a zero locus that is closed, and only finitely many members pass through a given point.

[F3] Upper semicontinuity for a function to a linearly ordered set means that $\{x:f(x)\ge a\}$ is closed for every threshold $a$ in that order. In particular, for integer- or rational-valued functions it is not enough to check integer thresholds unless the range is known to lie in a discrete sublattice.

[F4] [[def-locally-noetherian-and-noetherian-scheme]], [[def-coherent-module-scheme]], [[lem-derivative-ideals-have-the-same-support]]: on a quasi-compact Noetherian open, for any coherent ideal $J$ the closed order-superlevel sets $\{x:\operatorname{ord}_x(J)\ge k\}$ descend with $k$ and therefore stabilize, by the perfect-field closedness in [F1] (the zero ideal gives the whole open at every level). The order consequently has only finitely many finite values there, together with the value $+\infty$ on the stable intersection. No derivative-ideal equality is used for this bound.

[F6] Finite lexicographic assembly preserves upper semicontinuity under the local finite-range bounds just established. For two coordinates $f,g$ with finite local ranges, the lexicographic superlevel set at $(a,b)$ is $\{f>a\}\cup(\{f=a\}\cap\{g\ge b\})$. The first set is a finite union of closed superlevel sets; any limit point of the second either has $f>a$ or has $f=a$ and $g\ge b$, since both superlevel sets are closed. Induction gives the result for every finite tuple. A finite maximum of such tuples is upper semicontinuous because its superlevel set is the union of the component superlevel sets.

## Proof

1.1 The order function is upper semicontinuous and the derivative formula holds in the stated range. The superlevel set for $k$ is closed by [F1] in every characteristic. If $\operatorname{char}K=0$ or $p>k$, the formula with $V(\mathcal D^{k-1}(\mathcal I))$ is [F1]. For the remaining safe endpoint $p=k$, first suppose $\operatorname{ord}_x(\mathcal I)\ge k$. Every coordinate derivative of order $r\le k-1$ lowers order by at most $r$, so $\mathcal D^{k-1}(\mathcal I)_x\subseteq\mathfrak m_x$ and $x\in V(\mathcal D^{k-1}(\mathcal I))$. If instead $j:=\operatorname{ord}_x(\mathcal I)<k$, choose $f\in\mathcal I_x$ with order $j$ and a nonzero monomial $cU^\alpha$ in its degree-$j$ initial form. Then $|\alpha|=j\le k-1$ and $\partial^\alpha f$ has nonzero residue $c\alpha!$ in $\kappa(x)$, since every factor in $\alpha!$ is less than $p=k$. This derivative lies in $\mathcal D^{k-1}(\mathcal I)_x$, so that ideal is a unit at $x$ and $x\notin V(\mathcal D^{k-1}(\mathcal I))$. Thus the formula holds also for $p=k$, proving assertion (1). [F1, F3]

1.2 The normal-crossings count is upper semicontinuous. For a finite set $J$ of members of $E$ the set $\{x:x\in D\text{ for all }D\in J\}=\bigcap_{D\in J}D$ is closed by [F2], and $\{x:s_E(x)\ge k\}$ is the finite union of these intersections over the $k$-element subsets $J$; hence it is closed, and the function is upper semicontinuous. On the locally closed stratum where exactly the members of $J$ pass through the point, $s_E$ is constant equal to $|J|$; these finitely many strata cover $X$ locally because $E$ is finite and its members have SNC, so only finitely many subsets occur locally at a point [F2]. This is assertion (2). [F2, F3]

2.1 Work on an open neighbourhood where $f,g$ have finite ranges; the order functions satisfy this bound by [F4]. For a lexicographic threshold $(a,b)$, the superlevel set is $\{f>a\}\cup(\{f\ge a\}\cap\{g\ge b\})$. Since $f$ has finite range locally, $\{f>a\}$ is a finite union of closed superlevel sets, and the second set is closed by upper semicontinuity. Thus this union is closed. Induction gives the same result for a finite tuple; the superlevel set of a finite maximum is the finite union of the corresponding closed sets. This proves (3). It makes no claim that an unspecified piecewise assembly has satisfied these hypotheses. [F3, F4, F6, algebra] ∎
