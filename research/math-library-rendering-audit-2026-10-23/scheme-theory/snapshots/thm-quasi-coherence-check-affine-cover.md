---
id: thm-quasi-coherence-check-affine-cover
kind: theorem
title: Checking quasi-coherence on an affine cover
status: published
origin: pipeline
deps:
  - def-quasi-coherent-module-scheme
  - thm-affine-quasi-coherent-equivalence
  - lem-associated-sheaf-restriction-affine-open
  - def-axiom-of-choice
  - def-associated-sheaf-module-affine-scheme
  - thm-associated-module-sheaf-exists
  - def-scheme
  - def-module-on-ringed-space
  - def-sheaf-on-topological-space
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, §§26.5, 26.7, 26.24"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Chapters 6, 14, 17"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
pipeline_run: frontier-36-complete
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice, inherited from the affine equivalence
([[def-axiom-of-choice]]). Let $X$ be a scheme and let $\mathcal F$ be an
$\mathcal O_X$-module ([[def-module-on-ringed-space]]).

Then $\mathcal F$ is quasi-coherent ([[def-quasi-coherent-module-scheme]]) if
and only if there exists an affine open cover $X=\bigcup_iU_i$ such that for
every $i$ the restriction $\mathcal F|_{U_i}$ is isomorphic, as a sheaf of
$\mathcal O_{U_i}$-modules, to the associated sheaf $\widetilde{M_i}$ of some
$\mathcal O_X(U_i)$-module $M_i$
([[def-associated-sheaf-module-affine-scheme]],
[[thm-associated-module-sheaf-exists]]).

If these equivalent conditions hold, then for every affine open
$U=\operatorname{Spec}A$ of $X$ the sheaf $\mathcal F|_U$ is canonically
isomorphic to $\widetilde{\Gamma(U,\mathcal F)}$, and these isomorphisms are
compatible with restrictions in the following sense: for affine open
$W\subseteq U$ with $W=\operatorname{Spec}C$ and ring map $A\to C$, the square

$$\begin{array}{ccc}\widetilde{\Gamma(U,\mathcal F)}|_W&\xrightarrow{\ \cong\ }&\mathcal F|_W\\[2pt]\rho_{U,W}\downarrow&&\downarrow\kappa_W^{-1}\\[2pt]\widetilde{(C\otimes_A\Gamma(U,\mathcal F))}&\xrightarrow{\ \cong\ }&\widetilde{\Gamma(W,\mathcal F)}\end{array}$$

commutes. Here $\kappa_W:\widetilde{\Gamma(W,\mathcal F)}\to\mathcal F|_W$
is the canonical affine comparison, the left vertical map $\rho_{U,W}$ is
the affine-open restriction isomorphism, and the bottom map is induced by
$C\otimes_A\Gamma(U,\mathcal F)\to\Gamma(W,\mathcal F)$, $c\otimes m\mapsto c\cdot m|_W$,
which is an isomorphism; in particular, on overlaps the identifications coming
from any two affine charts agree.

## Facts & Assumptions

**Given:** The Axiom of Choice; a scheme $X$; an $\mathcal O_X$-module
$\mathcal F$; and either an affine open cover $X=\bigcup_iU_i$ with
$\mathcal F|_{U_i}\cong\widetilde{M_i}$ or the hypothesis that $\mathcal F$ is
quasi-coherent.

[F1] Definition and locality of quasi-coherence: $\mathcal F$ is quasi-coherent
if every point has an affine open neighbourhood on which $\mathcal F$ is
associated to a module; the condition is local on $X$ and inherited by
restriction to open subschemes
([[def-quasi-coherent-module-scheme]]).

[F2] Affine equivalence: for an affine scheme $U=\operatorname{Spec}A$ every
quasi-coherent $\mathcal O_U$-module $\mathcal G$ is canonically
$\widetilde{\Gamma(U,\mathcal G)}$, and for all $A$-modules $M,N$ one has
$\operatorname{Hom}_A(M,N)\cong\operatorname{Hom}_{\mathcal O_U}(\widetilde M,\widetilde N)$;
moreover the canonical comparison is natural in the sheaf
([[thm-affine-quasi-coherent-equivalence]],
[[def-associated-sheaf-module-affine-scheme]]).

