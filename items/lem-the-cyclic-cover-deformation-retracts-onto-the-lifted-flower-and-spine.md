---
id: lem-the-cyclic-cover-deformation-retracts-onto-the-lifted-flower-and-spine
kind: lemma
title: "The cyclic cover retracts onto the lifted flower and has a deck-equivariant spine model"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 3
deps:
  - def-burau-infinite-cyclic-cover
  - lem-the-standard-flower-is-a-deformation-retract-with-free-meridian-basis
  - def-standard-meridians-of-a-punctured-disk
  - thm-homotopy-lifting-for-covering-maps
  - thm-uniqueness-of-lifts-from-a-connected-space
  - thm-covering-space-lifting-criterion
  - thm-path-lifting-for-covering-maps
  - prop-covering-spaces-are-stable-under-restriction-finite-products-and-pullback
  - def-covering-map-and-evenly-covered-neighbourhoods
  - prop-deck-transformations-are-determined-by-one-point-and-act-freely
  - def-deck-transformation-and-deck-group
  - def-cw-complex-with-closure-finiteness-and-weak-topology
  - def-oriented-cellular-chain-group
  - def-cellular-boundary-from-three-consecutive-skeleta
  - def-relative-homology-connecting-homomorphism-on-cycles
  - def-cellular-homology
  - thm-relative-homology-of-consecutive-cw-skeleta
  - thm-cellular-homology-computes-singular-homology
  - thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology
  - thm-long-exact-sequence-of-a-pair-in-singular-homology
  - thm-naturality-of-the-long-exact-sequence-of-a-pair
  - thm-five-lemma-for-modules
  - def-the-laurent-polynomial-ring
  - lem-units-and-powers-of-the-laurent-polynomial-ring
  - def-reduced-burau-homology-module
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
    - title: "Stephen J. Bigelow, The Lawrence-Krammer representation, arXiv:math/0204057, section 2.1 (printed pp. 2-3): background on an analogous cover-and-homology construction"
      url: "https://arxiv.org/pdf/math/0204057"
      locator: "Section 2.1, printed pp. 2-3; the explicit graph and cellular calculation here is local"
    - title: "Allen Hatcher, Algebraic Topology, section 1.3 (covering spaces) and section 2.2 (cellular homology and its agreement with singular homology)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Section 1.3, printed pp. 56-64; section 2.2, printed pp. 137-144"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $W\subseteq X$ be the standard flower, a deformation retract of
$X=D^2\setminus Q_n$ fixing $d$
([[lem-the-standard-flower-is-a-deformation-retract-with-free-meridian-basis]]),
with its $n$ positively oriented loop edges $C_1,\dots,C_n$ and its tether tree
$T$. For the Burau cover $p:\tilde X\to X$ of
[[def-burau-infinite-cyclic-cover]], let $\Sigma$ be the **lifted spine**:
vertices $v_k$ ($k\in\mathbb Z$), one for each point of $p^{-1}d$, with
$T_{t^k}v_0=v_k$, and for each $i\in\{1,\dots,n\}$ one edge
$e_i^{(k)}:v_k\to v_{k+1}$ for every $k\in\mathbb Z$, the positively oriented
lift of $C_i$ joining the level-$k$ tree to the level-$(k+1)$ tree; deck
translation acts by $t\cdot v_k=v_{k+1}$ and $t\cdot e_i^{(k)}=e_i^{(k+1)}$.
Then:

(1) the deformation retraction of $X$ onto $W$ lifts to a deck-equivariant
homotopy of pairs from $(\tilde X,p^{-1}d)$ onto $(p^{-1}(W),p^{-1}d)$ that
fixes every point of $p^{-1}d$ pointwise, so $p^{-1}(W)$ is a deformation
retract of $\tilde X$ by a deck-equivariant homotopy of pairs;

(2) collapsing each lifted tether tree to its root by a fixed contraction of
$T$ carried along by the deck action is a deck-equivariant homotopy equivalence
of pairs $(p^{-1}(W),p^{-1}d)\to(\Sigma,\Sigma^0)$; hence
$H_1(\tilde X)\cong H_1(\Sigma)$ and
$H_1(\tilde X,p^{-1}d)\cong H_1(\Sigma,\Sigma^0)$ as $\Lambda_1$-modules;

