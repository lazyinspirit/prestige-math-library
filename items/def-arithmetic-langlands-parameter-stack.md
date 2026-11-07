---
id: def-arithmetic-langlands-parameter-stack
kind: definition
title: "Arithmetic Langlands parameter stack and supercuspidal parameters"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-weil-group-of-a-local-field
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Helm, Maarten Solleveld, and Yujie Xu, A Generic Categorical Local Langlands Correspondence for Quasi-split Reductive Groups, §§1.5, 3.1, and 4.2–4.3"
      url: "https://arxiv.org/pdf/2606.10149v2"
    - title: "Dat, Helm, Kurinczuk and Moss, Moduli of Langlands parameters, arXiv:2009.06708v3, §§1.1–1.2"
      url: "https://arxiv.org/pdf/2009.06708v3"
verification:
  precheck: n/a
---

## Definition

Let $E$ be a nonarchimedean local field with residue field of cardinality $q$,
and let $G/E$ be a connected reductive group with an $E$-defined Borel subgroup
$B$ and maximal torus $T\subseteq B$. A standard parabolic subgroup contains
$B$, and a standard Levi subgroup is a Levi factor containing $T$. The complex
dual group $\widehat G$ has the dual root datum (its character lattice is the
cocharacter lattice of $T$, its cocharacter lattice is the character lattice
of $T$, and roots and coroots are interchanged); its $W_E$-action is induced
by the Galois action on the based root datum. Set
${}^LG=\widehat G\rtimes W_E$. Use the geometric Frobenius convention of
Helm–Solleveld–Xu: the unramified norm character $\|\cdot\|:W_E\to\mathbb
R_{>0}$ satisfies $\|\mathrm{Fr}_{\mathrm{geom}}\|=q^{-1}$, so its value on
the arithmetic Frobenius coset fixed in the Weil-group definition is $q$.

A **Langlands parameter** for $G$ is a pair $(\rho,N)$ in which
$\rho:W_E\to{}^LG$ is an $L$-homomorphism with projection to $W_E$ equal to the identity. Write $\rho(w)=(c(w),w)$. Its coefficient map is a $1$-cocycle, so $c(uv)=c(u)\,u(c(v))$. For this smooth Weil part, require $c:W_E\to\widehat G(\mathbb C)$ to be continuous with the coefficient group given the discrete topology. Equivalently there is an open subgroup $J\subseteq I_E$ on which the based-root-datum action is trivial and $c(J)=1$, so $\rho(j)=(1,j)$ for $j\in J$. No openness of the ordinary group kernel of $\rho$ is required. The second entry $N\in\operatorname{Lie}(\widehat G)$ is nilpotent and satisfies
$\operatorname{Ad}_{\rho(w)}N=\|w\|N$ for every $w\in W_E$. Let
$\widetilde X_G^L$ be the moduli scheme of these parameters. The **arithmetic
Langlands parameter stack** is the quotient stack
$X_G^L=[\widetilde X_G^L/\widehat G]$ for conjugation by $\widehat G$.
Define $X_M^L$ in the same way for each standard Levi $M$. For a standard
parabolic $P=MU_P$, define $X_P^L$ by the analogous construction for its
dual $L$-group and let $r_P:X_P^L\to X_M^L$ and
$\pi_P:X_P^L\to X_G^L$ be induced by the inclusions of the dual $L$-groups.
The spectral parabolic-induction functor is the derived functor
$(\pi_P)_*r_P^*$ on ind-coherent sheaves; $\operatorname{IndCoh}(X)$ denotes
the ind-completion of the category of bounded coherent complexes with
quasi-compact support on a derived stack $X$.

A parameter is **discrete** if the pair does not factor through any proper Levi subgroup of ${}^LG$: after conjugation, factoring requires both the image of $\rho$ to lie in that Levi and $N$ to lie in the Lie algebra of its dual Levi factor. A **supercuspidal Langlands parameter**
is a discrete Langlands parameter with $N=0$.

## Definition references

[[def-weil-group-of-a-local-field]]

[David Helm, Maarten Solleveld, and Yujie Xu, *A Generic Categorical Local Langlands Correspondence for Quasi-split Reductive Groups*, §§1.5, 3.1, and 4.2–4.3](https://arxiv.org/pdf/2606.10149v2)


## Local cocycle dictionary and limits

The identity $\rho(uv)=\rho(u)\rho(v)$ in the semidirect product is exactly $c(uv)=c(u)\,u(c(v))$, so $L$-homomorphisms with identity projection and coefficient cocycles determine each other. The based-root-datum action factors through a finite Galois quotient: its continuous action on the finite-rank character lattice has open kernel after stabilizing a finite basis. Thus, if $c$ is continuous for the discrete coefficient topology, the neighborhood $c^{-1}(1)$ contains an open subgroup of inertia which can be intersected with that action kernel to obtain $J$. Conversely $c(wj)=c(w)$ for $j\in J$, so $c$ is locally constant on the open right $J$-cosets. Such a $J$ has finite index in inertia, and hence the inertial coefficient image is finite. The condition is preserved under $\widehat G$-conjugacy: after intersecting with the action kernel, the conjugated cocycle still equals $1$ on $J$.

The ordinary kernel of $\rho$ is $\{1\}$ because its projection is the identity. Interpreting the words “open kernel” in Helm–Solleveld–Xu §3.1 literally for that full semidirect-product map would therefore force the Weil group to be discrete. The smooth coefficient condition above makes the intended Weil–Deligne pair precise; the nilpotent $N$ and its displayed relation are retained. In particular it does not remove the tame unipotent information recorded by $N$.

Dat–Helm–Kurinczuk–Moss §1.2 uses a subgroup $W_E^0$ with a finer topology that discretizes tame inertia and treats coefficient cocycles there. Their raw $\ell$-adic parameters and their moduli functor are not identified here with these smooth $W_E$-pairs merely by the elementary dictionary. The present check establishes the typed pair and cocycle condition only. Representability of $\widetilde X_G^L$, the quotient-stack and derived-functor constructions, and their comparison with the raw parameter moduli problem remain held; no categorical local Langlands theorem or moduli representability proof is supplied.

[Dat, Helm, Kurinczuk and Moss, *Moduli of Langlands parameters*, §§1.1–1.2](https://arxiv.org/pdf/2009.06708v3)
