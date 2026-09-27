---
id: def-quadratic-consistency-test
kind: definition
title: "Quadratic tensor consistency test"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-hadamard-linearity-constraint-system, thm-linearity-test-rejects-proportionally-to-distance, def-self-correction-of-a-noisy-linear-function, def-linearity-test]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.4.2 Step 2 of the verifier, printed pp. 382-383."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Irit Dinur, The PCP theorem by gap amplification, §5 (tensor and consistency tests), printed pp. 17-18."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
---

## Definition

Let $n\ge0$. For $r,s\in\mathbb F_2^n$ put
$$r\otimes s:=(r_is_j)_{1\le i,j\le n}\in\mathbb F_2^{n\times n},$$
the **tensor product** of the two vectors, and identify $\mathbb F_2^{\,n\times n}$ with $\mathbb F_2^{\,n^2}$ through the fixed row-major order of the index pairs $(i,j)$; for $n=0$ the tensor product is the unique empty matrix and both cubes have the single point $\varnothing$. A **Hadamard table** is a function on one of these cubes, in the conventions of [[def-linearity-test]]: $f:\mathbb F_2^n\to\mathbb F_2$ and $g:\mathbb F_2^{\,n\times n}\to\mathbb F_2$ are fixed tables, and the tensor of a vector with itself is the matrix $u\otimes u$ of entries $u_iu_j$.

**The ideal tensor test.** Choose $r,s\in\mathbb F_2^n$ independently and uniformly, query $f(r)$, $f(s)$ and $g(r\otimes s)$, and **accept** exactly when $g(r\otimes s)=f(r)\cdot f(s)$, the right-hand side being the product in $\mathbb F_2$ of the two queried bits, equal to $1$ precisely when both factors are $1$. The test uses three table queries and $2n$ random bits; query points may coincide, and for $n=0$ all three points are the empty index, so the test reads the two single-entry tables and accepts exactly when $g=f\cdot f$. The **rejection probability** of a pair $(f,g)$ is $\varepsilon_{\rm ten}(f,g):=\Pr_{r,s}[g(r\otimes s)\ne f(r)f(s)]$, over the two independent uniform choices with the tables fixed.

**Perfect completeness.** If $f=\ell_u$, that is $f(r)=u\cdot r$, and $g=\ell_{u\otimes u}$, that is $g(z)=(u\otimes u)\odot z$ with $\odot$ the coordinatewise-modulo-two dot product of [[def-linearity-test]], then for all $r,s$ the distributivity of the dot product gives $(u\otimes u)\odot(r\otimes s)=\sum_{i,j}u_iu_jr_is_j=(\sum_iu_ir_i)(\sum_ju_js_j)=(u\cdot r)(u\cdot s)$, so the test accepts with probability one and $\varepsilon_{\rm ten}(\ell_u,\ell_{u\otimes u})=0$.

**The self-corrected implementation.** When the tables are only close to linear rather than linear, the test is executed on **decoded** values: each queried value is replaced by a two-query self-correction with auxiliary points chosen uniformly and independently,
$$\operatorname{Corr}_f(r;y):=f(y)+f(r+y),\qquad \operatorname{Corr}_g(r\otimes s;Y):=g(Y)+g(r\otimes s+Y),$$
with $y\in\mathbb F_2^n$ and $Y\in\mathbb F_2^{\,n\times n}$ uniform, in the convention of [[def-self-correction-of-a-noisy-linear-function]]. The **self-corrected tensor test** accepts exactly when $\operatorname{Corr}_g(r\otimes s;Y)=\operatorname{Corr}_f(r;y)\cdot\operatorname{Corr}_f(s;y')$, with independent auxiliary points $y,y',Y$; it uses six table queries — $f$ twice for each of its two decoded values and $g$ twice — and $n^2+4n$ random bits for the independent choices $r,s,y,y',Y$. The two tests differ only in reading the tables at auxiliary points instead of at the queried points; when the tables *are* linear the readings agree for every choice of the auxiliaries, since then $\operatorname{Corr}_f(r;y)=f(r)$ and $\operatorname{Corr}_g(r\otimes s;Y)=g(r\otimes s)$.

## Remarks

- **Why the tensor form is the right consistency condition.** A tensor table $g$ claiming to encode $w\in\mathbb F_2^{\,n\times n}$ is consistent with $f$ encoding $u$ exactly when $w=u\otimes u$; by the displayed bilinearity the test at $(r,s)$ compares the two bits $rWs$ and $(u\cdot r)(u\cdot s)$, where $W$ is $w$ read as a matrix, so the rejection event is the event $r(W-u\otimes u)s=1$, a rank-one condition that [[lem-quadratic-test-soundness]] quantifies by the half-cube principle. The test is the quadratic analogue of the linearity test [[def-linearity-test]], applied to the product structure rather than to addition alone.
- **Ideal and noisy parts are separated on purpose.** The ideal test is a mathematical condition on exactly linear tables and its rejection probability is what the soundness analysis computes; the self-corrected test is the constant-query implementation available to a verifier that knows only that the tables are close to linear, and its additional error is bounded by the self-correction failure probabilities. The definition fixes the queries, the auxiliary distributions and the acceptance rules of both, and states no error bound: that is the content of [[lem-quadratic-test-soundness]].
- **Multiplicity and order.** The coordinates of $r\otimes s$ are ordered row-major and $g$ is indexed by that fixed order; the pair $(r,s)$ ranges over all ordered pairs, so an unordered pair of vectors contributes the two outcomes $(r,s)$ and $(s,r)$ whose tensors transpose one another. The product $f(r)f(s)$ is symmetric in its arguments while $g$ need not be, which is why the ordered form is the one materialized by the tester of [[lem-exponential-base-assignment-tester-from-quadratic-oracles]].
