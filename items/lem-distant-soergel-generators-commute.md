---
id: lem-distant-soergel-generators-commute
kind: lemma
title: "Distant Soergel generators commute"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-type-a-soergel-bimodule-for-a-simple-reflection, def-type-a-reflection-realization-and-polynomial-ring]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Elias–Williamson, Soergel Calculus, §§3, 5–7"
      url: "https://arxiv.org/pdf/1309.0865"
    - title: "Libedinsky, Gentle Introduction to Soergel Bimodules I, §§2–5"
      url: "https://arxiv.org/pdf/1702.00039"
verification:
  precheck: pass
---

## Statement

If $|i-j|>1$, then $B_i\otimes_RB_j\cong B_j\otimes_RB_i$ as graded
$(R,R)$-bimodules, and on the level of split Grothendieck classes
$[B_i][B_j]=[B_j][B_i]$.

## Facts & Assumptions
**Given:** Simple reflections $s_i,s_j$ with $|i-j|>1$, the invariant rings $R^{s_i},R^{s_j},R^{s_is_j}$ and the generators $B_i=R\otimes_{R^{s_i}}R(1)$, $B_j=R\otimes_{R^{s_j}}R(1)$.

[F1] $B_i$ is the graded $(R,R)$-bimodule $R\otimes_{R^{s_i}}R(1)$ with left action $r'(r\otimes r'')=r'r\otimes r''$, right action $(r\otimes r'')r'=r\otimes r''r'$, and $(B_i)_d=(R\otimes_{R^{s_i}}R)_{d+1}$ ([[def-type-a-soergel-bimodule-for-a-simple-reflection]]).

[F2] $R=\mathbb Q[x_1,\ldots,x_n]=\mathbb Q[x_i,x_{i+1}]\otimes_{\mathbb Q}\mathbb Q[x_j,x_{j+1}]\otimes_{\mathbb Q}C$ where $C$ is the polynomial ring in the remaining indeterminates, the $S_n$-action permutes the indeterminates, and $s_i$ fixes every indeterminate outside $\{x_i,x_{i+1}\}$ while $s_j$ fixes every indeterminate outside $\{x_j,x_{j+1}\}$ ([[def-type-a-reflection-realization-and-polynomial-ring]]).



## Proof

1.1 Since $|i-j|>1$ the reflections $s_i$ and $s_j$ commute, each fixes the indeterminates moved by the other, and they move disjoint pairs of indeterminates. Hence $s_i$ *preserves* the subring $R^{s_j}$ (it maps it onto $R^{s_is_js_i}=R^{s_j}$) and $s_j$ preserves $R^{s_i}$; neither transposition fixes the other invariant subring pointwise, since for instance $s_1(x_1)=x_2$ and $x_1\in R^{s_3}$. The block factorization below uses the disjoint coordinate pairs: writing $R=A\otimes_{\mathbb Q}B\otimes_{\mathbb Q}C$ with $A:=\mathbb Q[x_i,x_{i+1}]$ and $B:=\mathbb Q[x_j,x_{j+1}]$, one has $R^{s_i}=A^{s_i}\otimes_{\mathbb Q}B\otimes_{\mathbb Q}C$ and $R^{s_j}=A\otimes_{\mathbb Q}B^{s_j}\otimes_{\mathbb Q}C$; these independent actions permit the two rank-one factors to be interchanged while retaining both outer $R$-actions. [F1, F2]

2.1 Collapsing the middle: the tensor product $B_i\otimes_RB_j$ is $\bigl(R\otimes_{R^{s_i}}R\bigr)\otimes_R\bigl(R\otimes_{R^{s_j}}R\bigr)$ with the outer shift $(2)$, and the map $(a\otimes b)\otimes(c\otimes d)\mapsto a\otimes bc\otimes d$ into the threefold tensor $T:=R\otimes_{R^{s_i}}R\otimes_{R^{s_j}}R$ is a degree-zero isomorphism of graded $(R,R)$-bimodules: the $\otimes_R$ relation identifies $(b,c)$ with the single element $bc$, so the relations of the fourfold tensor (the two balanced relations and the middle $R$-bilinearity) are exactly the relations of $T$ (the $R^{s_i}$-relation on the first two slots and the $R^{s_j}$-relation on the last two), and the identification $R\otimes_RR\cong R$ is bijective; the left action multiplies the first slot and the right action the last, unchanged by the collapse. [F1, step 1.1]

