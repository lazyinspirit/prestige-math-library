---
id: ex-diamond-seals-a-maximal-antichain-in-l
kind: example
title: Diamond sealing a maximal antichain in L
status: published
origin: pipeline
deps: [thm-diamond-constructs-normal-suslin-tree, lem-countable-tree-antichain-sealing, lem-tree-predecessors-and-common-extensions, thm-countable-union-of-countable, thm-constructible-universe-satisfies-choice, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Karagila, Axiomatic Set Theory, Theorem 9.10 and Lemma 9.11, pp.44–45; explicit binary-tree calculation"
      url: https://karagila.org/files/set-theory-2017.pdf
---

## Example

Work internally in $L$, and consider a stage of the diamond tree construction with a supplied guessing sequence. Let $\delta$ be a nonzero countable limit ordinal, let $T_{<\delta}$ be the preceding normal tree with countable levels, and suppose the stage guess $A$ is a maximal antichain of this partial tree. Choosing the new level above a covering family of cofinal branches meeting $A$ seals $A$: every new node, and every node at a later level of a continuation preserving predecessor sets, extends a member of $A$. In particular a global antichain whose restriction is $A$ cannot acquire members at heights at least $\delta$.

A concrete local instance has $\delta=\omega$, $T_{<\omega}=2^{<\omega}$ ordered by proper extension, and $A=\{\langle0\rangle,\langle1\rangle\}$. The new tops may be indexed by the eventually-zero binary sequences. This illustrates the local sealing operation; it does not claim that this finite-branching tree is the exact consecutively coded tree used by the published global construction.

## Facts & Assumptions

**Given:** The stated stage and correct maximal-antichain guess. Assume AC for assembling the countably many earlier countable levels; when working internally in $L$ this is supplied by F5. The local operation after a countable partial tree is supplied is choice-free.

[F1] [[thm-diamond-constructs-normal-suslin-tree]] proves in ZFC that a diamond sequence constructs a normal splitting Suslin tree with underlying set $\omega_1$ and countably infinite positive levels.

[F2] [[lem-countable-tree-antichain-sealing]] supplies a countable covering family of distinct cofinal branches meeting the given maximal antichain, and proves normality after adjoining their tops, without Choice.

[F3] [[lem-tree-predecessors-and-common-extensions]] supplies the unique predecessor at every smaller height and comparability below a common extension.

[F4] [[thm-countable-union-of-countable]] makes a countable union of countable levels countable under countable choice.

[F5] [[thm-constructible-universe-satisfies-choice]] proves AC internally in $L$ from ambient ZF.

[A1] [[def-axiom-of-choice]] specifies the assumed choice function principle; it supplies the countable choice used in F4.

## Verification

1.1 Since $\delta$ is countable, the family of earlier countable levels is a countable family. F4 and A1 make $T_{<\delta}$ countable. It is nonempty by its root, so the empty antichain is not maximal: the root could be adjoined. F2 applies to the given normal tree and nonempty maximal antichain $A$, yielding countably many distinct covering branches and a top $t_b$ for each. Its predecessor set is exactly $b$, and some $a_b\in A$ belongs to $b$, hence $a_b<_Tt_b$. No family of chosen $a_b$ is needed for this existential assertion. [F2, F4, A1, given]

1.2 For the concrete instance, height $n$ consists of the $2^n$ binary strings of length $n$. The code $s\mapsto 2^{|s|}+\sum_{i<|s|}s(i)2^i$ injects all finite strings into the positive integers, so the partial tree is countable without Choice. Its root is the empty string, every string extends to every larger finite height by appending zeros, and every string has its two immediate successors. The two strings in $A$ are incomparable; every nonempty string extends exactly one of them and the root precedes both. Thus $A$ is maximal. There is no positive limit height below $\omega$ requiring a further predecessor-uniqueness check. [given]

2.1 For every finite binary string $s$ put $b_s=s\mathbin{{}^\frown}0^\omega$ and view this infinite sequence as the branch of all its finite initial segments. It is cofinal, contains $s$, and meets $A$ in exactly its length-one initial segment. The distinct $b_s$ are precisely the eventually-zero binary sequences. They form a countable set by taking, for each sequence, the least numerical code of a string producing it; this is an injection into $\omega$. They form an infinite set because the sequences with a unique $1$ at position $n$ are distinct for distinct $n$. Adjoin a separate top for each distinct sequence. Its predecessors have order type $\omega$; distinct tops have distinct predecessor sets. Every old string lies below a top, and the countable new level preserves normality and all old splitting. This computes the branch family directly, including $s$ empty, which gives $0^\omega$. [F2, step 1.2]

3.1 In either construction, a node $u$ at a later height has a unique predecessor $t$ at height $\delta$ by F3. Since $t$ is one of the added tops, there is $a\in A$ with $a<t\le u$, so $a<u$. A node at height $\delta$ already has this property. If a global antichain $B$ restricts below $\delta$ to $A$ and contained such a $u$, it would contain the distinct comparable members $a,u$, which is impossible. Thus $B$ has no members at or above $\delta$. This is the failed-antichain-extension conclusion that sealing enforces. [F3, step 1.1, step 2.1]

4.1 The singleton root antichain is the degenerate maximal guess handled by the same argument: every cofinal branch contains the root. Heights zero and successor heights are excluded from this limit-stage operation. Choice entered only when obtaining countability of the unspecified family of earlier levels; the binary calculation and F2's least-index branch construction use no Choice. Inside $L$, F5 supplies the A1 hypothesis. The example assumes the particular correct stage guess, so it does not require an existence proof for a diamond sequence from $V=L$; F1 is the separate global theorem that combines such guesses with the stage construction. [F1, F2, F5, A1, step 1.1, step 3.1] QED.
