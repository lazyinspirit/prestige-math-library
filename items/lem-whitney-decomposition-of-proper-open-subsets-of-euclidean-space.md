---
id: lem-whitney-decomposition-of-proper-open-subsets-of-euclidean-space
kind: lemma
title: "Whitney decomposition of a proper open subset of Euclidean space"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-dyadic-cube-in-rn-all-generations, lem-dyadic-cubes-all-generations-partition-and-nesting, def-multidimensional-rectangle-and-volume, def-countable-choice, thm-lebesgue-measure-under-dilations-and-reflections]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Remark 1.11, printed pp. 12-13: $\\sqrt n\\,l(Q_i)\\le\\operatorname{dist}(Q_i,\\mathbb R^n\\setminus\\Omega)\\le4\\sqrt n\\,l(Q_i)$, touching-cube size comparison and the count $12^n$"
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "appendix, Theorem 14.5, printed p. 84: countably many cubes with union $\\Omega$, disjoint interiors and $\\operatorname{diam}Q_k\\le\\operatorname{dist}(Q_k,\\Omega^c)\\le4\\operatorname{diam}Q_k$"
    - title: "Shai Dekel, Gerard Kerkyacharian, George Kyriazis, Pencho Petrushev, A New Proof of the Atomic Decomposition of Hardy Spaces, Constructive Theory of Functions (Sozopol 2016), pp. 59-73"
      url: "https://people.math.sc.edu/pencho/Publications/DKKP-Sozopol-2016.pdf"
      locator: "Lemma 3, printed pp. 68-69: the Whitney-type covering used by the level decomposition"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $n\ge1$ and let
$\Omega\subseteq\mathbb R^n$ be nonempty, open and proper. Write
$$\ell(Q)=2^{-k}\ \text{ for the generation-}k\text{ dyadic cube }Q,\qquad d(Q)=\inf\{|x-y|:x\in Q,\ y\in\mathbb R^n\setminus\Omega\}$$
for the all-generations dyadic cubes of
[[def-dyadic-cube-in-rn-all-generations]]. Then there is a countable family
$\mathcal W=(Q_j)_{j\in\mathbb N}$ of dyadic cubes, with pairwise disjoint
interiors, such that

1. $\Omega=\bigcup_jQ_j$ and $\sqrt n\,\ell(Q_j)\le d(Q_j)\le4\sqrt n\,\ell(Q_j)$ for every $j$;
2. if $Q,Q'\in\mathcal W$ have intersecting closures, then $\tfrac15\ell(Q)\le\ell(Q')\le5\ell(Q)$;
3. every $Q\in\mathcal W$ has intersecting closures with at most $K(n):=2\cdot2^n+3^n+4^n+6^n$ cubes of $\mathcal W$ (the source [K, Remark 1.11] records the sharper count $12^n$ for its construction; only finiteness of $K(n)$ is used below);
4. for every $1\le R\le2$ the dilated cubes $RQ_j:=\{c_j+R(x-c_j):x\in Q_j\}$, $c_j$ the centre of $Q_j$, have overlap bounded by a constant $C_n<\infty$ depending only on $n$ (the bound is uniform in $R\in[1,2]$).

In the diametral normalization the published form [W, Theorem 14.5] records
$\operatorname{diam}Q_j\le\operatorname{dist}(Q_j,\Omega^c)\le4\operatorname{diam}Q_j$
for a family with the same covering and disjointness properties.
The dilation restriction $R\le2$ is not a defect of the construction: for the
Whitney family of $\Omega=(0,\infty)\subseteq\mathbb R$ the intervals
$Q_k=(2^k,2^{k+1}]$ have $R$-dilations containing the fixed point $x=1$ for
infinitely many $k$ as soon as $R\ge3$, so no bound uniform in $R$ can hold.

## Facts & Assumptions

**Given:** $n\ge1$, a nonempty proper open set $\Omega\subseteq\mathbb R^n$, Countable Choice, and the dyadic cubes of [[def-dyadic-cube-in-rn-all-generations]] with the partition, volume and nesting properties of [[lem-dyadic-cubes-all-generations-partition-and-nesting]].

[L1] The dyadic cube $Q_{k,m}$ of generation $k$ is a half-open box of side $2^{-k}$ and volume $2^{-kn}$; cubes at one generation are pairwise disjoint and cover $\mathbb R^n$; two dyadic cubes are disjoint or one contains the other ([[def-dyadic-cube-in-rn-all-generations]], [[lem-dyadic-cubes-all-generations-partition-and-nesting]]). The closed cube $\overline Q$ is contained in the closed ball of radius $\tfrac{\sqrt n}{2}\ell(Q)$ about the centre $c_Q$, and its diameter is $\sqrt n\,\ell(Q)$.

