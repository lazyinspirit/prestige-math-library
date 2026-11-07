---
id: thm-johnston-nickel-etnc-p-part-fitting-criterion
kind: theorem
title: Truncated Cohomology Fitting Criterion for the Negative-Tate ETNC
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 24
deps:
  - def-relative-k-group-and-etnc-for-a-tate-motive
  - def-truncated-etale-complex-for-tate-twists
  - def-equivariant-stickelberger-element-at-nonpositive-integer
  - thm-siegel-rationality-of-equivariant-stickelberger-special-values
  - def-noncommutative-maximal-fitting-invariant
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Johnston and Nickel, An Unconditional Proof of the Abelian Equivariant Iwasawa Main Conjecture and Applications
      url: https://arxiv.org/pdf/2010.03186
      locator: Theorem 12.4 proof; cited criterion in Nickel 2013, Theorem 5.10.
    - title: Andreas Nickel, Equivariant Iwasawa theory and non-abelian Stark-type conjectures
      url: https://www.unibw.de/timor/mitarbeiter/univ-prof-dr-andreas-nickel/nickel/mc.pdf
      locator: Theorem 5.10 and complete proof, printed pp. 23–25.
verification: {}
---

## Statement

Let $p$ be odd, let $L/K$ be a finite Galois CM extension of number fields, let $G=\operatorname{Gal}(L/K)$, let $r<0$, and choose finite nonempty disjoint sets $S,T$ of places of $K$ with $S$ containing the places above $p$, every ramified place, and every infinite place. Let $j$ be complex conjugation and put $e_r=(1-(-1)^rj)/2$. Let $\#$ be the involution on $\mathbb Z_p[G]$ sending $g$ to $g^{-1}$, and write $H_T^i(\mathcal O_{K,S},e_r\mathbb Z_p[G]^\#(1-r))$ for the cohomology of the truncated étale complex with this coefficient system. Then these groups vanish for $i\ne2$, while $H_T^2$ is cohomologically trivial, meaning that its Tate cohomology vanishes for every subgroup of $G$ in every degree. The $p$-part of the ETNC class vanishes if and only if the equivariant Stickelberger element $\Theta_{S,T}(r)e_r$ generates $\operatorname{Fitt}^{\max}_{e_r\mathbb Z_p[G]}(H_T^2)$; equivalently, it belongs to this maximal Fitting invariant.

## Statement references

[Johnston and Nickel, Theorem 12.4 proof](https://arxiv.org/pdf/2010.03186)

[[def-relative-k-group-and-etnc-for-a-tate-motive]]

[[def-truncated-etale-complex-for-tate-twists]]

[[def-equivariant-stickelberger-element-at-nonpositive-integer]]

[[def-noncommutative-maximal-fitting-invariant]]

## Proof status

Nickel's proof first proves vanishing of $H_T^1$ from Lemma 5.2 and the compact-support triangle, then obtains cohomological triviality from perfectness and concentration in degree $2$. Its Fitting comparison uses the local Euler-factor Lemma 5.4; its ETNC equivalence uses the refined Euler characteristic. The implication from Fitting membership to generation uses reduced-norm components and the even/odd special-value formulae of Wiles and Kolster. None of these complete arguments, including the local coefficient calculations and noncommutative Fitting theory, is reconstructed in the active item library. This is an established-theorem authoring obligation, not a proved supplier.
