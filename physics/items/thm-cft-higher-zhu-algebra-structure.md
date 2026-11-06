---
id: thm-cft-higher-zhu-algebra-structure
kind: theorem
title: Associative structure of the higher Zhu quotients
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
deps:
  - lem-cft-locality-to-jacobi-residue-calculus
  - def-cft-higher-zhu-algebra
  - def-conformal-vertex-algebra
  - def-vertex-algebra-state-field
dependency_roles:
  lem-cft-locality-to-jacobi-residue-calculus: mathematical-premise
  def-cft-higher-zhu-algebra: mathematical-premise
  def-conformal-vertex-algebra: mathematical-premise
  def-vertex-algebra-state-field: mathematical-premise
domain: mathematics
library: mathematics
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Chongying Dong, Haisheng Li, and Geoffrey Mason, Vertex operator algebras and associative algebras"
      url: "https://arxiv.org/pdf/q-alg/9612010"
      locator: "§2, Lemmas 2.1–2.2 and Theorem 2.3; the associative product, unit and ideal calculation."
    - title: "Chongying Dong and Cuipo Jiang, Rationality of Vertex Operator Algebras"
      url: "https://arxiv.org/pdf/math/0607679v1"
      locator: "§2, higher Zhu quotient and admissible-module conventions."
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

For each integer $n\geq0$, let $O_n(V)$ and $*_n$ be as in the higher Zhu definition. Then $O_n(V)$ is a two-sided ideal for $*_n$, and $*_n$ descends to an associative unital product on $A_n(V)=V/O_n(V)$ with unit $[\mathbf1]$. No finite-dimensionality of $A_n(V)$ is asserted.

## Statement references

[[def-cft-higher-zhu-algebra]]

## Facts & Assumptions

**Given:** The CFT-type conformal vertex algebra $V$ and the arbitrary integer $n\ge0$ in the Statement. Write $T=L(-1)$, $D=T+L(0)$ and $O=O_n(V)$. All congruences below are additive congruences in the vector space $V/O$; neither ideal stability nor associativity is assumed when manipulating them. Set
$$a_p=(-1)^p\binom{n+p}{n}\quad(0\le p\le n),\qquad P_n(z)=\sum_{p=0}^na_pz^{-n-p-1},\qquad K_n=(2n+1)a_n\ne0.$$

[F1] [[def-cft-higher-zhu-algebra]] defines the finite circle and star residues, with $D(V)$ included in $O$. For a homogeneous state $u\in V_r$, write $f_r(z)=(1+z)^{r+n}P_n(z)$, so $u*_n v=\operatorname{Res}_z f_r(z)Y(u,z)v$.

[F2] [[def-conformal-vertex-algebra]] supplies the nonnegative integer weights and $T=L(-1)$. [[def-vertex-algebra-state-field]] gives vectorwise truncation, vacuum/creation and translation covariance.

[F3] [[lem-cft-locality-to-jacobi-residue-calculus]] proves the actual regular-module Jacobi identity, $Y(Tu,z)=\partial_zY(u,z)$, and $\operatorname{wt}(u_{(j)}v)=r+s-j-1$. Its Laurent-polynomial residue identity, used on $V$, is
$$\operatorname{Res}_y\operatorname{Res}_t t^mP(y+t,y)Y(Y(u,t)v,y)w=\operatorname{Res}_y\operatorname{Res}_xP(x,y)\left(\iota_{x,y}(x-y)^mY(u,x)Y(v,y)-\iota_{y,x}(x-y)^mY(v,y)Y(u,x)\right)w.$$
Here $P$ is a Laurent polynomial and $m$ is any integer; the two $\iota$ symbols mean the indicated binomial expansions. This is a proved local supplier, not an invocation of the higher-Zhu algebra theorem.

## Proof

