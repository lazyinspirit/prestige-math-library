---
id: def-smirnov-class-on-the-disc
kind: definition
title: "The Smirnov class on the disc"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-nevanlinna-class-on-the-disc, thm-nevanlinna-boundary-values-and-log-integrability, def-poisson-integral-of-finite-boundary-measure, lem-poisson-jensen-inequality-hardy-functions, def-analytic-hardy-space-disc, def-countable-choice]
justified_by: [lem-smirnov-class-quotient-characterisation]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. B. Garnett, Bounded Analytic Functions, revised first edition, Chapter II §5"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
      locator: "printed pp. 68-69: the Smirnov class $N^+$ as the $f\\in N$ for which $\\log|f|\\le P[\\log|f^*|]$, and its quotient characterization."
    - title: "R. K. Srivastava, Lecture Notes on Hardy Spaces (MA650, IIT Guwahati), §6.3"
      url: "https://fac.iitg.ac.in/rksri/MA650%20Advanced%20Hardy%20Spaces%20Notes.pdf"
      locator: "The Nevanlinna (N) and Smirnov (N+) classes, printed pp. 64-69: the definition of $N^+$ and the quotient description."
---

## Definition

Assume [[def-countable-choice|countable choice]]. The **Smirnov class**
$N^+(\mathbb D)$ is the set of $f\in N(\mathbb D)$ such that, with $f^*$ the
boundary function of
[[thm-nevanlinna-boundary-values-and-log-integrability]] (so that
$\log|f^*|\in L^1(\mathbb T,m)$, extended by $-\infty$ where $f^*=0$),
$$\log|f(z)|\le P[\log|f^*|](z)\qquad\text{for every }z\in\mathbb D .$$
The zero function is included: for it $\log|f|=-\infty$, so the inequality
holds by the convention $\log0=-\infty$, and $0\in N(\mathbb D)$; the Poisson
integral on the right is the one of
[[def-poisson-integral-of-finite-boundary-measure]].

By the Poisson-Jensen inequality of
[[lem-poisson-jensen-inequality-hardy-functions]], every $f\in H^p(\mathbb D)$,
$0<p\le\infty$, lies in $N^+(\mathbb D)$ with equality in the displayed
inequality; hence
$$H^p(\mathbb D)\subseteq N^+(\mathbb D)\subseteq N(\mathbb D)\qquad(0<p\le\infty),$$
the second inclusion being part of the definition.

Equivalently, $N^+(\mathbb D)$ is the class of quotients $g/h$ with
$g,h\in H^\infty(\mathbb D)$ and $h$ outer (and then $h$ may be normalized by
$h(0)>0$); this equivalence is proved in
[[lem-smirnov-class-quotient-characterisation]]. The class $N^+$ is a complex
vector space: it is closed under sums and scalar multiples, since $N$ is (the
majorant form of $N$ is preserved by finite linear combinations) and the
inequality defining $N^+$ is preserved because the boundary function, the
Poisson integral and the inequality $|f+g|\le|f|+|g|$ behave additively on
finite linear combinations.
