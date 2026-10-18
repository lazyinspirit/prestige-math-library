---
id: def-na-hcurl-space
kind: definition
title: The real H(curl) graph space on a polyhedron
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-l-p-space-as-a-quotient-by-null-functions, def-weak-derivative-of-a-locally-integrable-function, def-divergence-and-curl-of-a-c1-vector-field, def-test-function-space-d-of-an-open-set, def-test-function-topology, lem-test-function-lf-topology-universal-property, thm-locally-integrable-functions-embed-in-distributions, def-countable-choice, lem-l-two-with-the-integral-pairing-is-a-hilbert-space]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Long Chen, Finite Element Methods for Maxwell Equations, complete lecture notes
      url: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf
    - title: "Douglas N. Arnold, Richard S. Falk, and Ragnar Winther, Finite element exterior calculus: from Hodge theory to numerical stability"
      url: https://sites.math.rutgers.edu/~falk/papers/bulletin-orig.pdf
verification:
  precheck: n/a
---

## Definition

Assume Countable Choice for weak-derivative uniqueness and the real $L^2$ product below, and let $\Omega\subset\mathbb R^3$ be open. Here $L^2(\Omega;\mathbb R^3)$ is the set of triples of real scalar $L^2$ classes from [[def-l-p-space-as-a-quotient-by-null-functions]]. Define
$$ (u,v)_{L^2(\Omega)}:=\sum_{j=1}^3\int_\Omega u_jv_j\,dx,\qquad \|u\|_{L^2(\Omega)}^2:=\sum_{j=1}^3\|u_j\|_{L^2(\Omega)}^2. $$
Each scalar pairing is well-defined and induces its quotient norm by [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]; the finite sum is therefore a real inner product on the triple space with the displayed norm. A test field $\varphi\in C_c^\infty(\Omega;\mathbb R^3)$ means a triple of real-valued members of the test-function space $\mathcal D(\Omega)$ of [[def-test-function-space-d-of-an-open-set]]. Writing $\varphi=(\varphi_x,\varphi_y,\varphi_z)$, its classical curl is the coordinate expression of [[def-divergence-and-curl-of-a-c1-vector-field]],
$$\operatorname{curl}\varphi=(\partial_y\varphi_z-\partial_z\varphi_y,\partial_z\varphi_x-\partial_x\varphi_z,\partial_x\varphi_y-\partial_y\varphi_x).$$
For $u\in L^2(\Omega;\mathbb R^3)$, its distributional curl is the triple of scalar distributions whose action on a vector test field is the sum of the three component pairings, determined by
$$\langle \operatorname{curl}u,\varphi\rangle=\int_\Omega u\cdot\operatorname{curl}\varphi\,dx,\qquad \varphi\in C_c^\infty(\Omega;\mathbb R^3).$$
The integral is finite because $u$ and the smooth compactly supported field $\operatorname{curl}\varphi$ are componentwise in $L^2$ and scalar Cauchy–Schwarz applies. On tests supported in a fixed compact $K\Subset\Omega$, the same estimate gives $|\langle\operatorname{curl}u,\varphi\rangle|\le C_{u,K}\max_{|\alpha|\le1}\sup_K|D^\alpha\varphi|$ with a finite $C_{u,K}$. This proves continuity on each fixed-support test space; the LF universal property of [[lem-test-function-lf-topology-universal-property]], for the test topology of [[def-test-function-topology]], makes the pairing a vector distribution on $\Omega$.
If this vector distribution is represented by an $L^2(\Omega;\mathbb R^3)$ class, that class is unique almost everywhere componentwise by the injection of locally integrable functions into scalar distributions in [[thm-locally-integrable-functions-embed-in-distributions]], under the stated Countable Choice assumption.
Define
$$H(\operatorname{curl};\Omega)=\{u\in L^2(\Omega;\mathbb R^3):\operatorname{curl}u\text{ is represented by an element of }L^2(\Omega;\mathbb R^3)\}$$
with graph norm $\|u\|_{H(\operatorname{curl};\Omega)}^2=\|u\|_{L^2(\Omega)}^2+\|\operatorname{curl}u\|_{L^2(\Omega)}^2$. No boundary condition is imposed by this definition. Fields are real-valued; equality is equality of almost-everywhere classes.