1.1 For homogeneous $u\in V_r$ and arbitrary $v\in V$ define
$$R_{m,k}(u,v)=\operatorname{Res}_z\frac{(1+z)^{r+n+k}}{z^{2n+2+m}}Y(u,z)v\quad(m\ge k\ge0).$$
Every such vector lies in the span of circle generators, without using any ideal property. Indeed $R_{0,0}=u\circ_n v$. Integration by parts and [F3] give
$$R_{m,0}(Tu,v)=(2n+m+2)R_{m+1,0}(u,v)+(n+m+1-r)R_{m,0}(u,v).$$
If $Tu=0$, the same equality holds with left side zero. Induction on $m$, simultaneously for all homogeneous first inputs, therefore gives $R_{m,0}\in O$, since $2n+m+2$ is nonzero. Expanding the extra factor $(1+z)^k$ then gives $R_{m,k}=\sum_{i=0}^k\binom kiR_{m-i,0}$, with every $m-i\ge0$. All these residues are finite sums by truncation and the nonnegative exponents. [given, F1, F2, F3, algebra]

1.2 Two exact identities will later convert this residue information into both ideal properties. For homogeneous $u\in V_r$,
$$(Du)*_n v=K_n(u\circ_n v),\qquad D(u*_n v)=(Du)*_n v+u*_n(Dv).$$
For the first, integrate $Y(Tu,z)=\partial_zY(u,z)$ against $(1+z)^{r+n+1}P_n(z)$ and add $r(u*_n v)$. The result is
$$\operatorname{Res}_z(1+z)^{r+n}Y(u,z)v\sum_{p=0}^na_p\left((n+p+1)z^{-n-p-2}+p z^{-n-p-1}\right).$$
For $1\le p\le n$, $pa_p=-(n+p)a_{p-1}$; all adjacent coefficients cancel and the sum is exactly $K_nz^{-2n-2}$. This proves the first identity. For the second let $v\in V_s$, use $T(Y(u,z)v)=\partial_zY(u,z)v+Y(u,z)Tv$ and $L(0)Y(u,z)v=(r+s+z\partial_z)Y(u,z)v$, the latter being the weight rule of [F3]. Integration by parts gives
$$D(u*_n v)=u*_n Tv+\operatorname{Res}_z\left((r+s-1)f_r(z)-(1+z)f'_r(z)\right)Y(u,z)v.$$
On the other hand $f_{r+1}=(1+z)f_r$ shows that $(Du)*_n v$ is the same residue with $r+s-1$ replaced by $r-1$; adding $u*_n(Dv)=u*_n Tv+s(u*_n v)$ proves the identity. Linearity extends both formulas to arbitrary inputs, with the circle operation extended linearly in its first input. [F1, F2, F3, algebra]

2.1 We prove the associator belongs to $O$ before using any product of congruence classes. Let $u\in V_r$, $v\in V_s$ and $w\in V$ be homogeneous. Expanding the two star products and using the actual weight of each $u_{(i-n-p-1)}v$ gives the exact expression
$$(u*_n v)*_n w=\sum_{p,q=0}^na_pa_q\operatorname{Res}_y\operatorname{Res}_t\frac{(1+y+t)^{r+n}(1+y)^{s+n+p}}{t^{n+p+1}y^{n+q+1}}Y(Y(u,t)v,y)w.$$
Apply [F3] with $m=-n-p-1$ and $P(x,y)=(1+x)^{r+n}(1+y)^{s+n+p}y^{-n-q-1}$. The forward expansion uses
$$\iota_{x,y}(x-y)^{-n-p-1}=\sum_{j\ge0}\binom{n+p+j}{j}x^{-n-p-j-1}y^j,$$
and the reversed expansion uses
$$\iota_{y,x}(x-y)^{-n-p-1}=(-1)^{n+p+1}\sum_{j\ge0}\binom{n+p+j}{j}x^j y^{-n-p-j-1}.$$
Every reversed-product residue lies in $O$: after extracting the $x$ residue its outer $v$-residue has numerator $(1+y)^{s+n+p}$ and denominator $y^{2n+2+p+q+j}$, so it is $R_{p+q+j,p}(v,F_j)$, where $F_j=\operatorname{Res}_x(1+x)^{r+n}x^jY(u,x)w$. Here $p+q+j\ge p$. Every forward residue with $j>n-p$ also lies in $O$: after extracting its $y$ residue its outer $u$-residue is $R_{p+j-n-1,0}(u,E_j)$, where $E_j=\operatorname{Res}_y(1+y)^{s+n+p}y^{-n-q-1+j}Y(v,y)w$. Both conclusions use only step 1.1. All $j$ sums are actually finite on the fixed $w$: the finite polynomial numerators make $F_j$ and $E_j$ sums of modes whose indices tend to $+\infty$ with $j$, so truncation kills them for large $j$. Thus the additive congruence left after discarding these residues is
$$(u*_n v)*_n w\equiv\sum_{p,q=0}^n\sum_{j=0}^{n-p}a_pa_q\binom{n+p+j}{j}\operatorname{Res}_x\operatorname{Res}_y\frac{(1+x)^{r+n}(1+y)^{s+n}(1+y)^p y^j}{x^{n+p+j+1}y^{n+q+1}}Y(u,x)Y(v,y)w\pmod O.$$
No ideal assertion was used in discarding any term. [F1, F3, step 1.1, algebra]

3.1 The finite kernel in step 2.1 equals the kernel of $u*_n(v*_n w)$. Explicitly, as a Laurent polynomial in $x$ with coefficients in $\mathbb C[y]$,
$$\sum_{p=0}^na_p(1+y)^p\sum_{j=0}^{n-p}\binom{n+p+j}{j}y^j x^{-p-j}=\sum_{h=0}^na_hx^{-h}.$$
For a fixed $0\le h\le n$, its left $x^{-h}$ coefficient is
$$\sum_{p=0}^h(-1)^p\binom{n+p}{n}\binom{n+h}{h-p}(1+y)^p y^{h-p}=\binom{n+h}{n}\sum_{p=0}^h(-1)^p\binom hp(1+y)^p y^{h-p}.$$
The factorial identity giving this equality is valid at every displayed index. The binomial theorem makes the final sum $(y-(1+y))^h=(-1)^h$, so the coefficient is exactly $a_h$. Substitution in step 2.1 proves $(u*_n v)*_n w-u*_n(v*_n w)\in O$. Bilinearity extends this independently proved associator congruence to arbitrary triples. [algebra, step 2.1]

4.1 Right ideal stability now follows without multiplying a prior congruence by an arbitrary state. The generators $Du$ satisfy $(Du)*_n w=K_n(u\circ_n w)\in O$ by step 1.2. The other generators satisfy
$$(u\circ_n v)*_n w=K_n^{-1}((Du)*_n v)*_n w\equiv K_n^{-1}(Du)*_n(v*_n w)=u\circ_n(v*_n w)\in O,$$
where the only congruence is the associator of step 3.1 applied to the actual states $Du,v,w$. Hence $O*_n V\subset O$. The exact derivation formula of step 1.2 next gives $u*_n(Dv)=D(u*_n v)-(Du)*_n v\in O$. Finally
$$u*_n(v\circ_n w)=K_n^{-1}u*_n((Dv)*_n w)\equiv K_n^{-1}(u*_n Dv)*_n w\in O.$$
The last inclusion uses the already proved right ideal stability on the actual element $u*_n Dv\in O$. These statements establish $V*_n O\subset O$ as well. This order avoids circular use of left and right ideal properties. [F1, step 1.2, step 3.1, algebra]

5.1 The vacuum is a two-sided identity modulo $O$. On the left, $Y(\mathbf1,z)=I$ and $\operatorname{wt}\mathbf1=0$ give
$$\mathbf1*_n u=\sum_{p=0}^na_p\operatorname{Res}_z(1+z)^nz^{-n-p-1}u=u,$$
since the polynomial $(1+z)^n$ has no coefficient in degree $n+p$ for $p>0$, and its degree-$n$ coefficient is $1$. For the right identity let $u\in V_r$. The relations $D(T^{k-1}u)\in O$ give, by induction,
$$T^ku\equiv(-1)^k r(r+1)\cdots(r+k-1)u\pmod O\quad(k\ge1).$$
Thus coefficientwise $e^{zT}u\equiv(1+z)^{-r}u$ modulo $O$. Only finitely many creation coefficients enter any of the star residues, so substitution into $u*_n\mathbf1$ is an ordinary finite linear congruence. It gives the same scalar residue as on the left, hence $u*_n\mathbf1\equiv u$. Step 4.1 makes the quotient product independent of both representatives; step 3.1 then gives associativity and the two vacuum identities give unit $[\mathbf1]$. All calculations hold also for $n=0$ and weight $r=0$. No dimension assertion or representation-theoretic classification is used. [F1, F2, F3, step 3.1, step 4.1, algebra] ∎
