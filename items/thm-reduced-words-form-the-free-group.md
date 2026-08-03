---
id: thm-reduced-words-form-the-free-group
kind: theorem
title: "Reduced words form the free group on an alphabet"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-alphabet-words-and-reduction, def-free-group, def-group, def-group-homomorphism, thm-induction-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "John McKernan, Presentations and Groups of Small Order, Lecture 12"
      url: "https://math.mit.edu/~mckernan/Teaching/12-13/Spring/18.703/l_12.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a set. The reduced words on $X\sqcup X^{-1}$ form a group when the
product of reduced words is their concatenation followed by free reduction. The
map sending $x\in X$ to the one-letter word $x$ has the universal property of
the free group on $X$.

## Facts & Assumptions

**Given:** A set $X$, its formal inverse alphabet, and a group $G$ with a function $u:X\to G$.

[L1] Words, elementary cancellations, reduced words, and free equivalence are as in the reduced-word definition
([[def-alphabet-words-and-reduction]]).

[L2] Induction proves a property of every finite word once it is proved for the empty word and preserved when one letter is appended
([[thm-induction-principle]]).

[L3] A group has an associative operation with an identity and two-sided inverses, and a homomorphism preserves products
([[def-group]], [[def-group-homomorphism]]).

[L4] The free-group universal property is the extension-and-uniqueness condition in the definition of a free group
([[def-free-group]]).

## Proof

**Proof technique:** direct.

1.1 For a word $w$, read its letters from left to right while maintaining a reduced stack: append a new letter unless it is the formal inverse of the stack's last letter, in which case delete that last letter. Induction on the length of $w$ gives a reduced output $\operatorname{red}(w)$, with $\operatorname{red}(r)=r$ for every reduced word $r$. [L1, L2]

2.1 The same induction shows that reading a neighbouring pair $aa^{-1}$ or $a^{-1}a$ has exactly the same net effect on every preceding stack as omitting that pair. Thus $\operatorname{red}$ is unchanged by an elementary cancellation or reverse insertion; hence $w$ is freely equivalent to $\operatorname{red}(w)$, and two freely equivalent reduced words are equal. [step 1.1, L1, L2]

3.1 Let $F(X)$ be the set of reduced words. For reduced $r,s$, define $r\cdot s:=\operatorname{red}(rs)$, let the empty word be $e$, and let $r^{-1}$ be the reversal of $r$ with each letter formally inverted. Step 2.1 gives $\operatorname{red}(\operatorname{red}(rs)t)=\operatorname{red}(rst)=\operatorname{red}(r\operatorname{red}(st))$. [step 2.1, L1]

4.1 The equality in step 3.1 makes the product associative. The empty word is a two-sided identity, and $rr^{-1}$ and $r^{-1}r$ reduce by successive central cancellations to the empty word; therefore every reduced word has the stated two-sided inverse. Hence $F(X)$ is a group. [step 3.1, L1, L3]

4.2 Send $x\in X$ to the one-letter word $x$. For $u:X\to G$, evaluate a word by replacing $x$ with $u(x)$ and $x^{-1}$ with $u(x)^{-1}$ and multiplying in order. Each elementary cancellation evaluates to an adjacent inverse pair, so evaluation is unchanged by step 2.1 and defines $\widehat u:F(X)\to G$; it extends $u$ and preserves the product by the definition in step 3.1. [step 2.1, step 3.1, L1, L3, given]

5.1 Any homomorphism $h:F(X)\to G$ extending $u$ is forced, by writing each reduced word as its ordered product of one-letter words and their inverses, to agree with the evaluation map of step 4.2. Thus $\widehat u$ is unique. [step 4.1, step 4.2, L3]

6.1 Steps 4.1--5.1 establish the group and the extension-and-uniqueness property of [L4], so the reduced-word group is the free group on $X$. [step 4.1, step 4.2, step 5.1, L4] ∎
