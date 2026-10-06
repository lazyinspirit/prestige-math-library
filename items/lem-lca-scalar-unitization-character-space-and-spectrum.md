---
id: lem-lca-scalar-unitization-character-space-and-spectrum
kind: lemma
title: "Scalar unitisation of L^1 of an LCA group: characters, spectrum and identity criterion"
dependency_level: 5
deps:
- lem-lca-lone-convolution-is-a-commutative-banach-star-algebra
- lem-lca-translations-and-normalised-local-approximate-identities
- lem-nonzero-multiplicative-functionals-on-lca-lone-are-fourier-evaluations
- lem-lca-lone-character-topology-is-the-compact-open-topology
- lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution
- def-left-haar-integral-and-left-haar-measure
- def-radon-measure-on-an-lch-space
- def-l-p-space-as-a-quotient-by-null-functions
- def-integrable-real-and-complex-functions-and-their-integrals
- lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets
- thm-absolute-continuity-of-the-integral
- thm-maximal-ideals-and-characters-of-a-commutative-banach-algebra
- thm-characters-on-a-unital-banach-algebra-are-continuous
- thm-maximal-ideal-space-is-compact-hausdorff
- def-gelfand-transform
- def-jacobson-radical-and-semisimple-commutative-banach-algebra
- thm-kernel-of-the-gelfand-transform-is-the-radical
- thm-spectrum-as-character-values
- thm-spectrum-is-nonempty-compact-and-norm-bounded
- thm-spectral-radius-formula
- def-spectral-radius
- def-holomorphic-functional-calculus
- thm-holomorphic-spectral-mapping
- cor-normal-operator-norm-equals-spectral-radius
- def-unital-banach-algebra
- def-one-point-compactification
- thm-c-c-is-dense-in-l-p-for-radon-measures
- def-dependent-choice
- def-axiom-of-choice
- def-complex-l-two-inner-product
- thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz
- thm-minkowski-integral-inequality
- thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
- thm-tonelli-theorem-for-sigma-finite-product-spaces
- lem-lca-haar-measure-is-inversion-invariant
- thm-riesz-fischer-completeness-of-l-p
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
  - title: "Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand, 1953 (Harvard-hosted full scan)"
    url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
  - title: "Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards Number Theory, Appendix C.2-C.3 (course-hosted full text)"
    url: "https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice and Dependent Choice. Let $G$ be a locally compact
Hausdorff abelian group with Haar measure $m_G$, $A=L^1(G,m_G)$ and let
$A^+=\mathbb C\oplus A$ with
$$(z,f)(w,g)=(zw,\ zg+wf+f*g),\qquad (z,f)^*=(\bar z,f^*),\qquad \|(z,f)\|=|z|+\|f\|_1 .$$
Then: (1) $A^+$ is a unital commutative complex Banach algebra (it is a Banach
$*$-algebra with $\|(z,f)^*\|=\|(z,f)\|$), and its characters are exactly
$q(z,f)=z$ and $h_\gamma^+(z,f)=z+\widehat f(\gamma)$, $\gamma\in\widehat G$;
(2) $\sigma_{A^+}(0,f)=\{0\}\cup\widehat f(\widehat G)$ for every $f\in A$;
(3) $A$ has an identity if and only if $G$ is discrete, and then the identity
is $m_G(\{0\})^{-1}\mathbf 1_{\{0\}}$; (4) $\Delta(A^+)$ is homeomorphic to
$\widehat G\cup\{q\}$, which is the one-point compactification of $\widehat G$
when $G$ is nondiscrete, while for discrete $G$ it is
$\widehat G\sqcup\{q\}$ with $q$ isolated; (5) $A$ is semisimple in the sense
that $\widehat f\equiv0$ implies $f=0$.

## Facts & Assumptions

**Given:** The Axiom of Choice and Dependent Choice, a locally compact Hausdorff abelian group $G$ with Haar measure $m_G$, $A=L^1(G,m_G)$ with its convolution, involution and norm ([[lem-lca-lone-convolution-is-a-commutative-banach-star-algebra]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-integrable-real-and-complex-functions-and-their-integrals]]), the product $A^+=\mathbb C\oplus A$ with the operations displayed above, and its character space $\Delta(A^+)$.

