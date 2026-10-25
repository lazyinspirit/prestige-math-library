---
id: ex-an-ascending-hnn-extension-from-doubling-the-integers
kind: example
title: "An ascending HNN extension from doubling the integers"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ascending-hnn-extension, prop-normal-form-for-an-ascending-hnn-extension]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
---

## Example

The injective endomorphism $\phi:\mathbb Z\to\mathbb Z$ given by $\phi(n)=2n$
produces the ascending HNN extension

$$\langle a,t\mid tat^{-1}=a^2\rangle,$$

and every element has a unique one-sided normal form $t^{-m}a^kt^n$ with
$m,n\ge 0$ and $k$ odd whenever $m,n>0$.

## Facts & Assumptions

**Given:** The doubling endomorphism of $\mathbb Z$.

[L1] An injective endomorphism of a group defines an ascending HNN extension. ([[def-ascending-hnn-extension]])

[L2] In an ascending HNN extension, every element has a unique form $t^{-m}bt^n$, with $b$ outside the image subgroup whenever $m,n>0$. ([[prop-normal-form-for-an-ascending-hnn-extension]])

## Verification

**Proof technique:** direct.

1.1 The map $\phi(n)=2n$ is injective, so [L1] gives the presentation $\langle a,t\mid tat^{-1}=a^2\rangle$. Its positive associated subgroup is $2\mathbb Z\le\mathbb Z$. [L1, given]

2.1 Under the multiplicative notation $a^k\leftrightarrow k$, the image subgroup $\phi(\mathbb Z)=2\mathbb Z$ consists exactly of the even exponents. Thus $a^k\notin\phi(\mathbb Z)$ exactly when $k$ is odd. The condition in [L2] therefore specializes to the stated unique forms $t^{-m}a^kt^n$, with $k$ odd whenever $m,n>0$. [L2, step 1.1, algebra] ∎
