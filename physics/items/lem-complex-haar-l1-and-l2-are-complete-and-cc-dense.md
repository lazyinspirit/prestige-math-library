---
id: lem-complex-haar-l1-and-l2-are-complete-and-cc-dense
kind: lemma
title: "Completeness of the complex Haar L1 and L2 spaces and density of Cc"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-complex-haar-lp-spaces-and-compactly-supported-functions, thm-riesz-fischer-completeness-of-l-p, thm-c-c-is-dense-in-l-p-for-radon-measures, def-dependent-choice, def-countable-choice, def-axiom-of-choice, cor-additivity-of-the-nonnegative-lebesgue-integral, prop-order-and-scalar-rules-for-the-nonnegative-integral, def-compact-support-c-c-and-c-zero-on-an-lch-space, thm-recursion]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Lynn Loomis, An Introduction to Abstract Harmonic Analysis, §§30A–30B"
      url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
      locator: "§§30A–30B, printed pp. 115–118"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Assume AC. Let $\mu$ be a Radon measure on an LCH space $X$. Then the complex
spaces $L^1(X,\mu;\mathbb C)$ and $L^2(X,\mu;\mathbb C)$
([[def-complex-haar-lp-spaces-and-compactly-supported-functions]]) are complete,
and $C_c(X;\mathbb C)$ is dense in both of them.

## Facts & Assumptions

**Given:** An LCH space $X$ with a Radon measure $\mu$, the complex spaces $L^p(X,\mu;\mathbb C)$ for $p\in\{1,2\}$, the real spaces $L^p(\mu)$, and AC.

[F1] For $p\in\{1,2\}$ the complex space $L^p(X,\mu;\mathbb C)$ consists of the almost-everywhere equivalence classes of measurable complex functions $f$ with $\|f\|_p=(\int_X|f|^p\,d\mu)^{1/p}<\infty$, on classes it is a complex normed space, and $C_c(X;\mathbb C)$ denotes the continuous complex-valued functions of compact support ([[def-complex-haar-lp-spaces-and-compactly-supported-functions]]).

[F2] Assume countable choice (in particular, the Axiom of Choice suffices). Let $(X,\mathcal A,\mu)$ be a measure space and let $1\le p\le\infty$. Then $L^p(\mu)$ is complete ([[thm-riesz-fischer-completeness-of-l-p]]).

[F3] Assume Dependent Choice. If $\mu$ is a Radon measure on an LCH space $X$ and $1\le p<\infty$, then $C_c(X)$ is dense in $L^p(\mu)$ ([[thm-c-c-is-dense-in-l-p-for-radon-measures]]).

[F4] If $0\le f\le g$ are measurable then $\int f\,d\mu\le\int g\,d\mu$ ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F5] Let $(N,0,\sigma)$ be a Peano system, in particular $\mathbb N$. For any set $A$, any $a\in A$ and any $f:A\to A$ there is a unique $g:N\to A$ with $g(0)=a$ and $g(\sigma(n))=f(g(n))$ for all $n$ ([[thm-recursion]]).

[F6] DC is the statement that for every nonempty set $X$, every relation $R$ entire on $X$ and every $a\in X$ there is $x:\mathbb N\to X$ with $x_0=a$ and $x_n\mathbin R x_{n+1}$ for every $n$ ([[def-dependent-choice]]).

[F7] $\mathrm{AC}_\omega$ is the statement that for every family $(X_n)_{n\in\mathbb N}$ of nonempty sets there is $f$ with domain $\mathbb N$ and $f(n)\in X_n$ for every $n$ ([[def-countable-choice]]).

[F8] $C_c(X;\mathbb F)$ denotes the continuous $\mathbb F$-valued functions with compact support, for $\mathbb F=\mathbb R$ or $\mathbb C$, and $C_c(X)$ denotes the real space $C_c(X;\mathbb R)$ ([[def-compact-support-c-c-and-c-zero-on-an-lch-space]]).

[A1] AC is assumed, in the choice-function form that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Discharge the Dependent Choice hypothesis of [F3] from AC. Let $R$ be entire on a nonempty set $X$ and let $a\in X$. The family $\{R[x]:x\in X\}$ of nonempty sets has, by [A1], a choice function $c$ with $c(R[x])\in R[x]$ for every $x\in X$; put $s(x):=c(R[x])$, so that $x\mathbin R s(x)$ for every $x\in X$. Applying [F5] to the set $X$, the point $a$ and the function $s$ gives $g:\mathbb N\to X$ with $g(0)=a$ and $g(n+1)=s(g(n))$; then $g(n)\mathbin R g(n+1)$ for every $n$. This is exactly the conclusion required by [F6], so DC holds. [A1, F3, F5, F6]

1.2 Discharge the countable choice hypothesis of [F2] from AC. Let $(X_n)_{n\in\mathbb N}$ be a family of nonempty sets. Its range $\{X_n:n\in\mathbb N\}$ is a family of nonempty sets, so by [A1] there is a choice function $c$ on that family with $c(X_n)\in X_n$ for every $n$; the function $f:\mathbb N\to\bigcup_nX_n$, $f(n):=c(X_n)$, satisfies $f(n)\in X_n$ for every $n$, which is the conclusion required by [F7]. So $\mathrm{AC}_\omega$ holds. [A1, F2, F7]

