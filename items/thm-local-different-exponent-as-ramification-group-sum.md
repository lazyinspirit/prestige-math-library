---
id: thm-local-different-exponent-as-ramification-group-sum
kind: theorem
title: "The different exponent is the sum of lower ramification group defects"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-different-ideal-of-a-finite-local-extension
  - def-lower-ramification-groups-of-a-local-galois-extension
  - thm-local-ramification-groups-normal-and-terminate
  - thm-local-inertia-fixed-field-is-maximal-unramified-extension
  - thm-local-trace-dual-is-a-fractional-ideal
  - lem-unramified-local-extension-has-trivial-different
  - lem-different-is-transitive-in-towers-of-local-fields
  - lem-local-integers-of-finite-separable-local-extension-are-monogenic
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-countable-choice
  - thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
  - thm-artin-fixed-field-degree-theorem
  - def-finite-galois-extension-and-galois-group
  - thm-finite-galois-extension-characterizations
  - def-fixed-field-of-an-automorphism-group
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. Neukirch, Algebraic Number Theory, Chapter III, Section 2"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
    - title: "Keith Conrad, The Different Ideal, Sections 3–4"
      url: "https://kconrad.math.uconn.edu/blurbs/gradnumthy/different.pdf"
verification: {}
---

## Statement

Assume Countable Choice. Let $L/K$ be a finite Galois extension of
nonarchimedean local fields with finite residue fields, let
$\mathfrak p_L$ be the maximal ideal of $\mathcal O_L$, and define the integer
$d_{L/K}$ by $\mathfrak D_{L/K}=\mathfrak p_L^{d_{L/K}}$. Then
$$d_{L/K}=\sum_{i\ge0}(|G_i|-1),$$
where $G_i=\{\sigma\in\operatorname{Gal}(L/K):
 v_L(\sigma x-x)\ge i+1\text{ for every }x\in\mathcal O_L\}$. The sum is finite because $G_i=\{1\}$ for all sufficiently large $i$.

## Statement references

[[def-different-ideal-of-a-finite-local-extension]]

[[def-lower-ramification-groups-of-a-local-galois-extension]]

[J. Neukirch, *Algebraic Number Theory*, Chapter III, Section 2](https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf)

