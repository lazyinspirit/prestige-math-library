---
id: prop-fi-module-realizing-one-padded-irreducible-family
kind: proposition
title: "Each padded irreducible family is realised by a finitely generated FI-module"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 4
deps: [def-free-fi-module-generated-by-an-sm-module,
       def-first-row-padding-of-a-partition,
       def-weight-of-a-characteristic-zero-fi-module,
       def-injectivity-surjectivity-and-stability-degree-of-an-fi-module,
       lem-free-fi-modules-have-explicit-weight-and-stability-bounds,
       lem-branching-rule-for-specht-induction-and-coinvariants,
       lem-fi-coinvariant-functors-detect-vanishing-in-bounded-weight,
       thm-outer-littlewood-richardson-rule,
       def-finite-generation-and-generation-degree-of-an-fi-module,
       cor-outer-pieri-rules-for-trivial-and-sign-factors,
       lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields,
       thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order,
       def-fi-coinvariant-functors-and-transition-maps,
       lem-generated-in-degree-d-is-a-quotient-of-free-fi-modules]
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
      locator: "Proposition 3.4.1 with its complete proof, printed pp. 24–25: the sub-FI-module $V(\\lambda)\\subseteq M(\\lambda)$ with values $V_{\\lambda[n]}$ for $n\\ge|\\lambda|+\\lambda_1$, generated in that degree, with $\\operatorname{stab-deg}=\\lambda_1$ and $\\operatorname{weight}=|\\lambda|$; Lemma 3.1.6 (quotients and submodules do not raise the degrees)"
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford Mathematical Monographs, 1995 (author-hosted full text)"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §5, (5.16)–(5.17), printed pp. 73–74: Pieri's rule, the horizontal-strip input used through the branching rule"
---

## Statement

Let $k$ be a field of characteristic $0$, let $\lambda$ be a partition with
$m:=|\lambda|$ and first part $\lambda_1$, and put $d:=m+\lambda_1$. For a
partition $\mu\vdash n$ write $V_\mu$ for the irreducible $kS_n$-module with
label $\mu$
([[lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields]]),
and for $n\ge d$ let $\lambda[n]$ be the first-row padding of $\lambda$ to $n$
([[def-first-row-padding-of-a-partition]]).

Then there is a sub-FI-module $V(\lambda)$ of the free FI-module $M(\lambda)$
([[def-free-fi-module-generated-by-an-sm-module]]) with

$$V(\lambda)_n\cong V_{\lambda[n]}\quad(n\ge d),\qquad V(\lambda)_n=0\quad(n<d),$$

so that the value of this FI-module at $[n]$ is the irreducible $kS_n$-module
denoted $V(\lambda)_n$ in [[def-weight-of-a-characteristic-zero-fi-module]].
This FI-module is generated in degree $\le d$
([[def-finite-generation-and-generation-degree-of-an-fi-module]]), and its
generation degree is exactly $d$. It has

$$\operatorname{weight}(V(\lambda))=m,\qquad\operatorname{inj-deg}(V(\lambda))=0,\qquad\operatorname{surj-deg}(V(\lambda))=\operatorname{stab-deg}(V(\lambda))=\lambda_1,$$

where weight is as in [[def-weight-of-a-characteristic-zero-fi-module]] and the
three degrees are as in
[[def-injectivity-surjectivity-and-stability-degree-of-an-fi-module]]. No
choice principle is used.

## Facts & Assumptions

**Given:** A field $k$ of characteristic $0$, a partition $\lambda$ with $m=|\lambda|$ and first part $\lambda_1$, the integer $d=m+\lambda_1$, and the free FI-module $M(\lambda)=M(S^\lambda_k)$ over the FB-module $S^\lambda_k$ supported on $m$-element sets ([[def-free-fi-module-generated-by-an-sm-module]]); for $\mu\vdash n$, $V_\mu$ denotes the irreducible $kS_n$-module with label $\mu$ ([[lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields]]).

