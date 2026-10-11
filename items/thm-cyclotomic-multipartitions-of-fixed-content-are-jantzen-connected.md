---
id: thm-cyclotomic-multipartitions-of-fixed-content-are-jantzen-connected
kind: theorem
title: "Cyclotomic multipartitions have equal residue content exactly when Jantzen-connected"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 28
deps: [lem-charged-core-height-matrices-have-content-preserving-descent-and-minimal-switch-connectivity,
       lem-fixed-component-core-multipartitions-are-cyclotomic-jantzen-connected,
       thm-cyclotomic-schur-jantzen-sum-formula-from-rim-hook-valuations,
       def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Lyle–Mathas, Blocks of cyclotomic Hecke algebras, math/0607451v4"
      url: "https://arxiv.org/pdf/math/0607451"
      locator: "Actually read full PDF pp. 1–20; relevant Prop. 2.3/2.9/Theorem 2.11 and §3. Local proof bodies and Q/J suppliers replace citation-only use."
    - title: "Matthew Fayers, Core blocks of Ariki–Koike algebras, author manuscript, J. Algebraic Combin. 26 (2007), 47–81"
      url: "https://webspace.maths.qmul.ac.uk/m.fayers/papers/core.pdf"
      locator: "Actually read author PDF pp. 2–24; tight lemma Prop. 2.2/2.3 pp. 12–15, binary switches Prop. 2.4 pp. 15–16, core proof Theorem 3.1/Prop. 3.7 pp. 19–24. The local normalized-height energy argument replaces additional weight-theory suppliers."
    - title: "Matthew Fayers, Weights of multipartitions and representations of Ariki–Koike algebras, author manuscript, Adv. Math. 206 (2006), 112–144"
      url: "https://webspace.maths.qmul.ac.uk/m.fayers/papers/weight.pdf"
      locator: "Actually read PDF p. 9 Lemma 2.3 and pp. 11–13 Lemma 3.1/Prop. 3.2/Lemma 3.3. Hub Laplacian proved locally; no weight-nonnegativity supplier imported."
---

## Statement

Let $F$ be any field, let $q_H\in F^\times$ have finite order $e\ge2$ with
$q_H\ne1$, let $\ell\ge1$ and $Q_a=q_H^{c_a}$. For all $\ell$-multipartitions
$\lambda,\mu$ of rank $n\ge0$, the node-residue contents
$$C_i(\lambda)=\#\{(r,s,a)\in[\lambda]:c_a+s-r\equiv i\pmod e\}$$
agree for every $i\in\mathbb Z/e\mathbb Z$ if and only if
$\lambda\sim_J\mu$ for the exact integer Jantzen coefficients of
[[thm-cyclotomic-schur-jantzen-sum-formula-from-rim-hook-valuations]]. This
includes arbitrary levels and all field characteristics.

## Facts & Assumptions

**Given:** The exact $J$ formula [F1], the charged core-matrix connectivity [F2],
the fixed-component-core lift lemma [F3], and the multipartition residue
conventions [F4].

[F1] $J_{\lambda\mu}$ is the signed integer sum of
$\nu_\pi(\operatorname{res}_{\mathcal O}(f_x^\lambda)-\operatorname{res}_{\mathcal O}(f_y^\mu))$
over equal-remainder equal-length hook pairs, $0$ unless $\lambda$ strictly
dominates $\mu$
([[thm-cyclotomic-schur-jantzen-sum-formula-from-rim-hook-valuations]]).

[F2] Charged core height matrices admit content-preserving descent and minimal
switch connectivity: within a content class of rank-$\le n$ cores with the
same hub there is a sequence of $\gamma=2$ zero-size switches followed, unless
already minimal, by a $\gamma\ge3$ strict descent, every intermediate core
having size at most $n$ and the same hub
([[lem-charged-core-height-matrices-have-content-preserving-descent-and-minimal-switch-connectivity]]).

[F3] Multipartitions of rank $n$ with equal componentwise $e$-cores are
$J$-equivalent, and the full-level coefficient for a change in one fixed-size
component equals its level-one coefficient
([[lem-fixed-component-core-multipartitions-are-cyclotomic-jantzen-connected]]).

[F4] Multipartitions, their nodes $(r,s,a)$, the charged parameters
$z,U_a$ and residue conventions
([[def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules]]).

## Proof

**Proof technique:** direct.

**Given:** The rank $n$, the charges $c_a$, and the suppliers of [F1]–[F4].

1.1 Necessity. Suppose $J_{\lambda\mu}\ne0$; then at least one term of its signed integer sum has nonzero valuation, and evaluating that generic foot difference at $t=1$ gives zero, so the two foot eigenvalues coincide and, since $q_H$ has order $e$, their charged foot residues agree. The two hooks have equal length and the same remainder diagram. Along a rim strip, reading from its lowest-left node to its highest-right node increases the content by one at every step, so its residue multiset consists of $h$ consecutive residues starting at its foot; hence the two removed hooks have identical residue counts and $C(\lambda)=C(\mu)$. Transitivity gives the necessity of $C(\lambda)=C(\mu)$ for every $J$-path. [F1, F4, algebra]

1.2 Sufficiency setup: cores and lifts. Let $\kappa$ be the componentwise core of a member of the rank-$n$ content class; its size is at most $n$ and congruent to $n$ modulo $e$, and by [F2] all such cores have the same hub and are connected by the prescribed switch sequence. Every intermediate core has size at most $n$ and the same hub, so adding $(n-\text{core size})/e$ $e$-hooks produces a rank-$n$ multipartition of the same content by the equal-hub/equal-size clause of [F2]. [F2, F4]

2.1 The explicit one-hook lift across a core switch. Let $\kappa'$ be obtained from $\kappa$ by the oriented switch in rows $i,j$ and components $a,b$ of [F2], with $\gamma\ge2$, so $|\kappa'|=|\kappa|-eD$ with $D=\gamma-2\ge0$. Write $u=i+et_{ia}$, $v=j+e(t_{ja}+1)$, $v'=j+et_{jb}$, $u'=i+e(t_{ib}+1)$: the switch removes bead $u$ and inserts $v$ in component $a$, and removes $v'$ and inserts $u'$ in component $b$. Put $w=(n-|\kappa|)/e\ge0$, form $\lambda$ from $\kappa$ by moving the lowest bead $u$ of the $i$-runner in component $a$ to $u+ew$ (adding $w$ $e$-hooks on this runner), and form $\mu$ from $\kappa'$ by moving its lowest bead $v$ on the $j$-runner in component $a$ to $v+e(w+D)$. Both have size $n$, the same hub, and by [F2] equal content. Their beta sets in component $a$ differ only by replacing $u+ew$ with $v+e(w+D)$, and those in component $b$ only by replacing $v'$ with $u'$. Because $(v-u)+(u'-v')=-eD$, we have $v+e(w+D)-(u+ew)=v'-u'$, so the two components exchange a single rim hook of length $|v'-u'|$, nonzero since $i\ne j$ modulo $e$. If $v'-u'>0$, component $b$ unwraps and $a$ wraps a hook with foot residue $i+1$ modulo $e$; otherwise $a$ unwraps and $b$ wraps one with foot residue $j+1$. In both cases the hook feet have equal residues, and the hook pair is uniquely determined because distinct components change, so the $J$ coefficient of [F1] is a single signed valuation, a nonzero integer with no cancellation. Hence $\lambda$ and $\mu$ are Jantzen-connected by one edge; this supplies the detail abbreviated in the Lyle–Mathas tight lemma. [F1, F2, step 1.2]

3.1 Termination and conclusion. The generic difference of the unique hook contribution is nonzero by [F1], and its specialization vanishes because the charged feet agree, so its positive integer valuation cannot disappear under reduction modulo $\operatorname{char}F$. The fixed-core lemma [F3] permits replacing arbitrary lifts by the chosen lifts before and after each switch, and strict descent lowers the nonnegative core size by at least $e$, so the process terminates at a minimum core; all minimum cores have equal size and are connected by $\gamma=2$ switches, whose rank-$n$ lifts are connected by the same explicit construction of step 2.1. Together with the fixed-component-size lifts of [F3], every member of the content class is Jantzen-connected to every other, and step 1.1 gives the converse. The empty rank has only one multipartition and is immediate; no affine-center or primitive-block theorem has entered the proof. [F1, F2, F3, step 1.1, step 2.1] ∎

## Remarks

The theorem is the exact content classification of the Jantzen classes: equal
charged node-residue content is equivalent to connectivity by the integer
rim-hook coefficient matrix, uniformly in the characteristic and the level.
The construction of the lifts and the termination argument are finite and
explicit. No choice principle is used.
