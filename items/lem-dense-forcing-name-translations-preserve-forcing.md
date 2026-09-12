---
id: lem-dense-forcing-name-translations-preserve-forcing
kind: lemma
title: Dense forcing name translations preserve forcing
status: draft
origin: pipeline
deps: [def-forcing-relation-for-atomic-formulas, def-forcing-relation-for-formulas, lem-forcing-monotonicity-density-and-decision, def-forcing-names-and-name-rank, thm-recursion-on-well-founded-setlike-relations, def-forcing-name-valuation-and-generic-extension, def-dense-open-sets-and-model-generic-filters]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Karagila, Forcing (2023), Definitions 2.28–2.33 and Propositions 2.30–2.32, pp.11–12; local recursive name and forcing argument"
      url: https://karagila.org/files/Forcing-2023.pdf
---

## Statement

Work in ZF. Let $P,Q$ be nonempty set forcing preorders and $e:P\to Q$ preserve order, preserve and reflect compatibility, and have dense image. Injectivity and reflection of the original order are unnecessary. Define recursive translations

$$T(\sigma)=\{\langle T(u),e(s)\rangle:\langle u,s\rangle\in\sigma\},\qquad R(\tau)=\{\langle R(v),p\rangle:\exists q\ (\langle v,q\rangle\in\tau\ \land\ e(p)\le q)\}.$$

For every fixed membership formula $\varphi$, every tuple of $P$-names $\vec\sigma$, and $p\in P$,

$$p\Vdash_P\varphi(\vec\sigma)\quad\Longleftrightarrow\quad e(p)\Vdash_Q\varphi(T\vec\sigma).$$

Every condition of $Q$ forces $TR(\tau)=\tau$, and every condition of $P$ forces $RT(\sigma)=\sigma$. Equality permits substitution in all these fixed formulas. These assertions hold internally over every transitive ZF ground $M$ containing the orders and $e$, with names and quantified witnesses taken in $M$; no countability or existence of generics is required.

When generics are supplied, $H\mapsto e^{-1}H$ and $G\mapsto\{q:\exists p\in G\ e(p)\le q\}$ are inverse bijections between the $M$-generic filters. Corresponding generics satisfy $T(\sigma)^H=\sigma^G$ and $R(\tau)^G=\tau^H$, so $M[G]=M[H]$. No AC or BPI is used.

## Facts & Assumptions

**Given:** The hypotheses above; stronger conditions are lower. All density and recursion arguments below can be performed inside $M$.

[F1] [[def-forcing-relation-for-atomic-formulas]] gives the two subset tests defining equality and the dense equality-witness test defining membership.

[F2] [[def-forcing-relation-for-formulas]] defines conjunction, negation and existential forcing, with dense name witnesses for the existential.

[F3] [[lem-forcing-monotonicity-density-and-decision]] supplies persistence and density closure for each formula, and meeting a ground dense-below-$p$ set when $p$ belongs to the generic.

[F4] [[def-forcing-names-and-name-rank]] gives the strictly decreasing subname ranks and set descendant cones.

[F5] [[thm-recursion-on-well-founded-setlike-relations]] supplies definable set-valued recursion and its restrictions to sets.

[F6] [[def-forcing-name-valuation-and-generic-extension]] defines valuation recursively from the entries whose coefficients belong to the filter.

[F7] [[def-dense-open-sets-and-model-generic-filters]] specifies nonempty upward closed directed filters meeting every ground dense set.

## Proof

1.1 We first record a refinement calculation. If $q\le e(p_1),\ldots,e(p_n)$, choose $a$ with $e(a)\le q$. Compatibility reflection makes $a$ compatible with $p_1$, so refine $a$ below $p_1$. Its image is still below $q$ and hence compatible with $e(p_2)$; reflect compatibility again and continue. After finitely many steps obtain $r\le p_1,\ldots,p_n$ with $e(r)\le q$. For $n=0$ this is image density. Consequently the image of $\{r:r\le p\}$ is dense below $e(p)$. Also, if $e(a)\le e(b)$, every extension of $a$ is compatible with $b$, and conditions below $b$ are dense below $a$. Only finitely many existential instantiations are involved. [given]

1.2 Apply F5 on the subname relation F4. The rule for $T$ takes a set image of the entries. The rule for $R$ takes a subset of the product of the entry set with $P$, then its set image. Both outputs are names by F4. These operations are definable and use no chosen inverse of $e$. Their recursion exists internally in any ground ZF model. For a transitive ground containing the data, induction on subnames identifies its output with the external translation: each entry and each tested coefficient ranges over the same ground sets, and the already translated subnames agree. The displayed definition shows that $TR(\tau)$ has entries $\langle TR(v),e(p)\rangle$ for every entry $\langle v,q\rangle\in\tau$ and every $p$ with $e(p)\le q$; this is a coefficient refinement, not literal equality with $\tau$. [F4, F5, given]

