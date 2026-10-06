---
id: lem-lca-fourier-transforms-form-a-dense-czero-algebra
kind: lemma
title: LCA Fourier transforms form a dense algebra in C0 of the dual
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
local_addition: true
proof_strategy: direct
deps:
  - lem-characters-of-l1-of-an-abelian-lch-group
  - thm-banach-alaoglu
  - thm-characters-on-a-unital-banach-algebra-are-continuous
  - thm-complex-stone-weierstrass-self-adjoint
  - thm-l1-of-a-locally-compact-group-is-a-banach-star-algebra
  - def-one-point-compactification
  - def-axiom-of-choice
  - def-involution-on-l1-of-a-group
  - lem-complex-haar-l1-and-l2-are-complete-and-cc-dense
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set
  - lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets
  - def-character-and-maximal-ideal-space
  - def-pontryagin-dual-and-compact-open-topology
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Lynn H. Loomis, An Introduction to Abstract Harmonic Analysis, §34A–34C, printed pp. 134–137"
      url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
---

## Statement

Assume AC and let $N$ be a second-countable LCH abelian group. With
$\widehat f(\chi)=\int_Nf(n)\chi(n)\,dn$, each $f\in L^1(N)$ has
$\widehat f\in C_0(\widehat N)$, and the functions $\widehat f$ form a
self-adjoint separating nowhere-vanishing algebra whose uniform closure is
$C_0(\widehat N)$. No injectivity or inversion claim is needed.

## Facts & Assumptions

**Given:** AC and a second-countable LCH abelian group $N$ with Haar measure.

[F1] $L^1(N)$ is a complex Banach $\ast$-algebra with convolution $\ast$ and involution $f^*(n)=\Delta_N(n)^{-1}\overline{f(n^{-1})}$; the classification result for its characters says that $\lambda\mapsto\lambda(f)=\int f\chi\,dn$ is a homeomorphism from $\widehat N$ with the compact-open topology onto the character space of $L^1(N)$ with the pointwise-evaluation topology, and distinct characters give distinct characters of $L^1(N)$ ([[thm-l1-of-a-locally-compact-group-is-a-banach-star-algebra]], [[def-involution-on-l1-of-a-group]], [[lem-characters-of-l1-of-an-abelian-lch-group]]).

[F2] The sum-norm unitization $\widetilde A=\mathbb C\oplus L^1(N)$ is a nonzero unital complex Banach algebra, and every character of $\widetilde A$ is unital and norm-bounded by $1$; its unit ball is weak-star compact by Banach–Alaoglu, and the character space is closed in that unit ball, hence compact Hausdorff ([[thm-characters-on-a-unital-banach-algebra-are-continuous]], [[thm-banach-alaoglu]], [[def-character-and-maximal-ideal-space]]).

[F3] On a compact Hausdorff space, a self-adjoint separating subalgebra of $C(K)$ containing the constants has uniform closure $C(K)$ ([[thm-complex-stone-weierstrass-self-adjoint]]).

[F4] A continuous function on a locally compact Hausdorff space vanishing at infinity extends by zero at the point at infinity to a continuous function on the one-point compactification ([[def-one-point-compactification]]).

[F5] Product and conjugation of Fourier transforms follow from Fubini and the involution: for $f,g$ in the dense subspace $C_c(N)$ one has $\widehat{f\ast g}=\widehat f\widehat g$ and $\widehat{f^*}=\overline{\widehat f}$, and both sides are bounded bilinear in $(f,g)$ with $\|\widehat f\|_\infty\le\|f\|_1$, so the identities hold on all of $L^1(N)$ ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[lem-complex-haar-l1-and-l2-are-complete-and-cc-dense]]).

[F6] Nonnegative compactly supported cutoffs exist near any point, and Haar measure is positive on nonempty open sets, so there is $c\in C_c(N)$ with $c\ge0$ and $\operatorname{Re}\widehat c(\chi)>0$ for a prescribed $\chi$ ([[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]], [[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]], [[def-pontryagin-dual-and-compact-open-topology]]).

[F7] AC is the standing hypothesis ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** AC, the second-countable LCH abelian group $N$, its dual $\widehat N$, and $f\in L^1(N)$.

