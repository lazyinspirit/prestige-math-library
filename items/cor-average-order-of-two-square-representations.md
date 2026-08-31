---
id: cor-average-order-of-two-square-representations
kind: corollary
title: "The average order of the two-square representation count is pi"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-summatory-function-and-average-order,
       thm-dirichlet-hyperbola-method,
       thm-two-square-representation-count,
       thm-gregory-leibniz-series-for-pi-from-a-finite-remainder]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Karl-Dieter Crisman, Number Theory: In Context and Interactive"
      url: "https://math.gordon.edu/ntic/nticoneside.pdf"
pipeline_run: null
---

## Statement

For every real $x\ge1$,

$$
\sum_{n\le x}r_2(n)=\pi x+O(\sqrt x).
$$

Consequently the constant function $\pi$ is an average order of $r_2$.

## Facts & Assumptions

**Given:** A real $x\ge1$, $N:=\lfloor\sqrt x\rfloor$, and $G(y):=\sum_{n\le y}\chi_4(n)$.

## Proof

**Proof technique:** direct.

1.1 By [[thm-two-square-representation-count]], $r_2=4(\mathbf1*\chi_4)$. Applying [[thm-dirichlet-hyperbola-method]] with $f=\mathbf1$, $g=\chi_4$, and $U=V=\sqrt x$ gives $$\sum_{n\le x}r_2(n)=4\left(\sum_{a\le N}G(x/a)+\sum_{b\le N}\chi_4(b)\left\lfloor\frac xb\right\rfloor-NG(N)\right).$$ [given, algebra]

2.1 The values of $\chi_4$ repeat as $1,0,-1,0$, so every complete block of length $4$ has sum $0$ and every initial partial block has sum $0$ or $1$. Hence $G(y)=O(1)$ uniformly in $y$, and step 1.1 gives $$\sum_{a\le N}G(x/a)=O(N),\qquad NG(N)=O(N).$$ Also $\lfloor x/b\rfloor=x/b+O(1)$, so $$\sum_{b\le N}\chi_4(b)\left\lfloor\frac xb\right\rfloor=x\sum_{b\le N}\frac{\chi_4(b)}b+O(N).$$ [step 1.1, given, algebra]

3.1 Deleting the zero even terms identifies $\sum_{b\le N}\chi_4(b)/b$ with a partial Gregory-Leibniz sum. Therefore [[thm-gregory-leibniz-series-for-pi-from-a-finite-remainder]] gives $$\sum_{b\le N}\frac{\chi_4(b)}b=\frac{\pi}{4}+O(1/N).$$ [step 2.1, given]

4.1 Substituting step 3.1 into step 2.1 and then into step 1.1 yields $$\sum_{n\le x}r_2(n)=4\left(x\cdot\frac{\pi}{4}+O(N)\right)=\pi x+O(\sqrt x).$$ Since $\sum_{n\le x}\pi=\pi\lfloor x\rfloor=\pi x+O(1)$, [[def-summatory-function-and-average-order]] now says that the constant function $\pi$ is an average order of $r_2$. [step 1.1, step 2.1, step 3.1, given, algebra] ∎
