---
page: poisson-algebras-and-hamiltonian-representations
title: "Poisson Algebras, Symplectic Brackets, and Hamiltonian Actions"
status: published
items:
  - def-symplectic-comoment-map-and-hamiltonian-observable-action
  - prop-comoment-maps-act-on-observables-by-poisson-derivations
examples: []
---

This page develops the symplectic Poisson bracket, the equivariant moment-map bridge, and the induced Lie-algebra action on smooth observables. It reuses the existing canonical Poisson and moment-map results and adds the distinct comoment/action interface authorized for this page.

## Poisson algebra and symplectic bracket

In this page, a real Poisson algebra means a commutative associative real algebra with a real-bilinear Lie bracket that is a derivation in each argument. The theorem [[thm-smooth-functions-form-a-poisson-algebra]] proves that $C^\infty(M,\mathbb R)$ has this structure when $(M,\omega)$ is a symplectic manifold: $ω$ is closed and pointwise nondegenerate ([[def-symplectic-form-and-symplectic-manifold]]), multiplication is pointwise, and the bracket is the symplectic bracket below. The theorem is restricted to symplectic manifolds; it does not assert a result for a degenerate Poisson tensor.

The library fixes the Hamiltonian vector field by $\iota_{X_H}\omega=dH$ ([[def-hamiltonian-vector-field-and-hamiltonian-function]]). Pointwise nondegeneracy of $\omega$ gives a unique smooth $X_H$ for every smooth $H$ ([[thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions]]), so the bracket is defined for every pair of smooth functions. With this convention,

$$\{F,G\}=\omega(X_F,X_G)=dF(X_G)=X_G(F)=-X_F(G),$$

so evolution by $H$ differentiates an observable as $X_H(F)=\{F,H\}$. The definition is [[def-poisson-bracket-on-a-symplectic-manifold]]. The proof that this is a Poisson algebra uses the existing biderivation and Jacobi results, [[prop-poisson-bracket-is-bilinear-skew-and-a-derivation-in-each-entry]] and [[thm-poisson-bracket-satisfies-the-jacobi-identity]].

## Hamiltonian actions and moment maps

For a smooth left action ([[def-smooth-left-action-of-a-lie-group]]) of a finite-dimensional real Lie group $G$ on $(M,\omega)$, write $\mathfrak g=T_eG$ for its Lie algebra and $\mathfrak g^*=\mathcal L(\mathfrak g,\mathbb R)$ for its linear dual ([[def-algebraic-dual-and-linear-functional]]). Use the library fundamental field $\xi_M(p)=\left.\frac{d}{dt}\right|_{0}\exp_G(-t\xi)\cdot p$. An infinitesimal moment map $\mu:M\to\mathfrak g^*$ satisfies $d\mu^\xi=-\iota_{\xi_M}\omega$ for every $\xi\in\mathfrak g$, where $\mu^\xi(p)=\langle\mu(p),\xi\rangle$; an equivariant moment map also satisfies $\mu(g\cdot p)=g\cdot\mu(p)$ for the coadjoint action $g\cdot\alpha=\alpha\circ\operatorname{Ad}_{g^{-1}}$ ([[def-coadjoint-representation-of-a-lie-group]]). These conventions are fixed by [[def-symplectic-and-hamiltonian-lie-group-action]], [[def-moment-map-and-component-hamiltonian]], and [[def-fundamental-vector-field-of-a-left-action]]. The component equation gives $X_{\mu^\xi}=-\xi_M$ ([[prop-moment-map-components-generate-the-negative-infinitesimal-action]]).

Under the explicitly declared assumption $\mathrm{AC}_\omega$ ([[def-countable-choice]], the Axiom of Countable Choice), [[prop-equivariance-is-equivalent-to-the-moment-map-poisson-bracket-identity]] proves that equivariance implies $\{\mu^\xi,\mu^\eta\}=\mu^{[\xi,\eta]}$ for any Lie group, and that the converse holds when $G$ is connected in the topological sense ([[def-connected-space]]). For a disconnected group the identity detects equivariance under $G^0$, the connected component containing the identity, only; equivariance under representatives of the other components must be checked separately. Connectedness of $M$ is unnecessary when the identity is assumed on all of $M$; it is relevant only to checking the identity at one point via [[lem-nonequivariance-defect-of-an-infinitesimal-moment-map-is-a-constant-lie-algebra-two-cocycle]].

