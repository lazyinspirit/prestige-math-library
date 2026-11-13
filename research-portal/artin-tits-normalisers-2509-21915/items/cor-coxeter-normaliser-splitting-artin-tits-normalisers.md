---
id: cor-coxeter-normaliser-splitting-artin-tits-normalisers
kind: corollary
title: Coxeter normaliser semidirect product
status: draft
domain: mathematics
origin: pipeline
deps:
  - def-normaliser-complement-artin-tits-normalisers
  - lem-author-1c4d8f320a61-unique-normaliser-representatives
  - lem-author-1c4d8f320a61-normaliser-factorization
  - lem-author-1c4d8f320a61-normaliser-trivial-intersection
  - prop-normaliser-quotient-interface-artin-tits-prerequisites
  - math:thm-splitting-lemma-for-group-extensions
dependency_roles:
  def-normaliser-complement-artin-tits-normalisers: mathematical-premise
  lem-author-1c4d8f320a61-unique-normaliser-representatives: mathematical-premise
  lem-author-1c4d8f320a61-normaliser-factorization: mathematical-premise
  lem-author-1c4d8f320a61-normaliser-trivial-intersection: mathematical-premise
  prop-normaliser-quotient-interface-artin-tits-prerequisites: mathematical-premise
  math:thm-splitting-lemma-for-group-extensions: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF pp. 17; Corollary 4.8
      statement: The vertex group $N_J$ maps isomorphically onto $N(W,J)$ under the
        normaliser quotient, and $\mathrm{Norm}_W(W_J)\cong W_J\rtimes N_J$.
      hypotheses: The algebraic Coxeter-system, normaliser quotient and root-permuting
        subgroup conventions; arbitrary rank and arbitrary J are retained here,
        with no finite or spherical assumption.
      reading_limits: Corollary 4.8 and its proof were checked in the frozen extracted
        text and original PDF p.17 for attribution only. The older Lusztig and
        Howlett sources and the Dyer–Gimenez source were not independently read
        in this scoped repair. The local proof below applies the supplied
        algebraic helper interfaces at arbitrary rank; it does not use the
        article claim as a premise.
proof_strategy: direct
dependency_level: 13
formulation_deps:
  - def-normaliser-complement-artin-tits-normalisers
  - prop-normaliser-quotient-interface-artin-tits-prerequisites
  - math:thm-splitting-lemma-for-group-extensions
argument_deps:
  - def-normaliser-complement-artin-tits-normalisers
  - lem-author-1c4d8f320a61-unique-normaliser-representatives
  - lem-author-1c4d8f320a61-normaliser-factorization
  - lem-author-1c4d8f320a61-normaliser-trivial-intersection
  - prop-normaliser-quotient-interface-artin-tits-prerequisites
  - math:thm-splitting-lemma-for-group-extensions
---

## Statement

Let $(W,S)$ be an arbitrary-rank Coxeter system with $S=\{s_i:i\in\Gamma_0\}$ in its standard real root representation, and let $J\subseteq\Gamma_0$ be arbitrary. Write $W_J=\langle s_j:j\in J\rangle$, $M=\operatorname{Norm}_W(W_J)$ and $N(W,J)=M/W_J$. Let $N_J=\mathcal{BH}_J$ be the vertex group at $J$, equivalently the subgroup permuting the simple-root set $\{\alpha_j:j\in J\}$.

The vertex group $N_J$ maps isomorphically onto $N(W,J)$ under the normaliser quotient, and $\mathrm{Norm}_W(W_J)\cong W_J\rtimes N_J$.

## Statement references

[[def-normaliser-complement-artin-tits-normalisers]]

[[prop-normaliser-quotient-interface-artin-tits-prerequisites]]

## Facts & Assumptions

[F1] The vertex group $N_J$ is the subgroup permuting the simple roots indexed by $J$ and is contained in $M$. [[def-normaliser-complement-artin-tits-normalisers]]

[F2] Every coset of $W_J$ in $M$ contains exactly one element of $N_J$. [[lem-author-1c4d8f320a61-unique-normaliser-representatives]]

[F3] The subgroup product and intersection are $M=W_JN_J$ and $W_J\cap N_J=\{1\}$. [[lem-author-1c4d8f320a61-normaliser-factorization]] [[lem-author-1c4d8f320a61-normaliser-trivial-intersection]]

[F4] The parabolic subgroup is normal in its normaliser, and a complement to the kernel of a quotient map gives the corresponding semidirect-product decomposition. [[prop-normaliser-quotient-interface-artin-tits-prerequisites]] [[math:thm-splitting-lemma-for-group-extensions]]

## Proof
**Given:** An arbitrary-rank Coxeter system and arbitrary $J\subseteq\Gamma_0$. Write $M=\operatorname{Norm}_W(W_J)$ and $N(W,J)=M/W_J$. No topology, finite-rank or spherical-type assumption is made. **Goal:** Prove the displayed quotient identification and splitting.


1.1 By [F1] and [F4], the quotient homomorphism $q:M\to M/W_J$ restricts to a homomorphism on $N_J$. By [F2], each quotient coset has exactly one representative in that subgroup. Therefore $q|_{N_J}:N_J\to N(W,J)$ is bijective and is a group isomorphism. [F1, F2, F4]

2.1 The product and intersection in [F3] make $N_J$ a complement to the normal subgroup $W_J$. Apply the splitting theorem in [F4]: conjugation by $N_J$ is the action on $W_J$, and the map $W_J\rtimes N_J\to M$, $(u,n)\mapsto un$, is an isomorphism. The section of $q$ is the inverse of $q|_{N_J}$ followed by inclusion into $M$. This establishes exactly the stated splitting and quotient map. [F1, F3, F4, step 1.1] ∎

## Source notes

The article proves Corollary 4.8 from its universal covering and attributes the classical result to Lusztig [26, Lemma 5.2] and Howlett [22]. Those works are attribution only here. To retain arbitrary rank without depending on finite-rank geometric suppliers, the five local algebraic helpers instead use Dyer–Gimenez, arXiv:2606.12937v1, §1.4 and Propositions 2.10(b)–(d), 2.11(c). The exact imported statements, hypotheses, locators and reading limits are recorded in the first two helpers. In particular their §1.4 explicitly permits infinite rank. The departure from the article's geometric method is limited to constructing the complement algebraically via minimum coset representatives. No infinite-rank chamber geometry or extension of the covering theorem is claimed, and no original-article defect is asserted.
