---
id: def-principal-series-module-for-finite-gl-n
kind: definition
title: "The principal series module for finite GL_n"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-diagonal-torus-characters-and-weyl-action
  - def-harish-chandra-induction-and-restriction-for-finite-gl-n
  - def-induced-r-linear-g-module-by-h-covariant-functions
  - thm-levi-decomposition-of-standard-parabolics-in-gl-n-fq
  - cor-dimension-of-an-induced-finite-dimensional-representation
  - def-compositions-partial-flags-and-standard-parabolics
  - def-standard-subgroups-of-gl-n-over-a-finite-field
  - thm-complete-flags-form-gl-n-over-b
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Masao Oi, Representation Theory of Finite Groups of Lie Type - Definition 2.6 (the principal series representation Ind_B^G chi for a character chi of the torus), printed p. 11"
      url: "https://masaooi.github.io/DL.pdf"
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Section 11.1 (Harish-Chandra induction from the torus), printed pp. 45-46"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Section 5 (Harish-Chandra induction from a split Levi), printed pp. 42-46"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $n\ge1$, let $q$ be a prime power, put $G=\operatorname{GL}_n(\mathbb F_q)$
with standard Borel $B=T\ltimes U$ and diagonal torus $T$, and let
$\chi\in\widehat T$ be a character of $T$
([[def-standard-subgroups-of-gl-n-over-a-finite-field]],
[[def-diagonal-torus-characters-and-weyl-action]]). Since
$B=T\ltimes U$ and $T\cong B/U$
([[thm-levi-decomposition-of-standard-parabolics-in-gl-n-fq]],
[[def-compositions-partial-flags-and-standard-parabolics]]), the projection
$\pi:B\to T$, $\pi(lu)=l$, is a surjective homomorphism with kernel $U$. The
**inflation** of $\chi$ from $T$ to $B$ is the character
$$\widetilde\chi:=\chi\circ\pi:B\longrightarrow\mathbb C^\times,\qquad \widetilde\chi(lu)=\chi(l),$$
which is trivial on $U$
([[def-harish-chandra-induction-and-restriction-for-finite-gl-n]]).

The **principal series module** attached to $\chi$ is the complex $G$-module
$$I(\chi):=R_T^G(\chi)=\operatorname{Ind}_B^G\bigl(\operatorname{Inf}_T^B\chi\bigr)= \{\,f:G\to\mathbb C\ :\ f(gb)=\widetilde\chi(b)^{-1}f(g)\ \ \forall\,g\in G,\ b\in B\,\},$$
with addition and scalar multiplication pointwise and
$(g_0\cdot f)(g):=f(g_0^{-1}g)$
([[def-induced-r-linear-g-module-by-h-covariant-functions]]); here $R_T^G$ is
Harish-Chandra induction from the split Levi $T$ with respect to $B$
([[def-harish-chandra-induction-and-restriction-for-finite-gl-n]]). Equivalently
$I(\chi)=\operatorname{Ind}_B^G(\widetilde\chi)$, the induction of the
one-dimensional $B$-module $\mathbb C_{\widetilde\chi}$.

**Dimension.** Since $\dim_{\mathbb C}\mathbb C_{\widetilde\chi}=1$, the
dimension formula for induced representations gives
$\dim_{\mathbb C}I(\chi)=[G:B]$
([[cor-dimension-of-an-induced-finite-dimensional-representation]]). The index
$[G:B]$ is the number of complete flags of $\mathbb F_q^n$
([[thm-complete-flags-form-gl-n-over-b]]), and it equals
$\prod_{i=1}^n\frac{q^i-1}{q-1}$: choosing the columns of a matrix in $G$
successively gives
$|G|=(q^n-1)(q^n-q)\cdots(q^n-q^{n-1})=q^{n(n-1)/2}\prod_{i=1}^n(q^i-1)$,
while $|B|=(q-1)^nq^{n(n-1)/2}$ as recorded in
[[def-standard-subgroups-of-gl-n-over-a-finite-field]], and the quotient is the
displayed product. In particular $I(1)=R_T^G(1)$ for the trivial character $1$
of $T$.

**Dependence on $\chi$.** The module $I(\chi)$ depends on the chosen
representative $\chi$ of its $S_n$-orbit, and the relation between the modules
$I(\chi)$ and $I(w\cdot\chi)$ for $w\in S_n$ is examined together with the
endomorphism algebra of $I(\chi)$ in the results below; the definition itself
fixes one character and one module.
