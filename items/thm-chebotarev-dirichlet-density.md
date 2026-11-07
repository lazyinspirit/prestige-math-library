---
id: thm-chebotarev-dirichlet-density
kind: theorem
title: "Chebotarev Dirichlet density for a conjugacy-stable set"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 27
deps:
  - def-chebotarev-prime-ideal-counting-function
  - def-dirichlet-density-of-prime-ideals
  - lem-prime-ideals-of-relative-degree-at-least-two-have-zero-dirichlet-density
  - lem-number-field-extension-ramified-at-finitely-many-places
  - lem-abelian-chebotarev-dirichlet-density
  - thm-global-artin-reciprocity-and-norm-index
  - thm-number-field-ray-class-field-artin-isomorphism
  - thm-ray-class-primes-dirichlet-density
  - thm-fundamental-theorem-of-finite-galois-theory
  - thm-fundamental-identity-for-primes-in-number-fields
  - thm-ramification-and-residue-degrees-in-towers
  - thm-decomposition-inertia-exact-sequence
  - def-decomposition-group-of-a-prime
  - def-inertia-group-of-a-prime
  - thm-unramified-frobenius-element-exists-uniquely
  - thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group
  - thm-galois-action-on-primes-above-a-prime-is-transitive
  - thm-orbit-stabilizer
  - def-conjugacy-class-and-centralizer
  - cor-orders-of-decomposition-and-inertia-groups
  - thm-frobenius-elements-above-a-prime-are-conjugate
  - def-prime-above-and-residue-degree
  - def-absolute-norm-of-an-ideal
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC, Countable Choice, and DC enter only through the global Artin, ray-class
  field, and ray-class density inputs used by the abelian reduction. They are
  inherited through those dependency edges. The nonabelian centralizer and
  prime-fiber count is finite and choice-free.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter VIII §7, Theorem 7.4 and complete proof, printed pp. 259–260."
    - title: "Romyar Sharifi, Algebraic Number Theory, Chapter 7"
      url: "https://www.math.ucla.edu/~sharifi/notes/algnum-ch07.html"
      locator: "§7.2, Theorem 7.2.2 and complete proof; its cyclotomic input is Proposition 7.2.1."
    - title: "Jürgen Neukirch, Algebraic Number Theory"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "Chapter VII §13.4, Theorem (13.4) and complete proof, printed pp. 545–546; ray-class density input in §13.2, Theorem (13.2)."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice, Countable Choice, and Dependent Choice. Let $L/F$ be a finite Galois extension of number fields, let $G=\operatorname{Gal}(L/F)$, and let $C\subseteq G$ be stable under conjugation, meaning $gCg^{-1}=C$ for every $g\in G$. Let $S_C$ be the set of nonzero prime ideals $\mathfrak p\subseteq\mathcal O_F$ that are unramified in $L$ and whose arithmetic Frobenius conjugacy class lies in $C$. Using absolute ideal norm, the Dirichlet density is
$$\delta_F(S_C)=\lim_{s\downarrow1,\ s>1}\frac{\displaystyle\sum_{\mathfrak p\in S_C}(N_{F/\mathbb Q}\mathfrak p)^{-s}}{\log(1/(s-1))}=\frac{|C|}{|G|}.$$

## Statement references

[[def-chebotarev-prime-ideal-counting-function]]

[[def-dirichlet-density-of-prime-ideals]]

[[lem-abelian-chebotarev-dirichlet-density]]

[[thm-global-artin-reciprocity-and-norm-index]]

[[thm-number-field-ray-class-field-artin-isomorphism]]

