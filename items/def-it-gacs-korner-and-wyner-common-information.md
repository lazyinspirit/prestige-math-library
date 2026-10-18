---
id: def-it-gacs-korner-and-wyner-common-information
kind: definition
title: "Deterministic Gács–Körner common part and Wyner common information"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-it-finite-mutual-information
  - def-it-information-units-and-logarithm-base
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; the source alphabets and their support graph are finite."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "P. Gács and J. Körner, Common Information Is Far Less Than Mutual Information"
      url: "https://cs-web.bu.edu/faculty/gacs/papers/commoninf.pdf"
      locator: "§2, Definitions 4–5 and the equivalence-class construction, printed pp. 150–151 (PDF pp. 2–3)."
    - title: "A. D. Wyner, The Common Information of Two Dependent Random Variables"
      url: "https://vyftan.github.io/papers/CommonInformation_EASIT.pdf"
      locator: "§1, original article printed pp. 163–165, reproduced in the EASIT 2021 notes: finite auxiliary W, conditional independence, and the minimum I(X,Y;W)."
---

## Definition

Let $(X,Y)$ have a joint probability vector $p_{XY}$ on finite nonempty alphabets $\mathcal X\times\mathcal Y$. Its **support bipartite graph** has left vertices $x$ with $p_X(x)>0$, right vertices $y$ with $p_Y(y)>0$, and an edge $x\!\text{--}\!y$ exactly when $p_{XY}(x,y)>0$. Let $\mathcal K$ be the finite nonempty set of connected components. Define $K_X(x)$ and $K_Y(y)$ to be the component containing the corresponding vertex when that vertex has positive marginal mass; assign any fixed component label to zero-mass symbols, which do not affect the law of the random labels. Along every support edge the two labels agree, so define the finite random variable $K:=K_X(X)=K_Y(Y)$ almost surely. If $f(X)=g(Y)$ almost surely for any other finite-valued deterministic common output, then $f(x)=g(y)$ along every support edge; equality propagates along graph paths, so both functions are constant on each component and the common output is a function of $K$. Thus $K$ is the maximal deterministic common part up to relabeling. Its finite entropy $H(K)$ is the deterministic Gács–Körner common information, using [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]].

A finite auxiliary random variable $U$ is **Wyner-admissible** for $p_{XY}$ when a joint law $p_{XYU}$ has $(X,Y)$-marginal $p_{XY}$ and, for every $u$ with $p_U(u)>0$,
$$p_{XY\mid U=u}(x,y)=p_{X\mid U=u}(x)p_{Y\mid U=u}(y).$$
The finite-alphabet **Wyner common information** is
$$C_W(X;Y):=\inf_{U\text{ finite, Wyner-admissible}} I((X,Y);U),$$
where mutual information and natural-log units are as in [[def-it-finite-mutual-information]] and [[def-it-information-units-and-logarithm-base]]. The Gács–Körner object is a deterministic common output of both terminals; Wyner's quantity optimizes mutual information over an auxiliary variable that makes the terminals conditionally independent. They are distinct definitions. This page does not identify them or use either as a Slepian–Wolf rate coordinate.

The admissible class is nonempty: $U=(X,Y)$ is finite and makes each positive-mass conditional joint law a product of point masses. Hence the infimum is over a nonempty set of finite real mutual informations.
