---
dependency_level: 7
id: lem-finite-field-witt-ring-is-unramified-of-residue-degree
kind: lemma
title: Finite-field Witt rings are unramified of the residue degree
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-p-typical-witt-vectors-of-a-perfect-field
- lem-perfect-base-witt-frobenius-and-p-adic-completeness
- lem-perfect-base-witt-teichmuller-expansions-and-units
- lem-perfect-field-witt-ring-is-a-complete-discrete-valuation-ring
- lem-witt-vectors-of-the-prime-field-are-p-adic-integers
- thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group
- thm-p-adic-completion-agrees-with-the-fraction-field-of-zp
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: Joseph Rabinoff, The theory of Witt vectors, sections 2–5; p-typical coordinate
      specialization
    url: https://arxiv.org/abs/1409.7445
  - title: Brinon and Conrad, p-adic Hodge theory notes, section 4.2 applications
      and Remark 4.2.4
    url: https://math.stanford.edu/~conrad/papers/notes.pdf
---

## Statement

Let $k$ have $p^f$ elements, $f\ge1$. Then $W_p(k)$ is a free $\mathbb Z_p$-module of rank $f$, and $W_p(k)[1/p]$ is an unramified extension of $\mathbb Q_p$ of degree $f$. It is unique up to $\mathbb Q_p$-isomorphism among complete discretely valued extensions with uniformizer $p$ and residue field isomorphic to $k$. The Witt Frobenius fixes $\mathbb Q_p$, has exact order $f$, and reduces to $a\mapsto a^p$ on $k$. For any complete discrete valuation ring $A$ of mixed characteristic $(0,p)$ with residue field identified with $k$, there is a unique continuous unital residue-preserving embedding $W_p(k)\hookrightarrow A$; it extends to $W_p(k)[1/p]\hookrightarrow\operatorname{Frac}(A)$. In particular this supplies the coefficient subfield $K_0\subset K$ for finite $K/\mathbb Q_p$. No countable or full choice is assumed.

## Statement references

[[def-p-typical-witt-vectors-of-a-perfect-field]]

[[lem-perfect-base-witt-frobenius-and-p-adic-completeness]]

[[lem-perfect-base-witt-teichmuller-expansions-and-units]]

[[lem-perfect-field-witt-ring-is-a-complete-discrete-valuation-ring]]

[[lem-witt-vectors-of-the-prime-field-are-p-adic-integers]]

[[thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group]]

[[thm-p-adic-completion-agrees-with-the-fraction-field-of-zp]]

## Facts & Assumptions

**Given:** The rings, prime and hypotheses in the Statement.

[F1] [[def-p-typical-witt-vectors-of-a-perfect-field]] supplies the notation and underlying tuple set only; no structural conclusion whose proof is being supplied is assumed.

[F2] [[lem-perfect-base-witt-frobenius-and-p-adic-completeness]] supplies its stated interface.

[F3] [[lem-perfect-base-witt-teichmuller-expansions-and-units]] supplies its stated interface.

[F4] [[lem-perfect-field-witt-ring-is-a-complete-discrete-valuation-ring]] supplies its stated interface.

[F5] [[lem-witt-vectors-of-the-prime-field-are-p-adic-integers]] supplies its stated interface.

[F6] [[thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group]] supplies its stated interface.

[F7] [[thm-p-adic-completion-agrees-with-the-fraction-field-of-zp]] identifies the metric-completion field $\mathbb Q_p$ with $\mathbb Z_p[1/p]$, with the latter ring defined by compatible integer residues.

## Proof

1.1 Choose a finite $\mathbb F_p$-basis $\beta_1,\ldots,\beta_f$ of $k$ and any fixed lifts $e_i\in W_p(k)$, for example $[\beta_i]$. For $x$, express its residue uniquely as $\sum_i d_{i0}\beta_i$ with $d_{i0}\in\{0,\ldots,p-1\}$. Divide $x-\sum_i d_{i0}e_i$ by $p$, and repeat. Unique residue coefficients and division give deterministic recursions with $x=\sum_i c_i e_i$, where $c_i=\sum_{n\ge0}d_{in}p^n\in\mathbb Z_p$; convergence follows from [F2]. If $\sum_i c_i e_i=0$ and some $c_i\ne0$, divide by the minimum of their finitely many $p$-adic orders and reduce modulo $p$, contradicting the residue basis. Thus these lifts are a free basis. Here $\mathbb Z_p$ is embedded by [F5]. [given, F2, F4, F5, algebra]

1.2 For uniqueness choose a primitive element $\beta$ of $k/\mathbb F_p$. Such an element exists without a choice principle: the multiplicative group of a finite field is cyclic. Explicitly let $m$ be the least common multiple of its element orders; by combining prime-power parts of finitely many orders in this abelian group there is an element of order $m$. Every element is a root of $T^m-1$, so the polynomial root bound gives $|k^\times|\le m$, forcing $m=|k^\times|$. A generator generates the field as well. Its monic minimal polynomial $\bar g$ over $\mathbb F_p$ has degree $f$ and simple roots by [F6]. Lift its coefficients by their integer representatives to a monic $g\in\mathbb Z_p[T]$. [given, F6, algebra]

