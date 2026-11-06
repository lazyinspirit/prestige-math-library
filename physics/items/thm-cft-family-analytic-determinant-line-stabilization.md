---
id: thm-cft-family-analytic-determinant-line-stabilization
kind: theorem
title: Finite stabilization defines the analytic Fredholm determinant line
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
deps:
  - def-fredholm-operator-cokernel-and-index
  - def-axiom-of-choice
justified_by: []
domain: mathematics
library: physics
dependency_roles:
  def-fredholm-operator-cokernel-and-index: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Aleksey Zinger, The Determinant Line Bundle for Fredholm Operators: Construction, Properties, and Classification, arXiv:1304.6368v4"
      url: https://arxiv.org/pdf/1304.6368v4
      locator: "§§3.1, 3.3, 4.3, 5.1: local stabilization charts, convention comparison, transition maps, and their continuity."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $B$ be a topological space in the continuous case and a complex manifold in the holomorphic case. A complex Hilbert space is a complete complex inner-product space, with norm $\|x\|=\sqrt{\langle x,x\rangle}$. For Hilbert spaces $H,K$, write $\mathcal B(H,K)$ for bounded complex-linear maps with operator norm $\|T\|=\sup_{\|x\|\leq1}\|Tx\|$. A complex Hilbert bundle over $B$ means a locally trivial bundle with complex Hilbert-space fibers and transition maps in $\mathcal B(H,K)$ that are continuous, respectively holomorphic as maps into $\mathcal B(H,K)$ in the complex Fréchet sense. Let $E,F\to B$ be such bundles and let $D:E\to F$ be a bundle map whose local operator representatives $b\mapsto D_b$ are norm-continuous, respectively holomorphic in that sense. Assume each $D_b$ is Fredholm in the sense of [[def-fredholm-operator-cokernel-and-index]]: it is bounded, has closed image, and has finite-dimensional kernel and cokernel $F_b/\operatorname{im}D_b$, with index $\operatorname{ind}D_b=\dim_{\mathbb C}\ker D_b-\dim_{\mathbb C}\operatorname{coker}D_b$. The result is local on $B$; the proof shows that this index is locally constant, so no single index is required across different connected components.

For each finite-dimensional complex vector space $V$, write $\Lambda^{\max}V=\Lambda^{\dim_{\mathbb C}V}V$ and $\Lambda^{\max}0=\mathbb C$, and set $\det(D_b)=\Lambda^{\max}\ker D_b\otimes(\Lambda^{\max}\operatorname{coker}D_b)^*$. For $b_0\in B$, a finite-dimensional subspace $W\subset F_{b_0}$ is a stabilizer when $\operatorname{im}D_{b_0}+W=F_{b_0}$. In a local trivialization of $F$, identify $W$ with the constant subbundle and, on the neighborhood where $\operatorname{im}D_b+W=F_b$, set $K_W(b)=\{u\in E_b:D_bu\in W\}$. The lines $\Lambda^{\max}K_W(b)\otimes(\Lambda^{\max}W)^*$ form local continuous, respectively holomorphic, line bundles. Their canonical transition maps glue them to a line bundle with fiber canonically isomorphic to $\det(D_b)$, independently of every stabilizer choice.

## Statement references

