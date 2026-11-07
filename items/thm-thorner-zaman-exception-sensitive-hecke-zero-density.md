---
id: thm-thorner-zaman-exception-sensitive-hecke-zero-density
kind: theorem
title: Log-free Hecke zero density with the exceptional-zero factor B1
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 28
deps:
- lem-effective-dedekind-real-zero-gap-from-unit-lattice-packing
- lem-hecke-congruence-family-cardinality-and-primitive-reduction
- lem-hecke-local-zero-mass-and-higher-logarithmic-derivatives
- thm-thorner-zaman-explicit-log-free-density-for-hecke-l-functions
- thm-deuring-heilbronn-phenomenon-for-hecke-l-functions
- lem-primitive-hecke-analytic-landau-page-family-core
- lem-quadratic-number-field-principal-product-and-canonical-hecke-character
- lem-quadratic-hecke-conductor-discriminant-and-real-signs
- lem-ray-modulus-kernel-intersection-and-primitive-conductor-uniqueness
- thm-fundamental-theorem-of-finite-galois-theory
- thm-primitive-hecke-l-analytic-continuation-and-functional-equation
- thm-identity-theorem-holomorphic-functions
- def-finite-order-ray-class-hecke-character-and-l-function
- thm-dirichlet-eta-representation
- thm-natural-logarithm-laws
- thm-exponential-beats-every-polynomial
- def-axiom-of-choice
- def-countable-choice
- def-dependent-choice
proof_strategy: unweighted exact density, direct zero repulsion near one, and a finite
  unit-lattice effective gap for the remaining full range
axiom_use: Original AC+CC+DC scope retained. Given Artin-associated character family
  is used literally; the forward construction for a GIVEN quadratic subextension avoids
  converse CFT and the unfinished full Stark theorem.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Jesse Thorner and Asif Zaman, A unified and improved Chebotarev density
      theorem
    url: https://msp.org/ant/2019/13-5/ant-v13-n5-p02-s.pdf
    locator: Theorem 3.2 and complete proof, printed pp. 1051–1052; the aggregate
      parameter Q is defined by equations (1-11) and (3-1).
  - title: Jesse Thorner and Asif Zaman, A bound for the least prime ideal in the
      Chebotarev density theorem
    url: https://msp.org/ant/2017/11-5/ant-v11-n5-p04-s.pdf
    locator: Theorem 3.2 and proof, printed pp. 1146–1170.
  - title: A. R. Weiss, the least prime ideal
    url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN243919689_0338/PPN243919689_0338.pdf
    locator: Theorem 4.3 and proof, printed pp. 82–84.
---

## Statement

Assume AC, Countable Choice, and Dependent Choice. Let $L/K$ be a finite abelian extension of number fields, with $G=\operatorname{Gal}(L/K)$, $K$ of degree $n_K$, and absolute discriminant $D_K$. Let $\widehat G=\operatorname{Hom}(G,\mathbb C^\times)$, and let $\mathcal X(L/K)$ be the finite family of primitive Hecke characters corresponding by Artin reciprocity to the characters in $\widehat G$. Put $Q_0=\max_{\chi\in\mathcal X(L/K)}N_{K/\mathbb Q}\mathfrak f_\chi$ and $\mathcal Q=D_KQ_0n_K^{n_K}$. For $0<\sigma<1$, $T\ge1$, and $\chi\in\mathcal X(L/K)$, let $N(\sigma,T,\chi)$ count with multiplicity every zero $\rho$ of $L(s,\chi)$ with $\sigma<\operatorname{Re}\rho<1$ and $|\operatorname{Im}\rho|\le T$, including a possible exceptional zero. Let $\beta_1$ be the possible unique real simple exceptional zero among this family. Then for some absolute effective integer $c_5\ge1$,
$$\sum_{\chi\in\mathcal X(L/K)}N(\sigma,T,\chi)-\mathbf1_{\{\beta_1\ \mathrm{exists},\ \sigma<\beta_1\}}\ll B_1(\mathcal Q T^{n_K})^{c_5(1-\sigma)}, \qquad B_1=\min\{1,(1-\beta_1)\log(\mathcal Q T^{n_K})\}$$
when $\beta_1$ exists; when it does not, set $B_1=1$.

## Statement references

[[thm-thorner-zaman-explicit-log-free-density-for-hecke-l-functions|Full explicit density theorem]]

[[thm-deuring-heilbronn-phenomenon-for-hecke-l-functions|Full Hecke zero repulsion]]

[[lem-effective-dedekind-real-zero-gap-from-unit-lattice-packing|General effective real-zero gap]]

## Facts & Assumptions

