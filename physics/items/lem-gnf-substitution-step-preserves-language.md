---
id: lem-gnf-substitution-step-preserves-language
kind: lemma
title: "Substituting a variable's productions into a leading variable occurrence preserves the language"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-language-generated-by-a-cfg, def-one-step-and-reflexive-transitive-derivation]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "CSC444 CFLs and PDAs"
      url: "https://condor.depaul.edu/glancast/444class/docs/lecOct23.html"
---

## Statement

Let $G$ be a context-free grammar containing the production
$$ A\to uBv. $$
Suppose the productions of $B$ in $G$ are exactly
$$ B\to w_1,\ldots,B\to w_m, $$
where $u,v,w_1,\ldots,w_m$ are words over variables and terminals. Let $H$ be
the grammar obtained by deleting the production $A\to uBv$ and replacing it by
the family
$$ A\to uw_1v,\ldots,A\to uw_mv, $$
while keeping every other production of $G$.

Then
$$ L(H)=L(G). $$

## Facts & Assumptions

**Given:** Grammars $G$ and $H$ related by the displayed substitution step, with the displayed list $B\to w_1,\ldots,B\to w_m$ equal to the full family of $B$-productions in $G$.

[L1] A finite derivation is a chain of one-step derivations, by [[def-one-step-and-reflexive-transitive-derivation]].

[L2] The language $L(G)$ consists of the terminal words derivable from the start symbol, by [[def-language-generated-by-a-cfg]].

## Proof

**Proof technique:** direct.

1.1 Let $xAy\Rightarrow_G xuBvy$ be one use of the deleted production in a derivation of a terminal word, and follow the distinguished occurrence of $B$ created by this step. It is eventually rewritten by some $B\to w_i$, since the displayed rules are all the productions of $B$. Every intervening step rewrites a different variable occurrence. Such a step commutes with the rewrite of the distinguished $B$: applying the two context-free productions in either order gives the same sentential form. We may therefore move $B\to w_i$ leftward past all intervening steps and replace the resulting adjacent fragment $$ xAy\Rightarrow_G xuBvy\Rightarrow_G xuw_ivy $$ by the single $H$-step $xAy\Rightarrow_H xuw_ivy$. Restoring the commuted surrounding-context steps gives the same final terminal word. [given, L1]

1.2 Conversely, every use in $H$ of a substituted production $A\to uw_iv$ can be expanded in $G$ to the two steps $$ xAy\Rightarrow_G xuBvy\Rightarrow_G xuw_ivy. $$ Replacing each substituted step in a derivation of a terminal word in $H$ by this two-step fragment yields a derivation in $G$ with the same yield. Hence [L2] gives $L(H)\subseteq L(G)$. [given, L1, L2]

2.1 If a terminal derivation in $G$ never uses the deleted production $A\to uBv$, then it is also a derivation in $H$. Otherwise apply step 1.1 to one use of $A\to uBv$. This decreases by one the number of uses of the deleted production in the finite derivation without changing its terminal yield. Repeating finitely many times produces an $H$-derivation of the same word, so [L2] gives $L(G)\subseteq L(H)$. [L2, step 1.1]

3.1 The two inclusions from steps 2.1 and 1.2 prove $L(H)=L(G)$. [step 2.1, step 1.2] ∎
