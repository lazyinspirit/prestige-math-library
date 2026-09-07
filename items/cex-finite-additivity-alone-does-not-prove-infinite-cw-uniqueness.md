---
id: "cex-finite-additivity-alone-does-not-prove-infinite-cw-uniqueness"
kind: "counterexample"
title: "Finite additivity alone does not prove infinite cw uniqueness"
deps: ["prop-unreduced-pair-and-reduced-quotient-axioms-are-equivalent-on-cw-pairs", "thm-singular-homology-satisfies-dimension-and-arbitrary-additivity", "lem-axiomatic-cellular-boundaries-are-integral-incidence-matrices-with-coefficients", "lem-finite-dimensional-skeletal-exactness-computes-axiomatic-homology", "lem-additivity-and-compact-cell-support-control-the-infinite-cw-colimit"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hatcher, Algebraic Topology, §2.3 Exercise 2, p.165"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "§2.3 Exercise 2, p.165"
status: "draft"
origin: "pipeline"
proof_strategy: "Construct boundary maps by shifting the graded family of ordinary connecting maps; finite lost end coordinates vanish in product/sum. Prove exactness of the product/sum functor on graded abelian groups by coordinate lifting and finite-support corrections, rather than asserting that quotients of theories are exact. On finite-dimensional CW pairs only finitely many reduced degrees occur, so E=0. On the infinite wedge its value is product Z/direct-sum Z, nonzero via the all-ones class, while E of each sphere is zero. Pass to pairs by the quotient formulation. This is an explicit counterexample to replacing arbitrary by finite additivity."
---

## Statement refuted

Finite additivity cannot replace arbitrary additivity in uniqueness on all CW pairs. For every integer $n$, set
$$E_n(X)=\left(\prod_{i\ge0}\widetilde H_i(X;\mathbb Z)\right)\Big/\left(\bigoplus_{i\ge0}\widetilde H_i(X;\mathbb Z)\right).$$
This construction on based CW spaces satisfies the reduced homotopy, exactness, excision, suspension, and dimension axioms with zero coefficient group, and finite wedge additivity, but fails arbitrary wedge additivity. Its pair version is
$$E_n(X,A)=\left(\prod_{i\ge0}H_i(X,A;\mathbb Z)\right)\Big/\left(\bigoplus_{i\ge0}H_i(X,A;\mathbb Z)\right).$$
The theory $H_n(X,A;\mathbb Z)\oplus E_n(X,A)$ satisfies the unreduced ordinary axioms with coefficient $\mathbb Z$ except arbitrary additivity, agrees with $H$ on every finite-dimensional CW pair, and differs on $W=\bigvee_{i\ge1}S^i$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] Ordinary unreduced theories on CW pairs and reduced ordinary theories on based CW spaces with vertex basepoints determine one another, naturally and compatibly with morphisms and coefficients. For $A\ne\varnothing$ the correspondence gives $h_n(X,A)\cong\widetilde h_n(X/A)$; for $A=\varnothing$ it gives $h_n(X)\cong\widetilde h_n(X_+)$, where $X_+=X\sqcup\{*\}$. Under this correspondence, pair boundaries are cofiber boundaries followed by inverse suspension, and arbitrary disjoint-sum additivity corresponds to arbitrary wedge additivity. For a CW triple $B\subset A\subset X$ there is a natural exact sequence $\cdots\to h_n(A,B)\to h_n(X,B)\to h_n(X,A)\to h_{n-1}(A,B)\to\cdots$, whose last map is the pair boundary followed by $h_{n-1}(A)\to h_{n-1}(A,B)$. ([[prop-unreduced-pair-and-reduced-quotient-axioms-are-equivalent-on-cw-pairs]])

[F2] For any abelian group $G$, $H_0(*;G)\cong G$ and $H_n(*;G)=0$ for every integer $n\ne0$. For every set-indexed family of pairs the canonical map $$\bigoplus_\alpha H_n(X_\alpha,A_\alpha;G)\longrightarrow H_n\left(\bigsqcup_\alpha X_\alpha,\bigsqcup_\alpha A_\alpha;G\right)$$ is an isomorphism. Together with the structural axioms, singular homology is an ordinary theory with coefficient group $G$. ([[thm-singular-homology-satisfies-dimension-and-arbitrary-additivity]])

[F3] For a CW pair $(X,A)$, an ordinary theory $h$ with coefficient $G$, and chosen cell orientations, the complex $C_*^h(X,A)$ is canonically $$C_*^{\mathrm{cell}}(X,A;\mathbb Z)\otimes G.$$ Its differential is the integral incidence matrix acting on $G$. In degree one the entries are signed terminal-minus-initial endpoints. The direct-sum matrices have finite support in each column. ([[lem-axiomatic-cellular-boundaries-are-integral-incidence-matrices-with-coefficients]])

