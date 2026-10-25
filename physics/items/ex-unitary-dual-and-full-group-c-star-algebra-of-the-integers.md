---
id: ex-unitary-dual-and-full-group-c-star-algebra-of-the-integers
kind: example
title: Unitary dual and full group C star algebra of the integers
deps:
  - cor-the-abelian-group-c-star-algebra-recovers-pontryagin-duality
  - def-unitary-dual-of-a-locally-compact-group
  - def-full-group-c-star-algebra
  - def-reduced-group-c-star-algebra
  - def-left-and-right-regular-unitary-representations
  - thm-regular-representations-are-unitary-and-strongly-continuous
  - def-integrated-form-of-a-unitary-representation
  - def-pontryagin-dual-and-compact-open-topology
  - lem-compact-open-topology-on-a-discrete-domain-is-pointwise
  - lem-unit-circle-is-a-compact-metrizable-topological-group
  - lem-group-power-laws
  - thm-schurs-lemma-for-unitary-representations
  - thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g
  - thm-continuous-functional-calculus-for-bounded-normal-operators
  - lem-neumann-series
  - def-spectrum-and-resolvent-of-a-bounded-operator
  - def-self-adjoint-positive-unitary-and-normal-operator
  - def-axiom-of-choice
dependency_level: 6
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC, inherited from the abelian duality corollary, the representation correspondence and the functional calculus; the shift computation and the spectral argument use no further choice."
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix F, §F.4: Example F.4.7 (abelian groups) and §F.2, Example F.2.5(i)"
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 8, §8.B: Example 8.B.7(1) and the explicit description of C*(Z) = C(T)"
status: published
origin: pipeline
---
## Example

Assume the Axiom of Choice and use counting Haar measure on $\mathbb Z$.
The character group (Pontryagin dual) of the
discrete group $\mathbb Z$ is topologically isomorphic to $\mathbb T$ via
$z\mapsto\chi_z$, where $\chi_z(n)=z^n$; the unitary dual is in bijection with
$\mathbb T$ by the same parameter $z$, since every irreducible unitary
representation of the abelian group $\mathbb Z$ is one-dimensional
([[def-pontryagin-dual-and-compact-open-topology]],
[[def-unitary-dual-of-a-locally-compact-group]],
[[thm-schurs-lemma-for-unitary-representations]]). The full and reduced group
C\*-algebras are both isomorphic to $C(\mathbb T)$:
$$\widehat{\mathbb Z}_{\mathrm{Pontryagin}}\cong\mathbb T,\qquad C^*(\mathbb Z)\cong C(\mathbb T)\cong C^*_r(\mathbb Z),$$
the isomorphisms sending the group element $\delta_1\in C^*(\mathbb Z)$ (and
its image in $C^*_r(\mathbb Z)$) to the coordinate function $z\mapsto z$
([[def-full-group-c-star-algebra]], [[def-reduced-group-c-star-algebra]],
[[cor-the-abelian-group-c-star-algebra-recovers-pontryagin-duality]]).

## Facts & Assumptions

**Given:** AC; the discrete group $\mathbb Z$ with counting Haar measure; its unitary dual $\widehat{\mathbb Z}$; the left regular representation $\lambda$ on $\ell^2(\mathbb Z)$; the element $\delta_1\in L^1(\mathbb Z)$.

[F1] The Pontryagin dual consists of continuous characters into $\mathbb T$ with the compact-open topology; for discrete $\mathbb Z$ this is the topology of pointwise convergence ([[def-pontryagin-dual-and-compact-open-topology]], [[lem-compact-open-topology-on-a-discrete-domain-is-pointwise]]). Every character $\gamma$ is determined by $z=\gamma(1)\in\mathbb T$ and then $\gamma(n)=z^n$; conversely each $z\in\mathbb T$ gives a continuous character because $\mathbb Z$ is discrete. The map $z\mapsto(z^n)_{n\in\mathbb Z}$ is a group homomorphism by $(zw)^n=z^nw^n$, and it is continuous into $\mathbb T^{\mathbb Z}$ because each power map is continuous; its inverse is the continuous evaluation at $1$. Thus it is a topological group isomorphism ([[lem-unit-circle-is-a-compact-metrizable-topological-group]], [[lem-group-power-laws]]). For an irreducible unitary representation $\pi$ of $\mathbb Z$, $\pi(1)$ commutes with every $\pi(n)$ and is scalar by Schur's lemma; then all $\pi(n)$ are scalar and irreducibility forces the representation space to be one-dimensional. Conversely, every continuous unitary character is irreducible; thus the same parameters index the unitary dual ([[def-unitary-dual-of-a-locally-compact-group]], [[thm-schurs-lemma-for-unitary-representations]]).

[F2] For an LCH abelian group $G$, $C^*(G)$ is commutative with Gelfand transform an isometric $\ast$-isomorphism $C^*(G)\cong C_0(\widehat G)$, and the character attached to $\gamma\in\widehat G$ sends $f\in L^1(G)$ to $\int_Gf(g)\gamma(g)\,dg$; in particular $C^*(\mathbb Z)\cong C(\mathbb T)$ with $\delta_1$ sent to $z\mapsto\chi_z(1)=z$ ([[cor-the-abelian-group-c-star-algebra-recovers-pontryagin-duality]], [[def-full-group-c-star-algebra]]).

