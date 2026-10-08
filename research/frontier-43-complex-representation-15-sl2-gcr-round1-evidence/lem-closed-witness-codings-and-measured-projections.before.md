---
id: lem-closed-witness-codings-and-measured-projections
kind: lemma
title: "Closed witness codings and completion measurability of Borel projections"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps:
  - def-standard-borel-space
  - lem-finite-products-of-standard-borel-spaces-are-standard-borel
  - def-polish-space
  - def-standard-topologies
  - def-topology-basis-subbasis
  - def-metric-space
  - def-metric-topology
  - def-metric-ball
  - lem-metric-nonnegativity
  - def-metric-bounded-diameter
  - def-complete-metric-space
  - def-separable-space
  - def-countable
  - def-countable-choice
  - lem-countable-iff-surjection-from-n
  - def-product-topology
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-borel-sigma-algebra
  - def-sigma-algebra
  - def-interior-closure-boundary-top
  - def-measure
  - def-measure-space
  - def-completion-of-a-measure-space
  - lem-completed-measure-is-well-defined
  - lem-completion-domain-is-a-sigma-algebra
  - thm-completion-of-a-measure-space
  - def-finite-sigma-finite-and-semifinite-measures
  - thm-infimum-property
  - prop-measure-monotonicity
  - thm-finite-and-countable-subadditivity-of-measures
  - def-natural-number-coding-of-finite-sequences
  - thm-n-cross-n-countable
  - thm-product-of-countable
  - thm-rationals-countable
  - lem-q-and-irrationals-dense-r
  - cor-archimedean-reciprocal
  - thm-well-ordering-principle
  - thm-recursion
  - def-axiom-of-choice
dependency_level: 0
axiom_use: "AC is explicit. Its local uses are countable selections: one witness for each set in a closed-coded intersection, an approximating Borel superset at each positive integer, one Borel envelope for each finite-sequence node, and one approximating point-pair for each stage of a closed-projection limit. AC implies Countable Choice ([[def-countable-choice]]), which is also assumed by the measure-completion suppliers. The least-child branch uses the well-order of the naturals and recursion; fixed candidate-pair codes and coordinate pairings use no choice. No uncountable family is selected locally."
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (complete author-hosted book draft)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Appendix A.C, Theorem A.C.6, printed p. 409 (PDF p. 408): the von Neumann selection theorem is stated for a standard Borel measure and its proof is explicitly referred to Mackey–76, Theorem Z.2, Chapter 2, §2.2. The closed-witness and measured-projection arguments below are local proofs, not attributed to Bekka–de la Harpe."
---

## Statement

Assume the Axiom of Choice. Let $X$ and $Y$ be standard Borel spaces with Polish presentations ([[def-standard-borel-space]], [[def-polish-space]]), and use their finite-product standard Borel structure ([[lem-finite-products-of-standard-borel-spaces-are-standard-borel]]). Every Borel relation $R\subseteq X\times Y$ is the projection onto $X\times Y$ of a closed set $F\subseteq X\times Y\times\mathbb N^{\mathbb N}$. If $\mu$ is a sigma-finite Borel measure on $X$, then the projection onto $X$ of every Borel subset of $X\times Y$ is measurable in the completion of $\mu$ and differs from a Borel subset only inside a Borel $\mu$-null set. More generally, if $(A_s)_{s\in\mathbb N^{<\mathbb N}}$ is a decreasing Borel scheme on $X$, meaning $A_t\subseteq A_s$ whenever $s$ is an initial segment of $t$, then its branch union $\bigcup_{f\in\mathbb N^{\mathbb N}}\bigcap_n A_{f|n}$ has the same completion-measurability and Borel-version property. No global Borel selector is asserted.

## Facts & Assumptions

**Given:** AC, Polish presentations of standard Borel spaces $X,Y$, and a sigma-finite measure $\mu$ on the Borel sigma-algebra of $X$.

[F1] A standard Borel space has a Polish presentation; a Polish space is separable and completely metrizable. Give $\mathbb N$ its discrete topology and $W=\mathbb N^{\mathbb N}$ the product topology. Fixed coordinate pairing identifies $W^{\mathbb N}$ homeomorphically with $W$. Finite products of Polish presentations are Polish and their Borel sigma-algebras equal the product sigma-algebras, so finite products of standard Borel spaces are standard Borel ([[def-standard-borel-space]], [[def-polish-space]], [[def-separable-space]], [[def-complete-metric-space]], [[def-standard-topologies]], [[def-product-topology]], [[def-topology-basis-subbasis]], [[def-product-sigma-algebra-and-finite-product-sigma-algebras]], [[thm-n-cross-n-countable]], [[thm-product-of-countable]], [[lem-finite-products-of-standard-borel-spaces-are-standard-borel]]).

