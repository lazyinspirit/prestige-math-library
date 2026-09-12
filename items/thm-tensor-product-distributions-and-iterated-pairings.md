---
id: "thm-tensor-product-distributions-and-iterated-pairings"
kind: "theorem"
title: "Tensor product distributions and iterated pairings"
deps: ["def-tensor-product-of-distributions", "thm-local-finite-order-characterization-of-distributions", "lem-distribution-pairing-with-smooth-parameter-families", "lem-finite-sums-of-product-tests-are-dense-on-product-open-sets", "def-support-of-a-distribution", "thm-distributions-form-a-sheaf", "def-distributional-derivative"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For $u\in\mathcal D'(U)$ and $v\in\mathcal D'(V)$ the tensor candidate is a distribution on $U\times V$, uniquely determined by $(u\otimes v)(\varphi\otimes\psi)=u(\varphi)v(\psi)$. Its two iterated pairing orders agree, and $\operatorname{supp}(u\otimes v)=\operatorname{supp}u\times\operatorname{supp}v$. Three-factor pairings associate. Moreover $\partial_x^\alpha(u\otimes v)=(\partial^\alpha u)\otimes v$ and $\partial_y^\beta(u\otimes v)=u\otimes(\partial^\beta v)$. All claims hold in ZF.

## Facts & Assumptions

[F1] The tensor candidate is well-defined and linear, and has the stated values on product tests ([[def-tensor-product-of-distributions]]).

[F2] Compactwise finite-order estimates characterize distributions ([[thm-local-finite-order-characterization-of-distributions]]).

[F3] Parameter differentiation passes through a distribution pairing with locally common compact supports ([[lem-distribution-pairing-with-smooth-parameter-families]]).

[F4] Finite product-test sums are dense in the product LF test space with a common compact support ([[lem-finite-sums-of-product-tests-are-dense-on-product-open-sets]]).

[F5] Support is the complement of the largest vanishing open set ([[def-support-of-a-distribution]]), and vanishing on an open cover implies vanishing on its union ([[thm-distributions-form-a-sheaf]]).

[F6] Distribution derivatives are signed test transposes ([[def-distributional-derivative]]).

## Proof

**Given:** the distributions on the open factor domains.

1.1 Fix compact $K\subseteq U\times V$ and let $K_U,K_V$ be its compact projections. F2 gives bounds $C_u,p_{m_u}$ for $u$ on $K_U$ and $C_v,p_{m_v}$ for $v$ on $K_V$. For $\Phi\in\mathcal D_K$, the inner paired function has support in $K_U$ by F1, and F3 gives its derivatives by pairing $x$ derivatives of $\Phi$. Applying the two bounds yields $|(u\otimes v)(\Phi)|\le C_uC_v\max_{|\alpha|\le m_u,|\beta|\le m_v}\sup_{K_U\times K_V}|\partial_x^\alpha\partial_y^\beta\Phi|\le C_uC_v p_{m_u+m_v}(\Phi)$. F2 proves it is a distribution. The same argument applies with the pairing order reversed. [given, F1, F2, F3]

2.1 The two orders have the same values on all products by F1. Their difference is a continuous functional zero on all finite product sums, so F4 makes it zero on every test. The same reasoning shows uniqueness of any distribution with the product values. [step 1.1, F1, F4]

3.1 If $x\notin\operatorname{supp}u$, choose an open neighborhood $A$ of $x$ on which $u=0$. On tests supported in $A\times V$, the outer test in F1 is supported compactly in $A$, so the tensor vanishes. If $y\notin\operatorname{supp}v$, the reversed pairing of step 2.1 gives the corresponding vanishing near $U\times\{y\}$. F5 proves support containment in the product. Conversely, if $(x,y)$ lies in that product, every open neighborhood contains $A\times B$ with $x\in A,y\in B$. F5 implies there exist tests $\varphi\in\mathcal D(A)$, $\psi\in\mathcal D(B)$ with nonzero pairings; otherwise one factor would vanish on that neighborhood. F1 makes their product pairing nonzero. Thus the tensor does not vanish on any neighborhood of $(x,y)$, proving equality of supports. Only two local witnesses were used. [step 2.1, F1, F5]

4.1 Applying the distribution construction to two blocks at a time gives distributions $(u\otimes v)\otimes w$ and $u\otimes(v\otimes w)$ on a triple product, each taking value $u(\varphi)v(\psi)w(\eta)$ on pure triple tests. To prove equality, fix $\eta$: their difference on $H(x,y)\eta(z)$ is a continuous functional in $H$, since multiplying by this fixed test preserves compact support and bounds derivatives by fixed constants. F4 in $U\times V$ makes it zero for every $H$. F4 again, now for $(U\times V)\times W$, makes the original difference zero on every triple test. This proves associativity and agreement of the nested orders. [step 3.1, step 2.1, F1, F4]

5.1 For the $x$ derivative, F6 applied to the outer distribution and F3 applied to the inner test give $((\partial^\alpha u)\otimes v)(\Phi)=(-1)^{|\alpha|}(u\otimes v)(\partial_x^\alpha\Phi)$, the asserted derivative. For the $y$ derivative apply F6 directly to the inner pairing. If a factor is zero, all formulas give zero and the support product is empty; empty domains behave the same way. Order-zero derivatives are identities. All estimates and density passages were choice-free. $\square$ [step 4.1, F1, F3, F6]
