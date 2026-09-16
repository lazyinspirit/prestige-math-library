---
id: ex-the-adjoint-representation-and-the-highest-root
kind: example
title: The adjoint representation and highest root
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-the-adjoint-representation-has-highest-weight-the-highest-root, prop-root-systems-of-the-classical-complex-lie-algebras, def-classical-complex-matrix-lie-algebras, def-adjoint-representation-of-a-lie-algebra, def-height-of-a-root-and-highest-root, def-simple-semisimple-and-reductive-lie-algebras, prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter V §1 examples"
    - title: "Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras"
      url: "https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf"
      locator: "§8.4, Example 8.26"
proof_strategy: direct
---

## Example

Assume the Axiom of Choice. For $\mathfrak{sl}_n(\mathbb C)$ with its diagonal
Cartan $\mathfrak h$, coordinate functionals $\varepsilon_i$ and
upper-triangular positive system, the adjoint representation has highest vector
$E_{1n}$ and highest weight $\varepsilon_1-\varepsilon_n$, which is the highest
root
([[def-adjoint-representation-of-a-lie-algebra]],
[[def-height-of-a-root-and-highest-root]]).

## Facts & Assumptions

**Given:** The Axiom of Choice, $\mathfrak g=\mathfrak{sl}_n(\mathbb C)$ ([[def-classical-complex-matrix-lie-algebras]]), its diagonal Cartan $\mathfrak h$, the coordinate functionals $\varepsilon_i(H)=H_{ii}$, the matrix units $E_{ij}$, the positive system $\varepsilon_i-\varepsilon_j$ $(i<j)$ with base $\alpha_j=\varepsilon_j-\varepsilon_{j+1}$ ([[prop-root-systems-of-the-classical-complex-lie-algebras]]), and the adjoint representation of $\mathfrak g$ on itself.

[A1] The Axiom of Choice is assumed; it enters through the root-space and highest-root suppliers ([[def-axiom-of-choice]]).

[L1] $\mathfrak{sl}_n(\mathbb C)$ is simple for $n\ge2$, and the adjoint representation of a simple complex Lie algebra is irreducible with highest weight its highest root ([[def-simple-semisimple-and-reductive-lie-algebras]], [[prop-the-adjoint-representation-has-highest-weight-the-highest-root]]).

[L2] The roots are $\varepsilon_i-\varepsilon_j$, $i\ne j$, with root spaces $\mathbb CE_{ij}$; the positive roots are those with $i<j$, and the highest root in the root order is $\theta=\varepsilon_1-\varepsilon_n=\alpha_1+\dots+\alpha_{n-1}$ ([[prop-root-systems-of-the-classical-complex-lie-algebras]], [[prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system]], [[def-height-of-a-root-and-highest-root]]).

[L3] The adjoint action is $[H,E_{ij}]=(H_{ii}-H_{jj})E_{ij}=(\varepsilon_i-\varepsilon_j)(H)E_{ij}$ and $[E_{ij},E_{kl}]=\delta_{jk}E_{il}-\delta_{li}E_{kj}$. [given]

## Verification

**Proof technique:** direct.

1.1 The vector $E_{1n}$ has weight $\varepsilon_1-\varepsilon_n$: $[H,E_{1n}]=(H_{11}-H_{nn})E_{1n}$ by [L3]. [L3, A1]

1.2 $E_{1n}$ is killed by every positive root vector: for $i<j$ we have $[E_{ij},E_{1n}]=\delta_{j1}E_{in}-\delta_{in}E_{1j}$, and $\delta_{j1}=0$ because $i<j$ with $i\ge1$, while $\delta_{in}=0$ because $i<j\le n$ forces $i<n$; hence $[E_{ij},E_{1n}]=0$. [L3]

2.1 By [L2] the functional $\varepsilon_1-\varepsilon_n$ is the highest root $\theta$; by [L1] the adjoint representation is irreducible with highest weight $\theta$, and by steps 1.1 and 2.1 the vector $E_{1n}$ is a highest weight vector realising that weight. [L1, L2, step 1.1, step 1.2]

3.1 Hence the adjoint representation of $\mathfrak{sl}_n(\mathbb C)$ has highest vector $E_{1n}$ and highest weight the highest root $\varepsilon_1-\varepsilon_n$, as asserted. [step 2.1] ∎
