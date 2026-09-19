---
id: ex-unitization-of-a-nonunital-banach-algebra
kind: example
title: Unitization of a nonunital Banach algebra
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-unital-banach-algebra, def-spectrum-and-resolvent-set-in-a-banach-algebra, def-banach-space]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Definition 2.1.18, printed pp. 11–13"
      url: "https://arxiv.org/pdf/1211.3404"
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — §5.1.1, printed pp. 209–214"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Example

Let $A$ be a **nonunital** complex Banach algebra: a complex Banach space
([[def-banach-space]]) with an associative bilinear multiplication satisfying
$\|ab\| \le \|a\|\,\|b\|$ and no unit. Define

$$\widetilde A := \mathbb C \oplus A, \qquad (\lambda,a)(\mu,b) := (\lambda\mu,\ \lambda b + \mu a + ab), \qquad \|(\lambda,a)\| := |\lambda| + \|a\| .$$

Then $\widetilde A$ is a unital complex Banach algebra
([[def-unital-banach-algebra]]) with unit $(1,0)$, the map
$a \mapsto (0,a)$ is an isometric algebra homomorphism whose image is a closed
two-sided ideal isomorphic to $A$, and **spectra of elements of $A$ are taken
in this unitization**: for $a \in A$,

$$\sigma(a) := \sigma_{\widetilde A}\bigl((0,a)\bigr) = \{\,\lambda \in \mathbb C : (\lambda, -a)\text{ is not invertible in } \widetilde A\,\}$$

([[def-spectrum-and-resolvent-set-in-a-banach-algebra]]).

## Facts & Assumptions

**Given:** A nonunital complex Banach algebra $A$ with norm $\|\cdot\|$, and the algebra $\widetilde A = \mathbb C \oplus A$ with the multiplication and norm displayed above.

[L1] $A$ is complete, multiplication in $A$ is associative and bilinear with $\|ab\| \le \|a\|\,\|b\|$, and $\|z\| = |z|$ for the scalars understood as multiples of the unit in the unital case; in the nonunital case there is no unit and $1 \notin A$ ([[def-unital-banach-algebra]], [[def-banach-space]]).

[L2] In a unital complex Banach algebra $c$ is invertible exactly when it has a two-sided inverse, and $\lambda \in \sigma(c)$ exactly when $\lambda 1 - c$ is not invertible ([[def-spectrum-and-resolvent-set-in-a-banach-algebra]]).

## Verification

**Proof technique:** direct.

1.1 Associativity: expanding both sides of the associativity identity for $((\lambda,a)(\mu,b))(\nu,c)$ and $(\lambda,a)((\mu,b)(\nu,c))$ by bilinearity gives the common value $$(\lambda\mu\nu,\ \lambda\mu c + \lambda\nu b + \mu\nu a + \lambda(bc) + \mu(ac) + \nu(ab) + (ab)c):$$ the left side produces $\lambda\mu c + \nu(\lambda b + \mu a + ab) + (\lambda b + \mu a + ab)c$ and the right side produces $\lambda(\mu c + \nu b + bc) + \mu\nu a + a(\mu c + \nu b + bc)$, and the two agree because scalars may be moved across the product, the multiplication of $A$ is bilinear, and $a(bc) = (ab)c$ by associativity. [L1, algebra]

2.1 The element $(1,0)$ is a two-sided identity: $(1,0)(\mu,b) = (\mu, b + 0 + 0) = (\mu,b)$ and $(\lambda,a)(1,0) = (\lambda, 0 + a + 0) = (\lambda,a)$. Submultiplicativity holds because $\|(\lambda,a)(\mu,b)\| = |\lambda\mu| + \|\lambda b + \mu a + ab\| \le |\lambda||\mu| + |\lambda|\|b\| + |\mu|\|a\| + \|a\|\|b\| = (|\lambda| + \|a\|)(|\mu| + \|b\|) = \|(\lambda,a)\|\,\|(\mu,b)\|$ by [L1], and $\|(1,0)\| = 1$. [step 1.1, L1, algebra]

3.1 Completeness: a sequence $(\lambda_n,a_n)$ is Cauchy in the sum norm exactly when $(\lambda_n)$ is Cauchy in $\mathbb C$ and $(a_n)$ is Cauchy in $A$ (the two inequalities $|\lambda|, \|a\| \le \|(\lambda,a)\| \le |\lambda| + \|a\|$ compare the norm with the maximum of the coordinate norms); since $\mathbb C$ and $A$ are complete by [L1], the coordinates converge and their pair is the limit; so $\widetilde A$ is a complex Banach algebra. [step 2.1, L1, algebra]

3.2 The map $j(a) := (0,a)$ is isometric and multiplicative: $j(ab) = (0,ab) = (0,a)(0,b) = j(a)j(b)$, and $\|j(a)\| = 0 + \|a\|$; its image is a two-sided ideal because $(\lambda,b)(0,a) = (0,\lambda a + ba)$ and $(0,a)(\mu,b) = (0,\mu a + ab)$, and it is closed as the kernel of the continuous scalar projection $(\lambda,a) \mapsto \lambda$. [step 2.1, L1, algebra]

4.1 By [L2] applied in $\widetilde A$, the spectrum of $a \in A$ is the set of $\lambda$ with $(\lambda,0) - (0,a) = (\lambda,-a)$ not invertible, which is the convention displayed in the statement. [step 3.1, step 3.2, L2] ∎

## Remarks

- **The algebraic unitization is canonical, but its Banach norm is not.** The
  algebra $\widetilde A$ contains $A$ as a closed two-sided ideal of codimension
  one, and the displayed multiplication is the usual algebraic unitization.
  The sum norm is one convenient submultiplicative complete norm; merely
  requiring another unitization to restrict to the norm of $A$ and to have unit
  norm one does not force an isometry with this sum-norm model.

- **Why the convention is needed at all.** Without a unit the expressions $z1 - a$ in the definition of the spectrum are meaningless inside $A$; the named unitization supplies the missing $1$, and the example fixes it so that no later statement has to guess which unitization was meant.
