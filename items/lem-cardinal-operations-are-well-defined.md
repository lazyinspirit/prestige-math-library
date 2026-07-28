---
id: lem-cardinal-operations-are-well-defined
kind: lemma
title: "Disjoint union, cartesian product, function space and power set respect equinumerosity, and for ordinals $\\alpha, \\beta$ the sets $\\alpha \\sqcup \\beta$ and $\\alpha \\times \\beta$ carry explicit well-orders, so their cardinalities exist in ZF"
status: published
origin: session
deps: [lem-cardinality-of-a-well-orderable-set, def-equinumerous, def-injection-surjection-bijection, def-well-order, def-ordinal, lem-ordinal-trichotomy, lem-ordinal-basics, def-cardinal, thm-well-ordering-theorem, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
short: "$\\sqcup$, $\\times$, ${}^{B}A$, $\\mathcal{P}$ respect $\\approx$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Cardinal number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinal_number"
    - title: "T. Jech, Set Theory, 3rd millennium ed., Ch. 3 (Cardinal numbers)"
      url: "https://link.springer.com/book/10.1007/3-540-44761-X"
pipeline_run: null
---

## Statement

For sets $A$ and $B$ write

$$A \sqcup B := (\{0\} \times A) \cup (\{1\} \times B), \qquad {}^{B}A := \{\, h : h \text{ is a function } B \to A \,\},$$

so $A \sqcup B$ is the **disjoint union**, made disjoint by tagging, and
${}^{B}A$ is the set of all functions from $B$ to $A$. Work in ZF. Then:

**(a) Representative independence.** If $A \approx A'$ and $B \approx B'$
([[def-equinumerous]]) then

$$A \sqcup B \approx A' \sqcup B', \qquad A \times B \approx A' \times B', \qquad {}^{B}A \approx {}^{B'}A'.$$

**(b) Power sets.** If $A \approx B$ then $\mathcal{P}(A) \approx \mathcal{P}(B)$.

**(c) Two operations are choice-free.** For ordinals $\alpha$ and $\beta$
([[def-ordinal]]) the sets $\alpha \sqcup \beta$ and $\alpha \times \beta$ carry
**explicitly defined** well-orders ([[def-well-order]]), so each is equinumerous
with an ordinal and each has a cardinality
$\lvert \alpha \sqcup \beta \rvert$, $\lvert \alpha \times \beta \rvert$
in ZF ([[lem-cardinality-of-a-well-orderable-set]]).

**(d) The third is not.** Nothing here well-orders ${}^{\beta}\alpha$, and no
argument on this page does. Assuming the Axiom of Choice
([[def-axiom-of-choice]]) every set is well-orderable
([[thm-well-ordering-theorem]]) and ${}^{\beta}\alpha$ has a cardinality like any
other set; that is where cardinal exponentiation gets its hypothesis.

## Facts & Assumptions

**Given:** Sets $A, A', B, B'$ and ordinals $\alpha, \beta$, in ZF. No choice principle is assumed except where the Axiom of Choice is named.

[L1] A set is well-orderable if and only if it is equinumerous with an ordinal; it then has a least such ordinal $\lvert X \rvert$, which is a cardinal, and equinumerous sets receive the same one ([[lem-cardinality-of-a-well-orderable-set]], [[def-cardinal]]).

[L2] A well-order is a relation that is irreflexive, transitive, trichotomous, and such that every nonempty subset has a least element ([[def-well-order]]).

[L3] Every set of ordinals is well ordered by $\in$, and every nonempty set of ordinals has an $\in$-least element ([[lem-ordinal-trichotomy]]).

[L4] A composition of bijections is a bijection, the inverse of a bijection is a bijection, and a function with a two-sided inverse is a bijection ([[def-injection-surjection-bijection]]).

[L5] $\approx$ means that a bijection exists, and it is reflexive, symmetric and transitive ([[def-equinumerous]]).

[L6] Every element of an ordinal is an ordinal and $\alpha \notin \alpha$ ([[lem-ordinal-basics]], [[def-ordinal]]).

[L7] Assuming the Axiom of Choice, every set carries a well-order ([[def-axiom-of-choice]], [[thm-well-ordering-theorem]]).

## Proof

**Proof technique:** direct.

1.1 Fix bijections $f : A \to A'$ and $g : B \to B'$; these exist by [L5], and everything below is built from them, so nothing is chosen beyond one bijection for each of the two hypotheses. [L5, given]

1.2 The map $\sigma : A \sqcup B \to A' \sqcup B'$ with $\sigma(0,a) = (0, f(a))$ and $\sigma(1,b) = (1, g(b))$ has the two-sided inverse built the same way from $f^{-1}$ and $g^{-1}$, hence is a bijection. [L4, L5]

1.3 The map $\pi : A \times B \to A' \times B'$, $\pi(a,b) = (f(a), g(b))$, has the two-sided inverse $(a',b') \mapsto (f^{-1}(a'), g^{-1}(b'))$, hence is a bijection. [L4, L5]

1.4 The map $\Phi : {}^{B}A \to {}^{B'}A'$, $\Phi(h) = f \circ h \circ g^{-1}$, lands in ${}^{B'}A'$ and has the two-sided inverse $\Psi(h') = f^{-1} \circ h' \circ g$, since $\Psi(\Phi(h)) = f^{-1} \circ f \circ h \circ g^{-1} \circ g = h$ and symmetrically; so it is a bijection and claim (a) holds. [L4, L5]

1.5 Claim (b): if $f : A \to B$ is a bijection then $S \mapsto f[S]$ maps $\mathcal{P}(A)$ to $\mathcal{P}(B)$ with two-sided inverse $T \mapsto f^{-1}[T]$, hence is a bijection. [L4, L5]

1.6 On $\alpha \sqcup \beta$ define $(i,\xi) \prec (j,\eta)$ to hold when $i \in j$, or $i = j$ and $\xi \in \eta$; this is irreflexive, transitive and trichotomous by [L6] and [L3], and a nonempty $S \subseteq \alpha \sqcup \beta$ has a $\prec$-least element, namely $(0,\xi_0)$ with $\xi_0$ the $\in$-least $\xi$ having $(0,\xi) \in S$ when such a $\xi$ exists, and $(1,\eta_0)$ with $\eta_0$ the $\in$-least such $\eta$ otherwise. [L2, L3, L6]

1.7 On $\alpha \times \beta$ define $(\xi,\eta) \lhd (\xi',\eta')$ to hold when $\xi \in \xi'$, or $\xi = \xi'$ and $\eta \in \eta'$; the same three properties hold by [L3] and [L6], and a nonempty $S \subseteq \alpha \times \beta$ has $\lhd$-least element $(\xi_0, \eta_0)$ where $\xi_0$ is the $\in$-least first coordinate occurring in $S$ and $\eta_0$ is the $\in$-least $\eta$ with $(\xi_0,\eta) \in S$; both are least elements of nonempty sets of ordinals, so neither is chosen. [L2, L3, L6]

1.8 Assuming the Axiom of Choice, ${}^{\beta}\alpha$ carries a well-order by [L7] and therefore has a cardinality by [L1]; this is claim (d), and no step above supplies such a well-order in ZF. [L1, L7]

2.1 By [L1] applied to the well-orders of steps 1.6 and 1.7, each of $\alpha \sqcup \beta$ and $\alpha \times \beta$ is equinumerous with an ordinal and so has a cardinality in ZF, which is claim (c). [step 1.6, step 1.7, L1]

3.1 Together: $\sqcup$, $\times$, the function space and the power set all respect $\approx$, the first two have ZF cardinalities on ordinal arguments, and the function space is given one by the Axiom of Choice. [step 1.4, step 1.5, step 1.8, step 2.1] ∎

## Remarks

**Why the disjoint union is tagged.** $A \cup B$ is not an invariant of $A \approx A'$ and $B \approx B'$: taking $A = A' = B = \{0\}$ and $B' = \{1\}$ gives $A \cup B = \{0\}$ and $A' \cup B' = \{0,1\}$, which are not equinumerous. Tagging with $0$ and $1$ makes the two blocks disjoint whatever the sets were, and claim (a) is then true as stated. This is why the operation defined on this page is $\sqcup$ and never $\cup$.

**The lexicographic order is not the order used for Hessenberg's theorem.** Step 1.7 well-orders $\alpha \times \beta$, which is everything claim (c) asks for. Its order type is in general much larger than $\alpha$: the lexicographic order on $\omega \times \omega$ has order type $\omega \cdot \omega$. The proof that $\lvert \kappa \times \kappa \rvert = \kappa$ for infinite $\kappa$ uses a different, cleverer well-order and is [[thm-hessenberg]].

**Where the asymmetry between $\otimes$ and exponentiation comes from.** A product of two well-ordered sets is well-ordered by an order written down from the two given ones. A set of *functions* between well-ordered sets has no such canonical order: the obvious candidates need a choice at each argument. That is not a defect of this proof but the reason cardinal exponentiation is stated with the Axiom of Choice throughout this page.
