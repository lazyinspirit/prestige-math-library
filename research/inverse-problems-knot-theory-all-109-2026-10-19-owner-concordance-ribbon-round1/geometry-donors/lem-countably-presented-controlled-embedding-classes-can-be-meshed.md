---
id: lem-countably-presented-controlled-embedding-classes-can-be-meshed
kind: lemma
title: Countably presented controlled embedding classes can be meshed
status: draft
origin: session
deps: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: T. B. Rushing, Topological Embeddings
      url: https://www.maths.gla.ac.uk/~mpowell/rushing_topological%20embeddings.pdf
      locator: Section 3.6, Theorem 3.6.3 and Lemmas 3.6.1–3.6.4, printed pp.121–127
    - title: R. J. Daverman and G. A. Venema, Embeddings in Manifolds
      url: https://www.maths.gla.ac.uk/~mpowell/%5BDaverman-Venema%5D%20Embeddings%20in%20manifolds.pdf
      locator: Section 4.2, Theorems 4.2.1 and 4.2.8, printed pp.153–158
---

## Statement

Let $M$ be a compact metric manifold, let $X$ be a compact metric space, and let $\mathcal E$ be a space of embeddings $X\to M$ with its uniform metric $d_\infty$. Fix a group $G$ of homeomorphisms of $M$, closed under uniform limits whose inverse maps also converge uniformly. Suppose two subsets $\Lambda_0,\Lambda_1\subset\mathcal E$ are each supplied with a countable list of their own members that is dense in the common space $\mathcal E$. Suppose also the following data are supplied: for each $a\in\Lambda_j$ and positive rational $e$, a number $\delta_j(a,e)\in(0,e)$; and, for every $b\in\Lambda_j$ with $d_\infty(a,b)<\delta_j(a,e)$, a specified ambient isotopy $S_j(a,b,e)$ in $G$ from the identity to a homeomorphism taking $a$ to $b$, with uniform displacement less than $e$. Then $\Lambda_0\cup\Lambda_1$ is locally solvable under arbitrarily small such isotopies, and every element of either class is carried into the other class by one. No choice axiom is assumed.

The conclusion preserves any common closed protected set and fixed compact carrier imposed on the supplied isotopies.

## Facts & Assumptions

**Given:** The compact spaces, classes, dense lists, modulus functions and isotopy selection functions in the Statement. The existence of these supplied functions is a hypothesis; selecting arbitrary witnesses from unstructured existential solvability assertions is not being done. Uniform displacement of the inverse of a homeomorphism equals that of the homeomorphism.

## Proof

1.1 Fix $a_0\in\Lambda_0$ and $e>0$, let $e_0=e'_0$ be the first reciprocal positive integer less than $e/10$ in the fixed enumeration, and let $b_0\in\Lambda_1$ be any embedding with $d_\infty(a_0,b_0)<\delta_0(a_0,e_0)$. We construct $a_i\in\Lambda_0$, $b_i\in\Lambda_1$, and allowed small isotopies with terminal maps $h_i,k_i$; write $A_i=h_i\cdots h_1$ and $B_i=k_i\cdots k_1$, with $A_0=B_0=\operatorname{id}$. The induction invariant is $d_\infty(a_i,b_i)<\delta_0(a_i,e_i)$, together with $A_i a_0=a_i$ and $B_i b_0=b_i$. At stage $i+1$, density supplies $a_{i+1}$ arbitrarily close to $b_i$. Choose it so that $d_\infty(a_{i+1},b_i)<\delta_1(b_i,e'_i)$ and $d_\infty(a_i,a_{i+1})<\delta_0(a_i,e_i)$; both are possible because the latter bound has a strictly positive margin by the invariant. The supplied rule $S_0(a_i,a_{i+1},e_i)$ gives $h_{i+1}$ and its isotopy with displacement less than $e_i$, taking $a_i$ to $a_{i+1}$. [given, construct, choose]

