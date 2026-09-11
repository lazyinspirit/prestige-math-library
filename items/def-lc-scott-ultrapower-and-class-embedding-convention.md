---
id: "def-lc-scott-ultrapower-and-class-embedding-convention"
kind: "definition"
title: "Scott ultrapowers and class-embedding conventions"
deps: ["def-lc-complete-ultrafilters-and-measurable-cardinals", "def-membership-rank-of-a-set", "thm-relativization-and-set-satisfaction"]
justified_by: ["lem-lc-scott-quotients-are-sets-and-membership-is-setlike"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Monk Chapter 17 opening p.341; Marks Definition 23.4 pp.93–94
      url: https://euclid.colorado.edu/~monkd/jech.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: "draft"
origin: "pipeline"
---

## Definition

In ZF let U be a proper ultrafilter on nonempty I, with completeness conventions as in [[def-lc-complete-ultrafilters-and-measurable-cardinals]]. For set functions $f,g:I\to V$ put $f\sim_U g$ iff $\{i:f(i)=g(i)\}\in U$. Let rho(f) be the least membership rank of any function equivalent to f, and define the **Scott representative**

$$[f]_U=\{g:g:I\to V,\ g\sim_U f,\ \operatorname{rank}(g)=\rho(f)\}.$$

Use [[def-membership-rank-of-a-set]]. Existence as a nonempty set and quotient invariance are proved in the following lemma. The universe ultrapower is the definable class of these representatives, with

$$[f]_U\ E\ [g]_U\quad\Longleftrightarrow\quad\{i:f(i)\in g(i)\}\in U.$$

Its constant map is $x\mapsto[c_x]_U$, where $c_x(i)=x$. The class of all equivalent functions is not used as a set representative.

A supplied **definable elementary embedding** $j:V\to M$ means a definable class function into a definable transitive class M, with set parameters allowed, satisfying elementarity separately for each fixed first-order formula. Its restriction to every set is a set by Replacement. Relativization and class language use [[thm-relativization-and-set-satisfaction]]; there is no uniform satisfaction predicate for V and no quantification over arbitrary class embeddings. Converse embedding characterizations retain this definability and set-restriction convention. No Global Choice or class-set theory is assumed.
