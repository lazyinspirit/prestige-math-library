---
id: rem-artin-and-minimum-modulus-proofs-of-the-fundamental-theorem-of-algebra
kind: remark
title: "The Artin and minimum-modulus proofs of the fundamental theorem of algebra use different machinery"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-the-complex-numbers-are-algebraically-closed]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-27
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Chapter 5"
      url: "https://web.archive.org/web/20170516190815if_/http://www.jmilne.org:80/math/CourseNotes/FT.pdf"
    - title: "J. Lebl, Basic Analysis I, The Fundamental Theorem of Algebra"
      url: "https://www.jirka.org/ra/html/sec_fundalgeb.html"
pipeline_run: frontier-20
---

This page proves the fundamental theorem of algebra by the Artin route: one use
of the intermediate value theorem for odd-degree real polynomials, followed by a
Galois-theoretic argument using Sylow theory and quadratic extensions. A later
item, `thm-fundamental-theorem-of-algebra-minimum-modulus-proof`, proves the
same root-existence statement by a different route, using the minimum-modulus
method from complex analysis. Neither proof cites the other.

Milne's honesty note applies here as well: this is not purely a theorem of
algebra. The present proof keeps the analytic input small: it uses the
intermediate value theorem for the odd-degree root argument and the real
square-root existence behind the published complex square-root theorem, while
the later minimum-modulus proof spends much more analytic machinery.
