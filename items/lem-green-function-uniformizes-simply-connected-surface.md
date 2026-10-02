---
id: lem-green-function-uniformizes-simply-connected-surface
kind: lemma
title: "A simply connected Greenian Riemann surface is a disc"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-riemann-surface-and-holomorphic-atlas
  - def-simply-connected
  - def-canonical-green-kernel-riemann-surface
  - lem-green-envelope-dichotomy-and-logarithmic-pole
  - lem-harmonic-conjugates-and-log-pole-monodromy-on-surfaces
  - lem-green-kernel-symmetry-on-riemann-surfaces
  - lem-locality-of-subharmonicity
  - def-harmonic-and-subharmonic-riemann-surface-functions
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - thm-disc-automorphisms-are-rotated-blaschke-factors
  - thm-isolated-zeros-holomorphic-function
  - thm-zero-order-factorization-holomorphic-function
  - lem-locally-zero-locus-clopen-holomorphic-function
  - thm-open-mapping-theorem-holomorphic-functions
  - lem-log-modulus-is-harmonic-off-its-centre
  - thm-conformal-invariance-of-plane-harmonicity
  - lem-puncturing-connected-open-subset-of-rn-preserves-path-connectedness
  - def-connected-space
  - def-interior-closure-boundary-top
  - def-subspace-topology-top
  - def-compact-space
  - def-hausdorff-space
  - thm-compact-subset-of-a-hausdorff-space-is-closed
  - thm-continuous-image-of-a-connected-space
  - def-based-loops-and-fundamental-group
  - prop-fundamental-group-is-a-functor-on-pointed-spaces
  - thm-fundamental-group-laws
  - lem-trivial-fundamental-group-implies-null-homology-for-plane-domains
  - def-complex-domain
  - thm-riemann-mapping-theorem
  - cor-injective-holomorphic-derivative-nonzero
  - def-biholomorphic-map
  - thm-maximum-principle-for-plane-subharmonic-functions
  - lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity
  - thm-c-two-characterization-of-plane-subharmonicity
  - def-plane-subharmonic-function
  - def-plane-harmonic-function
  - def-upper-semicontinuous-real-map-on-a-topological-space
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Donald E. Marshall, The Uniformization Theorem"
      url: "https://sites.math.washington.edu/~marshall/math_536/uniformizationII.pdf"
      locator: "PDF pp. 7-8, proof of Theorem 4, Case 1: the monodromy construction of phi with |phi| = exp(-g_W), the normalised function phi_1 built from a disc automorphism, the maximum-principle inequality (12), the symmetry (11) and the injectivity argument; PDF p. 8, the Riemann mapping endgame"
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 1 section 5, printed pp. 115-118 (Green functions, the disc model and the injectivity argument)"
---

## Statement

Assume the Axiom of Choice. Let $X$ be a simply connected Riemann surface
([[def-riemann-surface-and-holomorphic-atlas]], [[def-simply-connected]]) which
admits a finite canonical Green kernel at some point $p_0\in X$
([[def-canonical-green-kernel-riemann-surface]]). Then $X$ is biholomorphic to
the unit disc $\mathbb D$.

## Facts & Assumptions
**Given:** The Axiom of Choice; a simply connected Riemann surface $X$; a point $p_0\in X$; the Perron envelope $g_0:=g_X(\cdot,p_0)$ of [[def-canonical-green-kernel-riemann-surface]], finite on $X\setminus\{p_0\}$; a centred chart $z:U\to\mathbb D$ at $p_0$.

[A1] The Axiom of Choice ([[def-axiom-of-choice]]): every family of nonempty sets has a choice function; applied to countable families this yields the Countable Choice $\mathrm{AC}_\omega$ of [[def-countable-choice]] used by the Green-envelope suppliers [F3] and [F5], and it is the hypothesis of the Riemann mapping theorem in [F15].

