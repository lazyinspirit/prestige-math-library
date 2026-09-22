---
id: thm-shelah-universal-meagre-composition-preserves-sweetness
kind: theorem
title: Composition with universal-meagre forcing preserves sweetness
status: draft
origin: pipeline
deps: [def-shelah-sweetness-model, def-shelah-universal-meagre-forcing, def-two-step-forcing-iteration, thm-forcing-theorem, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - {title: "Saharon Shelah, Can You Take Solovay's Inaccessible Away?", url: "https://shelah.logic.at/files/95333/176.pdf", locator: "Composition Lemma 7.6, Subclaim 7.8 and Claim 7.11, pp. 36-41"}
---

## Statement

Assume ZFC. If $P$ has a sweetness model and $P$ forces that $Q$ is $\mathrm{UM}$, then the
two-step iteration $P*Q$ has a sweetness model extending that of $P$. This
remains true in the strengthened extension-of-models form used at successor
stages.

## Facts & Assumptions

**Given:** Work in ZFC. A sweetness model $(P,D,E^P_n)$ and the canonical two-step iteration $P*\dot{\mathrm{UM}}$ of [[def-two-step-forcing-iteration]], where $P$ forces that the second coordinate is the forcing defined in [[def-shelah-universal-meagre-forcing]]. Equivalently, a specified $P$-forced order isomorphism with that canonical forcing may be used to rename the second-coordinate conditions. Mere forcing equivalence, without such an order isomorphism carrying the conditions and traces below, is not used.

[F1] [[def-shelah-sweetness-model]]: the sequential and transfer clauses of $(P,D,E_n)$ and the extension relation between sweetness models.

[F2] [[def-shelah-universal-meagre-forcing]]: $\mathrm{UM}$ and its order; the union $T_1\cup T_2$ of two conditions' witness trees with a common initial tree is again a perfect nowhere-dense tree with that initial tree.

[F3] By the transfer clause in [F1], if $A_m=q_m/E^P_j$ is an old equivalence class and $p\in D$, there is $k$ such that every $p'\mathrel{E^P_k}p$ has a member of $A_m$ below it whenever $p$ does. This is an application of the old sweetness model itself, not of a complete-suborder density theorem.

[F4] [[thm-forcing-theorem]]: definability and truth for forcing, used for the node-membership traces and the conditional tree names in the proof.

[A1] [[def-axiom-of-choice]] licenses the enumeration of the old class families, all countable dependent witness selections below, and—crucially—the maximal-antichain mixing that replaces every local second-coordinate name by a name in the set $R$ fixed by [[def-two-step-forcing-iteration]]. This is the exact additional hypothesis needed to transport Shelah's local-name proof to that restricted set-sized carrier.

[F5] Shelah's Composition Lemma 7.6 defines the relations by clauses $(\alpha)$--$(\varepsilon)$ and proves all sweetness clauses; Subclaim 7.8 is the strengthening lemma used in their proof. Claim 7.11 then adjoins the old dense presentation and proves the extension-of-models form. [source]



## Proof

1.1 Enumerate, with repetitions allowed, all old equivalence classes as $\{A_m:m<\omega\}$. For $p\in D$ define $k_m(p)$ to be the least $k$ such that every $p'\mathrel{E^P_k}p$ has the following property: $$A_m\cap(P\mathbin{\downarrow}p)\ne\varnothing \quad\Longrightarrow\quad A_m\cap(P\mathbin{\downarrow}p')\ne\varnothing.$$ If the left side is empty this is vacuous. Otherwise, writing $A_m$ as an old equivalence class, the transfer clause gives such a $k$. This is the source's clause $(\varepsilon)$ modulus. [F1, F3, A1]

1.2 Shelah's source works with local conditions $(p,(t,\dot T))$ satisfying only $p\Vdash(t,\dot T)\in\mathrm{UM}$. Strengthen any iteration condition to decide the finite record $t$, make the second coordinate nontrivial, and put the first coordinate in $D$. By [A1] and the normalization theorem in [[def-two-step-forcing-iteration]], replace the resulting local second-coordinate name by a name in its set $R$ that is forced equal below $p$. Do this after every later conditional union as well, always below the constructed first coordinate. Substitution for forced equality shows that these normalized representatives have exactly the local order comparisons used in the source, so they form a dense presentation $D^*$ of the restricted iteration. In particular, no name is required to be a UM condition under $1_P$. For $x_j=(p_j,(t_j,\dot T_j))$, $j=1,2$, define $x_1E^*_nx_2$ by the following five clauses from the source composition result [F5]:

