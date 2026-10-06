---
id: lem-nonzero-multiplicative-functionals-on-lca-lone-are-fourier-evaluations
kind: lemma
title: Nonzero multiplicative functionals on L^1 of an LCA group are Fourier evaluations
dependency_level: 3
deps:
- def-fourier-transform-on-an-lca-group
- def-pontryagin-dual-and-compact-open-topology
- lem-lca-lone-convolution-is-a-commutative-banach-star-algebra
- lem-lca-translations-and-normalised-local-approximate-identities
- def-unital-banach-algebra
- def-character-and-maximal-ideal-space
- thm-characters-on-a-unital-banach-algebra-are-continuous
- def-l-p-space-as-a-quotient-by-null-functions
- def-integrable-real-and-complex-functions-and-their-integrals
- thm-c-c-is-dense-in-l-p-for-radon-measures
- thm-rmk-uniqueness-among-radon-measures
- def-compact-support-c-c-and-c-zero-on-an-lch-space
- lem-unit-circle-is-a-compact-metrizable-topological-group
- lem-complex-conjugation-and-modulus-laws
- def-bochner-integrable-function
- thm-bochner-integrability-criterion
- thm-bounded-linear-maps-commute-with-bochner-integration
- lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution
- lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set
- lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets
- def-dependent-choice
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: "Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand, 1953 (Harvard-hosted full scan)"
    url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
  - title: "Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards Number Theory, Appendix C.2-C.3 (course-hosted full text)"
    url: "https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Assume Dependent Choice. Let $G$ be a locally compact Hausdorff abelian group
with Haar measure $m_G$ and $A=L^1(G,m_G)$. If $h:A\to\mathbb C$ is a nonzero
multiplicative linear functional (no continuity assumed), then there exists a
unique $\gamma\in\widehat G$ such that
$$h(f)=\widehat f(\gamma)=\int_G f(x)\overline{\gamma(x)}\,dm_G(x)\qquad\text{for all }f\in A,$$
and consequently $|h(f)|\le\|f\|_1$; every such $h$ has norm $1$. Conversely
each $\gamma\in\widehat G$ gives such a functional.

## Facts & Assumptions

**Given:** Dependent Choice, a locally compact Hausdorff abelian group $G$ written additively with Haar measure $m_G$, the Banach algebra $A=L^1(G,m_G)$ with convolution and involution ([[lem-lca-lone-convolution-is-a-commutative-banach-star-algebra]], [[def-l-p-space-as-a-quotient-by-null-functions]]), and a nonzero multiplicative linear functional $h:A\to\mathbb C$.

[F1] The scalar unitisation $A^+=\mathbb C\oplus A$ with $(z,f)(w,g)=(zw,\,zg+wf+f*g)$ and $\|(z,f)\|=|z|+\|f\|_1$ is a nonzero unital complex Banach algebra, and $h^+(z,f):=z+h(f)$ is a character of it ([[def-unital-banach-algebra]], [[def-character-and-maximal-ideal-space]], [[lem-lca-lone-convolution-is-a-commutative-banach-star-algebra]]).

[F2] Characters of a nonzero unital complex Banach algebra are unital and satisfy $|\chi(a)|\le\|a\|$ ([[thm-characters-on-a-unital-banach-algebra-are-continuous]]).

[F3] Index by all admissible pairs $i=(U,u)$, ordered by reverse inclusion of $U$, and put $U_i=U$ and $u_i=u$. Each $u_i\in C_c(G;\mathbb R)$ is nonnegative and symmetric, with support in $U_i$, $\int_Gu_i\,dm_G=1$ and $\|u_i\|_1=1$, and $u_i*g\to g$ in $L^1$ for every $g\in A$. No simultaneous choice of a kernel for each neighbourhood is made ([[lem-lca-translations-and-normalised-local-approximate-identities]], [[def-dependent-choice]]).

[F4] Translations act on $A$ as norm-continuous linear isometries and satisfy $T_{x+y}=T_xT_y$ ([[lem-lca-translations-and-normalised-local-approximate-identities]]), and the Fourier transform is defined by $\widehat f(\gamma)=\int_Gf(x)\overline{\gamma(x)}\,dm_G(x)$ with $|\widehat f(\gamma)|\le\|f\|_1$ ([[def-fourier-transform-on-an-lca-group]]); it converts convolution into multiplication ([[lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution]]).

