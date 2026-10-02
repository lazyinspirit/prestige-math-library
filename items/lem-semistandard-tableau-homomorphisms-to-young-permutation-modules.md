---
id: lem-semistandard-tableau-homomorphisms-to-young-permutation-modules
kind: lemma
title: Semistandard fillings construct Specht-to-permutation homomorphisms
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-semistandard-tableau-and-kostka-number, def-young-subgroup-tabloid-and-permutation-module, def-column-antisymmetrizer-polytabloid-and-specht-module, def-row-and-column-stabilizers-of-a-tableau, def-young-tableau-standard-tableau-and-shape, lem-polytabloid-covariance-and-column-sign]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "David A. Craven, Groups, Geometries and Representation Theory, Sections 2.2 and 2.4, printed pp. 22-23 and 28-31"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
    - title: "Andrew Snowden, MATH 711 Representation Theory of Symmetric Groups, Lemmas 2.45-2.46 and Section 3.2, PDF pp. 23-24 and 36-39"
      url: "https://people.maths.ox.ac.uk/horawa/math_711.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Let $\lambda,\mu\vdash n$, and fix a $\lambda$-tableau $t$. Let $T_{\lambda,\mu}$
be the set of fillings of the boxes of $[\lambda]$ by positive integers with
content $\mu$ ([[def-semistandard-tableau-and-kostka-number]]). Identifying
$\mu$-tabloids with the elements of $T_{\lambda,\mu}$ by recording, at the box
that $t$ labels $x$, the row of $x$ in the tabloid, one obtains an
$S_n$-module isomorphism $\mathbb C^{(\Omega_\mu)}\cong\mathbb C T_{\lambda,\mu}$
for the transported left action
$$(\sigma\cdot f)(x)=f\bigl(x'\bigr),\qquad t(x')=\sigma^{-1}(t(x)).$$
For $u\in T_{\lambda,\mu}$ let $R_t\cdot u\subseteq T_{\lambda,\mu}$ be its
orbit under this restricted action and put
$$\theta_u\bigl(\{t\}\bigr):=\sum_{v\in R_t\cdot u}v\ \in\ \mathbb C T_{\lambda,\mu},$$
extended to a map $\theta_u:M^\lambda\to M^\mu$ by
$\theta_u(\sigma\cdot\{t\}):=\sigma\cdot\theta_u(\{t\})$. Then $\theta_u$ is a
well-defined $S_n$-module homomorphism, and for every semistandard
$\lambda$-tableau $T$ of content $\mu$ the restriction
$\theta_T|_{S^\lambda}:S^\lambda\to M^\mu$ is a homomorphism of
$S_n$-modules. No assertion is made here that this restriction is nonzero.

## Facts & Assumptions

**Given:** partitions $\lambda,\mu\vdash n$, a fixed $\lambda$-tableau $t$, and
a filling $u$ of $[\lambda]$ with content $\mu$.

[F1] A $\mu$-tabloid is a row-equivalence class $\{s\}$ of $\mu$-tableaux;
the tabloids form a basis of $M^\mu$, and $S_n$ acts on $M^\mu$ by
$\sigma\cdot\{s\}=\{\sigma\cdot s\}$, where $(\sigma\cdot s)(i,j)=\sigma(s(i,j))$
([[def-young-subgroup-tabloid-and-permutation-module]]).

[F2] The stabilizer in $S_n$ of the tabloid $\{t\}$ is the row stabilizer
$R_t$ ([[def-young-subgroup-tabloid-and-permutation-module]]).

[F3] Every $\lambda$-tabloid is $\sigma\cdot\{t\}$ for some $\sigma\in S_n$,
because the action on tabloids is transitive
([[def-young-subgroup-tabloid-and-permutation-module]]).

