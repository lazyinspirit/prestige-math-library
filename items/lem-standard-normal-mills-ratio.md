---
id: lem-standard-normal-mills-ratio
kind: lemma
title: Standard-normal Mills bounds and logarithmic tail asymptotics
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-standard-normal-and-normal-laws
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "AC is inherited through the definition of the standard-normal law; the tail inequalities and integration by parts add no choice."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, `7.12(i), Equation (7.12.1)"
      url: "https://dlmf.nist.gov/7.12"
---

## Statement

Let $\phi(x)=(2\pi)^{-1/2}e^{-x^2/2}$ be the standard-normal density and $\bar\Phi(x)=\int_x^\infty\phi(t)\,dt$. For every $x>0$,
$
\frac{x}{x^2+1}\phi(x)\le \bar\Phi(x)\le\frac{\phi(x)}{x}.
$
Consequently $\bar\Phi(x)\sim\phi(x)/x$ and $\log\bar\Phi(x)\sim -x^2/2$ as $x\to\infty$.

## Facts & Assumptions

**Given:** The standard-normal density $\phi$ from [[def-standard-normal-and-normal-laws]], $x>0$, and the tail integral in the Statement.

[F1] [[def-standard-normal-and-normal-laws]]: $N(0,1)$ has density $\phi(t)=e^{-t^2/2}/\sqrt{2\pi}$ with total mass one.

[A1] [[def-axiom-of-choice]]: AC is assumed only because the cited standard-normal definition uses it through its normalization suppliers.

## Proof

1.1 Since $\phi'(t)=-t\phi(t)$, for $t\ge x>0$ we have $\phi(t)\le t\phi(t)/x$. Integrating and using $\int_x^\infty t\phi(t)\,dt=\phi(x)$, obtained by integrating $-\phi'$, gives $\bar\Phi(x)\le\phi(x)/x$. [F1, A1, given, algebra]

2.1 Integration by parts on $[x,R]$, followed by $R\to\infty$, gives $ \bar\Phi(x)=\frac{\phi(x)}x-\int_x^\infty\frac{\phi(t)}{t^2}\,dt. $ The remainder is at most $\bar\Phi(x)/x^2$, hence $\bar\Phi(x)(1+x^{-2})\ge\phi(x)/x$, which is the stated lower bound. [F1, step 1.1, given, algebra]

3.1 Dividing the two bounds by $\phi(x)/x>0$ traps the ratio $\bar\Phi(x)/(\phi(x)/x)$ between $x^2/(x^2+1)$ and $1$, so it tends to $1$. Taking logarithms gives $\log\bar\Phi(x)=-x^2/2-\log x-\tfrac12\log(2\pi)+o(1)$; division by $-x^2/2$ yields the asserted logarithmic limit. [step 1.1, step 2.1, algebra] ∎
