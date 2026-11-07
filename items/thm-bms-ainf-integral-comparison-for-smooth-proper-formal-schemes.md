---
id: thm-bms-ainf-integral-comparison-for-smooth-proper-formal-schemes
kind: theorem
title: "The BMS A-inf integral comparison for smooth proper formal schemes"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-prismatic-f-crystal-over-a-p-adic-formal-scheme
  - def-breuil-kisin-fargues-module
  - def-integral-perfectoid-ring-via-ainf-and-tilt
  - thm-bms-perfectoid-ring-and-perfectoid-tate-algebra-agree
  - thm-perfectoid-affinoid-structure-sheaf-and-almost-acyclicity
  - thm-perfectoid-affinoid-etale-covers-correspond-to-finite-etale-algebras
  - lem-completion-of-an-algebraic-closure-of-a-p-adic-field-is-perfectoid
  - lem-completion-of-algebraically-closed-valued-field-is-algebraically-closed
  - def-p-adic-period-rings
  - def-p-adic-etale-and-crystalline-cohomology
  - def-crystalline-p-adic-galois-representation
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Bhatt, Morrow, and Scholze, Integral p-adic Hodge Theory, Theorems 1.1, 1.8, 1.10, and 14.6"
      url: "https://arxiv.org/pdf/1602.03148v3.pdf"
    - title: "Bhatt and Scholze, Prisms and Prismatic Cohomology, Theorems 1.8 and 17.2"
      url: "https://arxiv.org/pdf/1905.08229v4.pdf"
---

## Statement

Let $K$ be a complete discretely valued nonarchimedean extension of $\mathbb Q_p$ with perfect residue field $k$, let $O_K$ be its valuation ring, let $\mathfrak X$ be a proper smooth $p$-adic formal scheme over $O_K$, and let $X$ be its rigid analytic generic fibre. Write $X_k=\mathfrak X\otimes_{O_K}k$. Let $\overline K$ be an algebraic closure equipped with an extension of the absolute value, let $C$ be its metric completion, let $O_C$ be its valuation ring, let $k_C$ be its residue field, let $\mathfrak X_C=\mathfrak X\widehat\times_{\operatorname{Spf}(O_K)}\operatorname{Spf}(O_C)$, let $X_C=X\times_K C$, and let $X_{C,k_C}=\mathfrak X_C\otimes_{O_C}k_C$. Let $G_K=\operatorname{Gal}(\overline K/K)$. Set $A_{\inf}=W(\mathcal O_C^\flat)$, where $\mathcal O_C^\flat=\varprojlim_{x\mapsto x^p}\mathcal O_C/p$, let $\theta:A_{\inf}\to\mathcal O_C$ be Fontaine's map, choose a generator $\xi$ of $\ker(\theta)$, and choose a compatible system of primitive $p$-power roots of unity $\epsilon$ with $\mu=[\epsilon]-1$. Let $\phi$ be Witt-vector Frobenius, let $A_{\mathrm{crys}}$ be the $p$-adic completion of the divided-power envelope of $\ker(\theta)$, and let $B_{\mathrm{crys}}=A_{\mathrm{crys}}[1/p,1/\mu]$.

In the integral-perfectoid convention, the Fontaine map is $\theta(\sum_{n\ge0}p^n[x_n])=\sum_{n\ge0}p^n x_n^\sharp$, where $x^\sharp=\lim_{m\to\infty}\widetilde{x_m}^{p^m}$ for lifts $\widetilde{x_m}$ of the compatible tilt coordinates. The kernel is principal for the integral-perfectoid ring $\mathcal O_C$ in the A-inf comparison used here.

The group $G_K$ has its profinite topology. For a perfect field $F$, $W(F)$ denotes its $p$-typical Witt ring. Crystalline cohomology $R\Gamma_{\mathrm{crys}}(Z/W(F))$ means derived global sections of the crystalline site of the special fibre $Z$ over $W(F)$; its degree-$i$ cohomology is $H^i_{\mathrm{crys}}(Z/W(F))$ with its canonical Frobenius. Étale cohomology $R\Gamma_{\acute et}(X_C,\mathbb Z_p)$ means derived $p$-adic étale cohomology of the rigid generic fibre. The de Rham complex in the comparison is the continuous relative complex $\Omega^\bullet_{\mathfrak X_C/O_C,\mathrm{cont}}=\varprojlim_m\Omega^\bullet_{(\mathfrak X_C/p^m)/(O_C/p^m)}$. Let $B_{\mathrm{dR}}^+$ be the $\xi$-adic completion of $A_{\inf}[1/p]$, let $B_{\mathrm{dR}}=B_{\mathrm{dR}}^+[1/\xi]$, and give it the filtration $\mathrm{Fil}^rB_{\mathrm{dR}}=\xi^rB_{\mathrm{dR}}^+$. The filtration on $B_{\mathrm{crys}}$ is induced by its canonical map to $B_{\mathrm{dR}}$.

There is a perfect complex $R\Gamma_{A_{\inf}}(\mathfrak X_C)$ of $A_{\inf}$-modules with a $\phi$-linear map $\phi:R\Gamma_{A_{\inf}}(\mathfrak X_C)\to R\Gamma_{A_{\inf}}(\mathfrak X_C)$ such that after inverting $\xi$ it is a quasi-isomorphism to the corresponding Frobenius pullback after inverting $\phi(\xi)$, and every cohomology module $H^j_{A_{\inf}}(\mathfrak X_C)$ is a Breuil–Kisin–Fargues module. There are comparison quasi-isomorphisms

