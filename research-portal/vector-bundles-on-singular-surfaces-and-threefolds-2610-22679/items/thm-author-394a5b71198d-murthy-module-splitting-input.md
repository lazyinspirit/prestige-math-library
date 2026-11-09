---
id: thm-author-394a5b71198d-murthy-module-splitting-input
kind: theorem
title: Murthy splitting criterion for the exterior-dual obstruction
status: published
domain: mathematics
deps:
  - lem-author-394a5b71198d-exterior-dual-interface
  - lem-author-394a5b71198d-split-vanishing
  - math:def-axiom-of-choice
dependency_roles:
  lem-author-394a5b71198d-exterior-dual-interface: mathematical-premise
  lem-author-394a5b71198d-split-vanishing: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
external_input: true
sources:
  references:
    - title: M. Pavaman Murthy, Zero cycles and projective modules, ICTP SMR.761/7
        preliminary lecture-note scan
      url: https://indico.ictp.it/event/a02275/contribution/6/material/0/0.pdf
      locator: Introduction, printed pp. 1–2 / PDF pp. 3–4; Definition 3.5, Remark
        3.6(i), Theorem 3.7 and its short proof, printed p. 17 / PDF p. 19
      statement: For a reduced affine algebra A of dimension n over an algebraically
        closed field, if F^n K0(A) has no (n-1)! torsion, a rank-n projective
        module P splits off a rank-one free summand exactly when its
        exterior-dual class C_n(P)=sum_i(-1)^i[Lambda^i P*] vanishes.
      hypotheses: Here the imported application uses n>=2, A reduced affine over an
        algebraically closed field of arbitrary characteristic, no (n-1)!
        torsion in F^n K0(A), and P finitely generated projective of constant
        rank n. No smoothness is needed by this criterion itself.
      reading_limits: This adjudication visually read the cached 34-page ICTP
        SMR.761/7 preliminary participant scan at PDF pp. 1, 3, 4 and 19 (cover
        and printed pp. 1, 2 and 17), SHA256
        488956266748dcf211d02c09b2a058764414e212bc778e4379de6305cafef7f6,
        located in the frozen run as top-chern-murthy-primary-scan.pdf. The
        cover identifies M. Pavaman Murthy and the workshop of 16–27 May 1994. A
        fresh request to the stated ICTP URL timed out; the historical cache
        download origin remains independently unattested. Earlier native records
        report also reading printed pp. 13–14 / PDF pp. 15–16; that is retained
        historical reading, not fresh reading credit here. The published
        bibliographic counterpart is Ann. Math. 140 (1994), 405–434, DOI
        https://doi.org/10.2307/2118605; published journal bytes and exact
        journal pagination were not checked. Corollaries 3.4 and 1.9 invoked by
        the short proof were not reconstructed. The import uses the identified
        preliminary version and does not claim a local proof of Murthy’s
        converse.
    - title: Charles Weibel, The K-book, author-hosted Chapter II PDF (cached version
        identified by SHA256)
      url: https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.II.pdf
      locator: Resolution Theorem 7.6 and its proof, chapter/PDF pp. 65–66; Definition
        7.7, pp. 66–67; Corollary 7.7.2 and the preceding truncated-cone proof,
        p. 67
      statement: For a ring A, let H(A) be the exact category of modules admitting a
        finite resolution by finitely generated projective A-modules. Inclusion
        of finite projective modules induces an isomorphism j:K0^proj(A) ->
        K0(H(A)). Its inverse sends a resolved module M to the alternating sum
        of its finite projective resolution. This sum is independent of the
        resolution and respects all short-exact-sequence relations.
      hypotheses: Only the finite-resolution category H(A) is compared with finite
        projectives. The application ring is a commutative noetherian affine
        algebra. No regularity, finite global dimension, characteristic
        restriction, or identification with all coherent-module G0 is assumed.
      reading_limits: Read the frozen cached author-hosted Chapter II text at pp.
        65–67, including the resolution theorem proof, Definition 7.7, the
        truncated-cone argument and Corollary 7.7.2; visually checked cached p.
        67. Cached PDF SHA256
        529ea8a5853e9fa55279e7ad79047155409b10847bd924b56f708f0950ebc607. The
        same author-hosted URL was separately accessed through web PDF text at
        these locators. Its current bytes were not downloaded for a new byte
        comparison. Printed-book bytes, author errata and recursively cited
        background proofs were not read. Lemma 7.7.1 prints an incorrect minimum
        projective-dimension bound; that estimate is excluded. Its displayed
        truncated cone establishes the finite-resolution kernel closure needed
        by Corollary 7.7.2, independently of that quantitative typo.
dependency_level: 15
local_argument_provenance: ai-altered
---

## Statement
Assume the Axiom of Choice and the fixed compatible site and universe bounds of the supplied constructions. Let $k$ be an algebraically closed field of arbitrary characteristic and $A$ a reduced affine $k$-algebra of dimension $n\geq2$. Suppose the subgroup $F^nK_0^{\mathrm{proj}}(A)$, generated by residue-field classes of height-$n$ smooth closed points, has no $(n-1)!$ torsion. For a finite projective $A$-module $P$ of constant rank $n$, put $P^*=\operatorname{Hom}_A(P,A)$ and $C^K_n(P)=\sum_{i=0}^n(-1)^i[\Lambda^iP^*]$. Then $C^K_n(P)=0$ if and only if $P\cong A\oplus Q$ for a finite projective module $Q$ of constant rank $n-1$.

