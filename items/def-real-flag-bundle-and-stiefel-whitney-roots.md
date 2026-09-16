---
id: def-real-flag-bundle-and-stiefel-whitney-roots
kind: definition
title: Real flag bundle and Stiefel–Whitney roots
status: draft
origin: pipeline
deps: ["def-real-projective-bundle-and-tautological-line", "lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type", "thm-numerable-vector-bundles-admit-bundle-metrics", "def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles", "def-stiefel-whitney-classes-from-the-projective-bundle-relation", "prop-vector-bundle-pullback-is-functorial-up-to-canonical-isomorphism", "def-axiom-of-choice"]
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
over an admissible base. The **real flag bundle** of $E$ is obtained by the
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

**Given:** AC, a numerable real rank-$n$ bundle $E\to B$ with $n\geq0$ over an admissible base, and the iteration above.

[F1] For a numerable real bundle $G$ of rank $r\geq1$, the projective bundle $P(G)\to$ base is a numerable fiber bundle with fiber $\mathbb{RP}^{r-1}$ carrying the tautological line $\gamma_G\subseteq\pi^*G$; for $r=1$ the projection is a homeomorphism and $\gamma_G\cong G$ ([[def-real-projective-bundle-and-tautological-line]]).

[F2] Under AC every numerable real or complex vector bundle admits a continuous positive-definite fiber metric ([[thm-numerable-vector-bundles-admit-bundle-metrics]]).

[F3] For a metric bundle $G$ and a subbundle $L\subseteq G$, the fiberwise orthogonal projection onto $L$ is a bundle map and exhibits $G\cong L\oplus L^{\perp}$ with $L^{\perp}$ the kernel subbundle; the Whitney sum is formed by $\operatorname{diag}(g_{ji},h_{ji})$ ([[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]]).

[F4] Pullback is canonically functorial, so the successive pullbacks compose and $\pi^*$ of a direct sum is the direct sum of the pullbacks ([[prop-vector-bundle-pullback-is-functorial-up-to-canonical-isomorphism]]).

[F5] The total space of a numerable compact-fiber bundle over an admissible base is admissible, so every intermediate $X_j$ and $\operatorname{Fl}(E)$ is admissible ([[lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type]]).

[F6] For a rank-one bundle $L$ the class $w_1(L)=x_L$ is defined and lies in $H^1$ of the base ([[def-stiefel-whitney-classes-from-the-projective-bundle-relation]]).

[A1] AC is the Axiom of Choice in the form fixed by [[def-axiom-of-choice]].

## Verification
1.1 The first stage splits. By [F1] the tautological line $L_1=\gamma_E$ is a subbundle of $E_1=q_1^*E$, and $E_1$ is numerable. Choose a metric by [F2]; then [F3] gives a complement subbundle $L_1^{\perp}$ of rank $n-1$ with $E_1\cong L_1\oplus L_1^{\perp}$. Both summands are numerable, as subbundles and complements in a numerable bundle, and $X_1=P(E)$ is admissible by [F5]. [F1, F2, F3, F5, A1]

2.1 The iteration is legitimate and terminates. Suppose the data of stage $j$ are constructed with $q_j^*E\cong L_1\oplus\cdots\oplus L_j\oplus L_j^{\perp}$ and $L_j^{\perp}$ numerable of rank $n-j$. If $j<n$ then $L_j^{\perp}$ has positive rank, so [F1] gives the numerable projective bundle $\pi_{j+1}:X_{j+1}=P(L_j^{\perp})\to X_j$ with tautological line $L_{j+1}=\gamma_{L_j^{\perp}}\subseteq\pi_{j+1}^*L_j^{\perp}$. Choosing a metric on $\pi_{j+1}^*L_j^{\perp}$ and applying [F3] splits $\pi_{j+1}^*L_j^{\perp}\cong L_{j+1}\oplus L_{j+1}^{\perp}$ with $L_{j+1}^{\perp}$ numerable of rank $n-j-1$; by [F4] the pulled-back splitting of $q_j^*E$ combines with this one, giving $q_{j+1}^*E\cong L_1\oplus\cdots\oplus L_j\oplus L_{j+1}\oplus L_{j+1}^{\perp}$. At $j=n$ no positive-rank complement remains and the iteration stops. Each $X_j$ is admissible by [F5], applied to the numerable compact-fiber bundle $\pi_j$. [F1, F3, F4, F5, step 1.1, A1]

3.1 The conclusion and the degenerate cases. Substituting the terminal identity of step 2.1 gives $q^*E\cong L_1\oplus\cdots\oplus L_n$ over the admissible space $\operatorname{Fl}(E)$. Each $L_j$ is a line bundle, so its first Stiefel–Whitney class $t_j=w_1(L_j)=x_{L_j}$ is defined by [F6] and lies in $H^1(\operatorname{Fl}(E);\mathbb F_2)$; this is the content of [def-stiefel-whitney-classes-from-the-projective-bundle-relation]'s rank-one case. For $n=0$ the convention gives $\operatorname{Fl}(E)=B$ and the empty sum, and for $n=1$ the iteration stops after step 1.1, where $X_1=P(E)\cong B$ and $\gamma_E\cong E$, so $t_1=w_1(E)$. [F1, F6, step 2.1]

4.1 The fiber of the construction. Over a base point $b$, the successive projectivizations parametrize a chain of subspaces $0\subset L_1\subset L_1\oplus L_2\subset\cdots\subset E_b$ with $\dim(L_1\oplus\cdots\oplus L_j)=j$, since each stage consists of the lines in the orthogonal complement of the previous sum. Sending such a chain to the flag $V_j=L_1\oplus\cdots\oplus L_j$ is a bijection onto the complete flags in $E_b$, with inverse obtained by taking successive orthogonal complements; the identification is compatible with the chosen metrics but its underlying set of chains does not depend on them. Hence the fiber of $\operatorname{Fl}(E)\to B$ is the complete flag manifold of $\mathbb R^n$, a compact manifold, in agreement with the compactness invoked in [F5]. [F1, F3, step 2.1, step 3.1] ∎