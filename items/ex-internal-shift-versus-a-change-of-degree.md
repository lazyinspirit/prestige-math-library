---
id: ex-internal-shift-versus-a-change-of-degree
kind: example
title: An internal shift reverses the published commutative twist parameter
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-graded-ring-module-bimodule-and-internal-shift, def-graded-ring-and-graded-module]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Stacks Project, Algebra, §10.56, tag 00JL"
      url: "https://stacks.math.columbia.edu/tag/00JL"
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras (2009), §2.2, printed pp. 6-7"
      url: "https://arxiv.org/pdf/0909.4844"
generation:
  role: example
verification:
  audited: 2026-09-27
  precheck: pass
---

## Example

Let $k$ be a field and let $A=k[x]$ be graded by $\deg x=1$, so that
$A_j=k\,x^j$ for $j\ge0$ and $A_j=0$ for $j<0$. The internal shift of
[[def-graded-ring-module-bimodule-and-internal-shift]] and the twist of the
published commutative convention ([[def-graded-ring-and-graded-module]]) move
degrees in opposite directions:

| module | $d$-th homogeneous piece | degree of $x^j$ | degree of $1$ |
|---|---|---|---|
| $A\{2\}$ | $A\{2\}_d=A_{d-2}$ | $j+2$ | $2$ |
| $A(2)$ | $A(2)_d=A_{d+2}$ | $j-2$ | $-2$ |

Thus $A\{2\}=A(-2)$ as graded modules, and the internal shift is nothing but the
published twist with the sign of the parameter reversed. Shifting is a relabelling
of degrees: the multiplication $A\times A\to A$, the action of $A$ on the module
and every degree-zero map are the same underlying maps in $A\{2\}$ and in
$A(-2)$, and no sign enters.

## Facts & Assumptions

**Given:** A field $k$, the graded $k$-algebra $A=k[x]$ with $\deg x=1$, and the internal shift $A\{2\}$ and published twist $A(2)$.

[L1] The internal shift has pieces $M\{r\}_d=M_{d-r}$, is again graded with the same scalar action, and satisfies $M\{r\}=M(-r)$ in the published convention ([[def-graded-ring-module-bimodule-and-internal-shift]]).

[L2] The published twist of a graded module over a nonnegatively graded commutative ring has pieces $M(a)_d=M_{d+a}$, so $A_j=kx^j$ for the standard grading of $k[x]$ ([[def-graded-ring-and-graded-module]]).

## Verification

1.1 In $A\{2\}$ the homogeneous piece of degree $d$ is $A\{2\}_d=A_{d-2}$, so the monomial $x^j\in A_j$ is a homogeneous element of degree $j+2$ in $A\{2\}$, and the element $1\in A_0$ has degree $2$. [L1]

1.2 In the published twist, $A(2)_d=A_{d+2}$, so $x^j\in A_j$ has degree $j-2$ in $A(2)$, while $A(-2)_d=A_{d-2}$ gives $x^j$ degree $j+2$ in $A(-2)$; hence $A\{2\}_d=A_{d-2}=A(-2)_d$ for every $d$. [L1, L2]

2.1 The equality of piecewise $k$-modules in step 1.2 holds for every degree, and both modules carry the same scalar action inherited from $A$; hence $A\{2\}=A(-2)$ as graded $A$-modules. The twist $A(2)$ is a genuinely different grading, not the same one written with the opposite sign: $A(2)_0=A_2=kx^2\ne0$, while $A(-2)_0=A_{-2}=0$, so $A(2)$ and $A(-2)$ have different degree-zero pieces. [step 1.1, step 1.2, L1]

3.1 Shifting changes no underlying map. The multiplication of $A$, the action of $A$ on these graded modules, and every degree-zero $A$-linear map are the same functions before and after the shift; only the degree attached to a homogeneous element changes, by the fixed amount $r$. In particular the shift of a complex would move each homogeneous piece to the $r$-fold shifted degree without introducing a sign in any differential. Since $A$ carries no differential, no sign is introduced here at all. [step 2.1, L1]

4.1 The computation exhibits both claims: $A\{2\}=A(-2)$ as graded modules, so the internal shift reverses the published twist parameter, and the shift does not alter multiplication or differential signs. ∎ [step 2.1, step 3.1]