[F3] The left regular representation $\lambda$ of $\mathbb Z$ on $\ell^2(\mathbb Z)$ satisfies $(\lambda(n)\xi)(k)=\xi(k-n)$, so $U:=\lambda(1)$ is the bilateral shift $(U\xi)(k)=\xi(k-1)$; $\lambda$ is a strongly continuous unitary representation and $C^*_r(\mathbb Z)$ is the norm closure of $\{\lambda(f):f\in L^1(\mathbb Z)\}$, where $\lambda(f)=\sum_nf(n)\lambda(n)$ is the integrated form ([[def-left-and-right-regular-unitary-representations]], [[thm-regular-representations-are-unitary-and-strongly-continuous]], [[def-integrated-form-of-a-unitary-representation]], [[def-reduced-group-c-star-algebra]]).

[F4] If $b$ is an element of a unital Banach algebra with $\|b\|<1$, then $1-b$ is invertible with inverse $\sum_{n\ge0}b^n$ ([[lem-neumann-series]]); the spectrum $\sigma(T)$ is the set of $\lambda\in\mathbb C$ for which $T-\lambda I$ is not invertible ([[def-spectrum-and-resolvent-of-a-bounded-operator]]).

[F5] A unitary operator is normal, and for a bounded normal operator $T$ the continuous functional calculus is a unique isometric unital $\ast$-isomorphism $C(\sigma(T))\to C^*(I,T)$ sending the coordinate function to $T$ ([[thm-continuous-functional-calculus-for-bounded-normal-operators]], [[def-self-adjoint-positive-unitary-and-normal-operator]]).

## Verification

**Proof technique:** direct.

**Given:** AC, the group $\mathbb Z$ with counting Haar measure, its regular representation $\lambda$ on $\ell^2(\mathbb Z)$ and the shift $U=\lambda(1)$.

1.1 By [F1], $\widehat{\mathbb Z}=\{\chi_z:z\in\mathbb T\}$ with $\chi_z(n)=z^n$. By [F2] the Gelfand transform is an isometric $\ast$-isomorphism $C^*(\mathbb Z)\to C_0(\widehat{\mathbb Z})=C(\mathbb T)$, and under the identification $\widehat{\mathbb Z}\cong\mathbb T$ of [F1] the class of $\delta_1$ is sent to the function $\gamma\mapsto\gamma(1)$, that is to $z\mapsto z$; this proves the full-algebra statement. [F1, F2]

1.2 The operator $U$ is unitary and $(U\xi)(k)=\xi(k-1)$, and $\sigma(U)\subseteq\mathbb T$. Unitarity gives $\|U\|=\|U^{-1}\|=1$. If $|\lambda|>1$, then $U-\lambda I=-\lambda(I-\lambda^{-1}U)$ with $\|\lambda^{-1}U\|=|\lambda|^{-1}<1$, so $U-\lambda I$ is invertible by [F4]; if $0<|\lambda|<1$, then $U-\lambda I=U(I-\lambda U^{-1})$ with $\|\lambda U^{-1}\|=|\lambda|<1$, so it is invertible by [F4]; and $\lambda=0$ gives the invertible operator $U$. Hence $\sigma(U)\subseteq\mathbb T$. [F3, F4]

2.1 Conversely $\mathbb T\subseteq\sigma(U)$. For $z\in\mathbb T$ and $N\ge0$ put $\eta_N(k)=z^{-k}\mathbf 1_{[-N,N]}(k)/\sqrt{2N+1}$, a unit vector in $\ell^2(\mathbb Z)$; then $(U\eta_N)(k)=z\,z^{-k}\mathbf 1_{[-N,N]}(k-1)/\sqrt{2N+1}$, so $(U-zI)\eta_N$ has support in the two endpoints $\{-N,N+1\}$ and $\|(U-zI)\eta_N\|^2=2/(2N+1)\to0$. If $U-zI$ were invertible with inverse $S$, then $1=\|\eta_N\|\le\|S\|\,\|(U-zI)\eta_N\|\to0$, a contradiction; hence $z\in\sigma(U)$ and $\sigma(U)=\mathbb T$ by step 1.2. [F4, step 1.2]

3.1 The continuous functional calculus of the normal operator $U$ with $\sigma(U)=\mathbb T$ gives an isometric unital $\ast$-isomorphism $C(\mathbb T)\to C^*(I,U)$ sending the coordinate function $z\mapsto z$ to $U$; here $C^*(I,U)$ is the closed span of the powers $U^n$, $n\in\mathbb Z$, because $U^{-1}=U^*$. For $f\in L^1(\mathbb Z)$ the integrated form is $\lambda(f)=\sum_nf(n)U^n$; finitely supported $f$ give finite Laurent polynomials in $U$ and are dense in $L^1(\mathbb Z)=\ell^1(\mathbb Z)$, so by continuity of the integrated form the reduced group C\*-algebra $C^*_r(\mathbb Z)=\overline{\{\lambda(f)\}}$ equals $C^*(I,U)\cong C(\mathbb T)$. Under this isomorphism the image of the group element $\delta_1$ is $\lambda(\delta_1)=\lambda(1)=U$ and hence to the coordinate function $z\mapsto z$. [F3, F5, step 2.1]

4.1 The Axiom of Choice is inherited from the abelian duality corollary, the representation correspondence and the functional calculus; the shift computation and the spectral argument add no further choice ([[def-axiom-of-choice]]). [given] ∎ 
