---
id: lem-easton-class-forcing-truth-and-set-names
kind: lemma
title: Set-stage names and the forcing truth lemma for the Easton class product
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-gbc-global-choice-ground-for-easton, def-easton-support-product, lem-easton-head-cc-and-tail-closure, def-forcing-names-and-name-rank, lem-forcing-names-and-name-ranks-are-absolute, def-forcing-name-valuation-and-generic-extension, def-forcing-relation-for-atomic-formulas, lem-atomic-forcing-relation-is-well-founded-and-definable, def-forcing-relation-for-formulas, lem-forcing-monotonicity-density-and-decision, thm-forcing-theorem, def-dense-open-sets-and-model-generic-filters]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Thomas Jech, Set Theory, Chapter 15, class forcing, Boolean-valued model M^B and the Forcing Theorem (15.15), printed pp.235-236"
      url: "https://fa.ewi.tudelft.nl/~hart/onderwijs/set_theory/Jech/15-applications_of_forcing.pdf"
verification:
  precheck: pending
---

## Statement

Let $(M,\mathcal{C})$ be a GBC + Global Choice + GCH ground
([[def-gbc-global-choice-ground-for-easton]]), let $F$ be a definable Easton
class function, let $P=P(F)$ be the Easton class product and let $G$ be an
$M$-generic filter on $P$. For an infinite regular $\lambda$ write
$P^{\le\lambda}$ for the head, $G^{\le\lambda}=G\cap P^{\le\lambda}$ and
$M[G^{\le\lambda}]$ for the set-forcing extension
([[def-forcing-name-valuation-and-generic-extension]]).

Then:

**(a) Stages.** For every infinite regular $\lambda$ the head
$P^{\le\lambda}$ is a set of $M$, $G^{\le\lambda}$ is an $M$-generic filter on
$P^{\le\lambda}$, and $M[G^{\le\lambda}]\subseteq M[G^{\le\mu}]$ for
$\lambda\le\mu$.

**(b) Names.** Every condition of $P$ lies in $P^{\le\lambda}$ for some
infinite regular $\lambda$; call a set $\tau\in M$ a $P$-name if it is a
$P^{\le\lambda}$-name ([[def-forcing-names-and-name-rank]]) for some infinite
regular $\lambda$. Every individual $P$-name is a set of $M$, the predicate
"$x$ is a $P$-name" is definable in $(M,\mathcal{C})$ from $P$, and the
$P$-names are exactly the members of the class
$\bigcup_{\lambda}M^{P^{\le\lambda}}$; for each fixed $\lambda$,
$M^{P^{\le\lambda}}$ itself denotes an internally proper class of $M$,
not an element of $M$ containing all names.

**(c) Valuation.** For a $P$-name $\tau$ and any infinite regular $\lambda$
with $\tau\in M^{P^{\le\lambda}}$, set $\tau_{G}:=\operatorname{val}_{G^{\le\lambda}}(\tau)$
([[def-forcing-name-valuation-and-generic-extension]]). This value is
independent of $\lambda$, and with
$M[G]:=\bigcup_{\lambda}M[G^{\le\lambda}]=\{\tau_{G}:\tau$ a $P$-name$\}$ every
element of $M[G]$ is the value of a $P$-name and each
$M[G^{\le\lambda}]$ is contained in $M[G]$.

**(d) Definable forcing and the truth lemma.** For a fixed membership formula
$\varphi$, define $p\Vdash\varphi(\vec\tau)$ for $p\in P$ and $P$-names
$\vec\tau$ by the clauses of [[def-forcing-relation-for-atomic-formulas]] and
[[def-forcing-relation-for-formulas]], read with the class $P$ in place of a
set preorder and with "name" meaning "P-name" as in (b). Then the relation
$\Vdash$ is a class of $\mathcal{C}$, definable in $(M,\mathcal{C})$ from $P$
and $F$ by a single formula for each fixed $\varphi$, and it satisfies the
truth lemma

