---
id: cex-intersection-pairing-needs-cartier-or-cycle-hypotheses
kind: counterexample
title: "The intersection product needs Cartier or complementary-dimension hypotheses"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - cor-transcendence-degree-tower-additivity
  - def-axiom-of-choice
  - def-cartier-divisor
  - def-closed-immersion-schemes
  - def-coherent-module-scheme
  - def-dependent-choice
  - def-dimension-noetherian-topological-space
  - def-discrete-valuation-ring
  - def-divisor-intersection-number-on-smooth-projective-surface
  - def-effective-cartier-divisor
  - def-euler-characteristic-coherent-sheaf
  - def-graded-ring-and-graded-module
  - def-height-of-a-prime-ideal
  - def-integral-closure-and-integrally-closed-domain
  - def-integral-scheme
  - def-invertible-sheaf-of-cartier-divisor
  - def-localisation-at-a-prime-ideal
  - def-localisation-of-a-module
  - def-locally-noetherian-and-noetherian-scheme
  - def-normal-noetherian-ring
  - def-order-codimension-one-rational-function
  - def-projective-morphism-pre-proj
  - def-reduction-of-scheme
  - def-relative-projective-space-standard-charts
  - def-section-zero-scheme-invertible-sheaf
  - def-sheaf-total-quotient-rings
  - def-smooth-morphism-to-field-classical
  - def-weil-divisor-normal-noetherian-scheme
  - lem-field-is-noetherian
  - lem-global-section-effective-divisor
  - lem-noetherian-open-subsets-are-quasi-compact
  - lem-normal-domain-implies-s-two
  - lem-polynomial-algebras-over-fields-are-integrally-closed
  - lem-r-one-s-two-intersection-of-height-one-localisations
  - thm-affine-domain-dimension-transcendence-degree
  - thm-cartier-to-weil-divisor-normal-scheme
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-closed-subschemes-projective-space-homogeneous-ideals
  - thm-cohomology-projective-space-twisting-sheaves
  - thm-krull-principal-ideal-theorem
  - thm-noetherian-ring-quotients-and-localisations
  - thm-normality-is-local-for-domains
  - thm-prime-spectrum-of-a-localisation-bijection
  - thm-projective-morphism-proper
  - thm-projective-space-as-proj
  - thm-regular-local-rings-are-normal
  - thm-localisation-and-polynomial-extension-of-regular-rings
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-26.md"
      - "research/frontier-38-owner-30-alpha-batch-26-5a.md"
      - "research/frontier-38-owner-30-step5-hash-26-post-5a.json"
    content_sha256: "d40736b896ba6e14c65fc762a7cb0401ed6bc93cbdd6d7c6afd15c7e73d4e93a"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea: Foundations of Algebraic Geometry, pre-publication version 2025-10-21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "The Stacks Project, Varieties, Section 33.45 (Numerical intersections)"
      url: "https://stacks.math.columbia.edu/tag/0BEL"
---

## Statement refuted

Assume the Axiom of Choice, inherited through the Euler-characteristic
supplier ([[def-axiom-of-choice]]). The claims refuted are:

(a) every effective prime divisor on a normal integral projective surface
over a field is Cartier, so that its self-intersection is defined by the
alternating-sum formula of
[[def-divisor-intersection-number-on-smooth-projective-surface]]; and

(b) for every smooth projective $k$-scheme $X$ of dimension at least two and
all effective Cartier divisors $D,E$ on $X$, the scheme-theoretic intersection
$D\cap E$ is finite and its length over $k$ equals the alternating sum
$$\chi(X,\mathcal O_X)-\chi(X,\mathcal O_X(-D))-\chi(X,\mathcal O_X(-E))+\chi(X,\mathcal O_X(-D-E)).$$

Both claims fail: the projective quadric cone carries a prime divisor that is
not Cartier at its vertex, and on $\mathbb P^3$ two plane divisors meet in a
line although the alternating sum is $1$.


