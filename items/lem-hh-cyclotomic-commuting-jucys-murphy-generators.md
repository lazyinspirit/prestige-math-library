---
id: lem-hh-cyclotomic-commuting-jucys-murphy-generators
kind: lemma
title: "Cyclotomic Jucys–Murphy generators and their transport relations"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28-six-step
dependency_level: 1
deps: [def-hh-multiplicative-cyclotomic-hecke-algebra, thm-hh-generic-coxeter-hecke-standard-basis]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Georges Neaime, Geodesic normal forms and Hecke algebras for the complex reflection groups G(de,e,n), arXiv:1810.12053v1"
      url: "https://arxiv.org/pdf/1810.12053v1"
      locator: "§6, PDF pp. 32–38: the multiplicative G(r,1,n) generators and the normalized rank-two affine relations; all transport formulas below are derived from the universal presentation"
---

## Statement

In $H_{r,n}$ define

$$ L_1=X_1,\qquad L_i=Q^{1-i}T_{i-1}\cdots T_1X_1T_1\cdots T_{i-1}\quad(2\le i\le n). $$

Then $L_i=X_i$ for every $i$, so the $L_i$ commute and are units. For $1\le i<n$ they satisfy

$$ T_iL_iT_i=QL_{i+1},\qquad T_iL_i=L_{i+1}T_i-(Q-1)L_{i+1},\qquad T_iL_{i+1}=L_iT_i+(Q-1)L_{i+1}, $$

and $T_iL_j=L_jT_i$ when $j\notin\{i,i+1\}$. More generally, for every polynomial $f\in R[X_1,\ldots,X_n]$,

$$ T_if(L_1,\ldots,L_n)=f(s_iL_1,\ldots,s_iL_n)T_i-(Q-1)L_{i+1}\frac{f(L_1,\ldots,L_n)-f(s_iL_1,\ldots,s_iL_n)}{L_i-L_{i+1}}, $$

where $s_i$ interchanges the $i$th and $(i+1)$st variables and the displayed divided difference is a polynomial. In particular the cyclotomic relation transports as

$$ T_ip(L_i)=p(L_{i+1})T_i-(Q-1)L_{i+1}\frac{p(L_i)-p(L_{i+1})}{L_i-L_{i+1}}. $$

When $p(L_i)=0$, this gives $p(L_{i+1})T_i=(Q-1)L_{i+1}(p(L_i)-p(L_{i+1}))/(L_i-L_{i+1})$; the cyclotomic quotient guarantees this only for $i=1$. It does **not** impose $p(L_i)=0$ for every $i$.

## Facts & Assumptions

**Given:** The algebra and affine relations of [[def-hh-multiplicative-cyclotomic-hecke-algebra]], its level polynomial $p$, and the finite type-A Hecke standard basis of [[thm-hh-generic-coxeter-hecke-standard-basis]].

[F1] $X_1,\ldots,X_n$ commute, $T_iX_iT_i=QX_{i+1}$, and $T_iX_j=X_jT_i$ for $j\notin\{i,i+1\}$. ([[def-hh-multiplicative-cyclotomic-hecke-algebra]])

[F2] $T_i^2=(Q-1)T_i+Q$, $Q$ is a unit, and therefore $T_i^{-1}=Q^{-1}(T_i-(Q-1))$. ([[def-hh-multiplicative-cyclotomic-hecke-algebra]])

[F3] For a generic type-A Hecke algebra, the finite Hecke words $T_w$ indexed by $w\in S_n$ are linearly independent over its universal coefficient ring. ([[thm-hh-generic-coxeter-hecke-standard-basis]])

## Proof

**Given:** The affine generators and relations, the cyclotomic quotient, and the elements $L_i$ in the statement.

1.1 The recursion in the definition gives $L_1=X_1$. If $L_i=X_i$, then $L_{i+1}=Q^{-1}T_iL_iT_i=Q^{-1}T_iX_iT_i=X_{i+1}$ by [F1]. Induction proves $L_i=X_i$ for all $i$, and the commutation and unit claims follow from the affine presentation. [given, F1]

1.2 The equality $T_iL_iT_i=QL_{i+1}$ is [F1]. Right-multiplying it by $T_i^{-1}$ and using [F2] gives $T_iL_i=QL_{i+1}T_i^{-1}=L_{i+1}(T_i-(Q-1))$. Left-multiplying by $T_i^{-1}$ gives $L_iT_i=(T_i-(Q-1))L_{i+1}$, which is equivalent to the displayed relation for $T_iL_{i+1}$. The distant relation is [F1]. [F1, F2, algebra]

1.3 The failure of a common cyclotomic polynomial already occurs at level $r=1$, rank $n=2$. Here $X_1=u_1$ and $L_2=Q^{-1}T_1X_1T_1=u_1Q^{-1}T_1^2=u_1+(Q-1)u_1Q^{-1}T_1$. There is an algebra map from this presented quotient to the finite type-A Hecke algebra sending $T_1$ to its generator, $X_1$ to $u_1$, and $X_2$ to $Q^{-1}u_1T_1^2$: the affine relation holds by construction, the $X_j$ commute because $X_1$ maps to a scalar, and all inverse generators map to units. Under this map, $p(L_2)=L_2-u_1$ becomes $(Q-1)u_1Q^{-1}T_1$, which is nonzero by the finite Hecke basis [F3] and the nonzero coefficient in the rational function field. Thus $p(L_2)$ was already nonzero in the cyclotomic quotient. The initial cyclotomic relation gives a transport identity, not the same polynomial relation on every $L_i$. [F2, F3, algebra]

2.1 Put $\delta_i(f)=(f-s_if)/(X_i-X_{i+1})$. For a monomial $X_i^aX_{i+1}^b$ with $a,b\ge0$, the numerator is divisible by $X_i-X_{i+1}$: if $a\ge b$ it equals $X_i^bX_{i+1}^b(X_i^{a-b}-X_{i+1}^{a-b})$, and if $b>a$ interchange the two variables. Thus $\delta_i(f)$ is a polynomial for every polynomial $f$. The generator cases of step 1.2 give $T_if=s_i(f)T_i-(Q-1)X_{i+1}\delta_i(f)$ for $f=X_i,X_{i+1}$; it is immediate for every other variable and for coefficients in $R$. The identity $\delta_i(fg)=\delta_i(f)g+s_i(f)\delta_i(g)$ then extends the same formula from $f,g$ to $fg$, and linearity proves it for every polynomial. Replacing $X_j$ by $L_j$ using step 1.1 yields the stated transport rule. [step 1.1, step 1.2, algebra]

3.1 Take $f(X_i)=p(X_i)$ in the general transport formula. It gives the first displayed identity for every $i$. For $i=1$, $p(L_1)=p(X_1)=0$ by definition, so the identity specializes to the stated conditional relation. The quotient by $L_i-L_{i+1}$ is a divided difference polynomial, not an inverse of that element. No cancellation of $T_i$ or of a content difference is involved. [given, step 2.1, algebra]

4.1 Steps 1.1–3.1 establish the commuting generators and all claimed transport identities, including the explicit non-common-polynomial example. [step 1.1, step 1.2, step 2.1, step 3.1, step 1.3] ∎
