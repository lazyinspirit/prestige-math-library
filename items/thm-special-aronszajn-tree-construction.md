---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-special-aronszajn-tree-construction.json
  precheck: pass
id: thm-special-aronszajn-tree-construction
kind: theorem
title: "A special Aronszajn tree exists"
status: published
origin: pipeline
deps: [lem-bounded-rational-tree-limit-extension, def-aronszajn-suslin-and-special-tree, thm-transfinite-recursion, thm-countable-union-of-countable, thm-rationals-countable, def-normal-splitting-set-theoretic-tree, thm-rat-ordered-field, thm-product-of-countable, thm-countable-subsets-of-omega-one-are-bounded, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Karagila, Axiomatic Set Theory, Theorem 9.2 and Exercise 9.4, printed p43 (rational-label construction)"
      url: https://karagila.org/files/set-theory-2017.pdf
proof_strategy: direct
justified_by: []
forward_refs: []
---

## Statement

In ZFC there exists a normal splitting special Aronszajn tree. This tree has an uncountable antichain and is therefore not Suslin.

## Facts & Assumptions

**Given:** ZFC. We construct a tree with nonempty countable levels $T_\alpha$ for $\alpha<\omega_1$ and a strictly increasing rational labeling $\ell$.

[F1] A countable tree at a nonzero countable limit height with bounded rational extensions and infinitely many small successors admits a countable new level preserving strict labeling and bounded rational extensions, with distinct predecessor branches for distinct new tops. Normality is preserved if it held before, and infinitely many small successors are retained wherever a successor level exists; new tops have no successor requirement yet. [[lem-bounded-rational-tree-limit-extension]]

[F2] A prescribed class-function rule on earlier values has a unique transfinite recursion on a set well-order. [[thm-transfinite-recursion]]

[F3] Under countable choice, a countable union of countable sets is countable. [[thm-countable-union-of-countable]]

[F4] The rationals are countably infinite. [[thm-rationals-countable]]

[F5] Rational numbers form a totally ordered field. [[thm-rat-ordered-field]]

[F6] A product of two countable sets is countable. [[thm-product-of-countable]]

[F7] Under countable choice, no countable subset of $\omega_1$ is cofinal. [[thm-countable-subsets-of-omega-one-are-bounded]]

[F8] An $\omega_1$-tree without a cofinal branch is Aronszajn; an increasing rational labeling implies specialness. [[def-aronszajn-suslin-and-special-tree]]

[F9] Normality and splitting have the unique-root, extension, limit-uniqueness and immediate-successor conventions fixed here. [[def-normal-splitting-set-theoretic-tree]]

[A1] Assume AC. In addition to its countable-choice consequences, we use it to fix enumerations of all nonzero countable ordinals and a choice function on all nonempty subsets of the ambient set of level codes. [[def-axiom-of-choice]]

## Proof

1.1 Fix an enumeration of $\mathbb Q$, a pairing enumeration of $\omega\times\omega$, and, by AC, surjections $d_\alpha:\omega\to\alpha$ for all $0<\alpha<\omega_1$. Each set of such surjections is nonempty by countability of $\alpha$; these sets form a set-indexed family. At every stage store a surjection onto the newly constructed level. Enumerated nodes can be renamed by their least enumeration indices, with level tags $(\alpha,n)$, so all old nodes keep their names. All possible codes for a countable new level on the fixed ambient node set $\omega_1\times\omega$—its predecessor sets, rational labels and a surjection from $\omega$ onto the level—form a set $C$: the node sets, predecessor relations, label graphs and enumeration graphs are subsets of fixed sets built from $\omega_1\times\omega$, $\mathbb Q$ and $\omega$. By A1 fix a choice function $c$ on $\mathcal P(C)\setminus\{\varnothing\}$. Applying this fixed function to the nonempty set of eligible limit-level codes makes every stage below a specified rule. [F4, F6, A1, given]

2.1 Start with the singleton root $T_0=\{(0,0)\}$ with label zero and its constant enumeration. At a successor stage, for each $x\in T_\alpha$ create a distinct immediate successor $(x,q)$ for every rational $q>\ell(x)$, with label $q$, then rename these pairs by level-tagged least indices as in step 1.1. Its predecessors are $x$ and all predecessors of $x$. The level is nonempty and countable, since it is an enumerated subset of $T_\alpha\times\mathbb Q$. Strict labeling persists. There are infinitely many successors below any $r>\ell(x)$: the distinct rationals $\ell(x)+(r-\ell(x))/(m+2)$ for $m<\omega$ lie strictly between the two bounds. In particular every old last-level node splits. [F5, F6, F9, step 1.1]

3.1 At every partial stage the small-successor condition is required only for nodes whose successor level has already been constructed. Maintain also the invariant that for $\operatorname{ht}(x)<\beta$ and rational $r>\ell(x)$ an extension at level $\beta$ has label less than $r$. It is vacuous at the root stage. At the successor level $\alpha+1$, if $x\in T_\alpha$, its successor of label $(\ell(x)+r)/2$ works. If $x$ lies below $\alpha$, use the earlier invariant with bound $s=(\ell(x)+r)/2$ to obtain $y\in T_\alpha$ above $x$ with $\ell(y)<s$, and extend $y$ by the successor of label $(\ell(y)+r)/2<r$. This verifies every request at the new level; all earlier requests persist. [F5, step 2.1]

4.1 At a nonzero limit $\delta<\omega_1$, the union of earlier levels is countable: enumerate its nodes by pairing $d_\delta(n)$ with the stored enumeration of that level. Its height is $\delta$, and its order and labeling satisfy all previous invariants, since every pair of old nodes and every request involving a level below $\delta$ occurs in an earlier stage. Every old node has infinitely many small successors, supplied at its successor stage, which is below $\delta$. The old union is normal: roots agree, extensions persist, and predecessor sets at each old limit level were fixed when that level was added. F1 gives at least one nonempty countable new level preserving strict labeling, bounded extensions and normality, and retaining the small-successor condition at old nodes. New tops have no successor requirement until the next stage. Injectively rename its nodes by tags $(\delta,n)$ and store a surjection from $\omega$ onto the renamed level. Let $E\subseteq C$ be the set of eligible codes for this history and take the new level record to be $c(E)$. Eligibility requires the old order and labels to be unchanged, the new nodes to have level tag $\delta$, and exactly the properties just obtained from F1. The set $E$ is nonempty by F1 and countability, so this selection is defined uniquely from the earlier history and the fixed $c$. All invariants, with the stage-relative successor requirement of step 3.1, and normality persist. [F1, F9, A1, step 1.1, step 2.1, step 3.1]

5.1 Steps 2.1–4.1 prescribe the next level and its enumeration from the earlier history and the fixed parameters. Extend the rule arbitrarily, say by the empty record, on histories not satisfying the invariants. F2 then defines all levels for $\alpha<\omega_1$. Their union is a set by Replacement and Union, with height $\omega_1$ and nonempty countable levels. Normality and splitting follow from their stagewise verification: any requested extension, limit-level comparison, or immediate successor appears at some stage. The labeling is strictly increasing because every comparison already appears at one stage. [F2, F9, step 2.1, step 3.1, step 4.1]

6.1 On any chain the labeling is injective into $\mathbb Q$, because distinct comparable nodes have strictly different labels. F4 makes the chain countable. Its height image is countable and hence not cofinal in $\omega_1$ by F7, whose choice hypothesis follows from A1. No branch is cofinal. Thus the constructed $\omega_1$-tree is Aronszajn, and the increasing rational labeling makes it special by F8. [F4, F7, F8, A1, step 5.1]

7.1 The tree is uncountable: its height map is onto $\omega_1$ since every level is nonempty, whereas the image of a countable set is countable. For each rational $q$, the fiber $\ell^{-1}(\{q\})$ is an antichain by strict increase. If all these fibers were countable, F4 would index them countably and F3, using the countable choice supplied by A1, would make their union $T$ countable, a contradiction. At least one fiber is an uncountable antichain; by F8 the tree is not Suslin. [F3, F4, F8, A1, step 5.1, step 6.1] ∎

## Remarks

The schematic shows two requests $(x,r_0)$ and $(x,r_1)$ at a nonzero limit stage $\delta$, where $\operatorname{ht}(x)=\alpha$ and $a=\ell(x)<r_i$. In the construction underlying F1, put $q_i=(a+r_i)/2$. The branches $b_0,b_1$ choose different immediate successors $z_0,z_1$ of $x$ and stay strictly below their respective label bounds $q_0,q_1$. A new top $v_i$ has predecessor set $b_i$ and label $q_i$. Only selected nodes are shown; solid segments represent immediate succession, and dashed segments abbreviate cofinal branch portions followed by the new top, not immediate succession into the limit level.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm]
\node (x) at (0,0) {$x\;[a]$};
\node (z0) at (-2,1.4) {$z_0\;[s_0]$};
\node (z1) at (2,1.4) {$z_1\;[s_1]$};
\node (v0) at (-2,3.8) {$v_0\;[q_0]$};
\node (v1) at (2,3.8) {$v_1\;[q_1]$};
\draw (x) -- (z0);
\draw (x) -- (z1);
\draw[dashed] (z0) -- node[left] {$b_0$} (v0);
\draw[dashed] (z1) -- node[right] {$b_1$} (v1);
\node[anchor=west] at (3.2,0) {$T_\alpha$};
\node[anchor=west] at (3.2,1.4) {$T_{\alpha+1}$};
\node[anchor=west] at (3.2,3.8) {$T_\delta$};
\node at (0,-0.9) {$a<s_i<q_i<r_i\quad(i=0,1)$};
\end{tikzpicture}
```

Brackets display rational labels, so $s_i=\ell(z_i)$. The distinct successors ensure $b_0\ne b_1$, hence the tops have distinct predecessor histories as required by normality. This illustrates the limit-extension input used in step 4.1; all omitted nodes and other successors are supplied by the construction, and the proof above is independent of the picture.
