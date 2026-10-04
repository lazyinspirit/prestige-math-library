---
id: lem-hilbert-uniform-regularity-fixed-polynomial
kind: lemma
title: "Uniform regularity for all quotients with a fixed Hilbert polynomial"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-dependent-choice
  - lem-hilbert-regularity-propagation
  - thm-hilbert-polynomial-coherent-sheaf
  - thm-serre-vanishing
  - thm-cohomology-projective-space-twisting-sheaves
  - lem-proper-cohomology-field-extension
  - thm-finiteness-of-associated-primes
  - thm-zero-divisors-on-a-module
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Nitin Nitsure, Construction of Hilbert and Quot Schemes, Sections 2–5"
      url: "https://arxiv.org/pdf/math/0504590"
    - title: "Alexander Grothendieck, Les schémas de Hilbert, Bourbaki 221, Sections 2–3"
      url: "https://www.numdam.org/item/SB_1960-1961__6__249_0.pdf"
---

## Statement

Assume AC and DC. Fix $n,p\ge0$ and a numerical polynomial $Q$. There is an integer $R(n,p,Q)$, independent of the field, such that every coherent subsheaf $K\subseteq\mathcal O_{\mathbb P^n_k}^{p}$ with Hilbert polynomial $Q$ is $R$-regular. Consequently, for fixed $P$, one integer makes the kernel and quotient of every $\mathcal O^p\twoheadrightarrow F$ with polynomial $P$ regular, over every field. More generally the same assertion holds for kernels and quotients of a fixed finite sum $E=\bigoplus_j\mathcal O(a_j)$ with fixed quotient polynomial.

## Facts & Assumptions

**Given:** The hypotheses in the statement and AC and DC, inherited from the scheme, cohomology, and finite-module suppliers ([[def-axiom-of-choice]], [[def-dependent-choice]]).

[F1] Regularity propagation and multiplication are [[lem-hilbert-regularity-propagation]]. Euler characteristic is a polynomial, additive in exact sequences ([[thm-hilbert-polynomial-coherent-sheaf]]). Serre vanishing is [[thm-serre-vanishing]].

[F2] Cohomology commutes with extension of fields ([[lem-proper-cohomology-field-extension]]). Projective-space cohomology gives $h^0(\mathcal O(t))=\binom{n+t}{n}$ for $t\ge0$ and shows that $\mathcal O$ is $0$-regular ([[thm-cohomology-projective-space-twisting-sheaves]]). Associated points are finite as in [[thm-finiteness-of-associated-primes]], [[thm-zero-divisors-on-a-module]].

## Proof

1.1 Extend to an infinite field as in [F2]; it suffices to bound regularity there. Induct on $n$. In dimension zero every coherent sheaf is regular for every integer, so take $R=0$. For $n>0$, choose a hyperplane avoiding the associated points of both $K$ and $\mathcal O^p/K$. Its equation is injective on both, so the Tor exact sequence gives $K_H\subseteq\mathcal O_H^p$, and $0\to K(t-1)\to K(t)\to K_H(t)\to0$ is exact. The polynomial of $K_H$ is $\Delta Q(t)=Q(t)-Q(t-1)$; hence by induction it is $a$-regular with $a=\max(0,R(n-1,p,\Delta Q))$, depending only on the fixed data. [F1, F2, construct]

2.1 For $i\ge2$ and $t\ge a-i$, both $H^{i-1}(K_H(t+1))$ and $H^i(K_H(t+1))$ vanish by [F1]. Thus $H^i(K(t))\to H^i(K(t+1))$ is an isomorphism. Iterating to a Serre-vanishing twist proves $H^i(K(t))=0$ in this entire range. For $t\ge a$, $H^1(K(t-1))\twoheadrightarrow H^1(K(t))$, so $h^1$ is nonincreasing. If two consecutive dimensions agree, the restriction $H^0(K(t))\to H^0(K_H(t))$ is surjective. The multiplication argument in [F1] propagates that surjectivity to every larger twist; the same exact sequence then makes $h^1$ constant thereafter, so Serre vanishing forces it to be zero. Therefore every positive value of $h^1(K(t))$ strictly decreases at the next twist for $t\ge a$. [F1, step 1.1, algebra]

3.1 At twist $a$, the higher groups with index at least two vanish, so $h^1(K(a))=h^0(K(a))-Q(a)\le p\binom{n+a}{n}-Q(a)$. Put $B=\max(0,p\binom{n+a}{n}-Q(a))$ and $R=a+B+1$. Step 2.1 gives $H^1(K(R-1))=0$ after at most $B$ decreases and gives $H^i(K(R-i))=0$ for $i\ge2$. Hence $K$ is $R$-regular. This recursive integer is enough; no polynomial formula for the bound is claimed. For $\mathcal O^p\twoheadrightarrow F$, use $Q=p\binom{n+t}{n}-P(t)$, increase $R$ to at least one, and use the long exact sequence: regularity of $K$ and $\mathcal O^p$ makes $F$ $R$-regular. [F1, F2, step 2.1, algebra]

4.1 For $E=\bigoplus_j\mathcal O(a_j)$ choose $b\ge\max_j a_j$. On each summand multiplication by $x_0^{b-a_j}$ embeds $\mathcal O(a_j)$ into $\mathcal O(b)$; multiplication is injective since projective space over a field is integral. Thus $K(-b)\subseteq\mathcal O^p$ has the fixed polynomial $\chi(E(t-b))-P(t-b)$, and step 3.1 bounds its regularity uniformly. Twisting back bounds $K$; increase the bound to make every summand of $E$ regular as well, and the exact sequence bounds $F$. This argument needs no information about the individual quotient beyond its polynomial. [F1, step 3.1, algebra] ∎