[F5] If a Radon measure $\nu$ on $G$ satisfies $\int_Gf\,d\nu=0$ for every $f\in C_c(G)$, then $\nu=0$ ([[thm-rmk-uniqueness-among-radon-measures]], [[def-compact-support-c-c-and-c-zero-on-an-lch-space]]); real $C_c(G)$ is dense in real $L^1$, and componentwise approximation extends this to density of $C_c(G;\mathbb C)$ in $A$ ([[thm-c-c-is-dense-in-l-p-for-radon-measures]]). Compactly supported cutoffs equal to one at a specified point and vanishing outside a specified open neighbourhood exist, and nonempty open sets have positive Haar measure ([[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]], [[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]]). Characters are maps into the unit circle $\mathbb T$ and $\overline{\gamma}\in\widehat G$ for $\gamma\in\widehat G$ ([[def-pontryagin-dual-and-compact-open-topology]], [[lem-unit-circle-is-a-compact-metrizable-topological-group]], [[lem-complex-conjugation-and-modulus-laws]]).

[F6] A strongly measurable Banach-valued function with integrable norm is Bochner integrable, and bounded linear maps commute with its integral ([[def-bochner-integrable-function]], [[thm-bochner-integrability-criterion]], [[thm-bounded-linear-maps-commute-with-bochner-integration]]).

## Proof

**Proof technique:** direct.

1.1 (Boundedness of $h$.) In the unitisation $A^+$ of [F1] the functional $h^+(z,f)=z+h(f)$ is multiplicative and unital: $h^+((z,f)(w,g))=zw+h(zg+wf+f*g)=zw+zh(g)+wh(f)+h(f)h(g)=h^+(z,f)h^+(w,g)$ by linearity and multiplicativity of $h$. By [F2] applied to the character $h^+$, $|h(f)|=|h^+(0,f)|\le\|(0,f)\|=\|f\|_1$ for every $f\in A$; in particular $h$ is bounded with $\|h\|\le1$. [F1, F2]

2.1 (The character ratio is independent of the reference function.) For $x\in G$ and $f,g\in A$ one has $T_x(f*g)=(T_xf)*g=f*(T_xg)$: evaluating at $z$ and substituting $y\mapsto y-x$ in the defining integral gives $(T_x(f*g))(z)=(f*g)(z-x)=\int_Gf(y)g(z-x-y)\,dm_G(y)$ and likewise for the other two expressions. Choose $f_0\in A$ with $h(f_0)\ne0$ and put $a(x):=h(T_xf_0)/h(f_0)$. For every $g\in A$, multiplicativity gives $h(T_xg)h(f_0)=h(T_x(g*f_0))=h(g)h(T_xf_0)=h(g)a(x)h(f_0)$. Dividing by the fixed nonzero $h(f_0)$ proves $h(T_xg)=a(x)h(g)$, including when $h(g)=0$. [F4, step 1.1]

3.1 ($a$ is a continuous character of $G$.) From $T_0=\mathrm{id}$ we get $a(0)=1$, and from $T_{x+y}=T_xT_y$ and step 2.1 applied twice, $$a(x+y)=\frac{h(T_xT_yf_0)}{h(f_0)}=\frac{a(x)h(T_yf_0)}{h(f_0)}=a(x)a(y).$$ Moreover $a$ is continuous: by step 1.1 $|a(x)-a(x_0)|=|h(T_xf_0-T_{x_0}f_0)|/|h(f_0)|\le\|T_xf_0-T_{x_0}f_0\|_1/|h(f_0)|\to0$ as $x\to x_0$, by the norm continuity of translations [F4]. Finally $a$ is bounded, $|a(x)|\le\|f_0\|_1/|h(f_0)|=:M$, and multiplicativity with $a(0)=1$ gives $a(nx)=a(x)^n$ for every $n\in\mathbb Z$; since $|a(x)|^n=|a(nx)|\le M$ for every $n\ge0$, necessarily $|a(x)|\le1$, and applying this bound to $-x$, where $a(-x)=a(x)^{-1}$, gives $|a(x)|\ge1$. Hence $|a(x)|=1$ and $\gamma:=\overline a$ takes values in the unit circle $\mathbb T$. [F4, step 2.1]

