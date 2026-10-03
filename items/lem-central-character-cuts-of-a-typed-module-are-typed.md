---
id: lem-central-character-cuts-of-a-typed-module-are-typed
kind: lemma
title: Central-character cuts of a typed module are typed by the matching weights
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-verma-type-of-a-module-with-a-standard-filtration, def-generalized-central-character-subcategory-of-o, thm-category-o-decomposes-by-generalized-central-character, lem-generalized-central-character-submodules-are-direct-summands, cor-central-characters-are-dot-weyl-orbits, def-axiom-of-choice, lem-central-action-on-a-cyclic-highest-weight-module-is-scalar]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Fan Zhou, The classical and the functorial BGG resolutions (Columbia thesis 2021), Part I Sec. 5.1, Lemma 9.7, p. 31"
      url: "https://www.math.columbia.edu/~fanzhou/files/Thesis041921.pdf"
    - title: "J. van Ekeren, Topics in representation theory (IMPA 2024), Sec. 29, pp. 123-124"
      url: "https://w3.impa.br/~jethro/2024-0/georep.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $M\in\mathcal O$ be Verma-filtered with type $\operatorname{Typ}M$, and for a central character $\chi$ let $M_\chi$ be the generalised central-character component ([[def-generalized-central-character-subcategory-of-o]]). Then $M_\chi$ is Verma-filtered and $\operatorname{Typ}M_\chi=\{\psi\in\operatorname{Typ}M:\chi_\psi=\chi\}$, where $\chi_\psi$ is the central character of $M(\psi)$. In particular, by the Harish-Chandra theorem in the form [[cor-central-characters-are-dot-weyl-orbits]], $\operatorname{Typ}M_\chi$ consists of the elements of $\operatorname{Typ}M$ in the dot-Weyl orbit defining $\chi$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a Verma-filtered module $M\in\mathcal O$ with a fixed filtration $0=M_0\subseteq M_1\subseteq\cdots\subseteq M_n=M$ and weights $\psi_1,\dots,\psi_n$ with $M_j/M_{j-1}\cong M(\psi_j)$, and a central character $\chi$.

[F1] Every $M\in\mathcal O$ decomposes canonically as $M=\bigoplus_{\chi'}M_{\chi'}$ into finitely many generalised central-character submodules, and the canonical projections $M\to M_{\chi'}$ are exact functors ([[lem-generalized-central-character-submodules-are-direct-summands]], [[thm-category-o-decomposes-by-generalized-central-character]]).

[F2] If $0\to A\to B\to C\to0$ is an exact sequence in $\mathcal O$, applying the exact projection functor gives an exact sequence $0\to A_{\chi}\to B_{\chi}\to C_{\chi}\to0$, and the quotients of a filtration are computed by $(B_j/B_{j-1})_\chi\cong B_{j,\chi}/B_{j-1,\chi}$ (F1, [[def-verma-type-of-a-module-with-a-standard-filtration]]).

[F3] Every cyclic highest-weight module has a well-defined central character; on $M(\psi)$ every $z\in Z(U(\mathfrak g))$ acts by the scalar $\chi_\psi(z)$, and therefore $M(\psi)_{\chi'}=M(\psi)$ if $\chi'=\chi_\psi$ while $M(\psi)_{\chi'}=0$ if $\chi'\ne\chi_\psi$ ([[lem-central-action-on-a-cyclic-highest-weight-module-is-scalar]], [[def-generalized-central-character-subcategory-of-o]]).

[F4] $\chi_\psi=\chi_{\psi'}$ if and only if $\psi'$ lies in the dot-Weyl orbit of $\psi$ ([[cor-central-characters-are-dot-weyl-orbits]]).

## Proof

1.1 Apply the exact projection functor $(-)_\chi$ to each short exact sequence $0\to M_{j-1}\to M_j\to M(\psi_j)\to0$. By [F2] the result is an exact sequence $0\to M_{j-1,\chi}\to M_{j,\chi}\to M(\psi_j)_\chi\to0$, so the modules $M_{j,\chi}$ form an increasing filtration of $M_\chi$ with successive quotients $M(\psi_j)_\chi$. [F1, F2, given, algebra]

2.1 By [F3] the quotient $M(\psi_j)_\chi$ equals $M(\psi_j)$ when $\chi=\chi_{\psi_j}$, and is $0$ when $\chi\ne\chi_{\psi_j}$. Deleting the redundant equalities $M_{j,\chi}=M_{j-1,\chi}$ from the filtration of step 1.1 leaves a finite filtration of $M_\chi$ whose successive quotients are exactly the Verma modules $M(\psi)$ for those $j$ with $\chi_{\psi_j}=\chi$. Hence $M_\chi$ is Verma-filtered and $\operatorname{Typ}M_\chi=\{\psi\in\operatorname{Typ}M:\chi_\psi=\chi\}$. [F2, F3, step 1.1]

3.1 The final description of that set is [F4]: membership $\chi_\psi=\chi$ is exactly the condition that $\psi$ lies in the dot-Weyl orbit defining the central character. [F4, step 2.1] ∎
