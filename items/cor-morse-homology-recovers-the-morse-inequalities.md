---
id: cor-morse-homology-recovers-the-morse-inequalities
kind: corollary
title: "Morse homology recovers the Morse inequalities"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-morse-homology-is-naturally-isomorphic-to-singular-homology, def-mod-two-morse-chain-group, def-signed-morse-differential-over-the-integers, def-morse-homology-of-a-morse-smale-pair, def-cellular-homology, def-euler-characteristic-of-a-finite-cw-complex, thm-euler-poincare-formula-for-finite-cw-complexes, def-nondegenerate-critical-point-nullity-index-and-coindex, cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points, lem-compactified-unstable-manifolds-give-a-cw-decomposition, def-chain-complex-in-an-abelian-category, def-axiom-of-choice, thm-cellular-chains-compute-homology-with-local-coefficients, def-homology-and-cohomology-with-local-coefficients, lem-cellular-boundary-coefficient-equals-the-morse-trajectory-count]
justified_by: []
dependency_level: 15
proof_strategy: direct
sources:
  references:
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes, complete author PDF, 115 pp.)"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 21, Sec. 7.3: the corollary c_k >= b_k, the Euler-characteristic lemma and the proof of the Morse inequalities from the truncated complex, PDF pp. 98-99"
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed. (complete author PDF, 291 pp.)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      locator: "Sec. 2.3 (the order relation with nonnegative correction polynomial, the subadditivity lemma and the Morse inequalities) and Sec. 2.5, printed pp. 46-53 and 62-67, PDF pp. 56-63 and 72-77"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology (complete author PDF of the English book, 628 pp.)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 4 Sec. 4.4: Euler characteristic and Morse inequalities from the complex, printed pp. 88-90, PDF pp. 98-100"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $M$ be a closed
manifold, let $(f,X)$ be Morse--Smale on $M$, write
$c_k=\#\operatorname{Crit}_k(f)$
([[def-nondegenerate-critical-point-nullity-index-and-coindex]],
[[cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]])
and put $b_k=\dim_\Lambda H_k(M;\Lambda)$ for a field $\Lambda$
([[thm-morse-homology-is-naturally-isomorphic-to-singular-homology]],
[[def-cellular-homology]]). Then:

1. $c_k\ge b_k$ for every $k$;
2. $\displaystyle\sum_{i=0}^{k}(-1)^{k-i}c_i\ge\sum_{i=0}^{k}(-1)^{k-i}b_i$
   for every $k$;
3. with $c(t)=\sum_kc_kt^k$, $b(t)=\sum_kb_kt^k$ and
   $r_k=\operatorname{rank}_\Lambda\partial_k$ the rank of the Morse
   differential, $c(t)=b(t)+(1+t)Q(t)$ where $Q(t)=\sum_kr_{k+1}t^k$ has
   nonnegative integer coefficients
   ([[def-mod-two-morse-chain-group]],
   [[def-signed-morse-differential-over-the-integers]],
   [[def-morse-homology-of-a-morse-smale-pair]]);
4. $\displaystyle\sum_k(-1)^kc_k=\chi(M)=\sum_k(-1)^kb_k$
   ([[def-euler-characteristic-of-a-finite-cw-complex]],
   [[thm-euler-poincare-formula-for-finite-cw-complexes]],
   [[lem-compactified-unstable-manifolds-give-a-cw-decomposition]]).

Over $\mathbb Z$ the same identities hold with $b_k$ replaced by the rank of
the finitely generated group $H_k(M;\mathbb Z)$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a closed manifold $M$, a Morse--Smale pair $(f,X)$, and a field $\Lambda$ (or $\Lambda=\mathbb Z$).

[F1] For a field $\Lambda$, take the finite free complex on the critical points whose differential is the integral signed trajectory matrix with its entries mapped from $\mathbb Z$ to $\Lambda$. The coefficient comparison identifies it, after the index sign normalization, with the cellular complex with constant coefficients $\Lambda$ ([[lem-cellular-boundary-coefficient-equals-the-morse-trajectory-count]]). The constant-local-system cellular theorem computes $H_*(M;\Lambda)$ ([[thm-cellular-chains-compute-homology-with-local-coefficients]], [[def-homology-and-cohomology-with-local-coefficients]]). Thus its chain ranks are $c_k$, its homology dimensions are $b_k$, and its differential ranks $r_k$ are nonnegative integers. Over $\mathbb Z$ the same identification uses the integral Morse complex ([[def-signed-morse-differential-over-the-integers]], [[def-morse-homology-of-a-morse-smale-pair]]) and identifies its homology with $H_*(M;\mathbb Z)$.

[F2] Rank-nullity for a finite-dimensional linear map gives $\dim\ker\partial_k=c_k-r_k$; the homology in degree $k$ is $\ker\partial_k/\operatorname{im}\partial_{k+1}$, so $b_k=c_k-r_k-r_{k+1}$; this pure linear algebra uses only the finite dimensions supplied by [F1].

[F3] The Morse--Smale CW decomposition has exactly $c_k$ cells in dimension $k$, and the Euler--Poincar\'e formula identifies the alternating sum of the cell counts with the Euler characteristic and with the alternating sum of the homology ranks ([[lem-compactified-unstable-manifolds-give-a-cw-decomposition]], [[def-euler-characteristic-of-a-finite-cw-complex]], [[thm-euler-poincare-formula-for-finite-cw-complexes]]).

## Verification

**Proof technique:** direct.

1.1 By [F1] the numbers $c_k$, $b_k$ and $r_k$ are well-defined nonnegative integers; by rank-nullity as recorded in [F2], $c_k-r_k=\dim\ker\partial_k=b_k+r_{k+1}$, hence $c_k=b_k+r_k+r_{k+1}$ for every $k$, which immediately gives $c_k\ge b_k$; this is (1). [F1, F2, given, algebra]

2.1 Multiplying $c_i=b_i+r_i+r_{i+1}$ by $(-1)^{k-i}$ and summing over $0\le i\le k$, the coefficients of $r_1,\dots,r_k$ cancel in pairs and only the $r_0$- and $r_{k+1}$-terms survive, giving $\sum_{i=0}^k(-1)^{k-i}c_i=\sum_{i=0}^k(-1)^{k-i}b_i+(-1)^k r_0+r_{k+1}$; since $r_0=0$ and $r_{k+1}\ge0$, the last term is nonnegative, which gives (2). [step 1.1, algebra]

2.2 Substituting $c_k=b_k+r_k+r_{k+1}$ into the generating series and using $\sum_kr_kt^k=tQ(t)$ and $\sum_kr_{k+1}t^k=Q(t)$ gives the polynomial identity $c(t)=b(t)+(1+t)Q(t)$ with $Q(t)=\sum_kr_{k+1}t^k\ge0$ coefficientwise; this is (3). [step 1.1, algebra]

2.3 By [F3] the alternating sum $\sum_k(-1)^kc_k$ is the Euler characteristic of the CW complex with $c_k$ cells in dimension $k$, hence equals $\chi(M)$, and the Euler--Poincar\'e formula also gives $\chi(M)=\sum_k(-1)^kb_k$; this is (4). [F3, step 1.1]

3.1 Over $\mathbb Z$ the chain groups are free of finite rank and rank-nullity for finitely generated abelian groups gives the same identities with $b_k$ the rank of $H_k(M;\mathbb Z)$; the identification $\operatorname{rank}HM_k=\operatorname{rank}H_k(M;\mathbb Z)$ is the comparison theorem of [F1], so (1)--(4) hold verbatim. [F1, step 2.2] ∎
