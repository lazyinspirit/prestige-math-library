---


id: def-schwartz-functions-on-the-total-real-ideal-space
kind: definition
title: "Schwartz functions on the totally real ideal space"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-totally-real-ray-class-group-and-norm-character
  - thm-number-field-finite-weak-approximation-in-zf
  - thm-ray-class-group-finite
  - thm-chinese-remainder-theorem-for-comaximal-ideals
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
dependency_level: 20
justified_by: []
axiom_use: >-
  AC, Countable Choice, and DC enter through the inverse-limit ideal space and ray-class/Artin interfaces defining the domain and sign action.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "P. Deligne and K. A. Ribet"
      url: "https://math.berkeley.edu/~ribet/Articles/deligne-ribet.pdf"
      locator: "\u00a72.11\u20132.12, pp. 241\u2013242; \u00a7\u00a74\u20136, pp. 254\u2013273; \u00a78, pp. 277\u2013285."
    - title: "O. Venjakob"
      url: "https://www.mathi.uni-heidelberg.de/~otmar/papervenjakob/Deligne-Ribet-revised.pdf"
      locator: "pp. 10\u201318: moduli, all-cusp q-expansion and integrality discussion."
verification: {}
---
## Definition

Assume AC, Countable Choice, and DC through the inverse-limit ideal-space interface. Let $K$ be totally real and let $\mathcal I_K$ be its Deligne–Ribet inverse-limit ideal space. A Schwartz function on $\mathcal I_K$ is a complex-valued function $\phi$ that is locally constant and compactly supported. Its conductor is any positive rational integer $m$ such that $\phi$ factors through the discrete reduction quotient $I_{(m)}$ at $m$ (this whole quotient need not be finite; its restriction to a bounded-denominator piece is finite). A $\mathbb Q$-valued (respectively $\mathbb Z$-valued) Schwartz function is one whose values all lie in $\mathbb Q$ (respectively $\mathbb Z$). For a sign vector $s=(s_\sigma)_\sigma\in\{\pm1\}^d$, let $c_s$ be its class in $\mathcal G_K$ under the archimedean sign-idèle action with all finite components equal to $1$. The function $\phi$ has parity $(-1)^k$ if $\phi(c_sx)=\left(\prod_\sigma s_\sigma^k\right)\phi(x)$ for every $x\in\mathcal I_K$ and every sign vector $s$.

## Definition references

[[def-totally-real-ray-class-group-and-norm-character]]

