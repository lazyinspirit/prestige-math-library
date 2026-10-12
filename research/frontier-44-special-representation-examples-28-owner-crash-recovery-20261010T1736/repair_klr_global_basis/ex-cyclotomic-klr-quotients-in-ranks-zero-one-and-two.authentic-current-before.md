---
id: ex-cyclotomic-klr-quotients-in-ranks-zero-one-and-two
kind: example
title: "Cyclotomic KLR quotients in ranks zero, one and two"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 11
deps: [def-cyclotomic-klr-quotient-at-a-dominant-weight,
       def-divided-power-klr-idempotents-and-projectives,
       def-quantum-integers-factorials-and-divided-powers-at-q-i,
       lem-cyclotomic-klr-dot-annihilators-and-finite-root-strings,
       thm-cyclotomic-klr-algebras-are-finite-dimensional-graded-symmetric,
       thm-klr-pbw-basis-theorem]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Seok-Jin Kang and Masaki Kashiwara, Categorification of Highest Weight Modules via Khovanov-Lauda-Rouquier Algebras, arXiv:1102.4677v4"
      url: "https://arxiv.org/pdf/1102.4677v4"
      locator: "Section 4.1, rank-one examples after Corollary 4.4, and Section 5.1-5.2 (the sl_2 categorical relation)."
    - title: "Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups I, Representation Theory 13 (2009) 309-347, arXiv:0803.4121v2"
      url: "https://arxiv.org/pdf/0803.4121"
      locator: "Section 2.2, Example 3 and Section 3.1, Example 3.23: the nil-Hecke algebra NH_m, the coinvariant column and the decomposition NH_m = P_{i,m}^{[m]_{q_i}!}."
---

## Example

Take $I=\{i\}$, $(\alpha_i\mid\alpha_i)=2$, $d_i=1$, $q_i=q$ and
$\Lambda=\lambda\Lambda_1$ with $\lambda\ge0$, so that the standard cyclotomic
quotient of [[def-cyclotomic-klr-quotient-at-a-dominant-weight]] imposes
$x_1^{\lambda}e(\nu)=0$ on every word. Then:

(a) $R^\Lambda(0)=k$; for $1\le n\le\lambda$,
$R^\Lambda(n\alpha_i)=k[x_1,\dots,x_n]/(x_1^{\lambda})$ with graded dimension
$\sum_{r<\lambda}\dim(\mathrm{Pol}_n)_r\,q^{2r}$ in the nil-Hecke presentation,
and $R^\Lambda(n\alpha_i)=0$ for $n>\lambda$;

(b) at $\lambda=1$ and $n=1$ the block is $k$ with $x_1=0$ and there is no
nonzero simple projective at root $\alpha_i$ in the higher-quotient sense,
while at $\lambda\ge1$ the rank-one block $R^\Lambda(\alpha_i)=k[x]/x^\lambda$
has graded dimension $1+q^2+\cdots+q^{2(\lambda-1)}$ and its regular module
decomposes as $[\lambda]_q$ copies of the self-dual divided-power projective
$P_{i,1}$ only when the normalization is fixed as in
[[def-divided-power-klr-idempotents-and-projectives]]; in particular
$R^\Lambda(2\alpha_i)=0$ for $\lambda=1$, and for $\lambda=2$ one has
$R^\Lambda(2\alpha_i)=NH_2/(x_1^2)\cong P_{i,2}^{\oplus(q+q^{-1})}$;

(c) the inhomogeneous monic deformation $a_i(u)=u(u-1)$ at $\lambda=2$ gives
$R^\Lambda_a(\alpha_i)=k\oplus k$ rather than $k[x]/x^2$: its two ordinary
simple projective classes cannot be the one-dimensional middle weight of
$V(2)$, so the standard graded hypothesis is substantive.

## Verification

**Given:** The rank-one datum $I=\{i\}$, $(\alpha_i\mid\alpha_i)=2$, $d_i=1$, $q_i=q$, $\Lambda=\lambda\Lambda_1$, and the standard quotient with relation $x_1^\lambda e(\nu)=0$.

[F1] The nil-Hecke algebra $R(n\alpha_i)$ has PBW basis $x_1^{a_1}\cdots x_n^{a_n}\tau_w$ with $\tau_a^2=0$ ([[thm-klr-pbw-basis-theorem]]), the polynomial representation is faithful, and the regular module decomposes as $P_{i,n}^{\oplus[n]_{q_i}!}$ after the fixed self-dual shift ([[def-divided-power-klr-idempotents-and-projectives]]).

[F2] The dot-annihilator lemma ([[lem-cyclotomic-klr-dot-annihilators-and-finite-root-strings]]) gives finite dimensionality and the vanishing $R^\Lambda(\beta+m\alpha_i)=0$ for $m$ large; in the standard case the dots are nilpotent.

**Verification.** 

1.1 Rank zero and the first bounds. The empty word gives $R^\Lambda(0)=k$. For a word of length $n$, the relation $x_1^\lambda e(\nu)=0$ is a monic relation on the first dot, and the argument of [F2] propagates a monic dot annihilator to every position; by [F1] the PBW monomials with $0\le a_k<\lambda$ span, so $R^\Lambda(n\alpha_i)$ is finite dimensional for every $n\ge1$. For $n>\lambda$ the all-$i$ tail bound of [F2] gives $R^\Lambda(n\alpha_i)=0$. [F1, F2]

2.1 The cases $\lambda=1$ and general $\lambda$. For $\lambda=1$ the relation $x_1e(\nu)=0$ kills the first dot, and the equal-colour mixed relation $\tau_1x_1-x_2\tau_1=e$ together with $\tau_1^2=0$ gives $\tau_1=0$, hence $R^\Lambda(\alpha_i)=k$ with $x_1=0$ and $R^\Lambda(2\alpha_i)=0$. For $\lambda\ge2$ the rank-one block is $R^\Lambda(\alpha_i)=k[x_1]/(x_1^\lambda)$ with graded dimension $1+q^2+\cdots+q^{2(\lambda-1)}$, and its regular module is $[\lambda]_q$ copies of the normalized divided-power projective $P_{i,1}$ after the fixed shift because $(\lambda-1)!$-type denominators do not occur in rank one and $[1]_{q}! =1$; the halving normalization is the one recorded in [F1]. [step 1.1, F1]

3.1 Rank two and the deformation boundary. At $\lambda=2$ and $n=2$ the corner satisfies $x_1^2=0$ and the nil-Hecke computation of [F1] gives $NH_2\cong P_{i,2}^{\oplus[2]_{q}!}$ with $[2]_{q}! = q+q^{-1}$; the cyclotomic quotient acts on the finitely many surviving PBW classes, so $R^\Lambda(2\alpha_i)=NH_2/(x_1^2)\cong P_{i,2}^{\oplus(q+q^{-1})}$. For the monic deformation $a_i(u)=u(u-1)$ the two coprime factors give $k[u]/(u(u-1))\cong k\oplus k$ at root $\alpha_i$, with two ordinary simple projective classes; the one-dimensional middle weight of $V(2)$ has a single class, so this deformation is not the standard graded quotient, and the standard hypothesis is substantive. [step 2.1, F1] ∎
