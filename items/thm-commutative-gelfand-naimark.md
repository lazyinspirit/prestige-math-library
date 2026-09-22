---
id: thm-commutative-gelfand-naimark
kind: theorem
title: Commutative Gelfand Naimark
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-gelfand-transform-is-a-contractive-unital-homomorphism, lem-c-star-spectral-radius-equals-norm-for-normal-elements, lem-characters-on-a-commutative-c-star-algebra-preserve-star, thm-complex-stone-weierstrass-self-adjoint, def-c-star-algebra, thm-maximal-ideal-space-is-compact-hausdorff, def-axiom-of-choice, def-unital-banach-algebra]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Corollary 3.1.33 and Theorem 3.1.34 (unital case), printed pp. 65–66"
      url: "https://arxiv.org/pdf/1211.3404"
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Theorem 5.64, printed pp. 266–267"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem — Theorem 4.5, printed pp. 10–11"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be a nonzero
unital commutative complex C\*-algebra
([[def-c-star-algebra]], [[def-unital-banach-algebra]]). Then the Gelfand
transform

$$\Gamma : A \to C(\Delta(A)), \qquad \Gamma(a) = \hat a,\quad \hat a(\chi) = \chi(a),$$

is an **isometric unital $\ast$-isomorphism onto** $C(\Delta(A))$: $\Gamma$ is a
unital complex-algebra homomorphism satisfying
$\Gamma(a^*) = \overline{\Gamma(a)}$ and $\|\Gamma(a)\|_\infty = \|a\|$ for every
$a \in A$, and $\Gamma(A) = C(\Delta(A))$.

## Facts & Assumptions

**Given:** An assumed Axiom of Choice, a nonzero unital commutative complex C\*-algebra $A$, its character space $\Delta(A)$, and the Gelfand transform $\Gamma$.

[L1] $\Delta(A)$ is a nonempty compact Hausdorff space ([[thm-maximal-ideal-space-is-compact-hausdorff]], [[def-axiom-of-choice]]).

[L2] Every element of $A$ is normal, because $a^*a = aa^*$ holds in a commutative algebra ([[def-c-star-algebra]]).

[L3] $\chi(a^*) = \overline{\chi(a)}$ for every character and every $a$ ([[lem-characters-on-a-commutative-c-star-algebra-preserve-star]]).

[L4] $\Gamma$ is a unital complex-algebra homomorphism and $\|\Gamma(a)\|_\infty = r(a) \le \|a\|$ for every $a$ ([[thm-gelfand-transform-is-a-contractive-unital-homomorphism]]).

[L5] $r(x) = \|x\|$ for every normal $x$ in a unital C\*-algebra ([[lem-c-star-spectral-radius-equals-norm-for-normal-elements]]).

[L6] If $X$ is compact Hausdorff and $B \subseteq C(X,\mathbb C)$ is a unital point-separating self-adjoint complex function algebra, then $B$ is uniformly dense in $C(X,\mathbb C)$ ([[thm-complex-stone-weierstrass-self-adjoint]]).

## Proof

**Proof technique:** direct.

1.1 $\Delta(A)$ is a nonempty compact Hausdorff space by [L1], so $C(\Delta(A))$ is a complex Banach algebra under the supremum norm with pointwise operations. [L1]

1.2 Every element of $A$ is normal by [L2], so $r(a) = \|a\|$ for all $a$ by [L5]. [L2, L5]

1.3 $\Gamma$ is a unital algebra homomorphism with $\|\Gamma(a)\|_\infty = r(a)$, by [L4]. [L4]

1.4 $\Gamma(a^*)(\chi) = \chi(a^*) = \overline{\chi(a)} = \overline{\Gamma(a)(\chi)}$ for every $\chi$, by [L3]; that is, $\Gamma(a^*) = \overline{\Gamma(a)}$. [L3]

2.1 $\Gamma$ is isometric: $\|\Gamma(a)\|_\infty = r(a) = \|a\|$ for every $a$, by [step 1.2] and [step 1.3]. [step 1.2, step 1.3]

2.2 The range $B := \Gamma(A)$ is a unital self-adjoint complex subalgebra of $C(\Delta(A))$: it is a subalgebra by [step 1.3] and contains the constant function one; it is self-adjoint by [step 1.4]; and it separates points, since for $\chi \ne \psi$ there is $a \in A$ with $\chi(a) \ne \psi(a)$, and then $\Gamma(a)(\chi) \ne \Gamma(a)(\psi)$. [step 1.3, step 1.4]

3.1 By [L6] applied to the compact Hausdorff space $\Delta(A)$ and the unital point-separating self-adjoint function algebra $B$, the range $B$ is uniformly dense in $C(\Delta(A))$. [step 1.1, step 2.2, L6]

3.2 The range $B = \Gamma(A)$ is closed in $C(\Delta(A))$: $\Gamma$ is isometric by [step 2.1] and $A$ is complete, so $B$ is a complete subspace of the Banach space $C(\Delta(A))$, hence closed. [step 1.1, step 2.1]

4.1 A dense and closed subset equals the whole space, so $B = C(\Delta(A))$ by [step 3.1] and [step 3.2]; together with [step 2.1], [step 1.3] and [step 1.4] this says that $\Gamma$ is an isometric unital $\ast$-isomorphism onto $C(\Delta(A))$. [step 1.3, step 1.4, step 2.1, step 3.1, step 3.2] ∎

## Remarks

- **Every hypothesis is used.** Normality for the isometry, the C\*-identity to make elements normal, the algebra-commutativity for the $\ast$-property through the character lemma, compactness of $\Delta(A)$ for Stone–Weierstrass, and completeness for closedness of the range.
- **The inverse is the inverse of an isometry**, so it is a contraction; it is nevertheless not claimed to be multiplicative beyond what the isomorphism statement already gives.
