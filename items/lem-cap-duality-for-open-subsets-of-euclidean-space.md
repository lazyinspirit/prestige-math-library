---
id: "lem-cap-duality-for-open-subsets-of-euclidean-space"
kind: "lemma"
title: "Cap duality for open subsets of Euclidean space"
verification:
  audited: 2026-09-13
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-cap-product-duality-is-an-isomorphism-on-euclidean-balls","def-compactly-supported-singular-cohomology-of-a-locally-compact-space","prop-cap-product-naturality-and-projection-formula","lem-cap-product-commutes-with-the-mayer-vietoris-duality-ladder","thm-five-lemma-for-a-morphism-of-long-exact-sequences","lem-cap-duality-passes-to-increasing-open-unions","thm-rationals-countable","lem-q-and-irrationals-dense-r","def-axiom-of-choice"]
sources:
  references:
    - title: Hatcher, Algebraic Topology, proof of Theorem 3.35 step (2), p.248;
        rational boxes replace bounded convex sets
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume AC. For every $R$-oriented open subset $O\subseteq\mathbb R^n$, where $R$ is a commutative unital ring, cap duality is an isomorphism
$$D_O:H_c^p(O;R)\longrightarrow H_{n-p}(O;R)$$
for every integer $p$. The only use of AC is inherited from the universal-coefficient proof of local ball duality. The rational-box cover, finite gluing and increasing-union passage add no choice assumption.

## Facts & Assumptions

[F1] [[lem-cap-product-duality-is-an-isomorphism-on-euclidean-balls]] proves duality for an oriented open $n$-ball. Its AC use is in free cycle/boundary modules, projections and comparison lifts for UCT.

[F2] [[lem-cap-product-commutes-with-the-mayer-vietoris-duality-ladder]] provides exact rows and commuting cap maps when the homology connector is multiplied by $(-1)^{p+1}$ in degree $p$.

[F3] [[thm-five-lemma-for-a-morphism-of-long-exact-sequences]] gives bijectivity of the middle map when the four surrounding maps are isomorphisms.

[F4] [[lem-cap-duality-passes-to-increasing-open-unions]] passes stagewise cap isomorphisms to an increasing open union, without extra choice.

[F5] [[thm-rationals-countable]] gives an enumeration of the rationals, and [[lem-q-and-irrationals-dense-r]] gives a rational strictly between any two distinct reals.

[F6] [[def-axiom-of-choice]] is assumed only for the use of [F1].

[F7] [[def-compactly-supported-singular-cohomology-of-a-locally-compact-space]] gives the support colimit, and [[prop-cap-product-naturality-and-projection-formula]] gives cap naturality.

## Proof

**Given:** $O,n,R$, its orientation, and AC. All subsets used in the proof inherit the orientation. Write $P(W)$ for the assertion that all degree cap-duality maps on the open submanifold $W$ are isomorphisms.

1.1 For any two oriented open submanifolds $A,B$ with $P(A),P(B),P(A\cap B)$, use the exact five-term window $$H_c^p(A\cap B)\to H_c^p(A)\oplus H_c^p(B)\to H_c^p(A\cup B)\to H_c^{p+1}(A\cap B)\to H_c^{p+1}(A)\oplus H_c^{p+1}(B).$$ The signed ladder [F2] is a morphism from this window to the homology window in degrees $n-p,n-p-1$. The four maps other than its center are isomorphisms by the three hypotheses; on direct sums their inverses are the pairs of the inverses. Thus [F3] makes $D_{A\cup B}$ an isomorphism in degree $p$. Since $p$ was arbitrary, this proves $P(A\cup B)$. This implication uses no AC. [F2, F3, given]

