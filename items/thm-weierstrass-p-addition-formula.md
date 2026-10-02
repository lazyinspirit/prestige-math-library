---
id: thm-weierstrass-p-addition-formula
kind: theorem
title: "Addition formula for $\\wp$"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-complex-lattice-and-complex-torus
  - def-weierstrass-elliptic-p-function
  - def-meromorphic-function-complex-domain
  - cor-meromorphic-functions-on-a-domain-form-a-field
  - thm-weierstrass-p-normal-convergence-and-periodicity
  - lem-weierstrass-p-degree-two-and-half-periods
  - thm-weierstrass-p-differential-equation
  - thm-laurent-expansion-annulus
  - thm-laurent-coefficient-formula-and-uniqueness
  - thm-removable-singularity-characterizations
  - thm-taylor-expansion-holomorphic-function
  - thm-cauchy-integral-formula-higher-derivatives
  - thm-liouville-bounded-entire-function
  - thm-isolated-zeros-holomorphic-function
  - thm-poles-meromorphic-function-are-discrete-and-countable
  - thm-extreme-value-metric
  - thm-continuous-image-of-a-compact-space-is-compact
  - thm-heine-borel-rn
  - thm-complex-numbers-are-the-real-coordinate-plane
  - lem-integer-part
  - cor-complex-differentiability-implies-continuity
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes, Ch. 5 §5.1, pp. 79-90"
      url: https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf
      locator: "Ch. 5 §5.1, the addition-law passage and its meromorphic-continuation discussion, printed pp. 89-90 (PDF pp. 90-91)."
    - title: "J. S. Milne, Modular Functions and Modular Forms, Ch. 3, pp. 41-47"
      url: https://www.jmilne.org/math/CourseNotes/MF.pdf
      locator: "Ch. 3, Proposition 3.9 and its proof, printed p. 45: the addition formula for wp and the limiting cases."
    - title: "NIST Digital Library of Mathematical Functions, §23.2"
      url: https://dlmf.nist.gov/23.2
      locator: "§23.2(ii)-(iii), equations (23.2.4) and (23.2.9)-(23.2.10): the wp series, its parity and the half-period derivative zeros used in the degenerate cases."
verification:
  precheck: pass
---

## Statement

Let $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$ be a full complex lattice with
oriented basis and let $\wp=\wp_\Lambda$ be its Weierstrass function
([[def-weierstrass-elliptic-p-function]]). Then the identity
$$\wp(z+w)=-\wp(z)-\wp(w)+\frac14\left(\frac{\wp'(z)-\wp'(w)}{\wp(z)-\wp(w)}\right)^{2}$$
holds meromorphically in $(z,w)$: it holds as an equality of values wherever
the displayed quotient is defined, and all apparent exceptional cases — the
apparent singularity where $\wp(z)=\wp(w)$ with $z\equiv w$, the double pole
where $\wp(z)=\wp(w)$ with $z\equiv-w$, and the degenerate choices of $w$ —
are interpreted by meromorphic continuation, without asserting a finite value
at a genuine pole. Concretely, for every $w\in\mathbb C$ the identity is an
identity of meromorphic functions of $z$ on $\mathbb C$, and symmetrically it
is an identity of meromorphic functions of $w$ for every $z$.

## Facts & Assumptions

**Given:** A full complex lattice $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$ with oriented basis, the Weierstrass function $\wp=\wp_\Lambda$ and its derivative $\wp'$, and a point $w\in\mathbb C$ with $2w\notin\Lambda$.

[F1] $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$ with $\omega_1,\omega_2$ a real basis of $\mathbb C$ and $\operatorname{Im}(\omega_2/\omega_1)>0$, and every $z\in\mathbb C$ has a unique representation $z=s\omega_1+t\omega_2$ with $s,t\in\mathbb R$ ([[def-complex-lattice-and-complex-torus]], [[thm-complex-numbers-are-the-real-coordinate-plane]]); subtracting integer parts of $s,t$ ([[lem-integer-part]]) shows every $z$ differs from a point of the closed parallelogram $P=\{s\omega_1+t\omega_2:0\le s,t\le1\}$ by an element of $\Lambda$. $\wp$ is the Weierstrass function of $\Lambda$ and $\wp'$ its derivative ([[def-weierstrass-elliptic-p-function]]).

