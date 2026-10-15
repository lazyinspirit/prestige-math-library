---
id: thm-hh-finite-hopf-algebras-are-frobenius
kind: theorem
title: "Finite-dimensional Hopf algebras are Frobenius"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 8
deps: [def-hh-hopf-algebra-and-antipode, def-hh-frobenius-functional-and-associative-pairing, def-hh-left-right-integrals-and-integral-functionals, lem-hh-finite-dual-regular-hopf-module-construction, thm-hh-finite-integrals-are-one-dimensional-and-antipode-is-bijective, thm-hh-fundamental-theorem-of-hopf-modules, thm-dual-family-is-a-basis-in-finite-dimension]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
axiom_use: "No Choice is used; only finite-dimensional bases are selected."
sources:
  references:
    - title: "Paolo Saracco, Notes on Hopf Modules, Integrals and Frobenius Hopf Algebras (course notes, 2019)"
      url: "https://paolo.saracco.web.ulb.be/Material/2019-06-12_Structure%20Theorem_course%20notes.pdf"
      locator: "§4.3, Proposition 4.13, Lemma 4.20, and Theorems 4.22–4.24, PDF pp. 23–30: finite-dimensional Hopf algebras and nondegenerate associative Frobenius forms"
    - title: "Erasmus Mini-Course on Hopf Algebras (lecture notes)"
      url: "https://www.fc.up.pt/pessoas/clomp/Adana-lectures.pdf"
      locator: "Lecture 6, Theorems 6.3–6.4 and Definition 6.5, PDF pp. 15–16: the dual-integral module isomorphism, Frobenius forms, and finite-dimensional Hopf algebras"
verification:
  precheck: pass
---

## Statement

Let $H$ be a nonzero finite-dimensional Hopf algebra over a field $k$. For every nonzero left integral functional $\lambda\in\int_{H^*}^{\ell}$, the map
$$
\Phi:H\to H^*,\qquad \Phi(a)(b)=\lambda(ab)
$$
is an isomorphism. Consequently $(a,b)\mapsto\lambda(ab)$ is an associative nondegenerate bilinear form and $H$ is a Frobenius algebra. More explicitly, for every basis $(u_1,\ldots,u_n)$ of $H$ there is a unique basis $(v_1,\ldots,v_n)$ satisfying $\lambda(u_jv_i)=\delta_{ji}$, and
$$
a=\sum_{i=1}^n\lambda(av_i)u_i=\sum_{i=1}^n\lambda(u_i a)v_i\qquad(a\in H).
$$

## Facts & Assumptions

**Given:** A nonzero finite-dimensional Hopf algebra $H$ over a field $k$, a nonzero $\lambda\in\int_{H^*}^{\ell}$, and a basis $(u_1,\ldots,u_n)$ of $H$ with its dual basis $(u_1^*,\ldots,u_n^*)$.

[F1] [[def-hh-frobenius-functional-and-associative-pairing]]: the form $(a,b)\mapsto\lambda(ab)$ is Frobenius when it is nondegenerate in both variables; associativity follows from multiplication in $H$.

[F2] [[def-hh-left-right-integrals-and-integral-functionals]]: $\lambda$ is a left integral functional precisely when $p*\lambda=p(1)\lambda$ for every $p\in H^*$.

[F3] [[thm-hh-finite-integrals-are-one-dimensional-and-antipode-is-bijective]]: $\int_{H^*}^{\ell}$ is one-dimensional and the antipode $S_H$ is bijective.

[F4] [[lem-hh-finite-dual-regular-hopf-module-construction]]: $H^*$ is a right Hopf module with action $(f\leftharpoonup h)(x)=f(xS_H(h))$.

[F5] [[thm-hh-fundamental-theorem-of-hopf-modules]]: the map $\int_{H^*}^{\ell}\otimes H\to H^*$, $\mu\otimes h\mapsto\mu\leftharpoonup h$, is an isomorphism.

[F6] [[thm-dual-family-is-a-basis-in-finite-dimension]]: a finite basis and its dual basis have the coordinate identities $a=\sum_i u_i^*(a)u_i$ and $f=\sum_i f(u_i)u_i^*$.

## Proof
1.1 By [F2]–[F3], the nonzero $\lambda$ spans $\int_{H^*}^{\ell}$. Restricting the isomorphism [F5] to this one-dimensional first factor shows that $h\mapsto\lambda\leftharpoonup h$ is an isomorphism $H\to H^*$. By [F4], this map sends $h$ to the functional $x\mapsto\lambda(xS_H(h))$. Since $S_H$ is bijective, $\Theta:H\to H^*$, $\Theta(b)(x)=\lambda(xb)$, is an isomorphism. [F2, F3, F4, F5, algebra]

2.1 Define $v_i:=\Theta^{-1}(u_i^*)$. Then $\lambda(u_jv_i)=u_i^*(u_j)=\delta_{ji}$. If $\sum_i c_iv_i=0$, applying $u_j\mapsto\lambda(u_j\,\cdot)$ gives $c_j=0$ for every $j$; hence $(v_i)$ is a basis. Writing $a=\sum_i d_i u_i$, the identities in [F6] give $\lambda(av_j)=d_j$, so $a=\sum_i\lambda(av_i)u_i$. Writing instead $a=\sum_i e_i v_i$, the dual-pairing identity gives $\lambda(u_j a)=e_j$, so $a=\sum_i\lambda(u_i a)v_i$. [step 1.1, F6, algebra]

3.1 The first dual-basis identity in step 2.1 implies that if $\Phi(a)=0$, then $\lambda(av_i)=0$ for all $i$ and hence $a=0$; thus $\Phi$ is injective and is surjective because $\dim H=\dim H^*$. The second identity and the fact that $\Theta$ is an isomorphism show nondegeneracy in the other variable as well. Finally, $\lambda((ab)c)=\lambda(a(bc))$ by associativity of multiplication, so the form is associative. Definition [F1] now makes $\lambda$ a Frobenius functional and $H$ a Frobenius algebra. [step 1.1, step 2.1, F1, algebra] ∎
