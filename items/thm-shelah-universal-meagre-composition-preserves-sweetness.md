---
id: thm-shelah-universal-meagre-composition-preserves-sweetness
kind: theorem
title: Composition with universal-meagre forcing preserves sweetness
status: draft
origin: pipeline
deps: [def-shelah-sweetness-model, def-shelah-universal-meagre-forcing, def-two-step-forcing-iteration, lem-shelah-sweet-density-transfer-along-complete-suborders, thm-forcing-theorem]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Saharon Shelah, Can You Take Solovay's Inaccessible Away?", url: "https://shelah.logic.at/files/95333/176.pdf", locator: "Composition Lemma 7.6 and Subclaim 7.8, pp. 36-40"}
---

## Statement

If $P$ has a sweetness model and $P$ forces that $Q$ is $\mathrm{UM}$, then the
two-step iteration $P*Q$ has a sweetness model extending that of $P$. This
remains true in the strengthened extension-of-models form used at successor
stages.

## Facts & Assumptions

**Given:** A sweetness model $(P,D,E_n)$ and the two-step iteration $P*\dot{\mathrm{UM}}$ of [[def-two-step-forcing-iteration]], whose second coordinate is a $P$-name for a condition of the forcing $\mathrm{UM}$ of [[def-shelah-universal-meagre-forcing]]; write $q\Vdash\eta\in\dot T$ for forced node membership.

[F1] [[def-shelah-sweetness-model]]: the sequential and transfer clauses of $(P,D,E_n)$ and the extension relation between sweetness models.

[F2] [[def-shelah-universal-meagre-forcing]]: $\mathrm{UM}$ and its order; the union $T_1\cup T_2$ of two conditions' witness trees with a common initial tree is again a perfect nowhere-dense tree with that initial tree.

[F3] [[lem-shelah-sweet-density-transfer-along-complete-suborders]]: the corresponding source claim in the two-part uniform form; it supplies, for any old class $A$ and any $q\in D$, a modulus $k$ such that the trace of $A$ below an $E_k$-equivalent strengthening of $q$ mirrors the trace below $q$.

[F4] [[thm-forcing-theorem]]: forcing equivalence and definability, used to replace an arbitrary name $\dot Q$ forced to be $\mathrm{UM}$ by the ground-model $\mathrm{UM}$, and to certify the sequential clause in the iteration.



## Proof

1.1 Enumerate the old classes as $\{A_m:m<\omega\}$, where each $A_m$ is one of the classes $p/E^P_n$, $p\in D$, $n<\omega$; the enumeration is a surjection from $\omega$ because there are countably many such classes. [F1]

2.1 For $p\in D$ and $m<\omega$ define $\kappa_m(p)$ to be the least $k$ such that for every $p'\mathrel{E^P_k}p$: if some $q\in A_m$ satisfies $q\le p$, then some $q'\in A_m$ satisfies $q'\le p'$. The set of such $k$ is nonempty by [F3] applied to the class $A_m$ and the condition $p$, with the transfer clause absorbing the case in which no member of $A_m$ lies below $p$; the least element is taken in $\omega$. [F1, F3, step 1.1]

3.1 Stability of $\kappa$: if $\kappa_m(p)=k$ and $p'\mathrel{E^P_k}p$, then $\kappa_m(p')=k$; for $\le$ the same $k$ witnesses the property for $p'$, using transitivity of $E^P_k$, and for $\ge$ a smaller working modulus for $p'$ also works for $p$ because the trace conditions are equivalent at that coarser level. [step 2.1]

3.2 Define $D^*=\{(p,\dot\tau):p\in D,\ \dot\tau$ a $P$-name with $p\Vdash\dot\tau\in\mathrm{UM}\}$; it is dense in $P*\dot{\mathrm{UM}}$ because $D$ is dense in $P$ and the second factor's conditions have names below them. For $x_\ell=(p_\ell,\dot\tau_\ell)\in D^*$, $\ell=1,2$, declare $x_1\mathrel{E^*_n}x_2$ if and only if: (i) $p_1\mathrel{E^P_K}p_2$ where $K=\max\{n,\kappa_m(p_1),\kappa_m(p_2):m<n\}$; (ii) $\kappa_m(p_1)=\kappa_m(p_2)$ for all $m<n$; (iii) for every $m<n$ and every $\eta\in 2^{<\omega}$ there is $q\in A_m$ with $q\Vdash\eta\notin\dot\tau_1$ if and only if there is $q\in A_m$ with $q\Vdash\eta\notin\dot\tau_2$ (the omission agreement of the source's clause $(\delta)$, not a membership agreement); (iv) $p_1$ and $p_2$ force the same recorded initial tree. [F1, F2, step 2.1]

