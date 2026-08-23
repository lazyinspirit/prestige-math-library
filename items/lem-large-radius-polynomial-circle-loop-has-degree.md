---
id: lem-large-radius-polynomial-circle-loop-has-degree
kind: lemma
title: "The normalized large-radius loop of a monic degree-$n$ polynomial has degree $n$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complex-polynomial-degree-and-monic, lem-complex-conjugation-and-modulus-laws, thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle, thm-componentwise-limits-and-continuity, lem-algebra-of-continuous-real-maps-on-a-space, thm-product-universal-property, thm-degree-is-invariant-under-path-homotopy, prop-standard-circle-loops-have-their-integer-degrees]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, proof of Theorem 1.8"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 1, §7"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

Let $p(z)=z^n+\sum_{j<n}a_jz^j$ be a monic complex polynomial of degree $n\ge1$, and put $S=\sum_{j<n}|a_j|$. If $R>\max\{1,S\}$, then the based normalized circle loop

$$\alpha_R(u)=h^{-1}\left(\frac{p(Rh(u))/p(R)}{|p(Rh(u))/p(R)|}\right),\qquad u\in\mathbb R/\mathbb Z,$$

is well defined and has degree $n$.

## Facts & Assumptions

**Given:** A monic polynomial $p(z)=z^n+\sum_{j<n}a_jz^j$ of degree $n\ge1$, the number $S=\sum_{j<n}|a_j|$, and a real $R>\max\{1,S\}$.

[F1] For a nonzero complex polynomial, degree is the final coefficient index and monic means that its leading coefficient is $1$ ([[def-complex-polynomial-degree-and-monic]]).

[L1] Complex modulus is multiplicative and satisfies the triangle inequality ([[lem-complex-conjugation-and-modulus-laws]]).

[L2] The homeomorphism $h:\mathbb R/\mathbb Z\to S^1$ sends $[0]$ to $1\in S^1$ ([[thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle]]).

[L3] Maps into finite products are continuous exactly when their components are continuous; finite sums, products, and quotients of continuous real-valued maps are continuous wherever the denominator is nonzero ([[thm-product-universal-property]], [[thm-componentwise-limits-and-continuity]], [[lem-algebra-of-continuous-real-maps-on-a-space]]).

[L4] Path-homotopic based circle loops have the same degree ([[thm-degree-is-invariant-under-path-homotopy]]).

[L5] The standard loop $\omega_m$ has degree $m$ for every integer $m$ ([[prop-standard-circle-loops-have-their-integer-degrees]]).

## Proof

**Proof technique:** constructive.

1.1 If $|z|=R$, then $$\left|\sum_{j<n}a_jz^j\right|\le\sum_{j<n}|a_j|R^j\le SR^{n-1}<R^n=|z^n|.$$ The estimate includes $n=1$ and $S=0$, since $R>1$ and $S<R$. [given, F1, L1, algebra]

2.1 For $s\in[0,1]$ put $p_s(z)=z^n+s\sum_{j<n}a_jz^j$. Step 1.1 remains strict with $sS\le S$, so $p_s$ never vanishes on $|z|=R$, in particular $p_s(R)\ne0$. The formula $$H(s,u)=h^{-1}\left(\frac{p_s(Rh(u))/p_s(R)}{|p_s(Rh(u))/p_s(R)|}\right)$$ is therefore a continuous based homotopy by [L2] and [L3]. At $s=1$ it is $\alpha_R$, while at $s=0$ it is $u\mapsto h^{-1}(h(u)^n)=\omega_n(u)$. [step 1.1, L1, L2, L3, construct]

3.1 Homotopy invariance and the standard-loop calculation give $\deg(\alpha_R)=\deg(\omega_n)=n$. [step 2.1, L4, L5, discharge-construct] ∎

