---
id: lem-boardman-approximate-cycle-obstruction-sequence
kind: lemma
title: Approximate cycle obstruction sequence for a complete filtered complex
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-filtered-chain-complex, lem-countable-tower-completion-obstruction-exact-sequence, lem-countable-tower-six-term-limit-sequence, lem-two-by-two-delta-complex-for-a-double-tower, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Weibel, Chapter 5, Corollary 5.5.8 and Proposition 5.5.9
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
---

## Statement

Assume AC. Let $(C,d,F)$ be an increasing filtered complex of modules, complete in each degree: the canonical map $C_k\to\varprojlim_{m\ge0}C_k/F_{-m}C_k$ is an isomorphism. Fix $n$ and define
$$A(p,t)=F_pC_n\cap d^{-1}(F_tC_{n-1}),\quad Z_p=F_pC_n\cap\ker d,\quad Q_p=R_{t\to-\infty}A(p,t).$$
Here $L,R$ mean countable Delta kernel and cokernel; a tower toward minus infinity is indexed by $t=T-m$, $m\ge0$, with inclusion transitions. Finite changes of $T$ give the canonical same result. Let $S(p,t)$ be the image of $A(p,t)$ in $F_pC_n/F_{p-1}C_n$, and put $S(p,\infty)=\bigcap_t S(p,t)$. There is a natural exact sequence
$$0\to Z_{p-1}\to Z_p\to S(p,\infty)\to Q_{p-1}\to Q_p\to R_tS(p,t)\to0.$$
Moreover $L_{p\to-\infty}Q_p=0$ and $R_{p\to-\infty}Z_p=0$. Naturality is for filtration-preserving chain maps of complete filtered complexes. Exhaustiveness is not needed for this lemma.

## Facts & Assumptions

[F1] In a [[def-filtered-chain-complex]], $d(F_pC_k)\subseteq F_pC_{k-1}$ and $d^2=0$.

[F2] [[lem-countable-tower-completion-obstruction-exact-sequence]] identifies the kernel and cokernel of a subgroup completion map with intersection and Delta cokernel, under AC.

[F3] [[lem-countable-tower-six-term-limit-sequence]] gives the natural six-term sequence and invariance under finite cofinal tails, under AC.

[F4] [[lem-two-by-two-delta-complex-for-a-double-tower]] says that a commuting double system with $L_pA=R_pA=0$ for each $t$ has $L_pR_tA=0$, under AC.

[F5] [[def-axiom-of-choice]] is assumed for the coordinate lifts in [F2]–[F4]; the residue and tail-sum constructions below select unique values and require no additional choice.

## Proof

**Given:** The complete filtered complex and degree $n$ of the statement. All submodules and quotients below have their usual element meaning.

1.1 Completeness includes injectivity, so $\bigcap_mF_{-m}C_k=0$. Every fixed $F_pC_k$ is closed in the residue sense: if $x\in\bigcap_t(F_pC_k+F_tC_k)$, take $t\le p$ to get $x\in F_pC_k$. A compatible family of residues defines a unique element of $C_k$ by completeness, and if every sufficiently fine residue is represented in $F_pC_k$, its value lies in $F_pC_k$ by this same test. Filtration preservation makes application of $d$ compatible with residues. [F1]

2.1 The transition maps of $A(p,t)$ are inclusions in both coordinates and commute. For fixed $t$ and $p\le t$ one has $A(p,t)=F_pC_n$: [F1] gives the forward inclusion in the inverse-image condition, and the reverse is part of the definition. The cofinal $p$ tower therefore has zero limit by separatedness and zero Delta cokernel by [F2] and completeness. The finite-tail identifications of [F3] give $L_pA(p,t)=R_pA(p,t)=0$ for the full $p$ tower with any fixed upper endpoint. [F1, F2, F3, F5, step 1.1]

2.2 For the cycle tower at indices $-m$, let $y_m\in Z_{-m}$ be any product tuple. For each $m$ and $l\ge0$ define a residue modulo $F_{-l}C_n$ by the finite sum $\sum_{m\le k<l}y_k$ when $l>m$, and zero when $l\le m$. The residues are compatible since all newly removed summands lie in the coarser filtration piece. Completeness supplies a unique $x_m\in C_n$. Its residue modulo $F_{-m}$ is zero, so $x_m\in F_{-m}C_n$. Applying $d$ to every residue gives zero because each $y_k$ is a cycle; separatedness of $C_{n-1}$ implies $dx_m=0$. Thus $x_m\in Z_{-m}$. Comparing the finite sums in every quotient gives $x_m-x_{m+1}=y_m$, since the quotient family separates elements. Delta on this cycle tower is onto, so $R_pZ_p=0$, again with arbitrary upper endpoint by [F3]. [F1, F3, step 1.1]

3.1 For fixed $p$, compatibility in the inclusion tower $A(p,t)$ means a single element lies in every $A(p,t)$. By separatedness of $C_{n-1}$ this is precisely $Z_p$. Apply [F4] to the rectangular system restricted to any fixed upper endpoints in $p,t$. Step 2.1 verifies both required vanishings. Thus $L_pQ_p=L_pR_tA(p,t)=0$. Changing endpoints gives the same result by [F3], so this holds for the full minus-infinity tower of the $Q_p$. [F3, F4, F5, step 1.1, step 2.1]

4.1 Fix $p$ and use a common $t$ endpoint for $A(p-1,t)$ and $A(p,t)$. The kernel of their map to $F_pC_n/F_{p-1}C_n$ is exactly $A(p-1,t)$; hence $0\to A(p-1,t)\to A(p,t)\to S(p,t)\to0$ is termwise exact. The maps on $S$ are inclusions of nested submodules in the fixed graded module. Its limit is their intersection: compatibility means every coordinate is the same element. Applying [F3] and step 3.1 identifies the first three limit terms as $Z_{p-1},Z_p,S(p,\infty)$ and gives the asserted sequence, with the $Q$ map induced by inclusion. [F3, F5, step 3.1]

5.1 A filtration-preserving chain map sends each $A(p,t)$, $Z_p$ and $S(p,t)$ to its counterpart. It commutes with their inclusions and quotient maps and therefore with the six-term sequence by [F3]. The double-Delta comparison is natural by [F4]; the residue construction is compatible because a continuous filtered map sends the uniquely determined residues to their images. This proves the stated naturality. [F1, F3, F4, step 3.1, step 4.1, step 2.2]

6.1 Steps 3.1, 4.1 and 2.2 establish the sequence and both vanishings. Zero chain groups give zero towers and zero sequences. A finite lower filtration bound makes all sufficiently small $A(p,t)$ in the $p$ direction zero, consistently with the argument. Repeated pieces and zero differentials are allowed: for $d=0$, $A(p,t)=Z_p=F_pC_n$ is constant in $t$, so $Q_p=0$ and the exact sequence reduces to the graded quotient sequence. No sum over an unbounded set of nonvanishing residues was taken: each residue in step 2.2 is a finite sum, including the empty sum at $l\le m$. AC is confined to the cited tower lemmas as declared in [F5]. [F3, F5, step 3.1, step 4.1, step 2.2, step 5.1] ∎

## Source notes

The owner Delta alternatives sections 4–5 supplied the candidate. This proof supplies the approximate-cycle comparison and obstruction-limit vanishing directly, instead of importing the later double-derived-functor interchange in Weibel 5.8.7. The complete filtered hypotheses and the exact rectangular indices are part of the statement.
