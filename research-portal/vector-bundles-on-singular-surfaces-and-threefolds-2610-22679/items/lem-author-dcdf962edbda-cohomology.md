---
id: lem-author-dcdf962edbda-cohomology
kind: lemma
title: Weight-zero sections and cohomology on the chosen general site
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - lem-author-dcdf962edbda-constant-sections
  - lem-author-dcdf962edbda-pullback-projection
  - thm-author-dcdf962edbda-source-input
  - def-motivic-cohomology
  - lem-author-dcdf962edbda-qcqs-site
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  lem-author-dcdf962edbda-constant-sections: mathematical-premise
  lem-author-dcdf962edbda-pullback-projection: mathematical-premise
  thm-author-dcdf962edbda-source-input: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  lem-author-dcdf962edbda-qcqs-site: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 12
formulation_deps:
  - math:def-axiom-of-choice
  - lem-author-dcdf962edbda-constant-sections
  - lem-author-dcdf962edbda-pullback-projection
  - thm-author-dcdf962edbda-source-input
  - def-motivic-cohomology
  - lem-author-dcdf962edbda-qcqs-site
argument_deps:
  - math:def-axiom-of-choice
  - lem-author-dcdf962edbda-constant-sections
  - lem-author-dcdf962edbda-pullback-projection
  - thm-author-dcdf962edbda-source-input
  - def-motivic-cohomology
  - lem-author-dcdf962edbda-qcqs-site
---

## Statement
Assume the Axiom of Choice. Fix Grothendieck universes $U\in V\in W$ with $\omega\in U$, and compatible ambient bounds for the sheaf and derived constructions below; existence of these universes is a separate size assumption. Let $k\in U$ be a field with its prime subfield identified with $F=\mathbb Q$ or $F=\mathbb F_p$ for a prime $p$, with $F\in U$. Let $X$ be any quasi-compact quasi-separated (qcqs) $k$-scheme whose defining data lie in $U$. Write $X_F$ for the same scheme with structure map $X\to\operatorname{Spec}k\to\operatorname{Spec}F$.

Use the $V$-small general qcqs $F$-scheme cdh site $\mathcal C_F$ and representative functor $r$ of the source qcqs-site construction. Let $\underline{\mathbb Z}_{\mathrm{cdh}}$ be the ordinary abelian sheafification of the constant integer presheaf on this site, placed in degree zero. Here $R\Gamma^F_{\mathrm{cdh}}(X,\mathbb Z)$ means its derived evaluation at $rX_F$, and $H^i_{\mathrm{cdh},F}(X,\mathbb Z)=H^i(R\Gamma^F_{\mathrm{cdh}}(X,\mathbb Z))$.

Let $\rho_0(X_F)$ be the component at $X_F$ of the canonical prime-field weight-zero comparison. Its motivic source, restricted to $k$-schemes, is $\mathbb Z(0)_{\mathrm{mot},k}(X)$; use the motivic cohomology convention $H^{i,0}_{\mathrm{mot}}(X,\mathbb Z)=H^i(\mathbb Z(0)_{\mathrm{mot},k}(X))$. Composing $\rho_0(X_F)$ with the source constant-sheaf identification gives a natural equivalence, contravariantly in qcqs $k$-schemes within these size bounds,
$$\mathbb Z(0)_{\mathrm{mot},k}(X)\longrightarrow R\Gamma^F_{\mathrm{cdh}}(X,\mathbb Z).$$
It induces natural isomorphisms $H^{i,0}_{\mathrm{mot}}(X,\mathbb Z)\cong H^i_{\mathrm{cdh},F}(X,\mathbb Z)$ for every integer $i$, and these groups vanish for $i<0$.

## Facts & Assumptions

[A1] Choice and the stated compatible universe bounds are retained for the chosen site representatives and derived evaluation, and when applying the projection equivalence and negative-degree vanishing below. Existence of the nested universes is separately assumed. [[math:def-axiom-of-choice]]

**Given:** The field, prime-subfield identification, qcqs scheme, site, Choice and size hypotheses in the statement.

**Goal:** Construct the displayed natural equivalence and deduce its cohomology isomorphisms and negative-degree vanishing.

[F1] [[lem-author-dcdf962edbda-pullback-projection]] supplies the canonical comparison $\rho_0$ and its natural equivalence after restriction along $X\mapsto X_F$, with motivic source $\mathbb Z(0)_{\mathrm{mot},k}(X)$, under the stated Choice and nested-universe assumptions.

[F2] [[thm-author-dcdf962edbda-source-input]] supplies the natural identification of $\mathbb Z(0)_{\mathrm{cdh},F}$ with derived evaluation of the ordinary degree-zero constant integer sheaf on the source qcqs cdh site, for every qcqs scheme over $F=\mathbb Q$ or $\mathbb F_p$.

[F3] [[lem-author-dcdf962edbda-constant-sections]] supplies the specified constant sheaf, its derived evaluation at $rX_F$, its cohomology groups and their negative-degree vanishing. [[def-motivic-cohomology]] supplies the motivic cohomology convention and the cohomology functor on the underlying derived category.

[F4] [[lem-author-dcdf962edbda-qcqs-site]] supplies $\mathcal C_F$, the size and qcqs conventions, the underlying $F$-scheme $X_F$ and the functorial representative $rX_F$ for each stated $X/k$.

## Proof
1.1 By [F4], composing the structure maps gives a qcqs $F$-scheme $X_F$ within the chosen bound, evaluated at $rX_F$ on the specified site. Apply [F1] to obtain the actual natural equivalence $\rho_0(X_F)$ with source $\mathbb Z(0)_{\mathrm{mot},k}(X)$. Compose it with the natural constant-sheaf identification of [F2] evaluated on that same site. By [F3], the resulting target is exactly $R\Gamma^F_{\mathrm{cdh}}(X,\mathbb Z)$. Both maps are natural in the underlying $F$-scheme and hence in $X/k$; their composite is a natural equivalence. [A1, F1, F2, F3, F4]

2.1 Apply the cohomology functor of [F3] to the composite of step 1.1. It sends an equivalence to an isomorphism in every integer degree; its two values are precisely the motivic and cdh cohomology groups defined in the statement. Functoriality gives naturality of these isomorphisms. Under [A1], [F3] gives zero negative cohomology for derived evaluation of the ordinary degree-zero constant sheaf, so the isomorphic motivic groups also vanish for $i<0$. [A1, F3, step 1.1] ∎