[F1] Riemann surfaces and holomorphic maps ([[def-riemann-surface-and-holomorphic-atlas]], [[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]]): $X$ is nonempty, connected, Hausdorff and second countable with a holomorphic atlas, a nonempty connected open subset with the restricted charts is again a Riemann surface, and centred charts exist at every point ([[def-canonical-green-kernel-riemann-surface]]); restrictions and composites of holomorphic maps between Riemann surfaces are holomorphic, and every holomorphic map is continuous.

[F2] Canonical Green kernel and Perron family ([[def-canonical-green-kernel-riemann-surface]]): centred charts, the Perron family $\mathcal F_p(V)$ of nonnegative subharmonic functions on $V\setminus\{p\}$ vanishing off a compact set $K\subseteq V$ and having at most a unit logarithmic pole at $p$, the envelope $g_V(\cdot,p)=\sup\{v(\cdot):v\in\mathcal F_p(V)\}$, and the notion of a finite canonical Green kernel at $p$.

[F3] Dichotomy, logarithmic pole and leastness ([[lem-green-envelope-dichotomy-and-logarithmic-pole]]): for a Riemann surface $V$ and a pole $p$, the envelope of $\mathcal F_p(V)$ is either $+\infty$ everywhere on $V\setminus\{p\}$, or finite, strictly positive and harmonic there with $g_V(\cdot,p)+\log|w|$ extending harmonically across $p$ for every centred chart $w$; in the finite case $g_V(\cdot,p)\le H$ for every positive harmonic $H$ on $V\setminus\{p\}$ whose sum with $\log|w|$ extends harmonically across $p$.

[F4] Harmonic conjugates and logarithmic poles ([[lem-harmonic-conjugates-and-log-pole-monodromy-on-surfaces]]): for a simply connected Riemann surface $Y$, a finite set $P\subseteq Y$ and a harmonic $u:Y\setminus P\to\mathbb R$ which in centred charts at the points of $P$ has the form $u=-m_j\log|w_j|+h_j$ with $m_j\in\mathbb Z$ and $h_j$ harmonic, the function $u$ has a locally defined harmonic conjugate on $Y\setminus P$ and $F:=\exp(-(u+iv))$ is a single-valued holomorphic function $Y\setminus P\to\mathbb C^\times$ with $|F|=e^{-u}$ which extends to a meromorphic function $F:Y\to\widehat{\mathbb C}$ satisfying $F=w_j^{m_j}G_j$ near $p_j$ with $G_j$ holomorphic and $G_j(p_j)\ne0$; consequently $F$ has a zero of order $m_j$ at $p_j$ when $m_j>0$, a pole of order $-m_j$ when $m_j<0$, is holomorphic and nonzero there when $m_j=0$, and has no zeros or poles outside $P$.

[F5] Symmetry of the kernel ([[lem-green-kernel-symmetry-on-riemann-surfaces]]): if a Riemann surface admits finite canonical Green kernels at two distinct points $p,q$, then $g(p,q)=g(q,p)$.

[F6] Locality of subharmonicity ([[lem-locality-of-subharmonicity]]): a function on an open subset $W$ of a Riemann surface is subharmonic as soon as every point of $W$ has an open neighbourhood on which it is subharmonic, and the notion is chartwise ([[def-harmonic-and-subharmonic-riemann-surface-functions]]).

[F7] Chartwise analysis and the strong maximum principle ([[def-harmonic-and-subharmonic-riemann-surface-functions]], [[def-plane-harmonic-function]], [[def-plane-subharmonic-function]], [[thm-c-two-characterization-of-plane-subharmonicity]], [[lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity]], [[thm-maximum-principle-for-plane-subharmonic-functions]], [[def-upper-semicontinuous-real-map-on-a-topological-space]]): harmonicity and subharmonicity of functions on a surface are the chartwise plane notions; a function is subharmonic exactly when it is upper semicontinuous, is not identically $-\infty$ on any component, and satisfies the chartwise submean inequality, so subharmonic functions are upper semicontinuous and locally bounded above; restrictions to open subsets preserve subharmonicity; harmonic functions are subharmonic, sums and nonnegative multiples of harmonic functions are harmonic, nonnegative linear combinations and finite maxima of subharmonic functions are subharmonic; and a subharmonic function on a connected surface domain which attains its finite maximum at an interior point is constant.

