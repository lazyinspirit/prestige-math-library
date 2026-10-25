---
id: def-equivariant-compact-symbol-k-theory
kind: definition
title: "Equivariant compact-support symbol classes and the normal Koszul class"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-equivariant-symbol-index
deps:
  - def-axiom-of-choice
dependency_roles:
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources:
  references:
    - title: "Graeme Segal, Equivariant K-theory, Publications Mathématiques de l'IHÉS
        34 (1968), 129–151"
      url: "https://www.numdam.org/item/PMIHES_1968__34__129_0/"
    - title: "M. F. Atiyah and I. M. Singer, The Index of Elliptic Operators: I,
        Annals of Mathematics 87 (1968), 484–530"
      url: "https://doi.org/10.2307/1970715"
dependency_level: 0
---

## Definition

Work in $\mathrm{ZF}+\mathrm{AC}$. Let $T=(\mathbb R/\mathbb Z)^r$, $r\ge0$, act continuously on a locally compact Hausdorff space $X$. All vector bundles below have finite complex rank and continuous $T$-linearizations. A **compact-support symbol triple** is $(A,B,s)$, where $A,B\to X$ are such bundles and $s:A\to B$ is an equivariant bundle map that is an isomorphism outside an invariant compact subset of $X$. Isomorphic triples have intertwining bundle isomorphisms. A homotopy of triples is such a triple over $X\times[0,1]$, with trivial action on $[0,1]$, whose noninvertibility set lies in $C\times[0,1]$ for some invariant compact $C\subset X$. A triple is elementary when $s$ is an isomorphism on all of $X$.

Define $K^0_{T,c}(X)$ to be the abelian group on isomorphism classes of these triples, subject to the relations that direct sum is addition, elementary triples are zero, and the two endpoints of a homotopy represent the same class. Define $K^1_{T,c}(X)=K^0_{T,c}(X\times\mathbb R)$, with trivial action on $\mathbb R$. Here $c$ means compact support. For any base $Y$, write $K_T^0(Y)$ for the Grothendieck ring of equivariant vector bundles on $Y$. On compact $Y$, the natural map $[W]\mapsto[W,0,0]$ identifies this with the triple presentation: $s$ can be homotoped to zero, and $(W,W,I)$ can be homotoped to $(W,W,0)$, giving precisely the direct-sum and inverse relations. On a point the bundle Grothendieck ring is the representation ring $R(T)$, whose multiplication is tensor product and whose element $[W]$ has character $g\mapsto\operatorname{tr}(g|W)$. Tensoring both bundles and the map of a triple with the pullback of a representation defines the $R(T)$-module structure on $K^q_{T,c}(X)$, $q=0,1$.

For a smooth compact $T$-manifold $M$, give $T^*M$ the cotangent action: $t$ sends $(x,\xi)$ to $(t\cdot x,\xi\circ(dt_x)^{-1})$. Let $A:C^\infty(M,E^+)\to C^\infty(M,E^-)$ be a first-order differential operator between smooth finite-rank equivariant complex bundles. The smooth bundle actions have fiber maps $\rho_t^\pm(x):E_x^\pm\to E_{t\cdot x}^\pm$, satisfying $\rho_e^\pm(x)=I$ and $\rho_{st}^\pm(x)=\rho_s^\pm(t\cdot x)\rho_t^\pm(x)$; on sections set $(U_t^\pm u)(x)=\rho_t^\pm(t^{-1}\cdot x)u(t^{-1}\cdot x)$. Require $AU_t^+=U_t^-A$. If $A=\sum_{|\alpha|\le1}a_\alpha(x)\partial_x^\alpha$ in local coordinates and frames, put $a(x,\xi)=\sum_{|\alpha|=1}a_\alpha(x)(i\xi)^\alpha$. The operator is elliptic when $a(x,\xi):E_x^+\to E_x^-$ is invertible for every real $\xi\ne0$. Its **compact symbol class** is

$$[\sigma(A)]=[\pi^*E^+,\pi^*E^-,a]\in K^0_{T,c}(T^*M),$$

