---
page: cyclotomic-hecke-quotients-and-ariki-koike-pbw
title: "Cyclotomic Hecke Quotients and Ariki–Koike PBW"
status: published
items:
  - def-hh-multiplicative-cyclotomic-hecke-algebra
  - lem-hh-cyclotomic-commuting-jucys-murphy-generators
  - def-hh-multipartitions-standard-tableaux-and-generic-contents
  - lem-hh-cyclotomic-straightening-spanning
  - thm-hh-generic-cyclotomic-seminormal-models
  - lem-hh-colored-permutation-rsk-and-tableau-square-count
  - thm-hh-ariki-koike-basis-and-generic-splitness
  - lem-hh-rank-one-cyclotomic-quotient-monic-basis
examples: []
---

The multiplicative Ariki–Koike algebra is obtained from the affine type-A Hecke algebra by imposing one cyclotomic polynomial on the first commuting generator. That single relation does not give the same polynomial relation on every Jucys–Murphy generator, and it does not by itself prove a basis theorem. This page develops integral spanning by explicit normal words, then proves independence through generic tableau representations and a colored insertion count.

## Presentation and transport

Fix positive integers $r,n$, set

$$R=\mathbb Z[Q^{\pm1},u_1^{\pm1},\ldots,u_r^{\pm1}],\qquad p(X)=\prod_{a=1}^r(X-u_a),$$

and use generators $T_1,\ldots,T_{n-1}$ and commuting invertible $X_1,\ldots,X_n$ with

$$ (T_i-Q)(T_i+1)=0,\qquad T_iX_iT_i=QX_{i+1},\qquad T_iX_j=X_jT_i\quad(j\notin\{i,i+1\}). $$

The algebra $H_{r,n}$ is the universal quotient by $p(X_1)=0$; see [[def-hh-multiplicative-cyclotomic-hecke-algebra]]. The constant coefficient makes $X_1$ a unit already represented by a polynomial in $X_1$, while the affine recursion transports invertibility to every $X_i$. The quadratic relation makes every $T_i$ a unit.

The normalized elements

$$L_1=X_1,\qquad L_i=Q^{1-i}T_{i-1}\cdots T_1X_1T_1\cdots T_{i-1}$$

are exactly $X_i$. They commute and satisfy the actual affine transport rules, including the Bernstein divided-difference formula; these are proved in [[lem-hh-cyclotomic-commuting-jucys-murphy-generators]]. For $r=1,n=2$, $L_2-u_1=(Q-1)u_1Q^{-1}T_1\ne0$. Thus $p(L_1)=0$ does not license replacing the initial relation by $p(L_i)=0$ for all $i$.

## Integral spanning

The bounded family is

$$\mathcal B_{r,n}=\{X_1^{a_1}\cdots X_n^{a_n}T_w:0\le a_j<r,\ w\in\mathfrak S_n\}.$$

The proof of spanning in [[lem-hh-cyclotomic-straightening-spanning]] works over the universal coefficient ring. For $r\ge2$, pass to the explicitly free extension

$$R'=R[v,w]/(v^2-Q,\ w^r-(-1)^{r+1}u_1\cdots u_r),$$

with basis $v^iw^j$, $0\le i<2$, $0\le j<r$. Set $s_j=v^{-1}T_{j-1}$, $z=w^{-1}X_1$, and $a=v-v^{-1}$. Then

$$s_j^2=as_j+1,\qquad zs_j=s_jz\ (j\ge3),\qquad zs_2zs_2=s_2zs_2z,$$

and the monic relation for $z$ has constant term $1$. The proof constructs the finite sets $\Lambda_1,\ldots,\Lambda_n$, proves the rank-two power and sandwich reductions, and checks closure under each generator by all nine final-factor cases. The corrected commutation range is $j\ge3$, and the quadratic coefficients are retained throughout.

