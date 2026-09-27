---
id: "thm-noetherian-topological-space-dimension-vanishing"
kind: "theorem"
title: "Grothendieck vanishing on a Noetherian space"
status: draft
origin: pipeline
deps: [def-noetherian-topological-space, def-dimension-noetherian-topological-space, def-cohomological-dimension-space, def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice, def-irreducible-topological-space-and-subset, def-irreducible-component-of-a-topological-space, lem-irreducible-components-of-a-topological-space, lem-noetherian-space-has-finitely-many-irreducible-components, lem-extension-by-zero-vanishing-reduces-to-all-sheaves, lem-closed-immersion-preserves-sheaf-cohomology, lem-constant-sheaf-on-irreducible-space-is-flasque, lem-extension-by-zero-short-exact-sequence, lem-sheaf-supported-on-a-closed-subset-is-a-pushforward, thm-long-exact-sequence-sheaf-cohomology, def-sheaf-cohomology-derived-global-sections, lem-cohomology-functoriality-sheaf-and-space, lem-noetherian-subspaces-and-compact-opens, lem-sheaf-section-over-empty-set-terminal, prop-an-exact-functor-has-vanishing-positive-derived-functors, def-extension-by-zero-abelian-sheaf, def-restriction-sheaf-open-subspace, def-direct-image-sheaf, lem-direct-image-is-sheaf, def-subspace-topology-top, def-topological-space, thm-closure-characterisation-top, def-stalk-of-presheaf, def-sheafification, thm-abelian-sheaves-form-abelian-category, def-exact-sequence-sheaves, def-global-sections-functor-sheaves, thm-extension-by-zero-adjunction-exactness, thm-inverse-direct-image-adjunction]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
      locator: "Proposition 20.7 (tag 02UZ)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a
Noetherian topological space ([[def-noetherian-topological-space]]) with
$\dim X\le d$ for an integer $d\ge0$
([[def-dimension-noetherian-topological-space]]). Then
$$H^q(X,\mathcal F)=0$$
for every sheaf of abelian groups $\mathcal F$ on $X$ and every integer $q>d$,
cohomology being that of [[def-sheaf-cohomology-derived-global-sections]]; in
particular the cohomological dimension of $X$ relative to the class of all
abelian sheaves is at most $d$ ([[def-cohomological-dimension-space]]).

## Facts & Assumptions

[F2] For a Noetherian space $T$, $\dim T$ is the supremum of the lengths $s$ of strict chains $Z_0\subsetneq\cdots\subsetneq Z_s$ of nonempty irreducible closed subsets of $T$, and $\dim\varnothing=-\infty$ ([[def-dimension-noetherian-topological-space]]).

[F3] Every irreducible component of a space is a closed subset ([[lem-irreducible-components-of-a-topological-space]]).

[F4] Every irreducible subset of a space is contained in an irreducible component ([[lem-irreducible-components-of-a-topological-space]]).

[F5] A nonempty irreducible space is its own unique irreducible component ([[lem-irreducible-components-of-a-topological-space]]).

[F6] If a space is the union of finitely many irreducible closed subsets with no redundant member, then these are exactly its irreducible components ([[lem-irreducible-components-of-a-topological-space]]).

[F7] If $C$ is irreducible and $W$ is closed with $X=C\cup W$ and $C\not\subseteq W$, then the closure of $X\setminus W$ in $X$ is irreducible ([[lem-irreducible-components-of-a-topological-space]]).

[F8] The closure of an irreducible subset is irreducible ([[lem-irreducible-components-of-a-topological-space]]).

[F9] A Noetherian space has only finitely many irreducible components ([[lem-noetherian-space-has-finitely-many-irreducible-components]]).

