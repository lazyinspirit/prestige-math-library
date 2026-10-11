---
id: thm-graded-specht-module-has-homogeneous-tableau-basis
kind: theorem
title: "The graded Specht module has a homogeneous tableau basis"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 37
deps: [def-graded-specht-module-by-homogeneous-standard-tableaux,
       def-tableau-domination-order-garnir-tableaux-and-bricks,
       lem-degree-and-codegree-of-standard-tableaux,
       prop-shifted-degrees-and-garnir-exchanges-for-standard-tableaux,
       def-klr-grading-and-diagrammatic-composition,
       def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras,
       thm-arbitrary-level-cyclotomic-hecke-murphy-basis-is-cellular,
       lem-dj-bridge-murphy-cellular-basis-and-cell-form,
       def-young-tableau-standard-tableau-and-shape,
       thm-the-symmetric-group-has-the-coxeter-presentation,
       thm-brundan-kleshchev-blockwise-hecke-klr-isomorphism]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan, Alexander Kleshchev and Weiqiang Wang, Graded Specht modules, arXiv:0901.0218v3, J. reine angew. Math. 655 (2011) 61-87 (complete 23-page article)"
      url: "https://arxiv.org/pdf/0901.0218"
      locator: "Section 4.1-4.3, printed pp. 15-21: Lemma 4.1, Proposition 4.3, Theorem 4.10 with its proof, and Corollary 4.6; complete passages read."
    - title: "Jun Hu and Andrew Mathas, Graded induction for Specht modules, arXiv:1008.1462v1 (complete 19-page article)"
      url: "https://arxiv.org/pdf/1008.1462"
      locator: "Section 4, printed pp. 14-19: graded Specht modules and the proof of the induced-filtration theorem, using the same homogeneous basis. Complete passage read."
verification:
  precheck: pass
---

## Statement

Keep the notation of
[[def-graded-specht-module-by-homogeneous-standard-tableaux]]; the vectors
$v_T=\psi_{w_T}z_\mu$ may a priori depend on the chosen reduced decompositions
$w_T=s_{r_1}\cdots s_{r_m}$. Then:

1. For every $\mu$-tableau $T$ one has $v_T=\sum_{S\unlhd T}a_Sz_S$ with
$a_T\ne0$ when $T$ is standard; hence the standard vectors form a basis of
$S(\mu)$ triangular with respect to the standard basis $\{z_T\}$ of
[[def-graded-specht-module-by-homogeneous-standard-tableaux]].

2. If $w_T=s_{r_1}\cdots s_{r_m}=s_{t_1}\cdots s_{t_m}$ are two reduced
decompositions of the same $w_T$, then
$\psi_{r_1}\cdots\psi_{r_m}z_\mu-\psi_{t_1}\cdots\psi_{t_m}z_\mu=\sum_{S\lhd T,\ i_S=i_T,\ \deg S=\deg T}a_Sv_S$;
in particular the grading on $S(\mu)$ defined by $\deg(v_T):=\deg(T)$ is
independent of the choices.

3. For every $r$ the vectors $e(i)v_T$, $y_rv_T$ and $\psi_rv_T$ lie in
the prescribed homogeneous components; when nonzero their degrees satisfy
$$e(i)v_T=\delta_{i,i_T}v_T,\qquad \deg(y_rv_T)=\deg(y_r)+\deg(T),\qquad \deg(\psi_rv_T)=\deg(\psi_re(i_T))+\deg(T).$$
Hence $S(\mu)$ is a graded $R^\Lambda_\alpha$-module with homogeneous basis
$\{v_T\}$ and $q$-character
$\operatorname{ch}_qS(\mu)=\sum_{T\in\operatorname{Std}(\mu)}q^{\deg T}i_T$;
forgetting the grading recovers the ungraded cell module of
[[def-graded-specht-module-by-homogeneous-standard-tableaux]].

No choice beyond the finite selections of reduced decompositions is used; the
resulting graded isomorphism class is independent of them by (2).

## Facts & Assumptions

**Given:** A partition $\mu$, its cell module $S(\mu)=H^\Lambda_dz_\mu$, the
standard vectors $z_T=T_{w_T}z_\mu$ and $v_T=\psi_{w_T}z_\mu$, and the degree
function $\deg(T)$.

[F1] The module $S(\mu)$, the elements $z_T$, $v_T$ and the degree recursion
are those of
[[def-graded-specht-module-by-homogeneous-standard-tableaux]]; the Murphy
cellularity and ordinary dominance-raising Garnir straightening are
[[thm-arbitrary-level-cyclotomic-hecke-murphy-basis-is-cellular]] and
[[lem-dj-bridge-murphy-cellular-basis-and-cell-form]].