[F1] $A^+$ is a unital commutative complex Banach algebra with $\|(z,f)\|=|z|+\|f\|_1$ ([[def-unital-banach-algebra]], [[lem-lca-lone-convolution-is-a-commutative-banach-star-algebra]]); every character of a nonzero unital commutative Banach algebra is unital and satisfies $|\chi|\le\|\cdot\|$ ([[thm-characters-on-a-unital-banach-algebra-are-continuous]], [[thm-maximal-ideals-and-characters-of-a-commutative-banach-algebra]]).

[F2] The nonzero multiplicative linear functionals on $A$ are exactly $f\mapsto\widehat f(\gamma)$ for $\gamma\in\widehat G$ ([[lem-nonzero-multiplicative-functionals-on-lca-lone-are-fourier-evaluations]]), and under this bijection the topology of pointwise convergence on $A$ equals the compact-open topology of $\widehat G$ ([[lem-lca-lone-character-topology-is-the-compact-open-topology]]).

[F3] $\sigma(a)=\{\chi(a):\chi\in\Delta\}$ for every element $a$ of a commutative unital Banach algebra, and this spectrum is a nonempty compact subset of $\mathbb C$ ([[thm-spectrum-as-character-values]], [[thm-spectrum-is-nonempty-compact-and-norm-bounded]]); the spectral radius satisfies $r(a)=\lim_n\|a^n\|^{1/n}=\max\{|\lambda|:\lambda\in\sigma(a)\}$ ([[thm-spectral-radius-formula]], [[def-spectral-radius]]).

[F4] $\Delta(A^+)$ is compact Hausdorff and the Gelfand transform is injective exactly on the semisimple part: its kernel is the Jacobson radical ([[thm-maximal-ideal-space-is-compact-hausdorff]], [[def-gelfand-transform]], [[thm-kernel-of-the-gelfand-transform-is-the-radical]], [[def-jacobson-radical-and-semisimple-commutative-banach-algebra]]).

[F5] Holomorphic functional calculus and the holomorphic spectral mapping theorem are available in the unital Banach algebra $A^+$, and for a normal operator $T$ one has $\|T\|=r(T)$ ([[def-holomorphic-functional-calculus]], [[thm-holomorphic-spectral-mapping]], [[cor-normal-operator-norm-equals-spectral-radius]]).

[F6] $m_G$ is positive on nonempty open sets and finite on compact sets, and if $G$ is nondiscrete then $m_G(\{0\})=0$; conversely $m_G(\{0\})>0$ forces $G$ discrete: if $m_G(\{0\})=c>0$ then translation invariance makes every point an atom of mass $c$, so a compact neighbourhood $K$ satisfies $c\,|K|\le m_G(K)<+\infty$ and is finite, and a finite Hausdorff neighbourhood of $0$ contains an open neighbourhood of $0$ inside which $\{0\}$ is open ([[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]], [[def-left-haar-integral-and-left-haar-measure]], [[def-radon-measure-on-an-lch-space]]).

[F7] If $G$ is nondiscrete, so $m_G(\{0\})=0$, for a finite measure $\nu=\int(\cdot)|u|\,dm_G$ with $u\in L^1$ and $\varepsilon>0$ there is an identity neighbourhood $V$ with $\nu(V)<\varepsilon$: absolute continuity of the integral gives $\delta>0$ with $m_G(E)<\delta\Rightarrow\nu(E)<\varepsilon$, and outer regularity of $m_G$ at $\{0\}$ with $m_G(\{0\})=0$ gives an open $V\ni0$ with $m_G(V)<\delta$ ([[thm-absolute-continuity-of-the-integral]], [[def-radon-measure-on-an-lch-space]], [[def-left-haar-integral-and-left-haar-measure]]).

[F8] The approximate identity $\{u_U\}$ of $C_c(G)$ satisfies $u_U*f\to f$ in $A$ along the identity neighbourhoods ([[lem-lca-translations-and-normalised-local-approximate-identities]]), and $C_c(G)$ is dense in $A$ with $\widehat{f*g}=\widehat f\widehat g$, $\widehat{f^*}=\overline{\widehat f}$ ([[thm-c-c-is-dense-in-l-p-for-radon-measures]], [[lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution]], [[def-dependent-choice]], [[def-axiom-of-choice]]).

