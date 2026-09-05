---
id: prop-acceptable-numberings-are-computably-intertranslatable
kind: proposition
title: "Acceptable numberings are computably intertranslatable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-universal-and-acceptable-numbering, prop-fixed-machine-coding-is-acceptable, thm-kleenes-second-recursion-theorem]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Robert I. Soare, Turing Computability: Theory and Applications"
      url: "https://www.scribd.com/document/620633428/Theory-and-Applications-of-Computability-In-cooperation-with-the-association-Computability-in-Europe-Robert-I-Soare-Turing-Computability-Theory"
---

## Statement

If $(\alpha_e)_{e\in\mathbb N}$ and $(\beta_e)_{e\in\mathbb N}$ are acceptable
numberings of the partial computable functions, then there exist total
computable functions
$$ t_{\alpha\to\beta},t_{\beta\to\alpha}:\mathbb N\to\mathbb N $$
such that for every index $e$,
$$ \beta_{t_{\alpha\to\beta}(e)}=\alpha_e,\qquad \alpha_{t_{\beta\to\alpha}(e)}=\beta_e. $$

## Facts & Assumptions

**Given:** Two acceptable numberings $(\alpha_e)$ and $(\beta_e)$.

[L1] The fixed machine coding defines an acceptable numbering, by [[prop-fixed-machine-coding-is-acceptable]].

[L2] An acceptable numbering is universal and has a total computable hard-wiring operation, by [[def-universal-and-acceptable-numbering]].

## Proof

**Proof technique:** direct.

1.1 By [L1], let $(\varphi_e)$ denote the standard acceptable numbering coming from the fixed machine coding. Because $\alpha$ is universal by [L2], the partial function $(e,x)\mapsto\varphi_e(x)$ has some $\alpha$-index $u$. Because $\alpha$ is acceptable, [L2] supplies a total computable hard-wiring map $s_\alpha$, and then $$ t_{\varphi\to\alpha}(e):=s_\alpha(u,e) $$ satisfies $$ \alpha_{t_{\varphi\to\alpha}(e)}(x)\simeq\alpha_u(\ulcorner e,x\urcorner_{\mathrm{seq}})=\varphi_e(x). $$ So $\varphi$ translates computably into $\alpha$. The same argument gives a computable translator $t_{\varphi\to\beta}$ from $\varphi$ into $\beta$. [L1, L2, given, construct]

2.1 Because $\varphi$ is universal and $\alpha$ is acceptable, the same argument with the roles reversed gives a total computable translator $t_{\alpha\to\varphi}$ with $$ \varphi_{t_{\alpha\to\varphi}(e)}=\alpha_e. $$ Likewise there is $t_{\beta\to\varphi}$ with $$ \varphi_{t_{\beta\to\varphi}(e)}=\beta_e. $$ [L1, L2, step 1.1, construct]

3.1 Compose the translators through the hub numbering $\varphi$: $$ t_{\alpha\to\beta}:=t_{\varphi\to\beta}\circ t_{\alpha\to\varphi},\qquad t_{\beta\to\alpha}:=t_{\varphi\to\alpha}\circ t_{\beta\to\varphi}. $$ Then $$ \beta_{t_{\alpha\to\beta}(e)}=\varphi_{t_{\alpha\to\varphi}(e)}=\alpha_e, $$ and similarly $\alpha_{t_{\beta\to\alpha}(e)}=\beta_e$. [step 1.1, step 2.1, algebra]

4.1 Therefore any two acceptable numberings are computably intertranslatable. [step 3.1] ∎
