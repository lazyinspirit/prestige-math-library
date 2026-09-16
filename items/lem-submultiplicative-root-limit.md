---
id: lem-submultiplicative-root-limit
kind: lemma
title: Submultiplicative root limit
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-nth-roots-exist, lem-power-monotone, def-limsup-liminf, thm-convergence-iff-limsup-equals-liminf, lem-limsup-monotone-comparison, lem-nth-root-of-constant-tends-to-one]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — the root-test step of Theorem 5.20, printed p. 222"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — §2.3, printed pp. 30–33"
      url: "https://arxiv.org/pdf/1211.3404"
---

## Statement

Let $(u_n)_{n \ge 1}$ be a sequence of nonnegative real numbers satisfying the
submultiplicative inequality

$$u_{m+n} \;\le\; u_m\,u_n \qquad \text{for all } m,n \ge 1 .$$

Then the sequence of $n$-th roots $u_n^{1/n}$ converges in $\mathbb R$ and

$$\lim_{n \to \infty} u_n^{1/n} \;=\; \inf_{n \ge 1} u_n^{1/n} .$$

The case of a vanishing term is included: if $u_k = 0$ for some $k \ge 1$, then
$u_n = 0$ for all $n \ge k$ and both sides equal $0$.

## Facts & Assumptions

**Given:** A sequence $(u_n)_{n\ge1}$ of reals with $u_n \ge 0$ and $u_{m+n} \le u_mu_n$ for all $m,n \ge 1$; put $u_0 := 1$ and extend the inequality by this convention, so that $u_{m+0} = u_m \le u_m\,u_0$.

[L1] For every $a \ge 0$ and $n \ge 1$ there is a unique $a^{1/n} \ge 0$ with $(a^{1/n})^n = a$; moreover $0^{1/n} = 0$ and $a^{1/n} > 0$ when $a > 0$ ([[thm-nth-roots-exist]]).

[L2] For $x,y \ge 0$ and $n \ge 1$: $x \le y$ if and only if $x^n \le y^n$, and $x < y$ if and only if $x^n < y^n$. Consequently $(xy)^{1/n} = x^{1/n}y^{1/n}$ and $x \le y$ implies $x^{1/n} \le y^{1/n}$, since both sides are nonnegative and have the same $n$-th power ([[lem-power-monotone]], [[thm-nth-roots-exist]]).

[L3] For a sequence $(x_k)$ of reals the limit superior and limit inferior are elements of $\overline{\mathbb R}$ with $\liminf_k x_k \le \limsup_k x_k$, and $(x_k)$ converges to $L \in \mathbb R$ exactly when $\liminf_k x_k = \limsup_k x_k = L$ ([[def-limsup-liminf]], [[thm-convergence-iff-limsup-equals-liminf]]).

[L4] If $x_k \le y_k$ eventually, then $\limsup_k x_k \le \limsup_k y_k$ ([[lem-limsup-monotone-comparison]]).

[L5] For every real $c > 0$ the sequence $c^{1/n}$ converges to $1$ ([[lem-nth-root-of-constant-tends-to-one]]).

## Proof

**Proof technique:** direct.

1.1 Put $L := \inf\{\,u_n^{1/n} : n \ge 1\,\}$, a real number in $[0,\infty)$ because $u_1^{1/1} = u_1$ is finite and every term is $\ge 0$; by definition of the infimum, $u_n^{1/n} \ge L$ for every $n \ge 1$. [L1, algebra]

1.2 If $u_k = 0$ for some $k \ge 1$ then $u_n = 0$ for every $n \ge k$: writing $n = k + (n-k)$ with $n-k \ge 0$, the hypothesis and the convention $u_0 = 1$ give $u_n \le u_ku_{n-k} = 0$, while $u_n \ge 0$ by assumption. [given, algebra]

1.3 Now suppose $u_n > 0$ for every $n \ge 1$. Fix $k \ge 1$, put $t := u_k^{1/k} > 0$ and $C_k := \max\{u_r : 0 \le r < k\} > 0$; then for every $n \ge k$, writing $n = qk + r$ with $q \ge 1$ and $0 \le r < k$, iterated submultiplicativity gives $u_n \le u_k^q\,u_r \le u_k^q\,C_k$. [given, L1, algebra]

2.1 Suppose $u_k = 0$ for some $k$. Then $u_n^{1/n} = 0$ for all $n \ge k$ by [step 1.2] and [L1], and $L = 0$ because the term $u_k^{1/k} = 0$ occurs in the set whose infimum is $L$; hence $u_n^{1/n} \to 0 = L$. [step 1.2, step 1.1, L1, L3]

2.2 With $t = u_k^{1/k} > 0$ as in [step 1.3] the bound $u_k^q \le t^n\,t^{-k}$ holds for $n = qk + r \ge k$: indeed $u_k^q = (t^k)^q = t^{kq} = t^{n-r}$ by the integer index laws, and the correction factor satisfies $t^{-r} \le t^{-k}$ when $t \le 1$ and $t^{-r} \le 1 \le t^{-k}$ when $t \ge 1$, so in both cases $t^{n-r} = t^n\,t^{-r} \le t^n\,t^{-k}$. [L1, L2, algebra]

2.3 On the other hand every term satisfies $u_n^{1/n} \ge L$ by [step 1.1], so the comparison of [L4] with the constant sequence $L$ gives $\liminf_n u_n^{1/n} \ge L$. [step 1.1, L4]

3.1 Define the positive constant $B_k := t^{-k}C_k$. Combining [step 1.3] and [step 2.2] gives $u_n \le t^nB_k$, hence $u_n^{1/n} \le t\,B_k^{1/n}$ for every $n \ge k$, taking $n$-th roots by [L2]. [step 1.3, step 2.2, L1, L2]

4.1 Since $B_k^{1/n} \to 1$ by [L5], for every real $\varepsilon > 0$ the inequality $B_k^{1/n} \le 1+\varepsilon$ holds eventually; hence $u_n^{1/n} \le t(1+\varepsilon)$ eventually, and [L4] gives $\limsup_n u_n^{1/n} \le t(1+\varepsilon)$. [step 3.1, L4, L5, algebra]

5.1 Since $\varepsilon > 0$ was arbitrary in [step 4.1] and $t = u_k^{1/k}$, one has $\limsup_n u_n^{1/n} \le u_k^{1/k}$ for every $k \ge 1$, hence $\limsup_n u_n^{1/n} \le L$. [step 4.1, step 1.1, algebra]

6.1 In the positive case, [step 5.1] and [step 2.3] yield $\limsup \le L \le \liminf \le \limsup$, so all three are equal to $L$ and $u_n^{1/n} \to L$ by [L3]; in the vanishing case [step 2.1] gives the same conclusion. Hence in all cases $\lim_n u_n^{1/n} = \inf_{n\ge1}u_n^{1/n}$. [step 2.1, step 5.1, step 2.3, L3] ∎