- $(\alpha)$ $p_1\mathrel{E^P_n}p_2$;
- $(\beta)$ $t_1=t_2$;
- $(\gamma)$ for every $m<n$, the cone below $p_1$ meets $A_m$ iff the cone below $p_2$ meets $A_m$;
- $(\delta)$ for every $m<n$, whenever the equivalent cone-meeting condition in $(\gamma)$ holds for $A_m$, then for every $\eta\in2^n$, $$\exists q\in A_m\ (q\Vdash\eta\notin\dot T_1) \quad\Longleftrightarrow\quad \exists q\in A_m\ (q\Vdash\eta\notin\dot T_2);$$
- $(\varepsilon)$ for every $m<n$, $k_m(p_1)=k_m(p_2)$ and $p_1\mathrel{E^P_{k_m(p_1)}}p_2$.

The implication in $(\delta)$ is deliberately conditional on $(\gamma)$, and the tree trace records forced **nonmembership**. These are the exclusion traces in the source; membership traces cannot replace them. These two finite traces and the strengthening moduli are the interfaces needed in the diagonal proof. The normalization changes no trace used by the proof: when $(\gamma)$ is active, directedness of $A_m$ combines any trace witness with a member below $p_j$, where the original and normalized names are forced equal. [F4, F5, A1, step 1.1]

2.1 The five clauses define refining equivalence relations with countably many classes. At a fixed $n$ they record an old $E^P_n$-class, one finite tree, finitely many cone-meeting bits, finitely many nonmembership bits on $2^n$, and finitely many natural-number moduli and old classes. Transitivity of $(\delta)$ uses $(\gamma)$ to ensure that the same active $A_m$ is being compared; transitivity of $(\varepsilon)$ uses directedness of $A_m$ together with the definition of $k_m$. For refinement, exclusion of a length-$n$ word from a pruned binary tree is equivalent to exclusion of both its children. If separate members of an active directed $A_m$ force the two exclusions, a common strengthening inside $A_m$ forces both. Thus equality of the length-$(n+1)$ exclusion traces implies equality at length $n$; all other recorded data restrict directly. [F1, F5, step 1.2]

2.2 The stability subclaim recorded in [F5] is the fixed-model strengthening interface used repeatedly below. Put $K=\max(\{n\}\cup\{k_m(p):m<n\})$. If $p'\mathrel{E^P_K}p$ and $p'\le p$, then for every canonical UM condition $(p,(t,\dot T))\in D^*$ one has $(p',(t,\dot T))\in D^*$ and $(p',(t,\dot T))E^*_n(p,(t,\dot T))$; moreover the cone below $p'$ meets $A_m$ iff the cone below $p$ meets $A_m$ for every $m<n$. The forward direction is immediate from $p'\le p$, and the reverse direction is exactly the defining property of $k_m(p)$. [F1, F5, step 1.1, step 1.2]

3.1 Downward directedness now has a legitimate common condition. For two $E^*_n$-equivalent members, use the old directed class at the maximum of $n$ and their finitely many common $k_m$ values to obtain $p^*\le p_1,p_2$. The stability subclaim [F5] preserves all active $A_m$ traces. Clause $(\beta)$ gives one recorded tree $t$, while $(\delta)$ ensures that the two witness-tree names have compatible finite membership requirements. Their union below $p^*$ is a perfect nowhere-dense witness tree with recorded part $t$, by the exact UM compatibility calculation in [F2]. Normalize this local union name below $p^*$ as in step 1.2; the resulting member of $D^*$ is a common lower bound in the same $E^*_n$-class. [F1, F2, F5, A1, step 1.2, step 2.2]

