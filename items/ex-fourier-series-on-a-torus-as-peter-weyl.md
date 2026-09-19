---
id: ex-fourier-series-on-a-torus-as-peter-weyl
kind: example
title: Fourier series on a torus as Peter–Weyl
status: draft
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
---

## Example

Assume the Axiom of Choice. For $T^r=(\mathbb R/\mathbb Z)^r$ the irreducible
unitary representations are the characters
$x\mapsto e^{2\pi i\langle n,x\rangle}$, $n\in\mathbb Z^r$, and Peter–Weyl is
the usual Fourier orthonormal basis theorem on the torus.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice; the torus $T^r$ with normalized Haar measure $dx$ and its characters $e_n(x)=e^{2\pi i\langle n,x\rangle}$.

[L1] The characters $e_n$, $n\in\mathbb Z^r$, form an orthonormal Hilbert basis of $L^2(T^r)$ with the usual Fourier expansion and Parseval identity ([[thm-fourier-basis-and-parseval-on-the-n-torus]]).

[L2] The matrix coefficients of representatives of the irreducible unitary representations of a compact group form a Hilbert basis of $L^2$ ([[thm-peter-weyl-for-compact-lie-groups]]).

[L3] The character lattice of $T^r$ is $\mathbb Z^r$ with generators $e_n$ ([[prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t]]).

[L4] Over $\mathbb C$, every endomorphism of an irreducible group representation is scalar ([[cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars]]).

## Verification

**Proof technique:** direct.

1.1 Let $\pi:T^r\to U(V)$ be irreducible. Since $T^r$ is abelian, every $\pi(t)$ commutes with every $\pi(s)$ and hence belongs to $\operatorname{End}_{T^r}(V)$; by [L4], every $\pi(t)$ is scalar. Thus every linear subspace of $V$ is invariant, so irreducibility and $V\ne0$ force $\dim V=1$. Therefore $\pi$ is a character, and by [L3] the characters are exactly the $e_n$, $n\in\mathbb Z^r$. [L3, L4, algebra]

2.1 Peter–Weyl [L2] therefore says exactly that the one-dimensional representations $e_n$, with matrix coefficients proportional to them, form an orthonormal Hilbert basis of $L^2(T^r)$ and that the regular representation is their Hilbert direct sum weighted by dimension one. [L2, step 1.1]

3.1 This is precisely the statement of [L1] for the exponential basis, including the Fourier expansion and Parseval identity, so Fourier series on the torus is the abelian case of Peter–Weyl. [L1, step 2.1] ∎
