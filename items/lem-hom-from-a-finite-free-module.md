---
id: lem-hom-from-a-finite-free-module
kind: lemma
title: "For a commutative ring, $\\operatorname{Hom}_R(R^n,N)\\cong N^n$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-hom-module-over-a-commutative-ring, thm-universal-property-of-free-modules, def-free-module-on-a-set-and-standard-basis, def-direct-sum-of-a-family-of-modules]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §4"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §1"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, let $n\in\mathbb N$, let $R^n$ be the free
$R$-module on an $n$-element set with standard basis $e_1,\ldots,e_n$
([[def-free-module-on-a-set-and-standard-basis]]), and let $N$ be an
$R$-module. Write $N^n$ for the direct sum of $n$ copies of $N$
([[def-direct-sum-of-a-family-of-modules]]), which for a finite index set is the
coordinatewise product. Then

$$\Phi\colon\operatorname{Hom}_R(R^n,N)\longrightarrow N^n,\qquad \Phi(f)=\big(f(e_1),\ldots,f(e_n)\big),$$

is an isomorphism of $R$-modules, the source carrying the module structure of
[[lem-hom-module-over-a-commutative-ring]].

At $n=0$ both sides are the zero module.

## Facts & Assumptions

**Given:** A commutative ring $R$, a natural number $n$, the free module $R^n$ with standard basis $e_1,\ldots,e_n$, and an $R$-module $N$.

[L1] Every set map $u\colon X\to M$ extends uniquely to an $R$-module homomorphism $\bar u\colon R^{(X)}\to M$ with $\bar u(e_x)=u(x)$, given by $\bar u(\sum_{x\in F}r_xe_x)=\sum_{x\in F}r_xu(x)$ ([[thm-universal-property-of-free-modules]]).

[L2] In $R^{(X)}$ the standard basis vector $e_x$ has coordinate $1_R$ at $x$ and zero elsewhere, and every element has a unique expression $\sum_{x\in F}r_xe_x$ with $F\subseteq X$ finite; for $X=\varnothing$ the module is $0$ ([[def-free-module-on-a-set-and-standard-basis]]).

[L3] For a family $(M_i)_{i\in I}$ of left $R$-modules the direct sum is the submodule of the coordinatewise product consisting of the families of finite support; for $I=\varnothing$ both product and direct sum are the zero module ([[def-direct-sum-of-a-family-of-modules]]).

[L4] For a commutative ring $R$ and $R$-modules $M,N$, the abelian group $\operatorname{Hom}_R(M,N)$ is an $R$-module under $(rf)(m)=r\,f(m)$, with the published addition unchanged ([[lem-hom-module-over-a-commutative-ring]]).

## Proof

**Proof technique:** direct.

1.1 $\Phi$ is a bijection. It is injective: two homomorphisms $R^n\to N$ agreeing on $e_1,\ldots,e_n$ are the unique extension of the same set map on the index set, hence equal. It is surjective: given $(y_1,\ldots,y_n)\in N^n$, the set map $i\mapsto y_i$ extends to a homomorphism $f\colon R^n\to N$ with $f(e_i)=y_i$, so $\Phi(f)=(y_1,\ldots,y_n)$. [L1, L2, given]

2.1 $\Phi$ is $R$-linear. Addition in $\operatorname{Hom}_R(R^n,N)$ and in $N^n$ is pointwise and coordinatewise respectively, so $\Phi(f+g)=\big((f+g)(e_1),\ldots\big)=\Phi(f)+\Phi(g)$; and the scalar action on the source is pointwise, so $\Phi(rf)=\big(rf(e_1),\ldots,rf(e_n)\big)=r\,\Phi(f)$. [L3, L4, step 1.1, algebra]

3.1 A bijective $R$-module homomorphism is an isomorphism of $R$-modules, so $\Phi$ is one. At $n=0$ the index set is empty: $R^0=0$, the only homomorphism $0\to N$ is the zero map, and $N^0$ is the zero module, so both sides are zero and $\Phi$ is the unique map between them. [L2, L3, step 1.1, step 2.1] ∎

## Remarks

- **The isomorphism depends on the chosen basis.** A different ordered basis of $R^n$ gives a different $\Phi$; what is canonical is that $\operatorname{Hom}_R(R^n,N)$ is isomorphic to $N^n$, not any particular isomorphism.

- **Finiteness of the index set is what makes the target a direct sum.** For an infinite index set $X$ the same argument identifies $\operatorname{Hom}_R(R^{(X)},N)$ with the coordinatewise **product** of copies of $N$, not with the direct sum, because a homomorphism may be nonzero on infinitely many basis vectors.
