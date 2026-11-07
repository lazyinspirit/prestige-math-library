---
dependency_level: 0
id: lem-regular-field-extension-tensor-products-are-domains
kind: lemma
title: Tensor products of regular finitely generated field extensions are domains
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- def-finitely-generated-field-extension
- thm-existence-of-algebraic-closures
- cor-weak-nullstellensatz-algebraically-closed-coordinate-form
- thm-fundamental-theorem-of-finite-galois-theory
- thm-primitive-element-theorem-for-finite-separable-extensions
- cor-finite-type-algebra-over-noetherian-ring-is-noetherian
- thm-noetherian-ring-quotients-and-localisations
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: Conrad, Chow K/k-image and K/k-trace, regular-extension background
    url: https://math.stanford.edu/~conrad/papers/Kktrace.pdf
---

## Statement

Assume the Axiom of Choice. Let $K/k$ be a finitely generated extension such that $k$ is algebraically closed in $K$ and $K$ is finite separable over a purely transcendental extension $k(t_1,\ldots,t_r)$. For every extension field $E/k$, the ring $E\otimes_kK$ is an integral domain. In particular $K\otimes_kK$ is an integral noetherian ring.

## Statement references

[Conrad, Chow K/k-image and K/k-trace, regular-extension background](https://math.stanford.edu/~conrad/papers/Kktrace.pdf)


## Facts & Assumptions

[F1] [[thm-fundamental-theorem-of-finite-galois-theory]] gives the finite Galois correspondence and the fixed-field degree identities.

[F2] [[thm-primitive-element-theorem-for-finite-separable-extensions]] gives a primitive element for the finite separable part.

[F3] [[thm-existence-of-algebraic-closures]] and [[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]] give the closure and the closed point used to specialize finitely many coefficients.

[F4] [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]] and [[thm-noetherian-ring-quotients-and-localisations]] give noetherianity of the indicated finite-type algebra and localization.

[A1] [[def-axiom-of-choice]] is retained from these algebraic-closure and algebra suppliers.



**Given:** The stated extension and AC.

## Proof

1.1 First let $L/k$ be finite Galois, in a common extension field with $K$. The extension $KL/K$ is finite Galois. Restriction identifies its Galois group with a subgroup $H$ of $\operatorname{Gal}(L/k)$ whose fixed field in $L$ is $L\cap K$: an element of $L$ fixed by $H$ is fixed by every automorphism of $KL/K$, hence belongs to $K$. Since $k$ is algebraically closed in $K$, this intersection is $k$. The finite Galois correspondence gives $H=\operatorname{Gal}(L/k)$, so $[KL:K]=[L:k]$ and $K\otimes_kL\to KL$ is an isomorphism. Passing to subfields handles every finite separable $L/k$. [F1, given, construct, algebra]

2.1 If $L/k$ is finite purely inseparable, put $F=k(t_1,\ldots,t_r)$. One has $F\otimes_kL=L(t_1,\ldots,t_r)$: the inverse of a nonzero polynomial with coefficients in $L$ is obtained by raising it to a sufficiently high characteristic-power to put its coefficients in $k$. By the primitive-element theorem, $K=F[u]$ for an element with separable minimal polynomial. Consequently $K\otimes_kL$ is a finite separable algebra over $L(t_1,\ldots,t_r)$, hence a product of fields. On the other hand its spectrum has just one point: adjoining a purely inseparable extension to a field is radicial, and each adjoined element has at most one possible root in an algebraic closure. Thus this product has one factor and is a field. For a general finite algebraic $L/k$, first take its maximal separable subextension and then its purely inseparable part. The first step is a field by step 1.1, remains separably generated over that new constant field, and the purely inseparable argument just given applies to the second extension. Thus $K\otimes_k\bar k$ is a domain, being the filtered union of the resulting fields over the finite subextensions of an algebraic closure. [F2, step 1.1, construct, algebra]

3.1 Suppose $f,g$ are nonzero elements of $K\otimes_kE$ with $fg=0$. Collect their finitely many coefficients into a finitely generated $k$-subalgebra $R\subset E$. As tensoring over a field preserves injections, their product is already zero in $K\otimes_kR$. Express $f,g$ in finite $k$-linearly independent lists of elements of $K$, and choose one nonzero coefficient $a\in R$ of $f$ and one nonzero coefficient $b\in R$ of $g$. Since $R$ is a domain, $R[1/(ab)]\ne0$. Its tensor product with $\bar k$ is nonzero by faithful flatness of a field extension and is a finite-type $\bar k$-algebra. The weak Nullstellensatz therefore gives a $\bar k$-valued point at which both $a,b$ remain nonzero. Specialize the coefficients of $f,g$ at this point. Their images in $K\otimes_k\bar k$ are still nonzero, because extension of scalars preserves linear independence of the selected lists, while their product is zero. This contradicts step 2.1. Thus $K\otimes_kE$ is a domain. [F3, step 2.1, construct, algebra]

4.1 Take $E=K$. Write $K=\operatorname{Frac}(R_0)$ for the finite-type $k$-domain generated by a finite field-generating tuple. Then $K\otimes_kK$ is a localization of the finite-type $K$-algebra $K\otimes_kR_0$, hence noetherian. For an empty transcendence tuple the hypotheses force $K=k$, which gives the same assertions directly. [F4, step 3.1, construct, algebra] ∎
