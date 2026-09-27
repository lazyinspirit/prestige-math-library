---
id: lem-type-a-support-filtration-multiplicities-are-intrinsic
kind: lemma
title: "The type-A support filtration multiplicities are intrinsic"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations, lem-type-a-graph-bimodule-extension-vanishing, def-type-a-standard-graph-bimodules-support-filtrations-and-character, lem-finite-weyl-strong-exchange-and-deletion]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Soergel, Kazhdan–Lusztig-Polynome und unzerlegbare Bimoduln, Bemerkung 5.5 and 5.12, PDF pp.12, 17"
      url: "https://arxiv.org/pdf/math/0403496"
    - title: "Elias–Williamson, Soergel Calculus, §§3.4–3.6"
      url: "https://arxiv.org/pdf/1309.0865"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $M$ be a graded $R$-bimodule lying in $F_\Delta\cap F_\nabla$, so that it
carries a $\Delta$-flag and a $\nabla$-flag. Then:

1. the graded multiplicities $(M:\Delta_x(d))$ and $(M:\nabla_x(d))$ of
   [[def-type-a-standard-graph-bimodules-support-filtrations-and-character]] are
   independent of the compatible enumeration of the flag, so that the character
   sums $h_\Delta(M)$ and $h_\nabla(M)$ are functions of $M$ alone;
2. if $M=M'\oplus M''$ with $M',M''\in F_\Delta\cap F_\nabla$, then
   $(M:\Delta_x(d))=(M':\Delta_x(d))+(M'':\Delta_x(d))$ and likewise for
   $\nabla$; more generally the same holds for any direct summand $N$ of $M$
   which itself lies in $F_\Delta\cap F_\nabla$.

## Facts & Assumptions

**Given:** A graded $R$-bimodule $M\in F_\Delta\cap F_\nabla$, its length filtration $\Gamma_{\ge i}M$ and $\Gamma_{\le i}M$, and standard bimodules $R_x\{a\}$ with graph index $x\in S_n$ and generator degree $a$.

[F1] A $\Delta$-flag refines the length filtration $\Gamma_{\ge i}M$, a $\nabla$-flag refines $\Gamma_{\le i}M$, and $(M:\Delta_x(d))$ is the multiplicity of $\Delta_x(d)$ in $\Gamma_{\ge i}M/\Gamma_{\ge i+1}M$ for $i=\ell(x)$, with $\Delta_x(d)=R_x\{\ell(x)-d\}$, and $(M:\nabla_x(d))$ the multiplicity of $\nabla_x(d)=R_x\{-\ell(x)-d\}$ in $\Gamma_{\le i}M/\Gamma_{\le i-1}M$ ([[def-type-a-standard-graph-bimodules-support-filtrations-and-character]]).

[F2] Imported from Soergel Bemerkung 5.5 (with Krull–Schmidt 1.3 there): $F_\Delta$ is stable under finite direct sums and under direct summands, and the same holds for $F_\nabla$ ([[def-type-a-standard-graph-bimodules-support-filtrations-and-character]]).

[F3] Imported (Soergel Lemma 6.3 with its proof, recorded in the definition item): let $B\in F_\nabla$, let $y_0,y_1,\ldots$ be an enumeration of $S_n$ in which Bruhat-larger elements have larger index, put $C(k)=\{y_0,\ldots,y_k\}$ and $y_k=y$. Then the evident map $\Gamma_{\le y}B/\Gamma_{<y}B\to\Gamma_{C(k)}B/\Gamma_{C(k-1)}B$ is an isomorphism, both sides are finite direct sums of objects of the form $\nabla_y(\mu)$, and $\nabla_y(\mu)$ occurs in this quotient exactly $(B:\nabla_y(\mu))$ times as a direct summand; for $F_\Delta$ the corresponding enumeration is descending in Bruhat order and the canonical layer is $\Gamma_{\ge y}B/\Gamma_{>y}B$, a direct sum of $\Delta_y(\mu)$ with the $\Delta$-multiplicities. The proof compares two such enumerations through finitely many steps swapping two adjacent incomparable elements: incomparable elements of $S_n$ differ by no reflection, so $\mathrm{Ext}^1$ vanishes between the corresponding standard subquotients and the two filtrations have the same subquotients up to order ([[def-type-a-standard-graph-bimodules-support-filtrations-and-character]]).

## Proof

1.1 Intrinsicness: choose a Bruhat-compatible enumeration $y_0,y_1,\ldots$ of $S_n$, listing larger elements later, and group the flag quotients by their graph index. For each $y$, [F3] identifies the quotient at that position with the canonical Bruhat layer $\Gamma_{\le y}M/\Gamma_{<y}M$ and says it is a direct sum of $\nabla_y(\mu)$ with multiplicities exactly $(M:\nabla_y(\mu))$. This canonical layer depends only on $M$, so the multiplicities are independent of the compatible enumeration; the analogous assertion for $\Delta$ follows from the $F_\Delta$ clause of [F3] and its canonical upper Bruhat layer. For a fixed graph, the multiplicities of its shifts are determined by the graded dimension after quotienting its free graph module by $R_+$; thus they are intrinsic even among repeated copies of that graph. The comparison in [F3] swaps distinct incomparable graph indices, with the extension-vanishing argument already included there; grouping by graph index means no swap of repeated copies of one standard is needed. Hence both character sums depend only on $M$. [F3]

2.1 Additivity: for every support set $A$ one has $\Gamma_A(M'\oplus M'')=\Gamma_AM'\oplus\Gamma_AM''$. Indeed the support of $(m',m'')$ is the union of the two component supports, so it lies in $Gr(A)$ exactly when each component does. Taking consecutive length cutoffs therefore identifies every length layer of $M$ with the direct sum of the corresponding layers of $M'$ and $M''$. Decomposing these layers into shifted graph modules adds their multiplicities. Equivalently one interleaves the two flags in length order, preserving the order within each flag. This proves additivity for both charts. [F1, step 1.1]

3.1 Direct summands: if $N$ is a direct summand of $M$ and $N\in F_\Delta\cap F_\nabla$, write $M=N\oplus N'$. By [F2], the complement $N'$ is also in $F_\Delta\cap F_\nabla$. Additivity from step 2.1 shows that each multiplicity in $M$ is the sum of the corresponding multiplicities in $N$ and $N'$, and therefore the intrinsic formulas also apply to the summands. The flags are finite by the definition of these classes. ∎ [F2, step 2.1]
