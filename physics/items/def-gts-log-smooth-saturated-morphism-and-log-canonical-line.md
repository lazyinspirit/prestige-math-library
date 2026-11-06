---
id: def-gts-log-smooth-saturated-morphism-and-log-canonical-line
kind: definition
title: Log-smooth saturated morphism and relative log-canonical line
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-etale-morphism-schemes
  - def-gts-fs-log-schemes-and-toric-monoids
  - def-sheaf-relative-differentials
  - def-smooth-morphism-schemes
dependency_roles:
  def-etale-morphism-schemes: mathematical-premise
  def-gts-fs-log-schemes-and-toric-monoids: mathematical-premise
  def-sheaf-relative-differentials: mathematical-premise
  def-smooth-morphism-schemes: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Arthur Ogus, Lectures on Logarithmic Algebraic Geometry
      url: https://math.uchicago.edu/~drinfeld/p-adic_periods/Ogus_logbook.pdf
      locator: Chapter II §1.1; Chapter IV Definition 1.1.1, §1.1 on log differentials, Definition 3.1.1 and Theorems 3.1.8, 3.3.1 on log smoothness
    - title: Takeshi Tsuji, Saturated Morphisms of Logarithmic Schemes
      url: https://msp.org/tunis/2019/1-2/tunis-v1-n2-p02-p.pdf
      locator: Proposition I.2.1, Definition I.2.2, Definitions I.3.5, I.3.7, I.3.12, Proposition I.3.14, and Definition II.2.10
    - title: Simon Felten and Andrea Petracci, The Logarithmic Bogomolov–Tian–Todorov Theorem
      url: https://arxiv.org/pdf/2010.13656v3
      locator: §3.2, relative log differentials and log-canonical line bundle
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $f:(X,M_X)\to(S,M_S)$ be a morphism of fs log schemes over a field. In this page, “log smooth” means that étale locally it has charts $P_S\to P_X$ for which the induced scheme map
$$X\longrightarrow S\times_{\operatorname{Spec}\mathbb Z[P_S]}\operatorname{Spec}\mathbb Z[P_X]$$
is smooth and the kernel of $P_S^{\rm gp}\to P_X^{\rm gp}$ and torsion subgroup of its cokernel are finite with orders invertible in $\mathcal O_X$. In characteristic zero this invertibility condition is automatic. This is the Kato chart convention; no underlying-scheme smoothness of $X\to S$ is asserted.

The chart square is
```tikz
\begin{tikzpicture}
  \node (X) at (0,1.3) {$X$};
  \node (PX) at (3.2,1.3) {$\mathop{\mathrm{Spec}}\mathbb Z[P_X]$};
  \node (S) at (0,0) {$S$};
  \node (PS) at (3.2,0) {$\mathop{\mathrm{Spec}}\mathbb Z[P_S]$};
  \draw[->] (X) -- node[above] {chart} (PX);
  \draw[->] (X) -- node[left] {$f$} (S);
  \draw[->] (S) -- node[below] {chart} (PS);
  \draw[->] (PX) -- node[right] {$\mathop{\mathrm{Spec}}\mathbb Z[P_S\to P_X]$} (PS);
\end{tikzpicture}
```
The diagram commutes by the definition of a morphism with charts; the map to the fibre product in the displayed criterion is induced by its top and left arrows. The diagram records the convention, not a proof of the chart criterion.

A homomorphism $u:P\to R$ of integral monoids is integral if every pushout $R\oplus_P P'$ in the category of monoids is integral for every map from $P$ to an integral monoid $P'$. A map $v:H\to K$ of integral monoids is exact if $H=(v^{\rm gp})^{-1}(K)$ inside $H^{\rm gp}$. For each prime $p$, form the pushout $R_p=R\oplus_{P,p}P$ in integral monoids, using $u:P\to R$ and multiplication by $p:P\to P$. Its canonical map $h_p:R_p\to R$ sends the image of $r\in R$ to $pr$ and the image of $a\in P$ to $u(a)$. The map $u$ is saturated if it is integral and every $h_p$ is exact. For saturated $P,R$, equivalently it is integral and every pushout $R\oplus_P P'$ is saturated whenever $P'$ is saturated. A morphism of integral log schemes is saturated if its induced characteristic-monoid homomorphism $\overline M_{S,\bar s}\to\overline M_{X,\bar x}$ is saturated at every geometric point $\bar x\mapsto\bar s$. For fs monoids this agrees with the local chart definition in the cited source.

In this item a log morphism is proper when its underlying scheme morphism is proper, meaning finite type, separated, and universally closed. Its log-relative dimension is $d$ when $\Omega^1_{X/S,\log}$ is locally free of rank $d$. These clauses fix the use of “proper” and “relative dimension” in the log-BTT interface.

The sheaf of relative log differentials $\Omega^1_{X/S,\log}$ is characterized by its universal property: its sections represent pairs consisting of an ordinary relative derivation $d:\mathcal O_X\to\mathcal E$ and an additive map $d\log:M_X^{\rm gp}\to\mathcal E$ with $d(\alpha(m))=\alpha(m)d\log(m)$, vanishing on the image of $M_S^{\rm gp}$; $\mathcal E$ ranges over $\mathcal O_X$-modules. When it is locally free of rank $d$, the relative log-canonical line is $\omega_{X/S}:=\bigwedge^d\Omega^1_{X/S,\log}$. The phrase “trivial relative log-canonical line” means a specified isomorphism $\omega_{X/S}\cong\mathcal O_X$.

## Definition references

[[def-gts-fs-log-schemes-and-toric-monoids]]

[[def-sheaf-relative-differentials]]