**Given:** The original abelian extension, its finite Artin-associated primitive Hecke-character family, $Q_0$, $\mathcal Q$, $\sigma,T$ and choice axioms. The count $N$ still counts every zero as originally defined; only its designated exceptional occurrence is explicitly subtracted in the displayed estimate. Put $n=n_K$, $D=D_K$, $S_0=\mathcal Q$, $S=S_0T^n$, $\Delta=1-\sigma$, and let $N^\circ$ denote this subtracted count.

[F1] Primitive congruence-family reduction preserves its finite family and positive-critical multiplicities, and $h\le C_\varepsilon^nD^{1/2+\varepsilon}Q_0^{1+\varepsilon}$ for every fixed $\varepsilon>0$. The given Artin reciprocity family is the pullback of the characters of its finite ray quotient; this uses the correspondence already specified in the Statement, rather than asserting new class-field existence. [[lem-hecke-congruence-family-cardinality-and-primitive-reduction]] [[def-finite-order-ray-class-hecke-character-and-l-function]]

[F2] The full explicit Hecke density theorem has exponent81 for $1/2\le\sigma<1$ and $U\ge\max\{n^{5/6}(D^{4/3}Q_0^{4/9})^{-1/n},1\}$, with base $e^{O(n)}D^2Q_0U^{n+2}$ and absolute effective constants. [[thm-thorner-zaman-explicit-log-free-density-for-hecke-l-functions]]

[F3] Completed zero occurrences in discs of radius at most $3/4$ centred at $1+it$ have count at most $2u\mathcal L_0+4$, where $\mathcal L_0=\log D+\frac12\log Q_0+(\frac12n+1)\log(U+3)+100n$. Primitive functional equations reflect critical zeros with their multiplicities and height magnitudes in the conjugate finite family. [[lem-hecke-local-zero-mass-and-higher-logarithmic-derivatives]] [[thm-primitive-hecke-l-analytic-continuation-and-functional-equation]]

[F4] The full Hecke Deuring–Heilbronn bound applies to every target zero of real part at least $1/2$ other than the designated exceptional occurrence, with its two exact coefficient triples. [[thm-deuring-heilbronn-phenomenon-for-hecke-l-functions]]

[F5] For conductor discriminant at most $Q'$ and height $T'$, the primitive family strip $\beta\ge1-c_1/\log(Q'T'^n)$ has at most one occurrence, simple/real with real primitive character, when $\log(Q'T'^n)\ge n$, with $c_1=1/4{,}000{,}000$. [[lem-primitive-hecke-analytic-landau-page-family-core]]

[F6] For every GIVEN quadratic extension $E/K$, its canonical primitive quadratic Hecke character has finite conductor $\mathfrak d_{E/K}$, split/inert values $+1/-1$ at unramified primes, and $\zeta_E(s)=\zeta_K(s)L(s,\chi_{E/K})$ above one. Moreover $[E:\mathbb Q]=2n$ and $D_E=D^2N\mathfrak f_{\chi_{E/K},0}$. These are forward constructions, not converse realization of an arbitrary character. [[lem-quadratic-number-field-principal-product-and-canonical-hecke-character]] [[lem-quadratic-hecke-conductor-discriminant-and-real-signs]]

[F7] Two primitive Hecke characters with identical pullbacks to a common modulus are identical and have identical conductors. The finite Galois correspondence constructs $E=L^{\ker\eta}$ of degree two over $K$ for a nontrivial real character $\eta$ of $G$. Holomorphic identities extend from a nonempty open set on a connected domain. [[lem-ray-modulus-kernel-intersection-and-primitive-conductor-uniqueness]] [[thm-fundamental-theorem-of-finite-galois-theory]] [[thm-identity-theorem-holomorphic-functions]]

[F8] For every number field $E$ of degree $m$ and discriminant $D_E$, every real Dedekind-zeta zero $\beta\in(0,1)$ satisfies $1-\beta\ge C^{-m}m^{-m}D_E^{-1}$ for an absolute effective $C$. Its local proof uses finite unit-lattice packing, the residue formula and fixed-strip convexity; no Stark theorem is assumed. [[lem-effective-dedekind-real-zero-gap-from-unit-lattice-packing]]

[F9] On $\operatorname{Re}s>0$, the locally uniformly convergent eta series equals $(1-2^{1-s})\zeta(s)$. Positive logarithms have their product laws and fixed logarithmic factors are bounded by effective powers. [[thm-dirichlet-eta-representation]] [[thm-natural-logarithm-laws]] [[thm-exponential-beats-every-polynomial]]

[A1] Retain AC, CC and DC exactly. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

