---
id: lem-a-nondegenerate-l1-representation-recovers-a-unitary-group-representation
kind: lemma
title: Recovering a unitary group representation from a nondegenerate L one representation
deps:
  - def-nondegenerate-star-representation-of-a-banach-star-algebra
  - thm-l1-group-algebras-have-a-contractively-bounded-approximate-identity
  - def-convolution-on-cc-and-l1-of-a-group
  - def-compactly-supported-convolution-on-a-group
  - lem-haar-translations-are-strongly-continuous-on-lp-one-and-two
  - def-involution-on-l1-of-a-group
  - thm-l1-of-a-locally-compact-group-is-a-banach-star-algebra
  - lem-the-l1-involution-is-isometric-and-reverses-convolution
  - lem-l1-convolution-norm-inequality
  - lem-complex-haar-l1-and-l2-are-complete-and-cc-dense
  - def-left-haar-integral-and-left-haar-measure
  - def-hilbert-space
  - def-bounded-linear-operator
  - def-complex-haar-lp-spaces-and-compactly-supported-functions
  - def-integrated-form-of-a-unitary-representation
  - def-strongly-continuous-unitary-representation
  - def-spectrum-and-resolvent-set-in-a-banach-algebra
  - def-strongly-measurable-banach-valued-function
  - def-bochner-integrable-function
  - thm-bochner-integrability-criterion
  - lem-bochner-integral-norm-inequality
  - thm-bounded-linear-maps-commute-with-bochner-integration
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-spectral-radius-formula
  - lem-c-star-spectral-radius-equals-norm-for-normal-elements
  - lem-bounded-hilbert-operators-form-a-c-star-algebra
  - def-axiom-of-choice
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC, inherited from the L1 convolution theory, the approximate identity, Haar integration and the Bochner toolkit; no additional choice is used in the reconstruction."
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 8, §8.B: the converse association quoted before Proposition 8.B.3 (references to Dixmier 13.3.4, 13.9.3)"
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix F, §F.4: paragraph 'Conversely, any non-degenerate ∗-representation of L1(G) is of this form'"
status: published
origin: pipeline
---
## Statement

Assume the Axiom of Choice. Let $G$ be an LCH group with a fixed left Haar
measure and let $\sigma:L^1(G)\to\mathcal B(K)$ be a nondegenerate
star-representation of $L^1(G)$ on a complex Hilbert space $K$
([[def-nondegenerate-star-representation-of-a-banach-star-algebra]],
[[def-hilbert-space]]). For $g\in G$ and $f\in L^1(G)$ put
$L_gf(x)=f(g^{-1}x)$. Then there is a unique unitary representation $U$ of $G$
with
$$U(g)\,\sigma(f)\,\xi=\sigma(L_gf)\,\xi\qquad(g\in G,\ f\in L^1(G),\ \xi\in K),$$
and the integrated form of $U$ equals $\sigma$ on $L^1(G)$, that is
$\pi_U(f)=\sigma(f)$ for every $f\in L^1(G)$
([[def-integrated-form-of-a-unitary-representation]],
[[def-strongly-continuous-unitary-representation]]).

## Facts & Assumptions

**Given:** AC; an LCH group $G$ with fixed left Haar measure; a nondegenerate
star-representation $\sigma$ of $L^1(G)$ on $K$; the left translates $L_gf$.

[F1] $L^1(G)$ is a complex Banach $\ast$-algebra with convolution $\ast$,
involution $f^*$, $\|f*h\|_1\le\|f\|_1\|h\|_1$ and $\|f^*\|_1=\|f\|_1$; the
convolution is the bounded bilinear extension of the $C_c$ convolution
$ (u*w)(x)=\int u(y)w(y^{-1}x)\,dy$, and $C_c(G)$ is dense in $L^1(G)$
([[def-convolution-on-cc-and-l1-of-a-group]],
[[def-compactly-supported-convolution-on-a-group]],
[[def-involution-on-l1-of-a-group]],
[[thm-l1-of-a-locally-compact-group-is-a-banach-star-algebra]],
[[lem-the-l1-involution-is-isometric-and-reverses-convolution]],
[[lem-l1-convolution-norm-inequality]],
[[lem-complex-haar-l1-and-l2-are-complete-and-cc-dense]],
[[def-complex-haar-lp-spaces-and-compactly-supported-functions]]).

