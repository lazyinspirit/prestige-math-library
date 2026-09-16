---
id: prop-the-mod-two-bockstein-is-a-derivation
kind: proposition
title: The mod-two Bockstein is a derivation
status: published
origin: pipeline
deps: ["def-bockstein-connecting-operation", "thm-cup-product-leibniz-identity"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Hatcher, Algebraic Topology
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: Section 3.E, printed pages 303--304
---

## Statement

Let $m\geq1$ and let $\beta$ be the Bockstein associated to
$0\to\mathbb Z/m\xrightarrow{m}\mathbb Z/m^2\to\mathbb Z/m\to0$. If
$x\in H^p(X;\mathbb Z/m)$ and $y\in H^q(X;\mathbb Z/m)$, then

$$
\beta(x\smile y)=\beta(x)\smile y+(-1)^p x\smile\beta(y).
$$

In particular, for $m=2$ the sign disappears.

## Facts & Assumptions

**Given:** Cocycle representatives $\varphi$ of $x$ and $\psi$ of $y$.

[F1] For the mod-$m$ coefficient sequence, least nonnegative residue representatives give canonical cochain lifts without AC ([[def-bockstein-connecting-operation]]).

[F2] The positive-coboundary convention satisfies $\delta(\varphi\smile\psi)=\delta\varphi\smile\psi+ (-1)^p\varphi\smile\delta\psi$ ([[thm-cup-product-leibniz-identity]]).

## Proof

**Proof technique:** residue-lift calculation.

1.1 Choose the canonical lifts $\widetilde\varphi$ and $\widetilde\psi$ with values in $\mathbb Z/m^2$. Because $\varphi$ and $\psi$ are cocycles, there are uniquely determined $\mathbb Z/m$-cochains $\eta$ and $\mu$ such that $\delta\widetilde\varphi=m\eta$ and $\delta\widetilde\psi=m\mu$ in $\mathbb Z/m^2$. [given, F1]

2.1 These cochains represent the two Bocksteins. By the defining lift-and-coboundary construction, $[\eta]=\beta(x)$ and $[\mu]=\beta(y)$. [F1, step 1.1]

3.1 Compute the Bockstein of the product. The cochain $\widetilde\varphi\smile\widetilde\psi$ lifts $\varphi\smile\psi$, and [F2] gives [F2, step 1.1, step 2.1]

$$ \delta(\widetilde\varphi\smile\widetilde\psi)=m\bigl(\eta\smile\psi+(-1)^p\varphi\smile\mu\bigr). $$

Here multiplication by $m$ makes the expression depend only on the reductions of the displayed lifts modulo $m$. This product lift need not be the canonical residue lift used in [F1], so compare them explicitly. Their difference takes values in the kernel of reduction $\mathbb Z/m^2\to\mathbb Z/m$ and hence is uniquely $m h$ for a $\mathbb Z/m$-cochain $h$. Their coboundaries differ by $m\delta h$, so division by the injective copy of $\mathbb Z/m$ changes the resulting cocycle by the coboundary $\delta h$. Thus this noncanonical lift computes the same Bockstein class as the canonical lift.

4.1 Divide by the injective copy of $\mathbb Z/m$ and pass to cohomology. This yields the stated derivation identity. When $m=2$, $-1=1$ in the coefficient ring, so the parity sign is invisible. [F1, step 2.1, step 3.1] ∎