---
id: thm-index-lemma
kind: theorem
title: Index lemma
status: published
origin: pipeline
deps:
  - cor-inverse-matrix-by-adjugate
  - cor-the-tangent-space-of-an-n-manifold-has-dimension-n
  - def-conjugate-points-along-a-geodesic-and-their-multiplicity
  - def-countable-choice
  - def-covariant-derivative-along-a-curve
  - def-index-form-of-a-geodesic-segment
  - def-jacobi-field
  - def-levi-civita-connection
  - def-metric-compatible-connection-on-a-riemannian-vector-bundle
  - def-riemann-curvature-four-tensor
  - def-riemannian-metric-and-riemannian-manifold
  - lem-curvature-is-c-infinity-linear-in-all-three-vector-fields
  - lem-integration-by-parts-for-the-index-form
  - lem-wronskian-of-two-jacobi-fields-is-constant
  - prop-local-frame-formula-for-covariant-differentiation-along-a-curve
  - thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data
  - thm-existence-and-uniqueness-of-parallel-sections
  - thm-newton-leibniz-with-interior-derivative
  - thm-monotonicity-of-the-integral
  - thm-nonnegative-continuous-with-zero-integral-vanishes
  - thm-rank-nullity
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Lemma 26.1.1 (Index Lemma) and its proof, §26.1, printed pp.191-194 (PDF labels P198-P201): normal Jacobi fields with one vanishing endpoint; the Jacobi-basis expansion and the identity of its Claims 2 and 3. Proposition 23.1.1 and proof, §23.1, printed pp.165-166 (PDF labels P172-P173): the same machinery below the first conjugate point."
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Chapter 10: the index form (10.15), printed p.186 / PDF label P202; Corollary 10.13 and Proposition 10.14 (integration by parts), printed pp.186-188 / PDF labels P202-P204."
---

## Statement

Assume exactly the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$,
propagated through the declared index-form, Jacobi-field, Wronskian and
integration-by-parts suppliers; the finite-dimensional arguments below spend no
further choice. Let $(M,g)$ be a finite-dimensional Riemannian manifold of
dimension $n$, let $a<b$, and let $\gamma:[a,b]\to M$ be an affinely
parametrized geodesic of the Levi-Civita connection, with $T:=\dot\gamma$.
Assume that for no $t\in(a,b]$ are $\gamma(a)$ and $\gamma(t)$ conjugate along
$\gamma|_{[a,t]}$. Let $u\in T_{\gamma(a)}M$ and $w\in T_{\gamma(b)}M$. Then:

1. there is exactly one Jacobi field $J$ along $\gamma$ with $J(a)=u$ and
   $J(b)=w$;
2. for every continuous field $V$ along $\gamma$ that is $C^1$ on each piece of
   some finite subdivision of $[a,b]$ and satisfies $V(a)=u$, $V(b)=w$, the
   index form satisfies
   $$I_\gamma(J,J)\le I_\gamma(V,V),$$
   with equality if and only if $V=J$.

Included endpoints use one-sided derivatives. Constant geodesics, zero-dimensional
manifolds and the case $u=w=0$ are included; no completeness, compactness or full
Axiom of Choice is assumed, and $\gamma$ need not have unit speed.

## Facts & Assumptions

**Given:** The finite-dimensional Riemannian manifold $(M,g)$, the geodesic
segment $\gamma:[a,b]\to M$ with no conjugate instant $\gamma(t)$, $t\in(a,b]$,
and the endpoint vectors $u\in T_{\gamma(a)}M$, $w\in T_{\gamma(b)}M$.

[A1] The countable-choice premise is $\mathrm{AC}_\omega$
([[def-countable-choice]]). It is inherited exactly through the declared
index-form, Jacobi-field, Wronskian and integration-by-parts suppliers, whose
statements carry it ([[lem-integration-by-parts-for-the-index-form]],
[[lem-wronskian-of-two-jacobi-fields-is-constant]]). No selection from a family
occurs below.

[F1] For every $v,z\in T_{\gamma(a)}M$ there is exactly one smooth Jacobi field
$J$ along $\gamma$ with $J(a)=v$ and $D_tJ(a)=z$, the derivative at the included
endpoint $a$ being one-sided; the result assumes no completeness and no choice
([[thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data]]).

