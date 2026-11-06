---
id: lem-cft-resonant-zhu-associative-algebra
kind: lemma
title: Associative Zhu algebra for resonant induction
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
deps:
  - def-cft-zhu-algebra
  - def-conformal-vertex-algebra
  - lem-cft-locality-to-jacobi-residue-calculus
dependency_roles:
  def-cft-zhu-algebra: mathematical-premise
  def-conformal-vertex-algebra: mathematical-premise
  lem-cft-locality-to-jacobi-residue-calculus: mathematical-premise
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: voa-resonant-induction-and-projective-socles
physical_scope: Pure mathematics; no physical premises or physical claim.
axiom_base: ZF
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
      locator: "§5.1, Definition 5.1 and Theorem 5.1, printed pp. 114–115: the same Zhu circle/star operations and associative quotient for finitely strongly generated Z-graded vertex algebras. The local proof here establishes the stated CFT-type result without that finite-generation restriction."
    - title: Chongying Dong, Haisheng Li, and Geoffrey Mason, Vertex operator algebras and associative algebras
      url: https://arxiv.org/pdf/q-alg/9612010
      locator: "§2; higher Zhu algebras specialize at n=0. The local proof below does not import the higher-level construction."
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $V=\bigoplus_{r\ge0}V_r$ be a conformal vertex algebra of CFT type over $\mathbb C$, with $T=L(-1)$ and $Y(a,z)=\sum_{m\in\mathbb Z}a_{(m)}z^{-m-1}$. For homogeneous $a\in V_r$, set $a\circ b=\sum_{j=0}^r\binom rj a_{(j-2)}b$, let $O(V)$ be the span of these circle products, and set $a*b=\sum_{j=0}^r\binom rj a_{(j-1)}b$. Then $O(V)$ is a two-sided ideal for $*$, the quotient $A(V)=V/O(V)$ is an associative unital algebra with unit $[\mathbf1]$, and
$$[a]*[b]-[b]*[a]=\sum_{j\ge0}\binom{r-1}{j}[a_{(j)}b].$$
The sum is finite by state truncation. No finite-dimensionality or semisimplicity of $A(V)$ is asserted. For homogeneous $a\in V_r$ and $b\in V$,
$$C_k(a,b)=\sum_{i=0}^r\binom ri a_{(i-k)}b\in O(V)\quad(k\ge2),\qquad C_1(a,b)=a*b.$$
The Zhu class $[\omega]$ is central.

## Statement references

[[def-cft-zhu-algebra]]

[[lem-cft-locality-to-jacobi-residue-calculus]]

## Facts & Assumptions

**Given:** The non-super CFT-type state-field convention and Zhu circle/star operations in the Statement.

[F1] [[def-cft-zhu-algebra]] defines $O(V)$ as a vector subspace and gives the finite circle/star mode sums. It does not assert the ideal or algebra properties proved here.

[F2] [[def-conformal-vertex-algebra]] supplies $T=L(-1)$, the integral nonnegative grading, and the weight of every homogeneous state.

[F3] [[lem-cft-locality-to-jacobi-residue-calculus]] supplies translation, the state-product weight rule, skew-symmetry from locality and creation, and the coefficientwise residue identity used below.

## Proof

1.1 For $a\in V_r$, $b\in V$, and integers $m\ge n\ge0$, put $C_{m,n}(a,b)=\operatorname{Res}_z(1+z)^{r+n}z^{-m-2}Y(a,z)b$. We first show $C_{m,n}(a,b)\in O(V)$. The case $m=n=0$ is the defining circle relation. For $n=0$, integration by parts and translation give
$$C_{m,0}(Ta,b)=(m+2)C_{m+1,0}(a,b)+(m+1-r)C_{m,0}(a,b).$$
Induction on $m$, simultaneously for every homogeneous state $a$, proves all $C_{m,0}$ lie in $O(V)$: the left side is a higher circle residue for $Ta$, already covered at index $m$, and $m+2\ne0$. Finally $C_{m,n}=\sum_{i=0}^n\binom ni C_{m-i,0}$; each $m-i\ge0$, so every $C_{m,n}$ is in $O(V)$. [F1, F2, F3, algebra]

