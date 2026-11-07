---
id: thm-first-lower-ramification-group-is-p-group
kind: theorem
title: "The first lower ramification group is a p-group"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - lem-nonarchimedean-local-valuations-are-intrinsic
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-finite-galois-extension-and-galois-group
  - def-lower-ramification-groups-of-a-local-galois-extension
  - def-extension-degree-and-finite-extension
  - thm-local-inertia-fixed-field-is-maximal-unramified-extension
  - thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, version 3.08, Chapter VII, Lemma 7.57 and Theorem 7.58"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, Chapter IV, §§8.2–8.3"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
verification: {}
---

## Statement

Assume Countable Choice. Let $L/K$ be a finite Galois extension of
nonarchimedean local fields with finite residue fields of characteristic $p$.
Write $G=\mathrm{Gal}(L/K)$ and let $G_i$ be the lower ramification groups
for $i\ge0$. Then $G_0/G_1$ embeds into $k_L^\times$, and for every $i\ge1$
the quotient $G_i/G_{i+1}$ embeds into the additive group of $k_L$. In
particular, $G_0/G_1$ has order prime to $p$ and $G_1$ is a $p$-group.

## Statement references

[[def-lower-ramification-groups-of-a-local-galois-extension]]

[[thm-local-inertia-fixed-field-is-maximal-unramified-extension]]

