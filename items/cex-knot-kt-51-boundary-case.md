---
id: cex-knot-kt-51-boundary-case
kind: counterexample
title: "The unknot defeats a universal coefficient-bound extension"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-crossing-number-of-link
  - def-jones-vassiliev-coefficient-vectors
  - def-kauffman-bracket-smoothing-and-loop-value
  - def-singular-knot-and-vassiliev-derivative
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is used through the Jones-invariance supplier; AC_omega is the declared crossing-number hypothesis. The unknot expansion and empty coefficient range are choice-free."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Avishy Carmi and Eliahu Cohen, On trivial Jones–Vassiliev polynomials, arXiv:2606.22410v1, submitted 2026-06-21"
      url: "https://arxiv.org/pdf/2606.22410v1"
    - title: "Justin Roberts, Knots Knotes, §4.4.8"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement refuted

Assume full AC for the Jones invariant and $\mathrm{AC}_\omega$ for $c(K)$.
A classical knot is a smooth embedding $S^1\hookrightarrow S^3$ considered
up to ambient isotopy. A regular diagram is a generic plane projection with
only transverse double points, each marked with over/under information. The
false universal extension is: for every classical knot $K$, including the
unknot, there is an integer $q$ with $2\le q\le3c(K)$ and
$f_q(K)\ne(0,0)^{\mathsf T}$. Here $V_K(x)$ is the normalized library Jones
polynomial with $V_U(x)=1$, $f_q(K)=(a_q(K),b_q(K))^{\mathsf T}$ is defined by
the unique expansion $V_K(x)=\sum_{q\ge0}(a_q(K)+b_q(K)x)(x-x^{-1})^q$, and
$c(K)$ is the least crossing number of a regular diagram of $K$.

The boundary input is the unknot $U$, represented by the crossing-free circle:

```tikz
\begin{tikzpicture}[scale=0.9,line cap=round]
  \draw[thick] (0,0) circle (0.55);
  \node at (0,-0.9) {$U$};
\end{tikzpicture}
```

## Statement references

[[def-jones-vassiliev-coefficient-vectors|Jones–Vassiliev coefficient vectors]]

[[def-crossing-number-of-link|Crossing number]]

[Carmi and Cohen, *On trivial Jones–Vassiliev polynomials*, Theorem 6.8](https://arxiv.org/pdf/2606.22410v1)

## Facts & Assumptions

**Given:** Full AC, $\mathrm{AC}_\omega$, and the unknot $U$ with its one-component crossing-free diagram.

[F1] The library Jones polynomial has $V_U(x)=1$, and the coefficient vector is obtained from the unique finite expansion in powers of $p=x-x^{-1}$ ([[def-jones-vassiliev-coefficient-vectors]]).

[F2] Under $\mathrm{AC}_\omega$, $c(K)$ is the least element of the set of crossing counts of regular diagrams representing $K$ ([[def-crossing-number-of-link]]).

[A1] Full AC is the family-choice assertion ([[def-axiom-of-choice]]).

[A2] $\mathrm{AC}_\omega$ selects an element from each countable family of nonempty sets ([[def-countable-choice]]).

## Counterexample

1.1 Under [A1], $V_U(x)=1$ by [F1]. Its unique coefficient expansion is $a_0(U)=1$, $b_0(U)=0$, and $a_q(U)=b_q(U)=0$ for every $q\ge1$. Thus $f_q(U)=(0,0)^{\mathsf T}$ for every positive order. [given, A1, F1, construct, algebra]

1.2 The displayed diagram has zero crossings, so under [A2] the set in [F2] contains $0$; all crossing counts are nonnegative. Hence $c(U)=0$, and there is no integer $q$ satisfying $2\le q\le3c(U)=0$. [given, A2, F2, algebra]

2.1 The proposed universal statement includes $U$, but steps 1.1 and 1.2 show that no required nonzero vector or admissible order exists for it. Therefore the statement is false. [given, step 1.1, step 1.2] ∎

## Remarks

The source's actual coefficient claim assumes that $K$ is nontrivial, so this
counterexample refutes only the broader universal extension. The presence or
absence of DOI or journal metadata is bibliographic information; by itself it
proves neither the source theorem nor its negation.

## Remarks references

[Carmi and Cohen, *On trivial Jones–Vassiliev polynomials*, Theorem 6.8](https://arxiv.org/pdf/2606.22410v1)
