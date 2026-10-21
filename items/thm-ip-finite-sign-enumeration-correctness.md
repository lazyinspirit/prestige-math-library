---
id: thm-ip-finite-sign-enumeration-correctness
kind: theorem
title: Correctness and amplitude-residual objective of finite sign enumeration
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - alg-ip-finite-sign-enumeration-phase-retrieval
  - def-ip-real-frame-phase-retrieval
  - def-moore-penrose-pseudoinverse
  - thm-moore-penrose-pseudoinverse-exists-and-is-unique
  - thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution
  - thm-least-squares-solutions-form-an-affine-kernel-translate-of-a-plus-b
  - thm-singular-value-decomposition
  - lem-span-is-the-set-of-linear-combinations
  - def-euclidean-inner-product
  - lem-metrics-on-rn
  - def-abs-value
  - lem-of-abs-value
  - def-ordered-field
  - thm-reals-field
  - thm-of-square-roots
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Radu Balan, Pete Casazza, and Dan Edidin, On signal reconstruction without phase, Applied and Computational Harmonic Analysis 20(3) (2006), §2"
      url: "https://arxiv.org/pdf/math/0412411"
    - title: "Philipp Grohs, Sarah Koppensteiner, and Martin Rathmair, Phase Retrieval: Uniqueness and Stability, arXiv:1901.07911v2, §§1–2.1"
      url: "https://arxiv.org/pdf/1901.07911v2"
---

## Statement

Let $A\in\mathbb R^{m\times d}$, $d\ge1$, $m\ge0$, with rows labeled $i=1,\ldots,m$ and signal coordinates labeled $k<d$, and let $b:[m]\to[0,\infty)$. Denote row $i-1$ by $a_i$ and put $\Phi=(a_i)_{i\in[m]}$. Define $[x]$ using $x\sim -x$ and $\mathcal I_\Phi([x])=((Ax)_i^2)_{i\in[m]}$. Put $r_i=\sqrt{b_i}$. Use the sign set consisting of the empty pattern when $m=0$ and otherwise the patterns $s:[m]\to\{-1,+1\}$ with $s_1=+1$, ordered lexicographically with $+1$ before $-1$. For each pattern put $y_s=(s_i r_i)_{i\in[m]}$, let $x_s=A^+y_s$ be the minimum-norm least-squares solution, and let $e_s=\|Ax_s-y_s\|_2$. Here $A^+$ is the unique Moore–Penrose inverse and $\ker A=\{v:Av=0\}$. The algorithm processes patterns in order subject to a maximum pattern count $P\in\mathbb Z_{\ge0}$ and signed-solve budget $L\in\mathbb Z_{\ge0}$; an early stop returns status budget-exhausted. Put $N_m=1$ for $m=0$ and $N_m=2^{m-1}$ for $m\ge1$. The procedure terminates after no more than $P$, $L$, or $N_m$ signed solves, whichever bound is reached first; if $P,L>0$ it computes one SVD, and full pattern processing uses exactly $N_m$ signed solves. Thus the pattern count grows exponentially in $m$ for $m\ge1$. In exact mode with tolerance $\varepsilon=0$, after every pattern is processed it returns the union of the exact families $x_s+\ker A$ modulo global sign, or reports infeasible if that union is empty. For every processed pattern, $x_s$ minimizes $\|Ax-y_s\|_2$, and the complete set of signed least-squares minimizers is $x_s+\ker A$; this set solves $Ax=y_s$ exactly if and only if its residual $e_s$ is zero. The complete exact-mode output is exactly $\{[x]:\mathcal I_\Phi([x])=b\}$. In noisy mode the algorithm scores $J(x)=\sum_{i\in[m]}(|(Ax)_i|-r_i)^2$ and, after every canonical pattern is processed, returns a candidate minimizing $J$ over all $x\in\mathbb R^d$. Whenever at least one pattern is processed in noisy mode, its returned incumbent minimizes $J$ among the processed candidates. When a budget stops enumeration early, the returned candidates describe only processed patterns and give no completeness or global-minimum guarantee. For $m=0$, the single pattern has the unique empty right-hand side and $J(x)=0$ for every $x$.

## Statement references

[[alg-ip-finite-sign-enumeration-phase-retrieval|Finite sign enumeration and its budgets]]

[[thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution|Finite Moore–Penrose least-squares minimizer]]

