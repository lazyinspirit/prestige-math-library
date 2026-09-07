---
id: "lem-projective-dimension-from-last-nonzero-betti-number"
kind: "lemma"
title: "projective dimension from last nonzero betti number"
deps: ["cor-betti-number-is-rank-in-minimal-resolution", "lem-minimal-free-resolution-reduces-to-zero-differential", "def-projective-dimension-of-an-object", "thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective", "thm-finite-flat-modules-over-local-rings-are-free", "lem-projective-modules-are-flat-over-an-arbitrary-ring", "thm-nakayama-lemma", "def-balanced-tor-bifunctor", "lem-finite-local-modules-admit-minimal-free-resolutions"]
sources:
  references:
    - title: "Corollary 12.29, p.121"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

For a nonzero finite module $M$ over a nonzero Noetherian local ring, $\operatorname{pd}_RM=\sup\{i\ge0:\beta_i^R(M)\ne0\}$, allowing infinity. For each integer $q\ge0$, $\operatorname{pd}_RM\le q$ if and only if $\operatorname{Tor}_{q+1}^R(k,M)=0$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[cor-betti-number-is-rank-in-minimal-resolution]]: For every minimal degreewise finite free resolution $F_\bullet\to M$ of a finite module over a nonzero Noetherian local ring, $\beta_i^R(M)=\operatorname{rank}_RF_i$ for all $i\ge0$.

[F2] [[def-projective-dimension-of-an-object]]: Assume projective resolutions are supplied or exist in the relevant class. The **projective dimension** of $M$ is $$\operatorname{pd}(M)=\inf\{d\geq0:M\text{ has a projective resolution of length }d\},$$ with value $\infty$ if this set is empty. A length-zero projective resolution exists exactly when $M$ is projective.

[F3] [[thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective]]: Let $\mathcal A$ be an abelian category with enough projectives, fix a projective resolution $P_\bullet\to M$, and let $n\ge1$. Then $$\operatorname{pd}(M)\le n\quad\Longleftrightarrow\quad\Omega_{P}^{n}(M)\text{ is projective}.$$ In particular, the condition is independent of the chosen projective resolution.

[F4] [[thm-finite-flat-modules-over-local-rings-are-free]]: The standard theorem holds over arbitrary local rings; the proof written here is the Noetherian local case. Let $(R,\mathfrak m)$ be a Noetherian local ring and let $M$ be a finite flat $R$-module. Then $M$ is free.

[F5] [[lem-projective-modules-are-flat-over-an-arbitrary-ring]]: Every projective left or right module over an arbitrary ring is flat on its appropriate side.

[F6] [[thm-nakayama-lemma]]: Assume the Axiom of Choice. Let $R$ be a commutative ring, let $I \trianglelefteq R$ satisfy $I \subseteq J(R)$, and let $M$ be a finitely generated left $R$-module. If $IM=M$, then $M=0$.

[F7] [[def-balanced-tor-bifunctor]]: For a right $R$-module $N$, a left $R$-module $M$, and $i\geq0$, define $\operatorname{Tor}_i^R(N,M)$ to be either $H_i(N\otimes_RP_\bullet)$ for a projective resolution of $M$ or $H_i(Q_\bullet\otimes_RM)$ for a projective resolution of $N$, identified by the preceding natural balance isomorphism. On maps it uses the homology maps induced by comparison maps; coherence makes this a well-defined covariant bifunctor.

[F8] [[lem-minimal-free-resolution-reduces-to-zero-differential]]: Reducing a minimal degreewise finite free resolution modulo $\mathfrak m$ gives the zero differential, so $\operatorname{Tor}_i^R(k,M)\cong k\otimes_RF_i$.

[F9] [[lem-finite-local-modules-admit-minimal-free-resolutions]]: Every finite module $M$ over a nonzero Noetherian local ring $(R,\mathfrak m,k)$ has an augmented resolution $\cdots\to F_1\to F_0\to M\to0$ by finite-rank free modules, with $d_i(F_i)\subseteq\mathfrak mF_{i-1}$ for $i>0$. Such a resolution is called minimal; it need not be bounded. This extends the bounded terminology without changing it.

## Proof

1.1 Choose a minimal degreewise finite free resolution $F_\bullet\to M$ by [F9]. By [F7], the zero differential in [F8] identifies $\operatorname{Tor}_{q+1}^R(k,M)$ with $F_{q+1}/\mathfrak mF_{q+1}$. Its vanishing and Nakayama give $F_{q+1}=0$. Exactness then gives $\ker(F_q\to F_{q-1})=0$ (using the augmentation when $q=0$), so the truncated complex is a length-$q$ free resolution. Also $F_{q+2}=\ker d_{q+2}=\operatorname{im}d_{q+3}\subseteq\mathfrak mF_{q+2}$, so Nakayama prevents a restart, and the same argument applies successively in every subsequent degree. [F2, F6, F7, F8, F9, algebra]

1.2 Conversely, if $\operatorname{pd}M\le q$, a projective resolution of length at most $q$ computes Tor and gives zero in every degree above $q$. The syzygy criterion also gives a finite free terminating resolution: for $q\ge1$ its finite projective syzygy is flat and hence free; for $q=0$ apply the same freeness result directly to $M$. [F3, F5, F4, F2, F7]

2.1 Since $M\ne0$, Nakayama gives $\beta_0(M)>0$. The two implications show that the last nonzero degree equals projective dimension when finite; if there is no finite bound, nonzero Betti degrees are unbounded and both sides are infinite. [F1, F6, step 1.1, step 1.2] ∎
