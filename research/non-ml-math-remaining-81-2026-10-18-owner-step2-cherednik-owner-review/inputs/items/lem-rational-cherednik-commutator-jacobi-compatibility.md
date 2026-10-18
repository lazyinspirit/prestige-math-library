---
id: lem-rational-cherednik-commutator-jacobi-compatibility
kind: lemma
title: "The rational Cherednik commutator satisfies Jacobi compatibility"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-rational-cherednik-reflection-data-and-parameters, def-rational-cherednik-algebra]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof and Victor Ginzburg, Symplectic reflection algebras, Calogero–Moser space, and deformed Harish-Chandra homomorphism"
      url: "https://arxiv.org/pdf/math/0011114"
      locator: "§2, proof of Theorem 1.3, PDF pp. 13–14: reduction of the PBW condition to the Jacobi identity and reflection terms."
    - title: "Victor Ginzburg, Nicolas Guay, Eric Opdam, and Raphael Rouquier, On the category O for rational Cherednik algebras"
      url: "https://arxiv.org/pdf/math/0212036"
      locator: "§3.1, PDF pp. 9–10: reflection commutator parameters."
verification:
  precheck: pass
---

## Statement

For the reflection data of [[def-rational-cherednik-reflection-data-and-parameters]] and the quotient presentation of [[def-rational-cherednik-algebra]], let
$$\kappa(u,v)=t\omega(u,v)1-\sum_{s\in S}c_s\omega_s(u,v)s\qquad(u,v\in\mathfrak V).$$
Then $\kappa$ is $W$-equivariant, and its values satisfy
$$[u,\kappa(v,w)]+[v,\kappa(w,u)]+[w,\kappa(u,v)]=0\qquad(u,v,w\in\mathfrak V),$$
where each bracket with a group-algebra element is computed using $[u,s]=(u-s(u))s$.

## Facts & Assumptions

**Given:** The finite complex reflection group $W$, its reflection representation $\mathfrak h$, the reflection parameters $c$, the forms $\omega,\omega_s$, and $\kappa$ as defined in the two linked items.

[F1] [[def-rational-cherednik-reflection-data-and-parameters]]: $W$ acts on $\mathfrak V=\mathfrak h\oplus\mathfrak h^*$ preserving $\omega$; for each reflection $s$, $\mathfrak V=\ker(1-s)\oplus U_s$ with $\dim U_s=2$, and $\omega_s$ has radical $\ker(1-s)$ and is a nonzero alternating form on $U_s$.

[F2] [[def-rational-cherednik-algebra]]: $c$ is constant on conjugacy classes, $\omega_s$ is conjugated to $\omega_{w s w^{-1}}$ by $w$, and the commutator parameter is $\kappa(u,v)=t\omega(u,v)1-\sum_s c_s\omega_s(u,v)s$.

[F3] [[def-rational-cherednik-algebra]]: The smash-product relation gives $s u=s(u)s$ and hence $[u,s]=(u-s(u))s$.

## Proof

**Proof technique:** direct.

**Given:** The data of [F1]–[F3].

1.1 Under $w\in W$, the summand indexed by $s$ in $\kappa(wu,wv)$ is $-c_s\omega_s(wu,wv)s$. Reindex by $r=wsw^{-1}$. Conjugacy invariance gives $c_r=c_s$, and the reflected form satisfies $\omega_r(wu,wv)=\omega_s(u,v)$ by [F1]–[F2]. The identity term is invariant because $w$ preserves $\omega$. Thus $\kappa(wu,wv)=w\kappa(u,v)w^{-1}$. [F1, F2, algebra]

1.2 The scalar term $t\omega(v,w)1$ commutes with $u$. For a fixed reflection $s$, the contribution to the cyclic Jacobi sum is $-c_s\bigl(\omega_s(v,w)(1-s)u+\omega_s(w,u)(1-s)v+\omega_s(u,v)(1-s)w\bigr)s$ by [F3]. [F2, F3, algebra]

2.1 Project $u,v,w$ to $U_s$ along $\ker(1-s)$. On the two-dimensional space $U_s$, for any alternating form $\eta$ and vectors $a,b,d$, one has $\eta(b,d)a+\eta(d,a)b+\eta(a,b)d=0$: the left side is alternating trilinear in a two-dimensional space and therefore vanishes. Apply $1-s$ to this identity with $\eta=\omega_s$; because $\omega_s$ vanishes on the radical, the result is exactly the parenthesized vector in step 1.2. Each reflection contribution is zero, so the cyclic sum vanishes. [F1, step 1.2, algebra] ∎
