---
id: ex-log-gaussian-uniform-density-posterior
kind: example
title: "A constant Gaussian log-density prior gives the uniform density exactly"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 10
deps:
  - thm-gaussian-process-posterior-contraction
  - def-standard-normal-and-normal-laws
  - def-probability-measure
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "A. W. van der Vaart and J. H. van Zanten, Rates of contraction of posterior distributions based on Gaussian process priors, §3.1"
      url: "https://arxiv.org/pdf/0806.3024"
    - title: "Bas J. K. Kleijn, Aad W. van der Vaart and Harry van Zanten, Lectures on Nonparametric Bayesian Statistics, §12.2"
      url: "https://staff.fnwi.uva.nl/b.j.k.kleijn/NPBayes-LecNotes-2015.pdf"
---

## Statement

On $[0,1]$ with Lebesgue measure, take $W(x)=Z$ for all $x$, where $Z\sim N(0,1)$, and let the truth be $w_0=0$. The normalized log-Gaussian density prior is exactly the point mass at the uniform density. The concentration condition holds at $\epsilon_n=\sqrt{\log n/n}$ for all sufficiently large n.

## Facts & Assumptions

**Given:** The constant process $W(x)=Z$, standard normal $Z$, and uniform truth $p_0=1$.

[F1] [[def-standard-normal-and-normal-laws]]: the standard normal has density $\varphi(z)=e^{-z^2/2}/\sqrt{2\pi}$, which is bounded below on $[-1,1]$ by $\varphi(1)>0$.

[F2] [[thm-gaussian-process-posterior-contraction]]: in the log-Gaussian branch, a verified concentration condition and the model hypotheses imply expected posterior contraction in Hellinger distance.

## Verification

1.1 Every prior path is constant, so $Z_W=\int_0^1 e^Zdx=e^Z$ and $p_W(x)=1=p_0(x)$. Thus the posterior distribution of the density itself is the point mass at $p_0$ for every data vector; its posterior mass outside every positive Hellinger ball is exactly zero. [given, algebra]

1.2 The RKHS approximation term at $w_0=0$ is zero because the zero vector belongs to every Hilbert space. For $0<\epsilon\le1$, [F1] gives $\Pr(\|W\|_\infty<\epsilon)=\Pr(|Z|<\epsilon)\ge2\varphi(1)\epsilon$, hence $\phi_0(\epsilon)\le-\log(2\varphi(1)\epsilon)$. For $\epsilon_n=\sqrt{\log n/n}$, $n\epsilon_n^2=\log n$ and $-\log\epsilon_n\le\frac12\log n$ for large n, so $\phi_0(\epsilon_n)\le n\epsilon_n^2$ eventually. [F1, given, algebra]

2.1 The density family is jointly measurable and all normalizers are positive and finite. Step 1.2 verifies the concentration premise; applying the log-Gaussian branch of [F2] gives the stated rate, while step 1.1 gives the stronger exact posterior conclusion. [F2, step 1.1, step 1.2] ∎
