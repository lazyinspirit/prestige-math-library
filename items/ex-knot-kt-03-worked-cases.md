---
id: ex-knot-kt-03-worked-cases
kind: example
title: "Hopf and Whitehead link linking-number computations"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps: [def-oriented-crossing-sign-writhe-and-blackboard-framing,
       alg-oriented-linking-number-from-diagram,
       thm-oriented-linking-number-scan-terminates-and-is-correct,
       thm-linking-number-is-invariant-and-writhe-is-not,
       def-geometric-braid-with-setwise-endpoints,
       prop-stacking-of-geometric-braids-is-well-defined,
       def-elementary-geometric-half-twist,
       def-closure-of-a-geometric-braid,
       def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Eric W. Weisstein, Whitehead Link, Wolfram MathWorld"
      url: "https://mathworld.wolfram.com/WhiteheadLink.html"
      locator: "Entry's braid-word presentations and statement of linking number zero"
    - title: "Danny Calegari, Introduction to Knot Theory, University of Chicago course notes (2025), §3.3, pp. 26–29"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "§3.3, the crossing-sum convention, pp. 26–27"
    - title: "Mohamed Elhamdadi, Mustafa Hajij, and Kyle Istvan, Framed Knots, arXiv:1910.10257v6 (2020), §3, pp. 3–9"
      url: "https://arxiv.org/pdf/1910.10257v6"
      locator: "§3, Definition 3.1, pp. 3–4"
---

## Example

Assume $\mathrm{AC}_\omega$. Read a braid word in the standard geometric braid
group product convention: the rightmost factor is traversed first from bottom
to top, and the closure joins corresponding top and bottom endpoints. A
positive Artin half twist has crossing sign $+1$.

The closure of the positive two-strand braid $\sigma_1^2$ is the positive Hopf
link. Its endpoint permutation is the identity, so it has two components, and
both crossings are mixed positive crossings. Hence its linking number is
$(1+1)/2=1$.

The standard Whitehead link is the closure of the three-strand braid
$$\beta=\sigma_1\sigma_2^{-1}\sigma_1\sigma_2^{-2}.$$
Its endpoint permutation is $(1\ 3)$, so its components are the cycles
$\{1,3\}$ and $\{2\}$. In bottom-to-top traversal order the crossing letters
are $\sigma_2^{-1},\sigma_2^{-1},\sigma_1,\sigma_2^{-1},\sigma_1$. The first,
second, third, and fifth crossings are mixed, with signs $-1,-1,+1,+1$; the
fourth is a self-crossing. The mixed sum is $0$, so the linking number is $0$.
The five-crossing braid diagram is a representative, not a claim that the
displayed braid word is the unique presentation.

## Example references

[Eric W. Weisstein, “Whitehead Link,” Wolfram MathWorld](https://mathworld.wolfram.com/WhiteheadLink.html)

[[def-elementary-geometric-half-twist|Positive Artin generator convention]]

[[def-closure-of-a-geometric-braid|Braid closure and cycle components]]

[[def-countable-choice|Countable-choice hypothesis for the integer output]]

## Diagram

The two-strand braid in the figure is read upward. At each positive generator
crossing, the left-to-right strand passes under and is interrupted by the
grey-white gap; the right-to-left strand passes over. Between the crossings,
label $2$ is on the left and label $1$ on the right. The outside arcs close the
top endpoints to the matching bottom endpoints.

```tikz
\begin{tikzpicture}[scale=0.8,>=stealth]
  % Bottom tails.
  \draw[->] (-0.55,0) -- (-0.55,0.45);
  \draw[->] (0.55,0) -- (0.55,0.45);
  % First positive generator: the left-to-right strand passes under.
  \draw[->] (-0.55,0.45) -- (-0.10,0.90);
  \draw (0.10,1.10) -- (0.55,1.55);
  % The right-to-left strand passes over and remains continuous.
  \draw[->] (0.55,0.45) -- (-0.55,1.55);
  % The strands remain at their exchanged positions between crossings.
  \draw[->] (-0.55,1.55) -- (-0.55,2.45);
  \draw[->] (0.55,1.55) -- (0.55,2.45);
  \node[left] at (-0.55,2.0) {$2$};
  \node[right] at (0.55,2.0) {$1$};
  % Second positive generator.
  \draw[->] (-0.55,2.45) -- (-0.10,2.90);
  \draw (0.10,3.10) -- (0.55,3.55);
  \draw[->] (0.55,2.45) -- (-0.55,3.55);
  % Top tails.
  \draw[->] (-0.55,3.55) -- (-0.55,4);
  \draw[->] (0.55,3.55) -- (0.55,4);
  % Standard closure arcs, oriented back down to the matching bottom points.
  \draw[->] (-0.55,4) .. controls (-1.5,4) and (-1.5,0) .. (-0.55,0);
  \draw[->] (0.55,4) .. controls (1.5,4) and (1.5,0) .. (0.55,0);
  \node at (0,4.25) {$\sigma_1^2$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the two displayed braid words, and the
crossing-sign convention of this pair.

[A1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] The endpoint permutation of a geometric braid records the endpoint of each labelled strand, and the components of its closure are exactly the cycles of that permutation ([[def-geometric-braid-with-setwise-endpoints]], [[def-closure-of-a-geometric-braid]]).

[F2] Stacking induces the braid-group product, with endpoint permutations multiplying in the same product order ([[prop-stacking-of-geometric-braids-is-well-defined]]).

[F3] The positive geometric half twist is the generator $\sigma_i$ and is calibrated to crossing sign $+1$; its inverse has the opposite crossing sign ([[def-elementary-geometric-half-twist]], [[def-oriented-crossing-sign-writhe-and-blackboard-framing]]).

[F4] For an accepted two-component diagram, the algorithm returns half the signed sum of its mixed crossings ([[alg-oriented-linking-number-from-diagram]], [[thm-oriented-linking-number-scan-terminates-and-is-correct]]).

## Verification

1.1 For the two-strand braid, $\pi(\sigma_1^2)=(1\ 2)^2=\mathrm{id}$ by [F1] and [F2]. Its two closure cycles are therefore the two singleton components, and each of the two positive generator crossings is mixed. By [F3] their signs are $+1,+1$; [F4] gives linking number $1$. [A1, F1, F2, F3, F4, algebra]

1.2 For the Whitehead word, each squared generator contributes the identity endpoint permutation, leaving $\pi(\beta)=(1\ 3)$; hence [F1] gives component cycles $\{1,3\}$ and $\{2\}$. Traversing from bottom to top, the first two $\sigma_2^{-1}$ crossings exchange labels $2$ and $3$, so they are mixed; the following $\sigma_1$ exchanges $1$ and $2$, so it is mixed; the next $\sigma_2^{-1}$ exchanges $1$ and $3$, so it is a self-crossing; the final $\sigma_1$ exchanges $2$ and $3$, so it is mixed. [F1, F2, algebra]

2.1 By [F3], the mixed signs of the Whitehead word are $-1,-1,+1,+1$ in that traversal, whose sum is $0$. The algorithm in [F4] therefore returns $0/2=0$, as claimed. These are finite crossing checks; the general invariance proof is separate. [A1, F3, F4, step 1.2, algebra] ∎