$$
R\Gamma_{A_{\inf}}(\mathfrak X_C)\otimes^{\mathbb L}_{A_{\inf}}W(k_C)\simeq R\Gamma_{\mathrm{crys}}(X_{C,k_C}/W(k_C)),\qquad R\Gamma_{A_{\inf}}(\mathfrak X_C)\otimes^{\mathbb L}_{A_{\inf}}O_C\simeq R\Gamma_{\mathrm{dR}}(\mathfrak X_C),
$$

and

$$
R\Gamma_{A_{\inf}}(\mathfrak X_C)\otimes^{\mathbb L}_{A_{\inf}}A_{\mathrm{crys}}\simeq R\Gamma_{\mathrm{crys}}(\mathfrak X_C\otimes_{O_C}O_C/p\,/\,A_{\mathrm{crys}}),\qquad R\Gamma_{A_{\inf}}(\mathfrak X_C)\otimes_{A_{\inf}}A_{\inf}[1/\mu]\simeq R\Gamma_{\acute et}(X_C,\mathbb Z_p)\otimes_{\mathbb Z_p}A_{\inf}[1/\mu].
$$

For each $i\geq0$, the comparison theorem also gives a $G_K$-equivariant and Frobenius-equivariant isomorphism, compatible with the filtration,

$$
H^i_{\acute et}(X_C,\mathbb Z_p)\otimes_{\mathbb Z_p}B_{\mathrm{crys}}\simeq H^i_{\mathrm{crys}}(X_k/W(k))\otimes_{W(k)}B_{\mathrm{crys}}.
$$

For a finite-dimensional continuous $\mathbb Q_p$-representation $V$ of $G_K$, “crystalline” means that $D_{\mathrm{crys}}(V)=(B_{\mathrm{crys}}\otimes_{\mathbb Q_p}V)^{G_K}$ has $K_0=W(k)[1/p]$-dimension equal to $\dim_{\mathbb Q_p}V$. In particular, $H^i_{\acute et}(X_C,\mathbb Q_p)$ is crystalline. For every $n\geq0$,

$$
\operatorname{length}_{W(k)}\!\left(H^i_{\mathrm{crys}}(X_k/W(k))_{\mathrm{tor}}/p^n\right)\geq\operatorname{length}_{\mathbb Z_p}\!\left(H^i_{\acute et}(X_C,\mathbb Z_p)_{\mathrm{tor}}/p^n\right),
$$

where $M_{\mathrm{tor}}$ is the torsion submodule of the finite module $M$. Thus, if $H^i_{\mathrm{crys}}(X_k/W(k))$ has no $p$-torsion, neither does $H^i_{\acute et}(X_C,\mathbb Z_p)$. If both $H^i_{\mathrm{crys}}(X_k/W(k))$ and $H^{i+1}_{\mathrm{crys}}(X_k/W(k))$ have no $p$-torsion, then $H^i_{\mathrm{crys}}(X_k/W(k))$ with its Frobenius action is functorially recoverable from the $G_K$-module $H^i_{\acute et}(X_C,\mathbb Z_p)$.

## Statement references

[Bhargav Bhatt, Matthew Morrow, and Peter Scholze, *Integral p-adic Hodge Theory*, Theorems 1.1, 1.8, 1.10, and 14.6](https://arxiv.org/pdf/1602.03148v3.pdf)

[Bhargav Bhatt and Peter Scholze, *Prisms and Prismatic Cohomology*, Theorems 1.8 and 17.2](https://arxiv.org/pdf/1905.08229v4.pdf)

## Remaining local proof obligations

The statement is retained at its source strength, but a local proof is not supplied. The formal $A_{\inf}$ complex and its crystalline, de Rham, and étale comparisons require the complete construction of $A\Omega_{\mathfrak X_C}$ and the sheaf-level comparison chain in BMS §§8–14; the unresolved intermediate proofs include [[thm-bms-perfectoid-ring-and-perfectoid-tate-algebra-agree]], [[thm-perfectoid-affinoid-structure-sheaf-and-almost-acyclicity]], and [[thm-perfectoid-affinoid-etale-covers-correspond-to-finite-etale-algebras]]. The actual finite-etale supplier assumes Dependent Choice and Countable Choice, whose role in a source-strength proof remains unreconciled. The completed-closure result [[lem-completion-of-algebraically-closed-valued-field-is-algebraically-closed]] is a ready batch 27 supplier but its proof assumes Choice and uses Countable Choice for completion; that axiom branch is likewise unresolved against the source theorem's unqualified statement. The current batch 82 period-ring and crystalline-representation definitions have bodies, but are planned for finite $K/\mathbb Q_p$, while this theorem permits a possibly non-finite complete discretely valued $K$. The current p-adic cohomology definition is for a finite $K$ and a smooth proper algebraic scheme, assumes Choice for its site/cohomology construction, and does not itself identify the formal rigid generic-fibre cohomology in this statement. The crystalline-representation definition's filtration depends on [[lem-p-adic-period-ring-comparison-embedding-is-injective]], which now contains a local proof for finite $K/\mathbb Q_p$ using the given valued closure and compatible primitive cyclotomic system. This corrects the earlier proof-absence diagnosis; it does not extend that supplier to the present general-$K$ setting or discharge the period-ring construction obligations. The precise torsion-length argument needs BMS Lemma 4.16, Corollary 4.15, and the finite-module comparison injections; Frobenius reconstruction additionally needs Theorem 4.28 and Proposition 4.34. No proof or axiom-free route is inferred from the literature statements.

