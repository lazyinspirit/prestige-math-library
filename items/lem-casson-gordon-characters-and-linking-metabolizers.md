---
id: lem-casson-gordon-characters-and-linking-metabolizers
kind: lemma
title: Characters vanishing on the disk metabolizer extend over the branched cover
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-finite-order-character-of-a-branched-cover
  - lem-prime-power-branched-cover-of-slice-disk-is-rational-homology-ball
  - lem-slice-disk-induces-branched-cover-metabolizer
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Charles Livingston and Swatee Naik, Introduction to Knot Concordance
      url: https://chuck-livingston.github.io/math/Concordance_Book.pdf
      locator: Chapter 8, §8.2, pp. 167–168; character-extension interface stated
    - title: Patrick Gilmer, Slice Knots in S3
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/gilmer3.pdf
      locator: §1, printed pp. 306–309; complete kernel and character-extension argument read
---

## Statement

Assume AC. Let $D\subset B^4$ be a smooth proper disk with boundary K, let q be a prime power, and let $W_{D,q}$ be its branched cover. Put
$$P_D=\ker\bigl(H_1(\Sigma_q(\partial D);\mathbb Z)\to H_1(W_{D,q};\mathbb Z)\bigr).$$
If $\chi:H_1(\Sigma_q(\partial D);\mathbb Z)\to\mathbb Q/\mathbb Z$ has prime-power order, then $\chi$ vanishes on $P_D$ if and only if it extends to a character of prime-power order on $H_1(W_{D,q};\mathbb Z)$.

## Statement references

[[def-finite-order-character-of-a-branched-cover|Finite-order characters and vanishing]]

[[lem-slice-disk-induces-branched-cover-metabolizer|The disk-induced metabolizer]]

[Charles Livingston and Swatee Naik, *Introduction to Knot Concordance*, §8.2, pp. 167–168](https://chuck-livingston.github.io/math/Concordance_Book.pdf)

[[def-axiom-of-choice|Axiom of Choice]]

## Facts & Assumptions

**Given:** Full AC, the disk $D$, the prime-power cover $W_{D,q}$, the inclusion $i:H_1(\Sigma_q(\partial D);\mathbb Z)\to H_1(W_{D,q};\mathbb Z)$, its kernel $P_D$, and a prime-power-order character $\chi$.

[A1] Full AC is assumed wherever the cover and orientation conventions use the choice axiom. [[def-axiom-of-choice]]

[F1] $P_D=\ker i$, and $H_1(W_{D,q};\mathbb Z)$ is finite because $W_{D,q}$ is a rational homology ball with finite CW type. [[lem-slice-disk-induces-branched-cover-metabolizer]] [[lem-prime-power-branched-cover-of-slice-disk-is-rational-homology-ball]]

[F2] A finite-order character is a homomorphism to $\mathbb Q/\mathbb Z$ whose element in the character group has finite order; vanishing on $P_D$ means its restriction to $P_D$ is zero. [[def-finite-order-character-of-a-branched-cover]]

## Proof



1.1 If $\chi$ extends to $\widetilde\chi:H_1(W_{D,q};\mathbb Z)\to\mathbb Q/\mathbb Z$, then for every $x\in P_D$ one has $i(x)=0$, so $\chi(x)=\widetilde\chi(i(x))=0$. The extension has finite image because its domain is finite. [F1, F2, given, algebra, A1]

1.2 Conversely, suppose $\chi(P_D)=0$. Then $\chi$ factors uniquely through the subgroup $I=i(H_1(\Sigma_q(\partial D)))$ of the finite group $B=H_1(W_{D,q})$. Let $p$ be the prime underlying the order of $\chi$ as in [F2]. Every element of order coprime to $p$ maps to zero, since its image is killed both by a power of $p$ and by an integer coprime to $p$. Thus the factored map restricts to the $p$-primary subgroup $I_p\le B_p$. [F1, F2, given, algebra]

2.1 A homomorphism from a subgroup $J$ of a finite abelian $p$-group $B_p$ into $\mathbb Q/\mathbb Z[p^\infty]$ extends when one adjoins one element $b\in B_p$: if $p^k$ is the order of $b+J$, choose $c\in\mathbb Q/\mathbb Z[p^\infty]$ with $p^kc=f(p^kb)$, which exists because multiplication by $p^k$ is surjective on this Prüfer group. Set $f'(j+rb)=f(j)+rc$. If $j+rb=j'+r'b$, then $(r-r')b\in J$, so $r-r'$ is divisible by $p^k$; the chosen equation makes the two values equal. The extension is therefore well-defined. Repeating this finite step extends the character from $I_p$ to $B_p$. [given, step 1.2, construct, algebra]

3.1 Set the extension to zero on the complementary primary summand of $B$ and combine it with the extension on $B_p$. The resulting character on $B$ extends $\chi$ and has finite $p$-power image because $B$ is finite and the values are $p$-primary. This proves the reverse implication. [F1, step 1.2, step 2.1, algebra] ∎

