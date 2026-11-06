---
id: lem-cft-locality-to-jacobi-residue-calculus
kind: lemma
title: Jacobi and residue calculus from the state-field locality axioms
status: published
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
dependency_level: 0
proof_strategy: direct
deps:
  - def-formal-distribution-on-a-vector-space
  - lem-state-field-reconstruction-from-local-generators
  - def-conformal-vertex-algebra
  - def-vertex-algebra-state-field
  - def-vertex-algebra-module
dependency_roles:
  def-formal-distribution-on-a-vector-space: mathematical-premise
  lem-state-field-reconstruction-from-local-generators: mathematical-premise
  def-conformal-vertex-algebra: mathematical-premise
  def-vertex-algebra-state-field: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
      locator: Sections 2.7–2.8, Definition 2.5, Theorem 2.4, Proposition 2.4, Theorem 2.6, and equation (2.43), printed pp. 52–58
---

## Statement

Let $V$ be a complex vector space with a nonzero vacuum $\mathbf1$, a state-field map $Y$, a translation operator $T$, and a conformal vector $\omega$. Assume the lower-truncation, vacuum/creation, translation-covariance, and locality axioms in the ordinary non-super state-field convention, with $L(-1)=T$. Assume also that $L(0)$ is diagonalizable and $V=\bigoplus_{r\ge0}V_r$, each $V_r$ is finite-dimensional, and $V_0=\mathbb C\mathbf1$. Then the fields on $V$ obey the ordinary module Jacobi identity, $Y(Ta,z)=\partial_zY(a,z)$, and homogeneous states satisfy the weight rule below.

For every left $V$-module $M$ with its lower-truncated action $Y_M$, all integers $m,n,p$, all $a,b\in V$, and all $v\in M$,
$$[a^M_{(m)},b^M_{(n)}]v=\sum_{j\ge0}\binom mj (a_{(j)}b)^M_{(m+n-j)}v,$$
$$(a_{(m)}b)^M_{(n)}v=\sum_{j\ge0}(-1)^j\binom mj\left(a^M_{(m-j)}b^M_{(n+j)}v-(-1)^m b^M_{(m+n-j)}a^M_{(j)}v\right).$$
The second sum is finite on each fixed $v$. If $a\in V_r$ and $b\in V_s$, then $a_{(p)}b\in V_{r+s-p-1}$ whenever it is nonzero.

For a Laurent polynomial $P(x,y)$, the equivalent residue identity is
$$\operatorname{Res}_y\operatorname{Res}_t t^mP(y+t,y)Y_M(Y(a,t)b,y)v=\operatorname{Res}_y\operatorname{Res}_xP(x,y)\left(\iota_{x,y}(x-y)^mY_M(a,x)Y_M(b,y)-\iota_{y,x}(x-y)^mY_M(b,y)Y_M(a,x)\right)v.$$
Here $\iota_{x,y}$ and $\iota_{y,x}$ are the two formal binomial expansions in the corresponding variable, and negative powers in $P(y+t,y)$ are expanded in nonnegative powers of $t/y$. All statements are formal coefficient identities; no analytic convergence is asserted.

## Statement references

[[def-conformal-vertex-algebra]]

[[def-vertex-algebra-state-field]]

[[def-vertex-algebra-module]]

[[lem-state-field-reconstruction-from-local-generators]]

[[def-formal-distribution-on-a-vector-space]]

## Facts & Assumptions

**Given:** The complex vector spaces, formal fields, vacuum, translation operator, conformal vector, and module action specified in the Statement. Residues and both binomial expansions use the ordinary formal-distribution convention.

[F1] [[def-vertex-algebra-state-field]]: a state-field map is lower-truncated, satisfies $Y(a,z)\mathbf1=e^{zT}a$, is translation-covariant, and has pairwise local fields.

[F2] [[def-conformal-vertex-algebra]]: $L(-1)=T$; $L(0)$ is diagonalizable with nonnegative integral weights, finite-dimensional weight spaces, and $V_0=\mathbb C\mathbf1$.

[F3] [[def-vertex-algebra-module]]: a left module is lower-truncated, has vacuum action, and satisfies the full module Jacobi identity.

[F4] [[lem-state-field-reconstruction-from-local-generators]]: mutually local, translation-covariant creative fields with the negative-mode spanning condition determine a unique vertex-algebra state-field map extending those fields.

[F5] [[def-formal-distribution-on-a-vector-space]]: field products use the two specified binomial expansions, and the $n$th product is the residue of their ordered difference.

## Proof

