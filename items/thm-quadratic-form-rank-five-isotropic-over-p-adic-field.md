---
id: thm-quadratic-form-rank-five-isotropic-over-p-adic-field
kind: theorem
title: Quadratic forms in at least five variables over the p-adic rationals are isotropic
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-quadratic-form-and-polar-form
  - cor-quadratic-forms-diagonalize-in-characteristic-not-two
  - lem-finite-field-quadratic-isotropy-in-dimension-at-least-three
  - cor-complete-local-rings-are-henselian
  - cor-henselian-local-simple-root-criterion
proof_strategy: direct
axiom_use: No choice principle is used beyond the specified finite choices and the given p-adic fields.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Andrew V. Sutherland, 18.782 Lecture 11
      url: https://math.mit.edu/classes/18.782/2013fa/LectureNotes11.pdf
      locator: Existing local finite-field isotropy supplier cites this lecture; the separate explicit 2-adic finite square-class proof below is locally reconstructed.
---

## Statement

Let $p$ be a rational prime and let $q$ be a quadratic form on a $\mathbb Q_p$-vector space of dimension at least five. Then $q$ has a nonzero zero over $\mathbb Q_p$. In particular every rank-five quadratic form over $\mathbb Q_p$ is isotropic, including when $p=2$. This assertion concerns the fields $\mathbb Q_p$; no assertion about arbitrary finite extensions of them is needed here.

## Statement references

[[def-quadratic-form-and-polar-form]]

[[cor-quadratic-forms-diagonalize-in-characteristic-not-two]]

## Facts & Assumptions

**Given:** A rational prime and the specified quadratic form of dimension at least five.

[F1] A quadratic form over a field of characteristic different from $2$ has a diagonal presentation. [[cor-quadratic-forms-diagonalize-in-characteristic-not-two]]

[F2] A quadratic form in at least three variables over a finite field of odd order has a nonzero zero. [[lem-finite-field-quadratic-isotropy-in-dimension-at-least-three]]

[F3] A simple root modulo the maximal ideal of a complete local ring lifts to a root. [[cor-complete-local-rings-are-henselian]] [[cor-henselian-local-simple-root-criterion]]

## Proof

**Proof technique:** valuation parity and finite-field lifting at odd primes; at $2$, meet the represented square classes of a ternary and a binary subform.

1.1 Diagonalize by [F1]. If a diagonal coefficient is zero, its basis vector is isotropic. Otherwise restrict to five nonzero diagonal coefficients. For odd $p$, rescale each variable by a power of $p$ and divide the whole form by a nonzero scalar so every coefficient is either a $p$-adic unit or $p$ times a unit. At least three of the five coefficients have the same valuation parity. Restrict to those three variables and, if necessary, divide by $p$. Their reduction modulo $p$ is a nondegenerate ternary form. By [F2] it has a nonzero zero; one coordinate has nonzero derivative because $p$ is odd. Holding the other coordinates fixed, [F3] lifts that one coordinate, giving a nonzero $p$-adic zero. [F1, F2, F3, given, cases, construct]

2.1 Now let $p=2$. Every nonzero $2$-adic number is a square times exactly one element of $A=(1,3,5,7,2,6,10,14)$. Indeed, its valuation parity is invariant under squares, and an odd square is $1$ modulo $8$. Conversely if an odd unit $u$ is $1$ modulo $8$, write $u=1+8m$ and solve $t^2+t-2m=0$ using the simple root $t=0$ modulo $2$ in [F3]; then $(1+2t)^2=u$. Thus odd units with the same residue modulo $8$ differ by a square, and the eight displayed classes are distinct. [F3, step 1.1, cases, construct]

3.1 A nondegenerate ternary diagonal form over $\mathbb Q_2$ represents at least seven of those eight nonzero square classes. Divide the form by its first coefficient and rescale each variable using step 2.1; it suffices to consider $x^2+b y^2+d z^2$ with $b,d\in A$. The following exact finite certificate tests all $64$ pairs and the integer triples $0\le x,y,z<4$. For a positive integer $N$, its class index is $4(v_2(N)\bmod2)+((N/2^{v_2(N)}\bmod8)-1)/2$. The table below lists, for each ordered pair $(b,d)$ with row and column order $A$, the number of distinct class indices among these $64$ triples, omitting $N=0$: $$\begin{array}{c|rrrrrrrr}  &1&3&5&7&2&6&10&14\\\hline 1&7&8&7&8&7&8&7&8\\ 3&8&8&8&8&7&7&7&7\\ 5&7&8&7&8&8&7&8&7\\ 7&8&8&8&8&8&8&8&8\\ 2&7&7&8&8&7&7&8&8\\ 6&8&7&7&8&7&8&8&7\\ 10&7&7&8&8&8&8&7&7\\ 14&8&7&7&8&8&7&7&8 \end{array}$$ Each entry is obtained solely by evaluating $N=x^2+b y^2+d z^2$, repeatedly dividing the positive integer $N$ by $2$ until odd, and retaining its valuation parity and odd residue modulo $8$; the displayed finite loops are the complete certificate, with no appeal to an external computation. Every entry is at least seven. Multiplying the represented values by the original first coefficient permutes the eight square classes, proving the claim. [step 2.1, construct, algebra]

4.1 A nondegenerate binary diagonal form $a u^2+c v^2$ either is already isotropic, or represents at least two distinct nonzero square classes. If the classes of $a$ and $c$ differ, take $(u,v)=(1,0),(0,1)$. If they agree, rescale $v$ so the form is $a(u^2+v^2)$; it represents $a$ and $2a$, which lie in different classes by valuation parity. Assume it is anisotropic. The negatives of its two represented classes are distinct. By step 3.1 at most one of the eight classes is omitted by the ternary subform, so one negative binary class is represented by a nonzero ternary value $r$. If the corresponding binary value is $s$, then $-s/r$ is a square, say $\lambda^2$, and scaling the ternary vector by $\lambda$ makes its value $-s$. Combining the two vectors yields a nonzero zero of the original five-variable form. [step 2.1, step 3.1, cases, construct, algebra] ∎