[F2] The Jacobi equation is $\mathbb R$-linear in the field: covariant
differentiation along $\gamma$ is real-linear and obeys
$D_t(fV)=f'V+fD_tV$ ([[def-covariant-derivative-along-a-curve]]), the curvature
term is additive and homogeneous in each of its three vector-field slots
([[lem-curvature-is-c-infinity-linear-in-all-three-vector-fields]]), and a
smooth field is Jacobi exactly when
$D_t^2J+R(J,\dot\gamma)\dot\gamma=0$ ([[def-jacobi-field]]). Hence sums and
scalar multiples of smooth Jacobi fields along $\gamma$ are again smooth Jacobi
fields.

[F3] The points $\gamma(a)$ and $\gamma(t)$ are conjugate along $\gamma|_{[a,t]}$
($a<t$) exactly when the space of Jacobi fields along that segment vanishing at
both endpoints contains a nonzero field; a nonzero Jacobi field with
$J(a)=0=D_tJ(a)$ would be the zero field by [F1], so a Jacobi field with
$J(a)=0$ and $D_tJ(a)\neq0$ is nonzero
([[def-conjugate-points-along-a-geodesic-and-their-multiplicity]]).

[F4] The index form is defined on the real vector space
$\mathcal X^1_{\mathrm{pw}}(\gamma)$ of continuous fields that are $C^1$ on the
pieces of a finite subdivision, its fixed-endpoint subspace is
$\mathcal X_0(\gamma)=\{V:V(a)=V(b)=0\}$, and it is a symmetric bilinear form
given by the piecewise integral of $g(D_tV,D_tW)-g(R(V,T)T,W)$, independently of
the common subdivision ([[def-index-form-of-a-geodesic-segment]]).

[F5] Integration by parts: for a smooth Jacobi field $J$ and a continuous
piecewise $C^1$ field $W$ on a fixed finite subdivision,
$$I_\gamma(J,W)=[g(D_tJ,W)]_a^b-\sum_{j}g(\Delta_jD_tJ,W(t_j))-\int g(D_t^2J+R(J,T)T,W),$$
the jumps $\Delta_jD_tJ$ being zero and the curvature term vanishing for a
Jacobi field ([[lem-integration-by-parts-for-the-index-form]]).

[F6] Wronskian constancy: for smooth Jacobi fields $J,K$ along $\gamma$ the
function $g(D_tJ,K)-g(J,D_tK)$ is constant, so its value at $a$ equals its value
at every $t\in[a,b]$ ([[lem-wronskian-of-two-jacobi-fields-is-constant]]).

[F7] The Levi-Civita connection is metric compatible, so for $C^1$ fields $U,V$
along $\gamma$ one has
$$\frac{d}{dt}g(U,V)=g(D_tU,V)+g(U,D_tV);$$
in particular $g(E_i,E_j)$ is constant along $\gamma$ for a parallel frame
([[def-levi-civita-connection]],
[[def-metric-compatible-connection-on-a-riemannian-vector-bundle]],
[[def-covariant-derivative-along-a-curve]]).

