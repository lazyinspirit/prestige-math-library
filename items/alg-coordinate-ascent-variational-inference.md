---
id: alg-coordinate-ascent-variational-inference
kind: algorithm
title: "Coordinate-ascent variational inference"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-variational-family-and-elbo
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: "None. Finite products, conditional integrals under the stated L1 hypotheses, and normalization checks use no choice axiom."
verification:
  precheck: n/a
sources:
  references:
    - title: "David M. Blei, Alp Kucukelbir, and Jon D. McAuliffe, Variational Inference: A Review for Statisticians (2017)"
      url: "https://www.cs.columbia.edu/~blei/papers/BleiKucukelbirMcAuliffe2017.pdf"
      locator: "§2.4, equations (17)–(18) and Algorithm 1, printed pp. 863–864, PDF pp. 6–7"
    - title: "Michael I. Jordan, Zoubin Ghahramani, Tommi S. Jaakkola, and Lawrence K. Saul, An Introduction to Variational Methods for Graphical Models (1999)"
      url: "https://people.eecs.berkeley.edu/~jordan/papers/variational-intro.pdf"
      locator: "§6.3, printed pp. 217–220, PDF pp. 35–38"
    - title: "Ronghuo Zheng, Zhiting Hu, and Yuntian Deng, 10-708 Probabilistic Graphical Models, Lecture 13: Variational Inference II (2015)"
      url: "https://www.cs.cmu.edu/~epxing/Class/10708-15/notes/10708_scribe_lecture13.pdf"
      locator: "Complete 9-page lecture note; §3.2, PDF pp. 5–6"
---

## Definition

**Inputs:** A finite number $m\ge1$ of sigma-finite factor reference spaces $(\Omega_j,\mathcal A_j,\mu_j)$, their product reference measure $\mu$, a measurable target $\gamma$ with finite positive normalizer, an admissible initial mean-field density $q=\prod_{j=1}^m q_j$, and a finite sweep count $N\ge0$.

**Output:** The current admissible product density after at most $N$ full sweeps, together with a status indicating whether the requested sweeps completed or a coordinate update was unavailable.

For each sweep $t=1,\ldots,N$, visit coordinates in the fixed order $j=1,\ldots,m$. At coordinate $j$, keep $q_{-j}:=\prod_{k\ne j}q_k$ fixed; for $m=1$, the empty product reference space is a singleton with unit measure $\mu_{-j}$ and its density is $1$. Form the conditional log expectation
$$h_j(z_j):=\int_{\prod_{k\ne j}\Omega_k}\log\gamma(z_j,z_{-j})q_{-j}(z_{-j})\,d\mu_{-j}(z_{-j}).$$
Use this signed integral only when it is defined without an $\infty-\infty$ ambiguity and has a measurable extended-real version; require it to be finite for current $q_j$-almost every $z_j$. Set
$$c_j:=\int_{\Omega_j}e^{h_j(z_j)}\,\mu_j(dz_j).$$
If $0<c_j<\infty$ and the normalized density $q_j^*(z_j):=e^{h_j(z_j)}/c_j$ makes $q_j^*q_{-j}$ an admissible member of the mean-field family, replace $q_j$ by $q_j^*$. Otherwise stop and return the current density with status “coordinate update unavailable.”

The algorithm performs only the requested finite sweeps. It makes no convergence, stationary-point, global-optimum, calibration, or approximation-error claim. A separate theorem on this page proves exact coordinate monotonicity under these conditions.
