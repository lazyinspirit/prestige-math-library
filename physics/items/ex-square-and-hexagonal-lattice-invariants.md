---
id: ex-square-and-hexagonal-lattice-invariants
kind: example
title: "Square and hexagonal lattice invariants"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-complex-lattice-and-complex-torus
  - def-weierstrass-elliptic-p-function
  - thm-weierstrass-p-differential-equation
  - thm-weierstrass-lattice-discriminant-is-nonzero
  - def-complex-exponential
  - thm-complex-exponential-addition-and-real-extension
  - thm-kernel-and-fibres-of-complex-exponential
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-complex-numbers-form-a-field
  - def-complex-numbers-and-arithmetic
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - lem-complex-conjugation-and-modulus-laws
  - def-complex-integer-powers
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms, Ch. 3, pp. 41-47"
      url: https://www.jmilne.org/math/CourseNotes/MF.pdf
      locator: "Ch. 3, the invariants g2 and g3 of the lattice cubic and the examples of symmetric lattices, printed pp. 45-47."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes, Ch. 5 §5.1, pp. 79-90"
      url: https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf
      locator: "Ch. 5 §5.1, the discussion of the square and hexagonal lattices and the vanishing of their invariants, printed pp. 79-83."
    - title: "NIST Digital Library of Mathematical Functions, §23.2"
      url: https://dlmf.nist.gov/23.2
      locator: "§23.2(iii), the invariants g2, g3 and the special values for the square and equianharmonic cases (23.2.12)-(23.2.14)."
verification:
  audited: 2026-10-02
  precheck: pass
---

## Example

For the square lattice $\Lambda_{\mathrm{sq}}=\mathbb Z+i\mathbb Z$ one has
$g_3(\Lambda_{\mathrm{sq}})=0$ and $g_2(\Lambda_{\mathrm{sq}})\ne0$. For the
hexagonal lattice $\Lambda_{\mathrm{hex}}=\mathbb Z+\mathbb Z\rho$ with
$\rho=e^{2\pi i/3}$ one has $g_2(\Lambda_{\mathrm{hex}})=0$ and
$g_3(\Lambda_{\mathrm{hex}})\ne0$. In both cases $\Delta\ne0$. The argument is
a symmetry argument under multiplication by $i$ respectively by $\rho$: no
numerical value of any Eisenstein sum is evaluated.

## Facts & Assumptions

**Given:** The lattices $\Lambda_{\mathrm{sq}}:=\mathbb Z+i\mathbb Z$ and $\Lambda_{\mathrm{hex}}:=\mathbb Z+\mathbb Z\rho$ with $\rho:=e^{2\pi i/3}$, their invariants $g_2=60G_4$, $g_3=140G_6$ and discriminants $\Delta=g_2^3-27g_3^2$ ([[def-weierstrass-elliptic-p-function]], [[thm-weierstrass-p-differential-equation]], [[thm-weierstrass-lattice-discriminant-is-nonzero]]).

[F1] A full complex lattice is a subgroup $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2\subseteq\mathbb C$ with $\omega_1,\omega_2$ real-linearly independent, and $(\omega_1,\omega_2)$ is oriented when $\operatorname{Im}(\omega_2/\omega_1)>0$; for either ordering real-linear independence is equivalent to $\operatorname{Im}(\omega_2/\omega_1)\ne0$, so one of the two orderings is oriented ([[def-complex-lattice-and-complex-torus]]). The sums defining the Weierstrass data depend only on the lattice $\Lambda$, not on the oriented basis chosen to describe it ([[def-weierstrass-elliptic-p-function]]).

[F2] $G_4(\Lambda)=\sum_{\omega\in\Lambda\setminus\{0\}}\omega^{-4}$ and $G_6(\Lambda)=\sum_{\omega\in\Lambda\setminus\{0\}}\omega^{-6}$ are the unordered finite-subset sums over the lattice; both families are absolutely summable, so $G_4(\Lambda)$ and $G_6(\Lambda)$ are well-defined complex numbers, and the invariants are $g_2=60G_4$, $g_3=140G_6$ ([[thm-weierstrass-p-differential-equation]]).

[F3] For every full complex lattice the discriminant $\Delta=g_2^3-27g_3^2$ satisfies $\Delta\ne0$ ([[thm-weierstrass-lattice-discriminant-is-nonzero]]).

