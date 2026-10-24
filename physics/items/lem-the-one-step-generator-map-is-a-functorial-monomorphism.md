---
id: lem-the-one-step-generator-map-is-a-functorial-monomorphism
kind: lemma
title: "The one-step generator map is a functorial monomorphism"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-functorial-one-step-generator-extension, cor-the-pushout-of-a-monomorphism-is-a-monomorphism, thm-ab5-implies-ab4]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 19.11: Injectives in Grothendieck categories"
      url: "https://stacks.math.columbia.edu/tag/05AB"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-28
---
## Statement

In a locally small Grothendieck category, for the one-step generator extension functor $M\mapsto\mathbf M(M)$, the canonical map $\eta_M:M\to\mathbf M(M)$ is a monomorphism, natural in $M$. In addition, every indexed map $N\to M$ from a subobject $N\subseteq U$ extends to a map $U\to\mathbf M(M)$ one stage later.
## Facts & Assumptions

**Given:** An object $M$ in a locally small Grothendieck category with fixed generator $U$.

[L1] In a locally small Grothendieck category, the one-step generator extension is defined by a pushout over the set of subobjects of $U$ and maps into $M$ ([[def-functorial-one-step-generator-extension]]).

[L2] Pushouts of monomorphisms are monomorphisms in an abelian category ([[cor-the-pushout-of-a-monomorphism-is-a-monomorphism]]).

[L3] AB5 implies AB4, so every small coproduct of monomorphisms in a Grothendieck category is monic ([[thm-ab5-implies-ab4]]).
## Proof

**Proof technique:** direct.

1.1 In the defining pushout square of [L1], the left vertical map is the coproduct of the subobject inclusions $N\hookrightarrow U$, hence is monic by [L3]. Therefore the induced map $\eta_M:M\to\mathbf M(M)$ is monic by [L2]. For every $g:M\to M'$, the morphism $\mathbf M(g)$ supplied by [L1] is the map of pushouts induced by $g$, so $$\mathbf M(g)\eta_M=\eta_{M'}g.$$ Thus the monomorphisms $\eta_M$ are natural in $M$. [L1, L2, L3, algebra]

2.1 For each $(N,\varphi)\in S_M$, let $h_{N,\varphi}:U\to\mathbf M(M)$ be the lower pushout map restricted to the corresponding summand. Commutativity of the defining square gives $$h_{N,\varphi}i_N=\eta_M\varphi.$$ Hence every indexed map $\varphi:N\to M$ extends across $N\hookrightarrow U$ after one application of $\mathbf M$. [L1, step 1.1, construct]

3.1 Hence $\eta_M$ is a functorial monomorphism and every indexed generator-subobject map extends after one application of $\mathbf M$. [step 1.1, step 2.1] ∎
