---
id: thm-parabolics-and-levi-decomposition
kind: theorem
title: Parabolic subgroups and Levi decomposition
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 30
deps: [lem-root-datum-combinatorics, thm-weight-subgroups-of-a-torus-action, lem-standard-levi-subgroup, def-parabolic-subgroup-of-an-affine-algebraic-group, thm-bruhat-decomposition-for-split-reductive-group, lem-simple-reflection-double-coset-rule, thm-root-subgroups-of-a-split-reductive-group, thm-weyl-group-borel-chambers, thm-chevalley-centralizer-radical-and-reductive-centralizers, thm-cocharacter-limit-subgroups, thm-quotient-by-a-borel-subgroup-is-complete, thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field, thm-solvable-subgroups-and-the-radical-as-borel-intersection, def-axiom-of-choice, def-root-datum-of-a-split-reductive-group]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 21 (21.88) and (21.91)-(21.92), printed pp. 453-456"
    - title: "Brian Conrad, Reductive Group Schemes (SGA 3 summer school, Luminy; Panoramas et Syntheses)"
      url: "https://math.stanford.edu/~conrad/papers/luminysga3smf.pdf"
      locator: "S5.2-S5.4, Corollaries 5.2.7-5.2.8 and the Levi existence results"
---

## Statement

Assume the Axiom of Choice inherited from the named suppliers. Let $(G,T)$ be a split reductive group over $k$, $B\supseteq T$ a Borel subgroup with base $\Delta$, and let $W$, $\Phi^+$ be as above ([[def-root-datum-of-a-split-reductive-group]]). (a) For every subset $I\subseteq\Delta$ there is a unique smooth parabolic subgroup $P_I\subseteq G$ containing $B$ with $P_I=\bigsqcup_{w\in W_I}C(w)$, where $C(w)=BwB$; the correspondence $I\mapsto P_I$ is a bijection onto the set of smooth parabolic subgroup varieties of $G$ containing $B$, and the standard parabolic subgroups are exactly the groups $P_G(\lambda)$ for cocharacters $\lambda$ with $\langle\alpha,\lambda\rangle\ge0$ for all $\alpha\in\Phi^+$, with $I=\{\alpha\in\Delta:\langle\alpha,\lambda\rangle=0\}$. (b) The unipotent radical of $P_I$ is $R_u(P_I)=U_I:=\prod_{\alpha\in\Phi^+\smallsetminus\Phi_I}U_\alpha$, directly spanned in any order, and the multiplication map $R_u(P_I)\rtimes L_I\to P_I$ is a group-scheme isomorphism (Levi decomposition), with $L_I$ the standard Levi subgroup of [[lem-standard-levi-subgroup]]. (c) Every smooth parabolic subgroup of $G$ containing $B$ is $P_I$ for a unique $I$, and over an algebraically closed field every smooth parabolic subgroup of $G$ is conjugate by an element of $G(k)$ to a unique standard parabolic $P_I$. (d) $P_\varnothing=B$ and $P_\Delta=G$.


The general proper-quotient Definition still permits nonsmooth parabolic subgroup schemes; the standard classification above is restricted to smooth subgroup varieties. For example, in characteristic $p$, the Frobenius preimage $F_{\mathrm{SL}_2}^{-1}(B^{(p)})$ is nonsmooth, contains $B$, and has proper quotient $\mathbf P^{1,(p)}$, so it is not one of these smooth $P_I$.

## Facts & Assumptions

**Given:** AC, a split reductive group $(G,T)$ with Borel $B\supseteq T$ and base $\Delta$.

[F1] The Bruhat decomposition gives $G=\bigsqcup_{w\in W}BwB$, the cell structure of the $Bn_wB$, and the Tits system on $G(k)$ ([[thm-bruhat-decomposition-for-split-reductive-group]], [[lem-simple-reflection-double-coset-rule]]).

[F2] Centralizers of tori are reductive, $L_I=C_G(T_I)$ is the standard Levi subgroup with root system $\Phi_I$ and Weyl group $W_I$, and $P_G(\lambda)$ contains exactly the root groups with $\langle\alpha,\lambda\rangle\ge0$ ([[lem-standard-levi-subgroup]], [[thm-chevalley-centralizer-radical-and-reductive-centralizers]], [[thm-cocharacter-limit-subgroups]]).

[F3] A subgroup scheme $P\subseteq G$ is parabolic exactly when the quotient $G/P$ is complete, equivalently when $P_{k^{\mathrm a}}$ contains a Borel subgroup of $G_{k^{\mathrm a}}$; parabolic subgroups are connected and satisfy $P=N_G(P)$ whenever they contain a Borel subgroup ([[def-parabolic-subgroup-of-an-affine-algebraic-group]], [[thm-solvable-subgroups-and-the-radical-as-borel-intersection]]), and over an algebraically closed field all Borel subgroups are conjugate with complete quotient ([[thm-quotient-by-a-borel-subgroup-is-complete]], [[thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field]]); the root groups and their products in any order are as in [[thm-root-subgroups-of-a-split-reductive-group]].


[F4] Length equals positive-root inversion number, a simple reflection permutes all positive roots except its simple root, and a reduced expression $w=s_{\alpha_1}\cdots s_{\alpha_r}$ has positive inversion roots $\beta_j=s_{\alpha_1}\cdots s_{\alpha_{j-1}}\alpha_j$. The last assertion follows inductively from the length/sign rule. ([[lem-root-datum-combinatorics]]) Smooth connected torus-stable subgroup containment follows from its selected Lie weights. ([[thm-weight-subgroups-of-a-torus-action]])

