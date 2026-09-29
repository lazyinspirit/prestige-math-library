---
id: ex-projective-space-valuative-extension
kind: example
title: Valuative extension of projective coordinates
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-relative-projective-space-standard-charts
  - def-valuation-ring
  - thm-affine-scheme-ring-anti-equivalence
  - def-open-immersion-schemes
  - lem-projective-space-diagonal-closed
  - def-valuative-diagram-separatedness
  - lem-separated-implies-valuative-uniqueness
  - def-finite-type-and-module-finite-algebras
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Lemma 29.44.5 (tag 01WC): projective space is proper over the base, proved via the valuative criterion"
      url: https://stacks.math.columbia.edu/tag/01WC
    - title: "Vakil, The Rising Sea, Section 11.3.8 (the standard charts of projective space), printed pp. 309-310"
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf
---

## Example

Let $R\subseteq K$ be a valuation ring with fraction field $K$ and let
$n\ge0$. Write $\mathbb P^n_R:=\mathbb P^n_{\operatorname{Spec}R}$ with
structure morphism $\pi:\mathbb P^n_R\to\operatorname{Spec}R$, and let
$j:\operatorname{Spec}K\to\operatorname{Spec}R$ be the morphism of spectra
induced by the inclusion $R\hookrightarrow K$. For a point
$[a_0:\dots:a_n]\in\mathbb P^n(K)$ of this relative projective space — a
morphism $p:\operatorname{Spec}K\to\mathbb P^n_R$ with $\pi p=j$, presented in
the coordinates $a_j$ of a standard chart containing it — there is an index
$i$ with
$$a_i\ne0,\qquad a_j/a_i\in R\quad\text{for all }j=0,\dots,n,$$
and the ratios $a_j/a_i$ define an extension
$q:\operatorname{Spec}R\to\mathbb P^n_R$ with $q\circ j=p$ and
$\pi\circ q=\operatorname{id}_{\operatorname{Spec}R}$; this extension is
unique.

## Facts & Assumptions

**Given:** A valuation ring $R\subseteq K$ with fraction field $K$, an integer $n\ge0$, a tuple $a_0,\dots,a_n\in K$ that is not all zero, the $K$-point $p:\operatorname{Spec}K\to\mathbb P^n_R$ over $\operatorname{Spec}R$ determined by this tuple in a standard chart, and the structure morphism $\pi:\mathbb P^n_R\to\operatorname{Spec}R$.

[F1] The standard charts $U^R_i=\operatorname{Spec}R[x^{(i)}_\ell:\ell\ne i]$, $i=0,\dots,n$, are affine over $\operatorname{Spec}R$ and form an open cover of $\mathbb P^n_R=\mathbb P^n_{\operatorname{Spec}R}$; for $i\ne m$ the overlap is the distinguished open $U^R_i\cap U^R_m=D(x^{(i)}_m)\subseteq U^R_i$, identified with $D(x^{(m)}_i)\subseteq U^R_m$, and on it $x^{(m)}_\ell=x^{(i)}_\ell/x^{(i)}_m$ for $\ell\ne m$, with the convention $x^{(i)}_i=1$, so that $x^{(m)}_i=1/x^{(i)}_m$. ([[def-relative-projective-space-standard-charts]])

[F2] A subring $R\subseteq K$ is a valuation ring of $K$ when for every $x\in K^\times$ at least one of $x$ and $x^{-1}$ lies in $R$; since each $x\in K^\times$ is then $x/1$ or $1/x^{-1}$ with numerator and denominator in $R$, the field $K$ is the fraction field of $R$. ([[def-valuation-ring]])

[F3] For commutative unital rings $A,B$ the assignment $\varphi\mapsto\operatorname{Spec}(\varphi)$ is a natural bijection $\operatorname{Hom}_{\rm CRing}(A,B)\cong\operatorname{Hom}_{\rm LRS}(\operatorname{Spec}B,\operatorname{Spec}A)$. In particular, a morphism $\operatorname{Spec}K\to U^R_i$ is over $\operatorname{Spec}R$ exactly when the corresponding ring map is an $R$-algebra map. ([[thm-affine-scheme-ring-anti-equivalence]])

[F4] An open immersion identifies its source with an open subscheme of its target, so a morphism whose image is contained in an open subscheme factors through it. ([[def-open-immersion-schemes]])

