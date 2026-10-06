---
id: prop-unreduced-burau-fits-an-exact-sequence-with-the-reduced-module
kind: proposition
title: "The unreduced module fits an exact sequence with the reduced module"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 8
deps:
  - def-unreduced-burau-matrices
  - def-unreduced-burau-relative-homology-module
  - def-reduced-burau-homology-module
  - lem-the-cyclic-cover-deformation-retracts-onto-the-lifted-flower-and-spine
  - lem-the-invariant-vector-and-covector-of-the-unreduced-burau
  - lem-unreduced-burau-matrices-satisfy-the-artin-relations
  - lem-braid-mapping-classes-lift-equivariantly-to-the-burau-cover
  - thm-long-exact-sequence-of-a-pair-in-singular-homology
  - thm-naturality-of-the-long-exact-sequence-of-a-pair
  - def-relative-homology-connecting-homomorphism-on-cycles
  - def-relative-singular-homology
  - def-singular-simplex-and-singular-chain-group-with-coefficients
  - def-singular-boundary-operator
  - def-standard-topological-simplex-and-its-affine-face-maps
  - def-standard-topologies
  - thm-path-connected-implies-connected
  - thm-continuous-image-of-a-connected-space
  - thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology
  - prop-zero-th-singular-homology-is-free-on-path-components
  - def-singular-chain-complex-and-singular-homology
  - def-the-laurent-polynomial-ring
  - lem-units-and-powers-of-the-laurent-polynomial-ring
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey (background on Burau matrices, the cyclic cover and absolute homology)"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
      locator: "Section 4.2, printed pp. 46-47; section 4.4, printed p. 52. Relative-module, basis and specialization calculations are supplied locally."
    - title: "Vasudha Bharathram, Joan S. Birman and Tara E. Brendle, The Burau representation is faithful for n = 4, arXiv:2607.05283v1 (6 July 2026), section 2 (printed pp. 1-5)"
      url: "https://arxiv.org/pdf/2607.05283v1"
      locator: "Section 2, printed pp. 1-5"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC (inherited through the lift of braid mapping classes, used only for
the $B_n$-equivariance clause below; the exact sequence and the connecting-map
computation are choice free). Let
$U=H_1(\tilde X,p^{-1}d;\mathbb Z)$,
$M_{\mathrm{red}}=H_1(\tilde X;\mathbb Z)$, and identify
$H_0(p^{-1}d;\mathbb Z)$ with the Laurent polynomial ring $\Lambda_1$ of
[[def-the-laurent-polynomial-ring]] by sending the class of the fixed lift
$\tilde d$ to $1$; let $\varepsilon:\Lambda_1\to\mathbb Z$ be the augmentation
of that item (sum of coefficients). Then the long exact sequence of the pair
gives an exact sequence of $\Lambda_1$-modules
$$0\longrightarrow M_{\mathrm{red}}\longrightarrow U\xrightarrow{\;\partial_*\;}\Lambda_1\xrightarrow{\;\varepsilon\;}\mathbb Z\longrightarrow0$$
in which the first map is induced by inclusion and is injective because
$H_1(p^{-1}d)=0$ and $H_0(\tilde X,p^{-1}d)=0$, and the last map is the
augmentation because $H_0(\tilde X)=\mathbb Z$ and every component of $\tilde X$
meets the fibre. In the relative lifted-edge basis of
[[def-unreduced-burau-matrices]] the connecting map is
$\partial_*(e_i)=t^{i-1}(t-1)$, equivalently $\partial_*=(t-1)\sigma$ against
the invariant covector $\sigma$ of
[[lem-the-invariant-vector-and-covector-of-the-unreduced-burau]]; it is
$B_n$-equivariant, and $\ker\partial_*$ is exactly the image of
$M_{\mathrm{red}}$, carried to $\ker\sigma=\{x:\sigma(x)=0\}$ under the basis
identification. The element $v=(1,\dots,1)^T$ is invariant but lies outside
$\ker\partial_*$ since $\partial_*(v)=(t-1)\sigma(v)\ne0$. **No integral
complement is asserted**: the exact sequence is not claimed to split over
$\Lambda_1$, The invariant complement obtained after extension to the fraction field
need not be an integral complement.

## Facts & Assumptions

