---
id: "cex-bad-cover-circle-cech-misses-h1"
kind: "counterexample"
title: "The one-member cover of the circle has no Čech H1, but the sheaf H1 is nonzero"
status: draft
origin: pipeline
deps: [cex-global-sections-epimorphism-fails-lift, def-cech-cohomology-open-cover, def-cech-cochain-complex-open-cover, thm-cech-to-sheaf-cohomology-comparison, def-axiom-of-choice, def-acyclic-cover-for-sheaf, thm-leray-acyclic-cover-theorem, lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions, def-circle-as-real-line-mod-integers, def-sheaf-cohomology-derived-global-sections, def-sheaf-on-topological-space]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
    - title: "Jiahui Gao and Shuwu Zhang, Lectures on Algebraic Geometry"
      url: https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf
---

## Statement refuted

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

Let $X$ be a topological space, $\mathcal F$ a sheaf of abelian groups
on $X$ and $\mathcal U$ an open cover of $X$ indexed by a linearly ordered set.
The claim that the Čech-to-sheaf comparison map
([[thm-cech-to-sheaf-cohomology-comparison]])
$$\varphi^p_{\mathcal U}:\check H^p(\mathcal U,\mathcal F)\longrightarrow H^p(X,\mathcal F)$$
is an isomorphism for every $p\ge0$ is refuted. The refutation takes
$X=S^1$ the circle ([[def-circle-as-real-line-mod-integers]]),
$\mathcal F=\underline{\mathbb Z}$ the constant sheaf with value $\mathbb Z$ on
it, identified with the sheaf of locally constant $\mathbb Z$-valued functions
([[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]]), and the
one-member cover $\mathcal U=(\{S^1\})$: then
$$\check H^0(\mathcal U,\underline{\mathbb Z})\cong\Gamma(S^1,\underline{\mathbb Z}),\qquad \check H^1(\mathcal U,\underline{\mathbb Z})=0,$$
while the sheaf cohomology does not vanish in degree one,
$$H^1(S^1,\underline{\mathbb Z})\ne0,$$
a nonzero class being the connecting class of a global section of the quotient
sheaf $\mathcal Q$ of continuous real functions by locally constant integer
functions ([[cex-global-sections-epimorphism-fails-lift]]). Consequently
$\varphi^1_{\mathcal U}$ is the zero homomorphism from the zero group into the
nonzero group $H^1(S^1,\underline{\mathbb Z})$: it is not surjective and not an
isomorphism. The cover is not $\underline{\mathbb Z}$-acyclic, so the acyclicity
hypothesis of the Leray comparison theorem
([[thm-leray-acyclic-cover-theorem]]) is genuinely needed.

## Facts & Assumptions

[F1] For an open cover indexed by a linearly ordered set, $C^p(\mathcal U,\mathcal F)=\prod_{i_0<\cdots<i_p}\mathcal F(U_{i_0}\cap\cdots\cap U_{i_p})$, and when the index set has no increasing $(p+1)$-tuple the product is empty and $C^p(\mathcal U,\mathcal F)=0$ ([[def-cech-cochain-complex-open-cover]]).

[F2] The fixed-cover Čech cohomology is $\check H^p(\mathcal U,\mathcal F)=\ker\delta^p/\operatorname{im}\delta^{p-1}$ ([[def-cech-cohomology-open-cover]]).

[F3] For every open cover indexed by a linearly ordered set the comparison map $\varphi^p_{\mathcal U}:\check H^p(\mathcal U,\mathcal F)\to H^p(X,\mathcal F)$ is defined, assuming the Axiom of Choice, via the Godement resolution ([[thm-cech-to-sheaf-cohomology-comparison]]).

[F4] On the circle there is a global section of the quotient sheaf $\mathcal Q$ whose connecting class in $H^1(S^1,\underline{\mathbb Z})$ is nonzero; in particular $H^1(S^1,\underline{\mathbb Z})\ne0$ for the constant sheaf with value $\mathbb Z$ ([[cex-global-sections-epimorphism-fails-lift]]).

[F5] The Axiom of Choice is the statement that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F6] A cover $\mathcal U$ is $\mathcal F$-acyclic exactly when $H^q(W,\mathcal F|_W)=0$ for every $q>0$ and every nonempty finite intersection $W$ of members of $\mathcal U$ ([[def-acyclic-cover-for-sheaf]]).

[F7] If $\mathcal U$ is $\mathcal F$-acyclic then the comparison map is an isomorphism in every degree ([[thm-leray-acyclic-cover-theorem]]).

[F8] The constant sheaf with value $A$ is canonically isomorphic to the sheaf of locally constant $A$-valued functions, $\theta:A_X\cong\underline A_{\mathrm{loc}}$ ([[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]]).

[F9] The circle is $S^1=\mathbb R/\mathbb Z$ with quotient topology induced by $p(x)=[x]$ ([[def-circle-as-real-line-mod-integers]]).

## Counterexample

**Given:** The circle $S^1$ with quotient map $p$, the constant sheaf $\underline{\mathbb Z}$ with value $\mathbb Z$ on $S^1$, the one-member cover $\mathcal U=(U_0)$ with $U_0:=S^1$, and the sheaf cohomology $H^\bullet(S^1,-)$ formed from the supplied injective resolution datum.

