---
id: thm-lang-vanishing-for-smooth-connected-group-over-finite-field
kind: theorem
title: Lang Vanishing for Smooth Connected Groups over Finite Fields
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-nonabelian-fppf-h1-as-torsors
  - def-finite-field-and-its-order
  - lem-nonaffine-connected-group-geometrically-connected
  - thm-frobenius-endomorphism-and-finite-field-automorphism
  - thm-etale-morphisms-open-and-quasi-finite
  - thm-jacobian-criterion-smooth-morphism
  - def-group-scheme-over-a-field
  - def-axiom-of-choice
  - def-fppf-topology-on-schemes
  - cor-weak-nullstellensatz-algebraically-closed-coordinate-form
  - thm-existence-of-algebraic-closures
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: Bjorn Poonen, Rational Points on Varieties, Theorem 5.12.19(a) and complete proof, printed pp. 156–157
      url: https://math.mit.edu/~poonen/papers/Qpoints.pdf
---

## Statement

Assume the Axiom of Choice. Let $k=\mathbb F_q$ be a finite field and let $G$ be a smooth connected algebraic group over $k$. Then every represented right fppf $G$-torsor over $k$ is trivial; equivalently, the pointed set $H^1_{\mathrm{fppf}}(k,G)$ of represented torsors has one element.

## Statement references

[Poonen, Lang's theorem, Thm. 5.12.19(a) and proof](https://math.mit.edu/~poonen/papers/Qpoints.pdf)


## Facts & Assumptions

**Given:** The Axiom of Choice, a finite field $k=\mathbb F_q$, a smooth connected algebraic group $G/k$, and an fppf right $G$-torsor $X$.

[A1] The Axiom of Choice means every family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[F1] A smooth connected finite-type group over a field is geometrically connected; after base change to an algebraic closure it is a connected smooth variety. [[lem-nonaffine-connected-group-geometrically-connected]]

[F2] The arithmetic Frobenius endomorphism $F:G_{\bar k}\to G_{\bar k}$ is a group morphism, acts on geometric points by $q$-power Frobenius, and has zero differential in characteristic $p$. [[thm-frobenius-endomorphism-and-finite-field-automorphism]] [[def-finite-field-and-its-order]]

[F3] A morphism between smooth varieties of the same dimension whose tangent map is an isomorphism at a point is étale near that point: in smooth local coordinates the full Jacobian determinant is a unit. An étale morphism is open. [[thm-jacobian-criterion-smooth-morphism]] [[thm-etale-morphisms-open-and-quasi-finite]]

[F4] A represented torsor has nonempty finite type scheme $X$; after extension to an algebraic closure it remains nonempty, and a nonempty finite-type scheme over an algebraically closed field has a rational point by the weak Nullstellensatz. [[def-nonabelian-fppf-h1-as-torsors]] [[def-fppf-topology-on-schemes]] [[thm-existence-of-algebraic-closures]] [[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]]

## Proof

**Proof technique:** direct: prove the Lang map is surjective by showing its twisted-conjugation orbits are open, then use it to adjust a geometric point of any torsor to a Frobenius-fixed point.

1.1 Let $\bar k$ be an algebraic closure of $k$ and let $F$ be its arithmetic Frobenius on $G_{\bar k}$. Define an action of $G(\bar k)$ on itself by $g*t=F(g)t g^{-1}$. For fixed $t$, the orbit map $\psi_t(g)=F(g)t g^{-1}$ has zero Frobenius differential and an invertible differential from inversion and translation at every point. By [F3], it is étale everywhere, hence open, and its image is exactly the orbit of $t$. Thus every orbit is open. The disjoint open orbits partition the connected scheme $G_{\bar k}$ by [F1]; if there were more than one orbit, one orbit and the union of all others would give a separation. Hence there is one orbit. In particular the orbit of the identity is all of $G(\bar k)$, so the Lang map $g\mapsto F(g)g^{-1}$ is surjective. [F1, F2, F3, given, construct]

2.1 By [F4], choose a geometric point $x\in X(\bar k)$. Because $X_{\bar k}$ is a right $G_{\bar k}$-torsor, there is a unique $c\in G(\bar k)$ with $F(x)=x\cdot c$. By step 1.1 choose $g\in G(\bar k)$ such that $F(g)g^{-1}=c^{-1}$. For $y=x\cdot g$ the right-torsor action gives $F(y)=F(x)\cdot F(g)=x\cdot cF(g)=x\cdot g=y.$ Thus $y$ is fixed by arithmetic Frobenius and is a $k$-rational point of $X$. A torsor with a $k$-point is isomorphic to the trivial torsor by $G\to X$, $h\mapsto y\cdot h$; hence the class of $X$ is the distinguished point of $H^1_{\mathrm{fppf}}(k,G)$. As $X$ was arbitrary, the pointed set has one element. [A1, F4, step 1.1, construct] ∎

## Axiom use

The Axiom of Choice is used through the stated geometric-point and Jacobian-criterion suppliers [F3]–[F4]. The orbit argument and the torsor adjustment in steps 1.1–2.1 use no further choice.
