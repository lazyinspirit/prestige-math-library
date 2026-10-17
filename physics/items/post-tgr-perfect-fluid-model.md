---
id: post-tgr-perfect-fluid-model
kind: postulate
title: "Smooth perfect local material balance model"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 7
deps:
  - def-tgr-framework-units
  - post-tgr-local-material-thermodynamics
  - def-tgr-local-fluid-state
dependency_roles:
  def-tgr-framework-units: formulation-prerequisite
  post-tgr-local-material-thermodynamics: formulation-prerequisite
  def-tgr-local-fluid-state: formulation-prerequisite
justified_by: []
physical_scope: "Fixed-composition, C2 local-equilibrium material on a smooth region with a perfect stress and conserved marker current; no universal equation of state, microscopic derivation, global gravitating additivity, or solution-existence claim."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Éric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, arXiv:gr-qc/0603009v1 (2006), §§4.2–4.3 and 5.1–5.4"
      url: "https://arxiv.org/pdf/gr-qc/0603009"
      locator: "Full 37-page PDF; PDF pp. 13–19: perfect-fluid stress, supplied rest-frame state function including rest energy, and the local conservation equations and their energy/spatial projections."
    - title: "Nicolas Borghini, Elements of Hydrodynamics, University of Bielefeld lecture notes (version of 2 September 2015), §§I.1.3 and IX.1–IX.3"
      url: "https://www.physik.uni-bielefeld.de/~borghini/Teaching/Hydrodynamics15/Hydrodynamics.pdf"
      locator: "Full 184-page PDF; PDF pp. 4–5 and 134–148: local-equilibrium modeling premise, relativistic particle current, perfect stress tensor, and entropy balance."
---

## Postulate

Let $O$ be an open region of a smooth, oriented, time-oriented Lorentzian four-manifold $(M,g)$ of signature $(-,+,+,+)$, with its metric-compatible torsion-free connection $\nabla$. Use the local material-state and unit conventions of [[def-tgr-local-fluid-state]] and [[def-tgr-framework-units]]: a smooth future-directed unit timelike observer-congruence field $u$ has $g(u,u)=-1$; a $C^2$ state map $(v,\sigma_p):O\to X$ takes values in a nonempty open $X\subset(0,\infty)\times\mathbb R$; and a supplied $e\in C^2(X,\mathbb R)$ defines $n=1/v>0$, $s=n\sigma_p$, $\varepsilon=ne$, $T=\partial_{\sigma_p}e$, and $p=-\partial_v e$. Adopt the selected fixed-composition material branch of [[post-tgr-local-material-thermodynamics]], including its stipulated local-equilibrium regime and $T>0$.

For this branch, adopt the perfect-fluid matter model
$$J^a:=n u^a,\qquad \mathsf T^{ab}:=\varepsilon u^a u^b+p\Delta^{ab},\qquad \Delta^{ab}:=g^{ab}+u^a u^b,$$
with local balances $\nabla_aJ^a=0$ and $\nabla_a\mathsf T^{ab}=0$ on $O$. Here $J^a$ is the selected material-marker current and $\mathsf T^{ab}$ is the symmetric stress-energy tensor; the perfect branch adopts zero spatial marker diffusion and isotropic rest-space stress. The balances are physical model assumptions in the stated smooth regime, not conclusions from the state function or from geometry. They may be used on a prescribed background or together with an explicitly specified coupled Einstein model; this postulate does not assert a solution exists for arbitrary initial data or an arbitrary equation of state.

The marker receives its material-particle interpretation from the fixed-composition premise. No microscopic equation of state, universal material applicability, nonzero external force, dissipative flux, global self-gravitating energy additivity, or empirical observation is asserted.
