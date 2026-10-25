---
id: cex-lca-fourier-inversion-is-not-an-everywhere-statement-for-arbitrary-lone-functions
kind: counterexample
title: LCA Fourier inversion is not an everywhere statement for arbitrary L^1 functions
dependency_level: 1
deps:
- def-measure-null-set-and-almost-everywhere
- def-fourier-transform-on-an-lca-group
- def-l-p-space-as-a-quotient-by-null-functions
- def-left-haar-integral-and-left-haar-measure
- def-radon-measure-on-an-lch-space
- def-locally-compact-space
- def-topological-group
- def-hausdorff-space
- lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure
- lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets
- def-pontryagin-dual-and-compact-open-topology
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
  - title: "Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards Number Theory, Appendix C.2-C.3 (course-hosted full text)"
    url: "https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Let $G$ be a nondiscrete locally compact Hausdorff abelian group with Haar measure $m_G$, and fix a Haar measure $m_{\widehat G}$ on its dual. If $f\in L^1(G,m_G)$ and $\widehat f\in L^1(\widehat G,m_{\widehat G})$, the inverse integral
$$F_f(x):=\int_{\widehat G}\widehat f(\gamma)\gamma(x)\,dm_{\widehat G}(\gamma)$$
is defined at every $x\in G$ and depends only on the $L^1$ class of $f$. For every $x_0\in G$, that class has a measurable representative whose value at $x_0$ differs from $F_f(x_0)$ and which agrees with any given representative away from $x_0$. Thus the inverse integral cannot recover an arbitrary representative pointwise.

## Facts & Assumptions

**Given:** A nondiscrete locally compact Hausdorff abelian group $G$, Haar measure $m_G$, a fixed Haar measure $m_{\widehat G}$ on its dual, a class $f\in L^1(G,m_G)$ with $\widehat f\in L^1(\widehat G,m_{\widehat G})$, a measurable representative $u$ of $f$, and $x_0\in G$.

[F1] There is a compact neighborhood $K$ of the identity and an open neighborhood $U$ with $0\in U\subseteq K$ ([[def-locally-compact-space]], [[def-topological-group]], [[lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure]]). Haar measure is finite on compact sets, so $m_G(K)<\infty$ ([[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]]).

[F2] The $L^1$ space is the quotient by null functions, so measurable representatives agreeing almost everywhere determine the same class ([[def-l-p-space-as-a-quotient-by-null-functions]], [[def-measure-null-set-and-almost-everywhere]]).

[F3] The Fourier transform is defined on the $L^1$ class; equal representatives have equal transforms ([[def-fourier-transform-on-an-lca-group]], [[def-pontryagin-dual-and-compact-open-topology]]). Since every character has modulus one, the inverse integral is absolutely convergent at each point when $\widehat f\in L^1(\widehat G,m_{\widehat G})$.



**Proof technique:** direct.

## Counterexample

1.1 (Singletons are Haar-null.) Put $a:=m_G(\{0\})$, which is finite because $\{0\}$ is compact. If $a>0$, translation invariance gives $m_G(\{x\})=a$ for every $x\in G$. The open neighborhood $U$ in [F1] is infinite: if it were finite, then $U\setminus\{0\}$ would be closed in the Hausdorff space $G$, making $\{0\}=U\cap(G\setminus(U\setminus\{0\}))$ open and $G$ discrete. For every positive integer $N$, choose $N$ distinct points of $U$; their disjoint singletons lie in $K$, so finite additivity gives $Na\le m_G(K)$. Since this holds for all $N$ and $m_G(K)<\infty$, $a=0$. Translation invariance then gives $m_G(\{x\})=0$ for every $x\in G$. [F1, algebra]

2.1 (A point change preserves the class.) Define $\widetilde u$ to agree with $u$ off $\{x_0\}$ and choose its value at $x_0$ to be any complex number different from $u(x_0)$ and from $F_f(x_0)$. Such a value exists because $\mathbb C$ is infinite. By step 1.1, $u$ and $\widetilde u$ agree almost everywhere, so [F2] gives $[u]=[\widetilde u]=f$. [F2, step 1.1]

3.1 (The inverse integral cannot distinguish the representatives.) By [F3], $\widehat u=\widehat{\widetilde u}=\widehat f$ on $\widehat G$. Therefore both representatives give the same absolutely convergent inverse integral $F_f(x_0)$, while $\widetilde u(x_0)\ne F_f(x_0)$ by construction. This is an explicit failure of pointwise recovery for an arbitrary representative. [F3, step 2.1]

4.1 The modification leaves the $L^1$ class and its Fourier transform unchanged but changes the value at $x_0$; hence no inverse formula determined by the transform can hold everywhere for every representative. [step 1.1, step 3.1] ∎
