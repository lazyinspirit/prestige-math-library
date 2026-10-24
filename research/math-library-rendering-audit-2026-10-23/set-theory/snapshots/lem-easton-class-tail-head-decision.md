---
id: lem-easton-class-tail-head-decision
kind: lemma
title: Uniform head-antichain decisions below a class tail
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-gbc-global-choice-ground-for-easton, lem-easton-class-forcing-truth-and-set-names, lem-easton-head-cc-and-tail-closure, def-easton-support-product, def-forcing-names-and-name-rank, def-forcing-relation-for-formulas, def-forcing-relation-for-atomic-formulas, lem-forcing-monotonicity-density-and-decision, def-dense-open-sets-and-model-generic-filters, def-axiom-of-choice, thm-generic-extensions-satisfy-zf-and-zfc]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Thomas Jech, Set Theory, Chapter 15, the classes D_alpha of the Power Set and Replacement proofs (Power Set section and (15.17)), printed pp.236-237"
      url: "https://fa.ewi.tudelft.nl/~hart/onderwijs/set_theory/Jech/15-applications_of_forcing.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $(M,\mathcal{C})$ be a GBC + Global Choice + GCH ground
([[def-gbc-global-choice-ground-for-easton]]), $F$ a definable Easton class
function with class product $P=P(F)$ and $G$ an $M$-generic filter, and let
$\lambda$ be an infinite regular cardinal of $M$
([[lem-easton-class-forcing-truth-and-set-names]] for the forcing relation and
the truth lemma). Fix a membership formula $\varphi$, an ordinal
$\mu\le\lambda$ of $M$ and a ground sequence
$\langle\vec\tau_{\alpha}:\alpha<\mu\rangle\in M$ of tuples of
$P^{\le\lambda}$-names.

A tail condition $t\in P^{>\lambda}$ **decides** $\varphi$ on
$\langle\vec\tau_{\alpha}\rangle$ when for every $\alpha<\mu$ there is a
maximal antichain $W_{\alpha}\subseteq P^{\le\lambda}$ such that for every
$q\in W_{\alpha}$ the condition $t\cup q$ forces $\varphi(\vec\tau_{\alpha})$ or
forces its negation. If $\varphi$ has the form $\exists x\,\psi(x,\vec\tau_{\alpha})$,
each positive cell also carries a ground set name $\sigma$ with
$t\cup q\Vdash\psi(\sigma,\vec\tau_{\alpha})$.

Then:

**(a)** The class $D\subseteq P^{>\lambda}$ of conditions that decide
$\varphi$ on $\langle\vec\tau_{\alpha}\rangle$ is dense in $P^{>\lambda}$, open,
and a member of $\mathcal{C}$; hence some $t\in G^{>\lambda}$ decides it.

**(b)** For such $t$, every decision is confirmed at the level of the head:
for each $\alpha<\mu$ the unique $q_{\alpha}\in W_{\alpha}\cap G^{\le\lambda}$
has $t\cup q_{\alpha}$ in the class filter, so the truth value of
$\varphi(\vec\tau_{\alpha,G})$ in $M[G]$ is the value recorded at
$q_{\alpha}$, and the set
$\{\alpha<\mu:M[G]\models\varphi(\vec\tau_{\alpha,G})\}$, together with the
sets of head antichains and decisions, belongs to $M[G^{\le\lambda}]$.

**(c)** For an outer existential formula, the witness names attached to its positive decisions form
a ground set $S$, and there is an infinite regular $\gamma$ of $M$ with
$S\subseteq M^{P^{\le\gamma}}$; consequently
$\{\sigma_{G}:\sigma\in S\}\in M[G^{\le\gamma}]$ is a set in the class
extension containing every witness value that these decisions produce.

## Facts & Assumptions
**Given:** a GBC + Global Choice + GCH ground, a definable Easton class function $F$, the class product $P=P(F)$, an $M$-generic filter $G$, an infinite regular $\lambda$, an ordinal $\mu\le\lambda$, a formula $\varphi$ and a ground sequence $\langle\vec\tau_{\alpha}:\alpha<\mu\rangle$ of tuples of $P^{\le\lambda}$-names.

