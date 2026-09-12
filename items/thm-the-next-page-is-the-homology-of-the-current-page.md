---
id: thm-the-next-page-is-the-homology-of-the-current-page
kind: theorem
title: The next page is the homology of the current page
deps: ["def-r-page-of-the-spectral-sequence-of-a-filtered-complex", "lem-the-filtered-differential-induces-d-r-on-the-r-page", "lem-the-rth-differential-squares-to-zero", "lem-spectral-sequence-subquotient-and-local-lifting-calculus", "def-homology-object-of-a-chain-complex"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Charles A. Weibel, An Introduction to Homological Algebra, Chapter 5
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    - title: Romyar Sharifi, Homological Algebra
      url: https://math.ucla.edu/~sharifi/homalg.pdf
landmark: true
status: published
origin: pipeline
pipeline_run: phase-2-catchup-24
proof_strategy: direct
---



## Statement

For the pages of a filtered complex there is a specified natural isomorphism
$$\alpha_r:H(E^r,d^r)_{p,q}\xrightarrow{\sim}E^{r+1}_{p,q}\qquad(r\ge0).$$
The homology at $(p,q)$ uses the incoming map from $(p+r,q-r+1)$ and outgoing map to $(p-r,q+r-1)$.

## Facts & Assumptions

**Given:** A filtered complex in an abelian category, integers p,q, and r≥0. All element notation denotes morphisms after epic pullback as in [F4].

[F1] $E^r=A^r/(A^{r-1}_{p-1}+dA^{r-1}_{p+r-1})$, with the separate r=0 quotient ([[def-r-page-of-the-spectral-sequence-of-a-filtered-complex]]).

[F2] The induced differential is $[x]\mapsto[dx]$ ([[lem-the-filtered-differential-induces-d-r-on-the-r-page]]).

[F3] The page differential squares to zero ([[lem-the-rth-differential-squares-to-zero]]).

[F4] Local epic lifts, modularity and quotient identities hold in the ambient abelian category ([[lem-spectral-sequence-subquotient-and-local-lifting-calculus]]).

[F5] Homology is the quotient of the kernel by the boundary image ([[def-homology-object-of-a-chain-complex]]).

## Proof

**Proof technique:** direct.

1.1 Fix $n=p+q$. For r=0 the inverse image of $\ker d^0$ in $F_pC_n$ is $A^1_{p,n}$, since $d^0[x]=0$ exactly when $dx$ factors through $F_{p-1}C_{n-1}$. The incoming image is represented by $d(F_pC_{n+1})$. Thus [F4] and [F5] identify $H(E^0)_{p,q}$ with $A^1_{p,n}/(F_{p-1}C_n+d(F_pC_{n+1}))=E^1_{p,q}$. [F1, F2, F4, F5]

1.2 For r≥1 abbreviate $A=A^r_{p,n}$, $N=A^{r+1}_{p,n}$, $L=A^{r-1}_{p-1,n}$ and $J=d(A^r_{p+r,n+1})$. Let K be the inverse image in A of $\ker d^r$. For a morphism x into K, [F2] says dx factors through $A^{r-1}_{p-r-1,n-1}+d(A^{r-1}_{p-1,n})$. By [F4], after an epic cover write $dx=a+db$ with a and b through those respective subobjects. Then $d(x-b)=a$ lies in $F_{p-r-1}C_{n-1}$ and $x-b$ lies in $F_pC_n$, so $x-b$ factors through N; b factors through L. Descent of subobject membership gives $K\subseteq N+L$. [F1, F2, F4]

2.1 Conversely, for x through N, dx lies in $F_{p-r-1}C_{n-1}$ and $d(dx)=0$, hence through $A^{r-1}_{p-r-1,n-1}$; for b through L, db lies in the target boundary-image summand. Therefore [F2] sends both to zero and $N+L\subseteq K$. Thus $K=N+L$. The original boundary summand $d(A^{r-1}_{p+r-1,n+1})$ lies in J, because its preimage has filtration at most p+r and differential at most p. The incoming image in [F5] is the image of J in $A/B^r$. By [F3] it lies in the kernel. Consequently $H(E^r)_{p,q}\cong (N+L)/(L+J)$. [F1, F2, F3, F4, F5, step 1.2]

3.1 Every map through J has differential zero and filtration at most p, so $J\subseteq N$. Modularity [F4] gives $N\cap(L+J)=(N\cap L)+J$. The intersection $N\cap L$ is $F_{p-1}C_n\cap d^{-1}(F_{p-r-1}C_{n-1})=A^r_{p-1,n}$. The sum/quotient formula therefore gives $$(N+L)/(L+J)\cong N/(A^r_{p-1,n}+d(A^r_{p+r,n+1}))=E^{r+1}_{p,q}.$$ In particular the inclusion $N\to K$ is epic after taking homology and has exactly the displayed kernel; this verifies both surjectivity and injectivity of the induced comparison. [F1, F4, step 2.1]

4.1 Define $\alpha_r$ to be the inverse of this inclusion-induced isomorphism $E^{r+1}\to H(E^r)$, using step 1.1 when r=0. Its local rule sends a homology class represented by x to the class of x-b constructed in step 1.2. Independence of the correction follows from the kernel calculation in step 3.1, rather than from choosing b canonically. For a filtration-preserving chain map f, the inclusions of N into K commute with f, and $f(x-b)=f(x)-f(b)$ with $d'f=fd$. The induced quotient squares commute by [F4]; their inverses do too. This proves naturality. [F4, step 1.1, step 1.2, step 3.1] ∎

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here.
