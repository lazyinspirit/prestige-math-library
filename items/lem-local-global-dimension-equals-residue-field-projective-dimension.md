---
id: "lem-local-global-dimension-equals-residue-field-projective-dimension"
kind: "lemma"
title: "local global dimension equals residue field projective dimension"
deps: ["lem-global-dimension-is-detected-on-cyclic-modules", "lem-projective-dimension-from-last-nonzero-betti-number", "thm-tor-symmetry-over-a-commutative-ring"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Corollary 12.30, p.121"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

For a nonzero Noetherian local ring $(R,\mathfrak m,k)$, $\operatorname{gldim}R=\operatorname{pd}_Rk$, allowing infinity. If this common value is $n<\infty$, every $R$-module has projective dimension at most $n$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[lem-global-dimension-is-detected-on-cyclic-modules]]: For a unital ring $R$, its left global dimension equals $\sup_I\operatorname{pd}_R(R/I)$ over all left ideals $I$, and equals the supremum of the injective dimensions of all left modules. The equalities allow infinity; in the commutative Noetherian case the cyclic modules are finite.

[F2] [[lem-projective-dimension-from-last-nonzero-betti-number]]: For a nonzero finite module $M$ over a nonzero Noetherian local ring, $\operatorname{pd}_RM=\sup\{i\ge0:\beta_i^R(M)\ne0\}$, allowing infinity. For each integer $q\ge0$, $\operatorname{pd}_RM\le q$ if and only if $\operatorname{Tor}_{q+1}^R(k,M)=0$.

[F3] [[thm-tor-symmetry-over-a-commutative-ring]]: If $R$ is commutative and $M,N$ are $R$-modules, then $\operatorname{Tor}^R_i(M,N)\cong\operatorname{Tor}^R_i(N,M)$ naturally.

## Proof

1.1 The lower bound is immediate because $k$ is an $R$-module. If its projective dimension is infinite this already proves the equality. Otherwise let $n=\operatorname{pd}k$. Compute Tor using a length-$n$ resolution of $k$ and use symmetry to get $\operatorname{Tor}_{n+1}^R(k,M)=0$ for every module $M$. [F3, given]

2.1 For each nonzero finite $M$, the minimal-resolution criterion gives $\operatorname{pd}M\le n$; the zero module is projective as well. In particular every cyclic module has that bound. Cyclic detection extends it to all modules and hence bounds global dimension by $n$. This includes $n=0$. [F2, F1, step 1.1] ∎
