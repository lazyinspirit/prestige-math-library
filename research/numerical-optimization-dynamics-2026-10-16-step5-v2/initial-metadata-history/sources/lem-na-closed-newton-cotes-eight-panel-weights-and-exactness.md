---
id: lem-na-closed-newton-cotes-eight-panel-weights-and-exactness
kind: lemma
title: "Exact weights and degree-nine exactness of the eight-panel rule"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: clenshaw-curtis-and-extrapolation-quadrature
dependency_level: 4
deps: [def-na-closed-newton-cotes-eight-panel-rule, def-cardinal-polynomial-interpolation, lem-cardinal-basis-degree-and-values, thm-cardinal-polynomial-interpolant-exists-uniquely, thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots, thm-monotone-change-of-variable-for-riemann-integrals, thm-ftc-second-part, thm-continuous-implies-integrable, thm-linearity-of-the-integral, lem-derivative-of-a-power]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None. The finite polynomial identities and integrations use no choice.
sources:
  references:
    - title: "L. Ridgway Scott, Numerical Analysis, 2nd ed., §13.1.1"
      url: "https://www.math.utah.edu/~feldman/teaching_files/F18/natwo.pdf"
      locator: "Printed pp. 217–219, interpolatory Newton–Cotes rules."

    - title: "NIST Digital Library of Mathematical Functions, §3.5(iv), Interpolatory Quadrature Rules"
      url: "https://dlmf.nist.gov/3.5"
      locator: "Full-text section §3.5(iv), equation 3.5.15 and accompanying text on integrated Lagrange interpolants and closed Newton–Cotes rules."
---

## Statement

For the nodes $x_j=-1+j/4$ and rule $Q_8$ of [[def-na-closed-newton-cotes-eight-panel-rule]], the weights are the integrals of the degree-eight Lagrange cardinal polynomials. Interpreting polynomial inputs by their evaluation functions, the rule is exact for the zero polynomial and every nonzero formal polynomial of degree at most $9$.

## Facts & Assumptions

**Given:** The nine equally spaced nodes $x_j=-1+j/4$, their weights $w_j$, and the finite rule $Q_8$.

[F1] [[def-na-closed-newton-cotes-eight-panel-rule]]: $Q_8(f)=\sum_{j=0}^8w_jf(x_j)$ with the displayed symmetric rational weights.

[F2] [[def-cardinal-polynomial-interpolation]] and [[lem-cardinal-basis-degree-and-values]]: each cardinal polynomial $\ell_j$ has degree $8$, equals $1$ at $x_j$, equals $0$ at the other eight nodes, and is $\prod_{m\ne j}(x-x_m)/(x_j-x_m)$; every finite cardinal sum is zero or has degree at most $8$.

[F3] [[thm-cardinal-polynomial-interpolant-exists-uniquely]] and [[thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots]]: the degree-at-most-eight interpolant at nine distinct nodes is unique; equivalently, two such polynomials agreeing at all nine nodes are equal.

[F4] [[thm-monotone-change-of-variable-for-riemann-integrals]]: under $t=4(x+1)$, $\int_{-1}^1\ell_j(x)\,dx=\frac14\int_0^8\ell_j((t-4)/4)\,dt$.

[F5] [[lem-derivative-of-a-power]], [[thm-ftc-second-part]], [[thm-continuous-implies-integrable]], and [[thm-linearity-of-the-integral]]: each polynomial monomial is integrable, its integral is obtained from its power antiderivative, and finite sums integrate termwise.

## Proof

1.1 Put $P_j(t)=\prod_{0\le m\le8,\,m\ne j}(t-m)$ and $D_j=\prod_{m\ne j}(j-m)$. Substituting $t=4(x+1)$ into [F2] cancels the eight factors $1/4$ between numerator and denominator, giving $\ell_j((t-4)/4)=P_j(t)/D_j$. For $j=0,1,2,3,4$, the pairs $(D_j;\text{coefficients of }P_j(t)\text{ from }t^0\text{ upward})$ are $(40320;[40320,-109584,118124,-67284,22449,-4536,546,-36,1])$, $(-5040;[0,-40320,69264,-48860,18424,-4025,511,-35,1])$, $(1440;[0,-20160,44712,-36706,15289,-3580,478,-34,1])$, $(-720;[0,-13440,32048,-28692,12864,-3195,447,-33,1])$, and $(576;[0,-10080,24876,-23312,10993,-2864,418,-32,1])$. These coefficients follow by multiplying the eight factors, and each denominator is the product of the corresponding integer differences. [given, F2, F4, algebra]

2.1 Integrating each coefficient list by [F5] gives $\int_0^8P_j(t)/D_j\,dt=(3956,23552,-3712,41984,-18160)_j/14175$ for $j=0,1,2,3,4$. The factor $1/4$ in [F4] therefore gives $\int_{-1}^1\ell_j(x)\,dx=(989,5888,-928,10496,-4540)_j/14175$, exactly the first five weights in [F1]. Reflection $x\mapsto-x$ sends node $x_j$ to $x_{8-j}$ and, by the product formula in [F2], sends $\ell_j$ to $\ell_{8-j}$; the substitution preserves the integral. Thus the remaining four cardinal integrals equal the corresponding symmetric weights in [F1]. [given, F1, F2, F4, F5, step 1.1, algebra]

3.1 For the zero polynomial and every nonzero formal polynomial $p$ of degree at most $8$, its cardinal interpolant $\sum_{j=0}^8p(x_j)\ell_j$ is the evaluation of a formal polynomial of degree at most $8$ or is zero, and it agrees with the evaluation function of $p$ at all nine nodes by [F2]. Uniqueness [F3] makes the two evaluation functions equal. Integrating this finite identity and using step 2.1 and [F5] yields $\int_{-1}^1p=\sum_jp(x_j)\int_{-1}^1\ell_j=Q_8(p)$. [given, F1, F2, F3, F5, step 2.1, algebra]

4.1 The nodes and weights in [F1] occur in equal pairs under $x\mapsto-x$, so $Q_8(x^9)=0$ by cancellation of the paired terms and the zero central term. The integral of the odd polynomial $x^9$ over $[-1,1]$ is zero by the same substitution. The zero polynomial, and each nonzero formal polynomial of degree at most $9$, has the form $p+cX^9$ for a zero polynomial or nonzero formal polynomial $p$ of degree at most $8$ and a scalar $c$; step 3.1 and linearity therefore prove exactness through degree $9$. [given, F1, F5, step 3.1, algebra] ∎
