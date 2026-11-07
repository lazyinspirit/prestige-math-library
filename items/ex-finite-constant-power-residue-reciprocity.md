---
id: ex-finite-constant-power-residue-reciprocity
kind: example
title: 'A finite-constant power-residue product over $\mathbb F_7(t)$'
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 17
deps:
  - thm-function-field-product-formula-for-local-norm-residue-symbols
  - lem-finite-local-artin-actions-and-tame-symbols-in-zf
  - thm-multiplicative-group-of-a-finite-field-is-cyclic
  - thm-finite-unramified-local-extensions-classified-by-residue-extensions
  - lem-hensel-factor-lifting-over-a-complete-valued-field
proof_strategy: direct
axiom_use: >-
  The existing finite-field computation uses the recorded ZF finite Artin
  action/tame formula and the recorded unqualified global product theorem.
  No ambient choice axiom or full local Artin-map existence is invoked.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, second edition"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "Appendix A.7–A.13, printed pp.131–137: function-field global product."
    - title: "Seok Ho Yoon, Global Function Field Class Field Theory"
      url: "https://arxiv.org/pdf/1610.07486"
      locator: "§§3.3.1–3.4 and the constant-field Frobenius convention."
verification: {}
---

## Example

Let $F=\mathbb F_7(t)$, whose exact constant field is $\mathbb F_7$, and
let $n=3$. The element $2\in\mathbb F_7$ is a primitive cube root of unity;
put $a=2$, $b=t$, and choose $\alpha$ with $\alpha^3=2$. Then
$F(\alpha)=\mathbb F_{7^3}(t)$ is the constant extension of degree $3$.
With arithmetic Frobenius normalization, the local norm-residue factors are
$$H_{0,3}(2,t)=4,\qquad H_{\infty,3}(2,t)=2,\qquad
H_{v,3}(2,t)=1\quad(v\ne0,\infty),$$
so their product is $4\cdot2=1$ in $\mu_3(\mathbb F_7)$.

## Example references

[[thm-function-field-product-formula-for-local-norm-residue-symbols]]

[[lem-finite-local-artin-actions-and-tame-symbols-in-zf]]

[[thm-multiplicative-group-of-a-finite-field-is-cyclic]]

[[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]

[[lem-hensel-factor-lifting-over-a-complete-valued-field]]

## Facts & Assumptions

**Given:** The exact constant function field $F=\mathbb F_7(t)$, $n=3$,
$a=2$, $b=t$, and $\alpha^3=2$.

[F1] The global function-field product formula asserts that the product of
the local factors $\operatorname{rec}_{F_v}(b)(\alpha_v)/\alpha_v$ over all
closed places equals $1$. [[thm-function-field-product-formula-for-local-norm-residue-symbols]]

[F2] The multiplicative group of a finite field is cyclic. In
$\mathbb F_7^\times$ of order $6$, the cube image has order $2$; since
$2$ has order $3$, it is not a cube and $X^3-2$ is irreducible.
[[thm-multiplicative-group-of-a-finite-field-is-cyclic]]

[F3] In a finite unramified local extension arithmetic Frobenius acts on
residues by $x\mapsto x^q$, and a uniformizer maps to that Frobenius.
[[lem-finite-local-artin-actions-and-tame-symbols-in-zf]]

[F4] The choice-free finite Artin action on an unramified extension is arithmetic Frobenius to the valuation of its input. Thus a unit acts trivially. [[lem-finite-local-artin-actions-and-tame-symbols-in-zf]]

[F5] For $p\nmid n$, the choice-free finite tame formula with first entry a unit $u$ and second entry of valuation $r$ is $\rho_n(u)^r$, with residue $\bar u^{(q-1)/n}$. [[lem-finite-local-artin-actions-and-tame-symbols-in-zf]]

[F6] A separable polynomial over the finite residue field has its roots in a
finite residue extension; simple roots lift to an unramified local extension.
[[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]
[[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[L1] The global product theorem is now recorded at its original unqualified scope. The local finite-action and tame computations used here are also recorded choice-free; the former AC-only local Artin and stale global-class-formation holds no longer apply to this finite example. [[thm-function-field-product-formula-for-local-norm-residue-symbols]] [[lem-finite-local-artin-actions-and-tame-symbols-in-zf]]

## Proof

**Proof technique:** determine the constant Kummer extension, compute the
two nonunit local factors by arithmetic Frobenius, and kill all unit factors
by the finite unramified Artin action.

**Given:** The data in the Example.

1.1 In $\mathbb F_7$, $2^3=1$ and $2\ne1$, so $2$ has order $3$ and is a
primitive cube root of unity. The cube map on $\mathbb F_7^\times$ has image
of size $6/\gcd(3,6)=2$ by [F2]. Its image is $\{1,6\}$, so $2$ is not a cube.
The cubic $X^3-2$ therefore has no root in $\mathbb F_7$ and, being cubic,
is irreducible. Its root $\alpha$ lies in $\mathbb F_{7^3}$, so
$F(\alpha)=\mathbb F_{7^3}(t)$; the constant extension has degree $3$.
[F2, given, algebra]

2.1 At $v=0$, the completion is $\mathbb F_7((t))$ and the constant
extension is unramified of degree $3$. Arithmetic Frobenius sends
$\alpha\mapsto\alpha^7$, so [F3] gives
$$H_{0,3}(2,t)=\alpha^7/\alpha=\alpha^6=(\alpha^3)^2=2^2=4.$$
At $v=\infty$, use the uniformizer $u=t^{-1}$. Since $t=u^{-1}$,
$\operatorname{rec}(t)=\operatorname{rec}(u)^{-1}$; its action on $\alpha$
has ratio $4^{-1}=2$ in the order-three group. Thus
$H_{\infty,3}(2,t)=2$. [F3, step 1.1]

2.2 At every other place, $t$ is a unit. The reduction of $X^3-2$ is
separable because the residue characteristic is $7$; [F6] puts its roots in
a finite residue extension and lifts them to an unramified local extension.
Thus each local factor extension is unramified, and [F4] makes the finite action of the unit $t$ trivial, so the local factor is $1$. Equivalently, [F5] gives exponent $v(t)=0$.
Thus all factors outside $0,\infty$ are $1$. [F4, F5, F6, step 1.1]

3.1 The product of the explicitly computed factors is
$4\cdot2=8\equiv1\pmod7$. This is the stated product and agrees with [F1];
the global proof behind [F1] is now supplied as recorded in [L1].
[F1, L1, step 2.1, step 2.2] ∎

## Completion

The existing explicit local calculation includes both nonunit places and every other closed place. Its global product supplier and the finite local Artin actions are now recorded at the same unqualified scope. The public Example is unchanged; this refresh removes only stale supplier holds and their obsolete dependency metadata.
