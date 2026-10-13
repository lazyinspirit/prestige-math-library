---
id: def-periodic-vector-sobolev-space-and-leray-projection
kind: definition
title: "Periodic vector Sobolev spaces on the three-torus, the weight family, and the Leray projection"
status: published
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-the-one-dimensional-torus-and-normalized-haar-integral, def-fourier-coefficients-and-trigonometric-polynomials, thm-fourier-basis-and-parseval-on-the-n-torus, def-countable-choice, def-complex-lp-and-euclidean-test-function-conventions, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-product-measure-on-sigma-finite-spaces, lem-finite-tori-are-compact-hausdorff-character-spaces, thm-fejer-convergence-in-lp, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]
dependency_roles:
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-fejer-convergence-in-lp: mathematical-premise
  def-the-one-dimensional-torus-and-normalized-haar-integral: mathematical-premise
  def-fourier-coefficients-and-trigonometric-polynomials: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
  def-countable-choice: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  def-product-measure-on-sigma-finite-spaces: mathematical-premise
  lem-finite-tori-are-compact-hausdorff-character-spaces: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "E. Wiedemann (ed. J. Skipper), Lecture Notes: Navier-Stokes Equations (Universität Ulm, WS 2018/19), Section 2.1 (Fourier characterisation of Sobolev spaces on the torus T^3, Definitions 2.1-2.2) and Section 2.2 (divergence-free fields H, the Helmholtz decomposition Theorem 2.6, the Leray projection Definition 2.7 and the commutation Lemma 2.8)"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/skipper/NSEEmilFinished.pdf"
    - title: "A. J. Majda and A. L. Bertozzi, Vorticity and Incompressible Flow (Cambridge Texts in Applied Mathematics, CUP 2002), Subsection 1.9.1 (Fourier series convention (1.99)-(1.102) on one-periodic fields) and Proposition 1.18 with formula (1.98) (Hodge decomposition on the torus and the multiplier k⊗k/|k|^2)"
      url: "http://inis.jinr.ru/sl/P_Physics/PC_Classical%20physics/PCfm_Fluid%20mechanics/Majda,%20Bertozzi.%20Vorticity%20and%20incompressible%20flow%20(CUP,%202002)(558s).pdf"
verification:
  precheck: pass
---

## Definition

**Assume the Axiom of Countable Choice** $\mathrm{AC}_\omega$ ([[def-countable-choice]]), which is used by the imported Fourier-basis theorem quoted below.

**The three-torus and its measure.** Let $\mathbb T:=\mathbb R/\mathbb Z$ be the one-dimensional torus with its quotient topology and its normalized Haar integral $m_{\mathbb T}$ ([[def-the-one-dimensional-torus-and-normalized-haar-integral]]); $\mathbb T$ is compact Hausdorff ([[lem-finite-tori-are-compact-hausdorff-character-spaces]]). Put $\mathbb T^3:=\mathbb T\times\mathbb T\times\mathbb T$ with the finite product topology. Let $dx:=m_{\mathbb T}\otimes m_{\mathbb T}\otimes m_{\mathbb T}$ be the product measure on the Borel $\sigma$-algebra of $\mathbb T^3$ ([[def-product-measure-on-sigma-finite-spaces]], [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]); being a product of probability measures it is a probability measure. For a vector $k=(k_1,k_2,k_3)\in\mathbb Z^3$ and $x=(x_1,x_2,x_3)\in\mathbb T^3$ define the **character**
$$e_k(x):=\exp\bigl(2\pi i\,(k_1x_1+k_2x_2+k_3x_3)\bigr)=e^{2\pi i\,k\cdot x},$$
where each $x_j$ is inserted through any real representative and $\exp$ is the complex exponential ([[def-fourier-coefficients-and-trigonometric-polynomials]]); the definition does not depend on the representatives. Then $|e_k(x)|=1$, $e_k e_l=e_{k+l}$, and $e_{-k}=\overline{e_k}$.

**Function spaces.** Write $L^2:=L^2(\mathbb T^3;\mathbb R^3)$ for the real Hilbert space of (equivalence classes of) real Borel vector fields $u:\mathbb T^3\to\mathbb R^3$ with $\int_{\mathbb T^3}|u|_2^2\,dx<+\infty$, inner product $\langle u,v\rangle:=\int_{\mathbb T^3}u\cdot v\,dx$ and norm $|u|_2:=\langle u,u\rangle^{1/2}$; here $u\cdot v$ is the Euclidean inner product of $\mathbb R^3$ ([[def-complex-lp-and-euclidean-test-function-conventions]]). Similarly $L^1(\mathbb T^3;\mathbb C^3)$ denotes the integrable complex vector fields.

