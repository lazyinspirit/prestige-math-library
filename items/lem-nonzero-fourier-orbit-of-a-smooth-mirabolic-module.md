---
dependency_level: 1
id: lem-nonzero-fourier-orbit-of-a-smooth-mirabolic-module
kind: lemma
title: "The Nonzero Fourier Orbit of a Smooth Mirabolic Module"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: 
  - def-smooth-generic-local-gln-representation-and-mirabolic-induction
proof_strategy: direct
sources:
  references:
    - title: "I. N. Bernstein and A. V. Zelevinsky, Induced Representations of Reductive p-adic Groups I, §3.2(e), pp. 450–451 (unnormalized restatement)"
      url: "https://www.numdam.org/item/ASENS_1977_4_10_4_441_0.pdf"
    - title: "J. W. Cogdell, L-functions and Converse Theorems for GL(n), Lecture 3, pp. 27–32"
      url: "https://people.math.osu.edu/cogdell.1/pcmi-www.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Let $d\ge1$, $U=k^d$, $L=\mathrm{GL}_d(k)$, and $G=L\ltimes U$, with $L$ acting on column vectors in $U$. Fix a nontrivial smooth additive character $\psi$ of $k$, let $\xi_0=(0,\ldots,0,1)$, and set $\chi_0(u)=\psi(\xi_0u)$ and $H=\{h\in L:\xi_0h=\xi_0\}=P_d$. For every smooth complex $G$-module $V$, there is a $G$-equivariant injection

$$\mathrm{c\!\operatorname{-}Ind}_{H\ltimes U}^{G}(V_{U,\chi_0}\otimes\chi_0)\longrightarrow V.$$

Here $H$ acts on the twisted coinvariant by its induced action, and $(h,u)$ acts there as $\psi(\xi_0u)\rho(h)$.

## Statement references