[F4] $R_t=\{\rho\in S_n:\rho(A_i)=A_i\text{ for every row }i\}$ where
$A_i=\{t(i,j)\}$, and $R_t$ is the direct product of the symmetric groups on
the pairwise disjoint sets $A_1,\dots,A_k$
([[def-row-and-column-stabilizers-of-a-tableau]]).

[F5] A $\lambda$-tableau is a bijection $[\lambda]\to\{1,\dots,n\}$, and
$\sigma\cdot t$ is characterised by $(\sigma\cdot t)(i,j)=\sigma(t(i,j))$
([[def-young-tableau-standard-tableau-and-shape]],
[[def-row-and-column-stabilizers-of-a-tableau]]).

[F6] A semistandard $\lambda$-tableau of content $\mu$ is a filling satisfying
weak row increase, strict column increase and content $\mu$
([[def-semistandard-tableau-and-kostka-number]]).

[F7] $S^\lambda\subseteq M^\lambda$ is the complex span of the polytabloids
$e_s=\kappa_s\cdot\{s\}$ ([[def-column-antisymmetrizer-polytabloid-and-specht-module]]),
and it is an $S_n$-submodule of $M^\lambda$
([[lem-polytabloid-covariance-and-column-sign]]).

## Proof

**Proof technique:** constructive.

1.1 [construct] For a $\mu$-tabloid $\{s\}$ write $B_1,\dots,B_k$ for its row sets, so $|B_i|=\mu_i$; define $\varphi(\{s\})\in T_{\lambda,\mu}$ to be the filling $f$ with $f(x):=i$ whenever $t(x)\in B_i$, which has content $\mu$ because $t$ is a bijection, and conversely for $f\in T_{\lambda,\mu}$ put $B_i:=\{t(x):f(x)=i\}$, so that the pairwise disjoint sets $B_i$ cover $\{1,\dots,n\}$ with $|B_i|=\mu_i$ and are the rows of a $\mu$-tabloid $\{s\}$ with $\varphi(\{s\})=f$; the two rules are inverse and $\varphi:\Omega_\mu\to T_{\lambda,\mu}$ is a bijection. [F1, F5, construct, algebra]

2.1 The left action on the tabloid basis transports along $\varphi$ to the left action $(\sigma\cdot f)(x)=f(x')$ with $t(x')=\sigma^{-1}(t(x))$, because the row of the label $t(x)$ in $\sigma\cdot\{s\}=\{\sigma\cdot s\}$ is the row of $\sigma^{-1}(t(x))$ in $\{s\}$ by [F1]; hence the display in the Statement is a left action of $S_n$ on $T_{\lambda,\mu}$ and $\varphi$ is an isomorphism of $S_n$-modules, so we may compute with fillings and translate back along $\varphi^{-1}$ at the end. [F1, step 1.1, algebra]

3.1 Let $\rho\in R_t$ and $f\in T_{\lambda,\mu}$. By [F5], $\rho^{-1}(t(x))=t(x'')$ for the box $x''$ in the same row $i$ of $[\lambda]$, since $\rho$ preserves the row sets $A_i$ of $t$ by [F4], so $(\rho\cdot f)(x)=f(x'')$: the entries of $f$ are permuted within each row of $[\lambda]$ and none leaves its row; conversely each permutation of the entries within the rows of $f$ arises this way, because $R_t$ is the full direct product of the symmetric groups on the disjoint sets $A_1,\dots,A_k$ by [F4] and the boxes of row $i$ correspond bijectively to $A_i$ via $t$ by [F5]. Hence $R_t\cdot f$ is exactly the finite nonempty set of fillings obtained from $f$ by permuting entries within rows. [F4, F5, step 2.1, algebra]

4.1 Let $\theta_u(\{t\}):=\sum_{v\in R_t\cdot u}v$ as in the Statement, a finite sum over the orbit of step 3.1; for every $\rho\in R_t$ one has $\rho\cdot(R_t\cdot u)=R_t\cdot u$ because $R_t$ is a subgroup acting on $T_{\lambda,\mu}$ by step 2.1, so $\rho\cdot\theta_u(\{t\})=\theta_u(\{t\})$ and the orbit sum is $R_t$-invariant. [step 2.1, step 3.1, algebra]

