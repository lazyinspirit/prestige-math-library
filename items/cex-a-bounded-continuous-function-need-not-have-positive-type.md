---
id: cex-a-bounded-continuous-function-need-not-have-positive-type
kind: counterexample
title: A bounded continuous normalized function that is not of positive type
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-continuous-function-of-positive-type, def-topological-group, def-ordered-field, def-real-exponential-function-and-e, thm-exponential-is-strictly-increasing, cor-exponential-reciprocal-and-positivity, lem-exponential-dominates-one-plus-x, lem-of-inverse-positive, cor-of-one-positive, def-integer-power, lem-of-square-positive, thm-algebra-of-continuous-functions, thm-composition-of-continuous-functions]
landmark: false
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Bekka, de la Harpe and Valette, Kazhdan's Property (T), Definition C.4.1 and Proposition C.4.2, Appendix C, printed pp. 373–374"
      url: "https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf"
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups, §3.4"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory-2025.pdf"
---

## Statement

On the additive topological group $G=(\mathbb R,+)$, let
$$f(t)=\exp(-t^4).$$
This function is real-valued, even, continuous, bounded by $|f(t)|\le1$,
and normalized by $f(0)=1$, but it is not of positive type. In the positive-type
matrix for $g_1=0$, $g_2=\tfrac12$, $g_3=1$, the coefficient vector
$(1,-2,1)$ has a negative quadratic form.

## Facts & Assumptions

[A1] Positive type requires the matrix
$(\varphi(g_i^{-1}g_j))_{i,j}$ to be positive semidefinite for every finite
list and every complex coefficient vector ([[def-continuous-function-of-positive-type]]).

[A2] The real exponential is continuous and strictly increasing
([[thm-exponential-is-strictly-increasing]]).

[A3] For every real $x$, $\exp(x)>0$, $\exp(-x)=1/\exp(x)$, and
$\exp(0)=1$ ([[cor-exponential-reciprocal-and-positivity]]).

[A4] For every real $x$, $1+x\le\exp(x)$
([[lem-exponential-dominates-one-plus-x]]).

[A5] Reciprocation reverses strict inequalities between positive reals
([[lem-of-inverse-positive]]).

[A6] Every polynomial function on $\mathbb R$ is continuous
([[thm-algebra-of-continuous-functions]]).

[A7] A composite of continuous real functions is continuous
([[thm-composition-of-continuous-functions]]).

[A8] The square of every nonzero real number is positive
([[lem-of-square-positive]]).

[A9] Integer powers are defined by finite repeated multiplication
([[def-integer-power]]).

[A10] $1>0$ in $\mathbb R$ ([[cor-of-one-positive]]).

[A11] A topological group has continuous multiplication and inversion
([[def-topological-group]]).

[A12] The positive reals are closed under addition ([[def-ordered-field]]).

## Proof

**Given:** The additive real group with its usual topology and the function
$f(t)=\exp(-t^4)$.

**Proof technique:** direct.

1.1 Addition on $\mathbb R$ is continuous because $|(x+y)-(x_0+y_0)|\le|x-x_0|+|y-y_0|$, and inversion $x\mapsto-x$ preserves distances; hence the usual additive group satisfies [A11]. The maps $t\mapsto t^4$ and $t\mapsto-t^4$ are polynomials and are continuous by [A6]. Composing with the continuous exponential by [A2] and [A7] proves that $f$ is continuous. [A2, A6, A7, A11, algebra]

1.2 Write $t^4=(t^2)^2$. If $t^2=0$ then $t^4=0$; otherwise [A8] applied to $t^2$ gives $t^4>0$. Also $(-t)^4=t^4$ by finite multiplication, so $f$ is even. By [A3] and strict monotonicity in [A2], $0<f(t)=\exp(-t^4)\le\exp(0)=1$ for all $t$, and $f(0)=1$. Thus $f$ is real-valued, bounded by $1$ in modulus and normalized at the identity. [A2, A3, A8, A9]

2.1 Put $a=\exp(-1/16)$ and $b=\exp(-1)$. The matrix on the listed points is $M=\begin{pmatrix}1&a&b\\a&1&a\\b&a&1\end{pmatrix}$, since $f$ is even. For $c=(1,-2,1)$, direct multiplication gives $c^*Mc=6-8a+2b$. [A1, step 1.2, algebra]

3.1 Applying [A4] at $x=-1/16$ gives $a\ge15/16$, and at $x=1$ gives $2\le\exp(1)$. By [A10] and [A12], $2=1+1>0$. By [A3], $b=1/\exp(1)>0$; if $\exp(1)=2$ then $b=1/2$, while if $2<\exp(1)$ then [A5] gives $b<1/2$. Hence $b\le1/2$, and step 2.1 yields $c^*Mc\le6-8(15/16)+2(1/2)=-1/2<0$. Thus $M$ is not positive semidefinite by [A1], so $f$ is not of positive type. [A1, A3, A4, A5, A10, A12, step 2.1] ∎
