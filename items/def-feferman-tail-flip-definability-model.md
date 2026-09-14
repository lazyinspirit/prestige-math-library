---
id: def-feferman-tail-flip-definability-model
kind: definition
title: The tail-flip hereditary-symmetric model
status: draft
origin: pipeline
deps: [def-cohen-collapse-and-levy-collapse-forcings, def-symmetric-forcing-system-and-hereditarily-symmetric-names, def-set-difference-and-symmetric-difference, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - {title: "Solomon Feferman, Some applications of the notions of forcing and generic sets, ramified set-theoretic construction and Theorems 4.9 and 4.12, printed pp. 340–344", url: "https://bibliotekanauki.pl/articles/1381977.pdf"}
    - {title: "Eleftherios Tachtsis, On the Existence of Free Ultrafilters on omega and on Russell-sets in ZF, comparison with Feferman's model, pp. 5–7", url: "https://www.impan.pl/shop/publication/transaction/download/product/91097"}
---

## Definition

Work over a transitive $V\models\mathrm{ZFC}+V=L$ and force with
$P=\operatorname{Add}(\omega,\omega)$, the finite partial functions
$p:\omega\times\omega\rightharpoonup2$ from
[[def-cohen-collapse-and-levy-collapse-forcings]]. For a $V$-generic $G$, put

$$S_n=\{k<\omega:(\bigcup G)(n,k)=1\}.$$

Let $\mathscr G=(2^{\omega\times\omega})^V$ act on $P$ by bitwise addition
modulo $2$: for $a\in\mathscr G$, the condition $a\cdot p$ has the same finite
domain as $p$ and
$(a\cdot p)(n,k)=p(n,k)+a(n,k)\pmod 2$. Thus a ground-model set of bits,
possibly infinite, may be flipped. For $m<\omega$ let

$$H_m=\{a\in\mathscr G:a(n,k)=0\text{ whenever }n<m\}.$$

The group is abelian, the $H_m$ are normal and descending, and their upward
closure is a normal filter $\mathcal F$. Hence
$(P,\mathscr G,\mathcal F)$ is a symmetric system in the sense of
[[def-symmetric-forcing-system-and-hereditarily-symmetric-names]]. Define the
**tail-flip hereditary-symmetric model** by

$$\mathsf F_{\mathrm{tf}}=\mathrm{HS}_{\mathcal F}^{G}.$$

Every $x\in\mathsf F_{\mathrm{tf}}$ has an HS name $\dot x$ with one finite
support bound: since $\operatorname{sym}(\dot x)\in\mathcal F$, there is an
$m<\omega$ such that

$$H_m\subseteq\operatorname{sym}(\dot x).$$

This assertion is about the one name $\dot x$. It does **not** say that every
name in the transitive closure of $\dot x$ is fixed by the same $H_m$, nor that
$x$ and all its descendants lie in one hereditary definability class generated
by $S_0,\ldots,S_{m-1}$.

The identifier of this item is retained for compatibility with the earlier
draft, but $\mathsf F_{\mathrm{tf}}$ is defined directly by hereditary symmetry.
It is not defined as the literal union of the classes hereditarily definable
from fixed finite tuples of the $S_n$. That literal union cannot be a ZF model:
it contains each $S_n$ at some stage, but if its internal collection of all
subsets of $\omega$ belonged to one fixed hereditary stage $m$, then every
$S_n$, including $S_m$, would belong to that same stage. The coordinate-$m$
tail flip fixes its permitted predicates and ordinals while moving $S_m$, a
contradiction. Thus the literal union fails Power Set.

Feferman's $M^*$ on printed pp. 340–341 instead comes from a transfinite
ramified type, or ramified type-free, hierarchy. Each formula uses only
finitely many predicate symbols, while the hierarchy can collect objects whose
elements require unbounded finite supports. No equality between that ramified
hierarchy, a fixed-stage hereditary-definability union, and
$\mathsf F_{\mathrm{tf}}$ is asserted here. Ground Choice enters through
$V=L$; the symmetric-model definition itself assumes no Choice internally.
