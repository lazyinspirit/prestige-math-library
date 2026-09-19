---
id: prop-shifting-trick-identifies-reduction-at-alpha-with-zero-reduction
kind: proposition
title: The shifting trick identifies reduction at a value with a zero reduction
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-coadjoint-orbit-inclusion-is-an-equivariant-moment-map, thm-coadjoint-orbits-are-symplectic-manifolds, prop-product-and-opposite-symplectic-moment-maps, thm-marsden-weinstein-meyer-symplectic-reduction, prop-regularity-of-a-moment-map-is-equivalent-to-local-freeness, def-moment-map-and-component-hamiltonian, def-coadjoint-representation-of-a-lie-group, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §8.1, Proposition 8.6 (Shifting-trick) and its proof, printed pages 102--103
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 24, §24.4, printed page 150
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(M,\omega,G,\mu)$ be a Hamiltonian $G$-space,
let $\alpha\in\mathfrak g^*$ and let $\mathcal O=G\cdot\alpha$ be its coadjoint
orbit with the KKS form $\omega_{\mathcal O}$; write
$\mathcal O^-=(\mathcal O,-\omega_{\mathcal O})$ and equip
$M\times\mathcal O^-$ with the diagonal $G$-action, the product form
$\Omega=\operatorname{pr}_M^*\omega-\operatorname{pr}_{\mathcal O}^*\omega_{\mathcal O}$
and

$$\Psi(m,\beta):=\mu(m)-\beta\in\mathfrak g^*.$$

Then:

1. $\Psi$ is a coadjoint-equivariant moment map for the diagonal action.
2. The zero set $\Psi^{-1}(0)$ consists of the pairs $(m,\mu(m))$ with
   $\mu(m)\in\mathcal O$, and $m\mapsto(m,\mu(m))$ identifies it
   $G$-equivariantly with the saturated level $\mu^{-1}(G\cdot\alpha)$.
3. Every $G$-orbit in $\Psi^{-1}(0)$ meets the slice
   $\mu^{-1}(\alpha)\times\{\alpha\}$ in exactly one $G_\alpha$-orbit, so the
   inclusion of the slice induces a canonical bijection
   $\mu^{-1}(\alpha)/G_\alpha\to\Psi^{-1}(0)/G$. Whenever both orbit spaces
   carry their free-proper quotient manifold structures, this bijection is a
   diffeomorphism.
4. The pullbacks of the reduced form of $M_\alpha$ and of the zero-reduced form
   of $M\times\mathcal O^-$ to $\mu^{-1}(\alpha)$ agree, both being
   $\iota^*\omega$. Hence, whenever $0$ is a regular value of $\Psi$ and $G$
   acts freely and properly on $\Psi^{-1}(0)$, the shift map of item 3 is a
   symplectomorphism $M_\alpha\to\Psi^{-1}(0)/G$. Here both the $G_\alpha$-
   action on $\mu^{-1}(\alpha)$ and the $G$-action on $\Psi^{-1}(0)$ are
   assumed free and proper. Moreover $0$ is a regular
   value of $\Psi$ if and only if $\alpha$ is a regular value of $\mu$, and
   the $G$-action on $\Psi^{-1}(0)$ is free if and only if the $G_\alpha$-action
   on $\mu^{-1}(\alpha)$ is free.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a Hamiltonian $G$-space, a covector $\alpha$, and the orbit $\mathcal O$ with the opposite KKS form.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field, orbit and reduction suppliers.

[F1] The orbit inclusion $\Phi:\mathcal O\hookrightarrow\mathfrak g^*$ is an equivariant moment map for the coadjoint action with the KKS form. [[prop-coadjoint-orbit-inclusion-is-an-equivariant-moment-map]], [[thm-coadjoint-orbits-are-symplectic-manifolds]].

[F2] On a product with the diagonal action the moment maps add, and on the opposite symplectic manifold the moment map changes sign; the product form is symplectic. [[prop-product-and-opposite-symplectic-moment-maps]].

[F3] $\mu$ is equivariant with $\mu(g\cdot m)=g\cdot\mu(m)$, and the coadjoint action is linear in the second variable: $g\cdot(\beta_1-\beta_2)=g\cdot\beta_1-g\cdot\beta_2$. [[def-moment-map-and-component-hamiltonian]], [[def-coadjoint-representation-of-a-lie-group]].

