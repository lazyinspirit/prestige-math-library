---
id: lem-braid-mapping-classes-lift-equivariantly-to-the-burau-cover
kind: lemma
title: "Braid mapping classes lift equivariantly to the Burau cover"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 3
deps:
  - cor-homotopic-maps-induce-the-same-map-on-singular-homology
  - def-prism-operator-for-a-homotopy
  - thm-singular-chain-homotopy-formula
  - def-total-winding-homomorphism-of-the-punctured-disk
  - def-burau-infinite-cyclic-cover
  - lem-the-punctured-disk-is-path-connected-locally-path-connected-and-semilocally-simply-connected
  - thm-the-artin-presentation-is-complete-for-geometric-braids
  - thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk
  - prop-the-geometric-action-on-meridians-is-the-artin-representation
  - def-boundary-fixed-mapping-class-group-of-a-punctured-disk
  - thm-covering-space-lifting-criterion
  - thm-uniqueness-of-lifts-from-a-connected-space
  - thm-homotopy-lifting-for-covering-maps
  - thm-path-lifting-for-covering-maps
  - prop-covering-maps-are-local-homeomorphisms-with-discrete-fibres
  - def-covering-map-and-evenly-covered-neighbourhoods
  - def-locally-connected
  - thm-connected-and-locally-path-connected-implies-path-connected
  - def-monodromy-action-on-a-covering-fibre
  - lem-deck-transformations-correspond-to-normalizer-cosets
  - prop-deck-transformations-are-determined-by-one-point-and-act-freely
  - def-regular-covering
  - def-deck-transformation-and-deck-group
  - def-induced-singular-chain-map
  - prop-singular-chains-and-homology-are-covariantly-functorial
  - prop-relative-homology-is-functorial-for-maps-of-pairs
  - def-relative-singular-homology
  - def-reduced-burau-homology-module
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
    - title: "Vasudha Bharathram, Joan S. Birman and Tara E. Brendle, The Burau representation is faithful for n = 4, arXiv:2607.05283v1 (6 July 2026), Introduction and section 2 (printed pp. 1-5), and section 4 (Theorem 4.1)"
      url: "https://arxiv.org/pdf/2607.05283v1"
      locator: "Introduction and section 2, printed pp. 1-5"
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 1.6 (printed pp. 8-10) and section 4 (Garside structure, printed pp. 26-30)"
      url: "https://arxiv.org/pdf/1010.0321"
      locator: "Section 1.6, printed pp. 8-10"
    - title: "Allen Hatcher, Algebraic Topology, section 1.3 (covering spaces)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Section 1.3, printed pp. 56-64"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC (used exactly through the published identification of the geometric
braid group with the boundary-fixed punctured-disk mapping class group and the
geometric action on meridians). The identification of the abstract $B_n$ is
$\Psi\circ\varphi_n$: the completeness theorem makes
$\varphi_n:B_n\to G_n$ an isomorphism, and the mapping-class theorem makes
$\Psi:G_n\to\operatorname{Mod}(D^2,Q_n;\partial D^2)$ an isomorphism
([[thm-the-artin-presentation-is-complete-for-geometric-braids]],
[[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]]).
Let $h:(X,d)\to(X,d)$ be a homeomorphism
representing a braid class
$[h]\in\operatorname{Mod}(D^2,Q_n;\partial D^2)\cong B_n$ (so $h$ preserves
$Q_n$ setwise and fixes $\partial D^2$ pointwise, hence fixes $d$), with induced
map $h_*$ on $\pi_1(X,d)$. Then:

(1) $h_*$ preserves $K=\ker\omega$, because $\omega\circ h_*=\omega$
([[def-total-winding-homomorphism-of-the-punctured-disk]]);

(2) there is a unique lift $\tilde h:\tilde X\to\tilde X$ of $h$ with
$\tilde h(\tilde d)=\tilde d$, and it is a homeomorphism;

(3) $\tilde h$ commutes with every deck transformation:
$\tilde h\circ T_{t^k}=T_{t^k}\circ\tilde h$ for all $k\in\mathbb Z$,
equivalently $\tilde h$ fixes the whole fibre $p^{-1}d$ pointwise;

