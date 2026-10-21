---
id: thm-number-field-four-square-theorem-in-zf
kind: theorem
title: Number-field four-square theorem in ZF
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-number-field-hasse-minkowski-in-zf, thm-every-nonarchimedean-local-number-is-a-sum-of-four-squares]
proof_strategy: direct
sources:
  references:
    - title: Carl Siegel, Darstellung total positiver Zahlen durch Quadrate, Mathematische Zeitschrift 11 (1921), pages 259–260, Hauptsatz
      url: https://doi.org/10.1007/BF01203627
    - title: J. S. Milne, Class Field Theory, VIII section 3
      url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
---

## Statement

Let $F$ be a number field. Every element of $F$ that is positive at every real embedding is a sum of four squares in $F$. If $F$ has no real embeddings, every element is a sum of four squares. Zero also has a four-square representation. No choice principle is required.

## Statement references

[[thm-number-field-hasse-minkowski-in-zf]]

[[thm-every-nonarchimedean-local-number-is-a-sum-of-four-squares]]

## Facts & Assumptions

**Given:** A nonzero element $a\in F$ positive at every real embedding, with this condition vacuous if there are none.

[F1] The Hasse–Minkowski isotropy principle for arbitrary number fields holds in ZF. [[thm-number-field-hasse-minkowski-in-zf]]

[F2] Every element of a finite extension of $\mathbb Q_p$ is a sum of four squares. [[thm-every-nonarchimedean-local-number-is-a-sum-of-four-squares]]

## Proof

1.1 The nonsingular form $q=\langle1,1,1,1,-a\rangle$ is isotropic at every finite completion by [F2]. At a real completion positivity of $a$ gives the zero $(\sqrt a,0,0,0,1)$. At a complex completion the same formula holds with a complex square root. Consequently [F1] gives a nonzero global vector $(x_1,x_2,x_3,x_4,t)$ satisfying $$x_1^2+x_2^2+x_3^2+x_4^2=at^2.$$ [F1, F2, given, construct, algebra]

2.1 If $t\ne0$, divide the first four coordinates by $t$. If $t=0$, the four-square form $Q=\langle1,1,1,1\rangle$ is itself isotropic. Choose its nonzero zero vector $x$ and a vector $y$ with $B(x,y)\ne0$, using nonsingularity of its polar form. Then $$Q(y+ux)=Q(y)+2uB(x,y)$$ takes every value of $F$ as $u$ varies, so it takes the value $a$, again giving a four-square representation. Finally zero is represented by the zero vector. This proves every assertion, including the case of no real embeddings. [step 1.1, construct, algebra] ∎
