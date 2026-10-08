---
id: thm-central-decomposition-into-factor-representations
kind: theorem
title: "Central decomposition into factor representations"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps:
  - lem-central-diagonal-disintegration-has-factor-fibers
  - lem-separable-group-c-star-representations-disintegrate-over-a-commuting-diagonal-algebra
  - lem-separable-abelian-von-neumann-algebras-have-a-self-adjoint-generator
  - thm-spectral-multiplicity-model-for-separable-abelian-von-neumann-algebras
  - lem-second-countable-lch-spaces-are-standard-borel
  - def-factor-representation-and-primary-representation
  - def-direct-integral-of-unitary-representations
  - def-axiom-of-choice
justified_by: []
aliases: []
dependency_level: 4
axiom_use: "AC is the stated hypothesis and is inherited from the self-adjoint-generator theorem, the spectral multiplicity model, the disintegration lemma and the central-diagonal lemma; it supplies the choice of the self-adjoint generator of the centre, the direct-integral model and the disintegration field. The fibre representations are canonically determined by the disintegration up to the null set, and no further selection is made."
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019; author-hosted complete book draft)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 6, §6.C: Theorem 6.C.7 (central decomposition into factor representations, with the fibre commutant and centre identities) and Definition 6.C.9, printed pp. 195-198."
    - title: "Bruce Blackadar, Operator Algebras: Theory of C*-Algebras and von Neumann Algebras (author-hosted complete text)"
      url: "https://bruceblackadar.com/Mathematics/Cycr.pdf"
      locator: "Part III, §III.1.6.4 (central decomposition of a von Neumann algebra on a separable Hilbert space), printed p. 254; the measurable construction is proved locally."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice. Let $G$ be a second-countable locally compact Hausdorff group and let $(\pi,H)$ be a strongly continuous unitary representation of $G$ on a separable Hilbert space $H\neq\{0\}$. Then there exist a sigma-finite standard-Borel measure space $(X,\mathcal B,\mu)$, a measurable Hilbert field $(H_x,e_n(x))$ with $H_x\neq\{0\}$ for $\mu$-almost every $x$, a measurable field $(\pi_x)$ of strongly continuous unitary representations of $G$ on the fibres, with $\pi_x$ a factor representation for almost every $x$, and a unitary $$U:H\longrightarrow\int_X^\oplus H_x\,d\mu(x)$$ such that (1) $U\pi(g)U^{-1}=\int_X^\oplus\pi_x(g)\,d\mu(x)$ for every $g\in G$; (2) $UZ(\pi(G)'')U^{-1}=\mathcal D$, the algebra of diagonalisable operators; (3) $U\pi(G)''U^{-1}=\int_X^\oplus\pi_x(G)''\,d\mu(x)$ and $U\pi(G)'U^{-1}=\int_X^\oplus\pi_x(G)'\,d\mu(x)$. Such a decomposition is called a **central decomposition** of $\pi$.

## Facts & Assumptions

**Given:** AC; the second-countable LCH group $G$; the strongly continuous unitary representation $(\pi,H)$ on the nonzero separable space $H$; the centre $Z=Z(\pi(G)'')$; and the notation of the Statement.

[F1] A separable abelian von Neumann algebra $\mathcal A$ on a nonzero separable Hilbert space has a bounded self-adjoint generator $S$ with $\mathcal A=W^*(S)$ ([[lem-separable-abelian-von-neumann-algebras-have-a-self-adjoint-generator]]).

[F2] For such an algebra there are a nonempty compact $K=\sigma(S)\subseteq\mathbb R$, a nonzero finite regular Borel measure $\mu$ on $K$, a Borel multiplicity function $m:K\to\{1,2,\dots\}\cup\{\infty\}$, a measurable field $H_t=\mathbb C^{m(t)}$ or $\ell^2(\mathbb N)$, and a unitary $U:H\to\int_K^\oplus H_t\,d\mu(t)$ with $USU^{-1}=M_t$ and $U\mathcal AU^{-1}=\{M_f:f\in L^\infty(K,\mu)\}$, the algebra of diagonalisable operators ([[thm-spectral-multiplicity-model-for-separable-abelian-von-neumann-algebras]]).

[F3] A compact metric space is second-countable and locally compact Hausdorff, and every second-countable LCH space is a standard Borel space when equipped with its Borel sigma-algebra; a nonzero finite Borel measure is sigma-finite ([[lem-second-countable-lch-spaces-are-standard-borel]]).

[F4] Disintegration over a commuting diagonal algebra: for a separable strongly continuous unitary representation and an abelian $A\subseteq\pi(G)'$ diagonalised by a unitary $U$ onto the diagonal algebra $\mathcal D$ of a sigma-finite standard-Borel direct integral, there is a measurable field $(\pi_x)$ of strongly continuous unitary representations with $U\pi(g)U^{-1}=\int_X^\oplus\pi_x(g)\,d\mu(x)$ for every $g$, the field $x\mapsto\pi_x(G)''$ is measurable, and $\pi_x$ is nondegenerate for almost every $x$ ([[lem-separable-group-c-star-representations-disintegrate-over-a-commuting-diagonal-algebra]]).

[F5] Central diagonal disintegration: if $UZ(\pi(G)'')U^{-1}=\mathcal D$ and $M=U\pi(G)''U^{-1}$, then $\mathcal D\subseteq M\subseteq\mathcal D'$ and, for the field $M_x=\pi_x(G)''$ of [F4], one has $M=\int_X^\oplus M_x\,d\mu(x)$, $M'=\int_X^\oplus M_x'\,d\mu(x)$ and $Z(M)=\int_X^\oplus Z(M_x)\,d\mu(x)$; consequently $Z(M_x)=\mathbb C I_{H_x}$ almost everywhere, and measurable fields of von Neumann algebras with equal direct integrals agree almost everywhere ([[lem-central-diagonal-disintegration-has-factor-fibers]]).

