---
id: "lem-carleson-size-selection"
kind: "lemma"
title: "Carleson size selection"
deps: ["def-density-size-and-tree-count-for-carleson-tiles", "def-carleson-tiles-wave-packets-and-tile-order", "thm-plancherel", "def-axiom-of-choice", "thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: 'Lacey, Carleson’s Theorem: Proof, Complements, Variations'
      url: https://arxiv.org/pdf/math/0307008
      locator: Lemma 3.9; section 5
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
status: "draft"
origin: "pipeline"
---

## Statement

Assume AC. For a finite family of size sigma>0, choose trees with total top length <=C sigma^(-2)||f||_2^2, leaving size <=sigma/2.

## Facts & Assumptions

[F1] Size is the supremum of the normalized squared coefficient sums over plus trees, including singleton trees; it decreases on subcollections. Count sums designated top lengths with multiplicity [[def-density-size-and-tree-count-for-carleson-tiles]].

[F2] Tiles, plus trees and the fixed packets have the stated dyadic order, Fourier supports strictly inside the lower frequency halves, and Schwartz decay at every integer exponent [[def-carleson-tiles-wave-packets-and-tile-order]].

[F3] Plancherel preserves the complex inner product [[thm-plancherel]].

[F4] The complex pairing is first-variable-linear, has squared norm on the diagonal and satisfies Cauchy–Schwarz [[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]].

[F5] Assume AC [[def-axiom-of-choice]], sufficient for the countable-choice Fourier interfaces in F2 and F3.

## Proof

**Given:** A finite tile set S, $f\in L^2(\mathbb R)$, and $\sigma=\operatorname{size}_f(S)>0$. Put $a_s=\langle f,\phi_s\rangle$. Constants below depend only on the fixed packet.

1.1 Call a plus tree with top t strict when $\omega_t\subseteq\omega_{s,+}$ for every member s, so its top is not a member. Any plus tree can be made strict by replacing its top t with $\widetilde t=I_t^{\rm parent}\times\omega_{t,+}$. This is a tile, dominates all its members, and satisfies the strict condition even for s=t. Its top length is twice the old length. Consequently, whenever a stock R has size greater than $\sigma/2$, it has a strict plus subtree U with top t and $\sum_{s\in U}|a_s|^2>\sigma^2|I_t|/8$. Indeed the supremum in F1 then has a witness with normalized sum greater than $\sigma^2/4$, and the replacement divides that sum by two. [F1, F2, given]

1.2 For $l=|I_s|\ge l'=|I_{s'}|$, packet decay implies $$|\langle\phi_s,\phi_{s'}\rangle|\le C\sqrt{l'/l}\bigl(1+|c(I_s)-c(I_{s'})|/l\bigr)^{-20}.$$ To prove it, use exponent 40 in F2. For each x, the factor $1+|c(I_s)-c(I_{s'})|/l$ is at most $(1+|x-c(I_s)|/l)(1+|x-c(I_{s'})|/l')$. Extract its inverse twentieth power from the product of the two decay factors. The remaining integral is at most $\int(1+|x-c(I_{s'})|/l')^{-20}dx=(2/19)l'$. Multiplying by $(ll')^{-1/2}$ proves the bound. By F3, a Gram entry is zero when the two lower frequency halves are disjoint. [F2, F3]

2.1 Starting with R=S, consider all strict witnesses satisfying the threshold inequality of step 1.1. Only finitely many possible tops occur: if $B=\sum_{s\in S}|a_s|^2$ and $\ell_0=\min_{s\in S}|I_s|$, their lengths lie between $\ell_0$ and $8B/\sigma^2$. There are finitely many dyadic scales in this range. Each top dominates some s in S, so its spatial interval is the unique ancestor of $I_s$ at its scale, and its frequency interval is one of finitely many dyadic subintervals of $\omega_s$ at its prescribed length. Choose a possible top of minimum frequency center, breaking ties by any fixed ordering of this finite list, and choose a strict witness U for that top. Remove the full tree $V=\{s\in R:s\le t\}$, record U and V with that same top, and repeat. The process stops after at most |S| removals because every witness is nonempty. Possible witnesses only disappear as R shrinks, so the selected top-frequency centers are nondecreasing. At termination the residual size is at most $\sigma/2$ by step 1.1. The V are disjoint tile collections, as are their subsets U. [F1, F2, step 1.1]

3.1 The strict witnesses have the following separation property. If $s\in U$, $s'\in U'$ belong to different recorded witnesses and $\omega_{s,-}\subsetneq\omega_{s',-}$, dyadic nesting implies $\omega_s\subseteq\omega_{s',-}$. Thus the top-frequency interval of U lies in $\omega_{s',-}$, while that of U' lies in $\omega_{s',+}$. The former center is smaller, so U was selected earlier. If $I_{s'}$ met $I_U$, the inequalities $|I_{s'}|<|I_s|\le|I_U|$ and dyadic nesting would give $I_{s'}\subseteq I_U$. Together with $\omega_U\subseteq\omega_{s'}$ this would have removed s' with the earlier full tree. Hence $I_{s'}\cap I_U=\varnothing$. Within one strict plus tree, distinct lower frequency halves are disjoint: if two unequal such halves were nested, the full smaller frequency interval would lie in the larger lower half, whereas the common top frequency must lie in its upper half. Equal lower halves mean equal full frequencies and equal spatial scales; distinct tiles then have disjoint spatial intervals. [F2, step 2.1]

3.2 Let $\mathcal U$ be the recorded strict witnesses, $L=\sum_{U\in\mathcal U}|I_U|$, $Q=\sum_U\sum_{s\in U}|a_s|^2$, and $H=\sum_U\sum_{s\in U}a_s\phi_s$. The witness threshold and original size give $\sigma^2 L/8<Q\le\sigma^2L$ when $L>0$. The part of the Gram expansion of $\|H\|_2^2$ with equal lower frequency halves has absolute value at most CQ. In fact, for each fixed frequency the spatial intervals form a subset of the lattice of intervals of its fixed length l. Step 1.2 bounds the row sums and column sums by $C\sum_{j\in\mathbb Z}(1+|j|)^{-20}<\infty$. This series is finite by comparison with the integral of $x^{-20}$ on $[1,\infty)$. Apply $2|a_sa_{s'}|\le|a_s|^2+|a_{s'}|^2$ and sum the row and column bounds. [F1, F4, step 2.1, step 1.2]

4.1 For fixed $s\in U$ consider all witness tiles s' whose lower frequency halves properly contain $\omega_{s,-}$. They belong to other witnesses by step 3.1, and their spatial intervals lie outside $I_U$. These intervals are pairwise disjoint. To check this, two corresponding lower frequency halves both contain $\omega_{s,-}$, so are nested. If unequal, their owning witnesses must differ by step 3.1; applying its separation property to that pair makes the smaller spatial interval disjoint from the other one's entire top interval, hence from the other spatial interval. If equal, they have the same scale and different spatial intervals. Put $\chi_I(x)=|I|^{-1}(1+|x-c(I)|/|I|)^{-20}$. Since $|I_{s'}|\le|I_s|$, the values $\chi_{I_s}(x)$ and $\chi_{I_s}(c(I_{s'}))$ on $I_{s'}$ differ by at most a fixed factor: their denominators before taking the twentieth power differ by at most $|I_{s'}|/(2|I_s|)\le1/2$. Therefore $$\sum_{s'}|I_{s'}|\chi_{I_s}(c(I_{s'}))\le C\int_{\mathbb R\setminus I_U}\chi_{I_s}(x)\,dx.$$ All sums here are finite. [F2, step 3.1]

5.1 Singleton trees in F1 give $|a_s|\le\sigma\sqrt{|I_s|}$. Combining this with step 1.2 bounds an oriented unequal-frequency Gram term by $C\sigma^2|I_s||I_{s'}|\chi_{I_s}(c(I_{s'}))$. Thus step 4.1 bounds all such terms by $$C\sigma^2\sum_U\sum_{s\in U}|I_s|\int_{\mathbb R\setminus I_U}\chi_{I_s}(x)\,dx.$$ For a fixed top interval J and a fixed scale l<=|J|, at most one frequency interval can occur above a given spatial interval of that scale: it must be the unique dyadic ancestor of the top frequency of length 1/l. Thus the spatial intervals at that scale form a subset of the dyadic subintervals of J. Write $m=|J|/l$ and index the full list from k=0 to m-1. Direct integration on the two exterior half-lines bounds $$l\int_{\mathbb R\setminus J}\chi_{I_k}(x)\,dx\le Cl\bigl((1+k)^{-19}+(1+m-1-k)^{-19}\bigr).$$ Indeed the exact two denominators are $1+k+1/2$ and $1+m-k-1/2$, with factor $l/19$. The sum over k is at most Cl by integral comparison with $x^{-19}$. Summing over the dyadic scales $l=|J|2^{-j}$, j>=0, gives at most C|J| by the geometric sum. The oriented contribution is consequently at most $C\sigma^2L$; its conjugate orientation satisfies the same bound. [F1, F2, step 1.2, step 4.1]

6.1 Steps 3.2 and 5.1, and the vanishing of every remaining Gram entry in step 1.2, give $\|H\|_2^2\le C\sigma^2L$. By the first-variable-linear convention, $\langle f,H\rangle=Q$, so F4 gives $Q\le\|f\|_2\|H\|_2$. If L>0, combine this with $Q>\sigma^2L/8$ and divide by $\sigma\sqrt L$ to obtain $L\le C\sigma^{-2}\|f\|_2^2$. If no witness was selected, L=0 and the bound is immediate. The removed full trees V have these same tops, so this is their forest count, while step 2.1 gives the required residual size. No assumption that distinct top intervals are disjoint was made. All selections are finite; AC is inherited solely from the Fourier interfaces identified in F5. [F4, F5, step 2.1, step 1.2, step 3.2, step 5.1] ∎