[F1] $M(W)_S=\bigoplus_{T\subseteq S}W(T)$, and for $W=S^\lambda_k$ only the $m$-element subsets $T$ contribute; the transition map along an injection $f$ is the sum of the isomorphisms $W(f|_T)\colon W(T)\to W(f(T))$ over distinct summands, hence is injective, and $M$ is additive in $W$; also $M(\lambda)_n\cong\operatorname{Ind}_{S_m\times S_{n-m}}^{S_n}(S^\lambda_k\boxtimes k)$ for $n\ge m$, while $M(\lambda)_n=0$ for $n<m$ ([[def-free-fi-module-generated-by-an-sm-module]]).

[F2] Branching rule: $\operatorname{Ind}_{S_a\times S_r}^{S_{a+r}}(S^\mu_k\boxtimes k)\cong\bigoplus_\nu S^\nu_k$, summed over the partitions $\nu\vdash a+r$ obtained from $\mu$ by adding one box in each of $r$ different columns, equivalently $\nu\supseteq\mu$ with $\nu/\mu$ a horizontal $r$-strip; all multiplicities are $0$ or $1$ ([[lem-branching-rule-for-specht-induction-and-coinvariants]]).

[F3] Over the characteristic-zero field $k$, every finite-dimensional $kS_n$-module is a direct sum of copies of the $S^\nu_k$ and $S^\nu_k\cong S^\mu_k$ if and only if $\nu=\mu$; the irreducible with label $\lambda[n]$ is $V_{\lambda[n]}$ ([[lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields]], [[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]]).

[F4] $\Phi_a(V)_n=(V_{\mathbf a\sqcup n})_{S_n}$, and $T\colon\Phi_a(V)_n\to\Phi_a(V)_{n+1}$ is induced by an injection $\mathbf a\sqcup n\to\mathbf a\sqcup n+1$ fixing $\mathbf a$; $\Phi_a$ is a functor, so an inclusion $W\subseteq V$ of FI-modules induces maps commuting with $T$, surjections induce surjections in every degree, and over a field containing $\mathbb Q$ the induced maps on submodules are injective ([[def-fi-coinvariant-functors-and-transition-maps]]).

[F5] For $\mu=\lambda[n]\vdash n$ and $a\le n$: $(V_\mu)_{S_{n-a}}=0$ if and only if $n-a>\mu_1$; and if $n-a=\mu_1$, then $(V_\mu)_{S_{n-a}}\cong V_\lambda$ ([[lem-fi-coinvariant-functors-detect-vanishing-in-bounded-weight]]).

[F6] For every FB-module $W$ one has $\operatorname{inj-deg}(M(W))=0$; over characteristic zero $\operatorname{weight}(M(\lambda))=m$ and $\operatorname{stab-deg}(M(\lambda))=\lambda_1$, hence $\operatorname{surj-deg}(M(\lambda))=\lambda_1$ ([[lem-free-fi-modules-have-explicit-weight-and-stability-bounds]], [[def-injectivity-surjectivity-and-stability-degree-of-an-fi-module]]).

[F7] $V$ is generated in degree $\le d$ when $\operatorname{span}_V(V_{\le d})=V$, and then the evaluation map $\bigoplus_{m\le d}M(V_m)\to V$ is surjective ([[def-finite-generation-and-generation-degree-of-an-fi-module]], [[lem-generated-in-degree-d-is-a-quotient-of-free-fi-modules]]).

## Proof

**Proof technique:** direct.

