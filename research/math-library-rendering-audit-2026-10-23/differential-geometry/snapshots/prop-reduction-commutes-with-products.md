---
id: prop-reduction-commutes-with-products
kind: proposition
title: Reduction commutes with products
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: ["thm-marsden-weinstein-meyer-symplectic-reduction", "prop-products-and-opposites-of-symplectic-manifolds", "def-moment-map-and-component-hamiltonian", "def-coadjoint-representation-of-a-lie-group", "def-symplectic-and-hamiltonian-lie-group-action", "def-countable-choice", "def-fundamental-vector-field-of-a-left-action", "thm-free-proper-action-quotient-manifold", "cor-local-normal-form-for-submersions"]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §7.4.6(a) and §8.1, products and reduction, printed pages 91, 101--102
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 24, §24.3, printed page 149
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(M,\omega_M,\mu_M)$ be a Hamiltonian
$G$-space, let $(N,\omega_N,\mu_N)$ be a Hamiltonian $H$-space, and let the
product group $G\times H$ act componentwise on $M\times N$ with the product
form $\Omega=\operatorname{pr}_M^*\omega_M+\operatorname{pr}_N^*\omega_N$ and the
product moment map

$$\mu_{M\times N}(p,q)=\mu_M(p)\oplus\mu_N(q)\in\mathfrak g^*\oplus\mathfrak h^* \simeq(\mathfrak g\oplus\mathfrak h)^*.$$

Then $\mu_{M\times N}$ is an equivariant moment map. If $\alpha$ is a regular
value of $\mu_M$ with $G_\alpha$ acting freely and properly on
$\mu_M^{-1}(\alpha)$, and $\beta$ is a regular value of $\mu_N$ with $H_\beta$
acting freely and properly on $\mu_N^{-1}(\beta)$, then $(\alpha,\beta)$ is a
regular value with $G_\alpha\times H_\beta$ acting freely and properly on the
product level, and the canonical map

$$M_\alpha\times N_\beta\longrightarrow \mu_{M\times N}^{-1}(\alpha,\beta)/(G_\alpha\times H_\beta)$$

is a symplectomorphism onto the reduced product, the form being
$\omega_\alpha\oplus\omega_\beta$ on the left and the reduced form on the
right.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, Hamiltonian $G$-spaces and $H$-spaces as above, and regular values $\alpha,\beta$ with the stated free proper stabilizer actions.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field and reduction suppliers.

[F1] The product form $\Omega$ is symplectic and the fundamental field of the product action at $(p,q)$ is the pair $(\xi_M(p),\eta_N(q))$ for $(\xi,\eta)\in\mathfrak g\oplus\mathfrak h$. [[prop-products-and-opposites-of-symplectic-manifolds]], [[def-fundamental-vector-field-of-a-left-action]]. The field formula follows by differentiating the componentwise action of $\exp(-t(\xi,\eta))=(\exp(-t\xi),\exp(-t\eta))$.

[F2] $\mu_M,\mu_N$ satisfy the component equations $d\mu_M^\xi=-\iota_{\xi_M}\omega_M$ and $d\mu_N^\eta=-\iota_{\eta_N}\omega_N$, and are equivariant. [[def-moment-map-and-component-hamiltonian]].

[F3] The dual of a direct sum is the direct sum of the duals, and the coadjoint action of a product group is componentwise, with stabilizer $(\alpha,\beta)$ equal to $G_\alpha\times H_\beta$. [[def-coadjoint-representation-of-a-lie-group]].

[F4] For a free proper smooth action, the quotient map is a smooth surjective submersion ([[thm-free-proper-action-quotient-manifold]]). Every submersion locally has coordinate form $(u,v)\mapsto u$, and therefore has a local smooth section by fixing $v$ ([[cor-local-normal-form-for-submersions]]).

[F5] Under the stated regularity, freeness and properness hypotheses the reduction theorem gives a unique symplectic form on each reduced space, characterised by the pullback identity. [[thm-marsden-weinstein-meyer-symplectic-reduction]].

## Proof

**Proof technique:** direct.

