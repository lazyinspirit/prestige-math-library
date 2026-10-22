---
id: lem-ip-compact-manifold-dirichlet-spectrum-and-regularity
kind: lemma
title: Compact-manifold Dirichlet spectrum and boundary regularity
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
axiom_base: Countable Choice
dependency_level: 0
deps:
  - thm-lax-milgram
  - thm-spectral-theorem-for-compact-self-adjoint-operators
  - thm-global-h-two-dirichlet-regularity
  - lem-ip-riemannian-green-boundary-traces-and-wave-lifting
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John K. Hunter, Notes on Partial Differential Equations
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "§4.10 compact self-adjoint resolvent construction; §4.12, Theorems 4.30–4.31, printed pp. 114–116 (PDF pp. 120–122); the higher boundary induction and finite-atlas transfer are supplied below."
proof_strategy: direct
---

## Statement

Assume Countable Choice. Let $(M,g)$ be a nonempty compact smooth Riemannian manifold of positive dimension with smooth boundary and $q$ a smooth real function. Set $H=L^2(M,dV_g)$, $V=H^1_0(M)$ and $c=1+\|q\|_\infty$. Then
$$b(u,v)=\int_M(\langle\nabla u,\nabla\bar v\rangle+(q+c)u\bar v)\,dV_g$$
is an equivalent Hilbert inner product on $V$. There are an $H$-orthonormal sequence $(e_j)$ complete in $H$ and positive numbers $\mu_j\to\infty$ such that $b(e_j,v)=\mu_j(e_j,v)_H$ for every $v\in V$, and
$$b(u,u)=\sum_j\mu_j|(u,e_j)_H|^2\qquad(u\in V).$$
For $A=-\Delta_g+q$, weak solutions $v\in V$ of $Av=f\in H^k(M)$ satisfy
$$\|v\|_{H^{k+2}(M)}\le C_k(\|f\|_{H^k(M)}+\|v\|_{L^2(M)}),\qquad k=0,1,\ldots.$$
Here integer Sobolev norms use any finite smooth atlas. For every integer $a$, the inclusion $H^k(M)\to C^a(M)$ is bounded for all sufficiently large integers $k$.

## Statement references

[[thm-lax-milgram]]

[[thm-spectral-theorem-for-compact-self-adjoint-operators]]

[[thm-global-h-two-dirichlet-regularity]]

