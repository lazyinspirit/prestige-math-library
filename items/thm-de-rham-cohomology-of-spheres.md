---
id: "thm-de-rham-cohomology-of-spheres"
kind: "theorem"
title: "De rham cohomology of spheres"
deps: ["thm-mayer-vietoris-sequence-in-de-rham-cohomology", "thm-poincare-lemma-for-differential-forms-on-star-shaped-domains", "thm-de-rham-cohomology-is-smooth-homotopy-invariant", "thm-zero-th-de-rham-cohomology-is-locally-constant-functions", "cor-de-rham-cohomology-of-a-finite-disjoint-union-is-the-direct-sum"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Nigel Hitchin, Differentiable Manifolds (2014)"
      url: "https://people.maths.ox.ac.uk/~joyce/Nairobi2019/Hitchin-DifferentiableManifolds.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume countable choice. For $n\ge1$, $H^k_{\mathrm{dR}}(S^n)$ is $\mathbb R$ in degrees $0,n$ and zero otherwise. For $S^0$ it is $\mathbb R^2$ in degree zero and zero otherwise.

## Facts & Assumptions

**Given:** The unit sphere $S^n\subset\mathbb R^{n+1}$ and countable choice.

[F1] [[thm-mayer-vietoris-sequence-in-de-rham-cohomology]]: Under countable choice the de Rham Mayer–Vietoris sequence is exact: $\cdots\to H^k(M)\xrightarrow{r^*}H^k(U)\oplus H^k(V)\xrightarrow{s^*}H^k(U\cap V)\xrightarrow\delta H^{k+1}(M)\to\cdots$, beginning with $0\to H^0(M)$.

[F2] [[thm-poincare-lemma-for-differential-forms-on-star-shaped-domains]]: Every closed smooth $k$-form on a star-shaped open domain is exact for $k\ge1$. For centre $0$, one primitive is $\eta_x(v_1,\ldots,v_{k-1})=\int_0^1t^{k-1}\omega_{tx}(x,v_1,\ldots,v_{k-1})\,dt$.

[F3] [[thm-de-rham-cohomology-is-smooth-homotopy-invariant]]: A smooth homotopy equivalence induces an isomorphism of de Rham graded real algebras.

[F4] [[thm-zero-th-de-rham-cohomology-is-locally-constant-functions]]: $H^0_{\mathrm{dR}}(M)$ is the algebra of locally constant real functions. For nonempty connected $M$ it is canonically $\mathbb R$.

[F5] [[cor-de-rham-cohomology-of-a-finite-disjoint-union-is-the-direct-sum]]: For a finite disjoint union $M=\coprod_{j=1}^mM_j$, restrictions give $H^k_{\mathrm{dR}}(M)\cong\bigoplus_{j=1}^mH^k_{\mathrm{dR}}(M_j)$.

## Proof

**Proof technique:** direct.

1.1 For $n\ge1$, write points as $(x\prime,z)$ and remove the poles to form $U,V$. Stereographic coordinates $x\prime/(1-z)$ and $x\prime/(1+z)$ identify these opens with $\mathbb R^n$; the first inverse is $y\mapsto(2y/(1+|y|^2),(|y|^2-1)/(1+|y|^2))$, and changing the sign of the last coordinate gives the second. Substitution verifies both inverses. Positive-degree cohomology of each open vanishes by Poincaré, and its degree-zero group is $\mathbb R$. [F2, F4, given]

2.1 The overlap is diffeomorphic to $S^{n-1}\times\mathbb R$ by $(x\prime,z)\mapsto(x\prime/|x\prime|,z/|x\prime|)$, with inverse $(u,t)\mapsto(u/\sqrt{1+t^2},t/\sqrt{1+t^2})$. The homotopy $(u,t,s)\mapsto(u,(1-s)t)$ retracts it smoothly onto $S^{n-1}$. For $n=1$ the overlap is two contractible components, so its $H^0$ is $\mathbb R^2$ and its positive groups vanish. The map on $H^0$ is $(a,b)\mapsto(b-a,b-a)$; its kernel is the diagonal and its cokernel is $\mathbb R$, via $(c,d)\mapsto d-c$. Exactness therefore gives $H^0(S^1)=H^1(S^1)=\mathbb R$. In degrees $k\ge2$ the form spaces on this one-manifold vanish, so its cohomology also vanishes. [F1, F3, F5, step 1.1]

3.1 For $n\ge2$ the overlap is connected: $S^{n-1}$ is path connected, since non-antipodal points join by normalized line segments and antipodal points join through one perpendicular unit vector. Thus the degree-zero difference map is the surjection $(a,b)\mapsto b-a$ onto $\mathbb R$. Exactness gives $H^0(S^n)=\mathbb R$ and $H^1(S^n)=0$. For $k\ge2$ both adjacent positive-degree groups of $U,V$ vanish, so exactness gives $H^k(S^n)\cong H^{k-1}(S^{n-1})$. Repeatedly applying this identity reaches the circle calculation or degree one, proving all asserted positive degrees. Negative degrees vanish by the complex convention. Finally $S^0$ is two points, each with only $\Omega^0=\mathbb R$, and finite disjoint union gives its stated groups. [F1, F4, F5, step 1.1, step 2.1] ∎

## Source locator

Lee, Theorem 17.21, pp.450–451. The local proof replaces Lee’s fundamental-group input by the explicit degree-zero Mayer–Vietoris maps and avoids any later punctured-space computation.
