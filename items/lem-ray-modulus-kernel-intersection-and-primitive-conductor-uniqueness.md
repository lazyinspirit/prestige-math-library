---
dependency_level: 10
id: lem-ray-modulus-kernel-intersection-and-primitive-conductor-uniqueness
kind: lemma
title: Ray-modulus kernel intersection and uniqueness of primitive conductors
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-global-field-modulus
- def-ray-class-group
- def-finite-order-ray-class-hecke-character-and-l-function
- thm-weak-approximation-for-global-fields
- lem-imprimitive-ray-class-hecke-finite-euler-correction
- thm-number-field-integral-ideal-factorisation-in-zf
- thm-ideal-norm-is-multiplicative
- def-axiom-of-choice
- def-countable-choice
- def-absolute-norm-of-an-ideal
- lem-nonzero-number-field-ideal-has-finite-quotient
- thm-number-field-discriminant-is-well-defined-and-nonzero
justified_by: []
proof_strategy: direct
axiom_use: AC and Countable Choice are inherited from the actual number-field weak-approximation and ray-map
  suppliers. The construction uses only finite extra selections and imposes units at all ambient primes.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: A. R. Weiss, The least prime ideal, §1
    url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN243919689_0338/PPN243919689_0338.pdf
    locator: 'Printed58–61: primitive conductors, Euler products and Theorem1.9 formulation/sketch. The
      complete local argument below is independently reconstructed, not imported from that sketch.'
  - title: Jürgen Neukirch, Algebraic Number Theory, VII§§6–8
    url: https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf
    locator: Ray characters, primitive induction and finite Euler comparison; actual local suppliers are
      used at their exact number-field hypotheses.
---

## Statement

Assume AC and Countable Choice. Let $K$ be a number field and $\mathfrak m=(\mathfrak m_0,S_\infty)$ a modulus. For a divisor $\mathfrak f\mid\mathfrak m$, write $\pi_{\mathfrak m,\mathfrak f}:\operatorname{Cl}_{\mathfrak m}(K)\twoheadrightarrow\operatorname{Cl}_{\mathfrak f}(K)$ for the natural map. Define gcd and lcm of moduli by minimum and maximum finite prime exponents and intersection and union of the selected real places. If $\mathfrak f_1,\mathfrak f_2\mid\mathfrak m$ and $\mathfrak g=\gcd(\mathfrak f_1,\mathfrak f_2)$, then
$$\ker\pi_{\mathfrak m,\mathfrak g}=(\ker\pi_{\mathfrak m,\mathfrak f_1})(\ker\pi_{\mathfrak m,\mathfrak f_2}).$$
A character modulo $\mathfrak m$ factoring through both divisors therefore factors through their gcd. Every finite-order ray-class character has a unique least inducing divisor, its conductor, and a unique primitive inducing character at that divisor. Two primitive characters with identical pullbacks to a common multiple have identical full conductors and are the same character. The trivial character has conductor $(\mathcal O_K,\varnothing)$.

For primitive characters $\chi_1,\chi_2$ with conductors $\mathfrak f_1,\mathfrak f_2$, the primitive inducing character $\psi$ of their product has conductor dividing $\mathfrak l=\operatorname{lcm}(\mathfrak f_1,\mathfrak f_2)$. If $D_K=|d_K|$ and $d_i=D_KN\mathfrak f_{i,0}$, then
$$N\mathfrak l_0\le N\mathfrak f_{1,0}N\mathfrak f_{2,0},\qquad d_\psi\le d_1d_2/D_K.$$
The primitive inducing character of $\chi_1^2$ has conductor dividing $\mathfrak f_1$ and conductor discriminant at most $d_1$.

## Facts & Assumptions

**Given:** The moduli, characters and AC/CC branch in the Statement.

[F1] Ray classes use ideals prime to the finite modulus modulo principal congruences and the prescribed positive real signs. Modulus divisibility weakens these conditions. [[def-global-field-modulus]] [[def-ray-class-group]] [[def-finite-order-ray-class-hecke-character-and-l-function]]

[F2] The natural ray maps are surjective by the proved number-field weak-approximation construction. A finite-order character has a primitive inducing divisor, without uniqueness being assumed there. [[lem-imprimitive-ray-class-hecke-finite-euler-correction]]

[F3] At finitely many number-field places, weak approximation realizes simultaneously open congruence, local-unit and real-sign conditions. Only its number-field proof is used. [[thm-weak-approximation-for-global-fields]]