5.1 Define $\theta_u(\sigma\cdot\{t\}):=\sigma\cdot\theta_u(\{t\})$ for $\sigma\in S_n$. This is well defined: if $\sigma\cdot\{t\}=\tau\cdot\{t\}$, then $\tau^{-1}\sigma\in R_t$ by [F2], so by step 4.1 and the left action axioms $\sigma\cdot\theta_u(\{t\})=\tau\cdot\bigl((\tau^{-1}\sigma)\cdot\theta_u(\{t\})\bigr)=\tau\cdot\theta_u(\{t\})$; since every tabloid is $\sigma\cdot\{t\}$ by [F3] and the tabloids form a basis of $M^\lambda$ by [F1], the formula defines a unique $\mathbb C$-linear map $\theta_u:M^\lambda\to M^\mu$. [F1, F2, F3, step 4.1, algebra]

6.1 The map $\theta_u$ is $S_n$-linear: for $\gamma,\sigma\in S_n$, the left action axioms and step 5.1 give $\theta_u(\gamma\cdot(\sigma\cdot\{t\}))=\theta_u((\gamma\sigma)\cdot\{t\})=(\gamma\sigma)\cdot\theta_u(\{t\})=\gamma\cdot\bigl(\sigma\cdot\theta_u(\{t\})\bigr)=\gamma\cdot\theta_u(\sigma\cdot\{t\})$, and the elements $\sigma\cdot\{t\}$ span $M^\lambda$. [step 5.1, algebra]

7.1 Restricting along the inclusion $S^\lambda\subseteq M^\lambda$ of the $S_n$-submodule [F7] gives a linear map $\theta_u|_{S^\lambda}:S^\lambda\to M^\mu$ with $\theta_u(\gamma\cdot e)=\gamma\cdot\theta_u(e)$ for $e\in S^\lambda$ and $\gamma\in S_n$ by step 6.1, that is, a homomorphism of $S_n$-modules; if $u=T$ is semistandard of content $\mu$ by [F6], this is the map $\theta_T$ of the Statement, whose value on $\{t\}$ is the row-orbit sum $\sum_{v\in R_t\cdot T}v$ of step 4.1, and no nonvanishing of $\theta_T|_{S^\lambda}$ is asserted. [F6, F7, step 4.1, step 6.1, discharge-construct] ∎

## Remarks

- **The map depends only on the row class.** If $u'=\rho\cdot u$ for some
  $\rho\in R_t$, then $R_t\cdot u'=R_t\cdot u$, so $\theta_{u'}=\theta_u$ by
  step 4.1. The construction therefore attaches a homomorphism to each
  $R_t$-orbit of fillings of content $\mu$, in agreement with the source's
  "sum of all members row equivalent to $s$"
  ([[def-row-and-column-stabilizers-of-a-tableau]]).

- **Dependence on the reference tableau.** A different reference tableau
  $t'=\pi\cdot t$ produces the conjugate orbit sum and the same
  $\theta$ up to the identification $M^\mu\to M^\mu$ it induces; the
  homomorphisms relevant below are attached to semistandard fillings of a
  fixed reference tableau, which is all that is used.

- **The empty and singleton cases.** For $n=0$ we have
  $\lambda=\mu=\varnothing$, the only filling is empty, $R_t=\{1\}$, and
  $\theta$ is the identity $\mathbb C\to\mathbb C$. For $n=1$,
  $\lambda=\mu=(1)$, again $R_t=\{1\}$ and $\theta$ is the identity.

- **No choice.** The orbit sum is a finite sum over the finite group $R_t$,
  and the linear extension uses the tabloid basis of [F1]; no selection
  principle is used.