1.1 For $S_0>1$, its integer definition gives $S_0\ge2$, $S_0\ge D,Q_0,n^n$, and $n\le C\log S_0$: for $n\ge2$ use $n\log2\le n\log n$, while for $n=1$ use $\log S_0\ge\log2$. Apply [F1] with a fixed $\varepsilon=1$ to get $h\le S_0^C$ after absorbing $C^n$. We first prove the unweighted bound $N^\circ\le C S^{a\Delta}$, with absolute effective $a$. For $\sigma\ge1/2$, raise $T$ to the lower cutoff $T'\le Tn^{5/6}$ in [F2]. Its base is at most $S^A$, since $D^2Q_0\le S_0^3$, $n^{5(n+2)/6}\le(n^n)^{5/2}$, $e^{Cn}\le S_0^{C'}$ and $T^{n+2}\le T^{3n}$. For $\sigma<1/2$, reflect the left critical half by [F3] and cover the right half by $CT$ unit-height discs of radius $3/4$ centred at $1+it_j$, $|t_j|\le T+1$. The whole count is at most $ChT\mathcal L_0\le S^A$, using $\mathcal L_0\le C\log S$ and a fixed-power bound for the logarithm. Since here $\Delta>1/2$, increasing $a$ gives the claimed $C S^{a\Delta}$ bound. This includes all multiplicities and both height endpoints. [A1, F1, F2, F3, F9, given, construct, algebra]

2.1 If $S_0=1$, its defining nonnegative integer factors force $n=D=Q_0=1$. A finite-order Hecke character of $\mathbb Q$ with finite conductor1 is trivial: its finite residue character is trivial, its principal-ideal formula at $-1$ forces even real parity, and every ideal of $\mathbb Z$ has a positive principal generator. Thus the given bijective reciprocity family contains only the trivial character. It has no real zero in $(0,1)$: for real $0<s<1$, [F9]'s convergent paired eta sum $\sum_{j\ge1}((2j-1)^{-s}-(2j)^{-s})$ is strictly positive, whereas $1-2^{1-s}<0$, so $\zeta(s)<0$. Hence $B_1=1$. For $1\le T\le2$, [F3]'s finite cover bounds the whole zero count by an absolute constant and $T^{c\Delta}\ge1$. For $T>2$, apply the same argument as step 1.1, absorbing the fixed $e^C$ in a power of $T$; the coarse count below $\sigma=1/2$ is $CT\log(T+3)\le CT^2$. This proves the required estimate in this complete degenerate parameter case. [F1, F2, F3, F9, step 1.1, construct, algebra]

3.1 Suppose now $S_0>1$. If no exceptional zero exists, $N^\circ=\sum N$ and $B_1=1$, so step 1.1 suffices. Otherwise put $\delta=1-\beta_1>0$. When $\delta\log S\ge\kappa$ for a fixed small absolute $\kappa>0$, $B_1\ge\min\{1,\kappa\}>0$ and the same bound suffices after an absolute constant change. Thus assume $\delta\log S<\kappa$. Use [F5] with $Q'=e^nDQ_0$, $T'=T+3$. Step 1.1 gives $n\le\log(Q'T'^n)\le C\log S$, so choose $\kappa<c_1/C$; it follows that $\beta_1$ is simple and its primitive character $\psi$ is real. Under the GIVEN Artin correspondence the associated character $\eta$ of $G$ is real too, since pullback along its surjective reciprocity quotient preserves its values. [F1, F5, F9, step 1.1, step 2.1, construct, algebra]

4.1 We construct only a quadratic subfield of the GIVEN extension. If $\eta$ is trivial take $E=K$. Otherwise let $E=L^{\ker\eta}$, a quadratic extension of $K$ by [F7]. In the nontrivial case the canonical forward character $\chi_{E/K}$ from [F6] equals $\psi$: at every unramified prime of the given extension, Artin reciprocity gives $\psi(\mathfrak p)=\eta(\operatorname{Frob}_{\mathfrak p})$, which is $+1$ for split primes in $E/K$ and $-1$ for inert primes, exactly [F6]. Enlarge to one common ray modulus containing both conductors and the finite ramified primes of $L/K$. On its prime-to-modulus ideal group these equalities on prime generators identify the pullbacks, so [F7] identifies their primitive ancestors and full conductors. No converse class-field realization has been used. In this quadratic case the full zeta factorization [F6] extends meromorphically from above one by [F7], and both factors are holomorphic at $\beta_1\in(0,1)$. Thus $\beta_1$ is a real zero of $\zeta_E$; when $E=K$ this follows immediately from $L(s,\psi)=\zeta_K(s)$. Moreover $m=[E:\mathbb Q]\le2n$ and $D_E\le D^2Q_0$, with the same inequalities immediate for $E=K$. [F1, F3, F6, F7, step 3.1, construct, algebra]

