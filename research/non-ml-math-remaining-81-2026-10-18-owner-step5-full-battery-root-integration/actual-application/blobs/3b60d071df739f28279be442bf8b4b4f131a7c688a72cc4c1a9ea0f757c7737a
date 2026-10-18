---
id: ex-group-algebra-is-symmetric-but-not-closed-sector
kind: example
title: "A nonabelian group algebra is symmetric Frobenius but not a closed sector"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 10
deps: [def-frobenius-object-and-knowledgeable-sewing-data, def-group-ring, prop-group-algebra-in-defining-characteristic-is-a-symmetric-frobenius-algebra, thm-closed-oriented-two-dimensional-tqfts-are-commutative-frobenius-algebras, thm-group-ring-is-a-unital-algebra-with-basis-g]
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
axiom_use: "Choice-free over every field; the proposition used below actually states the result for every field, not only defining characteristic."
sources:
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, §§1.1 and 8.5"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
      locator: "§1.1 for group rings; §8.5, printed p. 133 (PDF page 140), immediately before Theorem 8.5.5, for the coefficient-of-identity symmetric Frobenius form over an arbitrary field."
    - title: "Aaron D. Lauda and Hendryk Pfeiffer, Open-closed strings: Two-dimensional extended TQFTs and Frobenius algebras, arXiv:math/0510664v3"
      url: "https://arxiv.org/pdf/math/0510664v3"
      locator: "§4, PDF pp. 39–42, for the closed commutative-Frobenius classification."
generation:
  role: example
---

## Example

For every field $k$, the group algebra $k[S_3]$ is symmetric Frobenius under the coefficient-of-identity form. It is noncommutative, so it cannot itself be the commutative algebra assigned to a circle by a closed oriented two-dimensional TQFT. This says nothing about whether it can be the open sector of a separate knowledgeable open/closed theory.

## Facts & Assumptions

**Given:** A field $k$ and the symmetric group $S_3$, with permutation products composed right to left.

[F1] The group ring has basis $\{[g]:g\in S_3\}$ and multiplication $[g][h]=[gh]$ ([[def-group-ring]], [[thm-group-ring-is-a-unital-algebra-with-basis-g]]).

[F2] The coefficient-of-identity form on $k[G]$ is associative, symmetric, and nondegenerate for every finite group $G$ and every field $k$ ([[prop-group-algebra-in-defining-characteristic-is-a-symmetric-frobenius-algebra]]). The item's title is narrower than its actual statement.

[F3] The algebra assigned to a circle by a closed oriented two-dimensional TQFT is commutative ([[thm-closed-oriented-two-dimensional-tqfts-are-commutative-frobenius-algebras]]).

## Verification

1.1 Apply [F2] to $G=S_3$. It gives the symmetric nondegenerate associative form $\langle x,y\rangle=$ coefficient of $[e]$ in $xy$; by the Frobenius definition this makes $k[S_3]$ a symmetric Frobenius algebra over any field. In $S_3$, $(12)(23)=(123)$ and $(23)(12)=(132)$ under the stated composition convention. These permutations are distinct, and their corresponding group elements are distinct basis vectors by [F1]. Therefore $[(12)][(23)]=[(123)]\ne[(132)]=[(23)][(12)],$ so the multiplication is not commutative. [given, F1, F2, algebra]

2.1 If this algebra were itself assigned to the circle by a closed oriented two-dimensional TQFT, [F3] would make its multiplication commutative, contradicting step 1.1. Hence it is not a closed sector of that form. The argument concerns only the closed circle object; it neither constructs nor rules out a separate open/closed extension with a different commutative closed algebra. [step 1.1, F3, contradiction] ∎

