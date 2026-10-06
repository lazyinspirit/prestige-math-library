---
id: lem-integral-middle-cohomology-vanishing-implies-real-vanishing
kind: lemma
title: "Vanishing integral middle cohomology of a closed oriented seven-manifold implies real vanishing"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-closed-oriented-pid-manifolds-have-finitely-generated-homology, cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules, thm-topological-universal-coefficient-short-exact-sequence-for-cohomology, lem-ext-one-of-z-mod-n-by-z-is-z-mod-n, thm-choice-implies-dependent-implies-countable-choice, thm-reals-ordered-field, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
dependency_level: 0
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Cambridge University Press 2002 (complete book)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Section 3.1, universal coefficient theorem for cohomology, printed pp. 195-196; Section 3.3, Poincare duality for closed manifolds"
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 3, Tor and Ext (complete chapter)"
      url: "https://math.mit.edu/~hrm/palestine/weibel/03_tor_and_ext.pdf"
      locator: "Ext^1(Z/n, Z) = Z/n and Ext of free modules vanishes"
---

## Statement

Assume the Axiom of Choice. Let $M$ be a closed oriented seven-manifold. If
$H^3(M;\mathbb Z)=0$ and $H^4(M;\mathbb Z)=0$, then $H^3(M;\mathbb R)=0$ and
$H^4(M;\mathbb R)=0$.

## Facts & Assumptions

**Given:** A closed oriented seven-manifold $M$ with $H^3(M;\mathbb Z)=H^4(M;\mathbb Z)=0$.

[A1] The Axiom of Choice is assumed ([[def-axiom-of-choice]]).

[L1] Assume AC. For a closed $\mathbb Z$-oriented manifold all integral
homology groups are finitely generated
([[lem-closed-oriented-pid-manifolds-have-finitely-generated-homology]]).

[L2] Every finitely generated abelian group is a direct sum
$\mathbb Z^r\oplus T$ with $T$ finite ([[cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules]]).

[L3] Assume AC. For every space $X$, abelian group $G$ and $n\ge0$ there is a
natural short exact sequence
$$0\to\operatorname{Ext}^1_{\mathbb Z}(H_{n-1}(X;\mathbb Z),G)\to H^n(X;G)\to\operatorname{Hom}_{\mathbb Z}(H_n(X;\mathbb Z),G)\to0 .$$
([[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]]).

[L4] Assume DC. For $n>1$, $\operatorname{Ext}^1_{\mathbb Z}(\mathbb Z/n,\mathbb Z)\cong\mathbb Z/n$,
so it is nonzero ([[lem-ext-one-of-z-mod-n-by-z-is-z-mod-n]]).

[L5] In ZF, $\mathrm{AC}\Rightarrow\mathrm{DC}$
([[thm-choice-implies-dependent-implies-countable-choice]]).

[L6] $\mathbb R$ is an ordered field: it has no nonzero elements of finite
order, and for every $m>0$ and every $y\in\mathbb R$ there is $x\in\mathbb R$
with $mx=y$ ([[thm-reals-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [A1] every homology group $H_k(M;\mathbb Z)$ is finitely generated. [A1, L1, given]

2.1 The universal coefficient sequence [L3] in degree three is $0\to\operatorname{Ext}(H_2(M;\mathbb Z),\mathbb Z)\to H^3(M;\mathbb Z)\to\operatorname{Hom}(H_3(M;\mathbb Z),\mathbb Z)\to0$; since the middle term vanishes, the two outer groups vanish, so $\operatorname{Ext}(H_2,\mathbb Z)=0$ and $\operatorname{Hom}(H_3,\mathbb Z)=0$. [step 1.1, L3, given]

3.1 The universal coefficient sequence [L3] in degree four is $0\to\operatorname{Ext}(H_3(M;\mathbb Z),\mathbb Z)\to H^4(M;\mathbb Z)\to\operatorname{Hom}(H_4(M;\mathbb Z),\mathbb Z)\to0$; since the middle term vanishes, $\operatorname{Hom}(H_4,\mathbb Z)=0$. [step 2.1, L3, given]

4.1 By [L2] and [L4] with [A1], [L5], write $H_k(M;\mathbb Z)=\mathbb Z^{r_k}\oplus T_k$ with $T_k$ finite: the vanishing $\operatorname{Hom}(H_3,\mathbb Z)=\operatorname{Hom}(H_4,\mathbb Z)=0$ and $\operatorname{Hom}(\mathbb Z^{r}\oplus T,\mathbb Z)\cong\mathbb Z^{r}$ force $r_3=r_4=0$, so $H_3$ and $H_4$ are finite; moreover $\operatorname{Ext}(\mathbb Z^{r},\mathbb Z)=0$ and additivity of Ext together with $\operatorname{Ext}(\mathbb Z/n,\mathbb Z)\cong\mathbb Z/n\ne0$ show that $\operatorname{Ext}(H_2,\mathbb Z)=0$ forces $T_2=0$, so $H_2$ is a finitely generated free abelian group. [step 2.1, step 3.1, A1, L2, L4, L5]

5.1 The real universal coefficient sequence in degree three is $0\to\operatorname{Ext}(H_2,\mathbb R)\to H^3(M;\mathbb R)\to\operatorname{Hom}(H_3,\mathbb R)\to0$; here $\operatorname{Ext}(H_2,\mathbb R)=0$ because $H_2$ is free, and $\operatorname{Hom}(H_3,\mathbb R)=0$ because $H_3$ is finite while $\mathbb R$ has no nonzero elements of finite order by [L6], so exactness gives $H^3(M;\mathbb R)=0$. [step 4.1, L3, L6]

6.1 The real universal coefficient sequence in degree four is $0\to\operatorname{Ext}(H_3,\mathbb R)\to H^4(M;\mathbb R)\to\operatorname{Hom}(H_4,\mathbb R)\to0$; here $\operatorname{Ext}(H_3,\mathbb R)=0$ because $H_3$ is finite and every $m>0$ acts surjectively on $\mathbb R$ by [L6], and $\operatorname{Hom}(H_4,\mathbb R)=0$ because $H_4$ is finite, so exactness gives $H^4(M;\mathbb R)=0$. [step 5.1, L3, L6]

7.1 Therefore $H^3(M;\mathbb R)=0$ by step 5.1 and $H^4(M;\mathbb R)=0$ by step 6.1, as asserted. [step 5.1, step 6.1] ∎
