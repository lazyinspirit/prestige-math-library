---
id: ex-hilbert-reciprocity-product-over-all-places
kind: example
title: "Quadratic reciprocity from the global Hilbert product"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 20
deps:
  - def-jacobi-symbol
  - thm-jacobi-symbol-multiplicativity
  - def-hilbert-symbol-over-a-rational-completion
  - thm-two-adic-hilbert-symbol-formula
  - thm-real-hilbert-symbol-formula
  - thm-global-power-reciprocity-law
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
axiom_use: >-
  The example inherits the axioms of the global and local reciprocity inputs;
  the finite Jacobi and sign calculations add no choice.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter VIII §5.11, quadratic specialization of power reciprocity, printed pp.247–248."
    - title: "J. Neukirch, Algebraic Number Theory, English translation"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "Chapter VI §8, quadratic reciprocity specialization, printed pp.416–417."
verification: {}
---

## Example

Let $a,b$ be coprime positive odd integers. For an odd positive integer
$d=\prod_p p^{e_p}$, let the Jacobi symbol be
$$\left(\frac{x}{d}\right)=\prod_p\left(\frac{x}{p}\right)^{e_p},$$
where $(x/p)$ is the Legendre symbol. Then the global power-residue
reciprocity formula for $K=\mathbb Q$ and $n=2$ gives
$$\left(\frac{a}{b}\right)\left(\frac{b}{a}\right) =(-1)^{((a-1)/2)((b-1)/2)}.$$

## Example references

[[def-jacobi-symbol]]

[[thm-jacobi-symbol-multiplicativity]]

[[def-hilbert-symbol-over-a-rational-completion]]

[[thm-two-adic-hilbert-symbol-formula]]

[[thm-real-hilbert-symbol-formula]]

[[thm-global-power-reciprocity-law]]

[Milne, *Class Field Theory*, VIII §5.11](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

[Neukirch, *Algebraic Number Theory*, VI §8](https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf)

## Facts & Assumptions

**Given:** Coprime positive odd integers $a,b$.

[F1] For $n=2$ over $\mathbb Q$, the global power reciprocity formula is
$$\left(\frac{a}{b}\right)_2\left(\frac{b}{a}\right)_2^{-1} =\prod_{v\in\{2,\infty\}}H_{v,2}(b,a),$$
where finite factors use $H_{v,2}(x,y)=\operatorname{rec}_v(y)(\sqrt x)/\sqrt x$.
[[thm-global-power-reciprocity-law]]

[F2] For odd $d=\prod_p p^{e_p}$, the Jacobi symbol is
$\left(\frac{x}{d}\right)=\prod_p\left(\frac{x}{p}\right)^{e_p}$;
it is $0$ exactly when $\gcd(x,d)>1$.
[[def-jacobi-symbol]]

[F3] The Jacobi symbol is multiplicative in its denominator and numerator,
including the value $1$ at denominator $1$.
[[thm-jacobi-symbol-multiplicativity]]

[F4] For odd $x,y\in\mathbb Q_2^\times$,
$$(x,y)_2=(-1)^{((x-1)/2)((y-1)/2)}$$
with exponents reduced modulo $2$; in the arithmetic convention,
$H_{2,2}(y,x)=(x,y)_2$.
[[thm-two-adic-hilbert-symbol-formula]]
[[def-hilbert-symbol-over-a-rational-completion]]

[F5] For positive real $x,y$, the real Hilbert factor is $1$.
[[thm-real-hilbert-symbol-formula]]

[L1] The global power-reciprocity item is conditional on the missing global
Artin proof recorded there; this example does not treat that dependency as
accepted. [[thm-global-power-reciprocity-law]]



exceptional local factors.

**Given:** The coprime positive odd integers $a,b$.

## Proof

**Proof technique:** direct.

1.1 Take $K=\mathbb Q$, $n=2$, and $S=\{2,\infty\}$. Since $a,b$ are odd, they are units at $2$; since $\gcd(a,b)=1$, no finite odd prime divides both. Thus the disjoint-support hypothesis of the global power theorem holds. By the definition of the global power-residue symbol and [F2]–[F3], the two symbols in [F1] are the Jacobi symbols $(a/b)$ and $(b/a)$. [F1, F2, F3, given]

2.1 Since $\gcd(a,b)=1$, [F2] makes each Jacobi symbol either $1$ or $-1$; therefore $(b/a)^{-1}=(b/a)$. [F2, step 1.1]

3.1 The archimedean factor in [F1] is $H_{\infty,2}(b,a)=1$ by positivity and [F5]. At $2$, [F4] gives $$H_{2,2}(b,a)=(a,b)_2 =(-1)^{((a-1)/2)((b-1)/2)}.$$ Substitution into [F1] and step 2.1 proves the displayed quadratic reciprocity identity. [F1, F4, F5, step 2.1, L1]

4.1 The only places in $S$ are $2$ and $\infty$, and both have been evaluated in step 3.1. If $b=1$, the Jacobi denominator has an empty factor list and equals $1$; if $a=1$, every Legendre factor in $(a/b)$ equals $1$. Thus the stated hypotheses include the boundary cases $a=1$ and $b=1$. This completes the example, conditional on [L1]. [F1, F2, step 1.1, step 3.1, L1] ∎

## Unresolved

All local and Jacobi evaluations are explicit. The global application depends
on the power-reciprocity item, which remains escalated because its global
Hilbert-product supplier is missing.
