---
id: pthm-em-coupled-total-conservation
kind: physics-theorem
title: "Closed-system energy, momentum and angular balance conditional on a matter model"
domain: physics
physical_scope: "The conditional total balances obtained by adding explicitly assumed matter balance equations to the vacuum field balances of the same framework: local zero-source identities for total energy, momentum and orbital angular momentum and their fixed-volume boundary-flux forms. The matter balances are additional assumptions about a specified matter model, not consequences of the Maxwell postulates; no closed system, no conservation without flux conditions and no empirical claim is asserted."
status: draft
origin: pipeline
dependency_level: 20
proof_strategy: direct
deps: [def-countable-choice, def-cross-product-in-r3, def-directional-and-partial-derivatives, def-em-vacuum-stress-momentum, lem-em-parameter-integrals, lem-em-quadratic-stress-identity, post-em-lorentz-coupling, pthm-em-angular-balance, pthm-em-momentum-balance, pthm-em-poynting-balance, thm-algebra-of-derivatives, thm-divergence-theorem-for-bounded-piecewise-c-one-domains, thm-graphs-of-continuous-functions-have-content-zero, cor-integral-over-a-null-set-vanishes, cor-zero-derivative-implies-constant, def-em-fields, post-em-vacuum-maxwell]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-em-vacuum-stress-momentum: formulation-prerequisite
  lem-em-parameter-integrals: mathematical-premise
  lem-em-quadratic-stress-identity: mathematical-premise
  post-em-lorentz-coupling: physical-assumption
  pthm-em-angular-balance: physical-result
  pthm-em-momentum-balance: physical-result
  pthm-em-poynting-balance: physical-result
  thm-algebra-of-derivatives: mathematical-premise
  thm-divergence-theorem-for-bounded-piecewise-c-one-domains: mathematical-premise
  thm-graphs-of-continuous-functions-have-content-zero: mathematical-premise
  cor-integral-over-a-null-set-vanishes: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-em-fields: formulation-prerequisite
  post-em-vacuum-maxwell: physical-assumption
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "L. D. Landau, E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "§33 printed pp. 81-83 (PDF pp. 93-95), eqs. (33.1), (33.3), (33.5)-(33.8): electromagnetic tensor, spatial stress, non-interacting charged-particle matter tensor and cancellation of field/matter divergences. The general smooth matter balances in this item are explicitly assumed. Relevant passages independently read during Step 5a reader-32, 10 October 2026."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (cover dated Lent Term 2015, 236-page PDF)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§5.6.2 printed pp. 130-131 (PDF pp. 138-139): the electromagnetic tensor and its field-only divergence in the presence of current. This section does not supply the matter tensor; the matter balances in this item are additional explicit assumptions. Relevant passages independently read during Step 5a reader-32, 10 October 2026."
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§8.2.3-8.2.4 printed pp. 353-360: total momentum and angular momentum of the field-plus-matter system and the role of the boundary terms; read in the stamped scanned full text"
---

## Statement

Assume the hypotheses of [[pthm-em-poynting-balance]] and
[[pthm-em-momentum-balance]]: the smooth branch of
[[post-em-vacuum-maxwell]] and clause (ii) of [[post-em-lorentz-coupling]] on
the laboratory region $U\cong I\times\Omega$, jointly $C^1$ fields of
[[def-em-fields]], continuous sources, the constants of the framework, and the
field objects $u,S,g,\Pi$ of [[def-em-vacuum-stress-momentum]]. Suppose in
addition that matter fields
$u_m:\Omega\times I\to\mathbb R$, $S_m:\Omega\times I\to\mathbb R^3$,
$g_m:\Omega\times I\to\mathbb R^3$ and a symmetric matrix-valued map
$\Pi_m:\Omega\times I\to\mathbb R^{3\times3}$ are of class $C^1$, with
$\Pi_{m,ij}=\Pi_{m,ji}$ and $(\operatorname{div}\Pi_m)_i=\sum_{j=1}^3\partial_j\Pi_{m,ij}$.
Their SI units are respectively $\mathrm J\,\mathrm m^{-3}$,
$\mathrm W\,\mathrm m^{-2}$, $\mathrm{kg}\,\mathrm m^{-2}\mathrm s^{-1}$ and
$\mathrm N\,\mathrm m^{-2}$, matching the field quantities added below.
Assume they satisfy the matter balance equations

