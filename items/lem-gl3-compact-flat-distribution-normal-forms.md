---
dependency_level: 1
id: lem-gl3-compact-flat-distribution-normal-forms
kind: lemma
title: "Compact bounded-coefficient normal forms for a flat distribution"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-gl3-distribution-vanishing-to-infinite-order-and-canonical-extension, lem-gl3-tempered-distribution-has-polynomial-growth-continuous-primitive, thm-compactly-supported-distributions-are-tempered, thm-leibniz-rule-for-distributions, lem-test-function-cutoffs-and-euclidean-localization, def-countable-choice]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "S. D. Miller and W. Schmid, Distributions and Analytic Continuation of Dirichlet Series, Lemmas 3.1 and 3.5"
      url: "https://arxiv.org/pdf/math/0403030v1"
---

## Statement

Assume Countable Choice. If a compactly supported distribution $T$ on $\mathbb R$ vanishes to order $k\ge0$ at $0$, there are finitely many bounded compactly supported functions $h_j$ and $g_j$ such that
$$T=\sum_{j=0}^{m}D^j(x^{k+j}h_j)=\sum_{j=0}^{m'}x^{k+j}D^jg_j.$$
The same two normal forms are equivalent locally, without the compact support requirement. Multiplication by a smooth function preserves vanishing to every given finite order at $0$.

## Statement references

[Miller and Schmid, Lemmas 3.1 and 3.5](https://arxiv.org/pdf/math/0403030v1)

## Facts & Assumptions

**Given:** Countable Choice, $k\ge0$, and the distribution in the statement. Bounded coefficients are understood through their regular distributions.

[F1] [[def-gl3-distribution-vanishing-to-infinite-order-and-canonical-extension]] gives the local form $T=\sum_j x^{k+j}D^jf_j$ with bounded $f_j$.

[F2] [[thm-leibniz-rule-for-distributions]] gives the finite product rule for smooth multipliers.

[F3] [[lem-test-function-cutoffs-and-euclidean-localization]] supplies compact smooth cutoffs equal to one near any given compact set.

[F4] [[thm-compactly-supported-distributions-are-tempered]] and [[lem-gl3-tempered-distribution-has-polynomial-growth-continuous-primitive]] give a continuous global primitive of a compact distribution under [[def-countable-choice|Countable Choice]].

## Proof

**Given:** The stated data.

1.1 Leibniz gives $D^j(x^{k+j}h)=\sum_{i=0}^j\binom ji(k+j)_{j-i}x^{k+i}D^ih$, where $(a)_r=a(a-1)\cdots(a-r+1)$ and $(a)_0=1$. Thus the operators $D^j\circ x^{k+j}$ and $x^{k+j}D^j$, for $0\le j\le m$, are related by a triangular constant matrix with diagonal one. Solving this finite triangular system gives equal spans. Applying either operator family to any bounded coefficient preserves boundedness of the coefficient under these finite linear combinations and does not enlarge its support. This proves equivalence of the two local normal forms. [F1, F2, algebra]

2.1 Multiplying the form in [F1] by a smooth $a$ gives $a x^{k+j}D^jf_j=x^{k+j}D^j(af_j)-\sum_{i<j}\binom ji x^{k+j}a^{(j-i)}D^if_j$. The remaining terms can be placed in normal form with derivative order at most $j-1$: repeatedly use $xD^i b=D^i(xb)-iD^{i-1}b$ to move each excessive power of $x$ into a bounded coefficient, and repeat the same product rule to move smooth factors across derivatives. This procedure terminates by decreasing derivative order. On any smaller bounded interval all smooth coefficient derivatives are bounded. Therefore multiplication preserves the local order-$k$ form. If $a$ is compactly supported inside the interval of [F1], all new coefficients have compact support there. [F1, F2, step 1.1, algebra]

3.1 Choose $\chi\in C_c^\infty$ supported inside an interval on which [F1] holds and equal to one near $0$. Step 2.1 gives both required compact bounded-coefficient forms for $\chi T$. The remaining distribution $R=(1-\chi)T$ has compact support disjoint from a neighborhood of $0$. By [F4], write $R=D^\ell F$ with $F$ continuous on $\mathbb R$. [F3, F4, step 2.1, choose]

4.1 Choose a smooth compactly supported $\eta$ zero near $0$ and equal to one near $\operatorname{supp}R$. Then $R=\eta D^\ell F=\sum_{i=0}^\ell(-1)^{\ell-i}\binom\ell iD^i(\eta^{(\ell-i)}F)$ by the finite product rule. Each coefficient is continuous, compactly supported and zero near $0$. It can therefore be written as $x^{k+i}h_i$, with bounded compactly supported $h_i$, by smooth division away from $0$ and zero extension near $0$. This is the first stated normal form for $R$, and step 1.1 gives its second form. Adding the forms for $\chi T$ proves the two global assertions. The zero distribution is covered by zero coefficients; $k=0$ causes no division at the origin because the only division occurs on supports away from it. [F2, F3, step 1.1, step 3.1, algebra] ∎
