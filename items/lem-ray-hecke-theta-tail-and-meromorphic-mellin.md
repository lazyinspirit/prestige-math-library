---
dependency_level: 13
id: lem-ray-hecke-theta-tail-and-meromorphic-mellin
kind: lemma
title: Exponential theta tails and the two-constant meromorphic Mellin principle
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- lem-ray-hecke-unit-domain-mellin-identity
- lem-ray-hecke-signed-gaussian-theta-transformation
- thm-exponential-beats-every-polynomial
- thm-holomorphic-parameter-riemann-integral
- thm-weierstrass-convergence-holomorphic-functions
- thm-substitution-for-improper-integrals
- thm-dominated-convergence
- def-axiom-of-choice
- def-countable-choice
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
axiom_use: Assume AC and Countable Choice. Choice is inherited from the actual number-field, unit, lattice
  and integration suppliers; no cited external theorem is imported.
sources:
  references:
  - title: Jürgen Neukirch, Algebraic Number Theory, Chapter VII
    url: https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf
    locator: §8, Proposition8.4–Theorem8.5, printed501–503; elementary Mellin principle VII§1; full local
      finite-order specialization below.
---

## Statement

Assume AC and Countable Choice. In the unit-domain notation one has
$$f_{C,\chi}(t)=a_C+O(e^{-c t^{1/n}})\quad(t\to\infty)$$
for some $c>0$, and $f_{C,\chi}$ is continuous on $t>0$.

More generally, let continuous $f,g:(0,\infty)\to\mathbb C$ satisfy $f(t)=a+O(e^{-c t^\alpha})$, $g(t)=b+O(e^{-c t^\alpha})$ for $\alpha,c>0$ and $f(1/t)=W t^\kappa g(t)$, with $W\ne0$ and real $\kappa$. Initially for $\operatorname{Re}z>\max(\kappa,0)$ the Mellin transform $M_f(z)=\int_0^\infty(f(t)-a)t^z\,dt/t$ converges. It continues by
$$M_f(z)=-\frac a z+\frac{Wb}{z-\kappa}+\int_1^\infty\big((f(t)-a)t^z+W(g(t)-b)t^{\kappa-z}\big)\,\frac{dt}{t},$$
with the two rational terms combined if $\kappa=0$. The tail is entire and $M_f(z)=W M_g(\kappa-z)$ meromorphically. Therefore only possible simple poles are at $0,\kappa$; if $a=b=0$ the transform is entire. The formula applies to every partial Hecke class with $z=(s+e/n)/2$ and $\kappa=1/2+e/n$.

## Facts & Assumptions

**Given:** The stated data and the AC/CC branch.

[F1] The class theta series is a finite residue combination of full-lattice polynomial Gaussians, locally uniformly convergent, and unit averaging gives the exact Mellin identity and transformation. [[lem-ray-hecke-signed-gaussian-theta-transformation]] [[lem-ray-hecke-unit-domain-mellin-identity]]

[F2] Exponential decay dominates polynomial powers. [[thm-exponential-beats-every-polynomial]]

[F3] Compact-interval holomorphic parameter integrals are holomorphic and locally uniform limits of holomorphic functions are holomorphic. [[thm-holomorphic-parameter-riemann-integral]] [[thm-weierstrass-convergence-holomorphic-functions]]

[F4] Positive improper substitutions and dominated convergence apply. [[thm-substitution-for-improper-integrals]] [[thm-dominated-convergence]]

[A1] AC/CC are inherited from [F1] and the integration suppliers. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

1.1 Fix a class representative in [F1]. The corresponding ideal-number lattice is a fixed invertible real-linear image of $\mathbb Z^n$, with a positive shortest nonzero length and $O((1+R)^n)$ points in a ball of radius $R$. On the compact closure of the unit cell all positive coordinates $x_i$ are bounded above and away from zero. Consequently every nonzero summand at radial parameter $t$ is bounded by $C(1+|v|)^e\exp(-c_0t^{1/n}|v|^2)$. Splitting the lattice into integer-radius shells, with a separate finite first shell, and extracting one factor $\exp(-c_1t^{1/n})$ bounds the remaining series uniformly for $t\ge1$ by a convergent polynomial-Gaussian series using [F2]. Integration on the finite cell yields the claimed tail. The same estimate uniformly on compact $t$-intervals proves continuity by uniform convergence and compact integration. This includes nontrivial unramified class characters, whose zero coefficient is $\chi(C)$ rather than $1$. [F1, F2, F4, algebra]

1.2 For the general assertion, the transformation gives $f(t)-a=Wb t^{-\kappa}-a+W t^{-\kappa}(g(1/t)-b)$ at $0<t\le1$. The final term decays exponentially after inversion, so the initial half-plane gives absolute convergence. Split at $1$ and substitute $t\mapsto1/t$ on the small interval. The two elementary integrals are $-a/z$ and $Wb/(z-\kappa)$, and the remaining term is the second tail in the displayed formula. [F2, F4, given, algebra]

2.1 On every compact $z$-set, the tail integrands and all their fixed logarithmic powers are bounded by a single integrable function, because $e^{-ct^\alpha}$ dominates $t^B(1+\log t)^j$. Integration over $[1,R]$ is holomorphic by [F3]; the integrable uniform tail gives locally uniform convergence as $R\to\infty$, so [F3] makes the tail entire. This proves continuation and the possible poles without treating a mere differentiation heuristic as a proof. [F2, F3, F4, step 1.2, algebra]

3.1 The original transformation also gives $g(1/t)=W^{-1}t^\kappa f(t)$. Apply the same continued formula to $g$ at $\kappa-z$ and multiply by $W$: the rational terms become $-a/z+Wb/(z-\kappa)$ and the two entire tails exchange positions. This proves $M_f(z)=W M_g(\kappa-z)$ for all $z$ meromorphically. The theta functions in [F1] satisfy every hypothesis by step 1.1; their shifted Mellin parameter and exponent are precisely the ones already obtained by exact unit unfolding. [F1, step 1.1, step 1.2, step 2.1, algebra] ∎ 