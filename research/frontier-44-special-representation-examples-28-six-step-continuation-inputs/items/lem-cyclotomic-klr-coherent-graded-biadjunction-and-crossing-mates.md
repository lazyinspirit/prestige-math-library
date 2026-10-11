---
id: lem-cyclotomic-klr-coherent-graded-biadjunction-and-crossing-mates
kind: lemma
title: "Coherent graded biadjunction and the crossing mates"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 9
deps: [def-cyclotomic-klr-quotient-at-a-dominant-weight,
       def-cyclotomic-klr-induction-and-restriction-functors,
       def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum,
       def-klr-grading-and-diagrammatic-composition,
       def-graded-ring-module-bimodule-and-internal-shift,
       def-graded-balanced-tensor-product-and-homogeneous-hom,
       def-minimal-parabolic-klr-diagram-proof-category,
       thm-klr-pbw-basis-theorem,
       lem-generic-klr-induction-and-restriction-mixed-relations,
       thm-cyclotomic-klr-induction-is-projective-on-the-right,
       thm-cyclotomic-klr-sl-two-categorical-commutator,
       lem-cyclotomic-klr-dot-annihilators-and-finite-root-strings,
       lem-minimal-parabolic-polynomial-flag-model-realizes-the-graded-diagram-relations,
       lem-minimal-parabolic-diagrams-have-pbw-bubble-normal-form,
       lem-cyclotomic-cap-off-quotient-has-no-extra-downward-relations]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Ben Webster, Knot invariants and higher representation theory I, arXiv:1001.2020v9"
      url: "https://arxiv.org/pdf/1001.2020"
      locator: "Sections 1.3-1.4 and Section 2, PDF pages 9-30: the biadjunction of the cyclotomic induction/restriction functors with its grading shift and the crossing-mate computations."
    - title: "Seok-Jin Kang and Masaki Kashiwara, Categorification of Highest Weight Modules via Khovanov-Lauda-Rouquier Algebras, arXiv:1102.4677v4"
      url: "https://arxiv.org/pdf/1102.4677v4"
      locator: "Section 5.1, displays and the proof of the biadjunction in the cyclotomic setting."
---

## Statement

For the standard homogeneous first-strand cyclotomic quotient over any field
and every homogeneous (Q1)-(Q4) datum, use basic right-append induction $F_i$
from $\beta$ to $\beta+\alpha_i$ and basic restriction $E_i$ in the reverse
direction. Put $h=\langle h_i,\Lambda-\beta\rangle$ and
$t_i(\beta)=2d_i(1-h)=(\alpha_i\mid\alpha_i)-2(\Lambda-\beta\mid\alpha_i)$.
Then there are explicit homogeneous bimodule units and counits with both
triangle identities giving $E_i\{t_i(\beta)\}\dashv F_i\dashv E_i$ on all
graded module categories. They preserve the standard dot-cyclic and same-color
crossing-mate identities and the coherent different-color double-mate
identity: for $p_\nu=\tau_re(\nu)$ with bottom adjacent colors $(i,j)$,
$i\ne j$, its double right mate is $(t_{ji}/t_{ij})p_\nu$, where $t_{ij}$ is
the coefficient of $u^{-a_{ij}}$ in $Q_{ij}(u,v)$ and the strand of color $i$
runs SW to NE. Equivalently the associated right closure satisfies
$\operatorname{cl}(p_\nu a)=(t_{ji}/t_{ij})\operatorname{cl}(ap_\nu)$ for
$a\in e(\nu)R^\Lambda(\beta)e(s_r\nu)$; dots, idempotents and equal-color
crossings have ratio $1$. The corresponding arbitrary monic field quotients
have the same underlying ungraded biadjunction and ordered crossing-mate
identities after forgetting internal shifts. No Frobenius, integral
Grothendieck-module or crystal theorem is a premise.

## Facts & Assumptions

**Given:** The standard cyclotomic quotient $R^\Lambda$, the basic functors
$F_i,E_i$ of [[def-cyclotomic-klr-induction-and-restriction-functors]], and the
formal category $\mathcal P_i$ with its graded flag model and normal form.

[F1] The formal category relations and their graded flag-model realization:
triangles, rank-one matrices with inverses, mixed dot compatibility,
cross-and-cap identities and normalized bubble slides
([[def-minimal-parabolic-klr-diagram-proof-category]],
[[lem-minimal-parabolic-polynomial-flag-model-realizes-the-graded-diagram-relations]],
[[lem-minimal-parabolic-diagrams-have-pbw-bubble-normal-form]]).