[Zinger, *The Determinant Line Bundle for Fredholm Operators*, §§3.1, 3.3, 4.3, 5.1](https://arxiv.org/pdf/1304.6368v4)

## Facts & Assumptions

**Given:** An open set $V\subseteq B$ on which the complex Hilbert bundles $E$ and $F$ are trivialized and $D_b:E_b\to F_b$ is a norm-continuous, respectively holomorphic, family of bounded Fredholm operators.

[A1] Write $\det V=\Lambda^{\max}V$ and give this line parity $\dim V\bmod2$. For a short exact sequence $0\to V'\xrightarrow{i}V\xrightarrow{q}V''\to0$, use the map $\det V'\otimes\det V''\to\det V$ that wedges a basis of $i(V')$ followed by arbitrary lifts of a basis of $V''$; changes of lifts do not change this map. For finite exact sequences use the composites and duals of these maps, with tensor reorderings carrying the Koszul sign determined by the stated parities. Adopt the determinant-line convention in the Statement.

[A2] At $b_0$, let $W$ be a finite-dimensional subspace of the local trivialization of $F$ such that $\operatorname{im}D_{b_0}+W=F$; on a neighborhood, use the same subspace $W$ as a constant finite-dimensional subbundle.

[A3] Adopt [[def-axiom-of-choice]]: every family of nonempty sets has a function selecting one member from each set. In step 1.2, apply it to the sets of admissible next balls and residual approximants, indexed by the finite construction histories; iteration of the resulting selection functions supplies the two countable recursive sequences. No choice of stabilizers simultaneously over all base points is required.

## Proof

1.1 Since $D_{b_0}$ is Fredholm, its cokernel is finite-dimensional. Choose representatives in $F$ for a basis of $\operatorname{coker}D_{b_0}$ and let $W$ be their span. Then $W$ satisfies [A2], so the quotient map $q_W:F\to F/W$ makes $q_WD_{b_0}$ surjective. The map $D_{b_0}:K_W(b_0)\to W$ has kernel $\ker D_{b_0}$ and finite-dimensional image $W\cap\operatorname{im}D_{b_0}$, hence $K_W(b_0)$ is finite-dimensional. [given, A2, algebra]

1.2 We record the bounded-inverse fact needed below. Let $T:X_0\to Y_0$ be a bounded surjection between complete normed spaces (Banach spaces) and let $B_{X_0}(0,r)=\{x\in X_0:\|x\|<r\}$. Since $Y_0=\bigcup_{n\geq1}\overline{T(B_{X_0}(0,n))}$, the Baire property of the complete metric space $Y_0$ implies that one of these closed sets has nonempty interior. The Baire property follows by contradiction: if the closed sets in a countable cover all had empty interior, choose nested nonempty closed balls with radii tending to zero, the $n$th ball lying outside the $n$th closed set; completeness gives a point in all balls and outside the whole cover. Taking differences in the interior ball and rescaling gives some $\delta>0$ with $B_{Y_0}(0,\delta)\subseteq\overline{T(B_{X_0}(0,1))}$. For $\|y\|<\delta/2$, recursively choose $\|x_j\|\leq2^{-j}$ so that $\|y-\sum_{i=1}^jTx_i\|<\delta2^{-j-1}$; each choice is possible by applying this density statement to the rescaled current residual. The series $x=\sum_jx_j$ converges, satisfies $Tx=y$, and has $\|x\|\leq1$. If $T$ is also bijective, scaling this conclusion shows $\|T^{-1}y\|\leq4\|y\|/\delta$, so $T^{-1}$ is bounded. [given, A3, construct, algebra]

2.1 Choose the orthogonal complement $X=\ker(q_WD_{b_0})^\perp$ in the Hilbert space $E$. Since $W$ is finite-dimensional and closed, $F/W$ is isometric to the Hilbert space $W^\perp$; $X$ is also a Hilbert space. The restriction $q_WD_{b_0}|_X:X\to F/W$ is bounded and bijective, because $q_WD_{b_0}$ is surjective and its kernel is $K_W(b_0)$. By step 1.2 its inverse is bounded. Shrink the neighborhood of $b_0$ so that $q_WD_b|_X=(q_WD_{b_0}|_X)(I+R_b)$ with $\|R_b\|\leq r<1$. The space of bounded operators on $X$ is complete in operator norm: an operator-norm Cauchy sequence converges on each vector in the complete space $X$, and the pointwise limit is its operator-norm limit. Thus $\sum_{m=0}^\infty(-R_b)^m$ converges in operator norm, since its norm series is bounded by $\sum_{m=0}^\infty r^m$; multiplying its partial sums by $I+R_b$ and taking the limit gives the identity. The series converges locally uniformly in $b$, so the inverse of $q_WD_b|_X$ is continuous, respectively holomorphic. Hence $q_WD_b$ is surjective. [given, A2, step 1.1, step 1.2, algebra]

3.1 For every nearby $b$, $0\to\ker D_b\to K_W(b)\xrightarrow{D_b}W\to\operatorname{coker}D_b\to0$ is exact: the image of $D_b|_{K_W(b)}$ is $W\cap\operatorname{im}D_b$, and $W\to\operatorname{coker}D_b$ is surjective because $q_WD_b$ is surjective. Thus $K_W(b)$ is finite-dimensional. Decompose $E=K_W(b_0)\oplus X$ as in step 2.1. Every $K_W(b)$ is the graph over $K_W(b_0)$ of $-(q_WD_b|_X)^{-1}q_WD_b|_{K_W(b_0)}$, so these kernels form a vector bundle of constant finite rank, continuously or holomorphically according to the family. Taking dimensions in the exact sequence gives $\operatorname{ind}D_b=\dim K_W(b)-\dim W$, so the index is locally constant. [given, A2, step 2.1, algebra]

4.1 Choose a basis of $\ker D_b$, extend it to a basis of $K_W(b)$ by lifts of a basis of $W\cap\operatorname{im}D_b$, then extend that latter basis to a basis of $W$ by lifts of a basis of $\operatorname{coker}D_b$. Wedge multiplication identifies $\det K_W\otimes(\det W)^*$ with $\det\ker D_b\otimes(\det\operatorname{coker}D_b)^*$; changes of any chosen lifts add earlier basis vectors and therefore do not change the induced line isomorphism. [given, A1, A2, step 3.1, algebra]

4.2 For nested stabilizers $W\subseteq U$ on a common neighborhood, the map
$$K_U(b)\longrightarrow U/W,\qquad x\longmapsto D_bx+W$$
is well-defined and surjective, and its kernel is $K_W(b)$. Surjectivity follows because $q_WD_b:E_b\to F_b/W$ is surjective: for $u\in U$, choose $x$ with $D_bx-u\in W$; then $D_bx\in U$ and $D_bx+W=u+W$. Hence
$$0\longrightarrow K_W(b)\longrightarrow K_U(b)\longrightarrow U/W\longrightarrow0$$
is exact. The second exact sequence
$$0\longrightarrow W\longrightarrow U\longrightarrow U/W\longrightarrow0$$
uses the same quotient. The determinant isomorphisms of these finite-dimensional exact sequences, with the order and Koszul signs of [A1], cancel the common $\det(U/W)$ factor and give a canonical comparison
$$\det K_U(b)\otimes(\det U)^*\longrightarrow\det K_W(b)\otimes(\det W)^*.$$
Its inverse direction is equally canonical. For arbitrary stabilizers $W_1,W_2$, their sum $U=W_1+W_2$ is a finite-dimensional stabilizer, and the two nested comparisons through $U$ identify both local lines. [given, A1, A2, step 3.1, algebra]

5.1 In a common local trivialization, let $\alpha_W$ be the canonical fiber isomorphism from $\det K_W\otimes(\det W)^*$ to $\det(D_b)$ supplied by the exact sequence in step 4.1. For nested $W\subseteq U$, the displayed comparison in step 4.2, from the $U$ chart to the $W$ chart, is $\alpha_W^{-1}\alpha_U$. This follows by choosing bases adapted to the two short exact sequences in step 4.2 and using the same ordered lifts in the exact sequence of step 4.1; the resulting maps commute with $D_b$ and the quotient maps. Thus for any three stabilizers the transition maps compose to the identity because the intermediate $\alpha_W$ maps cancel. For incomparable fixed subspaces use their finite sum as in step 4.2. [given, A1, step 3.1, step 4.1, step 4.2, algebra]

6.1 It remains to compare charts from different Hilbert-bundle trivializations. In a common frame, the two stabilizers are finite-rank subbundles $W_1,W_2\subset F$: a frame change takes a constant finite-dimensional subspace to a continuous, respectively holomorphic, finite-rank subbundle. Put $K_{W_i}(b)=\{u\in E_b:D_bu\in W_i(b)\}$. Define $A_i:E\oplus W_i\to F$ by $A_i(u,w)=D_bu+w$ and $A_{12}:E\oplus W_1\oplus W_2\to F$ by $A_{12}(u,w_1,w_2)=D_bu+w_1+w_2$. Each $A_i$ is a bounded surjection, and $\ker A_i$ is isomorphic to $K_{W_i}(b)$ by $u\mapsto(u,-D_bu)$, so its kernel is finite-dimensional by step 3.1. The family $A_{12}$ is also surjective, and $0\to\ker A_1(b)\to\ker A_{12}(b)\to W_{2,b}\to0$, with the last map $(u,w_1,w_2)\mapsto w_2$, is exact: surjectivity follows by solving $A_1(u,w_1)=-w_2$. Thus $A_{12}$ has finite-dimensional kernel. The same local splitting and graph argument as in steps 2.1 and 3.1 gives continuous, respectively holomorphic, finite-rank kernel bundles for these surjective families. Exchanging $W_1,W_2$ gives the exact sequence $0\to\ker A_2\to\ker A_{12}\to W_1\to0$. The determinant maps from [A1] for these short exact sequences identify each stabilization chart continuously, respectively holomorphically, with the common chart $\det\ker A_{12}\otimes(\det W_1\otimes\det W_2)^*$. Applying the same construction to three stabilizer subbundles and the common augmentation $E\oplus W_1\oplus W_2\oplus W_3$, the composites of the exact-sequence determinant maps agree by their wedge definition and the Koszul signs in [A1]. Hence the chart comparisons obey the cocycle condition across Hilbert-bundle trivializations. [given, A1, A2, step 2.1, step 3.1, algebra] ∎

## Remarks

This proves the local stabilization statement only. It does not prove an analytic sewing isomorphism for determinant lines, a Quillen metric or connection, or an anomaly formula; those are separate interfaces.
