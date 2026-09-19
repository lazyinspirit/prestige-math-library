---
id: thm-character-space-of-the-unitization-is-one-point-compactification
kind: theorem
title: Character space of the unitization is one-point compactification
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-minimal-c-star-unitization, def-algebraic-unitization-of-a-star-algebra, thm-maximal-ideal-space-is-compact-hausdorff, thm-characters-on-a-unital-banach-algebra-are-continuous, def-character-and-maximal-ideal-space, thm-one-point-compactification-properties, def-one-point-compactification, thm-locally-compact-hausdorff-basics, thm-commutative-gelfand-naimark, thm-compactness-under-continuous-maps, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Exercise 3.1.15 and Lemma 3.1.20, printed pp. 60–62"
      url: "https://arxiv.org/pdf/1211.3404"
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — §5.5.1, printed pp. 258–267"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be a commutative
C\*-algebra that is genuinely nonunital and nonzero, let $A^+$ be its minimal
unitization ([[thm-minimal-c-star-unitization]],
[[def-algebraic-unitization-of-a-star-algebra]]), and let $\chi_\infty$ be the
quotient character $\chi_\infty(a,\lambda) = \lambda$. Then

$$\Delta(A^+) \;=\; \{\,\tilde\varphi : \varphi \in \Delta(A)\,\} \;\cup\; \{\chi_\infty\}, \qquad \tilde\varphi(a,\lambda) = \varphi(a) + \lambda,$$

and the map $\varphi \mapsto \tilde\varphi$ is a homeomorphism of $\Delta(A)$
onto $\Delta(A^+) \setminus \{\chi_\infty\}$; moreover
$\Delta(A^+)$ with its weak-star topology is the **one-point compactification**
of $\Delta(A)$ ([[def-one-point-compactification]]). For the zero algebra
$A = \{0\}$ one has $A^+ = \mathbb C$ and $\Delta(A^+) = \{\mathrm{id}\}$ while
$\Delta(A) = \varnothing$, so $\Delta(A^+) = \varnothing^+$; the empty case is
consistent with the same formula.

## Facts & Assumptions

**Given:** The Axiom of Choice, a nonzero genuinely nonunital commutative C\*-algebra $A$, its minimal unitization $A^+$, and the quotient character $\chi_\infty$.

[L1] $A^+$ is a unital C\*-algebra with norm extending that of $A$, and $A$ is a closed two-sided $\ast$-ideal of codimension one ([[thm-minimal-c-star-unitization]]).

[L2] $\Delta(A^+)$ is a nonempty compact Hausdorff space in the weak-star topology, which on characters agrees with the pointwise-evaluation topology ([[thm-maximal-ideal-space-is-compact-hausdorff]], [[def-axiom-of-choice]]).

[L3] Characters of a unital Banach algebra are unital and contractive, and the extension $\tilde\varphi(a,\lambda) = \varphi(a)+\lambda$ of a character $\varphi$ of $A$ is a character of $A^+$: it is complex-linear, multiplicative by the product formula of the unitization, nonzero, and $\chi_\infty$ is a character as well ([[thm-characters-on-a-unital-banach-algebra-are-continuous]], [[def-character-and-maximal-ideal-space]], [[def-algebraic-unitization-of-a-star-algebra]]).

[L4] $\Delta(A^+)$ and $\Delta(A) \cup \{\chi_\infty\}$ are related by the bijection $\Psi$ of [step 1.1] below; the unital Gelfand–Naimark theorem gives $A^+ \cong C(\Delta(A^+))$, under which $A$ corresponds to the ideal of functions vanishing at $\chi_\infty$ ([[thm-commutative-gelfand-naimark]], [[def-axiom-of-choice]]).

[L5] The one-point compactification $X^+$ of a locally compact Hausdorff space $X$ is compact and Hausdorff and contains $X$ as an open subspace; this copy of $X$ is dense exactly when $X$ is noncompact. An open subset of a compact Hausdorff space is locally compact and Hausdorff ([[thm-one-point-compactification-properties]], [[def-one-point-compactification]], [[thm-locally-compact-hausdorff-basics]]).

[L6] A continuous bijection from a compact space onto a Hausdorff space is a homeomorphism ([[thm-compactness-under-continuous-maps]]).

## Proof

**Proof technique:** direct.

