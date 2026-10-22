---
id: post-tgrx-semiclassical-ads-dictionary
kind: postulate
title: Restricted semiclassical entropy dictionary
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 4
deps:
  - def-tgrx-ads-regulated-generalized-entropy
  - prop-tgrx-code-area-entropy
  - def-tgr-regulated-generalized-entropy
  - pthm-tgrx-noether-first-law
dependency_roles:
  def-tgrx-ads-regulated-generalized-entropy: formulation-prerequisite
  prop-tgrx-code-area-entropy: formulation-prerequisite
  def-tgr-regulated-generalized-entropy: formulation-prerequisite
  pthm-tgrx-noether-first-law: formulation-prerequisite
justified_by: []
aliases: []
forward_refs: []
physical_scope: >
  An adopted entropy dictionary for one asymptotically locally AdS effective
  bulk model, one boundary state family supported on a finite-dimensional
  regulated code subspace, one boundary region and homology class, and one
  fixed regulator and renormalization scheme. It asserts no candidate
  existence, finite renormalized value, saddle dominance, universal
  boundary-to-bulk duality, or empirical validity.
empirical_premises: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Daniel Harlow, Jerusalem Lectures on Black Holes and Quantum Information, §§6.2.3 and 6.10"
      url: "https://arxiv.org/html/1409.1231"
      locator: "Full-text lecture notes; §6.2.3 on the AdS/CFT dictionary and its semiclassical regime; §6.10, equations (195)–(196), on the leading-order RT/HRT proposal, anchoring, homology, and least-area selection."
    - title: "Ahmed Almheiri, Thomas Hartman, Juan Maldacena, Edgar Shaghoulian, and Amirhossein Tajdini, The entropy of Hawking radiation, §§6, 8, 10, and 11.2"
      url: "https://arxiv.org/html/2006.06872"
      locator: "Full-text review; §6, equation (6.2), for extremization followed by minimization of generalized entropy; §8, equation (8.2), for islands; §10, equation (10.4), for replica continuation; §11.2 for unresolved path-integral saddle, contour, cutoff, and exact-state limits."
---

## Postulate

Fix an effective bulk model on a smooth Lorentzian spacetime $(M,g)$ of dimension $d+1$, with $d\ge2$ and signature $(-,+,\ldots,+)$, together with a time orientation, meaning a continuous choice of one component of the timelike cone at each point. Here AdS means anti-de Sitter. In this item, **asymptotically locally AdS** means that $M$ is the interior of a smooth manifold with boundary $\overline M$; write $\mathscr I:=\partial\overline M$. There is a dimensionless smooth defining function $z$ with $z>0$ on $M$, $z=0$ and $dz\ne0$ on $\mathscr I$, such that $\overline g=z^2g$ extends smoothly to a nondegenerate Lorentzian metric of the same signature on $\overline M$ whose induced boundary metric $\gamma:=\overline g|_{T\mathscr I}$ is Lorentzian. The chosen time orientation extends continuously to $(\overline M,\overline g)$ and induces one on $(\mathscr I,\gamma)$. The model fixes its AdS length $L>0$ in metres, the asymptotic AdS boundary condition, bulk fields, semiclassical approximation, and conformal-boundary data; **semiclassical** here means that the bulk geometry is treated classically while the bulk entropy is computed from regulated quantum-state data on that geometry. No bulk field equation is inferred here.

