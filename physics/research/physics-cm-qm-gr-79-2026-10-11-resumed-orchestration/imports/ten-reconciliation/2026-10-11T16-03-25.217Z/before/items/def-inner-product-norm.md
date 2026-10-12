---
id: def-inner-product-norm
kind: definition
title: "The norm $\\lVert v\\rVert=\\sqrt{\\langle v,v\\rangle}$ induced by a real or complex inner product"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-inner-product-space, thm-nth-roots-exist]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., §6A'
      url: 'https://linear.axler.net/LADR4e.pdf'
    - title: 'Sergei Treil, Linear Algebra Done Wrong, Ch. 5, §5.1'
      url: 'https://www.math.brown.edu/streil/papers/LADW/HTML_2026_04-30/Ch5.html'
pipeline_run: null
---

## Definition

For a vector $v$ in a real or complex inner product space, define its **inner-product norm** by

$$\lVert v\rVert:=\sqrt{\langle v,v\rangle}.$$

Positive definiteness in [[def-inner-product-space]] makes the radicand a nonnegative real, and [[thm-nth-roots-exist]] supplies its unique nonnegative square root. The notation therefore defines one real number $\lVert v\rVert\ge0$. Its norm axioms are established in [[cor-triangle-inequality-for-inner-product-norm]].