1.3 Here are the equality rules needed below, proved directly from F1. Induction on name rank gives $p\Vdash a=a$ for all $p$: for an entry of $a$ and a tested common extension use that same entry and the induction hypothesis for its subname. Symmetry is built into the two subset tests. For transitivity induct on the decreasing lexicographic order of the three name ranks sorted in nonincreasing order. Suppose $p\Vdash a=b$ and $p\Vdash b=c$. For an entry $\langle u,s\rangle\in a$ and $q\le p,s$, the first equality refines $q$ to $r$ below the coefficient of an entry $\langle v,t\rangle\in b$, forcing $u=v$. The second refines $r$ to $w$ below the coefficient of $\langle z,h\rangle\in c$, forcing $v=z$. Persistence and transitivity at the smaller triple $(u,v,z)$ give $w\Vdash u=z$. This verifies $a\subseteq c$; exchanging $a,c$ and using symmetry verifies $c\subseteq a$. The triple strictly decreases because all three entries are proper subnames. [F1, F3, F4]

2.1 If $p\Vdash a=b$ and $p\Vdash a\in c$, any extension of $p$ refines to an entry of $c$ with $a$ forced equal to its subname. Symmetry and transitivity from the preceding equality rules replace $a$ by $b$, proving $p\Vdash b\in c$. If $p\Vdash c=d$ and $p\Vdash a\in c$, first obtain an entry $\langle u,s\rangle\in c$ with $a=u$ forced and coefficient above the current condition. Apply the $c\subseteq d$ test to obtain an entry of $d$ with subname forced equal to $u$; transitivity gives the required membership witness in $d$. Density closure proves both membership substitution assertions at $p$. Transitivity itself gives substitution in equality, in either argument. [F1, F3, step 1.3]

2.2 We prove $p\Vdash_P a=b$ iff $e(p)\Vdash_Q T(a)=T(b)$ by induction on the sorted pair of source name ranks. For the forward direction, an entry $\langle T(u),e(s)\rangle$ of $T(a)$ comes from an entry $\langle u,s\rangle$ of $a$. Given $q\le e(p),e(s)$, the refinement calculation supplies $r\le p,s$ with $e(r)\le q$. The source subset test refines $r$ to a coefficient of an entry $\langle v,t\rangle\in b$ and forces $u=v$. The smaller-pair induction transports this equality, giving the target witness. Apply this reasoning to both subset directions. For the reverse direction, given $\langle u,s\rangle\in a$ and $r\le p,s$, apply the target test below $e(r)$ to find $q\le e(r),e(t)$ and an entry $\langle v,t\rangle\in b$ with $q\Vdash_Q T(u)=T(v)$. Refine to $w\le r,t$ with $e(w)\le q$; persistence and the smaller-pair induction give $w\Vdash_P u=v$. Again apply this to both subset directions. Duplicate image entries require only one witnessing source entry at a time. [F1, F3, F4, step 1.1]

2.3 For each $Q$-name $a$, every $Q$-condition forces $TR(a)=a$, by induction on its name rank. For an entry $\langle TR(u),e(s)\rangle$ of $TR(a)$ coming from $\langle u,t\rangle\in a$ with $e(s)\le t$, every tested condition below $e(s)$ is already below $t$ and forces $TR(u)=u$ by induction. This verifies $TR(a)\subseteq a$. For the other direction, given $\langle u,t\rangle\in a$ and a condition $q$ below its coefficient and the condition being tested, image density gives $e(s)\le q$. The entry $\langle TR(u),e(s)\rangle$ exists in $TR(a)$ and induction and symmetry give the required equality. These are exactly the two subset clauses. In particular, this proves forced equality for the coefficient closure, rather than assuming that closure leaves a name literally unchanged. [F1, F4, step 1.1, step 1.2, step 1.3]

2.4 Let $G$ be $P$-generic and put $H=\{q:\exists p\in G\ e(p)\le q\}$. It is nonempty and upward closed, and directedness follows by taking a common refinement in $G$. For a ground dense set $D\subseteq Q$, the set $E=\{p:e(p)\in D\}$ need not be dense if $D$ is not open. Instead use $E'=\{p:\exists d\in D\ e(p)\le d\}$: from $p$, find $d\le e(p)$ in $D$, and then $r\le p$ with $e(r)\le d$. Thus $E'$ is dense; meeting it puts such a $d$ in $H$. Hence $H$ is generic. Certainly $G\subseteq e^{-1}H$. If $e(p)\in H$, take $s\in G$ with $e(s)\le e(p)$. Conditions below $p$ are dense below $s$ by the refinement calculation, so F3 and genericity yield $r\in G$ below $p$, and $p\in G$. This proves $e^{-1}H=G$. [F3, F7, step 1.1]