1.1 The family $\mathcal S=\{Y(a,z):a\in V\}$ is a family of fields with the properties in [F1]. The creation identity gives $a=Y(a,z)_{(-1)}\mathbf1$, so its negative modes span $V$; it also makes the state-field map injective, since equality of two fields gives equality of their constant terms on $\mathbf1$. Apply [F4] to this indexed family. The resulting state-field map agrees with $Y(a,z)$ on every state $a$, so it is exactly the original map. We derive Jacobi from the following local product and residue calculations. If $A,B$ are fields and $C=A_{(n)}B$ is their $n$th product from [F5], expansion gives
$$C_{(m)}v=\sum_{j\ge0}(-1)^j\binom nj\left(A_{(n-j)}B_{(m+j)}v-(-1)^nB_{(m+n-j)}A_{(j)}v\right).$$
For fixed $v$ both sums are finite by lower truncation. Moreover $C$ is a field: choose $J$ with $A_{(j)}v=0$ for $j\ge J$, choose $b$ with $B_{(q)}v=0$ for $q\ge b$, and for each $0\le j<J$ choose $b_j$ with $B_{(q)}A_{(j)}v=0$ for $q\ge b_j$. For all $m\ge b$ and $m\ge b_j-n+j$, every term vanishes. These are finitely many cutoffs; if $J=0$, the second family is empty. [given, F1, F4, F5, algebra]

2.1 Let $A(z),B(x),C(y)$ be pairwise local fields, and choose a common positive locality order $r$ with $r+n>0$. Put
$$D_n(x,y)=\iota_{x,y}(x-y)^nB(x)C(y)-\iota_{y,x}(x-y)^nC(y)B(x).$$
Use
$$(z-y)^{4r}=(z-y)^r\sum_{i=0}^{3r}\binom{3r}{i}(z-x)^i(x-y)^{3r-i}.$$
If $i\le r$, then $3r-i+n\ge r+1$, so the two expansions of $(x-y)^{3r-i+n}$ are the same polynomial and the corresponding summand vanishes by the locality of $B,C$. If $i>r$, the factors $(z-x)^i$ and $(z-y)^r$ permit $A$ to commute past $B$ and $C$, respectively, in either ordered product. Taking $\operatorname{Res}_x$ therefore proves $(z-y)^{4r}[A(z),(B_{(n)}C)(y)]=0$. Differentiating a locality identity and multiplying once more by its variable difference shows that derivatives of local fields remain local. Thus every derivative and every iterated $n$th product of state fields is local with each state field. [F1, F5, step 1.1, algebra]

2.2 Suppose $A,B$ are creative and translation-covariant with states $a,b$, so $A(x)\mathbf1=e^{xT}a$ and $B(y)\mathbf1=e^{yT}b$. Translation covariance gives $A(x)e^{yT}=e^{yT}A(x-y)$ by expanding $e^{-yT}A(x)e^{yT}$ in powers of $y$. In the reversed term defining $A_{(n)}B$, both $\iota_{y,x}(x-y)^n$ and $A(x)\mathbf1$ have nonnegative powers of $x$, so its $x$-residue is zero. In the first term the residue is $e^{yT}\operatorname{Res}_x\iota_{x,y}(x-y)^nA(x-y)b$. For any integer $d$, the coefficient of $x^{-1}$ in $\iota_{x,y}(x-y)^d$ is $1$ for $d=-1$ and $0$ otherwise. Expanding $A(x-y)b$ therefore selects precisely $A_{(n)}b$ and proves $(A_{(n)}B)(y)\mathbf1=e^{yT}A_{(n)}b$. The sum is finite: large positive modes annihilate $b$, and sufficiently negative modes yield nonnegative powers of $x-y$. The same calculation gives $(\partial_yY(a,y))\mathbf1=e^{yT}Ta$. [F1, F5, step 1.1, algebra]

3.1 A field $H(z)$ local with every state field and satisfying $H(z)\mathbf1=0$ must vanish. Indeed, locality with $Y(c,w)$ applied to $\mathbf1$ gives $(z-w)^NH(z)e^{wT}c=0$; the expression has only nonnegative powers of $w$, so setting $w=0$ gives $z^NH(z)c=0$. Multiplication by $z^N$ is injective on formal distributions, hence $H(z)c=0$ for every $c$. Apply this to $Y(a)_{(m)}Y(b)-Y(a_{(m)}b)$, whose creative state is zero by step 2.2, to obtain $Y(a)_{(m)}Y(b)=Y(a_{(m)}b)$. Apply it to $\partial_zY(a,z)-Y(Ta,z)$, using the same locality and creative-state calculation, to obtain $Y(Ta,z)=\partial_zY(a,z)$. [F1, F5, step 1.1, step 2.1, step 2.2, algebra]

