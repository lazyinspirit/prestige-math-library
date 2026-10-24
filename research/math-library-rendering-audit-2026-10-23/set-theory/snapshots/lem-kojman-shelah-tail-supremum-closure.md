---
id: lem-kojman-shelah-tail-supremum-closure
kind: lemma
title: Tail suprema land in the scale subspace
status: published
origin: pipeline
deps: [def-kojman-shelah-scale-subspace, lem-scale-tail-suprema-have-prescribed-cofinality, def-axiom-of-choice, thm-regularity-of-the-alephs, thm-cofinality-basics]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "K. P. Hart, Set-Theoretic Methods in General Topology, Chapter 7 section 2, Exercise 5, printed p. 40; finite prefix replaced to retain the Rudin condition"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop/settop.pdf
---

## Statement

Assume AC. Let $1\le m\le k<\omega$ and let $(h_\xi)_{\xi<\aleph_m}$ be points of the scale subspace $X$ such that $h_\xi(n)<h_\eta(n)$ for every $\xi<\eta<\aleph_m$ and $n\in B$ with $n>k$. Put $g(n)=\sup_{\xi<\aleph_m}h_\xi(n)$ on $B$. There is $h\in X$ with $h(n)=g(n)$ at every $n>k$ in $B$, hence $h=^*g$. On that tail $g(n)<\aleph_n$ and $\operatorname{cf}(g(n))=\aleph_m$. No condition on the cofinalities of the finitely many initial values of $g$ is needed.

## Facts & Assumptions

**Given:** The normalized scale $(f_\alpha)_{\alpha<\lambda}$ defining $X$, with $\lambda=\aleph_{\omega+1}$, and the sequence in the statement.

[F1] Points of $X$ are Rudin points eventually equal to scale terms; the scale is strictly increasing in $<^*$, and admissible finite modifications preserve $X$ ([[def-kojman-shelah-scale-subspace]]).

[F2] For strictly increasing scale indices indexed by $\aleph_m$ and pointwise strictly increasing representatives in the actual product on $n>k\ge m$, their tail supremum is below each factor, has coordinate cofinality $\aleph_m$, and is eventually equal to $f_\delta$ for the index supremum $\delta<\lambda$ of cofinality $\aleph_m$ ([[lem-scale-tail-suprema-have-prescribed-cofinality]]).

[F3] Under AC the finite positive alephs are regular ([[thm-regularity-of-the-alephs]]).

[F4] Uncountable cofinality excludes zero and successor ordinal values ([[thm-cofinality-basics]]).

[A1] AC is assumed for the scale and cardinal-regularity suppliers ([[def-axiom-of-choice]]).

## Proof

1.1 Each $h_\xi$ has exactly one scale index $\alpha_\xi$ with $h_\xi=^*f_{\alpha_\xi}$. Existence is F1. If two distinct indices worked, put the smaller first; scale strictness outside a finite set would give $h_\xi(n)<h_\xi(n)$ at all but finitely many coordinates. The infinite $B$ has a coordinate outside their finite union, a contradiction. For $\xi<\eta$, the supplied strict inequality on the cofinite tail excludes $\alpha_\eta\le\alpha_\xi$: equality would imply eventual equality of the two points, while a strict reverse index inequality would imply $h_\eta<^*h_\xi$. Either conflicts with the strict tail inequalities outside finitely many coordinates. Thus $(\alpha_\xi)$ is strictly increasing. [F1]

2.1 Set $T=\{n\in B:n>k\}$. For every $\xi<\aleph_m$ there is a successor $\xi+1<\aleph_m$, since the infinite cardinal $\aleph_m$ is a limit ordinal (also its cofinality exceeds one by F3–F4). For $n\in T$, $h_\xi(n)<h_{\xi+1}(n)\le\aleph_n$, so $h_\xi(n)<\aleph_n$. Hence the restrictions $h_\xi\restriction T$ are members of the actual strict product, not just the inclusive-top product. They are pointwise increasing by hypothesis and eventually equal to $f_{\alpha_\xi}\restriction T$ by step 1.1. Thus all hypotheses of F2, including $1\le m\le k$, hold. F2 and A1 give $\delta=\sup_\xi\alpha_\xi<\lambda$, $\operatorname{cf}(\delta)=\aleph_m$, and $g\restriction T=^*f_\delta\restriction T$ with $g(n)<\aleph_n$ and $\operatorname{cf}(g(n))=\aleph_m$ on $T$. [step 1.1, F2, F3, F4, A1]

3.1 Define $h(n)=\aleph_n$ for $n\in B$ with $n\le k$, and $h(n)=g(n)$ for $n>k$. On the finite prefix, F3 gives uncountable cofinalities $\aleph_n\le\aleph_k$; on the tail, step 2.1 gives cofinality $\aleph_m\le\aleph_k$. Thus every coordinate cofinality lies strictly between $\omega$ and $\aleph_{k+1}$, and $h\in X_R(B)$. Step 2.1 and the finite prefix imply $h=^*f_\delta$, so F1 gives $h\in X$. It agrees with $g$ on every required tail coordinate and differs, if at all, only on the finite prefix. QED. [step 2.1, F1, F3]