(3) the cellular chain complexes are free $\Lambda_1$-modules
$$C_1(\Sigma)=\bigoplus_{i=1}^n\Lambda_1 e_i,\qquad C_0(\Sigma)=\Lambda_1 v,\qquad \partial_1e_i=(t-1)v,$$
and $C_1(\Sigma,\Sigma^0)=\bigoplus_{i=1}^n\Lambda_1\epsilon_i$,
$C_0(\Sigma,\Sigma^0)=0$, where $e_i=e_i^{(0)}$, $v=v_0$ and $\epsilon_i$ is
the relative class of the level-$0$ $i$-th edge; consequently
$H_1(\Sigma)=\ker\partial_1$ is free of rank $n-1$ with basis $e_i-e_n$
($1\le i\le n-1$), and $H_1(\Sigma,\Sigma^0)=C_1(\Sigma,\Sigma^0)$ is free of
rank $n$ with basis $\epsilon_1,\dots,\epsilon_n$. No choice principle is used.

## Facts & Assumptions

**Given:** $n\ge1$ (the Burau cover exists under this hypothesis, as in [[def-burau-infinite-cyclic-cover]]); the flower $W=T\cup\bigcup_{i=1}^n C_i$ with its tether tree $T=\bigcup_i t_i$ and the truncated stems $s_i$ meeting only at $d$ and satisfying $T\cap C_i=\{p_i\}$; the cover $p:\tilde X\to X$ with deck group $\operatorname{Deck}(\tilde X/X)=\{T_{t^k}:k\in\mathbb Z\}$ and $t=T_{t^1}$, where $t$ raises total winding by $1$ ([[lem-the-standard-flower-is-a-deformation-retract-with-free-meridian-basis]], [[def-standard-meridians-of-a-punctured-disk]], [[def-burau-infinite-cyclic-cover]]).

[F1] The deformation retraction of $X$ onto $W$ has the form $H:X\times I\to X$ with $H(x,0)=x$, $H(x,1)=r(x)\in W$, and $H(w,u)=w$ for all $w\in W$; the tree $T$ is simply connected and $T\cap C_i=\{p_i\}$ ([[lem-the-standard-flower-is-a-deformation-retract-with-free-meridian-basis]], [[def-standard-meridians-of-a-punctured-disk]]).

[F2] Homotopies through a covering lift uniquely once an initial lift is fixed, and two lifts from a connected space agreeing at one point agree everywhere; the lifting criterion applies to based maps from path-connected locally path-connected spaces ([[thm-homotopy-lifting-for-covering-maps]], [[thm-uniqueness-of-lifts-from-a-connected-space]], [[thm-covering-space-lifting-criterion]], [[thm-path-lifting-for-covering-maps]]).

[F3] The restriction of a covering $q:E\to B$ to an arbitrary subspace $A\subseteq B$ is a covering $q^{-1}(A)\to A$: if $V$ is evenly covered with sheets $V_j$, then $V\cap A$ is evenly covered with sheets $V_j\cap q^{-1}(A)$, each mapped homeomorphically onto $V\cap A$. The published statement covers the open case ([[prop-covering-spaces-are-stable-under-restriction-finite-products-and-pullback]], [[def-covering-map-and-evenly-covered-neighbourhoods]]).

[F4] The deck group acts freely on $\tilde X$, and a deck transformation is determined by its value at one point of a connected total space ([[prop-deck-transformations-are-determined-by-one-point-and-act-freely]], [[def-deck-transformation-and-deck-group]]).

[F5] $W$ is a finite graph, hence a one-dimensional CW complex with weak topology; a locally finite graph embedded in a Hausdorff space carries the weak topology, and its cellular chain complex in degree one is free on the oriented edges with $d_1(e)=[\text{end}]-[\text{start}]$ under the above conventions ([[def-cw-complex-with-closure-finiteness-and-weak-topology]], [[def-oriented-cellular-chain-group]], [[def-cellular-boundary-from-three-consecutive-skeleta]], [[def-relative-homology-connecting-homomorphism-on-cycles]], [[def-cellular-homology]]).

[F6] Cellular homology computes singular homology, naturally with respect to cellular maps; a homotopy equivalence induces homology isomorphisms; a map of pairs induces a commuting morphism of the pair long exact sequences, so the five lemma identifies relative homology when the absolute and subspace maps are isomorphisms ([[thm-cellular-homology-computes-singular-homology]], [[thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology]], [[thm-long-exact-sequence-of-a-pair-in-singular-homology]], [[thm-naturality-of-the-long-exact-sequence-of-a-pair]], [[thm-five-lemma-for-modules]]).