[[thm-least-squares-solutions-form-an-affine-kernel-translate-of-a-plus-b|Full affine least-squares solution family]]

[Radu Balan, Pete Casazza, and Dan Edidin, real finite-frame phase retrieval, §2](https://arxiv.org/pdf/math/0412411)

[Philipp Grohs, Sarah Koppensteiner, and Martin Rathmair, real phase retrieval scope, §§1–2.1](https://arxiv.org/pdf/1901.07911v2)

## Facts & Assumptions

**Given:** $A\in\mathbb R^{m\times d}$ with $d\ge1$, nonnegative $b_i$, and the algorithm in exact or noisy mode with nonnegative integer budgets $P,L\in\mathbb Z_{\ge0}$.

[F1] [[alg-ip-finite-sign-enumeration-phase-retrieval]]: the algorithm uses the canonical finite sign set, $r_i=\sqrt{b_i}$, $y_s=(s_i r_i)_i$, $x_s=A^+y_s$, and $e_s=\|Ax_s-y_s\|_2$; its exact and noisy outputs have the stated budget conventions.

[F2] [[def-ip-real-frame-phase-retrieval]]: $A$ represents the real analysis map and $\mathcal I_\Phi([x])=((Ax)_i^2)_{i\in[m]}$ on classes modulo a single global sign.

[F3] [[def-moore-penrose-pseudoinverse]], [[thm-moore-penrose-pseudoinverse-exists-and-is-unique]]: $A^+$ exists uniquely and satisfies $AA^+A=A$.

[F4] [[thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution]]: for every signed target $y_s$, $x_s=A^+y_s$ is a least-squares minimizer of $Ax=y_s$.

[F5] [[thm-least-squares-solutions-form-an-affine-kernel-translate-of-a-plus-b]]: every least-squares minimizer is $A^+y_s+(I-A^+A)z$ for some $z$, and exact solutions are precisely that family when $y_s\in\operatorname{im}A$.

[F6] [[def-euclidean-inner-product]], [[lem-metrics-on-rn]]: the squared Euclidean norm of a residual in $\mathbb R^m$ is the sum of its squared coordinates, and for $m\ge1$ its norm is zero exactly when the residual vector is zero. For $m=0$, the only residual is the empty vector, and the Euclidean definition gives its norm as the square root of the empty sum, hence $0$; the residual vector is also the unique zero vector of $\mathbb R^0$.

[F7] [[def-abs-value]], [[lem-of-abs-value]], [[def-ordered-field]]: absolute value is nonnegative, $|-u|=|u|$, and the real order is total.

[F8] [[thm-of-square-roots]]: each $b_i\ge0$ has a unique nonnegative root $r_i$ with $r_i^2=b_i$.

[F9] [[thm-singular-value-decomposition]], [[lem-span-is-the-set-of-linear-combinations]]: every finite-dimensional real linear map admits a finite singular-value decomposition, including zero maps and nontrivial kernels; the span-to-finite-combination step in its finite orthogonal-basis argument is supported by the cited span lemma.

## Proof


1.1 Fix a processed pattern $s$. The finite SVD in [F9] exists for $A$; by [F4], $x_s=A^+y_s$ minimizes the signed residual norm. The pseudoinverse identity [F3] gives $A(I-A^+A)=A-AA^+A=0$, so $(I-A^+A)z\in\ker A$ for every $z$; conversely, if $k\in\ker A$, then $(I-A^+A)k=k$. Thus the affine family in [F5] is exactly $x_s+\ker A$. [given, F3, F4, F5, F9, algebra]

1.2 Put $N_m=1$ when $m=0$. For $m\ge1$, deleting the fixed coordinate $s_1=+1$ bijects the canonical patterns with sign tuples on labels $2,\ldots,m$. Starting with one empty tuple, each added label doubles the number of possible prefixes, so there are $2^{m-1}$ canonical patterns. Each iteration processes one pattern and uses one signed solve; the algorithm stops after its pattern limit $P$, solve limit $L$, or all $N_m$ patterns are reached. Thus it terminates after no more than each of $P$, $L$, and $N_m$ signed solves; full pattern processing uses exactly $N_m$ solves, and the pattern count is exponential in $m\ge1$. If $P,L>0$, the procedure computes one SVD before processing patterns. In noisy mode, after the first pattern the incumbent minimizes $J$ among processed candidates; each later candidate replaces it exactly when its objective is smaller, while a tie preserves the earlier incumbent. Induction over the processed sequence proves the same minimum property after every update. [given, F1, algebra]

2.1 The least-squares family has an exact solution precisely when its residual minimum is zero: by [F6], $e_s=0$ exactly when $Ax_s-y_s=0$. If this holds, every member of $x_s+\ker A$ solves the same equation; if it does not, none does, because $x_s$ already minimizes the residual. [step 1.1, F5, F6, algebra]

3.1 Having established the zero-residual criterion in step 2.1, suppose exact mode with $\varepsilon=0$ processes every pattern. If $Ax=y_s$ for some processed $s$, then $(Ax)_i^2=r_i^2=b_i$ at each label, so $\mathcal I_\Phi([x])=b$. Conversely, suppose $\mathcal I_\Phi([x])=b$. For every label, $(Ax)_i^2=r_i^2$, so $(Ax)_i=r_i$ or $(Ax)_i=-r_i$ by factoring $((Ax)_i-r_i)((Ax)_i+r_i)=0$ in the real field; when $r_i=0$ both choices give zero. Choose the corresponding $t_i\in\{-1,+1\}$. If $m\ge1$ and $t_1=-1$, replace $x$ by $-x$ and $t$ by $-t$; the quotient class is unchanged and the new sign pattern has first coordinate $+1$. If $m=0$, use the unique empty pattern. Therefore a canonical pattern $s$ has a signed exact solution in the class $[x]$. [step 2.1, given, F1, F2, F7, F8, choose]

4.1 By step 2.1 the exact solution from step 3.1 belongs to $x_s+\ker A$, and that pattern is recorded by the algorithm. Conversely, every recorded family in exact mode with $\varepsilon=0$ has $e_s=0$ by [F1], so step 2.1 makes each of its members solve $Ax=y_s$ and hence have intensity data $b$. This proves that the returned union modulo sign is exactly the stated inverse image, and it is empty exactly when no such class exists. [step 2.1, step 3.1, F1, F2, algebra]

5.1 The complete exact-mode correspondence is established in step 4.1. For noisy mode, for any sign vector $t:[m]\to\{-1,+1\}$ write $y_t=(t_i r_i)_{i\in[m]}$. Fix a real $u$ and $r\ge0$. If $u\ge0$, then $(u-r)^2=(|u|-r)^2$ and $(u+r)^2-(u-r)^2=4ur\ge0$. If $u<0$, put $v=-u>0$; then $(u+r)^2=(v-r)^2=(|u|-r)^2$ and $(u-r)^2-(u+r)^2=4vr\ge0$. Thus the sign matching the sign of $u$ attains the smaller of $(u-r)^2$ and $(u+r)^2$, and every sign choice has squared residual at least $(|u|-r)^2$. Apply this coordinatewise to $u_i=(Ax)_i$ and $r_i$, and sum: every sign vector $t$ satisfies $J(x)\le\|Ax-y_t\|_2^2$, and a sign vector chosen coordinatewise attains equality. For $m=0$, both sides are the empty sum $0$. [given, F6, F7, algebra]

6.1 If the sign vector attaining equality in step 5.1 has first entry $-1$, replace $x$ by $-x$ and $t$ by $-t$. Then the quotient class and $J(x)$ are unchanged, and $A(-x)-y_{-t}=-(Ax-y_t)$, so the squared residual is unchanged and the new vector is canonical. If $m=0$, use the unique empty pattern. Hence for every $x\in\mathbb R^d$ there are a representative $\widetilde x\in\{x,-x\}$ and a canonical pattern $s$ with $\|A\widetilde x-y_s\|_2^2=J(x)$, since $J(\widetilde x)=J(x)$. Least-squares minimality [F4], comparing $x_s$ to $\widetilde x$, gives $e_s^2\le J(x)$. [step 5.1, F1, F4, algebra]

7.1 For each candidate $x_s$, step 5.1 gives $J(x_s)\le\|Ax_s-y_s\|_2^2=e_s^2$. With complete enumeration every canonical $s$ is processed. Given arbitrary $x$, step 6.1 supplies one such $s$ with $e_s^2\le J(x)$, so by step 1.2 the final incumbent has objective at most $J(x_s)\le e_s^2\le J(x)$. It is therefore a global minimizer over all $x$. If a budget leaves patterns unprocessed, this comparison gives no guarantee for a canonical pattern that was not visited. [step 5.1, step 6.1, step 1.2, F1, F4, algebra] ∎