$$M[G]\models\varphi(\vec\tau_{G})\quad\Longleftrightarrow\quad\exists p\in G\ (p\Vdash\varphi(\vec\tau)).$$

This is the class-forcing interface of the source: set stages supply all
names, the class relation is defined clause by clause without any class-sized
join, and the truth lemma is proved by induction on the formula using that
$G$ meets every dense class of the ground.

## Facts & Assumptions

**Given:** A GBC + Global Choice + GCH ground $(M,\mathcal C)$, a definable Easton class function $F$, its class product $P$, and a filter $G$ meeting every dense class in $\mathcal C$.

[F1] Class comprehension with set quantifiers and class parameters, class Replacement, Global Choice, and set-level ZFC + GCH hold in $(M,\mathcal C)$; $P$ is a class in $\mathcal C$. ([[def-gbc-global-choice-ground-for-easton]])

[F2] Every $p\in P$ is a set condition, $P^{\le\lambda}$ is a set, and the restrictions split $P$ into the product of the head and tail. The same splitting holds between two set heads. ([[def-easton-support-product]], [[lem-easton-head-cc-and-tail-closure]])

[F3] Set forcing names are sets formed by a rank recursion; the name predicate and rank are uniformly definable from the set forcing order, and namehood is absolute for transitive grounds containing that order. ([[def-forcing-names-and-name-rank]], [[lem-forcing-names-and-name-ranks-are-absolute]])

[F4] Valuation is the recursion selecting subnames whose coefficient conditions belong to the generic filter; a set-forcing extension consists of the values of all its ground names. ([[def-forcing-name-valuation-and-generic-extension]])

[F5] The atomic forcing clauses define a unique, uniformly definable rank recursion for a set forcing preorder. The formula clauses use conjunction, negation, and the dense-witness clause for an existential. ([[def-forcing-relation-for-atomic-formulas]], [[lem-atomic-forcing-relation-is-well-founded-and-definable]], [[def-forcing-relation-for-formulas]])

[F6] For a set forcing preorder in a transitive ground, the definable forcing relation satisfies the truth lemma for each fixed formula; in particular this holds for atomic formulas in every set head. ([[thm-forcing-theorem]])

[F7] A generic filter is upward closed and directed. Forcing is monotone under strengthening, and the conditions deciding a fixed formula are dense for set forcing. ([[def-dense-open-sets-and-model-generic-filters]], [[lem-forcing-monotonicity-density-and-decision]])

## Proof

1.1 **Set stages.** For every infinite regular $\lambda$, $P^{\le\lambda}\in M$ by [F2]. If $D\in M$ is dense in that head, the class $D^*=\{p\in P:p^{\le\lambda}\in D\}$ belongs to $\mathcal C$ by [F1] and is dense in $P$: below $p$, choose $q\le p^{\le\lambda}$ in $D$ and take $q\cup p^{>\lambda}$. Thus $G$ meets $D^*$. Because restriction of a member of $G$ is weaker and hence also belongs to $G$, $G^{\le\lambda}=G\cap P^{\le\lambda}$ meets $D$. Restrictions of common extensions show that $G^{\le\lambda}$ is directed; it is upward closed in the head, so it is $M$-generic. For $\lambda\le\mu$, $P^{\le\lambda}\subseteq P^{\le\mu}$ and $G^{\le\lambda}=G^{\le\mu}\cap P^{\le\lambda}$. [F1, F2, F7]

1.2 **Names.** Every $p\in P$ has a set of first coordinates, bounded by some infinite regular $\lambda$, and therefore belongs to $P^{\le\lambda}$. For a set $\tau\in M$, the assertion that there is a regular $\lambda$ for which $\tau$ is a $P^{\le\lambda}$-name is a first-order assertion over $M$ with parameter $F$: the order $P^{\le\lambda}$ is a set uniformly defined from $F$, and the set-name predicate is uniform by [F3]. Comprehension [F1] makes the $P$-names a class in $\mathcal C$. Each such name is individually a set of $M$; for each fixed $\lambda$, the collection $M^{P^{\le\lambda}}$ of all names is internally a proper class of $M$ (it includes $\check x$ for every $x\in M$). No element of $M$ containing all names is used. [F1, F2, F3]