2.1 By [F7], tensor the basis with $\mathbb Q_p=\mathbb Z_p[1/p]$. By [F4] its target is the fraction field, so its degree is $f$. The discrete valuation has $v(p)=1$, hence ramification index one over $\mathbb Q_p$, and the residue extension $k/\mathbb F_p$ is separable by [F6]. This is precisely unramifiedness. Completeness of the fraction field follows by multiplying any Cauchy sequence by a fixed power of $p$ to put it eventually in the complete valuation ring of [F4]. [given, F4, F6, F7, step 1.1, algebra]

2.2 Let $A$ be either $W_p(k)$ or the valuation ring of any complete extension being compared in the unramified uniqueness assertion, so $p$ is a uniformizer, with residue identified with $k$. In the latter case the integer map extends to an injective $\mathbb Z_p\to A$ by taking limits of compatible integer residues: differences divisible by $p^n$ converge to zero, and a nonzero $p^rb\in\mathbb Z_p$ has valuation $r$, since the limit of $b$ has nonzero residue. Choose one lift $a_0$ of $\beta$. The Newton recursion $a_{n+1}=a_n-g(a_n)/g'(a_n)$ is defined because $g'(a_n)$ has the fixed nonzero residue $\bar g'(\beta)$. Taylor's polynomial identity gives $g(a_{n+1})\in g(a_n)^2 A$; consequently $g(a_n)\in p^{2^n}A$ and $a_{n+1}-a_n\in p^{2^n}A$. Completeness gives a root $\alpha$ reducing to $\beta$. For two such roots $a,b$, $g(a)-g(b)=(a-b)(g'(b)+(a-b)h)$ with the second factor a unit, so $a=b$. [given, F2, F4, step 1.2, algebra]

3.1 The same deterministic residue-basis recursion as in step 1.1, now with the lifts $1,\alpha,\ldots,\alpha^{f-1}$, proves that they are a $\mathbb Z_p$-basis of $A$: their residues are a basis because $\beta$ has degree $f$; completeness, the fact that $p$ generates the maximal ideal, and injectivity of multiplication by $p$ are the properties used. Monic division makes $\mathbb Z_p[T]/(g)$ free on these same powers, so evaluation at $\alpha$ is a bijective ring homomorphism to $A$. It follows that both valuation rings and then their fraction fields are isomorphic over $\mathbb Z_p$ and $\mathbb Q_p$. The finitely many basis choices and a single initial Newton lift do not require countable choice. [given, step 1.1, step 1.2, step 2.2, algebra]

4.1 To construct the coefficient embedding into a possibly ramified $A$, use the same $g$ and residue element $\beta$. Let $\pi$ be a uniformizer of $A$. Its mixed characteristic gives $p=u\pi^e$ for a unit $u$ and an integer $e\ge1$. Start from any one lift of $\beta$ in $A$ and perform the Newton recursion of step 2.2: now $g(a_0)\in\pi A$, so $g(a_n)\in\pi^{2^n}A$, and the same Taylor proof and completeness give the unique root $\alpha_A$ with residue $\beta$. The integer map extends to a continuous $\mathbb Z_p\to A$ by the standard compatible integer representatives; it is injective since a $p$-adic unit has nonzero residue and $p$ has finite positive valuation. Evaluation at $\alpha_A$ gives $\mathbb Z_p[T]/(g)\to A$. It is injective: for a nonzero relation $\sum_{i<f}c_i\alpha_A^i=0$, divide by the minimum $p$-adic order of its finitely many nonzero coefficients and reduce modulo $\pi$, contradicting independence of $1,\beta,\ldots,\beta^{f-1}$. The isomorphism for $W_p(k)$ established in step 3.1 therefore gives the required embedding, and localization gives its extension to fraction fields. Any continuous unital residue-preserving map fixes $\mathbb Z_p$ and sends its distinguished simple root to $\alpha_A$ by root uniqueness, so the embedding is unique and independent of the chosen primitive element and initial lift. Only one initial lift is selected; the rest is a unique recursion. [given, step 1.2, step 2.2, step 3.1, algebra]

5.1 By [F2] and the Frobenius coordinate identity underlying it, $F$ acts by $a_i\mapsto a_i^p$. The finite-field Frobenius has exact order $f$ by [F6], so $F^f=1$ on every coordinate; any smaller order would give that smaller order on the quotient $k$, which is impossible. It fixes $\mathbb Z_p$ by [F5], hence fixes $\mathbb Q_p$ upon extension to the fraction field. Thus it is the stated arithmetic Frobenius lift and has exact order $f$, including $f=1$. [given, F2, F5, F6, step 2.1, algebra] ∎
