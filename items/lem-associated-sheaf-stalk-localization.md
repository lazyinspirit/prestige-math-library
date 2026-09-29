---
id: lem-associated-sheaf-stalk-localization
kind: lemma
title: The stalk of an associated sheaf is the localisation
status: draft
origin: pipeline
deps:
  - thm-associated-module-sheaf-exists
  - def-associated-sheaf-module-affine-scheme
  - thm-stalk-structure-sheaf-prime-localization
  - def-stalk-of-presheaf
  - def-localisation-of-a-module
  - def-affine-scheme-spectrum
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, §§26.5, 26.7, 26.24"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Chapters 6, 14, 17"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
pipeline_run: frontier-36-complete
---

## Statement

Assume the Axiom of Choice, inherited from the existence theorem for the
associated sheaf. Let $A$ be a commutative ring, $M$ an $A$-module,
$X=\operatorname{Spec}A$ and $\mathfrak p\in X$ a prime. Then the canonical map
$$\varphi:(\widetilde M)_{\mathfrak p}\longrightarrow M_{\mathfrak p},\qquad [\text{germ of }s\in\widetilde M(D(f)),\ f\notin\mathfrak p]\longmapsto s/1,$$
where $(\widetilde M)_{\mathfrak p}$ is the stalk of the associated sheaf at
$\mathfrak p$ and $M_{\mathfrak p}$ the localisation of $M$ at the prime
$\mathfrak p$, is an isomorphism of $A_{\mathfrak p}$-modules. It is natural in
$M$: an $A$-linear $u:M\to N$ induces a commuting square with
$\widetilde u_{\mathfrak p}$ on the left and $u_{\mathfrak p}$ on the right. No
Noetherian or finiteness hypothesis on $M$ is made.

## Facts & Assumptions

**Given:** The Axiom of Choice; a commutative ring $A$; an $A$-module $M$; a prime $\mathfrak p\subseteq A$; the associated sheaf $\widetilde M$.

[F1] $\widetilde M$ is a sheaf of $\mathcal O_X$-modules with $\widetilde M(D(f))=M_f$ and restriction maps $\rho_{fg}$ ([[thm-associated-module-sheaf-exists]]).

[F2] The stalk of a sheaf at a point is the filtered colimit of the section modules over a cofinal system of open neighbourhoods; the distinguished opens containing $\mathfrak p$ are cofinal among the neighbourhoods of $\mathfrak p$ ([[def-stalk-of-presheaf]], [[def-affine-scheme-spectrum]]).

[F3] In the localisation $S^{-1}N$ of a module, $m/s=n/t$ if and only if $u(tm-sn)=0$ for some $u\in S$; the canonical map is $m\mapsto m/1$, and $\mathcal O_{X,\mathfrak p}\cong A_{\mathfrak p}$ ([[def-localisation-of-a-module]], [[thm-stalk-structure-sheaf-prime-localization]]).

[F4] The restriction maps $\rho_{fg}$ are canonical localisations and $u_f:M_f\to N_f$ commutes with them ([[def-associated-sheaf-module-affine-scheme]]).



**Proof technique:** direct comparison of the cofinal system of distinguished neighborhoods with the localisation.

## Proof

1.1 Define $\varphi$ on germs by choosing a distinguished open $D(f)\ni\mathfrak p$, that is $f\notin\mathfrak p$, and an element $s\in M_f$ representing the germ; send it to the image of $s$ under the canonical localisation $M_f\to M_{\mathfrak p}$ of [F3], the element written $s/1$. This is well defined: a germ has a representative on some distinguished $D(f)\ni\mathfrak p$ by [F2], any two such open sets $D(f),D(g)$ may be compared after passing to $D(fg)\ni\mathfrak p$, and on $D(fg)$ the compatibility law of [F4], $s|_{D(fg)}=\rho_{fg}(s)$, together with the factorisation $M_f\to M_{fg}\to M_{\mathfrak p}$ of localisations, shows that both choices give the same image in $M_{\mathfrak p}$. [F2, F3, F4]

1.2 The map $\varphi$ is $A_{\mathfrak p}$-linear: the stalk $(\widetilde M)_{\mathfrak p}$ is a module over $\mathcal O_{X,\mathfrak p}$, which is $A_{\mathfrak p}$ by [F3], and the localisation maps $M_f\to M_{\mathfrak p}$ are $A_f$-linear, hence $A_{\mathfrak p}$-linear on the colimit. Naturality in $M$ holds because $\widetilde u$ has components $u_f$ on distinguished opens by [F1] and [F4], and $u_f$ is the localisation of $u$, so it commutes with the maps $M_f\to M_{\mathfrak p}$ and $N_f\to N_{\mathfrak p}$. [F1, F3, F4]

1.3 $\varphi$ is surjective: every element of $M_{\mathfrak p}$ is of the form $m/s$ with $s\notin\mathfrak p$, hence lies in the image of the canonical map $M_s\to M_{\mathfrak p}$ by the fraction criterion of [F3]; the element $m/s\in M_s=\widetilde M(D(s))$ has a germ at $\mathfrak p$ that $\varphi$ sends to $m/s$. [F1, F2, F3]

1.4 $\varphi$ is injective: let $s\in M_f$ with $f\notin\mathfrak p$ have image $0$ in $M_{\mathfrak p}$. Write $s=m/f^k$ by [F3]; its image in $M_{\mathfrak p}$ is $m/f^k$, so by the fraction criterion there is $t\notin\mathfrak p$ with $tm=0$. In the localization $M_{ft}$ the element $t$ is invertible, so $m=0$ there and hence $s=m/f^k=0$ there. Since $ft\notin\mathfrak p$, $D(ft)$ is a distinguished neighbourhood of $\mathfrak p$ on which $s$ restricts to zero; therefore its germ is zero. [F2, F3]

2.1 Thus $\varphi$ is a bijective $A_{\mathfrak p}$-linear map, hence an isomorphism of $A_{\mathfrak p}$-modules, and by step 1.2 it is natural in $M$. The Axiom of Choice is inherited from the existence theorem [F1], which supplies $\widetilde M$; the remaining argument makes only finitely many choices of elements and exponents. [F1, step 1.2, step 1.3, step 1.4, given] ∎
