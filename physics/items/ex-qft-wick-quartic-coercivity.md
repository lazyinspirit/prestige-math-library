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

[A2] Countable Choice is the explicit set-theoretic hypothesis used by the current coercive-form draft supplier; it is stated here rather than hidden. [[def-countable-choice]]

[F1] The finite covariance Wick definition gives $:q^4:_C=q^4-6Cq^2+3C^2$. [[def-qft-finite-wick-normal-powers]]

[L1] **Current batch-59 draft carrier; independent review remains pending.** The current batch-59 manifest lists [[lem-qft-coercive-polynomial-form-domain]] at item level $1$ with design state “Authored draft with complete local argument; independent review remains pending.” Its actual statement assumes Countable Choice and the finite data of `def-qft-regulated-polynomial-hamiltonian`: $N\ge1$, coefficients $a_j>0$, and a real polynomial $V$ satisfying $V(q)\ge c|q|^2-C_0$ for $c>0$ and $C_0\ge0$. Put $W=V+C_0+1$. It asserts that the completion of $C_c^\infty(\mathbb R^N)$ under $\|u\|_Q^2=\sum_j a_j\|\partial_j u\|_2^2+\int_{\mathbb R^N}(W+1)|u|^2\,dq$ injects continuously into $L^2$ with dense image, has the indicated weak derivatives and weighted norm, and satisfies the displayed norm identity. I inspected its complete current proof and transitive suppliers: its direct dependencies are the current draft definition `def-qft-regulated-polynomial-hamiltonian`, published `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`, published `thm-c-c-infinity-rn-is-dense-in-l-p-of-rn`, published `thm-cauchy-schwarz-in-an-inner-product-space`, and published `def-countable-choice`. The carrier exists in the current manifest and its interface matches the use below, but it remains an unreviewed draft; this batch keeps the form-domain consequence explicitly conditional on [L1].

## Example

For the one-coordinate Wick potential $V(q):=\lambda:q^4:_C$, every prescribed $\alpha>0$ has an explicit constant $C_0=15\lambda C^2+\alpha^2/(2\lambda)$ such that $V(q)\ge\alpha q^2-C_0$ for all $q$. Therefore the potential satisfies the coercivity hypothesis of [L1]. **Conditional on the current QFT-IR01 draft argument and its stated hypotheses**, the shifted kinetic-plus-potential form has the dense, continuously injected form completion stated in [L1]. This example establishes a lower bound and a conditional form-domain consequence; it does not assert self-adjointness or an interacting Hamiltonian here.

## Verification

**Proof technique:** complete the square, then apply the current coercive-form draft interface conditionally.

**Given:** $C\ge0$, $\lambda>0$, $\alpha>0$, $a>0$, and [A1]–[A2].

1.1 Put $y=q^2\ge0$. By [F1], $:q^4:_C-\frac12q^4=\frac12y^2-6Cy+3C^2=\frac12(y-6C)^2-15C^2\ge-15C^2$. Thus $:q^4:_C\ge\frac12q^4-15C^2$. [F1, algebra]

2.1 The identity $$\frac\lambda2q^4-\alpha q^2+\frac{\alpha^2}{2\lambda}=\frac\lambda2\left(q^2-\frac\alpha\lambda\right)^2\ge0$$ gives $\frac\lambda2q^4\ge\alpha q^2-\frac{\alpha^2}{2\lambda}$. Multiplying the inequality of step 1.1 by $\lambda>0$ and combining yields $$V(q)=\lambda:q^4:_C\ge\alpha q^2-\left(15\lambda C^2+\frac{\alpha^2}{2\lambda}\right).$$ [step 1.1, algebra]

3.1 Take $N=1$, the positive kinetic coefficient $a$, $c=\alpha$, and $C_0=15\lambda C^2+\alpha^2/(2\lambda)\ge0$. Step 2.1 verifies the exact polynomial lower bound required by [L1]. The current draft statement’s hypotheses therefore match this example, and its stated completion applies conditionally on that supplier argument. The batch does not represent the draft as independently approved. [A1, A2, L1, step 2.1, given] ∎
