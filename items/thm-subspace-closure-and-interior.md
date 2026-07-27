---
id: thm-subspace-closure-and-interior
kind: theorem
title: "For $A \\subseteq S \\subseteq X$ the closure of $A$ in $S$ is $\\overline{A}^{X} \\cap S$, while the interior only contains $\\operatorname{int}^{X}(A) \\cap S$, with equality when $S$ is open; and a dense subset of $X$ traces to a dense subset of every open $S$"
status: published
origin: session
deps: [def-subspace-topology-top, def-interior-closure-boundary-top, def-dense-top,
       def-standard-topologies, def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "closure and interior in a subspace"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Subspace topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subspace_topology"
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), let
$S \subseteq X$ carry the subspace topology $\mathcal{T}_S$
([[def-subspace-topology-top]]) and let $A \subseteq S$. Write $\overline{A}$ and
$\operatorname{int}(A)$ for the closure and the interior of $A$ in $X$, and
$\operatorname{cl}_S(A)$ and $\operatorname{int}_S(A)$ for those taken in the
space $(S, \mathcal{T}_S)$ ([[def-interior-closure-boundary-top]]). Then:

1. **Closure traces exactly.**
   $$\operatorname{cl}_S(A) \;=\; \overline{A} \cap S .$$
2. **Interior traces only one way.** $\operatorname{int}(A) \subseteq S$, so
   $\operatorname{int}(A) \cap S = \operatorname{int}(A)$, and
   $$\operatorname{int}(A) \;\subseteq\; \operatorname{int}_S(A) ,$$
   an inclusion that may be strict.
3. **Equality for an open subspace.** If $S \in \mathcal{T}$ then
   $\operatorname{int}_S(A) = \operatorname{int}(A)$.
4. **Density traces to open subspaces only.** If $D \subseteq X$ is dense in $X$
   ([[def-dense-top]]) and $S \in \mathcal{T}$, then $D \cap S$ is dense in
   $(S, \mathcal{T}_S)$. Without the hypothesis $S \in \mathcal{T}$ this fails.

Both failures are witnessed inside the proof, in Sierpinski space
([[def-standard-topologies]]): the unqualified forms of claims 2 and 3 and of
claim 4 are false, and the counterexamples are two lines each rather than
deferred.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$, a subset $S \subseteq X$ with its subspace topology $\mathcal{T}_S = \{\, U \cap S : U \in \mathcal{T} \,\}$, and a subset $A \subseteq S$. Also Sierpinski space $E = \{a,b\}$ with $a \ne b$ and $\mathcal{T}_E = \{\varnothing, \{b\}, E\}$.

[A1] $\mathcal{T}_S$ is a topology on $S$, and $C \subseteq S$ is closed in $S$ if and only if $C = F \cap S$ for some closed $F \subseteq X$ ([[def-subspace-topology-top]]).

[A2] If $S \in \mathcal{T}$ then a subset of $S$ is open in $S$ if and only if it is open in $X$ ([[def-subspace-topology-top]]).

[L1] $\operatorname{int}(A)$ is the largest open subset of $A$ and $\overline{A}$ is the smallest closed superset of $A$; both are taken in whichever space is named ([[def-interior-closure-boundary-top]]).

[L2] $D$ is dense in a space exactly when $D$ meets every nonempty open subset of that space ([[def-dense-top]]).

