---
id: "ex-ag-field-change-inseparable-thickening"
kind: "example"
title: "Base change of an inseparable field extension is a thickening"
status: published
origin: "pipeline"
deps: ["thm-coproduct-property-of-tensor-products-of-commutative-algebras", "thm-polynomial-quotient-is-a-field-iff-irreducible", "thm-polynomial-is-separable-iff-coprime-to-its-derivative", "lem-polynomial-factorisation-into-irreducibles", "thm-right-exactness-of-tensor-products", "thm-binomial-theorem-over-a-commutative-ring", "lem-prime-divides-intermediate-binomial-coefficients"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stacks Algebra 10.166.1–2 (tags 0381, 0382)"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
    - title: "Vakil §22.2.10 and §26.2.4, pp.578, 690–693"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  audited: 2026-09-27
---

## Example

Let $k$ be a field of characteristic $p>0$ and let $a\in k\smallsetminus k^{p}$.
Put $L=k[t]/(t^{p}-a)$ and let $\alpha\in L$ be the class of $t$, so that
$\alpha^{p}=a$. Then $L$ is a field and
$$L\otimes_{k}L\cong L[u]/(u^{p}),\qquad u=t\otimes1-1\otimes\alpha,$$
so that the base change of $L$ along $k\to L$ is a nonreduced local ring: $u\ne0$
and $u^{p}=0$. In particular $\operatorname{Spec}(L\otimes_kL)$, the pullback
of $\operatorname{Spec}L\to\operatorname{Spec}k$ along itself, is a nonreduced
thickening of a point.

## Facts & Assumptions

**Given:** A field $k$ of characteristic $p>0$, an element $a\in k\smallsetminus k^{p}$, the polynomial $T^{p}-a\in k[T]$, the ring $L=k[T]/(T^{p}-a)$ with class $\alpha$ of $T$, and the $k$-algebra $L\otimes_{k}L$.

[F1] [[lem-polynomial-factorisation-into-irreducibles]], [[thm-polynomial-quotient-is-a-field-iff-irreducible]], [[thm-polynomial-is-separable-iff-coprime-to-its-derivative]]: every nonconstant polynomial over a field has an irreducible factor $Q$, its quotient by $(Q)$ is a field, and an irreducible polynomial with nonzero derivative is separable.

[F2] [[thm-binomial-theorem-over-a-commutative-ring]], [[lem-prime-divides-intermediate-binomial-coefficients]]: in characteristic $p$ the coefficients $\binom{p}{i}$, $0<i<p$, are divisible by $p$, so $(X+Y)^{p}=X^{p}+Y^{p}$ in every commutative ring of characteristic $p$; applied in $L[T]$ this gives $T^{p}-a=(T-\alpha)^{p}$.

[F3] [[thm-coproduct-property-of-tensor-products-of-commutative-algebras]], [[thm-right-exactness-of-tensor-products]]: $k[T]\otimes_{k}L\cong L[T]$ via $F\otimes b\mapsto bF$, and tensoring the exact sequence $0\to(T^{p}-a)\to k[T]\to L\to0$ with $L$ over $k$ gives $L\otimes_{k}L\cong L[T]/(T^{p}-a)$; more generally $(B/I)\otimes_BC\cong C/IC$.

## Verification

1.1 The ring $L$ is a field. Choose a monic irreducible factor $Q$ of $T^p-a$ by [F1] and let $\xi$ be the class of $T$ in the field $F=k[T]/(Q)$. Then $\xi^p=a$, and [F2] gives $T^p-a=(T-\xi)^p$ in $F[T]$. Thus $Q$ has only one distinct root in a splitting field. If $\deg Q=1$, then $\xi\in k$ contradicts $a\notin k^p$. If $Q'\ne0$, irreducibility and [F1] would make $Q$ separable with $\deg Q\ge2$ distinct roots, also impossible. Thus $Q'=0$, so all exponents of $Q$ are divisible by $p$. Since $1\le\deg Q\le p$ and $Q$ is monic, it has degree $p$; as a monic divisor of $T^p-a$ of that degree it equals $T^p-a$. Hence $L$ is a field by [F1]. [F1, F2, algebra]

2.1 The tensor product. By [F3] there is an isomorphism $L\otimes_{k}L\cong L[T]/(T^{p}-a)$, the second factor acting on coefficients; by [F2] one has $T^{p}-a=(T-\alpha)^{p}$ in $L[T]$, so substituting $u=T-\alpha$, an automorphism of $L[T]$, gives $$L\otimes_{k}L\cong L[u]/(u^{p}),$$ under which $u$ corresponds to $T\otimes1-1\otimes\alpha$. [F2, F3, step 1.1, algebra]

3.1 The element $u$ is a nonzero nilpotent. In $L[u]/(u^{p})$ the classes of $1,u,\dots,u^{p-1}$ are an $L$-basis, because $u^{p}$ is monic of degree $p$ and division with remainder is available: hence $u\ne0$ while $u^{p}=0$. Consequently $L\otimes_{k}L$ is not reduced, so the base change of the field $L$ along $k\to L$ is a nonreduced local ring with residue field $L$, and the fibre is a thickening rather than a reduced point. [step 2.1, algebra] ∎