2.2 A rank-one block lemma, to be applied twice below. Let $\Lambda\subseteq R$ be a polynomial subring of the form $\Lambda=\mathbb Q[y_1,y_2]$ on which a simple reflection $s$ acts by swapping $y_1,y_2$, and let $E\subseteq R$ be a polynomial ring with $R=\Lambda\otimes_{\mathbb Q}E$ on which $s$ acts trivially, so that $R^s=\Lambda^s\otimes_{\mathbb Q}E$. Then $$\Theta:\ R\otimes_{R^s}R\longrightarrow\bigl(\Lambda\otimes_{\Lambda^s}\Lambda\bigr)\otimes_{\mathbb Q}E,\qquad \Theta(r_1\otimes r_2)=(a_1\otimes a_2)\otimes d_1d_2\quad(r_k=a_k\otimes d_k,\ a_k\in\Lambda,\ d_k\in E),$$ is a well-defined degree-zero isomorphism of graded $(R,R)$-bimodules with two-sided inverse $\Theta^{-1}\bigl((p_1\otimes p_2)\otimes d\bigr)=(p_1\otimes1)\otimes(p_2\otimes d)$. Well-definedness: for a pure element $f=g\otimes e$ of $R^s=\Lambda^s\otimes_{\mathbb Q}E$ one has $\Theta\bigl((r_1f)\otimes r_2\bigr)=(a_1g\otimes a_2)\otimes d_1ed_2=(a_1\otimes ga_2)\otimes d_1ed_2=\Theta\bigl(r_1\otimes(fr_2)\bigr)$, since $g\in\Lambda^s$ may cross the balanced tensor $\Lambda\otimes_{\Lambda^s}\Lambda$, and $\Theta^{-1}$ is well defined for the same reason. The two composites are the identity on the pure tensors, which span: $\Theta\Theta^{-1}\bigl((p_1\otimes p_2)\otimes d\bigr)=(p_1\otimes p_2)\otimes d$, while $\Theta^{-1}\Theta(r_1\otimes r_2)=(a_1\otimes1)\otimes(a_2\otimes d_1d_2)=(a_1\otimes d_1)\otimes(a_2\otimes d_2)$, the last equality moving the element $d_1\in E\subseteq R^s$ from the first to the second slot by the $R^s$-balancing. Both sides carry their standard $(R,R)$-bimodule structures — the left action of $R=\Lambda\otimes_{\mathbb Q}E$ multiplies the first slot on the left, which on the right hand side means the first $\Lambda$-slot by the $\Lambda$-component and the $E$-tensorand by the $E$-component, and dually on the right — and $\Theta$ intertwines them; degrees are additive on both sides because $\deg r_k=\deg a_k+\deg d_k$. [step 1.1, F2]

