---
id: def-st-4d-n1-kahler-hodge-line-data
kind: definition
title: Four-Dimensional $N=1$ Kähler–Hodge Line Data
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: physics
library: physics
deps:
  - def-qftx-n1-kahler-target-data
  - def-complex-manifolds-and-holomorphic-vector-bundles
dependency_roles:
  def-qftx-n1-kahler-target-data: formulation-prerequisite
  def-complex-manifolds-and-holomorphic-vector-bundles: formulation-prerequisite
physical_scope: "Local four-dimensional N=1 supergravity patch data for a positive Kähler metric, its holomorphic superpotential line bundle, and the Kähler-covariant derivative; no global existence theorem for a supergravity target is asserted."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Christian Hohl, Notes on the derivation of the general N=1 supergravity/matter/Yang-Mills Lagrangian for d=4 dimensions using superspace techniques"
      url: "https://arxiv.org/pdf/2005.09504v1"
      locator: "§5 opening matter-superfield discussion, equations (5.1)–(5.6), printed PDF pp. 45–46: holomorphic line-bundle superpotential, Kähler transformations, invariant norm, and covariant derivative; source uses M_P=1."
    - title: "Jan Louis, Introduction to Supersymmetry and Supergravity"
      url: "https://www.physik.uni-hamburg.de/th2/ag-louis/dokumente/lectures/ws-15-16/ws-15-susy-lecture-notes.pdf"
      locator: "§9.1, equations (9.3)–(9.4), Kähler transformations and matter-coupled N=1 supergravity; full lecture notes."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $n\geq1$ and let $X$ be a nonempty smooth complex manifold of complex dimension $n$. Here this means a nonempty Hausdorff, second-countable space with a holomorphic atlas of charts $z_\alpha:U_\alpha\to z_\alpha(U_\alpha)\subset\mathbb C^n$ whose overlap maps are biholomorphic; this atlas also supplies the smooth structure. Choose a cover by such coordinate patches $U_\alpha$. On each patch choose a real smooth Kähler potential $K_\alpha$ for a positive Hermitian metric
$$g_{i\bar j}=\partial_i\partial_{\bar j}K_\alpha.$$
On each overlap $U_\alpha\cap U_\beta$, require
$$K_\alpha-K_\beta=F_{\alpha\beta}+\overline{F_{\alpha\beta}},$$
where $F_{\alpha\beta}$ is holomorphic. Fix a positive mass $M_P$. Require $F_{\alpha\alpha}\in2\pi iM_P^2\mathbb Z$ on each $U_\alpha$, and require
$$F_{\alpha\beta}+F_{\beta\gamma}+F_{\gamma\alpha}\in 2\pi i M_P^2\mathbb Z$$
on every triple overlap, including repeated indices. Thus $t_{\alpha\beta}:=e^{-F_{\alpha\beta}/M_P^2}$ obeys the normalized bundle cocycle identities $t_{\alpha\alpha}=1$, $t_{\alpha\beta}t_{\beta\alpha}=1$, and $t_{\alpha\beta}t_{\beta\gamma}=t_{\alpha\gamma}$. A holomorphic line bundle here is a rank-one complex vector bundle with holomorphic local frames and nonzero holomorphic transition functions satisfying these identities. A **Kähler–Hodge line datum** in this convention is this patch data together with such a line bundle whose local components for a holomorphic section $W$ transform as
$$W_\alpha=e^{-F_{\alpha\beta}/M_P^2}W_\beta.$$
The displayed transitions are holomorphic and nonzero, and the stated period condition makes their product around every triple overlap equal to $1$. Its Hermitian norm is locally $e^{K_\alpha/M_P^2}|W_\alpha|^2$, which is independent of patch. In four-dimensional units use $[z^i]=[M_P]=1$, $[K_\alpha]=[F_{\alpha\beta}]=2$, and $[W]=3$. Define the Kähler-covariant derivative by
$$D_iW:=\partial_iW+\frac{K_i}{M_P^2}W,\qquad K_i:=\partial_iK_\alpha.$$
The definition is local on the stated patches. It does not assert that arbitrary Kähler potentials admit the required integral cocycle or line bundle.

## Definition references

[[def-qftx-n1-kahler-target-data]]

[[def-complex-manifolds-and-holomorphic-vector-bundles]]

[Hohl, §5 opening discussion, equations (5.1)–(5.6)](https://arxiv.org/pdf/2005.09504v1)

[Louis, §9.1, equations (9.3)–(9.4)](https://www.physik.uni-hamburg.de/th2/ag-louis/dokumente/lectures/ws-15-16/ws-15-susy-lecture-notes.pdf)

## Facts & Assumptions

**Given:** The local positive Kähler patch data of [[def-qftx-n1-kahler-target-data]], a cover $\{U_\alpha\}$, holomorphic overlap functions $F_{\alpha\beta}$ satisfying the displayed cocycle, and $M_P>0$.

[F1] [[def-qftx-n1-kahler-target-data]] supplies smooth complex scalar-coordinate patches with real local Kähler potentials and positive Hermitian metric $g_{i\bar j}=\partial_i\partial_{\bar j}K$.

[F2] [[def-complex-manifolds-and-holomorphic-vector-bundles]] defines a complex manifold by a compatible holomorphic atlas on a nonempty Hausdorff, second-countable space and defines a holomorphic vector bundle by holomorphic local trivializations and transition maps. The line bundle used here is its rank-one case.

[A1] The displayed transition and cocycle conditions are the adopted Kähler–Hodge line-bundle convention. They are assumptions on this datum, not consequences of positivity of $g$.

## Proof

1.1 On an overlap, $\partial_i\partial_{\bar j}(F_{\alpha\beta}+\overline{F_{\alpha\beta}})=0$, since $F_{\alpha\beta}$ is holomorphic and its conjugate is antiholomorphic. Thus the local Hessians of $K_\alpha$ and $K_\beta$ agree, so [F1]'s positive Hermitian metric is well-defined across the chosen cover. [given, F1, A1, algebra]

2.1 The transition functions $t_{\alpha\beta}=e^{-F_{\alpha\beta}/M_P^2}$ are holomorphic and nonzero. The diagonal period condition gives $t_{\alpha\alpha}=1$. Applying the triple condition to $(\alpha,\beta,\alpha)$ then gives $t_{\alpha\beta}t_{\beta\alpha}=1$; combining this inverse identity with $t_{\alpha\beta}t_{\beta\gamma}t_{\gamma\alpha}=1$ gives $t_{\alpha\beta}t_{\beta\gamma}=t_{\alpha\gamma}$. These are the transition identities of [F2]. Also $e^{K_\alpha/M_P^2}|W_\alpha|^2=e^{K_\beta/M_P^2}|W_\beta|^2$. In common overlap coordinates, differentiating the transition law and using $K_{\alpha,i}=K_{\beta,i}+F_{\alpha\beta,i}$ gives $D_iW_\alpha=t_{\alpha\beta}D_iW_\beta$; in different coordinates the chain rule adds the holomorphic covector Jacobian. Hence the norm and the line-valued covector $DW$ have the declared patch behavior. [given, F2, A1, step 1.1, algebra] ∎
