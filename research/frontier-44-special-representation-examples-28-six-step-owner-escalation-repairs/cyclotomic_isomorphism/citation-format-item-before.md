---
id: lem-hecke-intertwiners-produce-local-klr-generators
kind: lemma
title: "Hecke intertwiners produce the local KLR generators"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 14
deps: [def-affine-and-cyclotomic-type-a-hecke-algebras,
       def-cyclotomic-hecke-central-content-sector-notation,
       def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras,
       lem-cyclotomic-hecke-intertwiners-and-local-power-series]
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
    - title: "Jonathan Brundan and Alexander Kleshchev, Blocks of cyclotomic Hecke algebras and Khovanov-Lauda algebras, arXiv:0808.2032v4, Invent. Math. 178 (2009) 451–484 (complete 32-page article)"
      url: "https://arxiv.org/pdf/0808.2032"
      locator: "Introduction pp. 1–5 (quiver, (1.1)–(1.4), Main Theorem (1.6)–(1.15), Corollaries 1–2); Section 2 (2.1)–(2.7), Lemmas 2.1–2.2; Sections 3.1–3.5 pp. 7–19; Sections 4.1–4.5 pp. 19–27; Section 6 pp. 29–31."
    - title: "Jonathan Brundan and Alexander Kleshchev, Graded decomposition numbers for cyclotomic Hecke algebras, arXiv:0901.4450v3, Adv. Math. 222 (2009) 1883–1942 (complete 57-page article)"
      url: "https://arxiv.org/pdf/0901.4450"
      locator: "Section 2.2 relations (2.9)–(2.12) and the grading statement after (2.12); Sections 4.1–4.3, Theorem 4.1 and Remark 4.2, pp. 30–32."
    - title: "Jun Hu and Andrew Mathas, Seminormal forms and cyclotomic quiver Hecke algebras of type A, arXiv:1304.0906v3 (published in Math. Ann.), complete 51-page article"
      url: "https://arxiv.org/pdf/1304.0906"
      locator: "Introduction: Theorem A and Corollary 1.1, pp. 2–4; Section 2.2 Definition 2.2 and Remark 2.3 (cyclotomic Hecke algebras and degenerate specialization); Sections 2.5–2.6, Theorem 2.8, Definition 2.10, Remark 2.13, Theorem 2.14, Corollary 2.15, pp. 11–16; Section 4.1 Definition 4.1 (e-idempotent subrings)."
---

## Statement

Let $H^\Lambda_\alpha$ be a central content sector, possibly zero, as in
[[def-cyclotomic-hecke-central-content-sector-notation]], and let $y_r$ be the
elements of [[lem-cyclotomic-hecke-intertwiners-and-local-power-series]]. Put
$$\psi_r:=\sum_{i\in I_\alpha}\varphi_rq_r(i)^{-1}e(i)\quad\text{(degenerate case)}, \qquad \psi_r:=\sum_{i\in I_\alpha}\Phi_rQ_r(i)^{-1}e(i)\quad\text{(nondegenerate case)}.$$
Then the elements $\{e(i):i\in I_\alpha\}\cup\{y_1,\dots,y_d\}\cup
\{\psi_1,\dots,\psi_{d-1}\}$ of $H^\Lambda_\alpha$ satisfy the relations
(1.6)–(1.15) of the sign-modified cyclotomic KLR presentation of
[[def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras]]. Consequently
there is a unique $F$-algebra homomorphism
$\rho\colon R^\Lambda_\alpha\to H^\Lambda_\alpha$ with $e(i)\mapsto e(i)$,
$y_r\mapsto y_r$ and $\psi_r\mapsto\psi_r$.

## Facts & Assumptions

**Given:** The sector $H^\Lambda_\alpha$
([[def-cyclotomic-hecke-central-content-sector-notation]]), the elements
$y_r$, the intertwiners $\varphi_r,\Phi_r$ and the normalizing series
$p_r(i),q_r(i),P_r(i),Q_r(i)$
([[lem-cyclotomic-hecke-intertwiners-and-local-power-series]]), and the
sign-modified KLR presentation (1.6)–(1.15)
([[def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras]]).

[F1] The $y_r$ are commuting nilpotents on the sector and the intertwiners
satisfy (3.14)–(3.20) in the degenerate case and (4.14)–(4.20) in the
nondegenerate case, while the normalizing series satisfy (3.27)–(3.29) and
(4.33)–(4.35) with compatibility (3.43), (4.44)
([[lem-cyclotomic-hecke-intertwiners-and-local-power-series]]).

