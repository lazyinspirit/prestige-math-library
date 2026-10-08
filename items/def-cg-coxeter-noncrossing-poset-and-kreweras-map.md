---
id: def-cg-coxeter-noncrossing-poset-and-kreweras-map
kind: definition
title: "Coxeter elements, the noncrossing interval [1,c], and the Kreweras map w ↦ w⁻¹c"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 15
deps:
  - def-hh-coxeter-matrix-word-group-and-length
  - def-cg-coxeter-diagram-components-and-finite-type
  - lem-cg-diagram-products-and-invariant-form-comparison
  - def-cg-real-coxeter-form-and-reflection
  - def-cg-canonical-reflection-homomorphism
  - def-cg-bipartite-coxeter-element-and-root-recursion
  - def-cg-reflection-length-absolute-order-and-moved-space
  - def-generated-subgroup
  - def-symmetric-group
  - lem-symmetric-group-is-a-group
justified_by:
  - thm-cg-noncrossing-finite-lattice-and-conjugacy-independence
  - thm-cg-kreweras-complement-and-type-a-partition-model
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
proof_strategy: definition
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "H. Eriksson and K. Eriksson, Conjugacy of Coxeter Elements, Electronic Journal of Combinatorics 16(2) (2009), #R4"
      url: "https://www.combinatorics.org/ojs/index.php/eljc/article/view/v16i2r4"
      locator: "Abstract and Introduction, p. 1: a Coxeter word is a permutation of S and the corresponding product is a Coxeter element; Theorem 1.1 characterizes conjugacy among Coxeter elements"
    - title: "D. Armstrong, Generalized Noncrossing Partitions and Combinatorics of Coxeter Groups, Memoirs of the AMS 202 (2009), no. 949, arXiv:math/0611106v2"
      url: "https://arxiv.org/pdf/math/0611106"
      locator: "§2.6, printed pp. 30–32: Definition 2.6.1 (standard Coxeter elements), Lemma 2.6.2 (finite-type conjugacy), Definition 2.6.7 (NC(W,c)=[1,c]), and Notation 2.6.10 (Kreweras complement)"
    - title: "T. Brady and C. Watt, Lattices in Finite Real Reflection Groups, Transactions of the American Mathematical Society 360 (2008), 4809–4844, arXiv:math/0501502"
      url: "https://arxiv.org/pdf/math/0501502"
      locator: "§2, printed pp. 2–3: reflection length, the absolute-order relation, and moved/fixed spaces; the paper's main interval [I,γ] uses a finite real reflection group"
---

## Definition

Let $(W,S)$ be a Coxeter system with $S$ finite, Coxeter diagram $\Gamma$, word length $\ell$, and presented group $W$ ([[def-hh-coxeter-matrix-word-group-and-length]], [[def-cg-coxeter-diagram-components-and-finite-type]]). Let $V=\mathbb R^S$ have its Coxeter form $B$ and canonical reflection homomorphism $\rho:W\to\mathrm{GL}(V)$; its reflection set is $T=\{wsw^{-1}:w\in W,\ s\in S\}$ ([[def-cg-real-coxeter-form-and-reflection]], [[def-cg-canonical-reflection-homomorphism]]). Extend the finite-type formulas of [[def-cg-reflection-length-absolute-order-and-moved-space]] (1),(2) to this possibly infinite group by defining
$$\ell_T(w):=\min\{k\in\mathbb N:w=t_1\cdots t_k,\ t_i\in T\},\qquad u\le_Tv\iff\ell_T(v)=\ell_T(u)+\ell_T(u^{-1}v).$$
The minimum exists because $S\subseteq T$ generates $W$; the empty product is $1$.

**(1) Coxeter elements.** Put $n=|S|$ and choose a bijection $\sigma:\{1,\ldots,n\}\to S$. The product $c_\sigma=\sigma(1)\cdots\sigma(n)$ is the Coxeter element for that ordering; a **Coxeter element** of $(W,S)$ is any such product, with each simple reflection used exactly once. For $n=0$ the unique empty ordering has empty product $1$; for $n=1$ the product is the sole simple reflection. If $\Gamma$ is connected and $W$ is of finite type, the bipartite construction of [[def-cg-bipartite-coxeter-element-and-root-recursion]] (1) gives one particular Coxeter element. This definition makes no claim that distinct orderings give conjugate elements.

