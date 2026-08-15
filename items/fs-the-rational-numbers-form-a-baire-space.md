---
id: fs-the-rational-numbers-form-a-baire-space
kind: false-statement
title: "The rational numbers form a Baire space"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-baire-space-equivalent-characterisations, def-nowhere-dense-meagre-and-residual-subsets, cor-q-is-meager-and-not-g-delta, thm-rationals-countable, thm-metric-hausdorff-separation, thm-the-separation-implication-chain, thm-t1-iff-singletons-are-closed]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David Marker, Descriptive Set Theory, §§1–2"
      url: "https://www.math.uic.edu/~marker/math512/dst.pdf"
    - title: "Michael Kunzinger, General Topology, §§11.3–11.4"
      url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"
    - title: "MFF General Topology course summary, §4.3"
      url: "https://www.karlin.mff.cuni.cz/~cuth/doc/MFF/OT/ot_ENG.pdf"
pipeline_run: null
---

## Statement

The false claim is: $\mathbb Q$, with its usual subspace topology from $\mathbb R$, is a Baire space.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] For a topological space $X$, the following are equivalent: every countable intersection of dense open sets is dense; every countable union of closed sets with empty interior has empty interior; no nonempty open subset is meagre in $X$; and every residual subset meets every nonempty open set. The equivalence includes the empty space. ([[thm-baire-space-equivalent-characterisations]]).

[F2] Let $X$ be a topological space and let $A\subseteq X$. The set $A$ is **nowhere dense** when $\operatorname{int}(\overline A)=\varnothing$ (def-interior-closure-boundary-top). It is **meagre** when there is a sequence $(N_n)_{n\in\mathbb N}$ of nowhere dense subsets of $X$ with $A\subseteq\bigcup_nN_n$. It is **residual**, or **comeagre**, when $X\setminus A$ is meagre. The empty union shows that $\varnothing$ is meagre, including when $X=\varnothing$. ([[def-nowhere-dense-meagre-and-residual-subsets]]).

[F3] Write $\mathbb{Q}_{\mathbb{R}}$ for the image of $\mathbb{Q}$ in $\mathbb{R}$ under the canonical embedding $q \mapsto \hat q$ (lem-rat-embeds-dense), the set usually written $\mathbb{Q}$ once the identification is made, and put $X := \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$ for the irrationals. Then: 1. $\mathbb{Q}_{\mathbb{R}}$ is an $F_\sigma$ set (def-f-sigma-g-delta) and is meager (def-nowhere-dense-meager); 2. $X$ is a $G_\delta$ set and is residual; 3. $\mathbb{Q}_{\mathbb{R}}$ is **not** a $G_\delta$ set, and $X$ is **not** an $F_\sigma$ set. Claims 1 and 2 are bookkeeping. Claim 3 is the substance and is exactly where thm-baire-category-r is spent: no argument from the algebra of open and closed sets alone can reach it, since $\mathbb{Q}_{\mathbb{R}}$ and $X$ are interchanged by complementation while $F_\sigma$ and $G_\delta$ are, so any such argument would prove the same thing about both sets and about neither. ([[cor-q-is-meager-and-not-g-delta]]).

[F4] $\mathbb{Q} \approx \mathbb{N}$ (def-equinumerous): the rationals are countably infinite (def-countable). **No choice principle is used.** The one place where a reader expects a choice, "pick a representative $a/b$ of each rational", is exactly where lem-rat-positive-denominator applies: every rational *has* a representative with positive denominator, so the map $(a,b) \mapsto [(a,b)]$ defined on $\mathbb{Z} \times \mathbb{Z}_{>0}$ is already **surjective** onto $\mathbb{Q}$, and countability follows from a surjection without ever selecting a representative. The same device handles $\mathbb{Z}$, which is a surjective image of $\mathbb{N} \times \mathbb{N}$ by construction (def-integers). ([[thm-rationals-countable]]).

[F5] Let $(X,d)$ be a metric space (def-metric-space) and let $p, q \in X$ with $p \ne q$. Put $r := d(p,q)/2$. Then $r > 0$ and $$B(p,r) \cap B(q,r) = \emptyset .$$ Both sets are open (thm-metric-open-set-algebra) and contain $p$ respectively $q$ (def-metric-ball), so every metric space is **Hausdorff**: distinct points are separated by disjoint open sets (def-metric-topology). ([[thm-metric-hausdorff-separation]]).

[F6] Let $(X, \mathcal{T})$ be a topological space (def-topological-space). The following implications hold, and each is proved by an earlier item of this page. 1. **Perfectly normal implies completely normal**, assuming the Axiom of Countable Choice (def-countable-choice). 2. **Completely normal implies normal**, and **perfectly normal implies normal**. 3. **Normal together with $T_1$ implies $T_3$**, that is regular together with $T_1$. 4. **Completely regular implies regular**, and **Tychonoff implies $T_3$**. 5. **Regular together with $T_1$ implies Urysohn**, which implies **Hausdorff**, which implies **$T_1$**, which implies **$T_0$**. 6. **Metrizable implies every property named above**: a metrizable space is perfectly normal, completely normal, normal, Tychonoff, completely regular, $T_3$, regular, Urysohn, Hausdorff, $T_1$ and $T_0$, with no choice principle used. Reading the numbered axioms in order, clauses 1 to 5 give $$T_6 \Rightarrow T_5 \Rightarrow T_4 \Rightarrow T_3 \Rightarrow T_{2\frac12} \Rightarrow T_2 \Rightarrow T_1 \Rightarrow T_0 ,$$ the first arrow under $\mathrm{AC}_\omega$, together with $T_{3\frac12} \Rightarrow T_3$. **This is the whole of the classical chain that this page proves, and it is one arrow short of the classical chain.** The implication $T_4 \Rightarrow T_{3\frac12}$ — a normal $T_1$ space is completely regular — is Urysohn's lemma and is not available at this point in the reading order. Its absence is recorded, with what would license it, in this page's conventions remark; it is deliberately **not** asserted here, and no clause above may be read as giving it. ([[thm-the-separation-implication-chain]]).

[F7] Let $(X, \mathcal{T})$ be a topological space (def-topological-space) and let $\mathcal{T}_{\mathrm{cof}}$ be the cofinite topology on the set $X$ (def-standard-topologies). The following four conditions are equivalent. - **(a)** $X$ is $T_1$ (def-t0-and-t1-spaces). - **(b)** $\{x\}$ is closed for every $x \in X$. - **(c)** $F$ is closed for every finite $F \subseteq X$ (def-countable). - **(d)** $\mathcal{T}_{\mathrm{cof}} \subseteq \mathcal{T}$, that is, the topology of $X$ is finer than the cofinite topology on the same set. Condition (d) says that the cofinite topology is the **coarsest** $T_1$ topology on any set: it is $T_1$ by the equivalence, and every $T_1$ topology on that set contains it. ([[thm-t1-iff-singletons-are-closed]]).

## Refutation

**Proof technique:** direct.

1.1 In the subspace topology each rational singleton is closed with empty interior, while the rational numbers are countable. [given, F7, F1, F6, F4]

2.1 Thus the whole nonempty space is meagre in itself, contradicting the nonmeagre-open form of the Baire property. [step 1.1, F1, F5, F6]

3.1 Cross-check with the published statement that the rationals are meagre and not $G_\delta$ in the real line. [step 2.1, F6, F2, F3]

4.1 The preceding construction and implications establish the assertion. [step 3.1] ∎
