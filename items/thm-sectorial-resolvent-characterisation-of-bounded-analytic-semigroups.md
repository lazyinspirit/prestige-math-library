---
id: thm-sectorial-resolvent-characterisation-of-bounded-analytic-semigroups
kind: theorem
title: Sectorial resolvent characterisation of bounded analytic semigroups
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
deps: [def-densely-defined-closed-and-closable-operator, def-complex-sector-and-bounded-analytic-semigroup, def-sectorial-operator-with-the-semigroup-sign-convention, lem-contour-definition-of-an-analytic-semigroup, lem-dunford-contour-construction-satisfies-the-semigroup-law, lem-generator-of-the-contour-semigroup-is-the-sectorial-operator, thm-analytic-semigroup-smoothing-estimates, lem-power-series-coefficients-are-determined-by-real-values, lem-taylor-expansion-with-integral-remainder-for-banach-valued-curves, lem-banach-valued-cauchy-theorem-on-star-shaped-domains, def-infinitesimal-generator-of-a-c-zero-semigroup, def-strongly-continuous-semigroup, thm-exponential-bound-for-a-c-zero-semigroup, lem-semigroup-generator-commutes-with-orbits-on-its-domain, thm-laplace-transform-formula-for-the-semigroup-resolvent, lem-resolvent-identity-and-holomorphy-for-closed-operators, thm-generators-are-closed-and-densely-defined, def-resolvent-of-a-closed-operator, thm-cauchy-integral-formula-and-cauchy-estimates-for-banach-valued-holomorphic-functions, lem-average-convergence-of-a-continuous-banach-valued-function, lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves, def-bochner-integrable-function, lem-bochner-integral-norm-inequality, lem-linearity-of-the-bochner-integral, def-operator-norm, def-bounded-linear-operator, lem-integrated-semigroup-orbits-belong-to-the-generator-domain, def-dependent-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: 'Chapter II Section 4.a, Theorem 4.6, (a)-(e) and its full proof, printed pp. 101-105'
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: 'Chapter 2 Section 2.3, Theorem 2.25 with Remark 2.26, printed pp. 63-65'
verification:
  precheck: pass
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]) for the cited integral and semigroup suppliers.

Let $X$ be a complex Banach space and let $A$ be a closed densely defined
linear operator on $X$ ([[def-densely-defined-closed-and-closable-operator]],
[[def-resolvent-of-a-closed-operator]]). The following are equivalent:

(a) $A$ has a bounded analytic semigroup extension to some sector
$\Sigma_\delta$, $\delta>0$
([[def-complex-sector-and-bounded-analytic-semigroup]]);

(b) there is $\vartheta\in(0,\pi/2)$ such that both $e^{i\vartheta}A$ and
$e^{-i\vartheta}A$, on the common domain $D(A)$, generate bounded strongly
continuous semigroups;

(c) $A$ generates a bounded strongly continuous semigroup $(T(t))_{t\ge0}$
with $T(t)X\subseteq D(A)$ for all $t>0$ and
$\sup_{t>0}\|tAT(t)\|<\infty$;

(d) $A$ generates a bounded strongly continuous semigroup and there is $C>0$
such that $\|R(r+is,A)\|\le C/|s|$ for every $r>0$ and $s\ne0$;

(e) $A$ satisfies the sectorial resolvent condition with vertex $0$ for some
positive exponent in the sense of
[[def-sectorial-operator-with-the-semigroup-sign-convention]].

If these conditions hold, the semigroup in (c) is the contour semigroup. The
maximal analytic angle equals the supremum of admissible rotation angles in
(b) and the supremum of sectorial exponents in (e); these are supremal
exponents, not arbitrary smaller witnesses. No choice principle beyond Dependent Choice is used.

## Facts & Assumptions

**Given:** A closed densely defined linear operator $A$ on the complex Banach space $X$; the definitions of a strongly continuous semigroup and its generator, of a bounded analytic semigroup, and of sectoriality at vertex $0$; and, whenever one of (a)-(d) is assumed below, the corresponding semigroup with its constants.

[L1] A bounded analytic semigroup on $\Sigma_\delta\cup\{0\}$ is a family with $T(0)=I$, $T(z_1+z_2)=T(z_1)T(z_2)$, operator-norm holomorphy on $\Sigma_\delta$, strong continuity at the vertex, and uniform boundedness on every strictly smaller sector; its generator is the infinitesimal generator of the strongly continuous semigroup $(T(t))_{t\ge0}$ ([[def-complex-sector-and-bounded-analytic-semigroup]]).

