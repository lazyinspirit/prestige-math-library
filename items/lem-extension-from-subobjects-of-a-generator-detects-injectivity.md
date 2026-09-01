---
id: lem-extension-from-subobjects-of-a-generator-detects-injectivity
kind: lemma
title: "Extension from subobjects of a generator detects injectivity"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-grothendieck-category, def-injective-object, thm-a-locally-small-abelian-category-with-a-generator-is-well-powered, thm-a-generator-detects-equality-of-subobjects, thm-zorn]
proof_strategy: direct
verification:
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

**Given:** A locally small Grothendieck category with a generator $U$ and an object $I$ satisfying the extension property for every subobject $N\subseteq U$.

[L1] In an abelian category, if a subobject $A'\subsetneq B$ is proper, then some morphism from the generator into $B$ factors through $B$ but not through $A'$ ([[thm-a-generator-detects-equality-of-subobjects]]).

[L2] A Grothendieck category is an abelian category with AB5 and a generator ([[def-grothendieck-category]]).

[L3] In a locally small abelian category with a generator, every object has only a set of subobjects up to equivalence ([[thm-a-locally-small-abelian-category-with-a-generator-is-well-powered]]).

[L4] Injective objects are exactly those extending morphisms across monomorphisms ([[def-injective-object]]).

[L5] Zorn's lemma supplies maximal elements once every chain has an upper bound ([[thm-zorn]]).
## Proof

**Proof technique:** direct.

1.1 To extend a map $A\to I$ across a monomorphism $A\rightarrowtail B$, consider the set of pairs $(A',u')$ with $A\subseteq A'\subseteq B$ a subobject and $u':A'\to I$ extending the original map. By [L3], the subobjects $A'\subseteq B$ form a set up to equivalence, and local smallness makes the morphisms $A'\to I$ a set, so this collection is a set. Order it by inclusion of subobjects. [L3, given, algebra]

2.1 If $T$ is a chain of such partial extensions, let $A_\infty$ be the union of the subobjects in that chain inside $B$. Because [L2] gives AB5, this filtered colimit is again a subobject of $B$, and the compatible maps in the chain induce a morphism $u_\infty:A_\infty\to I$ extending the original map. Thus every chain has an upper bound. [L2, step 1.1, algebra]

3.1 By [L5], choose a maximal partial extension $(A_{\max},u_{\max})$. [L5, step 2.1, choose]

4.1 Suppose $A_{\max}\ne B$. By [L1], there exists a morphism $\psi:U\to B$ that does not factor through $A_{\max}$. Let $B_0=\operatorname{im}(\psi)$, let $N=A_{\max}\cap B_0$ inside $B$, and let $M=\psi^{-1}(N)\subseteq U$. The composite $M\to N\to A_{\max}\xrightarrow{u_{\max}} I$ extends by hypothesis to a morphism $\chi:U\to I$. [L1, step 3.1, given, choose, algebra]

5.1 Because $\ker(\psi)\subseteq M$, the map $\chi$ vanishes on $\ker(\psi)$ and therefore factors through $B_0=\operatorname{im}(\psi)$; write the factor map as $u_0:B_0\to I$. The maps $u_{\max}:A_{\max}\to I$ and $u_0:B_0\to I$ agree on $N=A_{\max}\cap B_0$, so they glue to a map $$ A_{\max}+B_0\to I $$ extending $u_{\max}$. Since $\psi$ does not factor through $A_{\max}$, the subobject $A_{\max}+B_0$ is strictly larger than $A_{\max}$, contradicting maximality. Therefore $A_{\max}=B$. [step 4.1, algebra]

6.1 Every map across a monomorphism extends, so $I$ is injective by [L4]. [L4, step 5.1] ∎
