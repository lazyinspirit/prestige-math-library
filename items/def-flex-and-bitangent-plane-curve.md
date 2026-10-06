---
id: def-flex-and-bitangent-plane-curve
kind: definition
title: Flexes and bitangents defined by intersection multiplicity
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [cor-line-meets-degree-d-curve-counted-with-multiplicity, def-axiom-of-choice, def-local-intersection-multiplicity-plane-curves, def-local-parameter-smooth-plane-curve, def-plane-projective-curve, def-tangent-lines-plane-curve-point, lem-intersection-with-line-order-of-vanishing, lem-local-intersection-as-vanishing-order-on-smooth-curve, lem-smooth-plane-curve-unique-tangent]
sources:
  references:
    - title: "William Fulton, Algebraic Curves: An Introduction to Algebraic Geometry (2008 electronic edition; Internet Archive copy of the author's PDF)"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Notes for a Course in Algebraic Geometry (January 26, 2022 version), Chapter 1"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
---

## Definition

Let $C\subseteq\mathbf P^2$ be a plane projective curve over the algebraically closed field $k$ [[def-plane-projective-curve]].

A smooth point $p\in C$ is a **flex** of $C$ when its tangent line $T_pC$ is not a component of $C$ and satisfies

$$ I_p(C,T_pC)\ge3,$$

and it is an **ordinary flex** when $I_p(C,T_pC)=3$. Here $T_pC$ is the unique tangent line at the smooth point $p$ [[lem-smooth-plane-curve-unique-tangent]], [[def-tangent-lines-plane-curve-point]], and the contact is measured by the local intersection multiplicity of the curve with its tangent line [[def-local-intersection-multiplicity-plane-curves]].

A line $L$ not contained in $C$ is a **bitangent** of $C$ when $L$ has at least two distinct contact points of multiplicity at least two, that is, there are $p\neq q$ in $L\cap C$ with $I_p(C,L)\ge2$ and $I_q(C,L)\ge2$. More generally, a line not contained in $C$ is a **multitangent** when the sum of the multiplicities at its contact points exceeds its number of contact points. No Plücker formula or duality statement is asserted.

## Remarks

The naming conventions above make no choice. The contact-order and degree-bound assertions below assume the Axiom of Choice inherited from their finite-length, DVR and Bezout suppliers [[def-axiom-of-choice]].

- **Contact order.** If $p$ is smooth and $L\not\subseteq C$ is a line through $p$, then $I_p(C,L)=\operatorname{ord}_p(F|_L)$ for a local equation $F$ of $C$, the order of vanishing of the restricted equation along the line at $p$ [[lem-intersection-with-line-order-of-vanishing]]. Equivalently $I_p(C,L)=\operatorname{ord}_p(l|_C)$ for a local equation $l$ of the line, with the valuation now taken along $C$ [[lem-local-intersection-as-vanishing-order-on-smooth-curve]], [[def-local-parameter-smooth-plane-curve]]. So a flex is a point where the tangent line meets the curve with contact order at least three, and an ordinary flex is the case of contact order exactly three; a bitangent is a line whose contact with the curve has at least two double points.
- **Finite contact.** Smoothness does not prevent a tangent line from being a component: at a point of one line of a reducible curve away from the other components, the point is smooth and its tangent is that line. Such contacts have infinite intersection multiplicity and are excluded from the definitions above. In particular a line has no flexes. When $T_pC$ is not a component, the restriction of the defining form to it is nonzero and the local contact is finite.
- **Degree bounds.** A line $L\not\subseteq C$ meets a degree-$d$ curve $C$ in exactly $d$ points counted with multiplicity, and hence at most $d$ distinct points [[cor-line-meets-degree-d-curve-counted-with-multiplicity]], so flexes and bitangents of a degree-$d$ curve are subject to the classical counting constraints; the definition records the local data on which those counts rest without asserting any global formula.
