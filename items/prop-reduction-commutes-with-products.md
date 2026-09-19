---
id: prop-reduction-commutes-with-products
kind: proposition
title: Reduction commutes with products
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-product-and-opposite-symplectic-moment-maps, thm-marsden-weinstein-meyer-symplectic-reduction, prop-products-and-opposites-of-symplectic-manifolds, def-moment-map-and-component-hamiltonian, def-coadjoint-representation-of-a-lie-group, def-symplectic-and-hamiltonian-lie-group-action, def-countable-choice]
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
product level, and the product of the canonical diffeomorphisms

$$M_\alpha\times N_\beta\longrightarrow \mu_{M\times N}^{-1}(\alpha,\beta)/(G_\alpha\times H_\beta)$$

is a symplectomorphism onto the reduced product, the form being
$\omega_\alpha\oplus\omega_\beta$ on the left and the reduced form on the
right.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, Hamiltonian $G$-spaces and $H$-spaces as above, and regular values $\alpha,\beta$ with the stated free proper stabilizer actions.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field and reduction suppliers.

[F1] The product form $\Omega$ is symplectic and the fundamental field of the product action at $(p,q)$ is the pair $(\xi_M(p),\eta_N(q))$ for $(\xi,\eta)\in\mathfrak g\oplus\mathfrak h$. [[prop-products-and-opposites-of-symplectic-manifolds]], [[prop-product-and-opposite-symplectic-moment-maps]].

[F2] $\mu_M,\mu_N$ satisfy the component equations $d\mu_M^\xi=-\iota_{\xi_M}\omega_M$ and $d\mu_N^\eta=-\iota_{\eta_N}\omega_N$, and are equivariant. [[def-moment-map-and-component-hamiltonian]].

[F3] The dual of a direct sum is the direct sum of the duals, and the coadjoint action of a product group is componentwise, with stabilizer $(\alpha,\beta)$ equal to $G_\alpha\times H_\beta$. [[def-coadjoint-representation-of-a-lie-group]].

[F5] Under the stated regularity, freeness and properness hypotheses the reduction theorem gives a unique symplectic form on each reduced space, characterised by the pullback identity. [[thm-marsden-weinstein-meyer-symplectic-reduction]].

## Proof

**Proof technique:** direct.

1.1 Product moment identity: for $(\xi,\eta)\in\mathfrak g\oplus\mathfrak h$ and $(u,v)\in T_{(p,q)}(M\times N)$, [F2] and [F1] give $$d(\mu_M\oplus\mu_N)^{(\xi,\eta)}_{(p,q)}(u,v)=d(\mu_M^\xi)_p(u)+d(\mu_N^\eta)_q(v)=-\omega_M(\xi_M(p),u)-\omega_N(\eta_N(q),v)=-\Omega\bigl((\xi_M(p),\eta_N(q)),(u,v)\bigr).$$ [F1, F2]

1.2 Equivariance: $\mu_{M\times N}((g,h)\cdot(p,q))=\mu_M(g\cdot p)\oplus\mu_N(h\cdot q)=(g\cdot\mu_M(p))\oplus(h\cdot\mu_N(q))=(g,h)\cdot(\mu_M(p)\oplus\mu_N(q))$ by componentwise coadjoint action [F3]. [F2, F3]

1.3 The stabilizer action on $\mu_M^{-1}(\alpha)\times\mu_N^{-1}(\beta)$ is free: if $(g,h)$ fixes $(p,q)$, then $g$ fixes $p$ and $h$ fixes $q$, so $g=e$ and $h=e$. It is proper as well. Indeed, after permuting factors, its action map is the product of the two proper action maps. The inverse image of a compact set is a closed subset of the product of the inverse images of its compact coordinate projections, and is therefore compact. [F3, given]

2.1 Regularity: the differential of $\mu_{M\times N}$ at $(p,q)$ is $d(\mu_M)_p\oplus d(\mu_N)_q$, whose image is $\operatorname{im}d(\mu_M)_p\oplus\operatorname{im}d(\mu_N)_q$. Hence it is surjective if and only if both summands are, so $(\alpha,\beta)$ is a regular value of the product moment map precisely when $\alpha$ is regular for $\mu_M$ and $\beta$ for $\mu_N$. [step 1.1, given]

3.1 The map $([p],[q])\mapsto[(p,q)]$ is a well-defined bijection from $M_\alpha\times N_\beta$ to the product-level quotient, since two pairs have the same product orbit exactly when their coordinates have the same factor orbits. The quotient maps are surjective submersions by [F5], so their local smooth sections show that this bijection and its inverse are smooth. The product quotient map pulls $\omega_\alpha\oplus\omega_\beta$ back to $\iota_M^*\omega_M\oplus\iota_N^*\omega_N$, also the pullback of the product form along the product-level inclusion. By uniqueness in [F5], the canonical diffeomorphism carries $\omega_\alpha\oplus\omega_\beta$ to the reduced form. [step 2.1, step 1.3, F1, F5]

4.1 Steps 1.1 and 1.2 show that $\mu_{M\times N}$ is an equivariant moment map; steps 2.1 and 1.3 verify the reduction hypotheses for the product; step 3.1 identifies the reduced symplectic form with the product form under the canonical diffeomorphism. [step 2.1, step 3.1, A1] ∎
