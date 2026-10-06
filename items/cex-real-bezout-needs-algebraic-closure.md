---
id: cex-real-bezout-needs-algebraic-closure
kind: counterexample
title: "Bezout needs algebraic closure: an imaginary conic has no real point"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-transverse-smooth-curves-intersection-one, def-algebraically-closed-field, def-axiom-of-choice, def-local-intersection-multiplicity-plane-curves, def-ordered-field, def-plane-projective-curve, def-polynomial-evaluation-and-root, lem-smooth-plane-curve-unique-tangent, prop-algebraically-closed-splitting-and-finite-extension-criteria, thm-bezout-plane-curves, thm-complex-numbers-form-a-field, thm-fundamental-theorem-of-algebra-minimum-modulus-proof, thm-intersection-multiplicity-at-least-product-multiplicities, thm-intersection-multiplicity-basic-properties, thm-reals-ordered-field]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "William Fulton, Algebraic Curves: An Introduction to Algebraic Geometry (2008 electronic edition; Internet Archive copy of the author's PDF)"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Notes for a Course in Algebraic Geometry (January 26, 2022 version), Chapter 1"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
---

## Statement refuted

False claim: over an arbitrary field $k$, the degree identity $\sum_pI_p=de$ holds for the $k$-rational intersection points of two plane curves.

## Facts & Assumptions

**Given:** AC [[def-axiom-of-choice]], the imaginary conic $C=V(x_0^2+x_1^2+x_2^2)$ and the line $L=V(x_1)$, first over the ordered field $\mathbb R$ [[thm-reals-ordered-field]] and then over the algebraically closed field $\mathbb C$: the complex field construction [[thm-complex-numbers-form-a-field]] and the root theorem [[thm-fundamental-theorem-of-algebra-minimum-modulus-proof]] give the latter assertion.

[F1] The derivatives of the quadratic are $2x_0,2x_1,2x_2$. Any repeated irreducible factor would divide all three, impossible since these coordinates have no common nonconstant factor; thus the quadratic is square-free, as is the linear form $x_1$. Their degrees are two and one. Over $\mathbb C$ they define curves in the convention of [[def-plane-projective-curve]]. Over $\mathbb R$, $C(\mathbb R)$ and $L(\mathbb R)$ mean the rational zero sets of these homogeneous equations; the degrees refer to the equations (or their geometric curves after extension to $\mathbb C$), and no degree is assigned to the empty real point set.

[F2] A point $[a_0:a_1:a_2]\in L$ has $a_1=0$ and satisfies the conic equation exactly when $a_0^2+a_2^2=0$. In an ordered field a nonzero square is positive by trichotomy and closure of the positive cone [[def-ordered-field]], so over $\mathbb R$ the sum of the two squares can be zero only if $a_0=a_2=0$, impossible for a projective point; over $\mathbb C$ the solutions are $[1:0:i]$ and $[1:0:-i]$ (or $[i:0:1]$, $[-i:0:1]$) [[def-polynomial-evaluation-and-root]], [[def-algebraically-closed-field]].

[F3] Over the algebraically closed field, the Bezout identity gives $\sum_pI_p(C,L)=2\cdot1=2$ [[thm-bezout-plane-curves]]. At $p=[1:0:i]$ the gradients of $x_0^2+x_1^2+x_2^2$ and $x_1$ are $(2,0,2i)$ and $(0,1,0)$, both nonzero, so both curves are smooth at $p$ with tangent lines $x_0+ix_2=0$ and $x_1=0$, which are distinct; hence $I_p(C,L)=1$ [[cor-transverse-smooth-curves-intersection-one]], [[lem-smooth-plane-curve-unique-tangent]], and symmetrically at the conjugate point [[thm-intersection-multiplicity-at-least-product-multiplicities]], [[def-local-intersection-multiplicity-plane-curves]]. The two points are conjugate, with non-real coordinates, and are not $\mathbb R$-rational: at either point the ratio $x_2/x_0=\pm i$ is non-real, since a real square cannot equal $-1$ [[thm-complex-numbers-form-a-field]], [[def-ordered-field]].

## Counterexample

1.1 The real intersection: by [F2] the sets $C(\mathbb R)$ and $L(\mathbb R)$ are disjoint, since $a_0^2+a_2^2=0$ has only the trivial real solution; hence the sum of multiplicities over $\mathbb R$-rational points is $0$. [F2, given, F1]

1.2 Over $\mathbb C$ the two curves meet in exactly the two conjugate points $[1:0:\pm i]$, each with multiplicity one, so the multiplicity-weighted complex sum is $2=de$. [F2, F3, given]

2.1 The $k$-rational count gives $0$, while the degree identity requires $2=de$; the missing contributions are exactly the two conjugate non-rational points, so Bezout's identity cannot be read as a statement about $k$-rational points when $k$ is not algebraically closed. [step 1.1, step 1.2, F3, given] ∎ 