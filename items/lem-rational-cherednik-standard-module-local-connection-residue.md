---
id: lem-rational-cherednik-standard-module-local-connection-residue
kind: lemma
title: "The standard-module KZ connection has the reflection residue"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 11
deps:
  - def-rational-cherednik-reflection-data-and-parameters
  - def-rational-cherednik-algebra
  - def-rational-cherednik-standard-module
  - lem-rational-cherednik-dunkl-localization-and-flat-connection
  - def-rational-cherednik-kz-functor-and-finite-hecke-algebra
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof and Xiaoguang Ma, Lecture Notes on Cherednik Algebras"
      url: "https://arxiv.org/pdf/1001.0432"
      locator: "§§3.7 and 6.2, standard modules and the local KZ residue, PDF pp. 18 and 45–46. The local proof below fixes the sign from the present commutator convention."
    - title: "Victor Ginzburg, Nicolas Guay, Eric Opdam, and Raphael Rouquier, On the category O for rational Cherednik algebras"
      url: "https://arxiv.org/pdf/math/0212036"
      locator: "§5.2.2, the connection on induced modules, PDF pp. 18–19."
verification:
  precheck: pending
---

## Statement

Let $E$ be a finite-dimensional $W$-module and let $\Delta_c(E)=\mathbb C[\mathfrak h^*]\otimes E$ be its standard module under the PBW identification. The localized differential-operator connection on this module is
$$\nabla=d+\sum_{s\in S}c_s\,\frac{d\alpha_s}{\alpha_s}(1-s_E),$$
where $s_E$ is the given linear action on $E$. At a generic point of a reflecting hyperplane $H$, its logarithmic residue is
$$R_H=\sum_{\ell=1}^{e_H-1}c_{H,\ell}(1-s_H^\ell)\quad\text{on }E.$$
Thus on the $s_H$-character with eigenvalue $\zeta_H^j$, the residue acts by $r_{H,j}$ of [[def-rational-cherednik-kz-functor-and-finite-hecke-algebra]].

## Facts & Assumptions

**Given:** The presentation of $H_{1,c}$, the standard module $\Delta_c(E)$, and the Dunkl localization.

[F1] [[def-rational-cherednik-reflection-data-and-parameters]]: $x-sx=\alpha_s^\vee(x)\alpha_s$ and the parameters are conjugacy invariant.

[F2] [[def-rational-cherednik-algebra]]: $[y,x]=x(y)-\sum_s c_s\alpha_s(y)\alpha_s^\vee(x)s$; the polynomial generators commute and $s$ acts on the polynomial algebra by the contragredient action.

[F3] [[def-rational-cherednik-standard-module]]: $\Delta_c(E)=H_{1,c}\otimes_{\mathbb C[\mathfrak h]\rtimes\mathbb CW}E$, every $y$ kills $E$, and PBW identifies it with $P\otimes E$.

[F4] [[lem-rational-cherednik-dunkl-localization-and-flat-connection]]: in the localization, $y$ maps to $T_y=\partial_y-\sum_s c_s\alpha_s(y)\alpha_s^{-1}(1-s)$, so the differential-operator generator is $\partial_y=y+\sum_s c_s\alpha_s(y)\alpha_s^{-1}(1-s)$.

[F5] [[def-rational-cherednik-kz-functor-and-finite-hecke-algebra]]: $W_H=\langle s_H\rangle$ has order $e_H$, $s_H$ acts by $\zeta_H$ on the conormal line, and $r_{H,j}=\sum_{\ell=1}^{e_H-1}c_{H,\ell}(1-\zeta_H^{j\ell})$.

## Proof

**Proof technique:** direct.

**Given:** [F1]–[F5].

1.1 For $f\in P$, the relation with a generator $x\in\mathfrak h^*$ gives $[y,x]=x(y)-\sum_s c_s\alpha_s(y)\frac{x-sx}{\alpha_s}s$. The same formula for products follows from $[y,fg]=[y,f]g+f[y,g]$ and $\frac{fg-s(fg)}{\alpha_s}=\frac{f-sf}{\alpha_s}s(g)+f\frac{g-sg}{\alpha_s}$. Induction on polynomial degree gives $[y,f]=\partial_yf-\sum_s c_s\alpha_s(y)\frac{f-sf}{\alpha_s}s$. Each quotient is polynomial because $f-sf$ vanishes on the reflecting hyperplane of $s$. [F1, F2, construct, algebra]

2.1 Since $y(1\otimes v)=0$ in the induced module, step 1.1 gives $y(f\otimes v)=\partial_y(f)\otimes v-\sum_s c_s\alpha_s(y)\frac{f-sf}{\alpha_s}\otimes s v$. The final $s$ acts on the $E$ factor because the group element in the commutator acts on the inducing vector. [F3, step 1.1, algebra]

3.1 Add the correction term in [F4]. On $f\otimes v$, $(1-s)(f\otimes v)=f\otimes v-sf\otimes sv$. Combining this with step 2.1 cancels the terms containing $sf\otimes sv$ and yields $\partial_y(f\otimes v)=\partial_y(f)\otimes v+\sum_s c_s\alpha_s(y)\frac{f}{\alpha_s}\otimes(1-s)v$. This is the connection $d+\sum_s c_s(d\alpha_s/\alpha_s)(1-s_E)$ in the stated trivialization. [F4, step 2.1, algebra]

4.1 At a point of $H$ outside the other reflecting hyperplanes, every $\alpha_s$ with fixed hyperplane different from $H$ is nonzero, so its connection term is holomorphic there and has zero logarithmic residue. The reflections with fixed hyperplane $H$ are exactly $s_H^\ell$, $1\le\ell<e_H$; for each, $\alpha_{s_H^\ell}$ is a nonzero scalar multiple of $\alpha_H$, so $d\alpha_{s_H^\ell}/\alpha_{s_H^\ell}=d\alpha_H/\alpha_H$. The coefficient of this logarithmic form is therefore $R_H=\sum_{\ell=1}^{e_H-1}c_{H,\ell}(1-s_H^\ell)$. [F1, F5, step 3.1, algebra]

5.1 Since $W_H$ is cyclic over $\mathbb C$, its representation on $E$ is a direct sum of eigenspaces. On the eigenspace where $s_H$ acts by $\zeta_H^j$, each $s_H^\ell$ acts by $\zeta_H^{j\ell}$, so $R_H$ acts by $r_{H,j}$. [F5, step 4.1, algebra] ∎
