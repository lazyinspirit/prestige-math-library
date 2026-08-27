---
id: def-plane-subharmonic-function
kind: definition
title: "Subharmonic functions on plane domains"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Boris Khoruzhenko, Potential Theory lecture notes"
      url: "https://www.yumpu.com/en/document/view/12029492/potential-theory"
---

## Definition

Let $\Omega\subseteq\mathbb C$ be a complex domain. A function
$u:\Omega\to[-\infty,\infty)$ is **subharmonic** on $\Omega$ when:

1. $u$ is upper semicontinuous;
2. on no connected component of $\Omega$ is $u$ identically $-\infty$;
3. for every closed disc $\overline{D(a,r)}\subseteq\Omega$,
   $$u(a)\le\frac1{2\pi}\int_0^{2\pi}u(a+re^{it})\,dt,$$
   where the integral is taken in the extended-real sense.

## Remarks

The radius $r$ is always positive. The value $u(a)$ is allowed to be
$-\infty$, in which case the submean inequality is automatic.

On a circle, upper semicontinuity gives a finite upper bound, so the integral
above can only fail in the downward direction; the next lemma records that the
boundary function is Borel and that the average is therefore defined in
$[-\infty,\infty)$.
