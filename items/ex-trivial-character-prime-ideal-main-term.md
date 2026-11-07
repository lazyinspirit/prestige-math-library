---
id: ex-trivial-character-prime-ideal-main-term
kind: example
title: "The trivial character's prime-ideal main term"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 22
deps:
  - thm-smoothed-explicit-formula-for-abelian-chebotarev-prime-ideal-sums
  - def-finite-order-ray-class-hecke-character-and-l-function
  - def-ring-of-integers-of-a-number-field
  - def-fractional-ideal
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sourabhashis Das, MSc thesis, §3.5.2 Proposition 3.16"
      url: "https://opus.uleth.ca/server/api/core/bitstreams/e36dbba6-c698-43cb-a9aa-5b32083c282b/content"
      locator: "Printed pp.92–96: the simple principal pole gives the smoothed prime-ideal main term."
    - title: "Jürgen Neukirch, Algebraic Number Theory, Chapter VII §§5 and 8"
      url: "https://www.math.toronto.edu/~ila/Neukirch_Algebraic_number_theory.pdf"
      locator: "Printed pp.474–477 and 493–503: Dedekind zeta pole and primitive Hecke L-function normalization."
---

## Example

Assume AC, Countable Choice, Dependent Choice, and the primitive analytic
input in the explicit-formula theorem. Take $K=\mathbb Q$, modulus
$\mathfrak m=((1),\varnothing)$, the unique ray class $C=1$, and $X=3$. Fix any
$c>1$, $\alpha<0$, and $T>0$ for which the rectangle boundary in that theorem
contains no zero or pole, and define
$$W(u)=\begin{cases} \exp\!\left(-\dfrac1{(u-1)(2-u)}\right),&1<u<2,\\ 0,&u\notin(1,2). \end{cases}$$
This is a smooth compactly supported function on $(0,\infty)$ and is positive
on $(1,2)$. The ray class group has one element and its only character is
trivial. In the finite-rectangle explicit formula, that character contributes
the pole term
$$X\widetilde W(1)=3\int_1^2W(u)\,du>0.$$
The weighted sum itself is
$$\Psi_1(3;W)=\log 2\,W(4/3)+\log 5\,W(5/3)>0;$$
the remaining zero and contour terms in the exact identity account for the
difference between this finite sum and the pole contribution.

## Example references

[[thm-smoothed-explicit-formula-for-abelian-chebotarev-prime-ideal-sums]]

## Facts & Assumptions

**Given:** $K=\mathbb Q$, $\mathfrak m=((1),\varnothing)$, $C=1$, $X=3$, and the function
$W$ in the Example.

[F1] The ray-class group is the quotient of fractional ideals prime to the
finite modulus by principal ideals satisfying its congruence and sign
conditions; for modulus $((1),\varnothing)$ over $\mathbb Q$, it is the
ordinary ideal class group.
[[def-finite-order-ray-class-hecke-character-and-l-function]]

[F2] The ring of integers of a number field is the integral closure of
$\mathbb Z$; for $\mathbb Q$ it is $\mathbb Z$.
[[def-ring-of-integers-of-a-number-field]]

[F3] A fractional ideal of a domain is a nonzero submodule of its fraction
field that becomes an integral ideal after multiplication by a nonzero ring
element.
[[def-fractional-ideal]]

[F4] The exact finite-rectangle formula assigns the pole term
$X\widetilde W(1)/|G|$ to the trivial character and class identity.
[[thm-smoothed-explicit-formula-for-abelian-chebotarev-prime-ideal-sums]]

## Verification

**Given:** The Example data.

1.1 As $u\downarrow1$ or $u\uparrow2$, the quantity $((u-1)(2-u))^{-1}$ grows at least as a positive constant divided by the distance to that endpoint. Every derivative of $W$ on $(1,2)$ is a finite sum of terms $P(u)(u-1)^{-a}(2-u)^{-b}e^{-1/((u-1)(2-u))}$ for polynomials $P$ and nonnegative integers $a,b$. Exponential decay dominates every such inverse power, so all derivatives tend to $0$ at both endpoints. Extending by zero is therefore smooth, and the support is $[1,2]$. [given, algebra]

1.2 By [F2], $\mathcal O_{\mathbb Q}=\mathbb Z$. Every nonzero integral ideal of $\mathbb Z$ is $n\mathbb Z$: choose its least positive element $n$ and divide any other element by $n$ with remainder; minimality forces the remainder to be zero. By [F3], fractional ideals become integral after multiplication by a nonzero integer. Since modulus $(1)$ imposes no congruence or sign condition, [F1] identifies the ray class group with this trivial ordinary ideal class group. Thus $|G|=1$ and its unique character is $1$. Since $W(u)>0$ on $(1,2)$, its Mellin value $\widetilde W(1)=\int_1^2W(u)\,du$ is positive. [F1, F2, F3, given, algebra]

2.1 For a prime power $p^k$, the summand at $X=3$ is nonzero exactly when $1<p^k/3<2$, or $3<p^k<6$. The only such prime powers are $4=2^2$ and $5=5^1$, giving the displayed value of $\Psi_1(3;W)$. By [F4], the trivial character's residue term is $3\widetilde W(1)$, which is positive by step 1.2. The theorem's other zero and oriented contour terms remain in the identity, so this example does not assert that the sum equals its pole term. [F4, step 1.2, algebra] ∎