[F2] The weak Bruhat graph, the triangularity of the tableau order and the
Garnir/terminal alternatives are those of
[[def-tableau-domination-order-garnir-tableaux-and-bricks]]; standard tableaux
and reduced words for $w_T$ are those of
[[def-young-tableau-standard-tableau-and-shape]].

[F3] The degree and codegree identities, including
$\deg(T)+\operatorname{codeg}(T)=\operatorname{def}(\alpha)$ and the brick
lemma, are those of [[lem-degree-and-codegree-of-standard-tableaux]]; the
shifted-degree formulas for weak edges, reduced words and Garnir exchanges are
those of
[[prop-shifted-degrees-and-garnir-exchanges-for-standard-tableaux]].

[F4] The KLR presentation, its grading and the degrees $\deg e(i)=0$,
$\deg y_r=2$, $\deg\psi_re(i)=-a_{i_ri_{r+1}}$ are those of
[[def-klr-grading-and-diagrammatic-composition]] and
[[def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras]].

## Proof

**Proof technique:** direct.

1.1 **Ungraded straightening and triangularity.** The cellular Murphy straightening in [F1], in its left version, expresses $z_U$ for any tableau $U$ as a sum of standard $z_S$ with $w_S\le w_U$; row sorting is passage to the parabolic minimal representative, hence lowers Bruhat order; each Garnir replacement raises prefix dominance, hence strictly lowers Bruhat order by the row-boundary rank-count equivalence proved in [F2]. The standard $z_T=m_{T,t^\mu}+K(\mu)$ are independent because they are distinct surviving cellular basis elements, and they span the cyclic module by that straightening. The initial-vector calculation in the Definition gives $e(i_{t^\mu})z_\mu=z_\mu$ and $y_az_\mu=0$. In the fixed BK presentation, $\psi_re(i)=(T_r+P_r(i))Q_r(i)^{-1}e(i)$, where $Q_r(i)$ has invertible constant term. Expand a reduced product and slide dots right using the mixed relations: the result is a sum $T_{r_{a_1}}\cdots T_{r_{a_b}}f(y)z_\mu$ over subwords, and the full-subword coefficient is a product of nonzero constants $Q_r(i)^{-1}(0)$. Rightmost dots evaluate at zero. The Hecke quadratic relation and the Bruhat subword criterion reduce each proper subword to $T_uz_\mu$ with $u<w_T$, so Murphy straightening gives $v_T=a_Tz_T+\sum_{S\lhd T}a_Sz_S$, with $a_T\ne0$ for standard $T$. This proves a basis for each selected reduced-word family and also straightens every nonstandard $v_U$ into standard $v_S$ with $S\unlhd U$. [F1, F2, F4, algebra]

2.1 **Filtered KLR word calculus before a grading on the module.** A dot moved through a crossing becomes the permuted dot plus a scalar term only for equal residues; moving all dots to the right thus deletes crossings in every scalar error. Two reduced words are connected by Coxeter moves. A distant move is exact; a length-three braid changes the product to a polynomial in dots times the remaining word, deleting the three crossings of that braid. A nonreduced word is shortened by bringing a repeated simple reflection together through these moves and replacing its square by its KLR quadratic polynomial. Induction on word length, using the deletion/subword criterion, therefore writes every error as $\psi_uf(y)e(i_{t^\mu})$ with $u<w_T$ and preserves its algebra degree. Acting on $z_\mu$ kills positive-degree rightmost dot monomials. Combined with step 1.1 this gives, without presupposing module homogeneity: reduced-word changes have only $v_S$ with $S\lhd T$; $y_av_T$ has only $S\lhd T$; and if $a,a+1$ share a row or column, $\psi_av_T$ has only $S\lhd T$ and $i_S=s_ai_T$. For the last assertion first straighten below $s_aT$ and use the exceptional-prefix comparison of [F2] to get $S\unlhd T$; equality is excluded because adjacent same-row or same-column boxes have distinct residues for $e\ge2$. Weight support follows directly from $\psi_ae(i)=e(s_ai)\psi_a$ and commuting dots. [F1, F2, F4, step 1.1, algebra]