[L3] In Sierpinski space $E$ the open sets are $\varnothing$, $\{b\}$ and $E$, so the closed sets are $E$, $\{a\}$ and $\varnothing$ ([[def-standard-topologies]], [[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 $\overline{A} \cap S$ is closed in $S$ by [A1], since $\overline{A}$ is closed in $X$, and it contains $A$, since $A \subseteq \overline{A}$ and $A \subseteq S$. [A1, L1]

1.2 $\operatorname{cl}_S(A) = F \cap S$ for some closed $F \subseteq X$, by [A1] applied to the set $\operatorname{cl}_S(A)$, which is closed in $S$; and $A \subseteq \operatorname{cl}_S(A) = F \cap S \subseteq F$. [A1, L1]

1.3 $\operatorname{int}(A)$ is open in $X$ and satisfies $\operatorname{int}(A) \subseteq A \subseteq S$, so $\operatorname{int}(A) = \operatorname{int}(A) \cap S$ is a trace of an open set of $X$ and hence lies in $\mathcal{T}_S$. [given, L1]

1.4 In $E$, put $S_0 := \{a\}$, $A_0 := \{a\}$ and $D_0 := \{b\}$. Then $\operatorname{int}_{S_0}(A_0) = S_0 = \{a\}$, since $S_0$ is open in $S_0$ and $S_0 \subseteq A_0$; and the interior of $A_0$ in $E$ is $\varnothing$, since by [L3] the only open subset of $\{a\}$ in $E$ is $\varnothing$. So the inclusion of claim 2 is strict for this pair. [L1, L3]

1.5 Assume $S \in \mathcal{T}$. Then $\operatorname{int}_S(A)$, being open in $S$, is open in $X$ by [A2], and it is contained in $A$; so $\operatorname{int}_S(A) \subseteq \operatorname{int}(A)$ by [L1]. [A2, L1]

1.6 Assume $S \in \mathcal{T}$ and that $D$ is dense in $X$, and let $W$ be a nonempty open subset of $S$. By [A2] the set $W$ is open in $X$, so $W \cap D \ne \varnothing$ by [L2]; and $W \subseteq S$ gives $W \cap D = W \cap (D \cap S)$. [A2, L2]

2.1 In $E$ with the sets of step 1.4: the closure of $D_0$ in $E$ is $E$, since by [L3] the only closed superset of $\{b\}$ is $E$, so $D_0$ is dense in $E$; and $D_0 \cap S_0 = \varnothing$, which is not dense in the nonempty space $S_0$, because $S_0$ is a nonempty open subset of $S_0$ that $\varnothing$ does not meet. [L1, L2, L3]

2.2 $\operatorname{cl}_S(A) \subseteq \overline{A} \cap S$: by step 1.1 the set $\overline{A} \cap S$ is a closed subset of $S$ containing $A$, and $\operatorname{cl}_S(A)$ is the smallest such. [step 1.1, L1]

2.3 $\overline{A} \cap S \subseteq \operatorname{cl}_S(A)$: with $F$ as in step 1.2 one has $A \subseteq F$ with $F$ closed in $X$, so $\overline{A} \subseteq F$ by [L1], whence $\overline{A} \cap S \subseteq F \cap S = \operatorname{cl}_S(A)$. [step 1.2, L1]

2.4 $\operatorname{int}(A) \subseteq \operatorname{int}_S(A)$: by step 1.3 the set $\operatorname{int}(A)$ is open in $S$ and contained in $A$, and $\operatorname{int}_S(A)$ is the largest such. [step 1.3, L1]

3.1 Steps 2.2 and 2.3 give $\operatorname{cl}_S(A) = \overline{A} \cap S$, which is claim 1. [step 2.2, step 2.3]

3.2 Step 1.3 gives $\operatorname{int}(A) \cap S = \operatorname{int}(A)$, step 2.4 gives the inclusion, and step 1.4 exhibits a case where the inclusion is strict; this is claim 2. [step 1.3, step 2.4, step 1.4]

3.3 Steps 2.4 and 1.5 give $\operatorname{int}_S(A) = \operatorname{int}(A)$ when $S \in \mathcal{T}$, which is claim 3. [step 2.4, step 1.5]

4.1 By step 1.6 the set $D \cap S$ meets every nonempty open subset of $S$, hence is dense in $(S,\mathcal{T}_S)$ by [L2]; and step 2.1 shows that the conclusion fails for a subspace that is not open. This is claim 4, and with steps 3.1, 3.2 and 3.3 all four claims are proved. [step 1.6, step 2.1, step 3.1, step 3.2, step 3.3, L2] ∎

## Remarks

- **The same two failures occur in $\mathbb{R}$, and there they are the familiar ones.** With the usual topology, $S = [0,1]$ and $A = [0,1]$ give $\operatorname{int}_S(A) = [0,1]$ while $\operatorname{int}(A) = (0,1)$; and $\mathbb{Q}$ is dense in $\mathbb{R}$ while its trace on the subspace of irrationals is empty, so a dense set need not trace to a dense set of a subspace that is not open. Sierpinski space is used in the proof only because it needs no real-number machinery.

- **Why closure behaves better than interior.** Claim 1 holds for every $S$, with no hypothesis, because the closed sets of a subspace are exactly the traces of the closed sets and tracing preserves the "smallest superset" that defines a closure. The interior is a *largest subset*, and tracing does not preserve that: a set can be open in $S$ without being the trace of any open set of $X$ that is contained in $A$, which is exactly what step 1.4 exhibits.

- **Claim 4 is what makes "has a countable dense subset" behave the way it does.** The property passes to open subspaces by claim 4, and it does not pass to arbitrary subspaces; the witness for the failure is worked on the companion page, where an uncountable discrete subspace is exhibited inside a space with a countable dense subset.
