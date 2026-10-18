---
id: ex-it-classical-ensemble-holevo-equality
kind: example
title: An orthogonal ensemble attains its Holevo information
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-it-classical-quantum-state-and-holevo-information, def-it-von-neumann-entropy, def-qc-povm-and-outcome-law, thm-qc-povm-probabilities-normalize]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §5.3.3"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, arXiv:1106.1445v8, §11.1"
      url: "https://arxiv.org/pdf/1106.1445v8"
verification:
  precheck: pending
---

## Example

Let $X$ have a finite probability vector $(p_x)$ and let $H_B=\mathbb C^{|X|}$ have orthonormal basis $(e_x)_{x\in X}$. Set $\rho_x:=P_x$, where $P_xv:=\langle v,e_x\rangle e_x$, and measure with the projective POVM $(P_y)_{y\in X}$. Define the joint law $p_{xy}:=p_x\operatorname{tr}(\rho_xP_y)$ and its output marginal $p_Y(y):=\sum_xp_{xy}$. With $H(p):=-\sum_{x:p_x>0}p_x\ln p_x$ and $I(X:Y):=\sum_{x,y:p_{xy}>0}p_{xy}\ln(p_{xy}/(p_xp_Y(y)))$, the Holevo information and the measurement mutual information both equal $H(p)$.

## Facts & Assumptions

**Given:** The probability vector, orthonormal basis, ensemble, and POVM in the Example.

[F1] [[def-it-classical-quantum-state-and-holevo-information]]: $\chi=S(\bar\rho)-\sum_{p_x>0}p_xS(\rho_x)$.

[F2] [[def-it-von-neumann-entropy]]: a state with eigenvalue list $(\lambda_j)$ has entropy $-\sum_{\lambda_j>0}\lambda_j\ln\lambda_j$.

[F3] [[def-qc-povm-and-outcome-law]] and [[thm-qc-povm-probabilities-normalize]]: the outcome weight of $P_y$ in state $\rho_x$ is $\operatorname{tr}(\rho_xP_y)$, and the weights form a probability vector.

## Verification

1.1 The average state $\bar\rho=\sum_xp_xP_x$ is diagonal in $(e_x)$ with eigenvalues $p_x$, so $S(\bar\rho)=H(p)$ by [F2]. Each $P_x$ has eigenvalues $1$ and zeros, hence $S(P_x)=0$; [F1] gives $\chi=H(p)$. [given, F1, F2, algebra]

2.1 By [F3], $p_{xy}=p_x\operatorname{tr}(P_xP_y)=p_x\delta_{xy}$. Thus $p_Y(y)=p_y$, and in the sum defining $I(X:Y)$ only $x=y$ with $p_x>0$ contributes, giving $I(X:Y)=\sum_{x:p_x>0}p_x\ln(1/p_x)=H(p)$. [given, F3, step 1.1, algebra]

3.1 Combining steps 1.1 and 2.1 gives $I(X:Y)=\chi$ for the displayed orthogonal ensemble. This computation does not assert equality for a non-orthogonal ensemble. [step 1.1, step 2.1, algebra] ∎

