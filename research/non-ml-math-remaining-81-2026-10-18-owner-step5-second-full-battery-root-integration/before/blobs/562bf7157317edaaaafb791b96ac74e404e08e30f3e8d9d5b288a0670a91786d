---
id: thm-conditional-kl-is-measurable
kind: theorem
title: "Conditional KL is measurable for supplied kernels"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - thm-general-kl-variational-and-partition-formulas
  - thm-measurability-of-integration-against-a-kernel
  - cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "AC supplies the countable generating algebra for a standard-Borel target and the Radon–Nikodym KL definition."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, MIT 6.441 Information Theory, Chapter 2 §2.6"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/184197ca5d5418da2415d37e929860b9_MIT6_441S16_chapter_2.pdf"
    - title: "Robert M. Gray, Entropy and Information Theory, corrected author-hosted first edition, Chapter 5 §5.3"
      url: "https://ee-www.stanford.edu/~gray/it.pdf"
---

## Statement

Let K,L be probability kernels from a measurable space $(Z,\mathcal Z)$ into a standard-Borel space $(E,\mathcal E)$. Then $z\mapsto D(K(z,\cdot)\|L(z,\cdot))$ is $\mathcal Z$-measurable, with $+\infty$ allowed. Consequently the integral used to define conditional KL is well-defined.

## Facts & Assumptions

**Given:** AC, the kernels K,L, and the standard-Borel target $(E,\mathcal E)$.

[A1] AC supplies the countable generating algebra for standard-Borel E and the Radon–Nikodym density in measurable-space KL. [[def-axiom-of-choice]]

[F1] A standard-Borel space has a countable algebra $\mathcal A$ generating its sigma-algebra and determining finite measures. [[cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras]]

[F2] For a probability kernel, integration of a nonnegative product-measurable function is measurable in the base variable; signed integrals are measurable when the positive and negative parts are finite. [[thm-measurability-of-integration-against-a-kernel]]

[F3] For probability laws P,Q, KL equals the supremum of $\int g\,dP-\ln\int e^g\,dQ$ over bounded measurable real g. [[thm-general-kl-variational-and-partition-formulas]]

## Proof

**Given:** AC and probability kernels K,L into E.

1.1 Let $\rho=P+Q$ for arbitrary probability measures P,Q on E. [given, choose]
For the algebra $\mathcal A$ in [F1], the class of measurable $B$ approximable in $\rho$-measure by members of $\mathcal A$ is a sigma-algebra: complements preserve symmetric-difference measure, finite unions preserve approximation, and a countable union is approximated by first truncating the union using finiteness of $\rho$ and then approximating that finite union. It contains $\mathcal A$, so it is all of $\mathcal E$. Hence any bounded measurable real function can be approximated in $L^1(\rho)$ by bounded simple functions from a countable family $\mathcal G$ of rational-valued simple functions on $\mathcal A$. On a fixed bound $M$, the functional $\Phi_{P,Q}(g)=\int g\,dP-\ln\int e^g\,dQ$ is continuous under $L^1(\rho)$ approximation, because $e^t$ is Lipschitz on $[-M,M]$ and $\int e^g\,dQ\ge e^{-M}$. Thus [F3] gives
$$D(P\|Q)=\sup_{g\in\mathcal G}\left(\int g\,dP-\ln\int e^g\,dQ\right).$$
The family $\mathcal G$ is countable and does not depend on P,Q. [A1, F1, F3, given, construct]

2.1 For fixed $g\in\mathcal G$, the functions $z\mapsto\int g(x)K(z,dx)$ and $z\mapsto\int e^{g(x)}L(z,dx)$ are measurable by [F2], applying it to positive and negative parts for the first function. If $|g|\le M$, then $\int e^g\,dL(z)\ge e^{-M}>0$, so its logarithm is measurable. Therefore each candidate $\Phi_z(g)$ is measurable. [F2, step 1.1]

3.1 Apply the identity in step 1.1 to $P=K(z,\cdot)$ and $Q=L(z,\cdot)$ for each fixed z. Then $D(K(z,\cdot)\|L(z,\cdot))=\sup_{g\in\mathcal G}\Phi_z(g)$, a countable supremum of measurable functions by step 2.1. This proves measurability and makes its nonnegative integral against any supplied base probability well-defined. [A1, F3, step 1.1, step 2.1] ∎