1.1 For $n\ge d$ the padded partition $\lambda[n]=(n-m,\lambda_1,\lambda_2,\dots)$ is obtained from $\lambda=(\lambda_1,\lambda_2,\dots)$ by adding exactly one box in each of the first $n-m$ columns and none elsewhere, because $n-m\ge\lambda_1$; hence $V_{\lambda[n]}$ occurs in $M(\lambda)_n$ with multiplicity one by [F1] and [F2]. For $n\ge d$ let $V(\lambda)_n\subseteq M(\lambda)_n$ be the sum of all $kS_n$-submodules isomorphic to $V_{\lambda[n]}$, and set $V(\lambda)_n:=0$ for $n<d$. As the multiplicity is at most one, this sum is the unique subspace of $M(\lambda)_n$ isomorphic to $V_{\lambda[n]}$, so $V(\lambda)_n\cong V_{\lambda[n]}$ for $n\ge d$. [F1, F2, F3, given]

1.2 We show that these subspaces are preserved by transition maps. Let $f\colon[p]\to[q]$ be an injection with $p\ge d$ (if $p<d$, then $V(\lambda)_p=0$ and there is nothing to show), so that $q\ge d$; put $Y:=f_*(V(\lambda)_p)\subseteq M(\lambda)_q$. Since $f_*$ is injective by [F1], $Y\cong V_{\lambda[p]}$. The subspace $Y$ is stable under $H:=\Phi_f(S_p)$, because $f_*\circ\sigma_*=\Phi_f(\sigma)_*\circ f_*$ for all $\sigma\in S_p$, and it is fixed pointwise by $K:=\{\tau\in S_q:\tau|_{f([p])}=\mathrm{id}\}\cong S_{q-p}$, because $\tau\circ f=f$ gives $\tau_*\circ f_*=f_*$ by functoriality. The subgroups $H$ and $K$ commute, $H\times K$ is conjugate in $S_q$ to the standard ordered block subgroup $S_p\times S_{q-p}$, and the pair $(Y,H\text{-action})$ is isomorphic to $(V_{\lambda[p]},S_p\text{-action})$; hence the $S_q$-span $Z$ of $Y$, which is the image of the $S_q$-module map $\operatorname{Ind}_{H\times K}^{S_q}(Y\boxtimes k)\to M(\lambda)_q$, $(u,y)\mapsto u_*y$, is a quotient of $\operatorname{Ind}_{S_p\times S_{q-p}}^{S_q}(V_{\lambda[p]}\boxtimes k)$. [F1, given, algebra]

2.1 Every constituent $V_\nu$ of $Z$ occurs both in $\operatorname{Ind}_{S_p\times S_{q-p}}^{S_q}(V_{\lambda[p]}\boxtimes k)$ and in $M(\lambda)_q\cong\operatorname{Ind}_{S_m\times S_{q-m}}^{S_q}(S^\lambda_k\boxtimes k)$ by step 1.2; by [F2] this means that $\nu\supseteq\lambda[p]$ with $\nu_{i+1}\le\lambda[p]_i$ and $\nu\supseteq\lambda$ with $\nu_{i+1}\le\lambda_i$. Since $\lambda[p]_{i+1}=\lambda_i$ for $i\ge1$, the inequalities $\lambda_i=\lambda[p]_{i+1}\le\nu_{i+1}\le\lambda_i$ force $\nu_{i+1}=\lambda_i$ for every $i\ge1$, and $\nu\vdash q$ gives $\nu_1=q-\sum_{i\ge1}\lambda_i=q-m$; hence $\nu=\lambda[q]$ is the only possible constituent of $Z$. The multiplicity of $V_{\lambda[q]}$ in $M(\lambda)_q$ is at most one by [F2], so every submodule of $M(\lambda)_q$ all of whose constituents are isomorphic to $V_{\lambda[q]}$ is contained in the isotypic piece $V(\lambda)_q$; in particular $Z\subseteq V(\lambda)_q$, hence $Y\subseteq V(\lambda)_q$. [F1, F2, step 1.1, step 1.2]