**(2) The noncrossing interval.** For an irreducible system and a Coxeter element $c$, define
$$\operatorname{NC}(W,c):=[1,c]_{\le_T}=\{w\in W:1\le_T w\le_T c\},$$
with the order induced by $\le_T$. Since $T$ generates $W$, $\ell_T$ is a word length: it is subadditive, vanishes only at $1$, and $\ell_T(1)=0$. Thus $u\le_T u$; if $u\le_T v$ and $v\le_T u$, adding the two defining equalities gives $\ell_T(u^{-1}v)=\ell_T(v^{-1}u)=0$, so $u=v$. If $u\le_T v\le_T w$, subadditivity gives
$$\ell_T(w)\le\ell_T(u)+\ell_T(u^{-1}w)\le\ell_T(u)+\ell_T(u^{-1}v)+\ell_T(v^{-1}w)=\ell_T(w),$$
so equality holds throughout and $u\le_T w$. Hence $\le_T$ is a partial order, and $1$ is the least element of the interval. The chosen $c$ is part of the definition; independence up to isomorphism for finite type is proved in [[thm-cg-noncrossing-finite-lattice-and-conjugacy-independence]] (4), not assumed here.

**(3) Reducible systems.** If the connected components of $\Gamma$ have vertex sets $S_1,\ldots,S_k$, then $W\cong W_{S_1}\times\cdots\times W_{S_k}$ by [[lem-cg-diagram-products-and-invariant-form-comparison]] (1), where $W_{S_i}=\langle S_i\rangle$ ([[def-generated-subgroup]]). A Coxeter element $c$ has coordinates $c_i$, each a Coxeter element for $(W_{S_i},S_i)$. Define
$$\operatorname{NC}(W,c):=\prod_{i=1}^k\operatorname{NC}(W_{S_i},c_i)$$
with componentwise order; for $k=0$ this is the one-element empty product. This agrees with the ambient interval $[1,c]_{\le_T}$: conjugates of a simple generator stay in its component, so $T$ is the disjoint union of the component reflection sets $T_i$ in their respective factors. Any reflection factorization of $(w_i)$ projects to one in each factor, giving $\ell_T((w_i))\ge\sum_i\ell_{T_i}(w_i)$; concatenating shortest factorizations in the factors gives the reverse inequality. Hence reflection length is the sum of the component lengths, and the absolute-order relation is componentwise. For $k=0$, $W=\{1\}$ and both the interval and product are singletons.

**(4) The Kreweras map.** Define
$$K:\operatorname{NC}(W,c)\to W,\qquad K(w):=w^{-1}c.$$
This is well-defined as a map to $W$ by the group operations. It is not defined here as a map into $\operatorname{NC}(W,c)$, and no bijectivity or order-reversal is asserted; those properties are proved in [[thm-cg-kreweras-complement-and-type-a-partition-model]] (1).

**(5) Abstentions.** This definition asserts no finiteness, lattice property, conjugacy of Coxeter elements, independence from $c$, or Kreweras-complement property beyond the definitions above. In the reducible case the product definition in (3) is justified locally as the ambient absolute interval; the lattice theorem remains a separate finite-type result. No form of the Axiom of Choice is used.

## Remarks

- **Open supplier obligations.** These current in-run suppliers have no closed Step-3 disposition: `def-hh-coxeter-matrix-word-group-and-length` supplies the Coxeter-system and word-length conventions in the opening Definition; `def-cg-coxeter-diagram-components-and-finite-type` supplies the diagram/components in the opening Definition; `def-cg-real-coxeter-form-and-reflection` and `def-cg-canonical-reflection-homomorphism` supply the form, reflection representation and reflection set in the opening Definition; `def-cg-reflection-length-absolute-order-and-moved-space` supplies $ℓ_T$ and $≤_T$ in the opening Definition; and `lem-cg-diagram-products-and-invariant-form-comparison` supplies the component product in clause (3). The bipartite example in clause (1), sentence 4 provisionally uses `def-cg-bipartite-coxeter-element-and-root-recursion`, whose current inputs require an owner decision. There is no numbered proof step in a definition. Reconcile each completed supplier statement with its exact use before clearing this item's decision.
- The set of Coxeter elements need not be a union of $W$-conjugacy classes. Take the presentation with generators $s_1,s_2,s_3$ and only the relations $s_i^2=1$ (the free product $C_2*C_2*C_2$). On the set $X$ of words with no equal adjacent letters, let $s_i$ delete the first letter when it is $s_i$, and otherwise prepend $s_i$. Each operation is an involution in the permutation group $\operatorname{Sym}(X)$ ([[def-symmetric-group]], [[lem-symmetric-group-is-a-group]]), so the presentation's universal property gives a homomorphism to that group. A word with no equal adjacent letters sends the empty word to its own letter string, whereas a product of $k$ generators sends it to a string of length at most $k$. Therefore $s_2s_1s_2s_3s_2$ has word length five. It equals $s_2(s_1s_2s_3)s_2$, but cannot be a once-each product of three generators.
