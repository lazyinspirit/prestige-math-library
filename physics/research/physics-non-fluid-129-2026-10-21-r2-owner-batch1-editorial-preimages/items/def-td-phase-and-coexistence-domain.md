---
id: def-td-phase-and-coexistence-domain
kind: definition
title: Phase branches and coexistence domains
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: Model-specified phase branches of nonrelativistic macroscopic thermodynamic systems in positive-temperature, positive-composition, positive-amount charts; intensive scale invariance and same-tag homogeneity are separate branch assumptions, and no branch existence, stability, boundary smoothness, or universal phase rule is asserted.
dependency_level: 0
deps:
  - def-td-equilibrium-state-domain
  - def-td-si-quantities
  - def-finite-sum
  - def-td-temperature-pressure-chemical-potential
  - def-td-response-functions
  - def-td-legendre-potentials
  - def-td-isolated-compound-feasible-set
  - post-td-bulk-additivity
  - post-td-concave-fundamental-entropy
  - post-td-entropy-maximum
  - def-ck-euclidean-maps-and-diffeomorphisms
dependency_roles:
  def-td-equilibrium-state-domain: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  def-finite-sum: mathematical-premise
  def-td-temperature-pressure-chemical-potential: formulation-prerequisite
  def-td-response-functions: formulation-prerequisite
  def-td-legendre-potentials: formulation-prerequisite
  def-td-isolated-compound-feasible-set: formulation-prerequisite
  post-td-bulk-additivity: physical-assumption
  post-td-concave-fundamental-entropy: physical-assumption
  post-td-entropy-maximum: physical-assumption
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Statistical Physics, author-hosted complete lecture notes, Chapter 5, §§5.1.1–5.1.3"
      url: https://davidtong.org/teaching/statistical-physics/statmechhtml/S5
    - title: "Konstantin K. Likharev, Essential Graduate Physics: Statistical Mechanics, §4.1 First-order phase transitions"
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Essential_Graduate_Physics_-_Statistical_Mechanics_%28Likharev%29/04%3A_Phase_Transitions/4.01%3A_First_order_phase_transitions
    - title: "Konstantin K. Likharev, Essential Graduate Physics: Statistical Mechanics, §4.2 Continuous phase transitions"
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Essential_Graduate_Physics_-_Statistical_Mechanics_%28Likharev%29/04%3A_Phase_Transitions/4.02%3A_Continuous_phase_transitions
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Definition

Fix a constitution $c$ with $C\ge1$ named species and its equilibrium state domain $D_c\subseteq\mathbb R^{C+2}$ from [[def-td-equilibrium-state-domain]]. An interior composition is represented by

$$
x=(x_1,\ldots,x_{C-1})\in\Delta_{C-1}^{\circ}:=\{x\in\mathbb R^{C-1}:x_i>0,\ \sum_{i=1}^{C-1}x_i<1\},
$$

with $x_C:=1-\sum_{i<C}x_i>0$; for $C=1$, $\mathbb R^0=\{0\}$ and $x_1=1$.

A **phase branch** $\alpha$ is model data consisting of an open chart $W_\alpha\subseteq(0,\infty)\times\mathbb R\times\Delta_{C-1}^{\circ}\times(0,\infty)$ with coordinates $(T,p,x,m)$ and a $C^1$ diffeomorphism $\sigma_\alpha:W_\alpha\to U_\alpha$ onto an open subset $U_\alpha\subseteq\mathbb R^{C+2}$ contained in the equilibrium state domain $D_c$. Here $T$ is in kelvins, $p$ is in pascals, $m$ is total amount in moles, and $C^1$ means continuous first coordinate derivatives as in [[def-ck-euclidean-maps-and-diffeomorphisms]]. The chart dimension is $C+2$, matching the ambient dimension of $D_c$. The map $\sigma_\alpha$ takes values in numerical state coordinates; its physical SI state map is explicitly $\chi_\alpha=\Phi_c\circ\sigma_\alpha$, where $\Phi_c$ is the numerical-to-SI unit map of [[def-td-temperature-pressure-chemical-potential]]. Thus the physical amounts at this point are $n_j=m x_j$, and the numerical amount coordinates in $\sigma_\alpha$ are $n_j/(1\,\mathrm{mol})$. Derivative-defined physical state functions are evaluated on $\chi_\alpha(T,p,x,m)$, or equivalently pulled back along $\Phi_c$ to $\sigma_\alpha(T,p,x,m)$. At $\sigma_\alpha(T,p,x,m)$ in this precise pullback sense, the derivative-defined state functions of [[def-td-temperature-pressure-chemical-potential]] give temperature $T$, pressure $p$, and mole fractions $x_j=n_j/m$; here $n_{\mathrm{tot}}:=\sum_{i=1}^C n_i=m$ uses the finite-sum convention of [[def-finite-sum]]. An **intensive phase branch** additionally has each derivative-defined chemical potential $\mu_j(T,p,x,m)$ independent of $m$ throughout $W_\alpha$; write its value as $\mu_j^\alpha(T,p,x)$. This scale invariance is an explicit constitutive model property, not a consequence of [[post-td-bulk-additivity]]. A valid local response chart and its inverse are as in [[def-td-response-functions]] and [[def-td-legendre-potentials]]. Existence of $W_\alpha$ or $\sigma_\alpha$ is a model premise, not a consequence of the equations of thermodynamics.

On a branch with a valid natural-variable chart, $G^\alpha$ denotes the Gibbs potential of [[def-td-legendre-potentials]] restricted to the branch. For a one-component branch with amount $m_\alpha>0$, define $g_\alpha:=G^\alpha/m_\alpha$, $s_\alpha:=S_\alpha/m_\alpha$, and $v_\alpha:=V_\alpha/m_\alpha$, in $\mathrm{J\,mol^{-1}}$, $\mathrm{J\,mol^{-1}K^{-1}}$, and $\mathrm{m^3\,mol^{-1}}$, respectively. These quotients need not be independent of amount, and $g_\alpha=\mu^\alpha$ is not assumed by this definition. Such an equality requires a separate same-tag homogeneity hypothesis on the branch.

A **phase mixture** of a finite list of branches is a feasible separated compound whose positive phase amounts $m_\alpha$ have fractions $\lambda_\alpha:=m_\alpha/\sum_\beta m_\beta>0$ with $\sum_\alpha\lambda_\alpha=1$. Its extensive coordinates and entropy are those supplied by [[post-td-bulk-additivity]] and [[post-td-concave-fundamental-entropy]], on the exact feasible set of [[def-td-isolated-compound-feasible-set]]. The mixture is in **coexistence** when it is an attained global entropy-maximizing endpoint under the declared totals and permitted exchanges, as in [[post-td-entropy-maximum]]. This definition does not assert that a maximum exists, that all branches can exchange every coordinate, or that metastable states are global equilibria.

The bulk scaling postulate may send a material tag $c$ to a different tag $c^{(\lambda)}$. It therefore does not supply same-tag degree-one homogeneity of $G^\alpha$ or $U^\alpha$ on a phase branch. Any result using $g_\alpha=\mu^\alpha$ must state that additional hypothesis.