(4) $\widetilde{(h_1h_2)}=\tilde h_1\circ\tilde h_2$ and
$\widetilde{(h^{-1})}=(\tilde h)^{-1}$, and isotopic representatives with the
same base behaviour give lifts isotopic through deck-equivariant homeomorphisms fixing the fibre $p^{-1}d$;

(5) consequently $[h]\mapsto[\tilde h]$ descends to a homomorphism into the group of isotopy classes of deck-equivariant homeomorphisms of $\tilde X$ fixing $p^{-1}d$. The induced actions on $H_1(\tilde X)$ and $H_1(\tilde X,p^{-1}d)$ are well-defined homomorphisms into their $\Lambda_1$-module automorphism groups.

No lift depends on any further choice beyond the fixed basepoint lifts.

## Facts & Assumptions

**Given:** AC; the punctured disk $X=D^2\setminus Q_n$ with basepoint $d$; the Burau infinite cyclic cover $p:(\tilde X,\tilde d)\to(X,d)$ with $K=\ker\omega$ and deck group $\operatorname{Deck}(\tilde X/X)=\{T_{t^k}:k\in\mathbb Z\}$; a boundary-fixed homeomorphism $h$ of $(D^2,Q_n)$ and its restriction $h:(X,d)\to(X,d)$.

[F1] Under AC, $\omega\circ h_*=\omega$ for every homeomorphism representative $h$ of a braid mapping class, and $X$ is nonempty, path-connected, locally path-connected and semilocally simply connected ([[def-total-winding-homomorphism-of-the-punctured-disk]], [[lem-the-punctured-disk-is-path-connected-locally-path-connected-and-semilocally-simply-connected]]).

[F2] A based lift of a map from a path-connected locally path-connected space through a covering exists if and only if the induced subgroup lies in the image subgroup, and it is then unique; two lifts from a connected space agreeing at one point agree everywhere ([[thm-covering-space-lifting-criterion]], [[thm-uniqueness-of-lifts-from-a-connected-space]]).

[F3] The Burau cover is the connected covering with $p_*\pi_1(\tilde X,\tilde d)=K$, and $\pi_1(X,d)/K\cong\mathbb Z$ with $K$ normal ([[def-burau-infinite-cyclic-cover]]).

[F4] For the connected covering $p$ with $H=K$ normal, the assignment $\Theta:\pi_1(X,d)\to\operatorname{Deck}(\tilde X/X)$, $g\mapsto\tau_g$, is a surjective homomorphism with $\ker\Theta=K$ and $\tau_g(\tilde d)=\tilde d\cdot g$ under the monodromy right action; deck transformations are unique, act freely, and are determined by their value at $\tilde d$ ([[lem-deck-transformations-correspond-to-normalizer-cosets]], [[def-monodromy-action-on-a-covering-fibre]], [[prop-deck-transformations-are-determined-by-one-point-and-act-freely]]).

[F5] A covering is a local homeomorphism, and a covering of a locally path-connected base has locally path-connected total space: around any point choose an evenly covered open set, shrink it to a path-connected open set, and use the sheet through the point ([[prop-covering-maps-are-local-homeomorphisms-with-discrete-fibres]], [[def-covering-map-and-evenly-covered-neighbourhoods]], [[def-locally-connected]]). A connected locally path-connected space is path-connected ([[thm-connected-and-locally-path-connected-implies-path-connected]]).

[F6] Homotopies and paths lift uniquely through coverings ([[thm-homotopy-lifting-for-covering-maps]], [[thm-path-lifting-for-covering-maps]]).

[F7] A continuous map induces maps on singular chains and homology, functorially, and a map of pairs induces maps on relative homology, with the same functoriality ([[def-induced-singular-chain-map]], [[prop-singular-chains-and-homology-are-covariantly-functorial]], [[prop-relative-homology-is-functorial-for-maps-of-pairs]], [[def-relative-singular-homology]]).

[F8] The reduced Burau module $M_{\mathrm{red}}=H_1(\tilde X;\mathbb Z)$ carries the $\Lambda_1$-module structure defined by $t\mapsto(T_t)_*$ through the universal property of $\Lambda_1$ ([[def-reduced-burau-homology-module]]).

