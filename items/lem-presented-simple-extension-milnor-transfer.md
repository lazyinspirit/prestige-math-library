---
dependency_level: 4
id: lem-presented-simple-extension-milnor-transfer
kind: lemma
title: "Milnor transfer for a presented finite simple extension"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - thm-bass-tate-residue-sequence-for-rational-function-fields
  - def-milnor-boundary-map-for-a-discrete-valuation
  - def-field-norm-and-trace
  - lem-milnor-symbol-anticommutativity-and-repeated-entry-identities
justified_by: []
proof_strategy: direct
axiom_use: "ZF; only finite choices for a fixed symbol or polynomial are made."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition, Chapter IX \u00a7\u00a71\u20133; locally reconstructed arguments below"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
verification: {}
---

## Statement

Let $P\in F[X]$ be monic irreducible, $E=F[X]/(P)$ and $d=\deg P$. The negative infinity component in the Bass–Tate residue sequence defines homomorphisms $T_P:K_n^M(E)\to K_n^M(F)$ for every $n\ge0$. They satisfy the projection formula for left multiplication by constant Milnor classes, $T_Pj_{F/E}=d$, and in degree one are the determinant field norm. If $F'/F$ is any field extension and $P=\prod_QQ^{e_Q}$ over $F'$ with distinct monic irreducible $Q$, then
$$j_{F/F'}T_P(x)=\sum_Q e_Q T_Q(j_Qx),$$
where $j_Q:E\to F'[X]/(Q)$ is the induced field inclusion. These are maps of presented simple extensions; no independence of a primitive generator, or of a tower for a general finite extension, is asserted.

## Statement references

[[thm-bass-tate-residue-sequence-for-rational-function-fields]]

[[def-milnor-boundary-map-for-a-discrete-valuation]]

[[def-field-norm-and-trace]]

[[lem-milnor-symbol-anticommutativity-and-repeated-entry-identities]]

## Facts & Assumptions

**Given:** The objects in the Statement.

[F1] The finite-point residues identify $K_{n+1}^M(F(X))/jK_{n+1}^M(F)$ with the direct sum of residue $K_n$ groups, for every $n\ge0$. [[thm-bass-tate-residue-sequence-for-rational-function-fields]]

[F2] The residue is independent of uniformizer, vanishes on unit symbols, and sends units followed by a uniformizer to their residue symbol. [[def-milnor-boundary-map-for-a-discrete-valuation]]

[F3] Symbols anticommute, and a repeated entry reduces to it and $-1$. [[lem-milnor-symbol-anticommutativity-and-repeated-entry-identities]]

[F4] The field norm is the determinant of multiplication on the finite-dimensional field extension. [[def-field-norm-and-trace]]

## Proof

**Given:** The data and conventions above.

1.1 Infinity residue vanishes on constants by [F2], so [F1] makes its negative a homomorphism on the direct sum of finite residues. Define $T_P$ to be its component at $P$. For a constant class $a\in K_r^M(F)$ and any rational symbol $y$, the formula of [F2] gives $\partial_v(j(a)y)=j_v(a)\partial_v(y)$, first when the constant entries are followed by a unit/one-uniformizer normal form and then by [F3] and multilinearity for every symbol. The same holds at infinity. Given a finite-residue lift for a class at $P$, multiplication by $j(a)$ is a lift of its product with $j_{F/E}(a)$. Therefore $T_P(j_{F/E}(a)x)=aT_P(x)$. [F1, F2, F3, given, construct, algebra]

1.2 Suppose $Q$ is a factor of $P$ over $F'$, of multiplicity $e_Q$. A $v_P$-unit remains a $v_Q$-unit: a polynomial coprime to $P$ has a Bezout relation with $P$ over $F$, hence remains coprime to $Q$ over $F'$. Write $P=Q^{e_Q}w$ with $w$ a $v_Q$-unit. By the one-uniformizer normal form in [F3], all Milnor symbols over $F(X)$ are sums of unit symbols and unit symbols followed by $P$. Their residues after restriction are respectively zero and $e_Q$ times the restricted unit residue, since the extra all-unit term from $w$ has residue zero. Thus $\partial_Q j=e_Q j_Q\partial_P$. At infinity the uniformizer $X^{-1}$ is unchanged, so that residue commutes with coefficient extension. [F2, F3, given, algebra]

2.1 In degree zero, the element $\{P(X)\}$ has residue $1$ at $P$, zero at other finite points, and infinity residue $-d$. Thus $T_P(1)=d$. Apply the projection formula of step 1.1 with $x=1\in K_0^M(E)$ to obtain $T_Pj_{F/E}=d$ in every degree. No transfer along an intermediate tower is involved. [F1, F2, step 1.1, algebra]

2.2 We verify the degree-one assertion by the tame-symbol product identity, supplying its finite algebraic proof. For a presented field $F[R]/(R)$ of degree $h$, the companion matrix of multiplication by the class of $X$ has characteristic polynomial $R$. Over a finite splitting field it is triangularizable, with the roots of $R$ counted with multiplicity on the diagonal. Therefore the determinant norm of $g(\bar X)$ is $\prod_{R(\alpha)=0}g(\alpha)$ with those multiplicities. A finite splitting field is obtained by finitely many root adjunctions, so this argument uses no algebraic-closure or infinite choice assumption. For distinct monic irreducibles $R,S$ of degrees $h,k$, put $f=cR$, $g=eS$, where $c,e\in F^\times$. At the two finite points the tame residues of $\{f,g\}$ are $g(\bar X_R)^{-1}$ and $f(\bar X_S)$, while the infinity residue is $(-1)^{hk}c^{-k}e^h$. The determinant norms of the finite residues multiply to $e^{-h}c^k(-1)^{hk}$, because $\prod_{i,j}(\beta_j-\alpha_i)=(-1)^{hk}\prod_{i,j}(\alpha_i-\beta_j)$. Multiplying by the infinity residue gives $1$. If one entry is constant the same calculation is immediate, and equal irreducible factors reduce to a constant entry by $\{R,R\}=\{R,-1\}$. Bilinearity and factorization therefore prove $\partial_\infty(y)\prod_R N_{F[R]/(R)/F}(\partial_Ry)=1$ for every $y\in K_2^M(F(X))$, where these degree-one values are written multiplicatively. By [F1], the defining component at $P$ is unique; hence $T_P$ in degree one equals the determinant norm in [F4], including inseparable $P$ through the root multiplicities. [F1, F2, F3, F4, step 1.1, algebra]

3.1 For $x\in K_n^M(E)$ choose a finite-residue lift $y$ with only the $P$ component equal to $x$, using [F1]. Step 1.2 shows that after coefficient extension its residues are $e_Qj_Qx$ at $Q\mid P$ and zero elsewhere. To see the latter assertion even when $F'/F$ is transcendental, write $y$ as a finite sum of rational symbols and factor their finitely many polynomial entries over $F$; any potentially nonzero new finite residue lies over one of those factors, where step 1.2 applies. Apply the defining negative infinity components over $F'$ and commute infinity residue through coefficient extension. This gives exactly the displayed base-change formula. All choices were for a single finite expression or lift, whose resulting component is unique by [F1]. [F1, F2, step 1.1, step 1.2, construct, algebra] ∎
