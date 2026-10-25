---
id: lem-finite-length-duality-over-a-regular-local-base
kind: lemma
title: "Finite-length duality over a regular local base"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps: [
          def-axiom-of-choice, lem-finite-regular-base-algebra-dualizing-biduality,
                    cor-koszul-complex-resolves-a-regular-quotient,
                    thm-regular-local-rings-are-domains-and-cohen-macaulay,
                    thm-long-exact-ext-sequence-in-the-first-variable, def-dependent-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Resolution of Surfaces, 54.8.8 and 54.11.6: exact imports replaced by the local argument"
      url: "https://stacks.math.columbia.edu/download/resolve.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC and DC. Let $(R,\mathfrak m)$ be regular Noetherian local of dimension $d$ and let $(B,\mathfrak n)$ be a module-finite local $R$-algebra with the map local. For finite-length $B$-modules put $T(M)=\operatorname{Ext}_R^d(M,R)$ with its natural $B$-action. Then $\operatorname{Ext}_R^i(M,R)=0$ for $i\ne d$, $T$ is exact contravariantly, $M\cong T(T(M))$ by canonical bidual evaluation, and $\operatorname{Ann}_B T(M)=\operatorname{Ann}_B M$.

## Facts & Assumptions

**Given:** A regular Noetherian local ring $(R,\mathfrak m)$ of dimension $d$, a module-finite local $R$-algebra $(B,\mathfrak n)$, and finite-length $B$-modules $M$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *cor-koszul-complex-resolves-a-regular-quotient.* If $M$ is finite free and $\mathbf x$ is $M$-regular, then $K(\mathbf x;M)$ is a finite free resolution of $M/(\mathbf x)M$. ([[cor-koszul-complex-resolves-a-regular-quotient]])

[F4] *thm-regular-local-rings-are-domains-and-cohen-macaulay.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). A regular local ring $R$ of dimension $d$ is a domain and Cohen–Macaulay. For every regular system $(x_1,\ldots,x_d)$, the tuple is $R$-regular and $R/(x_1,\ldots,x_c)$ is regular local of dimension $d-c$ for all $0\le c\le d$. ([[thm-regular-local-rings-are-domains-and-cohen-macaulay]])

[F5] *thm-long-exact-ext-sequence-in-the-first-variable.* Assume the Axiom of Dependent Choice. Let $\mathcal A$ be abelian with enough projectives and enough injectives, and fix supplied projective and injective resolution data on all its objects. ([[thm-long-exact-ext-sequence-in-the-first-variable]])

[F6] *lem-finite-regular-base-algebra-dualizing-biduality.* Assume AC and DC. Let $R$ be a regular Noetherian ring of finite dimension $d$, and let $B\ne0$ be a module-finite $R$-algebra. For any integer $s$, $D_B=R\operatorname{Hom}_R(B,R[s])$ is a dualizing complex over $B$. ([[lem-finite-regular-base-algebra-dualizing-biduality]])

## Proof

1.1 A finite-length $B$-module has finite length over $R$: the residue field extension $\kappa(\mathfrak n)/\kappa(\mathfrak m)$ is finite because $B$ is module-finite, and every $B$-composition factor is a finite-dimensional $\kappa(\mathfrak m)$-vector space. [F4, given]

2.1 A regular system of parameters of $R$ generates $\mathfrak m$ and is a regular sequence, so the Koszul complex resolves $R/\mathfrak m$; its signed self-duality gives $\operatorname{Ext}^i_R(R/\mathfrak m,R)=0$ for $i\ne d$ and $\operatorname{Ext}^d_R(R/\mathfrak m,R)=R/\mathfrak m$. [F3, F4, step 1.1]

3.1 Induction on an $R$-composition series of $M$ using the long exact Ext sequence in the first variable shows $\operatorname{Ext}^i_R(M,R)=0$ for every $i\ne d$, and that $T(M)=\operatorname{Ext}^d_R(M,R)$ is an exact contravariant functor on finite-length $B$-modules. [F5, step 2.1]

4.1 The finite-base bidual lemma applied with the shift $s=d$ identifies $R\operatorname{Hom}_B(M,D_B)$ with $R\operatorname{Hom}_R(M,R[d])$, which in degree zero is exactly $T(M)$; applying the adjunction a second time gives the canonical bidual evaluation $M\cong T(T(M))$ as $B$-modules. [F6, step 3.1]

5.1 Multiplication by $b\in B$ on $T(M)$ is induced contravariantly from multiplication by $b$ on $M$, so if $b$ annihilates $M$ it annihilates $T(M)$, and conversely applying $T$ again and using the bidual evaluation returns the statement for $M$; hence $\operatorname{Ann}_BT(M)=\operatorname{Ann}_BM$. [F4, F6, step 4.1]

6.1 The Axiom of Choice and the Axiom of Dependent Choice are inherited from the Koszul, duality and long-exact-sequence suppliers; no general Matlis duality is asserted. [F1, F2, step 5.1] ∎

## Remarks

- Exactness and concentration are proved by induction on length, so no structural theorem about finite-length modules beyond the Koszul base case is needed.
- The annihilator statement is what makes the duality usable for detecting whether an ideal acts faithfully in the applications.
