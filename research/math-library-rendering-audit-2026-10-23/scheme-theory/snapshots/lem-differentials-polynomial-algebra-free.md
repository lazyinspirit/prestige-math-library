---
id: "lem-differentials-polynomial-algebra-free"
kind: "lemma"
title: "Polynomial differentials are free"
status: published
origin: "pipeline"
deps: ["cor-derivations-represented-by-differentials", "def-derivation-algebra", "thm-universal-property-of-a-polynomial-ring-on-a-family"]
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
    - title: "Stacks Algebra 10.131.14"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
    - title: "Vakil 22.2.3, p.575"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Let $A$ be a commutative ring and let $P=A[x_1,\dots,x_n]$ be the polynomial
algebra on finitely many indeterminates, $n\ge0$. Then:

1. $\Omega_{P/A}$ is a free $P$-module with basis
   $\mathrm{d}x_1,\dots,\mathrm{d}x_n$; for $n=0$ this says
   $\Omega_{A/A}=0$;
2. for every $P$-module $M$ and every $n$-tuple
   $(m_1,\dots,m_n)\in M^{n}$ there is exactly one $A$-derivation
   $D\colon P\to M$ with $D(x_i)=m_i$;
3. writing $\partial/\partial x_i$ for the derivation with
   $\partial x_j/\partial x_i=\delta_{ij}$, one has
   $\mathrm{d}f=\sum_{i=1}^{n}(\partial f/\partial x_i)\,\mathrm{d}x_i$ for every
   $f\in P$.

Neither statement assumes anything of $A$ beyond commutativity, and the
correspondence is natural in $M$.

## Facts & Assumptions

**Given:** A commutative ring $A$, an integer $n\ge0$, the polynomial algebra $P=A[x_1,\dots,x_n]$, and a $P$-module $M$.

[F1] [[cor-derivations-represented-by-differentials]]: for every $P$-module $N$, composition with the universal derivation is a natural $P$-module isomorphism $\operatorname{Hom}_P(\Omega_{P/A},N)\cong\operatorname{Der}_A(P,N)$.

[F2] [[def-derivation-algebra]]: an $A$-derivation of $P$ into $M$ is an additive $A$-constant map satisfying the Leibniz rule, and $\operatorname{Der}_A(P,M)$ is a $P$-module under pointwise operations.

[F3] [[thm-universal-property-of-a-polynomial-ring-on-a-family]]: for commutative rings $R,S$, a ring homomorphism $\varphi\colon R\to S$ and a family $(s_i)_{i\in I}$ in $S$, there is a unique ring homomorphism $R[x_i:i\in I]\to S$ restricting to $\varphi$ on $R$ and sending $x_i$ to $s_i$.

## Proof

1.1 Sections of a square-zero thickening. Let $E(M)$ be the commutative ring whose underlying abelian group is $P\oplus M$ with product $(p,m)(p',m')=(pp',pm'+p'm)$, made into an $A$-algebra by $a\mapsto(\varphi(a),0)$. The first projection $\pi\colon E(M)\to P$ is an $A$-algebra homomorphism with kernel the square-zero ideal $M$. If $s\colon P\to E(M)$ is an $A$-algebra homomorphism with $\pi\circ s=\mathrm{id}_P$, write $s(f)=(f,D_s(f))$; additivity of $s$ gives $D_s(f+g)=D_s(f)+D_s(g)$, the identity $\pi\circ s=\mathrm{id}$ and $A$-linearity give $D_s(\varphi(a))=0$, and multiplicativity $s(fg)=s(f)s(g)$, expanded with $m\,m'=0$ in $E(M)$, gives $D_s(fg)=fD_s(g)+gD_s(f)$; conversely these three laws make the formula $s(f)=(f,D_s(f))$ multiplicative and unital. So sections of $\pi$ over the identity correspond bijectively to the elements of $\operatorname{Der}_A(P,M)$ by [F2]. [F2, algebra]

2.1 Every tuple of values is realised. Let $m_1,\dots,m_n\in M$. By [F3] applied to $\varphi\colon A\to E(M)$ and the family $(x_i,m_i)\in E(M)$, $i=1,\dots,n$, there is a unique $A$-algebra homomorphism $\theta\colon P\to E(M)$ with $\theta(x_i)=(x_i,m_i)$ and $\theta(\varphi(a))=(\varphi(a),0)$. The composite $\pi\circ\theta\colon P\to P$ is an $A$-algebra endomorphism of $P$ with $x_i\mapsto x_i$, so by the uniqueness clause of [F3] it is the identity; hence $\theta(f)=(f,D(f))$ for the map $D\colon P\to M$ given by the second coordinate, and $D(x_i)=m_i$. By step 1.1 the map $D$ is an $A$-derivation of $P$ into $M$. [step 1.1, F3]

3.1 Uniqueness of the values on generators. If $D'\in\operatorname{Der}_A(P,M)$ satisfies $D'(x_i)=m_i$ for all $i$, then $f\mapsto(f,D'(f))$ is an $A$-algebra homomorphism $P\to E(M)$ by step 1.1, it agrees with $\theta$ on $A$ and on each $x_i$, and hence equals $\theta$ by the uniqueness clause of [F3]; therefore $D'=D$. So for every $P$-module $M$ the evaluation map $\operatorname{Der}_A(P,M)\to M^{n}$, $D\mapsto(D(x_1),\dots,D(x_n))$, is a bijection; it is $P$-linear, and natural in $M$ because a $P$-linear $t\colon M\to N$ sends $D$ to $t\circ D$ with values $t(D(x_i))$. [step 2.1, F2, F3]

4.1 Freeness. Composing the natural bijections of [F1] and of step 3.1 gives natural bijections $\operatorname{Hom}_P(\Omega_{P/A},M)\cong M^{n}\cong\operatorname{Hom}_P(P^{n},M)$ for every $P$-module $M$. The image of the identity of $P^{n}$ is a $P$-linear map $\varphi\colon\Omega_{P/A}\to P^{n}$, and its inverse image is a $P$-linear map $\psi\colon P^{n}\to\Omega_{P/A}$ with $\varphi\circ\psi=\mathrm{id}$ and $\psi\circ\varphi=\mathrm{id}$: both identities are checked on generating sets, the standard basis of $P^{n}$ and, by the explicit construction of the bijection in step 3.1, the elements $\mathrm{d}x_i$. Hence $\psi$ is an isomorphism sending $e_i$ to $\mathrm{d}x_i$, so $\Omega_{P/A}$ is free with basis $\mathrm{d}x_1,\dots,\mathrm{d}x_n$. For $n=0$ we have $P=A$ and $M^{0}=0$, so step 3.1 says that every $A$-derivation of $A$ into any $A$-module is zero, and [F1] gives $\Omega_{A/A}=0$. [step 3.1, F1] ∎