1.2 A nonempty bounded open box $B=\prod_{i=1}^n(a_i,b_i)$ is homeomorphic to $\mathbb R^n$: first send each interval affinely to $(-1,1)$, then apply $t\mapsto t/(1-|t|)$ in each coordinate, whose inverse is $s\mapsto s/(1+|s|)$. Both are continuous and direct substitution verifies the inverses, including at zero. Finally $x\mapsto x/(1+\lVert x\rVert)$ identifies $\mathbb R^n$ with the unit open ball $D$, with inverse $y\mapsto y/(1-\lVert y\rVert)$. Let $h:B\to D$ be the resulting homeomorphism and orient $D$ by transport from the given orientation on $B$. The pair maps of $h$ and $h^{-1}$ identify every relative support group, and homeomorphisms carry compact sets to compact sets; hence [F7]'s colimit gives inverse maps $h^*:H_c^p(D;R)\to H_c^p(B;R)$. Ordinary homology maps are inverse as well. Cap naturality [F7] gives
$$h_*\bigl(h^*\alpha\cap[B]\bigr)=\alpha\cap h_*[B]=\alpha\cap[D],$$
so the duality square has horizontal isomorphisms. The ball isomorphism [F1] therefore proves $P(B)$ under [F6]. For $n=0$ the empty product is one point and [F1] applies directly. The empty open subset has zero chains and cochains, so also has $P$. [F1, F6, F7, given]

1.3 For $n\ge1$, the bounded boxes with rational endpoints that are contained in $O$ cover $O$. Given $x\in O$, take $\epsilon>0$ with the Euclidean $\epsilon$-ball about $x$ in $O$. In each coordinate choose rational $a_i,b_i$ with $x_i-\epsilon/(2n)<a_i<x_i<b_i<x_i+\epsilon/(2n)$ by [F5]. Every point of the resulting box is within Euclidean distance at most $\sqrt n\epsilon/(2n)<\epsilon$ of $x$. The box thus lies in $O$ and contains $x$. These are only finitely many rational choices for one point. The covering family itself consists of all such boxes and requires no pointwise selection. [F5, given]

2.1 Induct on the number $m$ of bounded open boxes to prove $P$ for their union. The cases $m=0,1$ are step 1.2. For the induction step, write $A$ for the union of the first $m-1$ boxes and $B$ for the last box. Their intersection is the union of the $m-1$ intersections with $B$. An intersection of two boxes is empty or a bounded open box, since its $i$th interval is $(\max(a_i,a_i'),\min(b_i,b_i'))$ and is empty exactly when the left endpoint is at least the right. The induction hypothesis therefore applies to both $A$ and $A\cap B$, after discarding empty members. Step 1.2 handles $B$, and step 1.1 gives $P(A\cup B)$. This is induction on the number of boxes for every such collection, so its use on the different intersection collection is valid. [step 1.1, step 1.2]


3.1 Enumerate all rational $2n$-tuples as follows. Fix one rational enumeration from [F5]. Enumerate tuples of its natural-number indices by increasing sum of indices and, for a fixed sum, lexicographically; there are finitely many tuples at each sum. Applying the enumeration coordinatewise lists all rational tuples, allowing repetitions. For tuple number $j$, let $B_j$ be its endpoint box if all endpoints are strictly ordered and the box is contained in $O$, and let $B_j=\varnothing$ otherwise. This defines a sequence without choosing an enumeration of a subset. Put $W_j=B_1\cup\cdots\cup B_j$. By step 1.3 the increasing union of the $W_j$ is $O$, and each $W_j$ has $P$ by step 2.1. Applying [F4] proves $P(O)$. For $n=0$, $O$ is empty or a point, already covered by step 1.2. [F4, F5, step 1.2, step 2.1, step 1.3]

4.1 If $O$ or $R$ is zero/empty, the asserted isomorphisms are the unique maps of zero modules. Repeated boxes, empty intersections, touching interval endpoints and a one-box cover were explicitly included in steps 1.2–3.1. The five-term argument is in ordinary homology, so degree $p=n$ uses $H_0$, while negative chain or cochain degrees are zero with their actual exact rows. All cap maps are the given unnormalized singular maps, so degenerate simplices are unchanged. The maps from step 1.2 never include the interval or ball boundary where their denominator would vanish. AC is used exactly through [F1] as stated in [F6]; finite intersections, the explicit tuple listing, and the colimit argument introduce no further use. [F1, F2, F4, F6, step 1.1, step 1.2, step 3.1] ∎
