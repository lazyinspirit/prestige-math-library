---
id: thm-nonunital-commutative-gelfand-naimark
kind: theorem
title: Nonunital commutative Gelfand Naimark
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-character-space-of-the-unitization-is-one-point-compactification, thm-minimal-c-star-unitization, thm-commutative-gelfand-naimark, def-compact-support-c-c-and-c-zero-on-an-lch-space, def-one-point-compactification, thm-one-point-compactification-properties, def-axiom-of-choice, def-c-star-algebra]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Theorem 3.1.34 and Proposition 3.1.35, printed pp. 65–66"
      url: "https://arxiv.org/pdf/1211.3404"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem — §4, printed pp. 9–11"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be a commutative
C\*-algebra ([[def-c-star-algebra]]), possibly nonunital and possibly the zero
algebra. Then the Gelfand transform

$$\Gamma : A \to C_0(\Delta(A)), \qquad \Gamma(a)(\varphi) := \varphi(a),$$

is an **isometric $\ast$-isomorphism onto** $C_0(\Delta(A))$
([[def-compact-support-c-c-and-c-zero-on-an-lch-space]]), where $\Delta(A)$
carries the weak-star topology and is locally compact Hausdorff; for a unital $A$
this is the statement $\Gamma : A \cong C(\Delta(A))$ of
[[thm-commutative-gelfand-naimark]], and for a nonunital nonzero $A$ the transform
is the restriction of the unital transform $A^+ \to C(\Delta(A^+))$ to the ideal
of functions vanishing at the point at infinity $\chi_\infty$, under the
identification $\Delta(A^+) = \Delta(A) \cup \{\chi_\infty\}$ of
[[thm-character-space-of-the-unitization-is-one-point-compactification]].

## Facts & Assumptions

**Given:** The Axiom of Choice, a commutative C\*-algebra $A$, its character space $\Delta(A)$, and the Gelfand transform $\Gamma$.

[L1] If $A$ is unital and nonzero, $\Gamma : A \to C(\Delta(A))$ is an isometric unital $\ast$-isomorphism onto $C(\Delta(A))$ ([[thm-commutative-gelfand-naimark]], [[def-axiom-of-choice]]).

[L2] If $A$ is nonzero and genuinely nonunital, then $A^+$ is a unital commutative C\*-algebra containing $A$ as a closed two-sided $\ast$-ideal of codimension one, and $\Delta(A^+) = \Delta(A) \cup \{\chi_\infty\}$ with $\Delta(A)$ an open dense locally compact Hausdorff subspace of the compact Hausdorff space $\Delta(A^+)$ ([[thm-minimal-c-star-unitization]], [[thm-character-space-of-the-unitization-is-one-point-compactification]], [[def-axiom-of-choice]]).

[L3] For a locally compact Hausdorff space $X$, $C_0(X)$ is the set of continuous functions $f$ such that $\{|f| \ge \epsilon\}$ is compact for every $\epsilon > 0$, and $C_0(X) = C(X)$ when $X$ is compact; the one-point compactification topology on $X^+ = X \cup \{\infty\}$ has as neighbourhoods of $\infty$ the complements of compact subsets of $X$, so a continuous function $g$ on $X$ extends continuously to $X^+$ with value $0$ at $\infty$ if and only if $g \in C_0(X)$ ([[def-compact-support-c-c-and-c-zero-on-an-lch-space]], [[def-one-point-compactification]], [[thm-one-point-compactification-properties]]).

[L4] For the zero algebra $A = \{0\}$ one has $\Delta(A) = \varnothing$ and $C_0(\varnothing) = \{0\}$, and the only map $\{0\} \to \{0\}$ is an isometric $\ast$-isomorphism. [algebra]

## Proof

**Proof technique:** direct.

1.1 If $A$ is unital and nonzero, the claim is [L1] together with $C_0(\Delta(A)) = C(\Delta(A))$ from [L3], since $\Delta(A)$ is compact; if $A = \{0\}$ the claim is [L4]. [L1, L3, L4]

