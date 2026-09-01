---
id: ex-completion-of-a-domain-not-a-domain
kind: example
title: "A Noetherian domain can have a completion that is not a domain"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-noetherian-ring-quotients-and-localisations, thm-noetherianity-of-adic-completion]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., completion chapter pathology example"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, completion chapter background"
      url: "https://stacks.math.columbia.edu/tag/0BNH"
pipeline_run: null
---

## Example

Let $k$ be a field of characteristic different from $2$, and set
$$
A:=k[x,y]_{(x,y)}/(y^2-x^2-x^3).
$$
Then $A$ is a Noetherian local domain, but its completion at the maximal ideal
is not a domain.

## Facts & Assumptions

**Given:** A field $k$ with $\operatorname{char}(k)\ne 2$.

[L1] Quotients and localizations of Noetherian rings are Noetherian
([[thm-noetherian-ring-quotients-and-localisations]]).

[L2] Completion of a Noetherian ring is Noetherian
([[thm-noetherianity-of-adic-completion]]).

## Verification

**Proof technique:** direct.

1.1 The polynomial ring $k[x,y]$ is Noetherian, so [L1] makes $k[x,y]_{(x,y)}$ and its quotient $A$ Noetherian. The quotient is local because it is a quotient of the local ring $k[x,y]_{(x,y)}$. [L1, algebra]

1.2 In the formal power-series ring $k[\![x]\!]$, the binomial series gives an element $$u=(1+x)^{1/2}\in k[\![x]\!]$$ with $u^2=1+x$. Consequently, in $k[\![x,y]\!]$, $$y^2-x^2-x^3=(y-xu)(y+xu).$$ Neither factor is a unit because each has zero constant term. [given, algebra]

2.1 The polynomial $$f(y):=y^2-x^2-x^3=y^2-x^2(1+x)$$ is irreducible in $k(x)[y]$: it is quadratic in $y$, so reducibility would force $x^2(1+x)$ to be a square in $k(x)$, but $1+x$ is not a square in $k(x)$ because its divisor has the simple zero $x=-1$. Hence the ideal $(f)$ is prime in $k[x,y]$, and localizing preserves primality. Therefore $A$ is a domain. [step 1.1, algebra]

2.2 For every $n$, localization away from $(x,y)$ does not change the quotient modulo $(x,y)^n$, so $$A/\mathfrak m^n\cong k[x,y]/\bigl((x,y)^n,f\bigr).$$ Passing to the inverse limit identifies the completion coefficientwise with $$\widehat A\cong k[\![x,y]\!]/(f).$$ Let $\alpha,\beta$ be the images of $y-xu$ and $y+xu$ in $\widehat A$. Their product is $0$ by step 1.2. If $\alpha=0$, then in the domain $k[\![x,y]\!]$ one would have $$(y-xu)=(y-xu)(y+xu)h$$ for some $h$, hence $$1=(y+xu)h,$$ which is impossible because $y+xu$ lies in the maximal ideal. So $\alpha\ne 0$, and similarly $\beta\ne 0$. Thus $\widehat A$ has nonzero zero divisors and is not a domain. [L2, step 1.2, algebra]

3.1 Therefore a Noetherian local domain can have a completion that is not a domain. [step 2.1, step 2.2] ∎
