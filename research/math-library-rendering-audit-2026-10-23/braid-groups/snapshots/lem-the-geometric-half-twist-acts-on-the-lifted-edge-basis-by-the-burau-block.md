---
id: lem-the-geometric-half-twist-acts-on-the-lifted-edge-basis-by-the-burau-block
kind: lemma
title: "The geometric half twist acts on the lifted-edge basis by the Burau block"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
deps:
  - lem-the-cyclic-cover-deformation-retracts-onto-the-lifted-flower-and-spine
  - def-unreduced-burau-matrices
  - lem-braid-mapping-classes-lift-equivariantly-to-the-burau-cover
  - thm-the-artin-presentation-is-complete-for-geometric-braids
  - thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk
  - prop-the-geometric-action-on-meridians-is-the-artin-representation
  - def-elementary-geometric-half-twist
  - def-standard-meridians-of-a-punctured-disk
  - def-braid-group-by-the-artin-presentation
  - thm-homotopy-lifting-for-covering-maps
  - prop-relative-homology-is-functorial-for-maps-of-pairs
  - def-relative-singular-homology
  - def-singular-boundary-operator
  - def-standard-topological-simplex-and-its-affine-face-maps
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
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 1.6 (printed pp. 8-10): the action of sigma_i on the meridian pair (x_i,x_{i+1})"
      url: "https://arxiv.org/pdf/1010.0321"
      locator: "Section 1.6, printed pp. 8-10"
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

Assume AC (inherited from the mapping-class identification and the lift of
braid mapping classes). Let $\sigma_i$ be the $i$-th Artin generator,
represented in $\operatorname{Mod}(D^2,Q_n;\partial D^2)$ by the half twist of
the support disk $U_i$ of [[def-elementary-geometric-half-twist]], and let
$\tilde h_i$ be its basepoint-normalised lift to the Burau cover. Then, in the
relative lifted-edge basis $e_1,\dots,e_n$ of
[[def-unreduced-burau-matrices]], the automorphism $(\tilde h_i)_*$ of the
unreduced module $U=H_1(\tilde X,p^{-1}d;\mathbb Z)$ is given by
$$e_i\longmapsto(1-t)e_i+e_{i+1},\qquad e_{i+1}\longmapsto te_i,\qquad e_j\longmapsto e_j\ (j\notin\{i,i+1\}),$$
that is, by the block $B_i$ of [[def-unreduced-burau-matrices]]. Equivalently,
the topological braid action on $U$ is the matrix representation
$\rho^{\mathrm{mat}}_n$ on the nose, not merely up to conjugacy, in the frozen
basis. The sign and the orientation of $e_i$ are those fixed in the two cited
definitions; the deck levels enter through the convention
$e_i=t^{i-1}\epsilon_i$.

## Facts & Assumptions

**Given:** AC; the index $i$ with $1\le i\le n-1$; the positive half twist $\sigma_i$ of [[def-elementary-geometric-half-twist]]; a boundary-fixed homeomorphism representative $h_i$ of the mapping class of $\sigma_i$ under $B_n\cong\operatorname{Mod}(D^2,Q_n;\partial D^2)$; its basepoint-normalised lift $\tilde h_i$ of [[lem-braid-mapping-classes-lift-equivariantly-to-the-burau-cover]]; and the relative lifted-edge basis $e_1,\dots,e_n$ of [[def-unreduced-burau-matrices]].

[F1] Under the identification, the automorphism of $\pi_1(X,d)=F_n$ induced by $h_i$ satisfies $(h_i)_*(x_i)=x_ix_{i+1}x_i^{-1}$, $(h_i)_*(x_{i+1})=x_i$ and $(h_i)_*(x_j)=x_j$ for $j\notin\{i,i+1\}$ ([[prop-the-geometric-action-on-meridians-is-the-artin-representation]], [[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]], [[thm-the-artin-presentation-is-complete-for-geometric-braids]], [[def-standard-meridians-of-a-punctured-disk]]).

[F2] The based lift $\tilde h_i$ fixes the fibre $p^{-1}d$ pointwise (in particular each vertex $v_k$ of the spine), commutes with every deck transformation, and acts on $U$ by a $\Lambda_1$-module automorphism; for any based loop $\alpha$ at $d$, the path $\tilde h_i\circ(\text{lift of }\alpha\text{ from }v_k)$ is a lift of $h_i\circ\alpha$ based at $v_k$ ([[lem-braid-mapping-classes-lift-equivariantly-to-the-burau-cover]]).

[F3] Homotopic paths with fixed endpoints lift to homotopic paths with fixed endpoints through a covering ([[thm-homotopy-lifting-for-covering-maps]]), and a homeomorphism of pairs induces maps on relative homology functorially ([[prop-relative-homology-is-functorial-for-maps-of-pairs]], [[def-relative-singular-homology]]).

[F4] The spine $\Sigma$ of [[lem-the-cyclic-cover-deformation-retracts-onto-the-lifted-flower-and-spine]] realises $U\cong H_1(\Sigma,\Sigma^0)$; its relative chain group is free on the edge classes $\epsilon_j^{(k)}=t^k\epsilon_j$ ($1\le j\le n$, $k\in\mathbb Z$) with $\epsilon_j=\epsilon_j^{(0)}$ the level-$0$ class of the $j$-th edge, each edge $e_j^{(k)}$ oriented from $v_k$ to $v_{k+1}$. Its relative class corresponds to the actual lift $a_j^{(k)}$ of the standard meridian $x_j$ in $\tilde X$ from $v_k$: collapsing the lifted tethers sends this lasso path to the spine edge with constant initial and terminal segments. The design basis of [[def-unreduced-burau-matrices]] is $e_j=t^{j-1}\epsilon_j=\epsilon_j^{(j-1)}$.

