---
id: thm-nrqmx-finite-channel-wigner-smith
kind: theorem
domain: mathematics
library: mathematics
title: Wigner–Smith matrix for differentiable finite channels
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 1
deps:
  - def-nrqmx-scattering-channel-data
dependency_roles:
  def-nrqmx-scattering-channel-data: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Christophe Texier, Wigner Time Delay and Related Concepts: Application to Transport in Coherent Conductors, §2.2.4"
      url: "https://arxiv.org/pdf/1507.00075"
      locator: "PDF pp.3–4, equation (17): incoming and outgoing Wigner–Smith forms and Hermiticity; equation (19): trace and determinant phase sum rule."
    - title: "Helmut Haberzettl and Ron Workman, Time-Delay in a Multi-Channel Formalism, §§II–III"
      url: "https://arxiv.org/pdf/0708.3989"
      locator: "PDF pp.2–3, equations (3), (7)–(9): channel time-delay matrix, unitary diagonalization and trace in eigenphases; the paper flags a convention error propagated from Smith's original paper."
---

## Statement

Let $I\subset\mathbb R$ be an open energy interval with fixed finite channel number $r\ge1$, let $S:I\to U(r)$ be $C^1$ in the finite-channel convention of [[def-nrqmx-scattering-channel-data]], and let $\hbar>0$. Define

$$Q(E):=-i\hbar\,S(E)^*S'(E),\qquad E\in I.$$

Then $Q(E)$ is Hermitian and

$$\operatorname{tr}Q(E) =-i\hbar\,\frac{(\det S)'(E)}{\det S(E)} =-i\hbar\,\frac{d}{dE}\log\det S(E),$$

where the last expression means the logarithmic derivative $(\det S)'/\det S$, independent of a choice of logarithm branch. If the incoming and outgoing bases are changed by energy-independent unitary matrices $U_{\mathrm{in}}$ and $U_{\mathrm{out}}$, so that $S^\sharp=U_{\mathrm{out}}^*SU_{\mathrm{in}}$, then

$$Q^\sharp=U_{\mathrm{in}}^* Q U_{\mathrm{in}}.$$

If $E$ is measured in joules and $\hbar$ in joule-seconds, $Q$ has units of seconds. This is an algebraic scattering-matrix result; it does not by itself establish an operational arrival-time or dwell-time interpretation.

## Statement references

[[def-nrqmx-scattering-channel-data]]

## Facts & Assumptions

**Given:** The open interval $I$, fixed $r$, $C^1$ unitary matrix field $S(E)$, and $\hbar>0$.

[F1] A finite-channel scattering matrix is a matrix field $S(E)\in U(r)$; $S^*$ is conjugate transpose, while trace and determinant are the usual finite-dimensional trace and alternating determinant ([[def-nrqmx-scattering-channel-data]]).

[F2] The finite-dimensional derivative, product and trace operations are entrywise operations on $C^1$ scalar functions; determinant is the alternating multilinear polynomial in the matrix entries ([[def-nrqmx-scattering-channel-data]]).

## Proof

**Given:** [F1], [F2] and the data in the Statement.

1.1 Differentiating $S(E)^*S(E)=I_r$ entrywise gives $S'(E)^*S(E)+S(E)^*S'(E)=0$. Thus $A:=S^*S'$ satisfies $A^*=-A$, and $Q^*=(-i\hbar A)^*=i\hbar A^*=-i\hbar A=Q$. [given, F1, F2, algebra]

2.1 Since $S$ is unitary, $S^{-1}=S^*$ and $\det S\ne0$. Multilinearity of the alternating determinant gives $\det(I_r+hA+o(h))=1+h\operatorname{tr}(A)+o(h)$ for $A=S(E)^{-1}S'(E)$: terms linear in $h$ are exactly the $r$ choices of one diagonal entry, while every nonidentity permutation or two off-diagonal factors contributes $o(h)$. Applying this to $S(E+h)=S(E)(I_r+hS(E)^{-1}S'(E)+o(h))$ yields $(\det S)'(E)=\det S(E)\operatorname{tr}(S(E)^{-1}S'(E))=\det S(E)\operatorname{tr}(S(E)^*S'(E))$. Multiplication by $-i\hbar/\det S(E)$ proves the trace formula. [step 1.1, F1, F2, algebra]

3.1 For constant unitary $U_{\mathrm{in}},U_{\mathrm{out}}$, differentiation gives $(S^\sharp)'=U_{\mathrm{out}}^*S'U_{\mathrm{in}}$, while $(S^\sharp)^*=U_{\mathrm{in}}^*S^*U_{\mathrm{out}}$. Therefore $(S^\sharp)^*(S^\sharp)'=U_{\mathrm{in}}^*S^*S'U_{\mathrm{in}}$, proving the stated conjugation rule. Energy-dependent basis changes introduce derivatives of the basis matrices, so they are not covered by this claim. [step 1.1, given, algebra] ∎
