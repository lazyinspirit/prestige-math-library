---
id: lem-local-gch-hartogs-dichotomy
kind: lemma
title: "The local-GCH Hartogs dichotomy"
status: draft
origin: pipeline
deps: ["lem-local-gch-absorbs-sums-and-squares", "lem-powerset-fibres-force-well-orderability", "thm-hartogs", "thm-hessenberg", "thm-schroder-bernstein"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Caicedo, Some choiceless results (5), Lemma 2 and subsequent Hartogs equality"
      url: https://caicedoteaching.wordpress.com/2009/02/02/580-some-choiceless-results-5/
---

## Statement

Work in ZF. Suppose $\omega\preceq X$ and $\mathrm{CH}(X)$. If $h(X)\preceq\mathcal P(X)$, then $X$ is well-orderable and $\mathcal P(X)\approx h(X)$. Otherwise $h(\mathcal P(X))=h(X)$.

## Facts & Assumptions

[F1] [[lem-local-gch-absorbs-sums-and-squares]]: Under the hypotheses, $X$ absorbs its square and two copies; the power set absorbs its square.

[F2] [[lem-powerset-fibres-force-well-orderability]]: An injection $X\times\mathcal P(X)\to X\sqcup\alpha$ well-orders $X$.

[F3] [[thm-hartogs]]: No injection $h(X)\to X$ exists, and every smaller ordinal embeds.

[F4] [[thm-hessenberg]]: An infinite well-ordered cardinal absorbs its square in ZF.

[F5] [[thm-schroder-bernstein]]: Opposite injections yield a bijection.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Put $P=\mathcal P(X)$ and $h=h(X)$. Suppose $h\preceq P$. Then $X\prec X\sqcup h\preceq P\sqcup P\approx P$. Strictness holds because $X\sqcup h\approx X$ would embed $h$ into $X$. For the last bijection, $P\sqcup P\approx\mathcal P(X\sqcup1)\approx P$, using the omega shift. Local GCH therefore gives $X\sqcup h\approx P$. [F1, F3]

2.1 Singleton injection in the first coordinate and square absorption give $X\times P\preceq P^2\approx P$, while $P\preceq X\times P$ using one fixed point of $X$. Thus $X\times P\approx P\approx X\sqcup h$, and the fibre lemma well-orders $X$. [F1, F2, F5, step 1.1]

3.1 Let $\lambda$ be the least ordinal equipotent with this well-orderable $X$. Hartogs $h$ is an infinite initial ordinal: an equipotent smaller ordinal would contradict its least-nonembedding property. Moreover $\lambda<h$. Both $X$ and $h$ embed in $h$, so $X\sqcup h$ injects into $h\times h\approx h$, and the reverse injection is immediate. Hence $P\approx h$. [F3, F4, F5, step 1.1, step 2.1]

4.1 If instead $h(X)$ does not inject into $P$, its least nonembedding ordinal satisfies $h(P)\le h(X)$. Since $X$ injects into $P$ by singletons, every ordinal embedding into $X$ embeds into $P$, so $h(X)\le h(P)$. This yields the second branch. [F3] ∎
