---
id: ex-coboundary-rephasing-of-a-projective-representation
kind: example
title: "Rephasing the trivial projective representation of C2 by a coboundary"
status: draft
origin: pipeline
deps: ["lem-rephasing-changes-the-factor-set-by-a-coboundary", "def-clifford-obstruction-class", "def-projective-representation-and-factor-set"]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Britta Späth, Reduction theorems for some global-local conjectures — Remark 1.5(a), printed p. 3"
      url: "https://darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf"
    - title: "Tammo tom Dieck, Representation Theory — §4.2, printed pp. 54–57"
      url: "https://www.uni-math.gwdg.de/tammo/d01.pdf"
proof_strategy: direct
---

## Example

Let $Q=C_2=\{1,t\}$ and let $P$ be the trivial one-dimensional projective
representation $P(1)=P(t)=1$ on $V=\mathbb C$, with factor set
$\alpha\equiv1$. Rephasing by the function $c(1)=1$, $c(t)=i$ gives
$P_c(1)=1$, $P_c(t)=i$ with
$$P_c(t)P_c(t)=i^2=-1=\alpha_c(t,t)P_c(1),$$
so $\alpha_c(t,t)=-1$ and $\alpha_c=\delta c$: the rephased factor set is the
coboundary of $c$, and both factor sets represent the zero class of
$H^2(C_2,\mathbb C^\times)$. Multiplying $P_c(t)$ by $c(t)^{-1}=-i$ returns the
genuine representation $P$.

## Facts & Assumptions

**Given:** The group $Q=C_2=\{1,t\}$ with $t^2=1$, the one-dimensional space $V=\mathbb C$, the trivial projective representation $P(1)=P(t)=1$, and the function $c:Q\to\mathbb C^\times$ with $c(1)=1$, $c(t)=i$.

[F1] For $c:Q\to\mathbb C^\times$ with $c(1)=1$, the rephasing $P_c(q)=c(q)P(q)$ has factor set $\alpha_c(q,r)=c(q)c(r)c(qr)^{-1}\alpha(q,r)$, hence the same cohomology class as $\alpha$. ([[lem-rephasing-changes-the-factor-set-by-a-coboundary]]).

[F2] A normalized projective representation of $Q$ on a nonzero finite-dimensional space is a map $P$ with $P(1)=\operatorname{id}$ and $P(q)P(r)=\alpha(q,r)P(qr)$ for a factor set $\alpha:Q\times Q\to\mathbb C^\times$, which is determined by $P$. ([[def-projective-representation-and-factor-set]]).

[F3] The Clifford obstruction of an invariant irreducible normal-subgroup type is the class in $H^2(Q,\mathbb C^\times)$ of the factor set of its normalized projective operators, and it is unchanged by rephasing; a class vanishes exactly when the cocycle is a coboundary. ([[def-clifford-obstruction-class]]).

[A1] For scalars $z,w\in\mathbb C^\times$ one has $zw=wz$, $i^2=-1$ and $(-i)\cdot i=1$.



## Verification

**Proof technique:** direct.

1.1 The map $P$ with $P(1)=P(t)=1$ is a normalized projective representation with factor set $\alpha\equiv1$: $P(1)=\operatorname{id}_V$ and, since $t^2=1$ and $V$ is one-dimensional, $P(q)P(r)=1=\alpha(q,r)P(qr)$ for all four pairs $(q,r)\in Q\times Q$ with $\alpha(q,r)=1$. [F2, given, algebra]

2.1 Rephasing by $c$ gives $P_c(1)=c(1)P(1)=1$ and $P_c(t)=c(t)P(t)=i$, so $P_c$ is again normalized; and $P_c(t)P_c(t)=i\cdot i=-1$, while the defining relation for $P_c$ at the pair $(t,t)$ reads $P_c(t)P_c(t)=\alpha_c(t,t)P_c(t^2)=\alpha_c(t,t)P_c(1)=\alpha_c(t,t)$, so $\alpha_c(t,t)=-1$; the pairs involving $1$ have $\alpha_c(1,q)=\alpha_c(q,1)=1$, so $\alpha_c$ is the function with the single nontrivial value $\alpha_c(t,t)=-1$ and $\alpha_c\not\equiv1$. [A1, step 1.1, given, algebra]

3.1 The rephasing formula of [F1] reproduces this value: $\alpha_c(t,t)=c(t)c(t)c(t^2)^{-1}\alpha(t,t)=i\cdot i\cdot c(1)^{-1}\cdot1=-1$, using $c(1)=1$ and $\alpha\equiv1$; so $\alpha_c=\delta c$ in the multiplicative coboundary notation, with $\delta c(t,t)=-1$ and $\delta c=1$ on the pairs involving the identity. [A1, F1, step 2.1, algebra]

3.2 Rephasing is reversible and returns the genuine representation: with $c'(q):=c(q)^{-1}$, so that $c'(1)=1$ and $c'(t)=-i$, the rephased family $P_{c'}(q)=c'(q)P_c(q)$ has $P_{c'}(1)=1$ and $P_{c'}(t)=(-i)\cdot i=1=P(t)$; by [F1] its factor set is $\delta c'\cdot\alpha_c=1$, so it is the original multiplicative representation $P$ of step 1.1. [A1, F1, step 1.1, step 2.1]

4.1 Both factor sets therefore have the same class in $H^2(C_2,\mathbb C^\times)$, namely the zero class: $\alpha\equiv1$ is the identity cocycle, and $\alpha_c=\delta c$ is a coboundary, so $[\alpha_c]=[\alpha]=0$ by [F3]. To realize this as a Clifford obstruction, take $G=C_2$, $N=\{1\}$ and the unique irreducible representation $\rho$ of $N$ on $\mathbb C$. It is $G$-invariant, with inertia group $G$ and quotient $G/N=C_2$. Both $P$ and $P_c$ restrict to $\rho$, and $P(ng)=\rho(n)P(g)$ and $P(gn)=P(g)\rho(n)$ (and the same identities for $P_c$) hold since $n=1$. Thus they are projective inertia operators for this specified type in [F3]. Their factor sets give its same vanishing obstruction, although $\alpha_c$ is not the constant cocycle. [F1, F3, step 2.1, step 3.1]

5.1 The example is verified: the trivial one-dimensional projective representation of $C_2=\{1,t\}$ has $\alpha\equiv1$; rephasing by $c(1)=1$, $c(t)=i$ produces $P_c(t)=i$ with $\alpha_c(t,t)=-1$, which is exactly $\delta c(t,t)=c(t)c(t)c(t^2)^{-1}$; and since $\delta c$ is a coboundary, the two factor sets lie in one cohomology class, the zero class, which step 3.2 confirms by rephasing back to $P$ with multiplier $-i$. [step 1.1, step 2.1, step 3.1, step 4.1, step 3.2] ∎
