---
id: def-singular-values-of-an-endomorphism
kind: definition
title: "The singular values of a linear map as the eigenvalues of the positive square root of T^*T"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-non-negative-square-root-exists-and-is-unique, prop-adjoint-algebra]
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Definition

Let $T:V\to W$ be a linear map between finite-dimensional real or complex inner
product spaces. Because

$$\langle T^*Tv,v\rangle=\langle Tv,Tv\rangle\ge0$$

for every $v\in V$, and because $(T^*T)^*=T^*T$ by Adjoints satisfy $(S+T)^*=S^*+T^*$, $(\lambda T)^*=\overline\lambda T^*$, $(ST)^*=T^*S^*$, and $T^{**}=T$,
the operator $T^*T$ is non-negative. Let

$$|T|:=\sqrt{T^*T},$$

the unique non-negative square root from
A non-negative operator has a unique non-negative square root. The **singular values**
of $T$ are the eigenvalues of $|T|$, listed with multiplicity in weakly
decreasing order.

In particular, this definition applies to endomorphisms by taking $W=V$.

## Definition references

[[prop-adjoint-algebra]]

[[thm-non-negative-square-root-exists-and-is-unique]]
