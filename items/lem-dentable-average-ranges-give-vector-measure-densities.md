---
id: lem-dentable-average-ranges-give-vector-measure-densities
kind: lemma
title: "Dentable average ranges give vector-measure densities"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-radon-nikodym-property, def-dentable-bounded-set-and-slice, thm-bochner-integrability-criterion, lem-bounded-variation-of-a-vector-measure-is-a-finite-measure, thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality, lem-bochner-density-defines-an-absolutely-continuous-vector-measure, thm-integration-against-a-density, thm-monotone-convergence-for-the-integral, lem-banach-valued-simple-integral-is-well-defined]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Gilles Pisier, Martingales in Banach Spaces"
      url: "https://webusers.imj-prg.fr/~gilles.pisier/ihp-pisier.pdf"
      locator: "Chapter 2, Theorem 2.3 and complete proof, printed pp. 36--38"
pipeline_run: phase-2-next-18
---

## Statement

Assume the Axiom of Choice. If every nonempty bounded closed convex subset of
a Banach space $X$ is dentable, then $X$ has the Radon--Nikodym property.

## Facts & Assumptions

[A1] The Axiom of Choice supplies choices from arbitrary nonempty families
([[def-axiom-of-choice]]).

[L1] RNP asks for a Bochner density of every bounded-variation vector measure
absolutely continuous with respect to a finite scalar measure
([[def-radon-nikodym-property]]).

[L2] Dentability means existence of slices of arbitrarily small norm diameter
([[def-dentable-bounded-set-and-slice]]).

[L3] The variation of a bounded-variation vector measure is a finite positive
measure ([[lem-bounded-variation-of-a-vector-measure-is-a-finite-measure]]).

[L4] Under AC, an absolutely continuous finite scalar measure has an integrable
Radon--Nikodym density
([[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]]),
and integration against that density agrees with integration for the density
measure ([[thm-integration-against-a-density]]).

[L5] A Bochner density measure has variation equal to the integral of its norm
([[lem-bochner-density-defines-an-absolutely-continuous-vector-measure]]).

[L6] Strong measurability plus finite norm integral is equivalent to Bochner
integrability ([[thm-bochner-integrability-criterion]]); nonnegative monotone
convergence controls increasing sums
([[thm-monotone-convergence-for-the-integral]]).

[L7] Simple Banach-valued integrals are linear and computed level by level
([[lem-banach-valued-simple-integral-is-well-defined]]).

## Proof

**Proof technique:** direct.

**Given:** The dentability hypothesis and data $(\Omega,\mathcal A,\mu,\nu)$
from [L1].

1.1 Normalize by the variation measure. [given, A1, L1, L3, L4]
Put $\rho=|\nu|$. By [L3], $\rho$ is finite, and $\nu\ll\mu$ implies
$\rho\ll\mu$ by refining subsets of a $\mu$-null set. If $\rho(\Omega)=0$,
$\nu=0$ has the zero density. Otherwise [L4], using [A1], gives
$w\geq0$ with $\rho=w\,d\mu$. We first construct a density with respect to
$\rho$, for which $|\nu|\leq\rho$ holds tautologically.

1.2 Pass dentability to every average range. [given, L2]
For $A$ with $\rho(A)>0$, put
$x_A=\nu(A)/\rho(A)$ and
$D_A=\{x_B:B\subseteq A,\ \rho(B)>0\}$. Then $\|x_B\|\leq1$. The closed
convex hull $C_A$ is nonempty, bounded, and dentable by hypothesis. A small
slice of $C_A$ meets $D_A$, because its defining supremum over $C_A$ equals
the supremum over $D_A$; its intersection with $D_A$ has no larger diameter.
Thus every $D_A$ is dentable.

