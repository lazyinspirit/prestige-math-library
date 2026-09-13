---
id: thm-algebraic-symmetries-of-the-riemann-tensor
kind: theorem
title: Algebraic symmetries of the Riemann tensor
status: published
origin: pipeline
deps: ["def-countable-choice","def-riemann-curvature-four-tensor","prop-curvature-is-skew-in-its-first-two-arguments","thm-first-bianchi-identity","def-levi-civita-connection"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Proposition 11.3.2, printed pages 75–76
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Proposition 7.4, complete proof on printed pages 121–123
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

This item assumes $\mathrm{AC}_\omega$, namely [[def-countable-choice|countable choice]]. In the propagated dependency chain, that assumption is required through [[thm-first-bianchi-identity]]; after those interfaces are fixed, the remaining local or finite argument makes no additional countable-family choice.

The Riemann curvature four-tensor satisfies, for all vector fields
$X,Y,Z,W$,

$$\operatorname{Rm}(X,Y,Z,W)=-\operatorname{Rm}(Y,X,Z,W),$$

$$\operatorname{Rm}(X,Y,Z,W)=-\operatorname{Rm}(X,Y,W,Z),$$

$$\operatorname{Rm}(X,Y,Z,W)=\operatorname{Rm}(Z,W,X,Y),$$

and

$$\operatorname{Rm}(X,Y,Z,W)+\operatorname{Rm}(Y,Z,X,W)+\operatorname{Rm}(Z,X,Y,W)=0.$$

These are respectively first-pair skewness, last-pair skewness, pair
interchange, and the cyclic first-Bianchi symmetry.

## Facts & Assumptions

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]] and is required here through [[thm-first-bianchi-identity]]; after those supplied interfaces are fixed, the remaining local or finite calculation makes no additional countable-family choice.

[F1] $\operatorname{Rm}(X,Y,Z,W)=g(R(X,Y)Z,W)$. [[def-riemann-curvature-four-tensor]].

[F2] Curvature is skew in its first two arguments. [[prop-curvature-is-skew-in-its-first-two-arguments]].

[F3] Curvature obeys the cyclic first Bianchi identity. [[thm-first-bianchi-identity]].

[F4] The Levi–Civita connection is metric compatible. [[def-levi-civita-connection]].

## Proof

**Given:** $\mathrm{AC}_\omega$, smooth vector fields $X,Y,Z,W$ and the Levi–Civita connection.

1.1 Combining [F1] with [F2] gives first-pair skewness, and pairing [F3] with $W$ gives the displayed cyclic identity for $\operatorname{Rm}$. [A1, F1, F2, F3]

1.2 Metric compatibility [F4] expands the scalar identity $XYg(Z,W)-YXg(Z,W)-[X,Y]g(Z,W)=0$. The mixed terms $g(\nabla_YZ,\nabla_XW)$ and $g(\nabla_XZ,\nabla_YW)$ cancel in pairs, leaving $g(R(X,Y)Z,W)+g(Z,R(X,Y)W)=0$. Symmetry of $g$ and [F1] give last-pair skewness. [F1, F4, algebra]

2.1 Write the cyclic identity from step 1.1 for the four ordered triples $(X,Y,Z;W)$, $(Y,Z,W;X)$, $(Z,W,X;Y)$, and $(W,X,Y;Z)$ and add them. Last-pair skewness from step 1.2 cancels the eight terms whose first pair is respectively $(X,Y)$, $(Y,Z)$, $(Z,W)$, or $(W,X)$. The four remaining terms, simplified with both pair skews, give $2\operatorname{Rm}(Y,W,X,Z)-2\operatorname{Rm}(X,Z,Y,W)=0$. Renaming $(X,Z,Y,W)$ as an arbitrary quadruple yields pair interchange. [step 1.1, step 1.2, algebra] ∎
