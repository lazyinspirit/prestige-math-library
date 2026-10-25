---
id: lem-anm-density-factorization-implies-dsep-conditional-independence
kind: lemma
title: "An ANM density factorization implies conditional independence under d-separation"
status: published
dependency_level: 2
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps:
  - def-additive-noise-model
  - def-d-separation-in-a-dag
  - def-ancestral-moral-graph-of-a-dag
  - lem-d-separation-ancestral-moral-separation
  - lem-anm-joint-density
  - def-countable-choice
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
proof_strategy: direct
axiom_use: "No choice is used for supplied Borel densities. For arbitrary Lebesgue densities, Countable Choice is used through lem-anm-joint-density to obtain Borel versions and completions."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonas Peters, Joris Mooij, Dominik Janzing, and Bernhard Schölkopf, Causal Discovery with Continuous Additive Noise Models, Appendix A.12"
      url: "https://jmlr.org/papers/volume15/peters14a/peters14a.pdf"
---

## Statement

Assume Countable Choice, or suppose the specified noise densities are Borel measurable.
Let $G=(V,E)$ be a finite DAG, and let $X$ follow a recursive additive-noise
model on $G$ in a fixed topological order, with continuous Borel structural
functions $f_v:\mathbb R^{\operatorname{pa}(v)}\to\mathbb R$ and equations
$$X_v=f_v(X_{\operatorname{pa}(v)})+N_v,$$
mutually independent noises with strictly positive Lebesgue densities $q_v$,
and joint density
$$p_X(x)=\prod_{v\in V}q_v\!\left(x_v-f_v(x_{\operatorname{pa}(v)})\right).$$
For $T\subseteq V$, let
$$p_T(x_T)=\int_{\mathbb R^{V\setminus T}}p_X(x)\,dx_{V\setminus T}$$
be the marginal density relative to finite product Lebesgue measure. Let
$A,B,C\subseteq V$ be pairwise disjoint with $A$ and $B$ nonempty. If $C$
d-separates $A$ and $B$ (every path from $A$ to $B$ has an internal
noncollider in $C$ or an internal collider with no descendant in $C$), then
$$p_{A\cup B\cup C}(x_A,x_B,x_C)p_C(x_C)=p_{A\cup C}(x_A,x_C)p_{B\cup C}(x_B,x_C)$$
for Lebesgue-almost every $(x_A,x_B,x_C)$. This identity is the
conditional-density factorization expressing conditional independence.

## Statement references

[[def-countable-choice|Countable Choice only when Borel density versions are not supplied]]

[[def-additive-noise-model|Finite recursive additive-noise equations and positive noise densities]]

[[def-d-separation-in-a-dag|Active paths and d-separation in a finite DAG]]

[[lem-anm-joint-density|Positive product density of a finite additive-noise model]]

## Facts & Assumptions

**Given:** The finite ANM and pairwise disjoint sets in the Statement, with $C$ d-separating $A$ and $B$.

[F1] Supplied Borel noise densities give the Borel shifted-noise product density. Under Countable Choice, arbitrary Lebesgue noise densities admit positive finite Borel versions with the same noise laws, whose product is a Borel joint density; the original product agrees with it almost everywhere on the completed product. [[lem-anm-joint-density]]

[F2] Each $q_v$ is a normalized Lebesgue density, and translating its argument by a fixed real amount preserves its total mass because Lebesgue measure is translation invariant. [[def-additive-noise-model]] [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]

[F3] Nonnegative product-measurable functions can be integrated in successive coordinate sections, and the resulting parameter integrals are measurable. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F4] D-separation is equivalent to disconnection after deleting the conditioning set from the ancestral moral graph of the two endpoint sets and that conditioning set. [[lem-d-separation-ancestral-moral-separation]]