2.1 After $A_{i+1}$ exists, take the first reciprocal positive integer $0<e_{i+1}<e_i/2$ so small that any map $u$ with $\sup_x d(u(x),x)<e_{i+1}$ satisfies $\sup_x d(A_{i+1}^{-1}u(x),A_{i+1}^{-1}(x))<2^{-i-1}$. This follows from uniform continuity of $A_{i+1}^{-1}$ on compact $M$. Now choose $b_{i+1}\in\Lambda_1$ arbitrarily close to $a_{i+1}$, so that $d_\infty(a_{i+1},b_{i+1})<\delta_0(a_{i+1},e_{i+1})$ and $d_\infty(b_i,b_{i+1})<\delta_1(b_i,e'_i)$. The second bound again has positive margin because of the first choice in the preceding step. The supplied rule $S_1(b_i,b_{i+1},e'_i)$ gives $k_{i+1}$ and its isotopy with displacement less than $e'_i$, taking $b_i$ to $b_{i+1}$. After $B_{i+1}$ exists take the first reciprocal positive integer $0<e'_{i+1}<e'_i/2$ imposing the corresponding inverse-composition bound for $B_{i+1}^{-1}$. At each embedding selection take the first qualifying entry in its supplied dense list; the strict inequalities and density ensure such an entry exists. This completes a uniquely specified recursive construction, without a choice axiom. [step 1.1, given, construct, choose]

3.1 The forward increments of $A_i$ and $B_i$ are bounded by $e_i$ and $e'_i$, respectively, and these sequences have summable geometric bounds. Hence both sequences converge uniformly to continuous maps $A,B$. For $i\ge1$, the inverse increment $A_{i+1}^{-1}=A_i^{-1}h_{i+1}^{-1}$ differs uniformly from $A_i^{-1}$ by less than $2^{-i}$, by the choice of $e_i$ and the equality of forward and inverse displacement of $h_{i+1}$. The inverse sequences therefore converge uniformly to continuous maps $J,L$. Passing to the limit in $A_i^{-1}A_i=\operatorname{id}$ gives $JA=\operatorname{id}$: bound the error by the uniform difference between $A_i^{-1}$ and $J$, and by the modulus of continuity of $J$ applied to the uniform difference between $A_i$ and $A$. Passing to the limit in $A_iA_i^{-1}=\operatorname{id}$ likewise gives $AJ=\operatorname{id}$. Thus $A$ is a homeomorphism with inverse $J$; the same proof makes $B$ a homeomorphism with inverse $L$. [step 2.1, construct, algebra]

4.1 Concatenate the isotopies realizing $h_i$ on successive time intervals with endpoints $1-2^{-i}$, and put their limiting map $A$ at time $1$. On the $i$th such interval the family differs uniformly from $A_{i-1}$ by less than $e_{i-1}$. This tends to zero, so the concatenated family is continuous at time $1$, as well as at all earlier times. The same inverse-increment bounds apply at intermediate times because each inverse isotopy moves points by less than $e_{i-1}$. Thus the inverse family is continuous as well. This is an ambient isotopy to $A$, moving each point by less than $\sum_i e_i<2e_0$. The same construction gives an ambient isotopy to $B$, moving points by less than $2e'_0$. Fixed protected sets and identity restrictions outside a fixed carrier pass to both limits and hold at every time. [step 3.1, step 2.1, construct]

5.1 The invariant gives $d_\infty(a_i,b_i)<e_i\to0$, so $Aa_0=Bb_0$. Follow the isotopy to $A$ by the inverse isotopy to $B$, postcomposed with $A$. Its terminal map $B^{-1}A$ takes $a_0$ to $b_0$, and its uniform displacement is less than $2e_0+2e'_0<e$. If the two starting embeddings lie in the same class, its assumed local solvability suffices; if the first lies in $\Lambda_1$, interchange the class labels in the construction. This proves local solvability of the union, and density of the other class supplies the final assertion. The first qualifying entry in the other class gives the final class-changing isotopy; every selection uses only the specified data and ordinary recursion. [step 4.1, step 1.1, given, construct] ∎

## Remarks

This off-canonical donor supplies the actual choice-free back-and-forth argument for the explicitly presented data. It does not invoke a four-dimensional taming theorem. Compactness controls both inverse sequences; summability of forward displacements alone would only produce a continuous limiting map and would not establish injectivity.
