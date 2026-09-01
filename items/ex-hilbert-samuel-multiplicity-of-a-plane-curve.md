---
id: ex-hilbert-samuel-multiplicity-of-a-plane-curve
kind: example
title: "The Hilbert-Samuel multiplicity of a plane-curve singularity is read from its associated graded ring"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-associated-graded-ring-and-module, def-hilbert-samuel-multiplicity, thm-existence-of-hilbert-samuel-polynomial]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Craig Huneke and Irena Swanson, Integral Closure, Chapter 1"
      url: "https://www.ams.org/books/surv/336/"
    - title: "Stacks Project, Section 10.59: Noetherian local rings"
      url: "https://stacks.math.columbia.edu/tag/00K4"
---

## Example

Let
$$
R:=k[x,y]_{(x,y)}/(y^2-x^3)
$$
with maximal ideal $\mathfrak m=(x,y)/(y^2-x^3)$. Then
$$
\operatorname{gr}_{\mathfrak m}(R)\cong k[X,Y]/(Y^2),
$$
so the homogeneous piece of degree $n\ge1$ has basis $X^n,X^{n-1}Y$ and
dimension $2$. Consequently
$$
\chi_{\mathfrak m,R}(n)=1+\sum_{j=1}^n2=2n+1
$$
for $n\ge1$, and therefore
$$
e_{\mathfrak m}(R)=2.
$$

## Facts & Assumptions

**Given:** A field $k$, the cusp local ring $R$ above, and its maximal ideal
$\mathfrak m$.

[L1] The associated graded ring packages the quotients
$\mathfrak m^n/\mathfrak m^{n+1}$, and the Hilbert-Samuel function is their
cumulative length
([[def-associated-graded-ring-and-module]], [[thm-existence-of-hilbert-samuel-polynomial]]).

[L2] Hilbert-Samuel multiplicity is the leading coefficient scaled by the
factorial ([[def-hilbert-samuel-multiplicity]]).

## Verification

**Proof technique:** direct.


1.1 The initial form of $y^2-x^3$ has degree $2$, namely $Y^2$, so $ \operatorname{gr}_{\mathfrak m}(R)\cong k[X,Y]/(Y^2). $ Thus the degree-$0$ piece has dimension $1$, and every degree-$n\ge1$ piece has basis $X^n,X^{n-1}Y$. [L1, given, algebra]


1.2 Therefore $\ell_R(\mathfrak m^0/\mathfrak m)=1$ and $ \ell_R(\mathfrak m^n/\mathfrak m^{n+1})=2\qquad(n\ge1). $ Summing these lengths as in [L1] gives $ \chi_{\mathfrak m,R}(n)=2n+1 $ for $n\ge1$. [L1, algebra]


1.3 The eventual polynomial is $2n+1$, so its degree is $1$ and the leading coefficient is $2$. Hence [L2] gives $e_{\mathfrak m}(R)=2$. [L2]


2.1 Thus the multiplicity of the cusp is read directly from its tangent-cone graded ring. [algebra] ∎