[F9] Under AC, the completeness isomorphism $\varphi_n:B_n\to G_n$ followed by the geometric mapping-class isomorphism $\Psi$ identifies the abstract $B_n$ with $\operatorname{Mod}(D^2,Q_n;\partial D^2)$, with the stated half-twist generators ([[thm-the-artin-presentation-is-complete-for-geometric-braids]], [[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]]).

[F10] The prism operator of a homotopy satisfies $g_\#-f_\#=\partial P_H+P_H\partial$. If the homotopy sends $A\times I$ into $B$, its prism terms send $C_*(A)$ into $C_{*+1}(B)$ and the identity descends to relative chains; hence homotopic maps of pairs induce the same relative homology maps ([[def-prism-operator-for-a-homotopy]], [[thm-singular-chain-homotopy-formula]], [[cor-homotopic-maps-induce-the-same-map-on-singular-homology]]).

## Proof

**Proof technique:** direct.

1.1 *Clause (1).* For $x\in K$ one has $\omega(h_*x)=\omega(x)=0$ by [F1], so $h_*(K)\subseteq K$; hence $h_*$ descends to an endomorphism $\bar h_*$ of $\pi_1(X,d)/K$. Since $\omega$ factors as the isomorphism $\bar\omega:\pi_1(X,d)/K\to\mathbb Z$ by [F3] and $\omega\circ h_*=\omega$, one has $\bar\omega\circ\bar h_*=\bar\omega$, so $\bar h_*$ is the identity of $\pi_1(X,d)/K$. [F1, F3]

1.2 *The cover is path-connected and locally path-connected.* The cover $\tilde X$ is connected by [F3] and locally path-connected by [F5], hence path-connected by [F5]. [F3, F5]

2.1 *Clause (2).* The homeomorphism $h$ fixes $d$, since $d\in\partial D^2$ and $h$ fixes $\partial D^2$ pointwise, so $h\circ p:(\tilde X,\tilde d)\to(X,d)$ is based with $(h\circ p)_*\pi_1(\tilde X,\tilde d)=h_*(K)\subseteq K=p_*\pi_1(\tilde X,\tilde d)$ by [F3] and step 1.1. By the lifting criterion in [F2] there is a unique lift $\tilde h:\tilde X\to\tilde X$ with $p\circ\tilde h=h\circ p$ and $\tilde h(\tilde d)=\tilde d$. Applying the same construction to $h^{-1}$ yields $g$ with $p\circ g=h^{-1}\circ p$ and $g(\tilde d)=\tilde d$. Then $g\circ\tilde h$ and $\operatorname{id}_{\tilde X}$ are both lifts of $p$ fixing $\tilde d$, because $p\circ g\circ\tilde h=h^{-1}\circ p\circ\tilde h=h^{-1}\circ h\circ p=p$, so $g\circ\tilde h=\operatorname{id}_{\tilde X}$ by uniqueness in [F2]; symmetrically $\tilde h\circ g=\operatorname{id}_{\tilde X}$. Hence $\tilde h$ is a homeomorphism. [F2, F3, step 1.1]