**Proof technique:** direct.

1.1 Take $X=S^1$ the circle with quotient map $p$ [F9], the index set $I=\{0\}$ with its unique linear order and $U_0:=S^1$; the circle is open in itself, so $\mathcal U=(U_0)$ is a cover of $X=S^1$ by open subsets. The increasing tuples in $I$ are the single $0$-tuple $(0)$ in degree $0$, and there is no increasing $(p+1)$-tuple for $p\ge1$; hence by [F1] $$C^0(\mathcal U,\underline{\mathbb Z})=\underline{\mathbb Z}(U_0)=\underline{\mathbb Z}(S^1),\qquad C^p(\mathcal U,\underline{\mathbb Z})=0\quad(p\ge1).$$ So the differential $\delta^0:C^0\to C^1$ has target $0$ and is the zero map, and all higher differentials vanish as well. By [F2] the cohomology of the complex $C^0\to0\to\cdots$ is $\check H^0(\mathcal U,\underline{\mathbb Z})=\ker\delta^0=C^0=\underline{\mathbb Z}(S^1)$ and $\check H^p(\mathcal U,\underline{\mathbb Z})=\ker\delta^p/\operatorname{im}\delta^{p-1}=0/0=0$ for every $p\ge1$; in particular $\check H^1(\mathcal U,\underline{\mathbb Z})=0$. [F1, F2, F9]

2.1 By [F4] there is a global section $q$ of the quotient sheaf $\mathcal Q$ on $S^1$ — the sheafification of the presheaf quotient of the continuous real-valued functions by the locally constant integer-valued functions — whose connecting class $\partial(q)\in H^1(S^1,\underline{\mathbb Z})$ is nonzero; hence $H^1(S^1,\underline{\mathbb Z})\ne0$. The coefficient sheaf there is the constant sheaf with value $\mathbb Z$ on $S^1$, identified with the subsheaf of locally constant integer-valued functions [F8], which is the same sheaf $\underline{\mathbb Z}$ used in [step 1.1]; the two occurrences of $H^1(S^1,\underline{\mathbb Z})$ denote the same group, formed from the same fixed injective resolution datum. [F4, F8]

3.1 By [F3], under the Axiom of Choice, the comparison map for the cover $\mathcal U$ of [step 1.1] is defined: $$\varphi^1_{\mathcal U}:\check H^1(\mathcal U,\underline{\mathbb Z})\longrightarrow H^1(S^1,\underline{\mathbb Z}).$$ Its source is the zero group by [step 1.1], so $\varphi^1_{\mathcal U}$ is the zero homomorphism, while its target is nonzero by [step 2.1]. A homomorphism whose target is nonzero and whose source is the zero group has image $0\ne H^1(S^1,\underline{\mathbb Z})$, so it is not surjective and in particular not an isomorphism. [F3, step 2.1, step 1.1]

4.1 The cover $\mathcal U$ is not $\underline{\mathbb Z}$-acyclic. Indeed, by [F6] $\mathcal U$ is $\underline{\mathbb Z}$-acyclic exactly when $H^q(W,\underline{\mathbb Z}|_W)=0$ for every $q>0$ and every nonempty finite intersection $W$ of members of $\mathcal U$; the only member is $U_0=S^1$, so the only such $W$ is $S^1$ itself, whose restriction of $\underline{\mathbb Z}$ is $\underline{\mathbb Z}$, and $H^1(S^1,\underline{\mathbb Z})\ne0$ by [step 2.1]. Hence the hypothesis of the Leray comparison theorem [F7] fails for this cover, and no contradiction with that theorem arises from [step 3.1]: the theorem gives an isomorphism only for $\mathcal F$-acyclic covers, and the one-member cover of the circle is not one. [F6, F7, step 2.1]

5.1 Assembling the pieces for the circle, the constant sheaf $\underline{\mathbb Z}$ and the one-member cover $\{S^1\}$: $\check H^1(\mathcal U,\underline{\mathbb Z})=0$ by [step 1.1], the comparison map $\varphi^1_{\mathcal U}$ is the zero map out of the zero group by [step 3.1], the sheaf cohomology $H^1(S^1,\underline{\mathbb Z})$ is nonzero by [step 2.1], and the cover fails acyclicity by [step 4.1]. Therefore the assertion that the comparison map $\varphi^p_{\mathcal U}$ is an isomorphism in every degree for every cover is false, with degree $p=1$ and this cover as the witness; on the other hand $\varphi^0_{\mathcal U}$ is an isomorphism for every cover, since it is the identity of the global sections up to the canonical identifications, so degree zero provides no obstruction. The Axiom of Choice of [F5] enters exactly twice: in [step 3.1] through the construction of the comparison map, which uses the Godement resolution of [F3], and in [step 2.1] through the long exact sequence in sheaf cohomology of [F4], whose connecting homomorphism is formed from injective resolutions; no other selection is used, the cochains of [step 1.1] being a single section group. ∎ [F3, F4, F5, step 4.1, step 3.1, step 2.1, step 1.1]