4.1 Each $E^*_n$ is an equivalence relation with countably many classes and $E^*_{n+1}$ refines $E^*_n$: reflexivity and symmetry are immediate; transitivity follows because clause (ii) is an equality of tuples, clause (iv) an equality of forced objects, clause (i) composes at the common level $K$ by transitivity of $E^P_K$, and clause (iii) is an agreement of omission patterns. For the count of classes, an $E^*_n$-class is determined by the tuple $(\kappa_m)_{m<n}$, the truth values of the statements "some $q\in A_m$ forces the node $\eta$ out of the name" for $\eta\in 2^{<\omega}$, and the old classes $p/E^P_K$; these range over countably many possibilities. Refinement is immediate because the level-$n+1$ clauses include the level-$n$ ones. [F1, step 3.1, step 3.2]

4.2 The $E^*_n$-classes are downward directed. Given $x_1\mathrel{E^*_n}x_2$, put $K=\max\{n,\kappa_m(p_1):m<n\}$ and use directedness of the old $E^P_K$-class of $p_1$ to choose $p^*\mathrel{E^P_K}p_1$ with $p^*\le p_1,p_2$; by [F2], $T^*=T_1\cup T_2$ is a perfect nowhere-dense tree with initial tree $t_1=t_2$, and $(p^*,(t_1,T^*))\in D^*$ is below both $x_1,x_2$. It is $E^*_n$-equivalent to $x_1$: the trace clauses transfer because $K\ge\kappa_m(p_1)$ and step 2.1 controls the $A_m$-traces below $p^*$, the $\kappa$-tuples agree by step 3.1, and the old relation holds at level $K$. [F1, F2, step 2.1, step 3.1]

4.3 Transfer clause. Let $x=(p,(t,T))$, $y=(r,(s,S))$ be in $D^*$ and fix $n$. Choose $k$ larger than $n$, all moduli $\kappa_m$ of $p$ and $r$ for $m$ below the relevant levels, and the transfer moduli of the old model for the coordinate pairs $(p,r)$ at level $K_r+n$; suppose $y'\mathrel{E^*_n}y$ satisfies $y'\le x$. Given $x'\mathrel{E^*_k}x$, the old transfer clause applied in the first coordinate with the moduli fixed above produces $r''\mathrel{E^P_{K_r+n}}r$ with $r''\le p'$, and in the second coordinate the tree $T''=T'\cup S''$ with the shared initial tree is the required witness by [F2]. The trace and $\kappa$-clauses for $r''$ and $T''$ are inherited from those of $r$ and $S$ because the modulus of $x'$ dominates the finitely many moduli $\kappa_m$, and step 3.1 keeps them aligned; hence $y''=(r'',(s,T''))$ is $E^*_n$-equivalent to $y$ and lies below $x'$. [F1, F2, step 2.1, step 3.1]

4.4 The model extends the old one: the pairs $(p,\dot 1)$ with $p\in D$ and $\dot 1$ the name of the trivial tree form the canonical copy of $P$ inside $P*\dot{\mathrm{UM}}$, and the restriction of $E^*_n$ to that copy is exactly $E^P_n$, all tree clauses being decided trivially. Every $E^*_n$-class meeting the copy is contained in it: clause (iv) forces the recorded initial tree of a class member to be the trivial tree, and clause (iii) then keeps the whole associated name trivial. Given $q\in D$, $x=(p,\dot\tau)\in D^*$ and $q\le p$ with $x$ below the copy in the iteration, the first coordinate satisfies the corresponding clause of [F1] and the recorded tree forces $\dot\tau$ to be trivial. [F1, step 3.2]

