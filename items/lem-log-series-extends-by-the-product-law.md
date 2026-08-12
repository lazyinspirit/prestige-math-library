---
id: lem-log-series-extends-by-the-product-law
kind: lemma
title: "The Mercator series, its value at 1 and the product law determine log on all positive reals, while the series alone is only local"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-log-one-plus-x-power-series, thm-natural-logarithm-laws,
       thm-of-archimedean, def-integer-power, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Henry Ricardo, The Equivalence of Definitions of the Natural Logarithm Function"
      url: "https://www.researchgate.net/publication/359264337_The_Equivalence_of_Definitions_of_the_Natural_Logarithm_Function"
pipeline_run: null
---

## Statement

There is exactly one function $f:(0,\infty)\to\mathbb R$ such that

$$f(xy)=f(x)+f(y)\quad(x,y>0)$$

and

$$f(1+u)=\sum_{n=1}^{\infty}(-1)^{n+1}\frac{u^n}{n}\qquad(-1<u\leq1).$$

That function is the natural logarithm. The series condition itself is local;
the product law is the continuation rule.

## Facts & Assumptions

**Given:** A function $f$ satisfying the two displayed conditions.

[L1] For $-1<u\leq1$,
$\log(1+u)=\sum_{n=1}^{\infty}(-1)^{n+1}u^n/n$
([[thm-log-one-plus-x-power-series]]).

[L2] The natural logarithm satisfies
$\log(xy)=\log x+\log y$
([[thm-natural-logarithm-laws]]).

[L3] For every real $r$, there is a natural $n\geq1$ with $r<n$
([[thm-of-archimedean]]).

[F1] Natural powers satisfy $x^0=1$ and $x^{n+1}=x^nx$
([[def-integer-power]]).

[L4] The induction principle proves a property for every natural once the base
and successor steps are established ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 The published natural logarithm satisfies the local series condition by [L1] and the product law by [L2], so an extension exists. [L1, L2]
1.2 From [F1], induction gives $2^n\geq n+1$ for every natural $n$: equality holds at $n=0$, and $2^{n+1}=2\cdot2^n\geq2(n+1)\geq n+2$. [F1, L4, algebra]
1.3 Repeated use of the product law, justified by induction, gives $f(2^k)=kf(2)$, and the series condition at $u=1$ determines $f(2)$. [F1, L4, given]
2.1 Given $x>0$, use [L3] to choose $k\geq1$ with $x<k$. Then $2^k\geq k+1>k>x$ by step 1.2. Put $y=x/2^k$ and $u=y-1$; thus $0<y<1$ and $-1<u<0$. [L3, step 1.2, algebra]
3.1 Since $x=2^ky=2^k(1+u)$, the product law and the local series condition force $$ f(x)=k f(2)+f(1+u) =k\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}n +\sum_{n=1}^{\infty}(-1)^{n+1}\frac{u^n}{n}. $$ [step 2.1, step 1.3, given]
4.1 Formula 3.1 forces the value of any extension at every $x>0$, so at most one extension exists. Together with step 1.1, that unique extension is $\log$. [step 3.1, step 1.1] ∎
