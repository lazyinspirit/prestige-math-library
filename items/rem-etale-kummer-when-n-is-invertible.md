---
id: rem-etale-kummer-when-n-is-invertible
kind: remark
title: "The étale/Galois Kummer sequence when n is invertible"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-abelian-variety-over-a-field
  - def-algebraic-closure
  - def-axiom-of-choice
  - def-dependent-choice
  - def-etale-morphism-schemes
  - lem-galois-invariants-on-abelian-variety-points-are-rational
  - def-separable-closure-in-an-algebraic-extension
  - lem-etale-residue-extensions-finite-separable
  - thm-etale-equivalent-flat-unramified-fp
  - thm-fppf-kummer-exact-sequence-for-abelian-variety
  - thm-multiplication-by-n-has-degree-n-to-2g
  - thm-separable-closures-exist-and-are-isomorphic-over-the-base
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andrew Snowden, Abelian varieties (algebraic theory), Lecture 4"
      url: "https://open.umich.edu/sites/default/files/downloads/2014-math679-asnowden-lecture04-handout.pdf"
      locator: "The Mordell–Weil theorem section, displayed Kummer and Galois-cohomology sequences; the source treats number fields."
    - title: "J. S. Milne, Abelian Varieties, Chapter I, Theorem 8.2"
      url: "https://www.jmilne.org/math/xnotes/AVs.pdf"
      locator: "Theorem 8.2, including the étale criterion for multiplication by n."
---

## Remark

Assume the Axiom of Choice and Dependent Choice. Let $K$ be a field, let $A/K$ be an abelian variety of dimension $g$, and let $n\ge2$ be invertible in $K$. The sequence $0\to A[n]\to A\xrightarrow{[n]}A\to0$ is exact after restricting to jointly surjective families of étale morphisms. Choose an algebraic closure $\Omega/K$, let $K^s=\{x\in\Omega:x\text{ is separable over }K\}$, and set $G_K=\operatorname{Aut}_K(K^s)$ with the topology whose open subgroups fix finite Galois subextensions. Give $A(K^s)$ the discrete topology and its natural $G_K$-action. Define $H^1_{\mathrm{cts}}(G_K,M)$ to be continuous maps $c:G_K\to M$ satisfying $c(\sigma\tau)=c(\sigma)+\sigma c(\tau)$, modulo maps $c_m(\sigma)=\sigma m-m$. Then the Galois Kummer sequence is
$$0\longrightarrow A(K)/nA(K)\longrightarrow H^1_{\mathrm{cts}}(G_K,A[n](K^s))\longrightarrow H^1_{\mathrm{cts}}(G_K,A(K^s))[n]\longrightarrow0.$$
The fppf sequence remains the stated formulation when the characteristic divides $n$; this étale/Galois form is asserted here only when $n$ is invertible.

## Remark references

