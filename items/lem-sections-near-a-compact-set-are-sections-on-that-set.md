---
id: lem-sections-near-a-compact-set-are-sections-on-that-set
kind: lemma
title: "Sections on a compact set extend to a neighbourhood"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-sheaf-on-topological-space, def-inverse-image-presheaf-and-sheaf,
       def-sheafification, def-presheaf-plus-construction,
       lem-second-plus-construction-is-sheaf, def-germ-of-section,
       def-stalk-of-presheaf, thm-sheafification-preserves-stalks,
       lem-stalk-inverse-image-sheaf, thm-set-has-all-small-colimits,
       lem-equality-in-a-filtered-colimit-of-sets-is-eventual,
       def-filtered-category-and-filtered-colimit, def-compact-space,
       lem-compactness-of-a-subspace-is-ambient, def-locally-compact-space,
       def-hausdorff-space, def-subspace-topology-top,
       lem-t0-t1-and-hausdorff-are-hereditary,
       thm-a-compact-hausdorff-space-is-regular-and-normal,
       lem-normality-via-shrinking, thm-closure-characterisation-top,
       def-interior-closure-boundary-top,
       thm-compact-subset-of-a-hausdorff-space-is-closed,
       thm-closed-subspace-of-a-compact-space-is-compact, lem-finite-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Pierre Schapira, An Introduction to Categories and Sheaves, lecture notes, 2023"
      url: "https://webusers.imj-prg.fr/~pierre.schapira/LectNotes/CatShv.pdf"
      locator: '§10.1, printed pp. 175-176: for a subset Z with inclusion i_Z one sets F|Z = i_Z^{-1}F and Gamma(Z;F) = Gamma(Z; i_Z^{-1}F), and the natural morphism colim_{U contains Z} Gamma(U;F) -> Gamma(Z;F) of (10.1.2) is injective in general; Proposition 10.1.2(ii): it is an isomorphism whenever Z is a relatively Hausdorff compact subset of X, proved by induction on a finite cover of Z with the two-set gluing step'
    - title: "The Stacks Project, Cohomology of Sheaves (chapter 20); §16 Cohomology on Hausdorff quasi-compact spaces (Lemma 16.2, tag 09V2), whose refinements and local lifts are the same patching mechanism used here"
      url: "https://stacks.math.columbia.edu/download/cohomology.pdf"
      locator: '§16, printed pp. 26-28, complete proof of Lemma 16.2 (tag 09V2): reduction to a single refined cover on which a coherent system of local lifts, obtained by patching finitely many local data through compactness and separation, exists'
---

## Statement

Let $K\subseteq X$ be a compact subset ([[def-compact-space]]) of a locally
compact Hausdorff space ([[def-locally-compact-space]], [[def-hausdorff-space]]),
let $\mathcal F$ be a sheaf of abelian groups on $X$
([[def-sheaf-on-topological-space]]) and let $i:K\hookrightarrow X$ be the
inclusion. Then the canonical map
$$\varinjlim_{U\supseteq K,\ U\ \text{open}}\mathcal F(U)\longrightarrow\Gamma(K,i^{-1}\mathcal F)=(i^{-1}\mathcal F)(K)$$
is an isomorphism of abelian groups (of $k$-vector spaces when $\mathcal F$ is a sheaf of $k$-vector spaces). Moreover, for pairwise disjoint compact
subsets $K_1,\dots,K_m\subseteq X$ and sections $s_j\in\mathcal F(U_j)$ over open
neighbourhoods $U_j$ of the respective $K_j$, there are an open neighbourhood $U$
of $K_1\cup\dots\cup K_m$ and a section $s\in\mathcal F(U)$, together with, for
every $j$, an open neighbourhood $W_j\subseteq U_j$ of $K_j$ with
$s|_{W_j}=s_j|_{W_j}$; in particular the zero section can be prescribed on any
compact set disjoint from the given one. The isomorphism is $k$-linear in the vector-space case, and no
choice principle is used: every selection in the proof is made from finitely
many nonempty sets.

## Facts & Assumptions

**Given:** A locally compact Hausdorff space $X$, a compact subset $K\subseteq X$, a sheaf $\mathcal F$ of abelian groups on $X$, and the inclusion $i:K\hookrightarrow X$.

