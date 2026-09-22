---
id: lem-nonequivariance-defect-of-an-infinitesimal-moment-map-is-a-constant-lie-algebra-two-cocycle
kind: lemma
title: The nonequivariance defect of an infinitesimal moment map is a constant Lie-algebra two-cocycle
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-moment-map-and-component-hamiltonian, prop-moment-map-components-generate-the-negative-infinitesimal-action, prop-equivariance-is-equivalent-to-the-moment-map-poisson-bracket-identity, thm-hamiltonian-vector-field-map-is-a-lie-antihomomorphism, thm-fundamental-vector-fields-form-a-lie-algebra-homomorphism, thm-poisson-bracket-satisfies-the-jacobi-identity, prop-poisson-bracket-is-bilinear-skew-and-a-derivation-in-each-entry, prop-hamiltonians-for-a-fixed-vector-field-differ-by-a-locally-constant-function, thm-connectedness-characterisations, def-chevalley-eilenberg-differential, def-lie-algebra-over-a-field, def-countable-choice, def-poisson-bracket-on-a-symplectic-manifold]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §7.3, Remark 7.16 and the central-extension discussion, printed pages 85--86
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 26, §26.2 and the proof of Theorem 26.2, printed pages 165--166
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$ and let $M$ be connected. Let a symplectic left
action of $G$ on $(M,\omega)$ be given and let $\mu:M\to\mathfrak g^*$ satisfy
the component moment equations $d\mu^\xi=-\iota_{\xi_M}\omega$ for every
$\xi\in\mathfrak g$. Then the nonequivariance defect

$$c(\xi,\eta):=\{\mu^\xi,\mu^\eta\}-\mu^{[\xi,\eta]}, \qquad \xi,\eta\in\mathfrak g,$$

is a constant function on $M$ for each pair $(\xi,\eta)$, depends bilinearly
and alternatingly on $(\xi,\eta)$, and is a Chevalley--Eilenberg two-cocycle
with trivial coefficients:

$$c([\xi,\eta],\zeta)+c([\eta,\zeta],\xi)+c([\zeta,\xi],\eta)=0 \qquad\text{for all }\xi,\eta,\zeta\in\mathfrak g.$$

Consequently, if $G$ is connected, $\mu$ is coadjoint equivariant if and
only if $c=0$. For a general group the identity $c=0$ is equivalent to
equivariance under the identity component $G^0$, and equivariance under all of
$G$ requires in addition equivariance under one representative of each coset
of $G/G^0$ ([[prop-equivariance-is-equivalent-to-the-moment-map-poisson-bracket-identity]]).
In every case the identity $c=0$ need only be verified at one point of the
connected manifold $M$, because $c$ is constant there by the first part.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a connected symplectic manifold $(M,\omega)$ with a symplectic $G$-action, and a map $\mu:M\to\mathfrak g^*$ satisfying the component moment equations.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field and exponential interfaces cited in [F1]--[F4], and no further choice is made.

[F1] The component moment equations read $d\mu^\xi=-\iota_{\xi_M}\omega$, and the components $\mu^\xi$ depend linearly on $\xi$. [[def-moment-map-and-component-hamiltonian]].

[F2] $X_{\mu^\xi}=-\xi_M$ for every $\xi$. [[prop-moment-map-components-generate-the-negative-infinitesimal-action]].

[F3] With $\{F,G\}=\omega(X_F,X_G)$ one has $[X_F,X_G]=-X_{\{F,G\}}$, hence $d\{F,G\}=-\iota_{[X_F,X_G]}\omega$ by contraction with the nondegenerate form. [[thm-hamiltonian-vector-field-map-is-a-lie-antihomomorphism]], [[def-poisson-bracket-on-a-symplectic-manifold]].

[F4] Fundamental fields form a Lie-algebra homomorphism: $[\xi_M,\eta_M]=[\xi,\eta]_M$. [[thm-fundamental-vector-fields-form-a-lie-algebra-homomorphism]].

[F5] The Poisson bracket is real-bilinear and alternating, and it satisfies the Jacobi identity. [[prop-poisson-bracket-is-bilinear-skew-and-a-derivation-in-each-entry]], [[thm-poisson-bracket-satisfies-the-jacobi-identity]].