[[lem-ip-riemannian-green-boundary-traces-and-wave-lifting]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable Choice and the compact smooth metric and real smooth potential in the statement; complex spaces use conjugation in the second slot.

[F1] [[thm-lax-milgram]] gives a unique inverse for bounded coercive forms on a Hilbert space under Countable Choice.

[F2] [[thm-spectral-theorem-for-compact-self-adjoint-operators]] supplies the complete nonzero-eigenvalue decomposition of a compact self-adjoint operator on the orthogonal complement of its kernel.

[F3] [[thm-global-h-two-dirichlet-regularity]] gives the $H^2$ estimate for smooth uniformly elliptic divergence-form operators on bounded smooth domains, including flattened boundary localizations.

[F4] [[lem-ip-riemannian-green-boundary-traces-and-wave-lifting]] gives the coordinate divergence formula and smooth boundary collar.


## Proof

1.1 On each of finitely many relatively compact coordinate charts, metric eigenvalues and the volume density have positive lower and finite upper bounds. Thus the intrinsic $H^1$ norm is equivalent to the sum of coordinate $H^1$ norms of a fixed smooth partition of unity. A Cauchy sequence has $L^2$ limits for the localized functions and their first derivatives; testing against a smooth function and passing to the limit identifies the derivative limits as the weak derivatives of the function limit. This proves completeness; $V$, being a closure, is closed. Moreover $1\le q+c\le1+2\|q\|_\infty$, so $b$ and the $H^1$ inner product have equivalent norms. Local mollification of compactly supported functions and a finite partition prove density of $V$ in $H$. [F4, given, algebra]

2.1 The inclusion $V\hookrightarrow H$ is compact without an arbitrary-index choice argument. Indeed, a localized $v\in V$ extends by zero across a flattened boundary: approximate in $H^1$ by localized interior smooth functions, extend those, and pass to the weak-derivative identities. All extensions have bounded support in a fixed coordinate box. On a cube $C$ of side $\delta$, successively average in its $n$ coordinate variables. The one-variable identity $f(s)-f(t)=\int_t^s f'(r)dr$ and Cauchy–Schwarz give $\|f-\operatorname{avg}_C f\|_{L^2(C)}\le n\delta\|Df\|_{L^2(C)}$ by telescoping those averages; density extends this to $H^1$. Replacement by the mean on each cube of a fixed finite grid is therefore a finite-rank approximation to each coordinate inclusion, with error $O(\delta)$ uniformly on the $H^1$ unit ball. Sum the finitely many coordinate reconstructions to approximate $V\hookrightarrow H$ in operator norm by finite-rank maps. A bounded finite-dimensional set has finite nets; choosing $\delta=2^{-k}$ makes the inclusion's image totally bounded, and completeness of $H$ makes its closure compact. Only countably many finite nets are involved. [step 1.1, given, construct, algebra]

2.2 In a coordinate chart $Av=f$ is $$-\partial_i(\rho g^{ij}\partial_jv)+\rho qv=\rho f,\qquad \rho=\sqrt{\det g}.$$ The principal matrix is smooth uniformly positive on each compact chart. Localize by a smooth cutoff; its commutator with $A$ has order one. In a boundary chart flatten to $x_n\ge0$ and localize away from the chart sides. The localization can be regarded as a zero-Dirichlet function on a bounded smooth domain agreeing with the half-space near its support and rounded elsewhere. Applying [F3] and the same interior estimate, then summing the finite cover, gives $\|v\|_{H^2}\le C(\|f\|_2+\|v\|_{H^1})$. Testing the equation with $v$ gives $\|v\|_{H^1}\le C(\|f\|_2+\|v\|_2)$ by absorbing the gradient term, so this is the stated $k=0$ estimate. [F3, F4, step 1.1, algebra]

3.1 For $f\in H$, use [F1] to solve $b(Kf,v)=(f,v)_H$. The map $K:H\to V$ is bounded, and step 2.1 makes $K:H\to H$ compact. Symmetry gives $(Kf,h)_H=b(Kf,Kh)=(f,Kh)_H$, positivity gives $(Kf,f)_H=b(Kf,Kf)>0$ for $f\ne0$, and density of $V$ makes $K$ injective. Its range is dense since a vector orthogonal to the range lies in the kernel by self-adjointness. Apply [F2] to obtain positive eigenvalues $\kappa_j\to0$ and a complete $H$-orthonormal family; put $\mu_j=\kappa_j^{-1}$. Repeated finite multiplicities are included. The vectors $e_j/\sqrt{\mu_j}$ are $b$-orthonormal and complete in $V$: if $b(v,e_j)=0$ for every $j$, then $(v,e_j)_H=0$ for every $j$, hence $v=0$. Orthogonal projection and completeness therefore give the asserted $b$-Parseval identity and convergence of the spectral projections in $V$. [F1, F2, step 1.1, step 2.1, algebra]

3.2 Here is the boundary induction for higher orders. Suppose $f\in H^k$ and $v\in H^{k+1}$ is already known. In a flattened boundary chart apply a tangential derivative $D_{x'}^\alpha$, $|\alpha|=k$, to the localized equation. Its commutator with the second-order operator contains derivatives of $v$ of order at most $k+1$ with bounded smooth coefficients. The localized $D_{x'}^\alpha v$ has zero trace and lies in $H^1$; this follows first for tangential difference quotients, which preserve zero trace, and then by their $H^1$ limit. The $k=0$ local estimate of step 2.2 gives its $H^2$ bound in terms of $\|f\|_{H^k}+\|v\|_{H^{k+1}}$. If a derivative has total order $k+2$ and at least three normal factors, differentiate the equation $k$ times, isolating the term $\rho g^{nn}D_n^2v$. Divide by the positive coefficient $\rho g^{nn}$. Each other highest-order derivative has fewer normal factors because its two principal derivatives include a tangential derivative; all commutators have order at most $k+1$. Induction on the number of normal factors therefore bounds every derivative of order $k+2$. Interior patches allow derivatives in all directions. Difference quotients justify each differentiation before regularity is established; the bounds are uniform in their increments, and testing their weak limits identifies the claimed derivatives. Nested cutoffs and the finite cover give $\|v\|_{H^{k+2}}\le C_k(\|f\|_{H^k}+\|v\|_{H^{k+1}})$, and the previous induction level absorbs the last term into $C_k(\|f\|_{H^k}+\|v\|_2)$. This proves all asserted elliptic estimates. [step 2.2, given, algebra]

4.1 For completeness the needed high-order embedding also has a finite-chart proof with this axiom base. In a half-chart extend across $x_n=0$ by $\sum_{j=1}^{k+1}a_jv(x',-jx_n)$ for $x_n<0$, where the finite Vandermonde system $\sum_j a_j(-j)^\ell=1$ for $0\le\ell\le k$ matches the derivatives at the interface. After a cutoff this is a bounded $H^k$ extension; the assertion follows first on smooth functions and then by the weak derivative identities and approximation. On a bounded support box, iterated one-dimensional integration gives $\|D^\alpha w\|_\infty\le C\|D_1\cdots D_nD^\alpha w\|_2$ for smooth compactly supported $w$. Apply this also to first derivatives of $D^\alpha w$ and to differences of mollifications. For $k\ge n+a+1$ these mollifications and all derivatives through order $a$ are uniformly Cauchy and their limits are continuous, with the asserted norm bound; passing to the coordinate segment integral identifies them as classical derivatives. Sum the finite chart extensions. This proves the embedding and completes the lemma. [step 1.1, step 3.2, construct, algebra] ∎