[F2] The set of finite sequences of naturals has an explicit injective natural-number code; every nonempty at-most-countable set has a sequence enumeration; every nonempty subset of $\mathbb N$ has a least element; the rationals are countable and dense in $\mathbb R$, $1/n\to0$, and natural-number recursion is valid ([[def-natural-number-coding-of-finite-sequences]], [[def-countable]], [[lem-countable-iff-surjection-from-n]], [[thm-well-ordering-principle]], [[thm-rationals-countable]], [[lem-q-and-irrationals-dense-r]], [[cor-archimedean-reciprocal]], [[thm-recursion]]).

[F3] The Borel sets form a sigma-algebra. A measure space consists of a set, sigma-algebra, and measure; finite and sigma-finite measures have their stated meanings; a finite measure is monotone and countably subadditive, disjoint Borel decompositions are countably additive, and every nonempty bounded-below subset of $\mathbb R$ has an infimum ([[def-borel-sigma-algebra]], [[def-sigma-algebra]], [[def-measure-space]], [[def-measure]], [[def-finite-sigma-finite-and-semifinite-measures]], [[prop-measure-monotonicity]], [[thm-finite-and-countable-subadditivity-of-measures]], [[thm-infimum-property]]).

[F4] AC implies Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]]). Under Countable Choice the completion domain is a sigma-algebra and the completed set function is a complete measure extending $\mu$ ([[def-completion-of-a-measure-space]], [[lem-completed-measure-is-well-defined]], [[lem-completion-domain-is-a-sigma-algebra]], [[thm-completion-of-a-measure-space]]).

[F5] Metric balls define the metric topology; metric distances are nonnegative, diameter is the supremum of pairwise distances for a nonempty bounded set, and closure is the smallest closed superset ([[def-metric-space]], [[def-metric-topology]], [[def-metric-ball]], [[lem-metric-nonnegativity]], [[def-metric-bounded-diameter]], [[def-interior-closure-boundary-top]]).

## Proof

**Given:** AC, Polish presentations of standard Borel spaces $X,Y$, and a sigma-finite measure $\mu$ on the Borel sigma-algebra of $X$.

[F1] A standard Borel space has a Polish presentation; a Polish space is separable and completely metrizable. Give $\mathbb N$ its discrete topology and $W=\mathbb N^{\mathbb N}$ the product topology. Fixed coordinate pairing identifies $W^{\mathbb N}$ homeomorphically with $W$. Finite products of Polish presentations are Polish and their Borel sigma-algebras equal the product sigma-algebras, so finite products of standard Borel spaces are standard Borel ([[def-standard-borel-space]], [[def-polish-space]], [[def-separable-space]], [[def-complete-metric-space]], [[def-standard-topologies]], [[def-product-topology]], [[def-topology-basis-subbasis]], [[def-product-sigma-algebra-and-finite-product-sigma-algebras]], [[thm-n-cross-n-countable]], [[thm-product-of-countable]], [[lem-finite-products-of-standard-borel-spaces-are-standard-borel]]).

[F2] The set of finite sequences of naturals has an explicit injective natural-number code; every nonempty at-most-countable set has a sequence enumeration; every nonempty subset of $\mathbb N$ has a least element; the rationals are countable and dense in $\mathbb R$, $1/n\to0$, and natural-number recursion is valid ([[def-natural-number-coding-of-finite-sequences]], [[def-countable]], [[lem-countable-iff-surjection-from-n]], [[thm-well-ordering-principle]], [[thm-rationals-countable]], [[lem-q-and-irrationals-dense-r]], [[cor-archimedean-reciprocal]], [[thm-recursion]]).

[F3] The Borel sets form a sigma-algebra. A measure space consists of a set, sigma-algebra, and measure; a finite measure is monotone and countably subadditive, disjoint Borel decompositions are countably additive, and every nonempty bounded-below subset of $\mathbb R$ has an infimum ([[def-borel-sigma-algebra]], [[def-sigma-algebra]], [[def-measure-space]], [[def-measure]], [[prop-measure-monotonicity]], [[thm-finite-and-countable-subadditivity-of-measures]], [[thm-infimum-property]]).

[F4] AC implies Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]]). Under Countable Choice the completion domain is a sigma-algebra and the completed set function is a complete measure extending $\mu$ ([[def-completion-of-a-measure-space]], [[lem-completed-measure-is-well-defined]], [[lem-completion-domain-is-a-sigma-algebra]], [[thm-completion-of-a-measure-space]]).

