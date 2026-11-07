---
id: ex-twin-prime-system-is-infinite-complexity
kind: example
title: "The twin-prime system has infinite complexity"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-affine-linear-forms-system-and-size
  - def-finite-complexity-of-a-linear-forms-system
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ben Green and Terence Tao, Linear equations in primes"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v171-n3-p08-p.pdf"
      locator: "Example 1 following Definition 1.5, printed p. 1760: the twin-prime system has infinite complexity."
    - title: "Terence Tao, Higher Order Fourier Analysis, AMS Graduate Studies in Mathematics 142"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-142-tao7-higher-book-05june2012.pdf"
      locator: "Section 1.7, printed pp. 109–123: finite-complexity criteria for linear patterns and the binary-pattern obstruction."
---

## Example

The system $\Psi:\mathbb Z\to\mathbb Z^2$ given by $\Psi(n)=(n,n+2)$ has infinite Cauchy–Schwarz complexity and is outside the class of finite-complexity systems. This classification is not a statement that twin primes fail to exist.

## Example references

[[def-affine-linear-forms-system-and-size]]

[[def-finite-complexity-of-a-linear-forms-system]]

[Green and Tao, Example 1](https://annals.math.princeton.edu/wp-content/uploads/annals-v171-n3-p08-p.pdf)

[Tao, Higher Order Fourier Analysis, Section 1.7](https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-142-tao7-higher-book-05june2012.pdf)

## Facts & Assumptions

**Given:** $\Psi(n)=(n,n+2)$ and the complexity convention in the definition.

[F1] For a subcollection, the affine-linear span consists of forms whose homogeneous vectors lie in the rational span of the subcollection's coefficient vectors; finite complexity requires a cover of the other forms by finitely many such classes, each omitting the target. [[def-finite-complexity-of-a-linear-forms-system]]

[F2] The two homogeneous coefficient vectors of $n$ and $n+2$ are both $1\in\mathbb Q^1$. [[def-affine-linear-forms-system-and-size]]

## Proof

1.1 Fix either form as the target. The other form alone must belong to one class in any cover of the remaining forms, and its homogeneous vector spans all of $\mathbb Q^1$, including the target vector $1$. Thus that class's affine-linear span contains the target form, whatever rational constant term is allowed. [given, F1, F2, algebra]

1.2 The required omission condition fails for each target for every finite number of classes, so no integer $s\ge0$ is a complexity bound. By definition the complexity is infinite. The theorem's exclusion is an applicability fact and makes no assertion about whether twin primes exist. [step 1.1, F1] ∎
