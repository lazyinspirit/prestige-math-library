---
id: "ex-empty-cover-empty-space-cohomology"
kind: "example"
title: "Cohomology of the empty space and the empty cover"
status: draft
origin: pipeline
deps: [lem-sheaf-section-over-empty-set-terminal, def-cech-cochain-complex-open-cover, def-cech-cohomology-open-cover, def-sheaf-cohomology-derived-global-sections, def-global-sections-functor-sheaves, def-cohomology-object-of-a-cochain-complex, def-compact-space, def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice]
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
    - title: "J. Munkres, Topology, 2nd ed., §26 (open covers)"
      url: https://en.wikipedia.org/wiki/James_Munkres
---

## Example

Let $X=\varnothing$ be the empty topological space. Then $X$ is
covered by the empty family of open subsets, the empty cover has
$$C^p(\varnothing,\mathcal F)=0\qquad\text{for every }p\ge0$$
and hence $\check H^p(\varnothing,\mathcal F)=0$ for every $p$; here
$\mathcal F$ is any sheaf of abelian groups on $X$. Moreover, assuming the
Axiom of Choice, every sheaf of abelian groups $\mathcal F$ on $X$ satisfies
$$H^q(X,\mathcal F)=0\qquad\text{for all }q\ge0,$$
the global-sections functor on $\mathrm{Ab}(X)$ being the zero functor because
$\mathcal F(\varnothing)=0$ for every sheaf of abelian groups $\mathcal F$.

## Facts & Assumptions

[F1] For a sheaf of sets $\mathcal F$ on a topological space the group $\mathcal F(\varnothing)$ of sections over the empty set is a singleton ([[lem-sheaf-section-over-empty-set-terminal]]).

[F2] The ordered $p$-cochains of a cover $\mathcal U=(U_i)_{i\in I}$ are $C^p(\mathcal U,\mathcal F)=\prod_{i_0<\cdots<i_p}\mathcal F(U_{i_0}\cap\cdots\cap U_{i_p})$, and when $I$ has no increasing $(p+1)$-tuple the product is empty and $C^p(\mathcal U,\mathcal F)=0$ ([[def-cech-cochain-complex-open-cover]]).

[F3] The Čech cohomology of the fixed cover is $\check H^p(\mathcal U,\mathcal F)=\ker\delta^p/\operatorname{im}\delta^{p-1}$, so $\check H^0(\mathcal U,\mathcal F)=\ker(\delta^0)$ and the group is $0$ for $p<0$ ([[def-cech-cohomology-open-cover]]).

[F4] Assuming AC and a supplied injective resolution datum $I$ on $\mathrm{Ab}(X)$, sheaf cohomology is the right derived object $H^q(X,\mathcal F):=R_I^q\Gamma(X,\mathcal F)=H^q(\Gamma(X,I^\bullet(\mathcal F)_{\mathrm{del}}))$ ([[def-sheaf-cohomology-derived-global-sections]]).

[F5] The global-sections functor is defined on objects by $\Gamma(X,\mathcal F):=\mathcal F(X)$ and on morphisms by $\Gamma(X,\varphi):=\varphi_X$ ([[def-global-sections-functor-sheaves]]).

[F6] An open cover of a topological space $(X,\mathcal T)$ is a family $\mathcal U\subseteq\mathcal T$ of open sets with $X=\bigcup\mathcal U$, where $\bigcup\mathcal U=\{x\in X: x\in U\text{ for some }U\in\mathcal U\}$ ([[def-compact-space]]).

[F7] The $n$-th cohomology object of a cochain complex is $H^n(C):=\operatorname{coker}(B^n(C)\to Z^n(C))$, equivalently $H^n(C)=Z^n(C)/B^n(C)$ with $Z^n(C)=\ker(d^n)$ and $B^n(C)=\operatorname{im}(d^{n-1})$ ([[def-cohomology-object-of-a-cochain-complex]]).

[F8] In ZF the Axiom of Choice implies the Axiom of Dependent Choice, $\mathrm{AC}\Longrightarrow\mathrm{DC}$ ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F9] The Axiom of Choice says that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Verification

**Given:** The empty topological space $X=\varnothing$, its empty indexed cover $\mathcal U=(U_i)_{i\in\varnothing}$, a sheaf of abelian groups $\mathcal F$ on $X$ and the supplied functorial injective resolution datum $I$ on $\mathrm{Ab}(X)$.

**Proof technique:** direct.

1.1 The only open subset of $X=\varnothing$ is $\varnothing$ itself, since open sets are subsets of $X$; in particular the family $\mathcal U:=\varnothing\subseteq\mathcal T$ consisting of no open subset is a family of open subsets of $X$, and its union, $\bigcup\mathcal U=\{x\in X:x\in U\text{ for some }U\in\mathcal U\}$, is empty because there is no member to witness membership, that is $\bigcup\mathcal U=\varnothing=X$. By the definition of an open cover [F6] the empty family is therefore an open cover of the empty space, and reading it as an indexed family $\mathcal U=(U_i)_{i\in\varnothing}$ with index set $I=\varnothing$ and no members exhibits it as a cover in the indexed form used by the Čech construction [F2]; the empty space thus carries the cover with no members. [F2, F6]

