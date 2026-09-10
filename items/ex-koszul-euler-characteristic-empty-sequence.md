---
id: ex-koszul-euler-characteristic-empty-sequence
kind: example
title: "koszul euler characteristic empty sequence"
status: published
origin: pipeline
deps: [def-koszul-euler-characteristic-and-degree-indexed-multiplicity, thm-hilbert-samuel-multiplicity-as-koszul-euler-characteristic, def-axiom-of-choice]
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Stacks Project, 43.15.4\u20136; local proof with stated module-relative and coefficient conventions"
      url: "https://stacks.math.columbia.edu/tag/0AZU"
    - title: "Hochster, Math 615 Winter 2012, pp.104\u2013108: Euler characteristics and the multiplicity theorem"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2024/10/615W12.pdf"
pipeline_run: phase-2-catchup-24
---

## Example

Assume AC. For any finite-length module $M$ over a commutative Noetherian local ring $(R,\mathfrak m)$, the empty sequence satisfies $\chi(K(\varnothing;M))=e_0(0,M)=\ell_R(M)$. For the concrete instance $M=R/\mathfrak m$, both numbers are $1$. For $M=0$, both are $0$.

## Facts & Assumptions

**Given:** AC, a commutative Noetherian local ring $(R,\mathfrak m)$, a finite-length $R$-module $M$, and the empty sequence. The displayed special instances are $M=R/\mathfrak m$ and $M=0$.

[A1] We assume [[def-axiom-of-choice]] for the bridge theorem cited below.

[F1] The empty sequence has complex $M[0]$, ideal zero, and constant polynomial: [[def-koszul-euler-characteristic-and-degree-indexed-multiplicity]].

[F2] The coefficient indexed by the sequence length equals the Koszul Euler characteristic: [[thm-hilbert-samuel-multiplicity-as-koszul-euler-characteristic]].

## Verification

**Proof technique:** direct.

1.1 The empty Koszul complex has $K_0=M$, all other terms zero and all differentials zero. Thus $H_0=M$ and $H_i=0$ for $i\ne0$, giving $\chi(K)=\ell_R(M)$. [F1, given]

2.1 For every $n\geq0$, $0^{n+1}M=0$, so $M/0^{n+1}M=M$ and $P(T)=\ell_R(M)$. Hence $e_0=0![T^0]P=\ell_R(M)$. A composition series also makes $M$ finitely generated: take a lift of one nonzero generator of each simple factor; induction through the finite series shows these finitely many lifts generate $M$. The module-relative hypothesis is exactly finite length of $M$, so the bridge theorem with $r=0$ applies under AC and agrees with this direct calculation. [A1, F1, F2, step 1.1]

3.1 In particular take $M=k=R/\mathfrak m$. Its only submodules are zero and $k$, since any nonzero vector spans this one-dimensional $k$-space; its length is $1$. We obtain $H_0=k$, $P=1$ and $\chi=e_0=1$. With $M=0$ the empty series has length zero and the same calculation gives $P=\chi=e_0=0$. [F1, step 1.1, step 2.1, algebra] ∎

## Remarks

This is a locally calculated design example, not a named example attributed to a source. The empty-sequence convention is consistent with Hochster printed p.166 (the zero-generator case) and with Stacks 43.15.4 at index zero. The general bridge is only a consistency check here; the homology and polynomial were calculated directly.
