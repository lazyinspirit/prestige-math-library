---
dependency_level: 4
id: thm-maynard-variational-lower-bound-m105
kind: theorem
title: "Maynard's finite-dimensional lower bound $M_{105}>4$"
status: draft
origin: pipeline
deps: [def-maynard-variational-quantity-mk, lem-maynard-simplex-monomial-integrals, lem-maynard-symmetric-power-sum-simplex-moments, def-factorial-and-falling-factorial, thm-binomial-closed-formula]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "James Maynard, ‘Small gaps between primes’ (2015), §8.3, Proposition 4.3(2)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v181-n1-p07-p.pdf"
proof_strategy: direct
axiom_use: "The explicit polynomial and its finite rational Riemann-moment calculation add no choice principle. No numerical eigensolver output or external computation is a premise."
---

## Statement

For Maynard's simplex variational quantity $M_k$, one has $M_{105}>4$.


## Statement references

[[def-maynard-variational-quantity-mk|Maynard simplex functionals and $M_k$]]

[[lem-maynard-simplex-monomial-integrals|Exact simplex monomial moments]]


[[lem-maynard-symmetric-power-sum-simplex-moments|Exact rational polynomial and marginal formulas]]

## Certificate data

Put $s=1-\sum_{j=1}^{105}t_j$ and $q=\sum_{j=1}^{105}t_j^2$. The polynomial is
$$P(s,q)=\sum_{c=0}^{5}\sum_{b=0}^{11-2c}u_{bc}s^bq^c.$$
All forty-two coefficients are the following integers, in order of increasing $c$ and then increasing $b$. They are the actual coefficients, with no division by a power of ten or other normalization. Index these rows by $i=1,\ldots,42$, writing $(b_i,c_i,u_i)$ for a row.

| $b$ | $c$ | $u_{bc}$ |
| ---: | ---: | ---: |
| 0 | 0 | -1472088 |
| 1 | 0 | -777433817 |
| 2 | 0 | -8554653596 |
| 3 | 0 | -50104425335 |
| 4 | 0 | 24768459857261 |
| 5 | 0 | -64910929953030 |
| 6 | 0 | -3255770345507086 |
| 7 | 0 | 8663045902208709 |
| 8 | 0 | 66993464448309683 |
| 9 | 0 | 301511416262368889 |
| 10 | 0 | -3726520633866317910 |
| 11 | 0 | 6854925430294250502 |
| 0 | 1 | 354544343 |
| 1 | 1 | 180652801657 |
| 2 | 1 | 2577825584072 |
| 3 | 1 | -33577467488299 |
| 4 | 1 | -4691585680325845 |
| 5 | 1 | 22109122878002768 |
| 6 | 1 | 449338963151957926 |
| 7 | 1 | -1099448873720622961 |
| 8 | 1 | -14371998242955371941 |
| 9 | 1 | 43828270747730951443 |
| 0 | 2 | -34812907033 |
| 1 | 2 | -16887997109756 |
| 2 | 2 | -269916263147416 |
| 3 | 2 | 6958994044990780 |
| 4 | 2 | 302993020632866842 |
| 5 | 2 | -2086739360336100496 |
| 6 | 2 | -19519119670313688189 |
| 7 | 2 | 100000000000000000000 |
| 0 | 3 | 1762210114211 |
| 1 | 3 | 802054484974613 |
| 2 | 3 | 12077412867735733 |
| 3 | 3 | -436537616312405775 |
| 4 | 3 | -6891841113158235221 |
| 5 | 3 | 70033731413307733475 |
| 0 | 4 | -46465456458919 |
| 1 | 4 | -19613612087013384 |
| 2 | 4 | -200176920380066174 |
| 3 | 4 | 9245560855792946310 |
| 0 | 5 | 513413439728651 |
| 1 | 5 | 200783178360347691 |

## Facts & Assumptions

**Given:** The forty-two explicitly displayed integer coefficients and the standard simplex $R_{105}$.

[F1] [[def-maynard-variational-quantity-mk]]: $\mathcal F_k$ consists of the supported Riemann test functions with $I_k(F)>0$ and every $J_{k,i}(F)>0$, and $M_k$ is the supremum of $\sum_iJ_{k,i}(F)/I_k(F)$ on that class.

