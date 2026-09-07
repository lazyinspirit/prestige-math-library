---
id: "prop-unreduced-pair-and-reduced-quotient-axioms-are-equivalent-on-cw-pairs"
kind: "proposition"
title: "Unreduced pair and reduced quotient axioms are equivalent on cw pairs"
deps: ["def-unreduced-homology-theory-on-cw-pairs", "def-reduced-homology-theory-and-augmentation", "prop-relative-cw-inclusions-are-cofibrations"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, 14§4, CW definition and theorem, pp.110–111"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "14§4, CW definition and theorem, pp.110–111"
    - title: "Hatcher, Algebraic Topology, Axioms for Homology, pp.160–162"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Axioms for Homology, pp.160–162"
status: "draft"
origin: "pipeline"
proof_strategy: "Use topological mapping cylinder and cone constructions explicitly; HEP identifies cofibers with quotients. Derive the pair LES and CW excision from reduced cofiber exactness using mapping-cone quotients, and the converse by pair exactness. Establish triple exactness here for subsequent skeletal diagrams. Include natural suspension and boundary-as-desuspension of the cofiber map; no weak-equivalence axiom outside CW pairs."
---

## Statement

Ordinary unreduced theories on CW pairs and reduced ordinary theories on based CW spaces with vertex basepoints determine one another, naturally and compatibly with morphisms and coefficients. For $A\ne\varnothing$ the correspondence gives $h_n(X,A)\cong\widetilde h_n(X/A)$; for $A=\varnothing$ it gives $h_n(X)\cong\widetilde h_n(X_+)$, where $X_+=X\sqcup\{*\}$.

Under this correspondence, pair boundaries are cofiber boundaries followed by inverse suspension, and arbitrary disjoint-sum additivity corresponds to arbitrary wedge additivity. For a CW triple $B\subset A\subset X$ there is a natural exact sequence $\cdots\to h_n(A,B)\to h_n(X,B)\to h_n(X,A)\to h_{n-1}(A,B)\to\cdots$, whose last map is the pair boundary followed by $h_{n-1}(A)\to h_{n-1}(A,B)$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] A **CW pair** is $(X,A)$ with $A$ a CW subcomplex of $X$, as in def-skeleta-cw-subcomplex-and-relative-cw-complex. Morphisms are all continuous maps of pairs, not just cellular maps. An **ordinary unreduced homology theory** assigns covariant functors $h_n$ from CW pairs to abelian groups, for every $n\in\mathbb Z$, and natural homomorphisms $\partial:h_n(X,A)\to h_{n-1}(A)$, where $h_n(X)=h_n(X,\varnothing)$, satisfying: - Homotopic maps of pairs induce equal homomorphisms. - The inclusion maps and $\partial$ form an exact sequence $\cdots\to h_n(A)\to h_n(X)\to h_n(X,A)\to h_{n-1}(A)\to\cdots$. - For CW subcomplexes $U,V$ of $X=U\cup V$, inclusion induces $h_n(U,U\cap V)\cong h_n(X,V)$. - For a point $*$, $h_n(*)=0$ when $n\ne0$; write $G=h_0(*)$. - For every set-indexed family of CW pairs, including the empty family, the inclusions induce $\bigoplus_\alpha h_n(X_\alpha,A_\alpha)\cong h_n(\bigsqcup_\alpha X_\alpha,\bigsqcup_\alpha A_\alpha)$. Thus $h_n(\varnothing)=0$. No finite-dimensionality or finite-cell restriction is implicit. ([[def-unreduced-homology-theory-on-cw-pairs]])

[F2] For an unreduced theory $h$ and a nonempty based CW space $(X,x_0)$ with $x_0$ a vertex, set $$\widetilde h_n(X)=\ker\bigl(h_n(X)\xrightarrow{p_*}h_n(*)\bigr).$$ The basepoint inclusion $s$ satisfies $p\circ s=\mathrm{id}$ and splits this augmentation. The underlying ordinary theory is as in def-unreduced-homology-theory-on-cw-pairs. Independently, a **reduced ordinary theory** on based CW spaces consists of homotopy-invariant covariant functors $\widetilde h_n$, natural suspension isomorphisms $\sigma:\widetilde h_n(X)\to\widetilde h_{n+1}(\Sigma X)$, exact cofiber sequences, and arbitrary wedge additivity. More explicitly, for every based CW inclusion $A\hookrightarrow X$, $\widetilde h_n(A)\to\widetilde h_n(X)\to\widetilde h_n(X/A)$ is exact; the boundary in the extended sequence is the cofiber map to $\Sigma A$ followed by $\sigma^{-1}$. The suspension here is reduced suspension. The dimension axiom is $\widetilde h_n(S^0)=0$ for $n\ne0$, with $\widetilde h_0(S^0)=G$. Wedge additivity includes the empty wedge $*$ and gives $\widetilde h_n(*)=0$. The empty space is not a based object. If its reduced groups are mentioned, this library uses $\widetilde H_n(\varnothing;G)=0$ in all degrees, as in def-zero-simplex-augmentation-and-reduced-singular-homology. The augmented-chain convention $\widetilde H_{-1}(\varnothing;G)=G$ is a different extension and is not used here. ([[def-reduced-homology-theory-and-augmentation]])

