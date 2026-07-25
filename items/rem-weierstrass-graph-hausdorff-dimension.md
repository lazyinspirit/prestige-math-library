---
id: rem-weierstrass-graph-hausdorff-dimension
kind: remark
title: "Hausdorff dimension of the graph of the Weierstrass function"
status: published
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "dim_H = 2 + log_b(a); settled for integer b ≥ 2 by Shen (2018), open otherwise"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "W. Shen, Hausdorff dimension of the graphs of the classical Weierstrass functions, Mathematische Zeitschrift 289 (2018) 223-266"
      url: "https://link.springer.com/article/10.1007/s00209-017-1949-1"
    - title: "W. Shen, Hausdorff dimension of the graphs of the classical Weierstrass functions (arXiv:1505.03986)"
      url: "https://arxiv.org/abs/1505.03986"
    - title: "K. Barański, B. Bárány and J. Romanowska, On the dimension of the graph of the classical Weierstrass function (arXiv:1309.3759)"
      url: "https://arxiv.org/abs/1309.3759"
    - title: "H. Ren and W. Shen, A dichotomy for the Weierstrass-type functions, Inventiones Mathematicae 226 (2021) 1057-1100 (arXiv:2007.04312)"
      url: "https://arxiv.org/abs/2007.04312"
    - title: "Weierstrass function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Weierstrass_function"
pipeline_run: null
---

## Statement

For parameters $0 < a < 1$ and $b > 1$ with $ab > 1$, the **classical Weierstrass
function** is

$$W_{a,b}(x) = \sum_{n=0}^{\infty} a^{n} \cos(2\pi b^{n} x).$$

It is continuous on $\mathbb{R}$ and, by Hardy's 1916 sharpening of Weierstrass's
1872 example, nowhere differentiable whenever $0 < a < 1$ and $ab \ge 1$. Its
graph is a compact subset of $\mathbb{R}^2$, and the claim at issue is that its
Hausdorff dimension is

$$\dim_{H} \operatorname{graph}(W_{a,b}) = 2 + \log_{b} a = 2 + \frac{\log a}{\log b},$$

a number strictly between $1$ and $2$, since $0 < a < 1$ gives $\log_b a < 0$ and
$ab > 1$ gives $\log_b a > -1$.

**Status: settled in 2018 for integer $b$, and open in general.** Shen proved the
formula for **every integer $b \ge 2$ and every $a \in (1/b, 1)$**. For
non-integer $b$ the value of the Hausdorff dimension of the graph remains open.
Even in the settled range the result is far out of reach here: it needs Hausdorff
measure and dimension, hyperbolic dynamics, and the absolute continuity of an SRB
measure on a solenoidal attractor.

## Remarks

**Not proved in this library.** Nothing here rests on the value of this
dimension, and no page may cite the formula as established.

**What is known, and what would settle the rest.** The **box-counting** dimension
of the graph is $2 + \log_b a$ and has been classical for decades (see Falconer,
*The Geometry of Fractal Sets*); since Hausdorff dimension never exceeds box
dimension, the entire difficulty is the *lower* bound. The successive advances
were: Hunt (1998), who proved the formula for the randomly phased variant
$\sum a^n \cos(2\pi(b^n x + \theta_n))$ for almost every phase sequence
$(\theta_n)$; Barański, Bárány and Romanowska (2014), who proved it for integer
$b$ and $a$ above a threshold $a_b \in (1/b, 1)$; and Shen (2018), who removed the
threshold and covered every integer $b \ge 2$ and every $a \in (1/b, 1)$, by
proving that the SRB measure of the associated solenoidal attractor is absolutely
continuous. Ren and Shen (2021) then generalised the formula from $\cos$ to an
arbitrary real analytic periodic $\varphi$, as a dichotomy: for integer
$b \ge 2$ and $a \in (1/b, 1)$, either $\sum a^n \varphi(b^n x)$ is real
analytic or its graph has Hausdorff dimension $2 + \log_b a$. Every one of these
results keeps the hypothesis that $b$ is an integer. What would settle what
remains is the non-integer case, where the associated dynamics is no longer a
self-affine expanding map of a circle by an integer degree and the current method
does not apply.

**Why it matters here.** Continuity and nowhere differentiability of a Weierstrass
function **are** in scope for this library and will be proved from the Weierstrass
M-test and a direct oscillation estimate. The dimension of the graph is not, and
the gap between the two is worth naming: the elementary statement that the curve
has no tangent anywhere is a nineteenth-century theorem, while the quantitative
statement of how rough it is took until 2018 and is still incomplete. Recording
that here keeps the nowhere-differentiability page from implying more than it
proves.