[F8] Disc automorphisms ([[thm-disc-automorphisms-are-rotated-blaschke-factors]]): a holomorphic self-map of $\mathbb D$ is an automorphism of $\mathbb D$ if and only if it has the form $w\mapsto e^{i\theta}\frac{a-w}{1-\overline a\,w}$ with $a\in\mathbb D$ and $\theta\in\mathbb R$; in particular $w\mapsto\frac{w-a}{1-\overline aw}$, whose inverse is $w\mapsto\frac{w+a}{1+\overline aw}$, is an automorphism of $\mathbb D$.

[F9] Zeros of holomorphic functions ([[thm-isolated-zeros-holomorphic-function]], [[thm-zero-order-factorization-holomorphic-function]], [[lem-locally-zero-locus-clopen-holomorphic-function]], [[thm-open-mapping-theorem-holomorphic-functions]]): a holomorphic function on a complex domain which is not identically zero has only isolated zeros, and at a zero of finite order $m$ it factors locally as $(w-w_0)^mg(w)$ with $g$ holomorphic and $g(w_0)\ne0$; the locus of points near which a holomorphic function vanishes is clopen in its domain; a nonconstant holomorphic function on a complex domain is an open map. Chartwise, for a holomorphic $f:W\to\mathbb C$ on a surface domain $W$ which is not constant on any nonempty open subset: the zero set is closed and locally finite, near each zero $f$ factors as a power of a chart coordinate times a nonvanishing holomorphic factor, $f$ is an open map, and the complement of the zero set is dense.

[F10] The logarithm of the modulus ([[lem-log-modulus-is-harmonic-off-its-centre]], [[thm-conformal-invariance-of-plane-harmonicity]]): $w\mapsto\log|w-c|$ is harmonic on $\mathbb C\setminus\{c\}$, and harmonicity is preserved by precomposition with a holomorphic map (in the chartwise sense of [F7]); hence for a holomorphic $f$ on a surface domain the function $\log|f|$ is harmonic on the complement of the zero set of $f$ and tends to $-\infty$ at every zero of finite order.

[F11] Punctured plane domains ([[lem-puncturing-connected-open-subset-of-rn-preserves-path-connectedness]]): if $n\ge2$, $\Omega\subseteq\mathbb R^n$ is nonempty, open and connected, and $y\in\Omega$, then $\Omega\setminus\{y\}$ is nonempty, open, connected and path-connected; in particular a punctured open ball in $\mathbb C$ is connected.

[F12] Connectedness, closure and compactness ([[def-connected-space]], [[def-subspace-topology-top]], [[def-interior-closure-boundary-top]], [[def-compact-space]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[def-hausdorff-space]], [[thm-continuous-image-of-a-connected-space]]): a space is connected exactly when it has no separation into two disjoint nonempty open subsets; a subset of a space carries the subspace topology, in which the closed sets are the traces of closed sets; the closure of a finite union is the union of the closures and a set is dense exactly when its closure is the whole space; a closed subset of a compact space is compact and a compact subset of a Hausdorff space is closed; and continuous images of connected spaces are connected.

[F13] Fundamental groups ([[def-simply-connected]], [[def-based-loops-and-fundamental-group]], [[prop-fundamental-group-is-a-functor-on-pointed-spaces]], [[thm-fundamental-group-laws]]): simply connected means nonempty and path-connected with $\pi_1$ of cardinality one at every basepoint; a basepoint-preserving continuous map induces a group homomorphism of fundamental groups, functorially; and the identity element of $\pi_1$ is the class of the constant loop.

[F14] Plane simple connectivity ([[lem-trivial-fundamental-group-implies-null-homology-for-plane-domains]]): if $\Omega\subseteq\mathbb C$ is a complex domain in which every based loop represents the identity class in its fundamental group, then $\Omega$ is homologically simply connected.

[F15] Riemann mapping theorem ([[thm-riemann-mapping-theorem]]): under the Axiom of Choice, for every proper homologically simply connected complex domain $\Omega\subsetneq\mathbb C$ and every $z_0\in\Omega$ there is a biholomorphic map $f:\Omega\to\mathbb D$ with $f(z_0)=0$.

