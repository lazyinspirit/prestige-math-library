---
id: def-compact-parameter-pair
kind: definition
title: "Compact parameter pairs and relative families"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-countable-choice, def-formal-immersion-between-smooth-manifolds, def-weak-compact-open-smooth-topology-on-mapping-spaces, def-space-of-immersions-and-space-of-formal-immersions, def-smooth-manifold, def-compact-space, def-smooth-family-of-maps-and-evaluation-map, def-homotopy-relative-and-path-homotopy, thm-the-exponential-law, def-compact-open-topology]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "John Francis, The h-Principle, Lecture 3: Immersion theory (notes by O. Gwilliam), PDF pp. 1–4: Proposition 2.2 (disk), Definition 2.5 (Serre fibration), Definition 2.6 and Proposition 2.7 (flexible sheaves)"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/3immersions.pdf
    - title: "John Francis, The h-Principle, Lectures 5 & 6: The Hirsch–Smale theorem (notes by C. Elliott), PDF pp. 1–4: Lemma 1.1, Corollary 1.2, Lemma 1.3 (Hirsch–Smale Fibration Lemma, n > k), Theorems 1.5 and 1.7, Lemma 1.6, Lemma 1.9"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/5%266smalehirsch.pdf
    - title: "Janek Wilhelm, The Smale–Hirsch Immersion Theorem and other Applications to Closed Manifolds, §§1–2, PDF pp. 1–3 (Theorem 1, relative parametric C⁰-dense h-principle for immersions with q > n; microextension and local h-principle 8.3.1)"
      url: https://www2.mathematik.hu-berlin.de/~wendl/Sommer2025/hPrinzip/20250530_Wilhelm.pdf
dependency_level: 2
---

## Definition

A **compact parameter pair** is a pair $(P,Q)$ in which $P=P_0\times[0,1]^d$, where $P_0$ is a compact smooth manifold without boundary (possibly empty) and $d\ge0$, and $Q\subseteq P$ is closed (possibly empty); $P$ is the **parameter manifold** and $Q$ the **relative parameter set**. Smoothness in the interval coordinates means local smooth extendibility to open Euclidean neighbourhoods, including at corners. This class contains spheres, cubes and intervals and is closed under products with $[0,1]$, so it also contains the homotopy parameters used below. The smoothing constructions extend the interval coordinates by clamping them before convolution; they do not require a tubular neighbourhood theorem for manifolds with corners.

Let $M$ and $N$ be smooth manifolds and let $(P,Q)$ be a compact parameter pair.

For families and homotopies of formal immersions below, assume $\dim M\le\dim N$, as required by the supplied immersion mapping spaces; the map-family clauses have no dimension restriction.

- A **smooth $P$-family of maps $M\to N$** is a smooth map $F:P\times M\to N$, with **slices** $F_p:=F(p,\cdot)$; $F$ is also called the evaluation map of the family ([[def-smooth-family-of-maps-and-evaluation-map]]).
- A **continuous $P$-family** is a continuous map $\Phi:P\to C^\infty(M,N)$ for the weak compact-open $C^\infty$ topology ([[def-weak-compact-open-smooth-topology-on-mapping-spaces]]). By the exponential law its **adjoint** $P\times M\to N$, $(p,x)\mapsto\Phi(p)(x)$, is continuous ([[thm-the-exponential-law]], [[def-compact-open-topology]]). The family is **smooth** when it is the transpose of a smooth $P$-family, i.e. $\Phi(p)=F_p$ for a smooth $F$.
- Under $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the canonical tangent bundles and their total-space mapping topology, a **family of formal immersions** over $P$ is a continuous map $\Phi:P\to\operatorname{FImm}(M,N)$ ([[def-space-of-immersions-and-space-of-formal-immersions]]); it is **smooth** when it is the transpose of a pair $(f,F)$ of smooth maps $f:P\times M\to N$, $F:P\times TM\to TN$ with $F$ a fibrewise injective smooth bundle map over $f$ ([[def-formal-immersion-between-smooth-manifolds]]). A family is **genuine** when its slices lie in $\operatorname{Imm}(M,N)$, and **holonomic** on a subset $A\subseteq P$ when $F_p=df_p$ for every $p\in A$; it is **smoothly holonomic** on $A$ when some open neighbourhood $W$ of $A$ in $P$ carries a smooth family $g:W\times M\to N$ with $f=g$ and $F=dg$ on $W\times M$.
- Under the same $\mathrm{AC}_\omega$ assumption, a **homotopy of $P$-families** of formal immersions is a continuous map $H:P\times[0,1]\to\operatorname{FImm}(M,N)$, read as a family parametrized by the compact manifold with boundary $P\times[0,1]$; it is **relative to $Q$** when $H(q,s)=H(q,0)$ for all $q\in Q$ and $s\in[0,1]$, and **relative to $\partial P$** in the smooth case when it is constant along $\partial P\times[0,1]$. A homotopy is **smooth** when it is given by a smooth family over $P\times[0,1]$; a smooth homotopy of genuine families is a homotopy through genuine families, i.e. a **regular homotopy** when $P$ is a point.
