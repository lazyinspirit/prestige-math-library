---
id: thm-conjugate-difference-quotient-characterizes-antiholomorphic-maps
kind: theorem
title: "A conjugate difference quotient characterizes antiholomorphic maps"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-wirtinger-derivatives, def-total-derivative-in-euclidean-space,
       lem-euclidean-linear-maps-have-matrices-and-are-bounded,
       lem-complex-conjugation-and-modulus-laws]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Exercise 2.2.11"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb C$ be open, let $a\in U$, and let $f:U\to\mathbb C$. The limit

$$ G=\lim_{\substack{h\to0\\h\ne0}}\frac{f(a+h)-f(a)}{\bar h} $$

exists if and only if $f$ is real totally differentiable at $a$ and $f_z(a)=0$. In that case $f_{\bar z}(a)=G$. Consequently, the conjugate quotient exists at every point of $U$ exactly for real-differentiable antiholomorphic maps, and its value is $f_{\bar z}$.

## Facts & Assumptions
**Given:** An open set $U\subseteq\mathbb C$, a point $a\in U$, and a map $f:U\to\mathbb C$.

[F1] Total differentiability at $a$ means $f(a+h)=f(a)+Df(a)h+r(h)$ with $|r(h)|/|h|\to0$ ([[def-total-derivative-in-euclidean-space]]).

[F2] For a real-differentiable map, $Df(a)h=f_z(a)h+f_{\bar z}(a)\bar h$ ([[def-wirtinger-derivatives]]).

[L1] Every real-linear map between Euclidean spaces has a matrix and is bounded by a constant times the Euclidean norm ([[lem-euclidean-linear-maps-have-matrices-and-are-bounded]]).

[L2] Conjugation is a real-field automorphism with $\overline{\overline z}=z$, the modulus is multiplicative, and $z\overline z=|z|^2$ ([[lem-complex-conjugation-and-modulus-laws]]). Since $\overline{\overline z}=z$ and $z\overline z=|z|^2$, one has $|\overline z|^2=\overline z\,\overline{\overline z}=\overline zz=|z|^2$, and both moduli are nonnegative, so $|\overline z|=|z|$, so in particular $|\bar h|=|h|$.

## Proof

**Proof technique:** direct.

1.1 Suppose the conjugate quotient tends to $G$, and put $r(h)=f(a+h)-f(a)-G\bar h$. Then $|r(h)|/|h|=|(f(a+h)-f(a))/\bar h-G|\to0$. [given, L2, algebra]

1.2 Conversely, suppose $f$ is real totally differentiable and $f_z(a)=0$. By [F1] and [F2], $f(a+h)-f(a)=f_{\bar z}(a)\bar h+r(h)$ with $|r(h)|/|h|\to0$. [given, F1, F2]

1.3 For the identity map, [F2] gives $f_z=1$ and $f_{\bar z}=0$, while its conjugate quotient is $h/\bar h$ and has incompatible values $1$ and $-1$ on real and imaginary increments. For conjugation, [F2] gives $f_z=0$ and $f_{\bar z}=1$, and its conjugate quotient is identically $1$. These two tests confirm the placement of the conjugates and the barred coefficient. [F2, L2, algebra]

2.1 The map $h\mapsto G\bar h$ is real-linear and bounded by $|G||h|$, so [F1] and step 1.1 show that $f$ is real totally differentiable with $Df(a)h=G\bar h$. [step 1.1, F1, L1, L2]

3.1 Comparing this differential with [F2] gives $f_z(a)=0$ and $f_{\bar z}(a)=G$. [step 2.1, F2, algebra]

4.1 Dividing by $\bar h$ and using $|\bar h|=|h|$ gives $(f(a+h)-f(a))/\bar h=f_{\bar z}(a)+r(h)/\bar h\to f_{\bar z}(a)$. This proves the reverse implication and the value of the limit. [step 1.2, L2, algebra] ∎