[F2] Left translation is isometric on $L^1(G)$ and $g\mapsto L_gf$ is
continuous for every $f\in L^1(G)$; and $L_gL_h=L_{gh}$ with $L_e$ the identity
([[lem-haar-translations-are-strongly-continuous-on-lp-one-and-two]]).

[F3] $L^1(G)$ has a two-sided approximate identity $(e_U)$ with
$\|e_U\|_1\le1$ and $e_U\ast f\to f$, $f\ast e_U\to f$ in $L^1(G)$ for every
$f$ ([[thm-l1-group-algebras-have-a-contractively-bounded-approximate-identity]]).

[F4] $\sigma$ is bounded and complex-linear, $\sigma(f*h)=\sigma(f)\sigma(h)$,
$\sigma(f^*)=\sigma(f)^*$, and the closed linear span of
$\{\sigma(f)\xi\}$ is $K$
([[def-nondegenerate-star-representation-of-a-banach-star-algebra]],
[[def-bounded-linear-operator]]).

[F5] Put $B:=\mathbb C\oplus L^1(G)$ with $\|(\lambda,f)\|_B=|\lambda|+\|f\|_1$
and product $(\lambda,f)(\mu,h)=(\lambda\mu,\lambda h+\mu f+f\ast h)$. Expanding
the products shows associativity from associativity and bilinearity of
convolution in [F1]; $(1,0)$ is a unit; the convolution norm inequality in [F1]
and the triangle inequality give submultiplicativity; and completeness follows
from completeness of $\mathbb C$ and $L^1(G)$ in [F1]. Thus $B$ is a unital
Banach algebra containing $L^1(G)$ isometrically by $f\mapsto(0,f)$. We use the
spectrum of $(0,f)$ in this explicit unitization, as defined for a unital
Banach algebra in [[def-spectrum-and-resolvent-set-in-a-banach-algebra]]. The
map $\widetilde\sigma(\lambda,f):=\lambda I+\sigma(f)$ is a unital algebra
homomorphism $B\to\mathcal B(K)$ by linearity and multiplicativity in [F4].

[F6] In every Banach algebra $r(b)=\lim_n\|b^n\|^{1/n}$, and for a normal
element $T$ of the C\*-algebra $\mathcal B(K)$ one has $r(T)=\|T\|$; the
C\*-algebra structure on $\mathcal B(K)$ is available here
([[thm-spectral-radius-formula]],
[[lem-c-star-spectral-radius-equals-norm-for-normal-elements]],
[[lem-bounded-hilbert-operators-form-a-c-star-algebra]]).

[F7] Bochner toolkit: a strongly measurable $X$-valued function is Bochner
integrable exactly when the norm is integrable, $\|\int f\,d\mu\|\le\int\|f\|\,d\mu$,
bounded linear maps commute with Bochner integrals, and strongly measurable functions admit the stated simple approximations
([[def-strongly-measurable-banach-valued-function]],
[[def-bochner-integrable-function]],
[[thm-bochner-integrability-criterion]],
[[lem-bochner-integral-norm-inequality]],
[[thm-bounded-linear-maps-commute-with-bochner-integration]]).

[F8] For $L^1$ functions on $\sigma$-finite product spaces the iterated integral
may be computed in either order
([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]],
[[def-left-haar-integral-and-left-haar-measure]]).

[F9] The integrated form of a strongly continuous unitary representation $V$ on
$K$ is the operator with
$\langle\pi_V(f)\xi,\eta\rangle=\int_Gf(g)\langle V(g)\xi,\eta\rangle\,dg$ and
$\|\pi_V(f)\|\le\|f\|_1$
([[def-integrated-form-of-a-unitary-representation]]).

