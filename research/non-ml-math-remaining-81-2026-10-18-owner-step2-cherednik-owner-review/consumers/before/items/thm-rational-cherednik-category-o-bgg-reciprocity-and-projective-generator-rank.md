---
id: thm-rational-cherednik-category-o-bgg-reciprocity-and-projective-generator-rank
kind: theorem
title: "Cherednik BGG reciprocity and the KZ projective rank"
deps: [thm-rational-cherednik-category-o-projective-generator-from-generalized-standards, lem-rational-cherednik-costandard-orthogonality-and-character, lem-rational-cherednik-dunkl-localization-and-flat-connection, def-rational-cherednik-kz-functor-and-finite-hecke-algebra, cor-sum-of-squares-formula-for-irreducible-degrees]
status: draft
dependency_level: 11
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ginzburg, Guay, Opdam and Rouquier, On the category O for rational Cherednik algebras"
      url: "https://arxiv.org/abs/math/0212036"
      locator: "Sections 2.3–2.6 and 5.3–5.4; complete local proofs below."
    - title: "Etingof and Ma, Lecture Notes on Cherednik Algebras"
      url: "https://arxiv.org/abs/1001.0432"
      locator: "Sections 3.5–3.10 and 6.2, especially Theorems 6.4–6.5."
---

## Statement

For every $E,F\in\operatorname{Irr}W$, one has $(P(E):\Delta(F))=[\nabla(F):L(E)]=[\Delta(F):L(E)]$. Put $r_E=\dim\operatorname{KZ}(L(E))$. Then $P_{\operatorname{KZ}}=\bigoplus_E P(E)^{r_E}$ represents the exact vector-space-valued KZ functor and $\dim\operatorname{End}_{\mathcal O}(P_{\operatorname{KZ}})=|W|$. This rank calculation uses no dimension or freeness hypothesis on the reflection Hecke algebra; the equality $\dim\mathcal H_{q(c)}(W)=|W|$ remains an explicit extra hypothesis when this is used to prove the quotient equivalence.

## Facts & Assumptions

**Given:** A finite complex reflection group $W$ on $\mathfrak h$ and an arbitrary conjugacy-invariant parameter $c$, with the current minus-sign Cherednik normalization.

[F1] Projectives have standard flags and $\dim\operatorname{Hom}(P(E),M)=[M:L(E)]$; costandards have Hom/Ext1 orthogonality and the same $K_0$ classes as standards ([[thm-rational-cherednik-category-o-projective-generator-from-generalized-standards]], [[lem-rational-cherednik-costandard-orthogonality-and-character]]).

[F2] Localization and KZ are exact, and standard localization has rank $\dim E$; the irreducible degree squares sum to $|W|$ ([[lem-rational-cherednik-dunkl-localization-and-flat-connection]], [[def-rational-cherednik-kz-functor-and-finite-hecke-algebra]], [[cor-sum-of-squares-formula-for-irreducible-degrees]]).

## Proof

1.1 Apply $\operatorname{Hom}(-,\nabla(F))$ along a standard flag of $P(E)$. The Hom and Ext1 orthogonality in [F1] makes the resulting Hom sequences short exact, and the dimension adds one exactly for a $\Delta(F)$ section. Thus $(P(E):\Delta(F))=\dim\operatorname{Hom}(P(E),\nabla(F))$. The projective-cover Hom formula identifies the latter with $[\nabla(F):L(E)]$, and the costandard character equality makes this $[\Delta(F):L(E)]$. This proves BGG reciprocity with the highest-weight and projective prerequisites supplied by [F1]. [F1, F2, algebra]

2.1 Let $\mathcal F:\mathcal O_c\to\mathbb C\text{-vector spaces}$ be any exact linear functor with finite-dimensional values. Put $r_E=\dim\mathcal F(L(E))$ and $P_{\mathcal F}=\bigoplus_E P(E)^{r_E}$. Choose a basis of each $\mathcal F(L(E))$ and lift its finitely many vectors to $\mathcal F(P(E))$, using exactness on $P(E)\twoheadrightarrow L(E)$. For a chosen lift $v$, the map $\operatorname{Hom}(P(E),M)\to\mathcal F(M)$ sending $f$ to $\mathcal F(f)v$ is natural. Their sum gives $\operatorname{Hom}(P_{\mathcal F},-)\to\mathcal F$. On every simple this is an isomorphism by the projective-cover Hom formula and the chosen basis. Both functors are exact, so induction on composition length, applied to their short exact value sequences, makes it an isomorphism on every object. With $\mathcal F=\operatorname{KZ}$, this constructs the stated representing projective $P_{\operatorname{KZ}}$. Some $r_E$ may be zero; no generation claim for all of $\mathcal O_c$ is needed. [F1, F2, step 1.1, algebra]

3.1 Projective exactness and a standard flag give $\dim\operatorname{Hom}(P(E),P(F))=[P(F):L(E)]=\sum_G(P(F):\Delta(G))[\Delta(G):L(E)]$. Inserting BGG and the multiplicities $r_E$ into the endomorphism dimension yields $\dim\operatorname{End}(P_{\operatorname{KZ}})=\sum_{E,F,G}r_Er_F[\Delta(G):L(E)][\nabla(G):L(F)]=\sum_G\dim\operatorname{KZ}(\Delta(G))\dim\operatorname{KZ}(\nabla(G))$. A standard localizes to a vector bundle of rank $\dim G$; the monodromy fiber at the chosen regular basepoint has exactly that dimension, including the endpoint action used in the orbifold definition. Thus $\dim\operatorname{KZ}(\Delta(G))=\dim G$. The equality in $K_0$ from [F1] and exactness of KZ give the same dimension for $\nabla(G)$. Therefore $\dim\operatorname{End}(P_{\operatorname{KZ}})=\sum_G(\dim G)^2=|W|$, by [F2]. No dimension or freeness assertion about the reflection Hecke algebra was used. Consequently this dimension comparison is available under precisely the separate Hecke-rank hypothesis stated for quotient equivalence. [F1, F2, step 2.1, algebra] ∎
