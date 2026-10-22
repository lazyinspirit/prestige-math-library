---
id: def-qftx-p-phi-two-construction-contract
kind: definition
title: Stable $P(φ)_2$ construction contract
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 5
domain: mathematics
library: mathematics
physical_scope: null
deps:
  - cor-exponential-reciprocal-and-positivity
  - def-axiom-of-choice
  - def-countable-choice
  - def-qftx-euclidean-limit-data
  - def-real-exponential-function-and-e
  - def-measure-with-density
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - prop-qftx-reflection-positivity-limit
  - thm-qftx-two-dimensional-wick-l2
dependency_roles:
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-qftx-euclidean-limit-data: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  def-measure-with-density: mathematical-premise
  thm-indefinite-integral-of-a-nonnegative-function-is-a-measure: mathematical-premise
  prop-qftx-reflection-positivity-limit: mathematical-premise
  thm-qftx-two-dimensional-wick-l2: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Stephen J. Summers, A Perspective on Constructive Quantum Field Theory, §3.1"
      url: "https://arxiv.org/pdf/1203.3991"
      locator: "PDF pp. 10–12: finite-volume P(φ)₂ tilts, the need for exponential integrability, and the distinct small-coupling qualifications of cluster-expansion results. This item specifies a contract and does not import those proofs."
    - title: "Barry Simon, The P(φ)₂ Euclidean (Quantum) Field Theory, Chapter I, §1.1 (publisher preview)"
      url: "https://api.pageplace.de/preview/DT0400.9781400868759_A26063613/preview-9781400868759_A26063613.pdf"
      locator: "PDF pp. 24–33, printed pp. 4–13: Gaussian fields and measure-dependent Wick powers. The stronger interaction construction obligations are stated explicitly here."
---

## Definition

Assume the Axiom of Choice and its countable-family consequence, fix $m>0$, and let $P(s)=\sum_{j=0}^{2k}a_js^j$ be a real polynomial of even degree $2k\ge2$ with $a_{2k}>0$. Let $\Phi_\epsilon$, $W_{\epsilon,j}$, and their real $L^2(\mu_C)$ limits $W_j$ for real smearings be as in the earlier cutoff definition and Wick-limit theorem. Here $\epsilon$ is the smoothing cutoff, and $\Lambda$ is a bounded Lebesgue-measurable set with finite Lebesgue area $|\Lambda|$. An exhaustion $\Lambda\nearrow\mathbb R^2$ means a directed family of such sets whose union is $\mathbb R^2$ and such that every compact subset of $\mathbb R^2$ is contained in some member. Define $U_{\Lambda,\epsilon}=a_0|\Lambda|+\sum_{j=1}^{2k}a_jW_{\epsilon,j}(\mathbf1_\Lambda)$ and $U_\Lambda=a_0|\Lambda|+\sum_{j=1}^{2k}a_jW_j(\mathbf1_\Lambda)$; $\mathbf1_\Lambda$ is bounded and compactly supported, so the Wick-limit theorem applies. For coupling $\lambda\ge0$, put $X_{\Lambda,\epsilon}=\exp(-\lambda U_{\Lambda,\epsilon})$, $X_\Lambda=\exp(-\lambda U_\Lambda)$ and define the extended nonnegative normalization $Z_\Lambda=\mathbb E_{\mu_C}X_\Lambda\in[0,+\infty]$. Only if $0<Z_\Lambda<\infty$ does the formula $d\mu_{\Lambda,\lambda}=Z_\Lambda^{-1}X_\Lambda\,d\mu_C$ define a normalized probability measure.

A construction contract for a specified polynomial, mass, coupling regime, region class, and ultraviolet/infinite-volume cutoff family is complete only after a proof establishes all of the following: (i) each $X_{\Lambda,\epsilon}$ is integrable and the family is uniformly integrable, meaning $\lim_{R\to\infty}\sup_{0<\epsilon\le1}\mathbb E_{\mu_C}[X_{\Lambda,\epsilon}\mathbf1_{\{X_{\Lambda,\epsilon}>R\}}]=0$; (ii) the cutoff normalizations converge to a strictly positive finite $Z_\Lambda$ and, for every stated polynomial/test insertion $F$, the integrals $\mathbb E_{\mu_C}[F X_{\Lambda,\epsilon}]$ converge with the bounds needed to normalize them; and (iii) as $\Lambda$ exhausts $\mathbb R^2$, the Schwinger hierarchy exists as tempered distributions, is Euclidean-invariant, permutation-symmetric, reflection-positive in the exact sense given by the earlier Euclidean-limit data, and has the required clustering and explicit per-order and uniform-order growth estimates. Any later reconstruction claim must name its precise theorem and prove that theorem's exact regularity and growth hypotheses; this contract does not identify the separately defined uniform-order bound with any reconstruction theorem's growth hypothesis. This contract asserts none of these interaction or infinite-volume conclusions. In particular, $L^2$ convergence of $U_{\Lambda,\epsilon}$ alone is not an exponential-integrability estimate.

## Definition references

[[def-qftx-two-dimensional-wick-cutoff]]

[[thm-qftx-two-dimensional-wick-l2]]

[[def-qftx-euclidean-limit-data]]

[[prop-qftx-reflection-positivity-limit]]

[[def-qft-finite-euclidean-interacting-measure]]

## Remarks

Summers reports infinite-volume $P(\phi)_2$ constructions through weak-coupling cluster expansions and, for a large class of interactions, through correlation inequalities. Those are source-reported existence results, not proofs supplied by this contract; a future theorem must state the exact polynomial class, boundary/volume procedure, and coupling assumptions it uses. The finite-dimensional tilted measure on the earlier page supplies no continuum field measure or cutoff-removal conclusion.
