---
id: fs-l-one-convolution-is-defined-at-every-point
kind: false-statement
title: "FALSE: if $f,g \\in L^1(\\mathbb{R}^n)$, then $f*g(x)$ is defined for every $x$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-07-receipts.jsonl (fs-l-one-convolution-is-defined-at-every-point). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Walter Rudin, Real and Complex Analysis, 3rd ed."
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---
## Statement

**False claim.** If $f,g \in L^1(\mathbb{R}^n)$, then $(f*g)(x)$ is defined for
every $x \in \mathbb{R}^n$.

## Facts & Assumptions

**Given:** The one-dimensional functions $$ f(x)=g(x):=\begin{cases}\dfrac{1}{|x|(\log(e/|x|))^2},&0<|x|<1/2,\\ 0,&\text{otherwise}.\end{cases} $$

## Refutation

**Proof technique:** direct.

1.1 The function $x \mapsto 1/(|x|(\log(e/|x|))^2)$ is integrable near $0$ by the substitution $u=\log(e/|x|)$, whose tail is a constant multiple of $\int^\infty u^{-2}\,du$. Hence $f,g\in L^1(\mathbb R)$. [given, algebra]

2.1 At $x=0$ one has [step 1.1, algebra] $$ \int_{\mathbb{R}} |f(-y)g(y)|\,dy = \int_{-1/2}^{1/2} \frac{dy}{|y|^2(\log(e/|y|))^4}. $$ The single point $y=0$ is irrelevant to Lebesgue integrability, so it is enough to inspect the punctured interval $(0,1/2)$. There the substitution $u=\log(e/y)$ gives $y=e^{1-u}$ and $dy=-e^{1-u}du$, hence $$ \int_0^{1/2}\frac{dy}{y^2(\log(e/y))^4} = \int_{\log(2e)}^\infty \frac{e^{u-1}}{u^4}\,du = \infty. $$ Thus $(f*g)(0)$ is not defined as an absolutely convergent Lebesgue integral. [step 1.1, algebra]

3.1 Therefore the convolution of two $L^1$ functions need not be defined at every point. [step 1.1, step 2.1] ∎