[F10] Assume the Axiom of Choice. If $X$ is Noetherian with $\dim X\le d$ and $H^q(X,j_{U!}\mathbb Z_U)=0$ for every open $U\subseteq X$ and every $q>d$, then $H^q(X,\mathcal F)=0$ for every sheaf of abelian groups $\mathcal F$ on $X$ and every $q>d$ ([[lem-extension-by-zero-vanishing-reduces-to-all-sheaves]]).

[F11] Assume the Axiom of Choice. For a closed subset $Z\subseteq Y$ with inclusion $i$ and a sheaf of abelian groups $\mathcal F$ on $Z$ one has $H^q(Z,\mathcal F)\cong H^q(Y,i_*\mathcal F)$ for all $q\ge0$ ([[lem-closed-immersion-preserves-sheaf-cohomology]]).

[F12] Assume the Axiom of Choice. If $X$ is irreducible and $A$ is an abelian group, then $H^q(X,A_X)=0$ for every $q>0$ ([[lem-constant-sheaf-on-irreducible-space-is-flasque]]).

[F13] For an open subspace $j:U\hookrightarrow X$ with closed complement $i:Z\hookrightarrow X$ and a sheaf of abelian groups $\mathcal F$ on $X$ there is a short exact sequence $0\to j_!(\mathcal F|_U)\to\mathcal F\to i_*(\mathcal F|_Z)\to0$; for $\mathcal F=\mathbb Z_X$ its first term is $j_!(\mathbb Z_U)$ up to canonical isomorphism ([[lem-extension-by-zero-short-exact-sequence]]).

[F14] If $\mathcal G$ is a sheaf of abelian groups on $X$ whose stalks vanish off a closed subset $Z$, then the unit $\mathcal G\to i_*i^{-1}\mathcal G$ is an isomorphism of sheaves of abelian groups ([[lem-sheaf-supported-on-a-closed-subset-is-a-pushforward]]).

[F15] Assume the Axiom of Choice. A short exact sequence of abelian sheaves on $X$ gives a natural long exact cohomology sequence, independent of the injective resolutions used ([[thm-long-exact-sequence-sheaf-cohomology]]).

[F16] Every subspace of a Noetherian space is Noetherian ([[lem-noetherian-subspaces-and-compact-opens]]).

[F17] Assume the Axiom of Choice. Then $\mathcal F\mapsto H^q(X,\mathcal F)$ is a covariant additive functor on abelian sheaves on $X$, so an isomorphism of sheaves induces an isomorphism of cohomology groups ([[lem-cohomology-functoriality-sheaf-and-space]]).

[F18] For a sheaf $\mathcal F$ of sets on a topological space, $\mathcal F(\varnothing)$ is a singleton ([[lem-sheaf-section-over-empty-set-terminal]]).

[F19] An exact functor between abelian categories has vanishing positive derived functors relative to any supplied injective resolution datum ([[prop-an-exact-functor-has-vanishing-positive-derived-functors]]).

[F20] The cohomological dimension of $X$ relative to a class $\mathcal C$ satisfies $\operatorname{cd}_{\mathcal C}(X)\le d$ if and only if $H^q(X,\mathcal F)=0$ for every $\mathcal F\in\mathcal C$ and every $q>d$ ([[def-cohomological-dimension-space]]).

[F21] The Axiom of Choice is assumed in the statement ([[def-axiom-of-choice]]).

[F22] In ZF the Axiom of Choice implies the Axiom of Dependent Choice ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F23] A topology is closed under finite intersections, so finite unions of closed subsets are closed ([[def-topological-space]]).

[F24] An irreducible component is an irreducible subset maximal under inclusion, so an irreducible subset strictly containing it cannot exist ([[def-irreducible-component-of-a-topological-space]]).

[F25] Irreducibility carries a nonemptiness clause ([[def-irreducible-topological-space-and-subset]]).

[F26] $x\notin\overline{A}$ if and only if some open $U$ with $x\in U$ satisfies $U\cap A=\varnothing$; equivalently $x\in\overline{A}$ precisely when $U\cap A\ne\varnothing$ for every open $U\ni x$ ([[thm-closure-characterisation-top]]).