[F8] In a local frame $e$ with connection matrix $B(t)$, a field with coefficient
column $v(t)$ satisfies $D_t(ev)=e(v'+Bv)$; for a parallel frame $B=0$ and
$D_t(ev)=e(v')$ ([[prop-local-frame-formula-for-covariant-differentiation-along-a-curve]]).

[F9] Along a smooth curve every initial frame extends to exactly one parallel
frame over the whole interval, with one-sided data at included endpoints and no
choice principle ([[thm-existence-and-uniqueness-of-parallel-sections]]).

[F10] If $\det A\neq0$ then $A^{-1}=\det(A)^{-1}\operatorname{adj}(A)$
([[cor-inverse-matrix-by-adjugate]]); thus a matrix family whose entries are
$C^1$ in $t$ and whose determinant never vanishes has a $C^1$ inverse, because
the adjugate entries are polynomials in the entries of $A$.

[F11] If $G$ is continuous on $[c,d]$, differentiable on $(c,d)$ and an
integrable $f$ agrees there with $G'$, then $\int_c^df=G(d)-G(c)$
([[thm-newton-leibniz-with-interior-derivative]]).

[F12] The integral of a nonnegative integrable function on $[c,d]$, $c<d$, is
nonnegative ([[thm-monotonicity-of-the-integral]]).

[F13] A continuous nonnegative function on $[c,d]$ whose integral vanishes is
identically zero ([[thm-nonnegative-continuous-with-zero-integral-vanishes]]).

[F14] For a linear map of finite-dimensional vector spaces,
$\dim V=\operatorname{nullity}+\operatorname{rank}$
([[thm-rank-nullity]]), the tangent spaces $T_pM$ of an $n$-dimensional manifold
have dimension $n$
([[cor-the-tangent-space-of-an-n-manifold-has-dimension-n]]), and so an
injective real-linear map between two spaces of dimension $n$ is bijective and
carries every basis to a basis.

[F15] $g$ is a symmetric positive-definite bilinear form on each tangent space
([[def-riemannian-metric-and-riemannian-manifold]]), the curvature four-tensor
is $\operatorname{Rm}(X,Y,Z,W)=\langle R(X,Y)Z,W\rangle$ with the third slot the
field acted on and the fourth pairing the output
([[def-riemann-curvature-four-tensor]]), and all fields here have
$\langle X,Y\rangle:=g(X,Y)$.



## Proof

**Proof technique:** the Jacobi matrix of the fixed initial point is invertible exactly because there is no conjugate instant; the difference $V-J$ is expanded in the Jacobi basis and the integrand identity $\langle D_tW,D_tW\rangle-\operatorname{Rm}(W,T,T,W)=\langle Af',Af'\rangle+\varphi'$ turns the index form at both vanishing endpoints into $\int\langle Af',Af'\rangle$; the equality case then forces the coefficients of $W$ to be constant and hence $W=0$.

1.1 Set-up and the initial-value family. [F1, F2, F3, given]
Put $T:=\dot\gamma$; by hypothesis no $t\in(a,b]$ makes $\gamma(a)$ and $\gamma(t)$ conjugate along $\gamma|_{[a,t]}$. For $v\in T_{\gamma(a)}M$ let $J_v$ be the unique smooth Jacobi field along $\gamma$ with $J_v(a)=0$ and $D_tJ_v(a)=v$ (one-sided at $a$), which exists and is unique by [F1]. For $v,z\in T_{\gamma(a)}M$ and $\lambda,\mu\in\mathbb R$ the field $\lambda J_v+\mu J_z$ is a smooth Jacobi field by [F2], and it has the initial data of $J_{\lambda v+\mu z}$; uniqueness in [F1] therefore gives
$$J_{\lambda v+\mu z}=\lambda J_v+\mu J_z.$$
In particular every map $\Phi_t:T_{\gamma(a)}M\to T_{\gamma(t)}M$, $\Phi_t(v):=J_v(t)$, is real-linear, and $\Phi_a=0$. [F1, F2]

2.1 The maps $\Phi_t$ are isomorphisms for $t\in(a,b]$. [F3, F14, step 1.1]
Let $t\in(a,b]$ and $v\in\ker\Phi_t$, so that $J_v(t)=0$. If $v\neq0$, then $J_v$ is not the zero field, because its initial derivative is $v\neq0$; it is a Jacobi field along the nondegenerate segment $\gamma|_{[a,t]}$ vanishing at both $\gamma(a)$ and $\gamma(t)$, so by [F3] those points would be conjugate along $\gamma|_{[a,t]}$, contradicting the hypothesis. Hence $\ker\Phi_t=\{0\}$. The spaces $T_{\gamma(a)}M$ and $T_{\gamma(t)}M$ both have dimension $n$ (the dimension of $M$), so rank-nullity gives $\operatorname{rank}\Phi_t=n-0=n$ and $\Phi_t$ is surjective, hence bijective [F14]. [F3, F14, step 1.1]

3.1 Existence and uniqueness of the Jacobi field with prescribed endpoint values. [F1, F2, step 2.1]
By [F1] choose a smooth Jacobi field $K$ along $\gamma$ with $K(a)=u$ (for instance the field with $D_tK(a)=0$). By step 2.1 there is a unique $d\in T_{\gamma(a)}M$ with $\Phi_b(d)=w-K(b)$. Then $J:=K+J_d$ is a smooth Jacobi field by [F2] with
$$J(a)=u+0=u,\qquad J(b)=K(b)+\Phi_b(d)=w.$$
If $J'$ is a second smooth Jacobi field with these endpoint values, then $J-J'$ is a Jacobi field vanishing at $a$, so by the uniqueness clause of [F1] it equals $J_c$ with $c:=D_t(J-J')(a)$; from $0=(J-J')(b)=\Phi_b(c)$ and step 2.1 we get $c=0$ and $J'=J$. [F1, F2, step 2.1]

3.2 Decomposition of an admissible field and cancellation against $J$. [F4, F5, step 2.1]
Let $V\in\mathcal X^1_{\mathrm{pw}}(\gamma)$ with $V(a)=u$, $V(b)=w$ and put $W:=V-J$. Then $W$ is continuous and piecewise $C^1$ with $W(a)=W(b)=0$, so $W\in\mathcal X_0(\gamma)$ [F4]. Bilinearity and symmetry of the index form [F4] give
$$I_\gamma(V,V)=I_\gamma(J,J)+2I_\gamma(J,W)+I_\gamma(W,W).$$
The integration-by-parts identity [F5] applies to the smooth Jacobi field $J$ and the continuous piecewise $C^1$ field $W$: the jump terms vanish because $J$ is smooth, the interior term vanishes by the Jacobi equation, and both boundary terms vanish because $W(a)=W(b)=0$. Hence $I_\gamma(J,W)=0$ and
$$I_\gamma(V,V)=I_\gamma(J,J)+I_\gamma(W,W).$$
It therefore suffices to prove $I_\gamma(W,W)\ge0$ for every $W\in\mathcal X_0(\gamma)$, with equality only for $W=0$. [F4, F5, step 2.1]

3.3 The Jacobi basis and the coefficient field. [F1, F7, F8, F9, F10, F14, step 2.1]
Choose a parallel frame $E_1,\dots,E_n$ along $\gamma$ [F9], started from a basis of $T_{\gamma(a)}M$; by [F7] the frame is orthonormal if its initial basis is. Put $J_i:=J_{E_i(a)}$, so that $J_i$ is a smooth Jacobi field with $J_i(a)=0$ and $D_tJ_i(a)=E_i(a)$ [F1]. By steps 1.1 and 2.1, for every $t\in(a,b]$ the map $\Phi_t$ is real-linear and bijective, hence carries the basis $E_1(a),\dots,E_n(a)$ of $T_{\gamma(a)}M$ to a basis $J_1(t),\dots,J_n(t)$ of $T_{\gamma(t)}M$ [F14] in which every field on $(a,b]$ has uniquely determined coefficients. Let $W\in\mathcal X_0(\gamma)$ and write
$$W(t)=\sum_{i=1}^nf_i(t)J_i(t),\qquad t\in(a,b].$$
In the parallel frame the fields $J_i$ have smooth coordinate columns $a_i(t)$ and $W$ has the continuous piecewise $C^1$ coordinate column $w(t)$ with $w(a)=w(b)=0$: for an orthonormal parallel frame the coefficients are the functions $t\mapsto g(W(t),E_i(t))$ and $t\mapsto g(J_i(t),E_k(t))$, which have the claimed regularity by the product rule [F7]; for a general parallel frame the dual frame is smooth by [F10]. The matrix $A(t)=(a_1(t)|\cdots|a_n(t))$ is invertible for $t\in(a,b]$ by step 2.1, and
$$f(t)=A(t)^{-1}w(t)$$
is continuous on $(a,b]$ and $C^1$ on each piece by Cramer's rule [F10]. In the parallel frame $D_t$ acts on fields with coefficients by differentiation of the coefficients [F8], so $D_tW$ has coefficients $w'=A'f+Af'$ and the field $Af'$ (with coefficient column $A(t)f'(t)$) is well defined on $(a,b]$. [F1, F7, F8, F9, F10, F14, step 2.1]

4.1 Pointwise identity for the integrand. [F2, F6, F15, step 3.3]
Write $P:=Af'$ and $Q:=A'f$ for the fields whose coefficient columns are $A f'$ and $A' f$, so that $D_tW=P+Q$ by step 3.3 and $\operatorname{Rm}(W,T,T,W)$ refers to $W=Af$. Expanding,
$$\langle D_tW,D_tW\rangle-\operatorname{Rm}(W,T,T,W)=\langle P,P\rangle+2\langle P,Q\rangle+\langle Q,Q\rangle-\operatorname{Rm}(Af,T,T,Af).$$
The columns of $A$ are Jacobi fields, so the Wronskian identity [F6] applied to the Jacobi fields with coefficient columns $g,h\in\mathbb R^n$ gives
$$\langle A'(t)g,A(t)h\rangle=\langle A(t)g,A'(t)h\rangle\qquad\text{for all }t\in[a,b],$$
both sides being the Wronskian of two Jacobi fields evaluated at $t$, with value $0$ at $t=a$ because $A(a)=0$. Taking $g=f'$, $h=f$ turns $\langle P,Q\rangle=\langle A f',A'f\rangle$ into $\langle A'f',Af\rangle$, the symmetric metric [F15] identifying the two mixed terms; the Jacobi equation for the columns, together with $\operatorname{Rm}(Af,T,T,Af)=\langle R(Af,T)T,Af\rangle$ [F15], then gives
$$2\langle P,Q\rangle+\langle Q,Q\rangle-\operatorname{Rm}(W,T,T,W)=\frac{d}{dt}\langle A'f,Af\rangle.$$
Indeed the derivative of $\varphi(t):=\langle A'(t)f(t),A(t)f(t)\rangle$ is $\langle A''f+A'f',Af\rangle+\langle A'f,A'f+Af'\rangle$, and $A''=-RA$ for the matrix of the curvature endomorphism, so the four terms match the left side term by term using the symmetry just proved. Therefore
$$\langle D_tW,D_tW\rangle-\operatorname{Rm}(W,T,T,W)=\langle Af',Af'\rangle+\varphi'(t)$$
on each piece of the subdivision. [F2, F6, F15, step 3.3]

5.1 Integration against a vanishing field. [F10, F11, F12, step 4.1]
Integrating step 4.1 over each closed piece of the subdivision and summing,
$$I_\gamma(W,W)=\int_a^b\langle A f',Af'\rangle\,dt+\varphi(b)-\varphi(a^+),$$
where each piece integral exists by [F11] (applied to the continuous function $\varphi$ and its integrable derivative) and the sum over the pieces telescopes. At $t=b$ we have $W(b)=0$, so $\varphi(b)=\langle A'(b)f(b),A(b)f(b)\rangle=\langle A'(b)f(b),W(b)\rangle=0$. As $t\downarrow a$, the matrix $A(t)$ satisfies $A(t)=(t-a)(I+o(1))$: its columns are $C^1$ with $A(a)=0$ and $A'(a)=I$ in the frame, and Newton–Leibniz [F11] applied to the entries gives $A(t)=\int_a^tA'(s)\,ds=(t-a)(I+o(1))$. Since $w(a)=0$ and $w$ is $C^1$ on the first piece, likewise $w(t)=(t-a)(w'(a)+o(1))$, and Cramer's rule [F10] gives $(I+o(1))^{-1}=I+o(1)$; hence
$$f(t)=(I+o(1))^{-1}\bigl(w'(a)+o(1)\bigr)=O(1)$$
is bounded near $a$, while $A'$ is bounded on $[a,b]$ and $W(t)\to W(a)=0$. Therefore $\varphi(t)=\langle A'(t)f(t),W(t)\rangle\to0$ as $t\downarrow a$, and
$$I_\gamma(W,W)=\int_a^b\langle A(t)f'(t),A(t)f'(t)\rangle\,dt\ \ge 0$$
by [F12], the integrand being continuous on each piece and nonnegative. [F10, F11, F12, step 4.1]

6.1 Equality case and conclusion. [F13, step 3.2, step 5.1]
Suppose $I_\gamma(W,W)=0$ for some $W\in\mathcal X_0(\gamma)$. By step 5.1 the integrand $\langle Af',Af'\rangle$ is continuous and nonnegative on each closed piece and the sum of the piece integrals is $0$; since every piece integral is nonnegative [F12], each piece integral vanishes, and [F13] makes $\langle A(t)f'(t),A(t)f'(t)\rangle=0$ for every $t$ of that piece. The metric is positive definite and $A(t)$ is invertible for $t\in(a,b]$ (step 2.1), so $f'(t)=0$ there; hence $f$ is constant on $(a,b)$ and, being continuous on $(a,b]$, constant on $(a,b]$ with value $c\in\mathbb R^n$. Then $W(t)=A(t)c$ on $(a,b]$ and, evaluating at $b$, $0=W(b)=A(b)c$ with $A(b)$ invertible, so $c=0$ and $W=0$. Therefore $I_\gamma(W,W)>0$ for every nonzero $W\in\mathcal X_0(\gamma)$, and step 3.2 gives
$$I_\gamma(V,V)=I_\gamma(J,J)+I_\gamma(W,W)\ge I_\gamma(J,J),$$
with equality exactly when $W=0$, that is exactly when $V=J$. This proves both assertions. [F13, step 3.2, step 5.1]

7.1 Boundary and choice audit. [A1, F1, F2, F3, F4, F5, step 2.1, step 6.1]
Every hypothesis is used at the point where it is needed: $a<b$ and the exclusion of conjugate instants on $(a,b]$ are exactly what make each $\Phi_t$, $t\in(a,b]$, an isomorphism in step 2.1, and the exclusion at $t=b$ is what makes the endpoint-value problem in step 3.1 uniquely solvable and the constant $c$ in step 6.1 vanish. If $\gamma$ is constant, then $T=0$ and the conjugacy hypothesis is automatic: [F3] states that $\mathcal K_\gamma(a,b)=\{0\}$ for a constant geodesic, and [F2] makes the curvature term of the Jacobi equation and of the index-form integrand vanish (the Jacobi-field convention gives $D_t^2J=0$ when $\dot\gamma=0$, and $R$ is $C^\infty$-linear in its second slot, so $R(\cdot,0)=0$), so all steps above apply verbatim and the constant case is included; the same steps never divide by $T$ or by the speed. In dimension zero $T_{\gamma(a)}M=\{0\}$, so $u=w=0$, $V=0$, $J=0$ and both sides of the inequality are $0$. Dimension one and non-unit speed are unconstrained by any step. Included endpoints use the one-sided conventions of [F1], [F4] and [F5]. Exactly the declared $\mathrm{AC}_\omega$ is inherited through the index-form, Jacobi-field, Wronskian and integration-by-parts suppliers [A1]; the construction of the fields $J_v$ uses the uniqueness statement of [F1] rather than any selection, the parallel frame is fixed once by [F9], and the finite-dimensional linear algebra of steps 2.1, 3.3 and 6.1 makes no choice. No converse is claimed: the lemma asserts an inequality and its equality case, not that failure at some $t\in(a,b]$ produces a nonzero $W$ with $I_\gamma(W,W)=0$. $\square$



## Source locator

Datar, *Lectures on Riemannian Geometry*, Lemma 26.1.1 (Index Lemma) and its
proof, §26.1, printed pp.191-194, is the model: the Jacobi fields vanishing at
the initial point are shown to form a basis at every later time, the coordinate
functions of a comparison field are expanded in that basis, and the identities
of Claims 2 and 3 give $I_\gamma(X,X)=\int|A|^2+I_\gamma(J,J)$ with equality only
for $X=J$; the present item removes the normality assumption, prescribes both
endpoint values and treats the degenerate cases explicitly. Proposition 23.1.1
and its proof, §23.1, printed pp.165-166, uses the same basis expansion below
the first conjugate point. Lee, *Riemannian Manifolds*, Chapter 10, printed
pp.186-188, supplies the index form (10.15), the integration-by-parts identity
(Proposition 10.14) and the necessary condition $I\ge0$ for a minimizing
geodesic (Corollary 10.13). The proof above is carried out in full rather than
quoted.
