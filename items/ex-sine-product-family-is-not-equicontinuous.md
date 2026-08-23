---
id: ex-sine-product-family-is-not-equicontinuous
kind: example
title: "The family $\\sin(nx)\\sin(ny)$ is uniformly bounded but not equicontinuous"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-equicontinuity-and-boundedness-in-ck,
       cor-trigonometric-parity-and-pythagorean-identity,
       cor-sine-and-cosine-are-one-lipschitz,
       thm-quarter-turn-values-and-shift-formulas,
       cor-archimedean-reciprocal,
       def-pi-via-first-positive-cosine-zero,
       thm-heine-borel-rn,
       def-p-norms-on-rn]
justified_by: []
aliases: []
landmark: true
short: "A bounded nonequicontinuous sine family"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, sections 8.3 and 11.4"
      url: "https://jirilebl.github.io/ra/realanal2.pdf"
    - title: "University of Toronto MAT237, section 2.1 Differentiation of real-valued functions"
      url: "https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter2/S2.1.html"
pipeline_run: null
---

## Example

Let $K=[0,\pi]^2$ with the Euclidean metric. For every natural $n\ge1$, define

$$f_n:K\longrightarrow\mathbb R,\qquad f_n(x,y)=\sin(nx)\sin(ny).$$

Every $f_n$ is continuous, and the family
$\mathcal F=\{f_n:n\ge1\}$ is uniformly bounded by $1$. It is not
equicontinuous at the origin, and hence is not equicontinuous on $K$.

## Facts & Assumptions

**Given:** The compact square $K=[0,\pi]^2$ and the family $\mathcal F$ in the Example.

[L1] For a nonempty compact metric space $K$, a family $\mathcal F\subseteq C(K,\mathbb R)$ is equicontinuous at $a$ when every $\varepsilon>0$ admits one $\delta>0$ that works for every $f\in\mathcal F$ and every $x\in K$; it is uniformly bounded when one $M\ge0$ bounds $|f(x)|$ for all $f$ and $x$ ([[def-equicontinuity-and-boundedness-in-ck]]).

[L2] For every real $t$, $\sin(-t)=-\sin t$ and $|\sin t|\le1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L3] For all reals $u,v$, $|\sin u-\sin v|\le|u-v|$ ([[cor-sine-and-cosine-are-one-lipschitz]]).

[L4] $\sin(\pi/2)=1$ ([[thm-quarter-turn-values-and-shift-formulas]]).

[L5] For every real $\varepsilon>0$ there is a natural $n\ge1$ with $1/n<\varepsilon$ ([[cor-archimedean-reciprocal]]).

[L6] The number $\pi$ is positive ([[def-pi-via-first-positive-cosine-zero]]).

[L7] Every closed box in $\mathbb R^2$ is compact in the Euclidean metric ([[thm-heine-borel-rn]]).

[L8] For $(u,v)\in\mathbb R^2$, $\lVert(u,v)\rVert_2=\sqrt{u^2+v^2}$ ([[def-p-norms-on-rn]]).

## Verification

**Proof technique:** direct.

1.1 The set $K$ is a nonempty closed box in $\mathbb R^2$, so it is compact. [given, L6, L7]

1.2 For fixed $n\ge1$ and points $(x,y),(u,v)\in K$, the sine bound and Lipschitz estimate give $|f_n(x,y)-f_n(u,v)|\le n|x-u|+n|y-v|\le2n\lVert(x-u,y-v)\rVert_2$; hence $f_n$ is continuous on $K$. [given, L2, L3, L8, algebra]

1.3 For every $n\ge1$ and $(x,y)\in K$, $|f_n(x,y)|\le1$, so $\mathcal F$ is uniformly bounded. [given, L1, L2, algebra]

1.4 For every $n\ge1$, $f_n(0,0)=0$, while at $p_n=(\pi/(2n),\pi/(2n))\in K$ one has $f_n(p_n)=1$. [given, L2, L4, L6, algebra]

2.1 Let $\delta>0$. Applying [L5] to $\delta/\pi>0$ gives some natural $n\ge1$ with $\pi/n<\delta$, and then $d_2(p_n,(0,0))=\pi/(\sqrt2\,n)<\pi/n<\delta$. [step 1.4, L5, L6, L8, choose, algebra]

3.1 Taking $\varepsilon=1/2$, steps 1.4 and 2.1 show that every $\delta>0$ admits an $f_n\in\mathcal F$ and a point $p_n\in K$ within $\delta$ of the origin for which $|f_n(p_n)-f_n(0,0)|=1>\varepsilon$. Thus the family is not equicontinuous at the origin. [step 1.1, step 1.2, step 1.4, step 2.1, L1] ∎

## Remarks

Uniform boundedness controls the range of every function in the family. Equicontinuity asks for a common spatial scale, and the oscillation scale $1/n$ prevents such a scale at the origin.
