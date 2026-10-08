---
id: ex-compact-groups-have-a-constant-reiter-net
kind: example
title: Compact groups have a constant Reiter net
status: draft
origin: pipeline
dependency_level: 8
proof_strategy: direct
deps:
  - cor-existence-of-left-and-right-haar-measures
  - lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets
  - def-complex-haar-lp-spaces-and-compactly-supported-functions
  - def-complex-haar-l-infinity-space
  - def-essential-supremum-with-respect-to-a-measure
  - def-left-haar-integral-and-left-haar-measure
  - def-measure-preserving-transformation-and-system
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-integrals-are-invariant-under-measure-preserving-maps
  - thm-the-lebesgue-integral-respects-almost-everywhere-equality
  - def-integrable-real-and-complex-functions-and-their-integrals
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - def-nonnegative-lebesgue-integral
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - def-reiter-condition-p1
  - thm-amenability-is-equivalent-to-reiter-p1
  - def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group
  - def-amenable-locally-compact-group
  - def-directed-set-and-net
  - prop-compact-and-locally-compact-abelian-groups-are-amenable
  - def-axiom-of-choice
axiom_use: >-
  Assume AC. It is used through left Haar measure existence, normalization by
  the positive finite measure of the compact group, and the Reiter-to-amenability
  equivalence. The constant net and integral invariance calculation add no
  further choice or dependent-choice use.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press, 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix G.1, Example G.1.5 (printed p. 448), identifies normalized Haar probability as the invariant mean on C(K); Appendix G.3, Theorem G.3.1(iii) (printed pp. 452-453), states Reiter (P1). The item locally verifies the complex L-infinity mean on equivalence classes."
---

## Statement

Assume AC. Let $K$ be a compact locally compact Hausdorff group. Choose a left
Haar measure $\nu$ on $K$ and put $\mu:=\nu/\nu(K)$; the denominator is positive
and finite, so $\mu$ is a normalized Haar probability. Let
$f:=\mathbf 1_K\in L^1(K)$. Then
$f\ge0$, $\lVert f\rVert_1=1$, and $L_xf=f$ for every $x\in K$, because
$L_x\mathbf 1_K=\mathbf 1_{xK}=\mathbf 1_K$. Hence the constant net
$f_i:=f$ satisfies Reiter's condition (P1) exactly, with
$\Delta_Q(f)=0$ for every compact $Q\subseteq K$,
and $K$ is amenable by [[thm-amenability-is-equivalent-to-reiter-p1]]. This is
the strongest possible form of approximate invariance: the approximating
densities do not vary with the tolerance.

## Facts & Assumptions

**Given:** AC and a compact locally compact Hausdorff group $K$.

[A1] AC is the choice-function principle ([[def-axiom-of-choice]]).

[F1] Under AC, a locally compact Hausdorff group has a left Haar measure $\nu$ ([[cor-existence-of-left-and-right-haar-measures]], [[def-left-haar-integral-and-left-haar-measure]]). A compact group $K$ is open in itself and compact, so $0<\nu(K)<\infty$ ([[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]]); the rescaling $\mu:=\nu/\nu(K)$ is left Haar and satisfies $\mu(K)=1$.

[F2] Left translations $T_x(y)=x^{-1}y$ are Borel and preserve left Haar measure, and integration is invariant under measure-preserving maps ([[def-left-haar-integral-and-left-haar-measure]], [[def-measure-preserving-transformation-and-system]], [[thm-continuous-preimages-of-borel-sets-are-borel]], [[thm-integrals-are-invariant-under-measure-preserving-maps]]).

[F3] Complex $L^1(K)$ consists of almost-everywhere classes with $\|g\|_1=\int_K|g|\,d\mu$; a nonnegative indicator has integral equal to the measure of its set ([[def-complex-haar-lp-spaces-and-compactly-supported-functions]], [[def-integrable-real-and-complex-functions-and-their-integrals]], [[def-nonnegative-lebesgue-integral]], [[def-integral-of-a-nonnegative-simple-function]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]).

[F4] Complex $L^\infty(K)$ consists of Borel almost-everywhere classes with finite essential supremum; for every $\varphi\in L^\infty(K)$ and $\eta>0$, $|\varphi|\le \|\varphi\|_\infty+\eta$ almost everywhere ([[def-complex-haar-l-infinity-space]], [[def-essential-supremum-with-respect-to-a-measure]]).

