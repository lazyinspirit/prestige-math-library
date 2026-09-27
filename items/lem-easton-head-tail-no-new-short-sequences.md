---
id: lem-easton-head-tail-no-new-short-sequences
kind: lemma
title: A closed Easton tail adds no short sequences across its chain-condition head
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-kappa-closure-distributivity-and-chain-condition, def-dense-open-sets-and-model-generic-filters, lem-forcing-monotonicity-density-and-decision, thm-transfinite-recursion, thm-forcing-theorem, def-forcing-name-valuation-and-generic-extension, def-axiom-of-choice, def-forcing-preorder-compatibility-and-filter, def-forcing-relation-for-atomic-formulas, def-forcing-relation-for-formulas, def-check-names-and-the-canonical-generic-name, thm-generic-extension-transitivity-and-rank-bound, thm-generic-extensions-satisfy-zf-and-zfc]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Thomas Jech, Set Theory, Chapter 15, Lemma 15.19, printed p.234"
      url: "https://fa.ewi.tudelft.nl/~hart/onderwijs/set_theory/Jech/15-applications_of_forcing.pdf"
verification:
  precheck: pending
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Work in ZFC. Let $M$ be a transitive ground model of ZFC, let $\lambda$ be an
infinite cardinal of $M$, and let $P,Q\in M$ be nonempty set-sized forcing
preorders. Suppose, as computed in $M$, that $P$ is $\lambda^{+}$-closed and
$Q$ is $\lambda^{+}$-cc: every descending $P$-sequence of length below
$\lambda^{+}$ has a common lower bound, and every **pairwise-incompatible**
subset of $Q$ has cardinality below $\lambda^{+}$
([[def-kappa-closure-distributivity-and-chain-condition]],
[[def-forcing-preorder-compatibility-and-filter]]).

For every $M$-generic filter $G\times H$ on $P\times Q$ and every
$f\in M[G\times H]$ with $f:\lambda\to M$, one has $f\in M[H]$
([[def-forcing-name-valuation-and-generic-extension]]). Thus the $P$ factor
adds no new $\lambda$-sequences of ground-model elements, subsets of
$\lambda$, or cofinal maps from $\lambda$ to ground-model ordinals **over the
head extension $M[H]$**. The $Q$ factor itself may add such objects.

This is Lemma 15.19 of the source in the library's strict closure convention:
the source's "$\lambda$-closed" is $\lambda^{+}$-closed here. In Easton's
factorization, $P$ is the closed tail and $Q$ the cc head. The proof works
below a condition that forces the chosen name to have ground-set values; it
does not assume that every condition makes that name total.

## Facts & Assumptions
**Given:** The ZFC ground $M$, the cardinal $\lambda$, the closed preorder $P$, the cc preorder $Q$, the product generic $G\times H$, and $f:\lambda\to M$ in $M[G\times H]$.

[F1] Closure and the chain condition have the strict conventions in the statement; for forcing preorders, compatible means having a common stronger condition, and an antichain means pairwise incompatible, not merely incomparable. ([[def-kappa-closure-distributivity-and-chain-condition]], [[def-forcing-preorder-compatibility-and-filter]])

[F2] Generic filters meet ground-model dense sets; they are upward closed and downward directed. ([[def-dense-open-sets-and-model-generic-filters]], [[def-forcing-preorder-compatibility-and-filter]])

[F3] Forcing is monotone, its relation for any fixed formula is definable in $M$, and the truth lemma holds. The existential-name clause and the atomic membership clause for $\check A$ give dense ground-value decisions below a condition forcing a coordinate to lie in a ground set $A$. ([[lem-forcing-monotonicity-density-and-decision]], [[thm-forcing-theorem]], [[def-forcing-relation-for-formulas]], [[def-forcing-relation-for-atomic-formulas]], [[def-check-names-and-the-canonical-generic-name]])

[F4] A valuation has rank no greater than its name rank; a generic extension of a transitive ZFC model satisfies ZFC and contains its ground model and generic filter. ([[thm-generic-extension-transitivity-and-rank-bound]], [[thm-generic-extensions-satisfy-zf-and-zfc]])

[F5] Transfinite recursion builds set-length sequences; Choice inside $M$ well-orders the relevant ground sets and selects the witnesses used below. ([[thm-transfinite-recursion]], [[def-axiom-of-choice]])

## Proof

1.1 Choose a $P\times Q$-name $\dot f\in M$ with $f=\operatorname{val}_{G\times H}(\dot f)$, and put $\rho=\operatorname{rk}_{P\times Q}(\dot f)$. By [F4], $\operatorname{rank}(f)\le\rho$. Every value $f(\alpha)$ belongs to $M$ and has rank below $\rho+1$; transitivity of $M$ therefore puts it in the ground set $A:=V_{\rho+1}^{M}$. The product extension satisfies ZFC by [F4], so the truth lemma supplies $r=(p_r,q_r)\in G\times H$ forcing that $\dot f$ is a function from $\check\lambda$ into $\check A$. We will only use forcing below $r$. [F3, F4, given]

1.2 Form the cones $P_r=\{p\in P:p\le p_r\}$ and $Q_r=\{q\in Q:q\le q_r\}$ in $M$. They are nonempty. Every descending sequence in $P_r$ of length below $\lambda^{+}$ has a lower bound still in $P_r$ (include $p_r$ when the sequence is empty); every pairwise-incompatible subset of $Q_r$ is one of $Q$, so $Q_r$ is $\lambda^{+}$-cc. Here a maximal antichain of $Q_r$ means a pairwise-incompatible subset $W$ such that every member of $Q_r$ is compatible with some member of $W$. This agrees with maximality by inclusion: a condition incompatible with all of $W$ could be added, and conversely. [F1]

