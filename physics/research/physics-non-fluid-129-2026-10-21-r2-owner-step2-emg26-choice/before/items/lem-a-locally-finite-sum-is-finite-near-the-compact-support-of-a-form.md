---
id: lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form
title: "Local finiteness near compact support"
kind: lemma
status: published
origin: pipeline
deps: ["def-compactly-supported-differential-form", "def-smooth-partition-of-unity-subordinate-to-an-open-cover", "lem-compactness-of-a-subspace-is-ambient"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Merry Definition 26.11 and Lemma 26.12, PDF pp.215–216"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

If $(C_i)_{i\in I}$ is a locally finite family of closed subsets of a manifold and $K$ is compact, only finitely many $C_i$ meet $K$. There is an open neighborhood of $K$ disjoint from all the other $C_i$. In particular, for a smooth partition of unity $(\rho_i)$ and $\omega\in\Omega_c^k(M)$, only finitely many $\rho_i\omega$ are nonzero.

## Facts & Assumptions

[F1] [[def-compactly-supported-differential-form]]: Let $M$ be a smooth manifold, possibly with boundary, and $k\geq0$. For $\omega\in\Omega^k(M)$ define $$\operatorname{supp}\omega=\overline{\{p\in M:\omega_p\neq0\}}^{\,M},\qquad \Omega_c^k(M)=\{\omega\in\Omega^k(M):\operatorname{supp}\omega\text{ is compact}\}.$$ The closure and compactness are in $M$, including its genuine boundary. Zero is the intrinsic zero of each exterior-power fiber, so this definition is independent of trivialization. The zero form has empty support.

[F2] [[def-smooth-partition-of-unity-subordinate-to-an-open-cover]]: Let $M$ be a smooth manifold and let $(U_i)_{i\in I}$ be an open cover of $M$. A family of smooth functions $(\phi_i)_{i\in I}$ with $\phi_i:M\to [0,1]$ is a **smooth partition of unity subordinate to** $(U_i)_{i\in I}$ when: 1. the family $(\operatorname{supp}(\phi_i))_{i\in I}$ is locally finite; 2. $\operatorname{supp}(\phi_i)\subseteq U_i$ for every $i\in I$; and 3. $\sum_i \phi_i(p)=1$ for every $p\in M$.

[F3] [[lem-compactness-of-a-subspace-is-ambient]]: Let $(X, \mathcal{T})$ be a topological space (def-topological-space), let $A \subseteq X$ and let $(A, \mathcal{T}_A)$ be the subspace (def-subspace-topology-top). Then: 1. **Compactness read in the ambient space.** $A$ is a compact subset of $X$ (def-compact-space), that is $(A, \mathcal{T}_A)$ is a compact space, if and only if for every family $\mathcal{U} \subseteq \mathcal{T}$ with $A \subseteq \bigcup \mathcal{U}$ there are $n \in \mathbb{N}$ and $U_0, \dots, U_n \in \mathcal{U}$ with $A \subseteq U_0 \cup \dots \cup U_n$, or else $A = \varnothing$. 2. **The same in indexed form.** $A$ is a compact subset of $X$ if and only if for every set $I$ and every family $(U_i)_{i \in I}$ of open subsets of $X$ with $A \subseteq \bigcup_{i \in I} U_i$ there are $n \in \mathbb{N}$ and indices $i_0, \dots, i_n \in I$ with $A \subseteq U_{i_0} \cup \dots \cup U_{i_n}$, or else $A = \varnothing$. Claim 2 is the form used by almost every later proof on this page, because a cover is usually produced by a rule that attaches an open set to each point or to each index, and a set of open sets forgets that rule. No choice principle is used anywhere below; the one place a selection is made is over a finite index set, and lem-finite-choice is a theorem of ZF.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 If $K=\varnothing$, take the empty neighborhood and empty index set. Otherwise cover $K$ by open sets $V$ each meeting only finitely many $C_i$. Ambient compactness gives a finite subcover $V_1,\ldots,V_m$. Their union $V$ meets only a finite set $J$ of indices. [given, F3]

2.1 Let $J_0=\{i:C_i\cap K\neq\varnothing\}\subseteq J$. Since each $C_i$ is closed, $V\setminus\bigcup_{i\in J\setminus J_0}C_i$ is open, contains $K$, and misses every $C_i$ for $i\notin J_0$. [step 1.1, algebra]

3.1 Apply this to $C_i=\operatorname{supp}\rho_i$ and $K=\operatorname{supp}\omega$. Outside $K$, $\omega=0$; if $i\notin J_0$, the two supports are disjoint, so $\rho_i\omega=0$. The argument includes a singleton support and the zero form. [F1, F2, step 2.1] ∎