[F5] For every $n\ge0$ the diagonal $\Delta_{\mathbb P^n_R/\operatorname{Spec}R}$ is a closed immersion; hence $\pi:\mathbb P^n_R\to\operatorname{Spec}R$ is separated. ([[lem-projective-space-diagonal-closed]])

[F6] A valuative diagram for $\pi$ consists of a valuation ring $R\subseteq K$ with fraction field $K$, a morphism $\operatorname{Spec}K\to\mathbb P^n_R$ and a morphism $\operatorname{Spec}R\to\operatorname{Spec}R$ forming a commutative square; a lift is a morphism $\operatorname{Spec}R\to\mathbb P^n_R$ making both triangles commute. ([[def-valuative-diagram-separatedness]])

[F7] A separated morphism of schemes satisfies the uniqueness part of the valuative criterion: every valuative diagram for it has at most one lift. ([[lem-separated-implies-valuative-uniqueness]])

[F8] A prescribed unital ring map $R\to A$ and prescribed elements $c_\ell\in A$ extend uniquely to a unital $R$-algebra homomorphism $R[x_\ell:\ell\ne m]\to A$ with $x_\ell\mapsto c_\ell$; this is the iterated universal property of polynomial rings. ([[def-finite-type-and-module-finite-algebras]])



## Verification

**Proof technique:** direct: the tuple determines the point through a standard chart; a finite induction over the $n+1$ coordinates uses the valuation-ring dichotomy to find a coordinate whose ratios to all coordinates lie in $R$; those ratios define the lift, and separatedness of projective space gives uniqueness.

1.1 Since not all $a_j$ are zero, fix an index $i$ with $a_i\ne0$. By [F8], applied to the inclusion $R\hookrightarrow K$ and the elements $a_\ell/a_i\in K$ for $\ell\ne i$, there is a unique $R$-algebra map $\psi:R[x^{(i)}_\ell:\ell\ne i]\to K$ with $\psi(x^{(i)}_\ell)=a_\ell/a_i$; by [F3] it corresponds to a morphism $\operatorname{Spec}K\to U^R_i\subseteq\mathbb P^n_R$, which is the $K$-point $[a_0:\dots:a_n]$ of the tuple and is a morphism over $\operatorname{Spec}R$ because the composite $R\to R[x^{(i)}_\ell]\xrightarrow{\psi}K$ is the structure map $R\hookrightarrow K$ of [F2]. Replacing the tuple by $(\lambda a_j)$ with $\lambda\in K^\times$ multiplies each ratio $a_\ell/a_i$ by $\lambda\lambda^{-1}=1$, hence gives the same $\psi$ and the same point. [F2, F3, F8]

1.2 There is an index $m$ with $a_m\ne0$ and $a_j/a_m\in R$ for every $j$. Start with $m:=i$, so that $a_m=a_i\ne0$; process the indices $j\ne i$ one at a time, maintaining the invariant that $a_m\ne0$ and $a_{j'}/a_m\in R$ for every already processed $j'$. If $a_j=0$, then $a_j/a_m=0\in R$ and $m$ is kept. If $a_j\ne0$, apply [F2] to $x=a_j/a_m\in K^\times$: either $a_j/a_m\in R$ and $m$ is kept, or $a_m/a_j\in R$ and we replace $m$ by $j$; in the second case $a_{j'}/a_j=(a_{j'}/a_m)(a_m/a_j)\in R$ for every processed $j'$, while $a_j/a_j=1$, so the invariant is preserved. After the finitely many indices have been processed, $a_j/a_m\in R$ for all $j$ and $a_m\ne0$. [F2]

2.1 Conversely every morphism $p:\operatorname{Spec}K\to\mathbb P^n_R$ over $\operatorname{Spec}R$ arises from such a tuple: by [F1] the charts cover $\mathbb P^n_R$, so the image of the unique point of $\operatorname{Spec}K$ lies in some chart $U^R_i$, and $p$ factors through the open immersion $U^R_i\hookrightarrow\mathbb P^n_R$ by [F4]. The factorisation corresponds by [F3] to an $R$-algebra map $\psi:R[x^{(i)}_\ell:\ell\ne i]\to K$, and putting $a_\ell:=\psi(x^{(i)}_\ell)$ for $\ell\ne i$ and $a_i:=1$ gives a tuple with $a_i\ne0$ that determines $p$ by step 1.1. [F1, F3, F4, step 1.1]