3.2 For the sequential clause, suppose $x_iE^*_ix_\omega$ for every $i<\omega$ and fix a tail $i\ge n$. Put $K=\max(\{n\}\cup\{k_m(p_\omega):m<n\})$. All first coordinates in the tail lie in the $E^P_K$-class of $p_\omega$ by the five clauses. The old sequential clause supplies a bound of the tail from index $K$ in that class; class directedness combines it with the finitely many first coordinates with $n\le i<K$. This gives $p^*\in D$ below all first coordinates in the tail and in the required old class. All recorded trees equal one finite $t$. Define the source's local conditional name $$\dot T^*=\begin{cases} \bigcup_{n\le i\le\omega}\dot T_i,&p^*\in\dot G_P,\\ \dot T_\omega,&p^*\notin\dot G_P. \end{cases}$$ The finite initial-tree and perfectness clauses are immediate. Nowhere density is not inferred from the finite data. Given a ground node $\eta$ and a condition below $p^*$, first strengthen it to force some extension $\nu\supseteq\eta$ out of $\dot T_\omega$. For each sufficiently large $i$, choose the largest old equivalence level $\ell(i)<i$ represented by a class $A_{m(i)}$ with $m(i)<i$ through that strengthening. The sequence $\ell(i)$ is nondecreasing and unbounded. Clauses $(\gamma)$ and $(\delta)$ transfer the exclusion of all finitely many length-$i$ extensions of $\nu$ to a condition in $A_{m(i)}$ below $p_i$. On each finite block where $\ell(i)$ is constant, directedness gives one condition in the corresponding old class; the old sequential clause diagonalises those block conditions to one lower bound. Finally finitely many early indices are handled successively using the nowhere density of their individual tree names. The resulting condition forces one extension of $\eta$ outside every $\dot T_i$, hence outside $\dot T^*$. This is the full source diagonal recorded in [F5], and it proves that $(p^*,(t,\dot T^*))$ is a local UM condition below the whole tail. Normalize it below $p^*$ by step 1.2. Repeating the finite trace argument verifies clauses $(\gamma)$ and $(\delta)$ against $x_\omega$, so the normalized bound lies in its $E^*_n$-class. [F1, F2, F4, F5, A1, step 1.2, step 2.2]

3.3 For transfer, take $(q,(s,\dot S))\le(p,(t,\dot T))$ and a target level $n$. The source proof [F5] first chooses the old transfer modulus for $p,q$ after incorporating the finitely many $k_m(q)$, then enlarges it past the index of the old class containing $q$ and past the height of $s$. For an $E^*_k$-perturbation $(p',(t,\dot T'))$, the old transfer clause produces $p^*$ in the required old class below $p'$ and $q$. The source uses the local conditional name $$\dot S^*=\begin{cases} \dot S\cup\dot T',&p^*\in\dot G_P,\\ \dot S,&p^*\notin\dot G_P. \end{cases}$$ The extra height qualification ensures that every node outside the recorded tree $s$ is tested by the level-$k$ $(\delta)$ trace. Together with $(\gamma)$, directedness of the active $A_m$, and the stability subclaim [F5], this proves that $(p^*,(s,\dot S^*))$ is a local UM condition, lies below both inputs, and is $E^*_n$-equivalent to $(q,(s,\dot S))$. Normalize it below $p^*$ by step 1.2 to obtain the required restricted-iteration condition. This is the source transfer argument; the qualification cannot be replaced by agreement of initial trees alone. [F1, F2, F4, F5, A1, step 1.2, step 2.2]

4.1 Steps 2.1--3.3 prove that $(P*\dot{\mathrm{UM}},D^*,(E^*_n))$ is sweet. They do **not** yet prove that this presentation extends the fixed old model. The fixed-model result recorded in [F5] supplies that separate step: replace $D^*$ by a dense-open presentation disjoint from the canonical old dense set, adjoin the old $D$, and use $E^*_n$ on the new piece and $E^P_n$ on the old piece, with no cross-piece equivalences. The only mixed transfer case is settled using the stability subclaim [F5] and the comparable transfer clause of [F1]. The fixed-model result then checks all five extension conditions, including that a new class meeting $D$ is contained in $P$ and that a member of the new dense set lying above an old condition was already old. Thus the resulting sweetness model extends the given one. [F1, F5, step 2.2, step 3.3]

5.1 If the second forcing is presented under a specified $P$-forced order isomorphism with canonical UM, pull the concrete conditions, nonmembership traces, and the five clauses back along that isomorphism. No inference from bare forcing equivalence to sweetness is made. Steps 3.1--4.1 establish the two conclusions of the Statement. [F4, step 1.2, step 4.1] ∎
