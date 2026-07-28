---
id: cex-tietze-fails-in-a-t1-space-that-is-not-normal
kind: counterexample
title: "In the $K$-topology on $\\mathbb{R}$ the closed set $K \\cup \\{0\\}$ carries a continuous two-valued function with no continuous extension"
status: draft
origin: session
deps: [thm-tietze-extension-theorem, lem-the-k-topology-is-hausdorff-and-not-regular,
       def-normal-and-t4-spaces, def-regular-and-t3-spaces, def-t0-and-t1-spaces,
       thm-t4-implies-t3, def-subspace-topology-top, def-continuous-map-top,
       thm-continuity-characterisations-top, def-interval,
       thm-t1-iff-singletons-are-closed]
justified_by: []
aliases: []
landmark: false
short: "Tietze fails in the $K$-topology"
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tietze extension theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tietze_extension_theorem"
    - title: "K-topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/K-topology"
pipeline_run: null
---

## Statement refuted

The subspace $A := K \cup \{0\} \subseteq (\mathbb{R}, \mathcal{T}_K)$ of the
$K$-topology ([[lem-the-k-topology-is-hausdorff-and-not-regular]]) is closed,
and the continuous $k : A \to [0,1]$ with $k \equiv 0$ on $K$ and $k(0) := 1$
extends to a continuous $F : \mathbb{R} \to [0,1]$.

This is false, and the failure is not a failure of closedness: $A$ **is**
closed. What fails is normality of the ambient space — $(\mathbb{R},
\mathcal{T}_K)$ is $T_1$ but not normal — in contrast with the companion
witness on this page that instead varies the closedness hypothesis of
Tietze's theorem while keeping the ambient space normal.

## Facts & Assumptions

**Given:** $(\mathbb{R},\mathcal{T}_K)$ the $K$-topology with basis $\mathcal{B}_K = \{(a,b) : a<b\} \cup \{(a,b)\setminus K : a<b\}$ and $K = \{1/(n+1) : n \in \mathbb{N}\}$ ([[lem-the-k-topology-is-hausdorff-and-not-regular]]); $A := K \cup \{0\}$; and $k : A \to [0,1]$, $k \equiv 0$ on $K$, $k(0) := 1$.

[L1] $(\mathbb{R},\mathcal{T}_K)$ is $T_1$; $K$ is closed in $\mathcal{T}_K$; and the point $0$ and the closed set $K$ admit **no** disjoint open neighbourhoods, i.e. $(\mathbb{R},\mathcal{T}_K)$ is not regular ([[lem-the-k-topology-is-hausdorff-and-not-regular]], clauses 2–4).

[L2] Every singleton is closed in a $T_1$ space ([[thm-t1-iff-singletons-are-closed]]).

[L3] For $a<b$, $(a,b)\setminus K \in \mathcal{B}_K$, hence open in $\mathcal{T}_K$ ([[lem-the-k-topology-is-hausdorff-and-not-regular]]).

[L4] Preimages of open sets under a continuous map are open ([[thm-continuity-characterisations-top]], clause (b)).

## Counterexample

**Proof technique:** contradiction.

1.1 $0 \notin K$: every $1/(n+1)$, $n \in \mathbb{N}$, is positive, and $0$ is not. By [L2] (using [L1], $T_1$), $\{0\}$ is closed; with $K$ closed by [L1], $A = K \cup \{0\}$ is closed, a union of two closed sets. [given, L1, L2, algebra]

1.2 $\{0\}$ is open in the subspace $A$: $(-1,1)\setminus K$ is open in $\mathcal{T}_K$ by [L3], and its trace on $A$ is $\big((-1,1)\setminus K\big) \cap (K \cup \{0\}) = \{0\}$, since it excludes every point of $K$ and contains $0$. [given, L3, algebra]

1.3 Suppose, toward a contradiction, that a continuous $F : \mathbb{R} \to [0,1]$ exists with $F|_A = k$. [assume-contra]

2.1 $K$ is open in the subspace $A$: $\mathbb{R} \setminus \{0\}$ is open in $\mathcal{T}_K$ by step 1.1 ($\{0\}$ closed), and its trace on $A$ is $(\mathbb{R}\setminus\{0\}) \cap (K \cup \{0\}) = K$, since $0 \notin K$. [step 1.1, algebra]

2.2 Under step 1.3: $W_1 := F^{-1}\big[(-\tfrac12,\tfrac12)\big]$ and $W_2 := F^{-1}\big[(\tfrac12,\tfrac32)\big]$ are open in $\mathcal{T}_K$ by [L4]. $K \subseteq W_1$, since $F \equiv k \equiv 0 \in (-\tfrac12,\tfrac12)$ on $K \subseteq A$; $0 \in W_2$, since $F(0) = k(0) = 1 \in (\tfrac12,\tfrac32)$; and $W_1 \cap W_2 = \varnothing$, the target intervals $(-\tfrac12,\tfrac12)$ and $(\tfrac12,\tfrac32)$ being disjoint. [step 1.3, L4, algebra]

3.1 $k$ is continuous on $A$: for open $V \subseteq [0,1]$, $k^{-1}[V]$ is $A$ if $0,1 \in V$; $K$ if $0 \in V, 1 \notin V$ (open in $A$ by step 2.1); $\{0\}$ if $1 \in V, 0 \notin V$ (open in $A$ by step 1.2); or $\varnothing$ otherwise; in every case open in $A$. [step 1.2, step 2.1]

4.1 Step 2.2 exhibits disjoint open $W_2 \ni 0$ and $W_1 \supseteq K$, contradicting [L1]: the point $0$ and the closed set $K$ admit no disjoint open neighbourhoods. [step 2.2, L1, discharge-contradiction] ∎

## Remarks

- **$(\mathbb{R},\mathcal{T}_K)$ is not normal, and this is why Tietze's theorem does not apply here.** It is $T_1$ (step 1.1's citation of [L1]) but not regular (used directly in step 4.1); by [[thm-t4-implies-t3]], a normal $T_1$ space is regular, so a $T_1$ space that is not regular cannot be normal. [[thm-tietze-extension-theorem]] requires normality of the ambient space, and that hypothesis is exactly what fails.

- **Closedness of $A$ is not in question.** $A$ is closed by step 1.1, and $k$ is continuous on $A$ by step 3.1; every hypothesis of [[thm-tietze-extension-theorem]] except normality of $\mathbb{R}$ with the $\mathcal{T}_K$ topology holds here.
