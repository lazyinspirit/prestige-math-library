---
id: ex-convolution-on-a-discrete-group
kind: example
title: "Convolution on a discrete group"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-convolution-on-cc-and-l1-of-a-group, def-compactly-supported-convolution-on-a-group, lem-counting-measure-on-a-discrete-group, prop-compact-discrete-and-abelian-groups-are-unimodular, cor-cauchy-schwarz-inequality-for-l-two, def-square-summable-family-on-an-arbitrary-index-set, def-unimodular-locally-compact-group, def-involution-on-l1-of-a-group, lem-complex-haar-l1-and-l2-are-complete-and-cc-dense, def-complex-haar-lp-spaces-and-compactly-supported-functions, lem-l1-convolution-norm-inequality, def-compact-support-c-c-and-c-zero-on-an-lch-space, def-left-haar-integral-and-left-haar-measure, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Lynn Loomis, An Introduction to Abstract Harmonic Analysis, §§30–31"
      url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
      locator: "§§30A–30B and 31A–31E, printed pp. 115–125"
    - title: "Emmanuel Kowalski, Representation Theory of Groups, §§5.2–5.3"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§§5.2–5.3, printed pp. 212–230"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Example

Assume the Axiom of Choice. Let $G$ be a discrete group and let $\mu=c\cdot\text{counting}$ be a fixed left
Haar measure on it, $c>0$. Then $G$ is unimodular, the involution on $L^1(G)$ is
$f^{*}(x)=\overline{f(x^{-1})}$, convolution is the (absolutely convergent)
series
$$(f\ast g)(x)=c\sum_{y\in G}f(y)\,g(y^{-1}x)\qquad(f,g\in L^1(G)),$$
and $u:=c^{-1}\mathbf 1_{\{e\}}$ is the two-sided convolution identity, with
$\|u\|_1=1$. The formula is available even for an uncountable discrete group,
because an $\ell^1$ function vanishes off a countable set.

## Facts & Assumptions
**Given:** The Axiom of Choice, a discrete group $G$, a left Haar measure $\mu=c\cdot\text{counting}$ with $c>0$, and $L^1(G)=L^1(G,\mu;\mathbb C)$.

[F1] On an LCH group with the discrete topology, counting measure $\#_G$ is a left Haar measure and a right Haar measure, and the fixed left Haar measure equals $c\,\#_G$ with $c=\mu(\{e\})>0$; moreover $\int_GH\,d\mu=c\sum_{y\in G}H(y)$ for every nonnegative finite-valued $H$ and every $\mu$-integrable complex $H$, so $\mu$ is also right invariant ([[lem-counting-measure-on-a-discrete-group]]).

[F2] A discrete group is unimodular, so $\Delta_G\equiv1$ and the involution is $f^{*}(x)=\Delta_G(x^{-1})\overline{f(x^{-1})}=\overline{f(x^{-1})}$ ([[prop-compact-discrete-and-abelian-groups-are-unimodular]], [[def-unimodular-locally-compact-group]], [[def-involution-on-l1-of-a-group]]).

[F3] For $f,g\in C_c(G)$ the convolution is $(f\ast g)(x)=\int_Gf(y)g(y^{-1}x)\,d\mu(y)$, and convolution on $L^1(G)$ is the unique $\mathbb C$-bilinear extension of it satisfying $\|f\ast g\|_1\le\|f\|_1\|g\|_1$, hence jointly continuous ([[def-compactly-supported-convolution-on-a-group]], [[def-convolution-on-cc-and-l1-of-a-group]], [[lem-l1-convolution-norm-inequality]]).

[F5] Cauchy–Schwarz for $L^2$: if $f,g\in\mathcal L^2(\nu)$ for a measure $\nu$, then $\int|fg|\,d\nu\le\|f\|_2\|g\|_2$; sums over $G$ are the finite-subset sums of [[def-square-summable-family-on-an-arbitrary-index-set]] ([[cor-cauchy-schwarz-inequality-for-l-two]]).

[F4] $C_c(G)$ is dense in $L^1(G)$; $L^1(G)$ consists of the a.e. classes of integrable complex functions with $\|f\|_1=\int_G|f|\,d\mu$, and on a discrete group $C_c(G)$ is exactly the space of finitely supported complex functions ([[lem-complex-haar-l1-and-l2-are-complete-and-cc-dense]], [[def-complex-haar-lp-spaces-and-compactly-supported-functions]], [[def-compact-support-c-c-and-c-zero-on-an-lch-space]], [[def-left-haar-integral-and-left-haar-measure]]).

[A1] AC is assumed in the choice-function form of the cited definition; it is inherited here from the density and completeness supplier [F4] and is first used in step 1.3, where that supplier is applied ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

