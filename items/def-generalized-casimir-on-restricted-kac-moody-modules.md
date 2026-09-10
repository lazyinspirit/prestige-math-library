---
id: def-generalized-casimir-on-restricted-kac-moody-modules
kind: definition
title: "Generalized casimir on restricted kac moody modules"
status: draft
origin: pipeline
deps: ["thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra", "prop-kac-moody-root-spaces-are-finite-dimensional", "def-universal-enveloping-algebra-as-a-tensor-quotient"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Kleshchev, Lectures on Infinite Dimensional Lie Algebras — Definition 2.3.3 and equations (2.18)–(2.20), pp.33–34"
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
---

## Definition

Assume $A$ is symmetrizable and fix the invariant form and $\nu:\mathfrak h\to\mathfrak h^*$ of [[thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra]]. A module $V$ is **restricted** if, for every $v\in V$, $\mathfrak g_\alpha v=0$ for all but finitely many positive roots $\alpha$. Fix $\rho\in\mathfrak h^*$ with $\rho(h_i)=1$. For dual Cartan bases $(u_a),(u^a)$ and opposite-root dual bases $(x_{\alpha,s}),(y_{\alpha,s})$, with $x$ positive and $y$ negative, define on $V$ the operator $\Omega=2\nu^{-1}(\rho)+\sum_a u_a u^a+2\sum_{\alpha>0,s}y_{\alpha,s}x_{\alpha,s}$.

Products mean successive actions, as in [[def-universal-enveloping-algebra-as-a-tensor-quotient]]. Root spaces are finite-dimensional by [[prop-kac-moody-root-spaces-are-finite-dimensional]], and restrictedness makes the last sum finite on each vector. The tensor $\sum_s y_{\alpha,s}\otimes x_{\alpha,s}$ is independent of the dual bases: it corresponds to the identity map of $\mathfrak g_\alpha$ under its perfect pairing with $\mathfrak g_{-\alpha}$. The Cartan tensor has the same property. Thus $\Omega$ is well-defined as an operator; it is not asserted to be an infinite element of $U(\mathfrak g)$. Independence of $h_i$ permits extension of their prescribed $\rho$-values over a finite basis, and $(\rho,\alpha_i)=d_i=(\alpha_i,\alpha_i)/2$.

## Remarks

Centrality is proved in [[thm-generalized-kac-moody-casimir-is-central-and-scalar-on-highest-weight-modules]].

## Sources

Source comparison: [Kleshchev](https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf), Definition 2.3.3 and equations (2.18)–(2.20), pp.33–34.