1.2 Define $D=T+L(0)$ on $V$. Creation gives $Da=a\circ\mathbf1\in O(V)$ for homogeneous $a$. Translation and integration by parts give $(Ta)*b=a\circ b-r(a*b)$, hence $(Da)*b=a\circ b$. To verify $D(a*b)=(Da)*b+a*(Db)$, put $C_i=\binom ri$ and expand the left side as
$$\sum_{i=0}^r C_i\bigl(a_{(i-1)}Tb-(i-1)a_{(i-2)}b+(r+s-i)a_{(i-1)}b\bigr).$$
The right side has the same $Tb$ terms; its remaining terms are
$$\sum_{i=0}^r C_i(r+s)a_{(i-1)}b-\sum_{i=0}^{r+1}\binom{r+1}{i}(i-1)a_{(i-2)}b.$$
For the coefficient of $a_{(k-1)}b$, equality reduces to $k\binom rk+k\binom r{k+1}=k\binom{r+1}{k+1}$, Pascal's identity, with out-of-range binomial coefficients zero. Thus the derivation identity holds term by term, including $r=0$. [F1, F2, F3, algebra]

2.1 For homogeneous $a\in V_r,b\in V_s,c\in V$, set $E_j=\operatorname{Res}_y(1+y)^s y^{j-1}Y(b,y)c$ and $F_j=\operatorname{Res}_x(1+x)^r x^jY(a,x)c$. The residue identity in [F3], applied to the two finite star sums, yields
$$(a*b)*c-a*(b*c)=\sum_{j\ge1}C_{j-1,0}(a,E_j)+\sum_{j\ge0}C_{j,0}(b,F_j).$$
Both sums are finite: $E_j=\sum_{i=0}^s\binom si b_{(j+i-1)}c$ and $F_j=\sum_{i=0}^r\binom ri a_{(j+i)}c$, which vanish for all sufficiently large $j$ by state truncation. By step 1.1 each displayed $C$ belongs to $O(V)$, including when its second argument is inhomogeneous. Therefore the star associator lies in $O(V)$. [F1, F3, step 1.1, algebra]

3.1 Since $(Da)*b=a\circ b$, step 2.1 gives $(a\circ b)*c=((Da)*b)*c\equiv(Da)*(b*c)=a\circ(b*c)\in O(V)$, so $O(V)*V\subseteq O(V)$. By step 1.2, $c*(Da)=D(c*a)-(Dc)*a\in O(V)$, because $D(V)\subseteq O(V)$ and $(Dc)*a=c\circ a$. A second use of the associator gives $c*(a\circ b)=c*((Da)*b)\equiv(c*(Da))*b\in O(V)$. Hence $V*O(V)\subseteq O(V)$ as well. The associator descends to the quotient, so its product is associative. The finite residue formulas give $\mathbf1*a=a=a*\mathbf1$, proving the unit assertion. [F1, step 1.2, step 2.1, algebra]

4.1 Skew-symmetry $Y(b,z)a=e^{zT}Y(a,-z)b$, followed by $Ta\equiv-r a\pmod{O(V)}$, gives
$$[b*a]=\sum_{\ell\ge0}\binom{r-1}{\ell}[a_{(\ell-1)}b].$$
Indeed, after expanding the exponential and replacing $T^j(a_{(n)}b)$ by $(-1)^j(r+s-n-1)\cdots(r+s-n+j-2)(a_{(n)}b)$, the coefficient of $a_{(\ell-1)}b$ is the coefficient of $x^\ell$ in $(1+x)^{r+s-1}(1-x/(1+x))^s=(1+x)^{r-1}$. Subtracting the displayed formula for $[b*a]$ from the star sum $[a*b]=\sum_{\ell=0}^{r}\binom r\ell[a_{(\ell-1)}b]$ and reindexing $\ell=j+1$ leaves the claimed commutator formula. Terms with negative binomial lower index vanish, and state truncation makes the sum finite. [F1, F2, F3, step 3.1, algebra]

5.1 Apply the commutator formula of step 4.1 with $a=\omega$, of weight two, and homogeneous $b\in V_s$. Only $j=0,1$ contribute, so
$$[\omega]*[b]-[b]*[\omega]=[Tb]+[L(0)b]=(-s+s)[b]=0,$$
using $[Tb]=-s[b]$ from step 3.1 and $L(0)b=sb$. Linearity gives centrality for every Zhu class. [F1, F2, step 3.1, step 4.1, algebra] ∎