[F4] The complex exponential satisfies $\exp(z+w)=\exp(z)\exp(w)$ for all $z,w$, is nowhere zero, has kernel $\ker(\exp)=2\pi i\mathbb Z$, and $|\exp(iy)|=1$ for every real $y$ ([[def-complex-exponential]], [[thm-complex-exponential-addition-and-real-extension]], [[thm-kernel-and-fibres-of-complex-exponential]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F5] $\mathbb C$ is a field with $i^2=-1$, every complex number has a unique form $a+bi$ with $a,b\in\mathbb R$, and a product of two nonzero complex numbers is nonzero ([[thm-complex-numbers-form-a-field]], [[def-complex-numbers-and-arithmetic]]).

[F6] For $z\in\mathbb C$ one has $z=\operatorname{Re}z+i\operatorname{Im}z$ with $|z|^2=(\operatorname{Re}z)^2+(\operatorname{Im}z)^2$, and $|zw|=|z|\,|w|$ for all $z,w$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]], [[lem-complex-conjugation-and-modulus-laws]]).

[F7] For nonzero $z,w\in\mathbb C$ and integers $m,n$ one has $z^{m+n}=z^mz^n$, $(zw)^n=z^nw^n$ and $z^{-n}=(z^n)^{-1}$ ([[def-complex-integer-powers]]).

## Verification

1.1 (The element $\rho$, its inverse power and non-reality.) By [F4] and [F5], $\rho=e^{2\pi i/3}$ satisfies $\rho^3=e^{2\pi i}=1$, and $\rho\ne1$ because $2\pi/3\notin2\pi\mathbb Z$; also $\rho\ne-1$, since $(-1)^3=-1\ne1$. Expanding $t^3-1=(t-1)(t^2+t+1)$ and using that $\mathbb C$ is a field gives $0=\rho^3-1=(\rho-1)(\rho^2+\rho+1)$ with $\rho-1\ne0$, hence $\rho^2+\rho+1=0$ and $\rho^2=-1-\rho$. Moreover $1-\rho^2\ne0$: if $\rho^2=1$ then $(\rho-1)(\rho+1)=0$, and a field has no zero divisors, so $\rho=1$ or $\rho=-1$, both excluded. Finally $\rho\notin\mathbb R$: if $\rho$ were real, then $|\rho|^2=\rho^2$ by [F6], while $|\rho|=|\exp(2\pi i/3)|=1$ by [F4], so $\rho^2=1$ and again $\rho=\pm1$, a contradiction. For the power law, $\rho^{-4}=\rho^{-4}(\rho^3)^2=\rho^{-4}\rho^6=\rho^2$ by [F7] and $\rho^3=1$. [F4, F5, F6, F7, algebra]

1.2 (Scaling identity for the lattice sums.) Let $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$ be a full lattice and $c\in\mathbb C^\times$. Then $c\Lambda=\mathbb Z(c\omega_1)+\mathbb Z(c\omega_2)$ is again a full lattice: real-linear independence is preserved because $a(c\omega_1)+b(c\omega_2)=c(a\omega_1+b\omega_2)$ vanishes only if $a\omega_1+b\omega_2=0$. For $k\in\{4,6\}$ and every finite $E\subseteq\Lambda\setminus\{0\}$ one has $\sum_{\omega\in E}(c\omega)^{-k}=c^{-k}\sum_{\omega\in E}\omega^{-k}$ by [F7]; the map $E\mapsto cE$ is an order-isomorphism from the directed set of finite subsets of $\Lambda\setminus\{0\}$ onto that of $c\Lambda\setminus\{0\}$, and the sum over $c\Lambda$ is the net of these finite sums by [F2]. Hence the net for $c\Lambda$ is the constant multiple $c^{-k}$ of the convergent net for $\Lambda$, so it converges and $G_k(c\Lambda)=c^{-k}G_k(\Lambda)$. [F2, F7, algebra]

2.1 (The two lattices.) Since every complex number is uniquely $a+bi$, the pair $\{1,i\}$ is a real basis of $\mathbb C$, so $\Lambda_{\mathrm{sq}}$ is a full complex lattice with oriented basis $(1,i)$ ($\operatorname{Im}(i/1)=1>0$); and $i\Lambda_{\mathrm{sq}}=\Lambda_{\mathrm{sq}}$: indeed $i\cdot1=i\in\Lambda_{\mathrm{sq}}$ and $i\cdot i=-1\in\Lambda_{\mathrm{sq}}$, so $i\Lambda_{\mathrm{sq}}\subseteq\Lambda_{\mathrm{sq}}$, while multiplication by $i$ is a bijection of $\mathbb C$ with inverse multiplication by $i^{-1}=-i$, which likewise preserves $\Lambda_{\mathrm{sq}}$. Also $i^{-6}=(i^2)^{-3}=(-1)^{-3}=-1$. For the hexagonal lattice: $\{1,\rho\}$ is real-linearly independent because $\rho\notin\mathbb R$ by step 1.1, so $\Lambda_{\mathrm{hex}}$ is a full complex lattice and one of the orderings of $(1,\rho)$ is oriented by [F1]; and $\rho\Lambda_{\mathrm{hex}}=\Lambda_{\mathrm{hex}}$ because $\rho\cdot1=\rho\in\Lambda_{\mathrm{hex}}$ and $\rho\cdot\rho=\rho^2=-1-\rho\in\Lambda_{\mathrm{hex}}$ show $\rho\Lambda_{\mathrm{hex}}\subseteq\Lambda_{\mathrm{hex}}$, while multiplication by $\rho$ is invertible on $\mathbb C$ with inverse multiplication by $\rho^{-1}=\rho^2$, and $\rho^2\Lambda_{\mathrm{hex}}\subseteq\Lambda_{\mathrm{hex}}$ since $\rho^2\cdot1=\rho^2=-1-\rho\in\Lambda_{\mathrm{hex}}$ and $\rho^2\cdot\rho=\rho^3=1\in\Lambda_{\mathrm{hex}}$. [F1, F5, step 1.1, algebra]

