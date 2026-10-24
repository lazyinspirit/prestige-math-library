---
id: cor-shape-regular-affine-fe-primal-energy-approximation
kind: corollary
title: Primal H¹ approximation on shape-regular affine finite-element meshes
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-countable-choice
  - def-lebesgue-outer-measure
  - def-matching-affine-simplicial-meshes
  - def-reference-finite-element-and-unisolvent-dofs
  - def-sobolev-space-wkp-and-its-norm
  - def-wkp-zero-as-a-sobolev-closure
  - lem-affine-pullback-weak-derivatives-and-scaling
  - lem-shape-regular-affine-simplex-scaling
  - lem-unisolvent-dofs-define-reference-interpolant
  - thm-bramble-hilbert-on-reference-simplex
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-lebesgue-measure-of-a-box-of-every-kind
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Thomas Richter, Die Finite Elemente Methode für partielle Differentialgleichungen
      url: https://numerics.ovgu.de/teaching/numpde/skript.pdf
      locator: "Chapter 3 §§3.3.1–3.3, Lemmas 3.23–3.28, printed pp. 75–79: reference Bramble–Hilbert, bounded interpolation, and affine scaling. Lemma 3.28 is stated with its proof assigned as an exercise; the present global estimate is proved below."
verification: {}
---

## Statement

Assume Countable Choice. Let $d\ge2$, let $\Omega\subset\mathbb R^d$ be a
bounded polyhedral open set with a matching shape-regular affine simplicial
mesh family $\{\mathcal T_h\}$, and set $h:=\max_{K\in\mathcal T_h}h_K\le1$.
Fix an integer $r\ge1$. On the reference simplex let
$(\widehat S_d,\widehat P,\widehat\Sigma)$ be an unisolvent real scalar
finite element whose finite-dimensional local space $\widehat P$ consists of
polynomials and contains $\mathbb P_r$. Assume each
degree of freedom has a bounded linear extension to
$W^{r+1,2}(\widehat S_d)$, and let $\widehat I$ be its interpolant. Suppose
there is a global map $I_h$ whose restriction to each cell is the affine
pullback of $\widehat I$, and that $I_hu\in V_h$ for the conforming discrete
space $V_h\subset H^1_0(\Omega)$ whenever
$u\in W^{r+1,2}(\Omega)\cap H^1_0(\Omega)$, where $H^1_0(\Omega)$ is the
closure of $C_c^\infty(\Omega)$ in $W^{1,2}(\Omega)$
([[def-wkp-zero-as-a-sobolev-closure]]). Then a constant $C$ independent of
$h$ and $u$ satisfies
$$\|u-I_hu\|_{H^1(\Omega)}\le C h^r|u|_{W^{r+1,2}(\Omega)}.$$
The global conformity and zero-boundary mapping property of $I_h$ are explicit
hypotheses; this estimate does not assert them for arbitrary degrees of
freedom.

## Facts & Assumptions

**Given:** Countable Choice; the exact matching affine mesh convention; a reference element with $\mathbb P_r\subseteq\widehat P$ and bounded degrees of freedom on $W^{r+1,2}$; the cellwise affine interpolation formula; and the stated global mapping property $I_hu\in V_h$.

[F1] An unisolvent reference element has a unique linear interpolation operator that reproduces every polynomial in its finite-element space ([[def-reference-finite-element-and-unisolvent-dofs]], [[lem-unisolvent-dofs-define-reference-interpolant]]).

[F2] On the reference simplex, for real-valued $w\in W^{r+1,2}$ there is one $q\in\mathbb P_r$ with $\|w-q\|_{W^{m,2}}\le C|w|_{W^{r+1,2}}$ for every integer $0\le m\le r+1$: use polynomial parameter $r+1$ and $s=r+1$ in [[thm-bramble-hilbert-on-reference-simplex]], whose derivative-mean polynomial is independent of $s$.

[F3] Affine pullback and pushforward transform order-$m$ Sobolev seminorms by the corresponding powers of $A$ and $A^{-1}$ and determinant factors ([[lem-affine-pullback-weak-derivatives-and-scaling]]).