[F5] Metric balls define the metric topology; metric distances are nonnegative, diameter is the supremum of pairwise distances for a nonempty bounded set, and closure is the smallest closed superset ([[def-metric-space]], [[def-metric-topology]], [[def-metric-ball]], [[lem-metric-nonnegativity]], [[def-metric-bounded-diameter]], [[def-interior-closure-boundary-top]]).



**Proof technique:** direct.

1.1 Give $\mathbb N$ the discrete topology and write $W=\mathbb N^{\mathbb N}$ with its product topology. Define $d_W(f,g)=0$ if $f=g$, and $d_W(f,g)=2^{-k}$ if $k$ is the first coordinate where they differ. If $k$ is the first coordinate where $f$ and $h$ differ, at least one of $f,g$ or $g,h$ differs at a coordinate no later than $k$; hence $d_W(f,h)\le\max\{d_W(f,g),d_W(g,h)\}$, so $d_W$ is an ultrametric. For $m\ge1$, the prefix cylinder $C_m(f)=\{g:g(i)=f(i)\text{ for }i<m\}$ is the metric ball $B(f,2^{-(m-1)})$. Every product-basic neighborhood of $f$ contains a sufficiently long prefix cylinder, and every metric ball is a union of prefix cylinders: around a point $g\ne f$ in the ball, fixing through the first coordinate where $g$ differs from $f$ stays inside the ball; around $f$, choose $m$ with $2^{-m}$ smaller than its radius. Thus $d_W$ induces the product topology. A Cauchy sequence eventually stabilizes at every coordinate, and the stabilized function is its limit, so $d_W$ is complete. Every eventually-zero function has a unique finite prefix ending at its least zero-tail cutoff; the explicit finite-sequence codes make this family countable, and extending any prefix by zeros proves it dense. The finite-prefix cylinders are a countable basis. A fixed bijection $\beta:\mathbb N\times\mathbb N\to\mathbb N$ gives a homeomorphism $W^{\mathbb N}\cong W$ by $(w_n)_n\mapsto w$, $w(\beta(n,k))=w_n(k)$, since it and its inverse send finite-coordinate basic open sets to finite-coordinate basic open sets. [F1, F2, F5]

1.2 If $P,Q$ are Polish and nonempty, choose complete compatible metrics and countable dense sets. Truncate each metric at $1$; balls of radius less than $1$ are unchanged, and a Cauchy sequence for the truncated metric is Cauchy in the original metric at every tolerance less than $1$, so truncation preserves topology and completeness. Sum the two truncated metrics on $P\times Q$. A Cauchy sequence for the sum is Cauchy in each coordinate, and the two limits give its product-metric limit. The sum metric induces the product topology: a sum-metric ball is contained in the product of coordinate balls of the same radius, while the product of coordinate balls of radius $\varepsilon/2$ lies in the sum-metric ball of radius $\varepsilon$. The product of countable dense sets is countable and dense, so $P\times Q$ is Polish. Enumerate each countable dense set and the positive rationals (obtained from an enumeration of $\mathbb Q$ by replacing nonpositive values by $1$). In each factor, balls centered at dense points with positive rational radii form a countable base: given $x\in U$ open, choose $\delta>0$ with $B(x,\delta)\subseteq U$, a dense center $p$ with $d(x,p)<\delta/4$, and a rational $r$ with $d(x,p)<r<\delta-d(x,p)$; then $x\in B(p,r)\subseteq U$. Product rectangles form a countable base. Enumerating that base, each product-open set is the countable union of its rectangles contained in it, hence belongs to the product sigma-algebra. Conversely, for open $V\subseteq Q$, the class of $A\subseteq P$ with $A\times V$ product-Borel is a sigma-algebra containing every open $A$, because open rectangles are product-open; thus it contains every Borel $A$. For each such Borel $A$, the class of $B\subseteq Q$ with $A\times B$ product-Borel is a sigma-algebra containing every open $V$ by the preceding sentence. Thus all Borel rectangles are product-Borel, and the product Borel sigma-algebra equals the product sigma-algebra. The product of two Polish presentations therefore gives a measurable isomorphism with the product Polish presentation, proving the finite-product standard-Borel claim in [F1]. Empty factors are immediate. [F1, F2, F3, F5, algebra]

