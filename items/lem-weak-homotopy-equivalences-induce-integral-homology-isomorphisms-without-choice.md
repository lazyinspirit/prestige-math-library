---
id: "lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice"
kind: "lemma"
title: "Weak homotopy equivalences induce integral homology isomorphisms without choice"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-a-weak-equivalence-of-cw-complexes-has-vanishing-relative-homotopy-groups","lem-interval-exponential-law-and-quotient-homotopies","thm-quotient-universal-property","lem-relative-cubical-disk-model-and-compression","prop-relative-cw-inclusions-are-cofibrations","lem-finite-choice","lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex","def-relative-singular-homology","thm-singular-chain-homotopy-formula","thm-long-exact-sequence-of-a-pair-in-singular-homology"]
sources:
  references:
    - title: Hatcher, Algebraic Topology, Lemma4.6 pp346–347 and Proposition4.21
        pp356–357; complete proofs read, finite-choice and finite
        face-realization details supplied locally
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Every weak homotopy equivalence $f:X\to Y$ of topological spaces induces isomorphisms $H_k(X;\mathbb Z)\to H_k(Y;\mathbb Z)$ for all $k\ge0$, without any choice principle. More generally, if $A\subseteq X$, $B\subseteq Y$, $f(A)\subseteq B$, and both $f$ and $f|_A:A\to B$ are weak homotopy equivalences, then the induced maps $H_k(X,A;\mathbb Z)\to H_k(Y,B;\mathbb Z)$ are isomorphisms. No separation or CW hypothesis is imposed on these spaces.

## Facts & Assumptions

[F1] [[lem-a-weak-equivalence-of-cw-complexes-has-vanishing-relative-homotopy-groups]] defines the ordinary mapping cylinder, embeds its source as its free end, and proves the component and relative-group criterion without choice.

[F2] [[lem-relative-cubical-disk-model-and-compression]] compresses a null relative disk into its subspace while fixing its whole boundary, at its actual marked boundary image, also in degree one.

[F3] [[prop-relative-cw-inclusions-are-cofibrations]] extends a homotopy from a CW subcomplex into an arbitrary target by an explicit choice-free construction. [[lem-finite-choice]] allows finitely many witness selections after a finite enumeration.

[F4] [[lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex]] constructs finite CW complexes from supplied finite attachments and gives the map-out criterion.

[F5] [[def-relative-singular-homology]] describes finite relative cycles and their equivalence. [[thm-singular-chain-homotopy-formula]] gives $g_\#-f_\#=\partial P+P\partial$, with its separate degree-zero formula and the explicit prism chains.

[F6] [[thm-long-exact-sequence-of-a-pair-in-singular-homology]] gives the pair sequence. Its connecting map is induced by the boundary of a lifted chain, and therefore commutes with continuous maps of pairs.

[F7] [[thm-quotient-universal-property]] descends maps from the mapping-cylinder presentation, and [[lem-interval-exponential-law-and-quotient-homotopies]] does the same for homotopies after product with $I$.

## Proof

**Given:** The map and, for the relative conclusion, the subspaces and two weak-equivalence hypotheses. All chains have integer coefficients.

1.1 First let $(T,S)$ be any pair for which every component of $T$ meets $S$ and every positive relative group at every $s\in S$ is trivial. For a finite CW pair $(K,L)$ and $u:(K,L)\to(T,S)$, we construct a homotopy rel $L$ into $S$. Order the finitely many cells of $K\setminus L$ by dimension. At a zero-cell, choose a path from its current image into $S$. At a positive-dimensional cell, once its boundary has image in $S$, apply [F2] based at the image of its marked boundary point to compress its characteristic disk, fixing the entire boundary. At each dimension these finitely many homotopies and the stationary map on $L\cup K^{d-1}$ agree on the attachment identifications. They give a homotopy on $L\cup K^d$, and [F3] extends it to $K$. A finite concatenation finishes. These operations use finitely many existential witnesses, justified by [F3], and no infinite family of choices. If $K=L$ the homotopy is stationary. If $S$ is empty, the component hypothesis forces $T$ empty and only the empty-domain case occurs. [F2, F3, given]

1.2 Let $c=\sum_\sigma n_\sigma\sigma$ be one relative $k$-cycle in $(T,S)$, with finite support and $\partial c\in C_{k-1}(S)$. Form the finite collection $E_j$ of all distinct singular $j$-simplices obtained as ordered face restrictions of its support, for $0\le j\le k$. Attach one geometric $j$-simplex for each member $\tau\in E_j$, identifying its $i$th face with the simplex labeled by $\tau\delta_i$ using the order-preserving affine map. The face identities ensure agreement on intersections of faces. The construction proceeds by increasing dimension, so interiors are never identified and the boundaries land in the previously constructed finite skeleton. A simplex is a disk with boundary a sphere: radially project from its barycenter, using on each unit direction the first intersection with a face, whose distance is the minimum of the finitely many positive intersection parameters. This gives the continuous radial disk parametrization, including the origin. Thus [F4] applies and gives a finite CW complex $K$ with characteristic simplex maps $e_\tau$. There is a continuous map $v:K\to T$ whose composite with $e_\tau$ is $\tau$, by the same face agreements. This construction includes degenerate singular simplices as distinct cells in their own dimensions; it never collapses their interiors merely because their images are degenerate. [F4, F5, given]

