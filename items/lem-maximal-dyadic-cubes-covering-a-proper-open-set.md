---
id: lem-maximal-dyadic-cubes-covering-a-proper-open-set
kind: lemma
title: Maximal dyadic cubes covering a proper open set
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-dyadic-cube-in-rn-all-generations, lem-dyadic-cubes-all-generations-partition-and-nesting, def-countable-choice, thm-lebesgue-measure-under-dilations-and-reflections, thm-rational-points-and-boxes-in-rn, lem-subset-of-countable, def-metric-ball, def-metric-topology, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, thm-of-archimedean]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Appendix J.1, the Whitney decomposition of an open set (construction from the annuli $\\Omega_k$, maximal cubes of $F'$, properties (a) and (b)), printed pp. 609-610; §7.4.2, the properties of the Whitney cubes $Q_j$ used in the proof of Theorem 7.4.3 (the sets $Q_j^*,Q_j^{**}$ and the point $y_j$), printed pp. 533-534"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "ch. 1 §1.2, the dyadic grid and maximal cubes, printed pp. 9-13"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $n\ge1$ and
let $\Omega\subseteq\mathbb R^n$ be a nonempty, open and proper subset of
$\mathbb R^n$. Use the all-generations dyadic cubes of
[[def-dyadic-cube-in-rn-all-generations]]; for a dyadic cube $Q$ and $\lambda>0$
let $\lambda Q$ denote the concentric cube with side length $\lambda$ times that
of $Q$, and write $\ell(Q)$ for the side length. Put
$$\mathcal F:=\{\,Q\text{ dyadic}:5\sqrt n\,Q\subseteq\Omega\,\}.$$
Then:

1. $\mathcal F$ possesses maximal elements, i.e. cubes of $\mathcal F$ that are
   contained in no strictly larger cube of $\mathcal F$.
2. The maximal elements of $\mathcal F$ are pairwise disjoint, they are at most
   countable, and their union is exactly $\Omega$.
3. If $Q$ is a maximal element of $\mathcal F$ and $P$ is its dyadic parent,
   then $P\subseteq3Q$ and $P\notin\mathcal F$, so some $y\in5\sqrt n\,P$
   satisfies $y\notin\Omega$; every such $y$ obeys $|x-y|\le6n\sqrt n\,\ell(Q)$ for all
   $x\in Q$. In particular $\operatorname{dist}(Q,\Omega^c)\le6n\sqrt n\,\ell(Q)$ while
   $5\sqrt n\,Q\subseteq\Omega$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, a nonempty open proper $\Omega$, and the family $\mathcal F$ of the Statement.

[F1] A dyadic cube $Q_{k,m}$ with $k\in\mathbb Z$, $m\in\mathbb Z^n$ is the half-open box $\{\,x:m_i2^{-k}<x_i\le(m_i+1)2^{-k}\text{ for all }i\,\}$ of side $\ell(Q_{k,m})=2^{-k}$, it contains its centre $c(Q_{k,m})=((m_i+\tfrac12)2^{-k})_{i}$, and two dyadic cubes of generations $k\le k'$ that meet satisfy $Q_{k',m'}\subseteq Q_{k,m}$ ([[def-dyadic-cube-in-rn-all-generations]], [[lem-dyadic-cubes-all-generations-partition-and-nesting]]).

[F2] A subset of $\mathbb R^n$ is open in the metric topology when every point of it has a Euclidean ball around it contained in it ([[def-metric-topology]], [[def-metric-ball]]), and the Euclidean, $\ell^1$ and $\ell^\infty$ data satisfy $d_2(x,y)=\lVert x-y\rVert_2\le\lVert x-y\rVert_1\le n\,d_\infty(x,y)$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]).

[F3] The set $\mathbb Q^n$ is at most countable ([[thm-rational-points-and-boxes-in-rn]]) and a subset of an at most countable set is at most countable ([[lem-subset-of-countable]]).

[F4] For every real $M$ there is a natural number $k$ with $M<k$ ([[thm-of-archimedean]]).

## Proof

**Proof technique:** direct.

1.1 $\mathcal F$ is nonempty and covers $\Omega$ locally: fix $x\in\Omega$; by [F2] there is $r>0$ with $B_2(x,r)\subseteq\Omega$. Choose $k$ with $3n\sqrt n\,2^{-k}<r$, let $Q$ be the generation-$k$ dyadic cube containing $x$, and let $y\in5\sqrt n\,Q$. Since $x,y\in5\sqrt n Q$ and $5\sqrt nQ$ has side $5\sqrt n\,2^{-k}$, [F1] gives $d_\infty(x,c(Q))\le\tfrac12 2^{-k}$ and $d_\infty(c(Q),y)\le\tfrac52\sqrt n\,2^{-k}$, so by [F2] $d_2(x,y)\le d_2(x,c(Q))+d_2(c(Q),y)\le n(\tfrac12+\tfrac52\sqrt n)2^{-k}\le3n\sqrt n\,2^{-k}<r$; hence $y\in B_2(x,r)\subseteq\Omega$. Thus $5\sqrt nQ\subseteq\Omega$ and $Q\in\mathcal F$ contains $x$. [F1, F2, given, choose]

