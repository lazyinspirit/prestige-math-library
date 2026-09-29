---
id: lem-extend-sections-from-nonvanishing-open
kind: lemma
title: "Extend a quasi-coherent section after multiplying by a power"
status: published
origin: pipeline
deps:
  - lem-section-nonvanishing-affine-intersection
  - thm-affine-quasi-coherent-equivalence
  - def-quasi-compact-and-quasi-separated-scheme
  - def-axiom-of-choice
  - def-invertible-sheaf
  - def-quasi-coherent-module-scheme
  - lem-associated-sheaf-sections-basic-open
  - prop-localisation-zero-equality-and-kernel-criteria
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Properties of Schemes, Lemma 28.18.2 (Tag 01PW)"
      url: https://stacks.math.columbia.edu/tag/01PW
    - title: "Ravi Vakil, The Rising Sea, August 2022 draft, Section 17.6"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice as inherited from the affine quasi-coherence
equivalence and the associated-sheaf construction
([[def-axiom-of-choice]]). Let $X$ be a quasi-compact and quasi-separated
scheme ([[def-quasi-compact-and-quasi-separated-scheme]]), let $F$ be a
quasi-coherent $\mathcal O_X$-module ([[def-quasi-coherent-module-scheme]]),
let $L$ be an invertible sheaf ([[def-invertible-sheaf]]) and let
$s\in\Gamma(X,L^d)$ with $d>0$. Denote by
$$\Gamma_*(X,F,L)=\bigoplus_{r\ge0}\Gamma(X,F\otimes_{\mathcal O_X}L^{dr})$$
the graded module on which multiplication by $s$ raises degree by one,
and let $\Gamma_*(X,F,L)_{(s)}$ be its localisation at $s$, with degree-zero
part $\bigl(\Gamma_*(X,F,L)_{(s)}\bigr)_0$ consisting of the fractions $a/s^r$
with $a\in\Gamma(X,F\otimes L^{dr})$.

Then:

1. Every section $t\in\Gamma(X_s,F|_{X_s})$ extends after multiplying by a
   power of $s$: there are $r\ge0$ and $a\in\Gamma(X,F\otimes L^{dr})$ whose
   image under the canonical map $\Gamma(X,F\otimes L^{dr})\to\Gamma(X_s,F)$,
   induced by restriction and the identification $L^{dr}|_{X_s}$ with
   $\mathcal O_{X_s}$ through $s^{-r}$, is $t$.
2. Equivalently, the canonical map
   $$\bigl(\Gamma_*(X,F,L)_{(s)}\bigr)_0\longrightarrow\Gamma(X_s,F),\qquad a/s^r\longmapsto a\otimes s^{-r}|_{X_s},$$
   is an isomorphism of abelian groups.

The empty cases are included: if $X=\varnothing$ or $X_s=\varnothing$ both sides
of (2) are zero.

## Facts & Assumptions

**Given:** A quasi-compact quasi-separated scheme $X$, a quasi-coherent sheaf $F$, an invertible sheaf $L$, an integer $d>0$, a section $s\in\Gamma(X,L^d)$, and the Axiom of Choice.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] $X$ is quasi-compact, and quasi-separated means that the intersection of every two affine open subschemes is quasi-compact. ([[def-quasi-compact-and-quasi-separated-scheme]])

[F2] An invertible $\mathcal O_X$-module is locally free of rank exactly one; hence there is a finite affine open cover $X=U_1\cup\dots\cup U_m$ such that $L|_{U_j}\cong\mathcal O_{U_j}$ for every $j$. ([[def-invertible-sheaf]])

[F3] For an affine scheme $\operatorname{Spec}A$ the functors $M\mapsto\widetilde M$ and $F\mapsto\Gamma(\operatorname{Spec}A,F)$ are quasi-inverse equivalences between $A$-modules and quasi-coherent sheaves, so a quasi-coherent $F$ on $U_j=\operatorname{Spec}A_j$ satisfies $F|_{U_j}\cong\widetilde{M_j}$ with $M_j=\Gamma(U_j,F)$. ([[thm-affine-quasi-coherent-equivalence]])

[F4] For an $A$-module $M$ and $f\in A$ one has $\Gamma(D(f),\widetilde M)=M_f$ naturally, and restrictions are further localisations. ([[lem-associated-sheaf-sections-basic-open]])

[F5] In a localisation, $x/s^n=0$ if and only if $s^e x=0$ for some $e\ge0$. ([[prop-localisation-zero-equality-and-kernel-criteria]])

[F6] For an affine open $U\subseteq X$ and a section of an invertible sheaf, $U\cap X_s$ is affine. ([[lem-section-nonvanishing-affine-intersection]])

## Proof

**Proof technique:** direct: reduce to a finite affine trivialising cover, compare the two sides on each affine piece using the localisation description of sections, prove injectivity by clearing denominators, and glue the corrected local extensions using quasi-separatedness.

1.1 A trivialising affine cover. If $X=\varnothing$, both $\Gamma(X_s,F)$ and the degree-zero part of the localisation of the zero graded module are zero, so the assertion holds. Henceforth assume $X\ne\varnothing$. By [F2] choose a finite affine open cover $X=U_1\cup\dots\cup U_m$ with $L|_{U_j}\cong\mathcal O_{U_j}$; fix trivialising sections $q_j\in\Gamma(U_j,L)$. Write $s|_{U_j}=f_jq_j^{d}$ with $f_j\in\Gamma(U_j,\mathcal O_X)$. Since $q_j$ is a nowhere-vanishing trivialising section, the image of $s$ at a point $x\in U_j$ is $f_j(x)$ times the nonzero image of $q_j^{d}$, so $$X_s\cap U_j=D(f_j)\subseteq U_j=\operatorname{Spec}A_j,$$ a distinguished affine open of $U_j$, and the $X_s\cap U_j$ cover $X_s$. [F2, F6, algebra]

