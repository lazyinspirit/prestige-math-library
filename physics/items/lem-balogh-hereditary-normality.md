---
id: lem-balogh-hereditary-normality
kind: lemma
title: Balogh hereditary normality
status: published
origin: pipeline
deps: [def-balogh-continuum-topology, lem-balogh-neighborhood-basis, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Hart, Set-Theoretic Methods in General Topology, Chapter 5 section 2, Exercises 3–6, printed pp. 31–32; level indices and extension conditions corrected here"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop.pdf
---

## Statement

Assume AC. In the Balogh space, any two separated subsets $H,K$ have disjoint open neighborhoods. Here separated means $H\cap\overline K=\overline H\cap K=\varnothing$, with closures in the whole space. Consequently the space is hereditarily normal, Hausdorff and $T_1$.

## Facts & Assumptions

**Given:** The Balogh space $X=\kappa\times\omega$ and its levels $L_n$ and initial level unions $U_n$.

[F1] Openness is witnessed by a finite family of binary equations at the immediately preceding level, with $F(\alpha,s,a)$ as defined in [[def-balogh-continuum-topology]].

[F2] These rules give a $T_1$ topology, each $U_n$ is open, and points on $L_n$ have neighborhoods contained in $U_n$ ([[lem-balogh-neighborhood-basis]]).

[A1] AC supplies simultaneous selections of the open separating neighborhoods whose existence is proved below ([[def-axiom-of-choice]]).

## Proof

1.1 For each $A\subseteq\kappa$ and $n<\omega$, we prove by finite induction that $A\times\{n\}$ and $(\kappa\setminus A)\times\{n\}$ have disjoint open neighborhoods contained in $U_n$. For $n=0$, use the two sets themselves, open by F1. At the successor stage let $c_A\in C$ be the characteristic function of $A$ and put $A'=\{\beta:d_{c_A}(\beta)=1\}$. The induction assertion gives disjoint open $O_1,O_0\subseteq U_n$ containing $A'\times\{n\}$ and its complement on $L_n$. Adjoin $A\times\{n+1\}$ to $O_1$ and its complement on $L_{n+1}$ to $O_0$. At a new top point $\alpha$, the witness $F(\alpha,\{c_A\},\varnothing)$ lies in $A'$ if $\alpha\in A$, and in its complement otherwise. F1 therefore makes the enlarged sets open; lower points already lie in the old opens. Disjointness holds on the new level and on the lower levels separately. This proves the assertion at every height. [F1, F2]

1.2 We will use the following open-extension calculation. Suppose $C_0$ is closed, $O\subseteq U_m$ is open, and $L_m\setminus C_0\subseteq O$. For $t>m$, put $O^*=O\cup(U_t\setminus(U_m\cup C_0))$. At points of height at most $m$, openness follows from $O$. At a new point of height $m+1$, the open set $X\setminus C_0$ supplies by F1 a witness whose height-$m$ slice avoids $C_0$, and this slice is contained in $O$. At greater heights the same kind of witness lies above height $m$ and outside $C_0$, hence inside the newly added part. Thus $O^*$ is open. The identical check at every finite height proves that $O\cup(X\setminus(U_m\cup C_0))$ is open as well. No claim that $U_m$ is closed was used. [F1, F2]

2.1 Let $H,K$ be separated, and fix $m<n$. Apply step 1.1 at level $m$ to the partition $L_m\cap\overline K$, $L_m\setminus\overline K$. Obtain disjoint open $O_K,O_H\subseteq U_m$ containing those sets. Then $O_K$ contains $K\cap L_m$. By step 1.2, $P=O_H\cup(U_n\setminus(U_m\cup\overline K))$ is open; it contains $H\cap L_n$ because those points have height $n>m$ and avoid $\overline K$. Its newly added portion is outside $U_m$, while $O_K\subseteq U_m$; the old portions are disjoint. Hence $P,O_K$ are disjoint open neighborhoods of these different-level subsets, both lying in $U_n$. [step 1.1, step 1.2]

3.1 Fix $n$. For every $m<n$ choose such disjoint open $P_m,Q_m\subseteq U_n$ about $H\cap L_n$ and $K\cap L_m$. At level $n$, step 1.1 supplies disjoint open $P_n,Q_n\subseteq U_n$ about $L_n\cap\overline H$ and $L_n\setminus\overline H$. In particular these contain $H\cap L_n$ and $K\cap L_n$. Put $V_n=\bigcap_{m\le n}P_m$ and $O'=\bigcup_{m\le n}Q_m$. Both are open, disjoint, and respectively contain $H\cap L_n$ and $K\cap U_n$. In addition $L_n\setminus\overline H\subseteq O'$ by the choice of $Q_n$. Step 1.2 therefore makes $O=O'\cup(X\setminus(U_n\cup\overline H))$ open. It contains all of $K$, because $K$ avoids $\overline H$, and remains disjoint from $V_n\subseteq U_n$. Thus $\overline{V_n}\cap K=\varnothing$: each point of $K$ has the neighborhood $O$ avoiding $V_n$. Repeating with $H,K$ interchanged yields open $W_n$ containing $K\cap L_n$ with $\overline{W_n}\cap H=\varnothing$. A1 permits fixing these choices for all $n$. At $n=0$ the finite intersection contains only the same-level choice; no different-level choices are needed. [step 1.1, step 1.2, step 2.1, A1]

4.1 Define $V=\bigcup_{n<\omega}(V_n\setminus\bigcup_{i\le n}\overline{W_i})$ and $W=\bigcup_{n<\omega}(W_n\setminus\bigcup_{i\le n}\overline{V_i})$. Each summand is open because only finitely many closed sets are removed. Every point of $H$ lies in some $V_n$ and in none of the $\overline{W_i}$, so $H\subseteq V$; likewise $K\subseteq W$. If a point belonged to a $V$-summand indexed by $n$ and a $W$-summand indexed by $m$, then $m\le n$ would make the first omit $W_m$, while $n\le m$ would make the second omit $V_n$. At least one comparison holds, including equality, so no such point exists. These are disjoint open neighborhoods of $H,K$. [step 3.1]

5.1 For any subspace $Y\subseteq X$ and disjoint relatively closed $H,K\subseteq Y$, one has $Y\cap\overline H=H$ and $Y\cap\overline K=K$, by the subspace closure definition. Thus $H,K$ are separated in $X$. Step 4.1 gives disjoint open neighborhoods in $X$, whose intersections with $Y$ prove normality of $Y$. This also handles empty subsets and the empty subspace. F2 gives $T_1$ for $X$; apply its normality to two distinct closed singletons to get Hausdorff separation. Therefore all the asserted hereditary and separation properties hold. QED. [step 4.1, F2]