[F16] Injectivity, biholomorphy and complex domains ([[cor-injective-holomorphic-derivative-nonzero]], [[def-complex-domain]], [[def-biholomorphic-map]]): an injective holomorphic map on a complex domain has nowhere-zero derivative and is biholomorphic onto its open image, which is a complex domain; a complex domain is a nonempty open connected subset of $\mathbb C$.

## Proof

1.1 **The kernel at $p_0$.** By the given data and [F2], [F3], the envelope $g_0$ is finite, strictly positive and harmonic on $X\setminus\{p_0\}$. The compact case of [F3] is identically infinite, so the given finite envelope forces $X$ to be noncompact. In the centred chart $z:U\to\mathbb D$ at $p_0$ there is a harmonic function $h_1$ on $U$ with $g_0=-\log|z|+h_1$ on $U\setminus\{p_0\}$. [F2, F3, given]

2.1 **The holomorphic map with $|\phi|=e^{-g_0}$.** Apply [F4] with $Y:=X$, $P:=\{p_0\}$, $u:=g_0$, $m_1:=1$ and $h_1$ as in step 1.1: there is a meromorphic function $F:X\to\widehat{\mathbb C}$ with $|F|=e^{-g_0}$ on $X\setminus\{p_0\}$, with $F=z\,G$ near $p_0$ for a holomorphic $G$ satisfying $G(p_0)\ne0$, and with no zeros or poles outside $p_0$. Since the only local exponent is $m_1=1>0$, the function $F$ has no poles at all; taking values in $\mathbb C$ it is a holomorphic map $\phi:=F:X\to\mathbb C$ [F1], with a simple zero at $p_0$ and no other zeros, and $|\phi(x)|=e^{-g_0(x)}<1$ for every $x\ne p_0$ by the strict positivity in step 1.1. In particular $\phi(p_0)=0$ and $\phi(X)\subseteq\mathbb D$. [F1, F4, step 1.1]

3.1 **The normalised map at an arbitrary second point.** Fix $p_1\in X\setminus\{p_0\}$ and put $a:=\phi(p_1)$, so $a\in\mathbb D\setminus\{0\}$ because $p_1\ne p_0$ and $p_0$ is the only zero of $\phi$ (step 2.1). By [F8] the map $\Phi_a(w):=\frac{w-a}{1-\overline a\,w}$ is an automorphism of $\mathbb D$, so $\phi_1:=\Phi_a\circ\phi:X\to\mathbb D$ is holomorphic with $|\phi_1|<1$ on $X$ [F1, F8]. Moreover $\phi_1(p_1)=0$ and $\phi_1(p_0)=\Phi_a(0)=-a\ne0$. The map $\phi_1$ is not constant on any nonempty open subset (such a constancy would make $\phi=\Phi_a^{-1}\circ\phi_1$ constant there, and then $\phi$, being holomorphic on the connected surface $X$, would be constant by the clopenness in [F9], contradicting $\phi(p_0)=0\ne a=\phi(p_1)$); hence [F9] makes its zero set $Z_1:=\phi_1^{-1}(0)=\{x\in X:\phi(x)=a\}$ closed, and every point of $Z_1$ has an open neighbourhood meeting $Z_1$ only in that point, so that $Z_1$ is locally finite. [F1, F8, F9, step 2.1]

