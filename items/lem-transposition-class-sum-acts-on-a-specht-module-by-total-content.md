---
id: lem-transposition-class-sum-acts-on-a-specht-module-by-total-content
kind: lemma
title: "The transposition class sum acts on a complex Specht module by total content"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-partition-young-diagram-and-conjugate-partition, def-row-and-column-stabilizers-of-a-tableau, def-young-subgroup-tabloid-and-permutation-module, def-column-antisymmetrizer-polytabloid-and-specht-module, thm-complex-specht-modules-are-irreducible, cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars, def-character-of-a-complex-representation, prop-trace-is-linear]
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
    - title: "Garsia, Young Seminormal Representation, Murphy Elements and Content Evaluations, Theorem 3.2 and Remark 3.1, printed pp.19-21; coefficient argument reproduced using polytabloids instead of seminormal units"
      url: "https://www.math.ucsd.edu/~garsia/somepapers/Youngseminormal.pdf"
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups, Definitions 3.8/3.12 and Theorem 4.4, printed pp.12-16"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
---

## Statement

Let $m\ge0$, let $\nu\vdash m$, and let $S^\nu_{\mathbb C}$ be the complex Specht module. Put
$$T_m=\sum_{1\le a<b\le m}(a\ b),\qquad n(\nu)=\sum_i(i-1)\nu_i.$$
Then $T_m$ is central in $\mathbb C[S_m]$ and acts on $S^\nu_{\mathbb C}$ as the scalar
$$z_\nu=\sum_i\binom{\nu_i}{2}-\sum_j\binom{\nu'_j}{2}=\sum_{(r,c)\in[\nu]}(c-r)=n(\nu')-n(\nu).$$
If $m\ge2$, $d_\nu=\dim_{\mathbb C}S^\nu_{\mathbb C}$ and $\chi^\nu$ is its character, then
$$\chi^\nu((1\ 2))=\frac{d_\nu z_\nu}{\binom{m}{2}}.$$
For $m=0,1$, $T_m=0$ and $z_\nu=0$; no transposition character value is asserted.

## Facts & Assumptions

**Given:** $m,\nu$, the complex Specht module, and the displayed transposition sum.

[F1] Row and column stabilizers preserve the individual row and column sets. The tabloid stabilizer is the row stabilizer. The Specht module lies in the finite-dimensional tabloid permutation module and contains $e_t=\sum_{\gamma\in C_t}\operatorname{sgn}(\gamma)\gamma\{t\}$, whose coefficient at $\{t\}$ is $1$ because $R_t\cap C_t=\{1\}$. ([[def-row-and-column-stabilizers-of-a-tableau]], [[def-young-subgroup-tabloid-and-permutation-module]], [[def-column-antisymmetrizer-polytabloid-and-specht-module]])

[F2] Complex Specht modules are nonzero irreducible representations. An endomorphism of a finite-dimensional irreducible representation over an algebraically closed field is scalar. ([[thm-complex-specht-modules-are-irreducible]], [[cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars]])

[F3] A partition's conjugate records its column heights; its diagram consists of the nodes $(r,c)$ with $1\le c\le\nu_r$. Characters are traces, and trace is linear. ([[def-partition-young-diagram-and-conjugate-partition]], [[def-character-of-a-complex-representation]], [[prop-trace-is-linear]])

## Proof

1.1 Conjugation by any permutation sends $(a\ b)$ to the transposition of its two images, hence permutes the summands of $T_m$. Thus $T_m$ is central, so its action on the nonzero finite-dimensional irreducible Specht module is an intertwiner and equals $z\operatorname{id}$ for some $z\in\mathbb C$ by [F2]. Choose the row-filled tableau $t$ of shape $\nu$, and use its nonzero polytabloid $e_t$. Taking the coefficient of $\{t\}$ in $T_me_t=ze_t$ recovers $z$, since that coefficient in $e_t$ is $1$ by [F1]. [F1, F2, given, construct]

2.1 A summand indexed by a transposition $\tau=(a\ b)$ and $\gamma\in C_t$ contributes to this coefficient precisely when $\tau\gamma\in R_t$. Put $r=\tau\gamma$, so $\tau=r\gamma^{-1}$. If $x\notin\{a,b\}$, then $r\gamma^{-1}(x)=x$. The entry $\gamma^{-1}(x)$ has the column of $x$, and since $r$ preserves each row it also has the row of $x$. Their row-column intersection consists of $x$ alone, so $\gamma^{-1}(x)=x$ and $r(x)=x$. Thus both $r$ and $\gamma$ fix the complement of $\{a,b\}$; each is either the identity or $\tau$. Their product is $\tau$ exactly when one is $\tau$ and the other is the identity. Therefore the contributing pairs are exactly: $\gamma=1$, $\tau\in R_t$, of sign $+1$; and $\gamma=\tau$, $\tau\in C_t$, of sign $-1$. These cases cannot overlap, since two distinct entries cannot share both row and column. [F1, step 1.1, algebra]

3.1 There are $\sum_i\binom{\nu_i}{2}$ transpositions within rows and $\sum_j\binom{\nu'_j}{2}$ within columns. By steps 1.1 and 2.1 their difference is $z$. Summing $c-1$ within every row gives the first count, and summing $r-1$ within every column gives the second; hence their difference is $\sum_{(r,c)\in[\nu]}(c-r)$. Also $n(\nu)=\sum_{(r,c)\in[\nu]}(r-1)$ and $n(\nu')=\sum_{(r,c)\in[\nu]}(c-1)$, proving every formula for $z_\nu$. This includes $m=0,1$: there are no row or column pairs and the transposition sum is zero. [F3, step 1.1, step 2.1, algebra]

4.1 For $m\ge2$, all $\binom{m}{2}$ transpositions are conjugate, so their representing matrices are similar and have character value $\chi^\nu((1\ 2))$. Taking traces of the scalar action in step 3.1 gives $\binom{m}{2}\chi^\nu((1\ 2))=d_\nu z_\nu$ by [F3]. Dividing by the nonzero integer $\binom{m}{2}$ proves the stated character formula. The construction and coefficient count are finite and use no choice of an arbitrary family or seminormal-basis input. [F3, step 3.1, algebra] ∎
