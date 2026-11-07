---
id: lem-ray-class-hecke-l-function-finite-euler-correction
kind: lemma
title: "Finite Euler correction from a ray-class Hecke L-series to its primitive series"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - def-finite-order-ray-class-hecke-character-and-l-function
  - lem-ray-class-character-finite-part-decomposition
  - lem-imprimitive-ray-class-hecke-finite-euler-correction
  - thm-finite-order-hecke-l-euler-product
  - thm-number-field-integral-ideal-factorisation-in-zf
  - thm-primitive-hecke-l-analytic-continuation-and-functional-equation
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
verification:
  precheck: pass
axiom_use: >-
  AC, Countable Choice, and DC are inherited from the ray-class and primitive
  Hecke-L suppliers. The finite Euler-factor comparison uses no further choice.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jürgen Neukirch, Algebraic Number Theory, Chapter VII §8, Proposition 8.1 and Theorem 8.5"
      url: "https://www.math.toronto.edu/~ila/Neukirch_Algebraic_number_theory.pdf"
      locator: "Printed pp.493–503: primitive and imprimitive Hecke L-series, finite Euler correction, and continuation/functional equation."
    - title: "J. S. Milne, Class Field Theory, version 4.03, Chapter VI §§2–3"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Printed pp.189–195: absolute convergence, Euler products, and Hecke L-functions."
---

## Statement

Assume AC, Countable Choice, and Dependent Choice. Let $K$ be a number field,
and let $\mathfrak m=(\mathfrak m_0,S_\infty)$ be a modulus, where
$\mathfrak m_0$ is a nonzero integral ideal and $S_\infty$ is a finite set
of real embeddings of $K$. Let $\chi$ be a
finite-order ray-class Hecke character modulo $\mathfrak m$. Let
$\mathfrak f_\chi=(\mathfrak f_{\chi,0},S_{\chi,\infty})\mid\mathfrak m$ be
its conductor and let $\chi^*$ be the primitive Hecke character of conductor
$\mathfrak f_\chi$ inducing $\chi$. Assume the following primitive analytic
input: every primitive finite-order Hecke L-function continues meromorphically
to $\mathbb C$, is entire for nontrivial character, and for the trivial
character has exactly a simple pole at $s=1$ and no other pole; its completed
function, with the conductor and Gamma factors specified by the ray-class
Hecke-character convention, satisfies
$$\Lambda(s,\chi^*)=\varepsilon_{\chi^*} \Lambda(1-s,\overline{\chi^*}),\qquad |\varepsilon_{\chi^*}|=1,$$
where $\overline{\chi^*}$ is obtained by complex-conjugating each character
value. For $\operatorname{Re}(s)>1$,
$$L_{\mathfrak m}(s,\chi)=L(s,\chi^*)E_\chi(s),\qquad E_\chi(s)=\prod_{\substack{\mathfrak p\mid\mathfrak m_0\\ \mathfrak p\nmid\mathfrak f_{\chi,0}}} \left(1-\chi^*(\mathfrak p)(N\mathfrak p)^{-s}\right).$$
The finite product $E_\chi$ is entire. Its zeros are precisely the solutions
of $\chi^*(\mathfrak p)(N\mathfrak p)^{-s}=1$ for at least one displayed
prime ideal, and each such solution has real part $0$; coincident zeros from
different factors have their orders added. The identity gives the meromorphic
continuation of $L_{\mathfrak m}$ supplied by that of the primitive function.
The only possible pole is the simple pole at $s=1$ for the trivial character,
and the finite factor does not cancel or create a pole there. At every point,
the order of a zero of $L_{\mathfrak m}$ is the sum of the zero orders of
$L(s,\chi^*)$ and $E_\chi(s)$, with coincident zeros counted additively.

## Statement references

[[def-finite-order-ray-class-hecke-character-and-l-function]]

[[lem-ray-class-character-finite-part-decomposition]]

[[thm-finite-order-hecke-l-euler-product]]

[[thm-number-field-integral-ideal-factorisation-in-zf]]

[[thm-primitive-hecke-l-analytic-continuation-and-functional-equation]]

## Facts & Assumptions

**Given:** AC, Countable Choice, and DC; a number field $K$, modulus $\mathfrak m$,
finite-order ray-class character $\chi$, its conductor $\mathfrak f_\chi$, and
the primitive character $\chi^*$ inducing it.

