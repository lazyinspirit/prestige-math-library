---
id: def-inner-product-space
kind: definition
title: "Real and complex inner product spaces, with the inner product linear in the first argument"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-sesquilinear-and-hermitian-forms-over-a-field-with-involution, def-complex-conjugate-real-imaginary-part-and-modulus]
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

Let $F$ be either $\mathbb R$ or $\mathbb C$, with conjugation equal to the identity on $\mathbb R$ and with complex conjugation as in [[def-complex-conjugate-real-imaginary-part-and-modulus]]. An **inner product** on an $F$-vector space $V$ is a function $\langle\,\cdot\,,\,\cdot\,\rangle:V\times V\to F$ such that for all $u,v,w\in V$ and $a,b\in F$:

1. $\langle au+bv,w\rangle=a\langle u,w\rangle+b\langle v,w\rangle$;
2. $\langle u,v\rangle=\overline{\langle v,u\rangle}$;
3. $\langle v,v\rangle$ is real and nonnegative, and $\langle v,v\rangle=0$ if and only if $v=0$.

The first two clauses imply conjugate-linearity in the second argument: $\langle u,av+bw\rangle=\overline a\langle u,v\rangle+\overline b\langle u,w\rangle$. This is the linear-first convention of [[def-sesquilinear-and-hermitian-forms-over-a-field-with-involution]]. A vector space equipped with an inner product is an **inner product space**.
