---
id: lem-formal-tangent-and-artanh-series-are-compositional-inverses
kind: lemma
title: "The formal hyperbolic tangent and artanh series are inverse, with the artanh derivative"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
aliases: []
dependency_level: 1
deps:
  - def-formal-hyperbolic-tangent-series
  - def-formal-exponential-logarithm-and-powers
  - thm-formal-exponential-logarithm-identities
  - thm-formal-compositional-inverse
  - prop-formal-derivative-algebra
  - def-formal-series-composition
  - thm-formal-composition-laws
  - thm-formal-power-series-unit-criterion
  - def-formal-power-series-derivative
  - thm-summable-families-and-rearrangement
  - def-formal-power-series-and-coefficient-extraction
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jacob Lurie, The Hirzebruch Signature Formula (Lecture 25, Harvard Math 287x notes)"
      url: "https://people.math.harvard.edu/~lurie/287xnotes/Lecture25.pdf"
      locator: "Lecture 25, PDF p. 2: the series H f(H) = tanh H is invertible with inverse tanh^{-1}"
    - title: "Tom Weston, An Introduction to Cobordism Theory (lecture notes, Stanford)"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "section 19, printed p. 37: the substitution u = tanh z with dz = du/(1-u^2) is the inverse-series and derivative relation"
    - title: "John Milnor and James Stasheff, Characteristic Classes (re-typeset scan; original pagination)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "section 19, original p. 226: the coefficient computation uses the substitution u = tanh z"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $T$ and $A$ be the formal series of
[[def-formal-hyperbolic-tangent-series]]. Then in
$\mathbb Q\llbracket\cdot\rrbracket$,
$$T\circ A=z,\qquad A\circ T=x,$$
so $T$ and $A$ are mutually inverse formal power series; moreover
$$A'(z)=\frac1{1-z^2}=\sum_{j\ge0}z^{2j},\qquad T'(x)=1-T(x)^2,$$
and $Q(x)=x/T(x)$ has the expansion
$Q(x)=1+x^2/3-x^4/45+O(x^6)$.

## Facts & Assumptions

**Given:** The series $T(x)=(\exp x-\exp(-x))/(\exp x+\exp(-x))$ and $A(z)=\sum_{j\ge0}z^{2j+1}/(2j+1)$ of [[def-formal-hyperbolic-tangent-series]], with $S=T/x$, $Q=x/T=1/S$.

[F1] $A(z)=\tfrac12(\log(1+z)-\log(1-z))$ holds coefficientwise: the logarithmic series has $\tfrac12((-1)^{n-1}+1)z^n/n$, which vanishes for even $n$ and equals $z^{2j+1}/(2j+1)$ for $n=2j+1$. This is the recorded relation between the two definitions ([[def-formal-hyperbolic-tangent-series]], [[thm-formal-exponential-logarithm-identities]]).

[F2] In a commutative $\mathbb Q$-algebra, $\exp(u+v)=\exp(u)\exp(v)$, $\exp$ and $\log$ are mutually inverse, and $(1+u)^c=\exp(c\log(1+u))$ ([[thm-formal-exponential-logarithm-identities]]).

[F3] A series $f\in xR\llbracket x\rrbracket$ has a two-sided compositional inverse if and only if its linear coefficient is a unit, and then that inverse is unique ([[thm-formal-compositional-inverse]]).

[F4] Composition is associative when the inner series have zero constant coefficient: $(f\circ g)\circ h=f\circ(g\circ h)$, and $f\circ x=f$, $x\circ f=f$ ([[thm-formal-composition-laws]], [[def-formal-series-composition]]).

[F5] The formal derivative is additive and satisfies the product, power, quotient and chain rules $D(fg)=(Df)g+fDg$, $D(f^m)=mf^{m-1}Df$ for $m\ge1$, $D(f/g)=((Df)g-fDg)/g^2$ for a unit $g$, and $D(f\circ g)=(Df\circ g)Dg$ ([[prop-formal-derivative-algebra]], [[def-formal-power-series-derivative]]).

[F6] A series is a unit exactly when its constant coefficient is a unit, and $\sum_{j\ge0}(-u)^j$ is the inverse of $1+u$ ([[thm-formal-power-series-unit-criterion]]).

[F7] Summable families may be regrouped and reindexed, and infinite products of factors $1+u_k$ with $\operatorname{ord}_x(u_k)\to+\infty$ may be regrouped ([[thm-summable-families-and-rearrangement]]).

## Proof

**Proof technique:** direct; exponentiate $A$, compare the defining quotient of $T$, then differentiate and expand.

