---
id: "lem-ag-base-change-of-standard-smooth-presentations"
kind: "lemma"
title: "Base change of standard smooth presentations"
status: published
origin: "pipeline"
deps: ["def-ag-standard-smooth-algebra", "lem-ag-polynomial-quotient-differentials", "def-polynomial-ring-on-a-family-of-indeterminates", "thm-universal-property-of-a-polynomial-ring-on-a-family", "thm-universal-property-of-localisation", "thm-quotient-ring-universal-property", "thm-coproduct-property-of-tensor-products-of-commutative-algebras", "thm-tensor-product-of-algebras-over-a-commutative-ring", "def-multiplicative-subset-and-localisation"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-27
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Stacks Algebra 10.137.5–6"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
---

## Statement

Let $R\to R'$ be a homomorphism of commutative rings and let $R\to S$ be an
$R$-algebra carrying a standard smooth presentation
([[def-ag-standard-smooth-algebra]]) of relative dimension $n-c$, with
$S\cong\bigl(R[x_1,\dots,x_n]/(f_1,\dots,f_c)\bigr)_g$ and with the leading
$c\times c$ Jacobian minor
$$h=\det\Bigl(\frac{\partial f_j}{\partial x_i}\Bigr)_{1\le i,j\le c}$$
(in the sense of [[lem-ag-polynomial-quotient-differentials]]) mapping to a unit
of $S$; the conventions of the definition allow the invertible minor to be
assumed in the first $c$ columns. Let $f'_j,g',h'$ be the images of $f_j,g,h$
under the induced map $R[x_1,\dots,x_n]\to R'[x_1,\dots,x_n]$ and put
$$S'=\bigl(R'[x_1,\dots,x_n]/(f'_1,\dots,f'_c)\bigr)_{g'}.$$
Then:

1. there is a unique $R'$-algebra isomorphism
   $\Phi\colon R'\otimes_RS\to S'$ with $\Phi\bigl(a\otimes\overline F/g^N\bigr)=a\overline{F'}\big/(g')^N$,
   where $\overline F$ is the image of $F\in R[x_1,\dots,x_n]$ in $S$ and
   $\overline{F'}$ its image in $S'$;
2. $S'$ is standard smooth over $R'$ with the same $n$, $c$ and relative
   dimension $n-c$; explicitly, the image $h'$ of $h$ is a unit of $S'$.

No hypothesis is placed on $R\to R'$, and the relative dimension is unchanged.

## Facts & Assumptions

**Given:** A ring homomorphism $R\to R'$ and a standard smooth presentation
$S\cong(R[x_1,\dots,x_n]/(f_1,\dots,f_c))_g$ over $R$ whose leading $c\times c$
minor $h$ maps to a unit in $S$.

[F1] [[def-ag-standard-smooth-algebra]]: a standard smooth presentation consists of integers $n\ge c\ge0$, elements $f_1,\dots,f_c\in R[x_1,\dots,x_n]$ and $g\in R[x_1,\dots,x_n]$ with $S\cong(R[x_1,\dots,x_n]/(f_1,\dots,f_c))_g$, such that the Jacobian matrix $(\partial f_j/\partial x_i)$ has a $c\times c$ minor whose image in $S$ is a unit; $n-c$ is the relative dimension, and the invertible minor may be assumed to lie in the first $c$ columns.

[F2] [[def-polynomial-ring-on-a-family-of-indeterminates]]: $R[x_1,\dots,x_n]$ is the commutative $R$-algebra of polynomials in the indeterminates $x_1,\dots,x_n$, generated as an $R$-algebra by them.

[F3] [[thm-universal-property-of-a-polynomial-ring-on-a-family]]: for a ring homomorphism $\varphi\colon R\to T$ and any family $(t_i)_{i\in I}$ in $T$ there is a unique ring homomorphism $R[x_i:i\in I]\to T$ restricting to $\varphi$ on $R$ with $x_i\mapsto t_i$.

[F4] [[thm-universal-property-of-localisation]]: if $f\colon R\to A$ is a unital homomorphism of commutative rings carrying a multiplicative set $T$ into the units of $A$, there is a unique unital ring homomorphism $\widetilde f\colon T^{-1}R\to A$ with $\widetilde f\circ\lambda_T=f$, namely $\widetilde f(r/t)=f(r)f(t)^{-1}$.

[F5] [[thm-quotient-ring-universal-property]]: a ring homomorphism whose kernel contains a two-sided ideal $I$ factors uniquely through the quotient $R\to R/I$.

[F6] [[thm-coproduct-property-of-tensor-products-of-commutative-algebras]]: for commutative $R$-algebras $A,B,C$ and $R$-algebra homomorphisms $f\colon A\to C$, $g\colon B\to C$ there is a unique $R$-algebra homomorphism $h\colon A\otimes_RB\to C$ with $h(a\otimes1)=f(a)$ and $h(1\otimes b)=g(b)$, namely $h(a\otimes b)=f(a)g(b)$.

[F7] [[thm-tensor-product-of-algebras-over-a-commutative-ring]]: $A\otimes_RB$ is a commutative $R$-algebra with $(a\otimes b)(a'\otimes b')=aa'\otimes bb'$ and unit $1\otimes1$; in particular $a\mapsto a\otimes1$ and $b\mapsto1\otimes b$ are ring homomorphisms.

[F8] [[def-multiplicative-subset-and-localisation]]: the localisation $T^{-1}R$ of a commutative ring at a multiplicative subset $T$ is a commutative ring, $\lambda_T\colon R\to T^{-1}R$, $r\mapsto r/1$, is a ring homomorphism and each $t\in T$ maps to a unit.

[F9] [[lem-ag-polynomial-quotient-differentials]]: $\Omega_{P/A}$ is free on $\mathrm dx_1,\dots,\mathrm dx_n$ for $P=A[x_1,\dots,x_n]$, the partial derivatives $\partial_i$ are computed on the monomial basis by $\partial_i(x^a)=a_ix^{a-e_i}$ and extended $A$-linearly, $\mathrm df=\sum_i\partial_if\,\mathrm dx_i$, and for $I=(f_1,\dots,f_c)$ the module $\Omega_{P/I/A}$ is the cokernel of the Jacobian matrix $(\partial_if_j)$.

## Proof

1.1 Notation. Put $P:=R[x_1,\dots,x_n]$, $I:=(f_1,\dots,f_c)\subseteq P$, $A:=P/I$, so that $S=A_g$; put $P':=R'[x_1,\dots,x_n]$, $I':=(f'_1,\dots,f'_c)\subseteq P'$ and $S':=(P'/I')_{g'}$. All four are commutative rings by [F2] and [F8], and the coefficient-change map $P\to P'$, $x_i\mapsto x_i$, is a ring homomorphism by [F3] applied to $R\to R'$. [F1, F2, F3, F8]

2.1 The map $\psi\colon S\to S'$. The composite $P\to P'\to P'/I'\to S'$ kills $I$ and carries $g$ to $g'$, which is a unit of $S'$ by [F8]; by [F5] it factors uniquely through $P/I=A$, and by [F4] the resulting map $A\to S'$ factors uniquely through $A_g=S$. This gives a unique ring homomorphism $\psi\colon S\to S'$ with $\psi(\overline F/g^N)=\overline{F'}/(g')^N$ for $F\in P$, $N\ge0$. [F4, F5, step 1.1, F8]

2.2 The map $\tau\colon S'\to R'\otimes_RS$. By [F7] the assignment $a\mapsto a\otimes1$ is a ring homomorphism $R'\to R'\otimes_RS$, and $1\otimes\overline{x_i}\in R'\otimes_RS$ are elements; by [F3] there is a unique ring homomorphism $P'=R'[x_1,\dots,x_n]\to R'\otimes_RS$ restricting to $a\mapsto a\otimes1$ and sending $x_i\mapsto1\otimes\overline{x_i}$. Its kernel contains $I'$, because $f'_j\mapsto1\otimes\overline{f_j}=0$, and it sends $g'$ to $1\otimes\overline g$, which is a unit with inverse $1\otimes\overline g^{-1}$ in view of [F7] and $g\cdot g^{-1}$ invertible in $S$. Applying [F5] and then [F4] gives a unique ring homomorphism $\tau\colon S'=(P'/I')_{g'}\to R'\otimes_RS$ over $R'$. [F3, F4, F5, F7, step 1.1]

3.1 The map $\Phi\colon R'\otimes_RS\to S'$. The identity map of $R'$ and the map $\psi\colon S\to S'$ of step 2.1 are $R$-algebra maps into $S'$ that agree on $R$; the latter is induced by the coefficient-change map $R\to R'$. Hence [F6] provides a unique $R'$-algebra homomorphism $\Phi\colon R'\otimes_RS\to S'$ with $\Phi(a\otimes1)=a$ and $\Phi(1\otimes y)=\psi(y)$, that is, $\Phi(a\otimes y)=a\,\psi(y)$; on the elements $a\otimes\overline F/g^N$ it is $\Phi\bigl(a\otimes\overline F/g^N\bigr)=a\,\overline{F'}/(g')^N$. [F6, step 2.1, step 2.2]

4.1 $\Phi\circ\tau=\mathrm{id}_{S'}$ and $\tau\circ\Phi=\mathrm{id}_{R'\otimes_RS}$. Both composites are $R'$-algebra homomorphisms. The $R'$-algebra $S'$ is generated by the images of the $x_i$ and by $(g')^{-1}$: every element of $(P'/I')_{g'}$ is a class $u/(g')^N$ with $u\in P'$, and $u$ is an $R'$-linear combination of monomials in the $x_i$. A ring homomorphism out of $S'$ is determined by its restriction to $R'$ and the images of the $x_i$, by [F3], [F5] and [F4] applied in that order, so $(\Phi\circ\tau)(x'_i)=x'_i$ and $(\Phi\circ\tau)((g')^{-1})=(g')^{-1}$ force $\Phi\circ\tau=\mathrm{id}_{S'}$. Similarly $R'\otimes_RS$ is generated as an $R'$-algebra by $1\otimes\overline{x_i}$ and $1\otimes\overline g^{-1}$, by [F7], and $\tau\circ\Phi$ fixes these elements: $\tau(\Phi(1\otimes\overline{x_i}))=\tau(x'_i)=1\otimes\overline{x_i}$ and $\tau(\Phi(1\otimes\overline g^{-1}))=\tau((g')^{-1})=1\otimes\overline g^{-1}$, the last because $\tau$ is a ring homomorphism sending $g'$ to $1\otimes\overline g$. Hence $\tau\circ\Phi=\mathrm{id}$ as well, and $\Phi$ is an isomorphism with inverse $\tau$. [F3, F4, F5, F7, step 2.1, step 2.2, step 3.1]

5.1 The minor maps to a unit of $S'$. The element $h\in P$ maps to a unit of $S$ by hypothesis, hence $1\otimes h\in R'\otimes_RS$ is a unit with inverse $1\otimes h^{-1}$ by [F7], and $\Phi$ carries it to $(1\otimes h)$'s image, namely $h'=\Phi(1\otimes h)$; as a ring isomorphism $\Phi$ carries units to units, so $h'$ is a unit of $S'$. [F7, step 3.1, step 4.1]

6.1 The Jacobian of the changed polynomials. By the monomial formula of [F9] the partial derivative $\partial_i$ is linear over the coefficient ring, so $\partial_i(f'_j)$ is the image of $\partial_i(f_j)$ under $P\to P'$ for all $i,j$; hence $h'=\det(\partial_i f'_j)_{1\le i,j\le c}$ is the leading $c\times c$ minor of the Jacobian matrix of $f'_1,\dots,f'_c$. By step 5.1 its image in $S'$ is a unit, so $S'\cong(R'[x_1,\dots,x_n]/(f'_1,\dots,f'_c))_{g'}$ is a standard smooth presentation over $R'$ of relative dimension $n-c$, the same parameters as the given presentation. With step 4.1 this proves both assertions. [F1, F9, step 4.1, step 5.1, algebra] ∎
