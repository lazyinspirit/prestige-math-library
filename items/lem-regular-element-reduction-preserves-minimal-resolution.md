---
id: "lem-regular-element-reduction-preserves-minimal-resolution"
kind: "lemma"
title: "regular element reduction preserves minimal resolution"
deps: ["lem-finite-local-modules-admit-minimal-free-resolutions", "lem-projective-dimension-from-last-nonzero-betti-number", "def-balanced-tor-bifunctor", "thm-tor-symmetry-over-a-commutative-ring", "thm-nakayama-lemma"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lemma 12.32 and proof of 12.31 Case 2, p.122"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

Let $(R,\mathfrak m,k)$ be nonzero Noetherian local, let $M$ be a nonzero finite module, and let $x\in\mathfrak m$ be a nonzerodivisor on both $R$ and $M$. Reducing a minimal free resolution of $M$ modulo $x$ gives a minimal free resolution of $M/xM$ over $S=R/(x)$. Moreover $\operatorname{pd}_S(M/xM)=\operatorname{pd}_RM$, including infinity. For $M=0$ the zero-complex assertion also holds, with both projective dimensions zero.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[lem-finite-local-modules-admit-minimal-free-resolutions]]: Every finite module $M$ over a nonzero Noetherian local ring $(R,\mathfrak m,k)$ has an augmented resolution $\cdots\to F_1\to F_0\to M\to0$ by finite-rank free modules, with $d_i(F_i)\subseteq\mathfrak mF_{i-1}$ for $i>0$. Such a resolution is called minimal; it need not be bounded. This extends the bounded terminology without changing it.

[F2] [[lem-projective-dimension-from-last-nonzero-betti-number]]: For a nonzero finite module $M$ over a nonzero Noetherian local ring, $\operatorname{pd}_RM=\sup\{i\ge0:\beta_i^R(M)\ne0\}$, allowing infinity. For each integer $q\ge0$, $\operatorname{pd}_RM\le q$ if and only if $\operatorname{Tor}_{q+1}^R(k,M)=0$.

[F3] [[def-balanced-tor-bifunctor]]: For a right $R$-module $N$, a left $R$-module $M$, and $i\geq0$, define $\operatorname{Tor}_i^R(N,M)$ to be either $H_i(N\otimes_RP_\bullet)$ for a projective resolution of $M$ or $H_i(Q_\bullet\otimes_RM)$ for a projective resolution of $N$, identified by the preceding natural balance isomorphism. On maps it uses the homology maps induced by comparison maps; coherence makes this a well-defined covariant bifunctor.

[F4] [[thm-tor-symmetry-over-a-commutative-ring]]: If $R$ is commutative and $M,N$ are $R$-modules, then $\operatorname{Tor}^R_i(M,N)\cong\operatorname{Tor}^R_i(N,M)$ naturally.

[F5] [[thm-nakayama-lemma]]: Assume the Axiom of Choice. Let $R$ be a commutative ring, let $I \trianglelefteq R$ satisfy $I \subseteq J(R)$, and let $M$ be a finitely generated left $R$-module. If $IM=M$, then $M=0$.

## Proof

1.1 The complex $0\to R\xrightarrow{x}R\to S\to0$ resolves $S$. Tensoring it with $M$ has no positive homology since multiplication by $x$ is injective on $M$. Balance and symmetry of Tor show that reducing any free resolution of $M$ modulo $x$ has no positive homology and degree-zero homology $M/xM$. [F3, F4]

2.1 A minimal degreewise finite resolution exists, and its matrices reduce to entries in $\mathfrak m/(x)$. Its finite ranks do not change on reduction to the nonzero local ring $S$. Nakayama gives $M/xM\ne0$, so the last-nonzero-Betti criterion identifies both projective dimensions with the same last nonzero rank, or infinity if ranks persist arbitrarily far. For $M=0$ choose the zero complex on both sides. [F1, F2, F5, step 1.1] ∎
