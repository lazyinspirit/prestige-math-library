---
id: def-local-degree-holomorphic-map
kind: definition
title: "Local degree of a nonconstant holomorphic map"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-order-of-zero-holomorphic-function, thm-zero-order-factorization-holomorphic-function, thm-identity-theorem-holomorphic-functions, thm-isolated-zeros-holomorphic-function]
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
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §5.1"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "B. V. Shabat, Introduction to Complex Analysis, §1.2"
      url: "https://math.stanford.edu/~ryzhik/shabat-all.pdf"
pipeline_run: null
---

## Definition

Let $\Omega$ be a complex domain, let $f:\Omega\to\mathbb C$ be nonconstant and holomorphic, and let $a\in\Omega$. The **local degree** of $f$ at $a$ is
$$\deg_a f:=\operatorname{ord}_a(f-f(a)).$$

This is a positive natural number. Indeed, $f-f(a)$ is not identically zero by [[thm-identity-theorem-holomorphic-functions]], while it vanishes at $a$. Its zero at $a$ is therefore isolated by [[thm-isolated-zeros-holomorphic-function]], so it does not vanish on a neighbourhood of $a$. The equivalence in [[thm-zero-order-factorization-holomorphic-function]] then rules out infinite order, and the convention of [[def-order-of-zero-holomorphic-function]] makes the remaining finite order positive. The local degree is also called the **multiplicity** of $f$ at $a$.
