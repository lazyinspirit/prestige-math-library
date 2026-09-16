---
id: thm-fundamental-product-theorem-for-complex-k-theory
kind: theorem
title: Fundamental product theorem for complex K-theory
status: published
origin: pipeline
deps: [def-external-product-in-complex-k-theory, lem-normalized-clutching-data-for-bundles-over-x-times-s-two, lem-uniform-laurent-approximation-through-bundle-automorphisms, lem-negative-laurent-powers-are-cleared-by-hopf-line-stabilization, lem-polynomial-clutching-families-stabilize-to-linear-clutching, lem-linear-clutching-splits-into-eigenbundles, thm-hopf-line-calculation-of-k-zero-of-the-two-sphere, thm-homotopy-invariance-of-vector-bundle-pullback, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, Theorem 2.2"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Complete clutching proof, printed pp.41–51, especially inverse-map checks pp.49–51"
    - title: "May, A Concise Course in Algebraic Topology, Chapter 24 §2"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Complex K-theory product and Bott class, printed pp.205–208"
---

## Statement

Assume AC. For every compact Hausdorff space $X$, external product is a
natural ring isomorphism

$$\mu:K^0(X)\otimes_{\mathbb Z}K^0(S^2)\xrightarrow{\ \cong\ }K^0(X\times S^2).$$

Writing $\beta=[\gamma]-1$, every class on $X\times S^2$ has a unique form

$$\operatorname{pr}_X^*a+\operatorname{pr}_X^*b\,\operatorname{pr}_{S^2}^*\beta,\qquad a,b\in K^0(X).$$

## Facts & Assumptions

**Given:** AC, compact Hausdorff $X$, the Hopf line $\gamma$ clutched by $z$, and $\beta=[\gamma]-1$.

[F1] External product is a natural ring map ([[def-external-product-in-complex-k-theory]]).

[F2] Every stabilized bundle on $X\times S^2$ has normalized data $[E,f]$, unique up to normalized clutching homotopy ([[lem-normalized-clutching-data-for-bundles-over-x-times-s-two]]).

[F3] A normalized clutching map and a normalized homotopy admit Laurent approximations, including a Laurent-polynomial homotopy relative to chosen endpoints ([[lem-uniform-laurent-approximation-through-bundle-automorphisms]]).

[F4] Negative powers are cleared by tensoring with $\gamma^m$ ([[lem-negative-laurent-powers-are-cleared-by-hopf-line-stabilization]]).

[F5] If $q$ has degree at most $n$, its block linearization $L_nq$ satisfies $[E,q]\oplus[nE,I]\cong[(n+1)E,L_nq]$ ([[lem-polynomial-clutching-families-stabilize-to-linear-clutching]]), and the linear family has an additive spectral splitting into its outside and inside bundles $M_+$ and $M_-$ ([[lem-linear-clutching-splits-into-eigenbundles]]).

[F6] $K^0(S^2)=\mathbb Z\{1,\beta\}$, $\beta^2=0$, and $\gamma=1+\beta$ ([[thm-hopf-line-calculation-of-k-zero-of-the-two-sphere]]).

[F7] Under AC, the restrictions of a bundle over $X\times I$ to its two endpoints are isomorphic ([[thm-homotopy-invariance-of-vector-bundle-pullback]]).

[A1] AC is propagated through [F1]–[F7]; in particular it licenses their stable-complement, homotopy-invariance, partition, and reduced-product uses.

## Proof

**Proof technique:** direct.

1.1 By [F1] and [F6], $\mu$ is the natural ring map determined by $e\otimes1\mapsto\operatorname{pr}_X^*e$ and $e\otimes\gamma\mapsto\operatorname{pr}_X^*e\,\operatorname{pr}_{S^2}^*\gamma$. [F1, F6, A1]

2.1 Let $V$ be a bundle on $X\times S^2$. By [F2]–[F4], after harmless stabilization and homotopy it has data $[E,z^{-m}q]$ with $m\geq0$ and $q$ polynomial of degree at most $n$. By [F5], if $M_+\oplus M_-$ is the spectral splitting of $(n+1)E$ for $L_nq$, then $[E,q]=[M_+,I]+[M_-,z]-[nE,I]$. Multiplying by $\gamma^{-m}$ gives $[V]=M_+\boxtimes\gamma^{-m}+M_-\boxtimes\gamma^{1-m}-nE\boxtimes\gamma^{-m}$, which lies in the image of $\mu$. Since bundle classes generate $K^0(X\times S^2)$, $\mu$ is surjective. [F2, F3, F4, F5, A1, step 1.1, algebra]

3.1 The explicit block matrices in [F5] give two stabilization identities. Padding $q$ to degree at most $n+1$ and clearing the first $-z$ block yields $[(n+2)E,L_{n+1}q]\cong[(n+1)E,L_nq]\oplus[E,I]$. Applying the same matrix to $zq$ and clearing the final $-z$ block yields $[(n+2)E,L_{n+1}(zq)]\cong[(n+1)E,L_nq]\oplus[E,z]$; the possible sign $-z$ is absorbed by the constant gauge $-I$. [F5, step 2.1, algebra]

4.1 Under the spectral procedure of [F5], $[E,I]$ has minus bundle $0$ and $[E,z]$ has minus bundle $E$: for $z$ the monic endomorphism is $A=0$, while the Möbius reduction of the constant $I$ produces $z+t_0^{-1}I$, whose associated $A=-t_0^{-1}I$ has all eigenvalues outside $S^1$. Direct-sum compatibility in [F5] therefore turns the first identity of step 3.1 into $M_-(n+1,q)\cong M_-(n,q)$ and the second into $M_-(n+1,zq)\cong M_-(n,q)\oplus E$. [F5, step 3.1, algebra]

5.1 Define on a bundle represented by $[E,z^{-m}q]$ the element $\nu([E,z^{-m}q])=[M_-(n,q)]\otimes\beta+[E]\otimes\gamma^{-m}$. The first identity in step 4.1 shows independence of the chosen degree bound $n\geq\deg q$. [F6, step 4.1, construct]

6.1 Replacing $(m,q)$ by $(m+1,zq)$ changes the formula of step 5.1 to $([M_-]+[E])\otimes\beta+[E]\otimes\gamma^{-m-1}$. Since [F6] gives $\gamma^k=1+k\beta$, one has $\beta=\gamma^{-m}-\gamma^{-m-1}$; the new expression is therefore $[M_-]\otimes\beta+[E]\otimes\gamma^{-m}$. Thus $\nu$ is independent of the Laurent shift. [F6, step 4.1, step 5.1, algebra]

7.1 The remaining choices also do not change $\nu$. Varying the Möbius parameter $t_0$ through values sufficiently close to $1$ gives the spectral endomorphism over $X\times I$, whose inside subbundle has isomorphic endpoint restrictions by [F7]. By [F2] any two normalized presentations of the same bundle are homotopic, and [F3] joins their Laurent approximations by a Laurent homotopy. Applying the finite block formula and spectral splitting over $X\times I$ again identifies the endpoint minus bundles by [F7]. Isomorphic initial bundles transport all data along their restriction over $X\times\{1\}$. Hence the formula depends only on the isomorphism class of $V$. [F2, F3, F5, F7, A1, step 5.1, step 6.1]

8.1 Block linearization and spectral splitting preserve direct sums by [F5], so the formula in step 5.1 takes Whitney sums to sums. It therefore extends uniquely from bundle classes to a homomorphism $\nu:K^0(X\times S^2)\to K^0(X)\otimes\mathbb Z[\beta]/(\beta^2)$. [F5, F6, step 5.1, step 7.1]

9.1 It remains to compute $\nu\mu$. The domain is additively generated by $[E]\otimes\gamma^{-m}$ with $m\geq0$: $m=0,1$ already give the basis $1,\beta$ because $\beta=1-\gamma^{-1}$. Now $\mu([E]\otimes\gamma^{-m})=[E,z^{-m}]$, so take $q=I$ and $n=0$. Step 4.1 gives $M_-=0$, and step 5.1 yields $\nu\mu([E]\otimes\gamma^{-m})=[E]\otimes\gamma^{-m}$. Additivity proves $\nu\mu=I$. [F1, F6, step 4.1, step 5.1, step 8.1, algebra]

10.1 Step 9.1 makes $\mu$ injective, while step 2.1 makes it surjective; by step 1.1 it is a natural ring isomorphism. Finally [F6] identifies its domain additively with $K^0(X)\oplus K^0(X)\beta$, so bijectivity gives existence and uniqueness of the displayed normal form, including $X=\varnothing$ and the zero class. [F6, step 1.1, step 2.1, step 9.1] ∎