1.3 Let $\mu$ be a finite Borel measure on Polish $X$. For any $E\subseteq X$ put $a(E)=\inf\{\mu(B):B\text{ Borel},\ E\subseteq B\}$; the family is nonempty since it contains $X$, and its values are bounded between $0$ and $\mu(X)$. By the infimum property and AC, choose Borel $B_n\supseteq E$ with $\mu(B_n)<a(E)+1/n$. Then $H=\bigcap_nB_n$ is Borel, contains $E$, and satisfies $\mu(H)=a(E)$: monotonicity gives $\mu(H)\le\mu(B_n)<a(E)+1/n$ for every $n$, hence $\mu(H)\le a(E)$ as $1/n\to0$, while the definition of $a(E)$ gives the reverse inequality. If $D\supseteq E$ is Borel, then $H\cap D$ is another Borel superset of $E$, so $\mu(H\cap D)\ge a(E)=\mu(H)$; monotonicity gives equality, and finite additivity yields $\mu(H\setminus D)=0$. Thus every set has a Borel envelope $H$ with this null-difference property. [F3, F4]

1.4 Let $Z$ be a nonempty Polish space and choose a bounded complete compatible metric $d$ and a countable dense set $D$. Since $D$ is nonempty at most countable, fix a surjection $q:\mathbb N\to D$. Let $r_0:\mathbb N\to\mathbb Q$ be a surjection and define $r(j)=r_0(j)$ if $r_0(j)>0$ and $r(j)=1$ otherwise; then $r$ surjects onto $\mathbb Q_{>0}$. Pair the indices $(i,j)$ by a fixed bijection $\mathbb N\times\mathbb N\cong\mathbb N$. For a nonempty open $U\subseteq Z$ and depth $n$, declare $(i,j)$ admissible when $\bar B(q_i,r_j)\subseteq U$ and $\operatorname{diam}(B(q_i,r_j))\le1/(n+1)$. Each open ball is open: for $x\in B(q_i,r_j)$, the positive radius $r_j-d(q_i,x)$ gives a ball around $x$ contained in it by the triangle inequality. Each closed ball is closed: if $d(q_i,x)>r_j$, the positive radius $d(q_i,x)-r_j$ gives a ball around $x$ disjoint from it by the reverse triangle inequality; hence the closure of the open ball lies in the closed ball. These balls cover $U$: given $z\in U$, choose $\delta>0$ with $B(z,\delta)\subseteq U$, then choose $q_i$ with $d(z,q_i)<\min(\delta/4,1/(8n+8))$ and a rational radius $r_j$ with $d(z,q_i)<r_j<\min(\delta-d(z,q_i),1/(2n+2))$. The strict upper bound puts the closed ball inside $B(z,\delta)$, and any two points in $B(q_i,r_j)$ are at distance less than $2r_j<1/(n+1)$ by the triangle inequality. For each child index $k$, use its paired code to set $U_{s^\frown k}=B(q_i,r_j)$ when the decoded pair is admissible, and set it empty otherwise. The children cover each nonempty parent; empty parents have only empty children. Thus closures lie inside parents and child diameters tend to zero with depth. [F1, F2, F5]

2.1 For Polish $P$, call $A\subseteq P$ closed-coded if $A=\operatorname{proj}_P(C)$ for some closed $C\subseteq P\times W$. Closed $A$ is closed-coded by $A\times W$. If $A_n=\operatorname{proj}_P(C_n)$, code $\bigcup_n A_n$ by the closed set of $(x,w)$ for which $(x,w_{\ge1})\in C_{w(0)}$, where $w_{\ge1}(k)=w(k+1)$. It is closed because each first-coordinate slice is clopen and the corresponding tail condition is closed. [F1, step 1.1]

2.2 Let $(A_s)_{s\in\mathbb N^{<\mathbb N}}$ be a decreasing Borel scheme, and let $E_s$ be the union of branch intersections over branches extending $s$. Then $E_s\subseteq A_s$ and $E_s=\bigcup_k E_{s^\frown k}$. AC chooses a Borel envelope $H_s$ from step 1.3 for each finite word $s$. Define $B_s=A_s\cap\bigcap_{t\preceq s}H_t$. Then $B_s$ is Borel, $E_s\subseteq B_s\subseteq H_s$, and $B_s\setminus D$ is null for every Borel $D\supseteq E_s$. In particular $C_s=B_s\setminus\bigcup_k B_{s^\frown k}$ is Borel null, since the child union contains $E_s$. For each natural-number code, let $C_m$ be the exceptional set for its unique decoded word if it is a valid code, and otherwise let $C_m=\varnothing$; then $C=\bigcup_m C_m$ is Borel and null by countable subadditivity. If $x\in B_\varnothing\setminus C$, then at every node containing $x$ some child also contains $x$; recursion taking the least such child yields a branch $f$ with $x\in A_{f|n}$ for all $n$. Conversely every branch point lies in $B_\varnothing$. Thus $B_\varnothing\setminus C\subseteq E_\varnothing\subseteq B_\varnothing$, so $E_\varnothing=(B_\varnothing\setminus C)\cup(E_\varnothing\cap C)$ belongs to the completion and differs from a Borel set only inside the Borel null set $C$. [F2, F3, F4, step 1.3]