[F5] A singular $2$-simplex has boundary its face $[1,2]$ minus its face $[0,2]$ plus its face $[0,1]$, under the barycentric coordinates of [[def-standard-topological-simplex-and-its-affine-face-maps]] and the boundary convention of [[def-singular-boundary-operator]]. This computes the path-concatenation and reversal identities used below.

## Proof

**Proof technique:** direct.

1.1 *Set-up.* By the hypotheses and [F1] the homeomorphism $h_i$ represents $\sigma_i$, fixes $d$, and induces the displayed meridian substitution; by [F2] the based lift $\tilde h_i$ exists, fixes $p^{-1}d$ pointwise, and acts on $U$ by a $\Lambda_1$-module automorphism. Choose the actual lifted meridian path $a_j^{(k)}$ in $\tilde X$ from $v_k$ to $v_{k+1}$. Under the spine identification its relative class is $\epsilon_j^{(k)}$ by [F4]. Since $\tilde h_i$ fixes the fibre, its image is another path in $\tilde X$ with these endpoints. Thus the following calculation applies $\tilde h_i$ to paths in its domain and transports their classes to the spine, without applying a map of $\tilde X$ directly to the quotient $\Sigma$. [F1, F2, F4]

1.2 *The action on the edge classes.* Fix $k$ and $j$. By [F2] the path $\tilde h_i\circ a_j^{(k)}$ is the lift of $h_i\circ x_j$ from $v_k$. If $j\notin\{i,i+1\}$, then $h_i\circ x_j$ is homotopic to $x_j$ relative to $d$ by [F1], so by [F3] the lift $\tilde h_i\circ a_j^{(k)}$ is homotopic rel endpoints to $a_j^{(k)}$ and $(\tilde h_i)_*(\epsilon_j^{(k)})=\epsilon_j^{(k)}$. If $j=i+1$, then $h_i\circ x_{i+1}$ is homotopic rel $d$ to $x_i$, so $\tilde h_i\circ a_{i+1}^{(k)}$ is homotopic rel endpoints to the lift of $x_i$ from $v_k$, which is $a_i^{(k)}$; hence $(\tilde h_i)_*(\epsilon_{i+1}^{(k)})=\epsilon_i^{(k)}$. If $j=i$, then $h_i\circ x_i$ is homotopic rel $d$ to the loop $x_ix_{i+1}x_i^{-1}$; its lift from $v_k$ is the concatenation $a_i^{(k)}\ast a_{i+1}^{(k+1)}\ast(a_i^{(k+1)})^{-1}$: the first factor lifts $x_i$ from $v_k$ to $v_{k+1}$, the second lifts $x_{i+1}$ from $v_{k+1}$ to $v_{k+2}$, and the third lifts $x_i^{-1}$ from $v_{k+2}$ back to $v_{k+1}$. For two composable paths $a,b$ between fibre points, put $P=a*b$ and map $\Delta^2$ to the path by $P(u_1/2+u_2)$; its boundary is $b-P+a$, so $[P]=[a]+[b]$ in relative homology. The map $a(u_1)$ has boundary $a^{-1}-c+a$, where $c$ is constant at its initial vertex and lies in the fibre, so $[a^{-1}]=-[a]$ ([[def-singular-boundary-operator]], [[def-standard-topological-simplex-and-its-affine-face-maps]]). Thus $(\tilde h_i)_*(\epsilon_i^{(k)})=\epsilon_i^{(k)}+\epsilon_{i+1}^{(k+1)}-\epsilon_i^{(k+1)}$. [F1, F2, F3, F4, F5, construct]

2.1 *The block in the design basis.* In the basis $e_j=\epsilon_j^{(j-1)}$ of [F4], step 1.2 gives $(\tilde h_i)_*(e_i)=(\tilde h_i)_*(\epsilon_i^{(i-1)})=\epsilon_i^{(i-1)}+\epsilon_{i+1}^{(i)}-\epsilon_i^{(i)}=(1-t)e_i+e_{i+1}$, because $\epsilon_i^{(i)}=t\epsilon_i^{(i-1)}=te_i$ and $\epsilon_{i+1}^{(i)}=e_{i+1}$; likewise $(\tilde h_i)_*(e_{i+1})=(\tilde h_i)_*(\epsilon_{i+1}^{(i)})=\epsilon_i^{(i)}=te_i$, and $(\tilde h_i)_*(e_j)=e_j$ for $j\notin\{i,i+1\}$. These are exactly the columns of the Burau block $B_i$ of [[def-unreduced-burau-matrices]] in the column convention, so $(\tilde h_i)_*$ acts as $B_i$; this is the assertion. [F4, step 1.2, algebra]

3.1 *Conclusion and the use of AC.* The topological action of the Artin generator $\sigma_i$ on the frozen relative lifted-edge basis equals the matrix $\rho^{\mathrm{mat}}_n(\sigma_i)=B_i$ of the matrix representation, on the nose and not merely up to conjugacy. AC enters exactly through the published mapping-class identification and the meridian action used in [F1]; the covering-theoretic and relative-homology steps are choice free. [F1, F4, step 1.2, step 2.1] ∎
