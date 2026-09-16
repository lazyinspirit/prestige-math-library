---
id: thm-locally-compact-gelfand-duality
kind: theorem
title: Locally compact Gelfand duality
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-c-star-algebra, def-approximate-unit-and-proper-c-star-morphism, thm-nonunital-commutative-gelfand-naimark, thm-every-commutative-c-star-algebra-has-an-approximate-unit, thm-commutative-gelfand-duality, thm-minimal-c-star-unitization, thm-character-space-of-the-unitization-is-one-point-compactification, thm-characters-on-a-unital-banach-algebra-are-continuous, def-compact-support-c-c-and-c-zero-on-an-lch-space, thm-one-point-compactification-properties, lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set, def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Theorem 3.3.5 and Corollary 3.3.6, printed pp. 80–81; Propositions 3.1.40–3.1.42, printed pp. 66–68"
      url: "https://arxiv.org/pdf/1211.3404"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\mathsf{LCH}$ be the
category of locally compact Hausdorff spaces with **proper** continuous maps
([[def-approximate-unit-and-proper-c-star-morphism]]) and let
$\mathsf{cC}^*$ be the category of commutative complex C\*-algebras
([[def-c-star-algebra]]) with **bounded proper star-homomorphisms**, where
properness is defined through approximate units as in
[[def-approximate-unit-and-proper-c-star-morphism]]. Then

$$X \longmapsto C_0(X), \qquad A \longmapsto \Delta(A),$$

together with the pullback $g \mapsto g^*$, $g^*(f) = f \circ g$, on proper
continuous maps and the transpose $\varphi \mapsto \varphi^*$,
$\varphi^*(\psi) = \psi \circ \varphi$, on proper star-homomorphisms, define a
**contravariant equivalence of categories**. The identifications of objects are
the isometric $\ast$-isomorphisms $\Gamma : A \to C_0(\Delta(A))$ of
[[thm-nonunital-commutative-gelfand-naimark]] and the evaluation
homeomorphisms $\Delta(C_0(X)) \cong X$ of [step 1.6]; the empty space
$\varnothing$ corresponds to the zero algebra $\{0\}$, with $\Delta(\{0\}) =
\varnothing$ and $C_0(\varnothing) = \{0\}$. The compact case is the separate
statement [[thm-commutative-gelfand-duality]], whose arrows are unital
$\ast$-homomorphisms; a unital algebra carries the constant approximate unit and
a proper morphism out of it is automatically unital at the target's approximate
unit level, so the two statements agree on compact spaces.

## Facts & Assumptions

**Given:** The Axiom of Choice, the categories $\mathsf{LCH}$ and $\mathsf{cC}^*$, and the assignments above.

[L1] A bounded star-homomorphism is a bounded complex-linear multiplicative involution-preserving map, with no unit condition; characters of a commutative C\*-algebra satisfy $|\psi(b)| \le \|b\|$ and $\psi(b^*) = \overline{\psi(b)}$ ([[def-c-star-algebra]], [[thm-characters-on-a-unital-banach-algebra-are-continuous]], [[thm-character-space-of-the-unitization-is-one-point-compactification]]).

[L2] $\Gamma : A \to C_0(\Delta(A))$ is an isometric $\ast$-isomorphism and every commutative C\*-algebra has an approximate unit of positive contractions; for $A = C_0(X)$ the standard approximate unit is the net of all $e \in C_c(X)$ with $0 \le e \le 1$ ([[thm-nonunital-commutative-gelfand-naimark]], [[thm-every-commutative-c-star-algebra-has-an-approximate-unit]], [[def-compact-support-c-c-and-c-zero-on-an-lch-space]]).