[F6] A representation is factorial, or primary, when the centre of $\pi(G)''$ is scalar; the direct integral of a measurable field of unitary representations is defined through its induced operators ([[def-factor-representation-and-primary-representation]], [[def-direct-integral-of-unitary-representations]]).

[F7] AC is the stated hypothesis and supplies the selections inherited by [F1], [F2], [F4] and [F5] ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** a self-adjoint generator of the centre, the spectral multiplicity model, and the disintegration and central-diagonal lemmas.

**Given:** AC; the representation $(\pi,H)$ with $H\neq\{0\}$ separable; $M=\pi(G)''$; $Z=Z(M)$.

1.1 The centre $Z=Z(M)$ is an abelian concrete von Neumann algebra on the nonzero separable $H$; by [F1] and [F2] choose a bounded self-adjoint generator $S$ of $Z$ and a spectral multiplicity model: a nonempty compact $K=\sigma(S)\subseteq\mathbb R$, a nonzero finite regular Borel measure $\mu$ on $K$, a Borel multiplicity function $m\ge1$, the measurable field of nonzero fibres $H_t=\mathbb C^{m(t)}$ or $\ell^2(\mathbb N)$, and a unitary $U:H\to\int_K^\oplus H_t\,d\mu(t)$ with $USU^{-1}=M_t$ and $UZU^{-1}=\mathcal D$. [F1, F2, F7, construct]

2.1 The compact metric space $K$ with its Borel sigma-algebra is a standard Borel space and $\mu$ is a nonzero finite, hence sigma-finite, measure on it, so $(K,\mathcal B(K),\mu)$ is a sigma-finite standard-Borel measure space in the sense of [F3]; the multiplicity function satisfies $m\ge1$, so $H_t\neq\{0\}$ for every $t$, and the field $(H_t)$ is a measurable Hilbert field with countable fundamental family. [F2, F3, step 1.1]

3.1 Since $Z$ is abelian and $Z\subseteq\pi(G)'$ and $UZU^{-1}=\mathcal D$, the disintegration lemma [F4] applies with $A=Z$ and yields a measurable field $(\pi_t)$ of strongly continuous unitary representations on the fibres with $U\pi(g)U^{-1}=\int_K^\oplus\pi_t(g)\,d\mu(t)$ for every $g\in G$, with $t\mapsto\pi_t(G)''$ a measurable field of von Neumann algebras and $\pi_t$ nondegenerate for almost every $t$. [F4, step 2.1]

4.1 Put $M_t:=\pi_t(G)''$ and $\widehat M:=U\pi(G)''U^{-1}$. The central-diagonal lemma [F5] applies: $\mathcal D\subseteq\widehat M\subseteq\mathcal D'$, $\widehat M=\int_K^\oplus M_t\,d\mu(t)$, $\widehat M'=\int_K^\oplus M_t'\,d\mu(t)$ and $Z(\widehat M)=\int_K^\oplus Z(M_t)\,d\mu(t)$; moreover $Z(\widehat M)=UZ(\pi(G)'')U^{-1}=UZU^{-1}=\mathcal D=\int_K^\oplus\mathbb C I_{H_t}\,d\mu(t)$, so the almost-everywhere uniqueness in [F5] gives $Z(M_t)=\mathbb C I_{H_t}$ for almost every $t$. [F5, step 3.1, algebra]

5.1 Therefore each $\pi_t$ is factorial for almost every $t$ by [F6], and writing $X=K$, $H_x=H_t$, $\pi_x=\pi_t$ we have (1) $U\pi(g)U^{-1}=\int_X^\oplus\pi_x(g)\,d\mu(x)$ for every $g$ by step 3.1; (2) $UZ(\pi(G)'')U^{-1}=\mathcal D$ by step 1.1; and (3) $U\pi(G)''U^{-1}=\widehat M=\int_X^\oplus\pi_x(G)''\,d\mu(x)$ and $U\pi(G)'U^{-1}=\widehat M'=\int_X^\oplus\pi_x(G)'\,d\mu(x)$ by step 4.1. All hypotheses of the Statement are met, so a central decomposition exists. [F4, F5, F6, step 4.1] ∎

## Boundary cases

The trivial representation on $H=\mathbb C$ has $Z(\pi(G)'')=\mathbb C I$, the spectral model is one-dimensional, $K$ is a single point, and the decomposition has one fibre. If the centre is minimal abelian, the model's multiplicity function is constant, and the fibre representations are all equivalent to a single factor representation. The measure is finite and nonzero by construction, so the empty base and zero-measure cases do not occur in this decomposition; fibres are nonzero for every $t$ in this model, which is stronger than the almost-everywhere assertion of the Statement. The separable and nonzero hypotheses on $H$ and the second countability of $G$ are those of [F1]-[F5] and are not weakened. The choice content is exactly that inherited from [F7].

## Source qualifications

Bekka-de la Harpe, Chapter 6 §6.C, Theorem 6.C.7 and Definition 6.C.9, printed pp. 195-198, state the central decomposition into factor representations with the fibre centre and commutant identities; their proof strategy is the one followed here, using the spectral multiplicity model for the centre and the disintegration over the diagonal algebra. Blackadar, Part III §III.1.6.4, printed p. 254, states the central decomposition of a von Neumann algebra on a separable Hilbert space. The measurable fibre construction, the identity of the fibre commutants and centres, and the almost-everywhere factoriality are supplied by the two run-local lemmas cited in [F4] and [F5]; no step relies on an unproved reference to Dixmier or Sakai.