4.2 For $1/2\le\sigma<1$, if $N^\circ>0$ choose one retained occurrence from its finite list. Its real part is greater than $\sigma$, so its distance $\Delta'$ from one is less than $\Delta$. It is not the designated exceptional occurrence subtracted in the Statement. Apply [F4] with fixed $\epsilon=1$, real exceptional character $\psi$ and this retained target. Its denominator is at most $C\log S$ and its positive numerator scale $L_D=\log(DQ_0T^ne^{C'n})$ is at most $C\log S$, by step 1.1. Rearrangement gives $\log(c/(\delta L_D))\le C\Delta\log S$, and therefore $\delta\log S\ge c' S^{-b\Delta}$. Thus $B_1\ge c''S^{-b\Delta}$ and multiplication with step 1.1 proves $N^\circ\le C B_1 S^{(a+b)\Delta}$. The rearrangement remains valid if the logarithm is nonpositive; if the count is zero the conclusion is immediate. [F4, F5, F9, step 1.1, step 3.1, algebra]

5.1 Applying [F8] to this $E$ gives $\delta\ge C^{-m}m^{-m}D_E^{-1}$. Since $m\le2n$, $m^m\le(2n)^{2n}=4^n(n^n)^2\le4^nS_0^2$ and $D_E\le S_0^2$, step 1.1's $n\le C\log S_0$ absorbs the fixed exponential factor and yields $\delta\ge S_0^{-A}$ after increasing an absolute effective $A$. Hence $B_1\ge c S^{-A}$, as $\log S\ge\log S_0\ge\log2$. If $0<\sigma<1/2$, then $\Delta>1/2$ and $B_1S^{2A\Delta}\ge c$. Multiplying with step 1.1 proves $N^\circ\le C B_1 S^{(a+2A)\Delta}$ throughout this full lower range. This includes the possible reflected exceptional zero at $1-\beta_1$; it is not incorrectly discarded or bounded by repulsion from itself. [F8, F9, step 1.1, step 3.1, step 4.1, algebra]

6.1 Choose an absolute effective integer $c_5$ at least the exponents in steps 1.1, 2.1, 5.1 and 4.2. All branches now give exactly $N^\circ\ll B_1(\mathcal Q T^n)^{c_5(1-\sigma)}$ for the original entire range $0<\sigma<1$, $T\ge1$. Because $T\ge1$, the unique real exceptional occurrence is in the original all-zero count precisely when $\sigma<\beta_1$. Hence $N^\circ$ is exactly the displayed count minus that explicit indicator; equivalently the full all-zero count is bounded by its exceptional indicator plus the density term. The count correction is exactly the displayed exceptional-occurrence subtraction. The polynomial effective gap needed for the small-$\sigma$ branch was proved by finite unit packing and does not assert the sharper exponent2 relative/Stark theorem. All choice hypotheses, $B_1$, absolute effectiveness and parameter ranges are retained; $\mathcal Q$ has the primary-source normalization stated above. [F1, F8, step 1.1, step 2.1, step 3.1, step 5.1, step 4.2, algebra] ∎

## Source correction

The primary formula(3-3) defines the all-zero count, while its proof invokes Weiss's $N_H^*$, which excludes the designated exceptional zero. A small exceptional factor cannot itself account for that omitted occurrence. This successor keeps the original definition and subtracts its exact indicator in the estimate, equivalently adding that indicator to the all-zero upper bound. Apart from that count correction and the primary-source parameter normalization below, the public hypotheses, exceptional factor and bound ranges are retained. The proof also supplies the actual effective-gap input for the full small-$\sigma$ range, rather than claiming that density and zero repulsion alone handle a reflected exceptional zero. Neither the full Stark theorem nor arbitrary-real-character class-field realization is imported.

A subsequent visual check of the primary source equation(3.1), cached page11, restores $\mathcal Q=D_KQ_0n_K^{n_K}$ in place of the former transcription $D_Kn_K^{n_K}Q_0^{n_K}$. The entire quantitative proof is unchanged: it uses only $S_0\ge D,Q_0,n^n$, $n\le C\log S_0$ when $S_0>1$, $D_E\le D^2Q_0\le S_0^2$ and $m^m\le4^nS_0^2$. These inequalities remain true for the smaller source parameter. The $S_0=1$ case is identical. The two changed sentences in the final numbered block report this parameter correction; all other proof bytes remain exact.
