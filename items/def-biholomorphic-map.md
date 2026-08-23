---
id: def-biholomorphic-map
kind: definition
title: "Biholomorphic maps between complex domains"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complex-domain, def-complex-differentiability-holomorphic-and-entire, def-injection-surjection-bijection]
justified_by: []
forward_refs: []
aliases: []
landmark: true
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
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §5.6"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "B. V. Shabat, Introduction to Complex Analysis, §1.2"
      url: "https://math.stanford.edu/~ryzhik/shabat-all.pdf"
pipeline_run: null
---

## Definition

Let $U,V\subseteq\mathbb C$ be complex domains ([[def-complex-domain]]). A map $f:U\to V$ is **biholomorphic** if it is bijective ([[def-injection-surjection-bijection]]), holomorphic, and its inverse $f^{-1}:V\to U$ is holomorphic ([[def-complex-differentiability-holomorphic-and-entire]]). The map $f$ is then a **biholomorphism** from $U$ onto $V$.

For local use, a holomorphic map is biholomorphic between neighbourhoods of $a$ and $f(a)$ when it restricts to a biholomorphism between complex domains $U'\subseteq U$ and $V'\subseteq V$ contained in those neighbourhoods and satisfying $a\in U'$ and $f(a)\in V'$. The two membership conditions are what make the notion local at $a$: without them $z\mapsto z^2$ would qualify at $0$ by restricting to a disc that avoids $0$.
