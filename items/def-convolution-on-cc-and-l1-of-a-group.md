---
id: def-convolution-on-cc-and-l1-of-a-group
kind: definition
title: "Convolution on L1 of a locally compact group"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-compactly-supported-convolution-on-a-group, lem-l1-convolution-norm-inequality, lem-complex-haar-l1-and-l2-are-complete-and-cc-dense, def-complex-haar-lp-spaces-and-compactly-supported-functions, def-axiom-of-choice]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Lynn Loomis, An Introduction to Abstract Harmonic Analysis, §§30–31"
      url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
      locator: "§31A–31E, printed pp. 119–125"
    - title: "Emmanuel Kowalski, Representation Theory of Groups, §§5.2–5.3"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§5.3, printed pp. 225–230"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Definition

Assume AC. Let $G$ be an LCH group with a fixed left Haar measure $\mu$, write
$C_c(G):=C_c(G;\mathbb C)$ for the continuous complex-valued functions of
compact support and $L^1(G):=L^1(G,\mu;\mathbb C)$ for the complex Haar space
with its norm $\|\cdot\|_1$
([[def-complex-haar-lp-spaces-and-compactly-supported-functions]]), and let the
symbol $\ast$ denote the convolution of $C_c(G)$
([[def-compactly-supported-convolution-on-a-group]]).

**The extension.** There is exactly one map
$L^1(G)\times L^1(G)\to L^1(G)$, again written $(f,g)\mapsto f\ast g$ and called
**convolution** on $L^1(G)$, with all three of the following properties.

1. It is $\mathbb C$-bilinear: $(\alpha f+\beta f')\ast g=\alpha(f\ast g)+\beta(f'\ast g)$
   and $f\ast(\alpha g+\beta g')=\alpha(f\ast g)+\beta(f\ast g')$ for all
   $\alpha,\beta\in\mathbb C$ and $f,f',g,g'\in L^1(G)$.
2. It is bounded, hence jointly continuous, with
   $$\|f\ast g\|_1\le\|f\|_1\,\|g\|_1 \qquad (f,g\in L^1(G));$$
   consequently the map $(f,g)\mapsto f\ast g$ is continuous for the product of
   the norm topologies.
3. It agrees with the $C_c$ convolution of
   [[def-compactly-supported-convolution-on-a-group]] whenever both arguments
   lie in $C_c(G)$.

**Representatives are not part of the data.** For a general $f\in L^1(G)$ the
symbol $f(x)$ has no meaning: $f$ is an equivalence class, and no pointwise
formula is asserted for the extended product. What *is* asserted is that for
$f\in L^1(G)$ and $g\in C_c(G)$ the class $f\ast g$ is the limit in $L^1(G)$ of
$u_n\ast g$ for any sequence $u_n\in C_c(G)$ with $u_n\to f$, and dually in the
second variable; the $\mu$-a.e. integral formula
$g\mapsto\int_Gf(y)g(y^{-1}x)\,d\mu(y)$ for the representative of $f\ast g$ is
not claimed here and is not used on this page except through the class-level
identity $f\ast g$ for $C_c$ arguments.

**Well-definedness.** Existence. Fix $g\in C_c(G)$. If $u_n\in C_c(G)$ converge
to $f$ in $L^1(G)$, then $u_n\ast g$ is a Cauchy sequence in $L^1(G)$, because
$\|u_n\ast g-u_m\ast g\|_1=\|(u_n-u_m)\ast g\|_1\le\|u_n-u_m\|_1\|g\|_1$ by the
$C_c$ norm inequality ([[lem-l1-convolution-norm-inequality]]), and $L^1(G)$ is
complete ([[lem-complex-haar-l1-and-l2-are-complete-and-cc-dense]]); such a
sequence $u_n$ exists because $C_c(G)$ is dense in $L^1(G)$ (same item). The
limit is independent of the choice of $(u_n)$, because the interleaving of two
such sequences is again a sequence in $C_c(G)$ converging to $f$, so both
limits equal its limit. Passing to the limit in the inequality for the
approximants gives $\|f\ast g\|_1\le\|f\|_1\|g\|_1$, and the assignment
$f\mapsto f\ast g$ is linear on $C_c(G)$ and bounded, so it extends to a linear
map on $L^1(G)$ with the same bound. Repeating the construction in the second
variable produces the two-variable map, and the two constructions agree on
$C_c(G)\times C_c(G)$: for $f,g\in C_c(G)$ every approximant may be taken equal
to $f$ or to $g$, and the two-order computation gives the same limit because
$\|u_n\ast g-f\ast v_m\|_1\le\|u_n-f\|_1\|g\|_1+\|f\|_1\|g-v_m\|_1\to0$.

Bilinearity is inherited from the approximants: for $f,f'\in L^1(G)$, scalars
$\alpha,\beta$ and $g\in C_c(G)$, approximating $f$ and $f'$ by $u_n,u'_n\in
C_c(G)$ gives approximants $\alpha u_n+\beta u'_n$ of $\alpha f+\beta f'$, and
$(\alpha u_n+\beta u'_n)\ast g=\alpha(u_n\ast g)+\beta(u'_n\ast g)$ by
bilinearity on $C_c(G)$; uniqueness of limits in $L^1(G)$ gives
$(\alpha f+\beta f')\ast g=\alpha(f\ast g)+\beta(f'\ast g)$, and a second
approximation in the variable $g$ gives the same identity for general
$g\in L^1(G)$.

Uniqueness. The subset $C_c(G)\times C_c(G)$ is dense in
$L^1(G)\times L^1(G)$: given $f,g$ and $\epsilon>0$, density of $C_c(G)$
provides $u,v\in C_c(G)$ with $\|u-f\|_1<\epsilon$ and $\|v-g\|_1<\epsilon$,
so $(u,v)$ is within $\epsilon$ of $(f,g)$ for the product metric. Any two maps
$L^1(G)\times L^1(G)\to L^1(G)$ satisfying properties 1–3 are continuous by 2
and agree on that dense subset, hence they agree everywhere: a norm-continuous
map on a metric space is determined by its values on a dense subset.