**Given:** $n\ge1$, the cover $p:\tilde X\to X$ with deck group $\{T_{t^k}\}\cong\mathbb Z$, the fibre $A:=p^{-1}d=\{T_{t^k}\tilde d\}$, the modules $U=H_1(\tilde X,A;\mathbb Z)$ and $M_{\mathrm{red}}=H_1(\tilde X;\mathbb Z)$ with their $\Lambda_1$-structures, and the relative lifted-edge basis $e_1,\dots,e_n$ of $U$.

[F1] Singular simplices into the discrete set $A$ are constant: $\Delta^n$ is path-connected hence connected, a continuous image of a connected space is connected, and a connected subset of a discrete space is a single point ([[def-standard-topological-simplex-and-its-affine-face-maps]], [[thm-path-connected-implies-connected]], [[thm-continuous-image-of-a-connected-space]], [[def-standard-topologies]], [[def-singular-simplex-and-singular-chain-group-with-coefficients]]).

[F2] The singular boundary of a constant $n$-simplex is the alternating sum of its $n+1$ equal faces ([[def-singular-boundary-operator]]); $H_0$ of a space is free on its path components, and $H_0$ of a nonempty path-connected space is $\mathbb Z$ ([[prop-zero-th-singular-homology-is-free-on-path-components]], [[def-singular-chain-complex-and-singular-homology]]).

[F3] The pair $(\tilde X,A)$ gives the long exact sequence
$$\cdots\to H_1(A)\to H_1(\tilde X)\to H_1(\tilde X,A)\xrightarrow{\partial_*}H_0(A)\to H_0(\tilde X)\to H_0(\tilde X,A)\to0,$$
and the connecting map is given on a relative cycle by
$\partial_*[c]=[\partial c]$; a map of pairs induces a commuting morphism of the
long exact sequences, including the connecting maps
([[thm-long-exact-sequence-of-a-pair-in-singular-homology]],
[[def-relative-homology-connecting-homomorphism-on-cycles]],
[[def-relative-singular-homology]],
[[thm-naturality-of-the-long-exact-sequence-of-a-pair]]).

[F4] The deck group acts on the pair, making all terms of [F3] $\Lambda_1$-modules and all maps $\Lambda_1$-linear; the braid lifts of [[lem-braid-mapping-classes-lift-equivariantly-to-the-burau-cover]] fix $A$ pointwise and commute with the deck action, so they act trivially on $H_0(A)$ and make $\partial_*$ $B_n$-equivariant ([[def-reduced-burau-homology-module]], [[def-unreduced-burau-relative-homology-module]], [[lem-braid-mapping-classes-lift-equivariantly-to-the-burau-cover]], [[thm-naturality-of-the-long-exact-sequence-of-a-pair]]).

[F5] The spine $\Sigma$ of [[lem-the-cyclic-cover-deformation-retracts-onto-the-lifted-flower-and-spine]] identifies $U\cong H_1(\Sigma,\Sigma^0)$ with relative basis $\epsilon_j^{(k)}$; the connecting map of $(\Sigma,\Sigma^0)$ sends the oriented edge class from $v_k$ to $v_{k+1}$ to $[v_{k+1}]-[v_k]$; the design basis is $e_j=\epsilon_j^{(j-1)}$.

[F6] $\Lambda_1$ is an integral domain, $t-1\ne0$, and the augmentation $\varepsilon$ sends $t\mapsto1$, so $\varepsilon$ is $\Lambda_1$-linear and $\ker\varepsilon=(t-1)$ ([[def-the-laurent-polynomial-ring]], [[lem-units-and-powers-of-the-laurent-polynomial-ring]]).

## Proof

**Proof technique:** direct.

1.1 *The homology of the fibre.* Let $A=p^{-1}d$. Since $A$ is discrete, every singular simplex $\Delta^n\to A$ is constant by [F1]; hence $C_n(A;\mathbb Z)$ is free on $A$ and, by [F2], the boundary of the constant simplex at $a$ is $\frac{1+(-1)^n}{2}[a]$ in degree $n\ge1$. Therefore $\partial_1=0$ on $C_1(A)$ and $\partial_2$ is the identity on $C_2(A)$, so $H_1(A)=0$ and $H_0(A)=\bigoplus_{a\in A}\mathbb Z[a]$ is free on the fibre. [F1, F2]