[L2] $A$ is sectorial of angle $\delta\in(0,\pi/2]$ at vertex $0$ if $\Sigma_{\pi/2+\delta}\subseteq\rho(A)$ and for every $\varepsilon\in(0,\delta)$ there is $M_\varepsilon\ge1$ with $\|R(\lambda,A)\|\le M_\varepsilon/|\lambda|$ on $\Sigma_{\pi/2+\delta-\varepsilon}$; $\rho(A)$ is the set of $\lambda$ for which $\lambda I-A$ is bijective and $R(\lambda,A)=(\lambda I-A)^{-1}$, with $R(\lambda,A)X=D(A)$ and $AR(\lambda,A)=\lambda R(\lambda,A)-I$ ([[def-sectorial-operator-with-the-semigroup-sign-convention]], [[def-resolvent-of-a-closed-operator]]).

[L3] For a semigroup supplied with an exponential bound, closedness and density are established in step 1.1 below. For $y\in D(B)$ one has $BS(t)y=S(t)By$ for all $t\ge0$ ([[lem-semigroup-generator-commutes-with-orbits-on-its-domain]], [[def-infinitesimal-generator-of-a-c-zero-semigroup]]).

[L4] The fundamental theorem of calculus for Banach-valued continuous curves and average convergence: for continuous $g$ one has $\frac1h\int_t^{t+h}g\to g(t)$ as $h\downarrow0$ ([[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]], [[lem-average-convergence-of-a-continuous-banach-valued-function]], [[def-bochner-integrable-function]]).

[L5] Banach-valued Cauchy theorem on a star-shaped open set $U$: a continuous complex-differentiable $F:U\to Y$ has $\int_\gamma F\,dw=0$ for every closed piecewise $C^1$ contour in $U$ ([[lem-banach-valued-cauchy-theorem-on-star-shaped-domains]]).

[L6] For a sectorial $A$ of angle $\delta\in(0,\pi/2]$ the contour family $T(z)=\frac1{2\pi i}\int_\Gamma e^{\lambda z}R(\lambda,A)\,d\lambda$ is a bounded analytic semigroup of angle $\delta$ with generator $A$, unique among exponentially bounded semigroups with that generator, and it satisfies $T(t)X\subseteq D(A^m)$ and $\|A^mT(t)\|\le C_mt^{-m}$ for all $m\ge1$, $t>0$ ([[lem-contour-definition-of-an-analytic-semigroup]], [[lem-dunford-contour-construction-satisfies-the-semigroup-law]], [[lem-generator-of-the-contour-semigroup-is-the-sectorial-operator]], [[thm-analytic-semigroup-smoothing-estimates]]).

[L7] A holomorphic Banach-space-valued function on a disc has a norm-convergent power-series expansion there, and two power series about a real centre that agree on a real interval have equal coefficients and hence equal sums on the disc ([[thm-cauchy-integral-formula-and-cauchy-estimates-for-banach-valued-holomorphic-functions]], [[lem-power-series-coefficients-are-determined-by-real-values]]).

[L8] Taylor's formula with integral remainder holds for $C^{n+1}$ curves into a Banach space on real intervals ([[lem-taylor-expansion-with-integral-remainder-for-banach-valued-curves]]).

[L9] Resolvent identities: $R(\lambda,B)-R(\mu,B)=(\mu-\lambda)R(\lambda,B)R(\mu,B)$, and $R(\cdot,B)$ is norm-holomorphic on $\rho(B)$ ([[lem-resolvent-identity-and-holomorphy-for-closed-operators]]).

## Proof

**Proof technique:** direct.