[F9] Every $L^p$ function used below ($p=1,2$) has a $\sigma$-compact essential support: its level sets $E_n=\{|u|>1/n\}$ have finite measure; outer regularity puts each inside an open set $U_n$ of finite measure, and inner regularity covers $U_n$ up to a null set by a countable union of compact subsets; take the union over $n$. Translation is an isometry on $L^2(G)$, $C_c(G)$ is dense in $L^2(G)$, and $L^2(G)$ is complete ([[def-left-haar-integral-and-left-haar-measure]], [[def-radon-measure-on-an-lch-space]], [[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]], [[def-dependent-choice]], [[lem-lca-translations-and-normalised-local-approximate-identities]], [[thm-c-c-is-dense-in-l-p-for-radon-measures]], [[thm-riesz-fischer-completeness-of-l-p]]).

[F10] Minkowski's integral inequality gives $\|\int_G H(\cdot,x)\,dm_G(x)\|_2\le\int_G\|H(\cdot,x)\|_2\,dm_G(x)$ on the $\sigma$-finite essential-support product used below; Cauchy--Schwarz gives $\int_G|g(y)h(x+y)|\,dm_G(y)\le\|g\|_2\|h\|_2$ ([[thm-minkowski-integral-inequality]], [[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]).

[F11] Tonelli and Fubini apply to the absolutely integrable products on the $\sigma$-finite products of essential supports, and Haar measure is invariant under inversion ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[lem-lca-haar-measure-is-inversion-invariant]]).

## Proof

**Proof technique:** direct.

1.1 ($A^+$ is a unital commutative Banach $*$-algebra.) Bilinearity, associativity, commutativity and the involution laws of the product $(z,f)(w,g)=(zw,zg+wf+f*g)$ follow from the corresponding laws of convolution in $A$ and the fact that $(z,f)=z(1,0)+(0,f)$ with $(1,0)$ a unit; the norm is submultiplicative because $\|(z,f)(w,g)\|_1\le|z||w|+|z|\|g\|_1+|w|\|f\|_1+\|f\|_1\|g\|_1=(|z|+\|f\|_1)(|w|+\|g\|_1)$, and $A^+=\mathbb C\oplus A$ with the $\ell^1$-norm is complete because $\mathbb C$ and $A$ are. Moreover $\|(z,f)^*\|=|\bar z|+\|f^*\|_1=|z|+\|f\|_1=\|(z,f)\|$ by the isometry of the involution. [F1]



1.2 (Characters of $A^+$.) Let $\chi$ be a character of $A^+$. Since $\chi$ is unital, $\chi(z,0)=z$. Let $h:=\chi|_{A}$ be the restriction to the ideal $\{0\}\oplus A$, identified with $A$. If $h=0$ then $\chi(z,f)=z=q(z,f)$. If $h\ne0$, then $h$ is a nonzero multiplicative linear functional on $A$, so by [F2] there is a unique $\gamma\in\widehat G$ with $h(f)=\widehat f(\gamma)$ for all $f$; hence $\chi(z,f)=z+\widehat f(\gamma)=h_\gamma^+(z,f)$. Conversely $q$ is the character of the quotient $A^+/(A)$ and each $h_\gamma^+$ is a character: $h_\gamma^+((z,f)(w,g))=zw+\widehat{zg+wf+f*g}(\gamma)=zw+z\widehat g(\gamma)+w\widehat f(\gamma)+\widehat f(\gamma)\widehat g(\gamma)$ by linearity and the convolution identity of [F8], which is the product of $h_\gamma^+(z,f)$ and $h_\gamma^+(w,g)$. [F1, F2, F8]



1.3 (The identity criterion, discrete case.) If $G$ is discrete then $\{0\}$ is open and nonempty, so $c:=m_G(\{0\})>0$ by [F6]; the class $u:=c^{-1}\mathbf 1_{\{0\}}$ lies in $A$ and for every $f\in A$, using $m_G(\{x\})=c$ and the definition of convolution, $(f*u)(x)=c^{-1}\int_Gf(y)\mathbf 1_{\{0\}}(x-y)\,dm_G(y)=c^{-1}f(x)m_G(\{x\})=f(x)$ for a.e. $x$; hence $u$ is an identity of $A$. [F6]



2.1 (The spectrum.) By [F3] applied to $A^+$ and the character list of step 1.2, $\sigma_{A^+}(0,f)=\{\chi(0,f):\chi\in\Delta(A^+)\}=\{0\}\cup\{\widehat f(\gamma):\gamma\in\widehat G\}$. [F3, step 1.2]



