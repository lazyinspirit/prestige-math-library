---
id: def-c-zero-and-ell-infinity
kind: definition
title: The sequence spaces c_0 and ell-infinity
status: draft
origin: pipeline
deps: [def-norm-and-normed-space, def-sequence]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Piotr Hajlasz, Functional Analysis, §10.5
      url: https://sites.pitt.edu/~hajlasz/Notatki/Functional%20Analysis2.pdf
---

## Definition

Let $\mathbb K=\mathbb R$ or $\mathbb C$, with absolute value in the real
case and modulus $|a+ib|=\sqrt{a^2+b^2}$ in the complex case. A scalar
sequence here is a function $x:\mathbb N\to\mathbb K$, including index zero. Let

$$\ell^\infty=\{x=(x_n)_{n\in\mathbb N}:\sup_{n\in\mathbb N}|x_n|<\infty\},\qquad c_0=\{x\in\ell^\infty:x_n\to0\},$$

both equipped with $\|x\|_\infty=\sup_{n\in\mathbb N}|x_n|$.  Thus $c_0$ is
a specified linear subspace of the bounded-sequence space $\ell^\infty$.

Here $x_n\to0$ means that for every real $\varepsilon>0$ there is
$N\in\mathbb N$ such that $|x_n|<\varepsilon$ for all $n\ge N$.
Addition and scalar multiplication are coordinatewise. The scalar triangle
inequality makes bounded sequences and null sequences linear spaces and gives
the triangle inequality for the displayed supremum norm. Absolute homogeneity
follows coordinatewise, and a zero supremum forces every coordinate to vanish.
