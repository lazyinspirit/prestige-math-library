---
id: lem-induction-commutes-with-inflation
kind: lemma
title: "Induction commutes with inflation along a normal subgroup"
status: draft
origin: pipeline
deps: [def-monomial-representation-and-m-group, def-induced-r-linear-g-module-by-h-covariant-functions, def-extension-of-an-irreducible-normal-subgroup-representation, prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient, def-quotient-group, def-normal-subgroup]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Tammo tom Dieck, Representation Theory — Lemma 4.3.4, printed p. 58"
      url: "https://www.uni-math.gwdg.de/tammo/d01.pdf"
    - title: "Wen-Wei Li, Yanqi Lake Lectures on Algebra I — Exercise 12.5.4, printed p. 147"
      url: "https://www.wwli.asia/downloads/YAlg1.pdf"
---

## Statement

Let $K\trianglelefteq G$ be a normal subgroup of the finite group $G$, let
$K\le H\le G$, write $\bar G=G/K$, $\bar H=H/K$, and let
$\pi:G\to\bar G$, $\pi(g)=gK$, be the quotient map. For every finite-dimensional
complex $\bar H$-module $W$ there is an isomorphism of complex $G$-modules
$$ \operatorname{Infl}_{\bar G}^{G}\bigl(\operatorname{Ind}_{\bar H}^{\bar G}W\bigr) \;\cong\;\operatorname{Ind}_H^G\bigl(\operatorname{Infl}_{\bar H}^{H}W\bigr). $$

In particular, if $\bar H\le\bar G$, if $W$ is a one-dimensional $\bar H$-module
and $\operatorname{Ind}_{\bar H}^{\bar G}W$ is irreducible, then the inflation of
$\operatorname{Ind}_{\bar H}^{\bar G}W$ to $G$ is a monomial irreducible
$G$-module: it is induced from the one-dimensional representation
$\operatorname{Infl}_{\bar H}^{H}W$ of $H:=\pi^{-1}(\bar H)$.

## Facts & Assumptions

**Given:** A finite group $G$, a normal subgroup $K\trianglelefteq G$, a subgroup $K\le H\le G$ with quotient $\bar H=H/K$, the quotient map $\pi:G\to\bar G=G/K$, and a finite-dimensional complex $\bar H$-module $W$. For the final clause $\bar H$ is an arbitrary subgroup of $\bar G$, $H=\pi^{-1}(\bar H)$, and $W$ is one-dimensional with $\operatorname{Ind}_{\bar H}^{\bar G}W$ irreducible.

[F1] $\operatorname{Ind}_L^M U=\{\,f:M\to U:f(ml)=l^{-1}\cdot f(m)\ \text{for all }m\in M,\,l\in L\,\}$ for a subgroup $L\le M$ and an $L$-module $U$, with $(x\cdot f)(m)=f(x^{-1}m)$. ([[def-induced-r-linear-g-module-by-h-covariant-functions]]).

[F2] For a representation $M$ of $H/N$ the inflation to $H$ is the composite with $H\to H/N$; it has the same underlying space, the action of $h\in H$ is that of the coset $hN$, and consequently $N$ acts trivially. ([[def-extension-of-an-irreducible-normal-subgroup-representation]]).

[F3] $G/K$ consists of the cosets $gK$, the quotient map $\pi$ is a surjective homomorphism, $\overline{xy}=\bar x\bar y$ and $\bar x=\bar y$ exactly when $x^{-1}y\in K$. ([[def-quotient-group]]).

[F4] A representation of $H$ on which $N\trianglelefteq H$ acts trivially descends uniquely to $H/N$, and it is irreducible as an $H$-representation exactly when it is irreducible as an $H/N$-representation. ([[prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient]]).

[F5] A nonzero $G$-module is monomial when it is isomorphic to $\operatorname{Ind}_H^G L$ for a subgroup $H\le G$ and a one-dimensional $H$-module $L$ ([[def-monomial-representation-and-m-group]]). Inflation leaves the underlying vector space unchanged by [F2].

[F6] $K\trianglelefteq G$ means that $gkg^{-1}\in K$ for all $g\in G$, $k\in K$; in particular $K$ is a subgroup. ([[def-normal-subgroup]]).

