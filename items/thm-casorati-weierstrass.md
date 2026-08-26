---
id: thm-casorati-weierstrass
kind: theorem
title: "Casorati-Weierstrass theorem"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-isolated-singularity-trichotomy, thm-removable-singularity-characterizations, thm-pole-characterizations, thm-algebra-of-complex-derivatives]
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David Greenfield, Rutgers Math 403 diary"
      url: "https://sites.math.rutgers.edu/~greenfie/mill_courses/math403/diary2.html"
    - title: "Jean-Baptiste Campesato, MAT334 course page and notes index"
      url: "https://www.math.toronto.edu/campesat/mat334.html"
pipeline_run: null
---

## Statement

Let $f$ have an essential singularity at $a$. Then for every $r>0$ with
$0<|z-a|<r$ in the domain of $f$, the image $f(\{\,0<|z-a|<r\,\})$ is dense in
$\mathbb C$.

Equivalently, for every $w\in\mathbb C$ and every $\varepsilon>0$, some point
$z$ with $0<|z-a|<r$ satisfies $|f(z)-w|<\varepsilon$.

## Facts & Assumptions

**Given:** An essential singularity of $f$ at $a$ and a radius $r>0$ with $f$ holomorphic on $0<|z-a|<r$.

[L1] Essential means neither removable nor a pole ([[thm-isolated-singularity-trichotomy]]).

[L2] A bounded holomorphic function on a punctured disc has a removable singularity ([[thm-removable-singularity-characterizations]]).

[L3] A function on a punctured disc has a pole exactly when its modulus tends to infinity there ([[thm-pole-characterizations]]).

[L4] Reciprocal and sum rules preserve holomorphy wherever the denominators stay nonzero ([[thm-algebra-of-complex-derivatives]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $f(\{\,0<|z-a|<r\,\})$ is not dense in $\mathbb C$. Then some $w\in\mathbb C$ and some $\varepsilon>0$ satisfy $|f(z)-w|\ge\varepsilon$ for every $z$ with $0<|z-a|<r$. [assume-contra]

2.1 The function $g(z):=1/(f(z)-w)$ is therefore holomorphic on $0<|z-a|<r$ by [L4] and bounded there by $1/\varepsilon$. [step 1.1, L4, algebra]

3.1 By [L2], the bounded function $g$ extends holomorphically across $a$. If the extension satisfies $g(a)\ne0$, then $1/g$ is holomorphic near $a$ and $f=w+1/g$ is removable there by [L4]. If instead $g(a)=0$, then $1/g$ has a pole at $a$ by [L3], so $f=w+1/g$ has a pole there as well. [step 2.1, L2, L3, L4]

4.1 Either outcome in step 3.1 contradicts [L1], because an essential singularity is neither removable nor a pole. Therefore the assumption of step 1.1 is false, and every punctured neighbourhood image is dense in $\mathbb C$. [step 1.1, step 3.1, L1, discharge-contradiction] ∎
