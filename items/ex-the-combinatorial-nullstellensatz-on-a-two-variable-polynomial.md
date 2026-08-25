---
id: ex-the-combinatorial-nullstellensatz-on-a-two-variable-polynomial
kind: example
title: "Applying the Nullstellensatz by hand to $f(x,y)=x^{2}y+xy^{2}+x+y$ over $\\mathbb{Q}$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [thm-combinatorial-nullstellensatz, lem-grid-reduction-of-a-multivariate-polynomial, def-monomials-multidegree-and-total-degree, thm-polynomial-identity-lemma]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "N. Alon, Combinatorial Nullstellensatz"
      url: "https://www.tau.ac.il/~nogaa/PDFS/null.pdf"
pipeline_run: null
---

## Example

Let

$$f(x,y)=x^2y+xy^2+x+y\in\mathbb{Q}[x,y],\qquad S_1=\{0,1,2\},\qquad S_2=\{0,1\}.$$

## Facts & Assumptions

**Given:** the polynomial $f$ and the sets $S_1,S_2$ above.

[L1] If $\deg f=t_1+t_2$, the coefficient of $x^{t_1}y^{t_2}$ is nonzero, and $|S_i|>t_i$, then $f$ is nonzero at some point of $S_1\times S_2$ ([[thm-combinatorial-nullstellensatz]]).

[L2] The grid-reduction lemma reduces degrees without changing the values on the grid ([[lem-grid-reduction-of-a-multivariate-polynomial]]).

## Verification

**Proof technique:** direct.

1.1 The total degree of $f$ is $3=2+1$, and the coefficient of $x^2y$ is $1\ne0$. Since $\lvert S_1\rvert=3>2$ and $\lvert S_2\rvert=2>1$, [L1] applies. [L1, given]

2.1 Indeed $f(1,1)=1+1+1+1=4\ne0$, so the theorem's conclusion is visible directly. [step 1.1]

3.1 Reducing modulo $g_2(y)=y(y-1)$ replaces $y^2$ by $y$, so on the grid the polynomial agrees with $x^2y+xy+x+y$, illustrating [L2]. [L2] ∎
