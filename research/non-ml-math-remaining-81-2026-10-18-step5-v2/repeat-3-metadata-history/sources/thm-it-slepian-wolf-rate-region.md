---
id: thm-it-slepian-wolf-rate-region
kind: theorem
title: "Finite-IID k-source Slepian–Wolf rate region"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - def-it-finite-iid-multisource
  - def-it-multiterminal-lossless-code
  - def-it-jointly-typical-multisource-blocks
  - lem-it-multisource-typicality-probability
  - lem-it-conditional-typical-fan-cardinality
  - thm-logarithm-derivative-and-integral
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used. Random-bin ensembles and source alphabets are finite; each selected deterministic code can be chosen as the first good map in a fixed finite listing."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, second edition, Chapter 15"
      url: "https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf"
      locator: "§15.4.1–§15.4.3, two-source achievability/converse and the many-source rate inequalities, printed pp. 551–556. The many-source proof is omitted there; the local proof supplies it."
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author-hosted book draft"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
      locator: "Chapter 11, §11.6, Definition 11.15 and Theorem 11.16, printed pp. 225–226, two-source region and converse/achievability."
---

## Statement

Let $(Z_t)_{t\ge1}$ be a finite-alphabet IID $k$-source with joint law $P$ as in [[def-it-finite-iid-multisource]], where $k\ge2$. The achievable fixed-length lossless rate vectors in the sense of [[def-it-multiterminal-lossless-code]] are exactly
$$\mathcal R_{\mathrm{SW}}(P)=\left\{R\in[0,\infty)^k:\sum_{i\in S}R_i\ge H_P(X_S\mid X_{S^c})\text{ for every nonempty }S\subseteq[k]\right\}.$$
For $S=[k]$, the inequality is the total-rate bound $\sum_iR_i\ge H(P)$. All logarithms are natural, so rates and entropies are in nats per source symbol.

## Facts & Assumptions

**Given:** A finite-alphabet IID $k$-source with law $P$, a rate vector $R\in[0,\infty)^k$, and the code convention in the Statement.

[F1] [[def-it-finite-iid-multisource]]: each vector source block has joint law $P^{\otimes n}$; for each $S$, $H_P(X_S\mid X_{S^c})$ is finite conditional entropy under $P$.

[F2] [[def-it-multiterminal-lossless-code]]: a rate vector is achievable when there are increasing blocklengths with separate encoders, one common decoder, vanishing block-error probability, and coordinate rate limsups bounded by $R_i$.

[F3] [[def-it-jointly-typical-multisource-blocks]]: $\mathcal T_n(P,\delta,\epsilon)$ consists of supported blocks whose empirical law, full information density, and every nonempty-subset conditional information density are within the stated tolerances.

[F4] [[lem-it-multisource-typicality-probability]]: for every fixed $\delta,\epsilon>0$, $P^{\otimes n}(\mathcal T_n(P,\delta,\epsilon))\to1$.

[F5] [[lem-it-conditional-typical-fan-cardinality]]: for each nonempty $S$ and $\eta>0$, a sufficiently small empirical tolerance bounds the number of $S$-blocks jointly typical with any fixed complement block by $(n+1)^{|\mathcal X|}e^{n(H_P(X_S\mid X_{S^c})+\eta)}$.

[F6] [[thm-logarithm-derivative-and-integral]]: for $x>0$, $\ln x=\int_1^x dt/t$.

## Proof


**Given:** The source and rate vector in the Statement.

1.1 For the converse, suppose $R$ is achievable and fix nonempty $S\subseteq[k]$. Write $H_S:=H_P(X_S\mid X_{S^c})$ and $R_S:=\sum_{i\in S}R_i$. If $R_S<H_S$, put $\gamma:=H_S-R_S>0$. By [F2], along the achieving blocklengths and for all sufficiently large $n$, the product message count $M_S:=\prod_{i\in S}M_i$ obeys $n^{-1}\ln M_S\le R_S+\gamma/4$, since each of the finitely many coordinate rate limsups is at most $R_i$. [given, F2, choose, algebra]

1.2 Fix such a blocklength and a complement word $x_{S^c}^n$ of positive probability. Its complement message indices are then fixed. For each possible $S$-message tuple, the common decoder outputs at most one candidate $x_S^n$, so at most $M_S$ values of $x_S^n$ can be decoded correctly for this complement word. [F1, F2, construct]

