---
id: ex-full-and-reduced-group-c-star-algebras-of-a-finite-group
kind: example
title: Full and reduced group C star algebras of a finite group
deps:
  - def-semisimple-ring
  - def-semisimple-module
  - def-unitary-dual-of-a-compact-group
  - thm-arbitrary-unitary-representations-of-compact-groups-decompose-discretely
  - thm-regular-representation-peter-weyl-decomposition
  - thm-l2-peter-weyl-orthonormal-basis
  - def-normalized-irreducible-matrix-coefficient-basis
  - def-left-and-right-regular-unitary-representations
  - def-full-group-c-star-algebra
  - def-reduced-group-c-star-algebra
  - thm-the-canonical-map-from-full-to-reduced-group-c-star-algebra
  - thm-unitary-representations-and-nondegenerate-l1-star-representations-correspond
  - thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g
  - cor-endomorphism-ring-is-a-matrix-ring
  - def-axiom-of-choice
dependency_level: 6
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC, inherited from the Peter-Weyl decomposition, the representation correspondence and the group C*-algebra constructions; the dimension count and norm comparison add no further choice."
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix F, §F.4: Definition F.4.6 (reduced algebra), Definition F.4.3 and the following correspondence paragraph; the finite-group block computation is proved locally"
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 8, §8.B: Example 8.B.7(2) (compact-group matrix-block description, specialized here to finite groups)"
status: published
origin: pipeline
---
## Example

Assume the Axiom of Choice. Let $G$ be a finite group, regarded as a compact
Hausdorff group, with normalized Haar probability
([[def-unitary-dual-of-a-compact-group]]). Then the full and reduced group
C\*-algebras coincide,
$$C^*(G)=C^*_r(G)\cong\bigoplus_{\pi\in\widehat G}\operatorname{End}(H_\pi)\cong\bigoplus_{\pi\in\widehat G}M_{d_\pi}(\mathbb C),\qquad d_\pi=\dim_{\mathbb C}H_\pi,$$
a finite-dimensional semisimple C\*-algebra
([[def-full-group-c-star-algebra]],
[[def-reduced-group-c-star-algebra]],
[[cor-endomorphism-ring-is-a-matrix-ring]]).

## Facts & Assumptions

**Given:** AC; a finite group $G$; its unitary dual $\widehat G$; the left regular representation $\lambda$ on $L^2(G)$; the dense embedding $L^1(G)\to C^*(G)$.

[F1] A finite group is compact Hausdorff, and every strongly continuous unitary representation $\rho$ of $G$ is a discrete Hilbert direct sum $\rho\cong\widehat\bigoplus_i\sigma_i$ of finite-dimensional irreducibles $\sigma_i\in\widehat G$; the dual $\widehat G$ is finite ([[thm-arbitrary-unitary-representations-of-compact-groups-decompose-discretely]], [[def-unitary-dual-of-a-compact-group]]).

[F2] The normalized irreducible matrix coefficient family $\mathcal B=(u^\pi_{ij})_{\pi\in\widehat G,\,1\le i,j\le d_\pi}$ is an orthonormal basis of $L^2(G)$, and the left regular representation satisfies $\lambda\cong\widehat\bigoplus_{\pi\in\widehat G}d_\pi\,\pi$ ([[thm-l2-peter-weyl-orthonormal-basis]], [[thm-regular-representation-peter-weyl-decomposition]], [[def-normalized-irreducible-matrix-coefficient-basis]], [[def-left-and-right-regular-unitary-representations]]).

[F3] For a unitary representation $\pi$ the integrated form $f\mapsto\pi(f)=\int_Gf(g)\pi(g)\,dg$ is a $\ast$-homomorphism of $L^1(G)$, and unitary representations correspond to nondegenerate star-representations through this construction ([[thm-unitary-representations-and-nondegenerate-l1-star-representations-correspond]], [[thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g]]).

[F4] $C^*(G)$ is the completion of $L^1(G)$ in the norm $\|f\|_{C^*}=\sup_\rho\|\rho(f)\|$, and $C^*_r(G)$ is the norm closure of $\{\lambda(f):f\in L^1(G)\}$ in $\mathcal B(L^2(G))$; the integrated form of $\lambda$ extends to a surjective star-homomorphism $C^*(G)\twoheadrightarrow C^*_r(G)$ which is the identity on $L^1(G)$ ([[def-full-group-c-star-algebra]], [[def-reduced-group-c-star-algebra]], [[thm-the-canonical-map-from-full-to-reduced-group-c-star-algebra]]).

