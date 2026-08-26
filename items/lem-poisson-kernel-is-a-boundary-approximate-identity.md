---
id: lem-poisson-kernel-is-a-boundary-approximate-identity
kind: lemma
title: "The Poisson kernel is a boundary approximate identity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-poisson-integral-on-the-disc, lem-poisson-kernel-properties-on-the-disc]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Sigurdur Helgason, MIT 18.112 Lecture 16: Harmonic Functions"
      url: "https://ocw.mit.edu/courses/18-112-functions-of-a-complex-variable-fall-2008/414780e0991d20cd338320d3784fae4d_lecture16.pdf"
pipeline_run: null
---

## Statement

Let $\varphi:\partial\mathbb D\to\mathbb R$ be continuous. Then

$$P[\varphi](re^{i\alpha})\longrightarrow \varphi(e^{i\alpha})\qquad(r\to1^-)$$

uniformly in $\alpha\in\mathbb R$.

## Facts & Assumptions

**Given:** A continuous boundary datum $\varphi:\partial\mathbb D\to\mathbb R$.

[L1] The Poisson kernel is positive, has total mass one, and its mass away from a fixed boundary point tends uniformly to zero as $r\to1^-$ ([[lem-poisson-kernel-properties-on-the-disc]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon>0$. By uniform continuity of $\varphi$ on the compact unit circle, choose $\delta\in(0,\pi]$ such that $|\varphi(e^{it})-\varphi(e^{i\alpha})|<\varepsilon/2$ whenever the circular distance from $t$ to $\alpha$ is less than $\delta$. [given, choose]

2.1 Writing $z=re^{i\alpha}$ and subtracting $\varphi(e^{i\alpha})$ inside the Poisson integral, positivity and total mass one from [L1] give $$|P[\varphi](z)-\varphi(e^{i\alpha})|\le \frac{1}{2\pi}\int_{|t-\alpha|<\delta}P_r(\alpha-t)\frac{\varepsilon}{2}\,dt+\frac{1}{2\pi}\int_{|t-\alpha|\ge\delta}P_r(\alpha-t)\,2\|\varphi\|_\infty\,dt.$$ [L1, step 1.1, algebra]

3.1 The first integral in step 2.1 is at most $\varepsilon/2$ because the kernel mass is $1$, and the second is at most $2\|\varphi\|_\infty$ times the far-arc mass from [L1], which is $<\varepsilon/2$ for all $\alpha$ once $r$ is close enough to $1$. Therefore $|P[\varphi](re^{i\alpha})-\varphi(e^{i\alpha})|<\varepsilon$ uniformly in $\alpha$. [step 2.1, L1]

4.1 Since $\varepsilon$ was arbitrary, the convergence is uniform as $r\to1^-$. [step 3.1] ∎
