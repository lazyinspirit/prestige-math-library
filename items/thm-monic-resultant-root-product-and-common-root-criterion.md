---
id: thm-monic-resultant-root-product-and-common-root-criterion
kind: theorem
title: "For monic $f$, $\\operatorname{Res}(f,g)=\\prod_i g(\\alpha_i)$ and it vanishes exactly when $f$ and $g$ have a common root"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-monic-resultant, cor-vietas-formulas-for-a-split-monic-polynomial, def-polynomial-evaluation-and-root, thm-splitting-fields-exist-for-nonzero-polynomials]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, Proposition 4.35"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement

Let $F$ be a field, let $f(t)=t^n+a_1t^{n-1}+\cdots+a_n\in F[t]$ be monic, and let $g\in F[t]$. If $f$ splits in an extension with roots $\alpha_1,\ldots,\alpha_n$, then

$$\operatorname{Res}(f,g)=\prod_{i=1}^ng(\alpha_i).$$

If $n>0$, this value is zero if and only if $f$ and $g$ have a common root in some extension field of $F$. For $n=0$, $f=1$ and the resultant is $1$.

## Facts & Assumptions

**Given:** A field $F$, a monic polynomial $f$ of degree $n$, and a polynomial $g$.

[L1] The monic resultant is obtained by expressing the symmetric formal product $\prod_i g(x_i)$ in the elementary symmetric polynomials and substituting the signed coefficients of $f$ ([[def-monic-resultant]]).

[L2] Vieta's formulas identify those elementary symmetric values with the signed coefficients of a split monic polynomial ([[cor-vietas-formulas-for-a-split-monic-polynomial]]).

[L3] An element is a root of $g$ exactly when its evaluation $g(a)$ is zero ([[def-polynomial-evaluation-and-root]]).

[L4] Every nonzero polynomial over a field has a splitting field ([[thm-splitting-fields-exist-for-nonzero-polynomials]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], write the formal symmetric product as $Q_g(e_1,\ldots,e_n)$. Evaluating at the roots of $f$ and using [L2] gives $\operatorname{Res}(f,g)=\prod_i g(\alpha_i)$. [given, L1, L2]

2.1 Assume $n>0$. In a splitting field of the nonzero polynomial $f$ and, when $g\ne0$, of $fg$, the product in step 1.1 is zero exactly when $g(\alpha_i)=0$ for some $i$, since the extension is a field. [step 1.1, L4, algebra]

3.1 By [L3], the condition in step 2.1 says exactly that some root $\alpha_i$ of $f$ is also a root of $g$. If $g=0$, every root of the positive-degree polynomial $f$ is common and every factor in step 1.1 is zero. [step 2.1, L3]

4.1 If $n=0$, then $f=1$ and [L1] defines the resultant as the empty product $1$. [L1] ∎