[L2] For a nonempty set $A$ and $z\in\mathbb R^n$ one has $|d(z)-d(z')|\le|z-z'|$ where $d(z)=\operatorname{dist}(z,\Omega^c)$; in particular $d$ is continuous on $\Omega$ and $d(Q)=\inf_{y\in Q}d(y)$ satisfies $d(Q)\le d(y)$ for every $y\in Q$. If $z$ lies in the closure of $Q$, then $d(z)\ge d(Q)$.

[L3] The dilation volume identity $|rE|=r^n|E|$ holds for measurable $E$ and $r>0$ ([[thm-lebesgue-measure-under-dilations-and-reflections]]).



**Proof technique:** the distance-compatible dyadic rule, then maximal elements and packing estimates.

## Proof

**Proof technique:** constructive.

1.1 The distance rule. For $x\in\Omega$ put $d(x)=\operatorname{dist}(x,\Omega^c)>0$; the positivity uses that $\Omega$ is open and $\Omega^c$ closed. Since the dyadic numbers $2^{-k}$, $k\in\mathbb Z$, partition $(0,\infty)$ into the intervals $(2^{-k-1},2^{-k}]$, there is exactly one $k(x)\in\mathbb Z$ with $2^{-k(x)-1}<d(x)/(4\sqrt n)\le2^{-k(x)}$, and then $$d(x)/(4\sqrt n)\le\ell(x):=2^{-k(x)}<d(x)/(2\sqrt n).$$ Let $Q(x)$ be the unique dyadic cube of generation $k(x)$ containing $x$, which exists because generation $k(x)$ partitions $\mathbb R^n$ by [L1]. Put $G=\{Q(x):x\in\Omega\}$. [L1, given, algebra, construct]

2.1 Cubes of the rule are contained in $\Omega$ with controlled distance. If $y\in Q(x)$, then $|y-x|\le\sqrt n\,\ell(x)<d(x)/2$, so $d(y)\ge d(x)-|y-x|>d(x)/2\ge\sqrt n\,\ell(x)$ by [L2], and therefore $d(Q(x))=\inf_{y\in Q(x)}d(y)\ge\sqrt n\,\ell(x)>0$. In particular $Q(x)\cap\Omega^c=\varnothing$, that is, $Q(x)\subseteq\Omega$, and $Q(x)\in G$ satisfies the lower bound of claim 1. Thus every point of $\Omega$ lies in an element of $G$. [step 1.1, L1, L2, algebra]

3.1 Maximal elements. For each fixed $Q\in G$, let $G_Q:=\{Q'\in G:Q\subseteq Q'\}$. Choose the witness $x\in\Omega$ with $Q=Q(x)$ supplied by the definition of $G$. Every member $Q'$ of this particular set $G_Q$ contains $x$. By step 2.1, $\sqrt n\,\ell(Q')\le d(Q')\le d(x)$, while dyadic nesting gives $\ell(Q')\ge\ell(Q)$. Thus its side length lies in the finite dyadic range $[\ell(Q),d(x)/\sqrt n]$; at each generation there is only one dyadic cube containing this fixed $x$. Therefore $G_Q$ is finite and nonempty. Its members are nested, so it has a unique largest member by side length, which is maximal in $G$. Let $\mathcal W$ be the set of all maximal elements of $G$. Every $Q\in G$ lies in one of them by the preceding finite-superset argument; the set of all dyadic cubes is countable, hence so is $\mathcal W$. This construction uses only $G$-supersets of each fixed cube, not a maximality principle over all cubes. [step 1.1, step 2.1, L1, given]

4.1 Covering, disjointness and the lower bound. Every $x\in\Omega$ lies in some $Q(x)\in G$, hence in a maximal element of $G$ containing it, so $\Omega=\bigcup_{Q\in\mathcal W}Q$. Dyadic cubes are nested or disjoint by [L1], and maximality of the elements of $\mathcal W$ rules out proper inclusion, so distinct elements of $\mathcal W$ are disjoint (their interiors are disjoint, indeed the cubes themselves are disjoint as half-open sets). Each $Q\in\mathcal W$ belongs to $G$, so $\sqrt n\,\ell(Q)\le d(Q)$ by step 2.1. [step 2.1, step 3.1, L1]

5.1 The upper bound is built into the rule. Fix $Q\in\mathcal W$ and $x\in\Omega$ with $Q=Q(x)$, which exists because $\mathcal W\subseteq G$. By definition of $\ell(x)$ one has $d(x)\le4\sqrt n\,\ell(x)$, and $d(Q)\le d(x)$ because $x\in Q$; with the lower bound of step 4.1 this gives $\sqrt n\,\ell(Q)\le d(Q)\le d(x)\le4\sqrt n\,\ell(Q)$, which proves claim 1. [step 1.1, step 4.1, L2, algebra]

