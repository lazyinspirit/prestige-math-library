---
id: lem-qftx-bv-canonical-action-generates-brst-differential
kind: lemma
title: Canonical Antibracket Generates the Declared BRST Field Variations
status: draft
origin: session
dependency_level: 3
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-qftx-bv-antibracket-master-action
dependency_roles:
  def-qftx-bv-antibracket-master-action: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Joaquim Gomis, Jordi París, and Stuart Samuel, Antibracket, Antifields and Gauge-Theory Quantization"
      url: "https://arxiv.org/pdf/hep-th/9412228"
      locator: "§§4.2 and 4.6: the canonical right/left derivative bracket and field-coordinate BRST generator; the local proof derives the sign for the chosen (S,-) ordering directly from its stated convention."
    - title: "Jian Qiu and Maxim Zabzine, Introduction to Graded Geometry, Batalin-Vilkovisky Formalism and their Applications"
      url: "https://arxiv.org/pdf/1105.2680"
      locator: "§§3.1–3.2 and 4.2: graded coordinates, odd cotangent variables, and the degree-one odd Poisson bracket used for the finite-dimensional algebraic calculation."
verification:
  precheck: pending
---

## Statement

Let $\mathcal B$ be the finite-dimensional algebra that is polynomial in even canonical coordinates and exterior in odd canonical coordinates $\Phi^A,\Phi_A^*$. Give each homogeneous minimal coordinate $\Phi^A$ parity $\epsilon_A\in\{0,1\}$ and ghost number $g_A$, and give its antifield parity $\epsilon_A+1\pmod 2$ and ghost number $-1-g_A$. Use the canonical antibracket

$$ (F,G)=\sum_A\left(\frac{\partial_rF}{\partial\Phi^A}\frac{\partial_lG}{\partial\Phi_A^*}-\frac{\partial_rF}{\partial\Phi_A^*}\frac{\partial_lG}{\partial\Phi^A}\right). $$

Suppose each $s_0\Phi^A$ is independent of all antifields, has parity $\epsilon_A+1\pmod 2$ and ghost number $g_A+1$, and let $S_0$ be even of ghost number zero and independent of antifields. Define $S:=S_0+\sum_A(-1)^{\epsilon_A}\Phi_A^*s_0\Phi^A$, with the displayed product order. Then $(S,\Phi^A)=s_0\Phi^A$ for each minimal coordinate. For a local-field version on a nonempty open $U\subseteq\mathbb R^n$, use fields $\Phi^A(x)$ and antifields $\Phi_A^*(x)$ with the same parity and ghost-number assignments, replace coordinate derivatives in the bracket by variational derivatives and the sum by $\int_U d^nx$, and set $S_U:=S_{0,U}+\int_U d^nx\,\sum_A(-1)^{\epsilon_A}\Phi_A^*(x)s_0\Phi^A(x)$. If this domain makes the variational derivatives and integrations by parts well-defined and its boundary term vanishes, then $(S_U,\Phi^A(x))=s_0\Phi^A(x)$ pointwise.

## Statement references

[Gomis, París, and Samuel, §§4.2 and 4.6](https://arxiv.org/pdf/hep-th/9412228)

[Qiu and Zabzine, §§3.1–3.2 and 4.2](https://arxiv.org/pdf/1105.2680)

## Facts & Assumptions

**Given:** The canonical BV coordinates, derivative convention, and antifield-linear action term stated above.

[A1] $S_0$ and every $s_0\Phi^A$ are independent of the antifield coordinates; $|s_0\Phi^A|=\epsilon_A+1\pmod 2$.

[F1] [[def-qftx-bv-antibracket-master-action]]: the canonical bracket is $(F,G)=\sum_A(\partial_rF/\partial\Phi^A\,\partial_lG/\partial\Phi_A^*-\partial_rF/\partial\Phi_A^*\,\partial_lG/\partial\Phi^A)$.

[F2] [[def-qftx-bv-antibracket-master-action]]: the candidate action contains $(-1)^{\epsilon_A}\Phi_A^*s_0\Phi^A$ in that order, and $S_0$ is independent of antifields.

## Proof

1.1 For $G=\Phi^A$, $\partial_lG/\partial\Phi_B^*=0$ and $\partial_lG/\partial\Phi^B=\delta^A_B$, so the first bracket term vanishes and the second gives $(S,\Phi^A)=-\partial_rS/\partial\Phi_A^*$. [F1, algebra]

2.1 The right-derivative Leibniz rule is $\partial_r(XY)/\partial z=X(\partial_rY/\partial z)+(-1)^{|z||Y|}(\partial_rX/\partial z)Y$. Apply it with $X=\Phi_A^*$, $Y=s_0\Phi^A$, and $z=\Phi_A^*$; by [A1] the derivative of $Y$ is zero, while $|z|=|Y|=\epsilon_A+1$. Thus $\partial_r(\Phi_A^*s_0\Phi^A)/\partial\Phi_A^*=(-1)^{(\epsilon_A+1)(\epsilon_A+1)}s_0\Phi^A=(-1)^{\epsilon_A+1}s_0\Phi^A$. Multiplying by $(-1)^{\epsilon_A}$ and using [F2], we obtain $\partial_rS/\partial\Phi_A^*=-s_0\Phi^A$, so step 1.1 yields $(S,\Phi^A)=s_0\Phi^A$. In the local version $\delta_rS_U/\delta\Phi_A^*(x)$ has the same value $-s_0\Phi^A(x)$ because the antifield occurs without derivatives, and the functional bracket with $\Phi^A(x)$ is its negative. [A1, F1, F2, step 1.1, algebra] ∎
