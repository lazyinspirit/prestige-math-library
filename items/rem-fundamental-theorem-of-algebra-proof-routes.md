---
id: rem-fundamental-theorem-of-algebra-proof-routes
kind: remark
title: "The fundamental-group and minimum-modulus proofs of the fundamental theorem of algebra"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-fundamental-theorem-of-algebra-via-the-fundamental-group, thm-fundamental-theorem-of-algebra-minimum-modulus-proof]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Theorem 1.8"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 1, §7"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
    - title: "J. Lebl, Basic Analysis I, The Fundamental Theorem of Algebra"
      url: "https://www.jirka.org/ra/html/sec_fundalgeb.html"
pipeline_run: null
---

The theorem [[thm-fundamental-theorem-of-algebra-via-the-fundamental-group]] and the published [[thm-fundamental-theorem-of-algebra-minimum-modulus-proof]] establish the same root-existence statement by genuinely different routes. The fundamental-group proof compares a root-free radial nullhomotopy with the nonzero degree forced by the leading term on a large circle. The minimum-modulus proof instead chooses a point where $|p|$ is least and shows that a positive minimum can be decreased. The first argument spends the calculation of $\pi_1(S^1)$; the second spends compactness and the local expansion of a polynomial.
