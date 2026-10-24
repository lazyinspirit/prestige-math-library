---
id: thm-kuratowski-closure-axioms
kind: theorem
title: "Kuratowski: operators satisfying $c(\\varnothing) = \\varnothing$, $A \\subseteq c(A)$, $c(c(A)) = c(A)$ and $c(A \\cup B) = c(A) \\cup c(B)$ correspond bijectively to topologies"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-interior-closure-boundary-top, lem-interior-closure-boundary-identities, def-topological-space, def-injection-surjection-bijection]
justified_by: []
forward_refs: [ex-kuratowski-fourteen-sets]
aliases: [thm-kuratowski-axioms]
landmark: true
short: "Kuratowski closure axioms"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-03
    scope: published-audit-targeted
    context_sha256: 794f157469f02c762cfc550fac780d4156b0977108b14cdf6396ef7f539b4d15
    item_sha256: e1df0c28269b04a2d7917a327eeee1869c2d8fa889a9a6e3009daae6232daae4
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Kuratowski closure axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Kuratowski_closure_axioms"
    - title: "Closure operator (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_operator"
pipeline_run: null
---

## Statement

Let $X$ be a set. A **Kuratowski closure operator** on $X$ is a function
$c : \mathcal{P}(X) \to \mathcal{P}(X)$ such that, for all $A, B \subseteq X$:

- **(K1)** $c(\varnothing) = \varnothing$;
- **(K2)** $A \subseteq c(A)$;
- **(K3)** $c(c(A)) = c(A)$;
- **(K4)** $c(A \cup B) = c(A) \cup c(B)$.

Then:

1. For every topology $\mathcal{T}$ on $X$ the operator
   $c_{\mathcal{T}} : A \mapsto \overline{A}$, the closure taken in
   $(X,\mathcal{T})$ ([[def-interior-closure-boundary-top]]), is a Kuratowski
   closure operator on $X$.
2. For every Kuratowski closure operator $c$ on $X$ the family
   $\mathcal{C}_c := \{\, A \subseteq X : c(A) = A \,\}$ of its fixed points
   satisfies the closed-set axioms (C1), (C2), (C3) of
   [[def-topological-space]], so
   $\mathcal{T}_c := \{\, X \setminus A : A \in \mathcal{C}_c \,\}$ is a topology
   on $X$ whose closed sets are exactly the members of $\mathcal{C}_c$; and the
   closure operator of $\mathcal{T}_c$ is $c$ itself.
3. The assignments $\mathcal{T} \mapsto c_{\mathcal{T}}$ and
   $c \mapsto \mathcal{T}_c$ are mutually inverse, hence bijections
   ([[def-injection-surjection-bijection]]) between the set of topologies on $X$
   and the set of Kuratowski closure operators on $X$.

So a topology may be specified by naming its closure operator, and the four
axioms above are exactly the conditions under which such a specification is
legitimate. Note that monotonicity is **not** among the axioms: it is a
consequence of (K4), derived in the proof.

## Facts & Assumptions

**Given:** A set $X$; a topology $\mathcal{T}$ on $X$; a Kuratowski closure operator $c$ on $X$; subsets $A, B \subseteq X$ and a nonempty family $\mathcal{D} \subseteq \mathcal{C}_c$.

[A1] $\overline{A}$ is closed, contains $A$, and is contained in every closed superset of $A$; a set is closed if and only if it equals its own closure; $\varnothing$ and $X$ are closed ([[def-interior-closure-boundary-top]], [[def-topological-space]]).

[A2] $\overline{A \cup B} = \overline{A} \cup \overline{B}$ ([[lem-interior-closure-boundary-identities]], claim 2).

[L1] Closed-set axiomatisation: a family $\mathcal{C} \subseteq \mathcal{P}(X)$ with (C1) $\varnothing, X \in \mathcal{C}$, (C2) $\bigcap \mathcal{D} \in \mathcal{C}$ for nonempty $\mathcal{D} \subseteq \mathcal{C}$ and (C3) $C \cup D \in \mathcal{C}$ is the family of closed sets of exactly one topology on $X$, namely $\{\, X \setminus C : C \in \mathcal{C} \,\}$; and the closed sets of a topology satisfy (C1), (C2), (C3) ([[def-topological-space]]).