[Bernstein–Zelevinsky, *Induced Representations of Reductive p-adic Groups I*, §3.2(e), pp. 450–451; the normalization twists cancel in the composite induction and coinvariant functors](https://www.numdam.org/item/ASENS_1977_4_10_4_441_0.pdf)

[[def-smooth-generic-local-gln-representation-and-mirabolic-induction]]

## Facts & Assumptions

[F1] The group actions, smooth representations, twisted coinvariants and compact induction have the conventions in [[def-smooth-generic-local-gln-representation-and-mirabolic-induction]].

## Proof

**Given:** The field $k$, the character $\psi$, and the smooth $G$-module $V$ in the statement. Write $\widehat U=k^d$ for row vectors, with $\chi_\xi(u)=\psi(\xi u)$, and $\Omega=\widehat U\setminus\{0\}$.

1.1 Let $A=C_c^\infty(\widehat U)$, the algebra of locally constant compactly supported functions with pointwise multiplication. Integrate test functions on $U$ by giving each coset of $\mathfrak p^j\mathcal O^d$ measure $q^{-jd}$, where $q=|\mathcal O/\mathfrak p|$. This defines the integral by finite sums: every compact open subset is a finite union of such cosets at one common level, and subdivision preserves the sum because a coset has exactly $q^d$ children at the next level. Let $a\in A$ act on $V$ by integration of its inverse Fourier transform against $\rho(u)$. This integral is a finite linear combination of vectors: its integrand has compact support and is constant on cosets of a sufficiently small open subgroup. The Fourier identities needed here reduce to finite character orthogonality. Indeed every test function is constant on cosets of a lattice and supported in a larger lattice; the annihilator of $\mathfrak p^j\mathcal O^d$ under $(\xi,u)\mapsto\psi(\xi u)$ is another lattice, and the induced pairing between the corresponding finite quotient lattices is perfect. Perfection follows by choosing a coordinate on which a nonzero class lies and a scalar distinguishing that class under $\psi$. The sum of a nontrivial character of a finite group is zero, by translating the sum by an element on which the character is nontrivial. Choosing dual Haar normalizations therefore gives Fourier inversion and identifies convolution with pointwise multiplication. In particular $1_E$ for a compact open $E\subset\widehat U$ is an idempotent operator. The $A$-action is nondegenerate: if $v$ is fixed by a lattice $J\subset U$, then the inverse transform of $1_{J^\perp}$ is $\operatorname{vol}(J)^{-1}1_J$, so $1_{J^\perp}v=v$. [F1, construct]

1.2 For $\xi\in\widehat U$, let $I_\xi=\{a\in A:a(\xi)=0\}$. Then $V/I_\xi V=V_{U,\chi_\xi}$. To prove this, choose a compact Fourier cutoff $e$ acting as the identity on a given vector. The relation $(\rho(u)-\chi_\xi(u))v$ equals the action on $v$ of $(\chi_\eta(u)-\chi_\xi(u))e(\eta)$ and hence belongs to $I_\xi V$. Conversely, the compact support of $a\in I_\xi$ avoids a neighborhood of $\xi$. At each point $\eta$ of that support choose $u$ with $\chi_\eta(u)\ne\chi_\xi(u)$. A finite compact-open partition of the support makes each selected denominator nonzero throughout its piece. On such a piece write $a(\eta)=b(\eta)(\chi_\eta(u)-\chi_\xi(u))$ with $b\in A$. This expresses $av$ as a sum of twisted relations. Thus the two quotient relations agree. [step 1.1, algebra]

1.3 Put $V_\Omega=C_c^\infty(\Omega)V\subset V$. The fibers $V/I_\xi V$, for $\xi\in\Omega$, separate its vectors. In fact any $v\in V_\Omega$ has a compact Fourier support $S\subset\Omega$, meaning $1_Sv=v$. If its fiber at $\xi$ vanishes, write $v=\sum_i a_iw_i$ with all $a_i(\xi)=0$. There is a neighborhood $E_\xi$ of $\xi$ on which every $a_i$ vanishes, and hence $1_Ev=0$ for each compact open $E\subset E_\xi$. If every fiber vanishes, finitely many such neighborhoods cover $S$; a subordinate finite compact-open partition gives $v=0$. [step 1.1, step 1.2]

1.4 For $v\in V_\Omega$ set $f_v(l)=[\rho(l)v]\in V_{U,\chi_0}$. This is $H$-equivariant on the left and smooth under right translation. If $a$ acts on $v$, its value in this fiber is multiplied by $a(\xi_0l)$, so the support of $f_v$ modulo $H$ is compact. Right translation by $u\in U$ multiplies $f_v(l)$ by $\psi(\xi_0lu)$. These are exactly the compact-induction rules for $H\ltimes U\subset G$. Fibers at all nonzero $\xi=\xi_0l$ separate vectors by step 1.3, so $v\mapsto f_v$ is injective. The orbit identification $H\backslash L\simeq\Omega$ used here has local sections: near $\xi_0$, take the matrix with first $d-1$ rows the standard rows and final row $\xi$; its determinant is the final coordinate, which is nonzero there. Translates give sections everywhere. [F1, step 1.3, construct]

1.5 This map onto the induced space is surjective. Take a compactly supported smooth $H$-equivariant function $f$ on $L$. Near the identity coset lift $f(1)$ to $v\in V$, and choose a compact open subgroup $J\subset L$ fixing both $v$ and $f$ under right translation. On $HJ$, one has $f_v(hj)=h[v]=f(hj)$. The orbit image of $HJ$ is compact open, since it is the image of the compact open subgroup $J$ under the quotient map; multiply $v$ by its Fourier indicator. The resulting vector lies in $V_\Omega$ and its function is precisely the restriction of $f$ to that neighborhood, extended by zero. The same construction after translation works at every coset in the support of $f$. Finitely many such neighborhoods cover its compact quotient support, and a subordinate finite compact-open partition expresses $f$ as a sum of the constructed functions. Thus $V_\Omega$ is isomorphic to the induced representation, and its inclusion in $V$ proves the assertion. [step 1.1, step 1.4, construct] ∎