2.1 Put $\widetilde c=\sum_\sigma n_\sigma e_\sigma\in C_k(K)$. The literal equality $e_\tau\delta_i=e_{\tau\delta_i}$ shows that the coefficient of each characteristic $(k-1)$-simplex in $\partial\widetilde c$ equals the corresponding coefficient of $\partial c$. Distinct labels in the same dimension have disjoint open cells, hence distinct characteristic maps. Let $L$ be the union of the cells labeled by the nonzero terms of $\partial c$ and all their faces. These labels have images in $S$, so $v(L)\subseteq S$; it is a subcomplex by construction. Therefore $\partial\widetilde c\in C_{k-1}(L)$ and $v_\#\widetilde c=c$. For $k=0$, take $L=\varnothing$ and use that the degree-zero boundary is zero. A zero chain represents zero directly and requires no simplex construction. [F4, F5, step 1.2]

3.1 Apply step 1.1 to $v:(K,L)\to(T,S)$. Its endpoint $w$ has image in $S$. The prism identity [F5] applied to $\widetilde c$ gives $$w_\#\widetilde c-c=\partial P\widetilde c+P\partial\widetilde c.$$ The first term on the left is a chain in $S$. The last term is also a chain in $S$, since the homotopy on $L$ stays in $S$. Thus $c$ is zero modulo boundaries and chains in $S$. In degree zero the last term is absent and the same conclusion follows. This proves $H_k(T,S)=0$ for every $k\ge0$. Only the finitely many cells associated with the particular chain were compressed; no simultaneous choice over all cycles has been made. [F5, step 1.1, step 2.1]

4.1 Apply [F1] to the given weak equivalence, with $T=M_f$ and $S=j(X)$. Its component bijection and vanishing relative groups are precisely the hypotheses of step 1.1. Thus $H_k(M_f,j(X))=0$. Exactness [F6] makes $j_*:H_k(X)\to H_k(M_f)$ both injective and surjective, including $k=0$ (the sequence ends with the relative degree-zero cokernel). Let $k:Y\to M_f$ be the target inclusion and define $r:M_f\to Y$ by $r(k(y))=y$ and $r([x,s])=f(x)$. These formulas respect the mapping-cylinder relation, so [F7] makes $r$ continuous, with $rk=\mathrm{id}_Y$ and $rj=f$. The formulas $D(k(y),t)=k(y)$ and $D([x,s],t)=[x,(1-t)s]$ likewise respect the relation and descend by [F7] to a homotopy from the identity to $kr$. The prism identity [F5] therefore makes $r_*$ and $k_*$ inverse homology maps in every degree. Since $rj=f$, the homomorphism $f_*=r_*j_*$ is an isomorphism. Empty spaces are handled as in [F1]: a weak map from the empty space forces its target empty, and their chain groups are zero. [F1, F5, F6, F7, step 3.1]

5.1 For the relative conclusion, use the pair sequences and their naturality [F6]. For $k\ge1$ write the five consecutive terms as $H_k(A)\to H_k(X)\xrightarrow{q_X}H_k(X,A)\xrightarrow{\delta_X}H_{k-1}(A)\to H_{k-1}(X)$ and similarly for $(Y,B)$. All vertical maps except possibly the middle one are isomorphisms by step 4.1. To prove surjectivity of that middle map $F$, let $b\in H_k(Y,B)$. Lift $\delta_Yb$ uniquely to $a\in H_{k-1}(A)$. Its image in $H_{k-1}(X)$ is zero by commutativity and injectivity there. Exactness supplies $c\in H_k(X,A)$ with $\delta_Xc=a$. Then $b-Fc$ has zero boundary, so equals $q_Yy$ for some $y\in H_k(Y)$. Lift $y=f_*x$ using its isomorphism; now $F(c+q_Xx)=b$. For injectivity, if $Fc=0$, injectivity on $H_{k-1}(A)$ gives $\delta_Xc=0$, so $c=q_Xx$. Since $q_Yf_*x=0$, write $f_*x=i_Bb'$ with $b'\in H_k(B)$; lift $b'=f_{A*}a'$ and use injectivity on $H_k(X)$ to obtain $x=i_Aa'$. Hence $c=0$. In degree zero the relative groups are the cokernels of $H_0(A)\to H_0(X)$ and $H_0(B)\to H_0(Y)$; the two isomorphisms induce an isomorphism of cokernels, since lifting a representative proves surjectivity and lifting its subspace preimage proves injectivity. This also covers empty subspaces. [F6, step 4.1]

6.1 The proof includes arbitrary disconnected spaces because the compression hypothesis is imposed at each actual boundary basepoint, and zero-cells use component-surjectivity. It includes one simplex, cancelling coefficients, constant simplices and equal pairs. Both kernel and image arguments were supplied in steps 4.1–5.1, with no degree-one abelianness assumption on relative homotopy. All homotopies run on a finite domain for each test chain, and the mapping-cylinder deformation is a formula. Thus no AC, countable selection or chosen family of representatives enters either conclusion. [F1, F2, F3, step 1.1, step 1.2, step 3.1, step 4.1, step 5.1] ∎