1.2 Assume now that $A$ is nonzero and genuinely nonunital. Under the unital Gelfand transform $\Gamma^+ : A^+ \to C(\Delta(A^+))$ of [L1], the ideal $A$ maps onto the ideal $I_\infty := \{f \in C(\Delta(A^+)) : f(\chi_\infty) = 0\}$: indeed $\Gamma^+(A) \subseteq I_\infty$ because $\chi_\infty$ vanishes on $A$ by definition, and both $\Gamma^+(A)$ and $I_\infty$ are linear subspaces of codimension one, $\Gamma^+(A)$ being the image of a codimension-one subspace and $I_\infty$ the kernel of the evaluation at $\chi_\infty$. [L1, L2, algebra]

1.3 For every $g \in C_0(\Delta(A))$ the extension $\tilde g$ of $g$ by $\tilde g(\chi_\infty) := 0$ is continuous on $\Delta(A^+) = \Delta(A) \cup \{\chi_\infty\}$: for $\epsilon>0$ the set $\{|g| \ge \epsilon\}$ is compact in $\Delta(A)$, so its complement is an open neighbourhood of $\chi_\infty$ on which $|\tilde g| < \epsilon$; conversely the restriction of an $f \in I_\infty$ to $\Delta(A)$ lies in $C_0(\Delta(A))$, because for $\epsilon>0$ the set $\{x \in \Delta(A) : |f(x)| \ge \epsilon\}$ is a closed subset of the compact space $\Delta(A^+)$ (it is the intersection of $\{|f| \ge \epsilon\}$ with $\Delta(A)$) that omits $\chi_\infty$, hence a compact subset of $\Delta(A)$; hence restriction and extension are mutually inverse bijections between $I_\infty$ and $C_0(\Delta(A))$. [L2, L3, algebra]

2.1 The restriction map of [step 1.3] is an isometry: for $f \in I_\infty$ one has $\sup_{\Delta(A)}|f| = \sup_{\Delta(A^+)}|f|$ because $\Delta(A)$ is dense in $\Delta(A^+)$ and $|f|$ is continuous, and $f(\chi_\infty) = 0$; it is also a $\ast$-homomorphism for the pointwise operations and conjugation. [step 1.3, L2, algebra]

3.1 Composing the isometric $\ast$-isomorphism $\Gamma^+ : A \to I_\infty$ of [step 1.2] with the isometric $\ast$-isomorphism $I_\infty \to C_0(\Delta(A))$ of [step 2.1] gives an isometric $\ast$-isomorphism $A \to C_0(\Delta(A))$, and unwinding the definitions it sends $a$ to the function $\varphi \mapsto \varphi(a)$ on $\Delta(A)$; this is the Gelfand transform, so the claim is proved in the nonunital nonzero case as well. [step 1.2, step 2.1, algebra]

4.1 Together with [step 1.1] this proves the theorem for every commutative C\*-algebra, including the unital and zero cases. [step 1.1, step 3.1] ∎

## Remarks

- **Positivity is pointwise.** Under the isomorphism, $a = b^*b$ corresponds to $|c|^2$ for $c = \Gamma(b)$, hence to a nonnegative function; conversely a nonnegative $h \in C_0(\Delta(A))$ has a continuous square root $\sqrt h \in C_0(\Delta(A))$ (the compact set $\{\sqrt h \ge \epsilon\}$ is $\{h \ge \epsilon^2\}$), so $h = |\sqrt h|^2$ is the transform of a positive element. This description of positivity is used in [[thm-every-commutative-c-star-algebra-has-an-approximate-unit]].
- **The unitization bookkeeping is not optional.** The proof genuinely passes through $A^+$; the space $\Delta(A)$ alone is only locally compact, and its one-point compactification is supplied by the homeomorphism of [[thm-character-space-of-the-unitization-is-one-point-compactification]].