1.1 The identity $A(z)=\tfrac12(\log(1+z)-\log(1-z))$ holds by [F1]. [given, F1]

1.2 Expansion of $Q$: from $\exp(\pm x)$ with coefficients $(\pm1)^n/n!$ ([[def-formal-exponential-logarithm-and-powers]]), the even and odd parts are $\exp x+\exp(-x)=2+x^2+x^4/12+O(x^6)$ and $\exp x-\exp(-x)=2x+x^3/3+x^5/60+O(x^7)$. Hence $S=T/x=(2+x^2/3+x^4/60+O(x^6))/(2+x^2+x^4/12+O(x^6))=(1+x^2/6+x^4/120+O(x^6))(1-x^2/2+(1/4-1/24)x^4+O(x^6))=1-x^2/3+2x^4/15+O(x^6)$, and inverting this unit by [F6] gives $Q=1/S=1+x^2/3+(1/9-2/15)x^4+O(x^6)=1+x^2/3-x^4/45+O(x^6)$. [given, F6, F7, algebra]

2.1 Exponentiating: by [F2], $\exp(A)=\exp(\tfrac12\log(1+z))\exp(-\tfrac12\log(1-z))=(1+z)^{1/2}(1-z)^{-1/2}$ and similarly $\exp(-A)=(1+z)^{-1/2}(1-z)^{1/2}$, where the binomial powers are the series of [F2]. [step 1.1, F2]

2.2 Derivative of $A$: differentiating $A=\tfrac12(\log(1+z)-\log(1-z))$ coefficientwise, $D\log(1+z)=\sum_{n\ge1}(-1)^{n-1}z^{n-1}=\sum_{j\ge0}(-z)^j=(1+z)^{-1}$ and $D\log(1-z)=-(1-z)^{-1}$ by [F5] and [F6], so $A'=\tfrac12\bigl((1+z)^{-1}+(1-z)^{-1}\bigr)=\tfrac12\bigl((1-z)+(1+z)\bigr)/(1-z^2)=1/(1-z^2)$; and $(1-z^2)\sum_{j\ge0}z^{2j}=1$ coefficientwise, so $1/(1-z^2)=\sum_{j\ge0}z^{2j}$ by uniqueness of inverses in [F6]. [step 1.1, F5, F6, F7, algebra]

3.1 Both $\exp(A)$ and $\exp(-A)$ have constant term $1$, so the denominator $\exp(A)+\exp(-A)$ has constant term $2$, a unit of $\mathbb Q$; the quotient defining $T(A)$ is therefore well defined by [F6]. Multiplying numerator and denominator by the unit $(1+z)^{1/2}(1-z)^{1/2}$ turns it into $\bigl((1+z)-(1-z)\bigr)/\bigl((1+z)+(1-z)\bigr)=2z/2=z$, so $T\circ A=z$. [step 2.1, F2, F6]

4.1 The series $T$ has linear coefficient $1$, a unit of $\mathbb Q$, so by [F3] it has a unique two-sided compositional inverse $g$, with $g\circ T=x=T\circ g$. Associativity [F4] applied to the inner series $T,A,g$ (all with zero constant term) gives $A=(g\circ T)\circ A=g\circ(T\circ A)=g\circ z=g$, so $A=g$ and $A\circ T=x$. [step 3.1, F3, F4]

4.2 Derivative of $T$: the termwise derivative of $\exp(\pm x)$ is $\pm\exp(\pm x)$ because $D(\sum_n(\pm1)^nx^n/n!)=\sum_{n\ge1}(\pm1)^nx^{n-1}/(n-1)!$; with $N=\exp x-\exp(-x)$ and $D_0=\exp x+\exp(-x)$ this gives $N'=D_0$ and $D_0'=N$. The quotient rule [F5] applied to $T=N/D_0$ (with $D_0$ a unit) gives $T'=(N'D_0-ND_0')/D_0^2=(D_0^2-N^2)/D_0^2=1-T^2$. [step 3.1, F5, algebra]

5.1 Steps 3.1 and 4.1 give $T\circ A=z$ and $A\circ T=x$; steps 2.2 and 4.2 give the two derivative formulas; and step 1.2 gives the recorded expansion of $Q=x/T$. All identities are coefficientwise identities between formal series; the zero series, the case of a single variable, and the degenerate cases $z=0$ are included as the constant coefficients of the same computations, and no analytic convergence or choice principle is involved. [step 3.1, step 1.2, step 4.1, step 4.2, step 2.2] ∎
