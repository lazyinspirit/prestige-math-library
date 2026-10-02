---
id: lem-nonzero-maps-between-specht-quotients-force-dominance
kind: lemma
title: Nonzero maps into tabloid quotients force dominance
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
proof_strategy: direct
deps:
  - def-integral-specht-lattice-and-base-change
  - def-integral-tabloid-bilinear-form-and-specht-gram-matrix
  - def-modular-specht-form-and-radical-quotient
  - lem-field-antisymmetrizer-image-and-dominance
  - lem-specht-gram-gcd-detects-p-regularity
  - thm-specht-radical-quotient-is-nonzero-exactly-for-p-regular-partitions
  - def-dominance-order-on-partitions
  - lem-polytabloid-covariance-and-column-sign
  - def-young-subgroup-tabloid-and-permutation-module
  - def-column-antisymmetrizer-polytabloid-and-specht-module
  - def-module-radical-socle-head-and-loewy-series
  - def-p-regular-and-p-restricted-partitions
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Lemma 11.3 and Corollary 11.4, printed pp. 39-40"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
    - title: "David A. Craven, Groups, Geometries and Representation Theory, §2.3, Proposition 2.10, printed pp. 25-26"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Let $p$ be a prime, let $F$ be a field of characteristic $p$, let $n\ge0$,
and let $\lambda,\mu\vdash n$ with $\lambda$ $p$-regular. Let
$$M^\mu_F=F\otimes_{\mathbb Z}M^\mu_{\mathbb Z},\qquad S^\mu_F\subseteq M^\mu_F,\qquad R^\mu_F=S^\mu_F\cap(S^\mu_F)^{\perp},\qquad D^\mu_F=S^\mu_F/R^\mu_F$$
be the field-valued tabloid module with its orthonormal form $\beta_F$, the
field-valued Specht span, the form radical of its restriction and the
quotient ([[def-integral-tabloid-bilinear-form-and-specht-gram-matrix]],
[[thm-specht-radical-quotient-is-nonzero-exactly-for-p-regular-partitions]]),
and let $U\le M^\mu_F$ be an $F[S_n]$-submodule. Then:

1. **Dominance.** Every nonzero $F[S_n]$-homomorphism
   $\varphi:S^\lambda_F\to M^\mu_F/U$ satisfies $\lambda\unrhd\mu$.
2. **Equality case.** If $\lambda=\mu$, then the image of such a nonzero
   $\varphi$ is exactly the image $(S^\mu_F+U)/U$ of $S^\mu_F$ in
   $M^\mu_F/U$; in particular $U$ does not contain $S^\mu_F$.
3. **Quotient form.** Statements 1 and 2 remain true with $S^\lambda_F$
   replaced by $D^\lambda_F$: every nonzero $F[S_n]$-homomorphism
   $\psi:D^\lambda_F\to M^\mu_F/U$ satisfies $\lambda\unrhd\mu$, and if
   $\lambda=\mu$ then its image is $(S^\mu_F+U)/U$ and
   $U\nsupseteq S^\mu_F$.
4. **Separation.** If $\lambda$ and $\mu$ are both $p$-regular and
   $D^\lambda_F\cong D^\mu_F$ as $F[S_n]$-modules, then $\lambda=\mu$. More
   generally, if $\lambda$ is $p$-regular and $D^\lambda_F\cong D^\mu_F$,
   then $\mu$ is $p$-regular and $\mu=\lambda$.

No simplicity of $S^\lambda_F$ or $S^\mu_F$ is assumed or claimed, the case
$U=0$ (no submodule divided out) is included, and $n=0$ and characteristic
$2$ need no separate treatment. No step averages over a group, divides by a
group order, or uses positivity of any form.

## Facts & Assumptions

**Given:** A prime $p$, a field $F$ of characteristic $p$, an integer $n\ge0$, partitions $\lambda,\mu\vdash n$ with $\lambda$ $p$-regular, and the objects above.

[F1] $\lambda$ is $p$-regular if and only if $z_j(\lambda)<p$ for every $j\ge1$, where $z_j(\lambda)=\#\{i:\lambda_i=j\}$ ([[def-p-regular-and-p-restricted-partitions]]).

[F2] With $L_\lambda=\prod_{j\ge1}z_j!$ and $U_\lambda=\prod_{j\ge1}(z_j!)^j$ one has $L_\lambda\mid g_\lambda\mid U_\lambda$, where $g_\lambda$ is the positive gcd of the integral pairings of polytabloids, and the reduction of $g_\lambda$ modulo $p$ is nonzero exactly when $\lambda$ is $p$-regular. Moreover, for a $\lambda$-tableau $t$ with row reversal $t^*$, over every field the polytabloid relation $$\kappa_t\,e_{t^*}=U_\lambda\,e_t$$ holds ([[lem-specht-gram-gcd-detects-p-regularity]]).

