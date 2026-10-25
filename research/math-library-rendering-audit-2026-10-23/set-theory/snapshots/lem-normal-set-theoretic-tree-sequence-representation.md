---
id: "lem-normal-set-theoretic-tree-sequence-representation"
kind: "lemma"
title: "Normal trees have faithful sequence representations"
status: published
origin: "pipeline"
deps: ["def-normal-splitting-set-theoretic-tree", "lem-tree-predecessors-and-common-extensions", "thm-transfinite-recursion", "thm-well-ordering-theorem", "def-axiom-of-choice"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
sources:
  references:
    - title: "Monk, Set theory following Jech (2024), Proposition 9.33, printed p86; successor labels adapted to injections"
      url: "https://euclid.colorado.edu/~monkd/jech.pdf"
justified_by: []
forward_refs: []
proof_strategy: "direct"
verification:
  audited: 2026-09-09
  precheck: "pass"
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
---

## Statement

In ZFC, a normal tree $T$ of nonzero ordinal height $\alpha$ is isomorphic to a downward-closed tree of sequences of lengths $\beta<\alpha$, ordered by proper initial segment. The alphabet can be $T$. If each node has at most countably many immediate successors, the alphabet can be $\omega$. The isomorphism preserves height; the image need not be the full sequence space.

## Facts & Assumptions

**Given:** A normal tree $T$ of height $0<\alpha$. AC is needed only for the simultaneous choice of countable successor labels; the alphabet-$T$ construction uses identity labels.

[F1] Normality includes one root and uniqueness from predecessor sets at nonzero limit levels. [[def-normal-splitting-set-theoretic-tree]]

[F2] Every node has a unique predecessor at each lower height, and height strictly increases along the tree order. [[lem-tree-predecessors-and-common-extensions]]

[F3] Transfinite recursion defines a set-valued function from its values on earlier stages. [[thm-transfinite-recursion]]

[F4] AC permits well-ordering any set. [[thm-well-ordering-theorem]]

[A1] The Axiom of Choice is assumed in the countable-alphabet assertion. [[def-axiom-of-choice]]

## Proof

1.1 For each $t$, let $S_t$ be its immediate-successor set. With alphabet $A=T$, use the injection $e_t:S_t\to T$, $e_t(u)=u$. In the countable-successor case, the set $J_t$ of injections $S_t\to\omega$ is nonempty, including the empty map when $S_t$ is empty. All these maps lie in a set of relations contained in $T\times\omega$. Well-order that set and let $e_t$ be the least member of $J_t$. This is the sole use of AC; take $A=\omega$ in this case. [A1, F4, given]

2.1 Define codes by recursion on levels. Give the root the empty code. At height $\beta+1$, the unique predecessor $t$ at height $\beta$ is the immediate predecessor of $u$; set $f(u)=f(t)^\frown\langle e_t(u)\rangle$. At a nonzero limit height $\lambda$, put $f(u)=\bigcup_{\beta<\lambda}f(u_\beta)$, where $u_\beta$ is the unique height-$\beta$ predecessor. These are set-valued level operations, so transfinite recursion applies. On histories not satisfying the stated coherence condition the operation can be assigned the empty set; the next step proves that such histories never occur in the recursion. [F1, F2, F3, step 1.1]

3.1 By induction on the constructed level, $f(u)$ has domain $\operatorname{ht}(u)$ and restricts to $f(u_\gamma)$ at every lower height $\gamma$. This is vacuous at the root. At a successor, appending one coordinate gives the domain and preserves all earlier restrictions. At a limit the earlier codes agree on overlaps by the induction assertion; their union is a function with domain the union of all smaller ordinals, namely that limit. Its restrictions are exactly the earlier codes. [F2, step 2.1]

4.1 The codes are injective on each level, again by induction. At zero there is just one root. At a successor, equality of codes gives equality of parent codes and hence of parents; equality of last coordinates then gives equality of the successors by injectivity of $e_t$. At a nonzero limit, equality of codes and step 3.1 give equal codes for each pair of predecessors; level injectivity below the limit makes all those predecessors equal. Thus the predecessor sets agree, and normality makes the two nodes equal. [F1, step 1.1, step 3.1]

5.1 Different levels give different code domains, so $f$ is injective on $T$. If $s<_Tt$, step 3.1 identifies $f(s)$ with a proper restriction of $f(t)$. Conversely, if $f(s)$ is a proper initial segment of $f(t)$, take the predecessor $u$ of $t$ at height $\operatorname{ht}(s)$. Step 3.1 gives $f(u)=f(s)$, and step 4.1 gives $u=s$, hence $s<_Tt$. [F2, step 3.1, step 4.1]

6.1 Every proper restriction of $f(t)$ is the code of its predecessor at that length, so the image is downward closed. The map onto its image is therefore the required order isomorphism and preserves heights by the domain computation. A height-one tree maps just to the empty sequence; no surjectivity onto all $A^{<\alpha}$ is needed. [F2, step 3.1, step 5.1] ∎