3.1 For a finite set $S$ with $|S|=n\ge d$ define $V(\lambda)_S:=\beta_*^{-1}\bigl(V(\lambda)_n\bigr)\subseteq M(\lambda)_S$ for any bijection $\beta\colon S\to[n]$; this does not depend on $\beta$, since any other bijection is $\sigma\circ\beta$ with $\sigma\in S_n$ and $\sigma_*\bigl(V(\lambda)_n\bigr)=V(\lambda)_n$. For $|S|<d$ set $V(\lambda)_S:=0$. If $f\colon S\to T$ is an injection with $|S|=p\ge d$ and $\alpha\colon[p]\to S$, $\beta\colon[q]\to T$ are bijections, write $f=\beta\circ f_0\circ\alpha^{-1}$ with $f_0\colon[p]\to[q]$; then $f_*(V(\lambda)_S)=\beta_*(f_0)_*\alpha_*^{-1}\alpha_*(V(\lambda)_p)=\beta_*(f_0)_*(V(\lambda)_p)\subseteq\beta_*(V(\lambda)_q)=V(\lambda)_T$ by step 1.2, using the functoriality of $M(\lambda)$. Hence $V(\lambda)$ is a sub-FI-module of $M(\lambda)$ with the stated values. [F1, given, step 1.2, step 2.1]

4.1 For $n\ge d$ and any injection $f\colon[d]\to[n]$, the map $f_*\colon M(\lambda)_d\to M(\lambda)_n$ is injective by [F1], so its restriction $f_*(V(\lambda)_d)$ is nonzero because $V(\lambda)_d\cong V_{\lambda[d]}\ne0$ [F3], and it lies in $V(\lambda)_n$ by step 1.2. Every injection $[d]\to[n]$ equals $\sigma\circ f$ for some $\sigma\in S_n$, and $(\sigma\circ f)_*=\sigma_*\circ f_*$, so $\operatorname{span}_{V(\lambda)}(V(\lambda)_d)_n$ is the $S_n$-span of $f_*(V(\lambda)_d)$: a nonzero $kS_n$-submodule of the irreducible $V(\lambda)_n$ [F3], hence all of $V(\lambda)_n$. For $n<d$ both sides are $0$, so $\operatorname{span}_{V(\lambda)}(V(\lambda)_{\le d})=V(\lambda)$; thus $V(\lambda)$ is generated in degree $\le d$ by [F7], and as $V(\lambda)_n=0$ for $n<d$ with $V(\lambda)_d\ne0$, its generation degree is exactly $d$. A finite $k$-basis of the finite-dimensional $V(\lambda)_d$ generates all of it, so this FI-module is finitely generated. [F1, F3, F7, step 1.2, step 3.1]

4.2 For $n\ge d$ the value $V(\lambda)_n\cong V_{\lambda[n]}$ is irreducible of label $\lambda[n]$, and the tail label has $|\lambda|=n-(n-m)=m$; a subquotient of an irreducible module is $0$ or the module itself, so $V(\lambda)_n$ is the only constituent of itself, its label being $\lambda$ with $|\lambda|=m$ ([[def-weight-of-a-characteristic-zero-fi-module]]). For $n<d$ the value is $0$. Hence $\operatorname{weight}(V(\lambda))=m$, the supremum being attained in every degree $n\ge d$. [given, F3, step 3.1]

4.3 By step 3.1 the module $V(\lambda)$ is a sub-FI-module of $M(\lambda)$. For all $a,n$ the inclusion $V(\lambda)_{\mathbf a\sqcup n}\subseteq M(\lambda)_{\mathbf a\sqcup n}$ induces an injective map $\Phi_aV(\lambda)_n\to\Phi_aM(\lambda)_n$ because $k$ contains $\mathbb Q$ [F4], and by naturality of $T$ these maps commute with the transition maps. If $T\colon\Phi_aM(\lambda)_n\to\Phi_aM(\lambda)_{n+1}$ is injective, then $T\colon\Phi_aV(\lambda)_n\to\Phi_aV(\lambda)_{n+1}$ is injective as well; since $\operatorname{inj-deg}(M(\lambda))=0$ by [F6], the latter holds for all $n\ge0$, so $\operatorname{inj-deg}(V(\lambda))=0$. [F4, F6, step 3.1]