[F3] For every $\lambda$-tableau $t$ the polytabloid $e_t=\kappa_t\{t\}$ is nonzero with tabloid coefficients in $\{0,1,-1\}$, $e_{\sigma\cdot t} =\sigma\cdot e_t$ for every $\sigma\in S_n$, and every $\lambda$-tableau is $\sigma\cdot t$ for some $\sigma$; hence $S^\lambda_F=F[S_n]e_t$ ([[def-integral-specht-lattice-and-base-change]], [[lem-polytabloid-covariance-and-column-sign]], [[def-young-subgroup-tabloid-and-permutation-module]], [[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F4] For every field $F$, $\kappa_t M^\lambda_F=F e_t\ne0$ for a $\lambda$-tableau $t$; and if $\mu\vdash n$ satisfies $\kappa_t M^\mu_F\ne0$, then $\lambda\unrhd\mu$ ([[lem-field-antisymmetrizer-image-and-dominance]]).

[F5] $D^\lambda_F=S^\lambda_F/R^\lambda_F$ with $R^\lambda_F=S^\lambda_F\cap(S^\lambda_F)^{\perp}$; if $\nu\vdash n$ is $p$-regular then $D^\nu_F\ne0$ is the simple head of $S^\nu_F$, while if $\nu$ is not $p$-regular then $D^\nu_F=0$ ([[thm-specht-radical-quotient-is-nonzero-exactly-for-p-regular-partitions]], [[def-modular-specht-form-and-radical-quotient]], [[def-module-radical-socle-head-and-loewy-series]]).

[F6] $\unrhd$ is a partial order on the partitions of $n$: it is reflexive, transitive and antisymmetric ([[def-dominance-order-on-partitions]]).

[F7] $\beta_F$ is symmetric, nondegenerate and $S_n$-invariant, so that $\beta_F(\sigma x,\sigma y)=\beta_F(x,y)$ for all $x,y\in M^\mu_F$ and $\sigma\in S_n$, and $S^\mu_F\subseteq M^\mu_F$ is an $F[S_n]$-submodule ([[def-integral-tabloid-bilinear-form-and-specht-gram-matrix]], [[def-integral-specht-lattice-and-base-change]]).

## Proof

**Proof technique:** direct.

1.1 Since $L_\lambda$ and $U_\lambda$ are products of the same factorials $z_j!$ (in different multiplicities), a prime divides $L_\lambda$ if and only if it divides $U_\lambda$. As $\lambda$ is $p$-regular, [F1] and [F2] give $p\nmid g_\lambda$, hence $p\nmid L_\lambda$; if $p\mid U_\lambda$ then $p\mid L_\lambda$ by the first observation, a contradiction. Therefore $U_\lambda$ has nonzero image in $F$. In particular, for every $\lambda$-tableau $t$ the relation $\kappa_te_{t^*}=U_\lambda e_t$ of [F2] has $U_\lambda\ne0$ in $F$. [given, F1, F2, algebra]

1.2 Let $N$ be an $F[S_n]$-module and $\varphi:S^\lambda_F\to N$ an $F[S_n]$-homomorphism with $\varphi(e_t)=0$ for one $\lambda$-tableau $t$. By [F3] every $\lambda$-polytabloid is $\sigma\cdot e_t$ for some $\sigma\in S_n$, so $\varphi(\sigma\cdot e_t)=\sigma\cdot\varphi(e_t)=0$ for all $\sigma$; since the polytabloids span $S^\lambda_F$, $\varphi=0$. Hence a nonzero $\varphi$ satisfies $\varphi(e_s)\ne0$ for every $\lambda$-tableau $s$. [given, F3, algebra]

1.3 For every partition $\nu\vdash n$ the space $(S^\nu_F)^{\perp}$ is an $F[S_n]$-submodule of $M^\nu_F$: if $x\in(S^\nu_F)^{\perp}$, $\sigma\in S_n$ and $s\in S^\nu_F$, then $\beta_F(\sigma x,s)=\beta_F(x,\sigma^{-1}s)=0$ because $\sigma^{-1}s\in S^\nu_F$ by [F7]. [given, F7, algebra]

2.1 Let $\varphi:S^\lambda_F\to M^\mu_F/U$ be a nonzero $F[S_n]$-homomorphism, and put $v:=\varphi(e_{t^*})\in M^\mu_F/U$ for a $\lambda$-tableau $t$. Using [F2], the $F[S_n]$-linearity of $\varphi$ and steps 1.1-1.2, $$\kappa_t\,v=\kappa_t\varphi(e_{t^*})=\varphi(\kappa_te_{t^*})=\varphi(U_\lambda e_t)=U_\lambda\varphi(e_t)\ne0 .$$ Choose $w\in M^\mu_F$ with $v=w+U$. Then $\kappa_tw+U=\kappa_tv\ne0$, so $\kappa_tw\ne0$ and hence $\kappa_tM^\mu_F\ne0$; by [F4] this forces $\lambda\unrhd\mu$. This is assertion 1. [given, F2, F4, step 1.1, step 1.2, algebra]

3.1 Suppose now that $\lambda=\mu$ and let $\varphi,v,w$ be as in step 2.1, so $\kappa_tw\ne0$ by that step. By [F4] one has $\kappa_tM^\lambda_F=Fe_t$, so $\kappa_tw=ce_t$ for a unique $c\in F$, and $c\ne0$ because $\kappa_tw\ne0$. From $U_\lambda\varphi(e_t)=\kappa_tv=\kappa_tw+U=ce_t+U$ and step 1.1 we get $$\varphi(e_t)=\frac{c}{U_\lambda}\,e_t+U =\frac{c}{U_\lambda}\,(e_t+U),$$ a nonzero multiple of $e_t+U$ in $M^\lambda_F/U$; hence $e_t+U\in\operatorname{Im}\varphi$. Since $\operatorname{Im}\varphi$ is an $F[S_n]$-submodule and $S^\lambda_F=F[S_n]e_t$ by [F3], this gives $(S^\lambda_F+U)/U=F[S_n](e_t+U)\subseteq\operatorname{Im}\varphi$. Conversely, every $x\in S^\lambda_F$ is a finite sum $x=\sum_\sigma a_\sigma\,\sigma e_t$ with $a_\sigma\in F$, and then $$\varphi(x)=\sum_\sigma a_\sigma\,\sigma\varphi(e_t) =\sum_\sigma a_\sigma\,\sigma\Bigl(\frac{c}{U_\lambda}(e_t+U)\Bigr) =\frac{c}{U_\lambda}\,(x+U)\in(S^\lambda_F+U)/U,$$ so $\operatorname{Im}\varphi\subseteq(S^\lambda_F+U)/U$. Therefore $\operatorname{Im}\varphi=(S^\mu_F+U)/U$, which is nonzero because $\varphi\ne0$, and consequently $U$ does not contain $S^\mu_F$. This is assertion 2. [given, F3, F4, step 1.1, step 2.1, algebra]

4.1 Let $\psi:D^\lambda_F\to M^\mu_F/U$ be a nonzero $F[S_n]$-homomorphism and let $\pi:S^\lambda_F\twoheadrightarrow D^\lambda_F$ be the quotient map. Then $\varphi:=\psi\circ\pi:S^\lambda_F\to M^\mu_F/U$ is nonzero, so steps 2.1 and 3.1 apply to $\varphi$ and give $\lambda\unrhd\mu$; if $\lambda=\mu$, they give $\operatorname{Im}\psi=\operatorname{Im}\varphi=(S^\mu_F+U)/U$, which is nonzero, so $U\nsupseteq S^\mu_F$. This is assertion 3. [given, step 2.1, step 3.1, algebra]

5.1 Suppose $\lambda$ and $\mu$ are both $p$-regular and let $\theta:D^\lambda_F\to D^\mu_F$ be an $F[S_n]$-isomorphism. Put $U:=(S^\mu_F)^{\perp}$, a submodule of $M^\mu_F$ by step 1.3. The natural map $j:S^\mu_F\to M^\mu_F/U$ has kernel $S^\mu_F\cap(S^\mu_F)^{\perp}=R^\mu_F$, so it induces an injective $F[S_n]$-homomorphism $\iota:D^\mu_F\hookrightarrow M^\mu_F/U$. Hence $\iota\circ\theta:D^\lambda_F\to M^\mu_F/U$ is nonzero and step 4.1 gives $\lambda\unrhd\mu$. By symmetry, with $U':=(S^\lambda_F)^{\perp}$ let $\iota':D^\lambda_F\hookrightarrow M^\lambda_F/U'$ be the corresponding injection of step 1.3; then $\iota'\circ\theta^{-1}:D^\mu_F\to M^\lambda_F/U'$ is nonzero, and step 4.1 with the roles of $\lambda$ and $\mu$ exchanged (both are $p$-regular) gives $\mu\unrhd\lambda$. Antisymmetry of the dominance order [F6] yields $\lambda=\mu$. This is assertion 4 in the case that both labels are $p$-regular. [given, F5, F6, step 1.3, step 4.1, algebra]

6.1 Steps 1.1-1.3, 2.1, 3.1, 4.1 and 5.1 prove assertions 1-4. For the final sentence of assertion 4, if $\lambda$ is $p$-regular, $\mu\vdash n$ and $D^\lambda_F\cong D^\mu_F$, then $D^\lambda_F\ne0$ by [F5], so $D^\mu_F\ne0$, hence $\mu$ is $p$-regular by [F5]; now step 5.1 gives $\mu=\lambda$. The boundary cases are included: for $n=0$ one has $\lambda=\mu=\varnothing$, $S^\varnothing_F=M^\varnothing_F$ is one-dimensional, $R^\varnothing_F=0$, $D^\varnothing_F\cong F\ne0$, and $M^\varnothing_F/U$ is nonzero only for $U=0$, in which case assertion 1 is trivial and assertion 2 reads $\operatorname{Im}\varphi=S^\varnothing_F$ for every nonzero $\varphi$; for $U=0$ the equality case says a nonzero $S^\lambda_F\to S^\lambda_F$ is surjective, and for $U=M^\mu_F$ the codomain is zero so no nonzero $\varphi$ exists. Characteristic $2$ is covered because at no point is the sign of a permutation used, and no step divides by a group order or averages over $S_n$. [given, F5, F6, step 1.1, step 1.2, step 1.3, step 2.1, step 3.1, step 4.1, step 5.1] ∎
