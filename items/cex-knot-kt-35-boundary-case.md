---
id: cex-knot-kt-35-boundary-case
kind: counterexample
title: The framed degree-one weight system does not pass through 1T
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-countable-choice
  - def-framed-chord-diagram-and-four-term-relations
  - thm-vassiliev-invariant-induces-weight-system
justified_by: []
dependency_level: 9
sources:
  references:
    - title: The Fundamental Theorem of Vassiliev Invariants, §1.1
      url: https://arxiv.org/pdf/q-alg/9702009v1
    - title: Introduction to Vassiliev Knot Invariants, §§3.4 and 4.1–4.2
      url: https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf
---

## Statement refuted

Assume countable choice. The framed self-linking number of a framed oriented knot is the linking number of the knot with a sufficiently small push-off along its framing. Let $D_1$ be the degree-one chord diagram consisting of an oriented circle with one chord. The framed self-linking invariant has a degree-one weight system $w$ with $w(D_1)=2$. Since $D_1$ is isolated, the unframed 1T quotient sets it to zero. Therefore $w$ does not factor through the unframed 4T+1T quotient. This counterexample distinguishes the framed and unframed diagram targets and makes no claim about separating knot types.

The diagram shows the isolated one-chord generator; the circle orientation fixes its cyclic skeleton and no proof relies on the picture.

```tikz
\begin{tikzpicture}[scale=0.9,thick]
  \draw (0,0) circle (1);
  \draw[->] (0.05,0.99) .. controls (0.28,0.96) and (0.47,0.87) .. (0.60,0.80);
  \draw[very thick] ({cos(55)},{sin(55)}) -- ({cos(235)},{sin(235)});
  \fill ({cos(55)},{sin(55)}) circle (1.5pt);
  \fill ({cos(235)},{sin(235)}) circle (1.5pt);
  \node at (0,-1.35) {$D_1$};
\end{tikzpicture}
```

## Statement references

[[def-framed-chord-diagram-and-four-term-relations|Framed 4T and unframed 4T+1T quotients]]

[[thm-vassiliev-invariant-induces-weight-system|Framed self-linking symbol on one chord]]

[Bar-Natan and Stoimenow, §1.1, PDF pp. 3–5](https://arxiv.org/pdf/q-alg/9702009v1)

[Chmutov, Duzhin, and Mostovoy, §§3.4 and 4.1–4.2, printed pp. 70–75 and 89–94](https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf)

## Facts & Assumptions

**Given:** Countable choice, the degree-one framed chord module, and its unframed quotient.

[A1] [[def-countable-choice]]: countable choice is the hypothesis used for the framed normal-bundle branch.

[F1] [[def-framed-chord-diagram-and-four-term-relations]]: the framed module imposes 4T; the unframed module additionally sets every isolated chord to zero.

[F2] [[thm-vassiliev-invariant-induces-weight-system]]: under countable choice, framed self-linking has type at most one and its degree-one derivative is a framed weight system taking value $2$ on the one-chord diagram.

## Counterexample

**Given:** As above.

1.1 The diagram $D_1$ has one chord and no other chords, so that chord is isolated. In degree one there is no 4T generator, since 4T has two chords. Thus [F2] gives a valid framed weight system with $w(D_1)=2$. [A1, F1, F2, given, algebra]

2.1 Every functional on the unframed quotient must vanish on $D_1$, because [F1] imposes $D_1=0$. If $w$ factored through that quotient, it would satisfy $w(D_1)=0$, contrary to $w(D_1)=2\ne0$ in $\mathbb Z$. Hence the framed weight system does not descend through 1T. [F1, F2, step 1.1, algebra] ∎
