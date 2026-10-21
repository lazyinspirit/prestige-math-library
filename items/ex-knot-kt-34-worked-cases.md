---
id: ex-knot-kt-34-worked-cases
kind: example
title: The degree-one derivative of linking number
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-singular-knot-and-vassiliev-derivative
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - alg-oriented-linking-number-from-diagram
  - thm-oriented-linking-number-scan-terminates-and-is-correct
  - thm-linking-number-is-invariant-and-writhe-is-not
  - def-countable-choice
justified_by: []
dependency_level: 8
sources:
  references:
    - title: "The Fundamental Theorem of Vassiliev Invariants"
      url: "https://arxiv.org/pdf/q-alg/9702009v1"
    - title: "Introduction to Vassiliev Knot Invariants"
      url: "https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf"
---

## Example

Assume $\mathrm{AC}_\omega$. For an oriented two-component link $L=L_1\cup L_2$, let $\operatorname{lk}(L_1,L_2)$ be one half the sum of the signs of all crossings between distinct components, using $\operatorname{sgn}\det(v_{\mathrm{over}},v_{\mathrm{under}})$ in the oriented projection plane with positive viewing normal. Extend the singular finite-difference formula to links by resolving marked crossings independently. At one marked mixed crossing, the positive-minus-negative derivative of $\operatorname{lk}$ is $+1$; reversing the order of those two resolutions gives $-1$. A marked self-crossing has derivative $0$. At any two distinct marked crossings, mixed or self, the second derivative is $0$, so linking number is a type-at-most-one invariant of two-component links and, by the nonzero first derivative, has exact type one. The total pairwise linking number of a one-component knot is $0$, because the defining sum over distinct component pairs is empty.

## Example references

[Bar-Natan and Stoimenow, §1.1, pp. 3–5](https://arxiv.org/pdf/q-alg/9702009v1)

[Chmutov, Duzhin, and Mostovoy, §§2.2.1 and 3.2.2, pp. 33–34 and 86](https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf)

## Facts & Assumptions

**Given:** The crossing-sign convention and the two-component oriented-link linking-number formula in the Example statement. The topological invariance of this quantity uses the separate $\mathrm{AC}_\omega$ supplier branch.

[F1] [[def-singular-knot-and-vassiliev-derivative]]: link finite differences are the alternating sums over independent marked-crossing resolutions.

[F2] [[def-oriented-crossing-sign-writhe-and-blackboard-framing]]: a crossing sign is $\operatorname{sgn}\det(v_{\mathrm{over}},v_{\mathrm{under}})$; a positive crossing has sign $+1$ and a negative crossing has sign $-1$.

[F3] [[alg-oriented-linking-number-from-diagram]]: on a two-component diagram the linking-number algorithm returns one half of the signed sum of mixed crossings.

[F4] [[thm-oriented-linking-number-scan-terminates-and-is-correct]]: under $\mathrm{AC}_\omega$, the finite diagram scan terminates and returns the integer linking number.

[F5] [[thm-linking-number-is-invariant-and-writhe-is-not]]: under $\mathrm{AC}_\omega$, the algorithmic linking number is unchanged by oriented Reidemeister moves and hence is invariant under ambient isotopy.

[A1] [[def-countable-choice]]: $\mathrm{AC}_\omega$ asserts that every sequence of nonempty sets has a choice function; only the topological supplier chain [F4]–[F5] uses it.

## Verification

1.1 Let $C$ be half the signed sum of all mixed crossings except the marked one. Under [A1], [F4] identifies the diagram half-sum with the integer linking number and [F5] makes it an ambient-isotopy invariant. By [F2] and [F3], the positive and negative resolutions contribute respectively $+\tfrac12$ and $-\tfrac12$ to this linking number, so $\operatorname{lk}(L_1,L_2)_+-\operatorname{lk}(L_1,L_2)_-=(C+\tfrac12)-(C-\tfrac12)=1$. This is the stated positive-minus-negative derivative under [F1]; reversing that subtraction changes its sign. [given, A1, F1, F2, F3, F4, F5, algebra]

1.2 A knot has one component and therefore no unordered pair of distinct components; the total pairwise linking sum contains no terms and equals $0$. [given, algebra]

2.1 If both marked crossings are mixed, write their resolution signs as $\epsilon_1,\epsilon_2\in\{+1,-1\}$ and absorb every other mixed crossing into $C$. By [F2]–[F4], $\operatorname{lk}(L_{\epsilon_1,\epsilon_2})=C+\tfrac12(\epsilon_1+\epsilon_2)$. The alternating second difference is zero: the constant has coefficient $1-1-1+1=0$, and each term linear in one $\epsilon_i$ cancels when the other sign is summed. If either marked crossing is a self-crossing, the link formula [F3] is independent of that resolution, so the alternating sum over its two choices cancels term by term. Thus $D_2=0$ for every pair of marked crossings by [F1]. [given, A1, F1, F2, F3, F4, step 1.1, algebra] ∎
