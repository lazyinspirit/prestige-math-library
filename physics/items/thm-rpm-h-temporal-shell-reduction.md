---
id: thm-rpm-h-temporal-shell-reduction
kind: theorem
title: "A curved temporal chart gives a local reduced Hamiltonian"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 5
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, def-rpm-h-temporal-chart-data, def-gr-smooth-lorentzian-objects, def-rpm-h-cotangent-phase-space, thm-rpm-h-first-order-action-and-geodesics, thm-rpm-h-canonical-poisson-and-flow, thm-a-regular-level-set-is-an-embedded-submanifold, lem-gr-observer-pairing-with-future-causal-vectors]
dependency_roles:
  lem-gr-observer-pairing-with-future-causal-vectors: mathematical-premise
  def-countable-choice: mathematical-premise
  def-rpm-h-temporal-chart-data: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-rpm-h-cotangent-phase-space: mathematical-premise
  thm-rpm-h-first-order-action-and-geodesics: mathematical-premise
  thm-rpm-h-canonical-poisson-and-flow: mathematical-premise
  thm-a-regular-level-set-is-an-embedded-submanifold: mathematical-premise
sources:
  references:
    - title: "Eric Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, complete lecture notes (arXiv:gr-qc/0703035)"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
      locator: "Complete 220-page notes; §§3.3.1–3.3.3, printed pp. 41–44, and §§4.2.2–4.2.3, pp. 56–58; full relevant sections inspected."
physical_scope: null
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

## Statement

Let $m\ge0$ and $c>0$. Assume a temporal product chart with lapse-shift data $(N,\beta,h)$ as in [[def-rpm-h-temporal-chart-data]], all four coordinates measured in metres. Write $g_{ab}=g(\partial_a,\partial_b)$ for $a,b\in\{0,1,2,3\}$ and let $g^{ab}$ denote the entries of the inverse matrix; then $p^\sharp:=\sum_{a,b=0}^3g^{ab}p_b\partial_a$ is the unique vector satisfying $g(p^\sharp,w)=p(w)$ for every tangent vector $w$. Put $T=\{t\in\mathbb R:ct\in I\}$. In every reduced expression below, $N$, $\beta^i$, $h_{ij}$ and $h^{ij}$ mean their pullbacks to $T\times\Omega$: $N(ct,q)$, $\beta^i(ct,q)$, $h_{ij}(ct,q)$ and $h^{ij}(ct,q)$, respectively. Thus $\kappa$, $p_0$ and $H$ are functions of $(t,q,p)$ on the massive reduced domain, or on its nonzero-spatial-momentum part when $m=0$; the spacetime metric and shell covector are evaluated at $(ct,q)$. On the future shell $C_m=\tfrac12(g^{ab}p_ap_b+m^2c^2)=0$, define

$$\kappa=\sqrt{m^2c^2+h^{ij}p_ip_j},\quad p_0=\beta^ip_i-N\kappa,\quad H(t,q,p)=-cp_0=c(N\kappa-\beta^ip_i).$$

For $m=0$, require $p_i\ne0$. Let $J=[t_1,t_2]$ satisfy $t_1<t_2$ and $[ct_1,ct_2]\subset I$, where $I$ is the first-coordinate interval of the temporal product chart; require the path $t\mapsto(ct,q(t))$ to stay in the chart. Take $q^i,p_i$ smooth on a neighborhood of $J$ and vary them by smooth one-parameter families that keep the paths in the chart, fix $q$ at both endpoints and vary $p$ freely; in the massless case the paths and sufficiently small variations stay in $p_i\ne0$. Then the gauge $x^0=ct$ reduces the first-order action to $\int_{t_1}^{t_2}(p_i\dot q^i-H)dt$, and its variational equations on the interior of $J$ are exactly $\dot q^i=H_{p_i}$, $\dot p_i=-H_{q^i}$. The construction is local to this chart and intervals transverse to its time slices; no global curved-space gauge or quotient is asserted.

## Facts & Assumptions

**Given:** A smooth metric in the specified lapse-shift form, $N>0$, positive definite $h$, $m\ge0$, $c>0$, and the future shell.

[A1] [[def-countable-choice]]: Assume countable choice ACω, meaning every sequence of nonempty sets has a choice function; no full Axiom of Choice is assumed.

[F1] [[def-rpm-h-temporal-chart-data]]: $g=-N^2(dx^0)^2+h_{ij}(dx^i+\beta^idx^0)(dx^j+\beta^jdx^0)$, with $x^0$ temporal and $h>0$.

[F2] [[def-gr-smooth-lorentzian-objects]] supplies the fixed smooth time-oriented Lorentzian four-manifold and metric with signature $(-,+,+,+)$.

[F3] [[thm-rpm-h-first-order-action-and-geodesics]]: the first-order equations follow by independent variation.

[F4] [[thm-rpm-h-canonical-poisson-and-flow]]: in canonical coordinates, variational equations are Hamilton's equations with the stated sign convention.

[F5] [[thm-a-regular-level-set-is-an-embedded-submanifold]]: a regular shell level is embedded.

[F6] [[lem-gr-observer-pairing-with-future-causal-vectors]]: for a future unit observer $n$ and nonzero future-causal $p^\sharp$, $p(n)=g(p^\sharp,n)<0$.

## Proof

1.1 Use the supplied smooth tangent/cotangent structures under [A1] and the Lorentzian temporal-chart data [F1,F2]. Expand the metric matrix and invert its block form. Direct multiplication yields $g^{00}=-N^{-2}$, $g^{0i}=\beta^i/N^2$, $g^{ij}=h^{ij}-\beta^i\beta^j/N^2$. Therefore $$g^{ab}p_ap_b=-\frac{(p_0-\beta^ip_i)^2}{N^2}+h^{ij}p_ip_j.$$ The shell equation gives $p_0-\beta^ip_i=\pm N\kappa$. The future normal $n=N^{-1}(\partial_0-\beta^i\partial_i)$ has $p(n)=(p_0-\beta^ip_i)/N<0$ by [F6] for a nonzero future-causal shell covector, so the future branch is the negative root $p_0=\beta^ip_i-N\kappa$. Positive $h$ implies κ>0 except the excluded massless zero momentum. [given, A1, F1, F2, F6, algebra]

2.1 The fibre derivative of $C_m$ with respect to $p_0$ is $g^{0b}p_b=\kappa/N>0$ on this branch. Thus the root is smooth and the shell is locally a graph over $(t,q^i,p_i)$; [F5] also gives the embedded regular-level structure. [given, F1, F5, step 1.1]

2.2 On $x^0=ct$, the canonical term is $p_0c+p_i\dot q^i=p_i\dot q^i-H$. The constraint term vanishes on the solved shell, so the reduced action has the claimed integrand. [given, F3, step 1.1]

3.1 Applying the fixed-endpoint first-variation equations to the reduced canonical action gives $\dot q^i=\partial H/\partial p_i$, $\dot p_i=-\partial H/\partial q^i$; by [F4] these are Hamilton's equations for this time-dependent chart Hamiltonian. Smooth root and $N>0$ ensure the gauge parameter $t=x^0/c$ is valid on the stated interval; nothing here makes it global outside the chart. [given, F4, step 2.1, step 2.2] ∎

