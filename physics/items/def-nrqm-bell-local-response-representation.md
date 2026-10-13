---
id: def-nrqm-bell-local-response-representation
aliases: [nrqm-bell-local-response-representation]
kind: definition
domain: mathematics
title: "Local-response representations of a binary correlation model: one setting-independent specification space and per-station response laws"
status: draft
origin: session
dependency_level: 1
deps: [def-nrqm-bell-binary-correlation-models, def-probability-measure, def-measure-space, def-measurable-function-between-measurable-spaces, def-expectation-of-a-nonnegative-or-integrable-random-variable, def-random-element-and-real-random-variable]
dependency_roles:
  def-nrqm-bell-binary-correlation-models: mathematical-premise
  def-probability-measure: mathematical-premise
  def-measure-space: mathematical-premise
  def-measurable-function-between-measurable-spaces: mathematical-premise
  def-expectation-of-a-nonnegative-or-integrable-random-variable: mathematical-premise
  def-random-element-and-real-random-variable: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "N. Brunner, D. Cavalcanti, S. Pironio, V. Scarani and S. Wehner, 'Bell nonlocality', Reviews of Modern Physics 86 (2014) 419, Section I.A, PDF page 3: the local decomposition p(ab|xy) = integral of q(lambda) p(a|x,lambda) p(b|y,lambda), its factorability reading and the assumption that the settings are chosen independently of lambda"
      url: "https://arxiv.org/pdf/1303.2849"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 6.1.4, printed pages 113-115 (PDF pages 121-123): response functions of the two stations on a common hidden-variable space and the expectation values they define"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: n/a
---

## Definition

Let $\mu$ be a binary correlation model on the finite setting sets $I,J$ with
outcome labels $\Sigma=\{-1,+1\}$
([[def-nrqm-bell-binary-correlation-models]]). No choice principle is used in
this definition.

**(a) Local-response representation.** A **local-response representation** of
$\mu$ is a tuple consisting of a probability space $(\Lambda,\Sigma_{\Lambda},
\mathbb P)$ ([[def-measure-space]], [[def-probability-measure]]) and two
families of **response laws**
$$(\alpha_{i})_{i\in I},\qquad (\beta_{j})_{j\in J},$$
where for each $i\in I$ the function
$\alpha_{i}:\Lambda\times\Sigma\to[0,1]$ has the two properties
$$\sum_{\varepsilon\in\Sigma}\alpha_{i}(\lambda,\varepsilon)=1\quad(\lambda\in\Lambda), \qquad \lambda\mapsto\alpha_{i}(\lambda,+1)\ \text{is measurable}$$
([[def-measurable-function-between-measurable-spaces]]), and the family
$(\beta_{j})_{j\in J}$ has the same two properties; and the **representation
identity**
$$\mu_{ij}(\varepsilon,\delta) =\int_{\Lambda}\alpha_{i}(\lambda,\varepsilon)\,\beta_{j}(\lambda,\delta)\, d\mathbb P(\lambda) =\mathbb E_{\mathbb P}\!\left[\alpha_{i}(\cdot,\varepsilon)\, \beta_{j}(\cdot,\delta)\right]$$
holds for every $(i,j)\in I\times J$ and every
$(\varepsilon,\delta)\in\Sigma\times\Sigma$. The integrand is a product of two
bounded measurable $[0,1]$-valued functions, so the expectation exists as a
finite number ([[def-expectation-of-a-nonnegative-or-integrable-random-variable]],
[[def-random-element-and-real-random-variable]]). The functions
$\alpha_{i}(\cdot,-1)=1-\alpha_{i}(\cdot,+1)$ and likewise for $\beta_{j}$ are
measurable as well. The variable $\lambda$ is called the **specification**
of the representation; it is a mathematical index, and no physical
interpretation is asserted.

**(b) Response functions (deterministic form).** Equip the finite outcome set
$\Sigma=\{-1,+1\}$ with its discrete $\sigma$-algebra $\mathcal P(\Sigma)$.
A local-response representation **has response functions** when there are
measurable maps
$a_{i}:(\Lambda,\Sigma_{\Lambda})\to(\Sigma,\mathcal P(\Sigma))$ $(i\in I)$
and $b_{j}:(\Lambda,\Sigma_{\Lambda})\to(\Sigma,\mathcal P(\Sigma))$
$(j\in J)$ with
$$\alpha_{i}(\lambda,\varepsilon)=\mathbf 1_{\{a_{i}=\varepsilon\}}(\lambda), \qquad \beta_{j}(\lambda,\delta)=\mathbf 1_{\{b_{j}=\delta\}}(\lambda),$$
in which case the representation identity reads
$$\mu_{ij}(\varepsilon,\delta) =\mathbb P\bigl(\{a_{i}=\varepsilon\}\cap\{b_{j}=\delta\}\bigr).$$
The deterministic form is a special case of clause (a): it is obtained by
setting the response laws to the Dirac laws at $a_{i}(\lambda)$ and
$b_{j}(\lambda)$. In this form one and the same specification space and the
same single-station functions $a_{i}$ and $b_{j}$ serve every setting
pair, and the response of a station depends on the specification and on that
station's own setting only.

**(c) Terminology.** The two mathematical features named by **local response**
are: (i) a single specification space carrying the probability law used for
every setting pair (setting-independence), and (ii) per-station response laws
that do not depend on the distant station's setting. A model that admits such
a representation is also called a **local model** of the tables in the
literature; the representation is an existence statement about the tables and
asserts no determinism, no mechanism, no dynamics and no causal relation. In
particular clause (a) permits probabilistic responses and does not require
the response functions of clause (b).

**(d) Status.** Clauses (a)-(c) fix vocabulary. They assert no physical
assumption and no property of any laboratory arrangement; whether a declared
physical model of a comparison admits a representation of this form is a
mathematical question about its tables, and the physical reading of that
question is fixed on the page of this pair.