[Keith Conrad, *The Different Ideal*, Sections 3–4](https://kconrad.math.uconn.edu/blurbs/gradnumthy/different.pdf)

## Facts & Assumptions

**Given:** Countable Choice and the finite Galois extension $L/K$ in the Statement.

[A1] Countable Choice is needed for the local degree and monogeneity suppliers. ([[def-countable-choice]])

[F1] [[def-lower-ramification-groups-of-a-local-galois-extension]]: For integers $i\ge0$, $G_i$ is defined by the displayed valuation condition, and $G_0$ is the kernel of the residue action.

[F2] [[thm-local-ramification-groups-normal-and-terminate]]: The lower groups are nested and eventually trivial.

[F3] [[thm-local-inertia-fixed-field-is-maximal-unramified-extension]]: For $M=L^{G_0}$, the extension $M/K$ is unramified, $k_M=k_L$, and $|G_0|=e(L/K)$.

[F4] [[thm-artin-fixed-field-degree-theorem]]: For a finite group $H$ of field automorphisms, $[L:L^H]=|H|$.

[F5] [[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]]: In a finite local tower, $[E:F]=e(E/F)[k_E:k_F]$.

[F6] [[lem-local-integers-of-finite-separable-local-extension-are-monogenic]]: Under Countable Choice, equal residue fields imply that every uniformizer of the upper field generates its valuation ring over the lower one.

[F7] [[lem-unramified-local-extension-has-trivial-different]]: A finite unramified local extension has unit different.

[F8] [[lem-different-is-transitive-in-towers-of-local-fields]]: For a finite separable local tower $K\subseteq M\subseteq L$, $\mathfrak D_{L/K}=\mathfrak D_{L/M}\mathfrak D_{M/K}\mathcal O_L$.

[F9] [[thm-local-trace-dual-is-a-fractional-ideal]]: If $\mathcal O_L=\mathcal O_M[\pi]$ for a separable monogenic generator with minimal polynomial $f$, then $\mathfrak D_{L/M}=f'(\pi)\mathcal O_L$.

[F10] [[def-finite-galois-extension-and-galois-group]]: A finite Galois extension is a finite normal separable field extension, and its Galois group consists of the base-field automorphisms.

[F11] [[thm-finite-galois-extension-characterizations]]: A finite Galois extension is a splitting field of a separable polynomial, and its automorphism group has order equal to its degree.

[F12] [[def-fixed-field-of-an-automorphism-group]]: $L^{G_0}$ is the subfield fixed by every element of $G_0$.

[F13] [[def-local-field-valuation-ring-uniformizer-and-residue-field]]: A uniformizer $\pi_L$ generates the maximal ideal $\mathfrak p_L=\pi_L\mathcal O_L$.

## Proof

**Given:** The data in the Statement, including Countable Choice.

1.1 Put $M=L^{G_0}$. By [F3], $M/K$ is unramified and $k_M=k_L$. The subgroup $G_0$ fixes $M$ by [F12]. Since $L/K$ is Galois, it is the splitting field of a separable polynomial by [F11]; the same polynomial shows that $L/M$ is Galois, so its automorphism group has order $[L:M]$. By [F4], $[L:M]=|G_0|$; this group contains $G_0$ and has the same finite order, hence equals $G_0$. Applying [F5] to $L/M$ and using $[k_L:k_M]=1$ shows $e(L/M)=[L:M]$, so $L/M$ is totally ramified and has the same residue field in both fields. [A1, F3, F4, F5, F11, F12, given, algebra]

2.1 Choose a uniformizer $\pi_L$ of $L$. By [F6], $\mathcal O_L=\mathcal O_M[\pi_L]$. The transitivity result [F8] and the trivial-different result [F7] for $M/K$ give $\mathfrak D_{L/K}=\mathfrak D_{L/M}$. [A1, F6, F7, F8, F13, step 1.1, choose, algebra]

3.1 Let $f(T)$ be the monic minimal polynomial of $\pi_L$ over $M$. By [F9], $\mathfrak D_{L/M}=f'(\pi_L)\mathcal O_L$. Since $L/M$ is separable, its roots are the distinct conjugates $\tau(\pi_L)$ for $\tau\in G_0$, so differentiating $f(T)=\prod_{\tau\in G_0}(T-\tau(\pi_L))$ and evaluating at $\pi_L$ yields $f'(\pi_L)=\prod_{\substack{\tau\in G_0\\\tau\ne1}}(\pi_L-\tau(\pi_L)).$ Taking valuations, $f'(\pi_L)=\pi_L^r u$ for a unit $u\in\mathcal O_L$ and $r=v_L(f'(\pi_L))$, so $\mathfrak D_{L/K}=\mathfrak p_L^r$ by [F13] and the defining uniqueness gives $d_{L/K}=r=\sum_{\tau\in G_0,\tau\ne1}v_L(\tau(\pi_L)-\pi_L)$. [F1, F9, F13, step 2.1, algebra]

3.2 For $\tau\in G_0$, set $i(\tau)=v_L(\tau(\pi_L)-\pi_L)$, with $i(1)=+\infty$. Because $\mathcal O_L=\mathcal O_M[\pi_L]$, every $x\in\mathcal O_L$ is a polynomial in $\pi_L$ over $\mathcal O_M$, and factoring each $\tau(\pi_L)^j-\pi_L^j$ shows $v_L(\tau x-x)\ge i(\tau)$; equality is attained at $x=\pi_L$. Hence for every integer $i\ge0$, $\tau\in G_i$ exactly when $i(\tau)\ge i+1$. Also $G_i\subseteq G_0$ by [F1]. [F1, F6, step 2.1, construct, algebra]

4.1 Each nonidentity $\tau\in G_0$ belongs to exactly $i(\tau)$ of the groups $G_i$ for $i\ge0$. By [F2] only finitely many of these groups are nontrivial, so counting the pairs $(i,\tau)$ with $\tau\ne1$ and $\tau\in G_i$ gives $\sum_{i\ge0}(|G_i|-1)=\sum_{\tau\in G_0,\tau\ne1}i(\tau)=d_{L/K}$ by step 3.1. [F2, step 3.1, step 3.2, algebra] ∎