4.1 **Marshall's maximum-principle inequality.** Let $v\in\mathcal F_{p_1}(X)$ and $\varepsilon>0$, and put $u_\varepsilon:=v+(1+\varepsilon)\log|\phi_1|$ on $X\setminus Z_1$; note that $X\setminus Z_1\subseteq X\setminus\{p_1\}$ because $\phi_1(p_1)=0$. We show $u_\varepsilon\le0$ on $X\setminus Z_1$. (i) $u_\varepsilon$ is subharmonic on $X\setminus Z_1$: the restriction of $v$ is subharmonic there, $(1+\varepsilon)\log|\phi_1|$ is harmonic on $X\setminus Z_1$ by [F10] and [F7], and a nonnegative multiple of a harmonic function is subharmonic while sums of subharmonic functions are subharmonic [F7]. (ii) Let $\hat u:=\max(u_\varepsilon,0)$ on $X\setminus Z_1$ and $\hat u:=0$ on $Z_1$. Near a point $z\in Z_1$ with $z\ne p_1$, the function $v$ is upper semicontinuous and finite at $z$, hence bounded above on a neighbourhood of $z$ [F7], while $\log|\phi_1(x)|\to-\infty$ as $x\to z$ by [F10]; near $z=p_1$ the unit pole condition $v\le-\log|w|+C$ in a centred chart $w$ at $p_1$ [F2] and the factorisation $\phi_1=w^{k}G$ with $k\ge1$ and $G(p_1)\ne0$ [F9] give $u_\varepsilon\le\bigl(k(1+\varepsilon)-1\bigr)\log|w|+C'$, which tends to $-\infty$ because $k(1+\varepsilon)>1$. Hence $u_\varepsilon<0$, and so $\hat u=0$, on a neighbourhood of every point of $Z_1$; consequently $\hat u$ is upper semicontinuous on $X$, and near every point of $Z_1$ it is the constant $0$, hence subharmonic there, so by the locality of subharmonicity [F6] the function $\hat u$ is subharmonic on $X$. (iii) The function $\hat u$ is nonnegative, and it vanishes on the nonempty open set $X\setminus K$, where $K$ is a compact support of $v$ [F2]; since $X$ is noncompact by step 1.1, $X\setminus K$ is nonempty. The upper semicontinuous $\hat u$ is bounded above on compact $K$: its open strict sublevels at positive integer thresholds cover $K$, so a finite subcover gives a finite upper bound; outside $K$ it is zero. Let $M:=\sup_X\hat u<\infty$. If $M>0$ then for every $n\ge0$ the set $F_n:=\{x\in K:\hat u(x)\ge M-1/(n+1)\}$ is a nonempty closed subset of $K$, these sets decrease, and compactness of $K$ [F12] gives a point $x^*\in\bigcap_nF_n$ (otherwise the increasing open sets $K\setminus F_n$ would cover the compact $K$ with no finite subcover), that is, $\hat u(x^*)=M$; the chartwise strong maximum principle [F7] applied on the connected surface $X$ then makes $\hat u\equiv M$ constant, contradicting $\hat u=0$ on $X\setminus K\ne\varnothing$. Hence $M=0$ and $u_\varepsilon\le0$ on $X\setminus Z_1$. (iv) Fix $p\in X\setminus Z_1$. Since $u_\varepsilon(p)\le0$ for every $v\in\mathcal F_{p_1}(X)$ and every $\varepsilon>0$, the definition of the envelope as a supremum [F2] gives $g_X(p,p_1)\le-(1+\varepsilon)\log|\phi_1(p)|$; letting $\varepsilon\downarrow0$ yields $g_X(p,p_1)\le-\log|\phi_1(p)|<+\infty$. [F2, F6, F7, F9, F10, F12, step 3.1, algebra]

4.2 **The complement of $Z_1$ is connected.** $Z_1$ is closed and locally finite by step 3.1, and it has empty interior because every point of $Z_1$ has a neighbourhood meeting $Z_1$ only in that point; hence $X\setminus Z_1$ is dense in $X$ [F12]. Suppose $X\setminus Z_1=A\sqcup B$ with $A,B$ nonempty disjoint open subsets of $X\setminus Z_1$. Since $Z_1$ is closed, $A$ and $B$ are open in $X$ [F12]; since $X\setminus Z_1$ is dense, $X=\overline{A\cup B}=\overline A\cup\overline B$ [F12], and because $X$ is connected [F1] the two nonempty closed sets $\overline A,\overline B$ cannot be disjoint, so there is $z\in\overline A\cap\overline B$. The point $z$ lies in $Z_1$: it is not in $A$ (else the open set $A$ would meet $B$, as $z\in\overline B$), and symmetrically not in $B$; so $z\in Z_1$. Choose a chart $\psi:W\to\mathbb C$ of $X$ at $z$ with $\psi(W)$ an open ball and $W\cap Z_1=\{z\}$, possible because $Z_1$ is locally finite and charts can be shrunk [F1, F12]. Then $W\setminus\{z\}=W\setminus Z_1=(A\cap W)\sqcup(B\cap W)$, both parts are nonempty because $z$ lies in the closure of both $A$ and $B$, and both are open in $W\setminus\{z\}$; so $W\setminus\{z\}$ would be disconnected. But $\psi$ carries $W\setminus\{z\}$ homeomorphically onto the punctured ball $\psi(W)\setminus\{\psi(z)\}$, which is connected by [F11]. This contradiction shows that no separation exists, so $X\setminus Z_1$ is connected. [F1, F11, F12, step 3.1]

