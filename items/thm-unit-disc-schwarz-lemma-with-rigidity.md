---
id: thm-unit-disc-schwarz-lemma-with-rigidity
kind: theorem
title: "Schwarz lemma with the equality cases"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-unit-disc-upper-half-plane-and-blaschke-factor, thm-maximum-modulus-principle-with-boundary-and-infinity-control, thm-local-maximum-modulus-principle, thm-removable-singularity-characterizations]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 Lemma 2.1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "Jiri Lebl, Guide to Cultivating Complex Analysis, §3.5"
      url: "https://www.jirka.org/ca/ca.pdf"
---

## Statement

Let $f:\mathbb D\to\mathbb D$ be holomorphic and satisfy $f(0)=0$. Then

$$|f(z)|\le|z|\qquad(z\in\mathbb D),\qquad |f'(0)|\le1.$$

Moreover, if either $|f(z_0)|=|z_0|$ for some $z_0\in\mathbb D\setminus\{0\}$
or $|f'(0)|=1$, then

$$f(z)=e^{i\theta}z$$

for some real $\theta$; conversely every rotation $z\mapsto e^{i\theta}z$
satisfies equality in both conclusions.

## Facts & Assumptions

**Given:** A holomorphic map $f:\mathbb D\to\mathbb D$ with $f(0)=0$.

[F1] The unit disc is $\mathbb D=\{z\in\mathbb C:|z|<1\}$
([[def-unit-disc-upper-half-plane-and-blaschke-factor]]).

[F2] If a holomorphic function on a punctured disc has a finite limit at the
centre, then the singularity is removable
([[thm-removable-singularity-characterizations]]).

[F3] Boundary modulus control on a bounded domain bounds the modulus throughout
the domain ([[thm-maximum-modulus-principle-with-boundary-and-infinity-control]]).

[F4] If the modulus of a holomorphic function has an interior local maximum,
then the function is constant ([[thm-local-maximum-modulus-principle]]).

## Proof

**Proof technique:** direct.

1.1 If $f\equiv0$ then the two inequalities and the equality characterization are immediate, so assume $f$ is not identically zero and define $g(z)=f(z)/z$ for $z\ne0$ on the punctured disc. [F1, given, cases]

2.1 Since $f'(0)=\lim_{z\to0}f(z)/z$, the function $g$ has finite limit $f'(0)$ at $0$; by [F2] it extends holomorphically to $\mathbb D$, still denoted $g$, with $g(0)=f'(0)$. [F2, step 1.1, algebra]

3.1 Fix $0<r<1$. On $|z|=r$ one has $|g(z)|=|f(z)|/r\le1/r$ because $f(\mathbb D)\subseteq\mathbb D$; applying [F3] on the radius-$r$ disc gives $|g(z)|\le1/r$ whenever $|z|\le r$. [F1, F3, step 2.1, algebra]

4.1 For any $w\in\mathbb D$, step 3.1 holds for every $r$ with $|w|<r<1$, so letting $r\to1^-$ gives $|g(w)|\le1$; therefore $|f(w)|=|w||g(w)|\le|w|$ for all $w\in\mathbb D$, and at $w=0$ this also gives $|f'(0)|=|g(0)|\le1$. [step 2.1, step 3.1, algebra]

5.1 If $|f(z_0)|=|z_0|$ for some $z_0\ne0$, then step 4.1 gives $|g(z_0)|=1$, an interior maximum for $|g|$, so [F4] makes $g$ constant of modulus $1$; if instead $|f'(0)|=1$, then $|g(0)|=1$ and the same argument applies. Thus in either equality case $g(z)\equiv e^{i\theta}$ for some real $\theta$, so $f(z)=e^{i\theta}z$ on $\mathbb D$. [F4, step 2.1, step 4.1, cases, algebra]

6.1 Conversely, for $f(z)=e^{i\theta}z$ one has $|f(z)|=|z|$ for all $z$ and $|f'(0)|=|e^{i\theta}|=1$. [step 5.1, algebra] ∎
