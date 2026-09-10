---
id: ex-koszul-euler-characteristic-redundant-zero-generator
kind: example
title: "koszul euler characteristic redundant zero generator"
status: draft
origin: pipeline
deps: [thm-hilbert-samuel-multiplicity-as-koszul-euler-characteristic, lem-koszul-euler-characteristic-first-element-reduction, thm-dvr-ideal-and-module-length, def-axiom-of-choice, thm-ideals-in-a-dvr, def-koszul-complex-of-a-sequence-with-coefficients, def-koszul-euler-characteristic-and-degree-indexed-multiplicity, cor-length-is-additive-in-short-exact-sequences]
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

Assume AC. Over a discrete valuation ring $R$ with uniformizer $t$ and residue field $k=R/(t)$, the sequence $(t,0)$ on $M=R$ generates $I=(t)$ and has $H_0\cong k$, $H_1\cong k$, $H_2=0$. Thus $\chi(K(t,0;R))=e_2((t),R)=0$, although $R$ has dimension one and its degree-one leading multiplicity $e_1((t),R)$ is $1$.

## Facts & Assumptions

**Given:** AC, a DVR $R$ with uniformizer $t$ and residue field $k=R/(t)$, $M=R$, and the ordered sequence $(t,0)$.

[A1] We assume [[def-axiom-of-choice]] for the comparison lemmas.

[F1] A sequence of length $r$ computes the coefficient $e_r$: [[thm-hilbert-samuel-multiplicity-as-koszul-euler-characteristic]].

[F2] First-element reduction retains quotient minus annihilator: [[lem-koszul-euler-characteristic-first-element-reduction]].

[F3] DVR quotients satisfy $\ell_R(R/(t^a))=a$: [[thm-dvr-ideal-and-module-length]].

[F4] Every nonzero ideal of the DVR is $(t^a)$ for a unique $a\geq0$: [[thm-ideals-in-a-dvr]].

[F5] The ordered deletion differential is fixed in [[def-koszul-complex-of-a-sequence-with-coefficients]].

[F6] The coefficients and Euler characteristic are defined in [[def-koszul-euler-characteristic-and-degree-indexed-multiplicity]].

[F7] Finite direct sum lengths add: [[cor-length-is-additive-in-short-exact-sequences]].

## Verification

**Proof technique:** direct.

1.1 In the ordered bases $e_1,e_2$ and $e_1\wedge e_2$, the complex is $0\to R\xrightarrow{d_2}R^2\xrightarrow{d_1}R\to0$ with $d_1(a,b)=ta$ and $d_2(c)=(0,tc)$, because deletion gives $te_2-0e_1$. Their composite is zero. Since $t$ is nonzero in a domain, $\ker d_2=0$ and $\ker d_1=0\oplus R$. Consequently $H_2=0$, $H_1=(0\oplus R)/(0\oplus tR)\cong k$ and $H_0=R/tR=k$. [F5, given]

2.1 The length formula gives $\ell_R(k)=1$. Hence both nonzero homology modules have length one, and $\chi(K)=1-1+0=0$. The homology has total length $2$ by additivity, so its alternating cancellation is not acyclicity. [F3, F6, F7, step 1.1]

3.1 For $n\geq0$ we have $\ell_R(R/I^{n+1})=n+1$, so $P(T)=T+1$. Thus $e_2=2![T^2]P=0$ and $e_1=1![T]P=1$. The DVR is Noetherian local, $R$ is finite over itself and $R/I=k$ has finite length. The bridge theorem applies under AC with the actual sequence length $r=2$, agreeing with $\chi=0$. [A1, F1, F3, F6, step 2.1]

4.1 To identify the dimension without a general Hilbert–Samuel dimension theorem, let $\mathfrak p$ be a nonzero prime ideal. It has the form $(t^a)$ with $a\geq1$ because it is proper. Since $t^a\in\mathfrak p$, repeated primality gives $t\in\mathfrak p$. Thus $\mathfrak p=(t)$, as $(t)$ is maximal. Also $(0)$ is prime because $R$ is a domain, and $t\ne0$ makes $(0)\subsetneq(t)$. These are all primes, so the largest number of strict inclusions in a prime chain is one. Therefore the dimension is one, and the coefficient at that dimension is the $e_1=1$ already calculated. [F4, step 3.1]

5.1 The first-element identity provides another explicit check: removing $t$ gives $C=k$ and $T=0$ since multiplication by $t$ on $R$ is injective. The remaining sequence is $(0)$, whose complex on $k$ is $0\to k\xrightarrow{0}k\to0$. It has one copy of $k$ in each homology degree, so $\chi(K(0;k))=1-1=0$, whereas $K(0;0)$ is zero. The reduction formula is therefore $0-0=0$, with $C/0C=k$ finite length. This confirms that the redundant generator changes the coefficient index, not the generated ideal. [A1, F2, F5, F6, step 1.1, step 2.1, step 3.1] ∎

## Remarks

Locally calculated design example. Source context: Stacks 43.15.5 and Hochster printed pp.106–108, 165. The ordered two-element differential and the prime-chain calculation are supplied explicitly; no general theorem equating Hilbert degree and support dimension is used.