5.1 **Every pole has a finite kernel.** The complement $X\setminus Z_1$ is nonempty, because $Z_1$ is locally finite and no neighbourhood of a point of a surface consists of a single point [F1, F12]; so step 4.1 exhibits a point where the envelope with pole $p_1$ is finite. By the dichotomy of [F3] the envelope with pole $p_1$ is then finite everywhere, so $X$ admits a finite canonical Green kernel at $p_1$; since $p_1\in X\setminus\{p_0\}$ was arbitrary, this holds at every point of $X$. In particular, for every $p_1\ne p_0$ both kernels $g_X(\cdot,p_0)$ and $g_X(\cdot,p_1)$ are finite, and [F5] gives the symmetry $g_X(p_0,p_1)=g_X(p_1,p_0)$.  [F3, F5, step 4.1]

6.1 **The harmonic difference and its value at $p_0$.** Fix $p_1\in X\setminus\{p_0\}$ and let $Z_1$ and $\phi_1$ be as in step 3.1. By steps 4.1 and 5.1, $h:=g_X(\cdot,p_1)+\log|\phi_1|$ is defined on $X\setminus Z_1$, satisfies $h\le0$ there, and is harmonic there, because $g_X(\cdot,p_1)$ is harmonic on $X\setminus\{p_1\}\supseteq X\setminus Z_1$ [F3, step 5.1] and $\log|\phi_1|$ is harmonic on $X\setminus Z_1$ [F10]. At $p_0\notin Z_1$ one has $\phi_1(p_0)=-\phi(p_1)$, so $\log|\phi_1(p_0)|=\log|\phi(p_1)|=-g_0(p_1)=-g_X(p_1,p_0)$ by step 2.1; with the symmetry of step 5.1, $h(p_0)=g_X(p_0,p_1)-g_X(p_1,p_0)=0$. [F3, F5, F10, step 2.1, step 3.1, step 4.1, step 5.1]

7.1 **$h$ vanishes identically.** The function $h$ of step 6.1 is harmonic on the connected open set $X\setminus Z_1$ (step 4.2), satisfies $h\le0$ there and $h(p_0)=0$; so $h$ attains its finite maximum at the interior point $p_0$, and the chartwise strong maximum principle [F7] gives $h\equiv0$ on $X\setminus Z_1$. [F7, step 6.1, step 4.2]

8.1 **The zero set of $\phi_1$ is a single point.** Suppose $z\in Z_1$ with $z\ne p_1$. By step 3.1 there is an open neighbourhood $N$ of $z$ with $N\cap Z_1=\{z\}$, and $z$ is not a pole of $g_X(\cdot,p_1)$, so $g_X(\cdot,p_1)$ is continuous at $z$ [F3, F7]; shrinking $N$ within a chart we may assume $|g_X(x,p_1)|\le C$ on $N$ for some $C\ge1$. Since $\phi_1$ is continuous with $\phi_1(z)=0$ [F1], after shrinking $N$ further we have $|\phi_1(x)|<e^{-2C}$ for all $x\in N$, hence $h(x)\le C-2C=-C<0$ for every $x\in N\setminus\{z\}$, a set which is nonempty; but $N\setminus\{z\}\subseteq X\setminus Z_1$, where $h\equiv0$ by step 7.1. This contradiction shows $Z_1=\{p_1\}$. [F1, F3, F7, step 3.1, step 7.1]

