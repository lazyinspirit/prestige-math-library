---
id: def-frobenius-trace-on-a-constructible-stalk
kind: definition
title: "Geometric Frobenius trace on the stalk of a constructible ℓ-adic sheaf"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-constructible-l-adic-sheaf-on-a-scheme
  - def-finite-field-and-its-order
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Grothendieck et al., SGA 5, Exposé XV §3, §1"
      url: "https://grothendiecksga.com/read/sga5/en/XV-3.html"
---

## Definition

Let $q=p^r$ be a prime power, let $\ell\ne p$ be a prime, let $X$ be a finite-type scheme over $\mathbb F_q$, and let $\mathcal F$ be a constructible $\mathbb Q_\ell$-sheaf on $X$. For $x\in X(\mathbb F_q)$, choose a geometric point $\bar x$ above $x$. The **geometric Frobenius trace of $\mathcal F$ at $x$** is
$$
s_{\mathcal F}(x):=\operatorname{Tr}\!\left(\operatorname{Frob}^{\mathrm{geom}}_{x}\mid\mathcal F_{\bar x}\right),
$$
where $\operatorname{Frob}^{\mathrm{geom}}_{x}$ is inverse arithmetic Frobenius on the residue-field Galois action on the geometric stalk. The value is independent of the choice of $\bar x$ because changing the geometric point conjugates the Frobenius action.

## Definition references

[SGA 5, Exposé XV §3, no. 1, especially the inverse-Frobenius convention](https://grothendiecksga.com/read/sga5/en/XV-3.html)

## Finite-linear well-definedness

For the given finite-dimensional stalk, if a change of geometric point identifies its Frobenius matrices by $F'=CFC^{-1}$, then $\operatorname{Tr}(F')=\operatorname{Tr}(F)$: the finite entry identity $\operatorname{Tr}(AB)=\operatorname{Tr}(BA)$ follows by interchanging the two finite index sums over the commutative coefficient field. Choosing inverse arithmetic Frobenius at both points preserves the conjugacy identity. Thus this Definition depends only on the specified stalk Galois action and not its basis or geometric-point identification. It asserts no cohomological trace formula or construction theorem for arbitrary adic stalks.