[F2] The cap-off identification
([[lem-cyclotomic-cap-off-quotient-has-no-extra-downward-relations]]): the
cyclotomic quotient corner is the downward-word Hom corner of
$\mathcal P_i(\Lambda)/J$, with composition corresponding to multiplication.

[F3] The projective comparison and the categorical $\mathfrak{sl}_2$
isomorphism ([[thm-cyclotomic-klr-induction-is-projective-on-the-right]],
[[thm-cyclotomic-klr-sl-two-categorical-commutator]]), and the dot
annihilators of [[lem-cyclotomic-klr-dot-annihilators-and-finite-root-strings]].

## Proof

**Proof technique:** transport the model-verified formal cups, caps and mates
through the cap-off identification, keeping all degrees in the declared grading,
and read the biadjunction and the mate ratios off the explicit coefficient
traces.

1.1 Conventions and degrees. Work throughout with $\kappa=-\tau_{\mathrm{native}}$ for every color pair: this is a graded algebra isomorphism preserving $Q$ and all first-strand monic ideals, since quadratic relations carry two signs, the braid defect carries three, and $\kappa_w=(-1)^{\ell(w)}\tau_w$. With $i$ last in a total color order, raw downward flags have shifts $s_j(m)=-2d_jm_j+\sum_{\ell>j}(-b_{j\ell})m_\ell$, and a degree-$D$ raw map between word shifts $S,T$ has degree $D+T-S$. Hence a source increasing crossing $\pi$ of degree zero and its reverse multiplier $Q$ of degree $-2b_{jk}$ both have actual degree $-b_{jk}$, and basic $E_iG_j$ has the prescribed shifted commutator $-b_{ij}$. The formal $H_i=E_i^{\mathrm{basic}}\{-d_i(1+h_{\mathrm{input}})\}$ cancels the shift because $h$ increases by $-a_{ij}$ under $G_j$ and $s_j(m-e_i)=s_j(m)+b_{ij}$; it is the formal $H_i$, not the basic $E_i$, that commutes unshiftedly with the spectator flag. [F1, algebra]

2.1 The explicit units and counits. At a vertex with $r$ $i$-roots and total monic degree $N$ put $L=C[e_1,\dots,e_r]/(\text{factor coefficients above }N-r)$, $c_r=\prod(u-x_a)$, $p=a_i\prod_{j\ne i}Q_{ij}/t_{ij}$ and $b=p/c_r$. The $i$-flag algebra is $B=L[z]/b(z)$, free over the old ring on the powers $0\le j<N-r$ and free over the target root-append ring on the powers $0\le j\le r$. The two coefficient traces $\tau_{\mathrm{old}}$ and $\tau_{\mathrm{new}}$ extract the respective top powers of the monic remainders, and their Gram matrices in the power/complementary bases are triangular with diagonal $1$, so they have explicit dual bases without factorial denominators. Basic $F_i=B\{-2d_ir\}\otimes-$ and basic reverse $E_i=B\otimes-$ use $\tau_{\mathrm{new}}$ and its dual bases; the second adjunction $E_i\{t_i(\beta)\}\dashv F_i$ uses $\tau_{\mathrm{old}}$ in the same way. Restricting the model equations of [F1] through the cap-off identification [F2] gives homogeneous units and counits with both triangle identities, hence $E_i\{t_i(\beta)\}\dashv F_i\dashv E_i$. [step 1.1, F1, F2]

3.1 Crossing mates. The model's rank-one rho and cross-and-cap equations of [F1] identify the two adjunction mates of a crossing with the same normalizations used in the formal definition; on the $i,j$ pair the successive rings are $D_1=L_m[y,z]/(b(z)q_{ij}(z,y))$ and $D_0=L_m[y,z]/b(z)$, and the normalized opposite-sideways composites have scalars $t_{ij}$ and $t_{ji}$, with double right mate $(t_{ji}/t_{ij})p_\nu$ in the stated source orientation. Dots, idempotents and equal-color crossings have ratio $1$ by dot-cyclicity and the equal-color mixed relations. Reading these model identities through the cap-off isomorphism [F2] proves the stated mate identities in $R^\Lambda$, and the same transported identities hold verbatim after arbitrary monic specialization with shifts forgotten. [step 2.1, F1, F2]

4.1 Conclusion. Steps 2.1 and 3.1 establish the graded biadjunction $E_i\{t_i(\beta)\}\dashv F_i\dashv E_i$ and the ordered crossing-mate identities with their exact scalars, using only the model-verified relations, the cap-off identification and the projective comparison of [F3]; no Frobenius, integral Grothendieck-module or crystal statement is used as a premise. [step 3.1, F3] ∎
