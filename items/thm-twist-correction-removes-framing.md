---
id: thm-twist-correction-removes-framing
kind: theorem
title: "Scalar twist correction removes the framing"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-colored-framed-knot-evaluation-from-ribbon-category
  - def-ribbon-evaluation-of-an-x-colored-closed-braid
  - lem-ribbon-trace-equals-the-framed-closure-evaluation
  - lem-scalar-twist-controls-the-two-markov-stabilizations
  - def-absolutely-simple-object
  - def-exponent-sum-and-writhe-of-a-braid
  - thm-basic-properties-of-the-categorical-trace
  - thm-markovs-closed-braid-equivalence-theorem
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: "The Axiom of Choice supplies countable choice for the stabilization lemma and is assumed by Markov's theorem; the trace and scalar cancellations are finite algebra."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, §8.10, formula (8.35) and the normalized RT invariant"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "V. G. Turaev, Quantum Invariants of Knots and 3-Manifolds, Chapter I, §§1.5 and 2.7"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/turaev5.pdf"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field and let $\mathcal C$ be a $k$-linear ribbon category with $k$-bilinear tensor product and $\operatorname{End}_{\mathcal C}(\mathbf1)=k$. Let $X$ be absolutely simple, so its twist is $\theta_X=\lambda\operatorname{id}_X$ for a unique $\lambda\in k^\times$. For $n\ge1$ and $\beta\in B_n$, let $t_n(\beta)$ be the value of the blackboard-framed $X$-colored closure and let $w(\beta)$ be the exponent sum, with positive Artin generator and positive stabilization conventions fixed as in the supplied ribbon-trace formulas. Then
$$J_X(\widehat\beta):=\lambda^{-w(\beta)}t_n(\beta)$$
depends only on the oriented unframed link type of $\widehat\beta$ when every component has color $X$. This statement makes no normalization by the categorical dimension.

## Statement references

[[def-colored-framed-knot-evaluation-from-ribbon-category|Framed colored-link value]]

[[def-ribbon-evaluation-of-an-x-colored-closed-braid|Ribbon trace on a closed braid]]

[[lem-ribbon-trace-equals-the-framed-closure-evaluation|Equality of the trace and framed-closure value]]

[[lem-scalar-twist-controls-the-two-markov-stabilizations|Exact stabilization scalars and curl convention]]

[[def-absolutely-simple-object|Absolute simplicity and scalar automorphisms]]

[[def-exponent-sum-and-writhe-of-a-braid|Exponent sum and its Markov changes]]

[[thm-markovs-closed-braid-equivalence-theorem|Markov classification of oriented braid closures]]

[Etingof, Gelaki, Nikshych, and Ostrik, *Tensor Categories*, §8.10, formula (8.35)](https://math.mit.edu/~etingof/egnobookfinal.pdf)

[Turaev, *Quantum Invariants of Knots and 3-Manifolds*, Chapter I, §§1.5 and 2.7](https://www.maths.ed.ac.uk/~v1ranick/papers/turaev5.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice; the $k$-linear ribbon category and absolutely simple color in the Statement; a braid $\beta\in B_n$ with $n\ge1$.

[F1] The algebraic ribbon trace is $\operatorname{Tr}_L(j_{X^{\otimes n}}\rho_n(\beta))$, where $j=u\theta$ is a natural pivotal comparison ([[def-ribbon-evaluation-of-an-x-colored-closed-braid]]). Under countable choice, this equals the blackboard-framed closure value $t_n(\beta)$ used in the Statement ([[lem-ribbon-trace-equals-the-framed-closure-evaluation]]).

[F2] Categorical trace is cyclic: $\operatorname{Tr}_L(ac)=\operatorname{Tr}_L(c^{\vee\vee}a)$ for the stated typed morphisms ([[thm-basic-properties-of-the-categorical-trace]]).

[F3] The two stabilization values are $t_{n+1}(\iota_n(\beta)\sigma_n^{\pm1})=\lambda^{\pm1}t_n(\beta)$ when positive stabilization closes to the positive curl ([[lem-scalar-twist-controls-the-two-markov-stabilizations]]).

[F4] The exponent sum is unchanged by conjugation and satisfies $w(\iota_n(\beta)\sigma_n^{\pm1})=w(\beta)\pm1$ ([[def-exponent-sum-and-writhe-of-a-braid]]).

[F5] Two braids have equivalent oriented closures exactly when they are related by conjugations, stabilizations, and destabilizations ([[thm-markovs-closed-braid-equivalence-theorem]]).

[F6] The Axiom of Choice implies countable choice ([[thm-choice-implies-dependent-implies-countable-choice]]).

[A1] Absolute simplicity means $\operatorname{End}_{\mathcal C}(X)=k\operatorname{id}_X$, so each automorphism of $X$ is a unique nonzero scalar multiple of the identity ([[def-absolutely-simple-object]]).

[A2] The Axiom of Choice is the assumption that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** The hypotheses in the Statement and [F1]–[F6], [A1]–[A2].

1.1 By [F6], the assumed Axiom of Choice supplies countable choice, so [F1]'s closure comparison identifies every $t_n$ in the Statement with the algebraic trace. Fix $\gamma\in B_n$ and put $j=j_{X^{\otimes n}}$, $\rho=\rho_n$. Apply [F2] with $a=j\rho(\gamma)\rho(\beta)$ and $c=\rho(\gamma)^{-1}$ to obtain $t_n(\gamma\beta\gamma^{-1})=\operatorname{Tr}_L((\rho(\gamma)^{-1})^{\vee\vee}j\rho(\gamma)\rho(\beta))$. Naturality of $j$ gives $(\rho(\gamma)^{-1})^{\vee\vee}j=j\rho(\gamma)^{-1}$, so this is $t_n(\beta)$. The exponent sum is unchanged by [F4], hence $J_X$ is invariant under conjugation. [F1, F2, F4, F6, given, algebra]

2.1 For a positive or negative stabilization, [F3] multiplies $t_n$ by $\lambda^{\pm1}$ and [F4] changes $w$ by $\pm1$. Hence $\lambda^{-w(\iota_n\beta\sigma_n^{\pm1})}t_{n+1}(\iota_n\beta\sigma_n^{\pm1})=\lambda^{-w(\beta)\mp1}\lambda^{\pm1}t_n(\beta)=\lambda^{-w(\beta)}t_n(\beta)$. The scalar is available because [A1] makes the invertible twist a unique $\lambda\in k^\times$; the positive sign is fixed by [F3]. Thus $J_X$ is invariant under both stabilizations and their inverses. [F3, F4, A1, step 1.1, algebra]

3.1 By [F5], any two braids with equivalent oriented unframed closures are connected by finitely many conjugations, stabilizations, and destabilizations. Steps 1.1 and 2.1 preserve $J_X$ under each such move, so the corrected value depends only on the oriented unframed link type. The Axiom of Choice [A2] is used in [F5] and supplies the countable-choice hypothesis of [F3] by [F6]; no choice is used in the finite trace or scalar calculations. [F3, F4, F5, F6, A2, step 1.1, step 2.1, given] ∎