## Comoment maps and observable representations

For this page, a comoment map is a real-linear Lie-algebra map $J:\mathfrak g\to C^\infty(M,\mathbb R)$ for the symplectic Poisson bracket; its observable action is $\rho_J(\xi)F=\{J(\xi),F\}$. The exact definition is [[def-symplectic-comoment-map-and-hamiltonian-observable-action]]. The proposition [[prop-comoment-maps-act-on-observables-by-poisson-derivations]] proves directly from bilinearity, Jacobi, and the biderivation rule that $\rho_J$ is a Lie-algebra representation and that each operator obeys Leibniz rules for both pointwise multiplication and the Poisson bracket. The first assertion applies to any real Lie algebra, with no finite-dimensional hypothesis. It neither asserts an integrated group action nor a converse construction of $J$.

When $J(\xi)=\mu^\xi$ comes from an equivariant moment map, the same proposition identifies $\rho_J(\xi)F=\xi_M(F)$ in the library's negative-exponential convention. This forward implication carries $\mathrm{AC}_\omega$ through the actual moment-map suppliers and does not require $G$ connected. No converse for arbitrary $G$-representations by derivations is claimed.

The diagram summarizes the definition and proposition: the middle node is the image $J(\mathfrak g)\subseteq C^\infty(M,\mathbb R)$, and the proposition proves that each such function acts by a Poisson derivation. The diagonal arrow equals the composite by the definition of $\rho_J$; the diagram summarizes the result and is not used as a proof.

```tikzcd
\mathfrak g \arrow[r,"J"] \arrow[dr,"\rho_J"'] & J(\mathfrak g) \arrow[d,"a\mapsto\{a,-\}"] \\
& \operatorname{Der}_{\mathrm{Pois}}(C^\infty(M,\mathbb R))
```

## Reading prerequisites and source notes

The current plan requires [[algebraic-representation-and-tensor-symmetry-map]] and [[moment-maps-and-symplectic-reduction]] as page-level reading routes. The second is published and contains the moment-map definition and proposition used above. At this handoff, the batch-32 A page contains two draft carriers, [[def-unital-associative-algebra-representation]] and [[thm-associative-algebra-representations-are-unital-modules]], and its current page body explains the associative-representation/module interface. I inspected both carrier bodies, including the theorem proof. They remain draft and are not claimed independently accepted; none of this page's Poisson or moment-map claims uses them as an item-level logical supplier.

The following full-text treatments were inspected for their stated locators. Their conventions are translated here explicitly; citations provide context, while the linked library items carry the local arguments.

- [Ana Cannas da Silva, *Lectures on Symplectic Geometry*](https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf), Lecture 18, §§18.3–18.4 (printed pp. 108–109), and Lecture 22, §22.1 (printed pp. 133–135). This full lecture-note book states the symplectic Poisson bracket and Poisson-algebra axioms and identifies the comoment map with a Lie-algebra homomorphism for connected Hamiltonian actions. Its Jacobi and Leibniz verifications are exercises; the local published suppliers prove those prerequisites, and the new observable-action proposition gives its complete local calculation.
- [Eckhard Meinrenken, *Symplectic Geometry*](https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf), §4.2 (printed pp. 46–47) and §7.3, Definition 7.12, Lemma 7.14 and complete proof (printed pp. 83–85). The notes use the same negative-exponential generating field as the library. They prove the connected-group moment/comoment criterion and the Poisson Lie-bracket identities; the new proposition supplies the explicit arbitrary-comoment action and both derivation identities locally.
- [Nima Moshayedi, *Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory*](https://arxiv.org/pdf/2012.14662), §§2.7.3–2.7.15, 2.8.4, and 3.1.1 (PDF pp. 57–59, 63–64, 75–76). These notes give independent definitions and examples; the Jacobi and Leibniz verifications in §2.7 are exercises, so they are not used as substitutes for the linked local proofs. For actions, Moshayedi uses the positive-exponential generator $X^\#$ and $d\mu^X=\iota_{X^\#}\omega$; since $X^\#=-\xi_M$ here, this is the library equation $d\mu^\xi=-\iota_{\xi_M}\omega$.

Companion: [[poisson-algebras-and-hamiltonian-representations-examples]].
