---
id: ex-qft-wick-quartic-coercivity
kind: example
title: Explicit stability of a Wick-subtracted quartic
status: draft
origin: pipeline
domain: mathematics
library: mathematics
deps:
  - def-qft-finite-wick-normal-powers
  - lem-qft-coercive-polynomial-form-domain
  - def-countable-choice
  - def-axiom-of-choice
dependency_roles:
  def-qft-finite-wick-normal-powers: mathematical-premise
  lem-qft-coercive-polynomial-form-domain: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Skinner, Advanced Quantum Field Theory, Chapter 2, “QFT in Zero Dimensions” (University of Cambridge Part III lecture notes)
      url: https://www.damtp.cam.ac.uk/user/dbs26/AQFT/chap2.pdf
    - title: Nima Moshayedi, Quantum Field Theory and Functional Integrals (lecture notes, arXiv:1902.08652)
      url: https://arxiv.org/pdf/1902.08652
---

## Facts & Assumptions

**Given:** Assume the Axiom of Choice and Countable Choice. Let $q\in\mathbb R$, $C\ge0$, $\lambda>0$, and let $a>0$ be a kinetic coefficient.

[A1] The Axiom of Choice is carried by the finite Gaussian Wick-power definition. [[def-axiom-of-choice]]

[A2] Countable Choice is the explicit set-theoretic hypothesis used by the planned coercive-form supplier; it is stated here rather than hidden. [[def-countable-choice]]

[F1] The finite covariance Wick definition gives $:q^4:_C=q^4-6Cq^2+3C^2$. [[def-qft-finite-wick-normal-powers]]

[L1] **Planned, not an authored current carrier.** The proposed QFT-IR01 interface [[lem-qft-coercive-polynomial-form-domain]] has proof status `complete-exact-argument` in `research/extended-frameworks-2026-10-03/quantum-field-theory/workers/interactions-renormalization/proofs.md#ir01`, but its current carrier is absent. For finite $N$, coefficients $a_j>0$, and a real polynomial $V(q)\ge c|q|^2-C_0$ with $c>0$ and $C_0\ge0$, it sets $W=V+C_0+1\ge1+c|q|^2$ and completes $C_c^\infty(\mathbb R^N)$ under $$\|u\|_Q^2=\sum_j a_j\|\partial_j u\|_2^2+\int_{\mathbb R^N}(W+1)|u|^2\,dq.$$ The planned conclusion is that this completion $Q$ injects continuously into $L^2$, its elements have the indicated weak derivatives and weighted norm, and it is a dense form domain. The research proof uses planned `def-qft-regulated-polynomial-hamiltonian` and the published density result `thm-c-c-infinity-rn-is-dense-in-l-p-of-rn`; it spends Countable Choice. None of these planned interfaces is treated here as an accepted current carrier.

## Example

For the one-coordinate Wick potential $V(q):=\lambda:q^4:_C$, every prescribed $\alpha>0$ has an explicit constant $C_0=15\lambda C^2+\alpha^2/(2\lambda)$ such that $V(q)\ge\alpha q^2-C_0$ for all $q$. Therefore the potential satisfies the coercivity hypothesis of [L1]. **Conditional on the missing QFT-IR01 carrier matching its recorded interface**, the shifted kinetic-plus-potential form has the dense, continuously injected form completion stated in [L1]. This example establishes a lower bound and a conditional form-domain consequence; it does not assert self-adjointness or an interacting Hamiltonian here.

## Verification

**Proof technique:** complete the square, then apply the exact planned coercive-form interface conditionally.

**Given:** $C\ge0$, $\lambda>0$, $\alpha>0$, $a>0$, and [A1]–[A2].

1.1 Put $y=q^2\ge0$. By [F1], $:q^4:_C-\frac12q^4=\frac12y^2-6Cy+3C^2=\frac12(y-6C)^2-15C^2\ge-15C^2$. Thus $:q^4:_C\ge\frac12q^4-15C^2$. [F1, algebra]

1.2 The identity $$\frac\lambda2q^4-\alpha q^2+\frac{\alpha^2}{2\lambda}=\frac\lambda2\left(q^2-\frac\alpha\lambda\right)^2\ge0$$ gives $\frac\lambda2q^4\ge\alpha q^2-\frac{\alpha^2}{2\lambda}$. Multiplying the inequality of step 1.1 by $\lambda>0$ and combining yields $$V(q)=\lambda:q^4:_C\ge\alpha q^2-\left(15\lambda C^2+\frac{\alpha^2}{2\lambda}\right).$$ [step 1.1, algebra]

2.1 Take $N=1$, the positive kinetic coefficient $a$, $c=\alpha$, and $C_0=15\lambda C^2+\alpha^2/(2\lambda)\ge0$. Step 1.2 verifies the exact polynomial lower bound required by [L1]. If the planned QFT-IR01 carrier proves [L1] with the quoted interface, its stated completion applies to this potential. This last form-domain conclusion remains conditional until the supplier carrier is authored and checked. [A1, A2, L1, step 1.2, given] ∎