[L3] For a proper continuous $g : Y \to X$, the preimage of a compact set is compact; for a compact $K \subseteq X$ and a compactly supported function $u \in C_c(X)$ with $\mathbf 1_{g[K]} \le u \le 1$ — which exists by the cutoff lemma under Dependent Choice, derived from the Axiom of Choice — one has $u(g(y)) = 1$ for $y \in K$ ([[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]], [[def-compact-support-c-c-and-c-zero-on-an-lch-space]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[L4] For a nonzero genuinely nonunital commutative C\*-algebra $A$, the unitization $A^+$ is a unital commutative C\*-algebra with $\Delta(A^+) = \Delta(A) \cup \{\chi_\infty\}$ the one-point compactification; a unital $\ast$-homomorphism $\varphi^+ : A^+ \to B^+$ is obtained from any bounded star-homomorphism $\varphi : A \to B$ by $\varphi^+(a,\lambda) := (\varphi(a),\lambda)$, and its transpose is continuous and carries $\chi_\infty$ to $\chi_\infty$ ([[thm-minimal-c-star-unitization]], [[thm-character-space-of-the-unitization-is-one-point-compactification]], [[def-axiom-of-choice]]).

[L5] For nonzero unital $A$, $\Delta(A)$ is compact and $\Gamma : A \to C(\Delta(A))$ is an isometric unital $\ast$-isomorphism ([[thm-commutative-gelfand-duality]], [[thm-characters-on-a-unital-banach-algebra-are-continuous]]).

[L6] The one-point compactification $X^+$ of a locally compact Hausdorff space $X$ is compact Hausdorff and contains $X$ as an open dense subspace; conversely if $X$ is compact then $C_0(X) = C(X)$ and $X$ is its own one-point compactification ([[thm-one-point-compactification-properties]], [[def-compact-support-c-c-and-c-zero-on-an-lch-space]]).

## Proof

**Proof technique:** direct.

1.1 The object assignments land in the stated categories: $C_0(X)$ is a commutative C\*-algebra (pointwise operations, supremum norm, conjugation) and $\Delta(A)$ is a locally compact Hausdorff space by [L2]; for $X = \varnothing$ and $A = \{0\}$ the conventions of [L6] and the statement apply. [L2, L6, algebra]

1.2 For a proper continuous $g : Y \to X$ the pullback $g^* : C_0(X) \to C_0(Y)$, $g^*(f) = f\circ g$, is a bounded star-homomorphism: it is complex-linear, multiplicative and conjugation-preserving, and $f \circ g \in C_0(Y)$ because $\{|f\circ g| \ge \epsilon\} = g^{-1}(\{|f| \ge \epsilon\})$ is compact by properness of $g$; moreover $\|g^*f\|_\infty \le \|f\|_\infty$, and $(g\circ h)^* = h^* \circ g^*$, $(\mathrm{id})^* = \mathrm{id}$. [L2, algebra]

1.3 For a bounded star-homomorphism $\varphi : A \to B$ the transpose $\varphi^* : \Delta(B) \to \Delta(A)$, $\varphi^*(\psi) := \psi \circ \varphi$, is well defined: $\psi \circ \varphi$ is complex-linear, multiplicative and involution-preserving; and it is nonzero because $\varphi$ is proper: if $(e_i)$ is an approximate unit of $A$, then $(\varphi(e_i))$ is an approximate unit of $B$, so for any $\psi \ne 0$ and any $b$ with $\psi(b) \ne 0$ one has $\psi(\varphi(e_i))\psi(b) = \psi(\varphi(e_i)b) \to \psi(b)$ by continuity of $\psi$ from [L1], whence $\psi(\varphi(e_i)) \to 1$ and $\psi\circ\varphi \ne 0$. [L1, L2, algebra]

1.4 The transpose of a proper morphism is proper: by [L4] the extension $\varphi^+ : A^+ \to B^+$ is a unital $\ast$-homomorphism and $(\varphi^+)^* : \Delta(B^+) \to \Delta(A^+)$ is a continuous map of compact Hausdorff spaces that carries $\chi_\infty$ to $\chi_\infty$, hence $(\varphi^+)^{-1}(\Delta(A)) = \Delta(B)$; for a compact $K \subseteq \Delta(A)$ the set $((\varphi^+)^*)^{-1}(K)$ is closed in the compact $\Delta(B^+)$, hence compact, and equals $(\varphi^*)^{-1}(K)$; therefore $(\varphi^*)^{-1}(K)$ is compact and $\varphi^*$ is proper. [L1, L4, algebra]

1.5 The pullback of a proper continuous map is a proper star-homomorphism: let $g : Y \to X$ be proper and let $(e_i)$ be an approximate unit of $C_0(X)$; for $f \in C_0(Y)$ and $\epsilon > 0$ the set $K := \{|f| \ge \epsilon\} \subseteq Y$ is compact, so $g[K] \subseteq X$ is compact and by [L3] there is $u \in C_c(X)$ with $\mathbf 1_{g[K]} \le u \le 1$; since $(e_i)$ is an approximate unit and $u \in C_0(X)$, there is $i_0$ with $\|ue_i - u\|_\infty < \epsilon$ for all $i \ge i_0$, and then for $y \in K$ one has $|1 - e_i(g(y))| = |(u - ue_i)(g(y))| < \epsilon$ because $u(g(y)) = 1$; for $y \notin K$ one has $|f(y)| < \epsilon$ and $|1 - e_i(g(y))| \le 1$ since $0 \le e_i \le 1$; hence $\|f - f\cdot(e_i \circ g)\|_\infty \le \max(\epsilon\|f\|_\infty, \epsilon)$ for $i \ge i_0$, and $(e_i\circ g)$ is an approximate unit of $C_0(Y)$. [L2, L3, algebra]

1.6 Evaluations identify $\Delta(C_0(X))$ with $X$: $C_0(X)$ is a closed two-sided ideal of codimension one in $C(X^+)$ with $C(X^+) = C_0(X) + \mathbb C\mathbf 1$, so the unitization $C_0(X)^+$ is canonically isometric to $C(X^+)$ by uniqueness in [L4]; the compact case of [L5] is the special case in which no point at infinity is added; under $\Delta(C(X^+)) \cong X^+$ the quotient character $\chi_\infty$ is evaluation at the point at infinity, so $\Delta(C_0(X)) = \Delta(C_0(X)^+) \setminus \{\chi_\infty\}$ corresponds to $X^+ \setminus \{\infty\} = X$. [L4, L6, algebra]

2.1 Naturality and inverse arrows: for a proper $g$ and $\psi \in \Delta(C_0(Y))$ corresponding to $y \in Y$ by [step 1.6], one has $(g^*)^*(\psi) = \psi\circ g^*$ corresponding to $g(y)$, so $(g^*)^* = g$ under the identifications; for a proper $\varphi : A \to B$ the identity $\Gamma_B(\varphi(a))(\psi) = \psi(\varphi(a)) = (\psi\circ\varphi)(a) = \Gamma_A(a)(\varphi^*(\psi))$ gives $\Gamma_B\circ\varphi = \varphi^{**}\circ\Gamma_A$, so $\varphi$ is recovered from $\varphi^*$ by $\varphi = \Gamma_B^{-1}\circ\varphi^{**}\circ\Gamma_A$. [step 1.2, step 1.3, step 1.6, L2, algebra]

3.1 By [step 1.2] and [step 1.5] the pullback construction is a contravariant functor on $\mathsf{LCH}$ with values in $\mathsf{cC}^*$; by [step 1.3] and [step 1.4] the transpose construction is a contravariant functor on $\mathsf{cC}^*$ with values in $\mathsf{LCH}$; and by [step 2.1] the two are mutually inverse on arrows under the object identifications, so they define a contravariant equivalence of categories. [step 1.2, step 1.3, step 1.4, step 1.5, step 2.1] ∎

## Remarks

- **Properness on both sides is used exactly once each**: compact preimages for membership of $f \circ g$ in $C_0(Y)$ and for [step 1.5], and the approximate-unit condition for nonvanishing of $\psi\circ\varphi$ in [step 1.3].
- **The unital and nonunital cases are reconciled through the unitization**, and the compact duality [[thm-commutative-gelfand-duality]] retains its own unital-arrow convention; the present theorem does not restate it.