## External input
Murthy's Theorem 3.7 is imported in its algebraically closed branch. Its short proof uses a generic dual section, the Koszul class, Corollary 3.4 and Corollary 1.9; those deep suppliers are not reproved here. The introduction writes the image of a finite-projective-dimension module in ordinary $K_0(A)$ and refers classical K-theory to Bass. It does not explicitly define an inequivalent group.

To make the resolution notation precise, also import Weibel's Resolution Theorem 7.6 and Corollary 7.7.2 in the stated finite-resolution scope. Let $\mathcal P(A)$ be the finite projective modules and $\mathcal H(A)$ the modules with finite resolutions by such projectives, with inherited short exact sequences. Inclusion induces $j:K_0^{\mathrm{proj}}(A)\longrightarrow K_0(\mathcal H(A))$. Its inverse is $\chi([M]_{\mathcal H})=\sum_i(-1)^i[P_i]$ for a finite projective resolution $P_\bullet\to M$. The imported theorem supplies independence of resolution and compatibility with exact relations. For this noetherian algebra, finite modules of finite projective dimension admit such finite resolutions by taking finite free surjections and their finite syzygies. This identifies precisely the resolved-module notation in the scan. No identification of singular-ring $K_0$ with the group of all coherent modules is used.

## Facts & Assumptions
[A1] The assumed [[math:def-axiom-of-choice]] and fixed universes discharge the exterior-dual and split-vanishing suppliers [F2] when their actual module/perfect-class comparisons are invoked. These are inherited local-realization premises; the imported Murthy and resolution statements and their source-reading limits remain unchanged.


**Given:** The hypotheses and data in the statement, with AC and the article's fixed universes wherever perfect K-theory is used.

**Goal:** Establish the asserted conclusion.

[F1] The imported primary statement is Theorem 3.7, using the exterior-dual definition in Definition 3.5 and the subgroup fixed in the introduction and Remark 3.6(i).

[F2] The local exterior-dual convention and necessary vanishing direction are established by [[lem-author-394a5b71198d-exterior-dual-interface]] and [[lem-author-394a5b71198d-split-vanishing]].

[F3] The external resolution comparison just specified gives mutually inverse group maps $j$ and $\chi$, with $\chi([M]_{\mathcal H})$ the actual finite-resolution Euler class and $j([T])=[T]_{\mathcal H}$ for every finite projective $T$. This is Weibel II, Definition 7.7 and Corollary 7.7.2, using the inverse described in the proof of Theorem 7.6.

## Proof
1.1 Apply [F3] to the affine algebra $A$. The height-$n$ smooth residue modules $A/\mathfrak m$ are precisely the finite-projective-dimension point modules whose resolved classes generate the source subgroup in [F1]. By the formula for $\chi$, their classes in the statement are exactly $\chi([A/\mathfrak m]_{\mathcal H})$. Thus $\chi$ and $j$ restrict to mutually inverse maps on the subgroups generated by the height-$n$ smooth points. In particular the stated factorial-torsion condition holds in either presentation. [A1, F1, F2, F3, given]

2.1 Each $\Lambda^iP^*$ is finite projective, so $\chi(\sum_i(-1)^i[\Lambda^iP^*]_{\mathcal H})=C^K_n(P)$. Since $\chi$ is an isomorphism, this identifies the actual exterior-dual classes and their vanishing, as well as the point subgroups from step 1.1. In ordinary projective $K_0$ notation this is simply the canonical interpretation of the source's resolved-module classes. [A1, F2, F3, step 1.1, algebra]

3.1 The reduced affine algebra, algebraically closed field, dimension, module rank and factorial-torsion hypothesis now match the algebraically closed branch of [F1]. With the actual class identified in step 2.1, Theorem 3.7 gives $C^K_n(P)=0$ if and only if $P$ has a free direct summand of rank one. This is the imported converse; the local Koszul calculation in [F2] is not a replacement proof of it. [A1, F1, F2, step 1.1, step 2.1, given]

4.1 A free line summand gives $P\cong A\oplus Q$. The complementary summand $Q$ is finite projective, and localization gives its constant rank $n-1$. Conversely this decomposition is a free line summand. The exterior convention and necessary vanishing direction agree with [F2]. Together with step 3.1 this proves the stated equivalence. [A1, F2, step 3.1] ∎

The source criterion retains its reduced affine and arbitrary-characteristic scope. Weibel II, Lemma 7.7.1 has a separate quantitative typo: its printed $\min\{m,n-1\}$ must be replaced by $\max\{m,n-1\}$, with the nonnegative-length boundary convention. Over $R=k[t]$, the split sequence with kernel and quotient $R/(t)$ and middle term $(R/(t))^2$ has all three projective dimensions one; the printed minimum would make the kernel projective. This error does not invalidate the finite-resolution comparison: the displayed truncated-cone construction still has finite length and supplies the required kernel closure. The false bound is not used here.

## Source qualification
The source criterion retains its reduced affine and arbitrary-characteristic scope. Weibel II, Lemma 7.7.1 has a separate quantitative typo: its printed $\min\{m,n-1\}$ must be replaced by $\max\{m,n-1\}$, with the nonnegative-length boundary convention. Over $R=k[t]$, the split sequence with kernel and quotient $R/(t)$ and middle term $(R/(t))^2$ has all three projective dimensions one; the printed minimum would make the kernel projective. This error does not invalidate the finite-resolution comparison: the displayed truncated-cone construction still has finite length and supplies the required kernel closure. The false bound is not used here.