2.1 The two sides on one chart. Put $M_j=\Gamma(U_j,F)$; by [F3] $F|_{U_j}\cong\widetilde{M_j}$, so by [F4] $\Gamma(X_s\cap U_j,F)=(M_j)_{f_j}$, while the trivialisation $q_j$ identifies $\Gamma(U_j,F\otimes L^{dr})$ with $M_j$. Under these identifications the restriction of a fraction $a/s^r$ with $a\in\Gamma(X,F\otimes L^{dr})$ is $a_j/f_j^r$, where $a_j\in M_j$ is the image of $a$ through $q_j^{-dr}$. [F3, F4, step 1.1]

2.2 Local extensions. Let $t\in\Gamma(X_s,F)$. For every $j$ the restriction $t|_{D(f_j)}\in(M_j)_{f_j}$ is of the form $t_j/f_j^{e_j}$ with $t_j\in M_j$ and $e_j\ge0$ by [F4]; set $e=\max_je_j$ and $t_j'=f_j^{e-e_j}t_j\in M_j$, so $t|_{D(f_j)}=t_j'/f_j^{e}$. Define $$\tau_j=t_j'\otimes q_j^{de}\in\Gamma(U_j,F\otimes L^{de}),$$ a section whose restriction to $D(f_j)=X_s\cap U_j$ satisfies $\tau_j\otimes s^{-e}=t$ under the identification of $L^{de}|_{X_s\cap U_j}$ with $\mathcal O$ through $s^{-e}$: indeed $s^e|_{U_j}=f_j^eq_j^{de}$. [F4, step 1.1, algebra]

3.1 Injectivity, affine chartwise. Suppose $a/s^r$ maps to zero in $\Gamma(X_s,F)$. By step 2.1, for every $j$ the class $a_j/f_j^r\in(M_j)_{f_j}$ is zero, so by [F5] there is $e_j\ge0$ with $f_j^{e_j}a_j=0$. With $e=\max_je_j$ the section $a\otimes s^{e}\in\Gamma(X,F\otimes L^{d(r+e)})$ restricts to $f_j^{e}a_j\cdot q_j^{d(r+e)}=0$ on every $U_j$, hence is zero; and $a/s^r=(a\otimes s^{e})/s^{r+e}$ in the localisation. Hence the map of (2) is injective. [F5, step 2.1]

4.1 Injectivity consequence for a quasi-compact open. The same argument applies to any quasi-compact open subscheme $W\subseteq X$ with its induced invertible sheaf $L|_W$ and section $s|_W$: if $u\in\Gamma(W,F\otimes L^{n})$ restricts to zero on $W\cap X_s$, then $u\otimes s^{e}=0$ in $\Gamma(W,F\otimes L^{n+de})$ for some $e\ge0$. Choose a finite affine open cover of the quasi-compact space $W$ on which $L|_W$ is trivial; such a cover exists by the same local-triviality and quasi-compactness argument as in step 1.1. On each affine chart the localisation criterion [F5] gives an exponent annihilating the local representative of $u$ after multiplication by the local representative of $s$. The maximum of these finitely many exponents works on all charts, hence on $W$. [F1, F2, F5, step 3.1]

5.1 Overlap correction. Let $j,j'$. By [F1] the intersection $U_j\cap U_{j'}$ is quasi-compact, and by step 4.1 applied to $W=U_j\cap U_{j'}$ to the section $\tau_j|_{W}-\tau_{j'}|_{W}\in\Gamma(W,F\otimes L^{de})$, which restricts to zero on $W\cap X_s$ by step 2.2, there is $e'\ge0$ with $$(\tau_j-\tau_{j'})\otimes s^{e'}=0\quad\text{on }U_j\cap U_{j'}.$$ There are finitely many pairs $(j,j')$, so one exponent $e'$ works for all of them. Thus the sections $\tau_j\otimes s^{e'}\in\Gamma(U_j,F\otimes L^{d(e+e')})$ agree on all pairwise intersections. [F1, step 4.1, step 2.2]

6.1 Gluing. Since the $U_j$ cover $X$ and the sections $\tau_j\otimes s^{e'}$ agree on overlaps, they glue to a unique global section $$\sigma\in\Gamma(X,F\otimes L^{d(e+e')}),$$ whose restriction to $X_s\cap U_j=D(f_j)$ satisfies $\sigma\otimes s^{-(e+e')}=t$ by step 2.2. Hence $t$ is the image of the fraction $\sigma/s^{e+e'}\in(\Gamma_*(X,F,L)_{(s)})_0$, which proves surjectivity of the map in (2). [step 2.2, step 5.1]

7.1 Conclusion. Step 3.1 gives injectivity and step 6.1 surjectivity of the canonical map of (2), and part (1) is exactly its surjectivity read on representatives. If $X=\varnothing$ or $X_s=\varnothing$ then $\Gamma(X_s,F)=0$ and the localisation has no nonzero degree-zero part by step 3.1, so both sides vanish. The Axiom of Choice [A1] is inherited only through the affine quasi-coherence equivalence [F3]; only finitely many local representatives and covers are selected in the argument. [A1, F3, step 3.1, step 6.1]
\qed
