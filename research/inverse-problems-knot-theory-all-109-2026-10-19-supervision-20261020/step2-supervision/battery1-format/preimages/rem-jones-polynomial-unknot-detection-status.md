---
id: rem-jones-polynomial-unknot-detection-status
kind: remark
title: "Jones polynomial unknot-detection status"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 10
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-crossing-number-of-link
  - def-enhanced-a-polynomial
  - def-framed-chord-diagram-and-four-term-relations
  - def-jones-vassiliev-coefficient-vectors
  - def-kauffman-bracket-smoothing-and-loop-value
  - def-knot-a-polynomial
  - def-singular-knot-and-vassiliev-derivative
justified_by: []
aliases: []
axiom_use: "The library Jones normalization uses full AC; the crossing-number convention declares AC_omega. The finite-type terminology concerns unframed knots, whose singular-knot definition is choice-free."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Avishy Carmi and Eliahu Cohen, On trivial Jones–Vassiliev polynomials, arXiv:2606.22410v1, submitted 2026-06-21"
      url: "https://arxiv.org/pdf/2606.22410v1"
    - title: "Justin Roberts, Knots Knotes, §4.4.8"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf"
    - title: "Louis H. Kauffman, Combinatorial Knot Theory and the Jones Polynomial, arXiv:2204.12104v2, §2"
      url: "https://arxiv.org/pdf/2204.12104v2"
verification:
  precheck: n/a
---

## Historical question

Assume full AC for the library Jones invariant and $\mathrm{AC}_\omega$ for
the crossing number. A classical knot is a smooth embedding
$S^1\hookrightarrow S^3$ considered up to ambient isotopy; $U$ is the unknot
represented by a crossing-free circle, and “nontrivial” means it is not
ambient isotopic to $U$. A regular diagram is a generic plane projection with only
transverse double points, each marked with over/under information. Let $c(K)$
be the least crossing count among regular diagrams representing $K$. Let
$V_K(x)$ be the library-normalized Jones polynomial with $V_U(x)=1$, where
$x=t^{1/2}$ and $t=A^{-4}$. Set $p=x-x^{-1}$ and write the unique expansion
$$V_K(x)=\sum_{q\ge0}(a_q(K)+b_q(K)x)p^q,$$
where the integer coefficients have finite support; set
$f_q(K)=(a_q(K),b_q(K))^{\mathsf T}$. The historical Jones
unknot-detection question is whether $V_K(x)=1$ implies $K=U$.

## Historical question references

[[def-jones-vassiliev-coefficient-vectors|Jones normalization and coefficient notation]]

[[def-crossing-number-of-link|Crossing number]]

[Roberts, *Knots Knotes*, §4.4.8](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf)

## Status

Roberts's 1999 notes record the implication as a conjecture. Carmi and Cohen's
arXiv:2606.22410v1, submitted on 2026-06-21, claims that every nontrivial
classical knot has a nonzero coefficient vector $f_q(K)$ for some integer
$q$ with $2\le q\le3c(K)$, and claims $V_K(x)=1\Rightarrow K=U$. This
scaffold has read the stated result and the paper's proof route but has not
independently validated the claimed proof; it asserts neither proof acceptance
nor a definitive current open status.

The source's machine argument still requires an independent diagram-level
audit of Proposition 5.12, particularly its exceptional-state collapse,
smoothing proxy, and two-machine locality. Its numerical estimate
$B_{\rm aux}\le B_{\rm host}+12$ is consistent with the stated overhead
$\kappa_{\rm mach}=11$: the argument uses the next layer $r+1$ after
$r>B_{\rm host}+11$. This arithmetic check does not verify the geometric
reductions. No Jones-detection theorem is registered by this scaffold.

## Status references

[Carmi and Cohen, *On trivial Jones–Vassiliev polynomials*, §§1.3, 3, 5.6, 6.2–6.3](https://arxiv.org/pdf/2606.22410v1)

[Roberts, *Knots Knotes*, §4.4.8](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf)

[Kauffman, *Combinatorial Knot Theory and the Jones Polynomial*, §2](https://arxiv.org/pdf/2204.12104v2)
