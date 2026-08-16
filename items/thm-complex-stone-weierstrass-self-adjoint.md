---
id: thm-complex-stone-weierstrass-self-adjoint
kind: theorem
title: "Complex Stone–Weierstrass dichotomy for separating self-adjoint algebras; the unital case is dense"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-real-part-of-a-self-adjoint-complex-function-algebra, thm-real-stone-weierstrass-dichotomy-for-separating-algebras, thm-complex-numbers-form-a-field, def-complex-conjugate-real-imaginary-part-and-modulus, lem-complex-conjugation-and-modulus-laws, def-complex-metric-convergence-and-continuity]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. M. Erdman, A Companion to Real Analysis, Theorem 21.2.14"
      url: "https://web.pdx.edu/~erdman/CRA/COMPANION_ANALYSIS_pdf.pdf"
    - title: "E. Carlen, Notes on Topology and the Stone-Weierstrass Theorem, Theorem 1.29"
      url: "https://sites.math.rutgers.edu/~carlen/502S13/Topology502.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a compact Hausdorff space and let $A\subseteq C(X,\mathbb C)$ be a point-separating self-adjoint complex function algebra, not necessarily unital. Exactly one of the following descriptions applies when $X$ is nonempty:

1. $A$ has no common zero, and its uniform closure is $C(X,\mathbb C)$;
2. there is a unique $x_0\in X$ at which every member of $A$ vanishes, and the uniform closure of $A$ is exactly
$$I^{\mathbb C}_{x_0}:=\{f\in C(X,\mathbb C):f(x_0)=0\}.$$

If $X=\varnothing$, the first conclusion holds. In particular, every unital point-separating self-adjoint complex function algebra is uniformly dense in $C(X,\mathbb C)$.

## Facts & Assumptions

**Given:** A compact Hausdorff space $X$ and a point-separating self-adjoint complex function algebra $A\subseteq C(X,\mathbb C)$.

[L1] The real-valued part $A_{\mathbb R}$ of $A$ is a point-separating real function algebra with exactly the same common-zero set as $A$, and it is unital when $A$ is unital ([[lem-real-part-of-a-self-adjoint-complex-function-algebra]]).

[L2] A point-separating real function algebra has either full uniform closure or a unique common zero $x_0$ and closure equal to the real functions vanishing at $x_0$; the empty space has full closure ([[thm-real-stone-weierstrass-dichotomy-for-separating-algebras]]).

[L3] The complex numbers form a field containing $\mathbb R$, and every complex number has a unique form $a+bi$ ([[thm-complex-numbers-form-a-field]]).

[L4] For every $z,w\in\mathbb C$, $|z+w|\le|z|+|w|$ and $|zw|=|z||w|$ ([[lem-complex-conjugation-and-modulus-laws]]).

[L5] The metric on $\mathbb C$ is $d_{\mathbb C}(z,w)=|z-w|$, and continuity on subsets of $\mathbb C$ uses this metric ([[def-complex-metric-convergence-and-continuity]]).

[L6] For $z=a+bi$, $\operatorname{Re}z=a$, $\operatorname{Im}z=b$, and $|z|=\sqrt{a^2+b^2}$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

## Proof

**Proof technique:** direct.

1.1 If $X=\varnothing$, then $C(X,\mathbb C)$ has only the empty function, which is the zero element of $A$, so the full-closure conclusion holds. [L1, L2]

1.2 Assume $X\ne\varnothing$. By [L1] and [L2], the real-valued part $A_{\mathbb R}$ either is dense in $C(X,\mathbb R)$ or has a unique common zero $x_0$ and closure equal to the real functions vanishing there. [L1, L2]

2.1 In the dense alternative, let $F\in C(X,\mathbb C)$ and $\varepsilon>0$; the coordinate functions $\operatorname{Re}F$ and $\operatorname{Im}F$ are continuous by [L5] and [L6], so choose $u,v\in A_{\mathbb R}$ within $\varepsilon/2$ of them and put $h:=u+iv\in A$. [step 1.2, L1, L3, L5, L6, choose]

2.2 In the common-zero alternative, [L1] says that the same unique $x_0$ is the common zero of $A$. Every uniform limit of members of $A$ vanishes at $x_0$, so $\overline A\subseteq I^{\mathbb C}_{x_0}$. [step 1.2, L1, L5]

3.1 For every $x\in X$, [L4] gives $|F(x)-h(x)|\le|\operatorname{Re}F(x)-u(x)|+|\operatorname{Im}F(x)-v(x)|<\varepsilon$, so $A$ is dense in $C(X,\mathbb C)$. [step 2.1, L4, L6]

4.1 Conversely, let $F\in I^{\mathbb C}_{x_0}$ and let $\varepsilon>0$. Both $\operatorname{Re}F$ and $\operatorname{Im}F$ vanish at $x_0$; by the real alternative in step 1.2 they can be approximated within $\varepsilon/2$ by $u,v\in A_{\mathbb R}$, and the argument of step 3.1 puts $u+iv\in A$ within $\varepsilon$ of $F$. As $\varepsilon$ was arbitrary, $I^{\mathbb C}_{x_0}\subseteq\overline A$. [step 1.2, step 3.1, L1, L3, L6]

5.1 Steps 2.2, 3.1, and 4.1 transfer both real alternatives to $A$. If $A$ is unital, it contains the constant-one function and therefore has no common zero, so only the dense alternative is possible. [step 3.1, step 2.2, step 4.1, L1] ∎
