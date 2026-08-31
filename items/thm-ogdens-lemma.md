---
id: thm-ogdens-lemma
kind: theorem
title: "Ogden's lemma"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-marked-position-decomposition, def-language-generated-by-a-cfg, def-parse-tree-and-yield, thm-chomsky-normal-form, thm-derivation-parse-tree-correspondence]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://www.scribd.com/document/977881977/Tcbook-Lang"
---

## Statement

If $L$ is a context-free language, then there exists an integer $p\ge 1$ such
that for every word $z\in L$ and every choice of at least $p$ marked positions
in $z$, there is a decomposition
$$ z=uvwxy $$
that is $p$-admissible with respect to the marked positions and satisfies
$$ uv^i wx^i y\in L\text{ for every }i\ge 0. $$

## Facts & Assumptions

**Given:** A context-free language $L$.

[L1] By [[def-marked-position-decomposition]], a $p$-admissible decomposition is one in which $vx$ contains at least one marked position while $vwx$ contains at most $p$ marked positions.

[L2] By [[def-language-generated-by-a-cfg]], there exists a context-free grammar generating $L$.

[L3] By [[thm-chomsky-normal-form]], that grammar may be replaced by an equivalent grammar in Chomsky normal form.

[L4] By [[thm-derivation-parse-tree-correspondence]], every word in the language of a CFG is the yield of some parse tree for that grammar.

[L5] By [[def-parse-tree-and-yield]], a parse tree records the production used at each internal node and its yield is read from the terminal leaves from left to right.

## Proof

**Proof technique:** direct.

1.1 Choose a context-free grammar $G_0$ with $L(G_0)=L$ by [L2], then replace it by an equivalent Chomsky-normal-form grammar $G=(V,\Sigma,P,S)$ by [L3]. Set $p:=2^{|V|+1}$. Let $z\in L$ and mark at least $p$ positions of $z$. Because $p\ge 1$, the word $z$ is nonempty, so by [L4] fix a parse tree $T$ for $z$ in the CNF grammar $G$. [L2, L3, L4, given, choose]

2.1 Starting at the root of $T$, build a path to a marked leaf by always moving to a child whose subtree contains the larger number of marked positions; when both children contain marked positions, choose one of the heavier children. Call such a node a **branch point**. Each time the path passes through a branch point, the chosen child still contains at least half of the marked positions seen at that node. Therefore, if there were at most $|V|$ branch points on the path, the terminal leaf at the end would still lie below at least $p/2^{|V|}=2$ marked positions, impossible for one leaf. So the path contains at least $|V|+1$ branch points. [L5, step 1.1]

3.1 Among the last $|V|+1$ branch points on that path, choose two with the same variable label $A$, with the upper one above the lower one. Let the lower $A$-subtree yield $w$, and let the material in the upper $A$-subtree to the left and right of the lower subtree yield $v$ and $x$, so that the whole word is $z=uvwxy$. The upper branch point has marked material outside the lower subtree, so the concatenation $vx$ contains a marked position. Also, if the upper $A$-subtree contained more than $2^{|V|}$ marked positions, then repeating the branch-point-halving argument inside that subtree would produce more than $|V|$ branch points below it on the chosen path, contradicting that we selected the upper $A$ among the last $|V|+1$ branch points. Hence $vwx$ contains at most $2^{|V|}<p$ marked positions. By [L1], the decomposition is $p$-admissible. [L1, step 2.1, choose]

4.1 The upper occurrence of $A$ derives the lower one by a derivation segment $A\Rightarrow^* vAx$, and the lower subtree derives $w$. Repeating or deleting that segment while keeping the rest of the parse tree fixed produces derivations of $uv^i wx^i y$ for every $i\ge 0$. Therefore every such word lies in $L(G)=L$. [L4, step 3.1]

5.1 Hence the integer $p$ satisfies Ogden's lemma for $L$. [step 3.1, step 4.1] ∎
