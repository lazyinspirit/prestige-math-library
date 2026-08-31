---
id: thm-morse-sard-for-euclidean-maps
kind: theorem
title: "Morse-Sard for Euclidean maps"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-critical-locus-and-critical-value-set,
       lem-sard-slicing-for-compact-null-sections,
       lem-sard-on-the-nonflat-critical-strata,
       lem-sard-on-the-infinitely-flat-critical-stratum,
       thm-euclidean-inverse-function-theorem]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
    - title: "Encyclopedia of Mathematics, Sard theorem"
      url: "https://encyclopediaofmath.org/wiki/Sard_theorem"
---

## Statement

Let $n\ge 1$, let $U\subseteq\mathbb R^m$ be open, and let $f:U\to\mathbb R^n$
be a $C^r$ map with

$$ r>\max\{m-n,0\}. $$

Then the critical value set of $f$ is a null subset of $\mathbb R^n$.

## Facts & Assumptions

**Given:** An integer $n\ge 1$ and a $C^r$ map $f:U\to\mathbb R^n$ with $r>\max\{m-n,0\}$.

[F1] The critical value set is the image of the critical locus ([[def-critical-locus-and-critical-value-set]]).

[L1] Compact null sections reassemble into a null set, and the nonflat and flat critical strata have null images under the hypotheses of the preceding lemmas ([[lem-sard-slicing-for-compact-null-sections]], [[lem-sard-on-the-nonflat-critical-strata]], [[lem-sard-on-the-infinitely-flat-critical-stratum]]).

[L2] If a Euclidean map has invertible derivative at a point, it becomes a coordinate there after shrinking ([[thm-euclidean-inverse-function-theorem]]).

## Proof
**Proof technique:** direct.

1.1 If $m=0$, then $U$ is at most a point, so $\operatorname{Crit}(f)$ is [F1, given, choose, cases]
finite and $f(\operatorname{Crit}(f))$ is finite. Every finite subset of
$\mathbb R^n$ is null, so the theorem follows. Assume henceforth that $m\ge 1$.
Exhaust $U$ by countably many compact cubes $Q_\nu$ with interiors contained in
$U$. It is enough to show that $f(\operatorname{Crit}(f)\cap Q_\nu)$ is null
for every $\nu$, because the critical value set in [F1] is the countable union
of those images. [F1, given, choose, cases]

2.1 Fix one cube $Q_\nu$ and put [L1, step 1.1, algebra]
$$ C_0:=\operatorname{Crit}(f)\cap Q_\nu,\qquad C_j:=\{x\in Q_\nu:D^\alpha f(x)=0\text{ for every }1\le|\alpha|\le j\} \quad(j\ge 1). $$
Then
$$ C_0=(C_0\setminus C_1)\cup\bigcup_{j=1}^{r-1}(C_j\setminus C_{j+1})\cup C_r. $$
For each $1\le j<r$ and each $\ell\ge 1$, the set
$$ K_{j,\ell}:=\{x\in C_j\cap Q_\nu:\operatorname{dist}(x,C_{j+1})\ge 1/\ell\} $$
is compact and contained in $C_j\setminus C_{j+1}$. Because
$$ C_j\setminus C_{j+1}=\bigcup_{\ell\ge 1}K_{j,\ell}, $$
the nonflat lemma in [L1] shows that $f(C_j\setminus C_{j+1})$ is null. Also,
the set $C_r$ is compact, and the hypothesis $r>\max\{m-n,0\}$ implies
$rn\ge m$; thus the flat lemma in [L1] makes $f(C_r)$ null. [L1, step 1.1,
algebra]

2.2 It remains to show that $f(C_0\setminus C_1)$ is null. [L1, L2, step 1.1, algebra] If $n=1$, then a
linear map $\mathbb R^m\to\mathbb R$ is surjective exactly when it is nonzero,
so $C_0=C_1$ and there is nothing to prove. Assume $n>1$, and fix
$x\in C_0\setminus C_1$. Some first partial derivative of some component of $f$
is nonzero at $x$; after reordering coordinates and components, assume
$$ \frac{\partial f^1}{\partial x^1}(x)\neq 0. $$
By [L2], after shrinking choose a neighbourhood $W_x$ of $x$ and a $C^r$
diffeomorphism
$$ \Phi_x(y):=\bigl(f^1(y),y^2,\ldots,y^m\bigr) $$
from $W_x$ onto an open set $I_x\times\Omega_x\subseteq\mathbb R\times
\mathbb R^{m-1}$. Write
$$ f\circ\Phi_x^{-1}(t,u)=\bigl(t,\widetilde f_x(t,u)\bigr). $$
Each slice map $u\mapsto \widetilde f_x(t,u)$ is $C^r$, and because
$$ r>\max\{m-n,0\}=\max\{(m-1)-(n-1),0\}, $$
the induction hypothesis applies to those maps. If
$q=\Phi_x^{-1}(t,u)\in C_0\cap W_x$, then in these coordinates the differential
of $f$ has block form
$$ Df_q=\begin{bmatrix}1&0\\ *&D(\widetilde f_x)_t(u)\end{bmatrix}, $$
so $q$ is critical for $f$ exactly when $u$ is a critical point of the slice
$u\mapsto\widetilde f_x(t,u)$. Now choose an open neighbourhood
$W_x'\subseteq W_x$ of $x$ with compact closure $K_x\subseteq W_x$. The
compact set $f(C_0\cap K_x)$ has sections contained in the critical value sets
of the slice maps, hence null in $\mathbb R^{n-1}$ by induction. Applying the
slicing lemma in [L1] shows that $f(C_0\cap K_x)$ is null in $\mathbb R^n$. A
countable subcover of $C_0\setminus C_1$ by the neighbourhoods $W_x'$
therefore makes $f(C_0\setminus C_1)$ null. [L1, L2, step 1.1, algebra]

3.1 Step 2.1 shows that $f(C_j\setminus C_{j+1})$ is null for every [F1, step 2.1, step 2.2, step 1.1]
$1\le j<r$ and that $f(C_r)$ is null, while step 2.2 handles
$f(C_0\setminus C_1)$. Hence
$$ f(C_0)=f(\operatorname{Crit}(f)\cap Q_\nu) $$
is null. Applying step 1.1 shows that the whole critical value set of $f$ is
null. [F1, step 2.1, step 2.2, step 1.1] ∎
