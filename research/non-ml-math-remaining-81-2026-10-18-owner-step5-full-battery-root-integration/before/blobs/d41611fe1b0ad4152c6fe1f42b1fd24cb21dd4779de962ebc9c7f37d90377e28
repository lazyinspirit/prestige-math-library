---
id: thm-morse-sard-for-euclidean-maps
kind: theorem
title: "Morse-Sard for Euclidean maps"
status: published
dependency_level: 3
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-c1-critical-locus-and-critical-value-set-in-euclidean-spaces,
       def-null-and-content-zero-in-rn,
       lem-sard-slicing-for-compact-null-sections,
       lem-sard-on-the-nonflat-critical-strata,
       lem-sard-on-the-infinitely-flat-critical-stratum,
       thm-euclidean-inverse-function-theorem]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Azagra, Ferrera and Gómez-Gil, The Morse-Sard theorem revisited, Claim 3.4, arXiv:1511.05822"
      url: "https://arxiv.org/pdf/1511.05822"
    - title: "Encyclopedia of Mathematics, Sard theorem"
      url: "https://encyclopediaofmath.org/wiki/Sard_theorem"
verification:
  precheck: pass
  repair: research/non-ml-math-remaining-81-2026-10-18-owner-sard-completion/published-receipts/thm-morse-sard-for-euclidean-maps.json
---

## Statement

Let $m\ge0$, $n\ge1$, and $r\ge1$ be integers, let $U\subseteq\mathbb R^m$
be open, and let $f:U\to\mathbb R^n$ be a $C^r$ map with

$$ r>\max\{m-n,0\}. $$

Then the critical value set of $f$ is a null subset of $\mathbb R^n$.

## Facts & Assumptions

**Given:** An integer $n\ge 1$ and a $C^r$ map $f:U\to\mathbb R^n$ with $r>\max\{m-n,0\}$.

[F1] For every $C^1$ Euclidean map, the critical locus consists of points where the total derivative is not onto, and the critical-value set is its image, including for zero-dimensional source ([[def-c1-critical-locus-and-critical-value-set-in-euclidean-spaces]]). We write these sets as $\operatorname{Crit}(f)$ and $\operatorname{CV}(f)$.

[F2] Nullity is expressed by countable cube covers of arbitrarily small total volume ([[def-null-and-content-zero-in-rn]]).

[L1] Compact null sections reassemble into a null set, and the nonflat and flat critical strata have null images under the hypotheses of the preceding lemmas ([[lem-sard-slicing-for-compact-null-sections]], [[lem-sard-on-the-nonflat-critical-strata]], [[lem-sard-on-the-infinitely-flat-critical-stratum]]).

[L2] A $C^1$ Euclidean map with invertible derivative has a local $C^1$ inverse $g$, with $Dg=(Df\circ g)^{-1}$ ([[thm-euclidean-inverse-function-theorem]]). For a $C^r$ map this inverse is $C^r$: inductively, if $g$ is $C^k$ and $k<r$, then $Df\circ g$ is $C^k$, and matrix inversion is $C^k$ on invertible matrices by the adjugate-over-determinant formula; the displayed identity makes $Dg$ $C^k$, hence $g$ $C^{k+1}$.

## Proof
**Proof technique:** direct.

1.1 Prove the assertion by induction on the source dimension $m$, keeping the differentiability order $r$ fixed. If $m=0$, then $U$ is at most a point, so $\operatorname{Crit}(f)$ and its image are finite, hence null in $\mathbb R^n$. Assume $m\ge1$ and the theorem proved for all smaller source dimensions and every positive target dimension satisfying the same differentiability inequality. Exhaust $U$ by the canonically enumerated rational closed cubes with closures inside $U$. We use the following choice-free countable-union observation throughout: every compact null subset of $\mathbb R^n$ has, for each positive rational budget, a **finite** rational-cube cover below that budget. Indeed, start with a countable cube cover of total volume below half the budget from [F2], enlarge its cubes slightly to rational open cubes while retaining the budget, and take a finite subcover by compactness. Enumerate all finite rational-cube families and use the first qualifying family for each compact set and budget. For a countable sequence of compact null sets, use budgets $\varepsilon2^{-i-1}$ and combine these canonical finite covers; [F2] makes their union null without making countably many arbitrary choices. Thus it suffices to prove $f(\operatorname{Crit}(f)\cap Q_\nu)$ null for each cube: these images are compact and their countable union is the critical value set of [F1]. [F1, F2, given, construct, cases]

