---
id: thm-basic-laws-for-field-norm-and-trace
kind: theorem
title: "Norm is multiplicative, trace is $F$-linear, and both are transitive in towers"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-field-norm-and-trace, thm-field-norm-and-trace-by-embeddings, thm-determinant-multiplicative, def-determinant-of-a-linear-operator, def-trace-of-an-endomorphism, lem-product-basis-for-a-tower-of-finite-extensions, thm-tower-law-for-finite-field-extensions, lem-restriction-fibres-for-embeddings-in-a-finite-tower, thm-multiplicativity-of-separable-degree]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Proposition 5.48"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
    - title: "B. Conrad, Norm and trace, Theorem 3.2"
      url: "https://virtualmath1.stanford.edu/~conrad/248APage/handouts/normtrace.pdf"
pipeline_run: null
---

## Statement

Let $K/F$ be a finite extension and let $a,b\in K$.

1. $N_{K/F}(ab)=N_{K/F}(a)N_{K/F}(b)$.
2. $\operatorname{Tr}_{K/F}(a+b)=\operatorname{Tr}_{K/F}(a)+\operatorname{Tr}_{K/F}(b)$ and $\operatorname{Tr}_{K/F}(ca)=c\,\operatorname{Tr}_{K/F}(a)$ for every $c\in F$.
3. If $L/K/F$ is a tower of finite extensions, then
   $$N_{L/F}=N_{K/F}\circ N_{L/K},\qquad \operatorname{Tr}_{L/F}=\operatorname{Tr}_{K/F}\circ \operatorname{Tr}_{L/K}.$$

## Facts & Assumptions
**Given:** Finite field extensions as in the Statement, multiplication maps $m_x$ for $x\in K$ or $x\in L$, and product bases in towers.

[F1] Norm and trace are the determinant and trace of multiplication-by-$x$ on the relevant finite-dimensional vector space ([[def-field-norm-and-trace]], [[def-determinant-of-a-linear-operator]], [[def-trace-of-an-endomorphism]]).

[L1] For same-sized square matrices over a commutative ring, determinant is multiplicative ([[thm-determinant-multiplicative]]).

[L2] The embedding formulas identify norm with the product and trace with the sum of the conjugates, counted with the inseparable exponent ([[thm-field-norm-and-trace-by-embeddings]]).

[L3] In a finite tower, a basis of the top field over the middle field times a basis of the middle field over the base is a basis of the top field over the base ([[lem-product-basis-for-a-tower-of-finite-extensions]], [[thm-tower-law-for-finite-field-extensions]]).

[L4] Restriction from the $F$-embeddings of $L$ to the $F$-embeddings of $K$ is surjective, and every fibre has cardinality $[L:K]_s$ after transporting the $K$-structure ([[lem-restriction-fibres-for-embeddings-in-a-finite-tower]]).

[L5] Separable degrees multiply in finite towers: $[L:F]_s=[L:K]_s[K:F]_s$ ([[thm-multiplicativity-of-separable-degree]]).

## Proof

**Proof technique:** direct.

1.1 Multiplication operators compose as $m_{ab}=m_a\circ m_b$, because $(m_a\circ m_b)(x)=a(bx)=(ab)x$. Therefore [F1] and [L1] give $$N_{K/F}(ab)=\det(m_{ab})=\det(m_a)\det(m_b)=N_{K/F}(a)N_{K/F}(b).$$ [F1, L1, algebra]

1.2 The operator identity $m_{a+b}=m_a+m_b$ and the scalar identity $m_{ca}=c\,m_a$ make trace additive and $F$-linear. Hence [F1] gives $$\operatorname{Tr}_{K/F}(a+b)=\operatorname{Tr}_{K/F}(a)+\operatorname{Tr}_{K/F}(b),\qquad \operatorname{Tr}_{K/F}(ca)=c\,\operatorname{Tr}_{K/F}(a).$$ [F1, algebra]

1.3 Let $L/K/F$ be a finite tower, fix an algebraic closure $\Omega/F$, and write $i_{L/F}$, $i_{L/K}$, and $i_{K/F}$ for the three inseparable degrees. For an $F$-embedding $\sigma:K\to\Omega$, let $\mathcal E_\sigma$ be its restriction fibre in $\operatorname{Hom}_F(L,\Omega)$. Applying the embedding formulas [L2] to $L/K$ after transporting scalars along $\sigma$ gives $$ \sigma\bigl(N_{L/K}(a)\bigr)=\left(\prod_{\tau\in\mathcal E_\sigma}\tau(a)\right)^{i_{L/K}},\qquad \sigma\bigl(\operatorname{Tr}_{L/K}(a)\bigr)=i_{L/K}\sum_{\tau\in\mathcal E_\sigma}\tau(a). $$ The fibres $\mathcal E_\sigma$ partition $\operatorname{Hom}_F(L,\Omega)$ by [L4]. [L2, L4]

1.4 By the ordinary tower law [L3] and separable-degree multiplicativity [L5], $$ i_{L/F}=\frac{[L:F]}{[L:F]_s} =\frac{[L:K][K:F]}{[L:K]_s[K:F]_s} =i_{L/K}i_{K/F}. $$ [L3, L5, algebra]

2.1 Apply the outer embedding formulas [L2] for $K/F$ to the two elements in step 1.3. Using the fibre partition and step 1.4 gives $$ N_{K/F}(N_{L/K}(a)) =\left(\prod_\sigma\prod_{\tau\in\mathcal E_\sigma}\tau(a)^{i_{L/K}}\right)^{i_{K/F}} =\left(\prod_{\tau\in\operatorname{Hom}_F(L,\Omega)}\tau(a)\right)^{i_{L/F}} =N_{L/F}(a), $$ and similarly $$ \operatorname{Tr}_{K/F}(\operatorname{Tr}_{L/K}(a)) =i_{K/F}i_{L/K}\sum_{\tau\in\operatorname{Hom}_F(L,\Omega)}\tau(a) =\operatorname{Tr}_{L/F}(a). $$ [L2, step 1.3, step 1.4, algebra]

3.1 Steps 1.1, 1.2, and 2.1 prove the three claims. [step 1.1, step 1.2, step 2.1] ∎
