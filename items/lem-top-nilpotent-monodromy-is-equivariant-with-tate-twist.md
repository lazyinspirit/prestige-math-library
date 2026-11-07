---
id: lem-top-nilpotent-monodromy-is-equivariant-with-tate-twist
kind: lemma
title: "The top nilpotent monodromy map and its character twist"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-generated
deps: []
proof_strategy: direct
sources:
  references:
    - title: "Pierre Deligne, SGA 7 I, Exposé I, §6"
      url: "https://grothendiecksga.com/read/sga7/fr/1-6.html"
      locator: "Lemma 6.2 and equation (6.2.1): top nilpotent monodromy and the Tate twist."
---

## Statement

Let $\ell$ be a prime, let $V$ be a finite-dimensional $\mathbb Q_\ell$-vector space, and let $T=1+N\in\operatorname{GL}(V)$ with $N$ nilpotent. Let $r\ge0$ be the largest integer with $N^r\ne0$, using $N^0=1$ and assuming $V\ne0$. Let a group $H$ act linearly on $V$, and let $\chi:H\to\mathbb Z_\ell^\times$ be a character such that for every $h\in H$,
$$hTh^{-1}=T^{\chi(h)},\qquad T^a:=\sum_{j=0}^{r}\binom ajN^j.$$
Then $\ker N$ and $NV$ are $H$-stable. If $\mathbb Q_\ell(\chi^r)$ denotes the one-dimensional representation on which $h$ acts by $\chi(h)^r$, the map
$$M:(V/NV)\otimes\mathbb Q_\ell(\chi^r)\longrightarrow\ker N,\qquad (v\bmod NV)\otimes1\longmapsto N^rv$$
is well-defined and $H$-equivariant. Its image is $N^rV$, and it induces an $H$-equivariant isomorphism
$$\bigl(V/\ker N^r\bigr)\otimes\mathbb Q_\ell(\chi^r)\xrightarrow{\sim}N^rV.$$

## Facts & Assumptions

**Given:** $\ell,V,T,N,r,H,\chi$ with the stated nilpotence and conjugation relation.

## Proof

**Proof technique:** expand the finite binomial polynomial modulo the top nilpotent power.

1.1 For $a\in\mathbb Z_\ell^\times$, the finite binomial formula gives $T^a-1=aN+N^2Q_a(N)$ for a polynomial $Q_a$. It factors as $N(a+NQ_a(N))$, where the second factor is invertible because its constant coefficient $a$ is nonzero and $N$ is nilpotent. Hence $T^a-1$ has the same kernel and image as $N$. The conjugation relation therefore makes $\ker N$ and $NV$ stable under every $h\in H$. [given, algebra]

2.1 Since $N^{r+1}=0$, raising the displayed expression to the $r$-th power gives $(T^a-1)^r=a^rN^r$: every other term contains at least $r+1$ factors of $N$. This also holds for $r=0$, when $N=0$ and both sides are the identity. Consequently $hN^rh^{-1}=\chi(h)^rN^r$. [step 1.1, given, algebra]

3.1 Because $N^{r+1}=0$, the map $N^r$ kills $NV$ and its image lies in $\ker N$; when $r=0$, $N=0$ so the same conclusion holds. Thus $M$ is well-defined. Step 2.1 says $hN^rv=\chi(h)^rN^r(hv)$, exactly the equivariance identity for the tensor factor with character $\chi^r$. The image is $N^rV$ by construction and the kernel before tensoring is $\ker N^r/NV$. The first isomorphism theorem gives the displayed quotient isomorphism, which is equivariant by the same identity. [step 2.1, given, algebra] ∎