2.2 (The identity criterion, nondiscrete case.) Suppose $G$ is nondiscrete and $A$ has an identity $u$. By [F6], $m_G(\{0\})=0$, so [F7] provides an open identity neighbourhood $V_0$ with $\int_{V_0}|u|\,dm_G<1$; replacing it by $V_0\cap(-V_0)$ we may take $V$ symmetric. Choose a symmetric open $W$ with compact closure and $W-W\subseteq V$ (continuity of addition and local compactness). Then $W$ has $m_G(W)>0$ and $\mathbf 1_W\in A$, so $1_W=u*1_W$ a.e.; but for every $x\in W$ the defining integral $(u*1_W)(x)=\int_{x-W}u(y)\,dm_G(y)$ satisfies $x-W=x+W\subseteq W+W\subseteq V$ (symmetry of $W$), hence $|(u*1_W)(x)|\le\int_V|u|<1$, contradicting $(u*1_W)(x)=1$ on a set of positive measure. Therefore $A$ has no identity. [F6, F7, step 1.3]



2.3 (The character space of $A^+$.) By [F4] the space $\Delta(A^+)$ is compact Hausdorff and by step 1.2 the map sending $\gamma$ to $h_\gamma^+$ and the point $q$ to the restriction character is a bijection onto $\Delta(A^+)$. The topology is the topology of pointwise convergence on $A^+$: a net $h_{\gamma_i}^+\to h_{\gamma_0}^+$ iff $\widehat f(\gamma_i)\to\widehat f(\gamma_0)$ for all $f\in A$, which by [F2] is exactly the compact-open convergence $\gamma_i\to\gamma_0$; hence the restriction of the homeomorphism to $\widehat G$ identifies $\widehat G$ with the open subspace $\Delta(A^+)\setminus\{q\}$. [F2, F4, step 1.2]



3.1 (Semisimplicity of $A$.) For $f\in L^1(G)$ and $g\in L^2(G)$ choose $\sigma$-compact essential supports $S_f,S_g$ using [F9], and set $S=S_f+S_g$, also $\sigma$-compact and of $\sigma$-finite Haar measure. The measurable function $H(t,x):=|f(x)|\,|g(t-x)|$ on $S\times S_f$ has, by Minkowski [F10] and translation isometry [F9], $\left\|\int_{S_f}|f(x)|\,|g(\cdot-x)|\,dm_G(x)\right\|_{L^2(S)}\le\int_{S_f}|f(x)|\,\|g(\cdot-x)\|_{L^2(S)}\,dm_G(x)=\|f\|_1\|g\|_2$. The integral on the left is finite a.e.; therefore the defining convolution integral $(f*g)(t):=\int_G f(x)g(t-x)\,dm_G(x)$ converges absolutely for a.e. $t$ and determines an $L^2$ class with $\|f*g\|_2\le\|f\|_1\|g\|_2$. Thus $\lambda(f)g:=f*g$ is a well-defined bounded linear operator and $\|\lambda(f)\|\le\|f\|_1$. For $f_1,f_2\in L^1$ and $g\in C_c(G)\subset L^1\cap L^2$, the L$^1$ convolution associativity supplier gives $(f_1*f_2)*g=f_1*(f_2*g)$ a.e.; the L$^1$ and L$^2$ definitions here use the same a.e.-defined convolution integrals, and both sides are in $L^2$ by the bound just proved. Since $C_c(G)$ is dense in $L^2$ [F9] and all three convolution operators are bounded, this identity extends to every $g\in L^2$. Hence $\lambda(f_1*f_2)=\lambda(f_1)\lambda(f_2)$, and $\lambda^+:A^+\to\mathcal B(L^2)$, $\lambda^+(z,f)=zI+\lambda(f)$, is a unital algebra homomorphism. For $g,h\in L^2(G)$, the integral of $|f(x)g(y)h(x+y)|$ over $S_f\times S_g$ is bounded by $\|f\|_1\|g\|_2\|h\|_2$: for each $x$, Cauchy--Schwarz and translation isometry give $\int_G|g(y)h(x+y)|\,dm_G(y)\le\|g\|_2\|h\|_2$, and then integrate against $|f(x)|$. Thus Fubini [F11] and the substitution $z=x-y$ yield $\langle\lambda(f)g,h\rangle=\int_G\int_G f(y)g(z)\overline{h(y+z)}\,dm_G(z)\,dm_G(y)=\langle g,\lambda(f^*)h\rangle$. Here the last equality follows from $(f^**h)(z)=\int_G\overline{f(-w)}h(z-w)\,dm_G(w)=\int_G\overline{f(y)}h(z+y)\,dm_G(y)$ by the inversion-invariant Haar substitution $y=-w$. Therefore $\lambda(f)^*=\lambda(f^*)$; in particular, $f=f^*$ makes $\lambda(f)$ self-adjoint and hence normal. The representation is faithful: if $\lambda(f)=0$, then $f*u_U=\lambda(f)u_U=0$ for every approximate-identity function $u_U\in C_c(G)\subset L^2(G)$, while $f*u_U\to f$ in $A$ by [F8], so $f=0$. For self-adjoint $f=f^*$, the unital homomorphism $\lambda^+$ gives spectral inclusion $\sigma_{\mathcal B(L^2)}(\lambda(f))\subseteq\sigma_{A^+}(0,f)=\{0\}\cup\widehat f(\widehat G)$ by step 2.1; as $\lambda(f)$ is normal, [F5] yields $\|\lambda(f)\|=r(\lambda(f))\le\sup_{\gamma\in\widehat G}|\widehat f(\gamma)|$. Thus $\widehat f\equiv0$ implies $\lambda(f)=0$ and then $f=0$ for every self-adjoint $f$. For arbitrary $f$, $f^* * f$ is self-adjoint and $\widehat{f^* * f}=\overline{\widehat f}\,\widehat f=|\widehat f|^2$ by [F8]; if $\widehat f\equiv0$, the preceding self-adjoint case gives $f^* * f=0$, and the adjoint identity gives $\lambda(f)^*\lambda(f)=\lambda(f^* * f)=0$, whence $\lambda(f)=0$ and faithfulness gives $f=0$. Therefore $A$ is semisimple and (5) holds. [F1, F5, F8, F9, F10, F11, step 2.1]