1.1 Product moment identity: for $(\xi,\eta)\in\mathfrak g\oplus\mathfrak h$ and $(u,v)\in T_{(p,q)}(M\times N)$, [F2] and [F1] give $$d(\mu_M\oplus\mu_N)^{(\xi,\eta)}_{(p,q)}(u,v)=d(\mu_M^\xi)_p(u)+d(\mu_N^\eta)_q(v)=-\omega_M(\xi_M(p),u)-\omega_N(\eta_N(q),v)=-\Omega\bigl((\xi_M(p),\eta_N(q)),(u,v)\bigr).$$ Each factor action preserves its symplectic form, so the componentwise action preserves $\Omega$ by the two pullback projections. [F1, F2, given]

1.2 Equivariance: $\mu_{M\times N}((g,h)\cdot(p,q))=\mu_M(g\cdot p)\oplus\mu_N(h\cdot q)=(g\cdot\mu_M(p))\oplus(h\cdot\mu_N(q))=(g,h)\cdot(\mu_M(p)\oplus\mu_N(q))$ by componentwise coadjoint action [F3]. [F2, F3]

1.3 The stabilizer action on $\mu_M^{-1}(\alpha)\times\mu_N^{-1}(\beta)$ is free: if $(g,h)$ fixes $(p,q)$, then $g$ fixes $p$ and $h$ fixes $q$, so $g=e$ and $h=e$. It is proper as well. Indeed, after permuting factors, its action map is the product of the two proper action maps. The inverse image of a compact set is a closed subset of the product of the inverse images of its compact coordinate projections, and is therefore compact. [F3, given]

2.1 Regularity: the differential of $\mu_{M\times N}$ at $(p,q)$ is $d(\mu_M)_p\oplus d(\mu_N)_q$, whose image is $\operatorname{im}d(\mu_M)_p\oplus\operatorname{im}d(\mu_N)_q$. Hence it is surjective if and only if both summands are, so the assumed regularity of both factor values proves regularity at every point of the product level. If either factor level is empty, the product level is empty and regularity is vacuous; no converse about factor regularity is asserted in that case. [step 1.1, given]

3.1 Write $Z_M=\mu_M^{-1}(\alpha)$, $Z_N=\mu_N^{-1}(\beta)$ and $Z=Z_M\times Z_N$. Let $q_M:Z_M\to M_\alpha$, $q_N:Z_N\to N_\beta$ and $Q:Z\to Z/(G_\alpha\times H_\beta)$ be the quotient maps. By the verified hypotheses and [F4] these are smooth surjective submersions. The map $\phi:([p],[q])\mapsto[(p,q)]$ is well defined and bijective, because product orbits are exactly products of the factor orbits. On neighbourhoods with local sections $s_M,s_N$ from [F4], it is $Q\circ(s_M\times s_N)$, hence smooth. Conversely, composing a local section $s$ of $Q$ with $(q_M\circ\operatorname{pr}_M,q_N\circ\operatorname{pr}_N)$ gives the inverse of $\phi$ locally, hence that inverse is smooth. Put $P=q_M\times q_N$ and $j=\iota_M\times\iota_N$. The defining reduced-form identities imply $P^*(\omega_\alpha\oplus\omega_\beta)=j^*\Omega=Q^*\omega_{\rm red}$. Since $Q=\phi\circ P$, this gives $P^*(\phi^*\omega_{\rm red}-(\omega_\alpha\oplus\omega_\beta))=0$. Pullback by the surjective submersion $P$ is injective: at each target point choose a preimage and lift the tangent arguments by its surjective differential. Thus $\phi^*\omega_{\rm red}=\omega_\alpha\oplus\omega_\beta$, as required. If a level is empty, both quotients and the product are empty, and the same assertion is the unique empty diffeomorphism with its empty form. [step 2.1, step 1.3, F1, F4, F5, algebra]

4.1 Steps 1.1 and 1.2 show that $\mu_{M\times N}$ is an equivariant moment map; steps 2.1 and 1.3 verify the reduction hypotheses for the product; step 3.1 identifies the reduced symplectic form with the product form under the canonical diffeomorphism. [step 2.1, step 3.1, A1] ∎
