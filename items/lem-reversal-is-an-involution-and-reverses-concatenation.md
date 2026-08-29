---
id: lem-reversal-is-an-involution-and-reverses-concatenation
kind: lemma
title: "Reversal is an involution and reverses concatenation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-word-and-language-reversal, def-language-concatenation-powers-and-kleene-star, def-computation-alphabet-and-word-convention]
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

For words $u,v$ over a fixed alphabet and languages $L,K$ over that alphabet:

1. $(uv)^R=v^Ru^R$.
2. $(w^R)^R=w$ for every word $w$.
3. $(LK)^R=K^RL^R$ and $(L^R)^R=L$.

## Facts & Assumptions

**Given:** Words $u,v,w$ and languages $L,K$ over a fixed alphabet $\Sigma$.

[L1] Word reversal is defined by $w^R(i)=w(n-1-i)$ for a word $w:n\to\Sigma$,
and language reversal is $L^R=\{x^R:x\in L\}$, by
[[def-word-and-language-reversal]].

[L2] Word concatenation is the offset construction and language concatenation is
$AB=\{ab:a\in A\text{ and }b\in B\}$ by
[[def-computation-alphabet-and-word-convention]] and
[[def-language-concatenation-powers-and-kleene-star]].

## Proof

**Proof technique:** direct.

1.1 Let $|u|=m$ and $|v|=n$. For $i<n$, the $i$th letter of $(uv)^R$ is the $(m+n-1-i)$th letter of $uv$, hence the $(n-1-i)$th letter of $v$ by [L2], so $(uv)^R(i)=v^R(i)$. [given, L1, L2]

1.2 For $n\le i<m+n$, write $i=n+j$ with $j<m$. Then the $i$th letter of $(uv)^R$ is the $(m-1-j)$th letter of $u$, so $(uv)^R(i)=u^R(j)$; this is exactly the offset rule for the concatenation $v^Ru^R$. Therefore $(uv)^R=v^Ru^R$. [L1, L2, algebra]

1.3 Let $|w|=n$. For each $i<n$, $$ (w^R)^R(i)=w^R(n-1-i)=w(n-1-(n-1-i))=w(i). $$ So $(w^R)^R=w$. [L1, algebra]

2.1 If $x\in(LK)^R$, then $x=y^R$ for some $y\in LK$ by [L1]. By [L2] we may write $y=uv$ with $u\in L$ and $v\in K$, and then step 1.2 gives $x=(uv)^R=v^Ru^R\in K^RL^R$. Hence $(LK)^R\subseteq K^RL^R$. [L1, L2, step 1.2]

2.2 Conversely, if $x\in K^RL^R$, then $x=v^Ru^R$ with $u\in L$ and $v\in K$ by [L1] and [L2]. Step 1.2 gives $x=(uv)^R$, and $uv\in LK$, so $x\in(LK)^R$. Thus $(LK)^R=K^RL^R$. [L1, L2, step 1.2]

3.1 By [L1], $x\in(L^R)^R$ exactly when $x=y^R$ for some $y\in L^R$, that is, for some $y=z^R$ with $z\in L$. Step 1.3 then gives $x=(z^R)^R=z\in L$. Conversely, if $z\in L$ then step 1.3 gives $z=(z^R)^R\in(L^R)^R$. So $(L^R)^R=L$. [L1, step 1.3] ∎
