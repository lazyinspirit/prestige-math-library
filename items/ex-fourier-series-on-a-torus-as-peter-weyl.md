---
id: ex-fourier-series-on-a-torus-as-peter-weyl
kind: example
title: Fourier series on a torus as Peter–Weyl
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-peter-weyl-for-compact-lie-groups, thm-fourier-basis-and-parseval-on-the-n-torus, def-axiom-of-choice, prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t, cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §3 (abelian case: Fourier series)"
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Example

Assume the Axiom of Choice. For each integer $r\ge0$ and $T^r=(\mathbb R/\mathbb Z)^r$ the irreducible
finite-dimensional continuous unitary representations are the characters
$x\mapsto e^{2\pi i\langle n,x\rangle}$, $n\in\mathbb Z^r$, and Peter–Weyl is
the usual Fourier orthonormal basis theorem on the torus.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice; the torus $T^r$ with normalized Haar measure $dx$ and its characters $e_n(x)=e^{2\pi i\langle n,x\rangle}$.

[A1] The standing Axiom of Choice ([[def-axiom-of-choice]]) covers the choice assumptions of the character, Peter–Weyl and Fourier suppliers.

[L1] For $r\ge1$, the characters $e_n$, $n\in\mathbb Z^r$, form an orthonormal Hilbert basis of $L^2(T^r)$ with the usual Fourier expansion and Parseval identity ([[thm-fourier-basis-and-parseval-on-the-n-torus]]).

[L2] The normalized matrix coefficients of representatives of the irreducible unitary representations of a compact group form a Hilbert basis of $L^2$ ([[thm-peter-weyl-for-compact-lie-groups]]).

[L3] The character lattice of $T^r$ is $\mathbb Z^r$ with elements $e_n$ ([[prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t]]).

[L4] Over $\mathbb C$, every endomorphism of an irreducible group representation is scalar ([[cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars]]).

## Verification

**Proof technique:** direct.

1.1 Let $\pi:T^r\to U(V)$ be a finite-dimensional continuous irreducible representation. Since $T^r$ is abelian, every $\pi(t)$ commutes with every $\pi(s)$ and hence belongs to $\operatorname{End}_{T^r}(V)$; by [L4], every $\pi(t)$ is scalar. Thus every linear subspace of $V$ is invariant, so irreducibility and $V\ne0$ force $\dim V=1$. Therefore $\pi$ is a character, and [L3] computes the characters: the quotient exponential $\mathbb R^r\to\mathbb R^r/\mathbb Z^r$ has kernel $\mathbb Z^r$, so its allowed differentials are exactly $\lambda(X)=2\pi i\sum_j n_jX_j$ with $n_j\in\mathbb Z$. Thus the characters are exactly the $e_n$; distinct integer vectors have distinct differentials. Conversely each $e_n$ is a continuous unitary one-dimensional representation and hence irreducible. [L3, L4, algebra]

2.1 Peter–Weyl [L2] therefore says exactly that the one-dimensional representations $e_n$, with their sole normalized matrix coefficient exactly $e_n$, form an orthonormal Hilbert basis of $L^2(T^r)$ and that the regular representation is their Hilbert direct sum weighted by dimension one. In the fixed left-action convention $L_y e_n=e_n(-y)e_n$, so the coefficient line has type $e_{-n}$; negation permutes $\mathbb Z^r$ and every character still occurs once. [L2, step 1.1]

3.1 For $r\ge1$, [L1] gives the Fourier expansion and Parseval identity for precisely the basis identified in step 2.1. For $r=0$, the torus is a singleton, its normalized Haar measure has mass one at that point, and $\mathbb Z^0$ consists of the empty tuple alone. Its sole character is $e_0=1$ and $L^2(T^0)=\mathbb C$ with basis $1$; the expansion is $f=f(e)1$ and Parseval is $\|f\|_2^2=|f(e)|^2$. Thus the zero-rank case is proved directly without applying [L1] outside its scope. The AC assumptions of the suppliers are covered by [A1]. [A1, L1, step 2.1] ∎
