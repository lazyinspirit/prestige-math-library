---
id: thm-cauchy-pompeiu-formula
kind: theorem
title: The Cauchy–Pompeiu formula with fixed signs
status: draft
origin: pipeline
deps:
  - def-bigraded-complex-differential-forms
  - lem-c-one-stokes-for-complex-euclidean-domains
  - def-axiom-of-choice
  - def-wirtinger-derivatives
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lebl, Tasty Bits of Several Complex Variables, v4.4, Chapter 4 §4.1"
      url: https://www.jirka.org/scv/scv.pdf
      locator: "Theorem 4.1.1 and complete proof, printed pp. 130–131 (PDF pp. 130–131)"
    - title: "Jabbari, Notes for Analysis and Geometry of Several Complex Variables, §3.2"
      url: https://www.cimat.mx/~mohammad.jabbari/course-SCV.pdf
    - title: "Guillemin and Campbell, MIT 18.117 Lecture Notes, Lectures 1–4"
      url: https://ocw.mit.edu/courses/18-117-topics-in-several-complex-variables-spring-2005/3e8b0c3499d6226959485ace042cdaab_18117notes.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

Assume AC. Let $D\subset\mathbb C$ be a bounded domain with $C^1$ boundary,
let $f\in C^1(\overline D)$, and let $z\in D$. Orient $\partial D$ by the
outward-normal-first convention. Then

$$f(z)=\frac{1}{2\pi i}\int_{\partial D}\frac{f(\zeta)}{\zeta-z}\,d\zeta+\frac{1}{2\pi i}\int_D\frac{\partial_{\bar\zeta}f(\zeta)}{\zeta-z}\,d\zeta\wedge d\bar\zeta.$$

Equivalently, with $dA=dx\wedge dy$,

$$f(z)=\frac{1}{2\pi i}\int_{\partial D}\frac{f(\zeta)}{\zeta-z}\,d\zeta-\frac{1}{\pi}\int_D\frac{\partial_{\bar\zeta}f(\zeta)}{\zeta-z}\,dA(\zeta).$$

The singular area integrand is absolutely integrable near $z$.

## Facts & Assumptions

**Given:** Assume AC; $D$ is bounded with $C^1$ boundary, $f$ is $C^1$ on
$\overline D$, and $z\in D$.

[F1] AC says every family of nonempty sets has a choice function
([[def-axiom-of-choice]]).

[F2] The complex Stokes lemma explicitly assumes AC
([[lem-c-one-stokes-for-complex-euclidean-domains]]).

[F3] The one-variable Wirtinger derivative is
$\partial_{\bar\zeta}f=\tfrac12(\partial_xf+i\,\partial_yf)$
([[def-wirtinger-derivatives]]).

[F4] The bigraded-form definition identifies the exterior derivative as the
sum of its $\partial$ and $\bar\partial$ components
([[def-bigraded-complex-differential-forms]]).

[F5] Under these hypotheses, the complex Stokes lemma gives
$\int_{\partial D}\alpha=\int_D d\alpha$
([[lem-c-one-stokes-for-complex-euclidean-domains]]).

## Proof

**Proof technique:** direct.

1.1 For $0<r<\operatorname{dist}(z,\partial D)$ set $D_r=D\setminus\overline{B_r(z)}$ and $g(\zeta)=f(\zeta)/(\zeta-z)$ on its closure. Since $1/(\zeta-z)$ is holomorphic there, [F3] gives $\partial_{\bar\zeta}g=(\partial_{\bar\zeta}f)/(\zeta-z)$. Writing $dg=(\partial_\zeta g)d\zeta+(\partial_{\bar\zeta}g)d\bar\zeta$ and using $d(g\,d\zeta)=dg\wedge d\zeta$, the repeated $d\zeta$ term vanishes, so $d(g\,d\zeta)=-(\partial_{\bar\zeta}f)/(\zeta-z)\,d\zeta\wedge d\bar\zeta$. This is the needed type component of $d$ from [F4]. [F3, F4, given, algebra]

2.1 The continuous derivative $\partial_{\bar\zeta}f$ is bounded on the compact $\overline D$. Near $z$ the absolute area density is at most $C|\zeta-z|^{-1}dA$, whose integral over $B_\epsilon(z)$ is at most $2\pi C\epsilon$; away from $z$ the integrand is bounded on the bounded domain. Thus the area term is absolutely integrable and its integral over the region $D_r$ defined in step 1.1 converges to that over $D$ as $r\downarrow0$. Parametrizing the positively oriented circle by $\zeta=z+re^{it}$ gives $\int_{\partial B_r(z)}f(\zeta)(\zeta-z)^{-1}d\zeta=i\int_0^{2\pi}f(z+re^{it})\,dt\to2\pi i f(z)$ by continuity of $f$. [F3, given, step 1.1, algebra]

2.2 The boundary of $D_r$ from step 1.1 is the disjoint union $\partial D$ and the negatively oriented circle $-\partial B_r(z)$. The given full AC is the premise in [F1], so [F2] applies to $g\,d\zeta$ on $D_r$; if $D_r$ is disconnected, each component has C¹ boundary and there are finitely many components because the compact C¹ boundary has a finite graph-chart cover, each chart meeting only one local interior component. Apply [F5] to the components and add. Using step 1.1 gives $\int_{\partial D}f(\zeta)(\zeta-z)^{-1}d\zeta-\int_{\partial B_r(z)}f(\zeta)(\zeta-z)^{-1}d\zeta=-\int_{D_r}(\partial_{\bar\zeta}f)(\zeta-z)^{-1}d\zeta\wedge d\bar\zeta$. [F1, F2, F5, step 1.1, given, algebra]

3.1 Letting $r\downarrow0$ in step 2.2 and using step 2.1 yields $\int_{\partial D}f(\zeta)(\zeta-z)^{-1}d\zeta+\int_D(\partial_{\bar\zeta}f)(\zeta-z)^{-1}d\zeta\wedge d\bar\zeta=2\pi i f(z)$. Division by $2\pi i$ proves the first formula, with the plus sign fixed by the inner boundary orientation and the wedge swap in step 1.1. [step 2.2, step 2.1, step 1.1, algebra]

4.1 Since $d\zeta\wedge d\bar\zeta=(dx+i\,dy)\wedge(dx-i\,dy)=-2i\,dA$, the area term in step 3.1 equals $-\pi^{-1}\int_D(\partial_{\bar\zeta}f)(\zeta-z)^{-1}dA$. This proves the equivalent area form. [step 3.1, algebra] ∎
