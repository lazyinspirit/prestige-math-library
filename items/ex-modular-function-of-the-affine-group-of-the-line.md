---
id: ex-modular-function-of-the-affine-group-of-the-line
kind: example
title: "The modular function of the affine group of the line"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [cor-second-countable-lch-locally-finite-borel-measures-are-regular, def-modular-function-of-a-locally-compact-group, def-unimodular-locally-compact-group, def-left-haar-integral-and-left-haar-measure, def-radon-measure-on-an-lch-space, lem-right-translation-scales-left-haar-measure, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-group, def-locally-compact-space, def-axiom-of-choice, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Bekka, de la Harpe and Valette, Kazhdan’s Property (T), Appendix A §§A.3–A.4"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix A §§A.3–A.4, printed pp. 316–323"
    - title: "Emmanuel Kowalski, Representation Theory of Groups, §§5.2–5.3"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§§5.2–5.3 and Lemma 5.5.2, printed pp. 212–230, 238–239"
verification:
  precheck: pass
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

Let $G:=\{(a,b):a>0,\ b\in\mathbb R\}$ with the multiplication
$$(a,b)(a',b')=(aa',\,b+ab'),$$
the connected component of the identity of the affine group of the line. Then
$d\mu=a^{-2}\,da\,db$ is a left Haar measure on $G$, and the modular function of
$G$ with respect to it is
$$\Delta_G(a,b)=a^{-1}.$$
Since $a\mapsto a^{-1}$ is not identically $1$, the group $G$ is
**nonunimodular** ([[def-unimodular-locally-compact-group]]).

## Facts & Assumptions

**Given:** The group $G=(0,\infty)\times\mathbb R$ with $(a,b)(a',b')=(aa',b+ab')$, the measure $d\mu=a^{-2}\,da\,db$ on it, and AC.

[F1] $G$ is a group with identity $(1,0)$ and inverse $(a,b)^{-1}=(a^{-1},-b/a)$; it is an open subset of $\mathbb R^2$, hence an LCH space for the subspace topology, and multiplication and inversion are continuous ([[def-group]], [[def-locally-compact-space]]).

[F2] A left Haar measure on an LCH group is a nonzero Borel measure that is left invariant, finite on compact sets, outer regular on Borel sets and inner regular on open sets ([[def-left-haar-integral-and-left-haar-measure]], [[def-radon-measure-on-an-lch-space]]).

[F3] With $c(g)$ the unique scalar with $\int_GF(xg)\,d\mu(x)=c(g)\int_GF\,d\mu(x)$ for every nonnegative Borel $F$ and every $\mu$-integrable complex $F$, the modular function is $\Delta_G(g)=c(g^{-1})$, and $G$ is unimodular exactly when $\Delta_G\equiv1$ ([[def-modular-function-of-a-locally-compact-group]], [[def-unimodular-locally-compact-group]], [[lem-right-translation-scales-left-haar-measure]]).

[F4] Under countable choice (in particular under AC), a $C^1$ diffeomorphism $T:U\to V$ between open subsets of $\mathbb R^2$ satisfies $\int_Vf(y)\,dy=\int_Uf(Tx)|\det DT(x)|\,dx$ for nonnegative Lebesgue measurable $f$ ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]).

[F5] $a^{-2}\,da\,db$ denotes the measure $E\mapsto\int_Ea^{-2}\,da\,db$ given by the Lebesgue density $a^{-2}>0$ on the open set $(0,\infty)\times\mathbb R$, and every nonempty open subset of $G$ has strictly positive $\mu$-measure.

[A1] AC is assumed in the choice-function form of the cited definition; it entails the countable choice under which [F4] is stated, and it underlies the well-definedness of the modular function quoted in [F3] ([[def-axiom-of-choice]], [[def-countable-choice]]).

## Verification

**Proof technique:** direct.

