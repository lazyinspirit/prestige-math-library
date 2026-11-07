---
id: ex-strong-brumer-stark-for-q-sqrt-minus-twenty-three
kind: example
title: "Strong Brumer–Stark for Q(√−23) with an admissible S,T"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 27
deps:
  - def-smoothed-stickelberger-element-for-abelian-cm-extension
  - def-t-smoothed-ray-class-group-of-cm-extension
  - def-minus-pontryagin-dual-class-group
  - def-sinnott-kurihara-ideal-for-a-cm-extension
  - def-fitting-ideal-of-a-finitely-presented-module
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - def-absolute-norm-of-an-ideal
  - def-discriminant-of-a-number-field-basis-and-order
  - def-ideal-class-group-of-a-domain
  - def-group-ring
  - thm-group-ring-is-a-unital-algebra-with-basis-g
  - thm-group-ring-is-commutative-iff-the-group-is-abelian
  - def-axiom-of-choice
  - def-countable-choice
  - def-number-field-regulator
  - cor-trace-and-norm-of-an-algebraic-integer
  - thm-principal-ideal-norm-is-absolute-field-norm
  - thm-ideal-norm-is-multiplicative
  - thm-minkowski-bound-for-ideal-classes
  - thm-ray-class-exact-sequence
  - thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula
  - thm-dedekind-zeta-euler-product
  - thm-gamma-meromorphic-continuation
  - thm-fundamental-identity-for-primes-in-number-fields
  - thm-decomposition-inertia-exact-sequence
  - thm-special-values-of-riemann-zeta-at-integers
  - thm-localisation-of-modules-is-exact
  - thm-ramified-primes-and-the-number-field-discriminant
  - def-decomposition-group-of-a-prime
  - def-inertia-group-of-a-prime
  - def-arithmetic-frobenius-coset
  - thm-constructible-inner-model-semantic-and-formal-schema
  - thm-delta-zero-absoluteness-for-transitive-sets
  - thm-identity-theorem-holomorphic-functions
  - lem-totally-real-abelian-artin-l-values-at-zero-in-zf
proof_strategy: direct
axiom_use: >-
  No ambient choice axiom is used; the existing conditional arithmetic calculation is applied inside the constructible universe.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Samit Dasgupta and Mahesh Kakde, On the Brumer–Stark Conjecture"
      url: "https://math.iisc.ac.in/~maheshkakde/brumerstark.pdf"
      locator: "§1.1, printed pp. 3–7: S,T hypotheses, class-group convention, and Strong Brumer–Stark/Kurihara formulas."
    - title: "J. S. Milne, Algebraic Number Theory, version 3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
      locator: "Chapter 4, Theorem 4.3, ideal-class Minkowski bound; Chapter 5, regulator convention."
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter V §1, ray-class residue exact sequence, printed pp. 149–150."
    - title: "Jürgen Neukirch, Algebraic Number Theory"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "Chapter VII §5, analytic class-number formula at s=0; Chapter VII §10, Artin Euler factors."
    - title: "The Stacks Project, More on Algebra, Section 15.8"
      url: "https://stacks.math.columbia.edu/tag/07Z6"
      locator: "Definition 15.8.3: zeroth Fitting ideal from maximal minors."
---

## Example