[F5] Since $\mu(K)=1$, every $\varphi\in L^\infty(K)$ is integrable: the essential bound in [F4] gives $\int_K|\varphi|\,d\mu\le (\|\varphi\|_\infty+\eta)\mu(K)<\infty$ for any $\eta>0$; order and scalar rules for the nonnegative integral apply ([[def-integrable-real-and-complex-functions-and-their-integrals]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [F1, F4]).

[F6] The complex integral is independent of the representative modulo almost- everywhere equality and is complex-linear on $L^1$ ([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F7] Reiter (P1) requires, for every compact $Q$ and $\varepsilon>0$, a nonnegative $L^1$ class of norm one with $\Delta_Q(f)\le\varepsilon$; the empty-test defect is zero ([[def-reiter-condition-p1]]).

[F8] Under AC, Reiter (P1) implies amenability ([[thm-amenability-is-equivalent-to-reiter-p1]]).

[F9] A mean on complex $L^\infty(K)$ is a positive complex-linear functional with value one on the constant-one class, and amenability is existence of a left-invariant such mean ([[def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group]], [[def-amenable-locally-compact-group]]).

[F10] A singleton with its unique preorder is a nonempty directed set and therefore indexes a net ([[def-directed-set-and-net]]).

[F11] The compact-group clause records that every compact LCH group is amenable ([[prop-compact-and-locally-compact-abelian-groups-are-amenable]]).

## Proof

**Given:** AC, the compact LCH group $K$, and its normalized left Haar probability $\mu$.

**Proof technique:** direct.

1.1 By [A1, F1], choose left Haar $\nu$ and set $\mu:=\nu/\nu(K)$; since [F1] gives $0<\nu(K)<\infty$, positive scalar rescaling preserves left Haar properties and $\mu(K)=1$. Set $f=\mathbf 1_K$. It is Borel and nonnegative, and [F3] gives $\|f\|_1=\int_K\mathbf 1_K\,d\mu=\mu(K)=1$, so $f\in\mathcal P$. For every $x,y\in K$, $L_xf(y)=f(x^{-1}y)=1=f(y)$ because $x^{-1}y\in K$. Thus $L_xf=f$ as an $L^1$ class and $\|L_xf-f\|_1=0$ for every $x\in K$; in particular $\Delta_Q(f)=0$ for every compact $Q$, including $Q=\varnothing$. [A1, F1, F3, F7, construct]

2.1 By [F10], the singleton $I=\{*\}$ with its unique preorder is directed; set $f_*:=f$. For every compact $Q\subseteq K$ and $\varepsilon>0$, step 1.1 gives $\Delta_Q(f_*)=0\le\varepsilon$, so this constant net witnesses Reiter (P1) by [F7]. The Reiter equivalence [F8], under the stated AC, proves that $K$ is amenable. [A1, F7, F8, F10, step 1.1, construct]

3.1 Define $m([\varphi]):=\int_K\varphi\,d\mu$ on complex $L^\infty(K)$. By [F5] every such class is integrable; [F6] makes the value independent of the representative and complex-linear. If $[\varphi]\ge0$, its nonnegative representative has nonnegative integral, so $m$ is positive by [F3]; and $m(1_K)=\mu(K)=1$ by [F1] and [F3]. For $x\in K$, [F2] gives $m(L_x[\varphi])=\int_K\varphi(x^{-1}y)\,d\mu(y)=\int_K\varphi\,d\mu$ for every $[\varphi]\in L^\infty(K)$. Thus $m$ is a left-invariant mean in the sense of [F9], explicitly realizing the compact-group amenability clause of [F11] under the library's complex $L^\infty$ convention. The local calculation verifies the normalized-Haar mean on all $L^\infty$ classes. [A1, F1, F2, F3, F4, F5, F6, F9, F11, step 2.1, algebra] ∎

## Sources

BHV, *Kazhdan's Property (T)*, Appendix G.1 Example G.1.5 (printed p. 448) identifies normalized Haar probability as the invariant mean on $C(K)$ and concludes compact groups are amenable. Appendix G.3 Theorem G.3.1(iii) (printed pp. 452–453) states Reiter (P1) for compact test sets. The local calculation extends the normalized-Haar mean to the library's complex $L^\infty$ classes.
