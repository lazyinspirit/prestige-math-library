---
id: cex-omitting-epsilon-closure-breaks-determinisation
kind: counterexample
title: "Dropping epsilon closure changes the accepted language"
status: draft
origin: pipeline
deps: [def-epsilon-nfa-word-transition, thm-subset-construction-reachability-invariant]
justified_by: []
landmark: false
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
sources:
  scraped: []
  references:
    - title: "Jean Gallier, Introduction to the Theory of Computation (2018), §§3.3–3.5"
      url: https://www.cis.upenn.edu/~jean/tcbook.pdf
    - title: "Alfred Aho, COMS W3261 Lecture 3, §§1–2"
      url: https://www.cs.columbia.edu/~aho/cs3261/Lectures/L3-Regular_Expressions.html
---

## Statement refuted

“For every epsilon-NFA, determinisation preserves the accepted language if the start closure is omitted, or if post-letter closure is omitted.” In the first variant only the start changes to $\{q_0\}$; in the second the start remains $E(\{q_0\})$ and the letter map changes to $\nu(S,a)=\bigcup_{q\in S}\delta(q,a)$. Both variants retain the full power set and the final-subset intersection test.

## Facts & Assumptions

**Given:** We test the two stated variants separately, writing $E=\operatorname{ECl}$.

[F1] An epsilon-NFA starts its extended transition at $E(\{q_0\})$, closes every post-letter successor union, and accepts exactly when the resulting subset meets $F$ ([[def-epsilon-nfa-word-transition]]).

[F2] The correct subset DFA has that closed start, those closed successor unions, and final subsets meeting $F$, with exactly the same accepted language ([[thm-subset-construction-reachability-invariant]]).

## Counterexample

1.1 Let $Q=\{p,q\}$, $\Sigma=\{a\}$, start $p$, and $F=\{q\}$, with $p\ne q$. Put $\delta(p,\varepsilon)=\{q\}$, $\delta(q,a)=\{p\}$, $\delta(p,a)=\varnothing$, and $\delta(q,\varepsilon)=\varnothing$. All four domain entries are specified subsets of the finite state set, so this is an epsilon-NFA. Saturation from $\{p\}$ gives $\{p,q\}$ and then stays there; thus $E(\{p\})=\{p,q\}$. [construct, F1]

2.1 In the correct construction the empty word reaches $\{p,q\}$, whose intersection with $F$ is $\{q\}$, so it is accepted. In the first defective construction the empty word leaves the start at $\{p\}$, whose intersection with $F$ is empty, so it is rejected. This mismatch occurs before any letter transition, even though all post-letter closures in that variant are retained. [step 1.1, F1, F2, given]

2.2 In the second defective construction the start is correctly $\{p,q\}$, but on the single letter $a$ its successor union is $\delta(p,a)\cup\delta(q,a)=\varnothing\cup\{p\}=\{p\}$. Omitting closure leaves that set, disjoint from $F$, so the variant rejects $a$. The correct construction instead closes it to $E(\{p\})=\{p,q\}$, which meets $F$; equivalently the original NFA has the accepting path $p\xrightarrow{\varepsilon}q\xrightarrow{a}p\xrightarrow{\varepsilon}q$. [step 1.1, F1, F2, given]

3.1 Each defective rule still gives a total DFA on the finite power set: its letter outputs are subsets and each of its starts is a subset. The failures are therefore language failures, not missing transitions. The empty word distinguishes the first variant and $a$ distinguishes the second, refuting both universal preservation claims. [step 2.1, step 2.2, F2, discharge-construct] ∎

## Source

The two-state witness is original. It tests the two separate closures in [Aho, Lecture 3 §2](https://www.cs.columbia.edu/~aho/cs3261/Lectures/L3-Regular_Expressions.html); neither is dispensable in general.
