---
id: thm-universal-borel-sets-and-strict-hierarchy
kind: theorem
title: "Universal Borel sets and strictness on Cantor space"
status: draft
origin: pipeline
deps: ["lem-metric-borel-hierarchy-monotonicity-and-operations", "lem-countable-borel-hierarchy-exhaustion-and-pullbacks", "lem-cantor-and-baire-sequence-coding", "def-product-topology", "thm-transfinite-recursion", "def-axiom-of-choice"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Definition 2.36, Lemma 2.37 and Corollary 2.38, printed pp23–24; correct source typos and supply the cofinal-index placement step"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Statement

In ZFC, if $X$ is separable metrizable and $1\leq\alpha<\omega_1$, there are universal sets $U_\alpha\in\Sigma^0_\alpha(\mathcal C\times X)$ and $V_\alpha\in\Pi^0_\alpha(\mathcal C\times X)$: their sections at parameters in $\mathcal C=2^{\mathbb N}$ exhaust the respective classes on $X$. For each such rank both $\Pi^0_\alpha(\mathcal C)\setminus\Sigma^0_\alpha(\mathcal C)$ and its dual difference are nonempty. The same holds on any metrizable space containing a subspace homeomorphic to $\mathcal C$.

## Facts & Assumptions

[F1] [[lem-metric-borel-hierarchy-monotonicity-and-operations]] gives lower-rank inclusions and closure operations.

[F2] [[lem-countable-borel-hierarchy-exhaustion-and-pullbacks]] gives same-rank pullbacks and trace lifting.

[F3] [[lem-cantor-and-baire-sequence-coding]] supplies the homeomorphism $\mathcal C\cong\mathcal C^{\mathbb N}$.

[F4] Basic product opens and coordinate maps are as in [[def-product-topology]].

[F5] Set-valued recursion along a well-order is [[thm-transfinite-recursion]].

[A1] Assume [[def-axiom-of-choice]].

## Proof

**Given:** A separable metric $X$. Sections mean $(U)_c=\{x:(c,x)\in U\}$.

1.1 If $X$ is nonempty, fix a countable dense sequence. Balls at its centres of positive rational radii form a countable basis: for $x\in O$ choose $\epsilon>0$ with $B(x,\epsilon)\subseteq O$, a centre within $\epsilon/4$ of $x$ and a rational radius between that distance and $\epsilon/2$. This ball contains $x$ and is inside $O$ by the triangle inequality. Enumerate this basis as $W_n$; if $X=\varnothing$ take all $W_n=\varnothing$. Set $U_1=\bigcup_n\{c:c(n)=1\}\times W_n$. This is open by F4. For open $O$, the parameter $c(n)=1$ iff $W_n\subseteq O$ has section exactly $O$ by the basis property. Put $V_1=(\mathcal C\times X)\setminus U_1$; its sections exhaust the closed sets. [F4]

1.2 For each countable $\alpha>1$ choose a nondecreasing positive sequence $\beta^\alpha_n<\alpha$ with $\sup_n(\beta^\alpha_n+1)=\alpha$. At successor $\alpha=\gamma+1$ take constant $\gamma$. At a limit enumerate its ordinals and take the maximum of $1$ and the first $n+1$ listed ordinals; finite maxima stay below the limit and are cofinal. These choices form a set-indexed family, so A1 applies. Recursively, using F5, set

$$U_\alpha=\{(c,x):\exists n\ (c_n,x)\in V_{\beta^\alpha_n}\},\qquad V_\alpha=(\mathcal C\times X)\setminus U_\alpha,$$

where $(c_n)_n$ is F3's decoding. On malformed histories assign the empty set pair, making the rule total; all actual values are pairs of subsets of the fixed product. Each map $(c,x)\mapsto(c_n,x)$ is continuous by F3 and F4. F2 puts its preimage in the indicated lower $\Pi$ rank, so the union is $\Sigma^0_\alpha$. Its complement has the required dual rank. [F2, F3, F4, F5, A1]

2.1 Suppose $B=\bigcup_j B_j$ with $B_j\in\Pi^0_{\gamma_j}(X)$ and $1\leq\gamma_j<\alpha$. Recursively choose $n_j>n_{j-1}$ least with $\beta^\alpha_{n_j}\geq\gamma_j$. Such indices occur arbitrarily late: otherwise the nondecreasing sequence would be bounded below $\gamma_j$, contradicting its cofinal property. By F1 place $B_j$ in rank $\beta^\alpha_{n_j}$, and place the empty set at every unused index. Inductive universality and A1 select a parameter for each of these sets; F3 codes this parameter sequence as $c$. Then $(U_\alpha)_c=\bigcup_j B_j=B$. Complementation proves universality of $V_\alpha$. This proves the recursive universality assertion, including the empty set, without matching the original jth rank to the jth cofinal rank. [F1, F3, A1, step 1.2]

3.1 Apply this to $X=\mathcal C$ and put $D=\{c:(c,c)\notin U_\alpha\}$. The diagonal is continuous since the preimage of a basic product $O\times P$ is $O\cap P$, so F2 gives $D\in\Pi^0_\alpha$. If $D\in\Sigma^0_\alpha$, universality gives $d$ with $D=(U_\alpha)_d$. At $d$ this says $d\in D$ iff $(d,d)\in U_\alpha$ iff $d\notin D$, impossible. The complement of $D$ lies in the opposite difference. [F2, F4, step 1.1, step 2.1]

4.1 Let $Y\subseteq Z$ be homeomorphic to $\mathcal C$ and $Z$ metrizable. By F2 the homeomorphism and its inverse preserve both classes, so step 3.1 supplies $D_Y\in\Pi^0_\alpha(Y)\setminus\Sigma^0_\alpha(Y)$. F2 lifts $D_Y$ to a $\Pi^0_\alpha(Z)$ set $D_Z$. Were $D_Z$ also $\Sigma^0_\alpha(Z)$, its trace would contradict the choice of $D_Y$. Thus $D_Z$ lies in the required difference, and its complement proves the dual difference. QED. [F2, step 3.1]
