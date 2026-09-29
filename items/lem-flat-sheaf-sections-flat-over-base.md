---
id: "lem-flat-sheaf-sections-flat-over-base"
kind: "lemma"
title: "Sections of a sheaf flat over the base are flat over affine opens"
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-quasi-coherent-module-scheme
  - thm-affine-quasi-coherent-equivalence
  - def-associated-sheaf-module-affine-scheme
  - lem-associated-sheaf-stalk-localization
  - def-morphism-affine-schemes-from-ring-map
  - def-affine-scheme-spectrum
  - thm-stalk-structure-sheaf-prime-localization
  - def-flat-and-faithfully-flat-modules-and-ring-maps
  - thm-flatness-criteria-by-injections-and-ideals
  - thm-localisation-of-modules-is-exact
  - thm-localisation-of-modules-is-tensor-product
  - thm-associativity-of-balanced-tensor-products
  - cor-localisation-commutes-with-kernels-images-and-cokernels
  - thm-local-criterion-for-zero-modules-and-maps
  - lem-zero-in-a-localised-module
  - cor-maximal-ideals-are-prime
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
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Lemma 29.26.2"
      url: "https://stacks.math.columbia.edu/tag/01U4"
    - title: "The Stacks Project, Algebra, Lemma 10.39.18"
      url: "https://stacks.math.columbia.edu/tag/00HT"
---

## Statement

Assume the Axiom of Choice, inherited from the zero criterion cited below
([[def-axiom-of-choice]], [[thm-local-criterion-for-zero-modules-and-maps]]).
Let $f:X\to S$ be a morphism of schemes and let $\mathcal F$ be a quasi-coherent
$\mathcal O_X$-module that is flat over $S$, meaning that for every $x\in X$ the
stalk $\mathcal F_x$ is a flat module over the local ring $\mathcal O_{S,f(x)}$
([[def-flat-and-faithfully-flat-modules-and-ring-maps]]). Let
$U=\operatorname{Spec}B\subseteq X$ and $V=\operatorname{Spec}A\subseteq S$ be
affine opens with $f(U)\subseteq V$. Then $\mathcal F(U)$ is a flat
$A$-module.

## Facts & Assumptions
**Given:** The Axiom of Choice, a morphism of schemes $f:X\to S$, a quasi-coherent $\mathcal O_X$-module $\mathcal F$ with $\mathcal F_x$ flat over $\mathcal O_{S,f(x)}$ for every $x\in X$, and affine opens $U=\operatorname{Spec}B\subseteq X$, $V=\operatorname{Spec}A\subseteq S$ with $f(U)\subseteq V$.

[F1] Restrictions of quasi-coherent modules to open subschemes are quasi-coherent; on an affine scheme $U=\operatorname{Spec}B$ a quasi-coherent module is canonically the associated sheaf of its global sections, so $\mathcal F|_U\cong\widetilde M$ with $M=\mathcal F(U)$, and the stalk of $\mathcal F$ at $\mathfrak q\in\operatorname{Spec}B$ is $M_{\mathfrak q}$. ([[def-quasi-coherent-module-scheme]], [[thm-affine-quasi-coherent-equivalence]], [[def-associated-sheaf-module-affine-scheme]], [[lem-associated-sheaf-stalk-localization]])

[F2] The affine open inclusions correspond to a ring map $A\to B$ under the anti-equivalence of affine schemes with rings, a point $\mathfrak q\in U$ has image $\mathfrak p=\mathfrak q\cap A$ in $V$, and $\mathcal O_{S,f(\mathfrak q)}=A_{\mathfrak p}$. ([[def-morphism-affine-schemes-from-ring-map]], [[def-affine-scheme-spectrum]], [[thm-stalk-structure-sheaf-prime-localization]])

[F3] Flatness hypothesis: for every prime $\mathfrak q\subseteq B$ with $\mathfrak p=\mathfrak q\cap A$, the stalk $\mathcal F_{\mathfrak q}$ is a flat $A_{\mathfrak p}$-module.

[F4] Flatness criterion: an $R$-module $N$ is flat if and only if for every finitely generated ideal $I\subseteq R$ the multiplication map $I\otimes_RN\to N$ is injective; in particular if $N$ is flat then $I\otimes_RN\to N$ is injective for every ideal $I\subseteq R$. ([[thm-flatness-criteria-by-injections-and-ideals]], [[def-flat-and-faithfully-flat-modules-and-ring-maps]])

[F5] Localization is exact, localizes kernels and cokernels, and is computed by tensoring with the localized ring: for a multiplicative set $S\subseteq R$ there is a natural isomorphism $S^{-1}N\cong S^{-1}R\otimes_RN$; tensor products of modules may be regrouped. ([[thm-localisation-of-modules-is-exact]], [[thm-localisation-of-modules-is-tensor-product]], [[cor-localisation-commutes-with-kernels-images-and-cokernels]], [[thm-associativity-of-balanced-tensor-products]])

