---
id: lem-convolution-preserves-cc-and-is-associative
kind: lemma
title: "Convolution preserves compact support and is associative"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-compactly-supported-convolution-on-a-group, lem-compactly-supported-kernels-admit-commuting-radon-integrals, def-left-haar-integral-and-left-haar-measure, def-compact-support-c-c-and-c-zero-on-an-lch-space, thm-finite-products-of-compact-spaces, thm-compactness-under-continuous-maps, thm-compact-subset-of-a-hausdorff-space-is-closed, def-axiom-of-choice]
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
      locator: "§31A–31E, printed pp. 119–125"
    - title: "Emmanuel Kowalski, Representation Theory of Groups, §§5.2–5.3"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§5.3, printed pp. 225–230"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Assume AC. For an LCH group $G$ with fixed left Haar measure, $C_c(G)$ is closed
under the convolution of
[[def-compactly-supported-convolution-on-a-group]], and
$$(f*g)*h=f*(g*h)\qquad(f,g,h\in C_c(G)).$$

## Facts & Assumptions
**Given:** An LCH group $G$, a left Haar measure $\mu$, and $f,g,h\in C_c(G)$ complex-valued of compact support.

[F1] $(f\ast g)(x)=\int_G f(y)g(y^{-1}x)\,d\mu(y)$, and for fixed $x$ the integrand is continuous in $y$ and supported in $\operatorname{supp}f$ ([[def-compactly-supported-convolution-on-a-group]]).

[F2] Assume AC. For LCH spaces $X,Y$ with positive functionals and real $F\in C_c(X\times Y)$, the partial integrals are continuous and compactly supported and the iterated integrals commute; complex kernels obey the same identity ([[lem-compactly-supported-kernels-admit-commuting-radon-integrals]]).

[F3] A left Haar measure is nonzero, left invariant and finite on compact sets ([[def-left-haar-integral-and-left-haar-measure]]).

[F4] Support is the closure of the nonzero locus, and continuous images of compact sets are compact ([[def-compact-support-c-c-and-c-zero-on-an-lch-space]], [[thm-compactness-under-continuous-maps]]).

[F5] The product of two compact spaces is compact and a compact subset of a Hausdorff space is closed ([[thm-finite-products-of-compact-spaces]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]]).

[A1] AC is assumed in the choice-function form of the cited definition ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 For fixed $f,g\in C_c(G)$ the kernel $F(x,y):=f(y)g(y^{-1}x)$ is continuous on $G\times G$, and $F(x,y)\ne0$ forces $y\in\operatorname{supp}f$ and $y^{-1}x\in\operatorname{supp}g$, that is $x\in\operatorname{supp}f\cdot\operatorname{supp}g$; by [F4] the set $(\operatorname{supp}f\cdot\operatorname{supp}g)\times\operatorname{supp}f$ is compact by [F5] and closed, so $\operatorname{supp}F\subseteq(\operatorname{supp}f\cdot\operatorname{supp}g)\times\operatorname{supp}f$ and $F\in C_c(G\times G;\mathbb C)$. [F4, F5]

1.2 The inner integral of the first expression equals the inner integral of the second: substituting $z=yw$ and using left invariance of $\mu$ from [F3] gives $\int_Gg(y^{-1}z)h(z^{-1}x)\,d\mu(z)=\int_Gg(w)h(w^{-1}y^{-1}x)\,d\mu(w)$, since $(yw)^{-1}=w^{-1}y^{-1}$ and $\int_GH(z)d\mu(z)=\int_GH(yw)d\mu(w)$ for the compactly supported continuous $H$ occurring here. [F3, F4]

2.1 Applying [F2] to $F$ (with [A1] supplying its choice hypothesis) shows that the partial integral $x\mapsto\int_GF(x,y)\,d\mu(y)=(f\ast g)(x)$ is continuous with compact support; hence $f\ast g\in C_c(G)$ and $C_c(G)$ is closed under convolution. [A1, F1, F2, step 1.1]

3.1 For $f,g,h\in C_c(G)$ and $x\in G$, expanding the definitions gives $((f\ast g)\ast h)(x)=\int_G\int_G f(y)g(y^{-1}z)h(z^{-1}x)\,d\mu(y)\,d\mu(z)$ and $(f\ast(g\ast h))(x)=\int_G\int_G f(y)g(w)h(w^{-1}y^{-1}x)\,d\mu(w)\,d\mu(y)$: in both expressions the iterated integrals exist by two applications of [F2] to the continuous compactly supported kernels obtained as in step 1.1. [F1, F2, step 2.1]

4.1 Combining steps 3.1 and 1.2 gives $((f\ast g)\ast h)(x)=(f\ast(g\ast h))(x)$ for every $x\in G$, hence $(f\ast g)\ast h=f\ast(g\ast h)$, which is the asserted associativity. ∎ [step 3.1, step 1.2]

## Remarks

- **Support bound.** The same computation gives $\operatorname{supp}(f\ast g)\subseteq\operatorname{supp}f\cdot\operatorname{supp}g$, a compact set.
- **Where the choice hypothesis sits.** The only use of [A1] is the inherited hypothesis of the compact-kernel interchange lemma [F2]; the substitution and associativity computation itself is choice-free.
