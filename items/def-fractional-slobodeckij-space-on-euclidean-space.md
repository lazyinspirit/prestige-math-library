---
id: def-fractional-slobodeckij-space-on-euclidean-space
kind: definition
title: "The Gagliardo--Slobodeckij space on Euclidean space"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-l-p-space-as-a-quotient-by-null-functions, def-nonnegative-lebesgue-integral, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, thm-tonelli-and-fubini-for-completed-product-measures, def-countable-choice]
justified_by: [lem-slobodeckij-seminorm-is-well-defined]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Armin Schikorra, Partial Differential Equations (University of Pittsburgh, version 4 December 2019)"
      url: "https://sites.pitt.edu/~armin/pde1_2019/pde_script.pdf"
      locator: "Chapter V, Section V.1, printed pp. 96-97: definition of the seminorm $[f]_{W^{s,p}}$ and of the space $W^{s,p}$ with the sum norm."
    - title: "Emilio Gagliardo, Caratterizzazioni delle tracce sulla frontiera relative ad alcune classi di funzioni in $n$ variabili, Rend. Sem. Mat. Univ. Padova 27 (1957), 284-305"
      url: "https://www.numdam.org/item/RSMUP_1957__27__284_0.pdf"
      locator: "No. 1, definition (1.3) and footnote 8 on printed pp. 288-289: the incremental-quotient norm on boundary functions and its equivalence with the double-integral form."
    - title: "Maria Kampanou, Trace Theorems for Sobolev Spaces (master's thesis, National and Kapodistrian University of Athens, July 2018)"
      url: "https://pergamos.lib.uoa.gr/uoa/dl/object/2864871/file.pdf"
      locator: "Chapter 3, introductory definitions of the modular seminorm defining the boundary space, printed pp. 18-19."
---

## Definition

Assume Countable Choice ([[def-countable-choice]]) for the measure-theoretic
interfaces cited below. Let $d\ge1$, $0<s<1$, $1\le p<\infty$ and
$\mathbb K\in\{\mathbb R,\mathbb C\}$. Lebesgue measure on $\mathbb R^d$ and
its sigma-algebra are those of
[[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]].

For a Lebesgue measurable $g:\mathbb R^d\to\mathbb K$ put
$$[g]_{s,p}:=\Bigl(\int_{\mathbb R^d}\int_{\mathbb R^d}|g(x)-g(y)|^p\,|x-y|^{-d-sp}\,dx\,dy\Bigr)^{1/p}\in[0,+\infty].$$
The integrand is read as $0$ on the diagonal $x=y$; the integral is the
nonnegative extended integral of [[def-nonnegative-lebesgue-integral]] over the
completed product measure $dx\,dy$ of
[[thm-tonelli-and-fubini-for-completed-product-measures]]. The **Gagliardo--
Slobodeckij space** of order $s$ and exponent $p$ is
$$W^{s,p}(\mathbb R^d;\mathbb K):=\{g\in L^p(\mathbb R^d;\mathbb K):[g]_{s,p}<\infty\},$$
where $L^p(\mathbb R^d;\mathbb K)$ is the quotient of the measurable functions
by almost-everywhere equality
([[def-l-p-space-as-a-quotient-by-null-functions]]); its elements are classes,
and the space is normed by
$$\|g\|_{W^{s,p}(\mathbb R^d)}:=\|g\|_{L^p(\mathbb R^d)}+[g]_{s,p}.$$
Write $[g]_{s,p}$ also for the value on a class, and call $[\cdot]_{s,p}$ the
**Slobodeckij seminorm**.

Three conventions are part of the definition. First, the diagonal
$\{(x,y):x=y\}$ is a Lebesgue-null subset of $\mathbb R^d\times\mathbb R^d$
(its section at every $x$ is a single point, so Tonelli gives product measure
zero), and on the diagonal the integrand is declared zero; thus the convention
changes the integrand only on a null set and does not affect the integral.
Second, the integral is a nonnegative extended integral, so $[g]_{s,p}=+\infty$
is allowed and $W^{s,p}$ is a set of $L^p$ classes with finite seminorm; the
difference $g(x)-g(y)$ is taken between representatives, and changing
representatives on a null set changes the integrand only on a null subset of
the product. Third, the definition is stated on classes but representative
independence is not assumed here: it is the first clause of
[[lem-slobodeckij-seminorm-is-well-defined]], the item that establishes that
this definition is well posed on $L^p$ classes. That the expression
$\|\cdot\|_{W^{s,p}}$ is a genuine norm, and that $W^{s,p}$ is a vector space,
are likewise proved there, not asserted as part of the definition.

On this page the case used is the trace exponent
$$s=\theta:=1-\frac1p\in(0,1),$$
which is available exactly for $1<p<\infty$. For that exponent the weight
simplifies to $|x-y|^{-d-p\theta}=|x-y|^{-d-(p-1)}$. The endpoint $p=1$ is
treated separately on this page and is never described by a space
$W^{0,1}$.

## Remarks

- Constants have zero seminorm: if $g=c$ almost everywhere then the integrand
  vanishes identically, so $[c]_{s,p}=0$. Adding the $L^p$ term therefore
  removes the ambiguity only where constants are themselves $L^p$ classes. On
  $\mathbb R^d$ with $1\le p<\infty$ no nonzero constant lies in
  $L^p(\mathbb R^d)$, since Lebesgue measure is infinite, so on the whole space
  the $L^p$ term is already sensitive to the difference between a constant and
  the zero class; the definiteness statement is nevertheless proved, not
  assumed, in [[lem-slobodeckij-seminorm-is-well-defined]].
- The weight $h\mapsto|h|^{-d-sp}$ is not locally integrable at the
  origin: its radial integral there is $\int_0^1r^{-1-sp}dr=+\infty$.
  Its tail is integrable, since $\int_1^\infty r^{-1-sp}dr=1/(sp)$.
  With density declared zero on the diagonal, the weighted measure
  $|x-y|^{-d-sp}dx\,dy$ is sigma-finite (exhaust by bounded sets with
  $|x-y|\ge1/k$), but is not finite on compact neighbourhoods of the
  diagonal. It has the same null sets as Lebesgue product measure because
  its density is finite and strictly positive off the null diagonal.
  Finite seminorms depend on cancellation in $g(x)-g(y)$; no equivalence
  with another function space is asserted here.

## Source notes

Schikorra, Section V.1, printed pp. 96-97, defines $[f]_{W^{s,p}}$ by the
double integral and $W^{s,p}$ with the sum norm. Gagliardo, definition (1.3) on
printed pp. 288-289, uses the equivalent incremental-quotient description on a
compact boundary (extended here to $\mathbb R^d$); Kampanou, printed pp. 18-19,
uses the same modular seminorm for the boundary trace space.
