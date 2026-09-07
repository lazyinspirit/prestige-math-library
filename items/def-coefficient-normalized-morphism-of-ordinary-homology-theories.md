---
id: "def-coefficient-normalized-morphism-of-ordinary-homology-theories"
kind: "definition"
title: "Coefficient normalized morphism of ordinary homology theories"
deps: ["def-unreduced-homology-theory-on-cw-pairs"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, 15§2, pp.119–120, natural comparison and boundary compatibility"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "15§2, pp.119–120, natural comparison and boundary compatibility"
    - title: "Hatcher, Algebraic Topology, Axioms for Homology, p.161, uniqueness with coefficients"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Axioms for Homology, p.161, uniqueness with coefficients"
status: "draft"
origin: "pipeline"
---

## Definition

For ordinary theories $h,k$ as in [[def-unreduced-homology-theory-on-cw-pairs]], a **morphism** $\eta:h\to k$ consists of homomorphisms $\eta_n(X,A):h_n(X,A)\to k_n(X,A)$, natural for all maps of CW pairs and all $n\in\mathbb Z$, satisfying $\partial^k\eta_n=\eta_{n-1}\partial^h$.

For a specified homomorphism $u:h_0(*)\to k_0(*)$, the morphism is **coefficient-normalized by $u$** if $\eta_0(*)=u$. A comparison equivalence has every component invertible and is normalized by a specified coefficient isomorphism. Neither the existence nor uniqueness of such an extension is part of this definition.
