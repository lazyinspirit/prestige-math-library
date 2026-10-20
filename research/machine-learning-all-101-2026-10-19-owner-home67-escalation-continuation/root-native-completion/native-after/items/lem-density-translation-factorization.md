---
id: lem-density-translation-factorization
kind: lemma
title: A translated conditional density factorizes after subtraction
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: anderson-reverse-time-diffusion
dependency_level: 0
deps:
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pending
sources:
  references:
    - title: "B. D. O. Anderson, Reverse-time diffusion equation models, Lemma 4"
      url: "https://eva.fcien.udelar.edu.uy/pluginfile.php/166428/mod_resource/content/1/1982_andersonREVERSE-TIME%20DIFFUSION%20EQUATION%20MODELS.pdf"
---

## Statement

Let $m,r\ge1$, and let $A\in\mathbb R^m$ and $B,C\in\mathbb R^r$ have a joint Lebesgue density. Suppose this joint density factors as
$$p_{A,B,C}(a,b,c)=p_A(a)f(b-c)p_C(c)$$
almost everywhere, where $p_A$, $f$, and $p_C$ are probability densities on $\mathbb R^m$, $\mathbb R^r$, and $\mathbb R^r$, respectively. Then $D=B-C$ is independent of $A$, has density $f$, and the joint density of $(A,D)$ is $p_A(a)f(d)$.

## Statement references

[Anderson, Lemma 4, printed pp. 320–321](https://eva.fcien.udelar.edu.uy/pluginfile.php/166428/mod_resource/content/1/1982_andersonREVERSE-TIME%20DIFFUSION%20EQUATION%20MODELS.pdf): states the subtraction factorization used to prove independence of a reverse-noise increment.

## Facts & Assumptions

**Given:** the joint-density factorization in the statement, translation invariance of Lebesgue measure, and Tonelli's theorem.

[F1] Translation by a fixed vector preserves Lebesgue measure, hence the change of variables $b=d+c$ has Jacobian one. [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]

[F2] The nonnegative density can be integrated in successive variables, and the resulting section integrals are measurable. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

## Proof
1.1 Let $\Phi(a,d,c)$ be a nonnegative Borel test function. Tonelli [F2] permits integration first in $b$ for each fixed $a,c$, and translation invariance [F1] then gives $\int \Phi(a,b-c,c)p_A(a)f(b-c)p_C(c)\,da\,db\,dc=\int \Phi(a,d,c)p_A(a)f(d)p_C(c)\,da\,dd\,dc$. Thus the pushforward under $(a,b,c)\mapsto(a,b-c,c)$ has density $p_A(a)f(d)p_C(c)$, with no Jacobian factor. [F1, F2]

2.1 Integrating this joint density over $c$ and using $\int p_C(c)dc=1$, Tonelli [F2] yields $p_{A,D}(a,d)=p_A(a)f(d)$. Its marginals are $p_A$ and $f$, so the product identity proves independence and identifies the density of $D$. [F2, step 1.1] ∎