1.1 The Fourier transform is well defined and bounded: $|\widehat f(\chi)|\le\int_N|f|\,dn=\|f\|_1$, and $\widehat f:\widehat N\to\mathbb C$ is continuous, since compact-open convergence $\chi_i\to\chi$ gives uniform convergence on a compact set carrying all but $\varepsilon$ of $|f|\,dn$ after choosing a compactly supported $L^1$-approximant of $f$. [F1, F5]

1.2 Let $\widetilde A=\mathbb C\oplus L^1(N)$ be the sum-norm unitization and $K=\Delta(\widetilde A)$ its character space, a compact Hausdorff space by [F2]. Every $\psi\in K$ is unital; if $\psi$ does not vanish on $L^1(N)$ its restriction is a character of $L^1(N)$, hence equal to $\lambda_\chi$ for exactly one $\chi\in\widehat N$ by [F1], and then $\psi(z,f)=z+\lambda_\chi(f)$; otherwise $\psi(1,0)=1$ and $\psi(0,f)=0$ for all $f$, so $\psi=q$ with $q(z,f)=z$. Thus $K=\{\widetilde\lambda_\chi:\chi\in\widehat N\}\cup\{q\}$, the map $\chi\mapsto\widetilde\lambda_\chi$ is a homeomorphism onto the open subset $K\setminus\{q\}$ (openness because $\widetilde\lambda_\chi\mapsto\widetilde\lambda_\chi(0,f)=\widehat f(\chi)$), and $K$ is the one-point compactification of $\widehat N$ in the sense of [F4]. [F1, F2, F4]

2.1 Each $\widehat f$ lies in $C_0(\widehat N)$: the evaluation function $\psi\mapsto\psi(0,f)$ is continuous on $K$ by its pointwise-evaluation topology, equals $\widehat f$ on $\widehat N$, and is zero at $q$. Hence its closed superlevel set $\{\psi:|\psi(0,f)|\ge\varepsilon\}$ is compact and misses $q$, for every $\varepsilon>0$. This is a compact superlevel set of $\widehat f$ in $\widehat N$, proving the required vanishing at infinity. [F2, step 1.2]

3.1 The algebra $\mathcal A=\{\widehat f+c:f\in L^1(N),\ c\in\mathbb C\}$ of continuous functions on $K$ contains the constants, is self-adjoint and separates points: $\widehat f\widehat g+c$ corresponds to the $L^1$-function $f\ast g$ up to constants, $\widehat{f^*}=\overline{\widehat f}$ by [F5], distinct points of $\widehat N$ are separated by some $\widehat f$ by [F1], and $q$ is separated from any $\widetilde\lambda_\chi$ by a $\widehat f$ with $\widehat f(\chi)\ne0$, which exists by [F6]. By [F3] its uniform closure is $C(K)$. [F1, F3, F5, F6, step 1.2, step 2.1]

4.1 The transforms alone have uniform closure $C_0(\widehat N)$: if $g\in C_0(\widehat N)$, regard it as an element of $C(K)$ with $g(q)=0$ by [F4] and choose $\widehat f_n+c_n\in\mathcal A$ with $\|\widehat f_n+c_n-g\|_\infty<\varepsilon$; evaluating at $q$ gives $|c_n|<\varepsilon$ because $\widehat f_n(q)=0$ and $g(q)=0$, so $\|\widehat f_n-g\|_\infty\le\|\widehat f_n+c_n-g\|_\infty+|c_n|<2\varepsilon$; hence $g$ is a uniform limit of Fourier transforms. [F3, step 3.1]

5.1 By [step 4.1] the Fourier transforms are uniformly dense in $C_0(\widehat N)$; by [step 2.1] each lies in $C_0(\widehat N)$; by [F5] the family is a self-adjoint algebra; it separates points by the separation used in [step 3.1]; and it vanishes nowhere by the bump construction of [F6], which at each $\chi$ supplies $c$ with $\widehat c(\chi)\ne0$. No injectivity of the transform and no inversion formula were used. [step 2.1, step 3.1, step 4.1, F5, F6, F7] ∎
