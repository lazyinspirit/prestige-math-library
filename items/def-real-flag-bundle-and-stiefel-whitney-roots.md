---
id: def-real-flag-bundle-and-stiefel-whitney-roots
kind: definition
title: Real flag bundle and Stiefel–Whitney roots
status: draft
origin: pipeline
deps: ["def-real-projective-bundle-and-tautological-line", "lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type", "def-real-and-complex-topological-vector-bundle", "thm-numerable-vector-bundles-admit-bundle-metrics", "thm-subordinate-partitions-of-unity-exist", "def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles", "def-stiefel-whitney-classes-from-the-projective-bundle-relation", "prop-vector-bundle-pullback-is-functorial-up-to-canonical-isomorphism", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Allen Hatcher, Vector Bundles & K-Theory
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Proposition 3.3 and the flag-bundle discussion, printed pp.80–82"
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Lecture 34 splitting principle and roots, printed pp.125–127"
    - title: Milnor and Stasheff, Characteristic Classes
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "§7 flag bundles, printed pp.83–96"
---

## Definition

Assume AC, and let $E\to B$ be a numerable real vector bundle of rank $n\geq1$
over a paracompact Hausdorff CGWH base of CW homotopy type. The **real flag bundle** of $E$ is obtained by the
following finite iteration.

At the first stage put $X_1:=P(E)$, let $q_1:X_1\to B$ be the projection, let
$E_1:=q_1^*E$, and let $L_1\subseteq E_1$ be the tautological line. By
[[thm-numerable-vector-bundles-admit-bundle-metrics]] choose a bundle metric
on the numerable bundle $E_1$, and let $L_1^{\perp}\subseteq E_1$ be the
orthogonal complement of $L_1$. Then
$L_1\oplus L_1^{\perp}\cong E_1$ as bundles over $X_1$, in the convention of
[[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]].

Suppose $X_j$, bundles $L_1,\ldots,L_j$ over $X_j$ and a rank-$(n-j)$ bundle
$L_j^{\perp}$ over $X_j$ with $q_j^*E\cong L_1\oplus\cdots\oplus L_j\oplus
L_j^{\perp}$ have been constructed. If $j<n$, put
$$X_{j+1}:=P(L_j^{\perp}),\qquad \pi_{j+1}:X_{j+1}\to X_j,\qquad L_{j+1}:=\gamma_{L_j^{\perp}},\qquad q_{j+1}:=q_j\pi_{j+1},$$
choose a metric on the numerable bundle $\pi_{j+1}^*L_j^{\perp}$ and let
$L_{j+1}^{\perp}$ be the orthogonal complement of $L_{j+1}$ in it. Iterating
until $j=n$ gives the **real flag bundle**
$$\operatorname{Fl}(E):=X_n,\qquad q:=q_n:\operatorname{Fl}(E)\to B,$$
together with line bundles $L_1,\ldots,L_n$ over $\operatorname{Fl}(E)$, which
we keep denoting by the same symbols after pulling back along the remaining
projections.

By construction, and by the pullback compatibilities of
[[prop-vector-bundle-pullback-is-functorial-up-to-canonical-isomorphism]],
$$q^*E\cong L_1\oplus\cdots\oplus L_n\qquad\text{over }\operatorname{Fl}(E).$$
The **Stiefel–Whitney roots** of $E$ are the classes
$$t_j:=w_1(L_j)=x_{L_j}\in H^1(\operatorname{Fl}(E);\mathbb F_2),\qquad 1\leq j\leq n,$$
computed with the rank-one case of
[[def-stiefel-whitney-classes-from-the-projective-bundle-relation]]. For
$n=0$ we set $\operatorname{Fl}(E):=B$, $q:=\operatorname{id}_B$, and the sum
$L_1\oplus\cdots\oplus L_n$ is empty, so no root is defined. For $n=1$ the
construction stops at the first stage, so $\operatorname{Fl}(E)=P(E)\cong B$,
$L_1\cong E$ and $t_1=w_1(E)$.

## Facts & Assumptions

**Given:** AC, a numerable real rank-$n$ bundle $E\to B$ with $n\geq0$ over a paracompact Hausdorff CGWH base of CW homotopy type, and the iteration above.

[F1] For a numerable real bundle $G$ of rank $r\geq1$, the projective bundle $P(G)\to$ base is a numerable fiber bundle with fiber $\mathbb{RP}^{r-1}$ carrying the tautological line $\gamma_G\subseteq\pi^*G$; for $r=1$ the projection is a homeomorphism and $\gamma_G\cong G$ ([[def-real-projective-bundle-and-tautological-line]]).

[F2] Under AC every numerable real or complex vector bundle admits a continuous positive-definite fiber metric ([[thm-numerable-vector-bundles-admit-bundle-metrics]]).

[F3] In a local frame of a topological vector bundle in which a line subbundle is spanned by the first vector, fiberwise Gram--Schmidt with a continuous bundle metric produces a continuous orthonormal frame. Hence the remaining frame vectors locally trivialize the orthogonal complement, and the addition map gives a bundle isomorphism $L\oplus L^\perp\cong G$. Whitney sums have the block-diagonal transition convention of [[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]], and the relevant local-frame convention is that of [[def-real-and-complex-topological-vector-bundle]].

[F4] Under AC every vector bundle over a paracompact Hausdorff base is numerable: apply the subordinate-partition theorem to a linear chart cover ([[thm-subordinate-partitions-of-unity-exist]], [[def-real-and-complex-topological-vector-bundle]]).

[F5] Pullback is canonically functorial, so the successive pullbacks compose and $\pi^*$ of a direct sum is the direct sum of the pullbacks ([[prop-vector-bundle-pullback-is-functorial-up-to-canonical-isomorphism]]).

[F6] The total space of a numerable compact-Hausdorff-fiber bundle over a
paracompact Hausdorff CGWH base is again paracompact Hausdorff and CGWH; its
total space also has CW homotopy type when both the base and the fiber do.
Every fiber used here is $\mathbb{RP}^{r-1}$ for some $r\geq1$, hence is a
compact Hausdorff finite CW complex. Therefore every intermediate $X_j$ and
$\operatorname{Fl}(E)$ has all four properties
([[lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type]]).

[F7] For a rank-one bundle $L$ the class $w_1(L)=x_L$ is defined and lies in $H^1$ of the base ([[def-stiefel-whitney-classes-from-the-projective-bundle-relation]]).

[A1] AC is the Axiom of Choice in the form fixed by [[def-axiom-of-choice]].

## Verification
1.1 The first stage splits. By [F1] the tautological line $L_1=\gamma_E$ is a subbundle of $E_1=q_1^*E$, and $E_1$ is numerable. Choose a metric by [F2]. On a local frame $(s_1,\ldots,s_n)$ with $s_1$ spanning $L_1$, the Gram--Schmidt formulas divide only by the positive continuous norms of the successive nonzero orthogonalized vectors, so they produce a continuous orthonormal frame $(e_1,\ldots,e_n)$ with $e_1$ spanning $L_1$. Thus $e_2,\ldots,e_n$ locally frame the fiberwise orthogonal complement $L_1^\perp$, and fiberwise addition gives $E_1\cong L_1\oplus L_1^\perp$ as in [F3]. The complement is numerable by [F4], since $X_1=P(E)$ is paracompact Hausdorff by [F6]. [F1, F2, F3, F4, F6, A1]

2.1 The iteration is legitimate and terminates. Suppose the data of stage $j$ are constructed with $q_j^*E\cong L_1\oplus\cdots\oplus L_j\oplus L_j^{\perp}$ and $L_j^{\perp}$ numerable of rank $n-j$. If $j<n$ then $L_j^{\perp}$ has positive rank, so [F1] gives the numerable projective bundle $\pi_{j+1}:X_{j+1}=P(L_j^{\perp})\to X_j$ with tautological line $L_{j+1}=\gamma_{L_j^{\perp}}\subseteq\pi_{j+1}^*L_j^{\perp}$. Choosing a metric on $\pi_{j+1}^*L_j^{\perp}$ and repeating the local Gram--Schmidt construction of step 1.1 splits $\pi_{j+1}^*L_j^{\perp}\cong L_{j+1}\oplus L_{j+1}^{\perp}$ with $L_{j+1}^{\perp}$ numerable by [F4] and of rank $n-j-1$; by [F5] the pulled-back splitting of $q_j^*E$ combines with this one, giving $q_{j+1}^*E\cong L_1\oplus\cdots\oplus L_j\oplus L_{j+1}\oplus L_{j+1}^{\perp}$. At $j=n$ no positive-rank complement remains and the iteration stops. Each $X_j$ is paracompact Hausdorff, CGWH, and of CW type by [F6], applied to the numerable compact-fiber bundle $\pi_j$. [F1, F2, F3, F4, F5, F6, step 1.1, A1]

3.1 The conclusion and the degenerate cases. Substituting the terminal identity of step 2.1 gives $q^*E\cong L_1\oplus\cdots\oplus L_n$ over the paracompact Hausdorff CGWH CW-type space $\operatorname{Fl}(E)$. Each $L_j$ is a line bundle, so its first Stiefel–Whitney class $t_j=w_1(L_j)=x_{L_j}$ is defined by [F7] and lies in $H^1(\operatorname{Fl}(E);\mathbb F_2)$; this is the content of [def-stiefel-whitney-classes-from-the-projective-bundle-relation]'s rank-one case. For $n=0$ the convention gives $\operatorname{Fl}(E)=B$ and the empty sum, and for $n=1$ the iteration stops after step 1.1, where $X_1=P(E)\cong B$ and $\gamma_E\cong E$, so $t_1=w_1(E)$. [F1, F7, step 2.1]

4.1 The fiber of the construction. Over a base point $b$, the successive projectivizations parametrize a chain of subspaces $0\subset L_1\subset L_1\oplus L_2\subset\cdots\subset E_b$ with $\dim(L_1\oplus\cdots\oplus L_j)=j$, since each stage consists of the lines in the orthogonal complement of the previous sum. Sending such a chain to the flag $V_j=L_1\oplus\cdots\oplus L_j$ is a bijection onto the complete flags in $E_b$, with inverse obtained by taking successive orthogonal complements; the identification is compatible with the chosen metrics but its underlying set of chains does not depend on them. Hence the fiber of $\operatorname{Fl}(E)\to B$ is the complete flag manifold of $\mathbb R^n$, a compact manifold, in agreement with the compactness invoked in [F6]. [F1, F3, step 2.1, step 3.1] ∎
