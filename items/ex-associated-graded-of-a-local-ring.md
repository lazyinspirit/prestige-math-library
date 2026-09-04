---
id: ex-associated-graded-of-a-local-ring
kind: example
title: "The associated graded ring of a regular local ring and of a cusp local ring can be computed explicitly"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-associated-graded-ring-and-module]
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
    - title: "Stacks Project, Section 10.57: Graded modules"
      url: "https://stacks.math.columbia.edu/tag/00JR"
    - title: "Craig Huneke and Irena Swanson, Integral Closure, Chapter 1"
      url: "https://www.ams.org/books/surv/336/"
---

## Example

Let
$$ R_1:=k[x,y]_{(x,y)} $$
with maximal ideal $\mathfrak m=(x,y)$. Then
$$ \operatorname{gr}_{\mathfrak m}(R_1)\cong k[X,Y], $$
because $\mathfrak m^n/\mathfrak m^{n+1}$ has basis given by degree-$n$
monomials in the initial classes of $x$ and $y$.

For the cusp local ring
$$ R_2:=k[x,y]_{(x,y)}/(y^2-x^3), $$
the initial form of the relation has degree $2$, so
$$ \operatorname{gr}_{\mathfrak m}(R_2)\cong k[X,Y]/(Y^2). $$

## Facts & Assumptions

**Given:** A field $k$, the local rings $R_1$ and $R_2$ above, and the
maximal-ideal filtrations.

[L1] The associated graded ring is
$$ \operatorname{gr}_{\mathfrak m}(R)=\bigoplus_{n\ge0}\mathfrak m^n/\mathfrak m^{n+1} $$
([[def-associated-graded-ring-and-module]]).

## Verification

**Proof technique:** direct.


1.1 In $R_1$, the classes of $x$ and $y$ in $\mathfrak m/\mathfrak m^2$ generate every graded piece: the images of the degree-$n$ monomials $x^{n-i}y^i$ form a basis of $\mathfrak m^n/\mathfrak m^{n+1}$. Therefore the map $k[X,Y]\to\operatorname{gr}_{\mathfrak m}(R_1)$ sending $X,Y$ to the initial classes of $x,y$ is a graded isomorphism. [L1, given, algebra]


1.2 In $R_2$, the relation $y^2-x^3$ lies in $\mathfrak m^2$ and its lowest-degree term is $y^2$. Hence the only initial relation in degree $2$ is $Y^2=0$. As in the remaining monomials $X^n$ and $X^{n-1}Y$ survive and span the graded pieces, so $ \operatorname{gr}_{\mathfrak m}(R_2)\cong k[X,Y]/(Y^2). $ [L1, algebra]


2.1 These explicit computations exhibit the regular local and cusp cases. [algebra] ∎
