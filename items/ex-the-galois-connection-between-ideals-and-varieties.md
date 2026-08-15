---
id: ex-the-galois-connection-between-ideals-and-varieties
kind: example
title: 'Vanishing sets and vanishing ideals form a contravariant Galois connection'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-mutually-left-and-mutually-right-adjoint-contravariant-functors, def-multivariate-polynomial-ring-by-iteration, def-polynomial-evaluation-and-root, thm-universal-property-of-a-polynomial-ring, def-left-right-and-two-sided-ideal, lem-ideal-criterion-and-intersections]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Example 4.4.2'
      url: 'https://emilyriehl.github.io/files/context.pdf'
pipeline_run: null
---

## Example

Let $k$ be a field and $A=k[x_1,\ldots,x_n]$. For $S\subseteq A$ and $X\subseteq k^n$, define

$$V(S):=\{a\in k^n:f(a)=0\text{ for every }f\in S\},$$

$$I(X):=\{f\in A:f(a)=0\text{ for every }a\in X\}.$$

Then $V$ and $I$ reverse inclusion and satisfy

$$X\subseteq V(S)\quad\Longleftrightarrow\quad S\subseteq I(X).$$

They therefore form a contravariant Galois connection. Moreover $VIV=V$ and $IVI=I$.

## Facts & Assumptions

**Given:** A field $k$, a natural number $n$, a subset $S\subseteq k[x_1,\ldots,x_n]$, and a subset $X\subseteq k^n$.

[F1] Multivariate polynomial rings are defined recursively by $R[x_1,\ldots,x_0]=R$ and $R[x_1,\ldots,x_{n+1}]=R[x_1,\ldots,x_n][x_{n+1}]$, with commuting indeterminates ([[def-multivariate-polynomial-ring-by-iteration]]).

[F2] For $f=\sum_i a_ix^i$ and a unital homomorphism $\varphi:R\to S$, evaluation is $f_\varphi(s)=\sum_i\varphi(a_i)s^i$, and a root is an $s$ at which this value is zero ([[def-polynomial-evaluation-and-root]]).

[F3] For commutative rings $R,S$, a unital ring homomorphism $\varphi\colon R\to S$, and $s\in S$, there is a unique unital ring homomorphism $\operatorname{ev}_{\varphi,s}\colon R[x]\to S$ extending $\varphi$ on constant polynomials and sending $x$ to $s$ ([[thm-universal-property-of-a-polynomial-ring]]).

[F4] In a commutative ring, an ideal is an additive subgroup closed under multiplication by arbitrary ring elements ([[def-left-right-and-two-sided-ideal]]).

[F5] A nonempty subset is an ideal exactly when it is closed under differences and multiplication by ring elements ([[lem-ideal-criterion-and-intersections]]).

[F6] Mutually left and right adjoint contravariant functors are characterized by a natural correspondence of arrows with both variances reversed ([[def-mutually-left-and-mutually-right-adjoint-contravariant-functors]]).

## Verification

**Proof technique:** direct.

1.1 *Simultaneous evaluation.* For $a=(a_1,\ldots,a_n)\in k^n$ define $\operatorname{ev}_a\colon A\to k$ by induction on $n$. For $n=0$, [F1] gives $A=k$ and $\operatorname{ev}_a=1_k$. For the step, [F1] gives $k[x_1,\ldots,x_n]=k[x_1,\ldots,x_{n-1}][x_n]$, so [F3] applied with $\varphi=\operatorname{ev}_{(a_1,\ldots,a_{n-1})}$ and $s=a_n$ yields a unital ring homomorphism $\operatorname{ev}_a\colon A\to k$ fixing $k$ and sending each $x_i$ to $a_i$; on a single indeterminate its formula is that of [F2]. Write $f(a):=\operatorname{ev}_a(f)$. Being a ring homomorphism, $\operatorname{ev}_a$ satisfies $(f-g)(a)=f(a)-g(a)$ and $(rf)(a)=r(a)f(a)$. [F1, F2, F3, induction, construct]

2.1 The zero polynomial lies in $I(X)$. If $f,g\in I(X)$ and $r\in A$, then step 1.1 gives $(f-g)(a)=0-0=0$ and $(rf)(a)=r(a)\cdot0=0$ for every $a\in X$, so [F5] makes $I(X)$ an ideal. [step 1.1, F4, F5, algebra]

2.2 If $S\subseteq T$, every common zero of $T$ is a common zero of $S$, so $V(T)\subseteq V(S)$. If $X\subseteq Y$, every polynomial vanishing on $Y$ vanishes on $X$, so $I(Y)\subseteq I(X)$. [step 1.1, given]

2.3 By the two displayed definitions, $X\subseteq V(S)$ means exactly that $f(a)=0$ for every $a\in X$ and $f\in S$, which means exactly that $S\subseteq I(X)$. [step 1.1, given]

3.1 Regard subsets and ideals as inclusion preorders. Steps 2.2 and 2.3 give the contravariant arrow correspondence required by [F6], hence $V$ and $I$ form the claimed Galois connection. [step 2.2, step 2.3, F6]

3.2 Applying step 2.3 to $S$ and $V(S)$ gives $S\subseteq I(V(S))$, hence $V(I(V(S)))\subseteq V(S)$ by step 2.2; the reverse inclusion holds because every polynomial in $I(V(S))$ vanishes on $V(S)$. Thus $VIV=V$. [step 2.2, step 2.3]

4.1 Dually, $X\subseteq V(I(X))$ and inclusion reversal give $I(V(I(X)))\subseteq I(X)$, while the opposite inclusion follows from the definition of $V(I(X))$. Thus $IVI=I$. [step 2.2, step 2.3] ∎
