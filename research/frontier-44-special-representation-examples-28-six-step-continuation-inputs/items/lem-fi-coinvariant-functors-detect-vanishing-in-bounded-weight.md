---
id: lem-fi-coinvariant-functors-detect-vanishing-in-bounded-weight
kind: lemma
title: "Coinvariants detect vanishing of subquotients of bounded weight, and padded irreducibles stabilise"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 2
deps: [def-weight-of-a-characteristic-zero-fi-module,
       def-fi-coinvariant-functors-and-transition-maps,
       lem-branching-rule-for-specht-induction-and-coinvariants,
       lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields,
       thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order,
       def-first-row-padding-of-a-partition,
       def-submodule]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas Church, Jordan S. Ellenberg and Benson Farb, “FI-modules and stability for representations of symmetric groups”, arXiv:1204.4533v4 (2014); published in Duke Math. J. 164 (2015) 1833–1910"
      url: "https://arxiv.org/pdf/1204.4533"
      locator: "Lemma 3.2.7 (i)–(iv) with its proof, printed pp. 18–20: the vanishing criterion $(V(\\lambda)_n)_{S_{n-a}}=0$ iff $a<|\\lambda|$, the identification $(V(\\lambda)_n)_{S_{n-|\\lambda|}}\\cong V_\\lambda$, the $n$-independence with $\\operatorname{Ind}_{S_{|\\lambda|}\\times S_{a-|\\lambda|}}^{S_a}(V_\\lambda\\boxtimes k)$, and the conclusion that coinvariants detect vanishing for subquotients of weight $\\le a$"
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford Mathematical Monographs, 1995 (author-hosted full text)"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §5, (5.16)–(5.17), printed pp. 73–74: the Pieri rules underlying the horizontal-strip removal conditions"
---

## Statement

Let $k$ be a field of characteristic $0$, let $\mu\vdash n$, and write
$\mu=\lambda[n]$ as in [[def-first-row-padding-of-a-partition]]; set
$V(\lambda)_n:=V_\mu$, the irreducible $kS_n$-module with label $\mu$
([[lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields]]).
For a vector space carrying an action of a product $S_a\times S_k$ and
$k_0=n-a$, write $(\,\cdot\,)_{S_{k_0}}$ for $S_{k_0}$-coinvariants of the
restriction to that product ([[def-fi-coinvariant-functors-and-transition-maps]]).

(i) For $a\le n$, with $k_0=n-a$, the $S_a$-representation
$(V_\mu)_{S_{k_0}}$ is zero if and only if $n-a>\mu_1$, equivalently
$(V(\lambda)_n)_{S_{n-a}}=0$ if and only if $a<|\lambda|$.

(ii) If $n-a=\mu_1$ (that is, $a=|\lambda|$), then
$(V(\lambda)_n)_{S_{n-a}}\cong V_\lambda$ as $S_{|\lambda|}$-modules.

(iii) For fixed $\lambda$ and $a\ge|\lambda|$, the $S_a$-module
$(V(\lambda)_n)_{S_{n-a}}$ is independent of $n$ once $n\ge a+\lambda_1$; in
fact $(V(\lambda)_n)_{S_{n-a}}\cong\operatorname{Ind}_{S_{|\lambda|}\times
S_{a-|\lambda|}}^{S_a}(V_\lambda\boxtimes k)$ throughout that range.

(iv) If $V$ is an FI-module over $k$ with $\operatorname{weight}(V)\le a$
([[def-weight-of-a-characteristic-zero-fi-module]]), then every subquotient
$W_n$ ([[def-submodule]]) of the $S_n$-module $V_n$ satisfies
$W_n=0\iff(W_n)_{S_{n-a}}=0$.

No choice principle is used.

## Facts & Assumptions

**Given:** A field $k$ of characteristic $0$, a partition $\lambda$ with $|\lambda|=m$ and, for each $n\ge m+\lambda_1$, the padded partition $\mu=\lambda[n]\vdash n$ and the irreducible $kS_n$-module $V(\lambda)_n=V_\mu$.

[F1] Branching rule ([[lem-branching-rule-for-specht-induction-and-coinvariants]]): (a) for $\mu\vdash n$ and $k_0\le n$, the $S_{n-k_0}$-module $(\operatorname{Res}^{S_n}_{S_{n-k_0}\times S_{k_0}}V_\mu)_{S_{k_0}}$ is the direct sum of the irreducibles $V_\nu$, $\nu\vdash n-k_0$, over the partitions obtained from $\mu$ by removing one box from each of $k_0$ different columns, each with multiplicity at most one; (b) dually, for $\rho\vdash m$ and $r\ge0$, $\operatorname{Ind}^{S_{m+r}}_{S_m\times S_r}(V_\rho\boxtimes k)$ is the direct sum of the irreducibles $V_\nu$, $\nu\vdash m+r$, over the partitions obtained from $\rho$ by adding one box in each of $r$ different columns, each with multiplicity at most one.