1.3 **Atomic reduction to a set head.** Suppose $\lambda\le\mu$ are infinite regular, $\sigma,\tau$ are $P^{\le\lambda}$-names, and $p\in P^{\le\mu}$. In the factorization $P^{\le\mu}\cong P^{\le\lambda}\times P^{(\lambda,\mu]}$, the set-forcing atomic clauses give $p\Vdash_{P^{\le\mu}}\sigma R\tau\Longleftrightarrow p^{\le\lambda}\Vdash_{P^{\le\lambda}}\sigma R\tau$ for $R\in\{=,\in\}$. To verify this, induct simultaneously on the sorted pair of name ranks used in [F5]. Every coefficient of $\sigma,\tau$ lies in the smaller head. A condition below $p$ projects to a condition below $p^{\le\lambda}$, and every head condition below $p^{\le\lambda}$ lifts by union with $p^{(\lambda,\mu]}$. The same projection and lifting work below any head coefficient and for the stronger witnesses in the dense membership and subset clauses. The recursive equality calls involve strictly smaller name-rank pairs, so the induction hypothesis makes their truth invariant under the projection. This proves the equivalence for equality and membership, including both directions of every density clause. [F2, F3, F5]

1.4 **Meeting a dense class below a condition.** If $p\in G$ and $D\in\mathcal C$ is dense below $p$, then $D\cup\{r\in P:r\perp p\}$ is a dense class in $\mathcal C$: a condition incompatible with $p$ is already in it, while a compatible one has a common extension with $p$ and then an extension in $D$. Genericity makes $G$ meet this union. Directedness prevents any member of $G$ from being incompatible with $p$, so $G\cap D\ne\varnothing$. The cone $\{r:r\le p\}$ itself is not claimed dense in all of $P$. [F1, F7]

2.1 **Valuation.** The name classes increase with the heads: a $P^{\le\lambda}$-name remains a $P^{\le\mu}$-name when $\lambda\le\mu$, by induction on name rank and inclusion of the orders. If $\tau$ is a name from the smaller head, every coefficient and subname of $\tau$ also comes from that head. The equality $G^{\le\lambda}=G^{\le\mu}\cap P^{\le\lambda}$ from step 1.1 and induction in the valuation recursion [F4] yield $\operatorname{val}_{G^{\le\lambda}}(\tau)=\operatorname{val}_{G^{\le\mu}}(\tau)$. Hence $\tau_G$ is independent of stage, the set extensions are nested, and $M[G]=\bigcup_\lambda M[G^{\le\lambda}]$ is precisely the class of values of $P$-names. [F3, F4, step 1.1]

2.2 The same rank induction works with the full class product in place of $P^{\le\mu}$. For $p\in P$, choose a regular $\lambda$ containing $p,\sigma,\tau$; every class condition $q\le p$ projects to $q^{\le\lambda}\le p^{\le\lambda}$, and every head condition below $p^{\le\lambda}$ lifts by union with $p^{>\lambda}$. A witness below an arbitrary $q$ lifts with $q^{>\lambda}$. Thus the atomic clauses read with the class $P$ define exactly $p\Vdash_P\sigma R\tau\Longleftrightarrow p^{\le\lambda}\Vdash_{P^{\le\lambda}}\sigma R\tau$. Step 1.3 makes the right side independent of the sufficiently large stage. Since the set-forcing atomic relation is uniformly definable by [F5], this is a first-order definition over $M$ with class parameter $F$, so its extension belongs to $\mathcal C$ by [F1]. It uses a set-head recursion and no class-sized Boolean join or class-valued rank recursion. This is the atomic set-stage interface used by Jech on printed pp.235–236. [F1, F2, F5, step 1.2, step 1.3]