1.1 $d\mu=a^{-2}\,da\,db$ is a nonzero Borel measure, finite on compact sets: on a compact $K\subseteq G$ the continuous density $a^{-2}$ attains a maximum, so $\mu(K)\le\max_Ka^{-2}\cdot\lambda_2(K)<\infty$, while every nonempty open set has positive measure by [F5]. The rational rectangles contained in $G$ form a countable base, so $G$ is second countable. Under the countable choice implied by [A1], the compact-finite Borel measure $\mu$ is outer regular on Borel sets and inner regular on open sets by [[cor-second-countable-lch-locally-finite-borel-measures-are-regular]]. [A1, F1, F2, F5]

1.2 Left invariance. Fix $g_0=(a_0,b_0)\in G$. Left multiplication is $L_{g_0}(a,b)=(a_0a,\,b_0+a_0b)$, a $C^1$ diffeomorphism of $G$ with $\det DL_{g_0}=a_0^2$ at every point. For nonnegative Borel $F$, the change of variables [F4], whose countable-choice hypothesis is in force by [A1], applied to $(u,v)=L_{g_0}(a,b)$ gives $\int_GF(L_{g_0}(a,b))\,a^{-2}\,da\,db=\int_GF(u,v)\,(u/a_0)^{-2}a_0^{-2}\,du\,dv=\int_GF(u,v)\,u^{-2}\,du\,dv$, since the inverse map is $a=u/a_0$, $b=(v-b_0)/a_0$ and $|\det DL_{g_0}^{-1}|=a_0^{-2}$. Hence $\mu$ is left invariant. [A1, F4, F5]

1.3 Right translation scales $\mu$ by $a_0$. With the same $g_0$, right multiplication is $R_{g_0}(a,b)=(aa_0,\,b+ab_0)$, a $C^1$ diffeomorphism with $\det DR_{g_0}(a,b)=\det\begin{pmatrix}a_0&0\\ b_0&1\end{pmatrix}=a_0$. For nonnegative Borel $F$, the change of variables [F4], again in force by [A1], with $(u,v)=(aa_0,b+ab_0)$ gives $\int_GF(aa_0,b+ab_0)\,a^{-2}\,da\,db=\int_GF(u,v)\,(u/a_0)^{-2}a_0^{-1}\,du\,dv=a_0\int_GF(u,v)u^{-2}\,du\,dv$, using $a=u/a_0$, $b=v-(u/a_0)b_0$ and $|\det DR_{g_0}^{-1}|=a_0^{-1}$. So $\int_GF(xg_0)\,d\mu(x)=a_0\int_GF\,d\mu$ for every nonnegative Borel $F$, and also for every $\mu$-integrable $F$ by linearity in the real and imaginary parts. [A1, F4, F5]

2.1 The scalar of step 1.3 is $c(g_0)=a_0$, so $\Delta_G(g_0)=c(g_0^{-1})$, the scalar $c(g_0^{-1})$ being the well-defined one supplied under the AC of [A1]; applying step 1.3 to $g_0^{-1}=(a_0^{-1},-b_0/a_0)$ gives $c(g_0^{-1})=a_0^{-1}$. Hence $\Delta_G(a_0,b_0)=a_0^{-1}$ for every $(a_0,b_0)\in G$, which is the asserted modular function. [A1, F3, step 1.3]

3.1 The function $(a,b)\mapsto a^{-1}$ is not identically $1$ on $G$: at $(2,0)$ it takes the value $1/2$. By [F3] the group $G$ is therefore not unimodular, while steps 1.1–1.2 show that $a^{-2}\,da\,db$ is indeed a left Haar measure for which the computation of step 2.1 applies. ∎ [F3, step 1.1, step 1.2, step 2.1]

## Verification notes

- **Why the positive component.** The full affine group $\{a\ne0\}$ has two components and its connected component of the identity is the $a>0$ part treated here, which avoids a disconnected sign convention for the modular function.
- **Choice cost.** AC is declared as [A1]; its countable-choice consequence is used in steps 1.2 and 1.3 through the change-of-variables theorem [F4], and it underlies the well-definedness of the scalar $c(g)$ quoted from [F3] in step 2.1. The Jacobian computations, the density $a^{-2}$ and the nonunimodularity witness are choice-free.
