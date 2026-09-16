---
id: thm-equivalence-of-euler-lagrange-and-hamilton-equations-for-hyperregular-lagrangians
kind: theorem
title: Equivalence of Euler–Lagrange and Hamilton equations for hyperregular Lagrangians
status: published
origin: pipeline
deps: ["def-countable-choice", "thm-euler-lagrange-equations", "def-energy-and-hamiltonian-of-a-hyperregular-lagrangian", "thm-hamilton-equations-in-canonical-cotangent-coordinates"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 19, equivalence of the two formalisms, pp. 114--116
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

Assume $\mathrm{AC}_\omega$. Let $L:TQ\to\mathbb R$ be hyperregular and
$H=E_L\circ(\mathbb FL)^{-1}$. The Legendre map bijects Euler–Lagrange
trajectories $(q,\dot q)$ with Hamiltonian trajectories $(q,p)$ of $H$.

## Facts & Assumptions

**Given:** A hyperregular $L$ and its associated $H$.

[F1] Euler–Lagrange equations are $\frac d{dt}L_{v^i}=L_{q^i}$. [[thm-euler-lagrange-equations]].

[F2] With $p=L_v$ and inverse $v(q,p)$, $H(q,p)=p_iv^i-L(q,v)$. [[def-energy-and-hamiltonian-of-a-hyperregular-lagrangian]].

[F3] Hamilton's equations are $\dot q^i=H_{p_i}$ and $\dot p_i=-H_{q^i}$. [[thm-hamilton-equations-in-canonical-cotangent-coordinates]].

## Proof

**Proof technique:** direct.

1.1 Differentiate the formula in [F2]. Since $p_i=L_{v^i}(q,v)$, the $p_i\,dv^i$ and $L_{v^i}\,dv^i$ terms cancel, giving $dH=v^i\,dp_i-L_{q^i}\,dq^i$. Hence $H_{p_i}=v^i$ and $H_{q^i}=-L_{q^i}$. [F2, algebra]

2.1 If $q(t)$ satisfies [F1] and $p(t)=L_v(q(t),\dot q(t))$, then step 1.1 gives $\dot q^i=v^i=H_{p_i}$ and $\dot p_i=\frac d{dt}L_{v^i}=L_{q^i}=-H_{q^i}$. Thus $(q,p)$ satisfies [F3]. [F1, F3, step 1.1]

3.1 Conversely, a Hamiltonian trajectory satisfies $\dot q=v(q,p)$ by [F3] and step 1.1, so inverse Legendre gives $p=L_v(q,\dot q)$. Its second Hamilton equation then reads $\frac d{dt}L_{v^i}=L_{q^i}$, which is [F1]. Hyperregularity makes both assignments global inverses. [F1, F2, F3, step 1.1] ∎
