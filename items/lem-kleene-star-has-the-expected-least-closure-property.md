---
id: lem-kleene-star-has-the-expected-least-closure-property
kind: lemma
title: "Kleene star is the least concatenation-closed language containing $L$ and $\\varepsilon$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-language-concatenation-powers-and-kleene-star]
proof_strategy: direct
justified_by: []
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Statement

Let $L$ be a language over an alphabet $\Sigma$.

1. $\varepsilon\in L^*$.
2. $LL^*\subseteq L^*$.
3. If $K$ is a language with $\varepsilon\in K$ and $LK\subseteq K$, then
   $L^*\subseteq K$.

In particular, $L^*$ is the least language containing $\varepsilon$ and closed
under left concatenation by words from $L$; therefore it is also the least
concatenation-closed language containing $L$ and $\varepsilon$.

## Facts & Assumptions

**Given:** A language $L\subseteq\Sigma^*$ and a language $K\subseteq\Sigma^*$.

[L1] The powers of $L$ satisfy $L^0=\{\varepsilon\}$, for $n\ge1$ the set $L^n$ consists of words $u_1\cdots u_n$ with each $u_i\in L$, and $L^*=\bigcup_{n\in\mathbb N}L^n$ by [[def-language-concatenation-powers-and-kleene-star]].

[L2] Language concatenation is $AB=\{ab:a\in A\text{ and }b\in B\}$ by [[def-language-concatenation-powers-and-kleene-star]].

## Proof

**Proof technique:** direct.

1.1 By [L1], $\varepsilon\in L^0\subseteq L^*$. This proves clause 1. [given, L1]

1.2 Let $w\in LL^*$. By [L2] there are $u\in L$ and $v\in L^*$ with $w=uv$. Since $v\in L^*$, [L1] gives some $n\in\mathbb N$ with $v\in L^n$. Then $w\in L^{n+1}$ by the definition of $L^{n+1}$ in [L1], so $w\in L^*$ again. Thus $LL^*\subseteq L^*$, proving clause 2. [L1, L2]

1.3 Assume $\varepsilon\in K$ and $LK\subseteq K$. We prove by induction on $n\in\mathbb N$ that $L^n\subseteq K$. For $n=0$, [L1] gives $L^0=\{\varepsilon\}\subseteq K$. [given, L1, base]

1.4 For the induction step, assume $L^n\subseteq K$. If $w\in L^{n+1}$, then by [L1] there are $u\in L$ and $v\in L^n$ with $w=uv$. The induction hypothesis gives $v\in K$, so $w\in LK\subseteq K$. Hence $L^{n+1}\subseteq K$. [ih, L1, L2, induction]

1.5 If $u,v\in L^*$, choose $m,n\in\mathbb N$ with $u\in L^m$ and $v\in L^n$. Writing $u=u_1\cdots u_m$ and $v=v_1\cdots v_n$ with every $u_i,v_j\in L$, the concatenation $uv$ is the $(m+n)$-fold product $u_1\cdots u_m v_1\cdots v_n$, so $uv\in L^{m+n}\subseteq L^*$. Therefore $L^*L^*\subseteq L^*$, and $L^*$ is concatenation-closed. [L1, L2, construct]

1.6 Any concatenation-closed language $K$ containing $L$ and $\varepsilon$ satisfies $LK\subseteq K$, because for $u\in L\subseteq K$ and $v\in K$ the concatenation $uv$ lies in $KK\subseteq K$. [L2]

2.1 By steps 1.3 and 1.4, every $L^n$ is contained in $K$. Since $L^*=\bigcup_{n\in\mathbb N}L^n$ by [L1], we get $L^*\subseteq K$. This proves clause 3. [step 1.3, step 1.4, L1, discharge-induction]

3.1 Step 1.1 gives $\varepsilon\in L^*$, and [L1] gives $L=L^1\subseteq L^*$. Together with step 1.5, this shows that $L^*$ is itself a concatenation-closed language containing $L$ and $\varepsilon$. Now step 2.1 and step 1.6 show that every other such language contains $L^*$. This is exactly the stated minimality. [L1, step 1.1, step 2.1, step 1.5, step 1.6] ∎