[F1] The inverse-image presheaf $P:=i_{\mathrm p}\mathcal F$ on $K$ is given by $P(U)=\varinjlim_{U\subseteq V}\mathcal F(V)$, the colimit over the open subsets $V$ of $X$ with $U\subseteq V$, for every open $U\subseteq K$; the inverse image sheaf is its sheafification $i^{-1}\mathcal F=aP$ with canonical morphism $\eta_P:P\to aP$, a morphism of presheaves; for an open $V\subseteq X$ and an open $U\subseteq K$ with $U\subseteq V$ there is a canonical map $\mathcal F(V)\to P(U)$ into the class of $V$ ([[def-inverse-image-presheaf-and-sheaf]], [[def-sheafification]], [[def-presheaf-plus-construction]], [[lem-second-plus-construction-is-sheaf]]). Since $i(K)=K$, the source of the canonical map of the statement is exactly $P(K)=\varinjlim_{K\subseteq V}\mathcal F(V)$, and the canonical map is the component $\eta_{P,K}:P(K)\to(aP)(K)=(i^{-1}\mathcal F)(K)=\Gamma(K,i^{-1}\mathcal F)$.

[F2] For a small filtered diagram of sets every element of the colimit is the class of an element of some stage object, and two classes are equal exactly when their representatives become equal at one common later stage ([[thm-set-has-all-small-colimits]], [[lem-equality-in-a-filtered-colimit-of-sets-is-eventual]], [[def-filtered-category-and-filtered-colimit]]). Consequently: (i) the elements of $P(K)$ are the classes $[V,a]$ of pairs with $V\supseteq K$ open in $X$ and $a\in\mathcal F(V)$, and $[V,a]=[V',a']$ holds if and only if $a|_W=a'|_W$ for some open $W$ with $K\subseteq W\subseteq V\cap V'$, in which case $[V,a]=[W,a|_W]=[V',a']$; (ii) for $x\in K$ the stalk $P_x$ is the filtered colimit of the groups $P(U)$ over the open neighbourhoods $U$ of $x$ in $K$, identified through the structure maps with $\varinjlim_{V\ni x}\mathcal F(V)=\mathcal F_x$, so that $[V,a]_x=[V',a']_x$ in $P_x$ if and only if $a$ and $a'$ agree on an open neighbourhood of $x$ ([[def-stalk-of-presheaf]], [[def-germ-of-section]]).

[F3] For every open $W\subseteq X$ there is a canonical additive map $\zeta_W:\mathcal F(W)\to(i^{-1}\mathcal F)(W\cap K)$, the composite $\mathcal F(W)\to P(W\cap K)\xrightarrow{\eta_{W\cap K}}(i^{-1}\mathcal F)(W\cap K)$ of the structure map of [F1] with the sheafification map; these maps are compatible with restriction, $\zeta_W(a)|_{W'\cap K}=\zeta_{W'}(a|_{W'})$ for open $W'\subseteq W$, and $\zeta_W(a)=\eta_{P,K}([W,a])$ whenever $W\supseteq K$ ([[def-inverse-image-presheaf-and-sheaf]], [[def-sheafification]], [[def-presheaf-plus-construction]]). Sheafification preserves stalks, so $\eta_{P,x}:P_x\to(i^{-1}\mathcal F)_x$ is a bijection for every $x\in K$ ([[thm-sheafification-preserves-stalks]]), the germ of $\eta_{P,K}(p)$ at a point $z\in K$ is $\eta_{P,z}(p_z)$, and there is a canonical isomorphism $(i^{-1}\mathcal F)_x\cong\mathcal F_x$ under which the germ of $\zeta_W(a)$ at $x\in W\cap K$ is the image of the germ $a_x$ ([[lem-stalk-inverse-image-sheaf]], [[def-germ-of-section]]). In particular, if $\zeta_W(a)$ and $\zeta_{W'}(a')$ have the same germ at a point $z\in W\cap W'\cap K$, then $a_z=a'_z$ in $\mathcal F_z$, because the stalk map $\mathcal F_z\to(i^{-1}\mathcal F)_z$ is injective.

[F4] The presheaves $\mathcal F$ and $i^{-1}\mathcal F=aP$ are sheaves: two sections of either over an open set are equal as soon as they agree on the members of an open cover of it, and sections over the members of an open cover that agree on the pairwise intersections glue to a section of the union ([[def-sheaf-on-topological-space]], [[def-sheafification]]).

[F5] Topology. $K$ is compact ([[def-compact-space]]), and a subset is a compact subset exactly when every family of open subsets of $X$ covering it has finitely many members covering it ([[lem-compactness-of-a-subspace-is-ambient]]). With the subspace topology $K$ is Hausdorff, Hausdorffness being hereditary ([[def-subspace-topology-top]], [[lem-t0-t1-and-hausdorff-are-hereditary]]), so $K$ is a compact Hausdorff space and therefore normal ([[thm-a-compact-hausdorff-space-is-regular-and-normal]]); in a normal space a closed subset of an open set can be shrunk, so $A\subseteq B\subseteq\overline B\subseteq U$ for open $B$ whenever $A\subseteq U$ with $A$ closed and $U$ open ([[lem-normality-via-shrinking]], [[thm-closure-characterisation-top]], [[def-interior-closure-boundary-top]]). In the Hausdorff space $X$ every compact subset is closed and two disjoint compact subsets have disjoint open neighbourhoods ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]); a closed subset of a compact space is compact and a finite union of compact subsets is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]). Every selection below is made from finitely many nonempty sets, which is a theorem of ZF ([[lem-finite-choice]]).

