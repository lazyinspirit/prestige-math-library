---
id: lem-a-half-dimensional-isotropic-subspace-forces-zero-signature
kind: lemma
title: "A nondegenerate symmetric form with a half-dimensional isotropic subspace has zero signature"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
aliases: []
dependency_level: 0
deps:
  - def-definiteness-inertia-and-signature-data-over-the-reals
  - thm-sylvesters-law-of-inertia
  - thm-symmetric-bilinear-forms-have-an-orthogonal-basis
  - def-bilinear-symmetric-skew-and-alternating-forms
  - def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form
  - cor-real-symmetric-bilinear-forms-are-classified-by-inertia
  - def-euclidean-inner-product
  - thm-rank-nullity
  - thm-dimension-of-a-linear-subspace
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Lemma 11.30, printed p. 96: a half-dimensional isotropic subspace forces signature zero"
    - title: "John Milnor and James Stasheff, Characteristic Classes (re-typeset scan; original pagination)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "section 19, Lemma 19.3(3), original pp. 224-225: the boundary vanishing of the signature is the topological application"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $V$ be a finite-dimensional real vector space with a symmetric bilinear
form $B$ ([[def-bilinear-symmetric-skew-and-alternating-forms]]), and let
$W\subseteq V$ be **totally isotropic**: $B(w,w')=0$ for all $w,w'\in W$. If
$B$ is nondegenerate
([[def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]]) and
$2\dim W=\dim V$, then $\operatorname{sign}(B)=b_+-b_-=0$, with
$b_+=b_-=\tfrac12\dim V$; equivalently, in a suitable basis $B$ is an
orthogonal direct sum of hyperbolic planes.

## Facts & Assumptions

**Given:** A finite-dimensional real vector space $V$ with a symmetric
bilinear form $B$, and a totally isotropic subspace $W\subseteq V$ with
$2\dim W=\dim V$ and $B$ nondegenerate.

[F1] If a basis diagonalizes $B$ with $p$ positive, $q$ negative and $r$ zero
diagonal entries, the inertia is $(p,q,r)$, the rank is $p+q$, the signature is
$p-q$, and Sylvester's law makes the triple independent of the diagonalizing
basis ([[def-definiteness-inertia-and-signature-data-over-the-reals]]).

[F2] Every symmetric bilinear form on a finite-dimensional real vector space is
congruent to exactly one normal form $\operatorname{diag}(I_p,-I_q,0_r)$ with
$p+q+r=\dim V$ ([[thm-sylvesters-law-of-inertia]]).

[F3] In a basis $\mathcal B$ with coordinate columns $x=[u]_{\mathcal B}$ and
$y=[v]_{\mathcal B}$ one has $B(u,v)=x^{\mathsf T}[B]_{\mathcal B}y$; the left
and right radicals are the sets of vectors pairing to zero with everything, and
$B$ is nondegenerate exactly when both radicals vanish
([[def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]]).

[F4] A symmetric bilinear form satisfies $B(u,v)=B(v,u)$ for all $u,v$
([[def-bilinear-symmetric-skew-and-alternating-forms]]).

[F5] On $\mathbb R^{N}$ the Euclidean inner product is positive definite:
$\langle x,x\rangle=\sum_{k<N}x_k^2\ge0$, and $\langle x,x\rangle=0$ holds only
for $x=0$ ([[def-euclidean-inner-product]]).

[F6] For a linear map $T:U\to U'$ with $U$ finite-dimensional,
$\dim U=\dim\ker T+\dim\operatorname{im}T$ ([[thm-rank-nullity]]).

[F7] A subspace of a finite-dimensional space is finite-dimensional and has
dimension at most that of the ambient space
([[thm-dimension-of-a-linear-subspace]]).

## Proof

**Proof technique:** direct; diagonal normal form and the positivity of sums of
squares.

1.1 If $\dim V=0$ then $V=0$ and $W=0$, the inertia is $(0,0,0)$, so $\operatorname{sign}(B)=0$ and $b_+=b_-=0=\tfrac12\dim V$. [given, F1]

1.2 Suppose $\dim V=n$. By [F2], fix a basis $e_1,\dots,e_n$ of $V$ in which $B$ has matrix $\operatorname{diag}(I_p,-I_q,0_r)$ with $p+q+r=n$; thus $B(e_i,e_j)=\varepsilon_i\delta_{ij}$ with $\varepsilon_i=1$ for $i\le p$, $\varepsilon_i=-1$ for $p<i\le p+q$, and $\varepsilon_i=0$ otherwise. No $\varepsilon_i$ is zero: if $\varepsilon_i=0$, then $B(e_i,e_j)=0$ for every $j$, so $B(e_i,-)$ vanishes on the basis and hence on $V$, putting the nonzero vector $e_i$ in the left radical, contrary to nondegeneracy. Hence $r=0$ and $p+q=n$. [given, F2, F3]

1.3 Let $w=\sum_{i=1}^{n}a_ie_i\in W$. Since $W$ is totally isotropic, $0=B(w,w)=\sum_{i\le p}a_i^2-\sum_{i>p}a_i^2$ by the diagonal matrix formula [F3]; equivalently $\sum_{i\le p}a_i^2=\sum_{i>p}a_i^2$. [given, F3, F4, algebra]

2.1 The coordinate projection $\pi_+:W\to V_+:=\operatorname{span}(e_1,\dots,e_p)$, $\pi_+(w)=\sum_{i\le p}a_ie_i$, is injective: if $\pi_+(w)=0$, then $\sum_{i\le p}a_i^2=0$, so by step 1.3 also $\sum_{i>p}a_i^2=0$, and by the positive definiteness [F5] applied to the coordinate vector of $\pi_-(w)=\sum_{i>p}a_ie_i$ we get $\pi_-(w)=0$; hence $w=0$. [step 1.3, F3, F5]

3.1 By [F6] applied to the injective linear map $\pi_+$, whose image lies in the $p$-dimensional space $V_+$ with basis $e_1,\dots,e_p$, we get $\dim W=\dim\operatorname{im}\pi_+\le\dim V_+=p$ by [F7]. [step 2.1, F6, F7, given]

4.1 The projection $\pi_-:W\to\operatorname{span}(e_{p+1},\dots,e_{p+q})$ onto the negative coordinates is injective by the same argument: if $\pi_-(w)=0$, then $\sum_{i>p}a_i^2=0$, so by step 1.3 also $\sum_{i\le p}a_i^2=0$, so $\pi_+(w)=0$ and step 2.1 gives $w=0$. Applying [F6] and [F7] as in step 3.1 to the subspace $\operatorname{span}(e_{p+1},\dots,e_{p+q})$ of dimension $q$ gives $\dim W\le q$. [step 1.3, step 2.1, step 3.1, F5, F6, F7, given]

5.1 Since $2\dim W=n=p+q$ and $\dim W\le\min(p,q)$, both $p$ and $q$ equal $\dim W=\tfrac12\dim V$. By [F1] the inertia is $(m,m,0)$ with $m=\dim W$, so $b_+=b_-=m=\tfrac12\dim V$ and $\operatorname{sign}(B)=p-q=0$. [step 3.1, step 4.1, F1, given]

6.1 Equivalently, the basis can be chosen hyperbolic: with $m=\dim W$ and $u_i:=e_i+e_{m+i}$, $g_i:=\tfrac12(e_i-e_{m+i})$ for $1\le i\le m$, bilinearity and [F4] give $B(u_i,u_i)=1-1=0$, $B(g_i,g_i)=\tfrac14(1-1)=0$ and $B(u_i,g_i)=\tfrac12(1+1)=1$, while orthogonality of the diagonal basis makes the planes $\operatorname{span}(u_i,g_i)$ pairwise orthogonal with $V=\bigoplus_{i=1}^{m}\operatorname{span}(u_i,g_i)$. Thus $B$ is an orthogonal direct sum of $m$ hyperbolic planes. [step 1.2, step 5.1, F3, F4, algebra] ∎