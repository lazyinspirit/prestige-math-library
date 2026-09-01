---
id: lem-c-prime-lambda-implies-c-lambda
kind: lemma
title: "C prime(lambda) implies C(lambda)"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-small-cancellation-conditions-c-lambda-and-c-prime-lambda]
proof_strategy: "direct"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "GAP SmallCancellation manual, Chapter 1: Small Cancellation Theory — the classical conditions"
      url: "https://mate.dm.uba.ar/~isadofschi/smallcancellation/chap1_mj.html"
    - title: "Jay Williams, Universal Countable Borel Quasi-Orders"
      url: "https://arxiv.org/pdf/1306.1270"
    - title: "Nicholas Touikan, An Introduction to Combinatorial and Geometric Group Theory, Section 3.5"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-18.html"
    - title: "Clara Löh, Geometric Group Theory: An Introduction, Section 7.4.1"
      url: "https://loeh.app.uni-regensburg.de/ggt_book/ggt_book_draft.pdf"
---

## Statement

Let $0<\lambda\le 1$. If a symmetrised presentation has only nonempty relators
and satisfies $C'(\lambda)$, then it satisfies $C(\lambda)$.

## Facts & Assumptions

**Given:** A symmetrised relator set of nonempty words satisfying
$C'(\lambda)$.

[L1] Under $C'(\lambda)$, every piece $p$ lying in a relator $r$ satisfies
$|p|<\lambda |r|$, while $C(\lambda)$ asks that a factorisation of $r$ into
pieces use more than $1/\lambda$ pieces
([[def-small-cancellation-conditions-c-lambda-and-c-prime-lambda]]).

## Proof

**Proof technique:** direct.

1.1 Let $r=p_1\cdots p_n$ be a factorisation of a relator into pieces. Applying [L1] to each $p_i$ gives $|p_i|<\lambda |r|$ for every $i$. Summing these inequalities yields $$|r|=\sum_{i=1}^n |p_i|< n\lambda |r|.$$ [L1, given, algebra]

2.1 Because every relator is nonempty, $|r|>0$. Thus step 1.1 implies $1<n\lambda$, hence $n>1/\lambda$. This is exactly the $C(\lambda)$ condition from [L1]. [step 1.1, L1, given, algebra] ∎
