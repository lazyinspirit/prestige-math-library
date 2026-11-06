---
id: op-r5-controlled-string-cosmological-bounce
kind: open-problem
title: Controlled string-theoretic bounce completion
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
dependency_level: 2
deps:
- def-r5-alternative-cosmology-model-data
dependency_roles:
  def-r5-alternative-cosmology-model-data: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  sources_checked:
    date: 2026-11-04
    scope: Recorded source, statement and proof-status review for this open-problem in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
sources:
  references:
  - title: 'M. Cicoli, J. P. Conlon, A. Maharana, S. Parameswaran, F. Quevedo and I. Zavala, String Cosmology: from the Early
      Universe to Today, arXiv:2303.04819v2'
    url: https://arxiv.org/pdf/2303.04819v2
    locator: §7.3, PDF pp. 135–137, graceful-exit limitations; §7.4, PDF pp. 137–141, bounce, moduli-stabilization and strong-coupling/nonperturbative
      status.
  - title: 'O. Hohm and B. Zwiebach, Duality Invariant Cosmology to all Orders in alpha-prime, arXiv:1905.06963v2'
    url: https://arxiv.org/pdf/1905.06963v2
    locator: Abstract and selected Introduction passages, relevant passages of §§5.1–5.2, and §6 inspected for homogeneous all-orders duality-invariant equations, conditional nonperturbative solutions, and the stated need to determine string-theory-specific coefficients and obtain realistic controlled backgrounds; §§2–4 were not fully reviewed here.
  - title: 'M. Gasperini and G. Veneziano, Non-singular pre-big bang scenarios from all-order alpha-prime corrections, arXiv:2305.00222v4'
    url: https://arxiv.org/pdf/2305.00222v4
    locator: Revised 2025 full HTML text of §§1–4 and Appendix A inspected for the conditional regular-bounce class, assumptions on the unknown duality-invariant function, branch points, and explicit post-bounce strong-coupling/moduli limitations.
  - title: 'I. Ben-Dayan, G. Calcagni, M. Gasperini, A. Mazumdar, E. Pavone, U. Thattarampilly and A. Verma, Gravitational-wave background in bouncing models from semi-classical, quantum and string gravity, arXiv:2406.13521v2'
    url: https://arxiv.org/pdf/2406.13521v2
    locator: Full HTML text of the Abstract and §1, with relevant passages in §§3–5, inspected for model-dependent background and transfer assumptions and its explicit strong-coupling/phenomenological qualification; this source does not exhibit the full compactification conjunction.
physical_scope: Unresolved existence question for a globally consistent, controlled string cosmological bounce with moduli
  stabilization and specified perturbation transfer. It is not a theorem, source supplier, or claim of nonexistence.
---

## Open problem

Choose a time-oriented smooth Lorentzian spacetime $(\mathcal M,g_F)$, a named field frame $F$, and a smooth future-directed unit timelike vector field $u$ with $g_F(u,u)=-1$. Its integral curves are the chosen observer congruence: each curve $c(s)$ is parametrized by proper time $s$ and satisfies $dc/ds=u(c(s))$. Its expansion scalar is $\theta_F:=\nabla^{(F)}_\mu u^\mu$, where $\nabla^{(F)}$ is the Levi-Civita connection of $g_F$. A bounce in this item means that for a specified integral curve there are $s_-<s_+$ across the transition with $\theta_F(c(s_-))<0<\theta_F(c(s_+))$; for a homogeneous cosmology these signs must hold on the entire stated pre- and post-transition hypersurfaces. In the unit-lapse FLRW convention $ds_F^2=-dt^2+a(t)^2\gamma_{ij}dx^i dx^j$ with $c_{\rm light}=1$, $u=\partial_t$, $H=\dot a/a$, and $\theta_F=dH$ for $d$ spatial dimensions. If $g_{tt}=-c_{\rm light}^2$, then $u=c_{\rm light}^{-1}\partial_t$ and $\theta_F=dH/c_{\rm light}$.

For this question, a causal geodesic is a $C^2$ curve $\gamma$ with $\nabla^{(F)}_{\dot\gamma}\dot\gamma=0$ and $g_F(\dot\gamma,\dot\gamma)\leq0$; use an affine parameter for a null geodesic and proper time for a timelike geodesic. A background is nonsingular through the bounce if it is defined on a smooth time-oriented manifold containing an open neighborhood of the transition, its Lorentzian metric is nondegenerate and $C^2$, its background fields are at least $C^2$, every such causal geodesic reaching the transition at finite parameter extends as a causal geodesic through it, and the specified curvature diagnostics and fields remain finite there. A globally consistent compactification consists of a specified compact internal space $Y$ (or a separately specified allowed orbifold), its metric and all flux, brane, gauge, boundary and patching data, and a stated string theory whose field equations, Bianchi identities, flux-quantization, tadpole, anomaly-cancellation and other global consistency conditions are satisfied on all of $Y$. Let $\mathfrak M(Y)$ be the complete declared set of lower-dimensional scalar fields parametrizing continuous deformations of those internal data that are not fixed by the stated constraints. “All moduli stabilized” means every $\chi\in\mathfrak M(Y)$ satisfies the candidate's explicit stabilization criterion throughout the bounce and the interval needed for perturbation propagation; omitting a member of $\mathfrak M(Y)$ does not count as stabilization.