[F4] If $\alpha$ is regular for $\mu$ and $G_\alpha$ acts freely and properly on $\mu^{-1}(\alpha)$, then the reduction $(M_\alpha,\omega_\alpha)$ exists with $\pi_\alpha^*\omega_\alpha=\iota^*\omega$. [[thm-marsden-weinstein-meyer-symplectic-reduction]].

[F5] Regularity of a value for a moment map is equivalent to local freeness of the action along the level. [[prop-regularity-of-a-moment-map-is-equivalent-to-local-freeness]].

[F6] The product form restricted to the slice $M\times\{\alpha\}$ pulls back to $\omega$, because the second factor contributes zero on vectors tangent to the slice. [[prop-product-and-opposite-symplectic-moment-maps]].

## Proof

**Proof technique:** direct.

1.1 By [F1] and [F2] the diagonal action on $M\times\mathcal O^-$ has moment map $\Psi(m,\beta)=\mu(m)-\beta$, and it is equivariant: $\Psi(g\cdot(m,\beta))=\mu(g\cdot m)-(g\cdot\beta)=g\cdot\mu(m)-g\cdot\beta=g\cdot\Psi(m,\beta)$ by [F3]. [F1, F2, F3]

2.1 The zero set is $\{(m,\beta):\beta=\mu(m)\}$ together with the condition $\beta\in\mathcal O$; the map $m\mapsto(m,\mu(m))$ is a $G$-equivariant bijection $\mu^{-1}(G\cdot\alpha)\to\Psi^{-1}(0)$, since $\Psi(m,\mu(m))=0$ and $\mu(m)\in\mathcal O$ exactly when $\mu(m)=g\cdot\alpha$ for some $g$, i.e. when $m\in g\cdot\mu^{-1}(\alpha)\subseteq\mu^{-1}(G\cdot\alpha)$. [step 1.1, F3]

3.1 Orbit-slice property: given $(m,\mu(m))\in\Psi^{-1}(0)$ with $\mu(m)=g\cdot\alpha$, the element $g^{-1}$ moves it to $(g^{-1}\cdot m,\alpha)$ with $\mu(g^{-1}\cdot m)=\alpha$, so every orbit meets the slice. Two slice points $(m,\alpha)$ and $(m',\alpha)$ lie in the same $G$-orbit exactly when $m'=h\cdot m$ with $h\cdot\alpha=\alpha$, i.e. $h\in G_\alpha$. Hence the inclusion of the slice induces a canonical bijection $\mu^{-1}(\alpha)/G_\alpha\to\Psi^{-1}(0)/G$. If both actions are free and proper, the quotient maps are submersions and their local smooth sections make the induced bijection and its inverse smooth. [step 2.1, F3, F4]

4.1 Under the stated regularity, freeness, and properness hypotheses, pulling the reduced form of $M_\alpha$ back along $\mu^{-1}(\alpha)\to M_\alpha$ gives $\iota^*\omega$ by [F4]; pulling the zero-reduced form of $M\times\mathcal O^-$ back along the composite $\mu^{-1}(\alpha)\to\Psi^{-1}(0)\to\Psi^{-1}(0)/G$ gives the restriction of $\Omega$ to the slice, which is $\iota^*\omega$ by [F6]. Both composite maps are surjective submersions, so the two forms agree under the identification of item 3. [step 3.1, F4, F6]

4.2 Regularity and freeness: for $m\in\mu^{-1}(\alpha)$, the infinitesimal stabilizers of $m$ for the $G$-action and for the $G_\alpha$-action coincide, because $g\cdot m=m$ implies $g\cdot\alpha=\alpha$ by equivariance; the stabilizer of the point $(m,\alpha)$ for the $G$-action on the slice is the same group. Hence, by [F5], $0$ is a regular value of $\Psi$ exactly when $\alpha$ is a regular value of $\mu$, and the $G$-action on $\Psi^{-1}(0)$ is free exactly when the $G_\alpha$-action on $\mu^{-1}(\alpha)$ is free. [step 3.1, F5]

5.1 Combining the items: $\Psi$ is an equivariant moment map (1.1), its zero set is the $G$-equivariant image of the saturated level (2.1), the orbit-slice bijection identifies the two quotients (3.1), and the forms and hypotheses correspond (4.1, 4.2); when the shifted zero reduction exists, the identification is a symplectomorphism $M_\alpha\to\Psi^{-1}(0)/G$. [step 4.1, step 4.2, A1] ∎
