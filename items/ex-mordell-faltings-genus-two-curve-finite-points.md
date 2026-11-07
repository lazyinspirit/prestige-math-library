---
id: ex-mordell-faltings-genus-two-curve-finite-points
kind: example
title: "A genus-two hyperelliptic curve with at least four rational points"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 27
deps:
  - def-axiom-of-choice
  - def-number-field
  - def-genus-euler-characteristic-curve
  - def-degree-divisor-proper-curve
  - thm-curves-function-fields-equivalence
  - thm-nonconstant-morphism-proper-curves-finite-surjective
  - def-nonconstant-morphism-curves-degree
  - thm-riemann-hurwitz-complete
  - lem-curve-different-local-support-and-index-bound
  - thm-mordell-faltings-finiteness-for-genus-at-least-two-curves
justified_by: []
proof_strategy: direct
generation:
  role: example
axiom_use: "AC is used by the smooth proper curve/function-field correspondence. No additional choice is used in the finite branch and rational-point computations."
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Abelian Varieties, version 2.0, Chapter IV §5, Theorems 5.1–5.2"
      url: "https://www.jmilne.org/math/CourseNotes/AV.pdf"
      locator: "The genus-at-least-two finiteness theorem and the Shafarevich–Parshin–De Franchis proof route applied to a genus-two curve."
    - title: "G. Faltings, G. Wüstholz et al., Rational Points, 2nd ed. (1986), Chapter V §4.5, Theorem 4.10"
      url: "https://yhzhumath.github.io/Mordell2024/RP.pdf"
      locator: "Finiteness of rational points for smooth curves of genus at least two."
verification: {}
---

## Example

Assume the Axiom of Choice. Let $C/\mathbb Q$ be the smooth proper model of the function field $\mathbb Q(x,y)$ with relation $y^2=x^5-x$. Then $C$ has genus two, contains the four distinct rational points $(0,0)$, $(1,0)$, $(-1,0)$, and the unique point above the pole of $x$, and $C(\mathbb Q)$ is finite. This example does not identify all rational points.

## Example references

[[thm-curves-function-fields-equivalence]]

[[thm-riemann-hurwitz-complete]]

[[lem-curve-different-local-support-and-index-bound]]

[[thm-mordell-faltings-finiteness-for-genus-at-least-two-curves]]

[Milne, Abelian Varieties, Chapter IV §5](https://www.jmilne.org/math/CourseNotes/AV.pdf)

[Faltings–Wüstholz et al., Theorem 4.10](https://yhzhumath.github.io/Mordell2024/RP.pdf)

## Facts & Assumptions

**Given:** AC and the function field $L=\mathbb Q(x,y)$ defined by $y^2=x^5-x$.

[A1] AC is the stated axiom. [[def-axiom-of-choice]]

[F1] A field extension of transcendence degree one over a perfect field, with the base field relatively algebraically closed, has a unique smooth proper geometrically integral curve model. [[thm-curves-function-fields-equivalence]]

[F2] A nonconstant morphism of smooth proper curves is finite and surjective, and its degree is the function-field extension degree. [[thm-nonconstant-morphism-proper-curves-finite-surjective]] [[def-nonconstant-morphism-curves-degree]]

[F3] For a separable degree-two morphism to $\mathbb P^1$, Riemann–Hurwitz gives $2g(C)-2=2(-2)+\deg R$, where the different divisor has coefficient $e-1$ at a tame point of ramification index $e$. [[thm-riemann-hurwitz-complete]] [[lem-curve-different-local-support-and-index-bound]]

[F4] The projective line has genus zero, and a closed point has degree equal to its residue-field degree. [[def-genus-euler-characteristic-curve]] [[def-degree-divisor-proper-curve]]

[L1] [[thm-mordell-faltings-finiteness-for-genus-at-least-two-curves]] states that a smooth proper geometrically connected curve of genus at least two over a number field has finitely many rational points; the current proof status is escalated.

## Proof
1.1 Put $f(x)=x^5-x=x(x^4-1)$. Its five roots $0,1,-1,i,-i$ are distinct: if $f(r)=f'(r)=0$, then $r=0$ or $r^4=1$; at $r=0$ one has $f'(r)=-1$, and at a root of $r^4=1$ one has $f'(r)=4$. Thus $f$ is not a square in $\overline{\mathbb Q}(x)$ because it has simple zeros, and $Y^2-f(x)$ is irreducible over $\overline{\mathbb Q}(x)$. The ring $\overline{\mathbb Q}[x,y]/(y^2-f(x))$ is free over $\overline{\mathbb Q}[x]$ with basis $1,y$ and injects into the field $\overline{\mathbb Q}(x)[y]/(y^2-f(x))$; hence it is a domain. Localizing it by the nonzero polynomials in $x$ shows $\overline{\mathbb Q}\otimes_{\mathbb Q}L$ is a domain. If $L$ contained a nontrivial finite algebraic extension $E/\mathbb Q$, then $\overline{\mathbb Q}\otimes_{\mathbb Q}E$ would be a product of at least two fields because $E/\mathbb Q$ is separable; flatness would inject that ring with zero divisors into the domain $\overline{\mathbb Q}\otimes_{\mathbb Q}L$, a contradiction. Thus $\mathbb Q$ is relatively algebraically closed in $L$. By [F1], $L$ has a smooth proper geometrically integral model $C/\mathbb Q$. [A1, F1, given, algebra]

2.1 The inclusion $\mathbb Q(x)\hookrightarrow L$ defines a nonconstant map $x:C\to\mathbb P^1_{\mathbb Q}$; [F2] makes it finite of degree two. [F4] gives $g(\mathbb P^1)=0$. [F2, F4, step 1.1]

2.2 Over $\overline{\mathbb Q}$, each of the five distinct finite roots of $f$ has valuation one, so the equation $y^2=f(x)$ forces ramification index two above each root. At any other finite value, $f$ is a unit and $2$ is invertible, so the cover is etale there. [F2, step 1.1, algebra]

3.1 At infinity, $v_\infty(f)=-5$. If $Q$ lies above infinity with ramification index $e$, then $2v_Q(y)=e\,v_\infty(f)=-5e$, so $e$ is even; since the map has degree two, $e=2$ and there is one point above infinity with residue degree one. It is a rational point, and it contributes one to the different degree by [F3]. The five finite roots also each contribute one, so $\deg R=6$. [F2, F3, step 2.2, algebra]

4.1 Applying [F3] to the degree-two map and using [F4] gives $2g(C)-2=2(-2)+6=2$, hence $g(C)=2$. [F3, F4, step 2.1, step 3.1, algebra]

5.1 The points with $x=0,1,-1$ and $y=0$ are rational and distinct; step 3.1 supplies the rational point at infinity. Thus $C$ has at least four rational points. By the theorem interface [L1] and $g(C)=2$, the set $C(\mathbb Q)$ is finite. No step enumerates the remaining rational points. [L1, step 3.1, step 4.1] ∎

## Proof status

Escalated because [L1] is the main theorem whose Shafarevich and Parshin inputs remain open.
