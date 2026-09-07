---
id: lem-number-field-completions-as-local-polynomial-factors
title: "Number field completions as local polynomial factors"
kind: lemma
status: draft
origin: pipeline
deps: [def-completion-of-a-number-field-at-a-prime, thm-number-field-places-classification, thm-unique-extension-of-a-nonarchimedean-absolute-value, thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field, thm-primitive-element-theorem-for-finite-separable-extensions, thm-chinese-remainder-theorem-for-comaximal-ideals, thm-field-norm-and-trace-agree-with-operator-determinant-and-trace]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Chapter 8, Propositions 8.1\u20138.2, pp.135\u2013136; Conrad Lemma 7.2, pp.14\u201315"
      url: https://www.jmilne.org/math/CourseNotes/ANT.pdf
proof_strategy: direct argument
---

## Statement

Let L/K be a finite separable extension of number fields, $L=K(\alpha)$ with monic minimal polynomial F, and p a finite prime of K. Factor F over $K_p$ into distinct monic irreducibles $F_i$. Then
$$L\otimes_K K_p\cong\prod_i K_p[T]/(F_i)\cong\prod_{P\mid p}L_P,\qquad\sum_{P\mid p}[L_P:K_p]=[L:K].$$
Use extending absolute values on each factor; their positive powers give the normalized number-field completions. Under this product, local multiplication matrices give $N_{L/K}(x)=\prod_{P\mid p}N_{L_P/K_p}(x)$ and $\operatorname{Tr}_{L/K}(x)=\sum_{P\mid p}\operatorname{Tr}_{L_P/K_p}(x)$, with values embedded in $K_p$.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[def-completion-of-a-number-field-at-a-prime]]: For a nonzero prime P of $\mathcal O_K$, let $K_P$ be the completion at $|x|_P=(NP)^{-\operatorname{ord}_P x}$. Its valuation ring has residue field $\mathcal O_K/P$, since the original valuation ring is $(\mathcal O_K)_P$ and completion preserves residues. In L/K with $P\mid p$, the normalized value restricts as $|\cdot|_P|_K=|\cdot|_p^{ef}$, because $NP=(Np)^f$ and $\operatorname{ord}_P|_K=e\operatorname{ord}_p$. When a literal extension of $|\cdot|_p$ is needed use $|\cdot|_P^{1/(ef)}$. Positive powers define the same topology and completion.

[F2] [[thm-unique-extension-of-a-nonarchimedean-absolute-value]]: For every finite field extension L/K with K complete nonarchimedean, the unique extending absolute value is $|x|_L=|N_{L/K}(x)|_K^{1/[L:K]}.$ It is nonarchimedean and makes L complete. Separability and discreteness are not assumed; the trivial valuation is included.

[F3] [[thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field]]: Let F be complete for a multiplicative absolute value and V a finite-dimensional normed F-vector space. For any basis $v_1,\ldots,v_n$, its coordinate sup norm $\|\sum a_iv_i\|_\infty=\max_i|a_i|$ is bounded above and below by positive multiples of the given norm. For $n=0$ both norms are zero. Consequently V is complete and every linear subspace is closed.

[F4] [[thm-primitive-element-theorem-for-finite-separable-extensions]]: Let $E=F(\alpha_1,\ldots,\alpha_r)$ be a finite extension. If all but possibly one of the generators are separable over $F$, then $E/F$ is simple. In particular, every finite separable extension is simple.

[F5] [[thm-chinese-remainder-theorem-for-comaximal-ideals]]: Let $R$ be a commutative ring and let $I_1,\ldots,I_r$ be pairwise comaximal ideals, where $r\ge1$. Then the canonical map $ R\longrightarrow \prod_{i=1}^r R/I_i,\qquad x\longmapsto(x+I_1,\ldots,x+I_r) $ is surjective, its kernel is $\bigcap_{i=1}^r I_i$, and $ \bigcap_{i=1}^r I_i=\prod_{i=1}^r I_i. $ Equivalently, $ R/\prod_{i=1}^r I_i\cong\prod_{i=1}^r R/I_i. $

[F6] [[thm-number-field-places-classification]]: The nonarchimedean places of a number field are in bijection with the nonzero primes of its ring of integers, with representative $|x|_P=(NP)^{-\operatorname{ord}_P x}$.

## Proof

1.1 The primitive-element theorem supplies alpha if needed. The presentation $L=K[T]/(F)$ remains $K_p[T]/(F)$ after scalar extension, as is seen on the power basis. Separability gives a Bezout identity for F,F' over K, hence over $K_p$, so the irreducible factors remain distinct. Polynomial CRT gives the product of factor fields. [F4, F5]

2.1 Each factor E has the unique extending absolute value and is complete. Its element $\alpha_i=T\bmod F_i$ generates E over $K_p$. Approximating each coefficient of a finite polynomial in $\alpha_i$ by elements of K shows that the image of L in E is dense. Thus E is the completion of the induced nonarchimedean place on L. Its restriction to K is the p-adic place, so [F6] classifies it by a unique prime P of $\mathcal O_L$ above p. [F1, F2, F3, F6, step 1.1]

3.1 Conversely the inclusion K into $L_P$, using the extending power normalization, extends to $K_p$. The natural algebra map $L\otimes_KK_p\to L_P$ has finite-dimensional image over $K_p$. With its inherited norm this image is complete and therefore closed; it also contains the dense L. Hence the map is surjective onto the field $L_P$, and so factors through exactly one of the displayed factor fields. Two factors cannot induce the same place: equivalent extending values agree on K and hence have exponent one, so the completion isometry fixes K and alpha and, by density, $K_p$; the minimal polynomial of alpha over $K_p$ would then be the same factor. This establishes the bijection. [F1, F3, step 1.1, step 2.1]

4.1 Dimensions in the finite product add to the degree of F. For x in L, scalar extension of its multiplication matrix preserves its determinant and trace; in the product it becomes block diagonal with the local multiplication matrices. The determinant of a block diagonal matrix is the product of its block determinants and its trace their sum. This proves the norm and trace formulas, including x=0 and degree one. [step 1.1, step 3.1, algebra] ∎
