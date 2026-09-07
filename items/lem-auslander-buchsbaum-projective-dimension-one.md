---
id: "lem-auslander-buchsbaum-projective-dimension-one"
kind: "lemma"
title: "auslander buchsbaum projective dimension one"
deps: ["lem-minimal-free-matrix-induces-zero-on-residue-ext", "lem-projective-dimension-from-last-nonzero-betti-number", "lem-finite-local-modules-admit-minimal-free-resolutions", "cor-depth-as-first-nonzero-ext", "thm-long-exact-ext-sequence-in-the-second-variable"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Theorem 1.53, pp.24–25"
      url: "https://jack-jeffries.github.io/UM/LCnotes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

If $M$ is a nonzero finite module of projective dimension one over a nonzero Noetherian local ring $R$, then $\operatorname{depth}R\ge1$ and $\operatorname{depth}M=\operatorname{depth}R-1$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[lem-minimal-free-matrix-induces-zero-on-residue-ext]]: For a nonzero commutative Noetherian local ring $(R,\mathfrak m,k)$, let $\alpha:R^s\to R^t$ be a map between finite free modules all of whose matrix entries lie in $\mathfrak m$. Then $\operatorname{Ext}^i_R(k,\alpha)=0$ for every $i\ge0$.

[F2] [[lem-projective-dimension-from-last-nonzero-betti-number]]: For a nonzero finite module $M$ over a nonzero Noetherian local ring, $\operatorname{pd}_RM=\sup\{i\ge0:\beta_i^R(M)\ne0\}$, allowing infinity. For each integer $q\ge0$, $\operatorname{pd}_RM\le q$ if and only if $\operatorname{Tor}_{q+1}^R(k,M)=0$.

[F3] [[cor-depth-as-first-nonzero-ext]]: Let $R$ be Noetherian, let $M$ be finite, and let $I$ lie in the Jacobson radical. Then $$\operatorname{depth}_I(M)= \inf\{i\ge0:\operatorname{Ext}^i_R(R/I,M)\ne0\},$$ where the infimum of the empty set is $\infty$.

[F4] [[thm-long-exact-ext-sequence-in-the-second-variable]]: Assume the Axiom of Dependent Choice. Let $\mathcal A$ be abelian with enough projectives and enough injectives, and fix supplied projective and injective resolution data on all its objects. For $0\to N'\to N\to N''\to0$ and every $M$, there is a natural exact sequence $$0\to\operatorname{Hom}(M,N')\to\operatorname{Hom}(M,N)\to\operatorname{Hom}(M,N'')\xrightarrow{\delta^0}\operatorname{Ext}^1(M,N')\to\operatorname{Ext}^1(M,N)\to\cdots,$$ where $\delta^q:\operatorname{Ext}^q(M,N'')\to\operatorname{Ext}^{q+1}(M,N')$; it is natural in the short exact sequence and contravariantly natural in $M$.

[F5] [[lem-finite-local-modules-admit-minimal-free-resolutions]]: Every finite module over a nonzero Noetherian local ring has a degreewise finite minimal free resolution.

## Proof

1.1 Choose the minimal resolution supplied by [F5]. Since $\operatorname{pd}_RM=1$, [F2] says that its last nonzero term is $F_1\cong R^s$ with $s>0$ and $F_i=0$ for $i\ge2$. Thus it gives a minimal exact sequence $0\to R^s\xrightarrow{\alpha}R^t\to M\to0$. Write $r=\operatorname{depth}R$. The map on every $\operatorname{Ext}^i_R(k,-)$ induced by $\alpha$ is zero. If $r=0$, the injection $\operatorname{Hom}(k,R^s)\to\operatorname{Hom}(k,R^t)$ would be zero with nonzero source, impossible. Hence $r\ge1$. [F1, F2, F3, F4, F5]

2.1 For $i<r-1$, the adjacent Ext terms for the free modules vanish, so $\operatorname{Ext}^i_R(k,M)=0$. At $i=r-1$, exactness and the zero map in degree $r$ identify $\operatorname{Ext}^{r-1}_R(k,M)$ with $\operatorname{Ext}^r_R(k,R^s)\ne0$. Thus the first nonzero Ext degree is $r-1$, proving the depth formula, also for $r=1$. [F4, F3, F1, step 1.1] ∎
