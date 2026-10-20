---
id: lem-relu-network-vc-dimension-bound
kind: lemma
title: "VC bounds for a fixed ReLU architecture"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-relu-network, def-vc-class-of-sets-and-index, thm-warren-polynomial-sign-pattern-bound]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Dmitry Yarotsky, Error bounds for approximations with deep ReLU networks, Theorem 4 proof, equations (33) and (34)"
      url: "https://arxiv.org/pdf/1610.01145"
      locator: "Printed pp. 20–23, especially equations (33)–(34) on p. 21."
    - title: "Matus Telgarsky, Deep learning theory lecture notes, §17.3"
      url: "https://mjt.cs.illinois.edu/dlt/index.html#sec:gen:reluvc"
      locator: "Full layer-partition proof of Theorem 17.4; this proof replaces its unproved sharp Warren supplier with a proved coarse bound."
---

## Statement

Fix a scalar-output ReLU feedforward architecture on $[0,1]^d$, permitting skip edges, with $W\ge1$ scalar connection coefficients and unit biases, and depth at most $L$. Fix a real threshold $a$. For its realizations $f_\theta$, let $\mathcal H_a=\{\{x:f_\theta(x)>a\}:\theta\in\mathbb R^W\}$. There is an absolute constant $C$ such that $\operatorname{VC}(\mathcal H_a)\le CW^2$ and $\operatorname{VC}(\mathcal H_a)\le CW L\log(2W)$. In particular, for $W\ge2$ the bound $\operatorname{VC}(\mathcal H_a)\le C L^2W\log W$ holds. The same assertions hold for $f_\theta(x)\ge a$. The parameter count includes every hidden and output bias, even when its chosen value is zero.

## Statement references

[[def-relu-network|ReLU network and complexity conventions]]

[[def-vc-class-of-sets-and-index|Shattering and VC dimension on an arbitrary domain]]