1.2 *The $\Lambda_1$-identifications.* The deck action is free and transitive on $A=\mathbb Z$-torsor $\{T_{t^k}\tilde d\}$, so $H_0(A)$ is the free $\Lambda_1$-module of rank one on the class of $\tilde d$, with $t\cdot[T_{t^k}\tilde d]=[T_{t^{k+1}}\tilde d]$; we identify it with $\Lambda_1$, $[T_{t^k}\tilde d]\leftrightarrow t^k$. The spine is path-connected: its vertices $v_k$ are joined by finite strings of edges of type $1$, and every point of an edge is joined to an endpoint. The homotopy equivalences of [F5] therefore make $\tilde X$ path-connected, so $H_0(\tilde X)=\mathbb Z$ by [F2], and the map $H_0(A)\to H_0(\tilde X)$ sends every point class to the single generator; under the identification this is $\sum a_kt^k\mapsto\sum a_k=\varepsilon$, which is $\Lambda_1$-linear with kernel $(t-1)$ by [F6]. [F2, F5, F6]

1.3 *The connecting map on the basis.* Use the deck-equivariant identification $U\cong H_1(\Sigma,\Sigma^0)$ of [F5], under which $H_0(A)\cong H_0(\Sigma^0)$ identifies $[v_k]=[T_{t^k}v_0]$ with $t^k$; naturality of the pair sequence [F3] identifies the connecting maps. For the relative class of the oriented edge $e_i^{(k)}$ from $v_k$ to $v_{k+1}$, the boundary is $[v_{k+1}]-[v_k]$, so $\partial_*(\epsilon_i^{(k)})=[v_{k+1}]-[v_k]=t^{k+1}-t^k=t^k(t-1)$ in $\Lambda_1$; for the design basis $e_i=\epsilon_i^{(i-1)}$ this gives $\partial_*(e_i)=t^{i-1}(t-1)$. Hence for $x=\sum_ix_ie_i$ one has $\partial_*(x)=\sum_ix_it^{i-1}(t-1)=(t-1)\sum_it^{i-1}x_i=(t-1)\sigma(x)$, so $\partial_*=(t-1)\sigma$. Since $\Lambda_1$ is a domain and $t-1\ne0$ by [F6], $\ker\partial_*=\ker\sigma$. [F3, F5, F6, algebra]

2.1 *The exact sequence.* The long exact sequence [F3] of the pair reads $H_1(A)\to H_1(\tilde X)\to H_1(\tilde X,A)\xrightarrow{\partial_*}H_0(A)\xrightarrow{\varepsilon}H_0(\tilde X)\to H_0(\tilde X,A)\to0$. By step 1.1 the first term vanishes, so the first map is injective with image $\ker\partial_*$; by step 1.2 the map $\varepsilon$ is surjective, so $H_0(\tilde X,A)=0$ by exactness and the displayed segment is the asserted four-term sequence of $\Lambda_1$-modules. All maps are $\Lambda_1$-linear by [F4], so the sequence is a sequence of $\Lambda_1$-modules; the annihilation of $H_0(\tilde X,A)$ and the identification of the last map with $\varepsilon$ are step 1.2. [F3, F4, step 1.1, step 1.2]

3.1 *Consequences and non-splitting.* By exactness in step 2.1 the image of $M_{\mathrm{red}}$ in $U$ is exactly $\ker\partial_*$, which step 1.3 identifies with $\ker\sigma$; the invariant vector $v=(1,\dots,1)^T$ of [[lem-the-invariant-vector-and-covector-of-the-unreduced-burau]] satisfies $\partial_*(v)=(t-1)\sigma(v)=(t-1)(1+t+\cdots+t^{n-1})$, a product of two nonzero elements of the domain $\Lambda_1$ by [F6] and [[lem-the-invariant-vector-and-covector-of-the-unreduced-burau]](c), hence nonzero; so $v\notin\ker\partial_*$. Nothing in the argument produces a $\Lambda_1$-linear splitting of the sequence, and none is asserted; the integral structure is exactly the displayed four terms. AC enters only through the $B_n$-equivariance clause, via the braid lifts of [F4]; the exact sequence, the fibre computation, the connecting map and the non-splitting observation are choice free. [F4, F6, step 2.1, step 1.3] ∎
