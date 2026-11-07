---
id: def-analytic-conductor-of-a-gl1-automorphic-representation
kind: definition
title: "Analytic Conductor of a GL1 Automorphic Representation"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-adelic-gln-automorphic-representation
  - def-euler-gamma-function
  - thm-gamma-meromorphic-continuation
  - cor-gamma-function-has-no-zeros
  - thm-kernel-and-fibres-of-complex-exponential
  - cor-principal-logarithm-is-holomorphic-on-the-slit-plane
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Philippe Michel and Akshay Venkatesh, The Subconvexity Problem for GL2, arXiv:0903.3591v2"
      url: "https://arxiv.org/pdf/0903.3591v2"
      locator: "§3.1.8, local analytic conductor for d=1; §4.1.4, global conductor convention."
    - title: "Akshay Venkatesh, Sparse Equidistribution Problems, Period Bounds and Subconvexity"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v172-n2-p05-p.pdf"
      locator: "§2.12, analytic conductors of Hecke characters and their archimedean parameters."
    - title: "James W. Cogdell, L-functions and Converse Theorems for GL(n), PCMI lecture notes (2003)"
      url: "https://people.math.osu.edu/cogdell.1/pcmi-www.pdf"
      locator: "Lecture 2, §2.3.2; Lecture 3, §§3.1–3.2, local GL1 factors."
proof_strategy: direct
forward_refs: []
---

## Definition

Let $F$ be a number field with adele ring $\mathbb A_F$, and let $\chi:F^\times\backslash\mathbb A_F^\times\to S^1$ be a continuous unitary Hecke character. The idele group has the restricted-product topology of $F_v^\times$ with respect to $\mathcal O_v^\times$; at finite places the groups $1+\mathfrak p_v^m$ form the principal-unit neighbourhood basis of $1$. For a finite place $v$, write $\mathcal O_v$ for the local ring of integers, $\mathfrak p_v$ for its maximal ideal and $q_v$ for its residue cardinality. Put $U_v^{(0)}=\mathcal O_v^\times$ and $U_v^{(m)}=1+\mathfrak p_v^m$ for $m\geq1$, and define
$$a_v(\chi)=\min\{m\in\mathbb Z_{\geq0}:\chi_v|_{U_v^{(m)}}=1\}.$$
At a real place there are unique $\epsilon_v\in\{0,1\}$ and $t_v\in\mathbb R$ with $\chi_v(x)=\operatorname{sgn}(x)^{\epsilon_v}|x|^{it_v}$; put $\mu_{\chi,v}=\epsilon_v+it_v$. At a complex place there are unique $m_v\in\mathbb Z$ and $t_v\in\mathbb R$ with
$$\chi_v(z)=(z/|z|)^{m_v}|z|_{\mathbb C}^{it_v},\qquad |z|_{\mathbb C}=z\overline z,$$
and put $\mu_{\chi,v}=|m_v|/2+it_v$. Define $\Gamma_{\mathbb R}(s)=\pi^{-s/2}\Gamma(s/2)$ and $\Gamma_{\mathbb C}(s)=2(2\pi)^{-s}\Gamma(s)$, where $\Gamma$ is Euler's gamma function. The direct GL1 local factors are $\Gamma_v(s+\mu_{\chi,v})$ at infinity, $(1-\chi_v(\varpi_v)q_v^{-s})^{-1}$ at an unramified finite place, and $1$ at a ramified finite place, where $\varpi_v$ is a uniformizer. The analytic conductor is
$$C(\chi)=\prod_{v\text{ finite}}q_v^{a_v(\chi)}\prod_{v\mid\infty}(2+|\mu_{\chi,v}|)^{[F_v:\mathbb R]}.$$
These definitions use the local characters themselves and their Tate factors; they do not require a general local Langlands parameter assignment. The finite product has only finitely many nonunit factors, and $C(\chi)\geq1$.

## Definition references

[[def-adelic-gln-automorphic-representation|number fields, adeles and local components]]

[[def-euler-gamma-function]]

