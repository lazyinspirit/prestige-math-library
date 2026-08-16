---
id: lem-uniform-closure-of-a-general-real-function-algebra-is-a-lattice
kind: lemma
title: "The uniform closure of a real function algebra is a vector lattice"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-unital-separating-real-function-algebra-general, cor-weierstrass-approximation-on-a-closed-interval, thm-uniform-limit-theorem, thm-compactness-under-continuous-maps]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. M. Erdman, A Companion to Real Analysis, Proposition 21.2.4"
      url: "https://web.pdx.edu/~erdman/CRA/COMPANION_ANALYSIS_pdf.pdf"
    - title: "M. Xu, Math 205B notes from a course by R. Mazzeo (Stanford), Lemma 9.5"
      url: "https://math.berkeley.edu/~moorxu/oldsite/notes/205b/205bmain.pdf"
    - title: "E. Carlen, Notes on Topology and the Stone-Weierstrass Theorem, Lemma 1.28"
      url: "https://sites.math.rutgers.edu/~carlen/502S13/Topology502.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a compact Hausdorff space and let $A\subseteq C(X,\mathbb R)$ be a real function algebra, not necessarily unital. Let $\overline A$ consist of the continuous functions that can be approximated uniformly by members of $A$. Then $\overline A$ is a real function algebra and a real vector sublattice of $C(X,\mathbb R)$.

## Facts & Assumptions

**Given:** A compact Hausdorff space $X$, a real function algebra $A\subseteq C(X,\mathbb R)$, and its uniform closure $\overline A$.

[L1] For $a\le b$, every continuous real function on $[a,b]$ is a uniform limit of polynomials ([[cor-weierstrass-approximation-on-a-closed-interval]]).

[L2] If for every $\varepsilon>0$ a function $f:X\to Y$ has a continuous approximant $g$ with $d(f(x),g(x))<\varepsilon$ for every $x$, then $f$ is continuous ([[thm-uniform-limit-theorem]], clause 1).

[L3] If $X$ is compact and nonempty and $g:X\to\mathbb R$ is continuous, then $g[X]$ has a maximum and a minimum ([[thm-compactness-under-continuous-maps]], clause 2).

[L4] A real function algebra is a real vector subspace of $C(X,\mathbb R)$ closed under pointwise multiplication ([[def-unital-separating-real-function-algebra-general]]).

## Proof

**Proof technique:** direct.

1.1 If $X=\varnothing$, then $C(X,\mathbb R)$ consists of the unique empty function, which is the zero element of the vector subspace $A$; hence $A=\overline A=C(X,\mathbb R)$ and the claim is immediate. [L4]

1.2 Assume $X\ne\varnothing$. By the definition of uniform closure, every $f\in\overline A$ has, for every positive error, a continuous approximant from $A$, so [L2] confirms that all such uniform limits remain continuous. [L2, L4]

1.3 The set $\overline A$ is a real vector subspace: approximants to $f$ and $g$ add to an approximant to $f+g$, scalar multiples approximate scalar multiples, and the zero function belongs to $A$. [L4, algebra]

2.1 The set $\overline A$ is closed under multiplication. Indeed, for $f,g\in\overline A$, [L3] gives finite bounds $M_f:=\max_X|f|$ and $M_g:=\max_X|g|$. Given $\eta>0$, choose $a,b\in A$ with $$\lVert a-f\rVert_\infty<\min\{1,\eta/(2(M_g+1))\},\qquad \lVert b-g\rVert_\infty<\eta/(2(M_f+1)).$$ Then $|a|\le M_f+1$ and $$|ab-fg|\le |a||b-g|+|g||a-f|<\eta$$ pointwise. Thus products of members of $\overline A$ again lie in $\overline A$. [L3, L4, step 1.3, choose, algebra]

2.2 Fix $f\in\overline A$ and $\varepsilon>0$. By [L3], $|f|$ has a maximum $M\ge0$; if $M=0$ then $f=0$ and $|f|=0\in\overline A$. [L3, step 1.3]

3.1 If $M>0$, apply [L1] on $[-M,M]$ to choose a polynomial $q$ with $|q(t)-|t||<\varepsilon/2$ there, and put $p(t):=q(t)-q(0)$. Then $p(0)=0$, $|p(t)-|t||<\varepsilon$ on $[-M,M]$, and steps 1.3 and 2.1 give $p(f)\in\overline A$. Hence $|f|$ is uniformly approximable by members of $\overline A$, and therefore belongs to the closed set $\overline A$. Together with the $M=0$ case in step 2.2, this proves $|f|\in\overline A$ for every $f\in\overline A$. [L1, step 1.3, step 2.1, step 2.2, choose, algebra]

4.1 For $f,g\in\overline A$, the pointwise identities $f\vee g=(f+g+|f-g|)/2$ and $f\wedge g=(f+g-|f-g|)/2$, together with steps 1.3 and 3.1, put both functions in $\overline A$; hence $\overline A$ is a real vector sublattice. [step 1.3, step 3.1, algebra] ∎
