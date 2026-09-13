---
id: def-poisson-bracket-on-a-symplectic-manifold
kind: definition
title: Poisson bracket on a symplectic manifold
status: published
origin: pipeline
deps: ["thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, Definition 18.5, p. 108
verification:
  audited: 2026-09-14
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

For $F,G\in C^\infty(M)$, the **Poisson bracket** in the library convention is

$$\{F,G\}:=\omega(X_F,X_G)=dF(X_G)=X_G(F)=-X_F(G).$$

All four formulas use $\iota_{X_H}\omega=dH$. In particular, the order in the
observable formula is important: evolution by $H$ differentiates $F$ as
$X_H(F)=\{F,H\}$.