$$\partial_tu_m+\operatorname{div}S_m=J\cdot E,\qquad\partial_tg_m+\operatorname{div}\Pi_m=f,$$

pointwise on $\Omega\times I$, where $f=\rho E+J\times B$ and $J\cdot E$ are
the coupling densities of clause (ii). Put
$u_{\mathrm{tot}}:=u+u_m$, $S_{\mathrm{tot}}:=S+S_m$,
$g_{\mathrm{tot}}:=g+g_m$, $\Pi_{\mathrm{tot}}:=\Pi+\Pi_m$ (symmetric) and
$\ell_{\mathrm{tot}}:=x\times g_{\mathrm{tot}}$. Then:

(a) [Local conservation] On $\Omega\times I$,

$$\partial_tu_{\mathrm{tot}}+\operatorname{div}S_{\mathrm{tot}}=0,\qquad\partial_tg_{\mathrm{tot}}+\operatorname{div}\Pi_{\mathrm{tot}}=0,\qquad\partial_t\ell_{\mathrm{tot}}+\operatorname{div}(x\times\Pi_{\mathrm{tot}})=0$$

componentwise in the last two identities.

(b) [Fixed-volume conservation] Let $\Omega'\subseteq\Omega$ be open with
$\overline{\Omega'}\subseteq\Omega$ carrying the finite piecewise $C^1$
presentation of
[[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]], let
$t_0<t_1$ with $(t_0,t_1)\subseteq I$, assume $\mathrm{AC}_\omega$
([[def-countable-choice]]), and let $n$ be the outward unit normal. Then for
every $t\in(t_0,t_1)$,

$$\frac{d}{dt}\int_{\Omega'}u_{\mathrm{tot}}\,dx=-\oint_{\partial\Omega'}S_{\mathrm{tot}}\cdot n\,dS,\qquad\frac{d}{dt}\int_{\Omega'}g_{{\mathrm{tot}},i}\,dx=-\oint_{\partial\Omega'}\Bigl(\sum_{j=1}^{3}\Pi_{{\mathrm{tot}},ij}n_j\Bigr)dS,\qquad\frac{d}{dt}\int_{\Omega'}\ell_{{\mathrm{tot}},i}\,dx=-\oint_{\partial\Omega'}\Bigl(\sum_{j=1}^{3}(x\times\Pi_{\mathrm{tot}})_{ij}n_j\Bigr)dS,$$

the closed-surface integrals being finite face sums of that divergence
theorem. Consequently each of the three totals is constant on $(t_0,t_1)$ if
and only if the corresponding boundary flux integral vanishes for every
$t\in(t_0,t_1)$.

(c) [Scope] The matter balances are additional, explicitly stated assumptions,
not consequences of the Maxwell postulates: a prescribed current $(\rho,J)$
does not by itself supply matter fields satisfying them, and "closed system" is
a modelling choice about which boundary terms are included. The hypotheses and
exclusions of the two field theorems are inherited, and no empirical claim is
made.

## Facts & Assumptions

**Given:** The hypotheses of [[pthm-em-poynting-balance]] and [[pthm-em-momentum-balance]]; the field objects of [[def-em-vacuum-stress-momentum]]; and the $C^1$ matter fields $u_m,S_m,g_m$ and symmetric $C^1$ $\Pi_m$ satisfying the two matter balance equations pointwise. In clause (b) also the admissible $\Omega'$, the interval $(t_0,t_1)$ and $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] Field balances: $\partial_tu+\operatorname{div}S=-J\cdot E$ and $\partial_tg+\operatorname{div}\Pi=-f$ pointwise on $\Omega\times I$, with $u,S,g,\Pi$ of class $C^1$, $\Pi$ symmetric, and $f$ continuous ([[pthm-em-poynting-balance]], [[pthm-em-momentum-balance]]).

[F2] Angular field balance: with $\ell=x\times g$ and $x\times\Pi$ as in [[def-em-vacuum-stress-momentum]], $\partial_t\ell+\operatorname{div}(x\times\Pi)=-x\times f$ pointwise on $\Omega\times I$, under the hypotheses of [F1] ([[pthm-em-angular-balance]]).

[F3] Matter balances: $\partial_tu_m+\operatorname{div}S_m=J\cdot E$ and $\partial_tg_m+\operatorname{div}\Pi_m=f$ pointwise on $\Omega\times I$, with $u_m,S_m,g_m,\Pi_m$ of class $C^1$ and $\Pi_m$ symmetric; the coupling densities are those of clause (ii) of [[post-em-lorentz-coupling]].

[F4] Sum rules: for differentiable real functions of the time variable, sums and scalar multiples have the expected derivatives ([[thm-algebra-of-derivatives]]); and the divergence is linear in its argument, being a finite sum of coordinate partial derivatives ([[def-directional-and-partial-derivatives]]).

[F5] Fixed-volume tools: compact-parameter differentiation ([[lem-em-parameter-integrals]]); the divergence theorem on the finite piecewise $C^1$ presentation with faces counted once off the edge set, under $\mathrm{AC}_\omega$ ([[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]]); the Lebesgue-nullity of its boundary by the graph-coordinate Fubini and rigid change of variables in Proof step 4.1 of that divergence theorem, followed by finite subadditivity over its faces; the vanishing of nonnegative measurable integrals over null sets ([[cor-integral-over-a-null-set-vanishes]]); and the fact that a continuous function on an interval whose derivative vanishes at every interior point is constant ([[cor-zero-derivative-implies-constant]]).

[F6] The quadratic stress lemma in the form used for the total angular identity: if $\Pi$ is $C^1$ and symmetric, $g$ continuous, and $\partial_tg+\operatorname{div}\Pi=-F$ pointwise for continuous $F$, then $\partial_t(x\times g)+\operatorname{div}(x\times\Pi)=-x\times F$ ([[lem-em-quadratic-stress-identity]]).

[F7] Identities of the cross product and its components used in the total flux tensor: $(x\times\Pi_{\mathrm{tot}})_{ij}=\sum_{k,l=1}^{3}\epsilon_{ikl}x_k\Pi_{{\mathrm{tot}},lj}$ and $\Pi_{\mathrm{tot}}$ symmetric ([[def-em-vacuum-stress-momentum]], [[def-cross-product-in-r3]]).

## Proof

**Proof technique:** direct; add each matter balance to the corresponding field balance to obtain the total energy and momentum identities, obtain the total angular identity by adding the field angular balance to the angular identity implied by the matter momentum balance, and integrate with the divergence theorem.

1.1 Total energy and momentum: adding the two identities of [F1] to the two matter balances of [F3] and using the sum rules [F4], $\partial_tu_{\mathrm{tot}}+\operatorname{div}S_{\mathrm{tot}}=(\partial_tu+\operatorname{div}S+J\cdot E)+(\partial_tu_m+\operatorname{div}S_m-J\cdot E)=0$ and $\partial_tg_{\mathrm{tot}}+\operatorname{div}\Pi_{\mathrm{tot}}=(\partial_tg+\operatorname{div}\Pi+f)+(\partial_tg_m+\operatorname{div}\Pi_m-f)=0$ pointwise on $\Omega\times I$, since $\Pi_{\mathrm{tot}}=\Pi+\Pi_m$ and the coupling terms cancel between field and matter. [given, F1, F3, F4, algebra]

1.2 Total angular: the field angular identity [F2] reads $\partial_t(x\times g)+\operatorname{div}(x\times\Pi)=-x\times f$; the matter momentum balance $\partial_tg_m+\operatorname{div}\Pi_m=f$ of [F3], written as $\partial_tg_m+\operatorname{div}\Pi_m=-(-f)$ with the continuous $F:=-f$, enters the lemma [F6] and gives $\partial_t(x\times g_m)+\operatorname{div}(x\times\Pi_m)=-x\times(-f)=x\times f$, where the tensor $x\times\Pi_m$ is the one defined inside [F6] for the symmetric $\Pi_m$. Adding the two with [F4] yields $\partial_t\ell_{\mathrm{tot}}+\operatorname{div}(x\times\Pi_{\mathrm{tot}})=0$ pointwise, using $\ell_{\mathrm{tot}}=x\times(g+g_m)$ and $\Pi_{\mathrm{tot}}=\Pi+\Pi_m$ as in [F7]. [given, F2, F3, F4, F6, F7, algebra]

1.3 Fixed-volume setup: let $\Omega'$, $t_0<t_1$ be as in clause (b), fix $t\in(t_0,t_1)$ and choose $a,b$ with $t_0<a<t<b<t_1$. The closures are compact and contained in the open $\Omega$; all six quantities $u_{\mathrm{tot}},S_{\mathrm{tot}},g_{{\mathrm{tot}},i},\Pi_{{\mathrm{tot}},ij},\ell_{{\mathrm{tot}},i},(x\times\Pi_{\mathrm{tot}})_{ij}$ and their time derivatives are continuous on a neighbourhood of $\overline{\Omega'}\times[a,b]$ by [F1], [F3] and the sum rules; the boundary is Lebesgue-null by [F5], so integrals over $\Omega'$ and its closure agree, and [F5] applies to each of the three total quantities separately. [given, F1, F3, F5, algebra]

