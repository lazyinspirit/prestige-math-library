---
id: thm-number-field-places-classification
title: "Number field places classification"
kind: theorem
status: published
origin: pipeline
deps: [thm-completion-of-an-absolutely-valued-field, thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field, lem-uniqueness-of-an-extended-complete-field-absolute-value, thm-ostrowskis-theorem-for-the-rationals, thm-equivalent-field-absolute-values-characterisation, cor-ring-of-integers-is-a-dedekind-domain, lem-dedekind-localisation-at-nonzero-prime-is-dvr, thm-fundamental-theorem-of-algebra-liouville-proof, def-ring-of-integers-of-a-number-field, cor-norm-of-a-prime-ideal]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
sources:
  references:
    - title: "\u00a77, Corollary 7.3 and preceding normalization, pp.15\u201316; Milne Theorem 7.14"
      url: https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf
proof_strategy: direct argument
---

## Statement

Assume the Axiom of Choice. Places of a number field K mean equivalence classes of nontrivial absolute values. They consist of real embeddings, conjugate pairs of nonreal complex embeddings, and one nonarchimedean place for each nonzero prime P of $\mathcal O_K$. A finite representative is
$$|x|_P=(NP)^{-\operatorname{ord}_P x}.$$
If P lies above a rational prime p, this restricts on $\mathbb Q$ to $|\cdot|_p^{ef}$, with $e=\operatorname{ord}_P(p)$ and $NP=p^f$.

## Facts & Assumptions

**Given:** The Axiom of Choice and a number field $K$, with places defined as in the statement.

[F1] [[thm-completion-of-an-absolutely-valued-field]]: The metric completion $\widehat F$ of an absolutely valued field F has a unique compatible complete valued-field structure. The map $F\to\widehat F$ is a dense isometric field embedding, universal for isometric field maps from F to complete valued fields. In the nonarchimedean case the value group and residue field are unchanged. We use the ordinary metric-completion construction with its countable-choice assumption for arbitrary metric spaces.

[F2] [[thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field]]: Let F be complete for a multiplicative absolute value and V a finite-dimensional normed F-vector space. For any basis $v_1,\ldots,v_n$, its coordinate sup norm $\|\sum a_iv_i\|_\infty=\max_i|a_i|$ is bounded above and below by positive multiples of the given norm. For $n=0$ both norms are zero. Consequently V is complete and every linear subspace is closed.

[F3] [[lem-uniqueness-of-an-extended-complete-field-absolute-value]]: For a finite extension E/F of a complete absolutely valued field F, at most one absolute value on E extends the given absolute value on F. Any such extension makes E complete.

[F4] [[thm-ostrowskis-theorem-for-the-rationals]]: Let $|\cdot|$ be a nontrivial absolute value on $\mathbb Q$ in the sense of def-multiplicative-absolute-value-on-a-field. Then exactly one of the following holds. 1. $|\cdot|$ is equivalent to the usual absolute value on $\mathbb Q$. 2. There is a unique prime $p$ such that $|\cdot|$ is equivalent to $|\cdot|_p$ of def-p-adic-absolute-value-on-the-rationals.

[F5] [[thm-equivalent-field-absolute-values-characterisation]]: Let $F$ be a field, and let $|\cdot|_1$ and $|\cdot|_2$ be nontrivial absolute values on $F$. Then they induce the same topology on $F$ if and only if they are equivalent in the sense of def-equivalent-field-absolute-values.

[F6] [[lem-dedekind-localisation-at-nonzero-prime-is-dvr]]: Let $R$ be a Dedekind domain and let $\mathfrak p\subset R$ be a nonzero prime ideal. Then $R_{\mathfrak p}$ is a discrete valuation ring.

[F7] [[thm-fundamental-theorem-of-algebra-liouville-proof]]: Every nonconstant complex polynomial has a complex root. This proof uses Liouville's theorem and is independent of the minimum-modulus proof cited in the accompanying agreement remark.

[F8] [[def-ring-of-integers-of-a-number-field]]: For a number field $K$, its **ring of integers** is $\mathcal O_K$, the integral closure of $\mathbb Z$ in $K$. It is not an arbitrary order.

[F9] [[cor-norm-of-a-prime-ideal]]: For a nonzero prime $\mathfrak P\subseteq\mathcal O_K$, there is a rational prime $p$ and an integer $f\ge1$ with $\mathfrak P\cap\mathbb Z=(p)$ and $N\mathfrak P=p^f$.

[F10] [[cor-ring-of-integers-is-a-dedekind-domain]]: Assuming Choice, the ring of integers of every number field is a Dedekind domain.

## Proof

1.1 A nontrivial absolute value on K cannot restrict trivially to the rationals. If it did, for each algebraic x and all n, reduction by its fixed minimal equation would express $x^n$ in a fixed finite list of powers of x with rational coefficients of value at most one. Thus $|x|^n$ is bounded independently of n and $|x|\le1$. Apply the same argument to $x^{-1}$ to obtain $|x|=1$ for nonzero x. Ostrowski and the equivalence characterization therefore leave precisely a p-adic restriction up to positive power, or the usual archimedean restriction up to positive power. [F4, F5]

2.1 If the restriction is a positive power of the $p$-adic value, then all integers have value at most one. The binomial theorem gives $|x+y|^n\le(n+1)\max(|x|,|y|)^n$; taking $n$th roots and letting $n\to\infty$ proves the ultrametric inequality on $K$. For this nonarchimedean value, every algebraic integer has value at most one: otherwise its leading term in a monic integral equation would have strictly greater value than the sum of the others. Then $P=\{a\in\mathcal O_K:|a|<1\}$ is a proper prime ideal, and it is nonzero since it contains the rational prime p. By [F10], $\mathcal O_K$ is Dedekind, so [F6] applies and $(\mathcal O_K)_P$ is a DVR. Elements outside P have value one; every nonzero element of K is $u\varpi^m$ with u a local unit, so its value is $|\varpi|^m$, $0<|\varpi|<1$. Hence its place is exactly P's valuation place. The elements of $\mathcal O_K$ with value less than one recover P, proving uniqueness. Conversely a DVR valuation defines that nontrivial absolute-value place. [F6, F8, F10, step 1.1]

2.2 In the archimedean case write the restriction as the ordinary value to a power $0<a\le1$; a>1 is excluded by the triangle inequality on positive integers. The completion contains the complete real field with this powered value. The image V of $\mathbb R\otimes_{\mathbb Q}K$ in the completion is a finite-dimensional normed real vector space over that valued real field. It is complete, hence closed, and contains the dense K, so equals the completion. V is a finite-dimensional real domain and thus a field (multiplication by any nonzero element is injective and hence surjective). By the fundamental theorem of algebra, real irreducible polynomials have degree at most two: after adjoining one nonreal element one gets $\mathbb C$, which has no proper finite algebraic extensions. Therefore V is $\mathbb R$ or $\mathbb C$. Uniqueness of extending values identifies its value with the ordinary modulus to the a-th power. [F1, F2, F3, F7, step 1.1]

3.1 Each embedding into the reals or complexes gives such a place. If two embeddings give equivalent places, normalize their restriction to the same real power. The equivalence exponent must then be one on the rationals; their completions are isometrically isomorphic fixing the dense K and hence the reals. A real automorphism of the complexes sends i to i or -i, so these embeddings are equal or conjugate. Conversely conjugation preserves modulus. Finally $NP=p^f$ and $\operatorname{ord}_P(x)=e\operatorname{ord}_p(x)$ for rational x (rational units at p are local units) give the stated exponent ef. [F9, step 2.1, step 2.2] ∎
