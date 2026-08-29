---
id: lem-language-concatenation-is-associative
kind: lemma
title: "Language concatenation is associative"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-language-concatenation-powers-and-kleene-star, def-computation-alphabet-and-word-convention]
proof_strategy: direct
justified_by: []
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Statement

For languages $L_1,L_2,L_3$ over the same alphabet,
$$ (L_1L_2)L_3=L_1(L_2L_3). $$

## Facts & Assumptions

**Given:** Languages $L_1,L_2,L_3$ over a fixed alphabet $\Sigma$.

[L1] Language concatenation is $LK=\{uv:u\in L\text{ and }v\in K\}$ by
[[def-language-concatenation-powers-and-kleene-star]].

[L2] If $u:m\to\Sigma$ and $v:n\to\Sigma$ are words, then the concatenated word
$uv:(m+n)\to\Sigma$ is defined by the offset rule of
[[def-computation-alphabet-and-word-convention]].

## Proof

**Proof technique:** direct.

1.1 Let $w\in(L_1L_2)L_3$. By [L1] there are words $u\in L_1$, $v\in L_2$ and $x\in L_3$ with $w=(uv)x$. [given, L1]

1.2 Let $|u|=m$, $|v|=n$, and $|x|=p$. By [L2], both $(uv)x$ and $u(vx)$ have length $m+n+p$, and for each index $i<m+n+p$ they take the same value: from $u$ when $i<m$, from $v$ when $m\le i<m+n$, and from $x$ when $m+n\le i<m+n+p$. Hence $(uv)x=u(vx)$. [L2, algebra]

1.3 Conversely, let $w\in L_1(L_2L_3)$. By [L1] there are words $u\in L_1$, $v\in L_2$, and $x\in L_3$ with $w=u(vx)$. [given, L1]

2.1 Since $v\in L_2$ and $x\in L_3$, the word $vx$ lies in $L_2L_3$ by [L1]. Together with step 1.2 this gives $w=u(vx)\in L_1(L_2L_3)$. [step 1.1, step 1.2, L1]

2.2 The same index comparison as in step 1.2 gives $u(vx)=(uv)x$, and now $uv\in L_1L_2$ by [L1]. So $w\in(L_1L_2)L_3$. [step 1.3, L1, L2]

3.1 Steps 2.1 and 2.2 prove both inclusions, so $(L_1L_2)L_3=L_1(L_2L_3)$. [step 2.1, step 2.2] ∎