4.1 (Isolation of $q$ and the one-point compactification.) If $G$ is discrete then by step 1.3 $A$ has an identity $u$ with $\widehat u\equiv1$; the continuous function $\chi\mapsto\chi(1,-u)$ on $\Delta(A^+)$ equals $1$ at $q$ and $0$ at every $h_\gamma^+$, so $\{q\}$ is open and $q$ is isolated. If $G$ is nondiscrete, suppose $q$ were isolated; then $\widehat G\cong\Delta(A^+)\setminus\{q\}$ would be compact, and we choose finitely many $f_1,\dots,f_m\in A$ with $\bigcup_j\{\widehat f_j\ne0\}=\widehat G$ (a finite subcover of the cover by the open sets $\{\widehat f\ne0\}$). Put $b:=\sum_jf_j*f_j^*$, so $\widehat b=\sum_j|\widehat f_j|^2>0$ on $\widehat G$ and, $\widehat G$ being compact, $\widehat b\ge c>0$ there; by step 2.1, $\sigma_{A^+}(0,b)=\{0\}\cup\widehat b(\widehat G)\subseteq\{0\}\cup[c,\infty)$. By [F5] applied to the function that is $0$ near $0$ and $1$ near $[c,\infty)$, the element $e:=\varphi(0,b)$ is an idempotent of $A^+$ with $h_\gamma^+(e)=\varphi(\widehat b(\gamma))=1$ for every $\gamma$ and $q(e)=\varphi(0)=0$; thus $e\in A$ and $\widehat{e*f}=\widehat e\widehat f=\widehat f$ for every $f\in A$. Semisimplicity (step 3.1) gives $e*f=f$ for all $f$, so $e$ is an identity of $A$, contradicting step 2.2. Hence $q$ is not isolated, $\Delta(A^+)\setminus\{q\}$ is dense, and $\Delta(A^+)$ is the one-point compactification of its open dense subspace $\widehat G$: neighbourhoods of $q$ are exactly the complements of compact subsets of $\widehat G$ ([[def-one-point-compactification]]). [F4, F5, step 2.1, step 2.2, step 3.1, step 2.3]



5.1 Steps 1.1 and 1.2 prove (1), step 2.1 proves (2), steps 1.3 and 2.2 prove (3), steps 2.3 and 4.1 prove (4), and step 3.1 proves (5). [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2, step 2.3, step 3.1, step 4.1] ∎