**Fourier coefficients.** For $u\in L^1(\mathbb T^3;\mathbb C^3)$ and $k\in\mathbb Z^3$ define
$$\widehat u(k):=\int_{\mathbb T^3}u(x)\,e_{-k}(x)\,dx\ \in\mathbb C^3 .$$
The integral depends only on the class of $u$. A field $u\in L^1$ is real almost everywhere if and only if $\widehat u(-k)=\overline{\widehat u(k)}$ for every $k\in\mathbb Z^3$; the forward direction uses $\widehat{\overline u}(k)=\overline{\widehat u(-k)}$, and the reverse uses $L^1$ Fourier uniqueness, proved below. On the circle this uniqueness follows from [[thm-fejer-convergence-in-lp]] with $p=1$: zero coefficients give zero Fejer means, whose $L^1$ limit is the function. To pass to $\mathbb T^d$ for $d=2,3$, use [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: for fixed $k'\in\mathbb Z^{d-1}$, $g_{k'}(x_1)=\int_{\mathbb T^{d-1}}u(x_1,x')e_{-k'}(x')dx'$ is in $L^1(\mathbb T)$ and all its coefficients vanish. Hence $g_{k'}=0$ almost everywhere. The countable union of the exceptional sets over $k'$ is null. For every remaining $x_1$, the $L^1$ section in $x'$ has all coefficients zero, so induction in $d$ makes it zero almost everywhere. Fubini then makes $u=0$ almost everywhere on $\mathbb T^d$. Apply this uniqueness to $u-\overline u$ to obtain the reverse real-valuedness implication. For $u\in L^2\subset L^1$ (finite measure) the coefficient map is the one of the imported theorem, which states: $(e_k)_{k\in\mathbb Z^3}$ is an orthonormal basis of the complex Hilbert space $L^2(\mathbb T^3;\mathbb C)$, the finite-subset-net expansion $u=\sum_k\widehat u(k)e_k$ and the Parseval identities hold, and $u\mapsto\widehat u$ is a surjective linear isometry of $L^2(\mathbb T^3;\mathbb C)$ onto $\ell^2(\mathbb Z^3;\mathbb C)$ ([[thm-fourier-basis-and-parseval-on-the-n-torus]]); the last statement applied componentwise gives $\langle u,v\rangle=\sum_k\widehat u(k)\cdot\overline{\widehat v(k)}$ for real $u,v\in L^2$.

**Weights.** For $k\in\mathbb Z^3$ set
$$w_k:=\bigl(1+|2\pi k|_2^2\bigr)^{1/2}=\bigl(1+4\pi^2|k|_2^2\bigr)^{1/2}\ \ge 1,$$
so that $w_k\ge|2\pi k_j|$ for $j=1,2,3$ and $w_{k+l}\le w_k+w_l$ for all $k,l\in\mathbb Z^3$.

**The coefficient space and $H^s$.** For $s\in\mathbb R$ let $\ell^2_s$ be the complex Hilbert space of all $c:\mathbb Z^3\to\mathbb C^3$ with
$$\|c\|_{\ell^2_s}^2:=\sum_{k\in\mathbb Z^3}w_k^{2s}|c(k)|_2^2<+\infty,\qquad \langle c,d\rangle_{\ell^2_s}:=\sum_{k\in\mathbb Z^3}w_k^{2s}\,c(k)\cdot\overline{d(k)} ,$$
and let $\ell^2_{s,\mathbb R}:=\{c\in\ell^2_s: c(-k)=\overline{c(k)}\ \forall k\}$. The set $\ell^2_{s,\mathbb R}$ is closed in $\ell^2_s$ and is a real-linear subspace; on it the Hermitian pairing $\langle\cdot,\cdot\rangle_{\ell^2_s}$ is real valued, because the substitution $k\mapsto-k$ shows that it equals its own conjugate. By the imported theorem the coefficient map restricts to a bijection of the set of real classes of $L^2$ onto $\ell^2_{0,\mathbb R}$. For $s\ge0$ define
$$H^s(\mathbb T^3;\mathbb R^3):=\{u\in L^2:\widehat u\in\ell^2_{s,\mathbb R}\},\qquad \|u\|_{H^s}:=\|\widehat u\|_{\ell^2_s}.$$
For $s<0$ define $H^s$ to be the completion of the real trigonometric polynomials in the same weighted coefficient norm, equivalently the space of formal real coefficient families $\ell^2_{s,\mathbb R}$. For an element of this completion $\widehat u(k)$ means its coefficient, not an integral of an assumed $L^2$ function. The embedding of $L^2$ into these negative-order spaces is its coefficient map. Truncation makes finite families dense, so this completion is all of $\ell^2_{s,\mathbb R}$, not merely the coefficient families of $L^2$ fields. Consequently each $H^s$ is a real Hilbert space isometric to $\ell^2_{s,\mathbb R}$ through $u\mapsto\widehat u$, and $\|u\|_{H^0}=|u|_2$. If $s\ge t$ then $H^s\subseteq H^t$ and $\|u\|_{H^t}\le\|u\|_{H^s}$. The **trigonometric polynomials** are the fields $p=\sum_{k\in F}c_k e_k$ with $F\subseteq\mathbb Z^3$ finite and $c_{-k}=\overline{c_k}$ (equivalently, real coefficient families of finite support); they belong to every $H^s$, and the finitely supported families are dense in each $\ell^2_{s,\mathbb R}$ (truncate a family to $|k|_\infty\le M$ and let $M\to\infty$), so trigonometric polynomials are dense in every $H^s$.

**Scalar spaces.** For $s\in\mathbb R$ define $\ell^2_s(\mathbb Z^3;\mathbb C)$ to consist of families $c:\mathbb Z^3\to\mathbb C$ with $\sum_k w_k^{2s}|c(k)|^2<\infty$, with pairing $\sum_k w_k^{2s}c(k)\overline{d(k)}$; its real subspace is specified by $c(-k)=\overline{c(k)}$. For $s\ge0$, $H^s(\mathbb T^3;\mathbb R)$ consists of real scalar $L^2$ classes with this weighted coefficient norm; for $s<0$ it is the completion of real scalar trigonometric polynomials, identified with the real coefficient subspace. Scalar Fourier coefficients are $\widehat f(k)=\int f e_{-k}\,dx$ when $f\in L^1$, and otherwise denote the completion coordinates. Parseval and truncation give the scalar Hilbert-space and density assertions exactly as above. A vector belongs to $H^s(\mathbb T^3;\mathbb R^3)$ exactly when each of its three scalar components belongs to $H^s(\mathbb T^3;\mathbb R)$, with $\|u\|_{H^s}^2=\sum_{j=1}^3\|u_j\|_{H^s}^2$. Below the value type distinguishes scalar and vector $H^s$; $\Lambda^s$, $\partial_j$ and $\Delta$ have the same multipliers for scalars, $\nabla$ maps scalar to vector spaces, and $\operatorname{div}$ maps vector to scalar spaces.

**The operators $\Lambda^s$, $\partial_j$, $\Delta$, $\nabla$ and $\operatorname{div}$.**
For $s,t\in\mathbb R$ and $u\in H^t$ define $\Lambda^s u\in H^{t-s}$ by the coefficient rule
$$\widehat{\Lambda^s u}(k):=w_k^{s}\,\widehat u(k);$$
then $\Lambda^s$ is a linear isometric isomorphism of $H^t$ onto $H^{t-s}$, $\Lambda^0=\mathrm{id}$, $\Lambda^s\Lambda^t=\Lambda^{s+t}$, and $\Lambda^{-s}$ is the inverse of $\Lambda^s$. For $j=1,2,3$ and $u\in H^{s+1}$ define $\partial_j u\in H^s$ by
$$\widehat{\partial_j u}(k):=2\pi i\,k_j\,\widehat u(k);$$
for $u\in H^{s+2}$ define $\Delta u\in H^s$ by $\widehat{\Delta u}(k):=-4\pi^2|k|_2^2\,\widehat u(k)$; for a scalar field $f$ with coefficients $\widehat f(k)\in\mathbb C$ in the scalar spaces just defined, define $\nabla f\in H^s$ for $f\in H^{s+1}$ by $\widehat{\nabla f}(k):=2\pi i\,k\,\widehat f(k)$; and for $u\in H^{s+1}$ define $\operatorname{div}u:=\sum_{j=1}^{3}\partial_j u_j\in H^s$. These operators satisfy $\|\partial_j u\|_{H^s}\le\|u\|_{H^{s+1}}$, $\|\Delta u\|_{H^s}\le\|u\|_{H^{s+2}}$, and for every integer $m\ge1$, $\Lambda^{2m}=(I-\Delta)^m$, the identity following coefficientwise from $w_k^2=1+4\pi^2|k|_2^2$. On trigonometric polynomials all four operators agree with the classical coordinatewise derivatives and divergence computed from the smooth functions $x\mapsto e^{2\pi ik\cdot x}$, by the classical rules $\partial_j e_k=2\pi i k_j e_k$; this is the convention in which the notation is used below.

**Divergence-free fields and the Leray projection.** For $s\in\mathbb R$ put
$$H^s_\sigma(\mathbb T^3;\mathbb R^3):=\bigl\{\,u\in H^s: k\cdot\widehat u(k)=0\ \text{for every }k\in\mathbb Z^3\,\bigr\};$$
this is a closed real-linear subspace of $H^s$, and $\operatorname{div}u=0$ in $H^s$ for $u\in H^{s+1}_\sigma$. For $k\neq0$ let $\pi_k\in L(\mathbb C^3)$ be the orthogonal projection onto the hyperplane $\{k\}^\perp$,
$$\pi_k v:=v-\frac{k\cdot v}{|k|_2^2}\,k ,$$
and set $\pi_0:=\mathrm{id}_{\mathbb C^3}$. Define the **Leray projection** $P$ by
$$\widehat{Pu}(k):=\pi_k\widehat u(k)\qquad(k\in\mathbb Z^3).$$
Then: $P$ maps $H^s$ linearly into $H^s_\sigma$, and $\|Pu\|_{H^s}\le\|u\|_{H^s}$; $P^2=P$; $P$ is self-adjoint on $H^s$, i.e. $\langle Pu,v\rangle_{H^s}=\langle u,Pv\rangle_{H^s}$ for all $u,v\in H^s$; $P$ commutes with each $\Lambda^t$, with each $\partial_j$, and with $\Delta$ wherever these are defined; and the identity $\operatorname{div}(Pu)=0$ holds in $H^{s-1}$ for $u\in H^s$. Moreover every $u\in H^s$ has the orthogonal decomposition
$$u=Pu+\nabla f,\qquad f\in H^{s+1},\quad \widehat f(0)=0,\qquad \langle Pu,\nabla f\rangle_{H^s}=0.$$
Here zero mean means zero coefficient at $0$ (the usual integral when the field is integrable); orthogonality for all real orders is in the $H^s$ pairing. The scalar element $f$ is determined by $\widehat f(0):=0$ and $\widehat f(k):=\dfrac{k\cdot\widehat u(k)}{2\pi i\,|k|_2^2}$ for $k\neq0$; here $f\in H^{s+1}$ because $w_k^{2(s+1)}|\widehat f(k)|^2\le C\,w_k^{2s}|\widehat u(k)|^2$ for $k\neq0$, and $\widehat{\nabla f}(k)=\bigl(k\cdot\widehat u(k)/|k|_2^2\bigr)k=\widehat u(k)-\pi_k\widehat u(k)$. In particular $P\nabla f=0$ for every $f$ with $\nabla f\in H^s$, so $P$ is the orthogonal projection of $H^s$ onto $H^s_\sigma$. On smooth fields the decomposition $u=Pu+\nabla f$ derived above from the Fourier coefficients is called the Hodge decomposition of the torus; the operator $P$ is the Leray projection of the fluid literature.

**Time-dependent fields.** For an interval $[0,T]$ with $T>0$ and $s\in\mathbb R$, let $C([0,T],H^s)$ denote the set of continuous maps from $[0,T]$ to the metric space $(H^s,\|\cdot\|_{H^s})$, with $\|u\|_{C([0,T],H^s)}:=\sup_{0\le t\le T}\|u(t)\|_{H^s}$. For a map $u:[0,T]\times\mathbb T^3\to\mathbb R^3$ of class $C^\infty$ we mean that every mixed partial derivative $\partial_t^r\partial_x^\alpha u$ exists and is continuous on $[0,T]\times\mathbb T^3$, with one-sided time derivatives at $t=0,T$.

## Remarks

- The whole definition is built on the imported torus Fourier theory, so the countable-choice assumption and the identification of $L^2$ classes with weighted coefficient families are inherited from [[thm-fourier-basis-and-parseval-on-the-n-torus]]; no other choice principle is used.
- The weights are normalized so that differentiation costs one weight: the symbol of $\partial_j$ is $2\pi ik_j$ with $|2\pi k_j|\le w_k$, while $w_k$ itself is the symbol of $\Lambda^1$ and $w_k^2$ is the symbol of $I-\Delta$.
- The definition of $H^s$ is the Fourier-coefficient definition used in the fluid literature on the torus; the equivalent description by weak derivatives is not used anywhere below, so no extension theory is presupposed.