[F5] $\operatorname{End}(H)\cong M_d(\mathbb C)$ as rings after a basis is chosen ([[cor-endomorphism-ring-is-a-matrix-ring]]). Choosing an orthonormal basis for the finite-dimensional Hilbert space makes the matrix of the Hilbert adjoint the conjugate transpose: its entries satisfy $\langle T^*e_j,e_i\rangle=\overline{\langle Te_i,e_j\rangle}$. Thus this identification is a $\ast$-isomorphism locally, rather than an extra assertion of the ring supplier.


[F6] A unital ring is semisimple when its left regular module is a direct sum of simple submodules ([[def-semisimple-ring]], [[def-semisimple-module]]).
## Verification

**Proof technique:** direct.

**Given:** AC, a finite group $G$, its unitary dual $\widehat G$, the regular representation $\lambda$ and $L^1(G)\subseteq C^*(G)$.

1.1 The evaluation map $\Phi:L^1(G)\to\bigoplus_{\pi\in\widehat G}\operatorname{End}(H_\pi)$, $f\mapsto(\pi(f))_{\pi\in\widehat G}$, is injective and $\ast$-multiplicative. It is $\ast$-multiplicative by [F3]; for injectivity suppose $\pi(f)=0$ for every $\pi\in\widehat G$. Then every matrix element $\langle\pi(f)e_j,e_i\rangle$ vanishes, and these are $(1/\sqrt{d_\pi})\int_G f(g)u^\pi_{ji}(g)\,d\mu(g)$, the inner products of $f$ with $\overline{u^\pi_{ji}}$ up to nonzero constants. Conjugation sends the complete orthonormal family of [F2] to another complete orthonormal family: it preserves norms and turns each inner product into its conjugate. Hence vanishing of all these inner products forces $f=0$. [F2, F3]

2.1 $\Phi$ is bijective. It is injective by step 1.1, $\dim L^1(G)=|G|$ for the finite group, and the orthonormal basis of [F2] is indexed by the triples $(\pi,i,j)$, so $\sum_{\pi\in\widehat G}d_\pi^2=|G|=\dim L^2(G)$ [F2]; hence the two finite-dimensional spaces have equal dimension and $\Phi$ is a linear isomorphism. Consequently $\Phi$ is a $\ast$-isomorphism of $L^1(G)$ onto the finite-dimensional C\*-algebra $\bigoplus_{\pi\in\widehat G}\operatorname{End}(H_\pi)$, and it is isometric for the transported norm $\|f\|_\Phi:=\|\Phi(f)\|=\max_{\pi\in\widehat G}\|\pi(f)\|$. [F2, step 1.1]

3.1 The full and reduced norms coincide on $L^1(G)$. By [F4] $\|f\|_{C^*}=\sup_\rho\|\rho(f)\|$ over all unitary representations $\rho$; by [F1] each $\rho$ is a discrete direct sum $\widehat\bigoplus_i\sigma_i$ of irreducibles, so $\|\rho(f)\|=\sup_i\|\sigma_i(f)\|$ and therefore $\sup_\rho\|\rho(f)\|=\max_{\pi\in\widehat G}\|\pi(f)\|=\|f\|_\Phi$. By [F2] $\lambda\cong\widehat\bigoplus_\pi d_\pi\pi$, so also $\|\lambda(f)\|=\max_\pi\|\pi(f)\|=\|f\|_\Phi$; as $C^*_r(G)$ is the completion of $\lambda(L^1(G))$, its norm on $L^1(G)$ is $\|f\|_\Phi$ as well. [F1, F2, F4, step 2.1]

4.1 The canonical surjection $C^*(G)\twoheadrightarrow C^*_r(G)$ of [F4] is isometric on the dense image of $L^1(G)$ by step 3.1, hence is injective on a dense subspace and therefore an isometric isomorphism of C\*-algebras; both algebras are the completion of $L^1(G)$ in the common norm $\|\cdot\|_\Phi$. That completion is $L^1(G)$ itself, because step 2.1 exhibits it as isometric to the finite-dimensional, hence complete, algebra $\bigoplus_\pi\operatorname{End}(H_\pi)$. Therefore $C^*(G)=C^*_r(G)\cong\bigoplus_{\pi\in\widehat G}\operatorname{End}(H_\pi)\cong\bigoplus_{\pi\in\widehat G}M_{d_\pi}(\mathbb C)$ by [F5], a finite-dimensional algebra with one matrix block per irreducible class. It is semisimple by [F6]: the regular module of $M_d(\mathbb C)$ is the direct sum of its column left ideals, each simple because matrix units send any nonzero column vector to every coordinate vector. The central block projections give the corresponding direct sum for the finite product of matrix algebras. [F4, F5, F6, step 3.1]

5.1 The Axiom of Choice is inherited from the Peter-Weyl decomposition, the representation correspondence and the group C\*-algebra constructions; the dimension count and the norm comparison add no further choice ([[def-axiom-of-choice]]). [given] ∎ 