3.1 *Clause (3).* By [F4] every deck transformation is $\tau_g$ for some $g\in\pi_1(X,d)$, with $\tau_g(\tilde d)=\tilde d\cdot g$ and $\tau_g=\tau_{g'}$ exactly when $gK=g'K$. Let $\alpha_g$ be a loop at $d$ representing $g$ and let $\gamma$ be its lift from $\tilde d$, so $\gamma(1)=\tilde d\cdot g=\tau_g(\tilde d)$; then $\tilde h\circ\gamma$ is a lift of $h\circ\alpha_g$ starting at $\tilde h(\tilde d)=\tilde d$, so $(\tilde h\circ\gamma)(1)=\tilde d\cdot h_*g=\tau_{h_*g}(\tilde d)$ by [F4]. Hence $\tilde h(\tau_g\tilde d)=\tau_{h_*g}\tilde d$. Since $h_*$ induces the identity on $\pi_1(X,d)/K$ by step 1.1, the classes $h_*g$ and $g$ have the same coset modulo $K$, so $\tau_{h_*g}=\tau_g$ and $\tilde h$ fixes every point $\tau_g\tilde d$ of the fibre $p^{-1}d$. Now let $T$ be any deck transformation: both $\tilde h\circ T$ and $T\circ\tilde h$ are lifts of $h\circ p$, since $p\circ\tilde h\circ T=h\circ p\circ T=h\circ p$ and $p\circ T\circ\tilde h=p\circ\tilde h=h\circ p$, and they agree at $\tilde d$ because $\tilde h(T\tilde d)=T\tilde d=T(\tilde h\tilde d)$; by uniqueness in [F2] they are equal. [F2, F4, step 1.1, step 2.1]

4.1 *Clause (4).* For two boundary-fixed homeomorphisms $h_1,h_2$, both $\widetilde{h_1h_2}$ and $\tilde h_1\circ\tilde h_2$ are lifts of $(h_1h_2)\circ p$ fixing $\tilde d$, so they are equal by uniqueness in [F2]; the inverse statement is step 2.1. If $h_s$ is a homotopy of such homeomorphisms with $h_s(d)=d$ for all $s$, put $H(\tilde x,s):=h_s(p(\tilde x))$ and lift $H$ starting at $\tilde h$ by [F6]; then $s\mapsto\widetilde H(\tilde d,s)$ lifts the constant path at $d$ from $\tilde d$, so it is constant and $\widetilde H(\tilde d,1)=\tilde d$, and $\widetilde H(\cdot,1)$ is a based lift of $h_1$, hence equals $\tilde h_1$ by uniqueness. For each parameter $s$, uniqueness identifies $\widetilde H(\cdot,s)$ with the normalized lift of $h_s$, hence it is a homeomorphism by step 2.1 and deck-equivariant and fibre-fixing by step 3.1. Thus the lifted family is an isotopy of pairs, not equality of its endpoint maps. Homotopic maps induce the same homology maps; for the relative groups the same prism chain homotopy descends to the quotient chain complexes, since every prism of a simplex in the fibre stays in the fibre: each term of [[def-prism-operator-for-a-homotopy]] factors through that simplex times $I$. The chain identity of [[thm-singular-chain-homotopy-formula]] therefore passes to the relative quotient, proving equality of relative homology maps ([[cor-homotopic-maps-induce-the-same-map-on-singular-homology]]). [F2, F6, F10, step 2.1]

5.1 *Clause (5).* The assignment $[h]\mapsto[\tilde h]$ into isotopy classes is well defined by step 4.1, because two representatives of a mapping class are isotopic through boundary-fixed homeomorphisms preserving $Q_n$ setwise ([[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]]); it is multiplicative by step 4.1, so composing with the identification $B_n\cong\operatorname{Mod}(D^2,Q_n;\partial D^2)$ of [[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]], [[thm-the-artin-presentation-is-complete-for-geometric-braids]], in which AC enters, gives a homomorphism into those isotopy classes. The induced homology actions are independent of the representative by the lifted homotopy in step 4.1, and composition of normalized lifts makes them homomorphisms. For homology, each $\tilde h$ is a homeomorphism, so by [F7] it induces an automorphism of $H_1(\tilde X;\mathbb Z)$; by step 3.1 it commutes with every $(T_{t^k})_*$, hence with the ring homomorphism $\Lambda_1\to\operatorname{End}_{\mathbb Z}(M_{\mathrm{red}})$ determined by $t\mapsto(T_t)_*$ in [F8], and therefore it is a $\Lambda_1$-module automorphism of $M_{\mathrm{red}}$. Moreover $\tilde h$ maps the fibre $p^{-1}d$ to itself by step 3.1, so it is a homeomorphism of pairs $(\tilde X,p^{-1}d)\to(\tilde X,p^{-1}d)$ and by [F7] induces an automorphism of $H_1(\tilde X,p^{-1}d;\mathbb Z)$ commuting with the deck transformations of the pair; since the deck action determines the $\Lambda_1$-module structure on the relative group by the same universal-property construction as in [[def-reduced-burau-homology-module]], the induced automorphisms are likewise $\Lambda_1$-linear. AC is used only through [F1] and the mapping-class identification cited above; the covering-theoretic and homology steps are choice free. [F1, F7, F8, F9, step 3.1, step 4.1] ∎
