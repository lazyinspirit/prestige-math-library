---
id: lem-canonical-local-reciprocity-is-compatible-with-field-norms
kind: lemma
title: "Canonical local reciprocity is compatible with finite separable field norms"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 13
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-canonical-local-reciprocity-from-cyclic-character-pairings
  - thm-local-class-formation-for-finite-residue-local-field
  - def-restriction-and-corestriction-on-group-cohomology
  - thm-restriction-corestriction-composite-is-multiplication-by-the-index
  - thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients
  - def-field-norm-and-trace
  - thm-field-norm-and-trace-by-embeddings
proof_strategy: direct
axiom_use: >-
  AC and DC are exactly the assumptions of the normalized local invariant and
  canonical character-pairing suppliers. All additional coset choices are finite.
  No global reciprocity or global class-formation theorem is used.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "VII Lemma 8.4(b), printed p.222, uses this local norm square. The present proof supplies it directly by the finite transfer formula and canonical character pairings."
verification: {}
---

## Statement

Assume AC and Dependent Choice, with the supplied continuous cohomology convention. Let $K$ be a complete discretely valued field with finite residue field, let $L/K$ be finite separable, and embed $L$ in a fixed separable closure $K_s$. Let $G_K=\operatorname{Gal}(K_s/K)$ and $G_L=\operatorname{Gal}(K_s/L)$, and let $j^{\mathrm{ab}}:G_L^{\mathrm{ab}}\to G_K^{\mathrm{ab}}$ be induced by inclusion. Use the distinguished local Artin maps $\rho_K$ and $\rho_L$ constructed from the normalized cohomological character pairings, with arithmetic Frobenius normalization. Then for every $a\in L^\times$,
$$\rho_K(N_{L/K}a)=j^{\mathrm{ab}}(\rho_L(a)).$$
The same identity holds on the open-finite-index profinite completions, with the homomorphism induced by the field norm. No assertion that unramified normalization alone characterizes local reciprocity is required.

## Statement references

[[lem-canonical-local-reciprocity-from-cyclic-character-pairings]]

[[thm-local-class-formation-for-finite-residue-local-field]]

[[def-field-norm-and-trace]]

## Facts & Assumptions

**Given:** The data in the Statement, with $G=G_K$, $H=G_L$, $d=[G:H]=[L:K]$, and coefficient module $M=K_s^\times$.

[F1] For each continuous finite-order character $\chi:G\to\mathbb Q/\mathbb Z$, the distinguished Artin map satisfies $\chi(\rho_K(b))=\operatorname{inv}_K(b\smile\delta\chi)$. The identical assertion holds over $L$. Characters of finite abelian groups separate points. [[lem-canonical-local-reciprocity-from-cyclic-character-pairings]]

[F2] The normalized invariants $\operatorname{inv}_K:H^2(G,M)\to\mathbb Q/\mathbb Z$ and $\operatorname{inv}_L:H^2(H,M)\to\mathbb Q/\mathbb Z$ are isomorphisms, and $\operatorname{inv}_L(\operatorname{res}\gamma)=d\operatorname{inv}_K(\gamma)$. [[thm-local-class-formation-for-finite-residue-local-field]]

[F3] Corestriction is the cohomological map extending the degree-zero coset norm, and $\operatorname{cor}\operatorname{res}\gamma=d\gamma$. Continuous cohomology is computed by the finite-quotient/direct-limit cochain convention. [[def-restriction-and-corestriction-on-group-cohomology]] [[thm-restriction-corestriction-composite-is-multiplication-by-the-index]] [[thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients]]

[F4] The field norm in a finite separable extension is the product over its embeddings, represented here by $\prod_{t\in H\backslash G}t^{-1}(a)$. [[def-field-norm-and-trace]] [[thm-field-norm-and-trace-by-embeddings]]

