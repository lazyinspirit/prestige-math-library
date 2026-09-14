---
id: lem-halpern-lauchli-rule-soundness-and-finite-thinning
kind: lemma
title: "Soundness of the three word rules and density-preserving finite thinning"
status: published
origin: pipeline
deps: [def-halpern-lauchli-finitistic-trees-density-and-matrices, def-halpern-lauchli-finite-word-calculus]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Halpern–Läuchli, A partition theorem (1966), §3 and Lemma 2, pp. 365–367"
      url: https://www.cs.umd.edu/~gasarch/BLOGPAPERS/HL-1966.pdf
    - title: "Monk, Set theory following Jech (2024), rule preservation in Theorem 29.28, pp. 664–669"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
proof_strategy: finite-induction
---

## Statement

Let $Q\subseteq\prod_{i=1}^dT_i$, where $d>0$ and the $T_i$ are finitistic
trees.  Under the matrix/node interpretation below, formulas are monotone when
a coordinate set bound by $\forall x_i$ is shrunk.  Moreover, if
$W\vdash_dW'$, then

$$\forall\mathbf n\,\exists p\,\Phi(W,\mathbf n,p) \quad\Longrightarrow\quad \forall\mathbf n\,\exists p\,\Phi(W',\mathbf n,p).$$

Thus Rule 3 is sound for this quantified scheme, although it need not preserve
a pointwise interpretation with the same density parameter.

## Facts & Assumptions

**Given:** The displayed $d,T_i,Q$, words $W,W'\in L_d$, and a derivation
$W\vdash_dW'$.

[F1] The preceding definition supplies domination, finite levels, no terminal
nodes, and $(h,k)$-density. [[def-halpern-lauchli-finitistic-trees-density-and-matrices]]

[F2] The only generating steps of $\vdash_d$ are the three stated rule
classes. [[def-halpern-lauchli-finite-word-calculus]]

## Proof

1.1 For $B_i\subseteq T_i$ and $n_i<\omega$, put $\mathcal C_i(n_i,B_i)=\{B_i\cap\{u:t\le_{T_i}u\}:t\in T_i(n_i)\}$.  Interpret a word from left to right: $\exists A_i$ means “there is $A_i\subseteq B_i$ that is $n_i$-dense”; $\forall x_i$ ranges over $A_i$; $\forall a_i$ ranges over $\mathcal C_i(n_i,B_i)$; and $\exists x_i$ ranges over $a_i$.  At the empty word assert $(x_1,\ldots,x_d)\in Q$.  Let $W(\mathbf n,\mathbf B)$ be the resulting sentence, and let $\Phi(W,\mathbf n,p)$ say that $W(\mathbf n,\mathbf B)$ holds whenever every $B_i$ is $p$-dense. [F1, F2, given, construct]

2.1 If a subformula has $A_i$ only through a quantifier $\forall x_i\in A_i$, replacing $A_i$ by $A_i'\subseteq A_i$ preserves its truth, because fewer values of $x_i$ must be checked.  Repeating this argument proves simultaneous monotonicity in every such coordinate. [step 1.1]

2.2 Rule 1 preserves the scheme: like quantifiers commute, and a witness for $\exists\alpha\,\forall\beta$ is independent of $\beta$ and therefore witnesses $\forall\beta\,\exists\alpha$.  The side condition that the result lies in $L_d$ ensures that all variable domains in step 1.1 are already defined when used. [F2, step 1.1]

2.3 Rule 2 is pointwise valid.  If $\forall a_i\in\mathcal C_i(n_i,B_i)$ there is $x_i\in a_i$ satisfying the tail, choose one witness from each member of this one finite cone family and collect the witnesses as $A_i$; it lies in $B_i$, meets every height-$n_i$ cone, hence is $n_i$-dense, and the tail holds for all its members.  Conversely, an $n_i$-dense $A_i\subseteq B_i$ meets every cone in $\mathcal C_i(n_i,B_i)$, so a member of the intersection supplies the matched existential.  Finite induction supplies the finitely many witnesses and uses no choice axiom. [F1, F2, step 1.1, choose]

2.4 Consider Rule 3 with $1\le r<d$, after relabelling its permutation: $W=(\forall a_i)_{i=1}^r(\exists A_i)_{i=r+1}^dV$ and $W'=(\exists A_i)_{i=r+1}^d(\forall a_i)_{i=1}^rV$.  Assume $\forall\mathbf k\exists p\,\Phi(W,\mathbf k,p)$.  Because a $p'$-dense set is $p$-dense when $p'\ge p$, let $F(\mathbf k)$ be the least witness exceeding every $k_i$.  For fixed $\mathbf n$, define $G(0)=\max_{i>r}n_i$ and $G(j+1)=F(n_1,\ldots,n_r,G(j),\ldots,G(j))$.  This uses least natural witnesses and recursion on $\omega$, not a choice function. [F1, F2, step 1.1, assume-hyp, construct]

3.1 Put $m=\prod_{i=1}^r|T_i(n_i)|$ and $p_j=G(m-j)$ for $0\le j\le m$.  Given $p_0$-dense $B_i$, enumerate the $m$ tuples of height-$n_i$ roots in the first $r$ trees; their associated cone tuples may repeat.  Before any tuple is processed, take $A_i^0=B_i$ for $i>r$.  These sets are $p_0$-dense and the preservation requirement for the empty list is vacuous. [F1, step 2.4, base]

4.1 Suppose $j<m$ cone tuples have been processed and $A_i^j\subseteq B_i$ is $p_j$-dense for every $i>r$, with the tail $V$ true for all earlier tuples.  Apply $\Phi(W,(n_1,\ldots,n_r,p_{j+1},\ldots,p_{j+1}),p_j)$ to the next cone tuple and to $B_1,\ldots,B_r,A_{r+1}^j,\ldots,A_d^j$.  It yields $A_i^{j+1}\subseteq A_i^j$ that are $p_{j+1}$-dense and make $V$ true for the new tuple.  Step 2.1 preserves all earlier instances.  Finite induction gives final sets $A_i^m$ working for all cone tuples. [F1, step 2.1, step 2.4, step 3.1, ih, choose]

5.1 Since $p_m=G(0)\ge n_i$ for $i>r$, each $A_i^m$ is $n_i$-dense: extend any height-$n_i$ node to height $p_m$ and use $p_m$-density.  Hence the $A_i^m$ witness the leading existential block of $W'$, and the universal block holds because step 4.1 processed every root tuple.  Therefore $\Phi(W',\mathbf n,p_0)$ holds.  The vector $\mathbf n$ was arbitrary, proving Rule 3 preserves the quantified scheme. [F1, step 2.4, step 4.1, discharge-induction]

6.1 A derivation is finite.  Apply steps 2.2, 2.3, or 5.1 successively to its rule steps; transitivity gives the displayed implication for $W\vdash_dW'$. [F2, step 2.2, step 2.3, step 5.1] ∎