4.5 Sequential clause: the common lower bound. Let $x_i=(p_i,\dot\tau_i)\mathrel{E^*_i}x_\omega=(p_\omega,\dot\tau_\omega)$ for $i<\omega$; by clause (iv) all the recorded initial trees agree, say $t_i=t$. Put $K=\max\{n,\kappa_m(p_\omega):m<n\}$. Clause (ii) gives $\kappa_m(p_i)=\kappa_m(p_\omega)$ for all $m<n$, so clause (i) applied to $x_i\mathrel{E^*_i}x_\omega$ gives $p_i\mathrel{E^P_{K_i}}p_\omega$ with $K_i\ge K$, hence $p_i\mathrel{E^P_K}p_\omega$ because $E^P_{K_i}$ refines $E^P_K$. Applying the old sequential clause of [F1] at level $K$, with clause (iii) keeping the omission patterns aligned, produces $p^*\in D$ with $p^*\ge p_i$ for $n\le i\le\omega$ and $p^*\mathrel{E^P_K}p_\omega$. [F1, step 3.2]

5.1 The tree name $\dot T^*$. Define $\dot T^*$ by the source's case distinction: if the generic filter contains $p^*$ then $\dot T^*=\bigcup_{n\le i\le\omega}\dot\tau_i$, and otherwise $\dot T^*=\dot\tau_\omega$. Below $p^*$ the name is therefore the union of the whole sequence of tree names, and off that cone it is $\dot\tau_\omega$. Each $\dot\tau_i$ is forced to be in $\mathrm{UM}$ with the recorded initial tree $t$, and clause (iii) keeps the members of one class agreeing on which nodes they omit, so $\dot T^*$ is forced to be a subtree of $2^{<\omega}$ with $\dot T^*\cap 2^{l}=t$ for the suitable $l$; perfectness is inherited from any single member, since a splitting node above a given node of $\dot T^*$ inside some $\dot\tau_i$ is a splitting node of the union. What remains is nowhere-density. [F1, F2, step 4.4]