[F1] $\mathcal{C}$ is closed under comprehension with set quantifiers and class parameters, $M\models\mathrm{ZFC}+\mathrm{GCH}$, class Replacement holds, $G$ meets every class of $\mathcal{C}$ that is dense in $P$, and Global Choice supplies class choices. ([[def-gbc-global-choice-ground-for-easton]])

[F2] $P^{\le\lambda}$ is a set with the $\lambda^{+}$-chain condition, $P^{>\lambda}$ is $\lambda^{+}$-closed, and $P\cong P^{\le\lambda}\times P^{>\lambda}$ with $p\mapsto(p^{\le\lambda},p^{>\lambda})$; each condition of the tail is a set of triples with first coordinates $>\lambda$, and a union of a descending sequence of tail conditions of length below $\lambda^{+}$ is a tail condition. ([[def-easton-support-product]], [[lem-easton-head-cc-and-tail-closure]])

[F3] The class forcing relation is defined over the class of $P$-names by the atomic and formula clauses, is a class of $\mathcal{C}$ definable from $P$ and $F$, and satisfies the truth lemma $M[G]\models\varphi(\vec\tau_{G})\Leftrightarrow\exists p\in G\,(p\Vdash\varphi(\vec\tau))$. ([[lem-easton-class-forcing-truth-and-set-names]])

[F4] The formula clauses are: $p\Vdash\neg\psi$ iff no $q\le p$ forces $\psi$; $p\Vdash\exists x\,\psi(x,\vec\tau)$ iff below every $q\le p$ there are $r\le q$ and a name $\sigma$ with $r\Vdash\psi(\sigma,\vec\tau)$; $p\Vdash\psi\land\theta$ iff both. ([[def-forcing-relation-for-formulas]], [[def-forcing-relation-for-atomic-formulas]])

[F5] Forcing is monotone and decidable: $p\Vdash\varphi$ and $q\le p$ imply $q\Vdash\varphi$, and every condition has a stronger one forcing $\varphi$ or forcing $\neg\varphi$. ([[lem-forcing-monotonicity-density-and-decision]])

[F6] A filter is directed and upward closed; density and genericity are as in the density convention; a set of pairwise incompatible conditions is an antichain, and an antichain is maximal when every condition is compatible with one of its members. ([[def-dense-open-sets-and-model-generic-filters]])

[F7] Ground AC is assumed: every set-indexed family of nonempty sets has a choice function ([[def-axiom-of-choice]]). Since $M\models\mathrm{ZFC}$ and each head is a set forcing with an $M$-generic filter, every head extension satisfies ZFC, including AC, Separation and Replacement. ([[thm-generic-extensions-satisfy-zf-and-zfc]])

## Proof

1.1 For each $\alpha<\mu$ the class of conditions deciding $\varphi(\vec\tau_\alpha)$ is definable and dense by [F3] and [F5]. For a fixed $\alpha$ we build a good tail condition below any given $t_0\in P^{>\lambda}$: at successor stages choose a head condition incompatible with all previously chosen ones, strengthen the head and tail to decide $\varphi(\vec\tau_\alpha)$, and use the resulting stronger head condition as $q_\xi$. If $\varphi$ is an outer existential formula and the decision is positive, strengthen head and tail once more and choose a ground witness name forcing its matrix by the existential density clause [F4]; the final head condition remains incompatible with earlier cells. Use the Global Choice least witness among those of least rank at each successor stage. At limit stages $\xi<\lambda^+$ take the union of the earlier tails, which is a condition by [F2]; class Replacement collects each set-length initial segment. If the construction did not stop before $\lambda^+$, class Replacement would collect a forbidden $\lambda^+$-sized head antichain. Decisions and attached witnesses persist under stronger tails. By the $\lambda^+$-chain condition of the head, this recursion must stop before $\lambda^+$, when the head antichain is maximal. The resulting tail is good for $\alpha$, so the class of tails good for one $\alpha$ is dense and open in $P^{>\lambda}$ and belongs to $\mathcal C$ by [F1]; the set-indexed choices and antichains are supplied by Global Choice and class Replacement in [F1] and ground Choice [F7]. [F1, F2, F3, F4, F5, F7]

