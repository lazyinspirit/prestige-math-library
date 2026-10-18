---
id: lem-floater-hormann-denominator-lower-bound
kind: lemma
title: Floater–Hormann barycentric denominator lower bound
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps:
  - def-floater-hormann-interpolant
  - lem-floater-hormann-weight-and-blend-identity
  - lem-floater-hormann-gap-partial-sums-positive
  - def-floater-hormann-local-mesh-ratio
dependency_level: 7
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Michael S. Floater and Kai Hormann, Barycentric rational interpolation
        with no poles and high rates of approximation, proofs of Theorems 2–3
      url: https://www.mn.uio.no/math/english/people/aca/michaelf/papers/rational.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $n\ge1$, $0\le d<n$, $x_0<\cdots<x_n$, and
$h=\max_j(x_{j+1}-x_j)$. Let $D_d(x)=\sum_{j=0}^n w_j/(x-x_j)$ be the
Floater–Hormann denominator from
[[def-floater-hormann-interpolant]]. For every open gap
$x_\alpha<x<x_{\alpha+1}$,
$$|D_d(x)|\ge \begin{cases} \dfrac{1}{d!\,h^{d+1}}, & d\ge1,\\[4pt] \dfrac{1}{h(1+\beta)}, & d=0, \end{cases}$$
where $\beta$ is the local ratio of
[[def-floater-hormann-local-mesh-ratio]].

## Facts & Assumptions

**Given:** Ordered distinct real nodes, $n\ge1$, $0\le d<n$, an open node gap, and the associated Floater–Hormann denominator.

[F1] [[lem-floater-hormann-weight-and-blend-identity]]: $D_d(x)=\sum_i\lambda_i(x)$ and $\sum_i\mu_i(x)=(-1)^{n-d}\bigl(\prod_j(x-x_j)\bigr)D_d(x)$ away from nodes.

[F2] [[lem-floater-hormann-gap-partial-sums-positive]]: each nonempty block sum over $I_1,I_2,I_3$ is positive; for $d=0$, the first two terms of $I_3$ and the last two terms of $I_1$ form positive pairs.

[F3] [[def-floater-hormann-local-mesh-ratio]]: for $d=0$, $\beta$ is the maximum of the interior minima of the two adjacent-gap ratios, and is zero when $n\le2$.

## Proof

1.1 Suppose $d\ge1$. The middle block $I_2$ contains at least one index: $j=\max(0,\alpha-d+1)$ satisfies $j\le\alpha$, $j+d\ge\alpha+1$, and $j\le n-d$. Thus its window contains both endpoints of the gap and $\mu_j(x)>0$. By [F2], $s(x)=s_1(x)+s_2(x)+s_3(x)\ge s_2(x)\ge\mu_j(x)$, with empty block sums interpreted as zero. From [F1], $$|D_d(x)|=\frac{s(x)}{\prod_{k=0}^{n}|x-x_k|} \ge\frac{\mu_j(x)}{\prod_{k=0}^{n}|x-x_k|} =|\lambda_j(x)| =\frac{1}{\prod_{k=j}^{j+d}|x-x_k|}.$$ This reduces the denominator estimate to one window product. [given, F1, F2, choose, algebra]

1.2 Now let $d=0$. On the first gap, $I_1=\{0\}$ and the other nonempty block sums are positive by [F2], hence $s\ge\mu_0$ and $|D_0(x)|\ge|\lambda_0(x)|=1/(x-x_0)\ge1/h$. On the last gap it gives $I_3=\{n\}$ and the other nonempty block sums are positive, hence $s\ge\mu_n$ and $|D_0(x)|\ge1/(x_n-x)\ge1/h$. These bounds imply the claimed inequality because $\beta\ge0$. [given, F1, F2, algebra]

2.1 Put $u=\alpha-j+1$ and $v=j+d-\alpha$, so $u,v\ge1$ and $u+v=d+1$. For $j\le k\le\alpha$, $|x-x_k|\le x_{\alpha+1}-x_k\le(\alpha+1-k)h$; for $\alpha+1\le k\le j+d$, $|x-x_k|\le x_k-x_\alpha\le(k-\alpha)h$. Multiplying these $d+1$ bounds gives $$\prod_{k=j}^{j+d}|x-x_k|\le u!\,v!\,h^{d+1}\le d!\,h^{d+1}.$$ The last inequality follows from $\binom{d+1}{u}=(d+1)!/(u!v!)\ge d+1$. Substitution in step 1.1 proves the $d\ge1$ bound. [given, step 1.1, algebra]

3.1 If $1\le\alpha\le n-2$, both $I_1$ and $I_3$ are nonempty. The first two terms from $I_3$ and first two read backward from $I_1$ form positive pairs. With $\Delta=x_{\alpha+1}-x_\alpha$, $\delta_R=x_{\alpha+2}-x_{\alpha+1}$ and $\delta_L=x_\alpha-x_{\alpha-1}$, [F1]–[F2] yield $$|D_0(x)|\ge \max\left\{ \frac1{x_{\alpha+1}-x}-\frac1{x_{\alpha+2}-x}, \frac1{x-x_\alpha}-\frac1{x-x_{\alpha-1}} \right\}.$$ Writing $t=x_{\alpha+1}-x\le\Delta$ in the first difference gives $\delta_R/[t(t+\delta_R)]\ge 1/[h(1+\Delta/\delta_R)]$. Writing $u=x-x_\alpha\le\Delta$ in the second gives $\delta_L/[u(u+\delta_L)]\ge 1/[h(1+\Delta/\delta_L)]$. Hence $$|D_0(x)|\ge \frac{1}{h\left(1+\min\{\Delta/\delta_L,\Delta/\delta_R\}\right)} \ge\frac1{h(1+\beta)}$$ by [F3]. For $n\le2$ there is no such interior index, so steps 1.2 cover all gaps. [given, F1, F2, F3, step 1.2, algebra] ∎