2.1 For each $\alpha<\lambda$ let $D_\alpha\subseteq P_r$ be the set of $p$ for which there are a maximal antichain $W\subseteq Q_r$ and $a:W\to A$ such that $(p,q)\Vdash\dot f(\check\alpha)=\check{a(q)}$ for every $q\in W$. The coordinate notation abbreviates the fixed first-order formula saying that $\dot f$ has value $\check{a(q)}$ at $\check\alpha$; no function-value term is added to the forcing language. This forcing relation is definable in $M$, and $W$ and $a$ range over ground sets, so Separation gives $D_\alpha\in M$. Monotonicity makes $D_\alpha$ downward closed in $P_r$. [F3, step 1.2]

2.2 Fix $p_0\in P_r$. Recursively, for $\gamma<\lambda^{+}$, suppose $\langle(p_\xi,q_\xi,a_\xi):\xi<\gamma\rangle$ has been chosen with the $p_\xi$ descending and the $q_\xi$ pairwise incompatible. If $W_\gamma=\{q_\xi:\xi<\gamma\}$ is maximal in $Q_r$, stop. Otherwise choose $q'\in Q_r$ incompatible with every member of $W_\gamma$. Closure gives $\bar p\in P_r$ below $p_0$ and every preceding $p_\xi$, since their number is below $\lambda^{+}$. Because $(\bar p,q')\le r$ forces that the value of $\dot f$ at $\check\alpha$ lies in $\check A$, the existential-name clause first gives, densely below $(\bar p,q')$, a name $\sigma$ forced to be that value and to belong to $\check A$. The atomic membership clause for $\check A$ then gives a further pair $(p_\gamma,q_\gamma)\le(\bar p,q')$ and $a_\gamma\in A$ forcing $\sigma=\check{a_\gamma}$, hence $\dot f(\check\alpha)=\check{a_\gamma}$. In particular $q_\gamma$ remains incompatible with all earlier $q_\xi$. The selected triples lie in the ground set $P_r\times Q_r\times A$; Choice in $M$ well-orders this set and makes the recursion deterministic. No choice from the proper class of all names is needed. [F1, F3, F5, step 1.1, step 1.2]

3.1 The recursion stops at some $\beta<\lambda^{+}$: otherwise the distinct $q_\gamma$, $\gamma<\lambda^{+}$, form a pairwise-incompatible subset of $Q_r$ of size $\lambda^{+}$. At the stopping stage $W_\beta$ is maximal. Closure supplies $p^{\dagger}\in P_r$ below $p_0$ and every $p_\xi$ for $\xi<\beta$. Monotonicity then gives $(p^{\dagger},q_\xi)\Vdash\dot f(\check\alpha)=\check{a_\xi}$ for all $\xi<\beta$, so $W_\beta$ and $a(q_\xi)=a_\xi$ witness $p^{\dagger}\in D_\alpha$. Thus every $D_\alpha$ is dense open in $P_r$. [F1, F3, step 2.1, step 2.2]

4.1 The intersection $D=\bigcap_{\alpha<\lambda}D_\alpha$ belongs to $M$ and is dense open in $P_r$. Indeed, starting below any $p\in P_r$, use [F5] to meet $D_\alpha$ successively for $\alpha<\lambda$, taking lower bounds at limits and at the end. All these sequences have length at most $\lambda<\lambda^{+}$; downward closure keeps the final condition in every $D_\alpha$. [F1, F5, step 3.1]

5.1 The projection $G$ is $M$-generic for $P$: if $E\in M$ is dense in $P$, then $E\times Q$ is dense in $P\times Q$ and the product generic meets it. To meet the cone-dense set $D$, use the global dense set $E_D=D\cup\{p\in P:p\perp p_r\}$: if $p$ is compatible with $p_r$, first strengthen into $P_r$ and then into $D$. Since $p_r\in G$ and a filter cannot contain incompatible conditions, $G\cap E_D\subseteq D$. Fix $p^{*}\in G\cap D$. Choice in $M$ selects, for all $\alpha<\lambda$, witnesses $(W_\alpha,a_\alpha)$ to $p^{*}\in D_\alpha$; their full sequence belongs to $M$. [F2, F5, step 2.1, step 4.1]

6.1 Similarly $H$ is $M$-generic for $Q$. For each $\alpha$, the downward closure of $W_\alpha$ is dense in $Q_r$: compatibility with a member of the maximal antichain yields a common stronger condition. Lifting this cone-dense set to $Q$ by adjoining conditions incompatible with $q_r$ shows that $H$ meets it. Upward closure then gives some $w_\alpha\in H\cap W_\alpha$, and downward directedness makes $w_\alpha$ unique because distinct members of $W_\alpha$ are incompatible. [F1, F2, step 1.2, step 5.1]

7.1 For each $\alpha<\lambda$, $(p^{*},w_\alpha)\in G\times H$ forces $\dot f(\check\alpha)=\check{a_\alpha(w_\alpha)}$, so the truth lemma gives $f(\alpha)=a_\alpha(w_\alpha)$. The ground sequence $\langle(W_\alpha,a_\alpha):\alpha<\lambda\rangle$ and $H$ belong to $M[H]$, which satisfies ZFC by [F4]. Its Separation and Replacement therefore construct $\alpha\mapsto a_\alpha(w_\alpha)$ there. This function is $f$, hence $f\in M[H]$. Characteristic functions and cofinal maps are special cases of such sequences, proving the stated relative conclusions. ∎ [F3, F4, step 5.1, step 6.1]
