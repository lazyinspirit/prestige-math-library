---
id: def-peyre-tamagawa-measure
kind: definition
title: "Peyre Tamagawa measure and constant"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-peyre-admissibility-conditions
  - def-adelic-metrization-and-anticanonical-height
  - def-adele-ring-of-a-global-field
  - lem-peyre-local-anticanonical-density-is-coordinate-invariant
  - lem-peyre-local-picard-l-factor-well-defined
justified_by: []
axiom_use: >-
  AC and AC_omega are inherited from the restricted-product adele definition;
  all measure convergence assumptions are stated explicitly in the definition.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Emmanuel Peyre, Points de hauteur bornée, topologie adélique et mesures de Tamagawa, §4.5, printed pp. 333–335"
      url: "https://www.numdam.org/item/JTNB_2003__15_1_319_0.pdf"
    - title: "Régis de la Bretèche, Tim Browning, and Emmanuel Peyre, The Manin–Peyre conjecture for smooth spherical Fano varieties of semisimple rank one, §§4.5–4.6"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/235A5BAB435DC8519686A76FAD2EB686/S2050509423001238a.pdf/div-class-title-the-manin-peyre-conjecture-for-smooth-spherical-fano-varieties-of-semisimple-rank-one-div.pdf"
    - title: "Jakob Glas, Counting rational points over function fields, PhD thesis, §2.3 (2024)"
      url: "https://research-explorer.ista.ac.at/download/18132/18140/example-phd.pdf"
      locator: "Chapter 2, §2.3, printed pp. 10–11 / PDF pp. 21–22: Manin–Peyre conjecture, alpha-beta-tau factors, thin sets, and accumulating lines on cubic surfaces."
verification: {}
---

## Definition

Assume the Axiom of Choice and the Axiom of Countable Choice required by the restricted-product adele interface. Let $K$ be a number field, let $X/K$ have dimension $d$ and satisfy the Peyre almost-Fano admissibility conditions, and fix an adelic metric on $-K_X$. Let $M=\operatorname{Pic}(X_{\overline K})$, let $\rho=\operatorname{rank}_{\mathbb Z}\operatorname{Pic}(X)$, and choose a finite set $S$ containing every archimedean place and every finite place outside which $X$ has a smooth proper model and the $G_K$-action on $M$ is unramified. Here good reduction at a finite place means that this model is smooth and proper over its valuation ring. At each finite $v\notin S$, use the local Picard factor $L_v(s,M)$ and put $\lambda_v=L_v(1,M)$; put $\lambda_v=1$ for $v\in S$. Define $L_S(s,M):=\prod_{v\notin S}L_v(s,M)$ for real $s>1$ wherever the Euler product converges. For each place $v$, the anticanonical metric defines a local measure $\omega_{H,v}$ on $X(K_v)$: in analytic coordinates $x_1,\ldots,x_d$ with anticanonical generator $\xi=(\partial/\partial x_1)\wedge\cdots\wedge(\partial/\partial x_d)$, its density is $\|\xi\|_v\,|dx_1\cdots dx_d|_v$; the additive Haar measure gives the valuation ring volume $1$ at finite places, ordinary Lebesgue measure at real places, and $2\,dx\,dy$ at complex places. Let $\mathcal O_K$ be the integral closure of $\mathbb Z$ in $K$, let $e_1,\ldots,e_N$ be a $\mathbb Z$-basis, and let $|D_K|:=|\det(\operatorname{Tr}_{K/\mathbb Q}(e_i e_j))|$ be the absolute discriminant. Put
$$
\omega_{H,s}:=(s-1)^\rho L_S(s,M)|D_K|^{-d/2}\prod_v\lambda_v^{-1}\omega_{H,v}.
$$
Only when the Euler products and restricted-product measure exist and $\omega_{H,s}$ converges as $s\to1^+$ to a finite positive measure $\omega_H$ on
$$
X(\mathbb A_K):=\{(P_v)_v:P_v\in X(K_v)\text{ for all }v,\ P_v\in\mathcal X(\mathcal O_v)\text{ for all but finitely many finite }v\},
$$
with $\mathcal X$ the chosen model outside $S$, is the **Peyre Tamagawa measure** $\omega_H$ defined; the associated **Tamagawa constant** is $\tau_H(X):=\omega_H(\overline{X(K)})$, where $X(K)$ is diagonally embedded and the closure is in the restricted-product topology. The formula is conditional on these convergence hypotheses; it does not claim that they hold for every $X$ in the stated geometric class.

## Definition references

[[def-peyre-admissibility-conditions]]

[[def-adelic-metrization-and-anticanonical-height]]

[[def-adele-ring-of-a-global-field]]

[[lem-peyre-local-anticanonical-density-is-coordinate-invariant]]

[[lem-peyre-local-picard-l-factor-well-defined]]

[Emmanuel Peyre, §4.5, printed pp. 333–335](https://www.numdam.org/item/JTNB_2003__15_1_319_0.pdf)
