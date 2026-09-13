---
id: thm-a-homomorphism-from-a-connected-lie-group-is-determined-by-its-differential-at-the-identity
kind: theorem
title: A homomorphism from a connected Lie group is determined by its differential at the identity
status: published
origin: pipeline
deps: ["def-countable-choice", "prop-exponential-map-is-natural-for-lie-group-homomorphisms", "cor-the-exponential-map-is-a-local-diffeomorphism-at-zero", "def-lie-group-homomorphism-isomorphism-and-automorphism", "def-connected-space"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Proposition 3.9 and complete proof, printed page 31
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $G$ and $H$ be finite-dimensional real Lie
groups, with $G$ connected. If two Lie-group homomorphisms $F_1,F_2:G\to H$
satisfy

$$d(F_1)_e=d(F_2)_e:T_eG\longrightarrow T_eH,$$

then $F_1=F_2$. The countable-choice assumption is inherited exactly from the
supplied exponential-map results.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, finite-dimensional real Lie groups $G,H$ with
$G$ connected, and Lie-group homomorphisms $F_1,F_2:G\to H$ with equal
differentials at the identity $e\in G$.

[F1] $\mathrm{AC}_\omega$ is countable choice. [[def-countable-choice]].

[F2] A Lie-group homomorphism intertwines exponential maps:
$F(\exp_GX)=\exp_H(dF_eX)$. 
[[prop-exponential-map-is-natural-for-lie-group-homomorphisms]].

[F3] There are open neighborhoods $V\subseteq T_eG$ of $0$ and $U\subseteq G$
of $e$ such that $\exp_G|_V:V\to U$ is a diffeomorphism.
[[cor-the-exponential-map-is-a-local-diffeomorphism-at-zero]].

[F4] A Lie-group homomorphism is smooth, preserves products, identities, and
inverses. [[def-lie-group-homomorphism-isomorphism-and-automorphism]].

[F5] A connected topological space has no partition into two nonempty clopen
subsets. [[def-connected-space]].

## Proof

**Proof technique:** direct.

1.1 Fix the neighborhoods $V,U$ supplied by [F3]. If $g\in U$, then $g=\exp_GX$ for a unique $X\in V$. By [F2] and the hypothesis on the differentials, $F_1(g)=\exp_H(d(F_1)_eX)=\exp_H(d(F_2)_eX)=F_2(g)$. Thus $F_1$ and $F_2$ agree on the open identity neighborhood $U$. [F2, F3]

2.1 Let $K=\{g\in G:F_1(g)=F_2(g)\}$. The identity belongs to $K$. If $g,h\in K$, then [F4] gives $F_1(gh)=F_1(g)F_1(h)=F_2(g)F_2(h)=F_2(gh)$, and similarly $F_1(g^{-1})=F_1(g)^{-1}=F_2(g)^{-1}=F_2(g^{-1})$. Hence $K$ is a subgroup of $G$, and step 1.1 gives $U\subseteq K$. [F4, step 1.1]

3.1 For each $k\in K$, the translate $kU$ is open and is contained in $K$; conversely every $k\in K$ belongs to $kU$ because $e\in U$. Therefore $K=\bigcup_{k\in K}kU$ is open. Every left coset $gK$ is then open as well. If $g\notin K$, the coset $gK$ is disjoint from $K$: an element $x\in gK\cap K$ would imply $g=xk^{-1}\in K$. Hence $G\setminus K=\bigcup_{g\notin K}gK$ is open, so $K$ is also closed. [F4, step 2.1]

4.1 The set $K$ is nonempty because it contains $e$. If its complement were nonempty, step 3.1 would partition $G$ into the two nonempty clopen sets $K$ and $G\setminus K$, contradicting connectedness by [F5]. Thus $K=G$, which means $F_1=F_2$. [F5, step 2.1, step 3.1]

5.1 Lie groups are nonempty and boundaryless. In dimension zero a connected Lie group is a one-point discrete space, so the conclusion also follows directly; dimension one requires no change. There is no metric, degeneracy, or endpoint issue. The only choice use is the stated $\mathrm{AC}_\omega$ inherited through [F2] and [F3]. Fixing one supplied neighborhood pair and forming unions over already specified sets select no family of witnesses. No biconditional is asserted. [F1, F2, F3, F4, F5, step 1.1, step 2.1, step 3.1, step 4.1] ∎
