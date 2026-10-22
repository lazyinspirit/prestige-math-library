---
id: thm-kauffman-and-dubrovnik-conversion
kind: theorem
title: The Kauffman and Dubrovnik polynomials agree under the stated conversion
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-axiom-of-choice
  - def-kauffman-regular-isotopy-and-dubrovnik-conventions
  - lem-kauffman-dubrovnik-writhe-component-conversion
  - alg-kauffman-polynomial-from-bmw-braid-closure
  - thm-bmw-markov-trace-gives-dubrovnik-invariant
  - lem-framed-kauffman-link-evaluation
proof_strategy: direct
axiom_use: "Assumes AC through the Alexander/Markov representation theorem; the parameter, curl, and smoothing calculations are finite and choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Louis H. Kauffman, An Invariant of Regular Isotopy, Transactions of the AMS 318(2) (1990), §§VI–VII"
      url: "https://homepages.math.uic.edu/~kauffman/IRH.pdf"
      locator: "PDF pp. 38–54/printed pp. 453–469: scalar Dubrovnik evaluation and the Kauffman conversion"
    - title: "Frederick M. Goodman and Holly Hauschild, Affine Birman–Wenzl–Murakami Algebras and Tangles in the Solid Torus, §§2.3 and 5.1–5.5"
      url: "https://arxiv.org/pdf/math/0411155"
      locator: "PDF pp. 6–8 and 33–50: BMW closure trace and tangle realization"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, Handbook of Knot Theory chapter, Theorems 2 and 4"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
      locator: "Printed pp. 13–19: Alexander and Markov theorems used for the braid-closure realization"
---

## Statement

Assume the Axiom of Choice. Let $K$ be a nonempty oriented link with determinant writhe $w(K)$ and component count $c(K)$, and let $Q_K$ be the value returned by the BMW braid-closure algorithm for any finite signed braid word representing $K$. Then $Q_K$ is independent of the chosen braid and
$$Q_K=F_K(ia,-iz)=-(-1)^{c(K)}a^{-w(K)}D_K(a,z),$$
equivalently,
$$D_K(a,z)=-i^{-w(K)}(-1)^{c(K)}L_K(ia,-iz),\qquad i^2=-1.$$
The proof covers the unknot, positive and negative curls, and both self-crossing split and mixed-crossing merge smoothing cases under the stated universal coefficient relation, without dividing by $z$.

## Statement references

[[def-kauffman-regular-isotopy-and-dubrovnik-conventions|Kauffman and Dubrovnik values]]

[[lem-kauffman-dubrovnik-writhe-component-conversion|Local writhe, component, and skein conversion]]

[[alg-kauffman-polynomial-from-bmw-braid-closure|BMW braid-closure algorithm]]

[[thm-bmw-markov-trace-gives-dubrovnik-invariant|Markov trace invariance across braid representatives]]

[Kauffman, *An Invariant of Regular Isotopy*](https://homepages.math.uic.edu/~kauffman/IRH.pdf)

[Goodman and Hauschild, *Affine Birman–Wenzl–Murakami Algebras and Tangles in the Solid Torus*](https://arxiv.org/pdf/math/0411155)

[Birman and Brendle, *Braids: A Survey*](https://www.math.columbia.edu/~jb/Handbook-21.pdf)

## Facts & Assumptions

**Given:** AC, a nonempty oriented link, the BMW trace computation from a braid representative, and the declared Dubrovnik/Kauffman conventions.

[A1] The Axiom of Choice, used for the closed-braid representation and Markov equivalence theorems ([[def-axiom-of-choice]]).

[F1] The BMW trace output is independent of the braid representative and equals the declared Kauffman value $F(ia,-iz)$ ([[thm-bmw-markov-trace-gives-dubrovnik-invariant]]).

[F2] For every oriented diagram with writhe $w$ and component count $c$, $D=-i^{-w}(-1)^cL(ia,-iz)$; the proof of that result verifies both skeins, curls, and orientation independence ([[lem-kauffman-dubrovnik-writhe-component-conversion]]).

[F3] The scalar Dubrovnik evaluation has unknot value $D=1$, positive and negative curl factors $a,a^{-1}$, and satisfies the coefficient relation $z(d-1)=a-a^{-1}$ ([[def-kauffman-regular-isotopy-and-dubrovnik-conventions]], [[lem-framed-kauffman-link-evaluation]]).

## Proof


1.1 Since $K$ is nonempty, [A1] and Alexander's theorem give a finite braid representative; [F1] shows its BMW trace output is the same for every representative and equals $F_K(ia,-iz)$. [A1, F1, given]

1.2 By [F2], $$F_K(ia,-iz)=(ia)^{-w}L_K(ia,-iz) =(ia)^{-w}\bigl(-i^w(-1)^cD_K(a,z)\bigr) =-(-1)^c a^{-w}D_K(a,z).$$ Rearranging the same identity gives the displayed inverse conversion formula in the statement. [F2, algebra]

2.1 The boundary cases agree with this formula: for the unknot, $c=1,w=0,D=1$, so $Q=1$; a positive curl changes $(w,D)$ to $(w+1,aD)$, leaving $a^{-w}D$ unchanged, and a negative curl changes them to $(w-1,a^{-1}D)$ with the same result. At a self-crossing, the oriented smoothing splits one component and the other smoothing keeps the component count. At a mixed crossing, both smoothing pairings merge the two incident components; orienting the non-oriented smoothing by reversing one incident whole component gives the modulo-four writhe phase established from the even mixed-crossing sums in [F2]. Thus the sum/difference skein conversions cover both local component changes, and no coefficient is divided by $z$. [F2, F3, step 1.2, algebra] ∎