## Facts & Assumptions

**Given:** a field $k$ with $\operatorname{char}k\neq2$, homogeneous coordinates $x,y,z,w$ on $\mathbb P^3_k$, the homogeneous polynomial $F=xy-z^2$ of degree $2$, the closed subscheme $X=V_+(F)\subseteq\mathbb P^3_k$ with its vertex $v=[0:0:0:1]$, the closed subscheme $Z=V_+(x,z)\cap X\subseteq X$, the Axiom of Choice, and the Dependent Choice supplied by it ([[def-dependent-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] Charts and closed subschemes of projective space: for a homogeneous ideal $I\subseteq k[x_0,\dots,x_n]$ the closed subscheme $V_+(I)\subseteq\mathbb P^n_k$ has $V_+(I)\cap D_+(x_i)=\operatorname{Spec}\bigl(k[x_0,\dots,x_n]_{(x_i)}/I_{(x_i)}\bigr)$ ([[thm-closed-subschemes-projective-space-homogeneous-ideals]]); the standard charts $D_+(x_i)=\operatorname{Spec}k[x^{(\ell)}]$ with $x^{(\ell)}=x_\ell/x_i$ form an open cover ([[def-relative-projective-space-standard-charts]]), and $\mathbb P^n_k\cong\operatorname{Proj}k[x_0,\dots,x_n]$ ([[thm-projective-space-as-proj]]). In particular $X$ is a closed subscheme of $\mathbb P^3_k$; projective morphisms in the finite-dimensional H-projective convention are proper ([[def-projective-morphism-pre-proj]], [[thm-projective-morphism-proper]]), and each affine $n$-space chart has dimension $n$ by the transcendence-degree formula over any field; the dimension of projective $n$-space is the same, since its finite chains of irreducible closed subsets remain strict on an affine chart meeting the smallest member ([[thm-affine-domain-dimension-transcendence-degree]], [[def-dimension-noetherian-topological-space]]).

[F2] The polynomial algebra: $S=k[x,y,z]$ is a Noetherian integrally closed domain ([[lem-field-is-noetherian]], [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]], [[lem-polynomial-algebras-over-fields-are-integrally-closed]]); for a Noetherian ring its quotients and localisations are Noetherian ([[thm-noetherian-ring-quotients-and-localisations]]); localisations of an integrally closed domain are integrally closed domains, and a Noetherian scheme is normal exactly when all of its local rings are integrally closed domains ([[def-integral-closure-and-integrally-closed-domain]], [[def-normal-noetherian-ring]], [[thm-normality-is-local-for-domains]]).

[F3] Cartier divisors restrict to open subschemes: a local-equation datum for a Cartier divisor restricts to any open subscheme, so a Cartier divisor $D$ on $U$ restricts to a Cartier divisor $D|_{U'}$ on an open $U'\subseteq U$, and on a normal Noetherian scheme the associated Weil divisor restricts, $\operatorname{cyc}_{U'}(D|_{U'})=\operatorname{cyc}_U(D)|_{U'}$ ([[def-cartier-divisor]], [[thm-cartier-to-weil-divisor-normal-scheme]], [[def-weil-divisor-normal-noetherian-scheme]]).

[F4] Regular and normal local rings: a regular local ring is an integrally closed domain ([[thm-regular-local-rings-are-normal]]); on a Noetherian scheme normality is the local condition that all local rings are integrally closed domains, and for a domain this condition is checked on localisations ([[def-normal-noetherian-ring]], [[thm-normality-is-local-for-domains]]). A field is a zero-dimensional regular Noetherian local ring, and its finite polynomial extensions and their localisations are regular by [[thm-localisation-and-polynomial-extension-of-regular-rings]]; hence their local rings are integrally closed domains.

[F5] Effective Cartier divisors from sections: on the integral scheme $\mathbb P^3_k$ a nonzero global section of an invertible sheaf is regular, so by [[lem-global-section-effective-divisor]] and [[def-section-zero-scheme-invertible-sheaf]] its zero scheme is an effective Cartier divisor ([[def-effective-cartier-divisor]]); the hyperplane $V(x_0)$ is the zero scheme of the nonzero section $x_0$ of $\mathcal O(1)$, and $\mathcal O(V(x_0))\cong\mathcal O(1)$ ([[def-invertible-sheaf-of-cartier-divisor]]).

[F6] Cohomology of twists on projective space: for $X=\mathbb P^n_k$ with $n>0$ the groups $H^q(X,\mathcal O(d))$ vanish unless $q=0$ or $q=n$, with $H^0(X,\mathcal O(d))\cong k[x_0,\dots,x_n]_d$ for $d\ge0$ and $H^0=0$ for $d<0$, and $H^n$ described by negative Laurent monomials ([[thm-cohomology-projective-space-twisting-sheaves]]); consequently $\chi(\mathbb P^n_k,\mathcal O(d))=\binom{d+n}{n}$ for every $d\in\mathbb Z$ ([[def-euler-characteristic-coherent-sheaf]]).

[F7] The Axiom of Choice and its consequence Dependent Choice are assumed ([[def-axiom-of-choice]], [[def-dependent-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]); they enter through the Euler-characteristic, cohomology, normality and Cartier-to-Weil suppliers cited in [F1]–[F13], and no further selection is made below.

[F8] Graded rings: for the total-degree grading on $k[x,y,z]$, the relation $xy-z^2$ is homogeneous of degree two, so the quotient $R=k[x,y,z]/(xy-z^2)$ inherits a grading $R=\bigoplus_{n\ge0}R_n$ with $R_0=k$, and each $R_n$ is spanned by the monomial classes of degree $n$ ([[def-graded-ring-and-graded-module]]).

[F9] Krull's principal ideal theorem: in a Noetherian commutative ring every prime ideal minimal over a principal ideal has height at most one ([[thm-krull-principal-ideal-theorem]], [[def-height-of-a-prime-ideal]]).

[F10] Dimension and transcendence degree: a finite-type domain $A$ over a field $k$ satisfies $\dim A=\operatorname{trdeg}_k\operatorname{Frac}(A)$ ([[thm-affine-domain-dimension-transcendence-degree]]), and transcendence degree is additive in towers of field extensions with finite degree ([[cor-transcendence-degree-tower-additivity]]).

[F11] The $(S_2)$ condition: every Noetherian integrally closed domain satisfies $(S_2)$ ([[lem-normal-domain-implies-s-two]]), and for such a domain $A$ with fraction field $K$ one has $A=\bigcap_{\operatorname{ht}\mathfrak p=1}A_{\mathfrak p}$ inside $K$ ([[lem-r-one-s-two-intersection-of-height-one-localisations]]).

[F12] Orders along prime divisors: if $W$ is a prime divisor on a normal locally Noetherian scheme with generic point $\xi$, then $\mathcal O_{X,\xi}$ is a discrete valuation ring whose maximal ideal is $\{f: v_\xi(f)\ge1\}$ for its normalised valuation $v_\xi$ ([[def-discrete-valuation-ring]]); for every global meromorphic unit $f$ the order $\operatorname{ord}_W(f)=v_\xi(f_\xi)$ is defined, and $f\in\mathcal O_{X,\xi}$ if and only if $\operatorname{ord}_W(f)\ge0$ ([[def-order-codimension-one-rational-function]]).

[F13] Localisation and function fields: for prime ideals $\mathfrak q\subseteq\mathfrak m$ the localisations satisfy $(R_{\mathfrak m})_{\mathfrak qR_{\mathfrak m}}=R_{\mathfrak q}$, and the height-one primes of $R_{\mathfrak m}$ correspond exactly to the height-one primes $\mathfrak q\subseteq\mathfrak m$ of $R$ ([[def-localisation-at-a-prime-ideal]], [[thm-prime-spectrum-of-a-localisation-bijection]]); localising an ideal sends a generating set to a generating set ([[def-localisation-of-a-module]]); on an integral scheme the sheaf of meromorphic functions is constant with value the function field ([[def-sheaf-total-quotient-rings]]); and every open subset of a Noetherian topological space is quasi-compact, so every open subscheme of the Noetherian scheme $X$ is itself Noetherian ([[lem-noetherian-open-subsets-are-quasi-compact]], [[def-locally-noetherian-and-noetherian-scheme]]).

## Counterexample

1.1 The four charts of $X$. By [F1] the charts of $\mathbb P^3_k$ give $$X\cap D_+(w)=\operatorname{Spec}k[x,y,z]/(xy-z^2)=:\operatorname{Spec}R,\qquad X\cap D_+(x)=\operatorname{Spec}k[y/x,z/x,w/x]/\bigl(y/x-(z/x)^2\bigr)\cong\operatorname{Spec}k[Z,W],$$ $$X\cap D_+(y)\cong\operatorname{Spec}k[Z,W],\qquad X\cap D_+(z)=\operatorname{Spec}k[x/z,y/z,w/z]/((x/z)(y/z)-1)\cong\operatorname{Spec}k[X,Y,W]/(XY-1),$$ writing $Z=z/x$ and so on; each chart is a nonempty affine scheme whose coordinate ring is a domain, and the point $[1:1:1:1]$ lies on $X$ (since $1\cdot1-1^2=0$) and in all four charts. [F1]

1.2 $X$ is projective over $k$ and proper. Since $X=V_+(F)$ is a closed subscheme of $\mathbb P^3_k$ and $\mathbb P^3_k\to\operatorname{Spec}k$ is projective in the H-projective convention, the structure morphism $X\to\operatorname{Spec}k$ is projective in that convention, hence proper by [F1]. [F1]

1.3 The plane divisors on $\mathbb P^3$. Let $k$ be algebraically closed and let $D=V(x_0)$ and $E=V(x_1)$ be the hyperplanes in $\mathbb P^3_k$; by [F5] both are effective Cartier divisors with $\mathcal O(D)\cong\mathcal O(E)\cong\mathcal O(1)$, and the scheme-theoretic intersection is $D\cap E=V(x_0,x_1)\cong\operatorname{Proj}k[x_2,x_3]=\mathbb P^1_k$, a one-dimensional scheme, hence not finite; replacing $E$ by $D$ leaves $D\cap D=D$ of dimension two. [F1, F5]

1.4 The cone ring and its invariant model. Every class in $R=k[x,y,z]/(xy-z^2)$ has a representative $A(x,y)+zB(x,y)$ with $A,B\in k[x,y]$, because the relation $z^2=xy$ reduces every exponent of $z$ modulo two; the substitution $\varphi(x)=u^2$, $\varphi(y)=v^2$, $\varphi(z)=uv$ kills $xy-z^2$ and so induces a $k$-algebra map $\bar\varphi:R\to k[u,v]$. If $\bar\varphi(A+zB)=A(u^2,v^2)+uvB(u^2,v^2)$ vanishes, the first summand is supported on the monomials $u^{2i}v^{2j}$ and the second on the monomials $u^{2i+1}v^{2j+1}$; these supports are disjoint and monomials form a $k$-basis of $k[u,v]$, so $A=B=0$. Hence $\bar\varphi$ is injective with image the subring $C:=k[u^2,uv,v^2]$ generated by $u^2,uv,v^2$, and $R\cong C$ is a domain. With $G=\{\pm1\}$ acting on $k[u,v]$ by $(u,v)\mapsto(-u,-v)$, a polynomial is $G$-invariant exactly when the coefficient of every monomial of odd total degree vanishes, since $\operatorname{char}k\neq2$; the monomials of even total degree are precisely the products of $u^2$, $uv$ and $v^2$, so $C=k[u,v]^G$. [F2, given, algebra]

2.1 $R$ is a Noetherian normal domain of dimension two. By [F2] the quotient $R$ of $S=k[x,y,z]$ is Noetherian, and by step 1.4 it is a domain. Every element of $\operatorname{Frac}(R)=\operatorname{Frac}(C)$ is a quotient of $G$-invariant polynomials, hence $G$-invariant, so $\operatorname{Frac}(R)\subseteq k(u,v)^G$; conversely if $f,g\in k[u,v]$ are nonzero and $f/g$ is $G$-invariant, then $\sigma(f)g=f\sigma(g)$ for the generator $\sigma$ of $G$, so $f/g=f\sigma(g)/(g\sigma(g))$ is a quotient of $G$-invariant polynomials and lies in $\operatorname{Frac}(C)$; hence $\operatorname{Frac}(R)=k(u,v)^G$. If $\alpha\in\operatorname{Frac}(R)$ is integral over $R$, then $\alpha$ is integral over the integrally closed ring $k[u,v]\supseteq R$, so $\alpha\in k[u,v]$ ([[lem-polynomial-algebras-over-fields-are-integrally-closed]], [F2]); being $G$-invariant and polynomial, $\alpha\in k[u,v]^G=C=R$ by step 1.4. Thus $R$ is integrally closed, its localisations are integrally closed domains, and $\operatorname{Spec}R$ is a normal Noetherian scheme ([F2]). Finally $R$ is a finite-type $k$-domain, so $\dim R=\operatorname{trdeg}_k\operatorname{Frac}(R)$ by [F10]; the field $k(u,v)$ is algebraic over $\operatorname{Frac}(R)=k(u,v)^G$ because $u$ and $v$ satisfy the integral equations $T^2-u^2=0$ and $T^2-v^2=0$ over it, so tower additivity [F10] gives $\dim R=\operatorname{trdeg}_k k(u,v)=2$. [F2, F10, step 1.4]

2.2 The alternating sum on $\mathbb P^3$. By [F6] applied with $n=3$ one has $\chi(\mathbb P^3_k,\mathcal O(d))=\binom{d+3}{3}$ for every $d$; hence $\chi(\mathcal O)=1$, $\chi(\mathcal O(-1))=\binom{2}{3}=0$ and $\chi(\mathcal O(-2))=\binom{1}{3}=0$, so the alternating sum of statement (b) for the pair $D,E$ of step 1.3 equals $$\chi(\mathcal O)-\chi(\mathcal O(-1))-\chi(\mathcal O(-1))+\chi(\mathcal O(-2))=1-0-0+0=1.$$ [F6]

3.1 The ruling is a prime divisor. In the grading of [F8] the maximal ideal $\mathfrak m=(x,y,z)$ is the set $R_{\ge1}$ of positive-degree elements and $P=(x,z)$ is homogeneous. The quotient $R/P\cong k[y]$ is a domain, so $P$ is prime; the quotient $R/(x)\cong k[y,z]/(z^2)$ has nilradical $(z)$ because $z^2=0$ and every element of $k[y,z]/(z^2)$ is $a(y)+zb(y)$ with $(a+zb)^n=a^n+na^{n-1}zb$, so $(z)$ is the unique minimal prime of $R/(x)$ and $P$ is the unique minimal prime of $R$ over the principal ideal $(x)$. By Krull's principal ideal theorem [F9] $\operatorname{ht}P\le1$, and $\operatorname{ht}P=1$ because $R$ is a domain by step 2.1 and $0\neq x\in P$, so $\operatorname{ht}P\ge1$. Hence $V(P)$ is a prime divisor of the normal Noetherian scheme $\operatorname{Spec}R$ of step 2.1 ([[def-weil-divisor-normal-noetherian-scheme]]). [F8, F9, step 2.1]

3.2 $X$ is integral of pure dimension two. By step 1.1 the charts of $X$ are spectra of domains, hence reduced and irreducible, and they pairwise meet in the common point $[1:1:1:1]$; a space covered by pairwise intersecting irreducible open subspaces is irreducible, and reducedness is local, so $X$ is nonempty, reduced and irreducible, that is, integral ([[def-integral-scheme]]). The charts have dimension two — the cone chart by step 2.1, the polynomial charts by [F1] — so $X$ has pure dimension two ([[def-dimension-noetherian-topological-space]]). [F1, step 1.1, step 2.1]

3.3 $X$ is normal. The local rings of the charts $X\cap D_+(x)$, $X\cap D_+(y)$ and $X\cap D_+(z)$ of step 1.1 are localisations of polynomial rings over $k$, hence regular local rings, hence integrally closed domains by [F4]; the local rings of the cone chart $X\cap D_+(w)=\operatorname{Spec}R$ are integrally closed domains because $R$ is a normal domain of step 2.1. Normality of a Noetherian scheme is the local condition that all local rings are integrally closed domains, so $X$ is normal. [F2, F4, step 1.1, step 2.1]

3.4 Statement (b) fails. Take $X=\mathbb P^3_k$, $D=V(x_0)$ and $E=V(x_1)$; by step 1.3 the scheme $X$ is a smooth projective $k$-scheme of dimension three and the divisors are effective Cartier, while $D\cap E\cong\mathbb P^1_k$ is not finite, so already the finiteness assertion of (b) is false; moreover by step 2.2 the alternating sum equals $1$, whereas $D\cap E$ itself has no finite length over $k$, and the value does not change when $E$ is replaced by $D$, although $D\cap D$ has dimension two. [step 1.3, step 2.2]

4.1 The vertex chart is the affine quadric cone. The open subscheme $X\cap D_+(w)$ of $X$ is isomorphic to $\operatorname{Spec}R$ with $R=k[x,y,z]/(xy-z^2)$, the vertex $v$ corresponds to the maximal ideal $\mathfrak m=(x,y,z)$, and under this isomorphism $Z\cap D_+(w)$ corresponds to $V(P)$ with $P=(x,z)$, the ruling of the cone. By steps 2.1 and 3.1 the ring $R$ is a normal domain and $P$ is a prime of height one, so $V(P)$ is a prime divisor of the normal Noetherian scheme $\operatorname{Spec}R$. [step 1.1, step 2.1, step 3.1]

4.2 $Z$ is a prime divisor. On the charts of step 1.1 the subscheme $Z=V_+(x,z)\cap X$ is cut out by the images of $x$ and $z$: in the $w$-chart it is $V(P)\subseteq\operatorname{Spec}R$ with $R/(x,z)\cong k[y]$; in the $y$-chart it is $V(Z)\subseteq\operatorname{Spec}k[Z,W]$, with quotient $k[W]\cong k[Z,W]/(Z)$; in the $x$-chart and the $z$-chart it is empty, because $x=0$ or $z=0$ is incompatible with the chart. The two nonempty charts are spectra of domains, meet at the point $[0:1:0:1]$ of $Z$, and have dimension one, so $Z$ is a nonempty reduced irreducible closed subscheme of $X$ of dimension one, i.e. an integral closed subscheme of codimension one: a prime divisor of the normal Noetherian scheme $X$ ([[def-weil-divisor-normal-noetherian-scheme]], [[def-integral-scheme]]). [F1, step 1.1, step 3.1, step 3.2]

4.3 The ideal $P R_{\mathfrak m}$ is not principal. Since $P=Rx+Rz$ we have $P R_{\mathfrak m}=R_{\mathfrak m}x+R_{\mathfrak m}z$, and $\mathfrak mP$ is generated by $x^2,xy,xz,yz,z^2$, all of degree two in the grading of step 3.1; hence $\mathfrak mP\subseteq R_{\ge2}$ and $\mathfrak mP\cap R_1=0$, and $\mathfrak mP$ is generated by homogeneous elements, so the degree-one component of every element of $\mathfrak mP$ vanishes. If $cx+dz\in\mathfrak mP$ with $c,d\in R$, write $c=c_0+c_+$, $d=d_0+d_+$ with $c_0,d_0\in k=R_0$ and $c_+,d_+\in\mathfrak m$; then the degree-one component $c_0x+d_0z$ of $cx+dz$ lies in $\mathfrak mP$, hence is zero, so $c_0=d_0=0$ and $c,d\in\mathfrak m$. Now let $a,b\in R$ and $s,t\notin\mathfrak m$ with $(a/s)x+(b/t)z\in\mathfrak m R_{\mathfrak m}P R_{\mathfrak m}=(\mathfrak mP)R_{\mathfrak m}$; multiplying by $st$ and clearing denominators gives $u\notin\mathfrak m$ and $q\in\mathfrak mP$ with $u(at\,x+bs\,z)=q$, so $uat,ubs\in\mathfrak m$ by the previous paragraph; since $u,s,t\notin\mathfrak m$ and $\mathfrak m$ is prime, $a,b\in\mathfrak m$, that is, $a/s,b/t\in\mathfrak m R_{\mathfrak m}$. Therefore the images of $x$ and $z$ span $P R_{\mathfrak m}/\mathfrak m R_{\mathfrak m}P R_{\mathfrak m}$ and are linearly independent over $R_{\mathfrak m}/\mathfrak m R_{\mathfrak m}=k$: this $k$-vector space has a basis of two elements. If $P R_{\mathfrak m}$ were a principal ideal, this space would be spanned by the image of one element and have dimension at most one; contradiction. [F13, step 3.1, given, algebra]

5.1 $Z$ is not Cartier at $v$. Suppose for contradiction that $Z$ were Cartier at $v$: there are an open neighbourhood $U\subseteq X$ of $v$ and a Cartier divisor $D_0$ on $U$ whose associated Weil divisor is $\operatorname{cyc}_U(D_0)=[Z\cap U]$. The chart $D_+(w)\cap X\cong\operatorname{Spec}R$ is an open neighbourhood of $v$ corresponding to an open neighbourhood of $\mathfrak m$ in $\operatorname{Spec}R$ (step 4.1), so replacing $U$ by $U\cap D_+(w)$ and restricting $D_0$ gives a Cartier divisor $D$ on an open neighbourhood $U'\subseteq\operatorname{Spec}R$ of $\mathfrak m$ with $\operatorname{cyc}_{U'}(D)=[V(P)\cap U']$, by the restriction compatibility of [F3] and the identification of $Z\cap D_+(w)$ with $V(P)$ in step 4.1. The open subscheme $U'$ of $\operatorname{Spec}R$ is integral, normal and Noetherian: it is integral as an open subscheme of an integral scheme ([[def-integral-scheme]]), its local rings are localisations of the integrally closed local rings of $R$ (step 2.1), and it is Noetherian by [F13]. So the Cartier divisor $D$ is represented on an open cover $\{U_i\}$ of $U'$ by local equations $f_i\in\mathcal K_{U'}(U_i)^\times$ ([[def-cartier-divisor]]), and $\mathcal K_{U'}$ is the constant sheaf with value $\operatorname{Frac}(R)$ by [F13]; fix an index $i_0$ with $\mathfrak m\in U_{i_0}$ and put $f:=f_{i_0}\in\operatorname{Frac}(R)^\times$. Every height-one prime $\mathfrak q\subseteq\mathfrak m$ of $R$ lies in $U_{i_0}$: its closure $V(\mathfrak q)$ in $\operatorname{Spec}R$ contains $\mathfrak m$ because $\mathfrak q\subseteq\mathfrak m$, so if $\mathfrak q\notin U_{i_0}$ then the closed set $\operatorname{Spec}R\setminus U_{i_0}$ would contain $\mathfrak q$ and hence its closure and the point $\mathfrak m$, contradicting $\mathfrak m\in U_{i_0}$. Hence, by the coefficient formula of [[thm-cartier-to-weil-divisor-normal-scheme]] applied to the normal Noetherian scheme $U'$ and the local equation $f_{i_0}$, the coefficient of the prime divisor $V(\mathfrak q)$ in $\operatorname{cyc}_{U'}(D)=[V(P)\cap U']$ equals $v_{\mathfrak q}(f)$ ([[def-order-codimension-one-rational-function]], [F12]); therefore $v_P(f)=1$ and $v_{\mathfrak q}(f)=0$ for every height-one prime $\mathfrak q\subseteq\mathfrak m$ with $\mathfrak q\neq P$. The local ring $R_{\mathfrak m}$ is a Noetherian integrally closed domain by [F2] and step 2.1, hence satisfies $(S_2)$ by [F11], and its height-one primes are the primes $\mathfrak q\subseteq\mathfrak m$ of height one, with $(R_{\mathfrak m})_{\mathfrak qR_{\mathfrak m}}=R_{\mathfrak q}$ by [F13]; the intersection theorem [F11] gives $R_{\mathfrak m}=\bigcap_{\operatorname{ht}\mathfrak q=1,\ \mathfrak q\subseteq\mathfrak m}R_{\mathfrak q}$ inside $\operatorname{Frac}(R_{\mathfrak m})=\operatorname{Frac}(R)$. Since $v_{\mathfrak q}(f)\ge0$ for each such $\mathfrak q$, [F12] gives $f\in R_{\mathfrak q}$ for all of them, hence $f\in R_{\mathfrak m}$; and $v_P(f)=1\ge1$ gives $f\in PR_P$, so $f\in PR_P\cap R_{\mathfrak m}=PR_{\mathfrak m}$ ([[def-localisation-at-a-prime-ideal]]). If $g\in PR_{\mathfrak m}$, then $v_P(g)\ge1=v_P(f)$ and $v_{\mathfrak q}(g)\ge0=v_{\mathfrak q}(f)$ for every other height-one prime $\mathfrak q\subseteq\mathfrak m$, so $v_{\mathfrak q}(g/f)\ge0$ for all of them and [F11] gives $g/f\in R_{\mathfrak m}$, that is, $g\in fR_{\mathfrak m}$; hence $PR_{\mathfrak m}=fR_{\mathfrak m}$ is principal, contradicting step 4.3. Therefore no such $D_0$ exists: the prime divisor $Z$ is not Cartier at $v$, $\mathcal O_X(Z)$ is not invertible near $v$, and $Z\cdot Z$ is not defined by the alternating-sum formula. [F3, F11, F12, F13, step 3.1, step 4.1, step 4.3]

6.1 Statement (a) fails. By steps 1.2, 3.2 and 3.3 the scheme $X$ is a normal integral projective surface over $k$, and by step 4.2 it carries the effective prime divisor $Z$; by step 5.1 the divisor $Z$ is not Cartier at $v$. Therefore the claim that every effective prime divisor on a normal integral projective surface is Cartier is false, and the self-intersection $Z\cdot Z$ is not defined by the formula of [[def-divisor-intersection-number-on-smooth-projective-surface]]. [step 1.2, step 3.2, step 3.3, step 4.2, step 5.1]

7.1 Conclusion and choice accounting. Steps 6.1 and 3.4 exhibit the two failures: the quadric-cone ruling is an effective prime divisor on a normal integral projective surface that is not Cartier at the vertex, and on $\mathbb P^3$ the scheme-theoretic intersection of two planes is a line while the alternating sum is $1$. The Axiom of Choice enters through the suppliers of [F1]–[F13], whose combined content includes the Euler-characteristic construction, the cohomology of twists and the Cartier-to-Weil construction; the latter uses Dependent Choice, which the standing Axiom of Choice supplies by [F7]. No selection is made in the computations of steps 1.1–2.1, which use explicit polynomials and explicit points. [F7, step 6.1, step 3.4, step 5.1] ∎
