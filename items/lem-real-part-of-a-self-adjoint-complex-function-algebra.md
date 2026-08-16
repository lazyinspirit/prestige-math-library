---
id: lem-real-part-of-a-self-adjoint-complex-function-algebra
kind: lemma
title: "The real-valued part of a point-separating self-adjoint complex function algebra is separating and has the same common zeros"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-self-adjoint-complex-function-algebra, def-unital-separating-real-function-algebra-general, thm-complex-numbers-form-a-field, thm-complex-numbers-are-the-real-coordinate-plane, def-complex-conjugate-real-imaginary-part-and-modulus, lem-complex-conjugation-and-modulus-laws, def-complex-metric-convergence-and-continuity]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
sources:
  scraped: []
  references:
    - title: "J. M. Erdman, A Companion to Real Analysis, proof of Theorem 21.2.14"
      url: "https://web.pdx.edu/~erdman/CRA/COMPANION_ANALYSIS_pdf.pdf"
    - title: "E. Carlen, Notes on Topology and the Stone-Weierstrass Theorem, proof of Theorem 1.29"
      url: "https://sites.math.rutgers.edu/~carlen/502S13/Topology502.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a compact Hausdorff space and let $A\subseteq C(X,\mathbb C)$ be a self-adjoint point-separating complex function algebra. Its real-valued part
$$A_{\mathbb R}:=\{f\in A:f(X)\subseteq\mathbb R\}$$
is a point-separating real function algebra. The common-zero sets of $A_{\mathbb R}$ and $A$ are equal. If $A$ is unital, then $A_{\mathbb R}$ is unital.

## Facts & Assumptions

**Given:** A compact Hausdorff space $X$ and a self-adjoint point-separating complex function algebra $A\subseteq C(X,\mathbb C)$.

[L1] A complex function algebra is a complex vector subspace closed under pointwise multiplication; self-adjointness means $f\in A$ implies $\overline f\in A$, and point separation supplies a member distinguishing each distinct pair ([[def-self-adjoint-complex-function-algebra]]).

[L2] Every complex number has a unique form $a+bi$, with $(a+bi)+(u+vi)=(a+u)+(b+v)i$ and $(a+bi)(u+vi)=(au-bv)+(av+bu)i$ ([[thm-complex-numbers-form-a-field]]).

[L3] The map $\Phi(a+bi)=(a,b)$ is a bijection $\mathbb C\to\mathbb R^2$, and it carries complex addition to $(a+u,b+v)$ and multiplication to $(au-bv,av+bu)$ ([[thm-complex-numbers-are-the-real-coordinate-plane]]).

[L4] Complex conjugation is a real-field automorphism with $\overline{z+w}=\overline z+\overline w$, $\overline{zw}=\overline z\,\overline w$, and $\overline{\overline z}=z$ ([[lem-complex-conjugation-and-modulus-laws]]).

[L5] For $z=x+iy$ and $w=u+iv$, $d_{\mathbb C}(z,w)=|z-w|=\sqrt{(x-u)^2+(y-v)^2}$, and continuity on subsets of $\mathbb C$ uses this metric ([[def-complex-metric-convergence-and-continuity]]).

[L6] A real function algebra is a real vector subspace closed under pointwise multiplication; unitality and point separation have their literal constant-function and distinct-pair meanings ([[def-unital-separating-real-function-algebra-general]]).

[L7] For $z=a+bi$, $\operatorname{Re}z=a$, $\operatorname{Im}z=b$, and $\overline z=a-bi$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

## Proof

**Proof technique:** direct.

1.1 For $f\in A$, self-adjointness and complex linearity put $u:=(f+\overline f)/2$ and $v:=(f-\overline f)/(2i)$ in $A$. [L1, L2, L4]

1.2 Sums, real scalar multiples, and products of real-valued members of $A$ are again real-valued by the displayed coordinate formulas in [L2] and [L3], so $A_{\mathbb R}$ is a real function algebra by [L1] and [L6]; if $A$ is unital, its real constant functions lie in $A_{\mathbb R}$. [L1, L2, L3, L6]

2.1 The coordinate formulas in [L2], [L3], and [L7] give $u(x)=\operatorname{Re}f(x)$ and $v(x)=\operatorname{Im}f(x)$ for every $x$, so $u$ and $v$ are real-valued. They are continuous as maps into $\mathbb R$: each is continuous into $\mathbb C$ as a member of $A$, and by [L5] the distance $d_{\mathbb C}$ restricted to the real values agrees with $|s-t|$, so the corestriction of a real-valued continuous map to $\mathbb R$ is again continuous. Hence $u,v\in C(X,\mathbb R)$, and [L5] also gives $|u(x)-u(y)|\le d_{\mathbb C}(f(x),f(y))$ and $|v(x)-v(y)|\le d_{\mathbb C}(f(x),f(y))$. [step 1.1, L2, L3, L5, L7, algebra]

3.1 If $x\ne y$, choose $f\in A$ with $f(x)\ne f(y)$. Since $\Phi$ in [L3] is injective, either $\operatorname{Re}f(x)\ne\operatorname{Re}f(y)$ or $\operatorname{Im}f(x)\ne\operatorname{Im}f(y)$, and step 2.1 places the corresponding separator in $A_{\mathbb R}$. [L1, L3, step 2.1, choose]

4.1 If every member of $A$ vanishes at $x$, then every member of $A_{\mathbb R}$ does. Conversely, if every member of $A_{\mathbb R}$ vanishes at $x$, then step 2.1 makes both real and imaginary parts of every $f(x)$ zero, so coordinate uniqueness in [L2] gives $f(x)=0$; hence the two common-zero sets are equal. [step 2.1, L2] ∎
