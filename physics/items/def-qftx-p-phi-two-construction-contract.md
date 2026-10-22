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

Assume the Axiom of Choice and its countable-family consequence, fix $m>0$, and let $P(s)=\sum_{j=0}^{2k}a_js^j$ be a real polynomial of even degree $2k\ge2$ with $a_{2k}>0$. Let $\Phi_\epsilon$, $W_{\epsilon,j}$, and their real $L^2(\mu_C)$ limits $W_j$ for real smearings be as defined in the earlier “Mollified massive two-dimensional Gaussian Wick powers” definition and “Smeared Wick powers have a two-dimensional $L^2$ limit” theorem. Here $\epsilon>0$ is the smoothing cutoff, and each $W_j(f)$ is an equivalence class of measurable real random variables modulo $\mu_C$-almost-everywhere equality. Applying any continuous real-valued function to a representative gives the same equivalence class for every representative.

A region $\Lambda\subseteq\mathbb R^2$ is bounded and Lebesgue-measurable, with area $|\Lambda|<\infty$. An exhaustion $\Lambda_i\nearrow\mathbb R^2$ is a family $(\Lambda_i)_{i\in I}$ of such regions indexed by a nonempty directed partially ordered set $(I,\preceq)$, where $i\preceq j$ implies $\Lambda_i\subseteq\Lambda_j$, $\bigcup_{i\in I}\Lambda_i=\mathbb R^2$, and every compact subset of $\mathbb R^2$ is contained in some $\Lambda_i$. For each bounded region $\Lambda$, define

$$U_{\Lambda,\epsilon}=a_0|\Lambda|+\sum_{j=1}^{2k}a_jW_{\epsilon,j}(\mathbf1_\Lambda),\qquad U_\Lambda=a_0|\Lambda|+\sum_{j=1}^{2k}a_jW_j(\mathbf1_\Lambda).$$

The indicator $\mathbf1_\Lambda$ is bounded and compactly supported, so the earlier Wick-limit theorem applies. For coupling $\lambda\ge0$, set $X_{\Lambda,\epsilon}=\exp(-\lambda U_{\Lambda,\epsilon})$ and $X_\Lambda=\exp(-\lambda U_\Lambda)$, and define

$$Z_{\Lambda,\epsilon}:=\mathbb E_{\mu_C}[X_{\Lambda,\epsilon}]\in[0,+\infty],\qquad Z_\Lambda:=\mathbb E_{\mu_C}[X_\Lambda]\in[0,+\infty].$$

Only if $0<Z_\Lambda<\infty$ does $d\mu_{\Lambda,\lambda}=Z_\Lambda^{-1}X_\Lambda\,d\mu_C$ define a normalized probability measure. Each instance of this contract also specifies an insertion family $\mathcal I_\Lambda$ of measurable complex random variables on the Gaussian probability space.

A construction contract for a specified polynomial, mass, coupling regime, region family, ultraviolet cutoff family, and insertion family is complete only after a proof establishes all of the following: (i) for each stated $\Lambda$, every $X_{\Lambda,\epsilon}$ is integrable and the family indexed by $0<\epsilon\le1$ is uniformly integrable, meaning $\lim_{R\to\infty}\sup_{0<\epsilon\le1}\mathbb E_{\mu_C}[X_{\Lambda,\epsilon}\mathbf1_{\{X_{\Lambda,\epsilon}>R\}}]=0$; (ii) $Z_{\Lambda,\epsilon}\to Z_\Lambda$ as $\epsilon\downarrow0$ with $0<Z_\Lambda<\infty$, and for every $F\in\mathcal I_\Lambda$ the product $F X_{\Lambda,\epsilon}$ is integrable and its expectation converges to a finite limit, with explicit domination or tail bounds sufficient for that passage. Any normalized insertion is then $Z_\Lambda^{-1}\lim_{\epsilon\downarrow0}\mathbb E_{\mu_C}[F X_{\Lambda,\epsilon}]$.

(iii) Along the stated exhaustion, a regulated Schwinger hierarchy $S^i=(S_n^i)_{n\ge0}$ and a limit hierarchy $S=(S_n)_{n\ge0}$ are constructed with $S_0^i=S_0=1$, $S_n^i,S_n\in\mathcal S((\mathbb R^2)^n)'$ for $n\ge1$, and $\langle S_n^i,\Psi\rangle\to\langle S_n,\Psi\rangle$ for every fixed $n$ and $\Psi\in\mathcal S((\mathbb R^2)^n)$. The limit hierarchy is Euclidean-invariant, permutation-symmetric, reflection-positive, satisfies clustering, and has the per-order and uniform-order bounds specified below. These property names have the exact meanings of the earlier “Euclidean Schwinger hierarchies and controlled limit data” definition: reflection positivity is $\omega_S(\Theta a\,a)\ge0$ on its positive-time algebra; Euclidean invariance is under Euclidean isometries and permutation symmetry is invariance under permutations of argument blocks; clustering is the factorization limit $\langle S_{n+m},f\otimes\tau_{ae_0}g\rangle\to\langle S_n,f\rangle\langle S_m,g\rangle$ for $n,m\ge1$ and Schwartz block tests $f,g$, as $a\to+\infty$. The per-order bounds mean that for each fixed $n$ there are $r_n\in\mathbb N_0$ and $C_n\ge0$, independent of the regulator $i$, with $|\langle S_n^i,\Psi\rangle|\le C_nP_{r_n}(\Psi)$ for all $i$ and tests $\Psi$. The separate uniform-order bound is $|\langle S_n,\Psi\rangle|\le A B^n(n!)^qP_{sn}(\Psi)$ for some fixed $s\in\mathbb N$ and $A,B,q>0$, all $n\ge1$, and all such $\Psi$, using the seminorms of that earlier definition. This uniform-order bound is not identified with any reconstruction theorem's growth hypothesis. Any later reconstruction claim must name its exact theorem and prove that theorem's regularity and growth hypotheses. This contract asserts none of the interaction or infinite-volume conclusions above. In particular, $L^2$ convergence of $U_{\Lambda,\epsilon}$ alone is not an exponential-integrability estimate.
## Definition references

[[def-qftx-two-dimensional-wick-cutoff]]

[[thm-qftx-two-dimensional-wick-l2]]

[[def-qftx-euclidean-limit-data]]

[[prop-qftx-reflection-positivity-limit]]

[[def-qft-finite-euclidean-interacting-measure]]

## Remarks

Summers reports infinite-volume $P(\phi)_2$ constructions through weak-coupling cluster expansions and, for a large class of interactions, through correlation inequalities. Those are source-reported existence results, not proofs supplied by this contract; a future theorem must state the exact polynomial class, boundary/volume procedure, and coupling assumptions it uses. The finite-dimensional tilted measure on the earlier page supplies no continuum field measure or cutoff-removal conclusion.