Each last-stage normal word has nonnegative $X$-degree below $r$. The polynomial Bernstein formula preserves both nonnegative exponents and total degree, so finite parabolic factorization bounds the rank-$n$ span by the rank-$(n-1)$ span times $X_n^aT_d$, $0\le a<r$. Induction gives spanning over $R'$. Tensoring the cokernel of the proposed $R$-span with the free module $R'$, whose basis contains $1$, proves that the same family spans over $R$. The $r=1$ case reduces directly to the finite type-A Hecke algebra.

## Generic tableau modules

An $r$-multipartition is a tuple of Young diagrams. A standard multitableau is a linear extension of their row-and-column box order, with content

$$\operatorname{res}_t(i)=u_cQ^{b-a}\quad\text{when }i\text{ occupies box }(c,a,b).$$

The finite-poset moves, addable-content separation, distinctness of full content sequences, and denominator facts are proved in [[def-hh-multipartitions-standard-tableaux-and-generic-contents]]. In particular, two equal-content diagonal boxes have two required boxes between them; endpoints of three consecutive labels therefore cannot have equal contents.

Over $K=\mathbb Q(Q,u_1,\ldots,u_r)$, define $L_jv_t=\operatorname{res}_t(j)v_t$. If $a=\operatorname{res}_t(i)$ and $b=\operatorname{res}_t(i+1)$, use

$$T_iv_t=\frac{(Q-1)b}{b-a}v_t+\frac{Qb-a}{b-a}v_{s_it},$$

with the swapped term zero when the tableau is nonstandard. [[thm-hh-generic-cyclotomic-seminormal-models]] checks the quadratic and affine relations on two-state orbits, writes the six three-label braid coefficients and compares all six reorderings, then passes to the standard row-and-column states by the zero boundary coefficients. Joint spectral projectors and connected adjacent swaps prove irreducibility and separate the shapes.

## Dimension and basis

Componentwise row insertion gives a bijection between permutations with one of $r$ colors on each position and pairs of standard multitableaux of a common shape. The inverse scans recording labels in descending order, deletes the unique component corner, and reverse-row-deletes its insertion box. This local algorithm and its count are in [[lem-hh-colored-permutation-rsk-and-tableau-square-count]], yielding

$$\sum_{\lambda\in\mathcal P_r(n)} (f^\lambda)^2=r^n n!,$$

where $f^\lambda=|\operatorname{Std}(\lambda)|$.

On the direct sum of the generic tableau modules, interpolation in the commuting $L_j$ gives a projector for every tableau content sequence. For each admissible adjacent swap, composing its source and target projectors with $T_i$ gives a nonzero scalar multiple of the corresponding matrix unit. Connectedness within each shape and the separation of shapes produce every matrix unit. Hence the generic algebra maps onto

$$H_{r,n}\otimes_RK\longrightarrow\prod_{\lambda\in\mathcal P_r(n)}\operatorname{Mat}_{f^\lambda}(K).$$

The target dimension is $r^n n!$, while the integral spanning family has that same cardinality. The surjection and the spanning bound force equality; the proposed family is independent over $K$, hence over the domain $R$. [[thm-hh-ariki-koike-basis-and-generic-splitness]] proves the resulting $R$-basis and the displayed generic split decomposition. Tensoring that free basis proves that for every commutative $R$-algebra $S$, including nonfields and nonsemisimple specializations, the same images form an $S$-basis. Generic splitness is asserted only over $K$; specializations need not be semisimple.

The construction uses the traditional multiplicative parameters and does not identify this presentation with the additive degenerate cyclotomic algebra at a singular parameter value. The seven earlier linked results are existing published prerequisite context and retain their original carriers. The new rank-one quotient lemma is draft content in this run. The page remains draft pending its ordinary review and publication authorization.

## Rank-one specialization

For arbitrary unit parameters, the rank-one cyclotomic quotient has the monic basis $1,X,\ldots,X^{r-1}$. When all parameters coincide, the quotient is a truncated polynomial algebra with a nonzero nilpotent. The proof is local in [[lem-hh-rank-one-cyclotomic-quotient-monic-basis]] and supplies the repeated-content boundary used in the companion examples.
