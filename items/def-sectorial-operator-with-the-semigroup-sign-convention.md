---
id: def-sectorial-operator-with-the-semigroup-sign-convention
kind: definition
title: Sectorial operator with the semigroup sign convention
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [def-complex-sector-and-bounded-analytic-semigroup, def-resolvent-of-a-closed-operator, def-densely-defined-closed-and-closable-operator, def-banach-space, def-unbounded-linear-operator-domain-and-graph, rem-real-and-complex-normed-space-convention, lem-canonical-banach-complexification-of-a-real-banach-space]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: 'Chapter II Section 4.a, Definition 4.1, printed p. 96'
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: 'Chapter 2 Section 2.3, Definition 2.18 and the sign remark after it, printed p. 56'
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $X$ be a Banach space over $\mathbb K\in\{\mathbb R,\mathbb C\}$
([[def-banach-space]], [[rem-real-and-complex-normed-space-convention]]) and let
$A:D(A)\subseteq X\to X$ be a closed densely defined linear operator with
resolvent $R(\lambda,A)=(\lambda I-A)^{-1}$
([[def-resolvent-of-a-closed-operator]],
[[def-densely-defined-closed-and-closable-operator]],
[[def-unbounded-linear-operator-domain-and-graph]]).

For a real $X$, all complex resolvents below are those of the closed complexified operator $A_{\mathbb C}(x,y)=(Ax,Ay)$ on $D(A)\times D(A)$ in the canonical complexification ([[lem-canonical-banach-complexification-of-a-real-banach-space]]). Closedness and density follow coordinatewise, since its norm is equivalent to the product norm.

For $\delta\in(0,\pi/2]$ and $\omega\in\mathbb R$, $A$ (or the pair
$(A,\omega)$) is **sectorial of angle $\delta$ with vertex $\omega$ in the
$e^{tA}$ convention** if the open sector $\omega+\Sigma_{\pi/2+\delta}$
([[def-complex-sector-and-bounded-analytic-semigroup]]) is contained in the
resolvent set $\rho(A)$, and for every $\varepsilon\in(0,\delta)$ there is a
constant $M_\varepsilon\ge1$ with
$$\|R(\lambda,A)\|\le\frac{M_\varepsilon}{|\lambda-\omega|}\qquad\text{for all }\lambda\in\omega+\Sigma_{\pi/2+\delta-\varepsilon}.$$

### The sign dictionary

The definition is equivalent to the pair of statements that the spectrum of
$A$ is contained in the complementary closed left sector
$$\sigma(A)\subseteq\omega+\bigl(\{\lambda\ne0:|\arg(-\lambda)|\le\pi/2-\delta\}\cup\{0\}\bigr)$$
and that the stated $M_\varepsilon/|\lambda-\omega|$ bound holds on the
right-opening sector. Writing $B:=-A+\omega I$ one has
$$(\mu I-B)=(\mu-\omega)I+A=-\bigl((\omega-\mu)I-A\bigr),$$
hence $R(\mu,B)=-R(\omega-\mu,A)$; substituting $\lambda=\omega-\mu$, the
resolvent bound of $A$ on $\omega+\Sigma_{\pi/2+\delta-\varepsilon}$ becomes
the bound $\|R(\mu,B)\|\le M_\varepsilon/|\mu|$ on the reflected left-opening
sector $-\Sigma_{\pi/2+\delta-\varepsilon}$ for $\mu$, so that sector lies in
$\rho(B)$ and the spectrum of $B$ lies in the closed sector $\{\mu\ne0:|\arg\mu|\le\pi/2-\delta\}\cup\{0\}$.

This dictionary is why every theorem on this page states its convention: a
source that calls $A$ "sectorial" for the opposite operator $-A$, or that
writes $e^{-t(-A)}$, is using the Pazy-Lunardi sign and its sector and angle
must be reflected before transfer. The free use of laplace-transform-shaped
formulas below is always in the $e^{tA}$ convention fixed here: the resolvent
sector of $A$ opens around the positive real direction, the spectral sector
lies to the left, and positive time corresponds to an integral of
$e^{\lambda z}R(\lambda,A)$.