3.1 Factorization of the threefold tensor. By [F2] the hypothesis of step 2.2 holds for $s=s_i$ with $\Lambda=A:=\mathbb Q[x_i,x_{i+1}]$ and $E=B\otimes_{\mathbb Q}C$, and for $s=s_j$ with $\Lambda=B:=\mathbb Q[x_j,x_{j+1}]$ and $E=A\otimes_{\mathbb Q}C$; note that $B\otimes_{\mathbb Q}C\subseteq R^{s_i}$ and $A\otimes_{\mathbb Q}C\subseteq R^{s_j}$ and that $s_i$ and $s_j$ act trivially on the complementary factors, since $|i-j|>1$ makes the two blocks disjoint. Put $P:=A\otimes_{A^{s_i}}A$ and $Q:=B\otimes_{B^{s_j}}B$. Applying step 2.2 twice to the four-slot presentation of step 2.1 gives $$T\cong\bigl(P\otimes_{\mathbb Q}B\otimes_{\mathbb Q}C\bigr)\otimes_R\bigl(A\otimes_{\mathbb Q}C\otimes_{\mathbb Q}Q\bigr),$$ deg-zero as $(R,R)$-bimodules. Here the first factor is $P\otimes_AR$ and the second is $R\otimes_BQ$ as $(R,R)$-bimodules, because $R=A\otimes_{\mathbb Q}B\otimes_{\mathbb Q}C$: on $P\otimes_AR$ the left action multiplies the first $A$-slot of $P$ and the $B$- and $C$-tensorands by their respective components, while the right action multiplies the second $A$-slot of $P$ and those same $B,C$ tensorands, which is exactly the action on $P\otimes_{\mathbb Q}B\otimes_{\mathbb Q}C$; dually for $R\otimes_BQ$ and $A\otimes_{\mathbb Q}C\otimes_{\mathbb Q}Q$. Associativity of the tensor product and the unit isomorphisms $A\otimes_A-\cong-$, $-\otimes_BB\cong-$ over the polynomial rings $A,B,C$ (all modules occurring are free, so no flatness question arises) therefore give a degree-zero $(R,R)$-bimodule isomorphism $$\rho:\ T\longrightarrow P\otimes_{\mathbb Q}Q\otimes_{\mathbb Q}C,$$ and chasing a pure tensor through the chain gives $\rho(a_1\otimes a_2b_1\otimes b_2\gamma)=(a_1\otimes a_2)\otimes(b_1\otimes b_2)\otimes\gamma$ for $a_1,a_2\in A$, $b_1,b_2\in B$, $\gamma\in C$: the block maps of step 2.2 read $a_1, a_2$ and $b_1,b_2$ off the first and second slots, the $R$-balancing of the tensor over $R$ absorbs the middle $A$-component of $b_2\gamma$ and the middle $B$-component of $a_2b_1$ into the outer $A$- and $B$-actions, and the $C$-components multiply. Consequently $$\tau:=\rho^{-1}:\ P\otimes_{\mathbb Q}Q\otimes_{\mathbb Q}C\longrightarrow T,\qquad (a_1\otimes a_2)\otimes(b_1\otimes b_2)\otimes\gamma\longmapsto a_1\otimes a_2b_1\otimes b_2\gamma,$$ is a well-defined degree-zero $(R,R)$-bimodule isomorphism. Its bimodule structure is read off from $\rho$: the left action of $r=r_A\otimes r_B\otimes r_C\in R$ multiplies the first $A$-slot of $P$ by $r_A$, the first $B$-slot of $Q$ by $r_B$ and the $C$-tensorand by $r_C$, while the right action multiplies the second $A$-slot by $r_A$, the second $B$-slot by $r_B$ and the $C$-tensorand by $r_C$. [step 2.1, step 2.2, F2]

4.1 Reversal: the same two applications of step 2.2 with the two colours exchanged give a degree-zero $(R,R)$-bimodule isomorphism $\tau':Q\otimes_{\mathbb Q}P\otimes_{\mathbb Q}C\to T'$ with $T':=R\otimes_{R^{s_j}}R\otimes_{R^{s_i}}R$, of the same shape as $\tau$. The flip $$\sigma:\ P\otimes_{\mathbb Q}Q\otimes_{\mathbb Q}C\longrightarrow Q\otimes_{\mathbb Q}P\otimes_{\mathbb Q}C,\qquad\sigma(p\otimes q\otimes\gamma):=q\otimes p\otimes\gamma,$$ is $k$-balanced and degree zero, and it is an $(R,R)$-bimodule map: by step 3.1 the left action of $R$ is determined by which tensor factor carries which label — $A$ acts on the $P$-factor, $B$ on the $Q$-factor, $C$ on the $C$-factor, on the left through the first $A$- resp. $B$-slot and on the right through the second — and $\sigma$ exchanges the positions of the $P$- and $Q$-factors without changing their labels, so it commutes with both actions. Hence $\varphi:=\tau'\circ\sigma\circ\tau^{-1}:T\to T'$ is a degree-zero $(R,R)$-bimodule isomorphism which interchanges the two balanced tensor factors and does not simply reverse the order of the three slots, and $T\cong T'$. [step 2.2, step 3.1]

5.1 Shifts: $B_i\otimes_RB_j\cong T(2)$ and $B_j\otimes_RB_i\cong T'(2)$, each factor contributing its own $(1)$; since $\varphi$ is degree-zero, the composite $B_i\otimes_RB_j\to T(2)\to T'(2)\to B_j\otimes_RB_i$ is a degree-zero isomorphism of graded bimodules. [F1, step 2.1, step 4.1]

6.1 Consequently $B_i\otimes_RB_j\cong B_j\otimes_RB_i$ as graded $(R,R)$-bimodules; passing to split Grothendieck classes, where the class of a tensor product is the product of the classes, gives $[B_i][B_j]=[B_j][B_i]$. ∎ [step 5.1]
