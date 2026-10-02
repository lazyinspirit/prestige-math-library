---
id: def-circle-maximal-function-and-nontangential-region
kind: definition
title: "The circle maximal function and nontangential approach regions"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-countable-choice, def-integral-over-a-measurable-set, def-l-one-of-a-measure, def-regular-complex-borel-measure-on-an-lch-space, def-the-one-dimensional-torus-and-normalized-haar-integral, def-total-variation-of-a-signed-or-complex-measure, thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation, thm-total-variation-is-a-measure]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Axler, Bourdon and Ramey, Harmonic Function Theory, second edition, Chapter 6"
      url: "https://www.axler.net/HFT.pdf"
      locator: "Poisson Integrals of Measures and The Fatou Theorem: printed pp. 111-120 and 128-137 (PDF pp. 116-125, 133-142); spherical caps, the Hardy-Littlewood maximal function of a measure, and the nontangential approach regions used in Theorems 6.28-6.39."
    - title: "Herbert Koch, Notes for Harmonic and Real Analysis (University of Bonn, 2014-15), Chapter 3"
      url: "https://www.math.uni-bonn.de/ag/ana/WiSe1415/V4B5_notes.pdf"
      locator: "§§1.2.1-3, printed pp. 35-37: Poisson maximal estimates and the boundary convergence conventions."
---

## Definition

Assume [[def-countable-choice|countable choice]]. Identify the torus
$\mathbb T=\mathbb R/\mathbb Z$ with the Euclidean unit circle through
$\varphi([t])=e^{2\pi it}$, and write $m$ for the normalized Haar measure of
$\mathbb T$ ([[def-the-one-dimensional-torus-and-normalized-haar-integral]]), a
probability measure on the Borel sets of $\mathbb T$.
For $\zeta,\eta\in\mathbb T$ put
$$d(\zeta,\eta):=\min\{\,|s-t-k|:\ k\in\mathbb Z\,\},\qquad \zeta=[t],\ \eta=[s],$$
the circular distance; it is well defined because replacing $t$ or $s$ by an
integer translate does not change the set of numbers $|s-t-k|$.

**Centered arcs.** For $\zeta\in\mathbb T$ and $0<h\le\tfrac12$ put
$$I_h(\zeta):=\{\eta\in\mathbb T:\ d(\zeta,\eta)<h\}\quad (0<h<\tfrac12),\qquad I_{1/2}(\zeta):=\mathbb T .$$
Thus $I_h(\zeta)$ is the open circular arc of radius $h$ centered at $\zeta$,
the point $\zeta$ itself included, and the half-circle case is deliberately the
whole circle so that the antipode is not lost. The normalization is the one
used throughout this pair: for $0<h\le\tfrac12$,
$$m\bigl(I_h(\zeta)\bigr)=2h .$$
For $0<h<\tfrac12$ one has $I_h([0])=q((-h,h))$ for the quotient map
$q:\mathbb R\to\mathbb T$, and $q^{-1}q((-h,h))=\bigcup_{k\in\mathbb Z}(-h+k,h+k)$
meets $[0,1)$ in $[0,h)\cup(1-h,1)$, a set of measure $2h$; translation
invariance of $m$ (proved with the measure $m$ in
[[def-the-one-dimensional-torus-and-normalized-haar-integral]]) moves this
identity to every center. The case $h=\tfrac12$ reads $m(\mathbb T)=1=2\cdot\tfrac12$
by the convention $I_{1/2}(\zeta)=\mathbb T$.

**Circle maximal function.** Let $\mu$ be a finite regular complex Borel measure
on $\mathbb T$ ([[def-regular-complex-borel-measure-on-an-lch-space]]), with
total variation $|\mu|$ ([[def-total-variation-of-a-signed-or-complex-measure]],
[[thm-total-variation-is-a-measure]]). Define
$$M_{\mathbb T}\mu(\zeta):=\sup_{0<h\le 1/2}\frac{|\mu|\bigl(I_h(\zeta)\bigr)}{m\bigl(I_h(\zeta)\bigr)},\qquad \zeta\in\mathbb T .$$
Each quotient is finite because $|\mu|(\mathbb T)<+\infty$, and each is
nonnegative. Their supremum is therefore a well-defined extended nonnegative
real: $M_{\mathbb T}\mu:\mathbb T\to[0,+\infty]$. It may equal $+\infty$,
for example at an atom of $|\mu|$. For $f\in L^1(\mathbb T,m)$
([[def-l-one-of-a-measure]]) define likewise
$$M_{\mathbb T}f(\zeta):=\sup_{0<h\le 1/2}\frac{1}{m\bigl(I_h(\zeta)\bigr)}\int_{I_h(\zeta)}|f|\,dm .$$
The two definitions agree when $\mu=fm$ is the density measure of $f$, that is
when $\mu(E)=\int_E f\,dm$: then $|\mu|(E)=\int_E|f|\,dm$
([[thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation]]),
so $|\mu|(I_h(\zeta))=\int_{I_h(\zeta)}|f|\,dm$ and $M_{\mathbb T}\mu=M_{\mathbb T}f$.
The assignment $f\mapsto M_{\mathbb T}f$ is unchanged if $f$ is replaced by an
almost-everywhere equal function, because the integrals over the arc agree.

**Nontangential regions.** For $A>1$ and $\zeta\in\mathbb T$ put
$$\Gamma_A(\zeta):=\{\,z\in\mathbb D:\ |z-\zeta|<A\,(1-|z|)\,\}\subseteq\mathbb D,$$
and for $v:\mathbb D\to\mathbb C$ let
$$N_A v(\zeta):=\sup_{z\in\Gamma_A(\zeta)}|v(z)|\in[0,+\infty].$$
Here $|z-\zeta|$ is the Euclidean modulus after identifying $\mathbb T$ with
the unit circle. The sets are nested: $\Gamma_A(\zeta)\subseteq\Gamma_B(\zeta)$
for $1<A\le B$, and $0\in\Gamma_A(\zeta)$ for every $A>1$ because
$|0-\zeta|=1<A$. A point $z\in\mathbb D\setminus\{\zeta\}$ lies in
$\Gamma_A(\zeta)$ as soon as $A>|z-\zeta|/(1-|z|)$, and
$|z-\zeta|\ge 1-|z|$ for every $z\in\mathbb D$, so every such $z$ lies in some
$\Gamma_A(\zeta)$ and $\bigcup_{A>1}\Gamma_A(\zeta)=\mathbb D\setminus\{\zeta\}$.
A complex-valued $v$ on $\mathbb D$ has **nontangential limit** $L$ at $\zeta$
if for every $A>1$ and every $\varepsilon>0$ there is $\delta>0$ with
$|v(z)-L|<\varepsilon$ whenever $z\in\Gamma_A(\zeta)$ and $|z-\zeta|<\delta$.
Because the regions increase with $A$, it suffices to verify this for every
integer $A\ge 2$: an arbitrary $A>1$ satisfies $\Gamma_A(\zeta)\subseteq
\Gamma_m(\zeta)$ for every integer $m\ge A$.
