---
id: thm-product-dfa-for-union-and-intersection
kind: theorem
title: "The product construction gives DFA's for union and intersection"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-dfa-acceptance-and-recognized-language, def-language-boolean-operations, lem-extended-dfa-transition-respects-concatenation]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 4"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.04.pdf"
---

## Statement

Let $D_1=(Q_1,\Sigma,\delta_1,q_1,F_1)$ and
$D_2=(Q_2,\Sigma,\delta_2,q_2,F_2)$ be DFA's over the same alphabet, and let
$L_i=L(D_i)$.

Then there is a DFA over $\Sigma$ recognizing $L_1\cap L_2$, and there is a DFA
over $\Sigma$ recognizing $L_1\cup L_2$.

## Facts & Assumptions

**Given:** Two DFA's $D_1$ and $D_2$ over the same alphabet $\Sigma$.

[L1] A word is accepted by a DFA exactly when the extended transition from the
start state lands in an accepting state, by
[[def-dfa-acceptance-and-recognized-language]].

[L2] For languages over a fixed alphabet, union and intersection are the
set-theoretic operations $L\cup K$ and $L\cap K$, by
[[def-language-boolean-operations]].

## Proof

**Proof technique:** direct.

1.1 Define the product machine $D_\times$ to have state set $Q_1\times Q_2$, start state $(q_1,q_2)$, and transition rule $$ \delta_\times((p,r),a):=(\delta_1(p,a),\delta_2(r,a)). $$ Intuitively, $D_\times$ runs the two machines in parallel on the same input. [given, construct]

1.2 We claim that for every pair of states $(p,r)$ and every word $w$, $$ \delta_\times^*((p,r),w)=(\delta_1^*(p,w),\delta_2^*(r,w)). $$ The claim is proved by induction on the length of $w$: it is immediate for $\varepsilon$, and appending one letter updates both coordinates exactly as the component machines do. [construct, induction]

2.1 If the accepting set is $F_\cap:=F_1\times F_2$, then step 1.2 and [L1] show that a word $w$ is accepted exactly when $\delta_1^*(q_1,w)\in F_1$ and $\delta_2^*(q_2,w)\in F_2$, that is, exactly when $w\in L_1\cap L_2$. By [L2], this machine recognizes the intersection. [L1, L2, step 1.2]

2.2 If the accepting set is $F_\cup:=(F_1\times Q_2)\cup(Q_1\times F_2)$, then step 1.2 and [L1] show that a word $w$ is accepted exactly when at least one component machine accepts $w$, that is, exactly when $w\in L_1\cup L_2$. By [L2], this machine recognizes the union. [L1, L2, step 1.2]

3.1 Therefore the product construction yields DFA's for both intersection and union over the fixed alphabet $\Sigma$. [step 1.1, step 2.1, step 2.2] ∎