6.1 Touching cubes have comparable sizes. Let $Q,Q'\in\mathcal W$ have intersecting closures and let $z$ be a common point. Then $d(z)\ge d(Q)\ge\sqrt n\,\ell(Q)$ by [L2] and step 4.1. Choose $y\in Q'$ with $d(y)<d(Q')+\varepsilon$; since $z\in\overline{Q'}$ one has $|z-y|\le\operatorname{diam}(Q')=\sqrt n\,\ell(Q')$, so $$d(z)\le|z-y|+d(y)<\sqrt n\,\ell(Q')+d(Q')+\varepsilon\le\sqrt n\,\ell(Q')+4\sqrt n\,\ell(Q')+\varepsilon=5\sqrt n\,\ell(Q')+\varepsilon,$$ the last inequality by step 5.1 applied to $Q'$. Letting $\varepsilon\downarrow0$ gives $\sqrt n\,\ell(Q)\le5\sqrt n\,\ell(Q')$, hence $\ell(Q)\le5\ell(Q')$; interchanging the roles of the two cubes gives $\ell(Q')\le5\ell(Q)$. This proves claim 2 with the stated factor $5$. [step 4.1, step 5.1, L1, L2, algebra]

6.2 Bounded overlap of small dilates. Fix $1\le R\le2$ and $x\in\mathbb R^n$, and let $\mathcal J$ be the set of $j$ with $x\in RQ_j$; write $c_j$ for the centre, $\ell_j=\ell(Q_j)$ and $B_j=B(c_j,\ell_j/2)$. Distinct cubes of the family are disjoint and each contains $B_j$, so the balls $B_j$ are pairwise disjoint. If $x\in RQ_j$, then $x=c_j+R(y-c_j)$ for some $y\in Q_j$, so $\operatorname{dist}(x,Q_j)\le|x-y|=(R-1)|y-c_j|\le\frac{\sqrt n}{2}\ell_j$. Since $d$ is 1-Lipschitz and $d(z)\ge d(Q_j)$ for $z\in Q_j$, this gives $d(x)\ge d(Q_j)-\operatorname{dist}(x,Q_j)\ge\frac{\sqrt n}{2}\ell_j>0$. For the other direction, for each $\delta>0$ choose $u,v\in Q_j$ with $|x-u|<\operatorname{dist}(x,Q_j)+\delta$ and $d(v)<d(Q_j)+\delta$. Lipschitz continuity and $|u-v|\le\operatorname{diam}(Q_j)$ give $d(x)\le d(v)+|x-v|\le d(Q_j)+\operatorname{dist}(x,Q_j)+\operatorname{diam}(Q_j)+2\delta$; letting $\delta\downarrow0$ yields $d(x)\le d(Q_j)+\operatorname{dist}(x,Q_j)+\operatorname{diam}(Q_j)$. By step 5.1 and $\operatorname{diam}(Q_j)=\sqrt n\ell_j$, $$d(x)\le4\sqrt n\ell_j+\sqrt n\ell_j+\frac{\sqrt n}{2}\ell_j=\frac{11}{2}\sqrt n\ell_j,$$ so $\ell_j\ge2d(x)/(11\sqrt n)$. The lower bound for $d(x)$ also gives $\ell_j\le2d(x)/\sqrt n$, hence $|x-c_j|\le R\frac{\sqrt n}{2}\ell_j\le\sqrt n\ell_j\le2d(x)$. The disjoint balls $B(c_j,d(x)/(11\sqrt n))\subseteq B_j$ therefore have centres in $B(x,3d(x))$ and a common radius $d(x)/(11\sqrt n)$. The packing estimate [L3] bounds their number by $(66\sqrt n+1)^n$. Thus the dilated cubes have overlap at most $C_n=(66\sqrt n+1)^n$, uniformly for $1\le R\le2$. [step 4.1, step 5.1, L2, L3, given, algebra]

7.1 Counting touching cubes. Fix $Q\in\mathcal W$ with side $\ell$ and generation $k$. By step 6.1, a touching cube has side in $[\ell/5,5\ell]$, so its generation lies in $\{k-2,k-1,k,k+1,k+2\}$. At generations $k,k+1,k+2$, at most $3,4,6$ coordinate intervals, respectively, have closures meeting a given closed interval of length $\ell$; hence the counts are at most $3^n,4^n,6^n$. At each of the two coarser generations, the interval of $Q$ lies inside a single dyadic interval of that generation. Its closure can meet at most that interval and one adjacent interval, because $\ell$ is strictly less than the coarse side length and all endpoints lie on the fine grid. Thus each coarser generation contributes at most $2^n$ cubes. Summing proves claim 3 with $K(n)=2\cdot2^n+3^n+4^n+6^n$. [step 6.1, L1, algebra]

8.1 Conclusion. Steps 4.1 and 5.1 provide a countable family of dyadic cubes with pairwise disjoint interiors, union $\Omega$ and the two-sided distance estimate; step 6.1 gives the touching size comparison; step 7.1 gives the explicit touching count $K(n)=2\cdot2^n+3^n+4^n+6^n$; step 6.2 gives the bounded overlap of the dilations with $1\le R\le2$. This proves the lemma. [step 4.1, step 5.1, step 6.1, step 7.1, step 6.2, discharge-construct] ∎