2.1 Find a positive subset with a small average range. [A1, L2, step 1.2]
Fix $\varepsilon>0$ and positive $A$. If every positive $B\subseteq A$ had
$\operatorname{diam}D_B>2\varepsilon$, then for each such $B$ and every
$x\in X$ some positive $C\subseteq B$ would satisfy
$\|x-x_C\|>\varepsilon$. Using [A1] and a maximal-disjoint-family argument,
choose disjoint positive $B_j\subseteq B$ with
$\|x_B-x_{B_j}\|>\varepsilon$ which exhaust $B$ modulo $\rho$. Norm countable
additivity gives
$x_B=\sum_j\rho(B_j)x_{B_j}/\rho(B)$, so $x_B$ lies in the closed convex hull
of points of $D_A$ more than $\varepsilon$ away. A slice of $D_A$ of diameter
less than $\varepsilon$ cannot contain both $x_B$ and a member of this convex
combination above the same slice threshold, contradicting step 1.2. Hence some
positive $B\subseteq A$ has $\operatorname{diam}D_B\leq2\varepsilon$.

3.1 Exhaust the space by good pieces and estimate the error. [A1, L5, L6, step 2.1, construct]
Choose a maximal disjoint family $(A_j)$ of positive sets with
$\operatorname{diam}D_{A_j}\leq2\varepsilon$. Step 2.1 forces it to cover
$\Omega$ modulo $\rho$; finiteness of $\rho$ makes the family countable. Put
$g_\varepsilon=\sum_j\mathbf1_{A_j}x_{A_j}$. Its finite partial sums show
strong measurability, and $\|g_\varepsilon\|\leq1$, so [L6] gives Bochner
integrability. For measurable $E$,
$\nu(E)-\int_Eg_\varepsilon\,d\rho$ is the sum over $j$ of
$\rho(E\cap A_j)(x_{E\cap A_j}-x_{A_j})$ (zero intersections omitted).
Consequently every finite partition of $E$ gives the variation estimate
$|\nu-g_\varepsilon\rho|(E)\leq2\varepsilon\rho(E)$.

4.1 Produce an $L^1(\rho;X)$-Cauchy sequence. [A1, L5, step 3.1]
Use [A1] to choose $g_n=g_{2^{-n}}$ for all $n$. By [L5] and the triangle
inequality for variation,
$\int\|g_n-g_{n-1}\|\,d\rho
\leq |\nu-g_n\rho|(\Omega)+|\nu-g_{n-1}\rho|(\Omega)
\leq6\cdot2^{-n}\rho(\Omega)$. Thus the series of $L^1$ differences is
summable.

5.1 Construct and identify the normalized density. [L5, L6, step 3.1, step 4.1]
By [L6], monotone convergence applied to
$\sum_{n=1}^N\|g_n-g_{n-1}\|$ shows that the norm series is finite a.e. Hence,
by completeness of $X$, $g_0+\sum_{n\geq1}(g_n-g_{n-1})$ converges a.e. to a
strongly measurable $h$, and the same tail estimate gives $g_n\to h$ in
$L^1(\rho;X)$. The criterion in [L6] makes $h$ Bochner integrable. For every
$E$, step 3.1 and the norm integral inequality give
$\|\nu(E)-\int_Eh\,d\rho\|\leq
2^{1-n}\rho(E)+\int_E\|g_n-h\|\,d\rho\to0$. Thus $\nu(E)=\int_Eh\,d\rho$.

6.1 Transfer the density back to the original control measure. [L4, L6, L7, step 1.1, step 5.1]
Set $f=wh$ (and $f=0$ where $w=0$). Products of scalar and vector simple
approximants show that $f$ is strongly measurable. By [L4],
$\int\|f\|\,d\mu=\int\|h\|\,d\rho<\infty$, so [L6] makes $f$ Bochner
integrable. If $s_n\to h$ in $L^1(\rho;X)$ are simple, [L7] and [L4] give
$\int_Ews_n\,d\mu=\int_Es_n\,d\rho$ level by level, while [L4] identifies the
two $L^1$ errors. Passing to the limit yields
$\int_Ef\,d\mu=\int_Eh\,d\rho=\nu(E)$.

7.1 Conclude RNP and record the choice cost. [A1, L1, step 6.1]
The construction applies to arbitrary data in [L1], so $X$ has RNP. The exact
non-finite uses of [A1] are scalar Radon--Nikodym in step 1.1, maximal disjoint
families in steps 2.1 and 3.1, and simultaneous selection of the sequence
$(g_n)$ in step 4.1. Empty and zero-variation cases were settled in step 1.1;
one-piece exhaustions are included in step 3.1. [A1, L1, step 1.1, step 6.1] ∎