A perturbation state is specified on an initial hypersurface as an element of a stated classical perturbation phase space (or a specified quantum state space), with its variables, gauge or invariant formulation, regularity, constraints and domain given. The transfer rule is a stated map $\mathcal T:\mathcal P_-\to\mathcal P_+$ across the bounce, derived from the candidate's linearized or nonlinear field equations; late-time observables are a separate specified map from $\mathcal P_+$ to the quantities compared with data. “Controlled” is model-specific data: the candidate must define dimensionless functions $q_j$ measuring $\alpha'$ corrections, string loops, omitted-mode effects and backreaction, and dimensionless tolerances $\epsilon_j>0$ such that $q_j\leq\epsilon_j$ throughout the claimed interval for every declared control channel $j$. The coupling/frame convention, curvature diagnostic, cutoff, omitted-mode conditions and all $\epsilon_j$ must be stated; no universal control threshold is assumed here.

Does there exist such a globally consistent compactification and nonsingular, controlled time-dependent solution connecting a contracting cosmological branch to an expanding branch, stabilizing every member of $\mathfrak M(Y)$ by the stated criteria, and propagating a specified perturbation state through a specified transfer map to late-time observables while satisfying all declared control bounds?

## Open problem references

[[def-r5-alternative-cosmology-model-data]]

[M. Cicoli, J. P. Conlon, A. Maharana, S. Parameswaran, F. Quevedo and I. Zavala, String Cosmology: from the Early Universe to Today, arXiv:2303.04819v2](https://arxiv.org/pdf/2303.04819v2)

[O. Hohm and B. Zwiebach, Duality Invariant Cosmology to all Orders in $\alpha'$, arXiv:1905.06963v2](https://arxiv.org/pdf/1905.06963v2)

[M. Gasperini and G. Veneziano, Non-singular pre-big bang scenarios from all-order $\alpha'$ corrections, arXiv:2305.00222v4](https://arxiv.org/pdf/2305.00222v4)

[I. Ben-Dayan et al., Gravitational-wave background in bouncing models from semi-classical, quantum and string gravity, arXiv:2406.13521v2](https://arxiv.org/pdf/2406.13521v2)

## Status

**Status date:** 2026-10-30. The full relevant text of Cicoli et al. (2023, §§7.3–7.4, PDF pp. 135–141) identifies the two-derivative pre-big-bang graceful exit and the ekpyrotic bounce as unresolved high-curvature/strong-coupling problems, and treats moduli stabilization and a global string realization as additional requirements. Later work supplies partial candidates. Hohm and Zwiebach (2019, arXiv:1905.06963v2, §§1, 4–6) classify homogeneous, time-dependent, duality-invariant metric, antisymmetric-tensor and dilaton actions to all orders in $\alpha'$ and exhibit de Sitter solutions for some functions in that theory space; their conclusion leaves determination of the string-theory-specific coefficients, realistic matter, and dilaton/loop control open. Gasperini and Veneziano (2023, revised 2025, arXiv:2305.00222v4, §§1–4 and Appendix A) construct regular pre-to-post-big-bang backgrounds conditional on assumed properties of an unspecified all-orders duality-invariant function. Their §4 cautions that string theory may not realize those properties, compatibility with a general-covariant action is unclear, and the post-bounce evolution reaches strong coupling, where string-loop and nonperturbative effects become important. It describes dilaton and other-moduli stabilization by the resulting potentials as a possibility, and leaves observational consistency of the later history open. Ben-Dayan et al. (2024, arXiv:2406.13521v2, Abstract, §1 and relevant parts of §§3–5) calculate model-dependent gravitational-wave spectra for selected bouncing scenarios, including a parameterized pre-big-bang history; their §1 explicitly treats the strong-coupling dilaton dynamics as phenomenological. These results do not establish the full conjunction formulated here. The source review is targeted, not an exhaustive search of all literature through 2026-10-30; no claim is made that no later construction exists. This status is unresolved rather than a proof of nonexistence, and the open problem is not a premise for another result.
