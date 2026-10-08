---
id: ex-disc-monomial-bergman-basis-and-reproducing-check
kind: example
title: The disc Bergman kernel from its monomial basis, with a reproducing check
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 6
proof_strategy: direct
deps:
  - def-bergman-space-and-kernel
  - def-complex-integer-powers
  - def-countable-choice
  - lem-monomial-bases-of-bergman-spaces-of-disc-ball-and-polydisc
  - lem-monomial-integrals-over-disc-ball-and-polydisc
  - thm-bergman-basis-expansion-and-closedness
  - thm-bergman-reproducing-projection-and-extremal
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-model-domain-bergman-and-szego-kernels
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: Jiří Lebl, Tasty Bits of Several Complex Variables (book)
      url: https://www.jirka.org/scv/scv.pdf
      locator: >-
        §5.2, Example 5.2.3, printed pp. 162–163: the disc Bergman kernel
        formula. Exercise 5.2.9, printed p. 164, asks for the ball monomial
        system; the disc norm π/(k+1) and completeness used here are proved
        in the local monomial-integral and monomial-basis suppliers.
---

## Example

In $A^2(\mathbb D)$ with Lebesgue area measure the functions
$e_k(z)=\sqrt{(k+1)/\pi}\,z^k$, $k\ge0$, form a complete orthonormal system,
and

$$K_{\mathbb D}(z,w)=\sum_{k\ge0}\frac{k+1}{\pi}z^k\overline w^k=\frac{1}{\pi(1-z\overline w)^2}.$$

The reproducing property is checked directly on the monomials: for every
$k\ge0$ and $w\in\mathbb D$,

$$\int_{\mathbb D}e_k(z)\overline{K_{\mathbb D}(z,w)}\,d\lambda(z)=e_k(w).$$

## Facts & Assumptions

[A1] The only choice assumption is $\mathrm{AC}_\omega$ ([[def-countable-choice]]), inherited through the Bergman Hilbert-space, kernel and expansion suppliers; no full Axiom of Choice is used.

[F1] The monomials $z^k$, $k\ge0$, have squared norms $\|z^k\|_{A^2(\mathbb D)}^2=\pi/(k+1)$ and the normalized monomials form a complete orthonormal system of $A^2(\mathbb D)$ ([[lem-monomial-integrals-over-disc-ball-and-polydisc]], [[lem-monomial-bases-of-bergman-spaces-of-disc-ball-and-polydisc]]).

[F2] For every complete orthonormal system $(e_j)$ of $A^2(\Omega)$ one has $K_\Omega(z,w)=\sum_j e_j(z)\overline{e_j(w)}$, the finite-subset sums converge in $A^2(\Omega)$ to $K_\Omega(\cdot,w)$, and the series converges absolutely and uniformly on compact subsets ([[thm-bergman-basis-expansion-and-closedness]]).

[F3] The disc Bergman kernel is $K_{\mathbb D}(z,w)=\frac{1}{\pi(1-z\overline w)^2}$ and it satisfies the reproducing identity $\langle f,K_{\mathbb D}(\cdot,w)\rangle=f(w)$ for every $f\in A^2(\mathbb D)$ ([[thm-model-domain-bergman-and-szego-kernels]], [[thm-bergman-reproducing-projection-and-extremal]]).

[F4] The integral pairing is continuous in its second variable: $|\langle f,g\rangle|\le\|f\|_2\|g\|_2$ ([[thm-cauchy-schwarz-in-an-inner-product-space]], [[def-bergman-space-and-kernel]]).

[F5] Natural powers are defined recursively, so $z^k$ and $|z|^{2k}=z^k\overline z^{\,k}$ have their stated meanings ([[def-complex-integer-powers]]).

## Verification

**Proof technique:** direct, using the complete orthonormal monomial system.

**Given:** $\mathrm{AC}_\omega$, the unit disc with Lebesgue area measure, and $k\ge0$, $w\in\mathbb D$.

1.1 By [F1] the family $e_k(z)=\sqrt{(k+1)/\pi}\,z^k$ is a complete orthonormal system of $A^2(\mathbb D)$, with $\|z^k\|_2^2=\pi/(k+1)$; since $z,w\in\mathbb D$ we have $|z\overline w|<1$ for the geometric series. [A1, F1, F5, given]

2.1 By [F2] applied to this complete orthonormal system, $K_{\mathbb D}(z,w)=\sum_{k\ge0}e_k(z)\overline{e_k(w)}=\frac{1}{\pi}\sum_{k\ge0}(k+1)(z\overline w)^k$, and by [F3] this sum equals $\frac{1}{\pi(1-z\overline w)^2}$; this is the displayed series identity. [A1, F1, F2, F3, step 1.1]

3.1 Fix $k$ and $w$. The holomorphic Fourier sums $T_N:=\sum_{j\le N}\overline{e_j(w)}e_j$ converge in $A^2(\mathbb D)$ to $K_{\mathbb D}(\cdot,w)$ by [F2]. Continuity of the pairing [F4] gives $\int_{\mathbb D}e_k(z)\overline{K_{\mathbb D}(z,w)}\,d\lambda(z)=\lim_N\langle e_k,T_N\rangle$. For $N\ge k$, conjugate-linearity in the second variable and orthonormality give $\langle e_k,T_N\rangle=\sum_{j\le N}e_j(w)\langle e_k,e_j\rangle=e_k(w)$. This proves the reproducing integral. [A1, F1, F2, F4, step 2.1]

4.1 Step 2.1 identifies the displayed series with the disc Bergman kernel of [F3], and step 3.1 verifies the reproducing identity on every monomial. Since the monomial span is dense by [F1] and both sides of the reproducing identity are continuous in the first variable by [F4], the check extends to all of $A^2(\mathbb D)$ and agrees with the general reproducing theorem. [A1, F1, F2, F3, F4, step 2.1, step 3.1] ∎