1.3 For every $z\in\mathbb C$ one has $|\operatorname{Re}z|\le|z|$, $|\operatorname{Im}z|\le|z|$ and $|z|\le|\operatorname{Re}z|+|\operatorname{Im}z|$; consequently for all $z,w\in\mathbb C$ also $|\operatorname{Re}z-\operatorname{Re}w|=|\operatorname{Re}(z-w)|\le|z-w|$ and $|\operatorname{Im}z-\operatorname{Im}w|\le|z-w|$, and for real $a,b$ one has $(|a|+|b|)^2\le2|a|^2+2|b|^2$. [algebra]

2.1 Let $(f_n)$ be a Cauchy sequence in $L^1(X,\mu;\mathbb C)$. Its real and imaginary parts are Cauchy in the real space $L^1(\mu)$: by the first two inequalities of step 1.3 and monotonicity [F4], $\int|\operatorname{Re}f_n-\operatorname{Re}f_m|\,d\mu\le\int|f_n-f_m|\,d\mu$ and likewise for the imaginary parts, the two left-hand sides being the norms of the real classes $\operatorname{Re}f_n-\operatorname{Re}f_m$ and $\operatorname{Im}f_n-\operatorname{Im}f_m$. The same argument with $|\cdot|^2$ in place of $|\cdot|$ and the last inequality of step 1.3 shows that a Cauchy sequence in $L^2(X,\mu;\mathbb C)$ has real and imaginary parts that are Cauchy in the real space $L^2(\mu)$. [F1, F4, step 1.3]

2.2 Complex density. Let $f\in L^p(X,\mu;\mathbb C)$ with $p\in\{1,2\}$ and let $\epsilon>0$. The real and imaginary parts of $f$ are real classes in $L^p(\mu)$ by [F1], and $p$ is finite, so by [F3] under the Dependent Choice of step 1.1 there are real $u,v\in C_c(X)$ with $\|\operatorname{Re}f-u\|_p<\epsilon/2$ and $\|\operatorname{Im}f-v\|_p<\epsilon/2$. Then $u+iv\in C_c(X;\mathbb C)$ by [F8], and for $p=1$ steps 1.3 and [F4] give $\|f-(u+iv)\|_1\le\|\operatorname{Re}f-u\|_1+\|\operatorname{Im}f-v\|_1<\epsilon$, while for $p=2$ the last inequality of step 1.3 and [F4] give $\|f-(u+iv)\|_2^2=\int|(\operatorname{Re}f-u)+i(\operatorname{Im}f-v)|^2\,d\mu\le2\|\operatorname{Re}f-u\|_2^2+2\|\operatorname{Im}f-v\|_2^2<\epsilon^2$. Thus $C_c(X;\mathbb C)$ is dense in $L^p(X,\mu;\mathbb C)$ for both $p$. [F1, F3, F4, F8, step 1.1, step 1.3]

3.1 Let $(f_n)$ be a Cauchy sequence in $L^1(X,\mu;\mathbb C)$, or in $L^2(X,\mu;\mathbb C)$; fix $p\in\{1,2\}$ accordingly. By step 2.1 the real sequences $(\operatorname{Re}f_n)$ and $(\operatorname{Im}f_n)$ are Cauchy in the real space $L^p(\mu)$, so by [F2] under the countable choice of step 1.2 there are $g,h\in L^p(\mu)$ with $\|\operatorname{Re}f_n-g\|_p\to0$ and $\|\operatorname{Im}f_n-h\|_p\to0$. [F2, step 1.2, step 2.1]

4.1 Recombination, for $p\in\{1,2\}$ as in step 3.1. Define $f:=g+ih$, the class of the measurable complex function $g+ih$, which lies in $L^p(X,\mu;\mathbb C)$ because $|f|\le|g|+|h|$ and $|g|+|h|\in L^p(\mu)$ for the finite $p$ by steps 1.3 and [F4] in the case $p=1$ and by the last inequality of step 1.3 and [F4] in the case $p=2$. Then $\|f_n-f\|_p\to0$ by the same two computations applied to $f_n-f=(\operatorname{Re}f_n-g)+i(\operatorname{Im}f_n-h)$ together with step 3.1, so $(f_n)$ converges in $L^p(X,\mu;\mathbb C)$. Hence both complex spaces are complete. [F1, F4, step 1.3, step 3.1]

5.1 Combining the density of step 2.2 with the completeness of step 4.1, the complex spaces $L^1(X,\mu;\mathbb C)$ and $L^2(X,\mu;\mathbb C)$ are complete and $C_c(X;\mathbb C)$ is dense in both. ∎ [step 2.2, step 4.1]

## Remarks

- **Where choice is spent.** Steps 1.1 and 1.2 are the only uses of [A1]: they supply the Dependent Choice hypothesis of the density theorem [F3] and the countable choice hypothesis of Riesz–Fischer completeness [F2]. The Cauchy-sequence reduction and the recombination are choice-free.
- **Why the complex spaces are treated locally.** The published completeness theorem [F2] and density theorem [F3] are statements about the real spaces of [[def-l-p-space-as-a-quotient-by-null-functions]]; the complex statements asserted here are obtained by the componentwise reduction above rather than assumed.