3.1 If $A_n=\operatorname{proj}_P(C_n)$, use $W^{\mathbb N}\cong W$ to define the closed set of $(x,(w_n))$ satisfying $(x,w_n)\in C_n$ for every $n$. Its projection is $\bigcap_n A_n$: one inclusion is immediate, and for the other AC chooses one witness $w_n$ for each $n$. Thus closed-coded sets are closed under countable unions and intersections. If $U\subseteq P$ is open and $P\setminus U\ne\varnothing$, set $F=P\setminus U$ and define $d(x,F)=\inf\{d(x,y):y\in F\}$. The triangle inequality gives $|d(x,F)-d(x',F)|\le d(x,x')$, so each set $\{x:d(x,F)\ge1/n\}$ is closed. Each $x\in U$ has positive distance from $F$, so these sets cover $U$; if $x\in F$, its distance is $0$. For $U=P$ the assertion is immediate. The class of sets whose members and complements are closed-coded is therefore a sigma-algebra containing all open sets. Every Borel subset of $P$ is closed-coded. [F1, F3, F5, step 1.1, step 2.1]

3.2 If $Z=\varnothing$ or $F=\varnothing$, its projection is empty and the branch scheme with all terms empty has empty branch union. Otherwise use the tree from step 1.4 and put $A_s=\overline{\operatorname{proj}_X(F\cap(X\times U_s))}$, a closed decreasing scheme on $X$. Its branch union is exactly $\operatorname{proj}_X(F)$. If $(x,z)\in F$, recursively choose the least child at each depth containing $z$, which exists because the children cover their parent; this gives a branch with $z\in U_{f|n}$, hence $x\in A_{f|n}$ for every $n$. Conversely, if $x$ lies in a branch intersection, then every open ball around $x$ meets $\operatorname{proj}_X(F\cap(X\times U_{f|n}))$: otherwise its closed complement would be a closed superset of that projection omitting $x$, contrary to the definition of $A_{f|n}$. For each $n\ge1$ choose $x_n$ within $1/(n+1)$ of $x$ and $z_n\in U_{f|n}$ with $(x_n,z_n)\in F$. For $m\ge n\ge1$, both $z_m,z_n\in U_{f|n}$, whose diameter is at most $1/n$ by step 1.4, so $(z_n)_{n\ge1}$ is Cauchy; completeness gives $z_n\to z$. Since $x_n\to x$ and $F$ is closed in the product topology, $(x,z)\in F$. Step 2.2 therefore gives completion-measurability and a Borel version for the projection of every closed $F$ under a finite Borel measure. [F1, F2, F4, F5, step 1.4, step 2.2]

4.1 For sigma-finite $\mu$, choose a Borel cover $(E_n)$ by finite-measure sets and make it disjoint by $D_n=E_n\setminus\bigcup_{k<n}E_k$. For each $n$, $\mu_n(A)=\mu(A\cap D_n)$ is a finite Borel measure by countable additivity. For each Borel relation $R$, its piece $R\cap(D_n\times Y)$ is Borel; step 3.1 gives it a closed witness, and step 3.2 gives a finite-measure Borel version for its projection under $\mu_n$. For a branch union $S$ of a decreasing scheme $(A_s)$, the piece $S\cap D_n$ is the branch union of the Borel scheme $(A_s\cap D_n)$, so step 2.2 gives the same finite-measure conclusion. In either case intersect each Borel version and its Borel null exceptional set with $D_n$, obtaining $G_n,C_n\subseteq D_n$ with $G_n\setminus C_n\subseteq S_n\subseteq G_n$ and $\mu(C_n)=0$. Countable subadditivity shows that $G=\bigcup_nG_n$ is Borel, $C=\bigcup_nC_n$ is Borel null, and $G\setminus C\subseteq S\subseteq G$; therefore $S$ is measurable in the completion and agrees with $G$ off $C$. By [F4] the completion is a complete measure space. Finally, for Borel $R\subseteq X\times Y$, step 3.1 gives closed $F\subseteq X\times Y\times W$ with $\operatorname{proj}_{X\times Y}(F)=R$, so $\operatorname{proj}_X(R)=\operatorname{proj}_X(F)$. This proves all the claims. The source’s Theorem A.C.6 is a conull selector statement with its proof referred out; no selector is used here. [F3, F4, step 3.1, step 2.2, step 3.2] ∎