## Proof

**Proof technique:** direct.

**Given:** AC, an LCH group $G$ with left Haar measure, and a nondegenerate
star-representation $\sigma$ of $L^1(G)$ on the Hilbert space $K$.

1.1 If $K=0$, the unique representation on that Hilbert space has zero integrated operators and satisfies every assertion. Hence assume $K\ne0$. The star-representation is contractive: $\|\sigma(f)\|\le\|f\|_1$ for every $f\in L^1(G)$. Indeed, the extension $\widetilde\sigma$ of [F5] is a unital homomorphism, so an invertible $b\in B$ has invertible image with inverse $\widetilde\sigma(b^{-1})$; hence $\sigma_{\mathcal B(K)}(\sigma(f))\subseteq\sigma_B((0,f))$ and therefore $r_{\mathcal B(K)}(\sigma(f))\le r_B((0,f))\le\|f\|_1$ by [F5] and [F6]. For $a=f^*\ast f$ the operator $\sigma(a)=\sigma(f)^*\sigma(f)$ is self-adjoint, hence normal, so $\|\sigma(f)\|^2=\|\sigma(f)^*\sigma(f)\|=\|\sigma(f^*\ast f)\| =r_{\mathcal B(K)}(\sigma(f^*\ast f))\le r_B((0,f^*\ast f))\le\|f^*\ast f\|_1\le\|f\|_1^2$ by [F1] and [F6]. [F1, F4, F5, F6]

1.2 For all $g\in G$ and $u,w\in L^1(G)$ one has $L_g(u\ast w)=(L_gu)\ast w$; consequently $\sigma(L_g(u\ast w))=\sigma(L_gu)\sigma(w)$. Indeed, for $u,w\in C_c(G)$ the pointwise formula of [F1] gives $(L_g(u\ast w))(x)=\int u(g^{-1}y)w(y^{-1}x)\,dy=\int u(z)w(z^{-1}g^{-1}x)\,dz=(L_gu\ast w)(x)$ after $y=gz$, and both sides are bounded bilinear maps $L^1(G)\times L^1(G)\to L^1(G)$ (left translation is isometric by [F2], convolution is bounded by [F1]) that agree on the dense subspace $C_c(G)\times C_c(G)$. [F1, F2, F4]

1.3 For $w,u\in C_c(G)$, $F(g)=w(g)L_gu$ has compact norm image and vanishes outside the compact set $\operatorname{supp}w$. For every integer $n\ge1$, choose a finite $2^{-n}$-net in that image, and partition the compact support into measurable sets by the first net point within $2^{-n}$ of $F(g)$. The resulting finite-valued simple function $s_n$, zero off that support, satisfies $\|F-s_n\|\le2^{-n}$ there, hence $\int\|F-s_n\|\le2^{-n}\mu(\operatorname{supp}w)\to0$. Thus $F$ is strongly measurable and Bochner integrable by [F7], directly for the given Borel Haar measure. Put $P=\int F(g)\,dg$. For EVERY bounded measurable complex function $h$, the map $a\mapsto\int a(x)h(x)\,dx$ is bounded linear on $L^1$, so [F7] and Fubini [F8] give
$$\int P(x)h(x)\,dx=\int w(g)\int u(g^{-1}x)h(x)\,dx\,dg=\int (w*u)(x)h(x)\,dx.$$
The integrands are absolutely integrable on compact support: after $x=gy$, their absolute value is bounded by $\|h\|_\infty|w(g)||u(y)|$. Taking $h(x)=\overline{a(x)}/|a(x)|$ where $a=P-w*u\ne0$, and $h=0$ where $a=0$, gives $\int|P-w*u|=0$, proving $P=w*u$ in $L^1$. [F1, F2, F7, F8, algebra]

