---
id: lem-extension-from-subobjects-of-a-generator-detects-injectivity
kind: lemma
title: "Extension from subobjects of a generator detects injectivity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-grothendieck-category, def-injective-object, thm-a-locally-small-abelian-category-with-a-generator-is-well-powered, thm-a-generator-detects-equality-of-subobjects, thm-zorn, def-axiom-of-choice, thm-ab5-is-equivalent-to-exactness-of-filtered-colimits]
proof_strategy: direct
verification:
  audited: 2026-09-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 19.11: Injectives in Grothendieck categories"
      url: "https://stacks.math.columbia.edu/tag/05AB"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-28
---
## Statement

Assume the Axiom of Choice.

Let $\mathcal A$ be a locally small Grothendieck category with a generator $U$, and let $I$ be an object. If every morphism $N\to I$ from every subobject $N\subseteq U$ extends to a morphism $U\to I$, then $I$ is injective.
## Facts & Assumptions

**Given:** The Axiom of Choice, a locally small Grothendieck category with a generator $U$, and an object $I$ satisfying the extension property for every subobject $N\subseteq U$.

[A1] AC permits choosing a set of representatives of the subobject classes of $B$, and it is the hypothesis of Zorn's lemma ([[def-axiom-of-choice]]).

[L1] In an abelian category, if a subobject $A'\subsetneq B$ is proper, then some morphism from the generator into $B$ factors through $B$ but not through $A'$ ([[thm-a-generator-detects-equality-of-subobjects]]).

[L2] A Grothendieck category is an abelian category with AB5 and a generator ([[def-grothendieck-category]]).

[L3] In a locally small abelian category with a generator, every object has only a set of subobjects up to equivalence ([[thm-a-locally-small-abelian-category-with-a-generator-is-well-powered]]).

[L4] Injective objects are exactly those extending morphisms across monomorphisms ([[def-injective-object]]).

[L5] Zorn's lemma supplies maximal elements once every chain has an upper bound ([[thm-zorn]]).

[L6] In a cocomplete abelian category, AB5 implies exactness of filtered colimits ([[thm-ab5-is-equivalent-to-exactness-of-filtered-colimits]]).
## Proof

**Proof technique:** direct.

1.1 To extend a map $u:A\to I$ across a monomorphism $A\rightarrowtail B$, use [A1] to fix representatives of the set of subobject classes $A'\subseteq B$ containing $A$, taking $A$ itself as the representative of its class. Consider pairs $(A',u')$ with $u':A'\to I$ extending $u$. By [L3] and local smallness, these pairs form a set. Order them by extension: $(A',u')\le(A'',u'')$ exactly when $A'\subseteq A''$ as subobjects of $B$ and $u''|_{A'}=u'$. This is a partial order and the initial pair $(A,u)$ belongs to it. [A1, L3, given, algebra]

2.1 The empty chain has upper bound $(A,u)$. For a nonempty chain $T$ of partial extensions, let $A_\infty$ be the colimit of its subobjects inside $B$. The chain is filtered, and [L2, L6] make the induced map $A_\infty\to B$ monic, so it represents their union. The maps in the chain are compatible by the extension order from step 1.1, so the colimit universal property induces $u_\infty:A_\infty\to I$ extending $u$. Transport this map along the isomorphism to the selected representative of the union from step 1.1; its pair is an upper bound of $T$. Thus every chain has an upper bound. [L2, L6, step 1.1, algebra]

3.1 By [A1] and [L5], choose a maximal partial extension $(A_{\max},u_{\max})$. [A1, L5, step 2.1, choose]

4.1 Suppose $A_{\max}\ne B$. By [L1], there exists a morphism $\psi:U\to B$ that does not factor through $A_{\max}$. Let $B_0=\operatorname{im}(\psi)$, let $N=A_{\max}\cap B_0$ inside $B$, and let $M=\psi^{-1}(N)\subseteq U$. The composite $M\to N\to A_{\max}\xrightarrow{u_{\max}} I$ extends by hypothesis to a morphism $\chi:U\to I$. [L1, step 3.1, given, choose, algebra]

5.1 Because $\ker(\psi)\subseteq M$, the map $\chi$ vanishes on $\ker(\psi)$ and therefore factors through $B_0=\operatorname{im}(\psi)$; write the factor map as $u_0:B_0\to I$. The maps $u_{\max}:A_{\max}\to I$ and $u_0:B_0\to I$ agree on $N=A_{\max}\cap B_0$, so they glue to a map $$ A_{\max}+B_0\to I $$ extending $u_{\max}$. Since $\psi$ does not factor through $A_{\max}$, the subobject $A_{\max}+B_0$ is strictly larger than $A_{\max}$, contradicting maximality. Therefore $A_{\max}=B$. [step 4.1, algebra]

6.1 Every map across a monomorphism extends, so $I$ is injective by [L4]. [L4, step 5.1] ∎