[A1] For $k\in K$ and any $H$-module on which $K$ acts trivially, $k^{-1}\cdot u=u$ for every vector $u$.

## Proof

**Proof technique:** direct.

1.1 Since $K\trianglelefteq G$ by [F6] and $K\le H\le G$, the quotient $H/K$ is a group and $h\mapsto\bar h$ is a homomorphism $H\to\bar H$; hence the $H$-action on the inflated module, which is the $\bar H$-action through $h\mapsto\bar h$ by [F2], is well defined. For $\bar f\in\operatorname{Infl}_{\bar G}^G(\operatorname{Ind}_{\bar H}^{\bar G}W)$ define $\Phi(\bar f):G\to W$ by $\Phi(\bar f)(g):=\bar f(\bar g)=\bar f(\pi(g))$. If $h\in H$, then $\pi(gh)=\bar g\bar h$ by [F3], so $\Phi(\bar f)(gh)=\bar f(\bar g\bar h)=\bar h^{-1}\cdot\bar f(\bar g)=h^{-1}\cdot\Phi(\bar f)(g)$; hence $\Phi(\bar f)\in\operatorname{Ind}_H^G(\operatorname{Infl}_{\bar H}^HW)$ by [F1]. [F1, F2, F3, F6, construct]

2.1 $\Phi$ is $\mathbb C$-linear, and it is injective: if $\Phi(\bar f)=0$, then $\bar f(\bar g)=\Phi(\bar f)(g)=0$ for every $g\in G$, and every element of $\bar G$ is some $\bar g$ by [F3], so $\bar f=0$. [F3, step 1.1, algebra]

2.2 $\Phi$ is surjective. Given $F\in\operatorname{Ind}_H^G(\operatorname{Infl}_{\bar H}^HW)$, define $\bar f:\bar G\to W$ by $\bar f(\bar g):=F(g)$. This is well defined: if $\bar g=\bar g'$, then $g'=gk$ with $k\in K\le H$ by [F3], so $F(g')=F(gk)=k^{-1}\cdot F(g)=F(g)$ by [A1] and [F2]. Moreover $\bar f$ is $\bar H$-covariant, since for $\bar h\in\bar H$ one has $\bar f(\bar g\bar h)=F(gh)=h^{-1}\cdot F(g)=\bar h^{-1}\cdot\bar f(\bar g)$ for any $h\in H$ with image $\bar h$, so $\bar f\in\operatorname{Ind}_{\bar H}^{\bar G}W$ and $\Phi(\bar f)=F$. [A1, F1, F2, F3, step 1.1]

2.3 $\Phi$ is $G$-equivariant: for $x,g\in G$ and $\bar f$ as in step 1.1, $\Phi(x\cdot\bar f)(g)=(x\cdot\bar f)(\bar g)=\bar f(\bar x^{-1}\bar g)=\bar f(\overline{x^{-1}g})=\Phi(\bar f)(x^{-1}g)=(x\cdot\Phi(\bar f))(g)$, using [F3] and the action rules of [F1]. [F1, F3, step 1.1, algebra]

3.1 Steps 2.1, 2.2 and 2.3 show that $\Phi$ is a $G$-equivariant $\mathbb C$-linear bijection, which is the asserted isomorphism. For the final clause let $\bar H\le\bar G$, put $H=\pi^{-1}(\bar H)$, let $W$ be one-dimensional with $\operatorname{Ind}_{\bar H}^{\bar G}W$ irreducible, and note $K\le H\le G$ and $H/K=\bar H$. By the isomorphism just proved the inflation of $\operatorname{Ind}_{\bar H}^{\bar G}W$ is isomorphic to $\operatorname{Ind}_H^G(\operatorname{Infl}_{\bar H}^HW)$, and $\operatorname{Infl}_{\bar H}^HW$ is one-dimensional because it has the same underlying space as $W$ by [F2]; the inflation is irreducible because inflation preserves irreducibility in both directions by [F4] and $\operatorname{Ind}_{\bar H}^{\bar G}W$ is irreducible. Hence it is a monomial irreducible $G$-module induced from the one-dimensional $H$-module $\operatorname{Infl}_{\bar H}^HW$ by [F5]. [F2, F4, F5, step 2.1, step 2.2, step 2.3] ∎
