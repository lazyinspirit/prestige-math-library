---
id: def-nrqm-bell-binary-correlation-models
aliases: [nrqm-bell-binary-correlation-models]
kind: definition
domain: mathematics
title: "Binary correlation models: setting-indexed tables of two-valued outcome laws, marginals and the CHSH functional"
status: draft
origin: session
dependency_level: 0
deps: [def-finite-probability-space-and-event, def-finite-sum]
dependency_roles:
  def-finite-probability-space-and-event: mathematical-premise
  def-finite-sum: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "N. Brunner, D. Cavalcanti, S. Pironio, V. Scarani and S. Wehner, 'Bell nonlocality', Reviews of Modern Physics 86 (2014) 419, Section II.A, PDF pages 2-3: the two-station measurement scenario, the joint table p(ab|xy), its marginals and the independence of a marginal from the distant setting"
      url: "https://arxiv.org/pdf/1303.2849"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 6.1.4, printed pages 111-115 (PDF pages 119-123): the four pairwise outcome laws of a two-station spin comparison and the expectation values built from them"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: n/a
---

## Definition

This item fixes finite combinatorial vocabulary for outcome laws of a
two-station comparison. No physical interpretation, measurement model,
dynamics or locality assertion is made here; the physical readings are fixed
on the page of this pair. No choice principle is used.

**(a) Binary correlation model.** Let $I$ and $J$ be finite nonempty sets, the
**setting labels** of the two stations, and put
$\Sigma:=\{-1,+1\}$ for the common **outcome labels**. A **binary correlation
model** on $(I,J)$ is a family
$$\mu=(\mu_{ij})_{(i,j)\in I\times J},\qquad \mu_{ij}:\Sigma\times\Sigma\to[0,1],$$
of functions with the normalization
$$\sum_{\varepsilon\in\Sigma}\sum_{\delta\in\Sigma}\mu_{ij}(\varepsilon,\delta)=1 \qquad\text{for every }(i,j)\in I\times J$$
([[def-finite-sum]]). Each $\mu_{ij}$ is the **joint law** of the setting pair
$(i,j)$: it is the outcome-weight function of a finite probability space on
the four outcomes $\Sigma\times\Sigma$ in the sense of
[[def-finite-probability-space-and-event]], and sums over $\Sigma\times\Sigma$
are finite sums.

**(b) Marginals.** For $(i,j)\in I\times J$ the **marginal law of the first
station** and the **marginal law of the second station** are
$$\mu^{A}_{ij}(\varepsilon):=\sum_{\delta\in\Sigma}\mu_{ij}(\varepsilon,\delta), \qquad \mu^{B}_{ij}(\delta):=\sum_{\varepsilon\in\Sigma}\mu_{ij}(\varepsilon,\delta), \qquad \varepsilon,\delta\in\Sigma .$$

**(c) No-signalling.** The model $\mu$ is **no-signalling** when the marginal
law of the first station does not depend on the distant setting,
$\mu^{A}_{ij}=\mu^{A}_{ij'}$ for all $i\in I$ and all $j,j'\in J$, and the
marginal law of the second station does not depend on the distant setting,
$\mu^{B}_{ij}=\mu^{B}_{i'j}$ for all $j\in J$ and all $i,i'\in I$. The word is
used as a name for this pair of identities about the tables; no spatial or
causal claim is attached to it.

**(d) Correlations and the CHSH functional.** Assume $I=J=\{0,1\}$. The
**correlation** of the setting pair $(i,j)$ and the **CHSH functional** of the
model are the real numbers
$$E_{ij}(\mu):=\sum_{\varepsilon\in\Sigma}\sum_{\delta\in\Sigma} \varepsilon\,\delta\,\mu_{ij}(\varepsilon,\delta), \qquad S(\mu):=E_{00}(\mu)+E_{01}(\mu)+E_{10}(\mu)-E_{11}(\mu).$$

**(e) Status.** Clauses (a)-(d) introduce finite tables, their marginals, the
no-signalling identities and one linear functional of four correlations. They
assert no physical assumption, no dynamics, no measurement, no probability law
for a real apparatus and no statement about nature; the identification of a
laboratory arrangement with a model $\mu$ is a separate physical matter.