[F4] Shape regularity gives $\|A_K\|\le Ch_K$, $\|A_K^{-1}\|\le Ch_K^{-1}$, and $\det A_K\asymp h_K^d$ ([[lem-shape-regular-affine-simplex-scaling]]).

[F5] Countable Choice is assumed by the Sobolev and affine-change suppliers used in [F2]–[F4] and by the Lebesgue measure suppliers in [F6] ([[def-countable-choice]]).

[F6] Lebesgue outer measure is defined by elementary-set covers; half-open boxes have their product volume, and every outer-null set is measurable and null ([[def-lebesgue-outer-measure]], [[thm-lebesgue-measure-is-a-complete-measure]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]).

## Proof

1.1 On the reference cell write $\widehat Iw=\sum_{i=1}^N\widehat\sigma_i(w)\widehat\phi_i$. Each degree of freedom is bounded on $W^{r+1,2}$ by **Given**, and each fixed polynomial shape function has finite $W^{1,2}$ norm. Thus $\|\widehat Iw\|_{W^{1,2}}\le C\|w\|_{W^{r+1,2}}$. By [F1], $\widehat Iq=q$ for every $q\in\mathbb P_r$. For such $q$, $w-\widehat Iw=(w-q)-\widehat I(w-q),$ so $\|w-\widehat Iw\|_{W^{m,2}} \le\|w-q\|_{W^{m,2}}+C\|w-q\|_{W^{r+1,2}}\qquad(m=0,1).$ [F1, given, algebra]

2.1 Choose the polynomial $q\in\mathbb P_r$ supplied by [F2]. Since $m\le1\le r+1$, [F2] bounds both terms in step 1.1 by $C|w|_{W^{r+1,2}}$. Hence the reference-cell interpolation error obeys $\|w-\widehat Iw\|_{W^{m,2}}\le C|w|_{W^{r+1,2}}$ for $m=0,1$. [F2, step 1.1]

3.1 For a cell $K$ with affine matrix $A_K$, apply [F3] to transform the reference error and the order-$(r+1)$ derivative seminorm back to $K$. The determinant factors cancel; the remaining factor is bounded by $C\|A_K^{-1}\|^m\|A_K\|^{r+1}\le C h_K^{r+1-m}$ by [F4]. Therefore $\|u-I_Ku\|_{L^2(K)}\le C h_K^{r+1}|u|_{W^{r+1,2}(K)},\qquad |u-I_Ku|_{W^{1,2}(K)}\le C h_K^r|u|_{W^{r+1,2}(K)}.$ [F3, F4, F5, step 2.1, algebra]

4.1 Let $E_h:=\bigcup_{K\in\mathcal T_h}\partial K$, a finite union of simplex facets. Each facet lies in a bounded affine hyperplane; choose a coordinate with nonzero normal component and write that hyperplane as the graph of an affine function over a bounded box in $\mathbb R^{d-1}$. Partition the base box into at most $C_0N^{d-1}$ boxes of side $1/N$. The affine function varies by at most $C_1/N$ on each, so each graph piece lies in a slightly enlarged half-open $d$-box of volume at most $C_2N^{-d}$. These elementary-set cover members have total volume at most $C_0C_2/N$; the outer-measure definition and box-volume formula give outer measure zero for the facet, and completeness makes it Lebesgue-null. Thus $E_h$ is null, and $\Omega\setminus E_h$ is the disjoint union of the cell interiors by the mesh definition. Square and sum the estimates in step 3.1 over these interiors; the sums of squared Sobolev seminorms equal the corresponding global seminorms. Since $h_K\le h\le1$, the order-zero contribution $h_K^{r+1}$ is at most $h^r$. The global interpolation map in **Given** takes values in $V_h$, yielding $\|u-I_hu\|_{H^1(\Omega)}\le C h^r|u|_{W^{r+1,2}(\Omega)}$. [given, F4, F5, F6, step 3.1, algebra] ∎
