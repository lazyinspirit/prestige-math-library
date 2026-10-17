---

id: cex-csm-specific-entropy-not-local
kind: counterexample
title: Small entropy density without homogeneous local convergence
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-axiom-of-choice
  - cex-csm-energy-concentration-not-local
  - lem-csm-kl-chain-disjoint
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  cex-csm-energy-concentration-not-local: mathematical-premise
  lem-csm-kl-chain-disjoint: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "H.-O. Georgii, Probabilistic aspects of entropy, in Entropy"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/Dresden.pdf"
      locator: "Sections 3–4, PDF viewer pp.5–6: relative entropy and its variational formula; Section 6, PDF viewer pp.10–12: specific entropy density; this finite example is proved locally."
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, complete course text"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
      locator: "Section 4.2, printed pp.192–198 / PDF viewer pp.220–226: canonical entropy and phase-space context only; the Bernoulli countermodel is proved locally."
---

## Statement refuted

Assume AC. Fix $0<\theta<1$ and $\epsilon>0$, and let $P_N,H_N$ be the reference and energy of [[cex-csm-energy-concentration-not-local]]. The refuted implication is: for every sequence of laws $Q_N\ll P_N$, if $N^{-1}D(Q_N\Vert P_N)\to0$, $H_N/N\to\epsilon\theta$ in $Q_N$-probability, and $N^{-1}H_{\rm Sh}(Q_N)\to h(\theta)$, then the first-coordinate marginal of $Q_N$ converges in event-supremum total variation to Bernoulli$(\theta)$. Here $H_{\rm Sh}(Q_N)=-\sum_xQ_N(x)\log Q_N(x)$ and $h(\theta)=-\theta\log\theta-(1-\theta)\log(1-\theta)$ use natural logarithms.

## Facts & Assumptions

**Given:** AC, the Bernoulli model and parameters above.

[A1] AC is the choice hypothesis of the conditional entropy chain supplier ([[def-axiom-of-choice]]).

[F1] [[lem-csm-kl-chain-disjoint]]: the finite product KL chain rule separates the first coordinate from its conditional remainder.

## Counterexample

**Given:** The finite product laws and energy.

1.1 Set $A_N:=\delta_1\otimes\operatorname{Bernoulli}(\theta)^{\otimes(N-1)}$, using the empty product for $N=1$. Under $A_N$, $X_1=1$ surely and the remaining coordinates retain their independent Bernoulli-$\theta$ law. The likelihood $dA_N/dP_N$ is $1/\theta$ on $\{X_1=1\}$ and zero elsewhere, so integration gives $D(A_N\Vert P_N)=\log(1/\theta)$. Equivalently, [F1] decomposes the divergence into $D(\delta_1\Vert\mathrm{Bernoulli}(\theta))=\log(1/\theta)$ and a zero conditional remainder. Dividing by $N$ gives vanishing entropy density. [A1, F1, given, algebra]

2.1 Under $A_N$, $H_N=\epsilon(1+Y_N)$ with $Y_N$ binomial $(N-1,\theta)$. Since $Y_N$ is the sum of $N-1$ independent Bernoulli coordinates, $E Y_N=(N-1)\theta$ and $\operatorname{Var}(Y_N)=(N-1)\theta(1-\theta)$, by expanding the mean and variance and using zero cross-covariances. Thus $E(H_N/N)=\epsilon[1+(N-1)\theta]/N\to\epsilon\theta$ and $\operatorname{Var}(H_N/N)=\epsilon^2(N-1)\theta(1-\theta)/N^2\to0$. For any $\eta>0$, $1_{\{|H_N/N-E(H_N/N)|\geq\eta\}}\leq(H_N/N-E(H_N/N))^2/\eta^2$; integrating gives the Chebyshev bound and convergence in probability. Its Shannon entropy is $H_{\rm Sh}(A_N)=(N-1)h(\theta)$ by adding the logarithms of the independent-coordinate probabilities, so $H_{\rm Sh}(A_N)/N=(N-1)h(\theta)/N\to h(\theta)$, where $h(\theta)=-\theta\log\theta-(1-\theta)\log(1-\theta)$. Yet the first coordinate remains one and is at total-variation distance $1-\theta$ from Bernoulli$(\theta)$. This proves all claims and refutes the statement. [step 1.1, algebra] ∎
