---
id: thm-ostrowskis-theorem-for-the-rationals
kind: theorem
title: "Ostrowski's theorem for the rationals"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-multiplicative-absolute-value-on-a-field, lem-nonarchimedean-absolute-value-criterion, def-equivalent-field-absolute-values, def-p-adic-absolute-value-on-the-rationals, thm-p-adic-absolute-value-is-nonarchimedean, thm-canonical-prime-factorisation, thm-fundamental-theorem-of-arithmetic, thm-bezout-identity, def-natural-logarithm]
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew V. Sutherland, 18.782 Lecture 5, Theorem 5.6"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes5.pdf"
    - title: "Keith Conrad, Ostrowski's Theorem for Q"
      url: "https://kconrad.math.uconn.edu/blurbs/gradnumthy/ostrowskiq.pdf"
pipeline_run: null
---

## Statement

Let $|\cdot|$ be a nontrivial absolute value on $\mathbb Q$ in the sense of
[[def-multiplicative-absolute-value-on-a-field]]. Then exactly one of the
following holds.

1. $|\cdot|$ is equivalent to the usual absolute value on $\mathbb Q$.
2. There is a unique prime $p$ such that $|\cdot|$ is equivalent to
   $|\cdot|_p$ of [[def-p-adic-absolute-value-on-the-rationals]].

## Facts & Assumptions

**Given:** A nontrivial absolute value $|\cdot|$ on $\mathbb Q$.

[L1] An absolute value is nonarchimedean exactly when every integer has absolute value at most one ([[lem-nonarchimedean-absolute-value-criterion]]).

[L2] The $p$-adic absolute value is nonarchimedean ([[def-p-adic-absolute-value-on-the-rationals]], [[thm-p-adic-absolute-value-is-nonarchimedean]]).

[L3] Bezout identities hold in $\mathbb Z$: if $\gcd(m,n)=1$ then there are integers $u,v$ with $um+vn=1$ ([[thm-bezout-identity]]).

[L4] Prime factorisation in $\mathbb Z$ is unique ([[thm-fundamental-theorem-of-arithmetic]], [[thm-canonical-prime-factorisation]]).

[L5] Equivalence of absolute values means equality up to a positive power ([[def-equivalent-field-absolute-values]]).

## Proof

**Proof technique:** cases.

1.1 Assume as the first case that $|n| \le 1$ for every integer $n$. Then [L1] makes $|\cdot|$ nonarchimedean. Because the absolute value is nontrivial, there is an integer $m$ with $|m| \ne 1$; the inequality $|m| \le 1$ forces $|m| < 1$, so some prime divisor $p$ of $m$ has $|p| < 1$ by [L4]. If also $|q| < 1$ for a different prime $q$, then [L3] gives $up+vq = 1$, and the nonarchimedean inequality yields $1 = |1| \le \max\{|u||p|,|v||q|\} < 1$, impossible because integers all have absolute value at most $1$. Thus there is a unique prime $p$ with $|p| < 1$. [L1, L2, L3, L4, assume-case nonarchimedean]

1.2 Assume as the second case that $|n| > 1$ for some integer $n$. Choosing a prime divisor of $n$ and using [L4], at least one prime $p$ satisfies $|p| > 1$. Put $\alpha := \log|p|/\log p > 0$ and, for each integer $t \in \{0,\dots,p-1\}$, let $C_p := \max |t|$. For every positive integer $m$, write the base-$p$ expansion $m = a_0 + a_1 p + \cdots + a_r p^r$ with $0 \le a_i < p$. The triangle inequality gives $$|m| \le \sum_{i=0}^r |a_i|\,|p|^i \le C_p(r+1)|p|^r \le C_p(1+\log_p m)\,m^\alpha,$$ because $p^r \le m < p^{r+1}$. Applying the same estimate to $m^k$ and taking $k$-th roots gives $$|m| \le \bigl(C_p(1+k\log_p m)\bigr)^{1/k}m^\alpha,$$ so letting $k \to \infty$ yields $|m| \le m^\alpha$. Now fix $m > 1$ and put $\alpha_m := \log|m|/\log m$. Writing $p^k$ in base $m$ and repeating the same argument with $m$ in place of $p$ gives $$|p|^k \le C_m(1+k\log_m p)\,p^{k\alpha_m}$$ for some constant $C_m$, hence $|p| \le p^{\alpha_m}$ after taking $k$-th roots and letting $k \to \infty$. Therefore $\alpha \le \alpha_m$. Since $|m| \le m^\alpha$ is exactly $\alpha_m \le \alpha$, we get $\alpha_m = \alpha$ for every $m > 1$. Thus $|m| = m^\alpha$ for every positive integer $m$, and then $|a/b| = |a|/|b| = |a/b|_\infty^\alpha$ for every nonzero rational. [L4, given, assume-case archimedean, algebra]

2.1 For any prime $q \ne p$, step 1.1 and [L3] applied to $p$ and $q$ give $|q| = 1$. Hence if $x = \pm p^k a/b$ with $p \nmid ab$, uniqueness of factorisation [L4] gives $|x| = |p|^k$. Writing $c := -\log |p| / \log p > 0$, this becomes $|x| = |x|_p^c$, so $|\cdot|$ is equivalent to $|\cdot|_p$ by [L5]. [step 1.1, L4, L5, algebra]

3.1 Step 2.1 gives the nonarchimedean case and step 1.2 gives the archimedean case, and the two cases are disjoint because [L2] says every $p$-adic absolute value is nonarchimedean. Therefore every nontrivial absolute value on $\mathbb Q$ is equivalent either to the usual absolute value or to a unique $p$-adic one. [step 2.1, step 1.2, L2, cases-exhaustive] ∎
