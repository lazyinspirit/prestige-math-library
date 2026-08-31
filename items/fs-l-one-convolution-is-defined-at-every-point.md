---
id: fs-l-one-convolution-is-defined-at-every-point
kind: false-statement
title: "FALSE: if $f,g \\in L^1(\\mathbb{R}^n)$, then $f*g(x)$ is defined for every $x$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound]
landmark: false
proof_strategy: "Use the A-page theorem's explicit warning that the conclusion is only almost-everywhere. The companion counterexample is the standard singular overlap from the design's $L^2$ witness family."
verification:
  audited: 2026-09-01
  precheck: pass
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

**Given:** The one-dimensional functions
$$ f(x)=g(x):=\begin{cases}\dfrac{1}{|x|(\log(e/|x|))^2},&0<|x|<1/2,\\ 0,&\text{otherwise}.\end{cases} $$

[L1] The $L^1$ convolution theorem guarantees only almost-everywhere existence ([[thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound]]).

## Refutation

**Proof technique:** direct.

1.1 The function $x \mapsto 1/(|x|(\log(e/|x|))^2)$ is integrable near $0$, so [L1, given, algebra] $f,g \in L^1(\mathbb{R})$. [L1, given, algebra]

2.1 At $x=0$ one has [step 1.1, algebra] $$ \int_{\mathbb{R}} |f(-y)g(y)|\,dy = \int_{-1/2}^{1/2} \frac{dy}{|y|^2(\log(e/|y|))^4}. $$ The single point $y=0$ is irrelevant to Lebesgue integrability, so it is enough to inspect the punctured interval $(0,1/2)$. There the substitution $u=\log(e/y)$ gives $y=e^{1-u}$ and $dy=-e^{1-u}du$, hence $$ \int_0^{1/2}\frac{dy}{y^2(\log(e/y))^4} = \int_{\log(2e)}^\infty \frac{e^{u-1}}{u^4}\,du = \infty. $$ Thus $(f*g)(0)$ is not defined as an absolutely convergent Lebesgue integral. [step 1.1, algebra]

3.1 Therefore the convolution of two $L^1$ functions need not be defined at [L1, step 2.1] every point; [L1] correctly states only almost-everywhere existence. [L1, step 2.1] ∎
