---
id: lem-bounded-strip-maximum-principle
kind: lemma
title: "Maximum principle on a closed strip for bounded holomorphic functions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-boundary-maximum-modulus-principle, thm-complex-exponential-is-entire-with-derivative-itself, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-chain-rule-for-complex-derivatives, thm-exponential-limits-and-range, lem-euclidean-polygonal-paths-are-continuous, thm-path-connected-implies-connected]
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "Boundary control on a bounded strip"
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "J. A. Tropp, Matrix Analysis, Claim 7.14"
      url: "https://tropp.caltech.edu/notes/Tro22-Matrix-Analysis-LN.pdf"
pipeline_run: null
---

## Statement

A bounded function continuous on the closed strip, holomorphic inside, and of modulus at most one on both boundary lines has modulus at most one throughout the strip.

Precisely, let $S=\{z\in\mathbb C:0\le\operatorname{Re}z\le1\}$. If $g:S\to\mathbb C$ is bounded and continuous, is holomorphic on $0<\operatorname{Re}z<1$, and satisfies
$$|g(iy)|\le1,\qquad |g(1+iy)|\le1\qquad(y\in\mathbb R),$$
then $|g(z)|\le1$ for every $z\in S$.

## Facts & Assumptions

**Given:** The closed strip $S$ and a function $g$ satisfying the hypotheses. The exponential is entire, holomorphic compositions obey the chain rule, and the real exponential tends to $0$ at $-\infty$ ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-chain-rule-for-complex-derivatives]], [[thm-exponential-limits-and-range]]).

[L1] If $\Omega$ is a bounded complex domain and $f$ is continuous on $\overline\Omega$ and holomorphic on $\Omega$, then $|f|$ attains its maximum on $\partial\Omega$ ([[thm-boundary-maximum-modulus-principle]]).

[L2] For real $x,y$, $|\exp(x+iy)|=e^x$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[L3] A segment $t\mapsto(1-t)v_0+tv_1$ that lies in a subset $A$ is a continuous path in $A$, and a path-connected subset of a topological space is a connected subset ([[lem-euclidean-polygonal-paths-are-continuous]], [[thm-path-connected-implies-connected]], claim 2).

## Proof

**Proof technique:** direct.

1.1 Fix $\varepsilon>0$ and define $g_\varepsilon(z):=g(z)\exp(\varepsilon(z^2-1))$. By [L2], $|g_\varepsilon(x+iy)|=|g(x+iy)|\exp(\varepsilon(x^2-y^2-1))$. On $x=0$ the exponential factor is at most $1$, and on $x=1$ it is $\exp(-\varepsilon y^2)\le1$, so both vertical boundary lines retain modulus at most $1$. [L2, given, algebra]

2.1 Choose $C\ge0$ with $|g|\le C$. Since $x^2-1\le0$ for $0\le x\le1$, the horizontal sides at heights $y=\pm T$ satisfy $|g_\varepsilon(x\pm iT)|\le C\exp(-\varepsilon T^2)$. For all sufficiently large $T$, this is at most $1$. [step 1.1, given, choose]

3.1 The rectangle $R_T:=\{z:0<\operatorname{Re}z<1,\ |\operatorname{Im}z|<T\}$ is bounded, open and nonempty, and each coordinate of a segment between two of its points stays between that coordinate's endpoints, so the segment stays in $R_T$ and [L3] makes $R_T$ connected; it is therefore a bounded complex domain. With $T$ as in step 2.1, all four boundary sides of $R_T$ have $|g_\varepsilon|\le1$. The boundary maximum theorem [L1] therefore gives $|g_\varepsilon|\le1$ throughout $\overline{R_T}$. [step 2.1, L1, L3]

4.1 Given $z\in S$, choose such a $T>|\operatorname{Im}z|$. Step 3.1 yields $|g(z)|\le\exp(-\varepsilon\operatorname{Re}(z^2-1))$. Letting $\varepsilon$ decrease to $0$ gives $|g(z)|\le1$. This also covers both vertical boundary lines and the zero function. [step 3.1, given, algebra] ∎
