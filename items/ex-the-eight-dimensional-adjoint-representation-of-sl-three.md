---
id: ex-the-eight-dimensional-adjoint-representation-of-sl-three
kind: example
title: The eight-dimensional adjoint representation of sl3
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [ex-the-adjoint-representation-and-the-highest-root, ex-standard-and-dual-representations-of-sl-n-by-highest-weights, prop-root-systems-of-the-classical-complex-lie-algebras, def-fundamental-weights, def-adjoint-representation-of-a-lie-algebra, def-weight-and-weight-space-of-a-lie-algebra-representation, def-highest-weight-vector-and-highest-weight-module, def-axiom-of-choice]
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

Assume the Axiom of Choice. The adjoint representation of
$\mathfrak{sl}_3(\mathbb C)$ has dimension $8$, highest weight
$\alpha_1+\alpha_2=\omega_1+\omega_2$, six one-dimensional root-weight spaces,
and a two-dimensional zero-weight space.

## Facts & Assumptions

**Given:** The Axiom of Choice, $\mathfrak g=\mathfrak{sl}_3(\mathbb C)$, its diagonal Cartan $\mathfrak h$ of traceless diagonal matrices, the root spaces $\mathbb CE_{ij}$ of [[prop-root-systems-of-the-classical-complex-lie-algebras]], the simple roots $\alpha_1=\varepsilon_1-\varepsilon_2$, $\alpha_2=\varepsilon_2-\varepsilon_3$, and the adjoint representation of $\mathfrak g$ ([[def-adjoint-representation-of-a-lie-algebra]]).

[A1] The Axiom of Choice is assumed; it enters through the root-space and highest-weight theory used below ([[def-axiom-of-choice]]).

[L1] The adjoint representation of $\mathfrak{sl}_n(\mathbb C)$ has highest vector $E_{1n}$ and highest weight $\varepsilon_1-\varepsilon_n$, the highest root ([[ex-the-adjoint-representation-and-the-highest-root]], [[def-highest-weight-vector-and-highest-weight-module]]).

[L2] The roots of $\mathfrak{sl}_3$ are the six functionals $\varepsilon_i-\varepsilon_j$ with $i\ne j$, with one-dimensional root spaces $\mathbb CE_{ij}$; $\mathfrak h$ has dimension $2$, and the positive system is $\{\varepsilon_i-\varepsilon_j:i<j\}$ with $\alpha_1+\alpha_2=\varepsilon_1-\varepsilon_3$ ([[prop-root-systems-of-the-classical-complex-lie-algebras]]).

[L3] The fundamental weights satisfy $\omega_k(h_{\alpha_j})=\delta_{kj}$ with $h_{\alpha_j}=E_{jj}-E_{j+1,j+1}$; for $k=1,2$ one computes $(\varepsilon_1-\varepsilon_3)(h_{\alpha_1})=1=\omega_1(h_{\alpha_1})+\omega_2(h_{\alpha_1})$ and $(\varepsilon_1-\varepsilon_3)(h_{\alpha_2})=1=\omega_1(h_{\alpha_2})+\omega_2(h_{\alpha_2})$, so $\varepsilon_1-\varepsilon_3=\omega_1+\omega_2$ ([[def-fundamental-weights]], [[ex-standard-and-dual-representations-of-sl-n-by-highest-weights]]).

## Verification

**Proof technique:** direct.

1.1 By [L2] the adjoint module is $\mathfrak g=\mathfrak h\oplus\bigoplus_{i\ne j}\mathbb CE_{ij}$, so $\dim\mathfrak g=2+6=8$; the zero-weight space is $\mathfrak h$ of dimension $2$, and each of the six root spaces $\mathbb CE_{ij}$ is a one-dimensional weight space of weight $\varepsilon_i-\varepsilon_j$. [L2, A1]

1.2 By [L1] the adjoint module has highest vector $E_{13}$ and highest weight $\varepsilon_1-\varepsilon_3$; by [L2] and [L3] that weight is the highest root $\alpha_1+\alpha_2$ and equals $\omega_1+\omega_2$. [L1, L2, L3]

2.1 Collecting the dimensions and weights, the adjoint representation of $\mathfrak{sl}_3(\mathbb C)$ has dimension $8$, six one-dimensional root-weight spaces, a two-dimensional zero-weight space, and highest weight $\alpha_1+\alpha_2=\omega_1+\omega_2$, as asserted. [step 1.1, step 1.2] ∎