[F2] Over a characteristic-zero field the simple $kS_d$-modules are exactly the modules $V(\eta)_d$ with $\eta$ a partition ([[lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields]]), and for a finite-dimensional $kQ$-module $M$ with $\operatorname{char}k=0$, Maschke's theorem makes $M$ a direct sum of simple modules, so $M\ne0$ if and only if $M$ contains a simple submodule ([[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]]).

[F3] Coinvariants over a field containing $\mathbb Q$ are exact: the averaging map identifies $M_{Q}$ with the invariants $M^{Q}$ naturally, and kernels of $S_a$-equivariant maps are computed pointwise, so a nonzero subquotient has nonzero coinvariants ([[def-fi-coinvariant-functors-and-transition-maps]]).

## Proof

**Proof technique:** direct.

1.1 Apply [F1] with $\mu=\lambda[n]\vdash n$ and $k_0=n-a$: the $S_a$-module $(V(\lambda)_n)_{S_{n-a}}$ is the sum of the irreducibles $V_\nu$, $\nu\vdash a$, over the partitions obtained from $\mu$ by removing one box from each of $k_0=n-a$ different columns, all multiplicities at most one. [F1, given]

2.1 The partition $\mu=(\mu_1,\mu_2,\dots)$ has exactly $\mu_1$ columns, so no such removal exists when $n-a>\mu_1$; conversely, for every $0\le k_0\le\mu_1$, removing the bottom box of each of the $k_0$ rightmost columns is a valid horizontal-strip removal and leaves the partition $\nu$ with column heights $\mu'_j-1$ for those columns. Since $\mu_1=n-m$, the condition $n-a>\mu_1$ is $a<m=|\lambda|$, so $(V(\lambda)_n)_{S_{n-a}}=0$ if and only if $a<|\lambda|$, proving (i). [step 1.1]

2.2 If $n-a=\mu_1$, the strip has one box in each of the $\mu_1$ columns of $\mu$, and each removed box must be the bottom box of its column for the complement to remain a partition; the resulting partition has column heights $\mu'_j-1$, namely $\lambda$ (because $\mu'_j-1=\#\{i:\lambda_i\ge j\}$ in the padded shape $\mu=(n-m,\lambda_1,\lambda_2,\dots)$). Hence $(V(\lambda)_n)_{S_{n-a}}\cong V_\lambda$, which is (ii). [F1, step 1.1]

2.3 For (iii), let $\nu\vdash a$ and compare the two constituent conditions. By step 1.1, $\nu$ occurs in $(V(\lambda)_n)_{S_{n-a}}$ if and only if $\nu$ is obtained from $\mu=(n-m,\lambda_1,\lambda_2,\dots)$ by removing one box from each of $n-a$ different columns, i.e. $\mu_i\ge\nu_i\ge\mu_{i+1}$ for all $i$; these inequalities read $n-m\ge\nu_1\ge\lambda_1$ and $\lambda_{i-1}\ge\nu_i\ge\lambda_i$ for $i\ge2$. By [F1] applied to the induction from $S_m\times S_{a-m}$ with $m=|\lambda|$ (part (i) of that lemma), $\nu$ occurs in $\operatorname{Ind}_{S_m\times S_{a-m}}^{S_a}(V_\lambda\boxtimes k)$ if and only if $\nu$ is obtained from $\lambda$ by adding one box in each of $a-m$ different columns, i.e. $\nu_i\ge\lambda_i\ge\nu_{i+1}$ for all $i$. The two systems differ only in the bound $\nu_1\le n-m$, which is automatic in the range $n\ge a+\lambda_1$ because $\nu_1\le\lambda_1+(a-m)\le n-m$; hence the two modules have exactly the same constituents, each with multiplicity at most one, and they are isomorphic. [F1, given, step 1.1]

3.1 For (iv), suppose first that $W_n\ne0$. Choose $0\ne w\in W_n$ and let $U\subseteq W_n$ be the $k$-span of the finite $S_n$-orbit of $w$; then $U$ is a nonzero finite-dimensional $kS_n$-submodule. By [F2] $U$ has a simple submodule, which by the classification is $V(\rho)_n=V_\rho$ for some partition $\rho=\eta[n]$ with $\eta\vdash r$. As $V_\rho$ is a constituent of $V_n$ and $\operatorname{weight}(V)\le a$, we have $r=|\eta|\le a$ ([[def-weight-of-a-characteristic-zero-fi-module]]). Put $k_0=n-a\le n-r$, and apply step 2.1 with $\lambda'=\eta$: since $a\ge r$, the coinvariants $(V(\rho)_n)_{S_{n-a}}$ are nonzero. The inclusion $V(\rho)_n\hookrightarrow U\hookrightarrow W_n$ induces an injection on coinvariants by exactness [F3], so $(W_n)_{S_{n-a}}\ne0$. Conversely, if $W_n=0$ then $(W_n)_{S_{n-a}}=0$ trivially. This proves (iv) and completes the lemma. [F2, F3, step 2.1] ∎
