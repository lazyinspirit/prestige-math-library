---
id: thm-deligne-weight-bound-for-compactly-supported-cohomology
kind: theorem
title: "Deligne weight bound for compactly supported cohomology"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps:
  - def-lisse-l-adic-sheaf-on-a-scheme
  - def-pointwise-purity-and-weights-of-an-l-adic-sheaf
  - def-compactly-supported-etale-cohomology
  - thm-finiteness-of-compactly-supported-etale-cohomology
  - thm-poincare-duality-and-degree-zero-two-on-smooth-curves
justified_by: []
provenance:
  statement: ai-altered
  proof: not-supplied
sources:
  references:
    - title: "Pierre Deligne, La conjecture de Weil: II"
      url: https://www.numdam.org/item/PMIHES_1980__52__137_0.pdf
      locator: Theorem (3.3.1), printed pp. 204–205, complete statement and proof
    - title: "Kiran S. Kedlaya, Weil Cohomology in Practice"
      url: https://kskedlaya.org/weil-cohom/chapter-16.html
      locator: Theorem 16.1.14 and Remark 16.1.15, curve case and proper duality consequence
    - title: "J. S. Milne, Lectures on Étale Cohomology"
      url: https://jmilne.org/math/CourseNotes/LEC.pdf
      locator: Chapter I §24, Theorem 24.1, Poincaré duality for locally constant coefficients
verification:
  precheck: pending
---

## Statement

Let $q$ be a prime power, let $\ell$ be a prime not dividing $q$, and fix an embedding $\iota:\overline{\mathbb Q}_\ell\hookrightarrow\mathbb C$. Let $X$ be a separated finite-type scheme over $\mathbb F_q$, and let $\mathcal F$ be a constructible $\overline{\mathbb Q}_\ell$-sheaf, meaning that it is lisse on each stratum of a finite locally closed stratification, and is $\iota$-mixed of weights at most $w$: it admits a finite filtration by constructible subsheaves with nonzero successive quotients pointwise $\iota$-pure of fixed real weights at most $w$. Consequently, for every closed point $x$ of degree $d$, every eigenvalue $\alpha$ of inverse arithmetic Frobenius on $\mathcal F_{\bar x}$ satisfies $|\iota(\alpha)|\le q^{dw/2}$. Then every eigenvalue $\beta$ of geometric Frobenius, the inverse of arithmetic Frobenius, on compactly supported étale cohomology $H_c^i(X_{\overline{\mathbb F}_q},\mathcal F)$ satisfies $|\iota(\beta)|\le q^{(w+i)/2}$ for every integer $i$. If $X$ is smooth and proper over $\mathbb F_q$ and $\mathcal F$ is lisse and pointwise pure of weight $w$, meaning equality $|\iota(\alpha)|=q^{dw/2}$ at every closed stalk eigenvalue, then every eigenvalue on ordinary étale cohomology $H^i(X_{\overline{\mathbb F}_q},\mathcal F)$ has absolute value $q^{(w+i)/2}$ under $\iota$.

## Statement references

[[def-pointwise-purity-and-weights-of-an-l-adic-sheaf]]

[[def-compactly-supported-etale-cohomology]]

[Deligne, *La conjecture de Weil: II*, Theorem (3.3.1)](https://www.numdam.org/item/PMIHES_1980__52__137_0.pdf)

[Kedlaya, *Weil Cohomology in Practice*, Theorem 16.1.14](https://kskedlaya.org/weil-cohom/chapter-16.html)

[Milne, *Lectures on Étale Cohomology*, Chapter I §24](https://jmilne.org/math/CourseNotes/LEC.pdf)


## Proof obligations

No complete local Weil II proof is supplied. The current source Theorem3.3.1 (printed pp204-205), Corollaries3.3.4-3.3.6 and real-$\iota$ variant3.3.10 use genuine finite-filtration $\iota$-mixedness. The broader native assertion with only the weaker closed-stalk eigenvalue upper bound remains held; it requires an actual mixedness/weight-bound bridge, in addition to the monodromy-weight1.8.4, relative-curve3.2.3, hyperplane-pencil/vanishing-cycle, compact-support, finiteness and general-dimension duality arguments. Curve-only duality does not by itself prove the smooth proper clause in every dimension. All of these local established-proof obligations remain held; no analytic, cohomological or Weil II theorem is an authorized input in this run.
