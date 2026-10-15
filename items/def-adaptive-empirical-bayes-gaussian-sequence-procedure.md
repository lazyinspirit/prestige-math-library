---
id: def-adaptive-empirical-bayes-gaussian-sequence-procedure
kind: definition
title: "Empirical-Bayes credible-ball procedure in the inverse Gaussian sequence model"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-coordinate-maps-and-cylinder-sigma-algebra
  - def-square-summable-family-on-an-arbitrary-index-set
  - def-standard-normal-and-normal-laws
  - lem-ac-supplies-sequential-choices-for-probability-constructions
  - thm-countable-product-of-probability-spaces
justified_by: []
proof_strategy: definition
axiom_use: "AC is stated because the normal law supplier assumes it and the countable product model uses countable and dependent choice, which AC supplies. The local coordinate calculation adds no stronger choice principle."
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Botond Szabó, Aad van der Vaart and Harry van Zanten, Frequentist coverage of adaptive nonparametric Bayesian credible sets, Annals of Statistics 43(4) (2015), §§2–3"
      url: "https://arxiv.org/pdf/1310.4489v5"
      locator: "Model (2.1)–(2.7) and credible-ball definition (3.1)–(3.2), printed pp. 5–8 (PDF pp. 6–9)."
    - title: "B. T. Knapik, A. W. van der Vaart and J. H. van Zanten, Bayesian inverse problems with Gaussian priors, Annals of Statistics 39(5) (2011), §§2–4"
      url: "https://research.vu.nl/ws/portalfiles/portal/2619416/276605.pdf"
      locator: "Gaussian sequence model, conjugate prior and posterior, and frequentist coverage of posterior balls, printed pp. 2628–2636 (PDF pp. 4–13)."
---

## Definition

Assume AC. Fix $n\ge3$, $p\ge0$, $C\ge1$, $\gamma\in(0,1)$,
an inflation factor $L\ge0$, and a finite $A_n>0$. Let
$(\kappa_i)_{i\ge1}$ be known nonzero real numbers satisfying
$$C^{-2}i^{-2p}\le\kappa_i^2\le C^2i^{-2p}.$$
For a true parameter $\theta_0\in\ell^2(\mathbb N,\mathbb R)$, the observation
sequence is
$$X_i=\kappa_i\theta_{0,i}+n^{-1/2}Z_i,\qquad i\ge1,$$
where $(Z_i)_{i\ge1}$ are independent $N(0,1)$ random variables. The
corresponding sampling law is denoted $P_{\theta_0}^{(n)}$.

For $0<\alpha\le A_n$, let
$$\Pi_\alpha=\bigotimes_{i\ge1}N(0,i^{-1-2\alpha}).$$
Its coordinate posterior rule is the product of
$$N\!\left(\widehat\theta_{n,\alpha,i}(x), v_{n,\alpha,i}\right),\qquad \widehat\theta_{n,\alpha,i}(x)= \frac{n\kappa_i x_i}{i^{1+2\alpha}+n\kappa_i^2},\qquad v_{n,\alpha,i}=\frac{1}{i^{1+2\alpha}+n\kappa_i^2}.$$
For $\alpha>0$, the marginal log likelihood relative to the reference law
$\bigotimes_{i\ge1}N(0,n^{-1})$ is
$$\ell_n(\alpha;x)=-\frac12\sum_{i=1}^{\infty} \left[ \log\!\left(1+\frac{n\kappa_i^2}{i^{1+2\alpha}}\right) -\frac{n^2\kappa_i^2x_i^2}{i^{1+2\alpha}+n\kappa_i^2} \right].$$
For maximization, use this same source score series at every
$\alpha\in[0,A_n]$, with the sum taken in increasing coordinate order.
Choose a Borel data domain $D_n\subseteq\mathbb R^{\mathbb N}$ such that
the series converges to a finite value for every $x\in D_n$ and every
$\alpha\in[0,A_n]$, and $\alpha\mapsto\ell_n(\alpha;x)$ is upper
semicontinuous there. For each truth under consideration assume
$P_{\theta_0}^{(n)}(D_n)=1$. Also assume a Borel-measurable selector
$x\mapsto\widehat\alpha_n(x)$ on $D_n$ is supplied, with
$\widehat\alpha_n(x)\in\operatorname*{arg\,max}_{0\le\alpha\le A_n}
\ell_n(\alpha;x)$.
These domain, endpoint-score and selector conditions are explicit procedure
hypotheses; no arbitrary score value at $\alpha=0$ is added. At
$\widehat\alpha_n>0$, let $r_{n,\gamma}(\widehat\alpha_n)$ be the
$1-\gamma$ quantile of the centered posterior $\ell^2$ norm and use the
posterior mean given above. Define the empirical-Bayes set by
$$\widehat C_n(L;x)= \begin{cases} \{\theta\in\ell^2: \|\theta-\widehat\theta_{n,\widehat\alpha_n(x)}(x)\|_2 \le Lr_{n,\gamma}(\widehat\alpha_n(x))\},& \widehat\alpha_n(x)>0,\\ \ell^2,&\widehat\alpha_n(x)=0. \end{cases}$$
Use the source convention $r_{n,\gamma}(0)=+\infty$ for the second branch;
no posterior probability on $\ell^2$ is asserted at $\alpha=0$. A separate
local lemma verifies the coordinate posterior and evidence formulas for
$\alpha>0$.

## Remarks

The batch's required type-II definition is stated for a finite-group
dominated hierarchy, while this procedure explicitly supplies a sequence
model and data-indexed selector. No dominating measure or coverage guarantee
from that finite-group setup is imported.
