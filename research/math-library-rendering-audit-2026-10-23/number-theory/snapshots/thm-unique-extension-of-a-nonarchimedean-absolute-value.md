---
id: thm-unique-extension-of-a-nonarchimedean-absolute-value
title: "Unique extension of a nonarchimedean absolute value"
kind: theorem
status: published
origin: pipeline
deps: [lem-uniqueness-of-an-extended-complete-field-absolute-value, lem-irreducible-polynomial-coefficients-in-a-complete-valuation-ring, thm-basic-laws-for-field-norm-and-trace, thm-field-norm-and-trace-agree-with-operator-determinant-and-trace]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "\u00a76, Lemma 6.1 and Theorem 6.4, pp.10\u201311; Milne Theorem 7.38 for discrete separable specialization"
      url: https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf
proof_strategy: direct argument
---

## Statement

For every finite field extension L/K with K complete nonarchimedean, the unique extending absolute value is
$$|x|_L=|N_{L/K}(x)|_K^{1/[L:K]}.$$
It is nonarchimedean and makes L complete. Separability and discreteness are not assumed; the trivial valuation is included.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[lem-uniqueness-of-an-extended-complete-field-absolute-value]]: For a finite extension E/F of a complete absolutely valued field F, at most one absolute value on E extends the given absolute value on F. Any such extension makes E complete.

[F2] [[lem-irreducible-polynomial-coefficients-in-a-complete-valuation-ring]]: Let F be complete nonarchimedean. If $f\in F[T]$ is monic irreducible of positive degree and $|f(0)|\le1$, then every coefficient of f has absolute value at most one.

[F3] [[thm-basic-laws-for-field-norm-and-trace]]: Let $K/F$ be a finite extension and let $a,b\in K$. 1. $N_{K/F}(ab)=N_{K/F}(a)N_{K/F}(b)$. 2. $\operatorname{Tr}_{K/F}(a+b)=\operatorname{Tr}_{K/F}(a)+\operatorname{Tr}_{K/F}(b)$ and $\operatorname{Tr}_{K/F}(ca)=c\,\operatorname{Tr}_{K/F}(a)$ for every $c\in F$. 3. If $L/K/F$ is a tower of finite extensions, then $N_{L/F}=N_{K/F}\circ N_{L/K},\qquad \operatorname{Tr}_{L/F}=\operatorname{Tr}_{K/F}\circ \operatorname{Tr}_{L/K}.$

[F4] [[thm-field-norm-and-trace-agree-with-operator-determinant-and-trace]]: Let $K/F$ be a finite extension and let $a\in K$. If $m_a\colon K\to K,\qquad x\mapsto ax,$ is the $F$-linear multiplication operator, then $N_{K/F}(a)=\det(m_a),\qquad \operatorname{Tr}_{K/F}(a)=\operatorname{tr}(m_a),$ where the right-hand side uses the published linear-operator determinant and trace.

## Proof

1.1 Put $n=[L:K]$ and $v(x)=|N_{L/K}(x)|^{1/n}$. The determinant interpretation shows that v vanishes exactly at zero and $v(a)=|a|$ for $a\in K$, since multiplication by a is a scalar n by n matrix. Norm multiplicativity gives $v(xy)=v(x)v(y)$. [F3, F4]

2.1 For $v(x)\le1$, let $E=K(x)$ and m=[E:K]. The tower law and determinant of the scalar E-linear action give $N_{L/K}(x)=N_{E/K}(x)^{[L:E]}$. The companion matrix of multiplication by x shows that its norm is $(-1)^m f(0)$ for the monic minimal polynomial f. Thus $|f(0)|\le1$, so all coefficients lie in the valuation ring. It follows that $|f(-1)|\le1$, and the same companion-matrix calculation for x+1 gives $v(x+1)\le1$. [F2, F3, F4, step 1.1]

3.1 For y nonzero and $v(x)\le v(y)$, apply the preceding step to x/y to obtain $v(x+y)\le v(y)$. If y=0 there is nothing to prove; interchange x,y when needed. This proves the strong triangle inequality. The uniqueness lemma gives uniqueness and completeness. Its proof applies in arbitrary characteristic; no conjugate count or separability was used. For the trivial base value the norm formula is identically one on nonzero elements. [F1, step 1.1, step 2.1] ∎