3.1 **Formula forcing.** Starting from step 2.2, define the forcing predicate for each fixed formula by the clauses of [F5]. At a conjunction or negation substitute the already defined subformula predicates. At an existential, quantify over set conditions and over sets satisfying the $P$-name predicate of step 1.2. All these are set quantifiers with class parameter $P$, so finite induction on the fixed formula and comprehension [F1] give one defining class in $\mathcal C$ for that formula. The clauses also give monotonicity by induction: strengthening preserves atomic forcing by step 2.2 and [F7], preserves conjunction and negation immediately, and preserves the dense-witness existential clause because every condition below a stronger condition was already below the original. [F1, F5, F7, step 1.2, step 2.2]

3.2 **Atomic truth.** Fix atomic $\varphi(\vec\tau)$ and a regular $\lambda$ containing all its names. Their values in $M[G]$ equal their values in $M[G^{\le\lambda}]$ by step 2.1. If $\varphi$ is true there, the set-forcing truth lemma [F6] supplies $q\in G^{\le\lambda}$ forcing it in the head; step 2.2 makes $q\Vdash_P\varphi$. Conversely if $p\in G$ forces the atom in $P$, enlarge $\lambda$ to include $p$; then $p^{\le\lambda}\in G^{\le\lambda}$ forces it in the set head by step 2.2, so [F6] gives its truth in the head and hence in $M[G]$. [F6, step 1.1, step 2.1, step 2.2]

4.1 **Connectives.** Induct on a fixed formula, the atomic case being step 3.2. For conjunction, if both conjuncts are true, their induction witnesses $p,q\in G$ have a common stronger member $r\in G$, which forces both by monotonicity from step 3.1. The converse follows from the two induction soundness directions. For negation, the class $D_\psi=\{p:p\Vdash\psi\text{ or }p\Vdash\neg\psi\}$ is definable by step 3.1 and dense: below any condition either some extension forces $\psi$, or that condition itself forces $\neg\psi$ by the negation clause. Therefore $G$ meets $D_\psi$. If $\psi$ is false in $M[G]$, the induction soundness direction excludes the positive side of this meeting, leaving some $p\in G$ that forces $\neg\psi$. Conversely if $p\in G$ forces $\neg\psi$ but $\psi$ were true, induction would give $q\in G$ forcing $\psi$; a common extension of $p,q$ in $G$ would force $\psi$, contrary to the negation clause. [F1, F5, F7, step 3.1, step 3.2]

4.2 **Existential quantifier.** If $M[G]\models\exists x\,\psi(x,\vec\tau_G)$, choose a witness $a=\sigma_G$ by step 2.1. Induction gives $p\in G$ forcing $\psi(\sigma,\vec\tau)$; monotonicity makes the matrix hold below every $q\le p$, so the existential forcing clause gives $p\Vdash\exists x\,\psi(x,\vec\tau)$. Conversely suppose $p\in G$ forces the existential. The class $D=\{r:\exists P\text{-name }\sigma\ (r\Vdash\psi(\sigma,\vec\tau))\}$ belongs to $\mathcal C$ by step 3.1 and is dense below $p$ by the existential clause. Step 1.4 gives $r\in G\cap D$ and a witnessing name $\sigma$; induction yields $M[G]\models\psi(\sigma_G,\vec\tau_G)$ and hence the existential. [F1, F5, step 2.1, step 3.1, step 1.4]

5.1 Steps 1.1–2.1 prove stages, names and valuation. Steps 1.3–3.1 prove the class relation is well defined and definable for every fixed formula, and steps 3.2–4.2 prove its truth lemma by formula induction. All choices of head antichains or names in this proof occur inside a set-forcing truth lemma or as one existential witness; the class comprehension and class genericity uses are explicit in steps 1.1, 2.2–3.1 and 1.4–4.2. This proves (a)–(d). ∎
