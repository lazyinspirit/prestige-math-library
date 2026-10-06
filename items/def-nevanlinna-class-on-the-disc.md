---
id: def-nevanlinna-class-on-the-disc
kind: definition
title: "The Nevanlinna class on the disc"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-complex-differentiability-holomorphic-and-entire, def-analytic-hardy-space-disc, def-plane-subharmonic-function, thm-log-modulus-of-a-holomorphic-function-is-subharmonic, lem-nevanlinna-sup-mean-criterion, thm-mean-value-property-for-plane-harmonic-functions, def-the-one-dimensional-torus-and-normalized-haar-integral, def-countable-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "historical complete Step5 reader; item def-nevanlinna-class-on-the-disc; evidence research/frontier-38-owner-30-reader-20.md, research/frontier-38-owner-30-reader-findings-20.json. Original reports retain their scope and source limitations; no recursive audit of all published prerequisites or complete bibliography is claimed. Restored from completed 2026-10-03 evidence; no new audit performed."
    delegated_by: "tools/autopilot frontier-38-owner-30 historical dispatched reader/repair lane"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. B. Garnett, Bounded Analytic Functions, revised first edition, Chapter II §5"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
      locator: "The Nevanlinna class, printed pp. 65-66: the definition by a harmonic majorant of $\\log^+|f|$ and the equivalent form (5.1)."
    - title: "R. K. Srivastava, Lecture Notes on Hardy Spaces (MA650, IIT Guwahati), §6.3"
      url: "https://fac.iitg.ac.in/rksri/MA650%20Advanced%20Hardy%20Spaces%20Notes.pdf"
      locator: "The Nevanlinna (N) and Smirnov (N+) classes, printed pp. 64-69: definitions, examples and elementary containments."
---

## Definition

Assume [[def-countable-choice|countable choice]]. Write $\mathbb T$,
$m$ and $\mathbb D$ for the torus with its normalized Haar measure and the unit
disc ([[def-the-one-dimensional-torus-and-normalized-haar-integral]]), and put
$\log^+x:=\max\{\log x,0\}$ for $x>0$, with $\log^+0:=0$.

A holomorphic function $f:\mathbb D\to\mathbb C$
([[def-complex-differentiability-holomorphic-and-entire]]) belongs to the
**Nevanlinna class** $N(\mathbb D)$ if the subharmonic function
$\log^+|f|$ has a harmonic majorant on $\mathbb D$, that is, if there is a
harmonic function $h$ on $\mathbb D$ with
$$\log^+|f(z)|\le h(z)\qquad(z\in\mathbb D).$$
Since $\log^+|f|\ge0$, any such majorant satisfies $h\ge0$ on $\mathbb D$; the
function $\log^+|f|$ is subharmonic: it is zero if $f\equiv0$, and otherwise $\log|f|$ is subharmonic and
$\log^+|f|=\max(\log|f|,0)$ is a finite maximum of subharmonic functions,
with $\log|f|=-\infty$ at the zeros of $f$
([[thm-log-modulus-of-a-holomorphic-function-is-subharmonic]],
[[def-plane-subharmonic-function]]). Constant functions are harmonic, so every
bounded holomorphic function lies in $N(\mathbb D)$.

**Equivalent sup-mean form.** A holomorphic $f$ belongs to $N(\mathbb D)$ if
and only if
$$\sup_{0<r<1}\int_{\mathbb T}\log^+|f(r\zeta)|\,dm(\zeta)<+\infty.$$
The forward direction is the mean value property of a harmonic majorant: if
$\log^+|f|\le h$ with $h$ harmonic, then
$\int_{\mathbb T}\log^+|f(r\zeta)|\,dm(\zeta)\le\int_{\mathbb T}h(r\zeta)\,dm(\zeta)=h(0)$
for every $0<r<1$ ([[thm-mean-value-property-for-plane-harmonic-functions]]);
the converse is the Poisson-modification and increasing-Harnack construction of
[[lem-nevanlinna-sup-mean-criterion]], which is quoted here as the
well-definedness statement for the two equivalent forms. Both forms are used in
this pair: the majorant form in
[[thm-nevanlinna-class-is-bounded-quotient-class]] and
[[thm-nevanlinna-boundary-values-and-log-integrability]], the sup-mean form in
[[lem-nevanlinna-blaschke-factorization]].

**The Hardy classes are contained in $\mathbf N(\mathbb D)$.** Every
$H^p(\mathbb D)$, $0<p\le\infty$, is contained in $N(\mathbb D)$
([[def-analytic-hardy-space-disc]]). For $0<p<\infty$ one has
$\log^+x\le x^p/p$ for every $x\ge0$: the inequality is trivial for $x\le1$,
and for $x\ge1$ it follows from $\frac{d}{dx}\bigl(x^p/p-\log x\bigr)=x^{p-1}-1/x\ge0$
and its value at $x=1$ is $1/p>0$. Hence
$$\int_{\mathbb T}\log^+|f(r\zeta)|\,dm(\zeta)\le\frac1p\int_{\mathbb T}|f(r\zeta)|^p\,dm(\zeta)\le\frac1p\|f\|_{H^p}^p<+\infty$$
for every $0<r<1$, so the sup-mean form of membership holds and
$f\in N(\mathbb D)$. For $p=\infty$ one has $\log^+|f|\le\log^+\|f\|_{H^\infty}$
pointwise, because $|f(z)|\le\|f\|_{H^\infty}$ and $\log^+$ is nondecreasing;
the constant function $h:=\log^+\|f\|_{H^\infty}$ is harmonic with
$\log^+|f|\le h$, so $f\in N(\mathbb D)$ directly by the majorant form. (For
$\|f\|_{H^\infty}<1$ the constant majorant is $0$, which is why the bound is
written with $\log^+$ on both sides.)

This is the disc Nevanlinna class of holomorphic functions. No result from
Nevanlinna value-distribution theory for meromorphic functions on $\mathbb C$
is used in this pair. No
choice principle beyond countable choice is used.
