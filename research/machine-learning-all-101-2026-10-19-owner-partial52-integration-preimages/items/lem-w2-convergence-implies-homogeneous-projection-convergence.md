---
id: lem-w2-convergence-implies-homogeneous-projection-convergence
kind: lemma
title: W2 convergence implies weak convergence of homogeneous projections
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-wasserstein-two-space-and-couplings, def-two-homogeneous-measure-projection, def-partial-one-homogeneous-measure-projection, def-axiom-of-choice, prop-existence-and-lower-semicontinuity-of-optimal-couplings]
justified_by: []
proof_strategy: direct
axiom_use: "AC supplies couplings whose quadratic costs approach the W2 infimum; the truncation argument is choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
    - title: "Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
---
## Statement

Assume AC. Let $\mu_n,\mu\in\mathcal P_2(\mathbb R^d)$, with $W_2(\mu_n,\mu)\to0$. Then $h^2(\mu_n)$ converges weakly as finite measures on $\mathbb S^{d-1}$ to $h^2(\mu)$. If the ambient space is $\mathbb R\times\mathbb R^q$ with first coordinate $w\in\mathbb R$ and $\Theta=\mathbb R^q$, then $h^1(\mu_n)$ converges weakly as finite signed measures against every bounded continuous test on $\Theta$ to $h^1(\mu)$.

## Statement references

[[def-wasserstein-two-space-and-couplings]]

[[def-two-homogeneous-measure-projection]]

[[def-partial-one-homogeneous-measure-projection]]

[[prop-existence-and-lower-semicontinuity-of-optimal-couplings]]

[Chizat and Bach, Appendix A.1.4 and A.2](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Chapter 7](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** The quadratic transportation convergence and the projection definitions in the Statement.

[A1] AC supplies the couplings with cost tending to the W2 infimum used in the truncation proof. [[def-axiom-of-choice]]

[F1] $W_2(\mu_n,\mu)^2$ is the infimum of $\int|x-y|^2d\pi$ over couplings; AC permits a coupling with cost at most $W_2^2+1/n^2$. [[def-wasserstein-two-space-and-couplings]] [[def-axiom-of-choice]]

[F2] For continuous $f$ on the sphere, $\int f\,dh^2(\alpha)=\int_{u\ne0}|u|^2f(u/|u|)d\alpha(u)$. For bounded continuous $\psi$ on $\Theta$, $\int\psi\,dh^1(\alpha)=\int w\psi(\theta)d\alpha$. [[def-two-homogeneous-measure-projection]] [[def-partial-one-homogeneous-measure-projection]]

[F3] The family $\mu_n$ has uniformly bounded second moments, and the chosen couplings $\pi_n$ have quadratic displacement tending to zero, by the W2 convergence and coupling-cost choice in [F1].

## Proof

**Given:** AC, the measures, and [F1]–[F3].

1.1 Let $(X_n,Y_n)$ have joint law $\pi_n$ and write $D_n=X_n-Y_n$. AC supplies the sequence of couplings in [A1]. Then $\mathbb E|D_n|^2\to0$, and $\sup_n\mathbb E|X_n|^2<\infty$ by $|X_n|^2\le2|Y_n|^2+2|D_n|^2$. For bounded continuous $\psi$, the function $H(w,\theta)=w\psi(\theta)$ is continuous and has at most linear growth. A compactly supported continuous truncation of $H$ is uniformly continuous, so convergence in probability of $D_n$ gives convergence of its expectations. The truncation error is uniformly small because $\mathbb E[|X_n|1_{|X_n|>R}]\le R^{-1}\mathbb E|X_n|^2$ and the same bound holds for $Y_n$. Hence $\mathbb EH(X_n)-\mathbb EH(Y_n)\to0$. By [F2], this is weak convergence of $h^1(\mu_n)$ against every such $\psi$. [A1, F1, F2, F3, algebra]

2.1 Fix continuous $f$ on $\mathbb S^{d-1}$ and set $\Psi_f(0)=0$, $\Psi_f(u)=|u|^2f(u/|u|)$ for $u\ne0$. This function is continuous and $|\Psi_f(u)|\le\|f\|_\infty|u|^2$. The quadratic moments are asymptotically uniformly integrable: if $|X_n|>R$, then either $|Y_n|>R/2$ or $|D_n|>R/2$. Using [A1], $|X_n|^2\le2|Y_n|^2+2|D_n|^2$, and splitting the term $|Y_n|^2\mathbf1_{|D_n|>R/2}$ at $|Y_n|=R/2$ gives
$$\mathbb E[|X_n|^2\mathbf1_{|X_n|>R}]\le4\mathbb E|D_n|^2+4\mathbb E[|Y_n|^2\mathbf1_{|Y_n|>R/2}].$$
The right side tends uniformly to zero in the limit $n\to\infty$ followed by $R\to\infty$; the same estimate applies to $Y_n=Y$. A compactly supported continuous truncation of $\Psi_f$ has convergent integrals because it is uniformly continuous and $D_n\to0$ in probability. The asymptotic tail bound makes the truncation error tend to zero. Hence $\int\Psi_fd\mu_n\to\int\Psi_fd\mu$, which is weak convergence of $h^2(\mu_n)$ by [F2]. [A1, F1, F2, F3, step 1.1, algebra] ∎