3.1 **The simultaneous induction.** Assign degree $\deg T$ to the selected basis $v_T$. Prove together, for $m\ge0$, (a) word-change errors at standard tableaux of length at most $m$ have degree $\deg T$, and (b) all dot and crossing actions at standard tableaux of length at most $m-1$ have their prescribed degrees. The base $m=0$ has the unique length-zero tableau $t^\mu$ and no action assertion. For (a), a nontrivial braid error has at most $m-3$ crossings after step 2.1 and the same algebra degree as the original reduced word. Act on $z_\mu$ successively with the at most $m-3$ crossings of each shortened term, expanding after each action in the ungraded selected standard basis. Step 1.1 bounds every appearing standard-tableau length by the number of crossings so far, and step 2.1 gives the corresponding bound after straightening a nonreduced product. Thus before every action the standard-basis lengths are at most $m-4$, and the already proved action assertion (b) applies. No standardness of an arbitrary subword tableau is assumed. By [F3] the algebra degree plus $\deg(t^\mu)$ is $\deg T$. Strict-order straightening and weight support in step 2.1 therefore give exactly the difference formula (2). A sequence of braid moves gives it for any two words. [F2, F3, F4, step 1.1, step 2.1, algebra]

4.1 **Dot actions in the induction.** At $\ell(T)=m-1$ write $v_T=\psi_av_U$ with $\ell(U)=m-2$; word changes only add shorter vectors of the same degree by step 3.1. Slide $y_r$ past $\psi_a$. The main term is $\psi_ay_{s_a(r)}v_U$, and the possible scalar error is $\pm v_U$ at equal crossing colors. The dot action at $U$ is homogeneous by induction and, by step 2.1, is supported on lengths strictly below $m-2$, so applying $\psi_a$ to all its basis terms is covered by induction. The mixed relation is homogeneous, so both the main term and the scalar error have degree $\deg T+2$. When $T=t^\mu$, the dot is zero. This proves every dot assertion at length $m-1$. [F3, F4, step 2.1, step 3.1, algebra]

5.1 **Crossing actions at standard swaps.** If $s_rT$ is standard and has length $m$, the word $s_rw_T$ is reduced, so the word-change assertion just proved at length $m$ and the weak-edge identity in [F3] give degree $\deg T-a_{i_ri_{r+1}}$. If $s_rT$ instead has length $m-2$, write $v_T=\psi_rv_{s_rT}$ up to shorter same-weight same-degree errors. Apply $\psi_r$: the main term becomes $Q_{i_ri_{r+1}}(y_r,y_{r+1})v_{s_rT}$, and the other terms are crossing actions at strictly shorter tableaux. Those actions are covered by induction and the dot polynomial by step 4.1 and induction. Homogeneity of the quadratic relation gives the required degree also for this case. [F2, F3, F4, step 3.1, step 4.1, algebra]

6.1 **Crossing actions at a horizontal or vertical pair.** The four terminal alternatives of [F2] complete the crossing induction. For a distant terminal edge $t$, write $v_T=\psi_tv_U$ up to shorter homogeneous errors, with $|t-r|>1$. Commute $\psi_r$ past $\psi_t$. The action $\psi_rv_U$ is supported strictly below $U$ by step 2.1 because the horizontal or vertical relation persists, so both successive actions are already covered by induction and their degree is the homogeneous product degree. For a two-edge terminal alternative write $v_T=\psi_{r\pm1}\psi_rv_U$ up to shorter homogeneous errors, where $\ell(U)=m-3$ and $r\pm1,r\pm1+1$ are horizontal or vertical in $U$. The braid relation rewrites $\psi_r\psi_{r\pm1}\psi_rv_U$ as $\psi_{r\pm1}\psi_r\psi_{r\pm1}v_U$ plus the homogeneous dot correction. By step 2.1 the first action on the rewritten word is supported strictly below $U$, so all remaining actions use strictly shorter lengths and induction; step 4.1 handles the dot correction. The horizontal terminal base is $T=t^\mu$: step 2.1 makes $\psi_rv_T=0$. The vertical terminal base is the Garnir tableau. Here step 2.1 gives only $v_S$ with $S\lhd T$ and $i_S=s_ri_T$, and the Garnir exchange formula in [F3] gives $\deg S=\deg T-a_{i_ri_{r+1}}$ for every such term. This proves (b), completing the simultaneous induction without assuming the homogeneity being proved. [F2, F3, F4, step 2.1, step 3.1, step 4.1, step 5.1, algebra]

7.1 **Grading, character and independence.** The weight identity in step 2.1 and the action degrees established in steps 4.1–6.1 show that the vector-space grading is a module grading. Zero images belong to the stated homogeneous components; a degree is asserted only for a nonzero vector. Step 3.1 makes every change of selected reduced words a unitriangular basis change within each weight and degree, so it preserves the graded subspaces while individual $v_T$ may change. Finally the homogeneous basis yields $\operatorname{ch}_qS(\mu)=\sum_Tq^{\deg T}i_T$ and the construction used exactly the original ungraded left Murphy cell. Every selection is finite and requires no choice principle. [F1, F4, step 3.1, step 6.1, algebra] ∎
