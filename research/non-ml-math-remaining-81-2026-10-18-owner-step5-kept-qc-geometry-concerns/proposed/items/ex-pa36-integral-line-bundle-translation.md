---
id: ex-pa36-integral-line-bundle-translation
kind: example
title: Integral line-bundle translation changes the infinitesimal character
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-pa36-flag-tdo-and-module
  - def-pa36-global-sections-and-localization
  - def-sheaf-cohomology-derived-global-sections
  - lem-harish-chandra-projection-computes-highest-weight-scalars
  - lem-pa36-flag-tdo-pbw-and-twist
  - lem-pa36-module-global-sections-derived-cohomology
  - def-quasi-coherent-module-scheme
  - lem-associated-sheaf-sections-basic-open
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
  - thm-pa36-global-twisted-differential-operators
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Masaki Kashiwara, Representation theory and D-modules on flag varieties, Astérisque 173–174 (1989)"
      url: "https://numdam.org/item/AST_1989__173-174__55_0.pdf"
      locator: "§6.1, equation (6.1.2), printed p. 92; integral twist changes the parameter"
    - title: "Masaki Kashiwara, Representation theory and D-modules on flag varieties, Astérisque 173–174 (1989)"
      url: "https://numdam.org/item/AST_1989__173-174__55_0.pdf"
      locator: "§7.6, printed p. 98; positive SL2 twist boundary"
---

## Example

For $G=\mathrm{SL}_2$, start at the singular twist $\kappa=0$ with the
nonzero $\mathcal D_0$-module $M=\mathcal O_{\mathbb P^1}(-1)$. Tensor by the
integral line bundle $\mathcal O_X(\rho)=\mathcal O_{\mathbb P^1}(-1)$. The
result is the $\mathcal D_\rho$-module $\mathcal O_{\mathbb P^1}(-2)$, since
integral line-bundle translation changes the twist from $\kappa$ to
$\kappa+\rho$. The Casimir characters change from
$$\chi_0(C)=-\tfrac12\quad\text{to}\quad\chi_\rho(C)=0.$$
The translated parameter $\rho$ is not antidominant, and the translated
module still has zero global sections (indeed $\dim H^1=1$); the twist
equivalence on sheaf modules does not assert that global sections is faithful
at the translated parameter.

## Facts & Assumptions

**Given:** The type $A_1$ root datum, $\rho(h)=1$, the line-bundle convention
and parameter-shifting functor, and the Casimir
$C=ef+fe+\frac12h^2$.

[F1] Tensoring by an integral line bundle $\mathcal O_X(\eta)$ identifies
$\mathcal D_\kappa$-modules with $\mathcal D_{\kappa+\eta}$-modules
([[lem-pa36-flag-tdo-pbw-and-twist]]).

[F2] For $\mathfrak{sl}_2$, the Harish–Chandra projection sends
$C$ to $h+\frac12h^2$, and $\chi_\kappa(C)=\operatorname{pr}(C)(\kappa-\rho)$
([[def-pa36-flag-tdo-and-module]],
[[lem-harish-chandra-projection-computes-highest-weight-scalars]]).

[F3] The Cech complex of the two standard affine charts computes
$H^q(\mathbb P^1,\mathcal O(d))$
([[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]]).

[F4] For module sheaves over a sheaf of rings, right-derived global sections
agree with ordinary sheaf cohomology ([[lem-pa36-module-global-sections-derived-cohomology]]).

[F5] Quasi-coherence is the affine-local associated-module condition, and the associated sheaf of an $A$-module $N$ has sections $N_f$ on each distinguished open $D(f)$ ([[def-quasi-coherent-module-scheme]], [[lem-associated-sheaf-sections-basic-open]]).

## Verification

1.1 In type $A_1$, $\rho$ is the fundamental weight and $\mathcal O_X(\rho)=\mathcal O(-1)$. Applying [F1] with $\kappa=0$ and $\eta=\rho$ sends $M=\mathcal O(-1)$ to $M\otimes\mathcal O_X(\rho)=\mathcal O(-2)$ at the new twist $\kappa+\eta=\rho$. [F1, given]

2.1 The Harish–Chandra polynomial from [F2] is $p(t)=t+\frac12t^2$ in the $h$-coordinate. At $\kappa=0$, the evaluation point is $\kappa-\rho=-1$, so $p(-1)=-\frac12$. At $\kappa'=\rho$, the evaluation point is $0$, so $p(0)=0$. Thus the central characters differ; also $\langle\rho,\alpha^\vee\rangle=1$, so the target parameter is non-antidominant. [F2, step 1.1, algebra]

3.1 Put $z=y/x$ on $U_0$ and $w=x/y$ on $U_1$. For $d=-2$, the Cech complex has $C^0=\mathbb C[z]e_0\oplus\mathbb C[w]e_1$ and $C^1=\mathbb C[z,z^{-1}]e_0$, with transition $e_1=z^{-2}e_0$. The image contains powers $z^n$ for $n\ge0$ and $z^{-2-n}$ for $n\ge0$, leaving the single quotient basis $z^{-1}$. Hence $H^0(\mathcal O(-2))=0$ and $\dim H^1(\mathcal O(-2))=1$ by [F3]. Since this translated $M=\mathcal O(-2)$ is nonzero while its sections vanish, its nonzero identity is killed by global sections, so that functor is not faithful. For the standard inclusions $j_0:U_0\hookrightarrow X$, $j_1:U_1\hookrightarrow X$ and $j_{01}:U_0\cap U_1\hookrightarrow X$, put $E=j_{0*}(M|_{U_0})\oplus j_{1*}(M|_{U_1})$ and $F=j_{01*}(M|_{U_0\cap U_1})$. Direct images carry the $\mathcal D_\rho$-action by restriction of operators; restriction and difference are therefore $\mathcal D_\rho$-linear. The augmented sequence $0\to M\to E\to F\to0$ is exact: on $U_0$ the $j_{1*}$ summand identifies with $F|_{U_0}$, so the difference map is surjective there; on $U_1$ the $j_{0*}$ summand gives the same argument. The kernel is precisely the pairs which glue to a section of $M$. It lies inside the stipulated quasi-coherent subcategory. Indeed on $U_0=\operatorname{Spec}\mathbb C[z]$, the three restrictions are the associated modules $\mathbb C[z]e_0$, $(\mathbb C[z]\oplus\mathbb C[z,z^{-1}])e_0$ and $\mathbb C[z,z^{-1}]e_0$; on $U_1$ the same descriptions use $w,e_1$. These descriptions hold on every distinguished open by localization, proving quasi-coherence. Its final global-sections map is exactly the two-chart Cech differential already computed above, whose cokernel is nonzero. Thus global sections is not exact on quasi-coherent $\mathcal D_\rho$-modules, without inferring that restricted-category claim from derived functors on all module sheaves. This computation makes no claim that line-bundle translation preserves global-section faithfulness. [F3, F5, step 1.1, construct, algebra] ∎

