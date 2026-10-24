---
id: lem-scalar-twist-controls-the-two-markov-stabilizations
kind: lemma
title: "The scalar twist controls the two Markov stabilizations"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 7
deps: [def-ribbon-evaluation-of-an-x-colored-closed-braid, lem-ribbon-trace-equals-the-framed-closure-evaluation, def-absolutely-simple-object, def-markov-conjugation-and-stabilization-moves, def-twist-and-ribbon-structure, thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "V. G. Turaev, Quantum Invariants of Knots and 3-Manifolds (de Gruyter Studies in Mathematics 18, 1994)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/turaev5.pdf"
      locator: "Chapter I §1.5--1.6 and Figures 2.3, 2.6 (twists, curls and the graphical calculus), printed pp. 21--26 and 34--38; relations (3.2.f) and (3.2.h), printed pp. 50--51"
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories (AMS Mathematical Surveys and Monographs 205), author's final version"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§8.10 Definition 8.10.1 and the ribbon graphical calculus, printed pp. 216--218"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $k$ be a field and $\mathcal C$ a
$k$-linear ribbon category, with $k$-bilinear tensor product and
$\operatorname{End}_{\mathcal C}(\mathbf 1)=k$, let $X\in\mathcal C$ be
absolutely simple ([[def-absolutely-simple-object]]) so that the twist acts as
$\theta_X=\lambda\operatorname{id}_X$ for a unique $\lambda\in k^{\times}$
([[def-twist-and-ribbon-structure]]), and let $t$ be the ribbon evaluation of
[[def-ribbon-evaluation-of-an-x-colored-closed-braid]]. Fix the convention of
[[lem-ribbon-trace-equals-the-framed-closure-evaluation]] that a positive
stabilization closes to the positive curl with
$F_X(\varphi_X^{+})=\theta_X$. Then for every $n\ge1$ and $\beta\in B_n$, with
$\iota_n$ the standard inclusion of
[[def-markov-conjugation-and-stabilization-moves]],

$$t_{n+1}(\iota_n(\beta)\,\sigma_n)=\lambda\,t_n(\beta),\qquad t_{n+1}(\iota_n(\beta)\,\sigma_n^{-1})=\lambda^{-1}\,t_n(\beta).$$

With the opposite drawing convention, in which the positive stabilization
closes to the inverse curl, the two scalars are exchanged; the pair of formulas
must always be fixed by the local curl picture. No semisimplicity or dimension
hypothesis is used beyond absolute simplicity of $X$ and
$\operatorname{End}(\mathbf 1)=k$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; a $k$-linear ribbon category $\mathcal C$ with $k$-bilinear tensor product and $\operatorname{End}(\mathbf 1)=k$, an absolutely simple object $X$ with $\theta_X=\lambda\operatorname{id}_X$, $\lambda\in k^{\times}$, an integer $n\ge1$ and a braid $\beta\in B_n$.

[L1] Under $\mathrm{AC}_\omega$ ([[def-countable-choice]]) the ribbon evaluation satisfies $t_n(\beta)=F_X(\widehat\beta^{\mathrm{fr}})$ for the blackboard-framed closure, and the closure of $\iota_n(\beta)\sigma_n^{\pm1}$ is the closure of $\beta$ with one full twist $\varphi_X^{\pm1}$ inserted on a band, evaluated to $\theta_X^{\pm1}$ by the functor ([[lem-ribbon-trace-equals-the-framed-closure-evaluation]], [[thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor]]).

[L2] The positive stabilization of [[def-markov-conjugation-and-stabilization-moves]] is $\beta\mapsto\iota_n(\beta)\sigma_n$ and the negative stabilization is $\beta\mapsto\iota_n(\beta)\sigma_n^{-1}$.

[L3] An absolutely simple object $X$ has $\operatorname{End}(X)=k\operatorname{id}_X$, so every automorphism of $X$, in particular $\theta_X$, is a scalar $\lambda\operatorname{id}_X$ with $\lambda\in k^{\times}$ ([[def-absolutely-simple-object]]).

[L4] The twist is a natural automorphism of the identity and the ribbon structure satisfies the dual-compatibility ([[def-twist-and-ribbon-structure]]).

## Proof

**Proof technique:** direct.

1.1 **Inserting the curl.** By [L1] the value $t_{n+1}(\iota_n(\beta)\sigma_n^{\pm1})$ equals $F_X$ of the blackboard-framed closure of $\beta$ with one full twist generator $\varphi_X^{\pm1}$ inserted in a band, the sign being fixed by the declared convention that positive stabilization corresponds to the positive curl. [L1, L2, given, construct]

1.2 **Sliding the curl to the seam.** In the framed tangle calculus the inserted full twist can be slid along its band without changing the morphism of the framed oriented tangle category: the curl-slide relations move a small curl past crossings and past the cup and cap ends of a band, and the twist is natural [L4], so the framed closure of $\beta$ with the curl inserted anywhere on a band is the same framed tangle as the closure of $\beta$ with the twist inserted at the closure seam of that band. Moving the curl to the seam and evaluating, the twist acts on the last tensor factor $X$ of $X^{\otimes n}$ before the closure pairing is taken, so $$t_{n+1}(\iota_n(\beta)\sigma_n^{\pm1})=\operatorname{Tr}_L\!\left(j_{X^{\otimes n}}\bigl(\rho_n(\beta)\circ(1^{\otimes(n-1)}\otimes\theta_X^{\pm1})\bigr)\right),$$ where the insertion is the twist on the last tensor factor; this is the same formula obtained by applying the closure-comparison lemma to the modified diagram. [L1, L4, construct]

2.1 **Evaluating the scalar.** By [L3] the twist is $\theta_X^{\pm1}=\lambda^{\pm1}\operatorname{id}_X$, so the insertion in step 1.2 is multiplication by the scalar $\lambda^{\pm1}$ and can be taken out of the trace: $\operatorname{Tr}_L(j\rho_n(\beta)\lambda^{\pm1})=\lambda^{\pm1}\operatorname{Tr}_L(j\rho_n(\beta))=\lambda^{\pm1}t_n(\beta)$, because tensor product and composition are $k$-bilinear: in the defining evaluation--coevaluation composite a scalar multiple of the input becomes the same scalar multiple of the composite. The identification $\operatorname{End}(\mathbf 1)=k$ then identifies that composite with a scalar. This gives the two displayed formulas. [L3, step 1.2, algebra]

2.2 **Convention warning.** The identification of positive stabilization with the positive curl is a drawing convention: with the opposite convention the inserted curl in step 1.1 is $\varphi_X^{\mp1}$, so the two scalars in the display are exchanged. The pair of formulas is therefore always fixed against the local curl picture, as stated. [L1, step 1.1, given]

3.1 **Conclusion.** Steps 1.1--2.1 prove $t_{n+1}(\iota_n(\beta)\sigma_n^{\pm1})=\lambda^{\pm1}t_n(\beta)$, and step 2.2 records the convention dependence. No semisimplicity or dimension hypothesis is used beyond $\operatorname{End}(\mathbf 1)=k$ and absolute simplicity of $X$; the only choice principle used is $\mathrm{AC}_\omega$, consumed exactly through the closure comparison of [L1], which constructs the functor $F_X$. [step 1.1, step 1.2, step 2.1, step 2.2] ∎ 