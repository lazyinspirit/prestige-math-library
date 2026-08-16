---
id: thm-a-distributive-law-makes-the-composite-a-monad
kind: theorem
title: "A distributive law makes the composite endofunctor a monad"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-distributive-law-between-two-monads, def-monad, def-t-algebra-and-algebra-homomorphism, def-eilenberg-moore-category, thm-the-eilenberg-moore-adjunction-induces-the-given-monad, thm-adjunctions-compose, thm-every-adjunction-induces-a-monad-on-the-domain-of-its-left-adjoint]
aliases: []
landmark: true
proof_strategy: lift-and-compose-eilenberg-moore-adjunctions
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Cheng, Distributive laws for Lawvere theories, Theorem 2.2"
      url: "https://compositionality.episciences.org/13507/pdf"
pipeline_run: null
---

## Statement

If $\lambda:ST\Rightarrow TS$ is a distributive law of the monad $S$ over the monad $T$, then $TS$ is a monad. Its unit is $\eta^T S\circ\eta^S$ and its multiplication is

$$TSTS\xrightarrow{T\lambda S}TTSS\xrightarrow{\mu^T SS}TSS\xrightarrow{T\mu^S}TS.$$

## Facts & Assumptions

**Given:** Monads $S,T$ on $\mathcal C$ and a distributive law $\lambda:ST\Rightarrow TS$.

[L1] A distributive law of $S$ over $T$ is a natural transformation $\lambda:ST\Rightarrow TS$ satisfying $\lambda\circ\eta^S T=T\eta^S$ and $\lambda\circ S\eta^T=\eta^T S$, together with $\lambda\circ\mu^S T=T\mu^S\circ\lambda S\circ S\lambda$ and $\lambda\circ S\mu^T=\mu^T S\circ T\lambda\circ\lambda T$ ([[def-distributive-law-between-two-monads]]).

[L2] A monad consists of an endofunctor with a unit and multiplication satisfying the unit and associativity equations ([[def-monad]]).

[L3] An $S$-algebra map $a:SA\to A$ satisfies $a\eta^S_A=1_A$ and $aS(a)=a\mu^S_A$, and an algebra homomorphism $f:(A,a)\to(B,b)$ satisfies $fa=bS(f)$ ([[def-t-algebra-and-algebra-homomorphism]]).

[L4] The Eilenberg--Moore forgetful functor is the identity on underlying morphisms, hence is faithful ([[def-eilenberg-moore-category]]).

[L5] The Eilenberg--Moore adjunction of any monad induces that monad on the nose ([[thm-the-eilenberg-moore-adjunction-induces-the-given-monad]]).

[L6] If $F\dashv G$ has unit $\eta$ and counit $\varepsilon$ and $F'\dashv G'$ has unit $\eta'$ and counit $\varepsilon'$, then $F'F\dashv GG'$ with unit $\bar\eta=(G\eta'F)\circ\eta$ and counit $\bar\varepsilon=\varepsilon'\circ(F'\varepsilon G')$ ([[thm-adjunctions-compose]]).

[L7] For an adjunction $F\dashv G$ with unit $\eta$ and counit $\varepsilon$, the data $T:=GF$, $\eta:1\Rightarrow T$ and $\mu:=G\varepsilon F:T^2\Rightarrow T$ define a monad on the domain of $F$ ([[thm-every-adjunction-induces-a-monad-on-the-domain-of-its-left-adjoint]]).

## Proof

**Proof technique:** lift $T$ to $S$-algebras and compose Eilenberg--Moore adjunctions.

1.1 For an $S$-algebra $(A,a)$ define the following lifted object and arrow assignment. [L1, L3]

$$\widetilde T(A,a)=\bigl(TA,b_A\bigr),\qquad b_A:=T(a)\circ\lambda_A:STA\to TA,$$

Put $\widetilde T(f)=T(f)$ on an $S$-algebra homomorphism $f$.

2.1 The first distributive unit law gives the first identity below, and the first distributive multiplication law, naturality of $\lambda$, and the $S$-algebra laws give the second. [L1, L2, L3, step 1.1]

$$b_A\eta^S_{TA}=T(a)T(\eta^S_A)=1_{TA},$$

and

$$ \begin{aligned} b_A\mu^S_{TA} &=T(a)T(\mu^S_A)\lambda_{SA}S(\lambda_A)\\ &=T(aS(a))\lambda_{SA}S(\lambda_A)\\ &=T(a)\lambda_A S(T(a))S(\lambda_A) =b_A S(b_A). \end{aligned} $$

Thus $(TA,b_A)$ is an $S$-algebra. If $f:(A,a)\to(B,b)$ is an $S$-algebra homomorphism, then naturality of $\lambda$ gives

$$T(f)b_A=T(b)TS(f)\lambda_A=T(b)\lambda_BS(T(f))=b_BS(T(f)),$$

so the assignment in step 1.1 is an endofunctor $\widetilde T:\mathcal C^S\to\mathcal C^S$.

3.1 The second distributive unit law and naturality of $\eta^T$ give the following identity. [L1, L3, step 2.1]

$$b_A S(\eta^T_A)=T(a)\lambda_A S(\eta^T_A)=T(a)\eta^T_{SA}=\eta^T_Aa,$$

Thus each $\eta^T_A:(A,a)\to\widetilde T(A,a)$ is an $S$-algebra homomorphism.

3.2 The second distributive multiplication law and naturality of $\mu^T$ give the following identity. [L1, L3, step 2.1]

$$ \begin{aligned} b_A S(\mu^T_A) &=T(a)\mu^T_{SA}T(\lambda_A)\lambda_{TA}\\ &=\mu^T_A T(T(a))T(\lambda_A)\lambda_{TA} =\mu^T_A T(b_A)\lambda_{TA}. \end{aligned} $$

Hence each $\mu^T_A:\widetilde T^2(A,a)\to\widetilde T(A,a)$ is also an $S$-algebra homomorphism.

4.1 The underlying components of these two natural transformations are $\eta^T$ and $\mu^T$. Their monad equations hold in $\mathcal C$ by [L2], and [L4] reflects those equalities. Therefore $(\widetilde T,\eta^T,\mu^T)$ is a monad on $\mathcal C^S$. [L2, L4, step 3.1, step 3.2]

5.1 Take the Eilenberg--Moore adjunction $F^S\dashv U^S$ and the Eilenberg--Moore adjunction $F^{\widetilde T}\dashv U^{\widetilde T}$. By [L5] they induce $S$ and $\widetilde T$, respectively, and by [L6] they compose to the following adjunction. [L5, L6, step 4.1]

$$F^{\widetilde T}F^S\dashv U^SU^{\widetilde T}.$$

6.1 The induced endofunctor is $TS$. The composite-unit formula in [L6] gives $\eta^T S\circ\eta^S$. Expanding the two Eilenberg--Moore counits in the composite-counit formula gives the following multiplication. [L5, L6, step 1.1, step 5.1]

$$TSTS\xrightarrow{T\lambda S}TTSS\xrightarrow{TT\mu^S}TTS\xrightarrow{\mu^T S}TS.$$

Naturality of $\mu^T$ at $\mu^S$ identifies its last two arrows with

$$TTSS\xrightarrow{\mu^T SS}TSS\xrightarrow{T\mu^S}TS,$$

This is the multiplication in the Statement.

7.1 By [L7], the endofunctor, unit, and multiplication computed in step 6.1 satisfy both unit laws and associativity, so they define the asserted monad on $TS$. [L7, step 6.1] ∎
