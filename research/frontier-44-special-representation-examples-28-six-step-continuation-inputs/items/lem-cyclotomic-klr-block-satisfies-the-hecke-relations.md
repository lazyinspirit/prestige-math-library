---
id: lem-cyclotomic-klr-block-satisfies-the-hecke-relations
kind: lemma
title: "The cyclotomic KLR block satisfies the Hecke relations"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 14
deps: [def-cyclotomic-klr-quotient-at-a-dominant-weight,
       def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras,
       def-cyclotomic-hecke-central-content-sector-notation,
       lem-cyclotomic-klr-dot-annihilators-and-finite-root-strings,
       lem-cyclotomic-hecke-intertwiners-and-local-power-series,
       def-affine-and-cyclotomic-type-a-hecke-algebras]
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
    - title: "Jonathan Brundan and Alexander Kleshchev, Blocks of cyclotomic Hecke algebras and Khovanov-Lauda algebras, arXiv:0808.2032v3, Invent. Math. 178 (2009) 451–484 (complete 32-page article)"
      url: "https://arxiv.org/pdf/0808.2032"
      locator: "Introduction pp. 1–5 (quiver, (1.1)–(1.4), Main Theorem (1.6)–(1.15), Corollaries 1–2); Section 2 (2.1)–(2.7), Lemmas 2.1–2.2; Sections 3.1–3.5 pp. 7–19; Sections 4.1–4.5 pp. 19–27; Section 6 pp. 29–31."
    - title: "Jonathan Brundan and Alexander Kleshchev, Graded decomposition numbers for cyclotomic Hecke algebras, arXiv:0901.4450v3, Adv. Math. 222 (2009) 1883–1942 (complete 57-page article)"
      url: "https://arxiv.org/pdf/0901.4450"
      locator: "Section 2.2 relations (2.9)–(2.12) and the grading statement after (2.12); Sections 4.1–4.3, Theorem 4.1 and Remark 4.2, pp. 30–32."
---

## Statement

In the specialized cyclotomic KLR content algebra $R^\Lambda_\alpha$ define
$$x_r:=\sum_{i\in I_\alpha}(y_r+i_r)e(i),\qquad s_r:=\sum_{i\in I_\alpha}\bigl(\psi_rq_r(i)-p_r(i)\bigr)e(i)$$
in the degenerate case and
$$X_r:=\sum_{i\in I_\alpha}q^{i_r}(1-y_r)e(i),\qquad T_r:=\sum_{i\in I_\alpha}\bigl(\psi_rQ_r(i)-P_r(i)\bigr)e(i)$$
in the nondegenerate case, where $p,P,q,Q$ are the power series of
[[lem-cyclotomic-hecke-intertwiners-and-local-power-series]] evaluated in
$R^\Lambda_\alpha$ using the nilpotence of the $y$'s. Then these elements
satisfy the defining relations (3.2)–(3.5), respectively (4.2)–(4.5), of the
affine Hecke algebra and the cyclotomic relation
$\prod_i(x_1-i)^{\lambda_i}=0$, respectively
$\prod_i(X_1-q^i)^{\lambda_i}=0$; hence they define a unique $F$-algebra
homomorphism $\sigma\colon H^\Lambda_d\to R^\Lambda_\alpha$. Moreover $\sigma$
kills $e_\beta$ and every corner component $e_\beta H^\Lambda_de_\gamma$ with
$(\beta,\gamma)\ne(\alpha,\alpha)$, and restricts to a unital homomorphism
$\sigma\colon H^\Lambda_\alpha\to R^\Lambda_\alpha$ with $\sigma(e(i))=e(i)$
for $i\in I_\alpha$ and $\sigma(e(i))=0$ otherwise.

## Facts & Assumptions

**Given:** The specialized cyclotomic KLR algebra $R^\Lambda_\alpha$ with its
idempotents $e(i)$, dots $y_r$ and crossings $\psi_r$
([[def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras]]), the sector
$H^\Lambda_\alpha$ ([[def-cyclotomic-hecke-central-content-sector-notation]]),
and the power series $p_r(i),q_r(i)$ (degenerate) respectively
$P_r(i),Q_r(i)$ (nondegenerate) of
[[lem-cyclotomic-hecke-intertwiners-and-local-power-series]].

[F1] The $y_r$ are commuting nilpotents and the intertwiners satisfy the
identities (3.14)–(3.20)/(4.14)–(4.20), while the normalizing series satisfy
(3.27)–(3.29)/(4.33)–(4.35) and the compatibility (3.43)/(4.44)
([[lem-cyclotomic-hecke-intertwiners-and-local-power-series]]).