[F2] [[lem-maynard-symmetric-power-sum-simplex-moments]]: a finite polynomial in simplex slack and the sum of coordinate squares, zero-extended outside the simplex, belongs to $\mathcal R_k$. Its moments are $T_d(a,c)=a!G_c(d)/(d+a+2c)!$, and the one-coordinate marginal of $s^bq^c$ has terms
$$\binom cv\frac{b!\,(2c-2v)!}{(b+2c-2v+1)!}\,r^{b+2c-2v+1}(q')^v\quad(0\le v\le c).$$
All coordinate $J$ values agree for this symmetric polynomial.

[F3] [[def-factorial-and-falling-factorial]]: factorials are finite products of positive integers, with $0!=1$; in particular $128!>0$ and $128!/h!$ is an integer for $0\le h\le128$.

[F4] [[thm-binomial-closed-formula]]: $\binom ab=a!/(b!(a-b)!)$ for integers $0\le b\le a$, and this quotient is an integer.

[F5] [[lem-maynard-simplex-monomial-integrals]]: the Riemann simplex monomial moments, including zero exponents and dimension one, equal their displayed factorial ratios.

## Proof

1.1 Define $F(t)=P(s,q)$ on $R_{105}$ and $F(t)=0$ elsewhere. By [F2], its restriction to the unit cube is Riemann integrable, every coordinate section is integrable and every squared marginal is integrable. Thus $F\in\mathcal R_{105}$. The polynomial is symmetric in the coordinates, and [F2] gives one common value $J=J_{105,i}(F)$ for all $105$ indices. Write $I=I_{105}(F)$. Positivity of these integrals is checked below, rather than assumed. [given, F1, F2, construct]

1.2 The integers $G_a(d)$ in [F2] can be computed by the following finite recurrence, for $0\le a\le10$ and $d=104,105$. Start with $p^{(0)}_0=1$, $p^{(0)}_a=0$ for $a>0$, and put $p^{(n+1)}_a=\sum_{v=0}^a(2v)!p^{(n)}_{a-v}/v!$. Then $G_a(d)=a!p^{(d)}_a$. Indeed, $p^{(d)}_a$ is the coefficient of $z^a$ in $(\sum_{v=0}^{10}(2v)!z^v/v!)^d$. Expanding this finite power and grouping the nonzero coordinate exponents gives precisely the positive-composition formula for $G$ in [F2]. Terms of degree above ten cannot affect these coefficients. This also follows by expanding the monomial moments [F5]; every coefficient in the recurrence is an integer by the factorial product rule. [F2, F3, F4, F5, algebra]

2.1 Put $d_{ij}=105+b_i+b_j+2c_i+2c_j$ and $a_i(v)=b_i+2c_i-2v+1$. Define the following explicit integer matrices. [F2, F3, F4, F5, step 1.1, step 1.2, construct, algebra]
$$A_{ij}=\frac{128!}{d_{ij}!}(b_i+b_j)!G_{c_i+c_j}(105),$$
$$B_{ij}=\frac{128!}{(d_{ij}+1)!}\sum_{v=0}^{c_i}\sum_{w=0}^{c_j}\binom{c_i}{v}\binom{c_j}{w}b_i!b_j!(2c_i-2v)!(2c_j-2w)!\binom{a_i(v)+a_j(w)}{a_i(v)}G_{v+w}(104).$$
The degree condition gives $d_{ij}\le127$, so the prefactors are integers by [F3]. By the moment formula [F2], $128!I=\sum_{i,j=1}^{42}u_iu_jA_{ij}$. For the marginal square, apply [F2] to each pair of marginal monomials. Its factorial denominator is $(104+a_i(v)+a_j(w)+2v+2w)!=(d_{ij}+1)!$, while $(a_i(v)+a_j(w))!/(a_i(v)!a_j(w)!)$ is the binomial factor displayed above by [F4]. Therefore $128!J=\sum_{i,j=1}^{42}u_iu_jB_{ij}$. Here $J$ is one marginal integral, not their sum. These are finite closed sum formulas with the recurrence in step 1.2 supplying every $G$ value. [F2, F3, F4, F5, step 1.1, step 1.2, construct, algebra]

3.1 Substitution of the forty-two integer rows into the sums in step 2.1, using the finite recurrence in step 1.2, gives the following exact integer identities. [given, F3, step 1.1, step 1.2, step 2.1, algebra]
$$128!I=10737612433156391364676585235201215302403224187396580966400,\qquad 128!J=409259063331600756507052355091989158997173610848607600640.$$
$$128!(105J-4I)=21751917192513974534156343854000485090332389517474201600>0.$$
Each displayed value is an integer evaluation of the closed sums, not a floating approximation or an eigenvalue input. The two first values also give the third directly as $105(128!J)-4(128!I)$. [given, F3, step 1.1, step 1.2, step 2.1, algebra]

4.1 Since $128!>0$, step 3.1 proves $I>0$ and $105J-4I>0$. Hence $J>0$, and every $J_{105,i}(F)=J$ is positive by step 1.1. Thus $F\in\mathcal F_{105}$ by [F1], and [F1, F2, F3, step 1.1, step 3.1, algebra]
$$M_{105}\ge\frac{105J}{I}=4+\frac{105J-4I}{I}>4.$$
This proves the complete Statement using one explicit rational test function. [F1, F2, F3, step 1.1, step 3.1, algebra] ∎

## Source notes

The polynomial family and factorial moment method follow Maynard §8.3. The displayed vector is a local construction, not a claim to reproduce the paper's numerical eigenvector. Its proof is the written finite rational calculation above; numerical search output and an optimal eigenvalue are unnecessary. No external finite computation is imported. This result establishes the variational inequality only, and supplies neither a multidimensional prime-sieve asymptotic nor any prime-gap conclusion.
