---
title: Separated raw-cycle Zariski descent input
status: published
research_item: thm-adjudicate-f6007757a8ac-separated-cycle-descent-input
dependency_level: 4
---

PDF p. 4: Smooth raw cycle comparison; PDF p. 16: Supported generic localization

## Prerequisites

- [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)
- [Mazza, Voevodsky and Weibel, Lecture Notes on Motivic Cohomology, December 2005 author PDF · Standing convention printed p.5; Definition19.10, Theorem19.11, Proposition19.12 and proof, printed pp.168–169 (PDF pp.179–180)](https://sites.math.rutgers.edu/~weibel/MVWnotes/xprova.pdf)

## Statement
Let $Y$ be a smooth quasi-projective finite-type scheme over a field, and $r\geq0$. Regard $C(W)=z^r(W,\bullet)$ in cohomological degrees $-n$, and let $aC$ be its degreewise sheafification on the small Zariski site of $Y$. The canonical unit
$$C(Y)\longrightarrow R\Gamma(Y_{\mathrm{Zar}},aC)$$
is a quasi-isomorphism. The comparison is natural for open restriction.

## Source contract
**Given:** The hypotheses above and the unnormalized simplicial Bloch convention.

**Goal:** Supply the established separated case used in finite-affine-cover induction.

[F1] MVW Proposition19.12 and its two-localization-row proof, together with Theorem19.11, supply this actual unit equivalence; the standing convention on printed p.5 is separated. Only the indicated quasi-projective cases are used.

## External input
Import [F1] at the stated scope and reading limits. The nonseparated extension is a separate local deduction. No proof of the Brown–Gersten theorem or the deep moving lemma is claimed here.