1.1 The measure and the involution. By [F1], $\mu=c\cdot\text{counting}$ and $\mu$ is right invariant, so $G$ is unimodular; by [F2] the involution of $L^1(G)$ is $f^{*}(x)=\overline{f(x^{-1})}$. [F1, F2]

1.2 The formula on finitely supported functions. For $f,g\in C_c(G)$ and $x\in G$, only finitely many $y$ have $f(y)\ne0$, and by [F3] and [F1] $(f\ast g)(x)=\int_Gf(y)g(y^{-1}x)\,d\mu(y)=c\sum_{y\in G}f(y)g(y^{-1}x)$. [F1, F3]

1.3 The series map is bilinear and bounded. For $f,g\in L^1(G)$ define $h(x):=c\sum_{y\in G}f(y)g(y^{-1}x)$; on this discrete group each $L^1$ class has a unique pointwise representative because every singleton has measure $c>0$. For each $x$, Cauchy--Schwarz gives $$\sum_{y\in G}|f(y)|\,|g(y^{-1}x)|\le\|f\|_{\ell^2}\|g\|_{\ell^2}\le\|f\|_{\ell^1}\|g\|_{\ell^1}<\infty,$$ where $y\mapsto y^{-1}x$ is a bijection and $\|f\|_{\ell^2}\le\|f\|_{\ell^1}$ for every summable family; this proves pointwise absolute convergence by [F1, F5]. For the $L^1$ bound, rearrange the nonnegative double sum using the finite-subsum definition of sums in [F5]: $$\sum_{x\in G}|h(x)|\le c\sum_{x\in G}\sum_{y\in G}|f(y)|\,|g(y^{-1}x)|=c\sum_{y\in G}|f(y)|\sum_{x\in G}|g(y^{-1}x)|=c\|f\|_{\ell^1}\|g\|_{\ell^1}.$$ The last equality again uses the bijection $x\mapsto y^{-1}x$. Thus $h\in L^1(G)$ and $$\|h\|_1=c\sum_x|h(x)|\le c^2\|f\|_{\ell^1}\|g\|_{\ell^1}=\|f\|_1\|g\|_1.$$ Absolute convergence also gives bilinearity, so $(f,g)\mapsto h$ is a bounded, hence continuous, bilinear map into $L^1(G)$. [A1, F1, F4, F5]

2.1 The series computes the convolution. On $C_c(G)\times C_c(G)$ the map $(f,g)\mapsto h$ of step 1.3 agrees with the $C_c$ convolution by step 1.2, and both $(f,g)\mapsto h$ and the $L^1$ convolution are continuous bilinear maps on $L^1(G)\times L^1(G)$ by steps 1.3 and [F3]. Since $C_c(G)$ is dense in $L^1(G)$ by [F4], they agree as $L^1$ classes for all $f,g\in L^1(G)$. Every singleton has positive measure $c$, so equality of classes on this discrete group is pointwise equality; hence $(f\ast g)(x)=c\sum_{y\in G}f(y)g(y^{-1}x)$ for all $x\in G$. [A1, F3, F4, step 1.2, step 1.3]

3.1 The convolution unit. Let $u:=c^{-1}\mathbf 1_{\{e\}}$; then $\int_G|u|\,d\mu=c\cdot c^{-1}=1$, so $u\in L^1(G)$ and $\|u\|_1=1$. By step 2.1, $(u\ast g)(x)=c\sum_{y\in G}u(y)g(y^{-1}x)=c\cdot c^{-1}g(x)=g(x)$ and $(g\ast u)(x)=c\sum_{y\in G}g(y)u(y^{-1}x)=c\cdot c^{-1}g(x)=g(x)$ for every $g\in L^1(G)$ and every $x$, the only contributing index being $y=e$, respectively $y=x$. So $u$ is a two-sided identity. [F1, step 2.1]

4.1 Collecting: on a discrete group with $\mu=c\cdot\text{counting}$ the group is unimodular with $f^{*}(x)=\overline{f(x^{-1})}$, convolution is the absolutely convergent series of step 2.1, and $c^{-1}\mathbf 1_{\{e\}}$ is the norm-one convolution identity. ∎ [step 1.1, step 2.1, step 3.1]

## Verification notes

- **Uncountable discrete groups.** In steps 1.3 and 2.1 the sums are taken over the countable set where $f$ and $g$ are nonzero, so no sum over an uncountable set is asserted; counting measure on an uncountable discrete group is not $\sigma$-finite.
- **Choice cost.** The only choice used is inherited from the density and completeness supplier [F4] and is recorded as [A1], where its exact use in steps 1.3 and 2.1 is declared; the series computation itself is choice-free.
