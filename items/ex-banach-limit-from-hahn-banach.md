---
id: ex-banach-limit-from-hahn-banach
kind: example
title: "A Banach limit obtained from Hahn-Banach"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-hahn-banach-dominated-extension, def-sublinear-functional,
       def-cesaro-mean, def-limsup-liminf, thm-limsup-subadditive, def-sequence]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, Problem 4.20"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Banach limit (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Banach_limit"
---

## Example

Let $\ell^\infty$ be the real vector space of bounded real sequences with the
supremum norm, let $S:\ell^\infty \to \ell^\infty$ be the shift
$S(x_0,x_1,x_2,\dots)=(x_1,x_2,x_3,\dots)$, and let
$C \subseteq \ell^\infty$ be the subspace of sequences whose Cesaro means
converge.

Then there exists a linear functional $L:\ell^\infty \to \mathbb{R}$ such that

- $L(x)=\lim_{n \to \infty}\sigma_n(x)$ for every $x \in C$;
- $L(x) \le \limsup_{n \to \infty}\sigma_n(x)$ for every bounded sequence $x$;
- $L(Sx)=L(x)$ for every bounded sequence $x$.

The next lemma shows that such an $L$ is a Banach limit.

## Facts & Assumptions

**Given:** The real vector space $\ell^\infty$ of bounded real sequences, the shift $S$, and the Cesaro means $\sigma_n(x)$ of a bounded sequence $x$.

[L1] A sublinear functional is additive up to inequality and homogeneous for nonnegative real scalars ([[def-sublinear-functional]]).

[L2] Dominated real linear functionals extend to the whole ambient real vector space ([[thm-hahn-banach-dominated-extension]]).

[L3] The $n$th Cesaro mean is $$\sigma_n(x)=\frac{1}{n+1}\sum_{k=0}^n x_k$$ ([[def-cesaro-mean]]).

[L4] Limit superior is defined as a tail supremum infimum in the extended real line ([[def-limsup-liminf]]).

[L5] Limit superior is subadditive ([[thm-limsup-subadditive]]).

[L6] A real sequence is a function on $\mathbb{N}$, so bounded sequences are a special class of sequences in the sense of [[def-sequence]].

## Verification

**Proof technique:** direct.

1.1 Define $p:\ell^\infty \to \mathbb{R}$ by $$p(x):=\limsup_{n \to \infty}\sigma_n(x).$$ If $x \in \ell^\infty$, choose $M \ge 0$ with $|x_n| \le M$ for all $n$; then every Cesaro mean satisfies $|\sigma_n(x)| \le M$, so [L4] shows that $p(x)$ is an ordinary real number. Because $\sigma_n(x+y)=\sigma_n(x)+\sigma_n(y)$ for every $n$, [L5] gives $$p(x+y) \le p(x)+p(y).$$ Also $\sigma_n(tx)=t\sigma_n(x)$ for every $t \ge 0$, so $p(tx)=tp(x)$. Thus $p$ is sublinear in the sense of [L1]. [L1, L3, L4, L5, L6, given, construct, algebra]

2.1 Let $C \subseteq \ell^\infty$ be the set of sequences whose Cesaro means converge, and define $$\lambda(x):=\lim_{n \to \infty}\sigma_n(x) \qquad (x \in C).$$ Since $\sigma_n(ax+by)=a\sigma_n(x)+b\sigma_n(y)$ for all real scalars $a,b$, the set $C$ is a linear subspace and $\lambda$ is linear. If $x \in C$, then the convergent sequence $(\sigma_n(x))$ has limit superior equal to its limit, so $\lambda(x) \le p(x)$. Therefore [L2] yields a linear extension $L:\ell^\infty \to \mathbb{R}$ of $\lambda$ with $L \le p$ on all of $\ell^\infty$. [L2, L3, L4, step 1.1, given, construct, algebra]

3.1 Let $x=(x_n) \in \ell^\infty$. Since $x$ is bounded, there is $M \ge 0$ with $|x_n| \le M$ for all $n$. Using [L3], $$ \sigma_n(x-Sx)=\frac{1}{n+1}\sum_{k=0}^n (x_k-x_{k+1}) =\frac{x_0-x_{n+1}}{n+1}. $$ Hence $$ \left|\sigma_n(x-Sx)\right| \le \frac{|x_0|+M}{n+1} \to 0, $$ so $x-Sx \in C$ and $\lambda(x-Sx)=0$. Since $L$ extends $\lambda$, $L(x-Sx)=0$, that is, $L(Sx)=L(x)$. [L3, step 2.1, given, algebra]

4.1 Step 2.1 gives the extension and domination properties, and step 3.1 gives shift invariance. Therefore $L$ has all three properties listed in the example. [step 2.1, step 3.1] ∎