1.1 Complex Laplace representation. Let $(S(s))_{s\ge0}$ be a strongly continuous semigroup with generator $B$ and $\|S(s)\|\le Me^{\omega s}$, and fix $\lambda\in\mathbb C$ with $\operatorname{Re}\lambda>\omega$; the integral $v:=\int_0^\infty e^{-\lambda s}S(s)x\,ds$ converges absolutely with $\|v\|\le M(\operatorname{Re}\lambda-\omega)^{-1}\|x\|$, and $(S(h)-I)v/h=((e^{\lambda h}-1)/h)\int_h^\infty e^{-\lambda s}S(s)x\,ds-h^{-1}\int_0^h e^{-\lambda s}S(s)x\,ds\to\lambda v-x$ by absolute convergence and average convergence at $0$, so $v\in D(B)$ and $Bv=\lambda v-x$; if $y\in D(B)$ has $By=\lambda y$ then $s\mapsto e^{-\lambda s}S(s)y$ has derivative $e^{-\lambda s}S(s)(By-\lambda y)=0$ by the commutation lemma and the fundamental theorem, so $\|y\|=e^{-\operatorname{Re}\lambda s}\|S(s)y\|\le Me^{(\omega-\operatorname{Re}\lambda)s}\|y\|\to0$; and for $y\in D(B)$ the same computation gives $\int_0^\infty e^{-\lambda s}S(s)(\lambda y-By)ds=y$, so the bounded linear map $x\mapsto v$ is a two-sided inverse of $\lambda I-B$ and $\lambda\in\rho(B)$ with $R(\lambda,B)x=v$. Its graph is closed by continuity; swapping coordinates shows that $\lambda I-B$ has closed graph, and the continuous coordinate change $(y,w)\mapsto(y,\lambda y-w)$ proves that $B$ is closed. The integrated-orbit identity of [[lem-integrated-semigroup-orbits-belong-to-the-generator-domain]] puts $h^{-1}\int_0^hS(s)x\,ds$ in $D(B)$; average convergence [L4] shows that these vectors tend to every $x$, so $D(B)$ is dense. [L3, L4, given, algebra]

1.2 Resolvent scaling and agreement. For a closed linear operator $B$, $c\ne0$ and $\lambda\in\rho(B)$ one has $c\lambda\in\rho(cB)$ with $R(c\lambda,cB)=c^{-1}R(\lambda,B)$, because $c\lambda I-cB=c(\lambda I-B)$ and $D(cB)=D(B)$, and conversely; if $S,T$ are closed operators and $R(\lambda,S)=R(\lambda,T)$ for one $\lambda$, then $(\lambda I-S)^{-1}=(\lambda I-T)^{-1}$ gives $\lambda I-S=\lambda I-T$ and $D(S)=R(\lambda,S)X=R(\lambda,T)X=D(T)$, hence $S=T$. [L2, L9, given, algebra]