[L2] Two functions that are mutually inverse are bijections ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1: $\overline{\varnothing} = \varnothing$ because $\varnothing$ is closed, which is (K1); $A \subseteq \overline{A}$ is (K2); $\overline{\overline{A}} = \overline{A}$ because $\overline{A}$ is closed, which is (K3); and (K4) is [A2]. [A1, A2]

1.2 $c$ is monotone: if $A \subseteq B$ then $A \cup B = B$, so (K4) gives $c(B) = c(A \cup B) = c(A) \cup c(B) \supseteq c(A)$. [given]

1.3 $\varnothing \in \mathcal{C}_c$ by (K1), and $X \in \mathcal{C}_c$ because (K2) gives $X \subseteq c(X)$ while $c(X) \subseteq X$ holds since $c$ takes values in $\mathcal{P}(X)$; so (C1) holds for $\mathcal{C}_c$. [given]

1.4 If $A, B \in \mathcal{C}_c$ then $c(A \cup B) = c(A) \cup c(B) = A \cup B$ by (K4), so $A \cup B \in \mathcal{C}_c$ and (C3) holds. [given]

2.1 Let $\mathcal{D} \subseteq \mathcal{C}_c$ be nonempty and put $D := \bigcap \mathcal{D}$; for each $A \in \mathcal{D}$ we have $D \subseteq A$, so $c(D) \subseteq c(A) = A$ by step 1.2, whence $c(D) \subseteq D$; with (K2) this gives $c(D) = D$, so $D \in \mathcal{C}_c$ and (C2) holds. [step 1.2, given]

2.2 Conversely, starting from a topology $\mathcal{T}$: the fixed points of $c_{\mathcal{T}}$ are exactly the closed sets of $\mathcal{T}$ by [A1], so $\mathcal{C}_{c_{\mathcal{T}}}$ is the family of closed sets of $\mathcal{T}$ and $\mathcal{T}_{c_{\mathcal{T}}} = \mathcal{T}$ by the uniqueness in [L1]. [step 1.1, A1, L1]

3.1 By steps 1.3, 1.4 and 2.1 the family $\mathcal{C}_c$ satisfies (C1), (C2) and (C3), so $\mathcal{T}_c = \{\, X \setminus A : A \in \mathcal{C}_c \,\}$ is a topology on $X$ whose closed sets are exactly the members of $\mathcal{C}_c$. [step 1.3, step 1.4, step 2.1, L1]

4.1 The closure operator of $\mathcal{T}_c$ is $c$: for $A \subseteq X$ the set $c(A)$ is a fixed point of $c$ by (K3), hence closed in $\mathcal{T}_c$ by step 3.1, and it contains $A$ by (K2), so the closure of $A$ in $\mathcal{T}_c$ is contained in $c(A)$; conversely that closure is a closed set $F \supseteq A$, so $F \in \mathcal{C}_c$ and step 1.2 gives $c(A) \subseteq c(F) = F$. Hence the two sets are equal, and claim 2 is proved. [step 1.2, step 3.1, A1, given]

5.1 Steps 4.1 and 2.2 say that $c \mapsto \mathcal{T}_c$ and $\mathcal{T} \mapsto c_{\mathcal{T}}$ compose to the identity in both orders, so each is a bijection between the two sets, which is claim 3; claim 1 is step 1.1 and claim 2 is step 4.1. [step 1.1, step 4.1, step 2.2, L2] ∎

## Remarks

- **(K3) is what makes $c$ recoverable as the closure operator of its fixed-point topology.** Dropping it leaves an operator whose fixed points still satisfy (C1), (C2) and (C3) — steps 1.3, 1.4 and 2.1 do not use it — but the closure operator of the resulting topology is then only the smallest fixed point above $A$, which need not be $c(A)$. It is step 4.1 that spends (K3).

- **(K1) is genuinely independent of the others.** The operator $c(A) := X$ for all $A$, on a nonempty $X$, satisfies (K2), (K3) and (K4) and fails (K1); its fixed points are $\{X\}$ alone, which is not the family of closed sets of any topology, since $\varnothing$ is missing.

- **The correspondence is order reversing in the natural sense.** A finer topology has more closed sets, hence more fixed points, hence a smaller closure operator pointwise; the discrete topology corresponds to $c = \mathrm{id}$ and the indiscrete topology to the operator sending $\varnothing$ to $\varnothing$ and every nonempty set to $X$.

- **How many sets can be produced by closure and complement together** is a separate question with a finite answer, fourteen, worked out on the companion page ([[ex-kuratowski-fourteen-sets]]).
