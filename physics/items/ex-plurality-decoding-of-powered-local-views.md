---
id: ex-plurality-decoding-of-powered-local-views
kind: example
title: "Numerical local-view plurality decoding"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-plurality-decoding-of-powered-local-views]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP theorem by gap amplification, §6 Equation (4) and Lemma 6.1, printed pp. 19-21."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.5.1, printed pp. 371-373."
      url: "https://theory.cs.umd.edu/pub/complexity/book.pdf"
---

## Example

Let $G$ be a $4$-regular constraint graph over the alphabet $\Sigma=\{a,b,c\}$ and put $t:=1$, so that $(2d)^t=8$; let $G_t$ be its local-view powered graph in the conventions of [[def-plurality-decoding-of-powered-local-views]], and fix a vertex $v$ and a powered labeling $\varphi$. Suppose the $8$ length-$t$ lazy patterns read from $v$ have endpoint views that claim the labels
$$(a,a,a,a,a,b,b,c)$$
for $v$, one pattern each. Then the opinion distribution of $v$ is $p_v(a)=5/8$, $p_v(b)=2/8$, $p_v(c)=1/8$, so the plurality decoding of $\varphi$ at $v$ is $\hat\varphi(v)=a$, of frequency $5/8$; the fixed tie-breaking order is not invoked, because the claimed maximum is attained by the single symbol $a$.

## Facts & Assumptions

**Given:** a $4$-regular binary constraint graph $G$ with $t=1$ (so that the number $(2d)^t$ of length-$t$ patterns read from a vertex is $8$), its powered graph $G_t$, a vertex $v$, a powered labeling $\varphi$ whose $8$ length-$t$ patterns from $v$ end in views claiming the labels $a,a,a,a,a,b,b,c$ respectively, and a fixed total order on $\Sigma$ used for tie breaking.

[F1] For $a'\in\Sigma$ the number $p_v(a')$ is the number of length-$t$ patterns read from $v$ whose endpoint view claims $a'$ for $v$, divided by the total number $(2d)^t$ of such patterns; the plurality decoding assigns to $v$ the least symbol, in the fixed order, attaining $\max_{a'}p_v(a')$ ([[def-plurality-decoding-of-powered-local-views]]).

[F2] The opinion distribution counts length-$t$ patterns with multiplicity, so two distinct patterns ending at the same vertex contribute two claims. The decoding's fixed total order is used only when several symbols attain the maximum ([[def-plurality-decoding-of-powered-local-views]]).

## Verification

**Proof technique:** direct.

1.1 The eight patterns contribute one claim each, so the claim counts for $v$ are $5$ for $a$, $2$ for $b$ and $1$ for $c$; dividing by the number $8$ of patterns gives $p_v(a)=5/8$, $p_v(b)=2/8$ and $p_v(c)=1/8$, which sum to $1$. [F1, algebra]

2.1 Since $5/8>2/8>1/8$, the maximum of $p_v$ is attained only by $a$, so [F1] gives $\hat\varphi(v)=a$ without any use of the tie-breaking rule; the frequency of the decoded label at $v$ is $p_v(a)=5/8$. [F1, step 1.1, algebra]

3.1 The example illustrates the two conventions that the decoding uses: patterns are counted with multiplicity rather than as distinct centres, so two patterns ending at the same centre contribute their claims twice, and the tie-breaking order matters only when the maximum of $p_v$ is attained by several symbols, which does not happen here. [F2, step 2.1] ∎