[F7] $\Lambda_1=\mathbb Z[t^{\pm1}]$ is an integral domain and $t-1\ne0$; the module $M_{\mathrm{red}}=H_1(\tilde X;\mathbb Z)$ carries the $\Lambda_1$-action $t\mapsto(T_t)_*$ ([[lem-units-and-powers-of-the-laurent-polynomial-ring]], [[def-reduced-burau-homology-module]]).

## Proof

**Proof technique:** direct.

1.1 *Restriction of the cover to the closed subspaces $T$ and $W$.* Let $q:E\to B$ be a covering and $A\subseteq B$ any subspace. For $a\in A$ choose an evenly covered open $V\ni a$, so $q^{-1}(V)=\bigsqcup_jV_j$ with $q|V_j:V_j\to V$ a homeomorphism. Then $(q|_{q^{-1}A})^{-1}(V\cap A)=\bigsqcup_j(V_j\cap q^{-1}A)$, the pieces are open in $q^{-1}A$, and $q$ maps each piece homeomorphically onto $V\cap A$; hence $V\cap A$ is evenly covered and $q|_{q^{-1}A}$ is a covering. This applies to $A=T$ and $A=W$, which are closed and not open, and supplies the conclusion of [F3] beyond its published open case. [F3]

1.2 *Clause (1): lifting the deformation retraction.* Lift the homotopy $F(\tilde x,u):=H(p(\tilde x),u)$ through $p$ with initial lift $\operatorname{id}_{\tilde X}$, obtaining by [F2] a unique $\tilde H:\tilde X\times I\to\tilde X$ with $p\circ\tilde H=F$ and $\tilde H(\tilde x,0)=\tilde x$. For every deck transformation $T$, the map $(\tilde x,u)\mapsto T\tilde H(T^{-1}\tilde x,u)$ is a lift of $F$ with the same value $\tilde x$ at $u=0$, hence equals $\tilde H$ by uniqueness of homotopy lifts; thus $\tilde H_u\circ T=T\circ\tilde H_u$ for all $u$, and $\tilde H$ is deck-equivariant. If $\tilde x\in p^{-1}(W)$ then $p(\tilde H(\tilde x,u))=H(p(\tilde x),u)=p(\tilde x)$, so $u\mapsto\tilde H(\tilde x,u)$ is a path in the discrete fibre $p^{-1}(p(\tilde x))$, hence constant with value $\tilde x$; in particular $\tilde H$ fixes $p^{-1}d$ pointwise. Also $p(\tilde H(\tilde x,1))=r(p(\tilde x))\in W$, so $\tilde H_1(\tilde X)\subseteq p^{-1}(W)$. Therefore $\tilde H$ is a deck-equivariant homotopy of pairs from the identity to a retraction onto $(p^{-1}(W),p^{-1}d)$ fixing $p^{-1}(W)$ pointwise: a deformation retraction, which is clause (1). [F1, F2]

1.3 *The lifted tether trees.* By 1.1 the restriction $p^{-1}(T)\to T$ is a covering. Put $v_k:=T_{t^k}(\tilde d)$ and let $T_k$ be the connected component of $p^{-1}(T)$ containing $v_k$; the deck action permutes the components, so $T_{t^k}(T_0)=T_k$. For each component the projection $p|T_k:T_k\to T$ is a homeomorphism: since $T$ is simply connected and path-connected, the lifting criterion [F2] lifts $\operatorname{id}_T$ to a map $s:T\to T_k$ (the subgroup condition being vacuous), and then $s\circ p|T_k$ and $\operatorname{id}_{T_k}$ are two lifts of $p|T_k$ agreeing at $v_k$, so they are equal by uniqueness of lifts [F2]. Hence $p$ identifies $T_k$ with $T$, the fibrewise preimage of $d$ is exactly $\{v_k:k\in\mathbb Z\}$, the points $\sigma_i^{(k)}:=(p|T_k)^{-1}(p_i)$ are the unique points of $T_k$ over $p_i$, and the lift of $t_i$ is an edge $T_{i,k}$ of $T_k$ joining $v_k$ to $\sigma_i^{(k)}$. [F1, F2, F4]