9.1 **$\phi$ is injective.** Let $a,b\in X$ with $\phi(a)=\phi(b)$. If $\phi(b)=0$ then $b=p_0$ and $\phi(a)=0$ give $a=p_0$, so $a=b$ by step 2.1. Otherwise $c:=\phi(b)\ne0$, so $b\ne p_0$; apply the construction of step 3.1 with $p_1:=b$, which gives $\phi_1(a)=\frac{\phi(a)-\phi(b)}{1-\overline{\phi(b)}\phi(a)}=\frac{0}{1-|c|^2}=0$, that is, $a\in Z_1$; step 8.1 then gives $a=b$. Hence $\phi$ is injective. [step 2.1, step 3.1, step 8.1]

10.1 **The image is a complex domain and $\phi$ is a biholomorphism onto it.** Let $\Omega:=\phi(X)$. For a point $a\in X$ choose a centred chart $z_a:U_a\to\mathbb D$ at $a$ [F1]. The chart expression $\phi\circ z_a^{-1}:\mathbb D\to\mathbb C$ is holomorphic and injective (step 9.1), so by [F16] it is biholomorphic onto its open image $\phi(U_a)$ and has nowhere-zero derivative; in particular $\phi(U_a)$ is open and the inverse of $\phi|_{U_a}$ is holomorphic. The sets $U_a$ cover $X$, so $\Omega=\bigcup_a\phi(U_a)$ is open; it is connected as a continuous image of the connected space $X$ [F12], and nonempty, while $\Omega\subseteq\mathbb D\subsetneq\mathbb C$ by step 2.1. Hence $\Omega$ is a complex domain [F16], and the bijection $\phi:X\to\Omega$ (step 9.1) has a holomorphic inverse, since holomorphy is a local condition [F1]; thus $\phi$ is a biholomorphism onto $\Omega$. [F1, F12, F16, step 2.1, step 9.1]

11.1 **Every based loop of $\Omega$ is null as an element of the fundamental group.** Let $\gamma$ be a loop in $\Omega$ based at $y_0\in\Omega$, and put $x_0:=\phi^{-1}(y_0)$ and $\tilde\gamma:=\phi^{-1}\circ\gamma$, continuous by step 10.1; then $\tilde\gamma$ is a loop in $X$ based at $x_0$, and $[\tilde\gamma]$ is the identity element of $\pi_1(X,x_0)$ because $X$ is simply connected [F13]. By the functoriality of the fundamental group [F13], $[\gamma]=[\phi\circ\tilde\gamma]=\phi_*[\tilde\gamma]=\phi_*(\text{identity})=\text{identity}$ in $\pi_1(\Omega,y_0)$; since $\gamma$ was an arbitrary based loop, every based loop of $\Omega$ represents the identity class. [F13, step 10.1]

12.1 **The image is homologically simply connected.** By step 10.1, $\Omega$ is a complex domain and by step 11.1 every based loop of $\Omega$ represents the identity class in its fundamental group; hence $\Omega$ is homologically simply connected by [F14]. [F14, step 10.1, step 11.1]

13.1 **Riemann mapping and conclusion.** The domain $\Omega\subsetneq\mathbb C$ is proper and homologically simply connected by steps 10.1 and 12.1, so the Riemann mapping theorem [F15] provides a biholomorphic map $f:\Omega\to\mathbb D$ normalised at $z_0:=\phi(p_0)$. The composite $f\circ\phi:X\to\mathbb D$ is then bijective and holomorphic with holomorphic inverse, being a composite of biholomorphisms [F1, F16]; in other words $X$ is biholomorphic to the unit disc. The Axiom of Choice [A1] is used exactly through [F15] and through the Countable Choice consumed by the envelope suppliers [F3] in steps 1.1, 4.1 and 5.1; the remaining selections are finite. [A1, F15, F16, step 10.1, step 12.1] ∎
