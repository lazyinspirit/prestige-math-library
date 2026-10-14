---
id: def-donsker-class-and-asymptotic-equicontinuity
kind: definition
title: Donsker classes and asymptotic equicontinuity
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps: [def-empirical-process-and-rademacher-process, def-covering-packing-bracketing-number-and-metric-entropy, def-convergence-in-distribution-of-random-elements, def-tight-family-of-probability-measures, cor-cauchy-schwarz-inequality-for-l-two]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jon A. Wellner, Empirical Processes: Theory and Applications, Chapter 1, §§1–2"
      url: "https://faculty.washington.edu/jonw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf"
    - title: "David Pollard, Empirical Processes: Theory and Applications, Sections 9–10"
      url: "http://www.stat.yale.edu/~pollard/Books/Iowa/Iowa-notes.pdf"
---

## Definition

For a class $\mathcal H$ of measurable real functions under a probability measure $Q$, an **envelope** $H$ means a nonnegative measurable function with $|h|\le H$ $Q$-almost surely for every $h\in\mathcal H$. Cauchy–Schwarz [[cor-cauchy-schwarz-inequality-for-l-two]] gives $QH\le\|H\|_{Q,2}<\infty$ when $H\in L^2(Q)$.

Let $(S,\mathcal A,P)$ be a probability space, let $X_1,X_2,\ldots$ be iid with law $P$, and let $\mathcal F$ be a nonempty class of measurable real-valued functions with a nonnegative measurable envelope $F$ satisfying $PF^2<\infty$. A class is **pointwise measurable** if it has a countable subclass $\mathcal F_0$ such that for each $f\in\mathcal F$ there is a sequence in $\mathcal F_0$ converging pointwise to $f$. Write $\mathbb G_n(f)=\sqrt n(P_nf-Pf)$ using [[def-empirical-process-and-rademacher-process]], and put

$$\rho_P(f,g)=\{P[(f-g)-P(f-g)]^2\}^{1/2}.$$

This is a pseudometric: distinct functions can have zero distance when their centered difference vanishes $P$-almost surely. The empirical process is **asymptotically equicontinuous in probability** with respect to $\rho_P$ if for every $\eta>0$,

$$\lim_{\delta\downarrow0}\limsup_{n\to\infty}P^*\left(\sup_{f,g\in\mathcal F:\,\rho_P(f,g)<\delta}|\mathbb G_n(f)-\mathbb G_n(g)|>\eta\right)=0.$$

Here $P^*(A)=\inf\{P(B): A\subseteq B,\ B\in\mathcal A\}$ is outer probability; bounded nonmeasurable functionals are handled by the corresponding outer expectation $E^*Y=\inf\{EY':Y'\text{ measurable and }Y'\ge Y\}$. For a pointwise-measurable class these conventions agree with ordinary probability whenever the displayed supremum is measurable.

Write $\ell^\infty(\mathcal F)$ for the bounded real-valued functions on the index set $\mathcal F$, with norm $\|z\|_{\mathcal F}=\sup_{f\in\mathcal F}|z(f)|$. The class is **$P$-Donsker** if, for each $n$, $\mathbb G_n$ has bounded paths on a measurable event of probability one and, after setting the entire path to zero off that event, the resulting $\ell^\infty(\mathcal F)$-valued process converges weakly in the outer-expectation sense to a tight Borel law of a centered Gaussian process $\mathbb G_P$ with covariance

$$\operatorname{Cov}(\mathbb G_P(f),\mathbb G_P(g))=P[(f-Pf)(g-Pg)].$$

Here outer weak convergence means $E^*H(\mathbb G_n)\to EH(\mathbb G_P)$ for every bounded uniformly continuous real function $H$ on $\ell^\infty(\mathcal F)$; the outer expectation is the infimum of expectations of measurable majorants. The law is tight in the sense of [[def-tight-family-of-probability-measures]]. Finite-dimensional convergence means weak convergence of the vector of process values at every finite list of indices, as in [[def-convergence-in-distribution-of-random-elements]].
