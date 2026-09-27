---
id: "rem-cech-cohomology-cover-dependent-without-acyclicity"
kind: "remark"
title: "Fixed-cover Čech can miss derived cohomology"
status: draft
origin: pipeline
deps: [def-cech-cohomology-open-cover, def-cech-cochain-complex-open-cover, thm-cech-to-sheaf-cohomology-comparison, thm-leray-acyclic-cover-theorem, thm-long-exact-sequence-sheaf-cohomology, thm-zero-sheaf-cohomology-global-sections, lem-global-sections-left-exact, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
      locator: "Definition 20.9.1 and Lemma 20.9.3 (tag 0G6S, a member equal to the whole cover), Lemma 20.11.6 (tag 01ET, degeneration under acyclicity on finite intersections)"
---

## Remark

Let $X$ be a topological space, let $\mathcal F$ be a sheaf of abelian groups on
$X$ and let $\mathcal U=(U_i)_{i\in I}$ be an open cover of $X$ indexed by a
linearly ordered set, with fixed-cover Čech cohomology
$\check H^\bullet(\mathcal U,\mathcal F)$
([[def-cech-cohomology-open-cover]]). The cover is part of the data: the groups
$\check H^p(\mathcal U,\mathcal F)$ are the cohomology of the ordered Čech
cochain complex of $\mathcal U$ alone
([[def-cech-cochain-complex-open-cover]]), and the definition refers to no other
cover of $X$.

1. **The one-member cover has no positive cochains.** Take $\mathcal U$ to be
   the cover $\{X\}$, that is $I=\{0\}$ and $U_0=X$. The index set has the single
   increasing $0$-tuple $(0)$ and no increasing $(p+1)$-tuple for $p\ge1$, and a
   product over an empty index set is the trivial group, so
   $$C^0(\mathcal U,\mathcal F)=\mathcal F(X),\qquad C^p(\mathcal U,\mathcal F)=0\quad(p\ge1).$$
   Hence $\delta^0$ maps into the zero group and all higher differentials vanish,
   giving
   $$\check H^0(\mathcal U,\mathcal F)=\Gamma(X,\mathcal F),\qquad \check H^p(\mathcal U,\mathcal F)=0\quad(p\ge1),$$
   for every abelian sheaf $\mathcal F$ on every topological space $X$.

2. **The comparison need not be an isomorphism.** Under the Axiom of Choice
   ([[def-axiom-of-choice]]) the comparison map
   $\varphi^p_{\mathcal U}:\check H^p(\mathcal U,\mathcal F)\to
   H^p(X,\mathcal F)$ is defined for every cover
   ([[thm-cech-to-sheaf-cohomology-comparison]]), and it is an isomorphism in
   every degree when $\mathcal U$ is $\mathcal F$-acyclic
   ([[thm-leray-acyclic-cover-theorem]]). The acyclicity of the cover on its
   nonempty finite intersections cannot be dropped. On the circle $X=S^1$ with
   $\mathcal F$ the constant sheaf $\mathbb Z$ the one-member cover has
   $\check H^1=0$ by part 1 while $H^1(S^1,\mathbb Z)\ne0$, so
   $\varphi^1_{\mathcal U}$ is the zero homomorphism out of the zero group into
   a nonzero group. That cover is not $\mathbb Z$-acyclic, its only nonempty
   finite intersection being $S^1$ itself; the companion examples page of this
   pair computes this cover and the two-arc cover of the circle explicitly and
   records a nonzero class in $H^1(S^1,\mathbb Z)$.

3. **Where the nonzero classes come from.** Nonzero first cohomology is not an
   exotic phenomenon. For a short exact sequence
   $0\to\mathcal F'\to\mathcal F\to\mathcal F''\to0$ of abelian sheaves the long
   exact sequence ([[thm-long-exact-sequence-sheaf-cohomology]]) begins
   $$H^0(X,\mathcal F)\longrightarrow H^0(X,\mathcal F'')\xrightarrow{\ \partial^0\ }H^1(X,\mathcal F'),$$
   and $H^0(X,-)$ is canonically the global-sections functor
   ([[thm-zero-sheaf-cohomology-global-sections]]). Global sections are left
   exact, but an epimorphism of sheaves need not be surjective on global
   sections ([[lem-global-sections-left-exact]]); whenever that surjectivity
   fails, the connecting homomorphism has nonzero image and
   $H^1(X,\mathcal F')\ne0$. For such a sheaf $\mathcal F'$ the one-member cover
   of $X$ already exhibits the failure of part 2 in degree one, its source
   $\check H^1$ being the zero group.

4. **Conclusion.** The fixed-cover groups are therefore not a function of the
   pair $(X,\mathcal F)$ alone: on the circle with the constant sheaf
   $\mathbb Z$ the one-member cover gives $\check H^1=0$, which disagrees with
   $H^1(S^1,\mathbb Z)\ne0$, while the two-arc cover of the circle gives
   $\check H^1\cong\mathbb Z$ (companion examples page). The equality
   $\check H^p(\mathcal U,\mathcal F)\cong H^p(X,\mathcal F)$ is a theorem about
   the cover, available under the acyclicity hypothesis on its finite
   intersections ([[thm-leray-acyclic-cover-theorem]]), and not a formal
   consequence of the definition of $\check H^p(\mathcal U,\mathcal F)$ alone.