2.1 Fixed-volume identities: by steps 1.1-1.3, $\frac{d}{dt}\int_{\Omega'}u_{\mathrm{tot}}\,dx=\int_{\Omega'}\partial_tu_{\mathrm{tot}}\,dx=-\int_{\Omega'}\operatorname{div}S_{\mathrm{tot}}\,dx=-\oint_{\partial\Omega'}S_{\mathrm{tot}}\cdot n\,dS$, and likewise for $g_{\mathrm{tot}}$ with the vector fields $(\Pi_{{\mathrm{tot}},i1},\Pi_{{\mathrm{tot}},i2},\Pi_{{\mathrm{tot}},i3})(\cdot,t)$ and for $\ell_{\mathrm{tot}}$ with $((x\times\Pi_{\mathrm{tot}})_{i1},(x\times\Pi_{\mathrm{tot}})_{i2},(x\times\Pi_{\mathrm{tot}})_{i3})(\cdot,t)$, each $C^1$ on a neighbourhood of $\overline{\Omega'}$ and each integrated with the divergence theorem of [F5]; this proves the three displayed identities and their finite face sums. If a total function has vanishing derivative at every point of $(t_0,t_1)$ then it is constant there by [F5], and if it is constant then its derivative vanishes and the displayed identity forces the corresponding flux to vanish; this is the asserted equivalence for each of the three totals. [step 1.1, step 1.2, step 1.3, F5, algebra]

3.1 Clause (c): the matter balances were assumed, not derived; the coupling densities enter exactly through clause (ii) of [F3], and the boundary terms were retained, so constancy on the stated interval is equivalent to vanishing of its net boundary flux throughout that interval; a nonzero flux describes exchange to be tracked in the chosen system; the exclusions of the field theorems remain in force and no empirical content is added. [step 2.1, F3, F5] ∎

## Remarks

- **The cancellation is formal, the assumptions are physical.** The proof only adds two pointwise identities; the physical content lies in the hypothesis that a matter model exists whose balances carry exactly the coupling densities $J\cdot E$ and $f$ with the opposite signs. A prescribed current does not supply such matter fields.
- **Totality is a modelling choice.** "Closed system" here means that the chosen volume's boundary flux is either neglected because it vanishes or tracked separately; the theorem asserts the exact boundary-flux forms and nothing more.
