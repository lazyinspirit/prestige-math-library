---
id: def-jones-vassiliev-coefficient-vectors
kind: definition
title: "Jones–Vassiliev coefficient vectors"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-singular-knot-and-vassiliev-derivative
  - def-temperley-lieb-quotient-and-jones-specialization
  - lem-jones-vassiliev-basis-decomposition
  - thm-bracket-state-sum-matches-library-jones-specialization
justified_by: []
aliases: []
axiom_use: "Full AC is required by the library Jones-invariance supplier. The coefficient decomposition itself is a finite, choice-free algebraic construction."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Avishy Carmi and Eliahu Cohen, On trivial Jones–Vassiliev polynomials, arXiv:2606.22410v1, §1.3 and Lemma 3.1"
      url: "https://arxiv.org/pdf/2606.22410v1"
    - title: "Louis H. Kauffman, Combinatorial Knot Theory and the Jones Polynomial, arXiv:2204.12104v2, §2"
      url: "https://arxiv.org/pdf/2204.12104v2"
    - title: "Justin Roberts, Knots Knotes, §§4.3–4.4"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf"
    - title: "Dror Bar-Natan and Alexander Stoimenow, The Fundamental Theorem of Vassiliev Invariants, arXiv:q-alg/9702009v1, §1.1"
      url: "https://arxiv.org/pdf/q-alg/9702009v1"
verification:
  precheck: n/a
---

## Definition

Assume full AC for the library Jones invariant. An oriented link is a finite
disjoint union of oriented smooth circles embedded in $S^3$, considered up to
ambient isotopy; an oriented classical knot is the one-component case. For a nonempty
oriented link $L\subset S^3$, let $V_L(x)\in\mathbb Z[x^{\pm1}]$ be the
library-normalized Jones polynomial, with $V_U(x)=1$ for the unknot $U$;
write $V_K$ for its value on a knot $K$. Here $x=t^{1/2}$ in the library
convention $t=A^{-4}$, so an oriented skein triple satisfies
$$x^{-2}V_{L_+}(x)-x^2V_{L_-}(x)=(x-x^{-1})V_{L_0}(x).$$
Set $p=x-x^{-1}$. By the unique Laurent decomposition, write
$$V_K(x)=\sum_{q\ge0}(a_q(K)+b_q(K)x)p^q,$$
where $a_q(K),b_q(K)\in\mathbb Z$ and only finitely many are nonzero. The
**Jones–Vassiliev coefficient vector of order $q$** is
$$f_q(K):=(a_q(K),b_q(K))^{\mathsf T},$$
and $c_q(K):=a_q(K)+b_q(K)$. This is the algebraic coefficient-vector
definition used by Carmi and Cohen. The claim that the coordinates of $f_q$
are finite-type invariants of order at most $q$ is a separate theorem and is
not part of this definition.

## Definition references

[[lem-jones-vassiliev-basis-decomposition|Unique Laurent decomposition]]

[[def-temperley-lieb-quotient-and-jones-specialization|Library Jones normalization]]

[[thm-bracket-state-sum-matches-library-jones-specialization|Bracket/Jones comparison]]

[[def-singular-knot-and-vassiliev-derivative|Unframed Vassiliev finite-difference convention]]

[Carmi and Cohen, *On trivial Jones–Vassiliev polynomials*, §1.3 and Lemma 3.1](https://arxiv.org/pdf/2606.22410v1)

[Kauffman, *Combinatorial Knot Theory and the Jones Polynomial*, §2](https://arxiv.org/pdf/2204.12104v2)

[Roberts, *Knots Knotes*, §§4.3–4.4](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf)

[Bar-Natan and Stoimenow, *The Fundamental Theorem of Vassiliev Invariants*, §1.1](https://arxiv.org/pdf/q-alg/9702009v1)