[F27] The stalk at $x$ is the filtered colimit of the section groups over the open neighbourhoods of $x$ ([[def-stalk-of-presheaf]]).

[F28] A section of $j_!\mathcal F$ over an open $V$ is a section on $V\cap U$ which vanishes locally near every point of $V\setminus U$, and in particular $(j_!\mathcal F)(V)=0$ when $V\cap U=\varnothing$ ([[def-extension-by-zero-abelian-sheaf]]).

[F29] A subset $C$ of a subspace $S$ is closed in $S$ if and only if $C=F\cap S$ for a closed $F\subseteq X$ ([[def-subspace-topology-top]]).

[F30] The constant sheaf $\mathbb Z_U$ on a space $U$ is the sheafification of the constant presheaf with value $\mathbb Z$ on $U$ ([[def-sheafification]]).

## Proof

**Given:** A Noetherian topological space $X$ with $\dim X\le d$ for an integer $d\ge0$, the Axiom of Choice of [F21], and an arbitrary sheaf of abelian groups $\mathcal F$ on $X$.

1.1 I prove the assertion by induction on $d\ge0$. The case $d=-1$, needed as the input for $d=0$, is the assertion that every Noetherian space $Y$ with $\dim Y\le-1$ satisfies $H^q(Y,\mathcal G)=0$ for every sheaf $\mathcal G$ on $Y$ and every $q>-1$. If $Y\ne\varnothing$ and $y\in Y$, the singleton $\{y\}$ is irreducible [F25], so by [F8] its closure in $Y$ is a nonempty irreducible closed subset of $Y$, which is a strict chain of length $0$; hence $0\le\dim Y$ by [F2], and $\dim Y\le-1$ forces $Y=\varnothing$. For $Y=\varnothing$ and any sheaf $\mathcal G$ the group of global sections is $\Gamma(\varnothing,\mathcal G)=\mathcal G(\varnothing)$, a singleton by [F18], that is the zero group; the functor $\Gamma(\varnothing,-)$ is therefore the zero functor, which is exact, and by [F19] its positive derived functors vanish, so $H^q(\varnothing,\mathcal G)=0$ for every $q\ge0$ and the case $d=-1$ holds. Now fix $d\ge0$ and assume the assertion for $d-1$, i.e. for all Noetherian spaces of dimension at most $d-1$ and all sheaves on them. Since a Noetherian space has only finitely many irreducible components [F9], it is enough to prove, by induction on $t\ge0$, the auxiliary statement $Q(t)$: every Noetherian space $X$ with $\dim X\le d$ having at most $t$ irreducible components satisfies $H^q(X,\mathcal F)=0$ for every sheaf of abelian groups $\mathcal F$ on $X$ and every $q>d$. [F2, F8, F9, F18, F19, F25]

1.2 Assume $t\ge2$ and $Q(t-1)$, and let $X$ be Noetherian with $\dim X\le d$ and at most $t$ irreducible components; the spaces with fewer than $t$ components are covered by $Q(t-1)$, so let $X$ have exactly $t$ components. Choose one component $C$ and let $W$ be the union of the remaining components of $X$, a finite union by [F9], hence a closed subset of $X$ by [F3] and [F23]. Since $X$ is the union of its irreducible components by [F4], $X=C\cup W$. Moreover $C\not\subseteq W$: otherwise $C=C\cap W=\bigcup_{C'\ne C}(C\cap C')$, a finite union of subsets closed in $C$ by [F3], and $C$ is irreducible and nonempty [F25], so $C=C\cap C'$ for some component $C'\ne C$, that is $C\subseteq C'$, contradicting maximality of $C$ [F24]. The irreducible components of the space $W$ are exactly the components $C'\ne C$ of $X$: each such $C'$ is an irreducible closed subset of $W$ by [F3], no $C'$ is contained in the union of the others by the same maximality argument just given, and $W$ is that finite union, so [F6] applies; in particular $W$ has exactly $t-1$ irreducible components, and $W$ is Noetherian by [F16] with $\dim W\le d$ by [F2]. Finally let $Z':=\overline{X\setminus W}$, the closure in $X$ of $X\setminus W$; by [F7], whose hypotheses $X=C\cup W$, $C$ irreducible and $C\not\subseteq W$ have just been verified, this $Z'$ is irreducible, and $Z'$ is nonempty because $X\setminus W=C\setminus W\ne\varnothing$. By [F16] and [F2] the space $Z'$ is Noetherian of dimension at most $d$, and by [F5] it has exactly one irreducible component; since $t\ge2$ we have $1\le t-1$, so $Q(t-1)$ applies to $Z'$ as well as to $W$. [F2, F3, F4, F6, F7, F9, F16, F23, F24, F25]