1.3 Rotations of an analytic semigroup. Assume (a), so $T$ is a bounded analytic semigroup on $\Sigma_\delta\cup\{0\}$ with generator $A$; for $0<\vartheta<\delta$ and $s\ge0$ put $T_\vartheta(s):=T(e^{i\vartheta}s)$ and $T_{-\vartheta}(s):=T(e^{-i\vartheta}s)$: then $T_{\pm\vartheta}(0)=I$, $T_{\pm\vartheta}(s+s')=T_{\pm\vartheta}(s)T_{\pm\vartheta}(s')$ because $e^{\pm i\vartheta}(s+s')=e^{\pm i\vartheta}s+e^{\pm i\vartheta}s'$, each orbit is continuous on $[0,\infty)$ by holomorphy on the sector and strong continuity at the vertex, and $\|T_{\pm\vartheta}(s)\|\le\sup_{z\in\Sigma_{\delta'}}\|T(z)\|<\infty$ for any $\vartheta<\delta'<\delta$; thus both are bounded strongly continuous semigroups. [L1, given, algebra]

1.4 The (c) calculus and the local series. Assume (c), and put $M_0:=\sup_{t\ge0}\|T(t)\|$ and $M_1:=\sup_{t>0}t\|AT(t)\|$. For $B_s:=AT(s)$, the domain inclusion in (c) and generator commutation [L3] give $B_sT(s)=AT(2s)=T(s)B_s$, hence $B_s$ commutes with every $T(ns)$ and $B_{(n+1)s}=B_sT(ns)$. Induction yields $T(t)X\subseteq D(A^n)$ and $A^nT(t)=B_{t/n}^n$, with $\|A^nT(t)\|\le(M_1n/t)^n$.
First, $T$ is locally Lipschitz in operator norm on $(0,\infty)$. Fix $0<a<b$ and $0<h\le a/2$. Since $T(s)X\subseteq D(A)$, the orbit formula and the fundamental theorem [L3, L4] give, for $a\le s\le b$,
$$T(s+h)x-T(s)x=\int_0^hT(r)AT(s)x\,dr,$$
so $\|T(s+h)-T(s)\|\le h\,\sup_{0\le r\le a/2}\|T(r)\|\,M_1/a$. The same estimate applied from $s+h$ to $s$ handles negative increments on compact subintervals of $(0,\infty)$. Thus $T$ is locally norm-continuous. For $n\ge1$ and $0<s_1<s_2$, the semigroup law gives
$$A^nT(s_j)=A^nT(s_1/2)T(s_j-s_1/2),\qquad j=1,2.$$
The power bound just proved and norm continuity of $T$ show that $s\mapsto A^nT(s)$ is norm-continuous on every compact subinterval of $(0,\infty)$; this is also true for $n=0$.
For each $n\ge0$ and $h>0$, the generic generator-orbit formula and commutation with $A^n$ give
$$A^nT(s+h)x-A^nT(s)x=\int_s^{s+h}A^{n+1}T(\sigma)x\,d\sigma.$$
For $h<0$ the same formula follows by reversing the endpoints. Since $A^{n+1}T(\sigma)$ is operator-norm continuous, division by $h$ shows $\frac{d}{ds}(A^nT(s))=A^{n+1}T(s)$ in operator norm. Hence $T\in C^\infty((0,\infty),\mathcal B(X))$ and $T^{(n)}=A^nT$.
If $M_1>0$, set $\rho:=\min\{1/2,1/(2eM_1)\}$. Taylor's formula on $[t-|h|,t+|h|]$ then gives $\|T(t+h)-\sum_{n<N}h^nA^nT(t)/n!\|\le(eM_1|h|/(t-|h|))^N\to0$ for $|h|<\rho t$. The zeroth series term has norm at most $M_0$, and for $n\ge1$ the power bound gives $|z-t|^n\|A^nT(t)\|/n!\le(\rho eM_1)^n$; hence $\sum_{n\ge0}|z-t|^n\|A^nT(t)\|/n!\le M_0+\sum_{n\ge1}(\rho eM_1)^n\le M_0+1$ for $|z-t|\le\rho t$. If $M_1=0$, then $AT(s)=0$ for all $s>0$; generator commutation and the fundamental theorem [L3, L4] give $T(t)x=x$ for every $x\in D(A)$, and density gives $T(t)=I$ and $A=0$. [L3, L4, L8, given, algebra]

1.5 Banach-valued identity theorem. Let $F:U\to Y$ be holomorphic on a connected open set. If $F$ vanishes on a real interval, choose a real center and a disc whose real diameter lies in that interval. The power series in [L7] then has all coefficients zero, so $F$ vanishes on a disc. If $F$ vanishes on any nonempty open set, put $Z=\{z\in U:F\text{ vanishes on a neighborhood of }z\}$. This set is nonempty and open. At every point in its closure in $U$, continuity of every derivative from [L7] gives $F^{(n)}(z)=0$ for every $n$, since all derivatives vanish on $Z$. The Taylor expansion at $z$ therefore vanishes on a neighborhood, so $z\in Z$. Thus $Z$ is also closed; connectedness gives $Z=U$. [L7, given, algebra]

1.6 (d) gives a wedge at the imaginary axis. Assume (d) with constants $M,C$; for fixed $s\ne0$ the resolvent identity gives $\|R(r+is,A)-R(r'+is,A)\|\le|r-r'|C^2/s^2$ for $r,r'>0$, so $R(r+is,A)$ converges in norm as $r\downarrow0$ to some $R_0\in\mathcal B(X)$; the vectors $y_r:=R(r+is,A)x$ satisfy $((r+is)I-A)y_r=x$, so $Ay_r=(r+is)y_r-x\to isR_0x-x$ and closedness of $A$ gives $R_0x\in D(A)$ with $(isI-A)R_0x=x$; if $(isI-A)x=0$ then $x=R(r+is,A)(rx)=rR(r+is,A)x$ and $\|x\|\le Cr|s|^{-1}\|x\|$ for all $r>0$, so $x=0$; hence $is\in\rho(A)$ and $\|R(is,A)\|\le C/|s|$, and the Neumann series $R(\lambda,A)=[I+rR(is,A)]^{-1}R(is,A)$ converges for $\lambda=r+is$ with $|r|<q|s|/C$, $q\in(0,1)$, giving $\|R(\lambda,A)\|\le C/((1-q)\cos\theta|\lambda|)$, $\theta:=\arctan(q/C)$, on that wedge. [L2, L3, L9, given, algebra]

1.7 (e) gives the contour semigroup. Assume (e), so $A$ is sectorial of some angle $\delta_0>0$; putting $\delta:=\min\{\delta_0,\pi/2\}$ (a smaller sector is contained in a larger one, so $A$ is sectorial of angle $\delta$) and applying [L6], the contour family is a bounded analytic semigroup of angle $\delta$ with generator $A$, unique among exponentially bounded semigroups with that generator, and satisfies $T(t)X\subseteq D(A^m)$, $\|A^mT(t)\|\le C_mt^{-m}$ for all $m\ge1$, $t>0$; in particular this semigroup satisfies (c) and supplies the semigroup of (a). [L6, given, algebra]

2.1 (a) implies (b). Assume (a) and fix $0<\vartheta<\delta$; by [step 1.1] with $\lambda=1$ one has $R(1,A)x=\int_0^\infty e^{-t}T(t)x\,dt$ for every $x$, and the function $z\mapsto e^{-z}T(z)x$ is holomorphic on the star-shaped sector $\Sigma_\delta$, so [L5] applied to the closed contours $\varepsilon\to R\to Re^{i\vartheta}\to\varepsilon e^{i\vartheta}\to\varepsilon$ gives $0=\int_\varepsilon^R e^{-t}T(t)x\,dt+\int_{\mathrm{arc}_R}+\int_{\mathrm{ray}}+\int_{\mathrm{arc}_\varepsilon}$ with $\|e^{-z}T(z)x\|\le e^{-\operatorname{Re}z}M_{\delta'}\|x\|$; since $\operatorname{Re}(se^{i\vartheta})\ge s\cos\vartheta$ and $\operatorname{Re}z\ge R\cos\vartheta$ on the outer arc and $\|e^{-z}\|\le e^{\varepsilon}$ on the inner arc, the limits $\varepsilon\downarrow0$, $R\to\infty$ give $\int_0^\infty e^{-t}T(t)x\,dt=e^{i\vartheta}\int_0^\infty e^{-se^{i\vartheta}}T_\vartheta(s)x\,ds$; by [step 1.1] applied to the bounded semigroup $T_\vartheta$ at $\lambda=e^{i\vartheta}$ the last integral equals $R(e^{i\vartheta},A_\vartheta)x$, so $R(1,A)=e^{i\vartheta}R(e^{i\vartheta},A_\vartheta)=R(1,e^{-i\vartheta}A_\vartheta)$ by [step 1.2]; both $A$ and $e^{-i\vartheta}A_\vartheta$ are closed by the hypothesis and step 1.1, so [step 1.2] gives $A=e^{-i\vartheta}A_\vartheta$, that is $A_\vartheta=e^{i\vartheta}A$ with domain $D(A)$; the same argument with $-\vartheta$ gives $A_{-\vartheta}=e^{-i\vartheta}A$, so (b) holds for this $\vartheta$ and hence for every $\vartheta\in(0,\delta)$. [step 1.1, step 1.2, step 1.3, L2, L3, L5, given, algebra]

2.2 (b) implies (e). Assume (b) for some $\vartheta$, with the two bounded semigroups satisfying $\|S_\pm(t)\|\le M$; [step 1.1] applied to $S_\pm$ gives $\mathbb C_+\subseteq\rho(e^{\pm i\vartheta}A)$ with $\|R(\lambda,e^{\pm i\vartheta}A)\|\le M/\operatorname{Re}\lambda$, so by [step 1.2] the half-planes $\{\lambda:\operatorname{Re}(e^{\pm i\vartheta}\lambda)>0\}=e^{\mp i\vartheta}\mathbb C_+$ lie in $\rho(A)$; their union is $\Sigma_{\pi/2+\vartheta}$, and for $\lambda=re^{i\alpha}$ with $|\alpha|\le\pi/2+\vartheta-\varepsilon$ the sign $\alpha\ge0$ gives $\operatorname{Re}(e^{-i\vartheta}\lambda)=r\cos(\alpha-\vartheta)\ge r\min\{\cos\vartheta,\sin\varepsilon\}$ (the angle $\alpha-\vartheta$ ranges over $[-\vartheta,\pi/2-\varepsilon]$) and symmetrically for $\alpha<0$, so $\|R(\lambda,A)\|\le M/(r\min\{\cos\vartheta,\sin\varepsilon\})=M_\varepsilon/|\lambda|$ there; hence $A$ is sectorial of angle $\vartheta$, which is (e). [step 1.1, step 1.2, L2, given, algebra]

2.3 (d) implies (e). Assume (d); [step 1.6] gives the wedge $|r|<q|s|/C$ with $\|R(\lambda,A)\|\le C/((1-q)\cos\theta|\lambda|)$, and [step 1.1] applied to the bounded semigroup generated by $A$ gives $\|R(\lambda,A)\|\le M/\operatorname{Re}\lambda$ on the right half-plane; set $\eta:=\frac12\arctan(q/C)>0$: for $|\arg\lambda|\le\pi/2+\eta-\varepsilon$ either $|\arg\lambda|\le\pi/2-\varepsilon/2$ and the Laplace estimate gives $\|R(\lambda,A)\|\le M/(|\lambda|\sin(\varepsilon/2))$, or $|\arg\lambda|>\pi/2-\varepsilon/2$ and then $|r|/|s|\le\tan\eta<q/C$, so the wedge bound applies; hence $\rho(A)\supseteq\Sigma_{\pi/2+\eta}$ and the bound $M_\varepsilon/|\lambda|$ holds on each $\Sigma_{\pi/2+\eta-\varepsilon}$, which is (e) with exponent $\eta$. [step 1.1, step 1.6, L2, given, algebra]

2.4 (c) builds the holomorphic extension. Assume (c) and $M_1>0$, put $\rho:=\min\{1/2,1/(2eM_1)\}$ and $\Omega:=\bigcup_{t>0}D(t,\rho t)$; by [step 1.4] each series $S_t(z):=\sum_{n\ge0}(z-t)^nA^nT(t)/n!$ converges in $\mathcal B(X)$ for $|z-t|<t/(eM_1)$, is bounded by $M_0+1$ on $D(t,\rho t)$, and equals $T$ on the real interval $(t-\rho t,t+\rho t)$; if $z\in D(t_1,\rho t_1)\cap D(t_2,\rho t_2)$ the two series are holomorphic on the convex intersection and agree on its nonempty real interval, hence agree on it by [step 1.5], so $T̃(z):=S_t(z)$ is a well-defined holomorphic map $\Omega\to\mathcal B(X)$ with $\|T̃\|\le M_0+1$ extending $T$; for real $t>0$ the holomorphic difference $z\mapsto T̃(z)T(t)-T̃(z+t)$ vanishes on a real interval and hence, by [step 1.5], on every connected component of $\{z:z,z+t\in\Omega\}$ meeting it, so $T̃(z)T(t)=T̃(z+t)$ for $z$ in the sector $\Sigma_\eta$, $\eta:=\arctan\rho>0$, which lies in $\Omega$ because $|\operatorname{Im}z|<\rho\operatorname{Re}z$; if $M_1=0$ then $T(t)=I$ and $A=0$ by [step 1.4], and $T̃(z):=I$ is a bounded analytic semigroup of angle $\pi/2$ with generator $A$. [step 1.4, step 1.5, L7, given, algebra]

3.1 (c) implies (a). Restrict the holomorphic extension of step 2.4 to the connected sector $\Sigma_\eta$, where $\widetilde T$ is bounded by $M_0+1$. For each fixed real $\tau>0$, the maps $z\mapsto T(\tau)\widetilde T(z)$ and $z\mapsto\widetilde T(z)T(\tau)$ are holomorphic on $\Sigma_\eta$. They agree for every positive real $s$, because $\widetilde T(s)=T(s)$ and the real semigroup law gives $T(\tau)T(s)=T(\tau+s)=T(s+\tau)=T(s)T(\tau)$. By the Banach-valued identity theorem [step 1.5], they agree throughout $\Sigma_\eta$. Combining this commutation with step 2.4 yields, for every $z\in\Sigma_\eta$ and real $\tau>0$, $T(\tau)\widetilde T(z)=\widetilde T(z)T(\tau)=\widetilde T(z+\tau)$. Now fix $w\in\Sigma_\eta$. Since the sector is closed under addition, $G(z):=\widetilde T(z)\widetilde T(w)-\widetilde T(z+w)$ is holomorphic on $\Sigma_\eta$; for real $z=t>0$ the mixed-product identity just proved gives $G(t)=T(t)\widetilde T(w)-\widetilde T(t+w)=0$. A second application of [step 1.5] gives $G\equiv0$, so $\widetilde T(z)\widetilde T(w)=\widetilde T(z+w)$. Set $\widetilde T(0):=I$. To check strong continuity at the vertex, for fixed small real $h>0$ and $z$ near zero in $\Sigma_\eta$ with $z+h\in\Sigma_\eta$, use the semigroup law and uniform bound to get $\|\widetilde T(z)x-x\|\le(M_0+1)\|x-T(h)x\|+\|\widetilde T(z+h)x-T(h)x\|+\|T(h)x-x\|$. Continuity at the interior point $h$ makes the middle term tend to zero as $z\to0$; strong continuity of $T$ at zero lets $\|T(h)x-x\|$ be arbitrarily small, so $\widetilde T$ is strongly continuous at the vertex. Thus $\widetilde T$ is a bounded analytic semigroup of angle $\eta>0$ extending $T$, and (a) holds. [step 1.5, step 2.4, L1, given, algebra]

3.2 (a) implies (c) and (d). Assume (a); [step 2.1] gives (b) and [step 2.2] gives (e), so the contour semigroup of [step 1.7] is a bounded analytic semigroup generated by $A$, and by the uniqueness clause of [L6] it equals the given $T$; the smoothing estimates of [L6] therefore give $T(t)X\subseteq D(A)$ and $\sup_{t>0}t\|AT(t)\|\le C_1<\infty$, which is (c); moreover for $r>0$, $s\ne0$ the point $\lambda=r+is$ lies in $\Sigma_{\pi/2+\vartheta-\varepsilon}$ and [step 2.2] gives $\|R(\lambda,A)\|\le M_\varepsilon/|\lambda|\le M_\varepsilon/|s|$, which is (d). [step 1.7, step 2.1, step 2.2, L6, given, algebra]

3.3 The maximal angle. Let $\psi$ be the supremum of the $\delta\in(0,\pi/2]$ for which $A$ has a bounded analytic semigroup extension to $\Sigma_\delta$, let $B$ be the set of $\vartheta\in(0,\pi/2)$ for which (b) holds, and let $E$ be the set of $\delta>0$ with $A$ sectorial of exponent $\delta$; [step 2.1] shows $(0,\psi)\subseteq B$, so $\sup B\ge\psi$, while $\vartheta\in B$ gives $\vartheta\in E$ by [step 2.2] and then an extension to $\Sigma_\vartheta$ by [step 1.7], so $\vartheta\le\psi$ and $\sup B=\psi$; likewise $(0,\psi)\subseteq E$ by [step 2.2], so $\sup E\ge\psi$, and $\delta\in E$ gives an extension to $\Sigma_\delta$ by [step 1.7], so $\delta\le\psi$ and $\sup E=\psi$; these are equalities of suprema only, with no attainment asserted at $\psi$. [step 1.7, step 2.1, step 2.2, given, algebra]

4.1 Assembly. The implications (a)$\Rightarrow$(b) [step 2.1], (b)$\Rightarrow$(e) [step 2.2], (e)$\Rightarrow$(a),(c) [step 1.7], (c)$\Rightarrow$(a) [step 3.1], (a)$\Rightarrow$(c),(d) [step 3.2] and (d)$\Rightarrow$(e) [step 2.3] close the cycle, so (a)-(e) are equivalent; when they hold, the semigroup of (c) is the contour semigroup by the uniqueness argument of [step 3.2]; the angle equalities are [step 3.3]; and no choice principle beyond Dependent Choice is used in the argument: every inverse appearing is an explicit absolutely convergent Laplace integral, a norm limit of resolvents, or a Neumann series, boundedness of each inverse is proved explicitly, so the closed-graph implication in the resolvent vocabulary is not invoked. [step 1.7, step 2.3, step 3.1, step 3.2, step 3.3, given, algebra] ∎