2.1 For every $f\in L^1(G)$ and $g\in G$: $\sigma(L_gf)\xi=\lim_U\sigma(L_ge_U)\sigma(f)\xi$ for every $\xi\in K$, and $\|\sigma(L_ge_U)\|\le1$. Indeed, $L_g(e_U\ast f)=(L_ge_U)\ast f$ by step 1.2, so $\sigma(L_g(e_U\ast f))=\sigma(L_ge_U)\sigma(f)$ by [F4]; moreover $L_g(e_U\ast f)\to L_gf$ in $L^1(G)$ because $e_U\ast f\to f$ by [F3] and $L_g$ is isometric, so boundedness of $\sigma$ gives convergence in operator norm. Finally $\|\sigma(L_ge_U)\|\le\|L_ge_U\|_1=\|e_U\|_1\le1$ by step 1.1, [F2] and [F3]. [F1, F2, F3, F4, step 1.1, step 1.2]

2.2 For $w,u\in C_c(G)$ and $\xi,\eta\in K$: $\langle\sigma(w\ast u)\xi,\eta\rangle=\int_Gw(g)\langle\sigma(L_gu)\xi,\eta\rangle\,dg$. Indeed, the map $a\mapsto\sigma(a)\xi$ is bounded linear by [F4], so it commutes with the Bochner integral of step 1.3: $\sigma\bigl(\int_Gw(g)L_gu\,dg\bigr)\xi=\int_Gw(g)\sigma(L_gu)\xi\,dg$; taking the pairing with $\eta$ and substituting $\int w(g)L_gu\,dg=w\ast u$ from the preceding step gives the claim. [F7, step 1.3]

3.1 Let $D_0$ be the linear span of $\{\sigma(f)\xi:f\in L^1(G),\ \xi\in K\}$, a dense subspace of $K$ by [F4]. For $g\in G$ define $U_0(g)\bigl(\sum_i\sigma(f_i)\xi_i\bigr):=\sum_i\sigma(L_gf_i)\xi_i$ on $D_0$. This is well defined: if $\sum_i\sigma(f_i)\xi_i=0$, then applying the bounded operator $\sigma(L_ge_U)$ and passing to the limit with step 2.1 gives $\sum_i\sigma(L_gf_i)\xi_i=0$. It is complex-linear and a contraction, because $\Bigl\|\sum_i\sigma(L_gf_i)\xi_i\Bigr\|=\lim_U\Bigl\|\sigma(L_ge_U)\sum_i\sigma(f_i)\xi_i\Bigr\|\le\|d\|$ for $d=\sum_i\sigma(f_i)\xi_i$ by step 2.1. Hence $U_0(g)$ extends uniquely to a contraction $U(g)\in\mathcal B(K)$. [F4, step 2.1]

3.2 For $h\in C_c(G)$, $f\in L^1(G)$ and $\xi,\eta\in K$: $\int_Gh(g)\langle\sigma(L_gf)\xi,\eta\rangle\,dg=\langle\sigma(h\ast f)\xi,\eta\rangle.$ Both sides are complex-linear in $f$ and bounded by $\|h\|_1\|f\|_1\|\xi\|\|\eta\|$: on the left, $|\langle\sigma(L_gf)\xi,\eta\rangle|\le\|\sigma(L_gf)\xi\|\|\eta\|\le\|L_gf\|_1\|\xi\|\|\eta\|$ by steps 1.1 and 1.2, and $\int|h(g)|\,dg=\|h\|_1$; on the right, $\|\sigma(h\ast f)\xi\|\le\|h\ast f\|_1\|\xi\|\le\|h\|_1\|f\|_1\|\xi\|$ by [F1] and step 1.1. By step 2.2 the two sides agree whenever $f\in C_c(G)$, and $C_c(G)$ is dense in $L^1(G)$ by [F1]. [F1, step 1.1, step 2.2]

