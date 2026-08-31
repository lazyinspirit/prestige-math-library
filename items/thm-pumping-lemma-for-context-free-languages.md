---
id: thm-pumping-lemma-for-context-free-languages
kind: theorem
title: "The pumping lemma for context-free languages"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-height-and-yield-bound-for-cnf-trees, thm-chomsky-normal-form, thm-derivation-parse-tree-correspondence, def-language-generated-by-a-cfg]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://www.scribd.com/document/977881977/Tcbook-Lang"
    - title: "Alfred V. Aho, COMS W3261 CS Theory, Lecture 10"
      url: "https://www.cs.columbia.edu/~aho/cs3261/Lectures/L10-PL_for_CFLs.html"
---

## Statement

If $L$ is a context-free language, then there exists an integer $p\ge 1$ such
that every word $z\in L$ with $|z|\ge p$ can be written as
$$ z=uvwxy $$
with
$$ |vx|\ge 1,\qquad |vwx|\le p,\qquad uv^i wx^i y\in L\text{ for every }i\ge 0. $$

## Facts & Assumptions

**Given:** A context-free language $L$.

[L1] By [[def-language-generated-by-a-cfg]], there exists a context-free grammar $G$ with $L=L(G)$.

[L2] By [[thm-chomsky-normal-form]], $G$ has an equivalent grammar in Chomsky normal form.

[L3] By [[thm-derivation-parse-tree-correspondence]], every word of the language of a CFG is the yield of some parse tree for that grammar.

[L4] By [[lem-height-and-yield-bound-for-cnf-trees]], a CNF parse tree of height $h$ has yield length at most $2^{h-1}$.

## Proof

**Proof technique:** direct.

1.1 Choose a CNF grammar $G'=(V,\Sigma,P,S)$ with $L(G')=L$ by [L1] and [L2], and let $m:=|V|$. Set $p:=2^{m+1}+1$. Let $z\in L$ satisfy $|z|\ge p$. By [L3], $z$ is the yield of some parse tree $T$ for $G'$. If every root-to-leaf path of $T$ had at most $m$ variable nodes, then $T$ would have height at most $m+1$, so [L4] would give $|z|\le 2^m<p$, contradicting $|z|\ge p$. Therefore some root-to-leaf path has at least $m+1$ variable occurrences. [L1, L2, L3, L4, given, choose]

2.1 Choose two equal variables $A$ on the last $m+1$ variable occurrences of such a path, with the upper one above the lower one. Let the yield of the upper $A$-subtree be $vwx$ and the yield of the lower $A$-subtree be $w$, so the whole word is $uvwxy$. Because the lower occurrence lies strictly below the upper one and $G'$ is in CNF, the path segment from the upper $A$ to the lower one cannot consist only of unit moves, so at least one of the side contexts $v$ and $x$ is nonempty. Hence $|vx|\ge 1$. The upper $A$-subtree contains at most the last $m+1$ variable occurrences on the path, so its height is at most $m+2$; therefore [L4] gives $|vwx|\le 2^{m+1}<p$. [L4, step 1.1, choose]

3.1 The parse-tree segment from the upper occurrence of $A$ down to the lower one shows that $A\Rightarrow^* vAx$, and the lower subtree shows $A\Rightarrow^* w$. Repeating or deleting the first derivation segment any number of times while keeping the rest of the tree fixed yields derivations of $uv^i wx^i y$ in $G'$ for every $i\ge 0$. Hence every such word lies in $L(G')=L$. [L3, step 2.1]

4.1 Therefore the integer $p$ satisfies the required pumping property. [step 2.1, step 3.1] ∎