[F1] The ray-class L-series sums the extended character over integral ideals,
with value zero on ideals having a prime divisor of $\mathfrak m_0$. The
primitive inducing character and its conductor are given in the Statement;
this proof does not infer conductor uniqueness from the character definition.
[[def-finite-order-ray-class-hecke-character-and-l-function]]

[F2] The finite residue/sign decomposition gives the principal-ideal
character formula. In addition, every ray character has a primitive inducing
divisor and the stated finite Euler deletion identity; a primitive inducing
character at the conductor is part of the present Statement.
[[lem-ray-class-character-finite-part-decomposition]]
[[lem-imprimitive-ray-class-hecke-finite-euler-correction]]

[F3] For $\operatorname{Re}(s)>1$, the ray-class L-series has an absolutely
convergent Euler product over $\mathfrak p\nmid\mathfrak m_0$.
[[thm-finite-order-hecke-l-euler-product]]

[F4] Every nonzero integral ideal factors into a unique finite product of
nonzero prime ideals.
[[thm-number-field-integral-ideal-factorisation-in-zf]]

[A1] The primitive analytic input in the Statement is required for the
continuation and pole conclusions. Its carrier is present, but its proof
now contains a locally authored full unit-domain Mellin reconstruction
awaiting independent review. This lemma retains the explicit primitive
analytic hypothesis of its original Statement and makes no claim that the
new supplier proof has already been accepted.
[[thm-primitive-hecke-l-analytic-continuation-and-functional-equation]]

[A2] AC, Countable Choice, and DC are the explicit assumptions carried by
the ray-class character and primitive analytic interfaces. The Euler-factor
comparison itself uses no further choice.
[[def-axiom-of-choice]]
[[def-countable-choice]]
[[def-dependent-choice]]

## Proof

**Given:** The data and axioms in the Statement.

1.1 By the definition of conductor, $\chi$ factors through the ray-class quotient of modulus $\mathfrak f_\chi$; call the resulting character $\chi^*$. The minimality of that modulus makes $\chi^*$ primitive. For every prime $\mathfrak p\nmid\mathfrak m_0$, the quotient maps preserve its ray class, so $\chi(\mathfrak p)=\chi^*(\mathfrak p)$. [A2, F1, F2, given, construct]

1.2 Each factor of $E_\chi$ is an entire exponential polynomial. If $\chi^*(\mathfrak p)(N\mathfrak p)^{-s}=1$, taking absolute values gives $(N\mathfrak p)^{-\operatorname{Re}(s)}=1$, hence $\operatorname{Re}(s)=0$; conversely the equation itself describes every zero. Each factor has simple zeros because its derivative at a zero is $\chi^*(\mathfrak p)(N\mathfrak p)^{-s}\log(N\mathfrak p)=\log(N\mathfrak p)\ne0$. The finite product is entire, and orders add if factors vanish at the same point. [F4, given, algebra]

2.1 On $\operatorname{Re}(s)>1$, expand both Euler products using [F3] and its primitive instance. Their local factors agree at every $\mathfrak p\nmid\mathfrak m_0$. A prime dividing $\mathfrak f_{\chi,0}$ is omitted from both products. For each prime dividing $\mathfrak m_0$ but not $\mathfrak f_{\chi,0}$, the primitive product has factor $(1-\chi^*(\mathfrak p)(N\mathfrak p)^{-s})^{-1}$ while the imprimitive one has no factor. There are finitely many such primes by [F4]. Multiplying the primitive product by the displayed finite product removes exactly these factors, proving the identity. [F1, F3, F4, step 1.1, algebra]

3.1 By [A1], $L(s,\chi^*)$ has the stated meromorphic continuation and only the possible simple pole at $1$ in the trivial primitive case. Multiplying by the entire finite product in step 1.2 continues $L_{\mathfrak m}$, and a product of a meromorphic function with an entire function has zero order equal to the sum of its factor orders wherever both are finite. At $s=1$ every factor of $E_\chi$ is nonzero because $|\chi^*(\mathfrak p)(N\mathfrak p)^{-1}|=(N\mathfrak p)^{-1}<1$; hence it neither creates nor cancels the principal simple pole. [A1, A2, step 2.1, step 1.2, algebra] ∎