where $\pi:T^*M\to M$ is the projection. The zero section is compact; the differential intertwining identity makes its symbol equivariant. Choose invariant smooth bundle metrics, a positive invariant smooth density, and invariant connections. Here $L^2(M,E)$ is the completion of smooth sections in the resulting squared-integral norm, and $H^1(M,E)$ is their completion in the norm $\|u\|_{H^1}^2=\|u\|_{L^2}^2+\|\nabla u\|_{L^2}^2$. A bounded realization $A:H^1(M,E^+)\to L^2(M,E^-)$ is **Fredholm** when $\ker A$ is finite dimensional, $\operatorname{ran}A$ is closed, and $\operatorname{coker}A:=L^2(M,E^-)/\operatorname{ran}A$ is finite dimensional. If this realization is Fredholm, its **analytic equivariant index** is $[\ker A]-[\ker A^*]\in R(T)$, where $A^*:L^2(M,E^-)\to H^1(M,E^+)$ is the bounded Hilbert-space adjoint for these norms; its kernel is the orthogonal complement of $\operatorname{ran}A$, hence represents the cokernel. These finite-dimensional kernels carry the induced $T$-representations. Fredholmness is a hypothesis here, not a consequence stipulated by the definition.

For a Hermitian equivariant complex vector bundle $W\to Y$, write $\pi_W:W\to Y$ for its projection. On $\pi_W^*\Lambda^\bullet W$ define $\varepsilon_w$ to be exterior multiplication by the tautological vector $w\in W_y$, and let $\varepsilon_w^*$ be its Hermitian adjoint. The **Koszul symbol** is $\kappa_W=(\varepsilon_w+\varepsilon_w^*)|_{\mathrm{ev}}$ from even to odd exterior powers. It satisfies $(\varepsilon_w+\varepsilon_w^*)^2=|w|^2I$, so it is invertible off the zero section. On a complex line with coordinate $z$, its even-to-odd map is multiplication by $z$; this fixes its Bott sign. If $Y$ is noncompact, this is a class with support proper over $Y$, not a compact-support class on $W$ by itself. Its zero-section restriction is the virtual bundle

$$\lambda_{-1}(W)=\sum_{j=0}^{\operatorname{rank}_{\mathbb C}W}(-1)^j[\Lambda^jW]\in K_T^0(Y).$$

For a real equivariant normal bundle $\nu\to F$ supplied with an invariant inner product, identify $\nu^*$ with $\nu$. The doubled normal bundle $\nu\oplus\nu^*$ has complex structure $J(v,w)=(-w,v)$, so is identified with $\nu_{\mathbb C}=\nu\otimes_{\mathbb R}\mathbb C$. The real inner product extends complex-bilinearly to a nondegenerate equivariant pairing on $\nu_{\mathbb C}$, hence gives a complex-linear equivariant isomorphism $\nu_{\mathbb C}\cong\nu_{\mathbb C}^*$. Its Koszul zero-section class $\lambda_{-1}(\nu_{\mathbb C})$ can therefore also be written $\lambda_{-1}(\nu_{\mathbb C}^*)$. This identification is asserted for a complexified real bundle, not for an arbitrary Hermitian complex bundle. For $g\in T$ fixing the base point $x\in F$, the character of this virtual fiber is

$$\operatorname{tr}\!\left(g\middle|\lambda_{-1}(\nu_{\mathbb C,x}^*)\right)=\det_{\mathbb C}(I-g|_{\nu_{\mathbb C,x}^*}).$$

This follows by expanding the exterior-power trace as the product of $1-\lambda$ over the complex eigenvalues $\lambda$. For orthogonal $g$, this determinant equals the real determinant $\det_{\mathbb R}(I-g|_{\nu_x})$ and is positive when $g$ has no fixed normal vector: nonreal eigenvalues occur in conjugate pairs, and a real eigenvalue different from $1$ is $-1$.

## Definition references

[[def-axiom-of-choice]]

[Segal, Equivariant K-theory: equivariant vector bundles and compact-support constructions](https://www.numdam.org/item/PMIHES_1968__34__129_0/)

[Atiyah–Singer, The Index of Elliptic Operators: I: compact symbol classes and the topological-index construction](https://doi.org/10.2307/1970715)

## Remarks

The triple presentation defines groups and symbol classes. Exactness, Mayer–Vietoris, a Thom isomorphism, independence of an embedding construction, and equality of topological and analytic indices are additional mathematical assertions requiring proofs. None is stipulated by this definition. In particular, defining the normal Koszul class does not establish the equivariant analytic index theorem.
