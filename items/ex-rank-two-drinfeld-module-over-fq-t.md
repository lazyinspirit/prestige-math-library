---
id: ex-rank-two-drinfeld-module-over-fq-t
kind: example
title: "A rank-two Drinfeld module over F_q(T)"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-function-field-coefficient-ring
  - def-drinfeld-module-over-an-a-field
  - def-rank-of-a-drinfeld-module
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bjorn Poonen, Introduction to Drinfeld Modules, §§3.2–3.3 and §7.2"
      url: "https://math.mit.edu/~poonen/papers/drinfeld.pdf"
    - title: "Mihran Papikian, An Overview of the Theory of Drinfeld Modules, §2.1 and Exercise 3.11"
      url: "https://websites.umich.edu/~asnowden/seminar/2017/drinfeld/ODM.pdf"
verification: {}
---

## Example

Let $q$ be a prime power, $A=\mathbb F_q[T]$, and $K=\mathbb F_q(T)$ with the identity A-field structure. Sending $T$ to $T+\tau+\tau^2$ defines a rank-two Drinfeld A-module over $K$. More generally, over an algebraically closed extension $E/K$, every rank-two Drinfeld A-module has $\psi_T=T+a\tau+b\tau^2$ with $a\in E$ and $b\in E^\times$. Two such modules are scalar-isomorphic when their coefficients are related by conjugation $u^{-1}\psi_Tu$ for some $u\in E^\times$; this changes $(a,b)$ to $(u^{q-1}a,u^{q^2-1}b)$. The invariant $j=a^{q+1}/b$ classifies these modules up to scalar isomorphism. The subring of $\mathbb F_q[T,a,b,b^{-1}]$ fixed by this scaling action is $\mathbb F_q[T,j]$, so $j$ is the affine rank-two moduli coordinate; the displayed module has $j=1$.

## Example references

[[def-drinfeld-module-over-an-a-field]]

[[def-rank-of-a-drinfeld-module]]

Bjorn Poonen, *Introduction to Drinfeld Modules*, §§3.2–3.3 and §7.2: https://math.mit.edu/~poonen/papers/drinfeld.pdf

Mihran Papikian, *An Overview of the Theory of Drinfeld Modules*, §2.1 and Exercise 3.11: https://websites.umich.edu/~asnowden/seminar/2017/drinfeld/ODM.pdf

## Facts & Assumptions

**Given:** A prime power $q$, $A=\mathbb F_q[T]$, $K=\mathbb F_q(T)$, and an algebraic closure $E$ of $K$.

[F1] [[def-drinfeld-module-over-an-a-field]]: a Drinfeld A-module is an injective $\mathbb F_q$-algebra map to $L\{\tau\}$ with differential the A-field map, and $\tau c=c^q\tau$.

[F2] [[def-rank-of-a-drinfeld-module]]: rank $r$ means $\deg_\tau(\phi_a)=r\deg_A(a)$ for every nonzero $a\in A$.

[F3] [[def-function-field-coefficient-ring]]: $\deg_A(a)=\dim_{\mathbb F_q}(A/aA)$ and $|a|=q^{\deg_A(a)}$.

## Verification

1.1 By the universal property of $\mathbb F_q[T]$, the element $T+\tau+\tau^2\in K\{\tau\}$ defines a unital $\mathbb F_q$-algebra homomorphism $\phi:A\to K\{\tau\}$. Its differential is $T$. For every $m\ge0$, the composition power $\phi_{T^m}=\phi_T^{\circ m}$ has $\tau$-degree $2m$ and nonzero leading coefficient; therefore a nonzero polynomial $f(T)$ of degree $m$ has $\phi_f$ with nonzero top $\tau$-term of degree $2m$. Thus $\phi$ is injective. [F1, given, construct, algebra]

1.2 Let $\psi_T=T+a\tau+b\tau^2$ and $\psi'_T=T+a'\tau+b'\tau^2$ be rank-two modules over $E$, with $b,b'\ne0$. Scalar conjugation by $u\in E^\times$ sends $(a,b)$ to $(u^{q-1}a,u^{q^2-1}b)$, because $u^{-1}\tau u=u^{q-1}\tau$ and $u^{-1}\tau^2u=u^{q^2-1}\tau^2$. The quotient $(u^{q-1}a)^{q+1}/(u^{q^2-1}b)$ equals $a^{q+1}/b$, so $j$ is invariant. [F1, given, algebra]

2.1 For a nonzero polynomial $f(T)$ of degree $m$, the quotient $A/fA$ has $\mathbb F_q$-basis $1,T,\ldots,T^{m-1}$ when $m>0$, and is zero when $f$ is a unit. Hence $\deg_A(f)=\deg f$ by [F3]. The top-term calculation in step 1.1 gives $\deg_\tau\phi_f=2\deg_A(f)$, so $\phi$ has rank two by [F2]. Its coefficients are $a=b=1$, hence its $j$-invariant is $1$. [F2, F3, given, step 1.1, algebra]

2.2 Conversely, suppose $a^{q+1}/b=(a')^{q+1}/b'$. If $a=0$, then $a'=0$ and algebraic closedness gives $u^{q^2-1}=b'/b$; this conjugates $\psi$ to $\psi'$. If $a\ne0$, equality forces $a'\ne0$; choose $u\in E^\times$ with $u^{q-1}=a'/a$. The equality of $j$ then gives $u^{q^2-1}=b'/b$, so the same scalar conjugation identifies the two modules. Thus $j$ classifies their scalar-isomorphism classes over $E$. [given, step 1.2, choose, algebra]

3.1 The scalar action on the coefficient scheme $\operatorname{Spec}\mathbb F_q[T,a,b,b^{-1}]$ has weights $q-1$ on $a$ and $q^2-1$ on $b$. A monomial $a^i b^j$ ($i\ge0$, $j\in\mathbb Z$) is invariant exactly when $i(q-1)+j(q^2-1)=0$, equivalently $(i,j)=((q+1)m,-m)$ for some $m\ge0$. Hence the invariant ring is $\mathbb F_q[T,a^{q+1}/b]=\mathbb F_q[T,j]$, and its affine quotient is the $j$-line described in the Example. [given, step 1.2, algebra] ∎