[F2] The defining relations of the sector are (3.2)–(3.5) respectively
(4.2)–(4.5) together with the cyclotomic relation
$\prod_i(x_1-i)^{\lambda_i}=0$ respectively
$\prod_i(X_1-q^i)^{\lambda_i}=0$
([[def-affine-and-cyclotomic-type-a-hecke-algebras]]).

## Proof

**Proof technique:** direct.

**Given:** The displayed elements $\psi_r$ and the identities of [F1]–[F2].

1.1 The cyclotomic and dot-sliding relations. The first KLR relation follows from the cyclotomic relation [F2] and the invertibility of $(x_1-i_1)$ respectively $(1-q^{-i_1}X_1)$ off the summand $e(i)$: on $e(i)$ the dot $y_1$ is nilpotent and $x_1=y_1+i_1$ respectively $X_1=q^{i_1}(1-y_1)$, so $y_1^{(\Lambda,\alpha_{i_1})}e(i)=0$ accompanies the cyclotomic relation. The dot and idempotent relations are immediate from the definitions of the idempotents $e(i)$ and the dots $y_r$, and the dot-sliding relations follow from the dot-sliding intertwiner identities, the definitions of $p_r(i),P_r(i)$ and the equal-colour case of the normalization. [F1, F2, algebra]

1.2 Quadratic and all braid patterns. Work first in the faithful formal affine-Hecke calculation of the normalization supplier, then evaluate its regular identities in the sector. On equal colours the normalized intertwiner is $D=(S-1)/(u-v)$, so $D^2=0$ and $Dv-uD=1=vD-Du$. On unequal colours it is $Sc_{ij}(u,v)$, with $c=(1-p)/N$ in DG or $(1-P)/N$ in NG; its square is $c_{ij}(u,v)c_{ji}(v,u)=K_{ij}(u,v)$, giving respectively $1,v-u,u-v,(v-u)(u-v)$. For the braid, put $W=S_1S_2S_1$ and dots $u,v,w$. Distinct colours give both words $Wc_{ij}(u,v)c_{ik}(u,w)c_{jk}(v,w)$. For $(i,i,k)$ both words are $(W-S_1S_2)c_{ik}(u,w)c_{ik}(v,w)/(v-w)$; for $(i,k,k)$ they are $(W-S_2S_1)c_{ik}(u,v)c_{ik}(u,w)/(u-v)$, with denominators on the left and coefficient products on the right. The products are symmetric in the two equal-colour variables, so their divided differences vanish. For $(i,j,i)$ the longest terms cancel and the identity coefficients differ by $(K_{ij}(w,v)-K_{ij}(u,v))/(u-w)$; direct substitution gives $0,1,-1,u+w-2v$. On all equal colours the common value is $-(1-S_1-S_2+S_1S_2+S_2S_1-W)/((u-v)(u-w)(v-w))$. These are the supplier's explicit local computations, using only affine-Hecke relations and scalar normalizers, not the opposite relation-map lemma. The double-edge correction and its sign remain valid in characteristic two. Clearing temporary differences in the faithful formal calculation gives regular relations; only those relations, and unit coefficients, are evaluated on nilpotent dots. Hence every quadratic and braid relation (1.14)–(1.15) holds in $H^\Lambda_\alpha$. [F1, F2, algebra]

2.1 The homomorphism. The verified relations are exactly the presentation of $R^\Lambda_\alpha$ recalled in [F2] and in [[def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras]], so the universal property of that presentation gives a unique $F$-algebra homomorphism $\rho\colon R^\Lambda_\alpha\to H^\Lambda_\alpha$ sending the generators to the displayed elements. No choice principle is used. [F1, F2, step 1.1, step 1.2, construct]

3.1 Conclusion. Steps 1.1 and 1.2 verify all relations of the sign-modified cyclotomic KLR presentation for $\{e(i)\}\cup\{y_r\}\cup\{\psi_r\}$, and step 2.1 invokes the universal property to produce $\rho$. The zero sector is included: all constructions are supported on the projectors $e(i)$, which may vanish. [step 1.2, step 2.1] ∎

## Remarks

This is the inverse direction of the Hecke–KLR comparison at the level of a
single central content sector; together with
[[lem-cyclotomic-klr-block-satisfies-the-hecke-relations]] it yields the two
mutually inverse maps of the blockwise bridge. The local power-series calculus
of [[lem-cyclotomic-hecke-intertwiners-and-local-power-series]] is the only
non-elementary input.
