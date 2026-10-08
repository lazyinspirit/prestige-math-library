---
id: lem-hh-tensor-coherence-on-elementary-tensors
kind: lemma
title: "Associator naturality, pentagon, unit triangle and symmetry hexagons on elementary tensors"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 1
deps: [def-hh-scalar-and-tensor-conventions, thm-symmetry-and-associativity-over-a-commutative-ring, thm-unit-isomorphisms-for-module-tensor-products, prop-functoriality-of-module-tensor-products, def-tensor-product-of-modules-by-generators-and-relations]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Keith Conrad, Tensor products (University of Connecticut expository notes, 60 pp.)"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/tensorprod.pdf"
      locator: "Theorems 5.1–5.3, printed pp. 23–26: symmetry, associativity and distributivity isomorphisms and their elementary-tensor computations"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $k$ be a field and let $L,M,N,X$ be $k$-vector spaces. Write $\alpha_{A,B,C}:(A\otimes B)\otimes C\to A\otimes(B\otimes C)$ for the associators of [[thm-symmetry-and-associativity-over-a-commutative-ring]], $\sigma_{A,B}$ for its symmetries, and $\lambda,\rho$ for the unit isomorphisms of [[thm-unit-isomorphisms-for-module-tensor-products]].

1. **Naturality.** $\alpha$ and $\sigma$ are natural in all variables: for linear maps the usual squares commute; the unit isomorphisms are natural as well.
2. **Pentagon.** $(\mathrm{id}_L\otimes\alpha_{M,N,X})\circ\alpha_{L,M\otimes N,X}\circ(\alpha_{L,M,N}\otimes\mathrm{id}_X)=\alpha_{L,M,N\otimes X}\circ\alpha_{L\otimes M,N,X}$ as maps $((L\otimes M)\otimes N)\otimes X\to L\otimes(M\otimes(N\otimes X))$.
3. **Unit triangle.** $(\mathrm{id}_M\otimes\lambda_N)\circ\alpha_{M,k,N}=\rho_M\otimes\mathrm{id}_N$ as maps $(M\otimes k)\otimes N\to M\otimes N$.
4. **First symmetry hexagon.** $\alpha_{L,N,M}\circ(\sigma_{N,L}\otimes\mathrm{id}_M)\circ\alpha^{-1}_{N,L,M}\circ\sigma_{L\otimes M,N}=(\mathrm{id}_L\otimes\sigma_{M,N})\circ\alpha_{L,M,N}$ as maps $((L\otimes M)\otimes N)\to L\otimes(N\otimes M)$.
5. **Second symmetry hexagon.** $\alpha^{-1}_{N,L,M}\circ\sigma_{L\otimes M,N}\circ\alpha^{-1}_{L,M,N}=(\sigma_{L,N}\otimes\mathrm{id}_M)\circ\alpha^{-1}_{L,N,M}\circ(\mathrm{id}_L\otimes\sigma_{M,N})$ as maps $L\otimes(M\otimes N)\to(N\otimes L)\otimes M$.

All five identities are equalities of $k$-linear maps between iterated tensor products.

## Facts & Assumptions

**Given:** A field $k$, vector spaces $L,M,N,X$ and linear maps between vector spaces as named in the steps.

[F1] The conventions: $V\otimes W$ is the tensor product over $k$ with unit and universal property, every element is a finite sum of elementary tensors, and tensor powers are left-associated with $k$ as the empty tensor ([[def-hh-scalar-and-tensor-conventions]]).

[F2] The associator and symmetry are isomorphisms acting on elementary tensors by $\alpha_{L,M,N}((l\otimes m)\otimes n)=l\otimes(m\otimes n)$ and $\sigma_{M,N}(m\otimes n)=n\otimes m$, with $\sigma_{N,M}\sigma_{M,N}=\mathrm{id}$ ([[thm-symmetry-and-associativity-over-a-commutative-ring]]).

[F3] The unit isomorphisms act by $\lambda_N(r\otimes n)=rn$ and $\rho_M(m\otimes r)=mr$ ([[thm-unit-isomorphisms-for-module-tensor-products]]).

[F4] Functoriality: $(f\otimes g)(m\otimes n)=f(m)\otimes g(n)$ defines a linear map, $\mathrm{id}_M\otimes\mathrm{id}_N=\mathrm{id}_{M\otimes N}$, and $(f'\circ f)\otimes(g'\circ g)=(f'\otimes g')\circ(f\otimes g)$ ([[prop-functoriality-of-module-tensor-products]]).

[F5] Every element of a tensor product is a finite sum of elementary tensors, and the defining relations give $(cm)\otimes n=m\otimes(cn)=c(m\otimes n)$ for $c\in k$ ([[def-tensor-product-of-modules-by-generators-and-relations]], [[def-hh-scalar-and-tensor-conventions]]).