4.1 For all $g,h\in G$ and $\xi\in K$ one has $U(g)U(h)\sigma(f)\xi=U(gh)\sigma(f)\xi$ and $U(e)=I$: indeed $U(g)U(h)\sigma(f)\xi=U(g)\sigma(L_hf)\xi=\sigma(L_gL_hf)\xi =\sigma(L_{gh}f)\xi=U(gh)\sigma(f)\xi$ by [F2], and $U(e)\sigma(f)\xi=\sigma(L_ef)\xi=\sigma(f)\xi$. Since $D_0$ is dense, $U(g)U(h)=U(gh)$ and $U(e)=I$; taking $h=g^{-1}$ shows that every $U(g)$ is bijective with inverse $U(g^{-1})$ and is therefore, being a contraction with contractive inverse, an isometry, i.e. a unitary operator. [F2, F4, step 3.1]

4.2 Uniqueness of $U$: if $V$ is a unitary representation of $G$ with $V(g)\sigma(f)\xi=\sigma(L_gf)\xi$ for all $g,f,\xi$, then $V(g)$ and $U(g)$ agree on the dense subspace $D_0$ and both are bounded, so $V(g)=U(g)$ for every $g$. [F4, step 3.1]

5.1 $U$ is strongly continuous. For fixed $f\in L^1(G)$, $\xi\in K$ and $g\to g_0$, $\|U(g)\sigma(f)\xi-U(g_0)\sigma(f)\xi\|=\|\sigma(L_gf-L_{g_0}f)\xi\| \le\|L_gf-L_{g_0}f\|_1\|\xi\|\to0$ by steps 1.1 and 2.1 and the continuity in [F2]. For arbitrary $\eta\in K$ and $\epsilon>0$ choose $d\in D_0$ with $\|\eta-d\|<\epsilon/3$, which [F4] permits, and use $\|U(g)\eta-U(g_0)\eta\|\le\|U(g)(\eta-d)\|+\|U(g)d-U(g_0)d\|+\|U(g_0)(d-\eta)\| \le2\epsilon/3+\|U(g)d-U(g_0)d\|$ together with the preceding convergence for $d$; since $U(g)$ is unitary by step 4.1, this gives continuity of every orbit map. [F2, F4, step 1.1, step 3.1, step 4.1]

6.1 For $h\in C_c(G)$ one has $\pi_U(h)=\sigma(h)$. Indeed, for all $f\in L^1(G)$, $\xi,\eta\in K$, $\langle\pi_U(h)\sigma(f)\xi,\eta\rangle=\int_Gh(g)\langle U(g)\sigma(f)\xi,\eta\rangle\,dg =\int_Gh(g)\langle\sigma(L_gf)\xi,\eta\rangle\,dg=\langle\sigma(h\ast f)\xi,\eta\rangle =\langle\sigma(h)\sigma(f)\xi,\eta\rangle,$ using [F9], step 3.1, step 3.2 and multiplicativity [F4]. Thus $\pi_U(h)-\sigma(h)$ vanishes on the dense subspace $D_0$ of [F4] and is bounded, so $\pi_U(h)=\sigma(h)$. [F4, F9, step 3.1, step 3.2, step 5.1]

7.1 For every $h\in L^1(G)$ one has $\pi_U(h)=\sigma(h)$: the assignments $h\mapsto\pi_U(h)$ and $h\mapsto\sigma(h)$ are complex-linear and bounded with operator norm at most one by [F9] and step 1.1, and they agree on the dense subspace $C_c(G)$ of $L^1(G)$ by step 6.1 and [F1]; a bounded linear map is determined by its restriction to a dense subspace. [F1, F9, step 1.1, step 6.1]

8.1 AC is used only through the suppliers: the $L^1$ convolution and Haar integration theory of [F1]–[F3], the spectral and unitization inputs of [F5]–[F6] and the Bochner toolkit of [F7]–[F8], each of which states the choice principle it requires; the reconstruction itself involves no further selection ([[def-axiom-of-choice]]). [given, F1, F7] ∎ 