[Yarotsky, Theorem 4 proof: the two VC estimates used for approximation lower bounds](https://arxiv.org/pdf/1610.01145)

[Telgarsky, §17.3: the layer-partition argument](https://mjt.cs.illinois.edu/dlt/index.html#sec:gen:reluvc)

## Facts & Assumptions

**Given:** A fixed architecture with scalar output, $W$ counted coefficients and biases, depth at most $L$, and a fixed threshold $a$.

[F1] Each hidden unit applies $\max(0,z)$ to an affine combination of earlier values, and the output is affine; skip edges are permitted and each unit bias counts as a weight ([[def-relu-network]]).

[F2] For $M$ real polynomials of total degree at most $q$ in $w$ variables, the number of binary vectors of strict positivity, or of nonnegativity, is at most $(2Mq+1)^w$, also on an arbitrary subset of the parameter space ([[thm-warren-polynomial-sign-pattern-bound]]).

[F3] Shattering a finite set means realizing all its subsets; every subset of a shattered set is shattered ([[def-vc-class-of-sets-and-index]]).

## Proof

1.1 Remove all hidden units that have no path to the output. Also remove all hidden units having no input ancestor: for each fixed parameter assignment their values are constants in $x$, and their contributions to a remaining unit or the output can be added to its existing bias. Allowing these new biases to vary independently produces a fixed reduced architecture whose realization class contains the original class. No new coefficient slots are needed, because every surviving computation unit already has a bias; edges and removed units only disappear. If the output has no input ancestor, the original class consists of constant functions and has VC dimension at most $1$, which satisfies the conclusions. Otherwise the reduced graph has $w\le W$ counted slots, $U$ hidden units, and $U+1\le w$ because the output and every hidden unit have counted biases. Every remaining unit lies on an input-to-output path. Rank each hidden unit by the maximum number of computation units on an input-to-that-unit path, and give the output its analogous rank $K$. Then each edge increases rank, and $K\le L-1$ and $K\le U+1\le w$. Empty ranks can be omitted. It suffices to bound the reduced class. [F1, F3, construct]

2.1 Fix arbitrary sample points $x_1,\ldots,x_m$. For any prescribed binary mask $b\in\{0,1\}^U$, replace the ReLU at hidden unit $v$ by multiplication of its preactivation by $b_v$. Its preactivation and the final output are now polynomials in the $w$ parameters. By induction along the graph, a unit of rank $j$ has polynomial degree at most $j$: input values have degree zero, multiplication by an edge coefficient raises degree by one, addition of a bias has degree one, and multiplication by a fixed mask entry changes no degree. Thus every such polynomial has degree at most $K\le w$. On any actual parameter vector the convention $b_v=\mathbf1_{z_v>0}$ gives a unique mask, even when a preactivation is zero, and the masked polynomials then reproduce every actual unit value. [F1, step 1.1, construct, algebra]

3.1 For each sample point and each of the $2^U$ masks, form the $U$ preactivation polynomials and the output polynomial minus $a$. There are $M=m(U+1)2^U$ polynomials, all of degree at most $w$. Their strict-positivity vector determines the actual output classification at every sample point: evaluate units in topological order, determining their actual mask by the relevant preactivation entry, then read the output entry for that mask. Hence the number of label vectors is at most $(2Mw+1)^w\le(3mw^2 2^w)^w$ by [F2]. If the classifier uses $\ge a$, take the hidden-unit mask $\mathbf1_{z_v\ge0}$ and use nonnegativity vectors throughout; at zero, multiplying by either mask value still gives the ReLU value, so the same count holds. [F2, step 2.1, construct, algebra]

3.2 For a second count, start with the single parameter-space cell $\mathbb R^w$. At stage $j$, refine every existing cell by the activation bits of all units of rank $j$ at all $m$ sample points; at the final stage refine by the output threshold bits. Within a cell, all earlier mask bits are fixed, so the relevant $mN_j$ preactivation polynomials, or output-minus-threshold polynomials, have degree at most $j\le K$ by step 2.1, where $N_j$ is the number of units at that rank, with $N_K=1$ for the output. By [F2] there are at most $(2mN_jK+1)^w\le(3mwK)^w$ refinements of each cell. This estimate holds on an arbitrary cell; no connectedness or openness is needed. After $K$ stages, the number of cells, hence the number of output label vectors, is at most $(3mwK)^{wK}$. The construction using $\ge0$ activation bits and nonnegativity output bits proves the identical bound for the other threshold convention. [F2, step 1.1, step 2.1, construct, algebra]

4.1 Put $m_0=64w^2$. At this sample size the base-two logarithm of the last bound is $w(\log_2 3+\log_2m_0+2\log_2w+w)=w(w+\log_2 3+6+4\log_2w)\le13w^2<m_0$, using $\log_2w\le w$ for integers $w\ge1$. Thus no $m_0$-point set can be shattered, and [F3] rules out all larger shattered sets. Consequently $\operatorname{VC}(\mathcal H_a)<64w^2\le64W^2$. [F3, step 3.1, algebra]

5.1 Write $A=wK$ and $B=\log_2(2w)\ge1$, and take the integer $m_1=\lceil64AB\rceil\le65AB$. Since $K\le w$, one has $\log_2 A\le2\log_2w$ and $\log_2B\le B$. The base-two logarithm of the label-count bound at $m=m_1$ is at most $A\log_2(195A^2B)\le A(8+4\log_2w+\log_2B)\le A(4+5B)\le9AB< m_1$. No set of $m_1$ points is shattered. Therefore $\operatorname{VC}(\mathcal H_a)<m_1\le65wK\log_2(2w)\le65WL\log_2(2W)$. Conversion between logarithm bases changes only an absolute constant. For $W\ge2$, $\log(2W)\le2\log W$ and $L\ge1$, so this implies the requested $CL^2W\log W$ estimate. Together with step 4.1 and the constant-output case, this proves every assertion. [F3, step 1.1, step 4.1, step 3.2, algebra] ∎

## Remarks

The stronger $CWL\log(2W)$ layer estimate is included because the same elementary proof gives it. The classical $CL^2W\log W$ estimate is used in Yarotsky's stated approximation lower bound and is preserved here. The use of $\log(2W)$ before imposing $W\ge2$ avoids the false zero bound at $W=1$. A variable final threshold can be absorbed into the already present output bias and does not require a new parameter slot.