[Milne, Class Field Theory, VIII §7, Theorem 7.4](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

[Sharifi, Algebraic Number Theory, Chapter 7, §7.2, Theorem 7.2.2](https://www.math.ucla.edu/~sharifi/notes/algnum-ch07.html)

[Neukirch, Algebraic Number Theory, VII §13.4, Theorem (13.4)](https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf)

## Facts & Assumptions

**Given:** AC, Countable Choice, Dependent Choice; a finite Galois extension $L/F$ of number fields; its Galois group $G$; and a conjugacy-stable subset $C\subseteq G$.

[F1] [[def-dirichlet-density-of-prime-ideals]]: For a set $S$ of nonzero prime ideals of $F$, Dirichlet density means the limit of $\sum_{\mathfrak p\in S}(N\mathfrak p)^{-s}/\log(1/(s-1))$ as real $s\downarrow1$, when it exists.

[F2] [[thm-fundamental-theorem-of-finite-galois-theory]]: For a finite Galois extension $L/F$ with group $G$ and subgroup $H$, the fixed field $M=L^H$ satisfies $\operatorname{Gal}(L/M)=H$ and $[L:M]=|H|$.

[F3] [[thm-fundamental-identity-for-primes-in-number-fields]] [[def-prime-above-and-residue-degree]] [[def-absolute-norm-of-an-ideal]]: For a finite extension, $\sum_{\mathfrak P\mid\mathfrak p}e(\mathfrak P/\mathfrak p)f(\mathfrak P/\mathfrak p)=[L:K]$; the residue degree is $[\kappa(\mathfrak P):\kappa(\mathfrak p)]$ and $N\mathfrak p=|\kappa(\mathfrak p)|$.

[F4] [[thm-ramification-and-residue-degrees-in-towers]]: Ramification indices and residue degrees multiply in a tower of finite extensions.

[F5] [[def-decomposition-group-of-a-prime]] [[def-inertia-group-of-a-prime]] [[thm-decomposition-inertia-exact-sequence]] [[cor-orders-of-decomposition-and-inertia-groups]]: $D(P/p)=\{\gamma\in G:\gamma P=P\}$ is the stabilizer of $P$, and $I(P/p)$ is the kernel of its residue action. Reduction gives the exact sequence $1\to I(P/p)\to D(P/p)\to\operatorname{Gal}(\kappa(P)/\kappa(p))\to1$; if the prime is unramified, $I(P/p)=1$ and $|D(P/p)|=f(P/p)$.

[F6] [[thm-unramified-frobenius-element-exists-uniquely]] [[thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group]]: For an unramified prime $P\mid p$, arithmetic Frobenius is the unique element inducing $x\mapsto x^{Np}$; this power map generates the cyclic residue Galois group of order $f(P/p)$.

[F7] [[thm-galois-action-on-primes-above-a-prime-is-transitive]]: In a finite Galois extension of number fields, the Galois group acts transitively on the primes above a fixed prime.

[F8] [[def-conjugacy-class-and-centralizer]] [[thm-orbit-stabilizer]]: The conjugacy orbit of $\tau$ has stabilizer $C_G(\tau)=\{\gamma\in G:\gamma\tau=\tau\gamma\}$; orbit-stabilizer gives its size $|G|/|C_G(\tau)|$.

[F9] [[lem-prime-ideals-of-relative-degree-at-least-two-have-zero-dirichlet-density]]: For a finite extension $M/F$ of number fields, the prime ideals $\mathfrak q$ of $M$ with $f(\mathfrak q/\mathfrak p)\ge2$ have Dirichlet density zero.

[F10] [[lem-number-field-extension-ramified-at-finitely-many-places]]: A finite extension of number fields ramifies at only finitely many finite places.

[F11] [[lem-abelian-chebotarev-dirichlet-density]]: For every finite abelian extension and singleton arithmetic Frobenius element, the Dirichlet density is $1/|G|$. Its modulus/Frobenius quotient and analytic ray-class inputs are now supplied; the existing finite centralizer and prime-fibre reduction below applies at these exact AC/CC/DC hypotheses.

## Proof

**Given:** The data above.

1.1 It is enough first to prove the result when $C$ is a single conjugacy class. If $C=\varnothing$, then $S_C=\varnothing$ and the density is zero. For a nonempty single class, choose $\sigma\in C$, put $f=\operatorname{ord}(\sigma)$, $H=\langle\sigma\rangle$, $M=L^H$, $d=|G|$, and $c=|C|$. By [F2], $L/M$ is cyclic of degree $f$. [F2, given, choose]

2.1 Let $U_\sigma$ be the prime ideals $\mathfrak q$ of $M$ unramified in $L/M$ with arithmetic Frobenius $\sigma$, and let $T_\sigma\subseteq U_\sigma$ consist of those for which $\mathfrak p=\mathfrak q\cap\mathcal O_F$ is unramified in $L/F$ and $f(\mathfrak q/\mathfrak p)=1$. By [F11], $U_\sigma$ has density $1/f$. The removed primes above ramified $\mathfrak p$ form a finite set: [F10] gives finitely many such $\mathfrak p$, and [F3] bounds the number of $\mathfrak q$ above each. The primes with $f(\mathfrak q/\mathfrak p)\ge2$ lie in the zero-density set [F9]. A finite set has bounded Dirichlet sum as $s\downarrow1$, while the denominator in [F1] tends to infinity; a subset of a zero-density set also has zero normalized sum. Hence removing these exceptions leaves density $1/f$. [F11, F1, F3, F9, F10, step 1.1, algebra]

2.2 Fix $\mathfrak p\in S_C$ and a prime $P_0\mid\mathfrak p$ in $L$, and write $\tau=\operatorname{Frob}_{P_0}$. Since $\mathfrak p$ is unramified, [F5]–[F6] imply $D(P_0/\mathfrak p)=\langle\tau\rangle$ of order $f$. By [F7], primes $P\mid\mathfrak p$ are the orbit of $P_0$ with stabilizer $D(P_0/\mathfrak p)$, so each prime is represented by exactly $f$ elements of $G$. Under conjugation, the orbit of $\tau$ is $C$, so [F8] gives $|C_G(\tau)|=d/c$. Exactly $d/c$ elements $\gamma\in G$ satisfy $\gamma\tau\gamma^{-1}=\sigma$; dividing by the $f$ representatives of each prime shows that exactly $d/(cf)$ primes $P\mid\mathfrak p$ have Frobenius element $\sigma$. [F5, F6, F7, F8, step 1.1, given, algebra]

3.1 The primes $P\mid\mathfrak p$ with Frobenius element $\sigma\in H$ correspond bijectively to the primes $\mathfrak q\in T_\sigma$ above $\mathfrak p$: $\sigma$ fixes $M$, so its residue action is the identity on $\kappa(\mathfrak q)$. Since $\mathfrak p$ is unramified in $L/F$, $e(P/\mathfrak p)=1$; ramification indices multiply in the tower by [F4], so $e(\mathfrak q/\mathfrak p)=1$. The arithmetic residue Frobenius on $\kappa(\mathfrak q)$ therefore has order $f(\mathfrak q/\mathfrak p)$, so identity action forces $f(\mathfrak q/\mathfrak p)=1$. Conversely, for $\mathfrak q\in T_\sigma$, $N\mathfrak q=N\mathfrak p$, so the relative and base arithmetic Frobenius actions are the same residue power map, and the relative Frobenius $\sigma$ is the base Frobenius element. There is exactly one $P$ above such a $\mathfrak q$, since $L/M$ has degree $f$ and its unramified Frobenius has order $f$, by [F3]–[F6]. Thus every $\mathfrak p\in S_C$ has exactly $d/(cf)$ primes of $T_\sigma$ above it, and every prime in $T_\sigma$ lies over $S_C$. Their norms agree because $f(\mathfrak q/\mathfrak p)=1$. [F3, F4, F5, F6, step 2.1, step 2.2, algebra]

4.1 For every real $s>1$, the constant fiber count and equal norms in step 3.1 give $\sum_{\mathfrak p\in S_C}(N\mathfrak p)^{-s}=\frac{cf}{d}\sum_{\mathfrak q\in T_\sigma}(N\mathfrak q)^{-s}$. Divide by $\log(1/(s-1))$ and let $s\downarrow1$. By step 2.1 the right-hand density is $(cf/d)(1/f)=c/d$, proving the theorem for a single conjugacy class. [F1, step 2.1, step 2.2, step 3.1, algebra]

5.1 For general $C$, partition it into its finitely many conjugacy classes $C_j$. The corresponding prime sets are disjoint, and their Dirichlet series add; applying step 4.1 to each class gives $\delta_F(S_C)=\sum_j|C_j|/d=|C|/|G|$. This also includes $C=\varnothing$ as handled in step 1.1. [F1, step 1.1, step 4.1, given, algebra] ∎