3.2 (The integral identity.) Let $f\in A$ and $u\in C_c(G)$. By the $\sigma$-compact essential-support reduction in the convolution-algebra supplier, represent $f$ as zero outside a countable union of compact sets $S$. The continuous orbit $x\mapsto T_xu$ has compact metric image on each of those compact sets, hence separable image there; Dependent Choice makes their countable union separable. Thus $F(x):=f(x)T_xu$, zero outside $S$, is strongly measurable by measurable scalar multiplication and countable simple approximations in this separable range. Its norm has integral $\|f\|_1\|u\|_1$, so [F6] makes it Bochner integrable. Its integral equals $f*u$: pairing against any $\psi\in C_c(G)$ commutes with the Bochner integral and the $\sigma$-finite Fubini calculation gives the same pairing as $f*u$. The uniqueness of $L^1$ densities from their $C_c$ pairings, proved in the convolution-algebra supplier, identifies the two elements of $A$. Since $h$ is bounded linear, bounded linear maps commute with Bochner integration, so $h(f*u)=\int_Gf(x)h(T_xu)\,dm_G(x)$, and by step 2.1 $h(T_xu)=a(x)h(u)$; hence $$h(f*u)=h(u)\int_Gf(x)a(x)\,dm_G(x).$$ [F3, F4, F6, step 1.1, step 2.1]

4.1 ($\gamma$ is a character.) The conjugate $\gamma=\overline a$ of the continuous homomorphism $a$ is a continuous homomorphism $G\to\mathbb T$, hence $\gamma\in\widehat G$. [F5, step 3.1]

5.1 (Identification of $h$.) Apply step 3.2 with $u=u_i$ from the all-admissible-pair net [F3] and let $i$ tend along that directed set. Since $f*u_i\to f$ in $A$ and $h$ is continuous, $h(f*u_i)\to h(f)$; since $f_0*u_i\to f_0$ and $h(u_i)h(f_0)=h(f_0*u_i)\to h(f_0)\ne0$, we get $h(u_i)\to1$. Therefore $h(f)=\int_Gf(x)a(x)\,dm_G(x)=\int_Gf(x)\overline{\gamma(x)}\,dm_G(x)=\widehat f(\gamma)$ for every $f\in A$. [F3, step 4.1, step 3.2]

6.1 (Uniqueness and norm.) The Fourier evaluations separate points of $\widehat G$: if $\widehat f(\gamma_1)=\widehat f(\gamma_2)$ for all $f\in A$, put $d:=\overline{\gamma_1}-\overline{\gamma_2}$. If $d(x_0)\ne0$, continuity gives a relatively compact open neighbourhood where $|d|$ is bounded below; a nonnegative cutoff $v\in C_c$ with $v(x_0)=1$ yields $f=\overline d v\in A$ and $\int_Gfd\,dm_G=\int_G|d|^2v\,dm_G>0$ by [F5], a contradiction. Hence $d=0$ and $\gamma_1=\gamma_2$. Finally $\|h\|=1$: step 1.1 gives $\|h\|\le1$, while $h(u_i)\to1$ and $\|u_i\|_1=1$ give $\|h\|\ge1$. The same argument applies to $h_\gamma(f):=\widehat f(\gamma)$: it is multiplicative by [F4] and bounded of norm at most $1$, and continuity of $\gamma$ at $0$ gives $|h_\gamma(u_i)-1|\le\sup_{x\in U_i}|\gamma(x)-1|\to0$ by the mass-one and support properties of [F3]. Thus it is nonzero and its norm is $1$; hence the converse holds for every $\gamma\in\widehat G$. [F3, F4, F5, step 1.1, step 5.1]

7.1 Steps 1.1, 2.1, 3.1, 3.2, 4.1 and 5.1 produce the unique $\gamma\in\widehat G$ with $h=h_\gamma$ and the bound $|h(f)|\le\|f\|_1$, step 6.1 proves uniqueness and that every such functional has norm $1$, and the converse is included in step 6.1. [step 1.1, step 2.1, step 3.1, step 4.1, step 3.2, step 5.1, step 6.1] ∎