[F2] The KLR relations (1.6)–(1.15) hold in $R^\Lambda_\alpha$, with
(1.6) the cyclotomic relation and (1.12)–(1.13) the dot-sliding relations
([[def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras]]); the
cyclotomic quotient is finite-dimensional and the $y$-dots are nilpotent on
root strings ([[lem-cyclotomic-klr-dot-annihilators-and-finite-root-strings]]).

## Proof

**Proof technique:** direct.

**Given:** The elements of the Statement and the relations of [F1]–[F2].

1.1 The homogeneous relation cases. The mixed, quadratic and braid relations among the displayed elements are the source's explicit five-case expansions, using the dot-sliding relations, the compatibility identity and the defining properties of the normalizing series. In the all-equal-colour case the source's omitted computation is: with $A=\psi_1$, $B=\psi_2$, variables $u,z,w$, and $\partial_af=(s_af-f)/(y_a-y_{a+1})$, set $a=c-u+q_Hz$, $b=c-z+q_Hw$, $k=c-u+q_Hw$ with $(q_H,c)=(1,1)$ in the degenerate branch and $c=1-q_H$ in the nondegenerate branch. Then $H_1H_2H_1=ABA\cdot abk-AB\cdot kb-BA\cdot ka+A(a+q_Hb)+B(a+b)-1$ and $H_2H_1H_2=BAB\cdot abk-AB\cdot kb-BA\cdot ka+A(a+q_Hb)+B(a+b)-1$, so $H_1H_2H_1-H_2H_1H_2=(ABA-BAB)abk$; the product $abk$ is a unit of the nilpotent-variable algebra (constant $1$ in the degenerate branch, $(1-q_H)^3\ne0$ in the nondegenerate branch), so the Hecke braid relation and the $\psi$-braid relation are equivalent. The same mixed rule gives $H_i^2=(q_H-1)H_i+q_H$ in the nondegenerate branch and $H_i^2=1$ in the degenerate branch. [F1, algebra]

2.1 The cyclotomic relation and the homomorphism. The cyclotomic relation $\prod_i(x_1-i)^{\lambda_i}=0$ (respectively $\prod_i(X_1-q^i)^{\lambda_i}=0$) holds because $y_1^{(\Lambda,\alpha_{i_1})}e(i)=0$ is the cyclotomic KLR relation and $x_1=\sum_i(y_1+i_1)e(i)$ (respectively $X_1=\sum_iq^{i_1}(1-y_1)e(i)$) is a shift of the dot. Hence all defining relations of the affine cyclotomic quotient are satisfied, and the universal property of the presentation gives a unique $F$-algebra homomorphism $\sigma\colon H^\Lambda_d\to R^\Lambda_\alpha$ carrying the generators to the displayed elements. [F1, F2, step 1.1, construct]

3.1 Identification of $\sigma(e(i))$. By [F2] the algebra $R^\Lambda_\alpha$ is finite-dimensional, so it becomes a finite-dimensional $H^\Lambda_d$-module through $\sigma$. The generalized weight space of $\sigma(x_r)=y_r+(\text{colour})$ on $R^\Lambda_\alpha$ is exactly $e(i)R^\Lambda_\alpha$ when $i\in I_\alpha$ and is $0$ otherwise, by the nilpotence of the dots and the weight relation. Hence $\sigma(e(i))$, being the projector onto that generalized weight space for the commuting operators $\sigma(x_1),\dots,\sigma(x_d)$, equals $e(i)$ for $i\in I_\alpha$ and vanishes otherwise. [F2, step 2.1]

4.1 Factorization through the sector. Since $e_\alpha$ is central and $\sum_\beta e_\beta=1$ in $H^\Lambda_d$ ([[def-cyclotomic-hecke-central-content-sector-notation]]), and since $\sigma$ annihilates all idempotents $e(i)$ with $i\notin I_\alpha$ by step 3.1, the element $\sigma(1-e_\alpha)=0$. Therefore $\sigma$ kills $e_\beta$ for $\beta\ne\alpha$ and every corner $e_\beta H^\Lambda_de_\gamma$ with $(\beta,\gamma)\ne(\alpha,\alpha)$, and it factors through the central summand $H^\Lambda_\alpha=e_\alpha H^\Lambda_de_\alpha$ as a unital homomorphism. [step 3.1, algebra]

5.1 Conclusion. Steps 1.1 and 2.1 produce the homomorphism $\sigma$ from the verified affine and cyclotomic relations; steps 3.1 and 3.1 identify its action on the content idempotents and show that it kills exactly the off-diagonal corners, restricting to a unital homomorphism $H^\Lambda_\alpha\to R^\Lambda_\alpha$. No choice principle is used. [step 2.1, step 4.1] ∎

## Remarks

The all-equal-colour case is filled locally, so the construction does not rely
on the source's abbreviated "exercise'' cases; the remaining four colour
patterns have full explicit expansions in the retrieved source.
