---
id: def-relative-frobenius-of-a-finite-field-extension
kind: definition
title: "The relative Frobenius $x\\mapsto x^q$ of an extension of finite fields"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-field-and-its-order, thm-finite-fields-have-prime-power-order, thm-frobenius-endomorphism-and-finite-field-automorphism, prop-finite-fields-are-splitting-fields-of-x-q-minus-x, def-relative-field-automorphism-group]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "K. Conrad, Finite Fields (expository blurb), Section 5"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/finitefields.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Chapter 4, Finite fields"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Definition

Let $\mathbb F_q$ be a finite field of order $q$ ([[def-finite-field-and-its-order]])
and let $E$ be a finite field having $\mathbb F_q$ as a subfield. The **relative
Frobenius** of the extension $E/\mathbb F_q$ is the map

$$\sigma_q\colon E\longrightarrow E,\qquad \sigma_q(x)=x^{q}.$$

**It is an $\mathbb F_q$-automorphism of $E$, and no separate result is needed
for that.** Let $p$ be the characteristic of $E$; the subfield $\mathbb F_q$ has
the same identity element and hence the same characteristic, so
$q=p^{k}$ with $k=[\mathbb F_q:\mathbb F_p]$ by
[[thm-finite-fields-have-prime-power-order]]. The Frobenius map
$\operatorname{Fr}_E\colon x\mapsto x^{p}$ is an injective field endomorphism of
$E$, is an automorphism because $E$ is finite, and has $k$-fold iterate
$x\mapsto x^{p^{k}}$ ([[thm-frobenius-endomorphism-and-finite-field-automorphism]]);
that iterate is $\sigma_q$. Every $a\in\mathbb F_q$ satisfies $a^{q}=a$
([[prop-finite-fields-are-splitting-fields-of-x-q-minus-x]]), so $\sigma_q$ fixes
$\mathbb F_q$ pointwise. Hence

$$\sigma_q\in\operatorname{Aut}(E/\mathbb F_q)$$

([[def-relative-field-automorphism-group]]). Its iterates are
$\sigma_q^{\,i}(x)=x^{q^{i}}$ for $i\in\mathbb N$, with $\sigma_q^{\,0}$ the
identity.

## Remarks

- **The letter.** The relative Frobenius is written $\sigma_q$ rather than
  $\varphi_q$ because $\varphi$ is Euler's totient
  ([[def-unit-group-modulo-n-and-euler-totient]]) everywhere below, and the two
  symbols would otherwise stand side by side in the same formula.

- **Relative, not absolute.** $\operatorname{Fr}_E$ is intrinsic to $E$; $\sigma_q$
  depends on the chosen base field $\mathbb F_q$, and it is the identity exactly
  when $E=\mathbb F_q$. Taking $\mathbb F_q$ to be the prime field returns
  $\operatorname{Fr}_E$ itself.