[F4] For every finite-dimensional CW pair $(X,A)$ and ordinary theory $h$, there is a canonical isomorphism $$h_n(X,A)\cong H_n(C_*^h(X,A))$$ for every integer $n$, natural for cellular maps. It is the skeletal lift isomorphism described below and commutes with the homology connecting maps of pairs. The number of cells need not be finite. ([[lem-finite-dimensional-skeletal-exactness-computes-axiomatic-homology]])

[F5] For every ordinary theory $h$ with arbitrary additivity and every CW pair $(X,A)$, the canonical map $$\operatorname{colim}_{i\ge0}h_n(X^i,A^i)\longrightarrow h_n(X,A)$$ is an isomorphism. So is the canonical colimit over finite subcomplex pairs $(K,K\cap A)$ of $X$. The latter identification is natural for every continuous map of CW pairs. ([[lem-additivity-and-compact-cell-support-control-the-infinite-cw-colimit]])

## Counterexample

1.1 For a family of abelian groups $M_i$, denote $\prod_{i\ge0}M_i/\bigoplus_{i\ge0}M_i$ by $Q(M)$. Degreewise maps induce maps of $Q$, giving functoriality. If $A_i\xrightarrow{u_i}B_i\xrightarrow{v_i}C_i$ is exact at every $B_i$, then $Q(A)\to Q(B)\to Q(C)$ is exact: when $v(b)$ is finitely supported, replace the finitely many bad coordinates of $b$ by zero; the resulting equivalent tuple lies in $\prod\ker v_i$. Choose coordinate lifts in $A_i$ and obtain a preimage in $Q(A)$. The converse inclusion follows from $v_iu_i=0$. This uses ordinary choice for the countable family of nonempty lift sets. Adding, deleting, or altering finitely many initial coordinates has no effect on $Q$. [construct, algebra]

2.1 Apply step 1.1 to the ordinary singular pair sequence supplied by [F2]. Define the $E$ boundary by sending a representative $(x_i)_{i\ge0}$ to the tuple whose $j$th coordinate is the singular boundary $\partial x_{j+1}\in H_j(A;\mathbb Z)$. Dropping the unused initial coordinate is precisely the shift identification of step 1.1. At each term the coordinatewise singular exact sequence and that shift prove the required exactness, even though $E_n$ is independent of $n\in\mathbb Z$. Homotopies and excision induce coordinatewise equal maps and isomorphisms, so they do so on $Q$. Apply [F1] here only to the ordinary singular theory [F2]: its quotient identifications and suspension isomorphisms give coordinatewise reduced cofiber sequences and suspension maps. Applying $Q$ and step 1.1 gives the reduced $E$ axioms and identifies them with the displayed pair construction. Replacing reduced absolute groups by unreduced absolute groups changes only coordinate zero and therefore does not change $Q$. All structure maps are natural. [F1, F2, step 1.1, construct]

2.2 A point, the empty space under the zero reduced-empty convention, and $S^0$ have reduced homology in at most one degree. Their $Q$ groups vanish; hence the coefficient of $E$ is zero. For any finite family, the product over degrees commutes with its finite direct sum, as does the finite-support subgroup. Thus finite disjoint-sum additivity holds for pairs and finite wedge additivity for reduced spaces. For a finite-dimensional CW pair of dimension at most $N$, [F3] and [F4] applied to singular homology give $H_i(X,A;\mathbb Z)=0$ outside $0\le i\le N$, regardless of the number of cells. Therefore $E_n(X,A)=0$ for every integer $n$. [F2, F3, F4, step 1.1, algebra]

3.1 Give $W=\bigvee_{i\ge1}S^i$ its CW structure with one vertex and one cell in each positive dimension, all attached by constant maps. The cellular differentials vanish, including the degree-one terminal-minus-initial differential. On each skeleton [F3] and [F4] compute one copy of $\mathbb Z$ in each positive degree present. Applying [F5] to ordinary singular homology, not to $E$, gives $\widetilde H_i(W;\mathbb Z)=\mathbb Z$ for every $i\ge1$ and zero in degree zero. Hence $E_n(W)=\prod_{i\ge1}\mathbb Z/\bigoplus_{i\ge1}\mathbb Z\ne0$: the all-ones tuple is not finitely supported. Yet each $E_n(S^i)=0$ by step 2.2, so the canonical infinite wedge map from the direct sum of these zero groups is not surjective. [F3, F4, F5, step 2.2, algebra]

4.1 Taking the direct sum of the pair functors $H$ and $E$, with componentwise structure maps, preserves homotopy, exactness, excision, dimension, and finite additivity. Its coefficient at a point is $\mathbb Z\oplus0=\mathbb Z$, and step 2.2 identifies it with $H$ on all finite-dimensional pairs. On $W$, ordinary $H_{-1}(W;\mathbb Z)=0$ by the nonnegative singular chain complex, whereas $(H\oplus E)_{-1}(W)=E_{-1}(W)\ne0$ by step 3.1. Thus even an abstract graded-group equivalence fails there. The ordinary all-CW uniqueness theorem requires arbitrary additivity, exactly the axiom that this construction fails. [F2, step 2.1, step 2.2, step 3.1, algebra] ∎