5.2 The diagonal. Let $\eta\in 2^{<\omega}$ and $r\in P$. If $r$ is incompatible with $p^*$, then $r$ forces $\dot T^*=\dot\tau_\omega$, which is nowhere dense, so assume $r\ge p^*$. Since $p_\omega$ forces $\dot\tau_\omega$ to be nowhere dense, choose $r'\ge r$ and $\nu\supset\eta$ with $r'\Vdash\nu\notin\dot\tau_\omega$; strengthening $r'$ further if necessary, we may also assume $r'\ge p^*$. For $n\le i<\omega$ with $i>l(\nu)$ let $l(i)<\omega$ be maximal such that $r'/E^P_{l(i)}=A_{m(i)}$ for some $m(i)<i$; such an index exists for all large $i$, say $i\ge i_0$, the function $l$ is nondecreasing, and $l(i)\to\infty$. For each $j$ with $i_0\le j<\omega$: $m(j)<j$, and $r'$ witnesses that some member of $A_{m(j)}$ lies above $p_\omega$, so clauses (i) and (ii) through the moduli $\kappa_m$ (the source's clause $(\gamma)$) give $r_j^0\in A_{m(j)}$ with $r_j^0\ge p_j$; and clause (iii) applied to the node $\nu$, which $r'\in A_{m(j)}$ forces out of $\dot\tau_\omega$, gives $r_j^1\in A_{m(j)}$ with $r_j^1\Vdash\nu\notin\dot\tau_j$. As $A_{m(j)}$ is directed, fix $r_j\in A_{m(j)}$ above $r_j^0$ and $r_j^1$. Let $i_k$ be the first $i$ with $l(i)>k$. Every $r_j$ with $i_k\le j<i_{k+1}$ lies in the class $r'/E^P_k$, so those finitely many conditions have a common bound $r'_k\in r'/E^P_k$ (and $r'_k=r'$ when $i_k=i_{k+1}$); the family $\{r'_k:n\le k<\omega\}\cup\{r'\}$ is directed by the same equivalences and so has a common bound $r^*$. Then $r^*\ge r'$, $r^*\ge r_j$ for $j\ge i_n$, and $r^*\Vdash\nu\notin\dot\tau_i$ for all $i$ with $l(n)\le i<\omega$ and also for $i=\omega$, since $r^*\ge r'$. Inductively on $i\ge n$ choose conditions $r^*_i$ and nodes $\nu_i$ with $r^*_n=r^*$, $\nu_n=\nu$, $\nu_i\subsetneq\nu_{i+1}$ and $r^*_{i+1}\Vdash\nu_i\notin\dot\tau_i$: at stage $i$ the name $\dot\tau_i$ is forced nowhere dense, so extend $r^*_i$ to decide a node above $\nu$ that is outside $\dot\tau_i$, and take that node as $\nu_{i+1}$. Then $r^*_{i_{n+1}}\Vdash\nu_{i_{n+1}}\notin\dot\tau_i$ for every $n\le i\le\omega$: for $i>i_n$ by the choice of $r^*$ and $r'_i$, and for $n\le i\le i_n$ because $r^*_{i+1}\le r^*_{i_{n+1}}$. Hence $r^*_{i_{n+1}}$ forces an extension of $\eta$ out of $\dot T^*$, and since $\eta$ and $r$ were arbitrary, $\emptyset\Vdash$ "$\dot T^*$ is nowhere dense". [F1, F2, step 4.2]

5.3 If $\dot Q$ is an arbitrary $P$-name forced to be $\mathrm{UM}$ rather than the ground-model $\mathrm{UM}$, then $\dot Q$ is forcing-equivalent to $\mathrm{UM}$ over $V$ and, a fortiori, over $V^{P}$, so the two-step iteration $P*\dot Q$ is forcing-equivalent to $P*\mathrm{UM}$; the equivalence translates the model of steps 3.2 through 5.4 by the generic-filter correspondence of [F4], providing the sweetness model in the stated generality. [F4, step 4.4]

6.1 The common bound is $E^*_n$-equivalent to $x_\omega$. Steps 4.5-5.3 give $(p^*,(t,\dot T^*))\ge(p_i,(t,\dot\tau_i))$ for every $n\le i\le\omega$. For the equivalence: (i) holds because $p^*\mathrel{E^P_K}p_\omega$ and $K\ge n$; (ii) holds by the choice of $K$ and the $\kappa$-clauses; (iv) is the common $t$; and (iii) is checked as in step 4.3. For (iii), let $m<n$ and suppose $r\in A_m$ with $r\ge p_\omega$; note that in the case considered by clause (iii) the class $A_m$ is the class of $p^*$, and on that class $\dot T^*$ is the union $\bigcup_{n\le i\le\omega}\dot\tau_i$, so $\dot\tau_\omega\subseteq\dot T^*$ there. Hence if some $p\in A_m$ forces $\eta\notin\dot T^*$, the same $p$ forces $\eta\notin\dot\tau_\omega$. Conversely, if $p\in A_m$ forces $\eta\notin\dot\tau_\omega$, then as in step 5.2 there are $p'\ge p$ in $A_m$ and $k<\omega$ with $p'\Vdash\eta\notin\dot\tau_i$ for all $k\le i\le\omega$, while the agreements $x_i\mathrel{E^*_i}x_\omega$ provide $p'_i\in A_m$ with $p'_i\Vdash\eta\notin\dot\tau_i$ for $n\le i<k$; directedness of $A_m$ bounds $\{p'_i:n\le i<k\}\cup\{p'\}$ by some $p''\in A_m$, and $p''$ forces $\eta\notin\dot T^*$. [step 4.3, step 5.1, step 5.2]

7.1 The steps above verify the four sweetness clauses and the extension clauses for $P*\mathrm{UM}$ - condition (c) by the diagonal of steps 4.5-5.4, whose common bound is exhibited and verified clause by clause - and step 5.3 transfers the result to an arbitrary name for $\mathrm{UM}$; this is the two-step composition claim of the Statement. [step 4.5, step 5.1, step 5.2, step 6.1, step 5.3, step 4.3] ∎