[F3] If $(X,A)$ is a relative CW complex, then $A\hookrightarrow X$ has the homotopy extension property; in particular it is a cofibration. ([[prop-relative-cw-inclusions-are-cofibrations]])

## Proof

1.1 Start with F1. The splitting $p_*s_*=1$ identifies $h_n(X,*)$ with $\ker p_*$ by the exact sequence of $(X,*)$: $s_*$ is injective in every degree, so its cokernel is $h_n(X,*)$, and the splitting identifies that cokernel with the kernel. This is natural for based maps and is the reduced group of F2. [F1, F2]

2.1 For a CW inclusion $i:A\hookrightarrow X$ with $A\ne\varnothing$, form the unreduced cone attachment $C_i=X\cup_A CA$. CW excision gives $h_n(X,A)\cong h_n(C_i,CA)$. Since $CA$ contracts to its apex, pair exactness identifies the latter with $\widetilde h_n(C_i)$. Collapse $CA$ to the apex. This gives a homotopy equivalence $C_i\to X/A$: extend the contraction of $CA$ over $C_i$ using F3; the terminal extension factors through the quotient, and its quotient homotopy and original homotopy exhibit the two inverse composites. Thus $h_n(X,A)\cong\widetilde h_n(X/A)$. For empty $A$, add a disjoint basepoint first, obtaining $h_n(X)\cong h_n(X_+,*)$. This also sends the empty pair to zero. [F1, F3, step 1.1]

3.1 The reduced cone sequence and contractibility of the reduced cone give $\widetilde h_{n+1}(\Sigma Y)\cong\widetilde h_n(Y)$; take its inverse as the suspension map. To recover the unreduced boundary for nonempty $A$, view $C_i$ as the based cofiber of $A_+\to X_+$, with the cone apex as basepoint. Collapse $X$ together with that apex to obtain $C_i\to\Sigma A_+$; both cone ends are now identified, as required for reduced suspension of $A_+$. Naturality of the pair sequences for $(C_i,X\cup\{\text{apex}\})$ and the cone pair shows that the original connecting homomorphism is this induced cofiber map followed by inverse suspension into $\widetilde h_{n-1}(A_+)\cong h_{n-1}(A)$. Thus the cofiber exact sequence is exactly the pair sequence, with its signs fixed by this convention. Dimension on $S^0$ follows from the split two-point augmentation. [F1, step 1.1, step 2.1]

4.1 Conversely, from F2 define $h_n(X,A)=\widetilde h_n(X_+/A_+)$ and $h_n(X)=\widetilde h_n(X_+)$. When $A$ is nonempty the quotient is $X/A$; when $A$ is empty it is $X_+$. Replacing the inclusion $A_+\to X_+$ by its mapping cylinder, its cofiber is homotopy equivalent to this quotient by the contraction argument above. Repeating the cone construction gives the sequence $A_+\to X_+\to C_i\to\Sigma A_+\to\Sigma X_+\to\cdots$. Each successive pair of maps is, up to homotopy, a CW inclusion and its quotient: after attaching the next cone, the previously attached contractible cone collapses by F3. The reduced exactness axiom and suspension therefore give the pair LES in every integer degree, with boundary as just specified. All these constructions respect maps, so the boundary is natural. [F2, F3, step 2.1, step 3.1]

5.1 For $X=U\cup V$, the map $U_+/(U\cap V)_+\to X_+/V_+$ is a homeomorphism of based CW spaces, so reduced homotopy invariance yields CW excision. A quotient of a disjoint union of pairs is the wedge of their based quotients, with the CW weak topology; reduced wedge additivity hence gives unreduced disjoint-sum additivity. In the other direction, apply unreduced additivity to $(\bigsqcup X_\alpha,\bigsqcup\{x_\alpha\})$ and the quotient formula to obtain wedge additivity. The empty wedge is a point and both empty sums are zero. The formulas also give $h_0(*)=\widetilde h_0(S^0)=G$ and the dimension vanishing. [F1, F2, step 2.1, step 4.1]

6.1 The two recipes are inverse through the natural quotient and splitting isomorphisms above. A morphism commuting with pair boundaries commutes with the cone suspension isomorphisms, and conversely a reduced morphism commuting with suspension commutes with the reconstructed boundaries. Finally, apply the reduced cofiber sequence to $A_+/B_+\subset X_+/B_+$, whose quotient is $X_+/A_+$. This gives the triple sequence. The cone map factors the usual pair boundary followed by the quotient of $A$, by naturality of the cone construction. This proves its stated formula as well as exactness, including $A=B$, $B=\varnothing$, and $A=X$. [step 2.1, step 3.1, step 4.1, step 5.1] ∎