2.1 For every $p\ge0$ the index set $I=\varnothing$ has no increasing $(p+1)$-tuple $i_0<\cdots<i_p$, since it has no elements at all, so by the empty-product convention of [F2] the group of ordered $p$-cochains is $C^p(\mathcal U,\mathcal F)=0$ for every $p\ge0$; for $p<0$ one has $C^p(\mathcal U,\mathcal F)=0$ by the same definition. In particular $C^0=0$ and $C^1=0$, and more generally $\delta^p:C^p\to C^{p+1}$ is a homomorphism between zero groups, hence the zero homomorphism. By [F3] the cover's cohomology is $\check H^p(\mathcal U,\mathcal F)=\ker\delta^p/\operatorname{im}\delta^{p-1}$, the kernel of the zero map out of the zero group is the zero group, and the image of $\delta^{p-1}$ is the zero subgroup of $C^p$ for every $p\ge0$, the case $p=0$ being the case of the zero map $\delta^{-1}=0$; hence $\check H^p(\mathcal U,\mathcal F)=0/0=0$ for every $p\ge0$ and, by the convention of [F3], also for $p<0$. Thus the empty cover has zero cochain groups and zero cohomology in every degree, for every abelian sheaf $\mathcal F$ on $X$. [F2, F3, step 1.1]

2.2 Let $\mathcal F$ be a sheaf of abelian groups on $X$. The underlying sheaf of sets has $\mathcal F(\varnothing)$ a singleton by [F1]; a group whose underlying set is a singleton is the trivial group, so $\mathcal F(\varnothing)=0$. Since $\varnothing$ is the only open subset of $X$ [step 1.1], every section group $\mathcal F(U)$ with $U$ open in $X$ equals $\mathcal F(\varnothing)=0$. [F1, step 1.1]

3.1 By the definition of the global-sections functor [F5] one has $\Gamma(X,\mathcal G)=\mathcal G(X)=\mathcal G(\varnothing)$ for every abelian sheaf $\mathcal G$ on $X$, and $\Gamma(X,\varphi)=\varphi_X$ for every morphism $\varphi:\mathcal G\to\mathcal G'$. By [step 2.2] applied to $\mathcal G$ the group $\mathcal G(\varnothing)$ is zero, so $\Gamma(X,\mathcal G)=0$ for every object $\mathcal G$ of $\mathrm{Ab}(X)$, while $\Gamma(X,\varphi)$ is the only map between the zero groups $\mathcal G(\varnothing)\to\mathcal G'(\varnothing)$, namely the zero map; hence $\Gamma(X,-):\mathrm{Ab}(X)\to\mathbf{Ab}$ is the zero functor, constant with value the zero group. [F5, step 2.2]

4.1 Fix the supplied functorial injective resolution datum $I$ on $\mathrm{Ab}(X)$, so that every abelian sheaf $\mathcal F$ on $X$ is equipped with a specific injective resolution $0\to\mathcal F\to I^\bullet(\mathcal F)$ and $H^q(X,\mathcal F)=R_I^q\Gamma(X,\mathcal F)=H^q(\Gamma(X,I^\bullet(\mathcal F)_{\mathrm{del}}))$ by [F4]. Applying the zero functor of [step 3.1] term by term, every group of the deleted complex $\Gamma(X,I^\bullet(\mathcal F)_{\mathrm{del}})$ is the zero group and every differential of it is the zero map, so in the notation of [F7] both $Z^q(C)=\ker(d^q)$ and $B^q(C)=\operatorname{im}(d^{q-1})$ are the zero subgroup of the zero group $C^q=0$; hence $H^q(X,\mathcal F)=\operatorname{coker}(B^q\to Z^q)=0/0=0$ for every $q\ge0$. By the convention recorded in [F4] one also has $H^q(X,\mathcal F)=0$ for $q<0$, so every abelian sheaf on the empty space is acyclic for $\Gamma(X,-)$ in all degrees. [F4, F7, step 3.1]

5.1 Combining the two computations: [step 2.1] shows that the empty cover of $X=\varnothing$ has $C^p(\mathcal U,\mathcal F)=0$ for every $p\ge0$ and $\check H^p(\mathcal U,\mathcal F)=0$ for every $p$, and [step 4.1] shows that $H^q(X,\mathcal F)=0$ for every abelian sheaf $\mathcal F$ on $X$ and every $q\ge0$; the two statements together are the assertion of the statement, the equality $\mathcal F(\varnothing)=0$ of [step 2.2] being the reason why the global-sections functor is the zero functor. The Axiom of Choice is assumed and is used exactly once: the definition [F4] of $H^q(X,\mathcal F)$ as a right derived object relative to the supplied injective resolution datum, whose independence of the chosen datum rests on the Axiom of Dependent Choice that follows from AC [F8]; the empty cover and the vanishing of the section groups in [step 1.1], [step 2.1], [step 2.2], [step 3.1] and [step 4.1] use no choice principle at all, the only products occurring there being indexed by the empty set, and a product over the empty set of groups is the one-element group by definition and not by [F9]. ∎ [F4, F8, F9, step 2.1, step 4.1]