## Proof

1.1 Choose an integral cocharacter $\lambda$ whose simple-root pairings are zero on $I$ and strictly positive on $\Delta\smallsetminus I$: take the sum of rational dual vectors there and clear denominators as in the standard Levi lemma. Every root has simple coefficients of one sign, so $\langle\beta,\lambda\rangle=0$ exactly for $\beta\in\Phi_I$, and the positive pairings occur precisely on $\Phi^+\smallsetminus\Phi_I$. By [F2], the fixed group $Z_G(\lambda)$ and $L_I=C_G(T_I)$ are smooth connected reductive with the same root spaces and torus. The image of $\lambda$ lies in $T_I$, so $L_I\subseteq Z_G(\lambda)$; equal dimension makes them equal. The cocharacter kernel $U_G(\lambda)$ is smooth connected unipotent with just the positive-pairing Lie weights. Its Lie algebra is contained in $\operatorname{Lie}U$, hence [F4] puts it in $U$. The root-coordinate theorem [F3] identifies it with the ordered product $U_I$ of the root groups in $\Phi^+\smallsetminus\Phi_I$, in any order. Therefore $P_G(\lambda)=U_I\rtimes L_I$ and its unipotent radical is exactly $U_I$, since $L_I$ is reductive. It contains $B$ by the nonnegative pairings of all positive roots, and the geometric Borel/properness criterion [F3] makes it parabolic. Define this smooth group to be $P_I$. [F2, F3, F4]

2.1 A normalizer representative $n_w$ belongs to $P_G(\lambda)$ exactly when $w\lambda=\lambda$. Its conjugation orbit is $(\lambda-w\lambda)(t)n_w$, lying in the closed translate $Tn_w$; a nontrivial cocharacter of a torus has no limit at zero inside that torus. The stabilizer of this dominant $\lambda$ in $W$ is $W_I$: if nontrivial $w$ fixes it, choose a left descent $s_\alpha$ so that $w^{-1}\alpha$ is negative by [F4]. Then $$0\le\langle\alpha,\lambda\rangle=\langle w^{-1}\alpha,\lambda\rangle\le0,$$ so $\alpha\in I$. The reflection $s_\alpha$ fixes $\lambda$ and shortens $w$; induction gives $w\in W_I$. Conversely every generator of $W_I$ fixes $\lambda$. Since $P_I$ contains $B$, a Bruhat cell is wholly contained in it exactly when its representative is, so [F1] gives $P_I=\bigsqcup_{w\in W_I}C(w)$. The same argument shows that any dominant cocharacter with these zero simple pairings gives this $P_I$. [F1, F2, F4, step 1.1]

3.1 Let $P\supseteq B$ be any smooth closed subgroup. Over an algebraic closure put $W_P=\{w:n_w\in P\}$. It is a subgroup, because representatives multiply modulo $T\subseteq B$, and [F1] makes $P$ the union of its cells. Set $J=\{\alpha\in\Delta:s_\alpha\in W_P\}$. For $w\in W_P$, both $B$ and $n_wBn_w^{-1}$ lie in $P$. Thus for each positive inversion root $\beta\in\Phi^+\cap w\Phi^-$, both $U_\beta$ and $U_{-\beta}$ lie in $P$. Their rank-one elementary products give a representative of $s_\beta$ in $P$. For a reduced expression of $w$, the inversion roots $\beta_j$ in [F4] therefore give $s_{\beta_j}\in W_P$. The first is $s_{\alpha_1}$; inductively, conjugating $s_{\beta_j}$ by the earlier simple factors puts $s_{\alpha_j}$ in $W_P$. Hence all letters lie in $J$, so $W_P=W_J$. The smooth closed groups $P$ and $P_J$ have the same geometric cells and are reduced, hence are equal; descent gives equality over $k$. In particular this classifies every smooth parabolic containing $B$, with no unsupported assumption that a general $P$ was already a limit group. [F1, F2, F3, F4, step 2.1]

4.1 The subset $I$ is recovered by the negative simple root groups in $P_I$, or equivalently the simple reflections in $W_I$. Thus the classification is unique. Cocharacters with all positive-root pairings nonnegative give the same classification by step 2.1. Step 1.1 proves the complete ordered unipotent-radical and Levi decomposition in(b). For $I=\varnothing$, the fixed group is $T$ and all positive root groups occur, giving $P_I=B$; for $I=\Delta$, there are no positive pairing weights and the limit group is $G$. The torus case $\Delta=\varnothing$ satisfies both endpoints with $B=G$. [F1, F2, F3, step 1.1, step 2.1, step 3.1]

5.1 Over an algebraically closed field every smooth parabolic contains a Borel by [F3]. Conjugate that Borel to $B$ and apply step 3.1 to obtain a standard $P_I$. If $gP_Ig^{-1}=P_J$, the Borels $gBg^{-1}$ and $B$ of the smooth connected affine group $P_J$ are conjugate by some $p\in P_J(k)$, by [F3]. Hence $pg$ normalizes $B$, so $pg\in B$ by its self-normality in [F3]. Therefore $g\in P_J$, forcing $P_I=P_J$ and $I=J$. This proves the full conjugacy and uniqueness in(c). Nonsmooth parabolics remain in the general conditional Definition: the Frobenius example has a nilpotent lower-entry condition $c^p=0$ and the stated proper quotient, and is excluded only from this smooth classification. [F3, step 3.1, step 4.1] ∎