1.1 Define $\Psi : \Delta(A) \cup \{\chi_\infty\} \to \Delta(A^+)$ by $\Psi(\varphi) := \tilde\varphi$ for $\varphi \in \Delta(A)$ and $\Psi(\chi_\infty) := \chi_\infty$. This is well defined and bijective: every character $\chi$ of $A^+$ satisfies $\chi(a,\lambda) = \chi(a,0) + \lambda\chi(0,1) = \chi(a,0)+\lambda$ by linearity and $\chi(0,1) = 1$ from [L3]; if the restriction $\chi|_A$ is zero then $\chi = \chi_\infty$, and otherwise $\chi|_A$ is a nonzero multiplicative linear functional on $A$, that is, a character, and $\chi = \widetilde{\chi|_A}$; conversely the $\tilde\varphi$ and $\chi_\infty$ are characters by [L3]. [L3, algebra]

1.2 $\Psi$ is continuous at every $\varphi \in \Delta(A)$ and at $\chi_\infty$: for a basic evaluation-open set $U = \{\chi \in \Delta(A^+) : |\chi(a_i,\lambda_i) - \tilde\varphi(a_i,\lambda_i)| < \varepsilon\}$ around $\tilde\varphi$ its preimage is $\{\varphi' : |\varphi'(a_i)-\varphi(a_i)| < \varepsilon\}$, open in $\Delta(A)$; for a basic evaluation-open set $U$ around $\chi_\infty$ with data $(a_i,\lambda_i)$ one has $\chi_\infty(a_i,\lambda_i) = \lambda_i$, so $\Psi^{-1}(U) = \{\chi_\infty\} \cup \{\varphi : |\varphi(a_i)| < \varepsilon \text{ for all } i\}$, and its complement in $\Delta(A) \cup \{\chi_\infty\}$ corresponds to the set $K := \bigcup_i \{\varphi : |\varphi(a_i)| \ge \varepsilon\}$, a finite union of closed subsets of the compact space $\Delta(A^+)$ (each $\{\chi : |\chi(a_i,0)| \ge \varepsilon\}$ is closed and does not contain $\chi_\infty$, since $\chi_\infty(a_i,0) = 0$), hence compact and contained in $\Delta(A)$, so $\Psi^{-1}(U)$ is a neighbourhood of $\chi_\infty$ in the one-point compactification topology. [1.1, L2, L5, algebra]

1.3 $\Delta(A) = \Delta(A^+) \setminus \{\chi_\infty\}$ is an open subset of the compact Hausdorff space $\Delta(A^+)$ (the complement of a point), hence locally compact and Hausdorff by [L5]; and it is dense in $\Delta(A^+)$: if $\chi_\infty$ were isolated, then under the isomorphism $A^+ \cong C(\Delta(A^+))$ of [L4] the ideal $A \cong \{f : f(\chi_\infty) = 0\}$ would contain the function that is $1$ off $\chi_\infty$ and $0$ at $\chi_\infty$, which is then an identity for that ideal, making $A$ unital, contrary to the hypothesis; so $\chi_\infty$ is not isolated, which for a compact Hausdorff space means precisely that the complement is dense. [1.1, L2, L4, L5, algebra]

2.1 The space $\Delta(A) \cup \{\chi_\infty\}$ with the topology that makes $\{\chi_\infty\}$ the point at infinity of the one-point compactification of $\Delta(A)$ is compact and Hausdorff by [L5] (using local compactness and Hausdorffness of $\Delta(A)$ from [step 1.3]), and $\Psi$ is a continuous bijection from it onto the Hausdorff space $\Delta(A^+)$ by [step 1.1] and [step 1.2], hence a homeomorphism by [L6]; here A^+ is a unital C*-algebra with A as a closed ideal of codimension one by [L1]. [step 1.1, step 1.2, step 1.3, L1, L2, L5, L6]

3.1 By [step 2.1] $\Delta(A^+)$ is homeomorphic to the one-point compactification of $\Delta(A)$ and equals $\{\tilde\varphi : \varphi \in \Delta(A)\} \cup \{\chi_\infty\}$, with the identification of $\Delta(A)$ as the open dense subspace obtained by deleting $\chi_\infty$; the zero algebra case is the separate convention of the statement. [step 2.1] ∎

## Remarks

- **Genuine nonunitality is used twice**: to build the minimal unitization and to ensure $\chi_\infty$ is not isolated in [step 2.1].
- **The topology at infinity is the weak-star topology.** The compactness argument in [step 1.2] uses only that characters are pointwise limits of characters and that the character space of $A^+$ is compact.
