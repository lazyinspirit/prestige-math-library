---
id: lem-youngest-child-descendants-conditionally-independent
kind: lemma
title: "Descendants of a youngest child are conditionally independent of its parent"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps:
  - def-additive-noise-model
  - def-d-separation-in-a-dag
  - lem-anm-joint-density
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Jonas Peters, Joris Mooij, Dominik Janzing, and Bernhard Schölkopf, Causal Discovery with Continuous Additive Noise Models, Appendix A.15"
      url: "https://jmlr.org/papers/volume15/peters14a/peters14a.pdf"
    - title: "K. Assaad, E. Devijver, and G. Gaussier, Causal discovery: noise-based methods, ENS Lyon course notes (2023), slides 29–31"
      url: "https://ckassaad.github.io/courses/courses_materials/ENSLyon_Causality/2023/CausalDiscoveryNoiseBased.pdf"
---

## Statement

Let a finite causally sufficient additive-noise model have graph $G$, and let
$y\to z$ be an edge such that there is no directed path from $z$ to any other
child of $y$. Write $D=\operatorname{de}_G(z)$ for the strict descendants of
$z$ and $S=V\setminus(D\cup\{y,z\})$. If $p$ is the positive joint density,
there are positive measurable functions $A(y,s,z)$ and $B(d,s,z)$ such that
$p(d,y,s,z)=A(y,s,z)B(d,s,z)$, where $A$ does not depend on $d$ and $B$ does
not depend on $y$. Use marginal density versions obtained by iterated
integration. Then
$$p_{X_D,X_y,X_S,X_z}(d,y,s,z)\,p_{X_S,X_z}(s,z)=p_{X_D,X_S,X_z}(d,s,z)\,p_{X_y,X_S,X_z}(y,s,z)$$
for almost every $(d,y,s,z)$. This is the density conditional-independence
factorization of $X_D$ and $X_y$ given $(X_S,X_z)$. Moreover, for every $s$
with $0<p_{X_S}(s)<\infty$, the conditional law of $(X_D,X_y)$ given
$X_S=s$ satisfies the density conditional-independence factorization given
$X_z$.

## Statement references

[[def-additive-noise-model|Finite recursive additive-noise equations and mutual noise independence]]

[[def-d-separation-in-a-dag|Children, descendants and directed paths in a finite DAG]]

[[lem-anm-joint-density|The positive product formula for the full joint density]]

## Facts & Assumptions

**Given:** A finite causally sufficient additive-noise model, an edge $y\to z$ satisfying the youngest-child condition in the Statement, and its positive joint density.

[F1] In a topological order, $X_v=f_v(X_{\operatorname{pa}(v)})+N_v$ recursively, and the noises are mutually independent. [[def-additive-noise-model]]

[F2] The joint density is $p(x)=\prod_{v\in V}q_v(x_v-f_v(x_{\operatorname{pa}(v)}))$, with each factor depending only on that vertex and its parents. [[lem-anm-joint-density]]

[F3] Nonnegative product-measurable functions can be integrated in any finite coordinate order by iterated sections. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

## Proof
**Given:** The hypotheses in the Statement.

1.1 If $y$ were a parent of any $d\in D$, then $d$ would be another child of $y$ and also a descendant of $z$, contrary to the hypothesis. Thus no vertex in $D$ has $y$ as a parent. Every parent of a vertex in $D$ therefore lies in $D\cup\{z\}\cup S$. [given, F1, construct]

2.1 No vertex in $D$ can be a parent of a vertex outside $D$: that would make the latter a descendant of $z$. Hence each density factor in [F2] for a vertex outside $D$ depends only on $(y,s,z)$, while each factor for a vertex in $D$ depends only on $(d,s,z)$. Regrouping the finite product gives $p(d,y,s,z)=A(y,s,z)B(d,s,z)$ for nonnegative measurable functions $A,B$. [F2, step 1.1, algebra]

3.1 By [F3], the marginal densities obtained from the full product are $p_{X_S,X_z}(s,z)=\left(\int A(y,s,z)\,dy\right)\left(\int B(d,s,z)\,dd\right),$ $p_{X_y,X_S,X_z}(y,s,z)=A(y,s,z)\int B(d,s,z)\,dd,\qquad p_{X_D,X_S,X_z}(d,s,z)=B(d,s,z)\int A(y,s,z)\,dy.$ These identities hold almost everywhere where the marginal densities are finite; Tonelli also permits infinite values on exceptional null sets. Multiplying the last two identities and comparing with the first proves the factorization in the Statement almost everywhere. For any fixed $s$ with $0<p_{X_S}(s)<\infty$, put $a_s(z)=\int A(y,s,z)\,dy$ and $b_s(z)=\int B(d,s,z)\,dd$. Tonelli gives $p_{X_S}(s)=\int a_s(z)b_s(z)\,dz<\infty$, so for almost every $z$ under that conditional law both $a_s(z)$ and $b_s(z)$ are finite and positive. The conditional densities of $X_y$ and $X_D$ given $(X_S=s,X_z=z)$ are respectively $A(y,s,z)/a_s(z)$ and $B(d,s,z)/b_s(z)$; their product is the joint conditional density. This proves the stated conditional-independence factorization at each such $s$. [step 2.1, F3, algebra] ∎
## References

[Peters et al., JMLR (2014), Appendix A.15, proof of Theorem 34](https://jmlr.org/papers/volume15/peters14a/peters14a.pdf)

