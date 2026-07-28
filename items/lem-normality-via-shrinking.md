---
id: lem-normality-via-shrinking
kind: lemma
title: "A space is normal if and only if every closed $A$ inside an open $U$ admits an open $V$ with $A \\subseteq V \\subseteq \\overline{V} \\subseteq U$"
status: published
origin: session
deps: [def-normal-and-t4-spaces, def-interior-closure-boundary-top,
       thm-closure-characterisation-top, def-topological-space]
justified_by: []
aliases: [lem-shrinking-lemma-normal]
landmark: true
short: "normality by shrinking"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "J. Munkres, Topology, 2nd ed., §33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with
closures as in [[def-interior-closure-boundary-top]]. The following two
conditions are equivalent.

- **(a)** $X$ is normal ([[def-normal-and-t4-spaces]]).
- **(b)** For every closed $A \subseteq X$ and every open $U$ with
  $A \subseteq U$ there is an open $V$ with
  $$A \subseteq V \subseteq \overline{V} \subseteq U .$$

In particular, in a normal space any two disjoint closed sets $A$ and $D$ admit
an open $V \supseteq A$ with $\overline{V} \cap D = \varnothing$: apply (b) to
$A$ and the open set $X \setminus D$. That corollary is the form in which
normality is used later on this page.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$, a closed set $A$, an open set $U$ with $A \subseteq U$, and disjoint closed sets $A_0, B_0$.

[A1] $X$ is normal when disjoint closed sets admit disjoint open supersets ([[def-normal-and-t4-spaces]]).

[L1] $\overline{V}$ is the smallest closed superset of $V$: it is closed, contains $V$, and is contained in every closed set containing $V$ ([[thm-closure-characterisation-top]], claim 2, [[def-interior-closure-boundary-top]]).

[L2] A set is closed exactly when its complement is open, and complementation reverses inclusion ([[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 Assume (a), and let $A$ be closed with $A \subseteq U$ and $U$ open; then $B := X \setminus U$ is closed by [L2] and $A \cap B = \varnothing$, so [A1] gives disjoint open $V \supseteq A$ and $W \supseteq B$. [A1, L2, assume-hyp]

1.2 Assume (b), and let $A_0, B_0$ be disjoint closed sets; then $U_0 := X \setminus B_0$ is open by [L2] and contains $A_0$, so (b) gives an open $V_0$ with $A_0 \subseteq V_0 \subseteq \overline{V_0} \subseteq U_0$. [L2, assume-hyp]

2.1 Under step 1.1: $V \subseteq X \setminus W$, since $V \cap W = \varnothing$, and $X \setminus W$ is closed by [L2], so $\overline{V} \subseteq X \setminus W$ by [L1]; and $X \setminus W \subseteq X \setminus B = U$ because $B \subseteq W$ and complementation reverses inclusion. [step 1.1, L1, L2]

2.2 Under step 1.2: put $W_0 := X \setminus \overline{V_0}$, which is open by [L1] and [L2]; then $V_0 \cap W_0 = \varnothing$ because $V_0 \subseteq \overline{V_0}$, and $B_0 = X \setminus U_0 \subseteq X \setminus \overline{V_0} = W_0$ because $\overline{V_0} \subseteq U_0$. [step 1.2, L1, L2]

3.1 Step 2.1 gives $A \subseteq V \subseteq \overline{V} \subseteq U$ with $V$ open, so (a) implies (b). [step 2.1]

3.2 Step 2.2 gives disjoint open $V_0 \supseteq A_0$ and $W_0 \supseteq B_0$, so (b) implies (a) by [A1]. [step 2.2, A1]

4.1 Steps 3.1 and 3.2 make (a) and (b) equivalent. [step 3.1, step 3.2]

5.1 For the final assertion, let $A$ and $D$ be disjoint closed sets in a normal $X$; then $X \setminus D$ is open by [L2] and contains $A$, so (b) gives an open $V$ with $A \subseteq V \subseteq \overline{V} \subseteq X \setminus D$, whence $\overline{V} \cap D = \varnothing$. [step 4.1, L2] ∎

## Remarks

- **The name.** Statement (b) is the *shrinking* form: an open set containing a closed set can be shrunk so that even its closure stays inside. It is the exact analogue for closed sets of the clause of [[lem-regularity-via-closed-neighbourhoods]] that shrinks an open set around a point.

- **Iterating (b) is what proves Urysohn's lemma**, by indexing a family of open sets by the dyadic rationals; that iteration is a dependent choice and is not performed on this page ([[rem-separation-axiom-conventions]]). The single application above is choice free.

- **Nothing here uses a separation axiom.** In particular $A$ and $D$ may be empty, and the corollary reads correctly in that case with $V = \varnothing$ or $V = X$ respectively.
