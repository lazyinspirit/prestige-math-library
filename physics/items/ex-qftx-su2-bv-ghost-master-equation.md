---
id: ex-qftx-su2-bv-ghost-master-equation
kind: example
title: The SU(2) Ghost Sector Solves the Classical Master Equation
status: draft
origin: session
dependency_level: 5
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-qftx-bv-antibracket-master-action
  - lem-qftx-bv-master-equation-brst-nilpotence
dependency_roles:
  def-qftx-bv-antibracket-master-action: mathematical-premise
  lem-qftx-bv-master-equation-brst-nilpotence: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references: []
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Example

Let $\mathfrak{su}(2)$ have basis $T_a$ with $[T_b,T_c]=\epsilon^a{}_{bc}T_a$. Form the finite graded-commutative coordinate algebra $\mathcal B=\mathbb C[c_1^*,c_2^*,c_3^*]\otimes\Lambda(c^1,c^2,c^3)$, where each $c^a$ is odd of ghost number $1$ and each $c_a^*$ is even of ghost number $-2$. Use the canonical antibracket

$$
(F,G)=\sum_{a=1}^3\left(\frac{\partial_rF}{\partial c^a}\frac{\partial_lG}{\partial c_a^*}-\frac{\partial_rF}{\partial c_a^*}\frac{\partial_lG}{\partial c^a}\right).
$$

For $S_{\mathrm{CE}}=\tfrac12c_a^*\epsilon^a{}_{bc}c^bc^c$, the element $S_{\mathrm{CE}}$ is even with ghost number zero and satisfies $(S_{\mathrm{CE}},S_{\mathrm{CE}})=0$. Hence the Hamiltonian differential $sF=(S_{\mathrm{CE}},F)$ is nilpotent. This is only the finite-dimensional non-Abelian ghost sector; it is not a Yang–Mills action or a quantum field theory.

## Example references

[[def-qftx-bv-antibracket-master-action|Canonical BV bracket and degree convention]]

[[lem-qftx-bv-master-equation-brst-nilpotence|Master equation/nilpotence equivalence]]

## Facts & Assumptions

**Given:** The displayed finite coordinate algebra, antibracket, and $S_{\mathrm{CE}}$.

[A1] The structure constants $\epsilon^a{}_{bc}$ of $\mathfrak{su}(2)$ satisfy the Lie-algebra Jacobi identity.

[F1] [[def-qftx-bv-antibracket-master-action]]: the canonical antibracket has ghost number $+1$, shifted Jacobi, and the displayed left/right derivative convention.

[F2] [[lem-qftx-bv-master-equation-brst-nilpotence]]: on a canonical BV domain with no nonzero central element of ghost number one, the classical master equation is equivalent to nilpotence of $sF=(S,F)$.

## Verification

1.1 The ghost number of $S_{\mathrm{CE}}$ is $-2+1+1=0$, and its parity is even. The derivative convention gives $\partial_rS_{\mathrm{CE}}/\partial c^a=-c_e^*\epsilon^e{}_{ab}c^b$, $\partial_lS_{\mathrm{CE}}/\partial c^a=+c_e^*\epsilon^e{}_{ab}c^b$, and $\partial_rS_{\mathrm{CE}}/\partial c_a^*=\partial_lS_{\mathrm{CE}}/\partial c_a^*=\tfrac12\epsilon^a{}_{cd}c^cc^d$. Since $c_a^*$ is even, substitution in the defining bracket gives $(S_{\mathrm{CE}},S_{\mathrm{CE}})=(-c_e^*\epsilon^e{}_{ab}c^b)(\tfrac12\epsilon^a{}_{cd}c^cc^d)-(\tfrac12\epsilon^a{}_{cd}c^cc^d)(+c_e^*\epsilon^e{}_{ab}c^b)=-c_e^*\epsilon^e{}_{ab}\epsilon^a{}_{cd}c^bc^cc^d$. The ghost product is totally antisymmetric, so the tensor contraction reduces to its antisymmetrization $\epsilon^e{}_{a[b}\epsilon^a{}_{cd]}$, which is the Jacobi identity and vanishes by [A1]. [A1, F1, algebra]

2.1 The coordinate algebra is finite and canonical, so its center consists of constants and has no nonzero ghost-number-one element. Step 1.1 proves the classical master equation, and [F2] therefore gives $s^2=0$ on the entire algebra. [F2, step 1.1] ∎