2.2 Since $\psi(x^{(i)}_m)=a_m/a_i\ne0$ by step 1.2, the image point of $p$ lies in the distinguished open $D(x^{(i)}_m)=U^R_i\cap U^R_m$ of [F1]; hence $p$ factors through the open subscheme $U^R_m$ by [F4]. By the transition formula of [F1] the factorisation corresponds by [F3] to the $R$-algebra map $R[x^{(m)}_\ell:\ell\ne m]\to K$ sending $x^{(m)}_\ell$ to $c_\ell:=a_\ell/a_m$ for $\ell\ne m$, and $c_\ell\in R$ for every $\ell\ne m$ by step 1.2. [F1, F3, F4, step 1.1, step 1.2]

3.1 By [F8], applied to the inclusion $R\hookrightarrow R$ and the elements $c_\ell\in R$ of step 2.2, there is a unique $R$-algebra map $\varphi:R[x^{(m)}_\ell:\ell\ne m]\to R$ with $\varphi(x^{(m)}_\ell)=c_\ell$; by [F3] it corresponds to a morphism $q:\operatorname{Spec}R\to U^R_m\subseteq\mathbb P^n_R$. [F3, F8, step 2.2]

4.1 The composite $\pi\circ q$ corresponds by [F3] to the ring map $R\to R[x^{(m)}_\ell]\xrightarrow{\varphi}R$, which is the identity of $R$; by the affine anti-equivalence [F3], this identity of ring maps gives $\pi\circ q=\operatorname{id}_{\operatorname{Spec}R}$. [F3, step 3.1]

4.2 The composite $q\circ j$ corresponds by [F3] to the ring map $R[x^{(m)}_\ell]\xrightarrow{\varphi}R\hookrightarrow K$, which sends $x^{(m)}_\ell$ to $c_\ell$; by step 2.2 this is the same $R$-algebra map $R[x^{(m)}_\ell]\to K$ that describes the factorisation of $p$ through $U^R_m$, so $q\circ j=p$. [F3, step 2.2, step 3.1]

5.1 Let $q':\operatorname{Spec}R\to\mathbb P^n_R$ be any morphism over $\operatorname{Spec}R$ with $q'\circ j=p$. Then $q$ and $q'$ are both lifts of the valuative diagram of [F6] consisting of $j$, the generic map $p$ and the base morphism $\operatorname{id}_{\operatorname{Spec}R}$: indeed $\pi q=\operatorname{id}$ and $\pi q'=\operatorname{id}$ and $q j=p=q'j$. Since $\pi$ is separated by [F5], [F7] gives $q'=q$. Moreover the condition of being over $\operatorname{Spec}R$ is automatic for a morphism $q'$ with $q'\circ j=p$: let $u:R\to R$ be the ring map corresponding to $\pi\circ q'$ by [F3]. Since $(\pi q')j=\pi p=j$, the composite $R\xrightarrow{u}R\hookrightarrow K$ equals the given inclusion $R\hookrightarrow K$. The inclusion is injective, hence $u=\operatorname{id}_R$ and $\pi q'=\operatorname{id}_{\operatorname{Spec}R}$ by [F3]. Thus no extension of $p$ to $\operatorname{Spec}R$ other than $q$ exists, and the extension is unique. [F3, F5, F6, F7, step 4.1, step 4.2]

6.1 This completes the example: the index $i$ of the statement is the index constructed in step 1.2, the ratios $a_j/a_i$ are the elements $c_\ell$ of step 2.2, and step 2.2, step 3.1, step 4.1, step 4.2 and step 5.1 exhibit them as the unique extension $\operatorname{Spec}R\to\mathbb P^n_R$ of the point. The construction is explicit and uses no choice principle: only finitely many coordinates are inspected and the index is updated by the dichotomy [F2], so the case of zero coordinates is included, the case $n=0$ has the single chart $U^R_0=\operatorname{Spec}R$ with no variables and the structure maps as $\psi$ and $\varphi$, and the case $R=K$ is included as a valuation ring that is a field. [F1, F2, F3, F5, F7, step 1.2, step 5.1] ∎
