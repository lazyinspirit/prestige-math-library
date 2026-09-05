---
id: ex-acceptable-numberings-are-computably-intertranslatable
kind: example
title: "Compiling between two acceptable numberings"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [prop-acceptable-numberings-are-computably-intertranslatable]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references: []
---

## Example

Let $(\alpha_e)$ be the fixed machine-coding numbering, and define a second
acceptable numbering $(\beta_j)$ by duplicating every $\alpha$-index. Write
$$ \pi(j):=\begin{cases}e,&j=\ulcorner b,e\urcorner_{\mathrm{seq}}\text{ for some }b\in\{0,1\},\\ 0,&\text{otherwise},\end{cases} $$
and set
$$ \beta_j:=\alpha_{\pi(j)}. $$
Then $\beta$ carries two distinguished syntactic names
$\ulcorner 0,e\urcorner_{\mathrm{seq}}$ and $\ulcorner 1,e\urcorner_{\mathrm{seq}}$
for each $\alpha$-program, while all other indices collapse to $\alpha_0$.

## Facts & Assumptions

**Given:** The duplicate numbering $(\beta_j)$ built from $(\alpha_e)$ above.

[L1] Any two acceptable numberings admit total computable translators in both directions, by [[prop-acceptable-numberings-are-computably-intertranslatable]].

## Verification

**Proof technique:** direct.

1.1 The map $$ t_{\alpha\to\beta}(e):=\ulcorner 0,e\urcorner_{\mathrm{seq}} $$ is total computable and satisfies $$ \beta_{t_{\alpha\to\beta}(e)}=\alpha_e. $$ The decoder-projection $$ t_{\beta\to\alpha}(j):=\pi(j) $$ is also total computable, and by definition of $\beta$ it satisfies $$ \alpha_{t_{\beta\to\alpha}(j)}=\beta_j $$ for every index $j$. [given, construct]

2.1 Thus these two numberings are explicitly compiled into each other. This is a concrete instance of [L1]. [L1, step 1.1] ∎
