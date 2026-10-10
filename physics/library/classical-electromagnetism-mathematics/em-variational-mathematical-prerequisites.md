---
page: em-variational-mathematical-prerequisites
title: Em Variational Mathematical Prerequisites
status: draft
items: [lem-em-fundamental-variation-lemma, lem-em-compact-field-variation]
examples: []
---

The variational core of the electromagnetic action layer, developed as pure
mathematics on Euclidean space. The lemma
[[lem-em-fundamental-variation-lemma]] states the fundamental lemma of the
calculus of variations for continuous coefficients: under Countable Choice,
an open set $U\subseteq\mathbb R^n$ and a continuous $g:U\to\mathbb R^m$; if
$\int_U\langle g,h\rangle\,d\lambda=0$ for every compactly supported smooth
test field $h$, then $g=0$ pointwise on $U$, with the scalar case the source of
a contradiction argument that tests the nonnegative bump $g\chi$ and uses the
contrapositive of [[lem-em-continuous-localization]]. The lemma
[[lem-em-compact-field-variation]] fixes the Minkowski index conventions on
$V=\mathbb R^4$ and studies
$S[A]=\int_U\bigl(-\frac{1}{4\kappa}F_{\mu\nu}F^{\mu\nu}+J^\nu A_\nu\bigr)\,d\lambda$
for a bounded open $U$ with closure inside an open neighbourhood $N$ of the
smooth fields: it proves $S[A]$ finite, expands
$s\mapsto S[A+sh]$ as the quadratic polynomial with first variation
$\int_U\bigl(-\kappa^{-1}F^{\mu\nu}\partial_\mu h_\nu+J^\nu h_\nu\bigr)d\lambda$,
converts that first variation by the weak-derivative test identity into
$\int_U\bigl(\kappa^{-1}\partial_\mu F^{\mu\nu}+J^\nu\bigr)h_\nu\,d\lambda$, and
shows that stationarity for the compactly supported class
$C_c^\infty(U;V)$ is equivalent to the coefficient equation
$\partial_\mu F^{\mu\nu}=-\kappa J^\nu$ on $U$. Existence of stationary fields
and every physical identification of $\kappa$, $A$ or $S$ are explicitly not
asserted.

All items are mathematics: they carry `domain: mathematics`, depend only on
mathematical suppliers, and assert no physical conclusion. Countable Choice is
declared and used exactly through the localization lemma, the classical-to-weak
derivative comparison and the Borel measurability of continuous functions, as
each item records. The companion examples page
[[em-variational-mathematical-prerequisites-examples]] records the hypothesis
and convention boundaries of these two lemmas.
