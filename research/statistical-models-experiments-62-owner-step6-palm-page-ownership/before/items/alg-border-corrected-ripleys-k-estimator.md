---
id: alg-border-corrected-ripleys-k-estimator
kind: algorithm
title: "Border-corrected estimator for Ripley K"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 7
deps:
  - def-pair-correlation-and-ripleys-k-function
  - def-random-measure-and-locally-finite-point-process
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-axiom-of-choice
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
      locator: "Lecture 2, §2.6, border method formula (18), PDF pp.39–40."
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process (2017 author-hosted version)"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 8, §§8.2–8.3, PDF pp.83–85: K-function and edge-boundary context; no estimator guarantee is imported."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Definition

Assume the point-process supplier's AC and Countable Choice convention. Let $\eta$ be the stationary locally square-integrable point process with finite positive intensity from [[def-pair-correlation-and-ripleys-k-function]]. Given a compact convex observation window $W\subseteq\mathbb R^d$ with $0<|W|<\infty$, where $|\cdot|$ is Borel Lebesgue measure as in [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], let $\xi(A):=\eta(A\cap W)$ for Borel $A$ be the complete observed counting measure in $W$ as in [[def-random-measure-and-locally-finite-point-process]], and fix a radius $r\ge0$. Define the **border window**

$$W_{-r}:=\{x\in W:\overline B[x,r]\subseteq W\},$$

where $\overline B[x,r]$ is the closed Euclidean ball under the Euclidean norm used in [[def-pair-correlation-and-ripleys-k-function]]. Since $W$ is closed, $W_{-r}=\bigcap_{\|z\|_2\le r}(W-z)$ is closed and hence Borel. Let $N_\xi(A)=\xi(A)$ count occurrences, including multiplicities, and put $\widehat\rho=N_\xi(W)/|W|$. The border anchor weight is $w_{W,r}(x)=1$ for $x\in W_{-r}$ and $0$ otherwise.

If $N_\xi(W_{-r})=0$, return **not defined**. Otherwise $N_\xi(W)>0$ because $W_{-r}\subseteq W$, so $\widehat\rho N_\xi(W_{-r})>0$. For an occurrence representation $\xi=\sum_i\delta_{X_i}$, return

$$\widehat K_{\rm border}(r):=\frac{1}{\widehat\rho\,N_\xi(W_{-r})}\sum_{i:X_i\in W_{-r}}\sum_{j\ne i}\mathbf1\{\|X_j-X_i\|_2\le r\}.$$

Every eligible anchor has its full closed radius-$r$ neighborhood inside $W$, so all its radius-$r$ partner occurrences are observed. This defines a finite-data procedure only; it asserts no unbiasedness, consistency, or asymptotic guarantee.

**Axiom convention.** The procedure itself makes no choices; AC and Countable Choice are inherited through its point-process and K dependencies.