[F5] The ancestral moral graph retains all ancestors of its queried vertex set, forgets arrow directions, and joins each vertex to its parents and every distinct pair of parents of a common child. [[def-ancestral-moral-graph-of-a-dag]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 For Borel noise densities use the displayed product. Otherwise [F1] supplies positive finite Borel versions under the assumed Countable Choice; use their Borel product throughout the integrations below. It has the same observational law, and its marginal densities agree almost everywhere with the stipulated marginal versions, so the final almost-everywhere identity transfers to those versions. Put $H=\operatorname{An}_G(A\cup B\cup C)$. No vertex outside $H$ is a parent of a vertex in $H$, since that would make it an ancestor of $A\cup B\cup C$. Integrate the product density [F1] over $V\setminus H$ in reverse topological order. At each elimination, all child factors have already been integrated and no child lies in $H$, so the only remaining factor involving the current coordinate $x_v$ is $q_v(x_v-f_v(x_{\operatorname{pa}(v)}))$. Its section integral is one by [F2]. Tonelli [F3] justifies each section integral; consequently the marginal density on $H$ is $\prod_{v\in H}q_v(x_v-f_v(x_{\operatorname{pa}(v)}))$. [given, F1, F2, F3, construct]

2.1 By [F4], deleting $C$ from the moral graph on $H$ leaves no path from $A$ to $B$. Partition its connected components into $L$, the union of components meeting $A$, and $R$, the union of the remaining components. Then $A\subseteq L$, $B\subseteq R$, and there is no moral edge between $L$ and $R$. For each $v\in H$, the factor indexed by $v$ in step 1.1 depends only on $\{v\}\cup\operatorname{pa}(v)\subseteq H$; this set is a clique in that moral graph by [F5]. Hence no such factor involves both an $L$-coordinate and an $R$-coordinate. Assign factors involving an $L$-coordinate to $U$, and assign all other factors to $W$. Their finite products give a factorization of the density on $H$ as $U(x_L,x_C)W(x_R,x_C)$. [given, F4, F5, step 1.1, construct]

3.1 Integrate the factorization in step 2.1 over the hidden coordinates $L\setminus A$ and $R\setminus B$. Since the factors separate and are nonnegative, Tonelli [F3] yields measurable functions $u(x_A,x_C)$ and $w(x_B,x_C)$ such that $p_{A\cup B\cup C}(x_A,x_B,x_C)=u(x_A,x_C)w(x_B,x_C)$ almost everywhere. Each function is strictly positive because it integrates a strictly positive factor over its hidden coordinates; if that coordinate set is empty, it is the original strictly positive factor. [step 2.1, F1, F3, construct]

4.1 Define $\alpha(x_C)=\int u(x_A,x_C)\,dx_A$ and $\beta(x_C)=\int w(x_B,x_C)\,dx_B$. Tonelli makes these measurable and gives $p_{A\cup C}=u\beta$ and $p_{B\cup C}=w\alpha$ almost everywhere. Also $p_C(x_C)=\int u(x_A,x_C)w(x_B,x_C)\,dx_A dx_B$ for almost every $x_C$. The marginal $p_C$ is positive, since it integrates the everywhere-positive density over any unit box in the remaining coordinates, and it is finite almost everywhere since $\int p_C=1$. For almost every such $x_C$, strict positivity of $u,w$ gives $\alpha,\beta>0$. If, for example, $\alpha=\infty$, then $\beta>0$ supplies a set of $b$-values of positive measure where $w(b,x_C)>1/n$ for some $n$, so Tonelli makes $\int u(a,x_C)w(b,x_C)\,da\,db=\infty$; the same argument applies if $\beta=\infty$. Hence both integrals are finite almost everywhere, Tonelli factors the last integral as $p_C=\alpha\beta$, and multiplying the finite marginal identities gives the claimed conditional-density factorization. [given, step 3.1, F1, F3, algebra] ∎

## References

[Peters et al., JMLR (2014), §1.1 and Appendix A.12](https://jmlr.org/papers/volume15/peters14a/peters14a.pdf)

## Remarks

The schematic shows the component split in the moral graph after deleting
$C$. Strokes to $C$ represent possible moral edges; the absence of an $L$--$R$
edge is the separation used in the proof. The diagram is only a schematic and
the factor regrouping argument establishes the claim for every finite graph.

```tikz
\begin{tikzpicture}[>=stealth]
  \node[draw,rounded corners,minimum width=2.5cm,minimum height=1.2cm] (left) at (0,0) {$L$ (contains $A$)};
  \node[draw,circle] (cond) at (3,0) {$C$};
  \node[draw,rounded corners,minimum width=2.5cm,minimum height=1.2cm] (right) at (6,0) {$R$ (contains $B$)};
  \draw[-,thick] (left) -- (cond) node[midway,above] {possible};
  \draw[-,thick] (cond) -- (right) node[midway,above] {possible};
  \node at (3,-0.75) {no moral edge $L$--$R$};
  \node at (3,-1.25) {$\operatorname{mor}_G(H)\setminus C$ has no path from $L$ to $R$};
\end{tikzpicture}
```