4.1 Put $\delta_y(x)=x^{-1}\delta(y/x)$. If a formal distribution $R(x,y)$ is killed by $(x-y)^L$, its finite delta expansion is
$$R(x,y)=\sum_{i=0}^{L-1}C_i(y)\frac{\partial_y^i\delta_y(x)}{i!},\qquad C_i(y)=\operatorname{Res}_x(x-y)^iR(x,y).$$
For $L=1$, write $R=\sum_{q\in\mathbb Z}r_q(y)x^q$. The equation $(x-y)R=0$ gives $r_{q-1}(y)=y r_q(y)$ for every $q$, so $r_q(y)=y^{-q-1}r_{-1}(y)$ and $R=\delta_y(x)\operatorname{Res}_xR$. For larger $L$, apply this case to $(x-y)^{L-1}R$, subtract its top term, and induct. The coefficient formula follows from $\operatorname{Res}_x(x-y)^j\partial_y^i\delta_y(x)=i!\delta_{ij}$, which is obtained by differentiating the delta recurrence. Now choose a locality order $N$ for $Y(a,x),Y(b,y)$. For each integer $m$, set
$$S_m=\iota_{x,y}(x-y)^mY(a,x)Y(b,y)-\iota_{y,x}(x-y)^mY(b,y)Y(a,x).$$
For any positive $L$ with $m+L\ge N$, $(x-y)^LS_m=0$. The coefficient $C_i$ in its delta expansion is the $m+i$th product field, hence $Y(a_{(m+i)}b,y)$ by step 3.1. Therefore
$$S_m=\sum_{i\ge0}Y(a_{(m+i)}b,y)\frac{\partial_y^i\delta_y(x)}{i!}.$$
The sum is finite because $a_{(m+i)}b=0$ once $m+i\ge N$. Taylor expansion of the formal delta gives
$$y^{-1}\delta\!\left(\frac{x-t}{y}\right)=\sum_{i\ge0}t^i\frac{\partial_y^i\delta_y(x)}{i!},$$
so the displayed expression is exactly the $t$-residue of $t^m y^{-1}\delta((x-t)/y)Y(Y(a,t)b,y)$. The two other $t$-residues are the two ordered products in $S_m$. Thus their coefficients agree for every integer $m$, proving the full Jacobi identity on $V$. [F1, F5, step 3.1, algebra]

5.1 On $M$, use the supplied module Jacobi identity [F3]; on $V$, use step 4.1. Multiplying by $t^m y^n$ and taking residues gives the iterate identity, since
$$\iota_{x,y}(x-y)^m=\sum_{j\ge0}(-1)^j\binom mjx^{m-j}y^j,\qquad \iota_{y,x}(x-y)^m=\sum_{j\ge0}(-1)^{m+j}\binom mjy^{m-j}x^j.$$
The rightmost modes annihilate each fixed vector for large $j$, so the sum is finite. Taking the commutator residues gives the commutator identity; its terms vanish for large $j$ because $a_{(j)}b=0$. Finally write $P(x,y)$ as a finite sum of Laurent monomials $x^a y^b$. For each integer $a$, the formal delta substitution is $x^a y^{-1}\delta((x-t)/y)=(y+t)^a y^{-1}\delta((x-t)/y)$, where $(y+t)^a=\sum_{j\ge0}\binom ajy^{a-j}t^j$ for negative $a$ as well as nonnegative $a$. This identity follows coefficientwise from the defining delta series. Multiplying Jacobi by each $x^a y^b$ and taking residues therefore gives the stated Laurent-polynomial residue identity. [F3, step 4.1, algebra]

6.1 The commutator formula in step 5.1, applied to $\omega_{(1)}=L(0)$, has only the $j=0,1$ terms because $\binom{1}{j}=0$ for $j\ge2$. If $L(0)a=ra$, then
$$[L(0),Y(a,z)]=Y(L(0)a,z)+zY(L(-1)a,z)=rY(a,z)+z\partial_zY(a,z),$$
using $L(-1)=T$ and step 3.1. Comparing the coefficient of $z^{-p-1}$ gives $[L(0),a_{(p)}]=(r-p-1)a_{(p)}$. Acting on $b\in V_s$ proves the weight rule. [F2, step 3.1, step 5.1, algebra] ∎
