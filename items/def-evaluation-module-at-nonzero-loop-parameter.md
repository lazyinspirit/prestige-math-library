---
id: def-evaluation-module-at-nonzero-loop-parameter
kind: definition
title: Evaluation module at a nonzero loop parameter
deps: ["def-untwisted-affine-central-extension"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras, Section 7.1 loop-algebra
        conventions
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Introduction to Kac-Moody Groups and Lie Algebras, Section 12.2.1
        loop-algebra conventions
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: draft
origin: pipeline
---

## Definition

Let $a\in\mathbb C^\times$ and let $\rho:\mathfrak g\to\operatorname{End}_{\mathbb C}(V)$ be a finite-dimensional representation. The **evaluation module at $a$** for [[def-untwisted-affine-central-extension]] has action
$$\rho_a(x\otimes f+bc)=f(a)\rho(x).$$
In particular $x_m$ acts as $a^m\rho(x)$ and $c$ acts as zero. Evaluation on the loop algebra is a Lie homomorphism because $(fq)(a)=f(a)q(a)$, so $[f(a)\rho(x),q(a)\rho(y)]=(fq)(a)\rho([x,y])$. The central term is killed by the stipulated zero action of $c$, establishing the representation identity for the central extension too. This does not mean that the scalar cocycle itself vanishes. Nonzero $a$ is required because $t^{-1}$ must be evaluated and $t\,t^{-1}=1$. The zero representation and the zero-dimensional module are allowed. No action of the degree derivation is part of this definition.