[Andrew Snowden, Abelian varieties (algebraic theory), Lecture 4](https://open.umich.edu/sites/default/files/downloads/2014-math679-asnowden-lecture04-handout.pdf)

[Milne, Abelian Varieties, Theorem 8.2](https://www.jmilne.org/math/xnotes/AVs.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, Dependent Choice, a field $K$, an abelian variety $A/K$ of dimension $g$, an integer $n\ge2$ with $n\in K^\times$, an algebraic closure $\Omega/K$, and its relative separable closure $K^s/K$.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[A2] Dependent Choice states that every serial relation on a nonempty set admits an infinite chain ([[def-dependent-choice]]).

[F1] [[thm-multiplication-by-n-has-degree-n-to-2g]]: under AC and DC, $[n]$ is finite flat surjective; when $n$ is invertible in $K$, it is finite étale and its kernel $A[n]$ is finite étale.

[F2] [[def-separable-closure-in-an-algebraic-extension]] and [[thm-separable-closures-exist-and-are-isomorphic-over-the-base]]: the relative separable closure $K^s$ in $\Omega$ is a separable algebraic extension of $K$ and is separably closed.

[F3] [[thm-etale-equivalent-flat-unramified-fp]]: under AC, an étale morphism locally of finite presentation is unramified.

[F4] [[lem-etale-residue-extensions-finite-separable]]: under AC, an unramified morphism locally of finite type induces finite separable residue-field extensions.

[F5] [[lem-galois-invariants-on-abelian-variety-points-are-rational]]: the points of $A(K^s)$ fixed by every element of $G_K$ are exactly $A(K)$.

## Proof

1.1 Since $n\in K^\times$, [F1] makes $[n]:A\to A$ a finite étale surjection with finite étale kernel. Pulling it back along any étale test-scheme section gives a finite étale surjective cover, so the kernel sequence is exact for the stated étale coverings. [A1, A2, F1, given]

1.2 Let $P\in A(K^s)$. Its fiber under $[n]$ is a nonempty finite étale $K^s$-scheme. Choose a point $x$ in that fiber. By [F3] and [F4], its residue field is a finite separable extension of $K^s$, hence equals $K^s$ by [F2]. Thus $[n]:A(K^s)\to A(K^s)$ is surjective, with kernel $A[n](K^s)$. Each point is defined over a finite separable subextension, so the natural $G_K$-actions on these groups are continuous for the discrete topology; all maps commute with those actions. This gives the exact sequence of discrete $G_K$-modules
$$0\to A[n](K^s)\to A(K^s)\xrightarrow{[n]}A(K^s)\to0.$$
[A1, F1, F2, F3, F4, construct]

2.1 For $P\in A(K)$ choose $Q\in A(K^s)$ with $nQ=P$ by step 1.2 and set $c_P(\sigma)=\sigma Q-Q$. This is a continuous 1-cocycle with values in $A[n](K^s)$. If $Q'=Q+T$ is another lift, then $T\in A[n](K^s)$ and $c'_P-c_P$ is the coboundary $\sigma T-T$, so its class is independent of the lift. Adding lifts shows that $P\mapsto[c_P]$ is a homomorphism. If $[c_P]=0$, then $c_P(\sigma)=\sigma T-T$ for some $T\in A[n](K^s)$, so $Q-T$ is $G_K$-invariant and belongs to $A(K)$ by [F5]; hence $P\in nA(K)$. Conversely, if $P=nR$ for $R\in A(K)$, the lift $Q=R$ gives the zero cocycle. Therefore this connecting map induces the left injection. [F1, F2, F5, step 1.2, construct, algebra]

2.2 The map from $H^1_{\mathrm{cts}}(G_K,A[n](K^s))$ to $H^1_{\mathrm{cts}}(G_K,A(K^s))$ sends a cocycle with values in $A[n](K^s)$ to one killed pointwise by $n$, so its image is killed by $n$. Conversely, let $c$ be a continuous 1-cocycle in $A(K^s)$ whose class is killed by $n$. There is $m\in A(K^s)$ with $n c(\sigma)=\sigma m-m$ for every $\sigma$. By step 1.2 choose $x\in A(K^s)$ with $nx=m$. Then $c'(\sigma)=c(\sigma)-(\sigma x-x)$ is a continuous 1-cocycle, and $n c'(\sigma)=0$ for every $\sigma$; hence it takes values in $A[n](K^s)$ and maps to $[c]$. [F1, step 1.2, construct, algebra]

3.1 If an $A[n](K^s)$-valued cocycle $d$ maps to zero in $H^1_{\mathrm{cts}}(G_K,A(K^s))$, write $d(\sigma)=\sigma x-x$ for some $x\in A(K^s)$. Since $nd=0$, the point $nx$ is $G_K$-invariant and hence lies in $A(K)$ by [F5]. Step 2.1 identifies $d$ with the connecting cocycle of $nx$. Thus the kernel of the middle map is exactly the image of the left map. Steps 2.1 and 2.2, together with this kernel calculation, prove the displayed short exact sequence. [F5, step 2.1, step 2.2, construct, algebra] ∎
