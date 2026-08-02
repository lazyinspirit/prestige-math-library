---
id: lem-complex-polynomial-growth-and-minimum-modulus
kind: lemma
title: "A nonconstant complex polynomial tends to infinite modulus and attains a global minimum modulus"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complex-polynomial-degree-and-monic, lem-complex-conjugation-and-modulus-laws, thm-heine-borel-rn, thm-extreme-value-metric, thm-componentwise-limits-and-continuity, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I: The Fundamental Theorem of Algebra"
      url: "https://www.jirka.org/ra/html/sec_fundalgeb.html"
pipeline_run: null
---

## Statement

If $p$ is a nonconstant complex polynomial, then $|p(z)|\to\infty$ as $|z|\to\infty$, and $|p|$ attains a global minimum on $\mathbb C$. The conventions and prerequisite facts used below are recorded in [[def-complex-polynomial-degree-and-monic]], [[lem-complex-conjugation-and-modulus-laws]], [[thm-heine-borel-rn]], [[thm-extreme-value-metric]], [[thm-componentwise-limits-and-continuity]], [[lem-finite-sum-laws]].

## Facts & Assumptions

**Given:** A nonconstant polynomial $p(z)=a_nz^n+\sum_{k<n}a_kz^k$ with $a_n\ne0$.

[L1] [[lem-complex-conjugation-and-modulus-laws]] gives $|uv|=|u||v|$ and $|u+v|\le|u|+|v|$.

[L2] [[thm-heine-borel-rn]] says that every closed box in $\mathbb R^2$ is compact.

[L3] [[thm-extreme-value-metric]] gives a minimum for a continuous real-valued function on a nonempty compact metric space.

[L4] [[thm-componentwise-limits-and-continuity]] makes a map into $\mathbb R^2$ continuous exactly when its two components are continuous.

## Proof

**Proof technique:** direct.

1.1 Put $C:=\sum_{k<n}|a_k|$. For $r=|z|\ge1$, [L1] gives
$$|p(z)|\ge |a_n|r^n-\sum_{k<n}|a_k|r^k\ge r^n\bigl(|a_n|-C/r\bigr).$$
Thus for $r\ge2C/|a_n|$ the right side is at least $(|a_n|/2)r^n$, which tends to $+\infty$. [L1, algebra]

1.2 Writing $z=x+iy$, each coordinate projection is continuous because $|x-x_0|,|y-y_0|\le\|(x,y)-(x_0,y_0)\|$. The identity $uv-u_0v_0=u(v-v_0)+v_0(u-u_0)$ proves continuity of products, so induction over the finite expression makes both coordinate polynomials of $p(x+iy)$ continuous. Then [L4] makes $p$ and $|p|$ continuous. [L4]

2.1 Choose $R\ge1$ so that the lower bound of step 1.1 is $>|p(0)|$ when $|z|>R$. The closed square $K=[-R,R]^2\subseteq\mathbb R^2=\mathbb C$ is nonempty and compact by [L2]; outside $K$ one has $|z|>R$. By [L3] and step 1.2, let $a\in K$ minimize $|p|$ on $K$. [L2, L3, step 1.1, step 1.2]

3.1 Since $0\in K$, this minimizer satisfies $|p(a)|\le|p(0)|$. Step 2.1 makes every point outside $K$ have strictly larger modulus, so $a$ is a global minimizer. [step 2.1] ∎
