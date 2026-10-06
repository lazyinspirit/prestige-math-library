---
id: lem-convex-norm-lower-semicontinuous-functionals-are-weakly-lower-semicontinuous
kind: lemma
title: "A convex norm-lower-semicontinuous functional is weakly lower semicontinuous"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps: [def-proper-coercive-and-weakly-lower-semicontinuous-functional, def-convex-and-strictly-convex-functionals-on-a-banach-space, thm-norm-closed-convex-iff-weakly-closed, def-hahn-banach-extension-principle-relative, def-weak-convergence-of-nets-and-sequences, def-limsup-liminf, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 13.2, Lemma 13.3 and its proof, printed p. 298"
    - title: "Francesco Paolo Maiale (course by Giovanni Alberti), Lecture Notes Calculus of Variations A, University of Pisa (last update 21 August 2019; complete 149-page notes)"
      url: "https://poisson.phc.dm.unipi.it/~fpmaiale/notes/CdV-A.pdf"
      locator: "Chapter 2 Section 4, printed pp. 43-44 (Theorem 2.40, Lemma 2.41, Theorem 2.44(ii))"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume HB ([[def-hahn-banach-extension-principle-relative]]) and Countable Choice ([[def-countable-choice]]). Let $X$ be a real normed space, let $K\subseteq X$ be nonempty and convex ([[def-convex-and-strictly-convex-functionals-on-a-banach-space]]) and let $I:K\to(-\infty,+\infty]$ be convex and sequentially lower semicontinuous in the norm topology ([[def-proper-coercive-and-weakly-lower-semicontinuous-functional]]). Then $I$ is weakly sequentially lower semicontinuous on $K$: for every $(u_j)\subseteq K$ with $u_j\rightharpoonup u\in K$ ([[def-weak-convergence-of-nets-and-sequences]]),
$$I(u)\le\liminf_j I(u_j).$$

## Facts & Assumptions

**Given:** HB and Countable Choice; a real normed space $X$, a nonempty convex set $K\subseteq X$, and a convex functional $I:K\to(-\infty,+\infty]$ that is sequentially lower semicontinuous in the norm topology.

[F1] A convex functional has convex sublevel sets: for every $t\in\mathbb R$ the set $\{v\in K:I(v)\le t\}$ is convex ([[def-convex-and-strictly-convex-functionals-on-a-banach-space]]).

[F2] Norm sequential lower semicontinuity means $I(v)\le\liminf_jI(v_j)$ whenever $v_j\to v\in K$ in norm with $v_j\in K$ ([[def-proper-coercive-and-weakly-lower-semicontinuous-functional]]). It gives closedness of sublevels relative to $K$, not necessarily in $X$.

[F3] Under HB the norm and weak closures in $X$ of any convex subset coincide ([[thm-norm-closed-convex-iff-weakly-closed]]).

[F6] Countable Choice selects a point from each nonempty set $S\cap B(u,1/m)$, $m\ge1$, whenever $u$ lies in the norm closure of $S$ ([[def-countable-choice]]).

[F4] Weak convergence $u_j\rightharpoonup u$ is convergence in $\sigma(X,X^*)$; in particular every subsequence of a weakly convergent sequence converges weakly to the same limit ([[def-weak-convergence-of-nets-and-sequences]]).

[F5] Limit inferior: if $\liminf_ja_j<t$ for a sequence in $(-\infty,+\infty]$ and a real $t$, then $a_j\le t$ for infinitely many $j$, so a strictly increasing sequence of indices $j_k$ with $a_{j_k}\le t$ for all $k$ exists ([[def-limsup-liminf]]).

## Proof

**Proof technique:** direct, by comparing the norm and weak closures of a convex sublevel set.

1.1 Suppose $u_j\rightharpoonup u$ with $(u_j)\subseteq K$ and $u\in K$, and put $\ell:=\liminf_jI(u_j)$. If $I(u)>\ell$, then since $I(u)\in(-\infty,+\infty]$ there is a real $t$ with $\ell<t<I(u)$ (if $I(u)$ is finite take $t$ between; if $I(u)=+\infty$ take any real $t>\ell$). [F5, given, algebra]

2.1 A subsequence in the sublevel set. By [F5], applied to the sequence $(I(u_j))$ and this $t$, there is a strictly increasing sequence of indices $j_k$ with $I(u_{j_k})\le t$ for every $k$. By [F4] the subsequence still satisfies $u_{j_k}\rightharpoonup u$. [F4, F5, step 1.1]

3.1 Use the ambient closures. Put $S_t:=\{v\in K:I(v)\le t\}$. It is nonempty by step 2.1 and convex by [F1]. Since $u_{j_k}\in S_t$ and $u_{j_k}\rightharpoonup u$, the point $u$ lies in the weak closure of $S_t$ in $X$. By [F3] it therefore lies in its norm closure. No ambient closedness of $K$ or $S_t$ is required. [F1, F3, step 2.1]

4.1 Recover the relative sublevel inequality. For each integer $m\ge1$, choose $v_m\in S_t$ with $\|v_m-u\|<1/m$, using [F6]. Then $v_m\to u$ in norm, $v_m\in K$ and $u\in K$. Thus [F2] gives $I(u)\le\liminf_m I(v_m)\le t$. [F2, F6, step 3.1, given]

5.1 Conclusion. Step 4.1 gives $I(u)\le t<I(u)$ by the choice of $t$ in step 1.1, a contradiction; hence $I(u)\le\ell=\liminf_jI(u_j)$. As $(u_j)$ and $u$ were arbitrary, $I$ is weakly sequentially lower semicontinuous on $K$. [step 4.1, step 1.1] ∎ 