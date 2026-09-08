---
id: ex-epsilon-closure-and-word-transition-on-a-three-state-nfa
kind: example
title: "Epsilon closure and word transitions on three states"
status: draft
origin: pipeline
deps: [def-epsilon-nfa-word-transition]
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

Let $Q=\{p,q,r\}$, $\Sigma=\{a,b\}$, start $p$, and $F=\{r\}$, where the displayed states and letters are distinct. Specify the entire transition table by

| State | $\varepsilon$ | $a$ | $b$ |
| --- | --- | --- | --- |
| $p$ | $\{q\}$ | $\varnothing$ | $\varnothing$ |
| $q$ | $\varnothing$ | $\{q,r\}$ | $\varnothing$ |
| $r$ | $\varnothing$ | $\varnothing$ | $\{r\}$ |

Then $\operatorname{ECl}(\{p\})=\{p,q\}$ and $\operatorname{ECl}(\varnothing)=\varnothing$. The state sets from $p$ on $\varepsilon,a,aa,ab,b,aba$ are, respectively, $\{p,q\},\{q,r\},\{q,r\},\{r\},\varnothing,\varnothing$. Thus $a,aa,ab$ are accepted and $\varepsilon,b,aba$ are rejected.

## Facts & Assumptions

**Given:** The nine table entries, start $p$, and final set $\{r\}$ above; write $E=\operatorname{ECl}$.

[F1] Epsilon closure is finite saturation; the empty-word value is the initial closure and each next letter takes a successor union followed by closure. Acceptance tests nonempty intersection with the final set ([[def-epsilon-nfa-word-transition]]).

## Verification

1.1 The table gives a subset of $Q$ at each of its nine state/label pairs, so the transition is total on the required domain. The finite sets, start and finals meet the epsilon-NFA requirements. Starting from $\{p\}$, saturation adds $q$ in one stage and adds nothing thereafter, since neither $q$ nor $r$ has an epsilon successor. Thus $E(\{p\})=\{p,q\}$; more generally $E(T)=T\cup\{q\}$ if $p\in T$, and $E(T)=T$ otherwise. In particular $E(\varnothing)=\varnothing$, $E(\{q,r\})=\{q,r\}$ and $E(\{r\})=\{r\}$. [given, F1]

2.1 The empty-word value is $\widehat\delta(p,\varepsilon)=\{p,q\}$. For $a$, the successor union from this set is $\delta(p,a)\cup\delta(q,a)=\varnothing\cup\{q,r\}=\{q,r\}$, already closed; hence $\widehat\delta(p,a)=\{q,r\}$. For $b$, the corresponding union is $\varnothing\cup\varnothing=\varnothing$, so $\widehat\delta(p,b)=\varnothing$. [step 1.1, given, F1]

3.1 After $a$ the set is $\{q,r\}$. Its $a$-successor union is $\{q,r\}\cup\varnothing=\{q,r\}$, and its $b$-successor union is $\varnothing\cup\{r\}=\{r\}$. Both are closed, giving $\widehat\delta(p,aa)=\{q,r\}$ and $\widehat\delta(p,ab)=\{r\}$. From $\{r\}$ the $a$-successor union is empty, so $\widehat\delta(p,aba)=\varnothing$. [step 1.1, step 2.1, given, F1]

4.1 The sets for $a,aa,ab$ each contain $r$, whereas the sets for $\varepsilon,b,aba$ do not. Intersecting them with $F=\{r\}$ gives $\{r\}$ in the first three cases and $\varnothing$ in the other three, proving every asserted acceptance and rejection. [step 2.1, step 3.1, F1, given] ∎

## Source

The witness is original to this example. The calculation uses the closure and word-transition rules of [Gallier, Definitions 3.6–3.7, pp. 30–32](https://www.cis.upenn.edu/~jean/tcbook.pdf), via the local interface.
