---
id: thm-poles-meromorphic-function-are-discrete-and-countable
kind: theorem
title: "Poles of a meromorphic function form a closed discrete set and are at most countable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-isolated-singularity-types, def-meromorphic-function-complex-domain, thm-rationals-countable, thm-product-of-countable, lem-subset-of-countable, lem-rat-embeds-dense, thm-well-ordering-principle, lem-countable-iff-surjection-from-n]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Patrick Brosnan, UMD complex analysis notes, §3.10 Meromorphic functions"
      url: "https://www.math.umd.edu/~pbrosnan/notes/complex/sect0019.html"
    - title: "David Greenfield, Rutgers Math 503 diary"
      url: "https://sites.math.rutgers.edu/~greenfie/mill_courses/math503/diary.html"
pipeline_run: null
---

## Statement

Let $f$ be meromorphic on a plane domain $\Omega$, and let $P\subseteq\Omega$ be
its pole set. Then:

1. every $a\in P$ has a neighbourhood in $\Omega$ containing no other pole, so
   $P$ is discrete in $\Omega$;
2. $\Omega\setminus P$ is open, so $P$ is closed in $\Omega$;
3. $P$ is at most countable.

## Facts & Assumptions

**Given:** A meromorphic function $f:\Omega\setminus P\to\mathbb C$ on a nonempty connected open set $\Omega$.

[L1] By definition, every point of $P$ is a pole, and $f$ is holomorphic on $\Omega\setminus P$ ([[def-meromorphic-function-complex-domain]], [[def-isolated-singularity-types]]).

[L2] The rationals are countable, the product of two at most countable sets is at most countable, a subset of an at most countable set is at most countable, and every nonempty at most countable set admits a surjection from $\mathbb N$ whose least-hit map gives an injection into $\mathbb N$ ([[thm-rationals-countable]], [[thm-product-of-countable]], [[lem-subset-of-countable]], [[lem-countable-iff-surjection-from-n]]).

[L3] Between any two real numbers lies a rational ([[lem-rat-embeds-dense]]).

[L4] Every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]).

## Proof

**Proof technique:** direct.

1.1 Fix $a\in P$. By [L1], $a$ is a pole, so some radius $r_a>0$ has $|z-a|<r_a$ contained in $\Omega$ and $f$ holomorphic on $0<|z-a|<r_a$. If $b\in P$ and $0<|b-a|<r_a$, then $b$ lies in a region where $f$ is holomorphic, contradicting $b\in P$. Thus $B(a,r_a)$ contains no pole other than $a$. [L1]

1.2 Let $\mathcal D$ be the family of discs $B(p+iq,s)$ with $p,q,s\in\mathbb Q$ and $s>0$. By [L2], $\mathbb Q^3$ is at most countable, so $\mathcal D$ is at most countable and admits an injection $e:\mathcal D\to\mathbb N$. [L2]

2.1 Step 1.1 proves that $P$ is discrete in $\Omega$. If $c\in\Omega\setminus P$, then [L1] says $f$ is holomorphic on a neighbourhood of $c$, and that neighbourhood contains no point of $P$; hence $\Omega\setminus P$ is open and $P$ is closed in $\Omega$. [step 1.1, L1]

2.2 For each $a\in P$, step 1.1 gives $r_a>0$. Write $a=x+iy$. By [L3], choose rationals $p,q$ with $|x-p|<r_a/8$ and $|y-q|<r_a/8$, so $|a-(p+iq)|<r_a/4$; choose a rational $s$ with $|a-(p+iq)|<s<r_a/2$, again by [L3]. Then $a\in B(p+iq,s)\subseteq B(a,r_a)$, so the set of discs in $\mathcal D$ containing $a$ and contained in $B(a,r_a)$ is nonempty. [step 1.1, L3, choose]

3.1 For each $a\in P$, the set $E_a:=\{\,e(D):D\in\mathcal D,\ a\in D\subseteq B(a,r_a)\,\}$ is nonempty by step 2.2, so [L4] gives its least element; call it $j(a)$. If $j(a)=j(b)$, then injectivity of $e$ makes the corresponding discs equal, and that disc lies inside $B(a,r_a)$ and contains both $a$ and $b$, so step 1.1 forces $a=b$. Therefore $a\mapsto j(a)$ is injective from $P$ into $\mathbb N$. [step 1.1, step 1.2, step 2.2, L4]

4.1 The injection of step 3.1 makes $P$ at most countable, completing the proof. [step 2.1, step 1.2, step 3.1, L2] ∎

## Remarks

The pole set need not be closed in all of $\mathbb C$ when $\Omega\ne\mathbb C$: it may accumulate at boundary points of the domain. The theorem says precisely that no accumulation can happen inside $\Omega$.