2.1 A space with no irreducible component is empty, because every point of a space lies in an irreducible component by [F4]; thus $Q(0)$ says that $H^q(\varnothing,\mathcal F)=0$ for all $q>d$, which is the computation of [step 1.1] for the empty space, the classes of sheaves on $\varnothing$ being trivial and $H^0$ also vanishing there. [F4, step 1.1]

2.2 Keep the notation of [step 1.2] and let $\mathcal F$ be a sheaf of abelian groups on $X$; write $U:=X\setminus W$ and let $j:U\hookrightarrow X$ and $i:W\hookrightarrow X$ be the inclusions. By [F13] there is a short exact sequence $$0\to\mathcal G\to\mathcal F\to i_*(\mathcal F|_W)\to0,\qquad \mathcal G:=j_!(\mathcal F|_U).$$ I claim $\mathcal G_x=0$ for every $x\notin Z'$. Indeed, if $x\notin Z'=\overline U$, then by [F26] there is an open neighbourhood $V$ of $x$ with $V\cap U=\varnothing$; every section of $\mathcal G$ over an open $V'\subseteq V$ has $V'\cap U=\varnothing$, so $\mathcal G(V')=0$ by [F28], and these $V'$ are cofinal among the open neighbourhoods of $x$, so the colimit of [F27] computing $\mathcal G_x$ is a colimit of zero groups, that is $\mathcal G_x=0$. Therefore [F14] applies to $\mathcal G$ and the closed subset $Z'$, and the unit $\mathcal G\to i'_*(i'^{-1}\mathcal G)$, $i':Z'\hookrightarrow X$ the inclusion, is an isomorphism of sheaves; by [F17] it induces an isomorphism $H^p(X,\mathcal G)\cong H^p(X,i'_*(i'^{-1}\mathcal G))$ for every $p$, and by [F11] the latter group is $H^p(Z',i'^{-1}\mathcal G)$; for $p>d$ this vanishes by $Q(t-1)$ applied to $Z'$ in [step 1.2]. Likewise $H^p(X,i_*(\mathcal F|_W))\cong H^p(W,\mathcal F|_W)=0$ for $p>d$ by [F11] and $Q(t-1)$ applied to $W$. [F11, F13, F14, F17, F26, F27, F28, step 1.2]

3.1 $Q(1)$: let $X$ be Noetherian with $\dim X\le d$ and at most one irreducible component, and let $U\subseteq X$ be open; I show $H^p(X,j_{U!}\mathbb Z_U)=0$ for every $p>d$. If $X=\varnothing$ this is [step 2.1], so assume $X\ne\varnothing$; then $X$ is irreducible, because [F4] puts every point in its sole irreducible component. If $U=\varnothing$ then $\mathbb Z_U$ is a sheaf on the empty space, so its only section group is zero by [F18], and $\mathbb Z_U=0$ and $j_{U!}\mathbb Z_U=0$, whence $H^p(X,j_{U!}\mathbb Z_U)=0$ in every degree [F19]. Assume now $U\ne\varnothing$, put $Z:=X\setminus U$, and note that $Z$ is closed in $X$ and $Z\ne X$. I claim $\dim Z\le d-1$. Let $Z_0\subsetneq\cdots\subsetneq Z_s$ be a strict chain of nonempty irreducible closed subsets of the subspace $Z$; each $Z_i$ is also closed in $X$ by [F29] since $Z$ is closed in $X$, and irreducibility of $Z_i$ is the same whether tested in $Z$ or in $X$, while $X$ itself is a nonempty irreducible closed subset of $X$ strictly containing $Z_s$; so $Z_0\subsetneq\cdots\subsetneq Z_s\subsetneq X$ is a strict chain of nonempty irreducible closed subsets of $X$, of length $s+1$, and $s+1\le\dim X\le d$ by [F2], that is $s\le d-1$; hence $\dim Z\le d-1$ by [F2]. Apply [F13] to $\mathcal F=\mathbb Z_X$: there is a short exact sequence $$0\to j_!(\mathbb Z_U)\to\mathbb Z_X\to i_*(\mathbb Z_X|_Z)\to0,$$ the first term being identified with $j_!(\mathbb Z_U)$ by clause 2 of [F13]. In the long exact sequence of [F15], the exact portion $$H^{p-1}(X,i_*(\mathbb Z_X|_Z))\to H^p(X,j_!(\mathbb Z_U))\to H^p(X,\mathbb Z_X)$$ has vanishing outer terms for $p>d$: the first is $H^{p-1}(Z,\mathbb Z_X|_Z)$ by [F11], and $Z$ is Noetherian by [F16] with $\dim Z\le d-1$, so it vanishes by the induction hypothesis for $d-1$ because $p-1>d-1$; the second vanishes by [F12] because $X$ is irreducible and $p>d\ge0$ gives $p>0$. Therefore $H^p(X,j_{U!}\mathbb Z_U)=0$ for every $p>d$ and every open $U\subseteq X$. Since $X$ is Noetherian with $\dim X\le d$, [F10] now gives $H^p(X,\mathcal F)=0$ for every sheaf of abelian groups $\mathcal F$ on $X$ and every $p>d$, which is $Q(1)$. [F2, F5, F10, F11, F12, F13, F15, F16, F18, F19, F29, F30, step 2.1, step 1.1]

4.1 Let $p>d$. The long exact sequence of [F15] attached to the short exact sequence of [step 2.2] contains the exact portion $$H^p(X,\mathcal G)\to H^p(X,\mathcal F)\to H^p(X,i_*(\mathcal F|_W)),$$ and both outer groups vanish for $p>d$ by [step 2.2]; hence $H^p(X,\mathcal F)=0$. As $\mathcal F$ was arbitrary this is $Q(t)$ for the space $X$ with exactly $t$ components, and spaces with fewer components are $Q(t-1)$, so $Q(t)$ holds for all spaces of dimension at most $d$ with at most $t$ components; by induction on $t$, using that all these spaces have finitely many components [F9], the assertion holds for every Noetherian space of dimension at most $d$, which completes the induction on $d$ started in [step 1.1] and proves the theorem. The final clause follows from [F20], which identifies the condition $\operatorname{cd}\le d$ with vanishing above $d$ for every sheaf in the class of all abelian sheaves. The Axiom of Choice [F21] is used for the supplied injective resolutions and the reduction [F10], and supplies DC for resolution comparison through [F22]: the cohomology groups used throughout are the derived functors of global sections computed from injective resolutions, as in [F15], [F11], [F12], [F17], [F19] and [F10], and the existence of those resolutions is what requires the choice principle; all topological arguments in [step 1.1], [step 3.1], [step 1.2] and [step 2.2] are choice-free. ∎ [F9, F10, F11, F12, F15, F17, F19, F20, F21, F22, step 1.1, step 3.1, step 1.2, step 2.2]
