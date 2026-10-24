---
id: def-rare-event-efficiency-criteria
kind: definition
title: Rare-event efficiency and work criteria
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - alg-importance-sampling
  - thm-ordinary-importance-sampling-finite-variance-under-weighted-second-moment
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Gino Biondini, An Introduction to Rare Event Simulation and Importance Sampling, Handbook of Statistics 33, Chapter 2, ``3.1–3.3, 8"
      url: "https://www.math.buffalo.edu/~biondini/papers/handbookstatistics2015v33chapter2.pdf"
    - title: "Patrick Laub, Algorithms for Rare Event Estimation, Short Course, Lecture 1 Part 2, Importance Sampling and Exponential Tilting"
      url: "https://laub.au/rare-events/slides/L1ii.slides.html"
    - title: "Michele Pagano, Efficient Rare Event Simulation: A Tutorial on Importance Sampling, ``18–31"
      url: "https://www.ime.usp.br/~yambar/MAE5704/Aula4MonteCarlo-II/Anexo%201%20Efficient%20rare%20event%20simulation%20-%20tutorial%20on%20importance%20sampling.pdf"
    - title: "Joshua C. C. Chan, Peter W. Glynn, and Dirk P. Kroese, A Comparison of Cross-Entropy and Variance Minimization Strategies, §2"
      url: "https://web.stanford.edu/~glynn/papers/2011/ChanGKroese11.pdf"
      locator: "Journal pp. 184–185 (PDF pp. 2–3): the definitions of logarithmic efficiency and bounded relative error assume an unbiased estimator; bounded relative error implies asymptotic optimality."
---

## Definition

Let $(P_\lambda,A_\lambda)_{\lambda\in\Lambda}$ be a family of probability measures and measurable events with $p_\lambda=P_\lambda(A_\lambda)>0$ and $p_\lambda\to0$ along the stated rare-event limit. An estimator $\widehat p_\lambda$ is **unbiased with finite variance** when $\mathbb E[\widehat p_\lambda]=p_\lambda$ and $\operatorname{Var}(\widehat p_\lambda)<\infty$. Its **relative error** is
$
\operatorname{RE}(\widehat p_\lambda)=\frac{\sqrt{\operatorname{Var}(\widehat p_\lambda)}}{p_\lambda}.
$
It has **bounded relative error** if these relative errors remain bounded for all sufficiently rare indices. For such an unbiased estimator family, it is **logarithmically efficient** if $\widehat p_\lambda\ge0$, its second moment is finite and positive, and
$
\lim_{\lambda}\frac{\log\mathbb E[\widehat p_\lambda^2]}{\log(p_\lambda^2)}=1.
$
Among nonnegative unbiased estimator families, logarithmic efficiency is a weaker asymptotic property than bounded relative error; the definitions impose no implication between an algorithm's efficiency and its proposal-fitting success.

For a specified cost model, let $W_\lambda$ be the expected work of one estimator replication. Record both its variance and its **variance-work product** $W_\lambda\operatorname{Var}(\widehat p_\lambda)$; for relative precision, record $W_\lambda\operatorname{Var}(\widehat p_\lambda)/p_\lambda^2$. These quantities depend on the cost model. Comparing algorithms requires the same declared work convention.

For a single event $A$ under a probability measure $P$, put $p=P(A)>0$. If $P$ has density $f$ with respect to $\mu$, the **zero-variance event proposal** is the probability density
$
q^*(x)=\frac{\mathbf 1_A(x)f(x)}{p}.
$
It is a formal benchmark because its normalizing constant is the unknown event probability $p$. Ordinary importance-sampling estimators and their weighted-second-moment condition are defined in [[alg-importance-sampling]] and [[thm-ordinary-importance-sampling-finite-variance-under-weighted-second-moment]].
