---
id: "lem-local-global-dimension-equals-residue-field-projective-dimension"
kind: "lemma"
title: "local global dimension equals residue field projective dimension"
deps: ["lem-global-dimension-is-detected-on-cyclic-modules", "lem-projective-dimension-from-last-nonzero-betti-number", "thm-tor-symmetry-over-a-commutative-ring", "def-axiom-of-choice"]
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
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

Assume the Axiom of Choice. For a nonzero Noetherian local ring $(R,\mathfrak m,k)$, $\operatorname{gldim}R=\operatorname{pd}_Rk$, allowing infinity. If this common value is $n<\infty$, every $R$-module has projective dimension at most $n$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement, including the Axiom of Choice ([[def-axiom-of-choice]]). AC supplies DC by choosing a successor from each nonempty successor set of a serial relation and then recursively iterating; it also supplies the required projective resolutions by iteratively taking free modules on the underlying sets of successive kernels.

[F1] [[lem-global-dimension-is-detected-on-cyclic-modules]]: For a unital ring $R$, its left global dimension equals $\sup_I\operatorname{pd}_R(R/I)$ over all left ideals $I$, and equals the supremum of the injective dimensions of all left modules. The equalities allow infinity; in the commutative Noetherian case the cyclic modules are finite.

[F2] [[lem-projective-dimension-from-last-nonzero-betti-number]]: For a nonzero finite module $M$ over a nonzero Noetherian local ring, $\operatorname{pd}_RM=\sup\{i\ge0:\beta_i^R(M)\ne0\}$, allowing infinity. For each integer $q\ge0$, $\operatorname{pd}_RM\le q$ if and only if $\operatorname{Tor}_{q+1}^R(k,M)=0$.

[F3] [[thm-tor-symmetry-over-a-commutative-ring]]: Under DC and with projective resolutions supplied, if $R$ is commutative and $M,N$ are $R$-modules, then $\operatorname{Tor}^R_i(M,N)\cong\operatorname{Tor}^R_i(N,M)$ naturally.

## Proof

1.1 The lower bound is immediate because $k$ is an $R$-module. If its projective dimension is infinite this already proves the equality. Otherwise let $n=\operatorname{pd}k$. AC from the Given supplies resolutions of arbitrary $M$ and implies the DC premise of [F3]. Compute Tor using a length-$n$ resolution of $k$ and use [F3] to get $\operatorname{Tor}_{n+1}^R(k,M)=0$ for every module $M$. [F3, given]

2.1 For each nonzero finite $M$, the minimal-resolution criterion gives $\operatorname{pd}M\le n$; the zero module is projective as well. In particular every cyclic module has that bound. Cyclic detection extends it to all modules and hence bounds global dimension by $n$. This includes $n=0$. [F2, F1, step 1.1] ∎
