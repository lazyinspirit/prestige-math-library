---
id: "cex-ag-regular-factors-product-not-regular"
kind: "counterexample"
title: "Regular field factors can have a nonregular tensor product"
status: draft
origin: "pipeline"
deps: ["def-purely-inseparable-extension", "def-regular-noetherian-ring", "def-embedding-dimension-and-regular-local-ring", "lem-regular-local-domain-induction", "def-axiom-of-choice", "thm-binomial-theorem-over-a-commutative-ring", "lem-prime-divides-intermediate-binomial-coefficients", "thm-coproduct-property-of-tensor-products-of-commutative-algebras"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stacks Algebra 10.166.1–2 (tags 0381, 0382)"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
---

## Statement refuted

Assume the Axiom of Choice ([[def-axiom-of-choice]]), used below for the regular-local-domain theorem.

False claim: if $R$ and $S$ are regular Noetherian $k$-algebras, then so is
$R\otimes_kS$. Let $k$ be a field of characteristic $p>0$ and
let $L/k$ be a nontrivial finite purely inseparable extension
([[def-purely-inseparable-extension]]). Then $L$ is a regular Noetherian ring
(it is a field), while $L\otimes_{k}L$ has a nonzero nilpotent and is therefore
not reduced and not regular.

## Facts & Assumptions

**Given:** A field $k$ of characteristic $p>0$, a finite purely inseparable extension $L/k$ with $L\ne k$, and the Axiom of Choice ([[def-axiom-of-choice]]).

[F1] [[def-purely-inseparable-extension]]: a finite extension $L/k$ in characteristic $p>0$ is purely inseparable when for every $\alpha\in L$ there is $n\in\mathbb N$ with $\alpha^{p^{n}}\in k$; the exponent $n=0$ is allowed, so elements of $k$ are covered.

[F2] [[thm-binomial-theorem-over-a-commutative-ring]], [[lem-prime-divides-intermediate-binomial-coefficients]]: in characteristic $p$ the binomial coefficients $\binom{p}{i}$, $0<i<p$, are divisible by $p$, so $(X+Y)^{p}=X^{p}+Y^{p}$ in every commutative ring of characteristic $p$, and iterating gives the same identity for the exponent $p^{n}$.

[F3] [[def-regular-noetherian-ring]], [[def-embedding-dimension-and-regular-local-ring]]: a commutative Noetherian ring is regular when each of its prime localisations is a regular local ring; a nonzero Noetherian local ring $(R,\mathfrak m,\kappa)$ satisfies $\operatorname{edim}R=\dim_\kappa(\mathfrak m/\mathfrak m^{2})$ and is regular exactly when $\operatorname{edim}R=\dim R$.

[F4] [[lem-regular-local-domain-induction]]: under the Axiom of Choice, every regular local ring is an integral domain.

[F5] [[thm-coproduct-property-of-tensor-products-of-commutative-algebras]]: $L\otimes_{k}L$ is generated as a ring by the two copies of $L$, with $b\otimes c\mapsto bc$ defining the multiplication, so that $a\otimes1=1\otimes a$ for $a\in k$.

## Counterexample

1.1 The element $\alpha$ and the nilpotent $u$. Since $L\ne k$, choose $\alpha\in L\smallsetminus k$; by [F1] there is $n\ge1$ with $a:=\alpha^{p^{n}}\in k$, and we fix such an $n$ (the minimal one). Put $u:=\alpha\otimes1-1\otimes\alpha\in L\otimes_{k}L$. [F1, given, choose]

2.1 $u\ne0$. Since $L$ is finite-dimensional over $k$ and $\alpha\notin k$, the elements $1,\alpha$ are $k$-linearly independent, so the linear functional on the plane $k\cdot1+k\cdot\alpha$ with $\lambda(1)=1$, $\lambda(\alpha)=0$ extends to a $k$-linear map $\lambda\colon L\to k$ (finite-dimensional linear algebra). If $u=0$, then applying $\lambda\otimes\operatorname{id}$ to the identity $\alpha\otimes1=1\otimes\alpha$ gives $\lambda(\alpha)\cdot1=\lambda(1)\cdot\alpha$, that is $0=\alpha$, a contradiction; hence $u\ne0$. [step 1.1, algebra]

3.1 $u$ is nilpotent. By [F2], in the commutative ring $L\otimes_{k}L$ of characteristic $p$ one has $u^{p^{n}}=(\alpha\otimes1)^{p^{n}}-(1\otimes\alpha)^{p^{n}}=\alpha^{p^{n}}\otimes1-1\otimes\alpha^{p^{n}}$, and this is $a\otimes1-1\otimes a=0$ because $a\in k$ satisfies $a\otimes1=1\otimes a$ by [F5]. So $u\ne0$ is a nilpotent element and $L\otimes_{k}L$ is not reduced. [F2, F5, step 1.1, step 2.1, algebra]

4.1 $L$ is regular and $L\otimes_{k}L$ is not. The field $L$ is Noetherian and its only prime is $(0)$, whose localisation is the field $L$ itself: a field is a regular local ring of dimension $0$ with zero maximal ideal, so $\operatorname{edim}=\dim=0$ by [F3], and $L$ is regular. Suppose $L\otimes_{k}L$ were regular. It is a nonzero finite-dimensional $k$-algebra, so some maximal ideal $\mathfrak m$ contains the annihilator of $u$ and then $u$ has nonzero image in the localisation at $\mathfrak m$; that localisation would be a regular local ring, hence a domain by [F4], in which the nilpotent image of $u$ must vanish, a contradiction. Therefore $L\otimes_{k}L$ is not regular, so regularity of the two field factors $L$ and $L$ does not pass to their tensor product over $k$. [F3, F4, step 3.1, algebra] ∎