[Michel and Venkatesh, *The Subconvexity Problem for GL2*, §§3.1.8, 3.1.12 and 4.1.4](https://arxiv.org/pdf/0903.3591v2)

## Facts & Assumptions

**Given:** A continuous unitary Hecke character $\chi$ as in the Definition. Verify the existence and uniqueness of its stated local parameters and the finiteness and normalization of the conductor formula.

[F1] The number field and its completions are as in [[def-adelic-gln-automorphic-representation]]. The idele and principal-unit topologies used here are specified explicitly in the Definition.

[F2] A continuous complex logarithm exists near $1$; the complex exponential has its addition law, and $e^{i\theta}=1$ exactly for $\theta\in2\pi\mathbb Z$. ([[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]], [[thm-complex-exponential-addition-and-real-extension]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-kernel-and-fibres-of-complex-exponential]])

[F3] For $\operatorname{Re}u>0$, $\Gamma(u)=\int_0^\infty e^{-y}y^{u-1}\,dy$. ([[def-euler-gamma-function]]); its meromorphic continuation has simple poles only at the nonpositive integers and no zeros. ([[thm-gamma-meromorphic-continuation]], [[cor-gamma-function-has-no-zeros]])

## Proof

1.1 The open arc $A=\{e^{i\theta}:|\theta|<\pi/3\}$ contains no nontrivial subgroup of $S^1$. Indeed, for any nonidentity element of that arc choose its argument $\theta\neq0$ and the least positive integer $k$ with $k|\theta|\geq\pi/3$; then $\pi/3\leq k|\theta|<2\pi/3$, so its $k$-th power is outside $A$. At a finite place, continuity puts the image of some principal-unit subgroup inside $A$, hence makes that subgroup trivial under $\chi_v$. Thus the defining set of conductor exponents is nonempty and has a least element. Globally continuity puts the image of an idele identity neighbourhood inside $A$; by [F1] this neighbourhood contains $\prod_{v\notin S}\mathcal O_v^\times$ with identity components at a finite set $S$ containing all archimedean places. This product is a subgroup, so its image is trivial. Consequently $a_v(\chi)=0$ outside $S$. [given, F1, construct, algebra]

1.2 Every continuous homomorphism $b:(\mathbb R,+)\to S^1$ has the form $b(x)=e^{icx}$ for a unique real $c$. To prove this, use [F2] to choose a continuous argument $\theta(x)$ near $0$, with $\theta(0)=0$ and $|\theta(x)|<\pi/6$. On a smaller interval, $\theta(x+y)-\theta(x)-\theta(y)$ is a multiple of $2\pi$ of modulus below $\pi$, hence zero. Subdivision gives linearity first on rational multiples of one small nonzero point, then on the interval by continuity. Subdividing arbitrary $x$ into sufficiently small summands gives $b(x)=e^{icx}$ globally. If two constants worked their difference times every sufficiently small $x$ would be a multiple of $2\pi$, forcing equality. Apply this to $x\mapsto\chi_v(e^x)$ at a real place. The value at $-1$ is $(-1)^\epsilon$ with $\epsilon\in\{0,1\}$, proving the unique real formula. [given, F2, construct, algebra]

2.1 At a complex place apply step 1.2 to $x\mapsto\chi_v(e^x)$ and $\theta\mapsto\chi_v(e^{i\theta})$. Write their respective exponents as $2t$ and $m$. The second homomorphism is $2\pi$-periodic, so [F2] forces $m\in\mathbb Z$. Every $z\neq0$ is a product of its positive radius and unit argument, giving the complex formula in the Definition. The radial and angular restrictions determine $t,m$ uniquely. [given, F2, step 1.2, algebra]

