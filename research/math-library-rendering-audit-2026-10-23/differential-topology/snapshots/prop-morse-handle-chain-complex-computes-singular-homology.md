---
id: prop-morse-handle-chain-complex-computes-singular-homology
kind: proposition
title: "The handle chain complex computes singular homology"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-one-handle-changes-relative-homology-in-one-degree, lem-higher-index-handle-attachments-do-not-change-lower-homology, lem-long-exact-sequence-of-a-triple-in-singular-homology, thm-morse-functions-and-handle-decompositions-correspond, thm-morse-rearrangement-by-index, def-handle-decomposition-relative-to-the-incoming-boundary, lem-handles-of-equal-index-can-be-attached-on-one-level, lem-gradient-like-perturbation-separates-adjacent-critical-levels, lem-critical-values-of-disjoint-trajectory-closures-can-be-interchanged, thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms, lem-finitely-many-critical-values-can-be-separated-locally, cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points, thm-long-exact-sequence-of-a-pair-in-singular-homology, def-relative-singular-homology, def-chain-complex-in-an-abelian-category, def-homology-object-of-a-chain-complex, def-k-handle-core-cocore-attaching-region-and-belt-sphere, def-field, def-countable-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: cellular-transposition
sources:
  scraped: []
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Chapter 12 Section 5, printed pp. 489-493 (PDF pp. 501-505)"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
    - title: "C. T. C. Wall, Differential Topology, Sections 5.1-5.4, printed pp. 129-148 (PDF pp. 137-151)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow), Section 6 and Section 7, PDF pp. 87-93"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
    - title: "Liviu Nicolaescu, An Invitation to Morse Theory (2nd ed.), Chapter 2 Section 2.3, printed pp. 46-53 (PDF pp. 56-63)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
dependency_level: 5
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $M$ be a closed smooth $n$-manifold, let
$f:M\to\mathbb R$ be a Morse function and let $F$ be a field. Then there are an
index-ordered finite handle presentation of $M$ with exactly $m_k(f)$ handles of
index $k$, and a chain complex $(C_\bullet,\partial_\bullet)$ of
finite-dimensional $F$-vector spaces, a **handle chain complex** of
$(M,f,F)$, such that:

(i) $C_k$ has a chosen basis in bijection with the $k$-handles, given
by the relative classes of their core disks, so $\dim_FC_k=m_k(f)$;

(ii) $\partial_k:C_k\to C_{k-1}$ is the boundary homomorphism of the triple of
successive handle stages $W_k\supseteq W_{k-1}\supseteq W_{k-2}$;

(iii) $\partial_{k-1}\partial_k=0$;

(iv) $H_k(C_\bullet)\cong H_k(M;F)$ for every $k$.

In particular $H_k(M;F)$ is finite-dimensional for every $k$ and vanishes for
$k>n$.

## Facts & Assumptions

**Given:** A closed smooth $n$-manifold $M$, a Morse function $f$, a field $F$, and the notation $m_k=m_k(f)$.

[F1] A Morse function on a compact manifold has finitely many critical points ([[cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]]), and the critical values can be separated by a local modification, producing an excellent Morse function with the same critical points ([[lem-finitely-many-critical-values-can-be-separated-locally]]).

[F2] The needed adapted field can be constructed by patching the Euclidean descending fields in disjoint critical charts with a negative gradient elsewhere, as in [[thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms]]. Equal-index adjacent levels can be separated and then assigned the same value by [[lem-gradient-like-perturbation-separates-adjacent-critical-levels]] and [[lem-critical-values-of-disjoint-trajectory-closures-can-be-interchanged]]. For the triad $(M;\varnothing,\varnothing)$ with the empty-face convention, an adapted excellent Morse function determines a finite handle presentation with exactly one handle of index $\operatorname{ind}(p)$ per critical point; the presentation can be rearranged into index order, and handles of equal index can be attached on one level ([[thm-morse-functions-and-handle-decompositions-correspond]], [[thm-morse-rearrangement-by-index]], [[lem-handles-of-equal-index-can-be-attached-on-one-level]], [[def-handle-decomposition-relative-to-the-incoming-boundary]]).