[F6] The bracket of a Lie algebra is bilinear, alternating and satisfies the Jacobi identity. [[def-lie-algebra-over-a-field]].

[F7] Our cocycle equation is the vanishing of the Chevalley--Eilenberg differential of the two-cochain $c$ with trivial coefficients: $(dc)(x_0,x_1,x_2)=-c([x_0,x_1],x_2)+c([x_0,x_2],x_1)-c([x_1,x_2],x_0)$. [[def-chevalley-eilenberg-differential]].

[F8] A smooth function whose differential vanishes is locally constant, hence constant on each connected component. [[prop-hamiltonians-for-a-fixed-vector-field-differ-by-a-locally-constant-function]].

[F9] The proposition relating equivariance and the bracket identity, together with the constancy proved here, identifies coadjoint equivariance with the identical vanishing of the defect. [[prop-equivariance-is-equivalent-to-the-moment-map-poisson-bracket-identity]].

## Proof

**Proof technique:** direct.

1.1 Fix $\xi,\eta\in\mathfrak g$. By [F2] and [F3], $$d\{\mu^\xi,\mu^\eta\}=-\iota_{[X_{\mu^\xi},X_{\mu^\eta}]}\omega=-\iota_{[-\xi_M,-\eta_M]}\omega=-\iota_{[\xi_M,\eta_M]}\omega,$$ and [F4] rewrites this as $-\iota_{[\xi,\eta]_M}\omega$, which equals $d\mu^{[\xi,\eta]}$ by the moment equation for $[\xi,\eta]$. Hence $dc(\xi,\eta)=0$. [F1, F2, F3, F4]

1.2 The defect is alternating and bilinear in $(\xi,\eta)$: it is a difference of the Poisson bracket of two functions depending linearly on the parameters and of the function $\mu^{[\xi,\eta]}$, which is bilinear in $(\xi,\eta)$ by multilinearity of the bracket and linearity of the components; skew-symmetry of the Poisson bracket and of the Lie bracket give $c(\eta,\xi)=-c(\xi,\eta)$ and $c(\xi,\xi)=0$. [F1, F5, F6]

2.1 By step 1.1 the smooth function $c(\xi,\eta)$ has zero differential, so it is locally constant by [F8]; since $M$ is connected, it is constant on $M$. [step 1.1, F8]

3.1 Jacobi for the Poisson bracket applied to $\mu^\xi,\mu^\eta,\mu^\zeta$ reads $$0=\{\{\mu^\xi,\mu^\eta\},\mu^\zeta\}+\{\{\mu^\eta,\mu^\zeta\},\mu^\xi\}+\{\{\mu^\zeta,\mu^\xi\},\mu^\eta\}.$$ Replacing each inner bracket by $\mu^{[\cdot,\cdot]}+c(\cdot,\cdot)$ and using that a constant Poisson-commutes with every function, the three $\mu$-terms combine into $\mu^{\lbrack\lbrack\xi,\eta\rbrack,\zeta\rbrack+\lbrack\lbrack\eta,\zeta\rbrack,\xi\rbrack+\lbrack\lbrack\zeta,\xi\rbrack,\eta\rbrack}=0$ by the Jacobi identity in $\mathfrak g$, and the three defect terms give exactly $c([\xi,\eta],\zeta)+c([\eta,\zeta],\xi)+c([\zeta,\xi],\eta)$. Hence this cyclic sum vanishes. By alternation it is the negative of the zero-based differential displayed in [F7], so it vanishes if and only if $dc=0$. [step 2.1, F1, F5, F6, F7]

4.1 Since $c$ is constant on the connected manifold $M$, the bracket identity of [F9] holds if and only if $c=0$, and it suffices to test $c=0$ at a single point of $M$. By [F9] that bracket identity is equivalent to equivariance under the identity component $G^0$, and hence to coadjoint equivariance of $\mu$ when $G$ is connected; for a general $G$, equivariance under all of $G$ additionally requires equivariance under one representative of each coset of $G/G^0$. [step 2.1, step 3.1, F9, A1] ∎
