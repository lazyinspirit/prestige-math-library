---
id: def-valuative-dimension-and-boundedness
kind: definition
title: Valuative dimension and degreewise bounded towers
status: published
domain: mathematics
deps:
  - lem-adjudicate-30c6e58e6bd4-domain-valuative-compatibility
  - math:def-commutative-ring
  - math:def-prime-and-maximal-ideals
  - math:def-subring
  - math:def-field-of-fractions
  - math:thm-field-of-fractions-is-a-field-and-the-domain-embeds
  - math:def-prime-spectrum-and-vanishing-sets
  - math:def-quotient-ring
  - math:thm-quotient-is-domain-iff-ideal-prime
  - math:def-scheme
  - math:def-affine-open-subscheme
  - math:def-affine-scheme
  - def-decreasing-filtered-spectrum
  - def-stable-spectra-interface
  - math:def-axiom-of-choice
dependency_roles:
  lem-adjudicate-30c6e58e6bd4-domain-valuative-compatibility: mathematical-premise
  math:def-commutative-ring: mathematical-premise
  math:def-prime-and-maximal-ideals: mathematical-premise
  math:def-subring: mathematical-premise
  math:def-field-of-fractions: mathematical-premise
  math:thm-field-of-fractions-is-a-field-and-the-domain-embeds: mathematical-premise
  math:def-prime-spectrum-and-vanishing-sets: mathematical-premise
  math:def-quotient-ring: mathematical-premise
  math:thm-quotient-is-domain-iff-ideal-prime: mathematical-premise
  math:def-scheme: mathematical-premise
  math:def-affine-open-subscheme: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  def-decreasing-filtered-spectrum: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 5
formulation_deps:
  - math:def-commutative-ring
  - math:def-prime-and-maximal-ideals
  - math:def-subring
  - math:def-field-of-fractions
  - math:thm-field-of-fractions-is-a-field-and-the-domain-embeds
  - math:def-prime-spectrum-and-vanishing-sets
  - math:def-quotient-ring
  - math:thm-quotient-is-domain-iff-ideal-prime
  - math:def-scheme
  - math:def-affine-open-subscheme
  - math:def-affine-scheme
  - def-decreasing-filtered-spectrum
  - def-stable-spectra-interface
  - math:def-axiom-of-choice
argument_deps:
  - lem-adjudicate-30c6e58e6bd4-domain-valuative-compatibility
  - math:def-commutative-ring
  - math:def-prime-and-maximal-ideals
  - math:def-subring
  - math:def-field-of-fractions
  - math:thm-field-of-fractions-is-a-field-and-the-domain-embeds
  - math:def-prime-spectrum-and-vanishing-sets
  - math:def-quotient-ring
  - math:thm-quotient-is-domain-iff-ideal-prime
  - math:def-scheme
  - math:def-affine-open-subscheme
  - math:def-affine-scheme
  - def-decreasing-filtered-spectrum
  - def-stable-spectra-interface
  - math:def-axiom-of-choice
---

## Definition
All rings are commutative with identity. The **Krull dimension** of a nonzero ring is the supremum, in the nonnegative integers together with infinity, of the lengths $n$ of strict chains of prime ideals $\mathfrak p_0\subsetneq\cdots\subsetneq\mathfrak p_n$. The zero ring has dimension $-1$. A **domain** is a nonzero ring without zero divisors. Its fraction field is denoted $\operatorname{Frac}(D)$. A **valuation overring** of a domain $D$ is a subring $V$ of $\operatorname{Frac}(D)$ containing $D$ such that, for every nonzero element $x$ of that field, at least one of $x$ and $x^{-1}$ lies in $V$.

The **valuative dimension** $\dim_v D$ of a domain $D$ is the supremum of the Krull dimensions of its valuation overrings. For a ring $A$, put $\dim_v A=\sup_{\mathfrak p\in\operatorname{Spec}A}\dim_v(A/\mathfrak p)$, with the supremum of the empty set equal to $-1$. For a scheme $X$, put $\dim_v X=\sup_{\operatorname{Spec}A\subseteq X}\dim_v A$, over all affine open subschemes, again taking the empty supremum to be $-1$. The scheme has **finite valuative dimension** if this value is finite.

