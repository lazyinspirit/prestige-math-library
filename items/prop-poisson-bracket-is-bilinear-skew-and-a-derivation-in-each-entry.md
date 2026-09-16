---
id: prop-poisson-bracket-is-bilinear-skew-and-a-derivation-in-each-entry
kind: proposition
title: The Poisson bracket is bilinear, skew, and a derivation in each entry
status: published
origin: pipeline
deps: ["def-poisson-bracket-on-a-symplectic-manifold"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, Definition 18.7 and following exercise, p. 109
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

The Poisson bracket is real-bilinear and skew-symmetric, and

$$\{F,GH\}=\{F,G\}H+G\{F,H\},\qquad \{FG,H\}=F\{G,H\}+G\{F,H\}.$$

## Facts & Assumptions

**Given:** Smooth functions $F,G,H$ on $(M,\omega)$.

[F1] $\{F,G\}=\omega(X_F,X_G)=X_G(F)$. [[def-poisson-bracket-on-a-symplectic-manifold]].

## Proof

**Proof technique:** direct.

1.1 Linearity of $d$ and uniqueness of Hamiltonian fields give $X_{aF+bG}=aX_F+bX_G$. Bilinearity and alternation of $\omega$ now make the bracket bilinear and skew. [F1, given, algebra]

2.1 Since a vector field is a derivation, [F1] gives $\{FG,H\}=X_H(FG)=F\{G,H\}+G\{F,H\}$. Skew-symmetry then gives the displayed Leibniz rule in the second entry as well. [F1, step 1.1] ∎