3.1 ($g_3(\Lambda_{\mathrm{sq}})=0$.) By step 2.1, $i\Lambda_{\mathrm{sq}}=\Lambda_{\mathrm{sq}}$, hence $G_6(\Lambda_{\mathrm{sq}})=G_6(i\Lambda_{\mathrm{sq}})=i^{-6}G_6(\Lambda_{\mathrm{sq}})=-G_6(\Lambda_{\mathrm{sq}})$ by step 1.2 with $c=i$; therefore $2G_6(\Lambda_{\mathrm{sq}})=0$ and, since $\mathbb C$ is a field, $G_6(\Lambda_{\mathrm{sq}})=0$, so $g_3(\Lambda_{\mathrm{sq}})=140\cdot0=0$. [F2, F5, step 1.2, step 2.1, algebra]

3.2 ($g_2(\Lambda_{\mathrm{hex}})=0$.) By step 2.1, $\rho\Lambda_{\mathrm{hex}}=\Lambda_{\mathrm{hex}}$, hence $G_4(\Lambda_{\mathrm{hex}})=G_4(\rho\Lambda_{\mathrm{hex}})=\rho^{-4}G_4(\Lambda_{\mathrm{hex}})=\rho^2G_4(\Lambda_{\mathrm{hex}})$ by step 1.2 with $c=\rho$ and step 1.1; therefore $(1-\rho^2)G_4(\Lambda_{\mathrm{hex}})=0$, and since $1-\rho^2\ne0$ by step 1.1 and $\mathbb C$ is a field, $G_4(\Lambda_{\mathrm{hex}})=0$, so $g_2(\Lambda_{\mathrm{hex}})=60\cdot0=0$. [F2, F5, step 1.1, step 1.2, step 2.1, algebra]

4.1 (The complementary invariants and the discriminant.) By [F3] the discriminant is nonzero for both lattices. For $\Lambda_{\mathrm{sq}}$ step 3.1 gives $\Delta(\Lambda_{\mathrm{sq}})=g_2^3-27\cdot0^2=g_2^3$, which is nonzero, so $g_2(\Lambda_{\mathrm{sq}})\ne0$ in the field $\mathbb C$. For $\Lambda_{\mathrm{hex}}$ step 3.2 gives $\Delta(\Lambda_{\mathrm{hex}})=0^3-27g_3^2=-27g_3^2$ with $-27\ne0$, and a nonzero discriminant forces $g_3^2\ne0$, hence $g_3(\Lambda_{\mathrm{hex}})\ne0$. [F3, F5, step 3.1, step 3.2, algebra]

5.1 (Assembly.) Step 3.1 gives $g_3(\Lambda_{\mathrm{sq}})=0$ and step 4.1 gives $g_2(\Lambda_{\mathrm{sq}})\ne0$; step 3.2 gives $g_2(\Lambda_{\mathrm{hex}})=0$ and step 4.1 gives $g_3(\Lambda_{\mathrm{hex}})\ne0$; step 4.1 also gives $\Delta\ne0$ in both cases. These are exactly the assertions of the example. ∎

## Remarks

The two symmetries are the only inputs: $i\Lambda_{\mathrm{sq}}=\Lambda_{\mathrm{sq}}$
reindexes the $G_6$-sum into its negative, and
$\rho\Lambda_{\mathrm{hex}}=\Lambda_{\mathrm{hex}}$ reindexes the $G_4$-sum
into $\rho^2$ times itself. The complementary invariant is then forced to be
nonzero by $\Delta\ne0$, so no Eisenstein sum is evaluated numerically and no
transcendental input about the elliptic integral is used. The hexagonal case
is the equianharmonic one: its cubic $4x^3-g_3$ of
[[thm-weierstrass-lattice-discriminant-is-nonzero]] has no $x$-term, while the
square lattice is the one whose cubic has no constant term.