2.1 Fix one cube $Q_\nu$ and put $$ C_0:=\operatorname{Crit}(f)\cap Q_\nu,\qquad C_j:=\{x\in Q_\nu:D^\alpha f(x)=0\text{ for every }1\le|\alpha|\le j\} \quad(j\ge 1). $$ These are the intersections of $Q_\nu$ with the corresponding closed strata in $U$. Then $$ C_0=(C_0\setminus C_1)\cup\bigcup_{j=1}^{r-1}(C_j\setminus C_{j+1})\cup C_r. $$ For each $1\le j<r$ and each $\ell\ge 1$, the set $$ K_{j,\ell}:=\{x\in C_j:\operatorname{dist}(x,C_{j+1})\ge 1/\ell\} $$ is compact and contained in $C_j\setminus C_{j+1}$ (take distance to the empty set as infinite). Because $$ C_j\setminus C_{j+1}=\bigcup_{\ell\ge 1}K_{j,\ell}, $$ the nonflat lemma in [L1] applies: its lower-dimensional Sard premise holds by the induction hypothesis at the unchanged order $r$, since $r>\max\{m-n,0\}$ implies $r>\max\{(m-1)-n,0\}$. Each $f(K_{j,\ell})$ is compact null, so the canonical-cover observation in step 1.1 makes $f(C_j\setminus C_{j+1})$ null. Also, $C_r$ is compact, and $r>\max\{m-n,0\}$ implies $rn\ge m$; the flat lemma in [L1] makes $f(C_r)$ null. [L1, step 1.1, algebra]

2.2 It remains to show that $f(C_0\setminus C_1)$ is null. If $n=1$, then a linear map $\mathbb R^m\to\mathbb R$ is surjective exactly when it is nonzero, so $C_0=C_1$ and there is nothing to prove. Assume $n>1$, and fix $x\in C_0\setminus C_1$. Some first partial derivative of some component of $f$ is nonzero at $x$; after reordering coordinates and components, assume $$ \frac{\partial f^1}{\partial x^1}(x)\neq 0. $$ By [L2], after shrinking choose a neighbourhood $W_x$ of $x$ and a $C^r$ diffeomorphism $$ \Phi_x(y):=\bigl(f^1(y),y^2,\ldots,y^m\bigr) $$ from $W_x$ onto an open set $I_x\times\Omega_x\subseteq\mathbb R\times \mathbb R^{m-1}$. Write $$ f\circ\Phi_x^{-1}(t,u)=\bigl(t,\widetilde f_x(t,u)\bigr). $$ Each slice map $u\mapsto \widetilde f_x(t,u)$ is $C^r$, and because $$ r>\max\{m-n,0\}=\max\{(m-1)-(n-1),0\}, $$ the induction hypothesis applies to those maps. If $q=\Phi_x^{-1}(t,u)\in C_0\cap W_x$, then in these coordinates the differential of $f$ has block form $$ Df_q=\begin{bmatrix}1&0\\ *&D(\widetilde f_x)_t(u)\end{bmatrix}, $$ so $q$ is critical for $f$ exactly when $u$ is a critical point of the slice $u\mapsto\widetilde f_x(t,u)$. For every rational open cube $B$ whose closure lies in $W_x$, the compact set $f(C_0\cap\overline B)$ has sections contained in the slice critical value sets, hence null in $\mathbb R^{n-1}$ by induction. The slicing lemma in [L1] makes this compact image null in $\mathbb R^n$. Consider **all** rational cubes $B$ for which such an $x$ and chart exist; they form a countable family covering $C_0\setminus C_1$. Each has the compact-null conclusion just proved, independently of which witnessing chart exists. The canonical-cover observation in step 1.1 makes their image union $f(C_0\setminus C_1)$ null without selecting charts or covers countably. [L1, L2, step 1.1, algebra]

3.1 Step 2.1 shows that $f(C_j\setminus C_{j+1})$ is null for every $1\le j<r$ and that $f(C_r)$ is null, while step 2.2 handles $f(C_0\setminus C_1)$. Hence $$ f(C_0)=f(\operatorname{Crit}(f)\cap Q_\nu) $$ is null. Applying step 1.1 shows that the whole critical value set of $f$ is null. [F1, step 2.1, step 2.2, step 1.1] ∎ 