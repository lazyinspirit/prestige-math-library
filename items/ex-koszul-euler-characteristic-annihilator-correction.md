---
id: ex-koszul-euler-characteristic-annihilator-correction
kind: example
title: "koszul euler characteristic annihilator correction"
status: draft
origin: pipeline
deps: [thm-hilbert-samuel-multiplicity-as-koszul-euler-characteristic, lem-koszul-euler-characteristic-first-element-reduction, thm-dvr-ideal-and-module-length, def-axiom-of-choice, def-koszul-complex-of-a-sequence-with-coefficients, def-koszul-euler-characteristic-and-degree-indexed-multiplicity, cor-length-is-additive-in-short-exact-sequences]
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
proof_strategy: direct
verification:
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

Assume AC. Let $R$ be a discrete valuation ring with uniformizer $t$ and residue field $k=R/(t)$. Take $M=R\oplus k$ and the one-element sequence $(t)$. Then $H_0(K(t;M))\cong k\oplus k$, $H_1(K(t;M))\cong k$, and all other homology vanishes. Moreover $P_{(t),M}(T)=T+2$, so $e_1((t),M)=\chi(K(t;M))=1$. Omitting the annihilator correction from first-element reduction would give the incorrect value $2$.

## Facts & Assumptions

**Given:** AC, a DVR $R$ with uniformizer $t$ and residue field $k=R/(t)$, $M=R\oplus k$, and the sequence $(t)$.

[A1] We assume [[def-axiom-of-choice]] for the two comparison results.

[F1] The Koszul/multiplicity bridge holds for finite modules with finite-colength sequence ideals: [[thm-hilbert-samuel-multiplicity-as-koszul-euler-characteristic]].

[F2] First-element reduction subtracts the Euler characteristic with annihilator coefficients: [[lem-koszul-euler-characteristic-first-element-reduction]].

[F3] In a DVR, $\ell_R(R/(t^a))=a$ for every integer $a\geq0$: [[thm-dvr-ideal-and-module-length]].

[F4] The one-element Koszul differential is multiplication by that element: [[def-koszul-complex-of-a-sequence-with-coefficients]].

[F5] Euler characteristic and degree-indexed coefficients use $\ell_R(M/I^{n+1}M)$: [[def-koszul-euler-characteristic-and-degree-indexed-multiplicity]].

[F6] Length adds in a short exact sequence: [[cor-length-is-additive-in-short-exact-sequences]].

## Verification

**Proof technique:** direct.

1.1 The complex is $0\to R\oplus k\xrightarrow{t}R\oplus k\to0$, in degrees $1,0$, and the map is $(a,b)\mapsto(ta,0)$. Since a DVR is a domain and $t\ne0$, its kernel is $0\oplus k$ and its image is $tR\oplus0$. Thus $H_1\cong k$, $H_0\cong(R/tR)\oplus k=k\oplus k$, and all remaining homology is zero. [F4, given]

2.1 The DVR length formula at $a=1$ gives $\ell_R(k)=1$, and the split sequence $0\to k\to k\oplus k\to k\to0$ gives length $2$. Therefore $M/tM$ has finite length and $\chi(K)=2-1=1$. [F3, F5, F6, step 1.1]

3.1 For every $n\geq0$, $t^{n+1}M=t^{n+1}R\oplus0$. Hence $M/t^{n+1}M\cong R/(t^{n+1})\oplus k$ has length $(n+1)+1=n+2$. Thus $P(T)=T+2$ and $e_1=1![T]P=1$. The DVR is Noetherian local, $M$ is finite, and the finite-colength hypothesis was verified above, so the bridge theorem under AC gives the same value $1$. [A1, F1, F3, F5, F6, step 2.1]

4.1 Removing $t$ leaves the empty sequence with coefficients $C=M/tM=k\oplus k$ and $T=0:_Mt=0\oplus k$. For an empty sequence its Euler characteristic is the coefficient module's length. Thus the first-element identity reads $\chi(K(t;M))=\ell_R(C)-\ell_R(T)=2-1=1$. Both lengths are finite, so all its hypotheses hold. The nonzero annihilator term is exactly the discrepancy with $\ell_R(C)=2$. [A1, F2, F5, step 1.1, step 2.1, step 3.1] ∎

## Remarks

Locally calculated design example. The general correction formula is supported by Hochster printed p.165; Stacks 43.15.5 supplies the comparison context. The actual instance uses the published DVR length interface and explicit multiplication maps, with no formal power-series construction assumed.