[P. Deligne and K. A. Ribet, §§2–3](https://math.berkeley.edu/~ribet/Articles/deligne-ribet.pdf)


## Facts & Assumptions

**Given:** The inverse-limit ideal space and its strict congruence quotients in the Definition, with the original AC/CC/DC assumptions.

[F1] Finite weak approximation with all real signs and finite conductor conditions. [[thm-number-field-finite-weak-approximation-in-zf]]

[F2] The strict ray class groups are finite under AC and Countable Choice. [[thm-ray-class-group-finite]]

[F3] Finite Chinese remainders for comaximal ideals. [[thm-chinese-remainder-theorem-for-comaximal-ideals]]

## Proof

**Proof technique:** construct the finite-level sign action and normalize the conductor convention.

For clarity, the strict ideal congruence used here is the source relation
$\mathfrak a\sim_{\mathfrak f}\mathfrak b$ if
$\mathfrak a=(\alpha)\mathfrak b$ with $\alpha$ totally positive and
$\alpha-1\in\mathfrak f\mathfrak b^{-1}$. Its restriction to integral ideals
forms $A_{\mathfrak f}$, with unit group $G_{\mathfrak f}$, the strict ray
class group. The quotient of ALL fractional ideals $I_{\mathfrak f}$ is
discrete and generally infinite. The topology on $\mathcal I_K$ is the
inverse-limit topology of these discrete quotients. No surjectivity of the
norm on $\mathcal G_K$, nor any class-field existence theorem, is needed
for the definition or action below.

1.1 Fix a sign vector $s$ and a conductor $\mathfrak f$. Finite weak
approximation [[thm-number-field-finite-weak-approximation-in-zf]] supplies
$\alpha\in K^\times$ congruent to $1$ at the prime powers of
$\mathfrak f$ and with precisely signs $s$. Let $c_{s,\mathfrak f}$ be the
strict ray class of $(\alpha)$. Another such $\beta$ gives a totally positive
ratio $\alpha/\beta$ congruent to $1$ modulo $\mathfrak f$, so the class is
independent of that witness. Multiplication of witnesses proves
$c_{s,\mathfrak f}c_{t,\mathfrak f}=c_{st,\mathfrak f}$ and
$c_{1,\mathfrak f}=1$. Under conductor reduction the same representative
works. These UNIQUE classes therefore form $c_s\in\varprojlim G_{\mathfrak f}$,
without choosing representatives simultaneously. This is the finite-level
meaning of the archimedean sign-idèle class, with finite components $1$.
Its possible inversion from the reciprocity convention makes no difference:
$c_s^2=1$. [F1, given, construct]

2.1 On $\mathcal A_K=\varprojlim A_{\mathfrak f}$, define the action
componentwise by multiplication by $c_{s,\mathfrak f}$. The finite-level
monoid products and reduction maps commute, so this defines a continuous
involution, and the group law in step 1.1 gives an action of the sign group.
Here a ray class can be represented by an integral prime-to-conductor ideal.
For a fractional prime-to-$\mathfrak f$ ideal $\mathfrak q$, set
$\mathfrak d=\mathfrak q^{-1}\cap\mathcal O_K$; it is a nonzero integral
ideal coprime to $\mathfrak f$. By [F3] choose $\beta_0\in\mathfrak d$
with $\beta_0\equiv1\pmod{\mathfrak f}$. Choose a positive rational integer
$H\in\mathfrak d\mathfrak f$. For a sufficiently large integer $t$,
$\beta=\beta_0+tH$ is positive under every real embedding and has the same
congruences. Then $(\beta)\mathfrak q$ is integral, remains prime to
$\mathfrak f$, and represents the same strict ray class. [F3, step 1.1, given, algebra]

3.1 We spell out extension from integral to fractional ideal space. For a
positive rational integer $D$, let $\mathcal I^{D^{-1}}$ be the subset whose
fractional ideal classes have denominators bounded by $D$. Multiplication
by $D$ identifies this with $\mathcal A_K$. At finite level this follows
directly from
$\mathfrak a\sim_{\mathfrak f}\mathfrak b$ if and only if
$D\mathfrak a\sim_{D\mathfrak f}D\mathfrak b$; indeed the defining condition
$\alpha-1\in\mathfrak f\mathfrak b^{-1}$ is identical on the two sides.
Every element lies in some such piece: choose a fractional representative
of its component at conductor $(1)$, clear its denominator by $D$, and note
that congruent ideals have identical integrality at a prime whenever the
conductor there lies inside the denominator bound. Explicitly, if
$\mathfrak a=(\alpha)\mathfrak b$ and
$\alpha-1\in\mathfrak f\mathfrak b^{-1}$, then $(\alpha-1)\mathfrak b\subseteq\mathfrak f$, so
$\mathfrak a+\mathfrak f=\mathfrak b+\mathfrak f$ as additive submodules
of $K$; thus, whenever
$\mathfrak f\subseteq D^{-1}\mathcal O_K$, membership of a representative
in $D^{-1}\mathcal O_K$ is determined by its congruence class. Compatibility
with the conductor $(1)$ component first bounds the negative valuations,
and only finitely many denominator primes occur.
Define $c_s x=D^{-1}(c_s(Dx))$. This does not depend on $D$: two choices
are compared using a common multiple, and multiplication by an integral
ideal commutes with the ray-unit action. Hence it is a continuous action
on all of $\mathcal I_K$, preserving denominator pieces. [step 2.1, given, algebra]

4.1 Finally, a locally constant compactly supported function factors through
some $I_{(m)}$. Cover its compact support by finitely many congruence cylinders
on each of which it is constant, all contained in one denominator piece;
these can be taken inside that piece since its membership is detected at
sufficiently deep finite level as in step 3.1. Choose one positive integer
$m$ whose principal conductor refines all these finitely many conductors.
Their union is then saturated for reduction at $(m)$, as is its complement,
where the function is zero. Thus the function factors through that reduction.
On a fixed denominator piece its reduction has finite image: multiplication
by $D$ identifies that image with a quotient of the finite integral ray monoid
$A_{D(m)}$. Finiteness of $A_{\mathfrak f}$ follows by grouping integral ideals
according to their greatest common divisor with $\mathfrak f$; the finitely
many pieces are strict ray class groups at divisors of $\mathfrak f$, finite
by [[thm-ray-class-group-finite]] under the stated AC/CC assumptions.
This justifies the conductor convention with the corrected distinction
between a discrete quotient and its finite bounded-denominator part. [F2, step 3.1, given, algebra]

## Reading limits

The retained Deligne–Ribet OCR was read at printed pages239–243, definitions
(2.1)–(2.10) and the finite/inverse-limit constructions, and at printed246
on compactly supported locally constant functions. The construction above
is local mathematics, not an import of the paper's Artin-surjectivity or
norm-surjectivity assertions. All original AC/CC/DC assumptions and the
parity formula remain in force.