1.4 *The lifted circles and the graph $p^{-1}(W)$.* Fix $i$ and parametrize $C_i$ by $c_i:[0,1]\to C_i$ periodically with $c_i(0)=p_i$, positively oriented. Since $\mathbb R$ is simply connected, the map $\mathbb R\to C_i$, $u\mapsto c_i(u-\lfloor u\rfloor)$, lifts through $p$ to a map $\varepsilon:\mathbb R\to\tilde X$ with $\varepsilon(0)=\sigma_i^{(0)}$; its image is connected and contains $\varepsilon(k)$ for every $k\in\mathbb Z$. The points $\varepsilon(k)$ lie over $p_i$, and $\varepsilon(k+1)$ is the endpoint of the lift of one full circle traversal from $\varepsilon(k)$, i.e. $\varepsilon(k)$ acted on by the monodromy of the class of $c_i$; that class has total winding $1$ because $\omega$ is conjugation invariant and $\omega(x_i)=1$, so by the defining property of $t$ in [[def-burau-infinite-cyclic-cover]] the monodromy is $T_t$ and $\varepsilon(k)=\sigma_i^{(k)}$ by induction. Every component of the $1$-manifold $p^{-1}(C_i)$ contains some point of $p^{-1}(p_i)$ (follow a lifted circle arc back to $p_i$), and $p^{-1}(C_i)\cap p^{-1}(T)=p^{-1}(p_i)=\{\sigma_i^{(k)}\}$, so the connected set $\varepsilon(\mathbb R)=\bigcup_kE_{i,k}$ equals all of $p^{-1}(C_i)$, with $E_{i,k}$ the lifted arc of $c_i$ from $\sigma_i^{(k)}$ to $\sigma_i^{(k+1)}$. Hence $p^{-1}(W)=\bigsqcup_kT_k\cup\bigcup_{i,k}E_{i,k}$ is the locally finite graph with vertices $v_k,\sigma_i^{(k)}$ and edges $T_{i,k},E_{i,k}$, a one-dimensional CW complex carrying the weak topology, and the deck action sends $T_{i,k}\mapsto T_{i,k+1}$ and $E_{i,k}\mapsto E_{i,k+1}$. [F1, F4, F5]

1.5 *Clause (3): the cellular chain complex.* The CW complex $\Sigma$ has zero-cells $\{v_k\}$ and one-cells $\{e_i^{(k)}\}$ and no higher cells. With integral coefficients, $C_1(\Sigma;\mathbb Z)=\bigoplus_{i,k}\mathbb Z e_i^{(k)}$ and $C_0(\Sigma;\mathbb Z)=\bigoplus_k\mathbb Z v_k$ by [F5], and the cellular boundary is $d_1(e_i^{(k)})=v_{k+1}-v_k$: the relative class of the oriented edge is sent by the connecting morphism to the class of its boundary $[\partial e_i^{(k)}]=[v_{k+1}]-[v_k]$ under the conventions of [F5]. The deck action makes these chain groups $\Lambda_1$-modules with $t\cdot e_i^{(k)}=e_i^{(k+1)}$ and $t\cdot v_k=v_{k+1}$; writing $e_i:=e_i^{(0)}$ and $v:=v_0$, they are free modules $C_1(\Sigma)=\bigoplus_{i=1}^n\Lambda_1 e_i$ and $C_0(\Sigma)=\Lambda_1 v$, and $\Lambda_1$-linearity of $d_1$ gives $\partial_1e_i=(t-1)v$. For the pair $(\Sigma,\Sigma^0)$ one has $C_1(\Sigma,\Sigma^0)=C_1(\Sigma)$ and $C_0(\Sigma,\Sigma^0)=0$, so $C_1(\Sigma,\Sigma^0)=\bigoplus_{i=1}^n\Lambda_1\epsilon_i$ with $\epsilon_i$ the relative class of $e_i$ and $H_1(\Sigma,\Sigma^0)=C_1(\Sigma,\Sigma^0)$ because there are no $2$-cells. [F5, algebra]