[F4] Integral ideals have finite unique prime factorizations and multiplicative positive integer norms; the quotient defining the norm is finite and nonempty. The field discriminant is a nonzero integer, so $D_K=|d_K|\ge1$. [[thm-number-field-integral-ideal-factorisation-in-zf]] [[thm-ideal-norm-is-multiplicative]] [[def-absolute-norm-of-an-ideal]] [[lem-nonzero-number-field-ideal-has-finite-quotient]] [[thm-number-field-discriminant-is-well-defined-and-nonzero]]

[A1] AC and CC are the explicit number-field supplier hypotheses. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

**Given:** The stated data.

1.1 Put $K_i=\ker\pi_{\mathfrak m,\mathfrak f_i}$ and $K_g=\ker\pi_{\mathfrak m,\mathfrak g}$. Divisibility gives $K_1K_2\subseteq K_g$ by [F1]. For $x\in K_g$, choose an ideal $\mathfrak a$ prime to $\mathfrak m_0$ representing it. The smaller ray class is the identity, so $\mathfrak a=(\alpha)$ for some $\alpha\in K^\times$ congruent to $1$ at $\mathfrak g_0$ and positive on the selected real places of $\mathfrak g$. Since $\mathfrak a$ is prime to $\mathfrak m_0$, $v_{\mathfrak p}(\alpha)=0$ at every $\mathfrak p\mid\mathfrak m_0$. [A1, F1, F2, given, choose, algebra]

2.1 For each $\mathfrak p\mid\mathfrak m_0$, let $e_i=v_{\mathfrak p}(\mathfrak f_{i,0})$. If $e_1\ge e_2$, prescribe $\beta_1\equiv1\pmod{\mathfrak p^{\max(1,e_1)}}$; if $e_2>e_1$, prescribe $\beta_1\equiv\alpha\pmod{\mathfrak p^{e_2}}$. Thus $\beta_1$ is explicitly a local unit at EVERY ambient prime, including $e_1=e_2=0$. The congruences imply both $\beta_1\equiv1\pmod{\mathfrak f_{1,0}}$ and $\beta_1\equiv\alpha\pmod{\mathfrak f_{2,0}}$, since $\alpha\equiv1$ to the minimum exponent. At a real place of $\mathfrak f_1$ prescribe $\beta_1>0$; at one of $\mathfrak f_2$ prescribe its sign to equal that of $\alpha$. These agree on the intersection because $\alpha$ is positive there. By [F3] the finitely many open conditions admit a nonzero $\beta_1\in K$; if there are no conditions choose $\beta_1=1$. Set $\beta_2=\alpha/\beta_1$. It is a local unit at every ambient prime, is $1$ modulo $\mathfrak f_{2,0}$, and is positive at its selected real places. Both principal ideals are therefore prime to $\mathfrak m_0$, their classes lie respectively in $K_1,K_2$, and their product is $x$. This proves $K_g=K_1K_2$. [F1, F3, step 1.1, choose, construct, algebra]

3.1 A character factoring through both maps kills both kernels and hence their product. By step 2.1 and surjectivity [F2], it descends uniquely through their gcd. The divisor moduli of $\mathfrak m$ form a finite set by [F1] and [F4]. The nonempty set of inducing divisors is closed under gcd, so the gcd of that finite set belongs to it and divides every member. It is its unique least element. The descended character is primitive, since a further proper descent would contradict leastness. If primitive characters at $\mathfrak f_1,\mathfrak f_2$ have the same pullback to a common multiple, gcd descent and surjectivity factor each through their gcd; primitivity forces equality of both moduli with that gcd, and surjectivity forces equality of the characters. The trivial character factors through $(\mathcal O_K,\varnothing)$, which is the least modulus. [F1, F2, F4, step 2.1, algebra]

4.1 Pull the product character back to $\mathfrak l$ and apply step 3.1; its conductor divides $\mathfrak l$. Prime exponents satisfy $\max(e_1,e_2)\le e_1+e_2$, so [F4] gives $N\mathfrak l_0\le N\mathfrak f_{1,0}N\mathfrak f_{2,0}$. Multiplying by $D_K$ yields $d_\psi\le d_1d_2/D_K$. The square is already a character modulo $\mathfrak f_1$, so its primitive conductor divides that modulus by step 3.1. The statements include unit finite moduli, empty selected real-place sets and ambient primes absent from both smaller finite moduli. [F1, F4, step 3.1, algebra] ∎ 