[F3] Affine-open restriction: for an affine open $W=\operatorname{Spec}C$ of
$\operatorname{Spec}A$ with ring map $A\to C$ and an $A$-module $M$, there is a
canonical isomorphism
$(\widetilde M)|_W\cong\widetilde{(C\otimes_AM)}$ of $\mathcal O_W$-modules,
natural in $M$
([[lem-associated-sheaf-restriction-affine-open]],
[[def-associated-sheaf-module-affine-scheme]]).

[F4] Sheaves of modules are determined by their sections on a basis and by
their restriction maps, and two isomorphisms with the same components on a
basis coincide; the empty scheme carries only the zero sheaf
([[def-sheaf-on-topological-space]], [[def-module-on-ringed-space]]).

[F5] The Axiom of Choice as inherited through [F2] and [F3]
([[def-axiom-of-choice]]).



**Proof technique:** direct; the two conditions are local on affine charts, and compatibility of the identifications is a naturality statement for the affine comparison morphism.

## Proof

1.1 The easy direction: assume $X=\bigcup_iU_i$ is an affine open cover with $\mathcal F|_{U_i}\cong\widetilde{M_i}$ for $\mathcal O_X(U_i)$-modules $M_i$. Every point of $X$ lies in some $U_i$, and $U_i$ is an affine open neighbourhood on which $\mathcal F$ is associated to a module, so the definition [F1] is satisfied and $\mathcal F$ is quasi-coherent. If $X=\varnothing$ the empty cover applies and the only $\mathcal O_X$-module is the zero sheaf, which is quasi-coherent. [F1]

1.2 The converse, chart by chart: assume $\mathcal F$ quasi-coherent and let $U=\operatorname{Spec}A$ be an affine open of $X$. By [F1] the restriction $\mathcal F|_U$ is quasi-coherent on the affine scheme $U$, so by [F2] the canonical comparison morphism $\kappa_U:\widetilde{\Gamma(U,\mathcal F)}\to\mathcal F|_U$ is an isomorphism; in particular, for the members of any affine open cover of $X$ this exhibits $\mathcal F|_{U_i}\cong\widetilde{\Gamma(U_i,\mathcal F)}$, proving the remaining direction of the equivalence. [F1, F2]

2.1 Compatibility with restriction: let $W=\operatorname{Spec}C\subseteq U=\operatorname{Spec}A$ be affine open, with ring map $A\to C$, and let $\kappa_W:\widetilde{\Gamma(W,\mathcal F)}\to\mathcal F|_W$ be the isomorphism of step 1.2. By [F3] applied to the $A$-module $\Gamma(U,\mathcal F)$ there is a canonical isomorphism $(\widetilde{\Gamma(U,\mathcal F)})|_W\cong\widetilde{(C\otimes_A\Gamma(U,\mathcal F))}$, and by naturality of $\kappa$ in [F2] the composite $(\widetilde{\Gamma(U,\mathcal F)})|_W\to\mathcal F|_W$ is obtained from the restriction map $\Gamma(U,\mathcal F)\to\Gamma(W,\mathcal F)$; under the identification $C\otimes_A\Gamma(U,\mathcal F)\cong\Gamma(W,\mathcal F)$ of [F3] (obtained by taking sections over $W$ of the restriction isomorphism followed by $\kappa_U|_W$; it sends $c\otimes m$ to $c\cdot m|_W$) this composite is precisely $\kappa_W$, so the displayed square commutes. [F2, F3, step 1.2]

3.1 Overlaps and choice accounting: if $U,U'$ are affine opens and $W\subseteq U\cap U'$ is affine, step 2.1 applied to the inclusions $W\subseteq U$ and $W\subseteq U'$ shows that the identifications $\mathcal F|_U\cong\widetilde{\Gamma(U,\mathcal F)}$ and $\mathcal F|_{U'}\cong\widetilde{\Gamma(U',\mathcal F)}$ restrict to the same identification on $W$, since both are the canonical comparison $\kappa_W$; hence the identifications are compatible on overlaps. All data used are the restriction maps of $\mathcal F$ and the canonical comparisons, so no choice is made beyond the Axiom of Choice inherited through [F2] and [F3] and recorded in the Statement. [F2, F3, F4, F5, step 2.1] ∎