2.1 *Clause (2): the collapse onto the spine.* Let $\Sigma$ be the quotient of $p^{-1}(W)$ obtained by collapsing each tree $T_k$ to the vertex $v_k$; its cells are the vertices $v_k$ and the images $e_i^{(k)}$ of the arcs $E_{i,k}$, each an edge $v_k\to v_{k+1}$, so $\Sigma$ is the lifted spine with $\Sigma^0=\{v_k\}=p^{-1}d$ and with deck translation $t\cdot v_k=v_{k+1}$, $t\cdot e_i^{(k)}=e_i^{(k+1)}$. Let $q:p^{-1}(W)\to\Sigma$ be the quotient map. Parametrize each tether edge $T_{i,k}$ by $u\in[0,1]$ from $v_k$ to $\sigma_i^{(k)}$, each circle edge $E_{i,k}$ by $v\in[0,1]$ from $\sigma_i^{(k)}$ to $\sigma_i^{(k+1)}$, and let $L_{i,k}:[0,3]\to p^{-1}(W)$ be the concatenation of $T_{i,k}$, $E_{i,k}$ and the reverse of $T_{i,k+1}$. Define $j:\Sigma\to p^{-1}(W)$ by $j(v_k)=v_k$ and by mapping $e_i^{(k)}$ onto the arc $L_{i,k}$ increasingly; then $j$ is continuous. On the unit parameter $v$ of every spine edge, $q\circ j$ has parameter $\eta(v)=\max(0,\min(1,3v-1))$: the two tether thirds collapse. The interpolation $(1-u)\eta(v)+uv$ defines a deck-equivariant homotopy $qj\simeq\operatorname{id}_\Sigma$ relative to the vertices. Define $\tilde H_u$ on $p^{-1}(W)$ by $\tilde H_u(T_{i,k}(v)):=T_{i,k}((1-u)v)$ and $\tilde H_u(E_{i,k}(v)):=L_{i,k}(\psi_u(v))$ with $\psi_u(v):=(1-u)(1+v)+3uv$. The values at $\sigma_i^{(k)}$ agree from the two incident circle edges and the tether, at $\sigma_i^{(k+1)}$ likewise, and at $v_k$ all definitions give $v_k$; on the locally finite closed-cell cover this defines a continuous homotopy fixing every root $v_k$, with $\tilde H_0=\operatorname{id}$ and $\tilde H_1=j\circ q$. Hence $q$ is a homotopy equivalence of pairs with homotopy inverse $j$: $q\circ j\simeq\operatorname{id}_\Sigma$ relative to $\Sigma^0$ and $j\circ q\simeq\operatorname{id}$ through the homotopy $\tilde H$, which fixes $\Sigma^0=p^{-1}d$ and is deck-equivariant because every formula is stated in the canonical cell parameters and $T_{t^k}\circ L_{i,l}=L_{i,l+k}$. [F4, F5, step 1.4]

3.1 *The homology isomorphisms are $\Lambda_1$-linear.* By step 1.2 the inclusion-induced map $H_1(p^{-1}(W))\to H_1(\tilde X)$ is an isomorphism, natural for the deck actions, and it maps $H_1(p^{-1}d)$ identically; by step 2.1 the homotopy equivalence $q$ induces isomorphisms $H_n(p^{-1}(W))\to H_n(\Sigma)$ and, by the five lemma applied to the commuting map of pair long exact sequences established in [F6], an isomorphism $H_1(p^{-1}(W),p^{-1}d)\to H_1(\Sigma,\Sigma^0)$, while $q|_{p^{-1}d}$ is the identity onto $\Sigma^0$. Since all these maps commute with the deck actions, they are isomorphisms of $\Lambda_1$-modules for the structures induced by those actions, and the absolute case gives $H_1(\tilde X)\cong H_1(\Sigma)$ while the relative case gives $H_1(\tilde X,p^{-1}d)\cong H_1(\Sigma,\Sigma^0)$; this is clause (2). [F6, F7, step 1.2, step 2.1]

4.1 *The kernel and the ranks.* Write an element of $C_1(\Sigma)$ as $\sum_{i=1}^na_ie_i$ with $a_i\in\Lambda_1$. Since $d_1$ is $\Lambda_1$-linear and $\partial_1e_i=(t-1)v$, one has $\partial_1\bigl(\sum_ia_ie_i\bigr)=\bigl(\sum_ia_i\bigr)(t-1)v$; as $C_0(\Sigma)=\Lambda_1v$ is free of rank one and $\Lambda_1$ is a domain with $t-1\ne0$ by [F7], this vanishes exactly when $\sum_ia_i=0$. Hence $H_1(\Sigma)=\ker\partial_1=\bigoplus_{i=1}^{n-1}\Lambda_1(e_i-e_n)$, free of rank $n-1$, and $H_1(\Sigma,\Sigma^0)=\bigoplus_{i=1}^{n}\Lambda_1\epsilon_i$ is free of rank $n$; this is clause (3). [F7, step 3.1, step 1.5, algebra]

5.1 *Conclusion.* Clause (1) is step 1.2, clause (2) is step 3.1, and clause (3) is step 4.1; all constructions used one fixed contraction data set and explicit formulas, so no choice principle is used. [step 1.2, step 3.1, step 4.1] ∎