## Proof

**Proof technique:** direct.

1.1 **Reduction to the presheaf value at $K$.** The source of the canonical map of the statement is $P(K)$ and the map is the component $\eta_{P,K}$, by [F1]; the structure maps of the colimits and the sheafification map are additive (and $k$-linear in the vector-space case), so $\eta_{P,K}$ is additive. If $K=\varnothing$, the empty open set is a terminal stage of the neighbourhood diagram, and both $P(K)$ and $(i^{-1}\mathcal F)(K)$ are zero by the empty-cover sheaf axiom; hence the assertion holds. For surjectivity below assume $K\ne\varnothing$. It therefore suffices to prove that $\eta_{P,K}$ is injective and surjective. [F1, given]

1.2 **Classes and germs.** For later use, record the descriptions of [F2]: elements of $P(K)$ are classes $[V,a]$ with $V\supseteq K$ open and $a\in\mathcal F(V)$, equality being agreement after restriction to an open $W$ with $K\subseteq W\subseteq V\cap V'$; the stalk $P_x$ at $x\in K$ is the filtered colimit of the $P(U)$ and is identified with $\mathcal F_x$, and equality of germs in $P_x$ is agreement on a smaller open neighbourhood. [F2]

1.3 **$\eta_{P,K}$ is injective.** Let $p,q\in P(K)$ with $\eta_{P,K}(p)=\eta_{P,K}(q)$; write $p=[V,a]$ and $q=[V',a']$ with $K\subseteq V,V'$ open and $a\in\mathcal F(V)$, $a'\in\mathcal F(V')$ by [F2](i). Fix $z\in K$: the germ of $\eta_{P,K}(p)$ at $z$ is $\eta_{P,z}(p_z)$ and that of $\eta_{P,K}(q)$ is $\eta_{P,z}(q_z)$ by [F3], and these are equal, so $p_z=q_z$ in $P_z$ because $\eta_{P,z}$ is injective; by [F2](ii) this means that $a$ and $a'$ agree on an open neighbourhood of $z$. Let $\mathcal O$ be the family of all open subsets $O\subseteq V\cap V'$ with $a|_O=a'|_O$: it is cut out by a formula, and the previous sentence shows that it covers $K$, so by compactness of $K$ ([F5]) there are finitely many $O_1,\dots,O_m\in\mathcal O$ with $K\subseteq O_1\cup\dots\cup O_m$. Put $W:=O_1\cup\dots\cup O_m$, an open set with $K\subseteq W\subseteq V\cap V'$; the restrictions $a|_W$ and $a'|_W$ agree by locality of the sheaf $\mathcal F$ ([F4]), since they agree on each $O_t$. Hence $p=[V,a]=[W,a|_W]=[W,a'|_W]=[V',a']=q$ by [F2](i), and $\eta_{P,K}$ is injective. [F2, F3, F4, F5]

1.4 **Local representatives of a section.** Let $\sigma\in(i^{-1}\mathcal F)(K)$. For $x\in K$ the map $\eta_{P,x}:P_x\to(i^{-1}\mathcal F)_x$ is onto by [F3], so there is $\xi\in P_x$ with $\eta_{P,x}(\xi)=\sigma_x$; by the description of the stalk $P_x$ as a filtered colimit, [F2](ii), the element $\xi$ is the germ at $x$ of an element $b\in P(U)$ for some open $U\subseteq K$ containing $x$, and by [F2](i) we can write $b=[V,a]$ with $V\supseteq U$ open in $X$ and $a\in\mathcal F(V)$. Then the section $\zeta_V(a)|_U=\eta_{P,U}(b)$ of $i^{-1}\mathcal F$ over $U$ has at $x$ the same germ as $\sigma$ by [F3], and two sections of the sheaf $i^{-1}\mathcal F$ with the same germ at $x$ agree on some open neighbourhood $U'\subseteq U$ of $x$ by the description of equality in the stalk ([F2](ii) applied to $i^{-1}\mathcal F$, [F4]). Form the family $\mathcal V$ of all open subsets $U\subseteq K$ for which there are an open $V\subseteq X$ with $U\subseteq V$ and a section $a\in\mathcal F(V)$ satisfying $\zeta_V(a)|_U=\sigma|_U$: the family is cut out by a formula, and the argument above shows that every point of $K$ lies in a member of $\mathcal V$. [F2, F3, F4]

1.5 **Finitely many pieces with compact cores.** By compactness of $K$ ([F5]) there are finitely many members $U_0,\dots,U_m\in\mathcal V$ with $K=U_0\cup\dots\cup U_m$, and for each $i$ we select witnesses: an open $V_i\subseteq X$ with $U_i\subseteq V_i$ and a section $a_i\in\mathcal F(V_i)$ with $\zeta_{V_i}(a_i)|_{U_i}=\sigma|_{U_i}$; these are finitely many selections ([F5], [F3]). The compact Hausdorff space $K$ is normal ([F5]), so its finite open cover $(U_0,\dots,U_m)$ can be shrunk: recursively for $i=0,\dots,m$, maintaining $K=(\bigcup_{j<i}B_j)\cup(\bigcup_{j\ge i}U_j)$, the set $F_i:=K\setminus\bigl(\bigcup_{j<i}B_j\cup\bigcup_{j>i}U_j\bigr)$ is closed in $K$ and contained in $U_i$, and normality supplies an open $B_i\subseteq K$ with $F_i\subseteq B_i\subseteq\overline{B_i}\subseteq U_i$, the closure taken in $K$ ([[thm-closure-characterisation-top]]); the invariant is maintained and at the end $K=B_0\cup\dots\cup B_m$. Put $C_i:=\overline{B_i}$, a compact subset of $K$ with $C_i\subseteq U_i$ ([F5]); then $C_0,\dots,C_m$ are compact subsets of $K$ with $K=C_0\cup\dots\cup C_m$ and $C_i\subseteq U_i\subseteq V_i$ for every $i$. [F3, F5, construct]

1.6 **Neighbourhoods of the pairwise intersections.** For all indices $i,j$ let $\mathcal O_{ij}$ be the family of all open subsets $O\subseteq V_i\cap V_j$ with $a_i|_O=a_j|_O$. It covers $C_i\cap C_j$: for $z\in C_i\cap C_j\subseteq U_i\cap U_j$ the sections $\zeta_{V_i}(a_i)=\sigma|_{U_i}$ and $\zeta_{V_j}(a_j)=\sigma|_{U_j}$ have the same germ $\sigma_z$ at $z$, so $a_i$ and $a_j$ have the same germ at $z$ by [F3], and by [F2](ii) they agree on an open neighbourhood of $z$. Since $C_i\cap C_j$ is a closed subset of the compact set $C_i$, hence compact ([F5]), finitely many members of $\mathcal O_{ij}$ cover it; their union is an open set $W_{ij}$ with $C_i\cap C_j\subseteq W_{ij}\subseteq V_i\cap V_j$ and, by locality of $\mathcal F$ ([F4]), $a_i|_{W_{ij}}=a_j|_{W_{ij}}$. [F2, F3, F4, F5]

1.7 **Fusion of two pieces.** Let $C_1,C_2\subseteq X$ be compact, let $V_1,V_2\subseteq X$ be open with $C_k\subseteq V_k$ and let $s_k\in\mathcal F(V_k)$ for $k=1,2$; suppose that $W\subseteq V_1\cap V_2$ is open with $C_1\cap C_2\subseteq W$ and $s_1|_W=s_2|_W$. Then there are an open $V'\subseteq X$ with $C_1\cup C_2\subseteq V'$ and a section $s'\in\mathcal F(V')$, together with open $V_k'\subseteq V_k$ with $C_k\subseteq V_k'$ and $V'=V_1'\cup V_2'$, such that $s'|_{V_k'}=s_k|_{V_k'}$ for $k=1,2$. Indeed, $A:=C_1\setminus W$ and $B:=C_2\setminus W$ are closed subsets of the compact sets $C_1$ and $C_2$, hence compact, and they are disjoint because $C_1\cap C_2\subseteq W$; as $X$ is Hausdorff there are disjoint open sets $G_1\supseteq A$ and $G_2\supseteq B$ ([F5]). Set $V_1':=V_1\cap(G_1\cup W)$ and $V_2':=V_2\cap(G_2\cup W)$: these are open, $C_1=(C_1\cap W)\cup A\subseteq V_1'$ and $C_2=(C_2\cap W)\cup B\subseteq V_2'$, and $V_1'\cap V_2'\subseteq(G_1\cup W)\cap(G_2\cup W)=W\cup(G_1\cap W)\cup(G_2\cap W)\cup(G_1\cap G_2)\subseteq W$, since $G_1\cap G_2=\varnothing$. Hence $s_1|_{V_1'}$ and $s_2|_{V_2'}$ agree on $V_1'\cap V_2'$ and glue, by the sheaf axiom for $\mathcal F$ ([F4]), to a section $s'$ of $\mathcal F$ over $V'=V_1'\cup V_2'\supseteq C_1\cup C_2$ with $s'|_{V_k'}=s_k|_{V_k'}$ for $k=1,2$. [F4, F5, construct]

2.1 **Iterated fusion.** Fuse the pieces of step 1.5 one after another: for each $k\in\{0,\dots,m\}$ there are an open $V^{(k)}\supseteq C_0\cup\dots\cup C_k$ and a section $a^{(k)}\in\mathcal F(V^{(k)})$ such that $\zeta_{V^{(k)}}(a^{(k)})$ and $\sigma$ agree on an open neighbourhood of $D_k:=C_0\cup\dots\cup C_k$ in $K$. For $k=0$ this is step 1.5. For the inductive step, $D_k$ is compact ([F5]) and on the compact set $D_k\cap C_{k+1}$ the sections $\zeta_{V^{(k)}}(a^{(k)})$ and $\zeta_{V_{k+1}}(a_{k+1})$ both agree with $\sigma$ on open neighbourhoods, so their germs agree everywhere on $D_k\cap C_{k+1}$ and [F3] gives that $a^{(k)}$ and $a_{k+1}$ have equal germs at every point of it; the compactness-and-locality argument of step 1.6 applied to these two sections produces an open $W\subseteq V^{(k)}\cap V_{k+1}$ with $D_k\cap C_{k+1}\subseteq W$ and $a^{(k)}|_W=a_{k+1}|_W$. Apply the fusion of step 1.7 with $(C_1,V_1,s_1):=(D_k,V^{(k)},a^{(k)})$ and $(C_2,V_2,s_2):=(C_{k+1},V_{k+1},a_{k+1})$: it gives open $V''=V_1'\cup V_2'$ and $a''\in\mathcal F(V'')$ with $a''|_{V_1'}=a^{(k)}|_{V_1'}$, $a''|_{V_2'}=a_{k+1}|_{V_2'}$, where $D_k\subseteq V_1'$ and $C_{k+1}\subseteq V_2'$. Let $E_k\subseteq V^{(k)}\cap K$ be an open neighbourhood of $D_k$ on which $\zeta_{V^{(k)}}(a^{(k)})=\sigma$. By restriction compatibility [F3], $\zeta_{V''}(a'')$ agrees with $\sigma$ on $(V_1'\cap E_k)\cup(V_2'\cap U_{k+1})$, an open neighbourhood of $D_{k+1}$ in $K$; locality [F4] gives agreement on this union. This proves the claim for $k+1$. [step 1.5, step 1.6, step 1.7, F3, F4, F5]

3.1 **$\eta_{P,K}$ is surjective.** In the notation of step 2.1 with $k=m$ we have an open $V:=V^{(m)}\supseteq C_0\cup\dots\cup C_m=K$ and a section $a\in\mathcal F(V)$ such that $\zeta_V(a)$ and $\sigma$ agree on an open neighbourhood of $K$; in particular they have equal germs at every point of $K$. Two sections of the sheaf $i^{-1}\mathcal F$ over $K$ with equal germs at every point agree by locality ([F4]), so $\zeta_V(a)=\sigma$, and since $V\supseteq K$ this says $\sigma=\eta_{P,K}([V,a])$ by [F3]. Hence $\eta_{P,K}$ is surjective. [step 2.1, F3, F4]

4.1 **The isomorphism and the disjoint-family gluing.** By steps 1.1, 1.3 and 3.1 the map $\eta_{P,K}$ is bijective and additive, so the canonical map of the statement is an isomorphism of abelian groups (of $k$-vector spaces when $\mathcal F$ is a sheaf of $k$-vector spaces). For the moreover clause let $K_1,\dots,K_m$ be pairwise disjoint compact subsets and $s_j\in\mathcal F(U_j)$ with $U_j\supseteq K_j$ open. For $m=0$ take the zero section on the empty open set; for $m=1$ take $s_1$ on $U_1$. For $m\ge2$, fuse $(K_1,s_1)$ with $(K_2,s_2)$ by step 1.7 taking $W:=\varnothing$ in the hypothesis, which is an open subset of $V_1\cap V_2$ with $K_1\cap K_2=\varnothing\subseteq W$ and the vacuous agreement $s_1|_\varnothing=s_2|_\varnothing$, obtaining open $V_1',V_2'$ with $K_j\subseteq V_j'\subseteq U_j$ and a section $s'\in\mathcal F(V_1'\cup V_2')$ equal to $s_j$ on $V_j'$ for $j=1,2$. Now fuse $s'$ with $s_3$ in the same way, with $W:=\varnothing$ again, and continue; maintaining that the current section equals $s_j$ on an open subset of $U_j$ containing $K_j$ for each $j$ already treated, the fusion step preserves the previous agreements because its new first domain $V_1'$ contains the union of the treated compact sets and the current section equals the previous one on $V_1'$. After $m-1$ fusions this yields an open neighbourhood of $K_1\cup\dots\cup K_m$ and a section restricting to $s_j$ on an open neighbourhood $W_j\subseteq U_j$ of $K_j$ for every $j$; applying this with the zero section $s_2=0$ over $X$ on a compact set $K_2$ disjoint from $K=K_1$ is the final assertion. The canonical map is additive and is $k$-linear in the vector-space case; the only selections used were finitely many, as recorded in [F5]. [step 1.3, step 1.7, step 3.1, F5] ∎

## Remarks

- The argument uses only that $X$ is Hausdorff: local compactness is part of the hypothesis because the consumers of this lemma are the c-soft sheaves on this page, but no step above needs it. Hausdorffness, by contrast, is essential: it is spent exactly in the fusion step 1.7, where the disjoint compact sets $C_1\setminus W$ and $C_2\setminus W$ must be separated by disjoint open sets, and on a non-Hausdorff space two sections that agree near a common compact set need not glue to a single section near the union. The compact Hausdorff normal structure is used for the finite shrinking in step 1.5.

- No cohomology is involved and every selection is finite: the family of local representations in step 1.4 and the agreement families in steps 1.3 and 1.6 are defined by formulas, thinned to finite subfamilies by compactness of $K$ or of the relevant compact pieces, and only then are finitely many witnesses chosen, which [[lem-finite-choice]] supplies in ZF. In particular the lemma holds in the choice-free part of the library, and consumers that do not otherwise use the Axiom of Choice may cite it without adding a choice assumption.