2.2 The stated gamma shifts are verified directly by Tate Mellin integrals. Over $\mathbb R$, use $d^\times x=dx/|x|$ and the Schwartz function $\Phi(x)=x^\epsilon e^{-\pi x^2}$. The signs cancel against $\chi_v$, and substituting $y=\pi x^2$ on the positive and negative half-lines gives
$$\int_{\mathbb R^\times}\Phi(x)\chi_v(x)|x|^s\,d^\times x=\Gamma_{\mathbb R}(s+\epsilon+it).$$
Over $\mathbb C$, use $d^\times z=(2/\pi)\,dx\,dy/|z|^2$ and $\Phi(z)=\overline z^m e^{-2\pi|z|^2}$ for $m\geq0$, or $z^{-m}e^{-2\pi|z|^2}$ for $m<0$. The angular characters cancel. Polar coordinates and $y=2\pi r^2$ give
$$\int_{\mathbb C^\times}\Phi(z)\chi_v(z)|z|_{\mathbb C}^s\,d^\times z=2(2\pi)^{-s-it-|m|/2}\Gamma(s+it+|m|/2).$$
Both calculations hold first in the respective half-planes of absolute convergence and use only [F3]. They fix precisely the displayed real and complex Tate normalization. [F3, step 1.2, step 2.1, construct, algebra]

2.3 These gamma factors divide every archimedean Tate integral by an entire function, not merely the test integrals in step 2.2. Over $\mathbb R$, split the Mellin integral at $|x|=1$ and combine the two signs. The tail at infinity is entire by Schwartz decay, uniformly on each compact set of $s$, also after differentiating in $s$ (each derivative contributes a power of $\log|x|$). At zero, the Taylor expansion of $\Phi(r)+(-1)^\epsilon\Phi(-r)$ contains only powers $r^{\epsilon+2j}$. Subtracting any finite Taylor expansion and integrating its monomials shows that the only possible poles are simple and occur at $s+it+\epsilon=-2j$, with the remainder holomorphic in a half-plane extending arbitrarily far left as the Taylor order increases. These are exactly the poles of $\Gamma_{\mathbb R}(s+it+\epsilon)$. Over $\mathbb C$, write the integral in polar coordinates. In the Taylor expansion $\sum_{p,q}c_{pq}z^p\overline z^q$ at zero, angular averaging against $e^{im\theta}$ retains only $p-q+m=0$; their total degrees are precisely $|m|+2j$. The radial monomial integrals therefore have only simple poles at $s+it+|m|/2=-j$. The Taylor remainder and Schwartz tail are controlled as in the real case. By [F3], division by the displayed gamma factor cancels every possible pole and creates no new one, since Gamma has no zeros. Step 2.2 attains that factor itself, fixing its stated normalization as a generator of the Tate integral family over entire scalar functions. [F3, step 2.2, algebra]

3.1 At a finite place normalize multiplicative measure by $\operatorname{vol}(\mathcal O_v^\times)=1$. If $\chi_v$ is unramified, the Mellin integral of $\mathbf1_{\mathcal O_v}$ is the geometric sum $\sum_{j\geq0}\chi_v(\varpi_v)^j q_v^{-js}$ in $\operatorname{Re}s>0$, yielding the stated unramified factor. Every locally constant compactly supported test function is constant near zero, so its Mellin integral is a finite Laurent polynomial plus a constant multiple of a tail of that geometric series; hence it is the stated factor times a Laurent polynomial. Thus this factor generates the finite integral family over $\mathbb C[q_v^s,q_v^{-s}]$. A change of uniformizer multiplies it by a unit on which $\chi_v$ is trivial. If $\chi_v$ is ramified, its integral over $\mathcal O_v^\times$ is zero: translating by a unit with character value different from $1$ multiplies that integral by a different scalar. Hence the tails near zero of every locally constant compactly supported test function vanish after angular integration, and its Mellin integral is a Laurent polynomial in $q_v^{-s}$. The test function equal to $\chi_v^{-1}$ on $\mathcal O_v^\times$ and zero elsewhere has integral $1$, giving the ramified Tate factor $1$. These elementary GL1 calculations invoke no nonabelian local correspondence. [given, F1, step 1.1, construct, algebra]

3.2 Step 1.1 shows the finite conductor product is finite; steps 1.2 and 2.1 give unique parameters at the finitely many archimedean places. Every finite factor $q_v^{a_v}$ is at least $1$, and each archimedean factor is positive and at least $1$. Thus the formula assigns one finite real number $C(\chi)\geq1$ to every given unitary Hecke character. This establishes the direct conductor definition; it proves no global analytic continuation, functional equation or subconvex estimate. [given, step 1.1, step 1.2, step 2.1, algebra] ∎
