---
id: thm-minimal-c-star-unitization
kind: theorem
title: Minimal C star unitization
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-algebraic-unitization-of-a-star-algebra, def-c-star-algebra, thm-bounded-operator-space-is-banach, lem-c-star-spectral-radius-equals-norm-for-normal-elements, def-spectrum-and-resolvent-set-in-a-banach-algebra, def-spectral-radius, def-unital-banach-algebra]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Proposition 2.1.15 and Definition 2.1.18, printed pp. 11–13"
      url: "https://arxiv.org/pdf/1211.3404"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem — §4, printed pp. 9–11"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
---

## Statement

Let $A$ be a nonzero C\*-algebra ([[def-c-star-algebra]]) that is **genuinely
nonunital**, that is, not unital. With $A^+ = A \oplus \mathbb C$ the algebraic
unitization ([[def-algebraic-unitization-of-a-star-algebra]]), define for
$(a,\lambda) \in A^+$ the operator $L_a + \lambda I \in \mathcal B(A)$, where
$L_a(b) := ab$, and put

$$\|(a,\lambda)\|_{A^+} \;:=\; \|L_a + \lambda I\|_{\mathcal B(A)}.$$

Then:

1. this is a C\*-algebra norm on $A^+$ extending the norm of $A$, and $A^+$
   becomes a unital C\*-algebra in which $A$ is a closed two-sided $\ast$-ideal
   of codimension one;
2. **uniqueness over $A$**: if $\|\cdot\|'$ is any C\*-algebra norm on the same
   algebra $A^+$ with the same involution whose restriction to $A$ is the given
   norm of $A$, then $\|\cdot\|' = \|\cdot\|_{A^+}$;
3. if $A = \{0\}$ is the zero algebra then $A^+ = \mathbb C$ with its usual
   structure and norm.

## Facts & Assumptions

**Given:** A nonzero genuinely nonunital C\*-algebra $A$, its algebraic unitization $A^+$, the left-multiplication operators $L_a$ on $A$, and the operator norm on $\mathcal B(A)$.

[L1] $\|x^*x\| = \|x\|^2$, $\|x^*\| = \|x\|$, and the norm is submultiplicative; multiplication is associative and bilinear ([[def-c-star-algebra]]).

[L2] $A^+ = A \oplus \mathbb C$ with product $(a,\lambda)(b,\mu) = (ab+\lambda b+\mu a, \lambda\mu)$ and involution $(a,\lambda)^* = (a^*,\overline\lambda)$, and $\mathbf 1 = (0,1)$ is the identity ([[def-algebraic-unitization-of-a-star-algebra]]).

[L3] If $A$ is a normed space and $\mathcal B(A)$ its bounded operators, then $\mathcal B(A)$ is a Banach space under the operator norm because $A$ is complete; the operator norm is submultiplicative ([[thm-bounded-operator-space-is-banach]], [[def-unital-banach-algebra]]).

[L4] In a unital C\*-algebra, $r(y) = \|y\|$ for every normal $y$; the spectrum of an element of a unital algebra is determined by the algebra structure, since invertibility is an algebraic condition ([[lem-c-star-spectral-radius-equals-norm-for-normal-elements]], [[def-spectrum-and-resolvent-set-in-a-banach-algebra]], [[def-spectral-radius]]).

## Proof

**Proof technique:** direct.

1.1 For $a \in A$ one has $\|L_a\| = \|a\|$: the inequality $\|L_ab\| \le \|a\|\,\|b\|$ gives $\|L_a\| \le \|a\|$, while $\|L_aa^*\| = \|aa^*\| = \|a\|^2$ gives $\|L_a\| \ge \|a\|^2/\|a^*\| = \|a\|$ when $a \ne 0$, and the case $a = 0$ is trivial; in particular $L$ is an injective linear isometry, so $L(A)$ is a closed subspace of $\mathcal B(A)$. [L1, L3, algebra]

1.2 The map $\varphi : A^+ \to \mathcal B(A)$, $\varphi(a,\lambda) := L_a + \lambda I$, is complex-linear and multiplicative with $\varphi((a,\lambda)(b,\mu)) = \varphi(a,\lambda)\varphi(b,\mu)$ for all $(a,\lambda),(b,\mu) \in A^+$, and $\varphi(0,1) = I$, where the multiplicativity is the computation $\varphi(a,\lambda)\varphi(b,\mu)(c) = (a+\lambda\cdot 1)(bc + \mu c) = (ab+\lambda b + \mu a)c + \lambda\mu c = \varphi((a,\lambda)(b,\mu))(c)$ [L2, algebra].

2.1 The map $\varphi$ of [step 1.2] is injective when $A$ is genuinely nonunital: if $L_a + \lambda I = 0$ with $\lambda \ne 0$ then $ab = -\lambda b$ for all $b$, so $e := -a/\lambda$ satisfies $eb = b$ for all $b$, that is, $e$ is a left identity. Taking adjoints in $eb = b$ gives $b^*e^* = b^*$ for every $b$, and every element of $A$ is of the form $b^*$, so $e^*$ is a right identity. Applying the left identity to $b = e^*$ gives $ee^* = e^*$, and applying the right identity to $b = e$ gives $ee^* = e$; hence $e = e^*$ is a two-sided identity of $A$, a contradiction, and if $\lambda = 0$ then $L_a = 0$ forces $a = 0$ by [step 1.1]. [step 1.1, L1, L2, algebra]

