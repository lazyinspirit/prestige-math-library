---
id: thm-separable-logistic-gd-selects-hard-margin-direction
kind: theorem
title: "Separable logistic and exponential gradient descent select the hard-margin direction"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - alg-gradient-descent
  - def-linear-separable-margin-and-hard-margin-svm
  - def-tight-exponential-tail
  - lem-hard-margin-svm-has-unique-minimizer
  - lem-logistic-and-exponential-losses-have-tight-exponential-tail
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Daniel Soudry, Elad Hoffer, Mor Shpigel Nacson, Suriya Gunasekar, and Nathan Srebro, The Implicit Bias of Gradient Descent on Separable Data, Theorem 3 and Appendices A–C"
      url: "https://jmlr.csail.mit.edu/papers/volume19/18-188/18-188.pdf"
    - title: "Matus Telgarsky, Deep Learning Theory lecture notes, §§10.1–10.2"
      url: "https://mjt.cs.illinois.edu/dlt/"
---

## Statement

Let $(x_i,y_i)_{i=1}^n$ be a finite strictly linearly separable sample with $x_i\in\mathbb R^d$ and $y_i\in\{-1,+1\}$, use the bias-free score $w\mapsto\langle w,x_i\rangle$, and let $w^*$ be the unique minimizer of $\frac12\|w\|_2^2$ subject to $y_i\langle w,x_i\rangle\ge1$ for all $i$. Put $v_i:=y_ix_i$, let $X$ be the matrix with columns $v_i$, and write $\lambda_{\max}(XX^{\mathsf T})$ for its largest eigenvalue. Use either the logistic loss $\ell_{\log}(u)=\log(1+e^{-u})$ or the exponential loss $\ell_{\exp}(u)=e^{-u}$, empirical risk $\mathcal L(w)=\sum_{i=1}^n\ell(\langle w,v_i\rangle)$, arbitrary finite initialization $w_0$, and full-batch fixed-step gradient descent $w_{t+1}=w_t-\eta\nabla\mathcal L(w_t)$. The source's tight-tail condition means that $f=-\ell'$ has constants $c,a,\mu_+,\mu_-,u_+,u_->0$ with $f(u)\le c(1+e^{-\mu_+u})e^{-au}$ for $u>u_+$ and $f(u)\ge c(1-e^{-\mu_-u})e^{-au}$ for $u>u_-$; both listed losses satisfy it with all six constants equal to $1$. For logistic loss take $0<\eta<8/\lambda_{\max}(XX^{\mathsf T})$. For exponential loss take a fixed positive step in the local-smoothness regime: assume a convex region containing every update segment on which $\nabla\mathcal L$ is $\beta_{\mathrm{loc}}$-Lipschitz, and require $0<\eta<2/\beta_{\mathrm{loc}}$.

Under these hypotheses, $\mathcal L(w_t)\to0$, $\|w_t\|_2\to\infty$, and $w_t/\|w_t\|_2\to w^*/\|w^*\|_2$. There are vectors $r_t$ with $w_t=w^*\log t+r_t$ and $\|r_t\|_2=O(\log\log t)$ as $t\to\infty$. For Lebesgue-almost every feature array among the strictly separable samples, the residual $r_t$ is bounded; in degenerate cases the expansion may include nonzero $\log\log t$ and further iterated-log terms. No population-risk or test-risk conclusion is asserted.

## Statement references

[Daniel Soudry et al., *The Implicit Bias of Gradient Descent on Separable Data*, Theorem 3, Appendices A–C](https://jmlr.csail.mit.edu/papers/volume19/18-188/18-188.pdf)

[Matus Telgarsky, *Deep Learning Theory* lecture notes, §§10.1–10.2](https://mjt.cs.illinois.edu/dlt/)

## Proof obligation

The source theorem is established, and its complete relevant argument was read. A complete local proof is not supplied here, so this item is escalated and is not a logical supplier. The all-data claim requires Soudry et al.'s recursive support-set projection construction and the bounded-residual proof for Theorem 13 (Appendix C, especially Lemma 14 and the auxiliary existence/uniqueness arguments in Lemmas 17–18 and Lemma 15). Those estimates control non-support gradients, lower-order log iterates, and the residual through several separate integrability cases. I have not independently reconstructed every bound into a local proof with sufficient confidence. This is an established-proof authoring obligation, not an open problem; the statement and all residual qualifications remain in scope.
