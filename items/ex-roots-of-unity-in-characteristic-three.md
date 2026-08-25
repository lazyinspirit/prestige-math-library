---
id: ex-roots-of-unity-in-characteristic-three
kind: example
title: "In characteristic three, $t^{3}-1=(t-1)^{3}$ and $\\mu_6$ coincides with $\\mu_2$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [prop-p-power-roots-of-unity-in-characteristic-p, def-roots-of-unity-in-a-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Cyclotomic Extensions (expository blurb), Section 1"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf"
    - title: "P. L. Clark, Field Theory (course notes/monograph), Section 9.1.1"
      url: "https://web.archive.org/web/2023/http://alpha.math.uga.edu/~pete/FieldTheory.pdf"
pipeline_run: null
---

## Example

Let $K$ be a field of characteristic $3$. Then

$$t^{3}-1=(t-1)^{3},\qquad \mu_3(K)=\{1\},\qquad \mu_6(K)=\mu_2(K)=\{1,-1\},$$

so $t^{6}-1$ has only the two distinct roots $1$ and $-1$ rather than six.

## Facts & Assumptions

**Given:** A field $K$ of characteristic $3$.

[L1] For a fixed integer $k\ge1$, in characteristic $p$ the only $p^{k}$-th root of unity is $1$, and $$t^{p^{k}}-1=(t-1)^{p^{k}}$$ ([[prop-p-power-roots-of-unity-in-characteristic-p]]).

[L2] $\mu_n(K)=\{x\in K:x^{n}=1\}$ ([[def-roots-of-unity-in-a-field]]).

## Verification

**Proof technique:** direct.

1.1 Applying [L1] at $p=3$ and $k=1$ gives $$t^{3}-1=(t-1)^{3}$$ and $\mu_3(K)=\{1\}$. [L1]

1.2 Since $(1)^2=1$ and $(-1)^2=1$, one has $\{1,-1\}\subseteq\mu_2(K)$. Conversely, if $x\in\mu_2(K)$ then $x^{2}=1$, so $x^{2}-1=(x-1)(x+1)=0$ and therefore $x=1$ or $x=-1$ in the field $K$; hence $\mu_2(K)=\{1,-1\}$. [L2, algebra]

2.1 If $x\in\mu_6(K)$ then $(x^{2})^{3}=x^{6}=1$, so $x^{2}\in\mu_3(K)$ by [L2]; step 1.1 gives $x^{2}=1$, hence $x\in\mu_2(K)$ by [L2]. Thus $\mu_6(K)\subseteq\mu_2(K)$. [step 1.1, step 1.2, L2]

2.2 Conversely, if $x\in\mu_2(K)$ then $x^{6}=(x^{2})^{3}=1$, so $x\in\mu_6(K)$. Therefore $\mu_6(K)=\mu_2(K)=\{1,-1\}$. [step 1.2, L2, algebra]

3.1 Using step 1.1, $$ t^{6}-1=(t^{3}-1)(t^{3}+1)=(t-1)^{3}(t+1)^{3}, $$ so its only distinct roots are $1$ and $-1$, exactly the two elements of step 2.2. [step 1.1, step 2.2, algebra] ∎

## Remarks

- **This is why the characteristic hypothesis is load-bearing.** The statement "$|\mu_n|=n$" fails here for two different reasons at once: the polynomial $t^{3}-1$ is inseparable, and the extra cube roots never appear even after passing to a splitting field because the splitting field is already the base field.