[A1] AC and DC are the hypotheses of [F1]–[F3]; the local invariants and the Artin maps keep precisely their supplied normalization. [[def-axiom-of-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** prove the needed degree-zero/degree-two projection identity by an explicit integer coboundary, then compare all finite characters of the canonical Artin maps.

**Given:** The original data and the preceding conventions.

1.1 Fix a finite transversal $T$ for the right cosets $H\backslash G$. For $t\in T$ and $g\in G$, write $tg=h(t,g)t_g$ with $h(t,g)\in H$ and $t_g\in T$. On multiplicative inhomogeneous cochains the transfer formula is $$\operatorname{Cor}(f)(g_1,\ldots,g_n)=\prod_{t\in T}t^{-1}f\bigl(h(t,g_1),h(t_{g_1},g_2),\ldots,h(t_{g_1\cdots g_{n-1}},g_n)\bigr).$$ This is the corestriction in [F3]: in degree zero it is the coset norm; it commutes with the cochain differential, because $h(t,gg')=h(t,g)h(t_g,g')$ identifies each interior face and $gt_g^{-1}=t^{-1}h(t,g)$ identifies the first face after the permutation $t\mapsto t_g$ of the transversal. The last faces agree without modification. Thus all signed terms of the two differentials match. The formula is natural in the coefficient module and gives the cohomological map extending that degree-zero norm. Continuous cochains have finite image and factor through finite quotients as in [F3]; applying the formula there and passing to the limit gives the asserted continuous transfer. [F3, given, construct, algebra]

1.2 For $\beta\in H^2(H,M)$, choose $c\in\mathbb Q/\mathbb Z$ with $dc=\operatorname{inv}_L(\beta)$, and let $\gamma$ be its preimage under $\operatorname{inv}_K$. By [F2], $\operatorname{res}\gamma=\beta$. Hence [F3] gives $\operatorname{cor}\beta=d\gamma$, so $$\operatorname{inv}_K(\operatorname{cor}\beta)=dc=\operatorname{inv}_L(\beta).$$ This uses divisibility of $\mathbb Q/\mathbb Z$ followed by injectivity of the invariant; it does not cancel multiplication by $d$ in a torsion group. [F2, F3, A1, given, algebra]

2.1 Let $\chi:G\to\mathbb Q/\mathbb Z$ be a continuous finite-order character and let $r:G\to\mathbb Q$ be its unique lift taking values in $[0,1)$. Its integer cocycle is $z(g,g')=r(g)+r(g')-r(gg')$. Put $$m_t(g)=r(h(t,g))-r(g)-r(t)+r(t_g)\in\mathbb Z.$$ The integrality follows from the character identity $\chi(t)+\chi(g)=\chi(h(t,g))+\chi(t_g)$. Expanding the definitions gives $$z(h(t,g),h(t_g,g'))=z(g,g')+m_t(g)+m_{t_g}(g')-m_t(gg').$$ For $a\in L^\times=M^H$ define the continuous multiplicative one-cochain $B(g)=\prod_t t^{-1}(a)^{m_t(g)}$. The identity $gt_g^{-1}(a)=t^{-1}(a)$, since $h(t,g)$ fixes $a$, now shows from step 1.1 that $$\operatorname{Cor}\bigl(a^{\operatorname{res}z}\bigr)(g,g')=(N_{L/K}a)^{z(g,g')}\,B(g)\,gB(g')\,B(gg')^{-1}.$$ Consequently $\operatorname{cor}(a\smile\delta(\operatorname{res}\chi))=N_{L/K}a\smile\delta\chi$ in $H^2(G,M)$. All displayed lifts have finite image or finite coset index and are locally constant; the identity is therefore valid for the stipulated continuous cochains. [F1, F4, step 1.1, construct, algebra]

3.1 Apply the canonical pairing formula [F1], the identity in step 2.1 and invariant compatibility in step 1.2. For every finite-order character $\chi$ of $G$ this gives $$\chi(\rho_K(N_{L/K}a))=\operatorname{inv}_K(N_{L/K}a\smile\delta\chi)=\operatorname{inv}_L(a\smile\delta(\operatorname{res}\chi))=\chi(j^{\mathrm{ab}}\rho_L(a)).$$ Finite characters separate points in each finite abelian quotient, hence in the profinite abelianization. This proves the stated equality on $L^\times$ with the actual canonical normalization. [F1, A1, step 1.2, step 2.1, algebra]

4.1 The field norm is continuous, being the determinant of multiplication in a finite-dimensional valued vector space. The inverse image of an open finite-index subgroup of $K^\times$ is open and finite-index in $L^\times$, so the norm induces a homomorphism between their open-finite-index profinite completions. The distinguished Artin maps and $j^{\mathrm{ab}}$ are continuous. The image of $L^\times$ is dense in its open-subgroup completion: any finitely specified quotient conditions reduce to their common finite-index intersection and are attained by a representative of that quotient. Thus the two maps in the Statement agree on a dense subset by step 3.1 and agree everywhere because the target profinite group is Hausdorff. This proves the completion identity as well. [F1, F4, step 3.1, construct] ∎
