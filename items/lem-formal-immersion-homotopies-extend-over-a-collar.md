---
id: lem-formal-immersion-homotopies-extend-over-a-collar
kind: lemma
title: "Formal-immersion homotopies extend over a collar"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [thm-collar-neighborhood-theorem, def-smooth-collar-of-a-manifold-boundary, def-derivative-map-from-immersions-to-formal-immersions, def-weak-homotopy-equivalence, def-smooth-map-between-manifolds-with-boundary, def-space-of-immersions-and-space-of-formal-immersions, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "John Francis, The h-Principle, Lectures 5 & 6: The Hirsch–Smale theorem (notes by C. Elliott), PDF pp. 1–4: Lemma 1.1, Corollary 1.2, Lemma 1.3 (Hirsch–Smale Fibration Lemma, n > k), Theorems 1.5 and 1.7, Lemma 1.6, Lemma 1.9"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/5%266smalehirsch.pdf
    - title: "John Francis, The h-Principle, Lecture 3: Immersion theory (notes by O. Gwilliam), PDF pp. 1–4: Proposition 2.2 (disk), Definition 2.5 (Serre fibration), Definition 2.6 and Proposition 2.7 (flexible sheaves)"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/3immersions.pdf
dependency_level: 6
---

## Statement

Assume countable choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $X$ be a compact smooth $m$-manifold with boundary, and attach an outward collar to form $X^+=X\cup_{\partial X}(\partial X\times[-1,0])$, using a fixed smooth collar to give the union its smooth structure. Let $X^\circ=\operatorname{int}X$ and let $N$ be a smooth manifold with $\dim N\ge m$. Then each restriction map in
$$\operatorname{Imm}(X^+,N)\longrightarrow\operatorname{Imm}(X,N)\longrightarrow\operatorname{Imm}(X^\circ,N)$$
and in the analogous sequence for $\operatorname{FImm}$ is a homotopy equivalence for the weak compact-open smooth topology. Consequently the derivative map is a weak homotopy equivalence on any one of $X^+$, $X$, and $X^\circ$ if and only if it is one on the other two. The homotopy inverses and their comparison homotopies are given by precomposition with smooth embeddings supported in a collar; they apply simultaneously to parameter families and fix data on a core outside that collar. Thus formal-immersion families and homotopies extend across the attached collar up to these comparison homotopies.

All three source manifolds have dimension $m$. An immersion of $X\times[0,1]$ has source dimension $m+1$ and is a different object from a path of immersions of $X$; no product-source assertion is intended.

## Facts & Assumptions

**Given:** Countable choice, $X$, its attached collar $X^+$ and interior $X^\circ$, and $N$ as in the Statement.

[F1] Under countable choice $X$ admits a smooth collar ([[thm-collar-neighborhood-theorem]], [[def-smooth-collar-of-a-manifold-boundary]]). Rescale its coordinate so that the combined collar in $X^+$ has coordinates $(z,u)\in\partial X\times[-1,4)$, with $X$ given by $u\ge0$ there.

[F2] If $e:M\to M'$ is a smooth embedding of manifolds of the same dimension, precomposition sends an immersion $g$ to $g\circ e$, and a formal immersion $(f,F)$ to $(f\circ e,F\circ de)$. These operations commute with the derivative map ([[def-derivative-map-from-immersions-to-formal-immersions]], [[def-space-of-immersions-and-space-of-formal-immersions]]).

[F3] A homotopy equivalence induces a weak homotopy equivalence, and weak homotopy equivalences satisfy two-of-three ([[def-weak-homotopy-equivalence]]).

## Proof

**Proof technique:** direct.

1.1 Choose a smooth strictly increasing diffeomorphism $\phi:[-1,4)\to[0,4)$ equal to $u$ near $u\ge3$, and satisfying $\phi(u)\ge u$. One explicit construction is $\phi(u)=u+b(u)$, where $b(u)=\int_u^3\rho(v)\,dv$ for $u\le3$, extended by zero for $u\ge3$, and $\rho$ is a smooth nonnegative bump in $(-1,3)$ with integral one and $\rho<1$; such a bump exists because the interval has length four. Thus $\phi(-1)=0$ and $\phi'=1-\rho>0$. The map $c:X^+\to X$ given by $(z,u)\mapsto(z,\phi(u))$ in the collar and by the identity elsewhere is a diffeomorphism. If $j:X\hookrightarrow X^+$ is inclusion, the interpolation $\phi_t(u)=(1-t)u+t\phi(u)$ gives homotopies through embeddings from $\mathrm{id}_{X^+}$ to $jc$ and from $\mathrm{id}_X$ to $cj$ (restrict to $u\ge0$ for the latter). These maps are identity off the collar. [F1, construct, choose]

1.2 Choose a smooth nonnegative function $\chi$ on $[0,4)$ equal to one near zero and zero for $u\ge3$. Choose $a>0$ with $a<1$ and $a\sup|\chi'|<1$. The maps $u\mapsto u+ta\chi(u)$ have positive derivative for $0\le t\le1$, match the identity near $u\ge3$, and stay nonnegative; at $t=1$ they send all of $[0,4)$ into $(0,4)$. They therefore define embeddings $q_t:X\to X$, with $q_0=\mathrm{id}_X$ and $q=q_1:X\to X^\circ$. For $i:X^\circ\hookrightarrow X$, the same homotopy gives $iq\simeq\mathrm{id}_X$ and, restricted to $u>0$, $qi\simeq\mathrm{id}_{X^\circ}$ through embeddings of the indicated sources. [F1, construct, choose]

2.1 Apply precomposition to step 1.1. For either genuine or formal immersion spaces, $c^*$ is a homotopy inverse to restriction $j^*$: their composites are precomposition with $jc$ and $cj$, whose homotopies are supplied there. Similarly $q^*$ is a homotopy inverse to $i^*$ by step 1.2. The precomposition homotopies are continuous in the weak smooth topology: for each compact source set, its image under the smooth embedding homotopy is compact, and the chain rule bounds each tested derivative by finitely many derivatives on that compact image. This also covers the noncompact source $X^\circ$. [F2, step 1.1, step 1.2]

3.1 These constructions act on every member of a parameter family using the same source embeddings. They therefore extend families or homotopies from $X$ to $X^+$ by $c^*$, with their restrictions compared to the original families by the homotopy from $cj$ to $\mathrm{id}_X$; likewise $q^*$ compares the interior and compact source. All comparisons fix the core where the embeddings are identity. In each restriction square the derivative maps commute by [F2] and the horizontal maps are homotopy equivalences by step 2.1. Two-of-three consequently makes the derivative map a weak homotopy equivalence on one source exactly when it is on the other sources. [F2, F3, step 2.1] ∎

## Remarks

The argument supplies homotopy equivalences and comparison homotopies. It does not identify a restriction fibre with a path space, or assert that restriction is a Serre fibration with contractible fibres. Such a fibre assertion is stronger than the collar compression argument and is unnecessary for the interior comparison. Exact extension of a prescribed homotopy with a prescribed initial lift requires a separate lifting theorem.