[F3] If $N'=N\cup_\varphi h^k$ is obtained by attaching a rounded $k$-handle, then $H_i(N',N;F)=0$ for $i\ne k$ and $H_k(N',N;F)$ has the relative core class as a generator ([[lem-one-handle-changes-relative-homology-in-one-degree]], part (a)); for several handles attached at one level the relative group is the direct sum of the handle contributions with the relative core classes as a basis ([[lem-one-handle-changes-relative-homology-in-one-degree]], part (b)); the core, cocore and belt objects are those of [[def-k-handle-core-cocore-attaching-region-and-belt-sphere]].

[F4] Attaching finitely many handles of index at least $q$ to a smooth manifold with boundary does not change $H_i$ in degrees $i\le q-2$ and surjects in degree $q-1$ ([[lem-higher-index-handle-attachments-do-not-change-lower-homology]]).

[F5] For $B\subseteq A\subseteq X$ there is a long exact sequence $\cdots\to H_n(A,B;G)\to H_n(X,B;G)\to H_n(X,A;G)\xrightarrow{\delta}H_{n-1}(A,B;G)\to\cdots$ and the triple connector factors as the pair connector followed by the quotient map ([[lem-long-exact-sequence-of-a-triple-in-singular-homology]]).

[F6] For $A\subseteq X$ the pair sequence $\cdots\to H_n(A;G)\to H_n(X;G)\to H_n(X,A;G)\xrightarrow{\delta}H_{n-1}(A;G)\to\cdots$ is exact, with the first two maps induced by inclusions ([[thm-long-exact-sequence-of-a-pair-in-singular-homology]]).

[L1] A chain complex of $F$-vector spaces is a graded family with $d_{n-1}d_n=0$, and its homology in degree $n$ is $\ker d_n/\operatorname{im}d_{n+1}$ ([[def-chain-complex-in-an-abelian-category]], [[def-homology-object-of-a-chain-complex]], [[def-relative-singular-homology]]).

## Proof

**Proof technique:** cellular-transposition.

1.1 For nonempty $M$, first rescale $f$ into $(0,1)$ by an increasing affine map; with both faces empty it is adapted. Apply the local separation of [F1], keeping the critical points and indices, construct the adapted field as in [F2], then apply the correspondence and index rearrangement of [F2]. The rearrangement puts indices in order. Equal-index consecutive handles can be made simultaneous by applying the separation and equal-value interchange arguments underlying [F2] within their index block; the crossing-sphere dimension inequality is $(k-1)+(n-k-1)<n-1$. Thus take stages $W_{-1}=\varnothing\subseteq W_0\subseteq\cdots\subseteq W_n=M$, where $W_k$ adds the $m_k$ handles of index $k$ along disjoint attaching regions. For empty $M$ take every stage empty. In all cases set $W_j=\varnothing$ for $j<0$ and $W_j=M$ for $j>n$, so all endpoint triples are defined. [F1, F2, given]

2.1 By [F3], applied at the single level $W_k$, the relative group $H_j(W_k,W_{k-1};F)$ is zero for $j\ne k$ and is an $F$-vector space of dimension $m_k$ for $j=k$; choose an orientation of each core disk, and take the resulting relative classes as its basis. Setting $C_k:=H_k(W_k,W_{k-1};F)$ (with $W_{-1}=\varnothing$) gives graded $F$-vector spaces with $\dim_FC_k=m_k$, a basis as in (i); in particular $C_k=0$ for $k\notin\{0,\dots,n\}$. [F3, step 1.1]

3.1 Define $\partial_k:C_k\to C_{k-1}$ as the composite of the connecting map $\delta_k:C_k\to H_{k-1}(W_{k-1};F)$ of the pair $(W_k,W_{k-1})$ with the quotient map $H_{k-1}(W_{k-1};F)\to H_{k-1}(W_{k-1},W_{k-2};F)=C_{k-1}$. By the factorization clause of [F5] this is exactly the boundary homomorphism of the triple $W_k\supseteq W_{k-1}\supseteq W_{k-2}$, which is assertion (ii). It is a homomorphism of $F$-vector spaces, and for $k=0$ the target is zero. [F5, step 2.1]

3.2 Auxiliary computation: $H_j(W_k;F)=0$ whenever $j>k$. For $k=0$ this is immediate since $W_0$ is a disjoint union of disks. For the induction step and $j>k$, step 2.1 makes both relative terms vanish in the exact sequence $0=H_{j+1}(W_k,W_{k-1})\to H_j(W_{k-1})\to H_j(W_k)\to H_j(W_k,W_{k-1})=0$. Thus $H_j(W_k)\cong H_j(W_{k-1})=0$. [F6, step 1.1, step 2.1]

4.1 $\partial^2=0$: the composite $\partial_{k-1}\partial_k$ is the composite $$C_k\xrightarrow{\ \delta_k\ }H_{k-1}(W_{k-1})\xrightarrow{\ q_{k-1}\ }C_{k-1}\xrightarrow{\ \delta_{k-1}\ }H_{k-2}(W_{k-2})\xrightarrow{\ q_{k-2}\ }C_{k-2},$$ and the middle two arrows compose to zero by exactness of the pair sequence of $(W_{k-1},W_{k-2})$ at the node $H_{k-1}(W_{k-1},W_{k-2})$ (the image of the quotient map is the kernel of the connecting map); hence $\partial_{k-1}\partial_k=0$, which is (iii). [F6, step 3.1]

4.2 By step 3.2, $H_k(W_{k-1};F)=0$ and $H_{k-1}(W_{k-2};F)=0$. The pair sequences therefore show that $i_k:H_k(W_k;F)\to C_k$ is injective with image $\ker\delta_k$, and that $q_{k-1}:H_{k-1}(W_{k-1};F)\to C_{k-1}$ is injective. Since $\partial_k=q_{k-1}\delta_k$, it follows that $\ker\partial_k=\ker\delta_k=i_k(H_k(W_k;F))$. For $k=0$ the target is zero and the same conclusion follows from $W_{-1}=\varnothing$. [F6, step 3.2, step 3.1, algebra]

5.1 From the pair sequence of $(W_{k+1},W_k)$, whose relative group vanishes in degree $k$ by step 2.1, there is an exact tail $$C_{k+1}\xrightarrow{\ \delta_{k+1}\ }H_k(W_k;F)\longrightarrow H_k(W_{k+1};F)\longrightarrow0,$$ so $H_k(W_{k+1};F)\cong H_k(W_k;F)/\operatorname{im}\delta_{k+1}$; under the injection $i_k$ of step 4.2 the subspace $\operatorname{im}\delta_{k+1}$ corresponds exactly to $\operatorname{im}\partial_{k+1}=\operatorname{im}(q_k\delta_{k+1})$. Taking quotients gives $$H_k(C_\bullet)=\ker\partial_k/\operatorname{im}\partial_{k+1}\cong H_k(W_k;F)/\operatorname{im}\delta_{k+1}\cong H_k(W_{k+1};F).$$ [F5, F6, step 2.1, step 4.2, algebra]

6.1 Finally $H_k(W_{k+1};F)\cong H_k(M;F)$: the remaining handles, attached to $W_{k+1}$, all have index at least $k+2$, so [F4] with $q=k+2$ gives an isomorphism in degree $k$; when $k=n$ no handles remain and $W_{n+1}=W_n=M$. Combining with step 5.1 gives $H_k(C_\bullet)\cong H_k(M;F)$, which is (iv). Since $\dim_FC_k=m_k<\infty$ by step 2.1, every $H_k(C_\bullet)$ is finite-dimensional and vanishes for $k>n$, and so does $H_k(M;F)$. This transposes the proof that cellular homology computes singular homology from the CW filtration to the handle filtration, using the concentration of step 2.1 in place of the skeletal concentration. [F4, step 2.1, step 5.1, L1] ∎

## Remarks

- **Dependence on the presentation.** The complex depends on the chosen handle presentation; every such complex computes the same singular homology by the proof. No claim that all presentations are related by attaching-data isotopies is needed.
- **Orientation and row vectors.** No orientation of $M$ is used in the construction; the boundary coefficients are computed by intersection numbers only in the separate boundary-coefficient lemma, where an orientation is assumed for the oriented statement.
- **Choice.** $\mathrm{AC}_\omega$ enters through the handle-presentation suppliers of [F2] (separation of critical values, corner rounding, rearrangement) and through [F3]; the linear-algebraic part of the argument is choice free.
