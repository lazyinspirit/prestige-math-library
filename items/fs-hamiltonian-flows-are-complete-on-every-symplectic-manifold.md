---
id: fs-hamiltonian-flows-are-complete-on-every-symplectic-manifold
kind: false-statement
title: Hamiltonian flows are complete on every symplectic manifold
status: published
origin: pipeline
deps: ["thm-hamiltonian-flows-preserve-the-symplectic-form", "def-hamiltonian-vector-field-and-hamiltonian-function"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, §18.1, pp. 105--106
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement refuted

All Hamiltonian flows are complete.

## Facts & Assumptions

**Given:** The proposed universal claim.

[F1] Preservation of $\omega$ is asserted only wherever the local Hamiltonian flow exists. [[thm-hamiltonian-flows-preserve-the-symplectic-form]].

[F2] The convention $\iota_{X_H}\omega=dH$ defines the Hamiltonian field. [[def-hamiltonian-vector-field-and-hamiltonian-function]].

## Refutation

**Proof technique:** direct.

1.1 On $(\mathbb R^2,dq\wedge dp)$ take $H(q,p)=q^2p$. Writing $X_H=a\partial_q+b\partial_p$, [F2] gives $a\,dp-b\,dq=dH=2qp\,dq+q^2\,dp$, so $\dot q=a=q^2$ and $\dot p=b=-2qp$. The solution from $(1,0)$ has $p(t)=0$ and $q(t)=1/(1-t)$ for $t<1$. [F2, algebra]

2.1 This trajectory escapes to infinity as $t\uparrow1$ and cannot be extended to a curve in $\mathbb R^2$ at time one. Thus the smooth Hamiltonian field is incomplete; [F1] never claimed otherwise. [F1, step 1.1] ∎