1.3 For achievability, take any $R\in\mathcal R_{\mathrm{SW}}(P)$ and any slack $a>0$. Put $\rho_i:=R_i+a$ and $\eta:=a/2$. Then for every nonempty $S$, $\sum_{i\in S}\rho_i\ge H_S+|S|a\ge H_S+a$. Because there are finitely many such $S$, [F5] gives one empirical tolerance $\delta>0$ that works for every subset. Set $\epsilon:=a/4$ and use $\mathcal T_n(P,\delta,\epsilon)$. [given, F5, choose, algebra]

1.4 For this $n$, set $M_i:=\lceil e^{n\rho_i}\rceil$. For every encoder $i$, independently assign each word in $\mathcal X_i^n$ a uniform label in $[M_i]$, with all word-label assignments independent across words and encoders. The decoder returns the unique jointly typical source tuple having the received vector of labels; if there is not exactly one, it returns a fixed default tuple from fixed finite listings of the nonempty alphabets. This defines a finite ensemble of valid codes of the form in [F2]. [F1, F2, F3, construct]

1.5 Fix a true tuple $z^n\in\mathcal T_n$ and a distinct jointly typical competitor $\widetilde z^n$. Let $S$ be exactly the nonempty set of terminals where $\widetilde x_i^n\ne x_i^n$. For each $i\in S$, the two distinct source words receive independent uniform labels, so their collision probability is $1/M_i$; assignments for distinct encoders are also independent. Therefore the probability that all message labels of the competitor equal the true labels is $\prod_{i\in S}M_i^{-1}$. [F2, construct, algebra]

2.1 Choose the typical set $\mathcal T_n(P,1,\gamma/4)$. For any supported block in this set, [F3] gives $P^{\otimes n}(x_S^n\mid x_{S^c}^n)\le e^{-n(H_S-\gamma/4)}$. Summing over at most $M_S$ correctly decoded $S$-blocks from step 1.2 and then averaging over $X_{S^c}^n$ yields $P\{\text{correct decode and }Z^n\in\mathcal T_n\}\le M_Se^{-n(H_S-\gamma/4)}\le e^{-n\gamma/2}$. [F1, F3, step 1.1, step 1.2, algebra]

2.2 If the true tuple is typical, decoding error requires at least one distinct typical competitor to share its message vector. For a fixed nonempty difference set $S$ and fixed true complement $x_{S^c}^n$, [F5] bounds the number of possible $S$-parts of such competitors by $(n+1)^m e^{n(H_S+a/2)}$, where $m=|\mathcal X|$. By step 1.5 and the union bound over all nonempty $S$, the expected error over the finite random-code ensemble is at most $P(Z^n\notin\mathcal T_n)+(2^k-1)(n+1)^m e^{-na/2}$. Indeed, $M_i\ge e^{n(R_i+a)}$ and $\sum_{i\in S}(R_i+a)\ge H_S+|S|a$, leaving exponent at most $-a/2$ for each $S$. [F4, F5, step 1.3, step 1.5, algebra]

3.1 By [F4], $P(Z^n\notin\mathcal T_n(P,1,\gamma/4))\to0$. Step 2.1 therefore implies the probability of correct decoding tends to zero, so the block-error probability tends to one. This contradicts [F2]. Thus every achievable $R$ satisfies $R_S\ge H_S$ for every nonempty $S$. [F2, F4, step 2.1, algebra]

3.2 The first term in step 2.2 tends to zero by [F4]. For the second, [F6] and $1/t\le1/\sqrt t$ for $t\ge1$ give $\ln(n+1)\le2(\sqrt{n+1}-1)$, hence $m\ln(n+1)/n\to0$ and $(n+1)^me^{-na/2}\to0$. Since the ensemble is finite, at least one deterministic code has error no larger than the ensemble average; select the first such map tuple in a fixed finite listing. Thus for every fixed $a>0$ and all sufficiently large $n$, there is a deterministic code with error tending to zero and rates $\frac1n\ln M_i\le R_i+a+\frac{\ln2}{n}$, using $\lceil x\rceil\le2x$ for $x\ge1$. [F4, F6, step 2.2, algebra, choose]

4.1 Finally take $a_j:=1/j$ and choose recursively increasing $n_j$ large enough that the selected code's error is at most $1/j$ and $(\ln2)/n_j\le1/j$. Step 3.2 then gives coordinate rate limsups at most $R_i$. These codes make $R$ achievable, including boundary points where one or more subset inequalities are equalities. [F2, step 3.2, choose, algebra] ∎

## Remark

The random-coding construction in steps 1.4–1.5 assigns uniform labels independently across distinct source words and across encoders; its product collision bound uses both independence properties. This theorem is lossless. It makes no claim about an exact general distributed lossy rate-distortion region.