2.2 The image $M := \varphi(A^+)$ is closed in $\mathcal B(A)$: $M = L(A) + \mathbb C I$ with $L(A)$ closed by [step 1.1], and the sum of a closed subspace with a one-dimensional subspace is closed — for a convergent sequence $T_n = S_n + \lambda_nI$ with $S_n \in L(A)$, boundedness of $(\lambda_n)$ follows because $\lambda_n \to \infty$ would give $T_n/\lambda_n \to 0$ and hence $-I \in L(A)$, and then a convergent subsequence of the bounded scalars yields a convergent sequence $S_{n_k} = T_{n_k} - \lambda_{n_k}I$ whose limit lies in the closed subspace $L(A)$, so the limit of $T_n$ lies in $M$. [step 1.1, L3, algebra]

3.1 On $M$, the map $\sigma(T) := L_{a^*}+\overline\lambda I$ for $T = L_a+\lambda I$ is well defined (by injectivity from [step 2.1]) and involutive with $\sigma(\sigma(T)) = T$; and for every $T \in M$ one has $\|T\|^2 \le \|\sigma(T)T\|$ and $\sigma(T)T = \varphi(x^*x)$ if $T = \varphi(x)$: for $b \in A$, $\|Tb\|^2 = \|(Tb)^*(Tb)\| = \|b^*\sigma(T)Tb\| \le \|b\|^2\|\sigma(T)T\|$ using [L1], and the identity $\sigma(T)T = \varphi(x^*x)$ is multiplicativity of $\varphi$ from [step 1.2] combined with the involution of [L2]. [step 1.2, step 2.1, L1, L2, algebra]

4.1 The norm $\|(a,\lambda)\|_{A^+} := \|\varphi(a,\lambda)\|$ makes $\varphi$ an isometry onto the closed subspace $M$ of the Banach space $\mathcal B(A)$, so $A^+$ is a Banach space with a submultiplicative norm (both transported along the isometric algebra isomorphism $\varphi$); and the C\*-identity holds: for $x = (a,\lambda)$, $\|x\|^2 = \|\varphi(x)\|^2 = \|\sigma(\varphi(x))\varphi(x)\| = \|\varphi(x^*x)\| = \|x^*x\|$, where the second equality uses the two inequalities $\|\varphi(x)\|^2 \le \|\sigma(\varphi(x))\varphi(x)\| \le \|\sigma(\varphi(x))\|\,\|\varphi(x)\|$, and $\|\sigma(T)\| \le \|T\|$ for all $T \in M$ (apply the inequality of [step 3.1] to $\sigma(T)$ and use involutivity) so that equality holds throughout. [step 2.1, step 2.2, step 3.1, L1, L3, algebra]

5.1 The norm of [step 4.1] extends the norm of $A$: $\|(a,0)\|_{A^+} = \|L_a\| = \|a\|$ by [step 1.1]; the element $(0,1)$ is a unit of norm one, since $\varphi(0,1) = I$ has operator norm one; and $A \oplus \{0\}$ is a closed two-sided $\ast$-ideal of codimension one by the algebra identities of [L2] and the isometry of [step 1.1]. [step 1.1, step 4.1, L2, algebra]

5.2 Uniqueness of the norm: let $\|\cdot\|'$ be a C\*-norm on $A^+$ extending the norm of $A$. For $x = (a,\lambda)$ the element $y := x^*x = (c,|\lambda|^2)$ with $c := a^*a + \overline\lambda a + \lambda a^*$ is self-adjoint, hence normal, in the unital C\*-algebra $(A^+,\|\cdot\|')$, so $\|y\|' = r'(y)$ by [L4]; and the spectrum of $y$ in the unital algebra $A^+$ is independent of the norm, so $r'(y) = r(y)$, where $r$ is computed with the norm of [step 4.1]; applying the same identity with the operator norm gives $\|x\|^2 = \|y\| = r(y) = r'(y) = \|y\|' = \|x\|'^2$, hence $\|\cdot\|' = \|\cdot\|_{A^+}$. [step 4.1, L4, algebra]

6.1 Claims 1, 2 and 3 are proved: [step 4.1] and [step 5.1] give the C\*-algebra structure with $A$ as a closed ideal of codimension one, [step 5.2] gives uniqueness of the norm among C\*-norms extending the norm of $A$, and the zero algebra case is the separate convention recorded in the statement, where $A^+ = \mathbb C$. [step 4.1, step 5.1, step 5.2] ∎

## Remarks

- **Genuine nonunitality is exactly what makes $\varphi$ injective.** If $A$ were unital with unit $1_A$, then $L_{1_A} - I = 0$ and the representation would identify $(1_A,-1)$ with $0$.
- **The norm is minimal, not merely canonical.** Any other C\*-norm extending the norm of $A$ has the same values, by [step 3.1]; the two ingredients are the algebraic invariance of the spectrum and the equality $r = \|\cdot\|$ for normal elements.
