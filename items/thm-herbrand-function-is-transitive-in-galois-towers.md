---
id: thm-herbrand-function-is-transitive-in-galois-towers
kind: theorem
title: "The Herbrand function is transitive in a Galois tower"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-herbrand-function-and-upper-ramification-numbering
  - thm-herbrand-lower-numbering-quotient-formula
  - thm-local-inertia-fixed-field-is-maximal-unramified-extension
  - def-lower-ramification-groups-of-a-local-galois-extension
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. Neukirch, Algebraic Number Theory, Chapter II, Section 10, Proposition 10.8"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
    - title: "J. S. Milne, Algebraic Number Theory, version 3.08, Chapter VII, Section 'Ramification groups'"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
verification: {}
---

## Statement

Assume Countable Choice. Let $L/K$ be a finite Galois extension of
nonarchimedean local fields with finite residue fields, let
$H\triangleleft G=\operatorname{Gal}(L/K)$, and put $M=L^H$. Then
$$\varphi_{L/K}=\varphi_{M/K}\circ\varphi_{L/M}$$
on the common domain $[-1,\infty)$.

## Statement references

[[def-herbrand-function-and-upper-ramification-numbering]]

[[thm-herbrand-lower-numbering-quotient-formula]]

[J. Neukirch, *Algebraic Number Theory*, Chapter II, Section 10, Proposition 10.8](https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf)

[J. S. Milne, *Algebraic Number Theory*, Chapter VII, “Ramification groups”](https://www.jmilne.org/math/CourseNotes/ANT.pdf)

## Facts & Assumptions

**Given:** Countable Choice, the finite Galois extension $L/K$, a normal subgroup $H$, and $M=L^H$.

[A1] Countable Choice is required by the inertia and lower-numbering quotient results. ([[def-countable-choice]])

[F1] [[def-herbrand-function-and-upper-ramification-numbering]]: For a finite Galois local extension, $\varphi$ is continuous, strictly increasing, is the identity on $[-1,0]$, and on $[0,\infty)$ has slope $|G_t|/|G_0|$ away from integer breakpoints.

[F2] [[thm-herbrand-lower-numbering-quotient-formula]]: For every $s\ge-1$, the image of $G_s$ in $G/H$ is the lower group at index $\varphi_{L/M}(s)$.

[F3] [[def-lower-ramification-groups-of-a-local-galois-extension]]: For real $t\ge0$, the lower groups of $L/M$ equal $H\cap G_t$ under the convention $G_t=G_{\lceil t\rceil}$.

## Proof

**Given:** The data in the Statement, including Countable Choice.

1.1 Fix $u>0$ outside the integer breakpoints of the lower groups of $L/K$ and $L/M$ and outside the preimages under $\varphi_{L/M}$ of the integer breakpoints for $M/K$. Such excluded points form a locally finite set because each lower filtration is eventually trivial and each Herbrand function is strictly increasing and piecewise linear. The quotient formula [F2] at $s=u$ gives $|G_u|/|H_u|=|(G/H)_{\varphi_{L/M}(u)}|$, where $H_u=H\cap G_u$ by [F3]. [A1, F2, F3, given, choose, algebra]

2.1 At these non-breakpoints, differentiating the piecewise-linear functions from [F1] and applying the chain rule gives $(\varphi_{M/K}\circ\varphi_{L/M})'(u) =\frac{|(G/H)_{\varphi_{L/M}(u)}|}{|(G/H)_0|}\,\frac{|H_u|}{|H_0|}.$ At $s=0$, the quotient formula [F2] identifies the image of $G_0$ with $(G/H)_0$ and its kernel with $H_0=H\cap G_0$. Since the groups are finite, $|G_0|=|(G/H)_0||H_0|$. Substitution of these equalities and step 1.1 shows the displayed derivative is $|G_u|/|G_0|=\varphi_{L/K}'(u)$. [A1, F1, F2, F3, step 1.1, algebra]

3.1 Both functions in the Statement are continuous and piecewise linear on $[0,\infty)$, and step 2.1 shows their derivatives agree away from a locally finite set. Their difference is therefore constant on each interval between breakpoints and, by continuity, the same constant across each breakpoint; since both take value $0$ at $u=0$, they agree on $[0,\infty)$. On $[-1,0]$ both are the identity by [F1], so they agree on the whole domain. [A1, F1, step 2.1, given, algebra] ∎
