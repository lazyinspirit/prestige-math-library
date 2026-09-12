---
id: "lem-a-cartan-eilenberg-resolution-totalizes-to-an-injective-resolution-in-the-required-derived-sense"
kind: "lemma"
title: "A Cartan-Eilenberg resolution totalizes to an injective replacement"
deps: ["def-cartan-eilenberg-injective-resolution-of-a-bounded-below-complex", "lem-finite-biproducts-of-injective-objects-are-injective", "thm-a-bounded-below-complex-of-injectives-is-homotopically-injective", "def-dependent-choice", "thm-long-exact-sequence-in-cohomology"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Weibel, 5.7.2"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
    - title: "Sharifi, Section 4.3"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

Let $I$ be a supplied Cartan–Eilenberg injective resolution of $K$, zero for $p<b$ and $q<0$. Then $T=\operatorname{Tot}I$ is bounded below and termwise injective, and its augmentation $e:K\to T$ is a quasi-isomorphism. These assertions require no choice axiom. Under DC, or with the successive homotopy extensions required for maps from acyclic complexes supplied, $T$ is K-injective and hence an injective replacement in $D^+$.

## Facts & Assumptions

**Given:** The supplied bicomplex and augmentations in the statement.

[F1] The four augmented complexes are exact, and total differential is $h+(-1)^pv$ ([[def-cartan-eilenberg-injective-resolution-of-a-bounded-below-complex]]).

[F2] Finite biproducts of injectives are injective ([[lem-finite-biproducts-of-injective-objects-are-injective]]).

[F3] Short exact sequences of cochain complexes give long exact cohomology sequences ([[thm-long-exact-sequence-in-cohomology]]).

[F4] Bounded-below complexes of injectives are K-injective with DC or supplied successive homotopy extensions ([[thm-a-bounded-below-complex-of-injectives-is-homotopically-injective]]).

## Proof

1.1 The possible summands of $T^n$ have $b\le p\le n$, hence form a finite biproduct of injectives. For $n<b$ this is zero. The augmentation takes $K^p$ into $I^{p,0}$; $v\epsilon=0$ and $h\epsilon=\epsilon d_K$ give $De=ed_K$. [F1, F2]

2.1 Adjoin $K^p$ in vertical degree $-1$. Set $A^{p,-1}=K^p$ and $A^{p,q}=I^{p,q}$ for $q\ge0$, with vertical augmentation $\epsilon$. All columns of $A$ are exact. The total object $U^n=T^n\oplus K^{n+1}$ with the signed differential is isomorphic to $\operatorname{Cone}(e)^n$, whose differential is $(t,k)\mapsto(Dt+e k,-d_K k)$. Explicitly send the $K^{n+1}$ summand of $U^n$ to $(-1)^{n+1}k$ in the cone; the $T$ summand is unchanged. This verifies both signs, including negative $b$. [F1, step 1.1]

3.1 Let $F^mU$ be the subcomplex consisting of columns $p\ge m$. The quotient $U/F^mU$ has only the columns $b,\ldots,m-1$. Its finite descending column filtration has shifted exact columns as successive quotients, hence it is acyclic by repeated application of the long exact sequence. Fix $n$ and take $m>n+2$. Then $F^mU$ is zero in degrees $n-1,n,n+1$, since its least total degree is $m-1$. Therefore $H^n(U)=H^n(U/F^mU)=0$. This is a finite argument for each degree and requires neither exact filtered colimits nor any infinite limit. [F1, F3, step 2.1]

4.1 The degreewise split sequence $0\to T\to\operatorname{Cone}(e)\to K[1]\to0$ has connecting map $H^n(K)\to H^n(T)$ induced by $e$: lift a cycle to the $K$ summand and its cone differential is its image under $e$. The zero cone cohomology in step 3.1 and the long exact sequence thus make every $H^n(e)$ invertible. Finally apply the bounded-below injective theorem with exactly its DC/supplied-extension hypothesis to obtain K-injectivity. The zero complex and one-column case obey the same construction. [F3, F4, step 1.1, step 3.1] ∎
