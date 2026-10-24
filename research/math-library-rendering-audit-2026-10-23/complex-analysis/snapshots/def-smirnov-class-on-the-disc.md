---
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-20.md"
      - "research/frontier-38-owner-30-alpha-batch-20-5a.md"
      - "research/frontier-38-owner-30-step5-hash-20-post-5a.json"
    content_sha256: "c6e5efa2317e61d160242e4fcf6ccd2fd0fe67a0a02f0e75a160a77c6043edaa"
id: def-smirnov-class-on-the-disc
kind: definition
title: "The Smirnov class on the disc"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-inner-singular-inner-and-outer-functions, def-nevanlinna-class-on-the-disc, thm-nevanlinna-boundary-values-and-log-integrability, def-poisson-integral-of-finite-boundary-measure, lem-poisson-jensen-inequality-hardy-functions, def-analytic-hardy-space-disc, def-countable-choice]
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
$N^+(\mathbb D)$ contains $0$ and consists otherwise of the nonzero $f\in N(\mathbb D)$ such that, with $f^*$ the
boundary function of
[[thm-nevanlinna-boundary-values-and-log-integrability]] (so that
$\log|f^*|\in L^1(\mathbb T,m)$, extended by $-\infty$ where $f^*=0$),
$$\log|f(z)|\le P[\log|f^*|](z)\qquad\text{for every }z\in\mathbb D .$$
For the zero function, the boundary function is zero; we interpret both sides
of the displayed inequality as $-\infty$. Its boundary logarithm is not an
$L^1$ datum, and the finite-measure Poisson construction is used only for
nonzero functions. The Poisson integral for the nonzero case is the one of
[[def-poisson-integral-of-finite-boundary-measure]].

By the Poisson-Jensen inequality of
[[lem-poisson-jensen-inequality-hardy-functions]], every $f\in H^p(\mathbb D)$,
$0<p\le\infty$, lies in $N^+(\mathbb D)$ by the displayed inequality; hence
$$H^p(\mathbb D)\subseteq N^+(\mathbb D)\subseteq N(\mathbb D)\qquad(0<p\le\infty),$$
the second inclusion being part of the definition.

Equivalently, $N^+(\mathbb D)$ is the class of quotients $g/h$ with
$g,h\in H^\infty(\mathbb D)$ and $h$ outer (and then $h$ may be normalized by
$h(0)>0$); this equivalence is proved in
[[lem-smirnov-class-quotient-characterisation]]. The class $N^+$ is a complex vector space, as certified using the quotient characterization just proved by [[lem-smirnov-class-quotient-characterisation]], its `justified_by` supplier. Indeed, for nonzero $f_j=g_j/h_j$ with bounded holomorphic numerators and bounded outer denominators, $h_1h_2$ is bounded and outer: its boundary logarithm is the sum of the two integrable boundary logarithms, and its interior log-modulus is their Poisson integral by linearity, in the outer convention of [[def-inner-singular-inner-and-outer-functions]]. Thus $f_1+f_2=(g_1h_2+g_2h_1)/(h_1h_2)$ has bounded numerator and bounded outer denominator. If the numerator is zero, the sum is the already included zero function; otherwise the characterization gives membership in $N^+$. Scalar multiplication uses the same denominator and numerator $cg_j$, including $c=0$. This certification is not used in the proof of the quotient characterization, which depends only on the displayed defining inequality.
