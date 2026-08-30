---
id: thm-pda-to-cfg-construction
kind: theorem
title: "Every PDA has an equivalent context-free grammar"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-language-generated-by-a-cfg, def-pda-acceptance-by-empty-stack, thm-final-state-and-empty-stack-acceptance-are-equivalent, def-pda-computation-fragment-variable, lem-pda-fragment-variables-compose]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Statement

For every PDA $M$ there exists a context-free grammar $G_M$ built from fragment
variables $[p,Z,q]$ such that
$$ L(G_M)=N(M')=T(M), $$
where $M'$ is the empty-stack PDA obtained from $M$ by the acceptance-mode
conversion.

## Facts & Assumptions

**Given:** A PDA $M$.

[L1] By [[thm-final-state-and-empty-stack-acceptance-are-equivalent]], there is an empty-stack PDA $M'$ with the same accepted language as $M$.

[L2] By [[def-pda-computation-fragment-variable]], the variable $[p,Z,q]$ denotes the words that remove $Z$ while taking the machine from state $p$ to state $q$ and leaving the lower stack unchanged.

[L3] By [[lem-pda-fragment-variables-compose]], fragment computations concatenate to remove a stacked pair, and conversely a computation removing a stacked pair splits at the first moment when the lower symbol is exposed.

[L4] By [[def-language-generated-by-a-cfg]], a grammar generates exactly the terminal words derivable from its start symbol.

## Proof

**Proof technique:** direct.

1.1 By [L1], replace $M$ by an equivalent empty-stack PDA $M'$. Refining its transitions if necessary, we may assume that every move of $M'$ pops one symbol, reads either one input symbol or $\varepsilon$, and pushes either nothing, one symbol, or two symbols; a longer push is replaced by a short chain of fresh intermediate states. [L1, given, construct]

2.1 Build a grammar $G_M$ whose variables are the fragment symbols $[p,Z,q]$ for states $p,q$ and stack symbols $Z$, and whose start symbol branches over all variables $[q_0,Z_0,q]$. For each normalized transition $(r,\beta)\in\delta(p,a,Z)$ of $M'$ with $a\in\Sigma\cup\{\varepsilon\}$, add the matching productions: if $\beta=\varepsilon$, add $[p,Z,r]\to a$; if $\beta=Y$, add $[p,Z,q]\to a[r,Y,q]$ for every state $q$; if $\beta=YW$, add $[p,Z,t]\to a[r,Y,s][s,W,t]$ for every pair of states $s,t$. When $a=\varepsilon$, omit that leading terminal. [L2, step 1.1, construct]

3.1 Every derivation in $G_M$ yields an accepting computation of $M'$ by induction on the derivation tree of a fragment variable $[p,Z,q]$. The production chosen at the root records the first normalized move from state $p$ with top symbol $Z$. If the production is terminal or $\varepsilon$, that move already removes $Z$. If it has one fragment variable, the induction hypothesis supplies the computation removing the pushed symbol. If it has two fragment variables, the induction hypotheses supply computations removing the two pushed symbols, and [L3] composes them into one computation removing the original pushed pair. Therefore every word derived from $[p,Z,q]$ lies in that fragment language, and the start productions give $L(G_M)\subseteq N(M')$. [L2, L3, L4, step 2.1, induction]

3.2 Conversely, consider a fragment computation $(p,w,Z\alpha)\vdash_{M'}^*(q,\varepsilon,\alpha)$ and induct on its number of steps. Let its first normalized move be determined by a transition $(r,\beta)\in\delta(p,a,Z)$ with $a\in\Sigma\cup\{\varepsilon\}$ and $\beta\in\{\varepsilon,Y,YW\}$. If $\beta=\varepsilon$, that one move already removes $Z$, so step 2.1 contributes the corresponding terminal or $\varepsilon$ production. If $\beta=Y$, the remaining computation removes $Y$ above $\alpha$, so the induction hypothesis derives the remaining input from $[r,Y,q]$, and step 2.1 prepends the production $[p,Z,q]\to a[r,Y,q]$ with the leading terminal omitted when $a=\varepsilon$. If $\beta=YW$, then [L3] splits the remaining computation at the first moment when $W$ is exposed on top of $\alpha$, yielding a state $s$ and a decomposition of the remaining input into words $u$ and $v$ with $(r,u,YW\alpha)\vdash_{M'}^*(s,v,W\alpha)$ and $(s,v,W\alpha)\vdash_{M'}^*(q,\varepsilon,\alpha)$. The induction hypothesis derives $u$ from $[r,Y,s]$ and $v$ from $[s,W,q]$, so step 2.1 gives a derivation of $w$ from $[p,Z,q]$. Applying this to start configurations shows $N(M')\subseteq L(G_M)$. [L2, L3, L4, step 2.1, induction]

4.1 Steps 3.1 and 3.2 give $L(G_M)=N(M')$, and [L1] then yields $L(G_M)=T(M)$. [L1, step 3.1, step 3.2] ∎
