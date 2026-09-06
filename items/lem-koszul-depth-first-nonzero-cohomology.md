---
id: lem-koszul-depth-first-nonzero-cohomology
title: Depth from first nonzero Koszul cohomology
kind: lemma
status: draft
origin: pipeline
deps: [def-depth-with-respect-to-an-ideal, def-koszul-complex-of-a-sequence-with-coefficients, thm-regular-sequences-give-acyclic-koszul-complexes, thm-finiteness-of-associated-primes, lem-zero-divisor-annihilator-contained-in-associated-prime, lem-finite-prime-avoidance, thm-krull-height-theorem, lem-depth-quotient-by-regular-element]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Statement

Let $(R,\mathfrak m)$ be Noetherian local, let $M$ be a nonzero finite
$R$-module, and let $I=(x_1,\ldots,x_n)\subseteq\mathfrak m$. For the Koszul
complex $K_\bullet(\mathbf x;M)$ and its dual cochain complex
$K^\bullet(\mathbf x;M)$,
$$\operatorname{depth}_I(M) =\min\{i:H^i(K^\bullet(\mathbf x;M))\ne0\} =n-\max\{j:H_j(K_\bullet(\mathbf x;M))\ne0\}.$$

## Facts & Assumptions

**Given:** $I\subseteq\mathfrak m$, so $M/IM\ne0$ by Nakayama. The maximal ideal of a Noetherian local ring is finitely generated, so the height theorem makes $\dim R$ finite; successive regular elements strictly lower support dimension. Hence the depth is finite, as are the degrees of the finite Koszul complex.

## Proof

**Proof technique:** direct.

1.1 Induct on $\operatorname{depth}_I(M)$. At depth $0$, prime avoidance gives an associated prime $\mathfrak p=\operatorname{ann}(m)$ containing $I$; hence $0\ne m\in0:_M I=H^0(K^\bullet(\mathbf x;M))$. If the depth is positive, choose an $M$-regular $y\in I$. Adjoining $y$, an $R$-linear combination of the $x_i$, does not change the first nonzero Koszul cohomology degree: multiplication by $y$ on $K^\bullet(\mathbf x;M)$ is null-homotopic, so its mapping cone has cohomology $H^i(K)\oplus H^{i-1}(K)$. [given]

2.1 Reorder the enlarged sequence with $y$ first. Since $y$ is regular, its two-term Koszul cochain complex has only $M/yM$ in degree $1$. Thus the first nonzero degree for the enlarged complex is one plus that for the induced Koszul complex on $M/yM$; explicitly, `lem-depth-quotient-by-regular-element` gives $\operatorname{depth}_I(M/yM)=\operatorname{depth}_I(M)-1$. Induction proves the first equality. The finite free Koszul complex is self-dual: $K^i(\mathbf x;M)\cong K_{n-i}(\mathbf x;M)$, so $H^i\cong H_{n-i}$ and the first nonzero cohomology degree is $n$ minus the last nonzero homology degree. [step 1.1, algebra] ∎