[F6] A module $N$ is zero if and only if $N_{\mathfrak m}=0$ for every maximal ideal $\mathfrak m$; every maximal ideal is prime; and an element $n$ has zero image in $N_{\mathfrak m}$ if and only if $sn=0$ for some $s\notin\mathfrak m$. ([[thm-local-criterion-for-zero-modules-and-maps]], [[cor-maximal-ideals-are-prime]], [[lem-zero-in-a-localised-module]])

[F7] The Axiom of Choice is assumed, and it is exactly what the zero criterion of the previous paragraph consumes. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct: reduce to the affine situation, where the local flatness hypothesis at the localizations of $M=\mathcal F(U)$ is exactly what the ideal criterion for flatness over the local rings tests.

1.1 Set $M:=\mathcal F(U)$. By [F1] the restriction $\mathcal F|_U$ is quasi-coherent and is isomorphic to $\widetilde M$, and for every prime $\mathfrak q\subseteq B$ the stalk of $\mathcal F$ at $\mathfrak q$ is $M_{\mathfrak q}$. [F1]

1.2 We prove that $M$ is flat over $A$. Let $I\subseteq A$ be a finitely generated ideal and let $K$ be the kernel of the multiplication map $I\otimes_AM\to M$, so that $K$ is a $B$-submodule. Suppose $K\neq0$. By the zero criterion of [F6] applied to the $B$-module $K$ there is a maximal ideal $\mathfrak m\subseteq B$ with $K_{\mathfrak m}\neq0$; by [F6] the maximal ideal $\mathfrak m$ is prime, and we put $\mathfrak p_0=\mathfrak m\cap A$. [F6]

2.1 Let $\mathfrak q\subseteq B$ be a prime and put $\mathfrak p=\mathfrak q\cap A$. By [F2] the point $\mathfrak q$ lies in $U\subseteq X$ with $f(\mathfrak q)=\mathfrak p$ and $\mathcal O_{S,f(\mathfrak q)}=A_{\mathfrak p}$. Hypothesis [F3] therefore states that $M_{\mathfrak q}=\mathcal F_{\mathfrak q}$ is a flat $A_{\mathfrak p}$-module. [F2, F3, step 1.1]

2.2 Localizing the exact sequence of $A$-modules $0\to K\to I\otimes_AM\to M$ at $\mathfrak m$, the module $K_{\mathfrak m}$ is the kernel of the localized multiplication map $(I\otimes_AM)_{\mathfrak m}\to M_{\mathfrak m}$. By the localizations and regroupings of [F5], $$(I\otimes_AM)_{\mathfrak m}\cong I\otimes_AM_{\mathfrak m} \cong I_{\mathfrak p_0}\otimes_{A_{\mathfrak p_0}}M_{\mathfrak m},$$ where $I_{\mathfrak p_0}=IA_{\mathfrak p_0}$ is the extension of $I$ to $A_{\mathfrak p_0}$, and under these isomorphisms the localized map is the multiplication map $I_{\mathfrak p_0}\otimes_{A_{\mathfrak p_0}} M_{\mathfrak m}\to M_{\mathfrak m}$. [F5, step 1.2]

3.1 By step 2.1 applied to the prime $\mathfrak m\subseteq B$ the module $M_{\mathfrak m}$ is flat over $A_{\mathfrak p_0}$, so by the ideal criterion [F4] the map $I_{\mathfrak p_0}\otimes_{A_{\mathfrak p_0}}M_{\mathfrak m}\to M_{\mathfrak m}$ is injective. By step 2.2 its kernel is $K_{\mathfrak m}$, hence $K_{\mathfrak m}=0$, contradicting the choice of $\mathfrak m$ in step 1.2. Therefore $K=0$ for every finitely generated ideal $I\subseteq A$. [F4, step 2.1, step 1.2, step 2.2]

4.1 Since every finitely generated ideal $I\subseteq A$ gives an injective multiplication map $I\otimes_AM\to M$, the criterion [F4] shows that $M=\mathcal F(U)$ is a flat $A$-module. [F4, step 3.1]

5.1 Boundary and choice accounting. If $U=\varnothing$ then $B=0$ and $M=0$, the zero module being flat over $A$; if $\mathcal F=0$ then $M=0$; if $A=0$ then also $M=0$, and if $X=\varnothing$ or $S=\varnothing$ there is no nonempty affine open to consider. By [F7] the Axiom of Choice is available exactly as the zero criterion [F6] consumes it, namely to supply the maximal ideal $\mathfrak m$ of step 1.2; the localizations used are those of [F1], [F2] and [F5], and no further selection is made. The assertion of the statement is exactly the flatness of $M=\mathcal F(U)$ over $A$ established in step 4.1, so the lemma is proved. [F1, F6, F7, step 4.1] ∎
