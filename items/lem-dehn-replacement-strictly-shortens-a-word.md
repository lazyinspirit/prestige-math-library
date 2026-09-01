---
id: lem-dehn-replacement-strictly-shortens-a-word
kind: lemma
title: "A Dehn replacement shortens the word strictly"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-dehn-reduced-word-and-dehn-presentation]
proof_strategy: "direct"
verification:
  precheck: pass
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

A Dehn replacement shortens the word strictly.

## Facts & Assumptions

**Given:** A factorisation $r=uv$ of a symmetrised relator with $|u|>|v|$, and a
word $w=ausb$ containing $u$ as a subword.

[L1] Replacing $u$ by $v^{-1}$ is the Dehn move associated to the relator
$r=uv$ ([[def-dehn-reduced-word-and-dehn-presentation]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the Dehn replacement sends $w=ausb$ to $w'=av^{-1}sb$ before free reduction. Because $|u|>|v|$, one has $|w'|=|w|-|u|+|v|<|w|$. [L1, given, algebra]

2.1 Free reduction can only delete inverse pairs, never add letters. So the freely reduced form of $w'$ is no longer than $w'$, hence still strictly shorter than $w$. [step 1.1, algebra] ∎
