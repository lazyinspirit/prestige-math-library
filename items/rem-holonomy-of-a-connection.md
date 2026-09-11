---
id: rem-holonomy-of-a-connection
kind: remark
title: "Holonomy of a connection"
status: draft
origin: pipeline
deps: ["prop-parallel-transport-under-reparametrization-reversal-and-concatenation","thm-parallel-transport-is-a-linear-isomorphism"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Remark

For a supplied point $p$ and connection on $E$, define $\operatorname{Hol}_p(\nabla)\subseteq\operatorname{GL}(E_p)$ to be the set of transports around finite piecewise smooth loops based at $p$. Transports are invertible by [[thm-parallel-transport-is-a-linear-isomorphism]]. The constant loop gives the identity; if $A=P_\alpha$ and $B=P_\beta$, traversing $\beta$ then $\alpha$ gives $AB$; reversal of $\alpha$ gives $A^{-1}$. These assertions follow from [[prop-parallel-transport-under-reparametrization-reversal-and-concatenation]], and prove that this set is a subgroup, with associativity inherited from composition of linear maps.

A singleton constant loop suffices for nonemptiness; in rank zero this group consists of the unique automorphism of the zero vector space. There is no such pointed definition on an empty base without a point $p$. No simultaneous choice of loops representing all elements is required: closure checks two supplied representatives. The definition asserts neither homotopy invariance nor path independence. Curvature descriptions and classification of holonomy are deferred.