[F2] $\wp$ is holomorphic on $\mathbb C\setminus\Lambda$, is even and $\Lambda$-periodic, and at each $\lambda\in\Lambda$ has a double pole with principal part $(z-\lambda)^{-2}$ and no other poles; $\wp'(z)=-2\sum_{\omega\in\Lambda}(z-\omega)^{-3}$ on $\mathbb C\setminus\Lambda$, this series being normally convergent, and $\wp'$ is odd and $\Lambda$-periodic with a pole of order $3$ at each lattice point; in particular $\wp$ and $\wp'$ are not constant ([[thm-weierstrass-p-normal-convergence-and-periodicity]]).

[F3] $\wp(z)=\wp(w)$ if and only if $w\equiv\pm z$ modulo $\Lambda$; the zeros of $\wp'$ are exactly the $\Lambda$-translates of the three nonzero half-periods $h_1,h_2,h_3$, each of order one, so for $w\notin\Lambda$ one has $\wp'(w)=0$ if and only if $2w\in\Lambda$ ([[lem-weierstrass-p-degree-two-and-half-periods]]).

[F4] $(\wp')^2=4\wp^3-g_2\wp-g_3$ on $\mathbb C\setminus\Lambda$, with $g_2=60G_4$ and $g_3=140G_6$ ([[thm-weierstrass-p-differential-equation]]).

[F5] A function holomorphic on a punctured disc has a Laurent expansion there whose coefficients are unique, and a function holomorphic on an annulus has a locally uniformly convergent Laurent expansion ([[thm-laurent-expansion-annulus]], [[thm-laurent-coefficient-formula-and-uniqueness]]); a function holomorphic on a punctured disc that is bounded near the centre extends holomorphically across it ([[thm-removable-singularity-characterizations]]). A holomorphic function equals its Taylor series on a disc around each point and has complex derivatives of all orders there ([[thm-taylor-expansion-holomorphic-function]], [[thm-cauchy-integral-formula-higher-derivatives]]). A holomorphic function is continuous ([[cor-complex-differentiability-implies-continuity]]).

[F6] A subset of $\mathbb C\cong\mathbb R^2$ that is closed and bounded is compact ([[thm-heine-borel-rn]], [[thm-complex-numbers-are-the-real-coordinate-plane]]); a continuous complex-valued function on a compact metric space is bounded ([[thm-extreme-value-metric]], [[thm-continuous-image-of-a-compact-space-is-compact]]); and a bounded entire function is constant ([[thm-liouville-bounded-entire-function]]).

[F7] The meromorphic functions on a connected plane domain form a field, so sums, products and quotients with nonzero denominator of meromorphic functions on $\mathbb C$ are meromorphic ([[cor-meromorphic-functions-on-a-domain-form-a-field]], [[def-meromorphic-function-complex-domain]]). The pole set of a meromorphic function on a plane domain is discrete and closed ([[thm-poles-meromorphic-function-are-discrete-and-countable]]); a holomorphic function on a domain that is not identically zero has isolated zeros, and consequently a meromorphic function on a domain that vanishes on a nonempty open subset is identically zero ([[thm-isolated-zeros-holomorphic-function]]).

## Proof

**Proof technique:** direct.

1.1 (Setup for generic $w$.) Let $w\in\mathbb C$ with $2w\notin\Lambda$; then $w\notin\Lambda$ and $\wp'(w)\ne0$ by [F3]. Define, in the field of meromorphic functions on $\mathbb C$, $$Q_w(z):=\frac{\wp'(z)-\wp'(w)}{\wp(z)-\wp(w)},\qquad \Phi_w(z):=\wp(z+w)+\wp(z)+\wp(w)-\tfrac14Q_w(z)^2 .$$ The denominator $\wp(z)-\wp(w)$ is not the zero function of $z$ because $\wp$ is nonconstant by [F2], so $Q_w$ and $\Phi_w$ are meromorphic by [F7]; moreover $Q_w$ and $\Phi_w$ are $\Lambda$-periodic in $z$, since $\wp(z)$, $\wp'(z)$ and $\wp(z+w)$ are $\Lambda$-periodic in $z$ by [F2] and the formula uses only these. Proving $\Phi_w\equiv0$ is exactly the identity for this $w$, so it suffices to prove that. [F2, F3, F7, given, algebra]

1.2 (Expansion of $\wp$ and $\wp'$ at $0$.) By [F2] the function $\wp(z)-z^{-2}$ is holomorphic near $0$ and even, so $\wp(z)=z^{-2}+a_0+a_2z^2+a_4z^4+O(z^6)$ and, differentiating the series of [F2], $\wp'(z)=-2z^{-3}+2a_2z+4a_4z^3+O(z^5)$ for $|z|$ small, with Laurent/Taylor coefficients unique by [F5]. Substituting these expansions into [F4] on a punctured disc and comparing the coefficient of $z^{-4}$ gives $0=12a_0$, since $( \wp')^2=4z^{-6}-8a_2z^{-2}+O(1)$ has no $z^{-4}$ term while $4\wp^3-g_2\wp-g_3=4z^{-6}+12a_0z^{-4}+O(z^{-2})$ has coefficient $12a_0$ there; hence $a_0=0$, that is $\wp(z)-z^{-2}\to0$ and $\wp(z)=z^{-2}+a_2z^2+O(z^4)$, $\wp'(z)=-2z^{-3}+2a_2z+O(z^3)$ near $0$. [F2, F4, F5, algebra]

2.1 ($\Phi_w$ is entire.) Away from $\Lambda$, $Q_w$ can have poles only where $\wp(z)=\wp(w)$, i.e. at $z\equiv\pm w$ modulo $\Lambda$ by [F3], and $\wp(z)$, $\wp(z+w)$ can have poles only at $\Lambda$ and at $-w+\Lambda$, every point of $\mathbb C$ outside the three discrete sets $\Lambda$, $w+\Lambda$, $-w+\Lambda$ is a point where $\Phi_w$ is holomorphic; we check the three exceptional loci. (i) At $z_0\in\Lambda$, write $u=z-z_0$; by [F2] $\wp(z_0+u)=\wp(u)=u^{-2}+a_2u^2+O(u^4)$ and $\wp'(z_0+u)=\wp'(u)=-2u^{-3}+2a_2u+O(u^3)$ by step 1.2, so $Q_w(z_0+u)=\bigl(-2u^{-3}+O(u)-\wp'(w)\bigr)\big/\bigl(u^{-2}+O(1)-\wp(w)\bigr)=-2u^{-1}-2\wp(w)u-\wp'(w)u^2+O(u^3)$ and $\tfrac14Q_w^2=u^{-2}+2\wp(w)+\wp'(w)u+O(u^2)$; hence $\wp(z)-\tfrac14Q_w(z)^2=(u^{-2}+O(u^2))-(u^{-2}+2\wp(w)+\wp'(w)u+O(u^2))=O(1)$ is bounded near $z_0$ and, being holomorphic on a punctured neighbourhood, extends holomorphically across $z_0$ by [F5], while $\wp(z+w)$ and $\wp(w)$ are holomorphic near $z_0$ because $z_0+w\notin\Lambda$ as $w\notin\Lambda$. (ii) At $z_0\equiv-w$ modulo $\Lambda$, write $z=z_0+u=-w+u$; using $\wp(-w+u)=\wp(w-u)$ and $\wp'(-w+u)=-\wp'(w-u)$ by parity [F2], and the Taylor expansions $\wp(w-u)=\wp(w)-\wp'(w)u+O(u^2)$, $\wp'(w-u)=\wp'(w)-\wp''(w)u+O(u^2)$ from [F5], the numerator of $Q_w$ is $-\wp'(w-u)-\wp'(w)=-2\wp'(w)+\wp''(w)u+O(u^2)$ and its denominator is $\wp(w-u)-\wp(w)=-\wp'(w)u+\tfrac12\wp''(w)u^2+O(u^3)=-u\,\wp'(w)\bigl(1-\tfrac{\wp''(w)}{2\wp'(w)}u+O(u^2)\bigr)$, with $\wp'(w)\ne0$; hence $Q_w(z_0+u)=\tfrac{2}{u}\bigl(1+O(u^2)\bigr)=2u^{-1}+O(u)$ and $\tfrac14Q_w(z)^2=u^{-2}+O(1)$, while $\wp(z+w)=\wp(u)=u^{-2}+O(u^2)$; thus $\wp(z+w)-\tfrac14Q_w(z)^2=O(1)$ extends holomorphically across $z_0$ by [F5], and $\wp(z)+\wp(w)$ is holomorphic near $z_0\notin\Lambda$. (iii) At $z_0\equiv w$, write $z=w+u$; then $\wp'(w+u)-\wp'(w)=\wp''(w)u+O(u^2)$ and $\wp(w+u)-\wp(w)=\wp'(w)u+O(u^2)$ by [F5], so $Q_w(w+u)=\wp''(w)/\wp'(w)+O(u)$ is holomorphic at $u=0$ because $\wp'(w)\ne0$, and $\wp(z)$, $\wp(z+w)$ are holomorphic near $z_0=w$ because $w\notin\Lambda$ and $2w\notin\Lambda$. Therefore $\Phi_w$ is holomorphic at every point of $\mathbb C$. [F2, F3, F5, step 1.1, step 1.2, algebra]

3.1 ($\Phi_w$ is zero.) By step 2.1, $\Phi_w$ is entire and by step 1.1 it is $\Lambda$-periodic; the closed parallelogram $P$ is compact by [F6] and every $z$ differs from a point of $P$ by a lattice element by [F1], so $|\Phi_w|$ is bounded on $\mathbb C$ by the boundedness of the continuous function $|\Phi_w|$ on the compact set $P$ [F6]; hence $\Phi_w$ is constant by Liouville [F6]. Its value is $\lim_{z\to0}\Phi_w(z)$, which step 2.1 shows is finite; expanding with step 1.2, $$\wp(z)-\wp(w)=z^{-2}\bigl(1-\wp(w)z^2+O(z^4)\bigr),\qquad \wp'(z)-\wp'(w)=-2z^{-3}+2a_2z+O(z^3)-\wp'(w),$$ so $Q_w(z)=-2z^{-1}-2\wp(w)z-\wp'(w)z^2+O(z^3)$, $\tfrac14Q_w(z)^2=z^{-2}+2\wp(w)+\wp'(w)z+O(z^2)$, and $\wp(z)-\tfrac14Q_w(z)^2=-2\wp(w)-\wp'(w)z+O(z^2)\to-2\wp(w)$ as $z\to0$; therefore $\Phi_w(z)\to\wp(w)-2\wp(w)+\wp(w)=0$. Hence $\Phi_w\equiv0$, that is, $\wp(z+w)=-\wp(z)-\wp(w)+\tfrac14Q_w(z)^2$ as meromorphic functions of $z$ for every $w$ with $2w\notin\Lambda$. [F1, F5, F6, step 1.1, step 1.2, step 2.1, algebra]

4.1 (Meromorphic continuation in the second variable.) Fix $z\notin\Lambda$ and put $$W_z(w):=\wp(z+w)+\wp(z)+\wp(w)-\frac14\left(\frac{\wp'(z)-\wp'(w)}{\wp(z)-\wp(w)}\right)^{2}.$$ As a function of $w$, each of $\wp(z+w)$, $\wp(w)$, $\wp'(w)$ is meromorphic on $\mathbb C$ by [F2], the quantities $\wp(z),\wp'(z)$ are constants, and the denominator $\wp(z)-\wp(w)$ is not the zero function of $w$ because $\wp$ is nonconstant [F2]; hence $W_z$ is meromorphic on $\mathbb C$ by [F7]. Let $V:=\{w\in\mathbb C:2w\notin\Lambda,\ w\notin z+\Lambda,\ w\notin -z+\Lambda\}$: the sets $\tfrac12\Lambda$, $z+\Lambda$, $-z+\Lambda$ are discrete and closed, hence have empty interior, so $V$ is a nonempty open subset of $\mathbb C$. For $w\in V$ the point $z$ is outside $\Lambda$, $w+\Lambda$ and $-w+\Lambda$, so step 3.1 applied to $w$ gives the identity at the point $z$, i.e. $W_z(w)=0$; since the meromorphic function $W_z$ vanishes on the nonempty open set $V$, it is identically zero by [F7]. Thus for every $z\notin\Lambda$ and every $w\in\mathbb C$, the identity holds in the meromorphic sense in $w$. [F2, F3, F7, step 3.1, algebra]

5.1 (Exceptional parameters and poles.) For fixed $w\notin\Lambda$, the expression in step 1.1 is meromorphic in $z$. Step 4.1 gives its vanishing at all ordinary pairs $z\notin\Lambda$, $\wp(z)\ne\wp(w)$, so [F7] gives the identity for this fixed $w$, including nonzero half-periods. At $z\equiv w$, the quotient is removable when $2w\notin\Lambda$, as in step 2.1(iii). If instead $w=h$ is a nonzero half-period, [F3] gives $\wp'(h)=0$ and $\wp''(h)\ne0$; Taylor expansion yields $Q_h(h+u)=2/u+O(1)$, so $Q_h^2/4$ and $\wp(2h+u)=\wp(u)$ both have genuine double poles. For a lattice parameter $w=\lambda+u$, fix $z\notin\Lambda$. Periodicity and the expansions of steps 1.2 and 2.1(i), with the variables interchanged, give
$$\frac{\wp'(z)-\wp'(\lambda+u)}{\wp(z)-\wp(\lambda+u)}=-2u^{-1}-2\wp(z)u-\wp'(z)u^2+O(u^3),$$
and therefore
$$-\wp(z)-\wp(\lambda+u)+\frac14\left(\frac{\wp'(z)-\wp'(\lambda+u)}{\wp(z)-\wp(\lambda+u)}\right)^2=\wp(z)+\wp'(z)u+O(u^2).$$
The combined right side thus extends in $w$ at $\lambda$ with value $\wp(z)$; its restriction to $w=\lambda$ extends meromorphically in $z$ as $\wp(z)=\wp(z+\lambda)$. The same reasoning applies with the variables interchanged, since the formula is symmetric. Away from the exceptional loci the combined right side equals $\wp(z+w)$, so its meromorphic continuation across them is this same meromorphic function; no individual infinite term is evaluated as a complex constant. In particular no finite value is asserted at a genuine pole. [F2, F3, F5, F7, step 1.2, step 2.1, step 4.1, algebra]

6.1 (Assembly.) Step 3.1 proves the identity as meromorphic functions of $z$ for every $w$ with $2w\notin\Lambda$; step 4.1 extends the identity, in the second variable, to all $w$ for $z\notin\Lambda$; and step 5.1 treats half-period poles and the lattice-parameter restriction by explicit continuation, yielding the symmetric meromorphic identity in $(z,w)$ together with the interpretation of the apparent exceptional cases. This is the assertion of the theorem. ∎

## Remarks

The proof separates the two roles of the variables. For a fixed generic $w$
the difference of the two sides is an entire $\Lambda$-periodic function, whose
only possible poles at $\Lambda$, at $-w+\Lambda$ and at $w+\Lambda$ cancel
in pairs; Liouville makes it constant, and the constant is computed at $z=0$,
where the $z^{-2}$ terms cancel. The generic case is then propagated: as a
function of $w$ the difference is meromorphic, so its vanishing on the open
dense set $2w\notin\Lambda$ forces it to vanish everywhere, and the symmetric
argument recovers the identity as a statement about meromorphic functions of
$z$ for every $w$, including the half-period and lattice degenerations. The
constant-term computation uses only $a_0=0$ for $\wp-z^{-2}$, which is read
off the differential equation; no Laurent coefficient such as $g_2/20$ is
needed. This formula is the analytic input for the chord-tangent group law of
the cubic in [[thm-elliptic-cubic-chord-tangent-group-law]].
