---
id: thm-milnor-join-model-is-a-contractible-free-g-space
kind: theorem
title: Milnor's join model is a contractible free G-space
status: draft
origin: pipeline
deps: ["def-milnor-infinite-join-model-of-eg", "lem-finite-join-models-for-circle-and-two-point-groups", "lem-locally-finite-sums-are-continuous", "def-locally-trivial-fiber-bundle"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: John Milnor, Construction of Universal Bundles II
      url: https://uregina.ca/~franklam/Math527/Milnor_Universal2.pdf
      locator: Sections 2--3 and 5, printed pages 430--433 and 435--436; strong topology, ordinary charts, and weak CW-group variant
    - title: Tammo tom Dieck, Algebraic Topology
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/diecktop.pdf
      locator: Sections 14.4.1--14.4.6 and 14.4.12, printed pages 344--348; coordinate continuity, contraction, numerability, and uniqueness of universal bundles
    - title: Dale Husemoller, Fibre Bundles, Third Edition
      url: https://link.springer.com/book/10.1007/978-1-4757-2261-1
      locator: Chapter 4, Theorem 11.2 and Proposition 12.3, printed pages 54--58
    - title: Stanley P. Franklin and Barbara V. Smith Thomas, A Survey of k-omega Spaces
      url: https://topology.nipissingu.ca/tp/reprints/v02/tp02105.pdf
      locator: Property 4, printed page 113; finite products of compact-stage sequential colimits
---

## Statement

For a well-pointed topological group $G$ of CW type, the diagonal action on Milnor's $EG$ is free, $EG$ is contractible, and

$$ p:EG\longrightarrow BG $$

is a numerable principal $G$-bundle. The numeration satisfies the library's support-subordinate convention, not merely cozero containment.

The embeddings

$$e\left(\sum_i t_i g_i\right)=\sum_i t_i g_i\text{ in slot }2i,\qquad o\left(\sum_i t_i g_i\right)=\sum_i t_i g_i\text{ in slot }2i+1$$

are $G$-equivariantly homotopic to the identity. If $a,b:T\to EG$ are
continuous equivariant maps, then
$(1-t)e(a(-))+t\,o(b(-))$ is a continuous equivariant homotopy.

For $G=S^1$ or $G=\mathbb Z/2$, the selected compact-group topology identifies $BG$ with the standard weak CW colimit of the finite projective quotients $\mathbb{CP}^N$ or $\mathbb{RP}^N$, respectively.

## Facts & Assumptions

[F1] The finite quotient joins provide the set of formal sums. For compact Hausdorff $G$, $EG$ has their ordinary weak direct-limit topology; otherwise it has the ordinary, un-kified coordinate-label strong topology. In both branches $BG$ has the ordinary orbit-quotient topology and weights and positive-locus labels are continuous. Continuity into the strong branch is equivalent to continuity of those coordinates; continuity out of the weak branch is checked on its compact finite stages ([[def-milnor-infinite-join-model-of-eg]]).

[F2] A locally finite family of nonnegative continuous functions has continuous sum ([[lem-locally-finite-sums-are-continuous]]); finite maxima, sums, and division by a positive function are continuous by elementary real arithmetic.

[F3] In the library's numerability convention, the closed support of each partition function must lie inside an assigned trivializing open set, and the chart uses an ordinary product ([[def-locally-trivial-fiber-bundle]]).

[F4] For $G=S^1$ and $G=\mathbb Z/2$, the compact finite quotient joins are respectively spheres $S^{2N+1}$ and $S^N$, with quotient spaces $\mathbb{CP}^N$ and $\mathbb{RP}^N$, compatibly with stage inclusions ([[lem-finite-join-models-for-circle-and-two-point-groups]]).


## Proof

**Given:** $G$, $EG$, $BG$, and $p$ as in the statement.

1.1 If $xh=x$ and $t_i(x)>0$, equality of join representatives gives $g_i h=g_i$, hence $h=1$. Some coordinate is positive because the coordinates sum to one, so the action is free. [F1]

1.2 We construct the promised contraction rather than infer contractibility from vanishing homotopy groups. Let $I_n=[1-2^{-n},1-2^{-n-1}]$ and $\alpha_n(s)=2^{n+1}s-2^{n+1}+2$. For $s\in I_n$, define $R_s(x)$ by retaining the coordinates $0,\ldots,n$ and, for every $j\geq1$, replacing the term $t_{n+j}g_{n+j}$ by [F1]

$$ \alpha_n(s)t_{n+j}g_{n+j}\ \text{ in slot }n+2j-1,\qquad (1-\alpha_n(s))t_{n+j}g_{n+j}\ \text{ in slot }n+2j. $$

At $s=0$ this is the even-coordinate embedding $R_0(\sum t_i g_i)=\sum t_i g_i$ with the $i$th term placed in slot $2i$; at $s=1$ put $R_1=\operatorname{id}$. At the common endpoint of $I_n$ and $I_{n+1}$, the first tail coordinate has reached slot $n+1$ and every later coordinate occupies the same slot in the two formulas. Thus the formulas agree. First consider the noncompact, strong-topology branch. Fix an output slot $k$. Only the finitely many intervals $I_0,\ldots,I_{k-1}$ can change its coordinate: for $s\geq1-2^{-k}$ that output coordinate and, where positive, its label are exactly the input $k$th coordinate and label. On each earlier interval its weight is a continuous product of $\alpha_n(s)$ or $1-\alpha_n(s)$ with one input weight, or is an unchanged input weight. Wherever that output weight is positive, its label is the corresponding continuous input label. At interval endpoints the two weight formulas and their positive labels agree, so finite pasting gives continuity of the $k$th weight and positive-label map on the ordinary product $EG\times I$, including at $s=1$. The strong-coordinate criterion of [F1] proves $R:EG\times I\to EG$ continuous. It is $G$-equivariant because it moves weights and slots without changing labels. No compact image is assumed to lie in a finite stage; Step 4.1 checks ordinary continuity separately for the compact weak branch. [F1]

1.3 In the noncompact strong branch the diagonal action is continuous for **ordinary** $EG\times G$: its $i$th weight is $t_i(x)$, and on the open locus $t_i(x)>0$ its $i$th label is $g_i(x)h$, continuous by ordinary group multiplication. The strong-coordinate criterion in [F1] proves continuity of the action. Put $U_i=\{b\in BG:t_i(b)>0\}$ and $E_i=p^{-1}(U_i)$. The sets $U_i$ cover $BG$ because some weight is positive, and each $E_i$ is a saturated open subset of $EG$. The map $N_i:E_i\to E_i$, $N_i(x)=xg_i(x)^{-1}$, is continuous by the ordinary action and inversion; $N_i(xh)=N_i(x)$ and its $i$th label is $1$. Restricting the ordinary quotient map $p$ to the saturated open $E_i$ is still a quotient map, so $N_i$ descends to a continuous section $s_i:U_i\to E_i$. The maps

$$ U_i\times G\longrightarrow p^{-1}(U_i),\quad(b,h)\longmapsto s_i(b)h,\qquad x\longmapsto(p(x),g_i(x)) $$

are continuous for the ordinary product and subspace topologies: the first is
the composite of $s_i\times\mathrm{id}_G$ with the ordinary action, and the
second is continuous by the ordinary product universal property and the
partial-label continuity in [F1]. They are inverse because
$g_i(s_i(b)h)=h$ and $s_i(p(x))g_i(x)=x$. Thus they are precisely the
ordinary principal-bundle charts required by [F3]. Step 3.1 supplies the same charts for the compact weak branch. [F1, F3]

1.4 The coordinate family need not be locally finite, so set [F1, F2]

$$ w_i=\max\left(0,t_i-\sum_{j<i}t_j\right). $$

At a point, its least positive coordinate has positive $w_i$, so $W=\sum_iw_i$ is everywhere positive. If $N$ is the last positive coordinate at $b$, then on a neighborhood where $\sum_{j\leq N}t_j>1/2$, every $i>N$ satisfies $t_i<1/2<\sum_{j<i}t_j$ and hence $w_i=0$. Thus $(w_i)$ is locally finite, $W$ is continuous, and $v_i=w_i/W$ is a locally finite partition with $\{v_i>0\}\subseteq U_i$. [F1, F2]

2.1 The even image uses no odd coordinate. Hence [F1, step 1.2]

$$ C_u\left(\sum_i t_i g_i\text{ in slot }2i\right)=u\,1\text{ in slot }1+\sum_i(1-u)t_i g_i\text{ in slot }2i $$

is a homotopy from the even embedding to the identity-labelled vertex in slot $1$. In the noncompact strong branch, its slot-$1$ weight is $u$ with label $1$ where positive; its even-slot weights are $(1-u)t_i$ with label $g_i$ where positive; every other weight is zero. These are continuous weights and positive-locus labels, so [F1] proves ordinary continuity of $C$. Reversing $R$ and then applying $C$ contracts that $EG$. Notice that $C$ is not asserted equivariant. Splitting each even-coordinate weight as $(1-u)t_i$ in slot $2i$ and $u t_i$ in slot $2i+1$, both carrying $g_i$, likewise gives an ordinary-continuous $G$-equivariant homotopy from the even embedding to the odd embedding. Consequently both parity embeddings are $G$-equivariantly homotopic to the identity in this branch. For continuous equivariant $a,b:T\to EG$, the disjoint-support interpolation has even-slot weights $(1-u)t_i(a(z))$ and odd-slot weights $u t_i(b(z))$ on $T\times I$. On each positive-weight locus its label is respectively $g_i(a(z))$ or $g_i(b(z))$, hence continuous there. The strong-coordinate criterion of [F1] proves the interpolation continuous for the ordinary product $T\times I$; termwise it is equivariant. No compact-stage factorization is used in this branch; Step 4.1 treats the compact weak branch. [F1, step 1.2]

2.2 Cozero containment in Step 1.4 is weaker than [F3]. Choose $\varepsilon_i=2^{-i-2}$, so $\sum_i\varepsilon_i=1/2$, and put $a_i=\max(0,v_i-\varepsilon_i)$. Some $a_i$ is positive at every point, since otherwise $1=\sum_i v_i\leq1/2$. The family is locally finite, $A=\sum_i a_i$ is positive and continuous, and $\rho_i=a_i/A$ is a partition of unity. Moreover [F2, F3, step 1.4]

$$ \operatorname{supp}(\rho_i)\subseteq\{v_i\geq\varepsilon_i\}\subseteq U_i. $$

3.1 Now let $G$ be any compact Hausdorff group, so [F1] selects the ordinary weak direct limit $EG=\operatorname*{colim}_N J_N^{\mathrm q}$. Each $J_N^{\mathrm q}$ is compact Hausdorff: the relation identifying labels at zero-weight slots is closed in $(\Delta^N\times G^{N+1})^2$, and appending zero gives a closed embedding. Hence this sequential compact-stage limit is a $k_\omega$ space. Its ordinary finite products with itself, $G$, and $I$ have the final topology for the products of finite compact stages (Franklin--Thomas, property 4). On $J_M^{\mathrm q}\times G$, the diagonal action is the finite quotient of the continuous coordinate action and is continuous; the finite quotient map remains quotient after multiplying by compact $G$, since its source is compact and its target Hausdorff. The product-stage criterion therefore proves that $EG\times G\to EG$ is ordinary-continuous. The same ordinary action, continuous positive-locus labels, and saturated-open quotient argument of Step 1.3 give the explicit sections $s_i$ and inverse ordinary charts $U_i\times G\cong p^{-1}(U_i)$ in this branch as well. Since each $t_i$ is stagewise continuous, Steps 1.4 and 2.2 give the same support-subordinate numeration. [F1, F3, step 1.3, step 1.4, step 2.2]

4.1 Every required homotopy in the compact branch is likewise ordinary-continuous by the product-stage criterion, not by a claim that every compact image lies in a finite join. On $J_M^{\mathrm q}\times I$, the formula for $R$ from Step 1.2 uses only the finitely many intervals before $1-2^{-M}$ and is then the identity; finite closed pasting into $J_{2M}^{\mathrm q}$ proves continuity, including at $s=1$. The cone $C$ and even-to-odd interpolation of Step 2.1 map $J_M^{\mathrm q}\times I$ into a fixed finite join and are continuous finite quotient formulas. The disjoint-support interpolation on $J_M^{\mathrm q}\times J_N^{\mathrm q}\times I$ is a continuous finite quotient formula into $J_{\max(2M,2N+1)}^{\mathrm q}$. Since ordinary products of these compact-stage limits have the stated final topology, all four maps are continuous on their full ordinary product domains. Composing the last one with arbitrary continuous equivariant $a,b:T\to EG$ proves its asserted continuity on $T\times I$; the formulas are $G$-equivariant where claimed. Reversing $R$ and following it by $C$ contracts $EG$. Finally, ordinary orbit quotients commute with this final topology: a set in $BG$ is open exactly when its pullback to every $J_N^{\mathrm q}$ is open, equivalently when its intersection with every $J_N^{\mathrm q}/G$ is open. Thus [F4] identifies the **selected** $BG$ for $S^1$ or $\mathbb Z/2$ literally with the standard weak CW colimit $\operatorname*{colim}_N\mathbb{CP}^N$ or $\operatorname*{colim}_N\mathbb{RP}^N$. [F1, F4, step 1.2, step 2.1, step 3.1]

5.1 Step 1.1 proves freeness in both branches. Steps 1.2, 1.3, and 2.1 prove ordinary continuity for the noncompact strong branch; Steps 3.1--4.1 prove it for the compact weak branch. The resulting ordinary charts and $(\rho_i)$ satisfy the exact library numerability convention, and the contractions and parity homotopies establish every remaining assertion. The trivial and disconnected groups are included. $\square$ [F1, F2, F3, F4, step 1.1, step 1.2, step 1.3, step 1.4, step 2.1, step 2.2, step 3.1, step 4.1]
