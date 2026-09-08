---
id: ex-subset-construction-for-an-epsilon-nfa
kind: example
title: "A complete determinisation table for a three-state epsilon-NFA"
status: draft
origin: pipeline
deps: [def-epsilon-nfa-word-transition, thm-subset-construction-reachability-invariant, thm-induction-principle]
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
  role: example
sources:
  scraped: []
  references:
    - title: "Jean Gallier, Introduction to the Theory of Computation (2018), §§3.3–3.5"
      url: https://www.cis.upenn.edu/~jean/tcbook.pdf
    - title: "Alfred Aho, COMS W3261 Lecture 3, §§1–2"
      url: https://www.cs.columbia.edu/~aho/cs3261/Lectures/L3-Regular_Expressions.html
---

## Example

Take $Q=\{p,q,r\}$, $\Sigma=\{a,b\}$, start $p$, and $F=\{r\}$. Define $\delta(p,\varepsilon)=\{q\}$, $\delta(q,a)=\{q,r\}$, $\delta(r,b)=\{r\}$, and all other state/label entries to be empty. All state names and letter names within their respective sets are distinct. Put
$$A=\{p,q\},\quad B=\{q,r\},\quad C=\{r\},\quad Z=\varnothing.$$
The reachable part of the full subset DFA has start $A$, accepting states $B,C$, and complete table

| State | $a$ | $b$ |
| --- | --- | --- |
| $A$ | $B$ | $Z$ |
| $B$ | $B$ | $C$ |
| $C$ | $Z$ | $C$ |
| $Z$ | $Z$ | $Z$ |

Exactly these four states are reachable. The other four states of $\mathcal P(Q)$ are unreachable.

## Facts & Assumptions

**Given:** The entire NFA prescription above; $A,B,C,Z$ denote the specified subsets, and $E=\operatorname{ECl}$.

[F1] Epsilon closure is the least epsilon-closed superset, computed by finite saturation ([[def-epsilon-nfa-word-transition]]).

[F2] The subset DFA has $\mu(T,x)=E(\bigcup_{q\in T}\delta(q,x))$, start $E(\{p\})$, and final subsets meeting $F$. Its extended transition equals the NFA word transition from that start and its full state set has $2^{|Q|}$ elements ([[thm-subset-construction-reachability-invariant]]).

[F3] Induction from zero and successor proves a property for every natural length ([[thm-induction-principle]]).

## Verification

1.1 There are nine domain pairs; the three prescribed nonempty entries and the six empty entries all lie in $\mathcal P(Q)$. This makes a total epsilon-NFA with the stated start and finals. Its only epsilon edge is from $p$ to $q$, so saturation adds $q$ precisely when $p$ is present and $q$ absent. Hence $E(\{p\})=A$, and $A,B,C,Z$ are each closed. [given, F1]

2.1 From $A$, the $a$-union is $\varnothing\cup\{q,r\}=B$ and the $b$-union is $\varnothing\cup\varnothing=Z$. From $B$, the $a$-union is $\{q,r\}\cup\varnothing=B$ and the $b$-union is $\varnothing\cup\{r\}=C$. Closing these unions leaves them unchanged. This computes the first two rows. [step 1.1, given, F2]

2.2 From $C$, the $a$-union is $\varnothing=Z$ and the $b$-union is $\{r\}=C$. From $Z$, both unions are empty, so both transitions return $Z$. Again each result is closed. This computes the last two rows. [step 1.1, given, F2]

3.1 The start is $A$, and the words $\varepsilon,a,ab,b$ reach $A,B,C,Z$, respectively: the middle two follow the transitions $A\xrightarrow{a}B\xrightarrow{b}C$, and $A\xrightarrow{b}Z$. Thus each of the four states is reachable. [step 1.1, step 2.1, F2]

4.1 Every word reaches one of these four states. Indeed at length zero the state is $A$. If a prefix reaches one of the four, then appending $a$ or $b$ reaches one of the four by the computed rows. Induction on word length therefore gives the assertion for every word; the induction applies to the property that every word of a given length reaches the four-state set. [step 2.1, step 2.2, step 3.1, F2, F3]

5.1 The eight subsets are $Z,\{p\},\{q\},C,A,\{p,r\},B,\{p,q,r\}$. By the two reachability implications, precisely $\{p\},\{q\},\{p,r\},\{p,q,r\}$ are unreachable. Of the reachable subsets, $B\cap F=C\cap F=\{r\}$ and $A\cap F=Z\cap F=\varnothing$, giving exactly the displayed accepting states. The full DFA also designates its unreachable subsets containing $r$ as final; the table states the finals of its reachable part. [step 3.1, step 4.1, given, F2] ∎

## Source

This independently specified witness instantiates [Aho, Lecture 3 §2](https://www.cs.columbia.edu/~aho/cs3261/Lectures/L3-Regular_Expressions.html). The table is for the reachable part of the full-power-set construction; its exhaustiveness follows from the induction above.