## Proof

**Proof technique:** direct.

1.1 Naturality of $\alpha$ and $\sigma$: for linear maps $f:L\to L'$, $g:M\to M'$, $h:N\to N'$ and an elementary tensor $(l\otimes m)\otimes n$ one has $\alpha_{L',M',N'}(((f\otimes g)\otimes h)((l\otimes m)\otimes n))=\alpha_{L',M',N'}((f(l)\otimes g(m))\otimes h(n))=f(l)\otimes(g(m)\otimes h(n))$ and $(f\otimes(g\otimes h))(\alpha_{L,M,N}((l\otimes m)\otimes n))=(f\otimes(g\otimes h))(l\otimes(m\otimes n))=f(l)\otimes(g(m)\otimes h(n))$, by [F2] and [F4]; likewise $\sigma_{M',N'}((g\otimes h)(m\otimes n))=h(n)\otimes g(m)=((h\otimes g)\circ\sigma_{M,N})(m\otimes n)$. Both sides of each square are $k$-linear and the elementary tensors span by [F5], so the squares commute on their whole domains. [given, F2, F4, F5, algebra]

1.2 Naturality of the unit isomorphisms: for linear $f:N\to N'$ and $r\otimes n\in k\otimes N$ one has $\lambda_{N'}((\mathrm{id}_k\otimes f)(r\otimes n))=\lambda_{N'}(r\otimes f(n))=rf(n)=f(rn)=f(\lambda_N(r\otimes n))$ by [F3] and [F4], and for linear $g:M\to M'$ likewise $\rho_{M'}((g\otimes\mathrm{id}_k)(m\otimes r))=g(m)r=g(mr)=g(\rho_M(m\otimes r))$; the elementary tensors span, so both naturality squares commute. [given, F3, F4, F5, algebra]

1.3 Pentagon: on an elementary tensor $((l\otimes m)\otimes n)\otimes x$ of $((L\otimes M)\otimes N)\otimes X$ the left composite sends it by [F2] to $(\alpha_{L,M,N}\otimes\mathrm{id}_X)(((l\otimes m)\otimes n)\otimes x)=(l\otimes(m\otimes n))\otimes x$, then to $l\otimes((m\otimes n)\otimes x)$, then to $l\otimes(m\otimes(n\otimes x))$; the right composite sends it to $(l\otimes m)\otimes(n\otimes x)$ and then to $l\otimes(m\otimes(n\otimes x))$. Both sides are $k$-linear maps whose domain is spanned by such elementary tensors [F5], so the two composites agree everywhere. [given, F2, F5, algebra]

1.4 Unit triangle: for an elementary tensor $(m\otimes c)\otimes n$ of $(M\otimes k)\otimes N$ the left side gives $(\mathrm{id}_M\otimes\lambda_N)(m\otimes(c\otimes n))=m\otimes(cn)$ by [F2] and [F3], while the right side gives $(\rho_M\otimes\mathrm{id}_N)((m\otimes c)\otimes n)=(mc)\otimes n$; these are equal because $(mc)\otimes n=m\otimes(cn)$ by the balancing relations of [F5]. Both sides are linear on the span of the elementary tensors, so the identity holds. [given, F2, F3, F5, algebra]

1.5 First symmetry hexagon: on an elementary tensor $(l\otimes m)\otimes n$ of $(L\otimes M)\otimes N$ the left composite gives successively $n\otimes(l\otimes m)$ (symmetry $\sigma_{L\otimes M,N}$), $(n\otimes l)\otimes m$ (inverse associator), $(l\otimes n)\otimes m$ (symmetry in the first factor), $l\otimes(n\otimes m)$ (associator), while the right composite gives $l\otimes(m\otimes n)$ and then $l\otimes(n\otimes m)$ by the symmetry in the second factor; the two agree on the spanning elementary tensors, hence everywhere. [given, F2, F5, algebra]

1.6 Second symmetry hexagon: on an elementary tensor $l\otimes(m\otimes n)$ of $L\otimes(M\otimes N)$ the left composite gives $(l\otimes m)\otimes n$, then $n\otimes(l\otimes m)$, then $(n\otimes l)\otimes m$, while the right composite gives $l\otimes(n\otimes m)$, then $(l\otimes n)\otimes m$, then $(n\otimes l)\otimes m$; agreement on the spanning elementary tensors gives the identity everywhere. [given, F2, F5, algebra]

2.1 Steps 1.1–1.6 verify all five identities on elementary tensors, and each identity is between $k$-linear maps whose domains are the iterated tensor products of [F1] spanned by elementary tensors [F5]; a linear map is determined by its values on a spanning set, so each identity holds on its whole domain, and no general monoidal coherence theorem was invoked. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6, F1, F5] ∎