5.1 Let $\mu:=\lambda[d]\vdash d$, so that $\mu_1=d-m=\lambda_1$. By step 4.1 the module $V(\lambda)$ is generated in degree $\le d$, so the evaluation map $e\colon M(V(\lambda)_d)\to V(\lambda)$ is surjective by [F7]; since $V(\lambda)_d\cong V_\mu$ is irreducible, $M(V(\lambda)_d)\cong M(\mu)$ by the additivity of $M$ in [F1]. For any surjection $q\colon U\twoheadrightarrow W$ of FI-modules and all $a,n$, the map $\Phi_a(q)_n$ is surjective because $\Phi_a$ preserves surjections [F4], and naturality gives $T_W\circ\Phi_a(q)_n=\Phi_a(q)_{n+1}\circ T_U$; hence $T_U$ surjective implies $T_W$ surjective, so $\operatorname{surj-deg}(W)\le\operatorname{surj-deg}(U)$ (Lemma 3.1.6 of the source). Applying this to $e$ and using [F6], $\operatorname{surj-deg}(V(\lambda))\le\operatorname{surj-deg}(M(\mu))=\mu_1=\lambda_1$. [F1, F4, F6, F7, step 4.1]

6.1 Suppose $\lambda_1\ge1$. With $a:=m$ one has $a+\lambda_1=d$, so by [F5] applied with $n:=d$, $a:=m$ and $\mu:=\lambda[d]$, whose first part is $\mu_1=d-m=\lambda_1$, the coinvariants $\bigl(V(\lambda)_d\bigr)_{S_{\lambda_1}}$ are isomorphic to $V_\lambda\ne0$, and by [F4] they are $\Phi_mV(\lambda)_{\lambda_1}$ (under the identification of the set $\mathbf m\sqcup\lambda_1$ of size $d$ with $[d]$, which is immaterial because conjugate subgroups have isomorphic coinvariants); moreover $\Phi_mV(\lambda)_{\lambda_1-1}=\bigl(V(\lambda)_{d-1}\bigr)_{S_{\lambda_1-1}}=0$, since $V(\lambda)$ vanishes below $d$ by step 1.1. Hence $T\colon\Phi_mV(\lambda)_{\lambda_1-1}\to\Phi_mV(\lambda)_{\lambda_1}$ has zero source and nonzero target, so it is not surjective and $\operatorname{surj-deg}(V(\lambda))\ge\lambda_1$; with step 5.1, $\operatorname{surj-deg}(V(\lambda))=\lambda_1$, and with step 4.3, $\operatorname{stab-deg}(V(\lambda))=\max(0,\lambda_1)=\lambda_1$. If $\lambda_1=0$, then $\lambda=\varnothing$, $m=d=0$ and $M(\varnothing)=M(k)$ has all values $k$ and all transition maps isomorphisms by [F1], so $V(\varnothing)=M(\varnothing)$ and $\operatorname{inj-deg}=\operatorname{surj-deg}=\operatorname{stab-deg}=0=\lambda_1$. [F1, F4, F5, step 1.1, step 3.1, step 4.3, step 5.1]

7.1 Steps 1.1, 1.2, 2.1 and 3.1 construct the sub-FI-module $V(\lambda)\subseteq M(\lambda)$ with values $V_{\lambda[n]}$ for $n\ge d$ and $0$ otherwise; step 4.1 shows that its generation degree is exactly $d$; step 4.2 gives $\operatorname{weight}(V(\lambda))=m$; and steps 4.3–6.1 give $\operatorname{inj-deg}(V(\lambda))=0$ and $\operatorname{surj-deg}(V(\lambda))=\operatorname{stab-deg}(V(\lambda))=\lambda_1$. The only selections made are bijections between finite sets, and the value at each finite set was shown to be independent of the selection, so no choice principle is used. [step 1.1, step 1.2, step 2.1, step 3.1, step 4.1, step 4.2, step 4.3, step 5.1, step 6.1] ∎