2.1 Iterating step 1.1 along the $\alpha<\mu\le\lambda$ many indices: given $t$ good for all $\beta<\alpha$, apply step 1.1 to $t$ and $\alpha$ to get $t'\le t$ good for $\alpha$, and the antichains and decisions already attached to the earlier indices persist because decisions are inherited by stronger conditions by [F5], using monotonicity and the fact that $W_\beta$ remains maximal. Choose at each stage the least-rank witness tuple and then its Global Choice least representative; class Replacement [F1] collects the $\mu$-indexed antichains, decision maps and attached witness names into one ground set. Thus the class $D$ of tail conditions deciding $\varphi$ on $\langle\vec\tau_\alpha\rangle$ is the intersection of the $\mu$ many open dense classes, it is open and in $\mathcal C$, and it is dense in $P^{>\lambda}$: given $t_0$, build a descending sequence $\langle t_\alpha:\alpha<\mu\rangle$ with $t_\alpha$ good for all $\beta\le\alpha$ by recursion of length $\mu\le\lambda$, taking lower bounds at limits by $\lambda^+$-closure, and a lower bound of the whole sequence is in $D$ by openness. [F1, F2, F5, F7, step 1.1]

3.1 The class $D^*=\{p\in P:p^{>\lambda}\in D\}$ is dense in $P$ and lies in $\mathcal C$, because below any $p$ the class $D$ supplies a tail condition $t\le p^{>\lambda}$ and then $p^{\le\lambda}\cup t\le p$ has its tail in $D$; so by the genericity of $G$ there is $t=p^{>\lambda}\in G^{>\lambda}$ with $t\in D$, and by [F6] $G^{>\lambda}$ is a directed filter in the tail. [F1, F2, F6, step 2.1]

4.1 Confirmation and definability in the head stage. Fix $t\in G^{>\lambda}\cap D$ from step 3.1 and $\alpha<\mu$. The antichain $W_\alpha$ and the decisions are ground sets, hence lie in $M[G^{\le\lambda}]$; since $G^{\le\lambda}$ is an $M$-generic filter on $P^{\le\lambda}$ [F6] and $W_\alpha$ is a maximal antichain of $P^{\le\lambda}$, there is exactly one $q_\alpha\in W_\alpha\cap G^{\le\lambda}$, and uniqueness uses directedness of the filter and pairwise incompatibility inside the antichain. The condition $t\cup q_\alpha$ is extended by an element of $G$: any common extension of $t$ and $q_\alpha$ in $G$ is below it, so by [F3] and [F5] the truth value of $\varphi(\vec\tau_{\alpha,G})$ in $M[G]$ is exactly the value recorded at $q_\alpha$, and the recorded value is a formula of $M[G^{\le\lambda}]$ with the ground parameters $W_\alpha$ and the decision function; consequently the set $\{\alpha<\mu:M[G]\models\varphi(\vec\tau_{\alpha,G})\}$ is defined in $M[G^{\le\lambda}]$ by Separation in that ZFC set extension [F7] applied to $\mu$. For an outer existential formula, its positive cells carry the witness names selected in step 1.1. [F1, F3, F5, F6, F7, step 1.1, step 3.1]

5.1 The witness names. The witnesses attached in step 4.1 are names of $M$ and they are indexed by the set $\mu\times\bigcup_{\alpha<\mu}W_\alpha$, which is a set of $M$ because each $W_\alpha$ is a set of cardinality at most $\lambda$ by [F2] and $\mu\le\lambda$; by Replacement in $M$ [F1] the class function sending each such name to the least infinite regular cardinal of its stage is bounded on this set, so there is an infinite regular $\gamma$ with $S\subseteq M^{P^{\le\gamma}}$; then $\{\sigma_G:\sigma\in S\}=\{\sigma_{G^{\le\gamma}}:\sigma\in S\}\in M[G^{\le\gamma}]$ by the stage valuation of [F3] and Replacement in the set extension [F7], which is the last clause. [F1, F2, F3, F7, step 4.1]

6.1 Steps 2.1, 3.1, 4.1 and 5.1 establish (a), (b) and (c): a class-generic extension contains one tail condition and ground head antichains deciding the formula on every tuple, the truth values are computed in the head stage, and the witness names lie in one ground stage; this is the statement. ∎ [step 2.1, step 3.1, step 4.1, step 5.1]
