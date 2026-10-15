---
id: thm-hh-finite-integrals-are-one-dimensional-and-antipode-is-bijective
kind: theorem
title: "Finite Hopf algebras have one-dimensional integral spaces and bijective antipode"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 7
deps: [def-hh-hopf-algebra-and-antipode, def-hh-left-right-integrals-and-integral-functionals, lem-hh-finite-dual-regular-hopf-module-construction, thm-hh-fundamental-theorem-of-hopf-modules, thm-hh-finite-dimensional-dual-hopf-algebra, thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication, thm-hh-finite-algebra-coalgebra-duality, thm-rank-nullity, thm-dual-family-is-a-basis-in-finite-dimension]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
axiom_use: "No Axiom of Choice is used; only finite-dimensional bases and their coordinate functionals are selected."
sources:
  references:
    - title: "Paolo Saracco, Notes on Hopf Modules, Integrals and Frobenius Hopf Algebras (course notes, 2019)"
      url: "https://paolo.saracco.web.ulb.be/Material/2019-06-12_Structure%20Theorem_course%20notes.pdf"
      locator: "§4.1, Lemma 4.2; §4.2, Proposition 4.18 and Remark 4.19, PDF pp. 19–26: one-dimensional integrals and finite-dimensional antipode bijectivity"
    - title: "Erasmus Mini-Course on Hopf Algebras (lecture notes)"
      url: "https://www.fc.up.pt/pessoas/clomp/Adana-lectures.pdf"
      locator: "Lecture 6, Theorem 6.3, PDF p. 16: one-dimensional left/right integrals, antipode bijectivity, and dual-module isomorphism"
verification:
  precheck: pass
---

## Statement

Let $H$ be a nonzero finite-dimensional Hopf algebra over a field $k$. Each of $\int_H^\ell$, $\int_H^r$, $\int_{H^*}^\ell$, and $\int_{H^*}^r$ is one-dimensional. The antipodes of $H$ and $H^*$ are bijective; each sends the left-integral space isomorphically onto the right-integral space.

## Facts & Assumptions

**Given:** A nonzero finite-dimensional Hopf algebra $H$ over a field $k$, its linear dual Hopf algebra $H^*$, and the evaluation pairing $H^*\times H\to k$.

[F1] [[def-hh-left-right-integrals-and-integral-functionals]]: a left integral in a Hopf algebra $K$ satisfies $a t=\varepsilon_K(a)t$ for all $a\in K$; the corresponding right-integral equation is $t a=\varepsilon_K(a)t$.

[F2] [[lem-hh-finite-dual-regular-hopf-module-construction]]: for every finite-dimensional Hopf algebra $K$, $K^*$ is a right-right Hopf module whose coinvariants are $\int_{K^*}^{\ell}$, and the action is $(f\leftharpoonup a)(x)=f(xS_K(a))$.

[F3] [[thm-hh-fundamental-theorem-of-hopf-modules]]: for a right-right Hopf module $M$, the action map $M^{\operatorname{co}K}\otimes K\to M$, $m\otimes a\mapsto ma$, is a vector-space isomorphism.

[F4] [[thm-hh-finite-dimensional-dual-hopf-algebra]]: the full dual of a finite-dimensional Hopf algebra is a Hopf algebra, with antipode the transpose of the original antipode.

[F5] [[thm-hh-finite-algebra-coalgebra-duality]]: for finite-dimensional $H$, evaluation $H\to H^{**}$ is an algebra and coalgebra isomorphism; it preserves multiplication and counit, so it transports the left-integral equations.

[F6] [[thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication]]: $S(ab)=S(b)S(a)$ and $\varepsilon S=\varepsilon$; the same identities hold for the dual Hopf algebra.

[F7] [[thm-rank-nullity]]: for a linear endomorphism of a finite-dimensional vector space, injectivity implies surjectivity.

[F8] [[thm-dual-family-is-a-basis-in-finite-dimension]]: the dual of a finite basis is a basis, so $\dim_k H^*=\dim_k H$.

## Proof

1.1 Apply [F2] and [F3] to $K=H$. The action map $\int_{H^*}^{\ell}\otimes H\to H^*$ is an isomorphism, so $(\dim\int_{H^*}^{\ell})(\dim H)=\dim H^*$. Since $0<\dim H=\dim H^*$ by [F8], division by this positive integer gives $\dim\int_{H^*}^{\ell}=1$; in particular this integral space contains a nonzero $\lambda$. [given, F2, F3, F8, algebra]

1.2 Apply [F2]–[F3] to $K=H^*$, which is a finite-dimensional Hopf algebra by [F4]. Its Hopf-module isomorphism gives $(\dim\int_{H^{**}}^{\ell})(\dim H^*)=\dim H^{**}$; applying [F8] to $H$ and $H^*$ gives $\dim H^{**}=\dim H^*$, so $\dim\int_{H^{**}}^{\ell}=1$. Choose a nonzero $\mu\in\int_{H^{**}}^{\ell}$. If $S_{H^*}(f)=0$, the action formula [F2] gives $\mu\leftharpoonup f=0$; injectivity of the Hopf-module isomorphism forces $\mu\otimes f=0$. Since $\mu$ is a basis of the one-dimensional space, its dual basis functional takes $\mu$ to $1$ by [F8], and applying that functional to the first tensor factor gives $f=0$. Thus $S_{H^*}$ is injective and hence bijective by [F7]. The evaluation algebra and coalgebra isomorphism [F5] carries the left-integral equations between $H$ and $H^{**}$, so $\dim\int_H^{\ell}=1$. [F2, F3, F4, F5, F7, F8, choose, algebra]

2.1 If $S_H(h)=0$, then $(\lambda\leftharpoonup h)(x)=\lambda(xS_H(h))=0$ for every $x$, so the isomorphism in step 1.1 sends $\lambda\otimes h$ to zero. Its injectivity gives $\lambda\otimes h=0$. Since $\lambda$ is a basis of the one-dimensional space $\int_{H^*}^{\ell}$, its dual basis functional $q$ satisfies $q(\lambda)=1$ by [F8]; applying $q\otimes\mathrm{id}_H$ yields $h=0$. Thus $S_H$ is injective, and [F7] makes it bijective. [step 1.1, F2, F3, F7, F8, choose, algebra]

3.1 For either $K=H$ or $K=H^*$, bijectivity of $S_K$ and anti-multiplicativity show that $S_K$ sends left integrals to right integrals: for $t\in\int_K^\ell$ and $a\in K$, apply $S_K$ to $S_K^{-1}(a)t=\varepsilon_K(a)t$ and use $\varepsilon_KS_K^{-1}=\varepsilon_K$ to obtain $S_K(t)a=\varepsilon_K(a)S_K(t)$. Conversely, for $r\in\int_K^r$, applying $S_K$ to $rS_K^{-1}(a)=\varepsilon_K(a)r$ gives $aS_K(r)=\varepsilon_K(a)S_K(r)$. The first inclusion makes the right-integral space nonzero and at least one-dimensional; the second inclusion and injectivity make its dimension at most the one-dimensional left-integral space. Hence it is one-dimensional and $S_K(\int_K^\ell)=\int_K^r$. [F1, F6, step 1.2, step 2.1, algebra] ∎