2.1 Maximal elements exist: let $Q\in\mathcal F$ and $w\notin\Omega$, which exists because $\Omega$ is proper, and fix $x\in Q$. If an ancestor $A$ of $Q$ of side $s$ lies in $\mathcal F$, then $5\sqrt n\,A\subseteq\Omega$, so $w\notin5\sqrt n\,A$; now $x\in Q\subseteq A$ gives $d_\infty(x,c(A))\le s/2$ and every point of $5\sqrt n\,A$ is within $\ell^\infty$-distance $(5\sqrt n/2)s$ of $c(A)$, so [F2] gives $d_2(x,c(A))\le ns/2$ and, for $z=w$ first, $d_2(w,x)\ge d_\infty(w,x)\ge\tfrac12(5\sqrt n-1)s$, by the reverse triangle inequality in $d_\infty$; that is, $s\le2d_2(w,x)/(5\sqrt n-1)=:M$. The ancestors of $Q$ have side lengths $2^{-j}$ with $j\le k$ increasing as $j$ decreases, so by [F4] only finitely many of them have side $s\le M$; hence only finitely many ancestors of $Q$ lie in $\mathcal F$, and among those finitely many there is one of least generation, which is a maximal element of $\mathcal F$ containing $Q$. Taking $Q$ arbitrary shows that every cube of $\mathcal F$ lies below a maximal element, and in particular maximal elements exist. [F1, F2, F4, step 1.1, algebra]

3.1 The maximal elements are pairwise disjoint: if $Q,Q'$ are maximal and meet, then by [F1] one contains the other, and maximality forces $Q=Q'$. They are at most countable: the map sending a dyadic cube to its centre is injective on any family of pairwise disjoint cubes (a cube contains its own centre), its values are points of $\mathbb Q^n$ because $c(Q_{k,m})_i=(m_i+\tfrac12)2^{-k}\in\mathbb Q$, and $\mathbb Q^n$ is at most countable, so [F3] makes the family at most countable. [F1, F3, step 2.1, algebra]

3.2 Their union is exactly $\Omega$: each maximal element lies in $\mathcal F$, hence is contained in $\Omega$, so the union is a subset of $\Omega$; conversely, for $x\in\Omega$ step 1.1 supplies $Q\in\mathcal F$ with $x\in Q$, and step 2.1 supplies a maximal element containing $Q$, hence containing $x$. Thus $\Omega=\bigcup\{Q:Q\text{ maximal in }\mathcal F\}$. [step 1.1, step 2.1, given]

4.1 Let $Q$ be maximal in $\mathcal F$ and let $P$ be its dyadic parent: $P$ has side $2\ell(Q)$, its centre differs from $c(Q)$ by at most $\tfrac12\ell(Q)$ in each coordinate, so $P\subseteq3Q$. Maximality gives $P\notin\mathcal F$, that is, $5\sqrt n\,P\not\subseteq\Omega$, so there is $y\in5\sqrt n\,P$ with $y\notin\Omega$; every point of $P$ is within $\ell^\infty$-distance $\ell(Q)$ and every point of $5\sqrt n\,P$ within $\ell^\infty$-distance $5\sqrt n\,\ell(Q)$ of the centre of $P$, so [F2] bounds the $d_2$-distance between any $x\in Q\subseteq P$ and $y$ by $n\,\ell(Q)+5n\sqrt n\,\ell(Q)\le6n\sqrt n\,\ell(Q)$; in particular $\operatorname{dist}(Q,\Omega^c)\le6n\sqrt n\,\ell(Q)$ while $5\sqrt n\,Q\subseteq\Omega$. [F1, F2, step 2.1, algebra] ∎

**Scaffold repair recorded.** The scaffolded form of this lemma asked for the dyadic cubes *contained* in $\Omega$ that are maximal under inclusion, with the parent of a maximal cube not contained in $\Omega$. That form is false: for the nonempty open proper set $\Omega=(0,\infty)^n$ and the all-generations grid, every dyadic cube contained in $\Omega$ is contained in a strictly larger ancestor also contained in $\Omega$ (the ancestors of the cube $(0,2^{-k}]^n$ are $(0,2^{-k+1}]^n,\dots$, all inside $\Omega$), so maximal elements do not exist at all; with the bounded grid of generations $k\ge0$ taken instead, a generation-$0$ maximal cube can be at distance far exceeding a multiple of its side length from $\Omega^c$, so no point $y\in\Omega^c$ can be found near it. The version proved above is the Whitney-type statement actually needed by the good-$\lambda$ estimate: the cubes are maximal in the family *adapted to $\Omega$* ($5\sqrt n\,Q\subseteq\Omega$), and they retain the near-boundary point $y$ with the uniform bound $|x-y|\le6n\sqrt n\,\ell(Q)$.
