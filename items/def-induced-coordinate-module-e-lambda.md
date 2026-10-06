---
id: def-induced-coordinate-module-e-lambda
kind: definition
title: "The induced coordinate module E(lambda)"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 30
deps: [def-axiom-of-choice, thm-root-subgroups-of-a-split-reductive-group, def-weight-and-dominant-weight-of-a-rational-representation, def-coordinate-hopf-algebra-of-affine-group-scheme, def-rational-representation-and-comodule-of-an-affine-group-scheme, def-borel-subgroup-and-maximal-torus, def-split-reductive-algebraic-group, thm-bruhat-decomposition-for-split-reductive-group, def-primitive-vector-of-a-rational-representation]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 22 (22.21) and (22.29)-(22.30), printed pp. 469-470 and 472; (22.21) footnote on R-points"
    - title: "Robert Steinberg, Lectures on Chevalley Groups (Yale University, 1967; notes prepared by J. Faulkner and R. Wilson)"
      url: "https://math.soimeme.org/~arunram/Resources/YaleNotes.pdf"
      locator: "Ch. 12, Theorem 40 (the module of polynomial functions)"
---
## Definition

Let $(G,T)$ be a split reductive group over $k$, and let $B^0=B^-$ be a provided opposite Borel subgroup. For a provided character of $B^0$ whose restriction to $T$ is $\lambda\in X(T)$, define $E(\lambda)$ to be the $k$-subspace of $O(G)$ ([[def-coordinate-hopf-algebra-of-affine-group-scheme]]) satisfying
$$f(gb)=f(g)\lambda(b^{-1})$$
for every $k$-algebra $R$, $g\in G(R)$ and $b\in B^0(R)$. Here $\lambda$ on $B^0$ denotes that provided extension. The subspace is stable under the **left** regular action $(gf)(x)=f(g^{-1}x)$ and hence is a rational $G$-module ([[def-rational-representation-and-comodule-of-an-affine-group-scheme]]). Its underlying subspace and this action are choice-free. In the source convention this is $\operatorname{Ind}_{B^0}^G(k_\lambda)$.

Assuming AC ([[def-axiom-of-choice]]) for the cited split-Borel structure, $B^0=U^-\rtimes T$ by the dimension-and-exact-image argument in the Remarks of [[def-primitive-vector-of-a-rational-representation]], applied to the opposite Borel. The projection to $T$ extends every $\lambda\in X(T)$ uniquely to a character of $B^0$ trivial on $U^-$. Thus the construction applies to every weight $\lambda$ of the given split torus. The same structural input gives $B^-\cap B=T$ and the open big cells $U^-B$ and $UB^0$ ([[thm-root-subgroups-of-a-split-reductive-group]], [[thm-bruhat-decomposition-for-split-reductive-group]], [[def-borel-subgroup-and-maximal-torus]]).

## Remarks

- **Well-definedness.** The defining condition is checked on $R$-points for
  every $k$-algebra $R$; since $f$ is a regular function on the affine group
  scheme $G$, the condition is an identity of morphisms and the set $E(\lambda)$
  is a $k$-subspace of $O(G)$ stable under the left regular action: if $f$
  satisfies the condition and $g_0\in G(R)$, then
  $(g_0f)(xb)=f(g_0^{-1}xb)=f(g_0^{-1}x)\lambda(b^{-1})=(g_0f)(x)\lambda(b^{-1})$
  for $x\in G(R)$, $b\in B^0(R)$, so $g_0f\in E(\lambda)$.
- **The big cell.** The opposite Borel $B^0=B^-$ is the one appearing in the
  definition, so an element of $E(\lambda)$ is a function on $G$ whose
  restriction to each right $B^0$-coset transforms by $\lambda^{-1}$; the big
  cell $UB^0$ is the open cell of the Bruhat decomposition associated with
  $B$ and $B^0$.
- **Induced module.** The identification with
  $\operatorname{Ind}_{B^0}^G(k_\lambda)=\{f\in\operatorname{Mor}(G,\mathbb A^1):f(gb)=b^{-1}f(g)\}$
  is the source's definition of the induced module; the translation convention
  $\lambda(b^{-1})$ matches the left regular action used here.
- **Choice scope.** For a provided subgroup and character, the equivariance subspace and its left action use no choice principle. AC is inherited only for the supplemental split-Borel projection and big-cell facts above. The comultiplication alone describes right translation, so it is not the coaction label for the left action used here.
