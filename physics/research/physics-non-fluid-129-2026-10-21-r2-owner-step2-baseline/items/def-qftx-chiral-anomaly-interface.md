---
id: def-qftx-chiral-anomaly-interface
kind: definition
title: Four-dimensional chiral anomaly coefficient interface
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 10
deps:
  - prop-qftx-anomaly-obstruction
justified_by: []
dependency_roles:
  prop-qftx-anomaly-obstruction: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Adel Bilal, Lectures on Anomalies
      url: https://arxiv.org/pdf/0802.0634
      locator: §7.1, equations (7.1)–(7.9); §9.1–9.2, equations (9.2)–(9.15); and §11.3.2, equations (11.29)–(11.31); chiral trace coefficients, Wess–Zumino/BRST consistency, and the four-dimensional mixed gauge-gravitational term.
    - title: Glenn Barnich, Friedemann Brandt and Marc Henneaux, Local BRST cohomology in gauge theories
      url: https://arxiv.org/pdf/hep-th/0002245
      locator: §2.3 and §12.3, PDF pp. 9–10 and 119–120; local H^{1,n}(s|d) anomaly consistency classes and counterterm equivalence.
    - title: Jean Zinn-Justin, Chiral Anomalies and Topology
      url: https://arxiv.org/pdf/hep-th/0201220
      locator: §1, PDF pp. 2–3, on perturbative local anomalies and the separate existence of global nonperturbative anomalies; the notes explicitly limit their treatment to local anomalies.
---

## Definition

Fix a four-dimensional model with a finite-dimensional gauge Lie algebra $\mathfrak g$, a chosen basis $\{t^a\}$, and a finite family of left-handed Weyl matter fields indexed by $i$. A left-handed Weyl species here means a massless two-component spinor field whose gauge transformation is given by a finite-dimensional complex representation $\rho_i:\mathfrak g_{\mathbb C}\to\operatorname{End}(V_i)$ on a finite-dimensional complex vector space $V_i$. Write $T^a_{R_i}=\rho_i(t^a)$ for its generator matrices, and define the matrix anticommutator by $\{A,B\}=AB+BA$. The perturbative cubic gauge coefficient interface is
$$d^{abc}=\sum_i\operatorname{tr}_{V_i}\!\left(T^a_{R_i}\{T^b_{R_i},T^c_{R_i}\}\right).$$
The trace and generator normalization are fixed by the chosen model convention. In particular, no factor $1/2$ is included in the anticommutator. If symmetrization is defined by $T^{(b}T^{c)}=(T^bT^c+T^cT^b)/2$, then our $d^{abc}$ is exactly twice $\sum_i\operatorname{tr}_{V_i}(T^a_{R_i}T^{(b}_{R_i}T^{c)}_{R_i})$. Cancellation means vanishing in the same declared convention.

If the model is coupled to a background spacetime connection with curvature two-form $\mathcal R$, record mixed gauge-gravitational anomaly data separately from $d^{abc}$. For a gauge generator $t^a$, its representation trace coefficient is
$$\ell^a=\sum_i\operatorname{tr}_{V_i}(T^a_{R_i});$$
for a $U(1)$ factor whose generator acts on species $i$ by its charge $q_i$, this is $\ell=\sum_iq_i$. In the usual six-form index-polynomial description the mixed term is proportional, with convention-dependent constants, to $\ell^a F^a\wedge\operatorname{tr}(\mathcal R\wedge\mathcal R)$; the gauge-curvature and spacetime-curvature conventions must be stated when using it. This interface records the coefficient data and does not assert that a regulated Ward anomaly has this form.

A local consistent anomaly is an infinitesimal gauge variation of a regulated effective action whose local density obeys the gauge-algebra consistency condition. In the local BRST notation used here, its four-dimensional representative is a compactly supported local horizontal four-form $a_4$ of ghost number one in a specified $s,d_H$-stable subcomplex $\mathcal K^{r,p}$ of finite-jet local forms on $\mathbb R^4$. The relative class is
$$[a_4]_{s|d_H}\in H^{1,4}(s|d_H;\mathcal K):=\frac{\{a_4\in\mathcal K^{1,4}:s a_4+d_Ha_3=0\text{ for some }a_3\in\mathcal K^{2,3}\}}{\{s b_4+d_Hc_3:b_4\in\mathcal K^{0,4},\ c_3\in\mathcal K^{1,3}\}}.$$
Here $s$ is the odd nilpotent local BRST differential and $d_H$ is the horizontal exterior derivative on spacetime local forms. A descent class means the relative class of the ghost-number-one four-form obtained by descending a specified invariant six-form polynomial; the descent and its local hypotheses must be stated.

The available local Wess–Zumino obstruction interface is conditional. Its exact upstream statement assumes the Axiom of Choice and Countable Choice, an admissible flat scalar free datum and local scalar polynomial class under the scalar formal time-ordering result, and a time-ordering scheme satisfying that result. It further assumes an odd formal ghost-number-one Ward operator $\mathcal W_\hbar=s+O(\hbar)$ with $\mathcal W_\hbar^2=0$, a first breaking at formal order $n\ge1$ represented by a compactly supported local $a_4\in\mathcal K^{1,4}$, an $s,d_H$-stable subcomplex $\mathcal K$, and $\mathcal K^{0,4}$ equal to the admissible local counterterm densities. Under those hypotheses the upstream proposition states that $s a_4$ is $d_H$-exact and that a local counterterm cancels the order-$n$ breaking exactly when $[a_4]_{s|d_H}=0$. This is only a conditional local consistency result: it does not prove locality of a physical anomaly, a quantum action principle, or any identification between $d^{abc}$ and a descent representative.

Accordingly, an anomaly-cancellation claim using $d^{abc}$ must state the regulator and renormalization construction, prove the identification of its local consistent anomaly with the descent class of the declared coefficient tensor, specify the mixed gauge-gravitational coefficients separately, and state the loop-order hypotheses or all-orders theorem being used. A global anomaly is a possible failure under a gauge transformation outside the identity component of the full gauge-transformation group; it requires its own global group, bundle, and spacetime data and is not determined by the infinitesimal local tensor $d^{abc}$. Vanishing $d^{abc}$ alone is not defined here to establish a nonperturbative gauge theory or cancellation of global anomalies.

## Definition references

[[prop-qftx-anomaly-obstruction]]