Choose a smooth embedded hypersurface $\mathcal C_{\partial}\subset\mathscr I$ whose induced metric is positive definite and which meets every inextendible future-directed boundary causal curve at exactly one parameter value. A causal curve in $(\overline M,\overline g)$ or $(\mathscr I,\gamma)$ is a locally Lipschitz map from a real interval with a nonzero future-directed tangent almost everywhere and nonpositive squared tangent norm. Inextendibility is tested after an order-preserving locally bi-Lipschitz reparameterization $h:J\to J_0$: a curve $\eta:J\to M_0$ is inextendible exactly when there are no such $h$, larger interval $\widetilde J\supsetneq J_0$, and causal curve $\widetilde\eta:\widetilde J\to M_0$ with $\widetilde\eta\circ h=\eta$, where $M_0$ is the bulk or boundary spacetime in question. Each bulk candidate slice $\Sigma_X$ is a smooth embedded $d$-dimensional hypersurface in $(\overline M,\overline g)$ with positive-definite induced metric and $\partial\Sigma_X=\mathcal C_{\partial}$, and every inextendible causal curve in $\overline M$ meets it at exactly one parameter value. This is a boundary-inclusive convention: curves may meet or run along $\mathscr I$. The existence of these slices is supplied model data; no interior-only Cauchy existence is inferred. Choose a relatively compact open region $A\subset\mathcal C_{\partial}$ (its closure is compact) with smooth boundary $\partial A$. The regulated boundary Hilbert space and its finite-dimensional subspace $\mathcal C_{\rm code}$ are model data; **regulated code subspace** means this specified finite-dimensional subspace, and every boundary density matrix in the chosen state family is supported on it. A boundary density matrix $\rho_{\partial}$ is a positive trace-class endomorphism of trace one on the regulated boundary Hilbert space, with range in $\mathcal C_{\rm code}$. For such a matrix $\rho_{\partial}$, define its exact finite-cutoff entropy by $S_{\rm exact}(\rho_{\partial}):=-k_B\operatorname{tr}(\rho_{\partial}\log\rho_{\partial})$, using natural logarithms and $0\log0:=0$. An admissible bulk candidate $X$ is a smooth embedded spacelike $(d-1)$-dimensional submanifold with boundary of $\overline M$, with $X\cap\mathscr I=\partial X=\partial A$, $X\setminus\partial X\subset M$, and $X\subseteq\Sigma_X$; its induced metric is positive definite and its supplied region $R_X\subseteq\Sigma_X$ and chains satisfy $[x]=[a_X]$ in the ambient locally finite mod-two relative homology group defined by the candidate-surface model. A **quantum-stationary candidate** (also called a quantum extremal surface) is an admissible $X$ at which the first variation of the scheme-fixed generalized entropy exists and vanishes for every family $F$ specified in the preceding candidate-surface definition: $F$ is jointly smooth, each $F_\epsilon$ is an admissible embedding with the same anchor and memberwise relative-chain homology condition, and its initial velocity $V$ satisfies $g(V,w)=0$ for every interior tangent vector $w\in TX$ and extends smoothly by zero at the anchor. Let $\mathcal Q_A$ be the prescribed class of such candidates for the chosen boundary state. Use SI units: $k_B$ is in $\mathrm{J\,K^{-1}}$, $c$ is in $\mathrm{m\,s^{-1}}$, and $\hbar$ is in $\mathrm{J\,s}$. Write $G_{\Lambda_n}>0$ for the model-supplied Newton coupling at regulator label $\Lambda_n$, in $\mathrm{m^d\,kg^{-1}\,s^{-2}}$ for this $(d+1)$-dimensional bulk. When the chosen Einstein–Hilbert branch uses the area term, use the same label-dependent physical-metric area $\operatorname{Area}_{\Lambda_n}[X]=\int_{X^\circ}\chi_{\Lambda_n,X}\,d\operatorname{vol}_{g|_{TX^\circ}}$ defined by the candidate-surface model, with its explicit Countable Choice integration premise and its fixed finite cutoff data. This term is $k_Bc^3\operatorname{Area}_{\Lambda_n}[X]/(4G_{\Lambda_n}\hbar)$, and all additional finite terms remain in the prescribed $S_{\mathrm{other},n}$. The cutoff area is in $\mathrm{m^{d-1}}$, so $[c^3\operatorname{Area}_{\Lambda_n}[X]]=\mathrm{m^{d+2}\,s^{-3}}=[G_{\Lambda_n}\hbar]$ and the factor multiplying $k_B$ is dimensionless. The metric, Borel cutoff, label dependence and subtraction convention are thus fixed before the combined renormalized limit is tested; an unregulated area at the conformal boundary is not asserted finite. For $d=3$ these are the usual four-dimensional SI units. Adopt

$$S_{\partial}^{\rm model}(A):=\min_{X\in\mathcal Q_A}S_{\rm gen}^{\rm ren}[X]$$

as the model's semiclassical boundary-entropy prediction only when $\mathcal Q_A$ is nonempty, the values are finite, and the minimum is attained. It does not identify this prediction with $S_{\rm exact}(\rho_{\partial})$. A **path-integral saddle** here is a stationary configuration of the chosen gravitational action; **saddle dominance** means that its contribution controls the specified path-integral approximation over competing configurations. Candidate existence, finite convergence, and dominance of the selected saddle are separate premises. The minimum rule is an adopted physical premise, not a consequence of the finite code entropy identity or the stationary Noether first law. It does not assert that the model describes nature, a universal RT/QES identity, or a continuum factorization of quantum fields.

## Postulate references

[[prop-tgrx-code-area-entropy]]

[[def-tgrx-ads-regulated-generalized-entropy]]

[[def-tgr-regulated-generalized-entropy]]

[[pthm-tgrx-noether-first-law]]

[Daniel Harlow, *Jerusalem Lectures on Black Holes and Quantum Information*](https://arxiv.org/html/1409.1231)

[Ahmed Almheiri et al., *The entropy of Hawking radiation*](https://arxiv.org/html/2006.06872)

## Remarks

The finite-sector entropy proposition supplies an exact finite matrix identity in nats; multiplying by $k_B$ converts that entropy convention to physical units, but it does not identify a sector term with geometric area. The Noether first-law supplier gives an Einstein–Hilbert area coefficient only under its stationary hypotheses. Neither result derives this adopted dictionary for a general asymptotically AdS model.
