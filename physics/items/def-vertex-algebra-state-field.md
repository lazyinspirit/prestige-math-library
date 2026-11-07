---
id: def-vertex-algebra-state-field
kind: definition
title: Vertex algebra in the state–field convention
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-formal-distribution-on-a-vector-space, def-formal-laurent-series-and-residue]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Christophe Nozaradan, Introduction to Vertex Algebras, §4.2
      url: https://arxiv.org/pdf/0809.1380
    - title: Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras, §§2.5–2.7
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
---

## Definition

A (non-super) **vertex algebra** over $\mathbb C$ is a complex vector space $V$ equipped with a nonzero vector $\mathbf1\in V$, a linear operator $T:V\to V$, and a linear **state–field map**
$$Y(-,z):V\longrightarrow (\operatorname{End}_{\mathbb C}(V))^{\mathbb Z},\qquad a\longmapsto Y(a,z)=\sum_{n\in\mathbb Z}a_{(n)}z^{-n-1},$$
where the codomain denotes all endomorphism-valued coefficient families indexed by $\mathbb Z$.
satisfying the following axioms.

1. **Field and truncation.** For each $a,v\in V$, there is an integer $N(a,v)$ such that $a_{(n)}v=0$ for all $n\ge N(a,v)$. Thus $Y(a,z)v\in V((z))$ in the lower-bounded support sense of [[def-formal-laurent-series-and-residue]].

2. **Vacuum and creation.** $Y(\mathbf1,z)=\operatorname{id}_V$, $T\mathbf1=0$, and
   $$Y(a,z)\mathbf1=e^{zT}a:=\sum_{r\ge0}\frac{z^rT^r a}{r!}.$$
   This is a formal power series; no analytic convergence is asserted.

3. **Translation covariance.** For every $a\in V$,
   $$[T,Y(a,z)]=\partial_zY(a,z).$$

4. **Locality.** For every $a,b\in V$, some integer $N\ge0$ satisfies
   $$(z-w)^N[Y(a,z),Y(b,w)]=0.$$

The coefficient $a_{(n)}b$ is called the $n$th product of the states $a,b$. The mode and formal-distribution conventions in [[def-formal-distribution-on-a-vector-space]] are in force. The axioms are algebraic and do not impose a grading, conformal vector, simplicity, unitarity, or analytic OPE convergence.

## Remarks

The creation axiom is the strong form of the vacuum condition: it gives a formal power series in $z$ with coefficients in $V$ and constant coefficient $a$. Together with translation covariance and $T\mathbf1=0$, it fixes every coefficient of that vacuum series by the recursion $(r+1)[z^{r+1}]Y(a,z)\mathbf1=T([z^r]Y(a,z)\mathbf1)$.