Let $H=\mathbb Q(\sqrt{-23})$, $F=\mathbb Q$, $G=\operatorname{Gal}(H/F)=\{1,j\}$, $w=(1+\sqrt{-23})/2$, $S=\{\infty,23\}$, and $T=\{2,3\}$. Put $R=\mathbb Z[1/2]$. The data satisfy the Strong Brumer–Stark hypotheses. In the minus ring $\mathbb Z[G]^-=R$, the minus Pontryagin dual of $\operatorname{Cl}_T(H)$ is $R/3R$, its zeroth Fitting ideal is $(3)$, the minus coordinate of $\Theta_{S,T}^{H/F\,\#}$ is $6$, and $\operatorname{SKu}_T(H/F)^-=(3)$. Thus the Kurihara equality and Strong Brumer–Stark containment both hold for this extension.

## Example references

[[def-smoothed-stickelberger-element-for-abelian-cm-extension]]

[[def-t-smoothed-ray-class-group-of-cm-extension]]

[[def-minus-pontryagin-dual-class-group]]

[[def-sinnott-kurihara-ideal-for-a-cm-extension]]

[[def-fitting-ideal-of-a-finitely-presented-module]]

[Dasgupta and Kakde — §1.1, printed pp. 3–7](https://math.iisc.ac.in/~maheshkakde/brumerstark.pdf)

[Milne — Algebraic Number Theory, Chapter 4, Theorem 4.3](https://www.jmilne.org/math/CourseNotes/ANT.pdf)

[Milne — Class Field Theory, Chapter V §1](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

[Neukirch — Algebraic Number Theory, Chapter VII §5 and §10](https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf)

[The Stacks Project — Section 15.8](https://stacks.math.columbia.edu/tag/07Z6)

## Facts & Assumptions

**Given:** The extension, sets $S,T$, and notation in the Example, in ZF.

[F1] For a degree-$n$ number field of signature $(r_1,r_2)$, every ideal class contains an integral ideal of norm at most $(4/\pi)^{r_2}(n!/n^n)\sqrt{|d_K|}$. [[thm-minkowski-bound-for-ideal-classes]]

[F2] The ray-class residue sequence for a modulus with no selected real places is $\mathcal O_H^\times\to\prod_{\mathfrak P\mid\mathfrak m_T}(\mathcal O_H/\mathfrak P)^{\times}\to\operatorname{Cl}_T(H)\to\operatorname{Cl}(\mathcal O_H)\to1$. [[thm-ray-class-exact-sequence]]

[F3] The completed Dedekind zeta function has residue $-2^{r_1+r_2}h_KR_K/w_K$ at $s=0$, and its archimedean factors are $\Gamma_{\mathbb R}(s)=\pi^{-s/2}\Gamma(s/2)$ and $\Gamma_{\mathbb C}(s)=2(2\pi)^{-s}\Gamma(s)$. [[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]]

[F4] $\operatorname{Res}_{s=0}\Gamma(s)=1$. [[thm-gamma-meromorphic-continuation]]

[F5] The Riemann zeta value is $\zeta(0)=-1/2$. [[thm-special-values-of-riemann-zeta-at-integers]]

[F6] Under the zero-dimensional logarithmic-unit convention, the regulator of an imaginary quadratic field is $1$. [[def-number-field-regulator]]

[F7] The zeroth Fitting ideal is generated by the maximal minors of a finite presentation matrix; in particular, for $R/3R$ the presentation $R\xrightarrow{3}R\to R/3R\to0$ gives $(3)$. [[def-fitting-ideal-of-a-finitely-presented-module]]

[F8] For $\operatorname{Re}(s)>1$, the Dedekind zeta function is the Euler product over nonzero prime ideals. [[thm-dedekind-zeta-euler-product]]

[F9] A rational prime ramifies in a number field exactly when it divides the field discriminant. [[thm-ramified-primes-and-the-number-field-discriminant]]

[F10] The norm of a principal integral ideal is the absolute field norm, and ideal norms are multiplicative. [[thm-principal-ideal-norm-is-absolute-field-norm]] [[thm-ideal-norm-is-multiplicative]]

[F11] Localization preserves short exact sequences. [[thm-localisation-of-modules-is-exact]]

[F12] For a finite extension of degree $2$, the sum of ramification index times residue degree above each rational prime is $2$. [[thm-fundamental-identity-for-primes-in-number-fields]]

[F13] The inertia subgroup is the kernel of reduction from the decomposition group, and the quotient is the residue-field Galois group generated by arithmetic Frobenius. [[def-decomposition-group-of-a-prime]] [[def-inertia-group-of-a-prime]] [[thm-decomposition-inertia-exact-sequence]] [[def-arithmetic-frobenius-coset]]

[F14] The trace and field norm of an algebraic integer belong to $\mathbb Z$. [[cor-trace-and-norm-of-an-algebraic-integer]]

[F15] Character interpolation gives $\chi(\Theta_{S,T}^{H/F\,\#})=L_{S,T}(\chi,0)$ for the quadratic character $\chi=\chi^{-1}$. [[def-smoothed-stickelberger-element-for-abelian-cm-extension]]

[A1] Inside the constructible universe, the Minkowski bound, ray-class exact sequence, and analytic class-number formula suppliers use its internal AC. [[def-axiom-of-choice]] [[thm-minkowski-bound-for-ideal-classes]] [[thm-ray-class-exact-sequence]] [[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]]

[A2] Inside the constructible universe, the ray-class exact-sequence supplier uses its internal Countable Choice as well as AC. [[def-countable-choice]] [[thm-ray-class-exact-sequence]]

[F16] In ZF, each fixed ZFC proof can be applied inside the transitive constructible universe $\mathcal L$, which has the ambient ordinals and natural numbers; bounded arithmetic statements about common coded data are absolute. [[thm-constructible-inner-model-semantic-and-formal-schema]] [[thm-delta-zero-absoluteness-for-transitive-sets]]

[F17] In ZF, the complete Artin Euler product for a character of a finite abelian extension of a totally real field has an analytic continuation from its Euler-product germ to a neighborhood of zero, with a finite value equal to the transferred constructible-universe value. [[lem-totally-real-abelian-artin-l-values-at-zero-in-zf]]

[F18] Two holomorphic functions on a complex domain which agree on a set with an interior accumulation point agree everywhere. [[thm-identity-theorem-holomorphic-functions]]

## Verification

**Given:** The Example data. Steps 1.1–10.1 are carried out inside $\mathcal L$, where [F16] supplies the AC and Countable Choice used in [A1]–[A2]; step 11.1 transfers the conclusions to the ambient universe.

1.1 The element $w$ satisfies $w^2-w+6=0$, so it is an algebraic integer. If $\alpha=a+b\sqrt{-23}\in\mathcal O_H$ with $a,b\in\mathbb Q$, [F14] gives $m:=2a\in\mathbb Z$ and $a^2+23b^2\in\mathbb Z$. Hence $23(2b)^2=4(a^2+23b^2)-m^2\in\mathbb Z$, so $n:=2b\in\mathbb Z$ because $23$ is squarefree. The norm integrality says $m^2+23n^2\equiv0\pmod4$; since $23\equiv3\pmod4$, $m,n$ have the same parity. Thus $\alpha=(m-n)/2+n w\in\mathbb Z[w]$, proving $\mathcal O_H=\mathbb Z[w]$. [F14, given, algebra]

2.1 The conjugate of $w$ is $1-w$, so $\operatorname{Tr}(w)=1$, $N(w)=6$, and $w^2=w-6$ gives $\operatorname{Tr}(w^2)=-11$. The trace matrix for $(1,w)$ is $\begin{pmatrix}2&1\\1&-11\end{pmatrix}$, with determinant $-23$; hence $d_H=-23$. Also $N(a+bw)=a^2+ab+6b^2=(a+b/2)^2+23b^2/4$. A unit has positive norm $1$, forcing $b=0$ and $a=\pm1$, so $\mathcal O_H^\times=\mu(H)=\{\pm1\}$. By [F9], only $23$ ramifies; at any prime above $3$, $-1\equiv2\ne1$, so the root-of-unity condition holds. [F9, given, algebra, step 1.1]

3.1 Modulo $2$, $X^2-X+6=X(X-1)$ has two distinct roots; modulo $3$ it is also $X(X-1)$. Therefore both primes split: $2\mathcal O_H=\mathfrak p_2\bar{\mathfrak p}_2$ and $3\mathcal O_H=\mathfrak p_3\bar{\mathfrak p}_3$, with $\mathfrak p_p=(p,w)$ and $\bar{\mathfrak p}_p=(p,w-1)$, each of norm $p$. Thus $S$ contains $S_\infty\cup S_{\mathrm{ram}}$, $T$ is disjoint from $S$, and the Frobenius at $2$ and $3$ is the identity in $G$. [step 1.1, step 2.1, F9, F13, algebra]

4.1 The degree-two imaginary Minkowski bound [F1] is $M_H=(4/\pi)(2!/2^2)\sqrt{23}=2\sqrt{23}/\pi<4$. Every ordinary ideal class therefore has an integral representative of norm $1$, $2$, or $3$. The only norm-$2$ ideals are $\mathfrak p_2,\bar{\mathfrak p}_2$, and the only norm-$3$ ideals are $\mathfrak p_3,\bar{\mathfrak p}_3$, by the quotient factorizations in step 3.1. Directly from their generators, $(2)=\mathfrak p_2\bar{\mathfrak p}_2$, $(3)=\mathfrak p_3\bar{\mathfrak p}_3$, and $(w)=\mathfrak p_2\mathfrak p_3$: for the last equality, $\mathfrak p_2\mathfrak p_3=(6,2w,3w,w^2)\subseteq(w)$ since $6=w(1-w)$, while $w=3w-2w$ belongs to the product. Hence every class is among $1,[\mathfrak p_2],[\mathfrak p_2]^{-1}$. [A1, F1, step 3.1, algebra]

5.1 If $\mathfrak p_2$ were principal, [F10] would give an element of norm $2$, impossible from the norm form in step 2.1. If $\mathfrak p_2^2$ were principal, its norm would be $4$ by [F10]; the norm form then forces the generator to be $\pm2$, whose ideal is $(2)=\mathfrak p_2\bar{\mathfrak p}_2\ne\mathfrak p_2^2$. Thus $[\mathfrak p_2]$ has order greater than $2$, and the at-most-three classes in step 4.1 show $\operatorname{Cl}(\mathcal O_H)\cong C_3$. [F10, step 2.1, step 4.1, algebra]

6.1 The residue group in [F2] has order $1\cdot1\cdot2\cdot2=4$: the two residue fields above $2$ are $\mathbb F_2$, and those above $3$ are $\mathbb F_3$. The image of $\mathcal O_H^\times=\{\pm1\}$ has order $2$ because $-1$ is nontrivial modulo the primes above $3$. Therefore the kernel of $\operatorname{Cl}_T(H)\to\operatorname{Cl}(\mathcal O_H)$ has order $2$, and $|\operatorname{Cl}_T(H)|=2\cdot3=6$. Localizing the exact sequence at $2$ kills this kernel by [F11], so $\operatorname{Cl}_T(H)\otimes R\cong\operatorname{Cl}(\mathcal O_H)\otimes R\cong R/3R$ as $G$-modules. [A1, A2, F2, F11, step 2.1, step 5.1, algebra]

7.1 Complex conjugation sends $\mathfrak p_2$ to $\bar{\mathfrak p}_2$; since $(2)=\mathfrak p_2\bar{\mathfrak p}_2$, it acts by inversion on the generator of $\operatorname{Cl}(\mathcal O_H)\cong C_3$. The localized ray class map in step 6.1 is $G$-equivariant, so $j$ acts by inversion on $\operatorname{Cl}_T(H)\otimes R$. Its dual character group is also $C_3$ with contragredient inversion, hence all of $\operatorname{Cl}_T(H)^{\vee}\otimes R$ is the minus part and is isomorphic to $R/3R$. By [F7], its zeroth Fitting ideal is $(3)$. [F7, step 5.1, step 6.1, algebra]

8.1 In the group setting of step 7.1, let $\chi$ be the nontrivial character of $G$, so $\chi(j)=-1$. At every rational prime $p$, the degree-two identity [F12] gives split, inert, or ramified type. The local Euler factors of $\zeta_H(s)$ are respectively $(1-p^{-s})^{-2}$, $(1-p^{-2s})^{-1}$, or $(1-p^{-s})^{-1}$; the corresponding Artin factors of $\zeta_{\mathbb Q}(s)L(\chi,s)$ are the same, since $\chi(\operatorname{Frob})=1$ at split primes, $-1$ at inert primes, and its inertia factor is $1$ at ramified primes by [F13]. By [F8], $\zeta_H(s)=\zeta(s)L(\chi,s)$ for $\operatorname{Re}(s)>1$, and this identity gives the analytic continuation of $L(\chi,s)$ near $0$. The residue of $\Lambda_H$ at $0$ is $-2h_HR_H/w_H=-3$ by [F3], using $h_H=3$ from step 5.1, $R_H=1$ from [F6], and $w_H=2$ from step 2.1. Meanwhile $|d_H|^{s/2}\Gamma_{\mathbb C}(s)$ has residue $2$ there by [F4]; hence $\zeta_H(0)=-3/2$. With [F5], $L(\chi,0)=(-3/2)/(-1/2)=3$. The prime $23$ is ramified, so its S-depletion factor for $\chi$ is $1$; the split primes $2,3$ give T-factors $1-2=-1$ and $1-3=-2$. By [F15], the minus coordinate of $\Theta_{S,T}^{H/F\,\#}$ is $L_{S,T}(\chi,0)=6$. [A1, F3, F4, F5, F6, F8, F12, F13, F15, step 2.1, step 3.1, step 5.1, step 7.1, algebra]

9.1 For the trivial character, $L_{S_\infty,T}(1,0)=\zeta(0)(1-2)(1-3)=-1$ by [F5] and [F15]. The ramified Euler factor at $23$ for $\chi$ is $1$ by step 8.1, so the two character values of $\Theta_{S_\infty,T}^{H/F\,\#}$ are $-1$ and $6$. Fourier inversion gives
$$\Theta_{S_\infty,T}^{H/F\,\#}=-1\,\frac{1+j}{2}+6\,\frac{1-j}{2}=\frac52-\frac72j\in\mathbb Q[G].$$
Thus the rationality hypothesis in the Sinnott–Kurihara definition is verified for this example. [F5, F15, step 8.1, algebra]

10.1 Here $I_{23}=G$, $N I_{23}=1+j$, $e_{23}=(1+j)/2$, and the Frobenius coset in $G/I_{23}$ is trivial, so choose $\sigma_{23}=1$. The local fractional module $(N I_{23},1-\sigma_{23}e_{23})_{\mathbb Z[G]}=(1+j,e^-)$ projects to the unit ideal in the minus ring: $1+j$ projects to $0$ and $e^-$ to $1$. The base element has minus coordinate $6$ by step 9.1. Thus $\operatorname{SKu}_T(H/F)^-=(6)=(3)$ in $R$, since $2$ is a unit. Comparing with step 7.1 proves the Kurihara equality in this example. By step 8.1, the minus coordinate of $\Theta_{S,T}^{H/F\,\#}$ is $6$, which belongs to $(3)$; this proves the Strong Brumer–Stark containment in this example. [F13, step 7.1, step 8.1, step 9.1, algebra]

11.1 The field $H=\mathbb Q(w)$ has the explicit rational multiplication table $w^2=w-6$. Its elements are rational pairs and, by step 1.1, its integers are integer pairs; these codes and their operations are the same in $\mathcal L$ and the ambient universe. Every additive subgroup of $\mathbb Z^2$ has finite generators in ZF: project to the first coordinate, choose its least positive generator and one preimage when nonzero, then take a generator of the kernel. Thus every integral ideal is a finite integer code in $\mathcal L$ and has the same members in both universes. Fractional ideals have finite denominators, so the same holds for them. The ray-class equivalence relation is the existence of a rational-pair generator satisfying finitely many integral congruences; its quantifiers range over the same coded countable field. Therefore the ordinary and $T$-ray class groups, their order and conjugation action agree with those computed in steps 4.1–7.1. Their finite character duals, the $R$-module $R/3R$ and its Fitting ideal are the same finite algebraic data in both universes. [F16, step 1.1, step 5.1, step 6.1, step 7.1, algebra, step 10.1]

12.1 The character values in step 8.1 are also absolute. By [F17], the ambient Artin Euler product has a continuation to zero. The proof of [F17] extends the internal continuation along a finite chain of rational discs using the same internal Taylor coefficients and geometric convergence bounds; at zero the extended series has the same constant coefficient. Its first disc agrees with the ambient Euler-product germ, so [F18] identifies it with the ambient continuation. Hence the values $L(\chi,0)=3$ and $L_{S,T}(\chi,0)=6$ obtained in $\mathcal L$ are the ambient values. The local inertia groups, rational Euler factors and $\operatorname{SKu}_T(H/F)^-$ generators are finite data from the same multiplication tables and ideal codes, so the computations of steps 9.1–10.1 transfer unchanged. This proves every assertion of the Example without an ambient choice hypothesis. [F16, F17, F18, step 8.1, step 9.1, step 10.1, step 11.1, algebra] ∎