2.5 Conversely let $H$ be $Q$-generic and put $G=e^{-1}H$. For a ground dense $D\subseteq P$, the set $\{q:\exists d\in D\ q\le e(d)\}$ is dense in $Q$: first refine to an image, then to the image of a member of $D$. Meeting it gives a member of $D$ in $G$, so $G$ meets every ground dense set and is nonempty. Order preservation gives upward closure. For $p,s\in G$, the set $D_{p,s}=\{r:r\perp p\text{ or }r\perp s\text{ or }r\le p,s\}$ is dense: refine successively toward $p$ and $s$ whenever compatible, and otherwise stop at the corresponding incompatible alternative. A point in $G\cap D_{p,s}$ cannot be incompatible with either, by compatibility preservation and directedness of $H$; it is the needed common refinement in $G$. Finally, for $q\in H$, the image is dense below $q$, and F3 gives $e(p)\in H$ below $q$ for some $p$. Thus $q$ belongs to the upward closure of $e[G]$. The opposite inclusion is upward closure of $H$. [F3, F7, step 1.1]

3.1 Equality substitution extends to each fixed formula by induction on its construction. Conjunction uses each conjunct. For negation, suppose $p$ forces the parameter equalities and $\neg\psi(\vec a)$; an extension forcing $\psi(\vec b)$ would, by persistence and the induction hypothesis, force $\psi(\vec a)$, contrary to F2. Reverse the equalities for the converse. For an existential, at every extension obtain its dense name witness, keep that witness fixed, and change the parameters by the induction hypothesis; the same dense-witness clause proves the substituted existential. Atomic cases are the equality and membership substitution calculations. This proves substitution at any condition forcing the parameter equalities, without appealing to generic semantics. [F2, F3, step 1.3, step 2.1]

3.2 Membership is transported in both directions as well. If $p\Vdash_P a\in b$, first refine any $q\le e(p)$ to $e(r)$ with $r\le p$, then use the source membership witness and the equality equivalence. Conversely, for $r\le p$ apply the target membership clause below $e(r)$, obtaining an entry $\langle v,t\rangle\in b$ and $q\le e(r),e(t)$ forcing $T(a)=T(v)$. Refine to $w\le r,t$ with $e(w)\le q$ and reflect equality. This is the source membership test. Empty right names fail both membership tests. [F1, F3, step 1.1, step 2.2]

3.3 Apply the Q-name round trip to $a=T(\sigma)$. Every $e(p)$ forces $T(R(T(\sigma)))=T(\sigma)$, so equality reflection proves that every $p$ forces $RT(\sigma)=\sigma$. Thus both translations are inverse modulo forced equality. The empty name translates to the empty name. [step 2.2, step 2.3]

3.4 Induction on source name rank and the equality $p\in G\iff e(p)\in H$ give $T(\sigma)^H=\sigma^G$ directly from the valuation clause. For $R$, an active coefficient $p\in G$ coming from $\langle v,q\rangle\in\tau$ has $e(p)\le q$, hence $q\in H$. Conversely if $q\in H$, the inverse correspondence supplies $p\in G$ with $e(p)\le q$, so the inverse entry is active. Induction identifies their subname valuations and yields $R(\tau)^G=\tau^H$. These two equalities imply both inclusions of the extensions. [F4, F6, step 1.2, step 2.4, step 2.5]

4.1 Induct now on each fixed formula for full forcing equivalence. Atomic cases have been proved. Conjunction is immediate from its two clauses. If $p\Vdash_P\neg\psi(\vec\sigma)$ and some $q\le e(p)$ forced $\psi(T\vec\sigma)$, refine to $r\le p$ with $e(r)\le q$ and apply persistence and the formula induction hypothesis to contradict source negation. Conversely any source extension forcing $\psi$ maps to a target extension forcing its translation, which is impossible if $e(p)$ forces its negation. [F2, F3, step 1.1, step 2.2, step 3.2]

5.1 For the existential forward direction, below any $q\le e(p)$ first find $r\le p$ with $e(r)\le q$, then refine $r$ to a source witness $\sigma$ for the matrix. The induction hypothesis transports that witness to $T(\sigma)$. For the converse, at $r\le p$ the target existential supplies $q\le e(r)$ and a $Q$-name $\tau$ forcing its matrix with parameters $T\vec\sigma$. Refine to $s\le r$ with $e(s)\le q$. Every condition forces $TR(\tau)=\tau$, so formula substitution changes this witness to $T(R(\tau))$. The induction hypothesis for the matrix reflects it to the source witness $R(\tau)$ at $s$. This proves the dense-witness test at $p$, and completes the induction. All names quantified over here belong to the given ground when the proof is performed internally. [F2, F3, step 1.1, step 3.1, step 2.3, step 4.1]

6.1 All constructions above are set images, Separation, definable recursion and finite refinements. The atomic inductions use ranks of set names; the formula induction is external for each fixed finite formula, interpreted inside the ground. Thus no generics were needed for the forcing equivalence, no external completeness or countability was used, and no choice function was selected. Empty preorders are excluded; singleton preorders and noninjective maps satisfy the same calculations. Boolean zero, if a target is presented as a Boolean algebra, must be removed so that its nonzero part is a forcing preorder. [step 1.2, step 5.1, step 3.4] QED.
