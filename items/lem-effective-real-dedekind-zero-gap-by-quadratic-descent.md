---
id: lem-effective-real-dedekind-zero-gap-by-quadratic-descent
kind: lemma
title: Effective real Dedekind zero gap from quadratic descent
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 21
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- lem-artin-l-meromorphic-continuation-in-positive-half-plane-under-choice
- lem-heilbronn-simple-zero-quadratic-descent-under-choice
- lem-dedekind-zeta-divisibility-for-galois-extensions-positive-strip
- lem-number-field-compositum-discriminant-bound
- lem-dedekind-zeta-sharp-exceptional-zero-rectangle
- thm-effective-real-zero-gap-for-quadratic-dedekind-zeta-functions
- thm-relative-discriminant-ideal-is-nonzero-integral-and-transitive
- def-absolute-norm-of-an-ideal
- thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula
- def-axiom-of-choice
- def-countable-choice
- def-dependent-choice
axiom_use: AC, CC and DC are inherited from the actual local analytic and reciprocity inputs.
sources:
  references:
  - title: H. M. Stark, Some Effective Cases of the Brauer–Siegel Theorem
    url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0023/PPN356556735_0023.pdf
    locator: Section 3 Lemma 8 and Section 4 proof of Theorem 1′, printed pp. 145 and 148. The complete bounded deduction is given below.
---

## Statement

Assume AC, Countable Choice and DC. There is an absolute effectively computable constant $c>0$ such that for every number field $E\ne\mathbb Q$ of degree $m$ and absolute discriminant $D_E>1$, and every real zero $\beta\in(0,1)$ of $\zeta_E(s)$,
$$1-\beta\ge\min\left\{\frac1{4m!\log D_E},\;cD_E^{-1/m}\right\}.$$
If $E/\mathbb Q$ is Galois, the first term may be replaced by $(4\log D_E)^{-1}$. This is the source-supported general and normal-field bound; it does not assert the sharper literal coefficient one or the remaining tower and Artin-holomorphy branches of the full Stark item.

## Facts & Assumptions

**Given:** The number field, real zero and choice assumptions in the Statement.

[F1] A number-field zeta function has at most one zero occurrence in $\operatorname{Re}s\ge1-(4\log D)^{-1}$, $|\operatorname{Im}s|\le(4\log D)^{-1}$; that zero is real and simple. [[lem-dedekind-zeta-sharp-exceptional-zero-rectangle]]

[F2] For a finite Galois extension $B/A$, a simple zeta zero in $0<\operatorname{Re}s<1$ belongs to a cyclic field $F/A$ inside $B$ and the zeta of an intermediate field vanishes there exactly when it contains $F$; if the zero is real, $F=A$ or $[F:A]=2$. [[lem-heilbronn-simple-zero-quadratic-descent-under-choice]]

[F3] A finite Galois extension $B/A$ has $\zeta_B/\zeta_A$ holomorphic on the open critical strip. [[lem-dedekind-zeta-divisibility-for-galois-extensions-positive-strip]]

[F4] The compositum of finitely many number fields satisfies $D_{K_1\cdots K_r}\le\prod_iD_{K_i}^{[K_1\cdots K_r:\mathbb Q]/[K_i:\mathbb Q]}$. For a tower $F\subseteq E$, transitivity of relative discriminants gives $D_E\ge D_F^{[E:F]}$. [[lem-number-field-compositum-discriminant-bound]] [[thm-relative-discriminant-ideal-is-nonzero-integral-and-transitive]] [[def-absolute-norm-of-an-ideal]]

[F5] A quadratic field $F$ has $1-\beta\ge cD_F^{-1/2}$ for every real $\zeta_F$ zero in $(0,1)$, with an absolute effectively computable $c>0$. [[thm-effective-real-zero-gap-for-quadratic-dedekind-zeta-functions]]

[F6] The Riemann zeta function is holomorphic on $0<\operatorname{Re}s<1$ and agrees there with its usual continuation. [[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]]

[A1] The interfaces above retain their actual AC, CC and DC hypotheses. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

1.1 Let $B$ be the normal closure of $E/\mathbb Q$. The at most $m$ conjugate fields of $E$ form a compositum equal to $B$, and $[B:\mathbb Q]\le m!$ because its Galois group embeds into the permutation group of the $m$ embeddings of $E$. Every conjugate has degree $m$ and discriminant $D_E$. The compositum bound [F4] therefore gives $\log D_B\le[B:\mathbb Q]\log D_E\le m!\log D_E$. By [F3], the given zero of $\zeta_E$ is a zero of $\zeta_B$. If $1-\beta\le(4m!\log D_E)^{-1}$, then $1-\beta\le(4\log D_B)^{-1}$ and [F1] makes this zero of $\zeta_B$ simple. [A1, F1, F3, F4, given, construct, algebra]

2.1 Under the inequality in step 1.1, apply [F2] to $B/\mathbb Q$. It gives a field $F\subseteq E$ for which $\zeta_F(\beta)=0$ and $F=\mathbb Q$ or $[F:\mathbb Q]=2$. The rational case is impossible: for real $0<s<1$, the alternating series $\eta(s)=\sum_{j\ge1}((2j-1)^{-s}-(2j)^{-s})$ converges and is positive. Summation by parts gives locally uniform convergence for $\operatorname{Re}s>0$; comparing its absolutely convergent series with $\zeta(s)$ for $\operatorname{Re}s>1$ gives $\eta(s)=(1-2^{1-s})\zeta(s)$ throughout that half-plane by analytic continuation. Thus $\zeta(s)<0$ for $0<s<1$. Consequently $F$ is quadratic. By [F5], $1-\beta\ge cD_F^{-1/2}$. As $F\subseteq E$, [F4] gives $D_E\ge D_F^{m/2}$, and therefore $1-\beta\ge cD_E^{-1/m}$. [F2, F4, F5, F6, step 1.1, algebra]

3.1 If the inequality of step 1.1 fails, then $1-\beta>(4m!\log D_E)^{-1}$. Together with step 2.1 this proves the general minimum bound. If $E/\mathbb Q$ is Galois, take $B=E$ in step 1.1: no normal-closure discriminant enlargement is needed, so [F1] supplies simplicity whenever $1-\beta\le(4\log D_E)^{-1}$. Repeating step 2.1 with that threshold proves the normal-field improvement. [F1, step 1.1, step 2.1, algebra] ∎
