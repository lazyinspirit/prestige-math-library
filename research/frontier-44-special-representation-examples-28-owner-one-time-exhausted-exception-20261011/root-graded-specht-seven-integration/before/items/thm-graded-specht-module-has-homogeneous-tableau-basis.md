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
       def-young-tableau-standard-tableau-and-shape]
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
$\psi_{r_1}\cdots\psi_{r_m}z_\mu-\psi_{t_1}\cdots\psi_{t_m}z_\mu=\sum_{S\unlhd T,\ i_S=i_T,\ \deg S=\deg T}a_Sv_S$;
in particular the grading on $S(\mu)$ defined by $\deg(v_T):=\deg(T)$ is
independent of the choices.

3. For every $r$ the vectors $e(i)v_T$, $y_rv_T$ and $\psi_rv_T$ are
homogeneous, with
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
cellularity of the basis is
`thm-arbitrary-level-cyclotomic-hecke-murphy-basis-is-cellular`.

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

1.1 **Triangular expansion (1).** Expand $\psi_{r_1}\cdots\psi_{r_m}z_\mu$ in the standard basis $\{z_S\}$ by moving the generators through the reduced word using the KLR quadratic relations, the dot-sliding relations and the relations $y_rz_\mu=0$, $X_rz_\mu=\xi^{i_r}z_\mu$ at the generator [F1, F4]. Every straightening step replaces a word by words that are weakly smaller in the tableau order, so the expansion is triangular with respect to $\unlhd$; the leading coefficient of $z_T$ is nonzero exactly when $T$ is standard, by the triangularity of the $z$-basis and the fact that the leading term of the straightening of a reduced word for $w_T$ is the standard tableau $T$ [F1, F2]. Hence the standard vectors form a basis triangular over the standard basis, proving (1). [F1, F2, F4]

2.1 **Independence of the reduced word (2).** By Matsumoto's theorem two reduced decompositions of $w_T$ are connected by braid moves, so it suffices to compare words differing by a single braid relation [F2]. The KLR braid and quadratic relations rewrite the difference of the two products as a combination of words that are shorter in the weak order and have the same weight $i_T$; by (1) each shorter word expands into standard vectors $v_S$ with $S\lhd T$, and the degree bookkeeping of [F3] shows every occurring $S$ has $i_S=i_T$ and $\deg S=\deg T$ [F3]. This gives the displayed difference formula and shows that $\deg(v_T)=\deg(T)$ is independent of the chosen reduced decomposition [F3]. [F1, F2, F3, step 1.1]

3.1 **Graded module structure and character (3).** The idempotents act by $e(i)v_T=\delta_{i,i_T}v_T$ because $e(i)$ picks the weight component of $z_\mu$ [F4]. Moving $y_r$ and $\psi_r$ through the reduced word with the mixed relations and using the shifted-degree formulas of [F3] gives $\deg(y_rv_T)=\deg(y_r)+\deg(T)$ and $\deg(\psi_rv_T)=\deg(\psi_re(i_T))+\deg(T)$; the Garnir and terminal cases are exactly the shifted-degree statements of [F3], and the codegree identities of [F3] supply the bookkeeping in those cases [F3]. Hence $S(\mu)$ is a graded $R^\Lambda_\alpha$-module with homogeneous basis $\{v_T\}$ and $q$-character $\sum_Tq^{\deg T}i_T$, and forgetting the grading recovers the ungraded cell module by construction [F1]. [F1, F3, F4, step 2.1]

4.1 **No choice.** Only finitely many reduced decompositions, straightening steps and tableau comparisons occur; the selections are finite and the resulting graded isomorphism class is independent of them by (2). No choice principle is used. [F1, F2, given] ∎
