---
id: def-nfa-acceptance-and-recognized-language
kind: definition
title: "Acceptance of a word by an NFA and the recognized language"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-nfa-with-epsilon-moves, def-language-over-an-alphabet]
verification:
  precheck: n/a
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-08
    scope: "Local finite-run acceptance definition and prerequisite repair; not independent review"
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 3: Nondeterministic finite automata"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.03.pdf"
---

## Definition

Let $N=(Q,\Sigma,\delta,q_0,F)$ be an NFA with epsilon-moves as in [[def-nfa-with-epsilon-moves]]. For $S\subseteq Q$ and $w\in\Sigma^*$, define $\widehat\delta(S,w)$ to be the set of states $r_m$ for which there are a finite state list $r_0,\ldots,r_m$ and labels $a_1,\ldots,a_m\in\Sigma\cup\{\varepsilon\}$ such that $r_0\in S$, $r_i\in\delta(r_{i-1},a_i)$ for $1\leq i\leq m$, and deleting every $\varepsilon$ label from the label list gives exactly $w$. The case $m=0$ is allowed and reads the empty word. Put $\widehat\delta(q,w)=\widehat\delta(\{q\},w)$ for a state $q$.

This is a well-defined subset of the finite state set $Q$. Writing $E(S)=\widehat\delta(S,\varepsilon)$, it satisfies
$$\widehat\delta(S,wa)=E\!\left(\bigcup_{q\in\widehat\delta(S,w)}\delta(q,a)\right)\qquad(a\in\Sigma).$$
Indeed, split a run immediately before and after its last non-epsilon move: its prefix reads $w$, that move reads $a$, and its suffix uses only epsilon moves. Conversely concatenating these three finite pieces constructs a run reading $wa$. Thus the finite-run definition also supplies the usual recursively extended transition, including epsilon moves before and after the input.

A word $w\in\Sigma^*$ is **accepted by $N$** when
$$ \widehat\delta(q_0,w)\cap F\neq\varnothing. $$

The **language recognized by $N$** is
$$ L(N):=\{w\in\Sigma^*:\widehat\delta(q_0,w)\cap F\neq\varnothing\}. $$
This is a language over $\Sigma$ in the sense of
[[def-language-over-an-alphabet]].

## Remarks

- NFA acceptance is existential: one accepting computation path is enough.

- Rejection means that no computation path ends in an accepting state after the
  whole input has been read.
