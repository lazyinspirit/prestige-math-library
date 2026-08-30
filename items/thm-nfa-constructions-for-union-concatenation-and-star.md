---
id: thm-nfa-constructions-for-union-concatenation-and-star
kind: theorem
title: "NFAs can be constructed for union, concatenation, and Kleene star"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-nfa-acceptance-and-recognized-language, def-language-boolean-operations, def-language-concatenation-powers-and-kleene-star]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 4: Regular operations and regular expressions"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.04.pdf"
---

## Statement

Let $L,K\subseteq\Sigma^*$ be languages recognized by NFA's over the same
alphabet $\Sigma$. Then $L\cup K$, $LK$, and $L^*$ are also recognized by
NFA's over $\Sigma$.

## Facts & Assumptions

**Given:** NFA's $N_L$ and $N_K$ over $\Sigma$ with recognized languages $L$ and $K$.

[L1] By [[def-nfa-acceptance-and-recognized-language]], an NFA accepts a word exactly when some full computation path ends in an accepting state.

[L2] By [[def-language-boolean-operations]], $L\cup K$ is the set-theoretic union of the two languages.

[L3] By [[def-language-concatenation-powers-and-kleene-star]], $LK=\{uv:u\in L,\ v\in K\}$ and $L^*$ is the set of finite concatenations of words of $L$.

## Proof

**Proof technique:** direct.

1.1 For union, first replace $N_L$ and $N_K$ by disjoint isomorphic copies. Add a fresh start state with $\varepsilon$-transitions to the copied start states, keep all copied transitions, and take the union of the two copied accepting sets as the new accepting set. By [L1] and [L2], every accepting run chooses one copy at the start and then stays inside that copy, so a word is accepted exactly when one of the two original machines accepts it. Thus the new language is $L\cup K$. [L1, L2, given, construct]

1.2 For concatenation, take disjoint copies of $N_L$ and $N_K$, use the copied start state of $N_L$ as the new start state, add an $\varepsilon$-transition from each copied accepting state of $N_L$ to the copied start state of $N_K$, and designate only the copied accepting states of $N_K$ as accepting. Then [L1] and [L3] show that a successful run is exactly a decomposition of the input as $uv$ with $u\in L$ and $v\in K$, so the new machine recognizes $LK$. [L1, L3, construct]

1.3 For star, add a fresh start state, make it the only accepting state, add an $\varepsilon$-transition from it to the old start state of $N_L$, and add $\varepsilon$-transitions from each old accepting state back to the fresh start state. By [L1] and [L3], every accepting run chooses finitely many factors from $L$, and every finite concatenation of words of $L$ is accepted. Therefore the language recognized is $L^*$. [L1, L3, construct]

2.1 Hence NFA's can be built for union, concatenation, and Kleene star. [step 1.1, step 1.2, step 1.3] ∎
