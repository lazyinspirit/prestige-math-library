---
id: ex-sign-and-positive-negative-parts-of-a-self-adjoint-operator
kind: example
title: Sign and positive negative parts of a self adjoint operator
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-borel-functional-calculus-for-bounded-normal-operators, def-borel-functional-calculus-for-a-bounded-normal-operator, cor-spectral-projections-and-resolution-of-the-identity, def-absolute-value-of-a-bounded-operator, thm-positive-square-root, lem-spectrum-of-a-self-adjoint-operator-is-real, thm-continuous-functional-calculus-for-bounded-self-adjoint-operators, thm-continuous-functional-calculus-properties, def-order-on-bounded-self-adjoint-operators, def-self-adjoint-positive-unitary-and-normal-operator, def-projection-valued-measure, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §5.3–5.7, printed pp.244–296"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 2nd ed., §4.1, printed pp.113–115"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  audited: 2026-09-22
---

## Example

Assume AC. Let $T$ be a bounded self-adjoint operator on a nonzero complex
Hilbert space $H$, so that $\sigma(T)\subseteq\mathbb R$
([[lem-spectrum-of-a-self-adjoint-operator-is-real]]), and
let $E$ be its spectral projection valued measure. Write
$$|T|:=|\lambda|(T),\qquad T_+:=\max(\lambda,0)(T),\qquad T_-:=\max(-\lambda,0)(T),\qquad \operatorname{sgn}(T):=s(\lambda)(T),$$
where $|\lambda|$, $\max(\lambda,0)$, $\max(-\lambda,0)$ are continuous on
$\sigma(T)$ and $s(t):=1$ for $t>0$, $s(t):=-1$ for $t<0$, $s(0):=0$ is
bounded Borel on $\sigma(T)$, so all four operators are given by the
continuous, respectively bounded Borel, functional calculus
([[def-borel-functional-calculus-for-a-bounded-normal-operator]]). Then

$$T=T_+-T_-,\qquad |T|=T_++T_-,\qquad T_+T_-=0,\qquad T_\pm=\tfrac12(|T|\pm T),\qquad \operatorname{sgn}(T)^2=I-E(\{0\}),$$

and $|T|$ agrees with the absolute value $(T^*T)^{1/2}$ of
[[def-absolute-value-of-a-bounded-operator]]; moreover
$I-E(\{0\})=E(\sigma(T)\setminus\{0\})$ is the orthogonal projection onto
$(\ker T)^\perp$.

## Facts & Assumptions

[A1] A bounded self-adjoint operator has $\sigma(T)\subseteq\mathbb R$, and its Borel calculus is a unital $\ast$-homomorphism: $(fg)(T)=f(T)g(T)$, $\overline f(T)=f(T)^*$ and $\mathbf 1_B(T)=E(B)$ for every Borel $B\subseteq\sigma(T)$; it extends the continuous calculus on continuous $f$ ([[lem-spectrum-of-a-self-adjoint-operator-is-real]], [[thm-borel-functional-calculus-for-bounded-normal-operators]], [[def-borel-functional-calculus-for-a-bounded-normal-operator]]).

[A2] Scalar identities for real $\lambda$: $\lambda=\max(\lambda,0)-\max(-\lambda,0)$, $|\lambda|=\max(\lambda,0)+\max(-\lambda,0)$, $\max(\lambda,0)\max(-\lambda,0)=0$, $s(\lambda)^2=\mathbf 1_{\mathbb R\setminus\{0\}}(\lambda)$, $|\lambda|^2=\lambda^2$ and $|\lambda|\ge0$; the functions $\max(\lambda,0)$, $\max(-\lambda,0)$ and $|\lambda|$ are continuous on the compact real spectrum and $s$ is Borel and bounded by $1$. [algebra]

[A3] $E(\{0\})H=\ker T$ and $E(\{0\})=I-E(\sigma(T)\setminus\{0\})$, so $I-E(\{0\})$ is the orthogonal projection onto $(\ker T)^\perp$ ([[cor-spectral-projections-and-resolution-of-the-identity]]).

[A4] For self-adjoint $T$ one has $T^*T=T^2$, and a bounded positive operator has a unique positive square root; the calculus value of a nonnegative continuous function is positive, and the calculus is isometric ([[def-absolute-value-of-a-bounded-operator]], [[thm-positive-square-root]], [[def-self-adjoint-positive-unitary-and-normal-operator]], [[thm-continuous-functional-calculus-properties]], [[def-projection-valued-measure]]).

[A5] The order on bounded self-adjoint operators is the quadratic-form order, and $S\ge0$ means $\langle Sx,x\rangle\ge0$ for all $x$ ([[def-order-on-bounded-self-adjoint-operators]]).

[A6] AC is the declared choice hypothesis of this page from the construction item onward ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

**Given:** A bounded self-adjoint $T$ on a nonzero complex Hilbert space, its spectral PVM $E$ and Borel calculus, and the functions $|\lambda|$, $\max(\lambda,0)$, $\max(-\lambda,0)$, $s(\lambda)$ on $\sigma(T)\subseteq\mathbb R$.

1.1 The three continuity identities pass to the calculus: $T=\Phi_E(\lambda)=\Phi_E(\max(\lambda,0))-\Phi_E(\max(-\lambda,0))=T_+-T_-$ and $|T|=\Phi_E(|\lambda|)=T_++T_-$, by linearity of the Borel calculus applied to the pointwise scalar identities, since the involved functions are continuous on the compact spectrum. [A1, A2]

1.2 Orthogonality of the parts: $T_+T_-=\Phi_E(\max(\lambda,0)\max(-\lambda,0))=\Phi_E(0)=0$ by multiplicativity. [A1, A2]

1.3 Sign: $s(\lambda)^2=\mathbf 1_{\sigma(T)\setminus\{0\}}(\lambda)$, hence $\operatorname{sgn}(T)^2=\Phi_E(\mathbf 1_{\sigma(T)\setminus\{0\}})=E(\sigma(T)\setminus\{0\})=I-E(\{0\})$, and $E(\{0\})$ is the orthogonal projection onto $\ker T$, so $I-E(\{0\})$ is the orthogonal projection onto $(\ker T)^\perp$. [A1, A2, A3]

1.4 The absolute value agrees with the earlier definition: $|T|=\Phi_E(|\lambda|)$ is positive because $|\lambda|\ge0$, and $|T|^2=\Phi_E(|\lambda|^2)=\Phi_E(\lambda^2)=T^2=T^*T$; by the uniqueness of the positive square root of $T^*T$, $|T|=(T^*T)^{1/2}$. [A1, A2, A4, A5]

2.1 The operators $T_\pm$ are the half-sum and half-difference: from the two identities of step 1.1, $|T|+T=2T_+$ and $|T|-T=2T_-$, so $T_\pm=\frac12(|T|\pm T)$. [step 1.1]

3.1 Therefore $T=T_+-T_-$, $|T|=T_++T_-$, $T_+T_-=0$, $T_\pm=\frac12(|T|\pm T)$, $\operatorname{sgn}(T)^2=I-E(\{0\})$ with $I-E(\{0\})$ the projection onto $(\ker T)^\perp$, and $|T|$ coincides with $(T^*T)^{1/2}$. [step 1.2, step 2.1, step 1.3, step 1.4, A6] ∎