Let $F^jE$ be a decreasing filtration of a spectrum $E$, and let $S$ be a specified set of integers. It is **degreewise bounded above in filtration on $S$** if, for every $i\in S$, there is an integer $N(i)$ such that $\pi_iF^jE=0$ for all $j\geq N(i)$. If $S=\mathbb Z$, it is simply **degreewise bounded above in filtration**. The bound may depend on $i$. This is a condition on the homotopy groups of the stages; completeness is the separately defined condition that the inverse limit of the tower is the zero spectrum.

## Facts & Assumptions
**Given:** A scheme $X$, or a decreasing filtration $F^\bullet E$ and a set $S\subseteq\mathbb Z$.

**Goal:** Justify the quantities and conditions in the definition.

[F1] Rings and subrings use the unital conventions of [[math:def-commutative-ring]] and [[math:def-subring]]. Prime ideals are proper ideals satisfying the product criterion of [[math:def-prime-and-maximal-ideals]], and their set is [[math:def-prime-spectrum-and-vanishing-sets]]. Quotient rings are constructed in [[math:def-quotient-ring]]; [[math:thm-quotient-is-domain-iff-ideal-prime]] makes every prime quotient a domain. The fraction construction is [[math:def-field-of-fractions]], and [[math:thm-field-of-fractions-is-a-field-and-the-domain-embeds]] supplies its field structure and the embedding $d\mapsto d/1$.

[F2] A scheme is as in [[math:def-scheme]]. Its affine open subschemes carry the restricted structure sheaf, as in [[math:def-affine-open-subscheme]]. An affine open $U$ has coordinate ring canonically isomorphic, after an affine presentation, to $\Gamma(U,\mathcal O_X|_U)$, as in [[math:def-affine-scheme]].

[F3] [[def-decreasing-filtered-spectrum]] supplies the decreasing tower, its augmentation and its tower-vanishing convention for completeness. [[def-stable-spectra-interface]] supplies spectra, functorial integer-indexed homotopy groups, the zero spectrum and small inverse limits.

[F4] Retain the Axiom of Choice, [[math:def-axiom-of-choice]], in the supplied spectral foundations and in the classical valuative-compatibility argument of [F5]. For spectra use the compatible universe and smallness conventions of [[def-stable-spectra-interface]]. Forming the displayed suprema and writing the degreewise quantifiers requires no additional choice of witnesses.

[F5] [[lem-adjudicate-30c6e58e6bd4-domain-valuative-compatibility]] proves that, on a domain, the prime-quotient supremum agrees with the valuation-overring formula.

## Justification
1.1 By [F1], $D$ embeds in its fraction field, which is itself a valuation overring, so the supremum defining $\dim_v D$ is over a nonempty set; prime quotients are domains. Prime ideals, subrings of a fixed field, and finite prime chains form sets. By [F2], affine opens form a subset of the power set of $|X|$, and one may use the specified ring $\Gamma(U,\mathcal O_X|_U)$ for each such open. By [F5], the domain and general-ring formulas agree whenever both apply. Thus all the suprema exist in $\{-1,0,1,\ldots,\infty\}$ with the stated empty convention. For a ring isomorphism $f:A\to B$, the maps $\mathfrak p\mapsto f(\mathfrak p)$ and $a+\mathfrak p\mapsto f(a)+f(\mathfrak p)$ give an inclusion-preserving bijection of primes and isomorphisms of the corresponding domain quotients. For a domain isomorphism $g:D\to D'$, the fraction map $a/b\mapsto g(a)/g(b)$ is well-defined and invertible by the fraction construction in [F1]. It bijects valuation overrings, since it preserves containment of the domain and the condition on $x$ or $x^{-1}$, and preserves their prime-chain lengths. Therefore ring valuative dimension is isomorphism-invariant, so [F2] makes the scheme expression independent of the presentation of each affine open. [F1, F2, F4, F5, given, construct]

2.1 Under the spectral conventions of [F4], [F3] makes each $\pi_iF^jE$ a well-defined group and supplies the inverse limit and zero spectrum. The displayed quantifiers therefore give a definite property of the tower and the specified set of degrees, with the bound specified separately for each degree. Completeness is instead the stated condition on the inverse limit. These two conditions are recorded separately; neither definition includes a uniform bound or injectivity of transition maps. [F3, F4, given, step 1.1] ∎
