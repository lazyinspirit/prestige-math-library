---
id: "ex-finite-regular-local-base-cohen-macaulay-freeness"
kind: "example"
title: "Cohen–Macaulayness over a finite regular local base"
deps: ["thm-auslander-buchsbaum-formula", "thm-auslander-buchsbaum-serre-regularity-criterion", "cor-dimension-preserved-by-integral-extensions", "cor-every-system-of-parameters-is-regular-in-a-cohen-macaulay-module", "cor-one-regular-system-of-parameters-implies-cohen-macaulay", "thm-regular-local-rings-are-domains-and-cohen-macaulay", "thm-depth-bounded-by-support-dimension", "thm-nakayama-lemma"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Exercise 12.41, p.125"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
    - title: "Corollary 1.63, p.27"
      url: "https://jack-jeffries.github.io/UM/LCnotes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Example

Let $A\hookrightarrow B$ be an injective finite local map of nonzero Noetherian local rings, with $A$ regular. Then $B$ is Cohen–Macaulay if and only if it is free as an $A$-module.

## Facts & Assumptions

**Given:** The objects and hypotheses in the example. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[thm-auslander-buchsbaum-formula]]: For a nonzero finite module $M$ of finite projective dimension over a nonzero Noetherian local ring $R$, $\operatorname{pd}_RM+\operatorname{depth}_RM=\operatorname{depth}R$. Consequently such an $M$ with $\operatorname{depth}M=\operatorname{depth}R$ is free.

[F2] [[thm-auslander-buchsbaum-serre-regularity-criterion]]: For a nonzero Noetherian local ring $(R,\mathfrak m,k)$ the following are equivalent: $R$ is regular; $\operatorname{pd}_Rk<\infty$; $\operatorname{gldim}R<\infty$; and every finite $R$-module has finite projective dimension. When these hold, $\operatorname{gldim}R=\operatorname{pd}_Rk=\dim R$. A nonzero finite module over regular local $R$ is maximal Cohen–Macaulay (depth $\dim R$) if and only if it is free.

[F3] [[cor-dimension-preserved-by-integral-extensions]]: Assume the Axiom of Choice. Let $A\subseteq B$ be an injective integral extension of nonzero commutative rings. Then $\dim A=\dim B$.

[F4] [[cor-every-system-of-parameters-is-regular-in-a-cohen-macaulay-module]]: Every system of parameters of a nonzero finite Cohen--Macaulay module over a Noetherian local ring is a regular sequence on that module.

[F5] [[cor-one-regular-system-of-parameters-implies-cohen-macaulay]]: Let $0\ne M$ be finite over a Noetherian local ring. If one system of parameters for $M$ is $M$-regular, then $M$ is Cohen--Macaulay. Here a system of parameters for $M$ means a tuple $x_1,\ldots,x_d$ in the maximal ideal, where $d=\dim\operatorname{Supp}_R(M)$, such that $M/(x_1,\ldots,x_d)M$ has finite length.

[F6] [[thm-regular-local-rings-are-domains-and-cohen-macaulay]]: A regular local ring $R$ of dimension $d$ is a domain and Cohen–Macaulay. For every regular system $(x_1,\ldots,x_d)$, the tuple is $R$-regular and $R/(x_1,\ldots,x_c)$ is regular local of dimension $d-c$ for all $0\le c\le d$.

[F7] [[thm-depth-bounded-by-support-dimension]]: For every nonzero finite module $M$ over a Noetherian local ring $R$, $$0\le\operatorname{depth}_R(M)\le\dim\operatorname{Supp}_R(M).$$ The nonzero hypothesis is essential for this formulation: under the adopted convention $\operatorname{depth}_R(0)=+\infty$, whereas the empty support has no nonnegative Krull dimension.

[F8] [[thm-nakayama-lemma]]: Assume the Axiom of Choice. Let $R$ be a commutative ring, let $I \trianglelefteq R$ satisfy $I \subseteq J(R)$, and let $M$ be a finitely generated left $R$-module. If $IM=M$, then $M=0$.

## Verification

1.1 Finite injectivity makes the extension integral and gives $d=\dim A=\dim B$. Choose a regular system $x_1,\ldots,x_d$ of $A$. The quotient $C=B/\mathfrak m_AB$ is a finite-dimensional algebra over $k_A$ and a nonzero local ring. Its descending powers of the maximal ideal stabilize as vector subspaces; at stabilization Nakayama makes that power zero. Thus $\sqrt{\mathfrak m_AB}=\mathfrak m_B$, and the images of the $x_i$ are parameters of $B$. [F3, F6, F8]

2.1 If $B$ is Cohen–Macaulay, those parameters are $B$-regular. Regarded as an $A$-module, $B$ consequently has depth at least $d$. The support-dimension bound gives depth at most $d$ (its annihilator is zero by injectivity). Homological regularity makes its projective dimension over $A$ finite; Auslander–Buchsbaum gives projective dimension zero and freeness. [F4, F7, F2, F1, step 1.1]

3.1 Conversely, if $B$ is free over $A$, the regular parameter sequence of $A$ remains injective successively on the finite direct sums describing $B$ and its successive quotients. The terminal quotient is nonzero. Since this is a system of parameters of $B$, the regular-parameter criterion makes $B$ Cohen–Macaulay. If $d=0$, the sequence is empty and $A$ is a field; all steps remain valid. [F6, F5, step 1.1] ∎