[J. S. Milne, *Algebraic Number Theory*, Chapter VII, Lemma 7.57 and Theorem 7.58](https://www.jmilne.org/math/CourseNotes/ANT.pdf)

[I. B. Fesenko and S. V. Vostokov, *Local Fields and Their Extensions*, Chapter IV, §§8.2–8.3](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

## Facts & Assumptions

**Given:** Countable Choice, a finite Galois extension $L/K$ of
nonarchimedean local fields with residue characteristic $p$, and a
uniformizer $\varpi_L$ of $L$.

[A1] [[def-countable-choice]]: every countable family of nonempty sets has
a choice function.

[F1] [[def-local-field-valuation-ring-uniformizer-and-residue-field]]:
$\mathcal O_L$ is a complete discrete valuation ring with finite residue
field $k_L$.

[F2] [[thm-local-inertia-fixed-field-is-maximal-unramified-extension]]:
$E_0=L^{G_0}$ is the maximal unramified intermediate extension, has
residue field $k_L$, and $|G_0|=e(L/K)$.

[F3] [[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]]:
under [A1], the degree of each finite local extension is its ramification
index times its residue degree.

[F4] [[def-lower-ramification-groups-of-a-local-galois-extension]]: for
$i\ge0$, $\sigma\in G_i$ exactly when
$v_L(\sigma(x)-x)\ge i+1$ for every $x\in\mathcal O_L$; in particular
$G_0$ is the inertia subgroup.

[F5] [[lem-nonarchimedean-local-valuations-are-intrinsic]]: without Choice every field automorphism preserves the given complete normalized local valuation; under CC, the given valuation on any finite extension equals the normalized extending valuation, with $v_L|_K=e v_K$. [[def-extension-degree-and-finite-extension]] gives a finite $K$-basis. Subgroup closure and termination are proved directly below using an integral scaled basis.

## Proof

1.1 By the CC finite-extension clause of [F5], the given valuations on $K$ and $L$ satisfy $v_L|_K=e v_K$ with $e>0$. Every intermediate field is equipped with the complete normalized extension of $v_K$ constructed by [F3]; applying [F5] again identifies its extensions and normalized restrictions inside $L$. In particular all subsequent uses of [F2] and [F3] have compatible valuations. The choice-free automorphism clause of [F5] preserves the given valuation and valuation ring. The identity lies in each $G_i$; for $\sigma,\tau\in G_i$, expand $\sigma\tau(x)-x=\sigma(\tau x-x)+(\sigma x-x)$ and apply the ultrametric inequality. The inverse identity $\sigma^{-1}x-x=\sigma^{-1}(x-\sigma x)$ gives inverse closure, so each $G_i$ is a subgroup. Conjugation by an automorphism permutes the integral elements and preserves valuation, so each $G_i$ is normal in $G$. Choose a finite $K$-basis and scale every basis element by a sufficiently large power of a base uniformizer to make it integral. For each nonidentity $\sigma$, a moved integral basis element has a finite nonnegative difference valuation. The minimum over its moved basis elements, followed by the maximum over the finitely many nonidentity automorphisms, gives an integer $R\geq0$; use $R=0$ for the trivial group. For every $i\geq R$, each nonidentity $\sigma$ violates the defining inequality on one of these integral elements. Hence $G_i=1$ eventually. This uses only the given CC and finite choices. [A1, F1, F4, F5, given, choose, algebra]

1.2 By [F2], $E_0=L^{G_0}$ has the same residue field as $L$ and $[L:E_0]=|G_0|=e(L/K)=e(L/E_0)$. Thus $L/E_0$ is totally ramified of degree $e:=e(L/E_0)$. Since $v_L(\varpi_L)=1$ and $v_L(E_0^\times)=e\mathbb Z$, the elements $1,\varpi_L,\ldots,\varpi_L^{e-1}$ are linearly independent over $E_0$: in any nontrivial linear combination, the nonzero summands have distinct valuations modulo $e$, so the least-valued summand cannot cancel. They form an $E_0$-basis of $L$ by the degree equality. [A1, F2, F3, given, algebra]

2.1 Write $x=\sum_{j=0}^{e-1}c_j\varpi_L^j$ with $c_j\in E_0$. If $x\in\mathcal O_L$ and some nonzero $c_j$ has negative $E_0$-valuation, then the values $v_L(c_j\varpi_L^j)=e\,v_{E_0}(c_j)+j$ are distinct modulo $e$ and have a unique minimum, which makes $v_L(x)<0$, a contradiction. Hence all coefficients lie in $\mathcal O_{E_0}$ and $\mathcal O_L=\mathcal O_{E_0}[\varpi_L]$. [F1, step 1.2, algebra]

3.1 Define $\theta:G_0\to k_L^\times$ by $\theta(\sigma)=\overline{\sigma(\varpi_L)/\varpi_L}$. Since every $\sigma\in G_0$ fixes $E_0$ and acts trivially on $k_L$, the identity $(\sigma\tau)(\varpi_L)/\varpi_L =\sigma(\tau(\varpi_L)/\varpi_L)\,\sigma(\varpi_L)/\varpi_L$ shows that $\theta$ is a homomorphism. Its kernel consists of those $\sigma\in G_0$ with $\sigma(\varpi_L)-\varpi_L\in \varpi_L^2\mathcal O_L$. For such $\sigma$, each polynomial $x\in\mathcal O_{E_0}[T]$ satisfies $x(\sigma(\varpi_L))-x(\varpi_L)\in\varpi_L^2\mathcal O_L$; by step 2.1 these polynomials exhaust $\mathcal O_L$, so [F4] gives $\sigma\in G_1$. Conversely, [F4] applied to $x=\varpi_L$ shows every $\sigma\in G_1$ is in $\ker\theta$. Thus $\ker\theta=G_1$ and $G_0/G_1$ embeds into $k_L^\times$. [F1, F2, F4, step 2.1, algebra, construct]

3.2 For $i\ge1$ define $\theta_i:G_i\to(k_L,+)$ by $\theta_i(\sigma)=\overline{(\sigma(\varpi_L)-\varpi_L)/\varpi_L^{i+1}}$. For $\sigma,\tau\in G_i$, use $(\sigma\tau)(\varpi_L)-\varpi_L =\sigma(\tau(\varpi_L)-\varpi_L)+(\sigma(\varpi_L)-\varpi_L)$. Because $\sigma\in G_0$ acts trivially on the residue field and $\sigma(\varpi_L)/\varpi_L\equiv1\pmod{\varpi_L^i}$, reduction after division by $\varpi_L^{i+1}$ gives $\theta_i(\sigma\tau)=\theta_i(\sigma)+\theta_i(\tau)$. Its kernel is the set of $\sigma$ for which $\sigma(\varpi_L)-\varpi_L\in\varpi_L^{i+2}\mathcal O_L$. For each $j\ge1$, $\sigma(\varpi_L^j)-\varpi_L^j=(\sigma(\varpi_L)-\varpi_L) \sum_{a=0}^{j-1}\sigma(\varpi_L)^{j-1-a}\varpi_L^a$; the sum is integral. Expanding every $x\in\mathcal O_L=\mathcal O_{E_0}[\varpi_L]$ as in step 2.1 therefore shows that this condition is equivalent to $v_L(\sigma(x)-x)\ge i+2$ for every $x\in\mathcal O_L$, so $\ker\theta_i=G_{i+1}$ by [F4]. Hence each $G_i/G_{i+1}$ embeds into the additive group of $k_L$ and has $p$-power order. [F1, F4, step 2.1, algebra, construct]

4.1 The multiplicative group $k_L^\times$ has order $|k_L|-1$, prime to $p$, so step 3.1 shows $G_0/G_1$ has order prime to $p$. By step 1.1, the filtration $G_1\supseteq G_2\supseteq\cdots$ terminates at $\{1\}$. Step 3.2 shows each successive quotient is a finite $p$-group; multiplying their orders gives that $G_1$ is a finite $p$-group. [F1, step 1.1, step 3.1, step 3.2, algebra] ∎
